const dataSpan = document.getElementById('data');

const storedData = localStorage.getItem('dato');

if (storedData) {
    dataSpan.textContent = storedData;
} else {
    dataSpan.textContent = 'No hay datos guardados en el localStorage.';
}
