document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.getElementById('dropdownBtn');
    const overlay = document.getElementById('overlay');
    const dropdownContent = document.getElementById('dropdownContent');
    const closeBtn = document.getElementById('closeBtn');
  
   function openDropdown() {
  overlay.classList.add('active');
  overlay.classList.remove('closing');
  dropdownBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeDropdown() {
  overlay.classList.add('closing');
  overlay.classList.remove('active');
  dropdownBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';

  // Tunggu animasi selesai baru sembunyikan
  setTimeout(() => {
    overlay.classList.remove('closing');
  }, 300); // waktu sesuai dengan transition CSS
}

  
    dropdownBtn.addEventListener('click', openDropdown);
    closeBtn.addEventListener('click', closeDropdown);
  
    overlay.addEventListener('click', (e) => {
      if (!dropdownContent.contains(e.target)) {
        closeDropdown();
      }
    });
  
    document.addEventListener('keydown', (e) => {
      if (overlay.classList.contains('active') && e.key === 'Escape') {
        e.preventDefault();
        closeDropdown();
      }
    });
  
    const items = overlay.querySelectorAll('.dropdown-item');
    items.forEach(item => {
      item.addEventListener('click', () => {
        alert(`Kamu memilih: ${item.querySelector('span').textContent}`);
        closeDropdown();
      });
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          item.click();
        }
      });
    });
  });
  