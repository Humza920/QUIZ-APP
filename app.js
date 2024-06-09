// GETTING DATA

const getData = localStorage.getItem("send");
console.log(getData);
const data = JSON.parse(getData);
console.log(data);

// HTML ELEMENTS THROUGH JS

const formLogin = document.querySelector("form");
let email = document.querySelector("#email");
let pass = document.querySelector("#password");

// LOG / NOR-LOG

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  if (getData === null || getData === "") {
    console.log("Create an account before LogIn");
  }
  if ( getData?.includes(email.value) && getData?.includes(pass.value) ) {
    alert("SUCCESFULLY LOGIN");
    formLogin.reset();
    window.location = "quiz.html";
  } else {
    console.log("incorrect email or pass");

    email.value = "";
    pass.value = "";
    alert("incorrect email or pass");
  }

  email.value = "";
  pass.value = "";

});
// end{code}
