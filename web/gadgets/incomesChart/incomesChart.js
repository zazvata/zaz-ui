define([
    'jquery.plugins',
    'handlebars-helpers',
    'common/formatter',
    'framework/framework',
    'highcharts',
    'highcharts-3d',
    'css!gadgets/incomesChart/incomesChart'
], function ($,
    HBS,
    formatter,
    framework,
    Highcharts) {


    return $.widget('zaz.incomesChart', framework.baseGadget, {
        options: {
            config: [],
            data: []
        },
        view: 'columns',
        filter: 'all',
        yearMap: {
            '< 2015': 'Before 2015',
            '2015 - 2016': '2015 - 2016',
            '> 2016': '2016 - present',
            'all': 'All time'
        },

        _resize: function () {
            if (this.chart) {
                this.chart.setSize(null, null);
            }
        },

        _receiveMessage: function (e) {
            var message = e.message;

            switch (message.action) {
                case 'MESSAGE-grid-data':
                    this.filter = message.text;
                    this._processData();
                    this._processChartData();
                    this._updateChartData();
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
            this._resize();
        },

        _bindListeners: function () {
            var context = this;

            this.element.off('click', '.knob');
            this.element.on('click', '.knob', function () {
                var strView = $(this).attr('data-view');

                if ($(this).hasClass('active')) {
                    return true;
                }
                context.view = strView;
                context._setView();
                context._renderData();
            });
        },

        _renderLayout: function () {
            var strHtml = HBS['gadgets/incomesChart/incomesChart']({
                items: framework.languageManager.translations()
            });
            this.element.append(strHtml);

            this.$chart = this.element.find('.chart');
            this.$chart.addClass(this.element.attr('data-gadgetid'));
            this._applyPreferences();
        },

        _loadData: function () {
            var deferred = $.Deferred(),
                context = this,
                strView = 'columns';

            this.showLoader();

            this.view = this.view || strView;
            context._getData().done(function () {
                context._renderData();
                deferred.resolve();
            });

            return deferred.promise();
        },

        _getData: function (blnLoadData) {
            var context = this;

            function errorDataResponse(response, textStatus, errorThrown) {
                context.$chart.html('<div class="message error">' + textStatus + '</div>');
            }

            function getDataResponse(response) {
                context._filterData(response);
                context._processData();
                context._processChartData();
            }

            return framework.serviceManager.exec({
                service: 'incomes.get.data',
                success: getDataResponse,
                error: errorDataResponse
            }).always(function () {
                context.hideLoader();
            });
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
        },

        _parseDate: function (strDate) {
            return new Date(strDate);
        },

        _processData: function () {
            var columnsData = {},
                pieData = {},
                context = this;

            context.overallIncome = 0;
            $.each(this.options.data[this.filter], function (i, dataSet) {
                columnsData[dataSet.country] = columnsData[dataSet.country] || {
                    '< 2500': 0,
                    '2501 - 5000': 0,
                    '5000 - 7500': 0,
                    '> 7500': 0
                };
                pieData[dataSet.country] = pieData[dataSet.country] || 0;

                if (dataSet.price <= 2500) {
                    columnsData[dataSet.country]['< 2500']++;
                }
                if (dataSet.price > 2500 && dataSet.price <= 5000) {
                    columnsData[dataSet.country]['2501 - 5000']++;
                }
                if (dataSet.price > 5000 && dataSet.price <= 7500) {
                    columnsData[dataSet.country]['5000 - 7500']++;
                }
                if (dataSet.price > 7500 && dataSet.price <= 10000) {
                    columnsData[dataSet.country]['> 7500']++;
                }
                context.overallIncome += dataSet.price;
                pieData[dataSet.country] += dataSet.price;
            });

            this.columnsData = columnsData;
            this.pieData = pieData;
        },

        _processChartData: function () {
            var context = this,
                countries = Object.keys(this.columnsData).sort(),
                seriesColumns = [{
                        name: '< 2500$',
                        data: [],
                        stack: '< 5000$'
                    },
                    {
                        name: '2501$ - 5000$',
                        data: [],
                        stack: '< 5000$'
                    },
                    {
                        name: '2501$ - 5000$',
                        data: [],
                        stack: '> 7501$'
                    },
                    {
                        name: '> 7500$',
                        data: [],
                        stack: '> 7501$'
                    }
                ],
                seriesPie = [{
                    type: 'pie',
                    name: 'Income share',
                    data: []
                }];

            $.each(countries, function (i, country) {
                seriesColumns[0].data.push(context.columnsData[country]['< 2500']);
                seriesColumns[1].data.push(context.columnsData[country]['2501 - 5000']);
                seriesColumns[2].data.push(context.columnsData[country]['5000 - 7500']);
                seriesColumns[3].data.push(context.columnsData[country]['> 7500']);
            });

            $.each(this.pieData, function (country, income) {
                var percentage = income / context.overallIncome * 100,
                    part = parseFloat(percentage.toFixed(2));
                seriesPie[0].data.push([country, part]);
            });
            this.seriesColumns = seriesColumns;
            this.seriesPie = seriesPie;
        },

        _renderData: function () {
            var columns = {
                    chart: {
                        type: 'column',
                        options3d: {
                            enabled: true,
                            alpha: 15,
                            beta: 15,
                            viewDistance: 40,
                            depth: 45
                        }
                    },
                    title: {
                        text: 'Gross income for period, grouped by contribution'
                    },
                    subtitle: {
                        text: this.yearMap[this.filter],
                        style: {
                            'font-size': '14pt',
                            'font-weight': 'bold'
                        }
                    },

                    xAxis: {
                        categories: Object.keys(this.columnsData).sort()
                    },

                    yAxis: {
                        allowDecimals: false,
                        min: 0,
                        title: {
                            text: 'Number of sales'
                        }
                    },

                    tooltip: {
                        headerFormat: '<b>{point.key}</b><br>',
                        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
                    },

                    plotOptions: {
                        column: {
                            stacking: 'normal',
                            depth: 40
                        }
                    },
                    series: this.seriesColumns
                },
                pie = {
                    chart: {
                        type: 'pie',
                        options3d: {
                            enabled: true,
                            alpha: 45,
                            beta: 0
                        }
                    },
                    title: {
                        text: 'Gross income for period'
                    },
                    subtitle: {
                        text: this.yearMap[this.filter],
                        style: {
                            'font-size': '14pt',
                            'font-weight': 'bold'
                        }
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            depth: 35,
                            dataLabels: {
                                enabled: true,
                                format: '{point.name}'
                            }
                        }
                    },
                    series: this.seriesPie
                };

            this.element.find('.knobs .knob').removeClass('active');
            this.element.find('.knobs .knob[data-view="' + this.view + '"]').addClass('active');

            this.chart = Highcharts.chart($('.chart.' + this.element.attr('data-gadgetid'))[0], this.view === 'columns' ? columns : pie);
        },

        _updateChartData: function () {
            var context = this;

            if (!this.chart) {
                return false;
            }

            if (this.view === 'pie') {
                this.chart.series[0].setData(this.seriesPie[0].data);
                this.chart.setTitle(null, {
                    text: this.yearMap[this.filter]
                });
                return true;
            }

            $.each(this.chart.series, function (i) {
                context.chart.series[i].setData(context.seriesColumns[i].data);
            });

            this.chart.setTitle(null, {
                text: this.yearMap[this.filter]
            });
        },

        _setView: function () {
            this.element.find('.knobs .knob').removeClass('active');
            this.element.find('.knobs .knob[data-view="' + this.view + '"]').addClass('active');

            this.preferences.view = this.view;
            this.setPreferences();
        },

        _applyPreferences: function () {
            var strView = this.preferences.view || this.view;

            this.view = strView;
            this.element.find('.knobs .knob').removeClass('active');
            this.element.find('.knobs .knob[data-view="' + this.view + '"]').addClass('active');
        }
    });
});