define([
    'jquery.plugins',
    'handlebars-helpers',
    'framework/framework',
    'common/formatter',
    'gadgets/applications/applicationManager',
    'widgets/zazGrid/zazGrid',
    'widgets/zazOverlay/zazOverlay',
    'widgets/zazAlert/zazAlert',
    'css!gadgets/applications/applications'
], function ($,
    HBS,
    framework,
    formatter,
    applicationManager
) {
    return $.widget('zaz.applications', framework.baseGadget, {
        pageSize: 25,
        config: [],
        filter: 'all',
        data: {
            all: [],
            submitted: [],
            reviewed: [],
            approved: []
        },

        _create: function () {
            var context = this;
            this._super();

            this._getConfig().done(function () {
                context._applyPreferences();
                context._renderLayout();
                context._modifyColumns();
                context._getData();
                context._bindListeners();
            });
        },

        _bindListeners: function () {
            var context = this;

            this.element.off('click keyup', '.knobs .knob');
            this.element.on('click keyup', '.knobs .knob', function (e) {
                var strAction;
                if (e.type === 'click' || e.keyCode === framework.KEYS.ENTER || e.keyCode === framework.KEYS.SPACE) {
                    strAction = $(this).attr('data-action');
                    switch (strAction) {
                        case 'new-app':
                            applicationManager.show().then(function () {
                                context._getData();
                            });
                            break;
                        case 'delete-apps':
                            applicationManager.deleteAll().done(function () {
                                context._getData();
                            });
                            break;
                        default:
                            break;
                    }
                }
            });

            this.element.off('click keyup', '.filter');
            this.element.on('click keyup', '.filter', function (e) {
                var $filters,
                    strFilter,
                    $grid;

                if ($(this).hasClass('active')) {
                    return true;
                }

                if (e.type === 'click' || e.keyCode === framework.KEYS.ENTER || e.keyCode === framework.KEYS.SPACE) {
                    $filters = context.element.find('.filters .filter'),
                        strFilter = $(this).attr('data-filter'),
                        $grid = context.element.find('.grid');

                    $filters.removeClass('active');
                    $(this).addClass('active');
                    context.filter = strFilter;
                    context._setFilter(strFilter);

                    if ($grid.zazGrid('instance')) {
                        $grid.zazGrid('setData', context.data[strFilter]);
                    }
                }
            });

            this.element.off('click keyup', '.viewlink');
            this.element.on('click keyup', '.viewlink', function (e) {
                var strViewerId,
                    options;

                if (e.type === 'click' || e.keyCode === framework.KEYS.ENTER || e.keyCode === framework.KEYS.SPACE) {
                    strViewerId = $(this).attr('data-viewerid');
                    options = {
                        viewer: 'viewer',
                        params: {
                            viewerid: strViewerId
                        },
                        tab: (e.ctrlKey || e.keyCode === framework.KEYS.SPACE)
                    };
                    framework.windowManager.openViewer(options);
                }
            });

            this.element.off('click keyup', '.mark-action');
            this.element.on('click keyup', '.mark-action', function (e) {
                var strAppId;

                if (e.type === 'click' || e.keyCode === framework.KEYS.ENTER || e.keyCode === framework.KEYS.SPACE) {
                    strAppId = $(this).attr('data-appid');
                    strAction = $(this).attr('data-action');
                    context._markAction(strAppId, strAction);
                }
            });
        },

        _receiveMessage: function (e) {
            var message = e.message,
                options = message.options;

            switch (message.action) {
                case 'MESSAGE-server-message':
                    switch (options.action) {
                        case 'submitted':
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
                items: framework.languageManager.translations(),
                filter: this.filter
            });
            this.element.append(strHtml);
            this.$controls = this.element.find('.controls');
            this.$grid = this.element.find('.grid');
        },

        _getConfig: function () {
            var context = this;

            this.showLoader();

            function error(response, textStatus) {
                context.$grid.html('<div class="message error">' + textStatus + '</div>');
            }

            function success(response) {
                context.defaultConfig = response;
            }

            return framework.serviceManager.exec({
                service: 'applications.get.config',
                success: success,
                error: error
            }).always(function () {
                context.hideLoader();
            });
        },

        _getData: function () {
            var context = this;

            function error(response, textStatus) {
                context.$grid.html('<div class="message error">' + textStatus + '</div>');
            }

            function success(response) {
                context.data.all = response;
                context._populateAndFiterData();
                context._renderData();
            }

            return framework.serviceManager.exec({
                service: 'applications.get.data',
                params: {
                    userId: window.USERID
                },
                success: success,
                error: error
            }).always(function () {
                context.hideLoader();
            });
        },

        _markAction: function (strAppId, strAction) {
            var context = this,
                params = {};

            function error(response, textStatus) {
                zazAlert.show(returnElement, 'Error', 'There was an error!. Please retry later');
            }

            function success(response) {
                context._getData();
            }

            params = {
                userId: window.USERID,
                id: strAppId
            };

            framework.serviceManager.exec({
                service: 'applications.post.action',
                params: {
                    action: strAction
                },
                data: JSON.stringify(params),
                success: success,
                error: error,
                type: 'POST'
            });
        },

        _populateAndFiterData: function () {
            var context = this;

            //reset to empty
            this.data.approved = [];
            this.data.reviewed = [];
            this.data.submitted = [];

            $.each(this.data.all, function (i, row) {
                row.createdBy = (row.creator) ? row.creator.lastName + ', ' + row.creator.firstName : 'N/A';
                row.reviewedBy = (row.reviewer) ? row.reviewer.lastName + ', ' + row.reviewer.firstName : 'N/A';
                row.approvedBy = (row.approver) ? row.approver.lastName + ', ' + row.approver.firstName : 'N/A';

                if (row.approve_date) {
                    context.data.approved.push(row);
                } else if (row.review_date) {
                    context.data.reviewed.push(row);
                } else {
                    context.data.submitted.push(row);
                }
            });
        },

        _renderData: function () {
            var context = this,
                $newItem;

            this._updateCounts();

            if (this._grid) {
                this.$grid.zazGrid('setData', this.data[this.filter]);
                return true;
            }

            context.$grid.zazGrid({
                data: this.data[this.filter],
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
                            return '<div class="viewlink" tabindex="0" data-viewerid="' + data[column.id] + '">' +
                                data[column.id] + '</div>';
                        };
                        break;
                    case 'create_date':
                    case 'review_date':
                    case 'approve_date':
                        column.formatter = function (data) {
                            if (data[column.id]) {
                                return formatter.dateFormat.format(data[column.id], 'DD MMM YY');
                            } else {
                                return 'N/A';
                            }
                        };
                        break;
                    case 'action':
                        column.formatter = function (data) {
                            if (data.reviewer.userId === window.USERID && !data.review_date) {
                                return '<button class="mark-action mark-reviewed" data-action="review" data-appid="' + data.id + '">Review</button>';
                            }
                            if (data.approver.userId === window.USERID && !data.approve_date) {
                                return '<button class="mark-action mark-approved" data-action="approve" data-appid="' + data.id + '">Approve</button>';
                            }
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

        _setFilter: function (strFilter) {
            this.preferences.filter = strFilter;
            this.setPreferences();
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
            this.pageSize = this.preferences.pageSize || this.pageSize;
            this.config = this.preferences.config || this.defaultConfig;
            this.filter = this.preferences.filter || this.filter;
        }
    });
});