const welcomeContainer = document.querySelector('.welcome-container');
const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');


btnPopup.addEventListener('click', () => {
    welcomeContainer.style.display = 'none'; 
    wrapper.classList.add('active-popup'); 
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup'); 
    welcomeContainer.style.display = 'flex'; 
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});




