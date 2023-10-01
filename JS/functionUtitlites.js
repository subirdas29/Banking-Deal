function inputValueById(inputId) {
  const inputIdValue = document.getElementById(inputId);
  const inputValue = parseFloat(inputIdValue.value);
  inputIdValue.value = "";
  
  if (isNaN(inputValue)) {
    alert("Please enter a valid number");
    return 0;
  } else {
    return inputValue;
  }
  
}

function elementById(elementId) {
  const elementIds = document.getElementById(elementId);
  const elementIdText = parseFloat(elementIds.innerText);
  return elementIdText;
}

function setValuebyId(elementId, setValue) {
  const setNewValue = document.getElementById(elementId);
  setNewValue.innerText = setValue;
}
