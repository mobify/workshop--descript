define([
    '$'
],
function($) {
    var homeUI = function() {
        $('.js-tabs__header').on('click', function(e) {
            var $tab = $(this);
            var tabIndex = $tab.index();
            var $sections = $('.js-tabs__sections');

            $tab.siblings().removeClass('c--active');
            $tab.addClass('c--active');

            $sections.removeClass('c--active');
            $sections.eq(tabIndex).addClass('c--active');
        });

        $('.js-tabs__header').first().click();
    };

    return homeUI;
});
