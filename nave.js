let dom ={}

window.onload = () => {
    dom['nombreNave'] = document.getElementById("nombreNave")
    dom['modelo'] = document.getElementById("modelo")
    dom['fabricante'] = document.getElementById("fabricante")
    dom['coste'] = document.getElementById("coste")
    dom['longitud'] = document.getElementById("longitud")
    dom['velocidad'] = document.getElementById("velocidad")
    dom['crew'] = document.getElementById("crew")
    dom['pasajeros'] = document.getElementById("pasajeros")
    dom['capacidad'] = document.getElementById("capacidad")
    dom['consumibles'] = document.getElementById("consumibles")
    dom['hipervelocidad'] = document.getElementById("hipervelocidad")
    dom['mglt'] = document.getElementById("mglt")
    dom['clase'] = document.getElementById("clase")
    dom['pilotos'] = document.getElementById("pilotos")
    dom['peliculas'] = document.getElementById("peliculas")

    obtenerNaves()

}

function obtenerIdURLRecursoSWAPI(url){
    return Number(url.match(/([0-9]*)\/?$/)[1])
}

function obtenerNaves(){

    let recurso = obtenerIdURLRecursoSWAPI(window.location.href)
    let  nave =`https://swapi.dev/api/starships/${recurso}/`

    fetch(nave).then(r => r.json()).then(x => {
        console.log(x);

        let nombreNave = dom['nombreNave']
        nombreNave.innerHTML = "<p>" + x.name + "</>"

        let modelo = dom['modelo']
        let mod = document.createElement('p')
        mod.innerHTML = "<p>" + x.model + "</p>"
        modelo.appendChild(mod)

        let fabricante = dom ['fabricante']
        let fab = document.createElement('p')
        fab.innerHTML = "<p>" + x.manufacturer + "</p>"
        fabricante.appendChild(fab)

        let coste =dom['coste']
        let cos = document.createElement('p')
        cos.innerHTML = "<p>" + x.cost_in_credits + "</p>"
        coste.appendChild(cos)

        let longitud = dom['longitud']
        let lon = document.createElement('p')
        lon.innerHTML = "<p>" + x.length + "</p>"
        longitud.appendChild(lon)

        let velocidad = dom['velocidad']
        let vel = document.createElement('p')
        vel.innerHTML ="<p>" + x.max_atmosphering_speed + "</p>"
        velocidad.appendChild(vel)

        let crew = dom ['crew']
        let cre = document.createElement('p')
        cre.innerHTML = "<p>" + x.crew + "</p>"
        crew.appendChild(cre)

        let pasajeros = dom ['pasajeros']
        let pas = document.createElement('p')
        pas.innerHTML = "<p>" + x.passengers + "</p>"
        pasajeros.appendChild(pas)

        let capacidad = dom ['capacidad']
        let cap = document.createElement('p')
        cap.innerHTML = "<p>" + x.cargo_capacity + "</p>"
        capacidad.appendChild(cap)

        let consumibles = dom ['consumibles']
        let con = document.createElement('p')
        con.innerHTML = "<p>" + x.consumables + "</p>"
        consumibles.appendChild(con)

        let hipervelocidad =  dom ['hipervelocidad']
        let hip = document.createElement('p')
        hip.innerHTML = "<p>" + x.hyperdrive_rating + "</p>"
        hipervelocidad.appendChild(hip)

        let mglt = dom ['mglt']
        let mgl = document.createElement('p')
        mgl.innerHTML = "<p>" + x.MGLT + "</p>"
        mglt.appendChild(mgl)

        let clase = dom ['clase']
        let cla = document.createElement('p')
        cla.innerHTML = "<p>" + x.starship_class + "</p>"
        clase.appendChild(cla)

        for (let i = 0; i < x.pilots.length; i++) {
            obtenerPersonajes(x.pilots[i])
        }

        for (let i = 0; i < x.films.length; i++) {
            obtenerPeliculas(x.films[i])
        }

    })
}

function obtenerPersonajes(url){
    fetch(url).then(r=>r.json()).then(x => {
        console.log(x)
        let URL = x.url
        let id = URL.replace(/\D/g,'')

        let pilotos = dom['pilotos']
        let nombre = x.name
        let div = document.createElement('p')
        pilotos.appendChild(div)
        div.innerHTML = `<a href="personaje.html?id=${id}">${nombre}</a>`

    })
}
function obtenerPeliculas(url){
    fetch(url).then(r => r.json()).then(x => {
        console.log(x);
        let URL = x.url;
        let id = URL.replace(/\D/g,'');

        let pelicula= dom['peliculas'];
        let nombre = x.title;
        let peliculas = document.createElement('p')

        pelicula.appendChild(peliculas)
        peliculas.innerHTML = `<a href="pelicula.html?id=${id}">${nombre}</a>`
    })
}