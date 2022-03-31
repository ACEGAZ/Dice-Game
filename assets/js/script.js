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
    let playerRoll = Math.floor(Math.random() * 6) + 1;
    let computerRoll = Math.floor(Math.random() * 6) + 1;
      
//d6 images//    
    let diceImageArray = [
                          img1 = 'assets/images/d6(1).png', 
                          img2 = 'assets/images/d6(2).png', 
                          img3 = 'assets/images/d6(3).png', 
                          img4 = 'assets/images/d6(4).png',
                          img5 = 'assets/images/d6(5).png',
                          img6 = 'assets/images/d6(6).png']                    

//display d6 images to player-result div//
     if (playerRoll === 1) {
    document.getElementById('d6-dice-image-one').src = diceImageArray[0]
   } if (playerRoll === 2) {
    document.getElementById('d6-dice-image-one').src = diceImageArray[1]
   } if (playerRoll === 3) {
    document.getElementById('d6-dice-image-one').src = diceImageArray[2]
   } if (playerRoll === 4) {
    document.getElementById('d6-dice-image-one').src = diceImageArray[3]
   } if (playerRoll === 5) {
    document.getElementById('d6-dice-image-one').src = diceImageArray[4]
   } if (playerRoll === 6) {
    document.getElementById('d6-dice-image-one').src = diceImageArray[5]

  //display d6 images to computer-result div//  
   } if (computerRoll === 1) {
    document.getElementById('d6-dice-image-two').src = diceImageArray[0]
   } if (computerRoll === 2) {
    document.getElementById('d6-dice-image-two').src = diceImageArray[1]
   } if (computerRoll === 3) {
   document.getElementById('d6-dice-image-two').src = diceImageArray[2]
   } if (computerRoll === 4) {
   document.getElementById('d6-dice-image-two').src = diceImageArray[3]
   } if (computerRoll === 5) {
   document.getElementById('d6-dice-image-two').src = diceImageArray[4]
   } if (computerRoll === 6) {
   document.getElementById('d6-dice-image-two').src = diceImageArray[5]
}
   
