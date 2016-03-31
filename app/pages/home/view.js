/**
 * Home View
 */

define([
    '$',
    'resizeImages',
    'global/baseView',
    'dust!pages/home/template',
    'descript',
],
function($, ResizeImages, baseView, template, Descript) {
    var descript;
    var defaultOptions = {
        maxWidth: 400,
        maxHeight: 400
    };
    return {
        template: template,
        extend: baseView,
        preProcess: function(context) {
            if (baseView.preProcess) {
                context = baseView.preProcess(context);

                descript = Descript.init();
                descript.remove({
                    src: ['desktop-only.js']
                });

                if (descript.exists({src: 'mobile-first.js'})) {
                    descript.insertScript({src: 'mobile-first.js'}, function() {
                        console.log('special script for home page, must run after first script');
                    });
                }
            }
            return context;
        },
        context: {
            templateName: 'home',
            hero: function() {
                var $hero = $('.hero');
                ResizeImages.resize($hero, defaultOptions);
                return $hero;
            },
            shipping: function() {
                var $freeShipping = $('.free-shipping');
                var options = {
                    sourceAttribute: 'data-mobile-src',
                    quality: 50
                };
                $.extend(options, defaultOptions);
                ResizeImages.resize($freeShipping, options);
                return $('.free-shipping').attr('x-src');
            },
            discountBanner: function() {
                return $('.banner-message');
            },
            categories: function() {
                return $('.categories .carousel').map(function() {
                    var $category = $(this);

                    return {
                        title: $category.find('h3').text(),
                        products: $category.find('.jcarousel li a').map(function() {
                            var $item = $(this);

                            return {
                                href: $item.attr('href'),
                                image: $item.find('img'),
                                // Find and remove the price before selecting
                                // the description, to separate the two elements
                                price: $item.find('.price').remove().text(),
                                title: $item.find('.description').text().replace(' - ', '')
                            };
                        })
                    };
                });
            }
        }

        /**
         * If you wish to override preProcess/postProcess in this view, have a
         * look at the documentation:
         *
         * http://adaptivejs.mobify.com/v1.0/docs/views
         */
    };
});
