const Carrosel = {

        imagens: [
        { id: '1',
         background: 'image/african-family-animate.svg', 
        front: 'image/mouses/mouse1 2.png', 
        tag: 'image/Group 115.png',
         title: 'Mouse' },

        { id: '2', background: 'image/good-team-animate.svg',
             front: 'image/fones/fone1.png', 
             tag: 'image/Group 116.png', 
             title: 'Notbook' },

        { id: '3', background: 'image/world-childrens-day-animate.svg', 
            front: 'image/mouses/mouse3.png', 
            tag: 'image/Group 117.png', 
            title: 'Produto 3' },
        
    ],
    currentIndex: 0,

    init: function() {
        this.criar();
        document.getElementById('prevButton').addEventListener('click', () => this.prev());
        document.getElementById('nextButton').addEventListener('click', () => this.next());
       
    },

    criar: function() {
        this.updateCarousel();
        
    },

    updateCarousel: function() {
        const currentImage = this.imagens[this.currentIndex];
        document.getElementById('backgroundImage').src = currentImage.background;
        document.getElementById('frontImage').src = currentImage.front;
        document.getElementById('tagImage').src = currentImage.tag;
        document.getElementById('productTitle').textContent = currentImage.title;
    },

    next: function() {
        this.currentIndex = (this.currentIndex + 1) % this.imagens.length;
        this.updateCarousel();
    },

    prev: function() {
        this.currentIndex = (this.currentIndex - 1 + this.imagens.length) % this.imagens.length;
        this.updateCarousel();
    }
};


window.onload = function() {
    Carrosel.init();
};


const cardData = [
    {
        imageSrc: "image/mouses/mouse1 2.png",
        title: "Mouse Gamer",
        price: "75,00",
        buttonText: "Adicionar ao carrinho"
    },
    {
        imageSrc: "image/mouses/mouse1 2.png",
        title: "Mouse Gamer",
        price: "75,00",
        buttonText: "Adicionar ao carrinho"
    },
    {
        imageSrc: "image/mouses/mouse1 2.png",
        title: "Mouse Gamer",
        price: "75,00",
        buttonText: "Adicionar ao carrinho"
    },
    {
        imageSrc: "image/mouses/mouse1 2.png",
        title: "Mouse Gamer",
        price: "75,00",
        buttonText: "Adicionar ao carrinho"
    },
    {
        imageSrc: "image/mouses/mouse1 2.png",
        title: "Mouse Gamer",
        price: "75,00",
        buttonText: "Adicionar ao carrinho"
    },
    {
        imageSrc: "image/mouses/mouse1 2.png",
        title: "Mouse Gamer",
        price: "75,00",
        buttonText: "Adicionar ao carrinho"
    }
];

let currentIndex = 0;

// Função para carregar os dados
function loadCards() {
    createCards(cardData); // Usa os dados da variável cardData
}


function createCards(data) {
    const carouselInner = document.querySelector('.carousel-inner');

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card2');

        card.innerHTML = `
            <img src="${item.imageSrc}" alt="${item.title}">
            <h2>${item.title}</h2>
            <p>${item.price}</p>
            <button>${item.buttonText}</button>
        `;

        carouselInner.appendChild(card);
    });
}


function moveCarousel(direction) {
    const carouselInner = document.querySelector('.carousel-inner');
    const cards = document.querySelectorAll('.card2');
    const cardWidth = cards[0].offsetWidth + 10; 

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > cards.length - 1) {
        currentIndex = cards.length - 1;
    }

    const offset = -currentIndex * cardWidth;
    carouselInner.style.transform = `translateX(${offset}px)`;
}


window.addEventListener('load', loadCards);



const cardOferta = [
    {
        imageSrc: "image/mouses/mouse1 2.png",
        title: "Mouse Gamer",
        price: "75,00",
        buttonText: "Adicionar ao carrinho"
    },
    {
        imageSrc: "image/mouses/mouse1 2.png",
        title: "Mouse Gamer",
        price: "75,00",
        buttonText: "Adicionar ao carrinho"
    },
    // Adicione mais cards conforme necessário
];



function carregarcard() {
    ConstruirtCardDinamico(cardOferta);
}

function ConstruirtCardDinamico(pega) {
    const cardContainer = document.querySelector('.carroselContainer');

    pega.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card3');
        card.innerHTML = `
            <img src="${item.imageSrc}" alt="Produto Mouse">
            <h2>${item.title}</h2>
            <p>${item.price}</p>
            <button>${item.buttonText}</button>
        `;
        cardContainer.appendChild(card);
    });
}

function passaCarrosel(direction) {
    const cardContainer = document.querySelector('.carroselContainer');
    const cards = document.querySelectorAll('.card3');
    const cardWidth = cards[0].offsetWidth; // Largura de um card

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > cards.length - 1) {
        currentIndex = cards.length - 1;
    }

    const offset = -currentIndex * cardWidth;
    cardContainer.style.transform = `translateX(${offset}px)`;
}

document.addEventListener('DOMContentLoaded', carregarcard);