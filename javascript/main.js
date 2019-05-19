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
