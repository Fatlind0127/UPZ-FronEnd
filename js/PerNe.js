document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    });
  });
  