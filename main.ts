let on = 0
basic.forever(function () {
    on = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P15,
    PingUnit.Centimeters
    )
    if (on <= 20) {
        pins.analogWritePin(AnalogPin.P2, 800)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else if (on > 20 && on <= 60) {
        pins.analogWritePin(AnalogPin.P2, 400)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P8, 0)
    } else {
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
})
