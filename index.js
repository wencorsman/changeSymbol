
const getCursorPosition = () => {
    const input = document.activeElement
    if (!['INPUT', 'TEXTAREA'].includes(input.tagName)) return {}

    return {
        input: document.activeElement,
        start: input.selectionStart,
        end: input.selectionEnd
    }
}


const setCursorPosition = (input, start, end) => {
    input.setSelectionRange(start, end || start);
}


const getChar = event => {
    let changedChar = change[event.key.replace(/key/gi, '').toUpperCase()];
    if (changedChar) return changedChar;
}


document.addEventListener('keydown', event => {

    const {
        input,
        start
    } = getCursorPosition();

    if (!input) return

    console.log(input, start);
    let old = input.value.split('');
    let replace = getChar(event);

    console.log(replace);
    if (!replace) return;

    old.splice(start, 0, replace);
    input.value = old.join('');
    setCursorPosition(input, start + 1);
    event.stopPropagation();
    event.preventDefault();
    console.log(getCursorPosition());

})


/* 
document.addEventListener('keyup', event => {

    const {
        input,
        start
    } = getCursorPosition();

    if (!input) return;
    event.stopPropagation();
    event.preventDefault();

})
 */