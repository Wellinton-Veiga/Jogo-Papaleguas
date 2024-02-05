const papaleguas = document.querySelector('.papaleguas');
const coyote = document.querySelector('.coyote');


const jump = () => {
    papaleguas.classList.add('jump');

    setTimeout(() => {
        papaleguas.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const coyotePosition = coyote.offsetLeft;
    const papaleguasPosition = +window.getComputedStyle(papaleguas).bottom.replace('px',' ');

    if (coyotePosition <= 100 && coyotePosition > 0 && papaleguasPosition < 80) {

        coyote.style.animation = 'none';
        coyote.style.left = `${coyotePosition}px`;

        papaleguas.style.animation = 'none';
        papaleguas.style.bottom = `${papaleguasPosition}px`;
    }
    
}, 10);

document.addEventListener('keydown', jump);