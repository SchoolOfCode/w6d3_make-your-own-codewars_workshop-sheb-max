// You are a cash machine. You can dispense notes of 5, 10 and 20.
// Given an input from 5 to 100.
// Dispense from your cash machine that number with the less notes as possible.
// Function should return a number following this examples:
// Input 55 ===> 211 (1st Digit for 20s, 2nd for 10s, 3rd for 5s)
// Input 5 ===> 1 (We delete cero's on the left. So instead of return 001 should return 1)
// Input 15 ===> 11
// Input > 100 ===> "You cannot do that to me. Do you think I am made of money?"

export function calculateNotes(money) {
  const array = [];

  if (money > 100) {
    return "You cannot do that to me. Do you think I am made of money?";
  }

  if (money % 20 === 0) {
    array.push(money / 20);
    array[1] = 0;
    array[2] = 0;
  } else if (money % 20 !== 0 && money % 10 === 0) {
    //Calculate how many 20s and push into the array
    let twenties = Math.floor(money / 20);
    array.push(twenties);
    //Calculate the 10s
    let tens = (money % 20) / 10;
    array.push(tens);
    array[2] = 0;
  } else {
    //Calculate how many 20s and push into the array
    let twenties = Math.floor(money / 20);
    array.push(twenties);
    //Calculate the 10s
    let tens = Math.floor((money - 20 * twenties) / 10);
    array.push(tens);
    array[2] = 1;
  }

  return Number(array.join(""));
}
