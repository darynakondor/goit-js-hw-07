const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');
nameInput.addEventListener('input', () => {
    const nameInpTrim = nameInput.value.trim()
    nameOutput.textContent = nameInpTrim? nameInpTrim : 'Anonymous'
})