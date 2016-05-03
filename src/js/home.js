/*
Site: Diamond Web and Design
Author:Jerson Salazar Méndez
Updated:March,2016
Updated by:Jerson Salazar Méndez
*/

/*brand App show hidden button*/

var myApp = angular.module('myApp', []);

myApp.controller('watchCRTL', function($scope){
	$scope.see = function(){
		$scope.seeElement = false;
	}
});



/* End brand App show hidden button*/


$(document).ready(function(){
 
	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.10);
		
		$('body').css({
			'background-position': '0 -' + posicion + 'px'
		});
 
	});
 
});


/*Menu*/
// Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });




  /*size ajust*/

  
















