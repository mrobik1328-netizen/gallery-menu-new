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

const sampleProducts = [
  {
    id: 'basil-smash',
    name: 'Бэйзил Смэш',
    description: 'Состав будет добавлен на этапе наполнения категории',
    volume: '400 мл',
    price: 500,
    image: 'assets/sample-basil.png',
  },
  {
    id: 'pornstar-martini',
    name: 'Порнстар Мартини',
    description: 'Состав будет добавлен на этапе наполнения категории',
    volume: '300 мл',
    price: 650,
    image: 'assets/sample-pornstar.png',
  },
  {
    id: 'negroni',
    name: 'Негрони',
    description: 'Состав будет добавлен на этапе наполнения категории',
    volume: '300 мл',
    price: 700,
    image: 'assets/sample-negroni.png',
  },
];

const state = {
  section: 'drinks',
  category: 'Коктейли',
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
  sectionKicker.textContent = section.label;
  categoryTitle.textContent = state.category;
  productFeed.replaceChildren();

  const isSampleCategory = state.section === 'drinks' && state.category === 'Коктейли';
  categoryStatus.textContent = isSampleCategory
    ? 'Демонстрация общего каркаса · 3 реальные позиции'
    : 'Категория будет наполнена после утверждения общего каркаса';

  if (!isSampleCategory) {
    const empty = document.createElement('div');
    empty.className = 'empty-category';
    empty.innerHTML = `<div><strong>${state.category}</strong><p>Навигация уже работает. Фотографии, позиции и составы добавим на отдельном этапе этой категории.</p></div>`;
    productFeed.append(empty);
    return;
  }

  sampleProducts.forEach((product, index) => {
    const card = cardTemplate.content.firstElementChild.cloneNode(true);
    card.dataset.productId = product.id;
    const image = card.querySelector('img');
    image.src = product.image;
    image.alt = `${product.name} из меню Gallery`;
    if (index === 0) image.loading = 'eager';
    card.querySelector('h2').textContent = product.name;
    const description = card.querySelector('.product-description');
    description.textContent = product.description;
    description.classList.add('is-placeholder');
    card.querySelector('.product-volume').textContent = product.volume;
    card.querySelector('.product-price').textContent = formatPrice(product.price);
    const addButton = card.querySelector('.add-product');
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
  const added = (state.selection.get(productId) || 0) > 0;
  button.classList.toggle('is-added', added);
  button.querySelector('.add-icon').textContent = added ? '✓' : '+';
  button.querySelector('.add-label').textContent = added ? 'Добавлено' : 'Добавить';
  button.setAttribute('aria-pressed', String(added));
}

function updateSelectionUi() {
  const count = [...state.selection.values()].reduce((sum, quantity) => sum + quantity, 0);
  const total = [...state.selection.entries()].reduce((sum, [productId, quantity]) => {
    const product = sampleProducts.find((candidate) => candidate.id === productId);
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
    const product = sampleProducts.find((candidate) => candidate.id === productId);
    if (!product) return;

    const item = document.createElement('article');
    item.className = 'sheet-item';
    item.innerHTML = `
      <div><h3>${product.name}</h3><p>${formatPrice(product.price * quantity)}</p></div>
      <div class="quantity-control">
        <button class="quantity-button" type="button" data-delta="-1" aria-label="Уменьшить количество ${product.name}">−</button>
        <strong>${quantity}</strong>
        <button class="quantity-button" type="button" data-delta="1" aria-label="Увеличить количество ${product.name}">+</button>
      </div>`;

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
