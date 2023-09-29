"use strict";

window.addEventListener("DOMContentLoaded", () => {
  // Modal
  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalClose = document.querySelector("[data-close]");

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    // clearInterval(modalTimerId); // clear Interval if user opened modal
  }

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  modalClose.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  // const modalTimerId = setTimeout(openModal, 3000); // If need add setTimeout

  // open a modal window If we have expanded to the end of the page
  // function showModalByScroll() {
  //   if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
  //     openModal();
  //     window.removeEventListener("scroll", showModalByScroll);
  //   }
  // }

  // window.addEventListener("scroll", showModalByScroll);
  // const modalTimerId = setTimeout(openModal, 3000);

  // function showModalByScroll() {
  //   if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
  //     openModal();
  //     window.removeEventListener("scroll", showModalByScroll);
  //   }
  // }

  window.addEventListener("scroll", showModalByScroll);
});
