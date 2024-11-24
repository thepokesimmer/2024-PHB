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
	source : [["DMG2024", 227]],
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
	source : [["DMG2024", 227]],
	magicItemTable : "?",
	type : "weapon (any ammunition)",
	rarity : "uncommon",
	description : "Whenever ammunition made or coated with adamantine hits an object, the hit is a Critical Hit.",
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
	source : [["DMG2024", 227]],
	magicItemTable : "?",
	type : "weapon (any melee)",
	rarity : "uncommon",
	description : "Whenever a weapon made or coated with adamantine hits an object, the hit is a Critical Hit.",
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
	source : [["DMG2024", 227]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "As a Magic action, command the jug to produce liquid; Utilize action to uncork it and pour 2 gal/min. After producing, it only makes the same up to its max, until next dawn. Acid (8 fl oz), basic poison (4 fl oz), beer (4 gal), honey/wine (1 gal), fresh water (8 gal), mayonnaise/vinegar (2 gal), oil (1 qt), salt water (12 gal).",
	descriptionLong : "A heavy ceramic jug. As a Magic action, the jug can be commanded to hold a chosen liquid. With a Utilize action, I can uncork the jug and pour the liquid out at 2 gallons per minute. Once commanded to produce a liquid, it can't produce a different one or more than the maximum of one, until the next dawn.\rLiquids (with maximum): acid (8 fl. oz.), basic poison (4 fl. oz.), beer (4 gallons), honey (1 gallon), mayonnaise (2 gallons), oil (1 quart), vinegar (2 gallons), fresh water (8 gallons), salt water (12 gallons), wine (1 gallon).",
	descriptionFull : "This ceramic jug appears to be able to hold a gallon of liquid and weighs 12 pounds whether full or empty. The jug sloshes when it is shaken, even if the jug is empty."+
	"\n   You can take a Magic action and name one liquid from the Alchemy Jug Liquids table to cause the jug to produce the chosen liquid. Afterward, you can uncork the jug as a Utilize action and pour that liquid out, up to 2 gallons per minute. The maximum amount of liquid the jug can produce depends on the liquid you named."+
	"\n   Once the jug starts producing a liquid, it can’t produce a different one, or more of one that has reached its maximum, until the next dawn.\n\n"+
	toUni("Max\t\tLiquid")+ "\n8 ounces\t\tAcid\n4 ounces\t\tBasic poison\n4 gallons\t\tBeer\n1 gallon\t\tHoney\n2 gallons\t\tMayonnaise\n1 quart\t\tOil\n2 gallons\t\tVinegar\n8 gallons\t\tWater, fresh\n12 gallons\tWater, salt\n1 gallon\t\tWine",
	weight : 12
};
MagicItemsList["ammunition, +1, +2, or +3"] = {
	name : "Ammunition, +1, +2, or +3",
	source : [["DMG2024", 228]],
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
	source : [["DMG2024", 228]],
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
	source : [["DMG2024", 228]],
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
	source : [["DMG2024", 228]],
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
	source : [["DMG2024", 229]],
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
	source : [["DMG2024", 229]],
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
	source : [["DMG2024", 229]],
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
	source : [["DMG2024", 230]],
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
	source : [["DMG2024", 230]],
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
	source : [["DMG2024", 230]],
	type : "armor (plate)",
	rarity : "legendary",
	magicItemTable : "?",
	description : "I have Resistance to Bludgeoning, Piercing, and Slashing damage while I wear this plate armor. As a Magic action, I can make myself immune to Bludgeoning, Piercing, and Slashing damage for 10 minutes or until I am no longer wearing the armor. Once this Magic action is used, it can't be used again until the next dawn.",
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
	source : [["DMG2024", 231]],
	type : "armor (light, medium, or heavy)",
	rarity : "rare",
	description : "Select the damage type that this armor gives Resistance to using the square button in this line. While I'm wearing this armor and attuned to it, I gain Resistance to one type of damage.",
	descriptionFull : "You have Resistance to one type of damage while you wear this armor. The DM chooses the type or determines it randomly by rolling on the following table.\n\n" + toUni("d10\tType\t\td10\tType") + "\n 1\tAcid\t\t 6\tNecrotic\n 2\tCold\t\t 7\tPoison\n 3\tFire\t\t 8\tPsychic\n 4\tForce\t\t 9\tRadiant\n 5\tLightning   \t 10\tThunder",
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
		description : "While I'm wearing this armor and I'm attuned to it, I have Resistance to Acid damage.",
		dmgres : ["Acid"]
	},
	"cold" : {
		name : "Armor of Cold Resistance",
		description : "While I'm wearing this armor and I'm attuned to it, I have Resistance to Cold damage.",
		dmgres : ["Cold"]
	},
	"fire" : {
		name : "Armor of Fire Resistance",
		description : "While I'm wearing this armor and I'm attuned to it, I have Resistance to Fire damage.",
		dmgres : ["Fire"]
	},
	"force" : {
		name : "Armor of Force Resistance",
		description : "While I'm wearing this armor and I'm attuned to it, I have Resistance to Force damage.",
		dmgres : ["Force"]
	},
	"lightning" : {
		name : "Armor of Lightning Resistance",
		description : "While I'm wearing this armor and I'm attuned to it, I have Resistance to Lightning damage.",
		dmgres : ["Lightning"]
	},
	"necrotic" : {
		name : "Armor of Necrotic Resistance",
		description : "While I'm wearing this armor and I'm attuned to it, I have Resistance to Necrotic damage.",
		dmgres : ["Necrotic"]
	},
	"poison" : {
		name : "Armor of Poison Resistance",
		description : "While I'm wearing this armor and I'm attuned to it, I have Resistance to Poison damage.",
		dmgres : ["Poison"]
	},
	"psychic" : {
		name : "Armor of Psychic Resistance",
		description : "While I'm wearing this armor and I'm attuned to it, I have Resistance to Psychic damage.",
		dmgres : ["Psychic"]
	},
	"radiant" : {
		name : "Armor of Radiant Resistance",
		description : "While I'm wearing this armor and I'm attuned to it, I have Resistance to Radiant damage.",
		dmgres : ["Radiant"]
	},
	"thunder" : {
		name : "Armor of Thunder Resistance",
		description : "While I'm wearing this armor and I'm attuned to it, I have Resistance to Thunder damage.",
		dmgres : ["Thunder"]
	}
};
MagicItemsList["armor of vulnerability"] = { // contains contributions by Larry Hoy
	name: "Armor of Vulnerability",
	source : [["DMG2024", 231]],
	type : "armor (light, medium, or heavy)",
	rarity: "rare",
	magicItemTable : "?",
	description: "While wearing this armor, I have Resistance to one of the following damage types: Bludgeoning, Piercing, or Slashing; unfortunately, I have Vulnerability to the other two until I am targeted by a Remove Curse spell.",
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
		description: "While wearing this armor, I have Resistance to Bludgeoning damage. Additionally, I have Vulnerability to Piercing and Slashing damage until I am targeted by a Remove Curse spell.",
		dmgres : ["Bludgeoning"],
		savetxt : { text : ["Vulnerable to Piercing \u0026 Slashing damage"] },
		descriptionFull: "While wearing this armor, I have Resistance to Bludgeoning damage.\n   " + toUni("Curse") + ". This armor is cursed, a fact that is revealed only when an Identify spell is cast on the armor or I attune to it. Attuning to the armor curses me until I am targeted by the Remove Curse spell or similar magic; removing the armor fails to end the curse. While cursed, I have Vulnerability to Piercing and Slashing damage."
	},
	"piercing" : {
		description: "While wearing this armor, I have Resistance to Piercing damage. Additionally, I have Vulnerability to Bludgeoning and Slashing damage until I am targeted by a Remove Curse spell.",
		dmgres : ["Piercing"],
		savetxt : { text : ["Vulnerable to Bludgeoning \u0026 Slashing damage"] },
		descriptionFull: "While wearing this armor, I have Resistance to Piercing damage.\n   " + toUni("Curse") + ". This armor is cursed, a fact that is revealed only when an Identify spell is cast on the armor or I attune to it. Attuning to the armor curses me until I am targeted by the Remove Curse spell or similar magic; removing the armor fails to end the curse. While cursed, I have Vulnerability to Bludgeoning and Slashing damage."
	},
	"slashing" : {
		description: "While wearing this armor, I have Resistance to Slashing damage. Additionally, I have Vulnerability to Bludgeoning and Piercing damage until I am targeted by a Remove Curse spell.",
		dmgres : ["Slashing"],
		savetxt : { text : ["Vulnerable to Bludgeoning \u0026 Piercing damage"] },
		descriptionFull: "While wearing this armor, I have Resistance to Slashing damage.\n   " + toUni("Curse") + ". This armor is cursed, a fact that is revealed only when an Identify spell is cast on the armor or I attune to it. Attuning to the armor curses me until I am targeted by the Remove Curse spell or similar magic; removing the armor fails to end the curse. While cursed, I have Vulnerability to Bludgeoning and Piercing damage."
	}
};
MagicItemsList["arrow-catching shield"] = { // contains contributions by Larry Hoy
	name : "Arrow-Catching Shield",
	source : [["DMG2024", 231]],
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
	source : [["DMG2024", 232]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	action : [["action", "Animate Broom"]],
	description : "As a Magic action, I can animate this broom. It becomes an Animated Broom that acts directly after me in initiative and obeys my commands (no action required). If the broom is reduced to 0 HP while animated, it's destroyed. As a Bonus Action, I can cause the broom to become inanimate.",
    descriptionLong : "While holding the broom, I can take a Magic action to transform it into an Animated Broom under my control. The broom then moves into an unoccupied space as close to me as possible. The broom acts immediately after me in initiative and remains active until I use a Bonus Action to render it inanimate. While not Incapacitated, I can mentally command the broom (no action required). I decide what action the broom takes and where it moves during its next turn, or I can issue it a general command, such as attack my enemies or guard a location. If the broom is reduced to 0 HP while animated, it's destroyed.",
	descriptionFull : "The archfey Baba Yaga crafted many of these magic brooms. No two appear exactly alike. While holding the broom, you can take a Magic action to transform it into an Animated Broom under your control. The broom then moves into an unoccupied space as close to you as possible. The broom acts immediately after you on your Initiative count and remains animate until you take a Bonus Action and use a command word to render it inanimate.\n   On your turn, you can mentally command the animated broom if it is within 30 feet of you and you don’t have the Incapacitated condition (no action required). You decide what action the broom takes and where it moves during its next turn, or you can issue it a general command, such as to attack your enemies or guard a location.\n   If the broom is reduced to 0 Hit Points, it shatters and is destroyed. If the broom reverts to its inanimate form before losing all its Hit Points, it regains all of them.",
	attunement : true,
	weight : 1,
};
MagicItemsList["bag of beans"] = { // contributed by Larry Hoy
	name : "Bag of Beans",
	source : [["DMG2024", 233]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "This heavy cloth bag contains 3d4 dry beans. I can dump all on the ground, causing a 10-ft explosion that deals 5d4 force damage to all in the area, DC 15 Dex save to half, and ignites unattended flammable objects. I can plant and water a bean to get an effect 1 minute later, chosen by the DM, see notes page.",
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
	source : [["DMG2024", 234]],
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
	source : [["DMG2024", 234]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "This bag is 2 ft in diameter at the mouth, 4 ft deep, and 5 lb regardless of content. It can hold up to 500 lb, not exceeding a volume of 64 cu ft. Retrieving an item from it requires an action. If it's overloaded, pierced, or torn, it's destroyed with its contents in the Astral plane. If turned inside out, all its contents spill forth.",
	descriptionLong : "This bag is 2 ft in diameter at the mouth, 4 ft deep, and 5 lb regardless of content. It can hold up to 500 lb, not exceeding a volume of 64 cu ft. Retrieving an item from it requires an action. If it is overloaded, pierced, or torn, it is destroyed, leaving its contents in the Astral plane. If it is turned inside out, all its contents spill forth unharmed. Breathing creatures inside the bag can breath for 10 minutes divided by the number of creatures in it (minimum 1 minute), after which they begin to suffocate. Placing the bag in an other extradimensional space instantly destroys both and opens a gate to the Astral Plane.",
	descriptionFull : "This bag has an interior space considerably larger than its outside dimensions—roughly 2 feet square and 4 feet deep on the inside. The bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet. The bag weighs 5 pounds, regardless of its contents. Retrieving an item from the bag requires a Utilize action.\n   If the bag is overloaded, pierced, or torn, it is destroyed, and its contents are scattered in the Astral Plane. If the bag is turned inside out, its contents spill forth unharmed, but the bag must be put right before it can be used again. The bag holds enough air for 10 minutes of breathing, divided by the number of breathing creatures inside.\n   Placing a Bag of Holding inside an extradimensional space created by a Heward’s Handy Haversack, Portable Hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within a 10-foot-radius Sphere centered on the gate is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way and can’t be reopened.",
	weight : 5,
	action : [["action", " (retrieve item)"]]
};
MagicItemsList["bag of tricks"] = { // contributed by Larry Hoy
	name: "Bag of Tricks",
	source: [["DMG2024", 234]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable : "?",
	description: "This ordinary bag, made from gray, rust, or tan cloth, appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object; which, as an action, I can throw 20 ft, where it transforms into a random creature.",
	descriptionFull: "This bag made from gray, rust, or tan cloth appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object.\n   You can take a Magic action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling on the table that corresponds to the bag’s color. See the Monster Manual for the creature’s stat block. The creature vanishes at the next dawn or when it is reduced to 0 Hit Points.\n   The creature is Friendly to you and your allies, and it acts immediately after you on your Initiative count. You can take a Bonus Action to command how the creature moves and what action it takes on its next turn, such as attacking an enemy. In the absence of such orders, the creature acts in a fashion appropriate to its nature.\n   Once three fuzzy objects have been pulled from the bag, the bag can’t be used again until the next dawn.",
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
	source : [["DMG2024", 234]],
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
	source : [["DMG2024", 235]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "Once I can eat this spongy, flavorless, gelatinous bead. It dissolves on my tongue and provides as much nourishment as 1 day of rations.",
	descriptionFull : "This flavorless, gelatinous bead dissolves on your tongue and provides as much nourishment as 1 day of Rations."
};
MagicItemsList["bead of refreshment"] = {
	name : "Bead of Refreshment",
	source : [["DMG2024", 235]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "Once I can drop this spongy, flavorless, gelatinous bead in liquid. It dissolves in the liquid and transforms up to a pint of it into fresh, cold drinking water. The bead has no effect on magical liquids or harmful substances such as poison.",
	descriptionFull : "This flavorless, gelatinous bead dissolves in liquid, transforming up to a pint of the liquid into fresh, cold drinking water. The bead has no effect on magical liquids or harmful substances such as poison."
};
MagicItemsList["belt of dwarvenkind"] = {
	name : "Belt of Dwarvenkind",
	source : [["DMG2024", 235]],
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
	source : [["DMG2024", 236]],
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
	source : [["DMG2024", 236]],
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
	source : [["DMG2024", 236]],
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
	source : [["DMG2024", 239]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While I wear these boots, my steps make no sound, regardless of the surface I am moving across. I also have advantage on Dexterity (Stealth) checks that rely on moving silently.",
	descriptionFull : "While you wear these boots, your steps make no sound, regardless of the surface you are moving across. You also have Advantage on Dexterity (Stealth) checks.",
	advantages : [["Stealth", true]],
};
MagicItemsList["boots of false tracks"] = {
	name : "Boots of False Tracks",
	source : [["DMG2024", 239]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	attunement : true,
	description : "While wearing the boots, I can choose to have them leave tracks like those of another kind of humanoid of my size.",
	descriptionFull : "While wearing these boots, you can have them leave tracks like those of any kind of Humanoid of your size."
};
MagicItemsList["boots of levitation"] = { // contributed by AelarTheElfRogue
	name : "Boots of Levitation",
	source : [["DMG2024", 239]],
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
	source : [["DMG2024", 240]],
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
	source : [["DMG2024", 240]],
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
	source : [["DMG2024", 240]],
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
	source : [["DMG2024", 240]],
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
	source : [["DMG2024", 240]],
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
	source : [["DMG2024", 241]],
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
	source : [["DMG2024", 241]],
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
	source : [["DMG2024", 241]],
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
	source : [["DMG2024", 241]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	attunement : true,
	description : "With the command word, this broom hovers and can either be ridden in the air or sent alone up to 1 mile by naming a familiar location. It has a flying speed of 50 ft, holds up to 400 lb, but only has 30 ft speed if over 200 lb. It stops hovering when I land. With another command word, it flies to me if within 1 mile.",
	descriptionFull : "This wooden broom functions like a mundane broom until you stand astride it and take a Magic action to make it hover beneath you, at which time it can be ridden in the air. It has a Fly Speed of 50 feet. It can carry up to 400 pounds, but its Fly Speed becomes 30 feet while carrying over 200 pounds. The broom stops hovering when you land or when you’re no longer riding it.\n   As a Magic action, you can send the broom to travel alone to a destination within 1 mile of you if you name the location and are familiar with it. The broom comes back to you when you take a Magic action and use a command word if the broom is still within 1 mile of you.",
	weight : 3
};
MagicItemsList["candle of invocation"] = {
	name : "Candle of Invocation",
	source : [["DMG2024", 241]],
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
	source : [["DMG2024", 242]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "The flame of this candle isn’t extinguished when immersed in water. It gives off light and heat like a normal candle.",
	descriptionFull : "The flame of this candle isn’t extinguished when immersed in water. It gives off light and heat like a normal candle."
};
MagicItemsList["cape of the mountebank"] = { // contributed by Smashman
	name : "Cape of the Mountebank",
	source : [["DMG2024", 242]],
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
	source : [["DMG2024", 242]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While wearing this cap underwater, I can speak its command word as a magic action to create a bubble of air around my head. It allows me to breathe normally underwater. This bubble stays with me until I speak the command word again, the cap is removed, or I am no longer underwater.",
	descriptionFull : "While wearing this cap underwater, you can take a Magic action to create a bubble of air around your head. This bubble allows you to breathe normally underwater. This bubble stays with you until the cap is removed or you are no longer underwater.",
	action : [["action", ""]]
};
MagicItemsList["carpet of flying"] = {
	name : "Carpet of Flying",
	source : [["DMG2024", 242]],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "?",
	description : "I can speak the carpet's command word as a Magic action to make the carpet hover and fly. It moves according to my spoken directions if I am within 30 feet of it. A carpet can carry up to twice the weight for its type, but it flies at half speed if it carries more than its normal capacity.",
	descriptionFull : "You can make this carpet hover and fly by taking a Magic action and using the carpet’s command word. It moves according to your directions if you are within 30 feet of it.\n   Four sizes of Carpet of Flying exist. The DM chooses the size of a given carpet or determines it randomly by rolling on the following table. A carpet can carry up to twice the weight shown on the table, but its Fly Speed is halved if it carries more than its normal capacity.\n\n" + 
	toUni("1d100\tSize\tCapacity\tFlying Speed") + "\n01-20\t3 \xD7 5 ft.\t  200 lb.\t  80 feet\n21-55\t4 \xD7 6 ft.\t  400 lb.\t  60 feet\n56-80\t5 \xD7 7 ft.\t  600 lb.\t  40 feet\n81-00\t6 \xD7 9 ft.\t  800 lb.\t  30 feet",
	action : [["action", ""]],
	choices : ["3 \xD7 5 ft (fly 80 ft, 200 lb)", "4 \xD7 6 ft (fly 60 ft, 400 lb)", "5 \xD7 7 ft (fly 40 ft, 600 lb)", "6 \xD7 9 ft (fly 30 ft, 800 lb)"],
	choicesNotInMenu : true,
	"3 \xD7 5 ft (fly 80 ft, 200 lb)" : {
		name : "Carpet of Flying, 3 ft \xD7 5 ft",
		nameTest : "Carpet of Flying, 1 m \xD7 1,5 m",
		description : "I can speak the carpet's command word as a Magic action to make the 3 ft \xD7 5 ft carpet hover and fly. It moves according to my spoken directions if I am within 30 ft of it. It has a flying speed of 80 ft and can carry up to 400 lb. If it carries more than 200 lb its flying speed is reduced to only 40 ft."
	},
	"4 \xD7 6 ft (fly 60 ft, 400 lb)" : {
		name : "Carpet of Flying, 4 ft \xD7 6 ft",
		nameTest : "Carpet of Flying, 1,2 m \xD7 2 m",
		description : "I can speak the carpet's command word as a Magic action to make the 4 ft \xD7 6 ft carpet hover and fly. It moves according to my spoken directions if I am within 30 ft of it. It has a flying speed of 60 ft and can carry up to 800 lb. If it carries more than 400 lb its flying speed is reduced to only 30 ft."
	},
	"5 \xD7 7 ft (fly 40 ft, 600 lb)" : {
		name : "Carpet of Flying, 5 ft \xD7 7 ft",
		nameTest : "Carpet of Flying, 1,5 m \xD7 2,1 m",
		description : "I can speak the carpet's command word as a Magic action to make the 5 ft \xD7 7 ft carpet hover and fly. It moves according to my spoken directions if I am within 30 ft of it. It has a flying speed of 40 ft and can carry up to 1200 lb. If it carries more than 600 lb its flying speed is reduced to only 20 ft."
	},
	"6 \xD7 9 ft (fly 30 ft, 800 lb)" : {
		name : "Carpet of Flying, 6 ft \xD7 9 ft",
		nameTest : "Carpet of Flying, 1,8 m \xD7 2,7 m",
		description : "I can speak the carpet's command word as a Magic action to make the 6 ft \xD7 9 ft carpet hover and fly. It moves according to my spoken directions if I am within 30 ft of it. It has a flying speed of 30 ft and can carry up to 1600 lb. If it carries more than 800 lb its flying speed is reduced to only 15 ft."
	}
};
MagicItemsList["cast-off armor"] = {
	name : "Cast-Off Armor",
	nameTest : "Cast-Off",
	source : [["DMG2024", 243]],
	magicItemTable : "?",
	type : "armor (light, medium, or heavy)",
	rarity : "common",
	description : "As a Magic action, I can doff this armor.",
	descriptionFull : "You can doff this armor as a Magic action.",
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "suffix",
		descriptionChange : ["prefix", "armor"]
	},
	action : [["action", ""]]
};
MagicItemsList["cauldron of rebirth"] = {
	name : "Cauldron of Rebirth",
	source : [["DMG2024", 243]],
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
	source : [["DMG2024", 243]],
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
	source : [["DMG2024", 243]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "Whenever I roll this six-sided die, I can control which number it rolls.",
	descriptionFull : "Whenever you roll this six-sided die, you can control which number it rolls.",
	attunement : true
};
MagicItemsList["chime of opening"] = { // contributed by AelarTheElfRogue
	name : "Chime of Opening",
	source : [["DMG2024", 244]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "As a Magic action, I can strike the chime to cast Knock. The spell’s customary knocking sound is replaced by the clear, ringing tone of the chime, which is audible out to 300 feet.\n   The chime can be used 10 times. After the tenth time, it cracks and becomes useless.",
	descriptionFull : "This hollow metal tube measures about 1 foot long and weighs 1 pound. As a Magic action, you can strike the chime to cast Knock. The spell’s customary knocking sound is replaced by the clear, ringing tone of the chime, which is audible out to 300 feet.\n   The chime can be used 10 times. After the tenth time, it cracks and becomes useless.",
	spellFirstColTitle : "CH",
	spellcastingBonus : [{
		name : "Chime of Opening",
		spells : ["knock"],
		selection : ["knock"],
		times : 1,
		firstCol : 1,
	}],
	weight : 1,
	action : [["action", ""]],
	usages : 10,
	recovery : "Never"
};
MagicItemsList["circlet of blasting"] = { // contains contributions by Larry Hoy
	name : "Circlet of Blasting",
	source : [["DMG2024", 244]],
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
	source : [["DMG2024", 244]],
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
	source : [["DMG2024", 244]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "As a Bonus Action while wearing this cloak, I can make it billow dramatically.",
	descriptionFull : "While wearing this cloak, you can take a Bonus Action to make it billow dramatically for 1 minute.",
	action : [["bonus action", ""]]
};
MagicItemsList["cloak of displacement"] = { // contributed by Smashman
	name : "Cloak of Displacement",
	source : [["DMG2024", 244]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "While I wear this cloak, creatures have disadvantage on attack rolls against me as I appear to be standing in a slightly different location. If I take damage, this property ceases to function until the start of my next turn. The property is suppressed while I am incapacitated, restrained, or otherwise unable to move.",
	descriptionFull : "While you wear this cloak, it magically projects an illusion that makes you appear to be standing in a place near your actual location, causing any creature to have Disadvantage on attack rolls against you. If you take damage, the property ceases to function until the start of your next turn. This property is suppressed while your Speed is 0.",
	attunement : true
};
MagicItemsList["cloak of elvenkind"] = {
	name : "Cloak of Elvenkind",
	source : [["DMG2024", 244]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While I wear this cloak, Wisdom (Perception) checks made to see me have disadvantage, and I have advantage on Dexterity (Stealth) checks made to hide, as the cloak's color shifts to camouflage me.",
	descriptionFull : "While you wear this cloak, Wisdom (Perception) checks made to perceive you have Disadvantage, and you have Advantage on Dexterity (Stealth) checks.",
	attunement : true,
	advantages : [["Stealth", true]],
};
MagicItemsList["cloak of invisibility"] = {
	name : "Cloak of Invisibility",
	source : [["DMG2024", 244]],
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
	source : [["DMG2024", 245]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "As a bonus action while wearing this cloak, I can change its style, color, and apparent qualities. The cloak's weight doesn't change. Regardless of its appearance, the cloak can't be anything but a cloak. Although it can duplicate the appearance of other magic cloaks, it doesn't gain their magical properties.",
	descriptionFull : "While wearing this cloak, you can take a Bonus Action to change the style, color, and apparent quality of the garment. The cloak’s weight doesn’t change. Regardless of its appearance, the cloak can’t be anything but a cloak. Although it can duplicate the appearance of other magic cloaks, it doesn’t gain their magical properties.",
	action : [["bonus action", ""]]
};
MagicItemsList["cloak of protection"] = {
	name : "Cloak of Protection",
	source : [["DMG2024", 245]],
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
	source : [["DMG2024", 245]],
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
	source : [["DMG2024", 245]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	attunement : true,
	description : "While wearing this cloak, I can breathe underwater, and I have a Swim Speed of 60 feet.",
	descriptionFull : "While wearing this cloak, you can breathe underwater, and you have a Swim Speed of 60 feet.",
	speed : { swim : { spd : "fixed 60", enc : "fixed 50" } }
};
MagicItemsList["clockwork amulet"] = {
	name : "Clockwork Amulet",
	source : [["DMG2024", 245]],
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
	source : [["DMG2024", 245]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "This elegant outfit magically mends itself to counteract daily wear and tear. Pieces of the outfit that are destroyed can't be repaired in this way.",
	descriptionFull : "This elegant outfit magically mends itself to counteract daily wear and tear. Pieces of the outfit that are destroyed can’t be repaired in this way.",
	weight : 4
};
MagicItemsList["crystal ball"] = {
	name : "Crystal Ball",
	source : [["DMG2024", 245]],
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
	source : [["DMG2024", 246]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "Each face of this 1-inch cube has a distinct marking on it. I can press one of these faces, expending a number of charges to cast a spell based on the chosen face, if enough charges remain. The chosen spell is cast. See Notes page for details.",
	descriptionFull : "This cube is about an inch across. Each face has a distinct marking on it. You can press one of those faces, expend the number of charges required for it, and thereby cast the spell associated with it (save DC 17), as shown in the Cube of Force Faces table.\n   The cube starts with 10 charges, and it regains 1d6 expended charges daily at dawn." + 
	toUni("Spell\tCharge Cost") + "\nMage Armor\t1\nShield\t1\nLeomund's Tiny Hut\t3\nMordenkainen's Private Sanctum\t4\nOtiluke's Resilient Sphere\t4\nWall of Force\t5",
	attunement : true,
	usages : 10,
	recovery : "dawn",
	additional : "regains 1d6",
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
	source : [["DMG2024", 247]],
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
	source : [["DMG2024", 247]],
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
	source : [["DMG2024", 247]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	attunement : true,
	description: "As a magic action, I can place this 1-inch adamantine statuette on the ground and speak its command word, making it grow into a 20-ft by 20-ft by 30-ft high adamantine tower with a door facing me, arrow slits on all sides, battlement atop, two floors, and a ladder along one wall ending at a trapdoor to the roof. See Notes page for details.",
	descriptionFull : "As a Magic action, you can place this 1-inch adamantine statuette on the ground and, using a command word, cause it to grow rapidly into a square adamantine tower. Repeating the command word causes the tower to revert to statuette form, which works only if the tower is empty. Each creature in the area where the tower appears is pushed to an unoccupied space outside but next to the tower. Objects in the area that aren’t being worn or carried are also pushed clear of the tower.\n   The tower is 20 feet on a side and 30 feet high, with arrow slits on all sides and a battlement atop it. Its interior is divided into two floors, with a ladder, staircase, or ramp (your choice) connecting them. This ladder, staircase, or ramp ends at a trapdoor leading to the roof. When created, the tower has a single door at ground level on the side facing you. The door opens only at your command, which you can issue as a Bonus Action. It is immune to the Knock spell and similar magic.\n   Magic prevents the tower from being tipped over. The roof, the door, and the walls each have AC 20; HP 100; Immunity to Bludgeoning, Piercing, and Slashing damage except that which is dealt by siege equipment; and Resistance to all other damage. Shrinking the tower back down to statuette form doesn’t repair damage to the tower. Only a Wish spell can repair the tower (this use of the spell counts as replicating a spell of level 8 or lower). Each casting of Wish causes the tower to regain all its Hit Points.",
	action : [["action", ""], ["bonus action", " (Open Door)"]],
	toNotesPage : [{
		name : "Fortress Details",
		note : [
			"As a Magic action I can place this 1-inch adamantine statuette on the ground and speak its command word. The statuette rapidly grows into a fortress that remains until I use a Magic action to speak the command word that dismisses it, which works only if the fortress is empty.",
			"The fortress is a square tower, 20 feet on a side and 30 feet high, with arrow slits on all sides and a battlement atop it. Its interior is divided into two floors. with a ladder running along one wall to connect them. The ladder ends at a trapdoor leading to the roof.",
			"When activated, the tower has a small door on the side facing me. The door opens only at my command, which I can speak as a bonus action. It is immune to the Knock spell and similar magic (e.g., a Chime of Opening).",
			"Each creature in the area where the tower appears is pushed to an unoccupied space outside but next to the tower. Objects in the area that aren’t being worn or carried are also pushed clear of the tower.",
			"The tower is made of adamantine, and its magic prevents it from being tipped over. The roof, the door, and the walls each have 100 hit points, immunity to damage from nonmagical weapons excluding siege weapons, and resistance to all other damage. Only a Wish spell can repair the fortress (this use of the spell counts as replicating a spell of 8th level or lower). Each casting of Wish causes the tower to regain all its Hit Points."
		]
	}]
};
MagicItemsList["dagger of venom"] = {
	name : "Dagger of Venom",
	source : [["DMG2024", 248]],
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
	source : [["DMG2024", 248]],
	type : "weapon (greatsword, longsword, rapier, scimitar, or shortsword)",
	rarity : "very rare",
	magicItemTable : "?",
	attunement : true,
	description : "As a Bonus Action, I can toss this sword into the air and use the command to make it hover, fly up to 30 ft and attack a target of my choice (as if I'm using it).\nI can command it to move/attack again as a bonus action while it hovers and is in 30 ft.\nAfter the 4th attack, it moves 30 ft to return to my hand.",
	descriptionLong : "As a Bonus Action, I can toss this magic sword into the air and use the command word to make it hover, fly up to 30 ft and attack a target of my choice within 5 ft of it.\nThe attack uses my attack roll and ability score for damage as if I would be using the sword.\nI can command it to move and attack again as a bonus action while it hovers.\nAfter the 4th attack, it moves 30 ft to try and return to my hand.\nIf it can't reach me or my hands are full, it falls to the ground after moving.\nIt also ceases to hover if I grasp it or move more than 30 ft away from it.",
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
	source : [["DMG2024", 248]],
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
	source : [["DMG2024", 249]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : 'As a Magic action, I open the flask \u0026 speak a command word, pouring fresh/salt water out until my next turn starts. "Splash" for 1 gal. "Fountain" for 5 gal. "Geyser" for 30 gal in 30 ft \xD7 1 ft geyser. As a bonus action, I can aim it at a target, which has to make a DC 13 Str save or take 1d4 bludgeoning damage and fall prone.',
	descriptionLong : 'As a Magic action, I can remove the stopper from this flask and speak one of three command words, pouring fresh or salt water (my choice) out until my next turn starts. "Splash" produces 1 gallon. "Fountain" produces 5 gallons. "Geyser" produces 30 gallons of water that gushes forth in a geyser 30 ft long by 1 ft wide. As a bonus action while holding it, I can aim the geyser at a creature I can see within 30 ft. The target must succeed on a DC 13 Strength save or take 1d4 bludgeoning damage and fall prone. I can instead target an unattended object weighing up to 200 lb, knocking it over or pushing it up to 15 ft away.',
	descriptionFull : "This stoppered flask sloshes when shaken, as if it contains water. The decanter weighs 2 pounds.\n   You can take a Magic action to remove the stopper and issue one of three command words, whereupon an amount of fresh water or salt water (your choice) pours out of the flask. The water stops pouring out at the start of your next turn. Choose from the following command words:\n \u2022 \"Splash\" The decanter produces 1 gallon of water.\n \u2022 \"Fountain\" The decanter produces 5 gallons of water.\n \u2022 \"Geyser\" The decanter produces 30 gallons of water that gushes forth in a Line 30 feet long and 1 foot wide. If you’re holding the decanter, you can aim the geyser in one direction (no action required). One creature of your choice in the Line must succeed on a DC 13 Strength saving throw or take 1d4 Bludgeoning damage and have the Prone condition. Instead of a creature, you can target one object in the Line that isn’t being worn or carried and that weighs no more than 200 pounds. The object is knocked over by the geyser.",
	weight : 2
};
MagicItemsList["deck of illusions"] = {
	name : "Deck of Illusions",
	source : [["DMG2024", 249]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	action : [["action", ""]],
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
	source : [["DMG2024", 250]],
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
	source : [["DMG2024", 252]],
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
MagicItemsList["demon armor +1"] = { // contains contributions by Larry Hoy
	name : "Demon Armor +1",
	source : [["DMG2024", 252]],
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
	source : [["DMG2024", 254]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "As a Utilize action, I can shackle an incapacitated creature of size Small to Large. They work as mundane manacles and prevent extradimensional movement, but not portal travel. Myself and others I designate can remove them as a Utilize action. The bound target can try every 30 days to break them with a DC 30 Athletics check.",
	descriptionFull : "You can take a Utilize action to place these shackles on a creature that has the Incapacitated condition. The shackles adjust to fit a creature of Small to Large size. The shackles prevent a creature bound by them from using any method of extradimensional movement, including teleportation or travel to a different plane of existence. They don’t prevent the creature from passing through an interdimensional portal.\n   You and any creature you designate when you use the shackles can take a Utilize action to remove them. Once every 30 days, the bound creature can make a DC 30 Strength (Athletics) check. On a successful check, the creature breaks free and destroys the shackles.",
	action : [["action", " (bind/remove)"]]
};
MagicItemsList["dragon scale mail"] = {
	name : "Dragon Scale Mail",
	source : [["DMG2024", 254]],
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
		description : "This scale mail gives +1 to AC, adv. on saves against the breath weapons of dragons, and resistance to acid damage. As an action, I can magically discern the distance and direction to the closest black dragon within 30 miles. Once I use this action, I can't use it again until the next dawn.",
		armorAdd : "Black Dragon Scale Mail",
		dmgres: ["Acid"],
		limfeaname : "Detect Black Dragon",
		action : [["action", "Detect Black Dragon"]]
	},
	"blue (lightning)" : {
		name : "Blue Dragon Scale Mail",
		description : "This scale mail gives +1 to AC, adv. on saves against the breath weapons of dragons, and resistance to lightning damage. As an action, I can magically discern the distance and direction to the closest blue dragon in 30 miles. Once I use this action, I can't use it again until the next dawn.",
		armorAdd : "Blue Dragon Scale Mail",
		dmgres: ["Lightning"],
		limfeaname : "Detect Blue Dragon",
		action : [["action", "Detect Blue Dragon"]]
	},
	"brass (fire)" : {
		name : "Brass Dragon Scale Mail",
		description : "This scale mail gives +1 to AC, adv. on saves against the breath weapons of dragons, and resistance to fire damage. As an action, I can magically discern the distance and direction to the closest brass dragon within 30 miles. Once I use this action, I can't use it again until the next dawn.",
		armorAdd : "Brass Dragon Scale Mail",
		dmgres: ["Fire"],
		limfeaname : "Detect Brass Dragon",
		action : [["action", "Detect Brass Dragon"]]
	},
	"bronze (lightning)" : {
		name : "Bronze Dragon Scale Mail",
		description : "This scale mail gives +1 to AC, adv. on saves against the breath weapons of dragons, and resistance to lightning damage. As an action, I can magically discern the distance and direction to the closest bronze dragon in 30 miles. Once I use this action, I can't use it again until the next dawn.",
		armorAdd : "Bronze Dragon Scale Mail",
		dmgres: ["Lightning"],
		limfeaname : "Detect Bronze Dragon",
		action : [["action", "Detect Bronze Dragon"]]
	},
	"copper (acid)" : {
		name : "Copper Dragon Scale Mail",
		description : "This scale mail gives +1 to AC, adv. on saves against the breath weapons of dragons, and resistance to acid damage. As an action, I can magically discern the distance and direction to the closest copper dragon within 30 miles. Once I use this action, I can't use it again until the next dawn.",
		armorAdd : "Copper Dragon Scale Mail",
		dmgres: ["Acid"],
		limfeaname : "Detect Copper Dragon",
		action : [["action", "Detect Copper Dragon"]]
	},
	"gold (fire)" : {
		name : "Gold Dragon Scale Mail",
		description : "This scale mail gives +1 to AC, adv. on saves against the breath weapons of dragons, and resistance to fire damage. As an action, I can magically discern the distance and direction to the closest gold dragon within 30 miles. Once I use this action, I can't use it again until the next dawn.",
		armorAdd : "Gold Dragon Scale Mail",
		dmgres: ["Fire"],
		limfeaname : "Detect Gold Dragon",
		action : [["action", "Detect Gold Dragon"]]
	},
	"green (poison)" : {
		name : "Green Dragon Scale Mail",
		description : "This scale mail gives +1 to AC, adv. on saves against the breath weapons of dragons, and resistance to poison damage. As an action, I can magically discern the distance and direction to the closest green dragon in 30 miles. Once I use this action, I can't use it again until the next dawn.",
		armorAdd : "Green Dragon Scale Mail",
		dmgres: ["Poison"],
		limfeaname : "Detect Green Dragon",
		action : [["action", "Detect Green Dragon"]]
	},
	"red (fire)" : {
		name : "Red Dragon Scale Mail",
		description : "This scale mail gives +1 to AC, adv. on saves against the breath weapons of dragons, and resistance to fire damage. As an action, I can magically discern the distance and direction to the closest red dragon within 30 miles. Once I use this action, I can't use it again until the next dawn.",
		armorAdd : "Red Dragon Scale Mail",
		dmgres: ["Fire"],
		limfeaname : "Detect Red Dragon",
		action : [["action", "Detect Red Dragon"]]
	},
	"silver (cold)" : {
		name : "Silver Dragon Scale Mail",
		description : "This scale mail gives +1 to AC, adv. on saves against the breath weapons of dragons, and resistance to cold damage. As an action, I can magically discern the distance and direction to the closest silver dragon within 30 miles. Once I use this action, I can't use it again until the next dawn.",
		armorAdd : "Silver Dragon Scale Mail",
		dmgres: ["Cold"],
		limfeaname : "Detect Silver Dragon",
		action : [["action", "Detect Silver Dragon"]]
	},
	"white (cold)" : {
		name : "White Dragon Scale Mail",
		description : "This scale mail gives +1 to AC, adv. on saves against the breath weapons of dragons, and resistance to cold damage. As an action, I can magically discern the distance and direction to the closest white dragon within 30 miles. Once I use this action, I can't use it again until the next dawn.",
		armorAdd : "White Dragon Scale Mail",
		dmgres: ["Cold"],
		limfeaname : "Detect White Dragon",
		action : [["action", "Detect White Dragon"]]
	}
};
MagicItemsList["dragon slayer"] = {
	name : "Dragon Slayer",
	source : [["DMG2024", 254]],
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
	source : [["DMG2024", 254]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "While I'm wearing this fearsome steel helm, my eyes glow red and the rest of my face is hidden in shadow.",
	descriptionFull : "While you’re wearing this fearsome steel helm, your eyes glow red and the rest of your face is hidden in shadow.",
	weight : 1
};
MagicItemsList["driftglobe"] = {
	name : "Driftglobe",
	source : [["DMG2024", 254]],
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
	source : [["DMG2024", 255]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "Once as a Utilize action, I can throw this dust into the air. By doing so, me and all creatures/objects within a 10-ft emanation become invisible for 2d4 minutes. The duration is the same for all subjects. If a creature affected by the dust makes an attack roll, deals damage, or casts a spell, the invisibility ends for that creature.",
	descriptionFull : "This powder resembles fine sand. There is enough of it for one use. When you take a Utilize action to throw the dust into the air, you and each creature and object within a 10-foot Emanation originating from you have the Invisible condition for 2d4 minutes. The duration is the same for all subjects, and the dust is consumed when its magic takes effect. Immediately after an affected creature makes an attack roll, deals damage, or casts a spell, the Invisible condition ends for that creature."
};
MagicItemsList["dust of dryness"] = {
	name : "Dust of Dryness",
	source : [["DMG2024", 255]],
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
	source : [["DMG2024", 255]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "Once as a Utilize action, I can throw this dust into the air, causing me and all creatures within 30 ft that need to breathe to make a DC 15 Con save or start sneezing uncontrollably and be unable to breathe, thus becoming incapacitated and suffocating. Those affected can repeat their save at the end of each of their turns.",
	descriptionFull : "Found in a small container, this powder resembles Dust of Disappearance, and Identify reveals it to be such. There is enough of it for one use.\n   As a Utilize action, you can throw the dust into the air, forcing yourself and every creature in a 30-foot Emanation originating from you to make a DC 15 Constitution saving throw. Constructs, Elementals, Oozes, Plants, and Undead succeed on the save automatically.\n   On a failed save, a creature begins sneezing uncontrollably; it has the Incapacitated condition and is suffocating. The creature repeats the save at the end of each of its turns, ending the effect on itself on a success. The effect also ends on any creature targeted by a Lesser Restoration spell."
};
MagicItemsList["dwarven plate +2"] = {
	name : "Dwarven Plate +2",
	source : [["DMG2024", 255]],
	type : "armor (half plate or plate armor)",
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
	source : [["DMG2024", 256]],
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
	source : [["DMG2024", 256]],
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
	source : [["DMG2024", 256]],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "?",
	description : "When I use a Magic action to remove the stopper, a cloud of thick smoke flows out of the bottle. At the end of my turn, an efreeti appears in an unoccupied space within 30 feet of me. The first time the bottle is opened, the DM rolls to determine what happens that time and the next times (if any).",
	descriptionLong : "When I use a Magic action to remove the stopper, a cloud of thick smoke flows out of the bottle. At the end of my turn, an efreeti appears in an unoccupied space within 30 feet of me. The first time the bottle is opened, the DM rolls to determine what happens that time and the next times (if any). 10% chance that the efreeti attacks me for 5 rounds before disappearing. 80% change that the efreeti serves me for 1 hour, following my commands. It then returns to the bottle and I can have it serve me 2 more times, but only 24 hours after it returned to the bottle. 10% chance that the efreeti will grant me 1 wish.",
	descriptionFull : "When you take a Magic action to remove the stopper of this painted brass bottle, a cloud of thick smoke flows out of it. At the end of your turn, the smoke disappears with a flash of harmless fire, and an Efreeti appears in an unoccupied space within 30 feet of you.\n   The first time the bottle is opened, the DM rolls on the following table to determine what happens.\n\n" + toUni("1d10") + "\t" + toUni("Effect") + "\n1\tThe efreeti attacks you. After fighting for 5 rounds, the efreeti disappears, and the bottle loses its magic.\n2-9\tThe efreeti understands your languages and obeys your commands for 1 hour, after which it returns to the bottle, and a new stopper contains it. The stopper can’t be removed for 24 hours. The next two times the bottle is opened, the same effect occurs. If the bottle is opened a fourth time, the efreeti escapes and disappears, and the bottle loses its magic.\n10\tThe efreeti understands your languages and can cast Wish once for you. It disappears when it grants the wish or after 1 hour, and the bottle loses its magic.",
	weight : 1,
	action : [["action", ""]]
};
MagicItemsList["efreeti chain +3"] = {
	name : "Efreeti Chain +3",
	source : [["DMG2024", 257]],
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
	source : [["DMG2024", 257]],
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
	source : [["DMG2024", 257]],
	type : "potion",
	rarity : "rare",
	magicItemTable : "?",
	description : "Once as an action, I can drink this potion or administer it to another to cure any disease, and removing the blinded, deafened, paralyzed, and poisoned conditions. The potion's clear red liquid has tiny bubbles of light in it.",
	descriptionFull : "When you drink this potion, you are cured of all magical contagions. In addition, the following conditions end on you: Blinded, Deafened, Paralyzed, and Poisoned. The clear, red liquid has tiny bubbles of light in it.",
	weight : 0.5
};
MagicItemsList["elven chain +1"] = {
	name : "Elven Chain +1",
	source : [["DMG2024", 257]],
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
	source : [["DMG2024", 257]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "This spellbook, along with anything written on its pages, can’t be damaged by fire or water. In addition, the spellbook doesn’t deteriorate with age.",
	descriptionFull : "This spellbook, along with anything written on its pages, can’t be damaged by fire or water. In addition, the spellbook doesn’t deteriorate with age.",
	weight : 5
};
MagicItemsList["energy bow"] = {
	name : "Energy Bow",
	source : [["DMG2024", 257]],
	type : "weapon (longbow or shortbow)",
	rarity : "very rare",
	magicItemTable : "?",
	description : "When I pull back my arm to fire this +1 magic bow, a golden arrow appears, emitting 20-ft Bright Light and 20-ft Dim. On a hit, the target takes Force dmg or makes a DC 15 STR save vs Restrained for 1 min (DC 20 STR Athletics to escape). Magic actions: 1 visible willing creature (up to Med) or unattended obj (5ft cube) in 60ft teleported to visible space in 10ft; arrows create magical 60ft ladder for 1 min on wall in 60ft.",
	descriptionLong : "This +1 magic bow has no string. When I pull back my arm, a golden arrow appears nocked and ready to fire, emitting a 20-ft radius of Bright Light and 20-ft Dim Light. It disappears on a hit or miss and deals Force damage. The bow also has additional properties. Arrow of Restraint: instead of damage, the target makes a DC 15 STR save or is Restrained for 1 minute (DC 20 STR Athletics to escape). Arrow of Transport: as a Magic action, 1 visible willing creature (up to Medium) or unattended object (up to 5-ft cube) in 60 ft is teleported to a visible space in 10 ft. Energy Ladder: as a Magic action, fire arrows at a wall within 60 ft. The arrows create a 60 ft magical ladder that lasts for 1 minute.",
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
	source : [["DMG2024", 258]],
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
	source : [["DMG2024", 258]],
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
	source : [["DMG2024", 258]],
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
	source : [["DMG2024", 259]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "This artificial eye replaces a real one that was lost or removed. While the ersatz eye is embedded in my eye socket, it can't be removed by anyone other than me, and I can see through the tiny orb as though it were a normal eye.",
	descriptionFull : "This magical eye replaces a real one that was lost or removed. While the Ersatz Eye is embedded in your eye socket, you can see through the tiny orb as though it were your natural eye. You can insert or remove the Ersatz Eye as a Magic action, and it can’t be removed against your will while you are alive.",
	attunement : true
};
MagicItemsList["eversmoking bottle"] = {
	name : "Eversmoking Bottle",
	source : [["DMG2024", 259]],
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
	source : [["DMG2024", 259]],
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
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/axe|halberd/i).test(v.baseWeaponName) && (/executioner/i).test(v.WeaponTextName)) {
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
	source : [["DMG2024", 261]],
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
	source : [["DMG2024", 261]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "These crystal lenses fit over the eyes. While wearing them, I can see much better than normal out to a range of 1 ft. I have advantage on Intelligence (Investigation) checks that rely on sight while searching an area or studying an object within that range.",
	descriptionFull : "These crystal lenses fit over the eyes. While wearing them, your vision improves significantly out to a range of 1 foot, granting you Darkvision within that range and Advantage on Intelligence (Investigation) checks made to examine something within that range.",
	vision : [["Adv. on Investigation checks based on sight", 1]]
};
MagicItemsList["eyes of the eagle"] = {
	name : "Eyes of the Eagle",
	source : [["DMG2024", 261]],
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
	source: [["DMG2024", 261]],
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
	source : [["DMG2024", 263]],
	type : "weapon (any melee weapon)",
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
	source : [["DMG2024", 263]],
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
	source : [["DMG2024", 263]],
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
	source : [["DMG2024", 264]],
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
	source : [["DMG2024", 264]],
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
	source : [["DMG2024", 264]],
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
	source : [["DMG2024", 264]],
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
	source : [["DMG2024", 264]],
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
	source : [["DMG2024", 265]],
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
	source : [["DMG2024", 265]],
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
	source : [["DMG2024", 265]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "These gloves are imperceptible while worn. While wearing them, I gain a +5 bonus to Dexterity (Sleight of Hand) checks and Dexterity checks made to pick locks.",
	descriptionFull : "These gloves are imperceptible while worn. While wearing them, you gain a +5 bonus to Dexterity (Sleight of Hand) checks.",
	addMod : [{ type: "skill", field : "Sleight of Hand", mod : 5, text : "I gain a +5 bonus to Dexterity (Sleight of Hand) checks while wearing Gloves of Thievery." }]
};
MagicItemsList["goggles of night"] = { // contributed by AelarTheElfRogue
	name : "Goggles of Night",
	source : [["DMG2024", 265]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While wearing these dark lenses, I have darkvision out to a range of 60 feet. If I already have darkvision. wearing the goggles increases its range by 60 feet.",
	descriptionFull : "While wearing these dark lenses, you have Darkvision out to 60 feet. If you already have Darkvision, wearing the goggles increases its range by 60 feet.",
	vision : [["Darkvision", "fixed 60"], ["Darkvision", "+60"]]
};
MagicItemsList["hag eye"] = {
	name : "Hag Eye",
	source : [["DMG2024", 265]],
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
	description : "This item has 3 charges, regained at dawn. While worn or held, I can use 1 charge to cast Darkvision or See Invisibility on myself. While on the same plane, any hag belonging to the coven that created this eye can use a Magic action to see through it.",
	descriptionFull : "A Hag Eye has 3 charges. While wearing or holding this item, you can expend 1 charge to cast Darkvision (targeting yourself only) or See Invisibility. The Hag Eye regains all expended charges daily at dawn.\n   Coven Sensor. The Hag Eye is usually entrusted to a hag’s minion for safekeeping and transport. As a Magic action, a hag who belongs to the coven that created the Hag Eye can see what the Hag Eye sees if the hag and the Hag Eye are on the same plane of existence. This effect lasts as long as the hag maintains Concentration. Multiple hags in the coven can see through the Hag Eye simultaneously.\n   Creating a Hag Eye. Only a hag coven can craft this item, which is made from a real eye coated in varnish and often fitted to a pendant or another wearable item. A hag coven can have only one Hag Eye at a time, and creating a new one requires all three members of the coven to perform a special rite. This rite takes 1 hour, and the hags can’t perform it if one or more of them has the Incapacitated condition. If the hags take any other actions during this rite, the rite fails and ends.",
};
MagicItemsList["hammer of thunderbolts"] = {
	name : "Hammer of Thunderbolts",
	source : [["DMG2024", 265]],
	type : "weapon (maul or warhammer)",
	rarity : "legendary",
	magicItemTable : "?",
	description : "This magical weapon adds a +1 bonus to attack and damage rolls made with it. It has additional features when I'm attuned to it, which requires me to wear a belt of giant strength or gauntlets of ogre power.",
	descriptionFull : "You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon.\n   The weapon has 5 charges. You can expend 1 charge and make a ranged attack with the weapon, hurling it as if it had the Thrown property with a normal range of 20 feet and a long range of 60 feet. If the attack hits, the weapon unleashes a thunderclap audible out to 300 feet. The target and every creature within 30 feet of it other than you must succeed on a DC 17 Constitution saving throw or have the Stunned condition until the end of your next turn. Immediately after hitting or missing, the weapon flies back to your hand. The weapon regains 1d4 + 1 expended charges daily at dawn.\n   " + toUni("Giant's Bane") + ". While you are attuned to the weapon and wearing either a Belt of Giant Strength or Gauntlets of Ogre Power to which you are also attuned, you gain the following benefits:\n    TGiants’ Bane. When you roll a 20 on the d20 for an attack roll made with this weapon against a Giant, the creature must succeed on a DC 17 Constitution saving throw or die.\n   Might of Giants. The Strength score bestowed by your Belt of Giant Strength or Gauntlets of Ogre Power increases by 4, to a maximum of 30.",
	weight : 10,
	attunement : true,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "weapon"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /maul|warhammer/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	selfChoosing : function () {
		// don't have to be attuned to the prereqs https://twitter.com/jeremyecrawford/status/948346891296653315
		return CurrentMagicItems.known.indexOf("belt of giant strength") !== -1 | CurrentMagicItems.known.indexOf("gauntlets of ogre power") !== -1 ? "attuned (requires Belt of Giant Strength or Gauntlets of Ogre Power)" : "not attuned";
	},
	choices : ["not attuned", "attuned (requires Belt of Giant Strength or Gauntlets of Ogre Power)"],
	"not attuned" : {
		description : "This magical weapon adds a +1 bonus to attack and damage rolls made with it. It has additional features when I'm attuned to it, which requires me to wear a belt of giant strength or gauntlets of ogre power.",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/warhammer|maul/i).test(v.baseWeaponName) && (/of thunderbolts/i).test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					}
				},
				'If I include the words "of Thunderbolts" in a the name of an warhammer or maul, it will be treated as the magic weapon Hammer of Thunderbolts. It has +1 to hit and damage.'
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.isMeleeWeapon && (/warhammer|maul/i).test(v.baseWeaponName) && (/of thunderbolts/i).test(v.WeaponTextName)) {
						output.magic = v.thisWeapon[1] + 1;
					}
				}, ''
			],
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
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/warhammer|maul/i).test(v.baseWeaponName) && (/of thunderbolts/i).test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + 'On 20 to hit vs. Giant: DC 17 Con save or die; Expend charge to throw';
					}
				},
				'If I include the words "of Thunderbolts" in a the name of an warhammer or maul, it will be treated as the magic weapon Hammer of Thunderbolts. It has +1 to hit and damage.'
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.isMeleeWeapon && (/warhammer|maul/i).test(v.baseWeaponName) && (/of thunderbolts/i).test(v.WeaponTextName)) {
						output.magic = v.thisWeapon[1] + 1;
					}
				}, ''
			],
		}
	}
};
MagicItemsList["hat of disguise"] = { // contributed by Larry Hoy
	name : "Hat of Disguise",
	source : [["DMG2024", 266]],
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
MagicItemsList["*hat of many spells*"] = {
	name : "Hat of Disguise",
	source : [["DMG2024", 266]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While held, this pointed hat acts as a Focus for my Wizard spells. They gain a Somatic component as I “pull” them from the hat. I can also try to cast a level 1+ Wizard spell that I don't know using my spell DC \u0026 atk bonus. It must be a level I can cast \u0026 have Material components up to 1,000 GP. I spend the appropriate slot \u0026 make an INT (Arcana) chk (DC 10 + spell lvl). On a success, I cast the spell \u0026 can't reuse this property until I finish a rest. On a fail, a random effect occurs from the table (see Notes).",
	descriptionFull : "This pointed hat has the following properties.\n\tSpellcasting Focus. While holding the hat, you can use it as a Spellcasting Focus for your Wizard spells. Any spell you cast using the hat gains a special Somatic component: you must reach into the hat and “pull” the spell out of it.\n\tUnknown Spell. While holding the hat, you can try to cast a level 1+ spell you don’t know. The spell must be on the Wizard spell list, it must be of a level you can cast, and it can’t have Material components costing more than 1,000 GP. Once you decide on the spell, you must expend a spell slot of the spell’s level. Then, to determine whether you cast the spell, make an Intelligence (Arcana) check (DC 10 plus the spell’s level). On a successful check, you cast the spell using its normal casting time, and you can’t use this property again until you finish a Short or Long Rest. On a failed check, you fail to cast the spell and a random effect occurs instead, determined by rolling on the following table.\n\tAny spell you cast from the hat uses your spell save DC and spell attack bonus." + 
	toUni("1d100\tEffect") + "\n01-50\tYou cast a random spell determined by rolling 1d10: on a 1, Enlarge/Reduce (enlarge effect); on a 2, Enlarge/Reduce (reduce effect); on a 3, Faerie Fire; on a 4, Fireball; on a 5, Gust of Wind; on a 6, Invisibility (cast on yourself); on a 7, Lightning Bolt; on an 8, Phantasmal Force; on a 9, Polymorph; on a 10, Stinking Cloud.\n51-55\tYou have the Stunned condition until the end of your next turn, believing something awesome just happened.\n     56-60\tA harmless swarm of butterflies fills a 10-foot Cube within 30 feet of yourself. The swarm disperses after 1 minute.\n61-65\tYou pull a nonmagical object out of the hat. Roll 1d4 to determine the object: on a 1, a vial of Acid; on a 2, a flask of Alchemist’s Fire; on a 3, a Crowbar; on a 4, a lit Torch.\n66-70\tYou suffer a bout of “magic sickness” and have the Poisoned condition for 1 hour.\n71-75\tYou have the Petrified condition until the end of your next turn.\n76-80\tYou pull a nonmagical object out of the hat. Roll 1d4 to determine the object: on a 1, a Dagger; on a 2, a Rope with a Grappling Hook tied to one end; on a 3, a bag of Caltrops; on a 4, a gem worth 50 GP.\n81-85\tA creature appears in an unoccupied space as close to you as possible. The creature isn’t under your control and acts as it normally would, and it disappears after 1 hour or when it drops to 0 Hit Points. Roll 1d4 to determine the creature: on a 1, a Camel; on a 2, a Constrictor Snake; on a 3, an Elephant; on a 4, a Mule.\n86-90\tA Hostile Swarm of Bats flies out of the hat, occupies your space, and attacks you.\n91-95\tA vertical, 10-foot-diameter, two-way portal to another plane of existence opens in an unoccupied space within 30 feet of you and remains open until the end of your next turn. The DM determines where it leads.\n96-00\tYou pull a magic item out of the hat. Roll 1d6 to determine the item’s rarity: on a 1–3, Common; on a 4–5, Uncommon; on a 6, Rare. The DM chooses the item, which disappears after 1 hour if it’s not consumed or destroyed before then.",
	toNotesPage : [{
		name : "Hat of Many Spells",
		note : [
			"1d10\tEffect",
			"01-50\tYou cast a random spell determined by rolling 1d10: on a 1, Enlarge/Reduce (enlarge effect); on a 2, Enlarge/Reduce (reduce effect); on a 3, Faerie Fire; on a 4, Fireball; on a 5, Gust of Wind; on a 6, Invisibility (cast on yourself); on a 7, Lightning Bolt; on an 8, Phantasmal Force; on a 9, Polymorph; on a 10, Stinking Cloud.",
			"51-55\tYou have the Stunned condition until the end of your next turn, believing something awesome just happened.",
			"56-60\tA harmless swarm of butterflies fills a 10-foot Cube within 30 feet of yourself. The swarm disperses after 1 minute.",
			"61-65\tYou pull a nonmagical object out of the hat. Roll 1d4 to determine the object: on a 1, a vial of Acid; on a 2, a flask of Alchemist’s Fire; on a 3, a Crowbar; on a 4, a lit Torch.",
			"66-70\tYou suffer a bout of “magic sickness” and have the Poisoned condition for 1 hour.",
			"71-75\tYou have the Petrified condition until the end of your next turn.",
			"76-80\tYou pull a nonmagical object out of the hat. Roll 1d4 to determine the object: on a 1, a Dagger; on a 2, a Rope with a Grappling Hook tied to one end; on a 3, a bag of Caltrops; on a 4, a gem worth 50 GP.",
			"81-85\tA creature appears in an unoccupied space as close to you as possible. The creature isn’t under your control and acts as it normally would, and it disappears after 1 hour or when it drops to 0 Hit Points. Roll 1d4 to determine the creature: on a 1, a Camel; on a 2, a Constrictor Snake; on a 3, an Elephant; on a 4, a Mule.",
			"86-90\tA Hostile Swarm of Bats flies out of the hat, occupies your space, and attacks you.",
			"91-95\tA vertical, 10-foot-diameter, two-way portal to another plane of existence opens in an unoccupied space within 30 feet of you and remains open until the end of your next turn. The DM determines where it leads.",
			"96-00\tYou pull a magic item out of the hat. Roll 1d6 to determine the item’s rarity: on a 1–3, Common; on a 4–5, Uncommon; on a 6, Rare. The DM chooses the item, which disappears after 1 hour if it’s not consumed or destroyed before then.",
		],
	}],		
	attunement : true,
	prerequisite : "Requires attunement by a wizard",
	prereqeval : function (v) { return classes.known.wizard ? true : false; },
    spellcastingAbility : "class"
};
MagicItemsList["hat of vermin"] = {
	name : "Hat of Vermin",
	source : [["DMG2024", 267]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "This hat has 3 charges, regaining all at dawn. As a Magic action while holding it, I can expend 1 charge and speak a command word to have one bat, frog, or rat appear in the hat. The creature acts as an ordinary member of its kind and disappears after 1 hour or when it has 0 HP. It is not under my control.",
	descriptionFull : "This hat has 3 charges. While holding the hat, you can take a Magic action to expend 1 charge and summon your choice of a Bat, a Frog, or a Rat. The summoned creature magically appears in the hat and tries to get away from you as quickly as possible. The creature is Indifferent toward you and other creatures, and it isn’t under your control. It behaves as an ordinary creature of its kind and disappears after 1 hour or when it drops to 0 Hit Points. The hat regains all expended charges daily at dawn.",
	action : [["action", ""]],
	usages : 3,
	recovery : "dawn"
};
MagicItemsList["hat of wizardry"] = {
	name : "Hat of Wizardry",
	source : [["DMG2024", 267]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "I can use this antiquated, cone-shaped hat adorned with gold crescent moons and stars as a spellcasting focus for my wizard spells. Once per long rest, I can use it to cast a wizard cantrip that I don't know. To do so, I must make a DC 10 Intelligence (Arcana) check, wasting the attempt as well as my action if I fail.",
	descriptionFull : "This cone-shaped hat is adorned with moons and stars. While you are wearing it, you gain the following benefits.\n \u2022 Spellcasting Focus. You can use the hat as a Spellcasting Focus for your Wizard spells.\n \u2022 Unknown Spell. As a Magic action, you can try to cast a cantrip that you don’t know. The cantrip must be on the Wizard spell list and have a casting time of an action, and you make a DC 10 Intelligence (Arcana) check. On a successful check, you cast the spell. On a failed check, the spell fails, and the action used to cast the spell is wasted. In either case, you can’t use this property again until you finish a Long Rest.",
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
	source : [["DMG2024", 268]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "My Intelligence score is 19 while I'm wearing this headband, provided that my Intelligence is not already 19 or higher.",
	descriptionFull : "Your Intelligence is 19 while you wear this headband. It has no effect on you if your Intelligence is 19 or higher without it.",
	attunement : true,
	scoresOverride : [0, 0, 0, 19, 0, 0]
};
MagicItemsList["helm of brilliance"] = {
	name : "Helm of Brilliance",
	source : [["DMG2024", 268]],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "?",
	description : "This helm is set with diamonds, rubies, fire opals, and opals. Gems pried from the helm turn to dust. When all the gems are removed or destroyed, the helm loses its magic. I can use an action to cast a spell by having a gem crumble to dust. The helm has special properties for each type of gem, see Notes page.",
	descriptionFull : "This helm is set with 1d10 diamonds, 2d10 rubies, 3d10 fire opals, and 4d10 opals. Any gem pried from the helm crumbles to dust. When all the gems are removed or destroyed, the helm loses its magic.\n   You gain the following benefits while wearing the helm.\n \u2022 Diamond Light. As long as it has at least one diamond, the helm emits a 30-foot Emanation. When at least one Undead is within that area, the Emanation is filled with Dim Light. Any Undead that starts its turn in that area takes 1d6 Radiant damage.\n \u2022 Fire Opal Flames. As long as the helm has at least one fire opal, you can take a Magic action to cause one weapon you are holding to burst into flames. The flames emit Bright Light in a 10-foot radius and Dim Light for an additional 10 feet. The flames are harmless to you and the weapon. When you hit with an attack using the blazing weapon, the target takes an extra 1d6 Fire damage. The flames last until you take a Bonus Action to extinguish them or until you drop or stow the weapon.\n \u2022 Ruby Resistance. As long as the helm has at least one ruby, you have Resistance to Fire damage.\n \u2022 Spells. You can cast one of the following spells (save DC 18), using one of the helm’s gems of the specified type as a component: Daylight (opal), Fireball (fire opal), Prismatic Spray (diamond), or Wall of Fire (ruby). The gem is destroyed when the spell is cast and disappears from the helm.\n\nTaking Fire Damage. Roll 1d20 if you are wearing the helm and take Fire damage as a result of failing a saving throw against a spell. On a roll of 1, the helm emits beams of light from its remaining gems and is then destroyed. Each creature within a 60-foot Emanation originating from you must succeed on a DC 17 Dexterity saving throw or be struck by a beam, taking Radiant damage equal to the number of gems in the helm.",
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
			"This helm is set with 1d10 diamonds, 2d10 rubies, 3d10 fire opals, and 4d10 opals. Any gem pried from the helm crumbles to dust. When all the gems are removed or destroyed, the helm loses its magic.",
			"You gain the following benefits while wearing the helm.",
			"Diamond Light. As long as it has at least one diamond, the helm emits a 30-foot Emanation. When at least one Undead is within that area, the Emanation is filled with Dim Light. Any Undead that starts its turn in that area takes 1d6 Radiant damage.",
			"Fire Opal Flames. As long as the helm has at least one fire opal, you can take a Magic action to cause one weapon you are holding to burst into flames. The flames emit Bright Light in a 10-foot radius and Dim Light for an additional 10 feet. The flames are harmless to you and the weapon. When you hit with an attack using the blazing weapon, the target takes an extra 1d6 Fire damage. The flames last until you take a Bonus Action to extinguish them or until you drop or stow the weapon.",
			"Ruby Resistance. As long as the helm has at least one ruby, you have Resistance to Fire damage.",
			"Spells. You can cast one of the following spells (save DC 18), using one of the helm’s gems of the specified type as a component: Daylight (opal), Fireball (fire opal), Prismatic Spray (diamond), or Wall of Fire (ruby). The gem is destroyed when the spell is cast and disappears from the helm.",
			"Taking Fire Damage. Roll 1d20 if you are wearing the helm and take Fire damage as a result of failing a saving throw against a spell. On a roll of 1, the helm emits beams of light from its remaining gems and is then destroyed. Each creature within a 60-foot Emanation originating from you must succeed on a DC 17 Dexterity saving throw or be struck by a beam, taking Radiant damage equal to the number of gems in the helm."
		]
	}]
};
MagicItemsList["helm of comprehending languages"] = { // contributed by Larry Hoy
	name : "Helm of Comprehending Languages",
	source : [["DMG2024", 268]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While wearing this helm, I can cast Comprehend Languages at will.",
	descriptionFull : "While wearing this helm, you can cast Comprehend Languages from it.",
	spellcastingBonus : {
		name : "At will",
		spells : ["comprehend languages"],
		selection : ["comprehend languages"],
		firstCol : "atwill"
	}
};
MagicItemsList["helm of telepathy"] = {
	name : "Helm of Telepathy",
	source : [["DMG2024", 268]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While wearing this helm, I have telepathy with a range of 30 feet, and I can cast Detect Thoughts or Suggestion (save DC 13) from the helm. Once either spell is cast from the helm, that spell can’t be cast from it again until the next dawn.",
	descriptionFull : "While wearing this helm, you have telepathy with a range of 30 feet, and you can cast Detect Thoughts or Suggestion (save DC 13) from the helm. Once either spell is cast from the helm, that spell can’t be cast from it again until the next dawn.",
	attunement : true,
	limfeaname : "Helm of Telepathy",
	usages : 1,
	recovery : "dawn",
	fixedDC : 13,
	spellcastingBonus : [{
		name : "Once per dawn",
		spells : ["detect thoughts"],
		selection : ["detect thoughts"],
		firstCol : "oncelr"
	}, {
		name : "Once per dawn",
		spells : ["suggestion"],
		selection : ["suggestion"],
		firstCol : "oncelr"
	}]
};
MagicItemsList["helm of teleportation"] = {
	name : "Helm of Teleportation",
	source : [["DMG2024", 268]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "This helm has 3 charges. While wearing it, I can use an action and expend 1 charge to cast Teleport from it. The helm regains 1d3 expended charges daily at dawn.",
	descriptionFull : "This helm has 3 charges. While wearing it, you can expend 1 charge to cast Teleport from it. The helm regains 1d3 expended charges daily at dawn.",
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
	source : [["DMG2024", 269]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "This backpack weighs 5 lb, regardless of its contents. It has two side pouches that hold 200 lb (25 cu ft) each and a central pouch that holds 500 lb (64 cu ft). Retrieving an item from it requires a Utilize action or Bonus Action. If it's overloaded, pierced, or torn, it and its contents are destroyed. If turned inside out, all its contents spill forth.",
	descriptionLong : "This backpack weighs 5 lb, regardless of its contents. It has two side pouches that hold up to 200 lb (25 cu ft) each and a central pouch that holds up to 500 lb (64 cu ft). Retrieving an item from it requires a Utilize action or Bonus Action. When I reach in the bag for a specific item, the item is always magically on top. If it's overloaded, pierced, or torn, it and its contents are destroyed. If turned inside out, all its contents spill forth. A creature placed inside the bag can survive for 10 minutes before starting to suffocate. Placing the haversack in another extradimensional space instantly destroys both and opens a gate to the Astral Plane.",
	descriptionFull : "This backpack has a central pouch and two side pouches, each of which is an extradimensional space. Each side pouch can hold up to 200 pounds of material, not exceeding a volume of 25 cubic feet. The central pouch can hold up to 500 pounds of material, not exceeding a volume of 64 cubic feet. The haversack always weighs 5 pounds, regardless of its contents.\n   Retrieving an item from the haversack requires a Utilize action or a Bonus Action (your choice). When you reach into the haversack for a specific item, the item is always magically on top.\n   If any of its pouches is overloaded, pierced, or torn, the haversack ruptures and is destroyed. If the haversack is destroyed, its contents are lost forever, although an Artifact always turns up again somewhere. If the haversack is turned inside out, its contents spill forth unharmed, and the haversack must be put right before it can be used again.\n   Each pouch of the haversack holds enough air for 10 minutes of breathing, divided by the number of breathing creatures inside.\n   Placing the haversack inside an extradimensional space created by a Bag of Holding, Portable Hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate and not behind Total Cover is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can’t be reopened.",
	weight : 5,
	action : [["action", " (retrieve item)"]]
};
MagicItemsList["heward's handy spice pouch"] = {
	name : "Heward's Handy Spice Pouch",
	source : [["DMG2024", 269]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "This belt pouch appears empty. It has 10 charges, regaining 1d6+4 expended charges at dawn. As a Magic action while holding it, I can speak the name of any nonmagical food seasoning (e.g. salt, pepper, or saffron), and remove a pinch of the desired seasoning from the pouch. A pinch is enough to season a single meal.",
	descriptionFull : "This belt pouch appears empty and has 10 charges. While holding the pouch, you can take a Magic action to expend 1 charge, name any nonmagical food seasoning (such as salt, pepper, saffron, or cilantro), and remove a pinch of the desired seasoning from the pouch. A pinch is enough to season a single meal. The pouch regains 1d6 + 4 expended charges daily at dawn.",
	weight : 1,
	usages : 10,
	recovery : "dawn",
	additional : "regains 1d6+4"
};
MagicItemsList["holy avenger"] = {
	name : "Holy Avenger",
	source : [["DMG2024", 269]],
	type : "weapon (any)",
	rarity : "legendary",
	magicItemTable : "?",
	attunement : true,
	description : "I have a +3 bonus to attack and damage rolls made with this magic weapon. It does +2d10 radiant damage against fiends and undead. While holding the drawn weapon, I have a 10-ft radius emanation (30-ft if level 17 paladin) that grants me and my allies adv. on saves against spells and magical effects.",
	descriptionFull : "You gain a +3 bonus to attack rolls and damage rolls made with this magic weapon. When you hit a Fiend or an Undead with it, that creature takes an extra 2d10 Radiant damage.\n   While you hold the drawn weapon, it creates a 10-foot Emanation originating from you. You and all creatures Friendly to you in the Emanation have Advantage on saving throws against spells and other magical effects. If you have 17 or more levels in the Paladin class, the size of the Emanation increases to 30 feet.",
	prerequisite : "Requires attunement by a paladin",
	prereqeval : function (v) { return classes.known.paladin ? true : false; },
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "weapon"],
		itemName1stPage : ["brackets", "Holy Avenger"],
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/^(?=.*holy)(?=.*avenger).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+2d10 radiant damage vs. fiends and undead';
				}
			},
			'If I include the words "Holy Avenger" in a the name of a weapon, it will be treated as the magic weapon Holy Avenger. It has +3 to hit and damage and does +2d10 radiant damage to fiends and undead.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/^(?=.*holy)(?=.*avenger).*$/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 3;
				}
			}, ''
		]
	},
	savetxt : { adv_vs : ["spells", "magical effects"] },
	choices : ["Paladin level 1-16 (10-ft emanation)", "Paladin level 17+ (30-ft emanation)"],
	selfChoosing : function () {
		return !classes.known.paladin ? "" : classes.known.paladin.level < 17 ? "paladin level 1-16 (10-ft emanation)" : "paladin level 17+ (30-ft emanation)";
	},
	"paladin level 1-16 (10-ft emanation)" : {
		name : "Holy\u200A Avenger",
		description : "I have a +3 bonus to attack and damage rolls made with this magic sword. It does +2d10 radiant damage against fiends and undead. While holding the drawn sword, I have a 10-ft radius aura that grants me and my allies advantage on saving throws against spells and magical effects."
	},
	"paladin level 17+ (30-ft emanation)" : {
		name : "Holy\u200A\u200A Avenger",
		description : "I have a +3 bonus to attack and damage rolls made with this magic sword. It does +2d10 radiant damage against fiends and undead. While holding the drawn sword, I have a 30-ft radius aura that grants me and my allies advantage on saving throws against spells and magical effects."
	}
};
MagicItemsList["horn of blasting"] = { // contains contributions by Larry Hoy
	name : "Horn of Blasting",
	source : [["DMG2024", 270]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "As a Magic action, I can speak the horn's command word and blow it, creating a 30-ft cone. All in it take 5d8 thunder damage and are deafened for 1 min. Half damage with a DC 15 Con save and not deafened. Glass/crystal creatures/objects have disadv. and take 10d8 damage. There is a 20% chance each use that it explodes.",
	descriptionLong: "As a Magic action, I can speak the horn's command word and blow it, emitting a thunderous blast in a 30-foot cone audible 600 feet away. Creatures in the cone must make a DC 15 Con save or take 5d8 thunder damage and be deafened for 1 min; otherwise, they just take half the damage. Creatures and objects made of glass or crystal have disadvantage on the save and take 10d8 thunder damage instead. Each use of its magic has a 20% chance of causing it to explode, dealing 10d6 force damage to the blower and destroying it.",
	descriptionFull : "You can take a Magic action to blow the horn, which emits a thunderous blast in a 30-foot Cone that is audible out to 600 feet. Each creature in the Cone makes a DC 15 Constitution saving throw. On a failed save, a creature takes 5d8 Thunder damage and has the Deafened condition for 1 minute. On a successful save, a creature takes half as much damage only. Glass or crystal objects in the Cone that aren’t being worn or carried take 10d8 Thunder damage.\n   Each use of the horn’s magic has a 20 percent chance of causing the horn to explode. The explosion deals 10d6 Force damage to the user and destroys the horn.",
	weight : 2,
	action : [["action", ""]]
};
MagicItemsList["horn of silent alarm"] = {
	name : "Horn of Silent Alarm",
	source : [["DMG2024", 270]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "This horn has 4 charges, regaining 1d4 expended charges daily at dawn. As a Magic action, I can expend 1 charge and blow it, have only one creature within 600 ft of my choice hear the horn's blare, provided it isn't deafened. No other creature hears sound coming from the horn.",
	descriptionFull : "This horn has 4 charges and regains 1d4 expended charges daily at dawn. As a Magic action, you can blow the horn while expending 1 charge. One creature of your choice hears the horn’s blare, provided that creature is within 600 feet of the horn. No other creature hears the horn.",
	weight : 2,
	usages : 4,
	recovery : "dawn",
	additional : "regains 1d4",
	action : [["action", ""]]
};
MagicItemsList["horn of valhalla"] = { // contains contributions by Larry Hoy
	name : "Horn of Valhalla",
	source : [["DMG2024", 270]],
	type : "wondrous item",
	description : "As a Magic action once per 7 days, I can blow this horn to summon warrior spirits from Ysgard within 60 ft me. These have the statistics of a berserker and return after 1 hour or when they drop to 0 HP. The number and how they respond depends on the type of material the horn is made of.",
	descriptionFull : "You can take a Magic action to blow this horn. In response, warrior spirits from the plane of Ysgard appear in unoccupied spaces within 60 feet of you. Each spirit uses the Berserker stat block and returns to Ysgard after 1 hour or when it drops to 0 Hit Points. The spirits look like living, breathing warriors, and they have Immunity to the Charmed and Frightened conditions. Once you use the horn, it can’t be used again until 7 days have passed.\n Four types of Horn of Valhalla are known to exist, each made of a different metal. The horn’s type determines how many spirits it summons, as well as the requirement for its use. The DM chooses the horn’s type or determines it randomly by rolling on the following table.\n   If you blow the horn without meeting its requirement, the summoned spirits attack you. If you meet the requirement, they are Friendly to you and your allies and follow your commands.",
	weight : 2,
	usages : 1,
	recovery : "7 days",
	action : [["action", ""]],
	allowDuplicates : true,
	choices : ["Silver (rare; 2 berserkers)", "Brass (rare; 3 berserkers; prereq: simple weapons prof.)", "Bronze (very rare; 4 berserkers; prereq: medium armor prof.)", "Iron (very rare; 5 berserkers; prereq: martial weapons prof.)"],
	"silver (rare; 2 berserkers)" : {
		name : "Silver Horn of Valhalla",
		sortname : "Horn of Valhalla, Silver",
		rarity : "rare",
		magicItemTable : "?",
		description : "As a Magic action once per 7 days, I can blow this horn to summon 2 warrior spirits from Ysgard within 60 ft me. These have the statistics of a berserker and return after 1 hour or when they drop to 0 HP. They are friendly to me and my companions and follow my commands.",
		descriptionFull : "You can use a Magic action to blow this horn. In response, warrior spirits from the plane of Ysgard appear within 60 feet of you. These spirits use the berserker statistics. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.\n   The silver horn summons 2 berserkers.\n   The berserkers are friendly to you and your companions and follow your commands."
	},
	"brass (rare; 3 berserkers; prereq: simple weapons prof.)" : {
		name : "Brass Horn of Valhalla",
		sortname : "Horn of Valhalla, Brass",
		rarity : "rare",
		magicItemTable : "?",
		description : "As a Magic action once per 7 days, I can blow this horn to summon 3 warrior spirits from Ysgard within 60 ft. These berserkers return after 1 hour or when they drop to 0 HP. If I'm proficient with all simple weapons, they follow my commands and are friendly to me and my companions. Otherwise, they attack me.",
		descriptionFull : "You can use a Magic action to blow this horn. In response, warrior spirits from the plane of Ysgard appear within 60 feet of you. These spirits use the berserker statistics. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.\n   A brass horn summons 3 berserkers. To use the brass horn, you must be proficient with all simple weapons.\n   If you blow the horn without meeting its requirement, the summoned berserkers attack you. If you meet the requirement, they are friendly to you and your companions and follow your commands."
	},
	"bronze (very rare; 4 berserkers; prereq: medium armor prof.)" : {
		name : "Bronze Horn of Valhalla",
		sortname : "Horn of Valhalla, Bronze",
		rarity : "very rare",
		magicItemTable : "?",
		description : "As a Magic action once per 7 days, I can blow this horn to summon 4 warrior spirits from Ysgard within 60 ft. These berserkers return after 1 hour or when they drop to 0 HP. If I'm proficient with medium armor, they follow my commands and are friendly to me and my companions. Otherwise, they attack me.",
		descriptionFull : "You can use a Magic action to blow this horn. In response, warrior spirits from the plane of Ysgard appear within 60 feet of you. These spirits use the berserker statistics. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.\n   A bronze horn summons 4 berserkers. To use the bronze horn, you must be proficient with medium armor.\n   If you blow the horn without meeting its requirement, the summoned berserkers attack you. If you meet the requirement, they are friendly to you and your companions and follow your commands."
	},
	"iron (very rare; 5 berserkers; prereq: martial weapons prof.)" : {
		name : "Iron Horn of Valhalla",
		sortname : "Horn of Valhalla, Iron",
		rarity : "legendary",
		magicItemTable : "?",
		description : "As a Magic action once per 7 days, I can blow this horn to summon 5 warrior spirits from Ysgard within 60 ft. These berserkers return after 1 hour or when they drop to 0 HP. If I'm proficient with all martial weapons, they follow my commands and are friendly to me and my companions. Otherwise, they attack me.",
		descriptionFull : "You can use a Magic action to blow this horn. In response, warrior spirits from the plane of Ysgard appear within 60 feet of you. These spirits use the berserker statistics. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.\n   The iron horn summons 5 berserkers. To use the iron horn, you must be proficient with all martial weapons.\n   If you blow the horn without meeting its requirement, the summoned berserkers attack you. If you meet the requirement, they are friendly to you and your companions and follow your commands."
	}
};
MagicItemsList["horseshoes of a zephyr"] = {
	name : "Horseshoes of a Zephyr",
	source : [["DMG2024", 270]],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "?",
	description : "While all four shoes are affixed to the hooves of a creature, they allow it to move normally while floating 4 inches above the floor. The creature leaves no tracks, can cross or stand above liquid or unstable surfaces, ignores difficult terrain, and doesn't suffer exhaustion from moving at normal speed for 12 hours a day.",
	descriptionFull : "These horseshoes come in a set of four. As a Magic action, you can touch one of the horseshoes to the hoof of a horse or similar creature, whereupon the horseshoe affixes itself to the hoof. Removing a horseshoe also takes a Magic action.\n   While all four shoes are affixed to the hooves of a horse or similar creature, they allow the creature to move normally while floating 4 inches above a surface. This effect means the creature can cross or stand above nonsolid or unstable surfaces, such as water or lava. The creature leaves no tracks and ignores Difficult Terrain. In addition, the creature can travel for up to 12 hours a day without gaining Exhaustion levels from extended travel."
};
MagicItemsList["horseshoes of speed"] = {
	name : "Horseshoes of Speed",
	source : [["DMG2024", 270]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "While all four shoes are affixed to the hooves of a horse or similar creature, they increase the creature's walking speed by 30 ft.",
	descriptionFull : "These horseshoes come in a set of four. As a Magic action, you can touch one of the horseshoes to the hoof of a horse or similar creature, whereupon the horseshoe affixes itself to the hoof. Removing a horseshoe also takes a Magic action.\n   While all four horseshoes are attached to the same creature, its Speed is increased by 30 feet."
};
MagicItemsList["immovable rod"] = {
	name : "Immovable Rod",
	source : [["DMG2024", 270]],
	type : "rod",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "This flat iron rod has a button on one end. I can use a Utilize action to press the button, magically fixing the rod in place or making it movable again. Once fixed, it holds up to 8000 lb. More weight causes it to deactivate and fall. A creature can use a Utilize action to try and move the rod up to 10 ft with a DC 30 Strength (Athletics) check.",
	descriptionFull : "This iron rod has a button on one end. You can take a Utilize action to press the button, which causes the rod to become magically fixed in place. Until you or another creature takes a Utilize action to push the button again, the rod doesn’t move, even if it defies gravity. The rod can hold up to 8,000 pounds of weight. More weight causes the rod to deactivate and fall. A creature can take a Utilize action to make a DC 30 Strength (Athletics) check, moving the fixed rod up to 10 feet on a successful check.",
	weight : 2,
	action : [["action", " (activate/deactivate)"]]
};

MagicItemsList["instrument of illusions"] = { // contains contributions by AelarTheElFRogue
	name : "Instrument of Illusions",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item (instrument)",
	rarity : "common",
	description : "While I am playing this musical instrument, I can create harmless, illusory visual effects within a 5-ft-emanation (15-ft for bards) sphere centered on the instrument. The magical effects have neither substance nor sound, and they are obviously illusory. The effects end when I stop playing.",
	descriptionFull : "While you are playing this musical instrument, you can take a Magic action to create harmless, illusory visual effects within a 5-foot Emanation originating from the instrument. If you are a Bard, the size of the Emanation increases to 15 feet. Sample visual effects include luminous musical notes, a spectral dancer, butterflies, and gently falling snow. The magical effects have neither substance nor sound, and they are obviously illusory. The effects end when you stop playing.",
	weight : 3, // same as instrument of the bards
	choices : ["Bard (15-ft emanation)", "Not a Bard (5-ft emanation)"],
	selfChoosing : function () {
		return classes.known.bard ? "bard (15-ft radius)" : "not a bard (5-ft radius)";
	},
	"bard (15-ft emanation)" : {
		name : "Instrument\u200A of Illusions",
		description : "While I am playing this musical instrument, I can create harmless, illusory visual effects within a 15-ft-emanation sphere centered on the instrument. The magical effects have neither substance nor sound, and they are obviously illusory. The effects end when I stop playing."
	},
	"not a bard (5-ft emanation)" : {
		name : "Instrument\u200A\u200A of Illusions",
		description : "While I am playing this musical instrument, I can create harmless, illusory visual effects within a 5-ft-emanation sphere centered on the instrument. The magical effects have neither substance nor sound, and they are obviously illusory. The effects end when I stop playing."
	}
};
MagicItemsList["instrument of scribing"] = {
	name : "Instrument of Scribing",
	source : [["DMG2024", "-"]],
	magicItemTable : "?",
	type : "wondrous item (instrument)",
	rarity : "common",
	description : "As a Magic action while I'm playing this musical instrument, I can write a magical message on a nonmagical surface that I can see within 30 ft. The message can be up to 6 (or 13) words in a language I know and fades away after 24 hours or when Dispel Magic is cast on it. The instrument can be used like this 3 times per dawn.",
	descriptionFull : "This musical instrument has 3 charges and regains all expended charges daily at dawn. While you are playing it, you can take a Magic action to expend 1 charge and write a magical message on a nonmagical object or surface that you can see within 30 feet of yourself. The message can be up to six words long and is written in a language you know. If you are a Bard, you can scribe an additional seven words and make the message glow faintly, allowing it to be seen in nonmagical Darkness. Casting the Dispel Magic spell on the message erases it. Otherwise, the message fades away after 24 hours.",
	usages : 3,
	recovery : "dawn",
	weight : 3, // same as instrument of the bards
	choices : ["Bard", "Not a Bard"],
	selfChoosing : function () {
		return classes.known.bard ? "bard" : "not a bard";
	},
	"bard" : {
		name : "Instrument\u200A of Scribing",
		description : "As a Magic action while I'm playing this musical instrument, I can write a magical message on a nonmagical surface that I can see within 30 ft. The message can be up to 13 words in a language I know and I can have it glow faintly. Dispel Magic erases it, otherwise it fades away after 24 hours. This can be used 3 times per dawn."
	},
	"not a bard" : {
		name : "Instrument\u200A\u200A of Scribing",
		description : "As an action while I'm playing this musical instrument, I can write a magical message on a nonmagical surface that I can see within 30 ft. The message can be up to 6 words in a language I know and fades away after 24 hours or when Dispel Magic is cast on it. The instrument can be used like this 3 times per dawn."
	}
};
MagicItemsList["*instrument of the bards*"] = {
	name : "Instrument of the Bards",
	source : [["DMG2024", "-"]],
	type : "wondrous item (instrument)",
	description : "",
	descriptionFull : "An Instrument of the Bards is superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a bard college. The Instruments of the Bards table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 Psychic damage.\n   You can play the instrument to cast one of its spells. Once the instrument has been used to cast a spell, it can’t be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.",
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
		descriptionFull : "An Instrument of the Bards is superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a bard college. The Instruments of the Bards table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 Psychic damage.\n   You can play the instrument to cast one of its spells. Once the instrument has been used to cast a spell, it can’t be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Anstruth harp can be used to cast Cure Wounds (5th level), Ice Storm, and Wall of Thorns.",
		spellcastingBonus : [{
			name : "Once per long rest",
			spells : ["fly", "invisibility", "levitate", "protection from evil and good", "cure wounds", "ice storm", "wall of thorns"],
			selection : ["fly", "invisibility", "levitate", "protection from evil and good", "cure wounds", "ice storm", "wall of thorns"],
			firstCol : "oncelr",
			times : 7,
			spellcastingAbility : "class"
		}],
		spellChanges : {
			"cure wounds" : {
				description : "1 living creature heals 10d8+spellcasting ability modifier HP",
				changes : "When using the Anstruth Harp to cast Cure Wounds, it is cast at 5th-level."
			},
		}
	},
	"canaith mandolin (rare)" : {
		name : "Canaith Mandolin [Instrument of the Bards]",
		sortname : "Instrument of the Bards, Canaith Mandolin",
		rarity : "rare",
		magicItemTable : "?",
		descriptionFull : "An Instrument of the Bards is superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a bard college. The Instruments of the Bards table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 Psychic damage.\n   You can play the instrument to cast one of its spells. Once the instrument has been used to cast a spell, it can’t be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Canaith mandolin can be used to cast Cure Wounds (3rd level), Dispel Magic, and Protection from Energy (lightning only).",
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
				description : "1 living creature heals 6d8+spellcasting ability modifier HP",
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
		descriptionFull : "An Instrument of the Bards is superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a bard college. The Instruments of the Bards table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 Psychic damage.\n   You can play the instrument to cast one of its spells. Once the instrument has been used to cast a spell, it can’t be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Cli lyre can be used to cast Stone Shape, Wall of Fire, and Wind Wall.",
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
		descriptionFull : "An Instrument of the Bards is superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a bard college. The Instruments of the Bards table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 Psychic damage.\n   You can play the instrument to cast one of its spells. Once the instrument has been used to cast a spell, it can’t be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Doss lute can be used to cast Animal Friendship, Protection from Energy (fire only), and Protection from Poison.",
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
		descriptionFull : "An Instrument of the Bards is superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a bard college. The Instruments of the Bards table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 Psychic damage.\n   You can play the instrument to cast one of its spells. Once the instrument has been used to cast a spell, it can’t be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Fochlucan bandore can be used to cast Entangle, Faerie Fire, Shillelagh, and Speak with Animals.",
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
		descriptionFull : "An Instrument of the Bards is superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a bard college. The Instruments of the Bards table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 Psychic damage.\n   You can play the instrument to cast one of its spells. Once the instrument has been used to cast a spell, it can’t be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Mac-Fuirmidh cittern can be used to cast Barkskin, Cure Wounds, and Fog Cloud.",
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
		descriptionFull : "An Instrument of the Bards is superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a bard college. The Instruments of the Bards table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 Psychic damage.\n   You can play the instrument to cast one of its spells. Once the instrument has been used to cast a spell, it can’t be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Ollamh harp can be used to cast Confusion, Control Weather, and Fire Storm.",
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
	descriptionFull : "Roughly marble sized, Ioun Stones are named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun Stones exist, each type a distinct combination of shape and color.\n   When you take a Magic action to toss an Ioun Stone into the air, the stone orbits your head at a distance of 1d3 feet, conferring its benefit to you while doing so. You can have up to three Ioun Stones orbiting your head at the same time.\n   Each Ioun Stone orbiting your head is considered to be an object you are wearing. The orbiting stone avoids contact with other creatures and objects, adjusting its orbit to avoid collisions and thwarting all attempts by other creatures to attack or snatch it.\n   As a Utilize action, you can seize and stow any number of Ioun Stones orbiting your head. If your Attunement to an Ioun Stone ends while it’s orbiting your head, the stone falls as though you had dropped it.",
	allowDuplicates : true,
	action : [["action", " (orbit/retrieve)"]],
	choices : ["Absorption", "Agility", "Awareness", "Fortitude", "Greater Absorption", "Insight", "Intellect", "Leadership", "Mastery", "Protection", "Regeneration", "Reserve", "Strength", "Sustenance"],
	"absorption" : {
		rarity : "very rare",
		magicItemTable : "?",
		description : "As a Magic action, I can make this pale lavender ellipsoid orbit my head at 1d3 ft or retrieve it. While it orbits my head, I can use my reaction to cancel a spell of 4th level or lower targeting only me, if I can see the caster and the stone has enough charges left. It can cancel 20 levels of spells before it loses its magic.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   While this pale lavender ellipsoid orbits your head, you can take a Reaction to cancel a spell of level 4 or lower cast by a creature you can see. A canceled spell has no effect, and any resources used to cast it are wasted. Once the stone has canceled 20 levels of spells, it burns out, turns dull gray, and loses its magic.",
		limfeaname : "Ioun Stone of Absorption",
		usages : 20,
		recovery : "Never",
		action : [["reaction", ""]]
	},
	"agility" : {
		rarity : "very rare",
		magicItemTable : "?",
		description : "As a Magic action, I can make this deep red sphere orbit my head at 1d3 ft or retrieve it. While it orbits my head, my Dexterity score increases by 2, to a maximum of 20.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   Your Dexterity increases by 2, to a maximum of 20, while this deep-red sphere orbits your head.",
		scores : [0, 2, 0, 0, 0, 0]
	},
	"awareness" : {
		rarity : "rare",
		magicItemTable : "?",
		description : "As a Magic action, I can make this dark blue rhomboid orbit my head at 1d3 ft or retrieve it. While it orbits my head, I can't be surprised.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   While this dark-blue rhomboid orbits your head, you have Advantage on Initiative rolls and Wisdom (Perception) checks.",
	},
	"fortitude" : {
		rarity : "very rare",
		magicItemTable : "?",
		description : "As a Magic action, I can make this pink rhomboid orbit my head at 1d3 ft or retrieve it. While it orbits my head, my Constitution score increases by 2, to a maximum of 20.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   Your Constitution increases by 2, to a maximum of 20, while this pink rhomboid orbits your head.",
		scores : [0, 0, 2, 0, 0, 0]
	},
	"greater absorption" : {
		rarity : "legendary",
		magicItemTable : "?",
		description : "As a Magic action, I can make this marbled lavender and green ellipsoid orbit my head at 1d3 ft or retrieve it. While it orbits my head, I can use a reaction to cancel a spell of 8th level or lower targeting only me, if I can see the caster and enough charges are left. It can cancel 20 levels of spells before it loses its magic.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   While this marbled lavender and green ellipsoid orbits your head, you can take a Reaction to cancel a spell of level 8 or lower cast by a creature you can see. A canceled spell has no effect, and any resources used to cast it are wasted. Once the stone has canceled 20 levels of spells, it burns out, turns dull gray, and loses its magic.",
		limfeaname : "Ioun Stone of Greater Absorption",
		usages : 20,
		recovery : "Never",
		action : [["reaction", ""]]
	},
	"insight" : {
		rarity : "very rare",
		magicItemTable : "?",
		description : "As a Magic action, I can make this incandescent blue sphere orbit my head at 1d3 ft or retrieve it. While it orbits my head, my Wisdom score increases by 2, to a maximum of 20.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   Your Wisdom increases by 2, to a maximum of 20, while this incandescent blue sphere orbits your head.",
		scores : [0, 0, 0, 0, 2, 0]
	},
	"intellect" : {
		rarity : "very rare",
		magicItemTable : "?",
		description : "As a Magic action, I can make this marbled scarlet and blue sphere orbit my head at 1d3 ft or retrieve it. While it orbits my head, my Intelligence score increases by 2, to a maximum of 20.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   Your Intelligence increases by 2, to a maximum of 20, while this marbled scarlet and blue sphere orbits your head.",
		scores : [0, 0, 0, 2, 0, 0]
	},
	"leadership" : {
		rarity : "very rare",
		magicItemTable : "?",
		description : "As a Magic action, I can make this marbled pink and green sphere orbit my head at 1d3 ft or retrieve it. While it orbits my head, my Charisma score increases by 2, to a maximum of 20.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   Your Charisma increases by 2, to a maximum of 20, while this marbled pink and green sphere orbits your head.",
		scores : [0, 0, 0, 0, 0, 2]
	},
	"mastery" : {
		rarity : "legendary",
		magicItemTable : "?",
		description : "As a Magic action, I can make this pale green prism orbit my head at 1d3 ft or retrieve it. While it orbits my head, my proficiency bonus increases by 1.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   Your Proficiency Bonus increases by 1 while this pale green prism orbits your head.",
		addMod : [{ type: "", field : "Proficiency Bonus Modifier", mod : 1, text : "My proficiency bonus increases by 1." }]
	},
	"protection" : {
		rarity : "rare",
		magicItemTable : "?",
		description : "As a Magic action, I can make this dusty rose prism orbit my head at 1d3 ft or retrieve it. While it orbits my head, I have a +1 bonus to AC.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   You gain a +1 bonus to Armor Class while this dusty-rose prism orbits your head.",
		extraAC : [{name : "Ioun Stone of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC while attuned."}]
	},
	"regeneration" : {
		rarity : "legendary",
		magicItemTable : "?",
		description : "As a Magic action, I can make this pearly white spindle orbit my head at 1d3 ft or retrieve it. It has 10 HP and resistance to all damage. While it orbits my head, I regain 15 HP at the end of each hour as long as I have at least 1 HP.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   You regain 15 Hit Points at the end of each hour this pearly white spindle orbits your head if you have at least 1 Hit Point."
	},
	"reserve" : {
		rarity : "rare",
		magicItemTable : "?",
		description : "As a Magic action, I can make this vibrant purple prism orbit my head at 1d3 ft or retrieve it. It can store 4 (spell slot) levels worth of spells. By touching it, one can cast a 1-4 level spell into it. While it orbits my head, I can cast any spell stored in it as if casting it myself, but using the original casters spellcasting ability.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   This vibrant purple prism stores spells cast into it, holding them until you use them. The stone can store up to 4 levels of spells at a time. When found, it contains 1d4 levels of stored spells chosen by the DM.\n   Any creature can cast a spell of level 1 through 4 into the stone by touching it as the spell is cast. The spell has no effect, other than to be stored in the stone. If the stone can’t hold the spell, the spell is expended without effect. The level of the slot used to cast the spell determines how much space it uses.\n   While this stone orbits your head, you can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster but is otherwise treated as if you cast the spell. The spell cast from the stone is no longer stored in it, freeing up space."
	},
	"strength" : {
		rarity : "very rare",
		magicItemTable : "?",
		description : "As a Magic action, I can make this pale blue rhomboid orbit my head at 1d3 ft or retrieve it. While it orbits my head, my Strength score increases by 2, to a maximum of 20.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   Your Strength increases by 2, to a maximum of 20, while this pale blue rhomboid orbits your head.",
		scores : [2, 0, 0, 0, 0, 0]
	},
	"sustenance" : {
		rarity : "rare",
		magicItemTable : "?",
		description : "As a Magic action, I can make this clear spindle orbit my head at 1d3 ft or retrieve it. While it orbits my head, I don't need to eat or drink.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   You don’t need to eat or drink while this clear spindle orbits your head."
	}
};
MagicItemsList["iron bands of bilarro"] = { // contains contributions by AelarTheElfRogue
	name : "Iron Bands of Bilarro",
	nameAlt : "Iron Bands of Binding",
	source : [["DMG2024", "-"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "Once per dawn, as a Magic action, I can speak the command word and make a ranged attack (Dex + Prof). If hit, the target is restrained until I use a bonus action to speak the command word again. Once per 24 hours, the target can make a DC 20 Strength (Athletics) check as an action to free itself and destroy the bands.",
	descriptionLong : "Once per dawn, as a Magic action, I can throw this rusty iron sphere and speak its command word. I make a ranged attack roll with an attack bonus equal to my Dexterity modifier plus Proficiency Bonus. On a hit, the target is restrained until I take a bonus action to speak the command word again to release it. Doing so, or missing with the attack, causes the bands to contract and become a sphere once more. The target can make a DC 20 Strength (Athletics) check as an action, freeing itself and destroying the bands on a success. If the check fails, any further attempts made by that creature automatically fail until 24 hours have elapsed.",
	descriptionFull : "This rusty iron sphere measures 3 inches in diameter and weighs 1 pound. You can take a Magic action to throw the sphere at a Huge or smaller creature you can see within 60 feet of yourself. As the sphere moves through the air, it opens into a tangle of metal bands.\n   Make a ranged attack roll with an attack bonus equal to your Dexterity modifier plus your Proficiency Bonus. On a hit, the target has the Restrained condition until you take a Bonus Action to issue a command that releases it. Doing so or missing with the attack causes the bands to contract and become a sphere once more.\n   A creature that can touch the bands, including the one Restrained, can take an action to make a DC 20 Strength (Athletics) check to break the iron bands. On a successful check, the item is destroyed, and the Restrained creature is freed. On a failed check, any further attempts made by that creature automatically fail until 24 hours have elapsed.\n   Once the bands are used, they can’t be used again until the next dawn.",
	weight : 1,
	usages : 1,
	recovery : "dawn",
	action : [["action", " (throw)"], ["bonus action", " (release)"]],
	weaponsAdd : ["Iron Bands of Bilarro"],
	weaponOptions : {
		regExpSearch : /^(?=.*iron)(?=.*band)(?=.*(bilarro|binding)).*$/i,
		name : "Iron Bands of Bilarro",
		source : [["DMG2024", "-"]],
		ability : 2,
		type : "Natural",
		damage : ["\u2015", "", "Restrained"],
		range : "60 ft",
		description : "Restrains Huge or smaller creature; DC 20 Strength check to break out",
		abilitytodamage : false,
		weight : 1
	}
};
