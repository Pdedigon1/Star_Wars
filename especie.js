"use strict";
let dom = {}

window.onload = () => {
    dom['nombreEspecie'] = document.getElementById("nombreEspecie")
    dom['clasificacion'] = document.getElementById("clasificacion")
    dom['designacion'] = document.getElementById("designacion")
    dom['altura'] = document.getElementById("altura")
    dom['colorPiel'] = document.getElementById("colorPiel")
    dom['colorPelo'] = document.getElementById("colorPelo")
    dom['colorOjos'] = document.getElementById("colorOjos")
    dom['vida'] = document.getElementById("vida")
    dom['casa'] = document.getElementById("casa")
    dom['lengua'] = document.getElementById("lengua")
    dom['personaje'] = document.getElementById("personaje")
    dom['pelicula'] = document.getElementById("pelicula")

    obtenerEspecies()
}

function obtenerIdURLRecursoSWAPI(url){
    return Number(url.match(/([0-9]*)\/?$/)[1])
}
function obtenerEspecies(){
    let recurso = obtenerIdURLRecursoSWAPI(window.location.href)
    let especie = `https://swapi.dev/api/species/${recurso}/`

    fetch(especie).then(r => r.json()).then(x => {
        console.log(x)

        let nombreEspecie = dom['nombreEspecie']
        nombreEspecie.innerHTML = "<p>" + x.name + "</p>"

        let clasificacion = dom['clasificacion']
        let cla = document.createElement('p')
        cla.innerHTML = "<p>" + x.classification + "</p>"
        clasificacion.appendChild(cla)

        let designacion = dom['designacion']
        let des  = document.createElement('p')
        des.innerHTML = "<p>" + x.designation + "</p>"
        designacion.appendChild(des)

        let altura = dom['altura']
        let alt = document.createElement('p')
        alt.innerHTML = "<p>" + x.average_height + "</p>"
        altura.appendChild(alt)

        let colorPiel = dom['colorPiel']
        let cop = document.createElement('p')
        cop.innerHTML ="<p>" + x.skin_colors + "</p>"
        colorPiel.appendChild(cop)

        let colorPelo = dom['colorPelo']
        let cope = document.createElement('p')
        cope.innerHTML = "<p>" + x.hair_colors + "</p>"
        colorPelo.appendChild(cope)

        let colorOjos = dom['colorOjos']
        let coo = document.createElement('p')
        coo.innerHTML =  "<p>" + x.eye_colors + "</p>"
        colorOjos.appendChild(coo)

        let vida = dom['vida']
        let vid = document.createElement('p')
        vid.innerHTML = "<p>" + x.average_lifespan + "</p>"
        vida.appendChild(vid)

        let lengua = dom['lengua']
        let len = document.createElement('p')
        len.innerHTML = "<p>" + x.language + "</p>"
        lengua.appendChild(len)
        for (let i = 0; i < x.people.length; i++) {
            obtenerPersonajes(x.people[i])
        }

        for (let i = 0; i < x.films.length; i++) {
            obtenerPeliculas(x.films[i])
        }

        obtenerOrigenes(x.homeworld)

    })

}

function obtenerPersonajes(url){
    fetch(url).then(r=>r.json()).then(x => {
        console.log(x)
        let URL = x.url
        let id = URL.replace(/\D/g,'')

        let personaje = dom['personaje']
        let nombre = x.name
        let div = document.createElement('p')
        personaje.appendChild(div)
        div.innerHTML = `<a href="personaje.html?id=${id}">${nombre}</a>`

    })
}

function obtenerPeliculas(url){
    fetch(url).then(r=>r.json()).then(x => {
        console.log(x)
        let URL = x.url
        let id = URL.replace(/\D/g,'')

        let pelicula = dom['pelicula']
        let nombre = x.title
        let aparicion = document.createElement('p')
        pelicula.appendChild(aparicion)
        aparicion.innerHTML = `<a href="pelicula.html?id=${id}">${nombre}</a>`

    })
}

function obtenerOrigenes(url){
    fetch(url).then(r => r.json()).then(x => {

        console.log(x);
        let URL = x.url;
        let id = URL.replace(/\D/g,'');

        let origen = dom['casa'];

        let div = document.createElement('p')
        let nombre = x.name;



        div.innerHTML = `<a href="planeta.html?id=${id}">${nombre}</a>`
        origen.appendChild(div)

    })
}