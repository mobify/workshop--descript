define([
    '$',
    'resizeImages',
    'descript',
    'adaptivejs/utils',
    'adaptivejs/defaults',
    'settings',
    'global/includes/header/context',
    'global/includes/footer/context',
    'dust!global/base',
],
function($, ResizeImages, Descript, Utils, Defaults, Settings, header, footer, baseTemplate) {
    var descript;

    /**
     * Grab the default cache breaker variable from the Mobify Config
     */
    if (ResizeImages && Settings) {
        ResizeImages.defaults.cacheBreaker = Settings.cacheBreaker;
    }

    /**
     *  Grabs the images which you would like to run through
     *  imageResizer and sends them away. Can be setup
     *  with more profiles for different types of images
     *  if needed.
     */
    var resizeImages = function() {
        var $imgs = $('img');
        var defaultOpts = {
            projectName: Defaults.projectName
        };

        ResizeImages.resize($imgs, defaultOpts);
        return $imgs;
    };

    return {
        template: baseTemplate,
        includes: {
            header: header,
            footer: footer
        },
        /**
        * preProcess receives a context as a paramater and should return
        * that context with any modifications the user needs. This runs
        * before keys in `context` are executed
        */
        preProcess: function(context) {
            // Transforms should take place here rather then within `context`.

            // An example of a DOM transform:
            $('head').find('meta[name="viewport"]').remove();
            $('style, link[rel="stylesheet"]').remove();

            // Use Descript to manipulate the desktop scripts. Please see
            // https://github.com/mobify/descript for detailed documentation.
            descript = Descript.init();
            descript.addSearcher('selector', function($script, query) {
                return !!$script.filter(query).length;
            });

            descript.remove({
                src: ['desktop-only.js']
            });

            descript.add('urgent', {
                src: ['mobile-first.js']
            });

            descript.add('defer', {
                contains: ['//www.google-analytics.com/analytics'],
                selector: '.last'
            });

            return context;
        },

        /**
        * postProcess receives a context as a paramater and should return
        * that context with any modifications the user needs. This runs
        * after keys in `context` are executed
        */
        postProcess: function(context) {
            // Transforms should take place here rather then within `context`.

            // Uncomment the following line to use Mobify's image resizer:
            // resizeImages();

            // Add the current `t-template-name` class to the body
            var $body = $('body');
            $body.last().addClass('t-' + context.templateName);

            return context;
        },
        context: {
            templateName: 'base',
            html: function() {
                return $('html');
            },
            head: function() {
                return $('head');
            },
            body: function() {
                return $('body');
            },
            desktopScripts: function() {
                return descript.get('default');
            },
            urgentScripts: function() {
                return descript.get('urgent');
            },
            deferScripts: function() {
                return descript.get('defer');
            }
        }
    };

});
