window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop running
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
});

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // only remove transition after transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
});