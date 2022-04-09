function returntopage(){
    window.location="index.html";
}
var img="";
status="";
function preload(){
    img= loadImage("jcevo9.jpg");
}
function setup(){
    canvas= createCanvas(600, 480);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}
function draw(){
     fill("#FF0000");
     text("Car", 210, 210);
     noFill();
     stroke("#FF0000");
     rect(200, 200, 400, 300);
}