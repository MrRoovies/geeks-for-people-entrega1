/* =========================
   SPA básico - carrega conteúdo sem recarregar a página
   ========================= */

const links = document.querySelectorAll('nav a');
const main = document.querySelector('main');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');

        fetch(href)
            .then(res => res.text())
            .then(html => {
                // Extrai apenas o conteúdo do <main>
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const newContent = doc.querySelector('main');
                main.innerHTML = newContent.innerHTML;
                window.scrollTo(0,0);
            });
    });
});
