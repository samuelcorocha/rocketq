import handleClick from './modal.js'

// get all buttons with check class
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach(button => {
    // add listener and read when Marcar como lido is clicked
    button.addEventListener("click", (event) => handleClick(event, true));
})

// get all buttons with delete class
const deleteButtons = document.querySelectorAll(".actions a.delete");

deleteButtons.forEach(button => {
    // add listener and read when Excluir is clicked
    button.addEventListener("click", (event) => handleClick(event, false));
})