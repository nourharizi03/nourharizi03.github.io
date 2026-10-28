/*
 * PERSONNALISATION DES RAPPORTS — NOUR HARIZI
 * 1. Dépose ton fichier PDF dans le sous-dossier documents/ du projet.
 * 2. Dans le projet correspondant ci-dessous, adapte si besoin le chemin "file".
 * 3. Remplace "available: false" par "available: true".
 * Le bouton « Consulter » affichera alors le PDF dans une fenêtre intégrée.
 * Pour les fichiers Excel/PowerPoint, utilise "format: 'file'" pour télécharger
 * plutôt que prévisualiser.
 * Ne publie jamais de documents internes/confidentiels ou de données personnelles
 * sans autorisation. Privilégie une version anonymisée et validée.
 */
const projectData = {
  'audit-smi': {
    number: '01', year: '2025', category: 'AUDIT & SYSTÈMES DE MANAGEMENT',
    title: "Audit intégré et amélioration d'un SMI d'une industrie biotechnologique",
    intro: "Un travail d'analyse et d'amélioration d'un système de management intégré, basé sur les référentiels ISO 9001, ISO 14001 et ISO 45001 et les principes d'audit ISO 19011.",
    metrics: [['8', 'processus étudiés'], ['11', 'actions CAPA proposées'], ['9', 'indicateurs QSE modélisés']],
    context: "L'objectif du projet était de passer d'une revue de conformité à un plan d'amélioration structuré, en reliant les preuves examinées, les écarts potentiels, les causes et les indicateurs de suivi.",
    methods: [
      "Analyse documentaire de 8 processus et 24 preuves, avec une méthodologie inspirée de l'ISO 19011.",
      "Qualification de 7 écarts potentiels et réalisation de 3 analyses causales.",
      "Élaboration d'un plan de 11 actions correctives et préventives (CAPA).",
      "Conception d'un modèle de suivi de 9 KPI QSE."
    ],
    result: "Une simulation de scénarios visait une baisse du taux de non-conformité de 5,52 % à 3,77 %. Il s'agit d'une projection de l'étude, et non d'un résultat industriel mesuré.",
    documents: [
      {title:'Rapport d’audit du SMI', type:'Rapport PDF', format:'pdf', file:'documents/audit-smi/rapport-audit-smi.pdf', available:false},
      {title:'Plan CAPA & analyses causales', type:'Livrable PDF', format:'pdf', file:'documents/audit-smi/plan-capa.pdf', available:false},
      {title:'Tableau de bord des KPI QSE', type:'Tableau Excel', format:'file', file:'documents/audit-smi/tableau-bord-kpi.xlsx', available:false}
    ]
  },
  'methanisation': {
    number: '02', year: '2025', category: 'PRÉVENTION DES RISQUES INDUSTRIELS',
    title: "Analyse des risques d'une unité de méthanisation — ICPE 2781",
    intro: "Une étude de prévention menée sur le cas d'une unité de méthanisation de 60 tonnes par jour, pour identifier, analyser et hiérarchiser les scénarios de risques.",
    metrics: [['44', 'scénarios examinés'], ['5', 'zones critiques'], ['8', 'risques inacceptables initialement']],
    context: "L'étude portait sur les risques associés à l'exploitation et à la maintenance d'une unité de méthanisation, notamment ceux liés aux atmosphères explosives et à l'intervention en espace confiné.",
    methods: [
      "Application des méthodes HAZOP et AMDEC et construction d'une matrice de criticité.",
      "Analyse de 44 scénarios sur 5 zones critiques, pour une installation de 60 t/j.",
      "Identification initiale de 8 risques à criticité inacceptable.",
      "Proposition d'un plan de prévention intégrant le zonage ATEX, le DRPCE, le DUERP et les procédures d'intervention en espace confiné."
    ],
    result: "Après prise en compte théorique du plan de prévention proposé, les 8 risques initialement inacceptables ont été réévalués à un niveau acceptable dans le cadre de l'étude.",
    documents: [
      {title:'Rapport d’analyse HAZOP / AMDEC', type:'Rapport PDF', format:'pdf', file:'documents/methanisation/rapport-hazop-amdec.pdf', available:false},
      {title:'Cartographie & matrice des risques', type:'Livrable PDF', format:'pdf', file:'documents/methanisation/matrice-risques.pdf', available:false},
      {title:'Plan de prévention (ATEX / DRPCE)', type:'Livrable PDF', format:'pdf', file:'documents/methanisation/plan-prevention.pdf', available:false}
    ]
  },
  'risques-chimiques': {
    number: '03', year: '2024', category: 'RISQUE CHIMIQUE & COSMÉTIQUE',
    title: 'Évaluation des risques chimiques en industrie cosmétique',
    intro: "Une étude d'identification et de hiérarchisation des risques chimiques en environnement industriel cosmétique à partir des produits utilisés et des situations d'exposition.",
    metrics: [['18', 'produits chimiques'], ['26', 'situations d’exposition'], ['12', 'actions de prévention']],
    context: "L'étude visait à déterminer les priorités d'action en matière de prévention du risque chimique sur trois unités de travail.",
    methods: [
      "Inventaire de 18 produits chimiques et étude des fiches de données de sécurité (FDS).",
      "Analyse de 26 situations d'exposition dans 3 unités de travail.",
      "Évaluation et hiérarchisation des risques à l'aide de SEIRICH.",
      "Construction et suivi proposé de 12 actions de prévention."
    ],
    result: "Le projet a débouché sur une priorisation des risques et la structuration d'un plan de suivi de 12 actions de prévention.",
    documents: [
      {title:'Rapport d’évaluation du risque chimique', type:'Rapport PDF', format:'pdf', file:'documents/risques-chimiques/rapport-risque-chimique.pdf', available:false},
      {title:'Synthèse d’évaluation SEIRICH', type:'Livrable PDF', format:'pdf', file:'documents/risques-chimiques/synthese-seirich.pdf', available:false},
      {title:'Plan d’actions de prévention', type:'Livrable PDF', format:'pdf', file:'documents/risques-chimiques/plan-actions.pdf', available:false}
    ]
  }
};

