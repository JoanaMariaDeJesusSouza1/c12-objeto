// declara as variaveis sempre antes de tudo bem no inicio.

var box;

// configuraçâo.
function setup() {
  createCanvas(400, 400);

  box = {
    x:100,
    y:100,
    w:50,
    h:50,
    cor: ["blue","red","green","pink","yellow"],
    vx:2
  }


}
// faz o movimento do nosso jogo.
function draw() {
  background("darkblue");


  rectMode(CENTER);
  fill(box.cor[3])
  rect(box.x,box.y,box.w,box.h);
  //box.x = box.x + box.vx;
  box.x+=box.vx
  
}


