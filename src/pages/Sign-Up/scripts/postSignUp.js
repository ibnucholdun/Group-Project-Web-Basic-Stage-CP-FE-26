const postSignUp = async () => {
    try {
        await fetch('https://634e1a17b8ce95a1dd7e9aa0.mockapi.io/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nama_depan: document.getElementById('nama-depan').value,
                nama_belakang: document.getElementById('nama-belakang').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
            })
        });
    } catch (error) {
        console.log(error);
    }
}

export default postSignUp;