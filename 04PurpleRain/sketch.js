var drops = [];

function setup() {
  createCanvas(1700, 800);
  for (var i = 0; i < 1000; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(230, 230, 250);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}
