const sections = {
  drinks: {
    label: 'Напитки',
    categories: [
      'Лимонады', 'Коктейли', 'Шоты', 'Смузи', 'Кофе', 'Чай', 'Авторский', 'Напитки',
      'Пиво', 'Джин', 'Текила', 'Водка', 'Шампанское', 'Вино', 'Коньяк', 'Виски',
    ],
  },
  food: {
    label: 'Еда',
    categories: ['Нарезки', 'Пасты', 'Пицца', 'Салаты', 'Закуски', 'Бургеры', 'Десерты'],
  },
  hookahs: {
    label: 'Кальяны',
    categories: ['Кальяны'],
  },
};

const productsBySection = {
  drinks: {
    Коктейли: [
      {
        id: 'basil-smash',
        name: 'Бэйзил Смэш',
        description: 'Состав будет добавлен на этапе наполнения категории',
        measure: '400 мл',
        price: 500,
        image: 'assets/sample-basil.png',
      },
      {
        id: 'pornstar-martini',
        name: 'Порнстар Мартини',
        description: 'Состав будет добавлен на этапе наполнения категории',
        measure: '300 мл',
        price: 650,
        image: 'assets/sample-pornstar.png',
      },
      {
        id: 'negroni',
        name: 'Негрони',
        description: 'Состав будет добавлен на этапе наполнения категории',
        measure: '300 мл',
        price: 700,
        image: 'assets/sample-negroni.png',
      },
    ],
  },
  food: {
    Нарезки: [
      {
        id: 'food-meat-cut',
        name: 'М.И.Т.',
        description: 'Бастурма, суджук, московская колбаса, маринованные корнишоны, гренки чесночные, помидор черри, аджика, хрен',
        measure: '250 г',
        price: 1000,
        image: 'assets/food/meat-cut.webp',
      },
      {
        id: 'food-grape-mood',
        name: 'Грейп Муд',
        description: 'Пармезан, сыр с голубой плеснью, камамбер, голубика, орехи, яблоко/киви, апельсин, виноград',
        measure: '250 г',
        price: 1100,
        image: 'assets/food/grape-mood.webp',
      },
    ],
    Пасты: [
      {
        id: 'food-pasta-chicken-mushroom',
        name: 'Паста курица-грибы',
        description: null,
        measure: '280 г',
        price: 750,
        image: 'assets/food/pasta-chicken-mushroom.webp',
      },
      {
        id: 'food-al-mare',
        name: 'Аль Маре',
        description: 'Фетучини, креветки, черри, пармезан, соус биск/ромеско',
        measure: '270 г',
        price: 850,
        image: 'assets/food/al-mare.webp',
      },
      {
        id: 'food-bruno',
        name: 'Бруно',
        description: 'Фетучини, томленная говядина, зелень, соус пилати/тайский, пармезан',
        measure: '270 г',
        price: 750,
        image: 'assets/food/bruno.webp',
      },
      {
        id: 'food-carbonara',
        name: 'Карбонара',
        description: 'Фетучини, бекон, сливки, желток, пармезан',
        measure: '270 г',
        price: 750,
        image: 'assets/food/carbonara.webp',
      },
    ],
    Пицца: [
      {
        id: 'food-pizza-pepperoni',
        name: 'Пепперони 🌶️',
        description: 'Сыр Чеддер, моцарелла, пепперони, соус Пилатти',
        measure: '470 г',
        price: 750,
        image: 'assets/food/pizza-pepperoni.webp',
      },
      {
        id: 'food-pizza-four-cheese',
        name: '4 сыра',
        description: 'Сыр чеддер, моцарелла, горгондзола пармезан, сливочный соус',
        measure: '500 г',
        price: 750,
        image: 'assets/food/pizza-four-cheese.webp',
      },
      {
        id: 'food-pizza-chicken-mushroom',
        name: 'Курица-грибы',
        description: 'Сливочный соус, сыр чеддер, моцарелла куриная грудка, грибы шампиньоны, пармезан',
        measure: '550 г',
        price: 800,
        image: 'assets/food/pizza-chicken-mushroom.webp',
      },
      {
        id: 'food-pizza-seafood',
        name: 'С морепродуктами',
        description: 'Сыр Чеддер, моцарелла, кальмар, креветка, мидии, слабосоленный лосось сливочный соус, пармезан',
        measure: '500 г',
        price: 850,
        image: 'assets/food/pizza-seafood.webp',
      },
      {
        id: 'food-pizza-mexican',
        name: 'Мексиканская 🌶️',
        description: 'Сыр Чеддер, моцарелла, пилати основа, охотничие колбаски, пепперони, халапеньо + болгарский + чили перец',
        measure: '550 г',
        price: 800,
        image: 'assets/food/pizza-mexican.webp',
      },
      {
        id: 'food-pizza-margherita',
        name: 'Маргарита',
        description: 'Сыр Чеддер, моцарелла, пилати основа, арома масло, помидор, базилик / шпинат',
        measure: '400 г',
        price: 650,
        image: 'assets/food/pizza-margherita.webp',
      },
    ],
    Салаты: [
      {
        id: 'food-salad-shrimp-brie',
        name: 'Салат с жаренными креветками и сыром бри',
        description: 'Микс салата, креветки, сыр бри, авокадо, черри, апельсин, соус свит чили',
        measure: '180 г',
        price: 800,
        image: 'assets/food/salad-shrimp-brie.webp',
      },
      {
        id: 'food-salad-veal-eggplant',
        name: 'Салат гриль с телятиной и баклажанами',
        description: 'Микс салата, вырезка из телятины, хрустящий баклажан, болгарский перец, черри, имбирь, кунжут, соус ауберджин',
        measure: '200 г',
        price: 800,
        image: 'assets/food/salad-veal-eggplant.webp',
      },
      {
        id: 'food-salad-caesar',
        name: 'Салат Цезарь',
        description: 'Микс салата, куриная грудка, черри, крутоны, сыр пармезан, перепелиные яйца, соус цезарь',
        measure: '180 г',
        price: 700,
        image: 'assets/food/salad-caesar.webp',
      },
      {
        id: 'food-salad-seafood',
        name: 'Салат с морепродуктами с пикантным сливочным соусом 🌶️',
        description: 'Микс салата, черри, сегменты апельсина, кальмар, креветка, мидии, слабосоленая форель',
        measure: '210 г',
        price: 850,
        image: 'assets/food/salad-seafood.webp',
      },
      {
        id: 'food-salad-chicken-mushroom',
        name: 'Салат с куриной грудкой и шампиньонами в сливочном соусе',
        description: 'Микс салата, черри, грибы, куриная грудка',
        measure: '180 г',
        price: 650,
        image: 'assets/food/salad-chicken-mushroom.webp',
      },
      {
        id: 'food-salad-vegetable-feta',
        name: 'Овощной салат с сыром Фета',
        description: 'Помидор, огурец, перец болгарский, лук красный, оливковое масло, специи, микс салата',
        measure: '220 г',
        price: 550,
        image: 'assets/food/salad-vegetable-feta.webp',
      },
    ],
    Закуски: [
      {
        id: 'food-appetizer-country-potatoes',
        name: 'Картофель по-деревенски',
        description: null,
        measure: '180 г',
        price: 300,
        image: 'assets/food/appetizer-country-potatoes.webp',
      },
      {
        id: 'food-appetizer-fries',
        name: 'Картофель фри',
        description: null,
        measure: '180 г',
        price: 300,
        image: 'assets/food/appetizer-fries.webp',
      },
      {
        id: 'food-appetizer-cheese-sticks',
        name: 'Сырные палочки',
        description: null,
        measure: '150 г',
        price: 450,
        image: 'assets/food/appetizer-cheese-sticks.webp',
      },
      {
        id: 'food-appetizer-chicken-strips',
        name: 'Стрипсы куриные',
        description: null,
        measure: '180 г',
        price: 500,
        image: 'assets/food/appetizer-chicken-strips.webp',
      },
      {
        id: 'food-appetizer-shrimp-tempura',
        name: 'Креветки темпура',
        description: null,
        measure: '150 г',
        price: 650,
        image: 'assets/food/appetizer-shrimp-tempura.webp',
      },
      {
        id: 'food-appetizer-buffalo-wings',
        name: 'Крылья баффало',
        description: null,
        measure: '300 г',
        price: 550,
        image: 'assets/food/appetizer-buffalo-wings.webp',
      },
      {
        id: 'food-appetizer-croutons',
        name: 'Гренки',
        description: null,
        measure: '200 г',
        price: 250,
        image: 'assets/food/appetizer-croutons.webp',
      },
      {
        id: 'food-pistachios',
        name: 'Фисташки',
        description: null,
        measure: '100 г',
        price: 400,
        image: null,
      },
    ],
    Бургеры: [
      {
        id: 'food-burger',
        name: 'Бургер',
        description: 'Курино-говяжья котлета, сыр чеддер, корнишоны, помидор, лист салата, лук карамелизованный, фирменный соус. Подается с картофелем фри и соусом на выбор',
        measure: '540 г',
        price: 750,
        image: 'assets/food/burger.webp',
      },
    ],
    Десерты: [
      {
        id: 'food-dessert-lingonberry',
        name: 'Брусника с кедровыми орехами (сгущенка / мёд)',
        description: null,
        measure: '125 г',
        price: 600,
        image: 'assets/food/dessert-lingonberry.webp',
        badge: 'Новое',
      },
      {
        id: 'food-dessert-dubai-cheesecake',
        name: 'Дубайский чизкейк',
        description: null,
        measure: null,
        price: 450,
        image: 'assets/food/dessert-dubai-cheesecake.webp',
      },
      {
        id: 'food-dessert-chocolate-cheesecake',
        name: 'Чизкейк шоколад',
        description: null,
        measure: null,
        price: 450,
        image: 'assets/food/dessert-chocolate-cheesecake.webp',
      },
      {
        id: 'food-dessert-classic-cheesecake',
        name: 'Чизкейк классик',
        description: null,
        measure: null,
        price: 450,
        image: 'assets/food/dessert-classic-cheesecake.webp',
      },
      {
        id: 'food-dessert-ice-cream',
        name: 'Мороженное шоколадное / пломбир (добавки на выбор)',
        description: null,
        measure: '200 г',
        price: 400,
        image: 'assets/food/dessert-ice-cream.webp',
      },
    ],
  },
  hookahs: {},
};

