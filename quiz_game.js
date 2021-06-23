player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("question_turn").innerHTML = " Question turn : " + player1_name;
document.getElementById("answer_turn").innerHTML = " Answer turn : " + player2_name;



function send() {
    number1 = document.getElementById("inp_num_1").value;
    number2 = document.getElementById("inp_num_2").value;
    answer = parseInt(inp_num_1) * parseInt(inp_num_2);
    question = "<h4 id='question'>" + number1 + " x " + number2 + "</h4>";
    answer_input = "<br> <br>Answer: <input type='number' id='answer_input' placeholder='Type your answer'>";
    check_button = "<br><br> <button id='check_btn' onclick='check()'> Check </button <br><br><br> <br><br><br>";
    row = question + answer_input + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("inp_num_1").value = "";
    document.getElementById("inp_num_2").value = "";
}