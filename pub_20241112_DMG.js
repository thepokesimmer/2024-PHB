var iFileName = "pub_20241112_DMG.js";
RequiredSheetVersion("13.2.3");
SourceList.D24 = {
  name: "2024 Dungeon Master's Guide",
  abbreviation: "D24",
  abbreviationSpellsheet: "D4",
  group: "Core Sources",
  url: "https://marketplace.dndbeyond.com/category/3710000?pid=DB3710000",
  date: "2024/11/12",
};
// Coded By: ThePokésimmer and ShadowzAll with contributions from Reading Toskr, and TrackAtNite
//Functions

//Supernatural Gifts
FeatsList["blessings"] = {
	name : "Blessings [Supernatural Gifts]",
	source : [["D24", 98]],
	regExpSearch : /blessings/i,
	description : "A Blessing is usually bestowed by a god or a godlike being.",
	descriptionFull : "A supernatural gift is a special reward granted by a being or force of great magical power. Supernatural gifts come in two forms: Blessing. A Blessing is usually bestowed by a god or a godlike being.",
	choices : ["Health", "Magic Resistance", "Protection", "Understanding", "Valhalla", "Weapon Enhancement", "Wound Closure"],
	"health" : {
		name: "Blessing of Health [Supernatural Gift]",
		scores : [0, 0, 2, 0, 0, 0],
		scoresMaximum : [0, 0, 22, 0, 0, 0],
		description : "My Constitution score increases by 2, up to a maximum of 22.",
		descriptionFull : "Your Constitution score increases by 2, up to a maximum of 22.",	
	},
	"magic resistance" : {
		name: "Blessing of Magic Resistance [Supernatural Gift]",
		savetxt : { adv_vs : ["spells and other magical effects; "] },
		description : "I have Advantage on saving throws against spells and other magical effects.",
		descriptionFull : "You have Advantage on saving throws against spells and other magical effects.",	
	},
	"protection" : {
		name: "Blessing of Protection [Supernatural Gift]",
		extraAC : { mod : 1, misc : true },
		addMod : [
			{ type : "save", field : "all", mod : 1, text : "I gain a +1 bonus to saving throws." },
		],
		description : "I gain a +1 bonus to AC and saving throws.",
		descriptionFull : "You gain a +1 bonus to AC and saving throws.",	
	},
	"understanding" : {
		name: "Blessing of Understanding [Supernatural Gift]",
		scores : [0, 0, 0, 0, 2, 0],
		scoresMaximum : [0, 0, 0, 0, 22, 0],
		description : "My Wisdom score increases by 2, up to a maximum of 22.",
		descriptionFull : "Your Wisdom score increases by 2, up to a maximum of 22.",
	},
	"valhalla" : {
		name : "Blessing of Valhalla [Supernatural Gift]",
		limfeaname : "Blessing of Valhalla",
		usages : 1,
		recovery : "7 days",
		description : "This Blessing grants me the power to summon spirit warriors, as if I am blowing a silver Horn of Valhalla. Once I use this Blessing, I can’t use it again until 7 days have passed. (See Notes Page)",
		descriptionFull : "This Blessing grants you the power to summon spirit warriors, as if you are blowing a silver Horn of Valhalla. Once you use this Blessing, you can’t use it again until 7 days have passed.",
		toNotesPage : [{
			name : "Blessing of Valhalla",
			note : "As a Magic action once per 7 days, I can use this blessing to summon 2 warrior spirits from Ysgard within 60 ft me. These have the statistics of a Berserker and return after 1 hour or when they drop to 0 HP. They are friendly to me and my companions and follow my commands."
		}],
	},
	"weapon enhancement" : {
		name: "Blessing of Weapon Enhancement [Supernatural Gift]",
		description : "One nonmagical weapon in my possession becomes a +1 Weapon while you wield it.",
		descriptionFull : "One nonmagical weapon in your possession becomes a +1 Weapon while you wield it.",
	},
	"wound closure" : {
		name: "Blessing of Wound Closure [Supernatural Gift]",
		description : "This Blessing grants me the benefits of a Periapt of Wound Closure. Whenever I make a Death Saving Throw, I can change a roll of 9 or lower to a 10, turning a failed save into a successful one. Whenever I roll a Hit Point die to regain Hit Points, double the number of Hit Points it restores.",
		descriptionFull : "This Blessing grants you the benefits of a Periapt of Wound Closure.",
	},
};
FeatsList["charms"] = {
	name : "Charms [Supernatural Gifts]",
	source : [["D24", 99]],
	regExpSearch : /charms/i,
	description : "A Charm is usually the work of a powerful spirit, a magical location, or a mythic creature. Unlike a magic item, a supernatural gift isn’t an object and doesn’t require Attunement.",
	descriptionFull : "A supernatural gift is a special reward granted by a being or force of great magical power. Supernatural gifts come in two forms: Charm. A Charm is usually the work of a powerful spirit, a magical location, or a mythic creature. Unlike a magic item, a supernatural gift isn’t an object and doesn’t require Attunement.",
	choices : ["Animal Conjuring", "Darkvision", "Feather Falling", "Heroism", "Restoration", "Dragon Slayer", "Giant Slayer", "Vitality"],
	"animal conjuring" : {
		name: "Charm of Animal Conjuring [Supernatural Gift]",
		limfeaname : "Charm of Animal Conjuring",
		usages : 3,
		recovery : "Never",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Charm of Animal Conjuring",
			spells : "conjure animals",
			selection : "conjure animals",
			times : 1,
			firstCol : 1,
		}],
		description : "This Charm allows me to cast Conjure Animals. Once used three times, the Charm vanishes from me.",
		descriptionFull : "This Charm allows you to cast Conjure Animals. Once used three times, the Charm vanishes from you.",	
	},
	"darkvision" : {
		name: "Charm of Darkvision [Supernatural Gift]",
		limfeaname : "Charm of Darkvision",
		usages : 3,
		recovery : "Never",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Charm of Darkvision",
			spells : "darkvision",
			selection : "darkvision",
			times : 1,
			firstCol : 1,
		}],
		description : "This Charm allows me to cast Darkvision. Once used three times, the Charm vanishes from me.",
		descriptionFull : "This Charm allows you to cast Darkvision. Once used three times, the Charm vanishes from you.",
	},
	"feather falling" : {
		name: "Charm of Feather Falling [Supernatural Gift]",
		limfeaname : "Charm of Feather Falling",
		usages : "10 days",
		recovery : "Never",
		description : "This Charm grants me the benefits of a Ring of Feather Falling. These benefits last for 10 days, after which the Charm vanishes from me. When I fall while having this charm, I descend 60 ft per round and take no damage from falling.",
		descriptionFull : "This Charm grants you the benefits of a Ring of Feather Falling. These benefits last for 10 days, after which the Charm vanishes from you.",
	},
	"heroism" : {
		name: "Charm of Heroism [Supernatural Gift]",
		limfeaname : "Charm of Heroism",
		usages : 1,
		recovery : "Never",
		action : "action",
		description : "This Charm allows me to give myself the benefit of a Potion of Heroism as a Magic action. Once I do so, the Charm vanishes from me. When I activate this charm, I gain 10 Temporary Hit Points that last for 1 hour. For the same duration, I am under the effect of the Bless spell (no Concentration required)",
		descriptionFull : "This Charm allows you to give yourself the benefit of a Potion of Heroism as a Magic action. Once you do so, the Charm vanishes from you.",
	},
	"restoration" : {
		name: "Charm of Restoration [Supernatural Gift]",
		limfeaname : "Charm of Restoration",
		usages : 3,
		recovery : "Never",
		spellFirstColTitle : "CH",
		spellcastingBonus : [{
			name : "Charm of Restoration",
			spells : ["lesser restoration"],
			selection : ["lesser restoration"],
			times : 1,
			firstCol : 1,
		}, {
			name : "Charm of Restoration",
			spells : ["greater restoration"],
			selection : ["greater restoration"],
			times : 1,
			firstCol : 2,
		}],
		description : "This Charm has 3 charges. I can expend some of its charges to cast one of the following spells: Greater Restoration (2 charges) or Lesser Restoration (1 charge). Once all its charges have been expended, the Charm vanishes from me.",
		descriptionFull : "This Charm has 3 charges. You can expend some of its charges to cast one of the following spells: Greater Restoration (2 charges) or Lesser Restoration (1 charge). Once all its charges have been expended, the Charm vanishes from you.",
	},
	"dragon slayer" : {
		name : "Charm of the Dragon Slayer [Supernatural Gift]",
		limfeaname : "Charm of the Dragon Slayer",
		usages : "9 days",
		recovery : "Never",
		description : "One weapon in my possession becomes a Dragon Slayer weapon for the next 9 days. The Charm then vanishes from me, and the weapon returns to normal. (See Notes Page)",
		descriptionFull : "One weapon in your possession becomes a Dragon Slayer weapon for the next 9 days. The Charm then vanishes from you, and the weapon returns to normal.",
		toNotesPage : [{
			name : "Charm of the Dragon Slayer",
			note : "You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon. The weapon deals an extra 3d6 damage of the weapon’s type if the target is a Dragon.",
		}],
	},
	"giant slayer" : {
		name : "Charm of the Giant Slayer [Supernatural Gift]",
		limfeaname : "Charm of the Giant Slayer",
		usages : "9 days",
		recovery : "Never",
		description : "One weapon in my possession becomes a Giant Slayer weapon for the next 9 days. The Charm then vanishes from me, and the weapon returns to normal. (See Notes Page)",
		descriptionFull : "One weapon in your possession becomes a Giant Slayer weapon for the next 9 days. The Charm then vanishes from you, and the weapon returns to normal.",
		toNotesPage : [{
			name : "Charm of the Giant Slayer",
			note : "You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon. When you hit a Giant with this weapon, the Giant takes an extra 2d6 damage of the weapon’s type and must succeed on a DC 15 Strength saving throw or have the Prone condition.",
		}],
	},
	"vitality" : {
		name: "Charm of Vitality [Supernatural Gift]",
		limfeaname : "Charm of Vitality",
		usages : 1,
		recovery : "Never",
		action : "action",
		description : "This Charm allows me to give myself the benefit of a Potion of Vitality as a Magic action. Once I do so, the Charm vanishes from me. When I activate this charm, it removes any Exhaustion levels I have and ends the Poisoned condition on me. For the next 24 hours, I regain the maximum number of Hit Points for any Hit Point Die I spend.",
		descriptionFull : "This Charm allows you to give yourself the benefit of a Potion of Vitality as a Magic action. Once you do so, the Charm vanishes from you.",
	},
};
//Magic Items
MagicItemsList["adamantine armor"] = {
	name : "Adamantine Armor",
	nameTest : /adamantine.*armou?r/i,
	source : [["D24", 227]],
	magicItemTable : "?",
	type : "armor (medium or heavy)",
	rarity : "uncommon",
	description : "This armor is reinforced with adamantine, one of the hardest substances in existence. While I'm wearing it, any Critical Hit against me becomes a normal hit.",
	descriptionFull : "This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you’re wearing it, any Critical Hit against you becomes a normal hit.",
	allowDuplicates : true,
	chooseGear : {
		type : "armor",
		prefixOrSuffix : ["between", "Adamantine", "Armor"],
		itemName1stPage : ["suffix", "Adamantine"],
		descriptionChange : ["prefix", "armor"],
		excludeCheck : function (inObjKey, inObj) {
			return !(/medium|heavy/i).test(inObj.type) || (/hide/i).test(inObj.name);
		}
	}
};
MagicItemsList["adamantine ammunition"] = {
	name : "Adamantine Ammunition",
	source : [["D24", 227]],
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
	source : [["D24", 227]],
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
	source : [["D24", 227]],
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
	source : [["D24", 228]],
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
	source : [["D24", 228]],
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
	source : [["D24", 228]],
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
	source : [["D24", 228]],
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
	source : [["D24", 229]],
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
	source : [["D24", 229]],
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
	source : [["D24", 229]],
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
	source : [["D24", 230]],
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
	source : [["D24", 230]],
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
	source : [["D24", 230]],
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
	source : [["D24", 231]],
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
	source : [["D24", 231]],
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
	source : [["D24", 231]],
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
	source : [["D24", 232]],
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
	source : [["D24", 233]],
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
	source : [["D24", 234]],
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
	source : [["D24", 234]],
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
	source: [["D24", 234]],
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
	source : [["D24", 234]],
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
	source : [["D24", 235]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "Once I can eat this spongy, flavorless, gelatinous bead. It dissolves on my tongue and provides as much nourishment as 1 day of rations.",
	descriptionFull : "This flavorless, gelatinous bead dissolves on your tongue and provides as much nourishment as 1 day of Rations."
};
MagicItemsList["bead of refreshment"] = {
	name : "Bead of Refreshment",
	source : [["D24", 235]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "Once I can drop this spongy, flavorless, gelatinous bead in liquid. It dissolves in the liquid and transforms up to a pint of it into fresh, cold drinking water. The bead has no effect on magical liquids or harmful substances such as poison.",
	descriptionFull : "This flavorless, gelatinous bead dissolves in liquid, transforming up to a pint of the liquid into fresh, cold drinking water. The bead has no effect on magical liquids or harmful substances such as poison."
};
MagicItemsList["belt of dwarvenkind"] = {
	name : "Belt of Dwarvenkind",
	source : [["D24", 235]],
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
	source : [["D24", 236]],
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
	source : [["D24", 236]],
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
	"Hidden in the dungeon of White Plume Mountain, >>Blackrazor<< shines like a piece of night sky filled with stars. Its black scabbard is decorated with pieces of cut obsidian.",
	"You gain a +3 bonus to attack rolls and damage rolls made with this magic weapon. If you hit an Undead with this weapon, you take 1d10 Necrotic damage, and the target regains 1d10 Hit Points. If this Necrotic damage reduces you to 0 Hit Points, >>Blackrazor<< devours your soul (see “Devour Soul” below).",
	"While you hold this weapon, you have Immunity to the Charmed and Frightened conditions, and you have Blindsight with a range of 30 feet.",
	toUni("Devour Soul") + ". Whenever you use >>Blackrazor<< to reduce a creature to 0 Hit Points, the sword slays the creature and devours its soul unless it is a Construct or an Undead. A creature whose soul has been devoured by >>Blackrazor<< can be restored to life only by a Wish spell.",
	"When >>Blackrazor<< devours a soul that isn’t yours, you gain Temporary Hit Points equal to the slain creature’s Hit Point maximum.",
	toUni("Haste") + ". >>Blackrazor<< can cast Haste on you, after which it can’t cast this spell again until the next dawn. >>Blackrazor<< decides when to cast the spell, which takes effect at the start of your turn. The spell lasts for 1 minute (no Concentration required) or until >>Blackrazor<< decides to end it, which it can do at the end of any of your turns.",
	toUni("Sentience") + ". >>Blackrazor<< is a sentient Chaotic Neutral weapon with an Intelligence of 17, a Wisdom of 10, and a Charisma of 19. It has hearing and Darkvision out to 120 feet.",
	"The weapon speaks Common and can communicate with its wielder telepathically. Its voice is deep and echoing. While you are attuned to it, >>Blackrazor<< also understands every language you know.",
	toUni("Personality") + ". >>Blackrazor<< speaks with an imperious tone, as though accustomed to being obeyed.",
	"The sword’s purpose is to consume souls. It doesn’t care whose souls it eats, including the wielder’s. The sword believes that all matter and energy sprang from a void of negative energy and will one day return to it. >>Blackrazor<< is meant to hurry that process along.",
	"Despite its nihilism, >>Blackrazor<< feels a strange kinship to Wave and Whelm, two other weapons locked away under White Plume Mountain. It wants the three weapons to be reunited and wielded together in combat, even though it violently disagrees with Whelm and finds Wave tedious.",
	">>Blackrazor<<’s hunger for souls must be regularly fed. If the sword goes 3 days or more without consuming a soul, a conflict between it and its wielder occurs at the next sunset.",
	toUni("Destroying Blackrazor") + ". >>Blackrazor<< can be destroyed by crushing it in the great gears of Mechanus. Primus, the creator of the modrons, also knows a series of musical tones that >>Blackrazor<< can’t stand to hear, causing the sword to shatter.",
];
MagicItemsList["blackrazor"] = {
	name : "Blackrazor",
	source : [["D24", 236]],
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
		source : [["D24", "-"]],
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
	source : [["D24", 239]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While I wear these boots, my steps make no sound, regardless of the surface I am moving across. I also have advantage on Dexterity (Stealth) checks that rely on moving silently.",
	descriptionFull : "While you wear these boots, your steps make no sound, regardless of the surface you are moving across. You also have Advantage on Dexterity (Stealth) checks.",
	advantages : [["Stealth", true]],
};
MagicItemsList["boots of false tracks"] = {
	name : "Boots of False Tracks",
	source : [["D24", 239]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	attunement : true,
	description : "While wearing the boots, I can choose to have them leave tracks like those of another kind of humanoid of my size.",
	descriptionFull : "While wearing these boots, you can have them leave tracks like those of any kind of Humanoid of your size."
};
MagicItemsList["boots of levitation"] = { // contributed by AelarTheElfRogue
	name : "Boots of Levitation",
	source : [["D24", 239]],
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
	source : [["D24", 240]],
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
	source : [["D24", 240]],
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
	source : [["D24", 240]],
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
	source : [["D24", 240]],
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
	source : [["D24", 240]],
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
	source : [["D24", 241]],
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
	source : [["D24", 241]],
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
	source : [["D24", 241]],
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
	source : [["D24", 241]],
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
	source : [["D24", 241]],
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
	source : [["D24", 242]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "The flame of this candle isn’t extinguished when immersed in water. It gives off light and heat like a normal candle.",
	descriptionFull : "The flame of this candle isn’t extinguished when immersed in water. It gives off light and heat like a normal candle."
};
MagicItemsList["cape of the mountebank"] = { // contributed by Smashman
	name : "Cape of the Mountebank",
	source : [["D24", 242]],
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
	source : [["D24", 242]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While wearing this cap underwater, I can speak its command word as a magic action to create a bubble of air around my head. It allows me to breathe normally underwater. This bubble stays with me until I speak the command word again, the cap is removed, or I am no longer underwater.",
	descriptionFull : "While wearing this cap underwater, you can take a Magic action to create a bubble of air around your head. This bubble allows you to breathe normally underwater. This bubble stays with you until the cap is removed or you are no longer underwater.",
	action : [["action", ""]]
};
MagicItemsList["carpet of flying"] = {
	name : "Carpet of Flying",
	source : [["D24", 242]],
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
	source : [["D24", 243]],
	magicItemTable : "?",
	type : "armor (light, medium, or heavy)",
	rarity : "common",
	description : "As a Magic action, I can doff this armor.",
	descriptionFull : "You can doff this armor as a Magic action.",
	chooseGear : {
		type : "armor",
		prefixOrSuffix : ["between", "Cast-Off", "Armor"],
		itemName1stPage : ["suffix", "Cast-Off"],
		descriptionChange : ["prefix", "armor"],
	},
	action : [["action", ""]]
};
MagicItemsList["cauldron of rebirth"] = {
	name : "Cauldron of Rebirth",
	source : [["D24", 243]],
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
	source : [["D24", 243]],
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
	source : [["D24", 243]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "Whenever I roll this six-sided die, I can control which number it rolls.",
	descriptionFull : "Whenever you roll this six-sided die, you can control which number it rolls.",
	attunement : true
};
MagicItemsList["chime of opening"] = { // contributed by AelarTheElfRogue
	name : "Chime of Opening",
	source : [["D24", 244]],
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
	source : [["D24", 244]],
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
	source : [["D24", 244]],
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
	source : [["D24", 244]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "As a Bonus Action while wearing this cloak, I can make it billow dramatically.",
	descriptionFull : "While wearing this cloak, you can take a Bonus Action to make it billow dramatically for 1 minute.",
	action : [["bonus action", ""]]
};
MagicItemsList["cloak of displacement"] = { // contributed by Smashman
	name : "Cloak of Displacement",
	source : [["D24", 244]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "While I wear this cloak, creatures have disadvantage on attack rolls against me as I appear to be standing in a slightly different location. If I take damage, this property ceases to function until the start of my next turn. The property is suppressed while I am incapacitated, restrained, or otherwise unable to move.",
	descriptionFull : "While you wear this cloak, it magically projects an illusion that makes you appear to be standing in a place near your actual location, causing any creature to have Disadvantage on attack rolls against you. If you take damage, the property ceases to function until the start of your next turn. This property is suppressed while your Speed is 0.",
	attunement : true
};
MagicItemsList["cloak of elvenkind"] = {
	name : "Cloak of Elvenkind",
	source : [["D24", 244]],
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
	source : [["D24", 244]],
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
	source : [["D24", 245]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "As a bonus action while wearing this cloak, I can change its style, color, and apparent qualities. The cloak's weight doesn't change. Regardless of its appearance, the cloak can't be anything but a cloak. Although it can duplicate the appearance of other magic cloaks, it doesn't gain their magical properties.",
	descriptionFull : "While wearing this cloak, you can take a Bonus Action to change the style, color, and apparent quality of the garment. The cloak’s weight doesn’t change. Regardless of its appearance, the cloak can’t be anything but a cloak. Although it can duplicate the appearance of other magic cloaks, it doesn’t gain their magical properties.",
	action : [["bonus action", ""]]
};
MagicItemsList["cloak of protection"] = {
	name : "Cloak of Protection",
	source : [["D24", 245]],
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
	source : [["D24", 245]],
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
	source : [["D24", 245]],
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
	source : [["D24", 245]],
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
	source : [["D24", 245]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "This elegant outfit magically mends itself to counteract daily wear and tear. Pieces of the outfit that are destroyed can't be repaired in this way.",
	descriptionFull : "This elegant outfit magically mends itself to counteract daily wear and tear. Pieces of the outfit that are destroyed can’t be repaired in this way.",
	weight : 4
};
MagicItemsList["crystal ball"] = {
	name : "Crystal Ball",
	source : [["D24", 245]],
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
	source : [["D24", 246]],
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
	source : [["D24", 247]],
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
	source : [["D24", 247]],
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
	source : [["D24", 247]],
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
	source : [["D24", 248]],
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
		source : [["D24", "-"]],
		description : "Finesse, light, thrown; If coated, DC 15 Con save or +2d10 poison damage \u0026 1 min poisoned; Nick",
		modifiers : [1, 1]
	}
};
MagicItemsList["dancing sword"] = {
	name : "Dancing Sword",
	nameTest : "Dancing",
	source : [["D24", 248]],
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
	source : [["D24", 248]],
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
	source : [["D24", 249]],
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
	source : [["D24", 249]],
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
	source : [["D24", 250]],
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
	source : [["D24", 252]],
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
MagicItemsList["demon armor"] = { // contains contributions by Larry Hoy
	name : "Demon Armor +1",
	source : [["D24", 252]],
	nameTest : "Demon",
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
		prefixOrSuffix : ["between", "Demon", "Armor +1"],
		descriptionChange : ["prefix", "armor +1"],
	},
	weaponsAdd: ["Demon Armor Claws"],
	weaponOptions: [{
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*demon)(?=.*armor)(?=.*claws).*$/i,
		name : "Demon Armor Claws",
		source: [["D24", "-"]],
		damage : [1, 8, "slashing"],
		modifiers : [1, 1]
	}]
};
MagicItemsList["dimensional shackles"] = {
	name : "Dimensional Shackles",
	source : [["D24", 254]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "As a Utilize action, I can shackle an incapacitated creature of size Small to Large. They work as mundane manacles and prevent extradimensional movement, but not portal travel. Myself and others I designate can remove them as a Utilize action. The bound target can try every 30 days to break them with a DC 30 Athletics check.",
	descriptionFull : "You can take a Utilize action to place these shackles on a creature that has the Incapacitated condition. The shackles adjust to fit a creature of Small to Large size. The shackles prevent a creature bound by them from using any method of extradimensional movement, including teleportation or travel to a different plane of existence. They don’t prevent the creature from passing through an interdimensional portal.\n   You and any creature you designate when you use the shackles can take a Utilize action to remove them. Once every 30 days, the bound creature can make a DC 30 Strength (Athletics) check. On a successful check, the creature breaks free and destroys the shackles.",
	action : [["action", " (bind/remove)"]]
};
MagicItemsList["dragon scale mail"] = {
	name : "Dragon Scale Mail",
	source : [["D24", 254]],
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
		source : [["D24", "-"]],
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
	source : [["D24", 254]],
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
	source : [["D24", 254]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "While I'm wearing this fearsome steel helm, my eyes glow red and the rest of my face is hidden in shadow.",
	descriptionFull : "While you’re wearing this fearsome steel helm, your eyes glow red and the rest of your face is hidden in shadow.",
	weight : 1
};
MagicItemsList["driftglobe"] = {
	name : "Driftglobe",
	source : [["D24", 254]],
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
	source : [["D24", 255]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "Once as a Utilize action, I can throw this dust into the air. By doing so, me and all creatures/objects within a 10-ft emanation become invisible for 2d4 minutes. The duration is the same for all subjects. If a creature affected by the dust makes an attack roll, deals damage, or casts a spell, the invisibility ends for that creature.",
	descriptionFull : "This powder resembles fine sand. There is enough of it for one use. When you take a Utilize action to throw the dust into the air, you and each creature and object within a 10-foot Emanation originating from you have the Invisible condition for 2d4 minutes. The duration is the same for all subjects, and the dust is consumed when its magic takes effect. Immediately after an affected creature makes an attack roll, deals damage, or casts a spell, the Invisible condition ends for that creature."
};
MagicItemsList["dust of dryness"] = {
	name : "Dust of Dryness",
	source : [["D24", 255]],
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
	source : [["D24", 255]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "Once as a Utilize action, I can throw this dust into the air, causing me and all creatures within 30 ft that need to breathe to make a DC 15 Con save or start sneezing uncontrollably and be unable to breathe, thus becoming incapacitated and suffocating. Those affected can repeat their save at the end of each of their turns.",
	descriptionFull : "Found in a small container, this powder resembles Dust of Disappearance, and Identify reveals it to be such. There is enough of it for one use.\n   As a Utilize action, you can throw the dust into the air, forcing yourself and every creature in a 30-foot Emanation originating from you to make a DC 15 Constitution saving throw. Constructs, Elementals, Oozes, Plants, and Undead succeed on the save automatically.\n   On a failed save, a creature begins sneezing uncontrollably; it has the Incapacitated condition and is suffocating. The creature repeats the save at the end of each of its turns, ending the effect on itself on a success. The effect also ends on any creature targeted by a Lesser Restoration spell."
};
MagicItemsList["dwarven plate"] = {
	name : "Dwarven Plate",
	source : [["D24", 255]],
	type : "armor (half plate or plate armor)",
	rarity : "very rare",
	magicItemTable : "?",
	description : "While wearing this armor, I gain a +2 bonus to AC. In addition, if an effect moves me against my will along the ground, I can use my reaction to reduce the distance I am moved by up to 10 ft.",
	descriptionFull : "While wearing this armor, you gain a +2 bonus to Armor Class. In addition, if an effect moves you against your will along the ground, you can take a Reaction to reduce the distance you are moved by up to 10 feet.",
	action : [["reaction", ""]],
	choices : ["Half Plate", "Plate"],
	"half plate": {
		description : "While wearing this half plate armor, I gain a +2 bonus to AC. In addition, if an effect moves me against my will along the ground, I can use my reaction to reduce the distance I am moved by up to 10 ft.",
		descriptionFull : "While wearing this half plate armor, you gain a +2 bonus to Armor Class. In addition, if an effect moves you against your will along the ground, you can take a Reaction to reduce the distance you are moved by up to 10 feet.",
		armorOptions : {
			regExpSearch : /^(?=.*dwarven)(?=.*half)(?=.*plate).*$/i,
			name : "Dwarven Half Plate",
			source : [["D24", 255]],
			type : "medium",
			ac : "15+2",
			stealthdis : true,
			weight : 40,
			selectNow: true,
		},
	},
	"plate": {
		description : "While wearing this plate armor, I gain a +2 bonus to AC. In addition, if an effect moves me against my will along the ground, I can use my reaction to reduce the distance I am moved by up to 10 ft.",
		descriptionFull : "While wearing this plate armor, you gain a +2 bonus to Armor Class. In addition, if an effect moves you against your will along the ground, you can take a Reaction to reduce the distance you are moved by up to 10 feet.",
		armorOptions : {
			regExpSearch : /^(?=.*dwarven)(?=.*plate)(?=.*armor).*$/i,
			name : "Dwarven Plate Armor",
			source : [["D24", 255]],
			ac: "18+2",
			type: "heavy",
			stealthdis: true,
			weight: 65,
			strReq: 15,
			selectNow: true,
		},
	}
};
MagicItemsList["dwarven thrower"] = {
	name : "Dwarven Thrower",
	source : [["D24", 256]],
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
		source : [["D24", "-"]],
		range : "Melee, 20/60 ft",
		description : "Thrown, versatile (1d10); +1d8 damage when thrown (2d8 vs. giants) and returns immediately; Push",
		modifiers : [3, 3] // add 3 to each to hit and damage because of the magical bonus
	}
};
MagicItemsList["ear horn of hearing"] = {
	name : "Ear Horn of Hearing",
	source : [["D24", 256]],
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
	source : [["D24", 256]],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "?",
	description : "When I use a Magic action to remove the stopper, a cloud of thick smoke flows out of the bottle. At my turn end, an efreeti appears in an empty space in 30 ft. The 1st time I open the bottle, the DM rolls. 1: It atks for 5 rounds. 2-9: It serves me 3 times for 1 hr (24 hrs between). 10. It casts Wish once.",
	descriptionLong : "When I use a Magic action to remove the stopper, a cloud of thick smoke flows out of the bottle. At the end of my turn, an efreeti appears in an unoccupied space within 30 feet of me. The first time the bottle is opened, the DM rolls to determine what happens that time and the next times (if any). 10% chance that the efreeti attacks me for 5 rounds before disappearing. 80% chance that the efreeti serves me for 1 hour, following my commands. It then returns to the bottle and I can have it serve me 2 more times, but only 24 hours after it returned to the bottle. 10% chance that the efreeti will grant me 1 wish.",
	descriptionFull : "When you take a Magic action to remove the stopper of this painted brass bottle, a cloud of thick smoke flows out of it. At the end of your turn, the smoke disappears with a flash of harmless fire, and an Efreeti appears in an unoccupied space within 30 feet of you.\n   The first time the bottle is opened, the DM rolls on the following table to determine what happens.\n\n" + toUni("1d10") + "\t" + toUni("Effect") + "\n1\tThe efreeti attacks you. After fighting for 5 rounds, the efreeti disappears, and the bottle loses its magic.\n2-9\tThe efreeti understands your languages and obeys your commands for 1 hour, after which it returns to the bottle, and a new stopper contains it. The stopper can’t be removed for 24 hours. The next two times the bottle is opened, the same effect occurs. If the bottle is opened a fourth time, the efreeti escapes and disappears, and the bottle loses its magic.\n10\tThe efreeti understands your languages and can cast Wish once for you. It disappears when it grants the wish or after 1 hour, and the bottle loses its magic.",
	weight : 1,
	action : [["action", ""]]
};
MagicItemsList["efreeti chain"] = {
	name : "Efreeti Chain +3",
	nameTest : "/efreeti.*+3/i",
	source : [["D24", 257]],
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
		prefixOrSuffix : ["between", "Efreeti", "+3"],
		descriptionChange : ["prefix", "armor"],
		excludeCheck : function (inObjKey, inObj) {
			return !(/medium|heavy/i).test(inObj.type) || !(/chain/i).test(inObj.name);
		}
	}
};
MagicItemsList["elemental gem"] = {
	name : "Elemental Gem",
	source : [["D24", 257]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "This gem contains a mote of elemental energy. When I use a Utilize action to break the gem, an elemental is summoned, and the gem's magic is lost. The type of gem determines the elemental summoned by the spell.",
	descriptionFull : "This gem contains a mote of elemental energy. When you take a Utilize action to break the gem, an elemental is summoned (see the Monster Manual for its stat block), and the gem ceases to be magical. The elemental appears in an unoccupied space as close to the broken gem as possible, understands your languages, obeys your commands, and takes its turn immediately after you on your Initiative count. The elemental disappears after 1 hour, when it dies, or when you dismiss it as a Bonus Action. The type of gem determines the elemental, as shown in the following table.",
	choices : ["Blue Sapphire (air)", "Emerald (water)", "Red Corundum (fire)", "Yellow Diamond (earth)"],
	allowDuplicates : true,
	"blue sapphire (air)" : {
		name : "Elemental Gem [Blue Sapphire]",
		description : "This gem contains a mote of air elemental energy. Once as a Utilize action, I can break this gem to summon an air elemental. After doing so, the gem's magic is lost.",
		descriptionFull : "This gem contains a mote of elemental energy. When you take a Utilize action to break the gem, an Air Elemental is summoned (see the Monster Manual for its stat block), and the gem ceases to be magical. The elemental appears in an unoccupied space as close to the broken gem as possible, understands your languages, obeys your commands, and takes its turn immediately after you on your Initiative count. The elemental disappears after 1 hour, when it dies, or when you dismiss it as a Bonus Action.",
	},
	"emerald (water)" : {
		name : "Elemental Gem [Emerald]",
		description : "This gem contains a mote of water elemental energy. Once as an action, I can break this gem to summon a water elemental. After doing so, the gem's magic is lost.",
		descriptionFull : "This gem contains a mote of elemental energy. When you take a Utilize action to break the gem, a Water Elemental is summoned (see the Monster Manual for its stat block), and the gem ceases to be magical. The elemental appears in an unoccupied space as close to the broken gem as possible, understands your languages, obeys your commands, and takes its turn immediately after you on your Initiative count. The elemental disappears after 1 hour, when it dies, or when you dismiss it as a Bonus Action.",
	},
	"red corundum (fire)" : {
		name : "Elemental Gem [Red Corundum]",
		description : "This gem contains a mote of fire elemental energy. Once as an action, I can break this gem to summon a fire elemental. After doing so, the gem's magic is lost.",
		descriptionFull : "This gem contains a mote of elemental energy. When you take a Utilize action to break the gem, a Fire Elemental is summoned (see the Monster Manual for its stat block), and the gem ceases to be magical. The elemental appears in an unoccupied space as close to the broken gem as possible, understands your languages, obeys your commands, and takes its turn immediately after you on your Initiative count. The elemental disappears after 1 hour, when it dies, or when you dismiss it as a Bonus Action.",
	},
	"yellow diamond (earth)" : {
		name : "Elemental Gem [Yellow Diamond]",
		description : "This gem contains a mote of earth elemental energy. Once as an action, I can break this gem to summon an earth elemental. After doing so, the gem's magic is lost.",
		descriptionFull : "This gem contains a mote of elemental energy. When you take a Utilize action to break the gem, an Earth Elemental is summoned (see the Monster Manual for its stat block), and the gem ceases to be magical. The elemental appears in an unoccupied space as close to the broken gem as possible, understands your languages, obeys your commands, and takes its turn immediately after you on your Initiative count. The elemental disappears after 1 hour, when it dies, or when you dismiss it as a Bonus Action.",
	}
};
MagicItemsList["elixir of health"] = {
	name : "Elixir of Health",
	source : [["D24", 257]],
	type : "potion",
	rarity : "rare",
	magicItemTable : "?",
	description : "Once as an action, I can drink this potion or administer it to another to cure any disease, and removing the blinded, deafened, paralyzed, and poisoned conditions. The potion's clear red liquid has tiny bubbles of light in it.",
	descriptionFull : "When you drink this potion, you are cured of all magical contagions. In addition, the following conditions end on you: Blinded, Deafened, Paralyzed, and Poisoned. The clear, red liquid has tiny bubbles of light in it.",
	weight : 0.5
};
MagicItemsList["elven chain"] = {
	name : "Elven Chain +1",
	nameTest : "/elven.*+1/i",
	source : [["D24", 257]],
	type : "armor (chain mail or chain shirt)",
	rarity : "rare",
	magicItemTable : "?",
	description : "I gain a +1 bonus to AC while I wear this armor. I am considered proficient with this armor even if I lack proficiency with medium armor.",
	descriptionFull : "You gain a +1 bonus to Armor Class while you wear this armor. You are considered trained with this armor even if you lack training with Medium or Heavy armor.",
	chooseGear : {
		type : "armor",
		prefixOrSuffix : ["between", "Elven", "+1"],
		descriptionChange : ["prefix", "armor"],
		excludeCheck : function (inObjKey, inObj) {
			return !(/medium|heavy/i).test(inObj.type) || !(/chain/i).test(inObj.name);
		}
	}
};
MagicItemsList["enduring spellbook"] = {
	name : "Enduring Spellbook",
	source : [["D24", 257]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "This spellbook, along with anything written on its pages, can’t be damaged by fire or water. In addition, the spellbook doesn’t deteriorate with age.",
	descriptionFull : "This spellbook, along with anything written on its pages, can’t be damaged by fire or water. In addition, the spellbook doesn’t deteriorate with age.",
	weight : 5
};
MagicItemsList["energy bow"] = {
	name : "Energy Bow",
	source : [["D24", 257]],
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
	source : [["D24", 258]],
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
	source : [["D24", 258]],
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
		source : [["D24", "-"]],
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
	source : [["D24", 258]],
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
	source : [["D24", 259]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "This artificial eye replaces a real one that was lost or removed. While the ersatz eye is embedded in my eye socket, it can't be removed by anyone other than me, and I can see through the tiny orb as though it were a normal eye.",
	descriptionFull : "This magical eye replaces a real one that was lost or removed. While the Ersatz Eye is embedded in your eye socket, you can see through the tiny orb as though it were your natural eye. You can insert or remove the Ersatz Eye as a Magic action, and it can’t be removed against your will while you are alive.",
};
MagicItemsList["eversmoking bottle"] = {
	name : "Eversmoking Bottle",
	source : [["D24", 259]],
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
	source : [["D24", 259]],
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
	source : [["D24", 261]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "These crystal lenses fit over the eyes and have 3 charges. While worn, I can use 1 or more charges to cast Charm Person (save DC 13). I can increase the spell's level by 1 per charge. The lenses regain all expended charges daily at dawn.",
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
	source : [["D24", 261]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "These crystal lenses fit over the eyes. While wearing them, I can see much better than normal out to a range of 1 ft. I have advantage on Intelligence (Investigation) checks that rely on sight while searching an area or studying an object within that range.",
	descriptionFull : "These crystal lenses fit over the eyes. While wearing them, your vision improves significantly out to a range of 1 foot, granting you Darkvision within that range and Advantage on Intelligence (Investigation) checks made to examine something within that range.",
	vision : [["Adv. on Investigation checks based on sight", 1], ["Darkvision", 1]]
};
MagicItemsList["eyes of the eagle"] = {
	name : "Eyes of the Eagle",
	source : [["D24", 261]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "These crystal lenses fit over the eyes. While wearing them, I have advantage on Wisdom (Perception) checks that rely on sight. In conditions of clear visibility, I can make out details of even extremely distant creatures and objects as small as 2 ft across.",
	descriptionFull : "These crystal lenses fit over the eyes. While wearing them, you have Advantage on Wisdom (Perception) checks that rely on sight. In conditions of clear visibility, you can make out details of even extremely distant creatures and objects as small as 2 feet across.",
	vision : [["Adv. on Perception checks that rely on sight", 0]]
};
MagicItemsList["figurine of wondrous power"] = { // contains contributions by Larry Hoy
	name: "Figurine of Wondrous Power",
	source: [["D24", 261]],
	type: "wondrous item",
	description: "As a Magic action, I can speak the command word and throw one or more statuettes to an unoccupied space within 60 ft where it becomes a specific creature for a certain amount of time. It is friendly, understands my languages, takes its turn immediately after mine, and obeys my commands.",
	descriptionFull: "A Figurine of Wondrous Power is a statuette small enough to fit in a pocket. If you take a Magic action to throw the figurine to a point on the ground within 60 feet of yourself, the figurine becomes a living creature specified in the figurine’s description below. If the space where the creature would appear is occupied by other creatures or objects, or if there isn’t enough space for the creature, the figurine doesn’t become a creature.\n   The creature is Friendly to you and your allies. It understands your languages, obeys your commands, and takes its turn immediately after you on your Initiative count. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if its creature form drops to 0 Hit Points or if you take a Magic action while touching the creature to make it revert to figurine form. When the creature becomes a figurine again, its property can’t be used again until a certain amount of time has passed, as specified in the figurine’s description.",
	action : [["action", ""]],
	choices : ["Bronze Griffon", "Ebony Fly", "Golden Lions", "Ivory Goats", "Marble Elephant", "Obsidian Steed", "Onyx Dog", "Serpentine Owl", "Silver Raven"],
	"bronze griffon" : {
		rarity : "rare",
		magicItemTable : "?",
		description: "As a Magic action, I can speak the command word and throw this bronze statuette to an unoccupied space within 60 ft, where it becomes a griffon for up to 6 hours, until I use the command word again, or it reaches 0 HP. It is friendly, understands my languages, takes its turn immediately after mine, and obeys my commands.",
		descriptionLong: "As a Magic action, I can speak the command word and throw this bronze statuette of a griffon rampant to an unoccupied space within 60 ft, where it becomes a griffon for up to 6 hours, until I use a Magic action to repeat the command word, or it reaches 0 HP. It is friendly to me and my allies, understands my languages, and obeys my spoken commands. If I issue no commands, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until 5 days have passed.",
		descriptionFull: "This figurine of wondrous power is a bronze statuette of a griffon rampant, small enough to fit in a pocket. If you use a Magic action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living griffon. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 6 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use a Magic action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 5 days have passed.",
		usages : 1,
		recovery : "5 days"
	},
	"ebony fly" : {
		rarity: "rare",
		magicItemTable : "?",
		description: "As a Magic action, I can speak the command word and throw this statuette to an unoccupied space within 60 ft, where it becomes a giant fly for up to 12 hours, until I use the command word again, or it reaches 0 HP. It is friendly, understands my languages, takes its turn immediately after mine, obeys my commands, and can be ridden as a mount.",
		descriptionLong: "As a Magic action, I can speak the command word and throw this ebony statuette of a horsefly to an unoccupied space within 60 ft, where it becomes a giant fly for up to 12 hours, until I use a Magic action to repeat the command word, or it reaches 0 HP. It is friendly to me and my allies, understands my languages, obeys my spoken commands, and can be ridden as a mount. If I issue no commands, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until 2 days have passed.",
		descriptionFull : "This figurine of wondrous power is an ebony statuette carved in the likeness of a horsefly, small enough to fit in a pocket. If you use a Magic action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living giant fly and can be ridden as a mount. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 12 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use a Magic action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 2 days have passed.",
		usages : 1,
		recovery : "2 days"
	},
	"golden lions" : {
		rarity : "rare",
		magicItemTable : "?",
		description: "As a Magic action, I can speak the command word and throw one or both of these gold statuettes to an unoccupied space within 60 ft, where each becomes a lion for up to 1 hour, until I use the command word again, or it reaches 0 HP. They are friendly, understand my languages, takes its turn immediately after mine, and obey my commands.",
		descriptionLong: "As a Magic action, I can speak the command word and throw one or both of these gold statuettes of a lion to an unoccupied space within 60 ft, where each becomes a lion for up to 1 hour, until I use a Magic action to repeat the command word, or it reaches 0 HP. They are friendly to me and my allies, understand my languages, and obey my spoken commands. If I issue no commands, they defend themselves but takes no other actions. When a lion reverts back to a figurine, that figurine can't be used again until 7 days have passed.",
		descriptionFull : "This figurine of wondrous power is a pair of gold statuettes of lions, small enough to fit in a pocket. If you use a Magic action to speak the command word and throw one or both of the figurines to a point on the ground within 60 feet of you, each figurine becomes a living lion. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 1 hour. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use a Magic action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 7 days have passed.",
		usages : 2,
		recovery : "7 days"
	},
	"ivory goats" : {
		rarity : "rare",
		magicItemTable : "?",
		description: "As a Magic action, I can speak the command word and throw one of these 3 ivory statuettes to an unoccupied space within 60 ft, where each becomes a creature, until I use the command word again, or it reaches 0 HP. It is friendly, understands my languages, takes its turn immediately after mine, and obeys my commands. See Notes page.",
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
		description: "As a Magic action, I can speak the command word and throw this marble statuette to an unoccupied space within 60 ft, where it becomes a elephant for up to 24 hours, until I use the command word again, or it reaches 0 HP. It is friendly, understands my languages, takes its turn immediately after mine, and obeys my commands.",
		descriptionLong: "As a Magic action, I can speak the command word and throw this marble statuette of about 4 inches high and long to an unoccupied space within 60 ft, where it becomes a elephant for up to 24 hours, until I use a Magic action to repeat the command word, or it reaches 0 HP. It is friendly to me and my allies, understands my languages, and obeys my spoken commands. If I issue no commands, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until 7 days have passed.",
		descriptionFull: "This figurine of wondrous power is a marble statuette small enough to fit in a pocket. If you use a Magic action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living elephant. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 24 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use a Magic action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 7 days have passed.",
		usages : 1,
		recovery : "7 days"
	},
	"obsidian steed" : {
		rarity : "very rare",
		magicItemTable : "?",
		description: "As a Magic action, I can speak the command word and throw this obsidian statuette to an unoccupied space within 60 ft, where it becomes a nightmare for up to 24 hours, until it reaches 0 HP, or I use the command word again. It is friendly, understands my languages, takes its turn immediately after mine, and obeys my commands. See Notes page.",
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
		description: "As a Magic action, I can speak the command word and throw this statuette to an unoccupied space within 60 ft, where it becomes a mastiff for up to 6 hours, until I use the command word again, or it reaches 0 HP. It has 60 ft blindsight, is friendly, understands me, takes its turn immediately after mine, and obeys my commands.",
		descriptionLong: "As a Magic action, I can speak the command word and throw this onyx statuette to an unoccupied space within 60 ft, where it becomes a mastiff for up to 6 hours, until I use a Magic action to repeat the command word, or it reaches 0 HP. It has Intelligence 8, speaks common, blindsight out to 60 ft. It is friendly to me and my allies, understands my languages, and obeys my spoken commands. If I issue no commands, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until 7 days have passed.",
		descriptionFull: "This figurine of wondrous power is an onyx statuette of a dog, small enough to fit in a pocket. If you use a Magic action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living mastiff. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The mastiff has an Intelligence of 8 and can speak Common. It also has blindsight out to a range of 60 feet. It is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 6 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use a Magic action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 7 days have passed.",
		usages : 1,
		recovery : "7 days"
	},
	"serpentine owl" : {
		rarity : "rare",
		magicItemTable : "?",
		description: "As a Magic action, I can speak the command word and throw this statuette to an unoccupied space within 60 ft, where it becomes a giant owl for up to 8 hours, until I use the command word again, or it reaches 0 HP. It is friendly, can convers telepathically with me, understands my languages, takes its turn immediately after mine, and obeys my commands.",
		descriptionLong: "As a Magic action, I can speak the command word and throw this serpentine statuette to an unoccupied space within 60 ft, where it becomes a giant owl for up to 8 hours, until I use a Magic action to repeat the command word, or it reaches 0 HP. It is friendly to me and my allies, understands my languages, and obeys my spoken commands. As long as it is on the same plane of existence, it can communicate telepathically with me. If I issue no commands, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until 2 days have passed.",
		descriptionFull: "This figurine of wondrous power is a serpentine statuette of an owl, small enough to fit in a pocket. If you use a Magic action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living giant owl. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. It can telepathically communicate with you at any range if you and it are on the same plane of existence. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 8 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use a Magic action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 2 days have passed.",
		usages : 1,
		recovery : "2 days"
	},
	"silver raven" : {
		rarity : "uncommon",
		magicItemTable : "?",
		description: "As a Magic action, I can speak the command word and throw this silver statuette to an unoccupied space within 60 ft, where it becomes a raven for up to 12 hours, until I use the command word again, or it reaches 0 HP. It is friendly, understands my languages, takes its turn immediately after mine, and obeys my commands.",
		descriptionLong: "As a Magic action, I can speak the command word and throw this silver statuette to an unoccupied space within 60 ft, where it becomes a raven for up to 12 hours, until I use a Magic action to repeat the command word, or it reaches 0 HP. It is friendly to me and my allies, understands my languages, and obeys my spoken commands. While in raven form, the figurine allows me to cast Animal Messenger on it at will. If I issue no commands, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until 2 days have passed.",
		descriptionFull: "This figurine of wondrous power is as silver statuette of a raven, small enough to fit in a pocket. If you use a Magic action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living raven. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 12 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use a Magic action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 2 days have passed.\n   While in raven form, the figurine allows you to cast the Animal Messenger spell on it at will.",
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
	source : [["D24", 263]],
	type : "weapon (any melee weapon)",
	rarity : "rare",
	magicItemTable : "?",
	attunement : true,
	description : "As a bonus action, I can speak the command word of this magic weapon, causing flames to erupt from it. These flames add +2d6 Fire damage and shine bright light in a 40-ft radius and dim light for an additional 40 ft. The flames last until I speak the command word again as a bonus action or sheathe it.",
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
	source : [["D24", 263]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "As a Magic action, I can speak a command word to have this wooden box become a Rowboat, a Keelboat, or to fold back up. The Rowboat holds 4 Medium creatures and has oars, anchor, mast, and a sail. The Keelboat holds 15 Medium creatures and has a deck, five sets of oars, rowing seats, a steering oar, anchor, deck cabin, mast, and a sail.",
	descriptionLong : "A wooden box of 12 inch \xD7 6 inch \xD7 6 inch, that can be opened to put items in. As a Magic action, I can speak one of its three command words. The first causes it to unfold into a Rowboat 10 ft \xD7 4 ft \xD7 2 ft, with oars, an anchor, a mast, and a lateen sail, which can hold four Medium creatures comfortably. The second causes it to unfold into a Keelboat 24 ft \xD7 8 ft \xD7 6 ft, with a deck, rowing seats, five sets of oars, a steering oar, an anchor, a deck cabin, and a mast with a square sail, which can hold fifteen Medium creatures comfortably. Three causes it to fold up, leaving large objects placed in the boat/ship outside of the box.",
	descriptionFull : "This object appears as a wooden box that measures 12 inches long, 6 inches wide, and 6 inches deep. It weighs 4 pounds and floats. It can be opened to store items inside. This item also has three command words, each requiring a Magic action to use:\n   " + toUni("First Command Word") + ". The box unfolds into a Rowboat.\n   " + toUni("Second Command Word") + ". The box unfolds into a Keelboat.\n   " + toUni("Third Command Word") + ". The Folding Boat folds back into a box if no creatures are aboard. Any objects in the vessel that can’t fit inside the box remain outside the box as it folds. Any objects in the vessel that can fit inside the box do so.\n   When the box becomes a vessel, its weight becomes that of a normal vessel its size, and anything that was stored in the box remains in the boat.\n   Statistics for the Rowboat and Keelboat appear in the Player’s Handbook. If either vessel is reduced to 0 Hit Points, the Folding Boat is destroyed.",
	weight : 4,
	action : [["action", ""]]
};
MagicItemsList["frost brand"] = {
	name : "Frost Brand",
	source : [["D24", 263]],
	type : "weapon (glaive, greatsword, longsword, rapier, scimitar, or shortsword)",
	rarity : "very rare",
	magicItemTable : "?",
	attunement : true,
	description : "This magic weapon adds +1d6 Cold damage to its damage and grants me resistance to fire. In freezing temperatures, it sheds bright light in a 10-ft radius and dim light for an additional 10 ft. Once per hour when I draw the blade, I can extinguish all nonmagical flames within 30 ft of me.",
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
	source : [["D24", 264]],
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
	source : [["D24", 264]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "This gem has 50 charges. As a Magic action while holding it, I can speak a command word to cause it to: shed 30-ft bright and 30-ft dim light, fire a 60-ft beam of light at 1 creature (1 charge, DC 15 Con save or blinded 1 minute), or flare with blinding light in a 30-ft cone (5 charges, DC 15 Con save or blinded 1 minute).",
	descriptionFull : "This prism has 50 charges. While you are holding it, you can take a Magic action and use one of three command words to cause one of the following effects:\n \u2022 " + toUni("First Command Word") + ". The gem sheds Bright Light in a 30-foot radius and Dim Light for an additional 30 feet. This effect doesn’t expend a charge. It lasts until you take a Bonus Action to repeat the command word or until you use another function of the gem.\n \u2022 " + toUni("Second Command Word") + ". You expend 1 charge and cause the gem to fire a brilliant beam of light at one creature you can see within 60 feet of yourself. The creature must succeed on a DC 15 Constitution saving throw or have the Blinded condition for 1 minute. The creature repeats the save at the end of each of its turns, ending the effect on itself on a success.\n \u2022 " + toUni("Third Command Word") + ". You expend 5 charges and cause the gem to flare with intense light in a 30-foot Cone. Each creature in the Cone makes a saving throw as if struck by the beam created with the second command word.\n\nWhen all of the gem’s charges are expended, the gem becomes a nonmagical jewel worth 50 GP.",
	descriptionLong : "This gem has 50 charges. As a Magic action while holding it, I can speak one of its three command words to cause it to: [1] shed bright light in a 30-ft radius and dim light in an additional 30 ft until another function of the gem is used or I use a bonus action to end it, [2] fire a 60-ft beam of light at 1 creature (1 charge, DC 15 Con save or blinded 1 minute), or [3] flare with blinding light in a 30-ft cone (5 charges, DC 15 Con save or blinded 1 minute). Blinded creatures can repeat the save at the end of each of their turns. When all of the gem's charges are expended, the gem becomes a nonmagical jewel worth 50 gp.",
	weight : 1,
	usages : 50,
	recovery : "Never",
	action : [["action", ""]]
};
MagicItemsList["gem of seeing"] = { // contains contributions by Larry Hoy
	name : "Gem of Seeing",
	source : [["D24", 264]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "This gem has 3 charges. As a Magic action, I can expend 1 charge. For the next 10 minutes, I have truesight out to 120 ft when I peer through the gem. The gem regains 1d3 expended charges daily at dawn.",
	descriptionFull : "This gem has 3 charges. As a Magic action, you can expend 1 charge. For the next 10 minutes, you have Truesight out to 120 feet when you peer through the gem.\n   The gem regains 1d3 expended charges daily at dawn.",
	attunement : true,
	weight : 1,
	usages : 3,
	recovery : "dawn",
	additional : "1d3 Recharge"
};
MagicItemsList["giant slayer"] = {
	name: "Giant Slayer",
	source: [["D24", 264]],
	type: "weapon (any)",
	rarity: "rare",
	magicItemTable: "?",
	description: "I have a +1 bonus to attack and damage rolls made with this magic weapon. When I hit a creature with the giant type with this weapon, it does 2d6 extra damage of the weapon's damage type and the giant has to make a DC 15 Strength save or be knocked prone.",
	descriptionFull: "You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon.\n   When you hit a Giant with this weapon, the Giant takes an extra 2d6 damage of the weapon’s type and must succeed on a DC 15 Strength saving throw or have the Prone condition.",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "brackets",
		descriptionChange: ["replace", "weapon"],
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && (/^(?=.*giant)(?=.*slayer).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+2d6 damage vs. giants; Giants DC 15 Str save or prone';
				}
			},
			'If I include the words "Giant Slayer" in a the name of a weapon, it will be treated as the magic weapon Giant Slayer. It has +1 to hit and damage and when hitting a creatures with the giant type, it does +2d6 damage and the target has to make a DC 15 Strength save or be knocked prone.'
		],
		atkCalc: [
			function (fields, v, output) {
				if (v.isMeleeWeapon | v.isRangedWeapon && (/^(?=.*giant)(?=.*slayer).*$/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
		]
	}
};
MagicItemsList["glamoured studded leather"] = {
	name : "Glamoured Studded Leather",
	source : [["D24", 264]],
	type : "armor (studded leather)",
	rarity : "rare",
	magicItemTable : "?",
	description : "Studded leather with +1 AC. As a bonus action, I can have it assume the appearance of a normal set of clothing or another armor. I decide what it looks like: style, color, and accessories, but the armor retains its bulk and weight. The illusion lasts until I use this again or remove the armor.",
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
	source : [["D24", 265]],
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
	source : [["D24", 265]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While wearing these gloves, I have a Climb Speed and a Swim Speed equal to my Speed, and I gain a +5 bonus to Strength (Athletics) checks made to climb or swim.",
	descriptionFull : "While wearing these gloves, you have a Climb Speed and a Swim Speed equal to your Speed, and you gain a +5 bonus to Strength (Athletics) checks made to climb or swim.",
	speed: [{
		climb: {spd: "walk", enc: "walk"},
		swim: {spd: "walk", enc: "walk"},
	}],
	attunement : true
};
MagicItemsList["gloves of thievery"] = {
	name : "Gloves of Thievery",
	source : [["D24", 265]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "These gloves are imperceptible while worn. While wearing them, I gain a +5 bonus to Dexterity (Sleight of Hand) checks.",
	descriptionFull : "These gloves are imperceptible while worn. While wearing them, you gain a +5 bonus to Dexterity (Sleight of Hand) checks.",
	addMod : [{ type: "skill", field : "Sleight of Hand", mod : 5, text : "I gain a +5 bonus to Dexterity (Sleight of Hand) checks while wearing Gloves of Thievery." }]
};
MagicItemsList["goggles of night"] = { // contributed by AelarTheElfRogue
	name : "Goggles of Night",
	source : [["D24", 265]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While wearing these dark lenses, I have darkvision out to a range of 60 feet. If I already have darkvision. wearing the goggles increases its range by 60 feet.",
	descriptionFull : "While wearing these dark lenses, you have Darkvision out to 60 feet. If you already have Darkvision, wearing the goggles increases its range by 60 feet.",
	vision : [["Darkvision", "fixed 60"], ["Darkvision", "+60"]]
};
MagicItemsList["hag eye"] = {
	name : "Hag Eye",
	source : [["D24", 265]],
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
	source : [["D24", 265]],
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
	source : [["D24", 266]],
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
	name : "Hat of Disguise",
	source : [["D24", 266]],
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
	source : [["D24", 267]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "This hat has 3 charges, regaining all at dawn. As a Magic action while holding it, I can expend 1 charge to have one bat, frog, or rat appear in the hat. The creature acts as an ordinary member of its kind and disappears after 1 hour or when it has 0 HP. It is not under my control.",
	descriptionFull : "This hat has 3 charges. While holding the hat, you can take a Magic action to expend 1 charge and summon your choice of a Bat, a Frog, or a Rat. The summoned creature magically appears in the hat and tries to get away from you as quickly as possible. The creature is Indifferent toward you and other creatures, and it isn’t under your control. It behaves as an ordinary creature of its kind and disappears after 1 hour or when it drops to 0 Hit Points. The hat regains all expended charges daily at dawn.",
	action : [["action", ""]],
	usages : 3,
	recovery : "dawn"
};
MagicItemsList["hat of wizardry"] = {
	name : "Hat of Wizardry",
	source : [["D24", 267]],
	magicItemTable : "?",
	type : "wondrous item",
	rarity : "common",
	description : "I can use this antiquated, cone-shaped hat adorned with gold crescent moons and stars as a spellcasting focus for my wizard spells. Once per long rest, I can use it to cast a wizard cantrip that I don't know. To do so, I must make a DC 10 Intelligence (Arcana) check, wasting the attempt as well as my action if I fail.",
	descriptionFull : "This cone-shaped hat is adorned with moons and stars. While you are wearing it, you gain the following benefits.\n \u2022 " + toUni("Spellcasting Focus") + ". You can use the hat as a Spellcasting Focus for your Wizard spells.\n \u2022 " + toUni("Unknown Spell") + ". As a Magic action, you can try to cast a cantrip that you don’t know. The cantrip must be on the Wizard spell list and have a casting time of an action, and you make a DC 10 Intelligence (Arcana) check. On a successful check, you cast the spell. On a failed check, the spell fails, and the action used to cast the spell is wasted. In either case, you can’t use this property again until you finish a Long Rest.",
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
	source : [["D24", 268]],
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
	source : [["D24", 268]],
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
	source : [["D24", 268]],
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
	source : [["D24", 268]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "While wearing this helm, I have telepathy with a range of 30 feet, and I can cast Detect Thoughts or Suggestion (save DC 13) from the helm. Once either spell is cast from the helm, that spell can’t be cast from it again until the next dawn.",
	descriptionFull : "While wearing this helm, you have telepathy with a range of 30 feet, and you can cast Detect Thoughts or Suggestion (save DC 13) from the helm. Once either spell is cast from the helm, that spell can’t be cast from it again until the next dawn.",
	attunement : true,
	limfeaname : "Helm of Telepathy",
	usages : 2,
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
	source : [["D24", 268]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "This helm has 3 charges. While wearing it, I can expend 1 charge to cast Teleport from it. The helm regains 1d3 expended charges daily at dawn.",
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
	source : [["D24", 269]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "This backpack weighs 5 lb, regardless of its contents. It has two side pouches that hold 200 lb (25 cu ft) each and a central pouch that holds 500 lb (64 cu ft). Retrieving an item from it requires a Utilize action or Bonus Action. If it's overloaded, pierced, or torn, it and its contents are destroyed. If turned inside out, all its contents spill forth.",
	descriptionLong : "This backpack weighs 5 lb, regardless of its contents. It has two side pouches that hold up to 200 lb (25 cu ft) each and a central pouch that holds up to 500 lb (64 cu ft). Retrieving an item from it requires a Utilize action or Bonus Action. When I reach in the bag for a specific item, the item is always magically on top. If it's overloaded, pierced, or torn, it and its contents are destroyed. If turned inside out, all its contents spill forth. A creature placed inside the bag can survive for 10 minutes before starting to suffocate. Placing the haversack in another extradimensional space instantly destroys both and opens a gate to the Astral Plane.",
	descriptionFull : "This backpack has a central pouch and two side pouches, each of which is an extradimensional space. Each side pouch can hold up to 200 pounds of material, not exceeding a volume of 25 cubic feet. The central pouch can hold up to 500 pounds of material, not exceeding a volume of 64 cubic feet. The haversack always weighs 5 pounds, regardless of its contents.\n   Retrieving an item from the haversack requires a Utilize action or a Bonus Action (your choice). When you reach into the haversack for a specific item, the item is always magically on top.\n   If any of its pouches is overloaded, pierced, or torn, the haversack ruptures and is destroyed. If the haversack is destroyed, its contents are lost forever, although an Artifact always turns up again somewhere. If the haversack is turned inside out, its contents spill forth unharmed, and the haversack must be put right before it can be used again.\n   Each pouch of the haversack holds enough air for 10 minutes of breathing, divided by the number of breathing creatures inside.\n   Placing the haversack inside an extradimensional space created by a Bag of Holding, Portable Hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate and not behind Total Cover is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can’t be reopened.",
	weight : 5,
	action : [["action", " (retrieve item)"], ["bonus action", " (retrieve item)"]]
};
MagicItemsList["heward's handy spice pouch"] = {
	name : "Heward's Handy Spice Pouch",
	source : [["D24", 269]],
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
	source : [["D24", 269]],
	type : "weapon (any)",
	rarity : "legendary",
	magicItemTable : "?",
	attunement : true,
	description : "I have a +3 bonus to attack and damage rolls made with this magic weapon. It does +2d10 Radiant damage against Fiends and Undead. While holding the drawn weapon, I have a 10-ft radius emanation (30-ft if level 17 Paladin) that grants me and my allies adv. on saves against spells and magical effects.",
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
				if (!v.theWea.isMagicWeapon && v.isWeapon && (/^(?=.*holy)(?=.*avenger).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+2d10 radiant damage vs. fiends and undead';
				}
			},
			'If I include the words "Holy Avenger" in a the name of a weapon, it will be treated as the magic weapon Holy Avenger. It has +3 to hit and damage and does +2d10 radiant damage to fiends and undead.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isWeapon && (/^(?=.*holy)(?=.*avenger).*$/i).test(v.WeaponTextName)) {
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
	source : [["D24", 270]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "As a Magic action, I can blow the horn, creating a 30-ft cone. All in it take 5d8 thunder damage and are deafened for 1 min. Half damage with a DC 15 Con save and not deafened. Glass/crystal objects not worn or carried take 10d8 damage. There is a 20% chance each use that it explodes.",
	descriptionLong: "As a Magic action, I can blow the horn, emitting a thunderous blast in a 30-foot cone audible 600 feet away. Creatures in the cone must make a DC 15 Con save or take 5d8 thunder damage and be deafened for 1 min; otherwise, they just take half the damage. Objects made of glass or crystal that are not worn or carried take 10d8 thunder damage instead. Each use of its magic has a 20% chance of causing it to explode, dealing 10d6 force damage to the blower and destroying it.",
	descriptionFull : "You can take a Magic action to blow the horn, which emits a thunderous blast in a 30-foot Cone that is audible out to 600 feet. Each creature in the Cone makes a DC 15 Constitution saving throw. On a failed save, a creature takes 5d8 Thunder damage and has the Deafened condition for 1 minute. On a successful save, a creature takes half as much damage only. Glass or crystal objects in the Cone that aren’t being worn or carried take 10d8 Thunder damage.\n   Each use of the horn’s magic has a 20 percent chance of causing the horn to explode. The explosion deals 10d6 Force damage to the user and destroys the horn.",
	weight : 2,
	action : [["action", ""]]
};
MagicItemsList["horn of silent alarm"] = {
	name : "Horn of Silent Alarm",
	source : [["D24", 270]],
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
	source : [["D24", 270]],
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
		description : "As a Magic action once per 7 days, I can blow this horn to summon 2 warrior spirits from Ysgard within 60 ft me. These have the statistics of a Berserker and return after 1 hour or when they drop to 0 HP. They are friendly to me and my companions and follow my commands.",
		descriptionFull : "You can use a Magic action to blow this horn. In response, warrior spirits from the plane of Ysgard appear within 60 feet of you. These spirits use the Berserker statistics. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.\n   The silver horn summons 2 Berserkers.\n   The Berserkers are friendly to you and your companions and follow your commands."
	},
	"brass (rare; 3 berserkers; prereq: simple weapons prof.)" : {
		name : "Brass Horn of Valhalla",
		sortname : "Horn of Valhalla, Brass",
		rarity : "rare",
		magicItemTable : "?",
		description : "As a Magic action once per 7 days, I can blow this horn to summon 3 warrior spirits from Ysgard within 60 ft. These Berserkers return after 1 hour or when they drop to 0 HP. If I'm Proficient with all Simple Weapons, they follow my commands and are friendly to me and my companions. Otherwise, they attack me.",
		descriptionFull : "You can use a Magic action to blow this horn. In response, warrior spirits from the plane of Ysgard appear within 60 feet of you. These spirits use the Berserker statistics. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.\n   A brass horn summons 3 Berserkers. To use the brass horn, you must be Proficient with all Simple Weapons.\n   If you blow the horn without meeting its requirement, the summoned Berserkers attack you. If you meet the requirement, they are friendly to you and your companions and follow your commands."
	},
	"bronze (very rare; 4 berserkers; prereq: medium armor prof.)" : {
		name : "Bronze Horn of Valhalla",
		sortname : "Horn of Valhalla, Bronze",
		rarity : "very rare",
		magicItemTable : "?",
		description : "As a Magic action once per 7 days, I can blow this horn to summon 4 warrior spirits from Ysgard within 60 ft. These Berserkers return after 1 hour or when they drop to 0 HP. If I'm Proficient with Medium Armor, they follow my commands and are friendly to me and my companions. Otherwise, they attack me.",
		descriptionFull : "You can use a Magic action to blow this horn. In response, warrior spirits from the plane of Ysgard appear within 60 feet of you. These spirits use the Berserker statistics. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.\n   A bronze horn summons 4 Berserkers. To use the bronze horn, you must be Proficient with Medium Armor.\n   If you blow the horn without meeting its requirement, the summoned Berserkers attack you. If you meet the requirement, they are friendly to you and your companions and follow your commands."
	},
	"iron (very rare; 5 berserkers; prereq: martial weapons prof.)" : {
		name : "Iron Horn of Valhalla",
		sortname : "Horn of Valhalla, Iron",
		rarity : "legendary",
		magicItemTable : "?",
		description : "As a Magic action once per 7 days, I can blow this horn to summon 5 warrior spirits from Ysgard within 60 ft. These Berserkers return after 1 hour or when they drop to 0 HP. If I'm Proficient with all Martial Weapons, they follow my commands and are friendly to me and my companions. Otherwise, they attack me.",
		descriptionFull : "You can use a Magic action to blow this horn. In response, warrior spirits from the plane of Ysgard appear within 60 feet of you. These spirits use the Berserker statistics. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.\n   The iron horn summons 5 berserkers. To use the iron horn, you must be Proficient with all Martial Weapons.\n   If you blow the horn without meeting its requirement, the summoned Berserkers attack you. If you meet the requirement, they are friendly to you and your companions and follow your commands."
	}
};
MagicItemsList["horseshoes of a zephyr"] = {
	name : "Horseshoes of a Zephyr",
	source : [["D24", 270]],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "?",
	description : "While all four shoes are affixed to the hooves of a creature, they allow it to move normally while floating 4 inches above the floor. The creature leaves no tracks, can cross or stand above liquid or unstable surfaces, ignores difficult terrain, and doesn't suffer exhaustion from moving at normal speed for 12 hours a day.",
	descriptionFull : "These horseshoes come in a set of four. As a Magic action, you can touch one of the horseshoes to the hoof of a horse or similar creature, whereupon the horseshoe affixes itself to the hoof. Removing a horseshoe also takes a Magic action.\n   While all four shoes are affixed to the hooves of a horse or similar creature, they allow the creature to move normally while floating 4 inches above a surface. This effect means the creature can cross or stand above nonsolid or unstable surfaces, such as water or lava. The creature leaves no tracks and ignores Difficult Terrain. In addition, the creature can travel for up to 12 hours a day without gaining Exhaustion levels from extended travel."
};
MagicItemsList["horseshoes of speed"] = {
	name : "Horseshoes of Speed",
	source : [["D24", 270]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "While all four shoes are affixed to the hooves of a horse or similar creature, they increase the creature's walking speed by 30 ft.",
	descriptionFull : "These horseshoes come in a set of four. As a Magic action, you can touch one of the horseshoes to the hoof of a horse or similar creature, whereupon the horseshoe affixes itself to the hoof. Removing a horseshoe also takes a Magic action.\n   While all four horseshoes are attached to the same creature, its Speed is increased by 30 feet."
};
MagicItemsList["immovable rod"] = {
	name : "Immovable Rod",
	source : [["D24", 270]],
	type : "rod",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "This flat iron rod has a button on one end. I can use a Utilize action to push the button, magically fixing the rod in place or making it movable. Once fixed, it holds up to 8000 lbs. More weight makes it deactivate and fall. A creature can use a Utilize action to try to move the rod up to 10 ft with a DC 30 Str (Athletics) check.",
	descriptionFull : "This iron rod has a button on one end. You can take a Utilize action to press the button, which causes the rod to become magically fixed in place. Until you or another creature takes a Utilize action to push the button again, the rod doesn’t move, even if it defies gravity. The rod can hold up to 8,000 pounds of weight. More weight causes the rod to deactivate and fall. A creature can take a Utilize action to make a DC 30 Strength (Athletics) check, moving the fixed rod up to 10 feet on a successful check.",
	weight : 2,
	action : [["action", " (activate/deactivate)"]]
};
MagicItemsList["instrument of illusions"] = { // contains contributions by AelarTheElFRogue
	name : "Instrument of Illusions",
	source : [["D24", 271]],
	magicItemTable : "?",
	type : "wondrous item (instrument)",
	rarity : "common",
	description : "While I am playing this musical instrument, I can create harmless, illusory visual effects within a 5-ft Emanation (15-ft for bards) sphere centered on the instrument. The magical effects have neither substance nor sound, and they are obviously illusory. The effects end when I stop playing.",
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
	source : [["D24", 271]],
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
MagicItemsList["instrument of the bards"] = {
	name : "Instrument of the Bards",
	source : [["D24", 272]],
	type : "wondrous item (instrument)",
	description : "When I play this exquisite magical instrument, I can use it to cast a set of spells, each once per dawn, using my spellcasting ability and spell save DC. If I play without attuning, I must pass a DC 15 Wis save or take 2d4 Psychic damage.",
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
				description : "1 creature gains Resistance to Lightning damage for the duration",
				changes : "When using the Canaith Mandolin to cast Protection from Energy, it can only grant Resistance to lightning damage."
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
	}
};
MagicItemsList["ioun stone"] = {
	name : "Ioun Stone",
	source : [["D24", 273]],
	type : "wondrous item",
	attunement : true,
	description : "As a Magic action, I can make an ioun stone orbit my head at 1d3 ft or retrieve it. Others can catch it as a Utilize action with an attack or Acrobatics check (AC/DC 24). It has 10 HP and resistance to all damage. Different stones grant different benefits.",
	descriptionFull : "Roughly marble sized, Ioun Stones are named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun Stones exist, each type a distinct combination of shape and color.\n   When you take a Magic action to toss an Ioun Stone into the air, the stone orbits your head at a distance of 1d3 feet, conferring its benefit to you while doing so. You can have up to three Ioun Stones orbiting your head at the same time.\n   Each Ioun Stone orbiting your head is considered to be an object you are wearing. The orbiting stone avoids contact with other creatures and objects, adjusting its orbit to avoid collisions and thwarting all attempts by other creatures to attack or snatch it.\n   As a Utilize action, you can seize and stow any number of Ioun Stones orbiting your head. If your Attunement to an Ioun Stone ends while it’s orbiting your head, the stone falls as though you had dropped it.",
	allowDuplicates : true,
	action : [["action", " (orbit/retrieve)"]],
	choices : ["Absorption", "Agility", "Awareness", "Fortitude", "Greater Absorption", "Insight", "Intellect", "Leadership", "Mastery", "Protection", "Regeneration", "Reserve", "Strength", "Sustenance"],
	"absorption" : {
		rarity : "very rare",
		magicItemTable : "?",
		description : "As a Magic action, I can make this pale lavender ellipsoid orbit my head at 1d3 ft and a Utilize action to retrieve it. While it orbits my head, I can use my reaction to cancel a spell of 4th level or lower targeting only me, if I can see the caster and the stone has enough charges left. It can cancel 20 levels of spells before it loses its magic.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   While this pale lavender ellipsoid orbits your head, you can take a Reaction to cancel a spell of level 4 or lower cast by a creature you can see. A canceled spell has no effect, and any resources used to cast it are wasted. Once the stone has canceled 20 levels of spells, it burns out, turns dull gray, and loses its magic.",
		limfeaname : "Ioun Stone of Absorption",
		usages : 20,
		recovery : "Never",
		action : [["reaction", ""]]
	},
	"agility" : {
		rarity : "very rare",
		magicItemTable : "?",
		description : "As a Magic action, I can make this deep red sphere orbit my head at 1d3 ft and a Utilize action to retrieve it. While it orbits my head, my Dexterity score increases by 2, to a maximum of 20.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   Your Dexterity increases by 2, to a maximum of 20, while this deep-red sphere orbits your head.",
		scores : [0, 2, 0, 0, 0, 0]
	},
	"awareness" : {
		rarity : "rare",
		magicItemTable : "?",
		description : "As a Magic action, I can make this dark blue rhomboid orbit my head at 1d3 ft and a Utilize action to retrieve it. While it orbits my head, I can't be surprised.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   While this dark-blue rhomboid orbits your head, you have Advantage on Initiative rolls and Wisdom (Perception) checks.",
		advantages : [["Initiative", true], ["Perception", true]],
		vision : [["Adv. on Perception checks", 0]]
	},
	"fortitude" : {
		rarity : "very rare",
		magicItemTable : "?",
		description : "As a Magic action, I can make this pink rhomboid orbit my head at 1d3 ft and a Utilize action to retrieve it. While it orbits my head, my Constitution score increases by 2, to a maximum of 20.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   Your Constitution increases by 2, to a maximum of 20, while this pink rhomboid orbits your head.",
		scores : [0, 0, 2, 0, 0, 0]
	},
	"greater absorption" : {
		rarity : "legendary",
		magicItemTable : "?",
		description : "As a Magic action, I can make this marbled lavender and green ellipsoid orbit my head at 1d3 ft and a Utilize action to retrieve it. While it orbits my head, I can use a reaction to cancel a spell of 8th level or lower targeting only me, if I can see the caster and enough charges are left. It can cancel 20 levels of spells before it loses its magic.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   While this marbled lavender and green ellipsoid orbits your head, you can take a Reaction to cancel a spell of level 8 or lower cast by a creature you can see. A canceled spell has no effect, and any resources used to cast it are wasted. Once the stone has canceled 20 levels of spells, it burns out, turns dull gray, and loses its magic.",
		limfeaname : "Ioun Stone of Greater Absorption",
		usages : 20,
		recovery : "Never",
		action : [["reaction", ""]]
	},
	"insight" : {
		rarity : "very rare",
		magicItemTable : "?",
		description : "As a Magic action, I can make this incandescent blue sphere orbit my head at 1d3 ft and a Utilize action to retrieve it. While it orbits my head, my Wisdom score increases by 2, to a maximum of 20.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   Your Wisdom increases by 2, to a maximum of 20, while this incandescent blue sphere orbits your head.",
		scores : [0, 0, 0, 0, 2, 0]
	},
	"intellect" : {
		rarity : "very rare",
		magicItemTable : "?",
		description : "As a Magic action, I can make this marbled scarlet and blue sphere orbit my head at 1d3 ft and a Utilize action to retrieve it. While it orbits my head, my Intelligence score increases by 2, to a maximum of 20.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   Your Intelligence increases by 2, to a maximum of 20, while this marbled scarlet and blue sphere orbits your head.",
		scores : [0, 0, 0, 2, 0, 0]
	},
	"leadership" : {
		rarity : "very rare",
		magicItemTable : "?",
		description : "As a Magic action, I can make this marbled pink and green sphere orbit my head at 1d3 ft and a Utilize action to retrieve it. While it orbits my head, my Charisma score increases by 2, to a maximum of 20.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   Your Charisma increases by 2, to a maximum of 20, while this marbled pink and green sphere orbits your head.",
		scores : [0, 0, 0, 0, 0, 2]
	},
	"mastery" : {
		rarity : "legendary",
		magicItemTable : "?",
		description : "As a Magic action, I can make this pale green prism orbit my head at 1d3 ft and a Utilize action to retrieve it. While it orbits my head, my proficiency bonus increases by 1.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   Your Proficiency Bonus increases by 1 while this pale green prism orbits your head.",
		addMod : [{ type: "", field : "Proficiency Bonus Modifier", mod : 1, text : "My proficiency bonus increases by 1." }]
	},
	"protection" : {
		rarity : "rare",
		magicItemTable : "?",
		description : "As a Magic action, I can make this dusty rose prism orbit my head at 1d3 ft and a Utilize action to retrieve it. While it orbits my head, I have a +1 bonus to AC.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   You gain a +1 bonus to Armor Class while this dusty-rose prism orbits your head.",
		extraAC : [{name : "Ioun Stone of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC while attuned."}]
	},
	"regeneration" : {
		rarity : "legendary",
		magicItemTable : "?",
		description : "As a Magic action, I can make this pearly white spindle orbit my head at 1d3 ft and a Utilize action to retrieve it. It has 10 HP and resistance to all damage. While it orbits my head, I regain 15 HP at the end of each hour as long as I have at least 1 HP.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   You regain 15 Hit Points at the end of each hour this pearly white spindle orbits your head if you have at least 1 Hit Point."
	},
	"reserve" : {
		rarity : "rare",
		magicItemTable : "?",
		description : "As a Magic action, I can make this vibrant purple prism orbit my head at 1d3 ft and a Utilize action to retrieve it. It can store 4 (spell slot) levels worth of spells. By touching it, one can cast a 1-4 level spell into it. While it orbits my head, I can cast any spell stored in it as if casting it myself, but using the original casters spellcasting ability.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   This vibrant purple prism stores spells cast into it, holding them until you use them. The stone can store up to 4 levels of spells at a time. When found, it contains 1d4 levels of stored spells chosen by the DM.\n   Any creature can cast a spell of level 1 through 4 into the stone by touching it as the spell is cast. The spell has no effect, other than to be stored in the stone. If the stone can’t hold the spell, the spell is expended without effect. The level of the slot used to cast the spell determines how much space it uses.\n   While this stone orbits your head, you can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster but is otherwise treated as if you cast the spell. The spell cast from the stone is no longer stored in it, freeing up space."
	},
	"strength" : {
		rarity : "very rare",
		magicItemTable : "?",
		description : "As a Magic action, I can make this pale blue rhomboid orbit my head at 1d3 ft and a Utilize action to retrieve it. While it orbits my head, my Strength score increases by 2, to a maximum of 20.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   Your Strength increases by 2, to a maximum of 20, while this pale blue rhomboid orbits your head.",
		scores : [2, 0, 0, 0, 0, 0]
	},
	"sustenance" : {
		rarity : "rare",
		magicItemTable : "?",
		description : "As a Magic action, I can make this clear spindle orbit my head at 1d3 ft and a Utilize action to retrieve it. While it orbits my head, I don't need to eat or drink.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   You don’t need to eat or drink while this clear spindle orbits your head."
	}
};
MagicItemsList["iron bands of bilarro"] = { // contains contributions by AelarTheElfRogue
	name: "Iron Bands of Bilarro",
	nameAlt: "Iron Bands of Binding",
	source: [["D24", 274]],
	type: "wondrous item",
	rarity: "rare",
	magicItemTable: "?",
	description: "Once per dawn, as a Magic action, I can make a ranged attack (Dex Mod + Prof). If hit, the target is Restrained until I use a bonus action to speak a command word to release it. Once per 24 hours, the target can make a DC 20 Strength (Athletics) check as an action to free itself and destroy the bands.",
	descriptionLong: "Once per dawn, as a Magic action, I can throw this rusty iron sphere. I make a ranged attack roll with an attack bonus equal to my Dexterity modifier plus Proficiency Bonus. On a hit, the target is restrained until I take a bonus action to speak a command word to release it. Doing so, or missing with the attack, causes the bands to contract and become a sphere once more. The target can make a DC 20 Strength (Athletics) check as an action, freeing itself and destroying the bands on a success. If the check fails, any further attempts made by that creature automatically fail until 24 hours have elapsed.",
	descriptionFull: "This rusty iron sphere measures 3 inches in diameter and weighs 1 pound. You can take a Magic action to throw the sphere at a Huge or smaller creature you can see within 60 feet of yourself. As the sphere moves through the air, it opens into a tangle of metal bands.\n   Make a ranged attack roll with an attack bonus equal to your Dexterity modifier plus your Proficiency Bonus. On a hit, the target has the Restrained condition until you take a Bonus Action to issue a command that releases it. Doing so or missing with the attack causes the bands to contract and become a sphere once more.\n   A creature that can touch the bands, including the one Restrained, can take an action to make a DC 20 Strength (Athletics) check to break the iron bands. On a successful check, the item is destroyed, and the Restrained creature is freed. On a failed check, any further attempts made by that creature automatically fail until 24 hours have elapsed.\n   Once the bands are used, they can’t be used again until the next dawn.",
	weight: 1,
	usages: 1,
	recovery: "dawn",
	action: [["action", " (throw)"], ["bonus action", " (release)"]],
	weaponsAdd: ["Iron Bands of Bilarro"],
	weaponOptions: {
		regExpSearch: /^(?=.*iron)(?=.*band)(?=.*(bilarro|binding)).*$/i,
		name: "Iron Bands of Bilarro",
		source: [["D24", 274]],
		ability: 2,
		type: "Natural",
		damage: ["\u2015", "", "Restrained"],
		range: "60 ft",
		description: "Restrains Huge or smaller creature; DC 20 Strength (Athletics) check to break out",
		abilitytodamage: false,
		weight: 1
	}
};
MagicItemsList["iron flask"] = { // contains contributions by Larry Hoy
	name: "Iron Flask",
	source: [["D24", "-"]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	description: "While holding this flask, I can take a Magic action to target a creature from another plane that I can see within 60 ft. It must make a DC 17 Wis save (adv. if trapped before) or be trapped in the flask. It holds only 1 creature. As Magic action, I can open it to release the creature, which then obeys my commands for 1 hour.",
	descriptionLong: "While holding this flask, I can take a Magic action to target a creature from another plane that I can see within 60 ft. It must make a DC 17 Wis save (adv. if trapped before) or be trapped in the flask. It holds only 1 creature. As Magic action, I can open it to release the creature, which then obeys my commands for 1 hour. See Notes.",
	descriptionFull: "While holding this flask, I can take a Magic action to target a creature from another plane that I can see within 60 ft. It must make a DC 17 Wis save (adv. if trapped before) or be trapped in the flask. It holds only 1 creature. As Magic action, I can open it to release the creature, which then obeys my commands for 1 hour. See Notes.",
	weight: 1,
	toNotesPage: [{
		name: "Iron Flask",
		note: [
			"This iron bottle has a brass stopper. You can take a Magic action to target a creature that you can see within 60 feet of you. If the target is native to a plane of existence other than the one you're on, the target must succeed on a DC 17 Wisdom saving throw or be trapped in the flask. If the target has been trapped by the flask before, it has advantage on the saving throw.\n\n" +
			"Once trapped, a creature remains in the flask until released.The flask can hold only one creature at a time.A creature trapped in the flask doesn't need to breathe, eat, or drink and doesn't age.\n   You can take a Magic action to remove the stopper and release the creature. The creature is friendly to you and your companions for 1 hour and obeys your commands for that duration. If you give no commands or give it a command that is likely to result in its death, it defends itself but otherwise takes no actions. At the end of the duration, the creature acts in accordance with its normal disposition and alignment.\n\n" +
			"An Identify spell reveals that a creature is inside the flask, opening the flask is the only way to determing the type. A newly discovered bottle might already contain a creature chosen by the DM or determined randomly.\n\n" +
			toUni("d100\tContents"),
			"00-50\tEmpty\t\t76-77\tInvisible Stalker",
			"  51\tArcanaloth\t\t78-79\tMarid",
			"52-54\tBone Devil\t\t  80\tMarilith",
			"55-56\tCambion\t\t81-82\tMezzoloth",
			"57-58\tDao\t\t83-84\tNalfeshnee",
			"  59\tDeva\t\t85-86\tNight Hag",
			"60-61\tDjinni\t\t87-88\tNycaloth",
			"62-63\tEfreeti\t\t89\tPlanetar",
			"64-65\tErinyes\t\t90-91\tRed Slaad",
			"66-67\tFomorian\t\t92-93\tSalamander",
			"  68\tGithyanki Knight\t94\tSolar",
			"  69\tGitzerai Zerth\t95\tSuccubus",
			"70-71\tGlabrezu\t\t96\tUltroloth",
			"72-74\tHezrou\t\t97-99\tVrock",
			"  75\tIncubys\t\t00\tXorn",
		]
	}],
};
MagicItemsList["javelin of lightning"] = { // contains contributions by Larry Hoy
	name: "Javelin of Lightning",
	source: [["D24", 275]],
	type: "weapon (javelin)",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "Once per dawn I can throw this javelin at a target within 120 ft. and forgo the ranged weapon attack with it turning it into a bolt of lightning. All between me and the target in a 5-ft wide line take 4d6 lightning damage, DC 13 Dex save halves. Immediately after dealing damage, the weapon reappears in my hand.",
	descriptionFull: "Each time you make an attack roll with this magic weapon and hit, you can have it deal Lightning damage instead of Piercing damage.\n   Lightning Bolt. When you throw this weapon at a target no farther than 120 feet from you, you can forgo making a ranged attack roll and instead turn the weapon into a bolt of lightning. This bolt forms a 5-foot-wide Line between you and the target. The target and each other creature in the Line (excluding you) makes a DC 13 Dexterity saving throw, taking 4d6 Lightning damage on a failed save or half as much damage on a successful one. Immediately after dealing this damage, the weapon reappears in your hand. This property can’t be used again until the next dawn.",
	weight: 2,
	usages: 1,
	recovery: "dawn",
	weaponsAdd: ["Javelin of Lightning"],
	weaponOptions: {
		baseWeapon: "javelin",
		regExpSearch: /^(?=.*javelin)(?=.*lightning).*$/i,
		name: "Javelin of Lightning",
		source: [["D24", 275]],
		description: "Thrown; Once per dawn special attack, see item description; Slow",
	}
};
MagicItemsList["keoghtom's ointment"] = {
	name: "Keoghtom's Ointment",
	nameAlt: "Restorative Ointment",
	source: [["D24", 275]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "This glass jar, 3 inches in diameter, contains 1d4+1 doses of a thick mixture that smells faintly of aloe. As a Utilize action, one dose of the ointment can be swallowed or applied to a creature within 5 ft of me. The creature that receives it regains 2d8+2 hit points, and ceases to be poisoned.",
	descriptionFull: "This glass jar, 3 inches in diameter, contains 1d4 + 1 doses of a thick mixture that smells faintly of aloe. The jar and its contents weigh 1/2 pound.\n   As a Utilize action, you can swallow one dose of the ointment or apply it to a creature within 5 feet of yourself. The creature that receives it regains 2d8 + 2 Hit Points and ceases to have the Poisoned condition.",
	weight: 0.5,
	usages: "1d4+1",
	recovery: "Never"
};
MagicItemsList["lantern of revealing"] = {
	name: "Lantern of Revealing",
	source: [["D24", 275]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "This lantern burns for 6 hours on 1 pint of oil. It shines bright light in a 30-ft radius and dim light for an additional 30 ft. Invisible objects and creatures are visible in the lantern's bright light. As a Utilize action, I can lower the hood, making it only dim light in a 5-ft radius.",
	descriptionFull: "While lit, this hooded lantern burns for 6 hours on 1 pint of oil, shedding Bright Light in a 30-foot radius and Dim Light for an additional 30 feet. Invisible creatures and objects are visible as long as they are in the lantern’s Bright Light. You can take a Utilize action to lower the hood, reducing the lantern’s light to Dim Light in a 5-foot radius.",
	weight: 2,
	action: [["action", " (hood up/down)"]]
};
MagicItemsList["lock of trickery"] = {
	name: "Lock of Trickery",
	source: [["D24", 275]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "This lock appears to be an ordinary Lock and comes with a single key. The tumblers in this lock magically adjust to thwart burglars. Dexterity checks made to pick the lock have Disadvantage.",
	descriptionFull: "This lock appears to be an ordinary Lock (of the type described in chapter 6 of the Player’s Handbook) and comes with a single key. The tumblers in this lock magically adjust to thwart burglars. Dexterity checks made to pick the lock have Disadvantage.",
	weight: 1
};
MagicItemsList["luck blade"] = {
	name: "Luck Blade",
	source: [["D24", 275]],
	type: "weapon (glaive, greatsword, longsword, rapier, scimitar, sickle, or shortsword)",
	rarity: "legendary",
	magicItemTable: "?",
	attunement: true,
	description: "This magic weapon has a +1 bonus to attack and damage rolls made with it, and grants me +1 to all saves. Once per dawn, I can use its luck to reroll one attack, ability check, or save, but I must use the second result. While holding it, I can expend one of its 1d3 charges to cast Wish from it, once per dawn. Charges can't be regained.",
	descriptionFull: "You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon. While the weapon is on your person, you also gain a +1 bonus to saving throws.\n   " + toUni("Luck") + ". If the weapon is on your person, you can call on its luck (no action required) to reroll one failed D20 Test if you don’t have the Incapacitated condition. You must use the second roll. Once used, this property can’t be used again until the next dawn.\n   " + toUni("Wish") + ". The weapon has 1d3 charges. While holding it, you can expend 1 charge and cast Wish from it. Once used, this property can’t be used again until the next dawn. The weapon loses this property if it has no charges.",
	extraLimitedFeatures: [{
		name: "Luck Blade - luck reroll",
		usages: 1,
		recovery: "Dawn"
	}, {
		name: "Luck Blade - cast Wish",
		usages: "1d3",
		recovery: "Never"
	}],
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "brackets",
		descriptionChange: ["replace", "weapon"],
		excludeCheck: function (inObjKey, inObj) {
			var testRegex = /glaive|greatsword|longsword|rapier|scimitar|sickle|shortsword/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	addMod: [{ type: "save", field: "all", mod: 1, text: "While the Luck Blade is on my person, I gain a +1 bonus to all my saving throws." }],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/glaive|greatsword|longsword|rapier|scimitar|sickle|shortsword/i).test(v.baseWeaponName) && (/^(?=.*luck)(?=.*blade).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the words "Luck Blade" in a the name of a glaive, greatsword, longsword, rapier, scimitar, sickle, or shortsword, it will be treated as the magic weapon Luck Blade. It has +1 to hit and damage.'
		],
		atkCalc: [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/glaive|greatsword|longsword|rapier|scimitar|sickle|shortsword/i).test(v.baseWeaponName) && (/^(?=.*luck)(?=.*blade).*$/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
		]
	}
};
MagicItemsList["lute of thunderous thumping"] = {
	name: "Lute of Thunderous Thumping",
	source: [["D24", 275]],
	type: "weapon (club)",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This reinforced lute can be wielded as a magic Club that deals an extra 2d8 Thunder damage on a hit.",
	descriptionLong: "This reinforced lute can be wielded as a magic Club that deals an extra 2d8 Thunder damage on a hit.\n If you're a bard, you can use your CHA modifier instead of your Str Mod when making a melee attack roll provided that you sing or hum while making the attack.",
	descriptionFull: "This reinforced lute can be wielded as a magic Club that deals an extra 2d8 Thunder damage on a hit.\n\n" + toUni("Sing and Swing") + "If you’re a Bard, you can use your Charisma modifier instead of your Strength modifier when making a melee attack roll with the lute, provided you sing or hum while making the attack.",
	weight: 1,
	weaponsAdd: "Lute of Thunderous Thumping",
	weaponOptions: {
		baseWeapon: "club",
		regExpSearch: /^(?=.*lute)(?=.*thunderous)(?=.*thumping).*$/i,
		name: "Lute of Thunderous Thumping",
		source: [["D24", 275]],
		description: "Light, Slow; +2d8 Thunder",
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (classes.known.bard) {
					fields.Description += (fields.Description ? '; ' : '') + 'Cha Mod for attacks';
				}
			},
		],
		atkCalc: [
			function (fields, v, output) {
				if (classes.known.bard && (/lute of thunderous thumping/i).test(v.WeaponTextName)) {
					output.mod += What('Cha Mod');
				}
			},
			"I can wield this reinforced lute as a magic Club that deals an extra 2d8 Thunder damage on a hit. As a bard, I can also use Charisma instead of Strength for its attacks.",
		],
	},
	toNotesPage: [{
		name: "Sing and Swing",
		note: "If you’re a Bard, you can use your Charisma modifier instead of your Strength modifier when making a melee attack roll with the lute, provided you sing or hum while making the attack.",
	}],
};
MagicItemsList["mace of disruption"] = {
	name: "Mace of Disruption",
	source: [["D24", 276]],
	type: "weapon (mace)",
	rarity: "rare",
	magicItemTable: "?",
	description: "This magic mace sheds Bright Light in a 20-ft radius and Dim Light for another 20 ft while held. Fiends and undead hit with it take +2d6 Radiant damage. If the target has less than 25 or fewer HP after taking the damage, it must make a DC 15 Wisdom save or be destroyed.  On a successful save, the creature becomes frightened of me until my next turn ends.",
	descriptionFull: "When you hit a fiend or an undead with this magic weapon, that creature takes an extra 2d6 Radiant damage. If the target has 25 hit points or fewer after taking this damage, it must succeed on a DC 15 Wisdom saving throw or be destroyed. On a successful save, the creature becomes frightened of you until the end of your next turn.\n   While you hold this weapon, it sheds Bright Light in a 20-foot radius and Dim Light for an additional 20 feet.",
	attunement: true,
	weight: 4,
	weaponsAdd: ["Mace of Disruption"],
	weaponOptions: {
		baseWeapon: "mace",
		regExpSearch: /^(?=.*mace)(?=.*disruption).*$/i,
		name: "Mace of Disruption",
		source: [["D24", 276]],
		description: "Fiend/undead +2d6 radiant damage, and if HP<26, DC 15 Wis save or die, on success frightened until my next turn ends; Sap"
	}
};
MagicItemsList["mace of smiting"] = {
	name: "Mace of Smiting",
	source: [["D24", 276]],
	type: "weapon (mace)",
	rarity: "rare",
	magicItemTable: "?",
	description: "I gain a +1 bonus (+3 vs. constructs) to attack and damage rolls made with it. When I roll a 20 on an attack roll, the target takes an extra 7 Bludgeoning damage, or 14 Bludgeoning damage if it's a Construct. If a Construct has 25 or fewer HP after taking this damage, it is destroyed.",
	descriptionFull: "You gain a +1 bonus to attack and damage rolls made with this magic weapon. The bonus increases to +3 when you use the mace to attack a Construct.\n   When you roll a 20 on an attack roll made with this weapon, the target takes an extra 7 Bludgeoning damage, or 14 Bludgeoning damage if it's a Construct. If a Construct has 25 hit points or fewer after taking this damage, it is destroyed.",
	weight: 4,
	weaponsAdd: ["Mace of Smiting"],
	weaponOptions: {
		baseWeapon: "mace",
		regExpSearch: /^(?=.*mace)(?=.*smiting).*$/i,
		name: "Mace of Smiting",
		source: [["D24", 276]],
		description: "+1 to hit/damage (+3 vs. constructs); On 20 to hit: +7 damage (+14 vs. constructs); Constructs HP<= 25 destroyed; Sap",
		modifiers: [1, 1]
	}
};
MagicItemsList["mace of terror"] = {
	name: "Mace of Terror",
	source: [["D24", 276]],
	type: "weapon (mace)",
	rarity: "rare",
	magicItemTable: "?",
	description: "While holding this weapon, as a Magic action, I can use 1 charge of this mace to have all chosen creatures within 30 ft make a DC 15 Wis save or be frightened of me for 1 min, repeating the save at the end of its turns. While frightened, it takes only the Dash action to move away (or action to free itself), no reactions, and can't move within 30 ft of me.",
	descriptionLong: "While holding this weapon, as a Magic action, I can expend 1 charge to release a wave of terror. Each creature of my choice within 30 ft must succeed on a DC 15 Wis save or be Frightened of me for 1 min, repeating the save at the end of its turns. While frightened, it takes only the Dash action to move away (or action to free itself), no reactions, and can't move within 30 ft of me.",
	descriptionFull: "This magic weapon has 3 charges and regains 1d3 expended charges daily at dawn. While holding the weapon, you can take a Magic action and expend 1 charge to release a wave of terror from it. Each creature of your choice within 30 feet of you must succeed on a DC 15 Wisdom saving throw or have the Frightened condition for 1 minute. While Frightened in this way, a creature must spend its turns trying to move as far away from you as it can, and it can’t make Opportunity Attacks. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If it has nowhere it can move, the creature can take the Dodge action. At the end of each of its turns, a creature repeats the save, ending the effect on itself on a success",
	attunement: true,
	weight: 4,
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	weaponsAdd: ["Mace of Terror"],
	weaponOptions: {
		baseWeapon: "mace",
		regExpSearch: /^(?=.*mace)(?=.*terror).*$/i,
		name: "Mace of Terror",
    source: [["D24", 276]],
		description : "Sap",
	}
};
MagicItemsList["mantle of spell resistance"] = {
	name: "Mantle of Spell Resistance",
	source: [["D24", 276]],
	type: "wondrous item",
	rarity: "rare",
	magicItemTable: "?",
	description: "I have Advantage on saving throws against spells while I wear this cloak.",
	descriptionFull: "You have Advantage on saving throws against spells while you wear this cloak.",
	attunement: true,
	savetxt: { adv_vs: ["spells"] }
};
MagicItemsList["manual of bodily health"] = {
	name: "Manual of Bodily Health",
	source: [["D24", 277]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This book contains health and nutrition tips, and its words are charged with magic. If I spend 48 hours over a period of 6 days to study its contents and practicing its guidelines, my Constitution score increases by 2, to a maximum of 30. The manual then loses its magic, but regains it in a century.",
	descriptionFull: "This book contains health and nutrition tips, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Constitution score increases by 2, to a maximum of 30. The manual then loses its magic, but regains it in a century.",
	weight: 5,
	applyStatBonus: function (itemName, statName, statBonus) {
		// a function for all the manuals/tomes
		if (!IsNotReset) return;
		initiateCurrentStats();
		var statIndx = AbilityScores.names.indexOf(statName);
		var alreadyAppliedBefore = CurrentStats.maximumsLinked[itemName];
		var applyChange = app.alert({
			nIcon: 2,
			nType: 2,
			nTitle: "Apply " + itemName + "?",
			cMsg: "Do you want to apply the +" + statBonus + " bonus to the " + statName + " score and maximum from the " + itemName + " permanently? This increase will stay even after you remove this magic item.\nIf you select 'No' below, this increase will not be applied, even if you keep the magic item selected.\n\n" + (alreadyAppliedBefore ? "It seems you have applied this item before. If you click 'No', you will be prompted to remove all ability score increases from " + itemName : "If you want to remove this ability score increase at a later time, just add the item again and you will be prompted to remove the ability score increase then.")
		});
		if (applyChange == 3) {
			if (alreadyAppliedBefore) {
				var removeAll = app.alert({
					nIcon: 2,
					nType: 2,
					nTitle: "Remove all previous uses of " + itemName + "?",
					cMsg: "Do you want to remove all the previous bonuses to " + statName + " gained from the " + itemName + "?"
				});
				if (removeAll == 3) return;
			} else {
				return;
			}
		}
		var baseAdd = [0, 0, 0, 0, 0, 0];
		baseAdd[statIndx] = statBonus;
		var maxAdd = [0, 0, 0, 0, 0, 0];
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
	eval: function () {
		MagicItemsList["manual of bodily health"].applyStatBonus("Manual of Bodily Health", "Constitution", 2);
	}
};
MagicItemsList["manual of gainful exercise"] = {
	name: "Manual of Gainful Exercise",
	source: [["D24", 277]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This book describes fitness exercises, and its words are charged with magic. If I spend 48 hours over a period of 6 days or fewer studying its contents and practicing its guidelines, my Strength score increases by 2, up to a maximum of 30. The manual then loses its magic, but regains it in a century.",
	descriptionFull: "This book describes fitness exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Strength score increases by 2, up to a maximum of 30. The manual then loses its magic, but regains it in a century.",
	weight: 5,
	eval: function () {
		MagicItemsList["manual of bodily health"].applyStatBonus("Manual of Gainful Exercise", "Strength", 2);
	}
};
MagicItemsList["manual of golems"] = { // contains contributions by Larry Hoy
	name: "Manual of Golems",
	source: [["D24", 277]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This tome can only be used by a spellcaster with two 5th-level spell slots. Others reading it take 6d6 psychic damage.",
	descriptionFull: "This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly by rolling on the accompanying table. To decipher and use the manual, you must be a spellcaster with at least two level 5 spell slots. A creature that can’t use a Manual of Golems and attempts to read it takes 6d6 Psychic damage.\n"+" To create a golem, you must spend the time shown on the table, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay the specified cost to purchase supplies.\n"+" Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. See the Monster Manual for the golem’s stat block. The golem is under your control, and it understands and obeys your commands.",
	weight: 5,
	allowDuplicates: true,
	prerequisite: "Requires a spellcaster with at least two 5th-level spell slots",
	prereqeval: function () { return What('SpellSlots.CheckboxesSet.lvl5') >= 2; },
	choices: ["Clay", "Flesh", "Iron", "Stone"],
	"clay": {
		name: "Manual of Clay Golems",
		sortname: "Manual of Golems, Clay",
		description: "Only spellcasters with two 5th-level spell slots can use this tome. Creating a clay golem requires 65,000 gp of supplies, 30 days working uninterrupted with the manual at hand, resting no more than 8 hours per day. The manual is consumed to animate the golem, which understands and obeys my spoken commands.",
		descriptionFull: "This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly by rolling on the accompanying table. To decipher and use the manual, you must be a spellcaster with at least two level 5 spell slots. A creature that can’t use a Manual of Golems and attempts to read it takes 6d6 Psychic damage.\n" + " To create a golem, you must spend the time shown on the table, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay the specified cost to purchase supplies.\n" + " Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. See the Monster Manual for the golem’s stat block. The golem is under your control, and it understands and obeys your commands.",
	},
	"flesh": {
		name: "Manual of Flesh Golems",
		sortname: "Manual of Golems, Flesh",
		description: "Only spellcasters with two 5th-level spell slots can use this tome. Creating a flesh golem requires 50,000 gp of supplies, 60 days working uninterrupted with the manual at hand, resting no more than 8 hours per day. The manual is consumed to animate the golem, which understands and obeys my spoken commands.",
		descriptionFull: "This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly by rolling on the accompanying table. To decipher and use the manual, you must be a spellcaster with at least two level 5 spell slots. A creature that can’t use a Manual of Golems and attempts to read it takes 6d6 Psychic damage.\n" + " To create a golem, you must spend the time shown on the table, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay the specified cost to purchase supplies.\n" + " Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. See the Monster Manual for the golem’s stat block. The golem is under your control, and it understands and obeys your commands.",
	},
	"iron": {
		name: "Manual of Iron Golems",
		sortname: "Manual of Golems, Iron",
		description: "Only spellcasters with two 5th-level spell slots can use this tome. Creating a iron golem requires 100,000 gp of supplies, 120 days working uninterrupted with the manual at hand, resting no more than 8 hours per day. The manual is consumed to animate the golem, which understands and obeys my spoken commands.",
		descriptionFull: "This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly by rolling on the accompanying table. To decipher and use the manual, you must be a spellcaster with at least two level 5 spell slots. A creature that can’t use a Manual of Golems and attempts to read it takes 6d6 Psychic damage.\n" + " To create a golem, you must spend the time shown on the table, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay the specified cost to purchase supplies.\n" + " Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. See the Monster Manual for the golem’s stat block. The golem is under your control, and it understands and obeys your commands.",
	},
	"stone": {
		name: "Manual of Stone Golems",
		sortname: "Manual of Golems, Stone",
		description: "Only spellcasters with two 5th-level spell slots can use this tome. Creating a stone golem requires 80,000 gp of supplies, 90 days working uninterrupted with the manual at hand, resting no more than 8 hours per day. The manual is consumed to animate the golem, which understands and obeys my spoken commands.",
		descriptionFull: "This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly by rolling on the accompanying table. To decipher and use the manual, you must be a spellcaster with at least two level 5 spell slots. A creature that can’t use a Manual of Golems and attempts to read it takes 6d6 Psychic damage.\n" + " To create a golem, you must spend the time shown on the table, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay the specified cost to purchase supplies.\n" + " Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. See the Monster Manual for the golem’s stat block. The golem is under your control, and it understands and obeys your commands.",
	}
};
MagicItemsList["manual of quickness of action"] = {
	name: "Manual of Quickness of Action",
	source: [["D24", 278]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This book contains coordination and balance exercises, and its words are charged with magic. If I spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, my Dexterity score increases by 2, to a maximum of 30. The manual then loses its magic, but regains it in a century.",
	descriptionFull: "This book contains coordination and balance exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Dexterity score increases by 2, to a maximum of 30. The manual then loses its magic, but regains it in a century.",
	weight: 5,
	eval: function () {
		MagicItemsList["manual of quickness of action"].applyStatBonus("Manual of Quickness of Action", "Dexterity", 2);
	}
};
MagicItemsList["mariner's armor"] = {
	name: "Mariner's Armor",
	nameTest: "Mariner's",
	source: [["D24", 278]],
	type: "armor (light, medium, or heavy)",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While wearing this armor, I have a Swim speed equal to my Speed. In addition, if I start my turn underwater with 0 hit points, I immediately regain 1d4 hit points. The armor is decorated with fish and shell motifs.",
	descriptionFull: "While wearing this armor, you have a Swim speed equal to your Speed. In addition, whenever you start your turn underwater with 0 hit points, you immediately regain 1d4 hit points. The armor can't heal anyone again until the next dawn. The armor is decorated with fish and shell motifs.",
	allowDuplicates: true,
	limfeaname : "Mariner's Armor : Undersea Revival (1d4)",
	usages : 1,
	recovery : "Dawn",
	chooseGear: {
		type: "armor",
		prefixOrSuffix: ["brackets"],
		descriptionChange: ["replace", "armor"],
		excludeCheck: function (inObjKey, inObj) {
			return !(/light|medium|heavy/i).test(inObj.type);
		},
	},
	speed: { swim: { spd: "walk", enc: "walk" } }
};
MagicItemsList["medallion of thoughts"] = {
	name: "Medallion of Thoughts",
	source: [["D24", 278]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "The medallion has 5 charges. While wearing it, I can expend 1 charge to cast Detect Thoughts (save DC 13) from it. The medallion regains 1d4 expended charges daily at dawn.",
	descriptionFull: "The medallion has 5 charges. While wearing it, you can expend 1 charge to cast the Detect Thoughts spell (save DC 13) from it. The medallion regains 1d4 expended charges daily at dawn.",
	attunement: true,
	weight: 1,
	usages: 5,
	recovery: "dawn",
	additional: "regains 1d4",
	spellcastingBonus: {
		name: "1 charge",
		spells: ["detect thoughts"],
		selection: ["detect thoughts"],
		firstCol: 1
	},
	fixedDC: 13,
	spellFirstColTitle: "Ch"
};
MagicItemsList["mirror of life trapping"] = {
	name: "Mirror of Life Trapping",
	source: [["D24", 278]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "As an action when I'm within 5 ft of this mirror, I can speak its command word and activate it and it remains activated until I do so again. Creatures other than me who look in the activated mirror must make a DC 15 Charisma save or become trapped in one of its twelve extradimensional cells. See Notes page for info.",
	descriptionFull: "When this 4-foot-tall, 2 foot wide mirror is viewed indirectly, its surface shows faint images of creatures. The mirror weighs 50 pounds, and it has AC 11, 10 HP, Immunity to Poison and Psychic damage, and Vulnerability to Bludgeoning damage. It shatters and is destroyed when reduced to 0 Hit Points.\n   If the mirror is hanging on a vertical surface and you am within 5 feet of it, you can use take a Magic action and repeat the command word to deactivate it.\n   Any creature other than you that sees its reflection in the activated mirror while within 30 feet of it must succeed on a DC 15 Charisma saving throw or be trapped, along with anything it is wearing or carrying, in one of the mirror's twelve extradimensional cells. A creature that knows the mirror’s nature makes the save with Advantage, and Constructs succeed on the save automatically.\n   An extradimensional cell is an infinite expanse filled with thick fog that reduces visibility to 10 feet. Creatures trapped in the mirror's cells don't age, and they don't need to eat, drink, or sleep. A creature trapped within a cell can escape using magic that permits planar travel. Otherwise, the creature is confined to the cell until freed.\n   If the mirror traps a creature but its twelve extradimensional cells are already occupied, the mirror frees one trapped creature at random to accommodate the new prisoner. A freed creature appears in an unoccupied space within sight of the mirror but facing away from it. If the mirror is shattered, all creatures it contains are freed and appear in unoccupied spaces near it.\n   While within 5 feet of the mirror, you can take a Magic action to name one creature trapped in it or call out a particular cell by number. The creature named or contained in the named cell appears as an image on the mirror's surface. You and the creature can them communicate.\n In a similar way, you can take a Magic action and use a second command word and free one creature trapped in the mirror. The freed creature appears, along with its possessions, in the unoccupied space nearest to the mirror and facing away from it.\n Placing the mirror inside an extradimensional space created by a Bag of Holding, Portable Hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate and not behind Total Cover is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way only and can’t be reopened.",
	weight: 50,
	action: [["action", "activate/deactivate"],["action", "name/free trapped"]],
	toNotesPage: [{
		name: "Workings of the Mirror",
		note: [
			"When this 4-foot-tall, 2-foot-wide mirror is viewed indirectly, its surface shows faint images of creatures. The mirror weighs 50 pounds, and it has AC 11, HP 10, Immunity to Poison and Psychic damage, and Vulnerability to Bludgeoning damage. It shatters and is destroyed when reduced to 0 Hit Points.",
			"If the mirror is hanging on a vertical surface and you are within 5 feet of it, you can take a Magic action and use a command word to activate it. It remains activated until you take a Magic action and repeat the command word to deactivate it.",
			"Any creature other than you that sees its reflection in the activated mirror while within 30 feet of the mirror must succeed on a DC 15 Charisma saving throw or be trapped, along with anything it is wearing or carrying, in one of the mirror’s twelve extradimensional cells. A creature that knows the mirror’s nature makes the save with Advantage, and Constructs succeed on the save automatically.",
			"An extradimensional cell is an infinite expanse filled with thick fog that reduces visibility to 10 feet. Creatures trapped in the mirror’s cells don’t age, and they don’t need to eat, drink, or sleep. A creature trapped within a cell can escape using magic that permits planar travel. Otherwise, the creature is confined to the cell until freed.",
			"If the mirror traps a creature but its twelve extradimensional cells are already occupied, the mirror frees one trapped creature at random to accommodate the new prisoner. A freed creature appears in an unoccupied space within sight of the mirror but facing away from it. If the mirror is shattered, all creatures it contains are freed and appear in unoccupied spaces near it.",
			"While within 5 feet of the mirror, you can take a Magic action to name one creature trapped in it or call out a particular cell by number. The creature named or contained in the named cell appears as an image on the mirror’s surface. You and the creature can then communicate.",
			"In a similar way, you can take a Magic action and use a second command word to free one creature trapped in the mirror. The freed creature appears, along with its possessions, in the unoccupied space nearest to the mirror and facing away from it.",
			"Placing the mirror inside an extradimensional space created by a Bag of Holding, Portable Hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate and not behind Total Cover is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way only and can’t be reopened.",
		]
	}]
};
MagicItemsList["mithral armor"] = {
	name: "Mithral Armor",
	nameTest: "Mithral",
	source: [["D24", 279]],
	type: "armor (medium or heavy, except hide)",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "Mithral is a light, flexible metal. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't. This armor can be worn under normal clothes.",
	descriptionFull: "Mithral is a light, flexible metal. This armor can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't.",
	allowDuplicates: true,
	chooseGear: {
		type: "armor",
		prefixOrSuffix: "suffix",
		excludeCheck: function (inObjKey, inObj) {
			return !(/medium|heavy/i).test(inObj.type) || (/hide/i).test(inObj.name);
		},
		descriptionChange: ["prefix", "armor"],
		noStealthDis : /mithral/i,
	},
};
MagicItemsList["moon-touched sword"] = {
	name: "Moon-Touched Sword",
	nameTest: "Moon-Touched",
	source: [["D24", 280]],
	magicItemTable: "?",
	type: "weapon (Glaive, Greatsword, Longsword, Rapier, Scimitar, or Shortsword)",
	rarity: "common",
	description: "In Darkness, the unsheathed blade of this sword sheds moonlight, creating Bright Light in a 15-ft radius and Dim light for an additional 15 ft.",
	descriptionFull: "In Darkness, the unsheathed blade of this sword sheds moonlight, creating Bright Light in a 15-foot radius and Dim light for an additional 15 feet.",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "suffix",
		descriptionChange: ["replace", "sword"],
		excludeCheck: function (inObjKey, inObj) {
			var testRegex = /glaive|greatsword|longsword|rapier|scimitar|shortsword/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /glaive|greatsword|longsword|rapier|scimitar|shortsword/i.test(v.baseWeaponName) && /moon.touched/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the words "Moon-Touched" in the name of a sword, it will be treated as the magic weapon Moon-Touched Sword.'
		]
	}
};
MagicItemsList["mystery key"] = {
	name: "Mystery Key",
	source: [["D24", 280]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "A question mark is worked into the head of this key. The key has a 5% chance of unlocking any lock into which it's inserted. Once it unlocks something, the key disappears.",
	descriptionFull: "A question mark is worked into the head of this key. The key has a 5% chance of unlocking any lock into which it's inserted. Once it unlocks something, the key disappears."
};
MagicItemsList["nature's mantle"] = {
	name: "Nature's Mantle",
	source: [["D24", 280]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "uncommon",
	attunement: true,
	prerequisite: "Requires attunement by a druid or a ranger",
	prereqeval: function (v) { return classes.known.druid || classes.known.ranger ? true : false; },
	description: "This cloak shifts color and texture to blend with the terrain surrounding me. While wearing the cloak, I can use it as a Spellcasting Focus for my Druid and Ranger spells. While I am in an area that is Lightly Obscured, I can Hide as a Bonus Action even if I am being directly observed.",
	descriptionFull: "This cloak shifts color and texture to blend with the terrain surrounding you. While wearing the cloak, you can use it as a Spellcasting Focus for your Druid and Ranger spells." +
		"\n   While you are in an area that is lightly obscured, you can Hide as a Bonus action even if you are being directly observed.",
	action: [["Bonus action", " (Hide)"]]
};
MagicItemsList["necklace of adaptation"] = {
	name: "Necklace of Adaptation",
	source: [["D24", 280]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While wearing this necklace, I can breathe normally in any environment, and I have advantage on saving throws made to avoid or end the Poisoned condition.",
	descriptionFull: "While wearing this necklace, you can breathe normally in any environment, and you have advantage on saving throws made to avoid or end the Poisoned condition.",
	weight: 1,
	attunement: true,
	savetxt: {
		adv_vs: ["poisoned"],
	}
};
MagicItemsList["necklace of fireballs"] = {
	name: "Necklace of Fireballs",
	source: [["D24", 280]],
	type: "wondrous item",
	rarity: "rare",
	magicItemTable: "?",
	description: "This necklace has 1d6+3 beads hanging from it. I can take a Magic action to detach a bead and throw it up to 60 ft away. When it reaches the end of its trajectory, the bead detonates as a level 3 Fireball (save DC 15). You can hurl multiple beads, or even the whole necklace, at one time. When you do so, increase the damage of the Fireball by 1d6 for each bead after the first (maximum 12d6).",
	descriptionFull: "This necklace has 1d6+3 beads hanging from it. You can take a Magic action to detach a bead and throw it up to 60 feet away. When it reaches the end of its trajectory, the bead detonates as a level 3 Fireball (save DC 15).\n   You can hurl multiple beads, or even the whole necklace, at one time. When you do so, increase the damage of the Fireball by 1d6 for each bead after the first (maximum 12d6).",
	weight: 1,
	usages: "1d6+3",
	recovery: "Never",
	spellcastingBonus: {
		name: "Fireball",
		spells: ["fireball"],
		selection: ["fireball"]
	},
	fixedDC: 15,
	spellChanges: {
		"fireball": {
			description: "20-ft rad all crea 8d6+1d6/extra bead Fire dmg (max 12d6); save halves; unattended flammable objects ignite",
			components: "M\u2020",
			compMaterial: "Using the Necklace of Fireballs to cast Fireball requires removing and destroying one or more of the beads from it.",
			changes: "Using the Necklace of Fireballs to cast Fireball requires removing and destroing one or more of the beads from it. The damage is that of a Fireball cast a 3rd-level, +1 level per bead thrown as part of the same action beyond the first."
		}
	}
};
MagicItemsList["necklace of prayer beads"] = {
	name: "Necklace of Prayer Beads",
	source: [["D24", 281]],
	type: "wondrous item",
	rarity: "rare",
	magicItemTable: "?",
	description: "This necklace has many beads, 1d4+2 are magical and can each be used to cast a spell once per dawn as a Bonus action. The DM selects the spells from: Bless, Cure Wounds, Greater Restoration, Shining Smite, Guardian of Faith, and Wind Walk. Multiple beads of the same type can be on one necklace.",
	descriptionLong: "This necklace has many beads, 1d4+2 are magical aquamarine, black pearl, or topaz beads and can each be used to cast a spell once per dawn as a Bonus action. The DM selects the bead from: blessing bead (Bless), curing bead (Cure Wounds), favor bead (Greater Restoration), smiting bead (Shining Smite), summons bead (Guardian Bead), and wind walking bead (Wind Walk). Multiple beads of the same type can be on one necklace.",
	descriptionFull: "This necklace has 1d4+2 magic beads made from aquamarine, black pearl, or topaz. It also has many nonmagical beads made from stones such as amber, bloodstone, citrine, coral, jade, pearl, or quartz. If a magic bead is removed from the necklace, that bead loses its magic.\n   Six types of magic beads exist. The DM decides the type of each bead on the necklace or determines it randomly. A necklace can have more than one bead of the same type. To use one, you must be wearing the necklace. Each bead contains a spell that you can cast from it as a Bonus action (using your spell save DC if a save is necessary). Once a magic bead's spell is cast, that bead can't be used again until the next dawn.\n\n" + toUni("d20\tBead of ...\tSpell") + "\n1-6\tBlessing\t\tBless\n7-12\tCuring\t\tCure Wounds (2nd level)\n13-16\tFavor\t\tGreater Restoration\n17-18\tSmiting\t\tShining Smite\n19\tSummons   \tGuardian of Faith\n20\tWind walking\tWind Walk",
	attunement: true,
	prerequisite: "Requires attunement by a cleric, druid, or paladin",
	prereqeval: function (v) { return classes.known.druid || classes.known.paladin || classes.known.ranger ? true : false; },
	weight: 1,
	usages: "1d4+2",
	recovery: "dawn",
	spellcastingAbility: "class",
	spellFirstColTitle: "Us",
	spellcastingBonus: {
		name: "Bead Spells",
		spells: ["bless", "cure wounds", "greater restoration", "shining smite", "guardian of faith", "wind walk"],
		times: 6
	},
	calcChanges: {
		spellAdd: [
			function (spellKey, spellObj, spName) {
				if ((/necklace of prayer beads/i).test(spName)) {
					var toReturn = spellObj.time !== "1 bns";
					spellObj.time = "1 bns";
					spellObj.firstCol = "checkbox";
					if (spellKey === "cure wounds") {
						spellObj.name += " (2nd level)";
						spellObj.description = "1 living creature heals 4d8 + spellcasting ability modifier HP";
					}
					return toReturn;
				}
			},
			"Using the Necklace of Prayer Beads, the casting time is only a Bonus action. Also, Cure Wounds is cast as a 2nd-level spell."
		]
	}
};
MagicItemsList["nine lives stealer"] = {
	name: "Nine Lives Stealer",
	source: [["D24", 281]],
	type: "weapon (any simple or martial)",
	rarity: "very rare",
	magicItemTable: "?",
	attunement: true,
	description: "I have a +2 bonus to attack and damage rolls with this magic weapon. It has 1d8+1 charges and if it inflicts a critical hit while it has charges left on a creature with fewer than 100 HP (and that is not a construct or undead), the target must make a DC 15 Con save or die. If it dies, the sword uses a charge.",
	descriptionFull: "I gain a +2 bonus to attack and damage rolls made with this magic weapon.\n   The sword has 1d8+1 charges. If you score a critical hit against a creature that has fewer than 100 hit points, it must succeed on a DC 15 Constitution saving throw or be slain instantly as the sword tears its life force from its body (a construct or an undead is immune). The sword loses 1 charge if the creature is slain. When the sword has no charges remaining, it loses this property.",
	usages: "1d8+1",
	recovery: "Never",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "brackets",
		descriptionChange: ["replace", "weapon"],
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && (/^(?=.*(9|nine))(?=.*(lives|life))(?=.*stealer).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'On crit to target <100 HP, DC 15 Con save or die';
				}
			},
			'If I include the words "Nine Lives Stealer" in a the name of a weapon, it will be treated as the magic weapon Nine Lives Stealer. It has +2 to hit and damage. Also, as long as it has charges left, when it does a critical hit against a creature with fewer than 100 HP, that creature must make a DC 15 Constitution saving throw or die.'
		],
		atkCalc: [
			function (fields, v, output) {
				if ((/^(?=.*(9|nine))(?=.*(lives|life))(?=.*stealer).*$/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 2;
				}
			}, ''
		]
	}
};
MagicItemsList["nolzur's marvelous pigments"] = {
	name: "Nolzur's Marvelous Pigments",
	nameAlt: "Marvelous Pigments",
	source: [["D24", 281]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This wooden box contains 1d4 pots of pigments and a brush. I can use the brush and 1 pot of pigment to paint any number of 3d objects and terrain features - confined to a 20-ft cube. It takes 10 minutes, regardless of the number of elements, and I must maintain Concentration or all the elements vanish. Nothing created can have a value over 25 gp.",
	descriptionFull: "This fine wooden box contains 1d4 pots of pigment and a brush (weighing 1 pound in total).\n Using the brush and expending 1 pot of pigment, you can paint any number of three-dimensional objects and terrain features (such as walls, doors, trees, flowers, weapons, webs, and pits), provided these elements are all confined to a 20-foot Cube. The effort takes 10 minutes (regardless of the number of elements you create), during which time you must remain in the Cube, and requires Concentration. If your Concentration is broken or you leave the Cube before the work is done, all the painted elements vanish, and the pot of pigment is wasted.\n When the work is done, all the painted objects and terrain features become real. Thus, painting a door on a wall creates an actual door, which can be opened to whatever is beyond. Painting a pit creates a real pit, the entire depth of which must lie within the 20-foot Cube.\n No object created by a pot of pigment can have a value greater than 25 GP, and the total value of all objects created by a pot of pigment can’t exceed 500 GP. If you paint objects of greater value (such as a large pile of gold), they look authentic, but close inspection reveals they’re made from paste, cookies, or some other worthless material.\n If you paint a form of energy such as fire or lightning, the energy dissipates as soon as you complete the painting, doing no harm.",
	weight: 1
};
MagicItemsList["oathbow"] = {
	name: "Oathbow",
	source: [["D24", 282]],
	type: "weapon (shortbow, longbow)",
	rarity: "very rare",
	magicItemTable: "?",
	attunement: true,
	choices: ["Shortbow", "Longbow"],
	"shortbow": {
		description: "When I attack with this longbow and say its command phrase, I make the target my sworn enemy if I don't have one already for 7 days or until it dies. Attacks with this bow vs. it get adv, +3d6 damage, ignore cover (not full), and suffer no disadv. from long range. While it lives, I have disadv. when I use other weapons.",
		descriptionFull: 'When you nock an arrow on this bow, it whispers in Elvish, "Swift defeat to my enemies." When you use this weapon to make a ranged attack, you can, as a command phrase, say, "Swift death to you who have wronged me." The target of your attack becomes your sworn enemy until it dies or until dawn seven days later. You can have only one such sworn enemy at a time. When your sworn enemy dies, you can choose a new one after the next dawn.\n   When you make a ranged attack roll with this weapon against your sworn enemy, you have Advantage on the roll. In addition, your target gains no benefit from Half Cover or Three-Quarters Cover, and you suffer no Disadvantage due to long range. If the attack hits, your sworn enemy takes an extra 3d6 piercing damage.\n   While your sworn enemy lives, you have Disadvantage on attack rolls with all other weapons.',
		weaponOptions: [{
			baseWeapon: "shortbow",
			regExpSearch: /oathbow/i,
			name: "Oathbow",
			source: [["PHB2024", 215]],
			description: "Ammunition, heavy, two-handed; Vex; Vs. sworn enemy: adv, +3d6 damage, no cover/range penalties",
			isMagicWeapon: true,
			selectNow: true
		},],
	},
	"longbow": {
		description: "When I attack with this longbow and say its command phrase, I make the target my sworn enemy if I don't have one already for 7 days or until it dies. Attacks with this bow vs. it get adv, +3d6 damage, ignore cover (not full), and suffer no disadv. from long range. While it lives, I have disadv. when I use other weapons.",
		descriptionFull: 'When you nock an arrow on this bow, it whispers in Elvish, "Swift defeat to my enemies." When you use this weapon to make a ranged attack, you can, as a command phrase, say, "Swift death to you who have wronged me." The target of your attack becomes your sworn enemy until it dies or until dawn seven days later. You can have only one such sworn enemy at a time. When your sworn enemy dies, you can choose a new one after the next dawn.\n   When you make a ranged attack roll with this weapon against your sworn enemy, you have Advantage on the roll. In addition, your target gains no benefit from Half Cover or Three-Quarters Cover, and you suffer no Disadvantage due to long range. If the attack hits, your sworn enemy takes an extra 3d6 piercing damage.\n   While your sworn enemy lives, you have Disadvantage on attack rolls with all other weapons.',
		weaponOptions: [{
			baseWeapon: "longbow",
			regExpSearch: /oathbow/i,
			name: "Oathbow",
			source: [["PHB2024", 215]],
			description: "Ammunition, Heavy, Two-handed; Slow; Vs. sworn enemy: Adv, +3d6 damage, no half-cover or 3/4 cover/range penalties",
			isMagicWeapon: true,
			selectNow: true
		},],
	}
};
MagicItemsList["oil of etherealness"] = { // contains contributions by AelarTheElfRogue
	name: "Oil of Etherealness",
	source: [["D24", 282]],
	type: "potion",
	rarity: "rare",
	magicItemTable: "?",
	description: "This cloudy gray oil can be used once to cover a Medium or smaller creature, along with the equipment it's wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected target then gains the effect of the Etherealness spell for 1 hour.",
	descriptionFull: "One vial of this oil can cover one Medium or smaller creature, along with the equipment it’s wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of the Etherealness spell for 1 hour.\n Beads of this cloudy, gray oil form on the outside of its container and quickly evaporate.",
	weight: 0.5
};
MagicItemsList["oil of sharpness"] = { // contributed by AelarTheElfRogue
	name: "Oil of Sharpness",
	source: [["D24", 282]],
	type: "potion",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This clear, gelatinous oil sparkles with tiny, ultrathin silver shards. One vial of this oil can coat one Melee weapon or twenty pieces of ammunition, but only ammunition and Melee weapons that are nonmagical and deal Slashing or Piercing damage are affected. Applying the oil takes 1 minute, after which the oil magically seeps into whatever it coats, turning the coated weapon into a +3 Weapon or the coated ammunition into +3 Ammunition.",
	descriptionFull: "This clear, gelatinous oil sparkles with tiny, ultrathin silver shards. One vial of this oil can coat one Melee weapon or twenty pieces of ammunition, but only ammunition and Melee weapons that are nonmagical and deal Slashing or Piercing damage are affected. Applying the oil takes 1 minute, after which the oil magically seeps into whatever it coats, turning the coated weapon into a +3 Weapon or the coated ammunition into +3 Ammunition.",
	weight: 0.5
};
MagicItemsList["oil of slipperiness"] = { // contains contributions by AelarTheElfRogue
	name: "Oil of Slipperiness",
	source: [["D24", 283]],
	type: "potion",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "This sticky black unguent can be used once to cover a Medium or smaller creature and its equipment, granting it the effects of  Freedom of Movement for 8 hours. Applying it takes 10 minutes. Alternatively, it can be poured out as an action, duplicating the effects of the Grease spell in a 10-ft square for 8 hours.",
	descriptionFull: "One vial of this oil can cover one Medium or smaller creature, along with the equipment it’s wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of the Freedom of Movement spell for 8 hours.\n Alternatively, the oil can be poured on the ground as a Magic action, where it covers a 10-foot square, duplicating the effect of the Grease spell in that area for 8 hours.\n This sticky, black unguent is thick and heavy, but it flows quickly when poured.",
	weight: 0.5
};
MagicItemsList["orb of direction"] = {
	name: "Orb of Direction",
	source: [["D24", 283]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "This orb can be used as an Arcane Focus. As a Magic action while holding this orb, I can determine which way is magnetic north. Nothing happens if the orb is used in a location that has no magnetic north.",
	descriptionFull: "This orb can be used as an Arcane Focus. While holding this orb, you can take a Magic action to determine which way is magnetic north. Nothing happens if the orb is used in a location that has no magnetic north.",
	weight: 3,
	action: [["action", "Detect North"]]
};
MagicItemsList["orb of time"] = {
	name: "Orb of Time",
	source: [["D24", 284]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "This orb can be used as an Arcane Focus. As a Magic action, while holding this orb, I can determine whether it is morning, afternoon, evening, or nighttime outside. This property functions only on the Material Plane.",
	descriptionFull: "This orb can be used as an Arcane Focus.\n While holding the orb, you can take a Magic action to determine whether it is morning, afternoon, evening, or nighttime. This property functions only on the Material Plane.",
	weight: 3,
	action: [["action", "Detect Time"]]
};
MagicItemsList["pearl of power"] = { // contains contributions by AelarTheElfRogue
	name: "Pearl of Power",
	source: [["D24", 284]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While this pearl is on your person, I can take a Magic action to regain one expended spell slot of level 3 or lower. Once I have used the pearl, it can't be used again until the next dawn.",
	descriptionFull: "While this pearl is on your person, you can take a Magic action to regain one expended spell slot of level 3 or lower. Once you have used the pearl, it can't be used again until the next dawn.",
	attunement: true,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	usages: 1,
	recovery: "dawn",
	action: [["action", ""]]
};
MagicItemsList["perfume of bewitching"] = {
	name: "Perfume of Bewitching",
	source: [["D24", 284]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	usages: 1,
	description: "Once as a Magic action, I can apply the perfume in this tiny vial to myself and its effect lasts 1 hour. For the duration, I have Advantage on all Charisma checks (Deception/Persuasion) made to influence a creature within 5 feet of myself.",
	descriptionFull: "This tiny vial contains magic perfume, enough for one use. As a Magic action, I can apply the perfume in this tiny vial to myself and its effect lasts 1 hour. For the duration, I have Advantage on all Charisma checks (Deception/Persuasion) made to influence a creature within 5 feet of myself."
};
MagicItemsList["periapt of health"] = { // contributed by AelarTheElfRogue
	name: "Periapt of Health",
	source: [["D24", 284]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	attunement: true,
	description: "While wearing this pendant, I can take a Magic action to regain 2d4+2 HP. Once used, this property can't be used again until the next dawn. In addition, I have Advantage on saving throws to avoid or end the Poisoned condition while wearing this pendant.",
	descriptionFull: "While wearing this pendant, you can take a Magic action to regain 2d4 + 2 Hit Points. Once used, this property can’t be used again until the next dawn. In addition, you have Advantage on saving throws to avoid or end the Poisoned condition while you wear this pendant.",
	weight: 1,
	savetxt: { adv_vs: ["poisoned"] },
	recovery: "dawn",
};
MagicItemsList["periapt of proof against poison"] = { // contributed by AelarTheElfRogue
	name: "Periapt of Proof Against Poison",
	source: [["D24", 284]],
	type: "wondrous item",
	rarity: "rare",
	magicItemTable: "?",
	attunement: true,
	description: "This delicate silver chain has a brilliant-cut black gem pendant. While I wear it, I am immune to the Poisoned condition and have immunity to poison damage.",
	descriptionFull: "This delicate silver chain has a brilliant-cut black gem pendant. While you wear it, you have Immunity to the Poisoned condition and Poison damage.",
	weight: 1,
	savetxt: { immune: ["poison"] }
};
MagicItemsList["periapt of wound closure"] = { // contributed by AelarTheElfRogue
	name: "Periapt of Wound Closure",
	source: [["D24", 284]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "Whenever I make a Death Saving Throw, I can change a roll of 9 or lower to a 10, turning a failed save into a successful one. Whenever I roll a Hit Point die to regain Hit Points, double the number of Hit Points it restores.",
	descriptionFull: "While wearing this pendant, you gain the following benefits.\n" + toUni("Life Preservation") + " Whenever you make a Death Saving Throw, you can change a roll of 9 or lower to a 10, turning a failed save into a successful one.\n" + toUni("Natural Healing Boost") +"Whenever you roll a Hit Point Die to regain Hit Points, double the number of Hit Points it restores.",
	attunement: true,
	weight: 1
};
MagicItemsList["philter of love"] = {
	name: "Philter of Love",
	source: [["D24", 285]],
	type: "potion",
	rarity: "uncommon",
	magicItemTable: "?",
	notLegalAL: true,
	description: "The next time I see a creature within 10 minutes after drinking this philter, I am charmed by that creature and have the Charmed condition for 1 hour.",
	descriptionFull: "The next time you see a creature within 10 minutes after drinking this philter, you are charmed by that creature and have the Charmed condition for 1 hour.\n This rose-hued, effervescent liquid contains one easy-to-miss bubble shaped like a heart.",
	weight: 0.5
};
MagicItemsList["pipe of smoke monsters"] = {
	name: "Pipe of Smoke Monsters",
	source: [["D24", 285]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "While smoking this pipe, you can take a Magic action to exhale a puff of smoke that takes the form of a creature, such as a dragon, a flumph, or a slaad. The form must be small enough to fit in a 1-foot cube and loses its shape after a few seconds, becoming an ordinary puff of smoke.",
	descriptionFull: "While smoking this pipe, you can take a Magic action to exhale a puff of smoke that takes the form of a creature, such as a dragon, a flumph, or a slaad. The form must be small enough to fit in a 1-foot cube and loses its shape after a few seconds, becoming an ordinary puff of smoke."
};
MagicItemsList["pipes of haunting"] = { // contains contributions by Soilentbrad
	name: "Pipes of Haunting",
	source: [["D24", 285]],
	type: "wondrous item (instrument)",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "These pipes have 3 charges and regain 1d3 expended charges daily at dawn. As a Magic action, I can use 1 charge to play them and have each creature in 30 ft that can hear them make a DC 15 Wisdome saving throw or be frightened of me for 1 minute. A target can repeat the save at the end of each of their turns.",
	descriptionFull: "These pipes have 3 charges and regain 1d3 expended charges daily at dawn. You can take a Magic action to play them and expend 1 charge to create an eerie, spellbinding tune. Each creature of your choice within 30 feet of you must succeed on a DC 15 Wisdom saving throw or have the Frightened condition for 1 minute. A creature that fails the save repeats it at the end of each of its turns, ending the effect on itself on a success. A creature that succeeds on its save is immune to the effect of these pipes for 24 hours.",
	weight: 2,
	action: [["action", ""]],
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
};
MagicItemsList["pipes of the sewers"] = { // contains contributions by Soilentbrad
	name: "Pipes of the Sewers",
	source: [["D24", 285]],
	type: "wondrous item (instrument)",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "The pipes have 3 charges, regain 1d3 at dawn, and cause rats to be indifferent toward me unless threatened. As a Magic action, I can play them, then use a Bonus action to summon rats in 0.5 miles to form 1 swarm per charge spend. While playing, rat swarms in 30 ft make a Wis Save vs. my Charisma check or obey my commands.",
	descriptionFull: "While these pipes are on your person, ordinary rats and giant rats are Indifferent toward you and won’t attack you unless you threaten or harm them.\n The pipes have 3 charges and regain 1d3 expended charges daily at dawn. If you play the pipes as a Magic action, you can take a Bonus Action to expend 1 to 3 charges, calling forth one Swarm of Rats with each expended charge if enough rats are within half a mile of you to be called in this fashion (as determined by the DM). If there aren’t enough rats to form a swarm, the charge is wasted. Called swarms move toward the music by the shortest available route but aren’t under your control otherwise.\n Whenever a Swarm of Rats that isn’t under another creature’s control comes within 30 feet of you while you are playing the pipes, the swarm makes a DC 15 Wisdom saving throw. On a successful save, the swarm behaves as it normally would and can’t be swayed by the pipes’ music for the next 24 hours. On a failed save, the swarm is swayed by the pipes’ music and becomes Friendly to you and your allies for as long as you continue to play the pipes each round as a Magic action. A Friendly swarm obeys your commands. If you issue no commands to a Friendly swarm, it defends itself but otherwise takes no actions. If a Friendly swarm starts its turn more than 30 feet away from you, your control over that swarm ends, and the swarm behaves as it normally would and can’t be swayed by the pipes’ music for the next 24 hours.",
	attunement: true,
	weight: 2,
	action: [["action", "Play Pipes"],["bonus action","Call Swarm"]],
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
};
MagicItemsList["plate armor of etherealness"] = {
	name: "Plate Armor of Etherealness",
	nameTest: "of Etherealness",
	source: ["D24", 286],
	type: "armor (half plate or plate)",
	rarity: "legendary",
	attunement: true,
	description: "While you’re wearing this armor, you can take a Magic action and use a command word to gain the effect of the Etherealness spell. The spell ends immediately if you remove the armor or take a Magic action to repeat the command word.",
	descriptionFull: "While you’re wearing this armor, you can take a Magic action and use a command word to gain the effect of the Etherealness spell. The spell ends immediately if you remove the armor or take a Magic action to repeat the command word. This property of the armor can’t be used again until the next dawn.\n Plate consists of shaped, interlocking metal plates to cover the entire body. A suit of plate includes gauntlets, heavy leather boots, a visored helmet, and thick layers of padding underneath the armor. Buckles and straps distribute the weight over the body.",
	choices : ["Half Plate", "Plate"],
	"half plate": {
		description: "While you’re wearing this half plate armor, you can take a Magic action and use a command word to gain the effect of the Etherealness spell. The spell ends immediately if you remove the armor or take a Magic action to repeat the command word.",
		descriptionFull: "While you’re wearing this half platearmor, you can take a Magic action and use a command word to gain the effect of the Etherealness spell. The spell ends immediately if you remove the armor or take a Magic action to repeat the command word. This property of the armor can’t be used again until the next dawn.\n Plate consists of shaped, interlocking metal plates to cover the entire body. A suit of plate includes gauntlets, heavy leather boots, a visored helmet, and thick layers of padding underneath the armor. Buckles and straps distribute the weight over the body.",
		armorOptions : {
			regExpSearch : /^(?=.*half)(?=.*plate)(?=.*etherealness).*$/i,
			name : "Half Plate Armor of Etherealness",
			source : [["D24", 286]],
			type : "medium",
			ac : 15,
			stealthdis : true,
			weight : 40,
			selectNow: true,
		},
	},
	"plate": {
		description: "While you’re wearing this plate armor, you can take a Magic action and use a command word to gain the effect of the Etherealness spell. The spell ends immediately if you remove the armor or take a Magic action to repeat the command word.",
		descriptionFull: "While you’re wearing this plate armor, you can take a Magic action and use a command word to gain the effect of the Etherealness spell. The spell ends immediately if you remove the armor or take a Magic action to repeat the command word. This property of the armor can’t be used again until the next dawn.\n Plate consists of shaped, interlocking metal plates to cover the entire body. A suit of plate includes gauntlets, heavy leather boots, a visored helmet, and thick layers of padding underneath the armor. Buckles and straps distribute the weight over the body.",
		armorOptions : {
			regExpSearch : /^(?=.*plate)(?=.*armor)(?=.*etherealness).*$/i,
			name : "Plate Armor of Etherealness",
			source : [["D24", 286]],
			ac: 18,
			type: "heavy",
			stealthdis: true,
			weight: 65,
			strReq: 15,
			selectNow: true,
		},
	},
	usages: 1,
	recovery: "dawn",
	action: [["action", "start/stop ethereal"]],
	spellcastingBonus: {
		name: "once per dawn",
		spells: ["etherealness"],
		selection: ["etherealness"],
		firstCol: "oncelr"
	},
	spellChanges: {
		"etherealness": {
			components: "",//removed due to item casting
			duration: "10 min",
			description: "I travel to the Ethereal Plane; move there freely, but able to perceive 60 ft into the normal plane",
			changes: "Using the Plate Armor of Etherealness, I can cast Etherealness, but only on myself and it lasts only 10 minutes.",
		}
	}
};
MagicItemsList["pole of angling"] = {
	name: "Pole of Angling",
	source: [["D24", 286]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "This item functions as a Pole. While holding it, you can take a Magic action to cause it to transform into a fishing pole with a hook, a line, and a reel, or have the fishing pole revert to a Pole.",
	descriptionFull: "This item functions as a Pole. While holding it, you can take a Magic action to cause it to transform into a fishing pole with a hook, a line, and a reel, or have the fishing pole revert to a Pole.",
	weight: 7,
	action: [["action", "transform"]],
};
MagicItemsList["pole of collapsing"] = {
	name: "Pole of Collapsing",
	source: [["D24", 286]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "This item functions as a Pole. While holding it, I can take a Magic action to collapse it into a 1 foot-long rod for ease of storage(the pole’s weight doesn’t change) or cause the 1 foot-long rod to revert to a Pole. The rod elongates only as far as the surrounding space allows.",
	descriptionFull: "This item functions as a Pole. While holding it, you can take a Magic action to collapse it into a 1 foot-long rod for ease of storage (the pole’s weight doesn’t change) or cause the 1 foot-long rod to revert to a Pole. The rod elongates only as far as the surrounding space allows.",
	weight: 7,
	action: [["action", "transform"]],
};
MagicItemsList["portable hole"] = {
	name: "Portable Hole",
	source: [["D24", 286]],
	type: "wondrous item",
	rarity: "rare",
	magicItemTable: "?",
	description: "As Magic action, I can unfold this black cloth, 6 ft in diameter, and place it on a solid surface, whereupon it creates a 10-ft deep extradimensional hole. It can't be used to create passages. The space is always the same, so I can store things and creatures in there. Removing it and folding it back takes a Magic action.",
	descriptionFull: "This fine black cloth, soft as silk, is folded up to the dimensions of a handkerchief. It unfolds into a circular sheet 6 feet in diameter.\n You can take a Magic action to unfold a Portable Hole and place it on or against a solid surface, whereupon the Portable Hole creates an extradimensional hole 10 feet deep. The cylindrical space within the hole exists on a different plane of existence, so it can’t be used to create open passages. Any creature inside an open Portable Hole can exit the hole by climbing out of it.\n You can take a Magic action to close a Portable Hole by taking hold of the edges of the cloth and folding it up. Folding the cloth closes the hole, and any creatures or objects within remain in the extradimensional space. No matter what’s in it, the hole weighs next to nothing.\n If the hole is folded up, a creature within the hole’s extradimensional space can take an action to make a DC 10 Strength (Athletics) check. On a successful check, the creature forces its way out and appears within 5 feet of the Portable Hole. A closed Portable Hole holds enough air for 1 hour of breathing, divided by the number of breathing creatures inside.\n Placing a Portable Hole inside an extradimensional space created by a Bag of Holding, Heward’s Handy Haversack, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate and not behind Total Cover is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can’t be reopened.",
	action: [["action", " (place/fold)"]]
};
MagicItemsList["potion of animal friendship"] = {
	name: "Potion of Animal Friendship",
	source: [["D24", 287]],
	type: "potion",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "When you drink this potion, you can cast the level 3 version of the Animal Friendship spell (save DC 13).",
	descriptionFull: "When you drink this potion, you can cast the level 3 version of the Animal Friendship spell (save DC 13). Agitating this potion’s muddy liquid brings little bits into view: a fish scale, a hummingbird feather, a cat claw, or a squirrel hair.",
	weight: 0.5,
	spellChanges: {
		"Animal Friendship": {
			description: "Target up to 3 beasts you can see within 30-ft. Target must succeed on a Wisdom saving throw or be Charmed for duration or until damage is taken.",
			changes: "When using the Potion to cast Animal Friendship, it is cast at 3rd-level."
		},
	}
};
MagicItemsList["potion of clairvoyance"] = {
	name: "Potion of Clairvoyance",
	source: [["D24", 287]],
	type: "potion",
	rarity: "rare",
	magicItemTable: "?",
	description: "When you drink this potion, you gain the effect of the Clairvoyance spell (no Concentration required). An eyeball bobs in this potion’s yellowish liquid but vanishes when the potion is opened.",
	descriptionFull: "When you drink this potion, you gain the effect of the Clairvoyance spell (no Concentration required). An eyeball bobs in this yellowish liquid but vanishes when the potion is opened.",
	weight: 0.5,
};
MagicItemsList["potion of climbing"] = {
	name: "Potion of Climbing",
	source: [["D24", 287]],
	type: "potion",
	rarity: "common",
	magicItemTable: "?",
	description: "When you drink this potion, you gain a Climb Speed equal to your Speed for 1 hour. During this time, you have Advantage on Strength (Athletics) checks to climb.",
	descriptionFull: "When you drink this potion, you gain a Climb Speed equal to your Speed for 1 hour. During this time, you have Advantage on Strength (Athletics) checks to climb. This potion is separated into brown, silver, and gray layers resembling bands of stone. Shaking the bottle fails to mix the colors. ",
	weight: 0.5,
};
MagicItemsList["potion of comprehension"] = {
	name: "Potion of Comprehension",
	source: [["D24", 287]],
	type: "potion",
	rarity: "common",
	magicItemTable: "?",
	description: "When you drink this potion, you gain the effect of the Comprehend Languages spell for 1 hour.. This potion’s liquid is a clear concoction with bits of salt and soot swirling in it.",
	descriptionFull: "When you drink this potion, you gain the effect of the Comprehend Languages spell for 1 hour. This potion’s liquid is a clear concoction with bits of salt and soot swirling in it.",
	weight: 0.5,
};
MagicItemsList["potion of diminution"] = {
	name: "Potion of Diminution",
	source: [["D24", 287]],
	type: "potion",
	rarity: "rare",
	magicItemTable: "?",
	description: "When you drink this potion, you gain the \“reduce\” effect of the Enlarge/Reduce spell for 1d4 hours (no Concentration required).. The red in the potion's liquid continuously contracts to a tiny bead and then expands to color the clear liquid around it.",
	descriptionFull: "When you drink this potion, you gain the \"reduce\" effect of the Enlarge/Reduce spell for 1d4 hours (no concentration required). The red in the potion's liquid continuously contracts to a tiny bead and then expands to color the clear liquid around it. Shaking the bottle fails to interrupt this process.",
	weight: 0.5
};
MagicItemsList["potion of fire breath"] = {
	name: "Potion of Fire Breath",
	source: [["D24", 287]],
	type: "potion",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "After drinking this potion, you can take a Bonus Action to exhale fire at a target within 30 feet of yourself. The target makes a DC 13 Dexterity saving throw, taking 4d6 Fire damage on a failed save or half as much damage on a successful one. The effect ends after you exhale the fire three times or when 1 hour has passed.",
	descriptionFull: "After drinking this potion, you can take a Bonus Action to exhale fire at a target within 30 feet of yourself. The target makes a DC 13 Dexterity saving throw, taking 4d6 Fire damage on a failed save or half as much damage on a successful one. The effect ends after you exhale the fire three times or when 1 hour has passed. This potion's orange liquid flickers, and smoke fills the top of the container and wafts out whenever it is opened.",
	weight: 0.5
};
MagicItemsList["potion of flying"] = {
	name: "Potion of Flying",
	source: [["D24", 287]],
	type: "potion",
	rarity: "very rare",
	magicItemTable: "?",
	description: "When you drink this potion, you gain a Fly Speed equal to your Speed for 1 hour and can hover. If you’re in the air when the potion wears off, you fall unless you have some other means of staying aloft. This potion's clear liquid floats at the top of its container and has cloudy white impurities drifting in it.",
	descriptionFull: "When you drink this potion, you gain a Fly Speed equal to your Speed for 1 hour and can hover. If you’re in the air when the potion wears off, you fall unless you have some other means of staying aloft. This potion's clear liquid floats at the top of its container and has cloudy white impurities drifting in it.",
	weight: 0.5
};
MagicItemsList["potion of gaseous form"] = {
	name: "Potion of Gaseous Form",
	source: [["D24", 287]],
	type: "potion",
	rarity: "rare",
	magicItemTable: "?",
	description: "When you drink this potion, you gain the effect of the Gaseous Form spell for 1 hour (no Concentration required) or until you end the effect as a Bonus Action.This potion's container seems to hold fog that moves and pours like water.",
	descriptionFull: "When you drink this potion, you gain the effect of the Gaseous Form spell for 1 hour (no Concentration required) or until you end the effect as a Bonus Action.. This potion's container seems to hold fog that moves and pours like water.",
	weight: 0.5
};
MagicItemsList["potion of giant strength"] = {
	name: "Potion of Giant Strength",
	source: [["D24", 288]],
	type: "potion",
	description: "When you drink this potion, your Strength score changes for 1 hour. The type of giant determines the score (see the table below). The potion has no effect on you if your Strength is equal to or greater than that score.",
	descriptionFull: "When you drink this potion, your Strength score changes for 1 hour. The type of giant determines the score (see the table below). The potion has no effect on you if your Strength is equal to or greater than that score.\n   This potion’s transparent liquid has floating in it a sliver of light resembling a giant’s fingernail. The potion of frost giant strength and the potion of stone giant strength have the same effect.\n\n" + toUni("Type\t\tStr\tRarity") + "\nHill giant\t\t21\tUncommon\nStone/frost giant\t23\tRare\nFire giant   \t25\tRare\nCloud giant\t27\tVery rare\nStorm giant\t29\tLegendary",
	weight: 0.5,
	allowDuplicates: true,
	choices : ["Hill (Str 21, uncommon)", "Frost (Str 23, rare)", "Stone (Str 23, rare)", "Fire (Str 25, rare)", "Cloud (Str 27, very rare)", "Storm (Str 29, legendary)"],
	"hill (str 21, uncommon)": {
		name: "Potion of Hill Giant Strength",
		sortname: "Potion of Giant Strength, Hill (Str 21)",
		rarity: "uncommon",
		magicItemTable: "?",
		description: "As an action, I can drink this potion or administer it to another to change the consumer's Strength score to 21 for 1 hour. This potion has no effect if the consumer's Strength score is already equal or higher. This potion's transparent liquid has floating in it a sliver of fingernail from a hill giant.",
		descriptionFull: "When you drink this potion, your Strength score changes to 21 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.\n   This potion's transparent liquid has floating in it a sliver of fingernail from a hill giant."
	},
	"frost (str 23, rare)": {
		name: "Potion of Frost Giant Strength",
		sortname: "Potion of Giant Strength, Frost (Str 23)",
		rarity: "rare",
		magicItemTable: "?",
		description: "As an action, I can drink this potion or administer it to another to change the consumer's Strength score to 23 for 1 hour. This potion has no effect if the consumer's Strength score is already equal or higher. This potion's transparent liquid has floating in it a sliver of fingernail from a frost giant.",
		descriptionFull: "When you drink this potion, your Strength score changes to 23 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.\n   This potion's transparent liquid has floating in it a sliver of fingernail from a frost giant."
	},
	"stone (str 23, rare)": {
		name: "Potion of Stone Giant Strength",
		sortname: "Potion of Giant Strength, Stone (Str 23)",
		rarity: "rare",
		magicItemTable: "?",
		description: "As an action, I can drink this potion or administer it to another to change the consumer's Strength score to 23 for 1 hour. This potion has no effect if the consumer's Strength score is already equal or higher. This potion's transparent liquid has floating in it a sliver of fingernail from a stone giant.",
		descriptionFull: "When you drink this potion, your Strength score changes to 23 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.\n   This potion's transparent liquid has floating in it a sliver of fingernail from a stone giant."
	},
	"fire (str 25, rare)": {
		name: "Potion of Fire Giant Strength",
		sortname: "Potion of Giant Strength, Fire (Str 25)",
		rarity: "rare",
		magicItemTable: "?",
		description: "As an action, I can drink this potion or administer it to another to change the consumer's Strength score to 25 for 1 hour. This potion has no effect if the consumer's Strength score is already equal or higher. This potion's transparent liquid has floating in it a sliver of fingernail from a fire giant.",
		descriptionFull: "When you drink this potion, your Strength score changes to 25 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.\n   This potion's transparent liquid has floating in it a sliver of fingernail from a fire giant."
	},
	"cloud (str 27, very rare)": {
		name: "Potion of Cloud Giant Strength",
		sortname: "Potion of Giant Strength, Cloud (Str 27)",
		rarity: "very rare",
		magicItemTable: "?",
		description: "As an action, I can drink this potion or administer it to another to change the consumer's Strength score to 27 for 1 hour. This potion has no effect if the consumer's Strength score is already equal or higher. This potion's transparent liquid has floating in it a sliver of fingernail from a cloud giant.",
		descriptionFull: "When you drink this potion, your Strength score changes to 27 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.\n   This potion's transparent liquid has floating in it a sliver of fingernail from a cloud giant."
	},
	"storm (str 29, legendary)": {
		name: "Potion of Storm Giant Strength",
		sortname: "Potion of Giant Strength, Storm (Str 29)",
		rarity: "legendary",
		magicItemTable: "?",
		description: "As an action, I can drink this potion or administer it to another to change the consumer's Strength score to 29 for 1 hour. This potion has no effect if the consumer's Strength score is already equal or higher. This potion's transparent liquid has floating in it a sliver of fingernail from a storm giant.",
		descriptionFull: "When you drink this potion, your Strength score changes to 29 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.\n   This potion's transparent liquid has floating in it a sliver of fingernail from a storm giant."
	}
};
MagicItemsList["potion of greater invisibility"] = {
	name: "Potion of Greater Invisibility",
	source: [["D24", 288]],
	type: "potion",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This potion’s container looks empty but feels as though it holds liquid. When you drink the potion, you have the Invisible condition for 1 hour. Anything the consumer wears or carries is invisible along with it. If invisible during Initiative Roll, I have Adv on the roll. Attack rolls against me have DisAdv and my attack rolls have Adv.",
	descriptionFull: "This potion’s container looks empty but feels as though it holds liquid. When you drink the potion, you have the Invisible condition for 1 hour. Anything the consumer wears or carries is invisible along with it. If invisible during Initiative Roll, I have Adv on the roll. Attack rolls against me have DisAdv and my attack rolls have Adv.",
	weight: 0.5,
};
MagicItemsList["potion of growth"] = {
	name: "Potion of Growth",
	source: [["D24", 288]],
	type: "potion",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "When you drink this potion, you gain the \“enlarge\” effect of the Enlarge/Reduce spell for 10 minutes (no Concentration required). The red in the potion's liquid continuously expands from a tiny bead to color the clear liquid around it and then contracts.",
	descriptionFull: "When you drink this potion, you gain the \"enlarge\" effect of the Enlarge/Reduce spell for 10 minutes (no concentration required). The red in the potion's liquid continuously expands from a tiny bead to color the clear liquid around it and then contracts. Shaking the bottle fails to interrupt this process.",
	weight: 0.5
};
MagicItemsList["potion of healing"] = {
	name: "Potion of Healing",
	source: [["D24", 288]],
	type: "potion",
	description: "You regain Hit Points when you drink this potion. The number of Hit Points depends on the potion’s rarity, as shown in the table below. This potion's red liquid glimmers when agitated.",
	descriptionFull: "You regain Hit Points when you drink this potion. The number of Hit Points depends on the potion’s rarity, as shown in the table below. Whatever its potency, the potion's red liquid glimmers when agitated.",
	weight: 0.5,
	allowDuplicates: true,
	choices : ["Healing (2d4+2, common)", "Greater Healing (4d4+4, uncommon)", "Superior Healing (8d4+8, rare)", "Supreme Healing (10d4+20, very rare)"],
	"healing (2d4+2, common)": {
		name: "Potion of Healing  ",
		rarity: "common",
		magicItemTable: "?",
		description: "As an action, I can drink this potion or administer it to another to regain 2d4+2 hit points. This potion's red liquid glimmers when agitated.",
		descriptionFull: "You regain 2d4+2 hit points when you drink this potion. The potion's red liquid glimmers when agitated.",
	},
	"greater healing (4d4+4, uncommon)": {
		name: "Potion of Greater Healing",
		sortname: "Potion of Healing, Greater",
		rarity: "uncommon",
		magicItemTable: "?",
		description: "As an action, I can drink this potion or administer it to another to regain 4d4+4 hit points. This potion's red liquid glimmers when agitated.",
		descriptionFull: "You regain 4d4+4 hit points when you drink this potion. The potion's red liquid glimmers when agitated.",
	},
	"superior healing (8d4+8, rare)": {
		name: "Potion of Superior Healing",
		sortname: "Potion of Healing, Superior",
		rarity: "rare",
		magicItemTable: "?",
		description: "As an action, I can drink this potion or administer it to another to regain 8d4+8 hit points. This potion's red liquid glimmers when agitated.",
		descriptionFull: "You regain 8d4+8 hit points when you drink this potion. The potion's red liquid glimmers when agitated.",
	},
	"supreme healing (10d4+20, very rare)": {
		name: "Potion of Supreme Healing",
		sortname: "Potion of Healing, Supreme",
		rarity: "very rare",
		magicItemTable: ["?"],
		description: "As an action, I can drink this potion or administer it to another to regain 10d4+20 hit points. This potion's red liquid glimmers when agitated.",
		descriptionFull: "You regain 10d4+20 hit points when you drink this potion. The potion's red liquid glimmers when agitated.",
	}
};
MagicItemsList["potion of heroism"] = {
	name: "Potion of Heroism",
	source: [["D24", 288]],
	type: "potion",
	rarity: "rare",
	magicItemTable: "?",
	description: "When I drink this potion, I gain 10 Temporary Hit Points that last for 1 hour. For the same duration, I am under the effect of the Bless spell (no Concentration required)",
	descriptionFull: "When you drink this potion, you gain 10 Temporary Hit Points that last for 1 hour. For the same duration, you are under the effect of the Bless spell (no Concentration required). This blue potion bubbles and steams as if boiling.",
	weight: 0.5
};
MagicItemsList["potion of invisibility"] = {
	name: "Potion of Invisibility",
	source: [["D24", 288]],
	type: "potion",
	rarity: "rare",
	magicItemTable: "?",
	description: "This potion’s container looks empty but feels as though it holds liquid. When you drink the potion, you have the Invisible condition for 1 hour. The effect ends early if you make an attack roll, deal damage, or cast a spell.",
	descriptionFull: "This potion’s container looks empty but feels as though it holds liquid. When you drink the potion, you have the Invisible condition for 1 hour. The effect ends early if you make an attack roll, deal damage, or cast a spell.",
	weight: 0.5,
};
MagicItemsList["potion of invulnerability"] = {
	name: "Potion of Invulnerability",
	source: [["SRD24", 188]], //Listed on DDB as Free Rules 2024, 188
	type: "potion",
	rarity: "rare",
	magicItemTable: "?",
	description: "For 1 minute after you drink this potion, you have Resistance to all damage.",
	descriptionFull: "For 1 minute after you drink this potion, you have Resistance to all damage. This potion’s syrupy liquid looks like liquefied iron.",
	weight: 0.5,
};
MagicItemsList["potion of longevity"] = {
	name: "Potion of Longevity",
	source: [["D24", 288]],
	type: "potion",
	rarity: "very rare",
	magicItemTable: "?",
	description: "When you drink this potion, your physical age is reduced by 1d6 + 6 years, to a minimum of 13 years. Each time you subsequently drink a Potion of Longevity, there is 10 percent cumulative chance that you instead age by 1d6 + 6 years.",
	descriptionFull: "When you drink this potion, your physical age is reduced by 1d6 + 6 years, to a minimum of 13 years. Each time you subsequently drink a Potion of Longevity, there is 10 percent cumulative chance that you instead age by 1d6 + 6 years. Suspended in this amber liquid is a tiny heart that, against all reason, is still beating. These ingredients vanish when the potion is opened.",
	weight: 0.5
};
MagicItemsList["potion of mind reading"] = {
	name: "Potion of Mind Reading",
	source: [["D24", 288]],
	type: "potion",
	rarity: "rare",
	magicItemTable: "?",
	description: "When you drink this potion, you gain the effect of the Detect Thoughts spell (save DC 13) for 10 minutes (no Concentration required). The potion's dense, purple liquid has an ovoid cloud of pink floating in it.",
	descriptionFull: "When you drink this potion, you gain the effect of the Detect Thoughts spell (save DC 13) for 10 minutes, (no Concentration required). The potion's dense, purple liquid has an ovoid cloud of pink floating in it.",
	weight: 0.5
};
MagicItemsList["potion of poison"] = {
	name: "Potion of Poison",
	source: [["D24", 288]],
	type: "potion",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "If you drink this potion, you take 4d6 Poison damage and must succeed on a DC 13 Constitution saving throw or have the Poisoned condition for 1 hour.",
	descriptionFull: "This concoction looks, smells, and tastes like a Potion of Healing or another beneficial potion. However, it is actually poison masked by illusion magic. Identify reveals its true nature.\n If you drink this potion, you take 4d6 Poison damage and must succeed on a DC 13 Constitution saving throw or have the Poisoned condition for 1 hour.",
	weight: 0.5
};
MagicItemsList["potion of pugilism"] = {
	name: "Potion of Pugilism",
	source: [["D24", 289]],
	type: "potion",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "After you drink this potion, each Unarmed Strike you make deals an extra 1d6 Force damage on a hit. This effect lasts 10 minutes.",
	descriptionFull: "After you drink this potion, each Unarmed Strike you make deals an extra 1d6 Force damage on a hit. This effect lasts 10 minutes. This potion is a thick green fluid that tastes like spinach.",
	weight: 0.5
};
MagicItemsList["potion of resistance"] = {
	name: "Potion of Resistance",
	source: [["D24", 289]],
	type: "potion",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "When you drink this potion, you have Resistance to one type of damage for 1 hour. The DM chooses the type or determines it randomly by rolling on the following table.",
	descriptionFull: "When you drink this potion, you gain resistance to one type of damage for 1 hour. The DM chooses the type or determines it randomly from the options below.\n\n" + toUni("d10\tType\t\td10\tType") + "\n 1\tAcid\t\t 6\tNecrotic\n 2\tCold\t\t 7\tPoison\n 3\tFire\t\t 8\tPsychic\n 4\tForce\t\t 9\tRadiant\n 5\tLightning   \t 10\tThunder",
	weight: 0.5,
	allowDuplicates: true,
	choices : ["Acid", "Cold", "Fire", "Force", "Lightning", "Necrotic", "Poison", "Psychic", "Radiant", "Thunder"],
	choicesNotInMenu: true,
	"acid": {
		name: "Potion of Acid Resistance",
		description: "When you drink this potion, you gain resistance to acid damage for 1 hour."
	},
	"cold": {
		name: "Potion of Cold Resistance",
		description: "When you drink this potion, you gain resistance to cold damage for 1 hour."
	},
	"fire": {
		name: "Potion of Fire Resistance",
		description: "When you drink this potion, you gain resistance to fire damage for 1 hour."
	},
	"force": {
		name: "Potion of Force Resistance",
		description: "When you drink this potion, you gain resistance to force damage for 1 hour."
	},
	"lightning": {
		name: "Potion of Lightning Resistance",
		description: "When you drink this potion, you gain resistance to lightning damage for 1 hour."
	},
	"necrotic": {
		name: "Potion of Necrotic Resistance",
		description: "When you drink this potion, you gain resistance tonecrotic damage for 1 hour."
	},
	"poison": {
		name: "Potion of Poison Resistance",
		description: "When you drink this potion, you gain resistance topoison damage for 1 hour."
	},
	"psychic": {
		name: "Potion of Psychic Resistance",
		description: "When you drink this potion, you gain resistance topsychic damage for 1 hour."
	},
	"radiant": {
		name: "Potion of Radiant Resistance",
		description: "When you drink this potion, you gain resistance toradiant damage for 1 hour."
	},
	"thunder": {
		name: "Potion of Thunder Resistance",
		description: "When you drink this potion, you gain resistance tothunder damage for 1 hour."
	}
};
MagicItemsList["potion of speed"] = {
	name: "Potion of Speed",
	source: [["D24", 289]],
	type: "potion",
	rarity: "very rare",
	magicItemTable: "?",
	description: "When you drink this potion, you gain the effect of the Haste spell for 1 minute (no Concentration required) without suffering the wave of lethargy that typically occurs when the effect ends. The potion's yellow fluid is streaked with black and swirls on its own.",
	descriptionFull: "When you drink this potion, you gain the effect of the Haste spell for 1 minute (no Concentration required) without suffering the wave of lethargy that typically occurs when the effect ends. The potion's yellow fluid is streaked with black and swirls on its own.",
	weight: 0.5
};
MagicItemsList["potion of vitality"] = {
	name: "Potion of Vitality",
	source: [["D24", 289]],
	type: "potion",
	rarity: "very rare",
	magicItemTable: "?",
	description: "When you drink this potion, it removes any Exhaustion levels you have and ends the Poisoned condition on you. For the next 24 hours, you regain the maximum number of Hit Points for any Hit Point Die you spend. The potion's crimson liquid regularly pulses with dull light, calling to mind a heartbeat.",
	descriptionFull: "When you drink this potion, it removes any Exhaustion levels you have and ends the Poisoned condition on you. For the next 24 hours, you regain the maximum number of Hit Points for any Hit Point Die you spend. The potion's crimson liquid regularly pulses with dull light, calling to mind a heartbeat.",
	weight: 0.5
};
MagicItemsList["potion of water breathing"] = {
	name: "Potion of Water Breathing",
	source: [["D24", 289]],
	type: "potion",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "You can breathe underwater for 24 hours after drinking this potion. This potion’s cloudy green fluid smells of the sea and has a jellyfish-like bubble floating in it.",
	descriptionFull: "You can breathe underwater for 24 hours after drinking this potion. This potion’s cloudy green fluid smells of the sea and has a jellyfish-like bubble floating in it.",
	weight: 0.5,
};
MagicItemsList["pot of awakening"] = {
	name: "Pot of Awakening",
	source: [["D24", 289]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "If you plant an ordinary shrub in this 10-pound clay pot and let it grow for 30 days, the shrub magically transforms into an Awakened Shrub at the end of that time. When the shrub awakens, its roots break the pot, destroying it. The awakened shrub is friendly toward me. Absent commands from me, it does nothing.",
	descriptionFull: "If you plant an ordinary shrub in this 10-pound clay pot and let it grow for 30 days, the shrub magically transforms into an Awakened Shrub at the end of that time. When the shrub awakens, its roots break the pot, destroying it.\n   The awakened shrub is friendly toward you. Absent commands from you, it does nothing.",
	weight: 10
};
MagicItemsList["prosthetic limb"] = {
	name: "Prosthetic Limb",
	source: [["D24", 290]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "This magic item replaces a lost limb\u2014a hand, an arm, a foot, a leg, or a similar body part. While the prosthetic is attached, it functions identically to the part it replaces. You can detach or reattach it as a Magic action, and it can’t be removed against your will while you are alive.",
	descriptionFull: "This item replaces a lost limb\u2014a hand, an arm, a foot, a leg, or a similar body part. While the prosthetic is attached, it functions identically to the part it replaces. You can detach or reattach it as a Magic action, and it can't be removed against your will.",
	action: [["action", " (attach/detach)"]]
};
MagicItemsList["quaal's feather token"] = {
	name: "Quaal's Feather Token",
	nameAlt: "Feather Token",
	source: [["D24", 290]],
	type: "wondrous item",
	magicItemTable: "?",
	descriptionFull: "This tiny object looks like a feather. Different types of feather tokens exist, each with a different single-use effect. The DM chooses the kind of token or determines it randomly.\n\n" + toUni("d100\tToken\tRarity\td100\tToken\Rarity") +
		"\n01-20\tAnchor\tUncommon\t51-65\tSwan boat\tRare" +
		"\n21-35\tBird\tRare   \t66-90\tTree\tUncommon" +
		"\n36-50\tFan\tUncommon   \t91-00\tWhip\tRare",
	allowDuplicates: true,
	choices : ["Anchor (Uncommon)", "Bird (Rare)", "Fan (Uncommon)", "Swan Boat (Rare)", "Tree (Uncommon)", "Whip (Rare)"],
	"anchor (uncommon)": {
		description: "You can take a Magic action to touch the token to a boat or ship. For the next 24 hours, the vessel can’t be moved by any means. Touching the token to the vessel again ends the effect. When the effect ends, the token disappears.",
		descriptionFull: "You can take a Magic action to touch the token to a boat or ship. For the next 24 hours, the vessel can’t be moved by any means. Touching the token to the vessel again ends the effect. When the effect ends, the token disappears.",
		action: [["action", ""]]
	},
	"bird (rare)": {
		description: "You can take a Magic action to toss the token 5 feet into the air.The token disappears and an enormous, multicolored bird takes its place.The bird has the statistics of a Roc, but it can’t attack.It obeys your simple commands and can carry up to 500 pounds while flying at its maximum speed(16 miles per hour for a maximum of 144 miles per day, with a 1-hour rest for every 3 hours of flying) or 1,000 pounds at half that speed.The bird disappears after flying its maximum distance for a day or if it drops to 0 Hit Points.You can dismiss the bird as a Magic action.",
		descriptionFull: "You can take a Magic action to toss the token 5 feet into the air. The token disappears and an enormous, multicolored bird takes its place. The bird has the statistics of a Roc, but it can’t attack. It obeys your simple commands and can carry up to 500 pounds while flying at its maximum speed (16 miles per hour for a maximum of 144 miles per day, with a 1-hour rest for every 3 hours of flying) or 1,000 pounds at half that speed. The bird disappears after flying its maximum distance for a day or if it drops to 0 Hit Points. You can dismiss the bird as a Magic action.",
		action: [["action", " (use/dismiss)"]]
	},
	"fan (uncommon)": {
		description: "As a Magic action when I'm on a boat or ship, I can toss this token up to 10 ft in the air. The token disappears, and a giant flapping fan takes its place. The fan floats and creates a wind strong enough to fill the sails of one ship, increasing its speed by 5 miles per hour for 8 hours. I can dismiss the fan as an action.",
		descriptionFull: "This tiny object looks like a feather. If you are on a boat or ship, you can use a Magic action to toss the token up to 10 feet in the air. The token disappears, and a giant flapping fan takes its place. The fan floats and creates a wind strong enough to fill the sails of one ship, increasing its speed by 5 miles per hour for 8 hours. You can dismiss the fan as an action.",
		action: [["action", " (create/dismiss)"]]
	},
	"swan boat (rare)": {
		description: "You can take a Magic action to touch the token to a body of water at least 60 feet in diameter. The token disappears, and a 50-foot-long, 20-foot-wide boat shaped like a swan takes its place. The boat is self-propelled and moves across water at a speed of 6 miles per hour. You can take a Magic action while on the boat to command it to move or to turn up to 90 degrees. The boat remains for 24 hours and then disappears. You can dismiss the boat as a Magic action.",
		descriptionFull: "You can take a Magic action to touch the token to a body of water at least 60 feet in diameter. The token disappears, and a 50-foot-long, 20-foot-wide boat shaped like a swan takes its place. The boat is self-propelled and moves across water at a speed of 6 miles per hour. You can take a Magic action while on the boat to command it to move or to turn up to 90 degrees. The boat remains for 24 hours and then disappears. You can dismiss the boat as a Magic action.",
		action: [["action", " (create/dismiss)"]]
	},
	"tree (uncommon)": {
		description: "You must be outdoors to use this token. You can take a Magic action to touch it to an unoccupied space on the ground. The token disappears, and in its place a nonmagical oak tree springs into existence. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius.",
		descriptionFull: "You must be outdoors to use this token. You can take a Magic action to touch it to an unoccupied space on the ground. The token disappears, and in its place a nonmagical oak tree springs into existence. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius.",
		action: [["action", ""]]
	},
	"whip (rare)": {
		description: "You can take a Magic action to throw the token to a point within 10 feet of yourself. The token disappears, and a floating whip takes its place. You can then take a Bonus Action to make a melee spell attack against a creature within 10 feet of the whip, with an attack bonus of +9. On a hit, the target takes 1d6 + 5 Force damage.\n As a Bonus Action, you can direct the whip to fly up to 20 feet and repeat the attack against a creature within 10 feet of the whip. The whip disappears after 1 hour, when you take a Magic action to dismiss it, or when you die or have the Incapacitated condition.",
		descriptionFull: "You can take a Magic action to throw the token to a point within 10 feet of yourself. The token disappears, and a floating whip takes its place. You can then take a Bonus Action to make a melee spell attack against a creature within 10 feet of the whip, with an attack bonus of +9. On a hit, the target takes 1d6 + 5 Force damage.\n As a Bonus Action, you can direct the whip to fly up to 20 feet and repeat the attack against a creature within 10 feet of the whip. The whip disappears after 1 hour, when you take a Magic action to dismiss it, or when you die or have the Incapacitated condition.",
		action: [["action", " (create)"], ["bonus action", " (direct)"], ["bonus action", " (whip melee"]],
	},
};
MagicItemsList["quarterstaff of the acrobat"] = {
	name: "Quarterstaff of the Acrobat",
	source: [["D24", 279]],
	type: "weapon (quarterstaff)",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This magic quarterstaff adds a +2 bonus to attack and damage rolls made with it. While holding this weapon, I can emit a dim green light (10ft) as a Bonus Action or after you roll Initiative and can extinguish the light as a Bonus Action. You can take a Bonus Action to alter its form, tunring it into a 6-inch rod or 10-foot pole, or revert it back to its Quarterstaff form.",
	descriptionFull: "This magic weapon adds a +2 bonus to attack and damage rolls made with it. While holding this weapon, I can emit a dim green light (10ft) as a Bonus Action or after initiative and can extinguish the light as a Bonus Action.\n" +
		"\n While holding this weapon, you can take a Bonus Action to alter its form, turning it into a 6-inch rod (for ease of storage) or a 10-foot pole, or reverting it a Quarterstaff; the weapon will elongate only as far as the surrounding space allows." +
		"\n In certain forms, the weapon has the following additional properties." + toUni("Acrobatic Assist - Quarterstaff or 10ft Pole") + "While holding this weapon, you have Advantage on Dex (Acrobatics) checks." + toUni("Attack Deflection - Quarterstaff") + "When you are hit by an attack while holding the weapon, you can take a Reaction to twirl the weapon around you, gaining +5 bonus to your AC against a triggering attack, potentially causing the attack to miss you. You can't use this propety again until you finish a Short or Long Rest." + toUni("Ranged Weapon - Quarterstaff") + "This weapon has the Thrown property with a normal range of 30 feet and a long range of 120 feet. Immediately after you make a ranged attack with the weapon, it flies back to your hand.",
	attunement: true,
	weight: 4,
	modifers: [2, 2],
	action: [["bonus action", "Dim Light/Extinguish Light"], ["bonus action", "Transform Staff"], ["reaction", "Attack Deflection (+5AC)"]],
	savetxt: { adv_vs: ["Acrobatics"] },
	weaponOptions: [{
		baseWeapon: "quarterstaff",
		regExpSearch: /^(?=.*acrobat)(?=.*quarterstaff).*$/i,
		name: "Quarterstaff of the Acrobat",
		source: [["D24", 279]],
		description: "Versatile (1d8); Thrown, Returning; Magical",
		isMagical: true,
		selectNow: true,
	}],
	toNotesPage: [{
		name: "Quartstaff of the Acrobat",
		note: [
			"You gain a +2 bonus to attack rolls and damage rolls with this magic weapon. While holding this weapon, you an cause it to emit green Dim Light out to 10 feet, either as a Bonus Action or after you roll initiative, or you can extinguish the light as a Bonus Action.",
			"\n While holding this weapon, you can take a Bonus Action to alter its form, turning it into a 6-inch rod (for storage) or a 10-foot pole, or reverting it to a Quarterstaff; the weapon will elongate only as far as surrounding space allows.",
			"\n In certain forms, the weapon has the following additional properties:",
			"\u2022 Acrobatic Assist: Quarterstaff or 10-foot Pole Forms Only. While holding this weapon, you have advantage on Dex (Acrobatics) checks.",
			"\u2022 Attack Deflection: Quarterstaff form only. When you are hit by an attack while holding the weapon, you can take a Reaction to twirl the weapon around you, gaining +5 AC against a triggering attack, potentially causing the attack to miss you. You can't use this property again until you finish a Short or Long rest.",
			"\u2022 Ranged Weapon: Quarterstaff form only. This weapon has the >>Thrown<< property with a normal range of 30 feet and a long range of 120 feet. Immediately after you make a ranged attack, it flies back to your hand.",
		]
	}],
};
MagicItemsList["quiver of ehlonna"] = {
	name: "Quiver of Ehlonna",
	nameAlt: "Efficient Quiver",
	source: [["D24", 291]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "This quiver has three compartments and weighs 2 lb, regardless of its contents. Its shortest compartment can hold 60 arrows, bolts, or similar objects. Its midsize compartment holds up to 18 javelins or similar objects. Its longest compartment holds up to 6 long objects, such as bows, quarterstaffs, or spears.",
	descriptionFull: "Each of the quiver's three compartments connects to an extradimensional space that allows the quiver to hold numerous items while never weighing more than 2 pounds. The shortest compartment can hold up to sixty arrows, bolts, or similar objects. The midsize compartment holds up to eighteen javelins or similar objects. The longest compartment holds up to six long objects, such as bows, quarterstaffs, or spears.\n   You can draw any item the quiver contains as if doing so from a regular quiver or scabbard.",
	weight: 2
};
MagicItemsList["ring of animal influence"] = {
	name: "Ring of Animal Influence",
	source: [["D24", 292]],
	type: "ring",
	rarity: "rare",
	description: "This ring has 3 charges, and regains 1d3 expended charges daily at dawn. While wearing the ring, you can expend 1 charge to cast Animal Friendship, Fear (affect Beasts only), Speak with Animals using a DC13 spell save.",
	descriptionFull: "This ring has 3 charges, and regains 1d3 expended charges daily at dawn. While wearing the ring, you can expend 1 charge to cast Animal Friendship, Fear (affect Beasts only), Speak with Animals using a DC13 spell save.",
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	fixedDC: 13,
	spellFirstColTitle: "Ch",
	spellcastingBonus: {
		name: "1 charge",
		spells: ["animal friendship", "fear", "speak with animals"],
		selection: ["animal friendship", "fear", "speak with animals"],
		firstCol: 1,
		times: 3
	},
	spellChanges: {
		"fear": {
			description: "All Beasts in a 30-foot Cone Wisdom save or drop held items and Frightened; Dash away; extra Wisdom save at end of turn if no line of sight",
			changes: "affects Beasts only",
		},
	},
};
MagicItemsList["ring of djinni summoning"] = {
	name: "Ring of Djinni Summoning",
	source: [["D24", 292]],
	type: "ring",
	rarity: "legendary",
	magicItemTable: "?",
	description: "As a Magic action, you can summon a Djinni within 120 ft, remaining while I Concentrate, up to 1 hour. After that time, I can't summon it for 24 hours. It is friendly to me and my allies, obeys my commands, but takes no actions if not commanded to. The ring loses its magic If the Djinni dies.",
	descriptionFull: "While wearing this ring, you can take a Magic action to summon a particular Djinni from the Elemental Plane of Air. The Djinni appears in an unoccupied space you choose within 120 feet of yourself. It remains as long as you maintain Concentration, to a maximum of 1 hour, or until it drops to 0 Hit Points.\n While summoned, the Djinni is Friendly to you and your allies, and it obeys your commands. If you fail to command it, the Djinni defends itself against attackers but takes no other actions.\n After the Djinni departs, it can’t be summoned again for 24 hours, and the ring becomes nonmagical if the Djinni dies.\n Rings of Djinni Summoning are often created by the Djinn they summon and given to mortals as gifts of friendship or tokens of esteem.",
	attunement: true,
	usages: 1,
	recovery: "24 hours"
};
MagicItemsList["ring of elemental command"] = {
	name: "Ring of Elemental Command",
	source: [["D24", "-"]],
	type: "ring",
	rarity: "legendary",
	magicItemTable: "?",
	description: "Select one of the four types of this ring, with each type being linked to one of the four Elemental Planes. Each Ring has Advantage on attack rolls against Elementals and they have Disadvatage on attack rolls against you, you can take a Magic action to try to compel an Elemental within 60 ft/ DC 18 WIS save; Charmed on fail.",
	descriptionFull: "This ring is linked to one of the four Elemental Planes. The GM chooses or randomly determines the linked plane.\n While wearing this ring, you have advantage on attack rolls against Elementals, and they have disadvantage on attack rolls against you. You can take a Magic action to try to compel an Elemental you see within 60-feet. The Elemental must make a DC18 WIS save or it has the Charmed condition until the start of your next turn. You determine its move and action on its next turn.\n In addition, you have access to properties based on the linked plane. The ring has 5 charges. It regains 1d4 + 1 expended charges daily at dawn. Spells cast from the ring have a save DC of 18.",
	attunement: true,
	allowDuplicates: true,
	action: ["action", "Compel Elemental"],
	usages: 5,
	recovery: "dawn",
	additional: "regains 1d4+1",
	choices : ["air", "earth", "fire", "water"],
	"air": {
		name: "Ring of Elemental Command (Air)",
		sortname: "Ring of Elemental Command, Air",
		description: "This ring has 5 charges and regains 1d4+1 daily at dawn. It grants you Advantage on attacks vs. Elementals and they have Disadvantage vs. you. You can cast Feather Fall, Wind Wall (1 Charge), Gust of Wind (2 Charges), and Chain Lighting (3 Charges). You have Resistance to Lightning damage. My Fly Speed equals my walking Speed and I can hover. I also know Auran.",
		descriptionFull: "This ring has 5 charges and regains 1d4+1 daily at dawn. It grants you Advantage on attacks vs. Elementals and they have Disadvantage vs. you. You can cast Feather Fall, Wind Wall (1 Charge), Gust of Wind (2 Charges), and Chain Lighting (3 Charges). You have Resistance to Lightning damage. My Fly Speed equals my walking Speed and I can hover. I also know Auran.",
		languageProfs: ["auran"],
		dmgres: ["lightning"],
		speed: { fly: { spd: "walk", enc: "walk" } },
		fixedDC: 18,
		spellFirstColTitle: "Ch",
		spellcastingBonus: [{
			name: "0 charges",
			spells: ["feather fall"],
			selection: ["feather fall"],
			firstCol: 0,
		}, {
			name: "1 charge",
			spells: ["wind wall"],
			selection: ["wind wall"],
			firstCol: 1,
		}, {
			name: "2 charges",
			spells: ["gust of wind"],
			selection: ["gust of wind"],
			firstCol: 2,
		}, {
			name: "3 charges",
			spells: ["chain lightning"],
			selection: ["chain lightning"],
			firstCol: 3,
		}],
		toNotesPage: [
			"Each Ring of Elemental Command is linked to one of the four Elemental Planes. The DM chooses or randomly determines the linked plane. For example, a Ring of Elemental Command (air) is linked to the Elemental Plane of Air.\n" +
			"Every Ring of Elemental Command has the following two properties:\n" +
			toUni("Elemental Bane") + ". While wearing the ring, you have Advantage on attack rolls against Elementals and they have Disadvantage on attack rolls against you.\n" +
			toUni("Elemental Compulsion") + ". While wearing the ring, you can take a Magic action to try to compel an Elemental you see within 60 feet of yourself. The Elemental makes a DC 18 Wisdom saving throw. On a failed save, the Elemental has the Charmed condition until the start your next turn, and you determine what it does with its move and action on its next turn.\n" +
			toUni("Elemental Focus") + ". While wearing the ring, you benefit from additional properties corresponding to the ring's linked Elemental Plane:\n" +
			"\u2022" + toUni("Air") + ". You know Auran, you have Resistance to Lightning damage, and you have a Fly Speed equal to your Speed and can hover.",
		],
	},
	"earth": {
		name: "Ring of Elemental Command (Earth)",
		sortname: "Ring of Elemental Command, Earth",
		description: "This ring has 5 charges and regains 1d4+1 daily at dawn. It grants you Advantage on attacks vs. Elementals and they have Disadvantage vs. you. You can cast Stone Shape (2 Charges), Stone Skin & Wall of Stone (3 Charges), Earthquake (5 Charges). You have Resistance to Acid damage. You can move through solid earth, rock, rocks are not Difficult Terrain for you and without disturbing the areas I pass. I also know Terran.",
		descriptionFull: "This ring has 5 charges and regains 1d4+1 daily at dawn. It grants you Advantage on attacks vs. Elementals and they have Disadvantage vs. you. You can cast Stone Shape (2 Charges), Stone Skin & Wall of Stone (3 Charges), Earthquake (5 Charges). You have Resistance to Acid damage. You can move through solid earth, rock, rocks are not Difficult Terrain for you and without disturbing the areas I pass. I also know Terran.",
		languageProfs: ["terran"],
		dmgres: ["acid"],
		fixedDC: 18,
		spellFirstColTitle: "Ch",
		spellcastingBonus: [{
			name: "2 charges",
			spells: ["stone shape"],
			selection: ["stone shape"],
			firstCol: 2,
		}, {
			name: "3 charges",
			spells: ["stoneskin", "wall of stone"],
			selection: ["stoneskin", "wall of stone"],
			times: 2,
			firstCol: 3,
		}, {
			name: "5 charges",
			spells: ["earthquake"],
			selection: ["earthquake"],
			firstCol: 5,
		}],
		toNotesPage: [
			"Each Ring of Elemental Command is linked to one of the four Elemental Planes. The DM chooses or randomly determines the linked plane. For example, a Ring of Elemental Command (Air) is linked to the Elemental Plane of Air.\n" +
			"Every Ring of Elemental Command has the following two properties:\n" +
			toUni("Elemental Bane") + ". While wearing the ring, you have Advantage on attack rolls against Elementals and they have Disadvantage on attack rolls against you.\n" +
			toUni("Elemental Compulsion") + ". While wearing the ring, you can take a Magic action to try to compel an Elemental you see within 60 feet of yourself. The Elemental makes a DC 18 Wisdom saving throw. On a failed save, the Elemental has the Charmed condition until the start your next turn, and you determine what it does with its move and action on its next turn.\n" +
			toUni("Elemental Focus") + ". While wearing the ring, you benefit from additional properties corresponding to the ring's linked Elemental Plane:\n" +
			"\u2022" + toUni("Earth") + ". You know Terran, and you have Resistance to Acid damage. Terrain composed of rubble, rocks, or dirt isn’t Difficult Terrain for you. In addition, you can move through solid earth or rock as if those areas were Difficult Terrain without disturbing the matter through which you pass. If you end your turn in solid earth or rock, you are shunted out to the nearest unoccupied space you last occupied.",
		],
	},
	"fire": {
		name: "Ring of Elemental Command (Fire)",
		sortname: "Ring of Elemental Command, Fire",
		description: "This ring has 5 charges and regains 1d4+1 daily at dawn. It grants me adv. on attacks vs. elementals aand they have disadv. vs. me. I can cast Burning Hands (1 Charge), Fireball (2 Charges), Wall of Fire (3 Charges), and Fire Storm (4 Charges). I have immunity to Fire damage. I also know Ignan.",
		descriptionFull: "This ring has 5 charges and regains 1d4+1 daily at dawn. It grants me adv. on attacks vs. elementals aand they have disadv. vs. me. I can cast Burning Hands (1 Charge), Fireball (2 Charges), Wall of Fire (3 Charges), and Fire Storm (4 Charges). I have immunity to Fire damage. I also know Ignan.",
		languageProfs: ["ignan"],
		savetxt: { immune: ["fire"] },
		fixedDC: 18,
		spellFirstColTitle: "Ch",
		spellcastingBonus: [{
			name: "1 charge",
			spells: ["burning hands"],
			selection: ["burning hands"],
			firstCol: 1,
		}, {
			name: "2 charges",
			spells: ["fireball"],
			selection: ["fireball"],
			firstCol: 2,
		}, {
			name: "3 charges",
			spells: ["wall of fire"],
			selection: ["wall of fire"],
			firstCol: 3,
		}, {
			name: "4 charges",
			spells: ["fire storm"],
			selection: ["fire storm"],
			firstCol: 4,
		}],
		toNotesPage: [
			"Each Ring of Elemental Command is linked to one of the four Elemental Planes. The DM chooses or randomly determines the linked plane. For example, a Ring of Elemental Command (air) is linked to the Elemental Plane of Air.\n" +
			"Every Ring of Elemental Command has the following two properties:\n" +
			toUni("Elemental Bane") + ". While wearing the ring, you have Advantage on attack rolls against Elementals and they have Disadvantage on attack rolls against you.\n" +
			toUni("Elemental Compulsion") + ". While wearing the ring, you can take a Magic action to try to compel an Elemental you see within 60 feet of yourself. The Elemental makes a DC 18 Wisdom saving throw. On a failed save, the Elemental has the Charmed condition until the start your next turn, and you determine what it does with its move and action on its next turn.\n" +
			toUni("Elemental Focus") + ". While wearing the ring, you benefit from additional properties corresponding to the ring's linked Elemental Plane:\n" +
			"\u2022" + toUni("Fire") + ". You know Ignan, and you have Immunity to Fire damage.",
		],
	},
	"water": {
		name: "Ring of Elemental Command (Water)",
		sortname: "Ring of Elemental Command, Water",
		description: "This ring has 5 charges and regains 1d4+1 daily at dawn. It grants me adv. on attacks vs. elementals aand they have disadv. vs. me. I can cast Create or Destroy Water (1 Charge), Ice Storm & Water Walk (2 Charges), Wall of Ice (3 Charges), and Tsunami (5 Charges). I gain a Swim Speed of 60 feet and can breathe underwater. I also know Aquan.",
		descriptionFull: "This ring has 5 charges and regains 1d4+1 daily at dawn. It grants me adv. on attacks vs. elementals aand they have disadv. vs. me. I can cast Burning Hands (1 Charge), Fireball (2 Charges), Wall of Fire (3 Charges), and Fire Storm (4 Charges). I have immunity to Fire damage. I also know Ignan.",
		languageProfs: ["aquan"],
		savetxt: { text: 'I can breathe underwater' },
		speed: { swim: 60 },
		fixedDC: 18,
		spellFirstColTitle: "Ch",
		spellcastingBonus: [{
			name: "1 charge",
			spells: ["create or destroy water"],
			selection: ["create or destroy water"],
			firstCol: 1,
		}, {
			name: "2 charges",
			spells: ["icestorm", "water walk"],
			selection: ["icestorm", "water walk"],
			times: 2,
			firstCol: 2,
		}, {
			name: "3 charges",
			spells: ["wall of ice"],
			selection: ["wall of ice"],
			firstCol: 3,
		}, {
			name: "5 charges",
			spells: ["tsunami"],
			selection: ["tsunami"],
			firstCol: 5,
		}],
		toNotesPage: [
			"Each Ring of Elemental Command is linked to one of the four Elemental Planes. The DM chooses or randomly determines the linked plane. For example, a Ring of Elemental Command (air) is linked to the Elemental Plane of Air.\n" +
			"Every Ring of Elemental Command has the following two properties:\n" +
			toUni("Elemental Bane") + ". While wearing the ring, you have Advantage on attack rolls against Elementals and they have Disadvantage on attack rolls against you.\n" +
			toUni("Elemental Compulsion") + ". While wearing the ring, you can take a Magic action to try to compel an Elemental you see within 60 feet of yourself. The Elemental makes a DC 18 Wisdom saving throw. On a failed save, the Elemental has the Charmed condition until the start your next turn, and you determine what it does with its move and action on its next turn.\n" +
			toUni("Elemental Focus") + ". While wearing the ring, you benefit from additional properties corresponding to the ring's linked Elemental Plane:\n" +
			"\u2022" + toUni("Water") + ". You know Aquan, you gain a Swim Speed of 60 feet, and you can breathe underwater.",
		],
	},
};
MagicItemsList["ring of evasion"] = {
	name: "Ring of Evasion",
	source: [["D24", 293]],
	type: "ring",
	rarity: "rare",
	magicItemTable: "?",
	description: "This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. As you reaction when I fail a Dexterity saving throw while wearing it, you can expend 1 of its charges to succeed on that saving throw instead.",
	descriptionFull: "This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. When you fail a Dexterity saving throw while wearing it, you can use your reaction to expend 1 of its charges to succeed on that saving throw instead.",
	attunement: true,
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	action: [["reaction", ""]]
};
MagicItemsList["ring of feather falling"] = {
	name: "Ring of Feather Falling",
	source: [["D24", 293]],
	type: "ring",
	rarity: "rare",
	magicItemTable: "?",
	description: "When I fall while wearing this ring, I descend 60 ft per round and take no damage from falling.",
	descriptionFull: "When you fall while wearing this ring, you descend 60 feet per round and take no damage from falling.",
	attunement: true
};
MagicItemsList["ring of free action"] = {
	name: "Ring of Free Action",
	source: [["D24", 293]],
	type: "ring",
	rarity: "rare",
	magicItemTable: "?",
	description: "While you wear this ring, Difficult Terrain doesn’t cost you extra movement. In addition, magic can neither reduce any of your Speeds nor cause you to have the Paralyzed or Restrained condition.",
	descriptionFull: "While you wear this ring, Difficult Terrain doesn’t cost you extra movement. In addition, magic can neither reduce any of your Speeds nor cause you to have the Paralyzed or Restrained condition.",
	attunement: true,
	savetxt: { immune: ["paralyzed (by magic)", "restrained (by magic)"] }
};
MagicItemsList["ring of invisibility"] = {
	name: "Ring of Invisibility",
	source: [["D24", 293]],
	type: "ring",
	rarity: "legendary",
	magicItemTable: "?",
	description: "While wearing this ring, you can take a Magic action to give yourself the Invisible condition. You remain Invisible until the ring is removed or until you take a Bonus Action to become visible again.",
	descriptionFull: "While wearing this ring, you can take a Magic action to give yourself the Invisible condition. You remain Invisible until the ring is removed or until you take a Bonus Action to become visible again.",
	attunement: true,
	action: [["action", " (start)"], ["Bonus action", " (stop)"]]
};
MagicItemsList["ring of jumping"] = {
	name: "Ring of Jumping",
	source: [["D24", 293]],
	type: "ring",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While wearing this ring, you can cast Jump from it, but can target only yourself when you do so. This causes my Jump distance to triple for 1 minute.",
	descriptionFull: "While wearing this ring, you can cast Jump from it, but can target only yourself when you do so.",
	attunement: true,
	spellcastingBonus: {
		name: "Self Only",
		spells: ["jump"],
		selection: ["jump"],
		firstCol: "atwill"
	},
	spellChanges: {
		"jump": {
			time: "1 bns",
			range: "Self",
			changes: "The casting time is only a Bonus action instead of an action and it can only affect the wearer."
		}
	}
};
MagicItemsList["ring of mind shielding"] = {
	name: "Ring of Mind Shielding",
	source: [["D24", 293]],
	type: "ring",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "This ring makes you immune to magic that allows others to read my thoughts, determine if lying, know my alignment or creature type. Telepathy only works if I allow it. As a Magic action, I can cause it to become imperceptible as long as I wear it and not die, or perceptible again. If I die while wearing it, my soul enters it.",
	descriptionFull: "While wearing this ring, you are immune to magic that allows other creatures to read your thoughts, determine whether you are lying, know your alignment, or know your creature type. Creatures can telepathically communicate with you only if you allow it.\n   You can use Magic action to cause the ring to become imperceptible until you use another action to make it perceptible, until you remove the ring, or until you die.\n   If you die while wearing the ring, your soul enters it, unless it already houses a soul. You can remain in the ring or depart for the afterlife. As long as your soul is in the ring, you can telepathically communicate with any creature wearing it. A wearer can't prevent this telepathic communication.",
	attunement: true,
	action: [["action", " (im)perceptible"]],
	savetxt: { immune: ["magic reading my thoughts, truthfullness, alignment, or type"] }
};
MagicItemsList["ring of protection"] = {
	name: "Ring of Protection",
	source: [["D24", 294]],
	type: "ring",
	rarity: "rare",
	magicItemTable: "?",
	description: "You gain a +1 bonus to AC and saving throws while wearing this ring.",
	descriptionFull: "You gain a +1 bonus to AC and saving throws while wearing this ring.",
	attunement: true,
	extraAC: [{ name: "Ring of Protection", mod: 1, magic: true, text: "+1 bonus to AC." }],
	addMod: [{ type: "save", field: "all", mod: 1, text: "+1 to ALL saving throws." }]
};
MagicItemsList["ring of regeneration"] = {
	name: "Ring of Regeneration",
	source: [["D24", 294]],
	type: "ring",
	rarity: "very rare",
	magicItemTable: "?",
	description: "While wearing this ring, you regain 1d6 Hit Points every 10 minutes if you have at least 1 Hit Point. If you lose a body part, the ring causes the missing part to regrow and return to full functionality after 1d6 + 1 days if you have at least 1 Hit Point the whole time.",
	descriptionFull: "While wearing this ring, you regain 1d6 Hit Points every 10 minutes if you have at least 1 Hit Point. If you lose a body part, the ring causes the missing part to regrow and return to full functionality after 1d6 + 1 days if you have at least 1 Hit Point the whole time.",
	attunement: true
};
MagicItemsList["ring of resistance"] = {
	name: "Ring of Resistance",
	source: [["D24", 294]],
	type: "ring",
	rarity: "rare",
	magicItemTable: "?",
	description: "You have Resistance to one damage type while wearing this ring. The gem in the ring indicates the type of damage.",
	descriptionFull: "You have Resistance to one damage type while wearing this ring. The gem in the ring indicates the type, which the GM chooses or determines randomly.\n\n" + toUni("d10\tDamage Type\tGem") +
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
	attunement: false,
	choices : ["Acid", "Cold", "Fire", "Force", "Lightning", "Necrotic", "Poison", "Psychic", "Radiant", "Thunder"],
	choicesNotInMenu: true,
	"acid": {
		name: "Ring of Acid Resistance",
		description: "While wearing this ring set with a Pearl, you have resistance to acid damage.",
		dmgres: ["Acid"]
	},
	"cold": {
		name: "Ring of Cold Resistance",
		description: "While wearing this ring set with a Tourmaline, you have resistance to cold damage.",
		dmgres: ["Cold"]
	},
	"fire": {
		name: "Ring of Fire Resistance",
		description: "While wearing this ring set with a Garnet, you have resistance to fire damage.",
		dmgres: ["Fire"]
	},
	"force": {
		name: "Ring of Force Resistance",
		description: "While wearing this ring set with a Sapphire, you have resistance to force damage.",
		dmgres: ["Force"]
	},
	"lightning": {
		name: "Ring of Lightning Resistance",
		description: "While wearing this ring set with a Citrine, you have resistance to lightning damage.",
		dmgres: ["Lightning"]
	},
	"necrotic": {
		name: "Ring of Necrotic Resistance",
		description: "While wearing this ring set with Jet, you have resistance to necrotic damage.",
		dmgres: ["Necrotic"]
	},
	"poison": {
		name: "Ring of Poison Resistance",
		description: "While wearing this ring set with an Amethyst, you have resistance to poison damage.",
		dmgres: ["Poison"]
	},
	"psychic": {
		name: "Ring of Psychic Resistance",
		description: "While wearing this ring set with Jade, you have resistance to psychic damage.",
		dmgres: ["Psychic"]
	},
	"radiant": {
		name: "Ring of Radiant Resistance",
		description: "While wearing this ring set with a Topaz, you have resistance to radiant damage.",
		dmgres: ["Radiant"]
	},
	"thunder": {
		name: "Ring of Thunder Resistance",
		description: "While wearing this ring set with a Spinel, you have resistance to thunder damage.",
		dmgres: ["Thunder"]
	}
};
// add spells for ring of shooting stars that are not in the spell lists
SpellsList["lightning spheres"] = {
	name: "Lightning Spheres",
	level: "2",
	school: "Conj",
	time: "1 a",
	range: "120 ft",
	components: "M\u0192",
	compMaterial: "Spells cast by magic items don't require any components other than the magic item itself.",
	duration: "Conc, 1 min",
	save: "Dex",
	description: "1-4 spheres; bns a move all 30 ft; 1st crea in 5 ft save or Lightning dmg (1:4d12, 2:5d4, 3:2d6, 4:2d4)",
	descriptionFull: "You can expend 2 charges from the Ring of Shooting Stars as a Magic action to create one to four 3-foot-diameter spheres of lightning. The more spheres you create, the less powerful each sphere is individually.\n   Each sphere appears in an unoccupied space you can see within 120 feet of you. The spheres last as long as you concentrate (as if concentrating on a spell), up to 1 minute. Each sphere sheds dim light in a 30-foot radius.\n   As a Bonus action, you can move each sphere up to 30 feet, but no farther than 120 feet away from you. When a creature other than you comes within 5 feet of a sphere, the sphere discharges lightning at that creature and disappears. That creature must make a DC 15 Dexterity saving throw. On a failed save, the creature takes lightning damage based on the number of spheres you created (1 sphere = 4d12, 2 spheres = 5d4, 3 spheres = 2d6, 4 sphere = 2d4).",
};
SpellsList["shooting stars"] = {
	name: "Shooting Stars",
	level: "0",
	school: "Evoc",
	time: "1 a",
	range: "60 ft",
	components: "M\u0192",
	compMaterial: "Spells cast by magic items don't require any components other than the magic item itself.",
	save: "Dex",
	duration: "Instantaneous",
	description: "15ft cube in range per expended charge; all crea in cube Dex save or 5d4 Radiant damage, save halves",
	descriptionFull: "You can expend 1 to 3 charges from the ring of shooting starts as an action. For every charge you expend, you launch a glowing mote of light from the ring at a point you can see within 60 feet of you. Each creature within a 15-foot cube originating from that point is showered in sparks and must make a DC 15 Dexterity saving throw, taking 5d4 fire damage on a failed save, or half as much damage on a successful one.",
};
MagicItemsList["ring of shooting stars"] = {
	name: "Ring of Shooting Stars",
	source: [["D24", 294]],
	type: "ring",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This ring has 6 charges and it regains 1d6 expended charges daily at dawn. You can cast Dancing Lights and Light at will. You can expend charges to cast Faerie Fire (1 Charge), Lightning Spheres (2 Charges / Magic action), or Shooting Stars (1-3 Charges / Magic Action). All spells DC 15.",
	descriptionFull: "You can cast Dancing Lights or Light from the ring.  ring has 6 charges and regains 1d6 expended charges daily at dawn.\n" +
		toUni("Faerie Fire") + ". You can expend 1 charge as an action to cast Faerie Fire from the ring.\n   " + toUni("Lightning Spheres") + ". You can expend 2 charges as a Magic action to create up to four 3-foot-diameter spheres of lightning.\n " + "Each sphere appears in an unoccupied space you can see within 120 feet of yourself. The spheres last as long as you maintain Concentration, up to 1 minute. Each sphere sheds Dim Light in a 30-foot radius.\n" +
		"As a Bonus Action, you can move each sphere up to 30 feet, but no farther than 120 feet away from yourself. The first time the sphere comes within 5 feet of a creature other than you that isn’t behind Total Cover, the sphere discharges lightning at that creature and disappears. That creature makes a DC 15 Dexterity saving throw. On a failed save, the creature takes Lightning damage based on the number of spheres you created, as shown in the following table. On a successful save, the creature takes half as much damage.\n" +
		"\tNumber of Spheres\tLightning Damage\n " +
		"\t1\t4d12\n " +
		"\t2\t5d4\n " +
		"\t3\t2d6\n " +
		"\t4\t2d4\n " +
		toUni("Shooting Stars") + ". You can expend 1 to 3 charges as a Magic action. For every charge you expend, you launch a glowing mote of light from the ring at a point you can see within 60 feet of yourself. Each creature in a 15-foot Cube originating from that point is showered in sparks and makes a DC 15 Dexterity saving throw, taking 5d4 Radiant damage on a failed save or half as much damage on a successful one.",
	attunement: true,
	toNotesPage: [{
		name: "Lightning Spheres",
		page3notes: true,
		additional: "2 charges",
		note: [
			"As a Magic action, I can create 1-4 spheres of lightning of 3-ft diameter within 120 ft",
			"These last while I concentrate, up to 1 min; As a Bonus action, I can move them 30 ft",
			"When a creature (not me) comes within 5 ft of a sphere, it discharges and disappears",
			"The target must make a DC 15 Dex save or take lightning damage",
			"A sphere sheds dim light in 30-ft radius, its damage depends on the number created:",
			" \u2022 1 sphere: 4d12;    \u2022 2 spheres: 5d4;    \u2022 3 spheres: 2d6;    \u2022 4 spheres: 2d4"
		]
	}, {
		name: "Shooting Stars",
		page3notes: true,
		additional: "1-3 charges",
		note: [
			"As a Magic action, I can launch one mote of light per expended charge to a point within 60 ft",
			"All creatures within a 15-ft cube originating from those points take 5d4 \Radiant\ damage",
			"The targets can make a DC 15 Dexterity saving throw to halve the damage"
		]
	}],
	usages: 6,
	recovery: "dawn",
	additional: "regains 1d6",
	fixedDC: 15,
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "At will",
		spells: ["dancing lights", "light"],
		selection: ["dancing lights", "light"],
		firstCol: "atwill",
		times: 2
	}, {
		name: "1 charge",
		spells: ["faerie fire"],
		selection: ["faerie fire"],
		firstCol: 1
	}, {
		name: "Lighting Spheres (2 chr)",
		spells: ["lightning spheres"],
		selection: ["lightning spheres"],
		firstCol: 2
	}, {
		name: "Shooting stars (1-3 chr)",
		spells: ["shooting stars"],
		selection: ["shooting stars"],
		firstCol: "1+"
	}]
};
MagicItemsList["ring of spell storing"] = { // contains contributions by Fourleafclov
	name: "Ring of Spell Storing",
	source: [["D24", 295]],
	type: "ring",
	rarity: "rare",
	magicItemTable: "?",
	description: "This ring can hold up to 5 levels of spell slots. Any creature can cast a spell into the ring using a 1-5th level spell slot, which is then stored if there is space. You can cast stored spells from the ring, freeing up space, using the original caster's attack bonus, save DC, spellcasting ability score, and the initial spell slot level.",
	descriptionFull: "This ring stores spells cast into it, holding them until the attuned wearer uses them. The ring can store up to 5 levels worth of spells at a time. When found, it contains 1d6-1 levels of stored spells chosen by the DM.\n   Any creature can cast a spell of 1st through 5th level into the ring by touching the ring as the spell is cast. The spell has no effect, other than to be stored in the ring. If the ring can't hold the spell, the spell is expended without effect. The level of the slot used to cast the spell determines how much space it uses.\n   While wearing this ring, you can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The spell cast from the ring is no longer stored in it, freeing up space.",
	attunement: true,
	usages: "5 lvls",
	recovery: " Cast"
};
MagicItemsList["ring of spell turning"] = {
	name: "Ring of Spell Turning",
	source: [["D24", 295]],
	type: "ring",
	rarity: "legendary",
	magicItemTable: "?",
	description: "While wearing this ring, you have Advantage on saving throws against spells. If I succeed on the save of a spell level 7 or lower, the spell has no effect on me. If you were the only target, and it didn't create an area of affect, I can take a Reaction to deflect the spell back to the caster; against their own spell save DC.",
	descriptionFull: "While wearing this ring, you have Advantage on saving throws against spells. If you succeed on the save for a spell of level 7 or lower, the spell has no effect on you. If that spell targeted only you and didn’t create an area of effect, you can take a Reaction to deflect the spell back at the spell’s caster; the caster must make a saving throw against the spell using their own spell save DC.",
	attunement: true,
	savetxt: { adv_vs: ["spells"] }
};
MagicItemsList["ring of swimming"] = {
	name: "Ring of Swimming",
	source: [["D24", 295]],
	type: "ring",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "I have a swimming speed of 40 feet while wearing this ring.",
	descriptionFull: "You have a swimming speed of 40 feet while wearing this ring.",
	speed: { swim: { spd: "fixed 40", enc: "fixed 30" } }
};
MagicItemsList["ring of telekinesis"] = {
	name: "Ring of Telekinesis",
	source: [["D24", 295]],
	type: "ring",
	rarity: "very rare",
	magicItemTable: "?",
	description: "While wearing this ring, you can cast Telekinesis from it. After casting the spell, and as a Magic action you can exert my will on one creature or object you can see within 60 ft.",
	descriptionFull: "hile wearing this ring, you can cast Telekinesis from it. After casting the spell, and as a Magic action you can exert you will on one creature or object you can see within 60 ft. You can affect the same target, or choose a new one. You can try to move a creature Huge or smaller, the target must make a Strength save or it moves 30 feet in any direction within range, and the target is Restrained. If lifted in the air, it is suspended and falls at the end of your next turn unless this option is used again. If the target is an object, Huge or smaller, and is not worn or carried, you automatically move it 30ft in any direction within the spells range.",
	attunement: true,
	spellcastingBonus: {
		name: "At will",
		spells: ["telekinesis"],
		selection: ["telekinesis"],
		firstCol: "atwill"
	},
};
MagicItemsList["ring of the ram"] = {
	name: "Ring of the Ram",
	source: [["D24", 296]],
	type: "ring",
	rarity: "rare",
	magicItemTable: "?",
	description: "This ring has 3 charges, regaining 1d3 charges daily at dawn. As Magic action, you can use charges to make a ranged attack on a target you can see within 60 ft, with a +7 to hit, doing 2d10 force damage per charge and pushing it away from you 5 ft. If I target an unattended object, you can try to break it with a +5 bonus per charge on the Strength check.",
	descriptionFull: "This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing the ring, you can use a Magic action to expend 1 to 3 of its charges to attack one creature you can see within 60 feet of you. The ring produces a spectral ram's head and makes its attack roll with a +7 bonus. On a hit, for each charge you spend, the target takes 2d10 force damage and is pushed 5 feet away from you.\n   Alternatively, you can expend 1 to 3 of the ring's charges as a Magic action to try to break an object you can see within 60 feet of you that isn't being worn or carried. The ring makes a Strength check with a +5 bonus for each charge you spend.",
	attunement: true,
	action: [["action", "(ranged attack)"], ["action", "(break object)"]],
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	weaponsAdd: ["Ring of the Ram"],
	weaponOptions: {
		regExpSearch: /^(?=.*ring)(?=.*ram).*$/i,
		name: "Ring of the Ram",
		source: [["D24", "-"]],
		ability: 0,
		type: "Magic Item",
		damage: [2, 10, "force"],
		range: "60 ft",
		description: "Damage is per charge used, also pushes 5 ft away",
		abilitytodamage: false,
		modifiers: [7, ""]
	}
};
MagicItemsList["ring of three wishes"] = {
	name: "Ring of Three Wishes",
	source: [["D24", 296]],
	type: "ring",
	rarity: "legendary",
	magicItemTable: "?",
	description: "While wearing this ring, you can expend 1 of its 3 charges to cast Wish from it. The ring becomes nonmagical when you use the last charge.",
	descriptionFull: "While wearing this ring, you can expend 1 of its 3 charges to cast Wish from it. The ring becomes nonmagical when you use the last charge.",
	usages: 3,
	recovery: "Never",
	spellFirstColTitle: "Ch",
	spellcastingBonus: {
		name: "1 charge",
		spells: ["wish"],
		selection: ["wish"],
		firstCol: 1
	}
};
MagicItemsList["ring of warmth"] = {
	name: "Ring of Warmth",
	source: [["D24", 296]],
	type: "ring",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While wearing this ring, Cold damage you receive is reduced by 2d8. Yourself and anything you carry are unharmed by temperatures as low as -50 \u00B0F.",
	descriptionFull: "While wearing this ring, Cold damage I receive is reduced by 2d8. In addition, you and everything you wear and carry are unharmed by temperatures as low as -50 degrees Fahrenheit.",
	attunement: true,
};
MagicItemsList["ring of water walking"] = {
	name: "Ring of Water Walking",
	source: [["D24", 296]],
	type: "ring",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While wearing this ring, I can stand on and move across any liquid surface as if it were solid ground.",
	descriptionFull: "While wearing this ring, you can stand on and move across any liquid surface as if it were solid ground.",
	spellcastingBonus: [{
		name: "At will",
		spells: ["water walk"],
		selection: ["water walk"],
		firstCol: "atwill",
	}]
};
MagicItemsList["ring of x-ray vision"] = {
	name: "Ring of X-ray Vision",
	source: [["D24", 296]],
	type: "ring",
	rarity: "rare",
	magicItemTable: "?",
	description: "As a Magic action, you gain X-ray vision and can see into and through solid matter as if it is transparent and light passes through for 1 minute within 30 ft (1 ft stone, 1 inch metal, 3 ft wood/dirt, not lead). When you use this again before a long rest, you must make a DC 15 Constitution save or gain 1 level of exhaustion.",
	descriptionFull: "While wearing this ring, you can take a Magic action to gain X-ray vision with a range of 30 feet for 1 minute. To you, solid objects within that radius appear transparent and don’t prevent light from passing through them. The vision can penetrate 1 foot of stone, 1 inch of common metal, or up to 3 feet of wood or dirt. Thicker substances or a thin sheet of lead block the vision.\n   Whenever you use the ring again before taking a Long Rest, you must succeed on a DC 15 Constitution saving throw or gain 1 Exhaustion level.",
	attunement: true,
	action: [["action", "x-ray vision"]],
	usages: 1,
	recovery: "long rest",
	additional: "more uses: DC 15 Con save or gain 1 Exhaustion level"
};
MagicItemsList["rival coin"] = {
	name: "Rival Coin",
	source: [["D24", 296]],
	type: "wondrous item",
	rarity: "common",
	magicItemTable: "?",
	description: "This coin has 1 charge, and regains expended charges at dawn. You can take a Magic action to toss the coin. Roll any die to determine if it lands on heads (even number) or tails (odd number). See Notes.",
	descriptionFull: "This coin has 1 charge, and regains expended charges at dawn. You can take a Magic action to toss the coin. Roll any die to determine if it lands on heads (even number) or tails (odd number). The roll determines the effect gained:" +
		"\n" +
		"\u2022 >>Heads<<: You target once creature you can see within 60 ft. The target makes a DC 13 Wisdom saving throw or take 2d4 Psychic damage and has Disadvantage on its next attack roll. On a successful save, the target takes 1d4 Psychic damage." +
		"\n" +
		"\u2022 >>Tails<<: You take 1d4 Psychic damage.",
	action: [["action", "CoinFlip"]],
	usages: 1,
	recovery: "dawn",
};
MagicItemsList["robe of eyes"] = { // contains contributions by SoilentBrad
	name: "Robe of Eyes",
	source: [["D24", 297]],
	type: "wondrous item",
	rarity: "rare",
	magicItemTable: "?",
	description: "This robe gives you the following benefits: Advantage on sight-based Perception checks; Darkvision and Truesight up to 120-ft. If Light is cast on it or Daylight within 5 ft of it, you're blinded for 1 min, Con save (DC 11-Light, 15-Daylight) at the end of my each of my turns until succussful.",
	descriptionFull: "This robe is adorned with eyelike patterns. While you wear the robe, you gain the following benefits:\n" + toUni("All-Around Vision") + ". The robe gives you Advantage on Wisdom (Perception) checks that rely on sight.\n" + toUni("Special Senses") + ". You have Darkvision and Truesight, both with a range of 120 feet.\n" + toUni("Drawbacks") + ". A Light spell cast on the robe or a Daylight spell cast within 5 feet of the robe gives you the Blinded condition for 1 minute. At the end of each of your turns, you make a Constitution saving throw (DC 11 for Light or DC 15 for Daylight), ending the condition on yourself on a success.",
	attunement: true,
	weight: 4,
	vision: [
		["Darkvision", "fixed 120"],
		["Truesight", "fixed 120"],
		["Adv on sight-based Perception"],
	],
};
MagicItemsList["robe of scintillating colors"] = { // contains contributions by SoilentBrad
	name: "Robe of Scintillating Colors",
	source: [["D24", 297]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This robe has 3 charges, regaining 1d3 at dawn. As a Magic action, you can use 1 charge to shed a 30-ft radius Bright Light and an additional 30 ft Dim Light until the end of my next turn, causing all that see me to have Disadvantage on attacks against you. All within 30 ft that can see me at activation make a DC 15 Wisdom save or Stunned until effect ends.",
	descriptionFull: "This robe has 3 charges, and it regains 1d3 expended charges daily at dawn. While you wear it, you can take a Magic action and expend 1 charge to cause the garment to display a shifting pattern of dazzling hues until the end of your next turn. During this time, the robe sheds Bright Light in a 30-foot radius and Dim Light for an additional 30 feet, and creatures that can see you have Disadvantage on attack rolls against you. Any creature in the Bright Light that can see you when the robe’s power is activated must succeed on a DC 15 Wisdom saving throw or have the Stunned condition until the effect ends.",
	attunement: true,
	weight: 4,
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	action: [["action", ""]]
};
MagicItemsList["robe of stars"] = { // contains contributions by SoilentBrad
	name: "Robe of Stars",
	source: [["D24", 297]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This dark robe gives a +1 bonus to saving throws while worn. It has 6 large stars embroidered on it, that I can use to cast Magic Missile at 5th-level. 1d6 removed stars reappear at dusk. As a Magic action, I can enter the Astral Plane along with all I'm wearing and carrying. I can return by taking a Magic action, appearing in the spot I left or nearest unoccupied space.",
	descriptionFull: "This black or dark blue robe is embroidered with small white or silver stars. You gain a +1 bonus to saving throws while you wear it.\n   Six stars, located on the robe's upper front portion, are particularly large. While wearing this robe, you can use a Magic action to pull off one of the stars and use it to cast Magic Missile as a 5th-level spell. Daily at dusk, 1d6 removed stars reappear on the robe.\n   While you wear the robe, you can take a Magic action to enter the Astral Plane along with everything you are wearing and carrying. You remain there until you use a Magic action to return to the plane you were on. You reappear in the last space you occupied, or if that space is occupied, the nearest unoccupied space.",
	attunement: true,
	weight: 4,
	action: [["action", "Enter/Exit Astral"]],
	usages: 6,
	recovery: "Dusk",
	additional: "regains 1d6",
	addMod: [{ type: "save", field: "all", mod: 1, text: "While wearing the Robe of Stars, I gain a +1 bonus to all my saving throws." }],
	spellFirstColTitle: "Ch",
	spellcastingBonus: {
		name: "1 charge",
		spells: ["magic missile"],
		selection: ["magic missile"],
		firstCol: 1
	},
	spellChanges: {
		"magic missile": {
			description: "7 darts hit creature(s) I can see for 1d4+1 Force dmg per dart",
			changes: "Magic Missile cast from the Robe of Stars is always at 5th-level."
		}
	}
};
MagicItemsList["robe of the archmagi"] = { // contains contributions by SoilentBrad
	name: "Robe of the Archmagi",
	source: [["D24", 298]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	description: "You gain these benefits while wearing the robe: if unarmored, AC is 15 + Dex mod; you have Advantage on saves against spells and magical effects; your spell save DC and spell attack bonus increase by 2.",
	descriptionFull: "This elegant garment is made from exquisite cloth and adorned with runes.\n You gain these benefits while wearing the robe:\n" + toUni("Armor") + ". If you aren't wearing armor, your base Armor Class is 15 + your Dexterity modifier.\n" + toUni("Magic Resistance") + ". You have Advantage on saving throws against spells and other magical effects.\n" + toUni("War Mage") + ". Your spell save DC and spell attack bonus each increase by 2.",
	attunement: true,
	prerequisite: "Requires attunement by a Sorcerer, Warlock, or Wizard",
	prereqeval: function (v) { return (classes.known.sorcerer || classes.known.warlock || classes.known.wizard); },
	weight: 4,
	savetxt: { adv_vs: ["spells", "magical effects"] },
	calcChanges: {
		spellCalc: [
			function (type, spellcasters, ability) {
				if (type != "prepare") return 2;
			},
			"While wearing the Robe of the Archmagi my spell save DC and spell attack bonus each increase by 2."
		]
	},
	addArmor: "Robe of the Archmagi",
	armorOptions: {
		regExpSearch: /^(?=.*robe)(?=.*(archmage|archmagi)).*$/i,
		name: "Robe of the Archmagi",
		source: [["D24", "-"]],
		ac: 15 + What('Dex Mod'),
		weight: 4,
	},
};
MagicItemsList["robe of useful items"] = {
	name: "Robe of Useful Items",
	source: [["D24", 298]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "You can take a Magic action to detach one of the many patches, causing it to become the object or creature it represents. It has two patches each of a Bullseye Lantern (filled and lit), Dagger, Mirror, Pole, Rope (coiled), Sack. In addition, it has 4d4 patches that are determined by the DM.",
	descriptionFull: "This robe has cloth patches of various shapes and colors covering it. While wearing the robe. you can take a Magic action to detach one of the patches, causing it to become the object or creature it represents. Once the last patch is removed, the robe becomes an ordinary garment.\n\nThe robe has two of each of the following patches:\n \u2022 Bullseye lantern (filled and lit)\n \u2022 Dagger\n \u2022 Mirror\n \u2022 Pole\n \u2022 Rope (coiled)\n \u2022 Sack\n\nIn addition, the robe has 4d4 other patches. The DM chooses the patches or determines them randomly.\n\n" + toUni("d100\tPatch") + "\n01-08\tBag of 100 gp\n09-15\tSilver coffer (1 foot long, 6 inches wide and deep) worth 500 gp\n16-22\tIron door (up to 10 feet wide and 10 feet high, barred on one side of your choice), which you can place in an opening you can reach; it conforms to fit the opening, attaching and hinging itself\n23-30\t10 gems worth 100 gp each\n31-44\tWooden ladder (24 feet long)\n45-51\tRiding Horse with Riding Saddle\n52-59\tOpen pit (a 10-foot cube), which you can place on the ground within 10 feet of you\n60-68\t4 Potions of Healing\n69-75\tRowboat (12 feet long)\n76-83\tSpell Scroll containing one spell of level 1,2, or 3 (your choice)\n84-90\t2 Mastiffs\n91-96\tWindow (2 feet by 4 feet, up to 2 feet deep), which you can place on a vertical surface you can reach\n97-00\tPortable Ram",
	weight: 4,
	action: ["action", ""]
};
MagicItemsList["rod of absorption"] = {
	name: "Rod of Absorption",
	source: [["D24", 299]],
	type: "rod",
	rarity: "very rare",
	magicItemTable: "?",
	description: "While holding this rod, you can take a Reaction to absorb a spell that is targeting only you and doesn’t create an area of effect. It has no effect and its spell slot level is stored in the rod. You can expend these levels as if they are spell slots to power your own spells up to 5th-level. Once the rod has absorbed 50 levels, it can absorb no more.",
	descriptionLong: "As a reaction while holding this rod, I can use it to absorb a spell targeting only me and without an area of effect. The spell has no effect and its energy is stored in the rod. This energy has the same level as the spell when it was cast. Once the rod has absorbed 50 levels, it can absorb no more. I can expend these levels as if they are spell slots to power my own spells up to 5th-level and only for spell slot levels I have access to otherwise. For example, I can expend 3 levels to cast one of my spells using a 3rd-level spell slot. When the rod can't absorb any more levels and has no energy left, it becomes nonmagical.",
	descriptionFull: "While holding this rod, you can take a Reaction to absorb a spell that is targeting only you and doesn’t create an area of effect. The absorbed spell’s effect is canceled, and the spell’s energy—not the spell itself—is stored in the rod. The energy has the same level as the spell when it was cast. A canceled spell dissipates with no effect, and any resources used to cast it are wasted. The rod can absorb and store up to 50 levels of energy over the course of its existence. Once the rod absorbs 50 levels of energy, it can’t absorb more. If you are targeted by a spell that the rod can’t store, the rod has no effect on that spell.\n When you become attuned to the rod, you know how many levels of energy the rod has absorbed over the course of its existence and how many levels of spell energy it currently has stored.\n  If you are a spellcaster holding the rod, you can convert energy stored in it into spell slots to cast spells you have prepared or know. You can create spell slots only of a level equal to or lower than your own spell slots, up to a maximum of level 5. You use the stored levels in place of your slots but otherwise cast the spell as normal. For example, you can use 3 levels stored in the rod as a level 3 spell slot.\n   A newly found rod has 1d10 levels of spell energy stored in it already. A rod that can no longer absorb spell energy and has no energy remaining becomes nonmagical.",
	attunement: true,
	weight: 2,
	action: [["reaction", ""]],
	extraLimitedFeatures: [{
		name: "Rod of Absorption [Total Levels Absorbed]",
		usages: 50,
		recovery: "Never"
	}, {
		name: "Rod of Absorption [Stored Levels]",
		usages: "1d10",
		recovery: "Never"
	}],
};
MagicItemsList["rod of alertness"] = { // contains contributions by SoilentBrad
	name: "Rod of Alertness",
	source: [["D24", 299]],
	type: "rod",
	rarity: "very rare",
	magicItemTable: "?",
	description: "While holding this rod, I have Advantage on Initiative and Wisdom (Perception) checks and can cast certain spells. As an Magic action once per dawn, I can plant it in the ground, making it shed 60-ft radius Bright Light, and Dim Light for another 60 ft for 10 min. In Bright Light, my allies and I gain +1 to AC and saveing throws, and can sense any Invisible creatures within the Bright Light.",
	descriptionFull: "This rod has the following properties.\n   " + toUni("Alertness") + ". While holding the rod, you have Advantage on Wisdom (Perception) checks and Initiative rolls.\n   " + toUni("Spells") + ". While holding the rod, you can cast one of the following spells from it: Detect Evil and Good, Detect Magic, Detect Poison and Disease, or See Invisibility.\n   " + toUni("Protective Aura") + ". As a Magic action, you can plant the haft end of the rod in the ground, whereupon the rod's head sheds Bright Light in a 60-foot radius and Dim Light for an additional 60 feet. While in that Bright Light, you and your allies gain a +1 bonus to AC and saving throws and can sense the location of any Invisible creature that is also in the Bright Light.\n   The rod's head stops glowing and the effect ends after 10 minutes or when a creature uses a Magic action to pull the rod from the ground. Once used, this property can't be used again until the next dawn.",
	attunement: true,
	weight: 2,
	usages: 1,
	recovery: "dawn",
	limfeaname: "Rod of Alertness (Plant in Ground)",
	advantages: [["Initiative", true], ["Perception", true]],
	vision: [["Bright Light: Sense Invisible", 0]],
	action: [["action", ""]],
	spellcastingBonus: [{
		name: "Robe of Alertness",
		spells: ["detect evil and good", "detect magic", "detect poison and disease", "see invisibility"],
		selection: ["detect evil and good", "detect magic", "detect poison and disease", "see invisibility"],
		times: 4
	}]
};
MagicItemsList["rod of lordly might"] = {
	name: "Rod of Lordly Might",
	source: [["D24", 300]],
	type: "rod",
	rarity: "legendary",
	magicItemTable: "?",
	description: "This rod functions as a +3 mace. As a Bonus action, I can press one of the six buttons on the rod, changing it. The rod can also drain life, paralyze, and terrify, on a melee attack, each once per dawn. See Notes Page for Buttons/Controls.",
	descriptionFull: "This rod has a flanged head, and it functions as a magic mace that grants a +3 bonus to attack and damage rolls made with it. The rod has properties associated with six different buttons that are set in a row along the haft. It has three other properties as well, detailed below.\n   " + toUni("Buttons") + ". You can press one of the following buttons as a Bonus Action; a button's effect lasts until you push a different button or until you push the same button again, which causes the rod to revert to its normal form.\n " + toUni("Button 1") + ".  A fiery blade sprouts from the end opposite the rod’s flanged head. The flames shed Bright Light in a 40-foot radius and Dim Light for an additional 40 feet, and the blade functions as a magic Longsword or Shortsword (your choice) that deals an extra 2d6 Fire damage on a hit.\n " + toUni("Button 2") + ". The rod’s flanged head folds down and two crescent-shaped blades spring out, transforming the rod into a magic Battleaxe that grants a +3 bonus to attack rolls and damage rolls made with it.\n  " + toUni("Button 3") + ". The rod’s flanged head folds down, a spear point springs from the rod’s tip, and the rod’s handle lengthens into a 6-foot haft, transforming the rod into a magic Spear that grants a +3 bonus to attack rolls and damage rolls made with it.\n  " + toUni("Button 4") + ". The rod transforms into a climbing pole up to 50 feet long (you specify the length), though the rod’s buttons remain within your reach. In surfaces as hard as granite, a spike at the bottom and three hooks at the top anchor the pole. Horizontal bars 3 inches long fold out from the sides, 1 foot apart, forming a ladder. The pole can bear up to 4,000 pounds. More weight or lack of solid anchoring causes the rod to revert to its normal form.\n  " + toUni("Button 5") + ". The rod transforms into a handheld battering ram and grants its user a +10 bonus to Strength (Athletics) checks made to break through doors, barricades, and other barriers.\n  " + toUni("Button 6") + ". The rod assumes or remains in its normal form and indicates magnetic north. (Nothing happens if this function of the rod is used in a location that has no magnetic north.) The rod also gives you knowledge of your approximate depth beneath the ground or your height above it.\n   " + toUni("Drain Life") + ". When you hit a creature with a melee attack using the rod, you can force the target to make a DC 17 Constitution saving throw. On a failed save, the target rakes an extra 4d6 Necrotic damage, and you regain a number of Hit Points equal to half that necrotic damage. This property can't be used again until the next dawn.\n   " + toUni("Paralyze") + ". When you hit a creature with a melee attack using the rod, you can force the target to make a DC 17 Constitution saving throw. On a failed save, the target is Paralyzed for 1 minute. The target repeats the saving throw at the end of each of its turns, ending the effect on a success. This property can't be used again until the next dawn.\n   " + toUni("Terrify") + ". While holding the rod, you can take a Magic action to force each creature you can see within 30 feet of you to make a DC 17 Wisdom saving throw. On a failed save, a target has the Frightened condition for 1 minute. A Frightened target repeats the save at the end of each of its turns, ending the effect on itself on a success. This property can't be used again until the next dawn.",
	attunement: true,
	weight: 2,
	action: [["Bonus action", " (press button)"], ["action", " (Terrify)"]],
	extraLimitedFeatures: [{
		name: "Rod of Lordly Might (Drain Life)",
		usages: 1,
		recovery: "dawn"
	}, {
		name: "Rod of Lordly Might (Paralyze)",
		usages: 1,
		recovery: "dawn"
	}, {
		name: "Rod of Lordly Might (Terrify)",
		usages: 1,
		recovery: "dawn"
	}],
	weaponOptions: [{
		baseWeapon: "battleaxe",
		regExpSearch: /^(?=.*rod)(?=.*lordly)(?=.*might)(?=.*axe).*$/i,
		name: "Rod of Lordly Might (Axe)",
		source: [["PHB2024", "-"]],
		modifiers: [3, 3]
	}, {
		baseWeapon: "mace",
		regExpSearch: /^(?=.*rod)(?=.*lordly)(?=.*might)(?=.*mace).*$/i,
		name: "Rod of Lordly Might (Mace)",
		source: [["PHB2024", "-"]],
		modifiers: [3, 3]
	}, {
		baseWeapon: "spear",
		regExpSearch: /^(?=.*rod)(?=.*lordly)(?=.*might)(?=.*spear).*$/i,
		name: "Rod of Lordly Might (Spear)",
		source: [["PHB2024", "-"]],
		modifiers: [3, 3]
	}],
	toNotesPage: [{
		name: "Buttons and Other Functions",
		note: [
			"The rod of lordly might has a flanged head, and it functions as a magic Mace that grants a +3 bonus to attack and damage roll made with it.",
			"As a Bonus action, I can press one of the six different buttons that are set in a row along the haft of the rod. A button's effect lasts until a different button is pushed, or until the same button is pushed again, whereupon it reverts to its normal form.",
			"\u2022 Button 1.  A fiery blade sprouts from the end opposite the rod’s flanged head. The flames shed Bright Light in a 40-foot radius and Dim Light for an additional 40 feet, and the blade functions as a magic Longsword or Shortsword (your choice) that deals an extra 2d6 Fire damage on a hit.",
			"\u2022 Button 2.  The rod’s flanged head folds down and two crescent-shaped blades spring out, transforming the rod into a magic Battleaxe that grants a +3 bonus to attack rolls and damage rolls made with it.",
			"\u2022 Button 3.  The rod’s flanged head folds down, a spear point springs from the rod’s tip, and the rod’s handle lengthens into a 6-foot haft, transforming the rod into a magic Spear that grants a +3 bonus to attack rolls and damage rolls made with it.",
			"\u2022 Button 4.  The rod transforms into a climbing pole up to 50 feet long (you specify the length), though the rod’s buttons remain within your reach. In surfaces as hard as granite, a spike at the bottom and three hooks at the top anchor the pole. Horizontal bars 3 inches long fold out from the sides, 1 foot apart, forming a ladder. The pole can bear up to 4,000 pounds. More weight or lack of solid anchoring causes the rod to revert to its normal form.",
			"\u2022 Button 5.  The rod transforms into a handheld battering ram and grants its user a +10 bonus to Strength (Athletics) checks made to break through doors, barricades, and other barriers.",
			"\u2022 Button 6.  The rod assumes or remains in its normal form and indicates magnetic north. (Nothing happens if this function of the rod is used in a location that has no magnetic north.) The rod also gives you knowledge of your approximate depth beneath the ground or your height above it.",
			"The rod also has three functions that work independent of the buttons.",
			"\u2022 Drain Life. When you hit a creature with a melee attack using the rod, you can force the target to make a DC 17 Constitution saving throw. On a failed save, the target takes an extra 4d6 Necrotic damage, and you regain a number of Hit Points equal to half that Necrotic damage. Once used, this property can’t be used again until the next dawn.",
			"\u2022 Paralyze.   When you hit a creature with a melee attack using the rod, you can force the target to make a DC 17 Constitution saving throw. On a failed save, the target has the Paralyzed condition for 1 minute. The target repeats the save at the end of each of its turns, ending the effect on a success. Once used, this property can’t be used again until the next dawn.",
			"\u2022 Terrify.    While holding the rod, you can take a Magic action to force each creature you can see within 30 feet of yourself to make a DC 17 Wisdom saving throw. On a failed save, a target has the Frightened condition for 1 minute. A Frightened target repeats the save at the end of each of its turns, ending the effect on itself on a success. Once used, this property can’t be used again until the next dawn."
		]
	}],

	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword/i).test(v.baseWeaponName) && (/^(?=.*lordly)(?=.*might).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+2d6 fire damage';
				}
			},
			'If I include the words "Lordly Might" in a the name of a long sword or short sword, it adds +2d6 fire damage on a hit and shines light.'
		]
	}
};
MagicItemsList["rod of resurrection"] = {
	name: "Rod of Resurrection",
	source: [["D24", 301]],
	type: "rod",
	rarity: "legendary",
	magicItemTable: "?",
	description: "This rod has 5 charges and regains 1 expended charge daily at dawn. While I hold it, I can expend 1 charge and cast Heal from it, or expend 5 charges and cast Resurrection from it. If the rod is reduced to 0 charges, roll a d20. On a 1, the rod disappears in a harmless burst of radiance.",
	descriptionFull: "The rod has 5 charges. While you hold it, you can expend charges to cast one of the following spells from it: Heal (expends 1 charge) or Resurrection (expends 5 charges).\n   The rod regains 1 expended charge daily at dawn. If the rod is reduced to 0 charges, roll a d20. On a 1, the rod disappears in a harmless burst of radiance.",
	attunement: true,
	weight: 2,
	usages: 5,
	recovery: "dawn",
	additional: "regains 1",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["heal"],
		selection: ["heal"],
		firstCol: 1
	}, {
		name: "5 charges",
		spells: ["resurrection"],
		selection: ["resurrection"],
		firstCol: 5
	}],
};
MagicItemsList["rod of rulership"] = {
	name: "Rod of Rulership",
	source: [["D24", 301]],
	type: "rod",
	rarity: "rare",
	magicItemTable: "?",
	description: "As a Magic action once per dawn, you can use this rod to have chosen creatures you can see within 120 ft make a DC 15 Wisdom saving throw or be Charmed by me for 8 hours. While charmed in this way, a target regards you as its trusted leader. It stops being charmed if my allies or I harm it or it is commanded to go against its nature.",
	descriptionFull: "You can use a Magic action to present the rod and command obedience from each creature of your choice that you can see within 120 feet of you. Each target must succeed on a DC 15 Wisdom saving throw or be charmed by you for 8 hours. While charmed in this way, the creature regards you as its trusted leader. If harmed by you or your companions, or commanded to do something contrary to its nature, a target ceases to be charmed in this way. The rod can't be used again until the next dawn.",
	attunement: true,
	weight: 2,
	action: [["action", ""]],
	usages: 1,
	recovery: "dawn"
};
MagicItemsList["rod of security"] = {
	name: "Rod of Security",
	source: [["D24", 301]],
	type: "rod",
	rarity: "very rare",
	magicItemTable: "?",
	description: "As a Magic action once per 10 days, I can transport myself and up to 199 willing others I can see to a demiplane for 200 days divided by the number of creatures or until I end it as a Magic action. Creatures within the demiplane don't age, have enough to eat and drink, and regain HP every hour as if having spent 1 HD.",
	descriptionFull: "While holding this rod, you can take a Magic action to activate it. The rod then instantly transports you and up to 199 other willing creatures you can see to a demiplane. You choose the form the demiplane takes. It could be a tranquil garden, a cheery tavern, an immense palace, a tropical island, a fantastic carnival, or whatever else you can imagine. Regardless of its nature, the demiplane contains enough water and food to sustain its visitors, and the demiplane’s environment can’t harm its occupants. Everything else that can be interacted with there can exist only there. For example, a flower picked from a garden there disappears if it is taken outside the demiplane.\n   For each hour spent in the demiplane, a visitor regains Hit Points as if it had spent 1 Hit Point Die. Also, creatures don’t age while there, although time passes normally. Visitors can remain there for up to 200 days divided by the number of creatures present (round down).\n   When the time runs out or you take a Magic action to end the effect, all visitors reappear in the location they occupied when you activated the rod or an unoccupied space nearest that location. Once used, this property can’t be used again until 10 days have passed..",
	weight: 2,
	usages: 1,
	recovery: "10 days",
	action: [["action", "(de)activate"]]
};
MagicItemsList["rod of the pact keeper, +1, +2, or +3"] = {
	name: "Rod of the Pact Keeper, +1, +2, or +3",
	source: [["D24", 301]],
	type: "rod",
	description: "While holding this rod, you gain a bonus to spell attack rolls and to the saving throw DCs of your warlock spells, determined by the rod's rarity: uncommon (+1), rare (+2), or very rare (+3). In addition, you can regain one spell slot as a Magic action while holding the rod. You can’t use this property again until you finish a Long Rest.",
	descriptionFull: "While holding this rod, you gain a bonus to spell attack rolls and to the saving throw DCs of your warlock spells. The bonus is determined by the rod's rarity: uncommon (+1), rare (+2), or very rare (+3).\n In addition, you can regain one spell slot as a Magic action while holding the rod. You can’t use this property again until you finish a Long Rest.",
	attunement: true,
	weight: 2,
	prerequisite: "Requires attunement by a warlock",
	prereqeval: function (v) { return classes.known.warlock; },
	usages: 1,
	recovery: "long rest",
	limfeaname: "Rod of the Pact Keeper (spell slot)",
	action: [["action", ""]],
	allowDuplicates: true,
	choices : ["+1 Rod (uncommon)", "+2 Rod (rare)", "+3 Rod (very rare)"],
	"+1 rod (uncommon)": {
		name: "Rod of the Pact Keeper +1",
		rarity: "uncommon",
		magicItemTable: "?",
		description: "While holding this rod, you gain a +1 bonus to spell attack rolls and to the saving throw DCs of you Warlock spells. As a Magic action once per long rest, you can regain one warlock spell slot while holding the rod.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && spellcasters.indexOf('warlock') !== -1) return 1;
				},
				"While holding the Rod of the Pact Keeper, you gain a +1 bonus to spell attack rolls and to the saving throw DCs of my warlock spells."
			]
		}
	},
	"+2 rod (rare)": {
		name: "Rod of the Pact Keeper +2",
		rarity: "rare",
		magicItemTable: "?",
		description: "While holding this rod, you gain a +2 bonus to spell attack rolls and to the saving throw DCs of your Warlock spells. As a Magic action once per long rest, you can regain one warlock spell slot while holding the rod.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && spellcasters.indexOf('warlock') !== -1) return 2;
				},
				"While holding the Rod of the Pact Keeper, you gain a +2 bonus to spell attack rolls and to the saving throw DCs of your Warlock spells."
			]
		}
	},
	"+3 rod (very rare)": {
		name: "Rod of the Pact Keeper +3",
		rarity: "very rare",
		magicItemTable: "?",
		description: "While holding this rod, you gain a +3 bonus to spell attack rolls and to the saving throw DCs of your Warlock spells. As a Magic action once per long rest, you can regain one Warlock spell slot while holding the rod.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && spellcasters.indexOf('warlock') !== -1) return 3;
				},
				"While holding the Rod of the Pact Keeper, you gain a +3 bonus to spell attack rolls and to the saving throw DCs of you Warlock spells."
			]
		}
	}
};
MagicItemsList["rope of climbing"] = {
	name: "Rope of Climbing",
	source: [["D24", 301]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "This 60-ft rope can hold 3000 lb. As a Magic action, you can hold one end of the rope and command its other end to: start/stop moving (10 ft per turn), (un)fasten itself, coil itself, or (un)knot itself (50 ft length, adv. to climb it). It has AC 20, 20 HP, heals 1 HP/5 min.",
	descriptionFull: "This 60-foot length of rope can hold up to 3,000 pounds. While holding one end of the rope, you can take a Magic action to command the other end of the rope to animate and move toward a destination you choose, up to the rope’s length away from you. That end moves 10 feet on your turn when you first command it and 10 feet at the start of each of your subsequent turns until reaching its destination or until you tell it to stop. You can also tell the rope to fasten itself securely to an object or to unfasten itself, to knot or unknot itself, or to coil itself for carrying.\n   If you tell the rope to knot, large knots appear at 1-foot intervals along the rope. While knotted, the rope shortens to a 50-foot length and grants Advantage on ability checks made to climb using the rope.\n   The rope has AC 20, HP 20, and Immunity to Poison and Psychic damage. It regains 1 Hit Point every 5 minutes as long as it has at least 1 Hit Point. If the rope drops to 0 Hit Points, it is destroyed.",
	weight: 3,
	action: [["action", " (animate)"]]
};
MagicItemsList["rope of entanglement"] = {
	name: "Rope of Entanglement",
	source: [["D24", 301]],
	type: "wondrous item",
	rarity: "rare",
	magicItemTable: "?",
	description: "As a Magic action while you hold one end of this 30 ft rope and command the other end to cause a creature you can see within 20 ft to make a DC 15 Dex save or be Restrained by the rope. You can release it as a Bonus action or by letting your end of the rope go. The creature can, as an action, escape with a DC 15 Dex(Acrobatics)/Str(Athletics) check. The rope has AC 20, 20 HP, heals 1 HP/5 min.",
	descriptionFull: "This rope is 30 feet long. While holding one end of the rope, you can take a Magic action to command the other end to dart forward and entangle one creature you can see within 20 feet of yourself. The target must succeed on a DC 15 Dexterity saving throw or have the Restrained condition. You can release the target by letting go of your end of the rope (causing the rope to coil up in the target’s space) or by using a Bonus action to repeat the command (causing the rope to coil up in your hand).\n   A target Restrained by the rope can take an action to make its choice of a DC 15 Strength (Athletics) or Dexterity (Acrobatics) check. On a successful check, the target is no longer Restrained by the rope. If you’re still holding onto the rope when a target escapes from it, you can take a Reaction to command the rope to coil up in your hand; otherwise, the rope coils up in the target’s space.\n   The rope has AC 20, HP 20, and Immunity to Poison and Psychic damage. It regains 1 Hit Point every 5 minutes as long as it has at least 1 Hit Point. If the rope drops to 0 Hit Points, it is destroyed.",
	weight: 3,
	action: [["action", " (entangle)"], ["bonus action", " (release)"], ["reaction", " (coil)"]],
	weaponOptions: [{
		regExpSearch: /^(?=.*rope)(?=.*entanglement).*$/i,
		name: "Rope of Entanglement",
		source: [["D24", 301]],
		ability: 0,
		type: "Magic Item",
		damage: ["Dex save", "", "Restrained"],
		range: "20 ft",
		description: "Dexterity saving throw or restrained; DC 15 Strength or Dexterity check to escape",
		abilitytodamage: false,
		weight: 3,
		modifiers: [7, 0],
		dc: true,
		isNotWeapon: true,
		isAlwaysProf: false,
	}]
};
MagicItemsList["rope of mending"] = {
	name: "Rope of Mending",
	source: [["D24", 302]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "You can cut this 50-foot coil of rope into any number of smaller pieces, and then use a Magic action to cause the pieces to knit back together. The pieces must be in contact with each other and not otherwise in use. A rope of mending is forever shortened if a section of it is lost.",
	descriptionFull: "This 50-foot coil of rope can repair itself when cut into any number of smaller pieces. As a Magic action, you can cause all pieces of the rope that are in contact with each other and not otherwise in use to knit back together. A Rope of Mending is forever shortened if a section of it is lost or destroyed.",
	action: [["action", ""]],
	weight: 10
};
MagicItemsList["ruby of the war mage"] = {
	name: "Ruby of the War Mage",
	source: [["D24", 302]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "By pressing this 1-inch-diameter ruby etched with eldritch runes to a simple or martial weapon for 10 minutes, it attaches itself to the weapon. You can then use that weapon as a spellcasting focus. Once attached, it can't be removed unless my attunement ends, you detach it as a Magic action, or the weapon is destroyed.",
	descriptionFull: "Etched with eldritch runes, this 1-inch-diameter ruby allows you to use a Simple or Martial weapon as a Spellcasting Focus for your spells. For this property to work, you must attach the ruby to the weapon by pressing the ruby against it for at least 10 minutes. Thereafter, the ruby can’t be removed unless you detach it as a Magic action, the weapon is destroyed, or your Attunement to the ruby ends.",
	attunement: true,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; }
};
MagicItemsList["saddle of the cavalier"] = {
	name: "Saddle of the Cavalier",
	source: [["D24", 302]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While you are seated in it and astride a mount, Attack rolls against the mount have Disadvantage and you can't be dismounted against your will, unless you are Incapacitated.",
	descriptionFull: "This saddle confers the following benefits while you are seated in it and astride a mount.\n" + toUni("Protected Mount") + ". Attack rolls against the mount have Disadvantage.\n" + toUni("Secure Rider") + ". You can't be dismounted against your will. This property is suppressed whil you have the Incapacitated condition.",
	weight: 25
};
MagicItemsList["scarab of protection"] = {
	name: "Scarab of Protection",
	source: [["D24", 302]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	description: "This beetle-shaped medallion gives you a +1 bonus to AC, Advantage on saving throws against spells. Additionally, if you fail a save against a Necromancy spell or an effect from an Undead, you can take a Reaction to expend 1 charge and succeed on the save instead. The scarab has 12 charges and crumbles into powder when the last is used.",
	descriptionFull: "This beetle-shaped medallion provides three benefits while it is on your person:\n \u2022 Defense: You gain +1 AC.\n \u2022 Spell Resistance: You have advantage on saving throws against spells.\n \u2022 Preservation: The scarab has 12 charges. If you fail a saving throw against a Necromancy spell or a harmful effect originating from an Undead, you can take a reaction to expend 1 charge and turn the failed save into a successful one. The scarab crumbles into powder and is destroyed when its last charge is expended.",
	attunement: true,
	savetxt: { adv_vs: ["spells"] },
	extraAC: [{ mod: 1, magic: true }],
	usages: 12,
	recovery: "Never",
	action: [["reaction", ""]]
};
MagicItemsList["scimitar of speed"] = {
	name: "Scimitar of Speed",
	source: [["D24", 302]],
	type: "weapon (scimitar)",
	rarity: "very rare",
	magicItemTable: "?",
	description: "You gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, you can make one attack with it as a Bonus Action on each of your turns.",
	descriptionFull: "You gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, you can make one attack with it as a Bonus Action on each of your turns.",
	attunement: true,
	weight: 3,
	action: [["bonus action", "extra attack"]],
	weaponsAdd: ["Scimitar of Speed"],
	weaponOptions: {
		baseWeapon: "scimitar",
		regExpSearch: /^(?=.*scimitar)(?=.*speed).*$/i,
		name: "Scimitar of Speed",
		source: [["D24", "-"]],
		description: "Finesse, Light, Nick; Extra attack as Bonus Action",
		modifiers: [2, 2]
	}
};
MagicItemsList["scroll of protection"] = {
	name: "Scroll of Protection",
	source: [["D24", 302]],
	type: "scroll",
	rarity: "rare",
	magicItemTable: "?",
	actions: [["action", ""]],
	description: "Using a Magic action to read the scroll creates a 5-ft Emanation originating from you. For 5 min, creatures of the specified type can't enter or affecting anything within. As a Magic action, a creature within 5 ft of the Emanation can make a DC 15 Cha save to stop being affected.",
	descriptionFull: "Each scroll of protection works against a specific type of creature chosen by the DM or determined randomly by rolling on the following table.\n\n" + [
		toUni("d100\tCreature Type\td100\tCreature Type"),
		"01-10\tAberrations\t51-60\tFey",
		"11-15\tBeasts\t\t61-70\tFiends",
		"16-20\tCelestials   \t71-75\tGiants",
		"21-25\tConstructs   \t76-80\tMonstrosities",
		"26-35\tDragons\t81-85\tOozes",
		"36-45\tElementals\t86-90\tPlants",
		"46-50\tHumonoids\t91-00\tUndead",
	].join("\n") + "\n Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, creatures of the specified type can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends.\n As a Magic action, a creature within 5 feet of the Emanation can attempt to overcome it, which forces the creature to make a DC 15 Charisma saving throw. On a successful save, the creature ceases to be affected by the Emanation.\n",
	choices : ["Aberrations", "Beasts", "Celestials", "Constructs", "Dragons", "Elementals", "Humanoids", "Fey", "Fiends", "Giants", "Monstrosities", "Oozes", "Plants", "Undead"],
	"aberrations": {
		name: "Scroll of Protection from Aberrations",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Aberrations can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	},
	"beasts": {
		name: "Scroll of Protection from Beasts",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Beasts can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	},
	"celestials": {
		name: "Scroll of Protection from Celestials",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Celestials can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	},
	"constructs": {
		name: "Scroll of Protection from Constructs",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Constructs can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	},
	"dragons": {
		name: "Scroll of Protection from Dragons",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Dragons can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	},
	"elementals": {
		name: "Scroll of Protection from Elementals",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Elementals can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	},
	"humanoids": {
		name: "Scroll of Protection from Humanoids",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Humanoids can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	},
	"fey": {
		name: "Scroll of Protection from Fey",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Fey can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	},
	"fiends": {
		name: "Scroll of Protection from Fiends",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Fiends can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	},
	"giants": {
		name: "Scroll of Protection from Giants",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Giants can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	},
	"monstrosities": {
		name: "Scroll of Protection from Monstrosities",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Monstrosities can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	},
	"oozes": {
		name: "Scroll of Protection from Oozes",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Oozes can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	},
	"plants": {
		name: "Scroll of Protection from Plants",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Plants can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	},
	"undead": {
		name: "Scroll of Protection from Undead",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Undead can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	}
};
MagicItemsList["scroll of titan summoning"] = {
	name: "Scroll of Titan Summoning",
	source: [["D24", 303]],
	type: "scroll",
	rarity: "legendary",
	magicItemTable: "?",
	description: "When you take a Magic action to read this scroll, a particular titan named in the scroll appears in an unoccupied space on the ground or in water that you can see within 1 mile of yourself. The titan is hostile towards all others and disappears when it drops to 0 HP. The space summoned must be large enough to contain it, or it fails.",
	descriptionFull: "When you take a Magic action to read this scroll, a particular titan named in the scroll appears in an unoccupied space on the ground or in water that you can see within 1 mile of yourself. The DM picks a suitable titan or determines it randomly by rolling on the table below (see the Monster Manual for the creature’s stat block).\n\n" + [
		toUni("d100\tTitan Type\td100\tTitan Type"),
		"01-15\tAnimal Lord\t61-75\tEmpyrean",
		"16-30\tBlob of Annihilation\t76-90\tKraken",
		"31-45\tColossus\t\t91-00\tTarrasque",
		"46-60\tElemental Cataclysm\t",
	].join("\n") + "\nUsing an Magic action to read the scroll a particular titan named on the scroll appears in an unoccupied space on the ground or in water that you can see within 1 mile of yourself.\n   The titan is hostile toward all other creatures and disappears when it drops to 0 HP.\n   If the titan is summoned into a space that isn't large enough to contain it, the summoning fails, and the scroll is wasted.",
	choices : ["Animal Lord", "Blob of Annihilation", "Colossus", "Elemental Cataclysm", "Empyrean", "Kraken", "Tarrasque"],
	"animal lord": {
		name: "Scroll of Animal Lord Summoning",
		description: "Once, as a Magic action, I can use this to summon an Animal Lord in an unoccupied space on the ground or in water that I can see within 1 mile of myself. The titan is hostile towards all other creatures and disappears when it drops to 0 HP. If summoned into a space that isn't large enough to contain it, it fails and is wasted."
	},
	"blob of annihilation": {
		name: "Scroll of Blob of Annihilation Summoning",
		description: "Once, as a Magic action, I can use this to summon a Blob of Annihilation in an unoccupied space on the ground or in water that I can see within 1 mile of myself. The titan is hostile towards all other creatures and disappears when it drops to 0 HP. If summoned into a space that isn't large enough to contain it, it fails and is wasted."
	},
	"colossus": {
		name: "Scroll of Colossus Summoning",
		description: "Once, as a Magic action, I can use this to summon a Colossus in an unoccupied space on the ground or in water that I can see within 1 mile of myself. The titan is hostile towards all other creatures and disappears when it drops to 0 HP. If summoned into a space that isn't large enough to contain it, it fails and is wasted."
	},
	"elemental cataclysm": {
		name: "Scroll of Elemental Cataclysm Summoning",
		description: "Once, as a Magic action, I can use this to summon an Elemental Cataclysm in an unoccupied space on the ground or in water that I can see within 1 mile of myself. The titan is hostile towards all other creatures and disappears when it drops to 0 HP. If summoned into a space that isn't large enough to contain it, it fails and is wasted."
	},
	"empyrean": {
		name: "Scroll of Empyrean Summoning",
		description: "Once, as a Magic action, I can use this to summon an Empyrean in an unoccupied space on the ground or in water that I can see within 1 mile of myself. The titan is hostile towards all other creatures and disappears when it drops to 0 HP. If summoned into a space that isn't large enough to contain it, it fails and is wasted."
	},
	"kraken": {
		name: "Scroll of Kraken Summoning",
		description: "Once, as a Magic action, I can use this to summon a Kraken in an unoccupied space on the ground or in water that I can see within 1 mile of myself. The titan is hostile towards all other creatures and disappears when it drops to 0 HP. If summoned into a space that isn't large enough to contain it, it fails and is wasted."
	},
	"tarrasque": {
		name: "Scroll of Tarrasque Summoning",
		description: "Once, as a Magic action, I can use this to summon a Tarrasque in an unoccupied space on the ground or in water that I can see within 1 mile of myself. The titan is hostile towards all other creatures and disappears when it drops to 0 HP. If summoned into a space that isn't large enough to contain it, it fails and is wasted."
	},
};
MagicItemsList["sending stones"] = {
	name: "Sending Stones",
	source: [["D24", 303]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While you touch one of this pair of stones, you can cast Sending from it, targeting the bearer of the other stone. If no creature has the other stone, the spell won't cast. Once it is cast, neither stone can be used again until the next dawn. Sending allows each bearer to communicate up to 25 words to a creature you have met or described to you by someone who has met it.",
	descriptionFull: "Sending Stones come in pairs, with each stone carved to match the other so the pairing is easily recognized. While you touch one stone, you can cast Sending from it. The target is the bearer of the other stone. If no creature bears the other stone, you know that fact as soon as you use the stone, and you don’t cast the spell.\n   Once Sending is cast using either stone, the stones can’t be used again until the next dawn. If one of the stones in a pair is destroyed, the other one becomes nonmagical.",
	spellcastingBonus: [{
		name: "To other stone bearer only",
		spells: ["sending"],
		selection: ["sending"],
		firstCol: "-"
	}],
	usages: 1,
	recovery: "dawn",
	spellChanges: {
		"sending": {
			description: "Send a 25 word message to the bearer of the other Sending Stone, who can respond with 25 words",
			changes: "Using one stone of a pair of Sending Stones, the spell can only target the bearer of the other stone of the pair."
		}
	}
};
MagicItemsList["sentinel shield"] = {
	name: "Sentinel Shield",
	source: [["D24", 303]],
	type: "shield",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While holding this shield, you have Advantage on Initiative rolls and Wisdom (Perception) checks.",
	descriptionFull: "While holding this shield, you have Advantage on Initiative rolls and Wisdom (Perception) checks. The Shield is emblazoned with a symbol of an eye.",
	weight: 6,
	shieldAdd: "Sentinel Shield",
	advantages: [["Initiative", true], ["Perception", true]],
	vision: [["Adv. on Perception checks", 0]]
};
MagicItemsList["shield, +1, +2, or +3"] = {
	name: "Shield, +1, +2, or +3",
	source: [["D24", 303]],
	type: "shield",
	description: "While holding this Shield, you have a bonus to AC determined by the Shield's rarity, in addition to the Shield's normal bonus to AC.",
	descriptionFull: "While holding this Shield, you have a bonus to Armor Class determined by the Shield’s rarity, in addition to the Shield’s normal bonus to AC.",
	allowDuplicates: true,
	choices: ["+1 Shield (Uncommon)", "+2 Shield (Rare)", "+3 Shield (Very Rare)"],
	"+1 shield (uncommon)": {
		name: "Shield +1",
		nameTest: "+1 Shield",
		rarity: "uncommon",
		magicItemTable: "?",
		description: "While holding this Shield, you have a +1 bonus to AC. This bonus is in addition to the Shield's normal bonus to AC.",
		allowDuplicates: true,
		shieldAdd: "+1 Shield"
	},
	"+2 shield (rare)": {
		name: "Shield +2",
		nameTest: "+2 Shield",
		rarity: "rare",
		magicItemTable: "?",
		description: "While holding this Shield, I have a +2 bonus to AC. This bonus is in addition to the Shield's normal bonus to AC.",
		allowDuplicates: true,
		shieldAdd: "+2 Shield"
	},
	"+3 shield (very rare)": {
		name: "Shield +3",
		nameTest: "+3 Shield",
		rarity: "very rare",
		magicItemTable: "?",
		description: "While holding this Shield, I have a +3 bonus to AC. This bonus is in addition to the Shield's normal bonus to AC.",
		allowDuplicates: true,
		shieldAdd: "+3 Shield"
	}
};
MagicItemsList["shield of expression"] = {
	name: "Shield of Expression",
	source: [["D24", 303]],
	magicItemTable: "?",
	type: "shield",
	rarity: "common",
	description: "The front of this Shield is shaped in the likeness of a face. While bearing the Shield, you can take a Bonus Action to alter the face’s expression.",
	descriptionFull: "The front of this Shield is shaped in the likeness of a face. While bearing the Shield, you can take a Bonus Action to alter the face’s expression.",
	weight: 6,
	shieldAdd: "Shield of Expression",
	action: [["bonus action", ""]]
};
MagicItemsList["shield of missile attraction"] = {
	name: "Shield of Missile Attraction",
	source: [["D24", 304]],
	type: "shield",
	rarity: "rare",
	magicItemTable: "?",
	description: "While holding this shield, you have Resistance to damage from Ranged weapon. Once attuned, you am cursed until you are targeted by a Remove Curse spell or similar magic. Whenever a Ranged weapon attack is made against a target within 10 ft of me, the curse causes me to become the target instead.",
	descriptionFull: "While holding this Shield, you have Resistance to damage from Ranged weapons.\n   " + toUni("Curse") + ". This Shield is cursed. Attuning to it curses you until you are targeted by the Remove Curse spell or similar magic. Removing the Shield fails to end the curse on you. Whenever an attack with a Ranged weapon targets a creature within 10 feet of you, the curse causes you to become the target instead.",
	attunement: true,
	weight: 6,
	shieldAdd: "Shield of Missile Attraction",
	cursed: true,
	dmgres: ["Ranged weapons"]
};
MagicItemsList["shield of the cavalier"] = {
	name: "Shield of the Cavalier",
	source: [["D24", 304]],
	type: "shield",
	rarity: "very rare",
	magicItemTable: "?",
	description: "While holding this Shield, you have a +2 bonus to AC. This bonus is in addition to the Shield's normal bonus to AC.",
	descriptionFull: "While holding this Shield, you have a +2 bonus to AC. This bonus is in addition to the Shields normal bonus to AC. The Shield has additional properties that you can use while holding it." +
		"\n   " + toUni("Forceful Bash") + ". When you take the Attack action, you can make one of the attack rolls using the Shield against a target within 5 feet of yourself. Apply your Proficiency Bonus and Strength modifier to the attack roll. On a hit, the Shield deals Force damage to the target equal to 2d6 + 2 + your Strength modifier, and if the target is a creature, you can push it up to 10 feet directly away from yourself. If the creature is your size or smaller, you can also knock it down, giving it the Prone condition.'" +
		"\n   " + toUni("Protective Field") + ". As a Reaction, when you or an ally you can see within 5 feet of you is targeted by an attack or makes a saving throw against an area of effect, you can use the Shield to create an immobile 5-foot Emanation originating from you. When the Emanation appears, any creatures or objects not fully contained within it are pushed into the nearest unoccupied spaces outside it. The attack or area of effect that triggered the Reaction has no effect on creatures and objects inside the Emanation, which lasts as long as you maintain Concentration, up to 1 minute. Nothing can pass into or out of the Emanation. A creature or object inside the Emanation can’t be damaged by attacks or effects originating from outside, nor can a creature inside the Emanation damage anything outside it. Once this property is used, it can’t be used again until the next dawn.",
	attunement: true,
	weight: 6,
	shieldAdd: "Shield of the Cavalier",
	action: ["reaction", " Protective Field"],
	usages: 1,
	recovery: "dawn",
	additional: "Protective Field",
	weaponOptions: [{
		regExpSearch: /^(?=.*cavalier)(?=.*shield).*$/i,
		name: "Shield of the Cavalier Bash",
		source: [["D24", 304]],
		ability: 1,
		type: 'AlwaysProf',
		damage: ['2d6 + 2' + What('Str Mod'), '', 'force'],
		range: "Melee",
		description: "if target = crea push 10ft; if crea => your size, knock prone; substitute one attack roll on attack action.",
		isNotWeapon: true,
		modifiers: [What('Str Mod') + Number(How('Proficiency Bonus')),],
		selectNow: true
	}],
	toNotesPage: [{
		name: "Shield of the Cavalier",
		note: [
			"While holding this Shield, you have a +2 bonus to AC. This bonus is in addition to the Shield's normal bonus to AC. The Shield has additional properties that you can use while holding it.\n" +
			"\n \u2022 Forceful Bash: When you take the Attack action on your turn, you can replace one of your attacks using the Shield, targeting one creature you can see within 5 feet of yourself. On a hit, the Shield deals 2d6 + 2 + Strength Modifier Force damage, and if the target is a creature, you push it up to 10-ft directly away from yourself. If the creature is your size or smaller, you can knock it Prone.\n" +
			"\n \u2022 Protective Field: As a Reaction, when you or an ally you can see within 5-ft of you is targeted by an attack or makes a saving throw against an area of effect, you can use the Shield to create an immobile 5-ft Emanation originating from you. Any creatures or objects not fully contained are pushed into the nearest unoccupied space outside it. The triggering attack or effect has no effect on creatures and objects inside the Emanation, which lasts as long as you maintain Concentration - up to 1 minute. Nothing can pass in or out of the Emanation. A creature or object inside the Emanation can't be damaged by attacks or effects originating from outside, nor can a creature inside the Emanation damage anthing outside of it. Once this property is used, it can't be used again until the next dawn.",
		]
	}],
};
MagicItemsList["silvered weapon"] = {
	name: "Silvered Weapon",
	source: [["D24", 304]],
	type: "Weapon (simple or martial weapon)",
	rarity: "common",
	magicItemTable: "?",
	description: "When you score a Critical Hit against a creature that is shape-shifted, you deal one additional die of damage.",
	descriptionFull: "An alchemical process has bonded silver to this magic weapon. When you score a Critical Hit with it against a creature that is shape-shifted, the weapon deals one additional die of damage.",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "brackets",
		descriptionChange: ["replace", "weapon"],
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && !v.isSpell && (/silvered/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+1 dmg die vs. shape-shifted';
				}
			},
			'If I include the words "Silvered" in the name of a weapon, damage rolls with that weapon add 1 extra damage die to creatures that are shape-shifted.'
		]
	}
};
MagicItemsList["slippers of spider climbing"] = {
	name: "Slippers of Spider Climbing",
	source: [["D24", 304]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While you wear these light shoes, you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving my hands free. You have a climbing speed equal to my walking speed. However, the slippers don't allow me to move this way on a slippery surface, such as one covered by ice or oil.",
	descriptionFull: "While you wear these light shoes, you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free. You have a climbing speed equal to your walking speed. However, the slippers don't allow you to move this way on a slippery surface, such as one covered by ice or oil.",
	attunement: true,
	speed: { climb: { spd: "walk", enc: "walk" } }
};
MagicItemsList["smoldering armor"] = {
	name: "Smoldering Armor",
	nameTest: "Smoldering",
	source: [["D24", 305]],
	magicItemTable: "?",
	type: "armor (light, medium, or heavy)",
	rarity: "common",
	description: "Wisps of harmless, odorless smoke rise from this armor while it is worn.",
	descriptionFull: "Wisps of harmless, odorless smoke rise from this armor while it is worn.",
	chooseGear: {
		type: "armor",
		prefixOrSuffix: "suffix",
		descriptionChange: ["prefix", "armor"]
	}
};
MagicItemsList["sovereign glue"] = {
	name: "Sovereign Glue",
	source: [["D24", 305]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	action: [["action", " "]],
	description: "This viscous, milky-white substance is stored in a jar or flask, coated on the inside with Oil of Slipperiness. One ounce of the glue can cover a 1-ft square surface, taking 1 minute to set, and requires a Utilize action to use. Once it sets, the bond it creates can be broken only by Universal Solvent, Oil of Etherealness, or with a Wish spell.",
	descriptionFull: "This viscous, milky-white substance can form a permanent adhesive bond between any two objects. It must be stored in a jar or flask that has been coated inside with Oil of Slipperiness. When found, a container contains 1d6 + 1 ounces.\n   One ounce of the glue can cover a 1-foot square surface. The glue takes 1 minute to set. Once it has done so, the bond it creates can be broken only by the application of universal solvent or oil of etherealness, or with a Wish spell.",
	usages: "1d6+1",
	recovery: "Never"
};
MagicItemsList["spellguard shield"] = {
	name: "Spellguard Shield",
	source: [["D24", 305]],
	type: "shield",
	rarity: "very rare",
	magicItemTable: "?",
	description: "While holding this Shield, you have Advantage on saving throws against spells and other magical effects, and spell attacks have Disadvantage against you.",
	descriptionFull: "While holding this Shield, you have Advantage on saving throws against spells and other magical effects, and spell attacks have Disadvantage against you.",
	attunement: true,
	weight: 6,
	shieldAdd: "Spellguard Shield",
	savetxt: { adv_vs: ["spells", "magical effects"] },
	vision: ["spell attack rolls Disadvantage against me"]
};
MagicItemsList["spell scroll"] = {
	name: "Spell Scroll",
	source: [["D24", 305]],
	type: "scroll",
	description: "If the spell on this scroll is on your spell list, you can cast it without its Material components using its normal casting time. If the spell is of a higher level than you can cast, you can make an ability check using my spellcasting ability (DC = 10 + spell level). The spell level on the scroll determins saving throw DC, attack bonus, and rarity.",
	descriptionFull: "A Spell Scroll bears the words of a single spell, written in a mystical cipher. If the spell is on your spell list, you can read the scroll and cast its spell without Material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell’s normal casting time. Once the spell is cast, the scroll crumbles to dust. If the casting is interrupted, the scroll isn’t lost.\n   If the spell is on your spell list but of a higher level than you can normally cast, you make an ability check using your spellcasting ability to determine whether you cast the spell. The DC equals 10 plus the spell’s level. On a failed check, the spell disappears from the scroll with no other effect.\n   The level of the spell on the scroll determines the spell’s saving throw DC and attack bonus, as well as the scroll’s rarity, as shown in the following table.\n\n" + toUni("Spell Level\tRarity\t\tSave DC\tAttack Bonus") + [
		"\nCantrip\tCommon  \t13\t+5",
		"1  \tCommon  \t13\t+5",
		"2  \tUncommon\t13\t+5",
		"3  \tUncommon\t15\t+7",
		"4  \tRare\t\t15\t+7",
		"5  \tRare\t\t17\t+9",
		"6  \tVery rare    \t17\t+9",
		"7  \tVery rare    \t18\t+10",
		"8  \tVery rare    \t18\t+10",
		"9  \tLegendary  \t19\t+11"
	].join("\n") + "\n\nA Wizard spell on a Spell Scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on an Intelligence (Arcana) check with a DC equal to 10 + the spell's level. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the Spell Scroll is destroyed.",
	allowDuplicates: true,
	calcChanges: {
		spellAdd: [
			function (spellKey, spellObj, spName) {
				if ((/^spell scroll/i).test(spName)) {
					if (!spellObj.components) spellObj.components = "";
					spellObj.components = (spellObj.components.replace(/,?[RM][\u0192\u2020]?/ig, '') + ",M\u0192").replace(/^,+/, '');
					spellObj.compMaterial = "Spells cast from a spell scroll don't require any Material components.";
					spellObj.ritual = false;
					["description", "descriptionMetric", "descriptionShorter", "descriptionShorterMetric"].forEach(function (attr) {
						if (!spellObj[attr]) return;
						spellObj[attr] = spellObj[attr].replace(/ \(\d+k? ?gp( cons\.?)?\)/i, '');
					});
					return true;
				}
			},
			"When casting a spell using a Spell Scroll, no Material components are needed other than the Spell Scroll itself."
		]
	},
	choices : ["Cantrip", "1st-level", "2nd-level", "3rd-level", "4th-level", "5th-level", "6th-level", "7th-level", "8th-level", "9th-level", "mixed levels"],
	"cantrip": {
		name: "Spell Scroll (cantrip)",
		sortname: "Spell Scroll  (cantrip)",
		rarity: "common",
		magicItemTable: "?",
		description: "If the cantrip on this scroll is on your spell list, you can cast it, having the scroll crumble to dust afterwards. If you can't cast any cantrips, you need to make a DC 10 check with my spellcasting ability to use this scroll or it is destroyed if you fail. The cantrip is cast with DC 13 and a +5 attack modifier.",
		descriptionFull: "A Spell Scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your spell list, you can read the scroll and cast its spell without providing any Material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 13 and an attack bonus of +5.",
		fixedDC: 13,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: {
			level: [0, 0],
			psionic: false,
			times: 20,
			firstCol: "checkbox",
			magicItemComponents: false
		}
	},
	"1st-level": {
		rarity: "common",
		magicItemTable: "?",
		description: "If the 1st-level spell on this scroll is on your spell list, you can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that you can't yet cast, you need to make a DC 11 check with your spellcasting ability to use this scroll or it is destroyed if you fail. The spell is cast with DC 13 and a +5 attack modifier.",
		descriptionFull: "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 11. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 13 and an attack bonus of +5.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 11 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		fixedDC: 13,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: {
			level: [1, 1],
			psionic: false,
			times: 20,
			firstCol: "checkbox",
			magicItemComponents: false
		}
	},
	"2nd-level": {
		rarity: "uncommon",
		magicItemTable: "?",
		description: "If the 2nd-level spell on this scroll is on your spell list, you can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that you can't yet cast, you need to make a DC 12 check with your spellcasting ability to use this scroll or destroy it if you fail. The spell is cast with DC 13 and a +5 attack modifier.",
		descriptionFull: "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 12. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 13 and an attack bonus of +5.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 12 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		fixedDC: 13,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: {
			level: [2, 2],
			psionic: false,
			times: 20,
			firstCol: "checkbox",
			magicItemComponents: false
		}
	},
	"3rd-level": {
		rarity: "uncommon",
		magicItemTable: "?",
		description: "If the 3rd-level spell on this scroll is on your spell list, you can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that you can't yet cast, you need to make a DC 13 check with your spellcasting ability to use this scroll or it is destroyed if you fail. The spell is cast with DC 15 and a +7 attack modifier.",
		descriptionFull: "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 13. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 15 and an attack bonus of +7.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 13 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		fixedDC: 15,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: {
			level: [3, 3],
			psionic: false,
			times: 20,
			firstCol: "checkbox",
			magicItemComponents: false
		}
	},
	"4th-level": {
		rarity: "rare",
		magicItemTable: "?",
		description: "If the 4th-level spell on this scroll is on your spell list, you can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that you can't yet cast, you need to make a DC 14 check with your spellcasting ability to use this scroll or it is destroyed if you fail. The spell is cast with DC 15 and a +7 attack modifier.",
		descriptionFull: "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 14. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 15 and an attack bonus of +7.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 14 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		fixedDC: 15,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: {
			level: [4, 4],
			psionic: false,
			times: 20,
			firstCol: "checkbox",
			magicItemComponents: false
		}
	},
	"5th-level": {
		rarity: "rare",
		magicItemTable: "?",
		description: "If the 5th-level spell on this scroll is on your spell list, you can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that you can't yet cast, you need to make a DC 15 check with your spellcasting ability to use this scroll or it is destroyed if you fail. The spell is cast with DC 17 and a +9 attack modifier.",
		descriptionFull: "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 15. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 17 and an attack bonus of +9.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 15 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		fixedDC: 17,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: {
			level: [5, 5],
			psionic: false,
			times: 20,
			firstCol: "checkbox",
			magicItemComponents: false
		}
	},
	"6th-level": {
		rarity: "very rare",
		magicItemTable: "?",
		description: "If the 6th-level spell on this scroll is on your spell list, you can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that you can't yet cast, you need to make a DC 16 check with your spellcasting ability to use this scroll or it is destroyed if you fail. The spell is cast with DC 17 and a +9 attack modifier.",
		descriptionFull: "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 16. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 17 and an attack bonus of +9.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 16 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		fixedDC: 17,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: {
			level: [6, 6],
			psionic: false,
			times: 20,
			firstCol: "checkbox",
			magicItemComponents: false
		}
	},
	"7th-level": {
		rarity: "very rare",
		magicItemTable: "?",
		description: "If the 7th-level spell on this scroll is on your spell list, you can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that you can't yet cast, you need to make a DC 17 check with your spellcasting ability to use this scroll or it is destroyed if you fail. The spell is cast with DC 18 and a +10 attack modifier.",
		descriptionFull: "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 17. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 18 and an attack bonus of +10.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 17 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		fixedDC: 18,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: {
			level: [7, 7],
			psionic: false,
			times: 20,
			firstCol: "checkbox",
			magicItemComponents: false
		}
	},
	"8th-level": {
		rarity: "very rare",
		magicItemTable: ["D", "?"],
		description: "If the 8th-level spell on this scroll is on your spell list, you can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that you can't yet cast, you need to make a DC 18 check with your spellcasting ability to use this scroll or it is destroyed if you fail. The spell is cast with DC 18 and a +10 attack modifier.",
		descriptionFull: "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 18. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 18 and an attack bonus of +10.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 18 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		fixedDC: 18,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: {
			level: [8, 8],
			psionic: false,
			times: 20,
			firstCol: "checkbox",
			magicItemComponents: false
		}
	},
	"9th-level": {
		rarity: "legendary",
		magicItemTable: "?",
		description: "If the 9th-level spell on this scroll is on your spell list, you can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that you can't yet cast, you need to make a DC 19 check with your spellcasting ability to use this scroll or it is destroyed if you fail. The spell is cast with DC 19 and a +11 attack modifier.",
		descriptionFull: "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 19. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 19 and an attack bonus of +11.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 19 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		fixedDC: 19,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: {
			level: [9, 9],
			psionic: false,
			times: 20,
			firstCol: "checkbox",
			magicItemComponents: false
		}
	},
	"mixed levels": {
		description: "If the spell on this scroll is on your spell list, you can cast it, having the scroll crumble to dust afterwards. If the spell's level is higher than you can cast, you need to make a DC 10 + spell level check with my spellcasting ability, destroying it if you fail. The DC will be listed on the spell sheet's first column (spell attack = DC - 8).",
		spellFirstColTitle: "DC",
		spellcastingBonus: {
			level: [0, 9],
			psionic: false,
			times: 20,
			magicItemComponents: false
		},
		calcChanges: {
			spellAdd: [
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
	name: "Sphere of Annihilation",
	source: [["D24", 306]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	description: "This 2-ft radius black sphere obliterates all matter it comes into contact with, except artifacts. Anything not wholly engulfed by it and destroyed takes 8d10 force damage. If within 60-ft of it, you can control it as a Magic action with a DC 25 Intelligence (Arcana) check, moving it 5 ft \xD7 your Intelligence modifier, or 10 ft towards you if you fail. See notes page for more details.",
	descriptionFull: "This 2-foot-diameter black sphere is a hole in the multiverse, hovering in space and stabilized by a magical field surrounding it.\n   The sphere obliterates all matter it passes through and all matter that passes through it. Artifacts are the exception. Unless an artifact is susceptible to damage from a sphere of annihilation, it passes through the sphere unscathed. Anything else that touches the sphere but isn't wholly engulfed and obliterated by it takes 8d10 force damage.\n   The sphere is stationary until someone controls it. If you are within 60 feet of an uncontrolled sphere, you can use a Magic action to make a DC 25 Intelligence (Arcana) check. On a success, the sphere levitates in one direction of your choice, up to a number of feet equal to 5 \xD7 your Intelligence modifier (minimum 5 feet). On a failure, the sphere moves 10 feet toward you. A creature whose space the sphere enters must succeed on a DC 19 Dexterity saving throw or be touched by it, taking 8d10 force damage.\n   If you attempt to control a sphere that is under another creature's control, you make an Intelligence (Arcana) check contested by the other creature's Intelligence (Arcana) check. The winner of the contest gains control of the sphere and can levitate it as normal.\n   If the sphere comes into contact with a planar portal, such as that created by the Gate spell, or an extradimensional space, such as that within a portable hole, the DM determines randomly what happens, using the following table.\n\n" + toUni("d100\tResult") + "\n01-50\tThe sphere is destroyed.\n51-85\tThe sphere moves through the portal or into the extradimensional space.\n86-00\tA spatial rift sends each creature and object within 180 feet of the sphere, including the sphere, to a random plane of existence.",
	action: [["action", ""]],
	toNotesPage: [{
		name: "Special Properties",
		note: [
			"This 2-ft-diameter black sphere is a hole in the multiverse, hovering in space and stabilized by a magical field surrounding it. It obliterates all matter it passes through and all matter that passes through it. Artifacts are the exception. Unless an artifact is susceptible to damage from a sphere of annihilation, it passes through the sphere unscathed. Anything else that touches the sphere but isn't wholly engulfed and obliterated by it takes 8d10 force damage.",
			"The sphere is stationary until someone controls it. If you are within 60 ft of an uncontrolled sphere, you can take a Magic action to make a DC 25 Intelligence (Arcana) check. On a success, the sphere levitates in one direction of your choice, up to 5 ft \xD7 your Intelligence modifier (minimum 5 ft). On a failure, the sphere moves 10 ft toward you. A creature whose space the sphere enters must succeed on a DC 19 Dexterity saving throw or be touched by it, taking 8d10 force damage.",
			"If you attempt to control a sphere that is under another creature's control, make an Intelligence (Arcana) check contested by the other creature's Intelligence (Arcana) check. The winner of the contest gains control of the sphere and can levitate it as normal.",
			"If the sphere comes into contact with a planar portal, such as that created by the Gate spell, or an extradimensional space, such as that within a portable hole, the DM determines randomly what happens, by rolling a d100.",
			" \u2022 01-50 The sphere is destroyed.",
			" \u2022 51-85 The sphere moves through the portal or into the extradimensional space.",
			" \u2022 86-00 A spatial rift sends each creature and object within 180 ft of the sphere, including the sphere, to a random plane of existence."
		]
	}]
};
MagicItemsList["spirit board"] = {
	name: "Spirit Board",
	source: [["D24", 306]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This board has 3 charges and regains 1 expended charge daily at dawn. While touching the planchette, you can take 1 minute to cast Augury (1 charge) or Commune (3 charges).",
	descriptionFull: "This board has 3 charges and regains 1 expended charge daily at dawn. While touching the planchette, you can take 1 minute to cast one of the spells on the table below. The table indicates how many charges you must expend to cast the spell. As you cast the spell, you call on the spirits of the dead to guide the planchette across the board’s surface, answering your questions by pointing to the letters or words on the board.\n" +
					"\t Spell \t Charge\n \t Augury \t 1\n \t Commune \t 3 ",
	usages: "3",
	recovery: "dawn",
	additional: "regain 1",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["augury"],
		selection: ["augury"],
		firstCol: 1
	}, {
		name: "3 charges",
		spells: ["commune"],
		selection: ["commune"],
		firstCol: 3,
	}]
};
MagicItemsList["staff of adornment"] = {
	name: "Staff of Adornment",
	source: [["D24", 306]],
	magicItemTable: "?",
	type: "staff",
	rarity: "common",
	description: "If you place a tiny object up to 1 lb above the tip of the staff while holding it, the object floats 1 inch from its tip and remains there until it is removed or until you no longer possess the staff. It can have up to three objects floating over its tip at any given time and you can make one or more objects slowly spin or turn in place.",
	descriptionFull: "If you place a tiny object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of the staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.",
	weight: 4
};
MagicItemsList["staff of birdcalls"] = {
	name: "Staff of Birdcalls",
	source: [["D24", 307]],
	magicItemTable: "?",
	type: "staff",
	rarity: "common",
	description: "This staff has 10 charges, regaining 1d6+4 at dawn. You can take a Magic action to expend 1 charge to create a sound out to a range of 120 ft: a finch's chirp, raven's caw, duck's quack, chicken's cluck, goose's honk, loon's call, turkey's gobble, seagull's cry, owl's hoot, or an eagle's shriek.",
	descriptionFull: "This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can take a Magic action to expend 1 charge from the staff and cause it to create one of the following sounds, which can be heard out to 120 feet: a finch’s chirp, a raven’s caw, a duck’s quack, a chicken’s cluck, a goose’s honk, a loon’s call, a turkey’s gobble, a seagull’s cry, an owl’s hoot, or an eagle’s shriek.\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever.",
	weight: 4,
	usages: 10,
	recovery: "dawn",
	additional: "regains 1d6+4",
	action: [["action", ""]]
};
MagicItemsList["staff of charming"] = {
	name: "Staff of Charming",
	source: [["D24", 307]],
	type: "staff",
	rarity: "rare",
	magicItemTable: "?",
	description: "This staff has 10 charges, regaining 1d8+2 at dawn. If an enchantment spell is cast only on you, you can use the staff to, once per dawn, turn a failed save into a success and as a reaction if you make the save, you can expend 1 charge to turn the spell back on its caster. You can expend 1 charge to cast Charm Person, Command, or Comprehend Languages using your spell save DC.",
	descriptionFull: "This staff has 10 charges. While holding the staff, you can use any of its properties:\n" +
		toUni("Cast Spell") + ". You can expend 1 of the staff’s charges to cast Charm Person, Command, or Comprehend Languages from it using your spell save DC.\n"+
		toUni("Reflect Enchantment") + ". If you succeed on a saving throw against an Enchantment spell that targets only you, you can take a Reaction to expend 1 charge from the staff and turn the spell back on its caster as if you had cast the spell.\n" +
		toUni("Resist Enchantment") + ". If you fail a saving throw against an Enchantment spell that targets only you, you can turn your failed save into a successful one. You can’t use this property of the staff again until the next dawn.\n" +
		toUni("Regain Charges") + ". The staff regains 1d8 + 2 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff crumbles to dust and is destroyed.",
	weight: 4,
	attunement: true,
	prerequisite: "Requires attunement by a bard, cleric, druid, sorcerer, warlock, or wizard",
	prereqeval: function (v) { return classes.known.bard || classes.known.cleric || classes.known.druid || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
	extraLimitedFeatures: [{
		name: "Resist Enchantment",
		usages: 1,
		recovery: "dawn"
	}],
	usages: 10,
	recovery: "dawn",
	additional: "charges, regains 1d8+2",
	spellcastingAbility: "class",
	spellFirstColTitle: "Ch",
	spellcastingBonus: {
		name: "1 charge",
		spells: ["charm person", "command", "comprehend languages"],
		selection: ["charm person", "command", "comprehend languages"],
		firstCol: 1,
		times: 3
	},
	action: [["reaction", "reflect enchantment (1 charge)"]],
};
MagicItemsList["staff of fire"] = {
	name: "Staff of Fire",
	source: [["D24", 307]],
	type: "staff",
	rarity: "very rare",
	magicItemTable: "?",
	description: "You have resistance to fire while holding this staff. It has 10 charges, regaining 1d6+4 expended charges at dawn. If you use its last charge, roll a d20. On a 1, it is destroyed. You can use its charges to cast Burning Hands (1 charge), Fireball (3 charges), and Wall of Fire (4 charges), using your spellcasting ability.",
	descriptionFull: "You have resistance to fire damage while you hold this staff.\n   The staff has 10 charges. While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC. The table indicates how many charges you must expend to cast the spell: Burning Hands (1 charge), Fireball (3 charges), or Wall of Fire (4 charges).\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff blackens, crumbles into cinders, and is destroyed.",
	attunement: true,
	weight: 4,
	prerequisite: "Requires attunement by a druid, sorcerer, warlock, or wizard",
	prereqeval: function (v) { return classes.known.druid || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
	usages: 10,
	recovery: "dawn",
	additional: "regains 1d6+4",
	dmgres: ["Fire"],
	spellcastingAbility: "class",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["burning hands"],
		selection: ["burning hands"],
		firstCol: 1
	}, {
		name: "3 charges",
		spells: ["fireball"],
		selection: ["fireball"],
		firstCol: 3
	}, {
		name: "4 charges",
		spells: ["wall of fire"],
		selection: ["wall of fire"],
		firstCol: 4
	}]
};
MagicItemsList["staff of flowers"] = {
	name: "Staff of Flowers",
	source: [["D24", 308]],
	type: "staff",
	rarity: "common",
	description: "This staff has 10 charges, regaining 1d6+4 at dawn. As a Magic action, you can use 1 charge to cause a flower of my choice to sprout from a patch of earth or soil within 5 ft of yourself or from the staff itself. The flower is nonmagical and grows or withers as a normal flower would.",
	descriptionFull: "This wooden staff has 10 charges. While holding it, you can take a Magic action to expend 1 charge from the staff and cause a flower to sprout from a patch of earth or soil within 5 feet of yourself, or from the staff itself. Unless you choose a specific kind of flower, the staff creates a mild-scented daisy. The flower is harmless and nonmagical, and it grows or withers as a normal flower would." + toUni("Regaining Charges") + "The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff turns into flower petals and is lost forever.",
	weight: 4,
	usages: 10,
	recovery: "dawn",
	additional: "regains 1d6+4",
	action: [["action", ""]]
};
MagicItemsList["staff of frost"] = {
	name: "Staff of Frost",
	source: [["D24", 308]],
	type: "staff",
	rarity: "very rare",
	magicItemTable: "?",
	description: "You have Resistance to Cold damage while you hold this staff. It has 10 charges, regaining 1d6+4 at dawn. You can use its charges to cast Cone of Cold (5 charges), Fog Cloud (1 charge), Ice Storm (4 charges), and Wall of Ice (4 charges) using your spellcasting ability.",
	descriptionFull: "You have Resistance to Cold damage while you hold this staff.\n   The staff has 10 charges. While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC. The table indicates how many charges you must expend to cast the spell: Cone of Cold (5 charges), Fog Cloud (1 charge), Ice Storm (4 charges), or Wall of Ice (4 charges).\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1. the staff turns to water and is destroyed.",
	attunement: true,
	weight: 4,
	prerequisite: "Requires attunement by a druid, sorcerer, warlock, or wizard",
	prereqeval: function (v) { return classes.known.druid || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
	usages: 10,
	recovery: "dawn",
	additional: "regains 1d6+4",
	dmgres: ["Cold"],
	spellcastingAbility: "class",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["fog cloud"],
		selection: ["fog cloud"],
		firstCol: 1
	}, {
		name: "4 charges",
		spells: ["ice storm", "wall of ice"],
		selection: ["ice storm", "wall of ice"],
		firstCol: 4,
		times: 2
	}, {
		name: "5 charges",
		spells: ["cone of cold"],
		selection: ["cone of cold"],
		firstCol: 5
	}]
};
MagicItemsList["staff of healing"] = {
	name: "Staff of Healing",
	source: [["D24", 308]],
	type: "staff",
	rarity: "rare",
	magicItemTable: "?",
	description: "This staff has 10 charges, regaining 1d6+4 expended charges at dawn. You can use its charges to cast Cure Wounds (1 charge per spell level, up to 4th), Lesser Restoration (2 charges), and Mass Cure Wounds (5 charges) using your spellcasting ability.",
	descriptionFull: "This staff has 10 charges. While holding the staff, you can cast one of the spells on the following table from it, using your spellcasting ability modifier. The table indicates how many charges you must expend to cast the spell: Cure Wounds (1 charge per spell level, up to 4th), Lesser Restoration (2 charges), or Mass Cure Wounds (5 charges).\n" +
		"\n The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff vanishes in a flash of light, lost forever.",
	attunement: true,
	weight: 4,
	prerequisite: "Requires attunement by a bard, cleric, or druid",
	prereqeval: function (v) { return classes.known.bard || classes.known.cleric || classes.known.druid ? true : false; },
	usages: 10,
	recovery: "dawn",
	additional: "regains 1d6+4",
	spellcastingAbility: "class",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1+ charges",
		spells: ["cure wounds"],
		selection: ["cure wounds"],
		firstCol: "1+"
	}, {
		name: "2 charges",
		spells: ["lesser restoration"],
		selection: ["lesser restoration"],
		firstCol: 2
	}, {
		name: "5 charges",
		spells: ["mass cure wounds"],
		selection: ["mass cure wounds"],
		firstCol: 5
	}],
	spellChanges: {
		"cure wounds": {
			noSpellUpcasting: false,
			description: "1 living creature heals 1d8+1d8/SL+spell mod HP; +1 SL/extra charge",
			changes: "The spell level Cure Wounds is cast at depends on the amount of charges spend, 1 charge per spell slot level."
		}
	}
};
MagicItemsList["staff of power"] = {
	name: "Staff of Power",
	source: [["D24", 308]],
	type: "staff",
	rarity: "very rare",
	magicItemTable: "?",
	description: "While holding this quarterstaff, you gain a +2 bonus on saves, AC, and spell attacks. The staff has 20 charges, regaining 2d8+4 at dawn. As a Magic action you can break it, causing a 30-ft Emanation originating from itself. You have a 50 percent to travel to a random plane. If you fail to avoid the effect, you take 16 times the number of remaing charges in the staff in Force damage.",
	descriptionFull: "This staff has 20 charges and can be wielded as a magic Quarterstaff that grants a +2 bonus to attack rolls and damage rolls made with it. While holding it, you gain a +2 bonus to Armor Class, saving throws, and spell attack rolls.\n " + toUni("Spells") + ". While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC. The table indicates how many charges you must expend to cast the spell: Cone of Cold (5 charges), Fireball (5th-level version, 5 charges), Globe of Invulnerability (6 charges), Hold Monster (5 charges), Levitate (2 charges). Lightning Bolt (5th-level version, 5 charges), Magic Missile (1 charge), Ray of Enfeeblement (1 charge), or Wall of Force (5 charges).\n   " + toUni("Retributive Strike") + ". You can take a Magic action to break the staff over your knee or against a solid surface. The staff is destroyed and releases its magic in an explosion that fills a 30-foot Emanation originating from itself. You have a 50 percent chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take Force damage equal to 16 times the number of charges in the staff. Each other creature in the area makes a DC 17 Dexterity saving throw. On a failed save, a creature takes Force damage equal to 4 times the number of charges in the staff. On a successful save, a creature takes half as much damage.",
	attunement: true,
	weight: 4,
	prerequisite: "Requires attunement by a sorcerer, warlock, or wizard",
	prereqeval: function (v) { return classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
	usages: 20,
	recovery: "dawn",
	additional: "regains 2d8+4",
	weaponsAdd: ["Staff of Power"],
	weaponOptions: {
		baseWeapon: "quarterstaff",
		regExpSearch: /^(?=.*staff)(?=.*power).*$/i,
		name: "Staff of Power",
		source: [["PHB2024", "-"]],
		description: "Versatile (1d8), Topple",
		modifiers: [2, 2]
	},
	calcChanges: {
		spellCalc: [
			function (type, spellcasters, ability) {
				if (type == "attack") return 2;
			},
			"While holding the Staff of Power, I have a +2 bonus to spell attack rolls."
		]
	},
	addMod: [{ type: "save", field: "all", mod: 2, text: "While holding the Staff of Power, I gain a +2 bonus to all my saving throws." }],
	extraAC: [{ name: "Staff of Power", mod: 2, magic: true, text: "I gain a +2 bonus to AC while attuned." }],
	action: [["action", " (Retributive Strike)"]],
	spellcastingAbility: "class",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "5 charges; 5th level",
		spells: ["fireball", "lightning bolt"],
		selection: ["fireball", "lightning bolt"],
		firstCol: 5,
		times: 2
	}, {
		name: "6 charges",
		spells: ["globe of invulnerability"],
		selection: ["globe of invulnerability"],
		firstCol: 6
	}, {
		name: "5 charges",
		spells: ["cone of cold", "hold monster", "wall of force"],
		selection: ["cone of cold", "hold monster", "wall of force"],
		firstCol: 5,
		times: 3
	}, {
		name: "2 charges",
		spells: ["levitate"],
		selection: ["levitate"],
		firstCol: 2
	}, {
		name: "1 charge",
		spells: ["magic missile", "ray of enfeeblement"],
		selection: ["magic missile", "ray of enfeeblement"],
		firstCol: 1,
		times: 2
	}],
	spellChanges: {
		"fireball": {
			nameShort: "Fireball (5th level)",
			description: "20-ft rad all crea 10d6 Fire dmg; save halves; unattended flammable objects ignite",
			changes: "Cast as if using a 5th-level spell slot."
		},
		"lightning bolt": {
			nameShort: "Lightning Bolt (5th level)",
			description: "100-ft long 5-ft wide all 10d6 Lightning dmg; save halves; unattended flammable obj ignite",
			changes: "Cast as if using a 5th-level spell slot."
		}
	}
};
MagicItemsList["staff of striking"] = {
	name: "Staff of Striking",
	source: [["D24", 309]],
	type: "staff",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This staff can be wielded as a magic Quarterstaff that grants a +3 bonus to attack and damage rolls and has 10 charges, regaining 1d6+4 at dawn. When you hit with a melee attack using it, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d6 force damage.",
	descriptionFull: "This staff can be wielded as a magic Quarterstaff that grants a +3 bonus to attack and damage rolls made with it.\n   The staff has 10 charges. When you hit with a melee attack using it, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d6 force damage. The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.",
	attunement: true,
	weight: 4,
	usages: 10,
	recovery: "dawn",
	additional: "regains 1d6+4",
	weaponsAdd: ["Staff of Striking"],
	weaponOptions: {
		baseWeapon: "quarterstaff",
		regExpSearch: /^(?=.*staff)(?=.*striking).*$/i,
		name: "Staff of Striking",
		source: [["PHB2024", "-"]],
		modifiers: [3, 3],
		description: "Versatile (1d8), Topple; +1d6 force damage per charge expended."
	}
};
MagicItemsList["staff of swarming insects"] = {
	name: "Staff of Swarming Insects",
	source: [["D24", 309]],
	type: "staff",
	rarity: "rare",
	magicItemTable: "?",
	description: "This staff has 10 charges, regaining 1d6+4 at dawn (On a 1, a swarm of insects consumes and destroys the staff, then disperses). While holding the staff, you can take a Magic action to expend 1 charge to create a swarm of flying insects to fill a 30-ft Emanation that originates from you for 10 minutes that moves with me, making the area Heavily Obscured for anybody but you. A 10+ mph wind disperses it.",
	descriptionFull: "This staff has 10 charges.\n " + toUni("Insect Cloud") + ". While holding the staff, you can use a Magic action and expend 1 charge to cause a swarm of harmless flying insects to spread out in a 30-foot radius from you. The insects remain for 10 minutes, making the area heavily obscured for creatures other than you. The swarm moves with you, remaining centered on you. A wind of at least 10 miles per hour disperses the swarm and ends the effect\n" + toUni("Spells") + ". While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC and spell attack modifier. The table indicates how many charges you must expend to cast the spell: Giant Insect (4 charges) or Insect Plague (5 charges).\n",
	attunement: true,
	weight: 4,
	prerequisite: "Requires attunement by a bard, cleric, druid, sorcerer, warlock, or wizard",
	prereqeval: function (v) { return classes.known.bard || classes.known.cleric || classes.known.druid || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
	usages: 10,
	recovery: "dawn",
	additional: "regains 1d6+4",
	action: [["action", ""]],
	spellcastingAbility: "class",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "4 charges",
		spells: ["giant insect"],
		selection: ["giant insect"],
		firstCol: 4
	}, {
		name: "5 charges",
		spells: ["insect plague"],
		selection: ["insect plague"],
		firstCol: 5
	}]
};
MagicItemsList["staff of the adder"] = {
	name: "Staff of the Adder",
	source: [["D24", 309]],
	type: "staff",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "As a bonus action, you can animate the head of this staff turning it into a vernomous snake for 1 minute or make it inanimate again. While animated, you can use it in melee using your Proficiency Bonus and Wisdom modifier on the attack roll (1d6 piercing + DC 15 Con save or 3d6 poison), but it can be attacked and has AC 15 and 20 HP (full every time). It has Immunity to Poison and Psychic damage. If it reaches 0 HP, the staff is destroyed.",
	descriptionFull: "As a Bonus Action, you can turn the head of this staff into that of an animate, venomous snake for 1 minute or revert the staff to its inanimate form.\n  When you take the Attack action, you can make one of the attack rolls using the animated snake head, which has a reach of 5 feet. Apply your Proficiency Bonus and Wisdom modifier to the attack roll. On a hit, the target takes 1d6 Piercing damage and 3d6 Poison damage.\n  The snake head can be attacked while it is animate. It has AC 15, HP 20, and Immunity to Poison and Psychic damage. If the head drops to 0 Hit Points, the staff is destroyed. As long as it’s not destroyed, the staff regains all lost Hit Points when it reverts to its inanimate form.",
	attunement: true,
	weight: 4,
	action: [["bonus action", " (animate/end)"]],
	weaponOptions: [{
		regExpSearch: /staff of the adder/i,
		name: "Animated Snake Head from Staff of the Adder",
		source: [["PHP2024", "?"]],
		list: "melee",
		ability: 1,
		type: "Natural",
		damage: [1, 6, "piercing"],
		range: "Melee",
		weight: 4,
		description: "+3d6 Poison",
		abilitytodamage: false,
		selectNow: true
	}]
};
MagicItemsList["staff of the magi"] = { // contains contributions by Pengsloth
	name: "Staff of the Magi",
	source: [["D24", 310]],
	type: "staff",
	rarity: "legendary",
	magicItemTable: "?",
	description: "This staff has 50 charges and can be wielded as a magic Quarterstaff that grants a +2 bonus to attack rolls and damage rolls made with it and gives Advantage on saving throws against spells. As a Reaction, you can absorb a spell targeting only you, converting its spell level to charges and cancelling its effect. If this brings it over 50 charges or you break it is as an action, it explodes.",
	descriptionFull: "This staff has 50 charges and can be wielded as a magic Quarterstaff that grants a +2 bonus to attack rolls and damage rolls made with it. While you hold it, you gain a +2 bonus to spell attack rolls.\n" + toUni("Spell Absorption") + ". While holding the staff, you have Advantage on saving throws against spells. In addition, you can take a Reaction when another creature casts a spell that targets only you. If you do, the staff absorbs the magic of the spell, canceling its effect and gaining a number of charges equal to the absorbed spell’s level. However, if doing so brings the staff’s total number of charges above 50, the staff explodes as if you activated its Retributive Strike (see below)..\n   " + toUni("Spells") + ". While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC. The table indicates how many charges you must expend to cast the spell: Arcane Lock (0 charges), Conjure Elemental (7 charges), Detect Magic (0 charges), Dispel Magic (3 charges), Enlarge/Reduce (0 charges), Fireball (7th-level version, 7 charges), Flaming Sphere (2 charges), Ice Storm (4 charges), Invisibility (2 charges), Knock (2 charges), Light (0 charges), Lightning Bolt (7th-level version, 7 charges), Mage Hand (0 charges), Passwall (5 charges), Plane Shift (7 charges), Protection from Evil and Good (0 charges), Telekinesis (5 charges), Wall of Fire (4 charges), or Web (2 charges).\n " + toUni("Retributive Strike") + ". You can take a Magic action to break the staff over your knee or against a solid surface. The staff is destroyed and releases its magic in an explosion that fills a 30-foot Emanation originating from itself. You have a 50 percent chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take Force damage equal to 16 \xD7 the number of charges in the staff. Each other creature in the area makes a DC 17 Dexterity saving throw. On a failed save, a creature takes Force damage equal to 6 \xD7 the number of charges in the staff. On a successful save, a creature takes half as much damage.\n\n" + "The staff regains 4d6 + 2 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 20, the staff regains 1d12 + 1 charges.",
	attunement: true,
	weight: 4,
	prerequisite: "Requires attunement by a sorcerer, warlock, or wizard",
	prereqeval: function (v) {
		return classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false;
	},
	weaponsAdd: ["Staff of the Magi"],
	weaponOptions: {
		baseWeapon: "quarterstaff",
		regExpSearch: /^(?=.*staff)(?=.*magi).*$/i,
		name: "Staff of the Magi",
		source: [["PHB2024", "-"]],
		modifiers: [2, 2]
	},
	calcChanges: {
		spellCalc: [
			function (type, spellcasters, ability) {
				if (type == "attack") return 2;
			},
			"While holding the Staff of the Magi I have a +2 bonus to spell attack rolls."
		]
	},
	usages: 50,
	recovery: "dawn",
	additional: "regains 4d6+2",
	savetxt: { adv_vs: ["spells"] },
	action: [
		["reaction", " (Spell Absorption)"],
		["action", " (Retributive Strike)"]
	],
	spellcastingAbility: "class",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "7 charges",
		spells: ["conjure elemental", "plane shift"],
		selection: ["conjure elemental", "plane shift"],
		firstCol: 7,
		times: 2
	}, {
		name: "7 charges; 7th level",
		spells: ["fireball", "lightning bolt"],
		selection: ["fireball", "lightning bolt"],
		firstCol: 7,
		times: 2
	}, {
		name: "5 charges",
		spells: ["passwall", "telekinesis"],
		selection: ["passwall", "telekinesis"],
		firstCol: 5,
		times: 2
	}, {
		name: "4 charges",
		spells: ["ice storm", "wall of fire"],
		selection: ["ice storm", "wall of fire"],
		firstCol: 4,
		times: 2
	}, {
		name: "3 charges",
		spells: ["dispel magic"],
		selection: ["dispel magic"],
		firstCol: 3
	}, {
		name: "2 charges",
		spells: ["flaming sphere", "invisibility", "knock", "web"],
		selection: ["flaming sphere", "invisibility", "knock", "web"],
		firstCol: 2,
		times: 4
	}, {
		name: "0 charges",
		spells: ["arcane lock", "detect magic", "enlarge/reduce", "light", "mage hand", "protection from evil and good"],
		selection: ["arcane lock", "detect magic", "enlarge/reduce", "light", "mage hand", "protection from evil and good"],
		firstCol: "atwill",
		times: 6
	}],
	spellChanges: {
		"fireball": {
			nameShort: "Fireball (7th level)",
			description: "20-ft rad all crea 12d6 Fire dmg; save halves; unattended flammable objects ignite",
			changes: "Cast as if using a 7th-level spell slot."
		},
		"lightning bolt": {
			nameShort: "Lightning Bolt (7th level)",
			description: "100-ft long 5-ft wide all 12d6 Lightning dmg; save halves; unattended flammable obj ignite",
			changes: "Cast as if using a 7th-level spell slot."
		},
		"conjure elemental": {
			time: "1 a",
			changes: "Casting time is only 1 action instead of 1 minute."
		}
	}
};
MagicItemsList["staff of the python"] = {
	name: "Staff of the Python",
	source: [["D24", 311]],
	type: "staff",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "As a Magic action, you can throw this staff to an unoccupied space within 10 feet, transforming it to a Giant Constrictor Snake. It shares your Initiative and takes its turn immediately after you. You can command it mentally on your turn if within 60 ft. As a bonus action, you can command it to revert back to a staff. If the snake reaches 0 HP, the staff is destroyed.",
	descriptionFull: "As a Magic action, you can throw this staff so that it lands in an unoccupied space within 10 feet of you, causing the staff to become a Giant Constrictor Snake in that space. The snake is under your control and shares your Initiative count, taking its turn immediately after yours.\n   On your turn, you can mentally command the snake (no action required) if it is within 60 feet of you and you don’t have the Incapacitated condition. You decide what action the snake takes and where it moves during its turn, or you can issue it a general command, such as to attack your enemies or guard a location. Absent commands from you, the snake defends itself.\n   As a Bonus Action, you can command the snake to revert to staff form in its current space, and you can’t use the staff’s property again for 1 hour. If the snake is reduced to 0 Hit Points, it dies and reverts to its staff form; the staff then shatters and is destroyed. If the snake reverts to staff form before losing all its Hit Points, it regains all of them.",
	attunement: true,
	weight: 4,
	action: [["action", " (animate)"], ["bonus action", " (end)"]]
};
MagicItemsList["staff of the woodlands"] = {
	name: "Staff of the Woodlands",
	source: [["D24", 311]],
	type: "staff",
	rarity: "rare",
	magicItemTable: "?",
	description: "This magic Quarterstaff gives me a +2 bonus on spell attacks, attack and damage rolls, as well as allowes me to cast multiple spells from it. It has 6 charges, regaining 1d6 at dawn. As a Magic action, I can plant it into the ground and expend 1 charge to have it grow into a 60 ft tree, which it remains until I use another Magic action to revert it back.",
	descriptionFull: "This staff has 6 charges and can be wielded as a magic Quarterstaff that grants a +2 bonus to attack rolls and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   It regains 1d6 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". Using your spell save DC, you can to expend 1 or more of the staff's charges to cast one of the following spells from it: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Pass Without Trace (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n " + toUni("Tree Form") + ". You can take a Magic action to plant one end of the staff in earth in an unoccupied space and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of Transmutation magic that can be discerned with the Detect Magic spell. While touching the tree and using a Magic action, you return the staff to its normal form. Any creature in the tree falls when the tree reverts to a staff.",
	attunement: true,
	weight: 4,
	prerequisite: "Requires attunement by a druid",
	prereqeval: function (v) { return classes.known.druid ? true : false; },
	action: [["action", ""]],
	usages: 6,
	recovery: "dawn",
	additional: "regains 1d6",
	weaponsAdd: ["Staff of the Woodlands"],
	weaponOptions: {
		baseWeapon: "quarterstaff",
		regExpSearch: /^(?=.*staff)(?=.*woodlands).*$/i,
		name: "Staff of the Woodlands",
		source: [["PHB2024",]],
		modifiers: [2, 2]
	},
	calcChanges: {
		spellCalc: [
			function (type, spellcasters, ability) {
				if (type == "attack") return 2;
			},
			"While holding the Staff of the Woodlands, I have a +2 bonus to spell attack rolls."
		]
	},
	spellcastingAbility: "class",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["animal friendship", "speak with animals"],
		selection: ["animal friendship", "speak with animals"],
		firstCol: 1,
		times: 2
	}, {
		name: "2 charges",
		spells: ["barkskin", "locate animals or plants", "pass without trace"],
		selection: ["barkskin", "locate animals or plants", "pass without trace"],
		firstCol: 2,
		times: 2
	}, {
		name: "3 charges",
		spells: ["speak with plants"],
		selection: ["speak with plants"],
		firstCol: 3
	}, {
		name: "5 charges",
		spells: ["awaken"],
		selection: ["awaken"],
		firstCol: 5
	}, {
		name: "6 charges",
		spells: ["wall of thorns"],
		selection: ["wall of thorns"],
		firstCol: 6
	}],
	spellChanges: {
		"awaken": {
			time: "1 a",
			changes: "Casting time is only 1 action instead of 8 hours."
		}
	}
};
MagicItemsList["staff of thunder and lightning"] = {
	name: "Staff of Thunder and Lightning",
	source: [["D24", 311]],
	type: "staff",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This +2 Quarterstaff has 5 special abilities that each can be used once per dawn. Both 'Lightning' and 'Thunder' can be used when I hit a melee attack with it; while 'Lightning Strike'and 'Thunderclap' require a Magic action to use. See the Notes page for what all of these abilities entail.",
	descriptionFull: "This staff can be wielded as a magic Quarterstaff that grants a +2 bonus to attack rolls and damage rolls made with it. It also has the following additional properties. Once one of these properties is used, it can’t be used again until the next dawn.\n   " +
		toUni("Lightning") + ". When you hit with a melee attack using the staff, you can cause the target to take an extra 2d6 Lightning damage (no action required).\n   " +
		toUni("Thunder") + ". When you hit with a melee attack using the staff, you can cause the staff to emit a crack of thunder, audible out to 300 feet (no action required). The target you hit must succeed on a DC 17 Constitution saving throw or have the Stunned condition until the end of your next turn.\n" +
		toUni("Lightning Strike") + ". You can take a Magic action to cause a bolt of lightning to leap from the staff's tip in a Line that is 5 feet wide and 120 feet long. Each creature in that Line must make a DC 17 Dexterity saving throw, taking 9d6 Lightning damage on a failed save, or half as much damage on a successful one.\n" +
		toUni("Thunderclap") + ". You can take a Magic action to cause the staff to produce a thunderclap audible out to 600 feet. Every creature a within 60-foot Emanation origination from you must make a DC 17 Constitution saving throw. On a failed save, a creature takes 2d6 Thunder damage and has the Deafened condition for 1 minute. On a successful save, a creature takes half damage and isn't deafened.\n " +
		toUni("Thunder and Lightning") + ". Thunder and Lightning. Immediately after you hit with a melee attack using the staff, you can take a Bonus Action to use the Lightning and Thunder properties (see above) at the same time. Doing so doesn’t expend the daily use of those properties, only the use of this one.",
	attunement: true,
	weight: 4,
	action: [["action", "Staff of T\u0026L Lightning Strike, Thunderclap"], ["bonus action", "Thunder and Lighting"]],
	weaponsAdd: ["Staff of Thunder and Lightning"],
	weaponOptions: {
		baseWeapon: "quarterstaff",
		regExpSearch: /staff of thunder and lighting/i,
		name: "Staff of Thunder and Lightning",
		source: [["SRD", 245], ["D", 204]],
		description: "Versatile (1d8), Topple; Lightning: 1\xD7 per dawn, +2d6 lightning damage; Thunder: 1\xD7 per dawn DC 17 Con save or 1 round stunned",
		modifiers: [2, 2]
	},
	extraLimitedFeatures: [{
		name: "Staff of T\u0026L [Lightning]",
		usages: 1,
		recovery: "dawn"
	}, {
		name: "Staff of T\u0026L [Thunder]",
		usages: 1,
		recovery: "dawn"
	}, {
		name: "Staff of T\u0026L [Lightning Strike]",
		usages: 1,
		recovery: "dawn"
	}, {
		name: "Staff of T\u0026L [Thunderclap]",
		usages: 1,
		recovery: "dawn"
	}, {
		name: "Staff of T\u0026L [Thunder and Lightning]",
		usages: 1,
		recovery: "dawn"
	}],
	toNotesPage: [{
		name: "Special Properties",
		note: [
			"\n   This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. It also has the following additional properties. When one of these properties is used, it can't be used again until the next dawn.",
			" \u2022 Lightning. When you hit with a melee attack using the staff, you can cause the target to take an extra 2d6 Lightning damage (no action required).",
			" \u2022 Thunder. When you hit with a melee attack using the staff, you can cause the staff to emit a crack of thunder audible out to 300 feet (no action required). The target you hit must succeed on a DC 17 Constitution saving throw or have the Stunned condition until the end of your next turn.",
			" \u2022 Lightning Strike. You can take a Magic action to cause a bolt of lightning to leap from the staff’s tip in a Line that is 5 feet wide and 120 feet long. Each creature in that Line makes a DC 17 Dexterity saving throw, taking 9d6 Lightning damage on a failed save or half as much damage on a successful one.",
			" \u2022 Thunderclap. You can take a Magic action to cause the staff to produce a thunderclap audible out to 600 feet. Every creature within a 60-foot Emanation originating from you makes a DC 17 Constitution saving throw. On a failed save, a creature takes 2d6 Thunder damage and has the Deafened condition for 1 minute. On a successful save, a creature takes half as much damage only.",
			" \u2022 Thunder and Lightning. Immediately after you hit with a melee attack using the staff, you can take a Bonus Action to use the Lightning and Thunder properties (see above) at the same time. Doing so doesn’t expend the daily use of those properties, only the use of this one.",
		].join("\n")
	}]
};
MagicItemsList["staff of withering"] = {
	name: "Staff of Withering",
	source: [["D24", 312]],
	type: "staff",
	rarity: "rare",
	magicItemTable: "?",
	description: "This staff has 3 charges, regaining 1d3 at dawn and functions as a magic Quarterstaff. On a hit with it, I can expend 1 charge to deal an extra 2d10 Necrotic damage to the target, which must then make a DC 15 Con save or have Disadvantage on any ability check or save that uses Strength or Constitution for 1 hour.",
	descriptionFull: "This staff has 3 charges and regains 1d3 expended charges daily at dawn.\n   The staff can be wielded as a magic Quarterstaff. On a hit, it deals damage as a normal Quarterstaff, and you can expend 1 charge to deal an extra 2d10 Necrotic damage to the target and force it to make a DC 15 Constitution saving throw. On a failed save, the target has Disadvantage for 1 hour on any ability check or saving throw that uses Strength or Constitution.",
	attunement: true,
	weight: 4,
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	weaponsAdd: ["Staff of Withering"],
	weaponOptions: {
		baseWeapon: "quarterstaff",
		regExpSearch: /^(?=.*staff)(?=.*withering).*$/i,
		name: "Staff of Withering",
		source: [["PHB2024", "-"]],
		description: "Versatile (1d8), Topple; 1 charge / +2d10 Necrotic and DC Con Save or DisAdv 1 hr (Str or Con)"
	}
};
MagicItemsList["stone of controlling earth elementals"] = {
	name: "Stone of Controlling Earth Elementals",
	source: [["D24", 312]],
	type: "wondrous item",
	rarity: "rare",
	magicItemTable: "?",
	description: "While touching this 5-pound stone to the ground, you can take a Magic action to summon an Earth Elemental. It appears in an unoccupied space you choose within 30-ft of yourself, obeys your commands, and its turn is immediately after yours. It disappears after 1 hour, when it dies, or when dismissed as a Bonus Action. The stone can't be used this way again until the next dawn.",
	descriptionFull: "While touching this 5-pound stone to the ground, you can take a Magic action to summon an Earth Elemental. The elemental appears in an unoccupied space you choose within 30 feet of yourself, obeys your commands, and takes its turn immediately after you on your Initiative count. The elemental disappears after 1 hour, when it dies, or when you dismiss it as a Bonus Action. The stone can’t be used this way again until the next dawn.",
	weight: 5,
	spellcastingBonus: {
		name: "Earth Elemental only",
		spells: ["conjure elemental"],
		selection: ["conjure elemental"],
		firstCol: "oncelr"
	},
	usages: 1,
	recovery: "dawn",
	spellChanges: {
		"conjure elemental": {
			time: "1 a",
			components: "V,M\u0192",
			compMaterial: "The Stone of Controlling Earth Elementals needs to touch the ground to cast this spell.",
			description: "CR 5 earth elemental that obeys my verbal commands; on broken conc. elemental breaks free",
			changes: "Using the Stone of Controlling Earth Elementals, the spell only takes 1 action instead of 1 minute to cast, but can only summon an Earth Elemental."
		}
	}
};
MagicItemsList["stone of good luck"] = {
	name: "Stone of Good Luck",
	source: [["D24", 312]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While this polished agate is on my person, you gain a +1 bonus to ability checks and saving throws.",
	descriptionFull: "While this polished agate is on your person, you gain a +1 bonus to ability checks and saving throws.",
	attunement: true,
	addMod: [
		{ type: "save", field: "all", mod: 1, text: "I gain a +1 bonus on all my saving throws." },
		{ type: "skill", field: "all", mod: 1, text: "I gain a +1 bonus on all my ability checks." },
		{ type: "skill", field: "Init", mod: 1, text: "I gain a +1 bonus on all my ability checks." }
	]
};
MagicItemsList["sun blade"] = {
	name: "Sun Blade",
	source: [["D24", 312]],
	type: "weapon (longsword)",
	rarity: "rare",
	magicItemTable: "?",
	attunement: true,
	description: "As a Bonus Action, you can have this hilt create a blade of radiance. While the blade exists, it acts like a magic Longsword that does +2 to attack and damage rolls, Radiant damage instead of Slashing (+1d8 to undead), has Finesse, emits Bright Light in a 15-ft radius and Dim Light in another 15 ft. You can take a Magic action, I can change the light's radius by 5 ft for each (Bright/Dim) to a maximum of 30 ft each or min of 10ft.",
	descriptionFull: "This item appears to be a longsword hilt.\n" + toUni("Blade of Radiance") + ". While grasping the hilt, you can take a Bonus Action to cause a blade of pure radiance to spring into existence or make the blade disappear. While the blade exists, this magic weapon functions as a Longsword with the Finesse property. If you are proficient with Longswords or Shortswords, you are proficient with the Sun Blade..\n   You gain a +2 bonus to attack rolls and damage rolls made with this weapon, which deals Radiant damage instead of Slashing damage. When you hit an Undead with it, that target takes an extra 1d8 Radiant damage.\n" + toUni("Sunlight") + ". The sword’s luminous blade emits Bright Light in a 15-foot radius and Dim Light for an additional 15 feet. The light is sunlight. While the blade persists, you can take a Magic action to expand or reduce its radius of Bright Light and Dim Light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.",
	weight: 3,
	action: [["bonus action", "(BladeofRadiance"], ["action", " (change light)"]],
	weaponsAdd: ["Sun Blade"],
	weaponOptions: {
		baseWeapon: "longsword",
		regExpSearch: /^(?=.*sun)(?=.*blade).*$/i,
		name: "Sun Blade",
		source: [["PHN2024", "-"]],
		damage: [1, 8, "radiant"],
		description: "Finesse, Versatile (1d10), Sap; +1d8 (Radiant) to undead",
		modifiers: [2, 2]
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (v.theWea.name == "Sun Blade" && !fields.Proficiency) {
					fields.Proficiency = CurrentProfs.weapon.otherWea && CurrentProfs.weapon.otherWea.finalProfs.indexOf("shortsword") !== -1;
				}
			}, 'If you are proficient with Longsword or Shortswords, you are proficient with the Sun Blade.'
		]
	}
};
MagicItemsList["sword of answering"] = {
	name: "Sword of Answering",
	source: [["D24", 313]],
	type: "weapon (longsword)",
	rarity: "legendary",
	magicItemTable: "?",
	description: "You gain a +3 bonus to attack and damage rolls made with this sword. You can take a Reaction againt any creature within your reach damages me, and you can make one melee attack with this sword with Advantage. This attack ignores damage Immunities and Resistances of the target.",
	descriptionFull: "You gain a +3 bonus to attack and damage rolls made with this sword. In addition, while you hold the sword, you can take a Reaction to make one melee attack with it against any creature in your reach that deals damage to you. You have Advantage on the attack roll, and any damage dealt with this special attack ignores any damage Immunity or Resistance the target has to that damage.",
	attunement: true,
	weight: 3,
	action: [["reaction", ""]],
	weaponOptions: [{
		baseWeapon: "longsword",
		regExpSearch: /^(?=.*sword)(?=.*answering).*$/i,
		name: "Sword of Answering",
		source: [["PHB2024", "-"]],
		modifiers: [3, 3],
		selectNow: true,
		description: "Verstaile (1d10), Sap; Adv on Reaction attack & Ignore Immune/Resist."
	}],
};
MagicItemsList["sword of life stealing"] = {
	name: "Sword of Life Stealing",
	nameTest: "of Life Stealing",
	source: [["D24", 314]],
	type: "weapon (glaive, greatsword, longsword, rapier, scimitar, or shortsword)",
	rarity: "rare",
	magicItemTable: "?",
	attunement: true,
	description: "When you attack a creature with this magic weapon and roll a 20 on the attack roll, that target takes an extra 15 Necrotic damage if it isn't a Construct or an Undead. Gain Temporary HP equal to amount of Necrotic damage taken.",
	descriptionFull: "When you attack a creature with this magic weapon and roll a 20 on the d20 for the attack roll, that target takes an extra 15 Necrotic damage if it isn’t a Construct or an Undead, and you gain Temporary Hit Points equal to the amount of Necrotic damage taken.",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "prefix",
		descriptionChange: ["replace", "weapon"],
		excludeCheck: function (inObjKey, inObj) {
			var testRegex = /glaive|greatsword|longsword|rapier|scimitar|shortsword/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/glaive|greatsword|longsword|rapier|scimitar|shortsword/i).test(v.baseWeaponName) && (/^(?=.*life)(?=.*stealing).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'On 20 to hit: +15 Necrotic dmg, +15 temp HP';
				}
			},
			'If you include the words "Life Stealing" in a the name of a sword, it will be treated as the magic weapon Sword of Life Stealing. It does +15 necrotic damage when you roll a 20 on the attack roll and then gives you 15 temporary hit points. It doesn\'t work against Constructs or Undead.'
		]
	}
};
MagicItemsList["sword of sharpness"] = {
	name: "Sword of Sharpness",
	nameTest: "of Sharpness",
	source: [["D24", 314]],
	type: "weapon (glaive, greatsword, longsword, or scimitar)",
	rarity: "very rare",
	magicItemTable: "?",
	attunement: true,
	description: "When I roll a 20 to hit with this magic weapon vs. a creature, it takes +14 slashing damage and gaines 1 exhaustion level. It does maximum damage vs. objects.",
	descriptionFull: "When you attack an object with this magic weapon and hit, maximize your weapon damage dice against the target.\n   When you attack a creature with this weapon and roll a 20 on the d20 for the attack roll, that target takes an extra 14 Slashing damage and gains 1 Exhaustion level.",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "prefix",
		descriptionChange: ["replace", "weapon"],
		excludeCheck: function (inObjKey, inObj) {
			var testRegex = /glaive|greatsword|longsword|scimitar/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/glaive|greatsword|longsword|scimitar/i).test(v.baseWeaponName) && (/of sharpness/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'On 20 to hit: +14 dmg; Max dmg vs. objects';
				}
			},
			'If you include the words "of Sharpness" in the name of a weapon, it will be treated as the magic weapon Sword of Sharpness. It deals maximum damage against objects. On a roll of 20 to hit against creatures it deals +14 slashing damage.'
		]
	}
};
MagicItemsList["sword of vengeance"] = {
	name: "Sword of Vengeance",
	nameTest: "of Vengeance",
	source: [["D24", 314]],
	type: "weapon (glaive, greatsword, longsword, rapier, scimitar, or shortsword)",
	rarity: "uncommon",
	magicItemTable: "?",
	attunement: true,
	description: "You gain +1 to attack rolls and damage rolls. This weapon is cursed, you can't part with it and have Disadvantage on attacks with other weapons. If you take damage in combat, you must make a DC 15 Wis save or you will attack the attacker until it drops to 0 HP or can't attack it in melee anymore.",
	descriptionFull: "You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n   " + toUni("Curse") + ". This weapon is cursed and possessed by a vengeful spirit. Becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the weapon, keeping it on your person at all times. While attuned to this weapon, you have Disadvantage on attack rolls made with weapons other than this one.\n   In addition, while the weapon is on your person, you must succeed on a DC 15 Wisdom saving throw whenever you take damage from another creature in combat. On a failed save, you must attack the creature that damaged you until you drop to 0 hit points or it does, or until you can't reach the creature to make a melee attack against it.\n   You can break the curse in the usual ways. Alternatively, casting Banishment on the weapon forces the vengeful spirit to leave it. The sword then becomes a +1 Weapon with no other properties.",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "prefix",
		descriptionChange: ["prefix", "sword"],
		excludeCheck: function (inObjKey, inObj) {
			var testRegex = /glaive|greatsword|longsword|rapier|scimitar|shortsword/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/glaive|greatsword|longsword|rapier|scimitar|swordsword/i).test(v.baseWeaponName) && (/of vengeance/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Cursed';
				}
			},
			'If I include the words "of Vengeance" in the name of a weapon, it will be treated as the magic weapon Sword of Vengeance. It has +1 to hit and damage, but also bears a curse.'
		],
		atkCalc: [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/glaive|greatsword|longsword|rapier|scimitar|swordsword/i).test(v.baseWeaponName) && (/of vengeance/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
		]
	}
};
MagicItemsList["sword of wounding"] = {
	name: "Sword of Wounding",
	nameTest: "of Wounding",
	source: [["D24", 314]],
	type: "weapon (glaive, greatsword, longsword, rapier, scimitar, or shortsword)",
	rarity: "rare",
	magicItemTable: "?",
	attunement: true,
	description: "When you hit a creature with an attack using this magic weapon, the target takes an extra 2d6 Necrotic damage and must succeed on a DC 15 Constitution saving throw or be unable to regain Hit Points for 1 hour. The target repeats the save at the end of each of its turns, ending the effect on itself on a success..",
	descriptionFull: "When you hit a creature with an attack using this magic weapon, the target takes an extra 2d6 Necrotic damage and must succeed on a DC 15 Constitution saving throw or be unable to regain Hit Points for 1 hour. The target repeats the save at the end of each of its turns, ending the effect on itself on a success.",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "prefix",
		descriptionChange: ["replace", "weapon"],
		excludeCheck: function (inObjKey, inObj) {
			var testRegex = /Glaive|Greatsword|Longsword|Rapier|Scimitar|Shortsword/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/Glaive|Greatsword|Longsword|Rapier|Scimitar|Shortsword/i).test(v.baseWeaponName) && (/of wounding/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'target: +2d6 Necrotic dmg; DC 15 CON Save or no HP 1 hour';
				}
			},
			'If you include the words "of Wounding" in a the name of a weapon, it will be treated as the magic weapon Sword of Wounding.'
		]
	}
};
MagicItemsList["sylvan talon"] = {
	name: "Sylvan Talon",
	source: [["D24", 314]],
	type: "weapon (dagger, rapier, scimitar, shortsword, sickle, or spear)",
	rarity: "common",
	magicItemTable: "?",
	attunement: true,
	description: "You understand nonwritten communication of all Fey, and they understand yours. You can use this weapon to cast Message as a Magic action once per day.",
	descriptionFull: "While this weapon is on your person, you understand the nonwritten communication of all Fey, and they understand yours.\n\n" +
		toUni("Secret Message") + "\n\n  As a Magic action, you can use the weapon to cast Message. Once this property is used, it can't be used again until the next dawn.",
	usages: 1,
	recovery: "dawn",
	action: [["action", "Talon (Secret Msg)"]],
	languageProfs: ["Fey - nonwritten"],
	spellcastingBonus: [{
		name: "Secret Msg",
		spells: ["message"],
		selection: ["message"],
		firstCol: "oncelr"
	}],
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "brackets",
		descriptionChange: ["replace", "weapon"],
		excludeCheck: function (inObjKey, inObj) {
			var testRegex = /Dagger|Rapier|Scimitar|Shortsword|Sickle|Spear/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon)) && ((/^(?=.*sylvan)(?=.*talon).*$/i)).test(v.WeaponTextName);
		}
	},
};
MagicItemsList["talisman of pure good"] = {
	name: "Talisman of Pure Good",
	source: [["D24", 314]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	description: "You can use this talisman as a Holy Symbol, and it gives a +2 bonus to your spell attacks while worn or held. Any Fiend or Undead that touches the talisman takes 8d6 Radiant, and again each time it ends its turn holding or carrying the talisman. As a Magic action, you can use 1 of its 7 charges to have one creature within 120 ft make a DC 20 Dex save, if the target is a Fiend or Undead, it has DisAdv on the roll. On succussful save, target takes 4d6 Psychic. On fail, it falls into the fissure and is destroyed. On last charge, the talisman is destroyed.",
	descriptionFull: "This talisman is a mighty symbol of goodness. A Fiend or an Undead that touches the talisman takes 8d6 Radiant damage and takes the damage again each time it ends its turn holding or carrying the talisman.\n" +
		toUni("Holy Symbol") + ". You can use the talisman as a Holy Symbol. You gain a +2 bonus to spell attack rolls while you wear or hold it.\n " +
		toUni("Pure Rebuke") + ". The talisman has 7 charges. While wearing or holding the talisman, you can take a Magic action to expend 1 charge and target one creature you can see on the ground within 120 feet of yourself. A flaming fissure opens under the target, and the target makes a DC 20 Dexterity saving throw. If the target is a Fiend or an Undead, it has Disadvantage on the save. On a failed save, the target falls into the fissure and is destroyed, leaving no remains. On a successful save, the target isn’t cast into the fissure but takes 4d6 Psychic damage from the ordeal. In either case, the fissure then closes, leaving no trace of its existence. When you expend the last charge, the talisman disperses into motes of golden light and is destroyed.",
	attunement: true,
	weight: 1,
	prerequisite: "Requires attunement by a Cleric or Paladin",
	prereqeval: function (v) {
		return classes.known.cleric || classes.known.paladin ? true : false;
	},
	usages: 7,
	recovery: "never",
	action: [["action", "Pure Rebuke"]],
	calcChanges: {
		spellCalc: [
			function (type, spellcasters, ability) {
				if (type == "attack") return 2;
			},
			"While I wear or hold the Talisman of Pure Good, I have a +2 bonus to spell attack rolls."
		]
	},
};
MagicItemsList["talisman of the sphere"] = {
	name: "Talisman of the Sphere",
	source: [["D24", 315]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	description: "While holding or wearing this talisman, you have Advantage on any Intelligence (Arcana) check to control a Sphere of Annihilation. In addition, when you start your turn with control over a Sphere of Annihilation, you can take a Magic action to move it 10 ft plus 10 ft plus your Intelligence modifier.",
	descriptionFull: "While holding or wearing this talisman, you have Advantage on any Intelligence (Arcana) check you make to control a Sphere of Annihilation. In addition, when you start your turn in control of a Sphere of Annihilation, you can take a Magic action to move it 10 feet plus a number of additional feet equal to 10 times your Intelligence modifier. This movement doesn’t have to be in a straight line.",
	attunement: true,
	action: [["action", ""]],
	vision: [["Adv. on Int (Arcana) to control Sphere of Annihil.", 1]],
	weight: 1
};
MagicItemsList["talisman of ultimate evil"] = {
	name: "Talisman of Ultimate Evil",
	source: [["D24", 315]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	description: "You can use this talisman as a Holy Symbol and if you are an evil cleric or paladin, it gives a +2 bonus on spell attack rolls while worn or held. As a Magic action, you can use 1 of its 6 charges to have and target 1 creature you can see on the ground within within 120 ft and create a flaming fissure under the target. The target must make a DC 20 Dex save. If target is Celestial, is has Disadvantage on the save. On fail, target falls into fissure and is destroyed. On save, the target takes 4d6 Psychic damage. Non-evil creatures touching it take 8d6 Necrotic damage.",
	descriptionFull: "This item symbolizes unrepentant evil. A creature that isn't a Fiend or Undead takes 8d6 Necrotic damage and takes the damage again each time it ends its turn holding or carrying the talisman\n" +
		toUni("Holy Symbol") + ". You can use the talisman as a Holy Symbol. You gain a +2 bonus to spell attack rolls while you wear or hold it.\n" +
		toUni("Ultimate End") + ". The talisman has 6 charges. While wearing or holding the talisman, you can take a Magic action to expend 1 charge and target one creature you can see on the ground within 120 feet of yourself. A flaming fissure opens under the target, and the target makes a DC 20 Dexterity saving throw. If the target is a Celestial, it has Disadvantage on the save. On a failed save, the target falls into the fissure and is destroyed, leaving no remains. On a successful save, the target isn’t cast into the fissure but takes 4d6 Psychic damage from the ordeal. In either case, the fissure then closes, leaving no trace of its existence. When you expend the last charge, the talisman dissolves into foul-smelling slime and is destroyed.",
	attunement: true,
	weight: 1,
//Commented for now as it isn't in the book or DDB. Kept for later.
//	prerequisite: "Requires attunement by a creature of evil alignment",
//	prereqeval: function (v) { return (/evil/i).test(What("Alignment")); },
	usages: 6,
	recovery: "never",
	action: [["action", ""]],
	calcChanges: {
		spellCalc: [
			function (type, spellcasters, ability) {
				if (type == "attack" && (classes.known.paladin || classes.known.cleric) && (/evil/i).test(What("Alignment"))) return 2;
			},
			"If I'm an evil cleric or paladin, I gain a +2 bonus on my spell attack rolls while wearing or holding the Talisman of Ultimate Evil."
		]
	}
};
MagicItemsList["talking doll"] = {
	name: "Talking Doll",
	source: [["D24", 315]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	attunement: true,
	description: "During a short rest with this doll within 5 ft of you, you can tell it to say up to 6 phrases of up to 6 words each, and set an observable condition under which the doll speaks each phrase. Conditions must happen within 5 ft of the doll. The doll can remember only 6 phrases that are lost when my attunement to it ends.",
	descriptionFull: "While this doll is within 5 feet of you, you can spend a Short Rest telling it to say up to six phrases, none of which can be more than six words long, and set a condition under which the doll speaks each phrase. You can also replace old phrases with new ones. Whatever the condition, it must occur within 5 feet of the doll to make it speak. For example, whenever someone picks up the doll, it might say, “I want a piece of candy.” The doll’s phrases are lost when your Attunement to the doll ends."
};
MagicItemsList["tankard of sobriety"] = {
	name: "Tankard of Sobriety",
	source: [["D24", 315]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "This tankard has a stern face sculpted into one side. You can drink ale, wine, or any other nonmagical alcoholic beverage poured into it without becoming inebriated. The tankard has no effect on magical liquids or harmful substances such as poison.",
	descriptionFull: "This tankard has a stern face sculpted into one side. You can drink ale, wine, or any other nonmagical alcoholic beverage poured into it without becoming inebriated. The tankard has no effect on magical liquids or harmful substances such as poison.",
	weight: 1
};
MagicItemsList["tentacle rod"] = {
	name: "Tentacle Rod",
	source: [["D24", 316]],
	type: "rod",
	rarity: "rare",
	magicItemTable: "?",
	description: "As a Magic action, all 3 tentacles of this rod attack with 15 ft reach, +9 to hit, dealing 1d6 Psychic damage. If a target is hit by all 3 it must make a DC 15 Dex save or be Restrained until you have the Incapacitated condition, released by Bonus Action, or until the target is no longer within 15 feet. While Restrained, the target takes 3d6 Psychic damage at the start of each of its turns. Repeat the save at the end of each of its turns.",
	descriptionFull: "This rod ends in three rubbery tentacles. While holding the rod, you can take a Magic action to direct the tentacles to stretch outward, each one attacking a creature you can see within 15 feet of yourself. For each tentacle, make a melee attack roll with a +9 bonus. A tentacle deals 1d6 Psychic damage on a hit. If you hit the same target with all three tentacles, the target must succeed on a DC 15 Dexterity saving throw or have the Restrained condition until you have the Incapacitated condition, until you take a Bonus Action to release the target, or until the target is no longer within 15 feet of you. While Restrained in this way, the target takes 3d6 Psychic damage at the start of each of its turns. At the end of each of its turns, the target repeats the save, ending the effect on itself on a success.",
	attunement: true,
	weight: 2,
	action: [["action", "Tentacles"], "bonus action", "Release"],
	weaponOptions: [{
		regExpSearch: /^(?=.*tentacle)(?=.*rod).*$/i,
		name: "Tentacle Rod",
		source: [["PHB2024", "-"]],
		ability: 2,
		DC: 15,
		type: "Magic Item",
		damage: [1, 6, "psychic"],
		range: "Melee (15 ft)",
		description: "Magic Action: 3 attacks. All hit same: DC 15 Dex save or Restrained. Restrained: +3d6 psychic per turn",
		abilitytodamage: false,
		modifiers: [9, ""],
		weight: 2,
		isAlwaysProf: false,
		selectNow: true
	}]
};
MagicItemsList["thunderous greatclub"] = {
	name: "Thunderous Greatclub",
	source: [["D24", 316]],
	type: "weapon (greatclub)",
	rarity: "very rare",
	magicItemTable: "?",
	description: "While attuned, my Str is 20 and the club deals an extra 1d8 Thunder to creatures. It deals an extra 3d8 Thunder to unattended objects. Magic action to create 30ft cone; all in area DC 15 Str save or Prone. Objects take 3d8 Thunder. Once per dawn Earthquake as Magic Action. See Notes.",
	descriptionLong: "While attuned, my Str is 20 and the club deals an extra 1d8 Thunder to creatures. It deals an extra 3d8 Thunder to unattended objects. Magic action to create 30ft cone; all in area DC 15 Str save or Prone. Objects take 3d8 Thunder. Once per dawn, Magic action for Earthquake. 50-ft radius structures on ground take 50 Bludgeoning and creatures make DC 20 Dex save or Prone. Concentrating creatures make DC 20 Con save or it's broken. I can also create a 30-ft deep 10-ft wide fissure. Creatures make DC 20 Dex save or fall inside and buildings collapse.",
	descriptionFull: "While you are attuned to this magic weapon, your Strength is 20 unless your Strength is already equal to or greater than that score. The weapon deals an extra 1d8 Thunder damage to any creature it hits and an extra 3d8 Thunder damage to objects it hits that aren’t being worn or carried.\n" +
		"The weapon has the following additional properties.\n" +
		toUni("Clap of Thunder") + ". As a Magic action, you can strike the weapon against a hard surface to create a loud clap of thunder audible out to 300 feet. You also create a 30-foot Cone of thunderous energy. Each creature in the Cone must succeed on a DC 15 Strength saving throw or have the Prone condition. Nonmagical objects in the Cone that aren’t being worn or carried take 3d8 Thunder damage.\n" +
		toUni("Earthquake") + " . As a Magic action, you can strike the weapon against the ground to create an intense seismic disturbance in a 50-foot-radius circle centered on the point of impact. Structures in contact with the ground in that area take 50 Bludgeoning damage, and each creature on the ground in that area must succeed on a DC 20 Dexterity saving throw or have the Prone condition. If that creature is also concentrating, it must succeed on a DC 20 Constitution saving throw or its Concentration is broken. In addition, you can cause a 30-foot-deep, 10-foot-wide fissure to open up on the ground anywhere in the area. Any creature on a spot where the fissure opens must succeed on a DC 20 Dexterity saving throw, falling into the fissure on a failed save or moving with the fissure’s edge on a successful one. Any structure on a spot where the fissure opens collapses into the fissure. Once you use this property, it can’t be used again until the next dawn.",
	attunement: true,
	weight: 10,
	scoresOverride: [20, 0, 0, 0, 0, 0],
	action: [["action", "Clap of Thunder"], ["action", "Earthquake"]],
	weaponAdd: "thunderous greatclub",
	weaponOptions: [{
		baseWeapon: "greatclub",
		regExpSearch: /^(?=.*thunderous)(?=.*greatclub).*$/i,
		name: "thunderous greatclub",
		source: [["D24", "-"]],
		description: "Two-handed, Push; +1d8 Thunder v Crea; +3d8 v Obj;",
		isMagicWeapon: true,
		selectNow: true,
	}],
	extraLimitedFeatures: [{
		name: "Earthquake",
		usages: 1,
		recovery: "dawn",
		description: "As a Magic action you can strike the weapon against the ground to create a seismic disturbance in 50 ft radius center on point of impact. Structures take 50 bludgeoning dmg, each creature in area make DC 20 DEX save or fall Prone. If creature is concentrating, make DC 20 CON save or lose concentration. You open a 30ft deep, 10ft wide fissure on ground anywhere in the area. Any creature on a spot where the fissure opens must make a DC20 DEX save, falling into the fissure on failure or moving to the edge on sucess. Any structure on a fissure spot collapses into fissure. Once you used this property, it can't be used again until the next dawn."
	}],
	toNotesPage: [{
		name: "Thunderous Greatclub",
		note: [
			"While you are attuned to this magic weapon, your Strength is 20 unless your Strength is already equal to or greater than that score." +
			"The weapon deals an extra 1d8 Thunder damage to any creature it hits and an extra 3d8 Thunder damage to objects it hits that aren’t being worn or carried.\n" +
			"The weapon has the following additional properties:\n" +
			"\u2022 Clap of Thunder. As a Magic action, you can strike the weapon against a hard surface to create a loud clap of thunder audible out to 300 feet. You also create a 30-foot Cone of thunderous energy. Each creature in the Cone must succeed on a DC 15 Strength saving throw or have the Prone condition. Nonmagical objects in the Cone that aren’t being worn or carried take 3d8 Thunder damage.\n" +
			"\u2022 Earthquake. As a Magic action, you can strike the weapon against the ground to create an intense seismic disturbance in a 50-foot-radius circle centered on the point of impact. Structures in contact with the ground in that area take 50 Bludgeoning damage, and each creature on the ground in that area must succeed on a DC 20 Dexterity saving throw or have the Prone condition. If that creature is also concentrating, it must succeed on a DC 20 Constitution saving throw or its Concentration is broken. In addition, you can cause a 30-foot-deep, 10-foot-wide fissure to open up on the ground anywhere in the area. Any creature on a spot where the fissure opens must succeed on a DC 20 Dexterity saving throw, falling into the fissure on a failed save or moving with the fissure’s edge on a successful one. Any structure on a spot where the fissure opens collapses into the fissure. Once you use this property, it can’t be used again until the next dawn.",
		]
	}],
};
MagicItemsList["tome of clear thought"] = {
	name: "Tome of Clear Thought",
	source: [["D24", 317]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This book contains memory and logic exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book’s contents and practicing its guidelines, your Intelligence increases by 2, to a maximum of 30. The manual then loses its magic but regains it in a century.",
	descriptionFull: "This book contains memory and logic exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Intelligence score increases by 2, to a maximum of 30. The manual then loses its magic but regains it in a century.",
	weight: 5,
	scoresMaximum: [0, 0, 0, 30, 0, 0],
	eval: function () {
		MagicItemsList["manual of bodily health"].applyStatBonus("Tome of Clear Thought", "Intelligence", 2);
	}
};
MagicItemsList["tome of leadership and influence"] = {
	name: "Tome of Leadership and Influence",
	source: [["D24", 317]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This book contains guidelines for influencing and charming others and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying its contents and practicing its guidelines, your Charisma score increases by 2, to a maximum of 30. The manual then loses its magic, but regains it in a century.",
	descriptionFull: "This book contains guidelines for influencing and charming others, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Charisma score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
	weight: 5,
	scoresMaximum: [0, 0, 0, 0, 0, 30],
	eval: function () {
		MagicItemsList["manual of bodily health"].applyStatBonus("Tome of Leadership and Influence", "Charisma", 2);
	}
};
MagicItemsList["tome of the stilled tongue"] = {
	name: "Tome of the Stilled Tongue",
	source: [["D24", 317]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	description: "You can use this thick leather-bound tome as a spellbook and an arcane focus. Once per dawn while holding it, you can take a Bonus action to cast a spell you have written in it, without expending a spell slot or using any verbal or somatic components. Once used, this property can't be used again until the next dawn. Removing the tongue on the cover erases all spells within.",
	descriptionFull: "This book has a desiccated tongue pinned to its front cover. Five of these tomes exist, and it’s unknown which one is the original. The tongue on the first Tome of the Stilled Tongue belonged to a treacherous former servant of the lich Vecna. The tongues pinned to the covers of the four copies came from other spellcasters who crossed Vecna. The first few pages of each tome are filled with indecipherable scrawls. The remaining pages are blank.\n   While attuned to this item, you can use it as a Spellbook and an Arcane Focus. In addition, while holding the tome, you can take a Bonus Action to cast a spell you have written in this tome, without expending a spell slot or using any Verbal or Somatic components. Once used, this property of the tome can’t be used again until the next dawn.\n   Only you can remove the tongue from the book’s cover. If you do so, all spells written in the book are permanently erased.\n   Vecna watches anyone using this tome and can write cryptic messages in it. These messages typically fade away after they are read.",
	attunement: true,
	weight: 5,
	prerequisite: "Requires attunement by a wizard",
	prereqeval: function (v) { return classes.known.wizard ? true : false; },
	action: [["bonus action", ""]],
	usages: 1,
	recovery: "dawn"
};
MagicItemsList["tome of understanding"] = {
	name: "Tome of Understanding",
	source: [["D24", 317]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This book contains intuition and insight exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying its contents and practicing its guidelines, your Wisdom score increases by 2, to a maximum of 30. The manual then loses its magic, but regains it in a century.",
	descriptionFull: "This book contains intuition and insight exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book’s contents and practicing its guidelines, your Wisdom increases by 2, to a maximum of 30. The manual then loses its magic, but regains it in a century.",
	weight: 5,
	scoresMaximum: [0, 0, 0, 0, 30, 0],
	eval: function () {
		MagicItemsList["manual of bodily health"].applyStatBonus("Tome of Understanding", "Wisdom", 2);
	}
};
MagicItemsList["trident of fish command"] = {
	name: "Trident of Fish Command",
	source: [["D24", 317]],
	type: "weapon (trident)",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "This magic weapon has 3 charges, regaining 1d3 at dawn. While you carry it, you can expend 1 charge to cast Dominate Beast (save DC 15) from it on a Beast that has a Swim Speed.",
	descriptionFull: "This magic weapon has 3 charges, and it regains 1d3 expended charges daily at dawn. While you carry it, you can expend 1 charge to cast Dominate Beast (save DC 15) from it on a Beast that has a Swim Speed.",
	attunement: true,
	weight: 4,
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	weaponsAdd: ["Trident of Fish Command"],
	weaponOptions: {
		baseWeapon: "trident",
		regExpSearch: /^(?=.*trident)(?=.*fish)(?=.*command).*$/i,
		name: "Trident of Fish Command",
		source: [["PHB2024", "-"]],
	},
	fixedDC: 15,
	spellFirstColTitle: "Ch",
	spellcastingBonus: {
		name: "1 charge",
		spells: ["dominate beast"],
		selection: ["dominate beast"],
		firstCol: 1
	},
	spellChanges: {
		"dominate beast": {
			description: "1 beast with swim speed save or charmed, redo on dmg; follows telepathic commands; rea for rea ",
			changes: "Can only affect beasts with innate swim speed."
		}
	}
};
MagicItemsList["universal solvent"] = {
	name: "Universal Solvent",
	source: [["D24", 318]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	description: "This tube holds milky liquid with a strong alcohol smell, when found it contains 1d6+1 ounces. You can take a Utilize action, to pour 1 or more ounces from the tube onto a surface within reach. The liquid instantly dissolves up to 1 square foot of adhesive it touches, including Sovereign Glue.",
	descriptionFull: "This tube holds milky liquid with a strong alcohol smell. When found, a tube contains 1d6 + 1 ounces. You can take a Utilize action to pour 1 or more ounces of solvent from the tube onto a surface within reach. Each ounce instantly dissolves up to 1 square foot of adhesive it touches, including Sovereign Glue.",
	action: [["action", ""]],
};
MagicItemsList["veterans cane"] = {
	name: "Veteran's Cane",
	source: [["D24", 318]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "While holding this item, you can take a Bonus Action, you can transform this walking cane into an ordinary Longsword or change the Longsword back into a walking cane.",
	descriptionFull: "As a Bonus Action, you can transform this walking cane into an ordinary Longsword or change the Longsword back into a walking cane. In either case, you must be holding the item.",
	weight: 4,
	action: [["bonus action", "(transform)"]],
	weaponOptions: [{
		baseWeapon: "longsword",
		regExpSearch: /^(?=.*veteran)(?=.*cane)(?=.*long)(?=.*sword).*$/i,
		name: "Veterans Cane (Longsword)",
		source: ["D24", "-"],
		selectNow: true,
	}],
};
MagicItemsList["vicious weapon"] = {
	name: "Vicious Weapon",
	nameTest: "Vicious",
	source: [["D24", 318]],
	type: "weapon (simple or martial)",
	rarity: "rare",
	magicItemTable: "?",
	description: "When you hit a creature, the target takes an extra 2d6 damage of the weapon's damage type.",
	descriptionFull: "This magic weapon deals an extra 2d6 damage to any creature it hits. This extra damage is of the same type as the weapon’s normal damage.",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "suffix",
		descriptionChange: ["replace", "weapon"]
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.isSpell && !v.theWea.isMagicWeapon && (/vicious/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'target takes +2d6 ' + (fields.Damage_Type);
				}
			},
			'If you include the word "Vicious" in a the name of a weapon, it will be treated as the magic weapon Vicious Weapon. On a successful hit, target takes an extra 2d6 of the same damage type.'
		]
	}
};
MagicItemsList["vorpal sword"] = {
	name: "Vorpal Sword",
	nameTest: "Vorpal",
	source: [["D24", 318]],
	type: "weapon (Glaive, Greatsword, Longsword, Scimitar)",
	rarity: "legendary",
	magicItemTable: "?",
	attunement: true,
	description: "You have a +3 bonus to attack and damage rolls with this magic weapon. It ignores slashing damage resistance. On a roll of 20 to hit, it cuts off one head" + (typePF ? "" : ", possibly killing it instantly") + ". If the target has no head, is immune to slashing damage, or its neck is too wide, it takes +30 slashing damage instead. If the target has Legendary Resistance, it can expend one daily use to take +30 Slashing damage instead.",
	descriptionFull: "You gain a +3 bonus to attack and damage rolls made with this magic weapon. In addition, the weapon ignores Resistance to Slashing damage.\n   When you use this weapon to attack a creature that has at least one head and roll a 20 on the d20 for the attack roll, you cut off one of the creature’s heads. The creature dies if it can’t survive without the lost head. A creature is immune to this effect if it has Immunity to Slashing damage, if it doesn’t have or need a head, or if the DM decides that the creature is too big for its head to be cut off with this weapon. Such a creature instead takes an extra 30 Slashing damage from the hit. If the creature has Legendary Resistance, it can expend one daily use of that trait to avoid losing its head, taking the extra damage instead.",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "suffix",
		descriptionChange: ["replace", "weapon"],
		excludeCheck: function (inObjKey, inObj) {
			var testRegex = /glaive|greatsword|longsword|scimitar/i;
			return (!(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon))) || (inObj.baseWeapon && !inObj.damage ? WeaponsList[inObj.baseWeapon].damage : inObj.damage)[2] !== "slashing";
		}
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/glaive|greatsword|longsword|scimitar/i).test(v.baseWeaponName) && (/vorpal/i).test(v.WeaponTextName) && v.theWea.damage[2] == "slashing") {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Ignores slashing resistance; On 20 to hit: cut off head';
				}
			},
			'If I include the word "Vorpal" in a the name of a weapon that deals slashing damage, it will be treated as the magic weapon Vorpal Sword. It has +3 to hit and damage and on a roll of 20 on the attack roll, it cuts off a head of the target.'
		],
		atkCalc: [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/glaive|greatsword|longsword|scimitar/i).test(v.baseWeaponName) && (/vorpal/i).test(v.WeaponTextName) && v.theWea.damage[2] == "slashing") {
					output.magic = v.thisWeapon[1] + 3;
				}
			}, ''
		]
	}
};
MagicItemsList["walloping ammunition"] = {
	name: "Walloping Ammunition",
	nameTest: "Walloping",
	source: [["D24", 318]],
	magicItemTable: "armaments",
	type: "weapon (any ammunition)",
	rarity: "common",
	description: "A creature hit by the ammunition must succeed on a DC 10 Strength saving throw or be knocked Prone.",
	descriptionFull: "A creature hit by this ammunition must succeed on a DC 10 Strength saving throw or have the Prone condition.",
	allowDuplicates: true,
	chooseGear: {
		type: "ammo",
		prefixOrSuffix: "suffix",
		descriptionChange: ["replace", "ammunition"],
		excludeCheck: function (inObjKey, inObj) {
			return /vials|flasks/i.test(inObj.icon);
		}
	}
};
MagicItemsList["wand of binding"] = {
	name: "Wand of Binding",
	source: [["D24", 318]],
	type: "wand",
	rarity: "rare",
	magicItemTable: "arcana",
	description: "This wand has 7 charges, regaining 1d6+1 at dawn. While holding the wand, you can cast one of the following spells, expending the charges: Hold Monster (5) or Hold Person (2).",
	descriptionFull: "This wand has 7 charges.\n   " + toUni("Spells") + ". While holding the wand, you can cast one of the spells (save DC 17): Hold Monster (5 charges) or Hold Person (2 charges).\n" +
		toUni("Regaining Charges") + ". The wand regains 1d6+1 expended charges daily at dawn. If you expend the wands last charge, roll 1d20. On a 1, the wand crumbles into ashes an is destroyed.",
	attunement: true,
	weight: 1,
	usages: 7,
	recovery: "dawn",
	additional: "regains 1d6+1",
	spellFirstColTitle: "Ch",
	fixedDC: 17,
	spellcastingBonus: [{
		name: "2 charges",
		spells: ["hold person"],
		selection: ["hold person"],
		firstCol: 2
	}, {
		name: "5 charges",
		spells: ["hold monster"],
		selection: ["hold monster"],
		firstCol: 5
	}]
};
MagicItemsList["wand of conducting"] = {
	name: "Wand of Conducting",
	source: [["D24", 319]],
	magicItemTable: "?",
	type: "wand",
	rarity: "common",
	description: "This wand has 3 charges, regaining all daily at dawn. As a Magic action, you can wave it around and expend 1 charge to create orchestral music that can be heard out to a range of 120 ft and ends when you stop waving the wand. After last charge, roll a d20. On a 1, a sad tuba sound plays as the wand crumbles to dust.",
	descriptionFull: "This wand has 3 charges. While holding it, you can take a Magic action to expend 1 charge and create orchestral music by waving it around. The music can be heard out to a range of 120 feet and ends when you stop waving the wand.\n " +
		toUni("Regaining Charges") + ". The wand regains all expended charges daily at dawn.If you expend the wand's last charge, roll a d20. On a 1, a sad tuba sound plays as the wand crumbles to dust and is destroyed.",
	weight: 1,
	action: [["action", ""]],
	usages: 3,
	recovery: "dawn"
};
MagicItemsList["wand of enemy detection"] = {
	name: "Wand of Enemy Detection",
	source: [["D24", 319]],
	type: "wand",
	rarity: "rare",
	magicItemTable: "?",
	description: "This wand has 7 charges, regaining 1d6+1 at dawn. While holding it, you can expend 1 charge. For 1 minute, you know the direction of the nearest creature Hostile to you (not distance) within 60 ft, regardless of it being Invisible, ethereal, disguised, or hidden.",
	descriptionFull: "This wand has 7 charges. While holding it, you can take a Magic action to expend 1 charge. For 1 minute, you know the direction of the nearest creature Hostile to you within 60 feet, but not its distance from you. The wand can sense the presence of Hostile creatures that are Invisible, ethereal, disguised, or hidden, as well as those in plain sight. The effect ends if you stop holding the wand.\n" +
		toUni("Regaining Charges") + ". The wand regains 1d6 + 1 expended charges daily at dawn.If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
	attunement: false,
	weight: 1,
	usages: 7,
	recovery: "dawn",
	additional: "regains 1d6+1",
	action: [["action", ""]]
};
MagicItemsList["wand of fear"] = {
	name: "Wand of Fear",
	source: ["D24", 319],
	type: "wand",
	rarity: "rare",
	magicItemTable: "?",
	description: "This wand has 7 charges, regaining 1d6+1 at dawn, which can be used to cast Command (1 charge) or Fear (3 charges) while holding the wand.",
	descriptionFull: "This wand has 7 charges.  While holding the wand, you can cast one of the spells (save DC 15) on the following table from it. The table indicates how many charges you must expend to cast the spell.\n   " + toUni("Command") + ". While holding the wand, you can take a Magic action to expend 1 charge and Command another creature to flee or grovel, as with the Command spell (save DC 15).\n   " + toUni("Fear") + ". While holding the wand, you can take a Magic action to expend 3 charges, causing the wand's tip to emit a 60-foot Cone of amber light. Each creature in the cone must succeed on a DC 15 Wisdom saving throw or become Frightened of you for 1 minute.\n" +
		toUni("Regaining Charges") + ". The wand regains 1d6 + 1 expended charges daily at dawn.If you expend the wand's last charge, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.",
	attunement: true,
	weight: 1,
	usages: 7,
	recovery: "dawn",
	additional: "regains 1d6+1",
	spellFirstColTitle: "Ch",
	fixedDC: 15,
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["command"],
		selection: ["command"],
		firstCol: 1,
	}, {
		name: "3 charges",
		spells: ["fear"],
		selection: ["fear"],
		firstCol: 3,
	}],
	spellChanges: [{
		"command": {
			description: '1 creature save or has to follow an one-word command on its next turn, either "flee" or "grovel"',
			changes: 'When casting from the Wand of Fear, I can only use the "flee" or "grovel" command.'
		},
		"fear": {
			description: 'All creatures within 60-foot Cone Wisdom save or drop what it is holding and become Frightened',
			range: "60-ft Cone",
			changes: 'When casting from the Wand of Fear, the distance changes from 30-foot cone to 60-foot cone.'
		}
	}],
};
MagicItemsList["wand of fireballs"] = {
	name: "Wand of Fireballs",
	source: [["D24", 319]],
	type: "wand",
	rarity: "rare",
	magicItemTable: "?",
	description: "This wand has 7 charges, regaining 1d6+1 at dawn. You can expend 1 to 3 charges to cast Fireball (save DC 15) from it as a 3rd level spell. The spell level increases by one for each charge expended. When the last charge is used, roll 1d20. On a 1, the wand crumbles into ashes.",
	descriptionFull: "This wand has 7 charges. While holding it, you can expend no more than 3 charges to cast Fireball (save DC 15) from it. For 1 charge, you cast the level 3 version of the spell. You can increase the spell’s level by 1 for each additional charge you expend.\n" +
		toUni("Regaining Charges") + ". The wand regains 1d6 + 1 expended charges daily at dawn.If you expend the wand's last charge, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.",
	attunement: true,
	weight: 1,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	usages: 7,
	recovery: "dawn",
	additional: "regains 1d6+1",
	spellFirstColTitle: "Ch",
	fixedDC: 15,
	spellcastingBonus: {
		name: "1-3 charges",
		spells: ["fireball"],
		selection: ["fireball"],
		firstCol: "1-3"
	},
	spellChanges: {
		"fireball": {
			description: "20-ft radius Sphere, all crea 8d6+1d6/extra charge Fire dmg; save halves; unattended flammable objects ignite",
			changes: "For 1 charge, it is cast as the 3rd-level version of the spell. Each additional charge adds +1 spell level (max 5th)."
		}
	}
};
MagicItemsList["wand of lightning bolts"] = {
	name: "Wand of Lightning Bolts",
	source: [["D24", 320]],
	type: "wand",
	rarity: "rare",
	magicItemTable: "?",
	description: "This wand has 7 charges, You can expend up to three of its charges to cast Lightning Bolt (save DC 15) from it as a 3rd level spell. The spell level increases by one for each charge expended after the first.",
	descriptionFull: "This wand has 7 charges. While holding it, you can expend 1 to 3 its charges to cast the Lightning Bolt spell (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell level by one for each additional charge you expend.\n " +
		toUni("Regaining Charges") + ". The wand regains 1d6 + 1 expended charges daily at dawn.If you expend the wand's last charge, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.",
	attunement: true,
	weight: 1,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	usages: 7,
	recovery: "dawn",
	additional: "regains 1d6+1",
	spellFirstColTitle: "Ch",
	fixedDC: 15,
	spellcastingBonus: {
		name: "1-3 charges",
		spells: ["lightning bolt"],
		selection: ["lightning bolt"],
		firstCol: "1-3"
	},
	spellChanges: {
		"lightning bolt": {
			description: "100-ft long 5-ft wide Line; each crea in Line Dex save; 8d6+1d6/extra charge Lightn. dmg; save halves",
			changes: "For 1 charge, it is cast as the 3rd-level version of the spell. Each additional charge adds +1 spell level (max 5th)."
		}
	}
};
MagicItemsList["wand of magic detection"] = {
	name: "Wand of Magic Detection",
	source: [["D24", 320]],
	type: "wand",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "This wand has 3 charges. While holding it, you can expend 1 charge to cast Detect Magic from it. The wand regains 1d3 expended charges daily at dawn.",
	descriptionFull: "This wand has 3 charges. While holding it, you can expend 1 charge to cast the Detect Magic spell from it.\n " +
		toUni("Regaining Charges") + ". The wand regains 1d3 expended charges daily at dawn.",
	weight: 1,
	spellcastingBonus: {
		name: "1 charge",
		spells: ["detect magic"],
		selection: ["detect magic"],
		firstCol: 1
	},
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	spellFirstColTitle: "Ch"
};
MagicItemsList["wand of magic missiles"] = {
	name: "Wand of Magic Missiles",
	source: [["D24", 320]],
	type: "wand",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "This wand has 7 charges, regaining 1d6+1 at dawn. While holding it, you can expend 1 to 3 of its charges to cast Magic Missile from it as a 1st level spell. The spell level increases by one for each charge expended after the first. When the last charge is used, roll 1d20. On a 1, the wand crumbles into ashes.",
	descriptionFull: "This wand has 7 charges. While holding it, you can expend 1 to 3 its charges to cast the Magic Missile spell from it. For 1 charge, you cast the 1st-level version of the spell. You can increase the spell level by one for each additional charge you expend.\n" +
		toUni("Regaining Charges") + ". The wand regains 1d6 + 1 expended charges daily at dawn.If you expend the wand's last charge, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.",
	weight: 1,
	usages: 7,
	recovery: "dawn",
	additional: "regains 1d6+1",
	spellFirstColTitle: "Ch",
	spellcastingBonus: {
		name: "1-3 charges",
		spells: ["magic missile"],
		selection: ["magic missile"],
		firstCol: "1-3"
	},
	spellChanges: {
		"magic missile": {
			description: "3+1/extra charge darts hit creature(s) I can see for 1d4+1 Force dmg per dart",
			changes: "For 1 charge, it is cast as the 1st-level version of the spell, but I can increase the spell slot level by one for each additional charge expended."
		}
	}
};
MagicItemsList["wand of paralysis"] = {
	name: "Wand of Paralysis",
	source: [["D24", 321]],
	type: "wand",
	rarity: "rare",
	magicItemTable: "?",
	description: "This wand has 7 charges, regaining 1d6+1 at dawn. While holding the wand, you can take a Magic action to expend 1 charge to have a creature within 60 ft make a DC 15 Constitution saving throw or be Paralyzed for 1 minute. It can repeat this save at the end of each of its turns. When the last charge is used, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.",
	descriptionFull: "This wand has 7 charges. While holding it, you can take a Magic action to expend 1 of its charges to cause a thin blue ray to streak from the tip toward a creature you can see within 60 feet of you. The target must succeed on a DC 15 Constitution saving throw or have the Paralyzed condition for 1 minute. At the end of each of the target's turns, it repeats the save, ending the effect on itself on a success.\n" +
		toUni("Regaining Charges") + ". The wand regains 1d6 + 1 expended charges daily at dawn.If you expend the wand's last charge, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.",
	attunement: true,
	weight: 1,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	usages: 7,
	recovery: "dawn",
	additional: "regains 1d6+1",
	fixedDC: 15,
	action: [["action", ""]]
};
MagicItemsList["wand of polymorph"] = {
	name: "Wand of Polymorph",
	source: [["D24", 321]],
	type: "wand",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This wand has 7 charges and regains 1d6+1 expended charges daily at dawn. While holding it, you can expend 1 charge to cast Polymorph (save DC 15) from it. If you expend the wand's last charge, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.",
	descriptionFull: "This wand has 7 charges. While holding it, you can expend 1 charge to cast the Polymorph  (save DC 15) from it.\n" +
		toUni("Regaining Charges") + ". The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.",
	attunement: true,
	weight: 1,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	usages: 7,
	recovery: "dawn",
	additional: "regains 1d6+1",
	spellFirstColTitle: "Ch",
	fixedDC: 15,
	spellcastingBonus: {
		name: "1 charge",
		spells: ["polymorph"],
		selection: ["polymorph"],
		firstCol: 1
	}
};
MagicItemsList["wand of pyrotechnics"] = {
	name: "Wand of Pyrotechnics",
	source: [["D24", 321]],
	magicItemTable: "?",
	type: "wand",
	rarity: "common",
	description: "This wand has 7 charges, regaining 1d6+1 at dawn. While holding it, you can take a Magic action to expend 1 charge to create a harmless burst of multicolored light at a point you can see up to 120 ft away, with the noise travelling 300 ft. The light is as bright as a torch flame but lasts only a second.",
	descriptionFull: "This wand has 7 charges. While holding it, you can take a Magic action to expend 1 charge and create a harmless burst of multicolored light at a point you can see up to 120 feet away. The burst of light is accompanied by a crackling noise that can be heard up to 300 feet away. The light is as bright as a torch flame but lasts only a second.\n" +
		toUni("Regaining Charges") + ". The wand regains 1d6 + 1 expended charges daily at dawn.If you expend the wand's last charge, roll 1d20. On a 1, the wand erupts in a harmless pyrotechnic display and is destroyed.",
	weight: 1,
	action: [["action", ""]],
	usages: 7,
	recovery: "dawn",
	additional: "regains 1d6+1"
};
MagicItemsList["wand of secrets"] = {
	name: "Wand of Secrets",
	source: [["D24", 322]],
	type: "wand",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "The wand has 3 charges. While holding it, you can take a Magic action to expend 1 charge, and if a secret door or trap is within 60 feet of you, the wand pulses and points at the one nearest to you. The wand regains 1d3 expended charges daily at dawn.",
	descriptionFull: "This wand has 3 charges and regains 1d3 expended charges daily at dawn. While holding it, you can take a Magic action to expend 1 charge, and if a secret door or trap is within 60 feet of you, the wand pulses and points at the one nearest to you.",
	weight: 1,
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	action: [["action", ""]]
};
MagicItemsList["wand of the war mage, +1, +2, or +3"] = {
	name: "Wand of the War Mage, +1, +2, or +3",
	nameTest: /^(?=.*war mage)(?=.*(arcane focus|rod|wand|staff)).*$/i,
	source: [["D24", 322]],
	type: "wand",
	description: "While holding this wand, you gain a bonus to spell attack rolls determined by the wand's rarity: uncommon (+1), rare (+2), or very rare (+3). In addition, you ignore Half Cover when making a spell attack roll.",
	descriptionFull: "While holding this wand, you gain a bonus to spell attack rolls determined by the wand's rarity: uncommon (+1), rare (+2), or very rare (+3). In addition, you ignore Half Cover when making a spell attack roll.",
	attunement: true,
	weight: 1,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	choices : ["+1 to spell attacks (uncommon)", "+2 to spell attacks (rare)", "+3 to spell attacks (very rare)"],
	"+1 to spell attacks (uncommon)": {
		name: "Wand of the War Mage +1",
		nameTest: /^(?=.*war mage)(?=.*(arcane focus|rod|wand|staff))(?=.*\+1)(?!.*\+2)(?!.*\+3).*$/i,
		rarity: "uncommon",
		magicItemTable: "?",
		description: "While holding this wand, you gain a +1 bonus and ignore Half Cover when making a spell attack roll.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type == "attack") return 1;
				},
				"You gain a +1 bonus to spell attack rolls."
			]
		}
	},
	"+2 to spell attacks (rare)": {
		name: "Wand of the War Mage +2",
		nameTest: /^(?=.*war mage)(?=.*(arcane focus|rod|wand|staff))(?!.*\+1)(?=.*\+2)(?!.*\+3).*$/i,
		rarity: "rare",
		magicItemTable: "?",
		description: "While holding this wand, you gain a +2 bonus and ignore Half Cover when making a spell attack roll.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type == "attack") return 2;
				},
				"You gain a +2 bonus to spell attack rolls."
			]
		}
	},
	"+3 to spell attacks (very rare)": {
		name: "Wand of the War Mage +3",
		nameTest: /^(?=.*war mage)(?=.*(arcane focus|rod|wand|staff))(?!.*\+1)(?!.*\+2)(?=.*\+3).*$/i,
		rarity: "very rare",
		magicItemTable: "?",
		description: "While holding this wand, you gain a +3 bonus and ignore Half Cover when making a spell attack roll.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type == "attack") return 3;
				},
				"You gain a +3 bonus to spell attack rolls."
			]
		}
	}
};
MagicItemsList["wand of web"] = {
	name: "Wand of Web",
	source: [["D24", 322]],
	type: "wand",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "This wand has 7 charges and regains 1d6+1 expended charges daily at dawn. While holding it, you can expend 1 of its charges to cast Web (save DC 13) from it. If I expend the wand's last charge, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.",
	descriptionFull: "This wand has 7 charges. While holding it, you can expend 1 of its charges to cast the Web spell (save DC 13) from it.\n" +
		toUni("Regaining Charges") + ". The wand regains 1d6 + 1 expended charges daily at dawn.If you expend the wand's last charge, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.",
	attunement: true,
	weight: 1,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	usages: 7,
	recovery: "dawn",
	additional: "regains 1d6+1",
	spellFirstColTitle: "Ch",
	fixedDC: 15,
	spellcastingBonus: {
		name: "1 charge",
		spells: ["web"],
		selection: ["web"],
		firstCol: 1
	}
};
MagicItemsList["wand of wonder"] = {
	name: "Wand of Wonder",
	source: [["D24", 322]],
	type: "wand",
	rarity: "rare",
	magicItemTable: "?",
	description: "This wand has 7 charges and regains 1d6+1 expended charges daily at dawn. If you expend its last charge, roll 1d20. On a 1, the wand crumbles into dust and is destroyed. While holding it, you can expend 1 charge, choose a point within 120 ft, and roll 1d100 to see what happens, SEE NOTES.",
	descriptionFull: "This wand has 7 charges. While holding it, you can take a Magic action to expend 1 charge while choosing a point within 120 feet of yourself. That location becomes the point of origin of a spell or other magical effect determined by rolling on the Wand of Wonder Effects table.\n" +
		"Spells cast from the wand have a save DC of 15. If a spell’s maximum range is normally less than 120 feet, it becomes 120 feet when cast from the wand. If an effect has multiple possible subjects, the DM determines randomly which among them are affected.\n " +
		toUni("Regaining Charges") + ". The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into dust and is destroyed.\n" + [
			toUni("1d100\t\tEffect"),
			"01-20\tRoll a 1d10:",
			"- 1d10\t1-2\tYou cast Darkness",
			"- 1d10\t3-4\tYou cast Faerie Fire.",
			"- 1d10\t5-6\tYou cast Fireball.",
			"- 1d10\t7-8\tYou cast Slow.",
			"- 1d10\t9-10\tYou cast Stinking Cloud.",
			" 21-25\t\tYou are Stunned until the start of your next turn, believing something awesome just happened.",
			" 26-30\t\tYou cast Gust of Wind. The Line created by the spell extends from you to the chosen point of origin.",
			" 31-35\t\tNothing happens at the chosen point. You take 1d6 Psychic damage.",
			" 36-40\t\tHeavy rain falls for 1 minute in a 120-ft high, 60-ft radius Cylinder centered on the chosen point of origin. The area is lightly obscured for the duration.",
			" 41-45\t\tA cloud of 600 oversized butterflies fills a 30-foot radius centered on the target. The area becomes heavily obscured. The butterflies remain for 10 minutes.",
			" 46-50\t\tYou cast Lightning Bolt.",
			" 51-55\t\tYou shrink yourself as if you had cast Enlarge/Reduce on yourself.",
			" 56-60\t\tA magically formed creature appears in an unoccupied space as close to the chosen point as possible. It disappears after 1 hour or 0 hit points. Roll 1d4: 1: Rhinoceros, 2: Elephant, 3-4: Rat.",
			" 61-64\t\tGrass grows on the ground in a 60-foot radius centered on the target. If grass is already there, it grows to ten times its normal size and remains overgrown for 1 minute.",
			" 65-68\t\tAn object of the DM's choice disappears into the Ethereal Plane. The object must be neither worn nor carried, within 120 feet of the target, and no larger than 10 feet in any dimension.",
			" 69-72\t\tYou shrink yourself as if you had cast Enlarge/Reduce on yourself.",
			" 73-77\t\tLeaves grow from the target. If you chose a point in space as the target, leaves sprout from the creature nearest to that point. Unless they are picked off, the leaves turn brown and fall off after 24 hours.",
			" 78-82\t\tA burst of colorful shimmering light extends from you in a 30-foot radius. You and each creature in the area that can see must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
			" 83-87\t\tYou cast Invisibility on yourself.",
			" 88-92\t\tA stream of 1d4 \xD7 10 gems, each worth 1 gp, shoots from the wand's tip in a line 30 feet long and 5 feet wide. Each gem deals 1 Bludgeoning damage, and the total damage of the gems is divided equally among all creatures in the line.",
			" 93-97\t\tYou cast Polymorph, targeting creature closest to origin. Roll 1d4. 1: Black Bear; 2: Giant Wasp; 3-4: Frog.",
			" 98-00\t\tIf you targeted a creature, it must make a DC 15 Constitution saving throw. If you didn't target a creature, you become the target and must make the saving throw. If the saving throw fails by 5 or more, the target is instantly Petrified. On any other failed save, the target is Restrained and begins to turn to stone. While Restrained in this way, the target must repeat the saving throw at the end of its next turn, becoming Petrified on a failure or ending the effect on a success. The petrification lasts until the target is freed by the Greater Restoration spell or similar magic."
		],
	attunement: true,
	weight: 1,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	usages: 7,
	recovery: "dawn",
	additional: "regains 1d6+1",
	toNotesPage: [{
		name: "Table of Effects",
		note: [
			"As an action I can expend 1 of the wand's 7 charges and choose a target within 120 ft of me. The target can be a creature, an object, or a point in space. Roll a d100 and consult the effect below to discover what happens.",
			"If the effect causes me to cast a spell from the wand, the spell's save DC is 15. If the spell normally has a range expressed in feet, its range becomes 120 ft if it isn't already.",
			"If an effect covers an area, I must center the spell on and include the target. If an effect has multiple possible subjects, the DM randomly determines which ones are affected.",
			"\nd100 RESULT AND EFFECTS",
			"01-20: Roll a 1d10:",
			"   1-2: You cast Darkness",
			"   3-4: You cast Faerie Fire.",
			"   5-6: You cast Fire Ball.",
			"   7-8: You cast Slow.",
			"   9-10: You cast Stinking Cloud.",
			"21-25: You are Stunned until the start of your next turn, believing something awesome just happened.",
			"26-30: You cast Gust of Wind. The Line created by the spell extends fro you to the chosen point of origin.",
			"31-35: Nothing happens at the chosen point of origin. You take 1d6 Psychic damage.",
			"36-40: Heavy rain falls for 1 minute in a 120-foot-high, 60-foot-radius Cylinder centered on the chosen point of origin. During that time, the area of effect is Lightly Obscured.",
			"41-45: A cloud of 600 oversized butterflies fills a 60-foot-high, 30-foot-radius Cylinder centered on the chosen point of origin. The butterflies remain for 10 minutes, during which time the area of effect is Heavily Obscured.",
			"46-50: You cast Lightning Bolt. The Line created by the spell extends from you to the chosen point of origin.",
			"51-55: The creature closest to the chosen point of origin is enlarged as if you had cast Enlarge/Reduce on it. If the target isn’t you and can’t be affected by that spell, you become the target instead.",
			"56-60: A magically formed creature appears in an unoccupied space as close to the chosen point as possible. The creature isn't under your control, acts as it normally would, and disappears after 1 hour or when it drops to 0 Hit Points. Roll 1d4: 1: Rhinoceros, 2: Elephant, 3-4: Rat.",
			"61-64: Grass grows on the ground in a 60-foot radius centered on the target. If grass is already there, it grows to ten times its normal size and remains overgrown for 1 minute.",
			"65-68: An object of the DM's choice disappears into the Ethereal Plane. The object must be neither worn nor carried, within 120 feet of the target, and no larger than 10 feet in any dimension.",
			"69-72: You shrink as if you had cast Enlarge/Reduce on yourself. The effect remains for 1 minute.",
			"73-77: Leaves grow from the creature nearest to the chosen point of origin. Unless they are picked off, the leaves turn brown and fall off after 24 hours.",
			"78-82: A burst of colorful shimmering light extends from you in a 30-foot Emanation. Each creature in the area must succeed on a DC 15 Constitution saving throw or have the Blinded condition for 1 minute. A creature repeats the save at the end of each of its turns, ending the effect on itself on a success.",
			"83-87: You cast Invisibility on yourself.",
			"88-92: A stream of 1d4 \xD7 10 gems, each worth 1 gp, shoots from the wand's tip in a Line 30 feet long and 5 feet wide. Each gem deals 1 Bludgeoning damage, and the total damage of the gems is divided equally among all creatures in the line.",
			"93-97: You cast Polymorph, targeting creature closest to origin. Roll 1d4. 1: Black Bear; 2: Giant Wasp; 3-4: Frog.",
			"98-00: The creature closest to the chosen point of origin makes a DC 15 Constitution saving throw. On a failed save, the creature has the Restrained condition and begins to turn to stone. While Restrained in this way, the creature repeats the save at the end of its next turn. ",
			"		On a successful save, the effect ends.On a failed save, the creature has the Petrified condition instead of the Restrained condition.The petrification lasts until the creature is freed by the Greater Restoration spell or similar magic.",
		]
	}],
	fixedDC: 15,
	spellcastingBonus: {
		name: "Random option",
		spells: ["slow", "faerie fire", "gust of wind", "stinking cloud", "lightning bolt", "enlarge/reduce", "darkness", "fireball", "invisibility", "polymorph"],
		selection: ["slow", "faerie fire", "gust of wind", "stinking cloud", "lightning bolt", "enlarge/reduce", "darkness", "fireball", "invisibility", "polyorph"],
		times: 10
	},
	spellChanges: {
		"darkness": { range: "120 ft", changes: "All Wand of Wonder spells have a range of 120 ft." },
		"enlarge/reduce": { range: "120 ft", changes: "All Wand of Wonder spells have a range of 120 ft." },
		"faerie fire": { range: "120 ft", changes: "All Wand of Wonder spells have a range of 120 ft." },
		"stinking cloud": { range: "120 ft", changes: "All Wand of Wonder spells have a range of 120 ft." },
		"polymorch": { range: "120 ft", changes: "All Wand of Wonder spells have a range of 120 ft." },
	}
};
var DMG_waveFullDescription = [
	"Held in the dungeon of White Plume Mountain, Wave is engraved with images of waves, shells, and sea creatures.",
	"You gain a +3 bonus to attack rolls and damage rolls made with this magic weapon. When you roll a 20 on the d20 for an attack roll with this weapon, the target takes an extra 21 Necrotic damage.",
	"While holding Wave, you gain the following benefits:",
	"\u2022Combat Ready. You have Advantage on Initiative rolls.",
	"\u2022Underwater Adaptation. A bubble of air forms around your head while you are underwater, allowing you to breathe normally in that environment.",
	"\u2022Aquatic Command. Wave has 3 charges and regains 1d3 expended charges daily at dawn. While you carry it, you can expend 1 charge to cast Dominate Beast (save DC 20) from it on a Beast that has a Swim Speed.",
	"\u2022Globe of Invulnerability. While holding Wave, you can cast the level 9 version of Globe of Invulnerability from it. Once used, this property can’t be used again until the next dawn.",
	"\u2022Sentience. Wave is a sentient weapon of Neutral alignment, with an Intelligence of 14, a Wisdom of 10, and a Charisma of 18. It has hearing and Darkvision out to 120 feet.",
	"The weapon communicates telepathically with its wielder and speaks Aquan.",
	"\u2022Personality. Wave zealously encourages mortals to worship sea gods and has a habit of humming sea chanteys. Conflict arises if the wielder fails to further the weapon’s objectives in the world.",
	"\u2022Destroying Wave. Wave can be destroyed only on the island of Thunderforge, where it was forged. The weapon must be melted down by a storm giant or someone imbued with a storm giant’s strength. Destroying Wave angers a god of the sea, who sends powerful agents to attack the island and punish the destroyers.",
];
MagicItemsList["wave"] = {
	name: "Wave",
	source: [["D24", 323]],
	type: "weapon (trident)",
	rarity: "artifact",
	description: "This sentient trident adds +3 to hit and damage and if you score a critical hit with it, the target takes an extra 21 Necrotic damage. While holding Wave, you gain several benefits.\n SEE NOTES PAGE.",
	descriptionFull: DMG_waveFullDescription.join("\n   ").replace(/>>(.*?)<</g, function (a, match) { return toUni(match); }),
	attunement: true,
	weight: 4,
	weaponOptions: [{
		baseWeapon: "trident",
		regExpSearch: /wave/i,
		name: "Wave",
		source: [["D24", 323]],
		description: "Thrown, Versatile (1d10), Topple; On crit: +21 Necrotic Damage",
		modifiers: [3, 3],
		selectNow: true
	}],
	toNotesPage: [{
		name: "Features",
		note: desc(DMG_waveFullDescription).replace(/>>(.*?)<</g, function (a, match) { return match.toUpperCase(); }) + "\n\n" + sentientItemConflictTxt,
	}],
	//Combat Ready - Advantage on Initiative
	advantages: [["Initiative", true]],
	//Underwater Adaptation
	savetxt: { text: 'I can breathe normally underwater' },
	extraLimitedFeatures: [{
		name: "Wave [Aquatic Command] (regains 1d3)",
		usages: 3,
		recovery: "dawn"
	}, {
		name: "Wave [Globe of Invulnerability]",
		usages: 1,
		recovery: "dawn"
	},],
	fixedDC: 20,
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["dominate beast"],
		selection: ["dominate beast"],
		firstCol: 1,
	}, {
		name: "Globe of Invulnerability",
		spells: ["globe of invulnerability"],
		selection: ["globe of invulnerability"],
		firstCol: "oncelr",
	}],
	spellChanges: {
		"dominate beast": {
			description: "1 beast with swim speed, save or charmed, follows telepathic commands, 1 a for complete control",
			changes: "Can only affect beasts with innate swim speed."
		},
		//Spell Level Header cannot be changed from here per MPMB 
		"globe of invulnerability": {
			description: "Level 9: Any spell of level 9 or lower cast from outside the barrier can’t affect anything within it.",
			changes: "Change from level 6 to level 9"
		},
	},
};
MagicItemsList["weapon, +1, +2, or +3"] = {
	name: "Weapon, +1, +2, or +3",
	source: [["D24", 324]],
	type: "weapon (any)",
	description: "You have a bonus to attack and damage rolls made with this magic weapon. The bonus is determined by the rarity of the magic item: uncommon (+1), rare (+2), or very rare (+3).",
	descriptionFull: "You have a bonus to attack and damage rolls made with this magic weapon. The bonus is determined by the weapon's rarity: uncommon (+1), rare (+2), or very rare (+3).",
	allowDuplicates: true,
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "brackets",
		descriptionChange: ["replace", "weapon"]
	},
	choices : ["+1 Weapon (uncommon)", "+2 Weapon (rare)", "+3 Weapon (very rare)"],
	"+1 weapon (uncommon)": {
		name: "Weapon +1",
		nameTest: "+1 Weapon",
		rarity: "uncommon",
		magicItemTable: "?",
		description: "You have a +1 bonus to attack and damage rolls made with this magic weapon.",
		allowDuplicates: true
	},
	"+2 weapon (rare)": {
		name: "Weapon +2",
		nameTest: "+2 Weapon",
		rarity: "rare",
		magicItemTable: "?",
		description: "You have a +2 bonus to attack and damage rolls made with this magic weapon.",
		allowDuplicates: true
	},
	"+3 weapon (very rare)": {
		name: "Weapon +3",
		nameTest: "+3 Weapon",
		rarity: "very rare",
		magicItemTable: "?",
		description: "You have a +3 bonus to attack and damage rolls made with this magic weapon.",
		allowDuplicates: true
	}
};
MagicItemsList["weapon of warning"] = {
	name: "Weapon of Warning",
	nameTest: "of Warning",
	source: [["D24", 324]],
	type: "weapon (any simple or martial)",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While this weapon is within your reach, and you are attuned to it, you and your allies within 30 ft magically awaken when combat begin, unless a magically induced sleep. You also have Advantage on Inititative rolls.",
	descriptionFull: "As long as this weapon is within your reach and you are attuned to it, you and allies within 30 feet of you gain the following benefits.\n\n" +
		"\u2022Alarm. The weapon magically awakens each subject who is sleeping naturally when combat begins. This benefit doesn’t wake a subject from magically induced sleep.\n" +
		"\u2022Supernatural Readiness. Each subject has Advantage on its Initiative rolls.",
	attunement: true,
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "prefix",
		descriptionChange: ["replace", "weapon"]
	},
	advantages: [["Initiative", true]],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && !v.isSpell && (/of warning/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If you include the word "Warning" in the name of a weapon, it will be treated as the magic weapon Weapon of Warning.'
		]
	},
};
MagicItemsList["well of many worlds"] = {
	name: "Well of Many Worlds",
	source: [["D24", 324]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	description: "You can take a Magic action to unfold this black cloth, 6-ft in diameter, and place it on a solid surface, whereupon it creates a two-way 6-ft diameter circular portal to another world or plane, chosend by the DM. You can use a Magic action to grab it from the edges and fold it, closing the portal. Once used in this way, it can't do so again for 1d8 hours.",
	descriptionFull: "This fine black cloth, soft as silk, is folded up to the dimensions of a handkerchief. It unfolds into a circular sheet 6 feet in diameter.\n   You can use a Magic action to unfold and place the well of many worlds on a solid surface, whereupon it creates a two-way portal to another world or plane of existence. Each time the item opens a portal, the DM decides where it leads.\n You can take a Magic action to close an open portal by taking hold of the edges of the cloth and folding it up. Once well of many worlds has opened a portal, it can't do so again for 1d8 hours.",
	action: [["action", " (place/fold)"]],
	usages: 1,
	recovery: "1d8 h"
};
var DMG_whelmFullDescription = [
	"Whelm is a powerful weapon forged by dwarves and lost in the dungeon of White Plume Mountain.",
	"You gain a +3 bonus to attack rolls and damage rolls made with this magic weapon.",
	toUni("Hurl") + ". Whelm has the Thrown property with a normal range of 60 feet and a long range of 180 feet. When you hit with a ranged attack roll using Whelm, the target takes an extra 1d8 Force damage, or an extra 4d8 Force damage if the target is a Construct, an Elemental, or a Giant. Immediately after hitting or missing, the weapon flies back to your hand.",
	toUni("Shock Wave") + ". You can take a Magic action to strike the ground with Whelm and send a shock wave out from the point of impact. Each creature of your choice on the ground within 60 feet of that point must succeed on a DC 20 Constitution saving throw or have the Stunned condition for 1 minute. A creature repeats the save at the end of each of its turns, ending the effect on itself on a success. Once used, this property can’t be used again until the next dawn.",
	toUni("Supernatural Awareness") + ". While you are holding the weapon, it alerts you to the location of any secret or concealed doors within 30 feet of you. In addition, you can cast Detect Evil and Good or Locate Object from the weapon. Once you cast either spell, you can’t cast it from the weapon again until the next dawn.",
	toUni("Sentience") + ". Whelm is a sentient, Lawful Neutral weapon with an Intelligence of 15, a Wisdom of 12, and a Charisma of 15. It has hearing and Darkvision out to 120 feet.",
	"The weapon communicates telepathically with its wielder and speaks Dwarvish, Giant, and Goblin.",
	toUni("Personality") + ". Whelm has ties to the dwarf clan that created it, called the Dankil or the Mightyhammer clan. It longs to be returned to that clan. Whelm’s purpose is to protect dwarves. Conflict arises if the wielder doesn’t share this goal.",
	toUni("Destroying Whelm") + ". Whelm can be dissolved in the acidic bile of a recently slain ancient black dragon. It can also be melted down in the forges of the Mightyhammer dwarf clan, but only by the rightful leader of that clan."
];
MagicItemsList["whelm"] = {
	name: "Whelm",
	source: [["D24", 324]],
	type: "weapon (warhammer)",
	rarity: "artifact",
	notLegalAL: true,
	description: "This sentient warhammer adds +3 to hit and damage, has the thrown property, deals extra damage when thrown, and returns to your hand when thrown. You can take a Magic action to strike the ground and send a shock wave. See Notes page.",
	descriptionFull: DMG_whelmFullDescription.join("\n   ").replace(/>>(.*?)<</g, function (a, match) { return toUni(match); }),
	attunement: true,
	prerequisite: "Requires Attunement by a Dwarf or a Creature Attuned to a Belt of Dwarvenkind",
	prereqeval: function (v) {
		if (CurrentRace.known.indexOf("dwarf") !== -1) return true;
		for (var i = 0; i < CurrentMagicItems.known.length; i++) {
			// if it's not null, attunement is checked, and if it's the belt of dwarven kind.
			if (tDoc.getField(ReturnMagicItemFieldsArray(i + 1)[4]) !== null && tDoc.getField(ReturnMagicItemFieldsArray(i + 1)[4]).isBoxChecked(0) !== 0 && CurrentMagicItems.known[i].indexOf("belt of dwarvenkind") !== -1) {
				return true;
			}
		}
		return false;
	},
	weight: 2,
	weaponOptions: [{
		baseWeapon: "warhammer",
		regExpSearch: /whelm/i,
		name: "Whelm",
		source: [["D24", 324]],
		range: "Melee, 60/180 ft",
		description: "Versatile (1d10), Thrown, Push; Returning; +1d8 Force dmg when thrown (or +4d8 Force vs. constructs, elementals, or giants)",
		modifiers: [3, 3],
		selectNow: true
	}],
	toNotesPage: [{
		name: "Features",
		note: desc(DMG_whelmFullDescription).replace(/>>(.*?)<</g, function (a, match) { return match.toUpperCase(); }).replace(/your/g, "my").replace(/you are /ig, "I am ").replace(/(of|on|causes|alerts) you/ig, "$1 me").replace(/you /ig, "I ") + "\n\n" + sentientItemConflictTxt
	}],
	action: [["action", " (Shock Wave)"]],
	extraLimitedFeatures: [{
		name: "Whelm [Shock Wave]",
		usages: 1,
		recovery: "dawn"
	}, {
		name: "Whelm [Detect Evil/Good]",
		usages: 1,
		recovery: "dawn"
	}, {
		name: "Whelm [Locate Object]",
		usages: 1,
		recovery: "dawn"
	}],
	vision: [["Know location of secret doors", 30]],
	spellcastingBonus: [{
		name: "Once per dawn",
		spells: ["detect evil and good", "locate object"],
		selection: ["detect evil and good", "locate object"],
		firstCol: "oncelr"
	}]
};
MagicItemsList["wind fan"] = {
	name: "Wind Fan",
	source: [["D24", 325]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While holding this fan, you can cast Gust of Wind (save DC 13) from it. Each subsequent time the fan is used before the next dawn, it has a cumulative 20 percent chance of not working; if the fan fails to work, it tears into useless, nonmagical tatters.",
	descriptionFull: "While holding this fan, you can cast Gust of Wind (save DC 13) from it. Each subsequent time the fan is used before the next dawn, it has a cumulative 20 percent chance of not working; if the fan fails to work, it tears into useless, nonmagical tatters.",
	usages: 1,
	recovery: "dawn",
	additional: "more uses +20% to destroy",
	fixedDC: 13,
	spellcastingBonus: {
		name: "Once per dawn",
		spells: ["gust of wind"],
		selection: ["gust of wind"],
		firstCol: "oncelr"
	}
};
MagicItemsList["winged boots"] = {
	name: "Winged Boots",
	source: [["D24", 325]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "These boots have 4 charges and regain 1d4 expended charges at dawn. While wearing these boots, you can take a Magic action to expend 1 charge to gain a Fly Speed of 30 feet for 1 hour. If you are flying when the duration expires, descend 30 ft per round until you land.",
	descriptionFull: "These boots have 4 charges and regain 1d4 expended charges daily at dawn. While wearing the boots, you can take a Magic action to expend 1 charge, gaining a Fly Speed of 30 feet for 1 hour. If you are flying when the duration expires, you descend at a rate of 30 feet per round until you land.",
	attunement: true,
	usages: "4",
	recovery: "dawn",
	additional: "regains 1d4"
};
MagicItemsList["wings of flying"] = {
	name: "Wings of Flying",
	source: [["D24", 325]],
	type: "wondrous item",
	rarity: "rare",
	magicItemTable: "?",
	description: "While wearing this cloak, you can take a Magic action to turn the cloak into a pair of wings on your back. The wings last for 1 hour or until you end the affect early as a Magic action. The wings give a flying speed of 60 ft. When they disappear, you can't use them again for 1d12 hours.",
	descriptionFull: "While wearing this cloak, you can take a Magic action to turn the cloak into a pair of wings on your back. The wings lasts for 1 hour or until you end the effect early as a Magic action. The wings give you a Fly Speed of 60 feet. If you are aloft when the wings disappear, you fall. When the wings disappear, you can’t use them again for 1d12 hours.",
	attunement: true,
	action: [["action", " (start/stop)"]],
	usages: 1,
	recovery: "1d12 h"
};
MagicItemsList["wraps of unarmed power"] = {
	name: "Wraps of Unarmed Power, +1, +2, or +3",
	nameTest: "Wraps of Unarmed Power",
	source: [["D24", 325]],
	magicItemTable: "?",
	type: "wondrous item",
	description: "While wearing these wraps, you have a bonus to attack rolls and damage rolls made with your Unarmed Strikes. The bonus is determined by the wraps’ rarity, and those strikes deal your choice of Force damage or their normal damage type. The bonus is determined by rarity: uncommon (+1), rare (+2), or very rare (+3).",
	descriptionFull: "While wearing these wraps, you have a bonus to attack rolls and damage rolls made with your Unarmed Strikes. The bonus is determined by the wraps’ rarity, and those strikes deal your choice of Force damage or their normal damage type. Rarity/Bonus: uncommon (+1), rare (+2), or very rare (+3).",
	choices : ["+1 Wraps of Unarmed Power (uncommon)", "+2 Wraps of Unarmed Power (rare)", "+3 Wraps of Unarmed Power (very rare)"],
	"+1 wraps of unarmed power (uncommon)": {
		name: "Wraps of Unarmed Power +1",
		nameTest: "+1 Wraps of Unarmed Power",
		rarity: "uncommon",
		description: "While wearing these wraps, you gain a +1 bonus to the attack and damage rolls of your Unarmed Strikes. Your Unarmed Strikes can deal your choice of Force or their normal damage.",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					if (v.baseWeaponName == "unarmed strike") {
						fields.Description += (fields.Description ? '; ' : '') + 'Choice of Force or normal dmg';

					}
				},
				"Your Unarmed Strikes get a +1 bonus to attack / damage rolls and you can choose between Force damage or normal damage.",
				700
			],
			atkCalc: [
				function (fields, v, output) {
					if (v.baseWeaponName == "unarmed strike") {
						output.magic += 1;
					}
				}, 
				''
			]
		}
	},
	"+2 wraps of unarmed power (rare)": {
		name: "Wraps of Unarmed Power +2",
		nameTest: "+2 Wraps of Unarmed Power",
		rarity: "rare",
		description: "While wearing these wraps, you gain a +2 bonus to the attack and damage rolls of your Unarmed Strikes. Your Unarmed Strikes can deal your choice of Force or their normal damage.",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					if (v.baseWeaponName == "unarmed strike") {
						fields.Description += (fields.Description ? '; ' : '') + 'Choice of Force or normal damage';
					}
				},
				"Your Unarmed Strikes get a +2 bonus to attack / damage rolls and you can choose between Force damage or normal damage.",
				700
			],
			atkCalc: [
				function (fields, v, output) {
					if (v.baseWeaponName == "unarmed strike") {
						output.magic += 2;
					}
				}, 
				''
			]
		}
	},
	"+3 wraps of unarmed power (very rare)": {
		name: "Wraps of Unarmed Power +3",
		nameTest: "+3 Wraps of Unarmed Power",
		rarity: "very rare",
		description: "While wearing these wraps, you gain a +3 bonus to the attack and damage rolls of your Unarmed Strikes. You Unarmed Strikes can deal your choice of Force or their normal damage.",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					if (v.baseWeaponName == "unarmed strike") {
						fields.Description += (fields.Description ? '; ' : '') + 'Choice of Force or normal damage';
					}
				},
				"Your Unarmed Strikes get a +3 bonus to attack / damage rolls and you can choose between Force damage or normal damage.",
				700
			],
			atkCalc: [
				function (fields, v, output) {
					if (v.baseWeaponName == "unarmed strike") {
						output.magic += 3;
					}
				}, 
				''
			]
		}
	}
};
