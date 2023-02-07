//elements
const formEl = document.getElementById("form");
const usernameEl = document.getElementById("username");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const confirmPasswordEl = document.getElementById("password2");

// event listneres
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

// functions

// error function
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

// sucess function
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

// validating email format
const isValidEmail = (email) => {
  // regular expression for email
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// validating user input
const validateInputs = () => {
  const username = usernameEl.value.trim();
  const email = emailEl.value.trim();
  const password = passwordEl.value.trim();
  const confirmPassword = confirmPasswordEl.value.trim();

  // username
  if (username === "") {
    setError(usernameEl, "Username is required");
  } else {
    setSuccess(usernameEl);
  }

  // email
  if (email === "") {
    setError(emailEl, "Email is required");
  } else if (!isValidEmail(email)) {
    setError(emailEl, "Provide a valid email address");
  } else {
    setSuccess(emailEl);
  }

  // password
  if (password === "") {
    setError(passwordEl, "Password is required");
  } else if (password.length < 8) {
    setError(passwordEl, "Password must be at least 8 character.");
  } else {
    setSuccess(passwordEl);
  }

  // confirm password
  if (confirmPassword === "") {
    setError(confirmPasswordEl, "Please confirm your password");
  } else if (confirmPassword.length < 8) {
    setError(confirmPasswordEl, "Password must be at least 8 character.");
  } else if (confirmPassword !== password) {
    setError(confirmPasswordEl, "Passwords doesn't match");
  } else {
    setSuccess(confirmPasswordEl);
  }
};