$(document).ready(function () {

    // Single scrollmagic controller for the entire experience
    var controller = new ScrollMagic.Controller();

    $.each($(".section"), function () {

        var self = this;

        // Pin the entire section for the number of pixels specified in duration.
        var pinSectionOne = new ScrollMagic.Scene({
            triggerElement: this, 						// The section element
            triggerHook: 0, 							// Sets the pin trigger to the top of the element.
            duration: $(this).data('duration')			// Scroll for this many pixels before unpinning.
        })
            .setPin(this)
            .addIndicators({name: "Slide"})
            .addTo(controller);

        ///////////////////////////////////////////////
        // fadeIn from the bottom for story sections //
        ///////////////////////////////////////////////
        $('.fade').each(function () {
            var fadein_tween = TweenMax
                .fromTo(this, 1, {
                    yPercent: 100,
                    xPercent: 0,
                    opacity: 0
                }, {
                    yPercent: 0,
                    xPercent: 0,
                    opacity: 1,
                    ease: Power1.easeInOut
                });

            var scene = new ScrollMagic.Scene({
                triggerElement: self,
                triggerHook: "onEnter",
                duration: 800,
                offset: 400
            })
                .setTween(fadein_tween)
                .addIndicators({name: "fade"})
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


    // TESTfunction for Szene_1 parallax layer


    var laterne = new TimelineMax({onComplete: myFunction});
    //laterne.fromTo('.laterne', 1, {x: 40}, {x: 0});
    laterne.fromTo('.laterne', 1, {y: 0}, {y: -10});


    var scene = new ScrollMagic.Scene({
        triggerElement: "#Slide3"
        , duration: 900
        , triggerHook: .5
        , offset: 3500
    })
        .setTween(laterne)
        .addIndicators({name: "pin scene", colorEnd: "#FFFFFF"})


        .addTo(controller);

    function myFunction() {
        console.log('myFunction()')
    }

    var boden = new TimelineMax({onComplete: myFunction});
    //boden.fromTo('.ground', 1, {x: 10}, {x: 0});
    boden.fromTo('.ground', 1, {y: 0}, {y: -10});


    var scene = new ScrollMagic.Scene({
        triggerElement: "#Slide3"
        , duration: 1200
        , triggerHook: .5
        , offset: 3500
    })
        .setTween(boden)
        .addTo(controller);

    var background2 = new TimelineMax({onComplete: myFunction});
    //background2.fromTo('.background', 1, {x: 0}, {x: 20});
    background2.fromTo('.background', 1, {y: 0}, {y: -10});

    var scene = new ScrollMagic.Scene({
        triggerElement: "#Slide3"
        , duration: 1200
        , triggerHook: .5
        , offset: 3500
    })
        .setTween(background2)
        .addTo(controller);
    var building = new TimelineMax({onComplete: myFunction});
    //building.fromTo('.building', 1, {x: 20}, {x: 0});
    building.fromTo('.building', 1, {y: 0}, {y: -40});

    var scene = new ScrollMagic.Scene({
        triggerElement: "#Slide3"
        , duration: 1200
        , triggerHook: 0.5
        , offset: 3500
    })
        .setTween(building)
        .addTo(controller);

    function myFunction() {
        console.log('myFunction()')
    }
//////// END TESTfunction

});
