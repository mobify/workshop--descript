define([
    'lib/viewMocker',
    'pages/order-confirmation/view',
    'text!fixtures/order-confirmation.html',
    'chai'
],
function(test, view, fixture, chai) {
    var expect = chai.expect;

    test('order-confirmation view context', view, fixture, {
        'context contains the correct template name': function($, context) {
            var templateName = context.templateName;
            expect(templateName).to.equal('order-confirmation', 'order-confirmation context has correct template name');
        }
    });

    test('order-confirmation view DOM', view, fixture, {
        'adaptation adds the correct template class': function($) {
            var $body = $('body').last();

            expect($body.hasClass('t-order-confirmation')).to.be.true;
        }
    });
});
