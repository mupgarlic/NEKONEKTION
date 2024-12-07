var score = 0;
var counter = 0;

var questions = [
    "What type of fight would you like to be in?",
    "What is your favourite type of music?",
    "What is your favourite color?",
    "What is your favourite sport?",
    "What profession do you wish you had?",
    "What color of socks are you wearing?",
    "What kind of underwear do you prefer?",
    "What would be your dream date?",
    "What would be for you the perfect vacation?",
    "What is your favourite subject in school?",
    "Do you consider yourself loyal?",
    "What is your favourite hobby?",
    "What is your favourite animal?",
    "Would you rather roller blade, skateboard or walk?",
    "PC, console or both?",
    "What would you do if your date was late?",
    "What would be your favourite present?",
    "What do you want on a first date?",
    "What would you do with a million dollars?",
    "Where would you like to live?",
    "What is most important to you about a person?",
    "What is your favourite type of movie?",
    "If you could have one ride, what would it be?",
    "What would you want with you on a deserted island?",
];

var randomQ = Math.floor(Math.random() * questions.length);
document.getElementById("question").innerHTML = (questions[randomQ]);

function checkScore() {
    if (score > 5) {
        document.getElementById("result").innerHTML = "She likes you!";
        document.getElementById("zery").src = "/assets/Win---Zery.png";
        document.body.style.backgroundColor = "#843880";
    }

    if (score < 5) {
        document.getElementById("result").innerHTML = "She doesn't like you...";
        document.getElementById("zery").src = "/assets/Lose---Zery.png";
        document.body.style.backgroundColor = "#843880";
    }
}

function answer() {
    
    if (Math.random() > 0.5) {
        document.getElementById("result").innerHTML = "She liked your answer!";
        document.getElementById("zery").src = "/assets/Flirt---Zery.gif";
        score++;
    }

    else {
        document.getElementById("result").innerHTML = "She didn't liked your answer that much...";
        document.getElementById("zery").src = "/assets/Mad---Zery.gif";
    }

    var randomQ = Math.floor(Math.random() * questions.length);
    document.getElementById("question").innerHTML = (questions[randomQ]);

    counter++;

    if (counter === 10) {
        checkScore();
        document.getElementById("question").remove();
        document.getElementById("game").remove();
    }
}