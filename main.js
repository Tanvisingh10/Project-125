leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
video = createCapture(VIDEO);
video.size(370,300);
video.position(35,100);

canvas = createCanvas(450, 400);
canvas.position(560,100);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is initialized');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
    }
function draw(){
    background('#F72EEB');
    textSize(difference);
    fill('#F6F605');
    text('Tanvi', 50, 200);
}