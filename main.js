prediction1="";
prediction2="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log("ml5 :",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qKvlGFjIG/model.json',modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}
function speak(){
    var synth=window.speechSynthesis;
    speakdata1="The First Prediction is"+prediction1;
    speakdata2="The Second Prediction is"+prediction2;
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterthis);
}