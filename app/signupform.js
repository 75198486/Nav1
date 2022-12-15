import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"

import{ auth } from './firebase.js'
import{ showMessage } from './showMessaje.js'
const signupform = document.querySelector('#signup-form')

signupform.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = signupform['signup-email'].value
    const password = signupform['signup-password'].value

    console.log(email, password)
    
    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)

        showMessage("Bienvenido " + userCredentials.user.email,)

    } catch (error) {
        console.log(error.message)
        console.log(error.code)
        if (error.code ==='auth/email-already-in-use'){
            showMessage('Ya te serrucharon con esa cuenta mano :c', "error")
        }
        if (error.code === 'auth/invalid-email'){
            showMessage('Te tas webeando en el email', "error")
        } else if (error.code === 'auth/weak-password'){
            showMessage('Pon una buena contraseña pe cachudo', "error")
        }
    }

})