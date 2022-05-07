setInterval(setClock, 1000)

function setClock(){
    const currentDate = new Date()
    const SecondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = currentDate.getMinutes() / 60
    const secondsRatio = currentDate.getHours() / 60
}