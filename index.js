// prompts user for userName 

const userName = prompt("what is your name");
function game(range) {
  let guess = parseInt(prompt(`Hi ${userName} guess a number between 1 and ${range}`));
  let randomNumber = Math.floor(Math.random() * range) + 1;
  let level = range - 1;
  let point = level - 1;
  if (guess === randomNumber) {
    console.log("Good job!! you got the correct answer");
    level++;
    console.log(`welcome to level ${level}`);
    point++;
    console.log(`your point is ${point}`);

  } else if (guess !== randomNumber) {
    console.log("oops!! you got the wrong number, try again");
    guess = parseInt(prompt(`guess a number between 1 and ${range}`));
    randomNumber = Math.floor(Math.random() * range) + 1;
    if (guess === randomNumber) {
      console.log("Good job!! you got the correct answer");
      level++;
      console.log(`welcome to level ${level}`);
      point++;
      console.log(`your point is ${point}`);
    } else {
      console.log("please restart level.");
      console.log(`you will remain on level ${level} and point ${point}`);
    }
  }
}
game(2)