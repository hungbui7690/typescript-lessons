/*
  Destructuring with Annotations P2
  
*/

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date)
  console.log(forecast.weather)
}

// (***) destructuring
const logWeatherX = ({
  date,
  weather,
}: {
  date: Date
  weather: string
}): void => {
  console.log(date)
  console.log(weather)
}

const forecast = {
  date: new Date(),
  weather: 'sunny',
}

logWeather(forecast)
