const axios = require("axios");
const Pokemones = require('./models/Pokemones');
const { dbConnection } = require("./database/config");
require("dotenv").config();

const obtenerPokemones = async () => {
  await dbConnection();

  for (let index = 1; index <= 898; index++) {
    var id = index;
    console.log('Index: '+id);
    var pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index}/`);
    var specie = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${index}/`);

    var nombre = pokemon.data.name;
    console.log('Nombre: '+ nombre);

    var descripcion = specie.data.genera[5].genus;
    console.log('Descripciòn: '+descripcion)

    var typeUrl = pokemon.data.types[0].type.url;
    var tipeName = await axios.get(typeUrl);
    var tipo = tipeName.data.names[5].name;
    console.log('tipo: '+tipo);

    var evolutionUrl = specie.data.evolution_chain.url;
    var evolution = await axios.get(evolutionUrl);
    var evolucion = [];
    var evoData = evolution.data.chain;
    do {
      evolucion.push({
        nombre: evoData.species.name,
      });
      evoData = evoData["evolves_to"][0];
    } while (!!evoData && evoData.hasOwnProperty("evolves_to"));

    console.log('Evoluciòn:');
    console.log(evolucion);

    var altura = pokemon.data.height;
    console.log("Altura: " +altura);

    var peso = pokemon.data.weight;
    console.log("Peso: "+peso);

    var imagen = pokemon.data.sprites.other.home.front_default;
    console.log("Imagen: "+imagen);
    console.log(" ");

    let pokemones = new Pokemones({
        id: id,
        nombre: nombre,
        descripcion: descripcion,
        tipo: tipo,
        evolucion: evolucion,
        altura: altura,
        peso: peso,
        image: imagen
      });

      pokemones.save(function (error) {
        if (error) {
          console.log(error);
        }
      });
  }
};
obtenerPokemones();
