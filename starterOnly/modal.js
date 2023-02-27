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
const popupForm = document.querySelector("#popupForm");

/**
 * définition des variables de test
 */

// les entrées de formulaire
const caract = 2; // nombre de caractères minimum
const ageMin = 15; // âge minimum

//les regex
const nameFormat = /^([a-zA-Z-ç-é-è-ê\s]){2,40}$/; // verification du nom/prénon
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // verification de l'email
//const quantityFormat = /^[1-9]?[0-9]{1}$|^100$/; // verification de la quantité de tournois

//tableau des erreurs
dataError = {
  empty: "Merci de remplir ce champ",
  name: `Vous devez entrer un prénom valide de minimum ${caract} caractères`,
  email: "le format d'email n\'est pas valide",
  birthdate: `Vous devez avoir ${ageMin} ans minimum pour participer.`,
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
close.forEach((span) => span.addEventListener("click", closeForm));

//fermeture de la modale de validation d'inscription
document.querySelector('.valid').addEventListener('click', closeForm);

/**
 * soumission du formulaire
* @param {PointerEvent} event
*/
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const arr = [verifierFistName(formData[0]),
  verifierLastName(formData[1]),
  verifierEmail(formData[2]), verifierAge(formData[3]),
  verifierQuantity(formData[4]), verifierLocation(),
  verifierConditions(formData[6])
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
 * @param {NodeList[]} element 
 * @returns {boolean}
 */
function verifierFistName(element) {
  let firstName = first.value;

  if (firstName === "" || !firstName.match(nameFormat)) {
    element.setAttribute('data-error-visible', 'true');
    if (firstName === "") {
      element.dataset.error = dataError.empty;
    } else {
      element.dataset.error = dataError.name;
    }
  } else {
    remove(element);
    return true;
  }
}

/**
 * vérifier le Nom
 * @param {NodeList[]} element 
 * @returns {boolean}
 */
function verifierLastName(element) {
  let lastName = last.value;

  if (lastName === "" || lastName.length < 2 || !lastName.match(nameFormat)) {
    element.setAttribute('data-error-visible', 'true');
    if (lastName === "") {
      element.dataset.error = dataError.empty;
    } else {
      element.dataset.error = dataError.name;
    }
  } else {
    remove(element);
    return true;
  }
}

/**
 * vérifier l'Email
 * @param {NodeList[]} element 
 * @returns {boolean}
 */
function verifierEmail(element) {
  let mail = email.value;

  if (mail === "" || !mail.match(mailFormat)) {
    element.setAttribute('data-error-visible', 'true');
    if (mail === "") {
      element.dataset.error = dataError.empty;
    } else {
      element.dataset.error = dataError.email;
    }
  } else {
    remove(element);
    return true;
  }
}

/**
 * vérifier l'age
 * @param {NodeList[]} element 
 * @returns {boolean}
 */
function verifierAge(element) {
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

  if (ageValue === "" || ddn < ageMin) {
    element.setAttribute('data-error-visible', 'true');
    if (ageValue === "") {
      element.dataset.error = dataError.empty;
    } else {
      element.dataset.error = dataError.birthdate;
    }
  } else {
    remove(element);
    return true;
  }
}

/**
 * vérifier la quantité de tournois
 * @param {NodeList[]} element 
 * @returns {boolean}
 */
function verifierQuantity(element) {
  let tournois = quantity.value;

  if (tournois === "") {
    element.setAttribute('data-error-visible', 'true');
    element.dataset.error = dataError.empty;

  } else {
    remove(element);
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
 * @param {NodeList[]} element 
 * @returns {boolean}
 */
function verifierConditions(element) {
  let conditions = document.querySelector("#checkbox1")

  if (!conditions.checked) {
    element.setAttribute('data-error-visible', 'true');
    element.dataset.error = dataError.condition;
  } else {
    remove(element);
    return true;
  }
}

/**
 * supprimer les champs d'erreurs
 *  @param {NodeList[]} element 
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