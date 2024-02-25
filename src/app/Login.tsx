'use client'
import { Router, useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import { object, string, number, date, InferType } from 'yup';

let userSchema = object({
	username: string(),
	password: string().required().min(8).max(15),
});

export default function Login() {
	const router = useRouter();
	let usernames : string[][] = [[]];
	let entry : string[] = ["asdasdasd", "asdasdasd", ""];
	let errorState : number = 0;

	function fetchUser() {
		return {
			username: entry[0],
			password: entry[1],
		}
	}

	async function handleRegisterSubmit(param : FormEvent<HTMLFormElement>) {
		param.preventDefault()
		entry[0] = param.target.username.value;
		entry[1] = param.target.password.value;
		entry[2] = param.target.farmName.value;
		const user = await userSchema.validate(await fetchUser());
		usernames.push(entry);
		alert("Registration Successful");
	}

	async function handleLoginSubmit(param : FormEvent<HTMLFormElement>) {
	//router.push kullancan
	//useRouter() ile yakalican
	//asdasdasd
	//asdasdasd
	param.preventDefault()
	let entry : string[] = [];
		entry[0] = param.target.username.value;
		entry[1] = param.target.password.value;
		// alert(usernames);
		try
		{
			const user = await userSchema.validate(await fetchUser());
			if(entry[0] === "asdasdasd" && entry[1] === "asdasdasd")
			{
				alert("Login Successful");
				router.push('/home');
			}
			else if(entry[0] != "asdasdasd") throw new Error("Username incorrect");
			else throw new Error("Password incorrect, Length must be between 8 and 15");	
		}
		catch(error)
		{
			alert(error.message);
			router.push('/error');
		}
	}
	return (
	<div>
	  <h1>YTEVille Login Screen</h1>
	  <br />
	  <h2>Login</h2>
	  <form onSubmit={handleLoginSubmit}>
		<h2>Username</h2>
		<input type="text" name="username"/>
		<br />
		<h2>Password</h2>
		<input type="password" name="password"/>
		<br />
		<input type="submit" value="Submit"/>
	  </form>
	  <br />
	  <br />
	  <h2>Register</h2>
	  {<form onSubmit={handleRegisterSubmit}>
		<h2>Username</h2>
		<input type="text" name="username"/>
		<br />
		<h2>Password</h2>
		<input type="password" name="password"/>
		<br />
		<h2>Farm Name</h2>
		<input type="text" name="farmName"/>
		<br />
		<input type="submit" value="Submit"/>
		
	  </form>}
	</div>
  );
}