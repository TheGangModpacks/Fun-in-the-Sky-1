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
	event.create('leaded_iron').displayName('Leaded Iron')
	event.create('apatite_essence').displayName('Apatite Essence')
	event.create('silicon_essence').displayName('Silicon Essence')
	event.create('fluorite_essence').displayName('Fluorite Essence')
	event.create('sulfuric_essence').displayName('Sulfuric Essence')
	event.create('cinnabar_essence').displayName('Cinnabar Essence')
	event.create('incomplete_electrolytic_core').displayName('Incomplete Electrolytic Core').texture('mekanism:item/electrolytic_core')
	event.create('photovoltaic_cell_hardened')
	event.create('photovoltaic_cell_blazing')
	event.create('photovoltaic_cell_niotic')
	event.create('photovoltaic_cell_spirited')
	event.create('photovoltaic_cell_nitro')
})
StartupEvents.registry('block', event =>{
	event.create('dielectric_block').displayName('Dielectric Block').material('moss').hardness(0.5).tagBlock('minecraft:mineable/hoe').requiresTool(false)
	event.create('unprocessed_frame').displayName('Unprocessed Frame').material('metal').hardness(0.5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
})
	StartupEvents.registry('fluid', event =>{
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
    .displayName('Blaze Blood')
})