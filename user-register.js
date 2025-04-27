document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = event.target['first-name'].value;
    const lastName = event.target['last-name'].value;
    const email = event.target['email'].value;
    const password = event.target['password'].value;

    const userData = {
        firstName,
        lastName,
        email,
        password
    };

    localStorage.setItem('registeredUser', JSON.stringify(userData));

    alert('Registration Successful! Redirecting to Login Page...');
    window.location.href = 'user-login.html'; 
});