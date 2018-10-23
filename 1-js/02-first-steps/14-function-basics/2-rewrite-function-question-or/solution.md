En utilisant un opérateur point d’interrogation `'?'` :

```js
function checkAge(age) {
  return (age > 18) ? true : confirm('Les parents vous ont-ils permis ?');
}
```

En utilisant OU `||` (la variante la plus courte) :

```js
function checkAge(age) {
  return (age > 18) || confirm('Les parents vous ont-ils permis ?');
}
```

Notez que les parenthèses autour de `age > 18` ans ne sont pas obligatoires ici. Ils existent pour une meilleure lisibilité.
