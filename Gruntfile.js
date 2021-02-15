module.exports = function (grunt) {
    var proxySnippet = require('grunt-connect-proxy2/lib/utils').proxyRequest;
    var proxyConfig = {
        localhost: {
            host: 'localhost',
            port: 6001
        },
        heroku: {
            // port: 443,  //if using SSL
            // protocol: 'https:',
            host: 'zaz-rest.zazvata.com',
            port: 80
        }
    };
    var app = {
        endPoints: ['/api'],
        root: 'web',
        war: {
            name: 'zaz-ui',
            folder: 'war'
        },
        scripts: [
            'web/**/*.js',
            '!web/vendor/**/*.js',
            '!web/templates/**/*.js'
        ]
    };

    //not using HBS map due to handlebars-helper features for now
    // function getHBSMap() {
    //     var path = require('path');
    //     var files = {};
    //     grunt.file.expand({
    //         cwd: app.root
    //     }, '**/*.hbs').forEach(function (relpath) {
    //         var targetFile = path.join(app.root, relpath).replace(/\.hbs$/, '.template.js');
    //         files[targetFile] = path.join(app.root, relpath);
    //     });
    //     return files;
    // }

    function getCSSMap() {
        var path = require('path');
        var files = {};
        grunt.file.expand({
            cwd: app.root
        }, '**/*.scss').forEach(function (relpath) {
            var targetFile = path.join(app.root, relpath).replace(/\.scss$/, '.css');
            files[targetFile] = path.join(app.root, relpath);
        });
        return files;
    }

    function connectStatic(connect, dir) {
        return serveStatic(require('path').resolve(dir));
    }

    require('time-grunt')(grunt);
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    const sass = require('node-sass');
    var serveStatic = require('serve-static');
    //to load grunt tasks from custom js files
    //grunt.loadTasks('./templates');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        config: app,

        concurrent: {
            target: {
                tasks: ['dev', 'watch'],
                options: {
                    logConcurrentOutput: true,
                    limit: 10
                }
            }
        },

        connect: {
            dev: {
                options: {
                    port: 5001,
                    hostname: '*',
                    keepalive: true,
                    //open: true,
                    middleware: function (connect) {
                        return [proxySnippet, connectStatic(connect, app.root)];
                    }
                }
            },
            proxies: app.endPoints.map(function (proxy) {
                var option = grunt.option('proxy') || 'localhost';
                var config = proxyConfig[option];
                var split = option.split(':');
                var output = {};

                if (option === 'heroku') {
                    grunt.file.write(app.root + '/features/ioManager.json', '{ "heroku": true }');
                } else {
                    grunt.file.write(app.root + '/features/ioManager.json', '{ "heroku": false }');
                }
                if (!config) {
                    config = {
                        host: split[0],
                        port: split[1] || 80
                    };
                }
                output = {
                    changeOrigin: false,
                    context: proxy,
                    host: config.host,
                    port: config.port
                };                return output;
            })
        },

        handlebars: {
            compile: {
                options: {
                    namespace: 'HBS',
                    processName: function (filepath) {
                        var $filepath = filepath.replace('.hbs', '');
                        $filepath = $filepath.replace(/^\/?web\//, '');
                        return $filepath;
                    },
                    amd: true
                },
                //for future use
                //files: getHBSMap()
                files: {
                    '<%= config.root %>/templates/hbs.js': '<%= config.root %>/**/*.hbs'
                }
            }
        },

        war: {
            target: {
                options: {
                    war_dist_folder: '<%= config.war.folder %>',
                    war_name: '<%= config.war.name %>',
                    webxml_display_name: '<%= config.war.name %>'
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.war.folder %>',
                    src: ['**'],
                    dest: ''
                }]
            }
        },

        watch: {
            templates: {
                files: '<%= config.root %>/**/*.hbs',
                tasks: ['handlebars']
            },
            sass: {
                files: ['<%= config.root %>/**/*.{scss,sass}'],
                tasks: ['newer:sass']
            },
            css: {
                files: ['<%= config.root %>/**/*.css'],
                options: {
                    livereload: true
                }
            }
        },

        sass: {
            options: {
                implementation: sass
            },
            dist: {
                files: getCSSMap()
            }
        },
        
    });

    grunt.registerTask('dev', ['configureProxies', 'connect:dev']);
    grunt.registerTask('package', ['handlebars', 'war']);
    grunt.registerTask('serve', ['sass', 'handlebars', 'concurrent:target']);
    grunt.registerTask('default', ['localhost']);
    grunt.registerTask('heroku', function() {
        grunt.option('proxy', 'heroku');
        grunt.task.run('serve');
    });
    grunt.registerTask('localhost', function() {
        grunt.option('proxy', 'localhost');
        grunt.task.run('serve');
    });
};