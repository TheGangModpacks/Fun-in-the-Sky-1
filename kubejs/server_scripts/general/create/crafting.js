//priority: 1
const kinetic = (id) => `create:crafting/kinetics/${id}`
const logistic = (id) => `create:crafting/logistics/${id}`
ServerEvents.recipes(event =>{
    event.shaped(Item.of('2x create:belt_connector'), ['   ', 'aba', 'aba'], {a: "minecraft:dried_kelp", b: "minecraft:dried_kelp_block"})
    .id(kinetic('belt_connector'));

    event.shaped(Item.of('create:mechanical_crafter', 5), ['aba', 'aca', 'aba'], {a: 'minecraft:crafting_table', b: 'create:electron_tube', c: 'create:brass_casing'})
    .id(kinetic('mechanical_crafter'));

    event.shaped(Item.of("create:mechanical_harvester"), ['abc', 'bcb'], {a: "create:andesite_casing", b: 'create:andesite_alloy', c: 'emendatusenigmatica:zinc_plate'})
    .id(kinetic('mechanical_harvester'));

    event.shaped(Item.of("create:mechanical_press"), [' a ', 'bcb', 'ddd'], {a: "create:piston_extension_pole", b: "extendedgears:steel_cogwheel",
    c: "create:andesite_casing", d: "emendatusenigmatica:steel_block"}).id(kinetic('mechanical_press'));

    event.shaped(Item.of('create:whisk'), [' a ', 'bab', 'bbb'], {a: 'create:andesite_alloy', b: 'emendatusenigmatica:zinc_plate'})
    .id(kinetic('whisk'))

    event.shaped(Item.of("create:mechanical_mixer"), [' a ', 'bcb', ' d '], {a: "create:piston_extension_pole", b: "extendedgears:steel_cogwheel",
    c: "create:andesite_casing", d: "create:whisk"}).id(kinetic('mechanical_mixer'));

    event.shaped(Item.of('create:mechanical_saw'), [' b ', 'abc', ' b '], {a: "create:andesite_casing", b: "create:andesite_alloy", c: "immersiveengineering:sawblade"})
    .id(kinetic('mechanical_saw'));

    event.shaped(Item.of('create:mechanical_drill'), [' b ', 'abc', ' b '], {a: "create:andesite_casing", b: "create:andesite_alloy", c: "immersiveengineering:drillhead_steel"})
    .id(kinetic('mechanical_drill'));

    event.replaceInput({id: (kinetic('mechanical_bearing'))}, 'create:andesite_casing', 'create:gearbox');

    event.shaped(Item.of('create:mechanical_plough'), [' a ', 'bcb', 'bcb'], {a: 'create:andesite_casing', b: 'create:andesite_alloy', c: "emendatusenigmatica:steel_plate"})
    .id(kinetic('mechanical_plough'));

    event.shaped(Item.of('create:mechanical_pump'), ['aba'], {a: "create:fluid_pipe", b: "extendedgears:iron_cogwheel"})
    .id(kinetic('mechanical_pump'));

    event.shaped(Item.of('create:shaft', 4), [' a ', ' a '], {a: "create:andesite_alloy"}).id(kinetic('shaft'));

    event.shaped(Item.of('create:hand_crank'), ['a  ', 'bbb', '  c'], {a: "create:andesite_alloy", b: '#forge:treated_wood', c: "create:shaft"})
    .id(kinetic('hand_crank'));

    event.replaceInput({id: (kinetic('gearbox'))}, 'extendedgears:iron_cogwheel', 'extendedgears:copper_cogwheel');

    event.shaped(Item.of('create:clutch'), [' a ', 'bcb', ' a '], {a: "minecraft:redstone", b: "create:shaft", c: "create:andesite_casing"})
    .id(kinetic('clutch'));

    event.shaped(Item.of('create:gearshift'), ['a a', 'bcb', 'a a'], {a: "minecraft:redstone", b: "create:shaft", c: "create:andesite_casing"})
    .id(kinetic('gearshift'));

    event.shaped(Item.of('create:encased_fan'), ['abc'], {a: "create:andesite_casing", b: "create:propeller", c: "quark:grate"})
    .id(kinetic('encased_fan'));

    event.shaped(Item.of('create:millstone'), [' a ', 'bcb', 'ddd'], {a: "#forge:treated_wood", b: "extendedgears:iron_cogwheel", c: "create:andesite_casing", d: "create:cut_andesite"})
    .id(kinetic('millstone'));

    event.replaceInput({id: (kinetic('empty_blaze_burner'))}, '#ad_astra_platform:iron_plates', "emendatusenigmatica:steel_plate");

    event.shaped(Item.of('create:depot'), [' a ', ' b '], {a: "create:cut_andesite", b: "create:andesite_casing"})
    .id(kinetic('depot'));

    event.shaped(Item.of('create:chute', 2), ['aa', 'bb'], {a: "emendatusenigmatica:steel_ingot", b: "emendatusenigmatica:iron_plate"})
    .id(kinetic('chute'));

    event.shaped(Item.of('create:smart_chute'), ['aba', ' c '], {a: "emendatusenigmatica:brass_plate", b: "create:chute", c: "create:electron_tube"})
    .id(kinetic('smart_chute'));

    event.shaped(Item.of('create:windmill_bearing'), [' a ', 'bcb', ' d '], {a: 'create:mechanical_bearing', b: "create:cut_andesite", c: "create:andesite_casing", d: "create:shaft"})
    .id(kinetic('windmill_bearing'));

    event.replaceInput({id: (kinetic('cart_assembler'))}, '#minecraft:logs', '#forge:treated_wood');

    event.recipes.createMechanicalCrafting(Item.of('create:deployer'), [' a ', 'bcd'], {a: "create:electron_tube", b: "create:piston_extension_pole", c: "create:andesite_casing", d: "create:brass_hand"})
    .id(kinetic('deployer'));

    event.replaceInput({id: (logistic('redstone_contact'))}, 'minecraft:cobblestone', "create:cut_tuff");

    event.recipes.createMechanicalCrafting(Item.of('create:sequenced_gearshift'), ['bacd'], {a: "rftoolscontrol:cpu_core_2000", b: "create:shaft", c: "create:brass_casing", d: "create:shaft"})
    .id(kinetic('sequenced_gearshift'));

    event.shaped(Item.of('create:rotation_speed_controller'), [' a ', 'bcb', 'ddd'], {a: "create:precision_mechanism", b: "emendatusenigmatica:brass_ingot", c: "create:brass_casing", d: "emendatusenigmatica:brass_plate"})
    .id(kinetic('rotation_speed_controller'));

    event.shaped(Item.of('create:item_vault'), ['aba', ' c ', 'aba'], {a: "create:andesite_alloy", b: "emendatusenigmatica:lead_plate", c: "minecraft:barrel"})
    .id(kinetic('item_vault'));

    event.replaceInput({id: (kinetic('display_board'))}, 'create:electron_tube', "extendedgears:iron_cogwheel");

    event.replaceInput({id: (kinetic('item_drain'))}, 'minecraft:iron_bars', 'quark:grate');

    event.shaped(Item.of('create:shaft', 2), [' a ', ' b ', ' a '], {a: 'create:andesite_alloy', b: 'emendatusenigmatica:copper_rod'})
    .id(kinetic('shaft'));

    event.shaped(Item.of('create:andesite_mechanism'), ['abc', 'cde', 'ccf'], {a: 'emendatusenigmatica:zinc_rod', b: 'emendatusenigmatica:copper_rod', c: 'create:cut_andesite',
    d: 'emendatusenigmatica:zinc_plate', e: 'create:cogwheel', f: 'minecraft:copper_ingot'}).id('fits:shaped/create/andesite_mechanism');

    event.recipes.create.mixing([Item.of('create:copper_mechanism')], [Fluid.of('lava', 220), Item.of('copper_ingot', 4), Item.of('create:andesite_mechanism'), Item.of('emendatusenigmatica:steel_ingot')])
    .id('fits:compacting/create/copper_mechanism')
    
    event.shaped(Item.of('create:basin'), ['a a', 'a a', 'aaa'], {a: 'dustrial_decor:cast_iron_billet'})
    .id(kinetic('basin'))

    event.shaped(Item.of('create:electron_tube'), ['a', 'b'], {a: 'create:polished_rose_quartz', b: 'emendatusenigmatica:silver_plate'})
    .id('create:crafting/materials/electron_tube')
    event.recipes.create.deploying([Item.of('create:electron_tube')], [Item.of('emendatusenigmatica:silver_plate'), Item.of('create:polished_rose_quartz')])
    .id('create:deploying/materials/electron_tube')

    event.replaceInput({id: 'sliceanddice:sprinkler'}, 'iron_bars', 'quark:grate')

    event.replaceInput({id: 'create:crafting/materials/sand_paper'}, 'sand', 'emendatusenigmatica:brass_nugget')
    








})