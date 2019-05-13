// prevent running the effects on a screen that is not wide enough
if (document.documentElement.clientWidth > 768) {
    // init controller
    var controller = new ScrollMagic.Controller();

    /////////////////////////
    // Parallax background //
    /////////////////////////
    new ScrollMagic.Scene({ // creating a scene for the parallax effects
        triggerElement: "#parallax", // triggering on the id for parallax
        triggerHook: "onEnter", // and only on entering the div with said ID
    })
        .duration('500%')
        .setTween("#parallax", {
            backgroundPosition: "50% 100%",
            ease: Linear.easeNone
        })
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);


    /////////////////////
    // Slide in Scenes //
    /////////////////////
    $(".slide").each(function() {  // runs as soon as .slide is visible in window
        new ScrollMagic.Scene({ // creating a new scene for the parallax slide effects
            triggerElement: this, // for current highlighted div
            triggerHook: "onLeave",
        })
            .setPin(this)
            //.addIndicators() // add indicators (requires plugin)
            .addTo(controller);
    });


    ///////////////////////////////////////////////
    // fadeIn from the bottom for story sections //
    ///////////////////////////////////////////////
    $(".fade").each(function() { // runs as soon as .fadeup is visible in window
        var timeline = new TimelineMax
        var tween = TweenMax.from(this,1, {
            y: 100,  // offset of starting position for animation
            autoAlpha: 0, // setting the opacity to 0 for start
            ease: Power2.easeOut
        });

        timeline
            .add(tween);

        new ScrollMagic.Scene({ // creating a Scene for the animation
                triggerElement: ".trigger", // triggering when current div is reached
                offset: 800, // offsetting the trigger point
                reverse:true
            })
                .setTween(timeline)
                .duration('50%')
                .addTo(controller)
                .addIndicators() // for debugging only !
        ;
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
    $(".move").each(function() { // runs as soon as .move is visible in window
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
            triggerElement: ".trigger",
            triggerHook:"onCenter",                          // offsetting the trigger
            offset: this.getAttribute("offset")     // offsetting the start and end point
        })
            .setTween(fromBottomTimeline)
            .duration( this.getAttribute("duration"))   // duration of the animation
            //.reverse(true)
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
    });
}