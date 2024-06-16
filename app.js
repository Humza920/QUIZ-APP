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
    alert("Create an account before LogIn");
  }
  if ( getData?.includes(email.value) && getData?.includes(pass.value) ) {
    Swal.fire({
      title: 'Success!',
      text: 'You have successfully logged in!',
      icon: 'success',
      confirmButtonText: 'Start Quiz'
  }).then((result) => {
          if (result.isConfirmed) {
              window.location = "quiz.html";
          }
      });
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
