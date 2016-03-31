define([
    '$',
    'hijax',
    'resizeImages'
],
function($, Hijax, ResizeImages) {
    var homeUI = function() {
        var hijax = new Hijax();
        hijax.set('add-image', '/add-image.html', {
            receive: function(data, xhr) {
                var options = {
                    maxWidth: 400,
                    maxHeight: 400,
                    sourceAttribute: 'src'
                };
                var $image = $(data);
                ResizeImages.resize($image, options);
                $('.c-ad-space').append($image);
            }
        });

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
