'use client'
import React, { useEffect } from "react";
import DomatesElement from "./DomatesElement";
import { Router, useRouter } from "next/navigation";

export default function Page() {
	const [money, setMoney] = React.useState(100);
	const router = useRouter();

	useEffect(() => {
		if(money < 0)
		{
			router.push("/gameover");
		}
	}, [money]);

	return(
		<div>
			<h1>Farm ({money}$)</h1>
			<br />
			<table style={{width:'500px', height:'500px', fontSize:40}}>

				<tr>
					<td><DomatesElement setMoney={setMoney}/></td>
					<td><DomatesElement setMoney={setMoney}/></td>
					<td><DomatesElement setMoney={setMoney}/></td>
					<td><DomatesElement setMoney={setMoney}/></td>
					<td><DomatesElement setMoney={setMoney}/></td>
				</tr>
				<tr>
					<td><DomatesElement setMoney={setMoney}/></td>
					<td><DomatesElement setMoney={setMoney}/></td>
					<td><DomatesElement setMoney={setMoney}/></td>
					<td><DomatesElement setMoney={setMoney}/></td>
					<td><DomatesElement setMoney={setMoney}/></td>
				</tr><tr>
					<td><DomatesElement setMoney={setMoney}/></td>
					<td><DomatesElement setMoney={setMoney}/></td>
					<td><DomatesElement setMoney={setMoney}/></td>
					<td><DomatesElement setMoney={setMoney}/></td>
					<td><DomatesElement setMoney={setMoney}/></td>
				</tr><tr>
					<td><DomatesElement setMoney={setMoney}/></td>
					<td><DomatesElement setMoney={setMoney}/></td>
					<td><DomatesElement setMoney={setMoney}/></td>
					<td><DomatesElement setMoney={setMoney}/></td>
					<td><DomatesElement setMoney={setMoney}/></td>
				</tr><tr>
					<td><DomatesElement setMoney={setMoney}/></td>
					<td><DomatesElement setMoney={setMoney}/></td>
					<td><DomatesElement setMoney={setMoney}/></td>
					<td><DomatesElement setMoney={setMoney}/></td>
					<td><DomatesElement setMoney={setMoney}/></td>
				</tr>
			</table>
		</div>
	);
}