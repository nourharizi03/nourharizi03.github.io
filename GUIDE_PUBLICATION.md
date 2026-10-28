# VERSION FR / EN 🌍

Le site possède un commutateur FR / EN. Vérifiez la présence du fichier `i18n.js` à la racine lors de l’envoi sur GitHub.

# Publier le portfolio de Nour Harizi avec GitHub Pages

## Étape 1 : créer le dépôt
1. Crée un compte sur https://github.com (ou connecte-toi).
2. Note ton **nom d’utilisateur GitHub**, par exemple `nourharizi`.
3. Clique sur `+` > `New repository`.
4. Nomme le dépôt **exactement** `TON_IDENTIFIANT.github.io` (ex. `nourharizi.github.io`). Le dépôt doit être **Public** avec GitHub Free.
5. Clique sur `Create repository`.

## Étape 2 : ajouter les fichiers du site
1. **Décompresse** ce ZIP sur ton ordinateur.
2. Dans le dépôt, clique sur `Add file` > `Upload files`.
3. Dépose **le contenu** du dossier décompressé (pas le ZIP lui-même et pas un dossier parent). À la racine du dépôt, tu dois voir `index.html`, `styles.css`, `script.js`, `assets/` et `documents/`.
4. Clique sur `Commit changes`.

## Étape 3 : mettre le site en ligne
1. Ouvre `Settings` > `Pages`.
2. Sous `Build and deployment`, choisis `Deploy from a branch`.
3. Sélectionne la branche `main` et le dossier `/(root)`, puis `Save`.
4. Ton lien public sera de la forme `https://TON_IDENTIFIANT.github.io/`.
   Le premier déploiement peut prendre quelques minutes.

## Étape 4 : LinkedIn et CV
- LinkedIn : Profil > Coordonnées > Modifier > Ajouter un site web, ou rubrique `Sélection` > Ajouter un lien.
- CV : sous tes coordonnées, insère « Portfolio : https://TON_IDENTIFIANT.github.io/ » et rends le lien cliquable dans la version PDF.

## Étape 5 : ajouter les projets et les PDF
1. Vérifie que les documents sont **autorisés à être publiés** et qu'ils ne contiennent ni informations confidentielles ni données sensibles.
2. Pour chaque projet, place tes PDF dans le dossier `documents/` approprié.
3. Ouvre `script.js` et, dans `projectData`, mets à jour le chemin `file` et change `available:false` en `available:true` pour les documents présents.
4. Publie les fichiers modifiés dans ton dépôt GitHub.

**Attention :** tous les fichiers du dépôt public peuvent être consultés ou téléchargés, y compris ton CV PDF (avec ses coordonnées). Aucun rapport d'entreprise ne doit être ajouté sans autorisation.

Documentation officielle : https://docs.github.com/en/pages/quickstart
