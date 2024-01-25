function iniciar() {
    var button = document.getElementById('comeco');
    var heartContainer = document.getElementById('heart-container');
    var motivacional = document.getElementById('motivacional');

    // Esconde o botão
    button.style.display = 'none';

    // Exibe a animação do coração
    heartContainer.style.opacity = 1;


    motivacional.style.opacity = 1;

    document.getElementById("comeco").style.display = "none";
    document.getElementById('buttons-container').classList.remove('hidden');
    document.getElementById('yes-button').classList.remove('hidden');
    document.getElementById('no-button').classList.remove('hidden');
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

function fogos() {
    document.getElementById('fogos1').classList.remove('hidden');
    document.getElementById('fogos2').classList.remove('hidden');
    document.getElementById('fogos3').classList.remove('hidden');
    document.getElementById('buttons-container').classList.add('hidden');
    document.getElementById('yes-button').classList.add('hidden');
    document.getElementById('no-button').classList.add('hidden');
}