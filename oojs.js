class Shape{

constructor(x,y){

this.x = x
this.y = y

}

move(){

this.x += 2
this.y += 2

}

}


class Ball extends Shape{

constructor(x,y,color){

super(x,y)

this.color = color

this.element = document.createElement("div")

this.element.style.width = "40px"
this.element.style.height = "40px"
this.element.style.borderRadius = "50%"
this.element.style.background = color
this.element.style.position = "absolute"

document.body.appendChild(this.element)

}

draw(){

this.element.style.left = this.x + "px"
this.element.style.top = this.y + "px"

}

}


let ball = new Ball(50,50,"red")


function animate(){

ball.move()

if(ball.x > window.innerWidth-40) ball.x = 0
if(ball.y > window.innerHeight-40) ball.y = 0

ball.draw()

requestAnimationFrame(animate)

}

animate()