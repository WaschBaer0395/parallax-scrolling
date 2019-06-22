let progress = document.getElementById('progress');
let percentage = document.getElementById('percentage');
let progresscontainer = document.getElementById('progresscontainer');
let scrollindicator = document.getElementById("scrollIndicator");
let cover_title = document.getElementById("cover_title");
var queue = new createjs.LoadQueue(false);


queue.on("progress", event =>{
    cover_title.style.opacity = '0';
    scrollindicator.style.opacity ='0';
    document.body.style.overflowY = 'hidden';
    let progress = Math.floor(event.progress*100);
    this.progress.style.width = progress+'%';
    this.percentage.innerText = "[ " + progress+'%' + " ]";
    //console.log(progress+'%');
/*    if(progress == 100){
        console.log('all done\n');
    }*/
});

function sleep(miliseconds) {
    var currentTime = new Date().getTime();

    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}
function enableScroll(){
    //console.log("now sleeping");
    sleep(300);
    //console.log("noe enable scroll");
    document.body.style.overflowY = 'scroll';
}


queue.on("complete", event =>{
    //console.log('progressbar hidden\n');
    scrollindicator.classList.add('fadeIn');
    cover_title.classList.add('fadeIn');
    progresscontainer.classList.add('fadeOut');
    $('.fadeOut').on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", enableScroll());
});

