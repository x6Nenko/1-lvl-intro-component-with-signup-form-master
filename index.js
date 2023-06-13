const sendBtn = document.getElementById("btn");

const form = document.getElementById('myForm');
const terms = document.querySelector('.terms');

const inputHolder = document.querySelector('.input-holder');

const warningMessage = document.getElementById("warning-message");
const warningIcon = document.getElementById("warning-icon");

const firstNameInput = document.getElementById('firstName');
const firstNameWarning = document.getElementById('firstNameWarning');
const firstNameWarningIcon = document.getElementById('firstNameWarningIcon');
const firstNameInputHolder = document.getElementById('firstNameHolder');

const lastNameInput = document.getElementById('lastName');
const lastNameWarning = document.getElementById('lastNameWarning');
const lastNameWarningIcon = document.getElementById('lastNameWarningIcon');
const lastNameInputHolder = document.getElementById('lastNameHolder');

const emailInput = document.getElementById('email');
const emailWarning = document.getElementById('emailWarning');
const emailWarningIcon = document.getElementById('emailWarningIcon');
const emailInputHolder = document.getElementById('emailHolder');

const passwordInput = document.getElementById('password');
const passwordWarning = document.getElementById('passwordWarning');
const passwordWarningIcon = document.getElementById('passwordWarningIcon');
const passwordInputHolder = document.getElementById('passwordHolder');

const successHolder = document.getElementById('successHolder');

sendBtn.addEventListener('click', (event) => {
    event.preventDefault(); // prevent form submission
  
    const firstName = form.elements['firstName'].value;
    const lastName = form.elements['lastName'].value;
    const email = form.elements['email'].value;
    const password = form.elements['password'].value;

    let validInputs = 0;
  
    // check first name and last name are not empty
    if (!firstName) {
      firstNameWarning.style.display = "unset";
      firstNameWarningIcon.style.display = "unset";
      firstNameInput.classList.add("wrong-input");
      firstNameInput.style.padding = "20px 50px 20px 20px"
      firstNameInputHolder.style.marginBottom = "15px"
    //   return // Use return to process each input step by step 
    } else {
        firstNameWarning.style.display = "none";
        firstNameWarningIcon.style.display = "none";
        firstNameInput.classList.remove("wrong-input"); 
        firstNameInput.style.padding = "20px"
        firstNameInputHolder.style.marginBottom = "0"
        validInputs ++;
    }
  
    if (!lastName) {
      lastNameWarning.style.display = "unset";
      lastNameWarningIcon.style.display = "unset";
      lastNameInput.classList.add("wrong-input");
      lastNameInput.style.padding = "20px 50px 20px 20px";
      lastNameInputHolder.style.marginBottom = "15px"
    } else {
        lastNameWarning.style.display = "none";
        lastNameWarningIcon.style.display = "none";
        lastNameInput.classList.remove("wrong-input");
        lastNameInput.style.padding = "20px";
        lastNameInputHolder.style.marginBottom = "0"
        validInputs ++;
    }

    // check email is valid
    if (!/\S+@\S+\.\S+/.test(email)) {
      emailWarning.style.display = "unset";
      emailWarningIcon.style.display = "unset";
      emailInput.classList.add("wrong-input");
      emailInput.style.padding = "20px 50px 20px 20px";
      emailInputHolder.style.marginBottom = "15px"
    } else {
        emailWarning.style.display = "none";
        emailWarningIcon.style.display = "none";
        emailInput.classList.remove("wrong-input");
        emailInput.style.padding = "20px";
        emailInputHolder.style.marginBottom = "0"
        validInputs ++;
    }
  
    // check password has more than 4 characters
    if (password.length <= 4) {
      passwordWarning.style.display = "unset";
      passwordWarningIcon.style.display = "unset";
      passwordInput.classList.add("wrong-input");
      passwordInput.style.padding = "20px 50px 20px 20px";
      passwordInputHolder.style.marginBottom = "15px"
    } else {
        passwordWarning.style.display = "none";
        passwordWarningIcon.style.display = "none";
        passwordInput.classList.remove("wrong-input");
        passwordInput.style.padding = "20px";
        passwordInputHolder.style.marginBottom = "0"
        validInputs ++;
    }

    if (validInputs === 4) {
        form.style.display = "none";
        sendBtn.style.display = "none";
        terms.style.display = "none";
        successHolder.style.display = "flex";
        sendBtn.blur();
        return console.log("success")
    } else {
        sendBtn.blur();
        return console.log("error")
    }

  });


  // function validateEmail(email) {
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return regex.test(email);
// }

// sendBtn.addEventListener('click', function() {
//   const email = emailInput.value;
//   if (validateEmail(email)) {
//     sendBtn.blur();

//     const emailAddress = emailInput.value;
//     emailInput.classList.remove("wrong-input")
//     warningMessage.style.display = "none";
//     warningIcon.style.display = "none";
//     // emailInput.style.padding = "0 5rem 0 1.5rem"

//     arrowIcon.setAttribute('src', './images/material-symbols_check-small.svg');
//     sendBtn.style.backgroundColor = "#82E672";

//     console.log(emailAddress); // or do something else with the email address
//     emailInput.value = ""; // clear out the input field
//   } else {
//     warningMessage.style.display = "unset";
//     warningIcon.style.display = "unset";
//     // emailInput.style.padding = "0 7rem 0 1.5rem"
//     emailInput.classList.add("wrong-input");

//     console.log("error");
//   }
// });