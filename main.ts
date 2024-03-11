namespace SpriteKind {
    export const red_basement = SpriteKind.create()
    export const blue_basement = SpriteKind.create()
    export const orange_basement = SpriteKind.create()
    export const green_basement = SpriteKind.create()
}
namespace MultiplayerState {
    export const alive = MultiplayerState.create()
    export const face = MultiplayerState.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.green_basement, function (sprite, otherSprite) {
    mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.Four), MultiplayerState.life, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (sprite == red_ammo && otherSprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))) {
    	
    } else if (sprite == blue_ammo && otherSprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))) {
    	
    } else if (sprite == orange_ammo && otherSprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three))) {
    	
    } else if (sprite == green_ammo && otherSprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four))) {
    	
    } else {
        sprites.destroy(sprite)
        sprites.destroy(otherSprite)
        mp.changePlayerStateBy(mp.getPlayerBySprite(otherSprite), MultiplayerState.life, -1)
        if (mp.getPlayerBySprite(otherSprite) == mp.playerSelector(mp.PlayerNumber.One)) {
            mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`red_cannon`, SpriteKind.Player))
            tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), assets.tile`redspawn0`)
        }
        if (mp.getPlayerBySprite(otherSprite) == mp.playerSelector(mp.PlayerNumber.Two)) {
            mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`blue_cannon`, SpriteKind.Player))
            tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), assets.tile`bleuespawn`)
        }
        if (mp.getPlayerBySprite(otherSprite) == mp.playerSelector(mp.PlayerNumber.Three)) {
            mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(assets.image`yellow_cannon`, SpriteKind.Player))
            tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), assets.tile`yellowspawn`)
        }
        if (mp.getPlayerBySprite(otherSprite) == mp.playerSelector(mp.PlayerNumber.Four)) {
            mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(assets.image`green_cannon`, SpriteKind.Player))
            tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), assets.tile`greenspawn`)
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.red_basement, function (sprite, otherSprite) {
    mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.life, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.fire, 500)
    sprites.destroy(otherSprite, effects.fire, 500)
})
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    if (player2 == mp.playerSelector(mp.PlayerNumber.One)) {
        sprites.destroy(red_ammo)
        if (red_face == 1) {
            red_ammo = darts.create(assets.image`arrow_up`, SpriteKind.Projectile, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y)
            red_ammo.vx = 0
            red_ammo.vy = -200
        }
        if (red_face == 2) {
            red_ammo = darts.create(assets.image`arrow_down`, SpriteKind.Projectile, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y)
            red_ammo.vx = 0
            red_ammo.vy = 200
        }
        if (red_face == 3) {
            red_ammo = darts.create(assets.image`arrow_left`, SpriteKind.Projectile, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y)
            red_ammo.vx = -200
            red_ammo.vy = 0
        }
        if (red_face == 4) {
            red_ammo = darts.create(assets.image`arrow_right`, SpriteKind.Projectile, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y)
            red_ammo.vx = 200
            red_ammo.vy = 0
        }
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Two)) {
        sprites.destroy(blue_ammo)
        if (blue_face == 1) {
            blue_ammo = darts.create(assets.image`arrow_up_blue`, SpriteKind.Projectile, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y)
            blue_ammo.vx = 0
            blue_ammo.vy = -200
        }
        if (blue_face == 2) {
            blue_ammo = darts.create(assets.image`arrow_down_blue`, SpriteKind.Projectile, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y)
            blue_ammo.vx = 0
            blue_ammo.vy = 200
        }
        if (blue_face == 3) {
            blue_ammo = darts.create(assets.image`arrow_left_blue`, SpriteKind.Projectile, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y)
            blue_ammo.vx = -200
            blue_ammo.vy = 0
        }
        if (blue_face == 4) {
            blue_ammo = darts.create(assets.image`arrow_right_blue`, SpriteKind.Projectile, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y)
            blue_ammo.vx = 200
            blue_ammo.vy = 0
        }
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Three)) {
        sprites.destroy(orange_ammo)
        if (orange_face == 1) {
            orange_ammo = darts.create(assets.image`arrow_up_orange`, SpriteKind.Projectile, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).y)
            orange_ammo.vx = 0
            orange_ammo.vy = -200
        }
        if (orange_face == 2) {
            orange_ammo = darts.create(assets.image`arrow_down_orange`, SpriteKind.Projectile, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).y)
            orange_ammo.vx = 0
            orange_ammo.vy = 200
        }
        if (orange_face == 3) {
            orange_ammo = darts.create(assets.image`arrow_left_orange`, SpriteKind.Projectile, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).y)
            orange_ammo.vx = -200
            orange_ammo.vy = 0
        }
        if (orange_face == 4) {
            orange_ammo = darts.create(assets.image`arrow_right_orange`, SpriteKind.Projectile, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).y)
            orange_ammo.vx = 200
            orange_ammo.vy = 0
        }
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Four)) {
        sprites.destroy(red_ammo)
        if (green_face == 1) {
            green_ammo = darts.create(assets.image`arrow_up_green`, SpriteKind.Projectile, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).y)
            green_ammo.vx = 0
            green_ammo.vy = -200
        }
        if (green_face == 2) {
            green_ammo = darts.create(assets.image`arrow_down_green`, SpriteKind.Projectile, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).y)
            green_ammo.vx = 0
            green_ammo.vy = 200
        }
        if (green_face == 3) {
            green_ammo = darts.create(assets.image`arrow_left_green`, SpriteKind.Projectile, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).y)
            green_ammo.vx = -200
            green_ammo.vy = 0
        }
        if (green_face == 4) {
            green_ammo = darts.create(assets.image`arrow_right_green`, SpriteKind.Projectile, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).y)
            green_ammo.vx = 200
            green_ammo.vy = 0
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.orange_basement, function (sprite, otherSprite) {
    mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.Three), MultiplayerState.life, 0)
})
mp.onButtonEvent(mp.MultiplayerButton.Right, ControllerButtonEvent.Pressed, function (player2) {
    if (player2 == mp.playerSelector(mp.PlayerNumber.One)) {
        red_face = 4
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Two)) {
        blue_face = 4
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Three)) {
        orange_face = 4
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Four)) {
        green_face = 4
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Down, ControllerButtonEvent.Pressed, function (player2) {
    if (player2 == mp.playerSelector(mp.PlayerNumber.One)) {
        red_face = 2
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Two)) {
        blue_face = 2
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Three)) {
        orange_face = 2
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Four)) {
        green_face = 2
    }
})
mp.onLifeZero(function (player2) {
    sprites.destroy(mp.getPlayerSprite(player2))
    remain_player += -1
    mp.setPlayerState(player2, MultiplayerState.alive, 1)
    if (player2 == mp.playerSelector(mp.PlayerNumber.One)) {
        sprites.destroy(red_basement)
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Two)) {
        sprites.destroy(blue_basement)
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Three)) {
        sprites.destroy(orange_basement)
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Four)) {
        sprites.destroy(green_basement)
    }
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprites.destroy(sprite)
})
mp.onButtonEvent(mp.MultiplayerButton.Left, ControllerButtonEvent.Pressed, function (player2) {
    if (player2 == mp.playerSelector(mp.PlayerNumber.One)) {
        red_face = 3
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Two)) {
        blue_face = 3
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Three)) {
        orange_face = 3
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Four)) {
        green_face = 3
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Pressed, function (player2) {
    if (player2 == mp.playerSelector(mp.PlayerNumber.One)) {
        red_face = 1
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Two)) {
        blue_face = 1
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Three)) {
        orange_face = 1
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Four)) {
        green_face = 1
    }
})
mp.onButtonEvent(mp.MultiplayerButton.B, ControllerButtonEvent.Pressed, function (player2) {
	
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.blue_basement, function (sprite, otherSprite) {
    mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.life, 0)
})
let green_ammo: Dart = null
let orange_ammo: Dart = null
let blue_ammo: Dart = null
let red_ammo: Dart = null
let green_basement: Sprite = null
let orange_basement: Sprite = null
let blue_basement: Sprite = null
let red_basement: Sprite = null
let green_face = 0
let orange_face = 0
let blue_face = 0
let red_face = 0
red_face = 0
blue_face = 0
orange_face = 0
green_face = 0
let remain_player = 4
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.life, 5)
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.life, 5)
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.Three), MultiplayerState.life, 5)
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.Four), MultiplayerState.life, 5)
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.alive, 0)
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.alive, 0)
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.Three), MultiplayerState.alive, 0)
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.Four), MultiplayerState.alive, 0)
red_basement = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.red_basement)
blue_basement = sprites.create(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    `, SpriteKind.blue_basement)
orange_basement = sprites.create(img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    `, SpriteKind.orange_basement)
green_basement = sprites.create(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, SpriteKind.green_basement)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`red_cannon`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`blue_cannon`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(assets.image`yellow_cannon`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(assets.image`green_cannon`, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four))
tiles.setCurrentTilemap(tilemap`base`)
tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), assets.tile`redspawn0`)
tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), assets.tile`bleuespawn`)
tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), assets.tile`yellowspawn`)
tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), assets.tile`greenspawn`)
tiles.placeOnRandomTile(red_basement, assets.tile`redtower0`)
tiles.placeOnRandomTile(blue_basement, assets.tile`bluetower1`)
tiles.placeOnRandomTile(orange_basement, assets.tile`bluetower`)
tiles.placeOnRandomTile(green_basement, assets.tile`greentower`)
forever(function () {
    if (remain_player == 1) {
        if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.alive) == 0) {
            mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.One))
        }
        if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.alive) == 0) {
            mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Two))
        }
        if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Three), MultiplayerState.alive) == 0) {
            mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Three))
        }
        if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Four), MultiplayerState.alive) == 0) {
            mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Four))
        }
    }
})
