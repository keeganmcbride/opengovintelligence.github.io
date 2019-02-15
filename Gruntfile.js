module.exports = function(grunt) {

	///////////////////////////////////////////////////////////////////////////
	//
	//  MAIN COMMAND LINE BUILD TASKS
	//
	///////////////////////////////////////////////////////////////////////////

	// DEFAULT TASK - $ grunt
	grunt.registerTask('default', [
		'clean',
		'copy',
		'html',
		'stylesheets'
	]);

	grunt.registerTask('stylesheets', [
		'scsslint',
		'sass',
		'uncss',
		'postcss',
		'parker'
	]);

	grunt.registerTask('html', [
		'assemble:default',
		'assemble:markdown'
	]);

	///////////////////////////////////////////////////////////////////////////
	//
	//  LOAD packaged module tasks
	//
	///////////////////////////////////////////////////////////////////////////

	require('time-grunt')(grunt);

	grunt.loadNpmTasks('grunt-assemble');
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

		assemble: {
			options: {
				marked: {sanitize: false},
				production: true,
				helpers: 'src/html/helpers/helper-*.js',
				layoutdir: 'src/html/layouts',
				partials: ['src/html/**/*.hbs'],
			},
			default: {
				options: {layout: 'default.hbs'},
				files: [{ expand: true, cwd: 'src/html/pages', src: ['*.hbs'], dest: './' }]
			},
			markdown: {
				options: {layout: 'markdown.hbs'},
				files: [{ expand: true, cwd: 'src/html/pages', src: ['*.md'], dest: './' }]
			}
		 },


		clean: ['assets', '*.html'],

		copy: {
			main: {
				files: [
					{expand: true, src: ['src/images/**'], flatten: true, dest: 'assets/images/', filter: 'isFile'},
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
					require('cssnano')() // minify the result
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
					'assets/stylesheets/main.css' : ['*.html']
				}
			}
		}

	});
};
