const douglas = document.getElementById('botao1')
const mark = document.getElementById('botao2')
const victor = document.getElementById('botao3')
const anousheh = document.getElementById('botao4')

function douglasOn(){
    person.src = './assets/crew/image-douglas-hurley.png'
}
function markOn(){
    person.src = './assets/crew/image-mark-shuttleworth.png'
}
function victorOn(){
    person.src = './assets/crew/image-victor-glover.png'
}
function anoushehOn(){
    person.src = './assets/crew/image-anousheh-ansari.png'
}


douglas.addEventListener('click', douglasOn)
mark.addEventListener('click', markOn)
victor.addEventListener('click', victorOn)
anousheh.addEventListener('click', anoushehOn)


const tripulacao = [
      {
        "name": "Douglas Hurley",
        "role": "Commander",
        "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
      },
      {
        "name": "Mark Shuttleworth",
        "role": "Mission Specialist",
        "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
      },
      {
        "name": "Victor Glover",
        "role": "Pilot",
        "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
      },
      {
        "name": "Anousheh Ansari",
        "role": "Flight Engineer",
        "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
      }
]

    
    const nomeDouglas = tripulacao[0].name
    const cargoDouglas = tripulacao[0].role
    const bioDouglas = tripulacao[0].bio

    const nomeMark = tripulacao[1].name
    const cargoMark = tripulacao[1].role
    const bioMark = tripulacao[1].bio

    const nomeVictor = tripulacao[2].name
    const cargoVictor = tripulacao[2].role
    const bioVictor = tripulacao[2].bio

    const nomeAnou = tripulacao[3].name
    const cargoAnou = tripulacao[3].role
    const bioAnou = tripulacao[3].bio


    function DadosDouglas(){

        const trocaNomeDouglas = document.getElementById("name")
        trocaNomeDouglas.innerHTML = nomeDouglas
        const trocaCargoDouglas = document.getElementById("role")
        trocaCargoDouglas.innerHTML = cargoDouglas
        const trocaBioDouglas = document.getElementById("bio")
        trocaBioDouglas.innerHTML = bioDouglas
    }

    function DadosMark(){

        const trocaNomeMark = document.getElementById("name")
        trocaNomeMark.innerHTML = nomeMark
        const trocaCargoMark = document.getElementById("role")
        trocaCargoMark.innerHTML = cargoMark
        const trocaBioMark = document.getElementById("bio")
        trocaBioMark.innerHTML = bioMark
    
    }
    
    function DadosVictor(){

        const trocaNomeVictor = document.getElementById("name")
        trocaNomeVictor.innerHTML = nomeVictor
        const trocaCargoVictor = document.getElementById("role")
        trocaCargoVictor.innerHTML = cargoVictor
        const trocaBioVictor = document.getElementById("bio")
        trocaBioVictor.innerHTML = bioVictor
    }

    function DadosAnou(){

      const trocaNomeAnou = document.getElementById("name")
      trocaNomeAnou.innerHTML = nomeAnou
      const trocaCargoAnou = document.getElementById("role")
      trocaCargoAnou.innerHTML = cargoAnou
      const trocaBioAnou = document.getElementById("bio")
      trocaBioAnou.innerHTML = bioAnou
  }