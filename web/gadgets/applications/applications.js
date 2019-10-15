define([
    'jquery.plugins',
    'handlebars-helpers',
    'framework/framework',
    'common/formatter',
    'widgets/zazGrid/zazGrid',
    'widgets/zazOverlay/zazOverlay',
    'css!gadgets/applications/applications'
], function ($,
    HBS,
    framework,
    formatter,
    zazGrid,
    zazOverlay) {


    return $.widget('zaz.applications', framework.baseGadget, {
        pageSize: 25,
        defaultConfig: [],
        config: [],
        data: {
            all: [],
            active: [],
            posted: [],
            completed: [],
            review: [],
            approve: []
        },
        filter: 'all',

        _create: function () {
            this._super();
            this._renderLayout();
            this._loadData();
            this._bindListeners();
        },

        _bindListeners: function () {
            var context = this;

            this.element.off('click', '.delete-apps');
            this.element.on('click', '.delete-apps', function () {
                framework.serviceManager.exec({
                    service: 'applications.delete',
                    params: {
                        userId: window.USERID
                    },
                    success: function () {
                        context._getData();
                    },
                    type: 'DELETE'
                });
            });

            this.element.off('click', '.create-app');
            this.element.on('click', '.create-app', function () {
                var $overlay = $('.zaz-overlay.create-application').length ?
                    $('.zaz-overlay.create-application') :
                    $(HBS['gadgets/applications/createOverlay']({
                        title: 'Create Application',
                        main: true
                    })).appendTo(document.body);

                framework.serviceManager.exec({
                    service: 'users.get.data',
                    success: function (response) {
                        var reviewers = response.filter(function (user) {
                                return window.USERID !== user.userId.toString() && user.role === 'user';
                            }),
                            approvers = response.filter(function (user) {
                                return window.USERID !== user.userId.toString() && user.role === 'admin';
                            });

                        $overlay.find('.reviewers select').html(HBS['gadgets/applications/createOverlay']({
                            list: true,
                            items: reviewers
                        }));
                        $overlay.find('.approvers select').html(HBS['gadgets/applications/createOverlay']({
                            list: true,
                            items: approvers
                        }));
                        $overlay.off('click', '.cancel');
                        $overlay.on('click', '.cancel', function () {
                            $overlay.zazOverlay('close');
                        });
                        $overlay.off('click', '.ok');
                        $overlay.on('click', '.ok', function () {
                            framework.serviceManager.exec({
                                service: 'applications.post.create',
                                type: 'POST',
                                params: {
                                    userId: framework.cookieManager.read('userId'),
                                    reviewer: $overlay.find('.reviewers select').val(),
                                    approver: $overlay.find('.approvers select').val()
                                },
                                success: function () {
                                    $overlay.zazOverlay('close');
                                }
                            });
                        });
                        $overlay.zazOverlay({
                            title: 'Create Application'
                        });
                    },
                    error: function () {}
                });
            });

            this.element.off('click', '.review-app');
            this.element.on('click', '.review-app', function () {
                var appnum = $(this).closest('tr').attr('data-id');

                framework.serviceManager.exec({
                    service: 'applications.post.review',
                    params: {
                        appnum: appnum,
                        userId: framework.cookieManager.read('userId')
                    },
                    success: function () {
                        context._getData();
                    },
                    type: 'POST'
                });
            });

            this.element.off('click', '.approve-app');
            this.element.on('click', '.approve-app', function () {
                var appnum = $(this).closest('tr').attr('data-id');

                framework.serviceManager.exec({
                    service: 'applications.post.approve',
                    params: {
                        appnum: appnum,
                        userId: framework.cookieManager.read('userId')
                    },
                    success: function () {
                        context._getData();
                    },
                    type: 'POST'
                });
            });

            this.element.off('click', '.filter');
            this.element.on('click', '.filter', function () {
                var $filters = context.element.find('.filters .filter'),
                    strFilter = $(this).attr('data-filter'),
                    $grid = context.element.find('.grid');

                if ($(this).hasClass('active')) {
                    return true;
                }

                $filters.removeClass('active');
                $(this).addClass('active');
                context.filter = strFilter;

                if ($grid.zazGrid('instance')) {
                    $grid.zazGrid('setData', context.data[strFilter]);
                }
            });

            this.element.off('click', '.viewlink');
            this.element.on('click', '.viewlink', function (e) {
                var strViewerId = $(this).attr('data-viewerid'),
                    options;

                options = {
                    viewer: 'viewer',
                    params: {
                        viewerid: strViewerId
                    },
                    tab: (e.ctrlKey || e.keyCode === framework.KEYS.SPACE)
                };
                framework.windowManager.openViewer(options);
            });

            this.element.off('keyup', '.viewlink');
            this.element.on('keyup', '.viewlink', function (e) {
                if ((e.keyCode === framework.KEYS.SPACE || e.keyCode === framework.KEYS.zaz) &&
                    !e.shiftKey) {
                    $(this).trigger('click');
                }
            });
        },

        _receiveMessage: function (e) {
            var message = e.message,
                options = message.options;

            switch (message.action) {
                case 'MESSAGE-server-message':
                    switch (options.action) {
                        case 'created':
                        case 'reviewed':
                        case 'approved':
                            this._newItem = options.data.id;
                            this._getData();
                            break;
                        case 'deleted':
                            this._getData();
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
        },

        _renderLayout: function () {

            var strHtml = HBS['gadgets/applications/applications']({
                items: framework.languageManager.translations()
            });
            this.element.append(strHtml);
            this.$controls = this.element.find('.controls');
            this.$grid = this.element.find('.grid');
        },

        _loadData: function () {
            var context = this;

            this.showLoader();
            this._getConfig().done(function () {
                context._applyPreferences();
                context._modifyColumns();
                context._getData(true);
            });
        },

        _getConfig: function () {
            var context = this;

            function errorConfigResponse(response, textStatus) {
                context.$grid.html('<div class="message error">' + textStatus + '</div>');
            }

            function getConfigResponse(response) {
                context.defaultConfig = response;
            }

            return framework.serviceManager.exec({
                service: 'applications.get.config',
                success: getConfigResponse,
                error: errorConfigResponse
            }).always(function () {
                context.hideLoader();
            });
        },

        _getData: function (blnInitialLoad) {
            var context = this;

            function errorDataResponse(response, textStatus) {
                context.$grid.html('<div class="message error">' + textStatus + '</div>');
            }

            function getDataResponse(response) {
                context._filterData(response);
                $.each(context.data.all, function (i, row) {
                    row.createdTime = row.created.time;
                    row.reviewedTime = row.reviewed.time;
                    row.approvedTime = row.approved.time;
                    row.createdByKey = row.created.firstName + ' ' + row.created.lastName;
                    row.reviewedByKey = row.reviewed.firstName + ' ' + row.reviewed.lastName;
                    row.approvedByKey = row.approved.firstName + ' ' + row.approved.lastName;
                });
                context._renderData();
                context._updateCounts(blnInitialLoad);
            }

            return framework.serviceManager.exec({
                service: 'applications.get.data',
                success: getDataResponse,
                error: errorDataResponse
            }).always(function () {
                context.hideLoader();
            });
        },

        _renderData: function () {
            var context = this,
                $newItem;

            if (this._grid) {
                context.$grid.zazGrid('setData', this.data[this.filter]);
                return true;
            }

            context.$grid.zazGrid({
                data: this.data[context.filter],
                columns: this.config,
                defaultColumns: this.defaultConfig,
                columnPicker: true,
                multiSort: true,
                mode: 'grid',
                pages: {
                    enabled: true,
                    size: this.pageSize || 25
                },
                view: {
                    grid: {
                        height: 30
                    },
                    tile: {
                        height: 185,
                        itemsPerRow: 2
                    }
                },
                'on-renderdata': function () {
                    $newItem = context.$grid.find('tr[data-id="' + context._newItem + '"]');
                    context._highlightItems($newItem);
                },
                'on-pagesize': function (e, data) {
                    context._setPageSize(data);
                },
                'on-columnchange': function (e, data) {
                    context._setConfig(data);
                }
            });
            this._grid = context.$grid.zazGrid('instance');
        },

        _filterData: function (data) {
            var context = this;
            data = data.filter(function (app) {
                return [app.created.userId.toString(), app.reviewed.userId.toString(), app.approved.userId.toString()].indexOf(window.USERID) > -1;
            });

            context.data.all = data;
            context.data.active = [];
            context.data.posted = [];
            context.data.completed = [];
            context.data.review = [];
            context.data.approve = [];

            $.each(data, function (i, dataSet) {
                var types = context._getAppType(dataSet);
                $.each(types, function (i, type) {
                    context.data[type].push(dataSet);
                });
            });
        },

        _updateCounts: function (blnInitialLoad) {
            var context = this,
                count, $count;

            // update counts
            $.each(this.data, function (filter, dataArr) {
                $count = context.element.find('.filters .filter[data-filter="' + filter + '"] .count');
                count = parseInt($count.html());
                if (!blnInitialLoad && dataArr.length !== count) {
                    context._highlightItems($count);
                }
                context.element.find('.filters .filter[data-filter="' + filter + '"] .count').html(dataArr.length);
            });
        },

        _modifyColumns: function () {
            $.each(this.config, function (i, column) {
                switch (column.id) {
                    case 'id':
                        column.formatter = function (data) {
                            return '<div class="viewlink" tabindex="0" data-viewerid="' + data[column.id] + '">' + data[column.id] + '</div>';
                        };
                        break;
                    case 'createdTime':
                    case 'reviewedTime':
                        column.formatter = function (data) {
                            if (data.reviewed.userId.toString() === window.USERID.toString()) {
                                return data[column.id] ? new Date(data[column.id]).toLocaleString() : 'N/A<button class="review-app">Mark as reviewed</button>';
                            } else {
                                return data[column.id] ? new Date(data[column.id]).toLocaleString() : 'N/A';
                            }
                        };
                        break;
                    case 'approvedTime':
                        column.formatter = function (data) {
                            var showApproveButton = data.approved.userId.toString() === window.USERID.toString() && data.reviewed.time;
                            if (showApproveButton) {
                                return data[column.id] ? new Date(data[column.id]).toLocaleString() : 'N/A<button class="approve-app">Mark as approved</button>';
                            } else {
                                return data[column.id] ? new Date(data[column.id]).toLocaleString() : 'N/A';
                            }
                        };
                        break;
                    case 'created':
                        column.key = 'createdByKey';
                        column.formatter = function (data) {
                            return data[column.id].firstName + ' ' + data[column.id].lastName;
                        };
                        break;
                    case 'reviewed':
                        column.key = 'reviewedByKey';
                        column.formatter = function (data) {
                            return data[column.id].firstName + ' ' + data[column.id].lastName;
                        };
                        break;
                    case 'approved':
                        column.key = 'approvedByKey';
                        column.formatter = function (data) {
                            return data[column.id].firstName + ' ' + data[column.id].lastName;
                        };
                        break;
                    default:
                        break;
                }
            });
        },

        _highlightItems: function ($newItems) {
            setTimeout(function () {
                $newItems.addClass('new');
                setTimeout(function () {
                    $newItems.removeClass('new');
                }, 2000);
            });
        },

        _getAppType: function (app) {
            var createdId = app.created.userId.toString(),
                reviewedId = app.reviewed.userId.toString(),
                approvedId = app.approved.userId.toString(),
                status = app.approved.time ? 'completed' : (app.reviewed.time ? 'posted' : 'active'),
                result = [];

            result.push(status);

            if (status === 'active' && createdId !== window.USERID) {
                result.pop();
            }

            if (reviewedId === window.USERID && !app.reviewed.time) {
                result.push('review');
            }

            if (approvedId === window.USERID && !app.approved.time) {
                result.push('approve');
            }

            return result;
        },

        _parseDate: function (strDate) {
            var d, t;
            strDate = strDate.split(' ');
            d = strDate[0].split('-');
            t = strDate[1].split(':');
            return new Date(d[0], (d[1] - 1), d[2], t[0], t[1], t[2]);
        },

        _setConfig: function (data) {
            this.preferences.config = data.columns;
            this.setPreferences();
        },

        _setPageSize: function (data) {
            this.preferences.pageSize = data.pageSize;
            this.setPreferences();
        },

        _applyPreferences: function () {
            var intPageSize = this.preferences.pageSize || this.pageSize;
            var config = this.preferences.config || this.defaultConfig;

            this.pageSize = intPageSize;
            this.config = config;
        }
    });
});