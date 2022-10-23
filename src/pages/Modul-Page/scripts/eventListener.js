const eventListener = () => {
    const logout = document.querySelector('.logout');
    
    logout.addEventListener('click', () => {
        window.location.href = '/index.html';
    });
} 

export default eventListener;