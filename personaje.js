"use strict";

let dom = {}

window.onload = () =>{
    dom['nombrePersonaje'] = document.getElementById("nombrePersonaje")
    dom['altura'] = document.getElementById("altura")
    dom['peso'] = document.getElementById("peso")
    dom['pelo'] = document.getElementById("pelo")
    dom['color'] = document.getElementById("color")
    dom['ojos'] = document.getElementById("ojos")
    dom['nacimiento'] = document.getElementById("nacimiento")
    dom['sexo'] = document.getElementById("sexo")
    dom['origen'] = document.getElementById("origen")
    dom['especies'] = document.getElementById("especies")
    dom['vehiculos'] = document.getElementById("vehiculos")
    dom['naves'] = document.getElementById("naves")
    dom['apariciones'] = document.getElementById("apariciones")

    obtenerPersonajes()

}

function obtenerIdURLRecursoSWAPI(url){
    return Number(url.match(/([0-9]*)\/?$/)[1])
}

function obtenerPersonajes(){
    let recurso = obtenerIdURLRecursoSWAPI(window.location.href)
    let personaje =`https://swapi.dev/api/people/${recurso}/`

    fetch(personaje).then(r => r.json()).then(x => {
        console.log(x);

        let personaje = dom['nombrePersonaje']
        personaje.innerHTML = "<p>" + x.name + "</p>"

        let altura = dom['altura']
        let alt= document.createElement('p');
        alt.innerHTML = "<p>" + x.height + "</p>"
        altura.appendChild(alt)

        let peso = dom['peso']
        let pes = document.createElement('p');
        pes.innerHTML = "<p>" + x.mass + "</p>"
        peso.appendChild(pes)

        let pelo = dom['pelo']
        let pel = document.createElement('p');
        pel.innerHTML = "<p>" + x.hair_color + "</p>"
        pelo.appendChild(pel)

        let color = dom['color']
        let col = document.createElement('p');
        col.innerHTML = "<p>" + x.skin_color + "</p>"
        color.appendChild(col)

        let ojos = dom['ojos']
        let ojo = document.createElement('p');
        ojo.innerHTML = "<p>" + x.eye_color + "</p>"
        ojos.appendChild(ojo)

        let nacimiento = dom['nacimiento']
        let nac = document.createElement('p');
        nac.innerHTML = "<p>" + x.birth_year + "</p>"
        nacimiento.appendChild(nac)

        let sexo = dom['sexo']
        let se = document.createElement('p');
        se.innerHTML = "<p>" + x.gender + "</p>"
        sexo.appendChild(se)

        for(let i = 0; i< x.films.length; i++){
            obtenerPeliculas(x.films[i])
        }
        for(let i = 0; i< x.vehicles.length; i++){
            obtenerVehiculos(x.vehicles[i])
        }

        for(let i = 0; i< x.starships.length; i++){
            obtenerNaves(x.starships[i])


        }
        obtenerOrigenes(x.homeworld)

        if(x.species.length != 0 ) {
            obtenerEspecies(x.species)
        }else{

        }
    })
}

function obtenerVehiculos(url){
    fetch(url).then(r => r.json()).then(x => {
        console.log(x);
        console.log(x.name);
        let URL = x.url;
        let id = URL.replace(/\D/g, '');
        let vehiculo = dom['vehiculos'];
        let texto = document.createElement('p');
        let nombre = x.name;
        texto.innerHTML = `<a href="vehiculo.html?id=${id}">${nombre}</a>`;
        vehiculo.appendChild(texto);
    })
}

function obtenerNaves(url){
    fetch(url).then(r => r.json()).then(x => {
        console.log(x)
        let URL = x.url
        let id = URL.replace(/\D/g, '')
        let naves = dom['naves']
        let texto = document.createElement('p')
        let nombre = x.name;
        texto.innerHTML = `<a href=nave.html?id=${id}>${nombre}</a>`
        naves.appendChild(texto)
    })
}

function obtenerEspecies(url) {
    if (!url || url === "") {
        console.log('sin especies')
        return
    }
    fetch(url).then(r => r.json()).then(x => {
        console.log(x);
        let URL = x.url;
        let id = URL.replace(/\D/g, '');
        let especie = dom['especies'];
        let nombre = x.name;
        let texto = document.createElement('p');
        texto.innerHTML = `<a href="especie.html?id=${id}">${nombre}</a>`;
        especie.appendChild(texto);
    });
}

function obtenerOrigenes(url){
    fetch(url).then(r => r.json()).then(x => {

        console.log(x);
        let URL = x.url;
        let id = URL.replace(/\D/g,'');

        let origen = dom['origen'];

        let div = document.createElement('p')
        let nombre = x.name;

        div.innerHTML = `<a href="planeta.html?id=${id}">${nombre}</a>`
        origen.appendChild(div)

    })
}

function obtenerPeliculas(url){
    fetch(url).then(r => r.json()).then(x => {
        console.log(x);
        let URL = x.url;
        let id = URL.replace(/\D/g,'');

        let pelicula= dom['apariciones'];
        let nombre = x.title;
        let aparicion = document.createElement('p')

        pelicula.appendChild(aparicion)
        aparicion.innerHTML = `<a href="pelicula.html?id=${id}">${nombre}</a>`
    })
}