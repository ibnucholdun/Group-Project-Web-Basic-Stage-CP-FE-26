
const postSignIn = async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('https://634e1a17b8ce95a1dd7e9aa0.mockapi.io/users')
    const data = await response.json();
    return data.find(user => user.email === email && user.password === password);
}

export default postSignIn;