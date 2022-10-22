import postSignUp from "../scripts/postSignUp.js";

const eventlistener = () => {
    const forms = document.querySelector('.needs-validation')
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('password2');

    forms.addEventListener('submit', event => {
        event.preventDefault();
        event.stopPropagation();

        if (forms.checkValidity() !== false) {
            if (password.value !== confirmPassword.value) {
                alert("Konfirmasi Password tidak sama");
            } else if (password.value === confirmPassword.value) {
                postSignUp();
                alert('Sign Up Success');
                window.location.href = '../Sign-In/signin.html';
            }
        }
    });
}

export default eventlistener;