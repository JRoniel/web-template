// Seleciona todas as imagens na página
let images = document.querySelectorAll('img');

// Adiciona o atributo 'loading="lazy"' a cada imagem
images.forEach((image) => {
    image.setAttribute('loading', 'lazy');
});