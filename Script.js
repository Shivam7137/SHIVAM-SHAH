const button1 = document.getElementById('button1');
button1.addEventListener('click', () => {
    resetStyles();
    button1.style.backgroundColor = 'black';
    button1.style.color ='white';
    button2.style.color ='black';
    button3.style.color ='black';
    document.body.style.backgroundColor = '#f2f2f2';
    document.body.style.color = 'black';
    const nav = document.querySelector('nav');
    nav.style.backgroundColor = 'black';
    const navLinks = document.querySelectorAll('nav a');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = 'white';
    }
});

const button2 = document.getElementById('button2');
button2.addEventListener('click', () => {
    resetStyles();
    button2.style.backgroundColor = 'black';
    button1.style.color ='black';
    button2.style.color ='white';
    button3.style.color ='black';
    document.body.style.backgroundColor = '#111';
    document.body.style.color = '#fff';
    const nav = document.querySelector('nav');
    nav.style.backgroundColor = '#111';
    const navLinks = document.querySelectorAll('nav a');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = '#fff';
    }
});

const button3 = document.getElementById('button3');
button3.addEventListener('click', () => {
    resetStyles();
    button3.style.backgroundColor = 'black';
    button1.style.color ='black';
    button2.style.color ='black';
    button3.style.color ='white';
    document.body.style.backgroundColor = '#A6C9EC';
    document.body.style.color = 'black';
    const nav = document.querySelector('nav');
    nav.style.backgroundColor = '#fff';
    const navLinks = document.querySelectorAll('nav a');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = 'black';
    }
});

function resetStyles() {
    button1.style.backgroundColor = '';
    button2.style.backgroundColor = '';
    button3.style.backgroundColor = '';
    button1.style.Color = '';
    button2.style.Color = '';
    button3.style.Color = '';
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
    const navLinks = document.querySelectorAll('nav a');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = '';
    }
}

const isDarkModeEnabled = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (isDarkModeEnabled) {
    button2.click();
} else {
    button1.click();
}









