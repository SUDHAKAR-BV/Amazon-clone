let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById('cartCount').textContent = cartCount;
  alert('Item added to cart!');
}

function searchProducts() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const products = document.querySelectorAll('.product-card');
  products.forEach(product => {
    const title = product.querySelector('h3').textContent.toLowerCase();
    product.style.display = title.includes(searchTerm) ? 'block' : 'none';
  });
}

document.getElementById('searchInput').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    searchProducts();
  }
});
