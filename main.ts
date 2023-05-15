function MOVIMIENTOIZQUIERDA () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    basic.pause(500)
}
function INTERMITENTEIZDO () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    basic.pause(200)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    basic.pause(200)
}
function INTERMITENTEDERECHO () {
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    basic.pause(200)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    basic.pause(200)
}
function DOBLEINTERMITENTE () {
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
}
function MOVIMIENTODERECHA () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    basic.pause(500)
}
let IZQUIERDA = false
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.showIcon(IconNames.Happy)
basic.pause(2000)
basic.forever(function () {
    basic.showString("EMLILIO")
    music.playMelody("G B A G C5 B A B ", 120)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 20 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        IZQUIERDA = Math.randomBoolean()
        strip.showRainbow(1, 360)
        if (IZQUIERDA == true) {
            INTERMITENTEIZDO()
            MOVIMIENTOIZQUIERDA()
        }
        if (IZQUIERDA == false) {
            INTERMITENTEDERECHO()
            MOVIMIENTODERECHA()
        }
    } else {
        DOBLEINTERMITENTE()
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
