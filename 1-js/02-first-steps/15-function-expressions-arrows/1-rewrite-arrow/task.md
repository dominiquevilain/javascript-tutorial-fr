
# Réécrire avec les fonctions fléchées

Remplacez les expressions de fonction par des fonctions fléchées dans le code :

```js run
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Êtes-vous d'accord ?",
  function() { alert("Vous êtes d'accord."); },
  function() { alert("Vous avez annulé l'exécution."); }
);
```
