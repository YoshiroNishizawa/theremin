input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.stopAllSounds()
})
basic.showIcon(IconNames.EigthNote)
basic.forever(function () {
    if (0 <= pins.analogReadPin(AnalogPin.P2) && pins.analogReadPin(AnalogPin.P2) < 100) {
        music.ringTone(523)
    } else if (100 <= pins.analogReadPin(AnalogPin.P2) && pins.analogReadPin(AnalogPin.P2) < 150) {
        music.ringTone(494)
    } else if (150 <= pins.analogReadPin(AnalogPin.P2) && pins.analogReadPin(AnalogPin.P2) < 200) {
        music.ringTone(440)
    } else if (200 <= pins.analogReadPin(AnalogPin.P2) && pins.analogReadPin(AnalogPin.P2) < 250) {
        music.ringTone(392)
    } else if (250 <= pins.analogReadPin(AnalogPin.P2) && pins.analogReadPin(AnalogPin.P2) < 300) {
        music.ringTone(349)
    } else if (300 <= pins.analogReadPin(AnalogPin.P2) && pins.analogReadPin(AnalogPin.P2) < 350) {
        music.ringTone(330)
    } else if (350 <= pins.analogReadPin(AnalogPin.P2) && pins.analogReadPin(AnalogPin.P2) < 400) {
        music.ringTone(294)
    } else if (400 <= pins.analogReadPin(AnalogPin.P2) && pins.analogReadPin(AnalogPin.P2) < 450) {
        music.ringTone(262)
    }
})
