"use strict";
document
  .querySelector(".billing-wrapper")
  .addEventListener("click", () =>
    document
      .querySelectorAll(".billing-wrapper span")
      .forEach((value) =>
        value.className === "active"
          ? (value.className = "")
          : (value.className = "active")
      )
  );

// console.log(window.pageYOffset);

const mainNavItems = document.querySelector(".main-navigations__items"),
  toggleBtn = document.querySelector(".nav-toggle__btn");
toggleBtn.addEventListener("click", () => {
  mainNavItems.classList.toggle("main-navigations__items-open");
});
