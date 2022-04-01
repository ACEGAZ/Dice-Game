//player and computer scores//
let playerScore = 1;
let computerScore = 1;


//6 sided dice game//
function showhideD6Game () {
    document.getElementById('d6-game').style.display = 'block';
    document.getElementById('start-menu').style.display = 'none';
} 

//play d6 game//

//show 6 sided dice game and hide start menu//
function playD6Game(){
    let d6PlayerRoll = Math.floor(Math.random() * 6) + 1;
    let d6ComputerRoll = Math.floor(Math.random() * 6) + 1;
      
//d6 images//    
    let d6DiceImageArray = [
                          img1 = 'assets/images/d6(1).png', 
                          img2 = 'assets/images/d6(2).png', 
                          img3 = 'assets/images/d6(3).png', 
                          img4 = 'assets/images/d6(4).png',
                          img5 = 'assets/images/d6(5).png',
                          img6 = 'assets/images/d6(6).png']                    

//display d6 images to player-result div//
     if (d6PlayerRoll === 1) {
    document.getElementById('d6-dice-image-one').src = d6DiceImageArray[0];
   } if (d6PlayerRoll === 2) {
    document.getElementById('d6-dice-image-one').src = d6DiceImageArray[1];
   } if (d6PlayerRoll === 3) {
    document.getElementById('d6-dice-image-one').src = d6DiceImageArray[2];
   } if (d6PlayerRoll === 4) {
    document.getElementById('d6-dice-image-one').src = d6DiceImageArray[3];
   } if (d6PlayerRoll === 5) {
    document.getElementById('d6-dice-image-one').src = d6DiceImageArray[4];
   } if (d6PlayerRoll === 6) {
    document.getElementById('d6-dice-image-one').src = d6DiceImageArray[5];

  //display d6 images to computer-result div//  
   } if (d6ComputerRoll === 1) {
    document.getElementById('d6-dice-image-two').src = d6DiceImageArray[0];
   } if (d6ComputerRoll === 2) {
    document.getElementById('d6-dice-image-two').src = d6DiceImageArray[1];
   } if (d6ComputerRoll === 3) {
    document.getElementById('d6-dice-image-two').src = d6DiceImageArray[2];
   } if (d6ComputerRoll === 4) {
    document.getElementById('d6-dice-image-two').src = d6DiceImageArray[3];
   } if (d6ComputerRoll === 5) {
    document.getElementById('d6-dice-image-two').src = d6DiceImageArray[4];
   } if (d6ComputerRoll === 6) {
    document.getElementById('d6-dice-image-two').src = d6DiceImageArray[5];
}
   
//determin if player has won or lost d6 game and remove elements to display win or lose message//
   if (d6PlayerRoll > d6ComputerRoll) {
       document.getElementById('d6-win-lose-draw').innerHTML = 'Win';
       document.getElementById('d6-player-score').innerHTML = playerScore++;
   } else if (d6PlayerRoll < d6ComputerRoll) { 
    document.getElementById('d6-win-lose-draw').innerHTML = 'Lose';
    document.getElementById('d6-computer-score').innerHTML = computerScore++;
   } else if (d6PlayerRoll === d6ComputerRoll) {
    document.getElementById('d6-win-lose-draw').innerHTML = 'Draw';
   } if (playerScore === 11) {
    document.getElementById('d6-winner-loser').innerHTML = 'You Win The Game!';
    document.getElementById('d6-roll-button').remove();
    document.getElementById('d6-player').remove();
    document.getElementById('d6-computer').remove();
    document.getElementById('d6-scores-wrapper').remove();
    document.getElementById('d6-result-wrapper').remove();
    document.getElementById('d6-win-lose-draw').remove();
   } 
   
   if (computerScore === 11) {
    document.getElementById('d6-winner-loser').innerHTML = 'You Lose The Game!';
    document.getElementById('d6-roll-button').remove();
    document.getElementById('d6-player').remove();
    document.getElementById('d6-computer').remove();
    document.getElementById('d6-scores-wrapper').remove();
    document.getElementById('d6-result-wrapper').remove();
    document.getElementById('d6-win-lose-draw').remove();
}
}

//10 sided dice game//

