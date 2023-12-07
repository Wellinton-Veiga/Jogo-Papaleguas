const papaleguas = document.querySelector('.papaleguas');

const jump = () => {
    papaleguas.classList.add('jump');

    setTimeout(() => {
        papaleguas.classList.remove('jump');

    }, 500);
}

document.addEventListener('keydown', jump);