import React, { useEffect, useState } from "react";
import ChartRow from "./ChartRow";

function Chart() {
	const [Productos, setProductos] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3000/api/Products")
			.then((rsp) => {
				rsp.json().then((rsp) => {
					setProductos(rsp.data);
					console.log(rsp.data);
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		/* <!-- DataTales Example --> */
		<div className="card shadow mb-4">
			<div className="card-body">
				<div className="table-responsive">
					<table
						className="table table-bordered"
						id="dataTable"
						width="100%"
						cellSpacing="0">
						<thead>
							<tr>
								<th>Nombre</th>
								<th>Descripcion Corta</th>
								<th>Precio</th>
							</tr>
						</thead>
						<tfoot>
							<tr>
								<th>Nombre</th>
								<th>Descripcion Corta</th>
								<th>Precio</th>
							</tr>
						</tfoot>
						<tbody>
							{Productos.map((row, i) => {
								return <ChartRow {...row} key={i} />;
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Chart;
