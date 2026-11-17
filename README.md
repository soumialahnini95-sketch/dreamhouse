# Dream House — version statique

Ce dossier contient le site prêt à être ouvert dans Visual Studio Code et hébergé comme site statique. Il n’utilise ni React, ni serveur de build : `index.html`, `styles.css`, `app.js` et les images WebP sont autonomes. Les 35 frames locales pilotent le récit au scroll, et les cartes disposent d’une inclinaison 3D visuelle à partir des photos 2D — **ce ne sont pas des visites ou modèles 3D réels**.

## Ouvrir dans VS Code

1. Décompressez le paquet et ouvrez le dossier `github-pages` dans VS Code (`File > Open Folder`).
2. Pour voir le site, ouvrez `index.html` dans un navigateur, ou utilisez l’extension **Live Server** de VS Code et choisissez **Go Live**. Aucun `npm install` ni compilateur n’est nécessaire.
3. Modifiez les contenus directement dans `index.html`, `styles.css` ou `app.js`. Les annonces, prix, avis et coordonnées actuels sont des exemples à confirmer.

## Héberger avec GitHub Pages

1. Créez un dépôt GitHub et ajoutez à sa racine les fichiers et dossiers de ce paquet (le contenu de `github-pages`, pas le dossier parent).
2. Dans le dépôt, allez à **Settings → Pages**.
3. Choisissez **Deploy from a branch**, puis la branche `main` et le dossier `/ (root)`; enregistrez.
4. GitHub Pages publiera le site après la fin du déploiement. Les chemins vers les images sont relatifs, donc compatibles avec un dépôt de projet GitHub Pages.

## Configurer avant publication

- Le numéro `0772680839` est configuré pour l’appel et WhatsApp; son format international dans `app.js` est `212772680839` (sans `+` ni espaces). Pour le remplacer, mettez à jour `WHATSAPP_NUMBER` et `PHONE_DISPLAY` dans `app.js` ainsi que le lien de secours `agencyPhone` dans `index.html`.
- Renseignez l’adresse, les horaires et les liens sociaux; vérifiez la ville de la carte et remplacez les annonces et les six emplacements d’avis d’exemple par des contenus réels avant publication.
- Les formulaires n’enregistrent pas de données : ils ouvrent WhatsApp avec le message saisi. Pour un stockage réel des prospects ou une gestion CMS/API, connectez un service backend distinct.
- La ville de la carte est modifiable dans `AGENCY_CITY` dans `app.js`; mettez aussi à jour le texte du point de carte dans `index.html`.

## Structure

- `index.html` — contenu de la page, métadonnées SEO et textes par défaut en français.
- `styles.css` — thème, responsive, RTL et effet d’inclinaison/perspective.
- `app.js` — langues FR/EN/AR, filtres, carrousel, détails, animation scroll-scrub et WhatsApp.
- `assets/photos/` — images d’inspiration WebP pour le héros et les biens.
- `assets/frames/` — images WebP extraites du clip qui alimentent le canvas au défilement.
- `brand-mark.svg` — icône de marque.

## Les éléments qui distinguent la marque

- **Parcours en 90 secondes** : questionnaire en trois étapes (ville, achat/location, type, budget, échéance, usage et visite à distance/sur place). Il applique les filtres locaux et prépare un message WhatsApp, uniquement si le visiteur clique dessus. Rien n’est enregistré et aucun backend n’est inclus.
- **Carnet des quartiers** : contenu de démonstration pour la médina, Guéliz et la Palmeraie de Marrakech. Les repères culturels sont sourcés dans [`SOURCES.md`](./SOURCES.md); le guide précise qu’il ne constitue ni une estimation de marché ni un conseil d’achat. Les photos sont illustratives et ne représentent pas nécessairement ces quartiers. Faites valider les textes par l’équipe locale; si la ville change, remplacez aussi les fiches et sources.
- **Passeport du bien** : le bouton de détail ouvre la provenance et l’état des champs utiles. Les annonces présentes sont des exemples; prix, surface et pièces restent « à confirmer », documents « non renseignés », et les images sont signalées comme inspiration. N’affichez « confirmé » qu’après vérification documentaire.
- **Signature éditoriale** : « Le bon quartier. Le bon bien. Un parcours clair. » Ajustez cette ligne et le contenu du guide avant une mise en ligne réelle.
