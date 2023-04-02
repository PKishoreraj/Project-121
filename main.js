Webcam.set({width:350,height:300,image_format:'png',png_quality:90});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHMTL='<img id="captured_image" src="'+data_uri+'"/>';
    })
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/IcmSO4yHj/model',modelLoaded);
function modelLoaded(){
    console.log('Model Loaded!');
}
function cheak(){
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The first prediction is:"+prediction_1;
    speak_data_2="The second prediction is:"+prediction_2;
    utterThis.rate=0.5;
    synth.synth(utterThis);
}
function gotResult(){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result emotion name").innerHTML=results[0].label;
        document.getElementById("result emotion name2").innerHTML=results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[0].label;
        speak();
        if(results[0].label=="happy"){
            document.getElementById("update_emoji").innerHTML="&#128522;";
        }
        if(results[0].label=="sad"){
            document.getElementById("update_emoji").innerHTML="&#128532;";
        }
        if(results[0].label=="angry"){
            document.getElementById("update_emoji").innerHTML="&#128548;";
        }
        if(results[1].label=="happy"){
            document.getElementById("update_emoji2").innerHTML="&#128522;";
        }
        if(results[1].label=="sad"){
            document.getElementById("update_emoji2").innerHTML="&#128532;";
        }
        if(results[1].label=="angry"){
            document.getElementById("update_emoji2").innerHTML="&#128548;";
        }
    }
}