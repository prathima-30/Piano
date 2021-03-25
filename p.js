const keys = document.querySelectorAll('.key');
const wkeys = document.querySelectorAll('.key.white');
const bkeys = document.querySelectorAll('.key.black');
const whites = ['a', 's', 'd', 'f','g', 'h'];
const blacks = ['q', 'w', 'e', 'r', 't']

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
    if (e.repeat) return
        const key = e.key
        const whiteKeyIndex = whites.indexOf(key)
        const blackKeyIndex = blacks.indexOf(key)

    if (whiteKeyIndex > -1) playNote(wkeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(bkeys[blackKeyIndex])
})

let playNote = (key) => {
        const noteSound = document.getElementById(key.dataset.note)
        noteSound.currentTime = 0
        noteSound.play()
        key.classList.add('active')
        noteSound.addEventListener('ended', () => {
            key.classList.remove('active')
        })
}