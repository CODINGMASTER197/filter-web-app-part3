noseX=0;
noseY=0;

function preload(){
mustache =loadImage('https://i.postimg.cc/4NCM7KpW/mustache-image.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
if (results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x, 50;
    noseX = results[0].pose.nose.y, 50;   
    console.log("nose x = " + noseX );
    console.log("nose y = " + noseY);
    }
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
image(video, 0, 0, 300, 300,);
fill(255,0,0);
stroke(255,0,0);
image(mustache,noseX,noseY,30,30);
}

function take_snapshot(){
    save('ur ugly.png');
}