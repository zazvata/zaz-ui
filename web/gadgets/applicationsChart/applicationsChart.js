define([
    'jquery.plugins',
    'handlebars-helpers',
    'common/formatter',
    'framework/framework',
    'highcharts',
    'highcharts-themes',
    'highcharts-3d',
    'highcharts-drag3d',
    'css!gadgets/applicationsChart/applicationsChart'
], function ($,
    HBS,
    formatter,
    framework,
    Highcharts,
    themes) {

    return $.widget('zaz.applicationsChart', framework.baseGadget, {
        data: {
            all: [],
            submitted: [],
            reviewed: [],
            approved: []
        },
        view: 'columns',
        theme: 'darkunica',

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
                        case 'submitted':
                        case 'reviewed':
                        case 'approved':
                        case 'deleted':
                            this._getData(true);
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

            this.element.off('click', '.knob.type');
            this.element.on('click', '.knob.type', function () {
                var strView = $(this).attr('data-view');

                if ($(this).hasClass('active')) {
                    return true;
                }
                context.view = strView;
                context._setView();
                context._renderData();
            });

            this.element.off('click', '.knob.theme');
            this.element.on('click', '.knob.theme', function () {
                context._showThemeMenu();
            });

        },

        _renderLayout: function () {
            var strHtml = HBS['gadgets/applicationsChart/applicationsChart']({
                main: true,
                items: framework.languageManager.translations()
            });
            this.element.append(strHtml);

            this.$chart = this.element.find('.chart');
            this.$chart.addClass(this.element.attr('data-gadgetid'));
            this._applyPreferences();
        },

        _loadData: function () {
            var context = this,
                strView = 'columns';

            this.showLoader();

            this.view = this.view || strView;
            context._getData(false).done(function () {
                context._renderData();
            });
        },

        _getData: function (blnUpdate) {
            var context = this;

            function error(response, textStatus, errorThrown) {
                context.$chart.html('<div class="message error">' + textStatus + '</div>');
            }

            function success(response) {
                context.data.all = response;
                context._populateAndFiterData();
                context._renderData(blnUpdate);
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

        _renderData: function (blnUpdate) {
            var columns, pie;

            if (blnUpdate) {
                this.chart.series[0].setData([{
                        name: "Submitted",
                        y: this.data.submitted.length
                    },
                    {
                        name: "Reviewed",
                        y: this.data.reviewed.length
                    },
                    {
                        name: "Approved",
                        y: this.data.approved.length
                    }
                ]);
                return true;
            }

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
                    text: 'Application(s) Status'
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    title: {
                        text: 'Number of Applications'
                    }

                },
                plotOptions: {
                    column: {
                        depth: 50
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> of ' + this.data.all.length + '<br/>'
                },
                series: [{
                    name: "Status",
                    colorByPoint: true,
                    data: [{
                            name: "Submitted",
                            y: this.data.submitted.length
                        },
                        {
                            name: "Reviewed",
                            y: this.data.reviewed.length
                        },
                        {
                            name: "Approved",
                            y: this.data.approved.length
                        }
                    ]
                }]
            };

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
                series: [{
                    name: "Status",
                    colorByPoint: true,
                    data: [{
                            name: "Submitted",
                            y: this.data.submitted.length
                        },
                        {
                            name: "Reviewed",
                            y: this.data.reviewed.length
                        },
                        {
                            name: "Approved",
                            y: this.data.approved.length
                        }
                    ]
                }]
            }
            this.chart = Highcharts.chart($('.chart.' + this.element.attr('data-gadgetid'))[0], this.view === 'columns' ? columns : pie);
            this.chart.reflow();
        },
        
        _showThemeMenu: function () {
            var context = this,
                strHtml;

            strHtml = HBS['gadgets/applicationsChart/applicationsChart']({
                thememenu: true
            });
            $('body').append(strHtml);

            $('.thememenu').zazMenu({
                'selector': this.element.find('.knob.theme'),
                useOffset: true,
                'item-click': function (e, data) {
                    context.theme = data.action;
                    context._setTheme();
                }
            });
        },

        _setTheme: function () {
            this.preferences.theme = this.theme;
            this.setPreferences();
            Highcharts.setOptions(themes[this.theme]);
            this._loadData();
        },

        _setView: function () {
            this.element.find('.knobs .knob').removeClass('active');
            this.element.find('.knobs .knob[data-view="' + this.view + '"]').addClass('active');

            this.preferences.view = this.view;
            this.setPreferences();
        },

        _applyPreferences: function () {
            this.view = this.preferences.view || this.view;
            this.theme = this.preferences.theme || this.theme;

            if (this.theme) {
                Highcharts.setOptions(themes[this.theme]);
            }

            this.element.find('.knobs .knob').removeClass('active');
            this.element.find('.knobs .knob[data-view="' + this.view + '"]').addClass('active');
        }
    });
});