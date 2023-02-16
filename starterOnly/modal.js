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

//let inputEmail = document.getElementById("email");

//tableau des erreurs
// dataError = [
//   first.value = "qqqqq",
//   last.value = "",
//   email.value = "xcc",
//   birthdate.value = ""

// ]

//fonction champs nuls
function resetFormAlerts() {
  Array.from(formData).forEach((attr) => {
    attr.setAttribute('data-error-visible', 'true')
    attr.setAttribute('data-valid', 'false')
    attr.removeAttribute('data-error')
    //attr.dataset.error= dataError[0];
    attr.dataset.error = 'remplir ce champs';
  })
}




function FormAlerts() {
  for (let i = 0; i < form[0].length; i++)
    formData.setAttribute('data-error-visible', 'true');
}


const inscription = document.querySelector(".btn-submit");

//let emailError = document.querySelector("#emailError");

let checkboxInput = document.querySelector(".checkbox-input");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  content.style.display = "block";
}

// fermer le formulaire
close.forEach((span) => span.addEventListener("click", closeForm));

//resetForm();



inscription.addEventListener("click", function (e) {
  e.preventDefault();

  //alert("Formulaire envoyé !");
  //modalbg.style.display = "";
  //verifierEmail();
  // resetFormAlerts();
  //verifierFistName();
  // verifierLastNane();
 
  //verifierEmail();
  //openValid();
  //verifierAge()
  //let form = [];

  //const form = document.forms[0]


  const formData = new FormData(form);
  // console.log(formData);
  for (let [name, value] of formData) {

    if (value === "") {
console.log(formData);
    }
    // alert(`${name} = ${value}`); 
  }
});




// vérifier Prénom
function verifierFistName() {
  let firstName = first.value;
  console.log(firstName);
  if (firstName === "") {
    formData[0].setAttribute('data-error-visible', 'true')
    formData[0].setAttribute('data-valid', 'false')
    //formData[0].removeAttribute('data-error')

    //attr.dataset.error= dataError[0];
    formData[0].dataset.error = "merci de remplir ce champ";
  } else if (firstName.length < 2) {
    formData[0].dataset.error = "Votre prénom doit contenir au moins 2 caractères";

  } else {
    alert('valide')
    formData[0].removeAttribute('data-error')
    formData[0].removeAttribute('data-error-visible')
  }
}

// vérifier Nom
function verifierLastName() {

  let lastName = last.value;
  //console.log(lastName);
  if (lastName.length < 2) {

  }
}

// vérifier l'email
// function verifierEmail() {
//   let mail = email.value;
//   let total = 0;
//   let emailCoupe;
//   let arobase;
//   if (mail == "") {
//     message.innerHTML = 'merci de remplir ce champ'
//   } else {
//     if (mail.includes('@') && mail.includes('.')) { // si l'email contient @ et .
//       arobase = mail.indexOf('@'); // verifie que @ est avant le .
//       emailCoupe = mail.substring(arobase); //l'email sera coupé à l'@

//       // si email coupé à l'@ contient un . et il y a au moins 1 lettre avant l'@ et une lettre après .
//       if (emailCoupe.includes('.') && arobase > 1 && emailCoupe.charAt(emailCoupe.length - 1) !== ".") {
//        // message.innerHTML = "";
//         total += 1;
//       } else {
//         emailError.innerHTML = 'Le format d\'Email n\'est pas valide'
//       }
//     } else {
//       message.innerHTML = 'Le format d\'Email n\'est pas valide'
//     }
//   }
// }


// function age2() {
//   let anniv = birthdate.value;
//   let month = anniv.getMonth();
//   function getAge(date) { 
//     var diff = Date.now() - date.getTime();
//     var age = new Date(diff); 
//     return Math.abs(age.getUTCFullYear() - 1970);
   
// }

// console.log(month);
// alert(getAge(new Date(anniv))); //Date(année, mois, jour)
// }

// function age3() {
//  // var aujd=new Date();
//  //var day=aujd.getDate();
//  //var month=aujd.getMonth();
//    // aujd=day+"-"+month;
  
//  var datanniv= new Date(document.getElementById('birthdate').value);
//  var bday= datanniv.getDate();
//  var bmonth= datanniv.getMonth()
//  var byear= datanniv.getFullYear()
//    // datanniv= bday+'-'+bmonth;
//      console.log(bday);
//      console.log(byear);
//     //  if(aujd==datanniv)
//     //  {
//     //  alert("c'est ton anniv aujourd'hui, 50% de remise!");
//     //  }
// }

// function verifAge() {
//   const minAge = 10;
//   let anniv = birthdate.value;
//   let aujd = new Date();
//   let day = aujd.getDate();
//   let month = aujd.getMonth();
//   //  aujd=day+"-"+month;
//   var diff = Date.now() - date.getTime();
//   var age = new Date(diff);
//   return Math.abs(age.getUTCFullYear() - 1970);
//   //let age = Math.abs(new Date().getTime() - new Date(anniv).getTime()) / (1000 * 3600 * 24) > (minAge * 365);
//   let datanniv = new Date(anniv);
//   let bday = datanniv.getDate();
//   let bmonth = datanniv.getMonth()
//   let byear = datanniv.getFullYear()
//   // datanniv= bday+'-'+bmonth;
//   // console.log(bday);
//   console.log(bday);
//   console.log(day);
//   console.log(month);
//   console.log(bmonth);
//   if (anniv === "") {
//       formData[3].setAttribute('data-error-visible', 'true')
//       formData[3].setAttribute('data-valid', 'false')
//       formData[3].dataset.error = "merci de remplir ce champ";
//   }
//   else if (age === true) {

