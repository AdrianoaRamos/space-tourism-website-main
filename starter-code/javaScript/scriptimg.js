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