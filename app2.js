const display = document.getElementById('result')
let boxes = document.querySelectorAll('.Box');

let currentCalculation = "";

boxes.forEach((element) => {
    console.log("I am starting");
    element.addEventListener('click', ()=>
    {
     const value = element.value;
      
      if(value === "c"){
        cleardisplay();
      }

      else if(value === "="){
        calculate();
      }  
      else
      {
        display.value += value;
      }
    });
});

function cleardisplay() {
  currentCalculation = "";
  display.value = "";
}

function calculate() {
  try {
      // Try to evaluate the expression in the display
      display.value = eval(display.value);
  } catch (error) {
      // If the expression is invalid, display an error
      display.value = "Error";
  }
}




