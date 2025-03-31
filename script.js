document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".card").forEach(card => {
        const priceBtn = card.querySelector(".price-btn");
        const priceText = card.querySelector(".price-text");
        const addToCartBtn = card.querySelector(".add-to-cart-btn");
        const decreaseBtn = card.querySelector(".decrease");
        const increaseBtn = card.querySelector(".increase");
        const quantityText = card.querySelector(".quantity");
        const totalPriceText = card.querySelector(".total-price");
        const price = parseInt(card.getAttribute("data-price"));
        let quantity = 0;

        // Show price when "Price" button is clicked
        priceBtn.addEventListener("click", () => {
            priceText.textContent = `Price: ₹${price}`;
            priceText.classList.remove("hidden");
        });

        // Show cart controls when "Add to Cart" button is clicked
        addToCartBtn.addEventListener("click", () => {
            decreaseBtn.classList.remove("hidden");
            increaseBtn.classList.remove("hidden");
            quantityText.classList.remove("hidden");
            totalPriceText.classList.remove("hidden");
        });

        // Increase quantity (max 20)
        increaseBtn.addEventListener("click", () => {
            if (quantity < 20) {
                quantity++;
                quantityText.textContent = quantity;
                totalPriceText.textContent = `Total: ₹${quantity * price}`;
            }
        });

        // Decrease quantity (min 0)
        decreaseBtn.addEventListener("click", () => {
            if (quantity > 0) {
                quantity--;
                quantityText.textContent = quantity;
                totalPriceText.textContent = `Total: ₹${quantity * price}`;
            }
        });
    });
});
