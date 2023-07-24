// 37 05 97 53 86 83 24 67

// Get The Nave Bar
const navIconeEle = document.querySelector(".header .container .navIcone ");
const navBarEle = document.querySelector(".header .container .navBare ");

navIconeEle.addEventListener("click", getNavBar);

function getNavBar() {
  navBarEle.classList.toggle("active");
  this.classList.toggle("active");

  navBarEle.addEventListener("click", () => {
    navBarEle.classList.remove("active");
    navIconeEle.classList.remove("active");
  });
}

// Show Quiestions
const qEle = document.querySelectorAll(
  ".faqs-section .container .faqs-body .box > .qs"
);
const qIconeEle = document.querySelectorAll(
  ".faqs-section .container .faqs-body .box .qs .qTitle  i "
);

qEle.forEach((q) => {
  // default value
  q.classList.remove("active");
  qIconeEle.forEach((i) => {
    i.classList = "fa-solid fa-plus";
  });

  // Action click
  q.addEventListener("click", () => {
    qIconeEle.forEach((i) => {
      i.classList = "fa-solid fa-plus";
    });
    qEle.forEach((q) => {
      q.classList.remove("active");
    });
    q.children[0].children[0].classList.replace("fa-plus", "fa-minus");

    q.classList.toggle("active");
  });
});
