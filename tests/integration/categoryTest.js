define([
    'lib/viewMocker',
    'pages/category/view',
    'text!fixtures/category.html',
    'chai'
],
function(test, view, fixture, chai) {
    var expect = chai.expect;

    test('category view context', view, fixture, {
        'context contains the correct template name': function($, context) {
            var templateName = context.templateName;
            expect(templateName).to.equal('category', 'category context has correct template name');
        }
    });

    test('category view DOM', view, fixture, {
        'adaptation adds the correct template class': function($) {
            var $body = $('body').last();

            expect($body.hasClass('t-category')).to.be.true;
        }
    });
});
