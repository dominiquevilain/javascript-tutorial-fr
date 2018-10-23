
```js run
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Êtes-vous d'accord ?",
*!*
  () => alert("Vous êtes d'accord."),
  () => alert("Vous avez annulé l'exécution.")
*/!*
);
```

Ça a l'air court et propre, non ?
