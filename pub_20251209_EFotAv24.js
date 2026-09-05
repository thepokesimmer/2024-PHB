var iFileName = "pub_202512097_EFotA.js";
RequiredSheetVersion("14.0.0", "24.1.0");

SourceList["E:FotA"] = {
    name : "Eberron: Forge of the Artificer",
    abbreviation : "E:FotA",
    abbreviationSpellsheet: "FA",
    group: "Campaign Sourcebooks",
    campaignSetting: "Eberron",
    url: "https://marketplace.dndbeyond.com/category/5147000?pid=D5147000",
    date: "2025/12/09",
};
//Class
ClassList.artificer = {
    regExpSearch : /^(?=.*artificer).*$/i,
    name : "Artificer",
    source : ["E:FotA", 7],
    primaryAbility : "Intelligence",
    prereqs : "Intelligence 13", 
    die : 8,
    improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    saves : ["Con", "Int"],
    skillstxt : {
        primary : "Choose two from Arcana, History, Investigation, Medicine, Nature, Perception, or Sleight of Hand.",
        secondary : "Choose one from Arcana, History, Investigation, Medicine, Nature, Perception, or Sleight of Hand."
    },
    armorProfs : {
        primary : [true, true, false, true],
        secondary : [true, true, false, true]
    },
    weaponProfs : {
        primary : [true, false],
        secondary : [false, false]
    },
    toolProfs : {
        primary : [["Thieves' tools", "Dex"], ["Tinker's tools", "Dex"], ["Artisan's tools", 1]],
        secondary : [["Tinker's tools", "Dex"]]
    },
    startingEquipment: [{
		gold: 16,
		pack: "dungeoneer",
		equipright: [
			["Studded leather armor", "", 13],
			["Dagger", "", 1],
			["Thieve's tools", "", 1],
			["Tinker's tools", "", 10],
		],
		equip1stPage: {
			armor: "Studded Leather",
			weapons: ["Dagger"],
			ammo: [["Daggers", 1]],
		},
	}, {
		gold: 150,
	}],
    subclasses : ["Artificer Specialist", []],
    attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    spellcastingFactor : 2,
    spellcastingFactorRoundupMulti: true,
    spellcastingKnown : {
        cantrips : [2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4],
        spells : "list",
        prepared : [2, 3, 4, 5, 6, 6, 7, 7, 9, 9, 10, 10, 11, 11, 12, 12, 14, 14, 15, 15]
    },
    features : {
        "spellcasting" : {
            name : "Spellcasting",
            source : ["E:FotA", 7],
            minlevel : 1,
            description : desc([
                "I can cast prepared artificer spells, using Intelligence as my spellcasting ability",
                "I must use thieves', tinker's, or artisan's tools as a spellcasting focus",
                "I must have a focus in hand for every artificer spell, meaning they all have an M component",
                "Whenever I finish a long rest, I can replace one of my artificer cantrips with another",
                "I can also change my prepared artificer spells at the end of a long rest"
            ]),
            additional : "Intelligence is my spellcasting ability",
            calcChanges : {
                spellAdd : [
                    function (spellKey, spellObj, spName) {
                        if (spName !== "artificer") return;
                        if (!spellObj.compMaterial) {
                            spellObj.compMaterial = "Artisan's tools, thieves' tools, or tinker's tools";
                            spellObj.components += (spellObj.components ? "," : "") + "M\u0192";
                        } else if (!(/tool/i).test(spellObj.compMaterial)) {
                            spellObj.compMaterial += " [or artisan's/thieves'/tinker's tools]";
                        }
                    },
                    "My artificer spells always require a material component: thieves' tools, tinker's tools, or artisan's tools."
                ]
            }
        },
		"tinker's magic" : {
            name : "Tinker's Magic",
            source : ["E:FotA", 8],
            minlevel : 1,
            description : desc([
                "I learn the Mending cantrip",
                "As a Magic action holding Tinker's Tools, I can create one item within 5 ft of me",
                "The item vanishes when I finish a long rest. (See the notes page for the item list)"
            ]),
            usages : "Intelligence modifier per ",
            usagescalc : "event.value = Math.max(1, What('Int Mod'));",
            recovery : "long rest",
            action : [["action", " (create item)"]],
            spellcastingBonus : {
                name : "Tinker's Magic",
                spells : ["mending"],
                selection : ["mending"],
                firstCol : "atwill"
            },
            toNotesPage : [{
                name : "Tinker's Magic Item List",
                note : [
                    "As a Magic action while holding Tinker's Tools, you can create one item in an unoccupied space within 5 feet of yourself. The item lasts until you finish a Long Rest, at which point it vanishes.",
                    "You can choose from the following items:",
                    "Ball Bearings, Flask, Pouch, Basket, Grappling Hook, Rope, Bedroll, Hunting Trap, Sack, Bell, Jug, Shovel, Blanket, Lamp, Iron Spikes, Block and Tackle, Manacles, String, Glass Bottle, Net, Tinderbox, Bucket, Oil, Torch, Caltrops, Paper, Vial, Candle, Parchment, Crowbar, or Pole."
                ]
            }]
        },
		"replicate magic item" : {
            name : "Replicate Magic Item",
            source : ["E:FotA", 8],
            minlevel : 2,
            description : desc([
                "I can create magic items using plans I know when I finish a long rest",
                "I must have Tinker's Tools in hand; I can instantly attune to an item created this way",
                "Items function as normal, but vanish 1d4 days after my death or if I replace their plan",
                "If I exceed my max active items, the oldest one vanishes",
                "I can use any wand or weapon created this way as a spellcasting focus"
            ]),
            additional : levels.map(function(n) {
                var items = n < 2 ? 0 : n < 6 ? 2 : n < 10 ? 3 : n < 14 ? 4 : n < 18 ? 5 : 6;
                return items > 0 ? items + " active item" + (items > 1 ? "s" : "") : "";
            }),
            usages : [0, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6],
            recovery : "long rest",
            extraTimes : [0, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8],
            extrachoices : [],
            extraname : "Magic Item Plan"
        },
		"subclassfeature3" : {
            name : "Artificer Subclass",
            source : ["E:FotA", 10],
            minlevel : 3,
            description : desc([
                "I choose an Artificer subclass that specializes in a certain type of artifice",
                "I gain features from my subclass at levels 3, 5, 9, and 15"
            ])
        },
		"magic item tinker" : {
            name : "Magic Item Tinker",
            source : ["E:FotA", 10],
            minlevel : 6,
            description : desc([
                "I can use the following options on magic items I created with Replicate Magic Item:",
                "\u2022 Charge (Bonus Action): Expend a spell slot to restore item charges equal to slot level",
                "\u2022 Drain (Bonus Action): Vanish item to gain a spell slot (Common=1st, Unc/Rare=2nd)",
                "\u2022 Transmute (Action): Transform item into a different magic item from a plan I know"
            ]),
            action : [
                ["bonus action", "Magic Item Tinker (Charge/Drain)"],
                ["action", "Magic Item Tinker (Transmute)"]
            ],
            extraname : "Magic Item Tinker",
            extrachoices : ["Drain Magic Item", "Transmute Magic Item"],
            autoSelectExtrachoices : [{
                extrachoice : "drain magic item"
            }, {
                extrachoice : "transmute magic item"
            }],
            "drain magic item" : {
                name : "Drain Magic Item",
                source : ["E:FotA", 10],
                description : " [1 per Long Rest]\nAs a Bonus Action, I vanish a replicated item to gain a spell slot (1st-level if Common, 2nd-level if Uncommon/Rare). The slot vanishes when I finish a Long Rest.",
                usages : 1,
                recovery : "long rest"
            },
            "transmute magic item" : {
                name : "Transmute Magic Item",
                source : ["E:FotA", 10],
                description : " [1 per Long Rest]\nAs a Magic Action, I touch a replicated item and transform it into a different magic item based on a plan I know.",
                usages : 1,
                recovery : "long rest"
            }
        },
		"flash of genius" : {
            name : "Flash of Genius",
            source : ["E:FotA", 10],
            minlevel : 7,
            description : desc([
                "As a Reaction when I or a creature within 30 ft fails an ability check or saving throw,",
                "I can add my Intelligence modifier (minimum of +1) to the roll."
            ]),
            action : [["reaction", ""]],
            usages : "Intelligence modifier per ",
            usagescalc : "event.value = Math.max(1, What('Int Mod'));",
            recovery : "long rest"
        },
		"magic item adept" : {
            name : "Magic Item Adept",
            source : ["E:FotA", 10],
            minlevel : 10,
            description : desc("I can now attune to up to 4 magic items at once.")
        },
		"spell-storing item" : {
            name : "Spell-Storing Item",
            source : ["E:FotA", 11],
            minlevel : 11,
            description : desc([
                "When I finish a long rest, I can store a spell in a simple/martial weapon or focus",
                "I choose a 1st, 2nd, or 3rd-level artificer spell with a 1 action casting time",
                "The spell cannot require a material component that is consumed by the spell",
                "Any creature holding the item can take a Magic Action to cast the stored spell",
                "It uses my spellcasting ability; the casting creature maintains concentration",
                "A creature can only use the object this way once before the start of its next turn",
                "The spell stays in the item until all uses are expended or I use this feature again"
            ]),
            usages : "2 \xD7 Int mod per ",
            usagescalc : "event.value = Math.max(2, What('Int Mod') * 2);",
            recovery : "long rest"
        },
		"advanced artifice" : {
            name : "Advanced Artifice",
            source : ["E:FotA", 11],
            minlevel : 14,
            description : desc([
                "I can now attune to up to 5 magic items at once at the same time",
                "Whenever I finish a short rest, I regain 1 expended use of my Flash of Genius feature"
            ])
        },
		"magic item master" : {
            name : "Magic Item Master",
            source : ["E:FotA", 11],
            minlevel : 18,
            description : desc("I can now attune to up to 6 magic items at once.")
        },
		"epic boon" : {
            name : "Epic Boon",
            source : ["E:FotA", 11],
            minlevel : 19,
            description : desc("I gain an Epic Boon feat or another feat of my choice for which I qualify.")
        },
        "soul of artifice" : {
            name : "Soul of Artifice",
            source : ["E:FotA", 11],
            minlevel : 20,
            description : desc([
                "My mystical connection to my magic items grants me the following benefits:",
                "\u2022 Cheat Death: If reduced to 0 HP but not killed outright, I can disintegrate any",
                "  number of Uncommon or Rare magic items I created with Replicate Magic Item.",
                "  Instead of dropping to 0, my HP becomes 20 times the number of items disintegrated",
                "\u2022 Magical Guidance: If I am attuned to at least one magic item when I finish a",
                "  Short Rest, I regain ALL expended uses of my Flash of Genius feature"
            ])
        }
    }
};
//Subclasses
AddSubClass("artificer", "alchemist", {
    regExpSearch : /^(?=.*alchemist)(?!.*wizard).*$/i,
    subname : "Alchemist",
    source : ["E:FotA", 12],
    features : {
        "subclassfeature3" : {
            name : "Tools of the Trade",
            source : ["E:FotA", 12],
            minlevel : 3,
			spellcastingExtra : ["healing word", "ray of sickness", "flaming sphere", "melf's acid arrow", "gaseous form", "mass healing word", "death ward", "vitriolic sphere", "cloudkill", "raise dead"],
            description : desc([
                "I gain proficiency with Alchemist’s Supplies and the Herbalism Kit.",
                "If I already have these, I gain another artisan's tool proficiency.",
                "Crafting time for potions is halved."
            ]),
            toolProfs : [[["Alchemist's supplies"], 1], ["Herbalism kit"]]
        },
        "subclassfeature3.1" : {
            name : "Experimental Elixir",
            source : ["E:FotA", 13],
            minlevel : 3,
            description : desc([
                "After a long rest, I produce 2 elixirs (+1 at levels 5, 9, 15), roll on the **Experimental Elixir Effects** table (See Notes Page).",
                "As a bonus action, I can drink one or administer it to a creature within 5 ft.",
                "As a magic action, I can expend a spell slot to create one elixir with a chosen effect."
            ]),
            usages : "1 + Int mod per ",
            usagescalc : "event.value = 1 + Math.max(1, What('Int Mod'));",
            recovery : "long rest",
            action : [["bonus action", "Drink/Administer Elixir"], ["action", "Create Extra Elixir"]],
            toNotesPage : [{
                name : "Experimental Elixir Effects (1d6)",
                note : [
                    "   1: Healing (2d8+Int, +1d8 at lv 9/15)",
                    "2: Swiftness (+10 ft speed, +5 at lv 9/15)",
                    "3: Resilience (+1 AC, 10 min, 1h at lv 9, 8h at lv 15)",
                    "4: Boldness (+1d4 to atk/saves, 1 min, 10m at lv 9, 1h at lv 15)",
                    "5: Flight (10 ft fly, 20/30 at lv 9/15)",
					"6: Choose one of the other rows in this table."
                ]
            }]
        },
        "subclassfeature5" : {
            name : "Alchemical Savant",
            source : ["E:FotA", 14],
            minlevel : 5,
            description : desc("Using Alchemist’s Supplies as focus, add Int modifier to one roll of a spell that restores HP or deals Acid, Fire, or Poison damage.")
        },
        "subclassfeature9" : {
            name : "Restorative Reagents",
            source : ["E:FotA", 14],
            minlevel : 9,
            description : desc("I can cast Lesser Restoration without a slot using Alchemist's Supplies as a focus."),
            usages : "Intelligence modifier per ",
            usagescalc : "event.value = Math.max(1, What('Int Mod'));",
            recovery : "long rest"
        },
        "subclassfeature15" : {
            name : "Chemical Mastery",
            source : ["E:FotA", 14],
            minlevel : 15,
            description : desc([
                "Alchemical Eruption: +2d8 Force damage to one target of an Acid/Fire/Poison spell (1/turn).",
                "Resistance to Acid/Poison damage; Immunity to Poisoned condition.",
                "I can cast Tasha’s Bubbling Cauldron (1/Long Rest) without a slot or components."
            ])
        }
    }
});
AddSubClass("artificer", "armorer", {
    regExpSearch : /^(?=.*armorer)(?!.*wizard).*$/i,
    subname : "Armorer",
    source : ["E:FotA", 14],
    spellcastingExtra : ["magic missile", "thunderwave", "mirror image", "shatter", "hypnotic pattern", "lightning bolt", "fire shield", "greater invisibility", "passwall", "wall of force"],
    features : {
        "subclassfeature3" : {
            name : "Tools of the Trade",
            source : ["E:FotA", 14],
            minlevel : 3,
            description : desc([
                "I gain proficiency with Heavy Armor and Smith's Tools.",
                "If already proficient in Smith's Tools, I choose another artisan's tools.",
                "The crafting time for nonmagical or magic armor is halved."
            ]),
            armorProfs : [false, false, true, false],
            toolProfs : [["Smith's tools"], 1]
        },
        "subclassfeature3.1" : {
            name : "Arcane Armor",
            source : ["E:FotA", 15],
            minlevel : 3,
            description : desc([
                "As a Magic action with Smith's Tools, I can turn armor I'm wearing into Arcane Armor.",
                "It lacks a Strength requirement, and I can don/doff it as a Utilize action.",
                "It can't be removed against my will, and acts as a spellcasting focus for me."
            ])
        },
        "subclassfeature3.2" : {
            name : "Armor Model",
            source : ["E:FotA", 15],
            minlevel : 3,
            description : desc([
                "I can customize my Arcane Armor with a model using Smith's Tools on a short/long rest.",
                "Choose a model using the \"Choose Feature\" button above."
            ]),
            extrachoices : ["Dreadnaught", "Guardian", "Infiltrator"],
            "dreadnaught" : {
                name : "Armor Model: Dreadnaught",
                source : ["E:FotA", 15],
                description : desc([
                    "I gain the Force Demolisher weapon (deals Force damage, Reach).",
                    "On hit vs a smaller creature, I can push or pull it up to 10 ft.",
                    "Giant Stature (Bonus Action): For 1 min, reach +5 ft and become Large size.",
                    "Lvl 15: Weapon becomes 2d6; Stature reach +10 ft, up to Huge, Adv. on Str checks/saves."
                ]),
                weaponsAdd : ["Force Demolisher"],
                weaponOptions : {
                    baseWeapon : "unarmed strike",
                    regExpSearch : /^(?=.*force)(?=.*demolisher).*$/i,
                    name : "Force Demolisher",
                    source : ["E:FotA", 15],
                    ability : 4,
                    type : "Simple",
                    damage : [1, 10, "force"],
                    range : "Melee",
                    description : "Reach; Push/pull smaller target 10 ft",
                    abilitytodamage : true
                },
                action : [["bonus action", "Giant Stature"]],
                usages : "Int mod per ",
                usagescalc : "event.value = Math.max(1, What('Int Mod'));",
                recovery : "long rest"
            },
            "guardian" : {
                name : "Armor Model: Guardian",
                source : ["E:FotA", 15],
                description : desc([
                    "I gain the Thunder Pulse weapon (deals Thunder damage).",
                    "A creature hit has Disadv. on attacks against targets other than me until my next turn.",
                    "Defensive Field (Bonus Action): While Bloodied, gain Temp HP equal to my Artificer level.",
                    "Lvl 15: Weapon becomes 1d10."
                ]),
                weaponsAdd : ["Thunder Pulse"],
                weaponOptions : {
                    baseWeapon : "unarmed strike",
                    regExpSearch : /^(?=.*thunder)(?=.*pulse).*$/i,
                    name : "Thunder Pulse",
                    source : ["E:FotA", 15],
                    ability : 4,
                    type : "Simple",
                    damage : [1, 8, "thunder"],
                    range : "Melee",
                    description : "Target has disadv. on attacks vs others",
                    abilitytodamage : true
                },
                action : [["bonus action", "Defensive Field (while Bloodied)"]]
            },
            "infiltrator" : {
                name : "Armor Model: Infiltrator",
                source : ["E:FotA", 15],
                description : desc([
                    "I gain the Lightning Launcher weapon (90/300 ft range, deals Lightning damage).",
                    "Once per turn on a hit, I can deal an extra 1d6 Lightning damage.",
                    "My speed increases by +5 ft, and I have Advantage on Stealth checks.",
                    "This advantage cancels out the disadvantage from my armor, if applicable.",
                    "Lvl 15: Weapon becomes 2d6; hit targets shed Dim Light & have Disadv. vs me."
                ]),
                weaponsAdd : ["Lightning Launcher"],
                weaponOptions : {
                    baseWeapon : "light crossbow",
                    regExpSearch : /^(?=.*lightning)(?=.*launcher).*$/i,
                    name : "Lightning Launcher",
                    source : ["E:FotA", 15],
                    ability : 4,
                    type : "Simple",
                    damage : [1, 6, "lightning"],
                    range : "90/300 ft",
                    description : "Once per turn, deal extra 1d6 Lightning dmg",
                    abilitytodamage : true,
                    ammo : ""
                },
                speed : { allModes : "+5" },
                advantages : [["Stealth", true]]
            }
        },
        "subclassfeature5" : {
            name : "Extra Attack",
            source : ["E:FotA", 15],
            minlevel : 5,
            description : desc("I can attack twice instead of once whenever I take the Attack action on my turn.")
        },
        "subclassfeature9" : {
            name : "Improved Armorer",
            source : ["E:FotA", 15],
            minlevel : 9,
            description : desc([
                "I learn an additional Armor plan for my Replicate Magic Item feature.",
                "I can create an additional active Replicate item, which must be in the Armor category.",
                "I gain a +1 bonus to attack and damage rolls with my Arcane Armor's special weapon."
            ]),
            calcChanges : {
                atkAdd : [
                    function (fields, v) {
                        if ((/force demolisher|thunder pulse|lightning launcher/i).test(v.WeaponName)) {
                            fields.Description += (fields.Description ? '; ' : '') + '+1 to hit/dmg';
                        }
                    },
                    "My Arcane Armor special weapons get a +1 bonus to attack and damage rolls."
                ],
                atkCalc : [
                    function (fields, v, output) {
                        if ((/force demolisher|thunder pulse|lightning launcher/i).test(v.WeaponName)) {
                            output.extraDmg += 1;
                            output.extraHit += 1;
                        }
                    },
                    ""
                ]
            }
        },
        "subclassfeature15" : {
            name : "Perfected Armor",
            source : ["E:FotA", 16],
            minlevel : 15,
            description : desc([
                "My Arcane Armor model upgrades its weapons and grants new abilities:",
                "\u2022 Dreadnaught: 2d6 dmg; Stature adds +10 ft reach, up to Huge, Adv on Str checks/saves",
                "\u2022 Guardian: 1d10 dmg; Reaction to pull a Huge/smaller creature that ends turn in 30 ft.",
                "  Str save or pulled 25ft to me. If w/in 5 ft, I can make a melee attack against it.",
                "\u2022 Infiltrator: 2d6 dmg; hit targets shed light/have Disadv vs me; Bonus Action to fly (2x Spd)."
            ]),
            action : [
                ["reaction", "Guardian: Pull Creature"],
                ["bonus action", "Infiltrator: Flight"]
            ],
            usages : "Int mod per ",
            usagescalc : "event.value = Math.max(1, What('Int Mod'));",
            recovery : "long rest",
            calcChanges : {
                atkAdd : [
                    function (fields, v) {
                        if ((/force demolisher/i).test(v.WeaponName) && classes.known.artificer && classes.known.artificer.level >= 15) {
                            fields.Damage_Die = "2d6";
                        }
                        if ((/thunder pulse/i).test(v.WeaponName) && classes.known.artificer && classes.known.artificer.level >= 15) {
                            fields.Damage_Die = "1d10";
                        }
                        if ((/lightning launcher/i).test(v.WeaponName) && classes.known.artificer && classes.known.artificer.level >= 15) {
                            fields.Damage_Die = "2d6";
                        }
                    },
                    "At level 15, my Arcane Armor weapons' damage dice increase."
                ]
            }
        }
    }
});
AddSubClass("artificer", "artillerist", {
    regExpSearch : /^(?=.*artillerist)(?!.*wizard).*$/i,
    subname : "Artillerist",
    source : ["E:FotA", 16],
    features : {
        "subclassfeature3" : {
            name : "Tools of the Trade",
            source : ["E:FotA", 16],
            minlevel : 3,
			spellcastingExtra : ["shield", "thunderwave", "scorching ray", "shatter", "fireball", "wind wall", "ice storm", "wall of fire", "cone of cold", "wall of force"],
            description : desc([
                "I gain proficiency with Martial Ranged weapons and Woodcarver's Tools.",
                "If already proficient in Woodcarver's Tools, I choose another artisan's tools.",
                "The crafting time for making a magic wand is halved."
            ]),
            weaponProfs : [false, false, ["blowgun", "hand crossbow", "heavy crossbow", "longbow", "musket", "pistol"]],
            toolProfs : [["Woodcarver's tools"], 1]
        },
        "subclassfeature3.1" : {
            name : "Eldritch Cannon",
            source : ["E:FotA", 16],
            minlevel : 3,
            description : desc([
                "As an Action with Smith's/Woodcarver's tools, I can create an Eldritch Cannon.",
                "It lasts 1 hr, until destroyed, or dismissed (Action). I can have 1 cannon at a time.",
                "It is Small/Tiny, has 18 AC, HP equal to 5x my level, and immune to Poison/Psychic.",
                "Mending restores 2d6 HP to it. I can direct it to move 15 ft as part of activating it.",
                "As a Bonus Action, if I am within 60 ft, I can activate it:"
            ]),
            usages : 1,
            recovery : "long rest",
            additional : "or expend a spell slot",
            action : [
                ["action", "Create Eldritch Cannon (1st is free)"], 
                ["action", "Dismiss Eldritch Cannon"],
                ["bonus action", "Activate Eldritch Cannon"]
            ],
            creaturesAdd : [["Eldritch Cannon", true]],
            creatureOptions : [{
                name : "Eldritch Cannon",
                source : ["E:FotA", 16],
                size : 4,
                type : "Object",
                alignment : "Unaligned",
                ac : 18,
                hp : 15,
                hd : [0, 0],
                speed : "15 ft",
                scores : [10, 10, 10, 10, 10, 10],
                saves : ["", "", "", "", "", ""],
                condition_immunities : "poisoned",
                damage_immunities : "poison, psychic",
                passivePerception : 0,
                challengeRating : "0",
                proficiencyBonus : 0,
                attacksAction : 0,
                attacks : [],
                features : [{
                    name : "Creator",
                    description : "The cannon is a magical object. It has HP equal to 5 times the Artificer's level. It can be healed for 2d6 HP using the Mending cantrip."
                }],
                calcChanges : {
                    hp : function (totalHD, HDobj, prefix) {
                        if (!classes.known.artificer) return;
                        var artLvl = classes.known.artificer.level;
                        HDobj.alt.push(artLvl * 5);
                        HDobj.altStr.push("5 \xD7 Artificer level");
                    }
                }
            }],
            weaponsAdd : ["Flamethrower", "Force Ballista"],
            weaponOptions : {
                baseWeapon : "unarmed strike",
                regExpSearch : /flamethrower/i,
                name : "Flamethrower",
                source : ["E:FotA", 16],
                ability : 4,
                type : "Spell",
                damage : [2, 8, "fire"],
                range : "15-ft cone",
                description : "Dex save, half dmg on success; Ignites objects",
                abilitytodamage : false,
                dc : true
            },
            "force ballista" : {
                baseWeapon : "unarmed strike",
                regExpSearch : /force ballista/i,
                name : "Force Ballista",
                source : ["E:FotA", 17],
                ability : 4,
                type : "Spell",
                damage : [2, 8, "force"],
                range : "120 ft",
                description : "Target pushed 5 ft away from cannon",
                abilitytodamage : false
            }
        },
        "subclassfeature5" : {
            name : "Arcane Firearm",
            source : ["E:FotA", 17],
            minlevel : 5,
            description : desc([
                "After a long rest, I can carve sigils into a rod, staff, wand, or Martial Ranged weapon.",
                "It becomes my Arcane Firearm and a Spellcasting Focus for my Artificer spells.",
                "When casting an Artificer spell through it, I add 1d8 to one of the spell's damage rolls."
            ]),
            calcChanges : {
                atkCalc : [
                    function (fields, v, output) {
                        if (v.isSpell && classes.known.artificer && v.thisWeapon[3] && SpellsList[v.thisWeapon[3]] && SpellsList[v.thisWeapon[3]].classes.indexOf("artificer") !== -1) {
                            output.extraDmg += " + 1d8";
                        }
                    },
                    "When I cast an Artificer spell through my Arcane Firearm, I can add 1d8 to one of the spell's damage rolls."
                ]
            }
        },
        "subclassfeature9" : {
            name : "Explosive Cannon",
            source : ["E:FotA", 17],
            minlevel : 9,
            description : desc([
                "My cannons' damage rolls and Protector Temp HP increase by 1d8.",
                "Detonate: As a Reaction when my cannon takes damage (if I am within 60 ft), I can",
                "destroy it. Creatures in a 20-ft radius make a Dex save (3d10 Force dmg, half on success)."
            ]),
            action : [["reaction", "Detonate Cannon"]],
            calcChanges : {
                atkAdd : [
                    function (fields, v) {
                        if ((/flamethrower|force ballista/i).test(v.WeaponName)) {
                            fields.Damage_Die = "3d8";
                        }
                    },
                    "My Eldritch Cannon attacks deal an extra 1d8 damage."
                ]
            }
        },
        "subclassfeature15" : {
            name : "Fortified Position",
            source : ["E:FotA", 17],
            minlevel : 15,
            description : desc([
                "I and my allies have Half Cover (+2 AC and Dex saves) while within 10 ft of my cannon.",
                "I can have two cannons at the same time and create two with the same Magic action.",
                "I can activate both cannons with the same Bonus Action."
            ])
        }
    }
});
AddSubClass("artificer", "battle smith", {
    regExpSearch : /^(?=.*battle)(?=.*smith)(?!.*wizard).*$/i,
    subname : "Battle Smith",
    source : ["E:FotA", 18],
    features : {
        "subclassfeature3" : {
            name : "Tools of the Trade",
            source : ["E:FotA", 18],
            minlevel : 3,
			spellcastingExtra : ["heroism", "shield", "shining smite", "warding bond", "aura of vitality", "conjure barrage", "aura of purity", "fire shield", "banishing smite", "mass cure wounds"],
            description : desc([
                "I gain proficiency with Smith's Tools.",
                "If already proficient in Smith's Tools, I choose another artisan's tools.",
                "The crafting time for making a nonmagical or magic weapon is halved."
            ]),
            toolProfs : [["Smith's tools"], 1]
        },
        "subclassfeature3.1" : {
            name : "Battle Ready",
            source : ["E:FotA", 18],
            minlevel : 3,
            description : desc([
                "I gain proficiency with Martial weapons.",
                "When I attack with a magic weapon, I can use Intelligence for attack and damage rolls.",
                "I can use a weapon I am proficient with as a Spellcasting Focus."
            ]),
            weaponProfs : [false, true],
            calcChanges : {
                atkAdd : [
                    function (fields, v) {
                        if (v.isMeleeWeapon || v.isRangedWeapon) {
                            var isMagic = (/magic/i).test(v.WeaponTextName) || v.thisWeapon[1] > 0 || (/(\+1|\+2|\+3)/).test(v.WeaponName);
                            if (isMagic && fields.Mod === 1 || fields.Mod === 2) {
                                fields.Mod = 4;
                                fields.Description += (fields.Description ? '; ' : '') + 'Uses Int';
                            }
                        }
                    },
                    "If I attack with a magic weapon, I use my Intelligence modifier for the attack and damage rolls instead of Strength or Dexterity."
                ]
            }
        },
        "subclassfeature3.2" : {
            name : "Steel Defender",
            source : ["E:FotA", 18],
            minlevel : 3,
            description : desc([
                "I create a Steel Defender (construct) that obeys me and acts during my turn.",
                "It takes the Dodge action unless I command it (Bonus Action) to take another action.",
                "If I am Incapacitated, it acts on its own. It vanishes if I die.",
                "If it died within 1 hr, I can use a Magic action and a spell slot to revive it (after 1 min).",
                "I can create a new defender after a Long Rest using Smith's tools (the old one vanishes)."
            ]),
            action : [["bonus action", "Command Steel Defender"], ["action", "Revive Steel Defender (1 min)"]],
            creaturesAdd : [["Steel Defender", true]],
            creatureOptions : [{
                name : "Steel Defender",
                source : ["E:FotA", 18],
                size : 3,
                type : "Construct",
                alignment : "Neutral",
                ac : 15,
                hp : 17,
                hd : [0, 0],
                speed : "40 ft",
                scores : [14, 12, 14, 4, 10, 6],
                saves : ["", "", "", "", "", ""],
                skills : {
                    "athletics" : 2,
                    "perception" : 0
                },
                condition_immunities : "charmed, exhaustion, poisoned",
                damage_immunities : "poison",
                passivePerception : 10,
                challengeRating : "0",
                proficiencyBonus : 2,
                proficiencyBonusLinked : true,
                attacksAction : 1,
                attacks : [{
                    name : "Force-Empowered Rend",
                    ability : 4, 
                    damage : [1, 8, "force"],
                    range : "Melee (5 ft)",
                    description : "Uses Artificer's Spell Attack and Int mod for damage",
                    useSpellMod : "artificer"
                }, {
                    name : "Repair (3/Day)",
                    ability : 3,
                    damage : [2, 8, "healing"],
                    range : "Touch",
                    description : "Construct or Object regains 2d8 + PB HP",
                    abilitytodamage : false
                }],
                features : [{
                    name : "Creator",
                    description : "The defender obeys the Artificer. In combat, it acts during the Artificer's turn. It can move and take its reaction on its own, but it only takes the Dodge action unless commanded to take another action as a Bonus Action."
                }, {
                    name : "Vigilant",
                    description : "The defender can't be surprised."
                }],
                actions : [{
                    name : "Deflect Attack",
                    description : "Reaction: When a creature within 5 ft of the defender attacks a target other than the defender, it imposes Disadvantage on the attack roll."
                }],
                calcChanges : {
                    hp : function (totalHD, HDobj, prefix) {
                        if (!classes.known.artificer) return;
                        var artLvl = classes.known.artificer.level;
                        var intMod = Math.max(0, What('Int Mod'));
                        HDobj.alt.push(2 + (artLvl * 5) + intMod);
                        HDobj.altStr.push("2 + 5 \xD7 Artificer level + Int mod");
                    },
                    setAltHp : true,
                    skills : function (skills, prefix) {
                        skills["perception"] = Math.max(0, What('Int Mod')) * 2;
                        skills["athletics"] = Math.max(0, What('Proficiency Bonus')); 
                    },
                    atkAdd : [
                        function (fields, v) {
                            if (v.WeaponName === 'force-empowered rend') {
                                fields.Mod = 4;
                            }
                        }
                    ]
                }
            }]
        },
        "subclassfeature5" : {
            name : "Extra Attack",
            source : ["E:FotA", 19],
            minlevel : 5,
            description : desc([
                "I can attack twice instead of once whenever I take the Attack action on my turn.",
                "I can forgo one of my attacks to command my Steel Defender to use Force-Empowered Rend."
            ])
        },
        "subclassfeature9" : {
            name : "Arcane Jolt",
            source : ["E:FotA", 19],
            minlevel : 9,
            description : desc([
                "When I hit with a magic weapon or my defender hits, I can channel energy (1/turn):",
                "\u2022 Destructive: The target takes an extra 2d6 Force damage.",
                "\u2022 Restorative: A creature/object within 30 ft of the target regains 2d6 HP."
            ]),
            usages : "Int mod per ",
            usagescalc : "event.value = Math.max(1, What('Int Mod'));",
            recovery : "long rest",
            calcChanges : {
                atkAdd : [
                    function (fields, v) {
                        if (classes.known.artificer && classes.known.artificer.level >= 15) {
                            fields.Description += (fields.Description ? '; ' : '') + 'Arcane Jolt: +4d6 Force dmg or 4d6 Heal';
                        } else {
                            fields.Description += (fields.Description ? '; ' : '') + 'Arcane Jolt: +2d6 Force dmg or 2d6 Heal';
                        }
                    },
                    "I can use Arcane Jolt to deal extra Force damage or heal an ally when I hit with a magic weapon."
                ]
            }
        },
        "subclassfeature15" : {
            name : "Improved Defender",
            source : ["E:FotA", 19],
            minlevel : 15,
            description : desc([
                "My Arcane Jolt extra damage and healing both increase to 4d6.",
                "When my defender uses Deflect Attack, the attacker takes 1d4 + my Int mod Force damage."
            ])
        }
    }
});
AddSubClass("artificer", "cartographer", {
    regExpSearch : /^(?=.*cartographer)(?!.*wizard).*$/i,
    subname : "Cartographer",
    source : ["E:FotA", 20],
    features : {
        "subclassfeature3" : {
            name : "Tools of the Trade",
            source : ["E:FotA", 20],
            minlevel : 3,
			spellcastingExtra : ["faerie fire", "guiding bolt", "healing word", "locate object", "mind spike", "call lightning", "clairvoyance", "banishment", "locate creature", "scrying", "teleportation circle"],
            description : desc([
                "I gain proficiency with Calligrapher's Supplies and Cartographer's Tools.",
                "If I already have one, I gain another artisan's tools proficiency (or two if both).",
                "The crafting time for scribing a Spell Scroll is halved."
            ]),
            toolProfs : [[["Calligrapher's supplies"], 1], [["Cartographer's tools"], 1]]
        },
        "subclassfeature3.1" : {
            name : "Adventurer's Atlas",
            source : ["E:FotA", 20],
            minlevel : 3,
            description : desc([
                "On a Long Rest using Cartographer's tools, I can make maps for 2 to 1+Int mod creatures.",
                "Maps show the relative position of all map holders on the same plane to each other.",
                "Map holders can target each other with sight/cover spells regardless of sight/cover.",
                "While holding a map, a creature adds 1d4 to its Initiative rolls."
            ]),
            usages : "1 + Int mod maps",
            usagescalc : "event.value = Math.max(2, 1 + What('Int Mod'));",
            recovery : "long rest",
        },
        "subclassfeature3.2" : {
            name : "Mapping Magic",
            source : ["E:FotA", 21],
            minlevel : 3,
            description : desc([
                "Illuminated Cartography: I can cast Faerie Fire without a spell slot (Int mod/LR).",
                "Portal Jump: On my turn, I can spend movement equal to half my Speed to teleport.",
                "I can teleport up to 10 ft, or within 5 ft of a map holder that is within 30 ft of me.",
                "I cannot use Portal Jump if my Speed is 0."
            ]),
            usages : "Int mod per ",
            usagescalc : "event.value = Math.max(1, What('Int Mod'));",
            recovery : "long rest"
        },
        "subclassfeature5" : {
            name : "Guided Precision",
            source : ["E:FotA", 21],
            minlevel : 5,
            description : desc([
                "Once per turn, when I cast a Cartographer spell or hit a creature affected by my",
                "Faerie Fire with an attack, I can add my Int mod to one damage roll.",
                "I can't lose Concentration on Faerie Fire as a result of taking damage."
            ]),
            calcChanges : {
                atkAdd : [
                    function (fields, v) {
                        var cartSpells = ["faerie fire", "guiding bolt", "healing word", "locate object", "mind spike", "call lightning", "clairvoyance", "banishment", "locate creature", "scrying", "teleportation circle"];
                        if (v.isSpell && v.thisWeapon[3] && cartSpells.indexOf(v.thisWeapon[3]) !== -1) {
                            fields.Description += (fields.Description ? '; ' : '') + 'Once per turn: +Int mod to dmg';
                        }
                    },
                    "Once per turn, I can add my Intelligence modifier to one damage roll of my Cartographer spells, or to an attack against a creature affected by my Faerie Fire."
                ]
            }
        },
        "subclassfeature9" : {
            name : "Ingenious Movement",
            source : ["E:FotA", 21],
            minlevel : 9,
            description : desc([
                "When I use my Flash of Genius Reaction, I or a willing creature I can see within 30 ft",
                "can teleport up to 30 ft to an unoccupied space I can see as part of that Reaction."
            ])
        },
        "subclassfeature15" : {
            name : "Superior Atlas",
            source : ["E:FotA", 21],
            minlevel : 15,
            description : desc([
                "Safe Haven: If a map holder drops to 0 HP, they can destroy their map instead.",
                "They drop to HP equal to 2x my Artificer level, and teleport within 5 ft of a map holder.",
                "Unerring Path: If holding a map, I can cast Find the Path w/o a slot/prep/components."
            ]),
            spellcastingBonus : [{
                name : "Unerring Path",
                spells : ["find the path"],
                selection : ["find the path"],
                firstCol : "oncelr"
            }]
        }
    }
});
// Add "Homunculus Servant" Spell
SpellsList["homunculus servant"] = {
    name: "Homunculus Servant",
    source: ["E:FotA", 21],
    classes: ["artificer"],
    level: 2,
    school: "Conj",
    time: "1 h",
    range: "10 ft",
    rangeMetric: "3 m",
    components: "V,S,M\u2020",
    compMaterial: "a gem or crystal worth 100+ GP",
    duration: "Instantaneous",
    description: "Gain a Homunculus Servant; can attack; it can deliver touch spells; can be upcast; see B.",
    descriptionFull: "You summon a special homunculus in an unoccupied space within range. This creature uses the Homunculus Servant stat block. If you already have a homunculus from this spell, the homunculus is replaced by the new one." + "\n   " + "You determine the homunculus's appearance, such as a mechanical-looking bird; winged vials; or miniature, animate cauldrons." + "\n   " + "Combat. The homunculus is an ally to you and your allies. In combat, it shares your Initiative count, but it takes its turn immediately after yours. It obeys your commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger." + "\n   " + "At Higher Levels. Use the spell slot's level for the spell’s level in the stat block.",
    ritual: true,
};
for (var i = 1; i <= 9; i++) {
    var homunculusHP = 5 + (i * 5);
    
    CreatureList["homunculus servant (lvl " + i + ")"] = {
        name: "Homunculus Servant (lvl " + i + ")",
        regExpSearch: new RegExp("^(?=.*homunculus)(?=.*servant)(?=.*" + i + ").*$", "i"),
        source: [["E:FA", 21]],
        size: 5, // Tiny
        type: "Construct",
        alignment: "Neutral",
        companion: "spell_creatures",
        companionApply: "spell_creatures",
        spell: "homunculus servant",
        ac: 13,
        hp: homunculusHP, // 5 + 5 per spell level
        hd: [i, 4], // d4s equal to the spell's level
        speed: "20 ft, Fly 30 ft",
        scores: [4, 15, 12, 10, 10, 7],
        immunities: "Poison",
        condition_immunities: "Exhaustion, Poisoned",
        senses: "Darkvision 60 ft",
        passivePerception: 10,
        languages: "Telepathy 1 mile (works only with you)",
        challengeRating: "0",
        proficiencyBonus: 0,
        proficiencyBonusLinked: true,
        attacksAction: 1,
        traits: [{
            name: "Evasion",
            description: "If the homunculus is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the save and only half damage if it fails. It can't use this trait if it has the Incapacitated condition."
        }, {
            name: "Magic Bond",
            description: "Add +" + i + " to any ability check or saving throw the homunculus makes."
        }],
        actions: [{
            name: "Channel Magic (Reaction)",
            description: "Trigger: I cast a spell that has a range of touch while the homunculus is within 120 ft of me. Response: The homunculus delivers the spell through its touch."
        }],
        attacks: [{
            name: "Force Strike",
            ability: 4, // Intelligence (+0) is used to perfectly hit the '0 + spell level' damage mod
            damage: [1, 6, "force"],
            range: "5 ft or 30 ft",
            modifiers: ["max(oInt|oWis|oCha)-Int", i], // Replaces Int mod with Spellcasting mod for attack, adds spell level to damage
            abilitytodamage: true,
            description: ""
        }]
    };
}
// Backgrounds
BackgroundList["aberrant heir"] = {
    regExpSearch: /^(?=.*aberrant)(?=.*heir).*$/i,
    name: "Aberrant Heir",
    source: ["E:FotA", 25],
    scorestxt: ["+2 and +1 -or- +1 to each from Strength, Constitution, and Charisma"],
    skills: ["History", "Intimidation"],
    toolProfs: [
        ["Disguise Kit"]
    ],
    gold: 16,
    equipleft: [
        ["Disguise kit", "", 3],
    ],
    equipright: [
        ["Dagger", "", 1],
        ["Costume", "", 4],
        ["Traveler's clothes", "", 4],
    ],
    feature: "Aberrant Heir",
};
BackgroundFeatureList["aberrant heir"] = {
    description: "Your aberrant dragonmark has made life challenging since it manifested. You might have hidden it successfully for most of your life or managed to avoid notice. Alternatively, you might have encountered suspicion and fear, perhaps coupled with the outright antagonism of one or more dragonmarked houses. You might have formed an association with the House Tarkanan criminal organization (named for one of the most notorious leaders of the aberrant dragonmarked in the War of the Mark twenty-five centuries ago). Or you might struggle to find your own way in the world, relying on your wits and the power of your mark.",
    source: ["E:FotA", 25],
    eval: function() {
        AddFeat("Aberrant Dragonmark");
    },
    removeeval: function() {
        RemoveFeat("Aberrant Dragonmark");
    },
};
BackgroundList.archaeologist = {
    regExpSearch: /^(?=.*archaeologist).*$/i,
    name: "Archaeologist",
    source: ["E:FotA", 26],
    scorestxt: ["+2 and +1 -or- +1 to each from Dexterity, Intelligence, and Wisdom"],
    skills: ["History", "Survival"],
    toolProfs: [
        ["Cartographer's Tools"]
    ],
    gold: 17,
    equipleft: [
        ["Map", "", ""],
        ["Map or scroll case", "", 1],
        ["Tent", "", 20],
    ],
    equipright: [
        ["Bullseye lantern", "", 2],
        ["Shovel", "", 5],
        ["Traveler's clothes", "", 4],
    ],
    feature: "Archaeologist",
};
BackgroundFeatureList.archaeologist = {
    description: "You’ve made a lifelong study of the lost and fallen cultures of the past, visiting their ruins, deciphering their written records, and examining their surviving masterworks. Perhaps you studied at Morgrave University or a similar institution, supplementing your time in the library with fieldwork amid ancient ruins in remote locations. Some archaeologists plunder the treasures of the past in search of wealth or fame, but most consider it their calling to learn from the past. In any case, the archaeologists of Eberron combine the qualities of learned historians with the grit of treasure hunters.",
    source: ["E:FotA", 26],
    eval: function() {
        AddFeat("Skilled [Origin]");
    },
    removeeval: function() {
        RemoveFeat("Skilled [Origin]");
    },
};
BackgroundList["house agent"] = {
    regExpSearch: /^(?=.*house)(?=.*agent).*$/i,
    name: "House Agent",
    replaces: ["agent of house cannith", "agent of house deneith", "agent of house ghallanda", "agent of house jorasco", "agent of house lyrandar", "agent of house medani", "agent of house orien", "agent of house phiarlan", "agent of house sivis", "agent of house tharashk", "agent of house thuranni", "agent of house vadalis"],
    source: ["E:FotA", 26],
    scorestxt: ["+2 and +1 -or- +1 to each from Strength, Intelligence, and Charisma"],
    skills: ["Investigation", "Persuasion"],
    toolProfs: [
        ["Artisan's Tools", 1]
    ],
    gold: 20,
    equipleft: [
        ["Artisan's tools (same as proficiency)", "", ""],
    ],
    equipright: [
        ["Fine clothes", "", 6],
    ],
    feature: "house Agent",
};
BackgroundFeatureList["house agent"] = {
    description: "You are connected to one of the dragonmarked houses, but you haven’t (yet) manifested a dragonmark. You might be a member of the family by birth or an employee of the house with no familial connection. You’ve earned your living by doing the business of the house, serving as the hands, feet, and eyes of house leadership in the world. You might have many old friends, mentors, and rivals in the house you serve, plus allies or enemies in other houses.",
    source: ["E:FotA", 26],
    eval: function() {
        AddFeat("Lucky [Origin]");
    },
    removeeval: function() {
        RemoveFeat("Lucky [Origin]");
    },
};
BackgroundList["house cannith heir"] = {
    regExpSearch: /^(?=.*cannith)(?=.*heir).*$/i,
    name: "House Cannith Heir",
    source: ["E:FotA", 27],
    scorestxt: ["+2 and +1 -or- +1 to each from Strength, Dexterity, and Intelligence"],
    skills: ["Investigation", "Sleight of Hand"],
    toolProfs: [
        ["Artisan's Tools", 1]
    ],
    gold: 17,
    equipleft: [
        ["Artisan's tools (same as proficiency)", "", ""],
    ],
    equipright: [
        ["Crowbar", "", 5],
        ["Pouches", 2, 1],
        ["Fine clothes", "", 6],
    ],
    feature: "House Cannith Heir",
};
BackgroundFeatureList["house cannith heir"] = {
    description: "As a scion of House Cannith, you carry a proud legacy. Cannith creates wonders of the modern world, and you’re expected to contribute to the ongoing success of the house through invention, scholarship, business, or diplomacy. The only thing that can stand in your way is the deep rift within your own house. The sooner the three barons sort out which of them is the true head of the house (and you, no doubt, have your preference), the sooner House Cannith can claim its rightful position of leadership among all the dragonmarked houses.",
    source: ["E:FotA", 27],
    eval: function() {
        AddFeat("Mark of Making");
    },
    removeeval: function() {
        RemoveFeat("Mark of Making [Dragonmark]");
    },
};
BackgroundList["house deneith heir"] = {
    regExpSearch: /^(?=.*deneith)(?=.*heir).*$/i,
    name: "House Deneith Heir",
    source: ["E:FotA", 27],
    scorestxt: ["+2 and +1 -or- +1 to each from Strength, Constitution, and Wisdom"],
    skills: ["Insight", "Perception"],
    toolProfs: [
        ["Gaming Set", 1]
    ],
    gold: 1,
    equipleft: [
        ["Gaming set (same as proficiency)", "", ""],
        ["Healer's kit", "", 3],
    ],
    equipright: [
        ["Spear", "", 3],
        ["Shortbow", "", 2],
        ["Arrows", 20, 0.05],
        ["Quiver", "", 1],
        ["Fine clothes", "", 6],
    ],
    feature: "House Deneith Heir",
};
BackgroundFeatureList["house deneith heir"] = {
    description: "As an heir of House Deneith, you’ve been trained for combat—not to seek it out, but not to shy from it either. You’ve learned the importance of duty, honor, and the laws used to govern society when duty and honor fail. As you established your name in the house, you might have worked as a bodyguard for some minor dignitary, as a mercenary, or as a marshal hunting fugitives. Now you’re prepared to claim your rightful standing in the mightiest of the dragonmarked houses.",
    source: ["E:FotA", 27],
    eval: function() {
        AddFeat("Mark of Sentinel");
    },
    removeeval: function() {
        RemoveFeat("Mark of Sentinel [Dragonmark]");
    },
};
BackgroundList["house ghallanda heir"] = {
    regExpSearch: /^(?=.*ghallanda)(?=.*heir).*$/i,
    name: "House Ghallanda Heir",
    source: ["E:FotA", 28],
    scorestxt: ["+2 and +1 -or- +1 to each from Dexterity, Wisdom, and Charisma"],
    skills: ["Insight", "Persuasion"],
    toolProfs: [
        ["Cook's Utensils"]
    ],
    gold: 26,
    equipleft: [
        ["Cook's utensils", "", 8],
        ["Iron pot", "", 10],
        ["Oil, flasks of", 5, 1],
    ],
    equipright: [
        ["Fine clothes", "", 6],
        ["Perfume", "", ""],
    ],
    feature: "House Ghallanda Heir",
};
BackgroundFeatureList["house ghallanda heir"] = {
    description: "Thanks to your connections to House Ghallanda, you grew up accustomed to creature comforts, lively conversation, good drink, and delicious food. You might be a charming and witty scion of the house who loves nothing more than a pleasant evening beside a warm hearth. Or you could be a schemer who exploits bonds of trust and friendship to bend others to your will. You might pursue an adventuring career to master the cuisines of other cultures and ages, expand your network of useful contacts, or earn enough money to open your own inn.",
    source: ["E:FotA", 28],
    eval: function() {
        AddFeat("Mark of Hospitality");
    },
    removeeval: function() {
        RemoveFeat("Mark of Hospitality [Dragonmark]");
    },
};
BackgroundList["house jorasco heir"] = {
    regExpSearch: /^(?=.*jorasco)(?=.*heir).*$/i,
    name: "House Jorasco Heir",
    source: ["E:FotA", 28],
    scorestxt: ["+2 and +1 -or- +1 to each from Dexterity, Constitution, and Wisdom"],
    skills: ["Medicine", "Stealth"],
    toolProfs: [
        ["Herbalism Kit"]
    ],
    gold: 25,
    equipleft: [
        ["Herbalism kit", "", 3],
        ["Healer's kit", "", 3],
    ],
    equipright: [
        ["Fine clothes", "", 6],
    ],
    feature: "House Jorasco Heir",
};
BackgroundFeatureList["house jorasco heir"] = {
    description: "House Jorasco teaches that illness and injury stalk the living like ghosts, robbing people of health and longevity. You’ve been taught ways to combat these scourges, both magically and medically. You’re trained to use those skills in the service of others—and to ascertain that you are always appropriately compensated for this service, ensuring the health and longevity of House Jorasco. You might be a kindly healer with no stomach for combat or a dispassionate specialist who knows exactly how to incapacitate or kill an enemy with precise strikes.",
    source: ["E:FotA", 28],
    eval: function() {
        AddFeat("Mark of Healing");
    },
    removeeval: function() {
        RemoveFeat("Mark of Healing [Dragonmark]");
    },
};
BackgroundList["house kundarak heir"] = {
    regExpSearch: /^(?=.*kundarak)(?=.*heir).*$/i,
    name: "House Kundarak Heir",
    source: ["E:FotA", 29],
    scorestxt: ["+2 and +1 -or- +1 to each from Strength, Constitution, and Intelligence"],
    skills: ["Arcana", "Investigation"],
    toolProfs: [
        ["Thieves' Tools"]
    ],
    gold: 10,
    equipleft: [
        ["Thieves' Tools", "", 1],
    ],
    equipright: [
        ["Fine clothes", "", 6],
    ],
    feature: "House Kundarak Heir",
};
BackgroundFeatureList["house kundarak heir"] = {
    description: "As an heir of House Kundarak, you take great pride in your family and its work of safeguarding the valuables of Khorvaire. Your house has always been a leader among the clans of the Mror Holds. Though it has never held the crown, it has a reputation for professionalism, honor, and order. You might strive to uphold that reputation, you might place your own sense of honor over your family’s, or you could rebel against the house’s expectations and flout the demands of honor.",
    source: ["E:FotA", 29],
    eval: function() {
        AddFeat("Mark of Warding");
    },
    removeeval: function() {
        RemoveFeat("Mark of Warding [Dragonmark]");
    },
};
BackgroundList["house lyrandar heir"] = {
    regExpSearch: /^(?=.*lyrandar)(?=.*heir).*$/i,
    name: "House Lyrandar Heir",
    source: ["E:FotA", 29],
    scorestxt: ["+2 and +1 -or- +1 to each from Strength, Dexterity, and Charisma"],
    skills: ["Acrobatics", "Nature"],
    toolProfs: [
        ["Navigator's Tools"]
    ],
    gold: 10,
    equipleft: [
        ["Navigator's Tools", "", 2],
    ],
    equipright: [
        ["Fine clothes", "", 6],
    ],
    feature: "House Lyrandar Heir",
};
BackgroundFeatureList["house lyrandar heir"] = {
    description: "As an heir of House Lyrandar, the wind is your ally, the sea and sky your dominion. Despite the devastation of the Last War, your house is on the ascendancy, buoyed by its mastery of the new airship technology. You might have spent your early career on the sea as a sailor or navigator; as a shipwright; or as a member of the Raincallers’ Guild, manipulating the weather and assisting with irrigation and similar public works. Or you might have been among the first in your house to take to the skies as part of an airship crew. Service to the house might call you to hunt pirates in the Lhazaar Sea, to explore ancient ruins in search of magical technology to bind elemental forces, or to salvage a wrecked airship in the Mournland.",
    source: ["E:FotA", 29],
    eval: function() {
        AddFeat("Mark of Storm");
    },
    removeeval: function() {
        RemoveFeat("Mark of Storm [Dragonmark]");
    },
};
BackgroundList["house medani heir"] = {
    regExpSearch: /^(?=.*medani)(?=.*heir).*$/i,
    name: "House Medani Heir",
    source: ["E:FotA", 30],
    scorestxt: ["+2 and +1 -or- +1 to each from Dexterity, Intelligence, and Wisdom"],
    skills: ["Insight", "Investigation"],
    toolProfs: [
        ["Disguise Kit"]
    ],
    gold: 10,
    equipleft: [
        ["Disguise kit", "", 3],
    ],
    equipright: [
        ["Fine clothes", "", 6],
    ],
    feature: "House Medani Heir",
};
BackgroundFeatureList["house medani heir"] = {
    description: "As a member of House Medani, your life revolves around subterfuge—not engaging in it, but preventing others from doing so. You see the world around you as an intricate web of schemes, plots, and counterplots. Assessing the range of possibilities, you use instinct to predict threats to your clients and defend against them well before those threats can turn into danger. Defending against an assassin’s blade is a job any Deneith sellsword or Tharashk enforcer can do—making sure no one ever draws that blade is the Medani way.",
    source: ["E:FotA", 30],
    eval: function() {
        AddFeat("Mark of Detection");
    },
    removeeval: function() {
        RemoveFeat("Mark of Detection [Dragonmark]");
    },
};
BackgroundList["house orien heir"] = {
    regExpSearch: /^(?=.*orien)(?=.*heir).*$/i,
    name: "House Orien Heir",
    source: ["E:FotA", 30],
    scorestxt: ["+2 and +1 -or- +1 to each from Dexterity, Constitution, and Intelligence"],
    skills: ["Acrobatics", "Athletics"],
    toolProfs: [
        ["Cartographer's Tools"]
    ],
    gold: 18,
    equipleft: [
        ["Cartographer's tools", "", 6],
        ["Map", "", ""],
        ["Map or scroll case", "", 1],
    ],
    equipright: [
        ["Fine clothes", "", 6],
    ],
    feature: "House Orien Heir",
};
BackgroundFeatureList["house orien heir"] = {
    description: "Before the Last War, Orien’s influence covered Khorvaire, and its trade roads and lightning rails were the lifeblood of a vibrant kingdom. But the war cut those arteries, leaving Galifar dead and House Orien bloodied. While the house’s couriers and shippers still keep goods moving on both sides of the continent, finding a way to reestablish routes across the Mournland remains the house’s top priority. In the meantime, Orien adventurers can serve their house by investigating missing couriers, recovering goods stolen from caravans, and troubleshooting disruptions to the lightning rail.",
    source: ["E:FotA", 30],
    eval: function() {
        AddFeat("Mark of Passage");
    },
    removeeval: function() {
        RemoveFeat("Mark of Passage [Dragonmark]");
    },
};
BackgroundList["house phiarlan heir"] = {
    regExpSearch: /^(?=.*phiarlan)(?=.*heir).*$/i,
    name: "House Phiarlan Heir",
    source: ["E:FotA", 31],
    scorestxt: ["+2 and +1 -or- +1 to each from Dexterity, Wisdom, and Charisma"],
    skills: ["Deception", "Stealth"],
    toolProfs: [
        ["Disguise Kit"]
    ],
    gold: 10,
    equipleft: [
        ["Disguise kit", "", 3],
    ],
    equipright: [
        ["Fine clothes", "", 6],
    ],
    feature: "House Phiarlan Heir",
};
BackgroundFeatureList["house phiarlan heir"] = {
    description: "Though you have seen wealth, fame, and beauty as a child of House Phiarlan, you consider knowledge (and the power it brings) the greatest treasure of all. You might pursue that power as an artist or performer, always alert for secrets even as you regale the world with story, song, acrobatics, or art. Or you might foster ties to the secretive espionage arm of your house: the Serpentine Table.",
    source: ["E:FotA", 31],
    eval: function() {
        AddFeat("Mark of Shadow");
    },
    removeeval: function() {
        RemoveFeat("Mark of Shadow [Dragonmark]");
    },
};
BackgroundList["house sivis heir"] = {
    regExpSearch: /^(?=.*sivis)(?=.*heir).*$/i,
    name: "House Sivis Heir",
    source: ["E:FotA", 31],
    scorestxt: ["+2 and +1 -or- +1 to each from Intelligence, Wisdom, and Charisma"],
    skills: ["History", "Perception"],
    toolProfs: [
        ["Calligrapher's Supplies"]
    ],
    gold: 8,
    equipleft: [
        ["Calligrapher's supplies", "", 5],
        ["Ink", "", ""],
        ["Ink pens", 5, ""],
        ["Paper, sheets of", 30, ""],
        ["Parchment, sheets of", 9, ""],
    ],
    equipright: [
        ["Fine clothes", "", 6],
    ],
    feature: "House Sivis Heir",
};
BackgroundFeatureList["house sivis heir"] = {
    description: "For nearly thirty centuries, your family has worked to maintain order. Communication is the cord that binds civilization together, and your ancestors settled the disputes of sovereigns and helped the dragonmarked houses find a place in the world. Few people realize the influence House Sivis has had on the shape of the modern age—just as few know how often a royal adviser holds more power than the actual ruler. While the other dragonmarked houses fight for fame and recognition, House Sivis plays a long game of subtle influence behind the scenes, keeping order amid the chaos of unending intrigue.",
    source: ["E:FotA", 31],
    eval: function() {
        AddFeat("Mark of Scribing");
    },
    removeeval: function() {
        RemoveFeat("Mark of Scribing [Dragonmark]");
    },
};
BackgroundList["house tharashk heir"] = {
    regExpSearch: /^(?=.*tharashk)(?=.*heir).*$/i,
    name: "House Tharashk Heir",
    source: ["E:FotA", 32],
    scorestxt: ["+2 and +1 -or- +1 to each from Constitution, Intelligence, and Wisdom"],
    skills: ["Perception", "Survival"],
    toolProfs: [
        ["Gaming Set", 1]
    ],
    gold: 2,
    equipleft: [
        ["Gaming set (same as proficiency)", "", ""],
        ["Climber's kit", "", 12],
        ["Hunting trap", "", 25],
        ["Manacles", "", 6],
    ],
    equipright: [
        ["Fine clothes", "", 6],
    ],
    feature: "House Tharashk Heir",
};
BackgroundFeatureList["house tharashk heir"] = {
    description: "Heirs of other houses lead lives of luxury, but in House Tharashk you learned self-reliance from an early age. What your young house lacks in resources, it makes up for in spirit and determination. Tharashk has a destiny to fulfill, and you have a part in it. Whether in combat or in social interaction, you have learned to play the role of the hunter: study your enemies, exploit their weaknesses, and do whatever it takes to achieve victory.",
    source: ["E:FotA", 32],
    eval: function() {
        AddFeat("Mark of Finding");
    },
    removeeval: function() {
        RemoveFeat("Mark of Finding [Dragonmark]");
    },
};
BackgroundList["house thuranni heir"] = {
    regExpSearch: /^(?=.*thuranni)(?=.*heir).*$/i,
    name: "House Thuranni Heir",
    source: ["E:FotA", 32],
    scorestxt: ["+2 and +1 -or- +1 to each from Dexterity, Intelligence, and Charisma"],
    skills: ["Performance", "Stealth"],
    toolProfs: [
        ["Musical Instrument", 1]
    ],
    gold: 13,
    equipleft: [
        ["Musical instrument (same as proficiency)", "", ""],
        ["Climber's kit", "", 12],
        ["Hunting trap", "", 25],
        ["Manacles", "", 6],
    ],
    equipright: [
        ["Costume", "", 4],
        ["Fine clothes", "", 6],
    ],
    feature: "House Thuranni Heir",
};
BackgroundFeatureList["house thuranni heir"] = {
    description: "Given House Thuranni’s short history and focus on espionage, its leaders expect you to further the interests of the house at every opportunity. During the house’s formative years as an independent entity, every move you make has been watched closely. This isn’t to say that every Thuranni heir must actively spy at the behest of house elders. But even the house’s most insular artists and artisans must keep up with current political events and pass on or collect information when asked.",
    source: ["E:FotA", 32],
    eval: function() {
        AddFeat("Mark of Shadow");
    },
    removeeval: function() {
        RemoveFeat("Mark of Shadow [Dragonmark]");
    },
};
BackgroundList["house vadalis heir"] = {
    regExpSearch: /^(?=.*vadalis)(?=.*heir).*$/i,
    name: "House Vadalis Heir",
    source: ["E:FotA", 33],
    scorestxt: ["+2 and +1 -or- +1 to each from Constitution, Wisdom, and Charisma"],
    skills: ["Animal Handling", "Nature"],
    toolProfs: [
        ["Herbalism Kit"]
    ],
    gold: 29,
    equipleft: [
        ["Herbalism kit", "", 3],
    ],
    equipright: [
        ["Net", "", 3],
        ["Fine clothes", "", 6],
    ],
    feature: "House Vadalis Heir",
};
BackgroundFeatureList["house vadalis heir"] = {
    description: "You have grown up with respect for both family and nature. You understand the culture of the Five Nations, but you don’t get drawn into the games of ambition and status that others play. You know the beauty and power inherent in life, the mysteries of birth and death, and the miracles that happen in between. Your insights into the natural world allow you to see through the lies and deception of city folk—and never let on how much of their subterfuge you recognize.",
    source: ["E:FotA", 33],
    eval: function() {
        AddFeat("Mark of Handling");
    },
    removeeval: function() {
        RemoveFeat("Mark of Handling [Dragonmark]");
    },
};
BackgroundList.inquisitive = {
    regExpSearch: /^(?=.*inquisitive).*$/i,
    name: "Inquisitive",
    source: ["E:FotA", 33],
    scorestxt: ["+2 and +1 -or- +1 to each from Constitution, Intelligence, and Charisma"],
    skills: ["Insight", "Investigation"],
    toolProfs: [
        ["Thieves' Tools"]
    ],
    gold: 10,
    equipleft: [
        ["Thieves' Tools", "", 1],
        ["Bullseye lantern", "", 2],
        ["Oil, flasks of", 10, 1],
    ],
    equipright: [
        ["Crowbar", "", 4],
        ["Traveler's clothes", "", 4],
    ],
    feature: "Inquisitive",
};
BackgroundFeatureList.inquisitive = {
    description: "You have honed your talents of investigation and deduction—fueled by a boundless curiosity—to explore mysteries, find missing people, recover stolen goods, unearth corruption and conspiracies, and solve crimes. As an inquisitive, you might have pursued freelance work, signed on with an inquisitive agency (perhaps one licensed by a dragonmarked house such as Medani or Tharashk), reported for a broadsheet, or worked for a police force.",
    source: ["E:FotA", 33],
    eval: function() {
        AddFeat("Alert [Origin]");
    },
    removeeval: function() {
        RemoveFeat("Alert [Origin]");
    },
};
// Species
RaceList.changeling = {
    regExpSearch: /^(?=.*changeling).*$/i,
    name: "Changeling",
    sortname: "Changeling",
    source: ["E:FotA", 34],
    plural: "Changelings",
    size: [3, 4],
    speed: {
        walk: {
            spd: 30,
            enc: 20
        }
    },
    languageProfs: ["Common", 2],
    skillstxt: ["Choose 2 : Deception, Insight, Intimidation, Performance, or Persuasion"],
    age: "",
    height: " are about 4-7 feet tall, when medium size, or 2-4 feet tall, when small size",
    trait: "Changeling\n\u2022 Creature Type : Fey\n\u2022 Changeling Instincts: I gain proficiency in two of the following skills of my choice: Deception, Insight, Intimidation, Performance, or Persuasion.\n\u2022 Shape-Shifter: As an action, I can shape-shift to change my appearance and my voice. I determine the specifics of the changes, including my coloration, hair length, and sex. I can also adjust my height and weight and can change my size between Medium and Small. I can make myself appear as a member of another playable species, though none of my game statistics change. I can’t duplicate the appearance of an individual I’ve never seen, and I must adopt a form that has the same basic arrangement of limbs that I have. This trait doesn’t change my clothing and equipment. While shape-shifted with this trait, I have Advantage on Charisma checks. I stay in the new form until I take an action to revert to my true form.",
    replaces: ["changeling", "multiverse changeling"]
};
RaceList.kalashtar = {
    regExpSearch: /^(?=.*kalashtar).*$/i,
    name: "Kalashtar",
    sortname: "Kalashtar",
    source: ["E:FotA", 35],
    plural: "Kalashtar",
    size: [3],
    speed: {
        walk: {
            spd: 30,
            enc: 20
        }
    },
    languageProfs: ["Common", 2],
    dmgres: ["Psychic"],
    savetxt: {
        text: ["Adv on Wis and Cha saves; "]
    },
    skillstxt: ["Choose any 1, can replace after Long Rest"],
    age: "",
    height: " are about 6-7 feet tall",
    trait: "Kalashtar\n\u2022 Creature Type : Aberration\n\u2022 Mind Link: I have telepathy with a range in feet equal to 10 times my level. When I’m using this trait to speak telepathically to a creature, I can take a Magic action to give that creature the ability to speak telepathically with me for 1 hour or until I take another Magic action to end this effect.\n\u2022 Severed from Dreams: I can't be the target of the Dream spell. In addition, when I finish a Long Rest, I gain proficiency in one skill of my choice. This proficiency lasts until I finish another Long Rest.",
    replaces: ["kalashtar"],
};
RaceList["half-elf"] = {
    regExpSearch: /^(?=.*khoravar)|(?=.*half)(?=.*(elf|elv|drow|silvanesti|qualinesti|grugach|kagonesti)).*$/i,
    name: "Half-Elf",
    sortname: "Half-Elf",
    source: ["E:FotA", 36],
    plural: "Half-Elves",
    size: [3, 4],
    speed: {
        walk: {
            spd: 30,
            enc: 20
        }
    },
    languageProfs: ["Common", 2],
    vision: [
        ["Darkvision", 60]
    ],
    savetxt: {
        adv_vs: ["avoiding or ending the Charmed condition"]
    },
    skillstxt: ["Choose any 1 skill or tool prof, can replace after Long Rest"],
    age: "",
    spellcastingAbility: [4, 5, 6],
    spellcastingBonus: [{
        name: "Fey Gift",
        "class": ["cleric", "druid", "wizard"],
        selection: ["friends"],
        level: [0, 0],
        times: 1,
        firstCol: "atwill",
    }],
    limfeaname: "Lethargy Resilience",
    usages: 1,
    recovery: "long rest",
    additional: "Recover after 1d4 Long Rests",
    height: " are about 4-6 feet tall, when medium size, or 2-4 feet tall, when small size",
    trait: "Half-Elf\n\u2022 Fey Gift: I know the Friends cantrip. Whenever I finish a Long Rest, I can replace it with a different cantrip from the Cleric, Druid, or Wizard spell list Int, Wis, or Cha is my spellcasting ability for spells I cast with this trait. (Choosen when I select this species).\n\u2022 Lethargic Resilience: When I fail a saving throw to avoid or end the Unconscious condition, I can succeed instead. Once I use this trait, I can't do so again until I finish 1d4 Long Rests.",
    replaces: ["half-elf"],
};
RaceList.shifter = {
    regExpSearch: /^(?=.*shifter).*$/i,
    name: "Shifter",
    sortname: "Shifter",
    source: ["E:FotA", 37],
    plural: "Shifters",
    size: [3, 4],
    speed: {
        walk: {
            spd: 30,
            enc: 20
        }
    },
    languageProfs: ["Common", 2],
    vision: [
        ["Darkvision", 60]
    ],
    skillstxt: "Choose one between Acrobatics, Athletics, Intimidation, or Survival",
    age: "",
    height: " are about 4-7 feet tall, when medium size, or 2-4 feet tall, when small size",
    action: [
        ["bonus action", "Shifter (Shift/Revert)"]
    ],
    limfeaname: "Shift",
    usages: "Proficiency bonus per ",
    usagescalc: "event.value = How('Proficiency Bonus');",
    recovery: "long rest",
    trait: "Shifter\n\u2022 Shifting: Use 'Racial Options' above to choose a lineage that grants me supernatural abilities. As a Bonus Action, you can shape-shift to assume a more bestial appearance. This transformation lasts for 1 minute or until you revert to your normal appearance as a Bonus Action. When you shift, you gain Temporary Hit Points equal to 2 times your Proficiency Bonus. You can shift a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
    variants: ["beasthide", "longtooth", "swiftstride", "wildhunt"],
    replaces: ["beasthide shifter", "multiverse beasthide shifter", "longtooth shifter", "multiverse longtooth shifter", "swiftstride shifter", "multiverse swiftstride shifter", "wildhunt shifter", "multiverse wildhunt shifter"]
};
RaceSubList["shifter-beasthide"] = {
    regExpSearch: /^(?=.*shifter)(?=.*beasthide).*$/i,
    name: "Beasthide Shifter",
    sortname: "Shifter, Beasthide",
    trait: "Beasthide Shifter\n\u2022 Shifting: As a Bonus Action, I can shape-shift to assume a more bestial appearance. This transformation lasts for 1 minute or until you revert to your normal appearance as a Bonus Action. When you shift, you gain Temporary Hit Points equal to 2 times your Proficiency Bonus. You can shift a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.\n\u2022 Beasthide: I gain 1d6 additional Temporary Hit Points. While shifted, I have a +1 bonus to my Armor Class.",
};
RaceSubList["shifter-longtooth"] = {
    regExpSearch: /^(?=.*shifter)(?=.*longtooth).*$/i,
    name: "Longtooth Shifter",
    sortname: "Shifter, Longtooth",
    action: [
        ["bonus action", "Longtooth Fangs (while shifted)"]
    ],
    weaponOptions: [{
        baseWeapon: "unarmed strike",
        regExpSearch: /^(?=.*fangs?)(?=.*long)(?=.*(tooth|teeth)).*$/i,
        name: "Longtooth Fangs",
        source: ["E:FotA", 37],
        damage: [1, 6, "piercing"],
        description: "Only while shifted; One attack as bonus action",
        selectNow: true,
    }],
    trait: "Longtooth Shifter\n\u2022 Shifting: As a Bonus Action, I can shape-shift to assume a more bestial appearance. This transformation lasts for 1 minute or until you revert to your normal appearance as a Bonus Action. When you shift, you gain Temporary Hit Points equal to 2 times your Proficiency Bonus. You can shift a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.\n\u2022 Longtooth: When I shift and as a Bonus Action on my other turns while shifted, I can use my elongated fangs to make an Unarmed Strike. If I hit with this Unarmed Strike and deal damage, I can deal Piercing damage equal to 1d6 plus my Strength modifier instead of the normal damage of an Unarmed Strike.",
};
RaceSubList["shifter-swiftstride"] = {
    regExpSearch: /^(?=.*shifter)(?=.*swiftstride).*$/i,
    name: "Swiftstride Shifter",
    sortname: "Shifter, Swiftstride",
    action: [
        ["reaction", "Move (While shifted)"]
    ],
    trait: "Swiftstride Shifter\n\u2022 Shifting: As a Bonus Action, I can shape-shift to assume a more bestial appearance. This transformation lasts for 1 minute or until you revert to your normal appearance as a Bonus Action. When you shift, you gain Temporary Hit Points equal to 2 times your Proficiency Bonus. You can shift a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.\n\u2022 Swiftstride: When I am shifted, my Speed increases by 10 feet. Additionally, I can move up to 10 feet as a Reaction when a creature ends its turn within 5 feet of me. This reactive movement doesn't provoke Opportunity Attack action.",
};
RaceSubList["shifter-wildhunt"] = {
    regExpSearch: /^(?=.*shifter)(?=.*wildhunt).*$/i,
    name: "Wildhunt Shifter",
    sortname: "Shifter, Wildhunt",
    trait: "Wildhunt Shifter\n\u2022 Shifting: As a Bonus Action, I can shape-shift to assume a more bestial appearance. This transformation lasts for 1 minute or until you revert to your normal appearance as a Bonus Action. When you shift, you gain Temporary Hit Points equal to 2 times your Proficiency Bonus. You can shift a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.\n\u2022 Wildhunt: While shifted, I have Advantage on Wisdom checks. Additionally, no creature within 30 feet of me can have Advantage on an attack roll against me unless I have the Incapacitated condition.",
};
RaceList.warforged = {
    regExpSearch: /^(?=.*warforged).*$/i,
    name: "Warforged",
    sortname: "Warforged",
    source: ["E:FotA", 38],
    plural: "Warforged",
    size: [3, 4],
    speed: {
        walk: {
            spd: 30,
            enc: 20
        }
    },
    languageProfs: ["Common", 2],
    dmgres: ["Poison"],
    savetxt: {
        adv_vs: ["avoiding or ending the Poisoned condition"]
    },
    skillstxt: ["Choose any 1 skill or tool proficiency"],
    age: "",
    extraAC: {
        name: "Integrated Protection",
        mod: 1,
        text: "I gain a +1 bonus to AC."
    },
    height: " are about 6-8 feet tall, when medium size, or 3-4 feet tall, when small size",
    trait: "Warforged\n\u2022 Creature Type : Construct\n\u2022 Sentry's Rest: I don't need to sleep, and magic can't put me to sleep. I can finish a Long Rest in 6 hours if I spend those hours in an inactive, motionless state. During this time, I appear inert but remain conscious.\n\u2022 Tireless: I don't gain Exhaustion levels from dehydration, malnutrition, or suffocation.",
    replaces: ["warforged"],
};
// Feats
// Dragonmark Feats
FeatsList["aberrant dragonmark"] = {
    name: "Aberrant Dragonmark",
    source: ["E:FotA", 39],
    type: "dragonmark",
    prerequisite: "Eberron Campaign Setting, No other Dragonmark",
    descriptionFull: "You have manifested an Aberrant Dragonmark; determine its appearance. You gain the following benefits:\n \u2022 Aberrant Fortitude. When you fail a Constitution saving throw, you can take a Reaction to roll 1d4 and add the number rolled to the save, potentially turning the failure into a success. Once you’ve used this benefit, you can’t use it again until you finish a Long Rest.\n \u2022 Aberrant Magic. You know one cantrip of your choice from the Sorcerer spell list. Also, choose a level 1 spell from that spell list. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Short or Long Rest. You can also cast this spell using any spell slots you have. Constitution is your spellcasting ability for this spell.\n \u2022 Aberrant Surge. When you cast the level 1 spell from this feat, you can expend one of your Hit Point Dice and roll it. If you roll an even number, you gain a number of Temporary Hit Points equal to the number rolled. If you roll an odd number, one creature within 30 feet of you (not including you) takes Force damage equal to the number rolled. If no other creatures are in range, you take the damage.",
    description: "I can add 1d4 to a failed Constitution saving throw once per Long Rest. I learn a Sorcerer cantrip, and a 1st-level Sorcerer spell that I can cast once per Short Rest. They use Con as spellcasting ability. I can expend and roll a HD when I cast the level 1 spell. If even, I gain it in Temp HP. If odd, a random target in 30 ft takes it in force damage.",
    usages: 1,
    action: [
        ["reaction", "Aberrant Fortitude"]
    ],
    spellcastingAbility: 3,
    spellcastingBonus: [{
        name: "Sorcerer cantrip",
        'class': 'sorcerer',
        level: [0, 0],
        times: 1,
        firstCol: 'atwill'
    }, {
        name: "Sorcerer 1st-level spell",
        'class': 'sorcerer',
        level: [1, 1],
        times: 1,
        firstCol: 'oncesr'
    }]
};
FeatsList["mark of detection"] = {
    name: "Mark of Detection",
    source: ["E:FotA", 39],
    type: "dragonmark",
    prerequisite: "Eberron Campaign Setting, No other Dragonmark",
    descriptionFull: "You have manifested a Dragonmark of Detection; determine its appearance. You gain the following benefits:\n \u2022 Deductive Intuition. When you make an Intelligence (Investigation) or Wisdom (Insight) check, you can roll 1d4 and add the number rolled to the ability check.\n \u2022 Magical Detection. You always have the Detect Magic \u0026 Detect Poison and Disease spells prepared. You can cast each spell once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast these spells using any spell slots you have. Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells (choose when you select this feat).\n When you reach character level 3, you also always have the See Invisibility spell prepared and can cast it the same way.\n \u2022 Spells of the Mark. If you have the Spellcasting or Pact Magic feature, the following spells are added to that feature's spell list: Detect Evil and Good, Identify, Detect Thoughts, Find Traps, Clairvoyance, Nondetection, Arcane Eye, Divination, \u0026 Legend Lore.",
    description: "I can add 1d4 to any Intelligence (Investigation) or Wisdom (Insight) checks. At character level 1, I always have the Detect Magic \u0026 Detect Poison and Disease spells prepared, and can cast each once without a spell slot per Long Rest. I can also cast these spells with any spell slots I have. Intelligence, Wisdom, or Charisma is my spellcasting ability for these spells (chosen when I select this feat). At character level 3, I also always have the See Invisibility spell prepared and can cast it the same way. Additionally, if I am a spellcasting class/subclass, I gain additional spells I can cast.",
    spellcastingBonus: [{
        name: "Magical Detection",
        spells: ["detect magic", "detect poison and disease", "see invisibility"],
        selection: ["detect magic", "detect poison and disease", "see invisibility"],
        firstCol: "oncelr",
        times: levels.map(function(n) {
            return n < 3 ? 2 : 3;
        }),
        spellcastingAbility: [4, 5, 6],
    }],
    calcChanges: {
        spellList: [
            function(spList, spName, spType) {
                // don't add if this is not a class or a list of spells is already given
                if (!ClassList[spName] || spList.spells || spList.psionic) return;
                // if this is an 'extra spell', also test if it uses the class' spell list or not
                if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
                spList.extraspells = spList.extraspells.concat(["detect evil and good", "identify", "detect thoughts", "find traps", "clairvoyance", "nondetection", "arcane eye", "divination", "legend lore"]);
            },
            "The Mark of Detection Feat adds extra spells to the spell list(s) of my spellcasting class(es): Detect Evil and Good, Detect Poison and Disease, Detect Thoughts, Find Traps, Clairvoyance, Nondetection, Arcane Eye, Divination, and Legend Lore."
        ]
    }
};
FeatsList["mark of finding"] = {
    name: "Mark of Finding",
    source: ["E:FotA", 39],
    type: "dragonmark",
    prerequisite: "Eberron Campaign Setting, No other Dragonmark",
    descriptionFull: "You have manifested a Dragonmark of Finding; determine its appearance. You gain the following benefits:\n \u2022 Hunter's Intuition. When you make a Wisdom (Perception or Survival) check, you can roll 1d4 and add the number rolled to the ability check.\n \u2022 Finder's Magic. You always have the Hunter's Mark spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast it using any spell slots you have. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this feat).\n When you reach character level 3, you also always have the Locate Object spell prepared and can cast it the same way.\n \u2022 Spells of the Mark. If you have the Spellcasting or Pact Magic feature, the following spells are added to that feature's spell list: Faerie Fire, Longstrider, Locate Animals or Plants, Mind Spike, Clairvoyance, Speak with Plants, Divination, Locate Creature, \u0026 Commune with Nature.",
    description: "I can add 1d4 to any Wisdom (Perception or Survival) checks. At character level 1, I always have the Hunter's Mark spell prepared, and can cast it once without a spell slot per Long Rest. I can also cast it with any spell slots I have. Intelligence, Wisdom, or Charisma is my spellcasting ability for this spell (chosen when I select this feat). At character level 3, I also always have the Locate Object spell prepared and can cast it the same way. Additionally, if I am a spellcasting class/subclass, I gain additional spells I can cast.",
    spellcastingBonus: [{
        name: "Finder's Magic",
        spells: ["hunter's mark", "locate object"],
        selection: ["hunter's mark", "locate object"],
        firstCol: "oncelr",
        times: levels.map(function(n) {
            return n < 3 ? 1 : 2;
        }),
        spellcastingAbility: [4, 5, 6],
    }],
    calcChanges: {
        spellList: [
            function(spList, spName, spType) {
                // don't add if this is not a class or a list of spells is already given
                if (!ClassList[spName] || spList.spells || spList.psionic) return;
                // if this is an 'extra spell', also test if it uses the class' spell list or not
                if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
                spList.extraspells = spList.extraspells.concat(["faerie fire", "longstrider", "locate animals or plants", "mind spike", "clairvoyance", "speak with plants", "divination", "locate creature", "commune with nature"]);
            },
            "The Mark of Finding Feat adds extra spells to the spell list(s) of my spellcasting class(es): Faerie Fire, Longstrider, Locate Animals or Plants, Mind Spike, Clairvoyance, Speak with Plants, Divination, Locate Creature, \u0026 Commune with Nature."
        ]
    }
};
FeatsList["mark of handling"] = {
    name: "Mark of Handling",
    source: ["E:FotA", 39],
    type: "dragonmark",
    prerequisite: "Eberron Campaign Setting, No other Dragonmark",
    descriptionFull: "You have manifested a Dragonmark of Handling; determine its appearance. You gain the following benefits:\n \u2022 Wild Intuition. When you make an Intelligence (Nature) or Wisdom (Animal Handling) check, you can roll 1d4 and add the number rolled to the ability check.\n \u2022 Primal Connection. You always have the Animal Friendship \u0026 Speak with Animals spells prepared. You can cast each once without a spell slot, and you regain the ability to cast them in that way when you finish a Long Rest. You can also cast these using any spell slots you have. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this feat).\n \u2022 Monstrous Connection. When you reach character level 3, you can target a Monstrosity when you cast Animal Friendship or Speak with Animals if the creature's Intelligence score is 3 or lower.\n \u2022 Spells of the Mark. If you have the Spellcasting or Pact Magic feature, the following spells are added to that feature's spell list: Command, Find Familiar, Beast Sense, Calm Emotions, Beacon of Hope, Conjure Animals, Aura of Life, Dominate Beast, \u0026 Awaken.",
    description: "I can add 1d4 to any Intelligence (Nature) or Wisdom (Animal Handling) checks. At character level 1, I always have the Animal Friendship \u0026 Speak with Animals spells prepared, and can cast each once without a spell slot per Long Rest. I can also cast these with any spell slots I have. Intelligence, Wisdom, or Charisma is my spellcasting ability for this spell (chosen when I select this feat). At character level 3, I can target a Monstrosity when I cast Animal Friendship or Speak with Animals if the creature's Intelligence score is 3 or lower. Additionally, if I am a spellcasting class/subclass, I gain additional spells I can cast.",
    spellcastingBonus: [{
        name: "Primal Connection",
        spells: ["animal friendship", "speak with animals"],
        selection: ["animal friendship", "speak with animals"],
        firstCol: "oncelr",
        times: 2,
        spellcastingAbility: [4, 5, 6],
    }],
    calcChanges: {
        spellList: [
            function(spList, spName, spType) {
                // don't add if this is not a class or a list of spells is already given
                if (!ClassList[spName] || spList.spells || spList.psionic) return;
                // if this is an 'extra spell', also test if it uses the class' spell list or not
                if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
                spList.extraspells = spList.extraspells.concat(["command", "find familiar", "beast sense", "calm emotions", "beacon of hope", "conjure animals", "aura of life", "dominate beast", "awaken"]);
            },
            "The Mark of Handling Feat adds extra spells to the spell list(s) of my spellcasting class(es): Command, Find Familiar, Beast Sense, Calm Emotions, Beacon of Hope, Conjure Animals, Aura of Life, Dominate Beast, \u0026 Awaken."
        ]
    },
    spellChanges: {
        "animal friendship": {
            description: "1+1/SL Beasts/Monstrosities Int<4 save or Charmed for the duration",
            changes: "At character level 3, I can target a Monstrosity when I cast Animal Friendship if the creature's Intelligence score is 3 or lower.",
        },
        "speak with animals": {
            description: "Speak verbally with Beasts/Monst (see B.) for duration; interaction limited by Int of creature",
            changes: "At character level 3, I can target a Monstrosity when I cast Speak with Animals if the creature's Intelligence score is 3 or lower.",
        },
    },
};
FeatsList["mark of healing"] = {
    name: "Mark of Healing",
    source: ["E:FotA", 40],
    type: "dragonmark",
    prerequisite: "Eberron Campaign Setting, No other Dragonmark",
    descriptionFull: "You have manifested a Dragonmark of Healing; determine its appearance. You gain the following benefits:\n \u2022 Medical Intuition. When you make an Intelligence (Herbalism Kit) or Wisdom (Medicine) check, you can roll 1d4 and add the number rolled to the ability check.\n \u2022 Healing Touch. You always have the Cure Wounds spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast it using any spell slots you have. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this feat).\n When you reach character level 3, you also always have the Lesser Restoration spell prepared and can cast it the same way.\n \u2022 Spells of the Mark. If you have the Spellcasting or Pact Magic feature, the following spells are added to that feature's spell list: False Life, Healing Word, Arcane Vigor, Prayer of Healing, Aura of Vitality, Mass Healing Word, Aura of Life, Aura of Purity, \u0026 Greater Restoration.",
    description: "I can add 1d4 to any Intelligence (Herbalism Kit) or Wisdom (Medicine) checks. At character level 1, I always have the Cure Wounds spell prepared, and can cast it once without a spell slot per Long Rest. I can also cast it with any spell slots I have. Intelligence, Wisdom, or Charisma is my spellcasting ability for this spell (chosen when I select this feat). At character level 3, I also always have the Lesser Restoration spell prepared and can cast it the same way. Additionally, if I am a spellcasting class/subclass, I gain additional spells I can cast.",
    spellcastingBonus: [{
        name: "Finder's Magic",
        spells: ["cure wounds", "lesser restoration"],
        selection: ["cure wounds", "lesser restoration"],
        firstCol: "oncelr",
        times: levels.map(function(n) {
            return n < 3 ? 1 : 2;
        }),
        spellcastingAbility: [4, 5, 6],
    }],
    calcChanges: {
        spellList: [
            function(spList, spName, spType) {
                // don't add if this is not a class or a list of spells is already given
                if (!ClassList[spName] || spList.spells || spList.psionic) return;
                // if this is an 'extra spell', also test if it uses the class' spell list or not
                if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
                spList.extraspells = spList.extraspells.concat(["false life", "healing word", "arcane vigor", "prayer of healing", "aura of vitality", "mass healing word", "aura of life", "aura of purity", "greater restoration"]);
            },
            "The Mark of Healing Feat adds extra spells to the spell list(s) of my spellcasting class(es): False Life, Healing Word, Arcane Vigor, Prayer of Healing, Aura of Vitality, Mass Healing Word, Aura of Life, Aura of Purity, \u0026 Greater Restoration."
        ]
    }
};
FeatsList["mark of hospitality"] = {
    name: "Mark of Hospitality",
    source: ["E:FotA", 40],
    type: "dragonmark",
    prerequisite: "Eberron Campaign Setting, No other Dragonmark",
    descriptionFull: "You have manifested a Dragonmark of Hospitality; determine its appearance. You gain the following benefits:\n \u2022 Ever Hospitable. When you make a Charisma (Persuasion) check or an ability check using Brewer's Supplies or Cook's Utensils, you can roll 1d4 and add the number rolled to the ability check.\n \u2022 Innkeeper's Magic. You always have the Purify Food and Drink \u0026 Unseen Servant spells prepared. You can cast each once without a spell slot, and you regain the ability to cast these in that way when you finish a Long Rest. You can also cast these using any spell slots you have. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this feat).\n When you reach character level 3, you also always have the Calm Emotions spell prepared and can cast it the same way.\n \u2022 Spells of the Mark. If you have the Spellcasting or Pact Magic feature, the following spells are added to that feature's spell list: Goodberry, Sleep, Aid, Enhance Ability, Create Food and Water, Leomund's Tiny Hut, Aura of Purity, Mordenkainen's Private Sanctum, \u0026 Hallow.",
    description: "I can add 1d4 to any Charisma (Persuasion) checks or any ability checks using Brewer's Supplies or Cook's Utensils. I always have the Purify Food and Drink \u0026 Unseen Servant spells prepared, and can cast each once without a spell slot per Long Rest. I can also cast these with any spell slots I have. Intelligence, Wisdom, or Charisma is my spellcasting ability for these spells (chosen when I select this feat). Additionally, if I am a spellcasting class/subclass, I gain additional spells I can cast.",
    spellcastingBonus: [{
        name: "Magical Detection",
        spells: ["purify food and drink", "unseen servant", "calm emotions"],
        selection: ["purify food and drink", "unseen servant", "calm emotions"],
        firstCol: "oncelr",
        times: levels.map(function(n) {
            return n < 3 ? 2 : 3;
        }),
        spellcastingAbility: [4, 5, 6],
    }],
    calcChanges: {
        spellList: [
            function(spList, spName, spType) {
                // don't add if this is not a class or a list of spells is already given
                if (!ClassList[spName] || spList.spells || spList.psionic) return;
                // if this is an 'extra spell', also test if it uses the class' spell list or not
                if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
                spList.extraspells = spList.extraspells.concat(["goodberry", "sleep", "aid", "enhance ability", "create food and water", "leomund's tiny hut", "aura of purity", "mordenkainen's private sanctum", "hallow"]);
            },
            "The Mark of Hospitality Feat adds extra spells to the spell list(s) of my spellcasting class(es): Goodberry, Sleep, Aid, Enhance Ability, Create Food and Water, Leomund's Tiny Hut, Aura of Purity, Mordenkainen's Private Sanctum, \u0026 Hallow."
        ]
    }
};
FeatsList["mark of making"] = {
    name: "Mark of Making",
    source: ["E:FotA", 40],
    type: "dragonmark",
    prerequisite: "Eberron Campaign Setting, No other Dragonmark",
    descriptionFull: "You have manifested a Dragonmark of Making; determine its appearance. You gain the following benefits:\n \u2022 Artisan's Intuition. When you make an Intelligence (Arcana) check or an ability check using Artisan's Tools, you can roll 1d4 and add the number rolled to the ability check.\n \u2022 Spellsmith. You know the Mending cantrip and you always have the Magic Weapon spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast it using any spell slots you have. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this feat).\n \u2022 Spells of the Mark. If you have the Spellcasting or Pact Magic feature, the following spells are added to that feature's spell list: Identify, Tenser's Floating Disk, Continual Flame, Spiritual Weapon, Conjure Barrage, Elemental Weapon, Fabricate, Stone Shape, \u0026 Creation.",
    description: "I can add 1d4 to any Intelligence (Arcana) checks or any ability checks using Artisan's Tools. I know the Mending cantrip and always have the Magic Weapon spell prepared, and can cast it once without a spell slot per Long Rest. I can also cast it with any spell slots I have. Intelligence, Wisdom, or Charisma is my spellcasting ability for this spell (chosen when I select this feat). Additionally, if I am a spellcasting class/subclass, I gain additional spells I can cast.",
    spellcastingBonus: [{
        name: "Spellsmith Cantrip",
        spells: ["mending"],
        selection: ["mending"],
        times: 1,
    }, {
        name: "Spellsmith Spell",
        spells: ["magic weapon"],
        selection: ["magic weapon"],
        firstCol: "oncelr",
        times: 1,
        spellcastingAbility: [4, 5, 6],
    }],
    calcChanges: {
        spellList: [
            function(spList, spName, spType) {
                // don't add if this is not a class or a list of spells is already given
                if (!ClassList[spName] || spList.spells || spList.psionic) return;
                // if this is an 'extra spell', also test if it uses the class' spell list or not
                if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
                spList.extraspells = spList.extraspells.concat(["identify", "tenser's floating disk", "continual flame", "spiritual weapon", "conjure barrage", "elemental weapon", "fabricate", "stone shape", "creation"]);
            },
            "The Mark of Making Feat adds extra spells to the spell list(s) of my spellcasting class(es): Identify, Tenser's Floating Disk, Continual Flame, Spiritual Weapon, Conjure Barrage, Elemental Weapon, Fabricate, Stone Shape, \u0026 Creation."
        ]
    }
};
FeatsList["mark of passage"] = {
    name: "Mark of Passage",
    source: ["E:FotA", 41],
    type: "dragonmark",
    prerequisite: "Eberron Campaign Setting, No other Dragonmark",
    descriptionFull: "You have manifested a Dragonmark of Passage; determine its appearance. You gain the following benefits:\n \u2022 Courier's Speed. Your Speed increases by 5 ft. \n \u2022 Intuitive Motion. When you make a Strength (Athletics) or Dexterity (Acrobatics) check, you can roll 1d4 and add the number rolled to the ability check.\n \u2022 Magical Passage. You always have the Misty Step spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast it using any spell slots you have. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this feat).\n \u2022 Spells of the Mark. If you have the Spellcasting or Pact Magic feature, the following spells are added to that feature's spell list: Expeditious Retreat, Jump, Pass without Trace, Find Steed, Blink, Phantom Steed, Dimension Door, Freedom of Movement, \u0026 Teleportation Circle.",
    description: "My Speed increases by 5 ft. I can add 1d4 to any Strength (Athletics) or Dexterity (Acrobatics) checks. At character level 1, I always have the Misty Step spell prepared, and can cast it once without a spell slot per Long Rest. I can also cast it with any spell slots I have. Intelligence, Wisdom, or Charisma is my spellcasting ability for this spell (chosen when I select this feat). At character level 3, I also always have the Locate Object spell prepared and can cast it the same way. Additionally, if I am a spellcasting class/subclass, I gain additional spells I can cast.",
    speed: {
        allModes: {
            bonus: "+5"
        }
    },
    spellcastingBonus: [{
        name: "Magical Passage",
        spells: ["misty step"],
        selection: ["misty step"],
        firstCol: "oncelr",
        times: 1,
        spellcastingAbility: [4, 5, 6],
    }],
    calcChanges: {
        spellList: [
            function(spList, spName, spType) {
                // don't add if this is not a class or a list of spells is already given
                if (!ClassList[spName] || spList.spells || spList.psionic) return;
                // if this is an 'extra spell', also test if it uses the class' spell list or not
                if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
                spList.extraspells = spList.extraspells.concat(["expeditious retreat", "jump", "pass without trace", "find steed", "blink", "phantom steed", "dimension door", "freedom of movement", "teleportation circle"]);
            },
            "The Mark of Passage Feat adds extra spells to the spell list(s) of my spellcasting class(es): Expeditious Retreat, Jump, Pass without Trace, Find Steed, Blink, Phantom Steed, Dimension Door, Freedom of Movement, \u0026 Teleportation Circle."
        ]
    }
};
FeatsList["mark of scribing"] = {
    name: "Mark of Scribing",
    source: ["E:FotA", 41],
    type: "dragonmark",
    prerequisite: "Eberron Campaign Setting, No other Dragonmark",
    descriptionFull: "You have manifested a Dragonmark of Scribing; determine its appearance. You gain the following benefits:\n \u2022 Gifted Scribe. When you make an Intelligence (History) check or an ability check using Calligrapher's Supplies, you can roll 1d4 and add the number rolled to the ability check.\n \u2022 Scribe's Insight. You know the Message cantrip and you always have the Comprehend Languages spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast it using any spell slots you have. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this feat).\n When you reach character level 3, you also always have the Magic Mouth spell prepared and can cast it the same way.\n \u2022 Spells of the Mark. If you have the Spellcasting or Pact Magic feature, the following spells are added to that feature's spell list: Command, Illusory Script, Animal Messenger, Silence, Sending, Tongues, Arcane Eye, Confusion, \u0026 Dream.",
    description: "I can add 1d4 to any an Intelligence (History) checks or any ability checks using Calligrapher's Supplies. At character level 1, I know the Message cantrip and always have the Comprehend Languages spell prepared, and can cast it once without a spell slot per Long Rest. I can also cast it with any spell slots I have. Intelligence, Wisdom, or Charisma is my spellcasting ability for this spell (chosen when I select this feat). At character level 3, I also always have the Magic Mouth spell prepared and can cast it the same way. Additionally, if I am a spellcasting class/subclass, I gain additional spells I can cast.",
    spellcastingBonus: [{
        name: "Scribe's Insight Cantrip",
        spells: ["message"],
        selection: ["message"],
        times: 1,
    }, {
        name: "Scribe's Insight Spells",
        spells: ["comprehend languages", "magic mouth"],
        selection: ["comprehend languages", "magic mouth"],
        firstCol: "oncelr",
        times: levels.map(function(n) {
            return n < 3 ? 1 : 2;
        }),
        spellcastingAbility: [4, 5, 6],
    }],
    calcChanges: {
        spellList: [
            function(spList, spName, spType) {
                // don't add if this is not a class or a list of spells is already given
                if (!ClassList[spName] || spList.spells || spList.psionic) return;
                // if this is an 'extra spell', also test if it uses the class' spell list or not
                if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
                spList.extraspells = spList.extraspells.concat(["command", "illusory script", "animal messenger", "silence", "sending", "tongues", "arcane eye", "confusion", "dream"]);
            },
            "The Mark of Scribing Feat adds extra spells to the spell list(s) of my spellcasting class(es): Command, Illusory Script, Animal Messenger, Silence, Sending, Tongues, Arcane Eye, Confusion, \u0026 Dream."
        ]
    }
};
FeatsList["mark of sentinel"] = {
    name: "Mark of Sentinel",
    source: ["E:FotA", 41],
    type: "dragonmark",
    prerequisite: "Eberron Campaign Setting, No other Dragonmark",
    descriptionFull: "You have manifested a Dragonmark of Sentinel; determine its appearance. You gain the following benefits:\n \u2022 Sentinel's Intuition. When you make a Wisdom (Insight or Perception) check, you can roll 1d4 and add the number rolled to the ability check.\n \u2022 Guardian's Shield. You always have the Shield spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast it using any spell slots you have. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this feat).\n \u2022 Vigilant Guardian. When a creature you can see within 5 feet of you is hit by an attack roll, you can take a Reaction to swap places with that creature, and you are hit by the attack instead. Once you use this feature, you can't do so again until you finish a Long Rest.\n \u2022 Spells of the Mark. If you have the Spellcasting or Pact Magic feature, the following spells are added to that feature's spell list: Compelled Duel, Shield of Faith, Warding Bond, Zone of Truth, Counterspell, Protection from Energy, Death Ward, Guardian of Faith, \u0026 Bigby's Hand.",
    description: "I can add 1d4 to any Wisdom (Insight or Perception) checks. At character level 1, I always have the Shield spell prepared, and can cast it once without a spell slot per Long Rest. I can also cast it with any spell slots I have. Intelligence, Wisdom, or Charisma is my spellcasting ability for this spell (chosen when I select this feat). At character level 3, I also always have the Locate Object spell prepared and can cast it the same way. Additionally, if I am a spellcasting class/subclass, I gain additional spells I can cast.",
    spellcastingBonus: [{
        name: "Guardian's Shield",
        spells: ["shield"],
        selection: ["shield"],
        firstCol: "oncelr",
        times: 1,
        spellcastingAbility: [4, 5, 6],
    }],
    calcChanges: {
        spellList: [
            function(spList, spName, spType) {
                // don't add if this is not a class or a list of spells is already given
                if (!ClassList[spName] || spList.spells || spList.psionic) return;
                // if this is an 'extra spell', also test if it uses the class' spell list or not
                if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
                spList.extraspells = spList.extraspells.concat(["compelled duel", "shield of faith", "warding bond", "zone of truth", "counterspell", "protection from energy", "death ward", "guardian of faith", "bigby's hand"]);
            },
            "The Mark of Sentinel Feat adds extra spells to the spell list(s) of my spellcasting class(es): Compelled Duel, Shield of Faith, Warding Bond, Zone of Truth, Counterspell, Protection from Energy, Death Ward, Guardian of Faith, \u0026 Bigby's Hand."
        ]
    }
};
FeatsList["mark of shadow"] = {
    name: "Mark of Shadow",
    source: ["E:FotA", 42],
    type: "dragonmark",
    prerequisite: "Eberron Campaign Setting, No other Dragonmark",
    descriptionFull: "You have manifested a Dragonmark of Shadow; determine its appearance. You gain the following benefits:\n \u2022 Cunning Intuition. When you make a Dexterity (Stealth) or Charisma (Performance) check, you can roll 1d4 and add the number rolled to the ability check.\n \u2022 Shape Shadows. You know the Minor Illusion cantrip and you always have the Invisibility spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast it using any spell slots you have. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this feat).\n \u2022 Spells of the Mark. If you have the Spellcasting or Pact Magic feature, the following spells are added to that feature's spell list: Disguise Self, Silent Image, Darkness, Pass without Trace, Clairvoyance, Major Image, Greater Invisibility, Hallucinatory Terrain, \u0026 Mislead.",
    description: "I can add 1d4 to any Dexterity (Stealth) or Charisma (Performance) checks. At character level 1, I know the Minor Illusion cantrip, and I always have the Invisibility spell prepared, and can cast it once without a spell slot per Long Rest. I can also cast it with any spell slots I have. Intelligence, Wisdom, or Charisma is my spellcasting ability for this spell (chosen when I select this feat). At character level 3, I also always have the Locate Object spell prepared and can cast it the same way. Additionally, if I am a spellcasting class/subclass, I gain additional spells I can cast.",
    spellcastingBonus: [{
        name: "Shape Shadows Cantrip",
        spells: ["minor illusion"],
        selection: ["minor illusion"],
        times: 1,
    }, {
        name: "Shape Shadows Spell",
        spells: ["invisibility"],
        selection: ["invisibility"],
        firstCol: "oncelr",
        times: 1,
        spellcastingAbility: [4, 5, 6],
    }],
    calcChanges: {
        spellList: [
            function(spList, spName, spType) {
                // don't add if this is not a class or a list of spells is already given
                if (!ClassList[spName] || spList.spells || spList.psionic) return;
                // if this is an 'extra spell', also test if it uses the class' spell list or not
                if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
                spList.extraspells = spList.extraspells.concat(["disguise self", "silent image", "darkness", "pass without trace", "clairvoyance", "major image", "greater invisibility", "hallucinatory terrain", "mislead"]);
            },
            "The Mark of Shadow Feat adds extra spells to the spell list(s) of my spellcasting class(es): Disguise Self, Silent Image, Darkness, Pass without Trace, Clairvoyance, Major Image, Greater Invisibility, Hallucinatory Terrain, \u0026 Mislead."
        ]
    }
};
FeatsList["mark of storm"] = {
    name: "Mark of Storm",
    source: ["E:FotA", 42],
    type: "dragonmark",
    prerequisite: "Eberron Campaign Setting, No other Dragonmark",
    descriptionFull: "You have manifested a Dragonmark of Storm; determine its appearance. You gain the following benefits:\n \u2022 Windwright's Intuition. When you make a Dexterity (Acrobatics) check or an ability check using Navigator's Tools, you can roll 1d4 and add the number rolled to the ability check.\n \u2022 Storm's Boon. You have Resistance to Lightning damage.\n \u2022 Storm Magic. You know the Thunderclap cantrip and you always have the Gust of Wind spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast it using any spell slots you have. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this feat).\n \u2022 Spells of the Mark. If you have the Spellcasting or Pact Magic feature, the following spells are added to that feature's spell list: Feather Fall, Fog Cloud, Levitate, Shatter, Sleet Storm, Wind Wall, Conjure Minor Elemental, Control Water, \u0026 Conjure Elemental.",
    description: "I can add 1d4 to any Dexterity (Acrobatics) check or any ability checks using Navigator's Tools. I am Resistant to Lightning dmg. At character level 1, I know the Thunderclap cantrip and always have the Gust of Wind spell prepared, and can cast it once without a spell slot per Long Rest. I can also cast it with any spell slots I have. Intelligence, Wisdom, or Charisma is my spellcasting ability for this spell (chosen when I select this feat). Additionally, if I am a spellcasting class/subclass, I gain additional spells I can cast.",
    dmgres: ["Lightning"],
    spellcastingBonus: [{
        name: "Storm Magic Cantrip",
        spells: ["thunderclap"],
        selection: ["thunderclap"],
        times: 1,
    }, {
        name: "Storm Magic Spell",
        spells: ["gust of wind"],
        selection: ["gust of wind"],
        firstCol: "oncelr",
        times: 1,
        spellcastingAbility: [4, 5, 6],
    }],
    calcChanges: {
        spellList: [
            function(spList, spName, spType) {
                // don't add if this is not a class or a list of spells is already given
                if (!ClassList[spName] || spList.spells || spList.psionic) return;
                // if this is an 'extra spell', also test if it uses the class' spell list or not
                if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
                spList.extraspells = spList.extraspells.concat(["feather fall", "fog cloud", "levitate", "shatter", "sleet storm", "wind wall", "conjure minor elemental", "control water", "conjure elemental"]);
            },
            "The Mark of Storm Feat adds extra spells to the spell list(s) of my spellcasting class(es): Feather Fall, Fog Cloud, Levitate, Shatter, Sleet Storm, Wind Wall, Conjure Minor Elemental, Control Water, \u0026 Conjure Elemental."
        ]
    }
};
FeatsList["mark of warding"] = {
    name: "Mark of Warding",
    source: ["E:FotA", 42],
    type: "dragonmark",
    prerequisite: "Eberron Campaign Setting, No other Dragonmark",
    descriptionFull: "You have manifested a Dragonmark of Warding; determine its appearance. You gain the following benefits:\n \u2022 Warder's Intuition. When you make an Intelligence (Investigation) check or an ability check using Thieves' Tools, you can roll 1d4 and add the number rolled to the ability check.\n \u2022 Wards and Seals. You always have the Alarm and Mage Armor spells prepared. You can cast each once without a spell slot, and you regain the ability to cast these in that way when you finish a Long Rest. You can also cast these using any spell slots you have. Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells (choose when you select this feat).\n When you reach character level 3, you also always have the Arcane Lock spell prepared and can cast it the same way.\n \u2022 Spells of the Mark. If you have the Spellcasting or Pact Magic feature, the following spells are added to that feature's spell list: Armor of Agathys, Sanctuary, Knock, Nystul's Magic Aura, Glyph of Warding, Magic Circle, Leomund's Secret Chest, Mordenkainen's Faithful Hound, \u0026 Antilife Shell.",
    description: "I can add 1d4 to any Intelligence (Investigation) checks or any ability checks using Thieves' Tools. At character level 1, I always have the Alarm and Mage Armor spells prepared, and can cast each once without a spell slot per Long Rest. I can also cast these with any spell slots I have. Intelligence, Wisdom, or Charisma is my spellcasting ability for these spells (chosen when I select this feat). At character level 3, I also always have the Arcane Lock spell prepared and can cast it the same way. Additionally, if I am a spellcasting class/subclass, I gain additional spells I can cast.",
    spellcastingBonus: [{
        name: "Wards and Seals",
        spells: ["alarm", "mage armor", "arcane lock"],
        selection: ["alarm", "mage armor", "arcane lock"],
        firstCol: "oncelr",
        times: levels.map(function(n) {
            return n < 3 ? 2 : 3;
        }),
        spellcastingAbility: [4, 5, 6],
    }],
    calcChanges: {
        spellList: [
            function(spList, spName, spType) {
                // don't add if this is not a class or a list of spells is already given
                if (!ClassList[spName] || spList.spells || spList.psionic) return;
                // if this is an 'extra spell', also test if it uses the class' spell list or not
                if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
                spList.extraspells = spList.extraspells.concat(["armor of agathys", "sanctuary", "knock", "nystul's magic aura", "glyph of warding", "magic circle", "leomund's secret chest", "mordenkainen's faithful hound", "antilife shell"]);
            },
            "The Mark of Warding Feat adds extra spells to the spell list(s) of my spellcasting class(es): Armor of Agathys, Sanctuary, Knock, Nystul's Magic Aura, Glyph of Warding, Magic Circle, Leomund's Secret Chest, Mordenkainen's Faithful Hound, \u0026 Antilife Shell."
        ]
    }
};
// General Feats
FeatsList["greater aberrant mark"] = {
    name: "Greater Aberrant Mark",
    source: ["E:FotA", 43],
    type: "general",
    prerequisite: "Character Level 4+, Aberrant Dragonmark Feat",
    prereqeval: function(v) {
        return v.characterLevel >= 4 && (/aberrant dragonmark/i).test(CurrentFeat.known);
    },
    descriptionFull: "You gain the following benefits:\n \u2022 Ability Score Increase. Increase your Constitution score by 1, to a maximum of 20.\n \u2022 Improved Intuition. When you use the Aberrant Fortitude benefit of your Aberrant Dragonmark feat, you can roll 1d6 instead of 1d4. You also now regain your use of Aberrant Fortitude when you finish a Short or Long Rest\n \u2022 Mark of Inspiration. When you cast a cantrip, you can expend one of your Hit Point Dice and roll it. You gain a number of Temporary Hit Points equal to the number rolled plus your Constitution modifier, and one creature of your choice within 30 feet of you (not including you) takes Force damage equal to the number rolled. Those dice are then expended.\n You can use this benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
    description: "My Con score increases by 1, to a max of 20. When I use the Aberrant Fortitude benefit of my Aberrant Dragonmark feat, I can roll 1d6 instead of 1d4. Prof per Long Rest when I cast a cantrip, I can use one of my HP Dice, gaining Temp HP equal to the number rolled. Additionally, 1 creature of my choice in 30 ft takes the rolled number in Force damage.",
    scores: [0, 0, 1, 0, 0, 0],
    extraLimitedFeatures: [{
        name: "Mark of Inspiration",
        usages: "Proficiency bonus per ",
        usagescalc: "event.value = How('Proficiency Bonus');",
        recovery: "long rest",
    }],
};
FeatsList["greater mark of detection"] = {
    name: "Greater Mark of Detection",
    source: ["E:FotA", 43],
    type: "general",
    prerequisite: "Character Level 4+, Mark of Detection Feat",
    prereqeval: function(v) {
        return v.characterLevel >= 4 && (/mark of detection/i).test(CurrentFeat.known);
    },
    descriptionFull: "You gain the following benefits:\n \u2022 Ability Score Increase. Increase ability score of your choice by 1, to a maximum of 20.\n \u2022 Improved Intuition. When you use the Deductive Intuition benefit of your Mark of Detection feat, you can roll 1d6 instead of 1d4.\n \u2022 Shared Detection. When you use the Magical Detection benefit of your Mark of Detection feat to cast See Invisibility without a spell slot, you can choose one creature you can see within 30 feet of yourself. That creature also gains the benefits of the spell for its duration.",
    description: "An ability score of my choice is increased by 1, to a max of 20. When I use the Deductive Intuition benefit of my Mark of Detection feat, I can roll 1d6 instead of 1d4. When I cast See Invisibility with my Magical Detection feature I can choose one crea I can see w/i 30 feet of me. That crea also gains the benefit of the spell for the duration.",
    choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
    "strength": {
        description: "When I use the Deductive Intuition benefit of my Mark of Detection feat, I can roll 1d6 instead of 1d4. When I cast See Invisibility with my Magical Detection feature I can choose one crea I can see w/i 30 feet of me. That crea also gains the benefit of the spell for the duration. [+1 Strength]",
        scores: [1, 0, 0, 0, 0, 0]
    },
    "dexterity": {
        description: "When I use the Deductive Intuition benefit of my Mark of Detection feat, I can roll 1d6 instead of 1d4. When I cast See Invisibility with my Magical Detection feature I can choose one crea I can see w/i 30 feet of me. That crea also gains the benefit of the spell for the duration. [+1 Dexterity]",
        scores: [0, 1, 0, 0, 0, 0]
    },
    "constitution": {
        description: "When I use the Deductive Intuition benefit of my Mark of Detection feat, I can roll 1d6 instead of 1d4. When I cast See Invisibility with my Magical Detection feature I can choose one crea I can see w/i 30 feet of me. That crea also gains the benefit of the spell for the duration. [+1 Constitution]",
        scores: [0, 0, 1, 0, 0, 0]
    },
    "intelligence": {
        description: "When I use the Deductive Intuition benefit of my Mark of Detection feat, I can roll 1d6 instead of 1d4. When I cast See Invisibility with my Magical Detection feature I can choose one crea I can see w/i 30 feet of me. That crea also gains the benefit of the spell for the duration. [+1 Intelligence]",
        scores: [0, 0, 0, 1, 0, 0]
    },
    "wisdom": {
        description: "When I use the Deductive Intuition benefit of my Mark of Detection feat, I can roll 1d6 instead of 1d4. When I cast See Invisibility with my Magical Detection feature I can choose one crea I can see w/i 30 feet of me. That crea also gains the benefit of the spell for the duration. [+1 Wisdom]",
        scores: [0, 0, 0, 0, 1, 0]
    },
    "charisma": {
        description: "When I use the Deductive Intuition benefit of my Mark of Detection feat, I can roll 1d6 instead of 1d4. When I cast See Invisibility with my Magical Detection feature I can choose one crea I can see w/i 30 feet of me. That crea also gains the benefit of the spell for the duration. [+1 Charisma]",
        scores: [0, 0, 0, 0, 0, 1]
    }
};
FeatsList["greater mark of finding"] = {
    name: "Greater Mark of Finding",
    source: ["E:FotA", 43],
    type: "general",
    prerequisite: "Character Level 4+, Mark of Finding Feat",
    prereqeval: function(v) {
        return v.characterLevel >= 4 && (/mark of finding/i).test(CurrentFeat.known);
    },
    descriptionFull: "You gain the following benefits:\n \u2022 Ability Score Increase. Increase ability score of your choice by 1, to a maximum of 20.\n \u2022 Improved Intuition. When you use the Hunter's Intuition benefit of your Mark of Finding feat, you can roll 1d6 instead of 1d4.\n \u2022 Improved Finding. When you cast Hunter's Mark, the range of the spell is doubled and you can modify it so that the target can't benefit from the Invisible condition for the duration of the spell.",
    description: "An ability score of my choice is increased by 1, to a max of 20. When I use the Hunter's Intuition benefit of my Mark of Finding feat, I can roll 1d6 instead of 1d4. I can modify Hunter's Mark doubling its range and for the duration, the target can't benefit from the Invisible condition.",
    choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
    "strength": {
        description: "When I use the Hunter's Intuition benefit of my Mark of Finding feat, I can roll 1d6 instead of 1d4. I can modify Hunter's Mark doubling its range and for the duration, the target can't benefit from the Invisible condition. [+1 Strength]",
        scores: [1, 0, 0, 0, 0, 0]
    },
    "dexterity": {
        description: "When I use the Hunter's Intuition benefit of my Mark of Finding feat, I can roll 1d6 instead of 1d4. I can modify Hunter's Mark doubling its range and for the duration, the target can't benefit from the Invisible condition. [+1 Dexterity]",
        scores: [0, 1, 0, 0, 0, 0]
    },
    "constitution": {
        description: "When I use the Hunter's Intuition benefit of my Mark of Finding feat, I can roll 1d6 instead of 1d4. I can modify Hunter's Mark doubling its range and for the duration, the target can't benefit from the Invisible condition. [+1 Constitution]",
        scores: [0, 0, 1, 0, 0, 0]
    },
    "intelligence": {
        description: "When I use the Hunter's Intuition benefit of my Mark of Finding feat, I can roll 1d6 instead of 1d4. I can modify Hunter's Mark doubling its range and for the duration, the target can't benefit from the Invisible condition. [+1 Intelligence]",
        scores: [0, 0, 0, 1, 0, 0]
    },
    "wisdom": {
        description: "When I use the Hunter's Intuition benefit of my Mark of Finding feat, I can roll 1d6 instead of 1d4. I can modify Hunter's Mark doubling its range and for the duration, the target can't benefit from the Invisible condition. [+1 Wisdom]",
        scores: [0, 0, 0, 0, 1, 0]
    },
    "charisma": {
        description: "When I use the Hunter's Intuition benefit of my Mark of Finding feat, I can roll 1d6 instead of 1d4. I can modify Hunter's Mark doubling its range and for the duration, the target can't benefit from the Invisible condition. [+1 Charisma]",
        scores: [0, 0, 0, 0, 0, 1]
    }
};
FeatsList["greater mark of handling"] = {
    name: "Greater Mark of Handling",
    source: ["E:FotA", 43],
    type: "general",
    prerequisite: "Character Level 4+, Mark of Handling Feat",
    prereqeval: function(v) {
        return v.characterLevel >= 4 && (/mark of handling/i).test(CurrentFeat.known);
    },
    descriptionFull: "You gain the following benefits:\n \u2022 Ability Score Increase. Increase ability score of your choice by 1, to a maximum of 20.\n \u2022 Improved Intuition. When you use the Wild Intuition benefit of your Mark of Handling feat, you can roll 1d6 instead of 1d4.\n \u2022 Improved Handling. While mounted, immediately after you hit a target within 5 feet of your mount with a melee attack roll, your mount can take a Reaction to move up to its Speed or take the Attack action to make one attack only (your choice).\n \u2022 Subdue Animal. As a Magic action, you exert command over one Beast or Monstrosity you can see within 30 feet of yourself. The target must succeed on a Wisdom saving throw (DC 8 plus your Wisdom modifier and Proficiency Bonus) or have the Frightened condition until the start of your next turn. You can use this benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
    description: "An ability score of my choice is increased by 1, to a max of 20. When I use the Wild Intuition benefit of my Mark of Handling feat, I can roll 1d6 instead of 1d4. While mounted, immediately after I hit a target within 5 feet of my mount with a melee attack roll, my mount can take a Reaction to move up to its Speed or take the Attack action to make one attack only (my choice). As a Magic action, I exert command over one Beast or Monstrosity I can see w/i 30 ft of me. Target makes a Wis save (DC=8+Wis+Prof) or be Frightened till the start of my next turn. I can use this benefit a number of times equal to my Prof, regaining all uses after a Long Rest.",
    extraLimitedFeatures: [{
        name: "Subdue Animal",
        usages: "Proficiency bonus per ",
        usagescalc: "event.value = How('Proficiency Bonus');",
        recovery: "long rest",
    }],
    choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
    "strength": {
        description: "When I use the Wild Intuition benefit of my Mark of Handling feat, I can roll 1d6 instead of 1d4. While mounted, immediately after I hit a target within 5 feet of my mount with a melee attack roll, my mount can take a Reaction to move up to its Speed or take the Attack action to make one attack only (my choice). As a Magic action, I exert command over one Beast or Monstrosity I can see w/i 30 ft of me. Target makes a Wis save (DC=8+Wis+Prof) or be Frightened till the start of my next turn. I can use this benefit a number of times equal to my Prof, regaining all uses after a Long Rest. [+1 Strength]",
        scores: [1, 0, 0, 0, 0, 0]
    },
    "dexterity": {
        description: "When I use the Wild Intuition benefit of my Mark of Handling feat, I can roll 1d6 instead of 1d4. While mounted, immediately after I hit a target within 5 feet of my mount with a melee attack roll, my mount can take a Reaction to move up to its Speed or take the Attack action to make one attack only (my choice). As a Magic action, I exert command over one Beast or Monstrosity I can see w/i 30 ft of me. Target makes a Wis save (DC=8+Wis+Prof) or be Frightened till the start of my next turn. I can use this benefit a number of times equal to my Prof, regaining all uses after a Long Rest. [+1 Dexterity]",
        scores: [0, 1, 0, 0, 0, 0]
    },
    "constitution": {
        description: "When I use the Wild Intuition benefit of my Mark of Handling feat, I can roll 1d6 instead of 1d4. While mounted, immediately after I hit a target within 5 feet of my mount with a melee attack roll, my mount can take a Reaction to move up to its Speed or take the Attack action to make one attack only (my choice). As a Magic action, I exert command over one Beast or Monstrosity I can see w/i 30 ft of me. Target makes a Wis save (DC=8+Wis+Prof) or be Frightened till the start of my next turn. I can use this benefit a number of times equal to my Prof, regaining all uses after a Long Rest. [+1 Constitution]",
        scores: [0, 0, 1, 0, 0, 0]
    },
    "intelligence": {
        description: "When I use the Wild Intuition benefit of my Mark of Handling feat, I can roll 1d6 instead of 1d4. While mounted, immediately after I hit a target within 5 feet of my mount with a melee attack roll, my mount can take a Reaction to move up to its Speed or take the Attack action to make one attack only (my choice). As a Magic action, I exert command over one Beast or Monstrosity I can see w/i 30 ft of me. Target makes a Wis save (DC=8+Wis+Prof) or be Frightened till the start of my next turn. I can use this benefit a number of times equal to my Prof, regaining all uses after a Long Rest. [+1 Intelligence]",
        scores: [0, 0, 0, 1, 0, 0]
    },
    "wisdom": {
        description: "When I use the Wild Intuition benefit of my Mark of Handling feat, I can roll 1d6 instead of 1d4. While mounted, immediately after I hit a target within 5 feet of my mount with a melee attack roll, my mount can take a Reaction to move up to its Speed or take the Attack action to make one attack only (my choice). As a Magic action, I exert command over one Beast or Monstrosity I can see w/i 30 ft of me. Target makes a Wis save (DC=8+Wis+Prof) or be Frightened till the start of my next turn. I can use this benefit a number of times equal to my Prof, regaining all uses after a Long Rest. [+1 Wisdom]",
        scores: [0, 0, 0, 0, 1, 0]
    },
    "charisma": {
        description: "When I use the Wild Intuition benefit of my Mark of Handling feat, I can roll 1d6 instead of 1d4. While mounted, immediately after I hit a target within 5 feet of my mount with a melee attack roll, my mount can take a Reaction to move up to its Speed or take the Attack action to make one attack only (my choice). As a Magic action, I exert command over one Beast or Monstrosity I can see w/i 30 ft of me. Target makes a Wis save (DC=8+Wis+Prof) or be Frightened till the start of my next turn. I can use this benefit a number of times equal to my Prof, regaining all uses after a Long Rest. [+1 Charisma]",
        scores: [0, 0, 0, 0, 0, 1]
    }
};
FeatsList["greater mark of healing"] = {
    name: "Greater Mark of Healing",
    source: ["E:FotA", 44],
    type: "general",
    prerequisite: "Character Level 4+, Mark of Healing Feat",
    prereqeval: function(v) {
        return v.characterLevel >= 4 && (/mark of healing/i).test(CurrentFeat.known);
    },
    descriptionFull: "You gain the following benefits:\n \u2022 Ability Score Increase. Increase ability score of your choice by 1, to a maximum of 20.\n \u2022 Improved Intuition. When you use the Medical Intuition benefit of your Mark of Healing feat, you can roll 1d6 instead of 1d4.\n \u2022 Improved Healing. You can now use the Healing Touch benefit of your Mark of Healing feat to cast Cure Wounds without using a spell slot a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.\nAdditionally, when you cast Cure Wounds and roll dice to determine the number of Hit Points restored, you can treat any 1 or 2 on a roll as a 3.",
    description: "An ability score of my choice is increased by 1, to a max of 20. When I use the Medical Intuition benefit of my Mark of Healing feat, I can roll 1d6 instead of 1d4. I can cast Cure Wounds a number of times equal to my Prof without expending a spell slot, regaining all expended uses when I finish a Long Rest. When I cast Cure Wounds \u0026 roll dice to determine the number of HP restored, I can treat any 1 or 2 on a roll as a 3.",
    extraLimitedFeatures: [{
        name: "Improved Healing",
        usages: "Proficiency bonus per ",
        usagescalc: "event.value = How('Proficiency Bonus');",
        recovery: "long rest",
    }],
    choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
    "strength": {
        description: "When I use the Medical Intuition benefit of my Mark of Healing feat, I can roll 1d6 instead of 1d4. I can cast Cure Wounds a number of times equal to my Prof without expending a spell slot, regaining all expended uses when I finish a Long Rest. When I cast Cure Wounds \u0026 roll dice to determine the number of HP restored, I can treat any 1 or 2 on a roll as a 3. [+1 Strength]",
        scores: [1, 0, 0, 0, 0, 0]
    },
    "dexterity": {
        description: "When I use the Medical Intuition benefit of my Mark of Healing feat, I can roll 1d6 instead of 1d4. I can cast Cure Wounds a number of times equal to my Prof without expending a spell slot, regaining all expended uses when I finish a Long Rest. When I cast Cure Wounds \u0026 roll dice to determine the number of HP restored, I can treat any 1 or 2 on a roll as a 3. [+1 Dexterity]",
        scores: [0, 1, 0, 0, 0, 0]
    },
    "constitution": {
        description: "When I use the Medical Intuition benefit of my Mark of Healing feat, I can roll 1d6 instead of 1d4. I can cast Cure Wounds a number of times equal to my Prof without expending a spell slot, regaining all expended uses when I finish a Long Rest. When I cast Cure Wounds \u0026 roll dice to determine the number of HP restored, I can treat any 1 or 2 on a roll as a 3. [+1 Constitution]",
        scores: [0, 0, 1, 0, 0, 0]
    },
    "intelligence": {
        description: "When I use the Medical Intuition benefit of my Mark of Healing feat, I can roll 1d6 instead of 1d4. I can cast Cure Wounds a number of times equal to my Prof without expending a spell slot, regaining all expended uses when I finish a Long Rest. When I cast Cure Wounds \u0026 roll dice to determine the number of HP restored, I can treat any 1 or 2 on a roll as a 3. [+1 Intelligence]",
        scores: [0, 0, 0, 1, 0, 0]
    },
    "wisdom": {
        description: "When I use the Medical Intuition benefit of my Mark of Healing feat, I can roll 1d6 instead of 1d4. I can cast Cure Wounds a number of times equal to my Prof without expending a spell slot, regaining all expended uses when I finish a Long Rest. When I cast Cure Wounds \u0026 roll dice to determine the number of HP restored, I can treat any 1 or 2 on a roll as a 3. [+1 Wisdom]",
        scores: [0, 0, 0, 0, 1, 0]
    },
    "charisma": {
        description: "When I use the Medical Intuition benefit of my Mark of Healing feat, I can roll 1d6 instead of 1d4. I can cast Cure Wounds a number of times equal to my Prof without expending a spell slot, regaining all expended uses when I finish a Long Rest. When I cast Cure Wounds \u0026 roll dice to determine the number of HP restored, I can treat any 1 or 2 on a roll as a 3. [+1 Charisma]",
        scores: [0, 0, 0, 0, 0, 1]
    }
};
FeatsList["greater mark of hospitality"] = {
    name: "Greater Mark of Hospitality",
    source: ["E:FotA", 44],
    type: "general",
    prerequisite: "Character Level 4+, Mark of Hospitality Feat",
    prereqeval: function(v) {
        return v.characterLevel >= 4 && (/mark of hospitality/i).test(CurrentFeat.known);
    },
    descriptionFull: "You gain the following benefits:\n \u2022 Ability Score Increase. Increase ability score of your choice by 1, to a maximum of 20.\n \u2022 Improved Intuition. When you use the Ever Hospitable benefit of your Mark of Hospitality feat, you can roll 1d6 instead of 1d4.\n \u2022 Inspired Hospitality. When you cast Purify Food and Drink, you can modify the spell so that instead of its normal effect, each creature of your choice within 30 feet of you is refreshed. Each affected creature’s Exhaustion level is reduced by 1, and the creature gains Temporary Hit Points equal to your Proficiency Bonus plus your Intelligence, Wisdom, or Charisma modifier (choose when you select this feat). Once you modify the spell with this benefit, you can’t do so again until you finish a Long Rest.",
    description: "An ability score of my choice is increased by 1, to a max of 20. When I use the Ever Hospitable benefit of my Mark of Hospitality feat, I can roll 1d6 instead of 1d4. Once per Long Rest, I can modify Purify Food and Drink such that each creature of my choice within 30 ft loses 1 Exhaustion level \u0026 gains Temp HP equal to my Prof Bonus + my Int, Wis, or Cha mod (choose when I select this Feat).",
    extraLimitedFeatures: [{
        name: "Inspired Hospitality",
        usages: 1,
        recovery: "long rest",
    }],
    choices: ["ASI Str, Temp HP Int", "ASI Str, Temp HP Wis", "ASI Str, Temp HP Cha", "ASI Dex, Temp HP Int", "ASI Dex, Temp HP Wis", "ASI Dex, Temp HP Cha", "ASI Con, Temp HP Int", "ASI Con, Temp HP Wis", "ASI Con, Temp HP Cha", "ASI Int, Temp HP Int", "ASI Int, Temp HP Wis", "ASI Int, Temp HP Cha", "ASI Wis, Temp HP Int", "ASI Wis, Temp HP Wis", "ASI Wis, Temp HP Cha", "ASI Cha, Temp HP Int", "ASI Cha, Temp HP Wis", "ASI Cha, Temp HP Cha"],
    "asi str, temp hp int": {
        description: "When I use the Ever Hospitable benefit of my Mark of Hospitality feat, I can roll 1d6 instead of 1d4. Once per Long Rest, I can modify Purify Food and Drink such that each creature of my choice within 30 ft loses 1 Exhaustion level \u0026 gains Temp HP equal to my Prof Bonus + my Int mod. [+1 Strength]",
        scores: [1, 0, 0, 0, 0, 0]
    },
    "asi str, temp hp wis": {
        description: "When I use the Ever Hospitable benefit of my Mark of Hospitality feat, I can roll 1d6 instead of 1d4. Once per Long Rest, I can modify Purify Food and Drink such that each creature of my choice within 30 ft loses 1 Exhaustion level \u0026 gains Temp HP equal to my Prof Bonus + my Wis mod. [+1 Strength]",
        scores: [1, 0, 0, 0, 0, 0]
    },
    "asi str, temp hp cha": {
        description: "When I use the Ever Hospitable benefit of my Mark of Hospitality feat, I can roll 1d6 instead of 1d4. Once per Long Rest, I can modify Purify Food and Drink such that each creature of my choice within 30 ft loses 1 Exhaustion level \u0026 gains Temp HP equal to my Prof Bonus + my Cha mod. [+1 Strength]",
        scores: [1, 0, 0, 0, 0, 0]
    },
    "asi dex, temp hp int": {
        description: "When I use the Ever Hospitable benefit of my Mark of Hospitality feat, I can roll 1d6 instead of 1d4. Once per Long Rest, I can modify Purify Food and Drink such that each creature of my choice within 30 ft loses 1 Exhaustion level \u0026 gains Temp HP equal to my Prof Bonus + my Int mod. [+1 Dexterity]",
        scores: [0, 1, 0, 0, 0, 0]
    },
    "asi dex, temp hp wis": {
        description: "When I use the Ever Hospitable benefit of my Mark of Hospitality feat, I can roll 1d6 instead of 1d4. Once per Long Rest, I can modify Purify Food and Drink such that each creature of my choice within 30 ft loses 1 Exhaustion level \u0026 gains Temp HP equal to my Prof Bonus + my Wis mod. [+1 Dexterity]",
        scores: [0, 1, 0, 0, 0, 0]
    },
    "asi dex, temp hp cha": {
        description: "When I use the Ever Hospitable benefit of my Mark of Hospitality feat, I can roll 1d6 instead of 1d4. Once per Long Rest, I can modify Purify Food and Drink such that each creature of my choice within 30 ft loses 1 Exhaustion level \u0026 gains Temp HP equal to my Prof Bonus + my Cha mod. [+1 Dexterity]",
        scores: [0, 1, 0, 0, 0, 0]
    },
    "asi con, temp hp int": {
        description: "When I use the Ever Hospitable benefit of my Mark of Hospitality feat, I can roll 1d6 instead of 1d4. Once per Long Rest, I can modify Purify Food and Drink such that each creature of my choice within 30 ft loses 1 Exhaustion level \u0026 gains Temp HP equal to my Prof Bonus + my Int mod. [+1 Constitution]",
        scores: [0, 0, 1, 0, 0, 0]
    },
    "asi con, temp hp wis": {
        description: "When I use the Ever Hospitable benefit of my Mark of Hospitality feat, I can roll 1d6 instead of 1d4. Once per Long Rest, I can modify Purify Food and Drink such that each creature of my choice within 30 ft loses 1 Exhaustion level \u0026 gains Temp HP equal to my Prof Bonus + my Wis mod. [+1 Constitution]",
        scores: [0, 0, 1, 0, 0, 0]
    },
    "asi con, temp hp cha": {
        description: "When I use the Ever Hospitable benefit of my Mark of Hospitality feat, I can roll 1d6 instead of 1d4. Once per Long Rest, I can modify Purify Food and Drink such that each creature of my choice within 30 ft loses 1 Exhaustion level \u0026 gains Temp HP equal to my Prof Bonus + my Cha mod. [+1 Constitution]",
        scores: [0, 0, 1, 0, 0, 0]
    },
    "asi int, temp hp int": {
        description: "When I use the Ever Hospitable benefit of my Mark of Hospitality feat, I can roll 1d6 instead of 1d4. Once per Long Rest, I can modify Purify Food and Drink such that each creature of my choice within 30 ft loses 1 Exhaustion level \u0026 gains Temp HP equal to my Prof Bonus + my Int mod. [+1 Intelligence]",
        scores: [0, 0, 0, 1, 0, 0]
    },
    "asi int, temp hp wis": {
        description: "When I use the Ever Hospitable benefit of my Mark of Hospitality feat, I can roll 1d6 instead of 1d4. Once per Long Rest, I can modify Purify Food and Drink such that each creature of my choice within 30 ft loses 1 Exhaustion level \u0026 gains Temp HP equal to my Prof Bonus + my Wis mod. [+1 Intelligence]",
        scores: [0, 0, 0, 1, 0, 0]
    },
    "asi int, temp hp cha": {
        description: "When I use the Ever Hospitable benefit of my Mark of Hospitality feat, I can roll 1d6 instead of 1d4. Once per Long Rest, I can modify Purify Food and Drink such that each creature of my choice within 30 ft loses 1 Exhaustion level \u0026 gains Temp HP equal to my Prof Bonus + my Cha mod. [+1 Intelligence]",
        scores: [0, 0, 0, 1, 0, 0]
    },
    "asi wis, temp hp int": {
        description: "When I use the Ever Hospitable benefit of my Mark of Hospitality feat, I can roll 1d6 instead of 1d4. Once per Long Rest, I can modify Purify Food and Drink such that each creature of my choice within 30 ft loses 1 Exhaustion level \u0026 gains Temp HP equal to my Prof Bonus + my Int mod. [+1 Wisdom]",
        scores: [0, 0, 0, 0, 1, 0]
    },
    "asi wis, temp hp wis": {
        description: "When I use the Ever Hospitable benefit of my Mark of Hospitality feat, I can roll 1d6 instead of 1d4. Once per Long Rest, I can modify Purify Food and Drink such that each creature of my choice within 30 ft loses 1 Exhaustion level \u0026 gains Temp HP equal to my Prof Bonus + my Wis mod. [+1 Wisdom]",
        scores: [0, 0, 0, 0, 1, 0]
    },
    "asi wis, temp hp cha": {
        description: "When I use the Ever Hospitable benefit of my Mark of Hospitality feat, I can roll 1d6 instead of 1d4. Once per Long Rest, I can modify Purify Food and Drink such that each creature of my choice within 30 ft loses 1 Exhaustion level \u0026 gains Temp HP equal to my Prof Bonus + my Cha mod. [+1 Wisdom]",
        scores: [0, 0, 0, 0, 1, 0]
    },
    "asi cha, temp hp int": {
        description: "When I use the Ever Hospitable benefit of my Mark of Hospitality feat, I can roll 1d6 instead of 1d4. Once per Long Rest, I can modify Purify Food and Drink such that each creature of my choice within 30 ft loses 1 Exhaustion level \u0026 gains Temp HP equal to my Prof Bonus + my Int mod. [+1 Charisma]",
        scores: [0, 0, 0, 0, 0, 1]
    },
    "asi cha, temp hp wis": {
        description: "When I use the Ever Hospitable benefit of my Mark of Hospitality feat, I can roll 1d6 instead of 1d4. Once per Long Rest, I can modify Purify Food and Drink such that each creature of my choice within 30 ft loses 1 Exhaustion level \u0026 gains Temp HP equal to my Prof Bonus + my Wis mod. [+1 Charisma]",
        scores: [0, 0, 0, 0, 0, 1]
    },
    "asi cha, temp hp cha": {
        description: "When I use the Ever Hospitable benefit of my Mark of Hospitality feat, I can roll 1d6 instead of 1d4. Once per Long Rest, I can modify Purify Food and Drink such that each creature of my choice within 30 ft loses 1 Exhaustion level \u0026 gains Temp HP equal to my Prof Bonus + my Cha mod. [+1 Charisma]",
        scores: [0, 0, 0, 0, 0, 1]
    }
};
FeatsList["greater mark of making"] = {
    name: "Greater Mark of Making",
    source: ["E:FotA", 44],
    type: "general",
    prerequisite: "Character Level 4+, Mark of Making Feat",
    prereqeval: function(v) {
        return v.characterLevel >= 4 && (/mark of making/i).test(CurrentFeat.known);
    },
    descriptionFull: "You gain the following benefits:\n \u2022 Ability Score Increase. Increase ability score of your choice by 1, to a maximum of 20.\n \u2022 Improved Intuition. When you use the Artisan's Intuition benefit of your Mark of Making feat, you can roll 1d6 instead of 1d4.\n \u2022 Improved Making. When you use the Spellsmith benefit of your Mark of Making feat to cast Magic Weapon without a spell slot, you cast the spell as its level 3 version.",
    description: "An ability score of my choice is increased by 1, to a max of 20. When I use the Artisan's Intuition benefit of my Mark of Making feat, I can roll 1d6 instead of 1d4. When I use the Spellsmith benefit of my Mark of Making feat to cast Magic Weapon without a spell slot, I cast the spell as its level 3 version.",
    choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
    "strength": {
        description: "When I use the Artisan's Intuition benefit of my Mark of Making feat, I can roll 1d6 instead of 1d4. When I use the Spellsmith benefit of my Mark of Making feat to cast Magic Weapon without a spell slot, I cast the spell as its level 3 version. [+1 Strength]",
        scores: [1, 0, 0, 0, 0, 0]
    },
    "dexterity": {
        description: "When I use the Artisan's Intuition benefit of my Mark of Making feat, I can roll 1d6 instead of 1d4. When I use the Spellsmith benefit of my Mark of Making feat to cast Magic Weapon without a spell slot, I cast the spell as its level 3 version. [+1 Dexterity]",
        scores: [0, 1, 0, 0, 0, 0]
    },
    "constitution": {
        description: "When I use the Artisan's Intuition benefit of my Mark of Making feat, I can roll 1d6 instead of 1d4. When I use the Spellsmith benefit of my Mark of Making feat to cast Magic Weapon without a spell slot, I cast the spell as its level 3 version. [+1 Constitution]",
        scores: [0, 0, 1, 0, 0, 0]
    },
    "intelligence": {
        description: "When I use the Artisan's Intuition benefit of my Mark of Making feat, I can roll 1d6 instead of 1d4. When I use the Spellsmith benefit of my Mark of Making feat to cast Magic Weapon without a spell slot, I cast the spell as its level 3 version. [+1 Intelligence]",
        scores: [0, 0, 0, 1, 0, 0]
    },
    "wisdom": {
        description: "When I use the Artisan's Intuition benefit of my Mark of Making feat, I can roll 1d6 instead of 1d4. When I use the Spellsmith benefit of my Mark of Making feat to cast Magic Weapon without a spell slot, I cast the spell as its level 3 version. [+1 Wisdom]",
        scores: [0, 0, 0, 0, 1, 0]
    },
    "charisma": {
        description: "When I use the Artisan's Intuition benefit of my Mark of Making feat, I can roll 1d6 instead of 1d4. When I use the Spellsmith benefit of my Mark of Making feat to cast Magic Weapon without a spell slot, I cast the spell as its level 3 version. [+1 Charisma]",
        scores: [0, 0, 0, 0, 0, 1]
    }
};
FeatsList["greater mark of passage"] = {
    name: "Greater Mark of Passage",
    source: ["E:FotA", 44],
    type: "general",
    prerequisite: "Character Level 4+, Mark of Passage Feat",
    prereqeval: function(v) {
        return v.characterLevel >= 4 && (/mark of passage/i).test(CurrentFeat.known);
    },
    descriptionFull: "You gain the following benefits:\n \u2022 Ability Score Increase. Increase ability score of your choice by 1, to a maximum of 20.\n \u2022 Improved Intuition. When you use the Intuitive Motion benefit of your Mark of Passage feat, you can roll 1d6 instead of 1d4.\n \u2022 Inspired Passage. When you use the Magical Passage benefit of your Mark of Passage feat to cast Misty Step without a spell slot, you can also choose up to two willing creatures you can see within 30 feet of yourself before you teleport. Each target can then take a Reaction to also teleport up to 30 feet to an unoccupied space it can see.",
    description: "An ability score of my choice is increased by 1, to a max of 20. When I use the Intuitive Motion benefit of my Mark of Passage feat, I can roll 1d6 instead of 1d4. When I cast Misty Step using my Magical Passage feature, I can choose up to two willing creatures I can see w/i 30 ft of me, those creatures can use their Reaction to also teleport up to 30 ft to an unoccupied space it can see.",
    choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
    "strength": {
        description: "When I use the Intuitive Motion benefit of my Mark of Passage feat, I can roll 1d6 instead of 1d4. When I cast Misty Step using my Magical Passage feature, I can choose up to two willing creatures I can see w/i 30 ft of me, those creatures can use their Reaction to also teleport up to 30 ft to an unoccupied space it can see. [+1 Strength]",
        scores: [1, 0, 0, 0, 0, 0]
    },
    "dexterity": {
        description: "When I use the Intuitive Motion benefit of my Mark of Passage feat, I can roll 1d6 instead of 1d4. When I cast Misty Step using my Magical Passage feature, I can choose up to two willing creatures I can see w/i 30 ft of me, those creatures can use their Reaction to also teleport up to 30 ft to an unoccupied space it can see. [+1 Dexterity]",
        scores: [0, 1, 0, 0, 0, 0]
    },
    "constitution": {
        description: "When I use the Intuitive Motion benefit of my Mark of Passage feat, I can roll 1d6 instead of 1d4. When I cast Misty Step using my Magical Passage feature, I can choose up to two willing creatures I can see w/i 30 ft of me, those creatures can use their Reaction to also teleport up to 30 ft to an unoccupied space it can see. [+1 Constitution]",
        scores: [0, 0, 1, 0, 0, 0]
    },
    "intelligence": {
        description: "When I use the Intuitive Motion benefit of my Mark of Passage feat, I can roll 1d6 instead of 1d4. When I cast Misty Step using my Magical Passage feature, I can choose up to two willing creatures I can see w/i 30 ft of me, those creatures can use their Reaction to also teleport up to 30 ft to an unoccupied space it can see. [+1 Intelligence]",
        scores: [0, 0, 0, 1, 0, 0]
    },
    "wisdom": {
        description: "When I use the Intuitive Motion benefit of my Mark of Passage feat, I can roll 1d6 instead of 1d4. When I cast Misty Step using my Magical Passage feature, I can choose up to two willing creatures I can see w/i 30 ft of me, those creatures can use their Reaction to also teleport up to 30 ft to an unoccupied space it can see. [+1 Wisdom]",
        scores: [0, 0, 0, 0, 1, 0]
    },
    "charisma": {
        description: "When I use the Intuitive Motion benefit of my Mark of Passage feat, I can roll 1d6 instead of 1d4. When I cast Misty Step using my Magical Passage feature, I can choose up to two willing creatures I can see w/i 30 ft of me, those creatures can use their Reaction to also teleport up to 30 ft to an unoccupied space it can see. [+1 Charisma]",
        scores: [0, 0, 0, 0, 0, 1]
    }
};
FeatsList["greater mark of scribing"] = {
    name: "Greater Mark of Scribing",
    source: ["E:FotA", 44],
    type: "general",
    prerequisite: "Character Level 4+, Mark of Scribing Feat",
    prereqeval: function(v) {
        return v.characterLevel >= 4 && (/mark of scribing/i).test(CurrentFeat.known);
    },
    descriptionFull: "You gain the following benefits:\n \u2022 Ability Score Increase. Increase ability score of your choice by 1, to a maximum of 20.\n \u2022 Improved Intuition. When you use the Gifted Scribe benefit of your Mark of Scribing feat, you can roll 1d6 instead of 1d4.\n \u2022 Inspired Scribing. When you cast Comprehend Languages, you can modify the spell to encompass up to three willing creatures you can see within 30 feet of yourself. Each chosen creature also gains the benefits of the spell for the duration. In addition, for the duration of the spell, you and the chosen creatures can communicate telepathically with each other while within 1 mile of each other. Once you modify the spell with this benefit, you can’t do so again until you finish a Long Rest.",
    description: "An ability score of my choice is increased by 1, to a max of 20. When I use the Gifted Scribe benefit of my Mark of Scribing feat, I can roll 1d6 instead of 1d4. Once per Long Rest, when I cast Comprehend Languages, I can modify the spell to encompass up to 3 willing creatures I can see w/i 30 ft of me. Each creature gains the benefits of the spell for the duration. in addition, for the duration, the creatures and I can communicate telepatically while w/i 1 mile of each other.",
    extraLimitedFeatures: [{
        name: "Inspired Scribing",
        usages: 1,
        recovery: "long rest",
    }],
    choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
    "strength": {
        description: "When I use the Gifted Scribe benefit of my Mark of Scribing feat, I can roll 1d6 instead of 1d4. Once per Long Rest, when I cast Comprehend Languages, I can modify the spell to encompass up to 3 willing creatures I can see w/i 30 ft of me. Each creature gains the benefits of the spell for the duration. in addition, for the duration, the creatures and I can communicate telepatically while w/i 1 mile of each other. [+1 Strength]",
        scores: [1, 0, 0, 0, 0, 0]
    },
    "dexterity": {
        description: "When I use the Gifted Scribe benefit of my Mark of Scribing feat, I can roll 1d6 instead of 1d4. Once per Long Rest, when I cast Comprehend Languages, I can modify the spell to encompass up to 3 willing creatures I can see w/i 30 ft of me. Each creature gains the benefits of the spell for the duration. in addition, for the duration, the creatures and I can communicate telepatically while w/i 1 mile of each other. [+1 Dexterity]",
        scores: [0, 1, 0, 0, 0, 0]
    },
    "constitution": {
        description: "When I use the Gifted Scribe benefit of my Mark of Scribing feat, I can roll 1d6 instead of 1d4. Once per Long Rest, when I cast Comprehend Languages, I can modify the spell to encompass up to 3 willing creatures I can see w/i 30 ft of me. Each creature gains the benefits of the spell for the duration. in addition, for the duration, the creatures and I can communicate telepatically while w/i 1 mile of each other. [+1 Constitution]",
        scores: [0, 0, 1, 0, 0, 0]
    },
    "intelligence": {
        description: "When I use the Gifted Scribe benefit of my Mark of Scribing feat, I can roll 1d6 instead of 1d4. Once per Long Rest, when I cast Comprehend Languages, I can modify the spell to encompass up to 3 willing creatures I can see w/i 30 ft of me. Each creature gains the benefits of the spell for the duration. in addition, for the duration, the creatures and I can communicate telepatically while w/i 1 mile of each other. [+1 Intelligence]",
        scores: [0, 0, 0, 1, 0, 0]
    },
    "wisdom": {
        description: "When I use the Gifted Scribe benefit of my Mark of Scribing feat, I can roll 1d6 instead of 1d4. Once per Long Rest, when I cast Comprehend Languages, I can modify the spell to encompass up to 3 willing creatures I can see w/i 30 ft of me. Each creature gains the benefits of the spell for the duration. in addition, for the duration, the creatures and I can communicate telepatically while w/i 1 mile of each other. [+1 Wisdom]",
        scores: [0, 0, 0, 0, 1, 0]
    },
    "charisma": {
        description: "When I use the Gifted Scribe benefit of my Mark of Scribing feat, I can roll 1d6 instead of 1d4. Once per Long Rest, when I cast Comprehend Languages, I can modify the spell to encompass up to 3 willing creatures I can see w/i 30 ft of me. Each creature gains the benefits of the spell for the duration. in addition, for the duration, the creatures and I can communicate telepatically while w/i 1 mile of each other. [+1 Charisma]",
        scores: [0, 0, 0, 0, 0, 1]
    }
};
FeatsList["greater mark of sentinel"] = {
    name: "Greater Mark of Sentinel",
    source: ["E:FotA", 44],
    type: "general",
    prerequisite: "Character Level 4+, Mark of Sentinel Feat",
    prereqeval: function(v) {
        return v.characterLevel >= 4 && (/mark of sentinel/i).test(CurrentFeat.known);
    },
    descriptionFull: "You gain the following benefits:\n \u2022 Ability Score Increase. Increase ability score of your choice by 1, to a maximum of 20.\n \u2022 Improved Intuition. When you use the Sentinel's Intuition benefit of your Mark of Sentinel feat, you can roll 1d6 instead of 1d4.\n \u2022 Improved Sentinel. When you use the Vigilant Guardian benefit of your Mark of Sentinel feat, you can also make one attack with a weapon or an Unarmed Strike as part of that same Reaction.",
    description: "An ability score of my choice is increased by 1, to a max of 20. When I use the Sentinel's Intuition benefit of my Mark of Sentinel feat, I can roll 1d6 instead of 1d4. When I use the Vigilant Guardian benefit of my Mark of Sentinel feat, I can also make one attack with a weapon or an Unarmed Strike as part of that same Reaction.",
    choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
    "strength": {
        description: "When I use the Sentinel's Intuition benefit of my Mark of Sentinel feat, I can roll 1d6 instead of 1d4. When I use the Vigilant Guardian benefit of my Mark of Sentinel feat, I can also make one attack with a weapon or an Unarmed Strike as part of that same Reaction. [+1 Strength]",
        scores: [1, 0, 0, 0, 0, 0]
    },
    "dexterity": {
        description: "When I use the Sentinel's Intuition benefit of my Mark of Sentinel feat, I can roll 1d6 instead of 1d4. When I use the Vigilant Guardian benefit of my Mark of Sentinel feat, I can also make one attack with a weapon or an Unarmed Strike as part of that same Reaction. [+1 Dexterity]",
        scores: [0, 1, 0, 0, 0, 0]
    },
    "constitution": {
        description: "When I use the Sentinel's Intuition benefit of my Mark of Sentinel feat, I can roll 1d6 instead of 1d4. When I use the Vigilant Guardian benefit of my Mark of Sentinel feat, I can also make one attack with a weapon or an Unarmed Strike as part of that same Reaction. [+1 Constitution]",
        scores: [0, 0, 1, 0, 0, 0]
    },
    "intelligence": {
        description: "When I use the Sentinel's Intuition benefit of my Mark of Sentinel feat, I can roll 1d6 instead of 1d4. When I use the Vigilant Guardian benefit of my Mark of Sentinel feat, I can also make one attack with a weapon or an Unarmed Strike as part of that same Reaction. [+1 Intelligence]",
        scores: [0, 0, 0, 1, 0, 0]
    },
    "wisdom": {
        description: "When I use the Sentinel's Intuition benefit of my Mark of Sentinel feat, I can roll 1d6 instead of 1d4. When I use the Vigilant Guardian benefit of my Mark of Sentinel feat, I can also make one attack with a weapon or an Unarmed Strike as part of that same Reaction. [+1 Wisdom]",
        scores: [0, 0, 0, 0, 1, 0]
    },
    "charisma": {
        description: "When I use the Sentinel's Intuition benefit of my Mark of Sentinel feat, I can roll 1d6 instead of 1d4. When I use the Vigilant Guardian benefit of my Mark of Sentinel feat, I can also make one attack with a weapon or an Unarmed Strike as part of that same Reaction. [+1 Charisma]",
        scores: [0, 0, 0, 0, 0, 1]
    }
};
FeatsList["greater mark of shadow"] = {
    name: "Greater Mark of Shadow",
    source: ["E:FotA", 45],
    type: "general",
    prerequisite: "Character Level 4+, Mark of Shadow Feat",
    prereqeval: function(v) {
        return v.characterLevel >= 4 && (/mark of shadow/i).test(CurrentFeat.known);
    },
    descriptionFull: "You gain the following benefits:\n \u2022 Ability Score Increase. Increase ability score of your choice by 1, to a maximum of 20.\n \u2022 Improved Intuition. When you use the Cunning Intuition benefit of your Mark of Shadow feat, you can roll 1d6 instead of 1d4.\n \u2022 Improved Shadow. When you use the Shape Shadows benefit of your Mark of Shadow feat to cast Invisibility without a spell slot, you cast the spell as its level 3 version.",
    description: "An ability score of my choice is increased by 1, to a max of 20. When I use the Cunning Intuition benefit of my Mark of Shadow feat, I can roll 1d6 instead of 1d4. When I use the Shape Shadows benefit of my Mark of Shadow feat to cast Invisibility without a spell slot, I cast the spell as its level 3 version.",
    choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
    "strength": {
        description: "When I use the Cunning Intuition benefit of my Mark of Shadow feat, I can roll 1d6 instead of 1d4. When I use the Shape Shadows benefit of my Mark of Shadow feat to cast Invisibility without a spell slot, I cast the spell as its level 3 version. [+1 Strength]",
        scores: [1, 0, 0, 0, 0, 0]
    },
    "dexterity": {
        description: "When I use the Cunning Intuition benefit of my Mark of Shadow feat, I can roll 1d6 instead of 1d4. When I use the Shape Shadows benefit of my Mark of Shadow feat to cast Invisibility without a spell slot, I cast the spell as its level 3 version. [+1 Dexterity]",
        scores: [0, 1, 0, 0, 0, 0]
    },
    "constitution": {
        description: "When I use the Cunning Intuition benefit of my Mark of Shadow feat, I can roll 1d6 instead of 1d4. When I use the Shape Shadows benefit of my Mark of Shadow feat to cast Invisibility without a spell slot, I cast the spell as its level 3 version. [+1 Constitution]",
        scores: [0, 0, 1, 0, 0, 0]
    },
    "intelligence": {
        description: "When I use the Cunning Intuition benefit of my Mark of Shadow feat, I can roll 1d6 instead of 1d4. When I use the Shape Shadows benefit of my Mark of Shadow feat to cast Invisibility without a spell slot, I cast the spell as its level 3 version. [+1 Intelligence]",
        scores: [0, 0, 0, 1, 0, 0]
    },
    "wisdom": {
        description: "When I use the Cunning Intuition benefit of my Mark of Shadow feat, I can roll 1d6 instead of 1d4. When I use the Shape Shadows benefit of my Mark of Shadow feat to cast Invisibility without a spell slot, I cast the spell as its level 3 version. [+1 Wisdom]",
        scores: [0, 0, 0, 0, 1, 0]
    },
    "charisma": {
        description: "When I use the Cunning Intuition benefit of my Mark of Shadow feat, I can roll 1d6 instead of 1d4. When I use the Shape Shadows benefit of my Mark of Shadow feat to cast Invisibility without a spell slot, I cast the spell as its level 3 version. [+1 Charisma]",
        scores: [0, 0, 0, 0, 0, 1]
    }
};
FeatsList["greater mark of storm"] = {
    name: "Greater Mark of Storm",
    source: ["E:FotA", 45],
    type: "general",
    prerequisite: "Character Level 4+, Mark of Storm Feat",
    prereqeval: function(v) {
        return v.characterLevel >= 4 && (/mark of storm/i).test(CurrentFeat.known);
    },
    descriptionFull: "You gain the following benefits:\n \u2022 Ability Score Increase. Increase ability score of your choice by 1, to a maximum of 20.\n \u2022 Improved Intuition. When you use the Windwright's Intuition benefit of your Mark of Storm feat, you can roll 1d6 instead of 1d4.\n \u2022 Improved Storm. When you use the Storm Magic benefit of your Mark of Storm feat to cast Gust of Wind without a spell slot, you also gain a Fly Speed of 60 feet for the duration of the spell.",
    description: "An ability score of my choice is increased by 1, to a max of 20. When I use the Windwright's Intuition benefit of my Mark of Storm feat, I can roll 1d6 instead of 1d4. When I use the Storm Magic benefit of my Mark of Storm feat to cast Gust of Wind without a spell slot, I also gain a Fly Speed of 60 feet for the duration of the spell.",
    choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
    "strength": {
        description: "When I use the Windwright's Intuition benefit of my Mark of Storm feat, I can roll 1d6 instead of 1d4. When I use the Storm Magic benefit of my Mark of Storm feat to cast Gust of Wind without a spell slot, I also gain a Fly Speed of 60 feet for the duration of the spell. [+1 Strength]",
        scores: [1, 0, 0, 0, 0, 0]
    },
    "dexterity": {
        description: "When I use the Windwright's Intuition benefit of my Mark of Storm feat, I can roll 1d6 instead of 1d4. When I use the Storm Magic benefit of my Mark of Storm feat to cast Gust of Wind without a spell slot, I also gain a Fly Speed of 60 feet for the duration of the spell. [+1 Dexterity]",
        scores: [0, 1, 0, 0, 0, 0]
    },
    "constitution": {
        description: "When I use the Windwright's Intuition benefit of my Mark of Storm feat, I can roll 1d6 instead of 1d4. When I use the Storm Magic benefit of my Mark of Storm feat to cast Gust of Wind without a spell slot, I also gain a Fly Speed of 60 feet for the duration of the spell. [+1 Constitution]",
        scores: [0, 0, 1, 0, 0, 0]
    },
    "intelligence": {
        description: "When I use the Windwright's Intuition benefit of my Mark of Storm feat, I can roll 1d6 instead of 1d4. When I use the Storm Magic benefit of my Mark of Storm feat to cast Gust of Wind without a spell slot, I also gain a Fly Speed of 60 feet for the duration of the spell. [+1 Intelligence]",
        scores: [0, 0, 0, 1, 0, 0]
    },
    "wisdom": {
        description: "When I use the Windwright's Intuition benefit of my Mark of Storm feat, I can roll 1d6 instead of 1d4. When I use the Storm Magic benefit of my Mark of Storm feat to cast Gust of Wind without a spell slot, I also gain a Fly Speed of 60 feet for the duration of the spell. [+1 Wisdom]",
        scores: [0, 0, 0, 0, 1, 0]
    },
    "charisma": {
        description: "When I use the Windwright's Intuition benefit of my Mark of Storm feat, I can roll 1d6 instead of 1d4. When I use the Storm Magic benefit of my Mark of Storm feat to cast Gust of Wind without a spell slot, I also gain a Fly Speed of 60 feet for the duration of the spell. [+1 Charisma]",
        scores: [0, 0, 0, 0, 0, 1]
    }
};
FeatsList["greater mark of warding"] = {
    name: "Greater Mark of Warding",
    source: ["E:FotA", 45],
    type: "general",
    prerequisite: "Character Level 4+, Mark of Warding Feat",
    prereqeval: function(v) {
        return v.characterLevel >= 4 && (/mark of warding/i).test(CurrentFeat.known);
    },
    descriptionFull: "You gain the following benefits:\n \u2022 Ability Score Increase. Increase ability score of your choice by 1, to a maximum of 20.\n \u2022 Improved Intuition. When you use the Warder's Intuition benefit of your Mark of Warding feat, you can roll 1d6 instead of 1d4.\n \u2022 Improved Warding. When a creature makes an attack roll against you or a creature you can see within 30 feet of yourself, you can take a Reaction to impose Disadvantage on that roll. You can use this benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
    description: "An ability score of my choice is increased by 1, to a max of 20. When I use the Warder's Intuition benefit of my Mark of Warding feat, I can roll 1d6 instead of 1d4. Prof per Long Rest, When a creature makes an atk roll against me or a creature I can see w/i 30 ft of me I can take my Rea to impose Disadvantage on the roll.",
    extraLimitedFeatures: [{
        name: "Improved Warding",
        action: [
            ["reaction", "Improved Warding"]
        ],
        usages: "Proficiency bonus per ",
        usagescalc: "event.value = How('Proficiency Bonus');",
        recovery: "long rest",
    }],
    choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
    "strength": {
        description: "When I use the Warder's Intuition benefit of my Mark of Warding feat, I can roll 1d6 instead of 1d4. Prof per Long Rest, When a creature makes an atk roll against me or a creature I can see w/i 30 ft of me I can take my Rea to impose Disadvantage on the roll. [+1 Strength]",
        scores: [1, 0, 0, 0, 0, 0]
    },
    "dexterity": {
        description: "When I use the Warder's Intuition benefit of my Mark of Warding feat, I can roll 1d6 instead of 1d4. Prof per Long Rest, When a creature makes an atk roll against me or a creature I can see w/i 30 ft of me I can take my Rea to impose Disadvantage on the roll. [+1 Dexterity]",
        scores: [0, 1, 0, 0, 0, 0]
    },
    "constitution": {
        description: "When I use the Warder's Intuition benefit of my Mark of Warding feat, I can roll 1d6 instead of 1d4. Prof per Long Rest, When a creature makes an atk roll against me or a creature I can see w/i 30 ft of me I can take my Rea to impose Disadvantage on the roll. [+1 Constitution]",
        scores: [0, 0, 1, 0, 0, 0]
    },
    "intelligence": {
        description: "When I use the Warder's Intuition benefit of my Mark of Warding feat, I can roll 1d6 instead of 1d4. Prof per Long Rest, When a creature makes an atk roll against me or a creature I can see w/i 30 ft of me I can take my Rea to impose Disadvantage on the roll. [+1 Intelligence]",
        scores: [0, 0, 0, 1, 0, 0]
    },
    "wisdom": {
        description: "When I use the Warder's Intuition benefit of my Mark of Warding feat, I can roll 1d6 instead of 1d4. Prof per Long Rest, When a creature makes an atk roll against me or a creature I can see w/i 30 ft of me I can take my Rea to impose Disadvantage on the roll. [+1 Wisdom]",
        scores: [0, 0, 0, 0, 1, 0]
    },
    "charisma": {
        description: "When I use the Warder's Intuition benefit of my Mark of Warding feat, I can roll 1d6 instead of 1d4. Prof per Long Rest, When a creature makes an atk roll against me or a creature I can see w/i 30 ft of me I can take my Rea to impose Disadvantage on the roll. [+1 Charisma]",
        scores: [0, 0, 0, 0, 0, 1]
    }
};
FeatsList["potent dragonmark"] = {
    name: "Potent Dragonmark",
    source: ["E:FotA", 45],
    prerequisite: "Character Level 4+, Any Dragonmark Feat",
    prereqeval: function(v) {
        return v.characterLevel >= 4 && (/dragonmark|mark/i).test(CurrentFeat.known);
    },
    descriptionFull: "You gain the following benefits:\n \u2022 Ability Score Increase. Increase the spellcasting ability score used by your Dragonmark Feat by 1, to a maximum of 20.\n \u2022 Dragonmark Preparation. You always have the spells on your Dragonmark feat's Spells of the Mark list (if any) prepared.\n \u2022 Dragonmark Spellcasting. You have one spell slot to cast the spells granted by your Dragonmark feat. The spell slot's level is one-half your level (round up), to a maximum of level 5. You regain the expended slot when you finish a Short or Long Rest. You can use this spell slot to cast only a spell that you have prepared because of your Dragonmark feat or the Dragonmark Preparation benefit of this feat.",
    description: "The spellcasting ability score of my Dragonmark Feat increases by 1, to a max of 20. I always have the spells on my Dragonmark Feat's Spells of the Mark list (if any) prepared (automation not included). I have 1 spell slot of a spell lvl 1/2 of my character lvl (round up, max of lvl 5), which I can use to cast spells granted \u0026 prepared by my Dragonmark Feat. I regain the expended spell slot after a Short/Long Rest.",
    extraLimitedFeatures: [{
        name: "Dragonmark Spell Slot",
        usages: 1,
        recovery: "short rest",
    }],
    choices: ["Constitution", "Intelligence", "Wisdom", "Charisma"], //Check with MPMB Discord to see if there is a way to hook into an Origin Dragonmark Feat's choice.
    "constitution": {
        description: "I always have the spells on my Dragonmark Feat's Spells of the Mark list (if any) prepared (automation not included). I have 1 spell slot of a spell lvl 1/2 of my character lvl (round up, max of lvl 5), which I can use to cast spells granted \u0026 prepared by my Dragonmark Feat. I regain the expended spell slot after a Short/Long Rest. [+1 Constitution]",
        scores: [0, 0, 1, 0, 0, 0]
    },
    "intelligence": {
        description: "I always have the spells on my Dragonmark Feat's Spells of the Mark list (if any) prepared (automation not included). I have 1 spell slot of a spell lvl 1/2 of my character lvl (round up, max of lvl 5), which I can use to cast spells granted \u0026 prepared by my Dragonmark Feat. I regain the expended spell slot after a Short/Long Rest. [+1 Intelligence]",
        scores: [0, 0, 0, 1, 0, 0]
    },
    "wisdom": {
        description: "I always have the spells on my Dragonmark Feat's Spells of the Mark list (if any) prepared (automation not included). I have 1 spell slot of a spell lvl 1/2 of my character lvl (round up, max of lvl 5), which I can use to cast spells granted \u0026 prepared by my Dragonmark Feat. I regain the expended spell slot after a Short/Long Rest. [+1 Wisdom]",
        scores: [0, 0, 0, 0, 1, 0]
    },
    "charisma": {
        description: "I always have the spells on my Dragonmark Feat's Spells of the Mark list (if any) prepared (automation not included). I have 1 spell slot of a spell lvl 1/2 of my character lvl (round up, max of lvl 5), which I can use to cast spells granted \u0026 prepared by my Dragonmark Feat. I regain the expended spell slot after a Short/Long Rest. [+1 Charisma]",
        scores: [0, 0, 0, 0, 0, 1]
    }
};
// Epic Boon
FeatsList["boon of siberys"] = {
    name: "Boon of Siberys",
    source: ["E:FotA", 45],
    type: "epic boon",
    prerequisite: "Eberron Campaign Setting, Level 19+",
    prereqeval: function(v) {
        return v.characterLevel >= 19;
    },
    descriptionFull: desc([
        "You gain the following benefits",
        "Ability Score Improvement. Increase one ability score of your choice by 1, to a Maximum of 30.",
        "Aberrant Magic. Choose a level 8 or lower spell from the Sorcerer spell list or a spell from the Siberys Dragonmarks table. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Short or Long Rest. You can also cast this spell using any spell slots you have. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you gain this feat)." + toUni("d8\tSiberys Dragonmarks") + "\n  1\tDetection: True Seeing\n  2\tFinding: Teleport\n  3\tHandling: Animal Shapes\n  4\tHealing: Regenerate\n  5\tHospitality: Heroes' Feast\n  6\tMaking: Demiplane\n  7\tPassage: Plane Shift\n  8\tScribing: Symbol\n  9\tSentinel: Mind Blank\n  10\tShadow: Project Image\n  11\tStorm: Control Weather\n  12\tWarding: Maze",
    ]),
    description: "An ability score of my choice is increased by 1, to a max of 30. I always have either 1 spell of lvl 8 or lower from the Sorcerer spell list or a spell from the Siberys Dragonmarks table (see book) prepared, and can cast it once without a spell slot per Short or Long Rest. I can also cast it with any spell slots I have. Intelligence, Wisdom, or Charisma is my spellcasting ability for this spell (chosen when I select this feat).",
    spellcastingBonus: [{
        name: "Boon of Siberys",
        'class': 'sorcerer',
        level: [0, 8],
        extraspells: ["true seeing", "teleport", "animal shapes", "regenerate", "heroes' feast", "demiplane", "plane shift", "symbol", "mind blank", "project image", "control weather", "maze"],
		times : 1,
        firstCol: 'oncesr',
        spellcastingAbility: [4, 5, 6],
    }],
    choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
    "strength": {
        description: "I always have either 1 spell of lvl 8 or lower from the Sorcerer spell list or a spell from the Siberys Dragonmarks table (see book) prepared, and can cast it once without a spell slot per Short or Long Rest. I can also cast it with any spell slots I have. Intelligence, Wisdom, or Charisma is my spellcasting ability for this spell (chosen when I select this feat) [+1 Strength]",
        scores: [1, 0, 0, 0, 0, 0],
        scoresMaximum: [30, 0, 0, 0, 0, 0],
    },
    "dexterity": {
        description: "I always have either 1 spell of lvl 8 or lower from the Sorcerer spell list or a spell from the Siberys Dragonmarks table (see book) prepared, and can cast it once without a spell slot per Short or Long Rest. I can also cast it with any spell slots I have. Intelligence, Wisdom, or Charisma is my spellcasting ability for this spell (chosen when I select this feat) [+1 Dexterity]",
        scores: [0, 1, 0, 0, 0, 0],
        scoresMaximum: [0, 30, 0, 0, 0, 0],
    },
    "constitution": {
        description: "I always have either 1 spell of lvl 8 or lower from the Sorcerer spell list or a spell from the Siberys Dragonmarks table (see book) prepared, and can cast it once without a spell slot per Short or Long Rest. I can also cast it with any spell slots I have. Intelligence, Wisdom, or Charisma is my spellcasting ability for this spell (chosen when I select this feat) [+1 Constitution]",
        scores: [0, 0, 1, 0, 0, 0],
        scoresMaximum: [0, 0, 30, 0, 0, 0],
    },
    "intelligence": {
        description: "I always have either 1 spell of lvl 8 or lower from the Sorcerer spell list or a spell from the Siberys Dragonmarks table (see book) prepared, and can cast it once without a spell slot per Short or Long Rest. I can also cast it with any spell slots I have. Intelligence, Wisdom, or Charisma is my spellcasting ability for this spell (chosen when I select this feat) [+1 Intelligence]",
        scores: [0, 0, 0, 1, 0, 0],
        scoresMaximum: [0, 0, 0, 30, 0, 0],
    },
    "wisdom": {
        description: "I always have either 1 spell of lvl 8 or lower from the Sorcerer spell list or a spell from the Siberys Dragonmarks table (see book) prepared, and can cast it once without a spell slot per Short or Long Rest. I can also cast it with any spell slots I have. Intelligence, Wisdom, or Charisma is my spellcasting ability for this spell (chosen when I select this feat) [+1 Wisdom]",
        scores: [0, 0, 0, 0, 1, 0],
        scoresMaximum: [0, 0, 0, 0, 30, 0],
    },
    "charisma": {
        description: "I always have either 1 spell of lvl 8 or lower from the Sorcerer spell list or a spell from the Siberys Dragonmarks table (see book) prepared, and can cast it once without a spell slot per Short or Long Rest. I can also cast it with any spell slots I have. Intelligence, Wisdom, or Charisma is my spellcasting ability for this spell (chosen when I select this feat) [+1 Charisma]",
        scores: [0, 0, 0, 0, 0, 1],
        scoresMaximum: [0, 0, 0, 0, 0, 30],
    },
};
// Items
MagicItemsList["boots of the winding path"] = {
    name: "Boots of the Winding Path",
    source: ["E:FotA", 112],
    type: "wondrous item",
    rarity: "uncommon",
    description: "While wearing these boots, I can teleport up to 15 ft as a Bonus Action to an unoccupied space I can see, as long as I occupied that space at some point during the current turn.",
    descriptionFull: "While wearing these boots, you can take a Bonus Action to teleport up to 15 feet to an unoccupied space you can see. You must have occupied that space at some point during the current turn.",
    attunement: true,
    action: [
        ["bonus action", ""]
    ]
};
MagicItemsList["dazzling weapon"] = {
    name: "Dazzling Weapon",
    nameTest: "Dazzling",
    source: ["E:FotA", 112],
    type: "weapon (any)",
    rarity: "rare",
    description: "This item adds a +1 on its to hit and damage, has 4 charges, and regains 1d4 at dawn. As a Bonus Action, I can have it start/stop shedding light, Bright in 30 ft, Dim in another 30 ft. As a Reaction if hit by an attack, I can use 1 charge to Blind the attacker until the end of its next turn unless it makes a Con 15 save.",
    descriptionFull: "This magic weapon grants a +1 bonus to attack and damage rolls made with it. While holding it, you can take a Bonus Action to cause it to shed Bright Light in a 30-foot radius and Dim Light for an additional 30 feet. You can extinguish the light as a Bonus Action.\n   The weapon has 4 charges. As a Reaction immediately after being hit by an attack, you can expend 1 charge and cause the attacker to be Blinded until the end of the attacker's next turn, unless the attacker succeeds on a DC 15 Constitution saving throw. The weapon regains 1d4 expended charges daily at dawn.",
    attunement: true,
    usages: 4,
    recovery: "dawn",
    additional: "Blind attacker; regains 1d4",
    action: [
        ["bonus action", " (start/stop light)"],
        ["reaction", " (1 charge; after hit)"]
    ],
    chooseGear: {
        type: "weapon",
        prefixOrSuffix: "suffix",
        descriptionChange: ["replace", "weapon"]
    },
    calcChanges: {
        atkAdd: [
            function(fields, v) {
                if (!v.theWea.isMagicWeapon && !v.isSpell && (/dazzling/i).test(v.WeaponTextName)) {
                    v.theWea.isMagicWeapon = true;
                    fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
                    fields.Description += (fields.Description ? '; ' : '') + 'Reaction to blind attacker';
                }
            },
            'If I include the word "Dazzling" in the name of a weapon, it will be treated as the magic weapon Dazzling Weapon. It has +1 to hit and damage and can be used to shed light and to Blind an attacker.'
        ],
        atkCalc: [
            function(fields, v, output) {
                if (v.isWeapon && !v.isSpell && (/dazzling/i).test(v.WeaponTextName)) {
                    output.magic = v.thisWeapon[1] + 1;
                }
            }
        ]
    }
};
MagicItemsList["helm of awareness"] = {
    name: "Helm of Awareness",
    source: ["E:FotA", 112],
    type: "wondrous item",
    rarity: "uncommon",
    description: "While wearing this helmet, I have Advantage on Initiative rolls.",
    descriptionFull: "While wearing this helmet, you have Advantage on Initiative rolls.",
    attunement: true,
    advantages: [
        ["Initiative", true]
    ],
};
MagicItemsList["manifold tool"] = {
    name: "Manifold Tool",
    source: ["E:FotA", 112],
    type: "wondrous item",
    rarity: "common",
    description: "This tool takes the form of a wrench, screwdriver, or other basic tool. As a Magic action, I can touch the item and transform it into a type of Artisan’s Tools of my choice. Whatever form the tool takes, I have proficiency with it when I use it.",
    descriptionFull: "This tool takes the form of a wrench, screwdriver, or other basic tool. As a Magic action, you can touch the item and transform it into a type of Artisan’s Tools of your choice. Whatever form the tool takes, you have proficiency with it when you use it.",
    attunement: true,
    action: [
        ["action", "Transform Manifold Tool"]
    ],
};
MagicItemsList["mind sharpener"] = {
    name: "Mind Sharpener",
    source: ["E:FotA", 112],
    type: "ring",
    rarity: "uncommon",
    description: "This ring can send a jolt to refocus my mind. It has 4 charges and regains 1d4 expended charges daily at dawn. As a Reaction when I fail a Constitution saving throw to maintain Concentration on a spell, I can expend 1 charge to succeed instead.",
    descriptionFull: "The item has 4 charges. When you fail a Constitution saving throw to maintain Concentration on a spell, you can use its reaction to expend 1 of the item's charges to succeed instead. The item regains 1d4 expended charges daily at dawn.",
    action: [
        ["reaction", ""]
    ],
    usages: 4,
    recovery: "dawn",
    additional: "regains 1d4",
    attunement: true,
};
MagicItemsList["repeating shot"] = {
    name: "Repeating Shot",
    source: ["E:FotA", 112],
    type: "weapon (any with ammunition)",
    rarity: "uncommon",
    description: "When I use this magic weapon to make a ranged attack, it magically produces one piece of ammunition and grants a +1 bonus to its attack and damage rolls. Thus, it doesn't require ammunition and ignores the Loading property if it has it. The produced ammunition vanishes once it hits or misses a target.",
    descriptionFull: "This magic weapon grants a +1 bonus to attack and damage rolls made with it when it's used to make a ranged attack, and it ignores the Loading property if it has it.\n   If you load no ammunition in the weapon, it produces its own, automatically creating one piece of magic ammunition when you make a ranged attack with it. The ammunition created by the weapon vanishes the instant after it hits or misses a target.",
    attunement: true,
    chooseGear: {
        type: "weapon",
        prefixOrSuffix: "suffix",
        descriptionChange: ["replace", "weapon"],
        excludeCheck: function(inObjKey, inObj) {
            return !(/ammunition/i).test(inObj.description);
        }
    },
    calcChanges: {
        atkAdd: [
            function(fields, v) {
                if (!v.theWea.isMagicWeapon && !v.isSpell && (/^(?=.*repeating shot)(?=.*ammunition).*$/i).test(v.WeaponText)) {
                    v.theWea.isMagicWeapon = true;
                    fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '').replace(/(;|,)? ?loading/i, '');
                }
            },
            'If I include the words "Repeating Shot" in the name of a weapon with the ammunition property, it will be treated as the magic weapon Repeating Shot. It has +1 to hit and damage and produces its own ammunition, thus its loading property is removed if it has it.'
        ],
        atkCalc: [
            function(fields, v, output) {
                if ((/^(?=.*repeating shot)(?=.*ammunition).*$/i).test(v.WeaponText) && !v.isSpell) {
                    output.magic = v.thisWeapon[1] + 1;
                }
            }, ''
        ]
    }
};
MagicItemsList["repulsion shield"] = {
    name: "Repulsion Shield",
    source: ["E:FotA", 112],
    type: "armor (shield)",
    rarity: "uncommon",
    description: "I gain an additional +1 bonus to Armor Class while wielding this shield. The shield has 4 charges and regains 1d4 expended charges daily at dawn. As a Reaction immediately after being hit by a melee attack, I can expend 1 charge to push the attacker up to 15 ft away.",
    descriptionFull: "You gains a +1 bonus to Armor Class while wielding this shield.\n   The shield has 4 charges. While holding it, when a Large or smaller creature within 5 feet of you hits you with a melee attack roll, you can use a Reaction to expend 1 of the shield's charges and push the attacker up to 15 feet away. The shield regains 1d4 expended charges daily at dawn.",
    weight: 6,
    attunement: true,
    usages: 4,
    additional: "regains 1d4",
    recovery: "dawn",
    action: [
        ["reaction", " (1 charge)"]
    ],
    shieldAdd: ["Repulsion Shield", 3, 6]
};
MagicItemsList["returning weapon"] = {
    name: "Returning Weapon",
    nameTest: "Returning",
    source: ["E:FotA", 112],
    type: "weapon (any thrown)",
    rarity: "uncommon",
    description: "This magic weapon grants a +1 bonus to attack and damage rolls I make with it. It returns to my hand immediately after I use it to make a ranged attack.",
    descriptionFull: "This magic weapon grants a +1 bonus to attack and damage rolls made with it, and it returns to the wielder's hand immediately after it is used to make a ranged attack.",
    chooseGear: {
        type: "weapon",
        prefixOrSuffix: "suffix",
        descriptionChange: ["replace", "weapon"],
        excludeCheck: function(inObjKey, inObj) {
            return !/\bthrown\b/i.test(inObj.description);
        }
    },
    calcChanges: {
        atkAdd: [
            function(fields, v) {
                if (!v.theWea.isMagicWeapon && v.isThrownWeapon && /returning/i.test(v.WeaponText)) {
                    v.theWea.isMagicWeapon = true;
                    fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
                    fields.Description += (fields.Description ? '; ' : '') + 'Returns immediately after ranged attack';
                }
            },
            'If I include the word "Returning" in the name of a thrown weapon, it will be treated as the magic weapon Returning Weapon. It has +1 to hit and damage and returns to my hand immediately after I use it to make a ranged attack.'
        ],
        atkCalc: [
            function(fields, v, output) {
                if (v.isThrownWeapon && /returning/i.test(v.WeaponText)) {
                    output.magic = v.thisWeapon[1] + 1;
                }
            }, ''
        ]
    }
};
MagicItemsList["spell-refueling ring"] = {
    name: "Spell-Refueling Ring",
    source: ["E:FotA", 112],
    type: "ring",
    rarity: "uncommon",
    description: "As a Bonus Action, I can activate this magic ring to recover one expended spell slot. The recovered slot can be of level 3 or lower. Once used, the ring can't be used again until the next dawn.",
    descriptionFull: "While wearing this ring, the creature can recover one expended spell slot as a Bonus Action. The recovered slot can be of level 3 or lower. Once used, the ring can't be used again until the next dawn.",
    prerequisite: "Requires attunement by a spellcaster",
    prereqeval: function(v) {
        return v.isSpellcaster;
    },
    attunement: true,
    action: [
        ["bonus action", ""]
    ],
    usages: 1,
    recovery: "dawn"
};
//Replicate Magic Item Function
RunFunctionAtEnd(function() {
    var rmiFeat = ClassList.artificer.features["replicate magic item"];
    if (!rmiFeat) return;

    if (!rmiFeat.extrachoices) rmiFeat.extrachoices = [];

    var itemLevels = {
        "alchemy jug": 2, "armblade": 2, "bag of holding": 2, "cap of water breathing": 2, "goggles of night": 2, "prosthetic limb": 2, "rope of climbing": 2, "sending stones": 2, "wand of magic detection": 2, "wand of secrets": 2, "wand of the war mage (+1)": 2,
        "boots of elvenkind": 6, "cloak of elvenkind": 6, "cloak of the manta ray": 6, "eyes of charming": 6, "gloves of thievery": 6, "lantern of revealing": 6, "pipes of haunting": 6, "ring of water walking": 6, "wand of the war mage (+2)": 6,
        "boots of striding and springing": 10, "boots of the winterlands": 10, "bracers of archery": 10, "brooch of shielding": 10, "cloak of protection": 10, "eyes of the eagle": 10, "gauntlets of ogre power": 10, "gloves of missile snaring": 10, "gloves of swimming and climbing": 10, "hat of disguise": 10, "headband of intellect": 10, "helm of telepathy": 10, "medallion of thoughts": 10, "necklace of adaptation": 10, "periapt of wound closure": 10, "pipes of the sewers": 10, "quiver of ehlonna": 10, "ring of jumping": 10, "ring of mind shielding": 10, "slippers of spider climbing": 10, "wand of the war mage (+3)": 10, "winged boots": 10,
        "amulet of health": 14, "belt of hill giant strength": 14, "boots of levitation": 14, "boots of speed": 14, "bracers of defense": 14, "cloak of the bat": 14, "dimensional shackles": 14, "gem of seeing": 14, "horn of blasting": 14, "ring of free action": 14, "ring of protection": 14, "ring of the ram": 14
    };

    for (var mi in MagicItemsList) {
        var item = MagicItemsList[mi];
        if (!item || !item.name) continue;

        var reqLvl = itemLevels[mi] || 0;
        
        if (reqLvl === 0 && item.rarity && item.rarity.toLowerCase() === "common" && !(/potion|scroll|tattoo/i).test(item.type)) {
            reqLvl = 2;
        }

        if (reqLvl > 0) {
            var choiceKey = item.name.toLowerCase();
            var submenuName = "Level " + reqLvl + " Items";
            
            if (rmiFeat.extrachoices.indexOf(item.name) === -1) {
                rmiFeat.extrachoices.push(item.name);
            }
            

            rmiFeat[choiceKey] = {
                name : item.name,
                source : item.source || ["E:FotA", 8],
                submenu : submenuName, 
                description : "Replicate magic item: " + item.name,
                prereqeval : function(lvl) {
                    return function(v) { 
                        return classes.known.artificer ? classes.known.artificer.level >= lvl : false; 
                    };
                }(reqLvl)
            };
        }
    }
    
    rmiFeat.extrachoices.sort();
});
