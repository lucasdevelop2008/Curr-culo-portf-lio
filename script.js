const defaultProjects = [
  { title: 'Seu próximo projeto', description: 'Este espaço está pronto para receber um projeto seu. Clique em “adicionar projeto” para começar.', category: 'web', link: '' },
  { title: 'WorldSkills', description: 'Experiência prática em desenvolvimento de aplicativos durante a etapa estadual da competição.', category: 'app', link: 'https://worldskills.org/' }
];
const grid = document.querySelector('#projectsGrid');
const modal = document.querySelector('#modal');
const form = document.querySelector('#projectForm');
const getProjects = () => JSON.parse(localStorage.getItem('lucasProjects') || 'null') || defaultProjects;
const categoryNames = { web: 'web / interface', app: 'app / mobile', data: 'dados / lógica' };
function renderProjects(filter = 'all') {
  const projects = getProjects().filter(p => filter === 'all' || p.category === filter);
  grid.innerHTML = projects.map((p, index) => `<article class="project-card ${index === 0 && p.title === 'Seu próximo projeto' ? 'empty' : ''}">
    ${index === 0 && p.title === 'Seu próximo projeto' ? `<div><div class="empty-plus">+</div><h3>Adicione seu primeiro projeto</h3><p>${p.description}</p></div><button class="add-project" onclick="openProjectModal()">começar agora ↗</button>` : `<div><div class="project-top"><span class="project-label">${categoryNames[p.category] || p.category}</span><span class="project-arrow">↗</span></div><h3>${p.title}</h3><p>${p.description}</p></div>${p.link ? `<a class="project-link" href="${p.link}" target="_blank" rel="noreferrer">ver projeto ↗</a>` : '<span class="project-link">projeto em destaque</span>'}`}
  </article>`).join('');
}
function openProjectModal(){ modal.classList.add('open'); document.querySelector('[name="title"]').focus(); }
function closeProjectModal(){ modal.classList.remove('open'); form.reset(); }
document.querySelector('#openModal').addEventListener('click', openProjectModal);
document.querySelector('#closeModal').addEventListener('click', closeProjectModal);
document.querySelector('#cancelModal').addEventListener('click', closeProjectModal);
modal.addEventListener('click', e => { if(e.target === modal) closeProjectModal(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeProjectModal(); });
form.addEventListener('submit', e => { e.preventDefault(); const data = Object.fromEntries(new FormData(form)); const projects = getProjects().filter(p => p.title !== 'Seu próximo projeto'); projects.unshift(data); localStorage.setItem('lucasProjects', JSON.stringify(projects)); closeProjectModal(); renderProjects(); });
document.querySelectorAll('.filter').forEach(btn => btn.addEventListener('click', () => { document.querySelectorAll('.filter').forEach(b => b.classList.remove('active')); btn.classList.add('active'); renderProjects(btn.dataset.filter); }));
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); }), {threshold: .12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
renderProjects();
window.openProjectModal = openProjectModal;