queue.on("fileload", handleFileComplete);
// SCENE01 =============================================================================
queue.loadFile("Media/pictures/szene01/background.png");
queue.loadFile("Media/pictures/szene01/background2.png");
queue.loadFile("Media/pictures/szene01/ground.png");
queue.loadFile("Media/pictures/szene01/laterne.png");
// SCENE02 =============================================================================
queue.loadFile("Media/pictures/szene02/background.png");
queue.loadFile("Media/pictures/szene02/foreground.png");
queue.loadFile("Media/pictures/szene02/quinn_scene02_final.png");
// SCENE03 =============================================================================
queue.loadFile("Media/pictures/szene03/Adam_01.png");
queue.loadFile("Media/pictures/szene03/Adam_02.png");
queue.loadFile("Media/pictures/szene03/Adam_03.png");
queue.loadFile("Media/pictures/szene03/Adam_04.png");
queue.loadFile("Media/pictures/szene03/Adam_05.png");
//queue.loadFile("Media/pictures/szene03/AdobeStock_140128343.jpg");
queue.loadFile("Media/pictures/szene03/krankenhaus_backgroundpng.png");
queue.loadFile("Media/pictures/szene03/krankenhaus_layer01.png");
queue.loadFile("Media/pictures/szene03/krankenhaus_layer02.png");
queue.loadFile("Media/pictures/szene03/krankenhaus_layer03.png");
queue.loadFile("Media/pictures/szene03/krankenhaus_scene01.png");
//queue.loadFile("Media/pictures/szene03/draws/socket.svg");
//queue.loadFile("Media/pictures/szene03/draws/wire.svg");
// SCENE04 =============================================================================
queue.loadFile("Media/pictures/scene04/adam.png");
queue.loadFile("Media/pictures/scene04/adam1.png");
queue.loadFile("Media/pictures/scene04/background.jpg");
queue.loadFile("Media/pictures/scene04/background1.jpg");
queue.loadFile("Media/pictures/scene04/layer0.jpg");
queue.loadFile("Media/pictures/scene04/layer01.jpg");
queue.loadFile("Media/pictures/scene04/layer01.png");
queue.loadFile("Media/pictures/scene04/layer011.png");
queue.loadFile("Media/pictures/scene04/layer_2.png");
queue.loadFile("Media/pictures/scene04/layer_21.png");
// SCENE05 =============================================================================
queue.loadFile("Media/pictures/szene05/adam.png");
queue.loadFile("Media/pictures/szene05/adam1.png");
queue.loadFile("Media/pictures/szene05/background.jpg");
queue.loadFile("Media/pictures/szene05/background1.jpg");
queue.loadFile("Media/pictures/szene05/girl.png");
queue.loadFile("Media/pictures/szene05/girl1.png");
queue.loadFile("Media/pictures/szene05/hurt.svg");
queue.loadFile("Media/pictures/szene05/vorgabe.jpg");
// SCENE06 =============================================================================
queue.loadFile("Media/pictures/szene06/draws/layer01.svg");
queue.loadFile("Media/pictures/szene06/draws/layer02.svg");
queue.loadFile("Media/pictures/szene06/draws/layer03.svg");
queue.loadFile("Media/pictures/szene06/draws/layer04.svg");
queue.loadFile("Media/pictures/szene06/draws/layer05.svg");
queue.loadFile("Media/pictures/szene06/draws/layer06.svg");
queue.loadFile("Media/pictures/szene06/draws/layer07.svg");
queue.loadFile("Media/pictures/szene06/draws/layer08.svg");
queue.loadFile("Media/pictures/szene06/draws/layer09.svg");
queue.loadFile("Media/pictures/szene06/draws/layer10.svg");
queue.loadFile("Media/pictures/szene06/draws/layer11.svg");
queue.loadFile("Media/pictures/szene06/draws/layer12.svg");
queue.loadFile("Media/pictures/szene06/draws/layer13.svg");
queue.loadFile("Media/pictures/szene06/draws/layer14.svg");
queue.loadFile("Media/pictures/szene06/draws/layer15.svg");
queue.loadFile("Media/pictures/szene06/draws/layer16.svg");
queue.loadFile("Media/pictures/szene06/draws/layer17.svg");
queue.loadFile("Media/pictures/szene06/draws/layer18.svg");
queue.loadFile("Media/pictures/szene06/draws/layer19.svg");
queue.loadFile("Media/pictures/szene06/draws/layer20.svg");
queue.loadFile("Media/pictures/szene06/draws/layer21.svg");
queue.loadFile("Media/pictures/szene06/draws/layer22.svg");
queue.loadFile("Media/pictures/szene06/draws/layer23.svg");
queue.loadFile("Media/pictures/szene06/draws/layer24.svg");
queue.loadFile("Media/pictures/szene06/draws/layer25.svg");
queue.loadFile("Media/pictures/szene06/draws/layer26.svg");
queue.loadFile("Media/pictures/szene06/scene06_layer00.jpg");
queue.loadFile("Media/pictures/szene06/scene06_layer01.png");
// SCENE07 =============================================================================
queue.loadFile("Media/pictures/szene07/background.jpg");
queue.loadFile("Media/pictures/szene07/gala_layer01.png");
queue.loadFile("Media/pictures/szene07/gala_layer02.png");
queue.loadFile("Media/pictures/szene07/gala_layer03.png");
queue.loadFile("Media/pictures/szene07/gala_layer04.png");
// SCENE08 =============================================================================
queue.loadFile("Media/pictures/szene08/funken/layer0.svg");
queue.loadFile("Media/pictures/szene08/funken/layer01.svg");
queue.loadFile("Media/pictures/szene08/funken/layer02.svg");
queue.loadFile("Media/pictures/szene08/funken/layer03.svg");
queue.loadFile("Media/pictures/szene08/funken/layer04.svg");
queue.loadFile("Media/pictures/szene08/funken/layer05.svg");
queue.loadFile("Media/pictures/szene08/funken/layer06.svg");
queue.loadFile("Media/pictures/szene08/funken/layer07.svg");
queue.loadFile("Media/pictures/szene08/funken/layer08.svg");
queue.loadFile("Media/pictures/szene08/funken/layer09.svg");
queue.loadFile("Media/pictures/szene08/funken/layer10.svg");
queue.loadFile("Media/pictures/szene08/funken/layer11.svg");
queue.loadFile("Media/pictures/szene08/funken/layer12.svg");
queue.loadFile("Media/pictures/szene08/funken/layer13.svg");
queue.loadFile("Media/pictures/szene08/funken/layer14.svg");
queue.loadFile("Media/pictures/szene08/funken/layer15.svg");
queue.loadFile("Media/pictures/szene08/sitting1.png");
queue.loadFile("Media/pictures/szene08/sitting2.png");
// SCENE09 =============================================================================
queue.loadFile("Media/pictures/szene09/scene09_layer0.jpg");
queue.loadFile("Media/pictures/szene09/scene09_layer01.png");
queue.loadFile("Media/pictures/szene09/scene09_layer02.png");
// SCENE10 =============================================================================
queue.loadFile("Media/pictures/szene10/cafe_girl.png");
queue.loadFile("Media/pictures/szene10/cafe_layer00.jpg");
queue.loadFile("Media/pictures/szene10/cafe_layer01.png");
queue.loadFile("Media/pictures/szene10/cafe_layer02.png");
queue.loadFile("Media/pictures/szene10/cafe_man.png");
// SCENE11 =============================================================================
queue.loadFile("Media/pictures/szene11/dark_scene/dark_background01_layer01.jpg");
queue.loadFile("Media/pictures/szene11/dark_scene/dark_background01_layer02.png");
queue.loadFile("Media/pictures/szene11/dark_scene/dark_background02_with_nightvision.jpg");
queue.loadFile("Media/pictures/szene11/dark_scene/dark_background02_without_nightvision.jpg");
queue.loadFile("Media/pictures/szene11/airport_scene_bright.jpg");
// SCENE12 =============================================================================
queue.loadFile("Media/pictures/szene12/adam_concert.png");
queue.loadFile("Media/pictures/szene12/concert_layer00.jpg");
queue.loadFile("Media/pictures/szene12/concert_layer01.png");
queue.loadFile("Media/pictures/szene12/concert_layer02.png");
queue.loadFile("Media/pictures/szene12/concert_layer03_adam.png");
queue.loadFile("Media/pictures/szene12/concert_layer04.png");








function handleFileComplete(event){
    var item = event.item;
    var type = item.type;
    let body = document.getElementsByTagName('body');
    if(type == createjs.Types.IMAGE || type == createjs.Types.SVG){
        //console.log("appending items"+event.result+"\n");
    }
}