const allProducts = Object.values(productsBySection)
  .flatMap((categories) => Object.values(categories))
  .flat();
const productById = new Map(allProducts.map((product) => [product.id, product]));

const state = {
  section: 'food',
  category: 'Нарезки',
  selection: new Map(),
};

const categoryRail = document.querySelector('.category-rail');
const primaryTabs = [...document.querySelectorAll('.primary-tab')];
const productFeed = document.querySelector('.product-feed');
const cardTemplate = document.querySelector('#product-card-template');
const sectionKicker = document.querySelector('#section-kicker');
const categoryTitle = document.querySelector('#category-title');
const categoryStatus = document.querySelector('#category-status');
const selectionCount = document.querySelector('#selection-count');
const selectionTotal = document.querySelector('#selection-total');
const showSelection = document.querySelector('.show-selection');
const sheet = document.querySelector('.selection-sheet');
const sheetBackdrop = document.querySelector('.sheet-backdrop');
const sheetClose = document.querySelector('.sheet-close');
const sheetItems = document.querySelector('.sheet-items');
const sheetEmpty = document.querySelector('.sheet-empty');
const sheetTotal = document.querySelector('#sheet-total');

function formatPrice(value) {
  return `${value.toLocaleString('ru-RU')} ₽`;
}

function formatPositionCount(count) {
  const lastTwo = count % 100;
  const last = count % 10;
  if (lastTwo >= 11 && lastTwo <= 14) return `${count} позиций`;
  if (last === 1) return `${count} позиция`;
  if (last >= 2 && last <= 4) return `${count} позиции`;
  return `${count} позиций`;
}

