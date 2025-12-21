const DIRECTIONS = [-1, 1]
class Ant {
    constructor(x = 0, y = 0) {
        this.x = x ;
        this.y = y;
        this.width = 40;
        this.height = 40;
        this.color = "red";
        this.directionX = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
        this.directionY = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
        this.speedX = 1;
        this.speedY = 1;
        this.isDead = false;
        this.smash = new Audio("./antdead.ogg");
        this.image = new Image();
        this.image.src = "./spider01.png"
        this.imageIndex = 0;
    }

    get left() {
        return this.x;
    }

    get right() {
        return this.x + this.width;
    }

    get top() {
        return this.y;
    }

    get bottom() {
        return this.y + this.height;
    }

    
    draw(ctx) {
        ctx.beginPath();
        if(this.isDead==true)
        {
            ctx.drawImage(this.image,3*64,4*64,64,64,this.x, this.y, this.width, this.height);
        }
        else{

            ctx.drawImage(this.image,this.imageIndex*64,0,64,64,this.x, this.y, this.width, this.height);
        }
    }

    isPointingAtMe(mouseX, mouseY,ctx) {
        
        if(this.isDead == true) {
            return;
        }
        if(mouseX > this.left && mouseX < this.right && mouseY > this.top && mouseY <  this.bottom) {
            this.speedX = 0;
            this.speedY  = 0;
            this.smash.play();
            this.isDead = true;
            return true;
        }

    }

    update() {
        
        this.x += this.speedX * this.directionX;
        this.y += this.speedY * this.directionY;
      }

    checkBorderCollision(canvas) {
        if(this.right > canvas.width || this.left < 0) {
            this.directionX *= -1;
        }

         if(this.bottom > canvas.height || this.top < 0) {
            this.directionY *= -1;
        }

    }
}

export default Ant;