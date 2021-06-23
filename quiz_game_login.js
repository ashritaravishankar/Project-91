var name_of_player1 = "player1_name_input";
var name_of_player2 = "player2_name_input";

function adduser(){
    name_of_player1 = document.getElementById("player1_name_input").value;
    name_of_player2 = document.getElementById("player2_name_input").value;
    localStorage.setItem("name_of_player1", name_of_player1);
    localStorage.setItem("name_of_player1", name_of_player1);
    window.location.replace("quiz_game.html");

}

