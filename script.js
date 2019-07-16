const canvas = document.querySelector('#canvas');
const out = document.querySelector('#out');
const outPi = document.querySelector('#outPI');

ctx = canvas.getContext('2d');
ctx.fillRect(0, 0, 500, 500)
ctx.strokeStyle = "#FF0000";
ctx.beginPath();
ctx.arc(250, 250, 250, 0, 2 * Math.PI);
ctx.stroke()

hits = {in: 0, out: 0}

function random(min, max){
  return Math.floor(Math.random() * max) + min
}

function randPoint(){
  return [random(0, 500), random(0, 500)]
}

function drawPoint(x, y){
  ctx.fillStyle = "#0062ff";
  ctx.fillRect(x, y, 3, 3)
}

function inCirc(x, y){
  return (x - 250)**2 + (y - 250)**2 < 250**2
}

function randomPoints(max){
  for(let i = 0; i < max; i++){
    const point = randPoint();
    if(inCirc(point[0], point[1])) hits.in++;
    else hits.out++;
    const total = hits.in + hits.out
    out.innerHTML = `Circle: ${hits.in} Square: ${hits.out} Total: ${total}`;
    const pi = 4*hits.in / (hits.in + hits.out);
    outPI.innerHTML = `Supposed Pi: ${pi}`;
    drawPoint(point[0], point[1]);
  }
}
