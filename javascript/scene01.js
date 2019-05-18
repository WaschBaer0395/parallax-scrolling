$(document).ready(function () {
// Single scrollmagic controller for the entire experience
    var controller = new ScrollMagic.Controller();

$(".scene1parallax").each(function () {

    var scene1 = TweenMax.fromTo($(this), 1, {
        y: $(this).attr('startY'),
    },{
        y: $(this).attr('endY'),
    });

    new ScrollMagic.Scene({
        triggerElement: '.three',
        duration: $(this).data('duration'),
        triggerHook: $(this).attr('hook'),
        offset: $(this).data('offset')
    })
        .setTween(scene1)
        .addIndicators({name: "parallax_scene01", colorEnd: "#FFFFFF"})
        .addTo(controller);


});
// FADE-IN SCENE FOR QUINN SCENE_ONE//
//////////////////////////////////////
$("#scene_one_quinn").each(function () {
    var quinn = TweenMax.fromTo($(this), 2, {
        x: $(this).attr('startX'),
        opacity: $(this).attr('startOpacity'),
    },{
        x: $(this).attr('endX'),
        opacity: $(this).attr('endOpacity'), // start y !  for use add this to animating div data-endOpacity=" "
        ease: Expo.easeOut,
    });

    new ScrollMagic.Scene({
        triggerElement: '.three',
        duration: $(this).data('duration'),
        triggerHook: $(this).attr('hook'),
        offset: $(this).data('offset')
    })
        .setTween(quinn)
        .addIndicators({name: "quinn scene", colorEnd: "white"})
        .addTo(controller);
});


$("#scene_one_quinn").each(function () {
    var quinn = TweenMax.fromTo($(this), 2, {
        x: $(this).attr('endX'),
        opacity: $(this).attr('endOpacity'),
    },{
        x: $(this).attr('startX'),
        opacity: $(this).attr('startOpacity'),
        ease: Expo.easeIn,
    });

    new ScrollMagic.Scene({
        triggerElement: '.three',
        offset: 5000,
        duration: '50%'
    })
        .setTween(quinn)
        .addIndicators({name: "quinn scene_fade_out", colorEnd: "white"})
        .addTo(controller);
});
// FADE-IN SCENE FOR QUINN SCENE_ONE//
//////////////////////////////////////



// FADE-IN SCENE FOR SPEECHBUBLE_QUINN SCENE_ONE//
//////////////////////////////////////
$(".speechbubble_scene1").each(function () {
    var quinn = TweenMax.fromTo($(this), 2, {
        x: $(this).attr('startX'),
        opacity: $(this).attr('startOpacity'),
    },{
        x: $(this).attr('endX'),
        opacity: $(this).attr('endOpacity'),
        ease: Expo.easeIn,
    });

    new ScrollMagic.Scene({
        triggerElement: '.three',
        duration: $(this).data('duration'),
        triggerHook: $(this).attr('hook'),
        offset: $(this).data('offset')
    })
        .setTween(quinn)
        .addIndicators({name: "speechbubbleQuinnScene1", colorEnd: "yellow"})
        .addTo(controller);
});
$(".inner_content").each(function () {
    var quinn = TweenMax.fromTo($(this), 2, {
        opacity: $(this).attr('startOpacity'),
    },{
        opacity: $(this).attr('endOpacity'),
        ease: Expo.easeIn,
    });

    new ScrollMagic.Scene({
        triggerElement: '.three',
        duration: $(this).data('duration'),
        triggerHook: $(this).attr('hook'),
        offset: $(this).data('offset')
    })
        .setTween(quinn)
        .addIndicators({name: "inner_content_speechbubbles", colorEnd: "pink"})
        .addTo(controller);
});



// FADE-OUT SCENE_ONE//
//////////////////////////////////////
$("#Slide3").each(function () {
    var quinn = TweenMax.fromTo($(this), 2, {
        opacity: $(this).attr('startOpacity'),
    },{
        opacity: $(this).attr('endOpacity'), // start y !  for use add this to animating div data-endOpacity=" "
        ease: Expo.easeOut,
    });

    new ScrollMagic.Scene({
        triggerElement: '.four',
        duration: 3000,
        triggerHook: 1,
        offset: $(this).data('offset')
    })
        .setTween(quinn)
        .addIndicators({name: "fade_out scene1", colorEnd: "white"})
        .addTo(controller);
});
// END FADE-OUT SCENE_ONE//
//////////////////////////////////////
});