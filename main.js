import {onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import{auth} from './app/firebase.js'
import'./app/signupform.js'
import'./app/signinform.js'


onAuthStateChanged(auth, async(user)=> {
    
})

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
