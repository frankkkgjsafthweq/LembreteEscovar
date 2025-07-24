// Obtendo o botão e configurando o evento de clique
document.getElementById('start-btn').addEventListener('click', function() {
    // Adicionando uma animação de "desaparecimento" suave
    document.body.style.transition = 'opacity 1s ease-out';
    document.body.style.opacity = '0';

    // Após a animação, redireciona para o seu site
    setTimeout(function() {
        // Substitua a URL abaixo pela URL do seu projeto hospedado no GitHub Pages ou onde estiver hospedado
        window.location.href = 'https://seunome.github.io/lembrete-escovacao-dentes'; 
    }, 1000); // Espera 1 segundo antes de redirecionar
});
