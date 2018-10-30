Passez simplement une boucle sur l’objet et `return false` immédiatement s’il existe au moins une propriété.

```js
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
```
