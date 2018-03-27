const form = document.forms['loginForm'];
const nickname = form.elements['nickname'];
const email = form.elements['email'];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Check inputs
    if (nickname.value && email.value) {
        const user = {
            name: nickname.value,
            email: email.value
        };

        localStorage.setItem('user', JSON.stringify(user));

        window.location = 'index.html';
    }
});