const textElementsLeft = document.querySelectorAll('.anim-left');

textElementsLeft.forEach(textElement => {
    const text = textElement.innerText;
    textElement.innerHTML = text.split('').map(letter => {
        return `<span class="letter">${letter}</span>`;
    }).join('');
})

const textElementsRight = document.querySelectorAll('.anim-right');

textElementsRight.forEach(textElement => {
    const text = textElement.innerText;
    textElement.innerHTML = text.split('').map(letter => {
        return `<span class="letter">${letter}</span>`;
    }).join('');
})

const textElementsRotate = document.querySelectorAll('.animRotate');

textElementsRotate.forEach(textElement => {
    let i = 3;
    const text = textElement.innerText;
    textElement.innerHTML = text.split('').map(letter => {
        i= i+0.02;
        return `<span class="letter" style="animation-delay: ${i}s">${letter}</span>`;
    }).join('');
})
