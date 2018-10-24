importance: 4

---

# Mauvais style

Quel est le problème avec le style de code ci-dessous ?

```js no-beautify
function pow(x,n)
{
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Puissance de ${n} n'est pas pris en charge, veuillez entrer un nombre entier supérieur à zéro`);
}
else
{
  alert(pow(x,n))
}
```

Réparer le.