function getCurrentProducts() {
  return productsBySection[state.section]?.[state.category] || [];
}

function renderCategories() {
  const section = sections[state.section];
  categoryRail.replaceChildren();

  section.categories.forEach((category) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'category-chip';
    button.textContent = category;
    button.classList.toggle('is-active', category === state.category);
    button.setAttribute('aria-current', category === state.category ? 'page' : 'false');
    button.addEventListener('click', () => {
      state.category = category;
      renderCategories();
      renderContent();
      document.querySelector('#menu-content').scrollIntoView({ block: 'start' });
    });
    categoryRail.append(button);
  });

  requestAnimationFrame(() => {
    categoryRail.querySelector('.is-active')?.scrollIntoView({ inline: 'center', block: 'nearest' });
  });
}

function renderContent() {
  const section = sections[state.section];
  const products = getCurrentProducts();
  sectionKicker.textContent = section.label;
  categoryTitle.textContent = state.category;
  productFeed.replaceChildren();

  categoryStatus.textContent = products.length
    ? formatPositionCount(products.length)
    : 'Категория будет добавлена на следующем этапе';

  if (!products.length) {
    const empty = document.createElement('div');
    empty.className = 'empty-category';
    const title = document.createElement('strong');
    title.textContent = state.category;
    const message = document.createElement('p');
    message.textContent = 'Навигация уже работает. Позиции этой категории добавим на отдельном этапе.';
    empty.append(title, message);
    productFeed.append(empty);
    return;
  }

  products.forEach((product, index) => {
    const card = cardTemplate.content.firstElementChild.cloneNode(true);
    card.dataset.productId = product.id;
    const media = card.querySelector('.product-media');
    const image = card.querySelector('img');
    const badge = card.querySelector('.product-badge');

    if (product.image) {
      image.src = product.image;
      image.alt = `${product.name} из меню Gallery`;
      image.decoding = 'async';
      if (index === 0) {
        image.loading = 'eager';
        image.fetchPriority = 'high';
      }
    } else {
      media.remove();
      card.classList.add('is-no-photo');
    }

    if (product.badge) {
      badge.textContent = product.badge;
      badge.hidden = false;
    }

    card.querySelector('h2').textContent = product.name;
    const description = card.querySelector('.product-description');
    description.textContent = product.description || '';
    description.hidden = !product.description;

    const measure = card.querySelector('.product-volume');
    measure.textContent = product.measure || '';
    measure.hidden = !product.measure;

    card.querySelector('.product-price').textContent = formatPrice(product.price);
    const addButton = card.querySelector('.add-product');
    addButton.setAttribute('aria-label', `Добавить ${product.name} в список`);
    addButton.addEventListener('click', () => toggleProduct(product.id));
    productFeed.append(card);
    updateCardButton(product.id);
  });
}

