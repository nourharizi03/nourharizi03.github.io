# Portfolio bilingue — FR / EN

Le site s’ouvre en **français**. Un bouton `FR / EN` dans le menu permet de changer instantanément de langue, sans traduction automatique. Le choix est enregistré dans le navigateur. Les pages de projets, les résultats et les emplacements pour documents sont également traduits. Le CV fourni reste **en français** (bouton « Download my CV (FR) » dans la version anglaise).

# Portfolio — Nour Harizi

Site personnel **élégant, responsive et gratuit à héberger**, créé à partir du CV fourni le 28 octobre 2026.

## Pour découvrir le site

Ouvrir `index.html` dans un navigateur, depuis le dossier décompressé. Aucune installation nécessaire. Les polices Google nécessitent une connexion Internet (une police de remplacement est prévue).

## Ajouter un rapport PDF à un projet

Les trois projets comportent déjà **des emplacements réservés** pour les documents, sans faux documents ni liens brisés.

1. Préparer une **version publiable** du document : retirer les noms de personnes, données internes, informations client, données sensibles, valeurs confidentielles et éléments soumis à des droits de tiers. Obtenir l'autorisation de diffusion si nécessaire.
2. Copier le PDF dans le dossier du projet, par exemple `documents/methanisation/rapport-hazop-amdec.pdf`.
3. Ouvrir `script.js` dans un éditeur (Bloc-notes, VS Code, etc.).
4. Dans `const projectData`, repérer le projet (`audit-smi`, `methanisation` ou `risques-chimiques`) puis la ligne du document.
5. Si besoin, remplacer `file: 'documents/...'` par le chemin réel. Remplacer **`available:false` par `available:true`** pour ce document.
6. Enregistrer `script.js` et actualiser la page. Le bouton **Voir ↗** ouvrira désormais le PDF directement dans le portfolio ; le téléchargement sera aussi proposé.

Pour un fichier Word, Excel ou PowerPoint, on peut l'ajouter également : mettre son chemin, `format:'file'` et `available:true`. Le bouton **Ouvrir ↓** téléchargera le fichier (l'aperçu intégré est réservé aux PDF). Il est possible d'ajouter autant d'entrées que souhaité dans `documents` en copiant une ligne existante.

### Dossiers et noms de fichiers prévus

| Projet | Exemples de livrables déjà paramétrés |
| --- | --- |
| Audit SMI | `documents/audit-smi/rapport-audit-smi.pdf`, `plan-capa.pdf`, `tableau-bord-kpi.xlsx` |
| Méthanisation | `documents/methanisation/rapport-hazop-amdec.pdf`, `matrice-risques.pdf`, `plan-prevention.pdf` |
| Risques chimiques | `documents/risques-chimiques/rapport-risque-chimique.pdf`, `synthese-seirich.pdf`, `plan-actions.pdf` |

**Important :** Ces noms de livrables sont des suggestions d'espaces, **pas une affirmation que les rapports ont déjà été fournis ou créés**. Aucun livrable de projet n'est inclus dans cette première version.

## Personnalisation

- **Photo :** le visuel abstrait à initiale `N` peut être remplacé par une photo professionnelle dans `index.html` et `styles.css`.
- **Textes :** `index.html` pour les sections principales et `script.js` pour le contenu des fiches projet.
- **Couleurs :** en tête de `styles.css` (`:root`) : crème, prune, rose poudré et lilas.
- **CV :** remplacer `assets/CV_Nour_Harizi.pdf` par sa version publique à jour (le CV fourni contient des coordonnées personnelles).
- **LinkedIn :** l'URL exacte n'étant pas fournie, aucun lien LinkedIn n'a été inventé. On pourra l'ajouter dans la barre de navigation et le pied de page.

## Mettre en ligne avec GitHub Pages

1. Créer un compte GitHub et un dépôt public (par exemple `portfolio-nour`).
2. Transférer **le contenu de ce dossier** à la racine du dépôt : `index.html`, `styles.css`, `script.js`, `assets/`, `documents/`.
3. Dans le dépôt, ouvrir `Settings > Pages > Build and deployment` et choisir `Deploy from a branch` → `main` → `/(root)`.
4. Le site sera disponible à une adresse telle que `https://identifiant.github.io/portfolio-nour/` après déploiement.
5. Pour publier de nouveaux rapports, téléverser les PDF dans leurs dossiers et mettre à jour `script.js` puis enregistrer les modifications sur GitHub.

**Protection des données :** un dépôt public et GitHub Pages rendent téléchargeables les fichiers publiés. Ne jamais uploader d'originaux confidentiels, même si aucun lien n'apparaît dans l'interface. Pour du contenu confidentiel, prévoir une zone d'accès réellement protégée, sur une autre infrastructure.

## Structure

```
portfolio_nour_harizi/
├── index.html                    # structure du site
├── styles.css                    # styles et responsive
├── script.js                     # interactions, fiches projets et documents
├── assets/
│   └── CV_Nour_Harizi.pdf        # CV fourni
└── documents/
    ├── audit-smi/
    ├── methanisation/
    └── risques-chimiques/
```

## Vérification des contenus

Les informations (intitulés, années et chiffres) proviennent du CV transmis. Les descriptions éditoriales ont été reformulées pour le site. Les résultats **simulés** et **théoriques** sont explicitement présentés comme tels.

## Traductions / Translations

- `index.html` : contenu original français.
- `i18n.js` : tous les textes anglais et les traductions des études de cas. Modifier ce fichier pour personnaliser la version anglaise.
- `script.js` : fiches de projets françaises + configuration des liens et documents. Modifier les chemins et passer `available:false` à `available:true` après avoir réellement ajouté les documents partageables.

**Ne partagez pas** de documents d’entreprise, données personnelles, preuves d’audit ou documents soumis à confidentialité sans autorisation et anonymisation.
