function setup(){
    canvas=createCanvas(640,420)
    canvas.center()
    objectDetector=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML="status:detecting objects"
}
status="";
objects=[];
function modelLoaded(){
    console.log("model Loaded");
    status="true";
    objectDetector.detect(img,gotResults)
}
function gotResults(error,results){
    if(error){
        console.log(error);

    }
    console.log(results);
    objects=results
}
function preload(){
    img=loadImage("living roo m.jpg");
}
function draw(){
    image(img,0,0,640,420);
   if(status!=""){

   }
}