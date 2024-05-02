import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<h1>Blog de voyage</h1>
			<nav>
                <Link to="/">Accueil</Link>
                <Link to="/auth/signin">Sign in</Link>
			</nav>
		</header>
	);
}

export default Header;
