define([
    '$',
    'global/baseView',
    'dust!pages/order-confirmation/template'
],
function($, BaseView, template) {
    return {
        template: template,
        extend: BaseView,

        context: {
            templateName: 'order-confirmation',
            title: function() {
                return $('h1').text();
            },
            items: function() {
                return $('#order-confirmation tr').filter(function() {
                    var $row = $(this);
                    return !$row.hasClass('subtotal') && !$row.hasClass('tax') && !$row.hasClass('total');
                }).map(function() {
                    var $row = $(this);
                    return {
                        image: $row.find('td:nth-of-type(1) img').attr('x-src'),
                        name: $row.find('td:nth-of-type(2)  p:first').text(),
                        price: $row.find('td:nth-of-type(3)').text(),
                        sku: $row.find('.sku').text()
                    };
                });
            },
            transactionNumber: function() {
                return $('#transaction-number').text();
            },
            summary: function() {
                return $('#order-confirmation tr').filter(function() {
                    return this.className;
                }).map(function() {
                    var $row = $(this);
                    return {
                        name: $row.find('td:nth-of-type(2)').text(),
                        amount: $row.find('td:last-of-type').text()
                    };
                });
            }
        }

        /**
         * If you wish to override preProcess/postProcess in this view, have a look at the documentation:
         * http://adaptivejs.mobify.com/v1.0/docs/views
         */
    };
});
