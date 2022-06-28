const elForm = document.querySelector(".form");
const elFormInput = document.querySelector(".form-byudget");
const elByudgetItem = document.querySelector(".budget-item");

elForm.addEventListener("submit" , function(evt) {
    evt.preventDefault()
 
    const inputValue = elFormInput.value;

    const newP = document.createElement("p");

    newP.textContent = "salom"

    elByudgetItem.appendChild(newP)

    

    console.log(newP);
})