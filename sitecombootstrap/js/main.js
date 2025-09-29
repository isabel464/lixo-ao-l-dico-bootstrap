document.addEventListener('DOMContentLoaded', function() {
    const btnDownload = document.getElementById('btnDownload');

    btnDownload.addEventListener('click', function() {
        alert('📥 Guia “Do Lixo ao Lúdico” enviado para seu e-mail ou disponível em breve para download!');
        // Aqui você pode integrar com um serviço de download ou e-mail marketing
    });

    // Adiciona animação ao rolar para seções
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
