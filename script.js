document.addEventListener("DOMContentLoaded", function() {
    const carta = document.getElementById('carta');
  
    carta.addEventListener('click', function() {
      carta.style.transform = 'rotateY(180deg)';
    });
  });
  