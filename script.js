const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const COLD = [
  { name: "Grand Mojito", desc: "Elderflower spirit, fresh lime, mint and sparkling water.", price: "650 DA", img: "images/images/WhatsApp Image 2026-06-21 at 23.54.27.jpeg" },
  { name: "Caramel Ice Coffee", desc: "Espresso over ice, velvety cream and golden caramel.", price: "550 DA", img: "images/images/WhatsApp Image 2026-06-22 at 21.57.06 (1).jpeg" },
  { name: "Ice Chocolate", desc: "Belgian chocolate served chilled, crowned with whipped cream.", price: "600 DA", img: "images/images/WhatsApp Image 2026-06-22 at 21.57.06.jpeg" },
  { name: "Strawberry Lemonade", desc: "Cherry Juice Sweet cherry juice with a rich fruity flavor and a smooth refreshing finish.", price: "480 DA", img: "images/images/WhatsApp Image 2026-06-21 at 23.54.25 (3).jpeg" },
  { name: "Coca-Cola", desc: "Chilled classic Coca-Cola, fizzy and refreshing with a bold caramel taste.", price: "520 DA", img: "images/images/WhatsApp Image 2026-06-22 at 21.57.06 (3).jpeg" },
  { name: "Mint Syrup", desc: "A refreshing mint-flavored syrup with a sweet herbal taste, perfect for adding a cool and aromatic touch to drinks and desserts.", price: "450 DA", img: "images/images/WhatsApp Image 2026-06-21 at 23.54.27 (4).jpeg" },
  { name: "Blueberry Smash", desc: "Wild blueberries muddled with basil, tonic and crushed ice.", price: "530 DA", img: "images/images/WhatsApp Image 2026-06-21 at 23.54.28.jpeg" },
  { name: "Watermelon Juice", desc: "Light and refreshing watermelon juice, naturally sweet and perfect for summer..", price: "580 DA", img: "images/images/WhatsApp Image 2026-06-21 at 23.54.26.jpeg" },
  { name: "Lemon Juice", desc: "Freshly squeezed lemon juice, refreshing and slightly tangy, served chilled for a zesty boost.", price: "560 DA", img: "images/images/WhatsApp Image 2026-06-22 at 21.58.24.jpeg" },
  { name: "Orange Juice", desc: "Freshly pressed blood orange juice with a sweet yet slightly tart citrus flavor.", price: "500 DA", img: "images/images/WhatsApp Image 2026-06-21 at 23.54.26 (2).jpeg" },
  { name: "Banana Milkshake", desc: "Banana Milkshake Creamy milkshake blended with ripe bananas and fresh milk for a smooth, sweet flavor..", price: "540 DA", img: "images/images/WhatsApp Image 2026-06-21 at 23.54.17.jpeg" },
  { name: "Strawberry Milkshake", desc: "Freshly squeezed lemon juice, refreshing and slightly tangy, served chilled for a zesty boost", price: "590 DA", img: "images/images/WhatsApp Image 2026-06-21 at 23.54.16.jpeg" },
];
const HOT = [
  { name: "Classic Espresso", desc: "Single-origin shot, pulled slow for a deep amber crema.", price: "350 DA", img: "images/images/WhatsApp Image 2026-06-23 at 22.14.27 (1).jpeg" },
  { name: "Vanilla Latte", desc: "Double espresso, silky steamed milk and Madagascan vanilla.", price: "500 DA", img: "images/images/WhatsApp Image 2026-06-23 at 22.14.26.jpeg" },
  { name: "Spiced Chai", desc: "Black tea with cinnamon, cardamom and steamed whole milk.", price: "450 DA", img: "images/images/WhatsApp Image 2026-06-23 at 22.14.26 (1).jpeg" },
  { name: "Hot Chocolate", desc: "Rich Valrhona cocoa melted into steamed milk, topped with cream.", price: "520 DA", img: "images/images/WhatsApp Image 2026-06-23 at 22.14.27.jpeg" },
  { name: "Flat White", desc: "Ristretto double shot with micro-foam steamed milk, velvety finish.", price: "480 DA", img: "images/images/WhatsApp Image 2026-06-23 at 22.14.25.jpeg" },
  { name: "Pumpkin Spice Latte", desc: "Espresso, real pumpkin, cinnamon and steamed oat milk.", price: "550 DA", img: "images/images/WhatsApp Image 2026-06-23 at 22.14.27 (2).jpeg" },
  { name: "Moroccan Mint Tea", desc: "Gunpowder green tea steeped with fresh spearmint and cane sugar.", price: "380 DA", img: "images/images/WhatsApp Image 2026-06-23 at 22.14.28.jpeg" },
  { name: "Rose Earl Grey", desc: "Bergamot Earl Grey infused with dried rose buds, served with honey.", price: "420 DA", img: "images/images/WhatsApp Image 2026-06-23 at 22.14.28 (1).jpeg" },
  { name: "Chamomile Honey", desc: "Wild chamomile flowers steeped and finished with wildflower honey.", price: "400 DA", img: "images/images/WhatsApp Image 2026-06-23 at 22.14.30.jpeg" },
  { name: "Hot Matcha", desc: "Ceremonial matcha whisked with hot water and steamed almond milk.", price: "530 DA", img: "images/images/WhatsApp Image 2026-06-23 at 22.14.28 (2).jpeg" },
  { name: "Americano", desc: "A smooth and bold coffee made with rich espresso diluted with hot water, offering a clean and balanced flavor..", price: "560 DA", img: "images/images/WhatsApp Image 2026-06-23 at 22.14.29.jpeg" },
];

