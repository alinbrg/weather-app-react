import "./App.css";
import Search from "./Components/Search";
import Main from "./Components/Main";

function App() {
	return (
		<div
			id="app-block"
			className="
			
		"
		>
			{/* typeof weather.main != 'undefined' &&
			((weatherInWord == 'Rain' ? 'rain' : '') ||
				(weatherInWord == 'Clouds' ||
				(weather.main.temp > 10 && weather.main.temp < 30)
					? 'clouds'
					: '') ||
				(weather.main.temp > 30 ? 'warm' : '')) */}
			<main>
				<Search />
				<Main />
			</main>
		</div>
	);
}

export default App;
