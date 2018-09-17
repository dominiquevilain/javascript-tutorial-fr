# Une Introduction à JavaScript

Voyons ce qui est spécial à propos de JavaScript, ce qu'il nous permet de faire et avec quelles autres technologies il s'accorde bien.

## Qu'est-ce que JavaScript?

*JavaScript* a été initiallement créé pour *"rendre les pages web vivantes"*.

Les programmes dans ce langage sont appelés *scripts*. Ils peuvent être écrits directement dans le code HTML et exécutés automatiquement au chargement des pages.

Les scripts sont fournis et exécutés en texte brut. Ils n'ont pas besoin d'une préparation spéciale ou d'une compilation pour fonctionner.

De part cet aspect, JavaScript est très différent d'un autre langage appelé [Java](https://fr.wikipedia.org/wiki/Java_(langage)).

```smart header="Pourquoi <u>Java</u>Script?"
Quand Javascript a été créé, il portait initialement un autre nom: "LiveScript". Mais à cette époque le langage Java était très populaire, il a donc été décidé que positionner un nouveau langage en tant que "petit frère" de Java pourrait aider.

Mais au fur et à mesure de son évolution, JavaScript est devenu un langage totalement indépendant, avec ses propres spécifications appelées [ECMAScript](https://fr.wikipedia.org/wiki/ECMAScript), aujourd'hui il n'a aucun rapport avec Java.
```

Aujourd'hui, JavaScript peut s'exécuter non seulement dans le navigateur, mais également sur serveur, ou encore sur n'importe quel appareil dans lequel existe un programme appelé [le moteur JavaScript](https://fr.wikipedia.org/wiki/Moteur_JavaScript).

Le navigateur a un moteur intégré, parfois il peut être également appelé "la machine virtuelle JavaScript".

Différents moteurs ont différents "nom de code", par exemple:

