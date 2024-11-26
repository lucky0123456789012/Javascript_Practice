// program to check if the string is palindrome or not using function
/*
function checkPalindrome(str) {

  const Finalstr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  return Finalstr === Finalstr.split('').reverse().join('');
}

console.log(checkPalindrome("Bab"));
console.log(checkPalindrome("Camel"));


const array1 = [10, 30, 20, 50];
const arrayUpdated = array1.map((num)=> num/2).filter((num)=>num >=15);
console.log(arrayUpdated);

//-------------
const object1 = {
    a: 10,
    b: 20,
    c: function () {
      console.log(this.a + this.b);
    },
  };
  
  const func = object1.c.bind(object1);
  func();

  //
  
  
  function removeDuplicates(arr){
    return [...new Set(arr)];
  }
  const arr1 = [2, 3, 3, 4, 5, 5];
  console.log(removeDuplicates(arr1));
/*
function removeDuplicates(array) {
  return [...new Set(array)];
}
  const array = [1, 2, 3, 4, 3, 2, 1];
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray); // Output: [1, 2, 3, 4]


let i = 9;
do {
  console.log("This is my name");
  i++;
}
while (i<=10);
*/

// let str = "Bharat";
// size = 0;
// for (const element of str) {
//   console.log(element);
//   size++;
// }
// console.log(size);
/*
let i=1;
do{
  if(i%2!==0){
    console.log("print the value ofi: ", i);
  }
  
  i++;

}
while (i<=100);
/////////////////////////////////////////
let gamenum = 24;
let Usernumber = prompt("Enter number");
//console.log(Usernumber);
while(Usernumber != gamenum){
  Usernumber = prompt("Enter number again");    
}
console.log("game end");


let item = [1, 2, 3, 4];
let NewItem = item.map((num)=>{
      return (num*num);
})

console.log(NewItem);
*/

let boxes = document.querySelectorAll(".Box");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let newGameBtn = document.querySelector("#new-btn");


let turnO = true; 
let count = 0; //To Track Draw
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

const enableBoxes = ()=>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

boxes.forEach((Element) => {
  //console.log("I am starting");
  Element.addEventListener('click', ()=>
  {
    if(turnO){
      Element.innerText = "0";
      turnO = false;
    }

    else{
      Element.innerText = "X";
      turnO = true;
    }
    Element.disabled = true;
    count++;
    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
 
})

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  //disableBoxes();
};

let checkWinner = ()=>{
  for (let pattern of winPatterns) {
    const pst1 = boxes[pattern[0]].innerText;
    const pst2 = boxes[pattern[1]].innerText; 
    const pst3 = boxes[pattern[2]].innerText;
    if(pst1 !="" && pst2 != "" && pst3 != "")
  {  
    if(pst1 === pst2 && pst2 === pst3)
    {
        console.log("He is the winner");
        showWinner(pst1);
        return true;
    }
  }
}
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);