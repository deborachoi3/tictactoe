let currentPlayer = "X"
let totalNumber = 0
let gameEnd = false
let titleId = "h1"
function performLogic (buttonId, tileId){
    $(buttonId).hide();
    $(tileId).html(currentPlayer)
    totalNumber ++
    if (totalNumber === 9){
        $(titleId).html("It's a draw!")
    }
    // check if win

    changeTurn()
}

function winner (tileId1, tileId2, tileId3){
    if ($("#tileId1").val() === $("#tileId2").val()&& $("#tileId2").val() === $("#tileId3").val()) {
        return true
        
    }
}

function changeTurn (){
    if (currentPlayer == "X"){
        currentPlayer = "O"
    }
    else {
        currentPlayer = "X"
    }
}



$("#button1").click(function() {
    performLogic("#button1","#tile1");
});
$("#button2").click(function() {
    performLogic("#button2","#tile2");
});
$("#button3").click(function() {
    performLogic("#button3","#tile3");
});
$("#button4").click(function() {
    performLogic("#button4","#tile4");
});
$("#button5").click(function() {
    performLogic("#button5","#tile5");
});
$("#button6").click(function() {
    performLogic("#button6","#tile6");
});
$("#button7").click(function() {
    performLogic("#button7","#tile7");
});
$("#button8").click(function() {
    performLogic("#button8","#tile8");
});
$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

