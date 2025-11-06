 function appendValue(val){
    document.getElementById("display").value += val;
  }

  function clearDisplay(){
    document.getElementById("display").value = "";
  }

  function calculate(){
    let display = document.getElementById('display');
    try {
      let result = eval(display.value);
      display.value = result;
    } catch (error) {
      display.value = "Error";
    }
  }


  document.addEventListener('keydown', (event) => {
    const key = event.key;
    const display = document.getElementById("display");

    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
      appendValue(key);
    } 
    else if (key === 'Enter' || key === '=') {
      event.preventDefault();
      calculate();
    } 
    else if (key === 'Backspace') {
      display.value = display.value.slice(0, -1);
    } 
    else if (key.toLowerCase() === 'c') {
      clearDisplay();
    }
  });
