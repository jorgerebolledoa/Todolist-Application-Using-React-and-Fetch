import React, { useState } from "react";

function TODO() {
	const [lista, setlista] = useState([]);

	const crear = (e) => {
		if (e.keyCode === 13 && e.target.value !== "") {
			setlista([...lista, e.target.value]);
			e.target.value = "";
		}
	};
	const Delete = (index) => {
		lista.splice(index, 1);
		setlista([...lista]);

		// nuevo array
		task.splice(index, 1);
		setTask([...task]);
		updateTask(urlApi, task);
		//
	};
	const borrar = () => {
		setlista([]);
	};

	return (
		<div className="container bg-warning text-dark m-2  rounded align-items-center">
			<div className="row">
				<div className="col-md-12 mt-2 mb-1">
					<h1>
						<strong>To do list</strong>
					</h1>
					<input
						type="text"
						className="form-control border border-secondary bg-warning text-dark rounded-0"
						onKeyUp={crear}
					/>
				</div>
				<div className="col-md-12 ">
					<ul className="list-group list-group-flush bg-warning text-dark">
						{lista.length > 0 &&
							lista.map((tastk, index) => {
								return (
									<li
										className="list-group-item bg-warning text-dark"
										key={index}>
										{tastk}
										<i
											className="fas fa-trash float-end"
											onClick={borrar}></i>
									</li>
								);
							})}
					</ul>
					<div id="passwordHelpBlock" class="form-text">
						{lista.length == 0 ? (
							"Agrega una tarea"
						) : (
							<p>hay {lista.length} tareas pendientes</p>
						)}
					</div>

					<button
						type="button"
						class="btn btn-dark text-warning mb-2 mt-2"
						onClick={borrar}>
						Borrar todo
					</button>
				</div>
			</div>
		</div>
	);
}

export default TODO;
