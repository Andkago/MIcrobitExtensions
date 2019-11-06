function Venstre(Tid: number, Fart: number) {
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.analogWritePin(AnalogPin.P0, Fart * 100)
    pins.analogWritePin(AnalogPin.P1, Fart * 100)
    basic.pause(Tid * 1000)
    stop()
}
function SpillLyd(Tid: number) {
    pins.analogSetPitchPin(AnalogPin.P9)
    music.beginMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Forever)
    basic.pause(Tid)
}
function Fremover(Tid: number, Fart: number) {
    pins.digitalWritePin(DigitalPin.P5, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.analogWritePin(AnalogPin.P0, Fart * 100)
    pins.analogWritePin(AnalogPin.P1, Fart * 100)
    basic.pause(Tid * 1000)
    stop()
}
function Bakover(Tid: number, Fart: number) {
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P0, Fart * 100)
    pins.analogWritePin(AnalogPin.P1, Fart * 100)
    basic.pause(Tid * 1000)
    stop()
}
function FortsettFremover(Fart: number) {
    pins.digitalWritePin(DigitalPin.P5, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.analogWritePin(AnalogPin.P0, Fart * 100)
    pins.analogWritePin(AnalogPin.P1, Fart * 100)
}
function Høyre(Tid: number, Fart: number) {
    pins.digitalWritePin(DigitalPin.P5, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P0, Fart * 100)
    pins.analogWritePin(AnalogPin.P1, Fart * 100)
    basic.pause(Tid * 1000)
    stop()
}
function SvingTilVenstre(Tid: number, Fart: number) {
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.analogWritePin(AnalogPin.P0, Fart * 80)
    pins.analogWritePin(AnalogPin.P1, Fart * 100)
    basic.pause(Tid * 1000)
    stop()
}
function FortsettBakover(Fart: number) {
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P0, Fart * 100)
    pins.analogWritePin(AnalogPin.P1, Fart * 100)
}
function SvingTilHøyre(Tid: number, Fart: number) {
    pins.digitalWritePin(DigitalPin.P5, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P0, Fart * 100)
    pins.analogWritePin(AnalogPin.P1, Fart * 80)
    basic.pause(Tid * 1000)
    stop()
}
function stop() {
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
}
