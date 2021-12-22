/* 
👉 Write your kata here!
*/

// Withdraw

// You are a cash machine. Given an inputed abount less than or equal to £100, dispense from you cash machine that number in £20, £10 or £5 notes.
//  If user enters an amount greater than £300, return a message EXCACTLY saying "You cannot do that to me. Do you think I am made of money?".
// max - can only dispense £300 a day in one go

//£20 £10 £5
// calculate the minimal amount of notes the cash machine can dispense

//👉 Write the function your CodeWarriors will start with below here:

export function calculateNotes(money) {
  const array = [];

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
