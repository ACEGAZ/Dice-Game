# Dice Game

## Description

I have created a dice game that is designed to be fun for the user. 
It uses 6 sided dice, 10 sided dice and 20 sided dice.
The aim is to get the highest dice roll and be the first to win 10 times and beat the computer. 

My layout is simple, all the player needs to do is select a die and press the roll button. Once the game is over just press restart to try again. 

I decided to make a dice game because I am an avid D&D player and love rolling dice!

## Technologies used

I used HTML, css and Javascript to create this game. I used these technologies because my game is designed to run on web browsers on many devices and the vast majority of web browsers have integrated HTML, css and javascript. 

## Bugs

One major bug I faced (image below) was a space created by a line that would not allow me to display divs side-by-side. I tried displaying the divs using inline-flex which worked with every other div wrapper but would not work with the all-rolls-wrapper. Unfortunately the only way I found to fix this was by nesting the all-rolls-wrapper in another div. I will work to fix this using the correct css in future updates.  


![dice game bug](https://user-images.githubusercontent.com/97246895/161952120-01afe047-9698-4c04-a857-dccea02cdc27.png)


## Testing

I tested the game myself, hundreds of times over the course of it's creation and also had a group of 10 people test the game repeatedly. No serious issues were reported throughout all of my and the groups testing. 

## Validating

I ran the site through W3C HTML and css validators and both reported no errors as seen below. 

![image](https://user-images.githubusercontent.com/97246895/161940970-0b6504c1-31de-4a3b-ba63-0397cc16215f.png)

![image](https://user-images.githubusercontent.com/97246895/161941028-c26bc873-6df5-4335-8089-027e88eaafe6.png)

I also ran the site using Lighthouse and had no problems. The results can be seen below.  

![Lighthouse checker](https://user-images.githubusercontent.com/97246895/161961429-fd49cf24-f52e-4664-87a2-40d912924f8f.png)

I used JSHint for my javascript code which did not report any significant errors. 

## Responsive design 

i have tested my game on desktop, tablet and mobile devices and found no issues and images can be seen below. All media queries are working correctly.

![image](https://user-images.githubusercontent.com/97246895/161944111-1978de30-0e7d-401b-8d46-00ab38ed4117.png)

## Publishing 

The website was published and hosted from Github, using Github pages on 01/04/2022.

## Layout

### Start menu

The user is first taken to the start menu where they can select what die they want to use. 

![image](https://user-images.githubusercontent.com/97246895/161943915-e64a0f8e-da0b-4159-84b3-a8dd002fc8c1.png)

### D6 game

The D6 game allows the user to play the game using a 6 sided dice.

![image](https://user-images.githubusercontent.com/97246895/161944175-ddb1da8d-231e-49eb-826c-1b71e6e35d92.png)

### D10 

The d10 game allows the user to play the game using a 10 sided dice.

![image](https://user-images.githubusercontent.com/97246895/161944241-bfed4750-e85e-42b2-bd97-8c0a59921c18.png)

### D20 

The D20 game allows the user to play the game using a 20 sides dice.

![image](https://user-images.githubusercontent.com/97246895/161964330-d6f6839a-ece1-408d-b405-2d75debf38a2.png)

### You win the game 

If the user wins the game a message is displayed stating that they won the game and all dice rolls are shown for that set of rolls.

![image](https://user-images.githubusercontent.com/97246895/161944630-bb18e67a-c159-4fb2-b77d-e649ecc48566.png)

### You lose the game 

If the user loses the game a message is displayed stating that they lost the game and all dice rolls are shown for that set of rolls

![image](https://user-images.githubusercontent.com/97246895/161963886-d5a2999c-3162-4fed-b2e2-f15ca072b0f9.png)

## Future updates

I would like to include another game with a board for players to move around as the dice rolls. 
Fix bug mentioned above. 

## Credits 

d10 and d20 images were taken from Game-icons.net 

Link: https://game-icons.net/

D6 images were taken from code league

Link: https://www.youtube.com/watch?v=B17NC5DD-dA




