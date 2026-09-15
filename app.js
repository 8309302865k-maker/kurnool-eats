let cart = [];

function addToCart(name, price) {

  cart.push({
    name: name,
    price: price
  });

  updateCart();

  alert(name + " added to cart 🛒");

}


function updateCart() {

  document.getElementById("cartCount").innerText = cart.length;

}


function openCart() {

  const modal = document.getElementById("cartModal");
  const items = document.getElementById("cartItems");
  const totalElement = document.getElementById("total");

  modal.style.display = "block";

  items.innerHTML = "";

  let total = 0;

  if (cart.length === 0) {

    items.innerHTML =
      "<p style='padding:20px 0'>Your cart is empty 🍽️</p>";

  }

  cart.forEach(function(item, index) {

    total += item.price;

    items.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <b>₹${item.price}</b>
      </div>
    `;

  });

  totalElement.innerText = total;

}


function closeCart() {

  document.getElementById("cartModal").style.display = "none";

}


function checkout() {

  if (cart.length === 0) {

    alert("Please add food to your cart first.");

    return;

  }

  alert(
    "Checkout screen coming next! 🚀\n\n" +
    "Kurnool Eats Order System"
  );

}


function searchRestaurants() {

  const search =
    document
      .getElementById("search")
      .value
      .toLowerCase();

  document
    .querySelectorAll(".restaurant")
    .forEach(function(card) {

      const name =
        card
          .dataset
          .name
          .toLowerCase();

      card.style.display =
        name.includes(search)
          ? "block"
          : "none";

    });

}


function filterFood(category) {

  document
    .querySelectorAll(".restaurant")
    .forEach(function(card) {

      if (
        category === "all" ||
        card.dataset.category === category
      ) {

        card.style.display = "block";

      } else {

        card.style.display = "none";

      }

    });

}


function focusSearch() {

  document
    .getElementById("search")
    .focus();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function showOrders() {

  alert(
    "📦 My Orders\n\n" +
    "No orders yet.\n" +
    "Order your favourite food!"
  );

}


function showProfile() {

  alert(
    "👤 Profile\n\n" +
    "Login / Signup will be added next."
  );

}


window.onclick = function(event) {

  const modal =
    document.getElementById("cartModal");

  if (event.target === modal) {

    closeCart();

  }

};
