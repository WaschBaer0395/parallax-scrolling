$.each($("#Slide1_1"), function () {

    var tl = new TimelineMax({
        paused: false
    });
// letter animation
    tl.fromTo(".anim-typewriter", 1.75, {
        width: "0",
    }, {
        width: "2.5em", /* same as CSS .line-1 width */
        ease: SteppedEase.config(11)
    }, 0);
// text cursor animation
    tl.fromTo(".anim-typewriter", 0.5, {
        "border-right-color": "rgba(255,255,255,0.75)"
    }, {
        "border-right-color": "rgba(255,255,255,0)",
        repeat: -1,
        ease: SteppedEase.config(11)
    }, 0);

    tl.play();
});