//show 10 sided dice game and hide start menu//
function showhideD10Game() {
    document.getElementById('d10-game').style.display = 'block';
    document.getElementById('start-menu').style.display = 'none';
  } 

  //play d10 game//
  function playD10Game(){
    let d10PlayerRoll = Math.floor(Math.random() * 10) + 1;
    let d10ComputerRoll = Math.floor(Math.random() * 10) + 1;
  
//d10 images//    
    let d10DiceImageArray = [
                          img1 = 'assets/images/d10(1).png', 
                          img2 = 'assets/images/d10(2).png', 
                          img3 = 'assets/images/d10(3).png', 
                          img4 = 'assets/images/d10(4).png',
                          img5 = 'assets/images/d10(5).png',
                          img6 = 'assets/images/d10(6).png', 
                          img7 = 'assets/images/d10(7).png',
                          img8 = 'assets/images/d10(8).png',
                          img9 = 'assets/images/d10(9).png',
                          img10 = 'assets/images/d10(10).png']                  

//display d10 images to player-result div//
     if (d10PlayerRoll === 1) {
    document.getElementById('d10-dice-image-one').src = d10DiceImageArray[0];
   } if (d10PlayerRoll === 2) {
    document.getElementById('d10-dice-image-one').src = d10DiceImageArray[1];
   } if (d10PlayerRoll === 3) {
    document.getElementById('d10-dice-image-one').src = d10DiceImageArray[2];
   } if (d10PlayerRoll === 4) {
    document.getElementById('d10-dice-image-one').src = d10DiceImageArray[3];
   } if (d10PlayerRoll === 5) {
    document.getElementById('d10-dice-image-one').src = d10DiceImageArray[4];
   } if (d10PlayerRoll === 6) {
    document.getElementById('d10-dice-image-one').src = d10DiceImageArray[5];
   } if (d10PlayerRoll === 7) {
    document.getElementById('d10-dice-image-one').src = d10DiceImageArray[6];
   } if (d10PlayerRoll === 8) {
    document.getElementById('d10-dice-image-one').src = d10DiceImageArray[7];
   } if (d10PlayerRoll === 9) {
    document.getElementById('d10-dice-image-one').src = d10DiceImageArray[8];
   } if (d10PlayerRoll === 10) {
    document.getElementById('d10-dice-image-one').src = d10DiceImageArray[9];
   

//display d10 images to computer-result div//
   } if (d10ComputerRoll === 1) {
    document.getElementById('d10-dice-image-two').src = d10DiceImageArray[0];
   } if (d10ComputerRoll === 2) {
    document.getElementById('d10-dice-image-two').src = d10DiceImageArray[1];
   } if (d10ComputerRoll === 3) {
    document.getElementById('d10-dice-image-two').src = d10DiceImageArray[2];
   } if (d10ComputerRoll === 4) {
    document.getElementById('d10-dice-image-two').src = d10DiceImageArray[3];
   } if (d10ComputerRoll === 5) {
    document.getElementById('d10-dice-image-two').src = d10DiceImageArray[4];
   } if (d10ComputerRoll === 6) {
    document.getElementById('d10-dice-image-two').src = d10DiceImageArray[5];
   } if (d10ComputerRoll === 7) {
    document.getElementById('d10-dice-image-two').src = d10DiceImageArray[6];
   } if (d10ComputerRoll === 8) {
    document.getElementById('d10-dice-image-two').src = d10DiceImageArray[7];
   } if (d10ComputerRoll === 9) {
    document.getElementById('d10-dice-image-two').src = d10DiceImageArray[8];
   }if (d10ComputerRoll === 10) {
    document.getElementById('d10-dice-image-two').src = d10DiceImageArray[9];
   }
  
//determin if player has won or lost d10 game and remove elements to display win or lose message//
   if (d10PlayerRoll > d10ComputerRoll) {
       document.getElementById('d10-win-lose-draw').innerHTML = 'Win';
       document.getElementById('d10-player-score').innerHTML = playerScore++;
   } else if (d10PlayerRoll < d10ComputerRoll) { 
    document.getElementById('d10-win-lose-draw').innerHTML = 'Lose';
    document.getElementById('d10-computer-score').innerHTML = computerScore++;
   } else if (d10PlayerRoll === d10ComputerRoll) {
    document.getElementById('d10-win-lose-draw').innerHTML = 'Draw';
   } if (playerScore === 11) {
    document.getElementById('d10-winner-loser').innerHTML = 'You Win The Game!';
    document.getElementById('d10-roll-button').remove();
    document.getElementById('d10-player').remove();
    document.getElementById('d10-computer').remove();
    document.getElementById('d10-scores-wrapper').remove();
    document.getElementById('d10-result-wrapper').remove();;
    document.getElementById('d10-win-lose-draw').remove();
   } 
   
   if (computerScore === 11) {
    document.getElementById('d10-winner-loser').innerHTML = 'You Lose The Game!';
    document.getElementById('d10-roll-button').remove();
    document.getElementById('d10-player').remove();
    document.getElementById('d10-computer').remove();
    document.getElementById('d10-scores-wrapper').remove();
    document.getElementById('d10-result-wrapper').remove();
    document.getElementById('d10-win-lose-draw').remove();
   }
}

