/* Bilingual version: French by default, English on demand. No external library needed. */
const englishMarkup = {
  ".skip-link": "Skip to content",
  ".announcement": "<span class=\"announce-dot\"></span> PORTFOLIO · QHSE ENGINEERING <span class=\"announce-divider\">/</span> 2026 EDITION",
  ".main-nav a[href=\"#apropos\"]": "About",
  ".main-nav a[href=\"#expertises\"]": "Expertise",
  ".main-nav a[href=\"#projets\"]": "Projects",
  ".main-nav a[href=\"#experience\"]": "Experience",
  ".nav-contact": "Get in touch <span aria-hidden=\"true\">↗</span>",
  ".eyebrow": "<span class=\"eyebrow-line\"></span> HELLO, I’M NOUR <span class=\"tiny-star\">✳</span>",
  "#hero-title": "Bringing <em>QHSE</em><br>excellence to<br><span class=\"serif-underline\">lasting impact.</span>",
  ".hero-lead": "An Industrial Biology Engineer specializing in QHSE, I combine <strong>technical rigor</strong>, <strong>risk prevention</strong> and <strong>continuous improvement</strong> to help organizations become safer and more sustainable.",
  ".hero-actions .btn-primary": "Explore my projects <span aria-hidden=\"true\">↗</span>",
  ".hero-actions .btn-text": "Download my CV (FR) <span aria-hidden=\"true\">↓</span>",
  ".hero-scroll-indicator": "<i></i> SCROLL TO EXPLORE",
  ".hero-foot > span:last-child": "QHSE <b>✳</b> MANAGEMENT <b>✳</b> PREVENTION",
  ".floating-top .micro-label": "MY APPROACH",
  ".floating-top strong": "Protect.<br>Improve.<br><em>Transform.</em>",
  ".floating-bottom small": "DRIVEN BY RIGOR",
  ".floating-bottom div > span": "Guided by purpose.",
  ".metrics-strip .metric:nth-child(1) > span": "QHSE indicators developed<br>at ORANO",
  ".metrics-strip .metric:nth-child(3) > span": "risk scenarios<br>analyzed",
  ".metrics-strip .metric:nth-child(5) > span": "CAPA actions proposed<br>in an IMS project",
  ".metrics-strip .metric:nth-child(7) > span": "engineering projects<br>to explore",
  ".about .section-side .section-index": "01 — GET TO KNOW ME",
  ".side-deco small": "A HUMAN-CENTERED<br>VISION OF PERFORMANCE",
  "#about-title": "Beyond the standards,<br><em>there are people.</em>",
  ".about-intro": "I’m Nour, a junior QHSE engineer with an Industrial Biology degree from INSAT. I’m interested in what makes the difference between compliance on paper and <strong>a QHSE culture genuinely embedded in daily work.</strong>",
  ".about-two p:nth-child(1)": "My experience in management systems, quality control, audits and risk prevention has taught me to turn technical requirements into practical, measurable actions.",
  ".about-two p:nth-child(2)": "I enjoy understanding processes, turning data into insights and building simple, reliable tools that truly help teams.",
  ".about-main .text-arrow": "Discover my experience <span aria-hidden=\"true\">↗</span>",
  ".expertise .section-index": "02 — WHAT DRIVES ME",
  "#expertise-title": "My areas of <em>expertise.</em>",
  ".expertise .section-intro": "A cross-functional approach connecting quality, health and safety, and the environment.",
  ".expertise-card:nth-child(1) h3": "QHSE management<br>systems",
  ".expertise-card:nth-child(1) p": "Assessment, document harmonization, compliance and continuous improvement.",
  ".expertise-card:nth-child(2) h3": "Risk<br>prevention",
  ".expertise-card:nth-child(2) p": "Hazard assessment, risk prioritization and preventive action planning.",
  ".expertise-card:nth-child(3) h3": "Audits &<br>compliance",
  ".expertise-card:nth-child(3) p": "Document review, gap analysis, root-cause assessment and corrective action monitoring.",
  ".expertise-card:nth-child(4) h3": "Data & QHSE<br>performance",
  ".expertise-card:nth-child(4) p": "Dashboards, performance indicators and decision-support tools tailored to field operations.",
  ".expertise-card:nth-child(4) .tag-row > span:nth-child(1)": "Advanced Excel",
  ".projects .section-index": "03 — SELECTED WORK",
  "#projects-title": "Turning ideas into <em>results.</em>",
  ".projects .section-intro": "Three case studies covering context, methodology and a dedicated space for reports and deliverables.",
  ".project-card[data-project=\"audit-smi\"] .art-corner": "PROJECT 01",
  ".project-card[data-project=\"audit-smi\"] .art-base": "INTEGRATED MANAGEMENT SYSTEM",
  ".project-card[data-project=\"audit-smi\"] .project-meta span:nth-child(2)": "Audit & continuous improvement",
  ".project-card[data-project=\"audit-smi\"] h3": "Integrated management system audit in <em>biotechnology.</em>",
  ".project-card[data-project=\"audit-smi\"] .project-details > p": "Assessment of an integrated management system against ISO 9001, 14001 and 45001; gap analysis and development of a CAPA plan.",
  ".project-card[data-project=\"audit-smi\"] .project-figures > span:nth-child(1)": "<strong>8</strong> processes",
  ".project-card[data-project=\"audit-smi\"] .project-figures > span:nth-child(2)": "<strong>11</strong> CAPA actions",
  ".project-card[data-project=\"audit-smi\"] .project-figures > span:nth-child(3)": "<strong>9</strong> QHSE KPIs",
  ".project-card[data-project=\"methanisation\"] .art-corner": "PROJECT 02",
  ".project-card[data-project=\"methanisation\"] .art-base": "INDUSTRIAL RISK ASSESSMENT",
  ".project-card[data-project=\"methanisation\"] .project-meta span:nth-child(2)": "Industrial risks · HAZOP / FMEA",
  ".project-card[data-project=\"methanisation\"] h3": "Risk assessment of an anaerobic <em>digestion facility.</em>",
  ".project-card[data-project=\"methanisation\"] .project-details > p": "Analysis of hazardous scenarios for an ICPE 2781 facility and a prevention plan covering explosive atmospheres and confined spaces.",
  ".project-card[data-project=\"methanisation\"] .project-figures > span:nth-child(1)": "<strong>44</strong> scenarios",
  ".project-card[data-project=\"methanisation\"] .project-figures > span:nth-child(2)": "<strong>8</strong> initial critical risks",
  ".project-card[data-project=\"methanisation\"] .project-figures > span:nth-child(3)": "<strong>60 t/day</strong> study capacity",
  ".project-card[data-project=\"risques-chimiques\"] .art-corner": "PROJECT 03",
  ".project-card[data-project=\"risques-chimiques\"] .art-base": "CHEMICAL RISK PREVENTION",
  ".project-card[data-project=\"risques-chimiques\"] .project-meta span:nth-child(2)": "Cosmetics industry · SEIRICH",
  ".project-card[data-project=\"risques-chimiques\"] h3": "Chemical risk assessment in the <em>cosmetics industry.</em>",
  ".project-card[data-project=\"risques-chimiques\"] .project-details > p": "Assessment of chemicals, safety data sheets and exposure scenarios to identify risk-prevention priorities.",
  ".project-card[data-project=\"risques-chimiques\"] .project-figures > span:nth-child(1)": "<strong>18</strong> substances",
  ".project-card[data-project=\"risques-chimiques\"] .project-figures > span:nth-child(2)": "<strong>26</strong> exposures",
  ".project-card[data-project=\"risques-chimiques\"] .project-figures > span:nth-child(3)": "<strong>12</strong> actions",
  ".project-card[data-project=\"audit-smi\"] .project-open": "View case study <span aria-hidden=\"true\">↗</span>",
  ".project-card[data-project=\"methanisation\"] .project-open": "View case study <span aria-hidden=\"true\">↗</span>",
  ".project-card[data-project=\"risques-chimiques\"] .project-open": "View case study <span aria-hidden=\"true\">↗</span>",
  ".project-card[data-project=\"audit-smi\"] .docs-hint": "◫ &nbsp; Reports & files",
  ".project-card[data-project=\"methanisation\"] .docs-hint": "◫ &nbsp; Reports & files",
  ".project-card[data-project=\"risques-chimiques\"] .docs-hint": "◫ &nbsp; Reports & files",
  ".projects-note p": "<strong>A project is more than a line on a résumé.</strong><br>Each case study has its own document library. PDFs will be viewable here once added and cleared for public sharing.",
  ".career .section-index": "04 — MY JOURNEY",
  "#career-title": "Learning, doing, <em>growing.</em>",
  ".career .section-intro": "Experience in demanding environments, with one shared belief: excellence is built every day.",
  ".career-aside > span": "PROFESSIONAL<br>EXPERIENCE",
  ".timeline-item:nth-child(1) h3": "IMS Assistant — Aval du Futur Project",
  ".timeline-item:nth-child(1) .timeline-content > p": "Supported preparation for ISO 14001, 45001 and 19443 certification, updated QHSE documentation and built a dashboard for 54 KPIs across 10 processes.",
  ".timeline-item:nth-child(1) .timeline-pills span:nth-child(4)": "8 process reviews",
  ".timeline-item:nth-child(2) h3": "Quality Control Assistant — Water & Food",
  ".timeline-item:nth-child(2) .timeline-content > p": "Tested approximately 30 samples daily under ISO 17025 requirements and wrote over 20 quality reports.",
  ".timeline-item:nth-child(2) .timeline-pills span:nth-child(2)": "Traceability",
  ".timeline-item:nth-child(3) h3": "QHSE & ISO Audit Assistant",
  ".timeline-item:nth-child(3) .timeline-role span": "DrugIT · Remote",
  ".timeline-item:nth-child(3) .timeline-content > p": "Conducted an ISO/IEC 42001 management-system assessment, identified 24 gaps and helped prepare for audit through procedures and compliance deliverables.",
  ".timeline-item:nth-child(4) h3": "QHSE Communication & Awareness",
  ".timeline-item:nth-child(4) .timeline-content > p": "Created 10 training materials, helped deliver 4 awareness sessions and supported client audits.",
  ".timeline-item:nth-child(4) .timeline-pills span:nth-child(2)": "Awareness",
  ".timeline-item:nth-child(4) .timeline-pills span:nth-child(3)": "Client audits",
  ".education .section-index": "05 — THE FOUNDATIONS",
  "#edu-title": "A scientific <em>foundation.</em><br>A practical <em>mindset.</em>",
  ".education-intro": "From industrial biology to QHSE management, my education combines scientific thinking with an understanding of real-world business challenges.",
  ".edu-entry:nth-child(1) h3": "Engineering degree in Industrial Biology",
  ".edu-entry:nth-child(1) p": "INSAT · Tunis, Tunisia",
  ".edu-entry:nth-child(2) h3": "Integrated preparatory cycle — Applied Chemistry & Biology",
  ".edu-entry:nth-child(2) p": "INSAT · Tunis, Tunisia",
  ".cert-heading": "TRAINING & CERTIFICATIONS",
  ".cert-block p:nth-of-type(1)": "INRS — Fundamentals of occupational risk prevention <span>2026</span>",
  ".cert-block p:nth-of-type(2)": "INRS — Introduction to chemical hazards <span>2026</span>",
  ".cert-block p:nth-of-type(3)": "INSAT — QHSE management systems <span>2025</span>",
  ".lang-row": "<span>FRENCH · C2</span><span>ENGLISH · C1</span>",
  ".contact-index": "06 — LET’S CONNECT",
  "#contact-title": "Let’s build something<br><em>meaningful.</em>",
  ".contact-shell > p": "Have a QHSE project, a career opportunity or an idea to share? I’d be happy to talk.",
  ".contact-button": "Email me <span aria-hidden=\"true\">↗</span>",
  ".contact-bottom > span:last-child": "MADE WITH INTENTION <b>✳</b>",
  ".footer-row > span": "© <span id=\"year\">2026</span> Nour Harizi. All rights reserved.",
  ".footer-row > a:last-child": "Back to top ↑",
  ".pdf-header .micro-label": "PDF DOCUMENT",
  "#pdf-download": "Download ↓"
};
const englishProjects = {
  "audit-smi": {
    "category": "AUDIT & MANAGEMENT SYSTEMS",
    "title": "Integrated management system audit and improvement in biotechnology",
    "intro": "A review and improvement project focusing on an integrated management system, based on ISO 9001, ISO 14001 and ISO 45001 and the audit principles of ISO 19011.",
    "metrics": [
      [
        "8",
        "processes assessed"
      ],
      [
        "11",
        "CAPA actions proposed"
      ],
      [
        "9",
        "QHSE indicators modeled"
      ]
    ],
    "context": "The objective was to move from a compliance review to a structured improvement plan, connecting evidence, potential gaps, root causes and performance measures.",
    "methods": [
      "Reviewed documentation covering 8 processes and 24 pieces of evidence, drawing on ISO 19011 methodology.",
      "Identified 7 potential gaps and performed 3 root-cause analyses.",
      "Created a plan of 11 corrective and preventive actions (CAPA).",
      "Designed a monitoring model for 9 QHSE KPIs."
    ],
    "result": "A scenario simulation targeted a reduction in nonconformity rate from 5.52% to 3.77%. This was a study projection, not an observed industrial outcome.",
    "documents": [
      {
        "title": "Integrated management system audit report",
        "type": "PDF report"
      },
      {
        "title": "CAPA plan & root-cause analyses",
        "type": "PDF deliverable"
      },
      {
        "title": "QHSE KPI dashboard",
        "type": "Excel workbook"
      }
    ]
  },
  "methanisation": {
    "category": "INDUSTRIAL RISK PREVENTION",
    "title": "Risk assessment of an anaerobic digestion facility — ICPE 2781",
    "intro": "A prevention-focused case study on a 60-tonne-per-day anaerobic digestion facility, assessing, analyzing and prioritizing hazard scenarios.",
    "metrics": [
      [
        "44",
        "scenarios assessed"
      ],
      [
        "5",
        "critical areas"
      ],
      [
        "8",
        "initially unacceptable risks"
      ]
    ],
    "context": "The case study considered operating and maintenance risks, particularly explosive atmospheres and confined-space entry.",
    "methods": [
      "Applied HAZOP and FMEA (AMDEC) techniques and built a criticality matrix.",
      "Assessed 44 scenarios across 5 areas of a 60 t/day installation.",
      "Identified 8 initially unacceptable risks.",
      "Proposed preventive measures covering ATEX zoning, DRPCE, DUERP and confined-space procedures."
    ],
    "result": "Following a theoretical reassessment incorporating the proposed prevention plan, the 8 initially unacceptable risks were classified as acceptable within the study; this was not a verified operational result.",
    "documents": [
      {
        "title": "HAZOP / FMEA risk assessment report",
        "type": "PDF report"
      },
      {
        "title": "Risk map & risk matrix",
        "type": "PDF deliverable"
      },
      {
        "title": "Prevention plan (ATEX / DRPCE)",
        "type": "PDF deliverable"
      }
    ]
  },
  "risques-chimiques": {
    "category": "CHEMICAL RISKS & COSMETICS",
    "title": "Chemical risk assessment in the cosmetics industry",
    "intro": "Identification and ranking of chemical risks in a cosmetics industrial environment based on substances used and worker exposure situations.",
    "metrics": [
      [
        "18",
        "chemical products"
      ],
      [
        "26",
        "exposure situations"
      ],
      [
        "12",
        "prevention actions"
      ]
    ],
    "context": "The project sought to identify chemical prevention priorities across three work units.",
    "methods": [
      "Inventoried 18 chemicals and reviewed their safety data sheets (SDS).",
      "Analyzed 26 exposure situations in 3 work units.",
      "Assessed and prioritized chemical risks using SEIRICH.",
      "Developed a proposed monitoring framework for 12 preventive actions."
    ],
    "result": "The case study produced a prioritized risk assessment and a structured monitoring plan for 12 preventive actions.",
    "documents": [
      {
        "title": "Chemical risk assessment report",
        "type": "PDF report"
      },
      {
        "title": "SEIRICH assessment summary",
        "type": "PDF deliverable"
      },
      {
        "title": "Prevention action plan",
        "type": "PDF deliverable"
      }
    ]
  }
};
const languageLabels = {
  "fr": {
    "project": "PROJET",
    "context": "Le contexte",
    "method": "Ma démarche",
    "result": "Résultat / enseignement :",
    "documents": "Rapports & livrables",
    "published": "document(s) publié(s)",
    "description": "Retrouvez ici les documents liés au projet. Les emplacements prévus seront activés après ajout des fichiers.",
    "view": "Voir ↗",
    "open": "Ouvrir ↓",
    "pending": "À ajouter",
    "privacyTitle": "Une publication responsable.",
    "privacyText": "Les rapports d’entreprise, documents de travail et preuves d’audit ne doivent être publiés qu’après autorisation et retrait des informations confidentielles et personnelles.",
    "menuOpen": "Ouvrir le menu",
    "menuClose": "Fermer le menu",
    "closeProject": "Fermer le dossier",
    "closePdf": "Fermer le document",
    "iframe": "Aperçu du document PDF",
    "siteTitle": "Nour Harizi — Ingénieure QSE | Portfolio",
    "metaDescription": "Portfolio de Nour Harizi, ingénieure QSE : systèmes de management QHSE, prévention des risques, audits et amélioration continue.",
    "ogTitle": "Nour Harizi — Ingénieure QSE",
    "ogDescription": "Ingénierie QSE • Prévention des risques • Systèmes de management • Projets et réalisations"
  },
  "en": {
    "project": "PROJECT",
    "context": "The context",
    "method": "My approach",
    "result": "Outcome / key finding:",
    "documents": "Reports & deliverables",
    "published": "published document(s)",
    "description": "Explore the project-related files below. Preview links become active once the corresponding documents have been added.",
    "view": "View ↗",
    "open": "Download ↓",
    "pending": "Coming soon",
    "privacyTitle": "Responsible publishing.",
    "privacyText": "Company reports, work documents and audit evidence should only be published with permission and after removing confidential and personal information.",
    "menuOpen": "Open menu",
    "menuClose": "Close menu",
    "closeProject": "Close case study",
    "closePdf": "Close document",
    "iframe": "PDF document preview",
    "siteTitle": "Nour Harizi — QHSE Engineer | Portfolio",
    "metaDescription": "Nour Harizi’s portfolio: QHSE management systems, risk prevention, audits and continuous improvement.",
    "ogTitle": "Nour Harizi — QHSE Engineer",
    "ogDescription": "QHSE Engineering • Risk Prevention • Management Systems • Projects & Deliverables"
  }
};

