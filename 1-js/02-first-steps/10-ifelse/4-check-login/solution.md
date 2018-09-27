

```js run demo
let userName = prompt("Qui est là ?", '');

if (userName == 'Admin') {

  let pass = prompt('Mot de passe ?', '');

  if (pass == 'TheMaster') {
    alert( 'Bienvenue !' );
  } else if (pass == '' || pass == null) {
    alert( 'Annulé.' );
  } else {
    alert( 'Mauvais mot de passe' );
  }

} else if (userName == '' || userName == null) {
  alert( 'Annulé' );
} else {
  alert( "Je ne vous connais pas" );
}
```

Notez les retraits verticaux à l'intérieur des blocs `if`. Ils ne sont techniquement pas nécessaires, mais rendent le code plus lisible.
