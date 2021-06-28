function Modal() {

    const modalWrapper = document.querySelector('.modal-wrapper');
    // get modal buttons
    const cancelButton = document.querySelector('.button.cancel');
    
    cancelButton.addEventListener("click", close)

    function open(){
        // assign the active class to modal
        modalWrapper.classList.add('active');
    }
    function close(){
        // remove the active class from modal
        modalWrapper.classList.remove('active');
    }
    
    return {
        open,
        close
    }
    
}

const modal = Modal();

const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");

export default function handleClick(event, check){
    event.preventDefault();
    // change modal information
    const text = check ? "Marcar esta pergunta como lida" : "Excluir esta pergunta";

    modalTitle.innerHTML = text;
    modalDescription.innerHTML = check ? `Tem certeza que você deseja ${text.toLowerCase()}?` : `Tem certeza que você deseja ${text.toLowerCase()}?`;
    modalButton.innerHTML = check ? "Sim, marcar como lida" : "Sim, excluir";
    check ? modalButton.classList.remove("red"):modalButton.classList.add("red")
    
    // open modal
    modal.open();

    const roomId = document.querySelector("#room-id").dataset.id;
    const slug = check ? "check" : "delete";
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form");
    form.setAttribute("action",`/room/${roomId}/${questionId}/:${slug}`)
}