let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;
const delay = 0; // Intervalo de atraso em milissegundos
let lastUpdate = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function updateMask(timestamp) {
    if (!lastUpdate) lastUpdate = timestamp;
    const progress = timestamp - lastUpdate;

    if (progress > delay) {
        // Suaviza o movimento com um atraso
        targetX += (mouseX - targetX) * 0.9;
        targetY += (mouseY - targetY) * 0.9;

        const staticEffect = document.querySelector('.static-video');
        staticEffect.style.setProperty('--mouseX', `${targetX}px`);
        staticEffect.style.setProperty('--mouseY', `${targetY}px`);

        lastUpdate = timestamp;
    }

    requestAnimationFrame(updateMask);
}

// Inicia a atualização da máscara
updateMask();
