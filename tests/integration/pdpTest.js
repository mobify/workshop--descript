define([
    'lib/viewMocker',
    'pages/pdp/view',
    'text!fixtures/pdp.html',
    'chai'
],
function(test, view, fixture, chai) {
    var expect = chai.expect;

    test('pdp view context', view, fixture, {
        'context contains the correct template name': function($, context) {
            var templateName = context.templateName;
            expect(templateName).to.equal('pdp', 'pdp context has correct template name');
        }
    });

    test('pdp view DOM', view, fixture, {
        'adaptation adds the correct template class': function($) {
            var $body = $('body').last();

            expect($body.hasClass('t-pdp')).to.be.true;
        }
    });
});
