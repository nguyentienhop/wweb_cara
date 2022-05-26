//menu togger

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

//details product
let mainImg = document.getElementById("MainImg");
let smallImg = document.getElementsByClassName("small-img");
for (let i = 0; i < smallImg.length; i++) {
  smallImg[i].addEventListener("click", () => {
    mainImg.src = smallImg[i].src;
  });
}
