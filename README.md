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

`Component` :

`Text` :

`View` :

`Image` :

`ScrollView` :

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

### Initialiser le projet:



## Exercices:
### Faire une application "Make your choice" (Livecoding)
### Faire une application "puissance4"

## La documentation:

[La documentation officielle de facebook](https://facebook.github.io/react-native/)

[Le github de React Native](https://github.com/facebook/react-native)