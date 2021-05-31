sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Princess.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(10)
})
let Princess: Sprite = null
scene.setBackgroundImage(assets.image`Background`)
let Hungry_Kitten = sprites.create(assets.image`Hungry Kitten`, SpriteKind.Player)
controller.moveSprite(Hungry_Kitten)
Princess = sprites.create(assets.image`Princess`, SpriteKind.Food)
