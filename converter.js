// To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by .5556 (or 5/9).
function toCelsius (todaytemp) {
   var celsiusValue = (todaytemp -32) *(5/9);
   tempOutput.innerHTML = celsiusValue + " this is the temp in Celsius!";
   return celsiusValue; 
}

// Convert celsius to Fahrenheit by T in degrees Celsius (°C) times 9/5 plus 32:
function toFahrenheit (todaytemp) {
  var fahrenheitValue = (todaytemp *9/5) +32; 
  tempOutput.innerHTML = fahrenheitValue + " this is the temp in Fahrenheit!";
  return fahrenheitValue; 
}

var tempOutput = document.getElementById("output") 

// Get a reference to the button element in the DOM 
var button = document.getElementById("converter");
button.addEventListener("click", determineConverter); 


// This function should determine which conversion should
// happen based on which radio button is selected.
// if the Far button is selected then goto toFahrenheit function
// if the Cel button is selected then goto toCelcius function
// need to move the todayTemp variable IN this function so js doesn't set the value 
// (until they click the button)
function determineConverter (clickEvent) {
  var todayTemp = document.getElementById('todaytemp').value;
  console.log("event", clickEvent);
  var fahrenheitButton = document.getElementById('fahrenheit').checked;
  var celsiusButton = document.getElementById('celsius').checked;
  if (fahrenheitButton) {
    toFahrenheit(todayTemp);
  } else if (celsiusButton) {
    toCelsius(todayTemp);
  } else {
    alert("please punch a button!!!")
  }
}

// If user does not punch a button, give an alert


