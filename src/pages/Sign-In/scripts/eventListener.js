import postSignIn from '../scripts/postSignIn.js';

const eventListener = () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity() === true) {
            const user = await postSignIn();
            if (user) {
                window.location.href = '../Home-Page/home.html';
            } else {
                alert('Email atau password salah');
            }
        }
    });
};

export default eventListener;