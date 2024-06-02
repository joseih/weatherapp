import "./index.css";
import { alterDom } from "./manipulateDom";
import Weather from "./weatherClass";

const bttn = document.getElementById("send");

bttn.addEventListener("click", () => {
  const input = document.getElementById("city");
  if (testNull(input.value)) {
    getWeatherJson(input.value).then(createrWeatherClass).then(alterDom);
  }
});

function testNull(value) {
  if (value != null) {
    return true;
  } else {
    alert("Preencha o campo!");
    return false;
  }
}

async function getWeatherJson(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=3b851ba510974258bf800026242605&q=${location}&aqi=no`
    );
    const json = await response.json();
    return json;
  } catch (error) {
    alert("Error: " + error);
  }
}
function createrWeatherClass(json) {
  console.log(json.current.feelslike_c);
  return new Weather(
    json.current.condition.icon,
    json.current.condition.text,
    json.current.feelslike_c,
    json.current.temp_c,
    json.current.humidity,
    json.location.country,
    json.location.name,
    json.current.wind_kph
  );
}

function weatherOtherInfo(icon, text, humidity) {
  const div = document.querySelector("#weather-otherinfo");
  const lis = div.children[0].getElementsByTagName("li");
  console.log(lis[0].children);
}

weatherOtherInfo();
