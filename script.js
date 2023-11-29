var timer =60;
var score =0;
var hitrn = 0;

function increasescore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}



function getHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}


function makebubble(){
    var clutter = " ";
    for(var i =1; i<=68; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer(){

    var timerint= setInterval(function(){
     if(timer>0) {
    timer--;
    document.querySelector("#timervalue").textContent = timer;
    }else{
        clearInterval(timerint);
        // document.querySelector("#pbtm").innerHTML =`<h1><\h1>`;
    }
    },1000);
     
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent); 
    if(clickednum === hitrn){
        increasescore();
        makebubble();
        getHit();
    }
});




getHit();
makebubble();
runTimer();



