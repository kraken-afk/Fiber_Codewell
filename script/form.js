const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("sub");
const eye = document.querySelector(".hide");
const cBox = document.getElementById("agree");
const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");
let auth = false;
let checkbox = false;

if (cBox.checked) {
  submit.classList.add("allCheck");
}

name.addEventListener("keyup", (e) => check(name));
email.addEventListener("keyup", (e) => check(email));
password.addEventListener("keyup", (e) => check(password));
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const a = check(name);
  const b = check(email);
  const c = check(password);
  if (a && b && c) {
    auth = true;
  }
  if (auth && cBox.checked) {
    modal.classList.add("show");
  } else {
    alert("fill the form correctly");
  }
});

cBox.addEventListener("click", (e) => {
  submit.classList.toggle("allCheck");
});

eye.addEventListener("click", (e) => {
  document.querySelector(".hide svg").classList.toggle("unhide");
  if (document.querySelector(".hide svg").classList.contains("unhide")) {
    password.type = "text";
  } else {
    password.type = "password";
  }
});

close.addEventListener("click", (e) => {
  modal.classList.remove("show");
});

function check(value) {
  if (value.id === "name") {
    if (!value.value) {
      value.className = "error";
      return false;
    } else {
      value.className = "succes";
      return true;
    }
  } else if (value.id === "email") {
    if (value.value.length < 4) {
      value.className = "error";
      return false;
    } else {
      value.className = "succes";
      return true;
    }
  } else {
    if (value.value.length < 8) {
      value.className = "error";
      return false;
    } else {
      value.className = "succes";
      return true;
    }
  }
}
