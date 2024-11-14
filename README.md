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
Ouvrir le navigateur à l'adresse [http://localhost:5173/](http://localhost:5173/) 

## Instructions
Créer une application Vue.js à partir du site _Fortnite - Armes (Battle Royale)_
contenu dans le dossier `_sources/` de ce dépôt.

### 1. Intégration de la maquette
Intégrer dans l'application Vue.js les éléments suivants de la maquette du dossier `_sources/` :
- Titre du site
- Favicon
- CSS
- Images
- Intégration du code HTML du fichier `_sources/index.html` dans le fichier `App.vue`

### Découpage en plusieurs composants
Découper le code HTML du fichier `App.vue` en plusieurs composants Vue :
- `PageHeader.vue` contient le `<header>` du site
- `PageFooter.vue` contient le `<footer>` du site
- Intégrer le CSS de chaque partie dans le fichier `.vue` correspondant.

> **Ne pas créer de composant représentant une arme !!!** Pas demander dans cette épreuve.

### 2. Affichage des armes
Dans le fichier `App.vue` créer une donnée réactive `armesFortnite` initialisée avec le tableau ci-dessous.

Ensuite utiliser une boucle pour parcourir ce tableau et créer un `<li>`
pour chaque arme dans la liste `<ul class="liste-armes">`.

Les éléments dynamiques à afficher pour chaque arme sont :
- Nom de l'arme
- Image de l'arme
- Description de l'arme
- Dégâts
- Cadence de tir
- Temps de rechargement

```js
[
  {
    id: 1,
    nom: "Arbalète",
    degats: 75,
    cadence: 0.8,
    rechargement: 2.5,
    image: "arbalete.webp",
    description: "L'arbalète est une arme à longue portée, idéale pour des attaques précises."
  },
  {
    id: 2,
    nom: "Fusil d'assaut",
    degats: 30,
    cadence: 5.5,
    rechargement: 2.3,
    image: "fusil-assaut.webp",
    description: "Le fusil d'assaut est une arme automatique à moyenne portée."
  },
  {
    id: 3,
    nom: "Fusil à pompe",
    degats: 90,
    cadence: 1,
    rechargement: 3,
    image: "fusil-pompe.webp",
    description: "Le fusil à pompe est une arme dévastatrice à courte portée."
  },
  {
    id: 4,
    nom: "Fusil de sniper",
    degats: 105,
    cadence: 0.33,
    rechargement: 2.7,
    image: "fusil-sniper.webp",
    description: "Le fusil de sniper est une arme de précision pour des tirs à très longue portée."
  },
  {
    id: 5,
    nom: "Lance-roquettes",
    degats: 110,
    cadence: 0.75,
    rechargement: 3.5,
    image: "lance-roquettes.webp",
    description: "Le lance-roquettes cause des dégâts massifs avec ses explosions."
  },
  {
    id: 6,
    nom: "Mitraillette",
    degats: 25,
    cadence: 9,
    rechargement: 2,
    image: "mitraillette.webp",
    description: "La mitraillette est une arme automatique à courte portée avec une cadence de tir élevée."
  },
  {
    id: 7,
    nom: "Pistolet",
    degats: 23,
    cadence: 6.5,
    rechargement: 1.8,
    image: "pistolet.webp",
    description: "Le pistolet est une arme de poing polyvalente et rapide."
  }
]
```

### 3. Ajout d'une arme dans _Mes Objets_

#### Création du tableau réactif `mesObjets`
Dans `App.vue` créer une donnée réactive de type tableau `mesObjets` qui contiendra
les armes ajoutées par l'utilisateur.

#### Ajout d'une arme dans `mesObjets`
Au clic sur le bouton `[+]` d'une arme, celle-ci doit être ajoutée dans le tableau `mesObjets`.
Utiliser la méthode `push()` pour ajouter une arme dans le tableau `mesObjets`.
```js
mesObjets.push(armeAajouter);
```
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
Il faudra donc passer le tableau `mesObjets` en tant que propriété au composant `PageFooter.vue`,
pour pouvoir l'afficher dans le `<footer>`.

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



    


