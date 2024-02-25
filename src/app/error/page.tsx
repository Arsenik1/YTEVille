'use client';
import { Router, useRouter } from "next/navigation";

export default function Error( {
	error,
	}: {
		error: Error;
	} ) {
		const router = useRouter();
	return (
		<div>
			<h1>Something went wrong!</h1>
			<button onClick={() => router.push("/")}>Reset</button>
		</div>
	)
}