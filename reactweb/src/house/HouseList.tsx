import { FC, useEffect, useState } from "react";
import Loader from "../common/Loader";
import { HouseApi } from "./HouseApi";
import { House } from "./types/house";
import ActionDialog from "../common/ActionDialog";
import { toCurrency } from "../common/helpers/currencyOptions";


const HouseList: FC = () => {
	const [houses, setHouses] = useState<House[]>([]);
	const [errMsg, setErrMsg] = useState<string>("");
	const [loader, setLoader] = useState<boolean>(false);

	useEffect(() => {
		setLoader(true);
		const sub = HouseApi.fetchData().subscribe({
			next: (result) => setHouses(result as House[]),
			error: (err) => setErrMsg(err.message),
			complete: () => setLoader(false)
		});

		return () => {
			sub.unsubscribe();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<div className="row mb-2">
				<h5 className="themeFontColor text-center">
					Houses currently on the market
				</h5>
			</div>
			{loader
				? <Loader />
				: <table className="table table-hover">
					<thead>
						<tr>
							<th>Address</th>
							<th>Country</th>
							<th>Asking Price</th>
						</tr>
					</thead>
					<tbody>
						{houses.map(h => (
							<tr key={h.id}>
								<td>{h.address}</td>
								<td>{h.country}</td>
								<td>{toCurrency.format(h.price)}</td>
							</tr>
						))}
					</tbody>
				</table>
			}
			{errMsg && <ActionDialog title="Issue" msg={errMsg} />}
		</div>
	);
}

export default HouseList;