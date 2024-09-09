const inputText = document.getElementById('inputText');
const buttonText = document.getElementById('buttonText');

buttonText.addEventListener('click', () => {
    const inputValue = inputText.value; 
    if (inputValue) {
        localStorage.setItem('dato', inputValue);
        alert('¡Dato guardado correctamente!');
    } else {
        alert('Por favor, ingresa un valor antes de guardar.');
    }
});
