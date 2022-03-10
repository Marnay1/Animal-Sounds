function start(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/qIe7-tdaQ/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("name_of_animal").innerHTML = 'This is a - ' + results[0].label + ' or this is a -' + results[1].label;
        document.getElementById("name_of_sound").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("name_of_animal").style.color = "rgb(" + random_number_r + "," + random_number_g+ "," + random_number_b+ ")";
        document.getElementById("name_of_sound").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b+ ")";

        img = document.getElementById("animal_image");

        if (results[0].label == "Bark") {
            img.src = "dog.jpg";
        } else if (results[0].label == "Meow") {
            img.src = "cat.jpg";
        } else if (results[0].label == "Roar") {
            img.src = "lion.jpg";
        } else if (results[0].label == "Background Noise") {
            img.src = "th (1).jpg";
        } else {
            img.src = "cow.jpg";
        }
    }
}