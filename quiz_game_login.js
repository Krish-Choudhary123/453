function addUser()
{
    var Value1 = document.getElementById("player1_name_input").value;
    var Value2 = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_key", Value1 );
    localStorage.setItem("player2_key", Value2);

    window.location = "quiz_game_page.html";
}