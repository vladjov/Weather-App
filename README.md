# Weather-App

## About
This is a simple, Vanilla JavaScript, weather forecast application, which uses [OpenWeather](https://openweathermap.org/) API.

User can use browser's geolocation or input form, with filterable list functionality, to get and display weather data, in light or dark theme dependant on the time of day.
There is a possibility of saving home and favorite cities, as well as adjusting settings such as units and update frequency.

To see the app in action go to ![Weather App - Walktrough video](https://github.com/vladjov/Weather-App/issues/2#issue-1038139549).


## Features
- ES modules are used to split code into smaller files.
- Asynchronous programming.
- Browser's geolocation or user input are used to fetch data from [OpenWeather](https://openweathermap.org/). 

  ![Screenshot Weather App - geolocating](https://user-images.githubusercontent.com/29351209/136627973-616a615a-a037-41d2-aff1-1c51ebfcd56f.png)

- When using  input form, in order to reduce the number of requests towards [OpenWeather](https://openweathermap.org/) API, filterable list of cities is implemented, using local json file. Only after selecting one city from the list, a request to server is made. 
- App also aplies light or dark theme, dependant on the time of day in the current city.

  ![Screenshot Weather App - filterable list](https://user-images.githubusercontent.com/29351209/136630120-a571ab99-6b36-4e45-9f48-0b9ba918cf70.png)
  ![Screenshot  Weather App - city input](https://user-images.githubusercontent.com/29351209/136628879-f2b856db-bf36-40ab-957a-599b9c2ff369.png)
  ![Screenshot Weather App - current2](https://user-images.githubusercontent.com/29351209/136629222-d3d805d1-55a9-4f25-bb9e-1046d2dcfad9.png)

- App displays an hourly forecast for the next 48h, and a daily forecast for the next 7 days

  ![Screenshot  Weather App - hourly](https://user-images.githubusercontent.com/29351209/136675455-00e2a2d9-382d-487a-9f0f-dcfcdfadc86c.png)
  ![Screenshot Weather App - hourly open](https://user-images.githubusercontent.com/29351209/136675468-c25949ca-77d1-4524-ac28-60dfb15025f0.png)

  ![Screenshot Weather App - daily](https://user-images.githubusercontent.com/29351209/136675489-05a62afd-d15e-4467-9e8e-26eadd0dbc35.png)
  ![Screenshot Weather App - daily open](https://user-images.githubusercontent.com/29351209/136675498-0d5d5e96-41fd-4201-8b68-a5c91983569f.png)

- Using Local Storage simple CRUD operation is created for adding and removing home and favorite cities. Floating action button is used for adding, and delete icons on each of the list elements for deleting. Clicking on any of the favorite cities will display the current weather for that city.

  ![Screenshot Weather App - CRUD empty](https://user-images.githubusercontent.com/29351209/136675645-409760d5-bf01-4d19-b384-2b1ef3c4b8b3.png)
  ![Screenshot Weather App - CRUD adding button](https://user-images.githubusercontent.com/29351209/136675658-31345be7-9fdd-44d3-b874-c15ca43cc9ea.png)

  ![Screenshot Weather App - CRUD added favorite](https://user-images.githubusercontent.com/29351209/136675674-9e372bd3-86da-4388-a8ed-73f5c0ac1cba.png)
  ![Screenshot Weather App - CRUD added home](https://user-images.githubusercontent.com/29351209/136675711-710aea88-bcba-457b-81e9-470fc632d982.png)
  ![Screenshot Weather App - CRUD deleted](https://user-images.githubusercontent.com/29351209/136675692-89b4316e-7935-43a3-a5e4-371cc291ce49.png)

- In the settings section there is a possibility of changing units, and update frequency using JS setTimeout function.

  ![Screenshot Weather App - settings](https://user-images.githubusercontent.com/29351209/136676010-96392e32-6dbd-41ea-bf04-5a938a1b9e4c.png)
  

- There is a simple notification bar for displaying errors or some important information like adding or removing favorite/home city, problems with internet connection etc.

  ![Screenshot Weather App - notification invalid](https://user-images.githubusercontent.com/29351209/136676057-b406a5f0-b08e-4a71-ab52-5c374b9ff12c.png)
  ![Screenshot Weather App - notification only one](https://user-images.githubusercontent.com/29351209/136676073-39f81ce5-556f-4c85-991b-56ebbf7561c0.png)


## Built with
- JavaScript
- HTML
- CSS
