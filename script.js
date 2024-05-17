const navDropDown = document.getElementById('navDropDown');
const button = document.getElementById('buttonDiv');
const navDropDown2 = document.getElementById('navDropDown2');
const button2 = document.getElementById('buttonDiv2');

button.addEventListener('click', () => {
    navDropDown2.classList.remove('active');
    navDropDown.classList.toggle('active');
});

button2.addEventListener('click', () => {
    navDropDown.classList.remove('active');
    navDropDown2.classList.toggle('active');
});

// const productTitle = document.getElementById("product_title");
const productTitle = document.getElementById("productTitle");
const brandName = document.getElementById("brandName");
const discountedPrice = document.getElementById("discountedPrice");
const initialPrice = document.getElementById("initialPrice");
const productImage = document.getElementById("productImage");

const productTitle2 = document.getElementById("product_title");
const brandName2 = document.getElementById("brand_name");
const discountedPrice2 = document.getElementById("discounted_price");
const initialPrice2 = document.getElementById("initial_price");
const productImage2 = document.getElementById("product_image");

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('productId');

const fetchProductData = async () => {
    try {
        const response = await fetch('products.json');
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error('Error fetching product data:', error);
    };
};

const showDescription = (productId) => {
    fetchProductData()
        .then((products) => {
            const product = products.find(prod => prod.id === parseInt(productId));
            if (product) {
                productImage.src = product.image;
                productImage2.src = product.image;
                productTitle.innerHTML = product.title;
                productTitle2.innerHTML = product.title;
                brandName.innerHTML = product.brand;
                brandName2.innerHTML = product.brand;
                discountedPrice.innerHTML = product.discountedPrice;
                discountedPrice2.innerHTML = product.discountedPrice;
                if (product.initialPrice) {
                    initialPrice.innerHTML = product.initialPrice;
                    initialPrice2.innerHTML = product.initialPrice;
                } else {
                    initialPrice.style.display = "none";
                    initialPrice2.style.display = "none";
                };
            } else {
                console.error('Product not found');
            };
        })
        .catch(error => {
            console.error('Error fetching product data:', error);
        });
};


// let cart = [];

// const addToCart = (id) => {
//     let cartItems = JSON.parse(localStorage.getItem("cart"));
//     if (!cartItems) {
//         cartItems = [];
//     }
//     const storedProducts = JSON.parse(localStorage.getItem("products"));
//     const productToAdd = storedProducts.find(product => product.id === parseInt(id));
//     cartItems.push(productToAdd);
//     localStorage.setItem("cart", JSON.stringify(cartItems));
// };