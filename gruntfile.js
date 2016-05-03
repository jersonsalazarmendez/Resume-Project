module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			less: {
				files: ['src/less/*.less'],
				tasks: ['concat:less','less','cssmin']
			},
			uglify: {
				files: ['src/js/*.js'],
				tasks: ['concat:js', 'uglify']
			},
			htmlmin: {
				files: ['src/*.html'],
				tasks: ['htmlmin']
			}
		},

		less: {
		      development: {
			    options: {
			      paths: ['src/less']
			    },
			    files: {
			      'src/less/style.css': 'src/less/style.less'
			    }
			  },
		},

		concat: {
			options: {
				separator: "\n"
			},
			js: {
				src: ['src/js/home.js','src/js/about-us.js','src/js/services.js'],
				dest: 'src/js/main.js'
			},
			less: {
				src: ['src/less/home.less','src/less/about-us.less','src/less/services.less'],
				dest: 'src/less/style.less'
			}
		},

		uglify: {
			options: {
				manage: false,
				preserveComments: 'some'
			},
			js: {
				files: {
					'dist/js/main.min.js' : ['src/js/main.js']
				}
			}
		},

		cssmin:{
			css:{
				files: [{
					expand: true,
					cwd: 'src/less',
					src: 'style.css',
					dest : 'dist/css',
					ext: '.min.css'
				}]
			}
		},

		htmlmin: {                                  
		    dist: {                                  
		      options: {                                 
		        removeComments: true,
		        collapseWhitespace: true
		      },
		      files: {                                  
		        'dist/index.html': 'src/index.html',    
		        'dist/about-us.html': 'src/about-us.html',   
		        'dist/services.html': 'src/services.html',     
		      }
		    },
		    dev: {                                    
		      files: {
		        'dist/index.html': 'src/index.html',    
		        'dist/about-us.html': 'src/about-us.html',       
		        'dist/services.html': 'src/services.html',    
		      }
		    }
		  }
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['watch']);
};