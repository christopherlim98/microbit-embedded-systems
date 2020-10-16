radio.onReceivedNumber(function (receivedNumber) {
    turned_on = input.runningTime()
    basic.showLeds(`
    . # . # .
    . # . # .
    # . . . #
    # . . . #
    . # # # .
    `)
})
let turned_on = input.runningTime()
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(0)
    basic.pause(100)
    radio.sendNumber(1)
    if (input.runningTime() - turned_on > 500) {
        basic.clearScreen()
    }
})
