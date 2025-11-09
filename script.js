const shareBtn = document.getElementById("shareBtn");
const openShareBarDiv = document.querySelector(".openShareBar");
let active = false;

const openShareBar = () => {
  if (!active) {
    openShareBarDiv.style.display = "flex";
    shareBtn.classList.add("active");
    active = !active;
    return;
  }
  openShareBarDiv.style.display = "none";
  shareBtn.classList.remove("active");
  active = !active;
};
shareBtn.addEventListener("click", openShareBar);
