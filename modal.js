const modal = document.querySelector(".modal");
const openBtn = document.querySelectorAll(".zoom-button");
const closeBtn = document.querySelector(".closeBtn");
const bg = document.querySelector(".bg");
const body = document.querySelector("body");

function open(e) {
  modal.classList.remove("hidden");
  body.classList.add("modal-open");
}

function close() {
  modal.classList.add("hidden");
  body.classList.remove("modal-open");
}

for (let i = 0; i < openBtn.length; i++) {
  openBtn[i].addEventListener("click", open);
}
closeBtn.addEventListener("click", close);
bg.addEventListener("click", close);
