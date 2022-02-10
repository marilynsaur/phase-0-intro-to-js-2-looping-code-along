
const names = [];
function writeCards(names, surprise) {
  for (let i = 0; i < names.length; i++) {
    names.splice(i, 1, `Thank you, ${names[i]}, for the wonderful ${surprise} gift!`)
  }
  return names;
}


function countDown() {
  let countDown = 0;
  while (countDown < 11) {
    console.log(countDown++);
  }
}