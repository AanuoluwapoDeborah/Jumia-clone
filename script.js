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

const productTitle = document.getElementById("productTitle");
const brandName = document.getElementById("brandName");
const discountedPrice = document.getElementById("discountedPrice");
const initialPrice = document.getElementById("initialPrice");
const productImage = document.getElementById("productImage");

// const urlParams = new URLSearchParams(window.location.search);
// const productId = urlParams.get('productId');

const fetchProductData = async () => {
    try {
        const response = await fetch('products.json');
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error('Error fetching product data:', error);
    };
};

const showDescription = (id) => {
    fetchProductData()
        .then(products => {
            console.log("Products:", products)
            const product = products.find(prod => prod.id === id);
            console.log("Product:", product)
            if (product) {
                productImage.src = product.image;
                productTitle.innerText = product.title;
                brandName.innerText = product.brand;
                discountedPrice.innerText = product.discountedPrice;
                if (product.initialPrice) {
                    initialPrice.innerText = product.initialPrice;
                } else {
                    initialPrice.style.display = "none";
                }
            } else {
                console.error('Product not found');
            }
        })
        .catch(error => {
            console.error('Error fetching product data:', error);
        });
};

document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        const productId = parseInt(card.dataset.id);
        showDescription(productId);
    });
});

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