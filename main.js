import Ant from "./ant.js";

const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");


let n=20;
const antCount= document.getElementById("antCount");

antCount.innerHTML="Remaining 🐜🐜🐜  :"+n;

const ants = [];


for (let i = 0; i < n; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    ants.push(new Ant(x, y));
}






function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);



    for (let i = 0; i < ants.length; i++) {
        for (let j = i + 1; j < ants.length; j++) {
            const ant1 = ants[i];
            const ant2 = ants[j];

            if (ant1.right > ant2.left && ant1.left < ant2.right &&
                ant1.top < ant2.bottom && ant1.bottom > ant2.top
            ) {
                ant1.directionX *= -1;
                ant1.directionY *= -1;
                ant2.directionX *= -1;
                ant2.directionY *= -1;
            }
        }

        ants[i].checkBorderCollision(canvas);
        ants[i].update();
        ants[i].draw(ctx);
    }

    requestAnimationFrame(gameLoop)
}

gameLoop();

let time = 0;
let timerInterval;

const timerDiv = document.getElementById("timer");


timerInterval = setInterval(() => {
    time++;
    timerDiv.textContent = "Time: " + time + "s";
}, 1000);

const timeTaken= document.getElementById("timeTaken");
canvas.addEventListener("click", function(event) {
   for(let i  = 0; i < ants.length; i++) {
    if(ants[i].isPointingAtMe(event.x, event.y,ctx)){
        n--;
        antCount.innerHTML="Remaining 🐜🐜🐜  :"+n;
        if(n==0){
            clearInterval(timerInterval);
            timeTaken.textContent="Time Taken:"+time+"s";
        }
        break;
    }
   }
})

setInterval(function() {
      for(let i  = 0; i < ants.length; i++) {
    ants[i].imageIndex++;

    if(ants[i].imageIndex >2) {
        ants[i].imageIndex = 0;
    }
   }
}, 100)





