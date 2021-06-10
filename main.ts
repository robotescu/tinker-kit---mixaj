let nota = 0
let citire = 0
basic.showIcon(IconNames.EigthNote)
basic.forever(function () {
    citire = pins.analogReadPin(AnalogPin.P1)
    nota = Math.map(citire, 4, 1023, 131, 988)
    music.ringTone(nota)
})
