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
const nameFormat = /^([a-zA-Z- ]){2,40}$/; // verification du nom/prénon
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // verification de l'email
//const quantityFormat = /^[1-9]?[0-9]{1}$|^100$/; // verification de la quantité de tournois

//let total = 0;




//let inputEmail = document.getElementById("email");

//tableau des erreurs
// dataError = [
//   first.value = "qqqqq",
//   last.value = "",
//   email.value = "xcc",
//   birthdate.value = ""

// ]


function FormAlerts() {
    for (let i = 0; i < form[0].length; i++) {
        // formData.setAttribute('data-error-visible', 'true');
    }
}


const inscription = document.querySelector(".btn-submit");

//let emailError = document.querySelector("#emailError");

//let checkboxInput = document.querySelector(".checkbox-input");

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



inscription.addEventListener("click", function (e) {
    e.preventDefault();

    //alert("Formulaire envoyé !");
    //modalbg.style.display = "";

    // resetFormAlerts();

    //verifierFistName();
    //verifierLastName();
    //verifierEmail();
    //verifierQuantity()
    //verifierAge()

    //verifierLocation()
    verifierConditions()
    //FormAlerts()
    //openValid();

    // let form = [];
    // resetForm();

    //const form = document.forms[0]
    //console.log(total);

    const formData = new FormData(form);
    // console.log(formData);
    for (let [name, value] of formData) {

        if (value === "") {
            //console.log(document.forms[0].elements);
        }
        // alert(`${name} = ${value}`); 
    }
});


// vérifier Prénom
function verifierFistName() {
    let firstName = first.value;

    if (firstName === "" || !firstName.match(nameFormat)) {
        formData[0].setAttribute('data-error-visible', 'true');
        if (firstName === "") {
            formData[0].dataset.error = "merci de remplir ce champ";
        } else {
            formData[0].dataset.error = `Vous devez entrer un prénom valide de minimum ${caract} caractères`;
        }
    } else {
        //total += 1;
        formData[0].removeAttribute('data-error')
        formData[0].removeAttribute('data-error-visible')
    }
}

// vérifier Nom
function verifierLastName() {
    let lastName = last.value;

    if (lastName === "" || lastName.length < 2 || !lastName.match(nameFormat)) {
        formData[1].setAttribute('data-error-visible', 'true');
        if (lastName === "") {
            formData[1].dataset.error = "merci de remplir ce champ";
        } else {
            formData[1].dataset.error = `Vous devez entrer un nom valide de minimum ${caract} caractères`;
        }
    } else {
        // total += 1;
        formData[1].removeAttribute('data-error')
        formData[1].removeAttribute('data-error-visible')
    }
}

// Vérifier l'Email
function verifierEmail() {
    let mail = email.value;

    if (mail === "" || !mail.match(mailFormat)) {
        formData[2].setAttribute('data-error-visible', 'true');
        if (mail === "") {
            formData[2].dataset.error = "merci de remplir ce champ";
        } else {
            formData[2].dataset.error = "le format d'email n\'est pas valide";
        }
    } else {
        // total += 1;
        formData[2].removeAttribute('data-error')
        formData[2].removeAttribute('data-error-visible')
    }
}

// vérifier age
function verifierAge() {
    let ageValue = birthdate.value;
    let ddn = getAge(new Date(ageValue));

    function getAge(date) {
        let diff = Date.now() - date.getTime();
        let age = new Date(diff);
        return Math.abs(age.getUTCFullYear() - 1970);
    }

    if (ageValue === "" || ddn < ageMin) {
        formData[3].setAttribute('data-error-visible', 'true');
        if (ageValue === "") {
            formData[3].dataset.error = "Vous devez entrer votre date de naissance";
        } else {
            formData[3].dataset.error = `Vous devez avoir ${ageMin} ans minimum pour participer.`;
        }
    } else {
        //total += 1;
        formData[3].removeAttribute('data-error')
        formData[3].removeAttribute('data-error-visible')
    }
}

// vérifier quantité de tournois
function verifierQuantity() {
    let tournois = quantity.value;

    if (tournois === "") {
        formData[4].setAttribute('data-error-visible', 'true');
        formData[4].dataset.error = "merci de remplir ce champ";

    } else {
        // total += 1;
        formData[4].removeAttribute('data-error')
        formData[4].removeAttribute('data-error-visible')
    }
}



// vérifier le bouton radio
function verifierLocation() {
    let checkbox = document.querySelectorAll(".location");

    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked === true) break;
    }
    // total += 1;
    console.log('value => ' + checkbox[i].value);
    //console.log(total);
}
// vérifier conditions générales
function verifierConditions() {
    let conditions = document.querySelector("#checkbox1");
    if (!conditions.checked) {
        console.log(conditions.value);
        formData[6].setAttribute('data-error-visible', 'true');
        formData[6].dataset.error = "Vous devez accepter les conditions générales";
    } else {
        alert('ee')
        formData[6].removeAttribute('data-error')
        formData[6].removeAttribute('data-error-visible')
    }

}

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