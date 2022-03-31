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

console.log(window.pageYOffset);
