radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        orig = radio.receivedSignalStrength()
        change = 0
    } else if (receivedNumber == 1) {
        change = Math.abs(radio.receivedSignalStrength() - orig)
    }
    if (change > 2) {
        radio.sendNumber(0)
    }
})
let change = 0
let orig = 0
radio.setGroup(1)
