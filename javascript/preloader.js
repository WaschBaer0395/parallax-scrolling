let progressbar = document.getElementById('progress');

var queue = new createjs.LoadQueue(false);
queue.on("fileload", handleFileComplete);

queue.on("progressbar", event =>{
    console.log('all done');
    let progressbar = Math.floor(event.progress*100);
    this.progressbar.style.width = progress+'%'
    if(progressbar == 100){
        queue.loadFile("./Media/pictures/szene01/background.png");
        queue.loadFile("./Media/pictures/szene01/background2.png");
        queue.loadFile("Media/pictures/szene02/background.png");
        queue.loadFile("Media/pictures/szene02/foreground.png");
        queue.loadFile("Media/pictures/szene03/krankenhaus_scene01.png");
        queue.loadFile("Media/pictures/hospital/krankenhaus_backgroundpng.png");
        queue.loadFile("Media/pictures/hospital/krankenhaus_layer01.png");
        queue.loadFile("Media/pictures/hospital/krankenhaus_layer02.png");
        queue.loadFile("Media/pictures/hospital/krankenhaus_layer03.png");
        queue.loadFile("Media/pictures/scene04/layer_21.png");
        queue.loadFile("Media/pictures/scene04/layer011.png");
        queue.loadFile("Media/pictures/scene04/layer01.jpg");
        queue.loadFile("Media/pictures/szene05/background1.jpg");
        queue.loadFile("Media/pictures/szene06/forBackup/Szene06_Berge.jpg");
        queue.loadFile("Media/pictures/szene06/scene06_layer03.png");
        queue.loadFile("Media/pictures/szene06/scene06_layer02.png");
        queue.loadFile("Media/pictures/szene06/scene06_layer01.png");
        queue.loadFile("Media/pictures/szene07/background.jpg");
        queue.loadFile("Media/pictures/szene07/gala_layer01.png");
        queue.loadFile("Media/pictures/szene07/gala_layer02.png");
        queue.loadFile("Media/pictures/szene07/gala_layer03.png");
        queue.loadFile("Media/pictures/szene07/gala_layer04.png");
        queue.loadFile("Media/pictures/szene08/sitting1.png");
        queue.loadFile("Media/pictures/szene08/sitting2.png");
        queue.loadFile("Media/pictures/szene11/airport_scene_bright.jpg");
        queue.loadFile("Media/pictures/szene11/dark_scene/dark_background01_layer01.jpg");
        queue.loadFile("Media/pictures/szene11/dark_scene/dark_background01_layer02.png");
        queue.loadFile("Media/pictures/szene11/dark_scene/dark_background02_without_nightvision.jpg");
        queue.loadFile("Media/pictures/szene11/dark_scene/dark_background02_with_nightvision.jpg");
        console.log('all done');

    }
});

function handleFileComplete(event){
    var item = event.item;
    var type = item.type;

    let div = document.getElementById('div');
    
    if(type== createjs.Types.IMAGE){
        div.appendChild(event.result);
    }
}
