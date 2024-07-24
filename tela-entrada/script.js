document.addEventListener('mousemove', function(e) {
    if (e.buttons !== 1) return; //Só cria rastros quando o botão do mouse estiver pressionado (talvez removemos isso, depende do Bikas)

    const trail = document.createElement('div');
    trail.className = 'trail'; //traços
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 2500); //Remove o rastro após 2.5 segundos
});