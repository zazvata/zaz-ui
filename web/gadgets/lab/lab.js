define([
    'jquery.plugins',
    'framework/framework',
    'widgets/zazSplitter/zazSplitter',
    'widgets/zazPane/zazPane',
    'css!gadgets/lab/lab'
], function (
    $,
    framework,
    zazSplitter,
    zazPane
) {
    return $.widget('zaz.lab', framework.baseGadget, {

        _create: function () {
            this._super();

            this._renderLayout();
            this._bindListeners();
        },

        _renderLayout: function () {
            var strTemplate = HBS['gadgets/lab/lab']();
            this.element.html(strTemplate);

            this.$content = this.element.find('.gadget-content');
            this.$widget = this.element.find('.lab-widget');

            this._renderWidget();
        },

        _renderWidget: function () {
            var context = this;
            // var data = [{
            //         "id": "p1",
            //         "title": "What is Lorem Ipsum?",
            //         "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha"
            //     },
            //     {
            //         "id": "p2",
            //         "title": "Why do we use it?",
            //         "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
            //     },
            //     {
            //         "id": "p3",
            //         "title": "Where does it come from?",
            //         "content": "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
            //     },
            //     {
            //         "id": "p4",
            //         "title": "Where can I get some?",
            //         "content": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            //     }
            // ];

            //test widget here
            this.$widget.zazSplitter({
                orientation: 'v'
            });

            this._widget = this.$widget.zazSplitter('instance');
            this.$widget.resizable();

            //test widget here
            // this.$widget.zazPane({
            //     data: data,
            //     orientation: 'v'
            // });

            // this._widget = this.$widget.zazPane('instance');
        },

        _bindListeners: function () {
            var context = this;

            $(this.element).find('.knobs .knob').on('click keyup', function (e) {
                if (e.type === 'click' || e.keyCode === framework.KEYS.ENTER || e.keyCode === framework.KEYS.SPACE) {
                    context._widget.toggleOrientation();
                }
            });
        }
    });
});