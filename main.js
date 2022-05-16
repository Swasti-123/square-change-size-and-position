
noseX=0;
noseY=0;
difference=0;
rWx=0;
lWx=0;
function setup(){
    canvas=createCanvas(550, 500);
    canvas.position(800, 150);
    video= createCapture(VIDEO);
    video.size(550, 500);
    video.position(175,150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}

function draw(){
background("pink");
fill('#F90093');
stroke('F90093');
square(noseX, noseY, difference);
document.getElementById("square_side").innerHTML= "Side of the square = " + difference + " (px)"
}

function modelLoaded(){
    console.log("model is loaded")
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX = " + noseX + "noseY= " + noseY);
    lWx=results[0].pose.leftWrist.x;
    rWx=results[0].pose.rightWrist.x;
    difference= floor(lWx- rWx);
    console.log("left wrist x= " + lWx);
    console.log("right wrist x= " + rWx);
    console.log("difference between lWx and rWx" + difference);
}
}