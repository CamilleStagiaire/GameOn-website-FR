function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelectorAll(".close");
const content = document.querySelector(".content");
const popupForm = document.querySelector(".popupForm");

/**
 * définition des variables de test
 */

// les entrées de formulaire
const CARACT_MINI = 2; // nombre de caractères minimum
const AGE_MIN = 15; // âge minimum

//les regex
const nameFormat = /^([a-zA-Z-ç-é-è-ê\s])+$/; // vérification du nom/prénom
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // vérification de l'email

//tableau des erreurs
dataError = {
  empty: "Merci de remplir ce champ",
  name: `Vous devez entrer un prénom valide de minimum ${CARACT_MINI} caractères`,
  email: "le format d'email n\'est pas valide",
  birthdate: `Vous devez avoir ${AGE_MIN} ans minimum pour participer`,
  condition: "Vous devez accepter les conditions générales"
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  content.style.display = "block";
  popupForm.style.display = "none";
}

// fermeture des modals (au X)
close.forEach((close) => close.addEventListener("click", closeForm));

//fermeture de la modale de validation d'inscription
document.querySelector('.valid').addEventListener('click', closeForm);

/**
 * soumission du formulaire
* @param {PointerEvent} event
*/
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const arr = [verifierFistName(),
  verifierLastName(),
  verifierEmail(),
  verifierAge(),
  verifierQuantity(),
  verifierLocation(),
  verifierConditions()
  ]

  let formValide = arr.every(ele => ele === true);
  if (formValide === true) {
    openValid();
    resetForm();
  }
})

/**
 * Les fonctions de verification du formulaire
 */

/**
 * vérifier le prénom
 * @returns {boolean}
 */
function verifierFistName() {
  let firstName = first.value;

  if (firstName === "" || firstName.length < CARACT_MINI || !firstName.match(nameFormat)) {
    first.closest('.formData').setAttribute('data-error-visible', 'true');
    if (firstName === "") {
      first.closest('.formData').dataset.error = dataError.empty;
    } else {
      first.closest('.formData').dataset.error = dataError.name;
    }
  } else {
    remove(first.closest('.formData'));
    return true;
  }
}

/**
 * vérifier le Nom
 * @returns {boolean}
 */
function verifierLastName() {
  let lastName = last.value;

  if (lastName === "" || lastName.length < CARACT_MINI || !lastName.match(nameFormat)) {
    console.log(CARACT_MINI);
    last.closest('.formData').setAttribute('data-error-visible', 'true');
    if (lastName === "") {
      last.closest('.formData').dataset.error = dataError.empty;
    } else {
      last.closest('.formData').dataset.error = dataError.name;
    }
  } else {
    remove(last.closest('.formData'));
    return true;
  }
}

/**
 * vérifier l'Email
 * @returns {boolean}
 */
function verifierEmail() {
  let mail = email.value;

  if (mail === "" || !mail.match(mailFormat)) {
    email.closest('.formData').setAttribute('data-error-visible', 'true');
    if (mail === "") {
      email.closest('.formData').dataset.error = dataError.empty;
    } else {
      email.closest('.formData').dataset.error = dataError.email;
    }
  } else {
    remove(email.closest('.formData'));
    return true;
  }
}

/**
 * vérifier l'age
 * @returns {boolean}
 */
function verifierAge() {
  let ageValue = birthdate.value;
  let ddn = getAge(new Date(ageValue));

  /**
   * calcul de l'age
   * @param {number} date 
   * @returns {number}
   */
  function getAge(date) {
    let diff = Date.now() - date.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  }

  if (ageValue === "" || ddn < AGE_MIN) {
    birthdate.closest('.formData').setAttribute('data-error-visible', 'true');
    if (ageValue === "") {
      birthdate.closest('.formData').dataset.error = dataError.empty;
    } else {
      birthdate.closest('.formData').dataset.error = dataError.birthdate;
    }
  } else {
    remove(birthdate.closest('.formData'));
    return true;
  }
}

/**
 * vérifier la quantité de tournois
 * @returns {boolean}
 */
function verifierQuantity() {
  let tournois = quantity.value;

  if (tournois === "") {
    quantity.closest('.formData').setAttribute('data-error-visible', 'true');
    quantity.closest('.formData').dataset.error = dataError.empty;

  } else {
    remove(quantity.closest('.formData'));
    return true;
  }
}

/**
 * vérifier le bouton radio sélectionné
 * @returns {boolean}
 */
function verifierLocation() {
  let checkbox = document.querySelectorAll(".location");

  for (var i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked === true) break;
  }
  console.log('value => ' + checkbox[i].value);
  return true;
}

/**
 * vérifier les conditions générales checked
 * @returns {boolean}
 */
function verifierConditions() {
  let conditions = document.querySelector("#checkbox1")

  if (!conditions.checked) {
    checkbox1.closest('.formData').setAttribute('data-error-visible', 'true');
    checkbox1.closest('.formData').dataset.error = dataError.condition;
  } else {
    remove(checkbox1.closest('.formData'));
    return true;
  }
}

/**
 * supprimer les champs d'erreurs
 *  @param element 
 */
function remove(element) {
  element.removeAttribute('data-error')
  element.removeAttribute('data-error-visible')
}

// reinitialier le formulaire lorsqu'il est complet
function resetForm() {
  document.querySelector("#form").reset();
}

//popup de validation du formulaire
function openValid() {
  content.style.display = "none";
  popupForm.style.display = "block";
}

//fermeture du formulaire
function closeForm() {
  content.style.display = "none";
  modalbg.style.display = "none";
}