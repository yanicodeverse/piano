const white_keys = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const black_keys = ['s', 'd', 'g', 'h', 'j'];


const keys = document.querySelectorAll('.key');
const white =document.querySelectorAll('.key.white');
const black =document.querySelectorAll('.key.black');

keys.forEach(key => {
    key.addEventListener('click', () => playnote(key));
})

document.addEventListener('keydown', e => {

    if (e.repeat) return

    const key = e.key;
    const white_index = white_keys.indexOf(key);
    const black_index = black_keys.indexOf(key);

    if  (white_index > -1) playnote(white[white_index]);
    if  (black_index > -1) playnote(black[black_index]);
})

let playnote = (key) => {
    const notesound = document.getElementById(key.dataset.note);
    notesound.currentTime = 0;
    notesound.play();
    key.classList.add('active');
    notesound.addEventListener('ended', () => {
        key.classList.remove('active');
    })
} 