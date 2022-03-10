const launch = document.getElementById('botao1')
const spaceport = document.getElementById('botao2')
const capsule = document.getElementById('botao3')

function launchOn(){
    tecnologia.src = './assets/technology/image-launch-vehicle-portrait.jpg'
}
function spaceportOn(){
    tecnologia.src = './assets/technology/image-spaceport-portrait.jpg'
}
function capsuleOn(){
    tecnologia.src = './assets/technology/image-space-capsule-portrait.jpg'
}


launch.addEventListener('click', launchOn)
spaceport.addEventListener('click', spaceportOn)
capsule.addEventListener('click', capsuleOn)



const technologia = [
    {
      "name": "Launch vehicle",
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },

    {
      "name": "Spaceport",
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },

    {
      "name": "Space capsule",
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
]


const nomeLaunch = technologia[0].name
const descricaoLaunch = technologia[0].description

const nomeSpaceport = technologia[1].name
const descricaoSpaceport = technologia[1].description

const nomeCapsule = technologia[2].name
const descricaoCapsule = technologia[2].description

function LaunchOn(){

    const trocaNomeLaunch = document.getElementById("name")
    trocaNomeLaunch.innerHTML = nomeLaunch
    const trocaDescricaoLaunch = document.getElementById("description")
    trocaDescricaoLaunch.innerHTML = descricaoLaunch
}

function SpaceportOn(){

    const trocaNomeSpaceport = document.getElementById("name")
    trocaNomeSpaceport.innerHTML = nomeSpaceport
    const trocaDescricaoSpaceport = document.getElementById("description")
    trocaDescricaoSpaceport.innerHTML = descricaoSpaceport
}

function CapsuleOn(){

    const trocaNomeCapsule = document.getElementById("name")
    trocaNomeCapsule.innerHTML = nomeCapsule
    const trocaDescricaoCapsule = document.getElementById("description")
    trocaDescricaoCapsule.innerHTML = descricaoCapsule
}