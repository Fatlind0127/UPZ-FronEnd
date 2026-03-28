// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');
const galleryImgs = document.querySelectorAll('.gallery-img');

// Open lightbox
galleryImgs.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = 'none';
  }
});
