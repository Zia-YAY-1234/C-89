Score = 0;
function updateScore(){
Score=Score+1;
document.getElementById("score").innerHTML="score: "+ Score;

}

function saveScore(){

    localStorage.setItem("score", Score);
}

function nextPage(){
    window.location="activity_2.html";
}