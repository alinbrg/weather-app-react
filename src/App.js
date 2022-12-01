import "./App.css";
import Search from "./Components/Search";
import Main from "./Components/Main";
import { useState } from "react";

function App() {
	const [cityName, setCityName] = useState("paris");

	console.log();
	return (
		<div id="app-block">
			<main>
				<Search setCityName={setCityName} />
				<Main cityName={cityName} />
			</main>
		</div>
	);
}

export default App;
