const myButton = document.getElementById("clickMe");
const noun1 = document.getElementById("noun1");
const noun2 = document.getElementById("noun2");
const noun1Input = document.getElementById("noun1Input");
const noun2Input = document.getElementById("noun2Input");

myButton.addEventListener("click", (e) => {
    e.preventDefault();
    noun1.textContent = noun1Input.value;
    noun2.textContent = noun2Input.value;
});

