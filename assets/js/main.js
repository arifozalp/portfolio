<script>
  document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    items.forEach(item => observer.observe(item));
  });
</script>