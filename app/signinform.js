import {signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'
import{ showMessage } from './showMessaje.js'
const signInForm = document.querySelector('#login-form');

signInForm.addEventListener('submit',async e => {
    e. preventDefault()
    
    const email = signInForm['login-email'].value;
    const password = signInForm['login-password'].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials)

        const modal = bootstrap.Modal.getInstance(document.querySelector("#singupmodal"))
        modal.hide()

        showMessage("Bienvenido "+ credentials.user.email)

    } catch (error) {
        if (error.code === "auth/wrong-password"){
            showMessage('Error de contraseña Rey', 'error')
        } else if (error.code === "auth/user-not-found"){
            showMessage('Tu usuario no funca csmre', 'error')
        } else {
            showMessage(error.message,)
        }
    }

})