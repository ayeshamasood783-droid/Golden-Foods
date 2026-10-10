/* Raja Golden Foods menu and WhatsApp cart */
const WHATSAPP_NUMBER = "923343676822"; // Primary number from the supplied banner (0334-3676822)
const MENU_DATA = [
  {
    "id": 1,
    "name": "Classic Burger",
    "category": "Burgers",
    "price": 450,
    "rating": 4.8,
    "isFeatured": true,
    "tag": "Popular",
    "description": "Juicy classic burger with fresh salad and sauce.",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600"
  },
  {
    "id": 2,
    "name": "Zinger Burger",
    "category": "Burgers",
    "price": 550,
    "rating": 4.8,
    "isFeatured": true,
    "tag": "Popular",
    "description": "Crispy spicy chicken fillet burger.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vMOxRjTLdN2vZarc2A6DEphJqiO-xWRibGfLQIebqg&s=10"
  },
  {
    "id": 3,
    "name": "Chicken Shawarma",
    "category": "Shawarma",
    "price": 300,
    "rating": 4.8,
    "isFeatured": true,
    "tag": "Popular",
    "description": "Chicken shawarma with creamy garlic sauce.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsaKcYtT7i4xkDOvcOI8bVpUjwm6dSroUTYPjyAre2_pX_FDoArg6uEbU&s=10"
  },
  {
    "id": 4,
    "name": "Chicken Roll",
    "category": "Rolls",
    "price": 250,
    "rating": 4.6,
    "isFeatured": false,
    "tag": "Fresh",
    "description": "Freshly prepared roll with seasoned filling.",
    "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=600"
  },
  {
    "id": 5,
    "name": "Chicken Samosa (2 pcs)",
    "category": "Snacks",
    "price": 120,
    "rating": 4.6,
    "isFeatured": false,
    "tag": "Fresh",
    "description": "Crispy golden samosas.",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600"
  },
  {
    "id": 6,
    "name": "Mixed Pakora",
    "category": "Snacks",
    "price": 250,
    "rating": 4.8,
    "isFeatured": true,
    "tag": "Popular",
    "description": "Crunchy mixed vegetable pakoras.",
    "image": "https://khinskitchen.com/wp-content/uploads/2024/04/vegetable-pakora-04.jpg"
  },
  {
    "id": 7,
    "name": "Fish Fry",
    "category": "BBQ & Fish",
    "price": 650,
    "rating": 4.8,
    "isFeatured": true,
    "tag": "Popular",
    "description": "Spiced, crispy fried fish.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf19v8rVn39ONRTWTrqY-urHmw81ijYhB2_jYPinWu1ZXGC8LFuBZAcis&s=10"
  },
  {
    "id": 8,
    "name": "Shami Kabab (2 pcs)",
    "category": "BBQ & Kababs",
    "price": 180,
    "rating": 4.6,
    "isFeatured": false,
    "tag": "Fresh",
    "description": "Traditional tender shami kababs.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Do8sXamQBH184r4Q7CfpCaRPK8ydZv6cUb7JkMJt_A&s=10"
  },
  {
    "id": 9,
    "name": "French Fries",
    "category": "Fries",
    "price": 220,
    "rating": 4.8,
    "isFeatured": true,
    "tag": "Popular",
    "description": "Golden crispy fries with seasoning.",
    "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=600"
  },
  {
    "id": 10,
    "name": "Karachi Chicken Biryani",
    "category": "Rice & Meals",
    "price": 380,
    "rating": 4.8,
    "isFeatured": true,
    "tag": "Popular",
    "description": "Aromatic Karachi-style chicken biryani.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXpR9n4tHHuieDITrSvQzB1VY7Tzif0ovyLlx2pCE1-w&s=10"
  },
  {
    "id": 11,
    "name": "Tikka Kabab (2 pcs)",
    "category": "BBQ & Kababs",
    "price": 300,
    "rating": 4.6,
    "isFeatured": false,
    "tag": "Fresh",
    "description": "Smoky, spicy tikka kababs.",
    "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/chicken-tikka-kebab.jpg"
  },
  {
    "id": 12,
    "name": "Chicken Broast",
    "category": "Chicken",
    "price": 550,
    "rating": 4.8,
    "isFeatured": true,
    "tag": "Popular",
    "description": "Crispy broast chicken served hot.",
    "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=600"
  },
  {
    "id": 13,
    "name": "Momos (6 pcs)",
    "category": "Snacks",
    "price": 350,
    "rating": 4.6,
    "isFeatured": false,
    "tag": "Fresh",
    "description": "Steamed dumplings served with spicy dip.",
    "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=600"
  },
  {
    "id": 14,
    "name": "Chicken Wings (6 pcs)",
    "category": "Chicken",
    "price": 450,
    "rating": 4.8,
    "isFeatured": true,
    "tag": "Popular",
    "description": "Seasoned chicken wings with a crisp finish.",
    "image": "https://tastesbetterfromscratch.com/wp-content/uploads/2014/09/Baked-Chicken-Wings-3.jpg"
  },
  {
    "id": 15,
    "name": "Chicken Pakora",
    "category": "Snacks",
    "price": 400,
    "rating": 4.6,
    "isFeatured": false,
    "tag": "Fresh",
    "description": "Bite-sized chicken coated in spiced batter.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5565JwxgLu_Pn8bTLCpQLXn1An6xNc2m5_vIUCiN9QBHZkjT48DfVv1Yi&s=10"
  },
  {
    "id": 16,
    "name": "Loaded Fries",
    "category": "Fries",
    "price": 550,
    "rating": 4.8,
    "isFeatured": true,
    "tag": "Popular",
    "description": "Fries topped with chicken, sauce and cheese.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29eYJyuiVZDisol7DC5ql8jQBKW8_b0gD3oKbHSrnRcpr4FbJ3fiMhx4&s=10"
  },
  {
    "id": 17,
    "name": "Chana Chaat",
    "category": "Chaat & Soup",
    "price": 220,
    "rating": 4.6,
    "isFeatured": false,
    "tag": "Fresh",
    "description": "Chickpeas tossed with chutney and chaat masala.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHfjohoARODtLMrpxRX5Ob0Y4v38iYPo7lM7-LPjhSsiR8pWIYyONxN5u&s=10"
  },
  {
    "id": 18,
    "name": "Chicken Soup",
    "category": "Chaat & Soup",
    "price": 250,
    "rating": 4.6,
    "isFeatured": false,
    "tag": "Fresh",
    "description": "Warm, comforting chicken soup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7XWvke4nAk2p3gCYlEbTHA7pndWRhyX8foMXorXIBVm-_7odjBkEvn9yx&s=10"
  },
  {
    "id": 19,
    "name": "Fresh Naan",
    "category": "Bread",
    "price": 60,
    "rating": 4.6,
    "isFeatured": false,
    "tag": "Fresh",
    "description": "Freshly baked naan.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmPGrECaS4O3sihu-q9n-F-mXtaHNRLPqFsn3zm6MRNA&s=10"
  },
  {
    "id": 20,
    "name": "Gulab Jamun (2 pcs)",
    "category": "Sweets",
    "price": 150,
    "rating": 4.6,
    "isFeatured": false,
    "tag": "Fresh",
    "description": "Soft, syrup-soaked gulab jamun.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRZpjjS6BmZBCvgVjN6J6lKqtRGJwComV4snb8HN2kKA&s=10"
  },
  {
    "id": 21,
    "name": "Ras Gulla (2 pcs)",
    "category": "Sweets",
    "price": 150,
    "rating": 4.6,
    "isFeatured": false,
    "tag": "Fresh",
    "description": "Soft and spongy ras gulla.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVqac4QyEDCbuO1s9rr4FBpg-_hk6ShAuJkLqt9q-vIw&s=10"
  },
  {
    "id": 22,
    "name": "Jalebiyan",
    "category": "Sweets",
    "price": 180,
    "rating": 4.8,
    "isFeatured": true,
    "tag": "Popular",
    "description": "Crispy jalebi spirals in sweet syrup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLWJZ3lFoua4wF2JbAeRe6WEBC6gyZvdwBifd26HjQtw&s=10"
  },
  {
    "id": 23,
    "name": "Man Pasand Sweet",
    "category": "Sweets",
    "price": 250,
    "rating": 4.6,
    "isFeatured": false,
    "tag": "Fresh",
    "description": "Man Pasand sweet selection.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEiqXWKZDvQC1OLyl_wu_9yYTWNZ1hEibHxfdn-xUAQg&s=10"
  },
  {
    "id": 24,
    "name": "Mong Phali (Peanuts)",
    "category": "Dry Fruits",
    "price": 180,
    "rating": 4.6,
    "isFeatured": false,
    "tag": "Fresh",
    "description": "Fresh crunchy peanuts.",
    "image": "https://images.unsplash.com/photo-1567892737950-30c4db37cd89?auto=format&fit=crop&q=80&w=600"
  },
  {
    "id": 25,
    "name": "Almonds (Badam)",
    "category": "Dry Fruits",
    "price": 450,
    "rating": 4.6,
    "isFeatured": false,
    "tag": "Fresh",
    "description": "Quality almonds, price shown per 250g.",
    "image": "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&q=80&w=600"
  },
  {
    "id": 26,
    "name": "Cashews (Kaju)",
    "category": "Dry Fruits",
    "price": 650,
    "rating": 4.6,
    "isFeatured": false,
    "tag": "Fresh",
    "description": "Quality cashews, price shown per 250g.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCrdxUwc0h3ZbWsxJDikDP7brc3LhBYLPEyVddGqYNVw&s=10"
  },
  {
    "id": 27,
    "name": "Pistachios (Pista)",
    "category": "Dry Fruits",
    "price": 600,
    "rating": 4.6,
    "isFeatured": false,
    "tag": "Fresh",
    "description": "Quality pistachios, price shown per 250g.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ubKiFXFQKxcz2c3e9mpcDA54Ftm2xLwtbqYnYYD0rQ&s"
  },
  {
    "id": 28,
    "name": "Walnuts (Akhrot)",
    "category": "Dry Fruits",
    "price": 500,
    "rating": 4.6,
    "isFeatured": false,
    "tag": "Fresh",
    "description": "Quality walnuts, price shown per 250g.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTND6POQJpgyFyMCl-pX9uPAw1oZLMxZOi8iUsungqTJw&s=10"
  },
  {
    "id": 29,
    "name": "Mixed Dry Fruits (250g)",
    "category": "Dry Fruits",
    "price": 650,
    "rating": 4.8,
    "isFeatured": true,
    "tag": "Popular",
    "description": "Assorted dry fruits mix.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr-0q64c1gA3M-EaMP7igzfD1qy51Miv77yd2QQhkPYQ&s=10"
  },
  {
    "id": 30,
    "name": "Raisin & Dates Mix (250g)",
    "category": "Dry Fruits",
    "price": 400,
    "rating": 4.6,
    "isFeatured": false,
    "tag": "Fresh",
    "description": "Sweet raisins and dates mix.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs-0v_jgbkuVA-iEetbuJES-IkKIppY74OhA5WrIe0wQ&s=10"
  }
];
let cart = [];
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileCloseBtn = document.getElementById('mobile-close-btn');
const navOverlay = document.getElementById('nav-overlay');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const menuGrid = document.getElementById('menu-grid');
const featuredGrid = document.getElementById('featured-grid');
const dryFruitsGrid = document.getElementById('dry-fruits-grid');
const filterTabs = document.getElementById('filter-tabs');
const cartCountBadge = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartTotalEl = document.getElementById('cart-total');
const clearCartBtn = document.getElementById('clear-cart-btn');
const whatsappCheckoutBtn = document.getElementById('whatsapp-checkout-btn');
const addressInput = document.getElementById('delivery-address');
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const cartCloseBtn = document.getElementById('cart-close-btn');
const backToTopBtn = document.getElementById('backToTop');

