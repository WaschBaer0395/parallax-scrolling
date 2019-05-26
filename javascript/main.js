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
                                   {
                                       "border-right-color": "rgba(255,255,255,0)",
                                       repeat: -1,
                                       ease: SteppedEase.config(11)
                                   }, 0));

        let tweenScene = new ScrollMagic.Scene({
                                                   triggerElement: '.typewriter', // trigger for the start of the animation
                                                   triggerHook: 0.5, // start y !  for use add this to animating div data-hook=" "
                                                   offset: 600 // start y !  for use add this to animating div data-offset=" "
                                               });
        tweenScene.setTween(tween)
        tweenScene.addTo(controller)
        //tweenScene.addIndicators({name: "typewriter", colorTrigger: "orange", colorStart: "yellow", colorEnd: "teal"});
    });


    //  Cover ================================
    // Animationen hier sind nur Platzhalter !!! da noch kein cover gebaut wurde
    let coverAction = new TimelineMax();
    coverAction.to('.title #mainTitle', 20, {autoAlpha: 1, y: -10}, "+=4");
    coverAction.to('.title #quote', 20, {autoAlpha: 1, y: -10}, "+=20");
    coverAction.to('.title #description', 20, {autoAlpha: 1, y: -10, delay: 25}, "+=20");

    const cover = new ScrollMagic.Scene({
                                            triggerElement: ".cover",
                                            duration: 1000,
                                            triggerHook: 0.5, //  top of viewport
                                            reverse: true
                                        });
    cover.setTween(coverAction);
    cover.setPin(".cover");
    cover.addTo(controller);
    //cover.addIndicators({name: "Cover"});

    //  Intro ================================
    let introAction = new TimelineMax();
    introAction.to('.intro #mainTitle', 20, {autoAlpha: 1, y: -100}, "+=4");
    introAction.to('.intro #description', 20, {autoAlpha: 1, y: -100}, "+=8");
    introAction.to('.intro #quote', 20, {autoAlpha: 1, y: -100}, "+=8");
    introAction.to('.intro #introscene', 20, {autoAlpha: 0}, "+=4");

    const intro = new ScrollMagic.Scene({
                                            triggerElement: ".intro",
                                            duration: 5000,
                                            triggerHook: 0, //  top of viewport
                                            reverse: true
                                        });
    intro.setTween(introAction);
    intro.setPin(".intro");
    intro.addTo(controller);
    //intro.addIndicators({name: "INTRO"});

    //  typewriter ================================
    //let timeline = new TimelineMax();
    // NO ANIMATION HERE SINCE ITS UP TOP INSIDE THE .each LOOP
    const typewriter = new ScrollMagic.Scene({
                                                 triggerElement: ".typewriter",
                                                 duration: 2500,
                                                 triggerHook: 0, //  top of viewport
                                                 reverse: true
                                             });
    //typewriter.setTween(timeline);
    typewriter.setPin(".typewriter");
    typewriter.addTo(controller);
    //typewriter.addIndicators({name: "TYPEWRITER"});

