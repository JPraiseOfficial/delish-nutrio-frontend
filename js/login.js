import { backendServer } from "./global_variables.js";

const loginForm = document.querySelector('#login-form');
const loginResponse = document.querySelector('.login-response');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    loginResponse.textContent = '';

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
            
            if (response.ok) {
                loginResponse.classList.toggle('hidden');
                loginResponse.classList.add('login-success');
                loginResponse.textContent = 'Login Successful'
                window.location.href = './dashboard.html';
            } else {
                const data = await response.json();
                loginResponse.classList.toggle('hidden');
                loginResponse.classList.add('login-error');
                loginResponse.textContent = data.message;
            }
        } catch (error) {
            loginResponse.textContent = 'An Error Occurred';
        }
    }
    login()
})