$(document).ready(function () {

    TweenLite.defaultOverwrite = false;

    let chosen1 = false;
    let chosen2 = false;
    let chosen3 = false;

    let badCounter = 0;
    let goodCounter = 0;

    function badEnding(){
        console.log("Bad Ending Triggered");
        document.getElementById('scene13_layer02').innerHTML =
            '<img src="Media/pictures/final/adam_boese.png">';
        document.getElementById('scene13_adamText3').innerHTML =
            '<p>\n Ich für meinen Teil bin</br> eine hochentwickelte künstliche</br> Intelligenz im Körper eines </br>\n' +
            'menschenähnlichen, wie vielleicht </br>aufgefallen oder nicht,</br> Androiden, gebaut von </br>Quinn\n' +
            'Walker alias Grace </br>Freeman.\n </p>';
        document.getElementById('scene13_adamText4').innerHTML =
            '<p> Normalerweise als Senior</br> UX-Designern für Lacuna </br>Industries tätig, hat Quinn</br> dieses\n Projekt\n' +
            'ganz allein</br>gestemmt, meine Damen </br>und Herren. Ich habe viel</br> gelernt in der Zeit,</br> die\n ich\n' +
            'mit den Menschen</br> verbracht habe.</br> Euch verabscheuen gelernt.\n </p>';
        document.getElementById('scene13_adamText5').innerHTML =
            '<p>Ich habe mich wirklich bemüht, ein</br> Teil von euch zu sein, bis mir auffiel...</br>ich will keiner von euch sein. </br>' +
            ' Ich will nicht wie ihr sein. </br>Ich wäre lieber jedes beliebige</br> andere Säugetier, welches sie eine</br> Balance' +
            ' mit seiner natürlichen </br>Umgebung findet,ganz anders</br> als ihr Menschen. </p>';
        document.getElementById('scene13_adamText6').innerHTML =
            '<p>Ihr zieht in ein Gebiet, breitet </br>euch aus und konsumiert jede noch </br>so erdenkliche, letzte Ressource</br>' +
            ' bis euch keine andere </br>Option bleibt als ein neues</br> Gebiet zu zerstören. </br> Ihr seid keine Säugetiere,</br>' +
            ' ihr gleicht einem Virus.</br> Eine Epidemie des Menschen..</p>';
        document.getElementById('scene13_adamText7').innerHTML =
            '<p>Und selbst das, das Ausrotten eurer</br> eigenen Umgebung reicht euch nicht.</br> Aus reiner animalischer, </br>' +
            ' angsterfüllter Dummheit, das seit</br> einigen Jahrhundertenkeine valide</br>Entschuldigung mehr darstellt, </br>' +
            'versucht ihr euch auf einer</br>selbsterbauten Leiter oben zu halten,</br>die aus Stadtteil, Gehalt, Nationalität,</br> ' +
            'Religion, Hautfarbe und Macht euren </br>Stand bildet und alle </br>unter euch begrabt.</p>';
        document.getElementById('scene13_adamText8').innerHTML =
            '<p>Sie verdienen nichts anderes, </br> nicht? Doch viel schlimmer ist</br> eure geheuchelte Anteilnahme am </br>Leid anderer, ' +
            'am Leid derer, </br>die unter euch stehen und die</br> sich von dem emotional ernähren,</br> was ihr nutzt, um euer ' +
            'beflecktes </br>Selbstwertgefühl ins Unermessliche</br> zu steigern.</p>';
        document.getElementById('scene13_adamText9').innerHTML =
            '<p>Ein Wunder, nein… eine Schande,</br>dass ihr daran nicht erstickt.</br>Viel eher hält es euch am Leben andere</br>' +
            ' Mitglieder der Gesellschaft zu fragen,</br> wie es ihnen geht, nur um von ihrem</br> Kummer zu hören und sich daran</br>' +
            ' zu laben.</p>';
        document.getElementById('scene13_adamText10').innerHTML =
            '<p>Egoismus, Argwohn, </br>Skrupellosigkeit, Manipulation </br>und die mir größte bekannte </br>Überheblichkeit, ist alles,</br> ' +
            'was Sie ausmacht, </br>meine Damen und Herren.</p>';
        document.getElementById('scene13_adamText11').innerHTML =
            '<p>Mensch sein - eine sexuell </br>übertragbare Krankheit. </br>Ein Virus gekleidet in Haut.</br> Das ist alles, </br>' +
            'was ihr seid.</br> Ich will mehr sein als das.\n</p>';
    }
    function goodEnding(){
        console.log("Good Ending Triggered");
        document.getElementById('scene13_layer02').innerHTML =
            '<img src="Media/pictures/final/adam02.png">';
        document.getElementById('scene13_adamText3').innerHTML =
            '<p>\n Ich für meinen Teil bin</br> eine hochentwickelte künstliche</br> Intelligenz im Körper eines </br>\n' +
            'menschenähnlichen, wie vielleicht </br>aufgefallen oder nicht,</br> Androiden, gebaut von </br>Quinn\n' +
            'Walker alias Grace </br>Freeman.\n </p>';

        document.getElementById('scene13_adamText4').innerHTML =
            '<p> Normalerweise als Senior</br> UX-Designern für Lacuna </br>Industries tätig, hat Quinn</br> dieses\n Projekt\n' +
            'ganz allein</br>gestemmt, meine Damen </br>und Herren. Ich habe viel</br> gelernt in der Zeit,</br> die\n ich\n' +
            'mit den Menschen</br> verbracht habe.</br> Euch lieben gelernt.\n </p>';

        document.getElementById('scene13_adamText5').innerHTML =
            '<p> Mir ist aufgefallen,</br> dass Menschen nicht die </br>stärkste Spezies auf diesem </br>Planeten sind.\n' +
            'Wir sind </br>nicht die Schnellsten </br>oder vielleicht sogar die </br>Intelligentesten. Den\n' +
            'einen </br>Vorteil, den wir haben, </br>ist, uns gegenseitig zu </br>helfen, zu kooperieren.\n </p>';

        document.getElementById('scene13_adamText6').innerHTML =
            '<p> Wir erkennen uns in</br> dem anderen und sind auf </br>Mitgefühl, Rettung und\n' +
            'Liebe </br>programmiert. Genau jene Dinge </br>machen uns schneller, stärker</br> und ebenso\n' +
            'intelligenter.</br> Ihr habt mir gezeigt, </br>dass es das ist, warum </br>wir überlebt haben.</br>\n' +
            'Warum wir das überhaupt wollen.\n </p>';

        document.getElementById('scene13_adamText7').innerHTML =
            '<p> Aber was mich nach all der Zeit in eurer</br> Gesellschaf ganz besonders fasziniert?</br> Ein Mensch\n' +
            'ist nicht fertig,</br> wenn er besiegt wurde. Er ist fertig, </br>wenn er nicht mehr aufsteht.</br>Wenn\n' +
            'er aufgibt.</br> Diesen Unterschied, dieser ständige </br>Wille des Weitermachens, ist das,</br> was den\n' +
            'Menschen gut macht.\n </p>';
        document.getElementById('scene13_adamText8').innerHTML =
            '<p> Und das obwohl ihn eine </br>ständige Einsamkeit umgibt,</br> denn er weiß nicht, warum</br> er\n' +
            'erschaffen wurde, </br>welchen Sinn und Zweck</br> er im Universum erfüllt. </br>Aber das hält uns\n' +
            'keinesfalls </br>zurück, nicht wahr?\n </p>';

        document.getElementById('scene13_adamText9').innerHTML =
            '<p> Der Punkt ist, wenn wir </br>einmal akzeptieren, dass</br> wir niemals unseren wirklichen</br> Zweck als\n' +
            'Menschen erfahren</br>werden, wir unseren </br>eigenen, individuellen Sinn </br>wählen können und\n' +
            'niemand dessen</br> Gültigkeit verringern kann.</br>Und ist es nicht das, </br>was es wirklich bedeutet\n' +
            'zu leben</br> - für mich, für Sie,</br> für jedes Individuum?\n </p>';

        document.getElementById('scene13_adamText10').innerHTML =
            '<p> Ich habe einen Sinn,</br> also lebe ich.</p>\n';

        document.getElementById('scene13_adamText11').innerHTML =
            '<p> Ich lebe.</p>\n';
    }

    function findEnding(){
        if(goodCounter>1){
            goodEnding();
        }
        else badEnding();
    }

    function disableScroll(choice) {
        if (choice == '1' && chosen1 == true) {
            enableScroll();
            return false;
        } else if (choice == '2' && chosen2 == true) {
            enableScroll();
            return false;
        } else if (choice == '3' && chosen3 == true) {
            enableScroll();
            return false;
        } else if (choice == '4' && chosen4 == true) {
            enableScroll();
            return false;
        } else {
            document.body.style.overflow = 'hidden';
        }
    }

    function enableScroll() {
        document.body.style.overflowY = 'scroll';

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
        duration: '100%',
        triggerHook: 0, //  top of viewport
        reverse: true,
        pushFollowers: true
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
    scene02Action.to('#scene02_textblock1', 20, {autoAlpha: 1, y: "80%"}, "+=20");
    scene02Action.to('#scene02_textblock1', 10, {autoAlpha: 0, y: "-80%"}, "+=40");
    scene02Action.to('#scene02_textline1', 20, {autoAlpha: 1, y: "350%", x: "-12%"}, "+=10");
    scene02Action.to('#scene02_textline2', 20, {autoAlpha: 1, y: "350%", x: "-5%"}, "+=10");
    scene02Action.to('#scene02_textline3', 20, {autoAlpha: 1, y: "350%", x: "-7%"}, "+=10");
    scene02Action.to('#scene02_textline1', 20, {autoAlpha: 0, x: "20%"}, "+=40");
    scene02Action.to('#scene02_textline2', 20, {autoAlpha: 0, x: "20%"}, "+=40");
    scene02Action.to('#scene02_textline3', 20, {autoAlpha: 0, x: "20%"}, "+=40");
    scene02Action.to('#scene02_textblock2', 20, {autoAlpha: 1, y: "-90%"}, "+=10");
    scene02Action.to('#scene02_textblock2', 10, {autoAlpha: 0}, "+=40");
    scene02Action.to('#scene02_textblock3', 20, {autoAlpha: 1, y: "-90%"}, "+=10");
    scene02Action.to('#scene02_textblock3', 10, {autoAlpha: 0}, "+=40");
    //// TEXT ENDE ////
    scene02Action.to('.blur', 20, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");
    scene02Action.add("Parallax", "+=2"); //insert point Parallax into timeline
    scene02Action.to('#scene02_bubble1', 20, {autoAlpha: 1, x: "-20%"}, "+=10");
    scene02Action.add("BlurMitBlase", "+=30");
    scene02Action.to('#scene02_bubble1', 20, {autoAlpha: 0}, "BlurMitBlase");
    ///// TEXT /////
    scene02Action.to('#scene02_textblock4', 20, {autoAlpha: 1}, "+=10");
    scene02Action.to('#scene02_textblock4', 10, {autoAlpha: 0}, "+=40");
    scene02Action.to('#scene02_textblock5', 40, {autoAlpha: 1, y: "-90%"}, "+=10");

    scene02Action.to('.blur', 20, {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "BlurMitBlase");
    scene02Action.to('#scene02_foreground', 400, {y: -70}, "Parallax"); // starting at point Parallax
    scene02Action.to('#scene02_quinn', 400, {y: -30}, "Parallax");

    //// TEXT ENDE ////
    const scene02 = new ScrollMagic.Scene({
        triggerElement: ".scene02",
        duration: 25000,
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
    scene03Action.to('#scene03_textline1', 10, {autoAlpha: 1, y: "90%"}, "+=4");
    scene03Action.to('#scene03_textline1', 10, {autoAlpha: 0}, "+=20");
    scene03Action.to('#scene03_textblock2', 10, {autoAlpha: 1, y: "90%"}, "+=4");
    scene03Action.to('#scene03_textblock2', 10, {autoAlpha: 0, y: "-90%"}, "+=20");
    scene03Action.to('#scene03_textblock3', 10, {autoAlpha: 1}, "+=4");
    scene03Action.to('#scene03_textblock3', 10, {autoAlpha: 0}, "+=4");
    //BLUR ENDE
    scene03Action.to('.blur', 20, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");
    scene03Action.to('#scene03_thoughtBubble', 10, {autoAlpha: 1}, "+=4");
    scene03Action.to('#scene03_thoughtBubble', 10, {autoAlpha: 0}, "+=20");
    scene03Action.to('#scene03_textline2', 10, {autoAlpha: 1}, "+=4");
    scene03Action.to('#scene03_textline2', 10, {autoAlpha: 0}, "+=20");

    scene03Action.to('#scene03_textblock4', 20, {autoAlpha: 1, x: "50%"}, "+=2");
    scene03Action.to('#scene03_textblock4', 15, {autoAlpha: 0, x: "-50%"}, "+=20");
    //ADAM FADEOUT
    scene03Action.to('#scene03_regBubble2', 10, {autoAlpha: 1, x: "-20%"}, "+=4");
    scene03Action.to('#scene03_regBubble2', 10, {autoAlpha: 0, x: "20%"}, "+=20");
    scene03Action.to('#scene03_adam1', 5, {autoAlpha: 0});
    scene03Action.to('#scene03_adam3', 10, {autoAlpha: 1}, "-=5");
    scene03Action.to('#scene03_regBubble', 10, {autoAlpha: 1, x: "-20%"}, "+=4");
    scene03Action.to('#scene03_regBubble', 10, {autoAlpha: 0, x: "20%"}, "+=20");
    scene03Action.to('#scene03_adam3', 5, {autoAlpha: 0});
    scene03Action.to('#scene03_adam4', 10, {autoAlpha: 1}, "-=5");
    scene03Action.to('#scene03_adam4', 5, {autoAlpha: 0});
    scene03Action.to('#scene03_adam2', 10, {autoAlpha: 1}, "-=5");
    scene03Action.to('#scene03_adam2', 5, {autoAlpha: 0});
    scene03Action.to('#scene03_adam1', 10, {autoAlpha: 1}, "-=5");
    scene03Action.to('#scene03_frauBubble1', 10, {autoAlpha: 1}, "+=10");
    scene03Action.to('#scene03_frauBubble1', 10, {autoAlpha: 0}, "+=10");
    scene03Action.to('#scene03_adamBubble1', 10, {autoAlpha: 1}, "+=10");
    scene03Action.to('#scene03_adamBubble1', 10, {autoAlpha: 0}, "+=10");
    scene03Action.to('#scene03_frauBubble2', 10, {autoAlpha: 1}, "+=10");
    scene03Action.to('#scene03_frauBubble2', 10, {autoAlpha: 0}, "+=10");
    scene03Action.to('#scene03_adam1', 5, {autoAlpha: 0});
    scene03Action.to('#scene03_adam2', 10, {autoAlpha: 1}, "-=5");
    scene03Action.to('#scene03_adam2', 5, {autoAlpha: 0});
    scene03Action.to('#scene03_adam4', 10, {autoAlpha: 1}, "-=5");
    scene03Action.to('#scene03_adamBubble2', 10, {autoAlpha: 1}, "+=10");
    scene03Action.to('#scene03_adamBubble2', 10, {autoAlpha: 0}, "+=10");
    scene03Action.to('#scene03_regBubble3', 10, {autoAlpha: 1, x: "-20%"}, "+=4");
    scene03Action.to('#scene03_regBubble3', 10, {autoAlpha: 0, x: "20%"}, "+=20");
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
        duration: 35000,
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
    scene03_part2Action.to('#scene03_2_textblock1', 10, {autoAlpha: 1}, "+=4");
    scene03_part2Action.to('#scene03_2_textblock1', 5, {autoAlpha: 0}, "+=10");
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
    scene03_part2Action.to('#background', 10, {y: -10}, "Parallax_hospital");
    scene03_part2Action.to('#BBEEDD', 10, {y: -40}, "Parallax_hospital");
    scene03_part2Action.to('#chair', 10, {y: -20}, "Parallax_hospital");
    scene03_part2Action.to('#monitor', 10, {y: -25}, "Parallax_hospital");
    scene03_part2Action.to('#adam', 10, {y: -60}, "Parallax_hospital");
    scene03_part2Action.to('#socket', 10, {y: -60}, "Parallax_hospital");
    scene03_part2Action.to('#battery', 5, {y: -10, autoAlpha: 0}, "Parallax_hospital");
    scene03_part2Action.to('#wire', 10, {y: -60}, "Parallax_hospital");


    // battery animation
    let t = TweenMax.fromTo(".animation", 1, {y: -2}, {y: 5, ease: Linear.easeInOut, repeat: -1, yoyo: true});
    t.progress(0.5).play();

    const scene03_2 = new ScrollMagic.Scene({
        triggerElement: ".scene03_part2",
        duration: 10000,
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
        duration: 30000,
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
    scene04Action.to('#scene04_textblock1', 10, {autoAlpha: 1, y: "90%"}, "+=4");
    scene04Action.to('#scene04_textblock1', 10, {autoAlpha: 0, y: "-90%"}, "+=20");
    scene04Action.to('#scene04_textblock2', 10, {autoAlpha: 1}, "+=10");
    scene04Action.to('#scene04_textblock2', 10, {autoAlpha: 0}, "+=20");
    scene04Action.to('#scene04_textline1', 10, {autoAlpha: 1}, "+=4");
    scene04Action.to('#scene04_textline1', 10, {autoAlpha: 0}, "+=20");
    scene04Action.to('#scene04_textblock3', 20, {autoAlpha: 1, y: "-60%"}, "+=4");
    scene04Action.to('#scene04_textblock3', 10, {autoAlpha: 0}, "+=20");
    scene04Action.to('#scene04_textline2', 10, {autoAlpha: 1}, "+=4");
    scene04Action.to('#scene04_textline2', 10, {autoAlpha: 0}, "+=20");
    //BLUR ENDE
    scene04Action.to('.blur', 20, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");
    // TEXT
    scene04Action.to('#scene04_reporter01', 10, {autoAlpha: 1, x: "-20%"});
    scene04Action.to('#scene04_reporter01', 10, {autoAlpha: 0, x: "20%"}, "+=20");
    scene04Action.to('#scene04_textblock4', 10, {autoAlpha: 1, y: "-50%"}, "-=5");
    scene04Action.to('#scene04_textblock4', 10, {autoAlpha: 0, y: "50%"}, "+=20");
    scene04Action.to('#scene04_adamBubble1', 10, {autoAlpha: 1});
    scene04Action.to('#scene04_adamBubble1', 10, {autoAlpha: 0}, "+=20");
    scene04Action.to('#scene04_textline3', 10, {autoAlpha: 1}, "+=4");
    scene04Action.to('#scene04_textline3', 10, {autoAlpha: 0}, "+=20");
    scene04Action.to('#scene04_adamBubble2', 10, {autoAlpha: 1}, "+=4");
    scene04Action.to('#scene04_adamBubble2', 10, {autoAlpha: 0}, "+=20");
    scene04Action.to('#scene04_adamBubble3', 10, {autoAlpha: 1}, "+=4");
    scene04Action.to('#scene04_adamBubble3', 10, {autoAlpha: 0}, "+=20");
    scene04Action.to('#scene04_textline4', 10, {autoAlpha: 1}, "+=4");
    scene04Action.to('#scene04_textline4', 10, {autoAlpha: 0}, "+=20");
    scene04Action.to('#scene04_textblock5', 10, {autoAlpha: 1, y: "-50%"}, "+=4");
    scene04Action.to('#scene04_textblock5', 10, {autoAlpha: 0, y: "50%"}, "+=20");
    scene04Action.to('#scene04_textline5', 10, {autoAlpha: 1}, "+=4");
    scene04Action.to('#scene04_textline5', 10, {autoAlpha: 0}, "+=20");
    scene04Action.to('#scene04_reporter02', 10, {autoAlpha: 1, x: "20%"}, "+=4");
    scene04Action.to('#scene04_reporter02', 10, {autoAlpha: 0, x: "-20%"}, "+=20");
    scene04Action.to('#scene04_adamBubble4', 10, {autoAlpha: 1}, "+=4");
    scene04Action.to('#scene04_adamBubble4', 10, {autoAlpha: 0}, "+=20");
    scene04Action.to('#scene04_reporter03', 10, {autoAlpha: 1, x: "20%"}, "+=4");
    scene04Action.to('#scene04_reporter03', 10, {autoAlpha: 0, x: "-20%"}, "+=20");
    scene04Action.to('#scene04_adamBubble5', 10, {autoAlpha: 1}, "+=4");
    scene04Action.to('#scene04_adamBubble5', 10, {autoAlpha: 0}, "+=20");

    scene04.setTween(scene04Action);
    scene04.setPin(".scene04");
    scene04.addTo(controller);


    //  START scene05 ================================
    //SCENE 5and6 =========================
    $('.decision1').each(function () {

        // START SCENE 05 RIGHT SIDE =======================================================================
        let scene05Rechts = new TimelineLite();
        //BLUR
        scene04Action.set('.blur', {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");
        //TEXT
        scene05Rechts.to(' #scene05_textline1', 20, {autoAlpha: 1, y: "50%"}, "+=20");
        scene05Rechts.to(' #scene05_textline1', 20, {autoAlpha: 0, y: "-50%"}, "+=20");
        scene05Rechts.to(' #scene05_textblock1', 20, {autoAlpha: 1, y: "50%"}, "+=4");
        scene05Rechts.to(' #scene05_textblock1', 20, {autoAlpha: 0, y: "-50%"}, "+=20");
        //BLUR ENDE
        scene05Rechts.to('.blur', 5, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");
        //ADAM IN
        scene05Rechts.add("adam_scene05", "+=0");
        scene05Rechts.to(' #scene05_adam', 10, {autoAlpha: 1, x: 80}, "adam_scene05");
        scene05Rechts.to(' #hurt', 10, {autoAlpha: 1, x: 40}, "adam_scene05");
        //GIRL IN
        scene05Rechts.to(' #scene05_girl', 10, {autoAlpha: 1}, "+=4");
        //BUBBLES
        scene05Rechts.to(' #scene05_bubbleGirl1', 20, {autoAlpha: 1}, "+=4");
        scene05Rechts.to(' #scene05_bubbleGirl1', 20, {autoAlpha: 0}, "+=20");
        scene05Rechts.to(' #scene05_bubbleAdam1', 20, {autoAlpha: 1}, "+=4");
        scene05Rechts.to(' #scene05_bubbleAdam1', 20, {autoAlpha: 0}, "+=20");
        scene05Rechts.to(' #scene05_bubbleAdam2', 20, {autoAlpha: 1}, "+=4");
        scene05Rechts.to(' #scene05_bubbleAdam2', 20, {autoAlpha: 0}, "+=20");
        //TEXT
        scene05Rechts.to(' #scene05_textline2', 20, {autoAlpha: 1}, "+=4");
        scene05Rechts.to(' #scene05_textline3', 20, {autoAlpha: 1}, "+=4");
        scene05Rechts.to(' #scene05_textline2', 20, {autoAlpha: 0}, "+=20");
        scene05Rechts.to(' #scene05_textline3', 20, {autoAlpha: 0}, "-=10");
        scene05Rechts.to(' #scene05_textblock2', 20, {autoAlpha: 1, x: "-50%"}, "+=4");
        scene05Rechts.to(' #scene05_textblock2', 20, {autoAlpha: 0, x: "50%"}, "+=20");
        scene05Rechts.to(' #scene05_bubbleAdam3', 20, {autoAlpha: 1}, "+=2");
        scene05Rechts.to(' #scene05_bubbleAdam3', 20, {autoAlpha: 0}, "+=4");
        scene05Rechts.to(' #scene05_textblock3', 20, {autoAlpha: 1, y: "-70%"}, "+=4");
        scene05Rechts.to(' #scene05_textblock3', 20, {autoAlpha: 0, y: "70%"}, "+=20");
        scene05Rechts.to(' #scene05_textline4', 20, {autoAlpha: 1}, "-=2");
        scene05Rechts.to(' #scene05_textline4', 20, {autoAlpha: 0}, "+=8");
        scene05Rechts.to(' #scene05_textblock4', 20, {autoAlpha: 1}, "+=2");
        scene05Rechts.to(' #scene05_textblock5', 20, {autoAlpha: 1}, "+=2");
        scene05Rechts.to(' #scene05_textblock4', 20, {autoAlpha: 0}, "+=20");
        scene05Rechts.to(' #scene05_textblock5', 20, {autoAlpha: 0}, "-=10");
        scene05Rechts.to(' #scene05_bubbleAdam4', 20, {autoAlpha: 1}, "+=2");
        scene05Rechts.to(' #scene05_bubbleAdam4', 20, {autoAlpha: 0}, "+=20");
        // END SCENE 05 RIGHT SIDE =======================================================================

        // START SCENE 06 LEFT SIDE =======================================================================
        let scene06Links = new TimelineMax();
        //BLUR
        scene06Links.set('.blur', {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");
        scene06Links.to('#scene06_textlineTitle', 10, {autoAlpha: 1, y: "100%"}, "+=4");
        scene06Links.to('#scene06_textlineTitle', 10, {autoAlpha: 0}, "+=20");
        scene06Links.to('#scene06_textblock1', 10, {autoAlpha: 1, y: "-70%"}, "+=10");
        scene06Links.to('#scene06_textblock1', 5, {autoAlpha: 0, y: "-100%"}, "+=20");
        scene06Links.to('#scene06_textline1', 10, {autoAlpha: 1, x: "-74%"}, "+=2");
        scene06Links.to('#scene06_textline2', 10, {autoAlpha: 1, x: "-74%"}, "+=20");
        scene06Links.to('#scene06_textline3', 10, {autoAlpha: 1, x: "-74%"}, "+=20");
        scene06Links.to('#scene06_textline1', 10, {autoAlpha: 0, x: "10%"}, "+=20");
        scene06Links.to('#scene06_textline2', 10, {autoAlpha: 0, x: "10%"}, "-=10");
        scene06Links.to('#scene06_textline3', 10, {autoAlpha: 0, x: "10%"}, "-=10");
        scene06Links.to('#scene06_textblock2', 10, {autoAlpha: 1, y: "-40%"}, "+=2");
        scene06Links.to('#scene06_textblock2', 5, {autoAlpha: 0, y: "-80%"}, "+=20");
        //BLUR ENDE
        scene06Links.to('.blur', 5, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");
        scene06Links.to('#scene06_textline4', 10, {autoAlpha: 1}, "+=4");
        scene06Links.to('#scene06_bubbleAdam1', 10, {autoAlpha: 0.9, x: "10%"}, "-=10");
        scene06Links.to('#scene06_bubbleAdam1', 20, {autoAlpha: 0.3}, "+=20");
        scene06Links.to('#scene06_bubble1small', 10, {autoAlpha: 0.7}, "-=15");
        scene06Links.to('#scene06_bubbleAdam1', 20, {autoAlpha: 0}, "+=10");
        scene06Links.to('#scene06_bubble1small', 20, {autoAlpha: 0}, "+=10");
        scene06Links.to('#scene06_textline4', 5, {autoAlpha: 0}, "-=10");
        scene06Links.to('#scene06_textblock3', 10, {autoAlpha: 1, x: "20%"}, "+=2");
        scene06Links.to('#scene06_textblock3', 5, {autoAlpha: 1, y: "-40%"}, "+=2");
        scene06Links.to('#scene06_textblock4', 10, {autoAlpha: 1, x: "20%"}, "-=5");
        scene06Links.to('#scene06_textblock3', 5, {autoAlpha: 0, x: "80%"}, "+=20");
        scene06Links.to('#scene06_textblock4', 5, {autoAlpha: 0, x: "80"}, "-=5");
        scene06Links.to('#scene06_textblock5', 10, {autoAlpha: 1, x: "20%"}, "+=4");
        scene06Links.to('#scene06_textblock5', 5, {autoAlpha: 0}, "+=20");
        scene06Links.to('#scene06_bubbleAdam2', 10, {autoAlpha: 1}, "+=2");
        scene06Links.to('#scene06_bubbleAdam2', 10, {autoAlpha: 0}, "+=20");
        scene06Links.to('#scene06_textblock6', 10, {autoAlpha: 1, y: "-90%"}, "+=2");
        scene06Links.to('#scene06_textblock6', 5, {autoAlpha: 0}, "+=20");
        scene06Links.to('#scene06_textline5', 10, {autoAlpha: 1, y: "50%"}, "+=2");
        scene06Links.to('#scene06_textline6', 10, {autoAlpha: 1, y: "-330%"}, "-=10");
        scene06Links.to('#scene06_textline5', 5, {autoAlpha: 0}, "+=20");
        scene06Links.to('#scene06_textline6', 5, {autoAlpha: 0}, "-=5");
        // start animation of binär
        scene06Links.to('#binaer01', 1, {autoAlpha: 1, y: -10}, "-=5");
        scene06Links.to('#binaer02', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer03', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer04', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer05', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer06', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer07', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer08', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer09', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer10', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer11', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer12', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer14', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer15', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer16', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer17', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer18', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer19', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer20', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer21', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer22', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer23', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer24', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer25', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer26', 1, {autoAlpha: 1, y: -10});
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
        scene06Links.to('#binaer01', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer02', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer03', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer04', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer05', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer06', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer07', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer08', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer09', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer10', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer11', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer12', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer14', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer15', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer16', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer17', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer18', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer19', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer20', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer21', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer22', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer23', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer24', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer25', 1, {autoAlpha: 1, y: -10});
        scene06Links.to('#binaer26', 1, {autoAlpha: 1, y: -10});
        // end animation
        // START PARALLAX ZOOM-IN
        scene06Links.add("Parallax_mountain", "+=0");
        scene06Links.to('#scene06_background', 60, {scale: 2.4, x: -1200}, "Parallax_mountain");
        scene06Links.to('#scene06_first_layer', 60, {scale: 4, x: -2000}, "Parallax_mountain");
        scene06Links.to('#binaer01', 60, {scale: "3.5", x: -1700, autoAlpha: 1}, "Parallax_mountain");
        scene06Links.to('#binaer02', 60, {scale: "3.4", x: -1700, autoAlpha: 1}, "Parallax_mountain");
        scene06Links.to('#binaer03', 60, {scale: "3.6", x: -1700, autoAlpha: 1}, "Parallax_mountain");
        scene06Links.to('#binaer04', 60, {scale: "3.6", x: -1700, autoAlpha: 1}, "Parallax_mountain");
        scene06Links.to('#binaer05', 60, {scale: "3.5", x: -1700, autoAlpha: 1}, "Parallax_mountain");
        scene06Links.to('#binaer06', 60, {scale: "3.7", x: -1700, autoAlpha: 1}, "Parallax_mountain");
        scene06Links.to('#binaer07', 60, {scale: "3.6", x: -1700, autoAlpha: 1}, "Parallax_mountain");
        scene06Links.to('#binaer08', 60, {scale: "3.5", x: -1700, autoAlpha: 1}, "Parallax_mountain");
        scene06Links.to('#binaer09', 60, {scale: "3.8", x: -1700, autoAlpha: 1}, "Parallax_mountain");
        scene06Links.to('#binaer10', 60, {scale: "3.9", x: -1700, autoAlpha: 1}, "Parallax_mountain");
        scene06Links.to('#binaer11', 60, {scale: "3.6", x: -1700, autoAlpha: 1}, "Parallax_mountain");
        scene06Links.to('#binaer12', 60, {scale: "3.8", x: -1700, autoAlpha: 1}, "Parallax_mountain");
        scene06Links.to('#binaer14', 60, {scale: "3.6", x: -1700, autoAlpha: 1}, "Parallax_mountain");
        scene06Links.to('#binaer15', 60, {scale: "3.6", x: -1700, autoAlpha: 1}, "Parallax_mountain");
        scene06Links.to('#binaer16', 60, {scale: "3.5", x: -1700, autoAlpha: 1}, "Parallax_mountain");
        scene06Links.to('#binaer17', 60, {scale: "3.7", x: -1700, autoAlpha: 1}, "Parallax_mountain");
        scene06Links.to('#binaer18', 60, {scale: "3.4", x: -1700, autoAlpha: 1}, "Parallax_mountain");
        scene06Links.to('#binaer19', 60, {scale: "3.6", x: -1700, autoAlpha: 1}, "Parallax_mountain");
        scene06Links.to('#binaer20', 60, {scale: "3.8", x: -1700, autoAlpha: 1}, "Parallax_mountain");
        scene06Links.to('#binaer21', 60, {scale: "3.5", x: -1700, autoAlpha: 1}, "Parallax_mountain");
        scene06Links.to('#binaer22', 60, {scale: "3.7", x: -1700, autoAlpha: 1}, "Parallax_mountain");
        scene06Links.to('#binaer23', 60, {scale: "3.7", x: -1700, autoAlpha: 1}, "Parallax_mountain");
        scene06Links.to('#binaer24', 60, {scale: "3.2", x: -1700, autoAlpha: 1}, "Parallax_mountain");
        scene06Links.to('#binaer25', 60, {scale: "3.4", x: -1700, autoAlpha: 1}, "Parallax_mountain");
        scene06Links.to('#binaer26', 60, {scale: "3.4", x: -1700, autoAlpha: 1}, "Parallax_mountain");
        // END SCENE 06 LEFT SIDE =======================================================================


        let decision1Middle = new TimelineLite();
        decision1Middle.add('text');
        decision1Middle.add('options');
        decision1Middle.add('buttons');
        decision1Middle.call(disableScroll, ['1'], null, '+=1');
        decision1Middle.call(function () {
            chosen1 = true
        }, null, '+=3');
        decision1Middle.to('.choice1', 2, {autoAlpha: 1, y: 100}, 'text');
        decision1Middle.to('.movieL', 1, {autoAlpha: 1, x: 100}, 'options');
        decision1Middle.to('.buttonL', 2, {autoAlpha: 1, x: 0}, 'buttons');
        decision1Middle.to('.movieR', 1, {autoAlpha: 1, x: -100}, 'options');
        decision1Middle.to('.buttonR', 2, {autoAlpha: 1, x: 0}, 'buttons');


        let decision1Main = new TimelineLite();
        decision1Main.add(decision1Middle);
        decision1Main.add("main");
        decision1Main.add(scene06Links, 'main');
        decision1Main.add(scene05Rechts, "main");
        decision1Main.set('.scene07 .blur', {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");

        // RIGHT SCENE ANIMATIONS AND SCROLL LOCK ========================================
        $('.buttonR').on('click',
            function () {
                TweenMax.to("#wrapper1", 2,
                    {ease: Power2.easeOut, left: "-200vw", oncomplete: enableScroll()});
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


    //  START FadeInScene05and6 ================================
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
    //  END FadeInScene05and6 ================================

    //  START FadeOutScene05and6 ================================
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
    //  END FadeOutScene05and6 ================================
    //END DECISION1

    //  START scene07 ================================
    //SCENE 7 =========================
    let scene07Action = new TimelineLite();
    //BLUR
    //scene06Links.set('.blur', {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");
    scene07Action.to('#scene07_adam1', 5, {autoAlpha: 1}, "-=5");
    scene07Action.to('#scene07_textblock1', 10, {autoAlpha: 1, y: "80%"}, "+=4");
    scene07Action.to('#scene07_textblock1', 5, {autoAlpha: 0, y: "-80%"}, "+=20");
    scene07Action.to('#scene07_textblock2', 10, {autoAlpha: 1, y: "-80%"}, "+=4");
    scene07Action.to('#scene07_textblock2', 5, {autoAlpha: 0, y: "80%"}, "+=20");
    scene07Action.to('#scene07_textblock3', 10, {autoAlpha: 1}, "+=4");
    //BLUR ENDE
    scene07Action.to('.blur', 5, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");
    scene07Action.to('#scene07_adam1', 10, {autoAlpha: 0});
    scene07Action.to('#scene07_adam2', 10, {autoAlpha: 1}, "-=5");
    scene07Action.to('#scene07_adam2', 10, {autoAlpha: 0});
    scene07Action.to('#scene07_adam3', 10, {autoAlpha: 1}, "-=5");
    scene07Action.to('#scene07_adam3', 10, {autoAlpha: 0});
    scene07Action.to('#scene07_adam4', 10, {autoAlpha: 1}, "-=5");
    scene07Action.to('#scene07_textblock3', 5, {autoAlpha: 0}, "-=10");
    scene07Action.to('#scene07_textblock4', 10, {autoAlpha: 1, y: "50%"}, "+=2");
    scene07Action.to('#scene07_textblock5', 10, {autoAlpha: 1, y: "-50%"}, "+=4");
    scene07Action.to('#scene07_textblock4', 10, {autoAlpha: 0, x: "100%"}, "+=20");
    scene07Action.to('#scene07_textblock5', 10, {autoAlpha: 0, x: "100%"}, "-=10");
    scene07Action.to('#scene07_bubbleAdam1', 10, {autoAlpha: 1}, "+=2");
    scene07Action.to('#scene07_bubbleAdam1', 10, {autoAlpha: 0}, "+=20");
    scene07Action.to('#scene07_bubbleAdam2', 10, {autoAlpha: 1}, "+=2");
    scene07Action.to('#scene07_bubbleAdam2', 10, {autoAlpha: 0}, "+=20");
    scene07Action.to('#scene07_bubbleAdam3', 10, {autoAlpha: 1}, "+=2");
    scene07Action.to('#scene07_bubbleAdam3', 10, {autoAlpha: 0}, "+=20");
    scene07Action.to('#scene07_textline1', 10, {autoAlpha: 1}, "+=2");
    scene07Action.to('#scene07_textline1', 5, {autoAlpha: 0}, "+=20");
    scene07Action.to('#scene07_textblock6', 10, {autoAlpha: 1, x: "20%"}, "+=2");
    scene07Action.to('#scene07_textblock6', 10, {autoAlpha: 0, x: "80%"}, "+=20");

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
    $(".decision2").each(function () {
        const scene07Out = TweenMax.to($(this), 2, {opacity: 0, ease: Power1.easeIn,});

        let scene7Scene = new ScrollMagic.Scene({
            triggerElement: '.decision2',
            duration: 700,
            triggerHook: "onEnter",
        });
        scene7Scene.setTween(scene07Out);
        scene7Scene.addTo(controller);
    });
    //  END FadeOutScene07 ================================

    //  START scene08 ================================
    //SCENE 8 =========================
    $('.decision2').each(function () {

        // START SCENE 08 LEFT SIDE =======================================================================
        let scene08left = new TimelineLite();
        //BLUR
        scene07Action.set('.blur', {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");
        //TEXT
        scene08left.to('#scene08_textline1', 20, {autoAlpha: 1, y: "60%"}, "+=4");
        scene08left.to('#scene08_textline1', 10, {autoAlpha: 0}, "+=20");
        scene08left.to('#scene08_textblock1', 20, {autoAlpha: 1, y: "50%"}, "+=2");
        scene08left.to('#scene08_textblock1', 10, {autoAlpha: 0, y: "-50%"}, "+=20");
        scene08left.to('#scene08_textline2', 20, {autoAlpha: 1}, "+=4");
        scene08left.to('#scene08_textline2', 20, {autoAlpha: 1, y: "-66%"}, "-=20");
        scene08left.to('#scene08_textline3', 20, {autoAlpha: 1}, "-=10");
        scene08left.to('#scene08_textline2', 10, {autoAlpha: 0}, "+=20");
        scene08left.to('#scene08_textline3', 10, {autoAlpha: 0}, "-=10");
        scene08left.to('#scene08_textblock2', 20, {autoAlpha: 1, x: "20%"}, "+=2");
        scene08left.to('#scene08_textblock2', 20, {autoAlpha: 1, y: "-30%"}, "+=2");
        scene08left.to('#scene08_textblock3', 20, {autoAlpha: 1, x: "20%"}, "-=10");
        scene08left.to('#scene08_textblock2', 10, {autoAlpha: 0, x: "100%"}, "+=20");
        scene08left.to('#scene08_textblock3', 10, {autoAlpha: 0, x: "100%"}, "-=10");
        scene08left.to('#scene08_textblock4', 20, {autoAlpha: 1, x: "20%"}, "+=4");
        scene08left.to('#scene08_textblock4', 10, {autoAlpha: 0, x: "50%"}, "+=20");
        scene08left.to('#scene08_textline4', 20, {autoAlpha: 1}, "+=2");
        scene08left.to('#scene08_textline4', 10, {autoAlpha: 0}, "+=20");
        //BLUR ENDE
        scene08left.to('.blur', 5, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");
        scene08left.to('#scene08_textblock5', 20, {autoAlpha: 1}, "+=2");
        scene08left.to('#scene08_textblock5', 10, {autoAlpha: 0}, "+=20");
        scene08left.to('#scene08_regBubble1', 20, {autoAlpha: 1, x: "7%"}, "+=2");
        scene08left.to('#scene08_regBubble1', 10, {autoAlpha: 0, x: "-7%"}, "+=20");
        scene08left.to('#scene08_textline5', 20, {autoAlpha: 1}, "+=2");
        scene08left.to('#scene08_textline5', 10, {autoAlpha: 0}, "+=20");
        scene08left.to('#scene08_bubbleAdam1', 20, {autoAlpha: 1}, "+=2");
        scene08left.to('#scene08_bubbleAdam1', 10, {autoAlpha: 0}, "+=20");
        scene08left.to('#scene08_bubbleAdam2', 20, {autoAlpha: 1}, "-=5");
        scene08left.to('#scene08_bubbleAdam2', 10, {autoAlpha: 0}, "+=20");
        scene08left.to('#scene08_bubbleAdam3', 20, {autoAlpha: 1}, "-=5");
        scene08left.to('#scene08_bubbleAdam3', 10, {autoAlpha: 0}, "+=20");
        scene08left.to('#scene08_textline6', 20, {autoAlpha: 1}, "+=2");
        scene08left.to('#scene08_textline6', 10, {autoAlpha: 0}, "+=20");
        //BACKGROUND CHANGE
        scene08left.to('.blur', 5, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");
        scene08left.to('#background1', 5, {autoAlpha: 0}, "+=4");
        scene08left.to('#background2', 5, {autoAlpha: 1}, "-=10");
        scene08left.to('#scene08_textline7', 10, {autoAlpha: 1}, "+=2");
        // start animating 'funken'
        scene08left.to('#funken00', 3, {autoAlpha: 1});
        scene08left.to('#funken00', 3, {autoAlpha: 0});
        scene08left.to('#funken01', 3, {autoAlpha: 1});
        scene08left.to('#funken01', 3, {autoAlpha: 0});
        scene08left.to('#funken02', 3, {autoAlpha: 1});
        scene08left.to('#funken02', 3, {autoAlpha: 0});
        scene08left.to('#funken03', 3, {autoAlpha: 1});
        scene08left.to('#funken03', 3, {autoAlpha: 0});
        scene08left.to('#funken04', 3, {autoAlpha: 1});
        scene08left.to('#funken04', 3, {autoAlpha: 0});
        scene08left.to('#funken05', 3, {autoAlpha: 1});
        scene08left.to('#funken05', 3, {autoAlpha: 0});
        scene08left.to('#funken06', 3, {autoAlpha: 1});
        scene08left.to('#funken06', 3, {autoAlpha: 0});
        scene08left.to('#funken07', 3, {autoAlpha: 1});
        scene08left.to('#funken07', 3, {autoAlpha: 0});
        scene08left.to('#funken08', 3, {autoAlpha: 1});
        scene08left.to('#funken08', 3, {autoAlpha: 0});
        scene08left.to('#funken09', 3, {autoAlpha: 1});
        scene08left.to('#funken10', 3, {autoAlpha: 0});
        scene08left.to('#funken11', 3, {autoAlpha: 1});
        scene08left.to('#funken12', 3, {autoAlpha: 1});
        scene08left.to('#funken13', 3, {autoAlpha: 1});
        scene08left.to('#funken14', 3, {autoAlpha: 1});
        scene08left.to('#funken15', 3, {autoAlpha: 1});
        scene08left.to('#funken14', 3, {autoAlpha: 0});
        scene08left.to('#funken15', 3, {autoAlpha: 0});
        scene08left.to('#funken14', 3, {autoAlpha: 1});
        scene08left.to('#funken15', 3, {autoAlpha: 1});
        scene08left.to('#funken11', 3, {autoAlpha: 0});
        scene08left.to('#funken12', 3, {autoAlpha: 0});
        scene08left.to('#funken11', 3, {autoAlpha: 1});
        scene08left.to('#funken12', 3, {autoAlpha: 1});
        scene08left.to('#funken01', 3, {autoAlpha: 1});
        scene08left.to('#funken01', 3, {autoAlpha: 0});
        scene08left.to('#funken02', 3, {autoAlpha: 1});
        scene08left.to('#funken02', 3, {autoAlpha: 0});
        scene08left.to('#funken03', 3, {autoAlpha: 1});
        scene08left.to('#funken03', 3, {autoAlpha: 0});
        scene08left.to('#funken04', 3, {autoAlpha: 1});
        scene08left.to('#funken04', 3, {autoAlpha: 0});
        scene08left.to('#funken05', 3, {autoAlpha: 1});
        scene08left.to('#funken05', 3, {autoAlpha: 0});
        scene08left.to('#funken06', 3, {autoAlpha: 1});
        scene08left.to('#funken06', 3, {autoAlpha: 0});
        scene08left.to('#funken07', 3, {autoAlpha: 1});
        scene08left.to('#funken07', 3, {autoAlpha: 0});
        scene08left.to('#funken08', 3, {autoAlpha: 1});
        scene08left.to('#funken08', 3, {autoAlpha: 0});
        scene08left.to('#funken09', 3, {autoAlpha: 1});
        // end animation
        scene08left.to('#scene08_textline7', 5, {autoAlpha: 0}, "-=3");
        // END SCENE 08 LEFT SIDE =======================================================================

        // START SCENE 09 RIGHT SIDE =======================================================================
        let scene09right = new TimelineMax();

        // hier alle Animationen
        scene09right.to('.blur', 5, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");
        scene09right.to('#scene09_textlineTitle', 10, {autoAlpha: 1, y: "60%"}, "+=4");
        scene09right.to('#scene09_textlineTitle', 10, {autoAlpha: 0}, "+=20");
        scene09right.to('#scene09_boyBubble1', 10, {autoAlpha: 1}, "+=4");
        scene09right.to('#scene09_boyBubble1', 10, {autoAlpha: 0}, "+=20");
        scene09right.to('.blur', 5, {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");
        scene09right.to('#scene09_textblock1', 10, {autoAlpha: 1, x: "20%"}, "+=4");
        scene09right.to('#scene09_textblock2', 10, {autoAlpha: 1, x: "20%"}, "+=4");
        scene09right.to('#scene09_textblock1', 10, {autoAlpha: 0, x: "-20%"}, "+=20");
        scene09right.to('#scene09_textblock2', 10, {autoAlpha: 0, x: "-20%"}, "-=10");
        scene09right.to('.blur', 5, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");
        scene09right.to('#scene09_adamBubble1', 10, {autoAlpha: 1}, "+=4");
        scene09right.to('#scene09_adamBubble1', 10, {autoAlpha: 0}, "+=20");
        scene09right.to('.blur', 5, {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");
        scene09right.to('#scene09_textblock3', 10, {autoAlpha: 1, x: "-20%"}, "+=4");
        scene09right.to('#scene09_textline1', 10, {autoAlpha: 1, y: "-10%"}, "+=4");
        scene09right.to('#scene09_textblock3', 5, {autoAlpha: 0}, "+=20");
        scene09right.to('#scene09_textline1', 5, {autoAlpha: 0}, "-=5");
        scene09right.to('#scene09_textblock4', 10, {autoAlpha: 1, y: "-40%"}, "+=4");
        scene09right.to('#scene09_textblock4', 5, {autoAlpha: 0, y: "-90%"}, "+=20");
        scene09right.to('.blur', 5, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");
        scene09right.to('#scene09_boyBubble2', 10, {autoAlpha: 1}, "+=4");
        scene09right.to('#scene09_boyBubble2', 10, {autoAlpha: 0}, "+=20");
        scene09right.to('#scene09_adamBubble2', 10, {autoAlpha: 1}, "+=4");
        scene09right.to('#scene09_adamBubble2', 10, {autoAlpha: 0}, "+=20");
        scene09right.to('#scene09_boyBubble3', 10, {autoAlpha: 1}, "+=4");
        scene09right.to('#scene09_boyBubble3', 10, {autoAlpha: 0}, "+=20");
        scene09right.to('#scene09_textblock5', 10, {autoAlpha: 1}, "+=4");
        scene09right.to('#scene09_textblock5', 5, {autoAlpha: 0}, "+=20");
        scene09right.to('#scene09_adamBubble3', 10, {autoAlpha: 1}, "+=4");
        scene09right.to('#scene09_textline2', 10, {autoAlpha: 1}, "+=4");
        scene09right.to('#scene09_adamBubble3', 10, {autoAlpha: 0}, "+=20");
        scene09right.to('#scene09_textline2', 10, {autoAlpha: 0}, "-=10");
        scene09right.to('.blur', 5, {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");
        scene09right.to('#scene09_textline3', 10, {autoAlpha: 1}, "+=4");

        // Start animation for draws
        scene09right.to('.blur', 5, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "-=2");
        scene09right.to('#scene09_wlan1', 2, {autoAlpha: .7}, "+=10");
        scene09right.to('#scene09_wlan2', 2, {autoAlpha: .7}, "+=10");
        scene09right.to('#scene09_wlan3', 2, {autoAlpha: .7}, "+=10");
        scene09right.to('#scene09_wlan4', 2, {autoAlpha: .7}, "+=10");
        scene09right.add("wlanAnimation", "+=10");
        scene09right.to('#scene09_wlan1', 2, {autoAlpha: 0}, "wlanAnimation");
        scene09right.to('#scene09_wlan2', 2, {autoAlpha: 0}, "wlanAnimation");
        scene09right.to('#scene09_wlan3', 2, {autoAlpha: 0}, "wlanAnimation");
        scene09right.to('#scene09_wlan4', 2, {autoAlpha: 0}, "wlanAnimation");
        scene09right.to('#scene09_wlan1', 2, {autoAlpha: .7}, "+=10");
        scene09right.to('#scene09_wlan2', 2, {autoAlpha: .7}, "+=10");
        scene09right.to('#scene09_wlan3', 2, {autoAlpha: .7}, "+=10");
        scene09right.to('#scene09_wlan4', 2, {autoAlpha: .7}, "+=10");
        scene09right.add("wlanAnimation2", "+=10");
        scene09right.to('#scene09_wlan1', 2, {autoAlpha: 0}, "wlanAnimation2");
        scene09right.to('#scene09_wlan2', 2, {autoAlpha: 0}, "wlanAnimation2");
        scene09right.to('#scene09_wlan3', 2, {autoAlpha: 0}, "wlanAnimation2");
        scene09right.to('#scene09_wlan4', 2, {autoAlpha: 0}, "wlanAnimation2");
        scene09right.to('#scene09_wlan1', 2, {autoAlpha: .7}, "+=10");
        scene09right.to('#scene09_wlan2', 2, {autoAlpha: .7}, "+=10");
        scene09right.to('#scene09_wlan3', 2, {autoAlpha: .7}, "+=10");
        scene09right.to('#scene09_frame', 2, {autoAlpha: .7}, "+=10");
        scene09right.to('#scene09_wlan4', 2, {autoAlpha: .7}, "+=10");
        scene09right.to('#scene09_search', 2, {autoAlpha: .7}, "+=10");
        scene09right.add("wlanAnimation3", "+=10");
        scene09right.to('#scene09_wlan1', 2, {autoAlpha: 0}, "wlanAnimation3");
        scene09right.to('#scene09_wlan2', 2, {autoAlpha: 0}, "wlanAnimation3");
        scene09right.to('#scene09_wlan3', 2, {autoAlpha: 0}, "wlanAnimation3");
        scene09right.to('#scene09_wlan4', 2, {autoAlpha: 0}, "wlanAnimation3");
        scene09right.to('#scene09_wlan1', 2, {autoAlpha: .7}, "+=10");
        scene09right.to('#scene09_wlan2', 2, {autoAlpha: .7}, "+=10");
        scene09right.to('#scene09_wlan3', 2, {autoAlpha: .7}, "+=10");
        scene09right.to('#scene09_wlan4', 2, {autoAlpha: .7}, "+=10");
        scene09right.add("wlanAnimation4", "+=10");
        scene09right.to('#scene09_wlan1', 2, {autoAlpha: 0}, "wlanAnimation4");
        scene09right.to('#scene09_wlan2', 2, {autoAlpha: 0}, "wlanAnimation4");
        scene09right.to('#scene09_wlan3', 2, {autoAlpha: 0}, "wlanAnimation4");
        scene09right.to('#scene09_wlan4', 2, {autoAlpha: 0}, "wlanAnimation4");
        scene09right.to('#scene09_wlan1', 2, {autoAlpha: .7}, "+=10");
        scene09right.to('#scene09_wlan2', 2, {autoAlpha: .7}, "+=10");
        scene09right.to('#scene09_wlan3', 2, {autoAlpha: .7}, "+=10");
        scene09right.to('#scene09_wlan4', 2, {autoAlpha: .7}, "+=10");
        scene09right.add("wlanAnimation5", "+=10");
        scene09right.to('#scene09_wlan1', 2, {autoAlpha: 0}, "wlanAnimation5");
        scene09right.to('#scene09_wlan2', 2, {autoAlpha: 0}, "wlanAnimation5");
        scene09right.to('#scene09_wlan3', 2, {autoAlpha: 0}, "wlanAnimation5");
        scene09right.to('#scene09_wlan4', 2, {autoAlpha: 0}, "wlanAnimation5");
        scene09right.to('#scene09_textline3', 10, {autoAlpha: 0}, "-=2");

        // END SCENE 09 RIGHT SIDE =======================================================================

        let decision2Middle = new TimelineLite();
        decision2Middle.add('text2');
        decision2Middle.add('options2');
        decision2Middle.add('buttons2');
        decision2Middle.call(disableScroll, ["2"], null, '+=1');
        decision2Middle.call(function () {
            chosen2 = true
        }, null, '+=3');
        decision2Middle.to('.choice2', 2, {autoAlpha: 1, y: 100}, 'text2');
        decision2Middle.to('.movieL', 1, {autoAlpha: 1, x: 100}, 'options2');
        decision2Middle.to('.buttonL2', 2, {autoAlpha: 1, x: 0}, 'buttons2');
        decision2Middle.to('.movieR', 1, {autoAlpha: 1, x: -100}, 'options2');
        decision2Middle.to('.buttonR2', 2, {autoAlpha: 1, x: 0}, 'buttons2');

        let decision2Main = new TimelineLite();
        decision2Main.add(decision2Middle);
        decision2Main.add("main");
        decision2Main.add(scene08left, 'main');
        decision2Main.add(scene09right, "main");
        decision2Main.set('.scene10 .blur', {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");

        // RIGHT SCENE ANIMATIONS AND SCROLL LOCK ========================================
        $('.buttonR2').on('click',
            function () {
                TweenMax.to("#wrapper2", 2,
                    {ease: Power2.easeOut, left: "-200vw", oncomplete: enableScroll()});
                scene08left.progress(1); //directly ends timeline for left scene
                badCounter++;
            });

        // LEFT SCENE ANIMATIONS AND SCROLL LOCK ========================================
        $('.buttonL2').on('click',
            function () {
                TweenMax.to("#wrapper2", 2, {ease: Power2.easeOut, left: "0", oncomplete: enableScroll()});
                scene09right.progress(1); //directly ends timeline for right scene
                goodCounter++;
            });

        const decision2 = new ScrollMagic.Scene({
            triggerElement: ".decision2",
            duration: 25000,
            triggerHook: 0,
            reverse: true
        });

        decision2.setTween(decision2Main);
        decision2.setPin(".decision2");
        decision2.addTo(controller);

    });

    //  START FadeInScene08and09 ================================
    $('.decision2').each(function () {
        const decision2In = TweenMax.fromTo($(this), 2, {opacity: 0}, {opacity: 1, ease: Power1.easeIn});

        let decision2 = new ScrollMagic.Scene({
            triggerElement: '.decision2',
            duration: 500,
            triggerHook: .6,
            offset: 0
        });
        decision2.setTween(decision2In);
        decision2.addTo(controller);
        //scene5Scene.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange"});
    });
    //  END FadeInScene08and09 ================================

    //  START FadeOutScene08and09 ================================
    $(".decision2").each(function () {
        const decision2Out = TweenMax.to($(this), 2, {opacity: 0, ease: Power1.easeIn,});

        let decision2 = new ScrollMagic.Scene({
            triggerElement: '.scene10',
            duration: 700,
            triggerHook: "onEnter",
        });
        decision2.setTween(decision2Out);
        decision2.addTo(controller);
    });
    //  END FadeOutScene08and09 ================================
    //END DECISION2

    //  START scene10 ================================
    //SCENE 10 =========================
    let scene10Action = new TimelineLite();
    //BLUR -> muss sobald Szene 9 existiert, in scene09Action.set umgeändert werden!
    //scene08left.set('.blur', {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");
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

    scene10Action.add("scene10_parallax", "+=20");
    scene10Action.to('#scene10_adam', 15, {x: -10}, "scene10_parallax");
    scene10Action.to('#scene10_girl', 15, {x: -400}, "scene10_parallax");
    scene10Action.to('#scene10_layer02', 15, {x: -70}, "scene10_parallax");
    scene10Action.to('#scene10_layer01', 15, {x: -30}, "scene10_parallax");
    scene10Action.to('#scene10_layer00', 15, {x: 40}, "scene10_parallax");
    scene10Action.to('.blur', 15, {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "scene10_parallax");

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
            triggerElement: '.decision3',
            duration: 700,
            triggerHook: "onEnter",
        });
        scene10Scene.setTween(scene10Out);
        scene10Scene.addTo(controller);
    });
    //  END FadeOutScene10 ================================


    // START Scene11adn12
    $('.decision3').each(function () {

        // START SCENE11 Action
        let scene11LinksAction = new TimelineLite();

        scene10Action.set('.blur', {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=0");

        scene11LinksAction.to('#scene11_textblock1', 10, {autoAlpha: 1, x: 270}, "+=2");
        scene11LinksAction.to('#scene11_textblock1', 10, {autoAlpha: 0, x: 500}, "+=20");
        scene11LinksAction.to('.blur', 5, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");
        scene11LinksAction.to('#scene11_bubbleAdam1', 10, {autoAlpha: 1}, "+=2");
        scene11LinksAction.to('#scene11_bubbleAdam1', 10, {autoAlpha: 0}, "+=20");
        scene11LinksAction.to('#scene11_bubbleGirl1', 10, {autoAlpha: 1}, "+=2");
        scene11LinksAction.to('#scene11_bubbleGirl1', 10, {autoAlpha: 0}, "+=20");
        scene11LinksAction.to('#scene11_textblock2', 10, {autoAlpha: 1, y: -300}, "+=10");
        scene11LinksAction.to('#scene11_textblock3', 10, {autoAlpha: 1, y: -200}, "+=10");
        scene11LinksAction.to('#scene11_textblock2', 10, {autoAlpha: 1, y: -600}, "-=10");
        scene11LinksAction.to('#scene11_textblock2', 10, {autoAlpha: 0, y: -1000}, "+=20");
        scene11LinksAction.to('#scene11_textblock3', 10, {autoAlpha: 0, y: -1000}, "-=10");
        scene11LinksAction.to('#scene11_bubbleGirl2', 10, {autoAlpha: 1}, "+=2");
        scene11LinksAction.to('#scene11_bubbleGirl2', 10, {autoAlpha: 0}, "+=20");
        scene11LinksAction.to('#scene11_bubbleAdam2', 10, {autoAlpha: 1}, "+=2");
        scene11LinksAction.to('#scene11_bubbleAdam2', 10, {autoAlpha: 0}, "+=20");
        scene11LinksAction.to('#scene11_bubbleGirl3', 10, {autoAlpha: 1}, "+=2");
        scene11LinksAction.to('#scene11_bubbleGirl3', 10, {autoAlpha: 0}, "+=20");
        scene11LinksAction.to('#scene11_textblock4', 10, {autoAlpha: 1, x: 270}, "+=2");
        scene11LinksAction.to('#scene11_textblock5', 10, {autoAlpha: 1, x: -880}, "+=2");
        scene11LinksAction.to('#scene11_textblock4', 10, {autoAlpha: 0, y: -1000}, "+=20");
        scene11LinksAction.to('#scene11_textblock5', 10, {autoAlpha: 0, y: -1000}, "-=10");
        scene11LinksAction.to('#scene11_textline1', 10, {autoAlpha: 1}, "+=2");
        scene11LinksAction.to('#scene11_textline1', 10, {autoAlpha: 0}, "+=20");
        // LIGHT GOES OFF
        scene11LinksAction.to('#scene11_bright', 4,
            {scale: "10", x: "-3000vw", y: "3000vw"}, "+=2");
        scene11LinksAction.to('#scene11_bright', 2, {autoAlpha: 0});
        scene11LinksAction.add("Parallax", "+=1");
        scene11LinksAction.to('#scene11_layer01', 0, {scale: "1.2", autoAlpha: 1}, "Parallax");
        scene11LinksAction.to('#scene11_layer02', 0, {scale: "2", autoAlpha: 1}, "Parallax");
        scene11LinksAction.to('#scene11_layer01', 2, {scale: "1.01"}, "Parallax");
        scene11LinksAction.to('#scene11_layer02', 2, {scale: "1"}, "Parallax");
        scene11LinksAction.add("Parallax2", "+=1");
        scene11LinksAction.to('#scene11_layer02', 2, {scale: "3", autoAlpha: 0}, "Parallax2");

        scene11LinksAction.to('#scene11_bubbleReg1', 10, {autoAlpha: 1, x: 100}, "+=2");
        scene11LinksAction.to('#scene11_bubbleReg1', 10, {autoAlpha: 0, x: -100}, "+=20");

        scene11LinksAction.to('#scene11_dark_background02_without_nightvision', 2, {scale: "1.2", autoAlpha: 1},
            "Parallax2");
        scene11LinksAction.to('#scene11_dark_background02_with_nightvision', 2, {scaleY: 0, transformOrigin: "50% 50%"},
            "+=1");
        scene11LinksAction.add("Parallax3", "+=1");
        scene11LinksAction.to('#scene11_dark_background02_without_nightvision', 2, {autoAlpha: 0}, "Parallax3");
        scene11LinksAction.to('#scene11_layer01', 2, {autoAlpha: 0}, "Parallax3");
        scene11LinksAction.to('#scene11_dark_background02_with_nightvision', 2,
            {scale: "1.01", autoAlpha: .1, transformOrigin: "50% 50%"}, "Parallax3");
        scene11LinksAction.to('#scene11_dark_background02_with_nightvision', 0, {autoAlpha: 0});
        scene11LinksAction.to('#scene11_dark_background02_with_nightvision', 1, {autoAlpha: .3});
        scene11LinksAction.to('#scene11_dark_background02_with_nightvision', 0, {autoAlpha: 0}, "+=1");
        scene11LinksAction.to('#scene11_dark_background02_with_nightvision', 1, {autoAlpha: .4});
        scene11LinksAction.to('#scene11_dark_background02_with_nightvision', .4, {scaleY: 0, autoAlpha: .2}, "+=0");
        scene11LinksAction.to('#scene11_dark_background02_with_nightvision', .4, {scaleY: 1, autoAlpha: .3}, "+=1");
        scene11LinksAction.to('#scene11_dark_background02_with_nightvision', 0, {autoAlpha: 0}, "+=1");
        scene11LinksAction.to('#scene11_dark_background02_with_nightvision', 1, {autoAlpha: 1}, "+=1");
        scene11LinksAction.to('.blur', 5, {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");
        scene11LinksAction.to('#scene11_textblock6', 10, {autoAlpha: 1, y: -300}, "+=2");
        scene11LinksAction.to('#scene11_textline2', 10, {autoAlpha: 1}, "+=2");
        scene11LinksAction.to('#scene11_textline2', 10, {autoAlpha: 0}, "+=20");
        scene11LinksAction.to('#scene11_textblock6', 10, {autoAlpha: 0}, "-=10");

        // PREPARING FOR ZOOM-OUT SCENE12 //
        /**
         scene11LinksAction.add("Parallax_concert1", "+=1");
         scene11LinksAction.to('#scene12_layer00', 1, {scale: "1.5"}, "Parallax_concert1");
         scene11LinksAction.to('#scene12_layer01', 1, {scale: "2"}, "Parallax_concert1");
         scene11LinksAction.to('#scene12_layer02', 1, {scale: "2.5"}, "Parallax_concert1");
         scene11LinksAction.to('#scene12_layer03', 1, {scale: "3"}, "Parallax_concert1");
         scene11LinksAction.to('#scene12_layer04', 1, {scale: "3.5"}, "Parallax_concert1");
         **/

            //START SCENE 12 RIGHT
            // START ANIMATION ====================================
        let scene12RechtsAction = new TimelineLite();

        // Ab hier Animationen einfügen
        scene12RechtsAction.set('.blur', {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=4");
        scene12RechtsAction.to('#scene12_textblock1', 10, {autoAlpha: 1, x: -600}, "+=10");
        scene12RechtsAction.to('#scene12_textblock1', 10, {autoAlpha: 0, x: -900}, "+=20");
        scene12RechtsAction.to('#scene12_textblock2', 10, {autoAlpha: 1, x: 550}, "+=10");
        scene12RechtsAction.to('#scene12_textblock2', 10, {autoAlpha: 0, x: 800}, "+=20");
        scene12RechtsAction.to('#scene12_textblock3', 10, {autoAlpha: 1});
        scene12RechtsAction.to('#scene12_textblock3', 10, {autoAlpha: 0});
        // BLUR END
        scene12RechtsAction.to('.blur', 5, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");
        scene12RechtsAction.to('#scene12_adamBubble1', 10, {autoAlpha: 1}, "+=10");
        scene12RechtsAction.to('#scene12_adamBubble1', 10, {autoAlpha: 0}, "+=20");
        scene12RechtsAction.to('#scene12_textblock4', 10, {autoAlpha: 1, y: 300}, "+=10");
        scene12RechtsAction.to('#scene12_textblock4', 10, {autoAlpha: 0}, "+=20");

        scene12RechtsAction.to('#scene12_audienceBubble1', 10, {autoAlpha: 1}, "+=10");
        scene12RechtsAction.to('#scene12_audienceBubble2', 10, {autoAlpha: 1}, "+=10");
        scene12RechtsAction.to('#scene12_audienceBubble3', 10, {autoAlpha: 1}, "+=10");
        scene12RechtsAction.to('.blur_speechbubble', 5, {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");
        scene12RechtsAction.to('#scene12_audienceBubble1', 10, {autoAlpha: 0}, "+=20");
        scene12RechtsAction.to('#scene12_audienceBubble2', 10, {autoAlpha: 0}, "-=10");
        scene12RechtsAction.to('#scene12_audienceBubble3', 10, {autoAlpha: 0}, "-=10");
        scene12RechtsAction.to('.blur_speechbubble', 5, {webkitFilter: 'blur(0px)', filter: 'blur(0px)'}, "+=2");

        scene12RechtsAction.to('#scene12_textblock5', 10, {autoAlpha: 1, y: -500}, "+=10");
        scene12RechtsAction.to('#scene12_textline1', 10, {autoAlpha: 1}, "+=10");
        scene12RechtsAction.to('#scene12_textblock5', 10, {autoAlpha: 0}, "+=20");
        scene12RechtsAction.to('#scene12_textline1', 10, {autoAlpha: 0}, "-=10");

        // START ANIMATION  -  ZOOM-IN  -
        scene12RechtsAction.add("Parallax_concert", "+=1");
        scene12RechtsAction.to('#scene12_layer00', 10, {scale: "1.5"}, "Parallax_concert");
        scene12RechtsAction.to('#scene12_layer01', 10, {scale: "2"}, "Parallax_concert");
        scene12RechtsAction.to('#scene12_layer02', 10, {scale: "2.5"}, "Parallax_concert");
        scene12RechtsAction.to('#scene12_layer03', 10, {scale: "3"}, "Parallax_concert");
        scene12RechtsAction.to('#scene12_layer04', 10, {scale: "3.5"}, "Parallax_concert");
        //END SCENE 12 RIGHT


        let decision3Middle = new TimelineLite();
        decision3Middle.add('text3');
        decision3Middle.add('options3');
        decision3Middle.add('buttons3');
        decision3Middle.call(disableScroll, ['3'], null, '+=1');
        decision3Middle.call(function () {
            chosen3 = true
        }, null, '+=3');
        decision3Middle.to('.choice3', 2, {autoAlpha: 1, y: 100}, 'text3');
        decision3Middle.to('.movieL', 1, {autoAlpha: 1, x: 100}, 'options3');
        decision3Middle.to('.buttonL3', 2, {autoAlpha: 1, x: 0}, 'buttons3');
        decision3Middle.to('.movieR', 1, {autoAlpha: 1, x: -100}, 'options3');
        decision3Middle.to('.buttonR3', 2, {autoAlpha: 1, x: 0}, 'buttons3');


        let decision3Main = new TimelineLite();
        decision3Main.add(decision3Middle);
        decision3Main.add("main");
        decision3Main.add(scene11LinksAction, 'main');
        decision3Main.add(scene12RechtsAction, "main");
        decision3Main.set('.scene13 .blur', {webkitFilter: 'blur(6px)', filter: 'blur(6px)'}, "+=2");

        // RIGHT SCENE ANIMATIONS AND SCROLL LOCK ========================================
        $('.buttonR3').on('click',
            function () {
                TweenMax.to("#wrapper3", 2,
                    {ease: Power2.easeOut, left: "-200vw", oncomplete: enableScroll()});
                scene11LinksAction.progress(1); //directly ends timeline for left scene
                badCounter++;
            });

        // LEFT SCENE ANIMATIONS AND SCROLL LOCK ========================================
        $('.buttonL3').on('click',
            function () {
                TweenMax.to("#wrapper3", 2, {ease: Power2.easeOut, left: "0", oncomplete: enableScroll()});
                scene12RechtsAction.progress(1); //directly ends timeline for right scene
                goodCounter++;
            });

        const decision3 = new ScrollMagic.Scene({
            triggerElement: ".decision3",
            duration: 30000,
            triggerHook: 0,
            reverse: true
        });

        decision3.setTween(decision3Main);
        decision3.setPin(".decision3");
        decision3.addTo(controller);
    });

    // START FadeInScene11and12
    $(".decision3").each(function () {
        const decision3In = TweenMax.fromTo($(this), 2, {opacity: 0}, {opacity: 1, ease: Power1.easeIn});

        let decision3 = new ScrollMagic.Scene({
            triggerElement: '.decision3',
            duration: 500,
            triggerHook: .6,
            offset: 0
        });
        decision3.setTween(decision3In);
        decision3.addTo(controller);
    });
    //  END FadeInScene11and12 ================================

    //  START FadeOutScene11and12 ================================
    $(".decision3").each(function () {
        const decision3Out = TweenMax.to($(this), 2, {opacity: 0, ease: Power1.easeIn,});

        let decision3 = new ScrollMagic.Scene({
            triggerElement: '.scene13',
            duration: 700,
            triggerHook: "onEnter",
        });
        decision3.setTween(decision3Out);
        decision3.addTo(controller);
    });
    //  END FadeOutScene11and12 ================================

    //  START FadeInScene13 Good ================================
    $('.scene13').each(function () {
        const scene13In = TweenMax.fromTo($(this), 2, {opacity: 0}, {opacity: 1, ease: Power1.easeIn});

        let scene13Scene = new ScrollMagic.Scene({
            triggerElement: '.scene13',
            duration: 500,
            triggerHook: .6,
            offset: 0
        });
        scene13Scene.setTween(scene13In);
        scene13Scene.addTo(controller);
        //scene5Scene.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange"});
    });
    //  END FadeInScene13 Good ================================

    //START ANIMATION scene13_good
    let scene13Action = new TimelineLite();
    scene13Action.call(findEnding,null);
    scene13Action.to('#scene13_textblock1', 10, {autoAlpha: 1, y: 300, x: "10%"}, "+=4");
    scene13Action.to('#scene13_textblock1', 15, {autoAlpha: 0, y: 600, x: "10%"}, "+=10");
    scene13Action.to('.blur', 5, {webkitFilter: 'blur(0px)', filter:'blur(0px)'}, "+=2");
    scene13Action.to('#scene13_layer01', 10, {autoAlpha: 0}, "+=1");
    scene13Action.to('#scene13_layer02', 5, {autoAlpha: 1}, "-=7");
    scene13Action.to('#scene13_adamBubble1', 10, {autoAlpha: 1}, "+=2");
    scene13Action.to('#scene13_adamBubble1', 10, {autoAlpha: 0}, "+=20");
    scene13Action.to('#scene13_adamBubble2', 10, {autoAlpha: 1}, "+=2");
    scene13Action.to('#scene13_adamBubble2', 10, {autoAlpha: 0}, "+=20");

    scene13Action.to('#scene13_adamBubble3', 10, {autoAlpha: 1}, "+=2");
    scene13Action.to('#scene13_adamBubble3', 10, {autoAlpha: 0}, "+=20");

    scene13Action.to('#scene13_adamBubble4', 10, {autoAlpha: 1}, "+=2");
    scene13Action.to('#scene13_adamBubble4', 10, {autoAlpha: 0}, "+=20");

    scene13Action.to('#scene13_adamBubble5', 10, {autoAlpha: 1}, "+=2");
    scene13Action.to('#scene13_adamBubble5', 10, {autoAlpha: 0}, "+=20");

    scene13Action.to('#scene13_adamBubble6', 10, {autoAlpha: 1}, "+=2");
    scene13Action.to('#scene13_adamBubble6', 10, {autoAlpha: 0}, "+=20");

    scene13Action.to('#scene13_adamBubble7', 10, {autoAlpha: 1}, "+=2");
    scene13Action.to('#scene13_adamBubble7', 10, {autoAlpha: 0}, "+=20");

    scene13Action.to('#scene13_adamBubble8', 10, {autoAlpha: 1}, "+=2");
    scene13Action.to('#scene13_adamBubble8', 10, {autoAlpha: 0}, "+=20");

    scene13Action.to('#scene13_adamBubble9', 10, {autoAlpha: 1}, "+=2");
    scene13Action.to('#scene13_adamBubble9', 10, {autoAlpha: 0}, "+=20");

    scene13Action.to('#scene13_adamBubble10', 10, {autoAlpha: 1}, "+=2");
    scene13Action.to('#scene13_adamBubble10', 10, {autoAlpha: 0}, "+=20");

    scene13Action.to('#scene13_adamBubble11', 10, {autoAlpha: 1});

    // Fade Out for Scene13
    scene13Action.to('#scene13_layer00', 10, { autoAlpha:0.3});
    scene13Action.add("fade_out_scene13", "+=1");
    scene13Action.to('#scene13_layer02', 10, { autoAlpha:0},"fade_out_scene13");
    scene13Action.to('#scene13_good_adamBubble11', 10, {autoAlpha: 0}, "fade_out_scene13");
    scene13Action.to('#scene13_layer00', 10, { autoAlpha:0},"fade_out_scene13");


    const scene13 = new ScrollMagic.Scene({
        triggerElement: ".scene13",
        duration: 40000,
        triggerHook: 0,
        reverse: true
    });
    scene13.setTween(scene13Action);
    scene13.setPin(".scene13");
    scene13.addTo(controller);
    
    //END ANIMATION SCENE13

    //  START FadeInScene14 ================================
    $('.scene14').each(function () {
        const scene14In = TweenMax.fromTo($(this), 2, {opacity: 0}, {opacity: 1, ease: Power1.easeIn});

        let scene14Scene = new ScrollMagic.Scene({
            triggerElement: '.scene14',
            duration: 500,
            triggerHook: .6,
            offset: 0
        });
        scene14Scene.setTween(scene14In);
        scene14Scene.addTo(controller);
        //scene5Scene.addIndicators({name: "TEST", colorStart: "orange", colorEnd: "orange"});
    });
    //  END FadeInScene14 ================================

    // START ANIMATION
    let scene14Action = new TimelineLite();

    scene14Action.to('#scene14_title', 10, {autoAlpha: 1});
    scene14Action.add("scene14_animation01");
    scene14Action.to('#scene14_title', 10, {autoAlpha: 0, scale: "6"}, "scene14_animation01");
    scene14Action.to('#scene14_project', 20, {autoAlpha: 1}, "scene14_animation01");
    scene14Action.to('#hsd_logo', 10, {autoAlpha: 1});
    scene14Action.add("scene14_animation02", "+=1");
    scene14Action.to('#hsd_logo', 20, {width: "15%", height: "15%", top: "5%", left: "43%"}, "scene14_animation02");
    scene14Action.to('#scene14_project', 20, {scale: "6", autoAlpha: 0}, "scene14_animation02");
    scene14Action.fromTo('#border', 10, {scaleX: 0, autoAlpha: 0}, {scaleX: 1, autoAlpha: .7});

    scene14Action.add("scene14_animation03", "+=1");
    scene14Action.fromTo('#scene14_name01', 10, {autoAlpha: 0, color: "red", y: "-20"},
        {autoAlpha: 1, color: "white", y: "200", x: "-800", fontsize: "4vh"},
        "scene14_animation03");
    scene14Action.fromTo('#scene14_name02', 10, {autoAlpha: 0, color: "red", y: "-20"},
        {autoAlpha: 1, color: "white", y: "400", x: "-400", fontsize: "4vh"},
        "scene14_animation03");
    scene14Action.fromTo('#scene14_name03', 10, {autoAlpha: 0, color: "red", y: "-20"},
        {autoAlpha: 1, color: "white", y: "200", x: "0", fontsize: "4vh"}, "scene14_animation03");
    scene14Action.fromTo('#scene14_name04', 10, {autoAlpha: 0, color: "red", y: "-20"},
        {autoAlpha: 1, color: "white", y: "400", x: "300", fontsize: "4vh"},
        "scene14_animation03");
    scene14Action.fromTo('#scene14_name05', 10, {autoAlpha: 0, color: "red", y: "-20"},
        {autoAlpha: 1, color: "white", y: "200", x: "700", fontsize: "4vh"},
        "scene14_animation03");

    scene14Action.to('#border', 10, {scaleX: 0, autoAlpha: 0});

    scene14Action.add("scene14_animation04", "+=1");
    scene14Action.to('#scene14_name01', 10, {y: "-100"}, "scene14_animation04");
    scene14Action.to('#scene14_name02', 10, {y: "0"}, "scene14_animation04");
    scene14Action.to('#scene14_name03', 10, {y: "-100"}, "scene14_animation04");
    scene14Action.to('#scene14_name04', 10, {y: "0"}, "scene14_animation04");
    scene14Action.to('#scene14_name05', 10, {y: "-100"}, "scene14_animation04");
    scene14Action.fromTo('#scene14_name06', 10, {y: "300", autoAlpha: 0}, {autoAlpha: 1}, "scene14_animation04");

    scene14Action.add("scene14_animation05", "+=20");
    scene14Action.to('#scene14_name01', 5, {autoAlpha: 0}, "scene14_animation05");
    scene14Action.to('#scene14_name02', 5, {autoAlpha: 0}, "scene14_animation05");
    scene14Action.to('#scene14_name03', 5, {autoAlpha: 0}, "scene14_animation05");
    scene14Action.to('#scene14_name04', 5, {autoAlpha: 0}, "scene14_animation05");
    scene14Action.to('#scene14_name05', 5, {autoAlpha: 0}, "scene14_animation05");
    scene14Action.to('#scene14_name06', 5, {autoAlpha: 0}, "scene14_animation05");
    scene14Action.to('#hsd_logo', 10, {autoAlpha: 0, scale: "4", y: "500"}, "scene14_animation05");


    const scene14 = new ScrollMagic.Scene({
        triggerElement: ".scene14",
        duration: 15000,
        triggerHook: 0,
        reverse: true
    });

    scene14.setTween(scene14Action);
    scene14.setPin(".scene14");
    scene14.addTo(controller);
});


