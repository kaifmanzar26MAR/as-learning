const fetchWeather = async function () {
  try {
    const cityname = document.getElementById("input").value;
    console.log(cityname);

    const API_key = "f9a38f4828df69b1a1c077f88edb0d56"; // api key from ocaean weather
    const responce = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_key}`
    );

    const data = await responce.json();
    console.log("data ", data);

    const temp = data.main.temp; // data['main']
    const city = data.name;
    const country = data.sys.country;
    document.getElementById("deg").innerText = temp;
    document.getElementById("city").innerText = city;
    document.getElementById("country").innerText = country;
    document.getElementById("climate").innerText = data.weather[0].main;

  } catch (error) {
    console.log(error);
  }
};

document.getElementById("search").addEventListener("click", fetchWeather);

// post get patch delete put
// post-> http://www.google.com/prifile, email=aysha@gmail.com
// get -> http://www.google.com/prifile/email=aysha@gmail.com
