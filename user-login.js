
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = event.target['email'].value;
    const password = event.target['password'].value;

    const storedUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert('Login Successful!');
        window.location.href = "index.html";
        
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
