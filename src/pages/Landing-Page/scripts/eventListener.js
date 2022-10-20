const eventListener = () => {
    const buttonMulaiSekarang = document.querySelector('.btn-hero');

    buttonMulaiSekarang.addEventListener('click', () => {
        window.location.href = 'src/pages/Sign-Up/signup.html';
    })
}

export default eventListener;