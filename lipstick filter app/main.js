nosex=0;
nosey=0;
function preload(){
    lips = loadImage("https://i.postimg.cc/fbYfmTXt/24888-7-lips-thumb.png");
}
function setup(){
    canvas = createCanvas(390,355);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(390,355);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',getPoses);
}
function draw(){
    image(video,0,0,390,355);
    image(lips,nosex,nosey,50,50);
    
}
function modelLoaded(){
    console.log("PoseNet is loaded");
}
function take_snapshot(){
    save("myFilterImage.png");
}
function getPoses(results){
    if(results.length > 0){
        console.log(results);  
        nosex = results[0].pose.nose.x-15;
        nosey = results[0].pose.nose.y+10;
        console.log(nosex);
        console.log(nosey);
    }
}