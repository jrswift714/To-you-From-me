document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

document.onkeydown = (e) => {
  if (
    event.keyCode === 123 || // F12
    (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
    (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
    (e.ctrlKey && e.keyCode === 85) // Ctrl+U
  ) {
    return false;
  }
};

function displayResponse() {
  const input = document.getElementById('userInput').value;
  const response = document.getElementById('response');
  const container = document.querySelector('.container');
  if (input.trim() === "And put a knife to thy throat, if thou be a man given to appetite") {
    response.innerText = "THREE GUILTY ARE WITH YOU IN THIS LABYRINTH. SPEAK TO MY EMISSARY. SAVE THE ACID FOR THE BLESSED DISCIPLES OF THE ADVERSARY, AND THE THING ITSELF. THE SUBSTANCE IS MADE FROM ME. EVERETT IS ABSENT, I FILL IN. FIND MY HOLY WATER. YOUR TIME NEARLY DRAWS TO A CLOSE.";
    document.getElementById("container").style.backgroundColor = "Gold";
  } else {
    response.innerText = "No. Tell me the secret revealed by the Key";
  } 
}
