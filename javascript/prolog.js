$(document).ready(function () {

    var controller = new ScrollMagic.Controller();

    /////////////////////////////////////////////////////////
    // Fade objects on trigger                             //
    // this method can be used for 1 slide ! but multiple  //
    // fades inside the slide, if you need to fade on      //
    // another Scene ( next slide or whatever ) then       //
    // you need to recopy this function for that particular//
    // slide and rename the trigger ( in this case .fade)  //
    // to something like .fadeScene1 or .fadeScene2        //
    // startY = start position Y                           //
    // startX = start position X                           //
    // endY = end position Y                               //
    // endX = end position X                               //
    // startOpacity = obviously                            //
    // endOpacity = obviously                              //
    // hook = moves the trigger , range from 0-1 bsp. 0.5  //
    // offset = move start and end trigger together        //
    // duration = how long animation should be             //
    /////////////////////////////////////////////////////////
    $('.test1').each(function () {
        var fade = TweenMax.fromTo($(this), 1, {
            y: $(this).attr('startY'), // start y !  for use add this to animating div data-startY=" "
            x: $(this).attr('startX'), // start x !  for use add this to animating div data-startX=" "
            opacity: $(this).attr('startOpacity') // start y !  for use add this to animating div data-startOpacity=" "
        }, {
            y: $(this).attr('endY'), // end y !  for use add this to animating div data-endY=" "
            x: $(this).attr('endX'), // end x !  for use add this to animating div data-endX=" "
            opacity: $(this).attr('endOpacity'), // start y !  for use add this to animating div data-endOpacity=" "
            ease: Power1.easeInOut
        });

        new ScrollMagic.Scene({
            triggerElement: self,
            triggerHook: $(this).attr('hook'), // start y !  for use add this to animating div data-hook=" "
            duration: $(this).data('duration'), // start y !  for use add this to animating div data-duration=" "
            offset: $(this).data('offset') // start y !  for use add this to animating div data-offset=" "
        })
            .setTween(fade)
            .addIndicators({name: "fade"})
            .addTo(controller);
    });

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
                repeat:-1, // allows the cursor to keep blinking
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

});