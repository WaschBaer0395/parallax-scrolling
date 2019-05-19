$(document).ready(function () {

    let controller = new ScrollMagic.Controller();

    $.each($("#Slide1_1"), function () { // gets called as soon as #Slide1_1 is in view

        // letter animation
        var tween = new TimelineMax(); // timeline for the typing and cursor animation

        tween.add( // adds the animation to our timeline
            TweenMax.fromTo(".anim-typewriter", 1.75, {
                width: "0",
            }, {
                width: "2.5em", // width of the typed element
                ease: SteppedEase.config(11)
            }, 0)
        );

// text cursor animation
        tween.add( // adds the animation to our timeline
            TweenMax.fromTo(".anim-typewriter", 0.5, {
                "border-right-color": "rgba(255,255,255,0.75)" // defenies the starting color and opacity of the cursor (unblinked)
            }, {
                "border-right-color": "rgba(255,255,255,0)", // defines the end color and opacity of the cursor (blinked)
                repeat: -1, // allows the cursor to keep blinking
                ease: SteppedEase.config(11)
            }, 0)
        );


        new ScrollMagic.Scene({
            triggerElement: '#Slide1_1', // trigger for the start of the animation
            triggerHook: 0.5, // start y !  for use add this to animating div data-hook=" "
            offset: 600 // start y !  for use add this to animating div data-offset=" "
        })
            .setTween(tween)
            //.addIndicators({name: "typewriter", colorTrigger: "orange", colorStart: "yellow", colorEnd: "teal"})
            .addTo(controller);
    });

    $('.textslide_down').each(function () {
        var fade = TweenMax.fromTo($(this), 1, {
            y: $(this).attr('startY'), // start y !  for use add this to animating div data-startY=" "
            opacity: $(this).attr('startOpacity') // start y !  for use add this to animating div data-startOpacity=" "
        }, {
            y: $(this).attr('endY'), // end y !  for use add this to animating div data-endY=" "
            opacity: $(this).attr('endOpacity'), // start y !  for use add this to animating div data-endOpacity=" "
            ease: Power1.easeInOut
        });

        new ScrollMagic.Scene({
            triggerElement: '#Slide2',
            triggerHook: .5, // start y !  for use add this to animating div data-hook=" "
            duration: $(this).data('duration'), // start y !  for use add this to animating div data-duration=" "
            offset: $(this).data('offset') // start y !  for use add this to animating div data-offset=" "
        })
            .setTween(fade)
            //.addIndicators({name: "slide_down"})
            .addTo(controller);
    });

    $('.textslide_down').each(function () {
        var fade = TweenMax.fromTo($(this), 1, {
            y: $(this).attr('endY'), // start y !  for use add this to animating div data-startY=" "
            opacity: $(this).attr('endOpacity') // start y !  for use add this to animating div data-startOpacity=" "
        }, {
            y: $(this).attr('startY'), // end y !  for use add this to animating div data-endY=" "
            opacity: $(this).attr('startOpacity'), // start y !  for use add this to animating div data-endOpacity=" "
            ease: Power1.easeInOut
        });

        new ScrollMagic.Scene({
            triggerElement: '#Slide2',
            triggerHook: .5, // start y !  for use add this to animating div data-hook=" "
            duration: 500, // start y !  for use add this to animating div data-duration=" "
            offset: $(this).attr('endOffset') // start y !  for use add this to animating div data-offset=" "
        })
            .setTween(fade)
            .addIndicators({name: "slide_down"})
            .addTo(controller);
    });

    $('.textslide_up').each(function () {
        var fade = TweenMax.fromTo($(this), 1, {
            y: $(this).attr('startY'), // start y !  for use add this to animating div data-startY=" "
            opacity: $(this).attr('startOpacity') // start y !  for use add this to animating div data-startOpacity=" "
        }, {
            y: $(this).attr('endY'), // end y !  for use add this to animating div data-endY=" "
            opacity: $(this).attr('endOpacity'), // start y !  for use add this to animating div data-endOpacity=" "
            ease: SlowMo.ease.config(0.5, 0.4, false)
        });

        new ScrollMagic.Scene({
            triggerElement: '#Slide2',
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
            triggerElement: '#Slide2',
            triggerHook: .5, // start y !  for use add this to animating div data-hook=" "
            duration: $(this).data('duration'), // start y !  for use add this to animating div data-duration=" "
            offset: $(this).attr('endOffset') // start y !  for use add this to animating div data-offset=" "
        })
            .setTween(fade)
            //.addIndicators({name: "slide_down"})
            .addTo(controller);
    });

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
            triggerElement: '#Slide2',
            triggerHook: .5, // start y !  for use add this to animating div data-hook=" "
            duration: $(this).data('duration'), // start y !  for use add this to animating div data-duration=" "
            offset: $(this).data('offset') // start y !  for use add this to animating div data-offset=" "
        })
            .setTween(fade)
            .addIndicators({name: "slide_up"})
            .addTo(controller);
    });
});