import PropTypes from 'prop-types';

function Card(props) {
    const url_img = new URL(props.story.img_src, import.meta.url).href;

	return (
        <>
		<article>
			<h3>Pays visité : {props.story.country}</h3>
			<p>{props.story.title}</p>
            <img src={url_img} alt="kebab" />
			<a href={"/story/" + props.story.id}>Read more !</a>
		</article>
        <hr />
        </>
	);
}

Card.propTypes = {
    story: PropTypes.shape({
        id: PropTypes.number.isRequired,
        country: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        img_src: PropTypes.string.isRequired
    })
};

export default Card;
