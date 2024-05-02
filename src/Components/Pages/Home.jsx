import StoryCard from "../StoryCard";
import CommentCard from "../CommentCard";

const stories = [
	{
		id: 1,
		country: "Espagne",
		title: "Jako est au PMU de Madrid",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt praesentium possossimus sunt!",
		img_src: `/src/assets/kebab-paysage.webp`,
	},
	{
		id: 2,
		country: "Japon",
		title: "J'ai trouvé Jako dans un macDO là-bas !!",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ios praesentiu praesentium poss praesentium possraesentium posssimus sunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius natus deleniti magni recusandae accusamus expedita perferendis, nam cum cupiditate labore impedit mollitia beatae?",
		img_src: `/src/assets/kebab-paysage.webp`,
	},
	{
		id: 3,
		country: "Italie",
		title: "Jako s'est mis arnaquer à l'italienne !",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt praesenticidunt praesenticidunt praesenticidunt praesenticidunt praesenticidunt praesentium possimus sunt!",
		img_src: `/src/assets/kebab-paysage.webp`,
	},
	{
		id: 4,
		country: "France",
		title: "Jako a pris un bain de foule à Paris",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt praesentium possossimus sunt!",
		img_src: `/src/assets/kebab-paysage.webp`,
	},
	{
		id: 5,
		country: "bagdad",
		title: "Jako a pris un bain de foule à Bagdad",
		text: "Il pleut ici mais de la pluie !",
		img_src: `/src/assets/kebab-paysage.webp`,
	},
];

const comments = [
	{
		id: 1,
		nickname: "Jako",
		text: "J'ai adoré ton voyage en Espagne, ça avait l'air génial !",
	},
	{ id: 2, nickname: "Sandrine", text: "Super trop contente pour toi !" },
];


function Home() {
	return (
		<main>
			<section>
				<h2>Retrouvez ici mes supers voyages !!</h2>
				{stories.map((story) => (
					<StoryCard key={story.id} story={story} />
				))}
			</section>

			<aside>
				<h2>Archives</h2>
				<ul>
					<li>Janvier</li>
					<li>Février</li>
					<li>Mars</li>
				</ul>

				<hr />

				<h2>Derniers commentaires</h2>

				{comments.length ? (
					comments.map((comment) => (
						<CommentCard key={comment.id} comment={comment} />
					))
				) : (
					<p>Pas encore 😒</p>
				)}
			</aside>
		</main>
	);
}

export default Home;
