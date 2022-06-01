"use strict ";

let dom = {}

window.onload = async () => {
    dom['intro'] = document.getElementById("intro")
    dom['nombrePelicula'] = document.getElementById("nombrePelicula")
    dom['personajes'] = document.getElementById("personajes")
    dom['planetas'] = document.getElementById("planetas")
    dom['naves'] = document.getElementById("naves")
    dom['vehiculos'] = document.getElementById("vehiculos")
    dom['especies'] = document.getElementById("especies")

    obtenerPelicula()
}

function obtenerIdURLRecursoSWAPI(url){
    return Number(url.match(/([0-9]*)\/?$/)[1])
}

function obtenerPelicula(){
    let p = new URLSearchParams(document.location.search)
    let id = p.get('id')
    let recurso = obtenerIdURLRecursoSWAPI(id)

    let  peli =`https://swapi.dev/api/films/${recurso}/`

    fetch(peli).then(r => r.json()).then(x => {
        console.log(x);
        let div = dom['intro']
        let pelicula = dom['nombrePelicula']
        pelicula.innerHTML =  x.title

        let intro = document.createElement('p')
        intro.innerHTML = `<p>${x.opening_crawl}</p>`
        div.appendChild(intro);

        for(let i=0; i<x.characters.length;i++){
            obtenerPersonajes(x.characters[i]);

        }
        for(let i=0; i<x.planets.length;i++) {
            obtenerPlanetas(x.planets[i]);
        }
        for(let i=0; i<x.vehicles.length;i++) {
            obtenerVehiculos(x.vehicles[i]);
        }
        for(let i=0; i<x.starships.length;i++) {
            obtenerNaves(x.starships[i]);
        }
        for(let i=0; i<x.species.length;i++) {
            obtenerEspecies(x.species[i]);
        }
    })
}
function obtenerPersonajes(url){
    fetch(url).then(r => r.json()).then(x => {
        console.log(x);
        let URL = x.url;
        let id = URL.replace(/\D/g,'');

        let div = dom['personajes'];
        let personaje = document.createElement('p')

        div.appendChild(personaje)

        let nombre = x.name;
        personaje.innerHTML = `<h2><a href="personaje.html?id=${id}">${nombre}</a></h2>`

    })
}


function obtenerPlanetas(url){
    fetch(url).then(r => r.json()).then(x => {
        console.log(x);
        let URL = x.url;
        let id = URL.replace(/\D/g,'');

        let div = dom['planetas'];
        let planeta = document.createElement('p')

        div.appendChild(planeta)

        let nombre = x.name;
        planeta.innerHTML = `<h2><a href="planeta.html?id=${id}">${nombre}</a></h2>`

    })
}

function obtenerVehiculos(url){
    fetch(url).then(r => r.json()).then(x => {
        console.log(x);
        let URL = x.url;
        let id = URL.replace(/\D/g,'');

        let div = dom['vehiculos'];
        let vehiculo = document.createElement('p')

        div.appendChild(vehiculo)

        let nombre = x.name;
        vehiculo.innerHTML = `<h2><a href="vehiculo.html?id=${id}">${nombre}</a></h2>`
    })
}

function obtenerNaves(url){
    fetch(url).then(r => r.json()).then(x => {
        console.log(x);
        let URL = x.url;
        let id = URL.replace(/\D/g,'');

        let div = dom['naves'];
        let nave = document.createElement('p')

        div.appendChild(nave)

        let nombre = x.name;
        nave.innerHTML = `<h2><a href="nave.html?id=${id}">${nombre}</a></h2>`
    })

}

function obtenerEspecies(url){
    fetch(url).then(r => r.json()).then(x => {
        console.log(x);
        let URL = x.url;
        let id = URL.replace(/\D/g,'');

        let div = dom['especies'];
        let especie = document.createElement('p')

        div.appendChild(especie)

        let nombre = x.name;
        especie.innerHTML = `<h2><a href="especie.html?id=${id}">${nombre}</a></h2>`
    })
}