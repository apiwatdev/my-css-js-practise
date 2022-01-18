const section = document.querySelector("section"),
  hireBtn = document.querySelector("#hireBtn");
closeBtns = document.querySelectorAll("#close");

hireBtn.addEventListener("click", function () {
  section.classList.add("show");
});

closeBtns.forEach((cbtn) => {
  cbtn.addEventListener("click", () => {
    section.classList.remove("show");
  });
});
