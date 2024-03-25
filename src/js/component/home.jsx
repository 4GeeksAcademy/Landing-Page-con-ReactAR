import React from "react";
import Welcome from "./welcome.jsx"
import NavBar from "./navbar.jsx"
import Card from "./card.jsx"
import Footeer from "./footeer.jsx"

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NavBar>
			</NavBar>

			<Welcome>
			</Welcome>

			<Card>

			</Card>

			<Footeer>
				
			</Footeer>
		</div>
	);
};

export default Home;
