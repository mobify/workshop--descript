define([
    '$',
    'global/baseView',
    'dust!pages/category/template'
],
function($, BaseView, template) {
    return {
        template: template,
        extend: BaseView,
        postProcess: function(context) {
            context = BaseView.postProcess(context);

            var $listing = context.listing;
            $listing.addClass('c-product-list');
            $listing.children().addClass('c-product-list__item').removeAttr('style');
            $listing.find('.price').addClass('c-price');

            return context;
        },

        context: {
            templateName: 'category',
            title: function() {
                return $('.title');
            },
            listing: function() {
                return $('.category-listing');
            }
        }

        /**
         * If you wish to override preProcess/postProcess in this view, have a look at the documentation:
         * http://adaptivejs.mobify.com/v1.0/docs/views
         */
    };
});
