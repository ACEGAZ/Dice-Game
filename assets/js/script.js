//player and computer scores//
let playerScore = 1;
let computerScore = 1;



//6 sided dice game//
function showhideD6Game() {
    document.getElementById('d6-game').style.display = 'block';
    document.getElementById('start-menu').style.display = 'none';
}

//play d6 game//

//show 6 sided dice game and hide start menu//
function playD6Game() {
    let d6PlayerRoll = Math.floor(Math.random() * 6) + 1;
    let d6ComputerRoll = Math.floor(Math.random() * 6) + 1;
    let d6Image1 = document.getElementById('d6-dice-image-one');
    let d6Image2 = document.getElementById('d6-dice-image-two');

    //d6 images//    
    let d6DiceImageArray = [
        d6img1 = 'assets/images/d6(1).png',
        d6img2 = 'assets/images/d6(2).png',
        d6img3 = 'assets/images/d6(3).png',
        d6img4 = 'assets/images/d6(4).png',
        d6img5 = 'assets/images/d6(5).png',
        d6img6 = 'assets/images/d6(6).png'
    ];

    //display d6 images to player-result div//
    if (d6PlayerRoll === 1) {
        d6Image1.alt = "you rolled a 1";
        d6Image1.src = d6DiceImageArray[0];
    }
    if (d6PlayerRoll === 2) {
        d6Image1.alt = "you rolled a 2";
        d6Image1.src = d6DiceImageArray[1];
    }
    if (d6PlayerRoll === 3) {
        d6Image1.alt = "you rolled a 3";
        d6Image1.src = d6DiceImageArray[2];
    }
    if (d6PlayerRoll === 4) {
        d6Image1.alt = "you rolled a 4";
        d6Image1.src = d6DiceImageArray[3];
    }
    if (d6PlayerRoll === 5) {
        d6Image1.alt = "you rolled a 5";
        d6Image1.src = d6DiceImageArray[4];
    }
    if (d6PlayerRoll === 6) {
        d6Image1.alt = "you rolled a 6";
        d6Image1.src = d6DiceImageArray[5];

        //display d6 images to computer-result div//  
    }
    if (d6ComputerRoll === 1) {
        d6Image2.alt = "you rolled a 1";
        d6Image2.src = d6DiceImageArray[0];
    }
    if (d6ComputerRoll === 2) {
        d6Image2.alt = "you rolled a 2";
        d6Image2.src = d6DiceImageArray[1];
    }
    if (d6ComputerRoll === 3) {
        d6Image2.alt = "you rolled a 3";
        d6Image2.src = d6DiceImageArray[2];
    }
    if (d6ComputerRoll === 4) {
        d6Image2.alt = "you rolled a 4";
        d6Image2.src = d6DiceImageArray[3];
    }
    if (d6ComputerRoll === 5) {
        d6Image2.alt = "you rolled a 5";
        d6Image2.src = d6DiceImageArray[4];
    }
    if (d6ComputerRoll === 6) {
        d6Image2.alt = "you rolled a 6";
        d6Image2.src = d6DiceImageArray[5];
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
    }
    if (playerScore === 11) {
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
function playD10Game() {
    let d10PlayerRoll = Math.floor(Math.random() * 10) + 1;
    let d10ComputerRoll = Math.floor(Math.random() * 10) + 1;
    let d10Image1 = document.getElementById('d10-dice-image-one');
    let d10Image2 = document.getElementById('d10-dice-image-two');

    //d10 images//    
    let d10DiceImageArray = [
        d10img1 = 'assets/images/d10(1).png',
        d10img2 = 'assets/images/d10(2).png',
        d10img3 = 'assets/images/d10(3).png',
        d10img4 = 'assets/images/d10(4).png',
        d10img5 = 'assets/images/d10(5).png',
        d10img6 = 'assets/images/d10(6).png',
        d10img7 = 'assets/images/d10(7).png',
        d10img8 = 'assets/images/d10(8).png',
        d10img9 = 'assets/images/d10(9).png',
        d10img10 = 'assets/images/d10(10).png'
    ];

    //display d10 images to player-result div//
    if (d10PlayerRoll === 1) {
        d10Image1.alt = "you rolled a 1";
        d10Image1.src = d10DiceImageArray[0];
    }
    if (d10PlayerRoll === 2) {
        d10Image1.alt = "you rolled a 2";
        d10Image1.src = d10DiceImageArray[1];
    }
    if (d10PlayerRoll === 3) {
        d10Image1.alt = "you rolled a 3";
        d10Image1.src = d10DiceImageArray[2];
    }
    if (d10PlayerRoll === 4) {
        d10Image1.alt = "you rolled a 4";
        d10Image1.src = d10DiceImageArray[3];
    }
    if (d10PlayerRoll === 5) {
        d10Image1.alt = "you rolled a 5";
        d10Image1.src = d10DiceImageArray[4];
    }
    if (d10PlayerRoll === 6) {
        d10Image1.alt = "you rolled a 6";
        d10Image1.src = d10DiceImageArray[5];
    }
    if (d10PlayerRoll === 7) {
        d10Image1.alt = "you rolled a 7";
        d10Image1.src = d10DiceImageArray[6];
    }
    if (d10PlayerRoll === 8) {
        d10Image1.alt = "you rolled a 8";
        d10Image1.src = d10DiceImageArray[7];
    }
    if (d10PlayerRoll === 9) {
        d10Image1.alt = "you rolled a 9";
        d10Image1.src = d10DiceImageArray[8];
    }
    if (d10PlayerRoll === 10) {
        d10Image1.alt = "you rolled a 10";
        d10Image1.src = d10DiceImageArray[9];


        //display d10 images to computer-result div//
    }
    if (d10ComputerRoll === 1) {
        d10Image2.alt = "you rolled a 1";
        d10Image2.src = d10DiceImageArray[0];
    }
    if (d10ComputerRoll === 2) {
        d10Image2.alt = "you rolled a 2";
        d10Image2.src = d10DiceImageArray[1];
    }
    if (d10ComputerRoll === 3) {
        d10Image2.alt = "you rolled a 3";
        d10Image2.src = d10DiceImageArray[2];
    }
    if (d10ComputerRoll === 4) {
        d10Image2.alt = "you rolled a 4";
        d10Image2.src = d10DiceImageArray[3];
    }
    if (d10ComputerRoll === 5) {
        d10Image2.alt = "you rolled a 5";
        d10Image2.src = d10DiceImageArray[4];
    }
    if (d10ComputerRoll === 6) {
        d10Image2.alt = "you rolled a 6";
        d10Image2.src = d10DiceImageArray[5];
    }
    if (d10ComputerRoll === 7) {
        d10Image2.alt = "you rolled a 7";
        d10Image2.src = d10DiceImageArray[6];
    }
    if (d10ComputerRoll === 8) {
        d10Image2.alt = "you rolled a 8";
        d10Image2.src = d10DiceImageArray[7];
    }
    if (d10ComputerRoll === 9) {
        d10Image2.alt = "you rolled a 9";
        d10Image2.src = d10DiceImageArray[8];
    }
    if (d10ComputerRoll === 10) {
        d10Image2.alt = "you rolled a 10";
        d10Image2.src = d10DiceImageArray[9];
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
    }
    if (playerScore === 11) {
        document.getElementById('d10-winner-loser').innerHTML = 'You Win The Game!';
        document.getElementById('d10-roll-button').remove();
        document.getElementById('d10-player').remove();
        document.getElementById('d10-computer').remove();
        document.getElementById('d10-scores-wrapper').remove();
        document.getElementById('d10-result-wrapper').remove();
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
function playD20Game() {
    let d20PlayerRoll = Math.floor(Math.random() * 20) + 1;
    let d20ComputerRoll = Math.floor(Math.random() * 20) + 1;
    let d20image1 = document.getElementById('d20-dice-image-one');
    let d20image2 = document.getElementById('d20-dice-image-two');

    //d20 images//
    let d20DiceImageArray = [
        d20img1 = 'assets/images/d20(1).png',
        d20img2 = 'assets/images/d20(2).png',
        d20img3 = 'assets/images/d20(3).png',
        d20img4 = 'assets/images/d20(4).png',
        d20img5 = 'assets/images/d20(5).png',
        d20img6 = 'assets/images/d20(6).png',
        d20img7 = 'assets/images/d20(7).png',
        d20img8 = 'assets/images/d20(8).png',
        d20img9 = 'assets/images/d20(9).png',
        d20img10 = 'assets/images/d20(10).png',
        d20img11 = 'assets/images/d20(11).png',
        d20img12 = 'assets/images/d20(12).png',
        d20img13 = 'assets/images/d20(13).png',
        d20img14 = 'assets/images/d20(14).png',
        d20img15 = 'assets/images/d20(15).png',
        d20img16 = 'assets/images/d20(16).png',
        d20img17 = 'assets/images/d20(17).png',
        d20img18 = 'assets/images/d20(18).png',
        d20img19 = 'assets/images/d20(19).png',
        d20img20 = 'assets/images/d20(20).png'
    ];

    //display d20 images to player-result div//
    if (d20PlayerRoll === 1) {
        d20image1.alt = "you rolled a 1";
        d20image1.src = d20DiceImageArray[0];
    }
    if (d20PlayerRoll === 2) {
        d20image1.alt = "you rolled a 2";
        d20image1.src = d20DiceImageArray[1];
    }
    if (d20PlayerRoll === 3) {
        d20image1.alt = "you rolled a 3";
        d20image1.src = d20DiceImageArray[2];
    }
    if (d20PlayerRoll === 4) {
        d20image1.alt = "you rolled a 4";
        d20image1.src = d20DiceImageArray[3];
    }
    if (d20PlayerRoll === 5) {
        d20image1.alt = "you rolled a 5";
        d20image1.src = d20DiceImageArray[4];
    }
    if (d20PlayerRoll === 6) {
        d20image1.alt = "you rolled a 6";
        d20image1.src = d20DiceImageArray[5];
    }
    if (d20PlayerRoll === 7) {
        d20image1.alt = "you rolled a 7";
        d20image1.src = d20DiceImageArray[6];
    }
    if (d20PlayerRoll === 8) {
        d20image1.alt = "you rolled a 8";
        d20image1.src = d20DiceImageArray[7];
    }
    if (d20PlayerRoll === 9) {
        d20image1.alt = "you rolled a 9";
        d20image1.src = d20DiceImageArray[8];
    }
    if (d20PlayerRoll === 10) {
        d20image1.alt = "you rolled a 10";
        d20image1.src = d20DiceImageArray[9];
    }
    if (d20PlayerRoll === 11) {
        d20image1.alt = "you rolled a 11";
        d20image1.src = d20DiceImageArray[10];
    }
    if (d20PlayerRoll === 12) {
        d20image1.alt = "you rolled a 12";
        d20image1.src = d20DiceImageArray[11];
    }
    if (d20PlayerRoll === 13) {
        d20image1.alt = "you rolled a 13";
        d20image1.src = d20DiceImageArray[12];
    }
    if (d20PlayerRoll === 14) {
        d20image1.alt = "you rolled a 14";
        d20image1.src = d20DiceImageArray[13];
    }
    if (d20PlayerRoll === 15) {
        d20image1.alt = "you rolled a 15";
        d20image1.src = d20DiceImageArray[14];
    }
    if (d20PlayerRoll === 16) {
        d20image1.alt = "you rolled a 16";
        d20image1.src = d20DiceImageArray[15];
    }
    if (d20PlayerRoll === 17) {
        d20image1.alt = "you rolled a 17";
        d20image1.src = d20DiceImageArray[16];
    }
    if (d20PlayerRoll === 18) {
        d20image1.alt = "you rolled a 18";
        d20image1.src = d20DiceImageArray[17];
    }
    if (d20PlayerRoll === 19) {
        d20image1.alt = "you rolled a 19";
        d20image1.src = d20DiceImageArray[18];
    }
    if (d20PlayerRoll === 20) {
        d20image1.alt = "you rolled a 20";
        d20image1.src = d20DiceImageArray[19];
    }

    //display d20 images to computer-result div// 
    if (d20ComputerRoll === 1) {
        d20image2.alt = "you rolled a 1";
        d20image2.src = d20DiceImageArray[0];
    }
    if (d20ComputerRoll === 2) {
        d20image2.alt = "you rolled a 2";
        d20image2.src = d20DiceImageArray[1];
    }
    if (d20ComputerRoll === 3) {
        d20image2.alt = "you rolled a 3";
        d20image2.src = d20DiceImageArray[2];
    }
    if (d20ComputerRoll === 4) {
        d20image2.alt = "you rolled a 4";
        d20image2.src = d20DiceImageArray[3];
    }
    if (d20ComputerRoll === 5) {
        d20image2.alt = "you rolled a 5";
        d20image2.src = d20DiceImageArray[4];
    }
    if (d20ComputerRoll === 6) {
        d20image2.alt = "you rolled a 6";
        d20image2.src = d20DiceImageArray[5];
    }
    if (d20ComputerRoll === 7) {
        d20image2.alt = "you rolled a 7";
        d20image2.src = d20DiceImageArray[6];
    }
    if (d20ComputerRoll === 8) {
        dd20image2.alt = "you rolled a 8";
        d20image2.src = d20DiceImageArray[7];
    }
    if (d20ComputerRoll === 9) {
        d20image2.alt = "you rolled a 9";
        d20image2.src = d20DiceImageArray[8];
    }
    if (d20ComputerRoll === 10) {
        d20image2.alt = "you rolled a 10";
        d20image2.src = d20DiceImageArray[9];
    }
    if (d20ComputerRoll === 11) {
        d20image2.alt = "you rolled a 11";
        d20image2.src = d20DiceImageArray[10];
    }
    if (d20ComputerRoll === 12) {
        d20image2.alt = "you rolled a 12";
        d20image2.src = d20DiceImageArray[11];
    }
    if (d20ComputerRoll === 13) {
        d20image2.alt = "you rolled a 13";
        d20image2.src = d20DiceImageArray[12];
    }
    if (d20ComputerRoll === 14) {
        d20image2.alt = "you rolled a 14";
        d20image2.src = d20DiceImageArray[13];
    }
    if (d20ComputerRoll === 15) {
        d20image2.alt = "you rolled a 15";
        d20image2.src = d20DiceImageArray[14];
    }
    if (d20ComputerRoll === 16) {
        d20image2.alt = "you rolled a 16";
        d20image2.src = d20DiceImageArray[15];
    }
    if (d20ComputerRoll === 17) {
        d20image2.alt = "you rolled a 17";
        d20image2.src = d20DiceImageArray[16];
    }
    if (d20ComputerRoll === 18) {
        d20image2.alt = "you rolled a 18";
        d20image2.src = d20DiceImageArray[17];
    }
    if (d20ComputerRoll === 19) {
        d20image2.alt = "you rolled a 19";
        d20image2.src = d20DiceImageArray[18];
    }
    if (d20ComputerRoll === 20) {
        d20image2.alt = "you rolled a 20";
        d20image2.src = d20DiceImageArray[19];
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
    }
    if (playerScore === 11) {
        document.getElementById('d20-winner-loser').innerHTML = 'You Win The Game!';
        document.getElementById('d20-roll-button').remove();
        document.getElementById('d20-player').remove();
        document.getElementById('d20-computer').remove();
        document.getElementById('d20-scores-wrapper').remove();
        document.getElementById('d20-result-wrapper').remove();
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
    window.location.reload();
}