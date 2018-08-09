window.onload = function(){
    let keyCon = document.querySelector(".keyCon")
    let bgmusic = document.querySelector("#bgmusic")
    let flag = document.querySelector("#flag")
    let jf=document.querySelector(".jf")
    let life=document.querySelector(".life")
    let screen=document.querySelector(".screen")
    let deach=document.querySelector(".death")
    let text=document.querySelector(".text")
    let replay=document.querySelector(".replay")
    let audio=document.querySelector("audio")
    let key=document.querySelector(".key")
    let f=false
//按键
    keyCon.ontouchstart = function(e){
        if(f!=true){
            return
        }
        if(e.target.className=="btn"){
            e.target.style.transform = "scale(0.8)"
            let name=e.target.innerText;
            gameobj.key(name)
        }

    }
    keyCon.ontouchend = function (e) {

        if (e.target.className == "btn") {
            e.target.style.transform = "scale(1)"
        }
    }
//音乐
    bgmusic.ontouchstart = function(){
        if (this.className == 'Astart'){
            this.className = "Aend"
            audio.pause()
        }else{
            this.className = "Astart"
            audio.play()
        }
    }

//开始，暂停
    flag.ontouchstart = function () {
        if (this.className == 'start') {
            this.className = "end"
            gameobj.pause()
            key.style.opacity="1"
            f=false;
        } else {
            this.className = "start"
            gameobj.run();
            key.style.opacity=".5"
            f=true;
        }
    }


    replay.ontouchstart=function () {
        gameobj.init()
        gameobj.createLetter(5)
    }



    let gameobj = new Game()
    gameobj.screen = screen
    gameobj.bgmusic=bgmusic;
    gameobj.life=life;
    gameobj.jf=jf;
    gameobj.flag=flag;
    gameobj.deach=deach;
    gameobj.text=text;


    gameobj.createLetter(5)
    // gameobj.run();

    // let gameobj=new Game(screen,bgmusic,life,jf,flag)


}