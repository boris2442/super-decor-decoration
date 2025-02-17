const nameForm = document.querySelector("#name");

const surname = document.getElementById("surname");
const email = document.getElementById("email");
const textarea = document.getElementById("textarea");
const form = document.querySelector("form");

const spanEmail = document.getElementById("spanEmail");
const spanName = document.querySelector(".spanName");
const spanSurname = document.querySelector(".spanSurname");
const spanTextarea = document.querySelector(".spanTextarea");
const symbols = /[^a-zA-Z0-9\s]/;

nameForm.addEventListener("input", (e) => {
  const valueName = e.target.value;

  if (valueName === "") {
    nameForm.classList.add("error");
    spanName.textContent = "le nom est obligatoire";
  } else if (valueName.length < 3 || valueName.length > 30) {
    nameForm.classList.add("error");
    spanName.textContent = "le nom doit être entre 3 et 30 caractères";
  } else if (symbols.test(valueName)) {
    nameForm.classList.add("error");
    spanName.textContent = "le nom ne peut contenir des caracteres speciaux";
  } else {
    nameForm.classList.remove("error");
    spanName.textContent = "";
  }
});
surname.addEventListener("input", (e) => {
  const valueSurname = e.target.value;

  if (valueSurname === "") {
    surname.classList.add("error");
    spanSurname.textContent = "le nom est obligatoire";
  } else if (valueSurname.length < 3 || valueSurname.length > 30) {
    surname.classList.add("error");
    spanSurname.textContent = "le nom doit être entre 3 et 30 caractères";
  } else if (symbols.test(valueSurname)) {
    surname.classList.add("error");
    spanSurname.textContent = "le nom ne peut contenir des caracteres speciaux";
  } else {
    surname.classList.remove("error");
    spanSurname.textContent = "";
  }
});
textarea.addEventListener("input", (e) => {
  const valueTextarea = e.target.value;

  if (valueTextarea === "") {
    textarea.classList.add("error");
    spanTextarea.textContent = "le nom est obligatoire";
  } else if (valueTextarea.length < 10 || valueTextarea.length > 150) {
    textarea.classList.add("error");
    spanTextarea.textContent = "le nom doit être entre 10 et 200 caractères";
  } else if (symbols.test(valueTextarea)) {
    textarea.classList.add("error");
    spanTextarea.textContent =
      "le nom ne peut contenir des caracteres speciaux";
  } else {
    textarea.classList.remove("error");
    spanTextarea.textContent = "";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    nameForm.classList.contains("error") ||
    surname.classList.contains("error") ||
    textarea.classList.contains("error")
  ) {
    alert("veuillez remplir tous les champs correctement");
    return;
  } else {
    alert("Formulaire envoyé avec succès");
    form.reset();
    nameForm.classList.remove("error");
    surname.classList.remove("error");
    textarea.classList.remove("error");
    spanName.textContent = "";
    spanSurname.textContent = "";
    spanTextarea.textContent = "";
  }
});
