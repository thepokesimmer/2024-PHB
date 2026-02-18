var iFileName = "pub_202512097_EFotA.js";
RequiredSheetVersion("13.2.3", 15);
SourceList["E:FA"] = {
    name: "Eberron: Forge of the Artificer",
    abbreviation: "E:FA",
    abbreviationSpellsheet: "FA",
    group: "Campaign Sourcebooks",
    campaignSetting: "Eberron",
    url: "https://marketplace.dndbeyond.com/category/5147000?pid=D5147000",
    date: "2025/12/09",
};
SourceList.LEGACYSPELLS = {
    name: "Spells Deprecated by 2024 Player's Handbook",
    abbreviation: "LEGACY",
    abbreviationSpellsheet: "L",
    group: "Core Sources",
    url: "https://marketplace.dndbeyond.com/core-rules/3709000?pid=DB3709000",
    date: "2014/01/01",
    defaultExcluded: true,
};
SourceList.LEGACYCLASS = {
    name: "Subclasses Deprecated by 2024 Player's Handbook",
    abbreviation: "LEGACY",
    abbreviationSpellsheet: "L",
    group: "Core Sources",
    url: "https://marketplace.dndbeyond.com/core-rules/3709000?pid=DB3709000",
    date: "2014/01/01",
    defaultExcluded: true,
};
SourceList.LEGACYRACE = {
    name: "Races Deprecated by 2024 Player's Handbook",
    abbreviation: "LEGACY",
    abbreviationSpellsheet: "L",
    group: "Core Sources",
    url: "https://marketplace.dndbeyond.com/core-rules/3709000?pid=DB3709000",
    date: "2014/01/01",
    defaultExcluded: true,
};
SourceList.LEGACYBG = {
    name: "Backgrounds Deprecated by 2024 Player's Handbook",
    abbreviation: "LEGACY",
    abbreviationSpellsheet: "L",
    group: "Core Sources",
    url: "https://marketplace.dndbeyond.com/core-rules/3709000?pid=DB3709000",
    date: "2014/01/01",
    defaultExcluded: true,
};

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

function legacySpellRefactor(spellKey, newSpell) {
    if (newSpell.replaces && newSpell.replaces in SpellsList) {
        SpellsList[spellKey] = SpellsList[newSpell.replaces];
        delete SpellsList[newSpell.replaces];
    }
    if (!(spellKey in SpellsList)) {
        SpellsList[spellKey] = newSpell;
    } else {
        var oldspell = SpellsList[spellKey];
        SpellsList[spellKey] = newSpell;
        var test = newSpell.replaces || spellKey;
        for (var i in ClassSubList) {
            var subclass = ClassSubList[i];
            if ("spellcastingExtra" in subclass) {
                var index = subclass.spellcastingExtra.indexOf(test);
                if (index !== -1) {
                    if (test !== spellKey) {
                        subclass.spellcastingExtra[index] = spellKey;
                    }
                    if (!('subclassfeature24' in subclass.features)) {
                        subclass.features['subclassfeature24'] = {
                            name: "Legacy spells",
                            source: [
                                ["LEGACYSPELLS", 1]
                            ],
                            minlevel: 1,
                            description: "\n I can choose to access the legacy version of spells",
                            choices: ["Show Legacy", "Hide Legacy"],
                            "show legacy": {
                                name: "Show legacy spells",
                                description: "\n   I have access to the legacy version of spells",
                                spellcastingExtra: []
                            },
                            "hide legacy": {
                                name: "Hide legacy spells",
                                description: "\n   I have hidden the legacy version of spells",
                                spellcastingExtra: []
                            },
                            legacySpells: [],
                        };
                    }
                    subclass.features['subclassfeature24'].legacySpells.push(test + " legacy");
                    subclass.features['subclassfeature24']["show legacy"].spellcastingExtra = subclass.spellcastingExtra.concat(subclass.features['subclassfeature24'].legacySpells);
                    subclass.features['subclassfeature24']["hide legacy"].spellcastingExtra = subclass.spellcastingExtra;
                }
            }
        }
        oldspell.source = [
            ["LEGACYSPELLS", 1]
        ];
        oldspell.name = oldspell.name + " (L)";
        if ('nameShort' in oldspell) {
            oldspell.nameShort = oldspell.nameShort + " (L)";
        }
        SpellsList[test + " legacy"] = oldspell;
    }
}

function legacyClassRefactor(classKey, newClass) {
    if (!(classKey in ClassList)) {
        ClassList[classKey] = newClass;
    } else {
        newClass.subclasses = ClassList[classKey].subclasses;
        ClassList[classKey] = newClass;
    }
}

function archiveSubClass(classKey, subClass, newClassName) {
    subClass.subname = subClass.subname + " - 2014";
    if ('fullname' in subClass) {
        subClass.fullname = subClass.fullname + " - 2014";
    }
    subClass.source = [
        ["LEGACYCLASS", 1]
    ];
    for (var i of ClassList[classKey].subclasses[1]) {
        if (ClassSubList[i].regExpSearch.test(newClassName)) {
            var regex = "(?=^.*" + subClass.regExpSearch.source + ".*$)(?!^" + escapeRegExp(newClassName) + "$)";
            ClassSubList[i].regExpSearch = new RegExp(regex, 'i');
        }
    }
}

function legacySubClassRefactor(classKey, subClassKey, nSC) {
    var newSubClassName = classKey + "-" + subClassKey;
    var prv = null;
    if (newSubClassName in ClassSubList) {
        prv = ClassSubList[newSubClassName];
        AddSubClass(classKey, subClassKey + "_2014", prv);
        ClassSubList[newSubClassName] = nSC;
    } else {
        if ('replaces' in nSC && classKey + '-' + nSC.replaces in ClassSubList) {
            prv = ClassSubList[classKey + '-' + nSC.replaces];
        }
        AddSubClass(classKey, subClassKey, nSC);
    }
    if (prv != null) {
        var newRegex = nSC.regExpSearch;
        var bc = ClassList[classKey];
        var newClassName = nSC.fullname ? nSC.fullname : bc.name + " (" + nSC.subname + ")";
        archiveSubClass(classKey, prv, newClassName);
        nSC.regExpSearch = newRegex;
    }
    return nSC;
}

function legacyRaceRefactor(raceKey, newRace) {
    if (newRace.replaces) {
        for (var replaced of newRace.replaces) {
            if (replaced in RaceList) {
                var oldRace = RaceList[replaced];
                RaceList[replaced + " (L)"] = oldRace;
                delete RaceList[replaced];
                oldRace.source = [
                    ["LEGACYRACE", 1]
                ];
                oldRace.name = oldRace.name + " (L)";
                oldRace.shortname = oldRace.shortname + " (L)";
            }
        }
    }
    RaceList[raceKey] = newRace;
}

