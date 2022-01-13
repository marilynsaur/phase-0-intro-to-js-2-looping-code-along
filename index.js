
const thankYouCards = []; 
function writeCards(thankYouCards, event) {
  for (let i = 0; i < thankYouCards.length; i++) {
    thankYouCards.splice(i,1, `Thank you, ${thankYouCards[i]}, for the wonderful ${event} gift!`)
  }
    return thankYouCards;
}
    
  
function countDown (){
let countDown = 0;
while (countDown <11) {
    console.log(countDown++);
}

}
