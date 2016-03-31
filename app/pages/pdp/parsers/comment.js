define([
    '$'
], function($) {
    var _parse = function($comment) {
        var comment = {
            rating: $comment.find('.rating').remove().text(),
            stats: $comment.find('td:nth-of-type(1) span').map(function() {
                return $(this).text();
            }),
            title: $comment.find('h3').text(),
            author: $comment.find('td:nth-of-type(2) span').text(),
            body: $comment.find('td:nth-of-type(2) p').text()
        };

        return { content: comment };
    };

    return {
        parse: _parse
    };
});
