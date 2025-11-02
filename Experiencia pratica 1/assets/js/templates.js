/* =========================
   Templates JS para criar componentes dinamicamente
   ========================= */

function createCard(title, description, imgSrc) {
    const article = document.createElement('article');
    article.innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
        <img src="${imgSrc}" alt="${title}">
    `;
    return article;
}

// Exemplo de uso:
// const container = document.querySelector('.projects-container');
// container.appendChild(createCard('Novo Projeto', 'Descrição...', 'assets/img/projects/proj4.png'));
