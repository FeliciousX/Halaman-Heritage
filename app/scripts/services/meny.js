'use strict';

//TODO : Change to use Provider instead of Factory

angular.module('halamanHeritageApp')
  .factory('meny', function () {
    return {
      menyInit: function () {
        return 	{
				    // The element that will be animated in from off screen
				    menuElement: document.querySelector( '.meny' ),

				    // The contents that gets pushed aside while Meny is active
				    contentsElement: document.querySelector( '.container-fluid' ),

				    // The alignment of the menu (top/right/bottom/left)
				    position: 'top',

				    // The height of the menu (when using top/bottom position)
				    height: 200,

				    // The width of the menu (when using left/right position)
				    width: 260,

				    // Use mouse movement to automatically open/close
				    mouse: true,

				    // Use touch swipe events to open/close
				    touch: true
				};
      }
    };
  });
