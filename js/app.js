// app.js
import { templates } from "./templates.js";
import { initFormValidation } from "./formValidator.js";

const main = document.querySelector("main");

function navigate(page) {
  if (templates[page]) {
    main.innerHTML = templates[page];
    if (page === "cadastro") {
      initFormValidation();
    }
  } else {
    main.innerHTML = "<h2>Página não encontrada</h2>";
  }
}

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const page = e.target.getAttribute("data-page");
    navigate(page);
  });
});

navigate("index");
