var path = require('path');

module.exports = function(grunt) {
    var project = grunt.option('project') || 'analytics';

    var host = function(hostname) {
        // If I am working remotely, add a + so I proxy through SOCKS
        if (project[0] === '+') {
            hostname = '+' + hostname;
        }

        return hostname;
    }

    var rsync_config = {
        myproject: {
            src: '/My/Local/Project',
            dest: '/My/Remote/Directory',
            host: host('my.server.spotify.net'),
            exclude: ['.watchfile'],
            args: ['-av']
        }
    }

    // Remove a remote plus if it exists
    if (project[0] === '+') { project = project.substring(1); }

    grunt.config.init({
        rsync: rsync_config,
        watch: {
            rsync: {
                files: [path.join(rsync_config[project].src, '.watchfile')],
                tasks: ['rsync:' + project],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-rsync');

    grunt.registerTask('sync', ['rsync:' + project, 'watch']);
};