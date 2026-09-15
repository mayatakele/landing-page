let resumeBtn = document.querySelector(".download-resume");

resumeBtn.addEventListener("click", function () {
  alert("תודה רבה שהורדתם את קורות החיים שלי! ");
});

let topBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    topBtn.classList.add("visible");
  } else {
    topBtn.classList.remove("visible");
  }
});

topBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
