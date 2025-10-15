const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((l) => l.classList.remove('active', 'border-bottom', 'border-2', 'border-primary'));
    link.classList.add('active', 'border-bottom', 'border-2', 'border-primary');
  });
});

// Toggle sertifikat tambahan
document.getElementById('toggleSertifikat').addEventListener('click', function () {
  const list = document.getElementById('sertifikatLainnya');
  const icon = this.querySelector('i');

  if (list.classList.contains('d-none')) {
    list.classList.remove('d-none');
    this.innerHTML = '<i class="bi bi-chevron-up"></i> Sembunyikan Sertifikat';
  } else {
    list.classList.add('d-none');
    this.innerHTML = '<i class="bi bi-chevron-down"></i> Lihat Semua Sertifikat';
  }
});