const header = document.getElementById('header');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-navigation');
const projectModal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const modalContent = document.getElementById('modal-content');
const pdfModal = document.getElementById('pdf-modal');
const pdfFrame = document.getElementById('pdf-frame');
let previousFocus = null;

function closeMenu() {
  menuButton.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', window.portfolioI18n?.label('menuOpen') || 'Ouvrir le menu');
  nav.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const opening = !nav.classList.contains('is-open');
  nav.classList.toggle('is-open', opening);
  menuButton.classList.toggle('is-open', opening);
  menuButton.setAttribute('aria-expanded', String(opening));
  menuButton.setAttribute('aria-label', window.portfolioI18n?.label(opening ? 'menuClose' : 'menuOpen') || (opening ? 'Fermer le menu' : 'Ouvrir le menu'));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 10), {passive:true});
document.getElementById('year').textContent = new Date().getFullYear();

const revealObserver = ('IntersectionObserver' in window) ? new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); } });
}, {threshold:.08, rootMargin:'0px 0px -25px 0px'}) : null;
document.querySelectorAll('.reveal').forEach(el => revealObserver ? revealObserver.observe(el) : el.classList.add('is-visible'));

const navObserver = ('IntersectionObserver' in window) ? new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting){document.querySelectorAll('.main-nav a').forEach(a=>a.classList.toggle('is-active',a.getAttribute('href') === '#'+entry.target.id));}});
}, {rootMargin:'-30% 0px -60% 0px'}) : null;
document.querySelectorAll('main section[id]').forEach(el=> navObserver?.observe(el));

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
function openProject(key) {
  const project = window.portfolioI18n?.translateProject(key, projectData[key]) || projectData[key]; if(!project) return;
  const tr = key => window.portfolioI18n?.label(key) ?? key;
  previousFocus = document.activeElement;
  modalContent.innerHTML = `
    <div class="modal-project-kicker"><span>${tr('project')} ${escapeHtml(project.number)} / ${escapeHtml(project.year)}</span><span>${escapeHtml(project.category)}</span></div>
    <h2 id="modal-title">${escapeHtml(project.title)}</h2>
    <p class="modal-intro">${escapeHtml(project.intro)}</p>
    <div class="modal-kpis">${project.metrics.map(([value,label])=>`<div class="modal-kpi"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`).join('')}</div>
    <section class="modal-section"><h3>${tr('context')}</h3><p>${escapeHtml(project.context)}</p></section>
    <section class="modal-section"><h3>${tr('method')}</h3><ol class="method-list">${project.methods.map(item=>`<li>${escapeHtml(item)}</li>`).join('')}</ol><div class="modal-result"><strong>${tr('result')}</strong> ${escapeHtml(project.result)}</div></section>
    <section class="modal-section"><div class="modal-doc-header"><h3>${tr('documents')}</h3><span class="modal-doc-note">${project.documents.filter(doc => doc.available).length} ${tr('published')}</span></div>
    <p>${tr('description')}</p>
    <div class="document-items">${project.documents.map((doc, index) => doc.available ? `<button class="doc-item doc-item-ready" type="button" data-open-document="${escapeHtml(key)}" data-document-index="${index}"><span class="doc-icon">◫</span><span class="doc-text"><strong>${escapeHtml(doc.title)}</strong><small>${escapeHtml(doc.type)}</small></span><span class="doc-label">${doc.format==='pdf'?tr('view'):tr('open')}</span></button>` : `<div class="doc-item doc-item-pending"><span class="doc-icon">◫</span><span class="doc-text"><strong>${escapeHtml(doc.title)}</strong><small>${escapeHtml(doc.type)} · ${tr('pending')}</small></span></div>`).join('')}</div>
    </section>
    <div class="privacy-callout"><span aria-hidden="true">♡</span><div><strong>${tr('privacyTitle')}</strong><br/>${tr('privacyText')}</div></div>
  `;
  projectModal.classList.add('is-open'); projectModal.setAttribute('aria-hidden','false');
  document.body.classList.add('no-scroll');
  projectModal.querySelector('.modal-panel').scrollTop=0;
  modalClose.focus();
}
function closeProject() {
  projectModal.classList.remove('is-open'); projectModal.setAttribute('aria-hidden','true');
  if(!pdfModal.classList.contains('is-open')) document.body.classList.remove('no-scroll');
  if(previousFocus?.focus) previousFocus.focus();
}
function openDocument(key, index) {
  const doc = projectData[key]?.documents[index];
  if(!doc || !doc.available) return;
  if(doc.format !== 'pdf') { const link=document.createElement('a'); link.href=doc.file; link.download=''; document.body.appendChild(link); link.click(); link.remove(); return; }
  document.getElementById('pdf-title').textContent=doc.title;
  document.getElementById('pdf-download').href=doc.file;
  pdfFrame.src=doc.file;
  pdfModal.classList.add('is-open'); pdfModal.setAttribute('aria-hidden','false');
  document.body.classList.add('no-scroll'); document.getElementById('pdf-close').focus();
}
function closePdf() {
  pdfModal.classList.remove('is-open'); pdfModal.setAttribute('aria-hidden','true');
  pdfFrame.src='about:blank';
  if(!projectModal.classList.contains('is-open')) document.body.classList.remove('no-scroll');
  const lastDoc = projectModal.querySelector('[data-open-document]:focus');
  if(lastDoc) lastDoc.focus(); else modalClose.focus();
}
document.querySelectorAll('[data-open-project]').forEach(button => button.addEventListener('click', () => openProject(button.dataset.openProject)));
document.addEventListener('click', event => {
  const button=event.target.closest('[data-open-document]');
  if(button) openDocument(button.dataset.openDocument,Number(button.dataset.documentIndex));
  if(event.target.closest('[data-close-modal]')) closeProject();
  if(event.target.closest('[data-close-pdf]')) closePdf();
});
modalClose.addEventListener('click', closeProject);
document.getElementById('pdf-close').addEventListener('click', closePdf);
document.addEventListener('keydown', event => {
  if(event.key==='Escape') {
    if(pdfModal.classList.contains('is-open')) closePdf();
    else if(projectModal.classList.contains('is-open')) closeProject();
    else closeMenu();
  }
  // Conserver le focus dans la fenêtre ouverte (accessibilité clavier).
  if(event.key==='Tab') {
    const dialog = pdfModal.classList.contains('is-open') ? pdfModal : projectModal.classList.contains('is-open') ? projectModal : null;
    if(!dialog) return;
    const focusable = [...dialog.querySelectorAll('button:not([disabled]), a[href], iframe')].filter(el=>el.offsetParent!==null);
    if(!focusable.length) return;
    const first=focusable[0],last=focusable[focusable.length-1];
    if(event.shiftKey && document.activeElement===first) {event.preventDefault();last.focus();}
    else if(!event.shiftKey && document.activeElement===last) {event.preventDefault();first.focus();}
  }
});
