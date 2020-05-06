let array = [];
let backgroundColor = [];

function setup() {
  createCanvas(600, 600);
  backgroundColor = color(296, 42, 49)
  background(backgroundColor);

  strokeWeight(5);

}

function draw() {
  if (mouseIsPressed){
    background(0);
    backgroundColor -= 5;
    background(backgroundColor);


    stroke(map(mouseX, 0, 600, 0, 255, true))
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY,);
    array.push([mouseX, mouseY]);

    beginShape();
    for(let i = 0; i < array.length; i++){
      line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      console.log(i);
    }
    endShape();
  }
}

function keyTyped(){
  console.log(`key ${key} is being typed`)
  console.log(`key ${key} is being typed`)
  if (key === 's'){

//save this image
  saveCanvas('fileName', 'png');
}
  else if (key === 'd'){
  //display image
  background(296, 42, 49);

  beginShape();
  for(let i = 0; i < array.length; i++){
    line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    console.log(i);
  }
  endShape();

}

  return false;
}

function mousePressed() {
  console.log("mouse pressed function");
  array = [];
  console.log(array)
  backgroundColor = 255;
}
