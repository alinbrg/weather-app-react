export default function Main() {
	return (
		<>
			<div className="weather-wrap" v-if="typeof weather.main == 'undefined'">
				<div className="location-box">
					<div className="location">{/* {{ weather.message }} */}</div>
				</div>
			</div>
			<div className="weather-wrap" v-if="typeof weather.main == 'object'">
				<div className="location-box">
					<div className="location">
						{/* {{ weather.name }},
						{{ weather.sys.country }} */}
					</div>

					<div className="date">{/* {{ showDate() }} */}</div>

					<div className="weather-box">
						<div className="temp">
							{/* {{ Math.round(weather.main.temp) }} */}℃
						</div>
						<div className="weather">{/* {{ weatherInWord }} */}</div>
					</div>
				</div>
			</div>
		</>
	);
}
