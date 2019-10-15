define([
    'jquery.plugins',
    'handlebars-helpers',
    'framework/keys',
    'css!widgets/zazSplitter/zazSplitter'
], function ($,
    HBS,
    keys) {

    /**
     * @namespace zazSplitter  
     * @classdesc A widget that splits a given block element with both vertical/horizontal orientation.
     */
    return $.widget('zaz.zazSplitter', {
        options: {
            orientation: 'v',
            minSize: 200,
            collapsed: false,
            size: 100, // size of collapsible pane
            drag: true
        },

        _setOrientation: function () {
            this.element.attr('data-orientation', this.options.orientation);
            this._setDraggable();
        },

        toggleOrientation: function () {
            this.options.orientation = (this.options.orientation === 'v') ? 'h' : 'v';
            this._setOrientation();
        },

        _create: function () {
            this._super();

            this._renderLayout();
            this._bindListeners();
        },

        _renderLayout: function () {
            var strHtml = HBS['widgets/zazSplitter/zazSplitter']();

            this.element.addClass('zaz-splitter');
            this.element.html(strHtml);

            this.$prev = this.element.find('.zaz-splitter-prev');
            this.$next = this.element.find('.zaz-splitter-next');
            this.$splitter = this.element.find('.zaz-splitter-splitter');
            this.$arrow = this.element.find('.zaz-splitter-splitter-arrow');

            this._setDragMode();
            this._setOrientation();
            this._setPanelSizes();
        },

        _setDragMode: function () {
            if (!this.options.drag) {
                this.element.attr('data-drag', 'disabled');
            }
        },
        _setPanelSizes: function () {
            var prevFlex,
                nextFlex,
                strOrientation = this.options.orientation;

            if (!this.options.collapsed) {
                this.options.collapsed = (this.options.size <= this.options.minSize);
            }

            if (strOrientation === 'h') {
                maxSize = Math.round(this.element.width());
            } else {
                maxSize = Math.round(this.element.height());
            }
            if (this.options.size) {
                nextFlex = Math.round(this.options.size * 100 / maxSize);
                prevFlex = 100 - nextFlex;

                //force jQuery css to use number on flex key
                $.cssNumber.flex = true;
                this.$prev.css({
                    flex: prevFlex
                });
                this.$next.css({
                    flex: nextFlex
                });
                this.element.attr('data-size', prevFlex);
            }

            if (this.options.collapsed) {
                this._collapsePane();
                return true;
            }

            return true;
        },


        _setDraggable: function () {
            var context = this,
                strOrientation = this.element.attr('data-orientation');

            if (!this.options.drag) {
                return
            }

            if (this.$splitter.draggable('instance')) {
                this.$splitter.draggable('destroy');
            }
            this.$splitter.draggable({
                axis: (strOrientation === 'h') ? 'x' : 'y',
                containment: 'parent',
                drag: function (e, ui) {
                    // use this in time to perform live resize
                    return context._handleDrag(e, ui);
                },
                stop: function (e, ui) {
                    return context._handleDragEnd(e, ui);
                }
            });

        },

        _bindListeners: function () {
            var context = this;


            this.element.on('click keyup', '.zaz-splitter-splitter-arrow', function (e) {
                var strCollapsed = context.element.hasAttr('data-collapsed');
                if (e.type === 'click' || e.keyCode === keys.ENTER || e.keyCode === keys.SPACE) {
                    if (strCollapsed) {
                        context._restorePane();
                    } else {
                        context._collapsePane();
                    }
                }
            });
        },

        _handleDrag: function (e) {
            var $splitter = $(e.target),
                strOrientation = this.element.attr('data-orientation'),
                mouseX = e.pageX || e.screenX,
                mouseY = e.pageY || e.screenY,
                prevSize, nextSize;

            if (!$splitter.hasClass('zaz-splitter-splitter')) {
                return false;
            }
            if (this.element.hasAttr('data-collapsed')) {
                return false;
            }

            if (strOrientation === 'h') {
                //check left and right sizes
                prevSize = Math.round(mouseX - this.element.offset().left);
                nextSize = Math.round(this.element.width() - prevSize);
            } else {
                //check top and bottom sizes
                prevSize = Math.round(mouseY - this.element.offset().top);
                nextSize = Math.round(this.element.height() - prevSize);
            }

            if (nextSize <= this.options.minSize) {
                this._collapsePane();
                return false;
            }

            return true;
        },

        _handleDragEnd: function (e) {
            var $splitter = $(e.target);
            if (!$splitter.hasClass('zaz-splitter-splitter')) {
                return false;
            }
            var mouseX = e.pageX || e.screenX;
            var mouseY = e.pageY || e.screenY;
            var strOrientation;
            var prevFlex;
            var nextFlex;

            if (this.element.hasAttr('data-collapsed')) {
                //collapsed due to snap by handleDrag - nothing to do here - get out.
                return false;
            }
            strOrientation = this.element.attr('data-orientation');
            prevFlex = (strOrientation === 'h') ? (mouseX - this.element.offset().left) * 100 / this.element.width() : (mouseY - this.element.offset().top) * 100 / this.element.height();
            nextFlex = 100 - prevFlex;

            //set data-size on parent pane from prev
            this.element.attr('data-size', prevFlex);

            //force jQuery css to use number on flex key
            $.cssNumber.flex = true;

            this.$prev.css({
                flex: prevFlex
            });
            this.$next.css({
                flex: nextFlex
            });

            $splitter.css({
                left: 0,
                top: 0,
                bottom: 0,
                right: 0
            });

            this._trigger('dragend');
            return true;
        },

        _restorePane: function () {
            this._trigger('beforerestorepane');
            var size = this.element.attr('data-size');

            //force the flex attribute to be applied as a number
            $.cssNumber.flex = true;

            //remove the data-collapsed attribute from parent
            this.element.removeAttr('data-collapsed');
            this.$arrow.attr('aria-expanded', true);
            this.$prev.css({
                flex: size
            });
            this.$next.css({
                flex: 100 - size
            });

            this.$splitter.css({
                left: 0,
                top: 0,
                bottom: 0,
                right: 0
            });

            this._trigger('restorepane');
            this._setOrientation();
        },

        _collapsePane: function () {
            this._trigger('beforecollapsepane');

            this.$splitter.css({
                left: 0,
                top: 0,
                bottom: 0,
                right: 0
            });


            this.element.attr('data-collapsed', 'true');
            // this.element.removeAttr('data-size');
            this.$arrow.attr('aria-expanded', false);

            this._trigger('collpasepane');
            this._setOrientation();
        }
    });

});