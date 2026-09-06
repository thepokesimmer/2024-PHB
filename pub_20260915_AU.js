var iFileName = "pub_20260915_AU.js";
RequiredSheetVersion("13.2.3", 26);

SourceList["AU"] = {
    name: "Arcana Unleashed",
    abbreviation: "AU",
    abbreviationSpellsheet: "AU",
    group: "Primary Sources"
};

//Character Options
	//Subclasses
AddSubClass("cleric", "arcana domain", {
    regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\barcana\b).*$/i,
    subname : "Arcana Domain",
    source : [["AU", 0]],
    features : {
        "subclassfeature3" : {
            name : "Modify Magic",
            source : [["AU", 0]],
            minlevel : 3,
			spellcastingExtra : ["detect magic", "magic missile", "magic weapon", "nystul's magic aura", "counterspell", "dispel magic", "arcane eye", "leomund's secret chest", "bigby's hand", "teleportation circle"],
            description : desc([
                "When I cast a spell, I can expend 1 Channel Divinity to alter it in one of two ways:",
                "\u2022 Fortifying Spell: One target of the spell gains 2d8 + my Cleric level in Temp HP.",
                "\u2022 Tenacious Spell: When a creature succeeds on its save vs. the spell, I can roll 1d6",
                "  and subtract the result from the target's first saving throw against the spell."
            ]),
            additional : "1 Channel Divinity"
        },
        "subclassfeature3.1" : {
            name : "Student of Arcana",
            source : [["AU", 0]],
            minlevel : 3,
            description : desc([
                "I gain proficiency in Arcana or another Cleric skill, and learn 2 Wizard cantrips.",
                "Whenever I gain a Cleric level, I can replace one of these with another Wizard cantrip."
            ]),
            skillstxt : "Choose Arcana or one skill from the Cleric class list",
            spellcastingBonus : {
                name : "Student of Arcana",
                "class" : "wizard",
                level : [0, 0],
                times : 2
            }
        },
        "subclassfeature6" : {
            name : "Dispelling Recovery",
            source : [["AU", 0]],
            minlevel : 6,
            description : desc([
                "After I cast a spell with a slot that heals or ends a condition on a creature,",
                "I can cast Dispel Magic as part of that Action, Bonus Action, or Reaction for free.",
                "I can do this once per Short/Long Rest, or by expending 1 Channel Divinity."
            ]),
            usages : 1,
            recovery : "short rest",
            altResource : "CD"
        },
        "subclassfeature17" : {
            name : "Magical Mastery",
            source : [["AU", 0]],
            minlevel : 17,
            description : desc([
                "I learn four Wizard spells: one each of 6th, 7th, 8th, and 9th level.",
                "These spells are always prepared. When I gain a Cleric level, I can replace",
                "one of these with another Wizard spell of the exact same level."
            ]),
            spellcastingBonus : [{
				name : "Magical Mastery (6th-level)",
				"class" : "wizard",
				level : [6, 6],
				times : 1,
				firstCol : "markedbox"
			}, {
				name : "Magical Mastery (7th-level)",
				"class" : "wizard",
				level : [7, 7],
				times : 1,
				firstCol : "markedbox"
			}, {
				name : "Magical Mastery (8th-level)",
				"class" : "wizard",
				level : [8, 8],
				times : 1,
				firstCol : "markedbox"
			}, {
				name : "Magical Mastery (9th-level)",
				"class" : "wizard",
				level : [9, 9],
				times : 1,
				firstCol : "markedbox"
			}],
        },
    },
});
AddSubClass("fighter", "arcane archer", {
    regExpSearch : /^(?=.*arcane)(?=.*archer).*$/i,
    subname : "Arcane Archer",
    source : [["AU", 0]],
    fullname : "Arcane Archer",
    features : {
        "subclassfeature3" : {
            name : "Arcane Archer Lore",
            source : [["AU", 0]],
            minlevel : 3,
            description : desc([
                "I gain proficiency in Arcana and Nature (or another Fighter skill if already proficient).",
                "I also learn either the Druidcraft or Prestidigitation cantrip (Int is my casting ability)."
            ]),
            skillstxt : "Arcana and Nature (or choose another from the Fighter list if already proficient)",
            spellcastingBonus : {
                name : "Arcane Archer Lore",
                "class" : "fighter",
                spells : ["druidcraft", "prestidigitation"],
                selection : ["druidcraft", "prestidigitation"],
                times : 1,
                spellcastingAbility : 4
            }
        },
        "subclassfeature3.1" : {
            name : "Arcane Shot",
            source : [["AU", 0]],
            minlevel : 3,
            description : desc([
                "Once per turn, when I fire an Ammunition weapon, I can apply an Arcane Shot option.",
                "I decide to use the option when I hit, unless the option replaces the attack roll.",
                "I can use this feature a number of times equal to my Intelligence mod (minimum 1).",
                "Use the 'Choose Feature' button on the 2nd page to select my Arcane Shot options."
            ]),
            usages : "Intelligence modifier per ",
            usagescalc : "event.value = Math.max(1, What('Int Mod'));",
            recovery : "short rest",
            additional : levels.map(function (n) {
                if (n < 3) return "";
                var die = n < 10 ? 6 : n < 15 ? 8 : n < 18 ? 10 : 12;
                return "d" + die + " Arcane Shot Die";
            }),
            extraname : "Arcane Shot Options",
			extrachoices : ["Banishing Shot", "Beguiling Shot", "Bursting Shot", "Enfeebling Shot", "Grasping Shot", "Piercing Shot", "Seeking Shot", "Shadow Shot"],
            extraTimes : levels.map(function (n) {
                return n < 3 ? 0 : n < 7 ? 2 : n < 10 ? 3 : n < 15 ? 4 : n < 18 ? 5 : 6;
            }),
            "banishing shot" : {
                name : "Banishing Shot",
                description : desc([
                    "The target takes extra Psychic dmg equal to 1 roll of my Arcane Shot Die.",
                    "It must succeed on a Cha save or be banished to a harmless demiplane until the end",
                    "of its next turn. While banished, it has the Incapacitated condition and 0 Speed."
                ]),
                source : [["AU", 0]]
            },
            "beguiling shot" : {
                name : "Beguiling Shot",
                description : desc([
                    "The target takes extra Psychic dmg equal to 2 rolls of my Arcane Shot Die.",
                    "It must succeed on a Wis save or be Charmed by me or an ally (my choice) within 30 ft",
                    "until the start of my next turn. The effect ends early if the charmer harms it."
                ]),
                source : [["AU", 0]]
            },
            "bursting shot" : {
                name : "Bursting Shot",
                description : desc([
                    "Immediately after dealing damage, the target and all creatures in a 10-ft Emanation",
                    "originating from the target take Force dmg equal to 2 rolls of my Arcane Shot Die."
                ]),
                source : [["AU", 0]]
            },
            "enfeebling shot" : {
                name : "Enfeebling Shot",
                description : desc([
                    "The target takes extra Necrotic dmg equal to 2 rolls of my Arcane Shot Die.",
                    "It must succeed on a Con save or have the Poisoned condition until its next turn ends.",
                    "While Poisoned this way, it subtracts 1 Arcane Shot Die from its attack damage."
                ]),
                source : [["AU", 0]]
            },
            "grasping shot" : {
                name : "Grasping Shot",
                description : desc([
                    "The target takes extra Slashing dmg equal to 1 roll of my Arcane Shot Die.",
                    "It must succeed on a Str save or have the Restrained condition for 1 min (or until I",
                    "use this option again). As an action, a creature can make an Athletics check vs DC to end."
                ]),
                source : [["AU", 0]]
            },
            "piercing shot" : {
                name : "Piercing Shot",
                description : desc([
                    "I don't make an attack roll; instead, I fire a 30-ft long, 1-ft wide Line.",
                    "It ignores cover. Each creature in it must make a Dexterity saving throw.",
                    "Fail: Damage as if hit by the attack + extra Piercing dmg equal to 2 Arcane Shot Dice.",
                    "Success: The target takes half as much damage."
                ]),
                source : [["AU", 0]]
            },
            "seeking shot" : {
                name : "Seeking Shot",
                description : desc([
                    "I don't make an attack roll; instead, I choose one creature I've seen in the last min.",
                    "The shot ignores Half/Three-Quarters Cover and corners. If in long range: Dex save.",
                    "Fail: Damage as if hit + extra Force dmg equal to 2 Arcane Shot Dice + learn location.",
                    "Success: Half damage. If the target is beyond long range, the shot misses."
                ]),
                source : [["AU", 0]]
            },
            "shadow shot" : {
                name : "Shadow Shot",
                description : desc([
                    "The target takes extra Psychic dmg equal to 1 roll of my Arcane Shot Die.",
                    "It must succeed on a Wis save or have the Blinded condition until its next turn ends."
                ]),
                source : [["AU", 0]]
            }
        },
        "subclassfeature7" : {
            name : "Curving Shot",
            source : [["AU", 0]],
            minlevel : 7,
            description : desc([
                "If I make a ranged attack roll with an Ammunition weapon and miss, I can use a",
                "Bonus Action to ricochet the shot toward a new target I can see within weapon range",
                "and within 60 ft of the original target. I make a new attack roll for this target."
            ]),
            action : [["bonus action", ""]]
        },
        "subclassfeature7.1" : {
            name : "Magical Ammunition",
            source : [["AU", 0]],
            minlevel : 7,
            description : desc([
                "As a Magic action, I imbue nonmagical ammo with a property and fire it at a surface.",
                "It attaches, activates, and is destroyed when it ends (Magic action to end early).",
                "\u2022 Darkening: 15-ft Emanation (1 min), douses nonmagic fire, -5 to Perception/Passive.",
                "\u2022 Unlocking: 15-ft Emanation, loud knock (300 ft), unlocks/unsticks mundane locks.",
                "\u2022 Vine: 120-ft vine grows for 10 min that creatures can climb.",
                "I can do this once per Short/Long Rest, or by expending a use of Second Wind."
            ]),
            action : [["action", " (place)"], ["action", " (remove)"]],
            usages : 1,
            recovery : "short rest",
            altResource : "Second Wind"
        },
        "subclassfeature10" : {
            name : "Ever-Ready Shot",
            source : [["AU", 0]],
            minlevel : 10,
            description : desc([
                "When I roll Initiative, I can regain one expended use of Arcane Shot."
            ])
        },
        "subclassfeature15" : {
            name : "Indomitable Teleport",
            source : [["AU", 0]],
            minlevel : 15,
            description : desc([
                "When I use my Indomitable feature and succeed on the saving throw, I can teleport",
                "up to 60 feet to an unoccupied space that I can see."
            ])
        },
        "subclassfeature18" : {
            name : "Masterful Shots",
            source : [["AU", 0]],
            minlevel : 18,
            description : desc([
                "When a creature I can see misses me with an attack roll, I can use a Reaction to",
                "move up to half my Speed away from the attacker without provoking Opportunity Attacks.",
                "I can then make a ranged attack roll against the attacker as part of this Reaction."
            ]),
            action : [["reaction", ""]]
        }
    }
});
AddSubClass("monk", "warrior of the mystic arts", {
    regExpSearch : /^(?=.*mystic)(?=.*arts).*$/i,
    subname : "Warrior of the Mystic Arts",
    source : [["AU", 0]],
    features : {
        "subclassfeature3" : {
            name : "Spellcasting",
            source : [["AU", 0]],
            minlevel : 3,
            description : desc([
                "I can cast Sorcerer spells using Wisdom as my spellcasting ability.",
                "I can use an Arcane Focus as a spellcasting focus for these spells.",
                "I know a number of cantrips and prepare spells based on my Monk level.",
                "Whenever I gain a Monk level, I can replace one cantrip or prepared spell."
            ]),
            spellcastingFactor : 3,
            spellcastingAbility : 5, // Wisdom
            spellcastingList : {
                "class" : "sorcerer",
                level : [1, 4]
            },
            spellcastingKnown : {
                cantrips : [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
                spells :   [0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13]
            }
        },
        "subclassfeature6" : {
            name : "Mystic Fighting Style",
            source : [["AU", 0]],
            minlevel : 6,
            description : desc([
                "When I take the Attack action, I can replace one Unarmed Strike with a Sorcerer cantrip.",
                "The cantrip must have a casting time of an action."
            ])
        },
        "subclassfeature6.1" : {
            name : "Mystic Focus",
            source : [["AU", 0]],
            minlevel : 6,
            description : desc([
                "I can expend a spell slot to regain Focus Points equal to the slot's level (no action).",
                "When I finish a Short Rest or use Uncanny Metabolism, I can spend Focus Points",
                "to recover one expended spell slot (max 4th-level slot):",
                "\u2022 1st-level: 2 FP  |  2nd-level (lv 7+): 3 FP",
                "\u2022 3rd-level (lv 13+): 5 FP  |  4th-level (lv 19+): 6 FP"
            ])
        },
        "subclassfeature11" : {
            name : "Focused Strike",
            source : [["AU", 0]],
            minlevel : 11,
            description : desc([
                "When I use Stunning Strike, the target has Disadvantage on saves against my spells",
                "until the start of my next turn, regardless of if they succeed or fail the initial save."
            ])
        },
        "subclassfeature17" : {
            name : "Improved Mystic Fighting Style",
            source : [["AU", 0]],
            minlevel : 17,
            description : desc([
                "When I use Flurry of Blows, I can replace two of the Unarmed Strikes with a casting",
                "of a 1st or 2nd-level Sorcerer spell with a casting time of an action.",
                "I cast the spell as part of the same Bonus Action used to activate Flurry of Blows."
            ])
        }
    }
});
AddSubClass("warlock", "vestige patron", {
    regExpSearch : /^(?=.*vestige)(?=.*patron).*$/i,
    subname : "Vestige Patron",
    source : [["AU", 0]],
    features : {
        "subclassfeature3" : {
            name : "Vestige Companion",
            source : [["AU", 0]],
            minlevel : 3,
            description : desc([
                "I manifest a Vestige Companion (Celestial, Fiend, or Undead) that obeys my commands.",
                "It acts during my turn. I can use a Bonus Action to command it to take an action.",
                "I can also sacrifice one of my attacks when I take the Attack action to command it to strike.",
                "If it drops to 0 HP, it disappears. I can perform a 1-minute ceremony to manifest it again.",
                "As a Magic action, I can temporarily dismiss it to a pocket dimension, or resummon it.",
                "Whenever I finish a Long Rest, I can change its appearance and its type."
            ]),
            action : [
                ["bonus action", "Command Vestige"],
                ["action", "Dismiss/Resummon Vestige"]
            ],
            creaturesAdd : [["Vestige Companion"]],
            creatureOptions : [{
                name : "Vestige Companion",
                source : [["AU", 0]],
                size : 4,
                type : ["Celestial", "Fiend", "Undead"],
                alignment : "Neutral",
                ac : 13,
                hp : 16,
                hd : [3, 6],
                hdLinked : ["warlock"],
                speed : "5 ft, fly 30 ft (hover)",
                scores : [1, 14, 10, 15, 15, 16],
                saves : ["", "", "", "", "", ""],
                damage_resistances : "Fire (Fiend); Necrotic (Undead); Radiant (Celestial)",
                condition_immunities : "charmed, frightened, prone",
                passivePerception : 12,
                languages : "speaks the languages I know",
                challengeRating : "0",
                proficiencyBonus : 0,
                proficiencyBonusLinked : true,
                attacksAction : 1,
                attacks : [{
                    name : "Vestige's Strike",
                    ability : 6,
                    damage : [1, 6, ""],
                    modifiers : [3, ""], 
                    range : "Melee, 60 ft",
                    description : "Fire (Fiend), Necro (Undead), or Rad (Celest); +3 to dmg",
                    useSpellMod : "warlock",
                    abilitytodamage : true
                }],
                features : [{
                    name : "Pact Bond",
                    description : "The vestige adds my Proficiency Bonus to any ability check or saving throw it makes."
                }, {
                    name : "Vestige Type",
                    description : "I choose whether the vestige is a Celestial, Fiend, or Undead when I summon it. Its type determines its resistance, the damage type of its strike, and its Divine Power bonus action."
                }],
                actions : [{
                    name : "Divine Power (Bonus Action)",
                    description : "1/Day. Undead: Curse a creature within 30 ft for 1 min (Disadv. on attacks vs me/vestige). Fiend: If within 60 ft of me, we teleport and swap places. Celestial: Touch a creature to heal 2d8+Cha HP and end Blinded, Deafened, or Poisoned."
                }],
                calcChanges : {
                    hp : function (totalHD, HDobj, prefix) {
                        if (!classes.known.warlock) return;
                        var wLvl = classes.known.warlock.level;
                        HDobj.alt.push(4 + (wLvl * 4));
                        HDobj.altStr.push(" = 4 as a base\n + 4 \xD7 " + wLvl + " from its creator's Warlock level");
                    },
                    setAltHp : true,
                    hpForceRecalc : true,
                    ac : function (acData) {
                        var chaMod = Number(What('Cha Mod'));
                        acData.extra += chaMod;
                        acData.extraText += " + " + chaMod + " from creator's Charisma";
                    }
                },
                addMod : [
                    { type : "save", field : "all", mod : "Prof", text : "The vestige adds my Proficiency Bonus to all its saving throws." },
                    { type : "skill", field : "all", mod : "Prof", text : "The vestige adds my Proficiency Bonus to all its ability checks." }
                ]
            }]
        },
        "subclassfeature3.1" : {
            name : "Vestige Spells",
            source : [["AU", 0]],
            minlevel : 3,
            description : desc([
                "I choose a Cleric Domain for my vestige.",
                "Its Domain Spells are Warlock spells for me and are always prepared.",
                'Use the "Choose Feature" button on the sheet to select the domain.'
            ]),
            choices : ["Arcana Domain", "Death Domain", "Forge Domain", "Grave Domain", "Knowledge Domain", "Life Domain", "Light Domain", "Nature Domain", "Order Domain", "Peace Domain", "Tempest Domain", "Trickery Domain", "Twilight Domain", "War Domain"],
			"arcana domain" : {
				name : "Arcana Domain Spells",
                spellcastingExtra : ["detect magic", "magic missile", "magic weapon", "nystul's magic aura", "counterspell", "dispel magic", "arcane eye", "leomund's secret chest", "bigby's hand", "teleportation circle"]
			},
			"death domain" : {
				name : "Death Domain Spells",
                spellcastingExtra : ["false life", "ray of sickness", "blindness/deafness", "ray of enfeeblement", "animate dead", "vampiric touch", "blight", "death ward", "antilife shell", "cloudkill"]
			},
			"forge domain" : {
				name : "Forge Domain Spells",
                spellcastingExtra : ["identify", "searing smite", "heat metal", "magic weapon", "elemental weapon", "protection from energy", "fabricate", "wall of fire", "animate objects", "creation"]
			},
			"grave domain" : {
				name : "Grave Domain Spells",
                spellcastingExtra : ["detect evil and good", "false life", "gentle repose", "ray of enfeeblement", "revivify", "vampiric touch", "blight", "death ward", "dispel evil and good", "raise dead"]
			},
			"knowledge domain" : {
				name : "Knowledge Domain Spells",
                spellcastingExtra : ["command", "comprehend languages", "detect magic", "detect thoughts", "identify", "mind spike", "dispel magic", "nondetection", "tongues", "arcane eye", "banishment", "confusion", "legend lore", "scrying", "synaptic static"]
			},
            "life domain" : {
                name : "Life Domain Spells",
                spellcastingExtra : ["bless", "cure wounds", "aid", "lesser restoration", "mass healing word", "revivify", "aura of life", "death ward", "mass cure wounds", "greater restoration"]
            },
            "light domain" : {
                name : "Light Domain Spells",
                spellcastingExtra : ["burning hands", "faerie fire", "see invisibility", "scorching ray", "daylight", "fireball", "arcane eye", "wall of fire", "flame strike", "scrying"]
            },
            "nature domain" : {
                name : "Nature Domain Spells",
                spellcastingExtra : ["animal friendship", "speak with animals", "barkskin", "spike growth", "plant growth", "wind wall", "dominate beast", "grasping vine", "insect plague", "tree stride"]
            },
			"order domain" : {
                name : "Order Domain Spells",
                spellcastingExtra : ["command", "heroism", "hold person", "zone of truth", "mass healing word", "slow", "compulsion", "locate creature", "commune", "dominate person"]
            },
			"peace domain" : {
                name : "Peace Domain Spells",
                spellcastingExtra : ["heroism", "sanctuary", "aid", "warding bond", "beacon of hope", "sending", "aura of purity", "otiluke's resilient sphere", "greater restoration", "rary's telepathic bond"]
            },
			"tempest domain" : {
                name : "Tempest Domain Spells",
                spellcastingExtra : ["fog cloud", "thunderwave", "gust of wind", "shatter", "call lightning", "sleet storm", "control water", "ice storm", "destructive wave", "insect plague"]
            },
			"trickery domain" : {
                name : "Trickery Domain Spells",
                spellcastingExtra : ["charm person", "disguise self", "invisibility", "pass without trace", "hypnotic pattern", "nondetection", "confusion", "dimension door", "dominate person", "modify memory"]
            },
            "twilight domain" : {
                name : "Twilight Domain Spells",
                spellcastingExtra : ["faerie fire", "sleep", "moonbeam", "see invisibility", "aura of vitality", "leomund's tiny hut", "aura of life", "greater invisibility", "circle of power", "mislead"]
            },
			"war domain" : {
                name : "War Domain Spells",
                spellcastingExtra : ["guiding bolt", "shield of faith", "magic weapon", "spiritual weapon", "crusader's mantle", "spirit guardians", "fire shield", "freedom of movement", "steel wind strike", "hold monster"]
            }
        },
        "subclassfeature6" : {
            name : "Vestige Power",
            source : [["AU", 0]],
            minlevel : 6,
            description : desc([
                "My Vestige Companion regains its Divine Power on a Short/Long Rest or Magical Cunning.",
                "While I am within 30 ft of my companion, I gain its damage Resistance:",
                "Fire (Fiend), Necrotic (Undead), or Radiant (Celestial)."
            ])
        },
        "subclassfeature10" : {
            name : "Vestige Recovery",
            source : [["AU", 0]],
            minlevel : 10,
            description : desc([
                "When my vestige would drop to 0 HP, I can take a Reaction and expend a Pact Magic slot.",
                "If I do, it instead regains all its HP and teleports to an unoccupied space within 30 ft."
            ]),
            usages : 1,
            recovery : "long rest",
            action : [["reaction", ""]]
        },
        "subclassfeature14" : {
            name : "Semblance of Life",
            source : [["AU", 0]],
            minlevel : 14,
            description : desc([
                "As a Magic action while my vestige is within 90 ft, I can shape-shift it for 1 hour.",
                "It becomes a Celestial, Fiendish, or Undead Spirit (from the respective Summon spells).",
                "Its stats are replaced, using half my Warlock level as the spell level (max 9).",
                "It keeps its personality, Divine Power, HP, and HD, and gains Temp HP equal to the spirit's HP."
            ]),
            usages : 1,
            recovery : "long rest",
            action : [["action", " (shape-shift)"]]
        }
    }
});
AddSubClass("wizard", "conjurer", {
    regExpSearch : /conjuration|conjurer/i,
    subname : "Conjurer",
    fullname : "Conjurer",
    source : [["AU", 0]],
    features : {
        "subclassfeature3" : {
            name : "Benign Transposition",
            source : [["AU", 0]],
            minlevel : 3,
            description : desc([
                "As a Bonus Action, I can teleport up to 30 ft to an unoccupied space I can see.",
                "Alternatively, I can choose a space within range occupied by a willing Medium or smaller",
                "creature. If I do, we both teleport, swapping places.",
                "I can use this a number of times equal to my Intelligence modifier (minimum 1)."
            ]),
            usages : "Intelligence modifier per ",
            usagescalc : "event.value = Math.max(1, What('Int Mod'));",
            recovery : "long rest",
			altResource: ["", "", "", "", "", "SS 3+", "SS 3+", "SS 3+", "SS 3+", "SS 3+", "SS 3+", "SS 3+", "SS 3+", "SS 3+", "SS 3+", "SS 3+", "SS 3+", "SS 3+", "SS 3+", "SS 3+"],
            action : [["bonus action", ""]]
        },
        "subclassfeature3.1" : {
            name : "Conjuration Savant",
            source : [["AU", 0]],
            minlevel : 3,
            description : desc([
                "I add two Wizard Conjuration spells (max level 2) to my spellbook for free.",
                "Whenever I gain access to a new level of Wizard spell slots, I can add one",
                "Wizard Conjuration spell to my spellbook for free."
            ])
        },
        "subclassfeature6" : {
            name : "Distant Transposition",
            source : [["AU", 0]],
            minlevel : 6,
            description : desc([
                "The range of my Benign Transposition increases to 60 feet.",
                "I can restore one expended use of it by expending a 3rd-level or higher spell slot."
            ]),
        },
        "subclassfeature6.1" : {
            name : "Durable Summons",
            source : [["AU", 0]],
            minlevel : 6,
            description : desc([
                "When I cast a Conjuration spell with a slot to summon/create a creature, it gains",
                "Temp HP equal to twice my Wizard level when it first appears.",
                "While it has this Temp HP, it has Resistance to all damage types except",
                "Force, Necrotic, Psychic, and Radiant."
            ])
        },
        "subclassfeature10" : {
            name : "Focused Conjuration",
            source : [["AU", 0]],
            minlevel : 10,
            description : desc([
                "Taking damage can't break my Concentration on Conjuration spells."
            ])
        },
        "subclassfeature14" : {
            name : "Splintered Summons",
            source : [["AU", 0]],
            minlevel : 14,
            description : desc([
                "When I use a spell slot to cast a Conjuration spell that summons a spirit",
                "(like Summon Aberration), I can modify it to summon two creatures instead of one.",
                "They are the same kind and manifest in different unoccupied spaces within range.",
                "Both creatures' Hit Point maximums and current Hit Points are halved.",
                "If I lose Concentration on the spell, both creatures disappear.",
                "I can do this once per Long Rest, or by expending a 5th-level or higher spell slot."
            ]),
            usages : 1,
            recovery : "long rest",
            altResource : "SS 5+"
        }
    }
});
AddSubClass("wizard", "enchanter", {
    regExpSearch : /enchantment|enchanter/i,
    subname : "Enchanter",
    fullname : "Enchanter",
    source : [["AU", 0]],
    features : {
        "subclassfeature3" : {
            name : "Enchanting Conversationalist",
            source : [["AU", 0]],
            minlevel : 3,
            description : desc([
                "I gain proficiency in Deception, Intimidation, or Persuasion.",
                "When I make an ability check with the chosen skill, I add my Int mod (min 1).",
                "Use the 'Choose Feature' button on the sheet to select the skill."
            ]),
            choices : ["Deception", "Intimidation", "Persuasion"],
            "deception" : {
                name : "Conversationalist: Deception",
                description : desc("I gain proficiency in Deception and add my Int mod (min 1) to its checks."),
                skills : ["deception"],
				addMod: [ { type: "skill", field: "Deception", mod: "Int", text: "I can add my Intelligence modifier to deception rolls." }, ],
            },
            "intimidation" : {
                name : "Conversationalist: Intimidation",
                description : desc("I gain proficiency in Intimidation and add my Int mod (min 1) to its checks."),
                skills : ["intimidation"],
				addMod: [ { type: "skill", field: "Intimidation", mod: "Int", text: "I can add my Intelligence modifier to intimidation rolls." }, ],
            },
            "persuasion" : {
                name : "Conversationalist: Persuasion",
                description : desc("I gain proficiency in Persuasion and add my Int mod (min 1) to its checks."),
                skills : ["persuasion"],
				addMod: [ { type: "skill", field: "Persuasion", mod: "Int", text: "I can add my Intelligence modifier to persuasion rolls." }, ],
            },
        },
        "subclassfeature3.1" : {
            name : "Enchantment Savant",
            source : [["AU", 0]],
            minlevel : 3,
            description : desc([
                "I add two Wizard Enchantment spells (max level 2) to my spellbook for free.",
                "Whenever I gain access to a new level of Wizard spell slots, I can add one",
                "Wizard Enchantment spell to my spellbook for free."
            ])
        },
        "subclassfeature3.2" : {
            name : "Hypnotic Presence",
            source : [["AU", 0]],
            minlevel : 3,
            description : desc([
                "As a Magic action, I can force a creature within 10 ft that can see/hear me to make",
                "a Wis save or be Charmed for 1 min. While Charmed, it is Incapacitated and has 0 Speed.",
                "This ends early if it is >10 ft away, can't see or hear me, or takes damage."
            ]),
            usages : "Int mod per ",
            usagescalc : "event.value = Math.max(1, What('Int Mod'));",
            recovery : "long rest",
            action : [["action", ""]]
        },
        "subclassfeature6" : {
            name : "Split Enchantment",
            source : [["AU", 0]],
            minlevel : 6,
            description : desc([
                "When I cast an Enchantment spell (like Charm Person) with a spell slot that targets",
                "an additional creature when upcast, I can increase the spell's effective level by 1."
            ]),
            usages : "Int mod per ",
            usagescalc : "event.value = Math.max(1, What('Int Mod'));",
            recovery : "long rest"
        },
        "subclassfeature10" : {
            name : "Instinctive Charm",
            source : [["AU", 0]],
            minlevel : 10,
            description : desc([
                "When a visible creature within 30 ft hits me with an attack roll, I can use a Reaction.",
                "The attacker makes a Wis save. On a fail, the attack misses me and instead targets",
                "another creature within the attack's range (my choice).",
                "I can do this once per Long Rest, or by casting an Enchantment spell with a spell slot."
            ]),
            usages : 1,
            recovery : "long rest",
            altResource : "Enchantment Spell",
            action : [["reaction", ""]]
        },
        "subclassfeature14" : {
            name : "Alter Memories",
            source : [["AU", 0]],
            minlevel : 14,
            description : desc([
                "When I cast an Enchantment spell that Charms using a spell slot, I can choose one",
                "target. That creature remains unaware of being Charmed by me.",
                "Once before the spell ends, I can use a Magic action to force that creature to make",
                "an Int save. On a fail, it loses hours of memory equal to 1 + my Int mod (min 1 hour).",
                "I can choose to erase less time, not exceeding the duration of the Enchantment spell."
            ]),
            action : [["action", " (erase memories)"]]
        }
    }
});
AddSubClass("wizard", "necromancer", {
    regExpSearch : /necromancy|necromancer/i,
    subname : "Necromancer",
    fullname : "Necromancer",
    source : [["AU", 0]],
    features : {
        "subclassfeature3" : {
            name : "Necromancy Savant",
            source : [["AU", 0]],
            minlevel : 3,
            description : desc([
                "I add two Wizard Necromancy spells (max level 2) to my spellbook for free.",
                "Whenever I gain access to a new level of Wizard spell slots, I can add one",
                "Wizard Necromancy spell to my spellbook for free."
            ])
        },
        "subclassfeature3.1" : {
            name : "Necromancy Spellbook",
            source : [["AU", 0]],
            minlevel : 3,
            description : desc([
                "I gain Resistance to Necrotic damage and add Find Familiar to my spellbook.",
                "When cast, I can choose its normal form (as an Undead) or a Skeleton or Zombie.",
                "When I take the Attack action, I can forgo one attack to let my familiar attack as a Reaction.",
                "Undead Vitality: When I cast a Necromancy spell with a spell slot, I can heal an",
                "Undead within 60 ft by a number of HP equal to the expended slot's level + my Wizard level."
            ]),
            dmgres : ["Necrotic"],
            spellcastingBonus : {
                name : "Necromancy Spellbook",
                spells : ["find familiar"],
                selection : ["find familiar"],
                times : 1
            }
        },
        "subclassfeature6" : {
            name : "Grave Power",
            source : [["AU", 0]],
            minlevel : 6,
            description : desc([
                "While holding my spellbook, I gain two necromantic benefits:",
                "\u2022 Grave Resilience: When I use Arcane Recovery, my Exhaustion level decreases by 1.",
                "\u2022 Overwhelming Necrosis: My Wizard spells/features ignore Necrotic damage Resistance."
            ])
        },
        "subclassfeature6.1" : {
            name : "Undead Thralls",
            source : [["AU", 0]],
            minlevel : 6,
            description : desc([
                "I always have Animate Dead prepared. Once per Long Rest, I can cast it for free.",
                "When cast this way, the spell's effective level is increased by 1.",
                "While holding my spellbook, Undead I create/summon with a Necromancy spell gain:",
                "\u2022 Fortitude: Its max and current HP increase by my Int mod + half my Wizard level.",
                "\u2022 Withering Strike: Its attacks deal extra Necrotic damage equal to my Int mod (min 1)."
            ]),
            usages : 1,
            recovery : "long rest",
            spellcastingBonus : {
                name : "Undead Thralls",
                spells : ["animate dead"],
                selection : ["animate dead"],
                times : 1,
								firstCol : "oncelr+markedbox",
            }
        },
        "subclassfeature10" : {
            name : "Harvest Undead",
            source : [["AU", 0]],
            minlevel : 10,
            description : desc([
                "Immediately after I become Bloodied but don't drop to 0 HP from taking damage, I can",
                "use my Reaction to reduce a controlled Undead I can see to 0 HP.",
                "I then immediately regain Hit Points equal to my Wizard level."
            ]),
            action : [["reaction", ""]]
        },
        "subclassfeature14" : {
            name : "Death's Master",
            source : [["AU", 0]],
            minlevel : 14,
            description : desc([
                "While holding my spellbook, I gain mastery over undeath:",
                "\u2022 Bolster Undead (Bonus Action): Any number of my created/summoned Undead within",
                "  60 ft gain Temp HP equal to my Wizard level (1/Long Rest).",
                "\u2022 Extinguish Undead: When an Undead I see drops to 0 HP, it explodes (10-ft Emanation).",
                "  Dex save or take Necrotic dmg equal to half its unexpended HD in d6s (min 1d6) and lose",
                "  Reactions until its next turn; save halves. If uncontrolled, costs Reaction \u0026 5+ slot."
            ]),
            action : [
                ["bonus action", " (Bolster)"], 
                ["reaction", " (Extinguish unowned)"]
            ],
            extraLimitedFeatures : [{
                name : "Bolster Undead",
                usages : 1,
                recovery : "long rest"
            }]
        }
    }
});
AddSubClass("wizard", "transmuter", {
    regExpSearch : /transmutation|transmuter/i,
    subname : "Transmuter",
    fullname : "Transmuter",
    source : [["AU", 0]],
    features : {
        "subclassfeature3" : {
            name : "Transmutation Savant",
            source : [["AU", 0]],
            minlevel : 3,
            description : desc([
                "I add two Wizard Transmutation spells (max level 2) to my spellbook for free.",
                "Whenever I gain access to a new level of Wizard spell slots, I can add one",
                "Wizard Transmutation spell to my spellbook for free."
            ])
        },
        "subclassfeature3.1" : {
            name : "Transmuter's Stone",
            source : [["AU", 0]],
            minlevel : 3,
            description : desc([
                "I can create a magic stone (Tiny object) over a Long Rest, acting as my spell focus.",
                "The bearer gains Constitution saving throw proficiency and a benefit of my choice.",
                "I can change the benefit when I cast a Transmutation spell with a spell slot.",
                "Use the 'Choose Feature' button to select the active benefit(s)."
            ]),
            saves : ["Con"],
			extraname : "Transmuter's Stone Options",
			extrachoices : [
                "Darkvision", "Resistance (Acid)", "Resistance (Cold)", "Resistance (Fire)", "Resistance (Lightning)", "Resistance (Poison)", "Resistance (Thunder)", "Speed", "Mighty Build (level 10)", "Tremorsense (level 10)"
            ],
            extraTimes : levels.map(function (n) { return n < 10 ? 1 : 2; }),
            "darkvision" : {
                name : "Transmuter's Stone: Darkvision",
                description : " [bearer gains Darkvision 60 ft, or +60 ft if they already have it]",
                vision : [["Darkvision", "+60"]]
            },
            "resistance (acid)" : {
                name : "Transmuter's Stone: Acid Resistance",
                description : " [bearer gains Resistance to Acid damage]",
                dmgres : ["Acid"]
            },
            "resistance (cold)" : {
                name : "Transmuter's Stone: Cold Resistance",
                description : " [bearer gains Resistance to Cold damage]",
                dmgres : ["Cold"]
            },
            "resistance (fire)" : {
                name : "Transmuter's Stone: Fire Resistance",
                description : " [bearer gains Resistance to Fire damage]",
                dmgres : ["Fire"]
            },
            "resistance (lightning)" : {
                name : "Transmuter's Stone: Lightning Resistance",
                description : " [bearer gains Resistance to Lightning damage]",
                dmgres : ["Lightning"]
            },
            "resistance (poison)" : {
                name : "Transmuter's Stone: Poison Resistance",
                description : " [bearer gains Resistance to Poison damage]",
                dmgres : ["Poison"]
            },
            "resistance (thunder)" : {
                name : "Transmuter's Stone: Thunder Resistance",
                description : " [bearer gains Resistance to Thunder damage]",
                dmgres : ["Thunder"]
            },
            "speed" : {
                name : "Transmuter's Stone: Speed",
                description : " [bearer's Speed increases by 10 ft]",
                speed : { allModes : "+10" }
            },
            "mighty build (level 10)" : {
                name : "Transmuter's Stone: Mighty Build",
                prereqeval : function(v) { return classes.known.wizard.level >= 10; },
                description : " [bearer has Adv. on Str saves and counts as 1 size larger for carrying capacity]",
                savetxt : { adv_vs : ["strength"] },
                carryingCapacity : 2
            },
            "tremorsense (level 10)" : {
                name : "Transmuter's Stone: Tremorsense",
                prereqeval : function(v) { return classes.known.wizard.level >= 10; },
                description : " [bearer gains Tremorsense 30 ft]",
                vision : [["Tremorsense", 30]]
            }
        },
        "subclassfeature3.2" : {
            name : "Wondrous Alteration",
            source : [["AU", 0]],
            minlevel : 3,
            description : desc([
                "I always have Alter Self prepared and can cast it once per Long Rest for free.",
                "While under the effects of Alter Self, I gain an additional benefit per option:",
                "\u2022 Aquatic Adaptation: I can take the Dash action as a Bonus Action while underwater.",
                "\u2022 Change Appearance: I have Advantage on Charisma (Deception) checks.",
                "\u2022 Natural Weapons: My growth's damage increases to 2d6. I gain Adv. on Con saves",
                "  to maintain Concentration."
            ]),
            usages : 1,
            recovery : "long rest",
            spellcastingBonus : {
                name : "Wondrous Alteration",
                spells : ["alter self"],
                selection : ["alter self"],
                times : 1,
				firstCol : "oncelr+markedbox",
            }
        },
        "subclassfeature6" : {
            name : "Empowered Transmutation",
            source : [["AU", 0]],
            minlevel : 6,
            description : desc([
                "When I use a spell slot to cast a Transmutation spell that doesn't make an attack roll",
                "or force a saving throw (like Fly or Magic Weapon), I can increase its effective level by 1."
            ]),
            usages : "Intelligence modifier per ",
            usagescalc : "event.value = Math.max(1, What('Int Mod'));",
            recovery : "long rest"
        },
        "subclassfeature10" : {
            name : "Potent Stone",
            source : [["AU", 0]],
            minlevel : 10,
            description : desc([
                "My Transmuter's Stone can now hold up to two benefits. I can't choose the same",
                "option twice, except Resistance (must be different damage types).",
                "Mighty Build and Tremorsense are added to the list of choices."
            ])
        },
        "subclassfeature10.1" : {
            name : "Shape-Shifter",
            source : [["AU", 0]],
            minlevel : 10,
            description : desc([
                "I always have Polymorph prepared and can cast it once per Long Rest for free.",
                "Once per Long Rest, when I target myself with it, I can modify the spell to:",
                "\u2022 Retain my memories, speech, Int/Wis/Cha, proficiencies, class features, and feats.",
                "\u2022 Cast Transmutation spells that don't have costly or consumed Material components."
            ]),
            usages : 1,
            recovery : "long rest",
            spellcastingBonus : {
                name : "Shape-Shifter",
                spells : ["polymorph"],
                selection : ["polymorph"],
                times : 1,
				firstCol : "oncelr+markedbox",
            },
            extraLimitedFeatures : [{
                name : "Modify Self-Polymorph",
                usages : 1,
                recovery : "long rest"
            }]
        },
        "subclassfeature14" : {
            name : "Master Transmuter",
            source : [["AU", 0]],
            minlevel : 14,
            description : desc([
                "As a Magic action while carrying my Transmuter's Stone, I can consume it to gain one",
                "of the following benefits (destroys the stone unless I expend a 7+ level spell slot):",
                "\u2022 Major Transformation: Transmute \u2264 10-ft Cube nonmagic object to another (10 mins).",
                "\u2022 Panacea: Touch creature to heal half max HP; cure curses, contagions, Poison/Petrified.",
                "\u2022 Restore Life: Cast Raise Dead for free, using the stone as the material component.",
                "\u2022 Restore Youth: Touch willing creature; reduce Exhaustion to 0, appears 3d10 yrs younger."
            ]),
            action : [["action", " (consume stone)"]],
            altResource : "SS 7+"
        }
    }
});
	//Backgrounds
BackgroundList["agent of the ninth quill"] = {
    regExpSearch: /^(?=.*agent)(?=.*ninth)(?=.*quill).*$/i,
    name: "Agent of the Ninth Quill",
    source: [["AU", 21]],
    scorestxt: "+2 to one and +1 to another -or- +1 to all three: Dexterity, Intelligence, and Charisma",
    skills: ["Arcana", "Sleight of Hand"],
    toolProfs: [["Thieves' tools", "Dex"]],
    gold: 17,
    equipleft: [
        ["Thieves' tools", "", 1],
        ["Iron spikes", 10, 5],
        ["Rope, hempen", "", 10]
    ],
    equipright: [
        ["Traveler's clothes", "", 4],
        ["Dagger", "", 1],
        ["Light hammer", "", 2],
        ["Belt pouch (with coins)", "", 1]
    ],
    equip1stPage: {
        weapons: ["Dagger", "Light hammer"]
    },
    feature: "Agent of the Ninth Quill"
};
BackgroundFeatureList["agent of the ninth quill"] = {
    description: "My sharp mind and keen burgling skills led me to fall in with the Ninth Quill, a collective of thieves, saboteurs, and spies who steal magical lore and relics. Through my escapades, I've developed cunning skills and magical tricks to further my spy craft.",
    source: [["AU", 21]],
    featsAdd: ["Arcane Infiltrator"]
};
BackgroundList["bejeweled conclave spy"] = {
    regExpSearch: /^(?=.*bejeweled)(?=.*conclave)(?=.*spy).*$/i,
    name: "Bejeweled Conclave Spy",
    source: [["AU", 21]],
    scorestxt: "+2 to one and +1 to another -or- +1 to all three: Dexterity, Wisdom, and Charisma",
    skills: ["Deception", "Perception"],
    toolProfs: [["Disguise kit", "Cha"]],
    gold: 5,
    equipleft: [
        ["Disguise kit", "", 3],
        ["Perfume (vial)", "", ""]
    ],
    equipright: [
        ["Fine clothes", "", 6],
        ["Belt pouch (with coins)", "", 1]
    ],
    feature: "Bejeweled Conclave Spy"
};
BackgroundFeatureList["bejeweled conclave spy"] = {
    description: "Publicly, I'm a courtier, a mediator, or an entertainer. But behind that glamorous visage is a mind honed for gathering secrets. Trained by the enchanters of the Bejeweled Conclave, I know how to use my charm, wit, and magic to infiltrate and broker deals.",
    source: [["AU", 21]],
    featsAdd: ["Arcane Eloquence"]
};
BackgroundList["cosmic dawn experiment"] = {
    regExpSearch: /^(?=.*cosmic)(?=.*dawn)(?=.*experiment).*$/i,
    name: "Cosmic Dawn Experiment",
    source: [["AU", 22]],
    scorestxt: "+2 to one and +1 to another -or- +1 to all three: Strength, Dexterity, and Constitution",
    skills: ["Athletics", "Survival"],
    toolProfs: [["Artisan's tools", 1]],
    gold: 30,
    equipleft: [
        ["Artisan's tools (same as proficiency)", "", 5]
    ],
    equipright: [
        ["Robe", "", 4],
        ["Traveler's clothes", "", 4],
        ["Backpack", "", 5],
        ["Belt pouch (with coins)", "", 1]
    ],
    feature: "Cosmic Dawn Experiment"
};
BackgroundFeatureList["cosmic dawn experiment"] = {
    description: "My body has been warped by the transmutation practices of the Bringers of the Cosmic Dawn. Perhaps I was inadvertently caught up in an experiment, or I sought to improve my physical form. Whatever the case, I use my strange anatomy to my benefit.",
    source: [["AU", 22]],
    featsAdd: ["Transmuted Anatomy"]
};
BackgroundList["covenant of the grave recruit"] = {
    regExpSearch: /^(?=.*covenant)(?=.*grave)(?=.*recruit).*$/i,
    name: "Covenant of the Grave Recruit",
    source: [["AU", 22]],
    scorestxt: "+2 to one and +1 to another -or- +1 to all three: Strength, Intelligence, and Wisdom",
    skills: ["History", "Medicine"],
    toolProfs: [["Herbalism kit", "Int"]],
    gold: 16,
    equipleft: [
        ["Herbalism kit", "", 3],
        ["Book (anatomy)", "", 5],
        ["Shovel", "", 5]
    ],
    equipright: [
        ["Traveler's clothes", "", 4],
        ["Dagger", "", 1],
        ["Belt pouch (with coins)", "", 1]
    ],
    equip1stPage: {
        weapons: ["Dagger"]
    },
    feature: "Covenant of the Grave Recruit"
};
BackgroundFeatureList["covenant of the grave recruit"] = {
    description: "Death has always fascinated me. I've studied that morbid topic alongside members of the Covenant of the Grave, analyzing the macabre with scientific precision. Through these studies, I've amassed knowledge of medication, necromancy, and history.",
    source: [["AU", 22]],
    featsAdd: ["Arcane Undertaker"]
};
BackgroundList["crucible storm chaser"] = {
    regExpSearch: /^(?=.*crucible)(?=.*storm)(?=.*chaser).*$/i,
    name: "Crucible Storm Chaser",
    source: [["AU", 23]],
    scorestxt: "+2 to one and +1 to another -or- +1 to all three: Strength, Constitution, and Intelligence",
    skills: ["Athletics", "Nature"],
    toolProfs: [["Glassblower's tools", "Dex"]],
    gold: 15,
    equipleft: [
        ["Glassblower's tools", "", 5],
        ["Rope, hempen", "", 10]
    ],
    equipright: [
        ["Traveler's clothes", "", 4],
        ["Backpack", "", 5],
        ["Belt pouch (with coins)", "", 1]
    ],
    feature: "Crucible Storm Chaser"
};
BackgroundFeatureList["crucible storm chaser"] = {
    description: "My daredevil tendencies and thirst for excitement led me to the Crucible Keepers, dedicated to studying catastrophes. From playing with molten glass to charging into a hurricane's eye, I thrive when disaster is mere steps away.",
    source: [["AU", 23]],
    featsAdd: ["Arcane Overload"]
};
BackgroundList["familiar trainer"] = {
    regExpSearch: /^(?=.*familiar)(?=.*trainer).*$/i,
    name: "Familiar Trainer",
    source: [["AU", 23]],
    scorestxt: "+2 to one and +1 to another -or- +1 to all three: Constitution, Intelligence, and Wisdom",
    skills: ["Animal Handling", "Arcana"],
    toolProfs: [["Gaming set", 1]],
    gold: 44,
    equipleft: [
        ["Gaming set (same as proficiency)", "", ""],
        ["Bedroll", "", 7],
        ["Bell", "", ""],
        ["String (10 ft)", "", ""],
        ["Tinderbox", "", 1],
        ["Waterskin", "", 5]
    ],
    equipright: [
        ["Traveler's clothes", "", 4],
        ["Quarterstaff", "", 4],
        ["Belt pouch (with coins)", "", 1]
    ],
    equip1stPage: {
        weapons: ["Quarterstaff"]
    },
    feature: "Familiar Trainer"
};
BackgroundFeatureList["familiar trainer"] = {
    description: "A magical familiar bonded with me when I was young. Now, I can't imagine life without my furry (or feathery, scaly, or slimy) friend at my side. I've learned to work in tandem with them, and they are quick to remind me of the small joys in life.",
    source: [["AU", 23]],
    featsAdd: ["Familiar Friend"]
};
BackgroundList["horizon weaver initiate"] = {
    regExpSearch: /^(?=.*horizon)(?=.*weaver)(?=.*initiate).*$/i,
    name: "Horizon Weaver Initiate",
    source: [["AU", 24]],
    scorestxt: "+2 to one and +1 to another -or- +1 to all three: Dexterity, Constitution, and Wisdom",
    skills: ["Acrobatics", "Survival"],
    toolProfs: [["Weaver's tools", "Dex"]],
    gold: 18,
    equipleft: [
        ["Weaver's tools", "", 5],
        ["Map", "", ""],
        ["Rope, hempen", "", 10]
    ],
    equipright: [
        ["Traveler's clothes", "", 4],
        ["Shortbow", "", 2],
        ["Quiver, with:", "", 1],
        ["- Arrows", 20, 0.05],
        ["Belt pouch (with coins)", "", 1]
    ],
    equip1stPage: {
        weapons: ["Shortbow"],
        ammo: [["Arrows", 20]]
    },
    feature: "Horizon Weaver Initiate"
};
BackgroundFeatureList["horizon weaver initiate"] = {
    description: "My adolescence was marked by unquenchable wanderlust. Along the way, I encountered the adventurous conjurers of the Horizon Weavers, who taught me some of their teleportation magic to further my explorations.",
    source: [["AU", 24]],
    featsAdd: ["Portal Jumper"]
};
BackgroundList["phantasmic circus trouper"] = {
    regExpSearch: /^(?=.*phantasmic)(?=.*circus)(?=.*trouper).*$/i,
    name: "Phantasmic Circus Trouper",
    source: [["AU", 24]],
    scorestxt: "+2 to one and +1 to another -or- +1 to all three: Dexterity, Constitution, and Charisma",
    skills: ["Deception", "Performance"],
    toolProfs: [["Disguise kit", "Cha"]],
    gold: 12,
    equipleft: [
        ["Disguise kit", "", 3],
        ["Gaming set (any)", "", ""],
        ["Costume clothes", "", 4],
        ["Mirror, steel", "", 0.5]
    ],
    equipright: [
        ["Traveler's clothes", "", 4],
        ["Belt pouch (with coins)", "", 1]
    ],
    feature: "Phantasmic Circus Trouper"
};
BackgroundFeatureList["phantasmic circus trouper"] = {
    description: "Whether as a performer or a circus hand, I found a home among the members of the Phantasmic Circus. As I traveled bringing magic to excited audiences, I learned illusion magic and honed my talents for performance and misdirection.",
    source: [["AU", 24]],
    featsAdd: ["Arcane Artist"]
};
BackgroundList["seer apprentice"] = {
    regExpSearch: /^(?=.*seer)(?=.*apprentice).*$/i,
    name: "Seer Apprentice",
    source: [["AU", 25]],
    scorestxt: "+2 to one and +1 to another -or- +1 to all three: Intelligence, Wisdom, and Charisma",
    skills: ["History", "Insight"],
    toolProfs: [["Navigator's tools", "Wis"]],
    gold: 11,
    equipleft: [
        ["Navigator's tools", "", 2],
        ["Candle", 8, ""],
        ["Ink (1 oz bottle)", "", ""],
        ["Ink pen", "", ""],
        ["Parchment (sheets)", 9, ""],
        ["Tinderbox", "", 1]
    ],
    equipright: [
        ["Traveler's clothes", "", 4],
        ["Pouch (with coins)", "", 1]
    ],
    feature: "Seer Apprentice"
};
BackgroundFeatureList["seer apprentice"] = {
    description: "As an apprentice among the Seers of Sea and Sky, I learned to interpret minor omens from the clouds above and the fathoms below. The organization's rich network of libraries furthered my education, and I now impart advice and aid to others.",
    source: [["AU", 25]],
    featsAdd: ["Arcane Omens"]
};
BackgroundList["ward of the sheltering hands"] = {
    regExpSearch: /^(?=.*ward)(?=.*sheltering)(?=.*hands).*$/i,
    name: "Ward of the Sheltering Hands",
    source: [["AU", 25]],
    scorestxt: "+2 to one and +1 to another -or- +1 to all three: Constitution, Wisdom, and Charisma",
    skills: ["Insight", "Medicine"],
    toolProfs: [["Cook's utensils", "Wis"]],
    gold: 40,
    equipleft: [
        ["Cook's utensils", "", 8],
        ["Blanket", "", 3],
        ["Healer's kit", "", 3],
        ["Lamp", "", 1],
        ["Oil (flasks)", 3, 1],
        ["Tinderbox", "", 1],
        ["Waterskin", "", 5]
    ],
    equipright: [
        ["Traveler's clothes", "", 4],
        ["Belt pouch (with coins)", "", 1]
    ],
    feature: "Ward of the Sheltering Hands"
};
BackgroundFeatureList["ward of the sheltering hands"] = {
    description: "A turn of ill luck led me to the Sheltering Hands, an altruistic organization dedicated to defending the downtrodden. They helped me regain my footing and taught me some protective magic—in the hope that one day I too would shelter the less fortunate.",
    source: [["AU", 25]],
    featsAdd: ["Arcane Safeguard"]
};
	//feats
		//Origin feats
FeatsList["arcane artist"] = {
    name: "Arcane Artist",
    source: [["AU", 26]],
    type: "origin",
    description: "I learn the Minor Illusion cantrip (Int, Wis, or Cha). When I cast an Illusion spell, I can choose one ally within 30 ft who can see me to gain Heroic Inspiration (1/Long Rest).",
    descriptionFull: [
        "You gain the following benefits.",
        "Cantrip. You learn the Minor Illusion cantrip. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this feat).",
        "Inspiring Magic. When you cast a spell from the Illusion school, you can choose one ally within 30 feet of yourself who can see you. That ally gains Heroic Inspiration. Once you use this benefit, you can't use it again until you finish a Long Rest."
    ],
    spellcastingAbility: [4, 5, 6],
    spellcastingBonus: [{
        name: "Arcane Artist",
        spells: ["minor illusion"],
        selection: ["minor illusion"],
		times: 1,
    }],
    extraLimitedFeatures: [{
        name: "Inspiring Magic",
        usages: 1,
        recovery: "long rest"
    }]
};
FeatsList["arcane eloquence"] = {
    name: "Arcane Eloquence",
    source: [["AU", 26]],
    type: "origin",
    description: "I learn the Vicious Mockery cantrip (Int, Wis, or Cha). When I make a Charisma (Deception, Intimidation, or Persuasion) check, I can roll 1d4 and add it to the check.",
    descriptionFull: [
        "You gain the following benefits.",
        "Cantrip. You learn the Vicious Mockery cantrip. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this feat).",
        "Smooth Talker. When you make a Charisma (Deception, Intimidation, or Persuasion) check, you can roll 1d4 and add the number rolled to the ability check."
    ],
    spellcastingAbility: [4, 5, 6],
    spellcastingBonus: [{
        name: "Arcane Eloquence",
        spells: ["vicious mockery"],
        selection: ["vicious mockery"],
		times: 1,
    }],
};
FeatsList["arcane infiltrator"] = {
    name: "Arcane Infiltrator",
    source: [["AU", 26]],
    type: "origin",
    description: "I learn the Friends cantrip (Int, Wis, or Cha). I can take the Dodge action as a Bonus Action a number of times equal to my Proficiency Bonus per Long Rest.",
    descriptionFull: [
        "You gain the following benefits.",
        "Cantrip. You learn the Friends cantrip. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this feat).",
        "Cunning Diversion. You can take the Dodge action as a Bonus Action. You can use this benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest."
    ],
    spellcastingAbility: [4, 5, 6],
    spellcastingBonus: [{
        name: "Arcane Infiltrator",
        spells: ["friends"],
        selection: ["friends"],
		times: 1,
    }],
    action: [["bonus action", "Dodge (Cunning Diversion)"]],
    usages: "Proficiency bonus per ",
    usagescalc: "event.value = Number(How('Proficiency Bonus'));",
    recovery: "long rest"
};
FeatsList["arcane omens"] = {
    name: "Arcane Omens",
    source: [["AU", 27]],
    type: "origin",
    description: "I learn the Guidance cantrip (Int, Wis, or Cha). When I or a creature I can see within 30 ft fails a saving throw, I can use a Reaction to add 1d4 to the roll. I can do this a number of times equal to my Prof Bonus per Long Rest.",
    descriptionFull: [
        "You gain the following benefits.",
        "Cantrip. You learn the Guidance cantrip. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this feat).",
        "Helpful Premonition. When you or a creature you can see within 30 feet of yourself fails a saving throw, you can take a Reaction to roll 1d4 and add the number rolled to the save's total, potentially turning the failure into a success. You can use this benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest."
    ],
    spellcastingAbility: [4, 5, 6],
    spellcastingBonus: [{
        name: "Arcane Omens",
        spells: ["guidance"],
        selection: ["guidance"],
		times: 1,
    }],
    action: [["reaction", "Helpful Premonition"]],
    usages: "Proficiency bonus per ",
    usagescalc: "event.value = Number(How('Proficiency Bonus'));",
    recovery: "long rest"
};
FeatsList["arcane overload"] = {
    name: "Arcane Overload",
    source: [["AU", 27]],
    type: "origin",
    description: "I learn the Fire Bolt cantrip (Int, Wis, or Cha). When I cast an Evocation spell and deal damage with it, I can add my Proficiency Bonus to one damage roll of that spell (1/Long Rest).",
    descriptionFull: [
        "You gain the following benefits.",
        "Cantrip. You learn the Fire Bolt cantrip. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this feat).",
        "Power Surge. When you cast an Evocation spell and deal damage with it, you can add your Proficiency Bonus to one damage roll of that spell. Once you use this benefit, you can't do so again until you finish a Long Rest."
    ],
    spellcastingAbility: [4, 5, 6],
    spellcastingBonus: [{
        name: "Arcane Overload",
        spells: ["fire bolt"],
        selection: ["fire bolt"],
		times: 1,
    }],
    extraLimitedFeatures: [{
        name: "Power Surge",
        usages: 1,
        recovery: "long rest"
    }]
};
FeatsList["arcane safeguard"] = {
    name: "Arcane Safeguard",
    source: [["AU", 27]],
    type: "origin",
    description: "I learn the Resistance cantrip (Int, Wis, Cha). I can cast it as a Bonus Action a number of times equal to my Prof Bonus per Long Rest. When I take the Help action to assist an ally's ability check, they gain Temp HP equal to my Prof Bonus.",
    descriptionFull: [
        "You gain the following benefits.",
        "Cantrip. You learn the Resistance cantrip. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this feat). You can cast the Resistance cantrip as a Bonus Action. You can do so a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
        "Sheltering Aid. When you take the Help action to assist with an ally's ability check, that ally gains a number of Temporary Hit Points equal to your Proficiency Bonus."
    ],
    spellcastingAbility: [4, 5, 6],
    spellcastingBonus: [{
        name: "Arcane Safeguard",
        spells: ["resistance"],
        selection: ["resistance"],
		times : 1,
    }],
    action: [["bonus action", "Resistance Cantrip (Arcane Safeguard)"]],
    usages: "Proficiency bonus per ",
    usagescalc: "event.value = Number(How('Proficiency Bonus'));",
    recovery: "long rest"
};
FeatsList["arcane undertaker"] = {
    name: "Arcane Undertaker",
    source: [["AU", 27]],
    type: "origin",
    description: "I learn one Cleric/Wizard Necromancy cantrip (Int, Wis, Cha). I can roll 1d4 and add it to Int (History) and Wis (Medicine) checks. When I take the Help action to stabilize a creature with 0 HP, I gain Heroic Inspiration (1/Long Rest).",
    descriptionFull: [
        "You gain the following benefits.",
        "Cantrip. You learn one Cleric or Wizard cantrip of your choice. The cantrip must be from the Necromancy school. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this feat).",
        "Knowledge from the Dead. When you make an Intelligence (History) or Wisdom (Medicine) check, you can roll 1d4 and add the number rolled to the ability check.",
        "Understanding of Death. When you take the Help action to stabilize a creature with 0 Hit Points, you gain Heroic Inspiration. Once you use this benefit, you can't use it again until you finish a Long Rest."
    ],
    spellcastingAbility: [4, 5, 6],
    spellcastingBonus: [{
        name: "Necromancy Cantrip",
        "class": ["cleric", "wizard"],
        school: ["Necro"],
        level: [0, 0],
		times: 1,
    }],
    extraLimitedFeatures: [{
        name: "Understanding of Death (Inspiration)",
        usages: 1,
        recovery: "long rest"
    }]
};
FeatsList["familiar friend"] = {
    name: "Familiar Friend",
    source: [["AU", 27]],
    type: "origin",
    description: "I always have Find Familiar prepared (Int, Wis, Cha). I can cast it 1/Long Rest without a slot or materials (or normally). My familiar's HP increases by twice my level. When making a proficient ability check while my familiar is within 5 ft, I can gain Advantage (Prof Bonus times/Long Rest).",
    descriptionFull: [
        "You gain the following benefits.",
        "Faithful Companion. You always have the Find Familiar spell prepared. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this feat). You can cast it once without a spell slot or Material components, and you regain the ability to cast it in this way when you finish a Long Rest. You can also cast the spell using any spell slots you have.",
        "Fortified Familiar. When you cast the Find Familiar spell, your familiar's Hit Point maximum and current Hit Points are increased by an amount equal to twice your character level.",
        "Helpful Friend. When you make an ability check using a skill in which you have proficiency while your familiar is within 5 feet of you, you gain Advantage on the check. You can use this benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest."
    ],
    spellcastingAbility: [4, 5, 6],
    spellcastingBonus: [{
        name: "Faithful Companion",
        spells: ["find familiar"],
        selection: ["find familiar"],
		times: 1,
        firstCol: "oncelr+markedbox"
    }],
    usages: "Proficiency bonus per ",
    usagescalc: "event.value = Number(How('Proficiency Bonus'));",
    recovery: "long rest"
};
FeatsList["portal jumper"] = {
    name: "Portal Jumper",
    source: [["AU", 27]],
    type: "origin",
    description: "I gain Resistance to Necrotic, Psychic, or Radiant damage (my choice). I can spend 15 ft of movement to teleport to an unoccupied space I can see within 15 ft. I can use this teleport a number of times equal to my Prof Bonus per Long Rest (only once per turn).",
    descriptionFull: [
        "You gain the following benefits.",
        "Otherworldly Resilience. You have Resistance to one of the following damage types: Necrotic, Psychic, or Radiant (choose when you select this feat).",
        "Portal Step. You can spend 15 feet of movement to teleport to an unoccupied space you can see within 15 feet of yourself. You can use this benefit a number of times equal to your Proficiency Bonus but only once per turn, and you regain all expended uses when you finish a Long Rest."
    ],
    usages: "Proficiency bonus per ",
    usagescalc: "event.value = Number(How('Proficiency Bonus'));",
    recovery: "long rest",
    choices: ["Necrotic", "Psychic", "Radiant"],
    "necrotic": { dmgres: ["Necrotic"] },
    "psychic": { dmgres: ["Psychic"] },
    "radiant": { dmgres: ["Radiant"] }
};
FeatsList["transmuted anatomy"] = {
    name: "Transmuted Anatomy",
    source: [["AU", 28]],
    type: "origin",
    description: "My Speed increases by 5 ft. I have Advantage on saves against being shape-shifted against my will. When I fail a Constitution saving throw, I can use a Reaction to roll 1d4 and add it to the save. I can do this a number of times equal to my Prof Bonus per Long Rest.",
    descriptionFull: [
        "You gain the following benefits.",
        "Lengthened Stride. Your Speed increases by 5 feet.",
        "Resilient Anatomy. You have Advantage on saving throws against effects that would compel you to shape-shift against your will. Additionally, when you fail a Constitution saving throw, you can take a Reaction to roll 1d4 and add the number rolled to the save, potentially turning the failure into a success. You can use this benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest."
    ],
    speed: { allModes: "+5" },
    savetxt: { adv_vs: ["forced shape-shifting"] },
    action: [["reaction", "Resilient Anatomy (+1d4 to Con save)"]],
    usages: "Proficiency bonus per ",
    usagescalc: "event.value = Number(How('Proficiency Bonus'));",
    recovery: "long rest"
};		
		//General feats
FeatsList["abjuration adept"] = {
    name: "Abjuration Adept",
    source: [["AU", 28]],
    type: "general",
    prerequisite: "Level 4+, Spellcasting or Pact Magic Feature",
    prereqeval: function (v) { return v.characterLevel >= 4 && v.isSpellcastingClass; },
    descriptionFull: [
        "You gain the following benefits.",
        "Ability Score Increase. Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.",
        "Additional Spells. Your prowess allows you to always have certain spells at the ready. When you have spell slots of a level specified in the Abjuration Adept Spells table, you thereafter always have the spells listed for that level and lower prepared.",
        "Protective Ward. When you cast a spell from the Abjuration school using a spell slot, you or one creature you can see within 30 feet of yourself gains Temporary Hit Points equal to twice the level of spell slot expended."
    ],
    spellcastingBonus: {
        name: "Abjuration Adept Spells",
        spells: ["shield", "lesser restoration", "protection from energy", "banishment", "mass cure wounds"],
        selection: ["shield", "lesser restoration", "protection from energy", "banishment", "mass cure wounds"],
        times: 5,
        firstCol: "markedbox"
    },
    choices: ["Intelligence", "Wisdom", "Charisma"],
    choicesNotInMenu: true,
    "intelligence": {
        description: "I always have Shield, Lesser Restoration, Protection from Energy, Banishment, and Mass Cure Wounds prepared once I have the appropriate slots. When I cast an Abjuration spell with a slot, I or a creature within 30 ft gains Temp HP equal to twice the slot's level. [+1 Int]",
        spellcastingAbility: 4,
        scores: [0, 0, 0, 1, 0, 0]
    },
    "wisdom": {
        description: "I always have Shield, Lesser Restoration, Protection from Energy, Banishment, and Mass Cure Wounds prepared once I have the appropriate slots. When I cast an Abjuration spell with a slot, I or a creature within 30 ft gains Temp HP equal to twice the slot's level. [+1 Wis]",
        spellcastingAbility: 5,
        scores: [0, 0, 0, 0, 1, 0]
    },
    "charisma": {
        description: "I always have Shield, Lesser Restoration, Protection from Energy, Banishment, and Mass Cure Wounds prepared once I have the appropriate slots. When I cast an Abjuration spell with a slot, I or a creature within 30 ft gains Temp HP equal to twice the slot's level. [+1 Cha]",
        spellcastingAbility: 6,
        scores: [0, 0, 0, 0, 0, 1]
    }
};
FeatsList["conjuration adept"] = {
    name: "Conjuration Adept",
    source: [["AU", 28]],
    type: "general",
    prerequisite: "Level 4+, Spellcasting or Pact Magic Feature",
    prereqeval: function (v) { return v.characterLevel >= 4 && v.isSpellcastingClass; },
    descriptionFull: [
        "You gain the following benefits.",
        "Ability Score Increase. Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.",
        "Additional Spells. Your prowess allows you to always have certain spells at the ready. When you have spell slots of a level specified in the Conjuration Adept Spells table, you thereafter always have the spells listed for that level and lower prepared.",
        "Persistent Conjuration. While maintaining Concentration on a spell from the Conjuration school, you gain a bonus to Constitution saving throws to maintain this Concentration. This bonus is equal to the ability modifier of the score increased by this feat."
    ],
    spellcastingBonus: {
        name: "Conjuration Adept Spells",
        spells: ["entangle", "misty step", "conjure animals", "dimension door", "conjure elemental"],
        selection: ["entangle", "misty step", "conjure animals", "dimension door", "conjure elemental"],
        times: 5,
        firstCol: "markedbox"
    },
    choices: ["Intelligence", "Wisdom", "Charisma"],
    choicesNotInMenu: true,
    "intelligence": {
        description: "I always have Entangle, Misty Step, Conjure Animals, Dimension Door, and Conjure Elemental prepared once I have the slots. While Concentrating on a Conjuration spell, I gain my Int mod as a bonus to Con saves to maintain it. [+1 Int]",
        spellcastingAbility: 4,
        scores: [0, 0, 0, 1, 0, 0],
        savetxt: { text: ["+Int Mod to Con (Concentration) on Conjuration spells"] }
    },
    "wisdom": {
        description: "I always have Entangle, Misty Step, Conjure Animals, Dimension Door, and Conjure Elemental prepared once I have the slots. While Concentrating on a Conjuration spell, I gain my Wis mod as a bonus to Con saves to maintain it. [+1 Wis]",
        spellcastingAbility: 5,
        scores: [0, 0, 0, 0, 1, 0],
        savetxt: { text: ["+Wis Mod to Con (Concentration) on Conjuration spells"] }
    },
    "charisma": {
        description: "I always have Entangle, Misty Step, Conjure Animals, Dimension Door, and Conjure Elemental prepared once I have the slots. While Concentrating on a Conjuration spell, I gain my Cha mod as a bonus to Con saves to maintain it. [+1 Cha]",
        spellcastingAbility: 6,
        scores: [0, 0, 0, 0, 0, 1],
        savetxt: { text: ["+Cha Mod to Con (Concentration) on Conjuration spells"] }
    }
};
FeatsList["divination adept"] = {
    name: "Divination Adept",
    source: [["AU", 29]],
    type: "general",
    prerequisite: "Level 4+, Spellcasting or Pact Magic Feature",
    prereqeval: function (v) { return v.characterLevel >= 4 && v.isSpellcastingClass; },
    descriptionFull: [
        "You gain the following benefits.",
        "Ability Score Increase. Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.",
        "Additional Spells. Your prowess allows you to always have certain spells at the ready. When you have spell slots of a level specified in the Divination Adept Spells table, you thereafter always have the spells listed for that level and lower prepared.",
        "Prescient Intervention. When a creature you can see within 60 feet of yourself makes a D20 Test, you can take a Reaction to give that creature Advantage or Disadvantage (your choice) on that roll.",
        "Once you use this benefit, you can't do so again until you finish a Long Rest. You can also regain use of this feature when you cast a spell from the Divination school using a spell slot."
    ],
    action: [["reaction", "Prescient Intervention"]],
    usages: 1,
    recovery: "long rest",
    altResource: "Divination Spell",
    spellcastingBonus: {
        name: "Divination Adept Spells",
        spells: ["detect evil and good", "mind spike", "clairvoyance", "divination", "scrying"],
        selection: ["detect evil and good", "mind spike", "clairvoyance", "divination", "scrying"],
        times: 5,
        firstCol: "markedbox"
    },
    choices: ["Intelligence", "Wisdom", "Charisma"],
    choicesNotInMenu: true,
    "intelligence": {
        description: "I always have Detect Evil/Good, Mind Spike, Clairvoyance, Divination, and Scrying prepared once I have the slots. When a creature I see within 60 ft makes a D20 Test, I can use a Reaction to give them Advantage or Disadvantage (1/Long Rest, or regain by casting a Divination spell). [+1 Int]",
        spellcastingAbility: 4,
        scores: [0, 0, 0, 1, 0, 0]
    },
    "wisdom": {
        description: "I always have Detect Evil/Good, Mind Spike, Clairvoyance, Divination, and Scrying prepared once I have the slots. When a creature I see within 60 ft makes a D20 Test, I can use a Reaction to give them Advantage or Disadvantage (1/Long Rest, or regain by casting a Divination spell). [+1 Wis]",
        spellcastingAbility: 5,
        scores: [0, 0, 0, 0, 1, 0]
    },
    "charisma": {
        description: "I always have Detect Evil/Good, Mind Spike, Clairvoyance, Divination, and Scrying prepared once I have the slots. When a creature I see within 60 ft makes a D20 Test, I can use a Reaction to give them Advantage or Disadvantage (1/Long Rest, or regain by casting a Divination spell). [+1 Cha]",
        spellcastingAbility: 6,
        scores: [0, 0, 0, 0, 0, 1]
    }
};
FeatsList["elemental familiar"] = {
    name: "Elemental Familiar",
    source: [["AU", 29]],
    type: "general",
    prerequisite: "Level 4+, Familiar Friend feat",
    prereqeval: function (v) { return v.characterLevel >= 4 && classes.known.feats && classes.known.feats.indexOf("familiar friend") !== -1; },
    descriptionFull: [
        "You gain the following benefits.",
        "Ability Score Increase. Increase one ability score of your choice by 1, to a maximum of 20.",
        "Elemental Energy. You learn how to imbue your familiar with elemental power. When you cast the Find Familiar spell, choose Acid, Cold, Fire, Lightning, or Thunder damage. Your familiar is imbued with this energy until you cast Find Familiar again, granting it the following benefits:",
        "Elemental Resistance. Your familiar has Resistance to the chosen damage type.",
        "Energy Pulse. As a Bonus Action, you command your familiar to unleash a burst of elemental energy. Your familiar must be within 120 feet of you and take a Reaction to unleash this burst. Each creature in a 5-foot Emanation originating from your familiar makes a Dexterity saving throw (DC 8 plus your spellcasting ability modifier for the Find Familiar spell and your Proficiency Bonus). On a failed save, a creature takes 2d4 damage of the chosen type, and if the creature is Medium or smaller, it has the Prone condition."
    ],
    action: [["bonus action", "Energy Pulse (Command Familiar)"]],
    choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
    choicesNotInMenu: true,
    "strength": {
        description: "My Find Familiar is imbued with Acid, Cold, Fire, Lightning, or Thunder (gaining Resistance to it). As a Bonus Action, I can command it (within 120 ft) to use its Reaction for a 5-ft Emanation burst (Dex save vs spell DC; 2d4 dmg + Prone for Med/smaller). [+1 Str]",
        scores: [1, 0, 0, 0, 0, 0]
    },
    "dexterity": {
        description: "My Find Familiar is imbued with Acid, Cold, Fire, Lightning, or Thunder (gaining Resistance to it). As a Bonus Action, I can command it (within 120 ft) to use its Reaction for a 5-ft Emanation burst (Dex save vs spell DC; 2d4 dmg + Prone for Med/smaller). [+1 Dex]",
        scores: [0, 1, 0, 0, 0, 0]
    },
    "constitution": {
        description: "My Find Familiar is imbued with Acid, Cold, Fire, Lightning, or Thunder (gaining Resistance to it). As a Bonus Action, I can command it (within 120 ft) to use its Reaction for a 5-ft Emanation burst (Dex save vs spell DC; 2d4 dmg + Prone for Med/smaller). [+1 Con]",
        scores: [0, 0, 1, 0, 0, 0]
    },
    "intelligence": {
        description: "My Find Familiar is imbued with Acid, Cold, Fire, Lightning, or Thunder (gaining Resistance to it). As a Bonus Action, I can command it (within 120 ft) to use its Reaction for a 5-ft Emanation burst (Dex save vs spell DC; 2d4 dmg + Prone for Med/smaller). [+1 Int]",
        scores: [0, 0, 0, 1, 0, 0]
    },
    "wisdom": {
        description: "My Find Familiar is imbued with Acid, Cold, Fire, Lightning, or Thunder (gaining Resistance to it). As a Bonus Action, I can command it (within 120 ft) to use its Reaction for a 5-ft Emanation burst (Dex save vs spell DC; 2d4 dmg + Prone for Med/smaller). [+1 Wis]",
        scores: [0, 0, 0, 0, 1, 0]
    },
    "charisma": {
        description: "My Find Familiar is imbued with Acid, Cold, Fire, Lightning, or Thunder (gaining Resistance to it). As a Bonus Action, I can command it (within 120 ft) to use its Reaction for a 5-ft Emanation burst (Dex save vs spell DC; 2d4 dmg + Prone for Med/smaller). [+1 Cha]",
        scores: [0, 0, 0, 0, 0, 1]
    }
};
FeatsList["enchantment adept"] = {
    name: "Enchantment Adept",
    source: [["AU", 30]],
    type: "general",
    prerequisite: "Level 4+, Spellcasting or Pact Magic Feature",
    prereqeval: function (v) { return v.characterLevel >= 4 && v.isSpellcastingClass; },
    descriptionFull: [
        "You gain the following benefits.",
        "Ability Score Increase. Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.",
        "Additional Spells. Your prowess allows you to always have certain spells at the ready. When you have spell slots of a level specified in the Enchantment Adept Spells table, you thereafter always have the spells listed for that level and lower prepared.",
        "Subtle Enchantments. When you cast a spell from the Enchantment school using a spell slot, you can cast it without any Verbal, Somatic, or Material components, except Material components that are consumed by the spell or that have a cost specified in the spell."
    ],
    spellcastingBonus: {
        name: "Enchantment Adept Spells",
        spells: ["dissonant whispers", "enthrall", "hold person", "dominate beast", "modify memory"],
        selection: ["dissonant whispers", "enthrall", "hold person", "dominate beast", "modify memory"],
        times: 5,
        firstCol: "markedbox"
    },
    choices: ["Intelligence", "Wisdom", "Charisma"],
    choicesNotInMenu: true,
    "intelligence": {
        description: "I always have Dissonant Whispers, Enthrall, Hold Person, Dominate Beast, and Modify Memory prepared once I have the slots. When I cast an Enchantment spell with a slot, I can cast it without Verbal, Somatic, or non-costly/unconsumed Material components. [+1 Int]",
        spellcastingAbility: 4,
        scores: [0, 0, 0, 1, 0, 0]
    },
    "wisdom": {
        description: "I always have Dissonant Whispers, Enthrall, Hold Person, Dominate Beast, and Modify Memory prepared once I have the slots. When I cast an Enchantment spell with a slot, I can cast it without Verbal, Somatic, or non-costly/unconsumed Material components. [+1 Wis]",
        spellcastingAbility: 5,
        scores: [0, 0, 0, 0, 1, 0]
    },
    "charisma": {
        description: "I always have Dissonant Whispers, Enthrall, Hold Person, Dominate Beast, and Modify Memory prepared once I have the slots. When I cast an Enchantment spell with a slot, I can cast it without Verbal, Somatic, or non-costly/unconsumed Material components. [+1 Cha]",
        spellcastingAbility: 6,
        scores: [0, 0, 0, 0, 0, 1]
    }
};
FeatsList["evocation adept"] = {
    name: "Evocation Adept",
    source: [["AU", 30]],
    type: "general",
    prerequisite: "Level 4+, Spellcasting or Pact Magic Feature",
    prereqeval: function (v) { return v.characterLevel >= 4 && v.isSpellcastingClass; },
    descriptionFull: [
        "You gain the following benefits.",
        "Ability Score Increase. Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.",
        "Additional Spells. Your prowess allows you to always have certain spells at the ready. When you have spell slots of a level specified in the Evocation Adept Spells table, you thereafter always have the spells listed for that level and lower prepared.",
        "Fueled Evocation. Once per turn when you cast an Evocation spell and deal damage, you can roll up to two of your unexpended Hit Point Dice and add the total rolled to one of the spell's damage rolls. Those Hit Point Dice are then expended."
    ],
    spellcastingBonus: {
        name: "Evocation Adept Spells",
        spells: ["chromatic orb", "shatter", "fireball", "vitriolic sphere", "wall of force"],
        selection: ["chromatic orb", "shatter", "fireball", "vitriolic sphere", "wall of force"],
        times: 5,
        firstCol: "markedbox"
    },
    choices: ["Intelligence", "Wisdom", "Charisma"],
    choicesNotInMenu: true,
    "intelligence": {
        description: "I always have Chromatic Orb, Shatter, Fireball, Vitriolic Sphere, and Wall of Force prepared once I have the appropriate slots. Once per turn when I cast an Evocation spell and deal damage, I can roll up to two unexpended Hit Dice, add the total to one damage roll, and expend them. [+1 Int]",
        spellcastingAbility: 4,
        scores: [0, 0, 0, 1, 0, 0]
    },
    "wisdom": {
        description: "I always have Chromatic Orb, Shatter, Fireball, Vitriolic Sphere, and Wall of Force prepared once I have the appropriate slots. Once per turn when I cast an Evocation spell and deal damage, I can roll up to two unexpended Hit Dice, add the total to one damage roll, and expend them. [+1 Wis]",
        spellcastingAbility: 5,
        scores: [0, 0, 0, 0, 1, 0]
    },
    "charisma": {
        description: "I always have Chromatic Orb, Shatter, Fireball, Vitriolic Sphere, and Wall of Force prepared once I have the appropriate slots. Once per turn when I cast an Evocation spell and deal damage, I can roll up to two unexpended Hit Dice, add the total to one damage roll, and expend them. [+1 Cha]",
        spellcastingAbility: 6,
        scores: [0, 0, 0, 0, 0, 1]
    }
};
FeatsList["illusion adept"] = {
    name: "Illusion Adept",
    source: [["AU", 30]],
    type: "general",
    prerequisite: "Level 4+, Spellcasting or Pact Magic Feature",
    prereqeval: function (v) { return v.characterLevel >= 4 && v.isSpellcastingClass; },
    descriptionFull: [
        "You gain the following benefits.",
        "Ability Score Increase. Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.",
        "Additional Spells. Your prowess allows you to always have certain spells at the ready. When you have spell slots of a level specified in the Illusion Adept Spells table, you thereafter always have the spells listed for that level and lower prepared.",
        "Masterful Illusions. When you cast a spell from the Illusion school using a spell slot, you can cast it without any Verbal, Somatic, or Material components, except Material components that are consumed by the spell or that have a cost specified in the spell. Additionally, creatures have Disadvantage on Intelligence (Investigation) checks made to discern the true nature of illusions created by your spells."
    ],
    spellcastingBonus: {
        name: "Illusion Adept Spells",
        spells: ["silent image", "phantasmal force", "major image", "hallucinatory terrain", "seeming"],
        selection: ["silent image", "phantasmal force", "major image", "hallucinatory terrain", "seeming"],
        times: 5,
        firstCol: "markedbox"
    },
    choices: ["Intelligence", "Wisdom", "Charisma"],
    choicesNotInMenu: true,
    "intelligence": {
        description: "I always have Silent Image, Phantasmal Force, Major Image, Hallucinatory Terrain, and Seeming prepared once I have the slots. When I cast an Illusion spell with a slot, I can cast it without V, S, or non-costly M components. Creatures have Disadv. on Investigation vs my illusions. [+1 Int]",
        spellcastingAbility: 4,
        scores: [0, 0, 0, 1, 0, 0]
    },
    "wisdom": {
        description: "I always have Silent Image, Phantasmal Force, Major Image, Hallucinatory Terrain, and Seeming prepared once I have the slots. When I cast an Illusion spell with a slot, I can cast it without V, S, or non-costly M components. Creatures have Disadv. on Investigation vs my illusions. [+1 Wis]",
        spellcastingAbility: 5,
        scores: [0, 0, 0, 0, 1, 0]
    },
    "charisma": {
        description: "I always have Silent Image, Phantasmal Force, Major Image, Hallucinatory Terrain, and Seeming prepared once I have the slots. When I cast an Illusion spell with a slot, I can cast it without V, S, or non-costly M components. Creatures have Disadv. on Investigation vs my illusions. [+1 Cha]",
        spellcastingAbility: 6,
        scores: [0, 0, 0, 0, 0, 1]
    }
};
FeatsList["magic connoisseur"] = {
    name: "Magic Connoisseur",
    source: [["AU", 31]],
    type: "general",
    prerequisite: "Level 4+, Magic Initiate feat",
    prereqeval: function (v) { return v.characterLevel >= 4 && classes.known.feats && classes.known.feats.indexOf("magic initiate") !== -1; },
    descriptionFull: [
        "You gain the following benefits.",
        "Ability Score Increase. Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.",
        "Additional Spells. Choose a level 1 and a level 2 spell from the same list you selected for the Magic Initiate feat's cantrips. You always have those spells prepared. You can cast each spell once without a spell slot, and you regain the ability to cast it in this way when you finish a Long Rest. You can also cast those spells using any spell slots you have of the appropriate level. The spellcasting ability for these spells is the same as the spellcasting ability chosen for your Magic Initiate feat's spells.",
        "Spell Change. Whenever you gain a new level, you can replace one of the spells you chose for this feat with a different spell of the same level from the chosen spell list."
    ],
    scorestxt: "+1 Intelligence, Wisdom, or Charisma",
    choices: ["Cleric", "Druid", "Wizard"],
    "cleric": {
        description: "I learn a 1st-level and 2nd-level Cleric spell. They are always prepared, and I can cast each once per Long Rest for free (or use slots normally). Whenever I gain a level, I can swap one of these for another Cleric spell of the same level. [+1 Int, Wis, or Cha]",
        spellcastingAbility: [4, 5, 6],
        spellcastingBonus: [{
            name: "Level 1 Cleric Spell",
            "class": "cleric",
            level: [1, 1],
            firstCol: "oncelr+markedbox"
        }, {
            name: "Level 2 Cleric Spell",
            "class": "cleric",
            level: [2, 2],
            firstCol: "oncelr+markedbox"
        }]
    },
    "druid": {
        description: "I learn a 1st-level and 2nd-level Druid spell. They are always prepared, and I can cast each once per Long Rest for free (or use slots normally). Whenever I gain a level, I can swap one of these for another Druid spell of the same level. [+1 Int, Wis, or Cha]",
        spellcastingAbility: [4, 5, 6],
        spellcastingBonus: [{
            name: "Level 1 Druid Spell",
            "class": "druid",
            level: [1, 1],
            firstCol: "oncelr+markedbox"
        }, {
            name: "Level 2 Druid Spell",
            "class": "druid",
            level: [2, 2],
            firstCol: "oncelr+markedbox"
        }]
    },
    "wizard": {
        description: "I learn a 1st-level and 2nd-level Wizard spell. They are always prepared, and I can cast each once per Long Rest for free (or use slots normally). Whenever I gain a level, I can swap one of these for another Wizard spell of the same level. [+1 Int, Wis, or Cha]",
        spellcastingAbility: [4, 5, 6],
        spellcastingBonus: [{
            name: "Level 1 Wizard Spell",
            "class": "wizard",
            level: [1, 1],
            firstCol: "oncelr+markedbox"
        }, {
            name: "Level 2 Wizard Spell",
            "class": "wizard",
            level: [2, 2],
            firstCol: "oncelr+markedbox"
        }]
    }
};
FeatsList["necromancy adept"] = {
    name: "Necromancy Adept",
    source: [["AU", 31]],
    type: "general",
    prerequisite: "Level 4+, Spellcasting or Pact Magic Feature",
    prereqeval: function (v) { return v.characterLevel >= 4 && v.isSpellcastingClass; },
    descriptionFull: [
        "You gain the following benefits.",
        "Ability Score Increase. Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.",
        "Additional Spells. Your prowess allows you to always have certain spells at the ready. When you have spell slots of a level specified in the Necromancy Adept Spells table, you thereafter always have the spells listed for that level and lower prepared.",
        "Life Manipulation. When you cast a spell from the Necromancy school using a spell slot, you can immediately roll up to two of your unexpended Hit Point Dice. You regain Hit Points equal to the total rolled plus the level of spell slot expended. Those Hit Point Dice are then expended."
    ],
    spellcastingBonus: {
        name: "Necromancy Adept Spells",
        spells: ["inflict wounds", "ray of enfeeblement", "vampiric touch", "blight", "raise dead"],
        selection: ["inflict wounds", "ray of enfeeblement", "vampiric touch", "blight", "raise dead"],
        times: 5,
        firstCol: "markedbox"
    },
    choices: ["Intelligence", "Wisdom", "Charisma"],
    choicesNotInMenu: true,
    "intelligence": {
        description: "I always have Inflict Wounds, Ray of Enfeeblement, Vampiric Touch, Blight, and Raise Dead prepared once I have the appropriate slots. When I cast a Necromancy spell with a slot, I can roll up to two unexpended Hit Dice to heal the total rolled + the spell slot level, expending them. [+1 Int]",
        spellcastingAbility: 4,
        scores: [0, 0, 0, 1, 0, 0]
    },
    "wisdom": {
        description: "I always have Inflict Wounds, Ray of Enfeeblement, Vampiric Touch, Blight, and Raise Dead prepared once I have the appropriate slots. When I cast a Necromancy spell with a slot, I can roll up to two unexpended Hit Dice to heal the total rolled + the spell slot level, expending them. [+1 Wis]",
        spellcastingAbility: 5,
        scores: [0, 0, 0, 0, 1, 0]
    },
    "charisma": {
        description: "I always have Inflict Wounds, Ray of Enfeeblement, Vampiric Touch, Blight, and Raise Dead prepared once I have the appropriate slots. When I cast a Necromancy spell with a slot, I can roll up to two unexpended Hit Dice to heal the total rolled + the spell slot level, expending them. [+1 Cha]",
        spellcastingAbility: 6,
        scores: [0, 0, 0, 0, 0, 1]
    }
};
FeatsList["otherworldly familiar"] = {
    name: "Otherworldly Familiar",
    source: [["AU", 31]],
    type: "general",
    prerequisite: "Level 4+, Familiar Friend feat",
    prereqeval: function (v) { return v.characterLevel >= 4 && classes.known.feats && classes.known.feats.indexOf("familiar friend") !== -1; },
    descriptionFull: [
        "You gain the following benefits.",
        "Ability Score Increase. Increase one ability score of your choice by 1, to a maximum of 20.",
        "Otherworldly Power. When you cast the Find Familiar spell, you can imbue your familiar with otherworldly might, which lasts until you cast Find Familiar again. While imbued, your familiar gains the following benefits:",
        "Energy Resistance. Choose Necrotic, Poison, Psychic, Radiant, or Thunder damage. Your familiar has Resistance to the chosen damage type.",
        "Phase Walk. Your familiar can move through other creatures and objects as if they were Difficult Terrain. If your familiar ends its turn inside an object, it is shunted to the last unoccupied space it was in."
    ],
    choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
    choicesNotInMenu: true,
    "strength": {
        description: "When I cast Find Familiar, I imbue it with Necrotic, Poison, Psychic, Radiant, or Thunder energy, granting it Resistance to the chosen type. It can also move through other creatures/objects as if they were Difficult Terrain (shunted out if it ends its turn inside). [+1 Str]",
        scores: [1, 0, 0, 0, 0, 0]
    },
    "dexterity": {
        description: "When I cast Find Familiar, I imbue it with Necrotic, Poison, Psychic, Radiant, or Thunder energy, granting it Resistance to the chosen type. It can also move through other creatures/objects as if they were Difficult Terrain (shunted out if it ends its turn inside). [+1 Dex]",
        scores: [0, 1, 0, 0, 0, 0]
    },
    "constitution": {
        description: "When I cast Find Familiar, I imbue it with Necrotic, Poison, Psychic, Radiant, or Thunder energy, granting it Resistance to the chosen type. It can also move through other creatures/objects as if they were Difficult Terrain (shunted out if it ends its turn inside). [+1 Con]",
        scores: [0, 0, 1, 0, 0, 0]
    },
    "intelligence": {
        description: "When I cast Find Familiar, I imbue it with Necrotic, Poison, Psychic, Radiant, or Thunder energy, granting it Resistance to the chosen type. It can also move through other creatures/objects as if they were Difficult Terrain (shunted out if it ends its turn inside). [+1 Int]",
        scores: [0, 0, 0, 1, 0, 0]
    },
    "wisdom": {
        description: "When I cast Find Familiar, I imbue it with Necrotic, Poison, Psychic, Radiant, or Thunder energy, granting it Resistance to the chosen type. It can also move through other creatures/objects as if they were Difficult Terrain (shunted out if it ends its turn inside). [+1 Wis]",
        scores: [0, 0, 0, 0, 1, 0]
    },
    "charisma": {
        description: "When I cast Find Familiar, I imbue it with Necrotic, Poison, Psychic, Radiant, or Thunder energy, granting it Resistance to the chosen type. It can also move through other creatures/objects as if they were Difficult Terrain (shunted out if it ends its turn inside). [+1 Cha]",
        scores: [0, 0, 0, 0, 0, 1]
    }
};
FeatsList["soothing familiar"] = {
    name: "Soothing Familiar",
    source: [["AU", 31]],
    type: "general",
    prerequisite: "Level 4+, Familiar Friend feat",
    prereqeval: function (v) { return v.characterLevel >= 4 && classes.known.feats && classes.known.feats.indexOf("familiar friend") !== -1; },
    descriptionFull: [
        "You gain the following benefits.",
        "Ability Score Increase. Increase one ability score of your choice by 1, to a maximum of 20.",
        "Healing Beacon. Positive energy fills a 5-foot Emanation originating from your familiar as long as it is within 120 feet of you. Whenever an ally in that Emanation rolls a die to determine the number of Hit Points restored to a creature, that ally can treat a roll of 1 or 2 on the die as a 3."
    ],
    choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
    choicesNotInMenu: true,
    "strength": {
        description: "My familiar emits a 5-ft Emanation of positive energy as long as it is within 120 ft of me. Whenever an ally in that Emanation rolls a die to determine the number of Hit Points restored to a creature, that ally can treat a roll of 1 or 2 on the die as a 3. [+1 Str]",
        scores: [1, 0, 0, 0, 0, 0]
    },
    "dexterity": {
        description: "My familiar emits a 5-ft Emanation of positive energy as long as it is within 120 ft of me. Whenever an ally in that Emanation rolls a die to determine the number of Hit Points restored to a creature, that ally can treat a roll of 1 or 2 on the die as a 3. [+1 Dex]",
        scores: [0, 1, 0, 0, 0, 0]
    },
    "constitution": {
        description: "My familiar emits a 5-ft Emanation of positive energy as long as it is within 120 ft of me. Whenever an ally in that Emanation rolls a die to determine the number of Hit Points restored to a creature, that ally can treat a roll of 1 or 2 on the die as a 3. [+1 Con]",
        scores: [0, 0, 1, 0, 0, 0]
    },
    "intelligence": {
        description: "My familiar emits a 5-ft Emanation of positive energy as long as it is within 120 ft of me. Whenever an ally in that Emanation rolls a die to determine the number of Hit Points restored to a creature, that ally can treat a roll of 1 or 2 on the die as a 3. [+1 Int]",
        scores: [0, 0, 0, 1, 0, 0]
    },
    "wisdom": {
        description: "My familiar emits a 5-ft Emanation of positive energy as long as it is within 120 ft of me. Whenever an ally in that Emanation rolls a die to determine the number of Hit Points restored to a creature, that ally can treat a roll of 1 or 2 on the die as a 3. [+1 Wis]",
        scores: [0, 0, 0, 0, 1, 0]
    },
    "charisma": {
        description: "My familiar emits a 5-ft Emanation of positive energy as long as it is within 120 ft of me. Whenever an ally in that Emanation rolls a die to determine the number of Hit Points restored to a creature, that ally can treat a roll of 1 or 2 on the die as a 3. [+1 Cha]",
        scores: [0, 0, 0, 0, 0, 1]
    }
};
FeatsList["spell resistant"] = {
    name: "Spell Resistant",
    source: [["AU", 31]],
    type: "general",
    prerequisite: "Level 4+",
    prereqeval: function (v) { return v.characterLevel >= 4; },
    description: "I gain Resistance to Necrotic, Psychic, Radiant, or Thunder damage (chosen when taking this feat). When I fail a save against a spell or magical effect, I can roll 1d6 and add it to the total. I can do this a number of times equal to my Prof Bonus per Long Rest. [+1 Dexterity or Constitution]",
    descriptionFull: [
        "You gain the following benefits.",
        "Ability Score Increase. Increase your Dexterity or Constitution by 1, to a maximum of 20.",
        "Magical Resilience. You have Resistance to one of the following damage types (choose when you gain this feat): Necrotic, Psychic, Radiant, or Thunder.",
        "Magic Resistant. When you would fail a saving throw against a spell or magical effect, you can roll 1d6 and add the number rolled to the save's total, potentially turning the failure into a success. You can use this benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest."
    ],
    usages: "Proficiency bonus per ",
    usagescalc: "event.value = Number(How('Proficiency Bonus'));",
    recovery: "long rest",
    choices: ["Necrotic Resistance", "Psychic Resistance", "Radiant Resistance", "Thunder Resistance"],
    choicesNotInMenu: true,
    "necrotic resistance": {
        name: "Spell Resistant [Necrotic]",
        description: "I gain Resistance to Necrotic damage. When I fail a save against a spell or magical effect, I can roll 1d6 and add it to the total. I can do this a number of times equal to my Prof Bonus per Long Rest. [+1 Dexterity or Constitution]",
        dmgres: ["Necrotic"],
        scorestxt: "+1 Dexterity or Constitution"
    },
    "psychic resistance": {
        name: "Spell Resistant [Psychic]",
        description: "I gain Resistance to Psychic damage. When I fail a save against a spell or magical effect, I can roll 1d6 and add it to the total. I can do this a number of times equal to my Prof Bonus per Long Rest. [+1 Dexterity or Constitution]",
        dmgres: ["Psychic"],
        scorestxt: "+1 Dexterity or Constitution"
    },
    "radiant resistance": {
        name: "Spell Resistant [Radiant]",
        description: "I gain Resistance to Radiant damage. When I fail a save against a spell or magical effect, I can roll 1d6 and add it to the total. I can do this a number of times equal to my Prof Bonus per Long Rest. [+1 Dexterity or Constitution]",
        dmgres: ["Radiant"],
        scorestxt: "+1 Dexterity or Constitution"
    },
    "thunder resistance": {
        name: "Spell Resistant [Thunder]",
        description: "I gain Resistance to Thunder damage. When I fail a save against a spell or magical effect, I can roll 1d6 and add it to the total. I can do this a number of times equal to my Prof Bonus per Long Rest. [+1 Dexterity or Constitution]",
        dmgres: ["Thunder"],
        scorestxt: "+1 Dexterity or Constitution"
    }
};
FeatsList["spell subterfuge"] = {
    name: "Spell Subterfuge",
    source: [["AU", 32]],
    type: "general",
    prerequisite: "Level 4+, Spellcasting or Pact Magic Feature",
    prereqeval: function (v) { return v.characterLevel >= 4 && v.isSpellcastingClass; },
    descriptionFull: [
        "You gain the following benefits.",
        "Ability Score Increase. Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.",
        "Shrouding Spells. After you cast a spell that has a casting time of an action using a spell slot, you can take both the Dash and Hide actions as a Bonus Action. You can use this benefit a number of times equal to the ability modifier of the score increased by this feat, and you regain all expended uses when you finish a Long Rest.",
        "Sneaky Casting. If you have the Hide action's Invisible condition, casting a spell with a Verbal component or making a spell attack doesn't end that condition on you if you end the turn behind Three-Quarters Cover or Total Cover."
    ],
    action: [["bonus action", "Dash & Hide (after Action spell)"]],
    recovery: "long rest",
    choices: ["Intelligence", "Wisdom", "Charisma"],
    choicesNotInMenu: true,
    "intelligence": {
        description: "After casting a 1 action spell with a slot, I can take both the Dash and Hide actions as a Bonus Action. If I am Invisible from the Hide action, casting a spell with a V component or spell attack doesn't end it if I end my turn in \xBE or Total Cover. [+1 Int]",
        scores: [0, 0, 0, 1, 0, 0],
        usages: "Intelligence modifier per ",
        usagescalc: "event.value = Math.max(1, What('Int Mod'));"
    },
    "wisdom": {
        description: "After casting a 1 action spell with a slot, I can take both the Dash and Hide actions as a Bonus Action. If I am Invisible from the Hide action, casting a spell with a V component or spell attack doesn't end it if I end my turn in \xBE or Total Cover. [+1 Wis]",
        scores: [0, 0, 0, 0, 1, 0],
        usages: "Wisdom modifier per ",
        usagescalc: "event.value = Math.max(1, What('Wis Mod'));"
    },
    "charisma": {
        description: "After casting a 1 action spell with a slot, I can take both the Dash and Hide actions as a Bonus Action. If I am Invisible from the Hide action, casting a spell with a V component or spell attack doesn't end it if I end my turn in \xBE or Total Cover. [+1 Cha]",
        scores: [0, 0, 0, 0, 0, 1],
        usages: "Charisma modifier per ",
        usagescalc: "event.value = Math.max(1, What('Cha Mod'));"
    }
};
FeatsList["transmutation adept"] = {
    name: "Transmutation Adept",
    source: [["AU", 32]],
    type: "general",
    prerequisite: "Level 4+, Spellcasting or Pact Magic Feature",
    prereqeval: function (v) { return v.characterLevel >= 4 && v.isSpellcastingClass; },
    descriptionFull: [
        "You gain the following benefits.",
        "Ability Score Increase. Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.",
        "Additional Spells. Your prowess allows you to always have certain spells at the ready. When you have spell slots of a level specified in the Transmutation Adept Spells table, you thereafter always have the spells listed for that level and lower prepared.",
        "Magical Augmentation. On your turn when you cast a spell from the Transmutation school using a spell slot, your Speed increases by a number of feet equal to five times the level of spell slot expended. This increase lasts until the end of the turn."
    ],
    spellcastingBonus: {
        name: "Transmutation Adept Spells",
        spells: ["jump", "spider climb", "slow", "polymorph", "animate objects"],
        selection: ["jump", "spider climb", "slow", "polymorph", "animate objects"],
        times: 5,
        firstCol: "markedbox"
    },
    choices: ["Intelligence", "Wisdom", "Charisma"],
    choicesNotInMenu: true,
    "intelligence": {
        description: "I always have Jump, Spider Climb, Slow, Polymorph, and Animate Objects prepared once I have the appropriate slots. On my turn, when I cast a Transmutation spell with a spell slot, my Speed increases by 5 \xD7 the spell slot's level until the end of the turn. [+1 Int]",
        spellcastingAbility: 4,
        scores: [0, 0, 0, 1, 0, 0]
    },
    "wisdom": {
        description: "I always have Jump, Spider Climb, Slow, Polymorph, and Animate Objects prepared once I have the appropriate slots. On my turn, when I cast a Transmutation spell with a spell slot, my Speed increases by 5 \xD7 the spell slot's level until the end of the turn. [+1 Wis]",
        spellcastingAbility: 5,
        scores: [0, 0, 0, 0, 1, 0]
    },
    "charisma": {
        description: "I always have Jump, Spider Climb, Slow, Polymorph, and Animate Objects prepared once I have the appropriate slots. On my turn, when I cast a Transmutation spell with a spell slot, my Speed increases by 5 \xD7 the spell slot's level until the end of the turn. [+1 Cha]",
        spellcastingAbility: 6,
        scores: [0, 0, 0, 0, 0, 1]
    }
};
FeatsList["warlike familiar"] = {
    name: "Warlike Familiar",
    source: [["AU", 33]],
    type: "general",
    prerequisite: "Level 4+, Familiar Friend feat",
    prereqeval: function (v) { return v.characterLevel >= 4 && classes.known.feats && classes.known.feats.indexOf("familiar friend") !== -1; },
    descriptionFull: [
        "You gain the following benefits.",
        "Ability Score Increase. Increase one ability score of your choice by 1, to a maximum of 20.",
        "Battle Familiar. You always have the Battle Familiar spell (see chapter 2) prepared. You can cast it once without a spell slot, and you regain the ability to cast it in this way when you finish a Long Rest. You can also cast the spell using any spell slots you have of the appropriate level. Your spellcasting ability for this spell is the one chosen for the Faithful Companion benefit of your Familiar Friend feat.",
        "Intercept Attack. When a creature within 5 feet of your familiar is hit by an attack roll, your familiar can take a Reaction to add a bonus to the creature's Armor Class against that attack, potentially causing the attack to miss. The bonus is equal to your Proficiency Bonus."
    ],
	spellcastingAbility: [4, 5, 6],
    spellcastingBonus: {
        name: "Battle Familiar",
        spells: ["battle familiar"],
        selection: ["battle familiar"],
        firstCol: "oncelr+markedbox"
    },
    choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
    choicesNotInMenu: true,
    "strength": {
        description: "I always have the Battle Familiar spell prepared. I can cast it 1/Long Rest for free (or use slots). When a creature within 5 ft of my familiar is hit by an attack, my familiar can use a Reaction to add my Prof Bonus to their AC against it. [+1 Str]",
        scores: [1, 0, 0, 0, 0, 0]
    },
    "dexterity": {
        description: "I always have the Battle Familiar spell prepared. I can cast it 1/Long Rest for free (or use slots). When a creature within 5 ft of my familiar is hit by an attack, my familiar can use a Reaction to add my Prof Bonus to their AC against it. [+1 Dex]",
        scores: [0, 1, 0, 0, 0, 0]
    },
    "constitution": {
        description: "I always have the Battle Familiar spell prepared. I can cast it 1/Long Rest for free (or use slots). When a creature within 5 ft of my familiar is hit by an attack, my familiar can use a Reaction to add my Prof Bonus to their AC against it. [+1 Con]",
        scores: [0, 0, 1, 0, 0, 0]
    },
    "intelligence": {
        description: "I always have the Battle Familiar spell prepared. I can cast it 1/Long Rest for free (or use slots). When a creature within 5 ft of my familiar is hit by an attack, my familiar can use a Reaction to add my Prof Bonus to their AC against it. [+1 Int]",
        scores: [0, 0, 0, 1, 0, 0]
    },
    "wisdom": {
        description: "I always have the Battle Familiar spell prepared. I can cast it 1/Long Rest for free (or use slots). When a creature within 5 ft of my familiar is hit by an attack, my familiar can use a Reaction to add my Prof Bonus to their AC against it. [+1 Wis]",
        scores: [0, 0, 0, 0, 1, 0]
    },
    "charisma": {
        description: "I always have the Battle Familiar spell prepared. I can cast it 1/Long Rest for free (or use slots). When a creature within 5 ft of my familiar is hit by an attack, my familiar can use a Reaction to add my Prof Bonus to their AC against it. [+1 Cha]",
        scores: [0, 0, 0, 0, 0, 1]
    }
};		
		//Fighting Style feats
FeatsList["arcane warrior"] = {
    name: "Arcane Warrior",
    source: [["AU", 33]],
    type: "fighting style",
    prerequisite: "Fighting Style Feature",
    descriptionFull: [
        "You learn two Wizard cantrips of your choice. Mage Hand and Ray of Frost are recommended. Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells (choose when you select this feat).",
        "Whenever you gain a level, you can replace one of these cantrips with another Wizard cantrip."
    ],
    description: "I learn two Wizard cantrips. Whenever I gain a level, I can replace one of these cantrips with another Wizard cantrip. (My spellcasting ability is chosen when selecting this feat).",
    spellcastingAbility: [4, 5, 6],
    spellcastingBonus: {
        name: "Arcane Warrior",
        "class": "wizard",
        level: [0, 0],
        times: 2
    }
};		
		//Epic Boon feats
FeatsList["boon of erupting spellpower"] = {
    name: "Boon of Erupting Spellpower",
    source: [["AU", 33]],
    type: "epic boon",
    prerequisite: "Level 19+, Spellcasting or Pact Magic Feature",
    prereqeval: function (v) { return v.characterLevel >= 19 && v.isSpellcastingClass; },
    descriptionFull: [
        "You gain the following benefits.",
        "Ability Score Increase. Increase your Intelligence, Wisdom, or Charisma by 2, to a maximum of 30.",
        "Spell Overload. When you cast a spell that deals damage using a spell slot, you can cause its magical energy to surge. You can treat any 1 or 2 on a damage die rolled for the spell as a 3, and creatures that took damage from the spell also have the Prone condition. Once you use this benefit, you can't do so again until you roll Initiative or finish a Long Rest or Short Rest."
    ],
    usages: 1,
    recovery: "short rest",
    altResource: "Combat",
    choices: ["Intelligence", "Wisdom", "Charisma"],
    choicesNotInMenu: true,
    "intelligence": {
        description: "When I cast a damage spell with a slot, I can treat any 1 or 2 on a damage die as a 3. Damaged creatures also gain the Prone condition. I can do this once per Short/Long Rest, or regain use when I roll Initiative. [+2 Int]",
        scores: [0, 0, 0, 2, 0, 0],
        scoresMaximum: [0, 0, 0, 30, 0, 0]
    },
    "wisdom": {
        description: "When I cast a damage spell with a slot, I can treat any 1 or 2 on a damage die as a 3. Damaged creatures also gain the Prone condition. I can do this once per Short/Long Rest, or regain use when I roll Initiative. [+2 Wis]",
        scores: [0, 0, 0, 0, 2, 0],
        scoresMaximum: [0, 0, 0, 0, 30, 0]
    },
    "charisma": {
        description: "When I cast a damage spell with a slot, I can treat any 1 or 2 on a damage die as a 3. Damaged creatures also gain the Prone condition. I can do this once per Short/Long Rest, or regain use when I roll Initiative. [+2 Cha]",
        scores: [0, 0, 0, 0, 0, 2],
        scoresMaximum: [0, 0, 0, 0, 0, 30]
    }
};
FeatsList["boon of magic school mastery"] = {
    name: "Boon of Magic School Mastery",
    source: [["AU", 33]],
    type: "epic boon",
    prerequisite: "Level 19+, Spellcasting or Pact Magic Feature",
    prereqeval: function (v) { return v.characterLevel >= 19 && v.isSpellcastingClass; },
    allowDuplicates: true,
    descriptionFull: [
        "You gain the following benefits.",
        "Ability Score Increase. Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 30.",
        "Mastered School. Choose one of the eight schools of magic: Abjuration, Conjuration, Divination, Enchantment, Evocation, Illusion, Necromancy, or Transmutation. Your choice grants you the following features:",
        "Rote Casting. Choose a level 1 spell from the chosen school that appears on your class's spell list. You always have that spell prepared and can cast it without a spell slot or spell components.",
        "Signature Arcanum. Choose a level 7 or lower spell from the chosen school. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in this way when you finish a Long Rest.",
        "You can also cast these prepared spells using any spell slots you have of the appropriate level.",
        "Repeatable. You can take this feat more than once, but you must choose a different school of magic each time."
    ],
    scorestxt: "+1 Intelligence, Wisdom, or Charisma (max 30)",
    choices: ["Abjuration", "Conjuration", "Divination", "Enchantment", "Evocation", "Illusion", "Necromancy", "Transmutation"],
    "abjuration": {
        name: "Boon of Magic School Mastery [Abjuration]",
        description: "I choose a level 1 Abjuration spell from my class list to always have prepared and cast at-will for free (no components). I also choose an Abjuration spell of level 7 or lower to always have prepared and cast once per Long Rest for free (or use slots). [+1 Int, Wis, or Cha]",
        spellcastingAbility: [4, 5, 6],
        spellcastingBonus: [
            { name: "Rote Casting", school: ["Abjur"], level: [1, 1], firstCol: "atwill" },
            { name: "Signature Arcanum", school: ["Abjur"], level: [1, 7], firstCol: "oncelr+markedbox" }
        ]
    },
    "conjuration": {
        name: "Boon of Magic School Mastery [Conjuration]",
        description: "I choose a level 1 Conjuration spell from my class list to always have prepared and cast at-will for free (no components). I also choose a Conjuration spell of level 7 or lower to always have prepared and cast once per Long Rest for free (or use slots). [+1 Int, Wis, or Cha]",
        spellcastingAbility: [4, 5, 6],
        spellcastingBonus: [
            { name: "Rote Casting", school: ["Conj"], level: [1, 1], firstCol: "atwill" },
            { name: "Signature Arcanum", school: ["Conj"], level: [1, 7], firstCol: "oncelr+markedbox" }
        ]
    },
    "divination": {
        name: "Boon of Magic School Mastery [Divination]",
        description: "I choose a level 1 Divination spell from my class list to always have prepared and cast at-will for free (no components). I also choose a Divination spell of level 7 or lower to always have prepared and cast once per Long Rest for free (or use slots). [+1 Int, Wis, or Cha]",
        spellcastingAbility: [4, 5, 6],
        spellcastingBonus: [
            { name: "Rote Casting", school: ["Div"], level: [1, 1], firstCol: "atwill" },
            { name: "Signature Arcanum", school: ["Div"], level: [1, 7], firstCol: "oncelr+markedbox" }
        ]
    },
    "enchantment": {
        name: "Boon of Magic School Mastery [Enchantment]",
        description: "I choose a level 1 Enchantment spell from my class list to always have prepared and cast at-will for free (no components). I also choose an Enchantment spell of level 7 or lower to always have prepared and cast once per Long Rest for free (or use slots). [+1 Int, Wis, or Cha]",
        spellcastingAbility: [4, 5, 6],
        spellcastingBonus: [
            { name: "Rote Casting", school: ["Ench"], level: [1, 1], firstCol: "atwill" },
            { name: "Signature Arcanum", school: ["Ench"], level: [1, 7], firstCol: "oncelr+markedbox" }
        ]
    },
    "evocation": {
        name: "Boon of Magic School Mastery [Evocation]",
        description: "I choose a level 1 Evocation spell from my class list to always have prepared and cast at-will for free (no components). I also choose an Evocation spell of level 7 or lower to always have prepared and cast once per Long Rest for free (or use slots). [+1 Int, Wis, or Cha]",
        spellcastingAbility: [4, 5, 6],
        spellcastingBonus: [
            { name: "Rote Casting", school: ["Evoc"], level: [1, 1], firstCol: "atwill" },
            { name: "Signature Arcanum", school: ["Evoc"], level: [1, 7], firstCol: "oncelr+markedbox" }
        ]
    },
    "illusion": {
        name: "Boon of Magic School Mastery [Illusion]",
        description: "I choose a level 1 Illusion spell from my class list to always have prepared and cast at-will for free (no components). I also choose an Illusion spell of level 7 or lower to always have prepared and cast once per Long Rest for free (or use slots). [+1 Int, Wis, or Cha]",
        spellcastingAbility: [4, 5, 6],
        spellcastingBonus: [
            { name: "Rote Casting", school: ["Illus"], level: [1, 1], firstCol: "atwill" },
            { name: "Signature Arcanum", school: ["Illus"], level: [1, 7], firstCol: "oncelr+markedbox" }
        ]
    },
    "necromancy": {
        name: "Boon of Magic School Mastery [Necromancy]",
        description: "I choose a level 1 Necromancy spell from my class list to always have prepared and cast at-will for free (no components). I also choose a Necromancy spell of level 7 or lower to always have prepared and cast once per Long Rest for free (or use slots). [+1 Int, Wis, or Cha]",
        spellcastingAbility: [4, 5, 6],
        spellcastingBonus: [
            { name: "Rote Casting", school: ["Necro"], level: [1, 1], firstCol: "atwill" },
            { name: "Signature Arcanum", school: ["Necro"], level: [1, 7], firstCol: "oncelr+markedbox" }
        ]
    },
    "transmutation": {
        name: "Boon of Magic School Mastery [Transmutation]",
        description: "I choose a level 1 Transmutation spell from my class list to always have prepared and cast at-will for free (no components). I also choose a Transmutation spell of level 7 or lower to always have prepared and cast once per Long Rest for free (or use slots). [+1 Int, Wis, or Cha]",
        spellcastingAbility: [4, 5, 6],
        spellcastingBonus: [
            { name: "Rote Casting", school: ["Trans"], level: [1, 1], firstCol: "atwill" },
            { name: "Signature Arcanum", school: ["Trans"], level: [1, 7], firstCol: "oncelr+markedbox" }
        ]
    }
};
FeatsList["boon of the iron mind"] = {
    name: "Boon of the Iron Mind",
    source: [["AU", 33]],
    type: "epic boon",
    prerequisite: "Level 19+",
    prereqeval: function (v) { return v.characterLevel >= 19; },
    descriptionFull: [
        "You gain the following benefits.",
        "Ability Score Increase. Increase one ability score of your choice by 1, to a maximum of 30.",
        "Unshakable Focus. When you are maintaining Concentration on an effect, you lose Concentration only if you cast a spell or activate another effect that requires Concentration, if you have the Petrified or Unconscious condition, or if you die."
    ],
    savetxt: { text: ["Never lose Concentration from damage/environment"] },
    choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
    choicesNotInMenu: true,
    "strength": {
        description: "When I am maintaining Concentration, I lose it only if I cast a spell or activate another effect that requires Concentration, if I have the Petrified or Unconscious condition, or if I die. [+1 Str]",
        scores: [1, 0, 0, 0, 0, 0],
        scoresMaximum: [30, 0, 0, 0, 0, 0]
    },
    "dexterity": {
        description: "When I am maintaining Concentration, I lose it only if I cast a spell or activate another effect that requires Concentration, if I have the Petrified or Unconscious condition, or if I die. [+1 Dex]",
        scores: [0, 1, 0, 0, 0, 0],
        scoresMaximum: [0, 30, 0, 0, 0, 0]
    },
    "constitution": {
        description: "When I am maintaining Concentration, I lose it only if I cast a spell or activate another effect that requires Concentration, if I have the Petrified or Unconscious condition, or if I die. [+1 Con]",
        scores: [0, 0, 1, 0, 0, 0],
        scoresMaximum: [0, 0, 30, 0, 0, 0]
    },
    "intelligence": {
        description: "When I am maintaining Concentration, I lose it only if I cast a spell or activate another effect that requires Concentration, if I have the Petrified or Unconscious condition, or if I die. [+1 Int]",
        scores: [0, 0, 0, 1, 0, 0],
        scoresMaximum: [0, 0, 0, 30, 0, 0]
    },
    "wisdom": {
        description: "When I am maintaining Concentration, I lose it only if I cast a spell or activate another effect that requires Concentration, if I have the Petrified or Unconscious condition, or if I die. [+1 Wis]",
        scores: [0, 0, 0, 0, 1, 0],
        scoresMaximum: [0, 0, 0, 0, 30, 0]
    },
    "charisma": {
        description: "When I am maintaining Concentration, I lose it only if I cast a spell or activate another effect that requires Concentration, if I have the Petrified or Unconscious condition, or if I die. [+1 Cha]",
        scores: [0, 0, 0, 0, 0, 1],
        scoresMaximum: [0, 0, 0, 0, 0, 30]
    }
};
//Spells
	//2nd-level
SpellsList["battle familiar"] = {
    name: "Battle Familiar",
    classes: ["druid", "warlock", "wizard"],
    source: [["AU", 35]],
    level: 2,
    school: "Conj",
    time: "Act",
    range: "10 ft",
    components: "V,S,M\u0192",
    compMaterial: "A diamond worth 25+ GP",
    duration: "1 h",
    description: "Summon/empower familiar (Celestial/Fey/Fiend); Brute/Flyer/Stalker form; acts on its turn (25+ GP)",
    descriptionFull: [
        "You conjure a familiar imbued with magical might. The familiar appears in an unoccupied space within range; resembles an animal of your choice but is a Celestial, Fey, or Fiend (your choice); and uses the Battle Familiar stat block. When you cast this spell, choose the Brute, Flyer, or Stalker form. The choice determines certain details in the stat block.",
        "Combat. The familiar is an ally to you and your allies. It rolls its own Initiative and acts on its own turn.",
        "Disappearance of the Familiar. The battle familiar disappears when the spell ends, if it drops to 0 Hit Points, or if you die. When it disappears, it leaves behind in its space anything it was wearing or carrying. If you cast this spell again, you decide whether you summon the familiar that disappeared or a different one.",
        "One Familiar at a Time. You can't have more than one familiar at a time. If you cast this spell while you already have a familiar from this spell, that familiar is replaced by the new one.",
        "If you have a familiar from the Find Familiar spell when you cast this spell, you empower your existing familiar rather than conjuring a new one. For the duration, your familiar can attack in addition to taking other actions as normal, and your familiar's game statistics are replaced by the Battle Familiar stat block, but it retains its creature type, alignment, Hit Points, Hit Point Dice, and any features granted by the Find Familiar spell. Your familiar gains a number of Temporary Hit Points equal to the Hit Points of the battle familiar. Battle Familiar ends early if the familiar has no more Temporary Hit Points left, and these Temporary Hit Points vanish if any remain when Battle Familiar ends. Your familiar reverts to its previous form when Battle Familiar ends.",
        UsingHigherLvl + "Use the spell slot's level for the spell's level in the stat block."
    ].join("\n   ")
};
SpellsList["disruptive tune"] = {
    name: "Disruptive Tune",
    classes: ["bard", "sorcerer", "wizard"],
    source: [["AU", 38]],
    level: 2,
    school: "Abjur",
    time: "Act",
    range: "120 ft",
    components: "V,S",
    duration: "Conc, 1 min",
    save: "Con",
    description: "20-ft rad all save or lose Conc and have Disadv. on Conc saves for duration",
    descriptionFull: "A distracting melody momentarily fills a 20-foot-radius Sphere centered on a point you choose within range. Each creature in the Sphere makes a Constitution saving throw. On a failed save, a target loses Concentration, and it has Disadvantage on Constitution saving throws to maintain Concentration for the spell's duration."
};
SpellsList["dueling ground"] = {
    name: "Dueling Ground",
    classes: ["artificer", "bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source: [["AU", 38]],
    ritual: true,
    level: 2,
    school: "Abjur",
    time: "10 min",
    range: "Touch",
    components: "V,S,M\u0192",
    compMaterial: "A silk flag worth 100+ GP",
    duration: "1 h",
    description: "15-ft rad bounds 2 willing crea (1+/SL); 0 HP stabilized & teleports out; ends if outsider enters",
    descriptionFull: [
        "You create a magical dueling ground bounded by a glowing, rune-scribed circle in a 15-foot-radius Sphere centered on a point on the ground you touch.",
        "As part of creating the dueling ground, you designate two willing creatures within the Sphere as the targets. The spell ends early if a creature other than one of the targets enters the Sphere.",
        "If a target drops to 0 Hit Points while in the dueling ground, the target is Stable and teleports to the nearest unoccupied space outside the dueling ground. If a target is subjected to an effect that would kill it instantly without dealing damage while in the dueling ground, the target doesn't die and instead has 0 Hit Points and the Unconscious condition, is Stable, and teleports to the nearest unoccupied space outside the dueling ground.",
        "When only one target remains in the dueling ground, runes matching those on the ground around the Sphere briefly flash around the remaining target's head like a crown.",
        UsingHigherLvl + "You can target one additional willing creature for each spell slot level above 2."
    ].join("\n   ")
};
SpellsList["uncertain footing"] = {
    name: "Uncertain Footing",
    classes: ["artificer", "bard", "warlock", "wizard"],
    source: [["AU", 44]],
    reqLoS: true,
    level: 2,
    school: "Illus",
    time: "Act",
    range: "120 ft",
    components: "V,S,M",
    compMaterial: "A distorted lens",
    duration: "Conc, 1 min",
    save: "Int",
    description: "Up to 3 crea save or Speed halved & can't Dash; repeat save at end of its turns",
    descriptionFull: "You create illusory obstacles such as rocks or spikes in an attempt to confuse up to three creatures you can see within range, affecting their ability to move. Each target makes an Intelligence saving throw. On a failed save, a target's Speed is halved, and it can't take the Dash action. A hampered target repeats the save at the end of each of its turns, ending the spell on itself on a success."
};
SpellsList["wither and bloom"] = {
    name: "Wither and Bloom",
    classes: ["druid", "sorcerer", "wizard"],
    source: [["AU", 45]],
    level: 2,
    school: "Necro",
    time: "Act",
    range: "60 ft",
    components: "V,S,M",
    compMaterial: "A withered vine twisted into a loop",
    duration: "Instantaneous",
    save: "Con",
    description: "10-ft rad 3d6+1d6/SL Necro dmg, save half; 1 ally spends 1+1/SL HD to heal roll + spell mod",
    descriptionFull: [
        "You invoke both death and life in a 10-foot-radius Sphere centered on a point within range. Each creature of your choice in that area makes a Constitution saving throw, taking 3d6 Necrotic damage on a failed save or half as much damage on a successful one. Nonmagical plants in that area that aren't creatures, such as trees and shrubs, wither.",
        "In addition, one creature of your choice in that area can roll one of its unexpended Hit Point Dice and regain a number of Hit Points equal to the roll plus your spellcasting ability modifier. That die is then expended.",
        UsingHigherLvl + "The damage increases by 1d6 for each spell slot level above 2. The number of Hit Point Dice that can be rolled and expended increases by one for each spell slot level above 2. You add your spellcasting modifier to the number of Hit Points regained by this spell only once, regardless of the number of Hit Point Dice rolled and expended."
    ].join("\n   ")
};
	//3rd-level
SpellsList["catnap"] = {
    name: "Catnap",
    classes: ["artificer", "bard", "sorcerer", "wizard"],
    source: [["AU", 37]],
    level: 3,
    school: "Ench",
    time: "Act",
    range: "30 ft",
    components: "S,M",
    compMaterial: "A pinch of sand",
    duration: "10 min",
    description: "3+1/SL willing crea Unconscious; if lasts 10 min gain Short Rest, can't benefit again till Long Rest",
    descriptionFull: [
        "You make a calming gesture, and up to three willing creatures of your choice that you can see within range have the Unconscious condition for the spell's duration. The spell ends on a target if it takes damage or another creature takes an action to shake it awake. If a target has the Unconscious condition from this spell for the full duration, that target gains the benefits of finishing a Short Rest, and it can't be affected by this spell again until it finishes a Long Rest.",
        UsingHigherLvl + "You can target one additional willing creature for each spell slot level above 3."
    ].join("\n   ")
};
SpellsList["inflict doubt"] = {
    name: "Inflict Doubt",
    classes: ["bard", "sorcerer", "warlock", "wizard"],
    source: [["AU", 40]],
    reqLoS: true,
    level: 3,
    school: "Ench",
    time: "Act",
    range: "120 ft",
    components: "V,S",
    duration: "Conc, 1 min",
    save: "Wis",
    description: "1 crea save or Disadv. on D20 Tests for duration; repeat save at end of its turns",
    descriptionFull: "You inflict self-doubt on a creature you can see within range. The target must succeed on a Wisdom saving throw or have Disadvantage on D20 Tests for the duration. At the end of each of its turns, the target repeats the save, ending the spell on itself on a success."
};
	//4th-level
SpellsList["distorted distance"] = {
    name: "Distorted Distance",
    classes: ["artificer", "bard", "warlock", "wizard"],
    source: [["AU", 38]],
    level: 4,
    school: "Illus",
    time: "Act",
    range: "120 ft",
    components: "V,S",
    duration: "Conc, 10 min",
    save: "Int",
    description: "60-ft rad apply effect 1/turn to seen crea (enter/end): Int save or 2d10 Psychic \x26 Dif.Ter; OR +20ft Spd",
    descriptionFull: [
        "You create an illusory spatial dilation that fills a 60-foot-radius Sphere centered on a point within range. For each creature you can see in the Sphere, you can choose one of the following effects for it:",
        "\u2022 Dizzying Elongation: The creature makes an Intelligence saving throw. On a failed save, the creature takes 2d10 Psychic damage, and the Sphere is Difficult Terrain for it until the end of its turn.",
        "\u2022 Shortened Space: The creature's Speed increases by 20 feet until the end of its next turn.",
        "Until the spell ends, whenever a creature enters the Sphere or ends its turn there, you can choose for it to receive one of these effects. A creature can be affected by this spell only once per turn."
    ].join("\n   ")
};
SpellsList["festering blast"] = {
    name: "Festering Blast",
    classes: ["druid", "sorcerer", "warlock", "wizard"],
    source: [["AU", 39]],
    level: 4,
    school: "Necro",
    time: "Act",
    range: "S:60-ft line",
    components: "V,S",
    duration: "1 min",
    save: "Con",
    description: "60\xD710 ft line save or 4d10+1d10/SL Necro dmg \x26 Poisoned; Poisoned takes 2d10 Poison at SoT \x26 save EoT",
    descriptionFull: [
        "A 60-foot-long, 10-foot-wide Line of miasma blasts from you in a direction you choose. Each creature in the Line must make a Constitution saving throw. On a failed save, a target takes 4d10 Necrotic damage and has the Poisoned condition for the duration.",
        "A creature Poisoned by this spell takes 2d10 Poison damage at the start of each of its turns. At the end of each of its turns, a Poisoned target repeats the save, ending the spell on itself on a success.",
        UsingHigherLvl + "The initial damage increases by 1d10 for each spell slot level above 4."
    ].join("\n   ")
};
SpellsList["zone of amicability"] = {
    name: "Zone of Amicability",
    classes: ["bard", "warlock"],
    source: [["AU", 45]],
    level: 4,
    school: "Ench",
    time: "Act",
    range: "S:60-ft rad",
    components: "V,S",
    duration: "10 min",
    description: "60-ft Emanation; treat \u22649 on d20 as 10 for ability checks to influence creatures in area",
    descriptionFull: "A magical zone of amicability radiates from you in a 60-foot Emanation for the duration. When you make an ability check to influence a creature in that area, you can treat a d20 roll of 9 or lower as a 10."
};
	//5th-level
SpellsList["enervation"] = {
    name: "Enervation",
    classes: ["sorcerer", "warlock", "wizard"],
    source: [["AU", 38]],
    reqLoS: true,
    level: 5,
    school: "Necro",
    time: "Act",
    range: "60 ft",
    components: "V,S",
    duration: "Conc, 1 min",
    save: "Dex",
    description: "1 crea 6d8+1d8/SL Necrotic \x26 I can use Bns each turn for 2d8 dmg; heal \xBD dmg dealt; save \xBD \x26 ends",
    descriptionFull: [
        "A tendril of inky darkness reaches out from you to drain life from a creature you can see within range.",
        "The target makes a Dexterity saving throw. On a failed save, the target takes 6d8 Necrotic damage. On each of your subsequent turns, you can take a Bonus Action to deal 2d8 Necrotic damage to the target automatically. The spell ends if the target is ever outside the spell's range or it has Total Cover from you.",
        "On a successful save, the target takes half the initial damage only, and the spell ends.",
        "Whenever this spell deals damage to a target, you regain Hit Points equal to half the amount of Necrotic damage dealt.",
        UsingHigherLvl + "The initial damage increases by 1d8 for each spell slot level above 5."
    ].join("\n   ")
};
SpellsList["grave ground"] = {
    name: "Grave Ground",
    classes: ["cleric", "warlock", "wizard"],
    source: [["AU", 40]],
    level: 5,
    school: "Necro",
    time: "Act",
    range: "120 ft",
    components: "V,S,M",
    compMaterial: "A handful of grave dirt",
    duration: "Conc, 1 min",
    save: "Str",
    description: "Four 10-ft squares dif. ter.; enemy cast/enter/end turn save or 6d6+1d6/SL Necro \x26 -1d6 dmg rolls",
    descriptionFull: [
        "Skeletal hands burst from an area on the ground within range. The area consists of up to four 10-foot squares, which you arrange as you like. Each square must be contiguous with at least one other square. That area is Difficult Terrain for your enemies.",
        "Any enemy in that area when the skeletal hands appear makes a Strength saving throw. On a failed save, a creature takes 6d6 Necrotic damage, and until the end of its next turn, the creature subtracts 1d6 from all its damage rolls. An enemy also makes this save if it enters the area or ends its turn there. A creature makes this save only once per turn.",
        UsingHigherLvl + "The damage increases by 1d6 for each spell slot level above 5."
    ].join("\n   ")
};
SpellsList["mordenkainen's lucubration"] = {
    name: "Mordenkainen's Lucubration",
    classes: ["wizard"],
    source: [["AU", 42]],
    level: 5,
    school: "Div",
    time: "Act",
    range: "Self",
    components: "V,S",
    duration: "Instantaneous",
    description: "Recover up to 2 expended spell slots of level 2 or lower; increases if upcast",
    descriptionFull: [
        "You recover up to two expended spell slots of level 2 or lower.",
        UsingHigherLvl + "The maximum level of spell slots you can recover increases to level 3 (if cast with a level 6-7 spell slot) or level 4 (if cast with a level 8+ spell slot)."
    ].join("\n   ")
};	
SpellsList["negative energy flood"] = {
    name: "Negative Energy Flood",
    classes: ["warlock", "wizard"],
    source: [["AU", 42]],
    reqLoS: true,
    level: 5,
    school: "Necro",
    time: "Act",
    range: "60 ft",
    components: "V,M",
    compMaterial: "A broken bone and a square of black silk",
    duration: "Instantaneous",
    save: "Con",
    description: "1 crea save or 3d10+25+1d10/SL Necro (save \xBD); killed Humanoid rises as Zombie; Undead gain THP",
    descriptionFull: [
        "You send ribbons of negative energy at one creature you can see within range. If the target isn't Undead, it makes a Constitution saving throw, taking 3d10 + 25 Necrotic damage on a failed save or half as much damage on a successful one. A Humanoid killed by this spell rises at the start of your next turn as a Zombie that follows your verbal orders for 24 hours, after which it acts according to its nature.",
        "If the target is Undead, it gains 3d10 Temporary Hit Points.",
        UsingHigherLvl + "The damage increases by 1d10 for each spell slot level above 5."
    ].join("\n   ")
};	
SpellsList["spirit lantern"] = {
    name: "Spirit Lantern",
    classes: ["artificer", "cleric", "warlock", "wizard"],
    source: [["AU", 43]],
    level: 5,
    school: "Necro",
    time: "Act",
    range: "Self",
    components: "V,S,M",
    compMaterial: "A black lantern",
    duration: "10 min",
    description: "Lantern emits 60-ft Dim Light; collects souls of dead enemies; Bns spend soul to heal, harm, or ward",
    descriptionFull: [
        "You conjure a floating, ghostly black lantern that hovers above you and sheds Dim Light in a 60-foot radius. When an enemy dies within this Dim Light, a fragment of the creature's soul flies into the lantern. The lantern can hold a number of soul fragments equal to your spellcasting ability modifier, and those fragments dissipate when the spell ends.",
        "As a Bonus Action, you can expend a soul fragment to create one of the following effects.",
        "\u2022 Drain Life. The soul fragment darts at a creature of your choice that you can see within 60 feet of yourself. The target makes a Constitution saving throw, taking Necrotic damage equal to 4d8 plus your spellcasting ability modifier on a failed save or half as much damage on a successful one.",
        "\u2022 Repair Undead. The soul fragment flies into an Undead creature of your choice that you can see within 60 feet of yourself. That creature regains Hit Points equal to 4d8 plus your spellcasting ability modifier.",
        "\u2022 Ward Ally. The soul fragment darts around a creature of your choice that you can see within 60 feet of yourself. Other creatures have Disadvantage on attack rolls against the chosen creature until the start of your next turn."
    ].join("\n   ")
};
SpellsList["summon plant"] = {
    name: "Summon Plant",
    classes: ["druid", "ranger"],
    source: [["AU", 44]],
    reqLoS: true,
    level: 5,
    school: "Conj",
    time: "Act",
    range: "90 ft",
    components: "V,S,M\u0192",
    compMaterial: "Herbs worth 500+ GP",
    duration: "Conc, 1 h",
    description: "Chosen Plant Spirit; obeys verbal commands; takes turn after mine; vanishes at 0 HP (500gp)",
    descriptionFull: [
        "You call forth the spirit of an animated plant. It manifests in an unoccupied space that you can see within range and uses the Plant Spirit stat block. When you cast the spell, choose Fungus, Tree, or Vine. The creature resembles a plant of the chosen type, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.",
        "The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
        UsingHigherLvl + "Use the spell slot's level for the spell's level in the stat block."
    ].join("\n   ")
};
SpellsList["waves of exhaustion"] = {
    name: "Waves of Exhaustion",
    classes: ["sorcerer", "warlock", "wizard"],
    source: [["AU", 45]],
    level: 5,
    school: "Necro",
    time: "Bns",
    range: "Self",
    components: "V,S,M",
    compMaterial: "A piece of dried meat",
    duration: "Conc, 1 min",
    save: "Con",
    description: "For duration, Magic action to emit 60-ft cone; all in area save or gain 1 Exhaustion level (max 4)",
    descriptionFull: [
        "You evoke a nimbus of flickering gray light around your body. For the duration, you can take a Magic action to emit a wave of gray light in a 60-foot Cone. Creatures in that area must succeed on a Constitution saving throw or gain 1 Exhaustion level. This spell can't increase a creature's Exhaustion level above 4.",
        "Exhaustion levels gained from this spell are removed when the spell ends."
    ].join("\n   ")
};
	//6th-level
SpellsList["summon dinosaur"] = {
    name: "Summon Dinosaur",
    classes: ["druid"],
    source: [["AU", 43]],
    reqLoS: true,
    level: 6,
    school: "Conj",
    time: "Act",
    range: "90 ft",
    components: "V,S,M\u0192",
    compMaterial: "Polished scale worth 600+ GP",
    duration: "Conc, 1 h",
    description: "Chosen Dinosaur Spirit; obeys verbal commands; takes turn after mine; vanishes at 0 HP (600gp)",
    descriptionFull: [
        "You call forth the spirit of a primeval dinosaur. It manifests in an unoccupied space that you can see within range and uses the Dinosaur Spirit stat block. When you cast the spell, choose Ankylosaur, Triceratops, or Tyrannosaur. The creature resembles a dinosaur of the chosen type, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.",
        "The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, the creature takes the Dodge action and uses its movement to avoid danger.",
        UsingHigherLvl + "Use the spell slot's level for the spell's level in the stat block."
    ].join("\n   ")
};
	//7th-level
SpellsList["aura of evasion"] = {
    name: "Aura of Evasion",
    classes: ["sorcerer", "warlock", "wizard"],
    source: [["AU", 35]],
    level: 7,
    school: "Abjur",
    time: "Act",
    range: "S:30-ft rad",
    components: "V,S",
    duration: "Conc, 1 min",
    description: "30-ft Emanation; me & allies Adv on Dex saves and take 0 dmg on pass, half on fail",
    descriptionFull: "An aura of alacrity radiates from you in a 30-foot Emanation for the duration. While in the aura, you and your allies have Advantage on Dexterity saving throws. When an affected creature is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it takes no damage if it succeeds on the save and only half damage if it fails. A creature with the Incapacitated condition doesn't gain any benefit from being in the aura."
};
SpellsList["fractured awareness"] = {
    name: "Fractured Awareness",
    classes: ["bard", "sorcerer", "warlock", "wizard"],
    source: [["AU", 40]],
    reqLoS: true,
    level: 7,
    school: "Div",
    time: "Act",
    range: "120 ft",
    components: "V,S",
    duration: "Conc, 1 min",
    save: "Int",
    description: "1 crea save or 12d10 Psychic dmg & Disadv. on D20 Tests; save halves & ends; repeat save EoT",
    descriptionFull: [
        "You cause a creature to receive conflicting visions of multiple possible futures. Choose a creature you can see within range. The target makes an Intelligence saving throw. On a failed save, the target takes 12d10 Psychic damage and has Disadvantage on D20 Tests for the duration. On a successful save, the target takes half as much damage only, and the spell ends.",
        "At the end of each of its turns, an affected target repeats the save, ending the spell on a success."
    ].join("\n   ")
};
SpellsList["power word pain"] = {
    name: "Power Word Pain",
    classes: ["bard", "sorcerer", "warlock", "wizard"],
    source: [["AU", 42]],
    reqLoS: true,
    level: 7,
    school: "Ench",
    time: "Act",
    range: "60 ft",
    components: "V",
    duration: "1 min",
    save: "Con",
    description: "1 crea 6d8 Force dmg; if \u2264100 HP, Charmed (Spd \u226410, Dis on D20s, Con save to cast); save EoT",
    descriptionFull: [
        "You speak a word of power that causes waves of intense pain to assail one creature you can see within range. If the target has 100 Hit Points or fewer, it takes 6d8 Force damage and has the Charmed condition for the duration. Otherwise, it takes 6d8 Force damage only.",
        "While the target is Charmed, its Speed can be no more than 10 feet, and it has Disadvantage on D20 Tests except Constitution saving throws. In addition, when the target tries to cast a spell, it must first succeed on a Constitution saving throw, or the spell dissipates with no effect, and the action, Bonus Action, or Reaction used to cast it is wasted. If that spell was cast with a spell slot, the slot isn't expended.",
        "At the end of each of its turns, the Charmed target makes a Constitution saving throw, ending the spell on itself on a successful save."
    ].join("\n   ")
};
SpellsList["reweave fate"] = {
    name: "Reweave Fate",
    classes: ["bard", "cleric", "warlock", "wizard"],
    source: [["AU", 42]],
    reqLoS: true,
    level: 7,
    school: "Div",
    time: "React",
    range: "60 ft",
    components: "S",
    duration: "Instantaneous",
    description: "When seen crea fails D20 Test, it rerolls with Adv; if success, it gains 6d10 Temp HP",
    descriptionFull: "You untangle a single thread of fate to encourage a different result. The creature that failed the D20 Test can reroll it with Advantage, and the creature must use the new roll. If the D20 Test is successful, the creature gains 6d10 Temporary Hit Points from its strengthened fate."
};
SpellsList["transfix"] = {
    name: "Transfix",
    classes: ["bard", "warlock", "wizard"],
    source: [["AU", 44]],
    reqLoS: true,
    level: 7,
    school: "Ench",
    time: "Act",
    range: "Self",
    components: "V,S",
    duration: "Conc, 1 min",
    save: "Cha",
    description: "1 crea in 60ft save or Charmed (Incapacitated, moves to \u22645ft of me); ends turn in 5ft: 4d8+1d8/SL Psych. dmg",
    descriptionFull: [
        "For the duration, your appearance becomes otherworldly and alluring. One creature of your choice that you can see within 60 feet of you must succeed on a Charisma saving throw or have the Charmed condition for the duration.",
        "While Charmed, the target has the Incapacitated condition, and if the target is more than 5 feet away from you, it moves on its turn toward you by the most direct route, trying to get within 5 feet of you. If the Charmed creature ends its turn within 5 feet of you, it takes 4d8 Psychic damage.",
        "The target doesn't avoid Opportunity Attacks when moving toward you, but before moving into damaging terrain (such as lava or a pit), the target repeats the save, ending the spell on itself on a success.",
        "Until the spell ends, you can take a Magic action on subsequent turns to target another creature, but you can't target a creature again if it has succeeded on a save against this casting of the spell.",
        UsingHigherLvl + "The damage increases by 1d8 for each spell slot level above 7."
    ].join("\n   ")
};	
	//8th-level
SpellsList["entrancing mirrors"] = {
    name: "Entrancing Mirrors",
    classes: ["bard", "sorcerer", "warlock", "wizard"],
    source: [["AU", 39]],
    reqLoS: true,
    level: 8,
    school: "Illus",
    time: "Act",
    range: "90 ft",
    components: "V,S,M",
    compMaterial: "A mirror shard",
    duration: "Conc, 1 min",
    save: "Int",
    description: "Up to 3 crea save or 7d6 Psychic dmg & Stunned (Spd halved); save halves & no Stun; save EoT",
    descriptionFull: [
        "You create dozens of illusory mirrors to confuse up to three creatures of your choice that you can see within range.",
        "Each target makes an Intelligence saving throw. On a failed save, a target takes 7d6 Psychic damage and has the Stunned condition. While the target is Stunned, its Speed is halved. On a successful save, a target takes half as much damage only.",
        "A Stunned target repeats the Intelligence saving throw at the end of each of its turns, ending the spell on itself on a success."
    ].join("\n   ")
};
SpellsList["illusory dragon"] = {
    name: "Illusory Dragon",
    classes: ["wizard"],
    source: [["AU", 40]],
    reqLoS: true,
    level: 8,
    school: "Illus",
    time: "Act",
    range: "120 ft",
    components: "S",
    duration: "Conc, 1 min",
    save: "Wis",
    description: "Huge invulnerable dragon; enemies Wis save or drop items & Frightened; Bns move 60ft/exhale cone",
    descriptionFull: [
        "By gathering threads of shadow material from the Shadowfell, you create a Huge shadowy dragon in an unoccupied space that you can see within range. The illusion lasts for the spell's duration and occupies its space as if it were a creature. The illusion is tangible because of the shadow material used to create it but has Immunity to all damage and conditions.",
        "When the illusion appears, any enemy that can see it makes a Wisdom saving throw. On a failed save, the creature drops whatever it's holding and has the Frightened condition for the duration. If a creature Frightened in this way ends its turn in a space where it doesn't have line of sight to the illusion, the creature repeats the saving throw, ending the condition on itself on a success.",
        "As a Bonus Action, you can move the illusion up to 60 feet. At any point during its movement, you can cause the shadowy dragon to exhale a blast of energy in a 60-foot Cone. Each creature in the Cone makes an Intelligence saving throw, taking 6d6 Acid, Cold, Fire, Lightning, Necrotic, or Poison damage (your choice when you create the dragon) on a failed save or half as much damage on a successful one.",
        "A creature that takes a Study action to examine the dragon can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image and has Advantage on saving throws to end the Frightened condition it caused and to resist its exhalation."
    ].join("\n   ")
};
SpellsList["iron body"] = {
    name: "Iron Body",
    classes: ["sorcerer", "warlock", "wizard"],
    source: [["AU", 41]],
    level: 8,
    school: "Trans",
    time: "Act",
    range: "Touch",
    components: "V,S,M\u2020",
    compMaterial: "Diamond dust worth 250+ GP, which the spell consumes",
    duration: "Conc, 1 h",
    description: "1 willing crea Exhaustion won't inc; Resist Bludg/Fire/Pierc/Slash; Immune Pois dmg, Para, Petri, Pois cond",
    descriptionFull: "One willing creature you touch transforms into living metal. Until the spell ends, the target's Exhaustion level can't increase; the target has Resistance to Bludgeoning, Fire, Piercing, and Slashing damage; and it has Immunity to Poison damage and the Paralyzed, Petrified, and Poisoned conditions. If the target is Paralyzed, Petrified, or Poisoned when you cast the spell, those conditions immediately end for the target."
};
SpellsList["lightning ring"] = {
    name: "Lightning Ring",
    classes: ["druid", "sorcerer", "warlock", "wizard"],
    source: [["AU", 41]],
    level: 8,
    school: "Evoc",
    time: "Bns",
    range: "Self",
    components: "V,S,M",
    compMaterial: "A bit of fur and a glass ring",
    duration: "Conc, 10 min",
    save: "Con",
    description: "10-ft Emanation; enter/end save or 3d6 Lightning+3d6 Thunder dmg & Deaf; Act to shoot 60-ft line",
    descriptionFull: [
        "A ring of crackling electricity fills a 10-foot Emanation originating from you. Whenever the Emanation enters a creature's space and whenever a creature enters the Emanation or ends its turn there, you can force that creature to make a Constitution saving throw. On a failed save, the creature takes 3d6 Lightning damage plus 3d6 Thunder damage, and it has the Deafened condition for 1 minute. On a successful save, the creature takes half as much damage only.",
        "As a Magic action while the spell is active, you can emit a 60-foot-long, 5-foot-wide Line out from you in a direction you choose. Each creature in the Line makes a Dexterity saving throw, taking 6d6 Lightning damage on a failed save or half as much damage on a successful one."
    ].join("\n   ")
};
SpellsList["moment of prescience"] = {
    name: "Moment of Prescience",
    classes: ["wizard"],
    source: [["AU", 42]],
    level: 8,
    school: "Div",
    time: "React",
    range: "Self",
    components: "V,S",
    duration: "Instantaneous",
    description: "Change my failed D20 Test into a 20, or a triggering attack roll against me into a 1",
    descriptionFull: "You have a powerful sixth sense that guides you at just the right time. Turn the roll of your failed D20 Test into a 20, or turn the roll of the triggering attack roll into a 1."
};	
	//9th-level
SpellsList["detonate"] = {
    name: "Detonate",
    classes: ["sorcerer", "warlock", "wizard"],
    source: [["AU", 38]],
    reqLoS: true,
    level: 9,
    school: "Evoc",
    time: "Act",
    range: "500 ft",
    components: "V,S,M",
    compMaterial: "A piece of tinder",
    duration: "Instantaneous",
    save: "Con",
    description: "1 crea 10d10 Fire dmg (save \xBD); 60-ft Emanation all save (Disadv. if target died) or 10d10 Fire dmg",
    descriptionFull: [
        "You create a magical, explosive seed inside a creature you can see within range. The target makes a Constitution saving throw, taking 10d10 Fire damage on a failed save or half as much damage on a successful one.",
        "An explosion then originates from the target. Each creature in a 60-foot Emanation originating from the target (not including the target) makes a Dexterity saving throw, with Disadvantage if this spell reduced the target to 0 Hit Points. A creature takes 10d10 Fire damage on a failed save or half as much damage on a successful one.",
        "A nonmagical object that isn't being worn or carried also takes the damage if it's in the Emanation, and the object starts burning if it's flammable."
    ].join("\n   ")
};
SpellsList["hindsight"] = {
    name: "Hindsight",
    classes: ["wizard"],
    source: [["AU", 40]],
    level: 9,
    school: "Div",
    time: "10 min",
    range: "500 ft",
    components: "V,S,M\u2020",
    compMaterial: "A tiny hourglass worth 500+ GP, which the spell consumes",
    duration: "Conc, 1 h",
    description: "View visions of events in range from the past 10 years (1 day/sec); can pause, rewind, fast-forward",
    descriptionFull: "You peer backward through the fabric of time. You see visions of events that occurred within range throughout the past 10 years, racing by at approximately 1 day per second. Throughout the spell's duration, you can freely slow down, pause, rewind, or fast-forward through these visions."
};
SpellsList["invulnerability"] = {
    name: "Invulnerability",
    classes: ["wizard"],
    source: [["AU", 41]],
    level: 9,
    school: "Abjur",
    time: "Act",
    range: "Self",
    components: "V,S,M\u2020",
    compMaterial: "A piece of adamantine worth 500+ GP, which the spell consumes",
    duration: "Conc, 1 min",
    description: "I have Immunity to all damage until the spell ends",
    descriptionFull: "You have Immunity to all damage until the spell ends."
};
SpellsList["vision of elapsing eons"] = {
    name: "Vision of Elapsing Eons",
    classes: ["bard", "sorcerer", "warlock", "wizard"],
    source: [["AU", 45]],
    reqLoS: true,
    level: 9,
    school: "Illus",
    time: "Act",
    range: "120 ft",
    components: "V,S",
    duration: "1 min",
    save: "Int",
    description: "1 crea save or 10d12 Psychic dmg & Paralyzed; save EoT or 1 Exhaustion (ends on pass)",
    descriptionFull: [
        "You trick a creature you can see within range into believing it is watching itself and its surroundings crumble away, as if eons were passing in moments. The target must succeed on an Intelligence saving throw or take 10d12 Psychic damage and have the Paralyzed condition for the duration.",
        "While Paralyzed, the target repeats the save at the end of each of its turns. On a failed save, it gains 1 Exhaustion level. On a successful save, the spell ends. The spell ends early if someone within 5 feet of the target takes an action to shake it free from the illusion."
    ].join("\n   ")
};
SpellsList["wail of the banshee"] = {
    name: "Wail of the Banshee",
    classes: ["sorcerer", "warlock", "wizard"],
    source: [["AU", 45]],
    level: 9,
    school: "Necro",
    time: "Act",
    range: "60 ft",
    components: "V",
    duration: "Instantaneous",
    save: "Con",
    description: "Up to 10 crea; if \u226450 HP die; if >50 HP save or 12d10 Psychic dmg & Deafened 1 hr (save \xBD)",
    descriptionFull: "You emit a terrible scream that can kill those who hear it. Choose up to ten creatures within range. Each target with 50 Hit Points or fewer dies. Targets with more than 50 Hit Points make a Constitution saving throw. On a failed save, a target takes 12d10 Psychic damage and has the Deafened condition for 1 hour. On a successful save, a target takes half as much damage only. A target is unaffected by the spell if it can't hear you."
};	
// Battle Familiar Creature Stat Block
for (var i = 2; i <= 9; i++) {
    var multiAtks = Math.floor(i / 2);
    var talentedMod = Math.floor(i / 2);
    // Battle Familiar (Brute)
    CreatureList["battle familiar (brute, lvl " + i + ")"] = {
        name: "Battle Familiar - Brute (lvl " + i + ")",
        regExpSearch: new RegExp("^(?=.*battle)(?=.*familiar)(?=.*brute)(?=.*" + i + ").*$", "i"),
        source: [["AU", 36]],
        size: 3,
        type: ["Celestial", "Fey", "Fiend"],
        alignment: "Neutral",
        companion: "spell_creatures",
        companionApply: "spell_creatures",
        spell: "battle familiar",
        ac: 13 + i, // Base 11 + Spell Level + 2 (Brute)
        hp: 30 + (5 * (i - 2)), // Base 30 + 5 per level above 2
        hd: [0, 0],
        speed: "40 ft, Swim 30 ft",
        scores: [16, 16, 12, 8, 13, 10],
        condition_immunities: "Charmed, Frightened",
        senses: "Darkvision 60 ft",
        passivePerception: 11,
        languages: "Understands the languages you know",
        challengeRating: "0",
        proficiencyBonus: 2,
        proficiencyBonusLinked: true,
        attacksAction: multiAtks,
        traits: [{
            name: "Talented",
            description: "Add +" + talentedMod + " to any ability check or saving throw the familiar makes."
        }],
        actions: [{
            name: "Multiattack",
            description: "The familiar makes " + multiAtks + " Rend attack" + (multiAtks > 1 ? "s" : "") + "."
        }],
        attacks: [{
            name: "Rend",
            ability: 1, // Strength
            damage: [1, 8, "force"],
            range: "Melee (5 ft)",
            modifiers: ["max(oInt|oWis|oCha)-Str", i], // Replaces Str mod with Spellcasting mod for attack, adds spell level to damage
            abilitytodamage: true,
            description: ""
        }]
    };
    // Battle Familiar (Flyer/Stalker)
    CreatureList["battle familiar (flyer/stalker, lvl " + i + ")"] = {
        name: "Battle Familiar - Flyer/Stalker (lvl " + i + ")",
        regExpSearch: new RegExp("^(?=.*battle)(?=.*familiar)(?=.*(flyer|stalker))(?=.*" + i + ").*$", "i"),
        source: [["AU", 36]],
        size: 3,
        type: ["Celestial", "Fey", "Fiend"],
        alignment: "Neutral",
        companion: "spell_creatures",
        companionApply: "spell_creatures",
        spell: "battle familiar",
        ac: 11 + i, // Base 11 + Spell Level
        hp: 20 + (5 * (i - 2)), // Base 20 + 5 per level above 2
        hd: [0, 0],
        speed: "40 ft, Swim 30 ft, Fly 30 ft (hover; Flyer only)",
        scores: [16, 16, 12, 8, 13, 10],
        condition_immunities: "Charmed, Frightened",
        senses: "Darkvision 60 ft",
        passivePerception: 11,
        languages: "Understands the languages you know",
        challengeRating: "0",
        proficiencyBonus: 2,
        proficiencyBonusLinked: true,
        attacksAction: multiAtks,
        traits: [{
            name: "Talented",
            description: "Add +" + talentedMod + " to any ability check or saving throw the familiar makes."
        }, {
            name: "Flyby (Flyer Only)",
            description: "The familiar doesn't provoke Opportunity Attacks when it flies out of an enemy's reach."
        }],
        actions: [{
            name: "Multiattack",
            description: "The familiar makes " + multiAtks + " Rend attack" + (multiAtks > 1 ? "s" : "") + ". The familiar can replace one of these attacks with Prowl if available."
        }, {
            name: "Prowl (Stalker Only)",
            description: "The familiar moves up to half its Speed without provoking Opportunity Attacks. At the end of this movement, the familiar can take the Hide action."
        }],
        attacks: [{
            name: "Rend",
            ability: 1, // Strength
            damage: [1, 8, "force"],
            range: "Melee (5 ft)",
            modifiers: ["max(oInt|oWis|oCha)-Str", i], // Replaces Str mod with Spellcasting mod for attack, adds spell level to damage
            abilitytodamage: true,
            description: ""
        }]
    };
}	
// Plant Spirit Creature Stat Block
for (var i = 5; i <= 9; i++) {
    var multiAtks = Math.floor(i / 2);
    var plantHP = 50 + ((i - 5) * 10);
    // Plant Spirit (Tree)
    CreatureList["plant spirit (tree, lvl " + i + ")"] = {
        name: "Plant Spirit - Tree (lvl " + i + ")",
        regExpSearch: new RegExp("^(?=.*plant)(?=.*spirit)(?=.*tree)(?=.*" + i + ").*$", "i"),
        source: [["AU", 44]],
        size: 2, // Large
        type: "Plant",
        alignment: "Neutral",
        companion: "spell_creatures",
        companionApply: "spell_creatures",
        spell: "summon plant",
        ac: 13 + i, // Base 11 + Spell Level + 2 (Tree)
        hp: plantHP,
        hd: [0, 0],
        speed: "40 ft",
        scores: [17, 13, 14, 10, 13, 10],
        vulnerabilities: "Fire",
        passivePerception: 11,
        languages: "Understands the languages you know",
        challengeRating: "0",
        proficiencyBonus: 0,
        proficiencyBonusLinked: true,
        attacksAction: multiAtks,
        traits: [{
            name: "Siege Monster",
            description: "The spirit deals double damage to objects and structures."
        }],
        actions: [{
            name: "Multiattack",
            description: "The spirit makes " + multiAtks + " attack" + (multiAtks > 1 ? "s" : "") + "."
        }],
        attacks: [{
            name: "Slam",
            ability: 1, // Strength
            damage: [1, 10, "bludgeoning"],
            range: "Melee (5 ft)",
            modifiers: ["max(oInt|oWis|oCha)-Str", i], // Replaces Str mod with Spellcasting mod for attack, adds spell level to damage
            abilitytodamage: true,
            description: ""
        }]
    };
    // Plant Spirit (Fungus/Vine)
    CreatureList["plant spirit (fungus/vine, lvl " + i + ")"] = {
        name: "Plant Spirit - Fungus/Vine (lvl " + i + ")",
        regExpSearch: new RegExp("^(?=.*plant)(?=.*spirit)(?=.*(fungus|vine))(?=.*" + i + ").*$", "i"),
        source: [["AU", 44]],
        size: 2, // Large
        type: "Plant",
        alignment: "Neutral",
        companion: "spell_creatures",
        companionApply: "spell_creatures",
        spell: "summon plant",
        ac: 11 + i, // Base 11 + Spell Level
        hp: plantHP,
        hd: [0, 0],
        speed: "40 ft, Climb 40 ft (Vine only)",
        scores: [17, 13, 14, 10, 13, 10],
        vulnerabilities: "Slashing",
        passivePerception: 11,
        languages: "Understands the languages you know",
        challengeRating: "0",
        proficiencyBonus: 0,
        proficiencyBonusLinked: true,
        attacksAction: multiAtks,
        actions: [{
            name: "Multiattack",
            description: "The spirit makes " + multiAtks + " attack" + (multiAtks > 1 ? "s" : "") + "."
        }, {
            name: "Twist Away (Vine Only)",
            description: "As a Bonus Action, the spirit takes the Dash or Disengage action."
        }],
        attacks: [{
            name: "Slam (Vine)",
            ability: 1, // Strength
            damage: [1, 10, "bludgeoning"],
            range: "Melee (5 ft)",
            modifiers: ["max(oInt|oWis|oCha)-Str", i], 
            abilitytodamage: true,
            description: ""
        }, {
            name: "Spore Spray (Fungus)",
            ability: 6, // Charisma (Base 0, negates ability score damage bonus)
            damage: [1, 4, "poison"],
            range: "5 ft or 30 ft",
            modifiers: ["max(oInt|oWis|oCha)-Cha", i],
            abilitytodamage: false, // Prevents adding the base mod, leaving only Spell Level (+i)
            description: "Target Poisoned until its next turn ends (if already Poisoned, +3d4 Poison dmg instead)"
        }]
    };
}
// Dinosaur Spirit Creature Stat Block
for (var i = 6; i <= 9; i++) {
    var multiAtks = Math.floor(i / 2);
    var toughMod = Math.floor(i / 2);
    var dinoHP = 60 + ((i - 6) * 10);
    var strSave = 5 + toughMod; // Base Str (+5) + Tough Mod
    var conSave = 2 + toughMod; // Base Con (+2) + Tough Mod
    // Dinosaur Spirit (Ankylosaur)
    CreatureList["dinosaur spirit (ankylosaur, lvl " + i + ")"] = {
        name: "Dinosaur Spirit - Ankylosaur (lvl " + i + ")",
        regExpSearch: new RegExp("^(?=.*dinosaur)(?=.*spirit)(?=.*ankylosaur)(?=.*" + i + ").*$", "i"),
        source: [["AU", 43]],
        size: 1, // Huge
        type: "Beast",
        subtype: "Dinosaur",
        alignment: "Neutral",
        companion: "spell_creatures",
        companionApply: "spell_creatures",
        spell: "summon dinosaur",
        ac: 13 + i, // Base 11 + Spell Level + 2 (Ankylosaur)
        hp: dinoHP,
        hd: [0, 0],
        speed: "40 ft",
        scores: [21, 11, 15, 4, 12, 9],
        saves: [strSave, "", conSave, "", "", ""],
        passivePerception: 11,
        languages: "Understands the languages you know",
        challengeRating: "0",
        proficiencyBonus: 0,
        proficiencyBonusLinked: true,
        attacksAction: multiAtks,
        traits: [{
            name: "Tough",
            description: "Add +" + toughMod + " to any Strength or Constitution saving throw the spirit makes."
        }, {
            name: "Siege Monster",
            description: "The spirit deals double damage to objects and structures."
        }],
        actions: [{
            name: "Multiattack",
            description: "The spirit makes " + multiAtks + " attack" + (multiAtks > 1 ? "s" : "") + "."
        }],
        attacks: [{
            name: "Slam",
            ability: 1, // Strength
            damage: [1, 10, "bludgeoning"],
            range: "Melee (10 ft)",
            modifiers: ["max(oInt|oWis|oCha)-Str", i], // Replaces Str mod with Spellcasting mod for attack, adds spell level to damage
            abilitytodamage: true,
            description: ""
        }]
    };
    // Dinosaur Spirit (Triceratops/Tyrannosaur)
    CreatureList["dinosaur spirit (triceratops/tyrannosaur, lvl " + i + ")"] = {
        name: "Dinosaur Spirit - Tri/T-Rex (lvl " + i + ")",
        regExpSearch: new RegExp("^(?=.*dinosaur)(?=.*spirit)(?=.*(triceratops|tyrannosaur|tri|t-rex))(?=.*" + i + ").*$", "i"),
        source: [["AU", 43]],
        size: 1,
        type: "Beast",
        subtype: "Dinosaur",
        alignment: "Neutral",
        companion: "spell_creatures",
        companionApply: "spell_creatures",
        spell: "summon dinosaur",
        ac: 11 + i, // Base 11 + Spell Level
        hp: dinoHP,
        hd: [0, 0],
        speed: "40 ft",
        scores: [21, 11, 15, 4, 12, 9],
        saves: [strSave, "", conSave, "", "", ""],
        passivePerception: 11,
        languages: "Understands the languages you know",
        challengeRating: "0",
        proficiencyBonus: 0,
        proficiencyBonusLinked: true,
        attacksAction: multiAtks,
        traits: [{
            name: "Tough",
            description: "Add +" + toughMod + " to any Strength or Constitution saving throw the spirit makes."
        }],
        actions: [{
            name: "Multiattack",
            description: "The spirit makes " + multiAtks + " attack" + (multiAtks > 1 ? "s" : "") + "."
        }],
        attacks: [{
            name: "Bite (T-Rex)",
            ability: 1, 
            damage: [2, 10, "piercing"],
            range: "Melee (10 ft)",
            modifiers: ["max(oInt|oWis|oCha)-Str", i], 
            abilitytodamage: true,
            description: "\u2264Large target is Grappled (escape vs spell DC) & Restrained"
        }, {
            name: "Gore (Triceratops)",
            ability: 1, 
            damage: [1, 10, "piercing"],
            range: "Melee (5 ft)",
            modifiers: ["max(oInt|oWis|oCha)-Str", i], 
            abilitytodamage: true,
            description: "If moved 20+ ft straight toward \u2264Huge target: +1d10 Piercing dmg and knocked Prone"
        }, {
            name: "Slam",
            ability: 1,
            damage: [1, 10, "bludgeoning"],
            range: "Melee (10 ft)",
            modifiers: ["max(oInt|oWis|oCha)-Str", i],
            abilitytodamage: true,
            description: ""
        }]
    };
}
//Magic Items
	//Common
MagicItemsList["conjurer's canopy"] = {
    name: "Conjurer's Canopy",
    source: [["AU", 117]],
    type: "wondrous item",
    rarity: "common",
    description: "As a Magic action, I can stick this in the ground to create a 20-ft Cube canopy of transparent force. It protects from ordinary weather and keeps the area comfortable/dry. Lasts 1 hour or until I use a Magic action to end it. Once it disappears, it can't be used for 1d12 hours.",
    descriptionFull: "You can take a Magic action and use a command word to plunge this magical walking stick into the ground, where it stands straight up and projects a canopy of transparent force in a 20-foot Cube originating from the stick. The canopy lasts for 1 hour or until you end the effect early as a Magic action.\n   The canopy protects creatures and objects within that area from ordinary weather phenomena such as rain or snow. The atmosphere within the canopy's area is comfortable and dry, regardless of the weather. Creatures, objects, and magical effects can still pass through the canopy as usual.\n   When the canopy disappears, the stick can't be used again for 1d12 hours.",
    action: [["action", " (place/end)"]],
    usages: 1,
    recovery: "1d12 hours"
};
MagicItemsList["dictation quill"] = {
    name: "Dictation Quill",
    source: [["AU", 118]],
    type: "wondrous item",
    rarity: "common",
    description: "As a Magic action, I can set this by Paper/Parchment and Ink and speak a command word. It writes my spoken/signed words at 25 words/min for 1 hour, until out of supplies, or until I use a command word to stop it (no action).",
    descriptionFull: "When you take a Magic action to set this magic quill next to Paper or Parchment and a bottle of Ink and use a command word, the quill writes your next spoken or signed words, in the language you're using, at a rate of 25 words per minute. The quill writes for 1 hour; until it has no Paper, Parchment, or Ink; or until you use another command word to stop it (no action required).",
    action: [["action", " (start)"]]
};
MagicItemsList["elocutionist's lexicon"] = {
    name: "Elocutionist's Lexicon",
    source: [["AU", 119]],
    type: "wondrous item",
    rarity: "common",
    description: "While holding this magic dictionary, I can use a Magic action to try to recall a specific word. The book automatically opens to the page containing the exact word I'm searching for.",
    descriptionFull: "While holding this magic dictionary, you can take a Magic action and try to recall a specific word. The book automatically opens to the page containing the exact word you're searching for.",
    action: [["action", " (recall word)"]]
};
MagicItemsList["ensorcelled missive"] = {
    name: "Ensorcelled Missive",
    source: [["AU", 119]],
    type: "wondrous item",
    rarity: "common",
    description: "Functions as Parchment. After writing on it, I can take a Magic action to fold/seal it while speaking a password. If a creature unseals it without the password, the writing appears as an unknown, unintelligible script.",
    descriptionFull: "This item functions as a sheet of Parchment. After writing on it, you can take a Magic action to fold or roll the sheet and seal it while speaking or signing a word or short phrase. If a creature unseals the sheet without using the same word or phrase, the writing on the sheet appears as if it were written in an unknown and unintelligible script.",
    action: [["action", " (seal)"]]
};
MagicItemsList["evergreen fertilizer"] = {
    name: "Evergreen Fertilizer",
    source: [["AU", 119]],
    type: "wondrous item",
    rarity: "common",
    description: "Once sprinkled on the soil around a nonmagical plant, this pungent powder keeps the plant healthy for the next 365 days.",
    descriptionFull: "Once sprinkled on the soil around a nonmagical plant, this pungent powder keeps the plant healthy for the next 365 days."
};
MagicItemsList["homeward compass"] = {
    name: "Homeward Compass",
    source: [["AU", 119]],
    type: "wondrous item",
    rarity: "common",
    description: "While holding this compass, I can take a Magic action to orient it to my current location (1 location at a time). It always points there if on the same plane. I can use a Magic action to end its orientation.",
    descriptionFull: "While holding this small brass compass, you can take a Magic action to orient the compass to your current location. Thereafter, the compass's needle always points toward that location. The compass can be oriented to only one location at a time. As a Magic action, you can end the compass's current orientation. When it isn't oriented to a particular location, or if the compass is on a different plane of existence than the location to which it is oriented, the compass's needle spins aimlessly.",
    action: [["action", " (orient/end)"]]
};
MagicItemsList["lucky foot"] = {
    name: "Lucky Foot",
    source: [["AU", 119]],
    type: "wondrous item",
    rarity: "common",
    description: "When I roll a 1 on a saving throw or ability check, I can reroll the die and must use the new roll. The foot then disintegrates.",
    descriptionFull: "When you roll a 1 on a saving throw or ability check, you can use this preserved rabbit foot's magic to reroll the die. You must use the new roll, and the foot disintegrates.",
    usages: 1,
    recovery: "Never"
};
MagicItemsList["spell component ring"] = {
    name: "Spell Component Ring",
    source: [["AU", 123]],
    type: "ring",
    rarity: "common",
    description: "As a Magic action, I can store 1 unconsumed, non-costly Material component for a prepared spell in this ring. While wearing it, I don't need a free hand to access that component when casting that spell.",
    descriptionFull: "This steel ring has a discreet chamber lined with a mystical inscription. As a Magic action, choose one spell you have prepared that requires a Material component; the required Material component must neither have a cost specified nor be consumed by the spell. You store that spell's Material component in the ring's chamber.\n   Whenever you cast the chosen spell, you don't need to have a hand free to access its Material component, provided you are wearing the ring. The ring can hold the Material component for one spell at a time.",
    action: [["action", " (store component)"]]
};
MagicItemsList["sweeping broom"] = {
    name: "Sweeping Broom",
    source: [["AU", 124]],
    type: "wondrous item",
    rarity: "common",
    description: "As a Magic action, I speak the command word and pick a point on the ground within 60 ft. It animates and sweeps dust/detritus in a 20-ft square centered there until I use a Magic action to deactivate it.",
    descriptionFull: "As a Magic action, you can use this unassuming broom's command word, choosing a point you can see on the ground within 60 feet of yourself. The broom animates and sweeps dust and detritus from the ground in a 20-foot square centered on the chosen point. It sweeps that area until you take another Magic action to deactivate it.",
    action: [["action", " (activate/deactivate)"]]
};	
	//Uncommon
MagicItemsList["boon companions' bands"] = {
    name: "Boon Companions' Bands",
    source: [["AU", 117]],
    type: "ring",
    rarity: "uncommon",
    description: "These come in a pair. When I cast a spell or use a feature that forces an AoE save, the wearer of the matching band automatically succeeds and takes no damage (if it normally takes half on success). Once used by either band, they can't be used until the next dawn. If one is destroyed, the other turns to dust.",
    descriptionFull: "Boon Companions' Bands come in pairs and bear matching engravings. While wearing one of the bands, when you cast a spell or use a feature that forces other creatures in its area of effect to make a saving throw, you can protect the creature wearing the matching band if the creature is in the effect's area. That creature automatically succeeds on its saving throw against the effect, and it takes no damage if it would normally take half damage on a successful save.\n   Once this property is used by either band, the bands can't be used again until the next dawn. If one of the bands in a pair is destroyed, the other one crumbles to dust.",
    usages: 1,
    recovery: "dawn"
};
MagicItemsList["dispelling ammunition"] = {
    name: "Dispelling Ammunition",
    source: [["AU", 118]],
    type: "ammunition",
    rarity: "uncommon",
    description: "When a target takes damage from this magical piece of ammunition, any ongoing spell of level 3 or lower on the target ends. Once it deals damage to a target, the ammunition is no longer magical.",
    descriptionFull: "When a target takes damage from this magical piece of ammunition, any ongoing spell of level 3 or lower on the target ends. Once it deals damage to a target, the ammunition is no longer magical."
};
MagicItemsList["goading ammunition"] = {
    name: "Goading Ammunition",
    source: [["AU", 119]],
    type: "ammunition",
    rarity: "uncommon",
    description: "If this magic ammo hits and damages a creature, the target must make a DC 13 Cha save or be unable to take Reactions until the start of its next turn. Once it hits a target, it is no longer magical.",
    descriptionFull: "If this piece of magic ammunition hits a creature and deals damage, the target makes a DC 13 Charisma saving throw. On a failed save, the target can't take Reactions until the start of its next turn, as it sputters and rages impotently. Once it hits a target, the ammunition is no longer magical."
};
MagicItemsList["magewright's gloves"] = {
    name: "Magewright's Gloves",
    source: [["AU", 120]],
    type: "wondrous item",
    rarity: "uncommon",
    attunement: true,
    description: "While I wear these gloves, I work as efficiently as two characters when determining the time it takes to craft nonmagical items with Alchemist's Supplies, Brewer's Supplies, Calligrapher's Supplies, Cartographer's Tools, Glassblower's Tools, or Jeweler's Tools.",
    descriptionFull: "While you wear these gloves, you work as efficiently as two characters when determining how much time it takes to craft nonmagical items using any of the following tools: Alchemist's Supplies, Brewer's Supplies, Calligrapher's Supplies, Cartographer's Tools, Glassblower's Tools, or Jeweler's Tools."
};
MagicItemsList["martialist's quarterstaff"] = {
    name: "Martialist's Quarterstaff",
    source: [["AU", 120]],
    type: "weapon (quarterstaff)",
    rarity: "uncommon",
    attunement: true,
    description: "This staff has 4 charges (regains 1d4 at dawn). Searing Smite (2 charges, DC 13). Throw (1 charge, Attack action, Thrown 20/60, returns). Trip (1 charge, melee atk, Adv. on atk, hit: DC 13 Str save or Prone). It has the Topple Mastery.",
    descriptionFull: "This magic Quarterstaff has 4 charges and regains 1d4 expended charges daily at dawn. It has the following additional properties.\n   Searing Smite. You can expend 2 charges to cast the Searing Smite spell (DC 13).\n   Throw. When you take the Attack action, you can expend 1 charge to imbue the staff with magical velocity. Until the end of your next turn, the staff gains the Thrown property, with a normal range of 20 feet and a long range of 60 feet, and immediately after you make a ranged attack with the weapon, it flies back to your hand.\n   Trip. When you make a melee attack with this weapon, you can expend 1 charge to give yourself Advantage on the attack roll. If the attack hits, the target makes a DC 13 Strength saving throw. On a failed save, the target has the Prone condition.\n   Versatile. A Versatile weapon can be used with one or two hands. A damage value in parentheses appears with the property. The weapon deals that damage when used with two hands to make a melee attack.\n   Mastery: Topple. If you hit a creature with this weapon, you can force the creature to make a Constitution saving throw (DC 8 plus the ability modifier used to make the attack roll and your Proficiency Bonus). On a failed save, the creature has the Prone condition.",
    usages: 4,
    recovery: "dawn",
    additional: "regains 1d4",
    weaponOptions: [{
        baseWeapon: "quarterstaff",
        regExpSearch: /^(?=.*martialist)(?=.*quarterstaff).*$/i,
        name: "Martialist's Quarterstaff",
        source: [["AU", 120]],
        description: "Versatile (1d8); Topple mastery; See magic item for charge uses",
        selectNow: true
    }],
    spellcastingBonus: [{
        name: "Searing Smite (2 charges)",
        spells: ["searing smite"],
        selection: ["searing smite"],
        firstCol: 2
    }],
    fixedDC: 13
};
MagicItemsList["orb of divination detection"] = {
    name: "Orb of Divination Detection",
    source: [["AU", 121]],
    type: "wondrous item",
    rarity: "uncommon",
    attunement: true,
    description: "I can use this glass orb as an Arcane Focus. When I am targeted by a spell from the Divination school, the orb glows bright green for the spell's duration.",
    descriptionFull: "This glass orb is a useful defense against meddlesome mages and magic-wielding spies.\n   Detect Divination. When you are targeted by a spell from the Divination school, the orb glows bright green for the spell's duration.\n   Spellcasting Focus. This orb can be used as an Arcane Focus."
};
MagicItemsList["orb of sorcery"] = {
    name: "Orb of Sorcery",
    source: [["AU", 121]],
    type: "wondrous item",
    rarity: "uncommon",
    attunement: true,
    prerequisite: "Requires attunement by a Sorcerer",
    prereqeval: function (v) { return classes.known.sorcerer ? true : false; },
    description: "I can use this orb as a Spellcasting Focus for my Sorcerer spells. While holding it, I can take a Magic action to regain up to 2 expended Sorcery Points. Once this property is used, it can't be used again until the next dawn.",
    descriptionFull: "Ribbons of varicolored light swirl inside this magical glass orb.\n   Sorcerous Reservoir. While holding this orb, you can take a Magic action to regain up to 2 expended Sorcery Points. Once this property is used, it can't be used again until the next dawn.\n   Spellcasting Focus. You can use the orb as a Spellcasting Focus for your Sorcerer spells.",
    usages: 1,
    recovery: "dawn",
    action: [["action", " (regain sorcery points)"]]
};
MagicItemsList["potion of dragon's breath"] = {
    name: "Potion of Dragon's Breath",
    source: [["AU", 121]],
    type: "potion",
    rarity: "uncommon",
    magicItemTable: "B",
    description: "When I drink this potion, I gain the effect of the Dragon's Breath spell (save DC 13) for 1 minute. No concentration is required. Use the 'Choose Feature' button to select the damage type.",
    descriptionFull: "When you drink this potion, you gain the effect of the dragon's breath spell (save DC 13) for 1 minute. The damage type is chosen when the potion is created.",
    weight: 0.5,
    allowDuplicates: true,
    fixedDC: 13,
    spellcastingBonus: [{
        name: "Potion of Dragon's Breath",
        spells: ["dragon's breath"],
        selection: ["dragon's breath"]
		times: 1,
    }],
    choices: ["Acid", "Cold", "Fire", "Lightning", "Poison"],
    "acid": {
        name: "Potion of Dragon's Breath (Acid)",
        description: "When I drink this potion, I gain the effect of the Dragon's Breath spell (Acid, save DC 13) for 1 minute. No concentration is required."
    },
    "cold": {
        name: "Potion of Dragon's Breath (Cold)",
        description: "When I drink this potion, I gain the effect of the Dragon's Breath spell (Cold, save DC 13) for 1 minute. No concentration is required."
    },
    "fire": {
        name: "Potion of Dragon's Breath (Fire)",
        description: "When I drink this potion, I gain the effect of the Dragon's Breath spell (Fire, save DC 13) for 1 minute. No concentration is required."
    },
    "lightning": {
        name: "Potion of Dragon's Breath (Lightning)",
        description: "When I drink this potion, I gain the effect of the Dragon's Breath spell (Lightning, save DC 13) for 1 minute. No concentration is required."
    },
    "poison": {
        name: "Potion of Dragon's Breath (Poison)",
        description: "When I drink this potion, I gain the effect of the Dragon's Breath spell (Poison, save DC 13) for 1 minute. No concentration is required."
    }
};
MagicItemsList["potion of tirelessness"] = {
    name: "Potion of Tirelessness",
    source: [["AU", 121]],
    type: "potion",
    rarity: "uncommon",
    description: "For 24 hours after drinking this, I don't need to sleep, and magic can't put me to sleep. During this duration, I can finish a Long Rest in 4 hours if I spend those hours in a state of quiet focus, during which I retain consciousness.",
    descriptionFull: "After you drink this potion, you don't need to sleep, and magic can't put you to sleep. This effect lasts 24 hours. For the duration, you can finish a Long Rest in 4 hours if you spend those hours in a state of quiet focus, during which you retain consciousness.\n   This pale red potion is as thick as molasses, yet it slides out of the bottle as readily as oil."
};
MagicItemsList["ring of dedicated focus"] = {
    name: "Ring of Dedicated Focus",
    source: [["AU", 122]],
    type: "ring",
    rarity: "uncommon",
    attunement: true,
    description: "When I fail a Constitution saving throw to maintain Concentration, I can roll up to two of my unexpended Hit Dice and add the total rolled to my save, potentially turning the failure into a success. The rolled Hit Dice are then expended.",
    descriptionFull: "The magical spike on the side of this ring allows you to sharpen your focus at a moment's notice. When you fail a Constitution saving throw to maintain Concentration, you can roll up to two of your unexpended Hit Dice and add the total rolled to your save, potentially turning the failure into a success. The rolled Hit Dice are then expended."
};
MagicItemsList["spell-slinger's puppet"] = {
    name: "Spell-Slinger's Puppet",
    source: [["AU", 123]],
    type: "wondrous item",
    rarity: "uncommon",
    attunement: true,
    description: "While holding this doll, I can use a Bonus Action to levitate it up to 30 ft away. It hovers for 1 min (end as BA). I can move it 30 ft as a BA. While it's within 30 ft, I can speak through its mouth, allowing me to cast V component spells even if I can't speak.",
    descriptionFull: "As a Bonus Action while holding this ventriloquist's doll, you can pull the cord on the doll's back to cause the doll to levitate to an unoccupied space you can see within 30 feet of yourself and hover there. While the doll hovers, you can take a Bonus Action to cause the doll to move up to 30 feet to another unoccupied space you can see within 30 feet of yourself. The doll hovers for 1 minute or until you end the effect as a Bonus Action.\n   While the doll is within 30 feet of you, you can speak using the doll's mouth rather than your own. This allows you to, for instance, cast a spell with a Verbal component even if you can't speak.",
    action: [["bonus action", " (animate/move/end)"]]
};
MagicItemsList["thespian's playbill"] = {
    name: "Thespian's Playbill",
    source: [["AU", 124]],
    type: "wondrous item",
    rarity: "uncommon",
    attunement: true,
    description: "While holding this magical theater program, whenever I take the Study action and make an Intelligence check, I gain a bonus to the check equal to my Charisma modifier (minimum of +1).",
    descriptionFull: "While holding this magical theater program, whenever you take the Study action and make an Intelligence check, you gain a bonus to the check equal to your Charisma modifier (minimum of +1)."
};
MagicItemsList["thief's thimble"] = {
    name: "Thief's Thimble",
    source: [["AU", 124]],
    type: "wondrous item",
    rarity: "uncommon",
    attunement: true,
    description: "This thimble has 30 HP. While wearing it, if I trigger a trap and take damage, the thimble takes the damage instead. If it drops to 0 HP, it breaks, and I take any remaining damage.",
    descriptionFull: "This magic thimble aids thieves in foiling traps. While wearing this thimble, if you trigger a trap and take damage, the thimble takes the damage instead.\n   The thimble has 30 Hit Points. If the thimble is reduced to 0 Hit Points, it breaks, and you take any remaining damage."
};
MagicItemsList["wand of freshness"] = {
    name: "Wand of Freshness",
    source: [["AU", 125]],
    type: "wand",
    rarity: "uncommon",
    description: "This wand has 4 charges and regains 1d4 + 1 expended charges daily at dawn. While holding it, I can expend 1 charge to cast the Purify Food and Drink spell from it.",
    descriptionFull: "This wand has 4 charges and regains 1d4 + 1 expended charges daily at dawn. While holding it, you can expend 1 charge to cast the Purify Food and Drink spell from it.",
    usages: 4,
    recovery: "dawn",
    additional: "regains 1d4+1",
    spellcastingBonus: [{
        name: "1 charge",
        spells: ["purify food and drink"],
        selection: ["purify food and drink"],
        firstCol: 1
    }]
};	
	//Rare
MagicItemsList["arcane chatelaine"] = {
    name: "Arcane Chatelaine",
    source: [["AU", 116]],
    type: "wondrous item",
    rarity: "rare",
    description: "This clasp has 6 spectral keys. As a Magic action, I can touch a key to a closed door, window, gate, container, or hatch to cast the Arcane Lock spell on it. Once a key is used, it disappears. When all 6 disappear, the chatelaine vanishes.",
    descriptionFull: "This ornate clasp has six spectral keys attached to it. As a Magic action, you can touch one of the keys to a closed door, window, gate, container, or hatch to cast the Arcane Lock spell on it. Once a key is used, it disappears. When all six keys have disappeared, the chatelaine disappears.",
    action: [["action", " (Arcane Lock)"]],
    usages: 6,
    recovery: "Never"
};
MagicItemsList["arcanist's bestiary"] = {
    name: "Arcanist's Bestiary",
    source: [["AU", 116]],
    type: "wondrous item",
    rarity: "rare",
    attunement: true,
    description: "I choose to gain proficiency in Arcana, History, Nature, or Religion (can change on Long Rest). I can cast Charm Monster (DC 15) 1/dawn; non-Humanoids have Disadv. When taking the Study action on Aberrations, Constructs, Elementals, Fey, or Monstrosities, a successful Arcana check reveals any Resistances, Immunities, or Vulnerabilities.",
    descriptionFull: "Hundreds of pages of illustrations, tables, and diagrams about a wide variety of monsters fill this magical tome.\n   Charm Monster. While holding the book, you can cast the Charm Monster spell (spell save DC 15) from it. The target has Disadvantage on the saving throw against this spell if it isn't a Humanoid. You can't cast this spell again in this way until the next dawn.\n   Extensive Knowledge. When you become attuned to the book, you gain proficiency in one of the following skills of your choice: Arcana, History, Nature, or Religion. Whenever you finish a Long Rest, you can change your choice. If your Attunement to the book ends, you lose this proficiency.\n   Monster Primer. While carrying the book, whenever you take a Study action to make an Intelligence (Arcana) check to recall information about an Aberration, Construct, Elemental, Fey, or Monstrosity you can see, on a successful check, you learn whether that creature has any Immunities, Resistances, or Vulnerabilities. If the creature has any, you know what they are.",
    spellcastingBonus: [{
        name: "1/dawn",
        spells: ["charm monster"],
        selection: ["charm monster"],
        firstCol: "oncelr"
    }],
    fixedDC: 15,
    choices: ["Arcana Proficiency", "History Proficiency", "Nature Proficiency", "Religion Proficiency"],
    choicesNotInMenu: true,
    "arcana proficiency": { skills: ["Arcana"] },
    "history proficiency": { skills: ["History"] },
    "nature proficiency": { skills: ["Nature"] },
    "religion proficiency": { skills: ["Religion"] }
};
MagicItemsList["bellows of strangulation"] = {
    name: "Bellows of Strangulation",
    source: [["AU", 116]],
    type: "wondrous item",
    rarity: "rare",
    description: "Has 6 charges (regains 1d6+1 dawn). Magic action: spend 1 charge for 1 crea in 60 ft (DC 15 Con save or Incapacitated 1 min); 3 charges for 30-ft cone of same effect (save EoT to end); or 5 charges to cast Cloudkill (DC 17). 1 on d20 if 0 charges = destroyed.",
    descriptionFull: "This bellows has 6 charges. While you are holding it, you can take a Magic action and use one of three command words to cause one of the following effects:\n   First Command Word. You expend 1 charge to cause the bellows to suck the energy from one creature you can see within 60 feet. The creature must succeed on a DC 15 Constitution saving throw or have the Incapacitated condition for 1 minute. The creature repeats the save at the end of each of its turns, ending the effect on itself on a success.\n   Second Command Word. You expend 3 charges to cause the bellows to suck the energy from creatures in a 30-foot Cone. Each creature in that area must succeed on a DC 15 Constitution saving throw or have the Incapacitated condition for 1 minute. An affected creature repeats the save at the end of each of its turns, ending the effect on itself on a success.\n   Third Command Word. You expend 5 charges to cast the Cloudkill spell (spell DC 17) from the bellows.\n   Regaining Charges. The bellows regains 1d6 + 1 charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the bellows explodes in a harmless burst of wind and is lost forever.",
    action: [["action", " (1, 3, or 5 charges)"]],
    usages: 6,
    recovery: "dawn",
    additional: "regains 1d6+1",
    spellcastingBonus: [{
        name: "5 charges",
        spells: ["cloudkill"],
        selection: ["cloudkill"],
        firstCol: 5
    }],
    fixedDC: 17
};
MagicItemsList["blood amulet"] = {
    name: "Blood Amulet",
    source: [["AU", 116]],
    type: "wondrous item",
    rarity: "rare",
    attunement: true,
    description: "Has 3 charges (regains 1d3 dawn). When I deal damage to a creature, I can expend 1 charge to deal an extra 2d10 Necrotic damage and force the target to make a DC 15 Constitution saving throw. On a failure, it gains 1 Exhaustion level.",
    descriptionFull: "This delicate amulet looks like a diminutive beating heart impaled with spikes. It has 3 charges and regains 1d3 charges daily at dawn.\n   Whenever you deal damage to a creature, you can expend 1 charge to deal an extra 2d10 Necrotic damage to the target and force it to make a DC 15 Constitution saving throw. On a failed save, the target gains 1 Exhaustion level.",
    usages: 3,
    recovery: "dawn",
    additional: "regains 1d3"
};
MagicItemsList["dissuader"] = {
    name: "Dissuader",
    source: [["AU", 118]],
    type: "weapon (quarterstaff)",
    rarity: "rare",
    attunement: true,
    description: "This +1 quarterstaff has 3 properties, each usable 1/dawn. Calm Emotions: cast the spell (DC 15). Dissuading Aura: Magic action for 1 min 30-ft Emanation (enter/end turn DC 15 Wis save or Frightened till next turn starts). Repel: Reaction when crea enters 5 ft (30-ft Emanation DC 15 Str save or pushed 30 ft).",
    descriptionFull: "This staff can be wielded as a magic Quarterstaff that grants a +1 bonus to attack rolls and damage rolls made with it. It also has the following additional properties. Once one of these properties is used, that property can't be used again until the next dawn.\n   Calm Emotions. You can cast the Calm Emotions spell (save DC 15) from the staff.\n   Dissuading Aura. As a Magic action while holding the staff, you can create a 30-foot Emanation of mental unrest originating from you that lasts for 1 minute. Whenever the Emanation enters the space of a creature you can see and whenever a creature you can see enters the Emanation or ends its turn there, you can force that creature to make a DC 15 Wisdom saving throw. On a failed save, the creature has the Frightened condition until the start of its next turn.\n   Repel. When a creature enters a space within 5 feet of you, you can take a Reaction to create a shock wave of force. Each creature of your choice in a 30-foot Emanation originating from you must succeed on a DC 15 Strength saving throw or be pushed up to 30 feet straight away from you.\n   Versatile. A Versatile weapon can be used with one or two hands. A damage value in parentheses appears with the property. The weapon deals that damage when used with two hands to make a melee attack.\n   Mastery: Topple. If you hit a creature with this weapon, you can force the creature to make a Constitution saving throw (DC 8 plus the ability modifier used to make the attack roll and your Proficiency Bonus). On a failed save, the creature has the Prone condition.",
    weaponOptions: [{
        baseWeapon: "quarterstaff",
        regExpSearch: /dissuader/i,
        name: "Dissuader",
        source: [["AU", 118]],
        description: "Versatile (1d8); Topple mastery; 3 properties 1/dawn",
        selectNow: true
    }],
    calcChanges: {
        atkAdd: [
            function (fields, v) {
                if (v.isMeleeWeapon && (/dissuader/i).test(v.WeaponTextName)) { v.theWea.isMagicWeapon = true; }
            }, ''
        ],
        atkCalc: [
            function (fields, v, output) {
                if (v.isMeleeWeapon && (/dissuader/i).test(v.WeaponTextName)) { output.magic = v.thisWeapon[1] + 1; }
            }, ''
        ]
    },
    action: [["action", " (Dissuading Aura)"], ["reaction", " (Repel)"]],
    spellcastingBonus: [{
        name: "1/dawn",
        spells: ["calm emotions"],
        selection: ["calm emotions"],
        firstCol: "oncelr"
    }],
    fixedDC: 15,
    extraLimitedFeatures: [
        { name: "Dissuader: Dissuading Aura", usages: 1, recovery: "dawn" },
        { name: "Dissuader: Repel", usages: 1, recovery: "dawn" }
    ]
};
MagicItemsList["dream weaver"] = {
    name: "Dream Weaver",
    source: [["AU", 119]],
    type: "wondrous item",
    rarity: "rare",
    attunement: true,
    description: "While this tapestry is hung and I am in 30 ft: if I'm targeted by Dream, it records the caster's face/name. While Unconscious, I have Adv. on Int/Wis/Cha saves. During a Long Rest, I can study it 1 hr to roll 1d20. Once before my next Long Rest, I can replace a D20 Test with that roll (must choose before rolling).",
    descriptionFull: "This magic tapestry can be hung on a wall or another suitable vertical surface. The tapestry magically unravels and reweaves itself to illustrate the content and emotions of your most recent dreams.\n   You gain the following benefits while the tapestry is hung and you are within 30 feet of it.\n   Dream Wisdom. During a Long Rest, you can spend an hour studying the tapestry. At the end of the Long Rest, roll 1d20 and record the number rolled. Once before you finish a Long Rest, you can replace any D20 Test you make with this result. You must choose to do so before you roll the D20 Test.\n   Message Recorder. If you are targeted by the Dream spell, the tapestry records the appearance and name of the spell's caster in its design.\n   Mind Wall. While you have the Unconscious condition, you have Advantage on Intelligence, Wisdom, and Charisma saving throws.",
    usages: 1,
    recovery: "long rest",
    savetxt: { text: ["Adv. on Int/Wis/Cha saves while Unconscious"] }
};
MagicItemsList["mage breaker"] = {
    name: "Mage Breaker",
    source: [["AU", 120]],
    type: "weapon (dagger)",
    rarity: "rare",
    description: "This +1 dagger grants the Nick mastery. When I hit a Concentrating creature with an attack roll using this weapon and deal damage, the creature has Disadvantage on its saving throw to maintain Concentration.",
    descriptionFull: "You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon.\n   When you hit a Concentrating creature with an attack roll using this weapon and deal damage, the creature has Disadvantage on the saving throw it makes to maintain Concentration.\n   Finesse. When making an attack with a Finesse weapon, use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.\n   Light. When you take the Attack action on your turn and attack with a Light weapon, you can make one extra attack as a Bonus Action later on the same turn. That extra attack must be made with a different Light weapon, and you don't add your ability modifier to the extra attack's damage unless that modifier is negative.\n   Thrown. If a weapon has the Thrown property, you can throw the weapon to make a ranged attack, and you can draw that weapon as part of the attack.\n   Mastery: Nick. When you make the extra attack of the Light property, you can make it as part of the Attack action instead of as a Bonus Action. You can make this extra attack only once per turn.",
    weaponOptions: [{
        baseWeapon: "dagger",
        regExpSearch: /mage breaker/i,
        name: "Mage Breaker",
        source: [["AU", 120]],
        description: "Finesse, Light, Thrown; Nick mastery; Hit: Disadv. on Conc. saves",
        selectNow: true
    }],
    calcChanges: {
        atkAdd: [
            function(fields, v) {
                if (v.isWeapon && (/mage breaker/i).test(v.WeaponTextName)) { v.theWea.isMagicWeapon = true; }
            }, ''
        ],
        atkCalc: [
            function(fields, v, output) {
                if (v.isWeapon && (/mage breaker/i).test(v.WeaponTextName)) { output.magic = v.thisWeapon[1] + 1; }
            }, ''
        ]
    }
};
MagicItemsList["mage's manacle"] = {
    name: "Mage's Manacle",
    source: [["AU", 120]],
    type: "wondrous item",
    rarity: "rare",
    description: "As a Magic action, I can target a \u2264Large Grappled/Incapacitated creature in 5 ft. DC 15 Dex save or it is Restrained and bound to me by a chain (it moves with me). Lasts 8 hours or until released. 1/dawn.",
    descriptionFull: "As a Magic action while wearing this bracelet, you can target a Large or smaller creature within 5 feet of yourself that has the Grappled or Incapacitated condition. The target must succeed on a DC 15 Dexterity saving throw or become magically bound to you by a spectral chain and manacle that spring from the bracelet.\n   While bound in this way, the creature has the Restrained condition. When you move, the creature moves with you.\n   A creature remains bound for 8 hours or until you release it (no action required). If the manacle takes damage from a Disintegrate spell, it is destroyed; nothing else can break or harm it. Once the manacle has bound a creature, it can't be used again this way until the next dawn.",
    usages: 1,
    recovery: "dawn",
    action: [["action", ""]]
};
MagicItemsList["namer's needle"] = {
    name: "Namer's Needle",
    source: [["AU", 120]],
    type: "weapon (dagger)",
    rarity: "rare",
    description: "This +1 dagger grants the Nick mastery. On hit: target DC 15 Wis save or it clearly states/signs its name (immune 24h on pass). When I hit, I can say its name to turn the hit into a Critical Hit (1/dawn).",
    descriptionFull: "You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon.\n   Identify Target. When you hit a creature with an attack roll using this weapon, you can compel the target to reveal its identity. The target makes a DC 15 Wisdom saving throw. On a failed save, the target says or signs its name clearly and emphatically. On a successful save, the target is immune to this effect for the next 24 hours. If the creature can't speak or sign a language, it automatically succeeds on the save.\n   Named Target. When you hit a creature with an attack roll using this weapon, you can say or sign the target's name clearly and emphatically to turn the hit into a Critical Hit. Once this property is used, it can't be used again until the next dawn.\n   Finesse, Light, Thrown, Mastery: Nick.",
    weaponOptions: [{
        baseWeapon: "dagger",
        regExpSearch: /namer\'s needle/i,
        name: "Namer's Needle",
        source: [["AU", 120]],
        description: "Finesse, Light, Thrown; Nick mastery; Hit: DC 15 Wis save or state name",
        selectNow: true
    }],
    calcChanges: {
        atkAdd: [
            function(fields, v) {
                if (v.isWeapon && (/namer\'s needle/i).test(v.WeaponTextName)) { v.theWea.isMagicWeapon = true; }
            }, ''
        ],
        atkCalc: [
            function(fields, v, output) {
                if (v.isWeapon && (/namer\'s needle/i).test(v.WeaponTextName)) { output.magic = v.thisWeapon[1] + 1; }
            }, ''
        ]
    },
    extraLimitedFeatures: [{ name: "Namer's Needle (Auto-Crit)", usages: 1, recovery: "dawn" }]
};
MagicItemsList["prismatic rune"] = {
    name: "Prismatic Rune",
    source: [["AU", 122]],
    type: "wondrous item",
    rarity: "rare",
    attunement: true,
    prerequisite: "Requires attunement by a Spellcaster",
    prereqeval: function (v) { return v.isSpellcaster; },
    description: "When I finish a Long Rest, I choose Acid, Cold, Fire, Lightning, or Thunder to imbue this rune. It has 6 charges (regains 1d6 dawn). When I cast a spell that deals damage, I can expend 1 charge to change the spell's damage type to the imbued type.",
    descriptionFull: "A magical rune is etched on this small stone made of multicolored quartz. When you finish a Long Rest, choose one of the following damage types: Acid, Cold, Fire, Lightning, or Thunder. The rune is imbued with the chosen damage type until you finish another Long Rest.\n   Charges. The rune has 6 charges and regains 1d6 expended charges daily at dawn. When you cast a spell that deals damage, you can expend 1 charge to change the spell's damage type to the damage type chosen for the rune.",
    usages: 6,
    recovery: "dawn",
    additional: "regains 1d6"
};
MagicItemsList["scholar's anchoring bangle"] = {
    name: "Scholar's Anchoring Bangle",
    source: [["AU", 122]],
    type: "wondrous item",
    rarity: "rare",
    attunement: true,
    description: "When I take the Study action and make a proficient Int check, I can treat a d20 roll of 9 or lower as a 10. When I fail a Constitution saving throw to maintain Concentration, I can take a Reaction to succeed instead (1/dawn).",
    descriptionFull: "This heavy magical bracelet inures your mind against potential distractions. While wearing this bracelet, you gain the following benefits.\n   Deep Knowledge. When you take the Study action and make an Intelligence check using a skill in which you have proficiency, you can treat a d20 roll of 9 or lower as a 10.\n   Single-Minded Focus. When you fail a Constitution saving throw to maintain Concentration, you can take a Reaction to succeed instead. Once you use this property, it can't be used again until the next dawn.",
    usages: 1,
    recovery: "dawn",
    action: [["reaction", " (maintain concentration)"]]
};
MagicItemsList["secret keeper's circlet"] = {
    name: "Secret Keeper's Circlet",
    source: [["AU", 122]],
    type: "wondrous item",
    rarity: "rare",
    attunement: true,
    description: "As a Magic action, I can specify a trigger. For the next 24 hours, if that trigger occurs, the circlet erases my memories of everything from the time I chose the trigger until the trigger occurred. Only Wish can restore the memory. 1/dawn.",
    descriptionFull: "This circlet allows the wearer to wipe from their memory any knowledge of a specific deed or time in their life, making it useful for those who fear mages plumbing their minds with magic.\n   While wearing this circlet, you can take a Magic action to specify a trigger such as \"after I leave this temple\" or \"when I cast the Animate Dead spell.\" For the next 24 hours, if that trigger occurs, the circlet erases your memories of everything from the time you chose the trigger until the trigger occurred. No magic short of a Wish spell can restore your memory of this time. Once you use this property, you can't use it again until the next dawn.",
    usages: 1,
    recovery: "dawn",
    action: [["action", " (set trigger)"]]
};
MagicItemsList["spell duelist's trophy"] = {
    name: "Spell Duelist's Trophy",
    source: [["AU", 123]],
    type: "wondrous item",
    rarity: "rare",
    attunement: true,
    prerequisite: "Requires attunement by a Spellcaster",
    prereqeval: function (v) { return v.isSpellcaster; },
    description: "When I hit a creature with a melee spell attack, I can cast Dispel Magic on it as part of the attack (1/dawn). I can cast spells using a slot without Somatic components. I can cast the Mage Hand cantrip from the trophy.",
    descriptionFull: "This withered hand or talon is attached to a leather cord that can be worn like a necklace or bracelet. You gain the following benefits while wearing the trophy.\n   Dispelling Touch. When you hit a creature with a melee spell attack, you can activate the trophy to cast the Dispel Magic spell as part of that attack, targeting the hit creature. Once this property has been used, it can't be used again until the next dawn.\n   Helping Hand. When you cast a spell using a spell slot, you can cast it without any Somatic components.\n   Mage Hand. You can cast the Mage Hand cantrip from the trophy.",
    spellcastingBonus: [{
        name: "Mage Hand",
        spells: ["mage hand"],
        selection: ["mage hand"],
        firstCol: "atwill"
    }],
    extraLimitedFeatures: [{
        name: "Spell Duelist's Trophy (Dispel)",
        usages: 1,
        recovery: "dawn"
    }]
};
MagicItemsList["wand of slumber"] = {
    name: "Wand of Slumber",
    source: [["AU", 125]],
    type: "wand",
    rarity: "rare",
    attunement: true,
    description: "This wand has 7 charges (regains 1d6+1 dawn; 1 on d20 if 0 charges = destroyed). While holding it, I can cast Catnap (3 charges) or Sleep (1 charge, save DC 15) from it.",
    descriptionFull: "This wand has 7 charges. While holding it, you can cast one of the spells on the following table from it. The table indicates how many charges you must expend to cast the spell.\n   Regaining Charges. The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll 1d20. On a 1, the wand crumbles into sand and is destroyed.\n   Spell (Charge Cost): Catnap (3), Sleep (save DC 15) (1).",
    usages: 7,
    recovery: "dawn",
    additional: "regains 1d6+1",
    spellcastingBonus: [
        { name: "3 charges", spells: ["catnap"], selection: ["catnap"], firstCol: 3 },
        { name: "1 charge", spells: ["sleep"], selection: ["sleep"], firstCol: 1 }
    ],
    fixedDC: 15
};
MagicItemsList["wand of teeth"] = {
    name: "Wand of Teeth",
    source: [["AU", 125]],
    type: "wand",
    rarity: "rare",
    description: "Has 10 charges (regains 1d10 dawn; 1 on d20 if 0 charges = destroyed). As a Magic action, I can expend 1-3 charges to spray a 30-ft Cone. DC 15 Dex save or Xd8 Piercing (X = charges) and Poisoned until my next turn starts; save halves \x26 no Poison.",
    descriptionFull: "This wand has 10 charges. While holding it, you can take a Magic action to expend up to 3 charges to spray a wave of sharp, spectral teeth in the direction you point it. Each creature in a 30-foot Cone makes a DC 15 Dexterity saving throw. Roll a number of d8s equal to the number of charges expended. On a failed save, a creature takes Piercing damage equal to the total rolled and has the Poisoned condition until the start of your next turn; on a successful save, a creature takes half as much damage only.\n   Regaining Charges. The wand regains 1d10 expended charges daily at dawn. If you expend the wand's last charge, roll 1d20. On a 1, the wand explodes into harmless splinters and is destroyed.",
    usages: 10,
    recovery: "dawn",
    additional: "regains 1d10",
    action: [["action", " (1-3 charges)"]]
};	
	//Very Rare
MagicItemsList["staff of the lost"] = {
    name: "Staff of the Lost",
    source: [["AU", 123]],
    type: "weapon (quarterstaff)",
    rarity: "very rare",
    attunement: true,
    description: "This cursed +1 quarterstaff grants the Topple mastery. It has 3 charges. I can use 1 charge to cast Maze (DC 18) or Teleport. It does not regain charges; at 0 charges, it becomes a nonmagical quarterstaff. Curse: I can't part with it. I never know north and have Disadv. on Wis (Survival) to navigate. Spending a charge: on a d20 roll of 1, 1d4 hostile minotaurs of Baphomet materialize in 30 ft.",
    descriptionFull: "This staff can be wielded as a magic Quarterstaff that grants a +1 bonus to attack rolls and damage rolls made with it.\n   The staff has 3 charges. While holding the staff, you can expend 1 charge to cast either Maze (save DC 18) or Teleport from it. When the staff has no more charges remaining, it loses its magic and becomes a nonmagical Quarterstaff.\n   Curse. This staff is cursed. Becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the staff, keeping it on your person at all times.\n   While attuned to this staff, you never know which way is north, and you have Disadvantage on Wisdom (Survival) checks made to navigate. Additionally, whenever you expend a charge from the staff, roll 1d20. On a 1, 1d4 minotaurs of Baphomet materialize, each appearing in an unoccupied space within 30 feet of you. The minotaurs begin combat with you immediately.\n   Versatile. A Versatile weapon can be used with one or two hands.\n   Mastery: Topple. If you hit a creature with this weapon, you can force the creature to make a Constitution saving throw (DC 8 plus the ability modifier used to make the attack roll and your Proficiency Bonus). On a failed save, the creature has the Prone condition.",
    usages: 3,
    recovery: "Never",
    weaponOptions: [{
        baseWeapon: "quarterstaff",
        regExpSearch: /^(?=.*staff)(?=.*lost).*$/i,
        name: "Staff of the Lost",
        source: [["AU", 123]],
        description: "Versatile (1d8); Topple mastery; Cursed",
        selectNow: true
    }],
    calcChanges: {
        atkAdd: [
            function(fields, v) {
                if (v.isMeleeWeapon && (/^(?=.*staff)(?=.*lost).*$/i).test(v.WeaponTextName)) { v.theWea.isMagicWeapon = true; }
            }, ''
        ],
        atkCalc: [
            function(fields, v, output) {
                if (v.isMeleeWeapon && (/^(?=.*staff)(?=.*lost).*$/i).test(v.WeaponTextName)) { output.magic = v.thisWeapon[1] + 1; }
            }, ''
        ]
    },
    spellcastingBonus: [{
        name: "1 charge",
        spells: ["maze", "teleport"],
        selection: ["maze", "teleport"],
        firstCol: 1,
        times: 2
    }],
    fixedDC: 18,
    savetxt: { text: ["Disadv. on Wis (Survival) to navigate"] }
};
MagicItemsList["tramontane armor"] = {
    name: "Tramontane Armor",
    source: [["AU", 124]],
    type: "armor (any)",
    rarity: "very rare",
    attunement: true,
    description: "This +1 armor looks like a robe. I ignore difficult terrain from snow, ice, rubble, or undergrowth. As a Magic action (1/dawn), I can activate it for 1 min (or until deactivated as a Magic action). While active, I can use a Bonus Action to force all creatures in a 20-ft Emanation to make a DC 15 Str save or be Grappled (escape DC 15) and pulled 20 ft toward me.",
    descriptionFull: "You gain a +1 bonus to Armor Class while wearing this armor. The armor is enchanted to look like a scholarly or priestly robe.\n   Mountain Walker. While you're wearing this armor, Difficult Terrain composed of heavy snow, ice, rubble, or undergrowth doesn't cost you extra movement.\n   Grasping Tendrils. As a Magic action, you can activate the armor, causing the hems of its sleeves and body to extend into ribbonlike tendrils.\n   As a Bonus Action while the armor is active, you can force each creature of your choice in a 20-foot Emanation originating from you to make a DC 15 Strength saving throw. On a failed save, a creature has the Grappled condition (escape DC 15) and is pulled up to 20 feet straight toward you.\n   The armor remains active for 1 minute or until you take another Magic action to deactivate it. Once you activate the armor, it can't be activated again until the next dawn.",
    chooseGear: {
        type: "armor",
        prefixOrSuffix: "brackets",
        descriptionChange: ["replace", "armor"]
    },
    extraAC: [{ name: "Tramontane Armor", mod: 1, magic: true, text: "I gain a +1 bonus to AC while wearing this armor." }],
    usages: 1,
    recovery: "dawn",
    action: [["action", " (activate/deactivate)"], ["bonus action", " (grasping tendrils)"]]
};
MagicItemsList["workshop wrecker"] = {
    name: "Workshop Wrecker",
    source: [["AU", 125]],
    type: "wondrous item",
    rarity: "very rare",
    description: "As a Magic action (1/dawn), I activate this metal ball for 1 min (deactivate no action). It bounces wildly, forcing creatures in its area to make a Dex save at the start of my turns or take Bludgeoning dmg. 15-ft cube: DC 18, 6d6+5; 30-ft: DC 17, 4d6+4; 50-ft: DC 15, 2d6+2; 100-ft: DC 14, 1d6+1. Unconfined: flies 300 ft/rnd.",
    descriptionFull: "When this 3-inch-diameter metal ball is activated as a Magic action, it moves at a rapid speed, bouncing off walls and defying any attempts to capture it. The ball remains active for 1 minute or until you deactivate it by using a command word while within 30 feet of it (no action required). Once the ball is used, it can't be used again until the next dawn.\n   When you activate the ball and at the beginning of each of your turns while the ball is active, each creature in the area makes a Dexterity saving throw, taking Bludgeoning damage on a failed save. The save DC and amount of damage dealt depend on the approximate size of the area in which the ball is active, as shown on the following table.\n   A nonmagical object that isn't being worn or carried also takes the damage if it is in the area. In confined areas larger than a 100-foot Cube, the amount of damage caused by the ball is negligible. If the ball is activated in an unconfined area, it flies off in a random direction at a rate of 300 feet per round.\n   Area / Save DC / Bludgeoning Damage: 15-foot Cube (DC 18, 6d6+5); 30-foot Cube (DC 17, 4d6+4); 50-foot Cube (DC 15, 2d6+2); 100-foot Cube (DC 14, 1d6+1).",
    usages: 1,
    recovery: "dawn",
    action: [["action", " (activate)"]]
};	
	//Legendary
MagicItemsList["diamond staff"] = {
    name: "Diamond Staff",
    source: [["AU", 118]],
    type: "weapon (quarterstaff)",
    rarity: "legendary",
    attunement: true,
    prerequisite: "Requires attunement by a Sorcerer, Warlock, or Wizard",
    prereqeval: function (v) { return classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
    description: "This +3 quarterstaff grants the Topple mastery and Adv. on Int (Arcana) checks. It has 20 charges (regains 1d6+4 dawn). 1 charge: emit 40-ft Bright/40-ft Dim light for 1 min. Melee hit: spend 2 charges for DC 17 Con save or Stunned till my next EoT. Spells: Detect Magic (0), Light (0), Tongues (self, 0), Identify (1), Knock (2), True Seeing (3), Legend Lore (5), Maze (8).",
    descriptionFull: "This 6-foot-long scepter is carved from a single enormous crystal, with a perfect transparent globe at its head. This staff has 20 charges and can be wielded as a magic Quarterstaff that grants a +3 bonus to attack rolls and damage rolls made with it.\n   Adept. While holding the staff, you have Advantage on Intelligence (Arcana) checks.\n   Dazzling Light. While holding the staff, you can expend 1 charge and use a command word to cause light to shine from the staff. The staff emits Bright Light in a 40-foot radius and Dim Light for an additional 40 feet. The staff stops glowing after 1 minute or when you use a command word to deactivate it.\n   Spells. While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC. The table indicates how many charges you must expend to cast the spell.\n   Spell (Charge Cost): Detect Magic (0), Light (0), Identify (1), Maze (8), Knock (2), Tongues (self only) (0), Legend Lore (5), True Seeing (3).\n   Stunning Hit. When you hit with a melee attack using the staff, you can expend 2 charges, and the target must succeed on a DC 17 Constitution saving throw or have the Stunned condition until the end of your next turn.\n   Regaining Charges. The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff is destroyed.\n   Versatile. A Versatile weapon can be used with one or two hands.\n   Mastery: Topple. If you hit a creature with this weapon, you can force the creature to make a Constitution saving throw (DC 8 plus the ability modifier used to make the attack roll and your Proficiency Bonus). On a failed save, the creature has the Prone condition.",
    usages: 20,
    recovery: "dawn",
    additional: "regains 1d6+4",
    weaponOptions: [{
        baseWeapon: "quarterstaff",
        regExpSearch: /^(?=.*diamond)(?=.*staff).*$/i,
        name: "Diamond Staff",
        source: [["AU", 118]],
        description: "Versatile (1d8); Topple mastery; Hit: 2 charges for DC 17 Con save or Stunned",
        selectNow: true
    }],
    calcChanges: {
        atkAdd: [
            function (fields, v) {
                if (v.isMeleeWeapon && (/^(?=.*diamond)(?=.*staff).*$/i).test(v.WeaponTextName)) { v.theWea.isMagicWeapon = true; }
            }, ''
        ],
        atkCalc: [
            function (fields, v, output) {
                if (v.isMeleeWeapon && (/^(?=.*diamond)(?=.*staff).*$/i).test(v.WeaponTextName)) { output.magic = v.thisWeapon[1] + 3; }
            }, ''
        ]
    },
    spellcastingAbility: "class",
    spellcastingBonus: [
        { name: "0 charges", spells: ["detect magic", "light", "tongues"], selection: ["detect magic", "light", "tongues"], firstCol: 0, times: 3 },
        { name: "1 charge", spells: ["identify"], selection: ["identify"], firstCol: 1 },
        { name: "2 charges", spells: ["knock"], selection: ["knock"], firstCol: 2 },
        { name: "3 charges", spells: ["true seeing"], selection: ["true seeing"], firstCol: 3 },
        { name: "5 charges", spells: ["legend lore"], selection: ["legend lore"], firstCol: 5 },
        { name: "8 charges", spells: ["maze"], selection: ["maze"], firstCol: 8 }
    ],
    action: [["action", " (Dazzling Light)"]],
    savetxt: { text: ["Adv. on Int (Arcana) checks"] }
};
MagicItemsList["grave reaper"] = {
    name: "Grave Reaper",
    source: [["AU", 119]],
    type: "weapon (sickle)",
    rarity: "legendary",
    attunement: true,
    description: "This +2 sickle grants the Nick mastery. On a hit, the target takes an extra 2d8 Necrotic damage. While holding this weapon, I can cast Spirit Lantern (save DC 17) 1/dawn. When cast this way, the conjured lantern can hold up to 5 soul fragments.",
    descriptionFull: "You gain a +2 bonus to attack rolls and damage rolls made with this magic weapon. When you hit a creature with it, the target takes an extra 2d8 Necrotic damage.\n   Soul Lantern. While holding this weapon, you can cast the Spirit Lantern spell. When you cast the spell using the weapon, the conjured lantern can hold up to five soul fragments, and the spell's save DC is 17.\n   Once the weapon has been used to cast the spell, it can't be used to cast it again until the next dawn.\n   Light. When you take the Attack action on your turn and attack with a Light weapon, you can make one extra attack as a Bonus Action later on the same turn.\n   Mastery: Nick. When you make the extra attack of the Light property, you can make it as part of the Attack action instead of as a Bonus Action.",
    usages: 1,
    recovery: "dawn",
    weaponOptions: [{
        baseWeapon: "sickle",
        regExpSearch: /^(?=.*grave)(?=.*reaper).*$/i,
        name: "Grave Reaper",
        source: [["AU", 119]],
        description: "Light; Nick mastery; +2d8 Necrotic dmg on hit",
        selectNow: true
    }],
    calcChanges: {
        atkAdd: [
            function (fields, v) {
                if (v.isMeleeWeapon && (/^(?=.*grave)(?=.*reaper).*$/i).test(v.WeaponTextName)) {
                    v.theWea.isMagicWeapon = true;
                    fields.Description += (fields.Description ? '; ' : '') + '+2d8 Necrotic damage';
                }
            }, ''
        ],
        atkCalc: [
            function (fields, v, output) {
                if (v.isMeleeWeapon && (/^(?=.*grave)(?=.*reaper).*$/i).test(v.WeaponTextName)) { output.magic = v.thisWeapon[1] + 2; }
            }, ''
        ]
    },
    spellcastingBonus: [{
        name: "1/dawn",
        spells: ["spirit lantern"],
        selection: ["spirit lantern"],
        firstCol: "oncelr"
    }],
    fixedDC: 17
};
MagicItemsList["traveler's pearl"] = {
    name: "Traveler's Pearl",
    source: [["AU", 124]],
    type: "wondrous item",
    rarity: "legendary",
    attunement: true,
    description: "By using a command word while holding this pearl, I can cast the Teleport spell from it. Once this property is used, it can't be used again until the next dawn.",
    descriptionFull: "By using a command word while holding this pearl, you can cast the Teleport spell from it. Once this property is used, it can't be used again until the next dawn.",
    usages: 1,
    recovery: "dawn",
    spellcastingBonus: [{
        name: "1/dawn",
        spells: ["teleport"],
        selection: ["teleport"],
        firstCol: "oncelr"
    }]
};	
	//Variable rarity
		//Evolving items
MagicItemsList["blossom rod"] = {
    name: "Blossom Rod",
    source: [["AU", 127]],
    type: "rod",
    rarity: "uncommon",
    attunement: true,
    prerequisite: "Requires attunement by a Spellcaster",
    prereqeval: function (v) { return v.isSpellcaster; },
    description: "This rod is made of intertwined, living plant stems. It is an Evolving Item. Use the 'Choose Feature' button to select its current rarity. At its base (Budding), I can cast Druidcraft or Plant Growth (Overgrowth), and rejuvenate plants.",
    descriptionFull: "This rod is made of intertwined, living plant stems.\n   Evolving Item. This item is an Evolving Item, see Evolving Magic Items for more information.",
    allowDuplicates: true,
    choices: ["Budding (Uncommon)", "Flowering (Rare)", "Somniferous (Very Rare)"],
    "budding (uncommon)": {
        name: "Budding Blossom Rod",
        rarity: "uncommon",
        description: "I can cast Druidcraft (at-will) or Plant Growth (Overgrowth only, 1/dawn). As a Magic action, I can rejuvenate nonmagical plants in a 5-ft Cube I can see within 15 ft, keeping them verdant for 1d4 days. [Evolving Item]",
        descriptionFull: "Budding. Multicolored leaves decorate the rod's stems, and a few buds cluster near each end.\n   While you hold the rod, you can cast Druidcraft or Plant Growth (Overgrowth only) from it. Once the rod has been used to cast Plant Growth, it can't be used to cast this spell again until the next dawn.\n   While you hold the rod, as a Magic action, you can rejuvenate nonmagical plants in a 5-foot Cube you can see within 15 feet of yourself. The rejuvenated plants remain verdant for 1d4 days, after which they grow or wither as normal plants would.\n   Evolving Item. This item is an Evolving Item, see Evolving Magic Items for more information.",
        action: [["action", " (rejuvenate plants)"]],
        spellcastingAbility: "class",
        spellcastingBonus: [
            { name: "At will", spells: ["druidcraft"], selection: ["druidcraft"], firstCol: "atwill" },
            { name: "1/dawn", spells: ["plant growth"], selection: ["plant growth"], firstCol: "oncelr" }
        ]
    },
    "flowering (rare)": {
        name: "Flowering Blossom Rod",
        rarity: "rare",
        description: "I can cast Druidcraft (at-will), Plant Growth (Overgrowth, 1/dawn), or Insect Plague (bumblebees, 1/dawn) using my spell save DC. As a Magic action, I can rejuvenate nonmagical plants in a 5-ft Cube within 15 ft for 1d4 days. [Evolving Item]",
        descriptionFull: "Budding. Multicolored leaves decorate the rod's stems, and a few buds cluster near each end.\n   While you hold the rod, you can cast Druidcraft or Plant Growth (Overgrowth only) from it. Once the rod has been used to cast Plant Growth, it can't be used to cast this spell again until the next dawn.\n   While you hold the rod, as a Magic action, you can rejuvenate nonmagical plants in a 5-foot Cube you can see within 15 feet of yourself. The rejuvenated plants remain verdant for 1d4 days, after which they grow or wither as normal plants would.\n   Flowering. Both ends of the rod bear colorful, fragrant flowers.\n   While you hold the rod, you can cast Insect Plague from it, using your spell save DC. When you do so, the insects appear as bumblebees. Once the rod has been used to cast this spell, it can't be used to cast this spell again until the next dawn.\n   Evolving Item. This item is an Evolving Item, see Evolving Magic Items for more information.",
        action: [["action", " (rejuvenate plants)"]],
        spellcastingAbility: "class",
        spellcastingBonus: [
            { name: "At will", spells: ["druidcraft"], selection: ["druidcraft"], firstCol: "atwill" },
            { name: "1/dawn", spells: ["plant growth"], selection: ["plant growth"], firstCol: "oncelr" },
            { name: "1/dawn", spells: ["insect plague"], selection: ["insect plague"], firstCol: "oncelr" }
        ]
    },
    "somniferous (very rare)": {
        name: "Somniferous Blossom Rod",
        rarity: "very rare",
        description: "I can cast Druidcraft, Plant Growth (Overgrowth, 1/dawn), or Insect Plague (1/dawn). Magic action: rejuvenate plants (5-ft Cube in 15 ft), or expel sleep pollen in 30-ft Emanation (1/dawn). Pollen: DC 17 Con save or Unconscious 1 hr (Elves/Exhaustion-immune auto-pass). [Evolving Item]",
        descriptionFull: "Budding. Multicolored leaves decorate the rod's stems, and a few buds cluster near each end.\n   While you hold the rod, you can cast Druidcraft or Plant Growth (Overgrowth only) from it. Once the rod has been used to cast Plant Growth, it can't be used to cast this spell again until the next dawn.\n   While you hold the rod, as a Magic action, you can rejuvenate nonmagical plants in a 5-foot Cube you can see within 15 feet of yourself. The rejuvenated plants remain verdant for 1d4 days, after which they grow or wither as normal plants would.\n   Flowering. Both ends of the rod bear colorful, fragrant flowers.\n   While you hold the rod, you can cast Insect Plague from it, using your spell save DC. When you do so, the insects appear as bumblebees. Once the rod has been used to cast this spell, it can't be used to cast this spell again until the next dawn.\n   Somniferous. Robust bursts of flowers grow along the rod's length.\n   While you hold the rod, you can take a Magic action to expel a puff of sleep-inducing pollen in a 30-foot Emanation originating from you. Creatures of your choice in the Emanation must succeed on a DC 17 Constitution saving throw or have the Unconscious condition for 1 hour. Creatures that don't sleep, such as elves, or that have Immunity to the Exhaustion condition automatically succeed on the save. The effect ends on a target if it takes damage or a creature within 5 feet of it takes an action to shake it awake. Once the rod has produced this effect, it can't do so again until the next dawn.\n   Evolving Item. This item is an Evolving Item, see Evolving Magic Items for more information.",
        action: [["action", " (rejuvenate plants)"], ["action", " (sleep pollen)"]],
        spellcastingAbility: "class",
        spellcastingBonus: [
            { name: "At will", spells: ["druidcraft"], selection: ["druidcraft"], firstCol: "atwill" },
            { name: "1/dawn", spells: ["plant growth"], selection: ["plant growth"], firstCol: "oncelr" },
            { name: "1/dawn", spells: ["insect plague"], selection: ["insect plague"], firstCol: "oncelr" }
        ],
        extraLimitedFeatures: [{
            name: "Somniferous Pollen (DC 17)",
            usages: 1,
            recovery: "dawn"
        }]
    }
};
MagicItemsList["idol of good fortunes"] = {
    name: "Idol of Good Fortunes",
    source: [["AU", 127]],
    type: "wondrous item",
    rarity: "uncommon",
    attunement: true,
    description: "This idol is an Evolving Item. Depending on its rarity, it gains additional properties. Use the 'Choose Feature' button to select its current rarity.",
    descriptionFull: "This idol resembles an elephant sitting on its haunches, smiling regally behind its uplifted trunk.\n   Evolving Item. This item is an Evolving Item, see Evolving Magic Items for more information.",
    allowDuplicates: true,
    choices: ["Blemished (Uncommon)", "Tarnished (Rare)", "Golden (Very Rare)"],
    "blemished (uncommon)": {
        name: "Blemished Idol of Good Fortunes",
        rarity: "uncommon",
        description: "I can cast the Augury spell from the idol, which speaks the omen aloud in response. Once used, I can't cast this spell from the idol again until the next dawn. [Evolving Item]",
        descriptionFull: "Blemished. The idol is made of tarnished bronze, with minor dings and dents scattered over its surface.\n   You can cast the Augury spell from the idol. The idol speaks the omen aloud in response. Once the idol has been used to cast this spell, it can't be used to cast this spell again until the next dawn.\n   Evolving Item. This item is an Evolving Item, see Evolving Magic Items for more information.",
        spellcastingBonus: [{
            name: "1/dawn",
            spells: ["augury"],
            selection: ["augury"],
            firstCol: "oncelr"
        }]
    },
    "tarnished (rare)": {
        name: "Tarnished Idol of Good Fortunes",
        rarity: "rare",
        description: "I gain a +1 bonus to AC. I can cast Augury from the idol (1/dawn). While holding it, I can take a Magic action to touch a nonmagical trade bar or gemstone to transform it into coinage equivalent to its value. [Evolving Item]",
        descriptionFull: "Blemished. The idol is made of tarnished bronze, with minor dings and dents scattered over its surface.\n   You can cast the Augury spell from the idol. The idol speaks the omen aloud in response. Once the idol has been used to cast this spell, it can't be used to cast this spell again until the next dawn.\n   Tarnished. The idol is made of gold, with a patina of dust settled into its crevices.\n   While attuned to the idol, you gain a +1 bonus to your Armor Class. Additionally, while holding the idol, you can take a Magic action to touch a nonmagical trade bar or gemstone. The item is then transformed into coinage equivalent to its value. For example, if you take a Magic action to touch a 5-pound silver bar while holding the idol, the bar is transformed into 25 GP worth of coins.\n   Evolving Item. This item is an Evolving Item, see Evolving Magic Items for more information.",
        action: [["action", " (convert to coins)"]],
        extraAC: [{ name: "Tarnished Idol of Good Fortunes", mod: 1, magic: true, text: "I gain a +1 bonus to AC while attuned." }],
        spellcastingBonus: [{
            name: "1/dawn",
            spells: ["augury"],
            selection: ["augury"],
            firstCol: "oncelr"
        }]
    },
    "golden (very rare)": {
        name: "Golden Idol of Good Fortunes",
        rarity: "very rare",
        description: "I gain a +1 bonus to AC. I can cast Augury (1/dawn) or Globe of Invulnerability (1/dawn) from the idol. While holding it, I can take a Magic action to touch a nonmagical trade bar or gemstone to transform it into coinage equivalent to its value. [Evolving Item]",
        descriptionFull: "Blemished. The idol is made of tarnished bronze, with minor dings and dents scattered over its surface.\n   You can cast the Augury spell from the idol. The idol speaks the omen aloud in response. Once the idol has been used to cast this spell, it can't be used to cast this spell again until the next dawn.\n   Tarnished. The idol is made of gold, with a patina of dust settled into its crevices.\n   While attuned to the idol, you gain a +1 bonus to your Armor Class. Additionally, while holding the idol, you can take a Magic action to touch a nonmagical trade bar or gemstone. The item is then transformed into coinage equivalent to its value. For example, if you take a Magic action to touch a 5-pound silver bar while holding the idol, the bar is transformed into 25 GP worth of coins.\n   Golden. The idol is made of gleaming gold, and the elephant's eyes are set with shining rubies.\n   While holding the idol, you can cast Globe of Invulnerability from it. Once the idol has been used to cast this spell, it can't be used to cast this spell again until the next dawn.\n   Evolving Item. This item is an Evolving Item, see Evolving Magic Items for more information.",
        action: [["action", " (convert to coins)"]],
        extraAC: [{ name: "Golden Idol of Good Fortunes", mod: 1, magic: true, text: "I gain a +1 bonus to AC while attuned." }],
        spellcastingBonus: [{
            name: "1/dawn",
            spells: ["augury"],
            selection: ["augury"],
            firstCol: "oncelr"
        }, {
            name: "1/dawn",
            spells: ["globe of invulnerability"],
            selection: ["globe of invulnerability"],
            firstCol: "oncelr"
        }]
    }
};
MagicItemsList["keyholes dagger"] = {
    name: "Keyholes Dagger",
    source: [["AU", 128]],
    type: "weapon (dagger)",
    rarity: "uncommon",
    attunement: true,
    description: "This dagger is an Evolving Item. Depending on its rarity, it gains additional properties. Use the 'Choose Feature' button to select its current rarity.",
    descriptionFull: "The hilt of this magic weapon is adorned with ornate, decorative keyholes outlined in golden filigree.\n   Finesse. When making an attack with a Finesse weapon, use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.\n   Light. When you take the Attack action on your turn and attack with a Light weapon, you can make one extra attack as a Bonus Action later on the same turn.\n   Thrown. If a weapon has the Thrown property, you can throw the weapon to make a ranged attack, and you can draw that weapon as part of the attack.\n   Evolving Item. This item is an Evolving Item, see Evolving Magic Items for more information.\n   Mastery: Nick. When you make the extra attack of the Light property, you can make it as part of the Attack action instead of as a Bonus Action.",
    allowDuplicates: true,
    choices: ["Three (Uncommon)", "Ten (Rare)", "Many (Very Rare)"],
    "three (uncommon)": {
        name: "Three Keyholes Dagger",
        rarity: "uncommon",
        description: "This +1 dagger has three keyholes. When I take the Attack action, I can transform it into a Handaxe or Mace until the start of my next turn. Regardless of form, it uses my choice of Str or Dex for attack and damage rolls. [Evolving Item]",
        descriptionFull: "Three. Three ornamental keyholes adorn the weapon's hilt.\n   You have a +1 bonus to attack rolls and damage rolls made with this magic weapon. When you take the Attack action, you can transform this weapon into a Handaxe or Mace. It remains transformed in this way until the start of your next turn, at which point it reverts back to its Dagger form. Regardless of the weapon's form, you can use your choice of your Strength or Dexterity modifier for the attack and damage rolls; you must use the same modifier for both rolls.\n   Evolving Item. This item is an Evolving Item, see Evolving Magic Items for more information.",
        weaponOptions: [{
            baseWeapon: "dagger",
            regExpSearch: /^(?=.*three)(?=.*keyholes)(?=.*dagger).*$/i,
            name: "Three Keyholes Dagger",
            source: [["AU", 128]],
            description: "Finesse, Light, Thrown; Nick mastery; Atk action: transform to Handaxe/Mace",
            selectNow: true
        }],
        calcChanges: {
            atkAdd: [
                function(fields, v) {
                    if (v.isMeleeWeapon && (/^(?=.*three)(?=.*keyholes)(?=.*dagger).*$/i).test(v.WeaponTextName)) { v.theWea.isMagicWeapon = true; }
                }, ''
            ],
            atkCalc: [
                function(fields, v, output) {
                    if (v.isMeleeWeapon && (/^(?=.*three)(?=.*keyholes)(?=.*dagger).*$/i).test(v.WeaponTextName)) { output.magic = v.thisWeapon[1] + 1; }
                }, ''
            ]
        }
    },
    "ten (rare)": {
        name: "Ten Keyholes Dagger",
        rarity: "rare",
        description: "This +2 dagger has ten keyholes. When I take the Attack action, I can transform it into any Simple Melee weapon until the start of my next turn. Regardless of form, it uses my choice of Str or Dex for attack and damage rolls. [Evolving Item]",
        descriptionFull: "Ten. Ten ornamental keyholes adorn the weapon's hilt. Your bonus to attack rolls and damage rolls made with this magic weapon increases to +2. Additionally, when you transform the weapon, you can now transform it into any Simple Melee weapon.\n   Evolving Item. This item is an Evolving Item, see Evolving Magic Items for more information.",
        weaponOptions: [{
            baseWeapon: "dagger",
            regExpSearch: /^(?=.*ten)(?=.*keyholes)(?=.*dagger).*$/i,
            name: "Ten Keyholes Dagger",
            source: [["AU", 128]],
            description: "Finesse, Light, Thrown; Nick mastery; Atk action: transform to any Simple Melee weapon",
            selectNow: true
        }],
        calcChanges: {
            atkAdd: [
                function(fields, v) {
                    if (v.isMeleeWeapon && (/^(?=.*ten)(?=.*keyholes)(?=.*dagger).*$/i).test(v.WeaponTextName)) { v.theWea.isMagicWeapon = true; }
                }, ''
            ],
            atkCalc: [
                function(fields, v, output) {
                    if (v.isMeleeWeapon && (/^(?=.*ten)(?=.*keyholes)(?=.*dagger).*$/i).test(v.WeaponTextName)) { output.magic = v.thisWeapon[1] + 2; }
                }, ''
            ]
        }
    },
    "many (very rare)": {
        name: "Many Keyholes Dagger",
        rarity: "very rare",
        description: "This +3 dagger has overlapping keyholes. Atk action: transform into any Simple Melee weapon, Battleaxe, Longsword, Rapier, Scimitar, or Warhammer until my next turn starts (retains Finesse). When I miss an attack roll with it, I can reroll and must use the new roll (1/dawn). [Evolving Item]",
        descriptionFull: "Many. Overlapping ornamental keyholes adorn the weapon's hilt in a dizzying pattern. Your bonus to attack rolls and damage rolls made with this magic weapon increases to +3. When you transform the weapon, you can now also transform it into a Battleaxe, Longsword, Rapier, Scimitar, or Warhammer.\n   Additionally, when you miss with an attack roll using this weapon, you can reroll the attack, potentially turning the miss into a hit. You must use the second roll. Once used, this property can't be used again until the next dawn.\n   Evolving Item. This item is an Evolving Item, see Evolving Magic Items for more information.",
        weaponOptions: [{
            baseWeapon: "dagger",
            regExpSearch: /^(?=.*many)(?=.*keyholes)(?=.*dagger).*$/i,
            name: "Many Keyholes Dagger",
            source: [["AU", 128]],
            description: "Finesse, Light, Thrown; Nick; Transform to Simple/Battleaxe/Longsword/Rapier/Scimitar/Warhammer",
            selectNow: true
        }],
        calcChanges: {
            atkAdd: [
                function(fields, v) {
                    if (v.isMeleeWeapon && (/^(?=.*many)(?=.*keyholes)(?=.*dagger).*$/i).test(v.WeaponTextName)) { v.theWea.isMagicWeapon = true; }
                }, ''
            ],
            atkCalc: [
                function(fields, v, output) {
                    if (v.isMeleeWeapon && (/^(?=.*many)(?=.*keyholes)(?=.*dagger).*$/i).test(v.WeaponTextName)) { output.magic = v.thisWeapon[1] + 3; }
                }, ''
            ]
        },
        extraLimitedFeatures: [{
            name: "Many Keyholes Dagger (Reroll)",
            usages: 1,
            recovery: "dawn"
        }]
    }
};		
MagicItemsList["staff of skulls"] = {
    name: "Staff of Skulls",
    source: [["AU", 128]],
    type: "weapon (quarterstaff)",
    rarity: "uncommon",
    attunement: true,
    prerequisite: "Requires attunement by a Spellcaster",
    prereqeval: function (v) { return v.isSpellcaster; },
    description: "This staff is an Evolving Item. Depending on its rarity, it gains additional properties. Use the 'Choose Feature' button to select its current rarity.",
    descriptionFull: "This staff is made of polished, interlocking bones. Runes are carved along its length.\n   Versatile. A Versatile weapon can be used with one or two hands. A damage value in parentheses appears with the property. The weapon deals that damage when used with two hands to make a melee attack.\n   Evolving Item. This item is an Evolving Item, see Evolving Magic Items for more information.\n   Mastery: Topple. If you hit a creature with this weapon, you can force the creature to make a Constitution saving throw (DC 8 plus the ability modifier used to make the attack roll and your Proficiency Bonus). On a failed save, the creature has the Prone condition.",
    allowDuplicates: true,
    choices: ["Ominous (Uncommon)", "Chattering (Rare)", "Pulverizing (Very Rare)"],
    "ominous (uncommon)": {
        name: "Ominous Staff of Skulls",
        rarity: "uncommon",
        description: "I have Adv. on Cha (Intimidation) checks while holding the staff, and it emits 5-ft Dim Light. I can cast Chill Touch from it using my spell attack bonus. [Evolving Item]",
        descriptionFull: "Ominous. A skull adorns the top of the staff.\n   While you hold the staff, you can cast Chill Touch from it, using your spell attack bonus. Additionally, you have Advantage on Charisma (Intimidation) checks made while holding the staff, and the staff's eye sockets glow a disquieting green, shedding Dim Light in a 5-foot radius.\n   Versatile. A Versatile weapon can be used with one or two hands.\n   Evolving Item. This item is an Evolving Item, see Evolving Magic Items for more information.\n   Mastery: Topple. If you hit a creature with this weapon, you can force the creature to make a Constitution saving throw (DC 8 plus the ability modifier used to make the attack roll and your Proficiency Bonus). On a failed save, the creature has the Prone condition.",
        spellcastingAbility: "class",
        spellcastingBonus: [{
            name: "At will",
            spells: ["chill touch"],
            selection: ["chill touch"],
            firstCol: "atwill"
        }],
        weaponOptions: [{
            baseWeapon: "quarterstaff",
            regExpSearch: /^(?=.*ominous)(?=.*staff)(?=.*skulls).*$/i,
            name: "Ominous Staff of Skulls",
            source: [["AU", 128]],
            description: "Versatile (1d8); Topple mastery; Cast Chill Touch",
            selectNow: true
        }]
    },
    "chattering (rare)": {
        name: "Chattering Staff of Skulls",
        rarity: "rare",
        description: "I have Adv. on Cha (Intimidate) checks, and it emits 5-ft Dim Light. I can cast Chill Touch at-will. As a Reaction when a creature in 30 ft makes an attack roll, I can impose Disadvantage on it. [Evolving Item]",
        descriptionFull: "Ominous. A skull adorns the top of the staff.\n   While you hold the staff, you can cast Chill Touch from it, using your spell attack bonus. Additionally, you have Advantage on Charisma (Intimidation) checks made while holding the staff, and the staff's eye sockets glow a disquieting green, shedding Dim Light in a 5-foot radius.\n   Chattering. Several skulls fused together adorn the top of the staff.\n   When a creature you can see within 30 feet of you makes an attack roll, you can take a Reaction to impose Disadvantage on that roll, as the skulls' eyes glow green and their teeth chatter unnervingly.\n   Versatile, Mastery: Topple, Evolving Item.",
        action: [["reaction", " (impose Disadvantage)"]],
        spellcastingAbility: "class",
        spellcastingBonus: [{
            name: "At will",
            spells: ["chill touch"],
            selection: ["chill touch"],
            firstCol: "atwill"
        }],
        weaponOptions: [{
            baseWeapon: "quarterstaff",
            regExpSearch: /^(?=.*chattering)(?=.*staff)(?=.*skulls).*$/i,
            name: "Chattering Staff of Skulls",
            source: [["AU", 128]],
            description: "Versatile (1d8); Topple mastery; Cast Chill Touch",
            selectNow: true
        }]
    },
    "pulverizing (very rare)": {
        name: "Pulverizing Staff of Skulls",
        rarity: "very rare",
        description: "Adv. on Cha (Intimidate); 5-ft Dim Light. Cast Chill Touch. React: impose Disadv. on an atk in 30 ft. Magic action (1/dawn): point at Humanoid; DC 17 Con save or 10d8 Necrotic dmg \x26 Prone (save halves \x26 no Prone). [Evolving Item]",
        descriptionFull: "Ominous. A skull adorns the top of the staff. You can cast Chill Touch from it, have Advantage on Charisma (Intimidation) checks while holding it, and it sheds Dim Light in a 5-foot radius.\n   Chattering. When a creature you can see within 30 feet of you makes an attack roll, you can take a Reaction to impose Disadvantage on that roll.\n   Pulverizing. The entire staff is made of fused skulls.\n   While you hold the staff, you can take a Magic action to point the staff at a Humanoid you can see. That creature makes a DC 17 Constitution saving throw. On a failed save, the creature takes 10d8 Necrotic damage and has the Prone condition as it's crushed from the inside. On a successful save, the creature takes half as much damage only. Once used, this property can't be used again until the next dawn.\n   Versatile, Mastery: Topple, Evolving Item.",
        usages: 1,
        recovery: "dawn",
        action: [["reaction", " (impose Disadvantage)"], ["action", " (pulverize)"]],
        spellcastingAbility: "class",
        spellcastingBonus: [{
            name: "At will",
            spells: ["chill touch"],
            selection: ["chill touch"],
            firstCol: "atwill"
        }],
        weaponOptions: [{
            baseWeapon: "quarterstaff",
            regExpSearch: /^(?=.*pulverizing)(?=.*staff)(?=.*skulls).*$/i,
            name: "Pulverizing Staff of Skulls",
            source: [["AU", 128]],
            description: "Versatile (1d8); Topple mastery; Cast Chill Touch",
            selectNow: true
        }],
        extraLimitedFeatures: [{
            name: "Pulverizing Staff of Skulls",
            usages: 1,
            recovery: "dawn"
        }],
        fixedDC: 17
    }
};
MagicItemsList["wave-swept weapon"] = {
    name: "Wave-Swept Weapon",
    source: [["AU", 129]],
    type: "weapon (any sword)",
    rarity: "uncommon",
    attunement: true,
    description: "This sword is an Evolving Item. Depending on its rarity, it gains additional properties. Use the 'Choose Feature' button to select its current rarity.",
    descriptionFull: "This sword is covered in oceanic motifs, from wavelike etchings on its blade to stylized sea monsters embroidered onto its leather hilt.\n   Evolving Item. This item is an Evolving Item, see Evolving Magic Items for more information.",
    allowDuplicates: true,
    chooseGear: {
        type: "weapon",
        prefixOrSuffix: "brackets",
        descriptionChange: ["replace", "sword"],
        excludeCheck: function (inObjKey, inObj) {
            var testRegex = /sword|scimitar|rapier/i;
            return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
        }
    },
    choices: ["Barnacled (Uncommon)", "Aquatic (Rare)", "Ascendant (Very Rare)"],
    "barnacled (uncommon)": {
        name: "Barnacled Wave-Swept Weapon",
        rarity: "uncommon",
        description: "This +1 sword allows me to take a Magic action to touch up to a gallon of liquid and infuse it with brine (e.g., turning fresh water to saltwater). [Evolving Item]",
        descriptionFull: "This weapon is covered in oceanic motifs, from wavelike etchings on its blade to stylized sea monsters embroidered onto its leather hilt.\n   Barnacled. Barnacles dot this blade's guard and the flat sides of its etched blade.\n   You have a +1 bonus to attack rolls and damage rolls made with this magic weapon. While holding this weapon, you can take a Magic action to touch up to a gallon of liquid and infuse it with brine, turning fresh water into saltwater, for instance.\n   Evolving Item. This item is an Evolving Item, see Evolving Magic Items for more information.",
        action: [["action", " (infuse brine)"]],
        calcChanges: {
            atkAdd: [
                function(fields, v) {
                    if (v.isMeleeWeapon && (/^(?=.*barnacled)(?=.*wave-swept).*$/i).test(v.WeaponTextName)) { v.theWea.isMagicWeapon = true; }
                }, ''
            ],
            atkCalc: [
                function(fields, v, output) {
                    if (v.isMeleeWeapon && (/^(?=.*barnacled)(?=.*wave-swept).*$/i).test(v.WeaponTextName)) { output.magic = v.thisWeapon[1] + 1; }
                }, ''
            ]
        }
    },
    "aquatic (rare)": {
        name: "Aquatic Wave-Swept Weapon",
        rarity: "rare",
        description: "This +2 sword emits 5-ft Bright/5-ft Dim light. While holding it, I can breathe underwater, have a 30 ft Swim Speed, and can use a Magic action to infuse up to 1 gal of liquid with brine. [Evolving Item]",
        descriptionFull: "This weapon is covered in oceanic motifs, from wavelike etchings on its blade to stylized sea monsters embroidered onto its leather hilt.\n   Barnacled. Barnacles dot this blade's guard and the flat sides of its etched blade.\n   You have a +1 bonus to attack rolls and damage rolls made with this magic weapon. While holding this weapon, you can take a Magic action to touch up to a gallon of liquid and infuse it with brine, turning fresh water into saltwater, for instance.\n   Aquatic. The wavelike etchings on this weapon's blade glow with light, shedding Bright Light in a 5-foot radius and Dim Light for an additional 5 feet.\n   Your bonus to attack rolls and damage rolls made with this magic weapon increases to +2. While you hold the weapon, you can breathe underwater, and you have a Swim Speed of 30 feet.\n   Evolving Item. This item is an Evolving Item, see Evolving Magic Items for more information.",
        action: [["action", " (infuse brine)"]],
        speed: { swim: { spd: "fixed 30", enc: "fixed 30" } },
        calcChanges: {
            atkAdd: [
                function(fields, v) {
                    if (v.isMeleeWeapon && (/^(?=.*aquatic)(?=.*wave-swept).*$/i).test(v.WeaponTextName)) { v.theWea.isMagicWeapon = true; }
                }, ''
            ],
            atkCalc: [
                function(fields, v, output) {
                    if (v.isMeleeWeapon && (/^(?=.*aquatic)(?=.*wave-swept).*$/i).test(v.WeaponTextName)) { output.magic = v.thisWeapon[1] + 2; }
                }, ''
            ]
        }
    },
    "ascendant (very rare)": {
        name: "Ascendant Wave-Swept Weapon",
        rarity: "very rare",
        description: "This +3 sword emits 5-ft Bright/5-ft Dim light. While holding it, I can breathe underwater, have a 30 ft Swim and Fly Speed, and can use a Magic action to infuse up to 1 gal of liquid with brine. [Evolving Item]",
        descriptionFull: "This weapon is covered in oceanic motifs, from wavelike etchings on its blade to stylized sea monsters embroidered onto its leather hilt.\n   Barnacled. Barnacles dot this blade's guard and the flat sides of its etched blade.\n   You have a +1 bonus to attack rolls and damage rolls made with this magic weapon. While holding this weapon, you can take a Magic action to touch up to a gallon of liquid and infuse it with brine, turning fresh water into saltwater, for instance.\n   Aquatic. The wavelike etchings on this weapon's blade glow with light, shedding Bright Light in a 5-foot radius and Dim Light for an additional 5 feet.\n   Your bonus to attack rolls and damage rolls made with this magic weapon increases to +3. While you hold the weapon, you can breathe underwater, and you have a Swim Speed of 30 feet.\n   Ascendant. The sea monsters embroidered on this weapon's hilt are studded with chips of colorful gemstones.\n   Your bonus to attack rolls and damage rolls made with this magic weapon increases to +3. While you hold this weapon, you have a Fly Speed of 30 feet; when you use this Fly Speed, a salty sea breeze carries you through the air.\n   Evolving Item. This item is an Evolving Item, see Evolving Magic Items for more information.",
        action: [["action", " (infuse brine)"]],
        speed: { swim: { spd: "fixed 30", enc: "fixed 30" }, fly: { spd: "fixed 30", enc: "fixed 30" } },
        calcChanges: {
            atkAdd: [
                function(fields, v) {
                    if (v.isMeleeWeapon && (/^(?=.*ascendant)(?=.*wave-swept).*$/i).test(v.WeaponTextName)) { v.theWea.isMagicWeapon = true; }
                }, ''
            ],
            atkCalc: [
                function(fields, v, output) {
                    if (v.isMeleeWeapon && (/^(?=.*ascendant)(?=.*wave-swept).*$/i).test(v.WeaponTextName)) { output.magic = v.thisWeapon[1] + 3; }
                }, ''
            ]
        }
    }
};
MagicItemsList["necklace of the beastly familiar"] = {
    name: "Necklace of the Beastly Familiar",
    source: [["AU", 120]],
    type: "wondrous item",
    rarity: "uncommon",
    attunement: true,
    prerequisite: "Requires attunement by a Spellcaster",
    prereqeval: function (v) { return v.isSpellcaster; },
    description: "I can cast Find Familiar (1/dawn). As a Magic action, if my familiar is within 60 ft, it shape-shifts into a specific Beast for 10 mins. It retains its type, HP, and HD, and gains Temp HP equal to the Beast form's HP. The transformation ends early if it has no Temp HP left.",
    descriptionFull: "This bejeweled necklace comes with a matching charm that can be worn by your familiar.\n   Familiar. While wearing this necklace, you can cast the Find Familiar spell from it. Once the necklace has been used to cast this spell, it can't be used to cast it again until the next dawn.\n   Beast Transformation. While your familiar is within 60 feet of you, you can take a Magic action to activate the necklace. Your familiar shape-shifts into a specific Beast for 10 minutes.\n   While your familiar is transformed, its stat block is replaced by the stat block of the Beast form, but it retains its alignment, personality, creature type, Hit Points, and Hit Point Dice. Equipment the familiar is wearing or carrying doesn't change size or shape to match the Beast form, and any equipment that the Beast form can't wear or carry falls to the ground.\n   Your familiar gains a number of Temporary Hit Points equal to the Hit Points of the Beast form. These Temporary Hit Points vanish if any remain when the transformation ends. The transformation ends early on your familiar if it has no Temporary Hit Points left.",
    allowDuplicates: true,
    action: [["action", " (transform familiar)"]],
    spellcastingBonus: [{
        name: "1/dawn",
        spells: ["find familiar"],
        selection: ["find familiar"],
        firstCol: "oncelr"
    }],
    choices: ["Giant Octopus (Uncommon)", "Giant Scorpion (Rare)", "Hippopotamus (Rare)", "Mammoth (Very Rare)", "Tyrannosaurus Rex (Legendary)"],
    "giant octopus (uncommon)": {
        name: "Necklace of the Beastly Familiar (Giant Octopus)",
        rarity: "uncommon",
        description: "This azurite necklace lets me cast Find Familiar (1/dawn). As a Magic action, if my familiar is within 60 ft, it transforms into a Giant Octopus for 10 mins. It retains its type, HP, and HD, and gains Temp HP equal to the octopus's HP. The form ends early if it has 0 Temp HP.",
        descriptionFull: "This bejeweled necklace is set with azurite and comes with a matching charm that can be worn by your familiar.\n   Familiar. While wearing this necklace, you can cast the Find Familiar spell from it. Once the necklace has been used to cast this spell, it can't be used to cast it again until the next dawn.\n   Beast Transformation. While your familiar is within 60 feet of you, you can take a Magic action to activate the necklace. Your familiar shape-shifts into a Giant Octopus for 10 minutes.\n   While your familiar is transformed, its stat block is replaced by the stat block of the Beast form, but it retains its alignment, personality, creature type, Hit Points, and Hit Point Dice. Equipment the familiar is wearing or carrying doesn't change size or shape to match the Beast form, and any equipment that the Beast form can't wear or carry falls to the ground.\n   Your familiar gains a number of Temporary Hit Points equal to the Hit Points of the Beast form. These Temporary Hit Points vanish if any remain when the transformation ends. The transformation ends early on your familiar if it has no Temporary Hit Points left."
    },
    "giant scorpion (rare)": {
        name: "Necklace of the Beastly Familiar (Giant Scorpion)",
        rarity: "rare",
        description: "This chrysoprase necklace lets me cast Find Familiar (1/dawn). As a Magic action, if my familiar is within 60 ft, it transforms into a Giant Scorpion for 10 mins. It retains its type, HP, and HD, and gains Temp HP equal to the scorpion's HP. The form ends early if it has 0 Temp HP.",
        descriptionFull: "This bejeweled necklace is set with chrysoprase and comes with a matching charm that can be worn by your familiar.\n   Familiar. While wearing this necklace, you can cast the Find Familiar spell from it. Once the necklace has been used to cast this spell, it can't be used to cast it again until the next dawn.\n   Beast Transformation. While your familiar is within 60 feet of you, you can take a Magic action to activate the necklace. Your familiar shape-shifts into a Giant Scorpion for 10 minutes.\n   While your familiar is transformed, its stat block is replaced by the stat block of the Beast form, but it retains its alignment, personality, creature type, Hit Points, and Hit Point Dice. Equipment the familiar is wearing or carrying doesn't change size or shape to match the Beast form, and any equipment that the Beast form can't wear or carry falls to the ground.\n   Your familiar gains a number of Temporary Hit Points equal to the Hit Points of the Beast form. These Temporary Hit Points vanish if any remain when the transformation ends. The transformation ends early on your familiar if it has no Temporary Hit Points left."
    },
    "hippopotamus (rare)": {
        name: "Necklace of the Beastly Familiar (Hippopotamus)",
        rarity: "rare",
        description: "This zircon necklace lets me cast Find Familiar (1/dawn). As a Magic action, if my familiar is within 60 ft, it transforms into a Hippopotamus for 10 mins. It retains its type, HP, and HD, and gains Temp HP equal to the hippo's HP. The form ends early if it has 0 Temp HP.",
        descriptionFull: "This bejeweled necklace is set with zircon and comes with a matching charm that can be worn by your familiar.\n   Familiar. While wearing this necklace, you can cast the Find Familiar spell from it. Once the necklace has been used to cast this spell, it can't be used to cast it again until the next dawn.\n   Beast Transformation. While your familiar is within 60 feet of you, you can take a Magic action to activate the necklace. Your familiar shape-shifts into a Hippopotamus for 10 minutes.\n   While your familiar is transformed, its stat block is replaced by the stat block of the Beast form, but it retains its alignment, personality, creature type, Hit Points, and Hit Point Dice. Equipment the familiar is wearing or carrying doesn't change size or shape to match the Beast form, and any equipment that the Beast form can't wear or carry falls to the ground.\n   Your familiar gains a number of Temporary Hit Points equal to the Hit Points of the Beast form. These Temporary Hit Points vanish if any remain when the transformation ends. The transformation ends early on your familiar if it has no Temporary Hit Points left."
    },
    "mammoth (very rare)": {
        name: "Necklace of the Beastly Familiar (Mammoth)",
        rarity: "very rare",
        description: "This topaz necklace lets me cast Find Familiar (1/dawn). As a Magic action, if my familiar is within 60 ft, it transforms into a Mammoth for 10 mins. It retains its type, HP, and HD, and gains Temp HP equal to the mammoth's HP. The form ends early if it has 0 Temp HP.",
        descriptionFull: "This bejeweled necklace is set with topaz and comes with a matching charm that can be worn by your familiar.\n   Familiar. While wearing this necklace, you can cast the Find Familiar spell from it. Once the necklace has been used to cast this spell, it can't be used to cast it again until the next dawn.\n   Beast Transformation. While your familiar is within 60 feet of you, you can take a Magic action to activate the necklace. Your familiar shape-shifts into a Mammoth for 10 minutes.\n   While your familiar is transformed, its stat block is replaced by the stat block of the Beast form, but it retains its alignment, personality, creature type, Hit Points, and Hit Point Dice. Equipment the familiar is wearing or carrying doesn't change size or shape to match the Beast form, and any equipment that the Beast form can't wear or carry falls to the ground.\n   Your familiar gains a number of Temporary Hit Points equal to the Hit Points of the Beast form. These Temporary Hit Points vanish if any remain when the transformation ends. The transformation ends early on your familiar if it has no Temporary Hit Points left."
    },
    "tyrannosaurus rex (legendary)": {
        name: "Necklace of the Beastly Familiar (Tyrannosaurus Rex)",
        rarity: "legendary",
        description: "This fire opal necklace lets me cast Find Familiar (1/dawn). As a Magic action, if my familiar is within 60 ft, it transforms into a Tyrannosaurus Rex for 10 mins. It retains its type, HP, and HD, and gains Temp HP equal to the T-Rex's HP. The form ends early if it has 0 Temp HP.",
        descriptionFull: "This bejeweled necklace is set with fire opal and comes with a matching charm that can be worn by your familiar.\n   Familiar. While wearing this necklace, you can cast the Find Familiar spell from it. Once the necklace has been used to cast this spell, it can't be used to cast it again until the next dawn.\n   Beast Transformation. While your familiar is within 60 feet of you, you can take a Magic action to activate the necklace. Your familiar shape-shifts into a Tyrannosaurus Rex for 10 minutes.\n   While your familiar is transformed, its stat block is replaced by the stat block of the Beast form, but it retains its alignment, personality, creature type, Hit Points, and Hit Point Dice. Equipment the familiar is wearing or carrying doesn't change size or shape to match the Beast form, and any equipment that the Beast form can't wear or carry falls to the ground.\n   Your familiar gains a number of Temporary Hit Points equal to the Hit Points of the Beast form. These Temporary Hit Points vanish if any remain when the transformation ends. The transformation ends early on your familiar if it has no Temporary Hit Points left."
    }
};		
