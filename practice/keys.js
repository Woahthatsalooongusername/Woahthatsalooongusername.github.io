const canvas = document.getElementById("myCanvas");
const ctx  = canvas.getContext("2d");

let x = 0;
let vx = 1;
let y = 0;
let vy = 1;
let gravity = 1;

function move(){ 
 12         ctx.clearRect(0,0,800,800);
 11         x = x + vx;
 10         y = y + vy;
  9         vy = vy + gravity;
  8         if (x > 750 || x < 0) {
  7                 vx = vx * -1;
  6         }
  5         if (y > 750 || y < 0) {
  4                 vy = vy * -1;
  3         }
  2 
  1         ctx.fillRect(x,y,50,50);
23          requestAnimationFrame(move);


move();

function handleKeyDown(e){
	console.log("e.key");
	if(e.key == "ArrowDown"){
	y = y + vy;
	} else if (e.key == "ArrowUp"){
	y = y - vy;
	} else if (e.key == "ArrowLeft"){
	x = x - vx
	} else if (e.key == "ArrowLeft"){
	x = x + vx;
}
}


document.addEventListener(`keydown`,handleKeyDown);

