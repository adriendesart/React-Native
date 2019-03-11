# Workshop React-Native @Becode Charleroi

## Présentation

Ce workshop est réalisé dans le cadre de la formation Becode à Charleroi. Le sujet a été choisi pour compléter le parcours React qui a été réaliser. Ce workshop est présenté par Maxime Huet et Adrien Desart. 

## Qu'est-ce que Réact Native?


## Quelles sont les différences avec React? 


## Les mots clés important:


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

	```const path = require('path');
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
);```

### Initialiser le projet:



## Exercices :
### Faire une application "Make your choice" (Livecoding)
### Faire une application "puissance4"