
const eventListener = () => {
    const buttonSignIn = document.querySelector(".btn-sign-in");
    buttonSignIn.addEventListener("click", () => {
        window.location.href = "src/pages/Home-Page/home.html";
    })
};

export default eventListener;