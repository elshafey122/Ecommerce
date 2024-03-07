// handle toggle
document.querySelector('.toggle').addEventListener('click', () => {
    document.querySelector('.toggle').classList.toggle('active');
    document.querySelector('nav').classList.toggle("show");
});


// search bar

const products = [
    {name:"iphone", price:32, image:"images/products/product 4.jpg", info:"it is a good mobile"},
    {name:"samsung tv", price:65, image:"images/products/product1.jpg", info:"it is a good tv"},
    {name:"sharp fridge", price:452, image:"images/products/product2.jpg", info:"it is a good fridge"},
    {name:"washing machine", price:362, image:"images/products/product3.jpg", info:"it is a good washing"},
    {name:"lenovo laptop", price:632, image:"images/products/product 5.jpg", info:"it is a good laptop"},
    {name:"casio watch", price:722, image:"images/products/product6.png", info:"it is a good watch"},
    
  ];
  
  const productsContainer = document.getElementById("productsContainer");
  const searchInput = document.getElementById("searchInput");
  const scrollLeftButton = document.getElementById("scrollLeft");
  const scrollRightButton = document.getElementById("scrollRight");
  
  // Function to display products
  function displayProducts(products) {
    productsContainer.innerHTML = '';
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.info}</p>
        <p>Price: $${product.price}</p>
      `;
      productsContainer.appendChild(productCard);
    });
  }
  
  // Function to filter products by name
  function filterProductsByName(query) {
    return products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
  }
  
  // Event listener for search input
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    const filteredProducts = filterProductsByName(query);
    displayProducts(filteredProducts);
  });
  
  // Event listener for scroll left button
  scrollLeftButton.addEventListener('click', () => {
    productsContainer.scrollLeft -= 100;
  });
  
  // Event listener for scroll right button
  scrollRightButton.addEventListener('click', () => {
    productsContainer.scrollLeft += 100;
  });
  
  // Initial display of products
  displayProducts(products);
  