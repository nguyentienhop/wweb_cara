const togger = document.querySelector(".fa-bars");
const closee = document.querySelector(".close");
console.log(togger);
if (togger) {
  togger.addEventListener("click", () => {
    document.querySelector(".navbar").classList.add("active");
  });
}

if (closee) {
  closee.addEventListener("click", () => {
    document.querySelector(".navbar").classList.remove("active");
  });
}
