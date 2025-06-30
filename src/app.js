import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


const pokemones = {
  bulbasaur: {
    nombre: "Bulbasaur",
    tipo: ["Planta", "Veneno"],
    nivel: 5,
    habilidades: ["Placaje", "Látigo Cepa", "Gruñido"],
    stats: { hp: 45, ataque: 49, defensa: 49, velocidad: 45 },
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  charmander: {
    nombre: "Charmander",
    tipo: ["Fuego"],
    nivel: 5,
    habilidades: ["Arañazo", "Ascuas", "Gruñido"],
    stats: { hp: 39, ataque: 52, defensa: 43, velocidad: 65 },
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },
  squirtle: {
    nombre: "Squirtle",
    tipo: ["Agua"],
    nivel: 5,
    habilidades: ["Placaje", "Pistola Agua", "Refugio"],
    stats: { hp: 44, ataque: 48, defensa: 65, velocidad: 43 },
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
  },
  caterpie: {
    nombre: "Caterpie",
    tipo: ["Bicho"],
    nivel: 3,
    habilidades: ["Disparo Demora", "Placaje"],
    stats: { hp: 45, ataque: 30, defensa: 35, velocidad: 45 },
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
  },
  weedle: {
    nombre: "Weedle",
    tipo: ["Bicho", "Veneno"],
    nivel: 3,
    habilidades: ["Picotazo Veneno", "Disparo Demora"],
    stats: { hp: 40, ataque: 35, defensa: 30, velocidad: 50 },
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
  },
  pidgey: {
    nombre: "Pidgey",
    tipo: ["Normal", "Volador"],
    nivel: 4,
    habilidades: ["Ataque Ala", "Remolino", "Tornado"],
    stats: { hp: 40, ataque: 45, defensa: 40, velocidad: 56 },
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
  },
  rattata: {
    nombre: "Rattata",
    tipo: ["Normal"],
    nivel: 3,
    habilidades: ["Ataque Rápido", "Gruñido"],
    stats: { hp: 30, ataque: 56, defensa: 35, velocidad: 72 },
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
  },
  spearow: {
    nombre: "Spearow",
    tipo: ["Normal", "Volador"],
    nivel: 4,
    habilidades: ["Picotazo", "Ataque Rápido"],
    stats: { hp: 40, ataque: 60, defensa: 30, velocidad: 70 },
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
  },
  pikachu: {
    nombre: "Pikachu",
    tipo: ["Eléctrico"],
    nivel: 12,
    habilidades: ["Impactrueno", "Placaje", "Onda Trueno", "Ataque Rápido"],
    stats: { hp: 35, ataque: 55, defensa: 40, velocidad: 90 },
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  },
  sandshrew: {
    nombre: "Sandshrew",
    tipo: ["Tierra"],
    nivel: 6,
    habilidades: ["Arañazo", "Defensa Rizada"],
    stats: { hp: 50, ataque: 75, defensa: 85, velocidad: 40 },
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"
  },
  nidoranfem: {
    nombre: "Nidoran (Femenino)",
    tipo: ["Veneno"],
    nivel: 5,
    habilidades: ["Gruñido", "Doble Bofetón"],
    stats: { hp: 55, ataque: 47, defensa: 52, velocidad: 41 },
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png"
  },
  nidoranmasc: {
    nombre: "Nidoran (Masculino)",
    tipo: ["Veneno"],
    nivel: 5,
    habilidades: ["Picotazo Veneno", "Gruñido"],
    stats: { hp: 46, ataque: 57, defensa: 40, velocidad: 50 },
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png"
  },
  clefairy: {
    nombre: "Clefairy",
    tipo: ["Hada"],
    nivel: 7,
    habilidades: ["Canto", "Puño Drenaje"],
    stats: { hp: 70, ataque: 45, defensa: 48, velocidad: 35 },
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
  },
  vulpix: {
    nombre: "Vulpix",
    tipo: ["Fuego"],
    nivel: 8,
    habilidades: ["Ascuas", "Fuego Fatuo"],
    stats: { hp: 38, ataque: 41, defensa: 40, velocidad: 65 },
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"
  },
  jigglypuff: {
    nombre: "Jigglypuff",
    tipo: ["Normal", "Hada"],
    nivel: 6,
    habilidades: ["Canto", "Rodar", "Doble Bofetón"],
    stats: { hp: 115, ataque: 45, defensa: 20, velocidad: 20 },
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
  },
  zubat: {
    nombre: "Zubat",
    tipo: ["Veneno", "Volador"],
    nivel: 5,
    habilidades: ["Supersónico", "Mordisco"],
    stats: { hp: 40, ataque: 45, defensa: 35, velocidad: 55 },
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png"
  },
  oddish: {
    nombre: "Oddish",
    tipo: ["Planta", "Veneno"],
    nivel: 6,
    habilidades: ["Absorber", "Derribo"],
    stats: { hp: 45, ataque: 50, defensa: 55, velocidad: 30 },
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png"
  },
  paras: {
    nombre: "Paras",
    tipo: ["Bicho", "Planta"],
    nivel: 6,
    habilidades: ["Arañazo", "Espora"],
    stats: { hp: 35, ataque: 70, defensa: 55, velocidad: 25 },
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png"
  },
  venonat: {
    nombre: "Venonat",
    tipo: ["Bicho", "Veneno"],
    nivel: 6,
    habilidades: ["Supersónico", "Picotazo Veneno"],
    stats: { hp: 60, ataque: 55, defensa: 50, velocidad: 45 },
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png"
  },
  diglett: {
    nombre: "Diglett",
    tipo: ["Tierra"],
    nivel: 4,
    habilidades: ["Excavar", "Ataque Arena"],
    stats: { hp: 10, ataque: 55, defensa: 25, velocidad: 95 },
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"
  }
};



window.onload = function () {
  //write your code here
  console.log(pokemones);
  const listItems = document.querySelectorAll(".poke-list li");
  const pokeName = document.getElementById("poke-name");
  const pokeDesc = document.querySelector("#poke-desc")
  const pokeDetails = document.getElementById("poke-details");
  const pokeImg = document.getElementById("poke-img");

  listItems.forEach(item => {
    item.addEventListener("click", () => {
      const pokeKey = item.id;
      const pokeElijo = pokemones[pokeKey];
      console.log(pokeElijo);
      

      listItems.forEach(i => i.classList.remove("active"));

      item.classList.add("active");


      pokeName.textContent = pokeElijo.nombre;
      pokeDesc.textContent = "Tipo: " + pokeElijo.tipo;
      pokeDetails.textContent = "Habilidades: " + pokeElijo.habilidades



    })
  })

};


