module.exports = function(config) {
	'use strict';
	
	config.set({
		// Karma E2E configuration

		// base path, that will be used to resolve files and exclude
		basePath: '',

		// Frameworks to load
		// frameworks: ['ng-scenario'],

		// list of files / patterns to load in the browser
		files: [
			'app/bower_components/angular-scenario/angular-scenario.js',
			'app/bower_components/angular-scenario/jstd-scenario-adapter-config.js',
		  'test/e2e/**/*.js'
		],

		// list of files to exclude
		exclude: [],

		// test results reporter to use
		// possible values: dots || progress || growl
		reporters: ['progress'],

		// web server port
		port: 8080,

		// cli runner port
		runnerPort: 9100,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ['Chrome'],

		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 50000,

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: false,

		// Uncomment the following lines if you are using grunt's server to run the tests
		// proxies: {
		//   '/': 'http://localhost:9000/'
		// },
		// URL root prevent conflicts with the site root
		// urlRoot: '_karma_'
	});
};

