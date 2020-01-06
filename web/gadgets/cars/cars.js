define([
    'jquery.plugins',
    'handlebars-helpers',
    'framework/framework',
    'common/formatter',
    'widgets/zazGrid/zazGrid',
    'css!gadgets/cars/cars'
], function ($,
    HBS,
    framework,
    formatter) {

    return $.widget('zaz.cars', framework.baseGadget, {
        mode: 'grid',
        template: true,
        rows: 10,

        _create: function () {
            this._super();
            this._renderLayout();
            this._loadData();
            this._bindListeners();
        },

        _bindListeners: function () {
            var context = this;

            this.element.find('.knobs.mode .knob').on('click keyup', function (e) {
                var strMode = $(this).attr('data-mode');
                if (e.type === 'click' || e.keyCode === framework.KEYS.ENTER || e.keyCode === framework.KEYS.SPACE) {

                    if ($(this).hasClass('active')) {
                        return true;
                    }
                    context.mode = strMode;
                    context._setMode();
                }
            });

            this.element.find('.knobs.rows .knob').on('click keyup', function (e) {
                var intRows = parseInt($(this).attr('data-rows'));
                if (e.type === 'click' || e.keyCode === framework.KEYS.ENTER || e.keyCode === framework.KEYS.SPACE) {

                    if ($(this).hasClass('active')) {
                        return true;
                    }
                    context.rows = intRows;
                    context._setRows();
                }
            });

            this.element.find('.knobs.template .knob').on('click keyup', function (e) {
                var blnTemplate;

                if (e.type === 'click' || e.keyCode === framework.KEYS.ENTER || e.keyCode === framework.KEYS.SPACE) {
                    $(this).toggleClass('active');
                    blnTemplate = $(this).hasClass('active');

                    context.template = blnTemplate;
                    context._setTemplate();
                }
            });
        },

        _renderLayout: function () {

            var strHtml = HBS['gadgets/cars/cars']({
                items: framework.languageManager.translations(),
                main: true
            });
            this.element.append(strHtml);

            this.$grid = this.element.find('.grid');
            this._applyPreferences();
        },

        _loadData: function () {
            var context = this;

            this.showLoader();

            this._getConfig().done(function () {
                context._modifyConfig();
                context._getData();
            });
        },

        _modifyConfig: function () {
            $.each(this.options.config, function (i, column) {
                switch (column.id) {
                    case 'color':
                        column.formatter = function (data) {
                            var width = (data.cost / 60000) * 100;
                            return '<div style="background-color:' + data.color + '; width: ' + width + 'px;">&nbsp;</div>';
                        };
                        break;
                    case 'cost':
                        column.formatter = function (data) {
                            return formatter.formatMoney(data.cost, 0, true);
                        };
                        break;
                    default:
                        break;
                }
            });
        },

        _getConfig: function () {
            var context = this;

            function errorConfigResponse(response, textStatus) {
                context.$grid.html('<div class="message error">' + textStatus + '</div>');
            }

            function getConfigResponse(response) {
                context.options.config = response;
            }

            return framework.serviceManager.exec({
                service: 'cars.get.config',
                success: getConfigResponse,
                error: errorConfigResponse
            });
        },

        _getData: function () {
            var context = this;

            function errorDataResponse(response, textStatus) {
                context.$grid.html('<div class="message error">' + textStatus + '</div>');
            }

            function getDataResponse(response) {
                context.options.data = response;
                context._renderData();
            }
            context.showLoader();
            return framework.serviceManager.exec({
                service: 'cars.get.data',
                params: {
                    count: context.rows
                },
                success: getDataResponse,
                error: errorDataResponse
            }).always(function () {
                context.hideLoader();
            });
        },


        _tileFormatter: function (data) {
            var cellHtml = '';

            cellHtml = cellHtml + '<div class="cell-left" style="background-color:' + data.color + '64;">';
            cellHtml = cellHtml + '     <div class="car-id">' + data.id + '</div>';
            cellHtml = cellHtml + '</div>';
            cellHtml = cellHtml + '<div class="cell-right">';
            cellHtml = cellHtml + '    <div class="car">';
            cellHtml = cellHtml + '        <div class="car-make">' + data.make + '</div>';
            cellHtml = cellHtml + '        <div class="car-model">' + data.model + '</div>';
            cellHtml = cellHtml + '    </div>';
            if (data.cost > 45000) {
                cellHtml = cellHtml + '     <div class="car-cost expensive">' + formatter.formatMoney(data.cost, 0, true) + '</div>';
            } else {
                cellHtml = cellHtml + '     <div class="car-cost">' + formatter.formatMoney(data.cost, 0, true) + '</div>';
            }
            cellHtml = cellHtml + ' </div>';
            return cellHtml;
        },

        _renderData: function () {
            var context = this;

            if (this._grid) {
                this._grid.setData(this.options.data);
            } else {
                context.$grid.zazGrid({
                    data: this.options.data,
                    columns: this.options.config,
                    defaultColumns: null,
                    pages: {
                        enabled: true,
                        position: 'top',
                        page: 1,
                        size: 25,
                        sizes: [25, 50, 75, 100]
                    },
                    mode: this.mode || 'grid',
                    virtual: true,
                    view: {
                        grid: {
                            height: 35,
                            styleFormat: 'background-color: #color#16;'
                        },
                        tile: {
                            height: (context.preferences.template) ? 100 : 145,
                            // styleFormat: 'background-color: #color#16;',
                            minWidth: 200,
                            itemsPerRow: 'auto',
                            formatter: (context.preferences.template) ? context._tileFormatter : null
                        }
                    },
                    columnPicker: true,
                    search: {
                        enabled: true,
                        position: 'top',
                        filter: true
                    },
                    summary: {
                        enabled: true,
                        position: 'bottom'
                    },
                    'on-rowclick': function (e, data) {
                        context._rowClick(data);
                    },
                    'on-renderrow': function (e, data) {
                        context._renderRow(data);
                    },
                    'on-rendercell': function (e, data) {
                        context._renderCell(data);
                    }
                });
                this._grid = context.$grid.zazGrid('instance');
            }

            // setInterval(function() {
            //     var id = Math.floor(Math.random() * 20);
            //     var cost = 20000 + Math.floor(Math.random() * 40000);
            //     var width = Math.round(cost/600, 2);
            //     context.element.find('.cell[data-id="'+id+'"] [data-column="color"] .value div').width(width);
            //     context.element.find('.cell[data-id="'+id+'"] [data-column="cost"] .value').html('$' + cost + '.00');
            // }, 250);
        },

        _renderCell: function (data) {},

        _renderRow: function (data) {},

        _rowClick: function (data) {
            console.log(data)
        },

        _applyPreferences: function () {
            var strMode = this.preferences.mode || this.mode;
            var intRows = this.preferences.rows || this.rows;
            var blnTemplate = (this.preferences.template === false) ? this.preferences.template : this.template;

            this.mode = strMode;
            this.rows = intRows;

            this.element.find('.knobs.mode .knob').removeClass('active');
            this.element.find('.knobs.mode .knob[data-mode="' + this.mode + '"]').addClass('active');

            this.element.find('.knobs.rows .knob').removeClass('active');
            this.element.find('.knobs.rows .knob[data-rows="' + this.rows + '"]').addClass('active');

            this.element.find('.knobs.template .knob').removeClass('active');
            this.$grid.removeClass('template');
            if (blnTemplate) {
                this.element.find('.knobs.template .knob').addClass('active');
                this.$grid.addClass('template');
            }
        },

        _setMode: function () {
            this.element.find('.knobs.mode .knob').removeClass('active');
            this.element.find('.knobs.mode .knob[data-mode="' + this.mode + '"]').addClass('active');

            this.preferences.mode = this.mode;
            this.setPreferences();
            this._grid.setMode(this.mode);
        },

        _setRows: function () {
            this.element.find('.knobs.rows .knob').removeClass('active');
            this.element.find('.knobs.rows .knob[data-rows="' + this.rows + '"]').addClass('active');

            this.preferences.rows = this.rows;
            this.setPreferences();
            this._getData();
        },

        _setTemplate: function () {

            this.preferences.template = this.template;
            this.setPreferences();
            this.$grid.remove();
            this._grid = null;
            this._create();
        }
    });
});