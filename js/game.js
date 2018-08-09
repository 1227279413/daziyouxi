class Game{
    constructor(){
        //构造函数
        this.screen = ""
        this.life=""
        this.jf=""
        this.bgmusic=""
        this.flag=""
        this.letterbox=[]
        this.bnnum=0;
        this.renum=10;
        this.sudu=.1
        this.deach="";
        this.text="";
    }
    init(){
        this.jf.innerText=0;
        this.life.innerText=10;
        this.bgmusic.className="Astart"
        this.flag.className="end"

        this.bnnum=0;
        this.renum=10;
        this.sudu=.1
        this.t=""

        this.deach.style.display="none"

        this.screen.innerHTML=""
        this.letterbox=[]
    }


    createLetter(num=1){
        for(let i=0;i<num;i++){
            let obj={}
            let letter="";
            let left="";
            //判断字母重复
            do{
                let ascii = Math.floor(Math.random()*26+65)
                // A-Z ASCII值
                letter = String.fromCharCode(ascii)
            }while(this.ishas(letter))
            obj.name=letter;

            let div = document.createElement("div")
            div.className = "letter"
            div.style.backgroundImage = `url(img/A_Z/${letter}.png)`


            //判断位置重复
            do{
                left=Math.random()*5.7+.6
            }while(this.isleft(left))

            div.style.left=left+"rem";
            obj.left=left;

            obj.top=.9
            obj.node=div

            this.screen.appendChild(div)
            this.letterbox.push(obj)
            // console.log(this.letterbox);
        }
    }
    ishas(name){
        for(let item of this.letterbox){
            if(name==item.name){
                return true;
            }
        }
        return false;
    }
    isleft(left){
        for(let item of this.letterbox){
            if(Math.abs(left-item.left)<.53){
                return true;
            }
        }
        return false;
    }
    run(){
        this.t=setInterval(()=>{
            this.letterbox.forEach((item,index)=>{
                item.top+=this.sudu;
                if(item.top>=7.5){
                    this.letterbox.splice(index,1)
                    this.screen.removeChild(item.node)
                    this.renum--
                    this.remove();
                    this.createLetter()
                }
                item.node.style.top=item.top+"rem";
            })
        },200)
    }
    add(){
        this.jf.innerText=this.bnnum
        this.bnnum>10?this.sudu+=this.sudu/100:this.sudu=.1;
    }
    remove(){
        this.life.innerText=this.renum;
        if(this.renum==0){
           this.deach.style.display="block"
           this.text.innerText =this.jf.innerText
            this.renum=10;
            // clearInterval(this.t)
            this.pause();
        }
    }
    key(name){
        this.letterbox.forEach((item,index)=>{
            if(item.name==name){
                this.letterbox.splice(index,1)
                this.screen.removeChild(item.node)
                this.bnnum++
                this.add()
                this.createLetter()
            }
        })
    }
    pause(){
        clearInterval(this.t)
    }
}