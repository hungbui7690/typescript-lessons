/*
  Destructuring with Annotations P1
  
*/

// (1) looks nasty
const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date)
  console.log(forecast.weather)
}

// (2)
const forecast = {
  date: new Date(),
  weather: 'sunny',
}

logWeather(forecast)
