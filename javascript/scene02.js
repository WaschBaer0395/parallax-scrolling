$(document).ready(function () {
// Single scrollmagic controller for the entire experience
    let controller = new ScrollMagic.Controller();

    /*$(".scene2parallax").each(function () {

        var scene2 = TweenMax.fromTo($(this), 1, {
            y: $(this).attr('startY'),
        }, {
            y: $(this).attr('endY'),
        });

        new ScrollMagic.Scene({
            triggerElement: '.four',
            duration: $(this).data('duration'),
            triggerHook: $(this).attr('hook'),
            offset: $(this).data('offset')
        })
            .setTween(scene2)
            //.addIndicators({name: "parallax_scene01", colorEnd: "#FFFFFF"})
            .addTo(controller);


    });*/

    $('.text_fadeIn').each(function () {
        var fade = TweenMax.fromTo($(this), 1, {
            y: $(this).attr('startY'),
            opacity: $(this).attr('startOpacity'), // start y !  for use add this to animating div data-startOpacity=" "
        }, {
            y: $(this).attr('endY'),
            opacity: $(this).attr('endOpacity'), // start y !  for use add this to animating div data-endOpacity=" "
            ease: SlowMo.ease.config(0.5, 0.4, false)
        });

        new ScrollMagic.Scene({
            triggerElement: '#Slide4',
            triggerHook: .5, // start y !  for use add this to animating div data-hook=" "
            duration: $(this).data('duration'), // start y !  for use add this to animating div data-duration=" "
            offset: $(this).data('offset') // start y !  for use add this to animating div data-offset=" "
        })
            .setTween(fade)
            .addIndicators({name: "slide_up"})
            .addTo(controller);
    });

    $('.text_fadeout').each(function () {
        var fade = TweenMax.fromTo($(this), 1, {
            opacity: $(this).attr('endOpacity') // start y !  for use add this to animating div data-startOpacity=" "
        }, {
            opacity: $(this).attr('startOpacity'), // start y !  for use add this to animating div data-endOpacity=" "
        });

        new ScrollMagic.Scene({
            triggerElement: '#Slide4',
            triggerHook: .5, // start y !  for use add this to animating div data-hook=" "
            duration: $(this).data('duration'), // start y !  for use add this to animating div data-duration=" "
            offset: $(this).attr('endOffset') // start y !  for use add this to animating div data-offset=" "
        })
            .setTween(fade)
            //.addIndicators({name: "slide_down"})
            .addTo(controller);
    });
});