//determin if player has won or lost d6 game and remove elements to display win or lose message//
   if (playerRoll > computerRoll) {
       document.getElementById('d6-win-lose-draw').innerHTML = 'Win';
       document.getElementById('d6-player-score').innerHTML = playerScore++;
   } else if (playerRoll < computerRoll) { 
    document.getElementById('d6-win-lose-draw').innerHTML = 'Lose';
    document.getElementById('d6-computer-score').innerHTML = computerScore++;
   } else if (playerRoll === computerRoll) {
    document.getElementById('d6-win-lose-draw').innerHTML = 'Draw';
   } if (playerScore === 11) {
    document.getElementById('d6-winner-loser').innerHTML = 'You Win The Game!';
    document.getElementById('d6-roll-button').remove();
    document.getElementById('d6-player').remove();
    document.getElementById('d6-computer').remove();
    document.getElementById('d6-scores-wrapper').remove();
    document.getElementById('d6-result-wrapper').remove();;
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
    let playerRoll = Math.floor(Math.random() * 10) + 1;
    let computerRoll = Math.floor(Math.random() * 10) + 1;
  
//d10 images//    
    let diceImageArray = [
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
     if (playerRoll === 1) {
    document.getElementById('d10-dice-image-one').src = diceImageArray[0]
   } if (playerRoll === 2) {
    document.getElementById('d10-dice-image-one').src = diceImageArray[1]
   } if (playerRoll === 3) {
    document.getElementById('d10-dice-image-one').src = diceImageArray[2]
   } if (playerRoll === 4) {
    document.getElementById('d10-dice-image-one').src = diceImageArray[3]
   } if (playerRoll === 5) {
    document.getElementById('d10-dice-image-one').src = diceImageArray[4]
   } if (playerRoll === 6) {
    document.getElementById('d10-dice-image-one').src = diceImageArray[5]
   } if (playerRoll === 7) {
    document.getElementById('d10-dice-image-one').src = diceImageArray[6]
   } if (playerRoll === 8) {
    document.getElementById('d10-dice-image-one').src = diceImageArray[7]
   } if (playerRoll === 9) {
    document.getElementById('d10-dice-image-one').src = diceImageArray[8]
   } if (playerRoll === 10) {
    document.getElementById('d10-dice-image-one').src = diceImageArray[9]
   

//display d10 images to computer-result div//
   } if (computerRoll === 1) {
    document.getElementById('d10-dice-image-two').src = diceImageArray[0]
   } if (computerRoll === 2) {
    document.getElementById('d10-dice-image-two').src = diceImageArray[1]
   } if (computerRoll === 3) {
   document.getElementById('d10-dice-image-two').src = diceImageArray[2]
   } if (computerRoll === 4) {
   document.getElementById('d10-dice-image-two').src = diceImageArray[3]
   } if (computerRoll === 5) {
   document.getElementById('d10-dice-image-two').src = diceImageArray[4]
   } if (computerRoll === 6) {
   document.getElementById('d10-dice-image-two').src = diceImageArray[5]
   } if (computerRoll === 7) {
    document.getElementById('d10-dice-image-two').src = diceImageArray[6]
   } if (computerRoll === 8) {
    document.getElementById('d10-dice-image-two').src = diceImageArray[7]
   } if (computerRoll === 9) {
    document.getElementById('d10-dice-image-two').src = diceImageArray[8]
   }if (computerRoll === 10) {
    document.getElementById('d10-dice-image-two').src = diceImageArray[9]
   }
  
//determin if player has won or lost d10 game and remove elements to display win or lose message//
   if (playerRoll > computerRoll) {
       document.getElementById('d10-win-lose-draw').innerHTML = 'Win';
       document.getElementById('d10-player-score').innerHTML = playerScore++;
   } else if (playerRoll < computerRoll) { 
    document.getElementById('d10-win-lose-draw').innerHTML = 'Lose';
    document.getElementById('d10-computer-score').innerHTML = computerScore++;
   } else if (playerRoll === computerRoll) {
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
    let playerRoll = Math.floor(Math.random() * 20) + 1;
    let computerRoll = Math.floor(Math.random() * 20) + 1;
     
//d20 images//
    let diceImageArray = [
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
     if (playerRoll === 1) {
       document.getElementById('d20-dice-image-one').src = diceImageArray[0]
   } if (playerRoll === 2) {
    document.getElementById('d20-dice-image-one').src = diceImageArray[1]
   } if (playerRoll === 3) {
    document.getElementById('d20-dice-image-one').src = diceImageArray[2]
   } if (playerRoll === 4) {
    document.getElementById('d20-dice-image-one').src = diceImageArray[3]
   } if (playerRoll === 5) {
    document.getElementById('d20-dice-image-one').src = diceImageArray[4]
   } if (playerRoll === 6) {
    document.getElementById('d20-dice-image-one').src = diceImageArray[5]
   } if (playerRoll === 7) {
    document.getElementById('d20-dice-image-one').src = diceImageArray[6]
   } if (playerRoll === 8) {
    document.getElementById('d20-dice-image-one').src = diceImageArray[7]
   } if (playerRoll === 9) {
    document.getElementById('d20-dice-image-one').src = diceImageArray[8]
   } if (playerRoll === 10) {
    document.getElementById('d20-dice-image-one').src = diceImageArray[9]
   } if (playerRoll === 11) {
    document.getElementById('d20-dice-image-one').src = diceImageArray[10]
   } if (playerRoll === 12) {
    document.getElementById('d20-dice-image-one').src = diceImageArray[11]
   } if (playerRoll === 13) {
    document.getElementById('d20-dice-image-one').src = diceImageArray[12]
   } if (playerRoll === 14) {
    document.getElementById('d20-dice-image-one').src = diceImageArray[13]
   } if (playerRoll === 15) {
    document.getElementById('d20-dice-image-one').src = diceImageArray[14]
   } if (playerRoll === 16) {
    document.getElementById('d20-dice-image-one').src = diceImageArray[15]
   } if (playerRoll === 17) {
    document.getElementById('d20-dice-image-one').src = diceImageArray[16]
   } if (playerRoll === 18) {
    document.getElementById('d20-dice-image-one').src = diceImageArray[17]
   } if (playerRoll === 19) {
    document.getElementById('d20-dice-image-one').src = diceImageArray[18]
   }if (playerRoll === 20) {
    document.getElementById('d20-dice-image-one').src = diceImageArray[19]
   } 

  //display d20 images to computer-result div// 
   if (computerRoll === 1) {
   document.getElementById('d20-dice-image-two').src = diceImageArray[0]
   } if (computerRoll === 2) {
   document.getElementById('d20-dice-image-two').src = diceImageArray[1]
   } if (computerRoll === 3) {
   document.getElementById('d20-dice-image-two').src = diceImageArray[2]
   } if (computerRoll === 4) {
   document.getElementById('d20-dice-image-two').src = diceImageArray[3]
   } if (computerRoll === 5) {
   document.getElementById('d20-dice-image-two').src = diceImageArray[4]
   } if (computerRoll === 6) {
   document.getElementById('d20-dice-image-two').src = diceImageArray[5]
   } if (computerRoll === 7) {
   document.getElementById('d20-dice-image-two').src = diceImageArray[6]
   } if (computerRoll === 8) {
   document.getElementById('d20-dice-image-two').src = diceImageArray[7]
   } if (computerRoll === 9) {
   document.getElementById('d20-dice-image-two').src = diceImageArray[8]
   }if (computerRoll === 10) {
   document.getElementById('d20-dice-image-two').src = diceImageArray[9]
   }if (computerRoll === 11) {
    document.getElementById('d20-dice-image-two').src = diceImageArray[10]
   } if (computerRoll === 12) {
   document.getElementById('d20-dice-image-two').src = diceImageArray[11]
   } if (computerRoll === 13) {
   document.getElementById('d20-dice-image-two').src = diceImageArray[12]
   } if (computerRoll === 14) {
   document.getElementById('d20-dice-image-two').src = diceImageArray[13]
   } if (computerRoll === 15) {
   document.getElementById('d20-dice-image-two').src = diceImageArray[14]
   } if (computerRoll === 16) {
   document.getElementById('d20-dice-image-two').src = diceImageArray[15]
   } if (computerRoll === 17) {
    document.getElementById('d20-dice-image-two').src = diceImageArray[16]
   } if (computerRoll === 18) {
    document.getElementById('d20-dice-image-two').src = diceImageArray[17]
   } if (computerRoll === 19) {
    document.getElementById('d20-dice-image-two').src = diceImageArray[18]
   }if (computerRoll === 20) {
    document.getElementById('d20-dice-image-two').src = diceImageArray[19]
   }
  
//determin if player has won or lost d20 game and remove elements to display win or lose message//  
   if (playerRoll > computerRoll) {
       document.getElementById('d20-win-lose-draw').innerHTML = 'Win';
       document.getElementById('d20-player-score').innerHTML = playerScore++;
   } else if (playerRoll < computerRoll) { 
    document.getElementById('d20-win-lose-draw').innerHTML = 'Lose';
    document.getElementById('d20-computer-score').innerHTML = computerScore++;
   } else if (playerRoll === computerRoll) {
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
    
 

