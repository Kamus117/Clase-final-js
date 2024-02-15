const $cardTemplate = document.querySelector(`.card-template`);

const arrProducts = [
    {
        name: `Medialunas` ,
        img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI-aKEf9DIDMcfVZIGyJ3EuZvKYHwF6fNuXA&usqp=CAU` ,
        price: 300,
        id: 1,
    },
    {
        name: `Pan Negro` ,
        img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF1Y-4Uta5hKLyUkbKVeYE-ZvTQ8GedYpm3Q&usqp=CAU` ,
        price: 1600 ,
        id: 2,
    },
    {
        name: `Cremonas` ,
        img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtsi5ReUgp7BxDP7ZZe4jyDdSMA48ou3JD4Q&usqp=CAU` ,
        price: 700,
        id: 3,
    },
    {
        name: `Bizcochuelo` ,
        img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIIoVhqDBVrm2X0rnk5WpxJkg4jxWSGwRZw&usqp=CAU` ,
        price: 4000,
        id: 4,
    },
    {
        name: `Bizcochitos` ,
        img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJy3UK1TMvBqPL51SNWFovAXHQOTCyHpmDAA&usqp=CAU` ,
        price: 700,
        id: 5,
    },
    {
        name: `Torta Frita` ,
        img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA_rQdhSsqt4W5xm84mXYQSMznlBZC0tYQMA&usqp=CAU` ,
        price: 500,
        id: 6,
    },
];


const createCards =(arr)=>{
    return arr.map(prod =>{
        return `
        <div class="card" id="${prod.id}">
            <p class="card-title">${prod.name}</p>
            <img src="${prod.img}" alt="${prod.name}">
            <div>
                <b>$${prod.price}</b>
                <button class="buy-btn">Comprar</button>
            </div>
        </div>
        `
    })
};

const renderCards =()=>{
    $cardTemplate.innerHTML=(createCards(arrProducts)).join(``);
}

const init =()=>{
    renderCards()
};

init();
