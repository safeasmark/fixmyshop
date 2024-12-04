let cart = [];

// Add product to cart
function addToCart(id, name, price) {
  const quantityInput = document.getElementById(`quantity-${id}`);
  const quantity = parseInt(quantityInput.value);

  if (quantity <= 0 || isNaN(quantity)) {
    alert("Please enter a valid quantity.");
    return;
  }

  let item = cart.find((item) => item.id === id);
  if (item) {
    item.quantity += quantity;
  } else {
    cart.push({ id, name, price, quantity });
  }

  renderCart();
}

// Remove product from cart
function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  renderCart();
}

// Render the cart
function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  cartItemsContainer.innerHTML = "";

  let total = 0;
  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
              <img src="https://via.placeholder.com/100" alt="${item.name}">
              <h3>${item.name}</h3>
              <p>$${item.price} x ${item.quantity}</p>
              <button onclick="removeFromCart(${item.id})">Remove</button>
          `;
    cartItemsContainer.appendChild(cartItem);
    total += item.price * item.quantity;
  });

  cartTotal.innerText = `Total: $${total}`;
}

// Toggle cart visibility and hide/show the "Add to Cart" button
function toggleCart() {
  const cartElement = document.getElementById("cart");
  const addToCartButton = document.getElementById("add-to-cart-button"); // Assuming your button has this ID
  const isCartVisible = cartElement.classList.contains("show");

  // Toggle the cart visibility
  cartElement.classList.toggle("show");

  // Show/hide the "Add to Cart" button based on cart visibility
  if (isCartVisible) {
    addToCartButton.style.display = "block"; // Show button when cart is hidden
  } else {
    addToCartButton.style.display = "none"; // Hide button when cart is shown
  }
}

// Function to show the empty cart modal
function showEmptyCartModal() {
  const modal = document.getElementById("empty-cart-modal");
  modal.style.display = "flex"; // Display the modal
}

// Function to show the "Proceed to Checkout" modal
function showProceedCheckoutModal() {
  const modal = document.getElementById("proceed-checkout-modal");
  modal.style.display = "flex"; // Display the modal
}

// Function to close any modal by ID
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none"; // Hide the modal
}

// Checkout
function checkout() {
  if (cart.length === 0) {
    // Show the empty cart modal if the cart is empty
    showEmptyCartModal();
  } else {
    // Show the proceed to checkout modal
    showProceedCheckoutModal();

    // Optionally, you can reset the cart here if you want after checkout confirmation
    // cart = [];
    // renderCart();
    // toggleCart();
  }
}