//  Prolog ================================
// bsp: bewege nach oder mache in richtung .to( klasse , länge, {styles},
// start versatz ( verschiebt realtiv alle animationen dahinter!)
    let prologAction = new TimelineMax();
    prologAction.to('.prolog #prolog1', 10, {autoAlpha: 1, y: 100}, "+=2"); // fade from top
    prologAction.to('.prolog #prolog1', 10, {autoAlpha: 0, y: -250}, "+=4"); // fade away to top
    prologAction.to('.prolog #prolog2', 10, {autoAlpha: 1, y: -250}, "-=8"); // fade in from bottom
    prologAction.to('.prolog #prolog2', 10, {autoAlpha: 0}, "+=4");
    prologAction.to('.prolog #prolog3', 10, {autoAlpha: 1}, "+=4");
    prologAction.to('.prolog #prolog3', 10, {autoAlpha: 0}, "+=4");
    prologAction.to('#prologQuote', 10, {autoAlpha: 1}, "+=4");
    prologAction.to('#prologQuote', 10, {autoAlpha: 0}, "+=4");
    prologAction.to('.prolog #prolog4', 10, {autoAlpha: 1, y: -250}, "+=4"); // fade from bottom
    prologAction.to('.prolog #prolog4', 10, {autoAlpha: 0}, "+=4"); // fade from top

    const prolog = new ScrollMagic.Scene({
                                             triggerElement: ".prolog",
                                             duration: 15000,
                                             triggerHook: 0, //  top of viewport
                                             reverse: true
                                         });
    prolog.setTween(prologAction);
    prolog.setPin(".prolog");
    prolog.addTo(controller);
    //prolog.addIndicators({name:"PROLOG"});

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
    let scene01Action = new TimelineMax();
    // Klasse mit ID        //dauer//  attribute   // startDelay
    scene01Action.to('.scene01 #scene_one_quinn', 10, {autoAlpha: 1, x: 100}, "+=4");
    scene01Action.to('.scene01 #scene01_bubble1', 10, {autoAlpha: 1, x: 100}, "+=2");
    scene01Action.to('.scene01 #scene01_bubble_quinn', 10, {autoAlpha: 1, x: 100}, "+=4");
    scene01Action.add("Parallax", "+=10"); //insert point Parallax into timeline
    scene01Action.to('.scene01 #scene_one_second_layer', 40, {y: -35}, "Parallax"); // starting at point Parallax
    scene01Action.to('.scene01 #scene_one_third_layer', 40, {y: -35}, "Parallax"); // starting at point Parallax
    scene01Action.to('.scene01 #scene_one_fourth_layer', 40, {y: -25}, "Parallax"); // starting at point Parallax
    scene01Action.to('.scene01 #scene_one_fifth_layer', 40, {y: 0}, "Parallax"); // starting at point Parallax
    scene01Action.to('.scene01 #scene_one_quinn', 40, {y: -35}, "Parallax"); // starting at point Parallax
    scene01Action.to('.scene01 #scene01_bubble1', 40, {y: -10}, "Parallax"); // starting at point Parallax
    scene01Action.to('.scene01 #scene01_bubble_quinn', 40, {y: -80}, "Parallax"); // starting at point Parallax

    const scene01 = new ScrollMagic.Scene({
                                              triggerElement: ".scene01",
                                              duration: 8000,
                                              triggerHook: 0, //  top of viewport
                                              reverse: true
                                          });
    scene01.setTween(scene01Action);
    scene01.setPin(".scene01");
    scene01.addTo(controller);
    //scene01.addIndicators();


// fade in ist einfach nur die scenen klasse!
//  FadeInScene01 ================================
    $(".scene01").each(function () {
        const quinn3 = TweenMax.fromTo($(this), 2, {opacity: 0}, {opacity: 1, ease: Power1.easeIn});

        let quinn3Scene = new ScrollMagic.Scene({
                                                    triggerElement: '.scene01',
                                                    duration: 600,
                                                    triggerHook: .6,
                                                    offset: 0
                                                });
        quinn3Scene.setTween(quinn3);
        quinn3Scene.addTo(controller);
        //quinn3Scene.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange"});
    });

