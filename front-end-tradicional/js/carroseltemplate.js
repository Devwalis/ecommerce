const Carrosel = {

        imagens: [
        { id: '1',
         background: 'image/african-family-animate.svg', 
        front: 'image/mouses/mouse1 2.png', 
        tag: 'image/Group 115.png',
         title: 'Mouse' },

        { id: '2', background: 'image/african-family-animate.svg',
             front: 'image/fones/fone1.png', 
             tag: 'image/tagR$200.png', 
             title: 'Fone' },

        { id: '3', background: 'image/african-family-animate.svg', 
            front: 'image/notbooks/notbook1.png', 
            tag: 'image/Group 117.png', 
            title: 'notbook' },
        
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
        imageSrc: "image/teclados/teclado1.png",
        title: "Mouse Gamer",
        price: "75,00",
        buttonText: "Adicionar ao carrinho"
    },
    {
        imageSrc: "image/notbooks/notbook1.png",
        title: "Mouse Gamer",
        price: "2.500",
        buttonText: "Adicionar ao carrinho"
    },
    {
        imageSrc: "image/fones/fone1.png",
        title: "Mouse Gamer",
        price: "200.00",
        buttonText: "Adicionar ao carrinho"
    },
    {
        imageSrc: "image/cadeiras/cadeira1.png",
        title: "Cadeiras game",
        price: "1000.00",
        buttonText: "Adicionar ao carrinho"
    },
    {
        imageSrc: "image/consoles/ps51.png",
        title: "PS5",
        price: "2000.00",
        buttonText: "Adicionar ao carrinho"
    },
    {
        imageSrc: "image/ssds/ssd1.png",
        title: "SSD",
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
    // Adicione mais cards conforme necessário
];
let current = 0;


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
    

    if (cards.length === 0) return;

    current = (current + direction + cards.length) % cards.length;

    const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);

    cardContainer.style.transition ='transform 0.5s ease-in-out';
    const offset = -currentIndex * cardWidth;
    cardContainer.style.transform = `translateX(${offset}px)`;


    setTimeout(() =>{
        cardContainer.style.transition = 'none';
    }, 500);
}

document.addEventListener('DOMContentLoaded', carregarcard);