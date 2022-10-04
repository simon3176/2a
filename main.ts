input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 9; index++) {
        Counter += -1
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
})
let Counter = 9
basic.forever(function () {
    basic.showNumber(Counter)
})
