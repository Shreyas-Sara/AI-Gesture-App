noseX = "";
noseY = "";
difference = "";
RwristX = "";
LwristY = "";

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 80);

    posenet = ml5.poseNet(video, modalLoaded);
    posenet.on('pose', allposes);
}

function modalLoaded(){
    console.log('modal loaded successful');
}

function allposes(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        RwristX = results[0].pose.leftWrist.x;
        LwristX = results[0].pose.leftWrist.x;
        difference = floor(LwristX - RwristX);
    }
}

function draw(){
    document.getElementById('measure').innerHTML = "The Height and Width of Square is " + difference + "px";
    fill("blue");
    stroke("black");
    square(noseX, noseY, difference);
}