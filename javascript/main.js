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
        .duration('200%')
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
    $(".fadeup").each(function() { // runs as soon as .fadeup is visible in window
        var timeline = new TimelineMax
        var tween = TweenMax.from(this,1.5, {
            y: 100,  // offset of starting position for animation
            autoAlpha: 0, // setting the opacity to 0 for start
            ease: Power2.easeOut
        }, .1);

        timeline
            .add(tween);

        new ScrollMagic.Scene({ // creating a Scene for the animation
                triggerElement: this, // triggering when current div is reached
                offset: -100, // offsetting the trigger point
                reverse:true
            })
                .setTween(timeline)
                .addTo(controller)
                //.addIndicators() // for debugging only !
        ;
    });
}