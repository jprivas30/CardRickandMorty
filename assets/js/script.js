let api = 'https://rickandmortyapi.com/api';
let sujetos = undefined;

class personajes {
    constructor (nombre, especie, imagen){
    this.nombre= nombre;
    this.especie= especie;
    this.imagen= imagen;
}
    get datos (){
        return `Mi nombres es ${this.nombre} soy de Especie ${this.especie}`
    }
}


axios.get(api + '/character')
  .then((response) => {
    console.log(response);
    sujetos = response.data.results;
    sujetos.map((item) => {
    let sujeto1 = new personajes(item.name,item.species,item.image)
    show(sujeto1)
    });
})
  .catch((error) => {
    console.log(error);
    })

const show = (sujeto1) => {
    let id = document.querySelector('#tarjetas');
    id.innerHTML += `<div class="base"><div class="base__tarjeta"><div>${sujeto1.datos}</div><img src="${sujeto1.imagen}"/></div></div>`;
}

show ()