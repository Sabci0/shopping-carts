let shopRef = document.getElementById('shop');

let shopItemsData = [{

    id:"1",
    name:"Casual Shirt",
    price: 45,
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    img: "images/img-1.jpg"
},
    {
    id:"2",
    name:"Office Shirt",
    price: 100,
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    img: "images/img-2.jpg"
},
    {
        id:"3",
        name:"T Shirt",
        price: 25,
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        img: "images/img-3.jpg"
    },
    {
        id:"4",
        name:"Mens Suit",
        price: 300,
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        img: "images/img-4.jpg"
    },
]

let generateShop = () =>{
    return (shopRef.innerHTML = shopItemsData.map((x)=>{
        let { id, name, price, desc, img } =x;
        return `
        <div id=product-id-${id} class="shop__item">
            <img width="220" src="${img}" alt="">
            <div class="shop__item--details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>${price}</h2>
                    <div class="buttons">
                        <i class="bi bi-plus-lg"></i>
                        <div id=${id} class="quantity">0</div>
                        <i class="bi bi-dash-lg"></i>
                    </div>
                </div>
            </div>
        </div>`;

    }).join(""));
}
generateShop()