//       alert('valide')
//       formData[3].removeAttribute('data-error')
//       formData[3].removeAttribute('data-error-visible')
//   } else {
//       formData[3].setAttribute('data-error-visible', 'true')
//       formData[3].setAttribute('data-valid', 'false')
//       formData[3].dataset.error = `Vous devez avoir ${minAge} ans minimum pour participer.`;
//   }

// }

// function verifierAge() {
//   let anniv = birthdate.value;
//   const minAge = 10;
//   let age = Math.abs(new Date().getTime() - new Date(anniv).getTime()) / (1000 * 3600 * 24) > (minAge * 365);
//   // let bmonth= anniv.getMonth()

//   let aujd = new Date();
//   let day = aujd.getDate();
//   let month = aujd.getMonth();

//   let datanniv = new Date(anniv);
//   // let bday= datanniv.getDate();
//   let bmonth = datanniv.getMonth()
//   // console.log(age);
//   //console.log(month+1);
//   console.log(aujd);
//   console.log(month);
//   console.log(bmonth);


//   if (anniv === "") {
//       formData[3].setAttribute('data-error-visible', 'true')
//       formData[3].setAttribute('data-valid', 'false')
//       formData[3].dataset.error = "merci de remplir ce champ";
//   }
//   else if (age === true) {
//       alert('valide')
//       formData[3].removeAttribute('data-error')
//       formData[3].removeAttribute('data-error-visible')
//   }
//   else {
//       formData[3].setAttribute('data-error-visible', 'true')
//       formData[3].setAttribute('data-valid', 'false')
//       formData[3].dataset.error = `Vous devez avoir ${minAge} ans minimum pour participer.`;
//       resetForm();
//   }
// }

function verifierAge() {
  let anniv = birthdate.value;
  const minAge = 20;
  let age = Math.abs(new Date().getTime() - new Date(anniv).getTime()) / (1000 * 3600 * 24) > (minAge * 365);

 
  console.log(age);
  console.log(Date());

  if (anniv === "") {
    //emailError.innerHTML = 'merci de remplir ce champ';
    // const formFields = document.querySelectorAll('.formData')

    formData[3].setAttribute('data-error-visible', 'true')
    formData[3].setAttribute('data-valid', 'false')
   // formData[3].removeAttribute('data-error')

    //attr.dataset.error= dataError[0];
    formData[3].dataset.error = "merci de remplir ce champ";

    // emailError.innerHTML = 'merci de remplir ce champ';
    //inputEmail.style.border= "2px solid #e54858";

  }
  else if (age === true) {
    alert('valide')
    formData[3].removeAttribute('data-error')
    formData[3].removeAttribute('data-error-visible')
  }
  else {
    formData[3].dataset.error = `Vous devez avoir ${minAge} ans minimum pour participer.`;
  }
}


function verifierQuantity() {

}

function verifierLocation() {

}

function verifierCheckbox() {

}

// reinitialier le formulaire lorsqu'il est complet
function resetForm() {
  document.querySelector("#form").reset();
}



// Vérifier l'Email
function verifierEmail() {
  let mail = email.value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mail === "") {
    //emailError.innerHTML = 'merci de remplir ce champ';
   

    formData[2].setAttribute('data-error-visible', 'true')
    formData[2].setAttribute('data-valid', 'false')
    formData[2].removeAttribute('data-error')

    //attr.dataset.error= dataError[0];
    formData[2].dataset.error = "merci de remplir ce champ";

    // emailError.innerHTML = 'merci de remplir ce champ';
    //inputEmail.style.border= "2px solid #e54858";
  }
  else if (mail.match(mailformat)) {
    alert(" valide !");
  }
  else {
    formData[2].dataset.error = "le format n\'est pas valide";
  }
}

// vérifier email (la bonne)
function verifierEmail() {
  let mail = email.value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mail === "") {

      formData[2].setAttribute('data-error-visible', 'true')
      formData[2].setAttribute('data-valid', 'false')
      //formData[2].removeAttribute('data-error')

      //attr.dataset.error= dataError[0];
      formData[2].dataset.error = "merci de remplir ce champ";
  }
  else if (mail.match(mailformat)) {
      alert(" valide !");
  }
  else {
      formData[2].dataset.error = "le format n\'est pas valide";
  }
}

// vérifier age(la bonne)
function verifierAge2() {
    
  let ageValue = birthdate.value;

  function getAge(date) {
      let diff = Date.now() - date.getTime();
      let age = new Date(diff);
      return Math.abs(age.getUTCFullYear() - 1970);
  }
  let ddn = getAge(new Date(ageValue));

  if (ageValue === "" || ddn < ageMin) {
      formData[3].setAttribute('data-error-visible', 'true');
      if (ageValue === "") {
          formData[3].dataset.error = "Vous devez entrer votre date de naissance";
      } else {
          formData[3].dataset.error = `Vous devez avoir ${ageMin} ans minimum pour participer.`;
      }
  } else {
      total += 1;
      formData[3].removeAttribute('data-error')
      formData[3].removeAttribute('data-error-visible')
  }
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