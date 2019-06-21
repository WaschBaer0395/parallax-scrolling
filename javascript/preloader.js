let progressbar = document.getElementById('progressbar');
let cont =  document.getElementById('progressbar_cont');
var preload = new createjs.LoadQueue();

//the progress for when the entire queue has changed.
preload.on("progress", handleProgress);
//fired when a queue completes loading all files
preload.on("complete", handleComplete);
//for when a single file has completed loading.
preload.on("fileload", handleFileLoad);

let manifest =[
    {id: 'szene01_1', src: "./Media/pictures/szene01/background.png"},
    {id: 'szene01_2', src: "./Media/pictures/szene01/background2.png"},
    {id: 'szene02_back', src: "Media/pictures/szene02/background.png"},
    {id: 'szene02_fore', src: "Media/pictures/szene02/foreground.png"},
    {id: 'szene03_01', src: "Media/pictures/szene03/krankenhaus_scene01.png"},
    {id: 'szene03_ back',src: "Media/pictures/hospital/krankenhaus_backgroundpng.png"},
    {id: 'szene03_layer1', src: "Media/pictures/hospital/krankenhaus_layer01.png"},
    {id: 'szene03_layer2', src: "Media/pictures/hospital/krankenhaus_layer02.png"},
    {id: 'szene03_layer3', src: "Media/pictures/hospital/krankenhaus_layer03.png"},
    {id: 'szene04_1', src: "Media/pictures/scene04/layer01.jpg"},
    {id: 'szene04_2,', src: "Media/pictures/scene04/layer011.png"},
    {id: 'szene04_3', src: "Media/pictures/scene04/layer_21.png"},
    {id: 'szene05_back', src: "Media/pictures/szene05/background1.jpg"},
    {id: 'szene06_01', src: "Media/pictures/szene06/scene06_layer01.png"},
    {id: 'szene06_00', src: "Media/pictures/szene06/scene06_layer00.jpg"},
    {id: 'szene07_1', src: "Media/pictures/szene07/gala_layer01.png"},
    {id: 'szene07_2', src: "Media/pictures/szene07/gala_layer02.png"},
    {id: 'szene07_3', src: "Media/pictures/szene07/gala_layer03.png"},
    {id: 'szene07_4', src: "Media/pictures/szene07/gala_layer04.png"},
    {id: 'szene08_1', src: "Media/pictures/szene08/sitting1.png"},
    {id: 'szene08_2', src: "Media/pictures/szene08/sitting2.png"},
    {id: 'szene09_1', src: "Media/pictures/szene09/scene09_layer0.jpg"},
    {id: 'szene09_2', src: "Media/pictures/szene09/scene09_layer01.png"},
    {id: 'szene09_3', src: "Media/pictures/szene09/scene09_layer02.png"},
    {id: 'szene10_0', src: "Media/pictures/szene10/cafe_layer00.jpg"},
    {id: 'szene10_1', src: "Media/pictures/szene10/cafe_layer01.png"},
    {id: 'szene10_2', src: "Media/pictures/szene10/cafe_layer02.png"},
    {id: 'szene11_airport_bright', src: "Media/pictures/szene11/airport_scene_bright.jpg"},
    {id: 'szene11_1', src: "Media/pictures/szene11/dark_scene/dark_background01_layer01.jpg"},
    {id: 'szene11_2', src: "Media/pictures/szene11/dark_scene/dark_background01_layer02.png"},
    {id: 'szene11_without_nightvision', src: "Media/pictures/szene11/dark_scene/dark_background02_without_nightvision.jpg"},
    {id: 'szene11_with_nightvision', src: "Media/pictures/szene11/dark_scene/dark_background02_with_nightvision.jpg"},
    {id: 'szene12_1', src: "Media/pictures/szene12/concert_layer00.jpg"},
    {id: 'szene12_2', src: "Media/pictures/szene12/concert_layer01.png"},
    {id: 'szene12_3', src: "Media/pictures/szene12/concert_layer02.png"},
    {id: 'szene12_4', src: "Media/pictures/szene12/concert_layer04.png"}
];

//preload.loadManifest(manifest);

function stop() {
    if (preload != null) {
        preload.close();
    }
}
function handleProgress(event){
    var progress = Math.round(event.progress * 100);
    this.progressbar.style.width = progress + '%';
    console.log('General progress');
}

function handleComplete(event){
    console.log('Complete', event);
    progressbar.addClass('.fadeOut');
    cont.addClass('.fadeOut');
}
function handleFileLoad() {
    //test
    console.log('a file has loaded');
    
}

