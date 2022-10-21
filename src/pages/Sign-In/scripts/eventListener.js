const buttonSignIn = document.querySelector(".btn-sign-in");

const eventListener = () => {
    buttonSignIn.addEventListener("click", () => {
        window.location.href = "src/pages/Home-Page/home.html";
    })
};

export default eventListener;