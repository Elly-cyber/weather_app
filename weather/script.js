let weather = {
    paris: {
      temp: 19.7,
      humidity: 80
    },
    tokyo: {
      temp: 17.3,
      humidity: 50
    },
    lisbon: {
      temp: 30.2,
      humidity: 20
    },
    "san francisco": {
      temp: 20.9,
      humidity: 100
    },
    oslo: {
      temp: -5,
      humidity: 20
    }
  };
  
  let city= prompt("Enter city?");
  city = city.toLocaleLowerCase();
  if (weather[city] !== undefined) {
    let temperature = weather[city].temp;
    let humidity = weather[city].humidity;
    let celciusTemperature = Math.round(temperature);
    let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

   alert(
    `It is currently ${celciusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
    );

    
  } else {
    alert(
     `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
    );
  }

  
  // write your code here
  