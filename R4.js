//718bfd637f55ae03a27f37e11fd38702

fetch("http://api.weatherstack.com/current?access_key=718bfd637f55ae03a27f37e11fd38702&query=london")
.then((info)=> info.json())
.then(data => {

    let london = document.getElementById('london')
    london.innerHTML = `<div><div>Current Weather</div><div>Observation Time: ${data.current.observation_time}</div><div>Cloud Over${data.current.cloudcover}</div><div>Temperature: ${data.current.temperature}</div><div>Humidity: ${data.current.humidity}</div><div> Precip: ${data.current.precip}</div><div> Weather Code: ${data.current.weather_code}</div></div> <div> <div>Localitation</div><div>Country:${data.location.country}</div><div>Name: ${data.location.name}</div><div>Region: ${data.location.region}</div><div>Time Zone: ${data.location.timezone_id}</div><div>Lat: ${data.location.lat}</div><div>Lon${data.location.lon}</div></div>  <div> <div>Request</div><div>Language: ${data.request.language}</div><div>Query: ${data.request.query}</div><div>Type. ${data.request.type}</div><div>Unit: ${data.request.unit}</div><div>None</div><div>None</div></div>                                                                                `
        
 console.log(data)


     })






     fetch("http://api.weatherstack.com/current?access_key=718bfd637f55ae03a27f37e11fd38702&query=New%20York")
     .then((info)=> info.json())
     .then(data => {

        let newYork = document.getElementById('newyork')
    newYork.innerHTML = `<div><div>Current Weather</div><div>Observation Time: ${data.current.observation_time}</div><div>Cloud Over${data.current.cloudcover}</div><div>Temperature: ${data.current.temperature}</div><div>Humidity: ${data.current.humidity}</div><div> Precip: ${data.current.precip}</div><div> Weather Code: ${data.current.weather_code}</div></div> <div> <div>Localitation</div><div>Country:${data.location.country}</div><div>Name: ${data.location.name}</div><div>Region: ${data.location.region}</div><div>Time Zone: ${data.location.timezone_id}</div><div>Lat: ${data.location.lat}</div><div>Lon${data.location.lon}</div></div>  <div> <div>Request</div><div>Language: ${data.request.language}</div><div>Query: ${data.request.query}</div><div>Type: ${data.request.type}</div><div>Unit: ${data.request.unit}</div><div>None</div><div>None</div></div>                                                                                `
        
     
      console.log(data)
     
     
          })