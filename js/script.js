
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  var city = document.getElementById("cityinput").value;
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetch4Forecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main1 = data.list[0].weather[0].main;
      const description1 = data.list[0].weather[0].description;
      const temp1 = data.list[0].temp.day;
      const icon1 = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);
      
      const main2 = data.list[1].weather[0].main;
      const description2 = data.list[1].weather[0].description;
      const temp2 = data.list[1].temp.day;
      const icon2 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      const main3 = data.list[2].weather[0].main;
      const description3 = data.list[2].weather[0].description;
      const temp3 = data.list[2].temp.day;
      const icon3 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

      const main4 = data.list[3].weather[0].main;
      const description4 = data.list[3].weather[0].description;
      const temp4 = data.list[3].temp.day;
      const icon4 = apiWeather.getHTMLElementFromIcon(data.list[3].weather[0].icon);



      // Modifier le DOM
      document.getElementById('1-forecast-main').innerHTML = main1;
      document.getElementById('1-forecast-more-info').innerHTML = description1;
      document.getElementById('1con-weather-container').innerHTML = icon1;
      document.getElementById('1-forecast-temp').innerHTML = `${temp1}°C`;

     document.getElementById('2-forecast-main').innerHTML = main2;
      document.getElementById('2-forecast-more-info').innerHTML = description2;
      document.getElementById('2con-weather-container').innerHTML = icon2;
      document.getElementById('2-forecast-temp').innerHTML = `${temp2}°C`;

      document.getElementById('3-forecast-main').innerHTML = main3;
      document.getElementById('3-forecast-more-info').innerHTML = description3;
      document.getElementById('3con-weather-container').innerHTML = icon3;
      document.getElementById('3-forecast-temp').innerHTML = `${temp3}°C`;

      document.getElementById('4-forecast-main').innerHTML = main4;
      document.getElementById('4-forecast-more-info').innerHTML = description4;
      document.getElementById('4con-weather-container').innerHTML = icon4;
      document.getElementById('4-forecast-temp').innerHTML = `${temp4}°C`;
      
    })

    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
