let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalEl = document.getElementById("cart-total");
  cartItemsContainer.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += Number(item.price); // Make sure it's a number

    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";
    itemEl.innerHTML = `
      <img src="../${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <h3>${item.name}</h3>
        <p><strong>Author:</strong> ${item.author}</p>
        <p>${item.description}</p>
        <p><strong>Price:</strong> ₦${item.price}</p>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
    cartItemsContainer.appendChild(itemEl);
  });

  cartTotalEl.textContent = "₦" + total;
}


function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();

