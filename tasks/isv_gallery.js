/*
 * grunt-isv-gallery
 * https://github.com/lorrylockie/grunt-isv-gallery
 *
 * Copyright (c) 2014 lorrylockie
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    var isvHttp = require('isv-http');


  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('isv_gallery', 'Your task description goes here.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
      var done = this.async();
      isvHttp.runserver();
	  console.log('caja server is running.....');
		
  });

};
