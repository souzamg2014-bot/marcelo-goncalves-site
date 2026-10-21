'use strict';
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');
function closeMenu() {
  nav?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  nav?.classList.toggle('open', open);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav?.classList.contains('open')) {
    closeMenu();
    menuButton?.focus();
  }
});
const search = document.getElementById('tool-search');
const category = document.getElementById('tool-category');
const tools = [...document.querySelectorAll('.tool-card')];
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');
function filterTools() {
  const terms = normalize(search.value).trim().split(/\s+/).filter(Boolean);
  let count = 0;
  for (const tool of tools) {
    const text = normalize(`${tool.dataset.search} ${tool.textContent}`);
    const matches = (!category.value || category.value === tool.dataset.category) && terms.every(term => text.includes(term));
    tool.hidden = !matches;
    count += Number(matches);
  }
  document.getElementById('result-count').textContent = `${count} ${count === 1 ? 'ferramenta disponível' : 'ferramentas disponíveis'}`;
  document.getElementById('empty-state').hidden = count !== 0;
  document.getElementById('tool-grid').hidden = count === 0;
}
search.addEventListener('input', filterTools);
category.addEventListener('change', filterTools);
document.getElementById('catalog-search').addEventListener('submit', event => event.preventDefault());
document.getElementById('clear-search').addEventListener('click', () => {
  search.value = '';
  category.value = '';
  filterTools();
  search.focus();
});
const youtube = window.LAB_CONFIG?.youtube;
if (youtube) {
  try {
    const url = new URL(youtube);
    if (url.protocol === 'https:' && ['youtube.com', 'www.youtube.com', 'm.youtube.com'].includes(url.hostname)) {
      document.querySelectorAll('[data-youtube]').forEach(link => {
        link.href = url.href;
        link.hidden = false;
      });
    }
  } catch { /* Link inválido: manter os botões ocultos. */ }
}
document.getElementById('year').textContent = new Date().getFullYear();
filterTools();
