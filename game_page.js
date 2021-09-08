player1_name = localStorage.getItem("player1-Name");
player2_name = localStorage.getItem("player2-Name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1Name").innerHTML = player1_name + " : ";
document.getElementById("player2Name").innerHTML = player2_name + " : ";

document.getElementById("player1Score").innerHTML = player1_score ;
document.getElementById("player2Score").innerHTML = player2_score ;

document.getElementById("questionTurn").innerHTML="Question Turn: "+ player1_name;
document.getElementById("AnswerTurn").innerHTML="Answer Turn: "+player2_name;

number1=document.getElementById("number1").value;
number2=document.getElementById("number").value;
actual_answer=parseInt(number1)*parseInt(number2);


function send(){



    question_number="<h3 id='question'>" + number1 + "x" + number2 + "</h3>";
    input_box="<br> Answer: <input type='number' id='input_check_box' placeholder='type your answer here'>";
    check_button="<br><br> <button class= 'btn btn-info' onclick='check()'> Check </button>";

    row=question_number+input_box+check_button;

    document.getElementById("output").innerHTML=row;

    document.getElementById("number1").value="";
    document.getElementById("number").value="";
}

question_turn="player1";
answer_turn="player2";

function check(){
   
    getanswer=document.getElementById("input_check_box").value;
    console.log(getanswer);

    if(getanswer==actual_answer)
    {
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1Score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2Score").innerHTML=player2_score;
        }

    }

    if(question_turn=="player1")
    {
        question_turn="player2";
        document.getElementById("questionTurn").innerHTML="Question Turn: "+ player2_name;
    }
    else{
        question_turn="player1";
        document.getElementById("questionTurn").innerHTML="Question Turn: "+ player1_name;
    }

    if(answer_turn=="player1")
    {
        answer_turn="player2";
        document.getElementById("AnswerTurn").innerHTML="Answer Turn: "+player2_name;
    }
    else{
        answer_turn="player1";
        document.getElementById("AnswerTurn").innerHTML="Answer Turn: "+player1_name;
    }

    document.getElementById("output").innerHTML="";


}

