const form = document.getElementById('register-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    const data = Object.fromEntries(formData);

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data),
    }

    fetch('https://delish-nutrio.onrender.com/api/register', options)
        .then(response => {
            if (!response.ok) {
                return response.text().then(text => {
                    console.log(text);
                    throw new Error(`HTTP error! Status: ${response.status}`);
                });
            }
            return response.json();
        })
        .then(data => {  
            console.log('Success:', data); 
            window.location.href = './verification.html'; 
        })  
        .catch(error => {  
            console.error('Error:', error);  
        }); 
})
