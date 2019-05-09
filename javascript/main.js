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

    // Slide in
    new ScrollMagic.Scene({
        triggerElement: "#scene1",
        triggerHook: "onLeave",
    })
        .setPin("#scene1")
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#story1",
        triggerHook: "onLeave",
    })
        .setPin("#story1")
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);

    //Moving divs

    //Fly in from the left
    var fromLeftTimeline = new TimelineMax();
    var fromLeftFrom = TweenMax.from("#left", 1, {
        x: -500
    });
    var fromLeftTo = TweenMax.to("#left", 1, {
        x: 0
    });
    fromLeftTimeline
        .add(fromLeftFrom)
        .add(fromLeftTo);

    new ScrollMagic.Scene({
        triggerElement: "#story1",
        offset: 200,
    })
        .setTween(fromLeftTimeline)
        .duration(400)
        //    .reverse(false)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);

    // Fade in
    var fadeInTimeline = new TimelineMax();
    var fadeInFrom = TweenMax.from("#opacity", 1, {
        autoAlpha: 0
    });
    var fadeInTo = TweenMax.to("#opacity", 1, {
        autoAlpha: 1
    });
    fadeInTimeline
        .add(fadeInFrom)
        .add(fadeInTo);

    new ScrollMagic.Scene({
        triggerElement: "#story1",
        offset: 200,
    })
        .setTween(fadeInTimeline)
        .duration(400)
        //    .reverse(false)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);

    //Fly in from the left
    var fromBottomTimeline = new TimelineMax();
    var fromBottomFrom = TweenMax.from("#bottom", 1, {
        y: 300
    });
    var fromBottomTo = TweenMax.to("#bottom", 1, {
        y: 0
    });
    fromBottomTimeline
        .add(fromBottomFrom)
        .add(fromBottomTo);

    new ScrollMagic.Scene({
        triggerElement: "#story1",
        offset: 200,
    })
        .addIndicators()
        .setTween(fromBottomTimeline)
        .duration(400)
        //    .reverse(false)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);

}