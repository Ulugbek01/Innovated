"use strict";
document.addEventListener("click", () =>
  document
    .querySelectorAll(".billing-wrapper span")
    .forEach((value) =>
      value.className === "active"
        ? (value.className = "")
        : (value.className = "active")
    )
);
