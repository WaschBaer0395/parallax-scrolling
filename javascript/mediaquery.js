$(window).resize(function() {
    var actualInnerWidth = window.outerWidth;
    var actualInnerHeight = window.outerHeight;
    console.log("Width"+actualInnerWidth);
    console.log("Height"+actualInnerHeight);
    if (actualInnerWidth >= 1920 && actualInnerHeight >= 1047) {
        window.location.href = "index2.html";
    }
});

$(document).ready(function() {
    var actualInnerWidth = window.outerWidth;
    var actualInnerHeight = window.outerHeight;
    var startAspectX = actualInnerWidth/16;
    var startAspectY = (actualInnerHeight+30)/9;
    //console.log("Width"+actualInnerWidth);
    //console.log("Height"+actualInnerHeight);
    //console.log("AspectRatio "+startAspectX+":"+startAspectY);
    // (actualInnerHeight >= 1280 && actualInnerWidth >=687)
    if ((actualInnerHeight >= 1047 && actualInnerWidth >=1920)) {
        window.location.href = "index2.html";
    }
});

function openWin(x,y) {
    myWindow = window.open("index2.html", "", "width=100, height=100");  // Opens a new window
    myWindow.resizeTo(x, y);                             // Resizes the new window
    myWindow.focus();                                        // Sets focus to the new window
}

var arrow1 = new TimelineMax({repeat: -1, repeatDelay: 0.5 });
arrow1.to(".arrow1", 0.4, { x: '11',y:'-11', ease: Power1.easeNone });
arrow1.to(".arrow1", 0.2, { x: '0',y:'0', ease: Power1.easeOut });
arrow1.to(".arrow1", 0.2, { x: '7',y:'-7', ease: Power1.easeNone });
arrow1.to(".arrow1", 0.4, { x: '0',y:'0', ease: Power1.easeOut });

var arrow2 = new TimelineMax({repeat: -1, repeatDelay: 0.5 });
arrow2.to(".arrow2", 0.4, { x: '-11',y:'11', ease: Power1.easeNone });
arrow2.to(".arrow2", 0.2, { x: '0',y:'0', ease: Power1.easeOut });
arrow2.to(".arrow2", 0.2, { x: '-7',y:'7', ease: Power1.easeNone });
arrow2.to(".arrow2", 0.4, { x: '0',y:'0', ease: Power1.easeOut });

var arrow3 = new TimelineMax({repeat: -1, repeatDelay: 0.5 });
arrow3.to(".arrow3", 0.4, { x: '-11',y:'-11', ease: Power1.easeNone });
arrow3.to(".arrow3", 0.2, { x: '0',y:'0', ease: Power1.easeOut });
arrow3.to(".arrow3", 0.2, { x: '-7',y:'-7', ease: Power1.easeNone });
arrow3.to(".arrow3", 0.4, { x: '0',y:'0', ease: Power1.easeOut });

var arrow4 = new TimelineMax({repeat: -1, repeatDelay: 0.5 });
arrow4.to(".arrow4", 0.4, { x: '11',y:'11', ease: Power1.easeNone });
arrow4.to(".arrow4", 0.2, { x: '0',y:'0', ease: Power1.easeOut });
arrow4.to(".arrow4", 0.2, { x: '7',y:'7', ease: Power1.easeNone });
arrow4.to(".arrow4", 0.4, { x: '0',y:'0', ease: Power1.easeOut });

var phone = new TimelineMax({repeat: -1, repeatDelay: 1 });
phone.to(".phone", 0.8, { rotation:90, ease: Power1.easeNone });
phone.to(".phone", 0.8, { rotation:0, ease: Power1.easeOut },'+=1');

var newWindow = new TimelineMax({repeat: -1, repeatDelay: 0.5 });
newWindow.to(".window", 0.4, { y:'-11', ease: Power1.easeNone });
newWindow.to(".window", 0.2, { y:'0', ease: Power1.easeOut });
newWindow.to(".window", 0.2, { y:'-7', ease: Power1.easeNone });
newWindow.to(".window", 0.4, { y:'0', ease: Power1.easeOut });

var newWindow2 = new TimelineMax({repeat: -1, repeatDelay: 0.5 });
newWindow2.to(".window2", 0.4, { y:'-11', ease: Power1.easeNone });
newWindow2.to(".window2", 0.2, { y:'0', ease: Power1.easeOut });
newWindow2.to(".window2", 0.2, { y:'-7', ease: Power1.easeNone });
newWindow2.to(".window2", 0.4, { y:'0', ease: Power1.easeOut });

var masterTl = new TimelineMax();
masterTl.add("start");
masterTl.add(arrow1,"start");
masterTl.add(arrow2,"start");
masterTl.add(arrow3,"start");
masterTl.add(arrow4,"start");
masterTl.add(phone,"start");
masterTl.add(newWindow,"start");
masterTl.add(newWindow2,"start");

