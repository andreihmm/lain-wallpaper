const staticVideo = document.querySelector('.static-video');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth * 100;
    const mouseY = e.clientY / window.innerHeight * 100;

    // Atualiza as variáveis de posição do mouse para a máscara da estática
    staticVideo.style.setProperty('--mouseX', `${mouseX}%`);
    staticVideo.style.setProperty('--mouseY', `${mouseY}%`);
});
