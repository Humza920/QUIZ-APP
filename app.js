const getData = localStorage.getItem("send")
const formLogin = document.querySelector("form")

console.log(getData);

let data;

data = JSON.parse(getData)
console.log(data);

// let rom = data.map( item =>{
// console.log(item);
// })



formLogin.addEventListener('submit' , (event) =>{
    event.preventDefault()
    
if (getData === null || getData === null) {
        console.log("Create an account before LogIn");
}

let email = document.querySelector("#email")
let pass = document.querySelector("#password")



    if (getData.includes(email.value) && getData.includes(pass.value)) {

        alert("SUCCESFULLY LOGIN");
        formLogin.reset()
        window.location = "quiz.html"
        
    }  
        else  {
            // console.log("incorrect email or pass");
            
            email.value = ""
            pass.value = ""
            alert("incorrect email or pass");
        }  





        // email.value = ""
        // pass.value = ""
})
