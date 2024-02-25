'use client'

import { resolve } from "path";
import React, { useEffect } from "react";

interface DomatesElementProps {
	setMoney : React.Dispatch<React.SetStateAction<number>>;
}

export default function Page({setMoney} : DomatesElementProps) {
	const [domatesStatus, setDomatesStatus] = React.useState("T");
	const [change, setChange] = React.useState(false);

	function ClickUpdate()
	{
		if(domatesStatus === "T"){				setDomatesStatus("F")}
		else if(domatesStatus === "F"){			setDomatesStatus("D")}
		else if(domatesStatus === "D"){			setDomatesStatus("Ç")}
		else if(domatesStatus === "Ç"){			setDomatesStatus("T")}
	}

	useEffect(() => {
				const interval = setInterval(() => {
					if(change === true && domatesStatus !== "T")
					{
						ClickUpdate();
					}
					else
					setChange(false);
				}
				, 3000);
				return () => clearInterval(interval);
			}, [domatesStatus]);

	function domatesClick() {
		if(domatesStatus === "T")
		{
			setMoney(money => money - 5);
			ClickUpdate();
			setChange(true);
		}
		else if(domatesStatus === "D")
		{
			setMoney(money => money + 10);
			setDomatesStatus("F");
		}
		else;
	}

	return(
		<div>
			{/* <button onClick={domatesClick} style={{width:"100px", 
							height:"100px", 
							fontSize:"40px"}}>
								{domatesStatus}
							</button> */}
			<button onClick={domatesClick} style={{width:"100px", 
			height:"100px", 
			fontSize:"40px"}}>
				{domatesStatus}
			</button>
		</div>
	);
}