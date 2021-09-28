
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

      //On modifie le DOM et on récupère l'information principal

      for(let a=1;a<6;a++)
      {
       document.getElementById(a.toString().concat("-forecast-main")).innerHTML = data.list[a-1].weather[0].main; //container nomme de 1 à 4 (a) et list indexe de 0 à 3 (a-1)
       document.getElementById(a.toString().concat("-forecast-more-info")).innerHTML = data.list[a-1].weather[0].description;
       document.getElementById(a.toString().concat("con-weather-container")).innerHTML = apiWeather.getHTMLElementFromIcon(data.list[a-1].weather[0].icon);
       document.getElementById(a.toString().concat("-forecast-temp")).innerHTML = `${data.list[a-1].temp.day}°C`;
      }      
    })

    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
