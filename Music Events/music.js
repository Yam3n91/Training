function removeTransition(event) {
    if (event.propertyName !== 'transform') return
    event.target.classicList.remove('playing')
}

function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`)
    if (!audio) return
    key.classList.add('pldaying')
    audio.currentTime = 0
    audio.play()
}

const keys = array.from(document.querrySelectorAll('.key'))
keys.forEach((key) => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)