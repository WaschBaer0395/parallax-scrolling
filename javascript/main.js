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
        tweenScene.setTween(tween);
        tweenScene.addTo(controller)
        //tweenScene.addIndicators({name: "typewriter", colorTrigger: "orange", colorStart: "yellow", colorEnd: "teal"});
    });


    //  Cover ================================
    // Animationen hier sind nur Platzhalter !!! da noch kein cover gebaut wurde
    let coverAction = new TimelineMax();

    const cover = new ScrollMagic.Scene({
                                            triggerElement: ".cover",
                                            duration: 1000,
                                            triggerHook: 0, //  top of viewport
                                            reverse: true
                                        });
    cover.setTween(coverAction);
    cover.setPin(".cover");
    cover.addTo(controller);
    //cover.addIndicators({name: "COVER", colorStart: "orange", colorEnd: "orange",colorTrigger:"white"});
    var cover_parallax = document.getElementById('cover_parallax');
    var parallaxInstance = new Parallax(cover_parallax, {
        relativeInput: true
    });
    parallaxInstance.friction(0.2, 0.2);

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
                                                    triggerElement: '.scene02',
                                                    duration: 500,
                                                    triggerHook: "onEnter",
                                                });
        quinn2Scene.setTween(quinn2);
        quinn2Scene.addTo(controller);
        //quinn2Scene.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange",colorTrigger:"white"});
    });

    //  END scene01 ================================

    //  START scene02 ================================
    // SCENE 2 ===============================
    let scene02Action = new TimelineMax();
    // Klasse mit ID        //dauer//  attribute   // startDelay
    scene01Action.set('.blur', {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");
    //// TEXT////
    scene02Action.to('.scene02 #scene02_textblock1', 10, {autoAlpha: 1, y: 100}, "+=10"); //fade from top
    scene02Action.to('.scene02 #scene02_textblock1', 10, {autoAlpha: 0, y: -250}, "+=40"); // fade away to top
    scene02Action.to('.scene02 #scene02_textline1', 20, {autoAlpha: 1, y: 50, x: -60}, "+=4");
    scene02Action.to('.scene02 #scene02_textline2', 20, {autoAlpha: 1, y: 150, x: 80}, "+=2");
    scene02Action.to('.scene02 #scene02_textline3', 20, {autoAlpha: 1, y: 250, x: 40}, "+=2");
    scene02Action.to('.scene02 #scene02_textline1', 20, {autoAlpha: 0, x: 50}, "+=40");
    scene02Action.to('.scene02 #scene02_textline2', 20, {autoAlpha: 0, x: 100}, "+=40");
    scene02Action.to('.scene02 #scene02_textline3', 20, {autoAlpha: 0, x: 100}, "+=40");
    scene02Action.to('.scene02 #scene02_textblock2', 20, {autoAlpha: 1, y: -250}, "-=3");
    scene02Action.to('.scene02 #scene02_textblock2', 10, {autoAlpha: 0}, "+=40");
    scene02Action.to('.scene02 #scene02_textblock3', 20, {autoAlpha: 1, y: -150}, "-=4");
    scene02Action.to('.scene02 #scene02_textblock3', 10, {autoAlpha: 0}, "+=40");
    //// TEXT ENDE ////
    scene02Action.to('.blur', 20, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");
    scene02Action.add("Parallax", "+=2"); //insert point Parallax into timeline
    scene02Action.to('.scene02 #scene02_bubble1', 20, {autoAlpha: 1, x: 100}, "+=5");
    scene02Action.add("BlurMitBlase", "+=30");
    scene02Action.to('.scene02 #scene02_bubble1', 20, {autoAlpha: 0}, "BlurMitBlase");
    ///// TEXT /////
    scene02Action.to('.scene02 #scene02_textblock4', 20, {autoAlpha: 1}, "+=40");
    scene02Action.to('.scene02 #scene02_textblock4', 10, {autoAlpha: 0}, "+=10");
    scene02Action.to('.scene02 #scene02_textblock5', 40, {autoAlpha: 1, y: -100}, "+=4");

    scene02Action.to('.blur', 20, {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "BlurMitBlase");
    scene02Action.to('.scene02 #scene02_foreground', 400, {y: -70}, "Parallax"); // starting at point Parallax
    scene02Action.to('.scene02 #scene02_quinn', 400, {y: -30}, "Parallax");

    //// TEXT ENDE ////
    const scene02 = new ScrollMagic.Scene({
                                              triggerElement: ".scene02",
                                              duration: 10000,
                                              triggerHook: 0, //  top of viewport
                                              reverse: true
                                          });
    scene02.setTween(scene02Action);
    scene02.setPin(".scene02");
    scene02.addTo(controller);
    scene02.addIndicators({name: "Scene02"});


    //  START FadeInScene02================================
    $(".scene02").each(function () {
        const scene02In = TweenMax.fromTo($(this), 2, {opacity: 0}, {opacity: 1, ease: Power1.easeIn});

        let scene2Scene = new ScrollMagic.Scene({
                                                    triggerElement: '.scene02',
                                                    duration: 500,
                                                    triggerHook: .6,
                                                    offset: 0
                                                });
        scene2Scene.setTween(scene02In);
        scene2Scene.addTo(controller);
    });
    //  END FadeInScene02================================

    //  FadeOutScene02 ================================
    $(".scene02").each(function () {
        const scene02Out = TweenMax.to($(this), 2, {opacity: 0, ease: Power1.easeIn,});

        let scene2Scene = new ScrollMagic.Scene({
                                                    triggerElement: '.scene03',
                                                    duration: 700,
                                                    triggerHook: "onEnter",
                                                });
        scene2Scene.setTween(scene02Out);
        scene2Scene.addTo(controller);
        //scene2Scene.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange",colorTrigger:"white"});
    });
    //  END FadeOutScene02 ================================
    //  END scene02 ================================


    //  START scene03 ================================
    //SCENE 3 =========================
    // TEXT
    let scene03Action = new TimelineMax();
    //BLUR
    scene02Action.set('.blur', {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");
    //TEXT
    scene03Action.to('.scene03 #scene03_textline1', 10, {autoAlpha: 1, y: 210}, "+=2");
    scene03Action.to('.scene03 #scene03_textline1', 10, {autoAlpha: 0}, "+=4");
    scene03Action.to('.scene03 #scene03_textblock2', 10, {autoAlpha: 1, y: 100}, "+=2");
    scene03Action.to('.scene03 #scene03_textblock2', 10, {autoAlpha: 0, y: -250}, "+=4");
    scene03Action.to('.scene03 #scene03_textblock3', 10, {autoAlpha: 1}, "-=5");
    scene03Action.to('.scene03 #scene03_textblock3', 10, {autoAlpha: 0}, "+=4");
    //BLUR ENDE
    scene03Action.to('.blur', 20, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");
    scene03Action.to('.scene03 #scene03_thoughtBubble', 10,{autoAlpha:1});
    scene03Action.to('.scene03 #scene03_thoughtBubble', 10,{autoAlpha:0});
    scene03Action.to('.scene03 #scene03_textline2', 10, {autoAlpha: 1}, "+=2");
    scene03Action.to('.scene03 #scene03_textline2', 10, {autoAlpha: 0}, "+=4");

    scene03Action.to('.scene03 #scene03_textblock4', 20, {autoAlpha: 1, x: 100}, "+=2");
    scene03Action.to('.scene03 #scene03_textblock4', 15, {autoAlpha: 0, x: -260}, "+=4");
    //ADAM FADEOUT
    scene03Action.to('.scene03 #scene03_regBubble2', 10,{autoAlpha:1});
    scene03Action.to('.scene03 #scene03_regBubble2', 10,{autoAlpha:0});
    scene03Action.to('.scene03 #scene03_regBubble', 10,{autoAlpha:1});
    scene03Action.to('.scene03 #scene03_regBubble', 10,{autoAlpha:0});
    scene03Action.to('.scene03 #scene03_frauBubble1', 10,{autoAlpha:1});
    scene03Action.to('.scene03 #scene03_frauBubble1', 10,{autoAlpha:0});
    scene03Action.to('.scene03 #scene03_adamBubble1', 10,{autoAlpha:1});
    scene03Action.to('.scene03 #scene03_adamBubble1', 10,{autoAlpha:0});
    scene03Action.to('.scene03 #scene03_frauBubble2', 10,{autoAlpha:1});
    scene03Action.to('.scene03 #scene03_frauBubble2', 10,{autoAlpha:0});
    scene03Action.to('.scene03 #scene03_adamBubble2', 10,{autoAlpha:1});
    scene03Action.to('.scene03 #scene03_adamBubble2', 10,{autoAlpha:0});
    scene03Action.to('.scene03 #scene03_adam1',5, {autoAlpha: 0});
    scene03Action.to('.scene03 #scene03_adam2',10, {autoAlpha: 1}, "-=5");
    scene03Action.to('.scene03 #scene03_adam2',5, {autoAlpha: 0});
    scene03Action.to('.scene03 #scene03_adam4',10, {autoAlpha: 1}, "-=5");
    scene03Action.to('.scene03 #scene03_adam4',5, {autoAlpha: 0});
    scene03Action.to('.scene03 #scene03_adam3',10, {autoAlpha: 1}, "-=5");
    scene03Action.to('.scene03 #scene03_regBubble3', 10,{autoAlpha:1});
    scene03Action.to('.scene03 #scene03_regBubble3', 10,{autoAlpha:0});


    const scene03 = new ScrollMagic.Scene({
                                                  triggerElement: ".scene03",
                                                  duration: 15000,
                                                  triggerHook: 0,
                                                  reverse: true
                                              });

    scene03.setTween(scene03Action);
    scene03.setPin(".scene03");
    scene03.addTo(controller);

    //  START FadeInScene03  text================================
    $(".scene03").each(function () {
        const scene03In = TweenMax.fromTo($(this), 2, {opacity: 0}, {opacity: 1, ease: Power1.easeIn});

        let scene3Scene = new ScrollMagic.Scene({
                                                    triggerElement: '.scene03',
                                                    duration: 500,
                                                    triggerHook: .6,
                                                    offset: 0
                                                });
        scene3Scene.setTween(scene03In);
        scene3Scene.addTo(controller);
        //scene2Scene.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange"});
    });
    //  END FadeInScene03 text ================================

    //  FadeOutScene03  text================================
    $(".scene03").each(function () {
        const scene03Out = TweenMax.to($(this), 2, {opacity: 0, ease: Power1.easeIn,});

        let scene3Scene = new ScrollMagic.Scene({
                                                    triggerElement: '.scene04',
                                                    duration: 700,
                                                    triggerHook: "onEnter",
                                                });
        scene3Scene.setTween(scene03Out);
        scene3Scene.addTo(controller);
    });
    //  END FadeOutScene03 ================================

    //END SCENE03

    //  START scene03_Part2 ================================
    //SCENE 3_2 =========================
    // TEXT
    let scene03_part2Action = new TimelineMax();
    //BLUR
    scene03Action.set('.blur', {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");
    //TEXT
    scene03_part2Action.to('.scene03_part2 #scene03_2_textblock1', 10, {autoAlpha: 1}, "-=5");
    scene03_part2Action.to('.scene03_part2 #scene03_2_textblock1', 5, {autoAlpha: 0}, "+=4");
    //BLUR ENDE
    scene03_part2Action.to('.blur', 5, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");

    const scene03_2 = new ScrollMagic.Scene({
                                              triggerElement: ".scene03_part2",
                                              duration: 15000,
                                              triggerHook: 0,
                                              reverse: true
                                          });

    scene03_2.setTween(scene03_part2Action);
    scene03_2.setPin(".scene03_part2");
    scene03_2.addTo(controller);
    scene03_2.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange"});

    //  START FadeInScene03  text================================
    $(".scene03_part2").each(function () {
        const scene03_2In = TweenMax.fromTo($(this), 2, {opacity: 0}, {opacity: 1, ease: Power1.easeIn});

        let scene3_2Scene = new ScrollMagic.Scene({
                                                    triggerElement: '.scene03_part2',
                                                    duration: 500,
                                                    triggerHook: .6,
                                                    offset: 0
                                                });
        scene3_2Scene.setTween(scene03_2In);
        scene3_2Scene.addTo(controller);
        //scene3_2Scene.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange"});
    });
    //  END FadeInScene03_2 ================================

    //  FadeOutScene03 ================================
    $(".scene03_part2").each(function () {
        const scene03_2Out = TweenMax.to($(this), 2, {opacity: 0, ease: Power1.easeIn,});

        let scene3_2Scene = new ScrollMagic.Scene({
                                                    triggerElement: '.scene04',
                                                    duration: 700,
                                                    triggerHook: "onEnter",
                                                });
        scene3_2Scene.setTween(scene03_2Out);
        scene3_2Scene.addTo(controller);
    });
    //  END FadeOutScene03_part2 ================================

    //END SCENE03_2
});

