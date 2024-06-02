export function alterDom(weatherClass) {
  weatherLocal(weatherClass.country, weatherClass.name);
  weatherTemp(weatherClass.temp_c, weatherClass.feelslike_c);
  weatherOtherInfo(
    weatherClass.icon,
    weatherClass.text,
    weatherClass.humidity,
    weatherClass.windy
  );
}

function weatherLocal(country, name) {
  const li =
    document.getElementById("weather-local").children[0].lastElementChild;
  let p = li.querySelector("p");
  p.textContent = country + ", " + name;
}
function weatherTemp(temp_c, feelslike_c) {
  const div = document.querySelector("#weather-temp");
  div.children[0].textContent = temp_c + "°C";
  div.children[1].textContent = "Feels like " + feelslike_c + "°C";
}
function weatherOtherInfo(icon, text, humidity, windy) {
  const div = document.querySelector("#weather-otherinfo");
  const lis = div.children[0].getElementsByTagName("li");
  lis[0].children[0].src = icon;
  lis[0].children[1].textContent = text;
  lis[1].children[1].textContent = humidity + "%";
  lis[2].children[1].textContent = windy + " KPH";
}
