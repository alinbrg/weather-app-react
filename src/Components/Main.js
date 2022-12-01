import { useEffect, useState } from "react";

export default function Main({ cityName }) {
	// console.log(props);
	const [weatherData, setWeatherData] = useState(null);

	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${process.env.REACT_APP_API_Key}`
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				if (data.cod === "404") {
					setErrorMessage(data.message);
					setWeatherData(null);
				}
				if (data.cod === "400") {
					return;
				}
				if (data.cod === 200) {
					setWeatherData(data);
					setErrorMessage("");
				}
			})
			.catch((error) => {
				console.error("Error:", error);
			});

		return () => {};
	}, [cityName]);

	function showDate() {
		let d = new Date(),
			months = [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December",
			],
			days = [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
			];

		let day = days[d.getDay()],
			date = d.getDate(),
			month = months[d.getMonth()],
			year = d.getFullYear();

		return `${day}, ${date} ${month}, ${year}`;
	}

	return (
		<>
			{errorMessage && (
				<div className="weather-wrap">
					<div className="location-box">
						<div className="location">{errorMessage}</div>
					</div>
				</div>
			)}

			{weatherData && (
				<div className="weather-wrap">
					<div className="location-box">
						<div className="location">
							{weatherData.name},{weatherData.sys.country}
						</div>

						<div className="date">{showDate()}</div>

						<div className="weather-box">
							<div className="temp">{Math.round(weatherData.main.temp)}℃</div>
							<div className="weather">{weatherData.weather[0].main}</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
