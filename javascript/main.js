if (document.documentElement.clientWidth > 768) {
    // init controller
    var controller = new ScrollMagic.Controller();

    // Parallax background
    new ScrollMagic.Scene({
        triggerElement: "#parallax",
        triggerHook: "onEnter",
    })
        .duration('200%')
        .setTween("#parallax", {
            backgroundPosition: "50% 100%",
            ease: Linear.easeNone
        })
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);


    //////////////////////
    // Slide in Scene 1 //
    //////////////////////
    $(".slide").each(function() {
        new ScrollMagic.Scene({
            triggerElement: this,
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
        var tween = TweenMax.from(this, .6, {
            y: 100,  // offset of starting position for animation
            autoAlpha: 0, // setting the opacity to 0 for start
            delay: 0,
            ease: Power2.easeOut
        }, .1);

        new ScrollMagic.Scene({ // creating a Scene for the animation
                triggerElement: this, // triggering when current div is reached
                offset: -100, // offsetting the trigger point
                reverse:true
            })
                .setTween(tween)
                .addTo(controller)
                //.addIndicators() // for debugging only !
        ;
    });
}