const frenchMarkup = {};
for (const selector of Object.keys(englishMarkup)) {
  const element = document.querySelector(selector);
  if (!element) { console.warn('Missing translation target:', selector); continue; }
  frenchMarkup[selector] = element.innerHTML;
}
let activeLanguage = 'fr';
function translateProject(key, original) {
  if (activeLanguage !== 'en' || !original || !englishProjects[key]) return original;
  const localized = englishProjects[key];
  return {
    ...original,
    ...localized,
    documents: original.documents.map((doc, i) => ({...doc, ...(localized.documents[i] || {})}))
  };
}
function i18nLabel(key) {
  return languageLabels[activeLanguage][key] ?? key;
}
function setPortfolioLanguage(language) {
  if (!['fr', 'en'].includes(language)) return;
  activeLanguage = language;
  document.documentElement.lang = language;
  document.title = i18nLabel('siteTitle');
  document.querySelector('meta[name="description"]').content = i18nLabel('metaDescription');
  document.querySelector('meta[property="og:title"]').content = i18nLabel('ogTitle');
  document.querySelector('meta[property="og:description"]').content = i18nLabel('ogDescription');
  for (const [selector, englishText] of Object.entries(englishMarkup)) {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = language === 'en' ? englishText : frenchMarkup[selector];
  }
  // The footer year must remain accurate after switching language.
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  document.querySelectorAll('[data-language]').forEach(btn => {
    btn.setAttribute('aria-pressed', String(btn.dataset.language === language));
  });
  const menu = document.querySelector('.menu-toggle');
  menu.setAttribute('aria-label', i18nLabel(document.getElementById('main-navigation').classList.contains('is-open') ? 'menuClose' : 'menuOpen'));
  document.getElementById('modal-close').setAttribute('aria-label', i18nLabel('closeProject'));
  document.getElementById('pdf-close').setAttribute('aria-label', i18nLabel('closePdf'));
  document.getElementById('pdf-frame').setAttribute('title', i18nLabel('iframe'));
  document.querySelector('.wordmark').setAttribute('aria-label', language === 'en' ? 'Nour Harizi — Home' : 'Nour Harizi — Accueil');
  document.getElementById('main-navigation').setAttribute('aria-label', language === 'en' ? 'Main navigation' : 'Navigation principale');
  try { localStorage.setItem('nour-portfolio-language', language); } catch (_) {}
}
window.portfolioI18n = { translateProject, label:i18nLabel, getLanguage:()=>activeLanguage, setLanguage:setPortfolioLanguage };
document.querySelectorAll('[data-language]').forEach(btn => btn.addEventListener('click', ()=>setPortfolioLanguage(btn.dataset.language)));
let preferredLanguage = 'fr';
try { preferredLanguage = localStorage.getItem('nour-portfolio-language') || 'fr'; } catch (_) {}
setPortfolioLanguage(preferredLanguage === 'en' ? 'en' : 'fr');
