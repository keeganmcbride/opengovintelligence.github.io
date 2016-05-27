module.exports = function(grunt) {

	///////////////////////////////////////////////////////////////////////////
	//
	//  MAIN COMMAND LINE BUILD TASKS
	//
	///////////////////////////////////////////////////////////////////////////

	// DEFAULT TASK - $ grunt
	grunt.registerTask('default', [
		'clean',

		// build stylesheets
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

		clean: ['stylesheets'],

		parker: {
			options: {},
				src: [
					'stylesheets/*.css'
				],
		},

		postcss: {
			options: {
				map: false,
				processors: [
					require('pixrem')(), // add fallbacks for rem units
					require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
					// require('cssnano')() // minify the result
				]
			},
			dist: {
				src: 'stylesheets/*.css'
			}
		},

		sass: {
			options: {
				sourceMap: false
			},
			dist: {
				files: {
					'stylesheets/main.css': 'src/stylesheets/main.scss'
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
					'stylesheets/main.css' : ['index.html']
				}
			}
		}

	});
};
