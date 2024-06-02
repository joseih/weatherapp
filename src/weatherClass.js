export default class Weather {
  constructor(icon, text, feelslike_c, temp_c, humidity, country, name, windy) {
    this.icon = icon;
    this.text = text;
    this.feelslike_c = feelslike_c;
    this.temp_c = temp_c;
    this.humidity = humidity;
    this.country = country;
    this.name = name;
    this.windy = windy;
  }
}
