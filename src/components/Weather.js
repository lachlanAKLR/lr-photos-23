import React from 'react';

class Weather extends React.Component {
  state = {
    weather: null,
  };

  componentWillMount() {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Melbourne,%20AU&APPID=7cd9f96832a0c4d7c7f3720518324305'
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ weather: data });
      });
  }

  render() {
    const { weather } = this.state;
    return (
      <>
        {weather?.weather?.length > 0 && (
          <li className="nav-weather">
            <span>
              {weather.weather[0].description}
              {` `}
              {/* {weather.visibility}
              {weather.coord.lon}
              {weather.coord.lat}
              {weather.coord.lat}
              {weather.wind.speed} */}
              {Math.round(weather.main.temp - 273.15)}°C
            </span>
          </li>
        )}
      </>
    );
  }
}

export default Weather;
