const player1Btn= document.querySelector('#p1Btn');
const player2Btn= document. querySelector('#p2Btn');
const p1Display=document.querySelector('#p1Display');
const p2Display=document.querySelector('#p2Display');
const resetBtn= document.querySelector('#reset');
const winningScoreSelect=document.querySelector('#playUntil');
//We do this to extract the value of the select option

let p1Score=0;
let p2Score=0;
let winningScore=5;
let gameOver= false;

player1Btn.addEventListener('click', function () {
	if(!gameOver) {
		p1Score+=1;
	
		if(p1Score===winningScore) {
			gameOver=true;
			p1Display.classList.add('winner');
			p2Display.classList.add('loser');
		}
//We set gameOver to true so then the entire if statement 
// is then false and the code does not run. If either of the
// players  reaches the gameOver to true first, then it
// becomes true for either of them.
		p1Display.textContent=p1Score;
}
})

player2Btn.addEventListener('click', function () {
	if(!gameOver) {
		p2Score+=1;
	
		if(p2Score===winningScore) {
			gameOver=true;
			p2Display.classList.add('winner');
			p1Display.classList.add('loser');
		}
//We set gameOver to true so then the entire if statement 
// is then false and the code does not run
		p2Display.textContent=p2Score;
}
})

// The first to make it to five should be the winner for example
// At five the code must stop. So we should
// keep track if we are still playing the game. It comes
// down to a yes or no. So we create a boolean
// variable to check who wins, gameOver

winningScoreSelect.addEventListener('change', function(){
	winningScore=parseInt(this.value);
	reset();
})

resetBtn.addEventListener('click', reset)

function reset() {
	gameOver=false;
	p1Score=0;
	p2Score=0;
// Now we have to diplay the reset score to the display
	p1Display.textContent=0;
	p2Display.textContent=0;
	p1Display.classList.remove('winner', 'loser');
	p2Display.classList.remove('loser', 'winner');	
}