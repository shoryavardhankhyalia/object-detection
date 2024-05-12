img = "";
function preload()
{
    img = loadImage("images.jpg");
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
    text("Fruit Basket", 125 , 135);
    stroke("#ff0000");
    noFill();
    rect(120 ,120 , 330 ,195);


}