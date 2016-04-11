define([
    '$',
    'global/baseView',
    'dust!pages/category/template',
    'descript'
],
function($, BaseView, template, Descript) {
    return {
        template: template,
        extend: BaseView,
        preProcess: function(context) {
            context = BaseView.preProcess(context);
            var descript = Descript.init();

            if (descript.exists({src: 'mobile-first.js'})) {
                descript.insertScript({src: 'mobile-first.js'}, function() {
                    console.log('special script for category page, must run after first script');
                });
            }
            return context;
        },
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
