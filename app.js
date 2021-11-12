// Модальне вікно
let modalWindow = document.querySelector(".modal-window");
let modalCloseBtn = document.querySelector(".modal-close-btn");

function openModal() {
  modalWindow.classList.add("show");
  modalWindow.classList.remove("hide");
}
function closeModal() {
  modalWindow.classList.remove("show");
  modalWindow.classList.add("hide");
}
modalCloseBtn.addEventListener("click", closeModal);

function showModalByScroll() {
  if (window.pageYOffset >= document.documentElement.scrollHeight / 2) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}
window.addEventListener("scroll", showModalByScroll);

modalWindow.addEventListener("click", function (e) {
  if (e.target === modalWindow) {
    closeModal();
  }
});
