img = "";
function preload()
{
    img = loadImage("product-jpeg.jpg");
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
    text("Bed", 100 , 195);
    text("Fan", 140 , 35);
    text("Lamp", 395 , 222);
    stroke("#ff0000");
    noFill();
    rect(90 ,180 , 320 ,150);
    rect(130 ,20 , 270 ,70);
    rect(390 ,210 , 80 ,70);


}