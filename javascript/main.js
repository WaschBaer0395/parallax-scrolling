$(document).ready(function () {
    let chosen1 = false;
    let chosen2 = false;
    let chosen3 = false;
    let chosen4 = false;

    let badCounter = 0;
    let goodCounter = 0;

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    var keys = {37: 1, 38: 1, 39: 1, 40: 1};

    function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.returnValue = false;
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    function disableScroll(choice) {
        if(choice == "1" && chosen1 == true){enableScroll();return false;}
        else if(choice == "2" && chosen2 == true){enableScroll();return false;}
        else if(choice == "3" && chosen3 == true){enableScroll();return false;}
        else if(choice == "4" && chosen4 == true){enableScroll();return false;}
        else {
            if (window.addEventListener) // older FF
            {
                window.addEventListener('DOMMouseScroll', preventDefault, false);
            }
            document.addEventListener('wheel', preventDefault, {passive: false}); // Disable scrolling in Chrome
            window.onwheel = preventDefault; // modern standard
            window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
            window.ontouchmove = preventDefault; // mobile
            document.onkeydown = preventDefaultForScrollKeys;
        }
    }

    function enableScroll() {
        if (window.removeEventListener) {
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
        }
        document.removeEventListener('wheel', preventDefault, {passive: false}); // Enable scrolling in Chrome
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    }

    // Single scrollmagic controller for the entire experience
    const controller = new ScrollMagic.Controller();

    $('.typewriter').each(function () { // gets called as soon as #Slide1_1 is in view
        // letter animation
        const tween = new TimelineLite(); // timeline for the typing and cursor animation
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
    let coverAction = new TimelineLite();

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
    let introAction = new TimelineLite();
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
    //let timeline = new TimelineLite();
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
    let prologAction = new TimelineLite();
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
    let scene01Action = new TimelineLite();
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
    let scene02Action = new TimelineLite();
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
    let scene03Action = new TimelineLite();
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
    let scene03_part2Action = new TimelineLite();
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

    // START PARALLAX FOR SCENE3_PART2
    scene03_part2Action.add("Parallax_hospital", "+=0");
    scene03_part2Action.to('#background', 10, {y:-10}, "Parallax_hospital");
    scene03_part2Action.to('#bed', 10, {y:-40}, "Parallax_hospital");
    scene03_part2Action.to('#chair', 10, {y:-20}, "Parallax_hospital");
    scene03_part2Action.to('#monitor', 10, {y:-25}, "Parallax_hospital");
    scene03_part2Action.to('#adam', 10, {y:-60}, "Parallax_hospital");
    scene03_part2Action.to('#socket', 10, {y:-60}, "Parallax_hospital");
    scene03_part2Action.to('#battery', 5, {y:-10, autoAlpha:0}, "Parallax_hospital");
    scene03_part2Action.to('#wire', 10, {y:-60}, "Parallax_hospital");




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
    //scene03_2.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange"});

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
    const scene04 = new ScrollMagic.Scene({
                                              triggerElement: ".scene04",
                                              duration: 20000,
                                              triggerHook: 0,
                                              reverse: true
                                          });
    //  FadeOutScene04 ================================
    $(".scene04").each(function () {
        const scene04Out = TweenMax.to($(this), 2, {opacity: 0, ease: Power1.easeIn,});

        let s04out = new ScrollMagic.Scene({
            triggerElement: '.decision1',
            duration: 700,
            triggerHook: "onEnter",
        });
        s04out.setTween(scene04Out);
        s04out.addTo(controller);
    });

    //  END FadeOutScene04 ================================

    let scene04Action = new TimelineLite();
    //BLUR
    scene03_part2Action.set('.blur', {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");
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
    $('.decision1').each(function () {

        // START SCENE 05 RIGHT SIDE =======================================================================
        let scene05Rechts = new TimelineLite();
        //BLUR
        scene04Action.set('.blur', {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");
        //TEXT
        scene05Rechts.to(' #scene05_textline1', 10, {autoAlpha: 1}, "+=2");
        scene05Rechts.to(' #scene05_textline1', 10, {autoAlpha: 0}, "+=4");
        scene05Rechts.to(' #scene05_textblock1', 10, {autoAlpha: 1, y: 100}, "+=2");
        scene05Rechts.to(' #scene05_textblock1', 5, {autoAlpha: 0, y: -100}, "+=4");
        //BLUR ENDE
        scene05Rechts.to('.blur', 5, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");
        //ADAM IN
        scene05Rechts.add("adam_scene05", "+=0");
        scene05Rechts.to(' #scene05_adam', 10, {autoAlpha: 1,x:80}, "adam_scene05");
        scene05Rechts.to(' #hurt', 10, {autoAlpha: 1,x:40}, "adam_scene05");
        //GIRL IN
        scene05Rechts.to(' #scene05_girl', 10, {autoAlpha: 1}, "+=4");
        //BUBBLES
        scene05Rechts.to(' #scene05_bubbleGirl1', 10, {autoAlpha: 1}, "+=2");
        scene05Rechts.to(' #scene05_bubbleGirl1', 10, {autoAlpha: 0}, "+=4");
        scene05Rechts.to(' #scene05_bubbleAdam1', 10, {autoAlpha: 1}, "+=2");
        scene05Rechts.to(' #scene05_bubbleAdam1', 10, {autoAlpha: 0}, "+=4");
        scene05Rechts.to(' #scene05_bubbleAdam2', 10, {autoAlpha: 1}, "+=2");
        scene05Rechts.to(' #scene05_bubbleAdam2', 10, {autoAlpha: 0}, "+=4");
        //TEXT
        scene05Rechts.to(' #scene05_textline2', 10, {autoAlpha: 1}, "+=2");
        scene05Rechts.to(' #scene05_textline3', 10, {autoAlpha: 1}, "+=2");
        scene05Rechts.to(' #scene05_textline2', 10, {autoAlpha: 0}, "+=4");
        scene05Rechts.to(' #scene05_textline3', 10, {autoAlpha: 0}, "-=10");
        scene05Rechts.to(' #scene05_textblock2', 10, {autoAlpha: 1, x: -600}, "+=2");
        scene05Rechts.to(' #scene05_textblock2', 10, {autoAlpha: 0, x: 300}, "+=4");
        scene05Rechts.to(' #scene05_bubbleAdam3', 10, {autoAlpha: 1}, "+=2");
        scene05Rechts.to(' #scene05_bubbleAdam3', 10, {autoAlpha: 0}, "+=4");
        scene05Rechts.to(' #scene05_textblock3', 10, {autoAlpha: 1, y: -400}, "+=2");
        scene05Rechts.to(' #scene05_textblock3', 10, {autoAlpha: 0, y: 150}, "+=10");
        scene05Rechts.to(' #scene05_textline4', 10, {autoAlpha: 1}, "-=2");
        scene05Rechts.to(' #scene05_textline4', 10, {autoAlpha: 0}, "+=8");
        scene05Rechts.to(' #scene05_textblock4', 10, {autoAlpha: 1}, "+=2");
        scene05Rechts.to(' #scene05_textblock4', 10, {autoAlpha: 0}, "+=20");
        scene05Rechts.to(' #scene05_bubbleAdam4', 10, {autoAlpha: 1}, "+=2");
        scene05Rechts.to(' #scene05_bubbleAdam4', 10, {autoAlpha: 0}, "+=20");
        // END SCENE 05 RIGHT SIDE =======================================================================

        // START SCENE 06 LEFT SIDE =======================================================================
        let scene06Links = new TimelineMax();
        //BLUR
        scene06Links.set('.blur', {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");
        scene06Links.to('#scene06_textlineTitle', 10, {autoAlpha: 1, y: 300}, "+=2");
        scene06Links.to('#scene06_textlineTitle', 10, {autoAlpha: 0}, "+=20");
        scene06Links.to('#scene06_textblock1', 10, {autoAlpha: 1, y: -300}, "+=10");
        scene06Links.to('#scene06_textblock1', 5, {autoAlpha: 0, y: -600}, "+=20");
        scene06Links.to('#scene06_textline1', 10, {autoAlpha: 1, x: -1424}, "+=2");
        scene06Links.to('#scene06_textline2', 10, {autoAlpha: 1, x: -1424}, "+=20");
        scene06Links.to('#scene06_textline3', 10, {autoAlpha: 1, x: -1424}, "+=20");
        scene06Links.to('#scene06_textline1', 10, {autoAlpha: 0, x: 10}, "+=20");
        scene06Links.to('#scene06_textline2', 10, {autoAlpha: 0, x: 10}, "-=10");
        scene06Links.to('#scene06_textline3', 10, {autoAlpha: 0, x: 10}, "-=10");
        scene06Links.to('#scene06_textblock2', 10, {autoAlpha: 1, y: -300}, "+=2");
        scene06Links.to('#scene06_textblock2', 5, {autoAlpha: 0, y: -400}, "+=20");
        //BLUR ENDE
        scene06Links.to('.blur', 5, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");
        scene06Links.to('#scene06_textline4', 10, {autoAlpha: 1}, "+=2");
        scene06Links.to('#scene06_bubbleAdam1', 10, {autoAlpha: 0.9, x: 400}, "-=10");
        scene06Links.to('#scene06_bubbleAdam1', 20, {autoAlpha: 0.3}, "+=20");
        scene06Links.to('#scene06_bubble1small', 10, {autoAlpha: 0.7}, "-=15");
        scene06Links.to('#scene06_bubbleAdam1', 20, {autoAlpha: 0},"+=10");
        scene06Links.to('#scene06_bubble1small', 20, {autoAlpha: 0},"+=10");
        scene06Links.to('#scene06_textline4', 5, {autoAlpha: 0}, "-=10");
        scene06Links.to('#scene06_textblock3', 10, {autoAlpha: 1, x: 300}, "+=2");
        scene06Links.to('#scene06_textblock3', 5, {autoAlpha: 1, y: -150}, "+=2");
        scene06Links.to('#scene06_textblock4', 10, {autoAlpha: 1, x: 300}, "-=5");
        scene06Links.to('#scene06_textblock3', 5, {autoAlpha: 0, x: 1000}, "+=20");
        scene06Links.to('#scene06_textblock4', 5, {autoAlpha: 0, x: 1000}, "-=5");
        scene06Links.to('#scene06_textblock5', 10, {autoAlpha: 1, x: 300}, "+=2");
        scene06Links.to('#scene06_textblock5', 5, {autoAlpha: 0}, "+=20");
        scene06Links.to('#scene06_bubbleAdam2', 10, {autoAlpha: 1}, "+=2");
        scene06Links.to('#scene06_bubbleAdam2', 10, {autoAlpha: 0}, "+=20");
        scene06Links.to('#scene06_textblock6', 10, {autoAlpha: 1, y: -500}, "+=2");
        scene06Links.to('#scene06_textblock6', 5, {autoAlpha: 0}, "+=20");
        scene06Links.to('#scene06_textline5', 10, {autoAlpha: 1, y: 60}, "+=2");
        scene06Links.to('#scene06_textline6', 10, {autoAlpha: 1, y: -350}, "-=10");
        scene06Links.to('#scene06_textline5', 5, {autoAlpha: 0}, "+=20");
        scene06Links.to('#scene06_textline6', 5, {autoAlpha: 0}, "-=5");
        // start animation of binär
        scene06Links.to('#binaer01', 1, {autoAlpha: 1,y:-10}, "-=5");
        scene06Links.to('#binaer02', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer03', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer04', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer05', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer06', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer07', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer08', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer09', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer10', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer11', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer12', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer14', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer15', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer16', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer17', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer18', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer19', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer20', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer21', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer22', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer23', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer24', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer25', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer26', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer01', 1, {autoAlpha: 0});
        scene06Links.to('#binaer02', 1, {autoAlpha: 0});
        scene06Links.to('#binaer03', 1, {autoAlpha: 0});
        scene06Links.to('#binaer04', 1, {autoAlpha: 0});
        scene06Links.to('#binaer05', 1, {autoAlpha: 0});
        scene06Links.to('#binaer06', 1, {autoAlpha: 0});
        scene06Links.to('#binaer07', 1, {autoAlpha: 0});
        scene06Links.to('#binaer08', 1, {autoAlpha: 0});
        scene06Links.to('#binaer09', 1, {autoAlpha: 0});
        scene06Links.to('#binaer10', 1, {autoAlpha: 0});
        scene06Links.to('#binaer11', 1, {autoAlpha: 0});
        scene06Links.to('#binaer12', 1, {autoAlpha: 0});
        scene06Links.to('#binaer14', 1, {autoAlpha: 0});
        scene06Links.to('#binaer15', 1, {autoAlpha: 0});
        scene06Links.to('#binaer16', 1, {autoAlpha: 0});
        scene06Links.to('#binaer17', 1, {autoAlpha: 0});
        scene06Links.to('#binaer18', 1, {autoAlpha: 0});
        scene06Links.to('#binaer19', 1, {autoAlpha: 0});
        scene06Links.to('#binaer20', 1, {autoAlpha: 0});
        scene06Links.to('#binaer21', 1, {autoAlpha: 0});
        scene06Links.to('#binaer22', 1, {autoAlpha: 0});
        scene06Links.to('#binaer23', 1, {autoAlpha: 0});
        scene06Links.to('#binaer24', 1, {autoAlpha: 0});
        scene06Links.to('#binaer25', 1, {autoAlpha: 0});
        scene06Links.to('#binaer26', 1, {autoAlpha: 0});
        scene06Links.to('#binaer01', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer02', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer03', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer04', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer05', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer06', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer07', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer08', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer09', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer10', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer11', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer12', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer14', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer15', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer16', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer17', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer18', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer19', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer20', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer21', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer22', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer23', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer24', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer25', 1, {autoAlpha: 1,y:-10});
        scene06Links.to('#binaer26', 1, {autoAlpha: 1,y:-10});
        // end animation
        // START PARALLAX ZOOM-IN
        scene06Links.add("Parallax_mountain", "+=0");
        scene06Links.to('#scene06_background', 60, {scale:2.4,x:-1200},"Parallax_mountain");
        scene06Links.to('#scene06_first_layer', 60, {scale:4,x:-2000},"Parallax_mountain");
        scene06Links.to('#binaer01', 60, {scale:"3.5",x:-1700,autoAlpha: 1},"Parallax_mountain");
        scene06Links.to('#binaer02', 60, {scale:"3.4",x:-1700,autoAlpha: 1},"Parallax_mountain");
        scene06Links.to('#binaer03', 60, {scale:"3.6",x:-1700,autoAlpha: 1},"Parallax_mountain");
        scene06Links.to('#binaer04', 60, {scale:"3.6",x:-1700,autoAlpha: 1},"Parallax_mountain");
        scene06Links.to('#binaer05', 60, {scale:"3.5",x:-1700,autoAlpha: 1},"Parallax_mountain");
        scene06Links.to('#binaer06', 60, {scale:"3.7",x:-1700,autoAlpha: 1},"Parallax_mountain");
        scene06Links.to('#binaer07', 60, {scale:"3.6",x:-1700,autoAlpha: 1},"Parallax_mountain");
        scene06Links.to('#binaer08', 60, {scale:"3.5",x:-1700,autoAlpha: 1},"Parallax_mountain");
        scene06Links.to('#binaer09', 60, {scale:"3.8",x:-1700,autoAlpha: 1},"Parallax_mountain");
        scene06Links.to('#binaer10', 60, {scale:"3.9",x:-1700,autoAlpha: 1},"Parallax_mountain");
        scene06Links.to('#binaer11', 60, {scale:"3.6",x:-1700,autoAlpha: 1},"Parallax_mountain");
        scene06Links.to('#binaer12', 60, {scale:"3.8",x:-1700,autoAlpha: 1},"Parallax_mountain");
        scene06Links.to('#binaer14', 60, {scale:"3.6",x:-1700,autoAlpha: 1},"Parallax_mountain");
        scene06Links.to('#binaer15', 60, {scale:"3.6",x:-1700,autoAlpha: 1},"Parallax_mountain");
        scene06Links.to('#binaer16', 60, {scale:"3.5",x:-1700,autoAlpha: 1},"Parallax_mountain");
        scene06Links.to('#binaer17', 60, {scale:"3.7",x:-1700,autoAlpha: 1},"Parallax_mountain");
        scene06Links.to('#binaer18', 60, {scale:"3.4",x:-1700,autoAlpha: 1},"Parallax_mountain");
        scene06Links.to('#binaer19', 60, {scale:"3.6",x:-1700,autoAlpha: 1},"Parallax_mountain");
        scene06Links.to('#binaer20', 60, {scale:"3.8",x:-1700,autoAlpha: 1},"Parallax_mountain");
        scene06Links.to('#binaer21', 60, {scale:"3.5",x:-1700,autoAlpha: 1},"Parallax_mountain");
        scene06Links.to('#binaer22', 60, {scale:"3.7",x:-1700,autoAlpha: 1},"Parallax_mountain");
        scene06Links.to('#binaer23', 60, {scale:"3.7",x:-1700,autoAlpha: 1},"Parallax_mountain");
        scene06Links.to('#binaer24', 60, {scale:"3.2",x:-1700,autoAlpha: 1},"Parallax_mountain");
        scene06Links.to('#binaer25', 60, {scale:"3.4",x:-1700,autoAlpha: 1},"Parallax_mountain");
        scene06Links.to('#binaer26', 60, {scale:"3.4",x:-1700,autoAlpha: 1},"Parallax_mountain");
        // END SCENE 06 LEFT SIDE =======================================================================


        let decision1Middle = new TimelineLite();
        decision1Middle.add('text');
        decision1Middle.add('options');
        decision1Middle.add('buttons');
        decision1Middle.call(disableScroll, ["1"], null, '+=1');
        decision1Middle.call(function(){chosen1 = true},null,'+=3');
        decision1Middle.to('.choice1', 2, {autoAlpha: 1, y: 100}, 'text');
        decision1Middle.to('.movieL', 1, {autoAlpha: 1, x: 100}, 'options');
        decision1Middle.to('.buttonL', 2, {autoAlpha: 1, x: 0}, 'buttons');
        decision1Middle.to('.movieR', 1, {autoAlpha: 1, x: -100}, 'options');
        decision1Middle.to('.buttonR', 2, {autoAlpha: 1, x: 0}, 'buttons');


        let decision1Main = new TimelineLite();
        decision1Main.add(decision1Middle);
        decision1Main.add("main");
        decision1Main.add(scene06Links,'main');
        decision1Main.add(scene05Rechts,"main");
        decision1Main.set('.scene07 .blur', {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");

        // RIGHT SCENE ANIMATIONS AND SCROLL LOCK ========================================
        $('.buttonR').on('click',
            function () {
                TweenMax.to("#wrapper1", 2, {ease: Power2.easeOut, left: "-200vw", oncomplete: enableScroll()});
                scene06Links.progress(1); //directly ends timeline for left scene
                badCounter++;
            });

        // LEFT SCENE ANIMATIONS AND SCROLL LOCK ========================================
        $('.buttonL').on('click',
            function () {
                TweenMax.to("#wrapper1", 2, {ease: Power2.easeOut, left: "0", oncomplete: enableScroll()});
                scene05Rechts.progress(1); //directly ends timeline for right scene
                goodCounter++;
            });


        const decision1 = new ScrollMagic.Scene({
            triggerElement: ".decision1",
            duration: 25000,
            triggerHook: 0,
            reverse: true
        });

        decision1.setTween(decision1Main);
        decision1.setPin(".decision1");
        decision1.addTo(controller);
        
    });


    //  START FadeInScene05 ================================
    $('.decision1').each(function () {
        const decision1In = TweenMax.fromTo($(this), 2, {opacity: 0}, {opacity: 1, ease: Power1.easeIn});

        let decision1 = new ScrollMagic.Scene({
            triggerElement: '.decision1',
            duration: 500,
            triggerHook: .6,
            offset: 0
        });
        decision1.setTween(decision1In);
        decision1.addTo(controller);
        //scene5Scene.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange"});
    });
    //  END FadeInScene05 ================================

    //  START FadeOutScene05 ================================
    $(".decision1").each(function () {
        const decision1Out = TweenMax.to($(this), 2, {opacity: 0, ease: Power1.easeIn,});

        let decision1 = new ScrollMagic.Scene({
            triggerElement: '.scene07',
            duration: 700,
            triggerHook: "onEnter",
        });
        decision1.setTween(decision1Out);
        decision1.addTo(controller);
    });
    //  END FadeOutScene05 ================================

    //END SCENE05
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
                                                    duration: 300,
                                                    triggerHook: "onEnter",
                                                });
        scene6Scene.setTween(scene06Out);
        scene6Scene.addTo(controller);
    });
    //  END FadeOutScene06 ================================

    //  START scene07 ================================
    //SCENE 7 =========================
    let scene07Action = new TimelineLite();
    //BLUR
    //scene06Links.set('.blur', {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");
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

    //  START FadeInScene07 ================================
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
    //  END FadeInScene07 ================================

    //  START FadeOutScene07 ================================
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
    let scene08Action = new TimelineLite();
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

    //  START FadeInScene08 ================================
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
    //  END FadeInScene08 ================================

    //  START FadeOutScene08 ================================
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

    //  START scene10 ================================
    //SCENE 10 =========================
    let scene10Action = new TimelineLite();
    //BLUR -> muss sobald Szene 9 existiert, in scene09Action.set umgeändert werden!
    scene08Action.set('.blur', {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");
    //TEXT
    scene10Action.to('#scene10_textblock1', 10, {autoAlpha: 1, y: 210}, "+=2");
    scene10Action.to('#scene10_textline1', 10, {autoAlpha: 1, y: -80}, "+=20");
    scene10Action.to('#scene10_textblock1', 10, {autoAlpha: 0, y: 500}, "+=20");
    scene10Action.to('#scene10_textline1', 10, {autoAlpha: 0, y: 500}, "-=10");
    scene10Action.to('#scene10_textblock2', 10, {autoAlpha: 1, y: -100}, "+=2");
    scene10Action.to('#scene10_textblock3', 10, {autoAlpha: 1, y: -100}, "+=2");
    scene10Action.to('#scene10_textblock2', 10, {autoAlpha: 0, y: -500}, "+=20");
    scene10Action.to('#scene10_textblock3', 10, {autoAlpha: 0, y: -500}, "-=10");
    scene10Action.to('#scene10_textblock4', 10, {autoAlpha: 1, x: -300}, "+=2");
    scene10Action.to('#scene10_textblock4', 10, {autoAlpha: 0, x: 600}, "+=20");
    scene10Action.to('#scene10_textline2', 10, {autoAlpha: 1}, "+=2");
    scene10Action.to('#scene10_textline2', 10, {autoAlpha: 0}, "+=20");
    scene10Action.to('#scene10_textblock5', 10, {autoAlpha: 1, x: -300}, "+=2");
    scene10Action.to('#scene10_textblock5', 10, {autoAlpha: 0, x: 600}, "+=20");
    //BLUR ENDE
    scene10Action.to('.blur', 5, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");
    scene10Action.to('#scene10_adam', 10, {autoAlpha: 1, x: 150}, "+=4");
    scene10Action.to('#scene10_girl', 10, {autoAlpha: 1, x: -150}, "-=10");
    scene10Action.to('#scene10_girlBubble1', 10, {autoAlpha: 1}, "+=2");
    scene10Action.to('#scene10_girlBubble1', 10, {autoAlpha: 0}, "+=20");
    scene10Action.to('#scene10_adamBubble1', 10, {autoAlpha: 1}, "+=2");
    scene10Action.to('#scene10_adamBubble1', 10, {autoAlpha: 0}, "+=20");
    scene10Action.to('#scene10_girlBubble2', 10, {autoAlpha: 1}, "+=2");
    scene10Action.to('#scene10_girlBubble2', 10, {autoAlpha: 0}, "+=20");
    scene10Action.to('#scene10_adamBubble2', 10, {autoAlpha: 1}, "+=2");
    scene10Action.to('#scene10_adamBubble2', 10, {autoAlpha: 0}, "+=20");
    scene10Action.to('#scene10_girlBubble3', 10, {autoAlpha: 1}, "+=2");
    scene10Action.to('#scene10_girlBubble3', 10, {autoAlpha: 0}, "+=20");
    scene10Action.to('#scene10_adamBubble3', 10, {autoAlpha: 1}, "+=2");
    scene10Action.to('#scene10_adamBubble3', 10, {autoAlpha: 0}, "+=20");
    scene10Action.to('#scene10_textblock6', 10, {autoAlpha: 1, y: 210}, "+=2");
    scene10Action.to('#scene10_textblock6', 10, {autoAlpha: 0, y: -300}, "+=20");
    scene10Action.to('#scene10_adamBubble4', 10, {autoAlpha: 1}, "+=2");
    scene10Action.to('#scene10_adamBubble4', 10, {autoAlpha: 0}, "+=20");
    scene10Action.to('#scene10_textline3', 10, {autoAlpha: 1}, "+=2");
    scene10Action.to('#scene10_textline3', 10, {autoAlpha: 0}, "+=20");
    scene10Action.to('#scene10_girlBubble4', 10, {autoAlpha: 1}, "+=2");
    scene10Action.to('#scene10_girlBubble4', 10, {autoAlpha: 0}, "+=20");

    const scene10 = new ScrollMagic.Scene({
                                              triggerElement: ".scene10",
                                              duration: 30000,
                                              triggerHook: 0,
                                              reverse: true
                                          });

    scene10.setTween(scene10Action);
    scene10.setPin(".scene10");
    scene10.addTo(controller);

    //  START FadeInScene10 ================================
    $(".scene10").each(function () {
        const scene10In = TweenMax.fromTo($(this), 2, {opacity: 0}, {opacity: 1, ease: Power1.easeIn});

        let scene10Scene = new ScrollMagic.Scene({
                                                    triggerElement: '.scene10',
                                                    duration: 500,
                                                    triggerHook: .6,
                                                    offset: 0
                                                });
        scene10Scene.setTween(scene10In);
        scene10Scene.addTo(controller);
        //scene10Scene.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange"});
    });
    //  END FadeInScene10 ================================

    //  START FadeOutScene10 ================================
    $(".scene10").each(function () {
        const scene10Out = TweenMax.to($(this), 2, {opacity: 0, ease: Power1.easeIn,});

        let scene10Scene = new ScrollMagic.Scene({
                                                    triggerElement: '.scene11',
                                                    duration: 700,
                                                    triggerHook: "onEnter",
                                                });
        scene10Scene.setTween(scene10Out);
        scene10Scene.addTo(controller);
    });
    //  END FadeOutScene10 ================================

    //  START FadeInScene11 ================================
    $('.scene11').each(function () {
        const scene11In = TweenMax.fromTo($(this), 2, {opacity: 0}, {opacity: 1, ease: Power1.easeIn});

        let scene11Scene = new ScrollMagic.Scene({
                                                     triggerElement: '.scene11',
                                                     duration: 500,
                                                     triggerHook: .6,
                                                     offset: 0
                                                 });
        scene11Scene.setTween(scene11In);
        scene11Scene.addTo(controller);
        //scene5Scene.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange"});
    });
    //  END FadeInScene11 ================================

    //  START FadeOutScene11 ================================
    $(".scene11").each(function () {
        const scene11Out = TweenMax.to($(this), 2, {opacity: 0, ease: Power1.easeIn,});

        let scene11Scene = new ScrollMagic.Scene({
                                                     triggerElement: '.scene12',
                                                     duration: 700,
                                                     triggerHook: "onEnter",
                                                 });
        scene11Scene.setTween(scene11Out);
        scene11Scene.addTo(controller);
    });
    //  END FadeOutScene11 ================================

    // START SCENE11 ======================================
    // START ANIMATION ====================================
    let scene11Action = new TimelineLite();
    //BLUR
    scene11Action.set('.blur', {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=0");

    scene11Action.to('#scene11_textline4', 10, {autoAlpha: 1, y: 210}, "+=2");
    scene11Action.to('#scene11_textline4', 5, {autoAlpha: 0}, "+=20");


    // BLUR END
    scene11Action.to('.blur', 5, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");

    // LIGHT GOES OFF
    scene11Action.to('#scene11_bright', 4,
                     {scale: "10", x: "-3000vw", y: "3000vw"}, "+=2");
    scene11Action.to('#scene11_bright', 2, {autoAlpha: 0});
    scene11Action.add("Parallax", "+=1");
    scene11Action.to('#scene11_layer01', 0, {scale: "1.2", autoAlpha: 1}, "Parallax");
    scene11Action.to('#scene11_layer02', 0, {scale: "2", autoAlpha: 1}, "Parallax");
    scene11Action.to('#scene11_layer01', 2, {scale: "1.01"}, "Parallax");
    scene11Action.to('#scene11_layer02', 2, {scale: "1"}, "Parallax");
    scene11Action.add("Parallax2", "+=1");
    scene11Action.to('#scene11_layer02', 2, {scale: "3", autoAlpha: 0}, "Parallax2");
    scene11Action.to('#scene11_dark_background02_without_nightvision', 2, {scale: "1.2", autoAlpha: 1}, "Parallax2");
    scene11Action.to('#scene11_dark_background02_with_nightvision', 2, {scaleY: 0, transformOrigin: "50% 50%"}, "+=1");
    scene11Action.add("Parallax3", "+=1");
    scene11Action.to('#scene11_dark_background02_without_nightvision', 2, {autoAlpha: 0}, "Parallax3");
    scene11Action.to('#scene11_layer01', 2, {autoAlpha: 0}, "Parallax3");
    scene11Action.to('#scene11_dark_background02_with_nightvision', 2,
                     {scale: "1.01", autoAlpha: .1, transformOrigin: "50% 50%"}, "Parallax3");
    scene11Action.to('#scene11_dark_background02_with_nightvision', 0, {autoAlpha: 0});
    scene11Action.to('#scene11_dark_background02_with_nightvision', 1, {autoAlpha: .3});
    scene11Action.to('#scene11_dark_background02_with_nightvision', 0, {autoAlpha: 0}, "+=1");
    scene11Action.to('#scene11_dark_background02_with_nightvision', 1, {autoAlpha: .4});
    scene11Action.to('#scene11_dark_background02_with_nightvision', .4, {scaleY: 0, autoAlpha: .2}, "+=0");
    scene11Action.to('#scene11_dark_background02_with_nightvision', .4, {scaleY: 1, autoAlpha: .3}, "+=1");
    scene11Action.to('#scene11_dark_background02_with_nightvision', 0, {autoAlpha: 0}, "+=1");
    scene11Action.to('#scene11_dark_background02_with_nightvision', 1, {autoAlpha: 1}, "+=1");

    // PREPARING FOR ZOOM-OUT SCENE12 //
    scene11Action.add("Parallax_concert1", "+=1");
    scene11Action.to('#scene12_layer00', 1, {scale: "1.5"}, "Parallax_concert1");
    scene11Action.to('#scene12_layer01', 1, {scale: "2"}, "Parallax_concert1");
    scene11Action.to('#scene12_layer02', 1, {scale: "2.5"}, "Parallax_concert1");
    scene11Action.to('#scene12_layer03', 1, {scale: "3"}, "Parallax_concert1");
    scene11Action.to('#scene12_layer04', 1, {scale: "3.5"}, "Parallax_concert1");


    const scene11 = new ScrollMagic.Scene({
                                              triggerElement: ".scene11",
                                              duration: 30000,
                                              triggerHook: 0,
                                              reverse: true
                                          });

    scene11.setTween(scene11Action);
    scene11.setPin(".scene11");
    scene11.addTo(controller);




    //  START FadeInScene12 ================================
    $('.scene12').each(function () {
        const scene12In = TweenMax.fromTo($(this), 2, {opacity: 0}, {opacity: 1, ease: Power1.easeIn});

        let scene12Scene = new ScrollMagic.Scene({
            triggerElement: '.scene12',
            duration: 500,
            triggerHook: .6,
            offset: 0
        });
        scene12Scene.setTween(scene12In);
        scene12Scene.addTo(controller);
        //scene5Scene.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange"});
    });
    //  END FadeInScene12 ================================

    //  START FadeOutScene12 ================================
    $(".scene12").each(function () {
        const scene12Out = TweenMax.to($(this), 2, {opacity: 0, ease: Power1.easeIn,});

        let scene11Scene = new ScrollMagic.Scene({
            triggerElement: '.scene13',
            duration: 700,
            triggerHook: "onEnter",
        });
        scene11Scene.setTween(scene12Out);
        scene11Scene.addTo(controller);
    });
    //  END FadeOutScene12 ================================

    // START SCENE11 ======================================
    // START ANIMATION ====================================
    let scene12Action = new TimelineLite();
    // ANIMATION FOR SCENEBEGINING
    scene12Action.add("Parallax_concert2", "+=1");
    scene12Action.to('#scene12_layer00', 10, {scale: "1"}, "Parallax_concert2");
    scene12Action.to('#scene12_layer01', 10, {scale: "1"}, "Parallax_concert2");
    scene12Action.to('#scene12_layer02', 10, {scale: "1"}, "Parallax_concert2");
    scene12Action.to('#scene12_layer03', 10, {scale: "1"}, "Parallax_concert2");
    scene12Action.to('#scene12_layer04', 10, {scale: "1"}, "Parallax_concert2");
    //////////////////////////////


    // Ab hier Animationen einfügen
    scene12Action.set('.blur', {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=4");
    scene12Action.to('#scene12_textline1', 5, {autoAlpha: 1}, "+=20");

    // BLUR END
    scene12Action.to('.blur', 5, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");



    // START ANIMATION  -  ZOOM-IN  -
    scene12Action.add("Parallax_concert", "+=1");
    scene12Action.to('#scene12_layer00', 10, {scale: "1.5"}, "Parallax_concert");
    scene12Action.to('#scene12_layer01', 10, {scale: "2"}, "Parallax_concert");
    scene12Action.to('#scene12_layer02', 10, {scale: "2.5"}, "Parallax_concert");
    scene12Action.to('#scene12_layer03', 10, {scale: "3"}, "Parallax_concert");
    scene12Action.to('#scene12_layer04', 10, {scale: "3.5"}, "Parallax_concert");




    const scene12 = new ScrollMagic.Scene({
        triggerElement: ".scene12",
        duration: 3000,
        triggerHook: 0,
        reverse: true
    });

    scene12.setTween(scene12Action);
    scene12.setPin(".scene12");
    scene12.addTo(controller);












    //  START FadeInScene14 ================================
    $('.scene14').each(function () {
        const scene12In = TweenMax.fromTo($(this), 2, {opacity: 0}, {opacity: 1, ease: Power1.easeIn});

        let scene12Scene = new ScrollMagic.Scene({
            triggerElement: '.scene14',
            duration: 500,
            triggerHook: .6,
            offset: 0
        });
        scene12Scene.setTween(scene12In);
        scene12Scene.addTo(controller);
        //scene5Scene.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange"});
    });
    //  END FadeInScene14 ================================

    // START ANIMATION
    let scene14Action = new TimelineLite();

    scene14Action.to('#scene14_title', 10, {autoAlpha:1},"-=20");
    scene11Action.add("scene14_animation01", "-=20");
    scene14Action.to('#scene14_title', 10, {autoAlpha:0,scale:"6"},"scene14_animation01");
    scene14Action.to('#scene14_project', 20, {autoAlpha:1},"scene14_animation01");
    scene14Action.to('#hsd_logo', 10, {autoAlpha:1});
    scene11Action.add("scene14_animation02", "+=1");
    scene14Action.to('#hsd_logo', 20, {width:"15%",height:"15%",top:"5%",left:"43%"},"scene14_animation02");
    scene14Action.to('#scene14_project', 20, {scale:"6",autoAlpha:0},"scene14_animation02");
    scene14Action.fromTo('#border', 10, {scaleX:0,autoAlpha:0},{scaleX:1, autoAlpha:.7});

    scene11Action.add("scene14_animation03", "+=1");
    scene14Action.fromTo('#scene14_name01', 10, {autoAlpha:0,color:"red",y:"-20"},{autoAlpha:1, color: "white",y:"200",x:"-800",fontsize:"4vh"},"scene14_animation03");
    scene14Action.fromTo('#scene14_name02', 10, {autoAlpha:0,color:"red",y:"-20"},{autoAlpha:1, color: "white",y:"400",x:"-400",fontsize:"4vh"},"scene14_animation03");
    scene14Action.fromTo('#scene14_name03', 10, {autoAlpha:0,color:"red",y:"-20"},{autoAlpha:1, color: "white",y:"200",x:"0",fontsize:"4vh"},"scene14_animation03");
    scene14Action.fromTo('#scene14_name04', 10, {autoAlpha:0,color:"red",y:"-20"},{autoAlpha:1, color: "white",y:"400",x:"300",fontsize:"4vh"},"scene14_animation03");
    scene14Action.fromTo('#scene14_name05', 10, {autoAlpha:0,color:"red",y:"-20"},{autoAlpha:1, color: "white",y:"200",x:"700",fontsize:"4vh"},"scene14_animation03");

    scene14Action.to('#border', 10, {scaleX:0, autoAlpha:0});

    scene11Action.add("scene14_animation04", "+=1");
    scene14Action.to('#scene14_name01', 10, {y:"-100"},"scene14_animation04");
    scene14Action.to('#scene14_name02', 10, {y:"0"},"scene14_animation04");
    scene14Action.to('#scene14_name03', 10, {y:"-100"},"scene14_animation04");
    scene14Action.to('#scene14_name04', 10, {y:"0"},"scene14_animation04");
    scene14Action.to('#scene14_name05', 10, {y:"-100"},"scene14_animation04");
    scene14Action.fromTo('#scene14_name06', 10, {y:"300",autoAlpha:0},{autoAlpha:1});

    scene11Action.add("scene14_animation05", "-=20");
    scene14Action.to('#scene14_name01', 5, {autoAlpha:0},"scene14_animation05");
    scene14Action.to('#scene14_name02', 5, {autoAlpha:0},"scene14_animation05");
    scene14Action.to('#scene14_name03', 5, {autoAlpha:0},"scene14_animation05");
    scene14Action.to('#scene14_name04', 5, {autoAlpha:0},"scene14_animation05");
    scene14Action.to('#scene14_name05', 5, {autoAlpha:0},"scene14_animation05");
    scene14Action.to('#scene14_name06', 5, {autoAlpha:0},"scene14_animation05");
    scene14Action.to('#hsd_logo', 10, {autoAlpha:0,scale:"4",y:"500"},"scene14_animation05");






    const scene14 = new ScrollMagic.Scene({
        triggerElement: ".scene14",
        duration: 2000,
        triggerHook: 0,
        reverse: true
    });

    scene14.setTween(scene14Action);
    scene14.setPin(".scene14");
    scene14.addTo(controller);
});


