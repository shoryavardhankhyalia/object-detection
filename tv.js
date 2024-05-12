img = "";
function preload()
{
    img = loadImage("tv.jpg");
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
    text("TV", 145 , 155);
    text("AC", 175 , 19);
    stroke("#ff0000");
    noFill();
    rect(170 ,5 , 280 ,100);
    rect(140 ,140 , 360 ,195);


}