- [V8](https://fr.wikipedia.org/wiki/V8_(moteur_JavaScript)) -- dans Chrome et Opera.
- [SpiderMonkey](https://fr.wikipedia.org/wiki/SpiderMonkey) -- dans Firefox.
- … Il existe d'autres noms de code comme "Trident", "Chakra" pour différentes version d'Internet Explorer, "ChakraCore" pour Microsoft Edge, "Nitro" ans "SquirrelFish" pour Safari etc.

Les termes ci-dessus sont bons à retenir, car ils sont utilisés dans les articles destinés aux développeurs sur Internet. Nous les utiliserons aussi. Par exemple, si "une fonctionnalité X est prise en charge par V8", cela fonctionne probablement dans Chrome et Opera.

```smart header="Comment fonctionnent les moteurs ?"

Les moteurs sont compliqués. Mais le fonctionnement de base est facile à comprendre.

1. Le moteur (intégré si c’est un navigateur) lit ("analyse") le script.
2. Ensuite, il convertit ("compile") le script en langage machine.
3. Enfin le code machine s'exécute, très rapidement.

Le moteur applique des optimisations à chaque étape du processus. Il surveille même le script compilé en cours d'exécution, analyse les données qui le traversent et applique des optimisations au code machine en fonction de ces informations. Au final, les scripts sont assez rapides.
```

## Que peut faire JavaScript dans le navigateur ?

Le JavaScript moderne est un langage de programmation "sûr". Il ne fournit pas d'accès de bas niveau à la mémoire ou au processeur, parce qu'il a été initialement conçu pour les navigateurs qui n'en ont pas besoin.

Les fonctionnalités dépendent grandement de l'environnement qui exécute JavaScript. Par exemple, [Node.JS](https://fr.wikipedia.org/wiki/Node.js) prend en charge les fonctions qui permettent à JavaScript de lire / écrire des fichiers arbitrairement, d'exécuter des requêtes réseau, etc.

JavaScript intégré au navigateur peut faire tout ce qui concerne la manipulation des pages Web, l'interaction avec l'utilisateur et le serveur Web.

Par exemple, JavaScript dans le navigateur est capable de : 

- Ajoutez un nouveau code HTML à la page, modifiez le contenu existant, modifiez les styles.
- Réagir aux actions de l'utilisateur, s'exécuter sur des clics de souris, des mouvements de pointeur, des appuis sur des touches.
- Envoyer des requêtes sur le réseau à des serveurs distants, télécharger et envoyer des fichiers (technologies [AJAX](https://fr.wikipedia.org/wiki/Ajax_(informatique)) et [COMET](https://fr.wikipedia.org/wiki/Comet_(informatique))).
- Obtenir et définir des cookies, poser des questions au visiteur, afficher des messages.
- Se souvenir des données du côté client ("stockage local").

## What CAN'T in-browser JavaScript do?

JavaScript's abilities in the browser are limited for the sake of the user's safety. The aim is to prevent an evil webpage from accessing private information or harming the user's data.

The examples of such restrictions are:

- JavaScript on a webpage may not read/write arbitrary files on the hard disk, copy them or execute programs. It has no direct access to OS system functions.

    Modern browsers allow it to work with files, but the access is limited and only provided if the user does certain actions, like "dropping" a file into a browser window or selecting it via an `<input>` tag.

    There are ways to interact with camera/microphone and other devices, but they require a user's explicit permission. So a JavaScript-enabled page may not sneakily enable a web-camera, observe the surroundings and send the information to the [NSA](https://en.wikipedia.org/wiki/National_Security_Agency).
- Different tabs/windows generally do not know about each other. Sometimes they do, for example when one window uses JavaScript to open the other one. But even in this case, JavaScript from one page may not access the other if they come from different sites (from a different domain, protocol or port).

    This is called the "Same Origin Policy". To work around that, *both pages* must contain a special JavaScript code that handles data exchange.

    The limitation is again for user's safety. A page from `http://anysite.com` which a user has opened must not be able to access another browser tab with the URL `http://gmail.com` and steal information from there.
- JavaScript can easily communicate over the net to the server where the current page came from. But its ability to receive data from other sites/domains is crippled. Though possible, it requires explicit agreement (expressed in HTTP headers) from the remote side. Once again, that's safety limitations.

![](limitations.png)

Such limits do not exist if JavaScript is used outside of the browser, for example on a server. Modern browsers also allow installing plugin/extensions which may get extended permissions.

## What makes JavaScript unique?

There are at least *three* great things about JavaScript:

```compare
+ Full integration with HTML/CSS.
+ Simple things done simply.
+ Supported by all major browsers and enabled by default.
```

Combined, these three things exist only in JavaScript and no other browser technology.

That's what makes JavaScript unique. That's why it's the most widespread tool to create browser interfaces.

While planning to learn a new technology, it's beneficial to check its perspectives. So let's move on to the modern trends that include new languages and browser abilities.


## Languages "over" JavaScript

The syntax of JavaScript does not suit everyone's needs. Different people want different features.

That's to be expected, because projects and requirements are different for everyone.

So recently a plethora of new languages appeared, which are *transpiled* (converted) to JavaScript before they run in the browser.

Modern tools make the transpilation very fast and transparent, actually allowing developers to code in another language and autoconverting it "under the hood".

Examples of such languages:

- [CoffeeScript](http://coffeescript.org/) is a "syntactic sugar" for JavaScript, it introduces shorter syntax, allowing to write more precise and clear code. Usually Ruby devs like it.
- [TypeScript](http://www.typescriptlang.org/) is concentrated on adding "strict data typing", to simplify development and support of complex systems. It is developed by Microsoft.
- [Dart](https://www.dartlang.org/) is a standalone language that has its own engine that runs in non-browser environments (like mobile apps). It was initially offered by Google as a replacement for JavaScript, but as of now, browsers require it to be transpiled to JavaScript just like the ones above.

There are more. Of course even if we use one of those languages, we should also know JavaScript, to really understand what we're doing.

## Summary

- JavaScript was initially created as a browser-only language, but now it is used in many other environments as well.
- At this moment, JavaScript has a unique position as the most widely-adopted browser language with full integration with HTML/CSS.
- There are many languages that get "transpiled" to JavaScript and provide certain features. It is recommended to take a look at them, at least briefly, after mastering JavaScript.
