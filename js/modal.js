const modalRef = document.querySelector(".js-lightbox");
const galleryImage = document.querySelector(".gallery__image");

galleryImage.addEventListener("click", () => {
  modalRef.classList.add("is-open");
});
