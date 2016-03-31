define(['$'], function($) {
    var parseTransactionInfo = function() {

        var transactionId = $('.t-order-confirmation__transaction-number').text().replace('Transaction Number: ', '');

        var summary = $('.t-order-confirmation__summary-item').map(function() {
            var $row = $(this);
            return $row.find('.t-order-confirmation__summary-item-amount').text().trim();
        });

        var items = $('.c-item__description').map(function() {
            var $row = $(this);
            return {
                name: $row.find('.c-item__name').text().trim(),
                price: $row.find('.c-item__price').text().trim().replace('$', ''),
                sku: $row.find('.c-item__sku').text().replace('SKU: ', '')
            };
        }).get();

        return {
            transactionID: transactionId,
            affiliation: 'Merlin\'s Potions',
            transaction: {
                tax: summary[1],
                revenue: summary[2],
                currency: 'USD',
                shipping: '0'
            },
            transactionItems: items
        };

    };

    var sendTransactionInfo = function() {
        try {
            var Transaction = Mobify.analytics.transaction;
            Transaction.init(Mobify.analytics.ua, 'mobifyTracker');
            Transaction.send(parseTransactionInfo());
        } catch(e) {
            console.log('Failed to send transaction');
        }
    };

    var orderConfirmationUI = function() {
        sendTransactionInfo();
    };

    return orderConfirmationUI;
});

