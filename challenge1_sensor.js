input.onGesture(Gesture.Shake, function () {
    radio.sendValue("active", 1)
})
input.onButtonPressed(Button.A, function () {
    radio.sendValue("help", 1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("help", 0)
})
let lightlevel = 0
radio.setGroup(1)
basic.forever(function () {
    // light sensor
    lightlevel = input.lightLevel()
    radio.sendValue("day", lightlevel)
    basic.pause(5000)
})
