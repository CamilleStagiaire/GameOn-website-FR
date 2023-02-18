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


// définition des variables de test

// les entrées de formulaire
const caract = 2; // nombre de caractères minimum
const ageMin = 15; // âge minimum

//les regex
const nameFormat = /^([a-zA-Z-\s]){2,40}$/; // verification du nom/prénon
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


function FormAlerts() {
    for (let i = 0; i < form[0].length; i++) {
        // formData.setAttribute('data-error-visible', 'true');
    }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
    content.style.display = "block";
}

// fermer le formulaire
close.forEach((span) => span.addEventListener("click", closeForm));

resetForm();
//event.stopPropagation


resetForm();
/**
 * @param {PointerEvent} event
 */
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

     //const form = e.currentTarget;
    // const data = new FormData(form);
    // console.log(data.get('birthdate'));
    // console.log(form);
    // console.log(data);

    verifierFistName(formData[0])
    verifierLastName(formData[1]);
    verifierEmail(formData[2])
    verifierAge(formData[3])
    verifierQuantity(formData[4])
    verifierLocation(formData[5])
    verifierConditions(formData[6])


})

// suppimer les champs d'erreurs
function remove(element) {
    element.removeAttribute('data-error')
    element.removeAttribute('data-error-visible')
}

// vérifier Prénom
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

// vérifier Nom
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

// Vérifier l'Email
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

// vérifier age
function verifierAge(element) {
    let ageValue = birthdate.value;
    let ddn = getAge(new Date(ageValue));

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

// vérifier quantité de tournois
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

// vérifier le bouton radio
function verifierLocation(element) {
    let checkbox = document.querySelectorAll(".location");

    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked === true) break;
    }
    
    console.log('value => ' + checkbox[i].value);
    return true;
}

//vérifier conditions générales
function verifierConditions(element) {
    let conditions = document.querySelector("#checkbox1")
    if (!conditions.checked) {
        console.log(conditions.value);
        element.setAttribute('data-error-visible', 'true');
        element.dataset.error = dataError.condition;
    } else {
        remove(element);
        return true;
    }
}

// function verifierCondition() {
//     document.querySelector('#checkbox1').addEventListener('change', (e) => {
//         e.preventDefault();
//         let checkbox1 =e.currentTarget.checked;
//         console.log(checkbox1);
//     })   
// }

// reinitialier le formulaire lorsqu'il est complet
function resetForm() {
    document.querySelector("#form").reset();
}

//popup de validation du formulaire
function openValid() {
    popupForm.style.display = "block";
}

//fermer la popup de validation
function closeValid() {
    popupForm.style.display = "none";
    closeForm();
}

//fermer le formulaire
function closeForm() {
    content.style.display = "none";
    modalbg.style.display = "none";
}