var drumButtons = document.querySelectorAll(".drum");

for(var i=0; i<drumButtons.length; i++){
    drumButtons[i].addEventListener("click", function (event){
        var buttonText = this.innerHTML;
        handleClick(buttonText);
        buttonAnimate(buttonText.toLowerCase());
    });
}

document.addEventListener("keydown", function (event){
    //console.log(event);
    handleClick(event.key);
    buttonAnimate(event.key.toLowerCase());
});

function handleClick(buttonText){
    //this.style.color = "white";
    //this.setAttribute("style", "color: white");
    switch (buttonText.toLowerCase()) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        default:
            console.log(this);
            break;
    }
}

function buttonAnimate(currentKey){
    var pressedButton = document.querySelector("."+currentKey);
    pressedButton.classList.toggle("pressed");

    setTimeout(function (){
        pressedButton.classList.remove("pressed");
    },100);
}