// 自動產生的程式碼。請勿編輯。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "base":
            case "層級1":return tiles.createTilemap(hex`0a0008000200090000000009000500010000000000000400090000000909000000090000090000000000090000000900000000000900090000000909000000090008000000000000030007000900000000090006`, img`
. . 2 . . . . 2 . . 
. . . . . . . . . . 
2 . . . 2 2 . . . 2 
. . 2 . . . . . 2 . 
. . 2 . . . . . 2 . 
2 . . . 2 2 . . . 2 
. . . . . . . . . . 
. . 2 . . . . 2 . . 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile9,myTiles.tile8,myTiles.tile7,myTiles.tile10], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "wall":
            case "tile1":return tile1;
            case "redspawn0":
            case "tile2":return tile2;
            case "greenspawn":
            case "tile4":return tile4;
            case "bleuespawn":
            case "tile5":return tile5;
            case "redtower0":
            case "tile3":return tile3;
            case "bluetower1":
            case "tile6":return tile6;
            case "greentower":
            case "tile9":return tile9;
            case "bluetower":
            case "tile8":return tile8;
            case "yellowspawn":
            case "tile7":return tile7;
            case "wall0":
            case "tile10":return tile10;
            case "HP":
            case "tile11":return tile11;
            case "point":
            case "tile12":return tile12;
        }
        return null;
    })

}
// 自動產生的程式碼。請勿編輯。
