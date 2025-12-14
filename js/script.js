const btn = document.getElementById("ctaButton");
const resetBtn = document.getElementById("resetButton");
const container = document.querySelector(".btn-container");
btn.addEventListener("click", () => {
  if (document.querySelector(".message-style")) {
    return;
  }

  btn.textContent = "メリークリスマス！";

  document.body.classList.add("body-active");

  const message = document.createElement("p");
  message.textContent = "素敵なクリスマスをお過ごしください！";

  message.classList.add("message-style");
  container.appendChild(message);
});

resetBtn.addEventListener("click", () => {
  btn.textContent = "クリック";

  document.body.classList.remove("body-active");

  const message = document.querySelector(".message-style");

  if (message) {
    message.remove();
  }
});
