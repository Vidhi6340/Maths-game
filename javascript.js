var playing = 'false';
var score;
var action;
var correctAnswer;
var timeremaining;
var correctPosition;
//if we click on the start/reset button
document.getElementById("startreset").onclick = function(){
    //if we are playing
    if(playing==true){
        //reload page
        location.reload();
    }else{   //if we are not playing
        
        //change mode to playing
        playing = true;
        
       //set score to 0
       score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        //show countdown box
        document.getElementById("timeremaining").style.display = "block";
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
        //hide game over box
        hide("gameover");
        document.getElementById("startreset").innerHTML = "Reset Game";
        
        //start countdown
        
        startcountdown();
        
        //generate Q&A
        
        generateQA();
        
    }
    
}
    
for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick = function(){
    //check if we are playing
    if(playing == true){
        //yes
        if(this.innerHTML == correctAnswer){
           
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            hide("wrong");
             show("correct");
            setTimeout(function(){
                hide("correct")
            },1000);
            
            generateQA();
        }else{
            show("wrong");
            hide("correct");
            setTimeout(function(){
                hide("wrong")
            },1000);
        }
    }
}

}
//if we click on an answer box
    //if we rae playing
          //correct?
              //yes
                //increase score by 1
                //generate new Q&A
              //no
                 //show try again box for 1 sec
 //reduce time by 1 sec in loops
             //timeleft?
 //yes->continue


//function
//start counter
function startcountdown(){
    action=setInterval(function(){
        timeremaining -=1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
          if(timeremaining==0){
              //game over
             stopCountDown();
              show("gameover");
              document.getElementById("gameover").innerHTML = "<p>Game Over!</p><p>Your Score is " + score +".</p>";
             hide("timeremaining");
              hide("correct");
              hide("wrong");
              playing = false;
              document.getElementById("startreset").innerHTML = "Start Game";
          }
    },1000)
}

//stop the counter
function stopCountDown(){
    clearInterval(action);
   
}

function hide(Id){
    document.getElementById(Id).style.display = "none";
}

function show(Id){
    document.getElementById(Id).style.display = "block";
}

function generateQA(){
    var x= Math.round(Math.random()*9)+1;
    var y= Math.round(Math.random()*9)+1;
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "X" + y;
    correctPosition = Math.round(Math.random()*3)+1;
    //filling 1 box with the correct answer
    document.getElementById("box" + correctPosition).innerHTML = correctAnswer;
    //fill other boxes with wrong answer
    var answers = [correctAnswer];
    
    for(i=1;i<5;i++){
        if(i!= correctPosition){
            var wronganswer;
           do{
                wronganswer = (Math.round(Math.random()*9)+1)*(Math.round(Math.random()*9)+1);
            } while(answers.indexOf(wronganswer)>-1)
                
            document.getElementById("box"+ i).innerHTML = wronganswer;
            answers.push(wronganswer);
        }
    }
}