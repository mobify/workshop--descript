define([
    '$',
    'hijax',
    'pages/pdp/parsers/comment',
    'dust!components/comment/comment'
], function($, Hijax, CommentParser, CommentTemplate) {
    var pdpUI = function() {
        // Add any scripts you would like to run on the pdp page only here
        var hijax = new Hijax();
        hijax.set('comments', '/comments.html', {
            receive: function(data, xhr) {
                var $data = $(data);
                var comments = $data.find('.comment').map(function() {
                    var $comment = $(this);
                    new CommentTemplate(CommentParser.parse($comment), function(err, html) {
                        $('.js-comments').append(html);
                    });
                });
            }
        });
    };

    return pdpUI;
});
