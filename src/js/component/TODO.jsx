import React, { useState, useRef, useEffect } from "react";

function TODO() {
	let nombreRef = useRef(null);
	const setSingleSong = (x, i) => {
		nombreRef.src = `https://assets.breatheco.de/apis/sound/${x}`;
		setsongsActive(i);
	};

	const atras = () => {
		//aca debo borrar la li creada
	};
	return (
		<div className="container mt-3">
			<div className="row">
				<div className="col-md-8 mx-auto text-center">
					<ol className="rounded ">
						<li>hola</li>
					</ol>
					<div className="row">
						<div className="col-md-8 mx-auto text-center ">
							<div className="mb-2">
								<button
									className="btn-sm  rounded-circle p-2 m-0 bg-secondary border-0 m-1"
									onClick={atras}
									id="boton">
									<i class="fas fa-arrow-circle-left"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TODO;
