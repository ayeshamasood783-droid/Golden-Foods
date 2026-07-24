/* ==========================================================================
   1. CONFIGURATION & STATE
   ========================================================================== */
const WHATSAPP_NUMBER = "923220214581";

const MENU_DATA = [
  {
    id: 1,
    name: "Classic Loaded Fries",
    category: "Loaded Fries",
    price: 450,
    rating: 4.8,
    isFeatured: true,
    tag: "Bestseller",
    description: "Crispy skin-on fries smothered in hot cheddar cheese, signature sauce, and jalapenos.",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    name: "Chicken Loaded Fries",
    category: "Loaded Fries",
    price: 650,
    rating: 4.9,
    isFeatured: true,
    tag: "Chef Special",
    description: "Golden fries topped with juicy grilled chicken chunks, melted cheese, and garlic sauce.",
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    name: "Special Loaded Fries",
    category: "Loaded Fries",
    price: 800,
    rating: 5.0,
    isFeatured: false,
    tag: "Ultimate",
    description: "Double crispy fries loaded with crispy chicken, pepperoni, mushrooms, and triple cheese blend.",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    name: "Chicken Shawarma",
    category: "Shawarma",
    price: 300,
    rating: 4.7,
    isFeatured: false,
    tag: "Popular",
    description: "Authentic Arabic pita stuffed with slow-roasted spiced chicken, pickles, and garlic toum.",
    image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    name: "Special Chicken Shawarma",
    category: "Shawarma",
    price: 420,
    rating: 4.9,
    isFeatured: true,
    tag: "Must Try",
    description: "Extra chicken wrap layered with melted cheese slice, spiced fries inside, and secret sauce.",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    name: "Crispy Chicken Roll",
    category: "Rolls",
    price: 350,
    rating: 4.8,
    isFeatured: true,
    tag: "Crispy",
    description: "Golden fried chicken strip wrapped in a hot flaky paratha with spicy mayo and onions.",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 7,
    name: "Potato Roll",
    category: "Rolls",
    price: 220,
    rating: 4.5,
    isFeatured: false,
    tag: "Veggie",
    description: "Spiced mashed potato cutlet fried to perfection, rolled in crisp flatbread with mint chutney.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 8,
    name: "Crispy Chicken Burger",
    category: "Burgers",
    price: 480,
    rating: 4.7,
    isFeatured: false,
    tag: "Classic",
    description: "Crispy fried fillet topped with fresh lettuce, crunchy pickles, and creamy mayonnaise.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 9,
    name: "Zinger Burger",
    category: "Burgers",
    price: 550,
    rating: 4.9,
    isFeatured: false,
    tag: "Spicy",
    description: "Double crusted extra-spicy Zinger chicken thigh fillet with fiery chili mayo in brioche bun.",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 10,
    name: "Special Golden Burger",
    category: "Burgers",
    price: 750,
    rating: 5.0,
    isFeatured: false,
    tag: "Monster",
    description: "Smash beef patty + crisp Zinger fillet layered with double cheese, caramelized onions, & bacon bits.",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 11,
    name: "Simple Fries",
    category: "Fries",
    price: 200,
    rating: 4.6,
    isFeatured: false,
    tag: "Light",
    description: "Freshly cut potatoes fried crispy gold and lightly salted. Served with ketchup.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 12,
    name: "Masala Fries",
    category: "Fries",
    price: 240,
    rating: 4.7,
    isFeatured: false,
    tag: "Zesty",
    description: "Golden fries tossed in signature peri-peri & chaat spice blend for a spicy kick.",
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 13,
    name: "Chicken Pakora (6 Pcs)",
    category: "Snacks",
    price: 380,
    rating: 4.8,
    isFeatured: false,
    tag: "Traditional",
    description: "Juicy chicken cubes coated in spiced gram flour batter, deep fried till super crispy.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 14,
    name: "Crispy Chicken Bites",
    category: "Snacks",
    price: 420,
    rating: 4.8,
    isFeatured: false,
    tag: "Crunchy",
    description: "Bite-sized boneless chicken poppers served with honey mustard dipping sauce.",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=600"
  }
];

let cart = [];

/* ==========================================================================
   2. DOM ELEMENTS
   ========================================================================== */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileCloseBtn = document.getElementById('mobile-close-btn');
const navOverlay = document.getElementById('nav-overlay');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

const menuGrid = document.getElementById('menu-grid');
const featuredGrid = document.getElementById('featured-grid');
const filterTabs = document.getElementById('filter-tabs');

const cartCountBadge = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartTotalEl = document.getElementById('cart-total');
const clearCartBtn = document.getElementById('clear-cart-btn');
const whatsappCheckoutBtn = document.getElementById('whatsapp-checkout-btn');
const addressInput = document.getElementById('delivery-address');

const backToTopBtn = document.getElementById('backToTop');

/* ==========================================================================
   3. INIT & EVENT LISTENERS
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedItems();
  renderMenuItems('all');
  initScrollAnimations();
  
  window.addEventListener('scroll', handleNavbarScroll);
  hamburger.addEventListener('click', openMobileMenu);
  if(mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileMenu);
  if(navOverlay) navOverlay.addEventListener('click', closeMobileMenu);
  
  navLinks.forEach(link => link.addEventListener('click', closeMobileMenu));
  filterTabs.addEventListener('click', handleFilterClick);
  
  window.addEventListener('scroll', handleBackToTopVisibility);
  backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  
  clearCartBtn.addEventListener('click', clearCart);
  whatsappCheckoutBtn.addEventListener('click', sendWhatsAppOrder);
});

/* ==========================================================================
   4. NAVBAR & SCROLL INTERACTION
   ========================================================================== */
function handleNavbarScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

function openMobileMenu() {
  navMenu.classList.add('open');
  if(navOverlay) navOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  navMenu.classList.remove('open');
  if(navOverlay) navOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function scrollToOrder() {
  const orderSection = document.getElementById('order');
  if(orderSection) {
    orderSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function handleBackToTopVisibility() {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
}

/* ==========================================================================
   5. MENU RENDER & FILTERING
   ========================================================================== */
function createFoodCardHTML(item) {
  return `
    <div class="food-card reveal active">
      <div class="food-img-wrapper">
        <span class="food-tag">${item.tag}</span>
        <img src="${item.image}" alt="${item.name}" class="food-img" loading="lazy">
      </div>
      <div class="food-content">
        <div class="food-title-row">
          <h3 class="food-name">${item.name}</h3>
          <span class="food-rating"><i class="fa-solid fa-star"></i> ${item.rating}</span>
        </div>
        <p class="food-desc">${item.description}</p>
        <div class="food-footer">
          <span class="food-price">Rs. ${item.price}</span>
          <button class="btn-add-cart" onclick="addToCart(${item.id})" aria-label="Add ${item.name} to order">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderFeaturedItems() {
  const featured = MENU_DATA.filter(item => item.isFeatured);
  featuredGrid.innerHTML = featured.map(createFoodCardHTML).join('');
}

function renderMenuItems(category = 'all') {
  const filtered = category === 'all' 
    ? MENU_DATA 
    : MENU_DATA.filter(item => item.category === category);
    
  menuGrid.innerHTML = filtered.map(createFoodCardHTML).join('');
}

function handleFilterClick(e) {
  if (!e.target.classList.contains('filter-btn')) return;

  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');

  const category = e.target.getAttribute('data-category');
  renderMenuItems(category);
}

/* ==========================================================================
   6. CART & ORDER SYSTEM WITH FLOATING VIEW CART
   ========================================================================== */
function addToCart(id) {
  const item = MENU_DATA.find(product => product.id === id);
  if (!item) return;

  const existing = cart.find(cartItem => cartItem.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  updateCartUI();
  
  const cartTrigger = document.getElementById('cart-trigger');
  cartTrigger.style.transform = 'scale(1.2)';
  setTimeout(() => cartTrigger.style.transform = 'scale(1)', 200);
}

function updateQuantity(id, change) {
  const item = cart.find(cartItem => cartItem.id === id);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    removeFromCart(id);
  } else {
    updateCartUI();
  }
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
}

function clearCart() {
  cart = [];
  updateCartUI();
}

function updateCartUI() {
  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  // Update Header Badge
  cartCountBadge.textContent = totalItemsCount;

  // Update Floating View Cart Button
  const floatingCartBtn = document.getElementById('floatingCartBtn');
  const floatingCartCount = document.getElementById('floatingCartCount');

  if (totalItemsCount > 0) {
    floatingCartBtn.classList.add('show');
    floatingCartCount.textContent = `${totalItemsCount} ${totalItemsCount === 1 ? 'Item' : 'Items'}`;
  } else {
    floatingCartBtn.classList.remove('show');
  }

  // Cart List Render
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-basket-shopping"></i>
        <p>Your basket is currently empty.</p>
        <span style="font-size:0.8rem; opacity:0.6;">Add delicious items from the menu to start!</span>
      </div>
    `;
  } else {
    cartItemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">Rs. ${item.price} each</div>
        </div>
        <div class="cart-item-controls">
          <div class="qty-btn-group">
            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
            <span class="qty-value">${item.quantity}</span>
            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
          </div>
          <div class="cart-item-total">Rs. ${item.price * item.quantity}</div>
          <button class="btn-remove" onclick="removeFromCart(${item.id})" aria-label="Remove Item">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    `).join('');
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartSubtotalEl.textContent = `Rs. ${subtotal}`;
  cartTotalEl.textContent = `Rs. ${subtotal}`;
}

/* ==========================================================================
   7. WHATSAPP ORDER GENERATION
   ========================================================================== */
function sendWhatsAppOrder() {
  if (cart.length === 0) {
    alert("Your order basket is empty! Please add some items before checking out.");
    return;
  }

  const address = addressInput.value.trim();
  if (!address) {
    alert("Barah-e-karam apna Delivery Address zaroor darj karein!");
    addressInput.focus();
    return;
  }

  let message = "Hello GOLDEN FOODS! 👋\nI would like to place an order:\n\n";
  
  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.quantity}x ${item.name} - Rs. ${item.price * item.quantity}\n`;
  });

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  message += `\n------------------------------`;
  message += `\nSubtotal: Rs. ${total}`;
  message += `\nDelivery Charge: FREE (Rs. 0)`;
  message += `\nTotal Amount: Rs. ${total}`;
  message += `\n------------------------------`;
  message += `\n📍 *Delivery Address:* ${address}`;
  message += `\n------------------------------`;
  message += `\nPlease confirm my order!`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  window.open(whatsappURL, '_blank');
}

/* ==========================================================================
   8. SCROLL REVEAL ANIMATIONS
   ========================================================================== */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}