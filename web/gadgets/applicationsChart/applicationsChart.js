define([
    'jquery.plugins',
    'handlebars-helpers',
    'common/formatter',
    'framework/framework',
    'highcharts',
    'highcharts-3d',
    'highcharts-drag3d',
    'css!gadgets/applicationsChart/applicationsChart'
], function ($,
    HBS,
    formatter,
    framework,
    Highcharts) {


    return $.widget('zaz.applicationsChart', framework.baseGadget, {
        options: {
            config: [],
            data: {
                'active': [],
                'review': [],
                'approved': [],
                'all': []
            }
        },
        view: 'columns',

        _resize: function () {
            if (this.chart) {
                this.chart.setSize(null, null);
            }
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
            var strHtml = HBS['gadgets/applicationsChart/applicationsChart']({
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
                context.options.data.all = response;
                context._filterData(response);
                context._processData();
                context._processChartData();
                context._updateChartData();
            }

            return framework.serviceManager.exec({
                service: 'applications.get.data',
                params: {
                    userId: window.USERID
                },
                success: getDataResponse,
                error: errorDataResponse
            }).always(function () {
                context.hideLoader();
            });
        },

        _updateData: function (app) {
            var added = false,
                index;
            $.each(this.options.data.all, function (i, dataSet) {
                if (dataSet.id === app.id) {
                    added = true;
                    index = i;
                    return false;
                }
            });

            if (added) {
                this.options.data.all[index] = app;
            } else {
                this.options.data.all.push(app);
            }
        },

        _filterData: function () {
            var context = this;

            this.options.data.review = [];
            this.options.data.approved = [];
            this.options.data.active = [];

            $.each(this.options.data.all, function (i, dataSet) {
                var reviewedId = dataSet.reviewed.userId.toString(),
                    approvedId = dataSet.approved.userId.toString(),
                    status = dataSet.approved.time ? 'completed' : (dataSet.reviewed.time ? 'posted' : 'active');

                // group by filters

                context.options.data[status].push(dataSet);

                if (reviewedId === window.USERID && !dataSet.reviewed.time) {
                    context.options.data.review.push(dataSet);
                }

                if (approvedId === window.USERID && !dataSet.approved.time) {
                    context.options.data.approve.push(dataSet);
                }
            });
        },

        _processData: function () {
            var filters = ['active', 'review', 'approved', 'all'],
                columnsData = {},
                pieData = {
                    '0-10 series': 0,
                    '20-30 series': 0,
                    '40-50 series': 0,
                    '60-70 series': 0,
                    '80-90 series': 0
                },
                context = this;

            $.each(this.options.data, function (filter, data) {
                var name = filter[0].toUpperCase() + filter.slice(1);
                i
                if (filters.indexOf(filter) === -1) {
                    return true;
                }

                columnsData[name] = {
                    '0 - 10': context._getSeries(data, [0, 20]),
                    '20 - 30': context._getSeries(data, [20, 40]),
                    '40 - 50': context._getSeries(data, [40, 60]),
                    '60 - 70': context._getSeries(data, [60, 80]),
                    '80 - 90': context._getSeries(data, [80, 100])
                };
            });

            pieData['0-10 series'] += context._getSeries(this.options.data.all, [0, 20]);
            pieData['20-30 series'] += context._getSeries(this.options.data.all, [20, 40]);
            pieData['40-50 series'] += context._getSeries(this.options.data.all, [40, 60]);
            pieData['60-70 series'] += context._getSeries(this.options.data.all, [60, 80]);
            pieData['80-90 series'] += context._getSeries(this.options.data.all, [80, 100]);

            this.columnsData = columnsData;
            this.pieData = pieData;
        },

        _processChartData: function () {
            var context = this,
                seriesColumns = [{
                        name: '0 - 10 series',
                        data: [],
                        stack: '0 - 50'
                    },
                    {
                        name: '20 - 30 series',
                        data: [],
                        stack: '0 - 50'
                    },
                    {
                        name: '40 - 50 series',
                        data: [],
                        stack: '0 - 50'
                    },
                    {
                        name: '60 - 70 series',
                        data: [],
                        stack: '60 - 90'
                    },
                    {
                        name: '80 - 90 series',
                        data: [],
                        stack: '60 - 90'
                    }
                ],
                seriesPie = [{
                    type: 'pie',
                    name: 'Share from all applications',
                    data: []
                }];

            $.each(this.columnsData, function (filter, columnData) {
                seriesColumns[0].data.push(columnData['0 - 10']);
                seriesColumns[1].data.push(columnData['20 - 30']);
                seriesColumns[2].data.push(columnData['40 - 50']);
                seriesColumns[3].data.push(columnData['60 - 70']);
                seriesColumns[4].data.push(columnData['80 - 90']);
            });

            $.each(this.pieData, function (filter, appCount) {
                var percentage = appCount / context.options.data.all.length * 100,
                    part = parseFloat(percentage.toFixed(2));
                seriesPie[0].data.push([filter, part]);
            });
            this.seriesColumns = seriesColumns;
            this.seriesPie = seriesPie;
        },

        _getSeries: function (data, series) {
            var result = 0;

            $.each(data, function (i, dataSet) {
                var appSeries = parseInt(dataSet.id.substring(0, 2));

                if (appSeries >= series[0] && appSeries < series[1]) {
                    result++;
                }
            });
            return result;
        },

        _renderData: function () {
            var context = this,
                columns = {
                    chart: {
                        type: 'column',
                        options3d: {
                            enabled: true,
                            alpha: 15,
                            beta: 15,
                            viewDistance: 40,
                            depth: 45,
                            drag: {
                                enabled: true,
                                flipAxes: true,
                                snap: 15,
                                animateSnap: true
                            },
                        }
                    },
                    title: {
                        text: 'Applications by workflow'
                    },

                    xAxis: {
                        categories: Object.keys(context.columnsData)
                    },

                    yAxis: {
                        allowDecimals: false,
                        min: 0,
                        title: {
                            text: 'Number of applications'
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
                            beta: 0,
                             drag: {
                                enabled: true,
                                flipAxes: true,
                                snap: 15,
                                animateSnap: true
                            },
                        }
                    },
                    title: {
                        text: 'All applications'
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

            Highcharts.theme = {
                colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
                    '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'
                ],
                chart: {
                    backgroundColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 1,
                            y2: 1
                        },
                        stops: [
                            [0, '#2a2a2b'],
                            [1, '#3e3e40']
                        ]
                    },
                    style: {
                        fontFamily: '\'Unica One\', sans-serif'
                    },
                    plotBorderColor: '#606063'
                },
                title: {
                    style: {
                        color: '#E0E0E3',
                        textTransform: 'uppercase',
                        fontSize: '20px'
                    }
                },
                subtitle: {
                    style: {
                        color: '#E0E0E3',
                        textTransform: 'uppercase'
                    }
                },
                xAxis: {
                    gridLineColor: '#707073',
                    labels: {
                        style: {
                            color: '#E0E0E3'
                        }
                    },
                    lineColor: '#707073',
                    minorGridLineColor: '#505053',
                    tickColor: '#707073',
                    title: {
                        style: {
                            color: '#A0A0A3'

                        }
                    }
                },
                yAxis: {
                    gridLineColor: '#707073',
                    labels: {
                        style: {
                            color: '#E0E0E3'
                        }
                    },
                    lineColor: '#707073',
                    minorGridLineColor: '#505053',
                    tickColor: '#707073',
                    tickWidth: 1,
                    title: {
                        style: {
                            color: '#A0A0A3'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    style: {
                        color: '#F0F0F0'
                    }
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            color: '#B0B0B3'
                        },
                        marker: {
                            lineColor: '#333'
                        }
                    },
                    boxplot: {
                        fillColor: '#505053'
                    },
                    candlestick: {
                        lineColor: 'white'
                    },
                    errorbar: {
                        color: 'white'
                    }
                },
                legend: {
                    itemStyle: {
                        color: '#E0E0E3'
                    },
                    itemHoverStyle: {
                        color: '#FFF'
                    },
                    itemHiddenStyle: {
                        color: '#606063'
                    }
                },
                credits: {
                    style: {
                        color: '#666'
                    }
                },
                labels: {
                    style: {
                        color: '#707073'
                    }
                },

                drilldown: {
                    activeAxisLabelStyle: {
                        color: '#F0F0F3'
                    },
                    activeDataLabelStyle: {
                        color: '#F0F0F3'
                    }
                },

                navigation: {
                    buttonOptions: {
                        symbolStroke: '#DDDDDD',
                        theme: {
                            fill: '#505053'
                        }
                    }
                },

                // scroll charts
                rangeSelector: {
                    buttonTheme: {
                        fill: '#505053',
                        stroke: '#000000',
                        style: {
                            color: '#CCC'
                        },
                        states: {
                            hover: {
                                fill: '#707073',
                                stroke: '#000000',
                                style: {
                                    color: 'white'
                                }
                            },
                            select: {
                                fill: '#000003',
                                stroke: '#000000',
                                style: {
                                    color: 'white'
                                }
                            }
                        }
                    },
                    inputBoxBorderColor: '#505053',
                    inputStyle: {
                        backgroundColor: '#333',
                        color: 'silver'
                    },
                    labelStyle: {
                        color: 'silver'
                    }
                },

                navigator: {
                    handles: {
                        backgroundColor: '#666',
                        borderColor: '#AAA'
                    },
                    outlineColor: '#CCC',
                    maskFill: 'rgba(255,255,255,0.1)',
                    series: {
                        color: '#7798BF',
                        lineColor: '#A6C7ED'
                    },
                    xAxis: {
                        gridLineColor: '#505053'
                    }
                },

                scrollbar: {
                    barBackgroundColor: '#808083',
                    barBorderColor: '#808083',
                    buttonArrowColor: '#CCC',
                    buttonBackgroundColor: '#606063',
                    buttonBorderColor: '#606063',
                    rifleColor: '#FFF',
                    trackBackgroundColor: '#404043',
                    trackBorderColor: '#404043'
                },

                // special colors for some of the
                legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
                background2: '#505053',
                dataLabelsColor: '#B0B0B3',
                textColor: '#C0C0C0',
                contrastTextColor: '#F0F0F3',
                maskColor: 'rgba(255,255,255,0.3)'
            };

            // Apply the theme
            Highcharts.setOptions(Highcharts.theme);
            this.chart = Highcharts.chart($('.chart.' + this.element.attr('data-gadgetid'))[0], this.view === 'columns' ? columns : pie);
        },

        _updateChartData: function () {
            var context = this;

            if (!this.chart) {
                return false;
            }

            if (this.view === 'pie') {
                this.chart.series[0].setData(this.seriesPie[0].data);
                return true;
            }

            $.each(this.chart.series, function (i) {
                context.chart.series[i].setData(context.seriesColumns[i].data);
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