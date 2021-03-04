//import react into the bundle
import React from "react";

//import your own components

import { Navbar } from "./component/navbar";
import { Jumbotron } from "./component/Jumbotron";
import { Card } from "./component/cards";

const tarjeta = {
	image: "",
	alt: "rigo",
	title: "Hello",
	description: "lorem",
	url: "http://wikipedia.com",
    buttom: "click Hre"
};

//create layout
export function App() {
	return (
		<div className="text-center">
			<Navbar />

			<div className="container">
				<Jumbotron />
				<Cards card={tarjeta} />
			</div>
		</div>
	);
}
