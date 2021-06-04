var left = document.querySelector(".latleft");
var right = document.querySelector(".latright");
var middle = document.querySelector(".middlebar");

window.addEventListener('load', function(){


    function animacionLeft(){
        left.animate([
            {transform: 'translateX(0%)'},
            {transform: 'translateX(-100%)'}
        ],{
            duration: 2000,
        },{
            easing: "ease-in",
        });
    }

    function animacionRight(){
        right.animate([
            {transform: 'translateX(0%)'},
            {transform: 'translateX(100%)'},
        ],{
            duration: 2000,
        },{
            easing: "ease-in",
        });
    }

    function animacionMiddle(){
        middle.animate([
            {transform: 'translateY(100%)'},
            {transform: 'translateY(0%)'}
        ],{
            duration: 3000
        },{
            easing: "ease-out",
        });
    }

    function opacitymiddle(){
        middle.animate([
            {opacity: 1},
            {opacity: 1},
            {opacity: 0}
        ],{
            duration: 4000
        });
    }
    middle.style.opacity = 0;
    setTimeout(animacionLeft, 3000);
    setTimeout(animacionRight, 3000);
    opacitymiddle();
    animacionMiddle();

    document.addEventListener('click', () =>{
        console.log(event.clientX);
        console.log(event.clientY);
    })
        












})