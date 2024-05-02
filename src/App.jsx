import {Routes, Route} from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Pages/Home";
import Signin from "./Components/Pages/Signin";
import Footer from "./Components/Footer";


function App() {
	return (
		<>
			<Header />

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/auth/signin" element={<Signin />} />

            </Routes>
			
			<Footer />
		</>
	);
}

export default App;
