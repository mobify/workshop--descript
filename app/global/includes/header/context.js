define(['$'], function($) {
    return {
        context: {
            logoHref: function() {
                return $('.logo a').attr('href');
            },
            cartCount: function() {
                return $('.header-cart span').text();
            }
        }
    };
});
