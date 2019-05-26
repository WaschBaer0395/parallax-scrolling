$(document).ready(function () {

    // Single scrollmagic controller for the entire experience
    const controller = new ScrollMagic.Controller();

    $('.typewriter').each(function () { // gets called as soon as #Slide1_1 is in view
        // letter animation
        const tween = new TimelineMax(); // timeline for the typing and cursor animation
        tween.add( // adds the animation to our timeline
            TweenMax.fromTo(".anim-typewriter", 1.75,
                {width: "0",},
                {width: "2.5em", ease: SteppedEase.config(11)}, 0));
        // text cursor animation
        tween.add( // adds the animation to our timeline
            TweenMax.fromTo(".anim-typewriter", 0.5,
                {"border-right-color": "rgba(255,255,255,0.75)"},
                {"border-right-color": "rgba(255,255,255,0)", repeat: -1, ease: SteppedEase.config(11)}, 0));
        new ScrollMagic.Scene({
            triggerElement: '.typewriter', // trigger for the start of the animation
            triggerHook: 0.5, // start y !  for use add this to animating div data-hook=" "
            offset: 600 // start y !  for use add this to animating div data-offset=" "
        })
            .setTween(tween)
            //.addIndicators({name: "typewriter", colorTrigger: "orange", colorStart: "yellow", colorEnd: "teal"})
            .addTo(controller);
    });


    //  Cover ================================
// animationen hier sind nur platzhalter !!! da noch kein cover gebaut wurde
    var action01 = new TimelineMax()
        .to('.title #mainTitle', 20, {autoAlpha: 1, y: -10}, "+=4")
        .to('.title #quote', 20, {autoAlpha: 1, y: -10}, "+=20")
        .to('.title #description', 20, {autoAlpha: 1, y: -10, delay: 25}, "+=20");

    const cover = new ScrollMagic.Scene({
        triggerElement: ".cover",
        duration: 1000,
        triggerHook: 0.5, //  top of viewport
        reverse: true
    })
        .setTween(action01)
        .setPin(".cover")
        //.addIndicators({name: "Cover"})
        .addTo(controller);

    //  Intro ================================

    var action01 = new TimelineMax()
        .to('.intro #mainTitle', 20, {autoAlpha: 1, y: -100}, "+=4")
        .to('.intro #description', 20, {autoAlpha: 1, y: -100}, "+=8")
        .to('.intro #quote', 20, {autoAlpha: 1, y: -100}, "+=8")
        .to('.intro #introscene', 20, {autoAlpha: 0}, "+=4");

    const intro = new ScrollMagic.Scene({
        triggerElement: ".intro",
        duration: 5000,
        triggerHook: 0, //  top of viewport
        reverse: true
    })
        .setTween(action01)
        .setPin(".intro")
        //.addIndicators({name: "INTRO"})
        .addTo(controller);

    //  typewriter ================================
    const timeline = new TimelineMax();
    // NO ANIMATION HERE SINCE ITS UP TOP INSIDE THE .each LOOP
    var prolog = new ScrollMagic.Scene({
        triggerElement: ".typewriter",
        duration: 2500,
        triggerHook: 0, //  top of viewport
        reverse: true
    })
        .setPin(".typewriter")
        //.addIndicators({name: "TYPEWRITER"})
        .addTo(controller);

//  Prolog ================================
// bsp: bewege nach oder mache in richtung .to( klasse , länge, {styles},
// start versatz ( verschiebt realtiv alle animationen dahinter!)
    var action01 = new TimelineMax()
        .to('.prolog #prolog1', 10, {autoAlpha: 1, y: 100}, "+=2") // fade from top
        .to('.prolog #prolog1', 10, {autoAlpha: 0, y: -250}, "+=4")// fade away to top
        .to('.prolog #prolog2', 10, {autoAlpha: 1, y: -250}, "-=8") // fade in from bottom
        .to('.prolog #prolog2', 10, {autoAlpha: 0}, "+=4")
        .to('.prolog #prolog3', 10, {autoAlpha: 1}, "+=4")
        .to('.prolog #prolog3', 10, {autoAlpha: 0}, "+=4")
        .to('#prologQuote', 10, {autoAlpha: 1}, "+=4")
        .to('#prologQuote', 10, {autoAlpha: 0}, "+=4")
        .to('.prolog #prolog4', 10, {autoAlpha: 1, y: -250}, "+=4") // fade from bottom
        .to('.prolog #prolog4', 10, {autoAlpha: 0}, "+=4") // fade from top
    ;
    var prolog = new ScrollMagic.Scene({
        triggerElement: ".prolog",
        duration: 15000,
        triggerHook: 0, //  top of viewport
        reverse: true
    })
        .setTween(action01)
        .setPin(".prolog")
        //.addIndicators({name:"PROLOG"})
        .addTo(controller);

//  scene01 ================================
// Aufbau ist ganz einfach !  im grunde nur copy and paste
// .to( zum bewegen oder irgend etwas machen ,
// dann Klasse der szene und mit leerzeichen dahinter , id des objektes
// dann mit komma getrennt die dauer zum strecken oder beschleunigen der animation mit scroll
// dann in geschweifter klammer attribute , z.b nach x: 100 bewegen oder autoAlpha: 1 damit opacity 1 wird
// WICHTIG ! autoalpha verwenden ! nicht opacity, und in der ID des objektes unbedingt visibility: hidden
// eintragen wenn das objekt sichtbar werden, also reinfaden soll wenn möglich auch direkt position relative geben !
// außer bei parallax hintergrund bild ebenen! die bleiben absolute ( keine ahnung warum aber anders gehts nicht )
// dann mit komma getrennt kommt ein start delay, "+=" später starten, "-=" früher starten ( geht nur wenn vorher schon eine animation lief
// wenn animationen gleich starten sollen, dann wird ein Punkt eingefügt mit .add("NameDesPunktes","start delay")
// animationen die an diesem punkt starten sollen werden dann angefügt indem am ende ,"NameDesPunktes" eingefügt wird
// soll am ende noch ein bisschen gescrolled werden können ohne das sich was bewegt ( z.b bei story abschniten ) dann in die geschweifte Klammer
// bei dem lezten objekt, delay: nummer  einfügen
// am ende noch mit ; schließen
// trigger ist immer die klasse direkt nach dem section im ersten div ! benannt nach inhalt der szene oder des textabschnites
// beispiel class="section prolog" dan wäre der trigger und der pin hier bei prolog!
// gleiches gilt für den Pin,
// für den aufbau im html dokument einfach immer an den anderen scenen orientieren
// fade ins und fadeout müssen extra angefügt werden ! siehe unten !
    var action01 = new TimelineMax()
        // Klasse mit ID        //dauer//  attribute   // startDelay
            .to('.scene01 #scene_one_quinn', 10, {autoAlpha: 1, x: 100}, "+=4")
            .to('.scene01 #scene01_bubble1', 10, {autoAlpha: 1, x: 100}, "+=2")
            .to('.scene01 #scene01_bubble_quinn', 10, {autoAlpha: 1, x: 100}, "+=4")
            .add("Parallax", "+=10") //insert point Parallax into timeline
            .to('.scene01 #scene_one_second_layer', 40, {y: -35}, "Parallax")// starting at point Parallax
            .to('.scene01 #scene_one_third_layer', 40, {y: -35}, "Parallax")// starting at point Parallax
            .to('.scene01 #scene_one_fourth_layer', 40, {y: -25}, "Parallax")// starting at point Parallax
            .to('.scene01 #scene_one_fifth_layer', 40, {y: 0}, "Parallax")// starting at point Parallax
            .to('.scene01 #scene_one_quinn', 40, {y: -35}, "Parallax")// starting at point Parallax
            .to('.scene01 #scene01_bubble1', 40, {y: -10}, "Parallax")// starting at point Parallax
            .to('.scene01 #scene01_bubble_quinn', 40, {y: -80}, "Parallax")// starting at point Parallax
    ;

    const scene01 = new ScrollMagic.Scene({
        triggerElement: ".scene01",
        duration: 8000,
        triggerHook: 0, //  top of viewport
        reverse: true
    })
        .setTween(action01)
        .setPin(".scene01")
        //.addIndicators()
        .addTo(controller);


// fade in ist einfach nur die scenen klasse!
//  FadeInScene01 ================================
    $(".scene01").each(function () {
        const quinn3 = TweenMax.fromTo($(this), 2, {opacity: 0,}, {opacity: 1, ease: Power1.easeIn});
        new ScrollMagic.Scene({
            triggerElement: '.scene01',
            duration: 600,
            triggerHook: .6,
            offset: 0
        })
            .setTween(quinn3)
            //.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange"})
            .addTo(controller);
    });

// fadeout hingegen ist scenen klasse aber mit trigger auf der nächsten scene bei einem onEnter Hook !!
//  FadeOutScene01 ================================
    $(".scene01").each(function () {
        const quinn2 = TweenMax.to($(this), 2, {opacity: 0, ease: Power1.easeIn,});
        new ScrollMagic.Scene({
            triggerElement: '.scene02',
            duration: 500,
            triggerHook: "onEnter",
        })
            .setTween(quinn2)
            //.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange",colorTrigger:"white"})
            .addTo(controller);
    });

    // BEGINN SZENE02 //
    //  //  //  //   //


//  FadeInScene02 ================================
    $(".scene02").each(function () {
        const scene2 = TweenMax.fromTo($(this), 2, {opacity: 0,}, {opacity: 1, ease: Power1.easeIn});
        new ScrollMagic.Scene({
            triggerElement: '.scene02',
            duration: 500,
            triggerHook: .6,
            offset: 0
        })
            .setTween(scene2)
            //.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange"})
            .addTo(controller);
    });
    //  END FadeInScene02 ================================

//  FadeOutScene02 ================================
    $(".scene02").each(function () {
        const scene02 = TweenMax.to($(this), 2, {opacity: 0, ease: Power1.easeIn,});
        new ScrollMagic.Scene({
            triggerElement: '.scene03',
            duration: 700,
            triggerHook: "onEnter",
        })
            .setTween(scene02)
            //.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange",colorTrigger:"white"})
            .addTo(controller);
    });
    //  END FadeOutScene02 ================================

    var scene02 = new TimelineMax()
        // Klasse mit ID        //dauer//  attribute   // startDelay
            .add("Parallax", "+=40") //insert point Parallax into timeline
            .to('.scene02 #scene2_foreground', 15, {y: -30}, "Parallax")// starting at point Parallax
            .to('.scene02 #scene02_quinn', 15, {y: -15}, "Parallax")
    ;

    new ScrollMagic.Scene({
        triggerElement: ".scene02",
        duration: 8000,
        triggerHook: 0, //  top of viewport
        reverse: true
    })
        .setTween(scene02)
        .setPin(".scene02")
        .addIndicators({name: "Scene02"})
        .addTo(controller);


});
