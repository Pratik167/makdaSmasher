const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const kick1 = document.getElementById("Kick1");
const kick2 = document.getElementById("Kick2");
const snare = document.getElementById("snare");




kick1.addEventListener("click", () => playMusic("kick.ogg"));
kick2.addEventListener("click", () => playMusic("kick.ogg"));
snare.addEventListener("click", () => playMusic("snare.ogg"));


function playMusic(music) {
    let audio = new Audio(music);
    audio.play();
}

document.addEventListener("keydown",(event)=>{
    if(event.key=="h")
    {
        playMusic("kick.ogg");
    }
})