function toggleProduct(productId) {
  const current = state.selection.get(productId) || 0;
  if (current > 0) state.selection.delete(productId);
  else state.selection.set(productId, 1);
  updateSelectionUi();
  updateCardButton(productId);
}

function updateCardButton(productId) {
  const card = productFeed.querySelector(`[data-product-id="${productId}"]`);
  if (!card) return;
  const button = card.querySelector('.add-product');
  const product = productById.get(productId);
  const added = (state.selection.get(productId) || 0) > 0;
  button.classList.toggle('is-added', added);
  button.querySelector('.add-icon').textContent = added ? '✓' : '+';
  button.querySelector('.add-label').textContent = added ? 'Добавлено' : 'Добавить';
  button.setAttribute('aria-pressed', String(added));
  button.setAttribute('aria-label', `${added ? 'Убрать' : 'Добавить'} ${product?.name || 'позицию'} ${added ? 'из' : 'в'} списка`);
}

function updateSelectionUi() {
  const count = [...state.selection.values()].reduce((sum, quantity) => sum + quantity, 0);
  const total = [...state.selection.entries()].reduce((sum, [productId, quantity]) => {
    const product = productById.get(productId);
    return sum + (product?.price || 0) * quantity;
  }, 0);

  selectionCount.textContent = count;
  selectionTotal.textContent = formatPrice(total);
  sheetTotal.textContent = formatPrice(total);
  showSelection.disabled = count === 0;
  renderSheetItems();
}

function renderSheetItems() {
  sheetItems.replaceChildren();
  sheetEmpty.hidden = state.selection.size > 0;

  state.selection.forEach((quantity, productId) => {
    const product = productById.get(productId);
    if (!product) return;

    const item = document.createElement('article');
    item.className = 'sheet-item';
    item.innerHTML = `
      <div><h3></h3><p>${formatPrice(product.price * quantity)}</p></div>
      <div class="quantity-control">
        <button class="quantity-button" type="button" data-delta="-1" aria-label="Уменьшить количество ${product.name}">−</button>
        <strong>${quantity}</strong>
        <button class="quantity-button" type="button" data-delta="1" aria-label="Увеличить количество ${product.name}">+</button>
      </div>`;
    item.querySelector('h3').textContent = product.name;

    item.querySelectorAll('.quantity-button').forEach((button) => {
      button.addEventListener('click', () => changeQuantity(productId, Number(button.dataset.delta)));
    });
    sheetItems.append(item);
  });
}

function changeQuantity(productId, delta) {
  const next = (state.selection.get(productId) || 0) + delta;
  if (next <= 0) state.selection.delete(productId);
  else state.selection.set(productId, next);
  updateSelectionUi();
  updateCardButton(productId);
  if (state.selection.size === 0) closeSheet();
}

function openSheet() {
  if (showSelection.disabled) return;
  sheet.hidden = false;
  sheetBackdrop.hidden = false;
  document.body.classList.add('has-sheet');
  sheetClose.focus();
}

function closeSheet() {
  sheet.hidden = true;
  sheetBackdrop.hidden = true;
  document.body.classList.remove('has-sheet');
  showSelection.focus();
}

primaryTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    state.section = tab.dataset.section;
    state.category = state.section === 'drinks' ? 'Коктейли' : sections[state.section].categories[0];
    primaryTabs.forEach((candidate) => {
      const active = candidate === tab;
      candidate.classList.toggle('is-active', active);
      candidate.setAttribute('aria-current', active ? 'page' : 'false');
    });
    renderCategories();
    renderContent();
    document.querySelector('#menu-content').scrollIntoView({ block: 'start' });
  });
});

showSelection.addEventListener('click', openSheet);
sheetClose.addEventListener('click', closeSheet);
sheetBackdrop.addEventListener('click', closeSheet);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !sheet.hidden) closeSheet();
});

renderCategories();
renderContent();
updateSelectionUi();
