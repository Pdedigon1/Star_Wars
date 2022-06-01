"use strict";
let dom = {}

window.onload = () => {
    dom['nombreVehiculo'] = document.getElementById("nombreVehiculo")
    dom['modelo'] = document.getElementById("modelo")
    dom['fabricante'] = document.getElementById("fabricante")
    dom['precio'] = document.getElementById("precio")
    dom['longitud'] = document.getElementById("longitud")
    dom['velocidad'] = document.getElementById("velocidad")
    dom['tripulacion'] = document.getElementById("tripulacion")
    dom['pasajeros'] = document.getElementById("pasajeros")
    dom['carga'] = document.getElementById("carga")
    dom['clase'] = document.getElementById("clase")
    dom['pilotos'] = document.getElementById("pilotos")
    dom['aparicion'] = document.getElementById("aparicion")
    obtenerVehiculos()
}

function obtenerIdURLRecursoSWAPI(url){
    return Number(url.match(/([0-9]*)\/?$/)[1])
}

function obtenerVehiculos(){
    let recurso = obtenerIdURLRecursoSWAPI(window.location.href)
    let vehiculo = `https://swapi.dev/api/vehicles/${recurso}/`

    fetch(vehiculo).then(r => r.json()).then(x =>{
        console.log(x)
        let nombre = dom['nombreVehiculo']
        nombre.innerHTML = "<p>" + x.name + "</p>"

        let modelo = dom['modelo']
        let mod = document.createElement( 'p')
        mod.innerHTML = "<p>" + x.model + "</p>"
        modelo.appendChild(mod)

        let fabricante = dom ['fabricante']
        let fab = document.createElement('p')
        fab.innerHTML =  "<p>" + x.manufacturer + "</p>"
        fabricante.appendChild(fab)

        let precio = dom['precio']
        let pre = document.createElement('p')
        pre.innerHTML = "<p>" + x.cost_in_credits + "</p>"
        precio.appendChild(pre)

        let longitud = dom['longitud']
        let lon = document.createElement('p')
        lon.innerHTML = "<p>" + x.length + "</p>"
        longitud.appendChild(lon)

        let velocidad = dom ['velocidad']
        let vel = document.createElement('p')
        vel.innerHTML = "<p>" + x.max_atmosphering_speed+ "</p>"
        velocidad.appendChild(vel)

        let tripulacion = dom['tripulacion']
        let tri = document.createElement('p')
        tri.innerHTML = "<p>" + x.crew + "</p>"
        tripulacion.appendChild(tri)

        let pasajeros = dom['pasajeros']
        let pas = document.createElement('p')
        pas.innerHTML = "<p>" + x.passengers+ "</p>"
        pasajeros.appendChild(pas)

        let carga = dom['carga']
        let car = document.createElement('p')
        car.innerHTML = "<p>" + x.cargo_capacity+ "</p>"
        carga.appendChild(car)

        let clase = dom['clase']
        let cla = document.createElement('p')
        cla.innerHTML ="<p>" + x.vehicle_class+ "</p>"
        clase.appendChild(cla)
        for(let i = 0; i < x.films.length; i++){
            obtenerPeliculas(x.films[i])
        }
        for (let i = 0; i < x.pilots.length; i++) {
            obtenerPersonajes(x.pilots[i])
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

        let pelicula= dom['aparicion'];
        let nombre = x.title;
        let aparicion = document.createElement('p')

        pelicula.appendChild(aparicion)
        aparicion.innerHTML = `<a href="pelicula.html?id=${id}">${nombre}</a>`
    })
}