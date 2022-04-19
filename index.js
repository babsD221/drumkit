function playSound(keyValue) {
    let sound;
    switch(keyValue) {
        case "w":
             sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case "a":
            sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case "s":
            sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        
        case "d":
            sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
        case "j":
            sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case "k":
                sound = new Audio("sounds/kick-bass.mp3");
                sound.play();
                break;
        case "l":
            sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(keyValue){
    let activeButton = document.querySelector("." + keyValue);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");},300);
}

numberOfButtons = document.querySelectorAll(".drum").length;
console.log(numberOfButtons);
for(let i = 0; i< numberOfButtons;i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){ 
        let buttonInnerHTML = this.innerHTML;
        let sound;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}



document.addEventListener("keydown",function(event){
    playSound(event.key);
    buttonAnimation(event.key);
});