function legacyBackgroundRefactor(bgKey, newBg) {
    if (bgKey in BackgroundList) {
        var oldBg = BackgroundList[bgKey];
        BackgroundList[bgKey + " (L)"] = oldBg;
        oldBg.source = [
            ["LEGACYBG", 1]
        ];
        oldBg.name = oldBg.name + " (L)";
        for (var i in BackgroundList) {
            var bg_i = BackgroundList[i];
            if (bg_i.regExpSearch.test(newBg.name)) {
                var regex = "(?=^.*" + bg_i.regExpSearch.source + ".*$)(?!^" + escapeRegExp(newBg.name) + "$)";
                bg_i.regExpSearch = new RegExp(regex, 'i');
            }
        }
    }
    BackgroundList[bgKey] = newBg;
}
// Coded By: MasterJedi2014 with contributions from Shroo, TrackAtNight, and ThePokésimmer
legacyClassRefactor("artificer", {
    regExpSearch: /^(?=.*artificer)(?!.*wizard).*$/i,
    name: "Artificer",
    source: [["E:FA", 0]],
    primaryAbility: ["Intelligence"],
    abilitySave: 4,
    prereqs: "Intelligence 13",
    improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    die: 8,
    saves: ["Con", "Int"],
    skillstxt: {
        primary: "Choose 2: Arcana, History, Investigation, Medicine, Nature, Perception, and Sleight of Hand",
        secondary: "Choose 1: Arcana, History, Investigation, Medicine, Nature, Perception, and Sleight of Hand",
    },
    toolProfs: {
        primary: [
            ["Thieves' Tools"],
            ["Tinker's Tools"],
            ["Artisan's tools", 1]
        ],
        secondary: ["Tinker's Tools"],
    },
    armorProfs: {
        primary: [true, true, false, true],
        secondary: [true, true, false, true],
    },
    weaponProfs: {
        primary: [true, false],
    },
    equipment: "Artificer starting equipment:" +
        "\n \u2022 Studded Leather;" +
        "\n \u2022 Dagger;" +
        "\n \u2022 Thieves' Tools;" +
        "\n \u2022 Tinker's Tools;" +
        "\n \u2022 A Dungeoneer's Pack, and 16 gp." +
        "\n\nAlternatively, choose 150 gp worth of starting equipment instead of the class' starting equipment.",
    subclasses: ["Artificer Specialist", []],
    attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    spellcastingAbility: 4,
    spellcastingFactor: 2,
    spellcastingFactorRoundupMulti: true,
    spellcastingTable: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ].concat(levels.map(function(n) {
        return defaultSpellTable[Math.ceil(n / 2)];
    })),
    spellcastingKnown: {
        cantrips: [2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4],
        spells: "list",
        prepared: true,
    },
    features : {
        "spellcasting": {
            name: "Spellcasting",
            source: [
                ["E:FA", 0]
            ],
            minlevel: 1,
            additional: levels.map(function(n, idx) {
                var cantr = [2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4][idx];
                var splls = [2, 3, 4, 5, 6, 6, 7, 7, 9, 9, 10, 10, 11, 11, 12, 12, 14, 14, 15, 15][idx];
                return cantr + " cantrips \u0026 " + splls + " spells prepared";
            }),
            calcChanges: {
                spellAdd: [
                    function(spellKey, spellObj, spName) {
                        if (!spellObj.psionic && spName == "artificer" && spellObj.compMaterial === SpellsList[spellKey].compMaterial) {
                            var extraFocus = classes.known.artificer.subclass.indexOf("artillerist") !== -1 && classes.known.artificer.level > 4 ? "my arcane firearm, " : classes.known.artificer.subclass.indexOf("armorer") !== -1 && classes.known.artificer.level > 2 ? "my arcane armor, " : "";
                            spellObj.compMaterial = (spellObj.compMaterial ? spellObj.compMaterial + ".\n\nAlso a" : "A") + "lways requires my artificer spellcasting focus: thieves' tools, any set of artisan's tools I'm proficient with, " + extraFocus + ".";
                            if (GetFeatureChoice("classes", "artificer", "spellcasting", true).indexOf("don't change component column on spell sheet") != -1) {
                                // do nothing if set to do so
                            } else if (!spellObj.components) {
                                spellObj.components = "M\u0192";
                            } else if (spellObj.components.indexOf("M") == -1) {
                                spellObj.components += ",M\u0192";
                            } else if ((/M([^\u0192\u2020]|$)/).test(spellObj.components)) {
                                spellObj.components = spellObj.components.replace("M", "M\u0192");
                            }
                            return true;
                        }
                        return false;
                    },
                    "My Artificer spells always require me to use a Spellcasting Focus: Thieves' Tools, or Artisan's Tools I'm proficient with"
                ],
                spellCalc: [
                    function(type, spellcasters, ability) {
                        if (type === "prepare" && spellcasters.indexOf("artificer") !== -1) {
                            var lvl = classes.known.artificer.level;
                            var sArr = [0, 2, 3, 5, 5, 7, 6, 8, 7, 10, 9, 11, 10, 12, 11, 13, 12, 15, 14, 16, 15];
                            return sArr[lvl] - Math.ceil(lvl / 2) - Number(What("Int Mod"));
                        }
                    }
                ]
            },
            description: desc([
                "I can cast Artificer spells using Int as my spellcasting ability. I can use Thieves' Tools,",
                "Tinker's Tools, or another kind of Artisan's Tools I am proficient with as a Spellcasting Focus",
                "I must have one of those foci in hand when I cast an Artificer spell",
                "I can replace one cantrip with another when I finish a Long Rest",
            ]),
            extrachoices: ["Don't change component column on spell sheet"],
            extraname: "Artificer Spellcasting",
            "don't change component column on spell sheet": {
                name: "[Meta] Don't alter spell sheets",
                source: [
                    ["E:FA", 3]
                ],
                description: "\n   The automation will not add M\u0192 to each artificer spell on the generated spell sheets"
            },
        },
        "tinker's magic": {
            name: "Tinker's Magic",
            source: [
                ["E:FA", 0]
            ],
            minlevel: 1,
            description: desc([
                "As a Magic action, I use Tinker's Tools to create one item per 2024 PHB in an unoccupied space within 5ft.",
                "I can only make one of the following, which will last until I finish a Long Rest:",
                " \u2022 Ball Bearings \u2022 Basket \u2022 Bedroll \u2022 Bell \u2022 Blanket \u2022 Block \u0026 Tackle \u2022 Bucket \u2022 Caltrops \u2022 Candle",
                " \u2022 Crowbar \u2022 Flask \u2022 Jug \u2022 Lamp \u2022 Net \u2022 Oil \u2022 Paper \u2022 Parchment \u2022 Pole \u2022 Pouch \u2022 Rope \u2022 Sack",
                " \u2022 Shovel \u2022 String \u2022 Tinderbox \u2022 Torch \u2022 Vial",
            ]),
            usages: "Intelligence modifier per ",
            usagescalc: "event.value = Math.max(1, What('Int Mod'));",
            recovery: "long rest",
            action: [
                ["action", " (add/remove)"]
            ],
            spellcastingBonus: [{
                name: "Tinker's Magic: Mending",
                spells: ["mending"],
                selection: ["mending"],
                times: 1,
            }],
            "infuse item": {
                name: "Replicate Magic Item",
                extraname: "Artificer 2",
                source: [
                    ["E:FA", 0]
                ],
                description: desc([
                    "When I finish a Long Rest, I can create 1 or 2 different magic items from arcane plans using",
                    "Tinker's Tools. I can attune to it immediately; If I replicate too many items, the oldest item",
                    "vanishes. The infusion lasts until I unlearn it or my death + my 1d4 days. Infused containers, like",
                    "a Bag of Holding, spread their contents harmlessly in \u0026 around its space when it vanishes.",
                    "Whenever I gain an Artificer level, I can replace an arcane plan I know with another.",
                    "I can use a replicated Wand or Weapon as a Spellcasting Focus.",
                ]),
                additional: levels.map(function(n) {
                    return n < 2 ? "" : (n < 6 ? 4 : n < 10 ? 5 : n < 14 ? 6 : n < 18 ? 7 : 8) + " plans known; max " + (n < 6 ? 2 : n < 10 ? 3 : n < 14 ? 4 : n < 18 ? 5 : 6) + " replicated items";
                })
            },
            autoSelectExtrachoices: [{
                extrachoice: "infuse item",
                minlevel: 2
            }]
        },
        // ! This will be deleted later on. 
        // ! This is the minimum a feature is required to have.
        "infuse item" : {
            name: "Infuse Item",
            source: [["E:RLW", 57], ["T", 12]],
            minlevel: 2,
            description: desc([
                "This entry will be deleted. Contact script author if this appears on the sheet."
            ]),
            extrachoices: [], // ! Left so that it doesn't try to push into an undefined extrachoice
        },
        "replicate magic item": {
            name: "Replicate Magic Item",
            source: [
                ["E:FA", 0]
            ],
            minlevel: 2,
            description: '\n   Use the "Choose Feature" button above to add Magic Items Replicated to the third page',
            additional: levels.map(function(n) {
                return n < 2 ? "" : (n < 6 ? 4 : n < 10 ? 5 : n < 14 ? 6 : n < 18 ? 7 : 8) + " plans known; max " + (n < 6 ? 2 : n < 10 ? 3 : n < 14 ? 4 : n < 18 ? 5 : 6) + " replicated items";
            }),
            extraname: "Replicate Magic Item",
            extraTimes: levels.map(function(n) {
                return n < 2 ? 0 : n < 6 ? 4 : n < 10 ? 5 : n < 14 ? 6 : n < 18 ? 7 : 8;
            }),
            eval: function() {
                AddArtificerMI();
            }
        },
        "subclassfeature3": {
            name: "Artificer Specialist",
            source: [
                ["E:FA", 4]
            ],
            minlevel: 3,
            description: desc([
                'Choose a specialism and put it in the "Class" field on the first page',
                "Choose either Alchemist, Armorer, Artillerist, Battle Smith, or Cartographer"
            ]),
        },
        "magic item tinker": {
            name: "Magic Item Tinker",
            source: [
                ["E:FA", 0]
            ],
            minlevel: 6,
            description: desc([
                "My Replicate Magic Item feature improves as follows:",
                " \u2022 Charge Magic Item. As a Bonus Action, I can touch one of my replicated magic items that uses charges \u0026 that is within 5 ft of myself. I can recharge the item at the cost of a level 1+ spell slot, with the number of charges restored equal to the spell slot level expended.",
                " \u2022 Drain Magic Item. Once per Long Rest as a Bonus Action, I can cause one of my replicated magic items to vanish, converting the energy into a spell slot. The slot is level 1 if the item is Common or level 2 if the item is Uncommon or Rare. Any spell slot I create with this feature vanishes after a Long Rest.",
                " \u2022 Transmute Magic Item. Once per Long Rest as a Magic Action, I can touch one of my replicated magic items that is within 5 ft of myself \u0026 transform it into another magic item for which I know the arcane plans to.",
            ]),
            action: [
                ["bonus action", "Charge/Drain Magic Item"],
                ["action", "Transmute Magic Item"]
            ],
        },
        "flash of genius": {
            name: "Flash of Genius",
            source: [
                ["E:FA", 0]
            ],
            minlevel: 7,
            description: "\n   As a Reaction when I or another creature I can see in 30 ft fail a check/save, I can add my Int mod to it",
            action: [
                ["reaction", ""]
            ],
            usages: "Intelligence modifier per ",
            usagescalc: "event.value = Math.max(1, What('Int Mod'));",
            recovery: "long rest"
        },
        "magic item adept": {
            name: "Magic Item Adept",
            source: [
                ["E:FA", 0]
            ],
            minlevel: 10,
            description: "\n   I can attune to more magic items than others can.",
            additional: levels.map(function(n) {
                return n < 10 ? "" : "attune to " + (n < 14 ? 4 : n < 18 ? 5 : 6) + " magic items";
            })
        },
        "spell-storing item": {
            name: "Spell-Storing Item",
            source: [
                ["E:FA", 0]
            ],
            minlevel: 11,
            description: desc([
                "When I finish a Long Rest, I can infuse a 1st-/2nd-/3rd-level Artificer spell into an item I touch",
                "It has to be a weapon or Spellcasting Focus for me; Stored spells are lost if I do this again",
                "The spell must have a casting time of 1 action \u0026 mustn't have a consumed Material component, but I needn't have it prepared",
                "A creature holding an infused item can use a Magic action to cast the spell, using my abilities"
            ]),
            additional: "cast stored spell",
            usages: "2\xD7 Int mod per ",
            usagescalc: "event.value = Math.max(2, Number(What('Int Mod')) * 2);",
            recovery: "long rest"
        },
        "magic item savant": {
            name: "Magic Item Savant",
            source: [
                ["E:FA", 5]
            ],
            minlevel: 14,
            description: "\n   I can attune to even more magic items than others can. Additionally, I regain 1 use of Flash of Genius when I finish a Short Rest.",
        },
        "epic boon": {
            name: "Epic Boon",
            source: [
                ["E:FA", 5]
            ],
            minlevel: 19,
            description: desc([
                "I gain an Epic Boon feat, or another feat of my choice for which I qualify.",
            ]),
        },
        "soul of artifice": {
            name: "Soul of Artifice",
            source: [
                ["E:FA", 5]
            ],
            minlevel: 20,
            description: desc([
                "Cheat Death. As a free action when I'm reduced to 0 HP, I can disintegrate any number of Uncommon or Rare Replicated Magic Items to instead drop to a number of HP equal to 20 times the number of disintegrate magic items.",
                "Magical Guidance. When I finish a Long Rest, I regain all expended uses of my Flash of Genius, if I have Attunement to at least one magic item.",
            ]),
            action: [
                ["reaction", " (Free Action)"]
            ],
        }
    },
    prereqLvl6: function(v) {
        return classes.known.artificer.level >= 6;
    },
    prereqLvl10: function(v) {
        return classes.known.artificer.level >= 10;
    },
    prereqLvl14: function(v) {
        return classes.known.artificer.level >= 14;
    },
});
legacySubClassRefactor("artificer", "alchemist", {
    regExpSearch: /^(?=.*alchemist)(?!.*wizard).*$/i,
    subname: "Alchemist",
    fullname: "Alchemist",
    source: [
        ["E:FA", 0]
    ],
    replaces: "alchemist",
    spellcastingExtra: ["healing word", "ray of sickness", "flaming sphere", "melf's acid arrow", "gaseous form", "mass healing word", "death ward", "vitriolic sphere", "cloudkill", "raise dead"],
    features: {
        "subclassfeature3": {
            name: "Tools of the Trade",
            source: [
                ["E:FA", 0]
            ],
            minlevel: 3,
            description: " [proficient with Alchemist's Supplies and Herbalism Kit]\n   I can brew a potion using the DMG (2024) crafting rules in half the normal time.",
            toolProfs: [
                ["Alchemist's Supplies", 1],
                ["Herbalism Kit", 1]
            ],
        },
        "subclassfeature3.1": {
            name: "Experimental Elixir",
            source: [
                ["E:FA", 0]
            ],
            minlevel: 3,
            description: desc([
                "When I finish a Long Rest, I can produce a number of elixirs in vials",
                "Also, as a Magic action, I can expend a spell slot to create one elixir with my choice of effect",
                "I need Alchemist Supplies on my person to do this; An elixir & its vial lasts until my next Long Rest",
                "For their effects, see the experimental elixir table on a Notes page; They work like potions"
            ]),
            additional: levels.map(function(n) {
                return n < 3 ? "" : "create " + (n < 5 ? 2 : n < 9 ? 3 : n < 15 ? 4 : 5) + " elixirs after finishing a Long Rest";
            }),
            action: [
                ["action", ""]
            ],
            toNotesPage: [{
                name: "Experimental Elixir Table",
                note: [
                    "Whenever I finish a Long Rest, I can magically produce a number of experimental elixir in vials. I can create two at level 3, three at level 5, four at level 9, and five at level 15.",
                    "Creating an experimental elixir requires me to have Alchemist's Supplies on my person, and any elixir & its vial created like this lasts until it is drunk, poured out, or until the end of my next Long Rest.",
                    "I can create additional experimental elixirs by expending a spell slot of 1st level or higher for each one. When I do so, I use a Magic action to create the elixir & its vial.",
                    "As a Bonus Action, a creature can drink the elixir or administer it to another creature within 5ft of itself.",
                    "The effect of an elixir when someone drinks it is found on the table below. Roll to determine the effect for each elixir I create when finishing a Long Rest. I can choose the effect from the table for those created by expending a spell slot.",
                    "\n  D6\tEFFECT",
                    "1\tHealing: The drinker regains a number of Hit Points equal to 2d8 (+1d8 at lvls 9 and 15) + my Intelligence modifier.",
                    "2\tSwiftness: The drinker's Speed increases by 10 ft (+5 ft at lvls 9 and 15) for 1 hour.",
                    "3\tResilience: The drinker gains a +1 bonus to AC for 10 minutes(1 hr at lvl 9, 8 hr at lvl 15).",
                    "4\tBoldness: The drinker can roll 1d4 and add the number rolled to every attack roll and saving throw they make for the next minute (10 min at lvl 9, 1 hr at lvl 15).",
                    "5\tFlight: The drinker gains a Fly Speed of 10 ft (+10 ft at lvl 9 and 15) for 10 minutes.",
                    "6\tYou determine the elixir's effect by choosing one of the other rows in this table."
                ]
            }]
        },
        "subclassfeature5": {
            name: "Alchemical Savant",
            source: [
                ["E:FA", 0]
            ],
            minlevel: 5,
            description: desc([
                "When I cast spells using Alchemist's Supplies as my Spellcasting Focus, I can enhance them",
                "I add my Int mod to one roll of Acid, Fire, Necrotic, or Poison damage, or restoring HP"
            ]),
            calcChanges: {
                atkCalc: [
                    function(fields, v, output) {
                        if (v.thisWeapon[3] && v.thisWeapon[4].indexOf("artificer") !== -1 && (/acid|fire|necrotic|poison/i).test(fields.Damage_Type)) {
                            output.extraDmg += Math.max(Number(What("Int Mod")), 1);
                        }
                    },
                    "Artificer spells that deal Acid, Fire, Necrotic, or Poison damage which I cast while using Alchemist's Supplies as my Spellcasting Focus, have my Intelligence modifier (min 1) added to one damage die roll."
                ],
                spellAdd: [
                    function(spellKey, spellObj, spName) {
                        if (spellObj.psionic || spName !== "artificer") return;
                        var toAdd = Math.max(Number(What("Int Mod")), 1);
                        if (genericSpellDmgEdit(spellKey, spellObj, "acid|fire|necro\\.?|necrotic|poison", toAdd, true, true) || genericSpellDmgEdit(spellKey, spellObj, "heal", toAdd, true, true)) {
                            return true;
                        }
                    },
                    "Artificer spells I cast using Alchemist's Supplies as my Spellcasting Focus, have my Intelligence modifier (min 1) added to one die rolled for dealing Acid, Fire, Necrotic, or Poison damage, or when restoring Hit Points."
                ]
            }
        },
        "subclassfeature9": {
            name: "Restorative Reagents",
            source: [
                ["E:FA", 0]
            ],
            minlevel: 9,
            description: desc([
                "I can cast Lesser Restoration with Alchemist's Supplies without a spell slot (Int mod times)"
            ]),
            usages: "Int mod per ",
            usagescalc: "event.value = Math.max(1, What('Int Mod'));",
            recovery: "long rest",
            limfeaname: "Restorative Reagents: Lesser Restoration",
            spellcastingBonus: {
                name: "Restorative Reagents",
                spells: ["lesser restoration"],
                selection: ["lesser restoration"],
                firstCol: "Sp"
            },
            spellChanges: {
                "lesser restoration": {
                    components: "V,S,M\u0192",
                    compMaterial: "Alchemist's supplies",
                    changes: "When using my Restorative Reagents class feature, I can cast Lesser Restoration a number of times per long rest equal to my Intelligence modifier. To do so, I have to use Alchemist's Supplies as my Spellcasting Focus."
                }
            }
        },
        "subclassfeature15": {
            name: "Chemical Mastery",
            source: [
                ["E:FA", 0]
            ],
            minlevel: 15,
            description: " [each spell 1\xD7 per long rest]" + desc([
                "I have Resistance to Acid and Poison damage and Immunity to the Poisoned condition;",
                "I can cast Tasha's Bubbling Cauldron once per Long Rest without a spell slot",
                "I need Alchemist's Supplies as a focus for it, but the spell requires no material components",
                "Once per Turn my Artificer spells that deal Acid, Fire, or Poison damage now deal an additional 2d8 Force damage"
            ]),
            dmgres: ["Acid", "Poison"],
            savetxt: {
                immune: ["Poisoned"],
            },
            extraLimitedFeatures: [{
                name: "Chemical Mastery: Tasha's Bubbling Cauldron",
                usages: 1,
                recovery: "long rest"
            }],
            spellcastingBonus: {
                name: "Chemical Mastery",
                spells: ["tasha's bubbling cauldron"],
                selection: ["tasha's bubbling cauldron"],
                firstCol: "oncelr",
                times: 1
            },
            spellChanges: {
                "tasha's bubbling cauldron": {
                    components: "V,S,M\u0192",
                    compMaterial: "Alchemist's supplies",
                    description: "Immobile cauldron of Common/Uncom. potion; max spell mod, min 1; bns take 1; disappear on recast",
                    changes: "When using my Chemical Mastery class feature and Alchemist's Supplies as my Spellcasting Focus, I can cast Tasha's Bubbling Cauldron once per Long Rest without using a spell slot or requiring other material components."
                },
            },
            calcChanges: {
                atkCalc: [
                    function(fields, v) {
                        if (v.thisWeapon[3] && v.thisWeapon[4].indexOf("artificer") !== -1 && (/acid|fire|necrotic|poison/i).test(fields.Damage_Type)) {
                            fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +2d8 Force damage';
                        }
                    },
                    "Artificer spells that deal Acid, Fire, Necrotic, or Poison damage which I cast while using Alchemist's Supplies as my Spellcasting Focus deal an additional 2d8 Force damage."
                ],
            }
        },
    },
});
legacySubClassRefactor("artificer", "artillerist", {
    regExpSearch: /^(?=.*artillerist)(?!.*wizard).*$/i,
    subname: "Artillerist",
    fullname: "Artillerist",
    source: [
        ["E:FA", 0]
    ],
    replaces: "artillerist",
    spellcastingExtra: ["shield", "thunderwave", "scorching ray", "shatter", "fireball", "wind wall", "ice storm", "wall of fire", "cone of cold", "wall of force"],
    features: {
        "subclassfeature3": {
            name: "Tools of the Trade",
            source: [
                ["E:FA", 0]
            ],
            minlevel: 3,
            weaponProf: [false, false, ["blowgun", "hand crossbow", "heavy crossbow", "longbow", "musket", "pistol"]],
            description: " [proficient with Martial Ranged Weapons & Woodcarver's Tools]\n   I can craft a magic Wand in half the normal time.",
            toolProfs: ["Woodcarver's Tools", 1],
        },
        "subclassfeature3.1": {
            name: "Eldritch Cannon",
            source: [
                ["E:FA", 0]
            ],
            minlevel: 3,
            description: desc([
                "As a Magic action, I can use Woodcarver's or Smith's Tools to create an Eldritch Cannon in 5 ft",
                "I can do this once per Long Rest, or by expending a spell slot (SS 1+) to create one cannon",
                "I decide its size (Small/Tiny) and appearance",
                "It disappears after 1 hour, when reduced to 0 HP, or if I dismiss it as a Magic action",
                "As a Bonus Action when within 60 ft of it, I can activate it to move and do its action",
                "I can't have multiple cannons; Select \"Eldritch Cannon\" on a companion page for its stats"
            ]),
            usages: 1,
            recovery: "long rest",
            altResource: "SS 1+",
            additional: levels.map(function(n) {
                return n < 3 ? "" : n < 15 ? "create 1 cannon" : "create 2 cannons";
            }),
            action: [
                ["action", " (summon/dismiss)"],
                ["bonus action", " (activate)"]
            ],
            creaturesAdd: [
                ["Eldritch Cannon"]
            ],
            creatureOptions: [{
                name: "Eldritch Cannon",
                source: [
                    ["E:FA", 10]
                ],
                size: [4, 5],
                type: "Object",
                alignment: "",
                ac: 18,
                hp: 5,
                hd: ["", ""],
                speed: "15 ft, climb 15 ft",
                scores: [10, 10, 10, 10, 10, 10],
                damage_immunities: "poison, psychic",
                passivePerception: 10,
                senses: "",
                challengeRating: "1",
                proficiencyBonus: 2,
                proficiencyBonusLinked: true,
                attacksAction: 0,
                attacks: [{
                    name: "Flamethrower",
                    ability: 4,
                    damage: [2, 8, "fire"],
                    range: "15-ft cone",
                    description: "Dex save, success - half damage; Unattended flammable objects ignite",
                    dc: true,
                    useSpellMod: "artificer",
                    abilitytodamage: false,
                    tooltip: "The cannon exhales fire in an adjacent 15-ft Cone that its creator designates. Each creature in that area must make a Dexterity saving throw against its creator's artificer spell save DC, taking 2d8 Fire damage on a failed save or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried."
                }, {
                    name: "Force Ballista",
                    ability: 4,
                    damage: [2, 8, "force"],
                    range: "120 ft",
                    description: "Creature hit is pushed 5 ft away",
                    useSpellMod: "artificer",
                    abilitytodamage: false,
                    tooltip: "The cannon's creator makes a ranged spell attack, originating from the cannon, at one creature or object within 120 ft of it. On a hit, the target takes 2d8 Force damage, and if the target is a creature, it is pushed up to 5 ft away from the cannon."
                }, {
                    name: "Detonate",
                    ability: 4,
                    damage: [3, 10, "force"],
                    range: "20-ft radius",
                    description: "Dex save, success - half damage; Destroys cannon",
                    dc: true,
                    useSpellMod: "artificer",
                    abilitytodamage: false,
                    tooltip: "As an Reaction, its creator can command the cannon to deto­nate if its creator is within 60 ft of it. Doing so destroys the cannon and forces each creature within 20 ft of it to make a Dexterity saving throw against its creator's artificer spell save DC, taking 3d10 Force damage on a failed save or half as much damage on a successful one."
                }],
                features: [{
                    name: "Healing",
                    description: "The cannon regains 2d6 HP whenever Mending is cast on it."
                }, {
                    name: "Protector",
                    description: "The cannon emits a burst of positive energy that grants itself and each creature of its creator's choice within 10 ft of it a number of temporary hit points equal to 1d8 + its creator's Intelligence modifier (minimum of +1)."
                }],
                traits: [{
                    name: "Creator",
                    description: "As an Object, the cannon only acts when activated by its creator, uses its creator's artificer spell attack and save DC, and has five times the artificer level in HP. It disappears after 1 hour, when reduced to 0 HP, or when its creator dismisses it as a Magic action."
                }, {
                    name: "Activation",
                    description: "The creator of the cannon can activate it as a Bonus Action while within 60 ft of it. Once activated, the cannon does as instructed, moves and uses the action associated with the command: flamethrower attack, force ballista attack, or protector feature."
                }, {
                    name: "Detonate (Artillerist 9)",
                    minlevel: 9,
                    description: "The creator of the cannon, can use an action to detonate the cannon when within 60 ft of it, see the attack section. The cannon's attacks now deal 3d8 damage.",
                    eval: function(prefix, lvl) {
                        // add the Detonate attack entry
                        Value(prefix + "Comp.Use.Attack.3.Weapon Selection", "Detonate");
                        // Upgrade the damage for the attacks
                        for (var i = 1; i <= 2; i++) {
                            Value(prefix + "BlueText.Comp.Use.Attack." + i + ".Damage Die", "3d8");
                        }
                    },
                    removeeval: function(prefix, lvl) {
                        // remove the Detonate attack entry
                        Value(prefix + "Comp.Use.Attack.3.Weapon Selection", "");
                        // Reset the damage for the attacks
                        for (var i = 1; i <= 2; i++) {
                            Value(prefix + "BlueText.Comp.Use.Attack." + i + ".Damage Die", "2d8");
                        }
                    }
                }, {
                    name: "Shimmering Field (Artillerist 15)",
                    minlevel: 15,
                    description: "The creator of the cannon and their allies have Half Cover while within 10 ft of the cannon."
                }],
                minlevelLinked: ["artificer"],
                header: "Object",
                calcChanges: {
                    hp: function(totalHD, HDobj, prefix) {
                        if (!classes.known.artificer) return;
                        var artLvl = classes.known.artificer.level;
                        HDobj.alt.push(5 * artLvl);
                        HDobj.altStr.push(" = 5 \xD7 " + artLvl + " from five times its creator's artificer level");
                    },
                    setAltHp: true
                },
                eval: function(prefix, lvl) {
                    // remove the Detonate attack if adding this creature before artificer level 9
                    if (lvl[0] < 9) Value(prefix + "Comp.Use.Attack.3.Weapon Selection", "");
                }
            }]
        },
        "subclassfeature5": {
            name: "Arcane Firearm",
            source: [
                ["E:FA", 0]
            ],
            minlevel: 5,
            description: " [lasts until I use this feature again]" + desc([
                "After a long rest, I can use Woodcarver's Tools to enhance a Rod, Staff, or Wand",
                "If I use this as my Spellcasting Focus for an Artificer spell, I add +1d8 to one damage"
            ]),
            calcChanges: {
                atkAdd: [
                    function(fields, v) {
                        if (v.thisWeapon[3] && v.thisWeapon[4].indexOf("artificer") !== -1) {
                            fields.Damage_Die = fields.Damage_Die.replace(/D/g, 'd');
                            var d8Regex = /(\d+)d8/;
                            if (fields.Damage_Die.indexOf('Bd8') != -1) {
                                fields.Damage_Die = fields.Damage_Die.replace('Bd8', 'Cd8');
                            } else if (fields.Damage_Die.indexOf('Cd8') != -1) {
                                fields.Damage_Die = fields.Damage_Die.replace('Cd8', 'Qd8');
                            } else if (d8Regex.test(fields.Damage_Die)) {
                                fields.Damage_Die = fields.Damage_Die.replace(d8Regex, Number(fields.Damage_Die.replace(d8Regex, '$1')) + 1 + 'd8');
                            } else if (v.thisWeapon[3] == "eldritch blast") {
                                fields.Description += (fields.Description ? '; ' : '') + "One ray +1d8 dmg";
                            } else {
                                fields.Damage_Die += '+1d8';
                            }
                        }
                    },
                    "If I use my Arcane Firearm as a Spellcasting Focus for an Artificer spell, I can add +1d8 to one of the spell's damage rolls.",
                    10
                ],
                spellAdd: [
                    function(spellKey, spellObj, spName) {
                        if (spellObj.psionic || spName !== "artificer") return;
                        return genericSpellDmgEdit(spellKey, spellObj, "\\w+\\.?", "1d8", true, true);
                    },
                    "If I use my Arcane Firearm as a Spellcasting Focus for an Artificer spell, I can add +1d8 to one of the spell's damage rolls."
                ]
            }
        },
        "subclassfeature9": {
            name: "Explosive Cannon",
            source: [
                ["E:FA", 0]
            ],
            minlevel: 9,
            description: "\n   My eldritch cannons deal +1d8 damage; As an action, I can detonate a cannon in 60 ft",
            action: [
                ["action", "Eldritch Cannon (detonate)"]
            ]
        },
        "subclassfeature15": {
            name: "Fortified Position",
            source: [
                ["E:FA", 0]
            ],
            minlevel: 15,
            description: " [cannons grant half cover in 10 ft to allies]" + desc([
                "I can now have two cannons at the same time and activate both with one bonus action",
                "I can create 2 eldritch cannons with the same action (still only one with a spell slot)"
            ])
        },
    },
});
legacySubClassRefactor("artificer", "battle smith", {
    regExpSearch: /^(?=.*battle)(?=.*smith)(?!.*wizard).*$/i,
    subname: "Battle Smith",
    fullname: "Battle Smith",
    source: [
        ["E:FA", 0]
    ],
    replaces: "battle smith",
    spellcastingExtra: ["heroism", "shield", "shining smite", "warding bond", "aura of vitality", "conjure barrage", "aura of purity", "fire shield", "banishing smite", "mass cure wounds"],
    attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    features: {
        "subclassfeature3": {
            name: "Battle Ready \u0026 Tools of the Trade",
            source: [
                ["E:FA", 0]
            ],
            minlevel: 3,
            description: " [proficient with Martial Weapons and Smith's Tools]\n   I can craft nonmagical & magical weapons in half the normal time.",
            toolProfs: ["Smith's Tools", 1],
            weaponProfs: [false, true],
            calcChanges: {
                atkAdd: [
                    function(fields, v) {
                        if (!v.isSpell && (v.theWea.isMagicWeapon || v.thisWeapon[1]) && (fields.Mod === 1 || fields.Mod === 2) && Number(What("Int")) > Number(What(fields.Mod === 1 ? "Str" : "Dex"))) {
                            fields.Mod = 4;
                        }
                    },
                    'I can use my Intelligence modifier instead of Strength or Dexterity for the attack and damage rolls of magic weapons.'
                ]
            }
        },
        "subclassfeature3.1": {
            name: "Steel Defender",
            source: [
                ["E:FA", 12]
            ],
            minlevel: 3,
            description: desc([
                "When I end a Long Rest, I can use Smith's Tools to create a Steel Defender",
                "I determine its appearance; It obeys my commands and it acts on my initiative, after me",
                "Unless I use a Bonus Action to command it, it only takes the Dodge action on its turn",
                "It can take Reactions and move on its turn even if I don't command it",
                "I can't have multiple at once; Select \"Steel Defender\" on a companion page for its stats"
            ]),
            action: [
                ["bonus action", " (command)"],
                ["action", " (restore)"]
            ],
            creaturesAdd: [
                ["Steel Defender"]
            ],
            creatureOptions: [{
                name: "Steel Defender",
                source: [
                    ["E:FA", 12]
                ],
                size: 3,
                type: "Construct",
                alignment: "Neutral",
                ac: "12+oInt",
                hp: 20,
                hd: [2, 8],
                hdLinked: ["artificer"],
                speed: "40 ft",
                scores: [14, 12, 14, 4, 10, 6],
                saves: ["Prof", "Prof", "Prof", "Prof", "Prof", "Prof"],
                damage_immunities: "poison",
                condition_immunities: "charmed, exhaustion, poisoned",
                passivePerception: 10,
                senses: "Darkvision 60 ft",
                languages: "understands the languages of its creator",
                challengeRating: "1",
                proficiencyBonus: 2,
                proficiencyBonusLinked: true,
                attacksAction: 1,
                attacks: [{
                    name: "Force-Empowered Rend",
                    ability: 4,
                    damage: [1, 8, "force"],
                    range: "Melee (5 ft)",
                    description: "",
                    modifiers: ["", "Int+2"],
                    abilitytodamage: false,
                    useSpellMod: "artificer"
                }, {
                    name: "Deflect Attack (reaction)",
                    ability: 0,
                    damage: [1, 4, "force"],
                    range: "Melee (5 ft)",
                    description: "After using the reaction, the attacker takes this damage, no attack roll required",
                    modifiers: ["-Prof", "oInt"],
                    abilitytodamage: false
                }],
                features: [{
                    name: "Creator",
                    description: "The steel defender obeys the commands of its creator and shares its proficiency bonus. It takes its turn immediately after its creator, on the same initiative count. It can move and take reactions on its own, but only takes the Dodge action on its turn unless its creator takes a bonus action to command it to take another action. If its creator is incapacitated, it can take any action, not just Dodge."
                }, {
                    name: "Steel Bond",
                    description: "Adds its creator's Proficiency Bonus to any ability check or saving throw the " + (typePF ? "" : "steel ") + "defender makes."
                }],
                actions: [{
                    name: "Repair (3/Day)",
                    description: "As an action, the " + (typePF ? "" : "magical mechanisms inside the ") + "steel defender restore" + (typePF ? "s" : "") + " 2d8 + its creator's Intelligence modifier in HP to itself or to one construct or object within 5 ft of it."
                }, {
                    name: "Deflect Attack (reaction)",
                    description: typePF ? "As a reaction, the steel defender imposes Disadvantage on the attack roll of one creature it can see that is within 5 ft of it, provided the attack roll is against a creature other than the defender." : "As a reaction, the defender imposes disadv. on the attack roll of one creature it can see within 5 ft, provided the creature attacks another than the defender."
                }, {
                    name: "Arcane Jolt (Battle Smith 9)",
                    minlevel: 9,
                    eval: function(prefix, lvl) {
                        Value(prefix + "Comp.Use.Attack.1.Description", "Arcane Jolt (2d6): On hit, deal force damage or heal target in 30 ft");
                    },
                    removeeval: function(prefix, lvl) {
                        Value(prefix + "Comp.Use.Attack.1.Description", "");
                    }
                }, {
                    name: "Improved Defender (Battle Smith 15)",
                    minlevel: 15,
                    description: "The steel defender's Deflect Attack now deals 1d4 + its creator's Intelligence modifier in force damage to the attacker.",
                    addMod: [{
                        type: "",
                        field: "Comp.Use.AC",
                        mod: 2,
                        text: "The steel defender gains a +2 bonus to its AC (base AC of 15)."
                    }],
                    eval: function(prefix, lvl) {
                        Value(prefix + "Comp.Use.Attack.1.Description", What(prefix + "Comp.Use.Attack.1.Description").replace("Arcane Jolt (2d6)", "Arcane Jolt (4d6)"));
                        Value(prefix + "Comp.Use.Attack.2.Weapon Selection", "Deflect Attack (reaction)");
                    },
                    removeeval: function(prefix, lvl) {
                        Value(prefix + "Comp.Use.Attack.1.Description", What(prefix + "Comp.Use.Attack.1.Description").replace("Arcane Jolt (4d6)", "Arcane Jolt (2d6)"));
                        Value(prefix + "Comp.Use.Attack.2.Weapon Selection", "");
                    }
                }],
                minlevelLinked: ["artificer"],
                header: "Construct",
                calcChanges: {
                    hp: function(totalHD, HDobj, prefix) {
                        if (!classes.known.artificer) return;
                        var intMod = Number(What('Int Mod'));
                        var artLvl = classes.known.artificer.level;
                        var artLvl5 = 5 * artLvl;
                        HDobj.alt.push(5 + artLvl5);
                        HDobj.altStr.push(" = 5 as a base\n + 5 \xD7 " + artLvl + " from five times its creator's artificer level (" + artLvl5 + ")");
                    },
                    setAltHp: true,
                    hpForceRecalc: true
                },
                eval: function(prefix, lvl) {
                    // remove the Deflect Attack (reaction) attack if adding this creature before artificer level 15
                    if (lvl[0] < 15) Value(prefix + "Comp.Use.Attack.2.Weapon Selection", "");
                }
            }]
        },
        "subclassfeature9": {
            name: "Arcane Jolt",
            source: [
                ["E:FA", 12]
            ],
            minlevel: 9,
            description: function() {
                var descr9 = desc([
                    "Once per turn when my Steel Defender or magic weapon hits a target, I can have it:",
                    " \u2022 Deal an extra +2d6 Force damage to the target",
                    " \u2022 Restore 2d6 HP to another target within 30 ft of the one that was hit"
                ]);
                var descr15 = descr9.replace(/2d6/g, '4d6');
                return levels.map(function(n) {
                    return n < 9 ? "" : n < 15 ? descr9 : descr15;
                });
            }(),
            usages: "Intelligence modifier per ",
            usagescalc: "event.value = Math.max(1, What('Int Mod'));",
            recovery: "long rest",
            additional: levels.map(function(n) {
                return n < 9 ? "" : (n < 15 ? 2 : 4) + "d6";
            }),
            calcChanges: {
                atkAdd: [
                    function(fields, v) {
                        if (v.theWea.isMagicWeapon || v.thisWeapon[1]) {
                            fields.Description += (fields.Description ? '; ' : '') + 'Arcane Jolt (' + (classes.known.artificer && classes.known.artificer.level >= 15 ? 4 : 2) + 'd6)';
                        }
                    },
                    "Once per turn when I hit with a magic weapon or my Steel Defender hits with its attack, I can use my Arcane Jolt class feature to have the hit either deal extra Force damage or heal somebody within 30 ft of the target hit."
                ]
            }
        },
        "subclassfeature15": {
            name: "Improved Defender",
            source: [
                ["E:FA", 12]
            ],
            minlevel: 15,
            description: desc([
                "My defender's Deflect Attack now deals its attacker 1d4 + my Int mod Force damage",
                "My Arcane Jolt damage/healing increases to 4d6; My steel defender gains +2 AC"
            ])
        },
    },
});
AddSubClass("artificer", "cartographer", {
    regExpSearch: /^(?=.*cartographer)(?!.*wizard).*$/i,
    subname: "Cartographer",
    fullname: "Cartographer",
    source: [
        ["E:FA", 6]
    ],
    spellcastingExtra: ["faerie fire", "guiding bolt", "healing word", "locate object", "mind spike", "call lightning", "clairvoyance", "banishment", "locate creature", "scrying", "teleportation circle"],
    features: {
        "subclassfeature3": {
            name: "Tool of the Trade",
            source: [
                ["E:FA", 6]
            ],
            minlevel: 3,
            description: " [proficient with Calligrapher's Supplies \u0026 Cartographer's Tools]\n   I can scribe a spell scroll using the PHB (2024) crafting rules in half the normal time.",
            toolProfs: [
                ["Calligrapher's Supplies", 1],
                ["Cartographer's Tools", 1]
            ],
        },
        "subclassfeature3.1": {
            name: "Adventurer's Atlas",
            source: [
                ["E:FA", 7]
            ],
            minlevel: 3,
            description: desc([
                "When I finish a Long Rest holding Cartographer's Tools \u0026 touching at least 2 creatures (1 of whom can be myself), I can create a number of magical maps for each target, up to a max equal to 1 + my Int mod (min 2).",
                "These magical maps are illegible to all others \u0026 last until I die, or until I use this feature again, which causes existing maps to immediately vanish",
                "While carrying the map, a target gains the following benefits:",
                " \u2022 Awareness. Targets add 1d4 to their Initiative rolls.",
                " \u2022 Positioning. Targets know the locations of all other map holders on the same plane of existence. When casting a spell or creating an effect that requires line of sight to a target, the map holder can target another map holder regardless of sight, so long as the other map holder is still within the spell's/effect's range.",
            ]),
            additional : "Number of Maps 1 + Int Mod, Min of 2",
        },
        "subclassfeature3.2": {
            name: "Mapping Magic",
            source: [
                ["E:FA", 7]
            ],
            minlevel: 3,
            description: desc([
                "On my turn \u0026 so long as my Speed isn't 0, I can expend half of my movement to teleport.",
                "I can teleport as such to an unoccupied space I can see within 10 ft, or to within 5 feet of a creature that is within 30 ft of me.",
                "I can cast Faerie Fire a number of times equal to my Int mod per Long Rest without expending a spell slot.",
            ]),
            extraLimitedFeatures: [{
                name: "Mapping Magic: Faerie Fire",
                usages: "Intelligence modifier per ",
                usagescalc: "event.value = Math.max(1, What('Int Mod'));",
                recovery: "long rest",
            }],
        },
        "subclassfeature5": {
            name: "Guided Precision",
            source: [
                ["E:FA", 7]
            ],
            minlevel: 5,
            description: desc([
                "Once per turn, when I cast a Cartographer Spell or hit a creature affected by Faerie Fire with an attack roll,",
                "I can add my Int modifier to one damage roll of the spell or attack.",
                "In addition, taking damage does not cause me to lose Concentration on Faerie Fire.",
            ]),
        },
        "subclassfeature9": {
            name: "Ingenious Movement",
            source: [
                ["E:FA", 7]
            ],
            minlevel: 9,
            description: desc([
                "When I use my Flash of Genius, a willing creature of my choice (or myself) can teleport as part of the same Reaction.",
                "The target creature can teleport up to 30 ft to an unoccupied space I can see."
            ]),
        },
        "subclassfeature15": {
            name: "Superior Atlas",
            source: [
                ["E:FA", 7]
            ],
            minlevel: 15,
            description: desc([
                "My Adventurer's Atlas improves, gaining the following benefits:",
                " \u2022 Safe Haven. When a map holder is reduced to 0 HP but not killed outright, that creature can destroy its map. The creature is then teleported to an unoccupied space within 5 feet of myself or another map holder of its choice and its HP changes to a number equal to twice my Artificer level.",
                " \u2022 Unerring Path. Once per Long Rest \u0026 if I am one of the map holders for my Adventurer’s Atlas, I can cast Find the Path without expending a spell slot, without preparing the spell, and without needing spell components.",
            ]),
            spellcastingBonus: [{
                name: "Unerring Path",
                spells: ["find the path"],
                selection: ["find the path"],
                firstCol: "oncelr",
            }],
            extraLimitedFeatures: [{
                name: "Superior Atlas: Unerring Path",
                usages: 1,
                recovery: "long rest",
            }],
        },
    },
});
// Add options to include aspects from 2019/2020 Artificer for those that need them
AddFeatureChoice(ClassList.artificer.features["tinker's magic"], true, "Tinker's Magic: 2019/2020 Functions Added", {
    name: "Tinker's Magic: 2019/2020 Functions Added",
    extraname: "Artificer 1",
    source: [
        ["MJ:HB", 0],
        ["E:RLW", 55],
        ["T", 9]
    ],
    description: desc([
        "As a Magic action, I can alternatively use my Tinker's Magic to give 1 property to a nonmagical Tiny object:",
        " \u2022 Emit light (5-ft radius bright light, equal dim), an odor, or a nonverbal sound",
        " \u2022 Static visual effect on one surface, or emit a 6-second recorded message when tapped",
        "If I instill a property in more objects than I can have active, the oldest loses its property",
        "Each Tiny object I infuse with semi-permanent magic removes a usage from the maximum number of",
        "  items I can temporarily produce via the alternate Magical Tinkering rules.",
    ]),
    prereqeval: function(v) {
        return classes.known.artificer.level >= 1 ? true : "skip";
    }
}, "1st-level Artificer Tinker's Magic choice");
AddFeatureChoice(ClassList.artificer.features["magic item savant"], true, "Magic Item Savant: 2019/2020 Functions Added", {
    name: "Magic Item Savant: 2019/2020 Functions Added",
    extraname: "Artificer 14",
    source: [
        ["MJ:HB", 0],
        ["E:RLW", 58],
        ["T", 9]
    ],
    description: desc([
        "I additionally ignore all Class, Species, Spell, and Level requirements on attuning to or using a magic item",
    ]),
    prereqeval: function(v) {
        return classes.known.artificer.level >= 14 ? true : "skip";
    }
}, "14th-level Artificer Magic Item Savant choice");
// Add "Homunculus Servant" Spell
SpellsList["homunculus servant"] = {
    name: "Homunculus Servant",
    source: [
        ["E:FA", 21]
    ],
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
// Add "Homunculus Servant" companion template
CompanionList.homunculusservant = {
    name: "Homunculus Servant",
    nameMenu: "Homunculus Servant (Homunculus Servant spell)",
    nameTooltip: "the Homunculus Servant spell",
    nameOrigin: "2nd-Level Conjuration [ritual] spell",
    source: [
        ["E:FA", 0]
    ],
    action: [
        ["reaction", " command (free)"]
    ],
    includeCheck: function(sCrea, objCrea, iCreaCR) {
        return /^(?=.*homunculus)(?=.*servant).*$/i.test(sCrea);
    },
    notes: [{
        name: "Spell Description",
        description: "You summon a special homunculus in an unoccupied space within range. This creature uses the Homunculus Servant stat block. If you already have a homunculus from this spell, the homunculus is replaced by the new one." + "\n   " + "You determine the homunculus's appearance, such as a mechanical-looking bird; winged vials; or miniature, animate cauldrons.",
        joinString: "\n   "
    }, {
        name: "Combat",
        description: "The homunculus is an ally to you and your allies. In combat, it shares your Initiative count, but it takes its turn immediately after yours. It obeys your commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
        joinString: "\n   "
    }, {
        name: "At Higher Levels",
        description: "Use the spell slot's level for the spell’s level in the stat block." + "\n   " + "The familiar's HP, Skill/Save Bonuses, & Damage change depending on the level the Homunculus Servant (XUA25EU) spell was cast at:" + "\n      " + "- HP total equals 5 + 5 per spell level; the Otherworldly Familiar has a number of Hit Dice [d4s] equal to the spell's level;" + "\n      " + "- The Homunculus Servant adds the spell level to any ability check or saving throw it makes;" + "\n      " + "- Damage equals 1d6 + the spell's level of Force damage.",
        joinString: "\n   "
    }],
};
// Add "Homunculus Servant" creatures, one per level
CreatureList["homunculus servant lvl 2"] = {
    name: "2nd-Lvl Homunculus Servant",
    source: [
        ["E:FA", 21]
    ],
    size: 5,
    type: "Construct",
    alignment: "Neutral",
    ac: 13,
    hp: 15,
    hd: [2, 4],
    hdLinked: ["artificer"],
    speed: "20 ft, Fly 30 ft",
    scores: [4, 15, 12, 10, 10, 7],
    saves: [-1, 4, 3, 2, 2, 0],
    skills: {
        "acrobatics": 4,
        "animal handling": 2,
        "arcana": 2,
        "athletics": -1,
        "deception": 0,
        "history": 2,
        "insight": 2,
        "intimidation": 0,
        "investigation": 2,
        "medicine": 2,
        "nature": 2,
        "perception": 2,
        "performance": 0,
        "persuasion": 0,
        "religion": 2,
        "sleight of hand": 4,
        "stealth": 4,
        "survival": 2,
    },
    damage_immunities: "poison",
    condition_immunities: "exhaustion, poisoned",
    passivePerception: 12,
    languages: "Telepathy 1 mile (works only for you)",
    challengeRating: "0",
    proficiencyBonus: 3,
    proficiencyBonusLinked: true,
    attacksAction: 1,
    attacks: [{
        name: "Force Strike",
        ability: 4,
        damage: [1, 6, "force"],
        range: "30 ft",
        description: "",
        modifiers: ["", 2],
        abilitytodamage: false,
        useSpellMod: "artificer"
    }],
    features: [{
        name: "Creator",
        description: "The homunculus obeys the commands of its creator and has the same proficiency bonus. It takes its turn immediately after its creator, on the same initiative count. It can move and take Reactions on its own, but only takes the Dodge action on its turn unless its creator commands it to take another action (no action required by the creator)."
    }],
    traits: [{
        name: "Magic Bond",
        description: "Add the spell level to any ability check or saving throw the homunculus makes."
    }, {
        name: "Evasion",
        description: "If the homunculus is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails. It can't use this trait if it's incapacitated."
    }],
    actions: [{
        name: "Channel Magic",
        description: "As a Reaction, the homunculus delivers a spell cast by its creator that has a range of touch. The homunculus must be within 120 ft of its creator to do so."
    }],
    header: "Construct",
};
CreatureList["homunculus servant lvl 3"] = {
    name: "3rd-Lvl Homunculus Servant",
    source: [
        ["E:FA", 21]
    ],
    size: 5,
    type: "Construct",
    alignment: "Neutral",
    ac: 13,
    hp: 20,
    hd: [3, 4],
    hdLinked: ["artificer"],
    speed: "20 ft, Fly 30 ft",
    scores: [4, 15, 12, 10, 10, 7],
    saves: [0, 5, 4, 3, 3, 1],
    skills: {
        "acrobatics": 5,
        "animal handling": 3,
        "arcana": 3,
        "athletics": 0,
        "deception": 1,
        "history": 3,
        "insight": 3,
        "intimidation": 1,
        "investigation": 3,
        "medicine": 3,
        "nature": 3,
        "perception": 3,
        "performance": 1,
        "persuasion": 1,
        "religion": 3,
        "sleight of hand": 5,
        "stealth": 5,
        "survival": 3,
    },
    damage_immunities: "poison",
    condition_immunities: "exhaustion, poisoned",
    passivePerception: 13,
    languages: "Telepathy 1 mile (works only for you)",
    challengeRating: "0",
    proficiencyBonus: 4,
    proficiencyBonusLinked: true,
    attacksAction: 1,
    attacks: [{
        name: "Force Strike",
        ability: 4,
        damage: [1, 6, "force"],
        range: "30 ft",
        description: "",
        modifiers: ["", 3],
        abilitytodamage: false,
        useSpellMod: "artificer"
    }],
    features: [{
        name: "Creator",
        description: "The homunculus obeys the commands of its creator and has the same proficiency bonus. It takes its turn immediately after its creator, on the same initiative count. It can move and take Reactions on its own, but only takes the Dodge action on its turn unless its creator commands it to take another action (no action required by the creator)."
    }],
    traits: [{
        name: "Magic Bond",
        description: "Add the spell level to any ability check or saving throw the homunculus makes."
    }, {
        name: "Evasion",
        description: "If the homunculus is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails. It can't use this trait if it's incapacitated."
    }],
    actions: [{
        name: "Channel Magic",
        description: "As a Reaction, the homunculus delivers a spell cast by its creator that has a range of touch. The homunculus must be within 120 ft of its creator to do so."
    }],
    header: "Construct",
};
CreatureList["homunculus servant lvl 4"] = {
    name: "4th-Lvl Homunculus Servant",
    source: [
        ["E:FA", 21]
    ],
    size: 5,
    type: "Construct",
    alignment: "Neutral",
    ac: 13,
    hp: 25,
    hd: [4, 4],
    hdLinked: ["artificer"],
    speed: "20 ft, Fly 30 ft",
    scores: [4, 15, 12, 10, 10, 7],
    saves: [1, 6, 5, 4, 4, 2],
    skills: {
        "acrobatics": 6,
        "animal handling": 4,
        "arcana": 4,
        "athletics": 1,
        "deception": 2,
        "history": 4,
        "insight": 4,
        "intimidation": 2,
        "investigation": 4,
        "medicine": 4,
        "nature": 4,
        "perception": 4,
        "performance": 2,
        "persuasion": 2,
        "religion": 4,
        "sleight of hand": 6,
        "stealth": 6,
        "survival": 4,
    },
    damage_immunities: "poison",
    condition_immunities: "exhaustion, poisoned",
    passivePerception: 14,
    languages: "Telepathy 1 mile (works only for you)",
    challengeRating: "0",
    proficiencyBonus: 5,
    proficiencyBonusLinked: true,
    attacksAction: 1,
    attacks: [{
        name: "Force Strike",
        ability: 4,
        damage: [1, 6, "force"],
        range: "30 ft",
        description: "",
        modifiers: ["", 4],
        abilitytodamage: false,
        useSpellMod: "artificer"
    }],
    features: [{
        name: "Creator",
        description: "The homunculus obeys the commands of its creator and has the same proficiency bonus. It takes its turn immediately after its creator, on the same initiative count. It can move and take Reactions on its own, but only takes the Dodge action on its turn unless its creator commands it to take another action (no action required by the creator)."
    }],
    traits: [{
        name: "Magic Bond",
        description: "Add the spell level to any ability check or saving throw the homunculus makes."
    }, {
        name: "Evasion",
        description: "If the homunculus is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails. It can't use this trait if it's incapacitated."
    }],
    actions: [{
        name: "Channel Magic",
        description: "As a Reaction, the homunculus delivers a spell cast by its creator that has a range of touch. The homunculus must be within 120 ft of its creator to do so."
    }],
    header: "Construct",
};
CreatureList["homunculus servant lvl 5"] = {
    name: "5th-Lvl Homunculus Servant",
    source: [
        ["E:FA", 21]
    ],
    size: 5,
    type: "Construct",
    alignment: "Neutral",
    ac: 13,
    hp: 30,
    hd: [5, 4],
    hdLinked: ["artificer"],
    speed: "20 ft, Fly 30 ft",
    scores: [4, 15, 12, 10, 10, 7],
    saves: [2, 7, 6, 5, 5, 3],
    skills: {
        "acrobatics": 7,
        "animal handling": 5,
        "arcana": 5,
        "athletics": 2,
        "deception": 3,
        "history": 5,
        "insight": 5,
        "intimidation": 3,
        "investigation": 5,
        "medicine": 5,
        "nature": 5,
        "perception": 5,
        "performance": 3,
        "persuasion": 3,
        "religion": 5,
        "sleight of hand": 7,
        "stealth": 7,
        "survival": 5,
    },
    damage_immunities: "poison",
    condition_immunities: "exhaustion, poisoned",
    passivePerception: 15,
    languages: "Telepathy 1 mile (works only for you)",
    challengeRating: "0",
    proficiencyBonus: 6,
    proficiencyBonusLinked: true,
    attacksAction: 1,
    attacks: [{
        name: "Force Strike",
        ability: 4,
        damage: [1, 6, "force"],
        range: "30 ft",
        description: "",
        modifiers: ["", 5],
        abilitytodamage: false,
        useSpellMod: "artificer"
    }],
    features: [{
        name: "Creator",
        description: "The homunculus obeys the commands of its creator and has the same proficiency bonus. It takes its turn immediately after its creator, on the same initiative count. It can move and take Reactions on its own, but only takes the Dodge action on its turn unless its creator commands it to take another action (no action required by the creator)."
    }],
    traits: [{
        name: "Magic Bond",
        description: "Add the spell level to any ability check or saving throw the homunculus makes."
    }, {
        name: "Evasion",
        description: "If the homunculus is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails. It can't use this trait if it's incapacitated."
    }],
    actions: [{
        name: "Channel Magic",
        description: "As a Reaction, the homunculus delivers a spell cast by its creator that has a range of touch. The homunculus must be within 120 ft of its creator to do so."
    }],
    header: "Construct",
};
CreatureList["homunculus servant lvl 6"] = {
    name: "6th-Lvl Homunculus Servant",
    source: [
        ["E:FA", 21]
    ],
    size: 5,
    type: "Construct",
    alignment: "Neutral",
    ac: 13,
    hp: 35,
    hd: [6, 4],
    hdLinked: ["artificer"],
    speed: "20 ft, Fly 30 ft",
    scores: [4, 15, 12, 10, 10, 7],
    saves: [3, 8, 7, 6, 6, 4],
    skills: {
        "acrobatics": 8,
        "animal handling": 6,
        "arcana": 6,
        "athletics": 3,
        "deception": 4,
        "history": 6,
        "insight": 6,
        "intimidation": 4,
        "investigation": 6,
        "medicine": 6,
        "nature": 6,
        "perception": 6,
        "performance": 4,
        "persuasion": 4,
        "religion": 6,
        "sleight of hand": 8,
        "stealth": 8,
        "survival": 6,
    },
    damage_immunities: "poison",
    condition_immunities: "exhaustion, poisoned",
    passivePerception: 14,
    languages: "Telepathy 1 mile (works only for you)",
    challengeRating: "0",
    proficiencyBonus: 6,
    proficiencyBonusLinked: true,
    attacksAction: 1,
    attacks: [{
        name: "Force Strike",
        ability: 4,
        damage: [1, 6, "force"],
        range: "30 ft",
        description: "",
        modifiers: ["", 6],
        abilitytodamage: false,
        useSpellMod: "artificer"
    }],
    features: [{
        name: "Creator",
        description: "The homunculus obeys the commands of its creator and has the same proficiency bonus. It takes its turn immediately after its creator, on the same initiative count. It can move and take Reactions on its own, but only takes the Dodge action on its turn unless its creator commands it to take another action (no action required by the creator)."
    }],
    traits: [{
        name: "Magic Bond",
        description: "Add the spell level to any ability check or saving throw the homunculus makes."
    }, {
        name: "Evasion",
        description: "If the homunculus is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails. It can't use this trait if it's incapacitated."
    }],
    actions: [{
        name: "Channel Magic",
        description: "As a Reaction, the homunculus delivers a spell cast by its creator that has a range of touch. The homunculus must be within 120 ft of its creator to do so."
    }],
    header: "Construct",
};
CreatureList["homunculus servant lvl 7"] = {
    name: "7th-Lvl Homunculus Servant",
    source: [
        ["E:FA", 21]
    ],
    size: 5,
    type: "Construct",
    alignment: "Neutral",
    ac: 13,
    hp: 40,
    hd: [7, 4],
    hdLinked: ["artificer"],
    speed: "20 ft, Fly 30 ft",
    scores: [4, 15, 12, 10, 10, 7],
    saves: [4, 9, 8, 7, 7, 5],
    skills: {
        "acrobatics": 9,
        "animal handling": 7,
        "arcana": 7,
        "athletics": 4,
        "deception": 5,
        "history": 7,
        "insight": 7,
        "intimidation": 5,
        "investigation": 7,
        "medicine": 7,
        "nature": 7,
        "perception": 7,
        "performance": 5,
        "persuasion": 5,
        "religion": 7,
        "sleight of hand": 9,
        "stealth": 9,
        "survival": 7,
    },
    damage_immunities: "poison",
    condition_immunities: "exhaustion, poisoned",
    passivePerception: 14,
    languages: "Telepathy 1 mile (works only for you)",
    challengeRating: "0",
    proficiencyBonus: 6,
    proficiencyBonusLinked: true,
    attacksAction: 1,
    attacks: [{
        name: "Force Strike",
        ability: 4,
        damage: [1, 6, "force"],
        range: "30 ft",
        description: "",
        modifiers: ["", 7],
        abilitytodamage: false,
        useSpellMod: "artificer"
    }],
    features: [{
        name: "Creator",
        description: "The homunculus obeys the commands of its creator and has the same proficiency bonus. It takes its turn immediately after its creator, on the same initiative count. It can move and take Reactions on its own, but only takes the Dodge action on its turn unless its creator commands it to take another action (no action required by the creator)."
    }],
    traits: [{
        name: "Magic Bond",
        description: "Add the spell level to any ability check or saving throw the homunculus makes."
    }, {
        name: "Evasion",
        description: "If the homunculus is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails. It can't use this trait if it's incapacitated."
    }],
    actions: [{
        name: "Channel Magic",
        description: "As a Reaction, the homunculus delivers a spell cast by its creator that has a range of touch. The homunculus must be within 120 ft of its creator to do so."
    }],
    header: "Construct",
};
CreatureList["homunculus servant lvl 8"] = {
    name: "8th-Lvl Homunculus Servant",
    source: [
        ["E:FA", 21]
    ],
    size: 5,
    type: "Construct",
    alignment: "Neutral",
    ac: 13,
    hp: 45,
    hd: [8, 4],
    hdLinked: ["artificer"],
    speed: "20 ft, Fly 30 ft",
    scores: [4, 15, 12, 10, 10, 7],
    saves: [5, 10, 9, 8, 8, 6],
    skills: {
        "acrobatics": 10,
        "animal handling": 8,
        "arcana": 8,
        "athletics": 7,
        "deception": 6,
        "history": 8,
        "insight": 8,
        "intimidation": 6,
        "investigation": 8,
        "medicine": 8,
        "nature": 8,
        "perception": 8,
        "performance": 6,
        "persuasion": 6,
        "religion": 8,
        "sleight of hand": 10,
        "stealth": 10,
        "survival": 8,
    },
    damage_immunities: "poison",
    condition_immunities: "exhaustion, poisoned",
    passivePerception: 14,
    languages: "Telepathy 1 mile (works only for you)",
    challengeRating: "0",
    proficiencyBonus: 6,
    proficiencyBonusLinked: true,
    attacksAction: 1,
    attacks: [{
        name: "Force Strike",
        ability: 4,
        damage: [1, 6, "force"],
        range: "30 ft",
        description: "",
        modifiers: ["", 8],
        abilitytodamage: false,
        useSpellMod: "artificer"
    }],
    features: [{
        name: "Creator",
        description: "The homunculus obeys the commands of its creator and has the same proficiency bonus. It takes its turn immediately after its creator, on the same initiative count. It can move and take Reactions on its own, but only takes the Dodge action on its turn unless its creator commands it to take another action (no action required by the creator)."
    }],
    traits: [{
        name: "Magic Bond",
        description: "Add the spell level to any ability check or saving throw the homunculus makes."
    }, {
        name: "Evasion",
        description: "If the homunculus is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails. It can't use this trait if it's incapacitated."
    }],
    actions: [{
        name: "Channel Magic",
        description: "As a Reaction, the homunculus delivers a spell cast by its creator that has a range of touch. The homunculus must be within 120 ft of its creator to do so."
    }],
    header: "Construct",
};
CreatureList["homunculus servant lvl 9"] = {
    name: "9th-Lvl Homunculus Servant",
    source: [
        ["E:FA", 21]
    ],
    size: 5,
    type: "Construct",
    alignment: "Neutral",
    ac: 13,
    hp: 50,
    hd: [9, 4],
    hdLinked: ["artificer"],
    speed: "20 ft, Fly 30 ft",
    scores: [4, 15, 12, 10, 10, 7],
    saves: [6, 11, 10, 9, 9, 7],
    skills: {
        "acrobatics": 11,
        "animal handling": 9,
        "arcana": 9,
        "athletics": 6,
        "deception": 7,
        "history": 9,
        "insight": 9,
        "intimidation": 7,
        "investigation": 9,
        "medicine": 9,
        "nature": 9,
        "perception": 9,
        "performance": 7,
        "persuasion": 7,
        "religion": 9,
        "sleight of hand": 11,
        "stealth": 11,
        "survival": 9,
    },
    damage_immunities: "poison",
    condition_immunities: "exhaustion, poisoned",
    passivePerception: 14,
    languages: "Telepathy 1 mile (works only for you)",
    challengeRating: "0",
    proficiencyBonus: 6,
    proficiencyBonusLinked: true,
    attacksAction: 1,
    attacks: [{
        name: "Force Strike",
        ability: 4,
        damage: [1, 6, "force"],
        range: "30 ft",
        description: "",
        modifiers: ["", 9],
        abilitytodamage: false,
        useSpellMod: "artificer"
    }],
    features: [{
        name: "Creator",
        description: "The homunculus obeys the commands of its creator and has the same proficiency bonus. It takes its turn immediately after its creator, on the same initiative count. It can move and take Reactions on its own, but only takes the Dodge action on its turn unless its creator commands it to take another action (no action required by the creator)."
    }],
    traits: [{
        name: "Magic Bond",
        description: "Add the spell level to any ability check or saving throw the homunculus makes."
    }, {
        name: "Evasion",
        description: "If the homunculus is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails. It can't use this trait if it's incapacitated."
    }],
    actions: [{
        name: "Channel Magic",
        description: "As a Reaction, the homunculus delivers a spell cast by its creator that has a range of touch. The homunculus must be within 120 ft of its creator to do so."
    }],
    header: "Construct",
};
// Backgrounds
BackgroundList["aberrant heir"] = {
    regExpSearch: /^(?=.*aberrant)(?=.*heir).*$/i,
    name: "Aberrant Heir",
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
    eval: function() {
        AddFeat("Aberrant Dragonmark");
    },
    removeeval: function() {
        RemoveFeat("Aberrant Dragonmark");
    },
};
legacyBackgroundRefactor("archaeologist", {
    regExpSearch: /^(?=.*archaeologist).*$/i,
    name: "Archaeologist",
    source: [
        ["E:FA", 0]
    ],
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
});
BackgroundFeatureList["archaeologist"] = {
    description: "You’ve made a lifelong study of the lost and fallen cultures of the past, visiting their ruins, deciphering their written records, and examining their surviving masterworks. Perhaps you studied at Morgrave University or a similar institution, supplementing your time in the library with fieldwork amid ancient ruins in remote locations. Some archaeologists plunder the treasures of the past in search of wealth or fame, but most consider it their calling to learn from the past. In any case, the archaeologists of Eberron combine the qualities of learned historians with the grit of treasure hunters.",
    source: [
        ["E:FA", 0]
    ],
    eval: function() {
        AddFeat("Skilled [Origin]");
    },
    removeeval: function() {
        RemoveFeat("Skilled [Origin]");
    },
};
legacyBackgroundRefactor("house agent", {
    regExpSearch: /^(?=.*house)(?=.*agent).*$/i,
    name: "House Agent",
    replaces: ["agent of house cannith", "agent of house deneith", "agent of house ghallanda", "agent of house jorasco", "agent of house lyrandar", "agent of house medani", "agent of house orien", "agent of house phiarlan", "agent of house sivis", "agent of house tharashk", "agent of house thuranni", "agent of house vadalis"],
    source: [
        ["E:FA", 0]
    ],
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
});
BackgroundFeatureList["house agent"] = {
    description: "You are connected to one of the dragonmarked houses, but you haven’t (yet) manifested a dragonmark. You might be a member of the family by birth or an employee of the house with no familial connection. You’ve earned your living by doing the business of the house, serving as the hands, feet, and eyes of house leadership in the world. You might have many old friends, mentors, and rivals in the house you serve, plus allies or enemies in other houses.",
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
    eval: function() {
        AddFeat("Mark of Handling");
    },
    removeeval: function() {
        RemoveFeat("Mark of Handling [Dragonmark]");
    },
};
BackgroundList["inquisitive"] = {
    regExpSearch: /^(?=.*inquisitive).*$/i,
    name: "Inquisitive",
    source: [
        ["E:FA", 0]
    ],
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
BackgroundFeatureList["inquisitive"] = {
    description: "You have honed your talents of investigation and deduction—fueled by a boundless curiosity—to explore mysteries, find missing people, recover stolen goods, unearth corruption and conspiracies, and solve crimes. As an inquisitive, you might have pursued freelance work, signed on with an inquisitive agency (perhaps one licensed by a dragonmarked house such as Medani or Tharashk), reported for a broadsheet, or worked for a police force.",
    source: [
        ["E:FA", 0]
    ],
    eval: function() {
        AddFeat("Alert [Origin]");
    },
    removeeval: function() {
        RemoveFeat("Alert [Origin]");
    },
};
// Species
legacyRaceRefactor("changeling", {
    regExpSearch: /^(?=.*changeling).*$/i,
    name: "Changeling",
    sortname: "Changeling",
    source: [
        ["E:FA", 0]
    ],
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
});
legacyRaceRefactor("kalashtar", {
    regExpSearch: /^(?=.*kalashtar).*$/i,
    name: "Kalashtar",
    sortname: "Kalashtar",
    source: [
        ["E:FA", 0]
    ],
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
});
legacyRaceRefactor("half-elf", {
    regExpSearch: /^(?=.*khoravar)|(?=.*half)(?=.*(elf|elv|drow|silvanesti|qualinesti|grugach|kagonesti)).*$/i,
    name: "Half-Elf",
    sortname: "Half-Elf",
    source: [
        ["E:FA", 0]
    ],
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
});
legacyRaceRefactor("shifter", {
    regExpSearch: /^(?=.*shifter).*$/i,
    name: "Shifter",
    sortname: "Shifter",
    source: [
        ["E:FA", 0]
    ],
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
});
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
        source: [
            ["E:FA", 0]
        ],
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
legacyRaceRefactor("warforged", {
    regExpSearch: /^(?=.*warforged).*$/i,
    name: "Warforged",
    sortname: "Warforged",
    source: [
        ["E:FA", 0]
    ],
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
});
// Feats
// Dragonmark Feats
FeatsList["aberrant dragonmark"] = {
    name: "Aberrant Dragonmark",
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
    type: "dragonmark",
    prerequisite: "Eberron Campaign Setting, No other Dragonmark",
    descriptionFull: "You have manifested a Dragonmark of Handling; determine its appearance. You gain the following benefits:\n \u2022 Wild Intuition. When you make an Intelligence (Nature) or Wisdom (Animal Handling) check, you can roll 1d4 and add the number rolled to the ability check.\n \u2022 Finder's Magic. You always have the Animal Friendship \u0026 Speak with Animals spells prepared. You can cast each once without a spell slot, and you regain the ability to cast them in that way when you finish a Long Rest. You can also cast these using any spell slots you have. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this feat).\n \u2022 Monstrous Connection. When you reach character level 3, you can target a Monstrosity when you cast Animal Friendship or Speak with Animals if the creature's Intelligence score is 3 or lower.\n \u2022 Spells of the Mark. If you have the Spellcasting or Pact Magic feature, the following spells are added to that feature's spell list: Command, Find Familiar, Beast Sense, Calm Emotions, Beacon of Hope, Conjure Animals, Aura of Life, Dominate Beast, \u0026 Awaken.",
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["XUA25EU", 14]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 0]
    ],
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
    source: [
        ["E:FA", 112]
    ],
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
    source: ["E:FA", 112],
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
    source: [
        ["E:FA", 112]
    ],
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
    source: [
        ["E:FA", 112]
    ],
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
    source: [
        ["E:FA", 112]
    ],
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
    source: [
        ["E:FA", 112]
    ],
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
    source: [
        ["E:FA", 112]
    ],
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
    source: [
        ["E:FA", 112]
    ],
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
    source: [
        ["XUA25EU", 9],
        ["XUA24A", 14],
        ["T", 23]
    ],
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
// Set the Artificer infusion list for Replicate Magic Item; Coded by TrackAtNite
function AddArtificerMI() {
    var artMi = [];

    function addToArtMi(itemName, level, choice = null) {
        // if(/glamerweave/i.test(itemName)) console.println("addToArtMi: " + itemName + ", " + level + ", " + choice);
        var key = choice || "default";

        if (!artMi[itemName]) artMi[itemName] = {};

        // Only add if not already present
        if (!artMi[itemName][key] || artMi[itemName][key][1] > level) {
            artMi[itemName][key] = [itemName, level, choice];
        }
    }

    function getRarityLevel(a, pKey, cKey = null) {
        if (typeof a !== "object") return;

        var cE2 = [
            "alchemy jug", "bag of holding", "cap of water breathing",
            "enhanced defense (armor)", "enhanced defense (shield)", "goggles of night",
            "manifold tool", "repeating shot", "returning weapon", "rope of climbing",
            "sending stones", ["shield, +1, +2, or +3", "+1 shield (uncommon)"], "wand of magic detection", "wand of secrets",
            ["wand of the war mage", "+1 to spell attacks (uncommon)"],
            ["weapon, +1, +2, or +3", "+1 weapon (uncommon)"],
            ["wraps of unarmed power", "+1 to unarmed attacks (uncommon)"]
        ];

        var uE6 = [
            "boots of elvenkind", "boots of the winding path", "cloak of elvenkind",
            "cloak of the manta ray", "eyes of charming", "eyes of minute seeing",
            "gloves of thievery", "lantern of revealing", "mind sharpener", "necklace of adaptation",
            "pipes of haunting", "radiant weapon", "repulsion shield", "ring of swimming",
            "ring of water walking", "sentinel shield", "spell-refueling ring", "wand of magic missiles",
            "wand of web", "weapon of warning"
        ];
		
		var rE6 = [
			["armor, +1, +2, or +3", "+1 ac bonus (rare)"],
			"dazzling weapon",
		];
		
        var uE10 = [
            "armor of resistance", "dagger of venom", "elven chain",
            "enhanced defense (armor)", "enhanced defense (shield)", "ring of feather falling",
            "ring of jumping", "ring of mind shielding", ["shield, +1, +2, or +3", "+2 shield (rare)"],
            ["wand of the war mage", "+2 to spell attacks (rare)"],
            ["weapon, +1, +2, or +3", "+2 weapon (rare)"],
            ["wraps of unarmed power", "+2 wraps of unarmed power (rare)"]
        ];

        var rE14 = [
            ["armor, +1, +2, or +3", "+2 ac bonus (very rare)"],
            "arrow-catching shield", "flame tongue", "ring of free action",
            "ring of protection", "ring of the ram"
        ];

        var pObj = pKey ? MagicItemsList[pKey] : null;
        var pNameLC = (pObj && pObj.name) ? pObj.name.toLowerCase() : "";
        var aNameLC = cKey ? cKey.toLowerCase() : (a.name ? a.name.toLowerCase() : "");
        var typeLC = a.type ? a.type.toLowerCase() : (pObj && pObj.type ? pObj.type.toLowerCase() : "");
        var aRarityLC = a.rarity ? a.rarity.toLowerCase() : (pObj && pObj.rarity ? pObj.rarity.toLowerCase() : "");

        // Define ordered rarity list buckets with levels
        var rarityLists = [{
                list: cE2,
                level: 2
            },
            {
                list: uE6,
                level: 6
            },
			{
				list: rE6,
				level: 6
			},
            {
                list: uE10,
                level: 10
            },
            {
                list: rE14,
                level: 14
            }
        ];

        // Unified search loop
        for (var r = 0; r < rarityLists.length; r++) {
            var rar = rarityLists[r];
            var list = rar.list;
            var level = rar.level;

            for (var i = 0; i < list.length; i++) {
                var entry = list[i];

                if (entry instanceof Array) {
                    var entryP = entry[0].toLowerCase();
                    var entryC = entry[1].toLowerCase();
                    if (entryP === pNameLC && entryC === aNameLC) {
                        return [entryP, level, entryC];
                    }
                } else {
                    var entryLC = entry.toLowerCase();
                    if (entryLC === pNameLC || entryLC === aNameLC) {
                        return [entryLC, level];
                    }
                }
            }
        }

        // Fallback logic

        // Common
        if (
            (aRarityLC === "common" && !/potion|scroll/.test(typeLC)) ||
            cE2.indexOf(pNameLC) !== -1 ||
            cE2.indexOf(aNameLC) !== -1
        ) {
            return [aNameLC, 2];
        }
        // Uncommon (non-wondrous)
        if (
            (aRarityLC === "uncommon" && !/armor|ring|wand|weapon|wondrous/.test(typeLC)) ||
            uE6.indexOf(pNameLC) !== -1 ||
            uE6.indexOf(aNameLC) !== -1
        ) {
            return [aNameLC, 6];
        }
        // Uncommon (wondrous or explicitly listed)
        if (
            (aRarityLC === "uncommon" && typeLC.indexOf("wondrous") !== -1) ||
            uE10.indexOf(pNameLC) !== -1 ||
            uE10.indexOf(aNameLC) !== -1
        ) {
            return [aNameLC, 10];
        }
        // Rare
        if (
            (aRarityLC === "rare" && typeLC.indexOf("wondrous") !== -1) ||
            rE14.indexOf(pNameLC) !== -1 ||
            rE14.indexOf(aNameLC) !== -1
        ) {
            return [aNameLC, 14];
        }

        return null;
    }

    for (var mi in MagicItemsList) {
        var aMI = MagicItemsList[mi];

        if ((aMI.type) && ((!aMI.rarity && aMI.choices) || aMI.rarity)) {
            if (!aMI.rarity && aMI.choices) {
                for (var choice of aMI.choices) {
                    var choiceNmLC = choice.toString().toLowerCase();
                    var aMIChoice = aMI[choiceNmLC];
                    // if(/glamerweave/i.test(mi)) console.println("Getting Choice Rarities for choice: " + choice + ", choiceNmLC: " + choiceNmLC);
                    var rL = getRarityLevel(aMIChoice, mi, choiceNmLC);
                    // if(/glamerweave/i.test(mi)) console.println("rL: " + rL);
                    if (!rL || !rL[0] || !rL[1]) continue;

                    addToArtMi(mi, rL[1], choiceNmLC);
                }
                continue;
            } else {
                if (aMI.rarity) {
                    // if(/glamerweave/i.test(mi)) console.println("Getting Item Rarity for: " + mi);
                    var rL = getRarityLevel(aMI, mi);
                    // if(/glamerweave/i.test(mi)) console.println("rL: " + rL);
                    if (!rL || !rL[0] || !rL[1]) continue;

                    addToArtMi(mi, rL[1]);
                }
            }
        }
    }

    var artObj = ClassList.artificer.features["replicate magic item"];
    if (!artObj.extrachoices) artObj.extrachoices = [];

    for (var itemName in artMi) {
        for (var cKey in artMi[itemName]) {
            var MI = artMi[itemName][cKey];
            var MI0 = MI[0];
            var MI1 = MI[1];
            var MI2 = MI[2];

            // if(/glamerweave/i.test(itemName)) console.println("MI0: " + MI0 + ", MI1: " + MI1 + ", MI2: " + MI2);

            var miObj = MagicItemsList[MI0];
            if (!miObj) continue;

            if (MI2 && miObj[MI2]) {
                miObj = {
                    name: miObj[MI2].name ? miObj[MI2].name : (miObj.name + " [" + MI2.capitalize() + "]"),
                    rarity: miObj[MI2].rarity ? miObj[MI2].rarity : miObj.rarity,
                    source: miObj[MI2].source ? miObj[MI2].source : miObj.source,
                    attunement: miObj[MI2].attunement !== undefined ? miObj[MI2].attunement : miObj.attunement
                };
            }

            var theItem = miObj.name + (MI1 ? " (prereq: level " + MI1 + " artificer)" : "");
            var theItemLC = theItem.toLowerCase().trim();

            if (!artObj[theItemLC]) {
                var submenuLabel = "Replicate " + (miObj.rarity ? miObj.rarity : "Unknown") + " Magic Item (prereq: level " + MI1 + " artificer)";
                var submenuRange = getLetterRange(miObj.name.toString(), ["A-F", "G-Q", "R-Z"]);

                artObj[theItemLC] = {
                    name: miObj.name,
                    description: "",
                    source: miObj.source,
                    magicitemsAdd: [miObj.name],
                    additional: miObj.attunement ? "requires attunement" : undefined,
                    prereqeval: MI1 && MI1 > 2 ? ClassList.artificer["prereqLvl" + MI1] : undefined,
                    submenu: submenuLabel + " [" + submenuRange + "]",
                };
                artObj.extrachoices.push(theItem);
            }
        }
    }
}
RunFunctionAtEnd(function() {
    var EFA_Artificer_Subclass_Armorer = legacySubClassRefactor("artificer", "armorer", {
        regExpSearch: /^(?=.*armou?rer)(?!.*wizard).*$/i,
        subname: "Armorer",
        fullname: "Armorer",
        source: [
            ["E:FA", 0]
        ],
        replaces: "armorer",
        spellcastingExtra: ["magic missile", "thunderwave", "mirror image", "shatter", "hypnotic pattern", "lightning bolt", "fire shield", "greater invisibility", "passwall", "wall of force"],
        attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        features: {
            "subclassfeature3": {
                name: "Tools of the Trade",
                source: [
                    ["E:FA", 0]
                ],
                minlevel: 3,
                description: " [proficient with Heavy Armor & Smith's Tools]\n   I can craft nonmagical & magical armor in half the normal time.",
                toolProfs: ["Smith's tools", 1],
                armorProfs: [false, false, true, false],
            },
            "subclassfeature3.1": {
                name: "Arcane Armor",
                source: [
                    ["E:FA", 0]
                ],
                minlevel: 3,
                description: " [reverts back if I die or don another armor]" + desc([
                    "As a Magic action, I can use Smith's Tools to turn an armor I'm wearing into Arcane Armor",
                    "As a Utilize action, I can don or doff it; It can't be removed against my will",
                    "I ignore the Strength requirement of Arcane Armor and can use it as a Spellcasting Focus"
                ]),
                action: [
                    ["action", " (create/don/doff)"]
                ]
            },
            "subclassfeature3.2": {
                name: "Armor Model",
                source: [
                    ["E:FA", 0]
                ],
                minlevel: 3,
                description: desc([
                    "When I finish a rest, I can use Smith's Tools to change the model of my Arcane Armor",
                    'Select a model using the "Choose Feature" button; See "Notes" page for features of each'
                ]),
                additional: "also see notes page",
                toNotesPage: [{
                    name: "Arcane Armor Model Features",
                    note: desc([
                        "I can customize my Arcane Armor to the Dreadnaught, Guardian, or Infiltrator model whenever I finish a Short or Long Rest, provided I have Smith's Tools in hand.",
                        "Each model includes a special weapon. When I attack with that weapon, I can use my Intelligence modifier, instead of Strength or Dexterity, for the attack and damage rolls."
                    ])
                }, {
                    name: "Dreadnaught Arcane Armor",
                    popupName: "Dreadnaught Arcane Armor Features",
                    note: " You design your armor to become a towering juggernaut in battle." + desc([
                        "\u2022 Force Demolisher: An arcane wrecking ball or sledgehammer projects from your armor. It counts as a Simple Melee weapon with the Reach property that deals 1d10 Force damage on a hit. If I hit a creature that is at least one size smaller than myself with the demolisher, I can push the creature up to 10 feet straight away from myself or pull the creature up to 10 feet toward myself.",
                        "\u2022 Giant Stature: As a Bonus Action, I transform and enlarge my armor for 1 minute. For the duration, my reach increases by 5 feet, and if I am smaller than Large, I become Large, along with anything I am wearing. If there isn't enough room for me to increase my size, my size doesn't change. I can use this Bonus Action a number of times equal to my Intelligence modifier (minimum of once). I regain all expended uses when I finish a Long Rest.",
                    ]),
                    amendTo: "Arcane Armor Model Features"
                }, {
                    name: "Guardian Arcane Armor",
                    popupName: "Guardian Arcane Armor Features",
                    note: " You design your armor to be in the front line of conflict." + desc([
                        "\u2022 Thunder Pulse: I can discharge concussive blasts with strikes from my armor. It counts as a Simple Melee weapon and it deals 1d8 Thunder damage on a hit. A creature hit by the pulse has Disadvantage on attack rolls against targets other than me until the start of my next turn.",
                        "\u2022 Defensive Field: As a Bonus Action while I am Bloodied, I can gain Temporary Hit Points equal to my Artificer level, replacing any Temporary Hit Points I already have. I lose these Temporary Hit Points if I doff the armor.",
                    ]),
                    amendTo: "Arcane Armor Model Features"
                }, {
                    name: "Infiltrator Arcane Armor",
                    popupName: "Infiltrator Arcane Armor Features",
                    note: " You customize your armor for subtle undertakings." + desc([
                        "\u2022 Lightning Launcher: A gemlike node appears on my armor, from which I can shoot bolts of lightning. It counts as a Simple Ranged weapon, with a normal range of 90 ft and a long range of 300 ft. It deals 1d6 Lightning damage on a hit. Once on each of my turns when I hit a creature with it, I can deal an extra 1d6 Lightning damage to that target.",
                        "\u2022 Powered Steps: My Speed increases by 5 feet.",
                        "\u2022 Dampening Field: I have Advantage on Dexterity (Stealth) checks. If the armor normally imposes Disadvantage on such checks, the Advantage and Disadvantage cancel each other, as normal."
                    ]),
                    amendTo: "Arcane Armor Model Features"
                }],
                choices: [],
                choiceDependencies: [{
                    feature: "subclassfeature15",
                    choiceAttribute: true
                }],
                weaponOptions: [{
                    regExpSearch: /^(?=.*force)(?=.*demolisher).*$/i,
                    name: "Force Demolisher",
                    source: [
                        ["E:FA", 8]
                    ],
                    ability: 4,
                    type: "Simple",
                    damage: [1, 10, "force"],
                    range: "Melee",
                    description: "Target hit (only if 1+ size smaller than me) can be pushed or pulled up to 10 ft straight away/towards me",
                    abilitytodamage: true,
                    monkweapon: true
                }, {
                    regExpSearch: /^(?=.*thunder)(?=.*pulse).*$/i,
                    name: "Thunder Pulse",
                    source: [
                        ["E:FA", 8]
                    ],
                    ability: 4,
                    type: "Simple",
                    damage: [1, 8, "thunder"],
                    range: "Melee",
                    description: "Target hit Disadv. on attacks vs. others than me until my next turn starts",
                    abilitytodamage: true,
                    monkweapon: true
                }, {
                    regExpSearch: /^(?=.*lightning)(?=.*launcher).*$/i,
                    name: "Lightning Launcher",
                    source: [
                        ["E:FA", 8]
                    ],
                    ability: 4,
                    type: "Simple",
                    damage: [1, 6, "lightning"],
                    range: "90/300 ft",
                    description: "Once per turn on hit, +1d6 Lightning damage",
                    abilitytodamage: true
                }],
                // Do this in the parent object, so that it is always visible and people printing the sheet can more easily switch between the three models
                // Also, the armor model can be changed on a short rest, but the limited feature only resets on a long rest, so shouldn't be removed
                action: [
                    ["bonus action", "Defensive Field (Guardian Model)"],
                    ["bonus action", "Giant Stature (Dreadnaught Model)"]
                ],
                extraLimitedFeatures: [{
                    name: "Giant Stature (Dreadnaught Model)",
                    usages: "Intelligence modifier per ",
                    usagescalc: "event.value = Math.max(1, What('Int Mod'));",
                    recovery: "long rest"
                }]
            },
            "subclassfeature9": {
                name: "Improved Armorer",
                source: [
                    ["E:FA", 0]
                ],
                minlevel: 9,
                description: desc([
                    "I learn one additional arcane plan for my Replicate Magic Item feature, & it must be in the Armor category",
                    "If I replace that arcane plan, I must replace it with another Armor plan",
                    "Additionally, I can create one additional item with that feature, and it must also be in the Armor category",
                    "Lastly, I gain a +1 bonus to atk and dmg rolls with my Arcane Armor Weapon",
                ]),
                additional: "+1 replicated item, must be in Armor category"
            },
            "subclassfeature15": {
                name: "Perfected Armor",
                source: [
                    ["E:FA", 0]
                ],
                minlevel: 15,
                description: desc([
                    'My armor gets additional features, based on the model; Use "Choose Features" to select it',
                    "The Dreadnaught gets an increased attack range, can become Huge or Large, and Adv on Str checks and saves while enlarged",
                    "The Guardian gets the ability to pull a creature closer as a Reaction and make an attack",
                    "The Infiltrator gets an upgrade to its lightning launcher weapon attack and the ability to fly"
                ]),
                calcChanges: {
                    atkCalc: [
                        function(fields, v, output) {
                            if (/\bforce demolisher\b/i.test(v.WeaponText) && classes.known.artificer.level >= 15) {
                                output.die = output.die.replace('1d10', '2d6');
                            }
                            if (/\bthunder pulse\b/i.test(v.WeaponText) && classes.known.artificer.level >= 15) {
                                output.die = output.die.replace('1d8', '1d10');
                            }
                            if (/\blightning launcher\b/i.test(v.WeaponText) && classes.known.artificer.level >= 15) {
                                output.die = output.die.replace('1d6', '2d6');
                            }
                        },
                        "The Damage Die for the weapon given by my Arcane Armor model increases."
                    ],
                },
                toNotesPage: [{
                    name: "Dreadnaught Perfected Armor Features",
                    note: desc([
                        "The damage die of my Force Demolisher increases to 2d6 Bludgeoning damage.",
                        "In addition, when I use my Giant Stature, my reach increases by 10 feet, my size can increase to Large or Huge (my choice), and I have Advantage on Strength checks and Strength saving throws for the duration.",
                    ]),
                    amendTo: "Arcane Armor Model Features"
                }, {
                    name: "Guardian Perfected Armor Features",
                    note: desc([
                        "The damage die of my Thunder Pulse increases to 1d10 Thunder damage.",
                        "In addition, when a Huge or smaller creature I can see ends its turn within 30 feet of me, I can take a Reaction to magically force that creature to make a Strength saving throw against my spell save DC. On a failed save, I pull the creature up to 25 feet directly toward me to an unoccupied space.If I pull the target to a space within 5 feet of me, I can make a melee weapon attack against it as part of this Reaction.",
                        "I can use this Reaction a number of times equal to my Intelligence modifier. I regain all expended uses of it when I finish a long rest."
                    ]),
                    amendTo: "Arcane Armor Model Features"
                }, {
                    name: "Infiltrator Perfected Armor Features",
                    note: desc([
                        "The damage die of my Lightning Launcher increases to 2d6 Lightning damage. Any creature that takes Lightning damage from my Lightning Launcher glimmers with magical light until the start of my next turn. The glimmering creature sheds Dim Light in a 5-foot radius, and it has Disadvantage on attack rolls against me, as the light jolts it if it attacks me.",
                        "Additionally, as a Bonus Action, I can gain a Fly Speed equal to twice my Speed until the end of the current turn. I can take this Bonus Action a number of times equal to my Intelligence modifier (minimum of once), and you regain all expended uses when I finish a Long Rest."
                    ]),
                    amendTo: "Arcane Armor Model Features"
                }],
                "dreadnaught": {
                    name: "Perfected Armor: Dreadnaught",
                    description: desc([
                        "When I use my Giant Stature, my range increases by 10 ft, I can become Huge or Large (my choice),",
                        "  and I gain Adv on Str checks and saves while in Giant Stature.",
                    ])
                },
                "guardian": {
                    name: "Perfected Armor: Guardian",
                    description: " [Intelligence modifier per Long Rest]" + desc([
                        "As a Reaction when a creature I can see ends its turn in 30 ft, I have it make a Str save",
                        "If it is Huge or smaller and fails, I pull it up to 30 ft towards me to an unoccupied space",
                        "If I pull it within 5 ft, I can make a melee weapon attack vs. it as part of this Reaction"
                    ])
                },
                "infiltrator": {
                    name: "Perfected Armor: Infiltrator",
                    description: " [Intelligence modifier per Long Rest]" + desc([
                        "Those hit by my Lightning Launcher shed 5-ft radius dim light until my next turn starts",
                        "The light gives the target Disadvantage on attack rolls made against me",
                        "As Bns gain Fly Speed equal to twice Speed till end of turn",
                    ])
                },
                // Do these in the parent object, so that they are always visible and people printing the sheet can more easily switch between the three models
                // Also, the armor model can be changed on a short rest, but the limited feature only resets on a long rest, so shouldn't be removed
                action: [
                    ["reaction", "Perfected Armor: Guardian"],
                    ["bonus action", "Perfected Armor: Infiltrator"]
                ],
                extraLimitedFeatures: [{
                    name: "Perfected Armor: Guardian",
                    usages: "Intelligence modifier per ",
                    usagescalc: "event.value = Math.max(1, What('Int Mod'));",
                    recovery: "long rest"
                }, {
                    name: "Perfected Armor: Infiltrator",
                    usages: "Intelligence modifier per ",
                    usagescalc: "event.value = Math.max(1, What('Int Mod'));",
                    recovery: "long rest"
                }]
            },
        },
    });
    var itsFea = ClassSubList["artificer-armorer"].features["subclassfeature3.2"];
    var dreadnaughtTxt = desc([
        "An arcane wrecking ball or sledgehammer projects from my armor that can push/pull a target at least 1 size",
        "smaller than me up to 10 ft. This Armor Flail is a Simple Melee weapon with Reach. Int mod",
        "times per Long Rest, as a Bonus Action, I can enlarge my armor for 1 minute. My reach increases",
        "by 5 ft and I become Large if I am currently smaller than Large \u0026 there is enough room."
    ]);
    var guardianTxt = desc([
        "I can discharge concussive blasts, Simple Melee weapons that distract those hit by it.",
        "As a Bonus Action while Bloodied, I can activate a defensive shield to gain my Artificer level in Temp HP."
    ]);
    var guardianAdditional = levels.map(function(n) {
        return n + " Temp HP as Bonus Action while Bloodied";
    });
    var infiltratorTxt = desc([
        "+5 ft Speed; Gemlike node in fist/chest is a Simple Ranged weapon, Lightning Launcher.",
        "It gives me Advantage on Dexterity (Stealth) checks."
    ]);
    var prereqFunc = function(v) {
        var sParsed = ParseArmor(v.choice.replace(/(Dreadnaught|Guardian|Infiltrator) arcane /i, ''));
        return sParsed && testSource(sParsed, ArmourList[sParsed], "armorExcl") ? "skip" : true;
    };
    for (var armor in ArmourList) {
        var anArm = ArmourList[armor];
        if (anArm.isMagicArmor || !anArm.weight || (CurrentVars.extraArmour && CurrentVars.extraArmour[armor])) continue;
        // Add the Dreadnaught variant of the armor
        var dArmName = "Dreadnaught Arcane " + anArm.name;
        itsFea[dArmName.toLowerCase()] = {
            name: (typePF ? "Armor " : "") + "Model: Dreadnaught " + anArm.name,
            submenu: "Dreadnaught Arcane Armor",
            description: dreadnaughtTxt,
            armorAdd: dArmName,
            weaponsAdd: ["Force Demolisher"],
            prereqeval: prereqFunc,
            dependentChoices: "dreadnaught"
        };
        // Add the Guardian variant of the armor
        var gArmName = "Guardian Arcane " + anArm.name;
        itsFea[gArmName.toLowerCase()] = {
            name: (typePF ? "Armor " : "") + "Model: Guardian " + anArm.name,
            submenu: "Guardian Arcane Armor",
            description: guardianTxt,
            additional: guardianAdditional,
            armorAdd: gArmName,
            weaponsAdd: ["Thunder Pulse"],
            prereqeval: prereqFunc,
            dependentChoices: "guardian"
        };
        // And now add the Infiltrator variant of the armor
        var iArmName = "Infiltrator Arcane " + anArm.name;
        itsFea[iArmName.toLowerCase()] = {
            name: "Armor Model: Infiltrator " + anArm.name,
            submenu: "Infiltrator Arcane Armor",
            description: infiltratorTxt + (anArm.stealthdis ? ", cancelling out the disadv. it imposes" : ""),
            speed: {
                walk: {
                    spd: "+5",
                    enc: "+5"
                }
            },
            armorAdd: iArmName,
            weaponsAdd: ["Lightning Launcher"],
            prereqeval: prereqFunc,
            advantages: [
                ["Stealth", true]
            ],
            dependentChoices: "infiltrator"
        };
        // Lastly push all three choices to the array
        itsFea.choices.push(dArmName, gArmName, iArmName);
    }
});
// Delete the old Infuse Item feature, this is replaced with the Replicate Magic Item feature; Coded by TrackAtNite
RunFunctionAtEnd(function() {
    if(ClassList.artificer.features["infuse item"]) {
        delete ClassList.artificer.features["infuse item"]; // remove the infuse item feature
    } 
	else {
        ClassList.artificer.features["infuse item"].minlevel = 1000; // set the minimum level to 1000 which effectively means that it will never appear til level 1000. 
    }
    // moved to the outside loop, always add artificer MI
    AddArtificerMI(); // persists after reload
});
