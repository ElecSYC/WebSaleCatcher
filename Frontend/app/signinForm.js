import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
import { auth } from './firebase.js'
const signinForm = document.querySelector('#signin-form')

signinForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = signinForm['signin-email'].value
    const password = signinForm['signin-password'].value
    console.log(email, password)
    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)
    } catch (error) {
        console.log(error)
    }
})
