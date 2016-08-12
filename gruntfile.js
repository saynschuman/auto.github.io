module.exports = function(grunt) {


grunt.initConfig({
  concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/*.js'],
        dest: 'js/script.main.js'
      }
    },
    uglify: {
      dist: {
        src: ['js/script.main.js'],
        dest: 'js/script.main.min.js'
      }
    },
    sass: {
      dist: {
        files: {
          'css/main.css' : 'sass/main.scss'
        }
      }
    }, 
    cssmin: {
      my_target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.css', '!*.min.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    },
    watch: {
      sass: {
        files: ['sass/*.scss'],
        tasks: ['sass', 'cssmin'],
      }
    }    
});

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin']);  
};

