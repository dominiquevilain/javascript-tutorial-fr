importance: 5

---

# Réécrire le "switch" dans un "if"

Écrivez le code en utilisant `if..else` qui correspondrait au `switch` suivant :

```js
switch (browser) {
  case 'Edge':
    alert( "Vous avez le navigateur Edge !" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Ok nous supportons ces navigateurs aussi' );
    break;

  default:
    alert( "Nous espérons que cette page s'affiche bien" );
}
```

