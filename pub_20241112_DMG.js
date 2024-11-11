var iFileName = "pub_20241112_DMG.js";
RequiredSheetVersion("13.2.1");
SourceList.DMG2024 = {
  name: "2024 Dungeon Master's Guide",
  abbreviation: "DMG2024",
  abbreviationSpellsheet: "D4",
  group: "Core Sources",
  url: "https://marketplace.dndbeyond.com/category/3710000?pid=DB3710000",
  date: "2024/11/12",
};
// Coded By: ThePokésimmer with contributions from Reading Toskr and TrackAtNite
//Functions
MagicItemsList["adamantine armor"] = {
	name : "Adamantine Armor",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "armor (medium or heavy)",
	rarity : "uncommon",
	description : "This armor is reinforced with adamantine, one of the hardest substances in existence. While I'm wearing it, any Critical Hit against me becomes a normal hit.",
	descriptionFull : "This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you’re wearing it, any Critical Hit against you becomes a normal hit.",
	allowDuplicates : true,
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "brackets",
		itemName1stPage : ["suffix", "Adamantine"],
		descriptionChange : ["prefix", "armor"],
		excludeCheck : function (inObjKey, inObj) {
			return !(/medium|heavy/i).test(inObj.type) || (/hide/i).test(inObj.name);
		}
	}
};
MagicItemsList["adamantine ammunition"] = {
	name : "Adamantine Ammunition",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "weapon (any ammunition)",
	rarity : "uncommon",
	description : "Whenever ammunition made or coated with adamantine hits an object, the hit is a critical hit.",
	descriptionFull : "This weapon or piece of ammunition is made of adamantine, one of the hardest substances in existence. Whenever this weapon or piece of ammunition hits an object, the hit is a Critical Hit.",
	allowDuplicates : true,
	chooseGear : {
		type : "ammo",
		prefixOrSuffix : "brackets",
		itemName1stPage : ["suffix", "Adamantine"],
		descriptionChange : ["replace", "ammunition"],
		excludeCheck : function (inObjKey, inObj) {
			return /vials|flasks/i.test(inObj.icon);
		}
	}
};
MagicItemsList["adamantine weapon"] = {
	name : "Adamantine Weapon",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "weapon (any melee)",
	rarity : "uncommon",
	description : "Whenever a weapon made or coated with adamantine hits an object, the hit is a critical hit.",
	descriptionFull : "This weapon or piece of ammunition is made of adamantine, one of the hardest substances in existence. Whenever this weapon or piece of ammunition hits an object, the hit is a Critical Hit.",
	allowDuplicates : true,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		itemName1stPage : ["suffix", "Adamantine"],
		descriptionChange : ["replace", "weapon"],
		excludeCheck : function (inObjKey, inObj) {
			return inObj.list != "melee";
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.theWea.list == "melee" && /adamantine/i.test(v.WeaponTextName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Always critical hits on objects';
				}
			},
			'If I include the word "Adamantine" in the name of a melee weapon, it will be treated as the magic item Adamantine Weapon. Whenever it hits an object, it automatically scores a critical hit.'
		]
	}
};
MagicItemsList["alchemy jug"] = {
	name : "Alchemy Jug",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "As a magic action, command the jug to produce liquid; or a utilize action to uncorked it and pour 2 gal/min. After producing, it only makes the same up to its max, until next dawn. Acid (8 fl oz), basic poison (4 fl oz), beer (4 gal), honey/wine (1 gal), fresh water (8 gal), mayonnaise/vinegar (2 gal), oil (1 qt),  salt water (12 gal).",
	descriptionLong : "A heavy ceramic jug. As a magic action, the jug can be commanded to hold a chosen liquid. With a utilize action, I can uncork the jug and pour the liquid out at 2 gallons per minute. Once commanded to produce a liquid, it can't produce a different one or more than the maximum of one, until the next dawn.\rLiquids (with maximum): acid (8 fl. oz.), basic poison (4 fl. oz.), beer (4 gallons), honey (1 gallon), mayonnaise (2 gallons), oil (1 quart), vinegar (2 gallons), fresh water (8 gallons), salt water (12 gallons), wine (1 gallon).",
	descriptionFull : "This ceramic jug appears to be able to hold a gallon of liquid and weighs 12 pounds whether full or empty. The jug sloshes when it is shaken, even if the jug is empty."+
	"\n   You can take a Magic action and name one liquid from the Alchemy Jug Liquids table to cause the jug to produce the chosen liquid. Afterward, you can uncork the jug as a Utilize action and pour that liquid out, up to 2 gallons per minute. The maximum amount of liquid the jug can produce depends on the liquid you named."+
	"\n   Once the jug starts producing a liquid, it can’t produce a different one, or more of one that has reached its maximum, until the next dawn.\n\n"+
	toUni("Max\t\tLiquid")+ "\n8 ounces\t\tAcid\n4 ounces\t\tBasic poison\n4 gallons\t\tBeer\n1 gallon\t\tHoney\n2 gallons\t\tMayonnaise\n1 quart\t\tOil\n2 gallons\t\tVinegar\n8 gallons\t\tWater, fresh\n12 gallons\tWater, salt\n1 gallon\t\tWine",
	weight : 12
};
MagicItemsList["ammunition, +1, +2, or +3"] = {
	name : "Ammunition, +1, +2, or +3",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "weapon (any ammunition)",
	description : "I have a bonus to attack and damage rolls made with this piece of magic ammunition. The bonus is determined by the rarity of the magic item: uncommon (+1), rare (+2), or very rare (+3). Once it hits a target, the ammunition is no longer magical. Select the bonus using the little square button in this magic item line.",
	descriptionFull : "You have a bonus to attack and damage rolls made with this piece of magic ammunition. The bonus is determined by the rarity of the ammunition: uncommon (+1), rare (+2), or very rare (+3). Once it hits a target, the ammunition is no longer magical.",
	allowDuplicates : true,
	chooseGear : {
		type : "ammo",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "ammunition"]
	},
	choices : ["+1 Ammunition (uncommon)", "+2 Ammunition (rare)", "+3 Ammunition (very rare)"],
	"+1 ammunition (uncommon)" : {
		name : "Ammunition +1",
		nameTest : "+1 Ammunition",
		rarity : "uncommon",
		magicItemTable : "?",
		description : "I have a +1 bonus to attack and damage rolls made with this magic ammunition. Once it hits a target, the ammunition is no longer magical.",
		allowDuplicates : true
	},
	"+2 ammunition (rare)" : {
		name : "Ammunition +2",
		nameTest : "+2 Ammunition",
		rarity : "rare",
		magicItemTable : "?",
		description : "I have a +2 bonus to attack and damage rolls made with this magic ammunition. Once it hits a target, the ammunition is no longer magical.",
		allowDuplicates : true
	},
	"+3 ammunition (very rare)" : {
		name : "Ammunition +3",
		nameTest : "+3 Ammunition",
		rarity : "very rare",
		magicItemTable : "?",
		description : "I have a +3 bonus to attack and damage rolls made with this magic ammunition. Once it hits a target, the ammunition is no longer magical.",
		allowDuplicates : true
	}
};
MagicItemsList["ammunition of slaying"] = {
	name : "Ammunition of Slaying",
	nameTest : "of Slaying",
	source : [["DMG2024", "-"]],
	type : "weapon (any ammunition)",
	rarity : "very rare",
	magicItemTable : "?",
	description : "This magic ammunition is meant to hurt a particular race, type, or group of creatures. Its specificity varies. If an associated target is hit by this ammunition, it takes +6d10 piercing damage. It can then make a DC 17 Con save to half this extra damage. After dealing its extra damage, the ammunition becomes nonmagical.",
	descriptionFull : "This magic ammunition is meant to slay creatures of a particular type, which the DM chooses or determines randomly by rolling on the table below. If a creature of that type takes damage from the ammunition, the creature makes a DC 17 Constitution saving throw, taking an extra 6d10 Force damage on a failed save or half as much extra damage on a successful one.\n   After dealing its extra damage to a creature, the ammunition becomes nonmagical.\n\n"+
	toUni("1d100\tCreature Type") + "\n01-10\tAberrations\t\n11-15\tBeasts\n16-20\tCelestials\n21-25\tConstructs\n26-35\tDragons\t\n36-45\tElementals\n46-50\tHumanoids\t\n51-60\tFey\n61-70\tFiends\n71-75\tGiants\n76-80\tMonstrosities\n81-85\tOozes\n86-90\tPlants\n91-00\tUndead",
	allowDuplicates : true,
	chooseGear : {
		type : "ammo",
		prefixOrSuffix : "prefix",
		descriptionChange : ["replace", "ammunition"]
	}
};
MagicItemsList["amulet of health"] = {
	name : "Amulet of Health",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "My Constitution score is 19 while I'm wearing this amulet, provided that my Constitution is not already 19 or higher.",
	descriptionFull : "Your Constitution is 19 while you wear this amulet. It has no effect on you if your Constitution is 19 or higher without it.",
	attunement : true,
	weight : 1,
	scoresOverride : [0, 0, 19, 0, 0, 0]
};
MagicItemsList["amulet of proof against detection and location"] = {
	name : "Amulet of Proof against Detection and Location",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	attunement : true,
	description : "While wearing this amulet, I am hidden from Divination magic. I can't be targeted by such magic or perceived through magical scrying sensors, unless I allow it.",
	descriptionFull : "While wearing this amulet, you can’t be targeted by Divination spells or perceived through magical scrying sensors unless you allow it.",
	weight : 1
};
MagicItemsList["amulet of the planes"] = { // contains contributions by Larry Hoy
	name : "Amulet of the Planes",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "?",
	description : "As an action, I name a location that I am familiar with on another plane of existence and make a DC 15 Int check. On a success, I cast Plane Shift. On a failure, all creatures/objects within 15 ft of me and myself travel to (d100): [1-60] a random location on the named plane, or [61-100] a randomly determined plane.",
	descriptionFull : "While wearing this amulet, you can take a magic action to name a location that you are familiar with on another plane of existence. Then make a DC 15 Intelligence (Arcana) check. On a successful check, you cast Plane Shift. On a failed check, you and each creature and object within 15 feet of you travel to a random destination by rolling 1d100 and consulting the following table.\n\n"+
	toUni("1d100\tDestination") + "\n01-60\tRandom location on the plane you named.\n61-70\tRandom location on an Inner Plane determined by rolling 1d6: on a 1, the Plane of Air; on a 2,\n\tthe Plane of Earth; on a 3, the Plane of Fire; on a 4, the Plane of Water; on a 5, the Feywild; on a 6,\n\tthe Shadowfell.\n71-80\tRandom location on an Outer Plane determined by rolling 1d8: on a 1, Arborea; on a 2, Arcadia; \n\ton a 3, the Beastlands; on a 4, Bytopia; on a 5, Elysium; on a 6, Mechanus; on a 7, Mount Celestia; \n\ton an 8, Ysgard.\n81-90\tRandom location on an Outer Plane determined by rolling 1d8: on a 1, the Abyss; on a 2, Acheron; \n\ton a 3, Carceri; on a 4, Gehenna; on a 5, Hades; on a 6, Limbo; on a 7, the Nine Hells; on an 8, \n\tPandemonium.\n91-00 \tRandom location on the Astral Plane",
	attunement : true,
	weight : 1,
	spellcastingAbility : "class",
	spellcastingBonus : {
		name : "DC 15 Int check",
		spells : ["plane shift"],
		selection : ["plane shift"],
		firstCol : "atwill"
	},
	spellChanges : {
		"plane shift" : {
			description : "DC 15 Int to cast; Me + 8 willing transport to other plane, or spell atk + save to move to random plane",
			components : "V,M\u0192",
			changes : "The spell can be cast at will, but requires a DC 15 Intelligence check to do so, with negative consequences on a failure."
		}
	}
};
MagicItemsList["animated shield"] = { // contributed by Larry Hoy
	name : "Animated Shield",
	source : [["DMG2024", "-"]],
	type : "shield",
	rarity : "very rare",
	magicItemTable : "?",
	description : "As a bonus action, I speak the command word to animate this shield for 1 minute, until I use a bonus action to end this effect (returns to my hand), or until I am incapacitated or die (falls to ground). The shield leaps into the air, hovering in my space to protect me as if I were wielding it, leaving my hands free.",
	descriptionFull : "While holding this Shield, you can take a Bonus Action to cause it to animate. The Shield leaps into the air and hovers in your space to protect you as if you were wielding it, leaving your hands free. The Shield remains animate for 1 minute, until you take a Bonus Action to end this effect, or until you die or have the Incapacitated condition, at which point the Shield falls to the ground or into your hand if you have one free.",
	attunement : true,
	weight : 6,
	action : [["bonus action", ""]],
	shieldAdd : "Animated Shield"
};
MagicItemsList["apparatus of kwalish"] = { // contributed by Larry Hoy
	name : "Apparatus of Kwalish",
	nameAlt : "Apparatus of the Crab",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "legendary",
	magicItemTable : "?",
	description: "A Large 500 lb iron barrel. DC 20 Intelligence (Investigation) check finds a hidden hatch at one end, allowing two Medium creatures inside. Transforms to resemble a giant lobster, which is air-tight (10 hours of breathable air), floats, and can submerge to 900 ft deep. See Notes page for its statistics and operation.",
	descriptionLong: "A Large sealed iron barrel weighing 500 lb. A successful DC 20 Intelligence (Investigation) check finds a hidden catch unlocking a hatch at one end of the barrel, allowing two Medium or smaller creatures to crawl inside. Ten levers are set in a row at the far end, each in a neutral position, able to move either up or down. Certain levers transform the barrel to resemble a giant lobster, which is air-tight (10 hours of breathable air), floats, and submerges to a depth of 900 ft. See Notes page for its statistics and operation.",
	descriptionFull : "This item first appears to be a sealed iron barrel weighing 500 pounds. The barrel has a hidden catch, which can be found with a successful DC 20 Intelligence (Investigation) check. Releasing the catch unlocks a hatch at one end of the barrel, allowing two Medium or smaller creatures to crawl inside. Ten levers are set in a row at the far end, each in a neutral position, able to move up or down. When certain levers are used, the apparatus transforms to resemble a giant lobster.\n   The apparatus of Kwalish is a Large object with the following statistics:\n   Armor Class: 20\n   Hit Points: 200\n   Speed: 30 ft., swim 30 ft. (or 0 ft. for both if the legs and tail aren't extended)\n   Damage Immunities: poison, psychic\n   To be used as a vehicle, the apparatus requires one pilot. While the apparatus’s hatch is closed, the compartment is airtight and watertight. The compartment holds enough air for 10 hours of breathing, divided by the number of breathing creatures inside.\n   The apparatus floats on water. It can also go underwater to a depth of 900 feet. Below that, the vehicle takes 2d6 Bludgeoning damage each minute from pressure.\n   A creature in the compartment can take a Utilize action to move as many as two of the apparatus’s levers up or down. After each use, a lever goes back to its neutral position. Each lever, from left to right, functions as shown in the Apparatus of Kwalish Levers table.\n\n"+ 
	toUni("Lever\tUp\tDown") + "\n1\tLegs extend, allowing the apparatus to walk and swim.\tLegs retract, reducing the apparatus's Speed and Swim Speed to 0 and making it unable to benefit from bonuses to speed.\n2\tForward window shutter opens.\tForward window shutter closes.\n3\tSide window shutters open (two per side).\tSide window shutters close (two per side).\n4\tTwo claws extend from the front sides of the apparatus.\tThe claws retract.\n5\tEach extended claw makes the following melee weapon attack: +8 to hit, reach 5 ft., one target. Hit: 7 (2d6) bludgeoning damage.\tEach extended claw makes the following melee weapon attack: +8 to hit, reach 5 ft., one target. Hit: The target is grappled (escape DC 15).\n6\tThe apparatus walks or swims forward provided its legs are extended.\tThe apparatus walks or swims backward provided its legs are extended.\n7\tThe apparatus turns 90 degrees counterclockwise provided its legs are extended.\tThe apparatus turns 90 degrees clockwise provided its legs are extended.\n8\tEyelike fixtures emit bright light in a 30-foot radius and dim light for an additional 30 feet.\tThe light turns off.\n9\tThe apparatus sinks as much as 20 feet if it's in liquid.\tThe apparatus rises up to 20 feet if it's in liquid.\n10\tThe rear hatch unseals and opens.\tThe rear hatch closes and seals.",
	weight : 500,
	toNotesPage : [{
		name : "Statistics \u0026 Lever Operation Details",
		note : [
			"This item first appears to be a Large sealed iron barrel weighing 500 pounds. The barrel has a hidden catch, which can be found with a successful DC 20 Intelligence (Investigation) check. Releasing the catch unlocks a hatch at one end of the barrel, allowing two Medium or smaller creatures to crawl inside. Ten levers are set in a row at the far end, each in a neutral position, able to move either up or down. When certain levers are used, the apparatus transforms to resemble a giant lobster.",
			"The apparatus of Kwalish is a Large object with the following statistics:",
			"  \u2022 Armor Class: 20",
			"  \u2022 Hit Points: 200",
			"  \u2022 Speed: 30 ft, swim 30 ft (only with legs & tail extended)",
			"  \u2022 Damage Immunities: poison, psychic",
			"To be used as a vehicle, the apparatus requires one pilot. While the apparatus's hatch is closed, the compartment is airtight and watertight. The compartment holds enough air for 10 hours of breathing, divided by the number of breathing creatures inside.",
			"The apparatus floats on water. It can also go underwater to a depth of 900 feet. Below that, the vehicle takes 2d6 bludgeoning damage per minute from pressure.",
			"A creature in the compartment can use an action to move as many as two of the apparatus's levers up or down. After each use, a lever goes back to its neutral position. Each lever, from left to right, functions as shown in the Apparatus of Kwalish Levers table.\n\nLEVER\tUP\t\t\tDOWN",
			"01\tLegs extend (speeds: 30 ft)\tLegs/tail retract (speeds: 0)",
			"02\tForward shutter opens\t\tForward shutter closes",
			"03\tSide shutters open (two per side)\tSide shutters close",
			"04\tClaws extend from front sides\tClaws retract",
			"05\tClaw: +8, 5 ft, 2d6 bludgeoning\tClaw: +8, 5 ft, DC 15 grapple",
			"06\tWalk or swim forward\t\tWalk or swim backward",
			"07\tTurn 90 degrees left\t\tTurn 90 degrees right",
			"08\tEyes emit 30 ft bright + dim light\tEye lights turn off",
			"09\tSink up to 20 ft in liquid\tRise up to 20 ft in liquid",
			"10\tRear hatch unseals and opens\tRear hatch closes and seals"
		]
	}]
};
MagicItemsList["armor, +1, +2, or +3"] = {
	name : "Armor, +1, +2, or +3",
	source : [["DMG2024", "-"]],
	type : "armor (light, medium, or heavy)",
	description : "I have a bonus to AC while wearing this armor. The bonus is determined by the rarity of the magic item: rare (+1), very rare (+2), or legendary (+3). Select the bonus using the little square button in this magic item line.",
	descriptionFull : "You have a bonus to AC while wearing this armor. The bonus is determined by its rarity: rare (+1), very rare (+2), or legendary (+3).",
	allowDuplicates : true,
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "brackets",
		descriptionChange : ["prefix", "armor"]
	},
	choices : ["+1 AC bonus (rare)", "+2 AC bonus (very rare)", "+3 AC bonus (legendary)"],
	"+1 ac bonus (rare)" : {
		name : "Armor +1",
		nameTest : "+1 Armor",
		rarity : "rare",
		description : "I have a +1 bonus to AC while wearing this armor.",
		allowDuplicates : true
	},
	"+2 ac bonus (very rare)" : {
		name : "Armor +2",
		nameTest : "+2 Armor",
		rarity : "very rare",
		description : "I have a +2 bonus to AC while wearing this armor.",
		allowDuplicates : true
	},
	"+3 ac bonus (legendary)" : {
		name : "Armor +3",
		nameTest : "+3 Armor",
		rarity : "legendary",
		description : "I have a +3 bonus to AC while wearing this armor.",
		allowDuplicates : true
	}
};
MagicItemsList["armor of gleaming"] = {
	name : "Armor of Gleaming",
	nameTest : "of Gleaming",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "armor (medium, or heavy)",
	rarity : "common",
	description : "This armor never gets dirty.",
	descriptionFull : "This armor never gets dirty.",
	allowDuplicates : true,
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "prefix",
		descriptionChange : ["prefix", "armor"],
		excludeCheck : function (inObjKey, inObj) {
			return !(/medium|heavy/i).test(inObj.type);
		}
	}
};
MagicItemsList["armor of invulnerability"] = { // contains contributions by Larry Hoy
	name : "Armor of Invulnerability",
	source : [["DMG2024", "-"]],
	type : "armor (plate)",
	rarity : "legendary",
	magicItemTable : "?",
	description : "I have resistance to nonmagical damage while I wear this plate armor. As an action, I can make myself immune to nonmagical damage for 10 minutes or until I am no longer wearing the armor. Once this special action is used, it can't be used again until the next dawn.",
	descriptionFull : "You have Resistance to Bludgeoning, Piercing, and Slashing damage while you wear this armor. Metal Shell: You can take a Magic action to give yourself Immunity to Bludgeoning, Piercing, and Slashing damage for 10 minutes or until you are no longer wearing the armor. Once this property is used, it can’t be used again until the next dawn.",
	attunement : true,
	weight : 65,
	usages: 1,
	recovery: "dawn",
	action : [["action", " (immunity)"]],
	dmgres : [["Bludgeoning", "Piercing", "Slashing"]],
	armorAdd : "Armor of Invulnerability",
	armorOptions : {
		regExpSearch : /^(?=.*armor)(?=.*invulnerability).*$/i,
		name : "Armor of Invulnerability",
		source: [["SRD", 208], ["D", 152]],
		type : "heavy",
		ac : 18,
		stealthdis : true,
		weight : 65,
		strReq : 15
	}
};
MagicItemsList["armor of resistance"] = {
	name : "Armor of Resistance",
	source : [["DMG2024", "-"]],
	type : "armor (light, medium, or heavy)",
	rarity : "rare",
	description : "Select the damage type that this armor gives resistance to using the square button in this line. While I'm wearing this armor and attuned to it, I gain resistance to one type of damage.",
	descriptionFull : "You have resistance to one type of damage while you wear this armor. The DM chooses the type or determines it randomly from the options below:\n\n" + toUni("d10\tType\t\td10\tType") + "\n 1\tAcid\t\t 6\tNecrotic\n 2\tCold\t\t 7\tPoison\n 3\tFire\t\t 8\tPsychic\n 4\tForce\t\t 9\tRadiant\n 5\tLightning   \t 10\tThunder",
	attunement : true,
	allowDuplicates : true,
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "prefix"
	},
	choices : ["Acid", "Cold", "Fire", "Force", "Lightning", "Necrotic", "Poison", "Psychic", "Radiant", "Thunder"],
	choicesNotInMenu : true,
	"acid" : {
		name : "Armor of Acid Resistance",
		description : "While I'm wearing this armor and I'm attuned to it, I have resistance to acid damage.",
		dmgres : ["Acid"]
	},
	"cold" : {
		name : "Armor of Cold Resistance",
		description : "While I'm wearing this armor and I'm attuned to it, I have resistance to cold damage.",
		dmgres : ["Cold"]
	},
	"fire" : {
		name : "Armor of Fire Resistance",
		description : "While I'm wearing this armor and I'm attuned to it, I have resistance to fire damage.",
		dmgres : ["Fire"]
	},
	"force" : {
		name : "Armor of Force Resistance",
		description : "While I'm wearing this armor and I'm attuned to it, I have resistance to force damage.",
		dmgres : ["Force"]
	},
	"lightning" : {
		name : "Armor of Lightning Resistance",
		description : "While I'm wearing this armor and I'm attuned to it, I have resistance to lightning damage.",
		dmgres : ["Lightning"]
	},
	"necrotic" : {
		name : "Armor of Necrotic Resistance",
		description : "While I'm wearing this armor and I'm attuned to it, I have resistance to necrotic damage.",
		dmgres : ["Necrotic"]
	},
	"poison" : {
		name : "Armor of Poison Resistance",
		description : "While I'm wearing this armor and I'm attuned to it, I have resistance to poison damage.",
		dmgres : ["Poison"]
	},
	"psychic" : {
		name : "Armor of Psychic Resistance",
		description : "While I'm wearing this armor and I'm attuned to it, I have resistance to psychic damage.",
		dmgres : ["Psychic"]
	},
	"radiant" : {
		name : "Armor of Radiant Resistance",
		description : "While I'm wearing this armor and I'm attuned to it, I have resistance to radiant damage.",
		dmgres : ["Radiant"]
	},
	"thunder" : {
		name : "Armor of Thunder Resistance",
		description : "While I'm wearing this armor and I'm attuned to it, I have resistance to thunder damage.",
		dmgres : ["Thunder"]
	}
};
MagicItemsList["armor of vulnerability"] = { // contains contributions by Larry Hoy
	name: "Armor of Vulnerability",
	source : [["DMG2024", "-"]],
	type : "armor (light, medium, or heavy)",
	rarity: "rare",
	magicItemTable : "?",
	description: "While wearing this armor, I have resistance to one of the following damage types: bludgeoning, piercing, or slashing; although, unfortunately, I have vulnerability to the other two until I am targeted by a Remove Curse spell.",
	descriptionFull: "While wearing this armor, you have Resistance to one of the following damage types: Bludgeoning, Piercing, or Slashing. The DM chooses the type or determines it randomly.\n   " + toUni("Curse") + ". This armor is cursed, a fact that is revealed only when the Identify spell is cast on the armor or you attune to it. Attuning to the armor curses you until you are targeted by a Remove Curse spell or similar magic; removing the armor fails to end the curse. While cursed, you have Vulnerability to two of the three damage types associated with the armor (not the one to which it grants Resistance).",
	attunement: true,
	allowDuplicates : true,
	cursed: true,
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "prefix"
	},
	choices : ["Bludgeoning", "Piercing", "Slashing"],
	choicesNotInMenu : true,
	"bludgeoning" : {
		description: "While wearing this armor, I have resistance to bludgeoning damage. Additionally, I have vulnerability to piercing and slashing damage until I am targeted by a Remove Curse spell.",
		dmgres : ["Bludgeoning"],
		savetxt : { text : ["Vulnerable to piercing \u0026 slashing damage"] },
		descriptionFull: "While wearing this armor, I have resistance to bludgeoning damage.\n   " + toUni("Curse") + ". This armor is cursed, a fact that is revealed only when an Identify spell is cast on the armor or I attune to it. Attuning to the armor curses me until I am targeted by the Remove Curse spell or similar magic; removing the armor fails to end the curse. While cursed, I have vulnerability to piercing and slashing damage."
	},
	"piercing" : {
		description: "While wearing this armor, I have resistance to piercing damage. Additionally, I have vulnerability to bludgeoning and slashing damage until I am targeted by a Remove Curse spell.",
		dmgres : ["Piercing"],
		savetxt : { text : ["Vulnerable to bludgeoning \u0026 slashing damage"] },
		descriptionFull: "While wearing this armor, I have resistance to piercing damage.\n   " + toUni("Curse") + ". This armor is cursed, a fact that is revealed only when an Identify spell is cast on the armor or I attune to it. Attuning to the armor curses me until I am targeted by the Remove Curse spell or similar magic; removing the armor fails to end the curse. While cursed, I have vulnerability to bludgeoning and slashing damage."
	},
	"slashing" : {
		description: "While wearing this armor, I have resistance to slashing damage. Additionally, I have vulnerability to bludgeoning and piercing damage until I am targeted by a Remove Curse spell.",
		dmgres : ["Slashing"],
		savetxt : { text : ["Vulnerable to bludgeoning \u0026 piercing damage"] },
		descriptionFull: "While wearing this armor, I have resistance to slashing damage.\n   " + toUni("Curse") + ". This armor is cursed, a fact that is revealed only when an Identify spell is cast on the armor or I attune to it. Attuning to the armor curses me until I am targeted by the Remove Curse spell or similar magic; removing the armor fails to end the curse. While cursed, I have vulnerability to bludgeoning and piercing damage."
	}
};
MagicItemsList["arrow-catching shield"] = { // contains contributions by Larry Hoy
	name : "Arrow-Catching Shield",
	source : [["DMG2024", "-"]],
	type : "shield",
	rarity : "rare",
	magicItemTable : "?",
	description : "I gain an additional +2 bonus to AC against ranged attacks while I wield this shield. This is not calculated into the AC on the 1st page. In addition, whenever an attacker makes a ranged attack against a target within 5 feet of me, I can use my reaction to become the target of the attack instead.",
	descriptionFull : "You gain a +2 bonus to Armor Class against ranged attack rolls while you wield this Shield. This bonus is in addition to the Shield’s normal bonus to AC. Whenever an attacker makes a ranged attack roll against a target within 5 feet of you, you can take a Reaction to become the target of the attack instead.",
	attunement : true,
	weight : 6,
	action : [["reaction", ""]],
	shieldAdd : "Arrow-Catching Shield (+\u200A2 vs. ranged)"
};
MagicItemsList["baba yaga's dancing broom"] = {
	name : "Baba Yaga's Dancing Broom",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	action : [["action", "Animate Broom"]],
	description : "As a Magic action, I can animate this broom turning it into an Animated Broom which follows directly after me in initiative and follows my commands (no action required) While animated if the broom is reduced to 0 HP it is destroyed. As a Bonus Action I can cause the broom to become Inanimate.",
	descriptionLong : "While holding the broom, you can take a Magic action to transform it into an Animated Broom under your control. The broom then moves into an unoccupied space as close to you as possible. The broom acts immediately after you in initiative and remains active until you use a Bns Action to render it inanimate. While not Incapacitated you may mentally command the broom (no action required). You decide what action the broom takes and where it moves during its next turn, or you can issue it a general command, such as to attack your enemies or guard a location. While animated if the broom is reduced to 0 HP it is destroyed.",
	descriptionFull : "The archfey Baba Yaga crafted many of these magic brooms. No two appear exactly alike. While holding the broom, you can take a Magic action to transform it into an Animated Broom under your control. The broom then moves into an unoccupied space as close to you as possible. The broom acts immediately after you on your Initiative count and remains animate until you take a Bonus Action and use a command word to render it inanimate.\n   On your turn, you can mentally command the animated broom if it is within 30 feet of you and you don’t have the Incapacitated condition (no action required). You decide what action the broom takes and where it moves during its next turn, or you can issue it a general command, such as to attack your enemies or guard a location.\n   If the broom is reduced to 0 Hit Points, it shatters and is destroyed. If the broom reverts to its inanimate form before losing all its Hit Points, it regains all of them.",
	attunement : true,
	weight : 1,
};
MagicItemsList["bag of beans"] = { // contributed by Larry Hoy
	name : "Bag of Beans",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "This heavy cloth bag contains 3d4 dry beans. I can dump all on the ground, causing a 10-ft explosion that deals 5d4 fire damage to all in the area, DC 15 Dex save to half, and ignites unattended flammable objects. I can plant and water a bean to get an effect 1 minute later, chosen by the DM, see notes page.",
	descriptionFull : "This heavy cloth bag contains 3d4 dry beans when found. The bag weighs half a pound regardless of how many beans it contains and becomes a nonmagical item when it no longer contains any beans.\n   If you dump one or more beans out of the bag, they explode in a 10-foot-radius Sphere centered on them. All the dumped beans are destroyed in the explosion, and each creature in the Sphere, including you, makes a DC 15 Dexterity saving throw, taking 5d4 Force damage on a failed save or half as much damage on a successful one.\n   If you remove a bean from the bag, plant it in dirt or sand, and then water it, the bean disappears as it produces an effect 1 minute later from the ground where it was planted. The DM can choose an effect from the following table or determine it randomly.\n\n"+
	toUni("1d100\tEffect") + "\n01\t5d4 toadstools sprout. If a creature eats a toadstool, roll any die. On an odd roll, the eater must \n\tsucceed on a DC 15 Constitution saving throw or take 5d6 Poison damage and have the \n\tPoisoned condition for 1 hour. On an even roll, the eater gains 5d6 Temporary Hit Points for 1 \n\thour.\n02-10\tA geyser erupts and spouts water, beer, mayonnaise, tea, vinegar, wine, or oil (DM’s choice) 30 \n\tfeet into the air for 1d4 minutes.\n11-20\tA Treant sprouts. Roll any die. On an odd roll, the treant is Chaotic Evil. On an even roll, the \n\ttreant is Chaotic Good.\n21-30\tAn animate but immobile stone statue in your likeness rises and makes verbal threats against \n\tyou. If you leave it and others come near, it describes you as the most heinous of villains and \n\tdirects the newcomers to find and attack you. If you are on the same plane of existence as the \n\tstatue, it knows where you are. The statue becomes inanimate after 24 hours.\n31-40\tA campfire with green flames springs forth and burns for 24 hours or until it is extinguished.\n41-50\tThree Shrieker Fungi sprout.\n51-60\t1d4 + 4 bright-pink toads crawl forth. Whenever a toad is touched, it transforms into a Large \n\tor smaller monster of the DM’s choice that acts in accordance with its alignment and nature. \n\tThe monster remains for 1 minute, then disappears in a puff of bright-pink smoke.\n61-70\tA hungry Bulette burrows up and attacks.\n71-80\tA fruit tree grows. It has 1d10 + 20 fruit, 1d8 of which act as randomly determined potions. \n\tThe tree vanishes after 1 hour. Picked fruit remains, retaining any magic for 30 days.\n81-90\tA nest of 1d4 + 3 rainbow-colored eggs springs up. Any creature that eats an egg makes a DC \n\t20 Constitution saving throw. On a successful save, a creature permanently increases its lowest \n\tability score by 1, randomly choosing among equally low scores. On a failed save, the creature \n\ttakes 10d6 Force damage from an internal explosion.\n91-95\tA pyramid with a 60-foot-square base bursts upward. Inside is a burial chamber containing a \n\tMummy, a Mummy Lord, or some other Undead of the DM’s choice. Its sarcophagus contains \n\ttreasure of the DM’s choice.\n96-00\tA giant beanstalk sprouts, growing to a height of the DM’s choice. The top leads where the DM \n\tchooses, such as to a great view, a cloud giant’s castle, or another plane of existence.",
	weight : 0.5,
	toNotesPage : [{
		name : "Planted bean effects",
		note : "\n1d100\tEFFECT\n01\t5d4 toadstools sprout. If a creature eats a toadstool, roll any die. On\n\tan odd roll, the eater must succeed on a DC 15 Constitution saving\n\tthrow or take 5d6 poison damage and become poisoned for 1 hour.\n\tOn an even roll, the eater gains 5d6 temporary hit points for 1 hour.\n02-10\tA geyser erupts and spouts water, beer, mayonnaise, tea, vinegar, \n\twine, or oil (DM's choice) 30 feet into the air for 1d4 minutes.\n11-20\tA treant sprouts.  Roll any die. On an odd roll,\n\tthe treant is Chaotic Evil. On an even roll, the treant is Chaotic Good.\n21-30\tAn animate but immobile stone statue in your likeness rises. It makes" + (typePF ? "\n\t" : " ") + "verbal threats" + (!typePF ? "\n\t" : " ") + "against you. If you leave it and others come near, it" + (typePF ? "\n\t" : " ") + "describes you as the most" + (!typePF ? "\n\t" : " ") + "heinous of villains and directs the" + (typePF ? "\n\t" : " ") + "newcomers to find and attack you." + (!typePF ? "\n\t" : " ") + "If you are on the same plane of" + (typePF ? "\n\t" : " ") + "existence as the statue, it knows where you are." + (!typePF ? "\n\t" : " ") + "The statue" + (typePF ? "\n\t" : " ") + "becomes inanimate after 24 hours.\n31-40\tA campfire with green flames springs forth and burns for 24 hours (or\n\tuntil it is extinguished).\n41-50\tThree Shrieker Fungi sprout.\n51-60\t1d4 + 4 bright-pink toads crawl forth. Whenever a toad is touched, it" + (typePF ? "\n\t" : " ") + "transforms" + (!typePF ? "\n\t" : " ") + "into a Large or smaller monster of the DM’s choice that \n\tacts in accordance with its alignment and nature." + (typePF ? "\n\t" : " ") + "The monster remains for" + (!typePF ? "\n\t" : " ") + "1 minute, then disappears in a puff of bright" + (typePF ? "\n\t" : " ") + "pink smoke.\n61-70\tA hungry bulette burrows up and attacks.\n71-80\tA fruit tree grows. It has 1d10 + 20 fruit, 1d8 of which act as randomly\n\tdetermined potions. The tree vanishes after 1 hour. Picked fruit \n\tremains, retaining any magic for 30 days.\n81-90\tA nest of 1d4 + 3 rainbow-colored eggs springs up. Any creature that \n\teats an egg makes a DC 20 Constitution saving throw. On a successful \n\tsave, a creature permanently increases its lowest ability score by 1, \n\trandomly choosing among equally low scores. On a failed save, the \n\tcreature takes 10d6 Force damage from an internal explosion.\n91-95\tA pyramid with a 60-foot-square base bursts upward. Inside is a" + (typePF ? "\n\t" : " ") + "burial chamber" + (!typePF ? "\n\t" : " ") + "containing a Mummy, a Mummy Lord, or some other \n\tUndead of the DM’s choice." + (!typePF ? "\n\t" : " ") + "Its sarcophagus contains treasure" + (typePF ? "\n\t" : " ") + "of the DM’s choice.\n96-100\tA giant beanstalk sprouts, growing to a height of the DM’s choice. \n\tThe top leads where the DM chooses, such as to a great view, a cloud \n\tgiant’s castle, or another plane of existence."
	}]
};
MagicItemsList["bag of devouring"] = {
	name : "Bag of Devouring",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "?",
	description : "This bag is a feeding orifice for an extradimensional creature, which is closed if it is turned inside out. It devours all edible matter placed inside. Creatures partially inside get pulled in 50% of the time. Escaping (Str DC 15) or pulling another out (Str DC 20) is an action. Creatures starting their turn inside are devoured.",
	descriptionLong : "Resembling a Bag of Holding, this bag is a feeding orifice for an extradimensional creature. The orifice is closed if the bag is turned inside out. It devours all vegetable and animal matter placed inside. Creatures partially inside get pulled in 50% of the time. Escaping (Str DC 15) or pulling another out (Str DC 20) takes an action. Creatures starting their turn inside are devoured, their body destroyed. Up to 1 cu ft of inanimate objects can be stored inside, but once each day they are swallowed by the creature and spat out on a random plane. If the bag is pierced or torn, it is destroyed and its content lost.",
	descriptionFull : "This bag resembles a Bag of Holding but is a feeding orifice for a gigantic extradimensional creature. Turning the bag inside out closes the orifice.\n   The extradimensional creature attached to the bag can sense whatever is placed inside the bag. Animal or vegetable matter placed wholly in the bag is devoured and lost forever. When part of a living creature is placed in the bag, as happens when someone reaches inside it, there is a 50 percent chance that the creature is pulled inside the bag. A creature inside the bag can take an action to try to escape, doing so with a successful DC 15 Strength (Athletics) check. Another creature can take an action to reach into the bag to pull a creature out, doing so with a successful DC 20 Strength (Athletics) check, provided the puller isn’t pulled inside the bag first. Any creature that starts its turn inside the bag is devoured, its body destroyed.\n   Inanimate objects can be stored in the bag, which can hold a cubic foot of such material. However, once each day, the bag swallows any objects inside it and spits them out into another plane of existence. The DM determines the time and plane.\n   If the bag is pierced or torn, it is destroyed, and anything contained within it is transported to a random location on the Astral Plane.",
	weight : 0.5
};
MagicItemsList["bag of holding"] = {
	name : "Bag of Holding",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "This bag is 2 ft in diameter at the mouth, 4 ft deep, and 15 lb regardless of content. It can hold up to 500 lb, not exceeding a volume of 64 cu ft. Retrieving an item from it requires an action. If it's overloaded, pierced, or torn, it's destroyed with its contents in the Astral plane. If turned inside out, all its contents spill forth.",
	descriptionLong : "This bag is 2 ft in diameter at the mouth, 4 ft deep, and 15 lb regardless of content. It can hold up to 500 lb, not exceeding a volume of 64 cu ft. Retrieving an item from it requires an action. If it is overloaded, pierced, or torn, it is destroyed, leaving its contents in the Astral plane. If it is turned inside out, all its contents spill forth unharmed. Breathing creatures inside the bag can breath for 10 minutes divided by the number of creatures in it (minimum 1 minute), after which they begin to suffocate. Placing the bag in an other extradimensional space instantly destroys both and opens a gate to the Astral Plane.",
	descriptionFull : "This bag has an interior space considerably larger than its outside dimensions—roughly 2 feet square and 4 feet deep on the inside. The bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet. The bag weighs 5 pounds, regardless of its contents. Retrieving an item from the bag requires a Utilize action.\n   If the bag is overloaded, pierced, or torn, it is destroyed, and its contents are scattered in the Astral Plane. If the bag is turned inside out, its contents spill forth unharmed, but the bag must be put right before it can be used again. The bag holds enough air for 10 minutes of breathing, divided by the number of breathing creatures inside.\n   Placing a Bag of Holding inside an extradimensional space created by a Heward’s Handy Haversack, Portable Hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within a 10-foot-radius Sphere centered on the gate is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way and can’t be reopened.Placing a Bag of Holding inside an extradimensional space created by a Heward’s Handy Haversack, Portable Hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within a 10-foot-radius Sphere centered on the gate is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way and can’t be reopened.",
	weight : 15,
	action : [["action", " (retrieve item)"]]
};
MagicItemsList["bag of tricks"] = { // contributed by Larry Hoy
	name: "Bag of Tricks",
	source: [["SRD", 210], ["D", 154]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable : "?",
	description: "This ordinary bag, made from gray, rust, or tan cloth, appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object; which, as an action, I can throw 20 ft, where it transforms into a random creature.",
	descriptionFull: "This bag made from gray, rust, or tan cloth appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object.\n   You can take a Magic action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling on the table that corresponds to the bag’s color. See the Monster Manual for the creature’s stat block. The creature vanishes at the next dawn or when it is reduced to 0 Hit Points.\n   The creature is Friendly to you and your allies, and it acts immediately after you on your Initiative count. You can take a Bonus Action to command how the creature moves and what action it takes on its next turn, such as attacking an enemy. In the absence of such orders, the creature acts in a fashion appropriate to its nature.\n   Once three fuzzy objects have been pulled from the bag, the bag can’t be used again until the next dawn.",
	weight: 0.5,
	allowDuplicates : true,
	action : [["action", " (pull)"], ["bonus action", " (command)"]],
	usages : 3,
	recovery : "dawn",
	choices : ["Gray", "Rust", "Tan"],
	"gray" : {
		name: "Gray Bag of Tricks",
		sortname: "Bag of Tricks, Gray",
		description: "As a Magic action, 3 times per dawn, I can pull an object from this bag and throw it 20 ft. It transforms into a random creature when it lands (d8): 1-weasel, 2-giant rat, 3-badger, 4-boar, 5-panther, 6-giant badger, 7-dire wolf, 8-giant elk. It follows my commands, acts on my turn, and vanishes at dawn or if reduced to 0 HP.",
		descriptionLong: "As a Magic action, I can pull a fuzzy object from this bag and throw it 20 ft. It transforms into a creature when it lands, determined randomly (d8): 1-weasel, 2-giant rat, 3-badger, 4-boar, 5-panther, 6-giant badger, 7-dire wolf, 8-giant elk. The creature is friendly, acts on my turn, and vanishes at the next dawn or when it is reduced to 0 HP. As a bonus action, I can command it how to move and what action to take on its next turn, or give it general orders (e.g. attack my enemies). Without orders, it acts as it normally would. Once three fuzzy objects have been pulled from the bag, it can't be used again until the next dawn.",
		descriptionFull: "This ordinary bag, made from gray cloth, appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object. The bag weighs \u00BD pound.\n   You can use a magic action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling a d8 and consulting the table. The creature vanishes at the next dawn or when it is reduced to 0 hit points.\n   The creature is friendly to you and your companions, and it acts on your turn. You can use a bonus action to command how the creature moves and what action it takes on its next turn, or to give it general orders, such as to attack your enemies. In the absence of such orders, the creature acts in a fashion appropriate to its nature.\n   Once three fuzzy objects have been pulled from the bag, the bag can't be used again until the next dawn.\n\n" + toUni("d8\tCreature") + "\n 1\tWeasel\n 2\tGiant rat\n 3\tBadger\n 4\tBoar\n 5\tPanther\n 6\tGiant badger\n 7\tDire wolf\n 8\tGiant elk"
	},
	"rust" : {
		name: "Rust Bag of Tricks",
		sortname: "Bag of Tricks, Rust",
		description: "As a Magic action, 3 times per dawn, I can pull an object from this bag and throw it 20 ft. It transforms into a random creature when it lands (d8): 1-rat, 2-owl, 3-mastiff, 4-goat, 5-giant goat, 6-giant boar, 7-lion, 8-brown bear. It follows my commands, acts on my turn, and vanishes at dawn or if reduced to 0 HP.",
		descriptionLong: "As a Magic action, I can pull a fuzzy object from this bag and throw it 20 ft. It transforms into a creature when it lands, determined randomly (d8): 1-rat, 2-owl, 3-mastiff, 4-goat, 5-giant goat, 6-giant boar, 7-lion, 8-brown bear. The creature is friendly, acts on my turn, and vanishes at the next dawn or when it is reduced to 0 HP. As a bonus action, I can command it how to move and what action to take on its next turn, or give it general orders (e.g. attack my enemies). Without orders, it acts as it normally would. Once three fuzzy objects have been pulled from the bag, it can't be used again until the next dawn.",
		descriptionFull: "This ordinary bag, made from rust-colored cloth, appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object. The bag weighs \u00BD pound.\n   You can use a Magic action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling a d8 and consulting the table. The creature vanishes at the next dawn or when it is reduced to 0 hit points.\n   The creature is friendly to you and your companions, and it acts on your turn. You can use a bonus action to command how the creature moves and what action it takes on its next turn, or to give it general orders, such as to attack your enemies. In the absence of such orders, the creature acts in a fashion appropriate to its nature.\n   Once three fuzzy objects have been pulled from the bag, the bag can't be used again until the next dawn.\n\n" + toUni("d8\tCreature") + "\n 1\tRat\n 2\tOwl\n 3\tMastiff\n 4\tGoat\n 5\tGiant goat\n 6\tGiant boar\n 7\tLion\n 8\tBrown bear"
	},
	"tan" : {
		name: "Tan Bag of Tricks",
		sortname: "Bag of Tricks, Tan",
		description: "As a Magic action, 3 times per dawn, I can pull an object from this bag and throw it 20 ft. It transforms into a random creature when it lands (d8): 1-jackal, 2-ape, 3-baboon, 4-axe beak, 5-black bear, 6-giant weasel, 7-giant hyena, 8-tiger. It follows my commands, acts on my turn, and vanishes at dawn or if reduced to 0 HP.",
		descriptionLong: "As a Magic action, I can pull a fuzzy object from this bag and throw it 20 ft. It transforms into a creature when it lands, determined randomly (d8): 1-jackal, 2-ape, 3-baboon, 4-axe beak, 5-black bear, 6-giant weasel, 7-giant hyena, 8-tiger. The creature is friendly, acts on my turn, and vanishes at the next dawn or when it is reduced to 0 HP. As a bonus action, I can command it how to move and what action to take on its next turn, or give it general orders (e.g. attack my enemies). Without orders, it acts as it normally would. Once three fuzzy objects have been pulled from the bag, it can't be used again until the next dawn.",
		descriptionFull: "This ordinary bag, made from tan cloth, appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object. The bag weighs \u00BD pound.\n   You can use a Magic action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling a d8 and consulting the table. The creature vanishes at the next dawn or when it is reduced to 0 hit points.\n   The creature is friendly to you and your companions, and it acts on your turn. You can use a bonus action to command how the creature moves and what action it takes on its next turn, or to give it general orders, such as to attack your enemies. In the absence of such orders, the creature acts in a fashion appropriate to its nature.\n   Once three fuzzy objects have been pulled from the bag, the bag can't be used again until the next dawn.\n\n" + toUni("d8\tCreature") + "\n 1\tJackal\n 2\tApe\n 3\tBaboon\n 4\tAxe beak\n 5\tBlack bear\n 6\tGiant weasel\n 7\tGiant hyena\n 8\tTiger"
	}
};
MagicItemsList["bead of force"] = { // contains contributions by Larry Hoy
	name : "Bead of Force",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description: "Once as a Magic action, I can throw this sphere 60 ft, creating a 10-ft radius explosion on impact. All creatures within the explosion must make a DC 15 Dex save or take 5d4 force damage and are trapped in a sphere of transparent force that encloses the area for 1 minute. The sphere can be moved from the in- and outside.",
	descriptionLong: "Once as a Magic action, I can throw this 0.75 inch sphere 60 ft, creating a 10-ft radius explosion on impact. All creatures within the area of the explosion must make a DC 15 Dexterity saving throw or take 5d4 force damage and become trapped in a sphere of transparent force that encloses the area for 1 minute. Only breathable air can pass through it. Those that succeed on the save or are only partially in the area are pushed outside of the sphere of force. Enclosed creatures can use their action to push its wall, moving the whole at half their walking speed. The whole sphere of force weighs only 1 lb, regardless of content.",
	descriptionFull : "This small black sphere measures \xBE of an inch in diameter and weighs an ounce. Typically, 1d4 + 4 beads of force are found together.\n   You can take a Magic action to throw the bead up to 60 feet. The bead explodes in a 10-foot-radius Sphere on impact and is destroyed. Each creature in the Sphere must succeed on a DC 15 Dexterity saving throw or take 5d4 Force damage. A sphere of transparent force then encloses the area for 1 minute. Any creature that failed the save and is completely within the area is trapped inside this sphere. Creatures that succeeded on the save or are partially within the area are pushed away from the center of the sphere until they are no longer inside it. Only breathable air can pass through the sphere’s wall. No attack or other effect can pass through.\n   An enclosed creature can take a Utilize action to push against the sphere’s wall, moving the sphere up to half the creature’s Speed. The sphere can be picked up, and its magic causes it to weigh only 1 pound, regardless of the weight of creatures inside.",
	weight : 0.0625
};
MagicItemsList["bead of nourishment"] = {
	name : "Bead of Nourishment",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "Once I can eat this spongy, flavorless, gelatinous bead. It dissolves on my tongue and provides as much nourishment as 1 day of rations.",
	descriptionFull : "This flavorless, gelatinous bead dissolves on your tongue and provides as much nourishment as 1 day of Rations."
};
MagicItemsList["bead of refreshment"] = {
	name : "Bead of Refreshment",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "Once I can drop this spongy, flavorless, gelatinous bead in liquid. It dissolves in the liquid and transforms up to a pint of it into fresh, cold drinking water. The bead has no effect on magical liquids or harmful substances such as poison.",
	descriptionFull : "This flavorless, gelatinous bead dissolves in liquid, transforming up to a pint of the liquid into fresh, cold drinking water. The bead has no effect on magical liquids or harmful substances such as poison."
};
MagicItemsList["belt of dwarvenkind"] = {
	name : "Belt of Dwarvenkind",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "While wearing this belt, my Con increases by 2 (to max 20), I get adv. on Cha (Persuasion) checks to interact with dwarves, adv. on saves vs. poison, resistance to poison damage, darkvision 60 ft, and known Dwarvish. Each day at dawn, there is a 50% chance I grow a full beard or my current beard becomes visibly thicker.",
	descriptionFull : "While wearing this belt, you gain the following benefits:\n \u2022 Your Constitution score increases by 2, to a maximum of 20.\n \u2022 You have advantage on Charisma (Persuasion) checks made to interact with dwarves and duergar.\n\nIn addition, while attuned to the belt, you have a 50% chance each day at dawn of growing a full beard if you're capable of growing one, or a visibly thicker beard if you already have one.\n\nIf you aren't a dwarf or duergar, you gain the following additional benefits while wearing the belt:\n \u2022 You have advantage on saving throws against poison, and you have resistance against poison damage.\n \u2022 You have darkvision out to a range of 60 feet.\n \u2022 You can speak, read, and write Dwarvish.",
	attunement : true,
	languageProfs : ["Dwarvish"],
	vision : [["Darkvision", 60]],
	savetxt : { adv_vs : ["poison"] },
	dmgres : ["Poison"],
	scores : [0, 0, 2, 0, 0, 0]
};
MagicItemsList["belt of giant strength"] = {
	name : "Belt of Giant Strength",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	description : "Set the type of giant using the button in this line. While wearing this belt, my Strength score changes to a certain number depending on the type of giant the belt is associated with, provided that my Strength is not already that amount or higher.",
	descriptionFull : "While wearing this belt, your Strength changes to a score granted by the belt. The type of giant determines the score (see the table below). The item has no effect on you if your Strength without the belt is equal to or greater than the belt’s score.\n\n" + toUni("Type\t\tStr\tRarity") + "\nHill giant\t\t21\tRare\nStone/frost giant\t23\tVery rare\nFire giant   \t25\tVery rare\nCloud giant\t27\tLegendary\nStorm giant\t29\tLegendary",
	attunement : true,
	allowDuplicates : true,
	choices : ["Hill (Str 21, rare)", "Frost (Str 23, very rare)", "Stone (Str 23, very rare)", "Fire (Str 25, very rare)", "Cloud (Str 27, legendary)", "Storm (Str 29, legendary)"],
	"hill (str 21, rare)" : {
		name : "Belt of Hill Giant Strength",
		sortname : "Belt of Giant Strength, Hill (Str 21)",
		rarity : "rare",
		magicItemTable : "?",
		description : "My Strength score is 21 while I'm wearing this belt, provided that my Strength is not already 21 or higher.",
		scoresOverride : [21, 0, 0, 0, 0, 0]
	},
	"frost (str 23, very rare)" : {
		name : "Belt of Frost Giant Strength",
		sortname : "Belt of Giant Strength, Frost (Str 23)",
		rarity : "very rare",
		magicItemTable : "?",
		description : "My Strength score is 23 while I'm wearing this belt, provided that my Strength is not already 23 or higher.",
		scoresOverride : [23, 0, 0, 0, 0, 0]
	},
	"stone (str 23, very rare)" : {
		name : "Belt of Stone Giant Strength",
		sortname : "Belt of Giant Strength, Stone (Str 23)",
		rarity : "very rare",
		magicItemTable : "?",
		description : "My Strength score is 23 while I'm wearing this belt, provided that my Strength is not already 23 or higher.",
		scoresOverride : [23, 0, 0, 0, 0, 0]
	},
	"fire (str 25, very rare)" : {
		name : "Belt of Fire Giant Strength",
		sortname : "Belt of Giant Strength, Fire (Str 25)",
		rarity : "very rare",
		magicItemTable : "?",
		description : "My Strength score is 25 while I'm wearing this belt, provided that my Strength is not already 25 or higher.",
		scoresOverride : [25, 0, 0, 0, 0, 0]
	},
	"cloud (str 27, legendary)" : {
		name : "Belt of Cloud Giant Strength",
		sortname : "Belt of Giant Strength, Cloud (Str 27)",
		rarity : "legendary",
		magicItemTable : "?",
		description : "My Strength score is 27 while I'm wearing this belt, provided that my Strength is not already 27 or higher.",
		scoresOverride : [27, 0, 0, 0, 0, 0]
	},
	"storm (str 29, legendary)" : {
		name : "Belt of Storm Giant Strength",
		sortname : "Belt of Giant Strength, Storm (Str 29)",
		rarity : "legendary",
		magicItemTable : "?",
		description : "My Strength score is 29 while I'm wearing this belt, provided that my Strength is not already 29 or higher.",
		scoresOverride : [29, 0, 0, 0, 0, 0]
	}
};
MagicItemsList["berserker axe"] = {
	name : "Berserker Axe",
	nameTest : "Berserker",
	source : [["DMG2024", "-"]],
	type : "weapon (battleaxe, greataxe, or halberd)",
	rarity : "rare",
	magicItemTable : "?",
	attunement : true,
	cursed : true,
	description : "This axe gives +1 to hit and damage, +1 HP per level, and is cursed. I can't part with it and have disadv. using other weapons. Whenever I'm damaged by a hostile, I must make a DC 15 Wis save or go berserk, using my action each round to attack the closest creature with the axe until none remain within 60 ft.",
	descriptionFull : "You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon. In addition, while you are attuned to this weapon, your Hit Point maximum increases by 1 for each level you have attained.\n   " + toUni("Curse") + ". This weapon is cursed, and becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the weapon, keeping it within reach at all times. You also have Disadvantage on attack rolls with weapons other than this one.\n   Whenever another creature damages you while the weapon is in your possession, you must succeed on a DC 15 Wisdom saving throw or go berserk. This berserk state ends when you start your turn and there are no creatures within 60 feet of you that you can see or hear.\n    While berserk, you regard the creature nearest to you that you can see or hear as your enemy. If there are multiple possible creatures, choose one at random. On each of your turns, you must move as close to the creature as possible and take the Attack action, targeting the creature. If you’re unable to get close enough to the creature to attack it with the weapon, your turn ends after you’ve used up all your available movement. If the creature dies or can no longer be seen or heard by you, the next nearest creature that you can see or hear becomes your new target.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "axe"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /greataxe|battleaxe|halberd/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/axe/i).test(v.baseWeaponName) && (/berserker/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Cursed';
				}
			},
			'If I include the word "Berserker" in a the name of an axe, it will be treated as the magic weapon Berserker Axe. It has +1 to hit and damage, but also bears a curse.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/axe/i).test(v.baseWeaponName) && (/berserker/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
		],
		hp : function (totalHD) { return [totalHD]; }
	}
};
var DMG_blackrazorFullDescription = [
	"Hidden in the dungeon of White Plume Mountain, Blackrazor shines like a piece of night sky filled with stars. Its black scabbard is decorated with pieces of cut obsidian.",
	"You gain a +3 bonus to attack rolls and damage rolls made with this magic weapon. If you hit an Undead with this weapon, you take 1d10 Necrotic damage, and the target regains 1d10 Hit Points. If this Necrotic damage reduces you to 0 Hit Points, Blackrazor devours your soul (see “Devour Soul” below).",
	"While you hold this weapon, you have Immunity to the Charmed and Frightened conditions, and you have Blindsight with a range of 30 feet.",
	">>Devour Soul<<. Whenever you use Blackrazor to reduce a creature to 0 Hit Points, the sword slays the creature and devours its soul unless it is a Construct or an Undead. A creature whose soul has been devoured by Blackrazor can be restored to life only by a Wish spell.",
	"When Blackrazor devours a soul that isn’t yours, you gain Temporary Hit Points equal to the slain creature’s Hit Point maximum.",
	">>Haste<<. Blackrazor can cast Haste on you, after which it can’t cast this spell again until the next dawn. Blackrazor decides when to cast the spell, which takes effect at the start of your turn. The spell lasts for 1 minute (no Concentration required) or until Blackrazor decides to end it, which it can do at the end of any of your turns.",
	">>Sentience<<. Blackrazor is a sentient Chaotic Neutral weapon with an Intelligence of 17, a Wisdom of 10, and a Charisma of 19. It has hearing and Darkvision out to 120 feet.",
	"The weapon speaks Common and can communicate with its wielder telepathically. Its voice is deep and echoing. While you are attuned to it, Blackrazor also understands every language you know.",
	">>Personality<<. Blackrazor speaks with an imperious tone, as though accustomed to being obeyed.",
	"The sword’s purpose is to consume souls. It doesn’t care whose souls it eats, including the wielder’s. The sword believes that all matter and energy sprang from a void of negative energy and will one day return to it. Blackrazor is meant to hurry that process along.",
	"Despite its nihilism, Blackrazor feels a strange kinship to Wave and Whelm, two other weapons locked away under White Plume Mountain. It wants the three weapons to be reunited and wielded together in combat, even though it violently disagrees with Whelm and finds Wave tedious.",
	"Blackrazor’s hunger for souls must be regularly fed. If the sword goes 3 days or more without consuming a soul, a conflict between it and its wielder occurs at the next sunset.",
	">>Destroying Blackrazor<<. Destroying Blackrazor. Blackrazor can be destroyed by crushing it in the great gears of Mechanus. Primus, the creator of the modrons, also knows a series of musical tones that Blackrazor can’t stand to hear, causing the sword to shatter.",
];
MagicItemsList["blackrazor"] = {
	name : "Blackrazor",
	source : [["DMG2024", "-"]],
	type : "weapon (greatsword)",
	rarity : "legendary",
	notLegalAL : true,
	description : "This sentient greatsword adds +3 to hit and damage, and makes me immune to being charmed or frightened. If I hit Undead with this weapon, I take 1d10 Necro. Damage and the target gains 1d10 HP. Once per day it can cast Haste on me as it sees fit. If I use it to bring a creature to 0 HP, it devours the creature's soul, granting me temporary HP equal to the creature's max HP. See Notes page.",
	descriptionFull : DMG_blackrazorFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	attunement : true,
	prerequisite : "Requires attunement by a creature of non-lawful alignment",
	prereqeval : function(v) { return !(/lawful/i).test(What("Alignment")); },
	weight : 6,
	weaponOptions : [{
		baseWeapon : "greatsword",
		regExpSearch : /blackrazor/i,
		name : "Blackrazor",
		source : [["DMG2024", "-"]],
		description : "Heavy, two-handed; Devours soul; Heals undead; Graze",
		modifiers : [3, 3],
		selectNow : true
	}],
	toNotesPage : [{
		name : "Features",
		note : desc(DMG_blackrazorFullDescription).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/your/g, "my").replace(/you are /ig, "I am ").replace(/(of|on|reduces|grants) you/ig, "$1 me").replace(/you /ig, "I ") + "\n\n" + sentientItemConflictTxt
	}],
	savetxt : { immune : ["charmed", "frightened"] },
	usages : 1,
	recovery : "dawn",
	additional : "Haste",
	spellcastingBonus : [{
		name : "Once per dawn",
		spells : ["haste"],
		selection : ["haste"],
		firstCol : "oncelr"
	}],
	spellChanges : {
		"haste" : {
			range : "Self",
			duration : "1 min",
			description : "I get +2 AC, speed doubled, adv. on Dex saves, extra action (1 attack, dash, disengage, hide)",
			changes : "Blackrazor casts the spell on me, so I don't need to concentrate on it."
		}
	}
};
MagicItemsList["boots of elvenkind"] = { // contains contributions by AelarTheElfRogue
	name : "Boots of Elvenkind",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While I wear these boots, my steps make no sound, regardless of the surface I am moving across. I also have advantage on Dexterity (Stealth) checks that rely on moving silently.",
	descriptionFull : "While you wear these boots, your steps make no sound, regardless of the surface you are moving across. You also have Advantage on Dexterity (Stealth) checks.",
	eval : function () {
		for (var i = 0; i < CurrentMagicItems.known.length; i++) {
			if (CurrentMagicItems.known[i].indexOf("cloak of elvenkind") !== -1 && tDoc.getField("Extra.Magic Item Attuned " + (1 + i)).isBoxChecked(0)) {
				SetProf("advantage", true, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
				break;
			}
		}
	},
	removeeval : function () {
		SetProf("advantage", false, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
	}
};
MagicItemsList["boots of false tracks"] = {
	name : "Boots of False Tracks",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	attunement : true,
	description : "While wearing the boots, I can choose to have them leave tracks like those of another kind of humanoid of my size.",
	descriptionFull : "While wearing these boots, you can have them leave tracks like those of any kind of Humanoid of your size."
};
MagicItemsList["boots of levitation"] = { // contributed by AelarTheElfRogue
	name : "Boots of Levitation",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	attunement : true,
	description : "While I wear these boots, I can cast Levitate on myself at will.",
	descriptionFull : "While you wear these boots, you can cast Levitate on yourself.",
	spellcastingBonus : {
		name : "Self Only",
		spells : ["levitate"],
		selection : ["levitate"],
		firstCol : "atwill"
	},
	spellChanges : {
		"levitate" : {
			range : "Self",
			save : "",
			description : "I rise vertically, up to 20 ft; I can move up or down 20 ft as part of my move during my turn",
			changes : "The spell can only affect the wearer."
		}
	}
};
MagicItemsList["boots of speed"] = {
	name : "Boots of Speed",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	attunement : true,
	description : "As a bonus action, I can click the heels of these boots together to double my walking speed and make opportunity attacks against me have disadvantage. I can end this effect with another bonus action. After the boots' magic has been used for a total of 10 minutes, they lose their power until I finish a long rest.",
	descriptionFull : "While you wear these boots, you can take a Bonus Action to click the boots’ heels together. If you do, the boots double your Speed, and any creature that makes an Opportunity Attack against you has Disadvantage on the attack roll. If you click your heels together again, you end the effect.\n  When you’ve used the boots’ property for a total of 10 minutes, the magic ceases to function for you until you finish a Long Rest.",
	action : [["bonus action", " (start/stop)"]],
	usages : 10,
	recovery : "long rest",
	additional : "minutes"
};
MagicItemsList["boots of striding and springing"] = { // contributed by AelarTheElfRogue
	name : "Boots of Striding and Springing",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	attunement : true,
	description : "While I wear these boots, my walking speed becomes 30 feet, unless my walking speed is higher, and my speed isn't reduced if I am encumbered or wearing heavy armor. In addition, I can jump up to 30 feet by spending only 10 feet of movement, though I can't jump farther than my remaining movement would allow.",
	descriptionFull : "While you wear these boots, your Speed becomes 30 feet unless your Speed is higher, and your Speed isn’t reduced by you carrying weight in excess of your carrying capacity or wearing Heavy Armor.\n   Once on each of your turns, you can jump up to 30 feet by spending only 10 feet of movement.",
	speed : { walk : { spd : "fixed 30", enc : "fixed 30" } }
};
MagicItemsList["boots of the winterlands"] = {
	name : "Boots of the Winterlands",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	attunement : true,
	magicItemTable : "?",
	description : "While wearing these boots, I have resistance to cold damage and I ignore difficult terrain created by ice or snow. I can tolerate temperatures of 0 degrees Fahrenheit or lower without any additional protection. \u00B0F.",
	descriptionFull : "These furred boots are snug and feel warm. While wearing them, you gain the following benefits.\n \u2022 Cold Resistance. You have Resistance to Cold damage and can tolerate temperatures of 0 degrees Fahrenheit or lower without any additional protection.\n \u2022 Winter Strider. You ignore Difficult Terrain created by ice or snow.",
	dmgres : ["Cold"]
};
MagicItemsList["bowl of commanding water elementals"] = {
	name : "Bowl of Commanding Water Elementals",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "While this bowl is filled with water, I can speak the bowl's command word as a Magic action and summon a water elemental. The bowl can't be used again until the next dawn. The bowl is about 1 foot in diameter and half as deep, and holds about 3 gallons of water.",
	descriptionFull : "While this bowl is filled with water and you are within 5 feet of it, you can take a Magic action to summon a Water Elemental. The elemental appears in an unoccupied space as close to the bowl as possible, understands your languages, obeys your commands, and takes its turn immediately after you on your Initiative count. The elemental disappears after 1 hour, when it dies, or when you dismiss it as a Bonus Action. The bowl can’t be used this way again until the next dawn.\n   The bowl is about 1 foot in diameter and half as deep. It holds about 3 gallons.",
	weight : 3,
	action : [["action", " (Summon)"], ["bonus action", " (Dismiss)"]],
	usages : 1,
	recovery : "dawn"
};
MagicItemsList["bracers of archery"] = {
	name : "Bracers of Archery",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While wearing these bracers, I have proficiency with the longbow and shortbow, and I gain a +2 bonus to damage rolls on ranged attacks made with such weapons.",
	descriptionFull : "While wearing these bracers, you have proficiency with the Longbow and Shortbow, and you gain a +2 bonus to damage rolls made with such weapons.",
	attunement : true,
	weaponProfs : [false, false, ["longbow", "shortbow"]],
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				if (v.baseWeaponName == "shortbow" || v.baseWeaponName == "longbow") {
					output.extraDmg += 2;
				}
			},
			'I add +2 to the damage of attacks I make with shortbows and longbows.'
		],
	}
};
MagicItemsList["bracers of defense"] = {
	name : "Bracers of Defense",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "These bracers give me a +2 bonus to AC, but only if I'm not wearing armor or using a shield.",
	descriptionFull : "While wearing these bracers, you gain a +2 bonus to Armor Class if you are wearing no armor and using no Shield.",
	attunement : true,
	extraAC : [{
		mod : 2,
		magic : true,
		text : "I gain a +2 bonus to AC while I'm not wearing armor or using a shield.",
		stopeval : function (v) { return v.wearingArmor || v.usingShield; }
	}]
};
MagicItemsList["brazier of commanding fire elementals"] = {
	name : "Brazier of Commanding Fire Elementals",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "While a fire burns in this brass brazier, I can use an action to speak the brazier's command word and summon a fire elemental. The brazier can't be used this way again until the next dawn.",
	descriptionFull : "While you are within 5 feet of this brazier, you can take a Magic action to summon a Fire Elemental. The elemental appears in an unoccupied space as close to the brazier as possible, understands your languages, obeys your commands, and takes its turn immediately after you on your Initiative count. The elemental disappears after 1 hour, when it dies, or when you dismiss it as a Bonus Action. The brazier can’t be used this way again until the next dawn.",
	weight : 5,
	action : [["action", " (Summon)"], ["bonus action", " (Dismiss)"]],
	usages : 1,
	recovery : "dawn"
};
MagicItemsList["brooch of shielding"] = { // contributed by Smashman
	name : "Brooch of Shielding",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While wearing this brooch, I have resistance to force damage, and have immunity to damage from the Magic Missile spell.",
	descriptionFull : "While wearing this brooch, you have Resistance to Force damage, and you have Immunity to damage from the Magic Missile spell.",
	attunement : true,
	dmgres: ["Force"],
	savetxt: {
		immune: ["Magic Missile spell"]
	}
};
MagicItemsList["broom of flying"] = {
	name : "Broom of Flying",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "With the command word, this broom hovers and can either be ridden in the air or sent alone up to 1 mile by naming a familiar location. It has a flying speed of 50 ft, holds up to 400 lb, but only has 30 ft speed if over 200 lb. It stops hovering when I land. With another command word, it flies to me if within 1 mile.",
	descriptionFull : "This wooden broom functions like a mundane broom until you stand astride it and take a Magic action to make it hover beneath you, at which time it can be ridden in the air. It has a Fly Speed of 50 feet. It can carry up to 400 pounds, but its Fly Speed becomes 30 feet while carrying over 200 pounds. The broom stops hovering when you land or when you’re no longer riding it.\n   As a Magic action, you can send the broom to travel alone to a destination within 1 mile of you if you name the location and are familiar with it. The broom comes back to you when you take a Magic action and use a command word if the broom is still within 1 mile of you.",
	weight : 3
};
MagicItemsList["candle of invocation"] = {
	name : "Candle of Invocation",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "?",
	description : "This slender taper is Connected to a plane of existance. Lit, it sheds dim light in a 30-ft radius for up to 4 hours and grants me Advantage on d20 Tests, Clerics and Druids in it's light can cast level 1 spells they have prepared without expending a spell slot. I can destroy an unlit candle to cast Gate which links to the candle's associated plane of existance.",
	descriptionFull : "This candle’s magic is activated when the candle is lit, which requires a Magic action. After burning for 4 hours, the candle is destroyed. You can snuff it out early for use at a later time. Deduct the time it burned in increments of 1 minute from its total burn time.\nWhile lit, the candle sheds Dim Light in a 30-foot radius. While you are within that light, you have Advantage on D20 Tests. In addition, a Cleric or Druid in the light can cast level 1 spells they have prepared without expending spell slots.\nAlternatively, when you light the candle for the first time, you can cast Gate with it. Doing so destroys the candle. The portal created by the spell links to a particular Outer Plane chosen by the DM or determined by rolling on the following table.\n\n" + 
	toUni("1d100\tOuter Plane") + "\n01-05\tAbyss\n06-10\tAcheron\n11-17\tArborea\n18-25\tArcadia\n26-33\tBeastlands\n34-41\tBytopia\n42-46\tCarceri\n47-54\tElysium\n55-59\tGehenna\n60-64\tHades\n65-69\tLimbo\n70-77\nMechanus\n78-85\tMount Celestia\n86-90\tNine Hells\n91-95\tPandemonium\n96-00\tYsgard",
	attunement : true,
	allowDuplicates : true,
	usages : "240 min",
	recovery : "Never",
	spellcastingBonus : {
		name : "1\xD7 \u0026\u0026 candle is destroyed",
		spells : ["gate"],
		selection : ["gate"],
		firstCol : "1\xD7"
	},
	action : [["action", " (light)"]],
	choices : ["Abyss", "Acheron", "Arborea", "Arcadia", "Beastlands", "Bytopia", "Carceri", "Elysium", "Gehenna", "Hades", "Limbo", "Mechanus", "Mount Celestia", "Nine Hells", "Pandemonium", "Ysgard"],
	choicesNotInMenu : true,
	"abyss" : {
		description : "As an action, I can light this candle. The first time I do, I can cast Gate and destroy it or have it shed dim light in a 30-ft radius. I have adv. d20 Tests, while clerics/druids can cast their 1st-level spells without using a level 1 slot. It can burn for 4 hours intermittently."
	},
	"acheron" : {
		description : "As an action, I can light this candle. The first time I do, I can cast Gate and destroy it or have it shed dim light in a 30-ft radius. I have adv. d20 Tests, while clerics/druids can cast their 1st-level spells without using a level 1 slot. It can burn for 4 hours intermittently."
	},
	"arborea" : {
		description : "As an action, I can light this candle. The first time I do, I can cast Gate and destroy it or have it shed dim light in a 30-ft radius. I have adv. d20 Tests, while clerics/druids can cast their 1st-level spells without using a level 1 slot. It can burn for 4 hours intermittently."
	},
	"arcadia" : {
		description : "As an action, I can light this candle. The first time I do, I can cast Gate and destroy it or have it shed dim light in a 30-ft radius. I have adv. d20 Tests, while clerics/druids can cast their 1st-level spells without using a level 1 slot. It can burn for 4 hours intermittently."
	},
	"beastlands" : {
		description : "As an action, I can light this candle. The first time I do, I can cast Gate and destroy it or have it shed dim light in a 30-ft radius. I have adv. d20 Tests, while clerics/druids can cast their 1st-level spells without using a level 1 slot. It can burn for 4 hours intermittently."
	},
	"bytopia" : {
		description : "As an action, I can light this candle. The first time I do, I can cast Gate and destroy it or have it shed dim light in a 30-ft radius. I have adv. d20 Tests, while clerics/druids can cast their 1st-level spells without using a level 1 slot. It can burn for 4 hours intermittently."
	},
	"carceri" : {
		description : "As an action, I can light this candle. The first time I do, I can cast Gate and destroy it or have it shed dim light in a 30-ft radius. I have adv. d20 Tests, while clerics/druids can cast their 1st-level spells without using a level 1 slot. It can burn for 4 hours intermittently."
	},
	"elysium" : {
		description : "As an action, I can light this candle. The first time I do, I can cast Gate and destroy it or have it shed dim light in a 30-ft radius. I have adv. d20 Tests, while clerics/druids can cast their 1st-level spells without using a level 1 slot. It can burn for 4 hours intermittently."
	},
	"gehenna" : {
		description : "As an action, I can light this candle. The first time I do, I can cast Gate and destroy it or have it shed dim light in a 30-ft radius. I have adv. d20 Tests, while clerics/druids can cast their 1st-level spells without using a level 1 slot. It can burn for 4 hours intermittently."
	},
	"hades" : {
		description : "As an action, I can light this candle. The first time I do, I can cast Gate and destroy it or have it shed dim light in a 30-ft radius. I have adv. d20 Tests, while clerics/druids can cast their 1st-level spells without using a level 1 slot. It can burn for 4 hours intermittently."
	},
	"limbo" : {
		description : "As an action, I can light this candle. The first time I do, I can cast Gate and destroy it or have it shed dim light in a 30-ft radius. I have adv. d20 Tests, while clerics/druids can cast their 1st-level spells without using a level 1 slot. It can burn for 4 hours intermittently."
	},
	"mechanus" : {
		description : "As an action, I can light this candle. The first time I do, I can cast Gate and destroy it or have it shed dim light in a 30-ft radius. I have adv. d20 Tests, while clerics/druids can cast their 1st-level spells without using a level 1 slot. It can burn for 4 hours intermittently."
	},
	"mount celestia" : {
		description : "As an action, I can light this candle. The first time I do, I can cast Gate and destroy it or have it shed dim light in a 30-ft radius. I have adv. d20 Tests, while clerics/druids can cast their 1st-level spells without using a level 1 slot. It can burn for 4 hours intermittently."
	},
	"nine hells" : {
		description : "As an action, I can light this candle. The first time I do, I can cast Gate and destroy it or have it shed dim light in a 30-ft radius. I have adv. d20 Tests, while clerics/druids can cast their 1st-level spells without using a level 1 slot. It can burn for 4 hours intermittently."
	},
	"pandemonium" : {
		description : "As an action, I can light this candle. The first time I do, I can cast Gate and destroy it or have it shed dim light in a 30-ft radius. I have adv. d20 Tests, while clerics/druids can cast their 1st-level spells without using a level 1 slot. It can burn for 4 hours intermittently."
	},
	"ysgard" : {
		description : "As an action, I can light this candle. The first time I do, I can cast Gate and destroy it or have it shed dim light in a 30-ft radius. I have adv. d20 Tests, while clerics/druids can cast their 1st-level spells without using a level 1 slot. It can burn for 4 hours intermittently."
	}
};
MagicItemsList["candle of the deep"] = {
	name : "Candle of the Deep",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "The flame of this candle isn’t extinguished when immersed in water. It gives off light and heat like a normal candle.",
	descriptionFull : "The flame of this candle isn’t extinguished when immersed in water. It gives off light and heat like a normal candle."
};
MagicItemsList["cape of the mountebank"] = { // contributed by Smashman
	name : "Cape of the Mountebank",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "While wearing this cape, I can use it to cast the Dimension Door spell as a magic action. This property of the cape can't be used again until the next dawn. The cape smells faintly of brimstone. When I disappear, smoke lightly obscures the place that I left, which dissipates at the end of my next turn.",
	descriptionFull : "This cape smells faintly of brimstone. While wearing it, you can use it to cast Dimension Door as a Magic action. This property can’t be used again until the next dawn.\n   When you teleport with that spell, you leave behind a cloud of smoke. The space you left is Lightly Obscured by that smoke until the end of your next turn.",
	usages : 1,
	recovery : "dawn",
	spellcastingBonus : {
		name: "Cape of the Mountebank",
		spells: ["dimension door"],
		selection: ["dimension door"],
		firstCol : "oncelr"
	}
};
MagicItemsList["cap of water breathing"] = {
	name : "Cap of Water Breathing",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While wearing this cap underwater, I can speak its command word as a magic action to create a bubble of air around my head. It allows me to breathe normally underwater. This bubble stays with me until I speak the command word again, the cap is removed, or I am no longer underwater.",
	descriptionFull : "While wearing this cap underwater, you can take a Magic action to create a bubble of air around your head. This bubble allows you to breathe normally underwater. This bubble stays with you until the cap is removed or you are no longer underwater.",
	action : [["action", ""]]
};
MagicItemsList["carpet of flying"] = {
	name : "Carpet of Flying",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "?",
	description : "I can speak the carpet's command word as an action to make the carpet hover and fly. It moves according to my spoken directions if I am within 30 feet of it. A carpet can carry up to twice the weight for its type, but it flies at half speed if it carries more than its normal capacity.",
	descriptionFull : "You can make this carpet hover and fly by taking a Magic action and using the carpet’s command word. It moves according to your directions if you are within 30 feet of it.\n   Four sizes of Carpet of Flying exist. The DM chooses the size of a given carpet or determines it randomly by rolling on the following table. A carpet can carry up to twice the weight shown on the table, but its Fly Speed is halved if it carries more than its normal capacity.\n\n" + 
	toUni("1d100\tSize\tCapacity\tFlying Speed") + "\n01-20\t3 \xD7 5 ft.\t  200 lb.\t  80 feet\n21-55\t4 \xD7 6 ft.\t  400 lb.\t  60 feet\n56-80\t5 \xD7 7 ft.\t  600 lb.\t  40 feet\n81-00\t6 \xD7 9 ft.\t  800 lb.\t  30 feet",
	action : [["action", ""]],
	choices : ["3 \xD7 5 ft (fly 80 ft, 200 lb)", "4 \xD7 6 ft (fly 60 ft, 400 lb)", "5 \xD7 7 ft (fly 40 ft, 600 lb)", "6 \xD7 9 ft (fly 30 ft, 800 lb)"],
	choicesNotInMenu : true,
	"3 \xD7 5 ft (fly 80 ft, 200 lb)" : {
		name : "Carpet of Flying, 3 ft \xD7 5 ft",
		nameTest : "Carpet of Flying, 1 m \xD7 1,5 m",
		description : "I can speak the carpet's command word as an action to make the 3 ft \xD7 5 ft carpet hover and fly. It moves according to my spoken directions if I am within 30 ft of it. It has a flying speed of 80 ft and can carry up to 400 lb. If it carries more than 200 lb its flying speed is reduced to only 40 ft."
	},
	"4 \xD7 6 ft (fly 60 ft, 400 lb)" : {
		name : "Carpet of Flying, 4 ft \xD7 6 ft",
		nameTest : "Carpet of Flying, 1,2 m \xD7 2 m",
		description : "I can speak the carpet's command word as an action to make the 4 ft \xD7 6 ft carpet hover and fly. It moves according to my spoken directions if I am within 30 ft of it. It has a flying speed of 60 ft and can carry up to 800 lb. If it carries more than 400 lb its flying speed is reduced to only 30 ft."
	},
	"5 \xD7 7 ft (fly 40 ft, 600 lb)" : {
		name : "Carpet of Flying, 5 ft \xD7 7 ft",
		nameTest : "Carpet of Flying, 1,5 m \xD7 2,1 m",
		description : "I can speak the carpet's command word as an action to make the 5 ft \xD7 7 ft carpet hover and fly. It moves according to my spoken directions if I am within 30 ft of it. It has a flying speed of 40 ft and can carry up to 1200 lb. If it carries more than 600 lb its flying speed is reduced to only 20 ft."
	},
	"6 \xD7 9 ft (fly 30 ft, 800 lb)" : {
		name : "Carpet of Flying, 6 ft \xD7 9 ft",
		nameTest : "Carpet of Flying, 1,8 m \xD7 2,7 m",
		description : "I can speak the carpet's command word as an action to make the 6 ft \xD7 9 ft carpet hover and fly. It moves according to my spoken directions if I am within 30 ft of it. It has a flying speed of 30 ft and can carry up to 1600 lb. If it carries more than 800 lb its flying speed is reduced to only 15 ft."
	}
};
MagicItemsList["cast-off armor"] = {
	name : "Cast-Off Armor",
	nameTest : "Cast-Off",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "armor (light, medium, or heavy)",
	rarity : "common",
	description : "As a magic action, I can doff this armor.",
	descriptionFull : "You can doff this armor as a magic action.",
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "suffix",
		descriptionChange : ["prefix", "armor"]
	},
	action : [["action", ""]]
};
MagicItemsList["cauldron of rebirth"] = {
	name : "Cauldron of Rebirth",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "very rare",
	attunement : true,
	prerequisite : "Requires attunement by a druid or warlock",
	prereqeval : function(v) {
		return classes.known.druid || classes.known.warlock ? true : false;
	},
	description : "After a long rest, I can use this Tiny pot to create a potion of greater healing that lasts up to 24 hours. As an action, I can have it grow to fit a Medium creature, or shrink it back down. I can place a dead creature inside with 200 lb salt (10 gp) for 8 hours to Raise Dead. Once used, it can't do this again for 7 days.",
	descriptionFull : "This Tiny pot bears relief scenes of heroes on its cast-iron sides.\nYou can use the cauldron as a Spellcasting Focus for your spells, and it functions as a suitable component for the Scrying spell.\n\tBrew Potion. When you finish a Long Rest, you can use the cauldron to create a Potion of Healing (greater), which takes 1 minute. The potion lasts for 24 hours, then loses its magic if not consumed.\n\tRaise Dead. As a Magic action, you can cause the cauldron to grow large enough for a Medium creature to crouch within. You can revert the cauldron to its normal size as a Magic action, harmlessly shunting anything that can’t fit inside to the nearest unoccupied space.\nIf you place the corpse of a Humanoid into the cauldron and cover the corpse with 200 pounds of salt (which costs 10 GP) for at least 8 hours, the salt is consumed and the creature returns to life as if by Raise Dead at the next dawn. Once used, this property can’t be used again for 7 days.",
	action : [["action", " (grow/shrink)"]],
	usages : 1,
	recovery : "7 days",
	additional : "Raise Dead"
};
MagicItemsList["censer of controlling air elementals"] = {
	name : "Censer of Controlling Air Elementals",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "While incense is burning in this censer, I can use a magic action to speak the censer's command word and summon an air elemental. The censer can't be used this way again until the next dawn. This 6\" wide, 1' high vessel resembles a chalice with a decorated lid.",
	descriptionFull : "While gently swinging this censer, you can take a Magic action to summon an Air Elemental. The elemental appears in an unoccupied space as close to the censer as possible, understands your languages, obeys your commands, and takes its turn immediately after you on your Initiative count. The elemental disappears after 1 hour, when it dies, or when you dismiss it as a Bonus Action. The censer can’t be used this way again until the next dawn.",
	weight : 1,
	action : [["action", " (Summon)"], ["bonus action", " (Dismiss)"]],
	usages : 1,
	recovery : "dawn",
};
MagicItemsList["charlatan's die"] = {
	name : "Charlatan's Die",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "Whenever I roll this six-sided die, I can control which number it rolls.",
	descriptionFull : "Whenever you roll this six-sided die, you can control which number it rolls.",
	attunement : true
};
MagicItemsList["chime of opening"] = { // contributed by AelarTheElfRogue
	name : "Chime of Opening",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "I can strike this as a magic action, pointing it at an object within 120 ft of me that can be opened (i.e. door, lid, lock). One lock or latch on it opens unless the sound can't reach it. If no locks or latches remain, the object itself opens. The chime can be used ten times. After the tenth time it cracks and becomes useless.",
	descriptionFull : "This hollow metal tube measures about 1 foot long and weighs 1 pound. As a Magic action, you can strike the chime to cast Knock. The spell’s customary knocking sound is replaced by the clear, ringing tone of the chime, which is audible out to 300 feet.\n   The chime can be used 10 times. After the tenth time, it cracks and becomes useless.",
	weight : 1,
	action : [["action", ""]],
	usages : 10,
	recovery : "Never"
};
MagicItemsList["circlet of blasting"] = { // contains contributions by Larry Hoy
	name : "Circlet of Blasting",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While wearing this circlet, I can use a magic action to cast the Scorching Ray spell with it. When I make the spell's attacks, I do so with an attack bonus of +5. The circlet can't be used this way again until the next dawn.",
	descriptionFull : "While wearing this circlet, you can cast Scorching Ray with it (+5 to hit). The circlet can’t cast this spell again until the next dawn.",
	usages : 1,
	recovery : "dawn",
	fixedDC : 13,
	spellcastingBonus : {
		name : "Once per dawn",
		spells : ["scorching ray"],
		selection : ["scorching ray"],
		firstCol : "oncelr"
	}
};
MagicItemsList["cloak of arachnida"] = {
	name : "Cloak of Arachnida",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "?",
	description : "This cloak grants me resistance to poison damage, climbing speed equal to my walking speed, even along vertical surfaces and upside down while keeping my hands free, freedom from being caught in webs, the ability to move through webs as if just difficult terrain, and the ability to cast Web once per dawn.",
	descriptionFull : "This fine garment is made of black silk interwoven with faint, silvery threads. While wearing it, you gain the following benefits.\n \u2022 Poison Resistance. You have Resistance to Poison damage.\n \u2022 Spider Climb. You have a Climb Speed equal to your Speed and can move up, down, and across vertical surfaces and along ceilings, while leaving your hands free.\n \u2022 Spider Walk. You can’t be caught in webs of any sort and can move through webs as if they were Difficult Terrain.\n \u2022 Web. You can cast Web (save DC 13). The web created by the spell fills twice its normal area. Once used, this property can’t be used again until the next dawn.",
	attunement : true,
	dmgres : ["Poison"],
	usages : 1,
	recovery : "dawn",
	additional : "cast Web",
	fixedDC : 13,
	speed : { climb : { spd : "walk", enc : "walk" } },
	spellcastingBonus : {
		name : "Once per dawn",
		spells : ["web"],
		selection : ["web"],
		firstCol : "oncelr"
	},
	spellChanges : {
		"web" : {
			description : "2\xD7 20-ft cubes, anchored, all save or restrained; dif. ter.; lightly obscures; Str check vs. DC 13 to free"
		}
	}
};
MagicItemsList["cloak of billowing"] = {
	name : "Cloak of Billowing",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "As a bonus action while wearing this cloak, I can make it billow dramatically.",
	descriptionFull : "While wearing this cloak, you can take a Bonus Action to make it billow dramatically for 1 minute.",
	action : [["bonus action", ""]]
};
MagicItemsList["cloak of displacement"] = { // contributed by Smashman
	name : "Cloak of Displacement",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "While I wear this cloak, creatures have disadvantage on attack rolls against me as I appear to be standing in a slightly different location. If I take damage, this property ceases to function until the start of my next turn. The property is suppressed while I am incapacitated, restrained, or otherwise unable to move.",
	descriptionFull : "While you wear this cloak, it magically projects an illusion that makes you appear to be standing in a place near your actual location, causing any creature to have Disadvantage on attack rolls against you. If you take damage, the property ceases to function until the start of your next turn. This property is suppressed while your Speed is 0.",
	attunement : true
};
MagicItemsList["cloak of elvenkind"] = {
	name : "Cloak of Elvenkind",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While I wear this cloak, Wisdom (Perception) checks made to see me have disadvantage, and I have advantage on Dexterity (Stealth) checks made to hide, as the cloak's color shifts to camouflage me.",
	descriptionFull : "While you wear this cloak, Wisdom (Perception) checks made to perceive you have Disadvantage, and you have Advantage on Dexterity (Stealth) checks.",
	attunement : true,
	eval : function () {
		if (CurrentMagicItems.known.indexOf("boots of elvenkind") !== -1) {
			SetProf("advantage", true, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
		}
	},
	removeeval : function () {
		SetProf("advantage", false, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
	}
};
MagicItemsList["cloak of invisibility"] = {
	name : "Cloak of Invisibility",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "legendary",
	magicItemTable : "?",
	description : "As a magic action, I can pull the hood of this cloak over my head, making myself invisible for 1 hour, or until I pull the hood down (no action required), or cease wearing the cloak.",
	descriptionFull : "This cloak has 3 charges and regains 1d3 expended charges daily at dawn. While wearing the cloak, you can take a Magic action to pull its hood over your head and expend 1 charge to give yourself the Invisible condition for 1 hour. The effect ends early if you pull the hood down (no action required) or cease wearing the cloak.",
	attunement : true,
	action : [["action", " (hood up)"]],
	usages : "3",
	recovery : "dawn",
	additional : "regain 1d3"
};
MagicItemsList["cloak of many fashions"] = {
	name : "Cloak of Many Fashions",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "As a bonus action while wearing this cloak, I can change its style, color, and apparent qualities. The cloak's weight doesn't change. Regardless of its appearance, the cloak can't be anything but a cloak. Although it can duplicate the appearance of other magic cloaks, it doesn't gain their magical properties.",
	descriptionFull : "While wearing this cloak, you can take a Bonus Action to change the style, color, and apparent quality of the garment. The cloak’s weight doesn’t change. Regardless of its appearance, the cloak can’t be anything but a cloak. Although it can duplicate the appearance of other magic cloaks, it doesn’t gain their magical properties.",
	action : [["bonus action", ""]]
};
MagicItemsList["cloak of protection"] = {
	name : "Cloak of Protection",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While I wear this cloak, I gain a +1 bonus to AC and saving throws.",
	descriptionFull : "You gain a +1 bonus to Armor Class and saving throws while you wear this cloak.",
	attunement : true,
	extraAC : [{name : "Cloak of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC while attuned."}],
	addMod : [{ type : "save", field : "all", mod : 1, text : "While I wear the Cloak of Protection, I gain a +1 bonus to all my saving throws." }]
};
MagicItemsList["cloak of the bat"] = {
	name : "Cloak of the Bat",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "This cloak grants me adv. on Stealth checks. In dim light or darkness, I can fly with it and, once per dawn, use it to transform myself into a bat as if casting Polymorph. To fly, at 40 ft speed, I have to grip its edges with both my hands. While in the form of the bat, I retain my Intelligence, Wisdom, and Charisma scores.",
	descriptionFull : "While wearing this cloak, you have Advantage on Dexterity (Stealth) checks. In an area of Dim Light or Darkness, you can grip the edges of the cloak and use it to gain a Fly Speed of 40 feet. If you ever fail to grip the cloak’s edges while flying in this way, or if you are no longer in Dim Light or Darkness, you lose this Fly Speed.\n   While wearing the cloak in an area of Dim Light or Darkness, you can cast Polymorph on yourself, shape-shifting into a Bat. While in that form, you retain your Intelligence, Wisdom, and Charisma scores. The cloak can’t be used this way again until the next dawn.",
	attunement : true,
	usages : 1,
	recovery : "dawn",
	additional : "Polymorph",
	advantages : [["Stealth", true]],
	spellcastingBonus : {
		name : "Only self into bat",
		spells : ["polymorph"],
		selection : ["polymorph"],
		firstCol : "oncelr"
	},
	spellChanges : {
		"polymorph" : {
			range : "Self",
			description : "Only cast in dim light or darkness; I transform into a bat, gaining its stats, but I keep my Int, Wis, Cha",
			changes : "The spell can only turn the wearer into a bat, but the wearer keeps its Intelligence, Wisdom, and Charisma scores."
		}
	}
};
MagicItemsList["cloak of the manta ray"] = {
	name : "Cloak of the Manta Ray",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While wearing this cloak, I can breathe underwater, and I have a Swim Speed of 60 feet.",
	descriptionFull : "While wearing this cloak, you can breathe underwater, and you have a Swim Speed of 60 feet.",
	speed : { swim : { spd : "fixed 60", enc : "fixed 50" } }
};
MagicItemsList["clockwork amulet"] = {
	name : "Clockwork Amulet",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "Once per dawn when I make an attack roll while wearing this copper amulet, I can forgo rolling the d20 to get a 10 on the die. The amulet contains tiny interlocking gears powered by magic from Mechanus, a plane of clockwork predictability. When I hold it up to my ear, I can hear faint ticking and whirring noises.",
	descriptionFull : "This copper amulet contains tiny interlocking gears and is powered by magic from Mechanus, a plane of clockwork predictability. Faint ticking and whirring noises emanate from within.\n   When you make an attack roll while wearing the amulet, you can forgo rolling the d20 to get a 10 on the die. Once used, this property can’t be used again until the next dawn.",
	usages : 1,
	recovery : "dawn"
};
MagicItemsList["clothes of mending"] = {
	name : "Clothes of Mending",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "This elegant outfit of traveler's clothes magically mends itself to counteract daily wear and tear. Pieces of the outfit that are destroyed can't be repaired in this way.",
	descriptionFull : "This elegant outfit magically mends itself to counteract daily wear and tear. Pieces of the outfit that are destroyed can’t be repaired in this way.",
	weight : 4
};
MagicItemsList["crystal ball"] = {
	name : "Crystal Ball",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	description : "I can cast Scrying (DC 17) at will while touching this ball of about 6 inches in diameter.",
	descriptionFull : "While touching this crystal orb, you can cast Scrying (save DC 17) with it.",
	attunement : true,
	weight : 3, // As orb arcane focus
	allowDuplicates : true,
	choices : ["Crystal Ball  ", "Crystal Ball of Mind Reading", "Crystal Ball of Telepathy", "Crystal Ball of True Seeing"],
	"crystal ball  " : {
		name : "Crystal Ball  ",
		rarity : "very rare",
		magicItemTable : "?",
		fixedDC : 17,
		spellcastingBonus : {
			name : "DC 17",
			spells : ["scrying"],
			selection : ["scrying"],
			firstCol : "atwill"
		}
	},
	"crystal ball of mind reading" : {
		name : "Crystal Ball of Mind Reading",
		rarity : "legendary",
		magicItemTable : "?",
		description : "I can cast Scrying (DC 17) at will while touching this crystal ball of 6\" diameter. While scrying, I can cast Detect Thoughts (DC 17) to target creatures I can see within 30 ft of the spell's sensor. I don't need to concentrate on this Detect Thoughts, but it ends when the scrying ends.",
		descriptionFull : "While touching this crystal orb, you can cast Scrying (save DC 17) with it. In addition, you can cast Detect Thoughts (save DC 17) targeting creatures you can see within 30 feet of the spell’s sensor. You don’t need to concentrate on this Detect Thoughts spell to maintain it during its duration, but it ends if the Scrying spell ends.",
		fixedDC : 17,
		spellcastingBonus : {
			name : "DC 17",
			spells : ["scrying", "detect thoughts"],
			selection : ["scrying", "detect thoughts"],
			firstCol : "atwill",
			times : 2
		},
		spellChanges : {
			"detect thoughts" : {
				duration : "1 min",
				changes : "Detect Thoughts only works through the spell sensor of the Scrying spell and doesn't require concentration. It ends when the Scrying spell ends."
			}
		}
	},
	"crystal ball of telepathy" : {
		name : "Crystal Ball of Telepathy",
		rarity : "legendary",
		magicItemTable : "?",
		description : "I can cast Scrying (DC 17) while touching this 6\" crystal ball. While scrying, I can communicate telepathically with creatures within 30 ft of the spell's sensor and can cast Suggestion (DC 17) once per dawn on one of them. I don't need to concentrate on this Suggestion, but it ends when the scrying ends.",
		descriptionFull : "While touching this crystal orb, you can cast Scrying (save DC 17) with it. In addition, you can communicate telepathically with creatures you can see within 30 feet of the spell’s sensor. You can also cast Suggestion (save DC 17) through the sensor on one of those creatures. You don’t need to concentrate on this Suggestion to maintain it during its duration, but it ends if Scrying ends. You can’t cast Suggestion in this way again until the next dawn.",
		fixedDC : 17,
		spellcastingBonus : [{
			name : "At will, DC 17",
			spells : ["scrying"],
			selection : ["scrying"],
			firstCol : "atwill"
		}, {
			name : "1\xD7 per long rest, DC 17",
			spells : ["suggestion"],
			selection : ["suggestion"],
			firstCol : "oncelr"
		}],
		limfeaname : "Suggestion through Crystal Ball",
		usages : 1,
		recovery : "dawn",
		spellChanges : {
			"suggestion" : {
				duration : "8 h (scrying)",
				changes : "Suggestion only works through the spell sensor of the Scrying spell and doesn't require concentration. It ends when the Scrying spell ends."
			},
			"scrying" : {
				description : "1 crea save or sensor follows it around; or sensor in familiar location; telepathy 30 ft on sensor; see B",
				changes : "I can communicate telepathically with creatures within 30 ft of the scrying sensor."
			}
		}
	},
	"crystal ball of true seeing" : {
		name : "Crystal Ball of True Seeing",
		rarity : "legendary",
		magicItemTable : "?",
		description : "I can cast Scrying (save DC 17) at will while touching this ball of about 6 inches in diameter. While scrying, I can see out from the spell's sensor with truesight out to 120 ft.",
		descriptionFull : "While touching this crystal orb, you can cast Scrying (save DC 17) with it. In addition, you have Truesight with a range of 120 feet centered on the spell’s sensor.",
		fixedDC : 17,
		spellcastingBonus : {
			name : "DC 17",
			spells : ["scrying"],
			selection : ["scrying"],
			firstCol : "atwill"
		},
		spellChanges : {
			"scrying" : {
				description : "1 crea save or sensor follows it around; or sensor in familiar location; truesight 120 ft on sensor; see B",
				changes : "I have truesight out to 120 ft from the scrying sensor."
			}
		}
	}
};
MagicItemsList["cube of force"] = { // contains contributions by Larry Hoy
	name : "Cube of Force",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "Each face of this 1-inch cube has a distinct marking on it. As a magic action, I can press one of these faces, expending a number of charges to cast a spell based on the chosen face, if enough charges remain. The chosen spell is cast. See Notes page for details.",
	descriptionFull : "This cube is about an inch across. Each face has a distinct marking on it. The cube starts with 10 charges, and it regains 1d6 expended charges daily at dawn." + 
	toUni("Spell\tCharge Cost") + "\nMage Armor\t1\nShield\t1\nLeomund's Tiny Hut\t3\nMordenkainen's Private Sanctum\t4\nOtiluke's Resilient Sphere\t4\nWall of Force\t5",
	attunement : true,
	usages : 10,
	recovery : "dawn",
	additional : "regains 1d6",
	action : [["action", ""]],
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "Cube of Force",
		spells : ["mage armor", "shield"],
		selection : ["mage armor", "shield"],
		times : 2,
		firstCol : 1,
	}, {
		name : "Cube of Force",
		spells : ["leomund's tiny hut"],
		selection : ["leomund's tiny hut"],
		times : 1,
		firstCol : 3,
	}, {
		name : "Cube of Force",
		spells : ["mordenkainen's private sanctum", "otiluke's resilient sphere"],
		selection : ["mordenkainen's private sanctum", "otiluke's resilient sphere"],
		times : 2,
		firstCol : 4,
	}, {
		name : "Cube of Force",
		spells : ["wall of force"],
		selection : ["wall of force"],
		times : 1,
		firstCol : 5,
	}],
	toNotesPage : [{
		name : "Cube of Force Faces",
		note : [
			"CHARGES\tSPELL",
			"1\tMage Armor",
			"1\tShield",
			"3\tLeomund's Tiny Hut",
			"4\tMordenkainen's Private Sanctum",
			"4\tOtiluke's Resilient Sphere",
			"5\tWall of Force"
		]
	}]
};
MagicItemsList["cube of summoning"] = {
	name : "Cube of Summoning",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	usages : 1,
	recovery : "dawn",
	description : "This Tiny cube resembles a Jack-in-the-box, as a Magic action, I can crank the handle roll 1d6, when I do a random level 5, summon spell is cast (see notes page), this spell has a DC of 17, with a +9 to hit, and doesn't require Concentration. Once I use this cube I can't again until the next dawn.",
	descriptionFull : "This Tiny cube looks like a jack-in-the-box. When you wind its crank as a Magic action, a merry tune emits from the box, the lid pops open, a creature appears in the nearest unoccupied space, and the lid closes. The lid can’t otherwise be opened.\nRoll on the Cube of Summoning table to determine which spell the cube casts to summon the creature. The spell is cast at level 5 (save DC 17, +9 attack bonus) and doesn’t require Concentration, but you otherwise function as the spell’s caster.\nOnce the cube summons a creature, the cube can’t do so again until the next dawn." + 
	toUni("1d6\tSpell") + "\n1\tSummon Aberration\n2\tSummon Beast\n3\tSummon Construct\n4\tSummon Dragon\n5\tSummon Elemental\n6\tSummon Fey",
	fixedDC : 17,
	spellFirstColTitle : "d6",
	spellcastingBonus : [{
		name : "Cube of Summoning",
		spells : ["summon aberration"],
		selection : ["summon aberration"],
		times : 1,
		firstCol : 1,
	}, {
		name : "Cube of Summoning",
		spells : ["summon beast"],
		selection : ["summon beast"],
		times : 1,
		firstCol : 2,
	}, {
		name : "Cube of Summoning",
		spells : ["summon construct"],
		selection : ["summon construct"],
		times : 1,
		firstCol : 3,
	}, {
		name : "Cube of Summoning",
		spells : ["summon dragon"],
		selection : ["summon dragon"],
		times : 1,
		firstCol : 4,
	}, {
		name : "Cube of Summoning",
		spells : ["summon elemental"],
		selection : ["summon elemental"],
		times : 1,
		firstCol : 5,
	}, {
		name : "Cube of Summoning",
		spells : ["summon fey"],
		selection : ["summon fey"],
		times : 1,
		firstCol : 6,
	}],
	toNotesPage : [{
		name : "Cube of Summoning",
		note : [
			"1d6\tSPELL",
			"1\tSummon Aberration",
			"2\tSummon Beast",
			"3\tSummon Construct",
			"4\tSummon Dragon",
			"5\tSummon Elemental",
			"6\tSummon Fey"
		]
	}]
};
MagicItemsList["cubic gate"] = { // contains contributions by Larry Hoy
	name : "Cubic Gate",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "legendary",
	magicItemTable : "?",
	description : "The six sides of this 3-inch cube, which radiates palpable magic energy, are each keyed to a different plane of existence (one is material plane). As an action, I can expend a charge and press a side of the cube once to cast Gate or twice to cast Plane Shift (DC 17). Both spells only link to the plane on the pressed side.",
	descriptionFull : "This cube is 3 inches across and radiates palpable magical energy. The six sides of the cube are each keyed to a different plane of existence, one of which is the Material Plane. The other sides are linked to planes determined by the DM.\n   The cube has 3 charges and regains 1d3 expended charges daily at dawn. As a Magic action, you can expend 1 of the cube’s charges to cast one of the following spells using the cube.\n   Gate. Pressing one side of the cube, you cast Gate, opening a portal to the plane of existence keyed to that side.\n   Plane Shift. Pressing one side of the cube twice, you cast Plane Shift, transporting the targets to the plane of existence keyed to that side.",
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3",
	spellFirstColTitle : "Ch",
	fixedDC : 17,
	spellcastingBonus : {
		name : "1 charge",
		spells : ["gate", "plane shift"],
		selection : ["gate", "plane shift"],
		times : 2,
		firstCol : 1
	},
	spellChanges : {
		"plane shift" : {
			description : "Me + 8 willing crea teleport to, or spell attack + save to transport unwilling to plane keyed to the side",
			changes : "Using the Cubic Gate, the spell only links to the plane on the side of the cube that pressed."
		},
		"gate" : {
			description : "Create a portal to a precise location on the plane keyed to the side; can transport named creature to me",
			changes : "Using the Cubic Gate, the spell only links to the plane on the side of the cube that pressed."
		}
	}
};
MagicItemsList["daern's instant fortress"] = { // contains contributions by Larry Hoy
	name : "Daern's Instant Fortress",
	nameAlt : "Instant Fortress",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description: "As a magic action, I can place this 1-inch adamantine statuette on the ground and speak its command word, making it grow into a 20-ft by 20-ft by 30-ft high adamantine tower with a door facing me, arrow slits on all sides, battlement atop, two floors, and a ladder along one wall ending at a trapdoor to the roof. See Notes page for details.",
	descriptionFull : "As a Magic action, you can place this 1-inch adamantine statuette on the ground and, using a command word, cause it to grow rapidly into a square adamantine tower. Repeating the command word causes the tower to revert to statuette form, which works only if the tower is empty. Each creature in the area where the tower appears is pushed to an unoccupied space outside but next to the tower. Objects in the area that aren’t being worn or carried are also pushed clear of the tower.\n   The tower is 20 feet on a side and 30 feet high, with arrow slits on all sides and a battlement atop it. Its interior is divided into two floors, with a ladder, staircase, or ramp (your choice) connecting them. This ladder, staircase, or ramp ends at a trapdoor leading to the roof. When created, the tower has a single door at ground level on the side facing you. The door opens only at your command, which you can issue as a Bonus Action. It is immune to the Knock spell and similar magic.\n   Magic prevents the tower from being tipped over. The roof, the door, and the walls each have AC 20; HP 100; Immunity to Bludgeoning, Piercing, and Slashing damage except that which is dealt by siege equipment; and Resistance to all other damage. Shrinking the tower back down to statuette form doesn’t repair damage to the tower. Only a Wish spell can repair the tower (this use of the spell counts as replicating a spell of level 8 or lower). Each casting of Wish causes the tower to regain all its Hit Points.",
	action : [["action", ""], ["bonus action", " (Open Door)"]],
	toNotesPage : [{
		name : "Fortress Details",
		note : [
			"As an action I can place this 1-inch adamantine statuette on the ground and speak its command word. The statuette rapidly grows into a fortress that remains until I use an action to speak the command word that dismisses it, which works only if the fortress is empty.",
			"The fortress is a square tower, 20 feet on a side and 30 feet high, with arrow slits on all sides and a battlement atop it. Its interior is divided into two floors. with a ladder running along one wall to connect them. The ladder ends at a trapdoor leading to the roof.",
			"When activated, the tower has a small door on the side facing me. The door opens only at my command, which I can speak as a bonus action. It is immune to the Knock spell and similar magic (e.g., a Chime of Opening).",
			"Each creature in the area where the tower appears is pushed to an unoccupied space outside but next to the tower. Objects in the area that aren’t being worn or carried are also pushed clear of the tower.",
			"The tower is made of adamantine, and its magic prevents it from being tipped over. The roof, the door, and the walls each have 100 hit points, immunity to damage from nonmagical weapons excluding siege weapons, and resistance to all other damage. Only a Wish spell can repair the fortress (this use of the spell counts as replicating a spell of 8th level or lower). Each casting of Wish causes the tower to regain all its Hit Points."
		]
	}]
};
MagicItemsList["dagger of venom"] = {
	name : "Dagger of Venom",
	source : [["DMG2024", "-"]],
	type : "weapon (dagger)",
	rarity : "rare",
	magicItemTable : "?",
	description : "This magical dagger adds a +1 bonus to attack and damage rolls made with it. As a bonus action once per dawn, I can have the blade coat itself with thick, black poison, lasting 1 min. While it is coated, the first creature hit must make a DC 15 Con save or take 2d10 poison damage and become poisoned for 1 min.",
	descriptionFull : "You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon.\n   You can take a Bonus Action to magically coat the blade with poison. The poison remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a DC 15 Constitution saving throw or take 2d10 Poison damage and have the Poisoned condition for 1 minute. The weapon can’t be used this way again until the next dawn.",
	weight : 1,
	usages : 1,
	recovery : "dawn",
	weaponsAdd : ["Dagger of Venom"],
	weaponOptions : {
		baseWeapon : "dagger",
		regExpSearch : /^(?=.*dagger)(?=.*venom).*$/i,
		name : "Dagger of Venom",
		source : [["DMG2024", "-"]],
		description : "Finesse, light, thrown; If coated, DC 15 Con save or +2d10 poison damage \u0026 1 min poisoned; Nick",
		modifiers : [1, 1]
	}
};
MagicItemsList["dancing sword"] = {
	name : "Dancing Sword",
	nameTest : "Dancing",
	source : [["DMG2024", "-"]],
	type : "weapon (greatsword, longsword, rapier, scimitar, or shortsword)",
	rarity : "very rare",
	magicItemTable : "?",
	attunement : true,
	description : "As a bonus action, I can toss this sword into the air and use the command to make it hover, fly up to 30 ft and attack a target of my choice (as if I'm using it).\nI can command it to move/attack again as a bonus action while it hovers and is in 30 ft.\nAfter the 4th attack, it moves 30 ft to return to my hand.",
	descriptionLong : "As a bonus action, I can toss this magic sword into the air and use the command word to make it hover, fly up to 30 ft and attack a target of my choice within 5 ft of it.\nThe attack uses my attack roll and ability score for damage as if I would be using the sword.\nI can command it to move and attack again as a bonus action while it hovers.\nAfter the 4th attack, it moves 30 ft to try and return to my hand.\nIf it can't reach me or my hands are full, it falls to the ground after moving.\nIt also ceases to hover if I grasp it or move more than 30 ft away from it.",
	descriptionFull : "You can take a Bonus Action to toss this magic weapon into the air. When you do so, the weapon begins to hover, flies up to 30 feet, and attacks one creature of your choice within 5 feet of itself. The weapon uses your attack roll and adds your ability modifier to damage rolls.\n   While the weapon hovers, you can take a Bonus Action to cause it to fly up to 30 feet to another spot within 30 feet of you. As part of the same Bonus Action, you can cause the weapon to attack one creature within 5 feet of the weapon.\n   After the hovering weapon attacks for the fourth time, it flies back to you and tries to return to your hand. If you have no hand free, the weapon falls to the ground in your space. If the weapon has no unobstructed path to you, it moves as close to you as it can and then falls to the ground. It also ceases to hover if you grasp it or are more than 30 feet away from it.",
	action : [["bonus action", ""]],
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", ["greatsword", "longsword", "rapier", "scimitar", "shortsword"]],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/dancing/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Attacks on its own as a bonus action';
				}
			},
			'If I include the word "Dancing" in a the name of a sword, it will be treated as the magic weapon Dancing Sword. The sword can be made to attack on its own as a bonus action.'
		]
	}
};
MagicItemsList["dark shard amulet"] = {
	name : "Dark Shard Amulet",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "I can use this amulet of extraplanar material from the realm of my warlock patron as a spellcasting focus for my warlock spells. Once per long rest, I can use it to cast a warlock cantrip that I don't know. To do so, I must make a DC 10 Intelligence (Arcana) check, wasting the attempt as well as my action if I fail.",
	descriptionFull : "This amulet is fashioned from a shard of resilient material originating from an otherworldly realm. While you are wearing it, you gain the following benefits.\n \u2022 Spellcasting Focus. You can use the amulet as a Spellcasting Focus for your Warlock spells.\n \u2022 Unknown Spell. As a Magic action, you can try to cast a cantrip that you don’t know. The cantrip must be on the Warlock spell list and have a casting time of an action, and you make a DC 10 Intelligence (Arcana) check. On a successful check, you cast the spell. On a failed check, the spell fails, and the action used to cast it is wasted. In either case, you can’t use this property again until you finish a Long Rest.",
	attunement : true,
	prerequisite : "Requires attunement by a warlock",
	prereqeval : function (v) { return classes.known.warlock ? true : false; },
	usages : 1,
	recovery : "long rest",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Remove the already known cantrips, from any source except magic items
				if (spName === 'dark shard amulet') {
					var allSpellsKnown = [];
					for (var sCast in CurrentSpells) {
						if (sCast.refType === "item") continue;
						var oCast = CurrentSpells[sCast];
						if (oCast.selectCa) allSpellsKnown = allSpellsKnown.concat(oCast.selectCa);
						if (oCast.selectBo) allSpellsKnown = allSpellsKnown.concat(oCast.selectBo);
					}
					var knownCantrips = OrderSpells(allSpellsKnown, "single", false, false, 0);
					if (!spList.notspells) spList.notspells = [];
					spList.notspells = spList.notspells.concat(knownCantrips);
				}
			}
		],
		spellAdd : [
			function (spellKey, spellObj, spName, isDuplicate) {
				if (spName == 'warlock-dark shard amulet') {
					spellObj.firstCol = "";
				}
			}
		]
	},
	eval : function () {
		CurrentSpells['warlock-dark shard amulet'] = {
			name : 'Dark Shard Amulet (item)',
			ability : "warlock",
			list : { 'class' : 'warlock', level : [0, 0] },
			known : { cantrips : 0, spells : 'list' },
			bonus : {
				bon1 : {
					name : 'Just select "Full List"',
					spells : []
				},
				bon2 : {
					name : 'on the bottom left',
					spells : []
				}
			},
			typeList : 4,
			refType : "item",
			allowUpCasting : true,
			firstCol : ""
		};
		SetStringifieds('spells'); CurrentUpdates.types.push('spells');
	},
	removeeval : function () {
		delete CurrentSpells['dark shard amulet'];
		SetStringifieds('spells'); CurrentUpdates.types.push('spells');
	}
};
MagicItemsList["decanter of endless water"] = {
	name : "Decanter of Endless Water",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : 'As an action, I open the flask \u0026 speak a command word, pouring fresh/salt water out until my next turn starts. "Splash" for 1 gal. "Fountain" for 5 gal. "Geyser" for 30 gal in 30 ft \xD7 1 ft geyser. As a bonus action, I can aim it at a target, which has to make a DC 13 Str save or take 1d4 bludgeoning damage and fall prone.',
	descriptionLong : 'As an action, I can remove the stopper from this flask and speak one of three command words, pouring fresh or salt water (my choice) out until my next turn starts. "Splash" produces 1 gallon. "Fountain" produces 5 gallons. "Geyser" produces 30 gallons of water that gushes forth in a geyser 30 ft long by 1 ft wide. As a bonus action while holding it, I can aim the geyser at a creature I can see within 30 ft. The target must succeed on a DC 13 Strength save or take 1d4 bludgeoning damage and fall prone. I can instead target an unattended object weighing up to 200 lb, knocking it over or pushing it up to 15 ft away.',
	descriptionFull : "This stoppered flask sloshes when shaken, as if it contains water. The decanter weighs 2 pounds.\n   You can take a Magic action to remove the stopper and issue one of three command words, whereupon an amount of fresh water or salt water (your choice) pours out of the flask. The water stops pouring out at the start of your next turn. Choose from the following command words:\n \u2022 \"Splash\" The decanter produces 1 gallon of water.\n \u2022 \"Fountain\" The decanter produces 5 gallons of water.\n \u2022 \"Geyser\" The decanter produces 30 gallons of water that gushes forth in a Line 30 feet long and 1 foot wide. If you’re holding the decanter, you can aim the geyser in one direction (no action required). One creature of your choice in the Line must succeed on a DC 13 Strength saving throw or take 1d4 Bludgeoning damage and have the Prone condition. Instead of a creature, you can target one object in the Line that isn’t being worn or carried and that weighs no more than 200 pounds. The object is knocked over by the geyser.",
	weight : 2
};
MagicItemsList["deck of illusions"] = {
	name : "Deck of Illusions",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "As a magic action, I can draw a card at random from this deck and throw it on the ground within 30 ft. An illusion, determined by the type of card, forms over the thrown card and remains until dispelled. While I'm within 120 ft of it, I can use an action to move it within 30 ft of the card. See Notes page for more details.",
	descriptionFull : [
		"This box contains a set of cards. A full deck has 34 cards: 32 depicting specific creatures and two with a mirrored surface. A deck found as treasure is usually missing 1d20 − 1 cards.",
		"The magic of the deck functions only if its cards are drawn at random. You can take a Magic action to draw a card at random from the deck and throw it to the ground at a point within 30 feet of yourself. An illusion of a creature, determined by rolling on the Deck of Illusions table, forms over the thrown card and remains until dispelled. The illusory creature created by the card looks and behaves like a real creature of its kind, except that it can do no harm. While you are within 120 feet of the illusory creature and can see it, you can take a Magic action to move it anywhere within 30 feet of its card.",
		"Any physical interaction with the illusory creature reveals it to be false, because objects pass through it. A creature that takes a Study action to visually inspect the illusory creature identifies it as an illusion with a successful DC 15 Intelligence (Investigation) check. The illusion lasts until its card is moved or the illusion is dispelled (using a Dispel Magic spell or a similar effect). When the illusion ends, the image on its card disappears, and that card can’t be used again.\n",
		toUni("1d100\tIllusion"),
		"  01-03\tAdult Red dragon",
		"  04-06\tArchmage",
		"  07-09\tAssassin",
		"  10-12\tBandit Captain",
		"  13-15\tBeholder",
		"  16-18\tBerserker",
		"  19-21\tBugbear Warrior",
		"  22-24\tCloud Giant",
		"  25-27\tDruid",
		"  28-30\tErinyes",
		"  31-33\tEttin",
		"  34-36\tFire Giant",
		"  37-39\tFrost Giant",
		"  40-42\tGnoll Warrior",
		"  43-45\tGoblin Warrior",
		"  46-48\tGuardian Naga",
		"  49-51\tHill Giant",
		"  52-54\tHobgoblin Warrior",
		"  55-57\tIncubus",
		"  58-60\tIron Golem",
		"  61-63\tKnight",
		"  64-66\tKobold Warrior",
		"  67-69\tLich",
		"  70-72\tMedusa",
		"  73-75\tNight Hag",
		"  76-78\tOgre",
		"  79-81\tOni",
		"  82-84\tPriest",
		"  85-87\tSuccubus",
		"  88-90\tTroll",
		"  91-93\tVeteran Warrior",
		"  94-96\tWyvern",
		"  97-00\tThe Card drawer"
	].join("\n"),
	toNotesPage : [{
		name : "Cards and Their Effects",
		note : [
			"This box contains a set of cards. A full deck has 34 cards: 32 depicting specific creatures and two with a mirrored surface. A deck found as treasure is usually missing 1d20 − 1 cards.",
			"The magic of the deck functions only if its cards are drawn at random. You can take a Magic action to draw a card at random from the deck and throw it to the ground at a point within 30 feet of yourself. An illusion of a creature, determined by rolling on the Deck of Illusions table, forms over the thrown card and remains until dispelled. The illusory creature created by the card looks and behaves like a real creature of its kind, except that it can do no harm. While you are within 120 feet of the illusory creature and can see it, you can take a Magic action to move it anywhere within 30 feet of its card.",
			"Any physical interaction with the illusory creature reveals it to be false, because objects pass through it. A creature that takes a Study action to visually inspect the illusory creature identifies it as an illusion with a successful DC 15 Intelligence (Investigation) check. The illusion lasts until its card is moved or the illusion is dispelled (using a Dispel Magic spell or a similar effect). When the illusion ends, the image on its card disappears, and that card can’t be used again.\n",
			"1d100\tIllusion",
			"  01-03\tAdult Red dragon",
			"  04-06\tArchmage",
			"  07-09\tAssassin",
			"  10-12\tBandit Captain",
			"  13-15\tBeholder",
			"  16-18\tBerserker",
			"  19-21\tBugbear Warrior",
			"  22-24\tCloud Giant",
			"  25-27\tDruid",
			"  28-30\tErinyes",
			"  31-33\tEttin",
			"  34-36\tFire Giant",
			"  37-39\tFrost Giant",
			"  40-42\tGnoll Warrior",
			"  43-45\tGoblin Warrior",
			"  46-48\tGuardian Naga",
			"  49-51\tHill Giant",
			"  52-54\tHobgoblin Warrior",
			"  55-57\tIncubus",
			"  58-60\tIron Golem",
			"  61-63\tKnight",
			"  64-66\tKobold Warrior",
			"  67-69\tLich",
			"  70-72\tMedusa",
			"  73-75\tNight Hag",
			"  76-78\tOgre",
			"  79-81\tOni",
			"  82-84\tPriest",
			"  85-87\tSuccubus",
			"  88-90\tTroll",
			"  91-93\tVeteran Warrior",
			"  94-96\tWyvern",
			"  97-00\tThe Card drawer"
		].join("\n")
	}]
};
MagicItemsList["deck of many things"] = { // contains contributions by Larry Hoy
	name : "Deck of Many Things",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "legendary",
	magicItemTable : "?",
	notLegalAL : true,
	description : "Before drawing cards from this deck, I must declare how many I wish to draw and then draw that number randomly. Any cards drawn in excess have no effect. When a card is drawn, its magic takes effect, it fades from existence, and, unless the card is the Fool or the Jester, reappears in the deck. See Notes page.",
	descriptionFull : "Usually found in a box or pouch, this deck contains a number of cards made of ivory or vellum. Most (75 percent) of these decks have thirteen cards, but some have twenty-two. Use the appropriate column of the Deck of Many Things table when randomly determining cards drawn from the deck.\n   Before you draw a card, you must declare how many cards you intend to draw and then draw them randomly. Any cards drawn in excess of this number have no effect. Otherwise, as soon as you draw a card from the deck, its magic takes effect. You must draw each card no more than 1 hour after the previous draw. If you fail to draw the chosen number, the remaining number of cards fly from the deck on their own and take effect all at once.\n   Once a card is drawn, it disappears. Unless the card is the Fool or Jester, the card reappears in the deck, making it possible to draw the same card twice. (Once the Fool or Jester has left the deck, reroll on the table if that card comes up again.)\n   A Question of Enmity\n   Two of the cards in the Deck of Many Things can earn a character the enmity of another being. With the Flames card, the enmity is overt. The character should experience the devil’s malevolent efforts on multiple occasions. Seeking out the fiend shouldn’t be a simple task, and the adventurer should clash with the devil’s allies and followers a few times before being able to confront the devil.\n   In the case of the Rogue card, the enmity is secret and should come from someone thought to be a friend or an ally. As Dungeon Master, you should wait for a dramatically appropriate moment to reveal this enmity, leaving the adventurer guessing who is likely to become a betrayer.\n\n" + toUni("1d100(13-Card Deck)\t1d100(22-Card Deck)\tCard") + "\n     -  \t01-05\tBalance\n     -  \t06-10\tComet\n     -  \t11-14\tDonjon\n   01-08\t15-18\tEuryale\n     -  \t19-23\tFates\n   09-16\t24-27\tFlames\n     -  \t28-31\tFool\n     -  \t32-36\tGem\n   17-24\t37-41\tJester\n   25-32\t42-46\tKey\n   33-40\t47-51\tKnight\n   41-48\t52-56\tMoon\n     -  \t57-60\tPuzzle\n   49-56\t61-64\tRogue\n   57-64\t65-68\tRuin\n     -  \t69-73\tSage\n   65-72\t74-77\tSkull\n   73-80\t78-82\tStar\n   81-88\t83-87\tSun\n     -  \t88-91\tTalons\n   89-96\t92-96\tThrone\n   97-00\t97-00\tVoid\n" + [
		toUni("Balance") + ". You can increase one of your ability scores by 2, to a maximum of 22, provided you also decrease another one of your ability scores by 2. You can’t decrease an ability that has a score of 5 or lower. Alternatively, you can choose not to adjust your ability scores, in which case this card has no effect.",
		toUni("Comet") + ". The next time you enter combat against one or more Hostile creatures, you can select one of them as your foe when you roll Initiative. If you reduce your foe to 0 Hit Points during that combat, you have Advantage on Death Saving Throws for 1 year. If someone else reduces your chosen foe to 0 Hit Points or you don’t choose a foe, this card has no effect.",
		toUni("Donjon") + ". You disappear and become entombed in a state of suspended animation in an extradimensional sphere. Everything you’re wearing and carrying disappears with you except for Artifacts, which stay behind in the space you occupied when you disappeared. You remain imprisoned until you are found and removed from the sphere. You can’t be located by any Divination magic, but a Wish spell can reveal the location of your prison. You draw no more cards.",
		toUni("Euryale") + ". The card’s medusa-like visage curses you. You take a −2 penalty to saving throws while cursed in this way. Only a god or the magic of the Fates card can end this curse.",
		toUni("Fates") + ". Reality’s fabric unravels and spins anew, allowing you to avoid or erase one event as if it never happened. You can use the card’s magic as soon as you draw the card or at any other time before you die.",
		toUni("Flames") + ". A powerful devil becomes your enemy. The devil seeks your ruin and torments you, savoring your suffering before attempting to slay you. This enmity lasts until either you or the devil dies.",
		toUni("Fool") + ". You have Disadvantage on D20 Tests for the next 72 hours. Draw another card; this draw doesn’t count as one of your declared draws.",
		toUni("Gem") + ". Twenty-five pieces of jewelry worth 2,000 GP each or fifty gems worth 1,000 GP each appear at your feet.",
		toUni("Jester") + ". You have Advantage on D20 Tests for the next 72 hours, or you can draw two additional cards beyond your declared draws.",
		toUni("Key") + ". A Rare or rarer magic weapon with which you are proficient appears on your person. The DM chooses the weapon.",
		toUni("Knight") + ". You gain the service of a Knight, who magically appears in an unoccupied space you choose within 30 feet of yourself. The knight has the same alignment as you and serves you loyally until death, believing the two of you have been drawn together by fate. Work with your DM to create a name and backstory for this NPC. The DM can use a different stat block to represent the knight, as desired.",
		toUni("Moon") + ". You gain the ability to cast Wish 1d3 times.",
		toUni("Puzzle") + ". Permanently reduce your Intelligence or Wisdom by 1d4 + 1 (to a minimum score of 1). You can draw one additional card beyond your declared draws.",
		toUni("Rogue") + ". An NPC of the DM’s choice becomes Hostile toward you. You don’t know the identity of this NPC until they or someone else reveals it. Nothing less than a Wish spell or divine intervention can end the NPC’s hostility toward you.",
		toUni("Ruin") + ". All forms of wealth that you carry or own, other than magic items, are lost to you. Portable property vanishes. Businesses, buildings, and land you own are lost in a way that alters reality the least. If you have a Bastion (see chapter 8), it is destroyed by some calamity beyond your control. Any documentation that proves you should own something lost to this card also disappears.",
		toUni("Sage") + ". At any time you choose within one year of drawing this card, you can ask a question in meditation and mentally receive a truthful answer to that question.",
		toUni("Skull") + ". An Avatar of Death (see the accompanying stat block) appears in an unoccupied space as close to you as possible. The avatar targets only you with its attacks, appearing as a ghostly skeleton clad in a tattered black robe and carrying a spectral scythe. The avatar disappears when it drops to 0 Hit Points or you die. If an ally of yours deals damage to the avatar, that ally summons another Avatar of Death. The new avatar appears in an unoccupied space as close to that ally as possible and targets only that ally with its attacks. You and your allies can each summon only one avatar as a consequence of this draw. A creature slain by an avatar can’t be restored to life.",
		toUni("Star") + ". Increase one of your ability scores by 2, to a maximum of 24.",
		toUni("Sun") + ". A magic item (chosen by the DM) appears on your person. In addition, you gain 10 Temporary Hit Points daily at dawn until you die.",
		toUni("Talons") + ". Every magic item you wear or carry disintegrates. Artifacts in your possession vanish instead.",
		toUni("Throne") + ". You gain proficiency and Expertise in your choice of History, Insight, Intimidation, or Persuasion. In addition, you gain rightful ownership of a small keep somewhere in the world. However, the keep is currently home to one or more monsters, which must be cleared out before you can claim the keep as yours.",
		toUni("The Void") + ". Your soul is drawn from your body and contained in an object in a place of the DM’s choice. One or more powerful beings guard the place. While your soul is trapped in this way, your body is inert, ceases aging, and requires no food, air, or water. A Wish spell can’t return your soul to your body, but the spell reveals the location of the object that holds your soul. You draw no more cards."
	].join("\n \u2022 "),
	toNotesPage : [{
		name : "Cards and Their Effects",
		note : [
			"Usually found in a box or pouch, this deck contains a number of cards made of ivory or vellum. Most (75 percent) of these decks have thirteen cards, but some have twenty-two. Use the appropriate column of the Deck of Many Things table when randomly determining cards drawn from the deck.",
			"Before you draw a card, you must declare how many cards you intend to draw and then draw them randomly. Any cards drawn in excess of this number have no effect. Otherwise, as soon as you draw a card from the deck, its magic takes effect. You must draw each card no more than 1 hour after the previous draw. If you fail to draw the chosen number, the remaining number of cards fly from the deck on their own and take effect all at once.",
			"Once a card is drawn, it disappears. Unless the card is the Fool or Jester, the card reappears in the deck, making it possible to draw the same card twice. (Once the Fool or Jester has left the deck, reroll on the table if that card comes up again.)",
			"A Question of Enmity\nTwo of the cards in the Deck of Many Things can earn a character the enmity of another being. With the Flames card, the enmity is overt. The character should experience the devil’s malevolent efforts on multiple occasions. Seeking out the fiend shouldn’t be a simple task, and the adventurer should clash with the devil’s allies and followers a few times before being able to confront the devil.\nIn the case of the Rogue card, the enmity is secret and should come from someone thought to be a friend or an ally. As Dungeon Master, you should wait for a dramatically appropriate moment to reveal this enmity, leaving the adventurer guessing who is likely to become a betrayer.",
			"\n\n1d100 (13-Card Deck)\t1d100 (22-Card Deck)\tCARD",
			"  -  \t01-05\tBalance",
			"  -  \t06-10\tComet",
			"  -  \t11-14\tDonjon",
			"01-18\t15-18\tEuryale",
			"  -  \t19-23\tFates",
			"09-16\t24-27\tFlames",
			"  -  \t28-31\tFool",
			"  -  \t32-36\tGem",
			"17-24\t37-41\tJester",
			"25-32\t42-46\tKey",
			"33-40\t47-51\tKnight",
			"41-48\t52-56\tMoon",
			"  -  \t57-60\tPuzzle",
			"49-56\t61-64\tRogue",
			"57-64\t65-68\tRuin",
			"  -  \t69-73\tSage",
			"65-72\t74-77\tSkull",
			"73-80\t78-82\tStar",
			"81-88\t83-87\tSun",
			"  -  \t88-91\tTalons",
			"89-96\t92-96\tThrone",
			"97-00\t97-00\tVoid\n",
			"\u2022 Balance. You can increase one of your ability scores by 2, to a maximum of 22, provided you also decrease another one of your ability scores by 2. You can’t decrease an ability that has a score of 5 or lower. Alternatively, you can choose not to adjust your ability scores, in which case this card has no effect.",
			"\u2022 Comet. The next time you enter combat against one or more Hostile creatures, you can select one of them as your foe when you roll Initiative. If you reduce your foe to 0 Hit Points during that combat, you have Advantage on Death Saving Throws for 1 year. If someone else reduces your chosen foe to 0 Hit Points or you don’t choose a foe, this card has no effect.",
			"\u2022 Donjon. You disappear and become entombed in a state of suspended animation in an extradimensional sphere. Everything you’re wearing and carrying disappears with you except for Artifacts, which stay behind in the space you occupied when you disappeared. You remain imprisoned until you are found and removed from the sphere. You can’t be located by any Divination magic, but a Wish spell can reveal the location of your prison. You draw no more cards.",
			"\u2022 Euryale. The card’s medusa-like visage curses you. You take a −2 penalty to saving throws while cursed in this way. Only a god or the magic of the Fates card can end this curse.",
			"\u2022 Fates. Reality’s fabric unravels and spins anew, allowing you to avoid or erase one event as if it never happened. You can use the card’s magic as soon as you draw the card or at any other time before you die.",
			"\u2022 Flames. A powerful devil becomes your enemy. The devil seeks your ruin and torments you, savoring your suffering before attempting to slay you. This enmity lasts until either you or the devil dies.",
			"\u2022 Fool. You have Disadvantage on D20 Tests for the next 72 hours. Draw another card; this draw doesn’t count as one of your declared draws.",
			"\u2022 Gem. Twenty-five pieces of jewelry worth 2,000 GP each or fifty gems worth 1,000 GP each appear at your feet.",
			"\u2022 Jester. You have Advantage on D20 Tests for the next 72 hours, or you can draw two additional cards beyond your declared draws.",
			"\u2022 Key. A Rare or rarer magic weapon with which you are proficient appears on your person. The DM chooses the weapon.",
			"\u2022 Knight. You gain the service of a Knight, who magically appears in an unoccupied space you choose within 30 feet of yourself. The knight has the same alignment as you and serves you loyally until death, believing the two of you have been drawn together by fate. Work with your DM to create a name and backstory for this NPC. The DM can use a different stat block to represent the knight, as desired.",
			"\u2022 Moon. You gain the ability to cast Wish 1d3 times.",
			"\u2022 Puzzle. Permanently reduce your Intelligence or Wisdom by 1d4 + 1 (to a minimum score of 1). You can draw one additional card beyond your declared draws.",
			"\u2022 Rogue. An NPC of the DM’s choice becomes Hostile toward you. You don’t know the identity of this NPC until they or someone else reveals it. Nothing less than a Wish spell or divine intervention can end the NPC’s hostility toward you.",
			"\u2022 Ruin. All forms of wealth that you carry or own, other than magic items, are lost to you. Portable property vanishes. Businesses, buildings, and land you own are lost in a way that alters reality the least. If you have a Bastion (see chapter 8), it is destroyed by some calamity beyond your control. Any documentation that proves you should own something lost to this card also disappears.",
			"\u2022 Sage. At any time you choose within one year of drawing this card, you can ask a question in meditation and mentally receive a truthful answer to that question.",
			"\u2022 Skull. An Avatar of Death (see the accompanying stat block) appears in an unoccupied space as close to you as possible. The avatar targets only you with its attacks, appearing as a ghostly skeleton clad in a tattered black robe and carrying a spectral scythe. The avatar disappears when it drops to 0 Hit Points or you die. If an ally of yours deals damage to the avatar, that ally summons another Avatar of Death. The new avatar appears in an unoccupied space as close to that ally as possible and targets only that ally with its attacks. You and your allies can each summon only one avatar as a consequence of this draw. A creature slain by an avatar can’t be restored to life.",
			"\u2022 Star. Increase one of your ability scores by 2, to a maximum of 24.",
			"\u2022 Sun. A magic item (chosen by the DM) appears on your person. In addition, you gain 10 Temporary Hit Points daily at dawn until you die.",
			"\u2022 Talons. Every magic item you wear or carry disintegrates. Artifacts in your possession vanish instead.",
			"\u2022 Throne. You gain proficiency and Expertise in your choice of History, Insight, Intimidation, or Persuasion. In addition, you gain rightful ownership of a small keep somewhere in the world. However, the keep is currently home to one or more monsters, which must be cleared out before you can claim the keep as yours.",
			"\u2022 Void. Your soul is drawn from your body and contained in an object in a place of the DM’s choice. One or more powerful beings guard the place. While your soul is trapped in this way, your body is inert, ceases aging, and requires no food, air, or water. A Wish spell can’t return your soul to your body, but the spell reveals the location of the object that holds your soul. You draw no more cards."
		]
	}]
};
MagicItemsList["defender"] = {
	name : "Defender",
	source : [["DMG2024", "-"]],
	type : "weapon (any melee weapon)",
	rarity : "legendary",
	magicItemTable : "?",
	attunement : true,
	description : "I have a +3 bonus to attack and damage rolls made with this magic weapon. The first time I attack with it on each of my turns, I can transfer (part of) the bonus to AC instead. This adjustment remains in affect until the start of my next turn, although I must be holding the weapon to gain its bonus to AC.",
	descriptionFull : "You gain a +3 bonus to attack rolls and damage rolls made with this magic weapon.\n   The first time you attack with the weapon on each of your turns, you can transfer some or all of the weapon’s bonus to your Armor Class. For example, you could reduce the bonus to your attack rolls and damage rolls to +1 and gain a +2 bonus to Armor Class. The adjusted bonuses remain in effect until the start of your next turn, although you must hold the weapon to gain a bonus to AC from it.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "weapon"],
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && (/defender/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+3 bonus can be used for AC instead';
				}
			},
			'If I include the word "Defender" in a the name of a weapon, it will be treated as the magic weapon Defender. It has +3 to hit and damage, but this bonus can be lowered and added to AC instead. Decide to do so with the first attack on your turn.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/defender/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 3;
				}
			}, ''
		]
	}
};
MagicItemsList["+1 demon armor"] = { // contains contributions by Larry Hoy
	name : "+1 Demon Armor",
	source : [["DMG2024", "-"]],
	type : "armor (any)",
	rarity : "very rare",
	magicItemTable : "?",
	description : "While wearing this armor, I have +1 AC, know Abyssal, and can use its clawed gauntlets to make unarmed strikes that deal 1d8 slashing damage with a +1 bonus to hit and damage. I have disadv. on attacks and on saves vs. demons, their spells and abilities. I can't doff it without Remove Curse or similar magic.",
	descriptionFull : "While wearing this armor, you gain a +1 bonus to Armor Class, and you know Abyssal. In addition, the armor’s clawed gauntlets allow your Unarmed Strikes to deal 1d8 Slashing damage instead of the usual Bludgeoning damage, and you gain a +1 bonus to the attack and damage rolls of your Unarmed Strikes.\n   " + toUni("Curse") + ". Once you don this cursed armor, you can’t doff it unless you are targeted by a Remove Curse spell or similar magic. While wearing the armor, you have Disadvantage on attack rolls against demons and on saving throws against their spells and special abilities.",
	attunement : true,
	cursed : true,
	languageProfs : ["Abyssal"],
	savetxt : { text : ["Disadv. on saves vs. demons"] },
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "armor"],
	},
	calcChanges : {
		extraAC : [{
			mod : 1,
		}],
	},
	weaponsAdd: ["Demon Armor Claws"],
	weaponOptions: [{
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*demon)(?=.*armor)(?=.*claws).*$/i,
		name : "Demon Armor Claws",
		source: [["DMG2024", "-"]],
		damage : [1, 8, "slashing"],
		modifiers : [1, 1]
	}]
};
MagicItemsList["dimensional shackles"] = {
	name : "Dimensional Shackles",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "As a Utilize action, I can shackle an incapacitated creature of size Small to Large. They work as mundane manacles and prevent extradimensional movement, but not portal travel. Myself and others I designate can remove them as a Utilize action. The bound target can try every 30 days to break them with a DC 30 Athletics check.",
	descriptionFull : "You can take a Utilize action to place these shackles on a creature that has the Incapacitated condition. The shackles adjust to fit a creature of Small to Large size. The shackles prevent a creature bound by them from using any method of extradimensional movement, including teleportation or travel to a different plane of existence. They don’t prevent the creature from passing through an interdimensional portal.\n   You and any creature you designate when you use the shackles can take a Utilize action to remove them. Once every 30 days, the bound creature can make a DC 30 Strength (Athletics) check. On a successful check, the creature breaks free and destroys the shackles.",
	action : [["action", " (bind/remove)"]]
};
MagicItemsList["dragon scale mail"] = {
	name : "Dragon Scale Mail",
	source : [["DMG2024", "-"]],
	type : "armor (scale mail)",
	rarity : "very rare",
	magicItemTable : "?",
	description : "While wearing this armor, I gain a resistance to a damage type, +1 AC and advantage on saving throws against the breath weapons of dragons. Once per dawn as an action, I can magically discern the distance and direction to the closest dragon of the armor's type within 30 miles of me.",
	descriptionFull : "Dragon Scale Mail is made of the scales of one kind of dragon. Sometimes dragons collect their cast-off scales and gift them. Other times, hunters carefully preserve the hide of a dead dragon. In either case, Dragon Scale Mail is highly valued.\n   While wearing this armor, you gain a +1 bonus to Armor Class, you have Advantage on saving throws against the breath weapons of Dragons, and you have Resistance to one damage type determined by the kind of dragon that provided the scales (see the accompanying table).\n   Additionally, you can focus your senses as a Magic action to discern the distance and direction to the closest dragon within 30 miles of yourself that is of the same type as the armor. This action can’t be used again until the next dawn.\n\n" + toUni("Dragon\tResistance") + "\nBlack\tAcid\nBlue\tLightning\nBrass\tFire\nBronze\tLightning\nCopper\tAcid\nGold\tFire\nGreen\tPoison\nRed\tFire\nSilver\tCold\nWhite\tCold",
	attunement : true,
	weight : 45,
	allowDuplicates : true,
	usages : 1,
	recovery : "dawn",
	savetxt : {
		adv_vs : ["Dragon Breath Weapons"],
	},
	armorOptions : {
		regExpSearch : /^(?=.*dragon)(?=.*scale)(?=.*mail).*$/i,
		name : "Dragon Scale Mail",
		source : [["DMG2024", "-"]],
		type : "medium",
		ac : 15,
		stealthdis : true,
		weight : 45
	},
	choices : ["Black (acid)", "Blue (lightning)", "Brass (fire)", "Bronze (lightning)", "Copper (acid)", "Gold (fire)", "Green (poison)", "Red (fire)", "Silver (cold)", "White (cold)"],
	choicesNotInMenu : true,
	"black (acid)" : {
		name : "Black Dragon Scale Mail",
		description : "This scale mail gives +1 to AC, adv. on saves against the frightful presence and breath weapons of dragons, and resistance to acid damage. As an action, I can magically discern the distance and direction to the closest black dragon within 30 miles. Once I use this action, I can't use it again until the next dawn.",
		armorAdd : "Black Dragon Scale Mail",
		dmgres: ["Acid"],
		limfeaname : "Detect Black Dragon",
		action : [["action", "Detect Black Dragon"]]
	},
	"blue (lightning)" : {
		name : "Blue Dragon Scale Mail",
		description : "This scale mail gives +1 to AC, adv. on saves against the frightful presence and breath weapons of dragons, and resistance to lightning damage. As an action, I can magically discern the distance and direction to the closest blue dragon in 30 miles. Once I use this action, I can't use it again until the next dawn.",
		armorAdd : "Blue Dragon Scale Mail",
		dmgres: ["Lightning"],
		limfeaname : "Detect Blue Dragon",
		action : [["action", "Detect Blue Dragon"]]
	},
	"brass (fire)" : {
		name : "Brass Dragon Scale Mail",
		description : "This scale mail gives +1 to AC, adv. on saves against the frightful presence and breath weapons of dragons, and resistance to fire damage. As an action, I can magically discern the distance and direction to the closest brass dragon within 30 miles. Once I use this action, I can't use it again until the next dawn.",
		armorAdd : "Brass Dragon Scale Mail",
		dmgres: ["Fire"],
		limfeaname : "Detect Brass Dragon",
		action : [["action", "Detect Brass Dragon"]]
	},
	"bronze (lightning)" : {
		name : "Bronze Dragon Scale Mail",
		description : "This scale mail gives +1 to AC, adv. on saves against the frightful presence and breath weapons of dragons, and resistance to lightning damage. As an action, I can magically discern the distance and direction to the closest bronze dragon in 30 miles. Once I use this action, I can't use it again until the next dawn.",
		armorAdd : "Bronze Dragon Scale Mail",
		dmgres: ["Lightning"],
		limfeaname : "Detect Bronze Dragon",
		action : [["action", "Detect Bronze Dragon"]]
	},
	"copper (acid)" : {
		name : "Copper Dragon Scale Mail",
		description : "This scale mail gives +1 to AC, adv. on saves against the frightful presence and breath weapons of dragons, and resistance to acid damage. As an action, I can magically discern the distance and direction to the closest copper dragon within 30 miles. Once I use this action, I can't use it again until the next dawn.",
		armorAdd : "Copper Dragon Scale Mail",
		dmgres: ["Acid"],
		limfeaname : "Detect Copper Dragon",
		action : [["action", "Detect Copper Dragon"]]
	},
	"gold (fire)" : {
		name : "Gold Dragon Scale Mail",
		description : "This scale mail gives +1 to AC, adv. on saves against the frightful presence and breath weapons of dragons, and resistance to fire damage. As an action, I can magically discern the distance and direction to the closest gold dragon within 30 miles. Once I use this action, I can't use it again until the next dawn.",
		armorAdd : "Gold Dragon Scale Mail",
		dmgres: ["Fire"],
		limfeaname : "Detect Gold Dragon",
		action : [["action", "Detect Gold Dragon"]]
	},
	"green (poison)" : {
		name : "Green Dragon Scale Mail",
		description : "This scale mail gives +1 to AC, adv. on saves against the frightful presence and breath weapons of dragons, and resistance to poison damage. As an action, I can magically discern the distance and direction to the closest green dragon in 30 miles. Once I use this action, I can't use it again until the next dawn.",
		armorAdd : "Green Dragon Scale Mail",
		dmgres: ["Poison"],
		limfeaname : "Detect Green Dragon",
		action : [["action", "Detect Green Dragon"]]
	},
	"red (fire)" : {
		name : "Red Dragon Scale Mail",
		description : "This scale mail gives +1 to AC, adv. on saves against the frightful presence and breath weapons of dragons, and resistance to fire damage. As an action, I can magically discern the distance and direction to the closest red dragon within 30 miles. Once I use this action, I can't use it again until the next dawn.",
		armorAdd : "Red Dragon Scale Mail",
		dmgres: ["Fire"],
		limfeaname : "Detect Red Dragon",
		action : [["action", "Detect Red Dragon"]]
	},
	"silver (cold)" : {
		name : "Silver Dragon Scale Mail",
		description : "This scale mail gives +1 to AC, adv. on saves against the frightful presence and breath weapons of dragons, and resistance to cold damage. As an action, I can magically discern the distance and direction to the closest silver dragon within 30 miles. Once I use this action, I can't use it again until the next dawn.",
		armorAdd : "Silver Dragon Scale Mail",
		dmgres: ["Cold"],
		limfeaname : "Detect Silver Dragon",
		action : [["action", "Detect Silver Dragon"]]
	},
	"white (cold)" : {
		name : "White Dragon Scale Mail",
		description : "This scale mail gives +1 to AC, adv. on saves against the frightful presence and breath weapons of dragons, and resistance to cold damage. As an action, I can magically discern the distance and direction to the closest white dragon within 30 miles. Once I use this action, I can't use it again until the next dawn.",
		armorAdd : "White Dragon Scale Mail",
		dmgres: ["Cold"],
		limfeaname : "Detect White Dragon",
		action : [["action", "Detect White Dragon"]]
	}
};
MagicItemsList["dragon slayer"] = {
	name : "Dragon Slayer",
	source : [["DMG2024", "-"]],
	type : "weapon (simple or martial weapon)",
	rarity : "rare",
	magicItemTable : "?",
	description : "I have a +1 bonus to attack and damage rolls made with this magic weapon. When I hit a creature with the dragon type with this weapon, it does 3d6 extra damage of the weapon's damage type.",
	descriptionFull : "You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon.\n   The weapon deals an extra 3d6 damage of the weapon’s type if the target is a Dragon.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "weapon"],
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && !v.isSpell && (/^(?=.*dragon)(?=.*slayer).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+3d6 damage vs. dragons';
				}
			},
			'If I include the words "Dragon Slayer" in a the name of a weapon, it will be treated as the magic weapon Dragon Slayer. It has +1 to hit and damage and deals +3d6 damage to creatures with the dragon type.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (!v.theWea.isMagicWeapon && !v.isSpell && (/^(?=.*dragon)(?=.*slayer).*$/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
		]
	}
};
MagicItemsList["dread helm"] = {
	name : "Dread Helm",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "While I'm wearing this fearsome steel helm, my eyes glow red and the rest of my face is hidden in shadow.",
	descriptionFull : "While you’re wearing this fearsome steel helm, your eyes glow red and the rest of your face is hidden in shadow.",
	weight : 1
};
MagicItemsList["driftglobe"] = {
	name : "Driftglobe",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "By speaking its command word while within 60 ft, this glass sphere casts Light or Daylight on itself. Daylight only works once per dawn. While lit up, I can use a magic action to speak another command word to make it hover 5 ft off the ground and follow me at a distance of 60 ft. It stops hovering when grasped.",
	descriptionFull : "This small sphere of thick glass weighs 1 pound. If you are within 60 feet of it, you can command it to emanate light equivalent to that of the Light or Daylight spell (your choice). Once used, the Daylight effect can’t be used again until the next dawn.\n   You can issue another command as a Magic action to make the illuminated globe rise into the air and float no more than 5 feet off the ground. The globe hovers in this way until you or another creature grasps it. If you move more than 60 feet from the hovering globe, it follows you until it is within 60 feet of you. It takes the shortest route to do so. If prevented from moving, the globe sinks gently to the ground and becomes inactive, and its light winks out.",
	weight : 1,
	action : [["action", " (hover)"]],
	usages : 1,
	recovery : "dawn",
	additional : "Daylight",
	spellcastingBonus : [{
		name : "On globe",
		spells : ["light"],
		selection : ["light"],
		firstCol : "atwill"
	}, {
		name : "On globe",
		spells : ["daylight"],
		selection : ["daylight"],
		firstCol : "oncelr"
	}],
	spellChanges : {
		"light" : {
			range : "Globe",
			description : "Driftglobe sheds bright light in a 20-ft radius and dim light in an additional 20-ft radius",
			changes : "The spell can only affect the globe."
		},
		"daylight" : {
			range : "Globe",
			description : "Driftglobe shed 60-ft rad bright light + 60-ft dim light; only magical darkness of SL 4+ works in it",
			changes : "The spell can only affect the globe."
		}
	}
};
MagicItemsList["dust of disappearance"] = {
	name : "Dust of Disappearance",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "Once as a Utilize action, I can throw this dust into the air. By doing so, me and all creatures/objects within a 10-ft emanation of me become invisible for 2d4 minutes. The duration is the same for all subjects. If a creature affected by the dust attacks or casts a spell, the invisibility ends for that creature.",
	descriptionFull : "This powder resembles fine sand. There is enough of it for one use. When you take a Utilize action to throw the dust into the air, you and each creature and object within a 10-foot Emanation originating from you have the Invisible condition for 2d4 minutes. The duration is the same for all subjects, and the dust is consumed when its magic takes effect. Immediately after an affected creature makes an attack roll, deals damage, or casts a spell, the Invisible condition ends for that creature."
};
MagicItemsList["dust of dryness"] = {
	name : "Dust of Dryness",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "As a Utilize action, I can sprinkle a pinch of dust over water, turning a 15-ft cube into a floating, marble-sized pellet. As a Utilize action, someone can smash the pellet against a hard surface, destroying it and releasing the absorbed water. A pinch of dust does 10d6 necrotic damage to a water elemental, Con save DC 13 halves.",
	descriptionFull : "This small packet contains 1d6 + 4 pinches of dust. As a Utilize action, you can sprinkle a pinch of the dust over water, turning up to a 15-foot Cube of water into one marble-sized pellet, which floats or rests near where the dust was sprinkled. The pellet’s weight is negligible. A creature can take a Utilize action to smash the pellet against a hard surface, causing the pellet to shatter and release the water the dust absorbed. Doing so destroys the pellet and ends its magic.\n   As a Utilize action, you can sprinkle a pinch of the dust on an Elemental within 5 feet of yourself that is composed mostly of water (such as a Water Elemental or a Water Weird). Such a creature exposed to a pinch of the dust makes a DC 13 Constitution saving throw, taking 10d6 Necrotic damage on a failed save or half as much damage on a successful one.",
	usages : "1d6+4",
	recovery : "Never"
};
MagicItemsList["dust of sneezing and choking"] = {
	name : "Dust of Sneezing and Choking",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "Once as a Utilize action, I can throw this dust into the air, causing me and all creatures within 30 ft that need to breathe to make a DC 15 Con save or start sneezing uncontrollably and be unable to breathe, thus becoming incapacitated and suffocating. Those affected can repeat their save at the end of each of their turns.",
	descriptionFull : "Found in a small container, this powder resembles Dust of Disappearance, and Identify reveals it to be such. There is enough of it for one use.\n   As a Utilize action, you can throw the dust into the air, forcing yourself and every creature in a 30-foot Emanation originating from you to make a DC 15 Constitution saving throw. Constructs, Elementals, Oozes, Plants, and Undead succeed on the save automatically.\n   On a failed save, a creature begins sneezing uncontrollably; it has the Incapacitated condition and is suffocating. The creature repeats the save at the end of each of its turns, ending the effect on itself on a success. The effect also ends on any creature targeted by a Lesser Restoration spell."
};
MagicItemsList["+2 dwarven plate"] = {
	name : "+2 Dwarven Plate",
	source : [["DMG2024", "-"]],
	type : "armor (plate)",
	rarity : "very rare",
	magicItemTable : "?",
	description : "While wearing this armor, I gain a +2 bonus to AC. In addition, if an effect moves me against my will along the ground, I can use my reaction to reduce the distance I am moved by up to 10 ft.",
	descriptionFull : "While wearing this armor, you gain a +2 bonus to Armor Class. In addition, if an effect moves you against your will along the ground, you can take a Reaction to reduce the distance you are moved by up to 10 feet.",
	action : [["reaction", ""]],
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "armor"],
		excludeCheck : function (inObjKey, inObj) {
			return !(/\bplate\b/i).test(inObj.regExpSearch);
		}
	},
};
MagicItemsList["dwarven thrower"] = {
	name : "Dwarven Thrower",
	source : [["DMG2024", "-"]],
	type : "weapon (warhammer)",
	rarity : "very rare",
	magicItemTable : "?",
	attunement : true,
	description : "This magical warhammer adds a +3 bonus to attack and damage rolls made with it. It has the thrown property with a normal range of 20 ft and a long range of 60 ft. It deals an extra 1d8 damage (or 2d8 if the target is a giant) when thrown. Immediately after the attack, the weapon flies back to my hand.",
	prerequisite : "Requires Attunement by a Dwarf or a Creature Attuned to a Belt of Dwarvenkind",
	prereqeval : function(v) {
			if(CurrentRace.known.indexOf("dwarf") !== -1) return true;
		for (var i = 0; i < CurrentMagicItems.known.length; i++) {
			// if it's not null, attunement is checked, and if it's the belt of dwarven kind.
			if (tDoc.getField(ReturnMagicItemFieldsArray(i+1)[4]) !== null && tDoc.getField(ReturnMagicItemFieldsArray(i+1)[4]).isBoxChecked(0) !== 0 && CurrentMagicItems.known[i].indexOf("belt of dwarvenkind") !== -1) {
				return true;
			}
		}
		return false;
	},
	weight : 2,
	descriptionFull : "You gain a +3 bonus to attack rolls and damage rolls made with this magic weapon. It has the Thrown property with a normal range of 20 feet and a long range of 60 feet. When you hit with a ranged attack using this weapon, it deals an extra 1d8 Force damage, or an extra 2d8 Force damage if the target is a Giant. Immediately after hitting or missing, the weapon flies back to your hand.",
	weaponsAdd : ["Dwarven Thrower"],
	weaponOptions : {
		baseWeapon : "warhammer",
		regExpSearch : /^(?=.*dwarven)(?=.*thrower).*$/i,
		name : "Dwarven Thrower",
		source : [["DMG2024", "-"]],
		range : "Melee, 20/60 ft",
		description : "Thrown, versatile (1d10); +1d8 damage when thrown (2d8 vs. giants) and returns immediately; Push",
		modifiers : [3, 3] // add 3 to each to hit and damage because of the magical bonus
	}
};
MagicItemsList["ear horn of hearing"] = {
	name : "Ear Horn of Hearing",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "While held up to my ear, this horn suppresses the effects of the deafened condition on me, allowing me to hear normally.",
	descriptionFull : "While held up to your ear, this horn suppresses the effects of the Deafened condition on you.",
	savetxt : { immune : ["deafened"] },
	weight : 1
};
MagicItemsList["efreeti bottle"] = { // contributed by AelarTheElfRogue
	name : "Efreeti Bottle",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "?",
	description : "When I use a Magic action to remove the stopper, a cloud of thick smoke flows out of the bottle. At the end of my turn, an efreeti appears in an unoccupied space within 30 feet of me. The first time the bottle is opened, the DM rolls to determine what happens that time and the next times (if any).",
	descriptionLong : "When I use a Magic action to remove the stopper, a cloud of thick smoke flows out of the bottle. At the end of my turn, an efreeti appears in an unoccupied space within 30 feet of me. The first time the bottle is opened, the DM rolls to determine what happens that time and the next times (if any). 10% chance that the efreeti attacks me for 5 rounds before disappearing. 80% change that the efreeti serves me for 1 hour, following my commands. It then returns to the bottle and I can have it serve me 2 more times, but only 24 hours after it returned to the bottle. 10% chance that the efreeti will grant me 1 wish.",
	descriptionFull : "When you take a Magic action to remove the stopper of this painted brass bottle, a cloud of thick smoke flows out of it. At the end of your turn, the smoke disappears with a flash of harmless fire, and an Efreeti appears in an unoccupied space within 30 feet of you.\n   The first time the bottle is opened, the DM rolls on the following table to determine what happens.\n\n" + toUni("1d10") + "\t" + toUni("Effect") + "\n1\tThe efreeti attacks you. After fighting for 5 rounds, the efreeti disappears, and the bottle loses its magic.\n2-9\tThe efreeti understands your languages and obeys your commands for 1 hour, after which it returns to the bottle, and a new stopper contains it. The stopper can’t be removed for 24 hours. The next two times the bottle is opened, the same effect occurs. If the bottle is opened a fourth time, the efreeti escapes and disappears, and the bottle loses its magic.\n10\tThe efreeti understands your languages and can cast Wish once for you. It disappears when it grants the wish or after 1 hour, and the bottle loses its magic.",
	weight : 1,
	action : [["action", ""]]
};
MagicItemsList["+3 efreeti chain"] = {
	name : "+3 Efreeti Chain",
	source : [["DMG2024", "-"]],
	type : "armor (Chain Mail or Chain Shirt)",
	rarity : "legendary",
	magicItemTable : "?",
	description : "While wearing this armor, I gain a +3 bonus to AC, I am immune to fire damage, and I can understand and speak Primordial. In addition, I can stand on and walk across molten rock as if it were solid ground.",
	descriptionFull : "While wearing this armor, you gain a +3 bonus to Armor Class, you have Immunity to Fire damage, and you know Primordial. In addition, you can stand on and move across molten rock as if it were solid ground.",
	attunement : true,
	weight : 55,
	languageProfs : ["Primordial"],
	savetxt : { immune : ["fire"] },
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "armor"],
		excludeCheck : function (inObjKey, inObj) {
			return !(/chain/i).test(inObj.regExpSearch);
		}
	},
};
MagicItemsList["elemental gem"] = {
	name : "Elemental Gem",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "This gem contains a mote of elemental energy. When I use a Utilize action to break the gem, an elemental is summoned, and the gem's magic is lost. The type of gem determines the elemental summoned by the spell.",
	descriptionFull : "This gem contains a mote of elemental energy. When you take a Utilize action to break the gem, an elemental is summoned (see the Monster Manual for its stat block), and the gem ceases to be magical. The elemental appears in an unoccupied space as close to the broken gem as possible, understands your languages, obeys your commands, and takes its turn immediately after you on your Initiative count. The elemental disappears after 1 hour, when it dies, or when you dismiss it as a Bonus Action. The type of gem determines the elemental, as shown in the following table.",
	choices : ["Blue Sapphire (air)", "Emerald (water)", "Red Corundum (fire)", "Yellow Diamond (earth)"],
	allowDuplicates : true,
	"blue sapphire (air)" : {
		name : "Elemental Gem [Blue Sapphire]",
		description : "This gem contains a mote of air elemental energy. Once as an action, I can break this gem to summon an air elemental. After doing so, the gem's magic is lost.",
		descriptionFull : "This gem contains a mote of elemental energy. When you use an action to break the gem, an air elemental is summoned, and the gem's magic is lost.",
	},
	"emerald (water)" : {
		name : "Elemental Gem [Emerald]",
		description : "This gem contains a mote of water elemental energy. Once as an action, I can break this gem to summon a water elemental. After doing so, the gem's magic is lost.",
		descriptionFull : "This gem contains a mote of elemental energy. When you use an action to break the gem, a water elemental is summoned, and the gem's magic is lost.",
	},
	"red corundum (fire)" : {
		name : "Elemental Gem [Red Corundum]",
		description : "This gem contains a mote of fire elemental energy. Once as an action, I can break this gem to summon a fire elemental. After doing so, the gem's magic is lost.",
		descriptionFull : "This gem contains a mote of elemental energy. When you use an action to break the gem, a fire elemental is summoned, and the gem's magic is lost.",
	},
	"yellow diamond (earth)" : {
		name : "Elemental Gem [Yellow Diamond]",
		description : "This gem contains a mote of earth elemental energy. Once as an action, I can break this gem to summon an earth elemental. After doing so, the gem's magic is lost.",
		descriptionFull : "This gem contains a mote of elemental energy. When you use an action to break the gem, an earth elemental is summoned, and the gem's magic is lost.",
	}
};
MagicItemsList["elixir of health"] = {
	name : "Elixir of Health",
	source : [["DMG2024", "-"]],
	type : "potion",
	rarity : "rare",
	magicItemTable : "?",
	description : "Once as an action, I can drink this potion or administer it to another to cure any disease, and removing the blinded, deafened, paralyzed, and poisoned conditions. The potion's clear red liquid has tiny bubbles of light in it.",
	descriptionFull : "When you drink this potion, you are cured of all magical contagions. In addition, the following conditions end on you: Blinded, Deafened, Paralyzed, and Poisoned. The clear, red liquid has tiny bubbles of light in it.",
	weight : 0.5
};
MagicItemsList["+1 elven chain"] = {
	name : "+1 Elven Chain",
	source : [["DMG2024", "-"]],
	type : "armor (chain mail or chain shirt)",
	rarity : "rare",
	magicItemTable : "?",
	description : "I gain a +1 bonus to AC while I wear this chain shirt. I am considered proficient with this armor even if I lack proficiency with medium armor.",
	descriptionFull : "You gain a +1 bonus to Armor Class while you wear this armor. You are considered trained with this armor even if you lack training with Medium or Heavy armor.",
	weight : 20,
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "armor"],
		excludeCheck : function (inObjKey, inObj) {
			return !(/chain/i).test(inObj.regExpSearch);
		}
	},
};
MagicItemsList["enduring spellbook"] = {
	name : "Enduring Spellbook",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "This spellbook, along with anything written on its pages, can’t be damaged by fire or water. In addition, the spellbook doesn’t deteriorate with age.",
	descriptionFull : "This spellbook, along with anything written on its pages, can’t be damaged by fire or water. In addition, the spellbook doesn’t deteriorate with age.",
	weight : 5
};
MagicItemsList["*energy bow*"] = {
	name : "Energy Bow",
	source : [["DMG2024", "-"]],
	type : "weapon (longbow or shortbow)",
	rarity : "very rare",
	magicItemTable : "?",
	description : "",
	descriptionLong : "",
	descriptionFull : 'You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon, which has no string. Each time you pull your arm back in a firing motion, a magical arrow made of golden energy appears nocked and ready to fire. An arrow produced by this weapon deals Force damage instead of Piercing damage on a hit, and it disappears after it hits or misses its target. Until it disappears, the arrow emits Bright Light in a 20-foot radius and Dim Light for an additional 20 feet.\n   This weapon has the following additional properties.\n   Arrow of Restraint. Whenever you use this weapon to make a ranged attack against a creature, you can try to restrain the target instead of dealing damage to it. If the arrow hits, the target must succeed on a DC 15 Strength saving throw or have the Restrained condition for 1 minute. As an action, a creature Restrained by an arrow can make a DC 20 Strength (Athletics) check to try to break the restraint, ending the effect on itself on a successful check.\n   Arrow of Transport. As a Magic action, you can fire one energy arrow from this weapon at a target you can see within 60 feet of yourself. The target can be either a willing Medium or smaller creature or an object that isn’t being worn or carried, provided the object is small enough to fit inside a 5-foot Cube. The arrow teleports the target to an unoccupied space you can see within 10 feet of you.\n   Energy Ladder. As a Magic action, you can loose a flurry of energy arrows from this weapon at a wall up to 60 feet away from yourself. The arrows become glowing rungs that stick out of the wall, forming a magical ladder up to 60 feet long on the wall. This ladder lasts for 1 minute before disappearing.',
	attunement : true,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "bow"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /shortbow|longbow/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
};
MagicItemsList["enspelled armor"] = {
	name : "Enspelled Armor",
	nameTest : "Enspelled",
	source : [["DMG2024", "-"]],
	type : "armor (light, medium, or heavy)",
	description : "This armor is imbued with a Abjuration or Illusion magic of 8th level or lower, which has 6 charges, each cast costing a charge, I regain 1d6 charges at dawn.",
	descriptionFull : "Bound into this armor is a spell of level 8 or lower. The spell is determined when the armor is created and must belong to the Abjuration or Illusion school of magic. The armor has 6 charges and regains 1d6 expended charges daily at dawn. While wearing the armor, you can expend 1 charge to cast its spell.\n   The level of the spell bound into the armor determines the spell’s saving throw DC and attack bonus, as well as the armor’s rarity, as shown in the following table.",
	usages : 6,
	recovery : "dawn",
	additional : "regains 1d6",
	allowDuplicates : true,
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "armor"]
	},
	choices : ["Cantrip (Uncommon)", "1st-Level Spell (Uncommon)", "2nd-Level Spell (Rare)", "3rd-Level Spell (Rare)", "4th-Level Spell (Very Rare)", "5th-Level Spell (Very Rare)", "6th-Level Spell (Legendary)", "7th-Level Spell (Legendary)", "8th-Level Spell (Legendary)"],
	"cantrip (uncommon)" : {
		name : "Enspelled Armor (Cantrip)",
		rarity : "uncommon",
		description : "This armor is imbued with a Abjuration or Illusion cantrip, which has 6 charges, each cast costing a charge, I regain 1d6 charges at dawn.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Armor",
			"class" : "any",
			school : ["Abjur", "Illus"],
			level : [0, 0],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 13,
		allowDuplicates : true
	},
	"1st-level spell (uncommon)" : {
		name : "Enspelled Armor (1st-Level)",
		rarity : "uncommon",
		description : "This armor is imbued with a Abjuration or Illusion spell of 1st-Level, which has 6 charges, each cast costing 1 charge, I regain 1d6 charges at dawn.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Armor",
			"class" : "any",
			school : ["Abjur", "Illus"],
			level : [1, 1],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 13,
		allowDuplicates : true
	},
	"2nd-level spell (rare)" : {
		name : "Enspelled Armor (2nd-Level)",
		rarity : "rare",
		description : "This armor is imbued with a Abjuration or Illusion spell of 2nd-Level, which has 6 charges, each cast costing 1 charge, I regain 1d6 charges at dawn.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Armor",
			"class" : "any",
			school : ["Abjur", "Illus"],
			level : [2, 2],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 13,
		allowDuplicates : true
	},
	"3rd-level spell (rare)" : {
		name : "Enspelled Armor (3rd-Level)",
		rarity : "rare",
		description : "This armor is imbued with a Abjuration or Illusion spell of 3rd-Level, which has 6 charges, each cast costing 1 charge, I regain 1d6 charges at dawn.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Armor",
			"class" : "any",
			school : ["Abjur", "Illus"],
			level : [3, 3],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 15,
		allowDuplicates : true
	},
	"4th-level spell (very rare)" : {
		name : "Enspelled Armor (4th-Level)",
		rarity : " very rare",
		description : "This armor is imbued with a Abjuration or Illusion spell of 4th-Level, which has 6 charges, each cast costing 1 charge, I regain 1d6 charges at dawn.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Armor",
			"class" : "any",
			school : ["Abjur", "Illus"],
			level : [4, 4],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 15,
		allowDuplicates : true
	},
	"5th-level spell (very rare)" : {
		name : "Enspelled Armor (5th-Level)",
		rarity : "very rare",
		description : "This armor is imbued with a Abjuration or Illusion spell of 5th-Level, which has 6 charges, each cast costing 1 charge, I regain 1d6 charges at dawn.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Armor",
			"class" : "any",
			school : ["Abjur", "Illus"],
			level : [5, 5],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 17,
		allowDuplicates : true
	},
	"6th-level spell (legendary)" : {
		name : "Enspelled Armor (6th-Level)",
		rarity : "legendary",
		description : "This armor is imbued with a Abjuration or Illusion spell of 6th-Level, which has 6 charges, each cast costing 1 charge, I regain 1d6 charges at dawn.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Armor",
			"class" : "any",
			school : ["Abjur", "Illus"],
			level : [6, 6],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 17,
		allowDuplicates : true
	},
	"7th-level spell (legendary)" : {
		name : "Enspelled Armor (7th-Level)",
		rarity : "legendary",
		description : "This armor is imbued with a Abjuration or Illusion spell of 7th-Level, which has 6 charges, each cast costing 1 charge, I regain 1d6 charges at dawn.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Armor",
			"class" : "any",
			school : ["Abjur", "Illus"],
			level : [7, 7],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 18,
		allowDuplicates : true
	},
	"8th-level spell (legendary)" : {
		name : "Enspelled Armor (8th-Level)",
		rarity : "legendary",
		description : "This armor is imbued with a Abjuration or Illusion spell of 8th-Level, which has 6 charges, each cast costing 1 charge, I regain 1d6 charges at dawn.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Armor",
			"class" : "any",
			school : ["Abjur", "Illus"],
			level : [8, 8],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 18,
		allowDuplicates : true
	}
};
MagicItemsList["enspelled staff"] = {
	name : "Enspelled Staff",
	source : [["DMG2024", "-"]],
	type : "weapon (quarterstaff)",
	description : "This staff is imbued with a spell of 8th level or lower, which has 6 charges, each cast costing a charge, I regain 1d6 charges at dawn. If I expend the last charge roll 1d20 or a 1 the staff becomes nonmagical.",
	descriptionFull : "Bound into this staff is a spell of level 8 or lower. The spell is determined when the staff is created and can be of any school of magic. The staff has 6 charges and regains 1d6 expended charges daily at dawn. While holding the staff, you can expend 1 charge to cast its spell. If you expend the staff’s last charge, roll 1d20. On a 1, the staff loses its properties and becomes a nonmagical Quarterstaff.\n   The level of the spell bound into the staff determines the spell’s saving throw DC and attack bonus, as well as the staff’s rarity, as shown in the following table.",
	usages : 6,
	recovery : "dawn",
	additional : "regains 1d6",
	weaponOptions : [{
		baseWeapon : "quarterstaff",
		regExpSearch : /^(?=.*enspelled)(?=.*staff).*$/i,
		name : "Enspelled Staff",
		source : [["DMG2024", "-"]],
		description : "Versatile (1d8); Topple",
		selectNow : true
	}],
	allowDuplicates : true,
	choices : ["Cantrip (Uncommon)", "1st-Level Spell (Uncommon)", "2nd-Level Spell (Rare)", "3rd-Level Spell (Rare)", "4th-Level Spell (Very Rare)", "5th-Level Spell (Very Rare)", "6th-Level Spell (Legendary)", "7th-Level Spell (Legendary)", "8th-Level Spell (Legendary)"],
	"cantrip (uncommon)" : {
		name : "Enspelled Staff (Cantrip)",
		rarity : "uncommon",
		description : "This staff is imbued with a cantrip, which has 6 charges, each cast costing a charge, I regain 1d6 charges at dawn. If I expend the last charge roll 1d20 or a 1 the staff becomes nonmagical.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Armor",
			"class" : "any",
			level : [0, 0],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 13,
		allowDuplicates : true
	},
	"1st-level spell (uncommon)" : {
		name : "Enspelled Staff (1st-Level)",
		rarity : "uncommon",
		description : "This staff is imbued with a spell of 1st-Level, which has 6 charges, each cast costing 1 charge, I regain 1d6 charges at dawn. If I expend the last charge roll 1d20 or a 1 the staff becomes nonmagical.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Staff",
			"class" : "any",
			level : [1, 1],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 13,
		allowDuplicates : true
	},
	"2nd-level spell (rare)" : {
		name : "Enspelled Staff (2nd-Level)",
		rarity : "rare",
		description : "This staff is imbued with a spell of 2nd-Level, which has 6 charges, each cast costing 1 charge, I regain 1d6 charges at dawn. If I expend the last charge roll 1d20 or a 1 the staff becomes nonmagical.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Staff",
			"class" : "any",
			level : [2, 2],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 13,
		allowDuplicates : true
	},
	"3rd-level spell (rare)" : {
		name : "Enspelled Staff (3rd-Level)",
		rarity : "rare",
		description : "This staff is imbued with a spell of 3rd-Level, which has 6 charges, each cast costing 1 charge, I regain 1d6 charges at dawn. If I expend the last charge roll 1d20 or a 1 the staff becomes nonmagical.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Staff",
			"class" : "any",
			level : [3, 3],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 15,
		allowDuplicates : true
	},
	"4th-level spell (very rare)" : {
		name : "Enspelled Staff (4th-Level)",
		rarity : " very rare",
		description : "This staff is imbued with a spell of 4th-Level, which has 6 charges, each cast costing 1 charge, I regain 1d6 charges at dawn. If I expend the last charge roll 1d20 or a 1 the staff becomes nonmagical.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Staff",
			"class" : "any",
			level : [4, 4],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 15,
		allowDuplicates : true
	},
	"5th-level spell (very rare)" : {
		name : "Enspelled Staff (5th-Level)",
		rarity : "very rare",
		description : "This staff is imbued with a spell of 5th-Level, which has 6 charges, each cast costing 1 charge, I regain 1d6 charges at dawn. If I expend the last charge roll 1d20 or a 1 the staff becomes nonmagical.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Staff",
			"class" : "any",
			level : [5, 5],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 17,
		allowDuplicates : true
	},
	"6th-level spell (legendary)" : {
		name : "Enspelled Staff (6th-Level)",
		rarity : "legendary",
		description : "This staff is imbued with a spell of 6th-Level, which has 6 charges, each cast costing 1 charge, I regain 1d6 charges at dawn. If I expend the last charge roll 1d20 or a 1 the staff becomes nonmagical.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Staff",
			"class" : "any",
			level : [6, 6],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 17,
		allowDuplicates : true
	},
	"7th-level spell (legendary)" : {
		name : "Enspelled Staff (7th-Level)",
		rarity : "legendary",
		description : "This staff is imbued with a spell of 7th-Level, which has 6 charges, each cast costing 1 charge, I regain 1d6 charges at dawn. If I expend the last charge roll 1d20 or a 1 the staff becomes nonmagical.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Staff",
			"class" : "any",
			level : [7, 7],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 18,
		allowDuplicates : true
	},
	"8th-level spell (legendary)" : {
		name : "Enspelled Staff (8th-Level)",
		rarity : "legendary",
		description : "This staff is imbued with a spell of 8th-Level, which has 6 charges, each cast costing 1 charge, I regain 1d6 charges at dawn. If I expend the last charge roll 1d20 or a 1 the staff becomes nonmagical.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Staff",
			"class" : "any",
			level : [8, 8],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 18,
		allowDuplicates : true
	}
};
MagicItemsList["enspelled weapon"] = {
	name : "Enspelled Weapon",
	nameTest : "Enspelled",
	source : [["DMG2024", "-"]],
	type : "weapon (any)",
	description : "This weapon is imbued with Conjuration, Divination, Evocation, Necromancy, or Transmutation magic of 8th level or lower, which has 6 charges, each cast costing a charge, I regain 1d6 charges at dawn.",
	descriptionFull : "Bound into this weapon is a spell of level 8 or lower. The spell is determined when the weapon is created and must belong to the Conjuration, Divination, Evocation, Necromancy, or Transmutation school of magic. The weapon has 6 charges and regains 1d6 expended charges daily at dawn. While holding the weapon, you can expend 1 charge to cast its spell.\n   The level of the spell bound into the weapon determines the spell’s saving throw DC and attack bonus, as well as the weapon’s rarity, as shown in the following table.",
	usages : 6,
	recovery : "dawn",
	additional : "regains 1d6",
	allowDuplicates : true,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "weapon"]
	},
	choices : ["Cantrip (Uncommon)", "1st-Level Spell (Uncommon)", "2nd-Level Spell (Rare)", "3rd-Level Spell (Rare)", "4th-Level Spell (Very Rare)", "5th-Level Spell (Very Rare)", "6th-Level Spell (Legendary)", "7th-Level Spell (Legendary)", "8th-Level Spell (Legendary)"],
	"cantrip (uncommon)" : {
		name : "Enspelled Weapon (Cantrip)",
		rarity : "uncommon",
		description : "This weapon is imbued with a Conjuration, Divination, Evocation, Necromancy, or Transmutation cantrip, which has 6 charges, each cast costing a charge, I regain 1d6 charges at dawn.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Weapon",
			"class" : "any",
			school : ["Conj", "Div", "Evoc", "Necro", "Trans"],
			level : [0, 0],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 13,
		allowDuplicates : true
	},
	"1st-level spell (uncommon)" : {
		name : "Enspelled Weapon (1st-Level)",
		rarity : "uncommon",
		description : "This weapon is imbued with a Conjuration, Divination, Evocation, Necromancy, or Transmutation spell of 1st-Level, which has 6 charges, each cast costing 1 charge, I regain 1d6 charges at dawn.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Weapon",
			"class" : "any",
			school : ["Conj", "Div", "Evoc", "Necro", "Trans"],
			level : [1, 1],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 13,
		allowDuplicates : true
	},
	"2nd-level spell (rare)" : {
		name : "Enspelled Weapon (2nd-Level)",
		rarity : "rare",
		description : "This weapon is imbued with a Conjuration, Divination, Evocation, Necromancy, or Transmutation spell of 2nd-Level, which has 6 charges, each cast costing 1 charge, I regain 1d6 charges at dawn.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Weapon",
			"class" : "any",
			school : ["Conj", "Div", "Evoc", "Necro", "Trans"],
			level : [2, 2],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 13,
		allowDuplicates : true
	},
	"3rd-level spell (rare)" : {
		name : "Enspelled Weapon (3rd-Level)",
		rarity : "rare",
		description : "This weapon is imbued with a Conjuration, Divination, Evocation, Necromancy, or Transmutation spell of 3rd-Level, which has 6 charges, each cast costing 1 charge, I regain 1d6 charges at dawn.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Weapon",
			"class" : "any",
			school : ["Conj", "Div", "Evoc", "Necro", "Trans"],
			level : [3, 3],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 15,
		allowDuplicates : true
	},
	"4th-level spell (very rare)" : {
		name : "Enspelled Weapon (4th-Level)",
		rarity : " very rare",
		description : "This weapon is imbued with a Conjuration, Divination, Evocation, Necromancy, or Transmutation spell of 4th-Level, which has 6 charges, each cast costing 1 charge, I regain 1d6 charges at dawn.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Weapon",
			"class" : "any",
			school : ["Conj", "Div", "Evoc", "Necro", "Trans"],
			level : [4, 4],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 15,
		allowDuplicates : true
	},
	"5th-level spell (very rare)" : {
		name : "Enspelled Weapon (5th-Level)",
		rarity : "very rare",
		description : "This weapon is imbued with a Conjuration, Divination, Evocation, Necromancy, or Transmutation spell of 5th-Level, which has 6 charges, each cast costing 1 charge, I regain 1d6 charges at dawn.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Weapon",
			"class" : "any",
			school : ["Conj", "Div", "Evoc", "Necro", "Trans"],
			level : [5, 5],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 17,
		allowDuplicates : true
	},
	"6th-level spell (legendary)" : {
		name : "Enspelled Weapon (6th-Level)",
		rarity : "legendary",
		description : "This weapon is imbued with a Conjuration, Divination, Evocation, Necromancy, or Transmutation spell of 6th-Level, which has 6 charges, each cast costing 1 charge, I regain 1d6 charges at dawn.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Weapon",
			"class" : "any",
			school : ["Conj", "Div", "Evoc", "Necro", "Trans"],
			level : [6, 6],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 17,
		allowDuplicates : true
	},
	"7th-level spell (legendary)" : {
		name : "Enspelled Weapon (7th-Level)",
		rarity : "legendary",
		description : "This weapon is imbued with a Conjuration, Divination, Evocation, Necromancy, or Transmutation spell of 7th-Level, which has 6 charges, each cast costing 1 charge, I regain 1d6 charges at dawn.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Weapon",
			"class" : "any",
			school : ["Conj", "Div", "Evoc", "Necro", "Trans"],
			level : [7, 7],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 18,
		allowDuplicates : true
	},
	"8th-level spell (legendary)" : {
		name : "Enspelled Weapon (8th-Level)",
		rarity : "legendary",
		description : "This weapon is imbued with a Conjuration, Divination, Evocation, Necromancy, or Transmutation spell of 8th-Level, which has 6 charges, each cast costing 1 charge, I regain 1d6 charges at dawn.",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Enspelled Weapon",
			"class" : "any",
			school : ["Conj", "Div", "Evoc", "Necro", "Trans"],
			level : [8, 8],
			times : 1,
			firstCol : 1,
		}],
		fixedDC : 18,
		allowDuplicates : true
	}
};
MagicItemsList["ersatz eye"] = {
	name : "Ersatz Eye",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "This artificial eye replaces a real one that was lost or removed. While the ersatz eye is embedded in my eye socket, it can't be removed by anyone other than me, and I can see through the tiny orb as though it were a normal eye.",
	descriptionFull : "This magical eye replaces a real one that was lost or removed. While the Ersatz Eye is embedded in your eye socket, you can see through the tiny orb as though it were your natural eye. You can insert or remove the Ersatz Eye as a Magic action, and it can’t be removed against your will while you are alive.",
	attunement : true
};
MagicItemsList["eversmoking bottle"] = {
	name : "Eversmoking Bottle",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "When I use a magic action to remove the stopper, a cloud of thick heavily obscuring smoke flows out of the bottle in a 60-ft emanation, increasing by 10 ft for each minute the bottle is open, until it reaches 120 ft. Closing it, as a Magic action causes the cloud to become fixed in place. Once closed, the cloud disperses after 10 min.",
	descriptionFull : "As a Magic action, you can open or close this bottle.\n   Opening the bottle causes thick smoke to billow out, forming a cloud that fills a 60-foot Emanation originating from the bottle. The area within the smoke is Heavily Obscured.\n   Each minute the bottle remains open, the size of the Emanation increases by 10 feet until it reaches its maximum size of 120 feet.\n   Closing the bottle causes the cloud to become fixed in place until it disperses after 10 minutes. A strong wind (such as that created by the Gust of Wind spell) disperses the cloud after 1 minute.",
	weight : 1,
	action : [["action", " (open/close)"]]
};
MagicItemsList["executioner's axe"] = {
	name : "Executioner's Axe",
	nameTest : "Executioner's",
	source : [["DMG2024", "-"]],
	type : "weapon (battleaxe, greataxe, handaxe or halberd)",
	rarity : "very rare",
	magicItemTable : "?",
	description : "This axe gives +1 to hit and damage, any Humanoid I hit with the weapon takes an extra 2d6 Slashing damage, and I gain Temporary Hit Points equal to the extra damage dealt.",
	descriptionFull : "You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon.\n   Any Humanoid you hit with the weapon takes an extra 2d6 Slashing damage, and you gain Temporary Hit Points equal to the extra damage dealt.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "axe"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /greataxe|battleaxe|halberd|handaxe/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/axe/i).test(v.baseWeaponName) && (/executioner/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the word "Executioner" in a the name of an axe, it will be treated as the magic weapon Executioner\'s Axe. It has +1 to hit and damage.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/axe/i).test(v.baseWeaponName) && (/executioner/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
		],
	}
};
MagicItemsList["eyes of charming"] = {
	name : "Eyes of Charming",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "These crystal lenses fit over the eyes. They have 3 charges. While wearing them, I can expend 1 or more charges to cast Charm Person (save DC 13). For 1 charge, I cast the level 1 version of the spell. I increase the spell’s level by one for each additional charge I expend. The lenses regain all expended charges daily at dawn.",
	descriptionFull : "These crystal lenses fit over the eyes. They have 3 charges. While wearing them, you can expend 1 or more charges to cast Charm Person (save DC 13). For 1 charge, you cast the level 1 version of the spell. You increase the spell’s level by one for each additional charge you expend. The lenses regain all expended charges daily at dawn.",
	attunement : true,
	usages : 3,
	recovery : "dawn",
	spellcastingBonus : {
		name : "1 charge",
		spells : ["charm person"],
		selection : ["charm person"],
		firstCol : 1
	},
	fixedDC : 13,
	spellFirstColTitle : "Ch"
};
MagicItemsList["eyes of minute seeing"] = { // contributed by Soilentbrad
	name : "Eyes of Minute Seeing",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "These crystal lenses fit over the eyes. While wearing them, I can see much better than normal out to a range of 1 ft. I have advantage on Intelligence (Investigation) checks that rely on sight while searching an area or studying an object within that range.",
	descriptionFull : "These crystal lenses fit over the eyes. While wearing them, your vision improves significantly out to a range of 1 foot, granting you Darkvision within that range and Advantage on Intelligence (Investigation) checks made to examine something within that range.",
	vision : [["Adv. on Investigation checks based on sight", 1]]
};
MagicItemsList["eyes of the eagle"] = {
	name : "Eyes of the Eagle",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "These crystal lenses fit over the eyes. While wearing them, I have advantage on Wisdom (Perception) checks that rely on sight. In conditions of clear visibility, I can make out details of even extremely distant creatures and objects as small as 2 ft across.",
	descriptionFull : "These crystal lenses fit over the eyes. While wearing them, you have Advantage on Wisdom (Perception) checks that rely on sight. In conditions of clear visibility, you can make out details of even extremely distant creatures and objects as small as 2 feet across.",
	attunement : true,
	vision : [["Adv. on Perception checks that rely on sight", 0]]
};
MagicItemsList["figurine of wondrous power"] = { // contains contributions by Larry Hoy
	name: "Figurine of Wondrous Power",
	source: [["DMG2024", "-"]],
	type: "wondrous item",
	description: "As a Magic action, I can speak the command word and throw one or more statuettes to an unoccupied space within 60 ft where it becomes a specific creature for a certain amount of time. It is friendly, understands my languages, and obeys my commands.",
	descriptionFull: "A Figurine of Wondrous Power is a statuette small enough to fit in a pocket. If you take a Magic action to throw the figurine to a point on the ground within 60 feet of yourself, the figurine becomes a living creature specified in the figurine’s description below. If the space where the creature would appear is occupied by other creatures or objects, or if there isn’t enough space for the creature, the figurine doesn’t become a creature.\n   The creature is Friendly to you and your allies. It understands your languages, obeys your commands, and takes its turn immediately after you on your Initiative count. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if its creature form drops to 0 Hit Points or if you take a Magic action while touching the creature to make it revert to figurine form. When the creature becomes a figurine again, its property can’t be used again until a certain amount of time has passed, as specified in the figurine’s description.",
	action : [["action", ""]],
	choices : ["Bronze Griffon", "Ebony Fly", "Golden Lions", "Ivory Goats", "Marble Elephant", "Obsidian Steed", "Onyx Dog", "Serpentine Owl", "Silver Raven"],
	"bronze griffon" : {
		rarity : "rare",
		magicItemTable : "?",
		description: "As a Magic action, I can speak the command word and throw this bronze statuette to an unoccupied space within 60 ft, where it becomes a griffon for up to 6 hours, until I use the command word again, or it reaches 0 HP. It is friendly, understands my languages, and obeys my commands.",
		descriptionLong: "As a Magic action, I can speak the command word and throw this bronze statuette of a griffon rampant to an unoccupied space within 60 ft, where it becomes a griffon for up to 6 hours, until I use a Magic action to repeat the command word, or it reaches 0 HP. It is friendly to me and my allies, understands my languages, and obeys my spoken commands. If I issue no commands, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until 5 days have passed.",
		descriptionFull: "This figurine of wondrous power is a bronze statuette of a griffon rampant, small enough to fit in a pocket. If you use a Magic action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living griffon. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 6 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use a Magic action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 5 days have passed.",
		usages : 1,
		recovery : "5 days"
	},
	"ebony fly" : {
		rarity: "rare",
		magicItemTable : "?",
		description: "As a Magic action, I can speak the command word and throw this statuette to an unoccupied space within 60 ft, where it becomes a giant fly for up to 12 hours, until I use the command word again, or it reaches 0 HP. It is friendly, understands my languages, obeys my commands, and can be ridden as a mount.",
		descriptionLong: "As a Magic action, I can speak the command word and throw this ebony statuette of a horsefly to an unoccupied space within 60 ft, where it becomes a giant fly for up to 12 hours, until I use a Magic action to repeat the command word, or it reaches 0 HP. It is friendly to me and my allies, understands my languages, obeys my spoken commands, and can be ridden as a mount. If I issue no commands, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until 2 days have passed.",
		descriptionFull : "This figurine of wondrous power is an ebony statuette carved in the likeness of a horsefly, small enough to fit in a pocket. If you use a Magic action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living giant fly and can be ridden as a mount. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 12 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use a Magic action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 2 days have passed.",
		usages : 1,
		recovery : "2 days"
	},
	"golden lions" : {
		rarity : "rare",
		magicItemTable : "?",
		description: "As a Magic action, I can speak the command word and throw one or both of these gold statuettes to an unoccupied space within 60 ft, where each becomes a lion for up to 1 hour, until I use the command word again, or it reaches 0 HP. They are friendly, understand my languages, and obey my commands.",
		descriptionLong: "As a Magic action, I can speak the command word and throw one or both of these gold statuettes of a lion to an unoccupied space within 60 ft, where each becomes a lion for up to 1 hour, until I use a Magic action to repeat the command word, or it reaches 0 HP. They are friendly to me and my allies, understand my languages, and obey my spoken commands. If I issue no commands, they defend themselves but takes no other actions. When a lion reverts back to a figurine, that figurine can't be used again until 7 days have passed.",
		descriptionFull : "This figurine of wondrous power is a pair of gold statuettes of lions, small enough to fit in a pocket. If you use a Magic action to speak the command word and throw one or both of the figurines to a point on the ground within 60 feet of you, each figurine becomes a living lion. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 1 hour. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use a Magic action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 7 days have passed.",
		usages : 2,
		recovery : "7 days"
	},
	"ivory goats" : {
		rarity : "rare",
		magicItemTable : "?",
		description: "As a Magic action, I can speak the command word and throw one or more of these 3 ivory statuettes to an unoccupied space within 60 ft, where each becomes a creature, until I use the command word again, or it reaches 0 HP. They are friendly, understands my languages, and obeys my commands. See Notes page.",
		descriptionLong: "As a Magic action, I can speak the command word and throw one or more of these three ivory statuettes of goats to an unoccupied space within 60 ft, where each becomes a creature, until I use a Magic action to repeat the command word, or it reaches 0 HP. They are friendly to me and my allies, understands my languages, and obeys my spoken commands. If I issue no commands, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until a certain amount of time has passed. See Notes page for details about each of the statuettes.",
		descriptionFull: "This figurine of wondrous power is three ivory statuettes of goats, small enough to fit in a pocket. Each goat looks unique and functions differently from the others. If you use a Magic action to speak the command word and throw one or more of the figurines to a point on the ground within 60 feet of you, each figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use a Magic action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description." +
		"\n \u2022 The goat of traveling becomes a Large goat with the same statistics as a Riding Horse. It has 24 charges, and each hour or portion thereof it spends in goat form costs 1 charge. While it has charges, you can use it as often as you wish. When it runs out of charges, it reverts to a figurine and can’t be used again until 7 days have passed, when it regains all expended charges." +
		"\n \u2022 The goat of travail becomes a Giant Goat for up to 3 hours. Once it has been used, it can’t be used again until 30 days have passed." +
		"\n \u2022 The goat of terror becomes a Giant Goat for up to 3 hours. The goat can’t attack, but you can (harmlessly) remove its horns and use them as weapons. One horn becomes a +1 Lance, and the other becomes a +2 Longsword. Removing a horn requires a Magic action, and the weapons disappear and the horns return when the goat reverts to figurine form. While you ride the goat, any Hostile creature that starts its turn within a 30-foot Emanation originating from the goat must succeed on a DC 15 Wisdom saving throw or have the Frightened condition for 1 minute, until you are no longer riding the goat, or until the goat reverts to figurine form. The Frightened creature repeats the save at the end of each of its turns, ending the effect on itself on a success. Once it succeeds on the save, a creature is immune to this effect for the next 24 hours. Once the figurine has been used, it can’t be used again until 15 days have passed.",
		extraLimitedFeatures : [{
			name : "Figurine of Wondrous Power [Ivory Goat of Traveling]",
			usages : 24,
			recovery : "7 days"
		}, {
			name : "Figurine of Wondrous Power [Ivory Goat of Travail]",
			usages : 1,
			recovery : "30 days"
		}, {
			name : "Figurine of Wondrous Power [Ivory Goat of Terror]",
			usages : 1,
			recovery : "15 days"
		}],
		toNotesPage : [{
			name : "Ivory Goat Details",
			note : [
				"The goat of traveling can become a Large goat with the same statistics as a riding horse. It has 24 charges, and each hour or portion thereof it spends in beast form costs 1 charge. While it has charges, you can use it as often as you wish. When it runs out of charges, it reverts to a figurine and can't be used again until 7 days have passed, when it regains all its charges.",
				"The goat of travail becomes a giant goat for up to 3 hours. Once it has been used, it can't be used again until 30 days have passed.",
				"The goat of terror becomes a giant goat for up to 3 hours. The goat can't attack, but I can remove its horns and use them as weapons. One horn becomes a +1 lance, and the other becomes a +2 longsword. Removing a horn requires an action, and the weapons disappear and the horns return when the goat reverts to figurine form. In addition, the goat radiates a 30-ft radius aura of terror while I am riding it. Any creature hostile to me that starts its turn in the aura must succeed on a DC 15 Wisdom saving throw or be frightened of the goat for 1 minute, or until the goat reverts to figurine form. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once it successfully saves against the effect, a creature is immune to the goat's aura for the next 24 hours. Once the figurine has been used, it can't be used again until 15 days have passed."
			]
		}],
		weaponsAdd : ["Lance +1, Ivory Goat Horn", "Longsword +2, Ivory Goat Horn"],
		weaponOptions : [{
			baseWeapon : "lance",
			regExpSearch : /^(?=.*ivory)(?=.*goat)(?=.*lance).*$/i,
			name : "Lance +1, Ivory Goat Horn",
			source : [["SRD", 222], ["D", 170]]
		}, {
			baseWeapon : "longsword",
			regExpSearch : /^(?=.*ivory)(?=.*goat)(?=.*longsword).*$/i,
			name : "Longsword +2, Ivory Goat Horn",
			source : [["SRD", 222], ["D", 170]]
		}]
	},
	"marble elephant" : {
		rarity : "rare",
		magicItemTable : "?",
		description: "As a Magic action, I can speak the command word and throw this marble statuette to an unoccupied space within 60 ft, where it becomes a elephant for up to 24 hours, until I use the command word again, or it reaches 0 HP. It is friendly, understands my languages, and obeys my commands.",
		descriptionLong: "As a Magic action, I can speak the command word and throw this marble statuette of about 4 inches high and long to an unoccupied space within 60 ft, where it becomes a elephant for up to 24 hours, until I use a Magic action to repeat the command word, or it reaches 0 HP. It is friendly to me and my allies, understands my languages, and obeys my spoken commands. If I issue no commands, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until 7 days have passed.",
		descriptionFull: "This figurine of wondrous power is a marble statuette of about 4 inches high and long, small enough to fit in a pocket. If you use a Magic action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living elephant. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 24 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use a Magic action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 7 days have passed.",
		usages : 1,
		recovery : "7 days"
	},
	"obsidian steed" : {
		rarity : "very rare",
		magicItemTable : "?",
		description: "As a Magic action, I can speak the command word and throw this obsidian statuette to an unoccupied space within 60 ft, where it becomes a nightmare for up to 24 hours, until it reaches 0 HP, or I use the command word again. It is friendly, understands my languages, and obeys my commands. See Notes page.",
		descriptionLong: "As a Magic action, I can speak the command word and throw this polished obsidian statuette of an horse to an unoccupied space within 60 ft, where it becomes a nightmare for up to 24 hours, until I use a Magic action to repeat the command word, or it reaches 0 HP. It is friendly to me and my allies, understands my languages, and obeys my spoken commands. If I issue no commands, the creature defends itself but takes no other actions. It only fights to defend itself. When it reverts back to a figurine, it can't be used again until 5 days have passed. See Notes page for more details.",
		descriptionFull: "This figurine of wondrous power is a polished obsidian statuette of a horse, small enough to fit in a pocket. If you use a Magic action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living nightmare. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 24 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use a Magic action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 5 days have passed." +
		"\n   The nightmare fights only to defend itself.\n   The figurine has a 10% chance each time you use it to ignore your orders, including a command to revert to figurine form. If you mount the nightmare while it is ignoring your orders, you and the nightmare are instantly transported to a random location on the plane of Hades, where the nightmare reverts to figurine form.",
		usages : 1,
		recovery : "5 days",
		toNotesPage : [{
			name : "Obsidian Steed Details",
			note : "\n   The figurine has a 10% chance each time I use it to ignore my orders, including a command to revert to figurine form. If I mount the nightmare while it is ignoring my orders, we are both instantly transported to a random location on the plane of Hades, where the nightmare reverts to figurine form."
		}]
	},
	"onyx dog" : {
		rarity : "rare",
		magicItemTable : "?",
		description: "As a Magic action, I can speak the command word and throw this statuette to an unoccupied space within 60 ft, where it becomes a mastiff for up to 6 hours, until I use the command word again, or it reaches 0 HP. It has 60 ft blindsight, is friendly, understands me, and obeys my commands.",
		descriptionLong: "As a Magic action, I can speak the command word and throw this onyx statuette to an unoccupied space within 60 ft, where it becomes a mastiff for up to 6 hours, until I use a Magic action to repeat the command word, or it reaches 0 HP. It has Intelligence 8, speaks common, blindsight out to 60 ft. It is friendly to me and my allies, understands my languages, and obeys my spoken commands. If I issue no commands, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until 7 days have passed.",
		descriptionFull: "This figurine of wondrous power is an onyx statuette of a dog, small enough to fit in a pocket. If you use a Magic action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living mastiff. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The mastiff has an Intelligence of 8 and can speak Common. It also has blindsight out to a range of 60 feet. It is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 6 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use a Magic action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 7 days have passed.",
		usages : 1,
		recovery : "7 days"
	},
	"serpentine owl" : {
		rarity : "rare",
		magicItemTable : "?",
		description: "As a Magic action, I can speak the command word and throw this statuette to an unoccupied space within 60 ft, where it becomes a giant owl for up to 8 hours, until I use the command word again, or it reaches 0 HP. It is friendly, can convers telepathically with me, understands my languages, and obeys my commands.",
		descriptionLong: "As a Magic action, I can speak the command word and throw this serpentine statuette to an unoccupied space within 60 ft, where it becomes a giant owl for up to 8 hours, until I use a Magic action to repeat the command word, or it reaches 0 HP. It is friendly to me and my allies, understands my languages, and obeys my spoken commands. As long as it is on the same plane of existence, it can communicate telepathically with me. If I issue no commands, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until 2 days have passed.",
		descriptionFull: "This figurine of wondrous power is a serpentine statuette of an owl, small enough to fit in a pocket. If you use a Magic action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living giant owl. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. It can telepathically communicate with you at any range if you and it are on the same plane of existence. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 8 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use a Magic action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 2 days have passed.",
		usages : 1,
		recovery : "2 days"
	},
	"silver raven" : {
		rarity : "uncommon",
		magicItemTable : "?",
		description: "As a Magic action, I can speak the command word and throw this silver statuette to an unoccupied space within 60 ft, where it becomes a raven for up to 12 hours, until I use the command word again, or it reaches 0 HP. It is friendly, understands my languages, and obeys my commands.",
		descriptionLong: "As a Magic action, I can speak the command word and throw this silver statuette to an unoccupied space within 60 ft, where it becomes a raven for up to 12 hours, until I use a Magic action to repeat the command word, or it reaches 0 HP. It is friendly to me and my allies, understands my languages, and obeys my spoken commands. While in raven form, the figurine allows me to cast Animal Messenger on it at will. If I issue no commands, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until 2 days have passed.",
		descriptionFull: "This figurine of wondrous power is as sliver statuette of a raven, small enough to fit in a pocket. If you use a Magic action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living raven. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 12 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use a Magic action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 2 days have passed.\n   While in raven form, the figurine allows you to cast the Animal Messenger spell on it at will.",
		usages : 1,
		recovery : "2 days",
		spellcastingBonus : {
			name : "At will",
			spells : ["animal messenger"],
			selection : ["animal messenger"],
			firstCol : "atwill"
		},
		spellChanges : {
			"animal messenger" : {
				description : "The raven delivers a 25 word message up to 50 miles away to chosen location and recipient",
				changes : "The spell can only affect the figurine."
			}
		}
	}
};
MagicItemsList["flame tongue"] = {
	name : "Flame Tongue",
	source : [["DMG2024", "-"]],
	type : "weapon (any sword)",
	rarity : "rare",
	magicItemTable : "?",
	attunement : true,
	description : "As a bonus action, I can speak the command word of this magic weapon, causing flames to erupt from it. These flames add +2d6 fire damage and shine bright light in a 40-ft radius and dim light for an additional 40 ft. The flames last until I speak the command word again as a bonus action or sheathe it.",
	descriptionFull : "While holding this magic weapon, you can take a Bonus Action and use a command word to cause flames to engulf the damage-dealing part of the weapon. These flames shed Bright Light in a 40-foot radius and Dim Light for an additional 40 feet. While the weapon is ablaze, it deals an extra 2d6 Fire damage on a hit. The flames last until you take a Bonus Action to issue the command again or until you drop, stow, or sheathe the weapon.",
	action : [["bonus action", " (activate/end)"]],
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "weapon"],
		excludeCheck : function (inObjKey, inObj) {
			return (/ranged/i).test(inObj.list);
		},
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/^(?=.*flame)(?=.*tongue).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'While active, +2d6 fire damage';
				}
			},
			'If I include the words "Flame Tongue" in a the name of a melee weapon, it will be treated as the magic weapon Flame Tongue. When the command word is spoken, the blade erupts with flames, adding +2d6 fire damage on a hit and shining light.'
		]
	}
};
MagicItemsList["folding boat"] = {
	name : "Folding Boat",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "As a Magic action, I can speak a command word to have this wooden box become a Rowboat, a Keelboat, or to fold back up. The Rowboat holds 4 Medium creatures and has oars, anchor, mast, and a sail. The Keelboat holds 15 Medium creatures and has a deck, five sets of oars, rowing seats, a steering oar, anchor, deck cabin, mast, and a sail.",
	descriptionLong : "A wooden box of 12 inch \xD7 6 inch \xD7 6 inch, that can be opened to put items in. As a Magic action, I can speak one of its three command words. The first causes it to unfold into a Rowboat 10 ft \xD7 4 ft \xD7 2 ft, with oars, an anchor, a mast, and a lateen sail, which can hold four Medium creatures comfortably. The second causes it to unfold into a Keelboat 24 ft \xD7 8 ft \xD7 6 ft, with a deck, rowing seats, five sets of oars, a steering oar, an anchor, a deck cabin, and a mast with a square sail, which can hold fifteen Medium creatures comfortably. Three causes it to fold up, leaving large objects placed in the boat/ship outside of the box.",
	descriptionFull : "This object appears as a wooden box that measures 12 inches long, 6 inches wide, and 6 inches deep. It weighs 4 pounds and floats. It can be opened to store items inside. This item also has three command words, each requiring a Magic action to use:\n   First Command Word. The box unfolds into a Rowboat.\n   Second Command Word. The box unfolds into a Keelboat.\n   Third Command Word. The Folding Boat folds back into a box if no creatures are aboard. Any objects in the vessel that can’t fit inside the box remain outside the box as it folds. Any objects in the vessel that can fit inside the box do so.\n   When the box becomes a vessel, its weight becomes that of a normal vessel its size, and anything that was stored in the box remains in the boat.\n   Statistics for the Rowboat and Keelboat appear in the Player’s Handbook. If either vessel is reduced to 0 Hit Points, the Folding Boat is destroyed.",
	weight : 4,
	action : [["action", ""]]
};
MagicItemsList["frost brand"] = {
	name : "Frost Brand",
	source : [["DMG2024", "-"]],
	type : "weapon (any sword)",
	rarity : "very rare",
	magicItemTable : "?",
	attunement : true,
	description : "This magic weapon adds +1d6 cold damage to its damage and grants me resistance to fire. In freezing temperatures, it sheds bright light in a 10-ft radius and dim light for an additional 10 ft. Once per hour when I draw the blade, I can extinguish all nonmagical flames within 30 ft of me.",
	descriptionFull : "When you hit with an attack roll using this magic weapon, the target takes an extra 1d6 Cold damage. In addition, while you hold the weapon, you have Resistance to Fire damage.\n   In freezing temperatures, the weapon sheds Bright Light in a 10-foot radius and Dim Light for an additional 10 feet.\n   When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of yourself. Once used, this property can’t be used again for 1 hour.",
	usages : 1,
	recovery : "Hour",
	additional : "extinguish flames",
	dmgres : ["Fire"],
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "weapon"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /glaive|greatsword|longsword|rapier|scimitar|shortsword/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/glaive|greatsword|longsword|rapier|scimitar|shortsword/i).test(v.baseWeaponName) && (/^(?=.*frost)(?=.*brand).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+1d6 cold damage';
				}
			},
			'If I include the words "Frost Brand" in a the name of a sword, it will be treated as the magic weapon Frost Brand. It does +1d6 cold damage.'
		]
	}
};
MagicItemsList["gauntlets of ogre power"] = {
	name : "Gauntlets of Ogre Power",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "My Strength score is 19 while I'm wearing these gauntlets, provided that my Strength is not already 19 or higher.",
	descriptionFull : "Your Strength is 19 while you wear these gauntlets. They have no effect on you if your Strength is 19 or higher without them.",
	attunement : true,
	scoresOverride : [19, 0, 0, 0, 0, 0]
};
MagicItemsList["gem of brightness"] = { // contains contributions by Larry Hoy
	name : "Gem of Brightness",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "This gem has 50 charges. As a Magic action while holding it, I can speak a command word to cause it to: shed 30-ft bright and 30-ft dim light, fire a 60-ft beam of light at 1 creature (1 charge, DC 15 Con save or blinded 1 minute), or flare with blinding light in a 30-ft cone (5 charges, DC 15 Con save or blinded 1 minute).",
	descriptionLong : "This gem has 50 charges. As a Magic action while holding it, I can speak one of its three command words to cause it to: [1] shed bright light in a 30-ft radius and dim light in an additional 30 ft until another function of the gem is used or I use a bonus action to end it, [2] fire a 60-ft beam of light at 1 creature (1 charge, DC 15 Con save or blinded 1 minute), or [3] flare with blinding light in a 30-ft cone (5 charges, DC 15 Con save or blinded 1 minute). Blinded creatures can repeat the save at the end of each of their turns. When all of the gem's charges are expended, the gem becomes a nonmagical jewel worth 50 gp.",
	descriptionFull : "This prism has 50 charges. While you are holding it, you can take a Magic action and use one of three command words to cause one of the following effects:\n \u2022 First Command Word. The gem sheds Bright Light in a 30-foot radius and Dim Light for an additional 30 feet. This effect doesn’t expend a charge. It lasts until you take a Bonus Action to repeat the command word or until you use another function of the gem.\n \u2022 Second Command Word. You expend 1 charge and cause the gem to fire a brilliant beam of light at one creature you can see within 60 feet of yourself. The creature must succeed on a DC 15 Constitution saving throw or have the Blinded condition for 1 minute. The creature repeats the save at the end of each of its turns, ending the effect on itself on a success.\n \u2022 Third Command Word. You expend 5 charges and cause the gem to flare with intense light in a 30-foot Cone. Each creature in the Cone makes a saving throw as if struck by the beam created with the second command word.\n\nWhen all of the gem’s charges are expended, the gem becomes a nonmagical jewel worth 50 GP.",
	weight : 1,
	usages : 50,
	recovery : "Never",
	action : [["action", ""]]
};
MagicItemsList["gem of seeing"] = { // contains contributions by Larry Hoy
	name : "Gem of Seeing",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "This gem has 3 charges. As a Magic action, I can speak its command word and expend 1 charge. For the next 10 minutes, I have truesight out to 120 ft when I peer through the gem. The gem regains 1d3 expended charges daily at dawn.",
	descriptionFull : "This gem has 3 charges. As a Magic action, you can expend 1 charge. For the next 10 minutes, you have Truesight out to 120 feet when you peer through the gem.\n   The gem regains 1d3 expended charges daily at dawn.",
	attunement : true,
	weight : 1,
	usages : 3,
	recovery : "dawn",
	additional : "1d3 Recharge"
};
MagicItemsList["giant slayer"] = {
	name : "Giant Slayer",
	source : [["DMG2024", "-"]],
	type : "weapon (any)",
	rarity : "rare",
	magicItemTable : "?",
	description : "I have a +1 bonus to attack and damage rolls made with this magic weapon. When I hit a creature with the giant type with this weapon, it does 2d6 extra damage of the weapon's damage type and the giant has to make a DC 15 Strength save or be knocked prone.",
	descriptionFull : "You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon.\n   When you hit a Giant with this weapon, the Giant takes an extra 2d6 damage of the weapon’s type and must succeed on a DC 15 Strength saving throw or have the Prone condition.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "weapon"],
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && (/^(?=.*giant)(?=.*slayer).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+2d6 damage vs. giants; Giants DC 15 Str save or prone';
				}
			},
			'If I include the words "Giant Slayer" in a the name of a weapon, it will be treated as the magic weapon Giant Slayer. It has +1 to hit and damage and when hitting a creatures with the giant type, it does +2d6 damage and the target has to make a DC 15 Strength save or be knocked prone.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isWeapon (/^(?=.*giant)(?=.*slayer).*$/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
		]
	}
};
MagicItemsList["glamoured studded leather"] = {
	name : "Glamoured Studded Leather",
	source : [["DMG2024", "-"]],
	type : "armor (studded leather)",
	rarity : "rare",
	magicItemTable : "?",
	description : "Studded leather with +1 AC. As a bonus action, I can speak its command word and have it assume the appearance of a normal set of clothing or another armor. I decide what it looks like: style, color, and accessories, but the armor retains its bulk and weight. The illusion lasts until I use this again or remove the armor.",
	weight : 13,
	descriptionFull : "While wearing this armor, you gain a +1 bonus to Armor Class. You can also take a Bonus Action to cause the armor to assume the appearance of a normal set of clothing or some other kind of armor. You decide what it looks like—including color, style, and accessories—but the armor retains its normal bulk and weight. The illusory appearance lasts until you use this property again or doff the armor.",
	armorAdd : "Glamoured Studded Leather",
	armorOptions : {
		regExpSearch : /^(?=.*glamou?r)(?=.*(studded|studs))(?=.*leather).*$/i,
		name : "Glamoured studded Leather",
		source : [["SRD", 224], ["D", 172]],
		type : "light",
		ac : 13,
		weight : 13
	},
	action : [["bonus action", ""]]
};
MagicItemsList["gloves of missile snaring"] = {
	name : "Gloves of Missile Snaring",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	calculate : 'event.value = "As a reaction when a ranged or thrown weapon attack hits me while I\'m wearing these gloves, I can reduce the damage by 1d10 + " + Number(What("Dex Mod")) + " (my Dexterity modifier). This only works if I have a free hand. If I reduce the damage to 0, I can catch the missile if it is small enough for me to hold in that hand.";',
	description : "",
	descriptionFull : "If you’re hit by an attack roll made with a Ranged or Thrown weapon while wearing these gloves, you can take a Reaction to reduce the damage by 1d10 plus your Dexterity modifier if you have a free hand. If you reduce the damage to 0, you can catch the ammunition or weapon if it is small enough for you to hold in that hand.",
	attunement : true,
	action : [["reaction", ""]]
};
MagicItemsList["gloves of swimming and climbing"] = { // contributed by AelarTheElfRogue
	name : "Gloves of Swimming and Climbing",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While wearing these gloves, I have a Climb Speed and a Swim Speed equal to your Speed, and I gain a +5 bonus to Strength (Athletics) checks made to climb or swim.",
	descriptionFull : "While wearing these gloves, you have a Climb Speed and a Swim Speed equal to your Speed, and you gain a +5 bonus to Strength (Athletics) checks made to climb or swim.",
	speed: [{
		climb: {spd: "walk", enc: "walk"},
		swim: {spd: "walk", enc: "walk"},
	}],
	attunement : true
};
MagicItemsList["gloves of thievery"] = {
	name : "Gloves of Thievery",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "These gloves are imperceptible while worn. While wearing them, I gain a +5 bonus to Dexterity (Sleight of Hand) checks and Dexterity checks made to pick locks.",
	descriptionFull : "These gloves are imperceptible while worn. While wearing them, you gain a +5 bonus to Dexterity (Sleight of Hand) checks.",
	addMod : [{ type: "skill", field : "Sleight of Hand", mod : 5, text : "I gain a +5 bonus to Dexterity (Sleight of Hand) checks while wearing Gloves of Thievery." }]
};
MagicItemsList["goggles of night"] = { // contributed by AelarTheElfRogue
	name : "Goggles of Night",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While wearing these dark lenses, I have darkvision out to a range of 60 feet. If I already have darkvision. wearing the goggles increases its range by 60 feet.",
	descriptionFull : "While wearing these dark lenses, you have Darkvision out to 60 feet. If you already have Darkvision, wearing the goggles increases its range by 60 feet.",
	vision : [["Darkvision", "fixed 60"], ["Darkvision", "+60"]]
};
MagicItemsList["*hag eye*"] = {
	name : "Hag Eye",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	usages : 3,
	recovery : "dawn",
	spellFirstColTitle : "CH",
	spellcastingBonus : [{
		name : "Hag Eye",
		spell : ["darkvision", "see invisibility"],
		selection : ["darkvision", "see invisibility"],
		times : 2,
		firstCol : 1,
	}],
	description : "",
	descriptionFull : "A Hag Eye has 3 charges. While wearing or holding this item, you can expend 1 charge to cast Darkvision (targeting yourself only) or See Invisibility. The Hag Eye regains all expended charges daily at dawn.\n   Coven Sensor. The Hag Eye is usually entrusted to a hag’s minion for safekeeping and transport. As a Magic action, a hag who belongs to the coven that created the Hag Eye can see what the Hag Eye sees if the hag and the Hag Eye are on the same plane of existence. This effect lasts as long as the hag maintains Concentration. Multiple hags in the coven can see through the Hag Eye simultaneously.\n   Creating a Hag Eye. Only a hag coven can craft this item, which is made from a real eye coated in varnish and often fitted to a pendant or another wearable item. A hag coven can have only one Hag Eye at a time, and creating a new one requires all three members of the coven to perform a special rite. This rite takes 1 hour, and the hags can’t perform it if one or more of them has the Incapacitated condition. If the hags take any other actions during this rite, the rite fails and ends.",
};


MagicItemsList["hammer of thunderbolts"] = {
	name : "Hammer of Thunderbolts",
	source : [["DMG2024", "-"]],
	type : "weapon (maul or warhammer)",
	rarity : "legendary",
	magicItemTable : "?",
	description : "This magical weapon adds a +1 bonus to attack and damage rolls made with it. It has additional features when I'm attuned to it, which requires me to wear a belt of giant strength or gauntlets of ogre power.",
	descriptionFull : "You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon.\n   The weapon has 5 charges. You can expend 1 charge and make a ranged attack with the weapon, hurling it as if it had the Thrown property with a normal range of 20 feet and a long range of 60 feet. If the attack hits, the weapon unleashes a thunderclap audible out to 300 feet. The target and every creature within 30 feet of it other than you must succeed on a DC 17 Constitution saving throw or have the Stunned condition until the end of your next turn. Immediately after hitting or missing, the weapon flies back to your hand. The weapon regains 1d4 + 1 expended charges daily at dawn.\n   " + toUni("Giant's Bane") + ". While you are attuned to the weapon and wearing either a Belt of Giant Strength or Gauntlets of Ogre Power to which you are also attuned, you gain the following benefits:\n    TGiants’ Bane. When you roll a 20 on the d20 for an attack roll made with this weapon against a Giant, the creature must succeed on a DC 17 Constitution saving throw or die.\n   Might of Giants. The Strength score bestowed by your Belt of Giant Strength or Gauntlets of Ogre Power increases by 4, to a maximum of 30.",
	weight : 10,
	attunement : true,
	selfChoosing : function () {
		// don't have to be attuned to the prereqs https://twitter.com/jeremyecrawford/status/948346891296653315
		return CurrentMagicItems.known.indexOf("belt of giant strength") !== -1 | CurrentMagicItems.known.indexOf("gauntlets of ogre power") !== -1 ? "attuned (requires Belt of Giant Strength or Gauntlets of Ogre Power)" : "not attuned";
	},
	choices : ["not attuned", "attuned (requires Belt of Giant Strength or Gauntlets of Ogre Power)"],
	"not attuned" : {
		description : "This magical maul adds a +1 bonus to attack and damage rolls made with it. It has additional features when I'm attuned to it, which requires me to wear both a belt of giant strength and gauntlets of ogre power.",
		weaponsAdd : ["Hammer of Thunderbolts"],
		weaponOptions : {
			baseWeapon : "maul",
			regExpSearch : /^(?=.*hammer)(?=.*thunderbolts).*$/i,
			name : "Hammer of Thunderbolts",
			source : [["SRD", 224], ["D", 173]],
			modifiers : [1, 1]
		}
	},
	"attuned (requires belt of giant strength or gauntlets of ogre power)" : {
		name : "Hammer of Thunderbolts [attuned]",
		description : "This magical maul has a +1 bonus to hit/damage and gives me +4 Strength (max 30). On a roll of 20 to hit vs. a giant, it dies on a failed DC 17 Con save. I can expend 1 charge to throw it with 20 ft/60 ft range, which, on a hit, causes all within 30 ft to make a DC 17 Con save or be stunned until the end of my next turn.",
		descriptionLong : "This magical maul adds a +1 bonus to attack and damage rolls made with it. It gives me a +4 bonus to Strength (max 30). On a roll of 20 to hit vs. a giant, the giant dies on a failed DC 17 Con save. The hammer has 5 charges and regains 1d4+1 charges daily at dawn. I can can expend 1 charge and make a ranged weapon attack with the hammer, hurling it as if it had the thrown property with a normal range of 20 ft and a long range of 60 ft. On a hit, it releases an audible thunderclap in a 300 ft radius and all within 30 ft of the target that was hit must make a DC 17 Con save or be stunned until the end of my next turn.",
		prerequisite : "Must be wearing a Belt of Giant Strength or Gauntlets of Ogre Power to attune",
		prereqeval : function () {
			// don't have to be attuned to the prereqs https://twitter.com/jeremyecrawford/status/948346891296653315
			return CurrentMagicItems.known.indexOf("belt of giant strength") !== -1 | CurrentMagicItems.known.indexOf("gauntlets of ogre power") !== -1;
		},
		usages : 5,
		recovery : "dawn",
		additional : "regains 1d4+1",
		scores : [4, 0, 0, 0, 0, 0],
		scoresMaximum : [30, 0, 0, 0, 0, 0],
		weaponsAdd : ["Hammer of Thunderbolts"],
		weaponOptions : {
			baseWeapon : "maul",
			regExpSearch : /^(?=.*hammer)(?=.*thunderbolts).*$/i,
			name : "Hammer of Thunderbolts",
			source : [["SRD", 224], ["D", 173]],
			description : "Heavy, two-handed; On 20 to hit vs. Giant: DC 17 Con save or die; Expend charge to throw",
			modifiers : [1, 1]
		}
	}
};
MagicItemsList["hat of disguise"] = { // contributed by Larry Hoy
	name : "Hat of Disguise",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "As a magic action while wearing this hat, I can cast Disguise Self from it at will. The spell ends if the hat is removed.",
	descriptionFull : "While wearing this hat, you can cast the Disguise Self spell. The spell ends if the hat is removed.",
	attunement : true,
	spellcastingBonus : [{
		name : "At will",
		spells : ["disguise self"],
		selection : ["disguise self"],
		firstCol : "atwill"
   }],
   spellcastingAbility : "class" // https://www.sageadvice.eu/2015/11/27/hat-of-disguise-dc/
};
MagicItemsList["hat of many spells"] = {
};
MagicItemsList["hat of vermin"] = {
	name : "Hat of Vermin",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "This hat has 3 charges, regaining all at dawn. As an action while holding it, I can expend 1 charge and speak a command word to have one bat, frog, or rat appear in the hat. The creature acts as an ordinary member of its kind and disappears after 1 hour or when it has 0 HP. It is not under my control.",
	descriptionFull : "This hat has 3 charges. While holding the hat, you can use an action to expend 1 of its charges and speak a command word that summons your choice of a bat, a frog, or a rat. The summoned creature magically appears in the hat and tries to get away from you as quickly as possible. The creature is neither friendly nor hostile, and it isn't under your control. It behaves as an ordinary creature of its kind and disappears after 1 hour or when it drops to 0 hit points. The hat regains all expended charges daily at dawn.",
	action : [["action", ""]],
	usages : 3,
	recovery : "dawn"
};
MagicItemsList["hat of wizardry"] = {
	name : "Hat of Wizardry",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "I can use this antiquated, cone-shaped hat adorned with gold crescent moons and stars as a spellcasting focus for my wizard spells. Once per long rest, I can use it to cast a wizard cantrip that I don't know. To do so, I must make a DC 10 Intelligence (Arcana) check, wasting the attempt as well as my action if I fail.",
	descriptionFull : "This antiquated, cone-shaped hat is adorned with gold crescent moons and stars. While you are wearing it, you gain the following benefits:\n \u2022 You can use the hat as a spellcasting focus for your wizard spells.\n \u2022 You can try to cast a cantrip that you don't know. The cantrip must be on the wizard spell list, and you must make a DC 10 Intelligence (Arcana) check. If the check succeeds, you cast the spell. If the check fails, so does the spell, and the action used to cast the spell is wasted. In either case, you can't use this property again until you finish a long rest.",
	attunement : true,
	prerequisite : "Requires attunement by a wizard",
	prereqeval : function (v) { return classes.known.wizard ? true : false; },
	usages : 1,
	recovery : "long rest",
	eval : function () {
		CurrentSpells['hat of wizardry'] = {
			name : 'Hat of Wizardry (item)',
			ability : "wizard",
			list : { 'class' : 'wizard', level : [0, 0] },
			known : { cantrips : 0, spells : 'list' },
			bonus : {
				bon1 : {
					name : 'Just select "Full List"',
					spells : []
				},
				bon2 : {
					name : 'on the bottom left',
					spells : []
				}
			},
			typeList : 4,
			refType : "item",
			allowUpCasting : true,
			firstCol : ""
		};
		SetStringifieds('spells'); CurrentUpdates.types.push('spells');
	},
	removeeval : function () {
		delete CurrentSpells['hat of wizardry'];
		SetStringifieds('spells'); CurrentUpdates.types.push('spells');
	},
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Remove the already known cantrips, from any source except magic items
				if (spName === 'hat of wizardry') {
					var allSpellsKnown = [];
					for (var sCast in CurrentSpells) {
						if (sCast.refType === "item") continue;
						var oCast = CurrentSpells[sCast];
						if (oCast.selectCa) allSpellsKnown = allSpellsKnown.concat(oCast.selectCa);
						if (oCast.selectBo) allSpellsKnown = allSpellsKnown.concat(oCast.selectBo);
					}
					var knownCantrips = OrderSpells(allSpellsKnown, "single", false, false, 0);
					if (!spList.notspells) spList.notspells = [];
					spList.notspells = spList.notspells.concat(knownCantrips);
				}
			}
		],
		spellAdd : [
			function (spellKey, spellObj, spName, isDuplicate) {
				if (spName === 'hat of wizardry') {
					spellObj.firstCol = "";
				}
			}
		]
	},
};
MagicItemsList["headband of intellect"] = {
	name : "Headband of Intellect",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "My Intelligence score is 19 while I'm wearing this headband, provided that my Intelligence is not already 19 or higher.",
	descriptionFull : "Your Intelligence score is 19 while you wear this headband. It has no effect on you if your Intelligence is already 19 or higher without it.",
	attunement : true,
	scoresOverride : [0, 0, 0, 19, 0, 0]
};
MagicItemsList["helm of brilliance"] = {
	name : "Helm of Brilliance",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "?",
	description : "This helm is set with diamonds, rubies, fire opals, and opals. Gems pried from the helm turn to dust. When all the gems are removed or destroyed, the helm loses its magic. I can use an action to cast a spell by having a gem crumble to dust. The helm has special properties for each type of gem, see Notes page.",
	descriptionFull : "This dazzling helm is set with 1d10 diamonds, 2d10 rubies, 3d10 fire opals, and 4d10 opals. Any gem pried from the helm crumbles to dust. When all the gems are removed or destroyed, the helm loses its magic.\n   You gain the following benefits while wearing it:\n \u2022 You can use an action to cast one of the following spells (save DC 18), using one of the helm's gems of the specified type as a component: Daylight (opal), Fireball (fire opal), Prismatic Spray (diamond), or Wall of Fire (ruby). The gem is destroyed when the spell is cast and disappears from the helm.\n \u2022 As long as it has at least one diamond, the helm emits dim light in a 30-foot radius when at least one undead is within that area. Any undead that starts its turn in that area takes 1d6 radiant damage.\n \u2022 As long as the helm has at least one ruby, you have resistance to fire damage.\n \u2022 As long as the helm has at least one fire opal, you can use an action and speak a command word to cause one weapon you are holding to burst into flames. The flames emit bright light in a 10-foot radius and dim light for an additional 10 feet. The flames are harmless to you and the weapon. When you hit with an attack using the blazing weapon, the target takes an extra 1d6 fire damage. The flames last until you use a bonus action to speak the command word again or until you drop or stow the weapon.\n\nRoll a d20 if you are wearing the helm and take fire damage as a result of failing a saving throw against a spell. On a roll of 1, the helm emits beams of light from its remaining gems. Each creature within 60 feet of the helm other than you must succeed on a DC 17 Dexterity saving throw or be struck by a beam, taking radiant damage equal to the number of gems in the helm. The helm and its gems are then destroyed.",
	attunement : true,
	dmgres : ["Fire"],
	action : [["action", " (spell/blazing weapon)"]],
	extraLimitedFeatures : [{
		name : "Helm of Brilliance - Diamonds (D)",
		usages : "1d10",
		recovery : "Never"
	}, {
		name : "Helm of Brilliance - Rubies (R)",
		usages : "2d10",
		recovery : "Never"
	}, {
		name : "Helm of Brilliance - Fire Opals (F)",
		usages : "3d10",
		recovery : "Never"
	}, {
		name : "Helm of Brilliance - Opals (O)",
		usages : "4d10",
		recovery : "Never"
	}],
	fixedDC : 18,
	spellFirstColTitle : "GE",
	spellcastingBonus : [{
		name : "Uses an opal (O)",
		spells : ["daylight"],
		selection : ["daylight"],
		firstCol : "(O)"
	}, {
		name : "Uses a fire opal (F)",
		spells : ["fireball"],
		selection : ["fireball"],
		firstCol : "(F)"
	}, {
		name : "Uses a diamond (D)",
		spells : ["prismatic spray"],
		selection : ["prismatic spray"],
		firstCol : "(D)"
	}, {
		name : "Uses a ruby (R)",
		spells : ["wall of fire"],
		selection : ["wall of fire"],
		firstCol : "(R)"
	}],
	spellChanges : {
		"daylight" : {
			components : "M\u0192,M\u2020",
			compMaterial : "Spells cast from magic items don't require any components other than the magic item itself and, when casting Daylight from the Helm of Brilliance, causes one of the opals in the helm to crumble to dust.",
			changes : "Using the Helm of Brilliance to cast Daylight causes one of the opals in the helm to crumble to dust."
		},
		"fireball" : {
			components : "M\u0192,M\u2020",
			compMaterial : "Spells cast from magic items don't require any components other than the magic item itself and, when casting Fireball from the Helm of Brilliance, causes one of the fire opals in the helm to crumble to dust.",
			changes : "Using the Helm of Brilliance to cast Fireball causes one of the fire opals in the helm to crumble to dust."
		},
		"prismatic spray" : {
			components : "M\u0192,M\u2020",
			compMaterial : "Spells cast from magic items don't require any components other than the magic item itself and, when casting Prismatic Spray from the Helm of Brilliance, causes one of the diamonds in the helm to crumble to dust.",
			changes : "Using the Helm of Brilliance to cast Prismatic Spray causes one of the diamonds in the helm to crumble to dust."
		},
		"wall of fire" : {
			components : "M\u0192,M\u2020",
			compMaterial : "Spells cast from magic items don't require any components other than the magic item itself and, when casting Wall of Fire from the Helm of Brilliance, causes one of the rubies in the helm to crumble to dust.",
			changes : "Using the Helm of Brilliance to cast Wall of Fire causes one of the rubies in the helm to crumble to dust."
		}
	},
	toNotesPage : [{
		name : "Special Properties",
		note : [
			"This dazzling helm is set with 1d10 diamonds, 2d10 rubies, 3d10 fire opals, and 4d10 opals. Any gem pried from the helm crumbles to dust. When all the gems are removed or destroyed, the helm loses its magic.",
			"As an action, I can cast one of the following spells (save DC 18), using one of the helm's gems of the specified type as a component: Daylight (opal), Fireball (fire opal), Prismatic Spray (diamond), or Wall of Fire (ruby). The gem is destroyed when the spell is cast and disappears from the helm.",
			"As long as the helm has at least one diamond remaining, it emits dim light in a 30-ft radius when at least one undead is within that area. Any undead that starts its turn in that area takes 1d6 radiant damage.",
			"As long as the helm has at least one ruby remaining, I have resistance to fire damage.",
			"As long as the helm has at least one fire opal remaining, I can use an action and speak a command word to cause one weapon I'm holding to burst into flames. The flames emit bright light in a 10-ft radius and dim light for an additional 10 ft. The flames are harmless to me and the weapon. When I hit with an attack using the blazing weapon, the target takes an extra 1d6 fire damage. The flames last until I use a bonus action to speak the command word again or until I drop or stow the weapon.",
			"If I take fire damage as a result of failing a save against a spell while wearing the helm, I have to roll a d20. On a roll of 1, the helm emits beams of light from its remaining gems. Each creature within 60 ft other than myself must succeed on a DC 17 Dexterity save or be struck by a beam, taking radiant damage equal to the number of gems remaining in the helm. The helm and its gems are then destroyed."
		]
	}]
};
MagicItemsList["helm of comprehending languages"] = { // contributed by Larry Hoy
	name : "Helm of Comprehending Languages",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While wearing this helm, I can cast Comprehend Languages at will.",
	descriptionFull : "While wearing this helm, you can use an action to cast the Comprehend Languages spell from it at will.",
	spellcastingBonus : {
		name : "At will",
		spells : ["comprehend languages"],
		selection : ["comprehend languages"],
		firstCol : "atwill"
	}
};
MagicItemsList["helm of telepathy"] = {
	name : "Helm of Telepathy",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While wearing this helm, I can cast Detect Thoughts (DC 13). As a bonus action, I can send a telepathic message to a creature that I'm focusing on with Detect Thoughts, which can reply as a bonus action. Once between each dawn, I can cast Suggestion (DC 13) on a creature I'm focusing on with Detect Thoughts.",
	descriptionFull : "While wearing this helm, you can use an action to cast the Detect Thoughts spell (save DC 13) from it. As long as you maintain concentration on the spell, you can use a bonus action to send a telepathic message to a creature you are focused on. It can reply\u2014using a bonus action to do so\u2014while your focus on it continues.\n   While focusing on a creature with Detect Thoughts, you can use an action to cast the Suggestion spell (save DC 13) from the helm on that creature. Once used, the suggestion property can't be used again until the next dawn.",
	attunement : true,
	limfeaname : "Helm of Telepathy: Suggestion",
	usages : 1,
	recovery : "dawn",
	fixedDC : 13,
	spellcastingBonus : [{
		name : "At will",
		spells : ["detect thoughts"],
		selection : ["detect thoughts"],
		firstCol : "atwill"
	}, {
		name : "Once per dawn",
		spells : ["suggestion"],
		selection : ["suggestion"],
		firstCol : "oncelr"
	}]
};
MagicItemsList["helm of teleportation"] = {
	name : "Helm of Teleportation",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "This helm has 3 charges. While wearing it, I can use an action and expend 1 charge to cast Teleport from it. The helm regains 1d3 expended charges daily at dawn.",
	descriptionFull : "This helm has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the Teleport spell from it. The helm regains 1d3 expended charges daily at dawn.",
	attunement : true,
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3",
	spellFirstColTitle : "Ch",
	spellcastingBonus : {
		name : "1 charge",
		spells : ["teleport"],
		selection : ["teleport"],
		firstCol : "1"
	}
};
MagicItemsList["heward's handy haversack"] = {
	name : "Heward's Handy Haversack",
	nameAlt : "Handy Haversack",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "This backpack weighs 5 lb, regardless of its contents. It has two side pouches that hold 20 lb (2 cu ft) each and a central pouch that holds 80 lb (8 cu ft). Retrieving an item from it requires an action. If it's overloaded, pierced, or torn, it and its contents are destroyed. If turned inside out, all its contents spill forth.",
	descriptionLong : "This backpack weighs 5 lb, regardless of its contents. It has two side pouches that hold up to 20 lb (2 cu ft) each and a central pouch that holds up to 80 lb (8 cu ft). Retrieving an item from it requires an action. When I reach in the bag for a specific item, the item is always magically on top. If it's overloaded, pierced, or torn, it and its contents are destroyed. If turned inside out, all its contents spill forth. A creature placed inside the bag can survive for 10 minutes before starting to suffocate. Placing the haversack in another extradimensional space instantly destroys both and opens a gate to the Astral Plane.",
	descriptionFull : "This backpack has a central pouch and two side pouches, each of which is an extradimensional space. Each side pouch can hold up to 20 pounds of material, not exceeding a volume of 2 cubic feet. The large central pouch can hold up to 8 cubic feet or 80 pounds of material. The backpack always weighs 5 pounds, regardless of its contents.\n   Placing an object in the haversack follows the normal rules for interacting with objects. Retrieving an item from the haversack requires you to use an action. When you reach into the haversack for a specific item, the item is always magically on top.\n   The haversack has a few limitations. If it is overloaded, or if a sharp object pierces it or tears it, the haversack ruptures and is destroyed. If the haversack is destroyed, its contents are lost forever, although an artifact always turns up again somewhere. If the haversack is turned inside out, its contents spill forth, unharmed, and the haversack must be put right before it can be used again. If a breathing creature is placed within the haversack, the creature can survive for up to 10 minutes, after which time it begins to suffocate.\n   Placing the haversack inside an extradimensional space created by a bag of holding, portable hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10-feet of the gate is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.",
	weight : 5,
	action : [["action", " (retrieve item)"]]
};
MagicItemsList["heward's handy spice pouch"] = {
	name : "Heward's Handy Spice Pouch",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "This belt pouch appears empty. It has 10 charges, regaining 1d6+4 expended charges at dawn. As an action while holding it, I can speak the name of any nonmagical food seasoning (e.g. salt, pepper, or saffron), and remove a pinch of the desired seasoning from the pouch. A pinch is enough to season a single meal.",
	descriptionFull : "This belt pouch appears empty and has 10 charges. While holding the pouch, you can use an action to expend 1 of its charges, speak the name of any nonmagical food seasoning (such as salt, pepper, saffron, or cilantro), and remove a pinch of the desired seasoning from the pouch. A pinch is enough to season a single meal. The pouch regains 1d6+4 expended charges daily at dawn.",
	weight : 1,
	usages : 10,
	recovery : "dawn",
	additional : "regains 1d6+4"
};
MagicItemsList["holy avenger"] = {
	name : "Holy Avenger",
	source : [["DMG2024", "-"]],
	type : "weapon (any sword)",
	rarity : "legendary",
	magicItemTable : "?",
	attunement : true,
	description : "I have a +3 bonus to attack and damage rolls made with this magic sword. It does +2d10 radiant damage against fiends and undead. While holding the drawn sword, I have a 10-ft radius aura (30-ft if level 17 paladin) that grants me and my allies adv. on saves against spells and magical effects.",
	descriptionFull : "You gain a +3 bonus to attack and damage rolls made with this magic weapon. When you hit a fiend or an undead with it, that creature takes an extra 2d10 radiant damage.\n   While you hold the drawn sword, it creates an aura in a 10-foot radius around you. You and all creatures friendly to you in the aura have advantage on saving throws against spells and other magical effects. If you have 17 or more levels in the paladin class, the radius of the aura increases to 30 feet.",
	prerequisite : "Requires attunement by a paladin",
	prereqeval : function (v) { return classes.known.paladin ? true : false; },
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "sword"],
		itemName1stPage : ["brackets", "Holy Avenger"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*holy)(?=.*avenger).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+2d10 radiant damage vs. fiends and undead';
				}
			},
			'If I include the words "Holy Avenger" in a the name of a sword, it will be treated as the magic weapon Holy Avenger. It has +3 to hit and damage and does +2d10 radiant damage to fiends and undead.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*holy)(?=.*avenger).*$/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 3;
				}
			}, ''
		]
	},
	savetxt : { adv_vs : ["spells", "magical effects"] },
	choices : ["Paladin level 1-16 (10-ft aura)", "Paladin level 17+ (30-ft aura)"],
	selfChoosing : function () {
		return !classes.known.paladin ? "" : classes.known.paladin.level < 17 ? "paladin level 1-16 (10-ft aura)" : "paladin level 17+ (30-ft aura)";
	},
	"paladin level 1-16 (10-ft aura)" : {
		name : "Holy\u200A Avenger",
		description : "I have a +3 bonus to attack and damage rolls made with this magic sword. It does +2d10 radiant damage against fiends and undead. While holding the drawn sword, I have a 10-ft radius aura that grants me and my allies advantage on saving throws against spells and magical effects."
	},
	"paladin level 17+ (30-ft aura)" : {
		name : "Holy\u200A\u200A Avenger",
		description : "I have a +3 bonus to attack and damage rolls made with this magic sword. It does +2d10 radiant damage against fiends and undead. While holding the drawn sword, I have a 30-ft radius aura that grants me and my allies advantage on saving throws against spells and magical effects."
	}
};
MagicItemsList["horn of blasting"] = { // contains contributions by Larry Hoy
	name : "Horn of Blasting",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "As an action, I can speak the horn's command word and blow it, creating a 30-ft cone. All in it take 5d6 thunder damage and are deafened for 1 min. Half damage with a DC 15 Con save and not deafened. Glass/crystal creatures/objects have disadv. and take 10d6 damage. There is a 20% chance each use that it explodes.",
	descriptionLong: "As an action, I can speak the horn's command word and blow it, emitting a thunderous blast in a 30-foot cone audible 600 feet away. Creatures in the cone must make a DC 15 Con save or take 5d6 thunder damage and be deafened for 1 min; otherwise, they just take half the damage. Creatures and objects made of glass or crystal have disadvantage on the save and take 10d6 thunder damage instead. Each use of its magic has a 20% chance of causing it to explode, dealing 10d6 fire damage to the blower and destroying it.",
	descriptionFull : "You can use an action to speak the horn's command word and then blow the horn, which emits a thunderous blast in a 30-foot cone that is audible 600 feet away. Each creature in the cone must make a DC 15 Constitution saving throw. On a failed save, a creature takes 5d6 thunder damage and is deafened for 1 minute. On a successful save, a creature takes half as much damage and isn't deafened. Creatures and objects made of glass or crystal have disadvantage on the saving throw and take 10d6 thunder damage instead of 5d6.\n   Each use of the horn's magic has a 20% chance of causing the horn to explode. The explosion deals 10d6 fire damage to the blower and destroys the horn.",
	weight : 2,
	action : [["action", ""]]
};
MagicItemsList["horn of silent alarm"] = {
	name : "Horn of Silent Alarm",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "This horn has 4 charges, regaining 1d4 expended charges daily at dawn. As an action, I can expend 1 charge and blow it, have only one creature within 600 ft of my choice hear the horn's blare, provided it isn't deafened. No other creature hears sound coming from the horn.",
	descriptionFull : "This horn has 4 charges. When you use an action to blow it, one creature of your choice can hear the horn's blare, provided the creature is within 600 feet of the horn and not deafened. No other creature hears sound coming from the horn. The horn regains 1d4 expended charges daily at dawn.",
	weight : 2,
	usages : 4,
	recovery : "dawn",
	additional : "regains 1d4",
	action : [["action", ""]]
};
MagicItemsList["horn of valhalla"] = { // contains contributions by Larry Hoy
	name : "Horn of Valhalla",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	description : "As an action once per 7 days, I can blow this horn to summon warrior spirits from Ysgard within 60 ft me. These have the statistics of a berserker and return after 1 hour or when they drop to 0 HP. The number and how they respond depends on the type of material the horn is made of.",
	descriptionFull : "You can use an action to blow this horn. In response, warrior spirits from the plane of Ysgard appear within 60 feet of you. These spirits use the berserker statistics. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.\n Four types of Horn of Valhalla are known to exist, each made of a different metal. The horn's type determines how many berserkers answer it summons, as well as the requirement for its use. The DM chooses the horn's type or determines it randomly.\n   If you blow the horn without meeting its requirement, the summoned berserkers attack you. If you meet the requirement, they are friendly to you and your companions and follow your commands.",
	weight : 2,
	usages : 1,
	recovery : "7 days",
	action : [["action", ""]],
	allowDuplicates : true,
	choices : ["Silver (rare; 2d4+2 berserkers)", "Brass (rare; 3d4+3 berserkers; prereq: simple weapons prof.)", "Bronze (very rare; 4d4+4 berserkers; prereq: medium armor prof.)", "Iron (very rare; 5d4+5 berserkers; prereq: martial weapons prof.)"],
	"silver (rare; 2d4+2 berserkers)" : {
		name : "Silver Horn of Valhalla",
		sortname : "Horn of Valhalla, Silver",
		rarity : "rare",
		magicItemTable : "?",
		description : "As an action once per 7 days, I can blow this horn to summon 2d4+2 warrior spirits from Ysgard within 60 ft me. These have the statistics of a berserker and return after 1 hour or when they drop to 0 HP. They are friendly to me and my companions and follow my commands.",
		descriptionFull : "You can use an action to blow this horn. In response, warrior spirits from the plane of Ysgard appear within 60 feet of you. These spirits use the berserker statistics. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.\n   The silver horn summons 2d4+2 berserkers.\n   The berserkers are friendly to you and your companions and follow your commands."
	},
	"brass (rare; 3d4+3 berserkers; prereq: simple weapons prof.)" : {
		name : "Brass Horn of Valhalla",
		sortname : "Horn of Valhalla, Brass",
		rarity : "rare",
		magicItemTable : "?",
		description : "As an action once per 7 days, I can blow this horn to summon 3d4+3 warrior spirits from Ysgard within 60 ft. These berserkers return after 1 hour or when they drop to 0 HP. If I'm proficient with all simple weapons, they follow my commands and are friendly to me and my companions. Otherwise, they attack me.",
		descriptionFull : "You can use an action to blow this horn. In response, warrior spirits from the plane of Ysgard appear within 60 feet of you. These spirits use the berserker statistics. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.\n   A brass horn summons 3d4+3 berserkers. To use the brass horn, you must be proficient with all simple weapons.\n   If you blow the horn without meeting its requirement, the summoned berserkers attack you. If you meet the requirement, they are friendly to you and your companions and follow your commands."
	},
	"bronze (very rare; 4d4+4 berserkers; prereq: medium armor prof.)" : {
		name : "Bronze Horn of Valhalla",
		sortname : "Horn of Valhalla, Bronze",
		rarity : "very rare",
		magicItemTable : "?",
		description : "As an action once per 7 days, I can blow this horn to summon 4d4+4 warrior spirits from Ysgard within 60 ft. These berserkers return after 1 hour or when they drop to 0 HP. If I'm proficient with medium armor, they follow my commands and are friendly to me and my companions. Otherwise, they attack me.",
		descriptionFull : "You can use an action to blow this horn. In response, warrior spirits from the plane of Ysgard appear within 60 feet of you. These spirits use the berserker statistics. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.\n   A bronze horn summons 4d4+4 berserkers. To use the bronze horn, you must be proficient with medium armor.\n   If you blow the horn without meeting its requirement, the summoned berserkers attack you. If you meet the requirement, they are friendly to you and your companions and follow your commands."
	},
	"iron (very rare; 5d4+5 berserkers; prereq: martial weapons prof.)" : {
		name : "Iron Horn of Valhalla",
		sortname : "Horn of Valhalla, Iron",
		rarity : "legendary",
		magicItemTable : "?",
		description : "As an action once per 7 days, I can blow this horn to summon 5d4+5 warrior spirits from Ysgard within 60 ft. These berserkers return after 1 hour or when they drop to 0 HP. If I'm proficient with all martial weapons, they follow my commands and are friendly to me and my companions. Otherwise, they attack me.",
		descriptionFull : "You can use an action to blow this horn. In response, warrior spirits from the plane of Ysgard appear within 60 feet of you. These spirits use the berserker statistics. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.\n   The iron horn summons 5d4+5 berserkers. To use the iron horn, you must be proficient with all martial weapons.\n   If you blow the horn without meeting its requirement, the summoned berserkers attack you. If you meet the requirement, they are friendly to you and your companions and follow your commands."
	}
};
MagicItemsList["horseshoes of a zephyr"] = {
	name : "Horseshoes of a Zephyr",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "?",
	description : "While all four shoes are affixed to the hooves of a creature, they allow it to move normally while floating 4 inches above the floor. The creature leaves no tracks, can cross or stand above liquid or unstable surfaces, ignores difficult terrain, and doesn't suffer exhaustion from moving at normal speed for 12 hours a day.",
	descriptionFull : "These iron horseshoes come in a set of four. While all four shoes are affixed to the hooves of a horse or similar creature, they allow the creature to move normally while floating 4 inches above the ground. This effect means the creature can cross or stand above nonsolid or unstable surfaces, such as water or lava. The creature leaves no tracks and ignores difficult terrain. In addition, the creature can move at normal speed for up to 12 hours a day without suffering exhaustion from a forced march."
};
MagicItemsList["horseshoes of speed"] = {
	name : "Horseshoes of Speed",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "While all four shoes are affixed to the hooves of a horse or similar creature, they increase the creature's walking speed by 30 ft.",
	descriptionFull : "These iron horseshoes come in a set of four. While all four shoes are affixed to the hooves of a horse or similar creature, they increase the creature's walking speed by 30 feet."
};
MagicItemsList["immovable rod"] = {
	name : "Immovable Rod",
	source : [["DMG2024", "-"]],
	type : "rod",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "This flat iron rod has a button on one end. I can use an action to press the button, magically fixing the rod in place or making it movable again. Once fixed, it holds up to 8000 lb. More weight causes it to deactivate and fall. A creature can use an action to try and move the rod up to 10 ft with a DC 30 Strength check.",
	descriptionFull : "This flat iron rod has a button on one end. You can use an action to press the button, which causes the rod to become magically fixed in place. Until you or another creature uses an action to push the button again, the rod doesn't move, even if it is defying gravity. The rod can hold up to 8,000 pounds of weight. More weight causes the rod to deactivate and fall. A creature can use an action to make a DC 30 Strength check, moving the fixed rod up to 10 feet on a success",
	weight : 2,
	action : [["action", " (activate/deactivate)"]]
};
MagicItemsList["instrument of illusions"] = { // contains contributions by AelarTheElFRogue
	name : "Instrument of Illusions",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item (instrument)",
	rarity : "common",
	description : "While I am playing this musical instrument, I can create harmless, illusory visual effects within a 5-ft-radius (15-ft for bards) sphere centered on the instrument. The magical effects have neither substance nor sound, and they are obviously illusory. The effects end when I stop playing.",
	descriptionFull : "While you are playing this musical instrument, you can create harmless, illusory visual effects within a 5-foot-radius sphere centered on the instrument. If you are a bard, the radius increases to 15 feet. Sample visual effects include luminous musical notes, a spectral dancer, butterflies, and gently falling snow. The magical effects have neither substance nor sound, and they are obviously illusory. The effects end when you stop playing.",
	attunement : true,
	weight : 3, // same as instrument of the bards
	choices : ["Bard (15-ft radius)", "Not a Bard (5-ft radius)"],
	selfChoosing : function () {
		return classes.known.bard ? "bard (15-ft radius)" : "not a bard (5-ft radius)";
	},
	"bard (15-ft radius)" : {
		name : "Instrument\u200A of Illusions",
		description : "While I am playing this musical instrument, I can create harmless, illusory visual effects within a 15-ft-radius sphere centered on the instrument. The magical effects have neither substance nor sound, and they are obviously illusory. The effects end when I stop playing."
	},
	"not a bard (5-ft radius)" : {
		name : "Instrument\u200A\u200A of Illusions",
		description : "While I am playing this musical instrument, I can create harmless, illusory visual effects within a 5-ft-radius sphere centered on the instrument. The magical effects have neither substance nor sound, and they are obviously illusory. The effects end when I stop playing."
	}
};
MagicItemsList["instrument of scribing"] = {
	name : "Instrument of Scribing",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item (instrument)",
	rarity : "common",
	description : "As an action while I'm playing this musical instrument, I can write a magical message on a nonmagical surface that I can see within 30 ft. The message can be up to 6 (or 7) words in a language I know and fades away after 24 hours or when Dispel Magic is cast on it. The instrument can be used like this 3 times per dawn.",
	descriptionFull : "This musical instrument has 3 charges. While you are playing it, you can use an action to expend 1 charge from the instrument and write a magical message on a nonmagical object or surface that you can see within 30 feet of you. The message can be up to six words long and is written in a language you know. If you are a bard, you can scribe an additional seven words and choose to make the message glow faintly, allowing it to be seen in nonmagical darkness. Casting Dispel Magic on the message erases it. Otherwise, the message fades away after 24 hours.\n   The instrument regains all expended charges daily at dawn.",
	attunement : true,
	weight : 3, // same as instrument of the bards
	choices : ["Bard (15-ft radius)", "Not a Bard (5-ft radius)"],
	selfChoosing : function () {
		return classes.known.bard ? "bard (15-ft radius)" : "not a bard (5-ft radius)";
	},
	"bard (15-ft radius)" : {
		name : "Instrument\u200A of Scribing",
		description : "As an action while I'm playing this musical instrument, I can write a magical message on a nonmagical surface that I can see within 30 ft. The message can be up to 7 words in a language I know and I can have it glow faintly. Dispel Magic erases it, otherwise it fades away after 24 hours. This can be used 3 times per dawn."
	},
	"not a bard (5-ft radius)" : {
		name : "Instrument\u200A\u200A of Scribing",
		description : "As an action while I'm playing this musical instrument, I can write a magical message on a nonmagical surface that I can see within 30 ft. The message can be up to 6 words in a language I know and fades away after 24 hours or when Dispel Magic is cast on it. The instrument can be used like this 3 times per dawn."
	}
};
MagicItemsList["instrument of the bards"] = {
	name : "Instrument of the Bards",
	source : [["DMG2024", "-"]],
	type : "wondrous item (instrument)",
	description : "If I play this exquisite, magical instruments while casting a spell that has a somatic or material component and charms on a failed save, it imposes disadvantage on that save. I can also use it to cast a set of spells, each once per dawn, using my spellcasting ability and spell save DC.",
	descriptionFull : "An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.\n   You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   You can play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.",
	attunement : true,
	weight : 3, // Magic of Faerûn (2001) page 161
	prerequisite : "Requires attunement by a bard",
	prereqeval : function(v) { return classes.known.bard ? true : false; },
	choices : ["Anstruth Harp (very rare)", "Canaith Mandolin (rare)", "Cli Lyre (rare)", "Doss Lute (uncommon)", "Fochlucan Bandore (uncommon)", "Mac-Fuirmidh Cittern (uncommon)", "Ollamh Harp (legendary)"],
	"anstruth harp (very rare)" : {
		name : "Anstruth Harp [Instrument of the Bards]",
		sortname : "Instrument of the Bards, Anstruth Harp",
		rarity : "very rare",
		magicItemTable : "?",
		descriptionFull : "An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.\n   You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   You can play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Anstruth harp can be used to cast Control Weather, Cure Wounds (5th level), and Wall of Thorns.",
		spellcastingBonus : [{
			name : "Once per long rest",
			spells : ["fly", "invisibility", "levitate", "protection from evil and good", "control weather", "cure wounds", "wall of thorns"],
			selection : ["fly", "invisibility", "levitate", "protection from evil and good", "control weather", "cure wounds", "wall of thorns"],
			firstCol : "oncelr",
			times : 7,
			spellcastingAbility : "class"
		}],
		spellChanges : {
			"cure wounds" : {
				description : "1 living creature heals 5d8+spellcasting ability modifier HP",
				changes : "When using the Anstruth Harp to cast Cure Wounds, it is cast at 5th-level."
			},
			"control weather" : {
				time : "1 a",
				changes : "Casting time is only an action."
			}
		}
	},
	"canaith mandolin (rare)" : {
		name : "Canaith Mandolin [Instrument of the Bards]",
		sortname : "Instrument of the Bards, Canaith Mandolin",
		rarity : "rare",
		magicItemTable : "?",
		descriptionFull : "An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.\n   You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   You can play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Canaith mandolin can be used to cast Cure Wounds (3rd level), Dispel Magic, and Protection from Energy (lightning only).",
		spellcastingBonus : [{
			name : "Once per long rest",
			spells : ["fly", "invisibility", "levitate", "protection from evil and good", "cure wounds", "dispel magic", "protection from energy"],
			selection : ["fly", "invisibility", "levitate", "protection from evil and good", "cure wounds", "dispel magic", "protection from energy"],
			firstCol : "oncelr",
			times : 7,
			spellcastingAbility : "class"
		}],
		spellChanges : {
			"cure wounds" : {
				description : "1 living creature heals 3d8+spellcasting ability modifier HP",
				changes : "When using the Canaith Mandolin to cast Cure Wounds, it is cast at 3rd-level."
			},
			"protection from energy" : {
				description : "1 creature gains resistance to Lightning damage for the duration",
				changes : "When using the Canaith Mandolin to cast Protection from Energy, it can only grant resistance to lightning damage."
			}
		}
	},
	"cli lyre (rare)" : {
		name : "Cli Lyre [Instrument of the Bards]",
		sortname : "Instrument of the Bards, Cli Lyre",
		rarity : "rare",
		magicItemTable : "?",
		descriptionFull : "An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.\n   You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   You can play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Cli lyre can be used to cast Stone Shape, Wall of Fire, and Wind Wall.",
		spellcastingBonus : [{
			name : "Once per long rest",
			spells : ["fly", "invisibility", "levitate", "protection from evil and good", "stone shape", "wall of fire", "wind wall"],
			selection : ["fly", "invisibility", "levitate", "protection from evil and good", "stone shape", "wall of fire", "wind wall"],
			firstCol : "oncelr",
			times : 7,
			spellcastingAbility : "class"
		}]
	},
	"doss lute (uncommon)" : {
		name : "Doss Lute [Instrument of the Bards]",
		sortname : "Instrument of the Bards, Doss Lute",
		rarity : "uncommon",
		magicItemTable : "?",
		descriptionFull : "An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.\n   You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   You can play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Doss lute can be used to cast Animal Friendship, Protection from Energy (fire only), and Protection from Poison.",
		spellcastingBonus : [{
			name : "Once per long rest",
			spells : ["fly", "invisibility", "levitate", "protection from evil and good", "animal friendship", "protection from energy", "protection from poison"],
			selection : ["fly", "invisibility", "levitate", "protection from evil and good", "animal friendship", "protection from energy", "protection from poison"],
			firstCol : "oncelr",
			times : 7,
			spellcastingAbility : "class"
		}],
		spellChanges : {
			"protection from energy" : {
				description : "1 creature gains resistance to Fire damage for the duration",
				changes : "When using the Doss Lute to cast Protection from Energy, it can only grant resistance to fire damage."
			}
		}
	},
	"fochlucan bandore (uncommon)" : {
		name : "Fochlucan Bandore [Instrument of the Bards]",
		sortname : "Instrument of the Bards, Fochlucan Bandore",
		rarity : "uncommon",
		magicItemTable : "?",
		descriptionFull : "An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.\n   You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   You can play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Fochlucan bandore can be used to cast Entangle, Faerie Fire, Shillelagh, and Speak with Animals.",
		spellcastingBonus : [{
			name : "Once per long rest",
			spells : ["fly", "invisibility", "levitate", "protection from evil and good", "entangle", "faerie fire", "shillelagh", "speak with animals"],
			selection : ["fly", "invisibility", "levitate", "protection from evil and good", "entangle", "faerie fire", "shillelagh", "speak with animals"],
			firstCol : "oncelr",
			times : 8,
			spellcastingAbility : "class"
		}]
	},
	"mac-fuirmidh cittern (uncommon)" : {
		name : "Mac-Fuirmidh Cittern [Instrument of the Bards]",
		sortname : "Instrument of the Bards, Mac-Fuirmidh Cittern",
		rarity : "uncommon",
		magicItemTable : "?",
		descriptionFull : "An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.\n   You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   You can play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Mac-Fuirmidh cittern can be used to cast Barkskin, Cure Wounds, and Fog Cloud.",
		spellcastingBonus : [{
			name : "Once per long rest",
			spells : ["fly", "invisibility", "levitate", "protection from evil and good", "barkskin", "cure wounds", "fog cloud"],
			selection : ["fly", "invisibility", "levitate", "protection from evil and good", "barkskin", "cure wounds", "fog cloud"],
			firstCol : "oncelr",
			times : 7,
			spellcastingAbility : "class"
		}]
	},
	"ollamh harp (legendary)" : {
		name : "Ollamh Harp [Instrument of the Bards]",
		sortname : "Instrument of the Bards, Ollamh Harp",
		rarity : "legendary",
		magicItemTable : "?",
		descriptionFull : "An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.\n   You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   You can play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Ollamh harp can be used to cast Confusion, Control Weather, and Fire Storm.",
		spellcastingBonus : [{
			name : "Once per long rest",
			spells : ["fly", "invisibility", "levitate", "protection from evil and good", "confusion", "control weather", "fire storm"],
			selection : ["fly", "invisibility", "levitate", "protection from evil and good", "confusion", "control weather", "fire storm"],
			firstCol : "oncelr",
			times : 7,
			spellcastingAbility : "class"
		}],
		spellChanges : {
			"control weather" : {
				time : "1 a",
				changes : "Casting time is only an action."
			}
		}
	}
};
MagicItemsList["ioun stone"] = {
	name : "Ioun Stone",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	attunement : true,
	description : "As an action, I can make an ioun stone orbit my head at 1d3 ft or retrieve it. Others can catch it as an action with an attack or Acrobatics check (AC/DC 24). It has 10 HP and resistance to all damage. Different stones grant different benefits.",
	descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.",
	allowDuplicates : true,
	action : [["action", " (orbit/retrieve)"]],
	choices : ["Absorption", "Agility", "Awareness", "Fortitude", "Greater Absorption", "Insight", "Intellect", "Leadership", "Mastery", "Protection", "Regeneration", "Reserve", "Strength", "Sustenance"],
	"absorption" : {
		rarity : "very rare",
		magicItemTable : "?",
		description : "As an action, I can make this pale lavender ellipsoid orbit my head at 1d3 ft or retrieve it. While it orbits my head, I can use my reaction to cancel a spell of 4th level or lower targeting only me, if I can see the caster and the stone has enough charges left. It can cancel 20 levels of spells before it loses its magic.",
		descriptionLong : "As an action, I can make this pale lavender ellipsoid orbit my head at 1d3 ft or retrieve it. Others can catch it as an action with an attack or Acrobatics check (AC/DC 24). It has 10 HP and resistance to all damage. While it orbits my head, I can use my reaction to cancel a spell of 4th level or lower targeting only me, if I can see the caster and the stone has enough charges left. It can cancel 20 levels of spells before it loses its magic.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   While this pale lavender ellipsoid orbits your head, you can use your reaction to cancel a spell of 4th level or lower cast by a creature you can see and targeting only you.\n   Once the stone has canceled 20 levels of spells, it burns out and turns dull gray, losing its magic. If you are targeted by a spell whose level is higher than the number of spell levels the stone has left, the stone can't cancel it.",
		limfeaname : "Ioun Stone of Absorption",
		usages : 20,
		recovery : "Never",
		action : [["reaction", ""]]
	},
	"agility" : {
		rarity : "very rare",
		magicItemTable : "?",
		description : "As an action, I can make this deep red sphere orbit my head at 1d3 ft or retrieve it. Others can catch it as an action with an attack or Acrobatics check (AC/DC 24). It has 10 HP and resistance to all damage. While it orbits my head, my Dexterity score increases by 2, to a maximum of 20.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   Your Dexterity score increases by 2, to a maximum of 20, while this deep red sphere orbits your head.",
		scores : [0, 2, 0, 0, 0, 0]
	},
	"awareness" : {
		rarity : "rare",
		magicItemTable : "?",
		description : "As an action, I can make this dark blue rhomboid orbit my head at 1d3 ft or retrieve it. Others can catch it as an action with an attack or Acrobatics check (AC/DC 24). It has 10 HP and resistance to all damage. While it orbits my head, I can't be surprised.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   You can't be surprised while this dark blue rhomboid orbits your head.",
		savetxt : { immune : ["surprised"] }
	},
	"fortitude" : {
		rarity : "very rare",
		magicItemTable : "?",
		description : "As an action, I can make this pink rhomboid orbit my head at 1d3 ft or retrieve it. Others can catch it as an action with an attack or Acrobatics check (AC/DC 24). It has 10 HP and resistance to all damage. While it orbits my head, my Constitution score increases by 2, to a maximum of 20.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   Your Constitution score increases by 2, to a maximum of 20, while this pink rhomboid orbits your head.",
		scores : [0, 0, 2, 0, 0, 0]
	},
	"greater absorption" : {
		rarity : "legendary",
		magicItemTable : "?",
		description : "As an action, I can make this marbled lavender and green ellipsoid orbit my head at 1d3 ft or retrieve it. While it orbits my head, I can use a reaction to cancel a spell of 8th level or lower targeting only me, if I can see the caster and enough charges are left. It can cancel 50 levels of spells before it loses its magic.",
		descriptionLong : "As an action, I can make this marbled lavender and green ellipsoid orbit my head at 1d3 ft or retrieve it. Others can catch it as an action with an attack or Acrobatics check (AC/DC 24). It has 10 HP and resistance to all damage. While it orbits my head, I can use my reaction to cancel a spell of 8th level or lower targeting only me, if I can see the caster and the stone has enough charges left. It can cancel 50 levels of spells before it loses its magic.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   While this marbled lavender and green ellipsoid orbits your head, you can use your reaction to cancel a spell of 8th level or lower cast by a creature you can see and targeting only you. Once the stone has canceled 50 levels of spells, it burns out and turns dull gray, losing its magic. If you are targeted by a spell whose level is higher than the number of spell levels the stone has left, the stone can't cancel it.",
		limfeaname : "Ioun Stone of Greater Absorption",
		usages : 50,
		recovery : "Never",
		action : [["reaction", ""]]
	},
	"insight" : {
		rarity : "very rare",
		magicItemTable : "?",
		description : "As an action, I can make this incandescent blue sphere orbit my head at 1d3 ft or retrieve it. Others can catch it as an action with an attack or Acrobatics check (AC/DC 24). It has 10 HP and resistance to all damage. While it orbits my head, my Wisdom score increases by 2, to a maximum of 20.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   Your Wisdom score increases by 2, to a maximum of 20, while this incandescent blue sphere orbits your head.",
		scores : [0, 0, 0, 0, 2, 0]
	},
	"intellect" : {
		rarity : "very rare",
		magicItemTable : "?",
		description : "As an action, I can make this marbled scarlet and blue sphere orbit my head at 1d3 ft or retrieve it. Others can catch it as an action with an attack or Acrobatics check (AC/DC 24). It has 10 HP and resistance to all damage. While it orbits my head, my Intelligence score increases by 2, to a maximum of 20.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   Your Intelligence score increases by 2, to a maximum of 20, while this marbled scarlet and blue sphere orbits your head.",
		scores : [0, 0, 0, 2, 0, 0]
	},
	"leadership" : {
		rarity : "very rare",
		magicItemTable : "?",
		description : "As an action, I can make this marbled pink and green sphere orbit my head at 1d3 ft or retrieve it. Others can catch it as an action with an attack or Acrobatics check (AC/DC 24). It has 10 HP and resistance to all damage. While it orbits my head, my Charisma score increases by 2, to a maximum of 20.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   Your Charisma score increases by 2, to a maximum of 20, while this marbled pink and green sphere orbits your head.",
		scores : [0, 0, 0, 0, 0, 2]
	},
	"mastery" : {
		rarity : "legendary",
		magicItemTable : "?",
		description : "As an action, I can make this pale green prism orbit my head at 1d3 ft or retrieve it. Others can catch it as an action with an attack or Acrobatics check (AC/DC 24). It has 10 HP and resistance to all damage. While it orbits my head, my proficiency bonus increases by 1.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   Your proficiency bonus increases by 1 while this pale green prism orbits your head.",
		addMod : [{ type: "", field : "Proficiency Bonus Modifier", mod : 1, text : "My proficiency bonus increases by 1." }]
	},
	"protection" : {
		rarity : "rare",
		magicItemTable : "?",
		description : "As an action, I can make this dusty rose prism orbit my head at 1d3 ft or retrieve it. Others can catch it as an action with an attack or Acrobatics check (AC/DC 24). It has 10 HP and resistance to all damage. While it orbits my head, I have a +1 bonus to AC.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   You gain a +1 bonus to AC while this dusty rose prism orbits your head.",
		extraAC : [{name : "Ioun Stone of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC while attuned."}]
	},
	"regeneration" : {
		rarity : "legendary",
		magicItemTable : "?",
		description : "As an action, I can make this pearly white spindle orbit my head at 1d3 ft or retrieve it. Others can catch it as an action with an attack or Acrobatics check (AC/DC 24). It has 10 HP and resistance to all damage. While it orbits my head, I regain 15 HP at the end of each hour as long as I have at least 1 HP.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   You regain 15 hit points at the end of each hour this pearly white spindle orbits your head, provided that you have at least 1 hit point."
	},
	"reserve" : {
		rarity : "rare",
		magicItemTable : "?",
		description : "As an action, I can make this vibrant purple prism orbit my head at 1d3 ft or retrieve it. It can store 3 (spell slot) levels worth of spells. By touching it, one can cast a 1-3 level spell into it. While it orbits my head, I can cast any spell stored in it as if casting it myself, but using the original casters spellcasting ability.",
		descriptionLong : "As an action, I can make this vibrant purple prism orbit my head at 1d3 ft or retrieve it. Others can catch it as an action with an attack or Acrobatics check (AC/DC 24). It has 10 HP and resistance to all damage. It can store 3 (spell slot) levels worth of spells. By touching it, one can cast a 1-3 level spell into it. While it orbits my head, I can cast any spell stored in it as if casting it myself, but using the original casters spellcasting ability.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   This vibrant purple prism stores spells cast into it, holding them until you use them. The stone can store up to 3 levels worth of spells at a time. When found, it contains 1d4-1 levels of stored spells chosen by the DM.\n   Any creature can cast a spell of 1st through 3rd level into the stone by touching it as the spell is cast. The spell has no effect, other than to be stored in the stone. If the stone can't hold the spell, the spell is expended without effect. The level of the slot used to cast the spell determines how much space it uses.\n   While this stone orbits your head, you can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The spell cast from the stone is no longer stored in it, freeing up space."
	},
	"strength" : {
		rarity : "very rare",
		magicItemTable : "?",
		description : "As an action, I can make this pale blue rhomboid orbit my head at 1d3 ft or retrieve it. Others can catch it as an action with an attack or Acrobatics check (AC/DC 24). It has 10 HP and resistance to all damage. While it orbits my head, my Strength score increases by 2, to a maximum of 20.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   Your Strength score increases by 2, to a maximum of 20, while this pale blue rhomboid orbits your head.",
		scores : [2, 0, 0, 0, 0, 0]
	},
	"sustenance" : {
		rarity : "rare",
		magicItemTable : "?",
		description : "As an action, I can make this clear spindle orbit my head at 1d3 ft or retrieve it. Others can catch it as an action with an attack or Acrobatics check (AC/DC 24). It has 10 HP and resistance to all damage. While it orbits my head, I don't need to eat or drink.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   You don't need to eat or drink while this clear spindle orbits your head."
	}
};
MagicItemsList["iron bands of bilarro"] = { // contains contributions by AelarTheElfRogue
	name : "Iron Bands of Bilarro",
	nameAlt : "Iron Bands of Binding",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "Once per dawn, as an action, I can speak the command word and make a ranged attack (Dex + Prof). If hit, the target is restrained until I use a bonus action to speak the command word again. Once per 24 hours, the target can make a DC 20 Strength check as an action to free itself and destroy the bands.",
	descriptionLong : "Once per dawn, as an action, I can throw this rusty iron sphere and speak its command word. I make a ranged attack roll with an attack bonus equal to my Dexterity modifier plus Proficiency Bonus. On a hit, the target is restrained until I take a bonus action to speak the command word again to release it. Doing so, or missing with the attack, causes the bands to contract and become a sphere once more. The target can make a DC 20 Strength check as an action, freeing itself and destroying the bands on a success. If the check fails, any further attempts made by that creature automatically fail until 24 hours have elapsed.",
	descriptionFull : "This rusty iron sphere measures 3 inches in diameter and weighs 1 pound. You can use an action to speak the command word and throw the sphere at a Huge or smaller creature you can see within 60 feet of you. As the sphere moves through the air, it opens into a tangle of metal bands.\n   Make a ranged attack roll with an attack bonus equal to your Dexterity modifier plus your proficiency bonus. On a hit, the target is restrained until you take a bonus action to speak the command word again to release it. Doing so, or missing with the attack, causes the bands to contract and become a sphere once more.\n   A creature, including the one restrained, can use an action to make a DC 20 Strength check to break the iron bands. On a success, the item is destroyed, and the restrained creature is freed. If the check fails, any further attempts made by that creature automatically fail until 24 hours have elapsed.\n   Once the bands are used, they can't be used again until the next dawn.",
	weight : 1,
	usages : 1,
	recovery : "dawn",
	action : [["action", " (throw)"], ["bonus action", " (release)"]],
	weaponsAdd : ["Iron Bands of Bilarro"],
	weaponOptions : {
		regExpSearch : /^(?=.*iron)(?=.*band)(?=.*(bilarro|binding)).*$/i,
		name : "Iron Bands of Bilarro",
		source : [["SRD", 228], ["D", 177]],
		ability : 2,
		type : "Natural",
		damage : ["\u2015", "", "Restrained"],
		range : "60 ft",
		description : "Restrains Huge or smaller creature; DC 20 Strength check to break out",
		abilitytodamage : false,
		weight : 1
	}
};
MagicItemsList["iron flask"] = { // contains contributions by Larry Hoy
	name : "Iron Flask",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "legendary",
	magicItemTable : "?",
	notLegalAL : true,
	description : "As an action I can speak the flask's command word and target a creature from another plane that I can see within 60 ft. It must make a DC 17 Wis save (adv. if trapped before) or be trapped in the flask. It holds only 1 creature. As an action, I can open it to release the creature, which then obeys my commands for 1 hour.",
	descriptionLong : "As an action I can speak the flask's command word and target a creature from another plane that I can see within 60 ft. It must make a DC 17 Wisdom saving throw or be trapped inside the flask. It has advantage on this save if it was trapped in the flask before. The flask holds only 1 creature, which remain inside until released and doesn't need to breathe, eat, or drink and doesn't age. As an action, I can remove the flak's brass stopper and release the creature inside, which then obeys my commands for 1 hour as long as those commands aren't likely to cause its death. After this time, it acts normally.",
	descriptionFull : "This iron bottle has a brass stopper. You can use an action to speak the flask's command word, targeting a creature that you can see within 60 feet of you. If the target is native to a plane of existence other than the one you're on, the target must succeed on a DC 17 Wisdom saving throw or be trapped in the flask. If the target has been trapped by the flask before, it has advantage on the saving throw. Once trapped, a creature remains in the flask until released. The flask can hold only one creature at a time. A creature trapped in the flask doesn't need to breathe, eat, or drink and doesn't age.\n   You can use an action to remove the flask's stopper and release the creature the flask contains. The creature is friendly to you and your companions for 1 hour and obeys your commands for that duration. If you give no commands or give it a command that is likely to result in its death, it defends itself but otherwise takes no actions. At the end of the duration, the creature acts in accordance with its normal disposition and alignment.\n   An Identify spell reveals that a creature is inside the flask, but the only way to determine the type of creature is to open the flask. A newly discovered bottle might already contain a creature chosen by the DM or determined randomly.\n\n" + toUni("d100\tContents") + "\n01-50\tEmpty\n   51\tArcanaloth\n   52\tCambion\n53-54\tDao\n55-57\tDemon (type 1): barlgura, shadow demon, or vrock\n58-60\tDemon (type 2): chasme or hezrou\n61-62\tDemon (type 3): glabrezu or yochlol\n63-64\tDemon (type 4): nalfeshnee\n   65\tDemon (type 5): marilith\n   66\tDemon (type 6): balor or goristro\n   67\tDeva\n68-69\tDevil (greater): horned devil, erinyes, ice devil, or pit fiend\n70-72\tDevil (lesser): imp, spined devil, bearded devil, barbed devil, chain devil, or bone devil\n73-74\tDjinni\n75-76\tEfreeti\n77-78\tElemental (any)\n   79\tGithyanki knight\n   80\tGithzerai zerth\n81-82\tInvisible stalker\n83-84\tMarid\n85-86\tMezzoloth\n87-88\tNight hag\n89-90\tNycaloth\n   91\tPlanetar\n92-93\tSalamander\n94-95\tSlaad (any)\n   96\tSolar\n97-98\tSuccubus/Incubus\n   99\tUltroloth\n   00\tXorn",
	weight : 1
};
MagicItemsList["javelin of lightning"] = { // contains contributions by Larry Hoy
	name : "Javelin of Lightning",
	source : [["DMG2024", "-"]],
	type : "weapon (javelin)",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "Once per dawn I can speak this javelin's command word and make a ranged weapon attack with it on a target within 120 ft. All between me and the target in a 5-ft wide line take 4d6 lightning damage, DC 13 Dex save halves. If the javelin hits the target, it takes 1d6 piercing and 4d6 lightning damage.",
	descriptionFull : "This javelin is a magic weapon. When you hurl it and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the javelin plus 4d6 lightning damage.\n   The javelin's property can't be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon.",
	weight : 2,
	usages : 1,
	recovery : "dawn",
	weaponsAdd : ["Javelin of Lightning"],
	weaponOptions : {
		baseWeapon : "javelin",
		regExpSearch : /^(?=.*javelin)(?=.*lightning).*$/i,
		name : "Javelin of Lightning",
		source : [["SRD", 228], ["D", 178]],
		description : "Thrown; Once per dawn special attack, see item description"
	}
};
MagicItemsList["keoghtom's ointment"] = {
	name : "Keoghtom's Ointment",
	nameAlt : "Restorative Ointment",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "This glass jar, 3 inches in diameter, contains 1d4+1 doses of a thick mixture that smells faintly of aloe. As an action, one dose of the ointment can be swallowed or applied to the skin. The creature that receives it regains 2d8+2 hit points, ceases to be poisoned, and is cured of any disease.",
	descriptionFull : "This glass jar, 3 inches in diameter, contains 1d4+1 doses of a thick mixture that smells faintly of aloe. The jar and its contents weigh \xBD pound.\n   As an action, one dose of the ointment can be swallowed or applied to the skin. The creature that receives it regains 2d8+2 hit points, ceases to be poisoned, and is cured of any disease.",
	weight : 0.5,
	usages : "1d4+1",
	recovery : "Never"
};
MagicItemsList["lantern of revealing"] = {
	name : "Lantern of Revealing",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "This lantern burns for 6 hours on 1 pint of oil. It shines bright light in a 30-ft radius and dim light for an additional 30 ft. Invisible objects and creatures are visible in the lantern's bright light. As an action, I can lower the hood, making it only dim light in a 5-ft radius.",
	descriptionFull : "While lit, this hooded lantern burns for 6 hours on 1 pint of oil, shedding bright light in a 30-foot radius and dim light for an additional 30 feet. Invisible creatures and objects are visible as long as they are in the lantern's bright light. You can use an action to lower the hood, reducing the light to dim light in a 5-foot radius.",
	weight : 2,
	action : [["action", " (hood up/down)"]]
};
MagicItemsList["lock of trickery"] = {
	name : "Lock of Trickery",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "This lock appears to be an ordinary lock and comes with a single key. The tumblers in this lock magically adjust to thwart burglars. Without the key, a creature proficient with thieves' tools can pick this lock with a successful DC 15 Dexterity check, but has disadvantage on that check.",
	descriptionFull : "This lock appears to be an ordinary lock and comes with a single key. The tumblers in this lock magically adjust to thwart burglars. Dexterity checks made to pick the lock have disadvantage. Thus, without the key, a creature proficient with thieves' tools can pick this lock with a successful DC 15 Dexterity check, but has disadvantage on that check.",
	weight : 1
};
MagicItemsList["luck blade"] = {
	name : "Luck Blade",
	source : [["DMG2024", "-"]],
	type : "weapon (any sword)",
	rarity : "legendary",
	magicItemTable : "?",
	attunement : true,
	description : "This magic sword has a +1 bonus to attack and damage rolls made with it, and grants me +1 to all saves. Once per dawn, I can use its luck to reroll one attack, ability check, or save, but I must use the second result. As an action, I can use one of its 1d4-1 charges to cast Wish. Charges can't be regained.",
	descriptionFull : "You gain a +1 bonus to attack and damage rolls made with this magic weapon. While the sword is on your person, you also gain a +1 bonus to saving throws.\n   " + toUni("Luck") + ". If the sword is on your person, you can call on its luck (no action required) to reroll one attack roll, ability check, or saving throw you dislike. You must use the second roll. This property can't be used again until the next dawn.\n   " + toUni("Wish") + ". The sword has 1d4-1 charges. While holding it, you can use an action to expend 1 charge and cast the wish spell from it. This property can't be used again until the next dawn. The sword loses this property if it has no charges.",
	extraLimitedFeatures : [{
		name : "Luck Blade - luck reroll",
		usages : 1,
		recovery : "Dawn"
	}, {
		name : "Luck Blade - cast Wish",
		usages : "1d4-1",
		recovery : "Never"
	}],
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "sword"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	addMod : [{ type : "save", field : "all", mod : 1, text : "While the Luck Blade is on my person, I gain a +1 bonus to all my saving throws." }],
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*luck)(?=.*blade).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the words "Luck Blade" in a the name of a sword, it will be treated as the magic weapon Luck Blade. It has +1 to hit and damage.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*luck)(?=.*blade).*$/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
		]
	}
};
MagicItemsList["lute of thunderous thumping"] = {
},
MagicItemsList["mace of disruption"] = {
	name : "Mace of Disruption",
	source : [["DMG2024", "-"]],
	type : "weapon (mace)",
	rarity : "rare",
	magicItemTable : "?",
	description : "This magic mace sheds bright light in a 20-ft radius and dim light for another 20 ft while held. Fiends and undead hit with it take +2d6 radiant damage and becomes frightened of me until my next turn ends. If the target has less than 26 HP after taking the damage, it must make a DC 15 Wis save or be destroyed.",
	descriptionFull : "When you hit a fiend or an undead with this magic weapon, that creature takes an extra 2d6 radiant damage. If the target has 25 hit points or fewer after taking this damage, it must succeed on a DC 15 Wisdom saving throw or be destroyed. On a successful save, the creature becomes frightened of you until the end of your next turn.\n   While you hold this weapon, it sheds bright light in a 20-foot radius and dim light for an additional 20 feet.",
	attunement : true,
	weight : 4,
	weaponsAdd : ["Mace of Disruption"],
	weaponOptions : {
		baseWeapon : "mace",
		regExpSearch : /^(?=.*mace)(?=.*disruption).*$/i,
		name : "Mace of Disruption",
		source : [["SRD", 229], ["D", 179]],
		description : "Fiend/undead +2d6 radiant damage, frightened until my next turn ends, and if HP<26, DC 15 Wis save or die"
	}
};
MagicItemsList["mace of smiting"] = {
	name : "Mace of Smiting",
	source : [["DMG2024", "-"]],
	type : "weapon (mace)",
	rarity : "rare",
	magicItemTable : "?",
	description : "This magical mace adds a +1 bonus (+3 vs. constructs) to attack and damage rolls made with it. When I roll a 20 on an attack roll, the target takes an extra 7 bludgeoning damage, or an extra 14 bludgeoning damage if it's a construct. If a construct has less than 26 HP after taking this damage, it is destroyed.",
	descriptionFull : "You gain a +1 bonus to attack and damage rolls made with this magic weapon. The bonus increases to +3 when you use the mace to attack a construct.\n   When you roll a 20 on an attack roll made with this weapon, the target takes an extra 7 bludgeoning damage, or an extra 14 bludgeoning damage if it's a construct. If a construct has 25 hit points or fewer after taking this damage, it is destroyed.",
	weight : 4,
	weaponsAdd : ["Mace of Smiting"],
	weaponOptions : {
		baseWeapon : "mace",
		regExpSearch : /^(?=.*mace)(?=.*smiting).*$/i,
		name : "Mace of Smiting",
		source : [["SRD", 229], ["D", 179]],
		description : "+2 to hit/damage vs. constructs; On 20 to hit: +7 damage (+14 vs. constructs); Constructs HP<26 destroyed",
		modifiers : [1,1]
	}
};
MagicItemsList["mace of terror"] = {
	name : "Mace of Terror",
	source : [["DMG2024", "-"]],
	type : "weapon (mace)",
	rarity : "rare",
	magicItemTable : "?",
	description : "As an action, I can use 1 charge of this mace to have all chosen creatures within 30 ft make a DC 15 Wis save or be frightened of me for 1 min, repeating the save at the end of its turns. While frightened, it takes only the Dash action to move away (or action to free itself), no reactions, and can't move within 30 ft of me.",
	descriptionLong : "This magic mace has 3 charges, regaining 1d3 at dawn. As an action, I can expend 1 charge to have each creature of my choice within 30 ft make a DC 15 Wis save or become frightened of me for 1 minute. While frightened in this way, a creature must spend its turns trying to move as far away from me as it can, using its action to Dash or to get away, and it can't willingly move within 30 ft of me and can't take reactions. If it has nowhere it can move, the creature can use the Dodge action. At the end of each of its turns, a creature can repeat the saving throw, ending the effect on itself on a success.",
	descriptionFull : "This magic weapon has 3 charges. While holding it, you can use an action and expend 1 charge to release a wave of terror. Each creature of your choice in a 30-foot radius extending from you must succeed on a DC 15 Wisdom saving throw or become frightened of you for 1 minute. While it is frightened in this way, a creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action it can use only the Dash action or try to escape from an effect that prevents it from moving. If it has nowhere it can move, the creature can use the Dodge action. At the end of each of its turns, a creature can repeat the saving throw, ending the effect on itself on a success.\n   The mace regains 1d3 expended charges daily at dawn.",
	attunement : true,
	weight : 4,
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3",
	weaponsAdd : ["Mace of Terror"],
	weaponOptions : {
		baseWeapon : "mace",
		regExpSearch : /^(?=.*mace)(?=.*terror).*$/i,
		name : "Mace of Terror",
		source : [["SRD", 229], ["D", 180]]
	}
};
MagicItemsList["mantle of spell resistance"] = {
	name : "Mantle of Spell Resistance",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "I have advantage on saving throws against spells while I wear this cloak.",
	descriptionFull : "You have advantage on saving throws against spells while you wear this cloak.",
	attunement : true,
	savetxt : { adv_vs : ["spells"] }
};
MagicItemsList["manual of bodily health"] = {
	name : "Manual of Bodily Health",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "?",
	description : "This book contains health and diet tips, and its words are charged with magic. If I spend 48 hours within 6 days to study its contents and practicing its guidelines, my Constitution score increases by 2, as does my maximum for that score. The manual then loses its magic, but regains it in a century.",
	descriptionFull : "This book contains health and diet tips, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Constitution score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
	weight : 5,
	applyStatBonus : function(itemName, statName, statBonus) {
		// a function for all the manuals/tomes
		if (!IsNotReset) return;
		initiateCurrentStats();
		var statIndx = AbilityScores.names.indexOf(statName);
		var alreadyAppliedBefore = CurrentStats.maximumsLinked[itemName];
		var applyChange = app.alert({
			nIcon : 2,
			nType : 2,
			nTitle : "Apply " + itemName + "?",
			cMsg : "Do you want to apply the +" + statBonus + " bonus to the " + statName + " score and maximum from the " + itemName + " permanently? This increase will stay even after you remove this magic item.\nIf you select 'No' below, this increase will not be applied, even if you keep the magic item selected.\n\n" + (alreadyAppliedBefore ? "It seems you have applied this item before. If you click 'No', you will be prompted to remove all ability score increases from " + itemName : "If you want to remove this ability score increase at a later time, just add the item again and you will be prompted to remove the ability score increase then.")
		});
		if (applyChange == 3) {
			if (alreadyAppliedBefore) {
				var removeAll = app.alert({
					nIcon : 2,
					nType : 2,
					nTitle : "Remove all previous uses of " + itemName + "?",
					cMsg : "Do you want to remove all the previous bonuses to " + statName + " gained from the " + itemName + "?"
				});
				if (removeAll == 3) return;
			} else {
				return;
			}
		}
		var baseAdd = [0,0,0,0,0,0];
		baseAdd[statIndx] = statBonus;
		var maxAdd = [0,0,0,0,0,0];
		maxAdd[statIndx] = "+" + baseAdd[statIndx];
		if (alreadyAppliedBefore) {
			baseAdd = [].concat(CurrentStats.maximumsLinked[itemName]);
			// remove the old version
			processStats(false, "magic", itemName, baseAdd, false, false, maxAdd);
			if (removeAll) {
				// also remove the maximum
				processStats(false, "magic", itemName, maxAdd, false, "maximums");
				return;
			}
			// now increase the gains to include the item again
			baseAdd[statIndx] += statBonus;
			maxAdd[statIndx] = "+" + baseAdd[statIndx];
		}
		processStats(true, "magic", itemName, baseAdd, false, false, maxAdd);
		processStats(true, "magic", itemName, maxAdd, false, "maximums");
	},
	eval : function() {
		MagicItemsList["manual of bodily health"].applyStatBonus("Manual of Bodily Health", "Constitution", 2);
	}
};
MagicItemsList["manual of gainful exercise"] = {
	name : "Manual of Gainful Exercise",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "?",
	description : "This book describes fitness exercises, and its words are charged with magic. If I spend 48 hours over a period of 6 days or fewer studying its contents and practicing its guidelines, my Strength score increases by 2, as does my maximum for that score. The manual then loses its magic, but regains it in a century.",
	descriptionFull : "This book describes fitness exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Strength score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
	weight : 5,
	eval : function() {
		MagicItemsList["manual of bodily health"].applyStatBonus("Manual of Gainful Exercise", "Strength", 2);
	}
};
MagicItemsList["manual of golems"] = { // contains contributions by Larry Hoy
	name : "Manual of Golems",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "?",
	description : "This tome can only be used by a spellcaster with two 5th-level spell slots. Others reading it take 6d6 psychic damage.",
	descriptionFull : "This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly. To decipher and use the manual, you must be a spellcaster with at least two 5th-level spell slots. A creature that can't use a manual of golems and attempts to read it takes 6d6 psychic damage.\n   To create a golem, you must spend a the time shown on the table, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay the specified cost to purchase supplies. Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. It is under your control, and it understands and obeys your spoken commands.",
	weight : 5,
	allowDuplicates : true,
	prerequisite : "Requires a spellcaster with at least two 5th-level spell slots",
	prereqeval : function () { return What('SpellSlots.CheckboxesSet.lvl5') >= 2; },
	choices : ["Clay", "Flesh", "Iron", "Stone"],
	"clay" : {
		name : "Manual of Clay Golems",
		sortname : "Manual of Golems, Clay",
		description : "Only spellcasters with two 5th-level spell slots can use this tome. Creating a clay golem requires 65000 gp of supplies, 30 days working uninterrupted with the manual at hand, resting no more than 8 hours per day. The manual is consumed to animate the golem, which understands and obeys my spoken commands.",
		descriptionLong : "Only spellcasters with two 5th-level spell slots can use this tome, others reading it take 6d6 psychic damage. Creating a clay golem requires 65000 gp of supplies, 30 days working uninterrupted with the manual at hand, resting no more than 8 hours per day. The manual is consumed to animate the golem, which understands and obeys my spoken commands.",
		descriptionFull : "This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly. To decipher and use the manual, you must be a spellcaster with at least two 5th-level spell slots. A creature that can't use a manual of golems and attempts to read it takes 6d6 psychic damage.\n   To create a clay golem, you must spend 30 days, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay 65,000 gp to purchase supplies. Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. It is under your control, and it understands and obeys your spoken commands."
	},
	"flesh" : {
		name : "Manual of Flesh Golems",
		sortname : "Manual of Golems, Flesh",
		description : "Only spellcasters with two 5th-level spell slots can use this tome. Creating a flesh golem requires 50000 gp of supplies, 60 days working uninterrupted with the manual at hand, resting no more than 8 hours per day. The manual is consumed to animate the golem, which understands and obeys my spoken commands.",
		descriptionLong : "Only spellcasters with two 5th-level spell slots can use this tome, others reading it take 6d6 psychic damage. Creating a flesh golem requires 50000 gp of supplies, 60 days working uninterrupted with the manual at hand, resting no more than 8 hours per day. The manual is consumed to animate the golem, which understands and obeys my spoken commands.",
		descriptionFull : "This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly. To decipher and use the manual, you must be a spellcaster with at least two 5th-level spell slots. A creature that can't use a manual of golems and attempts to read it takes 6d6 psychic damage.\n   To create a flesh golem, you must spend 60 days, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay 50,000 gp to purchase supplies. Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. It is under your control, and it understands and obeys your spoken commands."
	},
	"iron" : {
		name : "Manual of Iron Golems",
		sortname : "Manual of Golems, Iron",
		description : "Only spellcasters with two 5th-level spell slots can use this tome. Creating a iron golem requires 100000 gp of supplies, 120 days working uninterrupted with the manual at hand, resting no more than 8 hours per day. The manual is consumed to animate the golem, which understands and obeys my spoken commands.",
		descriptionLong : "Only spellcasters with two 5th-level spell slots can use this tome, others reading it take 6d6 psychic damage. Creating a iron golem requires 100000 gp of supplies, 120 days working uninterrupted with the manual at hand, resting no more than 8 hours per day. The manual is consumed to animate the golem, which understands and obeys my spoken commands.",
		descriptionFull : "This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly. To decipher and use the manual, you must be a spellcaster with at least two 5th-level spell slots. A creature that can't use a manual of golems and attempts to read it takes 6d6 psychic damage.\n   To create an iron golem, you must spend 120 days, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay 100,000 gp to purchase supplies. Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. It is under your control, and it understands and obeys your spoken commands."
	},
	"stone" : {
		name : "Manual of Stone Golems",
		sortname : "Manual of Golems, Stone",
		description : "Only spellcasters with two 5th-level spell slots can use this tome. Creating a stone golem requires 80000 gp of supplies, 90 days working uninterrupted with the manual at hand, resting no more than 8 hours per day. The manual is consumed to animate the golem, which understands and obeys my spoken commands.",
		descriptionLong : "Only spellcasters with two 5th-level spell slots can use this tome, others reading it take 6d6 psychic damage. Creating a stone golem requires 80000 gp of supplies, 90 days working uninterrupted with the manual at hand, resting no more than 8 hours per day. The manual is consumed to animate the golem, which understands and obeys my spoken commands.",
		descriptionFull : "This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly. To decipher and use the manual, you must be a spellcaster with at least two 5th-level spell slots. A creature that can't use a manual of golems and attempts to read it takes 6d6 psychic damage.\n   To create a stone golem, you must spend 90 days, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay 80,000 gp to purchase supplies. Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. It is under your control, and it understands and obeys your spoken commands."
	}
};
MagicItemsList["manual of quickness of action"] = {
	name : "Manual of Quickness of Action",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "?",
	description : "This book contains coordination and balance exercises, and its words are charged with magic. If I spend 48 hours within 6 days to study its contents and practicing its guidelines, my Dexterity score increases by 2, as does my maximum for that score. The manual then loses its magic, but regains it in a century.",
	descriptionFull : "This book contains coordination and balance exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Dexterity score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
	weight : 5,
	eval : function() {
		MagicItemsList["manual of bodily health"].applyStatBonus("Manual of Quickness of Action", "Dexterity", 2);
	}
};
MagicItemsList["mariner's armor"] = {
	name : "Mariner's Armor",
	nameTest : "Mariner's",
	source : [["DMG2024", "-"]],
	type : "armor (light, medium, or heavy)",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While wearing this armor, I have a swimming speed equal to my walking speed. In addition, whenever I start my turn underwater with 0 hit points, the armor causes me to rise 60 ft toward the surface. The armor is decorated with fish and shell motifs.",
	descriptionFull : "While wearing this armor, you have a swimming speed equal to your walking speed. In addition, whenever you start your turn underwater with 0 hit points, the armor causes you to rise 60 feet toward the surface. The armor is decorated with fish and shell motifs.",
	allowDuplicates : true,
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "suffix",
		descriptionChange : ["prefix", "armor"]
	},
	speed : { swim : { spd : "walk", enc : "walk" } }
};
MagicItemsList["medallion of thoughts"] = {
	name : "Medallion of Thoughts",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "The medallion has 3 charges. While wearing it, I can use an action and expend 1 charge to cast Detect Thoughts (save DC 13) from it. The medallion regains 1d3 expended charges daily at dawn.",
	descriptionFull : "The medallion has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the Detect Thoughts spell (save DC 13) from it. The medallion regains 1d3 expended charges daily at dawn.",
	attunement : true,
	weight : 1,
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3",
	spellcastingBonus : {
		name : "1 charge",
		spells : ["detect thoughts"],
		selection : ["detect thoughts"],
		firstCol : 1
	},
	fixedDC : 13,
	spellFirstColTitle : "Ch"
};
MagicItemsList["mirror of life trapping"] = {
	name : "Mirror of Life Trapping",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "?",
	description : "As an action when I'm within 5 ft of this mirror, I can speak its command word and activate it and it remains activated until I do so again. Creatures other than me who look in the activated mirror must make a DC 15 Charisma save or become trapped in one of its twelve extradimensional cells. See Notes page for info.",
	descriptionFull : "When this 4-foot-tall mirror is viewed indirectly, its surface shows faint images of creatures. The mirror weighs 50 pounds, and it has AC 11, 10 hit points, and vulnerability to bludgeoning damage. It shatters and is destroyed when reduced to 0 hit points.\n   If the mirror is hanging on a vertical surface and you are within 5 feet of it, you can use an action to speak its command word and activate it. It remains activated until you use an action to speak the command word again.\n   Any creature other than you that sees its reflection in the activated mirror while within 30 feet of it must succeed on a DC 15 Charisma saving throw or be trapped, along with anything it is wearing or carrying, in one of the mirror's twelve extradimensional cells. This saving throw is made with advantage if the creature knows the mirror's nature, and constructs succeed on the saving throw automatically.\n   An extradimensional cell is an infinite expanse filled with thick fog that reduces visibility to 10 feet. Creatures trapped in the mirror's cells don't age, and they don't need to eat, drink, or sleep. A creature trapped within a cell can escape using magic that permits planar travel. Otherwise, the creature is confined to the cell until freed.\n   If the mirror traps a creature but its twelve extradimensional cells are already occupied, the mirror frees one trapped creature at random to accommodate the new prisoner. A freed creature appears in an unoccupied space within sight of the mirror but facing away from it. If the mirror is shattered, all creatures it contains are freed and appear in unoccupied spaces near it.\n   While within 5 feet of the mirror, you can use an action to speak the name of one creature trapped in it or call out a particular cell by number. The creature named or contained in the named cell appears as an image on the mirror's surface. You and the creature can then communicate normally.\n   In a similar way, you can use an action to speak a second command word and free one creature trapped in the mirror. The freed creature appears, along with its possessions, in the unoccupied space nearest to the mirror and facing away from it.",
	weight : 50,
	action : [["action", ""]],
	toNotesPage : [{
		name : "Workings of the Mirror",
		note : [
			"When this 4-ft-tall mirror is viewed indirectly, its surface shows faint images of creatures. The mirror weighs 50 lb, has AC 11, 10 HP, and vulnerability to bludgeoning damage. It shatters and is destroyed when reduced to 0 hit points.",
			"If the mirror is hanging on a vertical surface and I am within 5 ft of it, I can use an action to speak its command word and activate it. It remains activated until I use an action to speak the command word again.",
			"Any creature other than me that sees its reflection in the activated mirror while within 30 ft of it must succeed on a DC 15 Charisma saving throw or be trapped, along with anything it is wearing or carrying, in one of the mirror's twelve extradimensional cells. This saving throw is made with advantage if the creature knows the mirror's nature, and constructs succeed on the saving throw automatically.",
			"An extradimensional cell is an infinite expanse filled with thick fog that reduces visibility to 10 ft. Creatures trapped in the mirror's cells don't age, and they don't need to eat, drink, or sleep. A creature trapped within a cell can escape using magic that permits planar travel. Otherwise, the creature is confined to the cell until freed.",
			"If the mirror traps a creature but its twelve extradimensional cells are already occupied, the mirror frees one trapped creature at random to accommodate the new prisoner. A freed creature appears in an unoccupied space within sight of the mirror but facing away from it. If the mirror is shattered, all creatures it contains are freed and appear in unoccupied spaces near it.",
			"While within 5 ft of the mirror, I can use an action to speak the name of one creature trapped in it or call out a particular cell by number. The creature named or contained in the named cell appears as an image on the mirror's surface and I can then communicate normally with it.",
			"In a similar way, I can use an action to speak a second command word and free one creature trapped in the mirror. The freed creature appears, along with its possessions, in the unoccupied space nearest to the mirror and facing away from it."
		]
	}]
};
MagicItemsList["mithral armor"] = {
	name : "Mithral Armor",
	nameTest : "Mithral",
	source : [["DMG2024", "-"]],
	type : "armor (medium or heavy)",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "Mithral is a light, flexible metal. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't. A mithral chain shirt or breastplate can be worn under normal clothes.",
	descriptionFull : "Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't.",
	allowDuplicates : true,
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "suffix",
		excludeCheck : function (inObjKey, inObj) {
			return !(/medium|heavy/i).test(inObj.type) || (/hide/i).test(inObj.name);
		},
		descriptionChange : ["prefix", "armor"]
	}
};
MagicItemsList["moonblade"] = {
},
MagicItemsList["moon-touched sword"] = {
	name : "Moon-Touched Sword",
	nameTest : "Moon-Touched",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "weapon (any sword)",
	rarity : "common",
	description : "In darkness, the unsheathed blade of this sword sheds moonlight, creating bright light in a 15-ft radius and dim light for an additional 15 ft.",
	descriptionFull : "In darkness, the unsheathed blade of this sword sheds moonlight, creating bright light in a 15-foot radius and dim light for an additional 15 feet.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "sword"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /sword|scimitar|rapier/i.test(v.baseWeaponName) && /moon.touched/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the words "Moon-Touched" in the name of a sword, it will be treated as the magic weapon Moon-Touched Sword.'
		]
	}
};
MagicItemsList["mystery key"] = {
	name : "Mystery Key",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "A question mark is worked into the head of this key. The key has a 5% chance of unlocking any lock into which it's inserted. Once it unlocks something, the key disappears.",
	descriptionFull : "A question mark is worked into the head of this key. The key has a 5% chance of unlocking any lock into which it's inserted. Once it unlocks something, the key disappears."
};
MagicItemsList["nature's mantle"] = {
},
MagicItemsList["necklace of adaptation"] = {
	name : "Necklace of Adaptation",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While wearing this necklace, I can breathe normally in any environment, and I have advantage on saving throws made against harmful gases and vapors (such as Cloudkill and Stinking Cloud effects, inhaled poisons, and the breath weapons of some dragons).",
	descriptionFull : "While wearing this necklace, you can breathe normally in any environment, and you have advantage on saving throws made against harmful gases and vapors (such as Cloudkill and Stinking Cloud effects, inhaled poisons, and the breath weapons of some dragons).",
	weight : 1,
	attunement : true,
	savetxt : { adv_vs : ["gases", "vapors"] }
};
MagicItemsList["necklace of fireballs"] = {
	name : "Necklace of Fireballs",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "This necklace has 1d6+3 beads hanging from it. As an action, I can detach a bead and throw it up to 60 ft away where it detonates as a 3rd-level Fireball (save DC 15). I can hurl multiple beads as part of the same action, increasing the level of the Fireball by 1 for each bead beyond the first.",
	descriptionFull : "This necklace has 1d6+3 beads hanging from it. You can use an action to detach a bead and throw it up to 60 feet away. When it reaches the end of its trajectory, the bead detonates as a 3rd-level Fireball spell (save DC 15).\n   You can hurl multiple beads, or even the whole necklace, as one action. When you do so, increase the level of the Fireball by 1 for each bead beyond the first.",
	weight : 1,
	usages : "1d6+3",
	recovery : "Never",
	spellcastingBonus : {
		name : "Fireball",
		spells : ["fireball"],
		selection : ["fireball"]
	},
	fixedDC : 15,
	spellChanges : {
		"fireball" : {
			description : "20-ft rad all crea 8d6+1d6/extra bead Fire dmg; save halves; unattended flammable objects ignite",
			components : "M\u2020",
			compMaterial : "Using the Necklace of Fireballs to cast Fireball requires removing and destorying one or more of the beads from it.",
			changes : "Using the Necklace of Fireballs to cast Fireball requires removing and destorying one or more of the beads from it. The damage is that of a Fireball cast a 3rd-level, +1 level per bead thrown as part of the same action beyond the first."
		}
	}
};
MagicItemsList["necklace of prayer beads"] = {
	name : "Necklace of Prayer Beads",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "This necklace has many beads, 1d4+2 are magical and can each be used to cast a spell once per dawn as a bonus action. The DM selects the spells from: Bless, Cure Wounds \u0026 Lesser Restoration, Greater Restoration, Branding Smite, Planar Ally, and Wind Walk. Multiple beads of the same type can be on one necklace.",
	descriptionLong : "This necklace has many beads, 1d4+2 are magical aquamarine, black pearl, or topaz beads and can each be used to cast a spell once per dawn as a bonus action. The DM selects the bead from: blessing bead (Bless), curing bead (Cure Wounds \u0026 Lesser Restoration), favor bead (Greater Restoration), smiting bead (Branding Smite), summons bead (Planar Ally), and wind walking bead (Wind Walk). Multiple beads of the same type can be on one necklace.",
	descriptionFull : "This necklace has 1d4+2 magic beads made from aquamarine, black pearl, or topaz. It also has many nonmagical beads made from stones such as amber, bloodstone, citrine, coral, jade, pearl, or quartz. If a magic bead is removed from the necklace, that bead loses its magic.\n   Six types of magic beads exist. The DM decides the type of each bead on the necklace or determines it randomly. A necklace can have more than one bead of the same type. To use one, you must be wearing the necklace. Each bead contains a spell that you can cast from it as a bonus action (using your spell save DC if a save is necessary). Once a magic bead's spell is cast, that bead can't be used again until the next dawn.\n\n" + toUni("d20\tBead of ...\tSpell") + "\n1-6\tBlessing\t\tBless\n7-12\tCuring\t\tCure Wounds (2nd level) or Lesser Restoration\n13-16\tFavor\t\tGreater Restoration\n17-18\tSmiting\t\tBranding Smite\n19\tSummons   \tPlanar Ally\n20\tWind walking\tWind Walk",
	attunement : true,
	weight : 1,
	usages : "1d4+2",
	recovery : "dawn",
	spellcastingAbility : "class",
	spellFirstColTitle : "Us",
	spellcastingBonus : {
		name : "Bead Spell",
		spells : ["bless", "cure wounds", "lesser restoration", "greater restoration", "branding smite", "planar ally", "wind walk"],
		times : 12
	},
	calcChanges : {
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if ((/necklace of prayer beads/i).test(spName)) {
					var toReturn = spellObj.time !== "1 bns";
					spellObj.time = "1 bns";
					spellObj.firstCol = "checkbox";
					if (spellKey === "cure wounds") {
						spellObj.name += " (2nd level)";
						spellObj.description = "1 living creature heals 2d8 + spellcasting ability modifier HP";
					}
					return toReturn;
				}
			},
			"Using the Necklace of Prayer Beads, the casting time is only a bonus action. Also, Cure Wounds is cast as a 2nd-level spell."
		]
	}
};
MagicItemsList["nine lives stealer"] = {
	name : "Nine Lives Stealer",
	source : [["DMG2024", "-"]],
	type : "weapon (any sword)",
	rarity : "very rare",
	magicItemTable : "?",
	attunement : true,
	description : "I have a +2 bonus to attack and damage rolls with this magic sword. It has 1d8+1 charges and if it inflicts a critical hit while it has charges left on a creature with fewer than 100 HP (and that is not a construct or undead), the target must make a DC 15 Con save or die. If it dies, the sword uses a charge.",
	descriptionFull : "You gain a +2 bonus to attack and damage rolls made with this magic weapon.\n   The sword has 1d8+1 charges. If you score a critical hit against a creature that has fewer than 100 hit points, it must succeed on a DC 15 Constitution saving throw or be slain instantly as the sword tears its life force from its body (a construct or an undead is immune). The sword loses 1 charge if the creature is slain. When the sword has no charges remaining, it loses this property.",
	usages : "1d8+1",
	recovery : "Never",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "sword"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*(9|nine))(?=.*(lives|life))(?=.*stealer).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'On crit to target <100 HP, DC 15 Con save or die';
				}
			},
			'If I include the words "Nine Lives Stealer" in a the name of a sword, it will be treated as the magic weapon Nine Lives Stealer. It has +2 to hit and damage. Also, as long as it has charges left, when it does a critical hit against a creature with fewer than 100 HP, that creature must make a DC 15 Constitution saving throw or die.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*(9|nine))(?=.*(lives|life))(?=.*stealer).*$/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 2;
				}
			}, ''
		]
	}
};
MagicItemsList["nolzur's marvelous pigments"] = {
	name : "Nolzur's Marvelous Pigments",
	nameAlt : "Marvelous Pigments",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "?",
	description : "This wooden box contains a brush and 1d4 pots of paint. Each pot contains enough paint to cover 1000 sq ft, which can turn into 10000 cu ft of inanimate objects or terrain features. Those become real upon completion of a painting. It takes 10 min to paint 100 sq ft. Nothing created can have a value over 25 gp.",
	descriptionLong : "This wooden box contains a brush and 1d4 pots of paint. Each pot contains enough paint to cover 1000 sq ft, which can turn into 10000 cu ft of nonmagical inanimate objects or terrain features. Those become real upon completion of a painting. It takes 10 min to paint 100 sq ft. Nothing created can have a value over 25 gp and objects appearing of greater value look authentic but don't hold up to closer inspection. I can use this to paint, for example, a door on a wall and then walk through it, or a pit on the floor and have my enemies fall into it. I can't use this to form energy that deals damage, like fire or lightning.",
	descriptionFull : "Typically found in 1d4 pots inside a fine wooden box with a brush (weighing 1 pound in total), these pigments allow you to create three-dimensional objects by painting them in two dimensions. The paint flows from the brush to form the desired object as you concentrate on its image.\n   Each pot of paint is sufficient to cover 1,000 square feet of a surface, which lets you create inanimate objects or terrain features\u2014such as a door, a pit, flowers, trees, cells, rooms, or weapons\u2014that are up to 10,000 cubic feet. It takes 10 minutes to cover 100 square feet.\n   When you complete the painting, the object or terrain feature depicted becomes a real, nonmagical object. Thus, painting a door on a wall creates an actual door that can be opened to whatever is beyond. Painting a pit on a floor creates a real pit, and its depth counts against the total area of objects you create.\n   Nothing created by the pigments can have a value greater than 25 gp. If you paint an object of greater value (such as a diamond or a pile of gold), the object looks authentic, but close inspection reveals it is made from paste, bone, or some other worthless material.\n   If you paint a form of energy such as fire or lightning, the energy appears but dissipates as soon as you complete the painting, doing no harm to anything.",
	weight : 1
};
MagicItemsList["oathbow"] = {
	name : "Oathbow",
	source : [["DMG2024", "-"]],
	type : "weapon (longbow)",
	rarity : "very rare",
	magicItemTable : "?",
	description : "When I attack with this longbow and say its command phrase, I make the target my sworn enemy if I don't have one already for 7 days or until it dies. Attacks with this bow vs. it get adv, +3d6 damage, ignore cover (not full), and suffer no disadv. from long range. While it lives, I have disadv. when I use other weapons.",
	descriptionLong : "When I use this weapon to make a ranged attack and say its command phrase \"Swift death to you who have wronged me.\", the target of that attack becomes my sworn enemy until it dies or until dawn seven days later. I can have only one such sworn enemy at a time and when it dies, I can choose a new one after the next dawn. My ranged attack rolls with this weapon against me sworn enemy have advantage, do +3d6 piercing damage, ignore all cover except full, and don't suffer disadvantage due to long range. While my sworn enemy lives, I have disadvantage on attack rolls with all other weapons.",
	descriptionFull : 'When you nock an arrow on this bow, it whispers in Elvish, "Swift defeat to my enemies." When you use this weapon to make a ranged attack, you can, as a command phrase, say, "Swift death to you who have wronged me." The target of your attack becomes your sworn enemy until it dies or until dawn seven days later. You can have only one such sworn enemy at a time. When your sworn enemy dies, you can choose a new one after the next dawn.\n   When you make a ranged attack roll with this weapon against your sworn enemy, you have advantage on the roll. In addition, your target gains no benefit from cover, other than total cover, and you suffer no disadvantage due to long range. If the attack hits, your sworn enemy takes an extra 3d6 piercing damage.\n   While your sworn enemy lives, you have disadvantage on attack rolls with all other weapons.',
	attunement : true,
	weight : 2,
	weaponsAdd : ["Oathbow"],
	weaponOptions : {
		baseWeapon : "longbow",
		regExpSearch : /oathbow/i,
		name : "Oathbow",
		source : [["SRD", 231], ["D", 183]],
		description : "Ammunition, heavy, two-handed; Vs. sworn enemy: adv, +3d6 damage, no cover/range penalties"
	}
};
MagicItemsList["oil of etherealness"] = { // contains contributions by AelarTheElfRogue
	name : "Oil of Etherealness",
	source : [["DMG2024", "-"]],
	type : "potion",
	rarity : "rare",
	magicItemTable : "?",
	description : "This cloudy gray oil can be used once to cover a Medium or smaller creature, along with the equipment it's wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected target then gains the effect of the Etherealness spell for 1 hour.",
	descriptionLong : "This cloudy gray oil can be used once cover a Medium or smaller creature, along with the equipment it's wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of the Etherealness spell for 1 hour. It step into the border regions of the Ethereal Plane, in the area where it overlaps with my current plane, remaining there until it uses an action to dismiss the spell. I can still see the plane I came from, but can move anywhere, up, down, and even through solid objects and creatures.",
	descriptionFull : "Beads of this cloudy gray oil form on the outside of its container and quickly evaporate. The oil can cover a Medium or smaller creature, along with the equipment it's wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of the Etherealness spell for 1 hour.",
	weight : 0.5
};
MagicItemsList["oil of sharpness"] = { // contributed by AelarTheElfRogue
	name : "Oil of Sharpness",
	source : [["DMG2024", "-"]],
	type : "potion",
	rarity : "very rare",
	magicItemTable : "?",
	description : "This clear, gelatinous oil sparkles with tiny, ultrathin silver shards. It can be used once to coat one slashing or piercing weapon or up to 5 pieces of slashing or piercing ammunition. Applying the oil takes 1 minute. For 1 hour, the coated item is magical and has a +3 bonus to attack and damage rolls.",
	descriptionFull : "This clear, gelatinous oil sparkles with tiny, ultrathin silver shards. The oil can coat one slashing or piercing weapon or up to 5 pieces of slashing or piercing ammunition. Applying the oil takes 1 minute. For 1 hour, the coated item is magical and has a +3 bonus to attack and damage rolls.",
	weight : 0.5
};
MagicItemsList["oil of slipperiness"] = { // contains contributions by AelarTheElfRogue
	name : "Oil of Slipperiness",
	source : [["DMG2024", "-"]],
	type : "potion",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "This sticky black unguent can be used once to cover a Medium or smaller creature and its equipment, granting it the effects of  Freedom of Movement for 8 hours. Applying it takes 10 minutes. Alternatively, it can be poured out as an action, duplicating the effects of the Grease spell in a 10-ft square for 8 hours.",
	descriptionLong : "This sticky black unguent can be used once to cover a Medium or smaller creature and its equipment, granting it the effects of Freedom of Movement for 8 hours. Applying it takes 10 minutes. The creature's movement is unaffected by difficult terrain, being underwater, and spells and other magical effects can't reduce it's speed or cause it to be paralyzed or restrained. Alternatively, it can be poured out as an action, duplicating the effects of the Grease spell in a 10-ft square for 8 hours. The area is difficult terrain and any in it when it appears, entering it, or ending their turn in it must make a DC 10 Dex save or fall prone.",
	descriptionFull : "This sticky black unguent is thick and heavy in the container, but it flows quickly when poured. The oil can cover a Medium or smaller creature, along with the equipment it's wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of a Freedom of Movement spell for 8 hours.\n   Alternatively, the oil can be poured on the ground as an action, where it covers a 10-foot square, duplicating the effect of the Grease spell in that area for 8 hours.",
	weight : 0.5
};
MagicItemsList["orb of direction"] = {
	name : "Orb of Direction",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "As an action while holding this orb, I can determine which way is north. This property functions only on the Material Plane.",
	descriptionFull : "While holding this orb, you can use an action to determine which way is north. This property functions only on the Material Plane.",
	weight : 3,
	action : [["action", ""]]
};
MagicItemsList["orb of time"] = {
	name : "Orb of Time",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "As an action while holding this orb, I can determine whether it is morning, afternoon, evening, or nighttime outside. This property functions only on the Material Plane.",
	descriptionFull : "While holding this orb, you can use an action to determine whether it is morning, afternoon, evening, or nighttime outside. This property functions only on the Material Plane.",
	weight : 3,
	action : [["action", ""]]
};
MagicItemsList["pearl of power"] = { // contains contributions by AelarTheElfRogue
	name : "Pearl of Power",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While this pearl is on my person, I can use an action to speak its command word and regain one expended spell slot. If the expended slot was of 4th level or higher, the new slot is 3rd level. Once I have used the pearl, it can't be used again until the next dawn.",
	descriptionFull : "While this pearl is on your person, you can use an action to speak its command word and regain one expended spell slot. If the expended slot was of 4th level or higher, the new slot is 3rd level. Once you have used the pearl, it can't be used again until the next dawn.",
	attunement : true,
	usages : 1,
	recovery : "dawn",
	action : [["action", ""]]
};
MagicItemsList["perfume of bewitching"] = {
	name : "Perfume of Bewitching",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "Once as an action, I can apply the perfume in this tiny vial to myself and its effect lasts 1 hour. For the duration, I have advantage on all Charisma checks directed at humanoids of challenge rating 1 or lower. Those subjected to the perfume's effect are not aware that they've been influenced by magic.",
	descriptionFull : "This tiny vial contains magic perfume, enough for one use. You can use an action to apply the perfume to yourself, and its effect lasts 1 hour. For the duration, you have advantage on all Charisma checks directed at humanoids of challenge rating 1 or lower. Those subjected to the perfume's effect are not aware that they've been influenced by magic."
};
MagicItemsList["periapt of health"] = { // contributed by AelarTheElfRogue
	name : "Periapt of Health",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "I am immune to contracting any disease while I wear this pendant. If I am already infected with a disease, the effects of the disease are suppressed while I wear the pendant.",
	descriptionFull : "You are immune to contracting any disease while you wear this pendant. If you are already infected with a disease, the effects of the disease are suppressed you while you wear the pendant.",
	weight : 1,
	savetxt : { immune : ["disease"] }
};
MagicItemsList["periapt of proof against poison"] = { // contributed by AelarTheElfRogue
	name : "Periapt of Proof Against Poison",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "This delicate silver chain has a brilliant-cut black gem pendant. While I wear it, poisons have no effect on me. I am immune to the poisoned condition and have immunity to poison damage.",
	descriptionFull : "This delicate silver chain has a brilliant-cut black gem pendant. While you wear it, poisons have no effect on you. You are immune to the poisoned condition and have immunity to poison damage.",
	weight : 1,
	savetxt : { immune : ["poison"] }
};
MagicItemsList["periapt of wound closure"] = { // contributed by AelarTheElfRogue
	name : "Periapt of Wound Closure",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While I wear this pendant, I stabilize whenever I am dying at the start of my turn. In addition, whenever I roll a Hit Die to regain hit points, I double the number of hit points it restores.",
	descriptionFull : "While you wear this pendant, you stabilize whenever you are dying at the start of your turn. In addition, whenever you roll a Hit Die to regain hit points, double the number of hit points it restores.",
	attunement : true,
	weight : 1
};
MagicItemsList["philter of love"] = {
	name : "Philter of Love",
	source : [["DMG2024", "-"]],
	type : "potion",
	rarity : "uncommon",
	magicItemTable : "?",
	notLegalAL : true,
	description : "Once as an action, I can drink this rose-hued liquid or administer it to another. The consumer is charmed for 1 hour by the first creature it sees within 10 minutes of drinking it. If that creature is of a species and gender the consumer is normally attracted to, it regards the creature as its true love while it is charmed.",
	descriptionFull : "The next time you see a creature within 10 minutes after drinking this philter, you become charmed by that creature for 1 hour. If the creature is of a species and gender you are normally attracted to, you regard it as your true love while you are charmed. This potion's rose-hued, effervescent liquid contains one easy-to-miss bubble shaped like a heart.",
	weight : 0.5
};
MagicItemsList["pipe of smoke monsters"] = {
	name : "Pipe of Smoke Monsters",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "As an action while smoking this pipe, I can exhale a puff of smoke that takes the form of a single creature, such as a dragon, a flumph, or a froghemoth. The form must be small enough to fit in a 1-ft cube and loses its shape after a few seconds, becoming an ordinary puff of smoke.",
	descriptionFull : "While smoking this pipe, you can use an action to exhale a puff of smoke that takes the form of a single creature, such as a dragon, a flumph, or a froghemoth. The form must be small enough to fit in a 1-foot cube and loses its shape after a few seconds, becoming an ordinary puff of smoke."
};
MagicItemsList["pipes of haunting"] = { // contains contributions by Soilentbrad
	name : "Pipes of Haunting",
	source : [["DMG2024", "-"]],
	type : "wondrous item (instrument)",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "These pipes have 3 charges and regain 1d3 expended charges daily at dawn. As an action, I can use 1 charge to play them and have each (or only hostile) creature in 30 ft that can hear them make a DC 15 Wis save or be frightened of me for 1 minute. A target can repeat the save at the end of each of their turns.",
	descriptionLong : "These pipes have 3 charges. As an action, I can expend 1 charge to create an eerie, spellbinding tune. Each creature within 30 ft of me that can hear the pipes must make a DC 15 Wisdom saving throw or become frightened of me for 1 minute. If I wish, all creatures in the area that aren't hostile toward me automatically succeed on their saving throw. An affected creature can repeat the save at the end of each of its turns, ending the effect on itself on a success. A creature that succeeds on its saving throw is immune to the effect of these pipes for 24 hours. The pipes regain 1d3 expended charges daily at dawn.",
	descriptionFull : "You must be proficient with wind instruments to use these pipes. They have 3 charges. You can use an action to play them and expend 1 charge to create an eerie, spellbinding tune. Each creature within 30 feet of you that hears you play must succeed on a DC 15 Wisdom saving throw or become frightened of you for 1 minute. If you wish, all creatures in the area that aren't hostile toward you automatically succeed on the saving throw. A creature that fails the saving throw can repeat it at the end of each of its turns, ending the effect on itself on a success. A creature that succeeds on its saving throw is immune to the effect of these pipes for 24 hours. The pipes regain 1d3 expended charges daily at dawn.",
	weight : 2,
	action : [["action", ""]],
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3",
	prerequisite : "Requires proficiency with wind instruments",
	prereqeval : function (v) {
		for (var i = 0; i < v.toolProfs.length; i++) {
			if ((/pipe|flute|horn|trumpet|horn|ocarina|sackbut|shawm|trombone|tuba|bombard|cornett|flageolet|^(?=.*(air|wind))(?=.*instrument).*$/i).test(v.toolProfs[i])) return true;
		}
	}
};
MagicItemsList["pipes of the sewers"] = { // contains contributions by Soilentbrad
	name : "Pipes of the Sewers",
	source : [["DMG2024", "-"]],
	type : "wondrous item (instrument)",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "The pipes have 3 charges, regain 1d3 at dawn, and cause rats to be indifferent toward me unless threatened. As an action, I can play them, then use a bonus action to summon rats in 0.5 miles to form 1 swarm per charge spend. While playing, rat swarms in 30 ft make a Wis check vs. my Cha check or obey my commands.",
	descriptionLong : "The pipes have 3 charges, regain 1d3 at dawn, and cause rats to be indifferent toward me unless threatened. As an action, I can play them, then use a bonus action to summon rats within 0.5 miles to come towards me and form 1 swarm of rats per charge I spend.  When a swarm of rats that isn't under another's control comes within 30 ft of me while I play the pipes, I can make a Charisma check contested by the swarm's Wisdom check. If the swarm fails, it obeys my commands for as long as they can hear the pipes at the start of its turn. If the swarm succeeds or it falls out of the sway, it can't be affected again for 24 hours.",
	descriptionFull : "You must be proficient with wind instruments to use these pipes. While you are attuned to the pipes, ordinary rats and giant rats are indifferent toward you and will not attack you unless you threaten or harm them.\n   The pipes have 3 charges. If you play the pipes as an action, you can use a bonus action to expend 1 to 3 charges, calling forth one swarm of rats with each expended charge, provided that enough rats are within half a mile of you to be called in this fashion (as determined by the DM). If there aren't enough rats to form a swarm, the charge is wasted. Called swarms move toward the music by the shortest available route but aren't under your control otherwise. The pipes regain 1d3 expended charges daily at dawn.\n   Whenever a swarm of rats that isn't under another creature's control comes within 30 feet of you while you are playing the pipes, you can make a Charisma check contested by the swarm's Wisdom check. If you lose the contest, the swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours. If you win the contest, the swarm is swayed by the pipes' music and becomes friendly to you and your companions for as long as you continue to play the pipes each round as an action. A friendly swarm obeys your commands. If you issue no commands to a friendly swarm, it defends itself but otherwise takes no actions. If a friendly swarm starts its turn and can't hear the pipes' music, your control over that swarm ends, and the swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours.",
	attunement : true,
	weight : 2,
	action : [["action", ""]],
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3",
	prerequisite: "Requires proficiency with wind instruments",
	prereqeval: function (v) {
		for (var i = 0; i < v.toolProfs.length; i++) {
			if ((/pipe|flute|horn|trumpet|horn|ocarina|sackbut|shawm|trombone|tuba|bombard|cornett|flageolet|^(?=.*(air|wind))(?=.*instrument).*$/i).test(v.toolProfs[i])) return true;
		}
	}
};
MagicItemsList["plate armor of etherealness"] = {
	name : "Plate Armor of Etherealness",
	source : [["DMG2024", "-"]],
	type : "armor (plate)",
	rarity : "legendary",
	magicItemTable : "?",
	description : "As an action while I'm wearing this plate armor, I can speak its command word to cast Etherealness on myself. This effect lasts for 10 minutes or until I remove the armor or use an action to speak the command word again. This property of the armor can't be used again until the next dawn.",
	descriptionFull : "While you're wearing this armor, you can speak its command word as an action to gain the effect of the Etherealness spell, which lasts for 10 minutes or until you remove the armor or use an action to speak the command word again. This property of the armor can't be used again until the next dawn.",
	attunement : true,
	weight : 65,
	usages : 1,
	recovery : "dawn",
	action : [["action", " (start/stop)"]],
	armorAdd : "Plate Armor of Etherealness",
	armorOptions : {
		regExpSearch : /^(?=.*plate)(?=.*etherealness).*$/i,
		name : "Plate Armor of Etherealness",
		source : [["SRD", 233], ["D", 185]],
		type : "heavy",
		ac : 18,
		stealthdis : true,
		weight : 65,
		strReq : 15
	},
	spellcastingBonus : {
		name : "once per dawn",
		spells : ["etherealness"],
		selection : ["etherealness"],
		firstCol : "oncelr"
	},
	spellChanges : {
		"etherealness" : {
			components : "V,M\u0192",
			duration : "10 min",
			description : "I go to Ethereal Plane; move there freely, but able to perceive 60 ft into the normal plane",
			changes : "Using the Plate Armor of Etherealness, I can cast Etherealness, but only on myself and it lasts only 10 minutes."
		}
	}
};
MagicItemsList["pole of angling"] = {
	name : "Pole of Angling",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "While holding this 10 ft pole, I can speak a command word and transform it into a fishing pole with a hook, a line, and a reel. Speaking the command word again changes the fishing pole back into a normal 10 ft pole.",
	descriptionFull : "While holding this 10-foot pole, you can speak a command word and transform it into a fishing pole with a hook, a line, and a reel. Speaking the command word again changes the fishing pole back into a normal 10-foot pole.",
	weight : 7
};
MagicItemsList["pole of collapsing"] = {
	name : "Pole of Collapsing",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "As an action while holding this 10 ft pole, I can speak a command word to have it collapse into a 1-ft-long rod. The pole's weight doesn't change. As an action while holding the rod, I can speak a different command word to have it elongate back to a pole, but only as long as the surrounding space allows.",
	descriptionFull : "While holding this 10-foot pole, you can use an action to speak a command word and cause it to collapse into a 1-foot-long rod, for ease of storage. The pole's weight doesn't change. You can use an action to speak a different command word and cause the rod to revert to a pole; however, the rod will elongate only as far as the surrounding space allows.",
	weight : 7,
	action : [["action", ""]]
};
MagicItemsList["portable hole"] = {
	name : "Portable Hole",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "As an action, I can unfold this black cloth, 6 ft in diameter, and place it on a solid surface, whereupon it creates a 10-ft deep extradimensional hole. It can't be used to create passages. The space is always the same, so I can store things and creatures in there. Removing it and folding it back takes an action.",
	descriptionLong : "As an action, I can unfold this circular black cloth, 6 ft in diameter, and place it on a solid surface, whereupon it creates a 10-ft deep extradimensional hole. It can't be used to create passages. Removing it and folding it back takes an action. The space created is always the same, so I can store things and creatures in there. The hole always weighs next to nothing. Creatures inside the folded up hole can breathe for 10 min and can escape as an action with a DC 10 Strength check, appearing next to me if they do. Placing the hole in another extradimensional space instantly destroys both and opens a gate to the Astral Plane.",
	descriptionFull : "This fine black cloth, soft as silk, is folded up to the dimensions of a handkerchief. It unfolds into a circular sheet 6 feet in diameter.\n   You can use an action to unfold a portable hole and place it on or against a solid surface, whereupon the portable hole creates an extradimensional hole 10 feet deep. The cylindrical space within the hole exists on a different plane, so it can't be used to create open passages. Any creature inside an open portable hole can exit the hole by climbing out of it.\n   You can use an action to close a portable hole by taking hold of the edges of the cloth and folding it up. Folding the cloth closes the hole, and any creatures or objects within remain in the extradimensional space. No matter what's in it, the hole weighs next to nothing.\n   If the hole is folded up, a creature within the hole's extradimensional space can use an action to make a DC 10 Strength check. On a successful check, the creature forces its way out and appears within 5 feet of the portable hole or the creature carrying it. A breathing creature within a closed portable hole can survive for up to 10 minutes, after which time it begins to suffocate.\n   Placing a portable hole inside an extradimensional space created by a bag of holding, Heward's handy haversack, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.",
	action : [["action", " (place/fold)"]]
};
MagicItemsList["potion of animal friendship"] = {
	name : "Potion of Animal Friendship",
	source : [["DMG2024", "-"]],
	type : "potion",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "Once as an action, I can drink this potion or administer it to another to be able to cast the Animal Friendship spell for 1 hour at will, charming beasts with Int < 4 for 1 hour if it fails a DC 13 Wis save. Agitating this muddy liquid brings little bits into view: a fish scale, a hummingbird tongue, a cat claw, or a squirrel hair.",
	descriptionFull : "When you drink this potion, you can cast the Animal Friendship spell (save DC 13) for 1 hour at will. Agitating this muddy liquid brings little bits into view: a fish scale, a hummingbird tongue, a cat claw, or a squirrel hair.",
	weight : 0.5,
	extraTooltip : "AL: can always be bought for 100 gp"
};
MagicItemsList["potion of clairvoyance"] = {
	name : "Potion of Clairvoyance",
	source : [["DMG2024", "-"]],
	type : "potion",
	rarity : "rare",
	magicItemTable : "?",
	description : "Once as an action, I can drink this potion or administer it to another to gain the effect of the Clairvoyance spell. This creates an invisible sensor within 1 mile, in a familiar or obvious location, that the consumer can see or hear through. An eyeball bobs in this yellowish liquid but vanishes when the potion is opened.",
	descriptionFull : "When you drink this potion, you gain the effect of the Clairvoyance spell. An eyeball bobs in this yellowish liquid but vanishes when the potion is opened.",
	weight : 0.5
};
MagicItemsList["potion of climbing"] = {
	name : "Potion of Climbing",
	source : [["DMG2024", "-"]],
	type : "potion",
	rarity : "common",
	magicItemTable : "?",
	description : "Once as an action, I can drink this potion or administer it to another to gain, for 1 hour, a climbing speed equal to the consumer's walking speed and adv. on Str (Athletics) checks to climb. The potion is separated into brown, silver, and gray layers resembling bands of stone. Shaking it fails to mix the colors.",
	descriptionFull : "When you drink this potion, you gain a climbing speed equal to your walking speed for 1 hour. During this time, you have advantage on Strength (Athletics) checks you make to climb. The potion is separated into brown, silver, and gray layers resembling bands of stone. Shaking the bottle fails to mix the colors.",
	weight : 0.5,
	extraTooltip : "AL: can always be bought for 75 gp"
};
MagicItemsList["potion of comprehension"] = {
},
MagicItemsList["potion of diminution"] = {
	name : "Potion of Diminution",
	source : [["DMG2024", "-"]],
	type : "potion",
	rarity : "rare",
	magicItemTable : "?",
	description : "Once as an action, I can drink this potion or administer it to another to be reduced as per the Enlarge/Reduce spell for 1d4 hours (no concentration required). The red in the potion's liquid continuously contracts to a tiny bead and then expands to color the clear liquid around it.",
	descriptionLong : "Once as an action, I can drink this potion or administer it to another to be reduced as per the Enlarge/Reduce spell for 1d4 hours (no concentration required). This causes the consumer to decrease one size category as it halves in size in all dimensions and its weight is reduced to one-eight of normal. Its weapon attacks deal -1d4 damage (min 1) and it has disadvantage on Strength checks and saving throws. The red in the potion's liquid continuously contracts to a tiny bead and then expands to color the clear liquid around it. Shaking the bottle fails to interrupt this process.",
	descriptionFull : "When you drink this potion, you gain the \"reduce\" effect of the Enlarge/Reduce spell for 1d4 hours (no concentration required). The red in the potion's liquid continuously contracts to a tiny bead and then expands to color the clear liquid around it. Shaking the bottle fails to interrupt this process.",
	weight : 0.5
};
MagicItemsList["potion of fire breath"] = {
	name : "Potion of Fire Breath",
	source : [["DMG2024", "-"]],
	type : "potion",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "Once as an action, I can drink this potion or administer it to another to, for 1 hour, use a bonus action to do 4d6 fire damage at a target within 30 ft, Dex save DC 13 halves. This can be done 3 times. This potion's orange liquid flickers, and smoke fills the top of the container and wafts out whenever it is opened.",
	descriptionFull : "After drinking this potion, you can use a bonus action to exhale fire at a target within 30 feet of you. The target must make a DC 13 Dexterity saving throw, taking 4d6 fire damage on a failed save, or half as much damage on a successful one. The effect ends after you exhale the fire three times or when 1 hour has passed. This potion's orange liquid flickers, and smoke fills the top of the container and wafts out whenever it is opened.",
	weight : 0.5
};
MagicItemsList["potion of flying"] = {
	name : "Potion of Flying",
	source : [["DMG2024", "-"]],
	type : "potion",
	rarity : "very rare",
	magicItemTable : "?",
	description : "Once as an action, I can drink this potion or administer it to another to gain a flying speed equal to the consumer's walking speed for 1 hour and be able to hover. When the potion wears off, the consumer falls. This potion's clear liquid floats at the top of its container and has cloudy white impurities drifting in it.",
	descriptionFull : "When you drink this potion, you gain a flying speed equal to your walking speed for 1 hour and can hover. If you're in the air when the potion wears off, you fall unless you have some other means of staying aloft. This potion's clear liquid floats at the top of its container and has cloudy white impurities drifting in it.",
	weight : 0.5
};
MagicItemsList["potion of gaseous form"] = {
	name : "Potion of Gaseous Form",
	source : [["DMG2024", "-"]],
	type : "potion",
	rarity : "rare",
	magicItemTable : "?",
	description : "Once as an action, I can drink this potion or administer it to another to gain the effect of the Gaseous Form spell for 1 hour (no concentration required), until the consumer drops to 0 HP, or ends the effect as a bonus action. This potion's container seems to hold fog that moves and pours like water.",
	descriptionLong : "Once as an action, I can drink this potion or administer it to another to gain the effect of the Gaseous Form spell for 1 hour (no concentration required), until the consumer drops to 0 HP, or ends the effect as a bonus action. The consumer, along with everything it's wearing and carrying, transforms into a misty cloud. In this form, it can only move by flying at 10 ft speed, can hover, can't fall, has resistance to nonmagical damage, adv. on Str, Dex, and Con saves, can pass through mere cracks, but can't talk, manipulate items, cast spells, or attack. This container seems to hold fog that moves and pours like water.",
	descriptionFull : "When you drink this potion, you gain the effect of the Gaseous Form spell for 1 hour (no concentration required) or until you end the effect as a bonus action. This potion's container seems to hold fog that moves and pours like water.",
	weight : 0.5
};
MagicItemsList["potion of giant strength"] = {
	name : "Potion of Giant Strength",
	source : [["DMG2024", "-"]],
	type : "potion",
	description : "Once as an action, I can drink this potion or administer it to another to change the consumer's Strength score for 1 hour. The number of this score depends on the type of giant from which a sliver of fingernail is floating in this potions' transparent liquid.",
	descriptionFull : "When you drink this potion, your Strength score changes for 1 hour. The type of giant determines the score (see the table below). The potion has no effect on you if your Strength is equal to or greater than that score.\n   This potion's transparent liquid has floating in it a sliver of fingernail from a giant of the appropriate type. The potion of frost giant strength and the potion of stone giant strength have the same effect.\n\n" + toUni("Type\t\tStr\tRarity") + "\nHill giant\t\t21\tUncommon\nStone/frost giant\t23\tRare\nFire giant   \t25\tRare\nCloud giant\t27\tVery rare\nStorm giant\t29\tLegendary",
	weight : 0.5,
	allowDuplicates : true,
	choices : ["Hill (Str 21, uncommon)", "Frost (Str 23, rare)", "Stone (Str 23, rare)", "Fire (Str 25, rare)", "Cloud (Str 27, very rare)", "Storm (Str 29, legendary)"],
	"hill (str 21, uncommon)" : {
		name : "Potion of Hill Giant Strength",
		sortname : "Potion of Giant Strength, Hill (Str 21)",
		rarity : "uncommon",
		magicItemTable : "?",
		description : "Once as an action, I can drink this potion or administer it to another to change the consumer's Strength score to 21 for 1 hour. This potion has no effect if the consumer's Strength score is already equal or higher. This potion's transparent liquid has floating in it a sliver of fingernail from a hill giant.",
		descriptionFull : "When you drink this potion, your Strength score changes to 21 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.\n   This potion's transparent liquid has floating in it a sliver of fingernail from a hill giant."
	},
	"frost (str 23, rare)" : {
		name : "Potion of Frost Giant Strength",
		sortname : "Potion of Giant Strength, Frost (Str 23)",
		rarity : "rare",
		magicItemTable : "?",
		description : "Once as an action, I can drink this potion or administer it to another to change the consumer's Strength score to 23 for 1 hour. This potion has no effect if the consumer's Strength score is already equal or higher. This potion's transparent liquid has floating in it a sliver of fingernail from a frost giant.",
		descriptionFull : "When you drink this potion, your Strength score changes to 23 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.\n   This potion's transparent liquid has floating in it a sliver of fingernail from a frost giant."
	},
	"stone (str 23, rare)" : {
		name : "Potion of Stone Giant Strength",
		sortname : "Potion of Giant Strength, Stone (Str 23)",
		rarity : "rare",
		magicItemTable : "?",
		description : "Once as an action, I can drink this potion or administer it to another to change the consumer's Strength score to 23 for 1 hour. This potion has no effect if the consumer's Strength score is already equal or higher. This potion's transparent liquid has floating in it a sliver of fingernail from a stone giant.",
		descriptionFull : "When you drink this potion, your Strength score changes to 23 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.\n   This potion's transparent liquid has floating in it a sliver of fingernail from a stone giant."
	},
	"fire (str 25, rare)" : {
		name : "Potion of Fire Giant Strength",
		sortname : "Potion of Giant Strength, Fire (Str 25)",
		rarity : "rare",
		magicItemTable : "?",
		description : "Once as an action, I can drink this potion or administer it to another to change the consumer's Strength score to 25 for 1 hour. This potion has no effect if the consumer's Strength score is already equal or higher. This potion's transparent liquid has floating in it a sliver of fingernail from a fire giant.",
		descriptionFull : "When you drink this potion, your Strength score changes to 25 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.\n   This potion's transparent liquid has floating in it a sliver of fingernail from a fire giant."
	},
	"cloud (str 27, very rare)" : {
		name : "Potion of Cloud Giant Strength",
		sortname : "Potion of Giant Strength, Cloud (Str 27)",
		rarity : "very rare",
		magicItemTable : "?",
		description : "Once as an action, I can drink this potion or administer it to another to change the consumer's Strength score to 27 for 1 hour. This potion has no effect if the consumer's Strength score is already equal or higher. This potion's transparent liquid has floating in it a sliver of fingernail from a cloud giant.",
		descriptionFull : "When you drink this potion, your Strength score changes to 27 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.\n   This potion's transparent liquid has floating in it a sliver of fingernail from a cloud giant."
	},
	"storm (str 29, legendary)" : {
		name : "Potion of Storm Giant Strength",
		sortname : "Potion of Giant Strength, Storm (Str 29)",
		rarity : "legendary",
		magicItemTable : "?",
		description : "Once as an action, I can drink this potion or administer it to another to change the consumer's Strength score to 29 for 1 hour. This potion has no effect if the consumer's Strength score is already equal or higher. This potion's transparent liquid has floating in it a sliver of fingernail from a storm giant.",
		descriptionFull : "When you drink this potion, your Strength score changes to 29 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.\n   This potion's transparent liquid has floating in it a sliver of fingernail from a storm giant."
	}
};
MagicItemsList["potion of greater invisibility"] = {
},
MagicItemsList["potion of growth"] = {
	name : "Potion of Growth",
	source : [["DMG2024", "-"]],
	type : "potion",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "Once as an action, I can drink this potion or administer it to another to be enlarged as per the Enlarge/Reduce spell for 1d4 hours (no concentration required). The red in the potion's liquid continuously expands from a tiny bead to color the clear liquid around it and then contracts.",
	descriptionLong : "Once as an action, I can drink this potion or administer it to another to be enlarged as per the Enlarge/Reduce spell for 1d4 hours (no concentration required). This causes the consumer to grow one size category as it doubles in size in all dimensions and its weight is multiplied by eight. This growth stops early if the encompassing space is fully filled. Its weapon attacks deal +1d4 damage and it has advantage on Strength checks and saving throws. The red in the potion's liquid continuously expands from a tiny bead to color the clear liquid around it and then contracts. Shaking the bottle fails to interrupt this process.",
	descriptionFull : "When you drink this potion, you gain the \"enlarge\" effect of the Enlarge/Reduce spell for 1d4 hours (no concentration required). The red in the potion's liquid continuously expands from a tiny bead to color the clear liquid around it and then contracts. Shaking the bottle fails to interrupt this process.",
	weight : 0.5
};
MagicItemsList["potion of healing"] = {
	name : "Potion of Healing",
	source : [["DMG2024", "-"]],
	type : "potion",
	description : "Once as an action, I can drink this potion or administer it to another to heal a number of hit points depending on the type of potion. This potion's red liquid glimmers when agitated.",
	descriptionFull : "You regain hit points when you drink this potion. The number of hit points depends on the potion's rarity, as shown in the Potions of Healing table. Whatever its potency, the potion's red liquid glimmers when agitated.",
	weight : 0.5,
	allowDuplicates : true,
	choices : ["Healing (2d4+2, common)", "Greater Healing (4d4+4, uncommon)", "Superior Healing (8d4+8, rare)", "Supreme Healing (10d4+20, very rare)"],
	"healing (2d4+2, common)" : {
		name : "Potion of Healing  ",
		rarity : "common",
		magicItemTable : "?",
		description : "Once as an action, I can drink this potion or administer it to another to regain 2d4+2 hit points. This potion's red liquid glimmers when agitated.",
		descriptionFull : "You regain 2d4+2 hit points when you drink this potion. The potion's red liquid glimmers when agitated.",
		extraTooltip : "Can be bought for 50 gp (also in AL)"
	},
	"greater healing (4d4+4, uncommon)" : {
		name : "Potion of Greater Healing",
		sortname : "Potion of Healing, Greater",
		rarity : "uncommon",
		magicItemTable : "?",
		description : "Once as an action, I can drink this potion or administer it to another to regain 4d4+4 hit points. This potion's red liquid glimmers when agitated.",
		descriptionFull : "You regain 4d4+4 hit points when you drink this potion. The potion's red liquid glimmers when agitated.",
		extraTooltip : "AL: can always be bought for 100 gp"
	},
	"superior healing (8d4+8, rare)" : {
		name : "Potion of Superior Healing",
		sortname : "Potion of Healing, Superior",
		rarity : "rare",
		magicItemTable : "?",
		description : "Once as an action, I can drink this potion or administer it to another to regain 8d4+8 hit points. This potion's red liquid glimmers when agitated.",
		descriptionFull : "You regain 8d4+8 hit points when you drink this potion. The potion's red liquid glimmers when agitated.",
		extraTooltip : "AL: can always be bought for 500 gp"
	},
	"supreme healing (10d4+20, very rare)" : {
		name : "Potion of Supreme Healing",
		sortname : "Potion of Healing, Supreme",
		rarity : "very rare",
		magicItemTable : ["D", "?"],
		description : "Once as an action, I can drink this potion or administer it to another to regain 10d4+20 hit points. This potion's red liquid glimmers when agitated.",
		descriptionFull : "You regain 10d4+20 hit points when you drink this potion. The potion's red liquid glimmers when agitated.",
		extraTooltip : "AL: can always be bought for 5000 gp"
	}
};
MagicItemsList["potion of heroism"] = {
	name : "Potion of Heroism",
	source : [["DMG2024", "-"]],
	type : "potion",
	rarity : "rare",
	magicItemTable : "?",
	description : "Once as an action, I can drink this potion or administer it to another to gain 10 temporary hit points for 1 hour. For the same duration, the consumer is under the effect of the Bless spell (no concentration required), which adds +1d4 on all attack rolls and saving throws. This blue potion bubbles and steams as if boiling.",
	descriptionFull : "For 1 hour after drinking it, you gain 10 temporary hit points that last for 1 hour. For the same duration, you are under the effect of the Bless spell (no concentration required). This blue potion bubbles and steams as if boiling.",
	weight : 0.5
};
MagicItemsList["potion of invisibility"] = {
	name : "Potion of Invisibility",
	source : [["DMG2024", "-"]],
	type : "potion",
	rarity : "very rare",
	magicItemTable : "?",
	description : "Once as an action, I can drink this potion or administer it to another to become invisible for 1 hour. Anything the consumer wears or carries is invisible along with it. The effect ends early the consumer attacks or casts a spell. This potion's container looks empty but feels as though it holds liquid.",
	descriptionFull : "This potion's container looks empty but feels as though it holds liquid. When you drink it, you become invisible for 1 hour. Anything you wear or carry is invisible with you. The effect ends early if you attack or cast a spell.",
	weight : 0.5,
	extraTooltip : "AL: can always be bought for 5000 gp"
};
MagicItemsList["potion of invulnerability"] = {
	name : "Potion of Invulnerability",
	source : [["DMG2024", "-"]],
	type : "potion",
	rarity : "rare",
	magicItemTable : "?",
	description : "Once as an action, I can drink this potion or administer it to another to have resistance to all damage for 1 minute. The potion's syrupy liquid looks like liquefied iron.",
	descriptionFull : "For 1 minute after you drink this potion, you have resistance to all damage. The potion's syrupy liquid looks like liquefied iron.",
	weight : 0.5
};
MagicItemsList["potion of longevity"] = {
	name : "Potion of Longevity",
	source : [["DMG2024", "-"]],
	type : "potion",
	rarity : "very rare",
	magicItemTable : "?",
	description : "Once as an action, I can drink this potion or administer it to another to reduce the consumer's physical age is by 1d6+6 years, to a minimum of 13 years. Subsequent consumptions of this type of potion have a 10% cumulative chance to instead age the consumer by 1d6+6 years.",
	descriptionLong : "Once as an action, I can drink this potion or administer it to another to reduce the consumer's physical age is by 1d6+6 years, to a minimum of 13 years. Subsequent consumptions of this type of potion have a 10% cumulative chance to instead age the consumer by 1d6+6 years. Suspended in this amber liquid are a scorpion's tail, an adder's fang, a dead spider, and a tiny heart that, against all reason, is still beating. These ingredients vanish when the potion is opened.",
	descriptionFull : "When you drink this potion, your physical age is reduced by 1d6+6 years, to a minimum of 13 years. Each time you subsequently drink a potion of longevity, there is 10 percent cumulative chance that you instead age by 1d6+6 years. Suspended in this amber liquid are a scorpion's tail, an adder's fang, a dead spider, and a tiny heart that, against all reason, is still beating. These ingredients vanish when the potion is opened.",
	weight : 0.5
};
MagicItemsList["potion of mind reading"] = {
	name : "Potion of Mind Reading",
	source : [["DMG2024", "-"]],
	type : "potion",
	rarity : "rare",
	magicItemTable : "?",
	description : "Once as an action, I can drink this potion or administer it to another to gain the effect of the Detect Thoughts spell (save DC 13) for 1 minute. The potion's dense, purple liquid has an ovoid cloud of pink floating in it.",
	descriptionFull : "When you drink this potion, you gain the effect of the Detect Thoughts spell (save DC 13). The potion's dense, purple liquid has an ovoid cloud of pink floating in it.",
	weight : 0.5
};
MagicItemsList["potion of poison"] = {
	name : "Potion of Poison",
	source : [["DMG2024", "-"]],
	type : "potion",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "The consumer of this potion takes 3d6 poison damage and must make a DC 13 Con save or be poisoned. While poisoned this way, it takes 3d6 poison damage at the start of each of its turns and can repeat the save at the end of each of its turns to lower subsequent damage by 1d6. The poison ends when it reaches 0.",
	descriptionLong : "This concoction looks, smells, and tastes like a potion of healing or other beneficial potion. However, whomever consumes it takes 3d6 poison damage and must make a DC 13 Con save or be poisoned. While poisoned this way, the consumer takes 3d6 poison damage at the start of each of its turns. At the end of each of the consumer's turns, it can repeat the saving throw. On a successful save, the poison damage on subsequent turns decreases by 1d6. The poison ends when the damage decreases to 0.",
	descriptionFull : "This concoction looks, smells, and tastes like a potion of healing or other beneficial potion. However, it is actually poison masked by illusion magic. An Identify spell reveals its true nature.\n   If you drink it, you take 3d6 poison damage, and you must succeed on a DC 13 Constitution saving throw or be poisoned. At the start of each of your turns while you are poisoned in this way, you take 3d6 poison damage. At the end of each of your turns, you can repeat the saving throw. On a successful save, the poison damage you take on your subsequent turns decreases by 1d6. The poison ends when the damage decreases to 0.",
	weight : 0.5
};
MagicItemsList["potion of pugilism"] = {
},
MagicItemsList["potion of resistance"] = {
	name : "Potion of Resistance",
	source : [["DMG2024", "-"]],
	type : "potion",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "Once as an action, I can drink this potion or administer it to another to gain resistance to one damage type for 1 hour.",
	descriptionFull : "When you drink this potion, you gain resistance to one type of damage for 1 hour. The DM chooses the type or determines it randomly from the options below.\n\n" + toUni("d10\tType\t\td10\tType") + "\n 1\tAcid\t\t 6\tNecrotic\n 2\tCold\t\t 7\tPoison\n 3\tFire\t\t 8\tPsychic\n 4\tForce\t\t 9\tRadiant\n 5\tLightning   \t 10\tThunder",
	weight : 0.5,
	allowDuplicates : true,
	choices : ["Acid", "Cold", "Fire", "Force", "Lightning", "Necrotic", "Poison", "Psychic", "Radiant", "Thunder"],
	choicesNotInMenu : true,
	"acid" : {
		name : "Potion of Acid Resistance",
		description : "Once as an action, I can drink this potion or administer it to another to gain resistance to acid damage for 1 hour."
	},
	"cold" : {
		name : "Potion of Cold Resistance",
		description : "Once as an action, I can drink this potion or administer it to another to gain resistance to cold damage for 1 hour."
	},
	"fire" : {
		name : "Potion of Fire Resistance",
		description : "Once as an action, I can drink this potion or administer it to another to gain resistance to fire damage for 1 hour."
	},
	"force" : {
		name : "Potion of Force Resistance",
		description : "Once as an action, I can drink this potion or administer it to another to gain resistance to force damage for 1 hour."
	},
	"lightning" : {
		name : "Potion of Lightning Resistance",
		description : "Once as an action, I can drink this potion or administer it to another to gain resistance to lightning damage for 1 hour."
	},
	"necrotic" : {
		name : "Potion of Necrotic Resistance",
		description : "Once as an action, I can drink this potion or administer it to another to gain resistance to necrotic damage for 1 hour."
	},
	"poison" : {
		name : "Potion of Poison Resistance",
		description : "Once as an action, I can drink this potion or administer it to another to gain resistance to poison damage for 1 hour."
	},
	"psychic" : {
		name : "Potion of Psychic Resistance",
		description : "Once as an action, I can drink this potion or administer it to another to gain resistance to psychic damage for 1 hour."
	},
	"radiant" : {
		name : "Potion of Radiant Resistance",
		description : "Once as an action, I can drink this potion or administer it to another to gain resistance to radiant damage for 1 hour."
	},
	"thunder" : {
		name : "Potion of Thunder Resistance",
		description : "Once as an action, I can drink this potion or administer it to another to gain resistance to thunder damage for 1 hour."
	}
};
MagicItemsList["potion of speed"] = {
	name : "Potion of Speed",
	source : [["DMG2024", "-"]],
	type : "potion",
	rarity : "very rare",
	magicItemTable : "?",
	description : "Once as an action, I can drink this potion or administer it to another to gain the effects of Haste for 1 minute (no concentration required). The potion's yellow fluid is streaked with black and swirls on its own.",
	descriptionLong : "Once as an action, I can drink this potion or administer it to another to gain the effects of Haste for 1 minute (no concentration required). The potion's yellow fluid is streaked with black and swirls on its own. Haste doubles its speed, gives a +2 bonus to AC, gives advantage on Dex saves, and gives an additional action on each turn. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action. When the spell ends, the target can't move or take actions until after its next turn, as a wave of lethargy sweeps over it.",
	descriptionFull : "When you drink this potion, you gain the effect of the Haste spell for 1 minute (no concentration required). The potion's yellow fluid is streaked with black and swirls on its own.",
	weight : 0.5
};
MagicItemsList["potion of vitality"] = {
	name : "Potion of Vitality",
	source : [["DMG2024", "-"]],
	type : "potion",
	rarity : "very rare",
	magicItemTable : "?",
	description : "Once as an action, I can drink this potion or administer it to another to remove any exhaustion, disease, and poison affecting the consumer. For the next 24 hours, the consumer regains the maximum number of HP for any HD used. The potion's crimson liquid regularly pulses with dull light, calling to mind a heartbeat.",
	descriptionFull : "When you drink this potion, it removes any exhaustion you are suffering and cures any disease or poison affecting you. For the next 24 hours, you regain the maximum number of hit points for any Hit Die you spend. The potion's crimson liquid regularly pulses with dull light, calling to mind a heartbeat.",
	weight : 0.5
};
MagicItemsList["potion of water breathing"] = {
	name : "Potion of Water Breathing",
	source : [["DMG2024", "-"]],
	type : "potion",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "Once as an action, I can drink this potion or administer it to another to be able to breathe underwater for 1 hour after drinking this potion. Its cloudy green fluid smells of the sea and has a jellyfish-like bubble floating in it.",
	descriptionFull : "You can breathe underwater for 1 hour after drinking this potion. Its cloudy green fluid smells of the sea and has a jellyfish-like bubble floating in it.",
	weight : 0.5,
	extraTooltip : "AL: can always be bought for 100 gp"
};
MagicItemsList["pot of awakening"] = {
	name : "Pot of Awakening",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "If I plant an ordinary shrub in this 10 lb clay pot and let it grow for 30 days, the shrub magically transforms into an awakened shrub at the end of that time. When the shrub awakens, its roots break the pot, destroying it. The awakened shrub is friendly toward me. Absent commands from me, it does nothing.",
	descriptionFull : "If you plant an ordinary shrub in this 10-pound clay pot and let it grow for 30 days, the shrub magically transforms into an awakened shrub at the end of that time. When the shrub awakens, its roots break the pot, destroying it.\n   The awakened shrub is friendly toward you. Absent commands from you, it does nothing.",
	weight : 10
};
MagicItemsList["prosthetic limb"] = { // no attument as per errata
	name : "Prosthetic Limb",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "This artificial limb replaces a lost limb, like a hand, an arm, a foot, a leg, or a similar body part. While the prosthetic is attached, it functions identically to the part it replaces. As an action, I can detach or reattach it. It can't be removed against my will. It detaches if I die.",
	descriptionFull : "This item replaces a lost limb\u2014a hand, an arm, a foot, a leg, or a similar body part. While the prosthetic is attached, it functions identically to the part it replaces. You can detach or reattach it as an action, and it can't be removed against your will. It detaches if you die.",
	action : [["action", " (attach/detach)"]]
};
MagicItemsList["quaal's feather token"] = {
	name : "Quaal's Feather Token",
	nameAlt : "Feather Token",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	descriptionFull : "This tiny object looks like a feather. Different types of feather tokens exist, each with a different single-use effect. The DM chooses the kind of token or determines it randomly.\n\n" + toUni("d100\tToken\td100\tToken") +
	"\n01-20\tAnchor\t51-65\tSwan boat" +
	"\n21-35\tBird   \t66-90\tTree" +
	"\n36-50\tFan   \t91-00\tWhip",
	allowDuplicates : true,
	choices : ["Anchor", "Bird", "Fan", "Swan Boat", "Tree", "Whip"],
	"anchor" : {
		description : "This tiny object looks like a feather. As an action, I can touch the token to a boat or ship. For the next 24 hours, the vessel can't be moved by any means. Touching the token to the vessel again ends the effect early. When the effect ends, the token disappears.",
		descriptionFull : "This tiny object looks like a feather. You can use an action to touch the token to a boat or ship. For the next 24 hours, the vessel can't be moved by any means. Touching the token to the vessel again ends the effect. When the effect ends, the token disappears.",
		action : [["action", ""]]
	},
	"bird" : {
		description : "As an action, I can toss this token into the air and it turns into a roc. It obeys my simple commands, can't attack, can carry 500 lb while flying (16 miles per hour or 144 miles per day, as it rests 1 hour per 3 of flying), or double that at half speed. It disappears after a day, i it drops to 0 HP, or if I use an action to make it.",
		descriptionFull : "This tiny object looks like a feather. You can use an action to toss the token 5 feet into the air. The token disappears and an enormous, multicolored bird takes its place. The bird has the statistics of a roc, but it obeys your simple commands and can't attack. It can carry up to 500 pounds while flying at its maximum speed (16 miles an hour for a maximum of 144 miles per day. with a one-hour rest for every 3 hours of flying), or 1,000 pounds at half that speed. The bird disappears after flying its maximum distance for a day or if it drops to 0 hit points. You can dismiss the bird as an action.",
		action : [["action", " (use/dismiss)"]]
	},
	"fan" : {
		description : "As an action when I'm on a boat or ship, I can toss this token up to 10 ft in the air. The token disappears, and a giant flapping fan takes its place. The fan floats and creates a wind strong enough to fill the sails of one ship, increasing its speed by 5 miles per hour for 8 hours. I can dismiss the fan as an action.",
		descriptionFull : "This tiny object looks like a feather. If you are on a boat or ship, you can use an action to toss the token up to 10 feet in the air. The token disappears, and a giant flapping fan takes its place. The fan floats and creates a wind strong enough to fill the sails of one ship, increasing its speed by 5 miles per hour for 8 hours. You can dismiss the fan as an action.",
		action : [["action", " (create/dismiss)"]]
	},
	"swan boat" : {
		description : "As an action, I can touch the token to a body of water at least 60-ft in diameter, having it turn into a 50 ft by 20 ft boat shaped like a swan that remains for 24 hours. It moves itself at 6 miles per hour. As an action, I can command it to turn up to 90°. It can hold up to 32 Medium creatures (Large count as 4, Huge as 9).",
		descriptionFull : "This tiny object looks like a feather. You can use an action to touch the token to a body of water at least 60 feet in diameter. The token disappears, and a 50-foot-long, 20-foot-wide boat shaped like a swan takes its place. The boat is self-propelled and moves across water at a speed of 6 miles per hour. You can use an action while on the boat to command it to move or to turn up to 90 degrees. The boat can carry up to thirty-two Medium or smaller creatures. A Large creature counts as four Medium creatures, while a Huge creature counts as nine. The boat remains for 24 hours and then disappears. You can dismiss the boat as an action.",
		action : [["action", " (create/dismiss)"]]
	},
	"tree" : {
		description : "This tiny object looks like a feather. As an action, I can touch it to an unoccupied space on the ground. If this is done outdoors, the token disappears, and in its place a nonmagical oak tree springs into existence. The tree is 60 ft tall and has a 5-ft diameter trunk, and its branches at the top spread out in a 20-ft radius.",
		descriptionFull : "This tiny object looks like a feather. You must be outdoors to use this token. You can use an action to touch it to an unoccupied space on the ground. The token disappears, and in its place a nonmagical oak tree springs into existence. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius.",
		action : [["action", ""]]
	},
	"whip" : {
		description : "As an action, can throw the token 10 ft, where it turns into a floating whip for 1 hour, until I use an action to dismiss it, I die, or I become incapacitated. As a bonus action, I can have it fly 20 ft and make a melee spell attack against a creature within 10 ft of it, with a +9 to hit and dealing 1d6+5 force damage.",
		descriptionFull : "This tiny object looks like a feather. You can use an action to throw the token to a point within 10 feet of you. The token disappears, and a floating whip takes its place. You can then use a bonus action to make a melee spell attack against a creature within 10 feet of the whip, with an attack bonus of +9. On a hit, the target takes 1d6+5 force damage.\n   As a bonus action on your turn, you can direct the whip to fly up to 20 feet and repeat the attack against a creature within 10 feet of it. The whip disappears after 1 hour, when you use an action to dismiss it, or when you are incapacitated or die.",
		action : [["action", " (create)"], ["bous action", " (direct)"]]
	}
};
MagicItemsList["quarterstaff of the acrobat"] = {
},
MagicItemsList["quiver of ehlonna"] = {
	name : "Quiver of Ehlonna",
	nameAlt : "Efficient Quiver",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "This quiver has three compartments and weighs 2 lb, regardless of its contents. Its shortest compartment can hold 60 arrows, bolts, or similar objects. Its midsize compartment holds up to 18 javelins or similar objects. Its longest compartment holds up to 6 long objects, such as bows, quarterstaffs, or spears.",
	descriptionFull : "Each of the quiver's three compartments connects to an extradimensional space that allows the quiver to hold numerous items while never weighing more than 2 pounds. The shortest compartment can hold up to sixty arrows, bolts, or similar objects. The midsize compartment holds up to eighteen javelins or similar objects. The longest compartment holds up to six long objects, such as bows, quarterstaffs, or spears.\n   You can draw any item the quiver contains as if doing so from a regular quiver or scabbard.",
	weight : 2
};
MagicItemsList["ring of animal influence"] = {
	name : "Ring of Animal Influence",
	source : [["DMG2024", "-"]],
	type : "ring",
	rarity : "rare",
	magicItemTable : "?",
	description : "This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. As an action while wearing the ring, I can expend 1 of its charges to cast a spell (save DC 13): Animal Friendship, Speak with Animals, or Fear. Fear cast from this ring can target only beasts that have an Intelligence of 3 or lower.",
	descriptionFull : "This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing the ring, you can use an action to expend 1 of its charges to cast one of the following spells:\n \u2022 Animal Friendship (save DC 13)\n \u2022 Fear (save DC 13), targeting only beasts that have an Intelligence of 3 or lower\n \u2022 Speak with Animals",
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3",
	fixedDC : 13,
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "1 charge",
		spells : ["animal friendship", "speak with animals", "fear"],
		selection : ["animal friendship", "speak with animals", "fear"],
		firstCol : "1",
		times : 3
	}],
	spellChanges : {
		"fear" : {
			description : "All beasts Int<4 save or frightened, Dash to get away; extra save at end of turn if not in line of sight",
			changes : "Only affects beasts that have an Intelligence of 3 or lower."
		}
	}
};
MagicItemsList["ring of djinni summoning"] = {
	name : "Ring of Djinni Summoning",
	source : [["DMG2024", "-"]],
	type : "ring",
	rarity : "legendary",
	magicItemTable : "?",
	description : "As an action, I can speak this ring's command word to summon a djini within 120 ft, remaining while I concentrate, up to 1 hour. After that time, I can't summon it for 24 hours. It is friendly to me and my allies, obeys my commands, but takes no actions if not commanded to. The ring loses its magic If the djini dies.",
	descriptionFull : "While wearing this ring, you can speak its command word as an action to summon a particular djinni from the Elemental Plane of Air. The djinni appears in an unoccupied space you choose within 120 feet of you. It remains as long as you concentrate (as if concentrating on a spell), to a maximum of 1 hour, or until it drops to 0 hit points. It then returns to its home plane.\n   While summoned, the djinni is friendly to you and your companions. It obeys any commands you give it, no matter what language you use. If you fail to command it, the djinni defends itself against attackers but takes no other actions.\n   After the djinni departs, it can't be summoned again for 24 hours, and the ring becomes nonmagical if the djinni dies.",
	attunement : true,
	usages : 1,
	recovery : "24 hours"
};
MagicItemsList["ring of elemental command"] = {
	name : "Ring of Elemental Command",
	source : [["DMG2024", "-"]],
	type : "ring",
	rarity : "legendary",
	magicItemTable : "?",
	description : "Select one of the eight types of this ring, two for each of the elemental planes, with each ring having two option, its initial state and its 'unlocked' state that becomes available once you help slay an elemental of that plane while attuned to the ring.",
	descriptionFull : "This ring is linked to one of the four Elemental Planes. The GM chooses or randomly determines the linked plane.\n   While wearing this ring, you have advantage on attack rolls against elementals from the linked plane, and they have disadvantage on attack rolls against you. In addition, you have access to properties based on the linked plane.\n   The ring has 5 charges. It regains 1d4 + 1 expended charges daily at dawn. Spells cast from the ring have a save DC of 17.",
	attunement : true,
	allowDuplicates : true,
	usages : 5,
	recovery : "dawn",
	additional : "regains 1d4+1",
	choices : ["Air", "Air (help kill air elemental while attuned)", "Earth", "Earth (help kill earth elemental while attuned)", "Fire", "Fire (help kill fire elemental while attuned)", "Water", "Water (help kill water elemental while attuned)"],
	"air" : {
		name : "Ring of Air Elemental Command",
		sortname : "Ring of Elemental Command, Air",
		description : "This ring has 5 charges and regains 1d4+1 daily at dawn. It grants me adv. on attacks vs. elementals from the Plane of Air and they have disadv. vs. me. I can expend 2 charges to cast Dominate Monster on an air elemental. When I fall, I descend 60 ft per round and take no falling damage. I also know Auran.",
		descriptionFull : "While wearing this ring, you have advantage on attack rolls against elementals from the Elemental Plane of Air, and they have disadvantage on attack rolls against you. In addition, you have access to properties based on the Elemental Plane of Air.\n   The ring has 5 charges. It regains 1d4+1 expended charges daily at dawn. Spells cast from the ring have a save DC of 17.\n   You can expend 2 of the ring's charges to cast Dominate Monster on an air elemental. In addition, when you fall, you descend 60 feet per round and take no damage from falling. You can also speak and understand Auran.\n   If you help slay an air elemental while attuned to the ring, you gain access to the following additional properties:\n \u2022 You have resistance to lightning damage.\n \u2022 You have a flying speed equal to your walking speed and can hover.\n \u2022 You can cast the following spells from the ring, expending the necessary number of charges: Chain Lightning (3 charges), Gust of Wind (2 charges), or Wind Wall (1 charge).",
		languageProfs : ["Auran"],
		fixedDC : 17,
		spellFirstColTitle : "Ch",
		spellcastingBonus : {
			name : "2 charges",
			spells : ["dominate monster"],
			selection : ["dominate monster"],
			firstCol : 2
		},
		spellChanges : {
			"dominate monster" : {
				description : "Air elemental save or charmed, follows telepathic commands, 1 a for complete control; save on dmg",
				changes : "Can only affect an air elemental."
			}
		}
	},
	"air (help kill air elemental while attuned)" : {
		name : "Ring of Air Elemental Command [unlocked]",
		description : "This ring grants adv. on attacks vs. elementals from the Plane of Air while they have disadv. vs. me. I have resistance to lightning damage, flying speed equal to my walking speed. I fall at 60 ft per round and take no falling damage. I know Auran. I can cast spells by using its 5 charges, of which it regains 1d4+1 at dawn.",
		descriptionFull : "While wearing this ring, you have advantage on attack rolls against elementals from the Elemental Plane of Air, and they have disadvantage on attack rolls against you. In addition, you have access to properties based on the Elemental Plane of Air.\n   The ring has 5 charges. It regains 1d4+1 expended charges daily at dawn. Spells cast from the ring have a save DC of 17.\n   You can expend 2 of the ring's charges to cast Dominate Monster on an air elemental. In addition, when you fall, you descend 60 feet per round and take no damage from falling. You can also speak and understand Auran.\n   If you help slay an air elemental while attuned to the ring, you gain access to the following additional properties:\n \u2022 You have resistance to lightning damage.\n \u2022 You have a flying speed equal to your walking speed and can hover.\n \u2022 You can cast the following spells from the ring, expending the necessary number of charges: Chain Lightning (3 charges), Gust of Wind (2 charges), or Wind Wall (1 charge).",
		languageProfs : ["Auran"],
		dmgres : ["Lightning"],
		speed : { fly : { spd : "walk", enc : "walk" } },
		fixedDC : 17,
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
			name : "1 charge",
			spells : ["wind wall"],
			selection : ["wind wall"],
			firstCol : 1
		}, {
			name : "2 charges",
			spells : ["dominate monster", "gust of wind"],
			selection : ["dominate monster", "gust of wind"],
			firstCol : 2,
			times : 2
		}, {
			name : "3 charges",
			spells : ["chain lightning"],
			selection : ["chain lightning"],
			firstCol : 3
		}],
		spellChanges : {
			"dominate monster" : {
				description : "Air elemental save or charmed, follows telepathic commands, 1 a for complete control; save on dmg",
				changes : "Can only affect an air elemental."
			}
		},
		limfeaname : "Ring of Air Elemental Command"
	},
	"earth" : {
		name : "Ring of Earth Elemental Command",
		sortname : "Ring of Elemental Command, Earth",
		description : "This ring has 5 charges and regains 1d4+1 daily at dawn. It grants me adv. on attacks vs. elementals from the Plane of Earth and they have disadv. vs. me. I can expend 2 charges to cast Dominate Monster on an earth elemental. I move normally in difficult terrain of rubble, rocks, or dirt. I also know Terran.",
		descriptionFull : "While wearing this ring, you have advantage on attack rolls against elementals from the Elemental Plane of Earth and they have disadvantage on attack rolls against you. In addition, you have access to properties based on the Elemental Plane of Earth.\n   The ring has 5 charges. It regains 1d4+1 expended charges daily at dawn. Spells cast from the ring have a save DC of 17.\n   You can expend 2 of the ring's charges to cast Dominate Monster on an earth elemental. In addition, you can move in difficult terrain that is composed of rubble, rocks, or dirt as if it were normal terrain. You can also speak and understand Terran.\n   If you help slay an earth elemental while attuned to the ring, you gain access to the following additional properties:\n \u2022 You have resistance to acid damage.\n \u2022 You can move through solid earth or rock as if those areas were difficult terrain. If you end your turn there, you are shunted out to the nearest unoccupied space you last occupied.\n \u2022 You can cast the following spells from the ring, expending the necessary number of charges: Stone Shape (2 charges), Stoneskin (3 charges), or Wall of Stone (3 charges).",
		languageProfs : ["Terran"],
		fixedDC : 17,
		spellFirstColTitle : "Ch",
		spellcastingBonus : {
			name : "2 charges",
			spells : ["dominate monster"],
			selection : ["dominate monster"],
			firstCol : 2
		},
		spellChanges : {
			"dominate monster" : {
				description : "Earth elemental save or charmed, follows telepathic commands, 1 a for complete control; save on dmg",
				changes : "Can only affect an earth elemental."
			}
		}
	},
	"earth (help kill earth elemental while attuned)" : {
		name : "Ring of Earth Elemental Command [unlocked]",
		description : "This ring grants resistance to acid damage and adv. on attacks vs. elementals from the Plane of Earth while they have disadv. vs. me. I know Terran, move normally in difficult terrain of rubble, rocks, or dirt, and can move through solid earth or rock as if it were difficult terrain. I can cast spells by using its 5 charges.",
		descriptionFull : "While wearing this ring, you have advantage on attack rolls against elementals from the Elemental Plane of Earth and they have disadvantage on attack rolls against you. In addition, you have access to properties based on the Elemental Plane of Earth.\n   The ring has 5 charges. It regains 1d4+1 expended charges daily at dawn. Spells cast from the ring have a save DC of 17.\n   You can expend 2 of the ring's charges to cast Dominate Monster on an earth elemental. In addition, you can move in difficult terrain that is composed of rubble, rocks, or dirt as if it were normal terrain. You can also speak and understand Terran.\n   If you help slay an earth elemental while attuned to the ring, you gain access to the following additional properties:\n \u2022 You have resistance to acid damage.\n \u2022 You can move through solid earth or rock as if those areas were difficult terrain. If you end your turn there, you are shunted out to the nearest unoccupied space you last occupied.\n \u2022 You can cast the following spells from the ring, expending the necessary number of charges: Stone Shape (2 charges), Stoneskin (3 charges), or Wall of Stone (3 charges).",
		languageProfs : ["Terran"],
		dmgres : ["Acid"],
		fixedDC : 17,
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
			name : "2 charges",
			spells : ["dominate monster", "stone shape"],
			selection : ["dominate monster", "stone shape"],
			firstCol : 2,
			times : 2
		}, {
			name : "3 charges",
			spells : ["stoneskin", "wall of stone"],
			selection : ["stoneskin", "wall of stone"],
			firstCol : 3,
			times : 2
		}],
		spellChanges : {
			"dominate monster" : {
				description : "Earth elemental save or charmed, follows telepathic commands, 1 a for complete control; save on dmg",
				changes : "Can only affect an earth elemental."
			}
		},
		limfeaname : "Ring of Earth Elemental Command"
	},
	"fire" : {
		name : "Ring of Fire Elemental Command",
		sortname : "Ring of Elemental Command, Fire",
		description : "This ring has 5 charges and regains 1d4+1 daily at dawn. It grants me adv. on attacks vs. elementals from the Plane of Fire and they have disadv. vs. me. I can expend 2 charges to cast Dominate Monster (DC 17) on a fire elemental. I have resistance to fire damage and can speak and understand Ignan.",
		descriptionFull : "While wearing this ring, you have advantage on attack rolls against elementals from the Elemental Plane of Fire and they have disadvantage on attack rolls against you. In addition, you have access to properties based on the Elemental Plane of Fire.\n   The ring has 5 charges. It regains 1d4+1 expended charges daily at dawn. Spells cast from the ring have a save DC of 17.\n   You can expend 2 of the ring's charges to cast Dominate Monster on a fire elemental. In addition, you have resistance to fire damage. You can also speak and understand Ignan.\n   If you help slay a fire elemental while attuned to the ring, you gain access to the following additional properties:\n \u2022 You are immune to fire damage.\n \u2022 You can cast the following spells from the ring, expending the necessary number of charges: Burning Hands (1 charge), Fireball (2 charges), and Wall of Fire (3 charges).",
		languageProfs : ["Ignan"],
		dmgres : ["Fire"],
		fixedDC : 17,
		spellFirstColTitle : "Ch",
		spellcastingBonus : {
			name : "2 charges",
			spells : ["dominate monster"],
			selection : ["dominate monster"],
			firstCol : 2
		},
		spellChanges : {
			"dominate monster" : {
				description : "Fire elemental save or charmed, follows telepathic commands, 1 a for complete control; save on dmg",
				changes : "Can only affect a fire elemental."
			}
		}
	},
	"fire (help kill fire elemental while attuned)" : {
		name : "Ring of Fire Elemental Command [unlocked]",
		description : "This ring has 5 charges, regaining 1d4+1 at dawn. It grants me immunity to fire damage, adv. on attacks vs. elementals from the Plane of Fire and they have disadv. vs. me. I can expend charges to cast spells (DC 17), Burning Hands (1), Dominate Monster (1; fire elemental only), Fireball (2), Wall of Fire (3). I know Ignan.",
		descriptionFull : "While wearing this ring, you have advantage on attack rolls against elementals from the Elemental Plane of Fire and they have disadvantage on attack rolls against you. In addition, you have access to properties based on the Elemental Plane of Fire.\n   The ring has 5 charges. It regains 1d4+1 expended charges daily at dawn. Spells cast from the ring have a save DC of 17.\n   You can expend 2 of the ring's charges to cast Dominate Monster on a fire elemental. In addition, you have resistance to fire damage. You can also speak and understand Ignan.\n   If you help slay a fire elemental while attuned to the ring, you gain access to the following additional properties:\n \u2022 You are immune to fire damage.\n \u2022 You can cast the following spells from the ring, expending the necessary number of charges: Burning Hands (1 charge), Fireball (2 charges), and Wall of Fire (3 charges).",
		languageProfs : ["Ignan"],
		savetxt : { immune : ["fire"] },
		fixedDC : 17,
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
			name : "1 charge",
			spells : ["burning hands"],
			selection : ["burning hands"],
			firstCol : 1
		}, {
			name : "2 charges",
			spells : ["dominate monster", "fireball"],
			selection : ["dominate monster", "fireball"],
			firstCol : 2,
			times : 2
		}, {
			name : "3 charges",
			spells : ["wall of fire"],
			selection : ["wall of fire"],
			firstCol : 3
		}],
		spellChanges : {
			"dominate monster" : {
				description : "Fire elemental save or charmed, follows telepathic commands, 1 a for complete control; save on dmg",
				changes : "Can only affect a fire elemental."
			}
		},
		limfeaname : "Ring of Fire Elemental Command"
	},
	"water" : {
		name : "Ring of Water Elemental Command",
		sortname : "Ring of Elemental Command, Water",
		description : "This ring has 5 charges, regaining 1d4+1 at dawn. It grants me adv. on attacks vs. elementals from the Plane of Water and they have disadv. vs. me. I can expend 2 charges to cast Dominate Monster on a water elemental. I can stand on and walk across liquid surfaces as if they were solid ground. I know Aquan.",
		descriptionFull : "While wearing this ring, you have advantage on attack rolls against elementals from the Elemental Plane of Water and they have disadvantage on attack rolls against you. In addition, you have access to properties based on the Elemental Plane of Water.\n   The ring has 5 charges. It regains 1d4+1 expended charges daily at dawn. Spells cast from the ring have a save DC of 17.\n   You can expend 2 of the ring's charges to cast Dominate Monster on a water elemental. In addition, you can stand on and walk across liquid surfaces as if they were solid ground. You can also speak and understand Aquan.\n   If you help slay a water elemental while attuned to the ring, you gain access to the following additional properties:\n \u2022 You can breathe underwater and have a swimming speed equal to your walking speed.\n \u2022 You can cast the following spells from the ring, expending the necessary number of charges: Create or Destroy Water (1 charge), Control Water (3 charges), Ice Storm (2 charges), or Wall of Ice (3 charges).",
		languageProfs : ["Aquan"],
		fixedDC : 17,
		spellFirstColTitle : "Ch",
		spellcastingBonus : {
			name : "2 charges",
			spells : ["dominate monster"],
			selection : ["dominate monster"],
			firstCol : 2
		},
		spellChanges : {
			"dominate monster" : {
				description : "Water elemental save or charmed, follows telepathic commands, 1 a for complete control; save on dmg",
				changes : "Can only affect a water elemental."
			}
		}
	},
	"water (help kill water elemental while attuned)" : {
		name : "Ring of Water Elemental Command [unlocked]",
		description : "This ring gives me adv. on attacks vs. elementals from the Plane of Water while they have disadv. vs. me. I know Aquan, can stand and walk on liquid surfaces as if they were solid ground, swim at my walking speed, and breathe underwater.  I can cast spells by using the ring's 5 charges, of which it regains 1d4+1 at dawn.",
		descriptionFull : "While wearing this ring, you have advantage on attack rolls against elementals from the Elemental Plane of Water and they have disadvantage on attack rolls against you. In addition, you have access to properties based on the Elemental Plane of Water.\n   The ring has 5 charges. It regains 1d4+1 expended charges daily at dawn. Spells cast from the ring have a save DC of 17.\n   You can expend 2 of the ring's charges to cast Dominate Monster on a water elemental. In addition, you can stand on and walk across liquid surfaces as if they were solid ground. You can also speak and understand Aquan.\n   If you help slay a water elemental while attuned to the ring, you gain access to the following additional properties:\n \u2022 You can breathe underwater and have a swimming speed equal to your walking speed.\n \u2022 You can cast the following spells from the ring, expending the necessary number of charges: Create or Destroy Water (1 charge), Control Water (3 charges), Ice Storm (2 charges), or Wall of Ice (3 charges).",
		languageProfs : ["Aquan"],
		speed : { swim : { spd : "walk", enc : "walk" } },
		fixedDC : 17,
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
			name : "1 charge",
			spells : ["create or destroy water"],
			selection : ["create or destroy water"],
			firstCol : 1
		}, {
			name : "2 charges",
			spells : ["dominate monster", "ice storm"],
			selection : ["dominate monster", "ice storm"],
			firstCol : 2,
			times : 2
		}, {
			name : "3 charges",
			spells : ["control water", "wall of ice"],
			selection : ["control water", "wall of ice"],
			firstCol : 3,
			times : 2
		}],
		spellChanges : {
			"dominate monster" : {
				description : "Water elemental save or charmed, follows telepathic commands, 1 a for complete control; save on dmg",
				changes : "Can only affect a water elemental."
			}
		},
		limfeaname : "Ring of Water Elemental Command"
	}
};
MagicItemsList["ring of evasion"] = {
	name : "Ring of Evasion",
	source : [["DMG2024", "-"]],
	type : "ring",
	rarity : "rare",
	magicItemTable : "?",
	description : "This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. As a reaction when I fail a Dexterity saving throw while wearing it, I can expend 1 of its charges to succeed on that saving throw instead.",
	descriptionFull : "This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. When you fail a Dexterity saving throw while wearing it, you can use your reaction to expend 1 of its charges to succeed on that saving throw instead.",
	attunement : true,
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3",
	action : [["reaction", ""]]
};
MagicItemsList["ring of feather falling"] = {
	name : "Ring of Feather Falling",
	source : [["DMG2024", "-"]],
	type : "ring",
	rarity : "rare",
	magicItemTable : "?",
	description : "When I fall while wearing this ring, I descend 60 ft per round and take no damage from falling.",
	descriptionFull : "When you fall while wearing this ring, you descend 60 feet per round and take no damage from falling.",
	attunement : true
};
MagicItemsList["ring of free action"] = {
	name : "Ring of Free Action",
	source : [["DMG2024", "-"]],
	type : "ring",
	rarity : "rare",
	magicItemTable : "?",
	description : "While I wear this ring, difficult terrain doesn't cost me extra movement. In addition, magic can neither reduce my speed nor cause me to be paralyzed or restrained.",
	descriptionFull : "While you wear this ring, difficult terrain doesn't cost you extra movement. In addition, magic can neither reduce your speed nor cause you to be paralyzed or restrained.",
	attunement : true,
	savetxt : { immune : ["paralyzed (by magic)", "restrained (by magic)"] }
};
MagicItemsList["ring of invisibility"] = {
	name : "Ring of Invisibility",
	source : [["DMG2024", "-"]],
	type : "ring",
	rarity : "legendary",
	magicItemTable : "?",
	description : "While wearing this ring, I can turn invisible as an action. Anything I am wearing or carrying is invisible with me. I remain invisible until the ring is removed, until I attack or cast a spell, or until I use a bonus action to become visible again.",
	descriptionFull : "While wearing this ring, you can turn invisible as an action. Anything you are wearing or carrying is invisible with you. You remain invisible until the ring is removed, until you attack or cast a spell, or until you use a bonus action to become visible again.",
	attunement : true,
	action : [["action", " (start)"], ["bonus action", " (stop)"]]
};
MagicItemsList["ring of jumping"] = {
	name : "Ring of Jumping",
	source : [["DMG2024", "-"]],
	type : "ring",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "As a bonus action, I can use this ring to cast Jump on myself. That spell causes my jump distance to triple for 1 minute.",
	descriptionFull : "While wearing this ring, you can cast the Jump spell from it as a bonus action at will, but can target only yourself when you do so.",
	attunement : true,
	action : [["bonus action", ""]],
	spellcastingBonus : {
		name : "Self Only",
		spells : ["jump"],
		selection : ["jump"],
		firstCol : "atwill"
	},
	spellChanges : {
		"jump" : {
			time : "1 bns",
			range : "Self",
			changes : "The casting time is only a bonus action instead of an action and it can only affect the wearer."
		}
	}
};
MagicItemsList["ring of mind shielding"] = {
	name : "Ring of Mind Shielding",
	source : [["DMG2024", "-"]],
	type : "ring",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "This ring makes me immune to magic that allows others to read my thoughts, determine if I'm lying, know my alignment or creature type, and telepathy only works if I allow it. As an action, I can cause it to become invisible as long as I wear it and not die, or visible again. If I die while wearing it, my soul enters it.",
	descriptionLong : "While wearing this ring, I'm immune to magic that allows others to read my thoughts, know my alignment or creature type, or determine if I'm lying. Also, telepathy only works if I allow it. As an action, I can cause it to become invisible for as long as I wear it and not die, or visible again. If I die while wearing it, my soul enters it unless it already houses a soul. I can remain in the ring or depart for the afterlife. As long as my soul is in the ring, I can telepathically communicate with any creature wearing it. A wearer can't prevent this telepathic communication.",
	descriptionFull : "While wearing this ring, you are immune to magic that allows other creatures to read your thoughts, determine whether you are lying, know your alignment, or know your creature type. Creatures can telepathically communicate with you only if you allow it.\n   You can use an action to cause the ring to become invisible until you use another action to make it visible, until you remove the ring, or until you die.\n   If you die while wearing the ring, your soul enters it, unless it already houses a soul. You can remain in the ring or depart for the afterlife. As long as your soul is in the ring, you can telepathically communicate with any creature wearing it. A wearer can't prevent this telepathic communication.",
	attunement : true,
	action : [["action", "Ring of Mind Shielding: (in)visible"]],
	savetxt : { immune : ["magic reading my thoughts, truthfullness, alignment, or type"] }
};
MagicItemsList["ring of protection"] = {
	name : "Ring of Protection",
	source : [["DMG2024", "-"]],
	type : "ring",
	rarity : "rare",
	magicItemTable : "?",
	description : "While wearing this ring, I gain a +1 bonus to AC and saving throws.",
	descriptionFull : "You gain a +1 bonus to AC and saving throws while wearing this ring.",
	attunement : true,
	extraAC : [{name : "Ring of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC while attuned."}],
	addMod : [{ type : "save", field : "all", mod : 1, text : "While I wear the Ring of Protection, I gain a +1 bonus to all my saving throws." }]
};
MagicItemsList["ring of regeneration"] = {
	name : "Ring of Regeneration",
	source : [["DMG2024", "-"]],
	type : "ring",
	rarity : "very rare",
	magicItemTable : "?",
	description : "While wearing this ring, I regain 1d6 hit points every 10 minutes, provided that I have at least 1 hit point. If I lose a body part, the ring causes the missing part to regrow and return to full functionality after 1d6+1 days if I have at least 1 hit point the whole time.",
	descriptionFull : "While wearing this ring, you regain 1d6 hit points every 10 minutes, provided that you have at least 1 hit point. If you lose a body part, the ring causes the missing part to regrow and return to full functionality after 1d6+1 days if you have at least 1 hit point the whole time.",
	attunement : true
};
MagicItemsList["ring of resistance"] = {
	name : "Ring of Resistance",
	source : [["DMG2024", "-"]],
	type : "ring",
	rarity : "rare",
	magicItemTable : "?",
	description : "I have resistance to one damage type while wearing this ring. The gem in the ring indicates the type of damage.",
	descriptionFull : "You have resistance to one damage type while wearing this ring. The gem in the ring indicates the type, which the GM chooses or determines randomly.\n\n" + toUni("d10\tDamage Type\tGem") +
	"\n   1\tAcid\t\tPearl" +
	"\n   2\tCold\t\tTourmaline" +
	"\n   3\tFire\t\tGarnet" +
	"\n   4\tForce\t\tSapphire" +
	"\n   5\tLightning   \tCitrine" +
	"\n   6\tNecrotic\t\tJet" +
	"\n   7\tPoison\t\tAmethyst" +
	"\n   8\tPsychic\t\tJade" +
	"\n   9\tRadiant\t\tTopaz" +
	"\n 10\tThunder\t\tSpinel",
	attunement : true,
	choices : ["Acid", "Cold", "Fire", "Force", "Lightning", "Necrotic", "Poison", "Psychic", "Radiant", "Thunder"],
	choicesNotInMenu : true,
	"acid" : {
		name : "Ring of Acid Resistance",
		description : "While I'm wearing this ring set with a pearl and I'm attuned to it, I have resistance to acid damage.",
		dmgres : ["Acid"]
	},
	"cold" : {
		name : "Ring of Cold Resistance",
		description : "While I'm wearing this ring set with a tourmaline and I'm attuned to it, I have resistance to cold damage.",
		dmgres : ["Cold"]
	},
	"fire" : {
		name : "Ring of Fire Resistance",
		description : "While I'm wearing this ring set with a garnet and I'm attuned to it, I have resistance to fire damage.",
		dmgres : ["Fire"]
	},
	"force" : {
		name : "Ring of Force Resistance",
		description : "While I'm wearing this ring set with a sapphire and I'm attuned to it, I have resistance to force damage.",
		dmgres : ["Force"]
	},
	"lightning" : {
		name : "Ring of Lightning Resistance",
		description : "While I'm wearing this ring set with a citrine and I'm attuned to it, I have resistance to lightning damage.",
		dmgres : ["Lightning"]
	},
	"necrotic" : {
		name : "Ring of Necrotic Resistance",
		description : "While I'm wearing this ring set with jet and I'm attuned to it, I have resistance to necrotic damage.",
		dmgres : ["Necrotic"]
	},
	"poison" : {
		name : "Ring of Poison Resistance",
		description : "While I'm wearing this ring set with an amethyst and I'm attuned to it, I have resistance to poison damage.",
		dmgres : ["Poison"]
	},
	"psychic" : {
		name : "Ring of Psychic Resistance",
		description : "While I'm wearing this ring set with jade and I'm attuned to it, I have resistance to psychic damage.",
		dmgres : ["Psychic"]
	},
	"radiant" : {
		name : "Ring of Radiant Resistance",
		description : "While I'm wearing this ring set with a topaz and I'm attuned to it, I have resistance to radiant damage.",
		dmgres : ["Radiant"]
	},
	"thunder" : {
		name : "Ring of Thunder Resistance",
		description : "While I'm wearing this ring set with a spinel and I'm attuned to it, I have resistance to thunder damage.",
		dmgres : ["Thunder"]
	}
};
MagicItemsList["ring of shooting stars"] = {
	name : "Ring of Shooting Stars",
	source : [["DMG2024", "-"]],
	type : "ring",
	rarity : "very rare",
	magicItemTable : "?",
	description : "This ring has 6 charges and it regains 1d6 expended charges daily at dawn. While wearing this ring in dim light or darkness, I can cast Dancing Lights and Light at will. As an action, I can expend charges to cast Faerie Fire, Ball Lightning (see 3rd page notes), or Shooting Stars (see 3rd page notes). All spells DC 15.",
	descriptionFull : "While wearing this ring in dim light or darkness, you can cast Dancing Lights and Light from the ring at will. Casting either spell from the ring requires an action.\n   The ring has 6 charges for the following other properties. The ring regains 1d6 expended charges daily at dawn.\n   " + toUni("Faerie Fire") + ". You can expend 1 charge as an action to cast Faerie Fire from the ring.\n   " + toUni("Ball Lightning") + ". You can expend 2 charges as an action to create one to four 3-foot-diameter spheres of lightning. The more spheres you create, the less powerful each sphere is individually.\n   Each sphere appears in an unoccupied space you can see within 120 feet of you. The spheres last as long as you concentrate (as if concentrating on a spell), up to 1 minute. Each sphere sheds dim light in a 30-foot radius.\n   As a bonus action, you can move each sphere up to 30 feet, but no farther than 120 feet away from you. When a creature other than you comes within 5 feet of a sphere, the sphere discharges lightning at that creature and disappears. That creature must make a DC 15 Dexterity saving throw. On a failed save, the creature takes lightning damage based on the number of spheres you created (4 spheres = 2d4, 3 spheres = 2d6, 2 spheres = 5d4, 1 sphere = 4d12).\n   " + toUni("Shooting Stars") + ". \n   You can expend 1 to 3 charges as an action. For every charge you expend, you launch a glowing mote of light from the ring at a point you can see within 60 feet of you. Each creature within a 15-foot cube originating from that point is showered in sparks and must make a DC 15 Dexterity saving throw. taking 5d4 fire damage on a failed save, or half as much damage on a successful one.",
	attunement : true,
	toNotesPage : [{
		name : "Ball Lightning",
		page3notes : true,
		additional : "2 charges",
		note : [
			"As an action, I can create 1-4 spheres of lightning of 3-ft diameter within 120 ft",
			"These last while I concentrate, up to 1 min; As a bonus action, I can more them 30 ft",
			"When a creature (not me) comes within 5 ft of a sphere, it discharges and disappears",
			"The target must make a DC 15 Dex save or take lightning damage",
			"A sphere sheds dim light in 30-ft radius, its damage depends on the number created:",
			" \u2022 1 sphere: 4d12;    \u2022 2 spheres: 5d4;    \u2022 3 spheres: 2d6;    \u2022 4 spheres: 2d4"
		]
	}, {
		name : "Shooting Stars",
		page3notes : true,
		additional : "1-3 charges",
		note : [
			"As an action, I can launch one mote of light per expended charge to a point within 60 ft",
			"All creatures within a 15-ft cube originating from those points take 5d4 fire damage",
			"The targets can make a DC 15 Dexterity saving throw to halve the damage"
		]
	}],
	usages : 6,
	recovery : "dawn",
	additional : "regains 1d6",
	fixedDC : 15,
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "At will",
		spells : ["dancing lights", "light"],
		selection : ["dancing lights", "light"],
		firstCol : "atwill",
		times : 2
	}, {
		name : "1 charge",
		spells : ["faerie fire"],
		selection : ["faerie fire"],
		firstCol : 1
	}, {
		name : "Ball lightning (2 chr)",
		spells : ["flaming sphere"],
		selection : ["flaming sphere"],
		firstCol : 2
	}, {
		name : "Shooting stars (1-3 chr)",
		spells : ["magic missile"],
		selection : ["magic missile"],
		firstCol : "1+"
	}],
	spellChanges : {
		"flaming sphere" : { // change into Ball Lightning
			name : "Ball Lightning",
			source : [["SRD", 237], ["D", 192]],
			level : "",
			school : "Evoc",
			time : "1 a",
			range : "120 ft",
			components : "M\u0192",
			compMaterial : "Spells cast by magic items don't require any components other than the magic item itself.",
			duration : "Conc, 1 min",
			save : "Dex",
			description : "1-4 spheres; bns a move all 30 ft; 1st crea in 5 ft save or Lightning dmg (1:4d12, 2:5d4, 3:2d6, 4:2d4)",
			descriptionShorter : false,
			descriptionFull : "You can expend 2 charges from the ring of shooting starts as an action to create one to four 3-foot-diameter spheres of lightning. The more spheres you create, the less powerful each sphere is individually.\n   Each sphere appears in an unoccupied space you can see within 120 feet of you. The spheres last as long as you concentrate (as if concentrating on a spell), up to 1 minute. Each sphere sheds dim light in a 30-foot radius.\n   As a bonus action, you can move each sphere up to 30 feet, but no farther than 120 feet away from you. When a creature other than you comes within 5 feet of a sphere, the sphere discharges lightning at that creature and disappears. That creature must make a DC 15 Dexterity saving throw. On a failed save, the creature takes lightning damage based on the number of spheres you created (4 spheres = 2d4, 3 spheres = 2d6, 2 spheres = 5d4, 1 sphere = 4d12).",
			completeRewrite : true, // indicates that the changes here even overwrite the tooltip
			changes : "The listing of 'Flaming Sphere' has been completely changed to reflect the 'Ball Lightning' ability of the Ring of Shooting Stars. Even the information above is changed."
		},
		"magic missile" : { // change into Shooting Stars
			name : "Shooting Stars",
			source : [["SRD", 237], ["D", 192]],
			level : "",
			school : "Evoc",
			time : "1 a",
			range : "60 ft",
			components : "M\u0192",
			compMaterial : "Spells cast by magic items don't require any components other than the magic item itself.",
			duration : "Instantaneous",
			description : "15-ft cube in range per expended charge; all crea in cubes take 5d4 Fire damage, save halves",
			descriptionFull : "You can expend 1 to 3 charges from the ring of shooting starts as an action. For every charge you expend, you launch a glowing mote of light from the ring at a point you can see within 60 feet of you. Each creature within a 15-foot cube originating from that point is showered in sparks and must make a DC 15 Dexterity saving throw. taking 5d4 fire damage on a failed save, or half as much damage on a successful one.",
			completeRewrite : true, // indicates that the changes here even overwrite the tooltip
			changes : "The listing of 'Magic Missile' has been completely changed to reflect the 'Shooting Stars' ability of the Ring of Shooting Stars. Even the information above is changed."
		}
	}
};
MagicItemsList["ring of spell storing"] = { // contains contributions by Fourleafclov
	name : "Ring of Spell Storing",
	source : [["DMG2024", "-"]],
	type : "ring",
	rarity : "rare",
	magicItemTable : "?",
	description : "This ring can hold up to 5 levels of spell slots. Any creature can cast a spell into the ring using a 1-5th level spell slot, which is then stored if there is space. I can cast stored spells from the ring, freeing up space, using the original caster's attack bonus, save DC, spellcasting ability score, and the initial spell slot level.",
	descriptionFull : "This ring stores spells cast into it, holding them until the attuned wearer uses them. The ring can store up to 5 levels worth of spells at a time. When found, it contains 1d6-1 levels of stored spells chosen by the DM.\n   Any creature can cast a spell of 1st through 5th level into the ring by touching the ring as the spell is cast. The spell has no effect, other than to be stored in the ring. If the ring can't hold the spell, the spell is expended without effect. The level of the slot used to cast the spell determines how much space it uses.\n   While wearing this ring, you can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The spell cast from the ring is no longer stored in it, freeing up space.",
	attunement : true,
	usages : "5 lvls",
	recovery : " Cast"
};
MagicItemsList["ring of spell turning"] = {
	name : "Ring of Spell Turning",
	source : [["DMG2024", "-"]],
	type : "ring",
	rarity : "legendary",
	magicItemTable : "?",
	description : "While wearing this ring, I have advantage on saves against any spell that targets only me (not in an area of effect). In addition, if I roll a 20 for the save and the spell is 7th level or lower, the spell has no effect on me and instead targets the caster as if the caster had effectively targeted itself.",
	descriptionFull : "While wearing this ring, you have advantage on saving throws against any spell that targets only you (not in an area of effect). In addition, if you roll a 20 for the save and the spell is 7th level or lower, the spell has no effect on you and instead targets the caster, using the slot level, spell save DC, attack bonus, and spellcasting ability of the caster.",
	attunement : true,
	savetxt : { adv_vs : ["spells (targeting only me)"] }
};
MagicItemsList["ring of swimming"] = {
	name : "Ring of Swimming",
	source : [["DMG2024", "-"]],
	type : "ring",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "I have a swimming speed of 40 feet while wearing this ring.",
	descriptionFull : "You have a swimming speed of 40 feet while wearing this ring.",
	speed : { swim : { spd : "fixed 40", enc : "fixed 30" } }
};
MagicItemsList["ring of telekinesis"] = {
	name : "Ring of Telekinesis",
	source : [["DMG2024", "-"]],
	type : "ring",
	rarity : "very rare",
	magicItemTable : "?",
	description : "While wearing this ring, I can cast Telekinesis at will, but I can target only an object up to 1000 lb that isn't being worn or carried. I can move it up to 30 ft in any direction, but not more than 60 ft away from me. I can exert fine control on it, such as manipulating a tool, opening a door, or pouring out its contents.",
	descriptionFull : "While wearing this ring, you can cast the Telekinesis spell at will, but you can target only objects that aren't being worn or carried.",
	attunement : true,
	spellcastingBonus : {
		name : "At will",
		spells : ["telekinesis"],
		selection : ["telekinesis"],
		firstCol : "atwill"
	},
	spellChanges : {
		"telekinesis" : {
			description : "Move 1 object up to 1000 lb 30 ft and exert fine control over it; as 1 a following rounds",
			changes : "The Ring of Telekinesis only allows manupilation of unattended objects."
		}
	}
};
MagicItemsList["ring of the ram"] = {
	name : "Ring of the Ram",
	source : [["DMG2024", "-"]],
	type : "ring",
	rarity : "rare",
	magicItemTable : "?",
	description : "This ring has 3 charges, regaining 1d3 charges daily at dawn. As an action, I can use charges to make a ranged attack on a target in 60 ft, with a +7 to hit, doing 2d10 force damage per charge and pushing it 5 ft per charge. If I target an unattended object, I can try to break it with a +5 per charge on the Strength check.",
	descriptionFull : "This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing the ring, you can use an action to expend 1 to 3 of its charges to attack one creature you can see within 60 feet of you. The ring produces a spectral ram's head and makes its attack roll with a +7 bonus. On a hit, for each charge you spend, the target takes 2d10 force damage and is pushed 5 feet away from you.\n   Alternatively, you can expend 1 to 3 of the ring's charges as an action to try to break an object you can see within 60 feet of you that isn't being worn or carried. The ring makes a Strength check with a +5 bonus for each charge you spend.",
	attunement : true,
	weaponsAdd : ["Ring of the Ram"],
	weaponOptions : {
		regExpSearch : /^(?=.*ring)(?=.*ram).*$/i,
		name : "Ring of the Ram",
		source : [["SRD", 238], ["D", 193]],
		ability : 0,
		type : "Magic Item",
		damage : [2, 10, "force"],
		range : "60 ft",
		description : "Damage is per charge used, also pushes 5 ft away per charge used",
		abilitytodamage : false,
		modifiers : [7, ""]
	}
};
MagicItemsList["ring of three wishes"] = {
	name : "Ring of Three Wishes",
	source : [["DMG2024", "-"]],
	type : "ring",
	rarity : "legendary",
	magicItemTable : "?",
	description : "While wearing this ring, I can use an action to expend 1 of its 3 charges to cast the Wish spell from it. The ring becomes nonmagical when I use the last charge.",
	descriptionFull : "While wearing this ring, you can use an action to expend 1 of its 3 charges to cast the Wish spell from it. The ring becomes nonmagical when you use the last charge.",
	usages : 3,
	recovery : "Never",
	spellFirstColTitle : "Ch",
	spellcastingBonus : {
		name : "1 charge",
		spells : ["wish"],
		selection : ["wish"],
		firstCol : 1
	}
};
MagicItemsList["ring of warmth"] = {
	name : "Ring of Warmth",
	source : [["DMG2024", "-"]],
	type : "ring",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While wearing this ring, I have resistance to cold damage. In addition, I and everything I wear and carry are unharmed by temperatures as low as -50 \u00B0F.",
	descriptionFull : "While wearing this ring, you have resistance to cold damage. In addition, you and everything you wear and carry are unharmed by temperatures as low as -50 degrees Fahrenheit.",
	attunement : true,
	dmgres : ["Cold"]
};
MagicItemsList["ring of water walking"] = {
	name : "Ring of Water Walking",
	source : [["DMG2024", "-"]],
	type : "ring",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While wearing this ring, I can stand on and move across any liquid surface as if it were solid ground.",
	descriptionFull : "While wearing this ring, you can stand on and move across any liquid surface as if it were solid ground."
};
MagicItemsList["ring of x-ray vision"] = {
	name : "Ring of X-ray Vision",
	source : [["DMG2024", "-"]],
	type : "ring",
	rarity : "rare",
	magicItemTable : "?",
	description : "As an action, I can speak this ring's command word to make me see into and through solid matter as if it is transparent and light passes through for 1 minute within 30 ft (1 ft stone, 1 inch metal, 3 ft wood/dirt, not lead). When I use this again before a long rest, I must make a DC 15 Con save or gain 1 level of exhaustion.",
	descriptionFull : "While wearing this ring, you can use an action to speak its command word. When you do so, you can see into and through solid matter for 1 minute. This vision has a radius of 30 feet. To you, solid objects within that radius appear transparent and don't prevent light from passing through them. The vision can penetrate 1 foot of stone, 1 inch of common metal, or up to 3 feet of wood or dirt. Thicker substances block the vision, as does a thin sheet of lead.\n   Whenever you use the ring again before taking a long rest, you must succeed on a DC 15 Constitution saving throw or gain one level of exhaustion.",
	attunement : true,
	action : [["action", ""]],
	usages : 1,
	recovery : "long rest",
	additional : "more uses: DC 15 Con save"
};
MagicItemsList["rival coin"] = {
};
MagicItemsList["robe of eyes"] = { // contains contributions by SoilentBrad
	name : "Robe of Eyes",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "This robe gives me adv. on sight-based Perception checks, the ability to see in all directions, see invisible/ethereal out to 120 ft, darkvision 120 ft. I can't close or avert my eyes. If Light is cast on it or Daylight within 5 ft of it, I'm blinded for 1 min, Con save (DC 11-Light, 15-Daylight) at the end of my each of my turns to end.",
	descriptionFull : "This robe is adorned with eyelike patterns. While you wear the robe, you gain the following benefits:\n \u2022 The robe lets you see in all directions, and you have advantage on Wisdom (Perception) checks that rely on sight.\n \u2022 You have darkvision out to a range of 120 feet.\n \u2022 You can see invisible creatures and objects, as well as see into the Ethereal Plane, out to a range of 120 feet.\n\nThe eyes on the robe can't be closed or averted. Although you can close or avert your own eyes, you are never considered to be doing so while wearing this robe.\n   A Light spell cast on the robe or a Daylight spell cast within 5 feet of the robe causes you to be blinded for 1 minute. At the end of each of your turns, you can make a Constitution saving throw (DC 11 for Light or DC 15 for Daylight), ending the blindness on a success.",
	attunement : true,
	weight : 4,
	vision: [
		["Darkvision", "fixed 120"],
		["See invisible/ethereal", "fixed 120"],
		["Adv. on Perception checks based on sight", 0]
	]
};
MagicItemsList["robe of scintillating colors"] = { // contains contributions by SoilentBrad
	name : "Robe of Scintillating Colors",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "?",
	description : "This robe has 3 charges, regaining 1d3 at dawn. As an action, I can use 1 charge to shed 30-ft radius bright light, 30 ft dim light until the end of my next turn, causing all that see me to have disadv. on attacks against me. All within 30 ft that can see me at activation make a DC 15 Wis save or stunned until effect ends.",
	descriptionFull : "This robe has 3 charges, and it regains 1d3 expended charges daily at dawn. While you wear it, you can use an action and expend 1 charge to cause the garment to display a shifting pattern of dazzling hues until the end of your next turn. During this time, the robe sheds bright light in a 30-foot radius and dim light for an additional 30 feet. Creatures that can see you have disadvantage on attack rolls against you. In addition, any creature in the bright light that can see you when the robe's power is activated must succeed on a DC 15 Wisdom saving throw or become stunned until the effect ends.",
	attunement : true,
	weight : 4,
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3",
	action : [["action", ""]]
};
MagicItemsList["robe of stars"] = { // contains contributions by SoilentBrad
	name : "Robe of Stars",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "?",
	description : "This dark robe gives a +1 bonus to saving throws. It has 6 large stars embroidered on it, that I can use to cast Magic Missile at 5th-level. 1d6 used stars reappear at dusk. As an action, I can enter or exit the Astral Plane along with all I'm wearing and carrying. I can return as an action, appearing in the spot I left.",
	descriptionFull : "This black or dark blue robe is embroidered with small white or silver stars. You gain a +1 bonus to saving throws while you wear it.\n   Six stars, located on the robe's upper front portion, are particularly large. While wearing this robe, you can use an action to pull off one of the stars and use it to cast Magic Missile as a 5th-level spell. Daily at dusk, 1d6 removed stars reappear on the robe.\n   While you wear the robe, you can use an action to enter the Astral Plane along with everything you are wearing and carrying. You remain there until you use an action to return to the plane you were on. You reappear in the last space you occupied, or if that space is occupied, the nearest unoccupied space.",
	attunement : true,
	weight : 4,
	action : [["action", ""]],
	usages : 6,
	recovery : "Dusk",
	additional : "regains 1d6",
	addMod: [{ type: "save", field: "all", mod: 1, text: "While wearing the Robe of Stars, I gain a +1 bonus to all my saving throws." }],
	spellFirstColTitle: "Ch",
	spellcastingBonus: {
		name: "1 charge",
		spells: ["magic missile"],
		selection: ["magic missile"],
		firstCol: 1
	},
	spellChanges : {
		"magic missile" : {
			description : "8 darts hit creature(s) I can see for 1d4+1 Force dmg per dart",
			changes : "Magic Missile cast from the Robe of Stars is always at 5th-level."
		}
	}
};
MagicItemsList["robe of the archmagi"] = { // contains contributions by SoilentBrad
	name : "Robe of the Archmagi",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "legendary",
	magicItemTable : "?",
	description : "I can only attune to a robe of the archmagi that matches my alignment: white for good, gray for neutral, black for evil. I gain these benefits while wearing the robe: if unarmored, my AC is 15 + my Dex mod; I have adv on saves against spells and magical effects; my spell save DC and spell attack bonus increase by 2.",
	descriptionFull : "This elegant garment is made from exquisite cloth of white, gray, or black and adorned with silvery runes. The robe's color corresponds to the alignment for which the item was created. A white robe was made for good, gray for neutral, and black for evil. You can't attune to a robe of the archmagi that doesn't correspond to your alignment.\n   You gain these benefits while wearing the robe:\n \u2022 If you aren't wearing armor, your base Armor Class is 15 + your Dexterity modifier.\n \u2022 You have advantage on saving throws against spell and other magical effects.\n \u2022 Your spell save DC and spell attack bonus each increase by 2.",
	attunement : true,
	weight : 4,
	savetxt : { adv_vs : ["spells", "magical effects"] },
	calcChanges : {
		spellCalc : [
			function (type, spellcasters, ability) {
				if (type != "prepare") return 2;
			},
			"While wearing the Robe of the Archmagi my spell save DC and spell attack bonus each increase by 2."
		]
	},
	addArmor: "Robe of the Archmagi",
	armorOptions: {
		regExpSearch: /^(?=.*robe)(?=.*(archmage|archmagi)).*$/i,
		name : "Robe of the Archmagi",
		source : [["SRD", 239], ["D", 194]],
		ac : 15,
		weight : 4
	},
	choices : ["Good", "Neutral", "Evil"],
	choicesNotInMenu : true,
	"good" : {
		description : "While wearing this elegant robe made from exquisite white cloth adorned with silvery runes, I have advantage on saves against spells and magical effects and add +2 to both my spell save DC and spell attack rolls. Also, if I'm not wearing armor, it makes my base AC 15 + my Dexterity modifier.",
		prerequisite : "Requires attunement by a good sorcerer, warlock, or wizard",
		prereqeval : function(v) { return (classes.known.sorcerer || classes.known.warlock || classes.known.wizard) && (/good/i).test(What("Alignment")); }
	},
	"neutral" : {
		description : "While wearing this elegant robe made from exquisite gray cloth adorned with silvery runes, I have advantage on saves against spells and magical effects and add +2 to both my spell save DC and spell attack rolls. Also, if I'm not wearing armor, it makes my base AC 15 + my Dexterity modifier.",
		prerequisite : "Requires attunement by a neutral sorcerer, warlock, or wizard",
		prereqeval : function(v) { return (classes.known.sorcerer || classes.known.warlock || classes.known.wizard) && !(/good|evil/i).test(What("Alignment")); }
	},
	"evil" : {
		description : "While wearing this elegant robe made from exquisite black cloth adorned with silvery runes, I have advantage on saves against spells and magical effects and add +2 to both my spell save DC and spell attack rolls. Also, if I'm not wearing armor, it makes my base AC 15 + my Dexterity modifier.",
		prerequisite : "Requires attunement by an evil sorcerer, warlock, or wizard",
		prereqeval : function(v) { return (classes.known.sorcerer || classes.known.warlock || classes.known.wizard) && (/evil/i).test(What("Alignment")); }
	}
};
MagicItemsList["robe of useful items"] = {
	name : "Robe of Useful Items",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "As an action while donned, I can detach one patch, causing it to become the thing it represents. The robe becomes ordinary if it runs out of patches. It has two each of: dagger, bullseye lantern (filled and lit), steel mirror, 10-ft pole, 50 ft hempen rope, sack. In addition, it has 4d4 patches that are determined by the DM.",
	descriptionFull : "This robe has cloth patches of various shapes and colors covering it. While wearing the robe. you can use an action to detach one of the patches, causing it to become the object or creature it represents. Once the last patch is removed, the robe becomes an ordinary garment.\n\nThe robe has two of each of the following patches:\n \u2022 Dagger\n \u2022 Bullseye lantern (filled and lit)\n \u2022 Steel mirror\n \u2022 10-foot pole\n \u2022 Hempen rope (50 feet, coiled)\n \u2022 Sack\n\nIn addition, the robe has 4d4 other patches. The DM chooses the patches or determines them randomly.\n\n" + toUni("d100\tPatch") + "\n01-08\tBag of 100 gp\n09-15\tSilver coffer (1 foot long, 6 inches wide and deep) worth 500 gp\n16-22\tIron door (up to 10 feet wide and 10 feet high, barred on one side of your choice), which you can place in an opening you can reach; it conforms to fit the opening, attaching and hinging itself\n23-30\t10 gems worth 100 gp each\n31-44\tWooden ladder (24 feet long)\n45-51\tA riding horse with saddle bags\n52-59\tPit (a cube 10 feet on a side), which you can place on the ground within 10 feet of you\n60-68\t4 potions of healing\n69-75\tRowboat (12 feet long)\n76-83\tSpell scroll containing one spell of 1st to 3rd level\n84-90\t2 mastiffs\n91-96\tWindow (2 feet by 4 feet, up to 2 feet deep), which you can place on a vertical surface you can reach\n97-00\tPortable ram",
	weight : 4,
	action : ["action", ""]
};
MagicItemsList["rod of absorption"] = {
	name : "Rod of Absorption",
	source : [["DMG2024", "-"]],
	type : "rod",
	rarity : "very rare",
	magicItemTable : "?",
	description : "As a reaction while holding this rod, I can use it to absorb a spell targeting only me, without an area of effect. It has no effect and its spell slot level is stored in the rod. I can expend these levels as if they are spell slots to power my own spells up to 5th-level. Once the rod has absorbed 50 levels, it can absorb no more.",
	descriptionLong : "As a reaction while holding this rod, I can use it to absorb a spell targeting only me and without an area of effect. The spell has no effect and its energy is stored in the rod. This energy has the same level as the spell when it was cast. Once the rod has absorbed 50 levels, it can absorb no more. I can expend these levels as if they are spell slots to power my own spells up to 5th-level and only for spell slot levels I have access to otherwise. For example, I can expend 3 levels to cast one of my spells using a 3rd-level spell slot. When the rod can't absorb any more levels and has no energy left, it becomes nonmagical.",
	descriptionFull : "While holding this rod, you can use your reaction to absorb a spell that is targeting only you and not with an area of effect. The absorbed spell's effect is canceled, and the spell's energy\u2014not the spell itself\u2014is stored in the rod. The energy has the same level as the spell when it was cast. The rod can absorb and store up to 50 levels of energy over the course of its existence. Once the rod absorbs 50 levels of energy, it can't absorb more. If you are targeted by a spell that the rod can't store, the rod has no effect on that spell.\n   When you become attuned to the rod, you know how many levels of energy the rod has absorbed over the course of its existence, and how many levels of spell energy it currently has stored.\n   If you are a spellcaster holding the rod, you can convert energy stored in it into spell slots to cast spells you have prepared or know. You can create spell slots only of a level equal to or lower than your own spell slots, up to a maximum of 5th level. You use the stored levels in place of your slots, but otherwise cast the spell as normal. For example, you can use 3 levels stored in the rod as a 3rd-level spell slot.\n   A newly found rod has 1d10 levels of spell energy stored in it already. A rod that can no longer absorb spell energy and has no energy remaining becomes nonmagical.",
	attunement : true,
	weight : 2,
	action : [["reaction", ""]],
	extraLimitedFeatures : [{
		name : "Rod of Absorption [Total Levels Absorbed]",
		usages : 50,
		recovery : "Never"
	}, {
		name : "Rod of Absorption [Stored Levels]",
		usages : "1d10",
		recovery : "Never"
	}],
};
MagicItemsList["rod of alertness"] = { // contains contributions by SoilentBrad
	name : "Rod of Alertness",
	source : [["DMG2024", "-"]],
	type : "rod",
	rarity : "very rare",
	magicItemTable : "?",
	description : "While holding this rod, I have adv. on initiative and Perception and can cast certain spells. As an action once per dawn, I can plant it in the ground, making it shed 60-ft radius bright light, dim for another 60 ft for 10 min. In the bright light, my allies and I gain +1 AC, +1 bonus to saves, and can sense invisible hostiles.",
	descriptionLong : "While holding this rod, I have advantage on my initiative and Wisdom (Perception) checks. As an action, I can use it to cast either Detect Evil and Good, Detect Magic, Detect Poison and Disease, or See Invisibility. As an action once per dawn, I can plant the rod's haft in the ground, making its head shed bright light in a 60-ft radius and dim light for another 60 ft. This lasts 10 minutes or until a creature pulls the rod from the ground as an action. While in the bright light, my allies and I gain +1 bonus to AC and saving throws and can sense the location of any invisible hostile creatures that are also within the bright light.",
	descriptionFull : "This rod has a flanged head and the following properties.\n   " + toUni("Alertness") + ". While holding the rod, you have advantage on Wisdom (Perception) checks and on rolls for initiative.\n   " + toUni("Spells") + ". While holding the rod, you can use an action to cast one of the following spells from it: Detect Evil and Good, Detect Magic, Detect Poison and Disease, or See Invisibility.\n   " + toUni("Protective Aura") + ". As an action, you can plant the haft end of the rod in the ground, whereupon the rod's head sheds bright light in a 60-foot radius and dim light for an additional 60 feet. While in that bright light, you and any creature that is friendly to you gain a +1 bonus to AC and saving throws and can sense the location of any invisible hostile creature that is also in the bright light.\n   The rod's head stops glowing and the effect ends after 10 minutes, or when a creature uses an action to pull the rod from the ground. This property can't be used again until the next dawn.",
	attunement : true,
	weight : 2,
	usages : 1,
	recovery : "dawn",
	limfeaname : "Rod of Alertness (Plant in Ground)",
	advantages : [["Initiative", true], ["Perception", true]],
	vision : [["Adv. on Perception checks", 0]],
	action : [["action", ""]],
	spellcastingBonus: [{
		name: "Robe of Alertness",
		spells: ["detect evil and good", "detect magic", "detect poison and disease", "see invisibility"],
		selection: ["detect evil and good", "detect magic", "detect poison and disease", "see invisibility"],
		times: 4
	}]
};
MagicItemsList["rod of lordly might"] = {
	name : "Rod of Lordly Might",
	source : [["DMG2024", "-"]],
	type : "rod",
	rarity : "legendary",
	magicItemTable : "?",
	description : "This rod functions as a +3 mace. As a bonus action, I can press one of the six buttons on the rod, changing it. The rod can also drain life, paralyze, and terrify, each once per dawn. See the notes page for what the different buttons do and how the functions work that can each be used once per dawn.",
	descriptionFull : "This rod has a flanged head, and it functions as a magic mace that grants a +3 bonus to attack and damage roll made with it. The rod has properties associated with six different buttons that are set in a row along the haft. It has three other properties as well, detailed below.\n   " + toUni("Six Buttons") + ". You can press one of the rod's six buttons as a bonus action. A button's effect lasts until you push a different button or until you push the same button again, which causes the rod to revert to its normal form.\n   If you press " + toUni("button 1") + ", the rod becomes a flame tongue as a fiery blade sprouts from the end opposite the rod's flanged head (you choose the type of sword).\n   If you press " + toUni("button 2") + ", the rod's flanged head folds down and two crescent-shaped blades spring out, transforming the rod into a magic battleaxe that grants a +3 bonus to attack and damage rolls made with it.\n   If you press " + toUni("button 3") + ", the rod's flanged head folds down, a spear point springs from the rod's tip, and the rod's handle lengthens into a 6-foot haft, transforming the rod into a magic spear that grants a +3 bonus to attack and damage rolls made with it.\n   If you press " + toUni("button 4") + ", the rod transforms into a climbing pole up to 50 feet long, as you specify. In surfaces as hard as granite, a spike at the bottom and three hooks at the top anchor the pole. Horizontal bars 3 inches long fold out from the sides, 1 foot apart, forming a ladder. The pole can bear up to 4,000 pounds. More weight or lack of solid anchoring causes the rod to revert to its normal form.\n   If you press " + toUni("button 5") + ", the rod transforms into a handheld battering ram and gram its user a +10 bonus to Strength checks made to break through doors, barricades, and other barriers.\n   If you press " + toUni("button 6") + ", the rod assumes or remains in its normal form and indicates magnetic north. (Nothing happens if this function of the rod is used in a location that has no magnetic north.) The rod also gives you knowledge of your approximate depth beneath the ground or your height above it.\n   " + toUni("Drain Life") + ". When you hit a creature with a melee attack using the rod, you can force the target to make a DC 17 Constitution saving throw. On a failure, the target rakes an extra 4d6 necrotic damage, and you regain a number of hit points equal to half that necrotic damage. This property can't be used again until the next dawn.\n   " + toUni("Paralyze") + ". When you hit a creature with a melee attack using the rod, you can force the target to make a DC 17 Strength saving throw. On a failure, the target is paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on a success. This property can't be used again until the next dawn.\n   " + toUni("Terrify") + ". While holding the rod, you can use an action to force each creature you can see within 30 feet of you to make a DC 17 Wisdom saving throw. On a failure, a target is frightened of you for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. This property can't be used again until the next dawn.",
	attunement : true,
	weight : 2,
	action: [["bonus action", " (press button)"], ["action", " (Terrify)"]],
	extraLimitedFeatures : [{
		name : "Rod of Lordly Might (Drain Life)",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Rod of Lordly Might (Paralyze)",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Rod of Lordly Might (Terrify)",
		usages : 1,
		recovery : "dawn"
	}],
	weaponOptions : [{
		baseWeapon : "battleaxe",
		regExpSearch : /^(?=.*rod)(?=.*lordly)(?=.*might)(?=.*axe).*$/i,
		name : "Rod of Lordly Might (Axe)",
		source : [["SRD", 240], ["D", 196]],
		modifiers : [3,3]
	}, {
		baseWeapon : "mace",
		regExpSearch : /^(?=.*rod)(?=.*lordly)(?=.*might)(?=.*mace).*$/i,
		name : "Rod of Lordly Might (Mace)",
		source : [["SRD", 240], ["D", 196]],
		modifiers : [3,3]
	}, {
		baseWeapon : "spear",
		regExpSearch : /^(?=.*rod)(?=.*lordly)(?=.*might)(?=.*spear).*$/i,
		name : "Rod of Lordly Might (Spear)",
		source : [["SRD", 240], ["D", 196]],
		modifiers : [3,3]
	}],
	toNotesPage : [{
		name : "Buttons and Other Functions",
		note : [
			"The rod of lordly might has a flanged head, and it functions as a magic mace that grants a +3 bonus to attack and damage roll made with it.",
			"As a bonus action, I can press one of the six different buttons that are set in a row along the haft of the rod. A button's effect lasts until a different button is pushed, or until the same button is pushed again, whereupon it reverts to its normal form.",
			"\u2022 1st button. A fiery blade sprouts from the end opposite the rod's flanged head. These flames shed bright light in a 40-ft radius and dim light for an additional 40 ft. It now functions as a sword (I can choose which type) that deals an extra 2d6 fire damage to any target it hits. [Write \"lordly might\" in the name of a sword in the attack section to have this damage added to the attack's description, for example \"Rod of Lordly Might (Greatsword)\".]",
			"\u2022 2nd button. The rod's flanged head folds down and two crescent-shaped blades spring out, transforming the rod into a magic battleaxe that grants a +3 bonus to attack and damage rolls made with it.",
			"\u2022 3rd button. The rod's flanged head folds down, a spear point springs from the rod's tip, and the rod's handle lengthens into a 6-foot haft, transforming the rod into a magic spear that grants a +3 bonus to attack and damage rolls made with it.",
			"\u2022 4th button. The rod transforms into a climbing pole up to 50 ft long, as I specify. In surfaces as hard as granite, a spike at the bottom and three hooks at the top anchor the pole. Horizontal bars 3 inch long fold out from the sides, 1 ft apart, forming a ladder. The pole can bear up to 4000 lb. More weight or lack of solid anchoring causes the rod to revert to its normal form.",
			"\u2022 5th button. The rod transforms into a handheld battering ram and gram its user a +10 bonus to Strength checks made to break through doors, barricades, and other barriers.",
			"\u2022 6th button. The rod assumes or remains in its normal form and indicates magnetic north. (Nothing happens if this function of the rod is used in a location that has no magnetic north.) The rod also gives me knowledge of my approximate depth beneath the ground or my height above it.",
			"The rod also has three functions that work independent of the buttons.",
			"\u2022 Drain Life. When I hit a creature with a melee attack using the rod, I can force the target to make a DC 17 Constitution saving throw. On a failure, the target rakes an extra 4d6 necrotic damage, and I regain a number of hit points equal to half that necrotic damage. This property can't be used again until the next dawn.",
			"\u2022 Paralyze. When I hit a creature with a melee attack using the rod, I can force the target to make a DC 17 Strength saving throw. On a failure, the target is paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on a success. This property can't be used again until the next dawn.",
			"\u2022 Terrify. As an action while holding the rod, I can force each creature I can see within 30 ft of me to make a DC 17 Wisdom saving throw. On a failure, a target is frightened of me for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. This property can't be used again until the next dawn."
		]
	}],
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*lordly)(?=.*might).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+2d6 fire damage';
				}
			},
			'If I include the words "Lordly Might" in a the name of a sword, it will be treated as the magic weapon Flame Tongue. It adds +2d6 fire damage on a hit and shines light.'
		]
	}
};
MagicItemsList["rod of resurrection"] = {
	name : "Rod of Resurrection",
	source : [["DMG2024", "-"]],
	type : "rod",
	rarity : "legendary",
	magicItemTable : "?",
	description : "This rod has 5 charges and regains 1 expended charge daily at dawn. While I hold it, I can use an action to expend 1 charge and cast Heal from it, or expend 5 charges and cast Resurrection from it. If the rod is reduced to 0 charges, roll a d20. On a 1, the rod disappears in a burst of radiance.",
	descriptionFull : "The rod has 5 charges. While you hold it, you can use an action to cast one of the following spells from it: Heal (expends 1 charge) or Resurrection (expends 5 charges).\n   The rod regains 1 expended charge daily at dawn. If the rod is reduced to 0 charges, roll a d20. On a 1, the rod disappears in a burst of radiance.",
	attunement : true,
	weight : 2,
	prerequisite : "Requires attunement by a cleric, druid, or paladin",
	prereqeval : function(v) { return classes.known.cleric || classes.known.druid || classes.known.paladin ? true : false; },
	usages : 5,
	recovery : "dawn",
	additional : "regains 1",
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "1 charge",
		spells : ["heal"],
		selection : ["heal"],
		firstCol : 1
	}, {
		name : "5 charges",
		spells : ["resurrection"],
		selection : ["resurrection"],
		firstCol : 5
	}],
	spellChanges : {
		"resurrection" : {
			time : "1 a",
			changes : "Casting time is only 1 action instead of 1 hour."
		}
	}
};
MagicItemsList["rod of rulership"] = {
	name : "Rod of Rulership",
	source : [["DMG2024", "-"]],
	type : "rod",
	rarity : "rare",
	magicItemTable : "?",
	description : "As an action once per dawn, I can use this rod to have chosen creatures I can see within 120 ft make a DC 15 Wis save or be charmed by me for 8 hours. While charmed in this way, a target regards me as its trusted leader. It stops being charmed if my allies or I harm it or it is commanded to go against its nature.",
	descriptionFull : "You can use an action to present the rod and command obedience from each creature of your choice that you can see within 120 feet of you. Each target must succeed on a DC 15 Wisdom saving throw or be charmed by you for 8 hours. While charmed in this way, the creature regards you as its trusted leader. If harmed by you or your companions, or commanded to do something contrary to its nature, a target ceases to be charmed in this way. The rod can't be used again until the next dawn.",
	attunement : true,
	weight : 2,
	action : [["action", ""]],
	usages : 1,
	recovery : "dawn"
};
MagicItemsList["rod of security"] = {
	name : "Rod of Security",
	source : [["DMG2024", "-"]],
	type : "rod",
	rarity : "very rare",
	magicItemTable : "?",
	description : "As an action once per 10 days, I can transport myself and up to 199 willing others I can see to an extraplanar paradise for 200 days divided by the number of creatures or until I end it as an action. Creatures within the paradise don't age, have enough to eat and drink, and regain HP every hour as if having spent 1 HD.",
	descriptionFull : "While holding this rod, you can use an action to activate it. The rod then instantly transports you and up to 199 other willing creatures you can see to a paradise that exists in an extraplanar space. You choose the form that the paradise takes. It could be a tranquil garden, lovely glade, cheery tavern, immense palace, tropical island, fantastic carnival, or whatever else you can imagine. Regardless of its nature, the paradise contains enough water and food to sustain its visitors. Everything else that can be interacted with inside the extraplanar space can exist only there. For example, a flower picked from a garden in the paradise disappears if it is taken outside the extraplanar space.\n   For each hour spent in the paradise, a visitor regains hit points as if it had spent 1 Hit Die. Also, creatures don't age while in the paradise, although time passes normally. Visitors can remain in the paradise for up to 200 days divided by the number of creatures present (round down).\n   When the time runs out or you use an action to end it, all visitors reappear in the location they occupied when you activated the rod, or an unoccupied space nearest that location. The rod can't be used again until ten days have passed.",
	weight : 2,
	usages: 1,
	recovery: "10 days",
	action : [["action", ""]]
};
MagicItemsList["rod of the pact keeper, +1, +2, or +3"] = {
	name : "Rod of the Pact Keeper, +1, +2, or +3",
	source : [["DMG2024", "-"]],
	type : "rod",
	description : "While holding this rod, I gain a bonus to spell attack rolls and to the saving throw DCs of my warlock spells, determined by the rod's rarity: uncommon (+1), rare (+2), or very rare (+3). As an action once per long rest, I can regain one warlock spell slot while holding the rod.",
	descriptionFull : "While holding this rod, you gain a bonus to spell attack rolls and to the saving throw DCs of your warlock spells. The bonus is determined by the rod's rarity: uncommon (+1), rare (+2), or very rare (+3).\n   In addition, you can regain one warlock spell slot as an action while holding the rod. You can't use this property again until you finish a long rest.",
	attunement : true,
	weight : 2,
	prerequisite : "Requires attunement by a warlock",
	prereqeval : function(v) { return classes.known.warlock; },
	usages : 1,
	recovery : "long rest",
	limfeaname : "Rod of the Pact Keeper (warlock spell slot)",
	action : [["action", ""]],
	allowDuplicates : true,
	choices : ["+1 Rod (uncommon)", "+2 Rod (rare)", "+3 Rod (very rare)"],
	"+1 rod (uncommon)" : {
		name : "Rod of the Pact Keeper +1",
		rarity : "uncommon",
		magicItemTable : "?",
		description : "While holding this rod, I gain a +1 bonus to spell attack rolls and to the saving throw DCs of my warlock spells. As an action once per long rest, I can regain one warlock spell slot while holding the rod.",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && spellcasters.indexOf('warlock') !== -1) return 1;
				},
				"While holding the Rod of the Pact Keeper, I gain a +1 bonus to spell attack rolls and to the saving throw DCs of my warlock spells."
			]
		}
	},
	"+2 rod (rare)" : {
		name : "Rod of the Pact Keeper +2",
		rarity : "rare",
		magicItemTable : "?",
		description : "While holding this rod, I gain a +2 bonus to spell attack rolls and to the saving throw DCs of my warlock spells. As an action once per long rest, I can regain one warlock spell slot while holding the rod.",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && spellcasters.indexOf('warlock') !== -1) return 2;
				},
				"While holding the Rod of the Pact Keeper, I gain a +2 bonus to spell attack rolls and to the saving throw DCs of my warlock spells."
			]
		}
	},
	"+3 rod (very rare)" : {
		name : "Rod of the Pact Keeper +3",
		rarity : "very rare",
		magicItemTable : "?",
		description : "While holding this rod, I gain a +3 bonus to spell attack rolls and to the saving throw DCs of my warlock spells. As an action once per long rest, I can regain one warlock spell slot while holding the rod.",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && spellcasters.indexOf('warlock') !== -1) return 3;
				},
				"While holding the Rod of the Pact Keeper, I gain a +3 bonus to spell attack rolls and to the saving throw DCs of my warlock spells."
			]
		}
	}
};
MagicItemsList["rope of climbing"] = {
	name : "Rope of Climbing",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "This 60 ft silk rope can hold 3000 lb. As an action while I hold one end of it, I can animate it with its command word. Then, as a bonus action, I can command its other end to: start/stop moving (10 ft per turn), (un)fasten itself, coil itself, or (un)knot itself (50 ft length, adv. to climb it). It has AC 20, 20 HP, heals 1 HP/5 min.",
	descriptionLong : "This 60-ft length of silk rope can hold up to 3000 lb. As an action while holding one end of the rope, I can speak the command word to animate it. Then, as a bonus action, I can command the other end to move 10 ft to a chosen destination up to its maximum length away, moving 10 ft on each of my turns until it reaches it. I can also use the bonus action to tell it to stop moving, to fasten itself securely, to unfasten itself, to knot or unknot itself, or to coil itself for carrying. While knotted, the rope shortens to 50 ft and grants advantage to climb it. The rope has AC 20 and 20 HP, regaining 1 HP per 5 minutes.",
	descriptionFull : "This 60-foot length of silk rope weighs 3 pounds and can hold up to 3,000 pounds. If you hold one end of the rope and use an action to speak the command word, the rope animates. As a bonus action, you can command the other end to move toward a destination you choose. That end moves 10 feet on your turn when you first command it and 10 feet on each of your turns until reaching its destination, up to its maximum length away, or until you tell it to stop. You can also tell the rope to fasten itself securely to an object or to unfasten itself, to knot or unknot itself, or to coil itself for carrying.\n   If you tell the rope to knot, large knots appear at 1-foot intervals along the rope. While knotted, the rope shortens to a 50-foot length and grants advantage on checks made to climb it.\n   The rope has AC 20 and 20 hit points. It regains 1 hit point every 5 minutes as long as it has at least 1 hit point. If the rope drops to 0 hit points, it is destroyed.",
	weight : 3,
	action : [["action", " (animate)"], ["bonus action", " (move/fasten/knot/coil)"]]
};
MagicItemsList["rope of entanglement"] = {
	name : "Rope of Entanglement",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "As an action while I hold one end of this 30 ft rope, I can speak its command word to have a creature I can see within 20 ft make a DC 15 Dex save or be restrained by the rope. I can release it as a bonus action. The creature can, as an action, escape with a DC 15 Dex/Str check. The rope has AC 20, 20 HP, heals 1 HP/5 min.",
	descriptionFull : "This rope is 30 feet long and weighs 3 pounds. If you hold one end of the rope and use an action to speak its command word, the other end darts forward to entangle a creature you can see within 20 feet of you. The target must succeed on a DC 15 Dexterity saving throw or become restrained.\n   You can release the creature by using a bonus action to speak a second command word. A target restrained by the rope can use an action to make a DC 15 Strength or Dexterity check (target's choice). On a success, the creature is no longer restrained by the rope.\n   The rope has AC 20 and 20 hit points. It regains 1 hit point every 5 minutes as long as it has at least 1 hit point. If the rope drops to 0 hit points, it is destroyed.",
	weight : 3,
	action : [["action", " (entangle)"], ["bonus action", " (release)"]],
	weaponsAdd : ["Rope of Entanglement"],
	weaponOptions : {
		regExpSearch : /^(?=.*rope)(?=.*entanglement).*$/i,
		name : "Rope of Entanglement",
		source : [["SRD", 241], ["D", 197]],
		ability : 0,
		type : "Magic Item",
		damage : ["Dex save", "", "Restrained"],
		range : "20 ft",
		description : "Dexterity saving throw or restrained; DC 15 Strength or Dexterity check to escape",
		abilitytodamage : false,
		weight : 3,
		modifiers : [7, 0],
		dc : true
	}
};
MagicItemsList["rope of mending"] = {
	name : "Rope of Mending",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "I can cut this 50-foot coil of hempen rope into any number of smaller pieces, and then use an action to speak a command word and cause the pieces to knit back together. The pieces must be in contact with each other and not otherwise in use. A rope of mending is forever shortened if a section of it is lost.",
	descriptionFull : "You can cut this 50-foot coil of hempen rope into any number of smaller pieces, and then use an action to speak a command word and cause the pieces to knit back together. The pieces must be in contact with each other and not otherwise in use. A rope of mending is forever shortened if a section of it is lost or destroyed.",
	action : [["action", ""]],
	weight : 10
};
MagicItemsList["ruby of the war mage"] = {
	name : "Ruby of the War Mage",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "By pressing this 1-inch-diameter ruby etched with eldritch runes to a simple or martial weapon for 10 minutes, it attaches itself to the weapon. I can then use that weapon as a spellcasting focus. Once attached, it can't be removed unless my attunement ends, I detach it as an action, or the weapon is destroyed.",
	descriptionFull : "Etched with eldritch runes, this 1-inch-diameter ruby allows you to use a simple or martial weapon as a spellcasting focus for your spells. For this property to work, you must attach the ruby to the weapon by pressing the ruby against it for at least 10 minutes. Thereafter, the ruby can't be removed unless you detach it as an action or the weapon is destroyed. Not even an Antimagic Field causes it to fall off. The ruby does fall off the weapon if your attunement to the ruby ends.",
	attunement : true,
	prerequisite : "Requires attunement by a spellcaster",
	prereqeval : function(v) { return v.isSpellcaster; }
};
MagicItemsList["saddle of the cavalier"] = {
	name : "Saddle of the Cavalier",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While in this saddle on a mount, I can't be dismounted against my will if I am conscious, and attack rolls against the mount have disadvantage.",
	descriptionFull : "While in this saddle on a mount, you can't be dismounted against your will if you're conscious, and attack rolls against the mount have disadvantage.",
	weight : 25
};
MagicItemsList["scarab of protection"] = {
	name : "Scarab of Protection",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "legendary",
	magicItemTable : "?",
	description : "This beetle-shaped medallion gives me advantage on saves against spells. If I fail a save against a necromancy spell or an effect from an undead creature, I can use my reaction to expend 1 charge and succeed on the save instead. The scarab has 12 charges and crumbles into powder when the last is used.",
	descriptionFull : "If you hold this beetle-shaped medallion in your hand for 1 round, an inscription appears on its surface revealing its magical nature. It provides two benefits while it is on your person:\n \u2022 You have advantage on saving throws against spells.\n \u2022 The scarab has 12 charges. If you fail a saving throw against a necromancy spell or a harmful effect originating from an undead creature, you can use your reaction to expend 1 charge and turn the failed save into a successful one. The scarab crumbles into powder and is destroyed when its last charge is expended.",
	attunement : true,
	savetxt : { adv_vs : ["spells"] },
	usages : 12,
	recovery : "Never",
	action : [["reaction", ""]]
};
MagicItemsList["scimitar of speed"] = {
	name : "Scimitar of Speed",
	source : [["DMG2024", "-"]],
	type : "weapon (scimitar)",
	rarity : "very rare",
	magicItemTable : "?",
	description : "I gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, I can make one attack with it as a bonus action on each of my turns.",
	descriptionFull : "You gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, you can make one attack with it as a bonus action on each of your turns.",
	attunement : true,
	weight : 3,
	action : [["bonus action", ""]],
	weaponsAdd : ["Scimitar of Speed"],
	weaponOptions : {
		baseWeapon : "scimitar",
		regExpSearch : /^(?=.*scimitar)(?=.*speed).*$/i,
		name : "Scimitar of Speed",
		source : [["SRD", 241], ["D", 199]],
		description : "Finesse, light; Extra attack as bonus action",
		modifiers : [2, 2]
	}
};
MagicItemsList["scroll of protection"] = {
	name : "Scroll of Protection",
	source : [["DMG2024", "-"]],
	type : "scroll",
	rarity : "rare",
	magicItemTable : "?",
	description : "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 min that moves with me and stops a creature type from entering or affecting anything within. As an action, a creature can make a DC 15 Cha check to stop being affected.",
	descriptionFull : "Each scroll of protection works against a specific type of creature chosen by the DM or determined randomly by rolling on the following table.\n\n" + [
		toUni("d100\tCreature Type\td100\tCreature Type"),
		"01-10\tAberrations\t41-50\tFey",
		"11-20\tBeasts\t\t51-75\tFiends",
		"21-30\tCelestials   \t76-80\tPlants",
		"31-40\tElementals\t81-00\tUndead",
	].join("\n") + "\nUsing an action to read the scroll encloses you in an invisible barrier that extends from you to form a 5-foot-radius, 10-foot-high cylinder. For 5 minutes, this barrier prevents creatures of the specified type from entering or affecting anything within the cylinder.\n   The cylinder moves with you and remains centered on you. However, if you move in such a way that an aberration would be inside the cylinder, the effect ends.\n   A creature can attempt to overcome the barrier by using an action to make a DC 15 Charisma check. On a success, the creature ceases to be affected by the barrier.",
	choices : ["Aberrations", "Beasts", "Celestials", "Elementals", "Fey", "Fiends", "Plants", "Undead"],
	"aberrations" : {
		name : "Scroll of Protection from Aberrations",
		description : "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 min that moves with me and stops aberrations from entering or affecting anything within. As an action, a creature can make a DC 15 Cha check to stop being affected. If I move so the barrier includes an aberration, it ends."
	},
	"beasts" : {
		name : "Scroll of Protection from Beasts",
		description : "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 minutes that moves with me and stops beasts from entering or affecting anything within. As an action, a creature can make a DC 15 Charisma check to stop being affected. If I move so the barrier includes a beast, it ends."
	},
	"celestials" : {
		name : "Scroll of Protection from Celestials",
		description : "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 min that moves with me and stops celestials from entering or affecting anything within. As an action, a creature can make a DC 15 Cha check to stop being affected. If I move so the barrier includes a celestial, it ends."
	},
	"elementals" : {
		name : "Scroll of Protection from Elementals",
		description : "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 min that moves with me and stops elementals from entering or affecting anything within. As an action, a creature can make a DC 15 Cha check to stop being affected. If I move so the barrier includes an elemental, it ends."
	},
	"fey" : {
		name : "Scroll of Protection from Fey",
		description : "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 minutes that moves with me and stops fey from entering or affecting anything within. As an action, a creature can make a DC 15 Charisma check to stop being affected. If I move so the barrier includes a fey, it ends."
	},
	"fiends" : {
		name : "Scroll of Protection from Fiends",
		description : "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 minutes that moves with me and stops fiends from entering or affecting anything within. As an action, a creature can make a DC 15 Charisma check to stop being affected. If I move so the barrier includes a fiend, it ends."
	},
	"plants" : {
		name : "Scroll of Protection from Plants",
		description : "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 minutes that moves with me and stops plants from entering or affecting anything within. As an action, a creature can make a DC 15 Charisma check to stop being affected. If I move so the barrier includes a plant, it ends."
	},
	"undead" : {
		name : "Scroll of Protection from Undead",
		description : "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 minutes that moves with me and stops undead from entering or affecting anything within. As an action, a creature can make a DC 15 Cha check to stop being affected. If I move so the barrier includes a undead, it ends."
	}
};
MagicItemsList["scroll of titan summoning"] = {
};
MagicItemsList["sending stones"] = {
	name : "Sending Stones",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While I touch one of this pair of stones, I can use an action to cast Sending, targeting the bearer of the other stone. If no creature has the other stone, the spell won't cast. Once it is cast, neither stone can be used again until the next dawn. Sending allows each bearer to communicate up to 25 words.",
	descriptionFull : "Sending stones come in pairs, with each smooth stone carved to match the other so the pairing is easily recognized. While you touch one stone, you can use an action to cast the Sending spell from it. The target is the bearer of the other stone. If no creature bears the other stone, you know that fact as soon as you use the stone and don't cast the spell.\n   Once Sending is cast through the stones, they can't be used again until the next dawn. If one of the stones in a pair is destroyed, the other one becomes nonmagical.",
	spellcastingBonus : [{
		name : "To other stone bearer only",
		spells : ["sending"],
		selection : ["sending"],
		firstCol : "oncelr"
	}],
	usages : 1, 
	recovery : "dawn",
	spellChanges : {
		"sending" : {
			description : "Send a 25 word message to the bearer of the other Sending Stone, who can respond with 25 words",
			changes : "Using one stone of a pair of Sending Stones, the spell can only target the bearer of the other stone of the pair."
		}
	}
};
MagicItemsList["sentinel shield"] = {
	name : "Sentinel Shield",
	source : [["DMG2024", "-"]],
	type : "shield",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While holding this shield, I have advantage on initiative rolls and Wisdom (Perception) checks. The shield is emblazoned with a symbol of an eye.",
	descriptionFull : "While holding this shield, you have advantage on initiative rolls and Wisdom (Perception) checks. The shield is emblazoned with a symbol of an eye.",
	weight : 6,
	shieldAdd : "Sentinel Shield",
	advantages : [["Initiative", true], ["Perception", true]],
	vision : [["Adv. on Perception checks", 0]]
};
MagicItemsList["shield, +1, +2, or +3"] = {
	name : "Shield, +1, +2, or +3",
	source : [["DMG2024", "-"]],
	type : "shield",
	description : "While holding this shield, I have a bonus to AC. This bonus is in addition to the shield's normal bonus to AC. The bonus is determined by the rarity of the shield: uncommon (+1), rare (+2), or very rare (+3).",
	descriptionFull : "While holding this shield, you have a bonus to AC. This bonus is in addition to the shield's normal bonus to AC. The bonus is determined by the rarity of the shield: uncommon (+1), rare (+2), or very rare (+3).",
	allowDuplicates : true,
	choices : ["+1 Shield (uncommon)", "+2 Shield (rare)", "+3 Shield (very rare)"],
	"+1 shield (uncommon)" : {
		name : "Shield +1",
		nameTest : "+1 Shield",
		rarity : "uncommon",
		magicItemTable : "?",
		description : "While holding this shield, I have a +1 bonus to AC. This bonus is in addition to the shield's normal bonus to AC.",
		allowDuplicates : true,
		shieldAdd : "+1 Shield"
	},
	"+2 shield (rare)" : {
		name : "Shield +2",
		nameTest : "+2 Shield",
		rarity : "rare",
		magicItemTable : "?",
		description : "While holding this shield, I have a +2 bonus to AC. This bonus is in addition to the shield's normal bonus to AC.",
		allowDuplicates : true,
		shieldAdd : "+2 Shield"
	},
	"+3 shield (very rare)" : {
		name : "Shield +3",
		nameTest : "+3 Shield",
		rarity : "very rare",
		magicItemTable : "?",
		description : "While holding this shield, I have a +3 bonus to AC. This bonus is in addition to the shield's normal bonus to AC.",
		allowDuplicates : true,
		shieldAdd : "+3 Shield"
	}
};
MagicItemsList["shield of expression"] = {
	name : "Shield of Expression",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "shield",
	rarity : "common",
	description : "The front of this shield is shaped in the likeness of a face. As a bonus action while bearing the shield, I can have the shield alter the expression of the face.",
	descriptionFull : "The front of this shield is shaped in the likeness of a face. While bearing the shield, you can use a bonus action to alter the face's expression.",
	weight : 6,
	shieldAdd : "Shield of Expression",
	action : [["bonus action", ""]]
};
MagicItemsList["shield of missile attraction"] = {
	name : "Shield of Missile Attraction",
	source : [["DMG2024", "-"]],
	type : "shield",
	rarity : "rare",
	magicItemTable : "?",
	description : "While holding this shield, I have resistance to damage from ranged weapon attacks. Once attuned to it, I am cursed until I am the target of Remove Curse or similar magic. Whenever a ranged weapon attack is made against a target within 10 ft of me, the curse causes me to become the target instead.",
	descriptionFull : "While holding this shield, you have resistance to damage from ranged weapon attacks.\n   " + toUni("Curse") + ". This shield is cursed. Attuning to it curses you until you are targeted by the Remove Curse spell or similar magic. Removing the shield fails to end the curse on you. Whenever a ranged weapon attack is made against a target within 10 feet of you, the curse causes you to become the target instead.",
	attunement : true,
	weight : 6,
	shieldAdd : "Shield of Missile Attraction",
	cursed : true,
	dmgres : ["Ranged Weapons"]
};
MagicItemsList["shield of the cavalier"] = {
};
MagicItemsList["silvered weapon"] = {
};
MagicItemsList["slippers of spider climbing"] = {
	name : "Slippers of Spider Climbing",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While I wear these light shoes, I can move up, down, and across vertical surfaces and upside down along ceilings, while leaving my hands free. I have a climbing speed equal to my walking speed. However, the slippers don't allow me to move this way on a slippery surface, such as one covered by ice or oil.",
	descriptionFull : "While you wear these light shoes, you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free. You have a climbing speed equal to your walking speed. However, the slippers don't allow you to move this way on a slippery surface, such as one covered by ice or oil.",
	attunement : true,
	speed : { climb : { spd : "walk", enc : "walk" } }
};
MagicItemsList["smoldering armor"] = {
	name : "Smoldering Armor",
	nameTest : "Smoldering",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "armor (light, medium, or heavy)",
	rarity : "common",
	description : "Wisps of harmless, odorless smoke rise from this armor while it is worn.",
	descriptionFull : "Wisps of harmless, odorless smoke rise from this armor while it is worn.",
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "suffix",
		descriptionChange : ["prefix", "armor"]
	}
};
MagicItemsList["sovereign glue"] = {
	name : "Sovereign Glue",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "legendary",
	magicItemTable : "?",
	description : "This viscous, milky-white substance is stored in a jar or flask, coated on the inside with oil of slipperiness. One ounce of the glue can cover a 1-ft square surface, taking 1 minute to set. Once it sets, the bond it creates can be broken only by universal solvent, oil of etherealness, or with a Wish spell.",
	descriptionFull : "This viscous, milky-white substance can form a permanent adhesive bond between any two objects. It must be stored in a jar or flask that has been coated inside with oil of slipperiness. When found, a container contains 1d6+1 ounces.\n   One ounce of the glue can cover a 1-foot square surface. The glue takes 1 minute to set. Once it has done so, the bond it creates can be broken only by the application of universal solvent or oil of etherealness, or with a Wish spell.",
	usages : "1d6+1",
	recovery : "Never"
};
MagicItemsList["spellguard shield"] = {
	name : "Spellguard Shield",
	source : [["DMG2024", "-"]],
	type : "shield",
	rarity : "very rare",
	magicItemTable : "?",
	description : "While holding this shield, I have advantage on saving throws against spells and other magical effects, and spell attacks have disadvantage against me.",
	descriptionFull : "While holding this shield, you have advantage on saving throws against spells and other magical effects, and spell attacks have disadvantage against you.",
	attunement : true,
	weight : 6,
	shieldAdd : "Spellguard Shield",
	savetxt : { adv_vs : ["spells", "magical effects"] }
};
MagicItemsList["spell scroll"] = {
	name : "Spell Scroll",
	source : [["DMG2024", "-"]],
	type : "scroll",
	description : "If the spell on this scroll is on my class' spell list(s), I can cast it with its normal casting time, but have the scroll crumble to dust. If the spell is of a higher level than I can cast, I need to make an ability check using my spellcasting ability. The DC for this, the spell save, and its attack modifier depend on its level.",
	descriptionFull : "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell's level. On a failed check, the spell disappears from the scroll with no other effect.\n   The level of the spell on the scroll determines the spell's saving throw DC and attack bonus, as well as the scroll's rarity, as shown below.\n\n" + toUni("Level\tRarity\t\tDC\tTo hit") + [
		"\nCantrip\tCommon  \t13\t+5",
		"1st  \tCommon  \t13\t+5",
		"2nd  \tUncommon\t13\t+5",
		"3rd  \tUncommon\t15\t+7",
		"4th  \tRare\t\t15\t+7",
		"5th  \tRare\t\t17\t+9",
		"6th  \tVery rare    \t17\t+9",
		"7th  \tVery rare    \t18\t+10",
		"8th  \tVery rare    \t18\t+10",
		"9th  \tLegendary  \t19\t+11"
	].join("\n") + "\n\nA wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on an Intelligence (Arcana) check with a DC equal to 10 + the spell's level. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
	allowDuplicates : true,
	calcChanges : {
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if ((/^spell scroll/i).test(spName)) {
					if (!spellObj.components) spellObj.components = "";
					spellObj.components = (spellObj.components.replace(/,?[RM][\u0192\u2020]?/ig, '') + ",M\u0192").replace(/^,+/, '');
					spellObj.compMaterial = "Spells cast from a spell scroll don't require any material components other than the spell scroll itself.";
					spellObj.ritual = false;
					["description", "descriptionMetric", "descriptionShorter", "descriptionShorterMetric"].forEach (function (attr) {
						if (!spellObj[attr]) return;
						spellObj[attr] = spellObj[attr].replace(/ \(\d+k? ?gp( cons\.?)?\)/i, '');
					});
					return true;
				}
			},
			"When casting a spell using a Spell Scroll, no material components are needed other than the spell scroll itself. They also can't be cast as a ritual."
		]
	},
	choices : ["Cantrip", "1st-level", "2nd-level", "3rd-level", "4th-level", "5th-level", "6th-level", "7th-level", "8th-level", "9th-level", "mixed levels"],
	"cantrip" : {
		name : "Spell Scroll (cantrip)",
		sortname : "Spell Scroll  (cantrip)",
		rarity : "common",
		magicItemTable : "?",
		description : "If the cantrip on this scroll is on my class' spell list(s), I can cast it, having the scroll crumble to dust afterwards. If I can't cast any cantrips, I need to make a DC 10 check with my spellcasting ability to use this scroll or it is destroyed if I fail. The cantrips is cast with DC 13 and a +5 attack modifier.",
		descriptionFull : "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 13 and an attack bonus of +5.",
		extraTooltip : "AL: can always be bought for 25 gp",
		fixedDC : 13,
		spellFirstColTitle : "Us", // used
		spellcastingBonus : {
			level : [0,0],
			psionic : false,
			times : 20,
			firstCol : "checkbox",
			magicItemComponents : false
		}
	},
	"1st-level" : {
		rarity : "common",
		magicItemTable : "?",
		description : "If the 1st-level spell on this scroll is on my class' spell list(s), I can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that I can't yet cast, I need to make a DC 11 check with my spellcasting ability to use this scroll or it is destroyed if I fail. The spell is cast with DC 13 and a +5 attack modifier.",
		descriptionFull : "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 11. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 13 and an attack bonus of +5.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 11 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		extraTooltip : "AL: can always be bought for 75 gp",
		fixedDC : 13,
		spellFirstColTitle : "Us", // used
		spellcastingBonus : {
			level : [1,1],
			psionic : false,
			times : 20,
			firstCol : "checkbox",
			magicItemComponents : false
		}
	},
	"2nd-level" : {
		rarity : "uncommon",
		magicItemTable : "?",
		description : "If the 2nd-level spell on this scroll is on my class' spell list(s), I can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that I can't yet cast, I need to make a DC 12 check with my spellcasting ability to use this scroll or destroy it if I fail. The spell is cast with DC 13 and a +5 attack modifier.",
		descriptionFull : "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 12. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 13 and an attack bonus of +5.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 12 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		extraTooltip : "AL: can always be bought for 150 gp",
		fixedDC : 13,
		spellFirstColTitle : "Us", // used
		spellcastingBonus : {
			level : [2,2],
			psionic : false,
			times : 20,
			firstCol : "checkbox",
			magicItemComponents : false
		}
	},
	"3rd-level" : {
		rarity : "uncommon",
		magicItemTable : "?",
		description : "If the 3rd-level spell on this scroll is on my class' spell list(s), I can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that I can't yet cast, I need to make a DC 13 check with my spellcasting ability to use this scroll or it is destroyed if I fail. The spell is cast with DC 15 and a +7 attack modifier.",
		descriptionFull : "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 13. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 15 and an attack bonus of +7.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 13 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		extraTooltip : "AL: can always be bought for 300 gp",
		fixedDC : 15,
		spellFirstColTitle : "Us", // used
		spellcastingBonus : {
			level : [3,3],
			psionic : false,
			times : 20,
			firstCol : "checkbox",
			magicItemComponents : false
		}
	},
	"4th-level" : {
		rarity : "rare",
		magicItemTable : "?",
		description : "If the 4th-level spell on this scroll is on my class' spell list(s), I can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that I can't yet cast, I need to make a DC 14 check with my spellcasting ability to use this scroll or it is destroyed if I fail. The spell is cast with DC 15 and a +7 attack modifier.",
		descriptionFull : "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 14. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 15 and an attack bonus of +7.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 14 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		extraTooltip : "AL: can always be bought for 500 gp",
		fixedDC : 15,
		spellFirstColTitle : "Us", // used
		spellcastingBonus : {
			level : [4,4],
			psionic : false,
			times : 20,
			firstCol : "checkbox",
			magicItemComponents : false
		}
	},
	"5th-level" : {
		rarity : "rare",
		magicItemTable : "?",
		description : "If the 5th-level spell on this scroll is on my class' spell list(s), I can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that I can't yet cast, I need to make a DC 15 check with my spellcasting ability to use this scroll or it is destroyed if I fail. The spell is cast with DC 17 and a +9 attack modifier.",
		descriptionFull : "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 15. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 17 and an attack bonus of +9.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 15 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		extraTooltip : "AL: can always be bought for 1000 gp",
		fixedDC : 17,
		spellFirstColTitle : "Us", // used
		spellcastingBonus : {
			level : [5,5],
			psionic : false,
			times : 20,
			firstCol : "checkbox",
			magicItemComponents : false
		}
	},
	"6th-level" : {
		rarity : "very rare",
		magicItemTable : "?",
		description : "If the 6th-level spell on this scroll is on my class' spell list(s), I can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that I can't yet cast, I need to make a DC 16 check with my spellcasting ability to use this scroll or it is destroyed if I fail. The spell is cast with DC 17 and a +9 attack modifier.",
		descriptionFull : "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 16. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 17 and an attack bonus of +9.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 16 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		fixedDC : 17,
		spellFirstColTitle : "Us", // used
		spellcastingBonus : {
			level : [6,6],
			psionic : false,
			times : 20,
			firstCol : "checkbox",
			magicItemComponents : false
		}
	},
	"7th-level" : {
		rarity : "very rare",
		magicItemTable : "?",
		description : "If the 7th-level spell on this scroll is on my class' spell list(s), I can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that I can't yet cast, I need to make a DC 17 check with my spellcasting ability to use this scroll or it is destroyed if I fail. The spell is cast with DC 18 and a +10 attack modifier.",
		descriptionFull : "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 17. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 18 and an attack bonus of +10.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 17 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		fixedDC : 18,
		spellFirstColTitle : "Us", // used
		spellcastingBonus : {
			level : [7,7],
			psionic : false,
			times : 20,
			firstCol : "checkbox",
			magicItemComponents : false
		}
	},
	"8th-level" : {
		rarity : "very rare",
		magicItemTable : ["D", "?"],
		description : "If the 8th-level spell on this scroll is on my class' spell list(s), I can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that I can't yet cast, I need to make a DC 18 check with my spellcasting ability to use this scroll or it is destroyed if I fail. The spell is cast with DC 18 and a +10 attack modifier.",
		descriptionFull : "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 18. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 18 and an attack bonus of +10.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 18 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		fixedDC : 18,
		spellFirstColTitle : "Us", // used
		spellcastingBonus : {
			level : [8,8],
			psionic : false,
			times : 20,
			firstCol : "checkbox",
			magicItemComponents : false
		}
	},
	"9th-level" : {
		rarity : "legendary",
		magicItemTable : "?",
		description : "If the 9th-level spell on this scroll is on my class' spell list(s), I can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that I can't yet cast, I need to make a DC 19 check with my spellcasting ability to use this scroll or it is destroyed if I fail. The spell is cast with DC 19 and a +11 attack modifier.",
		descriptionFull : "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 19. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 19 and an attack bonus of +11.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 19 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		fixedDC : 19,
		spellFirstColTitle : "Us", // used
		spellcastingBonus : {
			level : [9,9],
			psionic : false,
			times : 20,
			firstCol : "checkbox",
			magicItemComponents : false
		}
	},
	"mixed levels" : {
		description : "If the spell on this scroll is on my class' spell list, I can cast it, having the scroll crumble to dust afterwards. If the spell's level is higher than I can cast, I need to make a DC 10 + spell level check with my spellcasting ability, destroying it if I fail. The DC will be listed on the spell sheet's first column (spell attack = DC - 8).",
		spellFirstColTitle : "DC",
		spellcastingBonus : {
			level : [0,9],
			psionic : false,
			times : 20,
			magicItemComponents : false
		},
		calcChanges : {
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if ((/mixed levels/).test(spName)) {
						spellObj.firstCol = spellObj.level < 3 ? 13 : spellObj.level < 5 ? 15 : spellObj.level < 7 ? 17 : spellObj.level < 9 ? 18 : 19;
						return true;
					}
				}, ""
			]
		}
	}
};
MagicItemsList["sphere of annihilation"] = {
	name : "Sphere of Annihilation",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "legendary",
	magicItemTable : "?",
	description : "This 1-ft radius black sphere obliterates all matter it comes into contact with, except artifacts. Anything not wholly engulfed by it and destroyed takes 4d10 force damage. I can control it as an action with a DC 25 Arcana check, moving it 5 ft per my Int mod, or 10 ft towards me if I fail. See notes page for more details.",
	descriptionFull : "This 2-foot-diameter black sphere is a hole in the multiverse, hovering in space and stabilized by a magical field surrounding it.\n   The sphere obliterates all matter it passes through and all matter that passes through it. Artifacts are the exception. Unless an artifact is susceptible to damage from a sphere of annihilation, it passes through the sphere unscathed. Anything else that touches the sphere but isn't wholly engulfed and obliterated by it takes 4d10 force damage.\n   The sphere is stationary until someone controls it. If you are within 60 feet of an uncontrolled sphere, you can use an action to make a DC 25 Intelligence (Arcana) check. On a success, the sphere levitates in one direction of your choice, up to a number of feet equal to 5 \xD7 your Intelligence modifier (minimum 5 feet). On a failure, the sphere moves 10 feet toward you. A creature whose space the sphere enters must succeed on a DC 13 Dexterity saving throw or be touched by it, taking 4d10 force damage.\n   If you attempt to control a sphere that is under another creature's control, you make an Intelligence (Arcana) check contested by the other creature's Intelligence (Arcana) check. The winner of the contest gains control of the sphere and can levitate it as normal.\n   If the sphere comes into contact with a planar portal, such as that created by the Gate spell, or an extradimensional space, such as that within a portable hole, the DM determines randomly what happens, using the following table.\n\n" + toUni("d100\tResult") + "\n01-50\tThe sphere is destroyed.\n51-85\tThe sphere moves through the portal or into the extradimensional space.\n86-00\tA spatial rift sends each creature and object within 180 feet of the sphere, including the sphere, to a random plane of existence.",
	action : [["action", ""]],
	toNotesPage : [{
		name : "Special Properties",
		note : [
			"This 2-ft-diameter black sphere is a hole in the multiverse, hovering in space and stabilized by a magical field surrounding it. It obliterates all matter it passes through and all matter that passes through it. Artifacts are the exception. Unless an artifact is susceptible to damage from a sphere of annihilation, it passes through the sphere unscathed. Anything else that touches the sphere but isn't wholly engulfed and obliterated by it takes 4d10 force damage.",
			"The sphere is stationary until someone controls it. If I am within 60 ft of an uncontrolled sphere, I can use an action to make a DC 25 Intelligence (Arcana) check. On a success, the sphere levitates in one direction of my choice, up to 5 ft \xD7 my Intelligence modifier (minimum 5 ft). On a failure, the sphere moves 10 ft toward me. A creature whose space the sphere enters must succeed on a DC 13 Dexterity saving throw or be touched by it, taking 4d10 force damage.",
			"If I attempt to control a sphere that is under another creature's control, I make an Intelligence (Arcana) check contested by the other creature's Intelligence (Arcana) check. The winner of the contest gains control of the sphere and can levitate it as normal.",
			"If the sphere comes into contact with a planar portal, such as that created by the Gate spell, or an extradimensional space, such as that within a portable hole, the DM determines randomly what happens, by rolling a d100.",
			" \u2022 01-50 The sphere is destroyed.",
			" \u2022 51-85 The sphere moves through the portal or into the extradimensional space.",
			" \u2022 86-00 A spatial rift sends each creature and object within 180 ft of the sphere, including the sphere, to a random plane of existence."
		]
	}]
};
MagicItemsList["spirit board"] = {
};
MagicItemsList["staff of adornment"] = {
	name : "Staff of Adornment",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "staff",
	rarity : "common",
	description : "If I place an object up to 1 lb above the tip of the staff while holding it, the object floats 1 inch from its tip and remains there until it is removed or until I no longer possess the staff. It can have up to three objects floating over its tip at any given time and I can make one or more objects slowly spin or turn in place.",
	descriptionFull : "If you place an object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of the staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.",
	weight : 4
};
MagicItemsList["staff of birdcalls"] = {
	name : "Staff of Birdcalls",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "staff",
	rarity : "common",
	description : "This staff has 10 charges, regaining 1d6+4 at dawn, 5% chance it is destroyed when its last charge is used. As an action, I can use 1 charge to create a sound out to a range of 60 ft: a finch's chirp, raven's caw, duck's quack, chicken's cluck, goose's honk, loon's call, turkey's gobble, seagull's cry, owl's hoot, or eagle's shriek.",
	descriptionFull : "This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can use an action to expend 1 charge from the staff and cause it to create one of the following sounds out to a range of 60 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever.",
	weight : 4,
	usages : 10,
	recovery : "dawn",
	additional : "regains 1d6+4",
	action : [["action", ""]]
};
MagicItemsList["staff of charming"] = {
	name : "Staff of Charming",
	source : [["DMG2024", "-"]],
	type : "staff",
	rarity : "rare",
	magicItemTable : "?",
	description : "This staff has 10 charges, regaining 1d8+2 at dawn, 5% chance it loses its magic when its last charge is used. If an enchantment spell is cast only on me, I can use the staff to, once per dawn, turn a failed save into a success and as a reaction if I make the save, I can expend 1 charge to turn the spell back on its caster.",
	descriptionFull : "While holding this staff, you can use an action to expend 1 of its 10 charges to cast Charm Person, Command, or Comprehend Languages from it using your spell save DC. The staff can also be used as a magic quarterstaff.\n   If you are holding the staff and fail a saving throw against an enchantment spell that targets only you, you can turn your failed save into a successful one. You can't use this property of the staff again until the next dawn. If you succeed on a save against an enchantment spell that targets only you, with or without the staff's intervention, you can use your reaction to expend 1 charge from the staff and turn the spell back on its caster as if you had cast the spell.\n   The staff regains 1d8+2 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.",
	attunement : true,
	weight : 4,
	prerequisite : "Requires attunement by a bard, cleric, druid, sorcerer, warlock, or wizard",
	prereqeval : function(v) { return classes.known.bard || classes.known.cleric || classes.known.druid || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
	extraLimitedFeatures : [{
		name : "Staff of Charming (pass enchantment save)",
		usages : 1,
		recovery : "dawn"
	}],
	usages : 10,
	recovery : "dawn",
	additional : "charges, regains 1d8+2",
	spellcastingAbility : "class",
	spellFirstColTitle : "Ch",
	spellcastingBonus : {
		name : "1 charge",
		spells : ["charm person", "command", "comprehend languages"],
		selection : ["charm person", "command", "comprehend languages"],
		firstCol : 1,
		times : 3
	},
	action : [["reaction", ""]]
};
MagicItemsList["staff of fire"] = {
	name : "Staff of Fire",
	source : [["DMG2024", "-"]],
	type : "staff",
	rarity : "very rare",
	magicItemTable : "?",
	description : "I have resistance to fire while I'm holding this staff. It has 10 charges, regaining 1d6+4 expended charges at dawn. If I use its last charge, roll a d20. On a 1, it is destroyed. I can use its charges to cast Burning Hands (1 charge), Fireball (3 charges), and Wall of Fire (4 charges), using my spellcasting ability.",
	descriptionFull : "You have resistance to fire damage while you hold this staff.\n   The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC: Burning Hands (1 charge), Fireball (3 charges), or Wall of Fire (4 charges).\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff blackens, crumbles into cinders, and is destroyed.",
	attunement : true,
	weight : 4,
	prerequisite : "Requires attunement by a druid, sorcerer, warlock, or wizard",
	prereqeval : function(v) { return classes.known.druid || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
	usages : 10,
	recovery : "dawn",
	additional : "regains 1d6+4",
	dmgres : ["Fire"],
	spellcastingAbility : "class",
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "1 charge",
		spells : ["burning hands"],
		selection : ["burning hands"],
		firstCol : 1
	}, {
		name : "3 charges",
		spells : ["fireball"],
		selection : ["fireball"],
		firstCol : 3
	}, {
		name : "4 charges",
		spells : ["wall of fire"],
		selection : ["wall of fire"],
		firstCol : 4
	}]
};
MagicItemsList["staff of flowers"] = {
	name : "Staff of Flowers",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "staff",
	rarity : "common",
	description : "This staff has 10 charges, regaining 1d6+4 at dawn, 5% chance it is destroyed when its last charge is used. As an action, I can use 1 charge to cause a flower of my choice to sprout from a patch of earth or soil within 5 ft or from the staff itself. The flower is nonmagical and grows or withers as a normal flower would.",
	descriptionFull : "This wooden staff has 10 charges. While holding it, you can use an action to expend 1 charge from the staff and cause a flower to sprout from a patch of earth or soil within 5 feet of you, or from the staff itself. Unless you choose a specific kind of flower, the staff creates a mildscented daisy. The flower is harmless and nonmagical, and it grows or withers as a normal flower would. The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff turns into flower petals and is lost forever.",
	weight : 4,
	usages : 10,
	recovery : "dawn",
	additional : "regains 1d6+4",
	action : [["action", ""]]
};
MagicItemsList["staff of frost"] = {
	name : "Staff of Frost",
	source : [["DMG2024", "-"]],
	type : "staff",
	rarity : "very rare",
	magicItemTable : "?",
	description : "I have resistance to cold while I'm holding this staff. It has 10 charges, regaining 1d6+4 at dawn. If I use its last charge, roll a d20. On a 1, it is destroyed. I can use its charges to cast Cone of Cold (5 charges), Fog Cloud (1 charge), Ice Storm (4 charges), and Wall of Ice (4 charges) using my spellcasting ability.",
	descriptionFull : "You have resistance to cold damage while you hold this staff.\n   The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC: Cone of Cold (5 charges), Fog Cloud (1 charge), Ice Storm (4 charges), or Wall of Ice (4 charges).\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1. the staff turns to water and is destroyed.",
	attunement : true,
	weight : 4,
	prerequisite : "Requires attunement by a druid, sorcerer, warlock, or wizard",
	prereqeval : function(v) { return classes.known.druid || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
	usages : 10,
	recovery : "dawn",
	additional : "regains 1d6+4",
	dmgres : ["Cold"],
	spellcastingAbility : "class",
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "1 charge",
		spells : ["fog cloud"],
		selection : ["fog cloud"],
		firstCol : 1
	}, {
		name : "4 charges",
		spells : ["ice storm", "wall of ice"],
		selection : ["ice storm", "wall of ice"],
		firstCol : 4,
		times : 2
	}, {
		name : "5 charges",
		spells : ["cone of cold"],
		selection : ["cone of cold"],
		firstCol : 5
	}]
};
MagicItemsList["staff of healing"] = {
	name : "Staff of Healing",
	source : [["DMG2024", "-"]],
	type : "staff",
	rarity : "rare",
	magicItemTable : "?",
	description : "This staff has 10 charges, regaining 1d6+4 expended charges at dawn. If I use its last charge, roll a d20. On a 1, it vanishes in a flash of light. I can use its charges to cast Cure Wounds (1 charge per spell level, up to 4th), Lesser Restoration (2 charges), and Mass Cure Wounds (5 charges) using my spellcasting ability.",
	descriptionFull : "This staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability modifier: Cure Wounds (1 charge per spell level, up to 4th), Lesser Restoration (2 charges), or Mass Cure Wounds (5 charges).\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1. the staff vanishes in a flash of light, lost forever.",
	attunement : true,
	weight : 4,
	prerequisite : "Requires attunement by a bard, cleric, or druid",
	prereqeval : function(v) { return classes.known.bard || classes.known.cleric || classes.known.druid ? true : false; },
	usages : 10,
	recovery : "dawn",
	additional : "regains 1d6+4",
	spellcastingAbility : "class",
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "1+ charges",
		spells : ["cure wounds"],
		selection : ["cure wounds"],
		firstCol : "1+"
	}, {
		name : "2 charges",
		spells : ["lesser restoration"],
		selection : ["lesser restoration"],
		firstCol : 2
	}, {
		name : "5 charges",
		spells : ["mass cure wounds"],
		selection : ["mass cure wounds"],
		firstCol : 5
	}],
	spellChanges : {
		"cure wounds" : {
			noSpellUpcasting : false,
			description : "1 living creature heals 1d8+1d8/SL+spell mod HP; +1 SL/extra charge",
			changes : "The spell level Cure Wounds is cast at depends on the amount of charges spend, 1 charge per spell slot level."
		}
	}
};
MagicItemsList["staff of power"] = {
	name : "Staff of Power",
	source : [["DMG2024", "-"]],
	type : "staff",
	rarity : "very rare",
	magicItemTable : "?",
	description : "While holding this +2 quarterstaff, I gain a +2 bonus on saves, AC, and spell attacks. The staff has 20 charges, regaining 2d8+4 at dawn. Charges can be used to cast spells, or, on a hit in melee with it, I can expend 1 charge to deal +1d6 force damage. As an action, I can break it, causing a 30-ft radius explosion.",
	descriptionLong : "While holding this staff, I gain a +2 bonus on saves, AC, and spell attacks. The staff has 20 charges, regaining 2d8+4 at dawn. If I use the last charge, roll a d20. On a 1, it converts to a +2 quarterstaff without other abilities. On a 20, it regains 1d8+2 charges. Charges can be used to cast spells, or, on a hit in melee with it, I can expend 1 charge to deal +1d6 force damage. As an action, I can break it so it explodes. When it explodes, there is a 50% chance I teleport to a random plane, otherwise I take 16\xD7 the charges left in force damage. All within 10 ft take 8\xD7, 20 ft 6\xD7, and 30 ft 4\xD7; DC 17 Dex save halves.",
	descriptionFull : "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you gain a +2 bonus to Armor Class, saving throws, and spell attack rolls.\n   The staff has 20 charges for the following properties. The staff regains 2d8+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff retains its +2 bonus to attack and damage roll but loses all other properties. On a 20, the staff regain 1d8+2 charges.\n   " + toUni("Power Strike") + ". When you hit with a melee attack using the staff, you can expend 1 charge to deal an extra 1d6 force damage to the target.\n   " + toUni("Spells") + ". While holding this staff, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spell attack bonus: Cone of Cold (5 charges), Fireball (5th-level version, 5 charges), Globe of Invulnerability (6 charges), Hold Monster (5 charges), Levitate (2 charges). Lightning Bolt (5th-level version, 5 charges), Magic Missile (1 charge), Ray of Enfeeblement (1 charge), or Wall of Force (5 charges).\n   " + toUni("Retributive Strike") + ". You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it.\n   You have a 50% chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take force damage equal to 16 \xD7 the number of charges in the staff. Every other creature in the area must make a DC 17 Dexterity saving throw. On a failed save, a creature takes an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a successful save, a creature takes half as much damage.\n\n" + toUni("Distance from Origin\tEffect") + "\n10 ft. away or closer\t8 \xD7 the number of charges in the staff\n11 to 20 ft. away\t6 \xD7 the number of charges in the staff\n21 to 30 ft. away\t4 \xD7 the number of charges in the staff",
	attunement : true,
	weight : 4,
	prerequisite : "Requires attunement by a sorcerer, warlock, or wizard",
	prereqeval : function(v) { return classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
	usages : 20,
	recovery : "dawn",
	additional : "regains 2d8+4",
	weaponsAdd : ["Staff of Power"],
	weaponOptions : {
		baseWeapon : "quarterstaff",
		regExpSearch : /^(?=.*staff)(?=.*power).*$/i,
		name : "Staff of Power",
		source : [["SRD", 243], ["D", 202]],
		description : "Versatile (1d8); On hit, 1 charge for +1d6 force damage",
		modifiers : [2, 2]
	},
	calcChanges : {
		spellCalc : [
			function (type, spellcasters, ability) {
				if (type == "attack") return 2;
			},
			"While holding the Staff of Power, I have a +2 bonus to spell attack rolls."
		]
	},
	addMod : [{ type : "save", field : "all", mod : 2, text : "While holding the Staff of Power, I gain a +2 bonus to all my saving throws." }],
	extraAC : [{name : "Staff of Power", mod : 2, magic : true, text : "I gain a +2 bonus to AC while attuned."}],
	action : [["action", " (Retributive Strike)"]],
	spellcastingAbility : "class",
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "5 charges; 5th level",
		spells : ["fireball", "lightning bolt"],
		selection : ["fireball", "lightning bolt"],
		firstCol : 5,
		times : 2
	}, {
		name : "6 charges",
		spells : ["globe of invulnerability"],
		selection : ["globe of invulnerability"],
		firstCol : 6
	}, {
		name : "5 charges",
		spells : ["cone of cold", "hold monster", "wall of force"],
		selection : ["cone of cold", "hold monster", "wall of force"],
		firstCol : 5,
		times : 3
	}, {
		name : "2 charges",
		spells : ["levitate"],
		selection : ["levitate"],
		firstCol : 2
	}, {
		name : "1 charge",
		spells : ["magic missile", "ray of enfeeblement"],
		selection : ["magic missile", "ray of enfeeblement"],
		firstCol : 1,
		times : 2
	}],
	spellChanges : {
		"fireball" : {
			nameShort : "Fireball (5th level)",
			description : "20-ft rad all crea 10d6 Fire dmg; save halves; unattended flammable objects ignite",
			changes : "Cast as if using a 5th-level spell slot."
		},
		"lightning bolt" : {
			nameShort : "Lightning Bolt (5th level)",
			description : "100-ft long 5-ft wide all 10d6 Lightning dmg; save halves; unattended flammable obj ignite",
			changes : "Cast as if using a 5th-level spell slot."
		}
	}
};
MagicItemsList["staff of striking"] = {
	name : "Staff of Striking",
	source : [["DMG2024", "-"]],
	type : "staff",
	rarity : "very rare",
	magicItemTable : "?",
	description : "This staff function as a +3 quarterstaff and has 10 charges, regaining 1d6+4 at dawn. There is a 5% chance that expending the last charge makes it nonmagical. When I hit with a melee attack using it, I can expend up to 3 of its charges. For each charge I expend, the target takes an extra 1d6 force damage.",
	descriptionFull : "This staff can be wielded as a magic quarterstaff that grants a +3 bonus to attack and damage rolls made with it.\n   The staff has 10 charges. When you hit with a melee attack using it, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d6 force damage. The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.",
	attunement : true,
	weight : 4,
	usages : 10,
	recovery : "dawn",
	additional : "regains 1d6+4",
	weaponsAdd : ["Staff of Striking"],
	weaponOptions : {
		baseWeapon : "quarterstaff",
		regExpSearch : /^(?=.*staff)(?=.*striking).*$/i,
		name : "Staff of Striking",
		source : [["SRD", 244], ["D", 203]],
		modifiers : [3, 3],
		description : "Versatile (1d8); On hit, 1-3 charges for +1d6 force damage per charge"
	}
};
MagicItemsList["staff of swarming insects"] = {
	name : "Staff of Swarming Insects",
	source : [["DMG2024", "-"]],
	type : "staff",
	rarity : "rare",
	magicItemTable : "?",
	description : "This staff has 10 charges, regaining 1d6+4 at dawn, 5% chance it is destroyed when its last charge is used. As an action, I can expend 1 charge to create a 30-ft radius swarm of flying insects for 10 minutes that moves with me, making the area heavily obscured for anybody but me. A 10+ mph wind disperses it.",
	descriptionFull : "This staff has 10 charges and regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, a swarm of insects consumes and destroys the staff, then disperses.\n   " + toUni("Spells") + ". While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC: Giant Insect (4 charges) or Insect Plague (5 charges).\n   " + toUni("Insect Cloud") + ". While holding the staff, you can use an action and expend 1 charge to cause a swarm of harmless flying insects to spread out in a 30-foot radius from you. The insects remain for 10 minutes, making the area heavily obscured for creatures other than you. The swarm moves with you, remaining centered on you. A wind of at least 10 miles per hour disperses the swarm and ends the effect.",
	attunement : true,
	weight : 4,
	prerequisite : "Requires attunement by a bard, cleric, druid, sorcerer, warlock, or wizard",
	prereqeval : function(v) { return classes.known.bard || classes.known.cleric || classes.known.druid || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
	usages : 10,
	recovery : "dawn",
	additional : "regains 1d6+4",
	action : [["action", ""]],
	spellcastingAbility : "class",
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "4 charges",
		spells : ["giant insect"],
		selection : ["giant insect"],
		firstCol : 4
	}, {
		name : "5 charges",
		spells : ["insect plague"],
		selection : ["insect plague"],
		firstCol : 5
	}]
};
MagicItemsList["staff of the adder"] = {
	name : "Staff of the Adder",
	source : [["DMG2024", "-"]],
	type : "staff",
	rarity : "uncommon",
	magicItemTable : "F",
	description : "As a bonus action, I can speak this staff's command word to animate its snake head for 1 minute or make it inanimate again. While animated, I can use it in melee (1d6 piercing + DC 15 Con save or 3d6 poison), but it can be attacked and has AC 15 and 20 HP (full every time). If it reaches 0 HP, the staff is destroyed.",
	descriptionFull : "You can use a bonus action to speak this staff's command word and make the head of the staff become that of an animate poisonous snake for 1 minute. By using another bonus action to speak the command word again, you return the staff to its normal inanimate form.\n   You can make a melee attack using the snake head, which has a reach of 5 feet. Your proficiency bonus applies to the attack roll. On a hit, the target takes 1d6 piercing damage and must succeed on a DC 15 Constitution saving throw or take 3d6 poison damage.\n   The snake head can be attacked while it is animate. It has an Armor Class of 15 and 20 hit points. If the head drops to 0 hit points, the staff is destroyed. As long as it's not destroyed, the staff regains all lost hit points when it reverts to its inanimate form.",
	attunement : true,
	weight : 4,
	prerequisite : "Requires attunement by a cleric, druid, or warlock",
	prereqeval : function(v) { return classes.known.cleric || classes.known.druid || classes.known.warlock ? true : false; },
	action : [["bonus action", " (animate/end)"]],
	weaponOptions : [{
		regExpSearch : /^(?=.*snake)(?=.*head)(?=.*staff)(?=.*adder).*$/i,
		name : "Animated Snake Head from Staff of the Adder",
		source : [["D", 203]],
		list : "melee",
		ability : 1,
		type : "Natural",
		damage : [1, 6, "piercing"],
		range : "Melee",
		weight : 4,
		description : "DC 15 Constitution save or 3d6 poison damage",
		abilitytodamage : false,
		selectNow : true
	}]
};
MagicItemsList["staff of the magi"] = { // contains contributions by Pengsloth
	name : "Staff of the Magi",
	source : [["DMG2024", "-"]],
	type : "staff",
	rarity : "legendary",
	magicItemTable : "?",
	description : "While holding this +2 quarterstaff, I have adv. on saves vs. spells and +2 on spell attacks. The staff has 50 charges to cast spells, regaining 4d6+2 at dawn. As a reaction, I can absorb a spell targeting only me, converting its spell level to charges. If this brings it over 50 charges or I break it is as an action, it explodes.",
	descriptionLong : "While holding this staff I have a +2 to spell attacks, adv. on saving throws vs. spells, and can be used as a +2 quarterstaff. The staff has 50 charges (4d6+2 at dawn) to cast spells. When the last charge is used, it has a 5% chance to regain 1d12+1 charges. I can use a reaction to absorb a spell targeting only me, converting its spell level to charges. If that brings the staff over 50 charges or I use an action to break it, it explodes. If it explodes, there is a 50% chance I teleport to a random plane, otherwise I take 16\xD7 the charges left in force damage. All within 10 ft take 8\xD7, 20 ft 6\xD7, and 30 ft 4\xD7; DC 17 Dex save halves.",
	descriptionFull : "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While you hold it, you gain a +2 bonus to spell attack rolls.\n   The staff has 50 charges for the following properties. It regains 4d6+2 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 20, the staff regains 1d12+1 charges.\n   " + toUni("Spell Absorption") + ". While holding the staff, you have advantage on saving throws against spells. In addition, you can use your reaction when another creature casts a spell that targets only you. If you do, the staff absorbs the magic of the spell, canceling its effect and gaining a number of charges equal to the absorbed spell's level. However, if doing so brings the staff's total number of charges above 50, the staff explodes as if you activated its retributive strike (see below).\n   " + toUni("Spells") + ". While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability: Conjure Elemental (7 charges), Dispel Magic (3 charges), Fireball (7th-level version, 7 charges), Flaming Sphere (2 charges), Ice Storm (4 charges), Invisibility (2 charges), Knock (2 charges), Lightning Bolt (7th-level version, 7 charges), Passwall (5 charges), Plane Shift (7 charges), Telekinesis (5 charges), Wall of Fire (4 charges), or Web (2 charges).\n   You can also use an action to cast one of the following spells from the staff without using any charges: Arcane Lock, Detect Magic, Enlarge/Reduce, Light, Mage Hand, or Protection from Evil and Good.\n   " + toUni("Retributive Strike") + ". You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it.\n   You have a 50% chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take force damage equal to 16 \xD7 the number of charges in the staff. Every other creature in the area must make a DC 17 Dexterity saving throw. On a failed save, a creature takes an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a successful save, a creature takes half as much damage.\n\n" + toUni("Distance from Origin\tDamage") + "\n10 ft. away or closer\t8 \xD7 the number of charges in the staff\n11 to 20 ft. away\t\t6 \xD7 the number of charges in the staff\n21 to 30 ft. away\t\t4 \xD7 the number of charges in the staff",
	attunement : true,
	weight : 4,
	prerequisite : "Requires attunement by a sorcerer, warlock, or wizard",
	prereqeval : function (v) {
		return classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false;
	},
	weaponsAdd : ["Staff of the Magi"],
	weaponOptions : {
		baseWeapon : "quarterstaff",
		regExpSearch : /^(?=.*staff)(?=.*magi).*$/i,
		name : "Staff of the Magi",
		source : [["SRD", 244], ["D", 203]],
		modifiers : [2, 2]
	},
	calcChanges : {
		spellCalc : [
			function (type, spellcasters, ability) {
				if (type == "attack") return 2;
			},
			"While holding the Staff of the Magi I have a +2 bonus to spell attack rolls."
		]
	},
	usages : 50,
	recovery : "dawn",
	additional : "regains 4d6+2",
	savetxt : { adv_vs : ["spells"] },
	action : [
		["reaction", " (Spell Absorption)"],
		["action", " (Retributive Strike)"]
	],
	spellcastingAbility : "class",
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "7 charges",
		spells : ["conjure elemental", "plane shift"],
		selection : ["conjure elemental", "plane shift"],
		firstCol : 7,
		times : 2
	}, {
		name : "7 charges; 7th level",
		spells : ["fireball", "lightning bolt"],
		selection : ["fireball", "lightning bolt"],
		firstCol : 7,
		times : 2
	}, {
		name : "5 charges",
		spells : ["passwall", "telekinesis"],
		selection : ["passwall", "telekinesis"],
		firstCol : 5,
		times : 2
	}, {
		name : "4 charges",
		spells : ["ice storm", "wall of fire"],
		selection : ["ice storm", "wall of fire"],
		firstCol : 4,
		times : 2
	}, {
		name : "3 charges",
		spells : ["dispel magic"],
		selection : ["dispel magic"],
		firstCol : 3
	}, {
		name : "2 charges",
		spells : ["flaming sphere", "invisibility", "knock", "web"],
		selection : ["flaming sphere", "invisibility", "knock", "web"],
		firstCol : 2,
		times : 4
	}, {
		name : "0 charges",
		spells : ["light", "mage hand", "arcane lock", "detect magic", "enlarge/reduce", "protection from evil and good"],
		selection : ["light", "mage hand", "arcane lock", "detect magic", "enlarge/reduce", "protection from evil and good"],
		firstCol : "atwill",
		times : 6
	}],
	spellChanges : {
		"fireball" : {
			nameShort : "Fireball (7th level)",
			description : "20-ft rad all crea 12d6 Fire dmg; save halves; unattended flammable objects ignite",
			changes : "Cast as if using a 7th-level spell slot."
		},
		"lightning bolt" : {
			nameShort : "Lightning Bolt (7th level)",
			description : "100-ft long 5-ft wide all 12d6 Lightning dmg; save halves; unattended flammable obj ignite",
			changes : "Cast as if using a 7th-level spell slot."
		},
		"conjure elemental" : {
			time : "1 a",
			changes : "Casting time is only 1 action instead of 1 minute."
		}
	}
};
MagicItemsList["staff of the python"] = {
	name : "Staff of the Python",
	source : [["DMG2024", "-"]],
	type : "staff",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "As an action, I can speak the command word and throw this staff to have it become a giant constrictor snake within 10 ft with full HP. It has its own initiative. I can command it mentally on my turn if within 60 ft. As a bonus action, I can command it to revert back to a staff. If the snake reaches 0 HP, the staff is destroyed.",
	descriptionLong : "As an action, I can speak this staff's command word and throw the staff on the ground within 10 ft where it becomes a giant constrictor snake. As a bonus action, I can speak the command word again to have it return to its staff form. The snake acts on its own initiative count. On my turn, I can mentally command the snake if it is within 60 ft of me and I'm not incapacitated, deciding what it does on its next turn or a more general command. If the snake is reduced to 0 HP, it dies, reverts to its staff form, and the staff then shatters and is destroyed. Otherwise, the snake always starts out with full HP.",
	descriptionFull : "You can use an action to speak this staff's command word and throw the staff on the ground within 10 feet of you. The staff becomes a giant constrictor snake under your control and acts on its own initiative count. By using a bonus action to speak the command word again, you return the staff to its normal form in a space formerly occupied by the snake.\n   On your turn, you can mentally command the snake if it is within 60 feet of you and you aren't incapacitated. You decide what action the snake takes and where it moves during its next turn, or you can issue it a general command, such as to attack your enemies or guard a location.\n   If the snake is reduced to 0 hit points, it dies and reverts to its staff form. The staff then shatters and is destroyed. If the snake reverts to staff form before losing all its hit points, it regains all of them.",
	attunement : true,
	weight : 4,
	prerequisite : "Requires attunement by a cleric, druid, or warlock",
	prereqeval : function(v) { return classes.known.cleric || classes.known.druid || classes.known.warlock ? true : false; },
	action : [["action", " (animate)"], ["bonus action", " (end)"]]
};
MagicItemsList["staff of the woodlands"] = {
	name : "Staff of the Woodlands",
	source : [["DMG2024", "-"]],
	type : "staff",
	rarity : "rare",
	magicItemTable : "?",
	description : "This +2 quarterstaff gives me a +2 bonus on spell attacks. It has 10 charges, regaining 1d6+4 at dawn, 5% chance of losing its magic when its last charge is used. As an action, I can plant it into the ground and expend 1 charge to have it grow into a 60 ft tree, which it remains until I use another action to revert it back.",
	descriptionFull : "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
	attunement : true,
	weight : 4,
	prerequisite : "Requires attunement by a druid",
	prereqeval : function(v) { return classes.known.druid ? true : false; },
	action : [["action", ""]],
	usages : 10,
	recovery : "dawn",
	additional : "regains 1d6+4",
	weaponsAdd : ["Staff of the Woodlands"],
	weaponOptions : {
		baseWeapon : "quarterstaff",
		regExpSearch : /^(?=.*staff)(?=.*woodlands).*$/i,
		name : "Staff of the Woodlands",
		source : [["SRD", 245], ["D", 204]],
		modifiers : [2, 2]
	},
	calcChanges : {
		spellCalc : [
			function (type, spellcasters, ability) {
				if (type == "attack") return 2;
			},
			"While holding the Staff of the Woodlands, I have a +2 bonus to spell attack rolls."
		]
	},
	spellcastingAbility : "class",
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "At will",
		spells : ["pass without trace"],
		selection : ["pass without trace"],
		firstCol : "atwill"
	}, {
		name : "1 charge",
		spells : ["animal friendship", "speak with animals"],
		selection : ["animal friendship", "speak with animals"],
		firstCol : 1,
		times : 2
	}, {
		name : "2 charges",
		spells : ["barkskin", "locate animals or plants"],
		selection : ["barkskin", "locate animals or plants"],
		firstCol : 2,
		times : 2
	}, {
		name : "3 charges",
		spells : ["speak with plants"],
		selection : ["speak with plants"],
		firstCol : 3
	}, {
		name : "5 charges",
		spells : ["awaken"],
		selection : ["awaken"],
		firstCol : 5
	}, {
		name : "6 charges",
		spells : ["wall of thorns"],
		selection : ["wall of thorns"],
		firstCol : 6
	}],
	spellChanges : {
		"awaken" : {
			time : "1 a",
			changes : "Casting time is only 1 action instead of 8 hours."
		}
	}
};
MagicItemsList["staff of thunder and lightning"] = {
	name : "Staff of Thunder and Lightning",
	source : [["DMG2024", "-"]],
	type : "staff",
	rarity : "very rare",
	magicItemTable : "?",
	description : "This +2 quarterstaff has 5 special abilities that each can be used once per dawn. Both 'Lightning' and 'Thunder' can be used when I hit a melee attack with it, while 'Lightning Strike', 'Thunderclap', and 'Thunder and Lightning' require an action to use. See the Notes page for what all of these abilities entail.",
	descriptionFull : "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. It also has the following additional properties. When one of these properties is used, it can't be used again until the next dawn.\n   " + toUni("Lightning") + ". When you hit with a melee attack using the staff, you can cause the target to take an extra 2d6 lightning damage.\n   " + toUni("Thunder") + ". When you hit with a melee attack using the staff, you can cause the staff to emit a crack of thunder, audible out to 300 feet. The target you hit must succeed on a DC 17 Constitution saving throw or become stunned until the end of your next turn.\n   " + toUni("Lightning Strike") + ". You can use an action to cause a bolt of lightning to leap from the staff's tip in a line that is 5 feet wide and 120 feet long. Each creature in that line must make a DC 17 Dexterity saving throw, taking 9d6 lightning damage on a failed save, or half as much damage on a successful one.\n   " + toUni("Thunderclap") + ". You can use an action to cause the staff to issue a deafening thunderclap, audible out to 600 feet. Each creature within 60 feet of you (not including you) must make a DC 17 Constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 1 minute. On a successful save, a creature takes half damage and isn't deafened.\n   " + toUni("Thunder and Lightning") + ". You can use an action to use the Lightning Strike and Thunderclap properties at the same time. Doing so doesn't expend the daily use of those properties, only the use of this one.",
	attunement : true,
	weight : 4,
	action : [["action", "Staff of T\u0026L (Lightning Strike, Thunderclap, both)"]],
	weaponsAdd : ["Staff of Thunder and Lightning"],
	weaponOptions : {
		baseWeapon : "quarterstaff",
		regExpSearch : /^(?=.*staff)(?=.*thunder)(?=.*lightning).*$/i,
		name : "Staff of Thunder and Lightning",
		source : [["SRD", 245], ["D", 204]],
		description : "Versatile (1d8); Lightning: 1\xD7 per dawn, +2d6 lightning damage; Thunder: 1\xD7 per dawn DC 17 Con save or 1 round stunned",
		modifiers : [2, 2]
	},
	extraLimitedFeatures : [{
		name : "Staff of T\u0026L [Lightning]",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Staff of T\u0026L [Thunder]",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Staff of T\u0026L [Lightning Strike]",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Staff of T\u0026L [Thunderclap]",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Staff of T\u0026L [Thunder and Lightning]",
		usages : 1,
		recovery : "dawn"
	}],
	toNotesPage : [{
		name : "Special Properties",
		note : [
			"\n   This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. It also has the following additional properties. When one of these properties is used, it can't be used again until the next dawn.",
			" \u2022 Lightning. When I hit with a melee attack using the staff, I can cause the target to take an extra 2d6 lightning damage.",
			" \u2022 Thunder. When I hit with a melee attack using the staff, I can cause the staff to emit a crack of thunder, audible out to 300 ft. The target must succeed on a DC 17 Constitution saving throw or become stunned until the end of my next turn.",
			" \u2022 Lightning Strike. As an action, I can cause a bolt of lightning to leap from the staff's tip in a line that is 5 ft wide and 120 ft long. Each creature in that line must make a DC 17 Dexterity saving throw, taking 9d6 lightning damage on a failed save, or half as much damage on a successful one.",
			" \u2022 Thunderclap. As an action, I can cause the staff to issue a deafening thunderclap, audible out to 600 ft. Each creature within 60 ft of me, excluding myself, must make a DC 17 Constitution saving throw or take 2d6 thunder damage and becomes deafened for 1 minute. On a successful save, a creature takes half damage and isn't deafened.",
			" \u2022 Thunder and Lightning. As an action, I can use the Lightning Strike and Thunderclap properties at the same time. Doing so doesn't expend the daily use of those properties, only the use of this one.",
		].join("\n")
	}]
};
MagicItemsList["staff of withering"] = {
	name : "Staff of Withering",
	source : [["DMG2024", "-"]],
	type : "staff",
	rarity : "rare",
	magicItemTable : "?",
	description : "This staff has 3 charges, regaining 1d3 at dawn and functions as a magic quarterstaff. On a hit with it, I can expend 1 charge to deal an extra 2d10 necrotic damage to the target, which must then make a DC 15 Con save or have disadvantage on any ability check or save that uses Strength or Constitution for 1 hour.",
	descriptionFull : "This staff has 3 charges and regains 1d3 expended charges daily at dawn.\n   The staff can be wielded as a magic quarterstaff. On a hit, it deals damage as a normal quarterstaff, and you can expend 1 charge to deal an extra 2d10 necrotic damage to the target. In addition, the target must succeed on a DC 15 Constitution saving throw or have disadvantage for 1 hour on any ability check or saving throw that uses Strength or Constitution.",
	attunement : true,
	weight : 4,
	prerequisite : "Requires attunement by a cleric, druid, or warlock",
	prereqeval : function(v) { return classes.known.cleric || classes.known.druid || classes.known.warlock ? true : false; },
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3",
	weaponsAdd : ["Staff of Withering"],
	weaponOptions : {
		baseWeapon : "quarterstaff",
		regExpSearch : /^(?=.*staff)(?=.*withering).*$/i,
		name : "Staff of Withering",
		source : [["SRD", 244], ["D", 203]],
		description : "Versatile (1d8); On hit, 1 charge for +2d10 necrotic damage and save, see magic item"
	}
};
MagicItemsList["stone of controlling earth elementals"] = {
	name : "Stone of Controlling Earth Elementals",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "While the stone is touching the ground, I can use an action to speak its command word and summon an earth elemental, as if I had cast the Conjure Elemental spell. The stone can't be used this way again until the next dawn.",
	descriptionFull : "If the stone is touching the ground, you can use an action to speak its command word and summon an earth elemental, as if you had cast the Conjure Elemental spell. The stone can't be used this way again until the next dawn. The stone weighs 5 pounds.",
	weight : 5,
	spellcastingBonus : {
		name : "Earth Elemental only",
		spells : ["conjure elemental"],
		selection : ["conjure elemental"],
		firstCol : "oncelr"
	},
	usages : 1,
	recovery : "dawn",
	spellChanges : {
		"conjure elemental" : {
			time : "1 a",
			components : "V,M\u0192",
			compMaterial : "The Stone of Controlling Earth Elementals needs to touch the ground to cast this spell with a command word.",
			description : "CR 5 earth elemental that obeys my verbal commands; on broken conc. elemental breaks free",
			changes : "Using the Stone of Controlling Earth Elementals, the spell only takes 1 action instead of 1 minute to cast, but can only bring forth an earth elemental."
		}
	}
};
MagicItemsList["stone of good luck"] = {
	name : "Stone of Good Luck",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While this polished agate is on my person, I gain a +1 bonus to ability checks and saving throws.",
	descriptionFull : "While this polished agate is on your person, you gain a +1 bonus to ability checks and saving throws.",
	attunement : true,
	addMod : [
		{ type : "save", field : "all", mod : 1, text : "I gain a +1 bonus on all my saving throws." },
		{ type : "skill", field : "all", mod : 1, text : "I gain a +1 bonus on all my ability checks." },
		{ type : "skill", field : "Init", mod : 1, text : "I gain a +1 bonus on all my ability checks." }
	]
};
MagicItemsList["sun blade"] = {
	name : "Sun Blade",
	source : [["DMG2024", "-"]],
	type : "weapon (longsword)",
	rarity : "rare",
	magicItemTable : "?",
	attunement : true,
	description : "As a bonus action, I can have this hilt create a blade of radiance. While the blade exists, it acts like a longsword that does +2 to attack and damage rolls, radiant damage (+1d8 to undead), has finesse, emits bright sunlight in a 15-ft radius and dim light in another 15 ft. As an action, I can change the light's radius by 5 ft.",
	descriptionLong : "As a bonus action, I can have this longsword hilt create or dismiss a blade of pure radiance. While the blade exists, it acts like a longsword that grants a +2 bonus to attack and damage rolls, does radiant damage and has the finesse property. It also deals +1d8 radiant damage to undead and emits sunlight, bright light in a 15-ft radius and dim light in an additional 15-ft radius. As an action, I can expand or reduce both the bright and dim light's radius by 5 ft each, to a maximum of 30 feet each or a minimum of 10 feet each. I am proficient with this weapon if I'm proficient with either longswords or shortswords.",
	descriptionFull : "This item appears to be a longsword hilt. While grasping the hilt, you can use a bonus action to cause a blade of pure radiance to spring into existence, or make the blade disappear. While the blade exists, this magic longsword has the finesse property. If you are proficient with shortswords or longswords, you are proficient with the sun blade.\n   You gain a +2 bonus to attack and damage rolls made with this weapon, which deals radiant damage instead of slashing damage. When you hit an undead with it, that target takes an extra 1d8 radiant damage.\n   The sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the blade persists, you can use an action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.",
	weight : 3,
	action : [["bonus action", " (start/stop)"], ["action", " (change light)"]],
	weaponsAdd : ["Sun Blade"],
	weaponOptions : {
		baseWeapon : "longsword",
		regExpSearch : /^(?=.*sun)(?=.*blade).*$/i,
		name : "Sun Blade",
		source : [["SRD", 246], ["D", 205]],
		damage : [1, 8, "radiant"],
		description : "Finesse, versatile (1d10); +1d8 damage to undead",
		modifiers : [2, 2]
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.theWea.name == "Sun Blade" && !fields.Proficiency) {
					fields.Proficiency = CurrentProfs.weapon.otherWea && CurrentProfs.weapon.otherWea.finalProfs.indexOf("shortsword") !== -1;
				}
			}, ''
		]
	}
};
MagicItemsList["sword of answering"] = {
	name : "Sword of Answering",
	source : [["DMG2024", "-"]],
	type : "weapon (longsword)",
	rarity : "legendary",
	magicItemTable : "?",
	description : "I gain a +3 bonus to attack and damage rolls made with this magical longsword that has a gem set in its pommel. As a reaction when a creature within my reach damages me, I can make one melee attack with this sword with advantage. This attack ignores damage immunities and resistances of the target.",
	descriptionFull : 'In the world of Greyhawk, only nine of these blades are known to exist. Each is patterned after the legendary sword Fragarach, which is variously translated as "Final Word." Each of the nine swords has its own name and alignment, and each bears a different gem in its pommel.\n   You gain a +3 bonus to attack and damage rolls made with this sword. In addition, while you hold the sword, you can use your reaction to make one melee attack with it against any creature in your reach that deals damage to you. You have advantage on the attack roll, and any damage dealt with this special attack ignores any damage immunity or resistance the target has.\n\n' + [
		toUni("Name\t\tAlignment\tGem"),
		"Answerer    \tChaotic good\tEmerald",
		"Back Talker\tChaotic evil\tJet",
		"Concluder    \tLawful neutral\tAmethyst",
		"Last Quip    \tChaotic neutral\tTourmaline",
		"Rebutter\t\tNeutral good\tTopaz",
		"Replier\t\tNeutral\t\tPeridot",
		"Retorter\t\tLawful good\tAquamarine",
		"Scather\t\tLawful evil\tGarnet",
		"Squelcher    \tNeutral evil\tSpinel"
	].join("\n"),
	attunement : true,
	weight : 3,
	action : [["reaction", ""]],
	weaponOptions : [{
		baseWeapon : "longsword",
		regExpSearch : /^(?=.*sword)(?=.*answering).*$/i,
		name : "Sword of Answering",
		source : [["D", 206]],
		modifiers : [3, 3],
		selectNow : true
	}],
	choices : ["Answerer (chaotic good)", "Back Talker (chaotic evil)", "Concluder (lawful neutral)", "Last Quip (chaotic neutral)", "Rebutter (neutral good)", "Replier (neutral)", "Retorter (lawful good)", "Scather (lawful evil)", "Squelcher (neutral evil)"],
	"answerer (chaotic good)" : {
		name : "Sword of Answering [Answerer]",
		prerequisite : "Requires attunement by a creature with the chaotic good alignment",
		prereqeval : function(v) { return (/^(?=.*chaotic)(?=.*good).*$/i).test(What("Alignment")); },
		description : "I gain a +3 bonus to attack and damage rolls made with this magical longsword that has an emerald set in its pommel. As a reaction when a creature within my reach damages me, I can make one melee attack with this sword with advantage. This attack ignores damage immunities and resistances of the target."
	},
	"back talker (chaotic evil)" : {
		name : "Sword of Answering [Back Talker]",
		prerequisite : "Requires attunement by a creature with the chaotic evil alignment",
		prereqeval : function(v) { return (/^(?=.*chaotic)(?=.*evil).*$/i).test(What("Alignment")); },
		description : "I gain a +3 bonus to attack and damage rolls made with this magical longsword that has jet set in its pommel. As a reaction when a creature within my reach damages me, I can make one melee attack with this sword with advantage. This attack ignores damage immunities and resistances of the target."
	},
	"concluder (lawful neutral)" : {
		name : "Sword of Answering [Concluder]",
		prerequisite : "Requires attunement by a creature with the lawful neutral alignment",
		prereqeval : function(v) { return (/^(?=.*lawful)(?=.*neutral).*$/i).test(What("Alignment")); },
		description : "I gain a +3 bonus to attack and damage rolls made with this magical longsword that has an amethyst set in its pommel. As a reaction when a creature within my reach damages me, I can make one melee attack with this sword with advantage. This attack ignores damage immunities and resistances of the target."
	},
	"last quip (chaotic neutral)" : {
		name : "Sword of Answering [Last Quip]",
		prerequisite : "Requires attunement by a creature with the chaotic neutral alignment",
		prereqeval : function(v) { return (/^(?=.*chaotic)(?=.*neutral).*$/i).test(What("Alignment")); },
		description : "I gain a +3 bonus to attack and damage rolls made with this magical longsword that has a tourmaline set in its pommel. As a reaction when a creature within my reach damages me, I can make one melee attack with this sword with advantage. This attack ignores damage immunities and resistances of the target."
	},
	"rebutter (neutral good)" : {
		name : "Sword of Answering [Rebutter]",
		prerequisite : "Requires attunement by a creature with the neutral good alignment",
		prereqeval : function(v) { return (/^(?=.*neutral)(?=.*good).*$/i).test(What("Alignment")); },
		description : "I gain a +3 bonus to attack and damage rolls made with this magical longsword that has a topaz set in its pommel. As a reaction when a creature within my reach damages me, I can make one melee attack with this sword with advantage. This attack ignores damage immunities and resistances of the target."
	},
	"replier (neutral)" : {
		name : "Sword of Answering [Replier]",
		prerequisite : "Requires attunement by a creature with the neutral alignment",
		prereqeval : function(v) { return (/^(?=.*neutral)(?!.*(chaotic|lawful|evil|good)).*$/i).test(What("Alignment")); },
		description : "I gain a +3 bonus to attack and damage rolls made with this magical longsword that has a peridot set in its pommel. As a reaction when a creature within my reach damages me, I can make one melee attack with this sword with advantage. This attack ignores damage immunities and resistances of the target."
	},
	"retorter (lawful good)" : {
		name : "Sword of Answering [Retorter]",
		prerequisite : "Requires attunement by a creature with the lawful good alignment",
		prereqeval : function(v) { return (/^(?=.*lawful)(?=.*good).*$/i).test(What("Alignment")); },
		description : "I gain a +3 bonus to attack and damage rolls made with this magical longsword that has an aquamarine set in its pommel. As a reaction when a creature within my reach damages me, I can make one melee attack with this sword with advantage. This attack ignores damage immunities and resistances of the target."
	},
	"scather (lawful evil)" : {
		name : "Sword of Answering [Scather]",
		prerequisite : "Requires attunement by a creature with the lawful evil alignment",
		prereqeval : function(v) { return (/^(?=.*lawful)(?=.*evil).*$/i).test(What("Alignment")); },
		description : "I gain a +3 bonus to attack and damage rolls made with this magical longsword that has a garnet set in its pommel. As a reaction when a creature within my reach damages me, I can make one melee attack with this sword with advantage. This attack ignores damage immunities and resistances of the target."
	},
	"squelcher (neutral evil)" : {
		name : "Sword of Answering [Squelcher]",
		prerequisite : "Requires attunement by a creature with the neutral evil alignment",
		prereqeval : function(v) { return (/^(?=.*neutral)(?=.*evil).*$/i).test(What("Alignment")); },
		description : "I gain a +3 bonus to attack and damage rolls made with this magical longsword that has a spinel set in its pommel. As a reaction when a creature within my reach damages me, I can make one melee attack with this sword with advantage. This attack ignores damage immunities and resistances of the target."
	}
};
MagicItemsList["sword of life stealing"] = {
	name : "Sword of Life Stealing",
	nameTest : "of Life Stealing",
	source : [["DMG2024", "-"]],
	type : "weapon (any sword)",
	rarity : "rare",
	magicItemTable : "?",
	attunement : true,
	description : "When I attack a creature with this magic sword and roll a 20 on the attack roll, that target takes an extra 10 necrotic damage if it isn't a construct or an undead. I then also gain 10 temporary hit points.",
	descriptionFull : "When you attack a creature with this magic weapon and roll a 20 on the attack roll, that target takes an extra 10 necrotic damage if it isn't a construct or an undead. You also gain 10 temporary hit points.", // the SRD says 3d6 but that is incorrect
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "prefix",
		descriptionChange : ["replace", "sword"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*life)(?=.*stealing).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'On 20 to hit: +10 Necrotic dmg, 10 temp HP';
				}
			},
			'If I include the words "Life Stealing" in a the name of a sword, it will be treated as the magic weapon Sword of Life Stealing. It does +10 necrotic damage when I roll a 20 on the attack roll and then gives me 10 temporary hit points. It doesn\'t work against Constructs or Undead.'
		]
	}
};
MagicItemsList["sword of sharpness"] = {
	name : "Sword of Sharpness",
	nameTest : "of Sharpness",
	source : [["DMG2024", "-"]],
	type : "weapon (any sword that deals slashing damage)",
	rarity : "rare",
	magicItemTable : "?",
	attunement : true,
	description : "When I roll a 20 to hit with this magic sword vs. a creature, it takes +14 slashing damage and I have a 5% chance of lobbing off one of its limbs. It does maximum damage vs. objects. With the command word, the blade gives bright light in a 10-ft radius \u0026 dim light in another 10 ft. " + (typePF ? "This stops if sheathed." : "The light stops when commanded again or sheathed."),
	descriptionLong : "When I attack a creature with this magic sword and roll a 20 on the attack roll, that target takes an extra 14 slashing damage and I roll another d20. If that turns op 20 as well, I lob off one of the target's limbs. If the creature has no limb to sever, you lop off a portion of its body instead. When used against an object, the damage dice are maximized. In addition, I can speak the sword's command word to cause the blade to shed bright light in a 10-foot radius and dim light for an additional 10 feet. Speaking the command word again or sheathing the sword puts out the light.",
	descriptionFull : "When you attack an object with this magic sword and hit, maximize your weapon damage dice against the target.\n   When you attack a creature with this weapon and roll a 20 on the attack roll, that target takes an extra 14 slashing damage. Then roll another d20. If you roll a 20, you lop off one of the target's limbs, with the effect of such loss determined by the DM. If the creature has no limb to sever, you lop off a portion of its body instead.\n   In addition, you can speak the sword's command word to cause the blade to shed bright light in a 10-foot radius and dim light for an additional 10 feet. Speaking the command word again or sheathing the sword puts out the light.", // the SRD says 4d6 but that is incorrect
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "prefix",
		descriptionChange : ["replace", "sword"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return (!(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon))) || (inObj.baseWeapon && !inObj.damage ? WeaponsList[inObj.baseWeapon].damage : inObj.damage)[2] !== "slashing";
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/of sharpness/i).test(v.WeaponTextName) && v.theWea.damage[2] == "slashing") {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'On 20 to hit: +14 damage \u0026 5% chance to sever limb; Max damage vs. objects';
				}
			},
			'If I include the words "of Sharpness" in a the name of a sword that deals slashing damage, it will be treated as the magic weapon Sword of Sharpness. It deals maximum damage against objects. On a roll of 20 to hit against creatures, it deals +14 slashing damage and has a 5% chance to lob off one limb.'
		]
	}
};
MagicItemsList["sword of vengeance"] = {
	name : "Sword of Vengeance",
	nameTest : "of Vengeance",
	source : [["DMG2024", "-"]],
	type : "weapon (any sword)",
	rarity : "uncommon",
	magicItemTable : "?",
	attunement : true,
	description : "This sword gives +1 to hit and damage and is cursed. I can't part with this sword and have disadv. on attacks with other weapons. If I take damage in combat, I must make a DC 15 Wis save or I will attack the attacker until it drops to 0 HP or I can't attack it in melee anymore.",
	descriptionFull : "You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n   " + toUni("Curse") + ". This sword is cursed and possessed by a vengeful spirit. Becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the sword, keeping it on your person at all times. While attuned to this weapon, you have disadvantage on attack rolls made with weapons other than this one.\n   In addition, while the sword is on your person, you must succeed on a DC 15 Wisdom saving throw whenever you take damage in combat. On a failed save you must attack the creature that damaged you until you drop to 0 hit points or it does, or until you can't reach the creature to make a melee attack against it.\n   You can break the curse in the usual ways. Alternatively, casting banishment on the sword forces the vengeful spirit to leave it. The sword then becomes a +1 weapon with no other properties.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "prefix",
		descriptionChange : ["replace", "sword"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/of vengeance/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Cursed';
				}
			},
			'If I include the words "of Vengeance" in the name of a sword, it will be treated as the magic weapon Sword of Vengeance. It has +1 to hit and damage, but also bears a curse.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/of vengeance/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
		]
	}
};
MagicItemsList["sword of wounding"] = {
	name : "Sword of Wounding",
	nameTest : "of Wounding",
	source : [["DMG2024", "-"]],
	type : "weapon (any sword)",
	rarity : "rare",
	magicItemTable : "?",
	attunement : true,
	description : "HP lost to this sword can be regained only by resting. Once per turn, I can wound a target hit with this sword. At the start of its turn, it takes 1d4 necrotic damage per such wound, and then makes a DC 15 Con save to stop all wounds on itself. " + (typePF ? "It or another can stop them as an action (DC 15 Medicine)." : "Alternatively, the target or another can stop them with an action (DC 15 Medicine check)."),
	descriptionLong : "Hit points lost to this magic sword can be regained only through a short or long rest, not by regeneration, magic, or other means. Once per turn, when I hit a creature with this sword, I can wound the target. At the start of each of the wounded creature's turns, it takes 1d4 necrotic damage for each time I've wounded it, and it can then make a DC 15 Constitution save to end the effect of all such wounds on itself. Alternatively, the wounded creature, or another within 5 feet of it, can use an action to make a DC 15 Wisdom (Medicine) check to end the effect of all such wounds on it.",
	descriptionFull : "Hit points lost to this weapon's damage can be regained only through a short or long rest, rather than by regeneration, magic, or any other means.\n   Once per turn, when you hit a creature with an attack using this magic weapon, you can wound the target. At the start of each of the wounded creature's turns, it takes 1d4 necrotic damage for each time you've wounded it, and it can then make a DC 15 Constitution saving throw, ending the effect of all such wounds on itself on a success. Alternatively, the wounded creature, or a creature within 5 feet of it, can use an action to make a DC 15 Wisdom (Medicine) check, ending the effect of such wounds on it on a success.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "prefix",
		descriptionChange : ["replace", "sword"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/of wounding/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Damage can only be healed by resting; Once per turn, wound target';
				}
			},
			'If I include the words "of Wounding" in a the name of a sword, it will be treated as the magic weapon Sword of Wounding. Damage by the sword can only be regained with a short or long rest. Once per turn when I hit with the sword, I can inflict a lingering wound on a target, causing it pain every turn thereafter.'
		]
	}
};
MagicItemsList["sylvan talon"] = {
};
MagicItemsList["talisman of pure good"] = {
	name : "Talisman of Pure Good",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "legendary",
	magicItemTable : "?",
	description : "I can use this talisman as a holy symbol and if I'm a good cleric or paladin, it gives a +2 bonus on my spell attacks. As an action, I can use 1 of its 7 charges to have an evil creature within 120 ft make a DC 20 Dex save or be destroyed. Non-good creatures touching it take radiant damage, 8d6 if evil or 6d6 if neutral.",
	descriptionLong : "If I'm a good cleric or paladin, I can use this talisman as a holy symbol and it grants me a +2 bonus on my spell attack rolls. As an action, I can use 1 of its 7 charges to target one creature on the ground that I can see within 120 ft of me. If it is evil, a flaming fissure opens under it and it must succeed on a DC 20 Dexterity save or fall into the fissure and be destroyed, leaving no remains of it or the fissure. The talisman is destroyed when the last of its charges is used. Non-good creatures touching it take radiant damage, 8d6 if evil or 6d6 if neutral. This damage repeats at the end of each turn carrying the talisman.",
	descriptionFull : "This talisman is a mighty symbol of goodness. A creature that is neither good nor evil in alignment takes 6d6 radiant damage upon touching the talisman. An evil creature takes 8d6 radiant damage upon touching the talisman. Either sort of creature takes the damage again each time it ends its turn holding or carrying the talisman.\n   If you are a good cleric or paladin, you can use the talisman as a holy symbol, and you gain a +2 bonus to spell attack rolls while you wear or hold it.\n   The talisman has 7 charges. If you are wearing or holding it, you can use an action to expend 1 charge from it and choose one creature you can see on the ground within 120 feet of you. If the target is of evil alignment, a flaming fissure opens under it. The target must succeed on a DC 20 Dexterity saving throw or fall into the fissure and be destroyed, leaving no remains. The fissure then closes, leaving no trace of its existence. When you expend the last charge, the talisman disperses into motes of golden light and is destroyed.",
	attunement : true,
	weight : 1,
	prerequisite : "Requires attunement by a creature of good alignment",
	prereqeval : function(v) { return (/good/i).test(What("Alignment")); },
	usages : 7,
	recovery : "never",
	action : [["action", ""]],
	calcChanges : {
		spellCalc : [
			function (type, spellcasters, ability) {
				if (type == "attack" && (classes.known.paladin || classes.known.cleric) && (/good/i).test(What("Alignment"))) return 2;
			},
			"If I'm a good cleric or paladin, I gain a +2 bonus on my spell attack rolls while wearing or holding the Talisman of Pure Good."
		]
	}
};
MagicItemsList["talisman of the sphere"] = {
	name : "Talisman of the Sphere",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "legendary",
	magicItemTable : "?",
	description : "While I'm holding this talisman, I double my proficiency bonus on the Intelligence (Arcana) check to control a sphere of annihilation. In addition, when I start my turn with control over a sphere of annihilation, I can use an action to levitate it 10 ft plus 10 ft times my Intelligence modifier.",
	descriptionFull : "When you make an Intelligence (Arcana) check to control a sphere of annihilation while you are holding this talisman, you double your proficiency bonus on the check. In addition, when you start your turn with control over a sphere of annihilation, you can use an action to levitate it 10 feet plus a number of additional feet equal to 10 \xD7 your Intelligence modifier.",
	attunement : true,
	weight : 1
};
MagicItemsList["talisman of ultimate evil"] = {
	name : "Talisman of Ultimate Evil",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "legendary",
	magicItemTable : "?",
	description : "I can use this talisman as a holy symbol and if I'm an evil cleric or paladin, it gives a +2 bonus on my spell attacks. As an action, I can use 1 of its 6 charges to have a good creature within 120 ft make a DC 20 Dex save or be destroyed. Non-evil creatures touching it take necrotic damage, 8d6 if good or 6d6 if neutral.",
	descriptionLong : "If I'm an evil cleric or paladin, I can use this talisman as a holy symbol and it grants me a +2 bonus on my spell attack rolls. As an action, I can use 1 of its 6 charges to target one creature on the ground that I can see within 120 ft of me. If it is good, a flaming fissure opens under it and it must succeed on a DC 20 Dexterity save or fall into the fissure and be destroyed, leaving no remains of it or the fissure. The talisman is destroyed when the last of its charges is used. Non-evil creatures touching it take necrotic damage, 8d6 if good or 6d6 if neutral. This damage repeats at the end of each turn carrying the talisman.",
	descriptionFull : "This item symbolizes unrepentant evil. A creature that is neither good nor evil in alignment takes 6d6 necrotic damage upon touching the talisman. A good creature takes 8d6 necrotic damage upon touching the talisman. Either sort of creature takes the damage again each time it ends its turn holding or carrying the talisman.\n   If you are an evil cleric or paladin, you can use the talisman as a holy symbol, and you gain a +2 bonus to spell attack rolls while you wear or hold it.\n   The talisman has 6 charges. If you are wearing or holding it, you can use an action to expend 1 charge from the talisman and choose one creature you can see on the ground within 120 feet of you. If the target is of good alignment, a flaming fissure opens under it. The target must succeed on a DC 20 Dexterity saving throw or fall into the fissure and be destroyed, leaving no remains. The fissure then closes, leaving no trace of its existence. When you expend the last charge, the talisman dissolves into foul-smelling slime and is destroyed.",
	attunement : true,
	weight : 1,
	prerequisite : "Requires attunement by a creature of evil alignment",
	prereqeval : function(v) { return (/evil/i).test(What("Alignment")); },
	usages : 6,
	recovery : "never",
	action : [["action", ""]],
	calcChanges : {
		spellCalc : [
			function (type, spellcasters, ability) {
				if (type == "attack" && (classes.known.paladin || classes.known.cleric) && (/evil/i).test(What("Alignment"))) return 2;
			},
			"If I'm an evil cleric or paladin, I gain a +2 bonus on my spell attack rolls while wearing or holding the Talisman of Ultimate Evil."
		]
	}
};
MagicItemsList["talking doll"] = {
	name : "Talking Doll",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	attunement : true,
	description : "During a short rest with this doll within 5 ft of me, I can tell it to say up to 6 phrases of up to 6 words each, and set an observable condition under which the doll speaks each phrase. Conditions must happen within 5 ft of the doll. The doll can remember only 6 phrases that are lost when my attunement to it ends.",
	descriptionFull : "While this stuffed doll is within 5 feet of you, you can spend a short rest telling it to say up to six phrases, none of which can be more than six words long, and set an observable condition under which the doll speaks each phrase. You can also replace old phrases with new ones. Whatever the condition, it must occur within 5 feet of the doll to make it speak. For example, whenever someone picks up the doll, it might say, \"I want a piece of candy.\" The doll's phrases are lost when your attunement to the doll ends."
};
MagicItemsList["tankard of sobriety"] = {
	name : "Tankard of Sobriety",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "This tankard has a stern face sculpted into one side. I can drink ale, wine, or any other nonmagical alcoholic beverage poured into it without becoming inebriated. The tankard has no effect on magical liquids or harmful substances such as poison.",
	descriptionFull : "This tankard has a stern face sculpted into one side. You can drink ale, wine, or any other nonmagical alcoholic beverage poured into it without becoming inebriated. The tankard has no effect on magical liquids or harmful substances such as poison.",
	weight : 1
};
MagicItemsList["tentacle rod"] = {
	name : "Tentacle Rod",
	source : [["DMG2024", "-"]],
	type : "rod",
	rarity : "rare",
	magicItemTable : "?",
	description : "As an action, all 3 tentacles of this rod attack with 15 ft reach, +9 to hit, dealing 1d6 bludgeoning damage. If a target is hit by all 3 it must make a DC 15 Con save or have half speed, disadv. on Dex saves, no reactions, and do action or bonus action, not both, for 1 min. It can repeat the save at the end of each of its turns.",
	descriptionLong : "As an action while holding the rod, I can direct each of its three tentacles to attack a creature I can see within 15 ft. Each tentacle makes a melee attack roll, +9 to hit, dealing 1d6 bludgeoning damage. If a target is hit by all three tentacles, it must make a DC 15 Constitution saving throw. On a failure, the creature's speed is halved, it has disadvantage on Dexterity saving throws, and it can't use reactions for 1 minute. Moreover, on each of its turns, it can take either an action or a bonus action, but not both. At the end of each of its turns, it can repeat the saving throw, ending the effect on itself on a success.",
	descriptionFull : "Made by the drow, this rod is a magic weapon that ends in three rubbery tentacles. While holding the rod, you can use an action to direct each tentacle to attack a creature you can see within 15 feet of you. Each tentacle makes a melee attack roll with a +9 bonus. On a hit, the tentacle deals 1d6 bludgeoning damage. If you hit a target with all three tentacles, it must make a DC 15 Constitution saving throw. On a failure, the creature's speed is halved, it has disadvantage on Dexterity saving throws, and it can't use reactions for 1 minute. Moreover, on each of its turns, it can take either an action or a bonus action, but not both. At the end of each of its turns, it can repeat the saving throw, ending the effect on itself on a success.",
	attunement : true,
	weight : 2,
	action : [["action", ""]],
	weaponOptions : [{
		regExpSearch : /^(?=.*tentacle)(?=.*rod).*$/i,
		name : "Tentacle Rod",
		source : [["D", 208]],
		ability : 0,
		type : "Magic Item",
		damage : [1, 6, "bludgeoning"],
		range : "Melee (15 ft)",
		description : "Action to use, 3 attacks; If all 3 hit same target, it DC 15 Con save, see magic item",
		abilitytodamage : false,
		modifiers : [9, ""],
		weight : 2,
		isAlwaysProf : false,
		selectNow : true
	}]
};
MagicItemsList["thunderous greatclub"] = {
};
MagicItemsList["tome of clear thought"] = {
	name : "Tome of Clear Thought",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "?",
	description : "This book contains memory and logic exercises, and its words are charged with magic. If I spend 48 hours within a period of 6 days to study its contents and practicing its guidelines, my Intelligence score increases by 2, as does my maximum for that score. The tome then loses its magic, but regains it in a century.",
	descriptionFull : "This book contains memory and logic exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Intelligence score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
	weight : 5,
	eval : function() {
		MagicItemsList["manual of bodily health"].applyStatBonus("Tome of Clear Thought", "Intelligence", 2);
	}
};
MagicItemsList["tome of leadership and influence"] = {
	name : "Tome of Leadership and Influence",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "?",
	description : "This book contains guidelines for influencing and charming others and its words are charged with magic. If I spend 48 hours within 6 days studying its contents and practicing its guidelines, my Charisma score increases by 2, as does my maximum for that score. The tome then loses its magic, but regains it in a century.",
	descriptionFull : "This book contains guidelines for influencing and charming others, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Charisma score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
	weight : 5,
	eval : function() {
		MagicItemsList["manual of bodily health"].applyStatBonus("Tome of Leadership and Influence", "Charisma", 2);
	}
};
MagicItemsList["tome of the stilled tongue"] = {
	name : "Tome of the Stilled Tongue",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "legendary",
	magicItemTable : "?",
	description : "I can use this thick leather-bound tome as a spellbook and an arcane focus. Once per dawn while holding it, I can use a bonus action to cast a spell I have written in it, without expending a spell slot or using any verbal or somatic components. Removing the tongue on the cover erases all spells within.",
	descriptionLong : "The first few pages of this thick leather-bound tome are filled with indecipherable scrawls. The remaining pages are blank and pristine. I can use it as a spellbook and an arcane focus. Once per dawn while holding it, I can use a bonus action to cast a spell I have written in the tome, without expending a spell slot or using any verbal or somatic components. While attuned to the book, I can remove the tongue from the book's cover, permanently erasing all spells within. Vecna watches the user or this tome and sometimes has cryptic messages appear in it at midnight and fade away after they are read.",
	descriptionFull : "This thick leather-bound volume has a desiccated tongue pinned to the front cover. Five of these tomes exist, and it's unknown which one is the original. The grisly cover decoration on the first tome of the stilled tongue once belonged to a treacherous former servant of the lich-god Vecna, keeper of secrets. The tongues pinned to the covers of the four copies came from other spellcasters who crossed Vecna. The first few pages of each tome are filled with indecipherable scrawls. The remaining pages are blank and pristine.\n   If you can attune to this item, you can use it as a spellbook and an arcane focus. In addition, while holding the tome, you can use a bonus action to cast a spell you have written in this tome, without expending a spell slot or using any verbal or somatic components. Once used, this property of the tome can't be used again until the next dawn.\n   While attuned to the book, you can remove the tongue from the book's cover. If you do so, all spells written in the book are permanently erased.\n   Vecna watches anyone using this tome. He can also write cryptic messages in the book. These messages appear at midnight and fade away after they are read.",
	attunement : true,
	weight : 5,
	prerequisite : "Requires attunement by a wizard",
	prereqeval : function(v) { return classes.known.wizard ? true : false; },
	action : [["bonus action", ""]],
	usages : 1,
	recovery : "dawn"
};
MagicItemsList["tome of understanding"] = {
	name : "Tome of Understanding",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "?",
	description : "This book contains intuition and insight exercises, and its words are charged with magic. If I spend 48 hours within a period of 6 days studying its contents and practicing its guidelines, my Wisdom score increases by 2, as does my maximum for that score. The tome then loses its magic, but regains it in a century.",
	descriptionFull : "This book contains intuition and insight exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Wisdom score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
	weight : 5,
	eval : function() {
		MagicItemsList["manual of bodily health"].applyStatBonus("Tome of Understanding", "Wisdom", 2);
	}
};
MagicItemsList["trident of fish command"] = {
	name : "Trident of Fish Command",
	source : [["DMG2024", "-"]],
	type : "weapon (trident)",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "This magic trident has 3 charges. While I carry it, I can use an action and expend 1 charge to cast Dominate Beast (save DC 15) from it on a beast that has an innate swimming speed. The trident regains 1d3 expended charges daily at dawn.",
	descriptionFull : "This trident is a magic weapon. It has 3 charges. While you carry it, you can use an action and expend 1 charge to cast Dominate Beast (save DC 15) from it on a beast that has an innate swimming speed. The trident regains 1d3 expended charges daily at dawn.",
	attunement : true,
	weight : 4,
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3",
	weaponsAdd : ["Trident of Fish Command"],
	weaponOptions : {
		baseWeapon : "trident",
		regExpSearch : /^(?=.*trident)(?=.*fish)(?=.*command).*$/i,
		name : "Trident of Fish Command",
		source : [["SRD", 247], ["D", 209]]
	},
	fixedDC : 15,
	spellFirstColTitle : "Ch",
	spellcastingBonus : {
		name : "1 charge",
		spells : ["dominate beast"],
		selection : ["dominate beast"],
		firstCol : 1
	},
	spellChanges : {
		"dominate beast" : {
			description : "1 beast with swim speed save or charmed, follows telepathic commands, 1 a for complete control",
			changes : "Can only affect beasts with innate swim speed."
		}
	}
};
MagicItemsList["universal solvent"] = {
	name : "Universal Solvent",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "legendary",
	magicItemTable : "?",
	description : "This tube holds milky liquid with a strong alcohol smell. Once as an action, I can pour the contents of the tube onto a surface within reach. The liquid instantly dissolves up to 1 square foot of adhesive it touches, including sovereign glue.",
	descriptionFull : "This tube holds milky liquid with a strong alcohol smell. You can use an action to pour the contents of the tube onto a surface within reach. The liquid instantly dissolves up to 1 square foot of adhesive it touches, including sovereign glue."
};
MagicItemsList["veteran's cane"] = {
	name : "Veteran's Cane",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "Once as a bonus action, I can grasp this walking cane and speak its command word to have it transform into an ordinary longsword. Once transformed, the longsword is nonmagical and can't revert back to a walking cane.",
	descriptionFull : "When you grasp this walking cane and use a bonus action to speak the command word, it transforms into an ordinary longsword and ceases to be magical.",
	weight : 4,
	action : [["bonus action", ""]]
};
MagicItemsList["vicious weapon"] = {
	name : "Vicious Weapon",
	nameTest : "Vicious",
	source : [["DMG2024", "-"]],
	type : "weapon (any)",
	rarity : "rare",
	magicItemTable : "?",
	description : "When I roll a 20 on my attack roll with this magic weapon, the target takes an extra 7 damage of the weapon's type.",
	descriptionFull : "When you roll a 20 on your attack roll with this magic weapon, the target takes an extra 7 damage of the weapon's type.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "weapon"]
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.isSpell && !v.theWea.isMagicWeapon && (/vicious/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'On 20 to hit: +7 damage';
				}
			},
			'If I include the word "Vicious" in a the name of a weapon, it will be treated as the magic weapon Vicious Weapon. On a roll of 20 to hit, it does +7 damage of the weapons type.'
		]
	}
};
MagicItemsList["vorpal sword"] = {
	name : "Vorpal Sword",
	nameTest : "Vorpal",
	source : [["DMG2024", "-"]],
	type : "weapon (any sword that deals slashing damage)",
	rarity : "legendary",
	magicItemTable : "?",
	attunement : true,
	description : "I have a +3 bonus to attack and damage rolls with this magic sword. It ignores slashing damage resistance. On a roll of 20 to hit, it cuts off one head" + (typePF ? "" : ", possibly killing it instantly") + ". If the target has no head, is immune to slashing damage, has legendary actions, or its neck is too wide, it takes +6d8 slashing damage instead.",
	descriptionFull : "You gain a +3 bonus to attack and damage rolls made with this magic weapon. In addition, the weapon ignores resistance to slashing damage.\n   When you attack a creature that has at least one head with this weapon and roll a 20 on the attack roll, you cut off one of the creature's heads. The creature dies if it can't survive without the lost head. A creature is immune to this effect if it is immune to slashing damage, doesn't have or need a head, has legendary actions, or the DM decides that the creature is too big for its head to be cut off with this weapon. Such a creature instead takes an extra 6d8 slashing damage from the hit.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "sword"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return (!(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon))) || (inObj.baseWeapon && !inObj.damage ? WeaponsList[inObj.baseWeapon].damage : inObj.damage)[2] !== "slashing";
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/vorpal/i).test(v.WeaponTextName) && v.theWea.damage[2] == "slashing") {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Ignores slashing resistance; On 20 to hit: cut off head';
				}
			},
			'If I include the word "Vorpal" in a the name of a sword that deals slashing damage, it will be treated as the magic weapon Vorpal Sword. It has +3 to hit and damage and on a roll of 20 on the attack roll, it cuts off a head of the target.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/vorpal/i).test(v.WeaponTextName) && v.theWea.damage[2] == "slashing") {
					output.magic = v.thisWeapon[1] + 3;
				}
			}, ''
		]
	}
};
MagicItemsList["walloping ammunition"] = {
	name : "Walloping Ammunition",
	nameTest : "Walloping",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "weapon (any ammunition)",
	rarity : "common",
	description : "This magic ammunition packs a wallop. A creature hit by the ammunition must succeed on a DC 10 Strength saving throw or be knocked prone.",
	descriptionFull : "This ammunition packs a wallop. A creature hit by the ammunition must succeed on a DC 10 Strength saving throw or be knocked prone.",
	allowDuplicates : true,
	chooseGear : {
		type : "ammo",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "ammunition"],
		excludeCheck : function (inObjKey, inObj) {
			return /vials|flasks/i.test(inObj.icon);
		}
	}
};
MagicItemsList["wand of binding"] = {
	name : "Wand of Binding",
	source : [["DMG2024", "-"]],
	type : "wand",
	rarity : "rare",
	magicItemTable : "?",
	description : "This wand has 7 charges, regaining 1d6+1 at dawn, which I can use to cast its spells. I can expend 1 charge to gain adv. on a check to escape a grapple or on a save vs. being paralyzed or restrained, the latter requiring me to use my reaction. When the last charge is used there is a 5% chance the wand is destroyed.",
	descriptionLong : "This wand has 7 charges, regaining 1d6+1 at dawn. I can expend charges to cast (save DC 17) Hold Monster (5 charges) or Hold Person (2 charges). As a reaction, I can expend 1 charge to gain adv. on a save to avoid being paralyzed or restrained. I can also expend 1 charge to gain adv. on a check to escape a grapple. If I expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
	descriptionFull : "This wand has 7 charges for the following properties. It regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.\n   " + toUni("Spells") + ". While holding the wand, you can use an action to expend some of its charges to cast one of the following spells (save DC 17): Hold Monster (5 charges) or Hold Person (2 charges).\n   " + toUni("Assisted Escape") + ". While holding the wand, you can use your reaction to expend 1 charge and gain advantage on a saving throw you make to avoid being paralyzed or restrained, or you can expend 1 charge and gain advantage on any check you make to escape a grapple.",
	attunement : true,
	weight : 1,
	prerequisite : "Requires attunement by a spellcaster",
	prereqeval : function(v) { return v.isSpellcaster; },
	action : [["reaction", " (adv. on save)"]],
	usages : 7,
	recovery : "dawn",
	additional : "regains 1d6+1",
	spellFirstColTitle : "Ch",
	fixedDC : 17,
	spellcastingBonus : [{
		name : "2 charges",
		spells : ["hold person"],
		selection : ["hold person"],
		firstCol : 2
	}, {
		name : "5 charges",
		spells : ["hold monster"],
		selection : ["hold monster"],
		firstCol : 5
	}]
};
MagicItemsList["wand of conducting"] = {
	name : "Wand of Conducting",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wand",
	rarity : "common",
	description : "This wand has 3 charges, regaining all at dawn. As an action, I can wave it around and expend 1 charge to create orchestral music that can be heard out to a range of 60 ft and ends when I stop waving the wand. If I use its last charge, roll a d20. On a 1, a sad tuba sound plays as the wand crumbles to dust.",
	descriptionFull : "This wand has 3 charges. While holding it, you can use an action to expend 1 of its charges and create orchestral music by waving it around. The music can be heard out to a range of 60 feet and ends when you stop waving the wand.\n   The wand regains all expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, a sad tuba sound plays as the wand crumbles to dust and is destroyed.",
	weight : 1,
	action : [["action", ""]],
	usages : 3,
	recovery : "dawn"
};
MagicItemsList["wand of enemy detection"] = {
	name : "Wand of Enemy Detection",
	source : [["DMG2024", "-"]],
	type : "wand",
	rarity : "rare",
	magicItemTable : "?",
	description : "This wand has 7 charges, regaining 1d6+1 at dawn. As an action, I can expend 1 charge to speak its command word. For 1 minute, I know the direction of the nearest creature hostile to me in 60 ft, regardless of it being ethereal, invisible, disguised, or hidden. When the last charge is used there is a 5% chance it's destroyed.",
	descriptionFull : "This wand has 7 charges. While holding it, you can use an action and expend 1 charge to speak its command word. For the next minute, you know the direction of the nearest creature hostile to you within 60 feet, but not its distance from you. The wand can sense the presence of hostile creatures that are ethereal, invisible, disguised, or hidden, as well as those in plain sight. The effect ends if you stop holding the wand.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
	attunement : true,
	weight : 1,
	usages : 7,
	recovery : "dawn",
	additional : "regains 1d6+1",
	action : [["action", ""]]
};
MagicItemsList["wand of fear"] = {
	name : "Wand of Fear",
	source : [["DMG2024", "-"]],
	type : "wand",
	rarity : "rare",
	magicItemTable : "?",
	description : "This wand has 7 charges, regaining 1d6+1 at dawn, which I can use to cast Command (1 charge), or as an action have all in a 60-ft cone (2 charges) make a DC 15 Wis save or be frightened and move away from me for 1 min (save end of each turn). When using the last charge, 5% chance the wand is destroyed.",
	descriptionLong : "This wand has 7 charges, regaining 1d6+1 charges at dawn. As an action, I can expend 1 charge to cast Command, but only to use \"flee\" or \"grovel\". I can also use an action to expend 2 charges, causing the wand's tip to emit a 60-ft cone of amber light. All within the cone must make a DC 15 Wis save or be frightened of me for 1 minute. While frightened, a target moves away from me as fast as possible, can only use the Dash action, and is unwilling to move within 30 ft of me, but can repeat the save at the end of each of its turn. When the last charge is used, roll a d20. On a 1, the wand crumbles into ashes.",
	descriptionFull : "This wand has 7 charges for the following properties. It regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.\n   " + toUni("Command") + ". While holding the wand, you can use an action to expend 1 charge and command another creature to flee or grovel, as with the Command spell (save DC 15).\n   " + toUni("Cone of Fear") + ". While holding the wand, you can use an action to expend 2 charges, causing the wand's tip to emit a 60-foot cone of amber light. Each creature in the cone must succeed on a DC 15 Wisdom saving throw or become frightened of you for 1 minute. While it is frightened in this way, a creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevent it from moving. If it has nowhere it can move, the creature can use the Dodge action. At the end of each of its turns, a creature can repeat the saving throw, ending the effect on itself on a success.",
	attunement : true,
	weight : 1,
	usages : 7,
	recovery : "dawn",
	additional : "regains 1d6+1",
	spellFirstColTitle : "Ch",
	fixedDC : 15,
	spellcastingBonus : {
		name : "1 charge",
		spells : ["command"],
		selection : ["command"],
		firstCol : 1
	},
	spellChanges : {
		"command" : {
			description : '1 creature save or has to follow an one-word command on its next turn, either "flee" or "grovel"',
			changes : 'When casting form the Wand of Fear, I can only use the "flee" or "grovel" command.'
		}
	}
};
MagicItemsList["wand of fireballs"] = {
	name : "Wand of Fireballs",
	source : [["DMG2024", "-"]],
	type : "wand",
	rarity : "rare",
	magicItemTable : "?",
	description : "This wand has 7 charges, regaining 1d6+1 at dawn. As an action, I can expend 1 or more of its charges to cast Fireball (save DC 15) from it as a 3rd level spell. The spell slot level increases by one for each charge expended after the first. When the last charge is used, roll a d20. On a 1, the wand crumbles into ashes.",
	descriptionFull : "This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the Fireball spell (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
	attunement : true,
	weight : 1,
	prerequisite : "Requires attunement by a spellcaster",
	prereqeval : function(v) { return v.isSpellcaster; },
	usages : 7,
	recovery : "dawn",
	additional : "regains 1d6+1",
	spellFirstColTitle : "Ch",
	fixedDC : 15,
	spellcastingBonus : {
		name : "1+ charges",
		spells : ["fireball"],
		selection : ["fireball"],
		firstCol : "1+"
	},
	spellChanges : {
		"fireball" : {
			description : "20-ft rad all crea 8d6+1d6/extra charge Fire dmg; save halves; unattended flammable objects ignite",
			changes : "For 1 charge, it is cast as the 3rd-level version of the spell, but I can increase the spell slot level by one for each additional charge expended."
		}
	}
};
MagicItemsList["wand of lightning bolts"] = {
	name : "Wand of Lightning Bolts",
	source : [["DMG2024", "-"]],
	type : "wand",
	rarity : "rare",
	magicItemTable : "?",
	description : "This wand has 7 charges, regaining 1d6+1 at dawn. As an action, I can expend 1 or more of its charges to cast Lightning Bolt (save DC 15) from it as a 3rd level spell. The spell slot level increases by one for each charge expended after the first. When the last charge is used, roll a d20. On a 1, the wand crumbles into ashes.",
	descriptionFull : "This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the Lightning Bolt spell (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
	attunement : true,
	weight : 1,
	prerequisite : "Requires attunement by a spellcaster",
	prereqeval : function(v) { return v.isSpellcaster; },
	usages : 7,
	recovery : "dawn",
	additional : "regains 1d6+1",
	spellFirstColTitle : "Ch",
	fixedDC : 15,
	spellcastingBonus : {
		name : "1+ charges",
		spells : ["lightning bolt"],
		selection : ["lightning bolt"],
		firstCol : "1+"
	},
	spellChanges : {
		"lightning bolt" : {
			description : "100-ft long 5-ft wide all 8d6+1d6/extra charge Lightn. dmg; save halves; unattended objects ignite",
			changes : "For 1 charge, it is cast as the 3rd-level version of the spell, but I can increase the spell slot level by one for each additional charge expended."
		}
	}
};
MagicItemsList["wand of magic detection"] = {
	name : "Wand of Magic Detection",
	source : [["DMG2024", "-"]],
	type : "wand",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "This wand has 3 charges. While holding it, I can expend 1 charge as an action to cast Detect Magic from it. The wand regains 1d3 expended charges daily at dawn.",
	descriptionFull : "This wand has 3 charges. While holding it, you can expend 1 charge as an action to cast the Detect Magic spell from it. The wand regains 1d3 expended charges daily at dawn.",
	weight : 1,
	spellcastingBonus : {
		name : "1 charge",
		spells : ["detect magic"],
		selection : ["detect magic"],
		firstCol : 1
	},
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3",
	spellFirstColTitle : "Ch"
};
MagicItemsList["wand of magic missiles"] = {
	name : "Wand of Magic Missiles",
	source : [["DMG2024", "-"]],
	type : "wand",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "This wand has 7 charges, regaining 1d6+1 at dawn. As an action, I can expend 1 or more of its charges to cast Magic Missile from it as a 1st level spell. The spell slot level increases by one for each charge expended after the first. When the last charge is used, roll a d20. On a 1, the wand crumbles into ashes.",
	descriptionFull : "This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the Magic Missile spell from it. For 1 charge, you cast the 1st-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
	weight : 1,
	usages : 7,
	recovery : "dawn",
	additional : "regains 1d6+1",
	spellFirstColTitle : "Ch",
	spellcastingBonus : {
		name : "1+ charges",
		spells : ["magic missile"],
		selection : ["magic missile"],
		firstCol : "1+"
	},
	spellChanges : {
		"magic missile" : {
			description : "3+1/extra charge darts hit creature(s) I can see for 1d4+1 Force dmg per dart",
			changes : "For 1 charge, it is cast as the 1st-level version of the spell, but I can increase the spell slot level by one for each additional charge expended."
		}
	}
};
MagicItemsList["wand of paralysis"] = {
	name : "Wand of Paralysis",
	source : [["DMG2024", "-"]],
	type : "wand",
	rarity : "rare",
	magicItemTable : "?",
	description : "This wand has 7 charges, regaining 1d6+1 at dawn. As an action, I can expend 1 charge to have a creature within 60 ft make a DC 15 Constitution saving throw or be paralyzed for 1 minute. It can repeat this save at the end of each of its turns. When the last charge is used, roll a d20. On a 1, the wand crumbles into ashes.",
	descriptionFull : "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cause a thin blue ray to streak from the tip toward a creature you can see within 60 feet of you. The target must succeed on a DC 15 Constitution saving throw or be paralyzed for 1 minute. At the end of each of the target's turns, it can repeat the saving throw, ending the effect on itself on a success.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
	attunement : true,
	weight : 1,
	prerequisite : "Requires attunement by a spellcaster",
	prereqeval : function(v) { return v.isSpellcaster; },
	action : [["action", ""]]
};
MagicItemsList["wand of polymorph"] = {
	name : "Wand of Polymorph",
	source : [["DMG2024", "-"]],
	type : "wand",
	rarity : "very rare",
	magicItemTable : "?",
	description : "This wand has 7 charges and regains 1d6+1 expended charges daily at dawn. As an action, I can expend 1 of its charges to cast Polymorph (save DC 15) from it. If I expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
	descriptionFull : "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the Polymorph spell (save DC 15) from it.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
	attunement : true,
	weight : 1,
	prerequisite : "Requires attunement by a spellcaster",
	prereqeval : function(v) { return v.isSpellcaster; },
	usages : 7,
	recovery : "dawn",
	additional : "regains 1d6+1",
	spellFirstColTitle : "Ch",
	fixedDC : 15,
	spellcastingBonus : {
		name : "1 charge",
		spells : ["polymorph"],
		selection : ["polymorph"],
		firstCol : 1
	}
};
MagicItemsList["wand of pyrotechnics"] = {
	name : "Wand of Pyrotechnics",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wand",
	rarity : "common",
	description : "This wand has 7 charges, regaining 1d6+1 at dawn, 5% chance it is destroyed when its last charge is used. As an action, I can expend 1 charge to create a harmless burst of sound light at a point I can see up to 60 ft away, with the noise travelling 300 ft. The light is as bright as a torch flame but lasts only a second.",
	descriptionFull : "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges and create a harmless burst of multicolored light at a point you can see up to 60 feet away. The burst of light is accompanied by a crackling noise that can be heard up to 300 feet away. The light is as bright as a torch flame but lasts only a second.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand erupts in a harmless pyrotechnic display and is destroyed.",
	weight : 1,
	action : [["action", ""]],
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d6+1"
};
MagicItemsList["wand of secrets"] = {
	name : "Wand of Secrets",
	source : [["DMG2024", "-"]],
	type : "wand",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "The wand has 3 charges. While holding it, I can use an action to expend 1 of its charges, and if a secret door or trap is within 30 feet of me, the wand pulses and points at the one nearest to me. The wand regains 1d3 expended charges daily at dawn.",
	descriptionFull : "The wand has 3 charges. While holding it. you can use an action to expend 1 of its charges, and if a secret door or trap is within 30 feet of you, the wand pulses and points at the one nearest to you. The wand regains 1d3 expended charges daily at dawn.",
	weight : 1,
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3",
	action : [["action", ""]]
};
MagicItemsList["wand of the war mage, +1, +2, or +3"] = {
	name : "Wand of the War Mage, +1, +2, or +3",
	nameTest : /^(?=.*war mage)(?=.*(arcane focus|rod|wand|staff)).*$/i,
	source : [["DMG2024", "-"]],
	type : "wand",
	description : "While I am holding this wand, I gain a bonus to spell attack rolls determined by the wand's rarity: uncommon (+1), rare (+2), or very rare (+3). In addition, I ignore half cover when making a spell attack.",
	descriptionFull : "While you are holding this wand, you gain a bonus to spell attack rolls determined by the wand's rarity: uncommon (+1), rare (+2), or very rare (+3). In addition, you ignore half cover when making a spell attack.",
	attunement : true,
	weight : 1,
	prerequisite : "Requires attunement by a spellcaster",
	prereqeval : function(v) { return v.isSpellcaster; },
	choices : ["+1 to spell attacks (uncommon)", "+2 to spell attacks (rare)", "+3 to spell attacks (very rare)"],
	"+1 to spell attacks (uncommon)" : {
		name : "Wand of the War Mage +1",
		nameTest : /^(?=.*war mage)(?=.*(arcane focus|rod|wand|staff))(?=.*\+1)(?!.*\+2)(?!.*\+3).*$/i,
		rarity : "uncommon",
		magicItemTable : "?",
		description : "While I am holding this arcane focus, I gain a +1 bonus to spell attack rolls and I ignore half cover when making a spell attack.",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type == "attack") return 1;
				},
				"I gain a +1 bonus to spell attack rolls."
			]
		}
	},
	"+2 to spell attacks (rare)" : {
		name : "Wand of the War Mage +2",
		nameTest : /^(?=.*war mage)(?=.*(arcane focus|rod|wand|staff))(?!.*\+1)(?=.*\+2)(?!.*\+3).*$/i,
		rarity : "rare",
		magicItemTable : "?",
		description : "While I am holding this arcane focus, I gain a +2 bonus to spell attack rolls and I ignore half cover when making a spell attack.",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type == "attack") return 2;
				},
				"I gain a +2 bonus to spell attack rolls."
			]
		}
	},
	"+3 to spell attacks (very rare)" : {
		name : "Wand of the War Mage +3",
		nameTest : /^(?=.*war mage)(?=.*(arcane focus|rod|wand|staff))(?!.*\+1)(?!.*\+2)(?=.*\+3).*$/i,
		rarity : "very rare",
		magicItemTable : "?",
		description : "While I am holding this arcane focus, I gain a +3 bonus to spell attack rolls and I ignore half cover when making a spell attack.",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type == "attack") return 3;
				},
				"I gain a +3 bonus to spell attack rolls."
			]
		}
	}
};
MagicItemsList["wand of web"] = {
	name : "Wand of Web",
	source : [["DMG2024", "-"]],
	type : "wand",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "This wand has 7 charges and regains 1d6+1 expended charges daily at dawn. As an action, I can expend 1 of its charges to cast Web (save DC 15) from it. If I expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
	descriptionFull : "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the Web spell (save DC 15) from it.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
	attunement : true,
	weight : 1,
	prerequisite : "Requires attunement by a spellcaster",
	prereqeval : function(v) { return v.isSpellcaster; },
	usages : 7,
	recovery : "dawn",
	additional : "regains 1d6+1",
	spellFirstColTitle : "Ch",
	fixedDC : 15,
	spellcastingBonus : {
		name : "1 charge",
		spells : ["web"],
		selection : ["web"],
		firstCol : 1
	}
};
MagicItemsList["wand of wonder"] = {
	name : "Wand of Wonder",
	source : [["DMG2024", "-"]],
	type : "wand",
	rarity : "rare",
	magicItemTable : "?",
	description : "This wand has 7 charges and regains 1d6+1 expended charges daily at dawn. If I expend its last charge, roll a d20. On a 1, the wand crumbles into dust and is destroyed. As an action while holding it, I can expend 1 charge, choose a target within 120 ft, and roll a 1d100 to see what happens, see the Notes page.",
	descriptionFull : "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges and choose a target within 120 feet of you. The target can be a creature, an object, or a point in space. Roll d100 and consult the following table to discover what happens." + desc([
		"If the effect causes you to cast a spell from the wand, the spell's save DC is 15. If the spell normally has a range expressed in feet, its range becomes 120 feet if it isn't already.",
		"If an effect covers an area, you must center the spell on and include the target. If an effect has multiple possible subjects, the DM randomly determines which ones are affected.",
		"The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into dust and is destroyed.\n",
		toUni("d100 and effects"),
		toUni("01-05") + ". You cast Slow.",
		toUni("06-10") + ". You cast Faerie Fire.",
		toUni("11-15") + ". You are stunned until the start of your next turn, believing something awesome just happened.",
		toUni("16-20") + ". You cast Gust of Wind.",
		toUni("21-25") + ". You cast Detect Thoughts on the target you chose. If you didn't target a creature, you instead take 1d6 psychic damage.",
		toUni("26-30") + ". You cast Stinking Cloud.",
		toUni("31-33") + ". Heavy rain falls in a 60-foot radius centered on the target. The area becomes lightly obscured. The rain falls until the start of your next turn.",
		toUni("34-36") + ". An animal appears in the unoccupied space nearest the target. The animal isn't under your control and acts as it normally would. Roll a d100 to determine which animal appears. On a 01-25, a rhinoceros appears; on a 26-50, an elephant appears; and on a 51-100, a rat appears.",
		toUni("37-46") + ". You cast Lightning Bolt.",
		toUni("47-49") + ". A cloud of 600 oversized butterflies fills a 30-foot radius centered on the target. The area becomes heavily obscured. The butterflies remain for 10 minutes.",
		toUni("50-53") + ". You enlarge the target as if you had cast Enlarge/Reduce. If the target can't be affected by that spell or if you didn't target a creature, you become the target.",
		toUni("54-58") + ". You cast Darkness.",
		toUni("59-62") + ". Grass grows on the ground in a 60-foot radius centered on the target. If grass is already there, it grows to ten times its normal size and remains overgrown for 1 minute.",
		toUni("63-65") + ". An object of the DM's choice disappears into the Ethereal Plane. The object must be neither worn nor carried, within 120 feet of the target, and no larger than 10 feet in any dimension.",
		toUni("66-69") + ". You shrink yourself as if you had cast Enlarge/Reduce on yourself.",
		toUni("70-79") + ". You cast Fireball.",
		toUni("80-84") + ". You cast Invisibility.",
		toUni("85-87") + ". Leaves grow from the target. If you chose a point in space as the target, leaves sprout from the creature nearest to that point. Unless they are picked off, the leaves turn brown and fall off after 24 hours.",
		toUni("88-90") + ". A stream of 1d4 \xD7 10 gems, each worth 1 gp, shoots from the wand's tip in a line 30 feet long and 5 feet wide. Each gem deals 1 bludgeoning damage, and the total damage of the gems is divided equally among all creatures in the line.",
		toUni("91-95") + ". A burst of colorful shimmering light extends from you in a 30-foot radius. You and each creature in the area that can see must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		toUni("96-97") + ". The target's skin turns bright blue for 1d10 days. If you chose a point in space, the creature nearest to that point is affected.",
		toUni("98-00") + ". If you targeted a creature, it must make a DC 15 Constitution saving throw. If you didn't target a creature, you become the target and must make the saving throw. If the saving throw fails by 5 or more, the target is instantly petrified. On any other failed save, the target is restrained and begins to turn to stone. While restrained in this way, the target must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the target is freed by the Greater Restoration spell or similar magic."
	]),
	attunement : true,
	weight : 1,
	prerequisite : "Requires attunement by a spellcaster",
	prereqeval : function(v) { return v.isSpellcaster; },
	usages : 7,
	recovery : "dawn",
	additional : "regains 1d6+1",
	toNotesPage : [{
		name : "Table of Effects",
		note : [
			"As an action I can expend 1 of the wand's 7 charges and choose a target within 120 ft of me. The target can be a creature, an object, or a point in space. Roll a d100 and consult the effect below to discover what happens.",
			"If the effect causes me to cast a spell from the wand, the spell's save DC is 15. If the spell normally has a range expressed in feet, its range becomes 120 ft if it isn't already.",
			"If an effect covers an area, I must center the spell on and include the target. If an effect has multiple possible subjects, the DM randomly determines which ones are affected.",
			"\nd100 RESULT AND EFFECTS",
			"01-05: I cast Slow.",
			"06-10: I cast Faerie Fire.",
			"11-15: I am stunned until the start of my next turn, believing something awesome just happened.",
			"16-20: I cast Gust of Wind.",
			"21-25: I cast Detect Thoughts on the target I chose. If I didn't target a creature, I instead take 1d6 psychic damage.",
			"26-30: I cast Stinking Cloud.",
			"31-33: Heavy rain falls in a 60-ft radius centered on the target. The area becomes lightly obscured. The rain falls until the start of my next turn.",
			"34-36: An animal appears in the unoccupied space nearest the target. The animal isn't under my control and acts as it normally would. Roll a d100 to determine which animal appears. On a 01-25, a rhinoceros appears; on a 26-50, an elephant appears; and on a 51-100, a rat appears.",
			"37-46: I cast Lightning Bolt.",
			"47-49: A cloud of 600 oversized butterflies fills a 30-ft radius centered on the target. The area becomes heavily obscured. The butterflies remain for 10 minutes.",
			"50-53: I enlarge the target as if I had cast Enlarge/Reduce. If the target can't be affected by that spell or if I didn't target a creature, I become the target.",
			"54-58: I cast Darkness.",
			"59-62: Grass grows on the ground in a 60-ft radius centered on the target. If grass is already there, it grows to ten times its normal size and remains overgrown for 1 minute.",
			"63-65: An object of the DM's choice disappears into the Ethereal Plane. The object must be neither worn nor carried, within 120 ft of the target, and no larger than 10 ft in any dimension.",
			"66-69: I shrink myself as if I had cast Enlarge/Reduce on myself.",
			"70-79: I cast Fireball.",
			"80-84: I cast Invisibility.",
			"85-87: Leaves grow from the target. If I chose a point in space as the target, leaves sprout from the creature nearest to that point. Unless they are picked off, the leaves turn brown and fall off after 24 hours.",
			"88-90: A stream of 1d4 \xD7 10 gems, each worth 1 gp, shoots from the wand's tip in a line 30 ft long and 5 ft wide. Each gem deals 1 bludgeoning damage, and the total damage of the gems is divided equally among all creatures in the line.",
			"91-95: A burst of colorful shimmering light extends from me in a 30-ft radius. Me and each creature in the area that can see must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
			"96-97: The target's skin turns bright blue for 1d10 days. If I chose a point in space, the creature nearest to that point is affected.",
			"98-00: If I targeted a creature, it must make a DC 15 Constitution saving throw. If I didn't target a creature, I become the target and must make the saving throw. If the saving throw fails by 5 or more, the target is instantly petrified. On any other failed save, the target is restrained and begins to turn to stone. While restrained in this way, the target must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the target is freed by the Greater Restoration spell or similar magic."
		]
	}],
	fixedDC : 15,
	spellcastingBonus : {
		name : "Random option",
		spells : ["slow", "faerie fire", "gust of wind", "detect thoughts", "stinking cloud", "lightning bolt", "enlarge/reduce", "darkness", "fireball", "invisibility"],
		selection : ["slow", "faerie fire", "gust of wind", "detect thoughts", "stinking cloud", "lightning bolt", "enlarge/reduce", "darkness", "fireball", "invisibility"],
		times : 10
	},
	spellChanges : {
		"darkness" : { range : "120 ft", changes : "All Wand of Wonder spells have a range of 120 ft." },
		"enlarge/reduce" : { range : "120 ft", changes : "All Wand of Wonder spells have a range of 120 ft." },
		"faerie fire" : { range : "120 ft", changes : "All Wand of Wonder spells have a range of 120 ft." },
		"stinking cloud" : { range : "120 ft", changes : "All Wand of Wonder spells have a range of 120 ft." }
	}
};
var DMG_waveFullDescription = [
	"Held in the dungeon of White Plume Mountain, this trident is an exquisite weapon engraved with images of waves, shells, and sea creatures. Although you must worship a god of the sea to attune to this weapon, Wave happily accepts new converts.",
	"You gain a +3 bonus to attack and damage rolls made with this magic weapon. If you score a critical hit with it, the target takes extra necrotic damage equal to half its hit point maximum.",
	"The weapon also functions as a trident of fish command and a weapon of warning. It can confer the benefit of a cap of water breathing while you hold it, and you can use it as a cube of force by choosing the effect, instead of pressing cube sides to select it.",
	">>Sentience<<. Wave is a sentient weapon of neutral alignment, with an Intelligence of 14, a Wisdom of 10, and a Charisma of 18. It has hearing and darkvision out to a range of 120 feet.",
	"The weapon communicates telepathically with its wielder and can speak, read, and understand Aquan. It can also speak with aquatic animals as if using a Speak with Animals spell, using telepathy to involve its wielder in the conversation.",
	">>Personality<<. When it grows restless, Wave has a habit of humming tunes that vary from sea chanteys to sacred hymns of the sea gods.",
	"Wave zealously desires to convert mortals to the worship of one or more sea gods, or else to consign the faithless to death. Conflict arises if the wielder fails to further the weapon's objectives in the world. The trident has a nostalgic attachment to the place where it was forged, a desolate island called Thunderforge. A sea god imprisoned a family of storm giants there, and the giants forged Wave in an act of devotion to\u2014or rebellion against\u2014that god.",
	"Wave harbors a secret doubt about its own nature and purpose. For all its devotion to the sea gods, Wave fears that it was intended to bring about a particular sea god's demise. This destiny is something Wave might not be able to avert."
];
if (MagicItemsList["trident of fish command"] && MagicItemsList["weapon of warning"] && MagicItemsList["cap of water breathing"] && MagicItemsList["cube of force"]) {
	MagicItemsList["wave"] = {
		name : "Wave",
		source : [["DMG2024", "-"]],
		type : "weapon (trident)",
		rarity : "legendary",
		notLegalAL : true,
		description : "This sentient trident adds +3 to hit and damage and if I score a critical hit with it, the target takes extra necrotic damage equal to half its max HP. It also functions as a trident of fish command, a weapon of warning, cap of water breathing while I hold it, and I can use it as a cube of force. See Notes page.",
		descriptionFull : DMG_waveFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
		attunement : true,
		prerequisite : "Requires attunement by a creature that worships a god of the sea",
		prereqeval : function(v) { return (/deep sashelas|sekolah|ulutiu|umberlee|valkur|poseidon|neptune|aegir|nehalennia|njord/i).test(What("Faith/Deity")); },
		weight : 4,
		weaponOptions : [{
			baseWeapon : "trident",
			regExpSearch : /wave/i,
			name : "Wave",
			source : [["D", 218]],
			description : "Thrown, versatile (1d8); On crit: necrotic damage equal to half target max HP",
			modifiers : [3, 3],
			selectNow : true
		}],
		toNotesPage : [{
			name : "Features",
			note : desc(DMG_waveFullDescription).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/you/ig, "?") + "\n\n" + sentientItemConflictTxt
		}, {
			name : "Contained Items",
			note : [
				"\n\n\u2022 Trident of Fish Command (SRD 247, DMG 209)\n   " + MagicItemsList["trident of fish command"].description,
				"\u2022 Weapon of Warning (DMG 213)\n   " + MagicItemsList["weapon of warning"].description,
				"\u2022 Cap of Water Breathing (DMG 157)\n   " + MagicItemsList["cap of water breathing"].description,
				"\u2022 Cube of Force (SRD 215, DMG 159)" + desc(MagicItemsList["cube of force"].toNotesPage[0].note)
			].join("\n\n")
		}],
		// cube of force & cap of water breathing
		action : [["action", " (Cap of Water Breathing)"], ["action", " (Cube of Force)"]],
		extraLimitedFeatures : [{
			name : "Wave [Cube of Force] (regains 1d20)",
			usages : 36,
			recovery : "dawn"
		}, {
		// trident of fish command
			name : "Wave [Fish Command] (regains 1d3)",
			usages : 3,
			recovery : "dawn"
		}],
		fixedDC : 15,
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
			name : "1 charge",
			spells : ["dominate beast"],
			selection : ["dominate beast"],
			firstCol : 1
		}],
		spellChanges : {
			"dominate beast" : {
				description : "1 beast with swim speed save or charmed, follows telepathic commands, 1 a for complete control",
				changes : "Can only affect beasts with innate swim speed."
			}
		},
		// weapon of warning
		advantages : [["Initiative", true]]
	};
}
MagicItemsList["weapon, +1, +2, or +3"] = {
	name : "Weapon, +1, +2, or +3",
	source : [["DMG2024", "-"]],
	type : "weapon (any)",
	description : "I have a bonus to attack and damage rolls made with this magic weapon. The bonus is determined by the rarity of the magic item: uncommon (+1), rare (+2), or very rare (+3). Select the bonus using the little square button in this magic item line.",
	descriptionFull : "You have a bonus to attack and damage rolls made with this magic weapon. The bonus is determined by the weapon's rarity: uncommon (+1), rare (+2), or very rare (+3).",
	allowDuplicates : true,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "weapon"]
	},
	choices : ["+1 Weapon (uncommon)", "+2 Weapon (rare)", "+3 Weapon (very rare)"],
	"+1 weapon (uncommon)" : {
		name : "Weapon +1",
		nameTest : "+1 Weapon",
		rarity : "uncommon",
		magicItemTable : "?",
		description : "I have a +1 bonus to attack and damage rolls made with this magic weapon.",
		allowDuplicates : true
	},
	"+2 weapon (rare)" : {
		name : "Weapon +2",
		nameTest : "+2 Weapon",
		rarity : "rare",
		magicItemTable : "?",
		description : "I have a +2 bonus to attack and damage rolls made with this magic weapon.",
		allowDuplicates : true
	},
	"+3 weapon (very rare)" : {
		name : "Weapon +3",
		nameTest : "+3 Weapon",
		rarity : "very rare",
		magicItemTable : "?",
		description : "I have a +3 bonus to attack and damage rolls made with this magic weapon.",
		allowDuplicates : true
	}
};
MagicItemsList["weapon of warning"] = {
	name : "Weapon of Warning",
	nameTest : "of Warning",
	source : [["DMG2024", "-"]],
	type : "weapon (any)",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While this magic weapon is on my person, I have advantage on initiative rolls. In addition, both me and my allies within 30 ft of me can't be surprised and the weapon magically awakens us when combat starts, except those incapacitated by something other than nonmagical sleep.",
	descriptionFull : "This magic weapon warns you of danger. While the weapon is on your person, you have advantage on initiative rolls. In addition, you and any of your companions within 30 feet of you can't be surprised, except when incapacitated by something other than nonmagical sleep. The weapon magically awakens you and your companions within range if any of you are sleeping naturally when combat begins.",
	attunement : true,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "prefix",
		descriptionChange : ["replace", "weapon"]
	},
	advantages : [["Initiative", true]],
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && !v.isSpell && (/warning/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the word "Warning" in the name of a weapon, it will be treated as the magic weapon Weapon of Warning.'
		]
	},
	savetxt : { immune : ["surprised"] }
};
MagicItemsList["well of many worlds"] = {
	name : "Well of Many Worlds",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "legendary",
	magicItemTable : "?",
	description : "As an action, I can unfold this black cloth, 6 ft in diameter, and place it on a solid surface, whereupon it creates a two-way portal to another world or plane, a random one each time. I can use an action to grab it from the edges and fold it, closing the portal. Once used in this way, it can't do so again for 1d8 hours.",
	descriptionFull : "This fine black cloth, soft as silk, is folded up to the dimensions of a handkerchief. It unfolds into a circular sheet 6 feet in diameter.\n   You can use an action to unfold and place the well of many worlds on a solid surface, whereupon it creates a two-way portal to another world or plane of existence. Each time the item opens a portal, the DM decides where it leads. You can use an action to close an open portal by taking hold of the edges of the cloth and folding it up. Once well of many worlds has opened a portal, it can't do so again for 1d8 hours.",
	action : [["action", " (place/fold)"]],
	usages : 1,
	recovery : "1d8 h"
};
var DMG_whelmFullDescription = [
	"Whelm is a powerful warhammer forged by dwarves and lost in the dungeon of White Plume Mountain.",
	"You gain a +3 bonus to attack and damage rolls made with this magic weapon. At dawn the day after you first make an attack roll with Whelm, you develop a fear of being outdoors that persists as long as you remain attuned to the weapon. This causes you to have disadvantage on attack rolls, saving throws, and ability checks while you can see the daytime sky.",
	">>Thrown Weapon<<. Whelm has the thrown property, with a normal range of 20 feet and a long range of 60 feet. When you hit with a ranged weapon attack using it, the target takes an extra 1d8 bludgeoning damage, or an extra 2d8 bludgeoning damage if the target is a giant. Each time you throw the weapon, it flies back to your hand after the attack. If you don't have a hand free, the weapon lands at your feet.",
	">>Shock Wave<<. You can use an action to strike the ground with Whelm and send a shock wave out from the point of impact. Each creature of your choice on the ground within 60 feet of that point must succeed on a DC 15 Constitution saving throw or become stunned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once used, this property can't be used again until the next dawn.",
	">>Supernatural Awareness<<. While you are holding the weapon, it alerts you to the location of any secret or concealed doors within 30 feet of you. In addition, you can use an action to cast Detect Evil and Good or Locate Object from the weapon. Once you cast either spell, you can't cast it from the weapon again until the next dawn.",
	">>Sentience<<. Whelm is a sentient lawful neutral weapon with an Intelligence of 15, a Wisdom of 12, and a Charisma of 15. It has hearing and darkvision out to a range of 120 feet.",
	"The weapon communicates telepathically with its wielder and can speak, read, and understand Dwarvish. Giant, and Goblin. It shouts battle cries in Dwarvish when used in combat.",
	">>Personality<<. Whelm's purpose is to slaughter giants and goblinoids. It also seeks to protect dwarves against all enemies. Conflict arises if the wielder fails to destroy goblins and giants or to protect dwarves. Whelm has ties to the dwarf clan that created it, variously called the Dankil or the Mightyhammer clan. It longs to be returned to that clan. It would do anything to protect those dwarves from harm. The hammer also carries a secret shame. Centuries ago, a dwarf named Ctenmiir wielded it valiantly for a time. But Ctenmiir was turned into a vampire. His will was strong enough that he bent Whelm to his evil purposes, even killing members of his own clan."
];
MagicItemsList["whelm"] = {
	name : "Whelm",
	source : [["DMG2024", "-"]],
	type : "weapon (warhammer)",
	rarity : "legendary",
	notLegalAL : true,
	description : "This sentient warhammer adds +3 to hit and damage, has the thrown property, deals extra damage when thrown, and returns to my hand when thrown. I can use it to create a shock wave. It makes me afraid of the outdoors, so while I can see the daytime sky, I have disadv. on attacks, saves, and checks. See Notes page.",
	descriptionFull : DMG_whelmFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	attunement : true,
	prerequisite : "Requires attunement by a dwarf",
	prereqeval : function(v) { return CurrentRace.known.indexOf('dwarf') !== -1; },
	weight : 2,
	weaponOptions : [{
		baseWeapon : "warhammer",
		regExpSearch : /whelm/i,
		name : "Whelm",
		source : [["D", 218]],
		range : "Melee, 20/60 ft",
		description : "Versatile (1d10), thrown, returning; +1d8 damage when thrown (+2d8 vs. giants)",
		modifiers : [3, 3],
		selectNow : true
	}],
	toNotesPage : [{
		name : "Features",
		note : desc(DMG_whelmFullDescription).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/your/g, "my").replace(/you are /ig, "I am ").replace(/(of|on|causes|alerts) you/ig, "$1 me").replace(/you /ig, "I ") + "\n\n" + sentientItemConflictTxt
	}],
	action : [["action", " (Shock Wave)"]],
	extraLimitedFeatures : [{
		name : "Whelm [Shock Wave]",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Whelm [Detect Evil and Good]",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Whelm [Locate Object]",
		usages : 1,
		recovery : "dawn"
	}],
	vision : [["Know location of secret doors", 30]],
	spellcastingBonus : [{
		name : "Once per dawn",
		spells : ["detect evil and good", "locate object"],
		selection : ["detect evil and good", "locate object"],
		firstCol : "oncelr"
	}]
};
MagicItemsList["wind fan"] = {
	name : "Wind Fan",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While holding this fan, I can use an action to cast Gust of Wind (save DC 13) from it. Once used, the fan shouldn't be used again until the next dawn. Each time it is used again before then, it has a cumulative 20% chance of not working and tearing into useless, nonmagical tatters.",
	descriptionFull : "While holding this fan, you can use an action to cast the Gust of Wind spell (save DC 13) from it. Once used, the fan shouldn't be used again until the next dawn. Each time it is used again before then, it has a cumulative 20% chance of not working and tearing into useless, nonmagical tatters.",
	usages : 1,
	recovery : "dawn",
	additional : "more uses +20% to destroy",
	fixedDC : 13,
	spellcastingBonus : {
		name : "Once per dawn",
		spells : ["gust of wind"],
		selection : ["gust of wind"],
		firstCol : "oncelr"
	}
};
MagicItemsList["winged boots"] = {
	name : "Winged Boots",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "These boots grant me a flying speed equal to my walking speed. I can use them to fly for up to 4 hours, all at once or incremental, using a minimum of 1 minute each time. If I'm flying when the duration expires, I descend 30 ft per round. They regain 2 hours of flying capability for every 12 hours they aren't in use.",
	descriptionFull : "While you wear these boots, you have a flying speed equal to your walking speed. You can use the boots to fly for up to 4 hours, all at once or in several shorter flights, each one using a minimum of 1 minute from the duration. If you are flying when the duration expires, you descend at a rate of 30 feet per round until you land.\n   The boots regain 2 hours of flying capability for every 12 hours they aren't in use.",
	attunement : true,
	usages : "240 min",
	recovery : "Special",
	additional : "regains 2h/12h"
};
MagicItemsList["wings of flying"] = {
	name : "Wings of Flying",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "While wearing this cloak, I can use an action to speak its command word. This turns the cloak into a pair of bat wings or bird wings on my back for 1 hour or until I repeat the command word as an action. The wings give me a flying speed of 60 ft. When they disappear, I can't use them again for 1d12 hours.",
	descriptionFull : "While wearing this cloak, you can use an action to speak its command word. This turns the cloak into a pair of bat wings or bird wings on your back for 1 hour or until you repeat the command word as an action. The wings give you a flying speed of 60 feet. When they disappear, you can't use them again for 1d12 hours.",
	attunement : true,
	action : [["action", " (start/stop)"]],
	usages : 1,
	recovery : "1d12 h"
};
MagicItemsList["wraps of unarmed power"] = {  //May thematically be a replacement for the Wraps of Unarmed Prowess, but do technically have a different name.
	name : "Wraps of Unarmed Power, +1, +2, or +3",
	nameTest : "Wraps of Unarmed Power",
	source : [["DMG2024", "-"]], // Chapter 9: Knight
	magicItemTable : "?",
	type : "wondrous item",
	description : "While wearing these cloth wraps, my unarmed strikes are considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks, and I gain a bonus to their attack and damage rolls. The bonus is determined by rarity: uncommon (+1), rare (+2), or very rare (+3).",
	descriptionFull : "While you're wearing these cloth wraps, your unarmed strikes are considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks and damage, and you gain a bonus to the attack and damage rolls of your unarmed strikes. The bonus is determined by the wraps' rarity: uncommon (+1), rare (+2), or very rare (+3).",
	choices : ["+1 Wraps of Unarmed Power (uncommon)", "+2 Wraps of Unarmed Power (rare)", "+3 Wraps of Unarmed Power (very rare)"],
	"+1 wraps of unarmed power (uncommon)" : {
		name : "Wraps of Unarmed Power +1",
		nameTest : "+1 Wraps of Unarmed Power",
		rarity : "uncommon",
		description : "While I'm wearing these cloth wraps, I gain a +1 bonus to the attack and damage rolls of my unarmed strikes. My unarmed strikes are considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks and damage.",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.baseWeaponName == "unarmed strike" && !/counts as( a)? magical/i.test(fields.Description)) {
						fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical';
					}
				},
				"My unarmed strikes get a +1 bonus to To Hit and Damage and count as magical for overcoming resistances and immunities.",
				700
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.baseWeaponName == "unarmed strike") {
						output.magic += 1;
					}
				}, ''
			]
		}
	},
	"+2 wraps of unarmed power (rare)" : {
		name : "Wraps of Unarmed Power +2",
		nameTest : "+2 Wraps of Unarmed Power",
		rarity : "rare",
		description : "While I'm wearing these cloth wraps, I gain a +2 bonus to the attack and damage rolls of my unarmed strikes. My unarmed strikes are considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks and damage.",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.baseWeaponName == "unarmed strike" && !/counts as( a)? magical/i.test(fields.Description)) {
						fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical';
					}
				},
				"My unarmed strikes get a +2 bonus to To Hit and Damage and count as magical for overcoming resistances and immunities.",
				700
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.baseWeaponName == "unarmed strike") {
						output.magic += 2;
					}
				}, ''
			]
		}
	},
	"+3 wraps of unarmed power (very rare)" : {
		name : "Wraps of Unarmed Power +3",
		nameTest : "+3 Wraps of Unarmed Power",
		rarity : "very rare",
		description : "While I'm wearing these cloth wraps, I gain a +3 bonus to the attack and damage rolls of my unarmed strikes. My unarmed strikes are considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks and damage.",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.baseWeaponName == "unarmed strike" && !/counts as( a)? magical/i.test(fields.Description)) {
						fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical';
					}
				},
				"My unarmed strikes get a +3 bonus to To Hit and Damage and count as magical for overcoming resistances and immunities.",
				700
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.baseWeaponName == "unarmed strike") {
						output.magic += 3;
					}
				}, ''
			]
		}
	}
};

CreatureList["avatar of death"] = {
	name : "Avatar of Death",
	regExpSearch : /^(?=.*(avatar))(?=.*(death)).*$/i,
	source : [["DMG2024", "-"]],
	size : 3,
	type : "Undead",
	alignment : "Neutral Evil",
	ac : 20,
	hp : 0,
	hd : [0, 0],
	speed : "60 ft., Fly 60 ft. (hover)",
	scores : [16, 16, 16, 16, 16, 16],
	saves : ["", "", "", "", "", ""],
	damage_immunities : "Necrotic; Poison",
	condition_immunities : "Charmed; Exhausted; Frightened; Paralyzed; Petrified; Poisoned; Unconscious",
	senses : "Truesight 60 ft.",
	passivePerception : 13,
	languages : "All languages known to its summoner",
	challengeRating : "None",
	proficiencyBonus : 2,
	proficiencyBonusLinked : true,
	attacksAction : 1,
	features : [{
		name : "Incorporeal Movement",
		description : "The avatar can move through other creatures and objects as if they were Difficult Terrain. It takes 5 (1d10) Force damage if it ends its turn inside an object.",
		joinString : "\n   ",
	}, {
		name : "HP Calculation",
		description : "Half the HP maximum of its summoner.",
		joinString : "\n   ",
	}],
	actions : [{
		name : "Multiattack",
		description : "The avatar makes a number of Reaping Scythe attacks equal to half the summoner’s Proficiency Bonus (rounded up).",
		joinString : "\n   ",
	}],
	attacks : [{
		name : "Reaping Scythe",
		ability : 1,
		damage : [1, 8, "Slashing"],
		range : "Melee (5 ft.)",
		description : "Automatic hit; plus 1d8 Necrotic damage",
	}],
};
CreatureList["giant fly"] = {
	name : "Giant Fly",
	regExpSearch : /^(?=.*(giant))(?=.*(fly)).*$/i,
	source : [["DMG2024", "-"]],
	size : 2,
	type : "Beast",
	alignment : "Unaligned",
	ac : 11,
	hp : 19,
	hd : [3, 10],
	speed : "30 ft., Fly 60 ft.",
	scores : [14, 13, 13, 2, 10, 3],
	saves : ["", "", "", "", "", ""],
	senses : "Darkvision 60 ft.",
	passivePerception : 10,
	languages : "None",
	challengeRating : 0,
	proficiencyBonus : 2,
};