//20 sided dice game//

//show 20 sided dice game and hide start menu//
function showhideD20Game() {
    document.getElementById('d20-game').style.display = 'block';
    document.getElementById('start-menu').style.display = 'none';
  } 

  //play d20 game//
  function playD20Game(){
    let d20PlayerRoll = Math.floor(Math.random() * 20) + 1;
    let d20ComputerRoll = Math.floor(Math.random() * 20) + 1;
     
//d20 images//
    let d20DiceImageArray = [
                          img1 = 'assets/images/d20(1).png', 
                          img2 = 'assets/images/d20(2).png', 
                          img3 = 'assets/images/d20(3).png', 
                          img4 = 'assets/images/d20(4).png',
                          img5 = 'assets/images/d20(5).png',
                          img6 = 'assets/images/d20(6).png', 
                          img7 = 'assets/images/d20(7).png',
                          img8 = 'assets/images/d20(8).png',
                          img9 = 'assets/images/d20(9).png',
                          img10 = 'assets/images/d20(10).png',
                          img11 = 'assets/images/d20(11).png', 
                          img12 = 'assets/images/d20(12).png', 
                          img13 = 'assets/images/d20(13).png', 
                          img14 = 'assets/images/d20(14).png',
                          img15 = 'assets/images/d20(15).png',
                          img16 = 'assets/images/d20(16).png', 
                          img17 = 'assets/images/d20(17).png',
                          img18 = 'assets/images/d20(18).png',
                          img19 = 'assets/images/d20(19).png',
                          img20 = 'assets/images/d20(20).png']                  

//display d20 images to player-result div//
     if (d20PlayerRoll === 1) {
    document.getElementById('d20-dice-image-one').src = d20DiceImageArray[0];
   } if (d20PlayerRoll === 2) {
    document.getElementById('d20-dice-image-one').src = d20DiceImageArray[1];
   } if (d20PlayerRoll === 3) {
    document.getElementById('d20-dice-image-one').src = d20DiceImageArray[2];
   } if (d20PlayerRoll === 4) {
    document.getElementById('d20-dice-image-one').src = d20DiceImageArray[3];
   } if (d20PlayerRoll === 5) {
    document.getElementById('d20-dice-image-one').src = d20DiceImageArray[4];
   } if (d20PlayerRoll === 6) {
    document.getElementById('d20-dice-image-one').src = d20DiceImageArray[5];
   } if (d20PlayerRoll === 7) {
    document.getElementById('d20-dice-image-one').src = d20DiceImageArray[6];
   } if (d20PlayerRoll === 8) {
    document.getElementById('d20-dice-image-one').src = d20DiceImageArray[7];
   } if (d20PlayerRoll === 9) {
    document.getElementById('d20-dice-image-one').src = d20DiceImageArray[8];
   } if (d20PlayerRoll === 10) {
    document.getElementById('d20-dice-image-one').src = d20DiceImageArray[9];
   } if (d20PlayerRoll === 11) {
    document.getElementById('d20-dice-image-one').src = d20DiceImageArray[10];
   } if (d20PlayerRoll === 12) {
    document.getElementById('d20-dice-image-one').src = d20DiceImageArray[11];
   } if (d20PlayerRoll === 13) {
    document.getElementById('d20-dice-image-one').src = d20DiceImageArray[12];
   } if (d20PlayerRoll === 14) {
    document.getElementById('d20-dice-image-one').src = d20DiceImageArray[13];
   } if (d20PlayerRoll === 15) {
    document.getElementById('d20-dice-image-one').src = d20DiceImageArray[14];
   } if (d20PlayerRoll === 16) {
    document.getElementById('d20-dice-image-one').src = d20DiceImageArray[15];
   } if (d20PlayerRoll === 17) {
    document.getElementById('d20-dice-image-one').src = d20DiceImageArray[16];
   } if (d20PlayerRoll === 18) {
    document.getElementById('d20-dice-image-one').src = d20DiceImageArray[17];
   } if (d20PlayerRoll === 19) {
    document.getElementById('d20-dice-image-one').src = d20DiceImageArray[18];
   }if (d20PlayerRoll === 20) {
    document.getElementById('d20-dice-image-one').src = d20DiceImageArray[19];
   } 

  //display d20 images to computer-result div// 
     if (d20ComputerRoll === 1) {
    document.getElementById('d20-dice-image-two').src = d20DiceImageArray[0];
   } if (d20ComputerRoll === 2) {
    document.getElementById('d20-dice-image-two').src = d20DiceImageArray[1];
   } if (d20ComputerRoll === 3) {
    document.getElementById('d20-dice-image-two').src = d20DiceImageArray[2];
   } if (d20ComputerRoll === 4) {
    document.getElementById('d20-dice-image-two').src = d20DiceImageArray[3];
   } if (d20ComputerRoll === 5) {
    document.getElementById('d20-dice-image-two').src = d20DiceImageArray[4];
   } if (d20ComputerRoll === 6) {
    document.getElementById('d20-dice-image-two').src = d20DiceImageArray[5];
   } if (d20ComputerRoll === 7) {
    document.getElementById('d20-dice-image-two').src = d20DiceImageArray[6];
   } if (d20ComputerRoll === 8) {
    document.getElementById('d20-dice-image-two').src = d20DiceImageArray[7];
   } if (d20ComputerRoll === 9) {
    document.getElementById('d20-dice-image-two').src = d20DiceImageArray[8];
   } if (d20ComputerRoll === 10) {
    document.getElementById('d20-dice-image-two').src = d20DiceImageArray[9];
   } if (d20ComputerRoll === 11) {
    document.getElementById('d20-dice-image-two').src = d20DiceImageArray[10];
   } if (d20ComputerRoll === 12) {
    document.getElementById('d20-dice-image-two').src = d20DiceImageArray[11];
   } if (d20ComputerRoll === 13) {
    document.getElementById('d20-dice-image-two').src = d20DiceImageArray[12];
   } if (d20ComputerRoll === 14) {
    document.getElementById('d20-dice-image-two').src = d20DiceImageArray[13];
   } if (d20ComputerRoll === 15) {
    document.getElementById('d20-dice-image-two').src = d20DiceImageArray[14];
   } if (d20ComputerRoll === 16) {
    document.getElementById('d20-dice-image-two').src = d20DiceImageArray[15];
   } if (d20ComputerRoll === 17) {
    document.getElementById('d20-dice-image-two').src = d20DiceImageArray[16];
   } if (d20ComputerRoll === 18) {
    document.getElementById('d20-dice-image-two').src = d20DiceImageArray[17];
   } if (d20ComputerRoll === 19) {
    document.getElementById('d20-dice-image-two').src = d20DiceImageArray[18];
   }if (d20ComputerRoll === 20) {
    document.getElementById('d20-dice-image-two').src = d20DiceImageArray[19];
   }
  
//determin if player has won or lost d20 game and remove elements to display win or lose message//  
   if (d20PlayerRoll > d20ComputerRoll) {
       document.getElementById('d20-win-lose-draw').innerHTML = 'Win';
       document.getElementById('d20-player-score').innerHTML = playerScore++;
   } else if (d20PlayerRoll < d20ComputerRoll) { 
    document.getElementById('d20-win-lose-draw').innerHTML = 'Lose';
    document.getElementById('d20-computer-score').innerHTML = computerScore++;
   } else if (d20PlayerRoll === d20ComputerRoll) {
    document.getElementById('d20-win-lose-draw').innerHTML = 'Draw';
   } if (playerScore === 11) {
    document.getElementById('d20-winner-loser').innerHTML = 'You Win The Game!';
    document.getElementById('d20-roll-button').remove();
    document.getElementById('d20-player').remove();
    document.getElementById('d20-computer').remove();
    document.getElementById('d20-scores-wrapper').remove();
    document.getElementById('d20-result-wrapper').remove();;
    document.getElementById('d20-win-lose-draw').remove();
   } 
   
   if (computerScore === 11) {
    document.getElementById('d20-winner-loser').innerHTML = 'You Lose The Game!';
    document.getElementById('d20-roll-button').remove();
    document.getElementById('d20-player').remove();
    document.getElementById('d20-computer').remove();
    document.getElementById('d20-scores-wrapper').remove();
    document.getElementById('d20-result-wrapper').remove();
    document.getElementById('d20-win-lose-draw').remove();
   }
}

//reload page to restart the game//
function restartGame() { 
    window.location.reload()   
   }