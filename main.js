"use strict"
/* 
//Video animation mit scroll
$(window).scroll( function(){
    //hier wird der scroll berechnet vom user
    let pixel = $(window).scrollTop()
    //console log wird angezeigt -scroll position
    console.log( { pixel })
    //hier wird der scroll berechnet solange der scrol dauern soll
    skate.currentTime = pixel / 1000
})
 */ 

$(document).ready(function(){
    //dieser abschnitt verändert die nummern der boxen
    $(".counter").counterUp({
        delay: 10,
        time: 1200
    })
})