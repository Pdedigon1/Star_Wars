"use strict";

let dom ={}

window.onload = () => {
    dom['nombrePlaneta'] = document.getElementById("nombrePlaneta")
    dom['periodoRotacion'] = document.getElementById("periodoRotacion")
    dom['periodoOrbital'] = document.getElementById("periodoOrbital")
    dom['diametro'] = document.getElementById("diametro")
    dom['clima'] = document.getElementById("clima")
    dom['gravedad'] = document.getElementById("gravedad")
    dom['suelo'] = document.getElementById("suelo")
    dom['agua'] = document.getElementById("agua")
    dom['populacion'] = document.getElementById("populacion")
    dom['residentes'] = document.getElementById("residentes")
    dom['aparicion'] = document.getElementById("aparicion")

    obtenerPlanetas()

}
function obtenerIdURLRecursoSWAPI(url){
    return Number(url.match(/([0-9]*)\/?$/)[1])
}

function obtenerPlanetas(){
    let recurso = obtenerIdURLRecursoSWAPI(window.location.href)
    let planeta = `https://swapi.dev/api/planets/${recurso}/`

    fetch(planeta).then(r => r.json()).then(x =>{
        console.log(x)
        let nombrePlaneta = dom['nombrePlaneta']
        nombrePlaneta.innerHTML = "<p>" + x.name + "</p>"

        let periodoRotacion = dom['periodoRotacion']
        let per = document.createElement( 'p')
        per.innerHTML = "<p>" + x.rotation_period + "</p>"
        periodoRotacion.appendChild(per)

        let periodoOrbital = dom ['periodoOrbital']
        let por= document.createElement('p')
        por.innerHTML =  "<p>" + x.orbital_period + "</p>"
        periodoOrbital.appendChild(por)

        let diametro = dom['diametro']
        let dia = document.createElement('p')
        dia.innerHTML = "<p>" + x.diameter + "</p>"
        diametro.appendChild(dia)

        let clima = dom['clima']
        let cli = document.createElement('p')
        cli.innerHTML = "<p>" + x.climate + "</p>"
        clima.appendChild(cli)

        let gravedad = dom ['gravedad']
        let gra = document.createElement('p')
        gra.innerHTML = "<p>" + x.gravity+ "</p>"
        gravedad.appendChild(gra)

        let suelo = dom ['suelo']
        let sue = document.createElement('p')
        sue.innerHTML = "<p>" + x.terrain + "</p>"
        suelo.appendChild(sue)


        let agua = dom['agua']
        let agu = document.createElement('p')
        agu.innerHTML = "<p>" + x.surface_water+ "</p>"
        agua.appendChild(agu)

        let populacion= dom['populacion']
        let pop= document.createElement('p')
        pop.innerHTML = "<p>" + x.population+ "</p>"
        populacion.appendChild(pop)

        for(let i = 0; i < x.residents.length; i++) {
            obtenerPersonajes(x.residents[i])

        }

        for(let i = 0; i < x.films.length; i++){
            obtenerPeliculas(x.films[i])
        }

    })
}

function obtenerPersonajes(url){
    fetch(url).then(r=>r.json()).then(x => {
        console.log(x)
        let URL = x.url
        let id = URL.replace(/\D/g,'')

        let residentes = dom['residentes']
        let nombre = x.name
        let div = document.createElement('p')
        residentes.appendChild(div)
        div.innerHTML = `<a href="personaje.html?id=${id}">${nombre}</a>`

    })
}

function obtenerPeliculas(url){
    fetch(url).then(r=>r.json()).then(x => {
        console.log(x)
        let URL = x.url
        let id = URL.replace(/\D/g,'')

        let pelicula = dom['aparicion']
        let nombre = x.title
        let aparicion = document.createElement('p')
        pelicula.appendChild(aparicion)
        aparicion.innerHTML = `<a href="pelicula.html?id=${id}">${nombre}</a>`

    })
}