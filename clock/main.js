const seghand = document.querySelector('.handseg')
const minhand = document.querySelector('.handmin')
const hourhand = document.querySelector('.handhour')

const setTime = () => {
    const now = new Date()
    const hour = now.getHours()
    const min = now.getMinutes()
    const seg = now.getSeconds()
    seghand.style.transform = `rotate(${((seg / 60) * 360) + 90}deg)`
    minhand.style.transform = `rotate(${((min / 60) * 360) + 90}deg)`
    hourhand.style.transform = `rotate(${((hour / 60) * 360) + 90}deg)`
}

setInterval(setTime, 1000);