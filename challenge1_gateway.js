radio.onReceivedValue(function (name, value) {
    if (name == "day") {
        if (value != 0) {
            isDay = 1
        } else {
            isDay = 0
        }
    }
    if (name == "help") {
        needsHelp = value
        if (needsHelp == 1) {
            basic.showLeds(`
                # . . . #
                # . . . #
                # # # # #
                # . . . #
                # . . . #
                `)
        }
    }
    if (name == "active") {
        last_active = running_time
    }
    if ((running_time - last_active <= 5 || isDay == 0) && needsHelp != 1) {
        // active
        basic.clearScreen()
    }
})
let running_time = 0
let needsHelp = 0
let isDay = 0
let last_active = 0
radio.setGroup(1)
last_active = 0
isDay = 1
basic.forever(function () {
    // checks the time
    running_time = Math.round(input.runningTime() / 1000)
    if (running_time - last_active > 5 && isDay == 1) {
        // inactive icon
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            # # # # #
            `)
    }
    while (needsHelp == 1 && isDay == 1 && running_time - last_active > 5) {
        // inactive and help icon
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            # # # # #
            `)
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
    }
})
