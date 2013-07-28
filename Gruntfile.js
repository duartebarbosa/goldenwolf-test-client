var exec = require('child_process').exec
  , fs = require('fs');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    "phonegap-build": {
      options: {
        archive: "app.zip",
        "appId": "",
        "user": {
          "email": "",
          "password": ""
        }
      }
    }
    , exec: {
      clone_api: {
        cmd: "git clone https://github.com/otupman/goldenwolf-test-api api/"
      }
      , start_api: {
        cmd: "rails s -d"
        , cwd: "api"
      }
      , stop_api: {
        cmd: "kill `cat tmp/pids/server.pid`"
      }
    }
    , zip: {
      app: {
        src: ["index.html", "Config.xml", "components/**/*.*", "partials/*.html", "app.js", "controller.js"],
        dest: "app.zip"
      }     
    }
  });

  // Load local tasks.
  grunt.loadNpmTasks('grunt-zipstream');
  grunt.loadNpmTasks('grunt-phonegap-build');
  grunt.loadNpmTasks('grunt-exec');
  
  // Default task.
  grunt.registerTask('default', ['zip', 'phonegap-build']);
  
  grunt.registerTask('setup-api', 'Sets up the API', [
    "exec:clone_api"  
  ]);
};

