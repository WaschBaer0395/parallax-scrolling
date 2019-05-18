$(document).ready(function () {

    // Single scrollmagic controller for the entire experience
    var controller = new ScrollMagic.Controller();

    $.each($(".section"), function () {

        var self = this ;

        // Pin the entire section for the number of pixels specified in duration.
        var pinSectionOne = new ScrollMagic.Scene({
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
        $('.test1').each(function (i) {
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

        $(".scene1parallax").each(function (i) {

            var scene1 = TweenMax.fromTo($(this), 1, {
                y: $(this).attr('startY'),
            },{
                y: $(this).attr('endY'),
            });

            new ScrollMagic.Scene({
                triggerElement: self,
                duration: $(this).data('duration'),
                triggerHook: $(this).attr('hook'),
                offset: $(this).data('offset')
            })
                .setTween(scene1)
                .addIndicators({name: "pin scene", colorEnd: "#FFFFFF"})
                .addTo(controller);


        });
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
