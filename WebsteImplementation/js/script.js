// Scroll reveal
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Artwork filters
const filters = document.querySelectorAll('.filter');
filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    document.querySelectorAll('.art').forEach(a => {
        a.classList.toggle('hidden', cat !== 'all' && a.dataset.cat !== cat);
    });
}));

// Lightbox
const lightbox = document.querySelector('.lightbox');
if (lightbox) {
    const lbImg = lightbox.querySelector('img');
    document.querySelectorAll('.art').forEach(a => a.addEventListener('click', () => {
        const img = a.querySelector('img');
        lbImg.src = img.src; lbImg.alt = img.alt;
        lightbox.classList.add('open');
    }));
    const close = () => lightbox.classList.remove('open');
    lightbox.addEventListener('click', close);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}