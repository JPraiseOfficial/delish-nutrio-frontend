import { backendServer } from "./global_variables.js";
const form = document.getElementById('register-form');
const formErrors = document.querySelectorAll('.form-error')
console.log(formErrors)

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData);

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataObject),
    }

    const register = async () => {
        try {
            const response = await fetch(`${backendServer}/api/register`, options);
            const responseData = await response.json()

            if (response.ok) {
                window.alert('User Registered Successfully');
                window.location.href = './verification.html';
            } else {
                const responseData = await response.json();
                console.log(responseData)

            }

        } catch (error) {
            console.log('An error occurred')
        }

    }
    register()

})
