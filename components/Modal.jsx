const openModal = (id) => {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  const video = document.createElement("iframe");
  video.classList.add("modal-video");
  video.src = `https://www.youtube.com/embed/${id}`;
  modal.appendChild(video);
  document.body.appendChild(modal);
  const overlay = document.querySelector(".overlay");
  overlay.classList.remove("hide");
  modal.addEventListener("click", (e) => {
    if (!e.target.classList.contains("modal-video")) {
      overlay.classList.add("hide");
      modal.classList.add("hide");
      setTimeout(() => {
        document.body.removeChild(modal);
      }, 750);
    }
  });
};

export default openModal;
