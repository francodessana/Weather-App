const container = document.getElementById('container')
const pronostico = document.getElementById('pronostico')
const buscar = document.getElementById('buscar')
const ciudad = document.getElementById('ciudad')
async function datosClima(){
    try {
        console.log(ciudad.value.toLowerCase());
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=118f4ff6780b41fdbc825555230909&q=${ciudad.value}`);
        const data = await response.json();
        console.log(data);
        function mostrarPronostico(){
            pronostico.innerHTML = `
            <img id="icon" src="${data.current.condition.icon}" alt="${data.current.condition.text}">
            <div id="infoClima">
                <h2>${data.location.name.toUpperCase()}</h2>
                <h3>${data.location.country}</h3>
                <p>${data.current.condition.text}</p>
                <p>${data.current.temp_c} °C</p>
                <p>Hum ${data.current.humidity}%</p>
                <p>Feelslike ${data.current.feelslike_c} °C</p>
            </div>
            `
        }
        mostrarPronostico();
    } catch (error) {
        pronostico.innerHTML =`ERROR`
    }
}
buscar.addEventListener('click', datosClima);
ciudad.addEventListener('keydown', (event) =>{ 
    //funcion para buscar presionando la tecla ENTER
    if(event.key === 'Enter'){
        datosClima();
    }
})
