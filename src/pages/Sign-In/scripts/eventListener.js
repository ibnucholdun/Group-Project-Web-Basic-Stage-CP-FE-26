const eventListener = () => {
    const buttonSignIn = document.querySelector(".btn-sign-in");
    buttonSignIn.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "../Home-Page/home.html";
    })
};

export default eventListener;