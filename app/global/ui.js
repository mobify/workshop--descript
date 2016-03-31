define([
    '$',
    'fastclick',
    'deckard'
],
function(
    $,
    fastclick
) {
    var globalUI = function() {
        // Remove 300ms tap delay using FastClick
        fastclick.attach(document.body);

        // Enable active states for CSS
        $(document).on('touchstart', function() {});

        // Add any scripts you would like to run on ALL pages here
    };

    return globalUI;

});
