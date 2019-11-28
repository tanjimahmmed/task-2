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

    
    $(".logo_carousel").owlCarousel({
        items:6,
        margin:30,
        loop:true,
        dots:false,
        nav:false
    });

    $(".homepage_slides").owlCarousel({
        items:1,
        loop:true,
        dots:true,
        nav:true,
        navText:["<i class='zmdi zmdi-long-arrow-left'></i>" , "<i class='zmdi zmdi-long-arrow-right'></i>"]
    });

     // -- End work -- //
            
    });

   jQuery(window).load(function(){

   });

}(jQuery));	