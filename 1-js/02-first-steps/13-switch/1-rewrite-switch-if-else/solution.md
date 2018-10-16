Pour correspondre précisément à la fonctionnalité du `switch`, le `if` doit utiliser une comparaison stricte `'==='`.

Cependant, pour des chaînes de caractères données, un simple `'=='` fonctionne également.

```js no-beautify
if(browser == 'Edge') {
  alert("Vous avez le navigateur Edge !");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert( 'Ok nous supportons ces navigateurs aussi' );
} else {
  alert( "Nous espérons que cette page s'affiche bien" );
}
```

Remarque: la construction `browser == 'Chrome' || navigateur == 'Firefox'…` est divisée en plusieurs lignes pour une meilleure lisibilité.

Mais la construction `switch` est toujours plus propre et plus descriptive.
