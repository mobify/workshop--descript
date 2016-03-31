module.exports = function(grunt) {
    return {
        prod: {
            options: {
                bundleExec: true,
                style: 'compressed',
                sourcemap: 'none',
                loadPath: [
                    'app/',
                    'app/bower_components/'
                ],
                require: [
                    'compass/import-once/activate'
                ]
            },
            files: [{
                expand: true,
                cwd: 'app/',
                src: [
                    '**/*.scss',
                    '!bower_components/**/*.scss'
                ],
                dest: 'build/css',
                ext: '.min.css',
            }],
        },
        dev: {
            options: {
                bundleExec: true,
                style: 'expanded',
                sourcemap: 'auto',
                loadPath: [
                    'app/',
                    'app/bower_components/'
                ],
                require: [
                    'compass/import-once/activate'
                ]
            },
            files: [{
                expand: true,
                cwd: 'app/',
                src: [
                    '**/*.scss',
                    '!bower_components/**/*.scss'
                ],
                dest: 'build/css',
                ext: '.css',
            }],
        }
    };
};
