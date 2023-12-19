
function passValidation() {
  var password = document.getElementById("motdepasse").value;
  var confirmPassword = document.getElementById("confirmpassword").value;

  if (password !== confirmPassword) {
    alert("Les mots de passe ne correspondent pas. Veuillez les saisir à nouveau.");
  } else {
    alert("Inscription réussie !");
  }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").addEventListener("submit", function (event) {
      event.preventDefault();
  
      validateForm();
    });
  });
  
  function validateForm() {
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var telephone = document.getElementById("telephone");
    var motdepasse = document.getElementById("motdepasse");
    var confirmpassword = document.getElementById("confirmpassword");
  
    var lettersOnlyRegex = /^[a-zA-Z]+$/;
    var atLeastTenCharsRegex = /^.{10,}$/;
    var uppercaseLetterRegex = /[A-Z]/;
    var lowercaseLetterRegex = /[a-z]/;
    var numberRegex = /\d/;
  
    if (!lettersOnlyRegex.test(nom.value) || nom.value.length < 3) {
      displayErrorMessage(nom, "Nom doit contenir que des lettres et avoir au moins 3 caractères.");
      return;
    } else {
      clearErrorMessage(nom);
    }
  
    if (prenom.value.length < 4) {
      displayErrorMessage(prenom, "Prénom doit compter au minimum 4 caractères.");
      return;
    } else {
      clearErrorMessage(prenom);
    }
  
    if (isNaN(telephone.value) || telephone.value.length !== 8) {
      displayErrorMessage(telephone, "Numéro de téléphone ne doit pas contenir des lettres et doit avoir exactement 8 chiffres.");
      return;
    } else {
      clearErrorMessage(telephone);
    }
  
    if (!atLeastTenCharsRegex.test(motdepasse.value) ||
      !uppercaseLetterRegex.test(motdepasse.value) ||
      !lowercaseLetterRegex.test(motdepasse.value) ||
      !numberRegex.test(motdepasse.value)) {
      displayErrorMessage(motdepasse, "Le mot de passe doit contenir au moins 10 caractères, dont au moins : une lettre majuscule, une lettre minuscule, et un nombre.");
      return;
    } else {
      clearErrorMessage(motdepasse);
    }
  
    if (motdepasse.value !== confirmpassword.value) {
      displayErrorMessage(confirmpassword, "Les mots de passe ne sont pas identiques. Veuillez les saisir à nouveau.");
      return;
    } else {
      clearErrorMessage(confirmpassword);
    }
  
    alert("Formulaire soumis avec succès!");
    document.getElementById("form").submit();
  }
  
  function displayErrorMessage(field, message) {
    var errorMessageElement = document.createElement("div");
    errorMessageElement.textContent = message;
    errorMessageElement.style.color = "red";
    errorMessageElement.classList.add("error-message");
  
    var existingErrorMessage = field.parentElement.querySelector(".error-message");
    if (existingErrorMessage) {
      field.parentElement.removeChild(existingErrorMessage);
    }
  
    field.parentElement.appendChild(errorMessageElement);
  }
  
  function clearErrorMessage(field) {
    var existingErrorMessage = field.parentElement.querySelector(".error-message");
    if (existingErrorMessage) {
      field.parentElement.removeChild(existingErrorMessage);
    }
  }

  function nameValidation() {

    var nomValue = document.getElementById("nom").value;
  

    var lettersOnlyRegex = /^[a-zA-Z]+$/;
  

    var validationMessageElement = document.getElementById("nameValidationMessage");
  

    if (nomValue.length >= 3 && lettersOnlyRegex.test(nomValue)) {

        validationMessageElement.textContent = "Nom correct";
      validationMessageElement.style.color = "green";
    } else {

        validationMessageElement.textContent = "Nom doit contenir au moins trois caractères et seulement des lettres.";
      validationMessageElement.style.color = "red";
    }
  }
  