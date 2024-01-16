const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// id no yu index no ya göre güncelle
const newMenu = menu.map((object, index) => {
  object.id = object.id -1;
  return object;
});

// japan
const japanMenu = menu.filter(function (obj) {
  return obj.category === 'Japan';
});
// china
const chinaMenu = menu.filter(function (obj) {
  return obj.category === 'China';
});
// korea
const koreaMenu = menu.filter(function (obj) {
  return obj.category === 'Korea';
});

//btn settings
let btnContainer = document.querySelector('.btn-container');


let btnAll = document.createElement('div');
let btnJapan = document.createElement('div');
let btnKorea = document.createElement('div');
let btnChina = document.createElement('div');


btnAll.textContent = 'All';
btnJapan.textContent = 'Japan';
btnKorea.textContent = 'Korea';
btnChina.textContent = 'china';

btnContainer.appendChild(btnAll);
btnContainer.appendChild(btnJapan);
btnContainer.appendChild(btnKorea);
btnContainer.appendChild(btnChina);

let allButtons = btnContainer.querySelectorAll('div');

allButtons.forEach(function(i){
  i.classList.add('btn', 'btn-outline-dark', 'btn-item');
})

let sectionCenter = document.querySelector('.section-center');


newMenu.forEach(function(i){
  let createItem = document.createElement('div');
  createItem.classList.add('single-item', 'menu-items', 'col-sm-12', 'col-lg-6');
    createItem.innerHTML = 
  `
  <div class="row w-100">
    <div class="col-4">
        <div class="product-img">
          <img src="${i.img}" class="w-100 photo" >
        </div>
    </div>
    <div class="col-8">
        <div class="product-detail menu-info">
          <div class="product-title menu-title">
            <h4> ${i.title} </h4>
            <h4> ${i.price} </h4>
          </div>
          <div class="product-desc menu-text">
            <p> ${i.desc} </p>
          </div>
        </div>
    </div>

  </div>

  `;

  sectionCenter.append(createItem);
 
});

// Buttons event
function displayMenu(menuItems) {
  sectionCenter.innerHTML = '';

  menuItems.forEach(function (item) {
    let createItem = document.createElement('div');
  createItem.classList.add('single-item', 'menu-items', 'col-sm-12', 'col-lg-6');
    createItem.innerHTML = 
  `
  <div class="row w-100">
    <div class="col-4">
        <div class="product-img">
          <img src="${item.img}" class="w-100 photo" >
        </div>
    </div>
    <div class="col-8">
        <div class="product-detail menu-info">
          <div class="product-title menu-title">
            <h4> ${item.title} </h4>
            <h4> ${item.price} </h4>
          </div>
          <div class="product-desc menu-text">
            <p> ${item.desc} </p>
          </div>
        </div>
    </div>

  </div>

  `;

    sectionCenter.append(createItem);
  });
}

btnAll.addEventListener('click', function () {
  displayMenu(newMenu);
});

btnJapan.addEventListener('click', function () {
  displayMenu(japanMenu);
});
btnChina.addEventListener('click', function () {
  displayMenu(chinaMenu);
});
btnKorea.addEventListener('click', function () {
  displayMenu(koreaMenu);
});





