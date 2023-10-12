const sun = document.querySelector('#sun')

const sunX = 920
const sunY = 450

const px = (n) => n + 'px'
const rad = (deg, speed) => deg * speed / 180

sun.style.left = px(sunX)
sun.style.top = px(sunY)


function setPlanet(id, radius, speed, startDeg=0, direction='noclock') {
    let deg = startDeg
    const planet = document.querySelector('#' + id)
    const increment = direction == 'noclock' ? -1 : 1
    setInterval(() => {
        const x = sunX + radius * Math.cos(rad(deg, speed))
        const y = sunY + radius * Math.sin(rad(deg, speed))
        planet.style.left = px(x)
        planet.style.top = px(y)
        deg += increment
    }, 10);
}

function setSatellite(id, planetId, radius, speed, startDeg=0, direction='noclock') {
    let deg = startDeg
    const satellite = document.querySelector('#' + id)
    const increment = direction == 'noclock' ? -1 : 1
    const planet = document.querySelector('#' + planetId)
    setInterval(() => {
        const planetX = Number(planet.style.left.slice(0, -2))
        const planetY = Number(planet.style.top.slice(0, -2))
        const x = planetX + radius * Math.cos(rad(deg, speed))
        const y = planetY + radius * Math.sin(rad(deg, speed))
        satellite.style.left = px(x)
        satellite.style.top = px(y)
        deg += increment
    }, 10);
}

setPlanet('earth', 210, 3, 200)
setPlanet('mercury', 100, 5, 100)
setPlanet('venera', 150, 4, 150)
setPlanet('mars', 250, 2.8, 320)
setPlanet('jupyter', 320, 2.4, 210)
setPlanet('saturn', 370, 2.2, 120)
setPlanet('uranus', 410, 2, 180)
setPlanet('neptun', 450, 1.8, 240)
setSatellite('moon', 'earth', 25, 10)



screenWidth = window.innerWidth - 10;
screenHeight = window.innerHeight - 10;


for (let i=0; i < 50; i++) {
    const star = document.createElement('div')
    star.classList.add('star')
    const x = Math.round(Math.random() * screenWidth)
    const y = Math.round(Math.random() * screenHeight)
    const delay = Math.round(Math.random() * 200) / 100
    const size = Math.floor(1 + Math.random() * 4)

    star.style.left = px(x)
    star.style.top = px(y)
    star.style.width = px(size)
    star.style.height = px(size)
    star.style.animationDelay = delay + 's'
    document.body.append(star)
}



setTimeout(() => {
    const meteor = document.querySelector('.meteor')
    meteor.classList.add('meteor-action')
}, 3000);



