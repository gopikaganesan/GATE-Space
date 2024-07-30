document.addEventListener('DOMContentLoaded', () => {

    const nameValue = window.localStorage.getItem('User name');
    if(nameValue){
        document.getElementById('name').value = nameValue;
        document.getElementById('message').textContent = 'Edit Your Name';
        document.getElementById('welcomeMessage').setAttribute('style','display: none');
} else {
        document.getElementById('message').textContent = 'Enter Your Name';
}
})
