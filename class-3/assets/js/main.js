(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
     // -- start work -- //

    /*~~~case studies~~~*/  
    $(".case_studies_carousel").owlCarousel({
        items:3,
        loop:true,
        margin:30,
        dots:true,
        nav:false
    });

    $(".testimonial_carousel").owlCarousel({
        items:1,
        loop:true,
        dots:true,
        nav:false
    });


     // -- End work -- //
            
    });

   jQuery(window).load(function(){

   });

}(jQuery));	