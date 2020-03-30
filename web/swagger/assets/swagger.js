var swagger = {
    link: '',
    json: '',

    init: function () {
        this.link = $('.__swagger .yaml-link').val();
        this.bindListeners();
    },

    bindListeners: function () {
        $('.__swagger .yaml-link').off('input');
        $('.__swagger .yaml-link').on('input', () => {
            this.link = $('.yaml-link').val();
        });

        $('.__swagger .yaml-filter').off('input');
        $('.__swagger .yaml-filter').on('input', () => {
            this.filter = $('.yaml-filter').val();
            this.filterView();
        });

        $('.__swagger .yaml-load').off('click');
        $('.__swagger .yaml-load').on('click', (e) => {
            if (this.link) {
                this.getYaml().done((response) => {
                    this.json = response;
                    this.render();
                });
            }
        });

        $('.__swagger .paths').off('click', '.method');
        $('.__swagger .paths').on('click', '.method', (e) => {
            var $item = $(e.target);
            var strMethod = $item.attr('data-method');
            $item.closest('.path').find(`.path-details[data-method='${strMethod}']`).toggle();
        });
    },

    filterView: function () {
        if (this.filter) {
            $('.__swagger .path').each((i, item) => {
                var $item = $(item);
                var strPath =  $item.attr('data-path');
                (strPath.indexOf(this.filter) > -1) ? $item.show(): $item.hide();
            });
        } else {
            $('.__swagger .path').show();
        }
    },

    render: function () {
        var paths = this.json.paths;
        var $paths = $('.paths');
        $.each(paths, (path, pathData) => {
            var $path = $(`<div class="path" data-path="${path}"></div>`);
            $path.append(`
                <div class="path-header">
                    <div class="url">${path}</div>
                    <div class="methods"></div>
                </div>`);
            $.each(pathData, (method, methodData) => {
                $path.find('.methods').append(`<div class="method" data-method="${method}">${method}</div>`);
            });
            $.each(pathData, (method, methodData) => {
                $path.append(`<div class="path-details" data-method="${method}"></div>`);
                $path.find(`.path-details[data-method='${method}']`).append(`<div class="parameters" data-method="${method}"></div>`);
                $path.find(`.path-details[data-method='${method}'] .parameters`).append(`<div class="parameters-header">Parameters</div>`);
                $.each(methodData.parameters, (i, param) => {
                    $path.find(`.path-details[data-method='${method}'] .parameters`).append(`<div class='parameters-row'>${param.name} - ${param.type || 'N/A'}</div>`);
                });
                $path.find(`.path-details[data-method='${method}']`).append(`<div class="responses" data-method="${method}"></div>`);
                $path.find(`.path-details[data-method='${method}'] .responses`).append(`<div class="responses-header">Responses</div>`);
                $.each(methodData.responses, (verb, response) => {
                    $path.find(`.path-details[data-method='${method}'] .responses`).append(`<div class='responses-row'>${verb} - ${response.description}</div>`);
                });
            });
            $paths.append($path);
        });
    },

    getYaml: function () {
        var deferred = new $.Deferred();
        $.get(this.link, function (response) {
            var strYaml = response;
            var json = jsyaml.load(strYaml);
            deferred.resolve(json)
        });

        return deferred.promise();
    }
}

$(function () {
    swagger.init();
});