document.addEventListener('DOMContentLoaded', () => {
  buildCategoryFilters(); renderFeaturedItems(); renderMenuItems('all'); renderDryFruitsItems(); updateCartUI(); initScrollAnimations();
  window.addEventListener('scroll', handleNavbarScroll);
  hamburger?.addEventListener('click', openMobileMenu);
  mobileCloseBtn?.addEventListener('click', closeMobileMenu);
  navOverlay?.addEventListener('click', closeMobileMenu);
  navLinks.forEach(link => link.addEventListener('click', closeMobileMenu));
  filterTabs?.addEventListener('click', handleFilterClick);
  document.getElementById('cart-trigger')?.addEventListener('click', e => { e.preventDefault(); openCartDrawer(); });
  document.getElementById('floatingCartBtn')?.addEventListener('click', e => { e.preventDefault(); openCartDrawer(); });
  cartCloseBtn?.addEventListener('click', closeCartDrawer);
  cartOverlay?.addEventListener('click', closeCartDrawer);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeCartDrawer(); closeMobileMenu(); } });
  window.addEventListener('scroll', handleBackToTopVisibility);
  backToTopBtn?.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));
  clearCartBtn?.addEventListener('click', clearCart);
  whatsappCheckoutBtn?.addEventListener('click', sendWhatsAppOrder);
});
function buildCategoryFilters(){
  const cats=[...new Set(MENU_DATA.map(item=>item.category).filter(c=>c!=='Dry Fruits'))];
  filterTabs.innerHTML='<button class="filter-btn active" data-category="all">All Items</button>'+cats.map(c=>`<button class="filter-btn" data-category="${c}">${c}</button>`).join('');
}
function handleNavbarScroll(){ navbar?.classList.toggle('scrolled',window.scrollY>50); }
function openMobileMenu(){ navMenu?.classList.add('open'); navOverlay?.classList.add('active'); document.body.style.overflow='hidden'; }
function closeMobileMenu(){ navMenu?.classList.remove('open'); navOverlay?.classList.remove('active'); if(!cartDrawer?.classList.contains('open')) document.body.style.overflow=''; }
function openCartDrawer(){ cartDrawer.classList.add('open'); cartOverlay.classList.add('open'); cartDrawer.setAttribute('aria-hidden','false'); cartOverlay.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; }
function closeCartDrawer(){ cartDrawer?.classList.remove('open'); cartOverlay?.classList.remove('open'); cartDrawer?.setAttribute('aria-hidden','true'); cartOverlay?.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }
function scrollToOrder(){ openCartDrawer(); }
function handleBackToTopVisibility(){ backToTopBtn?.classList.toggle('visible',window.scrollY>400); }
function createFoodCardHTML(item){ return `<article class="food-card reveal active"><div class="food-img-wrapper"><span class="food-tag">${item.tag}</span><img src="${item.image}" alt="${item.name}" class="food-img" loading="lazy"></div><div class="food-content"><div class="food-title-row"><h3 class="food-name">${item.name}</h3><span class="food-rating"><i class="fa-solid fa-star"></i> ${item.rating}</span></div><p class="food-desc">${item.description}</p><div class="food-footer"><span class="food-price">Rs. ${item.price}</span><button class="btn-add-cart" onclick="addToCart(${item.id})" aria-label="Add ${item.name} to order"><i class="fa-solid fa-plus"></i></button></div></div></article>`; }
function renderFeaturedItems(){ featuredGrid.innerHTML=MENU_DATA.filter(i=>i.isFeatured).slice(0,8).map(createFoodCardHTML).join(''); }
function renderMenuItems(category='all'){ const regularItems=MENU_DATA.filter(i=>i.category!=='Dry Fruits'); const filtered=category==='all'?regularItems:regularItems.filter(i=>i.category===category); menuGrid.innerHTML=filtered.map(createFoodCardHTML).join(''); }
function renderDryFruitsItems(){ if(dryFruitsGrid) dryFruitsGrid.innerHTML=MENU_DATA.filter(i=>i.category==='Dry Fruits').map(createFoodCardHTML).join(''); }
function handleFilterClick(e){ const btn=e.target.closest('.filter-btn'); if(!btn)return; document.querySelectorAll('.filter-btn').forEach(b=>b.classList.toggle('active',b===btn)); renderMenuItems(btn.dataset.category); }
function addToCart(id){ const item=MENU_DATA.find(p=>p.id===id); if(!item)return; const existing=cart.find(p=>p.id===id); existing?existing.quantity++:cart.push({...item,quantity:1}); updateCartUI(); const floating=document.getElementById('floatingCartBtn'); if(floating){ floating.classList.add('show'); floating.setAttribute('aria-live','polite'); } }
function updateQuantity(id,change){ const item=cart.find(p=>p.id===id); if(!item)return; item.quantity+=change; if(item.quantity<=0)cart=cart.filter(p=>p.id!==id); updateCartUI(); }
function removeFromCart(id){cart=cart.filter(p=>p.id!==id);updateCartUI();}
function clearCart(){cart=[];updateCartUI();}
function updateCartUI(){
 const count=cart.reduce((s,i)=>s+i.quantity,0); if(cartCountBadge)cartCountBadge.textContent=count;
 const floating=document.getElementById('floatingCartBtn'), floatingCount=document.getElementById('floatingCartCount');
 if(count>0){floating?.classList.add('show');if(floatingCount)floatingCount.textContent=`${count} ${count===1?'Item':'Items'}`;}else floating?.classList.remove('show');
 if(whatsappCheckoutBtn){ whatsappCheckoutBtn.disabled = cart.length === 0; whatsappCheckoutBtn.setAttribute('aria-disabled', String(cart.length === 0)); }
 if(!cartItemsContainer)return;
 if(!cart.length){cartItemsContainer.innerHTML='<div class="cart-empty-state"><i class="fa-solid fa-basket-shopping"></i><p>Your order is empty.</p><span style="font-size:.8rem;opacity:.7">Add your favourite food from the menu.</span></div>';}
 else cartItemsContainer.innerHTML=cart.map(i=>`<div class="cart-item"><div class="cart-item-info"><div class="cart-item-title">${i.name}</div><div class="cart-item-price">Rs. ${i.price} each</div></div><div class="cart-item-controls"><div class="qty-btn-group"><button class="qty-btn" onclick="updateQuantity(${i.id},-1)" aria-label="Decrease quantity">−</button><span class="qty-value">${i.quantity}</span><button class="qty-btn" onclick="updateQuantity(${i.id},1)" aria-label="Increase quantity">+</button></div><div class="cart-item-total">Rs. ${i.price*i.quantity}</div><button class="btn-remove" onclick="removeFromCart(${i.id})" aria-label="Remove ${i.name}"><i class="fa-solid fa-xmark"></i></button></div></div>`).join('');
 const total=cart.reduce((s,i)=>s+i.price*i.quantity,0);cartSubtotalEl.textContent=`Rs. ${total.toLocaleString('en-PK')}`;cartTotalEl.textContent=`Rs. ${total.toLocaleString('en-PK')}`;
}
function sendWhatsAppOrder(){
 if(!cart.length){alert('Please add at least one item to your order.');return;}
 const address=addressInput.value.trim();if(!address){alert('Please enter your complete delivery address.');addressInput.focus();return;}
 let message='Assalam-o-Alaikum Raja Golden Foods! I would like to place an order.\n\n';
 cart.forEach((i,n)=>message+=`${n+1}. ${i.quantity} x ${i.name} — Rs. ${i.price*i.quantity}\n`);
 const total=cart.reduce((s,i)=>s+i.price*i.quantity,0);message+=`\nSubtotal: Rs. ${total}\nDelivery: FREE\nTotal: Rs. ${total}\n\nDelivery Address: ${address}\nPlease confirm my order.`;
 window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,'_blank','noopener');
}
function initScrollAnimations(){ if(!('IntersectionObserver' in window))return;const observer=new IntersectionObserver((entries,obs)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('active');obs.unobserve(e.target);}}),{threshold:.1,rootMargin:'0px 0px -40px 0px'});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}
