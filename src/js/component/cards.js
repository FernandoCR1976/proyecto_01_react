import React from "react";

//create header
//const tarjeta = {
//	image: "",
//	alt: "rigo",
//	title: "Hello",
//	description: "lorem",
//	url: "http://wikipedia.com",
//	buttom: "click Hre"
//};

export function Cards(tarjeta) {
	return (
		<div className="col">
			<div className="card" style="width: 18rem;">
				<img className="card-img-top" src={image} alt={alt} />

				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{description}</p>
					<a href={url} className="btn btn-primary">
						{bottom}
					</a>
				</div>
			</div>
		</div>
	);
}
