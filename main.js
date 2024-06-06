const form = document.querySelector("form")
const email = document.querySelector("#email")
const pass = document.querySelector("#password")
const userName = document.querySelector("#full-name")

const nameRegex = /^[A-Z][a-zA-Z0-9]* [a-z][a-zA-Z0-9]*$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

function validateName(name){
    return nameRegex.test(name);
}

function validateEmail(email){
    return emailRegex.test(email);
}

function validatePassword(password){
    return passwordRegex.test(password);
}

const arr = []


function local() {
   
   localStorage.setItem("email", arr.email);
   localStorage.setItem("password", arr.pass );
   localStorage.setItem("userName", arr.userName);

}



function validateForm(){
   errors = [];

   if(!validateName(userName.value)){
       errors.push('Invalid username. It should start with an uppercase letter and be 6 to 15 characters long.');
   }

   if(!validateEmail(email.value)){
       errors.push('Invalid Email')
   }

   if(!validatePassword(password.value)){
       errors.push('Invalid Password. It should be at least 8 characters long and contain at least one special character.')
   }

   if(errors.length> 0){
      alert(errors.join('\n'));
      return false;
  }
  return true;
}

form.addEventListener("submit", (event) => {
   event.preventDefault()     
   arr.userName = userName.value
   arr.email = email.value
   arr.pass = pass.value
   
   local()

   userName.value = ""
   email.value = ""
   pass.value = ""

   console.log(arr);

   form.reset()
   alert('REGISTRATION SUCCESSFULL.')
   window.location = "index.html"
        
    })

