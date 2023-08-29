var score = 0;
var hitrn = 0;
var timer = 60;
function mybubble(){
    var clutter = "";
for(var i=1;i<=198;i++){  
    var rn = Math.floor(Math.random()*10);
    clutter  +=   `<div class="bubble"> ${rn} </div>`;
     /*isme agr ham sirf = ye lga denge to bss ek hi baar print hoga agr = iske aage + ye laga denge to saare bubble print honge*/
   
}
document.querySelector("#pbtm").innerHTML = clutter;
}
function mytimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").innerHTML = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER!<\h1>`
        }
    },1000)
}
function getnewhit(){
     hitrn =  Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML = hitrn;
}
function getnewscore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}
//click eventlistener me click ka c small rhega wrna phss jaaega code
document.querySelector("#pbtm").addEventListener("click", function(details){
    var clickednum = (Number(details.target.textContent));
    if(clickednum == hitrn){
        getnewscore();
        getnewhit();
        mybubble();
    }else{
        document.querySelector("#pbtm").innerHTML = `<h1>YOU HAVE CHOOSED THE WRONG NUMBER!! BETTER LUCK FOR NEXT TIME!</h1>`
    }
})
mytimer();
mybubble();
getnewhit();
