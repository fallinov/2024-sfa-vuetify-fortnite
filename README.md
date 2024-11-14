# Epreuve module B72

## Avant de commencer :
### 1.1 Installer les paquets
```sh
npm install
```
### 1.2 Démarrer le serveur de développement
```sh
npm run dev
```
### 1.3 S'assurer que le serveur de développement fonctionne
Ouvrir le navigateur à l'adresse [http://localhost:3000/](http://localhost:3000/) 

## Instructions
Créer une application Vue.js à partir du site _Fortnite - Armes (Battle Royale)_
contenu dans le dossier `_sources/` de ce dépôt.

### 1. Intégration de la maquette
Intégrer dans l'application Vue.js les éléments suivants de la maquette du dossier `_sources/` :
- Titre du site
- Favicon
- CSS
- Images
- Création des **pages** et **routes** à partir des fichiers HTML :
  - `_sources/index.html` - Accueil
  - `_sources/presenations.html` - Présentation de Fortnite
  - `_sources/nouvelle-carte.html` - Nouvelle Carte

### Découpage en plusieurs composants
- Découper le code HTML du fichier `App.vue` en plusieurs composants Vue :
  - `components/PageHeader.vue` contient le `<header>` du site
  - `components/PageFooter.vue` contient le `<footer>` du site
  - Et intégrer le `<router-view>` pour y afficher les composants des pages.
- Créer un composant par page
  - `pages/index.vue` - Accueil
  - `pages/presentation.vue` - Présentation de Fortnite
  - `pages/nouvelle-carte.vue` - Nouvelle Carte
- Intégrer le CSS de chaque partie dans le fichier `.vue` correspondant.
  - CSS général dans `App.vue`
  - CSS du `<header>` dans `PageHeader.vue`
  - CSS du `<footer>` dans `PageFooter.vue`
  - CSS des pages dans les fichiers `.vue` correspondants, 
    utile uniquement pour la page d'accueil et sa liste d'armes.

### 2. Affichage des armes dans 'pages/index.vue'

Récupérer le magasin Pinia et le tableau d'armes puis utiliser
une boucle `v-for` pour parcourir ce tableau et créer un `<li>` 
pour chaque arme dans la liste `<ul class="liste-armes">`.

Les éléments dynamiques à afficher pour chaque arme sont :
- Nom de l'arme
- Image de l'arme (ne pas oublier de les copier dans le dossier `public/img/`)
- Description de l'arme
- Dégâts
- Cadence de tir
- Temps de rechargement

### 3. Ajout d'une arme dans _Mes Objets_

#### Création d'une action pour ajouterArme
Dans le magasin Pinia, créer une action `ajouterArme(arme)`
qui permet d'ajouter une arme dans le tableau `mesObjets`.

Le paramètre `arme` est l'objet de l'arme à ajouter dans le tableau `mesObjets`.

On ne peut **pas ajouter plus que cinq armes** dans `mesObjets`.

#### Ajout d'une arme dans `mesObjets`
Au clic sur le bouton `[+]` d'une arme, celle-ci doit être ajoutée dans le tableau `mesObjets`.
Utiliser l'action `ajouterArme(arme)` pour ajouter l'arme dans le tableau `mesObjets`.

##### Désactiver le bouton `[+]`
Désactiver le bouton `[+]` de l'arme ajoutée dans `mesObjets` 
en ajoutant un attribut `disabled` sur le bouton `[+]` de l'arme ajoutée.
```html
<button disabled>+</button>
```

Utiliser la méthode `includes()` pour tester si une arme est déjà présente dans `mesObjets`.

Ci-après un exemple d'utilisation de la méthode `includes()`
pour savoir si une valeur est déjà présente dans un tableau.
```js
let invites = ["Alice", "Bob", "Charlie"];
if (invites.includes("Bob")) {
    console.log("Bob est déjà dans le tableau");
}
```
#### Affichage des armes dans `mesObjets`
L'objectif est d'afficher les armes ajoutées dans le tableau `mesObjets` dans le `<footer>` de la page.
Il faudra donc récupérer le tableau `mesObjets` dans `components/PageFooter.vue`.

##### Version simple
Dans le `<footer>`, créer une boucle `v-for` qui parcourt le tableau `mesObjets` reçu en tant que propriété,
et crée un `<li>` avec l'image de l'arme de la liste `<ul class="mes-objets">`.
```html
<li>
   <img src="img/pistolet.webp" alt="Pistolet silencieux">
</li>
```
###### Désactiver les boutons `[+]` 
Désactiver les boutons `[+]` de toutes les armes quand il y a 5 armes dans `mesObjets`.

##### Version finale
Dans le `<footer>`, créer une boucle `v-for` qui se répète `5x` pour créer les cinq `<li>`
de la liste `<ul class="mes-objets">`.
```vue
<!-- Exemple de boucle v-for qui affiche 5 paragraphes contenants les chiffres de 1 à 5 -->
<p v-for="n in 5" :key="n">{{ n }}</p>
```
A chaque itération, tester si une arme est présente à la position correspondante dans le tableau `mesObjets`.
> Premier tour de la boucle, tester si une arme est présente à l'index 0 (n-1) dans `mesObjets`.

Si c'est le cas, on affiche l'image da l'arme dans le `<li>`.
```html
<li>
   <img src="img/pistolet.webp" alt="Pistolet silencieux">
</li>
```
Sinon on ajoute un `<li>` vide.
```html
<li></li>
```

Bonne chance !

Steve Fallet



    


