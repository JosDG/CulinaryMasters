const btnSignIn = document.getElementById("sign-in"),
  btnSignup = document.getElementById("sign-up"),
  btnlogin = document.getElementById("Login"),
  formRegister = document.querySelector(".register"),
  formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", (e) => {
  formRegister.classList.add("hide");
  formLogin.classList.remove("hide");
});

btnSignup.addEventListener("click", (e) => {
  formLogin.classList.add("hide");
  formRegister.classList.remove("hide");
});

btnlogin.addEventListener("click", (e) => {
    //window.location.replace("../../index.html");
    //alert("si");
});
