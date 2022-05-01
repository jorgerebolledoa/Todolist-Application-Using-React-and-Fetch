import React, { useState } from "react";

function TODO() {
	const [lista, setlista] = useState([]);

	const crear = (e) => {
		if (e.keyCode === 13 && e.target.value !== "") {
			setlista([...lista, e.target.value]);
			e.target.value = "";
		}
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
									</li>
								);
							})}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default TODO;
