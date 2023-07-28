ItemEvents.toolTierRegistry(event =>{
	event.add('fluix', tier =>{
		tier.uses = 512
		tier.speed = 0.3
		tier.attackDamageBonus = 0.3
		tier.level = 2
		tier.enchantmentValue = 6
		tier.repairIngredient = 'ae2:fluix_crystal'
	})
})

StartupEvents.registry('item', event => {
	event.create('mk1circuit').displayName('MK1 Circuit')
	event.create('mk2circuit').displayName('MK2 Circuit')
	event.create('mk3circuit').displayName('MK3 Circuit')
	event.create('mk4circuit').displayName('MK4 Circuit')
	event.create('mk5circuit').displayName('MK5 Circuit')
	event.create('incomplete_certus_wrench').displayName('Incomplete Certus Wrench').texture('ae2:item/certus_quartz_wrench')
	event.create('incomplete_quartz_wrench').displayName('Incomplete Quartz Wrench').texture('ae2:item/nether_quartz_wrench')
	event.create('incomplete_basic_processor').displayName('Incomplete Raw Basic Processor').texture('refinedstorage:item/raw_basic_processor')
	event.create('incomplete_improved_processor').displayName('Incomplete Raw Improved Processor').texture('refinedstorage:item/raw_improved_processor')
	event.create('incomplete_advanced_processor').displayName('Incomplete Raw Advanced Processor').texture('refinedstorage:item/raw_advanced_processor')
	event.create('leaded_iron_compound').displayName('Leaded Iron Compound')
	event.create('leaded_iron').displayName('Leaded Iron').tag('forge:ingots').tag('forge:ingots/leaded_iron')
	event.create('apatite_essence').displayName('Apatite Essence')
	event.create('fluorite_essence').displayName('Fluorite Essence')
	event.create('sulfuric_essence').displayName('Sulfuric Essence')
	event.create('cinnabar_essence').displayName('Cinnabar Essence')
	event.create('incomplete_electrolytic_core').displayName('Incomplete Electrolytic Core').texture('mekanism:item/electrolytic_core')
	event.create('photovoltaic_cell_hardened')
	event.create('photovoltaic_cell_blazing')
	event.create('photovoltaic_cell_niotic')
	event.create('photovoltaic_cell_spirited')
	event.create('photovoltaic_cell_nitro')
	event.create('porcelain_brick').tag('forge:ingots').tag('forge:ingots/porcelain_brick')
	event.create('porcelain_nether_brick').tag('forge:ingots').tag('forge:ingots/porcelain_nether_brick')
	event.create('fluoridian_crystal').tag('forge:gems/fluoridium').tag('forge:gems')
	event.create('archaic_gold_ingot').tag('forge:ingots').tag('forge:ingots/archaic_gold').fireResistant(true).rarity("uncommon")
	event.create('archaic_pink_gold_ingot').tag('forge:ingots').tag('forge:ingots/archaic_pink_gold').fireResistant(true).rarity("uncommon")
	event.create('meteorite_sample').maxStackSize(1).fireResistant(true).rarity('supreme')
	event.create('ae2:printed_fusion_processor')
	event.create('ae2:fusion_processor')
	event.create('ae2:fusion_processor_press')
	event.create('ae2:dilithium_crystal')
	event.create('create:andesite_mechanism')
	event.create('create:copper_mechanism')
	//Food
	event.create('cooked_apple').food(food => { food.hunger(8).saturation(1) })
	//Tools
	event.create('ae2:fluix_cutting_knife', 'sword').tier('fluix').unstackable().group('tools')
})
StartupEvents.registry('block', event => {
	event.create('dielectric_block').material('moss').hardness(0.5).tagBlock('minecraft:mineable/hoe')
	event.create('unprocessed_frame').material('metal').hardness(0.5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('compressed_cobblestone_x1').material('deepslate').hardness(1.0).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('compressed_cobblestone_x2').material('deepslate').hardness(1.3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('compressed_cobblestone_x3').material('deepslate').hardness(1.5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('compressed_sand_x1', 'falling').material('sand').hardness(1.0).tagBlock('minecraft:mineable/shovel').requiresTool(true)
	event.create('compressed_sand_x2', 'falling').material('sand').hardness(1.3).tagBlock('minecraft:mineable/shovel').requiresTool(true)
	event.create('compressed_sand_x3', 'falling').material('sand').hardness(1.5).tagBlock('minecraft:mineable/shovel').requiresTool(true)
	event.create('compressed_gravel_x1', 'falling').material('dirt').hardness(1.0).tagBlock('minecraft:mineable/shovel').requiresTool(true)
	event.create('compressed_gravel_x2', 'falling').material('dirt').hardness(1.3).tagBlock('minecraft:mineable/shovel').requiresTool(true)
	event.create('compressed_gravel_x3', 'falling').material('dirt').hardness(1.5).tagBlock('minecraft:mineable/shovel').requiresTool(true)
	event.create('archaic_gold_block').tagBlock('minecraft:mineable/pickaxe').tag('forge:storage_blocks').tag('forge:storage_blocks/archaic_gold').material('copper').requiresTool(true)
	event.create('meteorite').tagBlock('minecraft:mineable/pickaxe').tagBlock('forge:needs_netherite_tool').material('gilded_blackstone').requiresTool(true).hardness(6.0).resistance(6.0)
	event.create('block_of_silicon').tagBlock('minecraft:mineable/hoe').material('honey').requiresTool(false).hardness(3.2).resistance(6.0)
})
StartupEvents.registry('fluid', event => {
	event.create('blitz_blood')
		.thickTexture(0xE2E3C5)
		.bucketColor(0xE2E3C5)
		.displayName('Blitz Blood'),
	event.create('liquifacted_graphite')
		.thickTexture(0x373737)
		.bucketColor(0x373737)
		.displayName('Liquifacted Graphite'),
	event.create('basalz_blood')
		.thickTexture(0x29110D)
		.bucketColor(0x29110D)
		.displayName('Basalz Blood'),
	event.create('raw_oil_mixture')
		.thinTexture(0x544227)
		.bucketColor(0x544227)
		.displayName('Raw Oil Mixture'),
	event.create('blaze_blood')
		.thickTexture(0xFFA300)
		.bucketColor(0xFFA300)
		.displayName('Blaze Blood'),
	event.create('carbon_dioxide_liquid')
		.thinTexture(0xFFFFFF)
		.noBucket()
		.noBucket()
		.displayName('Carbon Dioxide Liquid')
	event.create('calcium_hydroxide_liquid')
		.thinTexture(0xC6E2D9)
		.noBucket()
		.noBlock()
		.displayName('Calcium Hydroxide Liquid'),
	event.create('lithium_peroxide_liquid')
		.thinTexture(0x7a5700)
		.noBucket()
		.noBlock()
		.displayName('Lithium Peroxide Liquid'),
	event.create('melted_bitumen')
		.thickTexture(0x2C2C44)
		.displayName('Melted Bitumen'),
	event.create('liquifacted_tar')
		.thickTexture(0x0D0D14)
		.displayName('Liquifacted Tar'),
	event.create('witched_beeswax')
		.thinTexture(0x69353a)
	event.create('energetic_substance')
		.thickTexture(0xff4600)
})