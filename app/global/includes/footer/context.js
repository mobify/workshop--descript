define(['$'], function($) {
    return {
        context: {
            newsletter: function() {
                var $newsletter = $('footer table>tbody>tr>td[width="45%"]>div').children();

                $newsletter.find('input, button').wrapAll('<div class="c-newsletter"></div>');
                $newsletter.find('button').addClass('c-button c--accent');

                return $newsletter;
            },
            copyright: function() {
                return $('footer table td:nth-child(1)>table tr:nth-child(3)');
            }
        }
    };
});
