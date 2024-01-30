// javascript
// moon light effect


document.querySelector('#moon-moon').addEventListener('click', () => {
    document.body.classList.add('dark-theme');

    // set a timer to revert  to light theme after a certain time.
    setTimeout(() => {
        document.body.classList.remove('dark-theme');
    }, 5000);
});



// notification 

document.querySelector('#notification-bell').addEventListener('click', ()=> {
    let bell = this;
    bell.classList.add('vibrate');

// remove the class after the animation ends
bell.addEventListener('animationend', () => {
    bell.classList.remove('vibrate');
});

});

