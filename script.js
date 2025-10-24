const cards = document.querySelectorAll('.card');
const modal = document.getElementById('profileModal');
const modalImg = document.getElementById('modalImg');
const modalName = document.getElementById('modalName');
const modalDesc = document.getElementById('modalDesc');
const closeBtn = document.querySelector('.modal__close');

cards.forEach(card => {
  card.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = card.querySelector('img').src;
    modalName.textContent = card.dataset.name;
    modalDesc.textContent = card.dataset.desc;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});
