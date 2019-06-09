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
    scene01Action.to('#scene_one_quinn', 10, {autoAlpha: 1, x: 100}, "+=4");
    scene01Action.to('#scene01_bubble1', 10, {autoAlpha: 1, x: 100}, "+=2");
    scene01Action.to('#scene01_bubble_quinn', 10, {autoAlpha: 1, x: 100}, "+=4");
    scene01Action.add("Parallax", "+=10"); //insert point Parallax into timeline
    scene01Action.to('#scene_one_second_layer', 40, {y: -35}, "Parallax"); // starting at point Parallax
    scene01Action.to('#scene_one_third_layer', 40, {y: -35}, "Parallax"); // starting at point Parallax
    scene01Action.to('#scene_one_fourth_layer', 40, {y: -25}, "Parallax"); // starting at point Parallax
    scene01Action.to('#scene_one_fifth_layer', 40, {y: 0}, "Parallax"); // starting at point Parallax
    scene01Action.to('#scene_one_quinn', 40, {y: -35}, "Parallax"); // starting at point Parallax
    scene01Action.to('#scene01_bubble1', 40, {y: -10}, "Parallax"); // starting at point Parallax
    scene01Action.to('#scene01_bubble_quinn', 40, {y: -80}, "Parallax"); // starting at point Parallax

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
    scene02Action.to('#scene02_textblock1', 10, {autoAlpha: 1, y: 100}, "+=10"); //fade from top
    scene02Action.to('#scene02_textblock1', 10, {autoAlpha: 0, y: -250}, "+=40"); // fade away to top
    scene02Action.to('#scene02_textline1', 20, {autoAlpha: 1, y: 50, x: -60}, "+=4");
    scene02Action.to('#scene02_textline2', 20, {autoAlpha: 1, y: 150, x: 80}, "+=2");
    scene02Action.to('#scene02_textline3', 20, {autoAlpha: 1, y: 250, x: 40}, "+=2");
    scene02Action.to('#scene02_textline1', 20, {autoAlpha: 0, x: 50}, "+=40");
    scene02Action.to('#scene02_textline2', 20, {autoAlpha: 0, x: 100}, "+=40");
    scene02Action.to('#scene02_textline3', 20, {autoAlpha: 0, x: 100}, "+=40");
    scene02Action.to('#scene02_textblock2', 20, {autoAlpha: 1, y: -250}, "-=3");
    scene02Action.to('#scene02_textblock2', 10, {autoAlpha: 0}, "+=40");
    scene02Action.to('#scene02_textblock3', 20, {autoAlpha: 1, y: -150}, "-=4");
    scene02Action.to('#scene02_textblock3', 10, {autoAlpha: 0}, "+=40");
    //// TEXT ENDE ////
    scene02Action.to('.blur', 20, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");
    scene02Action.add("Parallax", "+=2"); //insert point Parallax into timeline
    scene02Action.to('.scene02 #scene02_bubble1', 20, {autoAlpha: 1, x: 100}, "+=5");
    scene02Action.add("BlurMitBlase", "+=30");
    scene02Action.to('.scene02 #scene02_bubble1', 20, {autoAlpha: 0}, "BlurMitBlase");
    ///// TEXT /////
    scene02Action.to('#scene02_textblock4', 20, {autoAlpha: 1}, "+=40");
    scene02Action.to('#scene02_textblock4', 10, {autoAlpha: 0}, "+=10");
    scene02Action.to('#scene02_textblock5', 40, {autoAlpha: 1, y: -100}, "+=4");

    scene02Action.to('.blur', 20, {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "BlurMitBlase");
    scene02Action.to('#scene02_foreground', 400, {y: -70}, "Parallax"); // starting at point Parallax
    scene02Action.to('#scene02_quinn', 400, {y: -30}, "Parallax");

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
    scene03Action.to('#scene03_textline1', 10, {autoAlpha: 1, y: 210}, "+=2");
    scene03Action.to('#scene03_textline1', 10, {autoAlpha: 0}, "+=4");
    scene03Action.to('#scene03_textblock2', 10, {autoAlpha: 1, y: 100}, "+=2");
    scene03Action.to('#scene03_textblock2', 10, {autoAlpha: 0, y: -250}, "+=4");
    scene03Action.to('#scene03_textblock3', 10, {autoAlpha: 1}, "-=5");
    scene03Action.to('#scene03_textblock3', 10, {autoAlpha: 0}, "+=4");
    //BLUR ENDE
    scene03Action.to('.blur', 20, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");
    scene03Action.to('#scene03_thoughtBubble', 10, {autoAlpha: 1});
    scene03Action.to('#scene03_thoughtBubble', 10, {autoAlpha: 0});
    scene03Action.to('#scene03_textline2', 10, {autoAlpha: 1}, "+=2");
    scene03Action.to('#scene03_textline2', 10, {autoAlpha: 0}, "+=4");

    scene03Action.to('#scene03_textblock4', 20, {autoAlpha: 1, x: 100}, "+=2");
    scene03Action.to('#scene03_textblock4', 15, {autoAlpha: 0, x: -260}, "+=4");
    //ADAM FADEOUT
    scene03Action.to('#scene03_regBubble2', 10, {autoAlpha: 1});
    scene03Action.to('#scene03_regBubble2', 10, {autoAlpha: 0});
    scene03Action.to('#scene03_adam1', 5, {autoAlpha: 0});
    scene03Action.to('#scene03_adam3', 10, {autoAlpha: 1}, "-=5");
    scene03Action.to('#scene03_regBubble', 10, {autoAlpha: 1});
    scene03Action.to('#scene03_regBubble', 10, {autoAlpha: 0});
    scene03Action.to('#scene03_adam3', 5, {autoAlpha: 0});
    scene03Action.to('#scene03_adam4', 10, {autoAlpha: 1}, "-=5");
    scene03Action.to('#scene03_adam4', 5, {autoAlpha: 0});
    scene03Action.to('#scene03_adam2', 10, {autoAlpha: 1}, "-=5");
    scene03Action.to('#scene03_adam2', 5, {autoAlpha: 0});
    scene03Action.to('#scene03_adam1', 10, {autoAlpha: 1}, "-=5");
    scene03Action.to('#scene03_frauBubble1', 10, {autoAlpha: 1});
    scene03Action.to('#scene03_frauBubble1', 10, {autoAlpha: 0});
    scene03Action.to('#scene03_adamBubble1', 10, {autoAlpha: 1});
    scene03Action.to('#scene03_adamBubble1', 10, {autoAlpha: 0});
    scene03Action.to('#scene03_frauBubble2', 10, {autoAlpha: 1});
    scene03Action.to('#scene03_frauBubble2', 10, {autoAlpha: 0});
    scene03Action.to('#scene03_adam1', 5, {autoAlpha: 0});
    scene03Action.to('#scene03_adam2', 10, {autoAlpha: 1}, "-=5");
    scene03Action.to('#scene03_adam2', 5, {autoAlpha: 0});
    scene03Action.to('#scene03_adam4', 10, {autoAlpha: 1}, "-=5");
    scene03Action.to('#scene03_adamBubble2', 10, {autoAlpha: 1});
    scene03Action.to('#scene03_adamBubble2', 10, {autoAlpha: 0});
    scene03Action.to('#scene03_regBubble3', 10, {autoAlpha: 1});
    scene03Action.to('#scene03_regBubble3', 10, {autoAlpha: 0});
    scene03Action.to('#scene03_adam4', 5, {autoAlpha: 0});
    scene03Action.to('#scene03_adam3', 10, {autoAlpha: 1}, "-=5");
    scene03Action.to('#battery_hospital', 20, {autoAlpha: 1, x: 30}, "+=5");
    scene03Action.to('#battery_animation_hospitalScene01', 1, {autoAlpha: 0}, "+=5");
    scene03Action.to('#battery_animation_hospitalScene01', 1, {autoAlpha: 1}, "+=5");
    scene03Action.to('#battery_animation_hospitalScene01', 1, {autoAlpha: 0}, "+=5");
    scene03Action.to('#battery_animation_hospitalScene01', 1, {autoAlpha: 1}, "+=5");
    scene03Action.to('#battery_animation_hospitalScene01', 1, {autoAlpha: 0}, "+=5");
    scene03Action.to('#battery_animation_hospitalScene01', 1, {autoAlpha: 1}, "+=5");


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
    scene03_part2Action.to('#scene03_2_textblock1', 10, {autoAlpha: 1}, "-=5");
    scene03_part2Action.to('#scene03_2_textblock1', 5, {autoAlpha: 0}, "+=4");
    //BLUR ENDE
    scene03_part2Action.to('.blur', 5, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");
    // Animate batteryloading
    scene03_part2Action.to('#wire', 4, {autoAlpha: 1}, "-=5");
    scene03_part2Action.to('#battery_animation_1', 1, {autoAlpha: .4}, "+=1");
    scene03_part2Action.to('#battery_animation_1', 1, {autoAlpha: 0}, "+=1");
    scene03_part2Action.to('#battery_animation_1', 1, {autoAlpha: .4}, "+=1");
    scene03_part2Action.to('#battery_animation_1', 1, {autoAlpha: 0}, "+=1");
    scene03_part2Action.to('#battery_animation_1', 1, {autoAlpha: .4}, "+=1");
    scene03_part2Action.to('#battery_animation_1', 1, {autoAlpha: 0}, "+=1");
    scene03_part2Action.to('#battery_animation_1', 1, {autoAlpha: .4}, "+=1");
    scene03_part2Action.to('#battery_full', 1, {autoAlpha: .8}, "+=1");
    // end batteryloading

    // draw SVG   code from: https://codepen.io/webmage/pen/eaPGwb
    // actually not workable
    //toDo HEEELLPP :D
    scene03_part2Action.to(".scene03 .path2", 5, {drawSVG: "1900px 290px", autoAlpha: 0, ease: Power4.easeOut}, "+=5");

    // battery animation
    let t = TweenMax.fromTo(".animation", 1, {y: -2}, {y: 5, ease: Linear.easeInOut, repeat: -1, yoyo: true});
    t.progress(0.5).play();

    const scene03_2 = new ScrollMagic.Scene({
                                                triggerElement: ".scene03_part2",
                                                duration: 20000,
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


    // START Scene04

    //  START FadeInScene04  text================================
    $(".scene04").each(function () {
        const scene04_in = TweenMax.fromTo($(this), 2, {opacity: 0}, {opacity: 1, ease: Power1.easeIn});

        let scene04 = new ScrollMagic.Scene({
                                                triggerElement: '.scene04',
                                                duration: 500,
                                                triggerHook: .6,
                                                offset: 0
                                            });
        scene04.setTween(scene04_in);
        scene04.addTo(controller);
    });
    //  END FadeInScene04 ================================

    //  FadeOutScene04 ================================
    $(".scene04").each(function () {
        const scene04_out = TweenMax.to($(this), 2, {opacity: 0, ease: Power1.easeIn,});

        let scene04 = new ScrollMagic.Scene({
                                                triggerElement: '.scene05',
                                                duration: 700,
                                                triggerHook: "onEnter",
                                            });
        scene04.setTween(scene04_out);
        scene04.addTo(controller);
    });
    //  END FadeOutScene04 ================================

    const scene04 = new ScrollMagic.Scene({
                                              triggerElement: ".scene04",
                                              duration: 20000,
                                              triggerHook: 0,
                                              reverse: true
                                          });

    let scene04Action = new TimelineMax();
    //BLUR
    scene04Action.set('.blur', {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");
    //TEXT
    scene04Action.to('#scene04_textblock1', 10, {autoAlpha: 1, y: 100}, "+=2");
    scene04Action.to('#scene04_textblock1', 10, {autoAlpha: 0, y: -250}, "+=20");
    scene04Action.to('#scene04_textblock2', 10, {autoAlpha: 1}, "-=8");
    scene04Action.to('#scene04_textblock2', 10, {autoAlpha: 0}, "+=20");
    scene04Action.to('#scene04_textline1', 10, {autoAlpha: 1}, "+=2");
    scene04Action.to('#scene04_textline1', 10, {autoAlpha: 0}, "+=20");
    scene04Action.to('#scene04_textblock3', 20, {autoAlpha: 1, y: -250}, "+=2");
    scene04Action.to('#scene04_textblock3', 10, {autoAlpha: 0}, "+=20");
    scene04Action.to('#scene04_textline2', 10, {autoAlpha: 1}, "+=2");
    scene04Action.to('#scene04_textline2', 10, {autoAlpha: 0}, "+=20");
    //BLUR ENDE
    scene04Action.to('.blur', 20, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");
    // TEXT
    scene04Action.to('#scene04_reporter01', 10, {autoAlpha: 1, x: -80});
    scene04Action.to('#scene04_reporter01', 10, {autoAlpha: 0, x: 80}, "+=20");
    scene04Action.to('#scene04_textblock4', 10, {autoAlpha: 1, y: -250}, "-=5");
    scene04Action.to('#scene04_textblock4', 10, {autoAlpha: 0, y: 250}, "+=20");
    scene04Action.to('#scene04_adamBubble1', 10, {autoAlpha: 1});
    scene04Action.to('#scene04_adamBubble1', 10, {autoAlpha: 0}, "+=20");
    scene04Action.to('#scene04_textline3', 10, {autoAlpha: 1}, "+=2");
    scene04Action.to('#scene04_textline3', 10, {autoAlpha: 0}, "+=4");
    scene04Action.to('#scene04_adamBubble2', 10, {autoAlpha: 1});
    scene04Action.to('#scene04_adamBubble2', 10, {autoAlpha: 0}, "+=20");
    scene04Action.to('#scene04_adamBubble3', 10, {autoAlpha: 1});
    scene04Action.to('#scene04_adamBubble3', 10, {autoAlpha: 0}, "+=20");
    scene04Action.to('#scene04_textline4', 10, {autoAlpha: 1}, "+=2");
    scene04Action.to('#scene04_textline4', 10, {autoAlpha: 0}, "+=20");
    scene04Action.to('#scene04_textblock5', 10, {autoAlpha: 1, y: -250}, "-=5");
    scene04Action.to('#scene04_textblock5', 10, {autoAlpha: 0, y: 250}, "+=20");
    scene04Action.to('#scene04_textline5', 10, {autoAlpha: 1}, "+=2");
    scene04Action.to('#scene04_textline5', 10, {autoAlpha: 0}, "+=20");
    scene04Action.to('#scene04_reporter02', 10, {autoAlpha: 1, x: 80});
    scene04Action.to('#scene04_reporter02', 10, {autoAlpha: 0, x: -80}, "+=20");
    scene04Action.to('#scene04_adamBubble4', 10, {autoAlpha: 1});
    scene04Action.to('#scene04_adamBubble4', 10, {autoAlpha: 0}, "+=20");
    scene04Action.to('#scene04_reporter03', 10, {autoAlpha: 1, x: 80});
    scene04Action.to('#scene04_reporter03', 10, {autoAlpha: 0, x: -80}, "+=20");
    scene04Action.to('#scene04_adamBubble5', 10, {autoAlpha: 1});
    scene04Action.to('#scene04_adamBubble5', 10, {autoAlpha: 0}, "+=20");

    scene04.setTween(scene04Action);
    scene04.setPin(".scene04");
    scene04.addTo(controller);


    //  START scene05 ================================
    //SCENE 5 =========================
    let scene05Action = new TimelineMax();
    //BLUR
    scene03_part2Action.set('.blur', {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");
    //TEXT
    scene05Action.to('#scene05_textline1', 10, {autoAlpha: 1}, "+=2");
    scene05Action.to('#scene05_textline1', 10, {autoAlpha: 0}, "+=4");
    scene05Action.to('#scene05_textblock1', 10, {autoAlpha: 1, y: 100}, "+=2");
    scene05Action.to('#scene05_textblock1', 5, {autoAlpha: 0, y: -100}, "+=4");
    //BLUR ENDE
    scene05Action.to('.blur', 5, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");
    //ADAM IN
    scene05Action.to('.adam_hurt', 10, {autoAlpha: 1, x: 100}, "+=4");
    //GIRL IN
    scene05Action.to('#scene05_girl', 10, {autoAlpha: 1}, "+=4");
    //BUBBLES & TEXTS
    scene05Action.to('#scene05_textline5', 10, {autoAlpha: 1}, "+=4");
    scene05Action.to('#scene05_textline5', 10, {autoAlpha: 0}, "+=20");
    scene05Action.to('#scene05_bubbleGirl1', 10, {autoAlpha: 1}, "+=2");
    scene05Action.to('#scene05_bubbleGirl1', 10, {autoAlpha: 0}, "+=4");
    scene05Action.to('#scene05_bubbleAdam1', 10, {autoAlpha: 1}, "+=2");
    scene05Action.to('#scene05_bubbleAdam1', 10, {autoAlpha: 0}, "+=4");
    scene05Action.to('#scene05_bubbleAdam2', 10, {autoAlpha: 1}, "+=2");
    scene05Action.to('#scene05_bubbleAdam2', 10, {autoAlpha: 0}, "+=4");
    scene05Action.to('#scene05_textline2', 10, {autoAlpha: 1}, "+=2");
    scene05Action.to('#scene05_textline3', 10, {autoAlpha: 1}, "+=2");
    scene05Action.to('#scene05_textline2', 10, {autoAlpha: 0}, "+=4");
    scene05Action.to('#scene05_textline3', 10, {autoAlpha: 0}, "-=10");
    scene05Action.to('#scene05_textblock2', 10, {autoAlpha: 1, x: -600}, "+=2");
    scene05Action.to('#scene05_textblock2', 10, {autoAlpha: 0, x: 300}, "+=4");
    scene05Action.to('#scene05_bubbleAdam3', 10, {autoAlpha: 1}, "+=2");
    scene05Action.to('#scene05_bubbleAdam3', 10, {autoAlpha: 0}, "+=4");
    scene05Action.to('#scene05_textblock3', 10, {autoAlpha: 1, y: -400}, "+=2");
    scene05Action.to('#scene05_textblock3', 10, {autoAlpha: 0, y: 150}, "+=10");
    scene05Action.to('#scene05_textline4', 10, {autoAlpha: 1}, "-=2");
    scene05Action.to('#scene05_textline4', 10, {autoAlpha: 0}, "+=8");
    scene05Action.to('#scene05_textblock4', 10, {autoAlpha: 1}, "+=2");
    scene05Action.to('#scene05_textblock4', 10, {autoAlpha: 0}, "+=20");
    scene05Action.to('#scene05_textblock5', 10, {autoAlpha: 1}, "-=5");
    scene05Action.to('#scene05_textblock5', 10, {autoAlpha: 0}, "+=20");
    scene05Action.to('#scene05_bubbleAdam4', 10, {autoAlpha: 1}, "+=2");
    scene05Action.to('#scene05_bubbleAdam4', 10, {autoAlpha: 0}, "+=20");

    const scene05 = new ScrollMagic.Scene({
                                              triggerElement: ".scene05",
                                              duration: 15000,
                                              triggerHook: 0,
                                              reverse: true
                                          });

    scene05.setTween(scene05Action);
    scene05.setPin(".scene05");
    scene05.addTo(controller);

    //  START FadeInScene05 ================================
    $(".scene05").each(function () {
        const scene05In = TweenMax.fromTo($(this), 2, {opacity: 0}, {opacity: 1, ease: Power1.easeIn});

        let scene5Scene = new ScrollMagic.Scene({
                                                    triggerElement: '.scene05',
                                                    duration: 500,
                                                    triggerHook: .6,
                                                    offset: 0
                                                });
        scene5Scene.setTween(scene05In);
        scene5Scene.addTo(controller);
        //scene5Scene.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange"});
    });
    //  END FadeInScene05 ================================

    //  START FadeOutScene05 ================================
    $(".scene05").each(function () {
        const scene05Out = TweenMax.to($(this), 2, {opacity: 0, ease: Power1.easeIn,});

        let scene5Scene = new ScrollMagic.Scene({
                                                    triggerElement: '.scene06',
                                                    duration: 700,
                                                    triggerHook: "onEnter",
                                                });
        scene5Scene.setTween(scene05Out);
        scene5Scene.addTo(controller);
    });
    //  END FadeOutScene05 ================================

    //END SCENE05

    //  START scene06 ================================
    //SCENE 6 =========================
    let scene06Action = new TimelineMax();
    //BLUR
    scene05Action.set('.blur', {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");
    scene06Action.to('#scene06_textlineTitle', 10, {autoAlpha: 1, y: 300}, "+=2");
    scene06Action.to('#scene06_textlineTitle', 10, {autoAlpha: 0}, "+=20");
    scene06Action.to('#scene06_textblock1', 10, {autoAlpha: 1, y: -300}, "+=10");
    scene06Action.to('#scene06_textblock1', 5, {autoAlpha: 0, y: -600}, "+=20");
    scene06Action.to('#scene06_textline1', 10, {autoAlpha: 1, x: -1424}, "+=2");
    scene06Action.to('#scene06_textline2', 10, {autoAlpha: 1, x: -1424}, "+=20");
    scene06Action.to('#scene06_textline3', 10, {autoAlpha: 1, x: -1424}, "+=20");
    scene06Action.to('#scene06_textline1', 10, {autoAlpha: 0, x: 10}, "+=20");
    scene06Action.to('#scene06_textline2', 10, {autoAlpha: 0, x: 10}, "-=10");
    scene06Action.to('#scene06_textline3', 10, {autoAlpha: 0, x: 10}, "-=10");
    scene06Action.to('#scene06_textblock2', 10, {autoAlpha: 1, y: -300}, "+=2");
    scene06Action.to('#scene06_textblock2', 5, {autoAlpha: 0, y: -400}, "+=20");
    //BLUR ENDE
    scene06Action.to('.blur', 5, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");
    scene06Action.to('#scene06_textline4', 10, {autoAlpha: 1}, "+=2");
    scene06Action.to('#scene06_bubbleAdam1', 10, {autoAlpha: 0.9, x: 400}, "-=10");
    scene06Action.to('#scene06_bubbleAdam1', 20, {autoAlpha: 0}, "+=20");
    scene06Action.to('#scene06_bubble1small', 10, {autoAlpha: 0.75}, "-=5");
    scene06Action.to('#scene06_bubble1small', 20, {autoAlpha: 0}, "-=5");
    scene06Action.to('#scene06_textline4', 5, {autoAlpha: 0}, "-=10");
    scene06Action.to('#scene06_textblock3', 10, {autoAlpha: 1, x: 300}, "+=2");
    scene06Action.to('#scene06_textblock3', 5, {autoAlpha: 1, y: -150}, "+=2");
    scene06Action.to('#scene06_textblock4', 10, {autoAlpha: 1, x: 300}, "-=5");
    scene06Action.to('#scene06_textblock3', 5, {autoAlpha: 0, x: 1000}, "+=20");
    scene06Action.to('#scene06_textblock4', 5, {autoAlpha: 0, x: 1000}, "-=5");
    scene06Action.to('#scene06_textblock5', 10, {autoAlpha: 1, x: 300}, "+=2");
    scene06Action.to('#scene06_textblock5', 5, {autoAlpha: 0}, "+=20");
    scene06Action.to('#scene06_bubbleAdam2', 10, {autoAlpha: 1}, "+=2");
    scene06Action.to('#scene06_bubbleAdam2', 10, {autoAlpha: 0}, "+=20");
    scene06Action.to('#scene06_textblock6', 10, {autoAlpha: 1, y: -500}, "+=2");
    scene06Action.to('#scene06_textblock6', 5, {autoAlpha: 0}, "+=20");
    scene06Action.to('#scene06_textline5', 10, {autoAlpha: 1, y: 60}, "+=2");
    scene06Action.to('#scene06_textline6', 10, {autoAlpha: 1, y: -350}, "-=10");
    scene06Action.to('#scene06_textline5', 5, {autoAlpha: 0}, "+=20");
    scene06Action.to('#scene06_textline6', 5, {autoAlpha: 0}, "-=5");
    // start animation of binär
    scene06Action.to('#binaer01', 3, {autoAlpha: 1}, "-=5");
    scene06Action.to('#binaer02', 3, {autoAlpha: 1});
    scene06Action.to('#binaer03', 3, {autoAlpha: 1});
    scene06Action.to('#binaer04', 3, {autoAlpha: 1});
    scene06Action.to('#binaer05', 3, {autoAlpha: 1});
    scene06Action.to('#binaer06', 3, {autoAlpha: 1});
    scene06Action.to('#binaer07', 3, {autoAlpha: 1});
    scene06Action.to('#binaer08', 3, {autoAlpha: 1});
    scene06Action.to('#binaer09', 3, {autoAlpha: 1});
    scene06Action.to('#binaer10', 3, {autoAlpha: 1});

    scene06Action.to('#binaer01', 3, {autoAlpha: 0});
    scene06Action.to('#binaer02', 3, {autoAlpha: 0});
    scene06Action.to('#binaer03', 3, {autoAlpha: 0});
    scene06Action.to('#binaer04', 3, {autoAlpha: 0});
    scene06Action.to('#binaer05', 3, {autoAlpha: 0});
    scene06Action.to('#binaer06', 3, {autoAlpha: 0});
    scene06Action.to('#binaer07', 3, {autoAlpha: 0});
    scene06Action.to('#binaer08', 3, {autoAlpha: 0});
    scene06Action.to('#binaer09', 3, {autoAlpha: 0});
    scene06Action.to('#binaer10', 3, {autoAlpha: 0});

    scene06Action.to('#binaer01', 3, {autoAlpha: 1});
    scene06Action.to('#binaer02', 3, {autoAlpha: 1});
    scene06Action.to('#binaer03', 3, {autoAlpha: 1});
    scene06Action.to('#binaer04', 3, {autoAlpha: 1});
    scene06Action.to('#binaer05', 3, {autoAlpha: 1});
    scene06Action.to('#binaer06', 3, {autoAlpha: 1});
    scene06Action.to('#binaer07', 3, {autoAlpha: 1});
    scene06Action.to('#binaer08', 3, {autoAlpha: 1});
    scene06Action.to('#binaer09', 3, {autoAlpha: 1});
    scene06Action.to('#binaer10', 3, {autoAlpha: 1});

    scene06Action.to('#binaer01', 3, {autoAlpha: 0});
    scene06Action.to('#binaer02', 3, {autoAlpha: 0});
    scene06Action.to('#binaer03', 3, {autoAlpha: 0});
    scene06Action.to('#binaer04', 3, {autoAlpha: 0});
    scene06Action.to('#binaer05', 3, {autoAlpha: 0});
    scene06Action.to('#binaer06', 3, {autoAlpha: 0});
    scene06Action.to('#binaer07', 3, {autoAlpha: 0});
    scene06Action.to('#binaer08', 3, {autoAlpha: 0});
    scene06Action.to('#binaer09', 3, {autoAlpha: 0});
    scene06Action.to('#binaer10', 3, {autoAlpha: 0});
    // end animation

    const scene06 = new ScrollMagic.Scene({
                                              triggerElement: ".scene06",
                                              duration: 25000,
                                              triggerHook: 0,
                                              reverse: true
                                          });

    scene06.setTween(scene06Action);
    scene06.setPin(".scene06");
    scene06.addTo(controller);

    //  START FadeInScene06 ================================
    $(".scene06").each(function () {
        const scene06In = TweenMax.fromTo($(this), 2, {opacity: 0}, {opacity: 1, ease: Power1.easeIn});

        let scene6Scene = new ScrollMagic.Scene({
                                                    triggerElement: '.scene06',
                                                    duration: 500,
                                                    triggerHook: .6,
                                                    offset: 0
                                                });
        scene6Scene.setTween(scene06In);
        scene6Scene.addTo(controller);
        //scene6Scene.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange"});
    });
    //  END FadeInScene05 ================================

    //  START FadeOutScene06 ================================
    $(".scene06").each(function () {
        const scene06Out = TweenMax.to($(this), 2, {opacity: 0, ease: Power1.easeIn,});

        let scene6Scene = new ScrollMagic.Scene({
                                                    triggerElement: '.scene07',
                                                    duration: 700,
                                                    triggerHook: "onEnter",
                                                });
        scene6Scene.setTween(scene06Out);
        scene6Scene.addTo(controller);
    });
    //  END FadeOutScene06 ================================

    //  START scene07 ================================
    //SCENE 7 =========================
    let scene07Action = new TimelineMax();
    //BLUR
    scene06Action.set('.blur', {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");
    scene07Action.to('#scene07_adam1', 5, {autoAlpha: 1}, "-=5");
    scene07Action.to('#scene07_textblock1', 10, {autoAlpha: 1, y: 100}, "+=2");
    scene07Action.to('#scene07_textblock1', 5, {autoAlpha: 0, y: -100}, "+=20");
    scene07Action.to('#scene07_textblock2', 10, {autoAlpha: 1, y: -250}, "-=6");
    scene07Action.to('#scene07_textblock2', 5, {autoAlpha: 0, y: 250}, "+=20");
    scene07Action.to('#scene07_textblock3', 10, {autoAlpha: 1, y: 250}, "-=6");
    scene07Action.to('#scene07_textblock3', 5, {autoAlpha: 0, y: -250}, "+=20");
    //BLUR ENDE
    scene07Action.to('.blur', 5, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");
    scene07Action.to('#scene07_adam1', 10, {autoAlpha: 0});
    scene07Action.to('#scene07_adam2', 10, {autoAlpha: 1}, "-=5");
    scene07Action.to('#scene07_adam2', 10, {autoAlpha: 0});
    scene07Action.to('#scene07_adam3', 10, {autoAlpha: 1}, "-=5");
    scene07Action.to('#scene07_adam3', 10, {autoAlpha: 0});
    scene07Action.to('#scene07_adam4', 10, {autoAlpha: 1}, "-=5");
    scene07Action.to('#scene07_textblock4', 10, {autoAlpha: 1, y: 100}, "+=2");
    scene07Action.to('#scene07_textblock5', 10, {autoAlpha: 1, y: -150}, "+=4");
    scene07Action.to('#scene07_textblock4', 10, {autoAlpha: 0, x: 300}, "+=20");
    scene07Action.to('#scene07_textblock5', 10, {autoAlpha: 0, x: 300}, "-=10");
    scene07Action.to('#scene07_bubbleAdam1', 10, {autoAlpha: 1}, "+=2");
    scene07Action.to('#scene07_bubbleAdam1', 10, {autoAlpha: 0}, "+=20");
    scene07Action.to('#scene07_bubbleAdam2', 10, {autoAlpha: 1}, "+=2");
    scene07Action.to('#scene07_bubbleAdam2', 10, {autoAlpha: 0}, "+=20");
    scene07Action.to('#scene07_bubbleAdam3', 10, {autoAlpha: 1}, "+=2");
    scene07Action.to('#scene07_bubbleAdam3', 10, {autoAlpha: 0}, "+=20");
    scene07Action.to('#scene07_textline1', 10, {autoAlpha: 1}, "+=2");
    scene07Action.to('#scene07_textline1', 5, {autoAlpha: 0}, "+=20");
    scene07Action.to('#scene07_textblock6', 10, {autoAlpha: 1, x: 130}, "+=2");
    scene07Action.to('#scene07_textblock6', 10, {autoAlpha: 0, x: 260}, "+=20");

    const scene07 = new ScrollMagic.Scene({
                                              triggerElement: ".scene07",
                                              duration: 15000,
                                              triggerHook: 0,
                                              reverse: true
                                          });

    scene07.setTween(scene07Action);
    scene07.setPin(".scene07");
    scene07.addTo(controller);

    //  START FadeInScene06 ================================
    $(".scene07").each(function () {
        const scene07In = TweenMax.fromTo($(this), 2, {opacity: 0}, {opacity: 1, ease: Power1.easeIn});

        let scene7Scene = new ScrollMagic.Scene({
                                                    triggerElement: '.scene07',
                                                    duration: 500,
                                                    triggerHook: .6,
                                                    offset: 0
                                                });
        scene7Scene.setTween(scene07In);
        scene7Scene.addTo(controller);
        //scene7Scene.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange"});
    });
    //  END FadeInScene05 ================================

    //  START FadeOutScene06 ================================
    $(".scene07").each(function () {
        const scene07Out = TweenMax.to($(this), 2, {opacity: 0, ease: Power1.easeIn,});

        let scene7Scene = new ScrollMagic.Scene({
                                                    triggerElement: '.scene08',
                                                    duration: 700,
                                                    triggerHook: "onEnter",
                                                });
        scene7Scene.setTween(scene07Out);
        scene7Scene.addTo(controller);
    });
    //  END FadeOutScene07 ================================

    //  START scene08 ================================
    //SCENE 8 =========================
    let scene08Action = new TimelineMax();
    //BLUR
    scene07Action.set('.blur', {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");
    //TEXT
    scene08Action.to('#scene08_textline1', 10, {autoAlpha: 1, y: 210}, "+=2");
    scene08Action.to('#scene08_textline1', 5, {autoAlpha: 0}, "+=20");
    scene08Action.to('#scene08_textblock1', 10, {autoAlpha: 1, y: 210}, "+=2");
    scene08Action.to('#scene08_textblock1', 10, {autoAlpha: 0, y: -300}, "+=20");
    scene08Action.to('#scene08_textline2', 10, {autoAlpha: 1}, "-=10");
    scene08Action.to('#scene08_textline2', 10, {autoAlpha: 1, y: -74}, "-=10");
    scene08Action.to('#scene08_textline3', 10, {autoAlpha: 1}, "-=5");
    scene08Action.to('#scene08_textline2', 10, {autoAlpha: 0, y: -573}, "+=20");
    scene08Action.to('#scene08_textline3', 10, {autoAlpha: 0, y: -500}, "-=10");
    scene08Action.to('#scene08_textblock2', 10, {autoAlpha: 1, x: 300}, "+=2");
    scene08Action.to('#scene08_textblock2', 5, {autoAlpha: 1, y: -150}, "+=2");
    scene08Action.to('#scene08_textblock3', 10, {autoAlpha: 1, x: 300}, "-=5");
    scene08Action.to('#scene08_textblock2', 5, {autoAlpha: 0, x: 600}, "+=20");
    scene08Action.to('#scene08_textblock3', 5, {autoAlpha: 0, x: 600}, "-=5");
    scene08Action.to('#scene08_textblock4', 10, {autoAlpha: 1, x: 300});
    scene08Action.to('#scene08_textblock4', 5, {autoAlpha: 0, x: 600}, "+=20");
    scene08Action.to('#scene08_textline4', 10, {autoAlpha: 1}, "+=2");
    scene08Action.to('#scene08_textline4', 5, {autoAlpha: 0}, "+=20");
    //BLUR ENDE
    scene08Action.to('.blur', 5, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");
    scene08Action.to('#scene08_textblock5', 10, {autoAlpha: 1}, "+=2");
    scene08Action.to('#scene08_textblock5', 5, {autoAlpha: 0}, "+=20");
    scene08Action.to('#scene08_regBubble1', 10, {autoAlpha: 1, x: -300}, "+=2");
    scene08Action.to('#scene08_regBubble1', 10, {autoAlpha: 0, x: 300}, "+=20");
    scene08Action.to('#scene08_textline5', 10, {autoAlpha: 1, y: 260}, "+=2");
    scene08Action.to('#scene08_textline5', 5, {autoAlpha: 0}, "+=20");
    scene08Action.to('#scene08_bubbleAdam1', 10, {autoAlpha: 1}, "+=2");
    scene08Action.to('#scene08_bubbleAdam1', 10, {autoAlpha: 0}, "+=20");
    scene08Action.to('#scene08_bubbleAdam2', 10, {autoAlpha: 1}, "-=5");
    scene08Action.to('#scene08_bubbleAdam2', 10, {autoAlpha: 0}, "+=20");
    scene08Action.to('#scene08_bubbleAdam3', 10, {autoAlpha: 1}, "-=5");
    scene08Action.to('#scene08_bubbleAdam3', 10, {autoAlpha: 0}, "+=20");
    scene08Action.to('#scene08_textline6', 10, {autoAlpha: 1}, "+=2");
    scene08Action.to('#scene08_textline6', 5, {autoAlpha: 0}, "+=20");
    //BACKGROUND CHANGE
    scene08Action.to('#background1', 5, {autoAlpha: 0}, "+=4");
    scene08Action.to('#background2', 5, {autoAlpha: 1}, "-=10");
    scene08Action.to('#scene08_textline7', 10, {autoAlpha: 1}, "+=2");
    // start animating 'funken'
    scene08Action.to('#funken00', 3, {autoAlpha: 1});
    scene08Action.to('#funken00', 3, {autoAlpha: 0});
    scene08Action.to('#funken01', 3, {autoAlpha: 1});
    scene08Action.to('#funken01', 3, {autoAlpha: 0});
    scene08Action.to('#funken02', 3, {autoAlpha: 1});
    scene08Action.to('#funken02', 3, {autoAlpha: 0});
    scene08Action.to('#funken03', 3, {autoAlpha: 1});
    scene08Action.to('#funken03', 3, {autoAlpha: 0});
    scene08Action.to('#funken04', 3, {autoAlpha: 1});
    scene08Action.to('#funken04', 3, {autoAlpha: 0});
    scene08Action.to('#funken05', 3, {autoAlpha: 1});
    scene08Action.to('#funken05', 3, {autoAlpha: 0});
    scene08Action.to('#funken06', 3, {autoAlpha: 1});
    scene08Action.to('#funken06', 3, {autoAlpha: 0});
    scene08Action.to('#funken07', 3, {autoAlpha: 1});
    scene08Action.to('#funken07', 3, {autoAlpha: 0});
    scene08Action.to('#funken08', 3, {autoAlpha: 1});
    scene08Action.to('#funken08', 3, {autoAlpha: 0});
    scene08Action.to('#funken09', 3, {autoAlpha: 1});
    scene08Action.to('#funken10', 3, {autoAlpha: 0});
    scene08Action.to('#funken11', 3, {autoAlpha: 1});
    scene08Action.to('#funken12', 3, {autoAlpha: 1});
    scene08Action.to('#funken13', 3, {autoAlpha: 1});
    scene08Action.to('#funken14', 3, {autoAlpha: 1});
    scene08Action.to('#funken15', 3, {autoAlpha: 1});
    scene08Action.to('#funken14', 3, {autoAlpha: 0});
    scene08Action.to('#funken15', 3, {autoAlpha: 0});
    scene08Action.to('#funken14', 3, {autoAlpha: 1});
    scene08Action.to('#funken15', 3, {autoAlpha: 1});
    scene08Action.to('#funken11', 3, {autoAlpha: 0});
    scene08Action.to('#funken12', 3, {autoAlpha: 0});
    scene08Action.to('#funken11', 3, {autoAlpha: 1});
    scene08Action.to('#funken12', 3, {autoAlpha: 1});
    scene08Action.to('#funken01', 3, {autoAlpha: 1});
    scene08Action.to('#funken01', 3, {autoAlpha: 0});
    scene08Action.to('#funken02', 3, {autoAlpha: 1});
    scene08Action.to('#funken02', 3, {autoAlpha: 0});
    scene08Action.to('#funken03', 3, {autoAlpha: 1});
    scene08Action.to('#funken03', 3, {autoAlpha: 0});
    scene08Action.to('#funken04', 3, {autoAlpha: 1});
    scene08Action.to('#funken04', 3, {autoAlpha: 0});
    scene08Action.to('#funken05', 3, {autoAlpha: 1});
    scene08Action.to('#funken05', 3, {autoAlpha: 0});
    scene08Action.to('#funken06', 3, {autoAlpha: 1});
    scene08Action.to('#funken06', 3, {autoAlpha: 0});
    scene08Action.to('#funken07', 3, {autoAlpha: 1});
    scene08Action.to('#funken07', 3, {autoAlpha: 0});
    scene08Action.to('#funken08', 3, {autoAlpha: 1});
    scene08Action.to('#funken08', 3, {autoAlpha: 0});
    scene08Action.to('#funken09', 3, {autoAlpha: 1});
    // end animation
    scene08Action.to('#scene08_textline7', 5, {autoAlpha: 0}, "-=3");

    const scene08 = new ScrollMagic.Scene({
                                              triggerElement: ".scene08",
                                              duration: 30000,
                                              triggerHook: 0,
                                              reverse: true
                                          });

    scene08.setTween(scene08Action);
    scene08.setPin(".scene08");
    scene08.addTo(controller);

    //  START FadeInScene06 ================================
    $(".scene08").each(function () {
        const scene08In = TweenMax.fromTo($(this), 2, {opacity: 0}, {opacity: 1, ease: Power1.easeIn});

        let scene8Scene = new ScrollMagic.Scene({
                                                    triggerElement: '.scene08',
                                                    duration: 500,
                                                    triggerHook: .6,
                                                    offset: 0
                                                });
        scene8Scene.setTween(scene08In);
        scene8Scene.addTo(controller);
        //scene6Scene.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange"});
    });
    //  END FadeInScene05 ================================

    //  START FadeOutScene06 ================================
    $(".scene08").each(function () {
        const scene08Out = TweenMax.to($(this), 2, {opacity: 0, ease: Power1.easeIn,});

        let scene8Scene = new ScrollMagic.Scene({
                                                    triggerElement: '.nine',
                                                    duration: 700,
                                                    triggerHook: "onEnter",
                                                });
        scene8Scene.setTween(scene08Out);
        scene8Scene.addTo(controller);
    });
    //  END FadeOutScene08 ================================

    //DrawSVG_Plugin:
    var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this
                                                                                                             || window;
    (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
        "use strict";

        function t(t, e, i, r) {
            return i = parseFloat(i) - parseFloat(t), r = parseFloat(r) - parseFloat(e), Math.sqrt(i * i + r * r)
        }

        function e(t) {
            return "string" != typeof t && t.nodeType || (t = _gsScope.TweenLite.selector(t), t.length && (t = t[0])), t
        }

        function i(t, e, i) {
            var r, s, n = t.indexOf(" ");
            return -1 === n ? (r = void 0 !== i ? i + "" : t, s = t) : (r = t.substr(0, n), s = t.substr(n + 1)), r =
                -1 !== r.indexOf("%") ? parseFloat(r) / 100 * e : parseFloat(r), s =
                -1 !== s.indexOf("%") ? parseFloat(s) / 100 * e : parseFloat(s), r > s ? [s, r] : [r, s]
        }

        function r(i) {
            if (!i) {
                return 0;
            }
            i = e(i);
            var r, s, n, a, o, l, h, u, f = i.tagName.toLowerCase();
            if ("path" === f) {
                o = i.style.strokeDasharray, i.style.strokeDasharray = "none", r =
                    i.getTotalLength() || 0, i.style.strokeDasharray = o;
            } else if ("rect" === f) {
                s = i.getBBox(), r =
                    2 * (s.width + s.height);
            } else if ("circle" === f) {
                r =
                    2 * Math.PI * parseFloat(i.getAttribute("r"));
            } else if ("line" === f) {
                r =
                    t(i.getAttribute("x1"), i.getAttribute("y1"), i.getAttribute("x2"),
                      i.getAttribute("y2"));
            } else if ("polyline" === f || "polygon" === f) {
                for (n = i.getAttribute("points")
                          .split(" "), r = 0, o =
                    n[0].split(","), "polygon" === f && (n.push(n[0]), -1 === n[0].indexOf(",") && n.push(n[1])), l = 1;
                     n.length > l;
                     l++) {
                    a = n[l].split(","), 1
                                         === a.length
                                         && (a[1] =
                        n[l++]), 2 === a.length && (r += t(o[0], o[1], a[0], a[1]) || 0, o = a);
                }
            } else {
                "ellipse" === f
                && (h =
                    parseFloat(i.getAttribute("rx")), u = parseFloat(i.getAttribute("ry")), r =
                    Math.PI * (3 * (h + u) - Math.sqrt((3 * h + u) * (h + 3 * u))));
            }
            return r || 0
        }

        function s(t, i) {
            if (!t) {
                return [0, 0];
            }
            t = e(t), i = i || r(t) + 1;
            var s = a(t), n = s.strokeDasharray || "", o = parseFloat(s.strokeDashoffset), l = n.indexOf(",");
            return 0 > l && (l = n.indexOf(" ")), n = 0 > l ? i : parseFloat(n.substr(0, l)) || 1e-5, n > i && (n =
                i), [Math.max(0, -o), n - o]
        }

        var n, a = document.defaultView ? document.defaultView.getComputedStyle : function () {
        };
        n = _gsScope._gsDefine.plugin({
                                          propName: "drawSVG",
                                          API: 2,
                                          version: "0.0.5",
                                          global: !0,
                                          overwriteProps: ["drawSVG"],
                                          init: function (t, e) {
                                              if (!t.getBBox) {
                                                  return !1;
                                              }
                                              var n, a, o, l = r(t) + 1;
                                              return this._style = t.style, e === !0 || "true" === e ? e = "0 100%" : e
                                                                                                                      ? -1
                                                                                                                        === (e
                                                                                                                             + "").indexOf(
                                                      " ") && (e = "0 " + e)
                                                                                                                      : e =
                                                                                                                          "0 0", n =
                                                  s(t, l), a = i(e, l, n[0]), this._length = l + 10, 0 === n[0] && 0
                                                                                                     === a[0] ? (o =
                                                  Math.max(1e-5, a[1] - l), this._dash = l + o, this._offset =
                                                  l - n[1] + o, this._addTween(this, "_offset", this._offset,
                                                                               l - a[1] + o, "drawSVG")) : (this._dash =
                                                  n[1] - n[0] || 1e-6, this._offset = -n[0], this._addTween(this,
                                                                                                            "_dash",
                                                                                                            this._dash,
                                                                                                            a[1] - a[0]
                                                                                                            || 1e-5,
                                                                                                            "drawSVG"), this._addTween(
                                                  this, "_offset", this._offset, -a[0], "drawSVG")), !0
                                          },
                                          set: function (t) {
                                              this._firstPT && (this._super.setRatio.call(this,
                                                                                          t), this._style.strokeDashoffset =
                                                  this._offset, this._style.strokeDasharray =
                                              (1 === t || 0 === t) && .001 > this._offset && 10 >= this._length
                                              - this._dash ? "none" : this._dash + "px," + this._length + "px")
                                          }
                                      }), n.getLength = r, n.getPosition = s
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
});