const SWEET = [
  { name: "Fondant au Chocolat", desc: "Warm dark chocolate cake, molten heart and vanilla ice cream.", price: "750 DA", img: "images/images/WhatsApp Image 2026-06-21 at 23.54.13.jpeg" },
  { name: "Crème Brûlée", desc: "Slow-baked French custard with a crisp caramelised sugar crust.", price: "680 DA", img: "images/images/WhatsApp Image 2026-06-21 at 23.54.26 (1).jpeg" },
  { name: "Mousse au chokolat", desc: "Light and creamy chocolate mousse with a smooth, airy texture.", price: "720 DA", img: "images/images/WhatsApp Image 2026-06-21 at 23.54.23.jpeg" },
  { name: "Maltida cake", desc: "Delicious chocolate cake with creamy malt filling, topped with rich chocolate and crunchy malt crumbs. A perfect treat for chocolate lovers.", price: "620 DA", img: "images/images/WhatsApp Image 2026-06-21 at 23.53.49 (2).jpeg" },
  { name: "New York Cheesecake", desc: "Dense cream cheese filling on a buttery graham crust, served chilled.", price: "700 DA", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=280&fit=crop" },
  { name: "Tiramisu", desc: "Espresso-soaked ladyfingers, mascarpone cream and dark cocoa dust.", price: "690 DA", img: "images/images/WhatsApp Image 2026-06-21 at 23.54.24.jpeg" },
  { name: "Almond Croissant", desc: "Butter croissant filled with frangipane, baked and dusted with icing sugar.", price: "450 DA", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=280&fit=crop" },
  { name: "Strawberry Panna Cotta", desc: "Silky vanilla cream set with a fresh Alphonso mango coulis.", price: "660 DA", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=280&fit=crop" },
  { name: "Tart au citron ", desc: "Shortcrust pastry filled with lemon cream, topped with a light glaze.", price: "640 DA", img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&h=280&fit=crop" },
  { name: "brownies", desc: "Rich fudgy chocolate brownies with a soft center and crisp top.", price: "580 DA", img: "images/images/WhatsApp Image 2026-06-21 at 23.53.49.jpeg" },
  { name: "Cookies", desc: "Soft and chewy chocolate chip cookies with rich chocolate pieces.", price: "550 DA", img: "images/images/WhatsApp Image 2026-06-21 at 23.53.49 (1).jpeg" },
  { name: "Cupcake", desc: "Chocolate cupcake filled with hazelnut cream, topped with chocolate frosting and Ferrero Rocher.", price: "500 DA", img: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=400&h=280&fit=crop" },
];

// toggle menu
function toggleMenu() {
  document.body.classList.toggle("show-mobile-menu");
}

if (menuOpenButton) {
  menuOpenButton.addEventListener("click", toggleMenu);
}

if (menuCloseButton) {
  menuCloseButton.addEventListener("click", toggleMenu);
}

// close menu when clicking link
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
  });
});

/* ===== SWIPER ===== */
if (typeof Swiper !== "undefined") {
  const swiper = new Swiper(".slider-wrapper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });


  function buildGrid(items, gridId, accentClass) {
    const grid = document.getElementById(gridId);
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'item-card';
      card.innerHTML = `
      <img class="card-img" src="${item.img}" alt="${item.name}" loading="lazy">
      <div class="card-accent ${accentClass}"></div>
      <div class="card-body">
        <p class="card-name">${item.name}</p>
        <p class="card-desc">${item.desc}</p>
      </div>
      <div class="card-foot">
        <span class="price">${item.price}</span>
        <button class="ord-btn">Order</button>
      </div>
    `;
      card.querySelector('.ord-btn').addEventListener('click', function () {
        this.textContent = 'Added ✓';
        this.classList.add('ordered');
        setTimeout(() => { this.textContent = 'Order'; this.classList.remove('ordered'); }, 2000);
      });
      grid.appendChild(card);
    });
  }

  buildGrid(COLD, 'grid-cold', 'a-cold');
  buildGrid(HOT, 'grid-hot', 'a-hot');
  buildGrid(SWEET, 'grid-sweet', 'a-sweet');

  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.section').forEach(s => s.classList.remove('visible'));
      this.classList.add('active');
      document.getElementById('sec-' + this.dataset.sec).classList.add('visible');
    });
  });

}