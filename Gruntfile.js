module.exports = function(grunt) {

	///////////////////////////////////////////////////////////////////////////
	//
	//  MAIN COMMAND LINE BUILD TASKS
	//
	///////////////////////////////////////////////////////////////////////////

	// DEFAULT TASK - $ grunt
	grunt.registerTask('default', [
		//'clean',
		'copy',
		'stylesheets'
	]);

	grunt.registerTask('stylesheets', [
		'scsslint',
		'sass',
		'uncss',
		'postcss',
		'parker'
	]);

	///////////////////////////////////////////////////////////////////////////
	//
	//  LOAD packaged module tasks
	//
	///////////////////////////////////////////////////////////////////////////

	require('time-grunt')(grunt);

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-parker');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-scss-lint');
	grunt.loadNpmTasks('grunt-uncss');

	///////////////////////////////////////////////////////////////////////////
	//
	//  CONFIGURE local tasks
	//
	///////////////////////////////////////////////////////////////////////////

	grunt.initConfig({

		clean: ['assets'],

		copy: {
			main: {
				files: [
					// includes files within path
					//{expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},

					// includes files within path and its sub-directories
					{expand: true, src: ['src/images/**'], flatten: true, dest: 'assets/images/', filter: 'isFile'},

					// makes all src relative to cwd
					//{expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

					// flattens results to a single level
					//{expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
				],
			},
		},

		parker: {
			options: {},
				src: [
					'assets/stylesheets/*.css'
				],
		},

		postcss: {
			options: {
				map: false,
				processors: [
					require('css-mqpacker')(),
					require('pixrem')(), // add fallbacks for rem units
					require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
					// require('cssnano')() // minify the result
				]
			},
			dist: {
				src: 'assets/stylesheets/*.css'
			}
		},

		sass: {
			options: {
				sourceMap: false
			},
			dist: {
				files: {
					'assets/stylesheets/main.css': 'src/stylesheets/main.scss'
				}
			}
		},

		scsslint: {
			allFiles: [
				'src/stylesheets/{,*/}*.{scss,sass}',
			],
			options: {
				bundleExec: true,
				config: '.scss-lint.yml'
			},
		},

		uncss: {
			dist: {
				files: {
					'assets/stylesheets/main.css' : ['index.html']
				}
			}
		}

	});
};
