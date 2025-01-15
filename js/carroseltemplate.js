const Carrosel = {
    imagens: [
        { id: '1', background: 'image/african-family-animate.svg', front: 'image/mouses/mouse1 2.png', tag: 'image/Group 115.png', title: 'Produto 1' },
        { id: '2', background: 'image/good-team-animate.svg', front: 'image/mouses/mouse2.png', tag: 'image/Group 116.png', title: 'Produto 2' },
        { id: '3', background: 'image/world-childrens-day-animate.svg', front: 'image/mouses/mouse3.png', tag: 'image/Group 117.png', title: 'Produto 3' },
        // Adicione mais imagens conforme necessário
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

// Inicializa o carrossel quando a página carrega
window.onload = function() {
    Carrosel.init();
};