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
    }
});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat', 'uglify']);	
};

