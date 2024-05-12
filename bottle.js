img = "";
function preload()
{
    img = loadImage("IMG_4426-edited-scaled.jpeg");
}
function setup()
{
    canvas = createCanvas(600 , 350);
    canvas.center();
}
function draw()
{
    image(img , 0 , 0 , 600 , 350);
    fill("#ff0000");
    text("Bottle", 215 , 90);
    stroke("#ff0000");
    noFill();
    rect(210 ,70 , 150 ,250);


}