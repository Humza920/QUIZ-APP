const getPass = localStorage.getItem("password")
const getEmail = localStorage.getItem("email")
const formLogin = document.querySelector("form")

formLogin.addEventListener('submit' , (event) =>{
    event.preventDefault()
    
if (getEmail === null || getPass === null) {
        console.log("Create an account before LogIn");
}

const email = document.querySelector("#email").value
const pass = document.querySelector("#password").value

if (getEmail === email || getPass === pass) {

    alert("SUCCESFULLY LOGIN");
    formLogin.reset()
    window.location = "quiz.html"
    
}  
    else {
        console.log("incorrect email or pass");}  
})
