const modal = document.querySelector('.modal-container');
const buttonOpenModal = document.querySelector('.button-search');
const buttonCloseModal = modal.querySelector('.modal-close-button');

buttonCloseModal.addEventListener('click', () => {
	modal.classList.add('modal-container-close');
});

buttonOpenModal.addEventListener('click', () => {
	modal.classList.remove('modal-container-close');
});