// fadeout hingegen ist scenen klasse aber mit trigger auf der nächsten scene bei einem onEnter Hook !!
//  FadeOutScene01 ================================
    $(".scene01").each(function () {
        const quinn2 = TweenMax.to($(this), 2, {opacity: 0, ease: Power1.easeIn,});

        let quinn2Scene = new ScrollMagic.Scene({
                                                    triggerElement: '.scene02Text',
                                                    duration: 500,
                                                    triggerHook: "onEnter",
                                                });
        quinn2Scene.setTween(quinn2);
        quinn2Scene.addTo(controller);
        //quinn2Scene.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange",colorTrigger:"white"});
    });

    //  END scene01 ================================

    //  START scene02 ================================
    //SCENE 2 TEXT =========================
    let scene02TextAction = new TimelineMax();
    scene02TextAction.to('.scene02Text #scene02_textblock1', 10, {autoAlpha: 1, y: 100}, "+=2"); //fade from top
    scene02TextAction.to('.scene02Text #scene02_textblock1', 10, {autoAlpha: 0, y: -250}, "+=4"); // fade away to top
    scene02TextAction.to('.scene02_textline #scene02_textline1', 20, {autoAlpha: 1, y: 50, x: -60}, "+=4");
    scene02TextAction.to('.scene02_textline #scene02_textline2', 20, {autoAlpha: 1, y: 150, x: 80}, "+=4");
    scene02TextAction.to('.scene02_textline #scene02_textline3', 20, {autoAlpha: 1, y: 250, x: 40}, "+=4");
    scene02TextAction.to('.scene02_textline #scene02_textline1', 10, {autoAlpha: 0, x: 100}, "+=4");
    scene02TextAction.to('.scene02_textline #scene02_textline2', 10, {autoAlpha: 0, x: 100}, "+=4");
    scene02TextAction.to('.scene02_textline #scene02_textline3', 10, {autoAlpha: 0, x: 100}, "+=4");
    scene02TextAction.to('.scene02Text #scene02_textblock2', 20, {autoAlpha: 1, y: -250}, "-=8");
    scene02TextAction.to('.scene02Text #scene02_textblock2', 10, {autoAlpha: 0}, "+=4");
    scene02TextAction.to('.scene02Text #scene02_textblock3', 20, {autoAlpha: 1, y: -250}, "-=8");
    scene02TextAction.to('.scene02Text #scene02_textblock3', 10, {autoAlpha: 0}, "+=4");
    scene02TextAction.to('.scene02Text #scene02_textblock4', 20, {autoAlpha: 1, y: -550}, "+=4");

    const scene02Text = new ScrollMagic.Scene({
                                                  triggerElement: ".scene02Text",
                                                  duration: 10000,
                                                  triggerHook: 0,
                                                  reverse: true
                                              });

    scene02Text.setTween(scene02TextAction);
    scene02Text.setPin(".scene02Text");
    scene02Text.addTo(controller);

    // SCENE 2 BILD ===============================
    let scene02Action = new TimelineMax();
    // Klasse mit ID        //dauer//  attribute   // startDelay
    scene02Action.to('.scene02Bild #scene02_bubble1', 10, {autoAlpha: 1, x: 100}, "+=2");
    scene02Action.add("Parallax", "+=0"); //insert point Parallax into timeline
    scene02Action.to('.scene02Bild #scene02_foreground', 15, {y: -20}, "Parallax"); // starting at point Parallax
    scene02Action.to('.scene02Bild #scene02_quinn', 15, {y: -15}, "Parallax");


    const scene02 = new ScrollMagic.Scene({
                                              triggerElement: ".scene02Bild",
                                              duration: 5000,
                                              triggerHook: 0, //  top of viewport
                                              reverse: true
                                          });
    scene02.setTween(scene02Action);
    scene02.setPin(".scene02Bild");
    scene02.addTo(controller);
    scene02.addIndicators({name: "Scene02"});


    //  START FadeInScene02 Text================================
    $(".scene02Text").each(function () {
        const scene2TextIn = TweenMax.fromTo($(this), 2, {opacity: 0}, {opacity: 1, ease: Power1.easeIn});

        let scene2Scene = new ScrollMagic.Scene({
                                                    triggerElement: '.scene02Text',
                                                    duration: 500,
                                                    triggerHook: .6,
                                                    offset: 0
                                                });
        scene2Scene.setTween(scene2TextIn);
        scene2Scene.addTo(controller);
        //scene2Scene.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange"});
    });
    //  END FadeInScene02 Text ================================

    //  FadeOutScene02 Text ================================
    $(".scene02Text").each(function () {
        const scene02TextOut = TweenMax.to($(this), 2, {opacity: 0, ease: Power1.easeIn,});

        let scene2Scene = new ScrollMagic.Scene({
                                                    triggerElement: '.scene02Bild',
                                                    duration: 700,
                                                    triggerHook: "onEnter",
                                                });
        scene2Scene.setTween(scene02TextOut);
        scene2Scene.addTo(controller);
    });
    //  END FadeOutScene02 Text ================================

    //  START FadeInScene02 Bild================================
    $(".scene02Bild").each(function () {
        const scene02BildIn = TweenMax.fromTo($(this), 2, {opacity: 0}, {opacity: 1, ease: Power1.easeIn});

        let scene2Scene = new ScrollMagic.Scene({
                                                    triggerElement: '.scene02Bild',
                                                    duration: 500,
                                                    triggerHook: .6,
                                                    offset: 0
                                                });
        scene2Scene.setTween(scene02BildIn);
        scene2Scene.addTo(controller);
    });
    //  END FadeInScene02 Bild ================================

    //SCENE 2 TEXT-TRANSITION =========================
    let scene02TextTransitionAction = new TimelineMax();
    scene02TextTransitionAction.to('.scene02TextTransition #scene02_textblock5', 10, {autoAlpha: 1, y: 100}, "+=2");
    scene02TextTransitionAction.to('.scene02TextTransition #scene02_textblock5', 10, {autoAlpha: 0, y: -250}, "+=4");


    const scene02Transition = new ScrollMagic.Scene({
                                                        triggerElement: ".scene02TextTransition",
                                                        duration: 500,
                                                        triggerHook: 0,
                                                        reverse: true
                                                    });

    scene02Transition.setTween(scene02TextTransitionAction);
    scene02Transition.setPin(".scene02TextTransition");
    scene02Transition.addTo(controller);

    //  FadeOutScene02 Bild ================================
    $(".scene02Bild").each(function () {
        const scene02BildOut = TweenMax.to($(this), 2, {opacity: 0, ease: Power1.easeIn,});

        let scene2Scene = new ScrollMagic.Scene({
                                                    triggerElement: '.scene02TextTransition',
                                                    duration: 700,
                                                    triggerHook: "onEnter",
                                                });
        scene2Scene.setTween(scene02BildOut);
        scene2Scene.addTo(controller);
        //scene2Scene.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange",colorTrigger:"white"});
    });
    //  END FadeOutScene02 Bild ================================
    //  END scene02 ================================


    //  START scene03 ================================
    //SCENE 3 TEXT =========================
    let scene03TextAction = new TimelineMax();
    scene03TextAction.to('.scene03Text #scene03_textblock1', 10, {autoAlpha: 1}, "+=2");
    scene03TextAction.to('.scene03Text #scene03_textblock1', 10, {autoAlpha: 0}, "+=4");
    scene03TextAction.to('.scene03Text #scene03_textblock2', 10, {autoAlpha: 1}, "+=2");
    scene03TextAction.to('.scene03Text #scene03_textblock2', 10, {autoAlpha: 0}, "+=4");
    scene03TextAction.to('.scene03Text #scene03_textblock3', 10, {autoAlpha: 1}, "+=2");
    scene03TextAction.to('.scene03Text #scene03_textblock3', 10, {autoAlpha: 0}, "+=4");
    scene03TextAction.to('.scene03Text #scene03_textblock4', 10, {autoAlpha: 1}, "+=2");
    scene03TextAction.to('.scene03Text #scene03_textblock4', 10, {autoAlpha: 0}, "+=4");

    const scene03Text = new ScrollMagic.Scene({
                                                  triggerElement: ".scene03Text",
                                                  duration: 5000,
                                                  triggerHook: 0,
                                                  reverse: true
                                              });

    scene03Text.setTween(scene03TextAction);
    scene03Text.setPin(".scene03Text");
    scene03Text.addTo(controller);

    // END SCENE 3 TEXT =============================

    //  START FadeInScene03 Text================================
    $(".scene03Text").each(function () {
        const scene03TextIn = TweenMax.fromTo($(this), 2, {opacity: 0}, {opacity: 1, ease: Power1.easeIn});

        let scene3Scene = new ScrollMagic.Scene({
                                                    triggerElement: '.scene03Text',
                                                    duration: 500,
                                                    triggerHook: .6,
                                                    offset: 0
                                                });
        scene3Scene.setTween(scene03TextIn);
        scene3Scene.addTo(controller);
        //scene2Scene.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange"});
    });
    //  END FadeInScene03 Text ================================

    //  FadeOutScene03 Text ================================
    $(".scene03Text").each(function () {
        const scene03TextOut = TweenMax.to($(this), 2, {opacity: 0, ease: Power1.easeIn,});

        let scene3Scene = new ScrollMagic.Scene({
                                                    triggerElement: '.five',
                                                    duration: 700,
                                                    triggerHook: "onEnter",
                                                });
        scene3Scene.setTween(scene03TextOut);
        scene3Scene.addTo(controller);
    });
    //  END FadeOutScene03 Text ================================

});
