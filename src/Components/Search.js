import { useState } from "react";

export default function Search({ setCityName }) {
	const [city, setCity] = useState("");

	function handleChange(e) {
		setCity(e.target.value);
	}
	function handleInput(e) {
		if (e.key === "Enter") {
			setCityName(e.target.value);
		}
	}

	return (
		<div className="search-box">
			<input
				type="text"
				className="search-bar"
				placeholder="write city name and press enter"
				onChange={handleChange}
				onKeyUp={handleInput}
				value={city}
			/>
		</div>
	);
}
