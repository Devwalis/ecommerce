
import React, { useState } from 'react';


// Componente de Carrosel principal
const MainCarousel = () => {
    const [currentIndex, setCurrentIndex ] = useState(0);

const images = [
    { 
        id: '1',
        background: 'image/african-family-animate.svg', 
        front: 'image/mouses/mouse1 2.png', 
        tag: 'image/Group 115.png',
        title: 'Mouse'
      },
      { 
        id: '2', 
        background: 'image/good-team-animate.svg',
        front: 'image/fones/fone1.png', 
        tag: 'image/Group 116.png', 
        title: 'Notebook'
      },
      { 
        id: '3', 
        background: 'image/world-childrens-day-animate.svg', 
        front: 'image/mouses/mouse3.png', 
        tag: 'image/Group 117.png', 
        title: 'Produto 3'
      },
];

const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
};

return(
    <div className="main-carousel">
        <div className="carousel-content">
            <img id="backgroundImage" src={images[currentIndex].background} alt="Backgroud" ></img>
            <img id="frontImage" src={images[currentIndex].front}></img>
            <img id="tagImage" src={images[currentIndex].tag} alt="Tag" ></img>
            <h2 id="productTitle"src={images[currentIndex].title}></h2>
        </div>
        <button className="carousel-button prev" onClick={prev}>&lt;</button>
        <button className="carousel-button next" onClick={next}>&gt;</button>
    </div>
);


};



const ProductCarousel = ({item}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardWidth = 250; //ajustar conforme o estilo do card

    const handleMove = (direction) => {
        setCurrentIndex(prev => {
            const newIndex = prev + direction;
            return Math.max(0, Math.min(newIndex, items.length -1));
        });
        
    }

    return(
        <div className="product-carousel">
            <div className="carousel-inner">
                style={{transform: `translateX(-${currentIndex * cardWidth}px)`}}
                {items.map((item, index)=>(
                    <div key={index} className="card2">
                        <img src={item.imageSrc} alt={item.title}></img>
                        <h2>{item.title}</h2>
                        <p>R${item.price}</p>
                        <button>{item.buttonText}</button>
                    </div>
                ))
                }
            </div>
            <button className="carousel-button" onClick={() => handleMove(-1)}>&lt;</button>
            <button className="carousel-button" onClick={() => handleMove(1)}>&gt;</button>
        </div>
    )
};

//Componente principal da página
const App =() => {
    const cardData = [
        {
            imageSrc: "image/mouses/mouse1 2.png",
      title: "Mouse Gamer",
      price: "75,00",
      buttonText: "Adicionar ao carrinho"
        },
    ];
return(
    <div className="app">
        <MainCarousel />

        <h2> Produto em Oferta</h2>
        <ProductCarousel items={cardData} />

        <h2>Ofertas Especiais</h2>
        <ProductCarousel items={cardOferta} />
    </div>
);
};

export default App;

