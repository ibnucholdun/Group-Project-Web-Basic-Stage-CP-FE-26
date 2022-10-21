const eventlistener = () => {
    const buttonSignUp = document.querySelector('.btn-sign-up');
    buttonSignUp.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = '../Sign-In/signin.html';
    });
}

export default eventlistener;