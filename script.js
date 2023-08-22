
let value = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score +=10;
    document.querySelector(".score").textContent = score;
}
function getNewHit(){
    hitrn =  Math.floor(Math.random()*10);
   document.querySelector(".hit").textContent = hitrn;

}

function makeBubble(){
    let clutter = ""

for(let i = 0;i<=70;i++){
    let rn = Math.floor(Math.random()*10);
    clutter += `<div class="circle">${rn}</div>`

}

document.querySelector(".bottom-div").innerHTML = clutter;
}


function runTimer(){
    var timer = setInterval(function(){
        if( value >0){
            value--;
            document.querySelector(".timers").textContent = value;

        }else{
            clearInterval(timer);
             document.querySelector(".small-div").innerHTML =" `<h1>GAme over </h1>";
         

        }
        

    },1000)
}
document.querySelector(".small-div").addEventListener("click",function(dets){
   clickednumber=((Number(dets.target.textContent)))
  if(clickednumber === hitrn){
    increaseScore();
makeBubble();
getNewHit();
    
  }
})


runTimer();

makeBubble();
getNewHit();

