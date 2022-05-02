import React, { useState, useEffect } from "react";

function TODO() {
	const [lista, setlista] = useState([]);

	const urlApi =
		"https://assets.breatheco.de/apis/fake/todos/user/jorgerebolledo";

	useEffect(() => {
		getTask(urlApi);
	}, []);

	const getTask = (url) => {
		fetch(url)
			.then((Response) => Response.json())
			.then((data) => console.log(data))
			.catch((error) => console.log(error));
	};

	const updateTask = (url, task) => {
		fetch(url, {
			method: "PUT",
			body: JSON.stringify(task),
			headers: {
				"content-type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.log(error));
	};

	const crear = (e) => {
		if (e.keyCode === 13 && e.target.value !== "") {
			let newlist = [...lista, { label: e.target.value, done: true }];
			setlista(newlist);
			updateTask(urlApi, newlist);
			e.target.value = "";
		}
	};
	const deletelist = (index) => {
		lista.splice(index, 1);
		setlista([...lista]);
		updateTask(urlApi, [...lista]);
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
										{tastk.label}
										<i
											className="fas fa-trash float-end"
											onClick={() =>
												deletelist(index)
											}></i>
									</li>
								);
							})}
					</ul>
					<div id="passwordHelpBlock" className="form-text">
						{lista.length == 0 ? (
							<p className="m-2">Agrega una tarea</p>
						) : lista.length == 1 ? (
							<p className="m-3">hay una tarea pendiente</p>
						) : (
							<p className="m-3">
								hay {lista.length} tareas pendientes
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default TODO;
