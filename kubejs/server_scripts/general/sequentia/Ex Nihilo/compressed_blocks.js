/*ServerEvents.recipes(event =>{
    event.shapeless("kubejs:compressed_cobblestone_x1", ['9x minecraft:cobblestone'])
    event.shapeless("9x minecraft:cobblestone", ['kubejs:compressed_cobblestone_x1'])
    event.shapeless("kubejs:compressed_cobblestone_x2", ['9x kubejs:compressed_cobblestone_x1'])
    event.shapeless("kubejs:compressed_cobblestone_x3", ['9x kubejs:compressed_cobblestone_x2'])
    event.shapeless("kubejs:compressed_cobblestone_x1", ['9x minecraft:cobblestone'])
    event.shapeless("kubejs:compressed_sand_x1", ['9x minecraft:sand'])
    event.shapeless("9x minecraft:sand", ['kubejs:compressed_sand_x1'])
    event.shapeless("kubejs:compressed_sand_x2", ['9x kubejs:compressed_sand_x1'])
    event.shapeless("kubejs:compressed_sand_x3", ['9x kubejs:compressed_sand_x2'])
    event.shapeless("kubejs:compressed_sand_x1", ['9x minecraft:sand'])
    event.shapeless("kubejs:compressed_sand_x2", ['9x kubejs:compressed_sand_x1'])
    event.shapeless("kubejs:compressed_sand_x3", ['9x kubejs:compressed_sand_x2'])
    event.shapeless("kubejs:compressed_gravel_x1", ['9x minecraft:gravel'])
    event.shapeless("9x minecraft:gravel", ['kubejs:compressed_gravel_x1'])
    event.shapeless("kubejs:compressed_gravel_x2", ['9x kubejs:compressed_gravel_x1'])
    event.shapeless("kubejs:compressed_gravel_x3", ['9x kubejs:compressed_gravel_x2'])
    event.shapeless("kubejs:compressed_gravel_x1", ['9x minecraft:gravel'])
    event.shapeless("kubejs:compressed_gravel_x2", ['9x kubejs:compressed_gravel_x1'])
    event.shapeless("kubejs:compressed_gravel_x3", ['9x kubejs:compressed_gravel_x2'])




    event.shapeless("9x kubejs:compressed_gravel_x1", ['kubejs:compressed_gravel_x2'])
    event.shapeless("9x kubejs:compressed_gravel_x2", ['kubejs:compressed_gravel_x3'])
    
    event.shapeless("9x kubejs:compressed_cobblestone_x1", ['kubejs:compressed_cobblestone_x2'])
    event.shapeless("9x kubejs:compressed_cobblestone_x2", ['kubejs:compressed_cobblestone_x3'])

    event.shapeless("9x kubejs:compressed_sand_x1", ['kubejs:compressed_sand_x2'])
    event.shapeless("9x kubejs:compressed_sand_x2", ['kubejs:compressed_sand_x3'])

    event.custom({type: hammer, results:[Item.of('minecraft:gravel', 9).withChance(1.0)], input: Item.of("kubejs:compressed_cobblestone_x1")})
    event.custom({type: hammer, results:[Item.of('minecraft:gravel', 81).withChance(1.0)], input: Item.of("kubejs:compressed_cobblestone_x2")})
    event.custom({type: hammer, results:[Item.of('minecraft:gravel', 729).withChance(1.0)], input: Item.of("kubejs:compressed_cobblestone_x3")})
    event.custom({type: hammer, results:[Item.of("exnihilosequentia:dust", 9).withChance(1.0)], input: Item.of("kubejs:compressed_sand_x1")})
    event.custom({type: hammer, results:[Item.of('exnihilosequentia:dust', 81).withChance(1.0)], input: Item.of("kubejs:compressed_sand_x2")})
    event.custom({type: hammer, results:[Item.of('exnihilosequentia:dust', 729).withChance(1.0)], input: Item.of("kubejs:compressed_sand_x3")})
    event.custom({type: hammer, results:[Item.of('minecraft:sand', 9).withChance(1.0)], input: Item.of("kubejs:compressed_gravel_x1")})
    event.custom({type: hammer, results:[Item.of('minecraft:sand', 81).withChance(1.0)], input: Item.of("kubejs:compressed_gravel_x2")})
    event.custom({type: hammer, results:[Item.of('minecraft:sand', 729).withChance(1.0)], input: Item.of("kubejs:compressed_gravel_x3")})
})*/