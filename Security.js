class Security {

    constructor(){
 
        this.access1 = createInput("Code1")
        this.access1.position(500,90);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(500,120);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Code2")
        this.access2.position(500,190);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(500,220);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("Code3")
        this.access3.position(500,290);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Check');
        this.button3.position(500,320);
        this.button3.style('background', 'lightgrey'); 

        this.access4 = createInput("Code4")
         this.access4.position(500,400);
        this.access4.style('background', 'white');  

        this.button4 = createButton('Check');
        this.button4.position(500,420);
        this.button4.style('background', 'lightgrey'); 

        this.access5 = createInput("Code5")
         this.access5.position(500,500);
        this.access5.style('background', 'white');  

        this.button5 = createButton('Check');
        this.button5.position(500,520);
        this.button5.style('background', 'lightgrey'); 
    }

    display(){
        this.score=0;
        this.button1.mousePressed(() => {
            if(security.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                this.score++;
                console.log(this.score)
        //         textSize(20);
        // fill("white");
        // text("Score: " +this.score, 450, 50);
            }
        });

        this.button2.mousePressed(() => {
            if(security.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                this.score++;

                console.log(this.score)
                // textSize(20);
                // fill("white");
                // text("Score: " +this.score, 450, 50);
            }
        });

        this.button3.mousePressed(() => {
            if(security.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                this.score++;
                console.log(this.score)
                // textSize(20);
                // fill("white");
                // text("Score: " +this.score, 450, 50);
               
            }
        });
        
        this.button4.mousePressed(() => {
            if(security.authenticate(accessCode4,this.access4.value())){
                this.button4.hide();
                this.access4.hide();
                this.score++;
                console.log(this.score)
                // textSize(20);
                // fill("white");
                // text("Score: " +this.score, 450, 50);
                
            }
        });
        this.button5.mousePressed(() => {
            if(security.authenticate(accessCode5,this.access5.value())){
                this.button5.hide();
                this.access5.hide();
                this.score++;
                console.log(this.score)
                textSize(20);
                fill("white");
                text("Score: " +this.score, 450, 50);
                if(this.score === 5) {
                    clear()
                   
                    fill("black")
                    textSize(40);
                    text("TREASURE UNLOCKED",250, 200);
                    home2();
                  }
            }
        });
        
  
    }


 authenticate(actualCode,enteredCode){
    textSize(50);
    fill("black");
    // text(code,300,300)
    if(actualCode === enteredCode.toUpperCase()) 
        return true
    else
        return false
}


}