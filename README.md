# Workshop React-Native @Becode Charleroi

## Sommaire
1. [Présentation](#présentation)
2. [Qu'est-ce que Réact Native?](#quest-ce-que-réact-native)
3. [Quelles sont les différences avec React?](#quelles-sont-les-différences-avec-react)
4. [Les mots clés important](#les-mots-clés-important)
5. [Créer une première application React Native](#créer-une-première-application-react-native)
    1. [Les installations nécessaire](#les-installations-nécessaire)
    2. [Initialiser le projet](#initialiser-le-projet)
6. [Exercices](#exercices)
    1. [Faire une application "Make your choice" (Livecoding)](#faire-une-application-make-your-choice-Livecoding)
    2. [Faire une application "puissance4"](#faire-une-application-puissance4)
7. [La documentation](#la-documentation)


## Présentation

Ce workshop est réalisé dans le cadre de la formation Becode à Charleroi. Le sujet a été choisi pour compléter le parcours React qui a été réaliser. Ce workshop est présenté par Maxime Huet et Adrien Desart. 

## Qu'est-ce que Réact Native?

React Native est basé sur la bibliothèque React et utilise donc du JavaScript. RN ("React Native") permet de construire de véritables applications mobile (IOS et Android), qui ne sont pas des applications web mobile, en n'utilisant que JS (à la place de Swift,Kotlin ou Java). Comme pour React, il utilise des components pour composer un environnement UI très riche et dynamique. 

RN permet d'utiliser et de modifier du code natif pour votre application. Vous pouvez combiner avec des components écrits en Swift,Java ou Objective-C. Cette combinaison permet d'optimiser les applications et de réaliser des tâches pas toujours réalisable en JS.

## Quelles sont les différences avec React? 

* RN est un framework mobile (React = bibliothèque JS) compilant les composants d'applications natifs.

* RN ne communique pas directement avec le DOM, il passe par bridge qui interprète les actions sur les différentes vues. RN utilise des composants créés par le développeur à partir des composants de base ("View, Text,...) pour créer du code natif.

## Les mots clés important:

`Text` : Un composant pour afficher du texte.

`View` : Le composant le plus fondamental pour la construction d'une interface utilisateur.

`Image` : Un composant pour afficher des images.

`ScrollView` : Fournit un conteneur de défilement pouvant héberger plusieurs composants et vues.

`TextInput` : Un composant pour la saisie de texte dans l'application via un clavier.

`StyleSheet` : Fournit une couche d'abstraction similaire aux feuilles de style CSS.


## Créer une première application React Native
### Les installations nécessaire:

1. Dans un premier temps nous allons créer un dossier appelez react-native et dans ce dossier initier un dossier natif appelé AwesomeNativeBase et ce placer dans le dossier grâce aux commande: 

	```react-native init AwesomeNativeBase```

	```cd AwesomeNativeBase```

- Nous allons ensuite Installer NativeBase

	```npm install native-base --save```

- Ensuite configuré NativeBase avec notre app React Native: 

	```react-native link```


2. Nous allons en deuxième temps configurer avec le web pour celà revenir dans le dossier react-native :

	```cd ..```

	```npm install -g create-react-app```

	```npx create-react-app nativebase-app```

	```cd nativebase-app```

	```npm i native-base react-art react-native-web --save```

	```npm i react-app-rewired customize-cra @babel/plugin-proposal-class-properties --dev --save```

3. Créez le fichier config-overrides.js à la racine de votre projet

<pre><code>
const path = require('path');
const {
  override,
  addWebpackAlias,
  babelInclude,
  addBabelPlugins
} = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    "react-native/Libraries/Renderer/shims/ReactNativePropRegistry": "react-native-web/dist/modules/ReactNativePropRegistry",
    "react-native": "react-native-web"
  }),
  babelInclude([
    path.resolve('src'),
    path.resolve('node_modules/native-base-shoutem-theme'),
    path.resolve('node_modules/react-navigation'),
    path.resolve('node_modules/react-native-easy-grid'),
    path.resolve('node_modules/react-native-drawer'),
    path.resolve('node_modules/react-native-safe-area-view'),
    path.resolve('node_modules/react-native-vector-icons'),
    path.resolve('node_modules/react-native-keyboard-aware-scroll-view'),
    path.resolve('node_modules/react-native-web'),
    path.resolve('node_modules/react-native-tab-view'),
    path.resolve('node_modules/static-container'),
  ]),
  addBabelPlugins(
    "@babel/plugin-proposal-class-properties"
  ),
);
</code></pre>

3. Copier ce bout de code dans App.css:

<pre><code>
@font-face {
  font-family: "Entypo";
  src: url("~react-native-vector-icons/Fonts/Entypo.ttf") format("truetype");
}

@font-face {
  font-family: "EvilIcons";
  src: url("~react-native-vector-icons/Fonts/EvilIcons.ttf") format("truetype");
}

@font-face {
  font-family: "FontAwesome";
  src: url("~react-native-vector-icons/Fonts/FontAwesome.ttf")
    format("truetype");
}

@font-face {
  font-family: "fontcustom";
  src: url("~react-native-vector-icons/Fonts/Foundation.ttf") format("truetype");
}

@font-face {
  font-family: "Ionicons";
  src: url("~react-native-vector-icons/Fonts/Ionicons.ttf") format("truetype");
}

@font-face {
  /*font-family: 'MaterialCommunityIcons';*/
  font-family: "Material Design Icons";
  src: url("~react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf")
    format("truetype");
}

@font-face {
  font-family: "MaterialIcons";
  src: url("~react-native-vector-icons/Fonts/MaterialIcons.ttf")
    format("truetype");
}

@font-face {
  font-family: "Octicons";
  src: url("~react-native-vector-icons/Fonts/Octicons.ttf") format("truetype");
}

@font-face {
  font-family: "simple-line-icons";
  src: url("~react-native-vector-icons/Fonts/SimpleLineIcons.ttf")
    format("truetype");
}

@font-face {
  font-family: "Zocial";
  src: url("~react-native-vector-icons/Fonts/Zocial.ttf") format("truetype");
}
</code></pre>

4. Lancer l'Application:

	```npm start```

### Initialiser le projet:



## Exercices:
### Faire une application "Make your choice" (Livecoding)
### Faire une application "puissance4"

## La documentation:

[La documentation officielle de facebook](https://facebook.github.io/react-native/)

[Le github de React Native](https://github.com/facebook/react-native)