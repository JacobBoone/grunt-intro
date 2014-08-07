// export the gruntfiel for use in the terminal.
module.exports = function(grunt){
	// initialize the configuration
	grunt.initConfig({
		
// make many files to one file
		// set up the uglify tasks
		uglify:{
			// define the "dev" subtasks
			dev:{
				// specify files using files-object format
				files: {
					// 'destination file': ['source file(s)']
					'javascript/main.min.js': [
						'javascript/main.js',
						'javascript/second.js' ]
				},
				options:{
					sourceMap:true
				}
			},
			build:{
				files: {
					// 'destination file': ['source file(s)']
					'javascript/main.min.js':[
						'javascript/main.js',
						'javascript/second.js' 
						]
				},
				options:{
					sourceMap:true,
					banner: '// Production Build'
				}
			}
		},
// makes many files to many files
		cssmin:{
					dev:{
						// expanded syntaxfile format
						files:[{
							expand:true,
							cwd: 'styles/', 
							// file matching pattern
							src: ['*.css'],
							// destination where files will end up
							dest: 'styles/min/',
							// what will the extention of the filesZ
							ext:'min.css'
						}]
					}

				},
// configure the file watching plugin
		watch:{
			scripts:{
				// when files are changed...
				files: ['javascript/main.js', 'javascript/utils.js'],
				// run these tasks
				tasks: ['uglify:dev']
				}
		}	
});





	// our custom tasks
	grunt.registerTask(
		'dev', ['uglify:dev', 'cssmin', 'watch']
	);

	grunt.registerTask(
		'build', ['uglify:build', 'cssmin']
	);


	// load npm plugin
	grunt.loadNpmTasks(
		'grunt-contrib-uglify'
	);

	grunt.loadNpmTasks(
		'grunt-contrib-cssmin'
	);
		grunt.loadNpmTasks(
		'grunt-contrib-watch'
	);


}