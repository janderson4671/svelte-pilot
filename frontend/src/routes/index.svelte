<script>
	import axios from "axios";
	import Test from "../components/Test.svelte";
	let name = "";
	let occupation = "";
	let data = {
		text: "merp"
	}

	const api = axios.create({
		baseURL : "http://localhost:3000"
	});

	async function sendInfo() {
		try {
			let response = await api.post("/api/upload", {
				name: name,
				occupation: occupation
			});
			name = "";
			occupation = "";
			alert("Registered to system!");

		} catch (error) {
			console.log(error);
			alert("Error!");
		}
	}
</script>

<!-- HTML -->
<h1>Welcome to the Svelte Pilot App!</h1>

<h1>{data.text}</h1>

<Test bind:data></Test>
<input bind:value={name} placeholder="Name">
<input bind:value={occupation} placeholder="Occupation">

{#if name !== "" && occupation !== ""}
	<button on:click={sendInfo}>Register!</button>
{/if}

<style>
	h1 {
		align-self: center;
		padding: 10%;
	}

	input {
		height: 3%;
		width: 25%;
		padding: 2%;
		margin: 1rem;
		align-self: center;
	}

	button {
		align-self: center;
		height: 30px;
		width: 20%;
	}
</style>