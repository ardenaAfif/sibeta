const btnSection1 = document.getElementById("btn-section-1");
const btnSection2 = document.getElementById("btn-section-2");
const section1 = document.getElementById("section-1");
const section2 = document.getElementById("section-2");

btnSection1.addEventListener("click", function () {
  btnSection1.classList.add("selected");
  btnSection2.classList.remove("selected");
  section1.classList.add("selected");
  section2.classList.remove("selected");
});

btnSection2.addEventListener("click", function () {
  btnSection2.classList.add("selected");
  btnSection1.classList.remove("selected");
  section2.classList.add("selected");
  section1.classList.remove("selected");
});
