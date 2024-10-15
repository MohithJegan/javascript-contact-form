var submit = document.getElementById("submit");
submit.addEventListener("click", function (e) {
  console.log("clicked");
  var errors = 0;
  var letterSpaces = new RegExp(/^(?! )[A-Za-z\s]*$/);
  var emailValidator = new RegExp(/^\S+@\S+\.\S+$/);
  var phoneNumberValidator = new RegExp(
    /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
  );
  var name = document.getElementById("name");
  var nameError = document.getElementById("name-error");
  var email = document.getElementById("email");
  var emailError = document.getElementById("email-error");
  var phone = document.getElementById("phone");
  var phoneError = document.getElementById("phone-error");
  // name validation
  if (!name.value) {
    nameError.innerHTML = "Please provide your name";
    errors++;
  } else if (!letterSpaces.test(name.value)) {
    nameError.innerHTML = "Please provide a valid name";
    errors++;
  } else {
    nameError.innerHTML = "";
  }
  // email validation
  if (!email.value) {
    emailError.innerHTML = "Please provide your email";
    errors++;
  } else if (!emailValidator.test(email.value)) {
    emailError.innerHTML = "Please provide a valid email";
    errors++;
  } else {
    emailError.innerHTML = "";
  }

  // phone number validation
  if (!phone.value) {
    phoneError.innerHTML = "Please provide your phone number";
    errors++;
  } else if (!phoneNumberValidator.test(phone.value)) {
    phoneError.innerHTML = "Please provide a valid phone number";
    errors++;
  } else {
    phoneError.innerHTML = "";
  }

  if (errors == 0) {
    var message = document.getElementById("message");
    message.innerHTML = "Thank you!";
    name.value = "";
    email.value = "";
  }
  e.preventDefault();
});

// function emailError(email, emailError) {
//   let errors = 0;
//   let emailValidator = new RegExp(/^\S+@\S+\.\S+$/);
//   if (!email.value) {
//     emailError.innerHTML = "Please provide your email";
//     errors++;
//   } else if (!emailValidator.test(email.value)) {
//     emailError.innerHTML = "Please provide a valid email";
//     errors++;
//   } else {
//     emailError.innerHTML = "";
//   }

//   if (errors == 0) {
//     email.value = "";
//   }

//   e.preventDefault();
// }
