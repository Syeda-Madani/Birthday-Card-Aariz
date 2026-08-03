window.onload = function () {

    confetti({

        particleCount:180,

        spread:180,

        origin:{y:0.6}

    });

}


let slides=document.querySelectorAll(".slide");

let index=0;

setInterval(function(){

    slides[index].classList.remove("active");

    index++;

    if(index>=slides.length){

        index=0;

    }

    slides[index].classList.add("active");

},3000);

document.getElementById("giftBtn").onclick=function(){

    document.getElementById("giftMessage").style.display="block";

    confetti({

        particleCount:250,

        spread:180,

        origin:{y:0.6}

    });

}

document.getElementById("musicBtn").onclick=function(){

    document.getElementById("song").play();

}