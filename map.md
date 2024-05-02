# La méthode map

Soit le code suivant, stories étant un tableau d'objets :
```jsx
{
    stories.map((story) => (
        <Card key={story.id} story={story} />
    ))
}
```
Elle permets de retourner le contenu sur lequel on itère dans le DOM.
Ici on retourne un composant Card pour chaque élément du tableau `stories`.
`key` est une props native de React qui permet de donner un identifiant unique à chaque élément de la liste, react utilise cet identifiant pour optimiser le rendu.
`story` (AVANT le signe `=`) est le nom de la props disponible dans Card.
{story} (APRES le signe `=`) est la valeur de la props props

```jsx
<Component nomDeLaProps={valeurDeLaProps} />
```

