function toggleModal(style, title) {
    const modal = document.querySelector("#modal");
    const modalTitle = document.querySelector(".modal_card_header_title");
    modal.style.display = style;
    modalTitle.innerText = title;
};