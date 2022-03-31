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