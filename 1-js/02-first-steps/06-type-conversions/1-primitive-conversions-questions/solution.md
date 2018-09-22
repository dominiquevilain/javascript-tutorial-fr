
```js no-beautify
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
7 / 0 = Infinity
" -9\n" + 5 = " -9\n5"
" -9\n" - 5 = -14
null + 1 = 1 // (3)
undefined + 1 = NaN // (4)
```

1. L'addition avec une chaîne de caractères `"" + 1` converti `1` vers une chaîne de caractères : `"" + 1 = "1"`, ensuite nous avons `"1" + 0`, la même règle est appliquée.
2. La soustraction `-` (comme la plupart des opérations mathématiques) ne fonctionne qu'avec des nombres, il convertit une chaîne de caractères vide `""` vers `0`.
3. `null` devient `0` après la conversion numérique.
4. `undefined` devient `NaN` après la conversion numérique.
