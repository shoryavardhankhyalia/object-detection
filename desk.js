img = "";
function preload()
{
    img = loadImage("table.jpg");
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
    text("Desk", 40 , 190);
    text("Chair", 260 , 183);
    stroke("#ff0000");
    noFill();
    rect(30 ,177 , 250 ,170);
    rect(250 ,170 , 100 ,130);


}