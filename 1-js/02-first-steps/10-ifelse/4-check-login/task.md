importance: 3

---

# Vérifiez le login

Écrivez le code qui demande une connexion avec `prompt`.

Si le visiteur entre` "Admin"`, alors demandez-lui un mot de passe, si l'entrée est une ligne vide ou si la touche `Esc` est pressé afficher "Annulé.", Si c'est une autre chaîne  de caractères - alors affichez "Je ne vous connais pas".

Le mot de passe est vérifié comme suit :

- Si c'est égal à "TheMaster", alors affichez "Bienvenue !",
- Une autre chaîne de caractères - affiche "Mauvais mot de passe",
- Pour une chaîne de caracètres vide ou une entrée annulée, affichez "Annulé".

Le schéma :

![](ifelse_task.png)

Veuillez utiliser des blocs `if` imbriqués. Attention à la lisibilité globale du code.

Indice : passer une entrée vide à un prompt retourne une chaîne de caracètres vide` ''`. En appuyant sur `ESC` pendant un prompt, cela retourne `null`.

[demo]
