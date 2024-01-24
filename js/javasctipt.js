function iniciar() {
    var button = document.getElementById('comeco');
    var heartContainer = document.getElementById('heart-container');
    var motivacional = document.getElementById('motivacional');

    // Esconde o botão
    button.style.display = 'none';

    // Exibe a animação do coração
    heartContainer.style.opacity = 1;


    motivacional.style.opacity = 1;
}
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

noButton.addEventListener('mouseover', () => {
    yesButton.style.position = 'absolute';
    yesButton.style.top = `${Math.floor(Math.random() * 20)}%`;
    yesButton.style.left = `${Math.floor(Math.random() * 80)}%`;

    noButton.style.position = 'absolute';
    noButton.style.top = `${Math.floor(Math.random() * 20)}%`;
    noButton.style.left = `${Math.floor(Math.random() * 80)}%`;
});