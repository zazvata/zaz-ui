define([
    'jquery.plugins',
    'handlebars-helpers',
    'framework/framework',
    'common/formatter',
    'widgets/zazGrid/zazGrid',
    'css!gadgets/incomes/incomes'
], function ($,
    HBS,
    framework,
    formatter,
    zazGrid
    ) {


    return $.widget('zaz.incomes', framework.baseGadget, {
        options: {
            config: [],
            data: {}
        },
        filter: 'all',

        _receiveMessage: function (e) {
            var message = e.message;
            switch (message.action) {
                case 'sample-message':
                    break;
                default:
                    break;
            }
        },

        _create: function () {
            this._super();
            this._renderLayout();
            this._loadData();
            this._bindListeners();
        },

        _bindListeners: function () {
            var context = this;

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
                    $grid.zazGrid('setData', context.options.data[strFilter]);
                }

                framework.messageManager.send({
                    action: 'MESSAGE-grid-data',
                    text: strFilter
                });
            });
        },

        _renderLayout: function () {

            var strHtml = HBS['gadgets/incomes/incomes']({
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
                context._modifyColumns();
                context._getData();
            });
        },

        _getConfig: function () {
            var context = this;

            function errorConfigResponse(response, textStatus) {
                context.$grid.html('<div class="message error">' + textStatus + '</div>');
            }

            function getConfigResponse(response) {
                context.options.config = response.data;
            }

            return framework.serviceManager.exec({
                service: 'incomes.get.config',
                success: getConfigResponse,
                error: errorConfigResponse
            }).always(function () {
                context.hideLoader();
            });
        },

        _getData: function () {
            var context = this;

            function errorDataResponse(response, textStatus) {
                context.$grid.html('<div class="message error">' + textStatus + '</div>');
            }

            function getDataResponse(response) {
                context._filterData(response);
                // $.each(context.options.data['all'], function (i, dataSet) {
                //     dataSet.id = dataSet.email;
                // });
                context._renderData();
            }

            return framework.serviceManager.exec({
                service: 'incomes.get.data',
                success: getDataResponse,
                error: errorDataResponse
            }).always(function () {
                context.hideLoader();
            });
        },

        _renderData: function () {
            var context = this;

            context.$grid.zazGrid({
                data: this.options.data[context.filter],
                columns: this.options.config,
                search: {
                    enabled: true
                },
                pages: {
                    enabled: true,
                    position: 'bottom'
                },
                pageSize: 50
            });
            
            this._grid = context.$grid.zazGrid('instance');
        },

        _filterData: function (data) {
            var context = this;

            this.options.data['all'] = data;
            this.options.data['< 2015'] = [];
            this.options.data['2015 - 2016'] = [];
            this.options.data['> 2016'] = [];

            $.each(data, function (i, dataSet) {
                var year = context._parseDate(dataSet.submitted).getFullYear();
                year = year < 1990 ? year += 1900 : year;

                if (year < 2015) {
                    context.options.data['< 2015'].push(dataSet);
                    return true;
                }

                if (year >= 2015 && year <= 2016) {
                    context.options.data['2015 - 2016'].push(dataSet);
                    return true;
                }

                if (year > 2016) {
                    context.options.data['> 2016'].push(dataSet);
                    return true;
                }
            });

            // update counts
            $.each(this.options.data, function (filter, dataArr) {
                context.element.find('.filters .filter[data-filter="' + filter + '"] .count').html(dataArr.length);
            });
        },

        _modifyColumns: function () {
            $.each(this.options.config, function (i, column) {
                switch (column.id) {
                    case 'submitted':
                        column.formatter = function (data) {
                            return formatter.dateFormat.formatDate(data[column.id], 'MM/DD/YYYY hh:mm:ss A');
                        };
                        break;
                    default:
                        break;
                }
            });
        },

        _parseDate: function (strDate) {
            return new Date(strDate);
        }
    });
});