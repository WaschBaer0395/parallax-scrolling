$(document).ready(function () {

    // Single scrollmagic controller for the entire experience
    var controller = new ScrollMagic.Controller();

    $.each($(".section"), function () {

        var self = this ;

        // Pin the entire section for the number of pixels specified in duration.
        new ScrollMagic.Scene({
            triggerElement: self, 						// The section element
            triggerHook: 0, 							// Sets the pin trigger to the top of the element.
            duration: $(this).data('duration')			// Scroll for this many pixels before unpinning.
        })
            .setPin(self)
            .addIndicators({name: "Slide"})
            .addTo(controller);

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

        /*        // Get the content to be parallaxed over the pinned section.
                $squares = $(this).find('.square');
                // Loop over the squares
                $.each($squares, function () {
                    // For each square, set a tween
                    var tween = TweenMax.fromTo(this, 1, { 		// Can probably use tweenlite
                        bottom: -$(this).height() 				// Start the element outside of the bottom of the viewport
                    },{
                        top: -$(this).height(),					// Animate to outside the top of the viewport.
                        ease: Sine.easeOut        				// Set the easing
                    });

                    // Add the tween to the controller. The animation duration and offset is set via data attrs
                    var animateSquare = new ScrollMagic.Scene({
                        triggerElement: self, 					// The section.
                        triggerHook: 0,							// Use the top of the section element as the trigger.
                        duration: $(this).data('duration'),		// How many pixel scroll the animation lasts.
                        offset: $(this).data('offset')			// The scroll offset before the animation begins.
                    })
                        .setTween(tween)
                        .addTo(controller)
                })*/
    });



    //////////////////////////////////////////////////
    // Move objects on trigger                      //
    // x1 = start x                                 //
    // y1 = start y                                 //
    // x2 = end x                                   //
    // y2 = end y                                   //
    // offset = move start and end trigger together //
    // duration = in % how long animation should be //
    //////////////////////////////////////////////////
    /*
    $(".move").each(function () { // runs as soon as .move is visible in window
        var fromBottomTimeline = new TimelineMax();
        var fromBottomFrom = TweenMax.from(this, 1, {
            x: this.getAttribute("x1"), // start x
            y: this.getAttribute("y1")  // start y
        });
        var fromBottomTo = TweenMax.to(this, 1, {
            x: this.getAttribute("x2"), // end x
            y: this.getAttribute("y2")  // end y
        });
        fromBottomTimeline
            .add(fromBottomFrom)
            .add(fromBottomTo);

        new ScrollMagic.Scene({
            triggerElement: this.getAttribute("trigger"),
            triggerHook: "onCenter",                          // offsetting the trigger
            offset: this.getAttribute("offset")     // offsetting the start and end point
        })
            .setTween(fromBottomTimeline)
            .duration(this.getAttribute("duration"))   // duration of the animation
            //.reverse(true)
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
    });
*/





});
