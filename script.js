/* to show extra 6 products*/

document.addEventListener('DOMContentLoaded', () => {
    // Array of products to display
    const products = [

        {
            image: "./image/New folder/5555.png",
            title: "Gyro Sandwitch",
            rating: "4.5",
            price: "$22.00"
        },


        {
            image: "./image/New folder/Mask1 group.png",
            title: "Enchilade",
            rating: "4.0",
            price: "$10.00"
        },
        {
            image: "./image/New folder/Mask llllgroup.png",
            title: "Green Beans",
            rating: "4.7",
            price: "$30.00"
        },
        {
            image: "./image/New folder/Msk group.png",
            title: "Pizza",
            rating: "4.2",
            price: "$3.50"
        },
        {
            image: "./image/New folder/Masup.png",
            title: "Chicken pot pie",
            rating: "4.3",
            price: "$8.00"
        },
        {
            image: "./image/New folder/Mask llllgroup.png",
            title: "Green Salad",
            rating: "4.8",
            price: "$50.00"
        },


        {
            image: "./image/New folder/1.png",
            title: "Luchi",
            rating: "5.0",
            price: "$17.00"
        },
        {
            image: "./image/New folder/2.png",
            title: "Biriani",
            rating: "5.0",
            price: "$45.00"
        },
        {
            image: "./image/New folder/3.png",
            title: "Thai soup",
            rating: "4.9",
            price: "$12.00"
        },
        {
            image: "./image/New folder/4.png",
            title: "Moglai",
            rating: "5.0",
            price: "$18.50"
        },
        {
            image: "./image/New folder/ramen2.png",
            title: "Ramen",
            rating: "2.8",
            price: "$27.00"
        },
        {
            image: "./image/New folder/6.png",
            title: "Burger",
            rating: "3.9",
            price: "$5.00"
        }
        
       
        
    ];

    let showingMore = false; // Track if showing more products

    function toggleProducts() {
        const popularsSection = document.querySelector('.populars');
        const showMoreButton = document.querySelector('.show-more-buton');

        // Clear existing content
        popularsSection.innerHTML = '';

        if (!showingMore) {
            // Show all 12 products
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('popular');
                productDiv.innerHTML = `
                    <div class="popular-items">
                        <div class="popular-item">
                            <div>
                                <img class="popular-image" src="${product.image}" alt="${product.title}" class="src">
                            </div>
                            <div class="popular-item-des">
                                <div class="popular-item-des-left">
                                    <h4>${product.title}</h4>
                                    <button class="ADD-TO-CART">Add to cart</button>
                                </div>
                                <div class="popular-item-des-right">
                                    <div class="popular-item-des-right-up">
                                        <h4><span style="color: rgb(255, 107, 1)"><i class="fas fa-star"></i></span></h4>
                                        <h4>${product.rating}</h4>
                                    </div>
                                    <div class="price">
                                        <h4>${product.price}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                popularsSection.appendChild(productDiv);
            });

            showMoreButton.textContent = 'See Less Products'; // Change button text
        } else {
            // Show only the first 6 products
            products.slice(0, 6).forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('popular');
                productDiv.innerHTML = `
                    <div class="popular-items">
                        <div class="popular-item">
                            <div>
                                <img class="popular-image" src="${product.image}" alt="${product.title}" class="src">
                            </div>
                            <div class="popular-item-des">
                                <div class="popular-item-des-left">
                                    <h4>${product.title}</h4>
                                    <button class="ADD-TO-CART">Add to cart</button>
                                </div>
                                <div class="popular-item-des-right">
                                    <div class="popular-item-des-right-up">
                                        <h4><span style="color: rgb(255, 107, 1)"><i class="fas fa-star"></i></span></h4>
                                        <h4>${product.rating}</h4>
                                    </div>
                                    <div class="price">
                                        <h4>${product.price}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                popularsSection.appendChild(productDiv);
            });

            showMoreButton.textContent = 'See More Products'; // Change button text
        }

        // Toggle the state
        showingMore = !showingMore;
    }

    // Initial display of the first 6 products
    toggleProducts();

    // Add event listener to the "See More Products" button
    const showMoreButton = document.querySelector('.show-more-buton');
    showMoreButton.addEventListener('click', toggleProducts);
});








// delete this//

/* for hover buttons*/

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active')); // Remove active class from all buttons
            button.classList.add('active'); // Add active class to the clicked button
        });
    });
});










/* delete*/

/* for email subscription*/
document.getElementById('subscribe-button').addEventListener('click', function() {
    const emailInput = document.getElementById('email-input').value.trim(); // Trim whitespace
    const errorMessage = document.getElementById('error-message');

    if (emailInput === '') {
        errorMessage.classList.remove('hidden'); // Show error message
        errorMessage.textContent = "Enter your email"; // Ensure error message is set
    } else {
        errorMessage.classList.add('hidden'); // Hide error message
        alert('Subscribed successfully!');
        // Additional actions, e.g., sending email to a server, can be added here.
    }
});














