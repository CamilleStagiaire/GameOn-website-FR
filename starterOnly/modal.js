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

const inscription = document.querySelector(".btn-submit");
let message = document.querySelector(".message");

let checkboxInput = document.querySelector(".checkbox-input");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

inscription.addEventListener("click", function (e) {
  e.preventDefault();
  //alert("Formulaire envoyé !");
  //modalbg.style.display = "";
  //verifierEmail();
 // resetFormAlerts();
  resetForm();
 // verifierFistNane();
 // verifierLastNane();
  //verifierBirthdate()
  //regex()


  const formData = new FormData(form);

  for (let [name, value] of formData) {

    if (value === '') {
      //alert('dd')
      //message.innerHTML = 'merci d\'indiquer une valeur '
    }

    //alert(`${name} = ${value}`); 

  }

});

// vérifier Prénom
function verifierFistNane() {
  let firstName = first.value;
  console.log(firstName);
  if (firstName.length < 2) {
    alert("dd")

  }
}

// vérifier Nom
function verifierLastNane() {

  let lastName = last.value;
  console.log(lastName);
  if (lastName.length < 2) {
    alert("aa")
  }
}

// vérifier l'email
function verifierEmail() {
  let mail = email.value;
  let total = 0;
  let emailCoupe;
  let arobase;
  if (mail == "") {
    message.innerHTML = 'merci de remplir ce champ'
  } else {
    if (mail.includes('@') && mail.includes('.')) { // si l'email contient @ et .
      arobase = mail.indexOf('@'); // verifie que @ est avant le .
      emailCoupe = mail.substring(arobase); //l'email sera coupé à l'@

      // si email coupé à l'@ contient un . et il y a au moins 1 lettre avant l'@ et une lettre après .
      if (emailCoupe.includes('.') && arobase > 1 && emailCoupe.charAt(emailCoupe.length - 1) !== ".") {
        message.innerHTML = "";
        total += 1;
      } else {
        message.innerHTML = 'Le format d\'Email n\'est pas valide'
      }
    } else {
      message.innerHTML = 'Le format d\'Email n\'est pas valide'
    }
  }
}


function verifierBirthdate() {
  let birthdateDate = birthdate.value;
  console.log(birthdateDate);
}

function verifierQuantity() {
 
}


// reinitialier le formulaire lorsqu'il est complet
function resetForm() {
  document.querySelector("#form").reset();
}




// RegExp
function regex() {
  let mail = email.value;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(mail.match(mailformat))
{
  alert(" valide !");
}
else
{
alert("Vous avez saisi une adresse électronique non valide !");
}
}

function openForm() {
  document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}
