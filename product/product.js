const novels = [
  {
    id: 1,
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "pics/gasby.jpeg",
    price: "5000",
  },
  {
    id: 2,
    name: "Romeo and Julliet",
    author: "William Shakespeare",
    image: "pics/romeo.jpeg",
    price: "4000",
  },
  {
    id: 3,
    name: "The Tempest",
    author: "William Shakespeare",
    image: "pics/tempest.jpeg",
    price: "3000",
  },
  {
    id: 4,
    name: "Twelfth Night",
    author: "William Shakespeare",
    image: "pics/twelfth.jpeg",
    price: "5200",
  },
  {
    id: 5,
    name: "Much Ado About Nothing",
    author: "William Shakespeare",
    image: "pics/much.jpeg",
    price: "1000",
  },
  {
    id: 6,
    name: "King Lear",
    author: "William Shakespeare",
    image: "pics/king.jpeg",
    price: "4700",
  },
  {
    id: 7,
    name: "As you like",
    author: "William Shakespeare",
    image: "pics/like.jpeg",
    price: "7000",
  },
  {
    id: 8,
    name: "Jane Eyre",
    author: "William Shakespeare",
    image: "pics/jane.jpeg",
    price: "2500",
  },
  {
    id: 9,
    name: "Watchmen",
    author: "Alan Moore",
    image: "pics/watchmen.jpg",
    price: "3000",
  },
  {
    id: 10,
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "pics/gasby.jpeg",
    price: "2200",
  },
  {
    id: 11,
    name: "Romeo and Julliet",
    author: "William Shakespeare",
    image: "pics/romeo.jpeg",
    price: "6000",
  },
  {
    id: 12,
    name: "The Tempest",
    author: "William Shakespeare",
    image: "pics/tempest.jpeg",
    price: "9000",
  },
  {
    id: 13,
    name: "Twelfth Night",
    author: "William Shakespeare",
    image: "pics/twelfth.jpeg",
    price: "5000",
  },
  {
    id: 14,
    name: "Much Ado About Nothing",
    author: "William Shakespeare",
    image: "pics/much.jpeg",
    price: "9000",
  },
  {
    id: 15,
    name: "King Lear",
    author: "William Shakespeare",
    image: "pics/king.jpeg",
    price: "500",
  },
  {
    id: 16,
    name: "As you like",
    author: "William Shakespeare",
    image: "pics/like.jpeg",
    price: "4500",
  },
  {
    id: 17,
    name: "Jane Eyre",
    author: "William Shakespeare",
    image: "pics/jane.jpeg",
    price: "2000",
  },
  {
    id: 18,
    name: "Watchmen",
    author: "Alan Moore",
    image: "pics/watchmen.jpg",
    price: "7000",
  },
  {
    id: 19,
    name: "The Tempest",
    author: "William Shakespeare",
    image: "pics/tempest.jpeg",
    price: "2000",
  },
  {
    id: 20,
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "pics/gasby.jpeg",
    price: "1500",
  },
];

// Function to display novels
function displayNovels() {
  const novelList = document.getElementById("novel-list");
  novels.forEach((novel) => {
    const novelCard = document.createElement("div");
    novelCard.innerHTML = `
      <img src="../${novel.image}" alt="${novel.name}" width="230" height="330">
      <h2>${novel.name}</h2>
      <p>Author: ${novel.author}</p>
      <p>Price: ₦${novel.price}</p>
      <button onclick="addToCart(${novel.id})">Add to Cart</button>
    `;
    novelList.appendChild(novelCard);
  });
}
displayNovels();

// Add to cart
function addToCart() {
  const product = {
    title: "Digital Mastery",
    author: "John Doe",
    image: "product/image1.jpg",
    summary: "This is a brief summary of the product."
  };
  localStorage.setItem("cartItem", JSON.stringify(product));
  window.location.href = "/cart/cart.html"; // or remove this to stay on page
}

// Set preview link with query string
const previewURL = `preview.html?title=Digital%20Mastery&author=John%20Doe&image=product/image1.jpg&summary=This%20is%20a%20brief%20summary%20of%20the%20product.`;
document.getElementById("preview-link").href = previewURL;


