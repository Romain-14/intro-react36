# Typage des props

En dehors de typescript il y a une méthode pour "typer" les données transmises en props.

*C'est pour ça qu'il y a les props de soulignées dans le Composant Card.*

```jsx
// import du module permettant de "typer" les props
// le typage s'effectue en bas du fichier avant l'export
import PropTypes from 'prop-types';

function Card(props) {
    
	return (
		<article>
			<h3>Pays visité : {props.story.country}</h3>
			<p>{props.story.title}</p>
            <p>{props.story.text}</p>
			<a href={"/story/" + props.story.id}>Read more !</a>
		</article>
	);
}


// sur le composant Card, on attend un objet story qui doit contenir les propriétés définis dans la méthode shape
// shape est une méthode de PropTypes qui permet de définir la forme d'un objet ou d'un tableau
Card.propTypes = {
    story: PropTypes.shape({
        id: PropTypes.number.isRequired,
        country: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })
};

export default Card;
```