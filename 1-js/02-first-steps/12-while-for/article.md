# Boucles : while et for

Nous avons souvent besoin d'effectuer des actions similaires plusieurs fois de suite.

Par exemple, lorsque nous devons extraire des marchandises d'une liste les unes à la suite des autres. Ou exécutez simplement le même code pour chaque numéro de 1 à 10.

*Les boucles* permettent de répéter plusieurs fois la même partie du code.

## La boucle "while"

La boucle `while` a la syntaxe suivante :

```js
while (condition) {
  // code
  // appelé "loop body" ("corps de boucle")
}
```

Tant que la `condition` est `true`, le `code` du corps de la boucle est exécuté.

Par exemple, la boucle ci-dessous affiche `i` tant que `i < 3` :

```js run
let i = 0;
while (i < 3) { // affiche 0, puis 1, puis 2
  alert( i );
  i++;
}
```

Une unique exécution du corps de la boucle est appelée **une itération**. La boucle dans l'exemple ci-dessus fait trois itérations.

S'il n'y avait pas d'`i++` dans l'exemple ci-dessus, la boucle se répèterait (en théorie) pour toujours. En pratique, le navigateur fournit des moyens d’arrêter ces boucles, et pour JavaScript côté serveur, nous pouvons tuer le processus.

Toute expression ou variable peut être une condition de boucle, pas seulement une comparaison. Ils sont évalués et convertis en un booléen par `while`.

Par exemple, le moyen le plus court d'écrire `while (i != 0)` pourrait être `while (i)` :

```js run
let i = 3;
*!*
while (i) { // quand i devient 0, la condition devient fausse et la boucle s'arrête
*/!*
  alert( i );
  i--;
}
```

````smart header="Les accolades ne sont pas requis pour un corps à une seule ligne"
Si le corps de la boucle a une seule déclaration, nous pouvons omettre les accolades `{…}` :

```js run
let i = 3;
*!*
while (i) alert(i--);
*/!*
```
````

## La boucle "do…while"

La vérification de la condition peut être déplacée *sous* le corps de la boucle en utilisant la syntaxe `do..while` :

```js
do {
  // corps de la boucle
} while (condition);
```

La boucle exécute d'abord le corps, puis vérifie la condition et, tant que c'est vrai, l'exécute encore et encore.

Par exemple :

```js run
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);
```

Cette forme de syntaxe est rarement utilisée, sauf lorsque vous souhaitez que le corps de la boucle s'exécute **au moins une fois**, quelle que soit la condition. Habituellement, l'autre forme est préférée : `while(…) {…}`.

## La boucle "for"

La boucle `for` est la plus utilisée.

Cela ressemble à ceci :

```js
for (début; condition; étape) {
  // ... corps de la boucle ...
}
```

Apprenons la signification de ces parties par l'exemple. La boucle ci-dessous exécute `alert(i)` pour `i` en partant de `0` jusqu'à (mais non compris) `3` :

```js run
for (let i = 0; i < 3; i++) { // affiche 0, puis 1, puis 2
  alert(i);
}
```

Examinons la déclaration `for` partie par partie :

| partie    |            |                                                                                        |
|-----------|------------|----------------------------------------------------------------------------------------|
| début     | `i = 0`    | Exécute une fois en entrant dans la boucle.                                            |
| condition | `i < 3`    | Vérifié avant chaque itération de la boucle, en cas d'échec, la boucle s'arrête.       |
| étape     | `i++`      | Exécute après le corps à chaque itération, mais avant la vérification de la condition. |
| corps     | `alert(i)` | Exécute encore et encore tant que la condition est vraie                               |


L'algorithme de boucle général fonctionne comme ceci :
```
Exécuter le début
→ (si condition → exécuter le corps et exécuter l'étape)
→ (si condition → exécuter le corps et exécuter l'étape)
→ (si condition → exécuter le corps et exécuter l'étape)
→ ...
```

Si vous ne connaissez pas les boucles, alors il serait peut-être utile de revenir à l'exemple et de reproduire le déroulement pas à pas sur une feuille de papier.

Voici ce qui se passe exactement dans notre cas :

```js
// for (let i = 0; i < 3; i++) alert(i)

// exécute début
let i = 0
// si condition → exécuter le corps et exécuter l'étape
if (i < 3) { alert(i); i++ }
// si condition → exécuter le corps et exécuter l'étape
if (i < 3) { alert(i); i++ }
// si condition → exécuter le corps et exécuter l'étape
if (i < 3) { alert(i); i++ }
// ... fini, parce que maintenant i == 3
```

````smart header="Déclaration de variable en ligne"
Ici, la variable "counter" `i` est déclarée directement dans la boucle. Cela s'appelle une déclaration de variable "en ligne". De telles variables ne sont visibles que dans la boucle.

```js run
for (*!*let*/!* i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}
alert(i); // erreur, pas de variable
```

Au lieu de définir une variable, nous pouvons en utiliser une existante :

```js run
let i = 0;

for (i = 0; i < 3; i++) { // utiliser une variable existante
  alert(i); // 0, 1, 2
}

alert(i); // 3, visible, car déclaré en dehors de la boucle
```

````


### Sauter des parties

Toute partie de `for` peut être ignorée.

Par exemple, nous pouvons omettre `le début` si nous n'avons rien à faire au début de la boucle.

