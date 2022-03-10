const lua = document.getElementById('lua')
const marte = document.getElementById('marte')
const europa = document.getElementById('europa')
const titan = document.getElementById('titan')

function luaOn(){
    plan.src = './assets/destination/image-moon.png'
}
function marteOn(){
    plan.src = './assets/destination/image-mars.png'
}
function europaOn(){
    plan.src = './assets/destination/image-europa.png'
}
function titanOn(){
    plan.src = './assets/destination/image-titan.png'
}


lua.addEventListener('click', luaOn)
marte.addEventListener('click', marteOn)
europa.addEventListener('click', europaOn)
titan.addEventListener('click', titanOn)

const destino = [
    {
      "name": "Moon",
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
    {
      "name": "Mars",
      "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
    {
      "name": "Europa", 
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.", 
      "distance": "628 mil. km", 
      "travel": "3 years"
    },
    {
      "name": "Titan", 
      "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.", 
      "distance": "1.6 bil. km", 
      "travel": "7 years"
    }
]

const nomeLua = destino[0].name
const descricaoLua = destino[0].description
const distanceLua = destino[0].distance
const travelLua = destino[0].travel

const nomeMars = destino[1].name
const descricaoMars = destino[1].description
const distanceMars = destino[1].distance
const travelMars = destino[1].travel

const nomeEuro = destino[2].name
const descricaoEuro = destino[2].description
const distanceEuro = destino[2].distance
const travelEuro = destino[2].travel

const nomeTitan = destino[3].name
const descricaoTitan = destino[3].description
const distanceTitan = destino[3].distance
const travelTitan = destino[3].travel



function TrocaLua(){
  const trocaNomeLua = document.getElementById("name")
  trocaNomeLua.innerHTML = nomeLua
  const trocaDescricaoLua = document.getElementById("description")
  trocaDescricaoLua.innerHTML = descricaoLua
  const trocaDistanceLua = document.getElementById("distance")
  trocaDistanceLua.innerHTML = distanceLua
  const trocaTravelLua = document.getElementById("travel")
  trocaTravelLua.innerHTML = travelLua
}

  function TrocaMars(){
  const trocaNomeMars = document.getElementById("name")
  trocaNomeMars.innerHTML = nomeMars
  const trocaDescricaoMars = document.getElementById("description")
  trocaDescricaoMars.innerHTML = descricaoMars
  const trocaDistanceMars = document.getElementById("distance")
  trocaDistanceMars.innerHTML = distanceMars
  const trocaTravelMars = document.getElementById("travel")
  trocaTravelMars.innerHTML = travelMars
}

function TrocaEuro(){
  const trocaNomeEuro = document.getElementById("name")
  trocaNomeEuro.innerHTML = nomeEuro
  const trocaDescricaoEuro = document.getElementById("description")
  trocaDescricaoEuro.innerHTML = descricaoEuro
  const trocaDistanceEuro = document.getElementById("distance")
  trocaDistanceEuro.innerHTML = distanceEuro
  const trocaTravelEuro = document.getElementById("travel")
  trocaTravelEuro.innerHTML = travelEuro
}

function TrocaTitan(){
  const trocaNomeTitan = document.getElementById("name")
  trocaNomeTitan.innerHTML = nomeTitan
  const trocaDescricaoTitan = document.getElementById("description")
  trocaDescricaoTitan.innerHTML = descricaoTitan
  const trocaDistanceTitan = document.getElementById("distance")
  trocaDistanceTitan.innerHTML = distanceTitan
  const trocaTravelTitan = document.getElementById("travel")
  trocaTravelTitan.innerHTML = travelTitan
}