import React, { useState, useRef, useEffect } from "react";

function TODO() {
	const [lista, setlista] = useState([]);
	const [contador, setcontador] = useState(0);

	const crear = () => {
		setlista(lista.concat(<li>{contador}</li>));
	};
	//aca debo crear un li
	const atras = () => {
		setcontador(contador + 1);
		//aca debo borrar la li creada
	};
	return (
		<div className="container mt-3">
			<div className="row">
				<div className="col-md-8 mx-auto text-center">
					<ol className="rounded bg-primary">{lista}</ol>
					<div className="m-2">
						<button
							className="btn-sm  rounded-circle p-2 m-0 bg-secondary border-0 m-1"
							onClick={crear}
							id="boton">
							<i class="fas fa-arrow-circle-left"></i>
						</button>
						<button
							className="btn-sm  rounded-circle p-2 m-0  border-0 m-1"
							onClick={atras}
							id="boton">
							<i class="fas fa-arrow-circle-left"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TODO;
