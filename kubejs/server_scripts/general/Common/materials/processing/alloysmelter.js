ServerEvents.recipes(event =>{
	event.custom({
		type: 'immersiveengineering:alloy',
		input0: Item.of('emendatusenigmatica:steel_ingot').toJson(),
		input1: { tag: 'minecraft:leaves', count: 3 },
	result: { base_ingredient: { tag: 'forge:ingots/steeleaf' }, count: 1 }, time: 200 }).id(`${alloysmelter_prefix}steeleaf`)
	event.custom({
		type: alloy_furnace,
		input0: Item.of('emendatusenigmatica:raw_lead').toJson(),
		input1: { item: 'emendatusenigmatica:raw_lead'},
	result: { base_ingredient: { item: 'emendatusenigmatica:lead_ingot' }, count: 2 }, time: 200 }).id(`${alloysmelter_prefix}lead_ingot`)
	event.remove([{type: 'smelting', output: 'emendatusenigmatica:lead_ingot'},
{type: "blasting", output: 'emendatusenigmatica:lead_ingot'}])
	event.custom({
		type: alloy_furnace,
		input0: Item.of('emendatusenigmatica:lead_ingot').toJson(),
		input1: { tag: 'forge:ingots/iron', count: 2 },
	result: { base_ingredient: { tag: 'forge:ingots/leaded_iron' }, count: 3 }, time: 200 }).id(`${alloysmelter_prefix}leaded_iron`)
	event.custom({
		type: alloy_furnace,
		input0: Item.of('kubejs:porcelain_brick').toJson(),
		input1: { tag: 'forge:ingots/nether_brick', count: 3 },
	result: { base_ingredient: { tag: 'forge:ingots/porcelain_nether_brick' }, count: 4 }, time: 1000 }).id(`${alloysmelter_prefix}procelain_nether_brick`)
	event.remove({id: 'immersiveengineering:alloysmelter/brass'})
})