import { backendServer } from "./global_variables.js";

const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const formDataObject = Object.fromEntries(formData);

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataObject),
        credentials: 'include',
    }

    const login = async () => {
        try {
            const response = await fetch(`${backendServer}/api/login`, options);
            const responseData = await response.json();
            
            if (response.ok) {
                window.location.href = './dashboard.html';
            } else {
                const data = await response.json();
                console.log(data); 
            }
        } catch (error) {
            console.log('An Error Occurred')
        }
    }
    login()
})