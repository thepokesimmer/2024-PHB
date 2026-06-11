var iFileName = "pub_20260616_RtHW.js";
RequiredSheetVersion("24.0.0", "24.1.0");
SourceList.RtHW = {
    name : "Ravenloft: The Horrors Within",
    abbreviation : "RtHW",
    abbreviationSpellsheet : "RH",
    group : "Primary Sources",
    url : "https://marketplace.dndbeyond.com/category/6015000",
    date : "2026/06/03"
};
SourceList.BoH = {
  name: "Astarion's Book of Hungers",
  abbreviation: "BoH",
  abbreviationSpellsheet: "BH",
  group : "Primary Sources",
  url: "https://marketplace.dndbeyond.com/category/DBRWE7DB3",
  date: "2025/11/11",
};
//Subclasses
AddSubClass("artificer", "reanimator", {
    regExpSearch : /^(?=.*artificer)(?=.*(reanimator)).*$/i,
    subname : "Reanimator",
    source : [["RtHW", 15]],
    features : {
        "subclassfeature3" : {
            name : "Reanimator's Skill Set",
            source : [["RtHW", 15]],
            minlevel : 3,
			spellcastingExtra : ["false life", "spare the dying", "witch bolt", "blindness/deafness", "enhance ability", "animate dead", "lightning bolt", "blight", "death ward", "antilife shell", "raise dead"],
            description : desc([
                "I gain proficiency with Alchemist's Supplies (or another artisan's tools if I already have it).",
                "***Jolt to Life***: When casting Spare the Dying, I can modify it to revive the target.",
                "The target regains HP equal to my Artificer level. Creatures in a 10-ft Emanation",
                "around the target must make a Dex save (Spell DC) or take Lightning damage (half on save)."
            ]),
            toolProfs : [["Alchemist's supplies", "Alch. supplies (or other)"]],
            usages : "Intelligence modifier per ",
            usagescalc : "event.value = Math.max(1, What('Int Mod'));",
            recovery : "long rest",
            action : [["action", "Jolt to Life (Spare the Dying)"]],
            additional : levels.map(function(n) {
                return n < 11 ? "2d4 Lightning damage" : n < 17 ? "3d4 Lightning damage" : "4d4 Lightning damage";
            })
        },
        "subclassfeature3.1" : {
            name : "Reanimated Companion",
            source : [["RtHW", 15]],
            minlevel : 3,
            description : desc([
                "Using artisan's tools, I take a Magic action to create a Reanimated Companion in 5 ft.",
                "It is Friendly, acts on my turn, and can move and use its reaction on its own.",
                "It takes the Dodge action unless I command it to take an action (Bonus Action).",
                "It lasts until I Long Rest, dismiss it (Magic action), or I die (triggers Death Burst).",
                "I can only have one at a time. If it dies, I can create a new one using a spell slot."
            ]),
            action : [
                ["action", "Create/Dismiss Companion"],
                ["bonus action", "Command Companion"]
            ],
            creaturesAdd : [["Reanimated Companion", true, function(compName, prefix) {
                var aLvl = classes.known.artificer.level;
                Value(prefix + 'Comp.Use.HP.Max', 5 + (aLvl * 5));
                Value(prefix + 'Comp.Use.HD.Level', aLvl);
                Value(prefix + 'Comp.Use.AC', 10 + What('Int Mod'));
            }]]
        },
        "subclassfeature5" : {
            name : "Strange Modifications",
            source : [["RtHW", 16]],
            minlevel : 5,
            description : desc([
                "When I create my Reanimated Companion, it gains modifications of my choice.",
                "I choose 1 option at 5th level, 2 options at 9th level, and 3 options at 15th level.",
                "Use the 'Choose Feature' button to select your modifications."
            ]),
            extraname : "Strange Modification",
            extraTimes : levels.map(function (n) { return n < 9 ? 1 : n < 15 ? 2 : 3; }),
            extrachoices : ["Arcane Conduit", "Ferocity", "Bloated", "Gaunt", "Moist"],
            "arcane conduit" : {
                name : "Arcane Conduit",
                description : desc([
                    "I can cast spells as though I were in the companion's space, using my own senses.",
                    "1/turn when I deal damage with an Evocation or Necromancy Artificer spell,",
                    "I can add my Int mod to one damage roll if my companion is within 120 ft."
                ])
            },
            "ferocity" : {
                name : "Ferocity",
                description : desc("The damage die of my companion's Dreadful Swipe increases to 1d6.")
            },
            "bloated" : {
                name : "Bloated",
                prerequisite : "Artificer 9",
				prereqeval: function(v) {
					return classes.known.artificer.level >= 9;
				},
                description : desc([
                    "The companion becomes Large. On a Dreadful Swipe hit, it pushes a Large",
                    "or smaller target up to 10 ft away. I add my Int mod to its Death Burst damage."
                ])
            },
            "gaunt" : {
                name : "Gaunt",
                prerequisite : "Artificer 9",
				prereqeval: function(v) {
					return classes.known.artificer.level >= 9;
				},
                description : desc([
                    "The companion's Speed and Climb Speed become 45 ft (can spider climb).",
                    "Creatures of my choice starting their turn in a 10-ft Emanation from it",
                    "must succeed on a Wis save (my Spell DC) or be Frightened until their next turn."
                ])
            },
            "moist" : {
                name : "Moist",
                prerequisite : "Artificer 9",
				prereqeval: function(v) {
					return classes.known.artificer.level >= 9;
				},
                description : desc([
                    "The companion gains a Swim Speed equal to its Speed and can squeeze through",
                    "1-inch gaps. Attackers within 10 ft that hit it take Acid damage equal to my Int mod."
                ])
            }
        },
        "subclassfeature9" : {
            name : "Improved Reanimation",
            source : [["RtHW", 16]],
            minlevel : 9,
            description : desc([
                "The damage of my companion's Death Burst increases to 4d4.",
                "Necrotic damage dealt by my companion ignores Resistance.",
                "I also gain expanded options for my Strange Modifications (Bloated, Gaunt, Moist)."
            ])
        },
        "subclassfeature15" : {
            name : "Refined Reanimation",
            source : [["RtHW", 16]],
            minlevel : 15,
            description : desc([
                "I can cast Raise Dead 1/Long Rest without a slot/Material comps (using artisan's tools).",
                "***Life Transfer***: As a Reaction when me or my companion takes damage, I can",
                "destroy the companion to heal HP equal to its current HP (triggers Death Burst)."
            ]),
            action : [["reaction", "Life Transfer"]],
            spellcastingBonus : [{
                name : "Facilitated Revival",
                spells : ["raise dead"],
                selection : ["raise dead"],
                firstCol : "oncelr+markedbox"
            }],
            calcChanges : {
                spellAdd : [
                    function (spellKey, spellObj, spName) {
                        if (spellKey === "raise dead" && spName.match(/refined reanimation|facilitated revival/i)) {
                            spellObj.components = "V,S,M\u0192";
                            spellObj.compMaterial = "Artisan's Tools";
                            return true;
                        }
                    },
                    "My Raise Dead from Facilitated Revival requires no costly material components, only my Artisan's Tools."
                ]
            }
        }
    }
});
CreatureList["reanimated companion"] = {
    name : "Reanimated Companion",
    source : [["RtHW", 15]],
    size : 3,
    type : "Undead",
    alignment : "Neutral",
    ac : 10,
    hp : 20,
    hd : [3, 8],
    speed : "30 ft",
    scores : [11, 10, 16, 4, 10, 6],
    saves : ["", "", "", "", "", ""],
    damage_resistances : "Necrotic, Poison",
    damage_immunities : "Lightning",
    condition_immunities : "charmed, exhaustion, poisoned",
    senses : "Blindsight 60 ft",
    passivePerception : 10,
    languages : "Understands the languages you know",
    challengeRating : "0",
    proficiencyBonus: 2,
    proficiencyBonusLinked: true,
    attacksAction : 1,
    attacks : [{
        name : "Dreadful Swipe",
        ability : 1,
        damage : [1, 4, "necrotic"],
        range : "Melee (5 ft)",
		modifiers: ["", "oInt"],
        description : "Target can't take Opportunity Attacks until start of its next turn",
        abilitytodamage : false,
		useSpellMod: ["artificer"],
    }],
    traits : [{
        name : "Death Burst",
        description : "When it dies, it explodes. Each creature in a 10-ft Emanation makes a Dex save (Spell DC) or takes 2d6 (4d4 at level 9) Necrotic damage, half on success."
    }, {
        name : "Lightning Absorption",
        description : "Whenever the companion is subjected to Lightning damage, it regains a number of Hit Points equal to the Lightning damage dealt."
    }]
};
AddSubClass("bard", "college of spirits", {
    regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*spirits?).*$/i,
    subname : "College of Spirits",
    source : [["RtHW", 17]],
    features : {
        "subclassfeature3" : {
            name : "Channeler",
            source : [["RtHW", 17]],
            minlevel : 3,
            description : desc([
                "I learn the Guidance cantrip; its range is 60 ft when I cast it.",
                "I gain proficiency with the Playing Cards gaming set.",
                "I can use playing cards, a crystal, orb, candle, or ink pen as my spellcasting focus."
            ]),
			toolProfs : ["Playing Cards"],
            spellcastingBonus : [{
                name : "Channeler",
                spells : ["guidance"],
                selection : ["guidance"],
                firstCol : "atwill"
            }],
            calcChanges : {
                spellAdd : [
                    function (spellKey, spellObj, spName) {
                        if (spellKey === "guidance") {
                            spellObj.range = "60 ft";
                            return true;
                        }
                    },
                    "My Guidance cantrip has a range of 60 ft."
                ]
            }
        },
        "subclassfeature3.1" : {
            name : "Spirits from Beyond",
            source : [["RtHW", 17]],
            minlevel : 3,
            description : desc([
                "When I use a Bonus Action to give Bardic Inspiration, I can roll the die to channel a spirit.",
                "It stays channeled until unleashed or I finish a Short/Long Rest. (See Notes for table)",
                "***Controlled Channeling***: As a Bonus Action, I can expend a BI use to choose a spirit.",
                "The chosen spirit's number must be \u2264 the highest number on my BI die.",
                "***Unleash Spirit***: As a Magic action, I unleash it on a creature I see within 30 ft.",
                "Any saving throw required uses my Bard spell save DC."
            ]),
			toNotesPage : [{
				note : [
					"SPIRITS FROM BEYOND",
					" 1. Beloved: Target regains HP = 1 roll of BI die + Cha mod.",
					" 2. Sharpshooter: Target takes Force dmg = 1 roll of BI die + Cha mod.",
					" 3. Avenger: Until end of your next turn, any creature that hits target with a melee attack takes Force dmg = 1 roll of BI die.",
					" 4. Renegade: Target can immediately use a Reaction to teleport up to 30 ft.",
					" 5. Fortune Teller: Target has Advantage on D20 Tests until start of your next turn.",
					" 6. Wayfarer: Target gains Temp HP = 1 roll of BI die + Bard level. While it has these Temp HP, its Speed increases by 10 ft.",
					" 7. Trickster: Target makes Wis save. Fail: Psychic dmg = 2 rolls of BI die and Charmed until start of your next turn. Success: Half dmg.",
					" 8. Shade: Target becomes Invisible until end of its next turn or it attacks/damages/casts. When it ends, creatures in 5-ft Emanation from target make Con save or take Necrotic dmg = 2 rolls of BI die.",
					" 9. Arsonist: Target makes Dex save. Fail: Fire dmg = 4 rolls of BI die. Success: Half dmg.",
					" 10. Coward: Target and chosen creatures in 30-ft Emanation from target make Wis save or are Frightened until start of your next turn (Speed halved, can take Action or Bonus Action, not both).",
					" 11. Brute: Chosen creatures in 30-ft Emanation from target make Str save. Fail: Thunder dmg = 3 rolls of BI die and Prone. Success: Half dmg.",
					" 12. Priest: Target regains HP = 2 rolls of BI die, and one condition ends (Blinded, Charmed, Deafened, Paralyzed, Poisoned, or Stunned).",
				],
			}],
            action : [
                ["bonus action", "Spirits from Beyond (Channel)"],
                ["bonus action", "Controlled Channeling"],
                ["action", "Unleash Spirit"]
            ]
        },
        "subclassfeature6" : {
            name : "Empowered Channeling",
            source : [["RtHW", 18]],
            minlevel : 6,
            description : desc([
                "Power from Beyond: 1/turn when I cast a Bard spell (slot) that deals dmg or restores HP,",
                "I can roll 1d6 and add it to one of the spell's damage rolls or the HP restored.",
                "***Spiritual Manifestation***: I always have Spirit Guardians prepared. 1/Long Rest, I can",
                "cast it without a spell slot. 1/Short or Long Rest, when I cast it, I can modify it so",
                "me and my allies in the spell's emanation have Half Cover."
            ]),
			limfeaname : "Modified Spirit Guardians",
            usages : 1,
            recovery : "short rest",
            spellcastingBonus : [{
                name : "Spiritual Manifestation",
                spells : ["spirit guardians"],
                selection : ["spirit guardians"],
                firstCol : "oncelr+markedbox"
            }],
        },
        "subclassfeature14" : {
            name : "Mystical Connection",
            source : [["RtHW", 18]],
            minlevel : 14,
            description : desc([
                "Whenever I roll on the Spirits from Beyond table, I can roll the die twice and choose.",
                "If I roll the same number on both dice, I can instead choose any effect on the table."
            ])
        }
    }
});
AddSubClass("cleric", "grave domain", {
    regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*grave).*$/i,
    subname : "Grave Domain",
    source : [["RtHW", 19]],
    features : {
        "subclassfeature3" : {
            name : "Circle of Mortality",
            source : [["RtHW", 19]],
            minlevel : 3,
			spellcastingExtra : ["detect evil and good", "false life", "gentle repose", "ray of enfeeblement", "revivify", "vampiric touch", "blight", "death ward", "dispel evil and good", "raise dead"],
            description : desc([
                "1/turn when I deal damage to a creature missing any HP, it takes extra Necrotic dmg.",
                "When I heal a 0 HP creature with a spell/Channel Divinity, I maximize the healing dice.",
                "I also learn Spare the Dying and can cast it as a Bonus Action."
            ]),
            additional : levels.map(function(n) {
                return n < 11 ? "1d4 extra dmg to hurt target" : "1d6 extra dmg to hurt target";
            }),
            action : [["bonus action", "Spare the Dying"]],
            spellcastingBonus : [{
                name : "Circle of Mortality",
                spells : ["spare the dying"],
                selection : ["spare the dying"],
                firstCol : "atwill"
            }],
            calcChanges : {
                spellAdd : [
                    function (spellKey, spellObj, spName) {
                        if (spellKey === "spare the dying") {
                            spellObj.time = "1 bns";
                            return true;
                        }
                    },
                    "I can cast Spare the Dying as a Bonus Action."
                ]
            }
        },
        "subclassfeature3.1" : {
            name : "Channel Divinity: Path to the Grave",
            source : [["RtHW", 19]],
            minlevel : 3,
            description : desc([
                "As a Bonus Action, I can expend a Channel Divinity to curse a creature in 30 ft.",
                "Until the start of my next turn, it has Disadvantage on attack rolls and saves.",
                "When I or an ally hits the cursed target, I can end the curse early (no action).",
                "Doing so deals extra Necrotic or Radiant damage (my choice) equal to my Cleric level."
            ]),
            action : ["bonus action", ""],
        },
        "subclassfeature6" : {
            name : "Sentinel at Death's Door",
            source : [["RtHW", 20]],
            minlevel : 6,
            description : desc([
                "As a Reaction when me or a Bloodied ally in 60 ft is hit by an attack, I halve its dmg.",
                "If the attack was a critical hit, any effects triggered by a critical hit are canceled."
            ]),
            action : ["reaction", ""],
            usages : "Wisdom modifier per ",
            usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
            recovery : "long rest"
        },
        "subclassfeature17" : {
            name : "Divine Reaper",
            source : [["RtHW", 20]],
            minlevel : 17,
            description : desc([
                "***Enhanced Necromancy***: If I cast a \u22645th-lvl Necromancy or Grave Domain spell on",
                "1 target, I can expend a CD to target a 2nd creature (req. material comps for both).",
                "***Keeper of Souls***: When an enemy dies in 60 ft, me or an ally in 60 ft heals HP",
                "equal to twice my Cleric level. Can't be used if Incapacitated."
            ]),
			limfeaname : "Keeper of Souls",
            usages : 1,
            recovery : "Short Rest",
            altResource : "SS 6+"
        }
    }
});
AddSubClass("ranger", "hollow warden", {
    regExpSearch : /^(?=.*ranger)((?=.*hollow)(?=.*warden)).*$/i,
    subname : "Hollow Warden",
    source : [["RtHW", 20]],
    features : {
        "subclassfeature3" : {
            name : "Wrath of the Wild",
            source : [["RtHW", 21]],
            minlevel : 3,
			spellcastingExtra : ["wrathful smite", "alter self", "phantom steed", "dominate beast", "steel wind strike"],
            description : desc([
                "As a Bonus Action, I can expend a Favored Enemy use to transform for 1 min.",
                "It ends early if I'm Incapacitated, die, or end it (no action). While transformed:",
                " \u2022 ***Ancient Armor***: I gain a +1 bonus to my AC (+2 at 11th level).",
                " \u2022 ***Prowling Retribution***: As a Reaction when a creature within 5 ft deals damage",
                "   to me or an ally, I can make an Opportunity Attack against that creature.",
                " \u2022 ***Unnerving Aura***: At transform & start of my subsequent turns, creatures in a",
                "   10-ft Emanation make a Wis save (Spell DC) or are Frightened until my next turn."
            ]),
            action : [
                ["bonus action", "Wrath of the Wild (transform)"],
                ["reaction", "Prowling Retribution"]
            ],
            additional : levels.map(function(n) {
                return n < 11 ? "+1 AC transformed" : "+2 AC transformed";
            })
        },
        "subclassfeature7" : {
            name : "Hungering Might",
            source : [["RtHW", 21]],
            minlevel : 7,
            description : desc([
                "I gain a bonus to my Constitution saving throws equal to my Wis mod (minimum +1).",
                "1/turn when transformed, if I hit a creature with an attack and I am Bloodied,",
                "I regain Hit Points equal to 1d10 + my Wisdom modifier."
            ]),
			addMod: [{
				type: "save",
				field: "Con",
				mod: "Wis",
				text: "+Wis mod to Con saving throws."
			}],
        },
        "subclassfeature11" : {
            name : "Rot and Violence",
            source : [["RtHW", 21]],
            minlevel : 11,
            description : desc([
                "My Wrath of the Wild transformation improves, gaining the following benefits:",
                " \u2022 ***Menacing Aura***: Creatures failing my Unnerving Aura save can't regain HP or",
                "   take Reactions until the start of my next turn.",
                " \u2022 ***Strangling Roots***: When I hit with a weapon attack, I can activate the Sap",
                "   or Slow mastery property in addition to the weapon's normal mastery property."
            ])
        },
        "subclassfeature15" : {
            name : "Ancient Might",
            source : [["RtHW", 21]],
            minlevel : 15,
            description : desc([
                "I have Immunity to the Exhaustion condition.",
                " \u2022 ***Ominous Strikes***: My attacks vs. Frightened targets deal extra dmg = Wis mod.",
                " \u2022 ***Persistent Wrath***: If reduced to 0 HP while transformed (and not killed outright),",
                "   I instead drop to HP equal to twice my Ranger level."
            ]),
            savetxt : { immune : ["exhaustion"] },
			limfeaname : "Persistent Wrath",
            usages : 1,
            recovery : "long rest",
            altResource : "SS 4+"
        }
    }
});
AddSubClass("rogue", "phantom", {
    regExpSearch : /^(?=.*rogue)(?=.*phantom).*$/i,
    subname : "Phantom",
    source : [["RtHW", 21]],
    features : {
        "subclassfeature3" : {
            name : "Wails from the Grave",
            source : [["RtHW", 21]],
            minlevel : 3,
            description : desc([
                "When I deal Sneak Attack damage, I can target a 2nd creature I see in 30 ft.",
                "It takes Necrotic damage equal to half my Sneak Attack dice rolled (rounded up).",
                "At 17th level, this damage applies to both the first and second creature."
            ]),
            usages : "Dexterity modifier per ",
            usagescalc : "event.value = Math.max(1, What('Dex Mod'));",
            recovery : "long rest",
            additional : levels.map(function (n) {
                return Math.ceil(Math.ceil(n/2)/2) + "d6 necrotic damage";
            })
        },
        "subclassfeature3.1" : {
            name : "Whispers of the Dead",
            source : [["RtHW", 21]],
            minlevel : 3,
            description : desc([
                "After a Short or Long Rest, I gain 1 skill or tool proficiency of my choice.",
                "This proficiency lasts until I use this feature again to choose a different one."
            ])
        },
        "subclassfeature9" : {
            name : "Tokens of the Departed",
            source : [["RtHW", 22]],
            minlevel : 9,
            description : desc([
                "Reaction when a creature in 30 ft dies: gain a soul trinket (Tiny object).",
                "I regain up to 2 trinkets after a Long Rest. Max 2 trinkets (3 at 13th, 4 at 17th).",
                "While holding 1+, I have Advantage on Death and Constitution saving throws.",
                "I can destroy a trinket to use Wails from the Grave without expending a use.",
                "I can destroy a trinket (Magic action) to cast Augury (no comps, Con mod) or ask",
                "the associated spirit one question instead."
            ]),
            action : [
                ["reaction", "Gain Soul Trinket"],
                ["action", "Spirit Query (Magic action)"]
            ],
            savetxt : { text : ["Adv. on Con/Death saves if I have a soul trinket"] },
            additional : levels.map(function(n) {
                return n < 9 ? "" : n < 13 ? "Max 2 trinkets" : n < 17 ? "Max 3 trinkets" : "Max 4 trinkets";
            })
        },
        "subclassfeature9.1" : {
            name : "Voice of Death",
            source : [["RtHW", 22]],
            minlevel : 9,
            description : desc([
                "I can cast Speak with Dead 1/Short or Long Rest without a spell slot/components.",
                "Dexterity is my spellcasting modifier for this spell.",
                "I can target one of my soul trinkets instead of a corpse to ask its spirit."
            ]),
			spellcastingAbility : 2,
            spellcastingBonus : [{
                name : "Voice of Death",
                spells : ["speak with dead"],
                selection : ["speak with dead"],
                firstCol : "oncesr+markedbox",
            }],
            calcChanges : {
                spellAdd : [
                    function (spellKey, spellObj, spName) {
                        if (spellKey === "speak with dead" && spName.match(/voice of death/i)) {
                            spellObj.components = "";
                            return true;
                        }
                    },
                    "My Speak with Dead from Voice of Death doesn't require any components."
                ]
            }
        },
        "subclassfeature13" : {
            name : "Ghost Walk",
            source : [["RtHW", 23]],
            minlevel : 13,
            description : desc([
                "As a Bonus Action, I assume a spectral form for 10 minutes or until ended.",
                "I gain a 10 ft Fly Speed (hover), and attack rolls against me have Disadvantage.",
                "I can move through creatures/objects as Difficult Terrain (1d10 Force dmg if ending inside)."
            ]),
            action : [["bonus action", "Ghost Walk"]],
            usages : 1,
            recovery : "long rest",
            altResource : "1 Trinket"
        },
        "subclassfeature17" : {
            name : "Death's Friend",
            source : [["RtHW", 23]],
            minlevel : 17,
            description : desc([
                "***Death's Lament***: When I use Wails from the Grave, I deal its necrotic damage",
                "to both the first (Sneak Attack target) and the second creature.",
                "***Draw of Death***: When I roll Initiative and have no soul trinkets, I gain 1 trinket."
            ])
        }
    }
});
AddSubClass("sorcerer", "shadow sorcery", {
    regExpSearch : /^(?=.*sorcerer)(?=.*shadow).*$/i,
    subname : "Shadow Sorcery",
    source : [["RtHW", 23]],
    features : {
        "subclassfeature3" : {
            name : "Power of Shadow",
            source : [["RtHW", 24]],
            minlevel : 3,
			spellcastingExtra : ["bane", "darkness", "inflict wounds", "pass without trace", "hunger of hadar", "nondetection", "greater invisibility", "phantasmal killer", "contagion", "creation"],
			spellcastingExtraApplyNonconform: true,
            description : desc([
                "***Eyes of the Dark***: I gain Darkvision 120 ft and Blindsight 10 ft. I can also see",
                "normally in darkness created by my own spells.",
                "***Strength of the Grave***: When reduced to 0 HP but not killed outright, I can make a",
                "Charisma save (DC 5 + damage taken). On success, I drop to HP equal to my Cha mod",
                "+ my Sorcerer level instead. I can use this once per Long Rest."
            ]),
            vision : [["Darkvision", 120], ["Blindsight", 10]],
			limfeaname : "Strength of the Grave",
            usages : 1,
            recovery : "long rest",
        },
        "subclassfeature6" : {
            name : "Beasts of Ill Omen",
            source : [["RtHW", 24]],
            minlevel : 6,
            description : desc([
                "For 3 Sorcery Points, I can cast Summon Beast as a Bonus Action without a spell slot",
                "or Material components. The beast is made of shadow. Enemies within 5 ft of it have",
                "Disadvantage on saving throws against my Sorcerer spells.",
                "I can cast it this way without Concentration, but the duration becomes 1 minute",
                "for that casting, and the spell ends early if I cast it again."
            ]),
            action : [["bonus action", "Summon Beast (3 SP)"]],
            spellcastingBonus : [{
                name : "Beasts of Ill Omen",
                spells : ["summon beast"],
                selection : ["summon beast"],
                firstCol : "3 SP"
            }],
            calcChanges : {
                spellAdd : [
                    function (spellKey, spellObj, spName) {
                        if (spellKey === "summon beast" && spName.match(/beasts of ill omen/i)) {
                            spellObj.time = "1 bns";
                            spellObj.components = "V,S";
                            return true;
                        }
                    },
                    "My Summon Beast from Beasts of Ill Omen costs 3 SP, is cast as a Bonus Action, and doesn't require material components."
                ]
            }
        },
        "subclassfeature14" : {
            name : "Shadow Walk",
            source : [["RtHW", 24]],
            minlevel : 14,
            description : desc([
                "While in Dim Light or Darkness, I can take a Bonus Action to teleport up to 120 ft",
                "to an unoccupied space I can see that is also in Dim Light or Darkness."
            ]),
            action : [["bonus action", "Shadow Walk"]]
        },
        "subclassfeature18" : {
            name : "Umbral Form",
            source : [["RtHW", 24]],
            minlevel : 18,
            description : desc([
                "When I use Innate Sorcery, I can adopt a shadowy form until Innate Sorcery ends.",
                "While in this form, I gain Resistance to all damage except Force and Radiant.",
                "I also gain Incorporeal Movement: I can move through creatures/objects as Difficult",
                "Terrain, but take 1d10 Force damage if I end my turn inside them."
            ]),
            usages : 1,
            recovery : "long rest",
            altResource : "6 SP"
        }
    }
});
AddSubClass("warlock", "undead patron", {
    regExpSearch : /^(?=.*warlock)(?=.*undead).*$/i,
    subname : "Undead Patron",
    source : [["RtHW", 24]],
    features : {
        "subclassfeature3" : {
            name : "Form of Dread",
            source : [["RtHW", 24]],
            minlevel : 3,
			spellcastingExtra : ["bane", "blindness/deafness", "phantasmal force", "ray of sickness", "speak with dead", "summon undead", "greater invisibility", "phantasmal killer", "antilife shell", "cloudkill"],
			spellcastingExtraApplyNonconform: true,
            description : desc([
                "As a Bonus Action, I transform for 1 minute (ends early if Incapacitated or ended).",
                "I gain 1d10 + my Warlock level in Temp HP and Immunity to the Frightened condition.",
                "1/turn when I hit a creature with an attack, I can force it to make a Wis save.",
                "On a failed save, it is Frightened of me until the end of my next turn."
            ]),
            action : [["bonus action", "Form of Dread (transform)"]],
            usages : "Charisma modifier per ",
            usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
            recovery : "long rest",
            additional : levels.map(function (n) { return "1d10+" + n + " temp HP"; })
        },
        "subclassfeature6" : {
            name : "Grave Touched",
            source : [["RtHW", 24]],
            minlevel : 6,
            description : desc([
                "Necrotic damage from my attacks, Warlock spells, and features ignores Resistance.",
                "1/turn when I cast a damage spell, I can change its damage type to Necrotic.",
                "***Dreaded Necrosis***: 1/turn when I hit with an attack and deal Necrotic dmg during my",
                "Form of Dread, I roll 1 extra damage die of Necrotic damage.",
                "Undead Endurance: I don't need to sleep, and magic can't put me to sleep. I also",
                "don't gain Exhaustion from dehydration, malnutrition, or suffocation."
            ]),
            savetxt : { immune : ["magical sleep"] }
        },
        "subclassfeature10" : {
            name : "Necrotic Husk",
            source : [["RtHW", 25]],
            minlevel : 10,
            description : desc([
                "I have Resistance to Necrotic damage; Immunity while in my Form of Dread.",
                "***Unholy Resuscitation***: When I drop to 0 HP and don't die outright, I can instead drop",
                "to HP equal to twice my Warlock level and gain 1 Exhaustion level.",
                "If I do, creatures in a 30-ft Emanation make a Con save (Spell DC), taking 2d10 + my",
                "Charisma modifier in Necrotic damage on a failure, or half on a success."
            ]),
            dmgres : ["Necrotic"],
			limfeaname : "Unholy Resuscitation",
            usages : 1,
            recovery : "short rest"
        },
        "subclassfeature14" : {
            name : "Superior Dread",
            source : [["RtHW", 25]],
            minlevel : 14,
            description : desc([
                "While using my Form of Dread, I gain the following additional benefits:",
                " \u2022 ***Dread Resistance***: Resistance to Bludgeoning, Piercing, and Slashing damage.",
                " \u2022 ***Ghostly Flight***: Fly Speed equal to my Speed with hover. I can move through",
                "   creatures/objects as Difficult Terrain (1d10 Force dmg if ending turn inside).",
                " \u2022 ***Profane Casting***: I cast Conjuration/Necromancy Warlock spells without V, S,",
                "   or M components (unless costly/consumed)."
            ])
        }
    }
});
//Backgrounds
BackgroundList["haunted one"] = {
    regExpSearch : /^(?=.*haunted)(?=.*one).*$/i,
    name : "Haunted One",
    source : [["RtHW", 26]],
    scorestxt : "+2 to one and +1 to another -or- +1 to all three: Constitution, Wisdom, and Charisma",
    skills : ["Arcana", "Survival"],
    toolProfs : [["Gaming set", 1]],
    gold : 14,
    equipleft : [
        ["Gaming set (choose one)", "", ""],
        ["Oil, flasks of", 2, 1],
        ["Torches", 5, 1],
        ["Holy water, flask of", 1, 1]
    ],
    equipright : [
        ["Traveler's clothes", "", 4],
        ["Crowbar", "", 5],
        ["Mirror", "", 0.5],
        ["Signal whistle", "", ""],
        ["Tinderbox", "", 1],
        ["Waterskin", "", 5],
        ["Belt pouch (with coins)", "", 1]
    ],
    feature : "Haunted One",
	// from VRGtR:
	traitsSourceString: "VRGtR, 34",
	trait : [
		"I don't run from evil. Evil runs from me.",
		"I like to read and memorize poetry. It keeps me calm and brings me fleeting moments of happiness.",
		"I spend money freely and live life to the fullest, knowing that tomorrow I might die.",
		"I live for the thrill of the hunt.",
		"I don't talk about the thing that torments me. I'd rather not burden others with my curse.",
		"I expect danger around every corner.",
		"I refuse to become a victim, and I will not allow others to be victimized.",
		"I put no trust in divine beings.",
		"I had an encounter that I believe gives me a special affinity with a supernatural creature or event.",
		"A signature piece of clothing or distinct weapon serves as an emblem of who I am.",
		"I never accept that I'm out of my depth.",
		"I must know the answer to every secret. No door remains unopened in my presence.",
		"I let people underestimate me, revealing my full competency only to those close to me.",
		"I compulsively seek to collect trophies of my travels and victories.",
		"It doesn't matter if the whole world's against me. I'll always do what I think is right.",
		"I have morbid interests and a macabre aesthetic.",
		"I have a personal ritual, mantra, or relaxation method I use to deal with stress.",
		"Nothing is more important than life, and I never leave anyone in danger.",
		"I'm quick to jump to extreme solutions. Why risk a lesser option not working?",
		"I'm easily startled, but I'm not a coward."
	],
	ideal : [
		["Sacrifice", "Sacrifice: I try to help those in need, no matter what the personal cost. (Good)"],
		["Desperation", "Desperation: I'll stop the spirits that haunt me or die trying. (Any)"],
		["Cleansing", "Cleansing: I kill monsters to make the world a safer place, and to exorcise my own demons. (Good)"],
		["Vigilante", "Vigilante: I have a dark calling that puts me above the law. (Chaotic)"],
		["Preparation", "Preparation: I like to know my enemy's capabilities and weaknesses before rushing into battle. (Lawful)"],
		["Destruction", "Destruction: I'm a monster that destroys other monsters, and anything else that gets in my way. (Evil)"],
		["Adrenaline", "Adrenaline: I've experienced such strangeness that now I feel alive only in extreme situations."],
		["Balance", "Balance: I strive to counter the deeds of someone for whom I feel responsible."],
		["Bound", "Bound: I've wronged someone and must work their will to avoid their curse."],
		["Escape", "Escape: I believe there is something beyond the world I know, and I need to find it."],
		["Legacy", "Legacy: I must do something great so that I'm remembered, and my time is running out."],
		["Misdirection", "Misdirection: I work vigorously to keep others from realizing my flaws or misdeeds."],
		["Obsession", "Obsession: I've lived this way for so long that I can't imagine another way."],
		["Obligation", "Obligation: I owe it to my people, faith, family, or teacher to continue a vaunted legacy."],
		["Promise", "Promise: My life is no longer my own. I must fulfill the dream of someone who's gone."],
		["Revelation", "Revelation: I need to know what lies beyond the mysteries of death, the world, or the Mists."],
		["Sanctuary", "Sanctuary: I know the forces at work in the world and strive to create islands apart from them."],
		["Truth", "Truth: I care about the truth above all else, even if it doesn't benefit anyone."]
	],
	bond : [
		"I keep my thoughts and discoveries in a journal. My journal is my legacy.",
		"I would sacrifice my life and my soul to protect the innocent.",
		"My torment drove away the person I love. I strive to win back the love I've lost.",
		"A terrible guilt consumes me. I hope that I can find redemption through my actions.",
		"There's evil in me, I can feel it. It must never be set free.",
		"I have a child to protect. I must make the world a safer place for him (or her).",
		"I desperately need to get back to someone or someplace, but I lost them in the Mists.",
		"Everything I do is in the service of a powerful master, one I must keep a secret from everyone.",
		"I owe much to my vanished mentor. I seek to continue their work even as I search to find them.",
		"I've seen great darkness, and I'm committed to being a light against it\u2014the light of all lights.",
		"Someone I love has become a monster, murderer, or other threat. It's up to me to redeem them.",
		"The world has been convinced of a terrible lie. It's up to me to reveal the truth.",
		"I deeply miss someone and am quick to adopt people who remind me of them.",
		"A great evil dwells within me. I will fight against it and the world's other evils for as long as I can.",
		"I'm desperately seeking a cure to an affliction or a curse, either for someone close to me for myself.",
		"Spirits are drawn to me. I do all I can to help them find peace.",
		"I use my cunning mind to solve mysteries and find justice for those who've been wronged.",
		"I lost someone I care about, but I still see them in guilty visions, recurring dreams, or as a spirit."
	],
	flaw : [
		"I have certain rituals that I must follow every day. I can never break them.",
		"I assume the worst in people.",
		"I feel no compassion for the dead. They're the lucky ones.",
		"I have an addiction.",
		"I am a purveyor of doom and gloom who lives in a world without hope.",
		"I talk to spirits that no one else can see.",
		"I believe doom follows me and that anyone who gets close to me will face a tragic end.",
		"I'm convinced something is after me, appearing in mirrors, dreams, and places where no one could.",
		"I'm especially superstitious and live life seeking to avoid bad luck, wicked spirits, or the Mists.",
		"I've done unspeakable evil and will do anything to prevent others from finding out.",
		"I am exceptionally credulous and believe any story or legend immediately.",
		"I'm a skeptic and don't believe in the power of rituals, religion, superstition, or spirits.",
		"I know my future is written and that anything I do will lead to a prophesied end.",
		"I need to find the best in everyone and everything, even when that means denying obvious malice.",
		"I've seen the evil of a type of place\u2014like forests, cities, or graveyards\u2014and resist going there.",
		"I'm exceptionally cautious, planning laboriously and devising countless contingencies.",
		"I have a reputation for defeating a great evil, but that's a lie and the wicked force knows.",
		"I know the ends always justify the means and am quick to make sacrifices to attain my goals."
	],
};
BackgroundFeatureList["haunted one"] = {
    description : "I am haunted by the events of my past. Whether it was a lone terrible incident or an accumulation of painful moments, I bear the unshakable weight of what happened to me. I’ve tried to bury it and run away from it, to no avail; it can’t be slain with a sword or banished via magic. Nevertheless, I persist.",
	eval: function() {
        AddString('Feat Note 1', 'Survivor or Dark Gift', '; ');
    },
    removeeval: function() {
        RemoveString('Feat Note 1', 'Survivor or Dark Gift');
    },
    source : [["RtHW", 26]]
};
BackgroundList.investigator = {
    regExpSearch : /investigator/i,
    name : "Investigator",
    source : [["RtHW", 26]],
    scorestxt : "+2 to one and +1 to another -or- +1 to all three: Intelligence, Wisdom, and Charisma",
    skills : ["Insight", "Investigation"],
    toolProfs : ["Disguise kit"],
    gold : 16,
    equipleft : [
        ["Disguise kit", "", 3],
        ["Vial", 3, ""]
    ],
    equipright : [
        ["Traveler's clothes", "", 4],
        ["Manacles", "", 6],
        ["Shovel", "", 5],
        ["Belt pouch (with coins)", "", 1]
    ],
    feature : "Investigator",
	// from VRGtR:
	traitsSourceString: "VRGtR, 35",
	trait : [
		"I had an encounter that I believe gives me a special affinity with a supernatural creature or event.",
		"A signature piece of clothing or distinct weapon serves as an emblem of who I am.",
		"I never accept that I'm out of my depth.",
		"I must know the answer to every secret. No door remains unopened in my presence.",
		"I let people underestimate me, revealing my full competency only to those close to me.",
		"I compulsively seek to collect trophies of my travels and victories.",
		"It doesn't matter if the whole world's against me. I'll always do what I think is right.",
		"I have morbid interests and a macabre aesthetic.",
		"I have a personal ritual, mantra, or relaxation method I use to deal with stress.",
		"Nothing is more important than life, and I never leave anyone in danger.",
		"I'm quick to jump to extreme solutions. Why risk a lesser option not working?",
		"I'm easily startled, but I'm not a coward."
	],
	ideal : [
		["Adrenaline", "Adrenaline: I've experienced such strangeness that now I feel alive only in extreme situations."],
		["Balance", "Balance: I strive to counter the deeds of someone for whom I feel responsible."],
		["Bound", "Bound: I've wronged someone and must work their will to avoid their curse."],
		["Escape", "Escape: I believe there is something beyond the world I know, and I need to find it."],
		["Legacy", "Legacy: I must do something great so that I'm remembered, and my time is running out."],
		["Misdirection", "Misdirection: I work vigorously to keep others from realizing my flaws or misdeeds."],
		["Obsession", "Obsession: I've lived this way for so long that I can't imagine another way."],
		["Obligation", "Obligation: I owe it to my people, faith, family, or teacher to continue a vaunted legacy."],
		["Promise", "Promise: My life is no longer my own. I must fulfill the dream of someone who's gone."],
		["Revelation", "Revelation: I need to know what lies beyond the mysteries of death, the world, or the Mists."],
		["Sanctuary", "Sanctuary: I know the forces at work in the world and strive to create islands apart from them."],
		["Truth", "Truth: I care about the truth above all else, even if it doesn't benefit anyone."]
	],
	bond : [
		"I desperately need to get back to someone or someplace, but I lost them in the Mists.",
		"Everything I do is in the service of a powerful master, one I must keep a secret from everyone.",
		"I owe much to my vanished mentor. I seek to continue their work even as I search to find them.",
		"I've seen great darkness, and I'm committed to being a light against it\u2014the light of all lights.",
		"Someone I love has become a monster, murderer, or other threat. It's up to me to redeem them.",
		"The world has been convinced of a terrible lie. It's up to me to reveal the truth.",
		"I deeply miss someone and am quick to adopt people who remind me of them.",
		"A great evil dwells within me. I will fight against it and the world's other evils for as long as I can.",
		"I'm desperately seeking a cure to an affliction or a curse, either for someone close to me for myself.",
		"Spirits are drawn to me. I do all I can to help them find peace.",
		"I use my cunning mind to solve mysteries and find justice for those who've been wronged.",
		"I lost someone I care about, but I still see them in guilty visions, recurring dreams, or as a spirit."
	],
	flaw : [
		"I believe doom follows me and that anyone who gets close to me will face a tragic end.",
		"I'm convinced something is after me, appearing in mirrors, dreams, and places where no one could.",
		"I'm especially superstitious and live life seeking to avoid bad luck, wicked spirits, or the Mists.",
		"I've done unspeakable evil and will do anything to prevent others from finding out.",
		"I am exceptionally credulous and believe any story or legend immediately.",
		"I'm a skeptic and don't believe in the power of rituals, religion, superstition, or spirits.",
		"I know my future is written and that anything I do will lead to a prophesied end.",
		"I need to find the best in everyone and everything, even when that means denying obvious malice.",
		"I've seen the evil of a type of place\u2014like forests, cities, or graveyards\u2014and resist going there.",
		"I'm exceptionally cautious, planning laboriously and devising countless contingencies.",
		"I have a reputation for defeating a great evil, but that's a lie and the wicked force knows.",
		"I know the ends always justify the means and am quick to make sacrifices to attain my goals."
	],
};
BackgroundFeatureList.investigator = {
    description : "I relentlessly seek the truth. Perhaps I witnessed something remarkable or terrible and now desire to unravel its mystery, or maybe I’m motivated by universal justice and honesty. Whether the cases I’m embroiled in are local crimes or eldritch conspiracies, I’m driven to reveal what others would keep hidden.",
	eval: function() {
        AddString('Feat Note 1', 'Sharp Eye or Dark Gift', '; ');
    },
    removeeval: function() {
        RemoveString('Feat Note 1', 'Sharp Eye or Dark Gift');
    },
    source : [["RtHW", 26]]
};
BackgroundList["mist wanderer"] = {
    regExpSearch : /^(?=.*mist)(?=.*wanderer).*$/i,
    name : "Mist Wanderer",
    source : [["RtHW", 27]],
    scorestxt : "+2 to one and +1 to another -or- +1 to all three: Dexterity, Constitution, and Wisdom",
    skills : ["Stealth", "Survival"],
    toolProfs : [["Artisan's tools", 1]],
    gold : 30,
    equipleft : [
        ["Artisan's tools (choose one)", "", ""],
        ["Oil, flasks of", 5, 1],
        ["Rope, hempen (50 ft)", "", 10]
    ],
    equipright : [
        ["Traveler's clothes", "", 4],
        ["Lamp", "", 1],
        ["Tinderbox", "", 1],
        ["Belt pouch (with coins)", "", 1]
    ],
    feature : "Mist Wanderer",
};
BackgroundFeatureList["mist wanderer"] = {
    description : "I once knew my home. But one day, the Mists rose and drew me into a Domain of Dread. Ever since, I have wandered between domains, braving the mercurial Mists as I search for a way home. My time in these cursed realms has changed me, yet I find solace in communities of fellow wanderers throughout the Mists.",
	eval: function() {
        AddString('Feat Note 1', 'Dark Gift', '; ');
    },
    removeeval: function() {
        RemoveString('Feat Note 1', 'Dark Gift');
    },
    source : [["RtHW", 27]]
};
BackgroundList["spirit medium"] = {
    regExpSearch : /^(?=.*spirit)(?=.*medium).*$/i,
    name : "Spirit Medium",
    source : [["RtHW", 27]],
    scorestxt : "+2 to one and +1 to another -or- +1 to all three: Constitution, Intelligence, and Wisdom",
    skills : ["Insight", "Religion"],
    toolProfs : [["Gaming set", 1]],
    gold : 32,
    equipleft : [
        ["Dagger", "", 1],
        ["Gaming set (choose one)", "", ""],
        ["Basket", "", 2],
        ["Bell", "", ""],
        ["Candle", 8, ""]
    ],
    equipright : [
        ["Traveler's clothes", "", 4],
        ["Ink, 1 ounce bottle of", "", ""],
        ["Ink pen", "", ""],
        ["Paper, sheets of", 5, ""],
        ["Tinderbox", "", 1],
        ["Belt pouch (with coins)", "", 1]
    ],
    feature : "Spirit Medium",
};
BackgroundFeatureList["spirit medium"] = {
    description : "Through strange rituals and fateful encounters, I've discovered that I bear a unique connection to the spirits of the dead and damned. My body is a conduit for such spirits, granting me prescient insight from beyond. But these spirits' intentions aren't always innocent, and their gifts come at a haunting cost.",
	eval: function() {
        AddString('Feat Note 1', 'Dark Gift', '; ');
    },
    removeeval: function() {
        RemoveString('Feat Note 1', 'Dark Gift');
    },
    source : [["RtHW", 27]]
};
//Species
RaceList.dhampir = {
    regExpSearch : /dhampir/i,
    name : "Dhampir",
    source : [["BoH", ""], ["RtHW", 28]],
    plural : "Dhampirs",
    size : [3, 4],
    speed : {
        walk : { spd : 35, enc : 25 },
        climb : { spd : "walk", enc : "walk" },
    },
    vision : [["Darkvision", 60]],
    dmgres : ["Necrotic"],
    weaponOptions : [{
        regExpSearch : /^(?=.*vampiric)(?=.*bite).*$/i,
        name : "Vampiric Bite",
        source : [["BoH", ""], ["RtHW", 28]],
        ability : 3,
        type : "Natural",
        damage : [1, 4, "piercing"],
        range : "Melee",
        description : "Can empower myself on hit to non Construct/Undead",
        abilitytodamage : true,
		monkweapon : true,
        selectNow : true
    }],
    extraLimitedFeatures : [{
		name : "Vampiric Bite",
		additional : "empower myself",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus')",
		recovery : "long rest"
	}],
    trait : [
		"**Dhampir**",
		"##\u25C6 Trace of Undeath##. I have Resistance to Necrotic damage.",
		"##\u25C6 Spider Climb##. I have a Climb Speed equal to my Speed. When I reach level 3, I can also move up, down, and across vertical surfaces and on ceilings while leaving my hands free.",
		"##\u25C6 Vampiric Bite##. When I hit with the dmg option of an Unarmed Strike, I can bite with my fangs. My Proficiency Bonus per long rest, if the creature wasn't a Construct or Undead, I can also empower myself. I either regain HP or get a bonus to my next ability check or attack roll within 1 minute. Both equal the Piercing damage dealt.",
	].join("\n"),
};
RaceList.hexblood = {
    regExpSearch : /hexblood/i,
    name : "Hexblood",
    source : [["RtHW", 29]],
    plural : "Hexbloods",
    size : [3, 4],
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    vision : [["Darkvision", 60]],
	spellcastingAbility : [4, 5, 6],
    spellcastingBonus : [{
        name : "Hex Magic",
        spells : ["disguise self"],
        selection : ["disguise self"],
        firstCol : "oncelr+markedbox",
    }, {
        name : "Hex Magic",
        spells : ["hex"],
        selection : ["hex"],
        firstCol : "oncelr+markedbox",
    }],
	limfeaname : "Eerie Token",
	usages : 1,
	recovery : "long rest",
	action : [
		["bonus action", "Eerie Token (create)"],
		["action", "Eerie Token (Distant Message/Remote Viewing)"],
	],
    trait : [
		"**Hexblood**",
        "##\u25C6 Creature Type##. Fey.",
        "##\u25C6 Eerie Token##. As a Bonus Action 1/Long Rest, I can harmlessly pull off a piece of myself to make a token. While it exists, I can use a Magic action to send a telepathic message (\u226425 words) to its holder if within 10 miles. Alternatively, I can use a Magic action to see/hear through the token for up to 1 minute if within 10 miles (ends early if Incapacitated). Using this remote viewing destroys the token when it ends.",
        "##\u25C6 Hex Magic##. I always have Disguise Self and Hex prepared. I can cast each once per Long Rest without using a spell slot, or by using any spell slots I have.",
	].join("\n"),	
};
RaceList.lupin = {
    regExpSearch : /lupin/i,
    name : "Lupin",
    source : [["RtHW", 30]],
    plural : "Lupins",
    size : [3, 4],
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    vision : [["Darkvision", 60]],
    skillstxt : "Choose one from Perception, Stealth, or Survival",
    weaponOptions : [{
        regExpSearch : /howl/i,
        name : "Howl",
        source : [["RtHW", 30]],
        ability : 3,
        type : "Natural",
        damage : ["Wis save", "", "Disadv"],
        range : "15 ft",
        description : "Chosen creatures fail: Disadvantage on attack rolls and saves until my next turn starts",
        abilitytodamage : false,
        dc : true,
        selectNow : true
    }],
	limfeaname : "Howl",
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	action : [["bonus action", "Howl"]],
    features : {
        "feral pounce" : {
            name : "Feral Pounce",
            minlevel : 1,
            description : desc([
                "My Unarmed Strikes deal Slashing damage instead of Bludgeoning.",
                "1/turn when I hit with an Unarmed Strike during the Attack action,",
                "I can use both the Damage and the Shove options."
            ]),
            calcChanges : {
                atkAdd : [
                    function (fields, v) {
                        if (v.baseWeaponName === "unarmed strike" || v.WeaponName.match(/unarmed strike/i)) {
                            fields.Damage_Type = "Slashing";
                            fields.Description += (fields.Description ? '; ' : '') + "1/turn: Damage & Shove";
                        }
                    },
                    "My Unarmed Strikes deal Slashing damage, and once per turn I can do both Damage and Shove on a hit."
                ]
            }
        },
    },
    trait : [
		"**Lupin**",
        "##\u25C6 Feral Pounce##. My Unarmed Strikes deal Slashing damage. Once per turn, when I hit with an Unarmed Strike during the Attack action, I can use both the Damage and Shove options.",
        "##\u25C6 Howl##. PB/Long Rest, as a Bonus Action, chosen creatures in 15 ft make a Wis save (see attack section). On fail, they have Disadvantage on attacks and saves until my next turn starts.",
        "##\u25C6 Werewolf Instincts##. I have proficiency in Perception, Stealth, or Survival.",
	].join("\n"),	
};
RaceList.reborn = {
    regExpSearch : /reborn/i,
    name : "Reborn",
    source : [["RtHW", 31]],
    plural : "Reborn",
    size : [3, 4], 
    speed : {
        walk : { spd : 30, enc : 20 }
    },
	dmgres : "Choose 1 (Cold, Necro, Pois)",
	savetxt : { adv_vs : ["Death Saving Throws"], },
    skillstxt : "Choose one skill to gain proficiency in",
	limfeaname : "Knowledge from a past life",
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
    trait : [
		"**Reborn**",
        "##\u25C6 Escaped Death##. I have Advantage on Death Saving Throws.",
        "##\u25C6 Everlasting##. I don't suffer Exhaustion from dehydration, malnutrition, or suffocation. I don't need to sleep (Long Rest = 4h of motionless inactivity).",
        "##\u25C6 Knowledge from a Past Life##. Choose one skill to gain proficiency in. PB/Long Rest, when I fail an ability check, I can roll 1d6 and add it to the result.",
        "##\u25C6 Strange Endurance##. I have Resistance to Cold, Necrotic, or Poison damage (choose one).",
	].join("\n"),	
};
//Feats
//Origin Feats
FeatsList["sharp eye"] = {
    name : "Sharp Eye",
    source : [["RtHW", 32]],
    type : "origin",
    description : "When I take the Search or Study action, I can give myself Advantage on any ability check made as part of it. I can use this PB times per Long Rest. If the check fails, the use isn't expended.",
    descriptionFull : "When you take the Search or Study action, you can give yourself Advantage on any ability check made as part of that action. You can use this feature a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest. If the check fails, the use of this feature isn't expended.",
    usages : "Proficiency bonus per ",
    usagescalc : "event.value = How('Proficiency Bonus');",
    recovery : "long rest"
};
FeatsList.survivor = {
    name : "Survivor",
    source : [["RtHW", 32]],
    type : "origin",
    description : "Whenever I roll Initiative, I can reroll the d20 if I roll a 9 or lower, but must use the new roll. When I fail a save to avoid or end the Charmed or Frightened condition, I can take a Reaction to add my PB to the roll (1/Long Rest).",
    descriptionFull : "You gain the following benefits.\n\nHypervigilance. Whenever you roll Initiative, you can reroll the d20 if the number rolled is 9 or lower. You must use the new roll.\n\nSteel Yourself. When you fail a saving throw to avoid or end the Charmed or Frightened condition, you can take a Reaction to add a bonus to the roll potentially causing it to succeed. The bonus is equal to your Proficiency Bonus.\nOnce you take this Reaction, you can't do so again until you finish a Long Rest.",
    action : [["reaction", " (Steel Yourself)"]],
    usages : 1,
    recovery : "long rest",
};
//Dark Gift Feats
FeatsList["aberrant anatomy"] = {
    name : "Aberrant Anatomy",
    source : [["RtHW", 32]],
    type : "dark gift",
    prerequisite : "Ravenloft Campaign",
    description : "I can hold my breath for 1 hour. I gain Blindsight 15 ft, and proficiency and expertise in Perception. If I roll a 1 on a D20 Test, I must make a Con save (DC 13 + PB) or be Stunned until the end of my next turn.",
    descriptionFull : "Exposure to alien horrors like those of the Far Realm has warped your physical form in supernatural ways. You gain the following features.\n\nBreathless. You can hold your breath for 1 hour.\n\nExtrasensory Perception. You have proficiency in the Perception skill, if you lack it. You also gain Expertise in that skill. In addition, you have Blindsight with a range of 15 feet.\n\nWarping Flesh. Immediately after you make a D20 Test and roll a 1 on the d20, the aberrant influence infecting your form flares, wrenching control of your flesh. Make a Constitution saving throw (DC 13 plus your Proficiency Bonus). On a failed save, you have the Stunned condition until the end of your next turn.",
    skills : [["Perception", "full"]],
    vision : [["Blindsight", 15]],
    savetxt : {
        text : ["Con save (DC 13+PB) on a D20 Test roll of 1 or Stunned"]
    }
};
FeatsList["echoing soul"] = {
    name : "Echoing Soul",
    source : [["RtHW", 33]],
    type : "dark gift",
    prerequisite : "Ravenloft Campaign",
    description : "I gain proficiency in 2 skills and 1 language of my choice. I also choose one skill I'm proficient in to gain Expertise, which I can change at the end of a Long Rest. If I roll a 1 on a D20 Test, I must make a Con save (DC 13 + PB) or be Incapacitated and have my Speed halved until the end of my next turn.",
    descriptionFull : "You experience echoes from a past or alternate life.\nYou gain the following features.\n\nChannelled Prowess. You have proficiency in two skills of your choice.\nIn addition, choose one skill you have proficiency in. You gain Expertise in that skill. Whenever you finish a Long Rest you can change your choice of for this benefit.\n\nInherent Tongues. You know one additional language of your choice, which you choose from the language tables in the Player's Handbook.\n\nIntrusive Echoes. Immediately after you make a D20 Test and roll a 1 on the d20, memories and sensations from your soul's other life threaten to overtake you. Make a Constitution saving throw (DC 13 plus your Proficiency Bonus). On a failed save, you have the Incapacitated condition until the end of your next turn. While you are Incapacitated in this way, your Speed is halved.",
    skillstxt : "Choose two skills to gain proficiency in, and choose one skill you are proficient in to gain Expertise (can be changed on a Long Rest)",
    languageProfs : ["Inherent Tongues", 1],
    savetxt : {
        text : ["Con save (DC 13+PB) on a D20 Test roll of 1 or Incapacitated (Speed halved)"]
    }
};
FeatsList["gathered whispers"] = {
    name : "Gathered Whispers",
    source : [["RtHW", 33]],
    type : "dark gift",
    prerequisite : "Ravenloft Campaign",
    description : "I learn Message and always have Augury prepared. I can cast Augury 1/Long Rest without slots/components, or using slots. Reaction: When hit by an attack, I add my PB to my AC vs it (PB/LR). If I roll a 1 on a D20 Test, make a Wis save (DC 13 + PB) or be Deafened (disadv. on checks/attacks) until end of my next turn.",
    descriptionFull : "You are haunted by a cacophony of whispering spirits only you can hear. You gain the following features.\n\nSpirit Whispers. You learn the Message spell and can cast it without Material components. Additionally, you always have the Augury spell prepared. You can cast it without a spell slot or spell components, and you must finish a Long Rest before you can cast it in this way again. You can also cast the spell using any spell slots you have.\nIntelligence, Wisdom, or Charisma is your spellcasting ability for this benefit (choose when you select this feat).\n\nUnearthly Scream. When you are hit by an attack roll, you can take a Reaction to channel your haunting spirits into a protective, otherworldly scream. You can add your Proficiency Bonus to your AC against that attack, potentially causing it to miss. You can use this benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.\n\nVoices from Beyond. Immediately after you make a D20 Test and roll a 1 on the d20, the haunting whispers rise to a ghastly volume. Make a Wisdom saving throw (DC 13 plus your Proficiency Bonus). On a failed save, you have the Deafened condition until the end of your next turn. While Deafened, you have Disadvantage on ability checks and attack rolls.",
    spellcastingAbility : [4, 5, 6],
    spellcastingBonus : [{
        name : "Spirit Whispers",
        spells : ["message"],
        selection : ["message"],
        firstCol : "atwill",
    }, {
        name : "Spirit Whispers",
        spells : ["augury"],
        selection : ["augury"],
        firstCol : "oncelr+markedbox",
    }],
    action : [["reaction", "Unearthly Scream"]],
    usages : "Proficiency bonus per ",
    usagescalc : "event.value = How('Proficiency Bonus');",
    recovery : "long rest",
    savetxt : {
        text : ["Wis save (DC 13+PB) on a D20 Test roll of 1 or Deafened"]
    },
    calcChanges : {
        spellAdd : [
            function (spellKey, spellObj, spName) {
                if (spName.match(/gathered whispers|spirit whispers/i)) {
                    if (spellKey === "message") {
                        spellObj.components = "S";
                        spellObj.compMaterial = "";
                        return true;
                    } else if (spellKey === "augury") {
                        spellObj.components = "";
                        spellObj.compMaterial = "";
                        return true;
                    }
                }
            },
            "My Message and Augury spells from the Gathered Whispers feat don't require material components (and Augury requires no components at all when cast via this feature)."
        ]
    }
};
FeatsList["living shadow"] = {
    name : "Living Shadow",
    source : [["RtHW", 33]],
    type : "dark gift",
    prerequisite : "Ravenloft Campaign",
    description : "I learn Mage Hand (cast without components). When I make a melee attack as part of the Attack or Magic action, I can increase my reach for that attack by 10 ft (PB/LR). If I roll a 1 on a D20 Test, I make a Wis save (DC 13+PB). On a fail, I'm Incapacitated until my next turn starts, then I must act per the Shadow's Will table. (See Notes Page)",
    descriptionFull : "The shadow you cast is animate and ever-present - sometimes it even acts according to its own will.\nYou gain the following features.\n\nGrasping Shadow. You learn the Mage Hand spell and can cast it without spell components. Intelligence, Wisdom or Charisma is your spellcasting ability for this spell (choose when you select this feat).\n\nLengthened Strike. When you make a melee attack roll as part of the Attack or Magic action on your turn, you can increase your reach for that attack by 10 feet, as your shadow stretches to aid you. You can use this feature a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.\n\nOminous Will. Immediately after you make a D20 Test and roll a 1 on the d20, your shadow attempts to exert its will. Make a Wisdom saving throw (DC 13 plus your Proficiency Bonus). On a failed save, you have the Incapacitated condition until the start of your next turn, at which point you must roll on the Shadow's Will table to determine what you do during that turn.(See Notes Page)",
    toNotesPage : [{
		name : "SHADOW'S WILL (1d8)",
		note : [
			"***1*** - You don't take any action or a Bonus Action, and you use all your movement to move. Roll 1d4 for the direction: 1, north; 2, east; 3, south; 4, west.",
			"***2-6*** - You don't move or take a Bonus Action, and you take the Attack action to make one melee attack against a random creature within reach. If none are within reach, you take no action.",
			"***7-8*** - You have the Prone condition, and your turn ends.",
		],
	}],		
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : [{
        name : "Grasping Shadow",
        spells : ["mage hand"],
        selection : ["mage hand"],
        firstCol : "atwill",
    }],
    usages : "Proficiency bonus per ",
    usagescalc : "event.value = How('Proficiency Bonus');",
    recovery : "long rest",
    savetxt : {
        text : ["Wis save (DC 13+PB) on a D20 Test roll of 1 or Incapacitated/Shadow's Will"]
    },
    calcChanges : {
        spellAdd : [
            function (spellKey, spellObj, spName) {
                if (spName.match(/living shadow|grasping shadow/i) && spellKey === "mage hand") {
                    spellObj.components = "";
                    return true;
                }
            },
            "My Mage Hand cantrip from the Living Shadow feat doesn't require any components."
        ]
    }
};
FeatsList["mist walker"] = {
    name : "Mist Walker",
    source : [["RtHW", 34]],
    type : "dark gift",
    prerequisite : "Ravenloft Campaign",
    description : "I act as having a talisman for a known domain when entering the Mists. Reaction when taking damage or failing a save vs. Grappled/Restrained: teleport up to 15 ft (PB/LR). Poisoned Roots: Short Rests taken within 10 miles of my last Long Rest require a Con save (DC 13 + PB) to gain any benefits.",
    descriptionFull : "You know how to slip through the Mists’ grasp, but this freedom comes at a price: If you remain in one area for too long, the Mists find you and drain your life force. You gain the following features.\n\nDomain Traveler. When you enter the Mists intent on reaching a specific domain, you are treated as if you possess a Mist talisman keyed to that domain. To use this feature, you must know the name of the domain you have chosen as your destination, but you don’t need to have previously visited that land. This trait doesn’t allow you to bypass domain borders closed by a Darklord’s will.\n\nMist Walk. When you take damage or fail a saving throw to avoid or end the Grappled or Restrained condition, you can take a Reaction and teleport up to 15 feet to an unoccupied space you can see. You can use this feature a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.\n\nPoisoned Roots. When you finish a Long Rest, the world around you in a 10-mile radius becomes a siphon that leeches away at your vitality. Whenever you finish a Short Rest in that area, make a Constitution saving throw (DC 13 plus your Proficiency Bonus). On a failed save, you get no benefits from finishing that rest.",
    action : [["reaction", "Mist Walk"]],
	limfeaname : "Mist Walk",
    usages : "Proficiency bonus per ",
    usagescalc : "event.value = How('Proficiency Bonus');",
    recovery : "long rest",
    savetxt : {
        text : ["Con save (DC 13+PB) on Short Rests near last Long Rest or no benefits"]
    }
};
FeatsList["second skin"] = {
    name : "Second Skin",
    source : [["RtHW", 34]],
    type : "dark gift",
    prerequisite : "Ravenloft Campaign",
    description : "I always have Alter Self prepared. I can cast it 1/Long Rest without a spell slot, components, or Concentration. I can also cast it using slots. Involuntary Change: Upon encountering my catalyst, I make a Cha save (DC 13+PB) or immediately cast Alter Self via this feature (or be Stunned until my next turn starts if already used).",
    descriptionFull : "There is another side of you that most people never see: a beast, a terrifying avenger, or a walking nightmare. You gain the following features.\n\nAlternate Form. You always have the Alter Self spell prepared. You can cast it without a spell slot or spell components, and you must finish a Long Rest before you can cast it in this way again. You can also cast it using spell slots you have of the appropriate level. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this feat).\nWhen you cast Alter Self without a spell slot using this feature, it doesn't require Concentration.\n\nInvoluntary Change. Certain circumstances can involuntarily trigger your transformation. When you select this feat, roll on the Change Catalyst table (See Notes Page) to determine what triggers your change.\nAfter you experience the catalyst, at the start of your next turn, make a Charisma saving throw (DC 13 plus your Proficiency Bonus). On a failed save, you immediately use Alternate Form to cast Alter Self without a spell slot. If you've already expended the use of that feature, you instead have the Stunned condition until the start of your next turn.",
	toNotesPage : [{
		name : "CHANGE CATALYST (1d6)",
		note : [
			"***1*** - Seeing a particular phase of the moon",
			"***2*** - Smelling the scent of a certain type of flower",
			"***3*** - Hearing temple bells ringing",
			"***4*** - Hearing a particular melody",
			"***5*** - Touching pure silver with your bare skin",
			"***6*** - Seeing someone who resembles a specific individual",
		],
	}],		
    spellcastingAbility : [4, 5, 6],
	spellcastingBonus : [{
        name : "Alternate Form",
        spells : ["alter self"],
        selection : ["alter self"],
        firstCol : "oncelr+markedbox",
    }],
    savetxt : {
        text : ["Cha save (DC 13+PB) when encountering Change Catalyst or cast Alter Self (or Stunned)"]
    },
    calcChanges : {
        spellAdd : [
            function (spellKey, spellObj, spName) {
                if (spellKey === "alter self" && spName.match(/second skin|alternate form/i)) {
                    spellObj.components = "";
                    spellObj.duration = "1 h";
                    return true;
                }
            },
            "When I cast Alter Self using the Alternate Form feature from the Second Skin feat, it doesn't require any components or Concentration."
        ]
    }
};
FeatsList["symbiotic being"] = {
    name : "Symbiotic Being",
    source : [["RtHW", 34]],
    type : "dark gift",
    prerequisite : "Ravenloft Campaign",
    description : "I gain 1 language and 1 skill prof. Reaction: When I fail a save, I can expend 1 Hit Die and add the roll to the save (PB/LR). If I roll a 1 on a D20 Test, I make a Cha save (DC 13 + PB) or become Charmed by my symbiote for 1d12 hrs, forced to follow its commands (save repeats on taking damage).",
    descriptionFull : "A second being resides within your body, offering knowledge and assistance while furthering its own agenda. You gain the following features.\n\nEntwined Existence. The symbiote can’t be targeted. If you die, so does your symbiote. If you are returned to life, your symbiote also revives.\n\nSecond Mind. You gain proficiency in one of the following skills: Arcana, Deception, History, Intimidation, Insight, Investigation, Nature, Religion, Perception, or Persuasion. You also know one additional language of your choice, chosen from the language tables in the Player’s Handbook.\n\nSustained Symbiosis. When you fail a saving throw, you can take a Reaction and expend one of your Hit Dice. Roll the die and add the number rolled to the saving throw, potentially turning the failure into a success.\n\nYou can use this feature a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.\n\nSymbiotic Agenda. Immediately after you make a D20 Test and roll a 1 on the d20, your symbiote attempts to assert control. Make a Charisma saving throw (DC 13 plus your Proficiency Bonus). On a failed save, you have the Charmed condition for 1d12 hours. While Charmed, you must try to follow the symbiote’s commands and further its goals, as determined by the DM. Whenever you take damage, you can repeat this save, ending the effect on a success.\n\nAt the DM’s discretion, you might make this saving throw whenever you act contrary to the symbiote’s agenda.",
    skillstxt : "Choose one from: Arcana, Deception, History, Insight, Intimidation, Investigation, Nature, Perception, Persuasion, or Religion",
    languageProfs : ["Second Mind", 1],
    action : [["reaction", "Sustained Symbiosis"]],
	limfeaname : "Sustained Symbiosis",
    usages : "Proficiency bonus per ",
    usagescalc : "event.value = How('Proficiency Bonus');",
    recovery : "long rest",
    savetxt : {
        text : ["Cha save (DC 13+PB) on a D20 Test roll of 1 or Charmed by symbiote"]
    }
};
FeatsList["touch of death"] = {
    name : "Touch of Death",
    source : [["RtHW", 35]],
    type : "dark gift",
    prerequisite : "Ravenloft Campaign",
    description : "I learn the Chill Touch cantrip and cast it without components. Necrotic damage I deal with this spell ignores Resistance. I also have Disadvantage on Death Saving Throws.",
    descriptionFull : "Deathly power resides within you, bursting out at the slightest provocation. You gain the following features.\n\nDeath Touch. You learn the Chill Touch spell and can cast it without spell components. Necrotic damage you deal with this spell ignores Resistance. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this feat).\n\nPull of the Grave. You have Disadvantage on Death Saving Throws.",
	spellcastingAbility : [4, 5, 6],
    spellcastingBonus : [{
        name : "Death Touch",
        spells : ["chill touch"],
        selection : ["chill touch"],
        firstCol : "atwill",
    }],
    savetxt : {
        text : ["Disadv. on Death Saving Throws"]
    },
    calcChanges : {
        spellAdd : [
            function (spellKey, spellObj, spName) {
                if (spellKey === "chill touch" && spName.match(/touch of death|death touch/i)) {
                    spellObj.components = "";
                    spellObj.description += " (ignores Necrotic Resist)";
                    return true;
                }
            },
            "My Chill Touch cantrip from the Touch of Death feat requires no components, and its Necrotic damage ignores Resistance."
        ]
    }
};
FeatsList.watchers = {
    name : "Watchers",
    source : [["RtHW", 35]],
    type : "dark gift",
    prerequisite : "Ravenloft Campaign",
    description : "I always have Beast Sense and Speak with Animals prepared and can cast each 1/Long Rest without a slot. When I take the Search action, I add 1d4 to the ability check. I have Disadvantage on saves vs. Scrying. If I roll a 1 on a D20 Test, I make a Wis save (DC 13+PB) or have Disadvantage on D20 Tests for 1 minute (can repeat save at end of each turn).",
    descriptionFull : "Something unnatural is always watching you, taking the form of scurrying vermin and other eerie creatures. You gain the following features.\n\nBorrowed Eyes. You always have the Beast Sense and Speak with Animals spells prepared. You can cast each spell without a spell slot, and you must finish a Long Rest before you can cast it in this way again. You can also cast these spells using spell slots you have of the appropriate level.\n\nHeightened Suspicion. Whenever you take the Search action, you can roll 1d4 and add the number rolled to any ability check made as part of that action.\n\nIncessant Watchers. You have Disadvantage on saving throws made against the Scrying spell.\n\nIn addition, immediately after you make a D20 Test and roll a 1 on the d20, paranoia threatens to overwhelm you. Make a Wisdom saving throw (DC 13 plus your Proficiency Bonus). On a failed save, you have Disadvantage on D20 Tests for 1 minute. You can repeat the save at the end of each of your turns, ending the effect early on a success.",
    spellcastingBonus : [{
        name : "Borrowed Eyes",
        spells : ["beast sense"],
        selection : ["beast sense"],
        firstCol : "oncelr+markedbox"
    }, {
        name : "Borrowed Eyes",
        spells : ["speak with animals"],
        selection : ["speak with animals"],
        firstCol : "oncelr+markedbox"
    }],
    savetxt : {
        text : [
            "Disadvantage on saves vs. Scrying",
            "Wis save (DC 13+PB) on a D20 Test roll of 1 or Disadv. on D20 Tests for 1 min"
        ]
    }
};
//Magic Items
MagicItemsList["harkons bite"] = {
    name : "Harkon's Bite",
    source : [["RtHW", 126]],
    type : "wondrous item",
    rarity : "uncommon",
    attunement : true,
    prerequisite : "Requires attunement by a Humanoid",
    description : "While wearing this necklace, I gain a +1 bonus to ability checks and saving throws. Curse: I am cursed upon attunement (removable only if Harkon Lukas dies). While cursed, I become a Werewolf under the DM's control during the night of a full moon.",
    descriptionFull : "A dire wolf’s tooth dangles from this simple cord necklace. You gain a +1 bonus to ability checks and saving throws while you wear this necklace." + 
	"\n   " + toUni("Curse") + ". This necklace is cursed. Attuning to the necklace curses you; this curse can’t be removed until Harkon Lukas dies. As long as you remain cursed, you become a Werewolf serving Harkon Lukas under the DM’s control during the night of a full moon.",
    addMod : [
        { type : "skill", field : "All", mod : 1, text : "I gain a +1 bonus to all ability checks." },
		{ type : "skill", field : "Init", mod : 1, text : "I gain a +1 bonus to all ability checks." },
		{ type : "save", field : "All", mod : 1, text : "I gain a +1 bonus to all saving throws." },
    ]
};
MagicItemsList.ebonbane = {
    name : "Ebonbane",
    source : [["RtHW", 152]],
    type : "weapon (longsword)",
    rarity : "artifact",
    attunement : true,
    weight : 3,
    description : "This sentient +3 longsword deals an extra 3d6 Necrotic damage to Celestials and Humanoids. While holding it, I have Advantage on saves vs. spells and magical effects. If it hasn't slain a Celestial or Humanoid in 3 days, I must make a DC 17 Cha save at dawn (take 8d8 Force on success, or be Dominated to kill one on fail). It teleports away if I leave the Shadowlands.",
    descriptionFull : "The Darklord of the Domain of Dread known as the Shadowlands is Ebonbane, a sapient sword. Ebonbane uses its monster stat block while in Shadowborn Manor.\n\nBound to the Shadowlands. When you enter a space outside of the Shadowlands, your Attunement immediately ends and Ebonbane teleports to somewhere in Shadowborn Manor.\n\nInsatiable Rage. The sword demands destruction. If the sword hasn’t slain a Celestial or a Humanoid for 3 days, you make a DC 17 Charisma saving throw at the next dawn. On a successful save, you take 8d8 Force damage. On a failed save, you are dominated by the sword, as if by the Dominate Monster spell, and the sword demands the blood of a Celestial or a Humanoid. The spell effect ends when the sword’s demand is met.\n\nMagic Weapon. You gain a +3 bonus to attack rolls and damage rolls made with this magic weapon. When you hit a Celestial or a Humanoid with it, that attack also deals 3d6 Necrotic damage.\n\nWhile you hold this weapon, you have Advantage on saving throws against spells and other magical effects.\n\nSentience. Ebonbane is a sentient Chaotic Evil weapon with an Intelligence of 17, a Wisdom of 14, and a Charisma of 19. It has hearing and Truesight out to 120 feet. The weapon speaks Common and can communicate with its wielder telepathically. While you are attuned to it, Ebonbane also understands every language you know.\n\nPersonality. Ebonbane was created to kill the paladin Kateri Shadowborn, and it still possesses a burning hatred for goodly knights. Ebonbane revels in seeing good defeated and hope vanquished. The sword bonds with any wielder that assists in its goals but always views it wielder as a lackey.\n\nDestroying Ebonbane. The only way to destroy Ebonbane is to forge a weapon from the Four Keys and reduce Ebonbane to 0 Hit Points with it (see the Ebonbane stat block).",
    savetxt : {
        adv_vs : ["spells and magical effects"]
    },
    weaponsAdd : ["Ebonbane"],
    weaponOptions : [{
        regExpSearch : /ebonbane/i,
        name : "Ebonbane",
        source : [["RtHW", 152]],
        baseWeapon : "longsword",
        modifiers : [3, 3],
        description : "Versatile (1d10); +3d6 Necrotic dmg vs Celestials/Humanoids"
    }]
};