Comme ici :

```js run
let i = 0; // nous avons i déjà déclaré et assigné

for (; i < 3; i++) { // pas besoin de "début"
  alert( i ); // 0, 1, 2
}
```

Nous pouvons également supprimer la partie `étape` :

```js run
let i = 0;

for (; i < 3;) {
  alert( i++ );
}
```

La boucle est devenue identique à `while (i < 3)`.

Nous pouvons tout supprimer, créant ainsi une boucle infinie :

```js
for (;;) {
  // répète sans limites
}
```

Veuillez noter que les deux les points-virgules `;` de `for` doivent être présents, sinon ce serait une erreur de syntaxe.

## Briser la boucle

Normalement, la boucle sort quand la condition devient fausse.

Mais nous pouvons forcer la sortie à tout moment. Il y a une directive spéciale appelée `break` pour cela.

Par exemple, la boucle ci-dessous demande à l'utilisateur une série de chiffres, mais "se casse" quand aucun numéro n'est entré :

```js
let sum = 0;

while (true) {

  let value = +prompt("Entrez un nombre", '');

*!*
  if (!value) break; // (*)
*/!*

  sum += value;

}
alert( 'Sum: ' + sum );
```

La directive `break` est activée sur la ligne `(*)` si l'utilisateur entre une ligne vide ou annule l'entrée. Il arrête la boucle immédiatement, en passant le contrôle à la première ligne après la boucle. À savoir, `alert`.

La combinaison "boucle infinie + `break` au besoin" est idéale pour les situations où la condition doit être vérifiée non pas au début / à la fin de la boucle, mais au milieu, voire à plusieurs endroits du corps.

## Continue to the next iteration [#continue]

The `continue` directive is a "lighter version" of `break`. It doesn't stop the whole loop. Instead it stops the current iteration and forces the loop to start a new one (if the condition allows).

We can use it if we're done on the current iteration and would like to move on to the next.

The loop below uses `continue` to output only odd values:

```js run no-beautify
for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  *!*if (i % 2 == 0) continue;*/!*

  alert(i); // 1, then 3, 5, 7, 9
}
```

For even values of `i` the `continue` directive stops body execution, passing the control to the next iteration of `for` (with the next number). So the `alert` is only called for odd values.

````smart header="The directive `continue` helps to decrease nesting level"
A loop that shows odd values could look like this:

```js
for (let i = 0; i < 10; i++) {

  if (i % 2) {
    alert( i );
  }

}
```

From a technical point of view it's identical to the example above. Surely, we can just wrap the code in the `if` block instead of `continue`.

But as a side-effect we got one more nesting level (the `alert` call inside the curly braces). If the code inside `if` is longer than a few lines, that may decrease the overall readability.
````

````warn header="No `break/continue` to the right side of '?'"
Please note that syntax constructs that are not expressions cannot be used with the ternary operator `?`. In particular, directives such as `break/continue` are disallowed there.

For example, if we take this code:

```js
if (i > 5) {
  alert(i);
} else {
  continue;
}
```

...And rewrite it using a question mark:


```js no-beautify
(i > 5) ? alert(i) : *!*continue*/!*; // continue not allowed here
```

...Then it stops working. The code like this will give a syntax error:


That's just another reason not to use a question mark operator `?` instead of `if`.
````

## Labels for break/continue

Sometimes we need to break out from multiple nested loops at once.

For example, in the code below we loop over `i` and `j` prompting for coordinates `(i, j)` from `(0,0)` to `(3,3)`:

```js run no-beautify
for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // what if I want to exit from here to Done (below)?

  }
}

alert('Done!');
```

We need a way to stop the process if the user cancels the input.

The ordinary `break` after `input` would only break the inner loop. That's not sufficient. Labels come to the rescue.

A *label* is an identifier with a colon before a loop:
```js
labelName: for (...) {
  ...
}
```

The `break <labelName>` statement in the loop breaks out to the label.

Like here:

```js run no-beautify
*!*outer:*/!* for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) *!*break outer*/!*; // (*)

    // do something with the value...
  }
}
alert('Done!');
```

In the code above `break outer` looks upwards for the label named `outer` and breaks out of that loop.

So the control goes straight from `(*)` to `alert('Done!')`.

We can also move the label onto a separate line:

```js no-beautify
outer:
for (let i = 0; i < 3; i++) { ... }
```

The `continue` directive can also be used with a label. In this case the execution jumps to the next iteration of the labeled loop.

````warn header="Labels are not a \"goto\""
Labels do not allow us to jump into an arbitrary place of code.

For example, it is impossible to do this:
```js
break label;  // jumps to label? No.

label: for (...)
```

The call to a `break/continue` is only possible from inside the loop, and the label must be somewhere upwards from the directive.
````

## Summary

We covered 3 types of loops:

- `while` -- The condition is checked before each iteration.
- `do..while` -- The condition is checked after each iteration.
- `for (;;)` -- The condition is checked before each iteration, additional settings available.

To make an "infinite" loop, usually the `while(true)` construct is used. Such a loop, just like any other, can be stopped with the `break` directive.

If we don't want to do anything on the current iteration and would like to forward to the next one, the `continue` directive does it.

`break/continue` support labels before the loop. A label is the only way for `break/continue` to escape the nesting and go to the outer loop.
