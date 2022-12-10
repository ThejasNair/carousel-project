var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function dude() {
    synthesis = window.speechSynthesis;
    var speaking = "Hi, thank you for using selfie application. Click on button to start.";
 var ok = new window.SpeechSynthesisUtterance(speaking);
 synthesis.dude(ok);
}

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    if(Content == "take my selfie") {
        speak();
    }
    
}

function speak() {
    var synth = window.speechSynthesis;
    var speak_data = "Taking selfie in 5 seconds";
    var utterThis = new window.SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function()
    {
        take_selfie();
        save();
       
}, 5000);
}

camera = document.getElementById("camera");
Webcam.set({
    height: 360,
    width: 240,
    image_format: 'png',
    png_quality: 90
});

function take_selfie() {
    Webcam.snap(function(data_url) {
     document.getElementById("selfieDisplayYes").innerHTML = '<img id="donthavetime" src="'+data_url+'">';
    });

}

function save() {
    link = document.getElementById("link")
    image = document.getElementById("donthavetime").src;
    link.href = image;
    link.click();
}

function wassup() {
    document.getElementById("dominus").innerHTML = "wow amazing app id hire him whoever made this he must be the coolest dude on earth - Dwayne The Rock Johnson";
    setTimeout(hey, 5000);
}

function hey() {
    document.getElementById("dominus").innerHTML = "this app is so great, my selfie looks awesome. I bet if the guy who made this ran for president he would win easily - President Joe Biden";
    setTimeout(hello, 5000);
}

function hello() {
    document.getElementById("dominus").innerHTML = "selfie after selfie i took. It saved automatically, great app. Would the man who made this app please accept my offer to be hired into Space X? - Elon Musk";
    setTimeout(wassup, 5000);
}

