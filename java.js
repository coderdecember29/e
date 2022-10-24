moustachex = 0;
moustachey = 0;
function preload()
{
clown_nose = loadImage("https://www.freepnglogos.com/uploads/mustache-png/mustache-student-math-favorite-for-friday-the-the-1.png");
}

function setup()
{
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function takesnapshot()
{
    save('image.png');
}


function gotPoses(results)
{
    if(results.length > 0 )
    {
        console.log(results);
        moustachex = results[0].pose.moustache.x - 15;
        moustachey = results[0].pose.moustache.y - 10;
        console.log("moustache x = " + moustachex);
        console.log("moustache y = " + moustachey);
    }
}






function draw()
{

}

function modelLoaded()
{
    console.log('PoseNet Is Initialized'); 
}