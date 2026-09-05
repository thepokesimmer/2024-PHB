var iFileName = "Spell Creatures.js";
RequiredSheetVersion("13.2.3", 26);
SourceList.P24 = {
    name: "2024 Player's Handbook",
    abbreviation: "P24",
    abbreviationSpellsheet: "P4",
    group: "Core Sources",
    url: "https://marketplace.dndbeyond.com/core-rules/3709000?pid=DB3709000",
    date: "2024/09/17",
};
CompanionList["spell_creatures"] = {
    name: "Spell Creatures",
    nameMenu: "Spell Creatures (Creatures Created/Summoned by a Spell)",
    nameOrigin: "Spell Creatures Created by spell effects of conjuration or transmutation spells",
    source: [
        ["P24", 234]
    ],
        notes: [{
        name: "Creature Recalculation",
        description: [
            "If I update my spellcasting mod, or are multiclassing, and my secondary class has a higher spellcasting mod, I will need to reselect this companion to update its attack to hit."
        ].join("\n   "),
        joinString: ", "
    }],
};
for (var i = 2; i <= 9; i++) {
    // The steed only gains a Fly Speed if cast with a level 4+ spell slot
    var steedSpeed = i >= 4 ? "60 ft, Fly 60 ft" : "60 ft";
    
    CreatureList["otherworldly steed (lvl " + i + ")"] = {
        name: "Otherworldly Steed (lvl " + i + ")",
        regExpSearch: new RegExp("^(?=.*otherworldly)(?=.*steed)(?=.*" + i + ").*$", "i"),
        source: [["P24", 273]],
        size: 2, // Large
        type: "Celestial, Fey, or Fiend",
        alignment: "Neutral",
        companion: "spell_creatures",
        companionApply: "spell_creatures",
        spell: "find steed",
        ac: 10 + i, // Base 10 + Spell Level
        hp: 5 + (10 * i), // Base 5 + 10 per Spell Level
        hd: [i, 10], // d10s equal to the Spell Level
        speed: steedSpeed,
        scores: [18, 12, 14, 6, 12, 8],
        passivePerception: 11,
        languages: "Telepathy 1 mile (works only with you)",
        challengeRating: "0",
        proficiencyBonus: 0,
        proficiencyBonusLinked: true,
        attacksAction: 1,
        traits: [{
            name: "Life Bond",
            description: "When I regain Hit Points from a level 1+ spell, the steed regains the same number of Hit Points if I'm within 5 feet of it."
        }],
        actions: [{
            name: "Fell Glare (Fiend Only, Bonus Action)",
            description: "1/Long Rest. One creature within 60 ft the steed can see makes a Wisdom save vs my spell save DC. Failure: Frightened until the end of my next turn."
        }, {
            name: "Fey Step (Fey Only, Bonus Action)",
            description: "1/Long Rest. The steed teleports, along with its rider, to an unoccupied space of my choice up to 60 ft away from itself."
        }, {
            name: "Healing Touch (Celestial Only, Bonus Action)",
            description: "1/Long Rest. One creature within 5 ft of the steed regains " + i + " + 2d8 Hit Points."
        }],
        attacks: [{
            name: "Otherworldly Slam",
            ability: 1, // Strength
            damage: [1, 8, "Rad/Psy/Nec"],
            range: "Melee (5 ft)",
            modifiers: ["max(oInt|oWis|oCha)-Str", i], // Replaces Str mod with Spellcasting mod for attack, adds spell level to damage
            abilitytodamage: true,
            description: "Radiant (Celestial), Psychic (Fey), or Necrotic (Fiend) dmg"
        }]
    };
}
for (var i = 4; i <= 9; i++) {
    var multiAtks = Math.floor(i / 2);
    var insectHP = 30 + ((i - 4) * 10);
    
    CreatureList["giant insect (lvl " + i + ")"] = {
        name: "Giant Insect (lvl " + i + ")",
        regExpSearch: new RegExp("^(?=.*giant)(?=.*insect)(?=.*" + i + ").*$", "i"),
        source: [["P24", 279]],
        size: 2, // Large
        type: "Beast",
        alignment: "Unaligned",
        companion: "spell_creatures",
        companionApply: "spell_creatures",
        spell: "giant insect",
        ac: 11 + i, // Base 11 + Spell Level
        hp: insectHP,
        hd: [0, 0],
        speed: "40 ft, Climb 40 ft, Fly 40 ft (Wasp only)",
        scores: [17, 13, 15, 4, 14, 3],
        senses: "Darkvision 60 ft",
        passivePerception: 12,
        languages: "Understands the languages you know",
        challengeRating: "0",
        proficiencyBonus: 0,
        proficiencyBonusLinked: true,
        attacksAction: multiAtks,
        traits: [{
            name: "Spider Climb",
            description: "The insect can climb difficult surfaces, including along ceilings, without needing to make an ability check."
        }],
        actions: [{
            name: "Multiattack",
            description: "The insect makes " + multiAtks + " attack" + (multiAtks > 1 ? "s" : "") + "."
        }, {
            name: "Venomous Spew (Centipede Only, Bonus Action)",
            description: "One creature the insect can see within 10 ft must succeed on a Constitution save against my spell save DC. Failure: The target has the Poisoned condition until the start of the insect's next turn."
        }],
        attacks: [{
            name: "Poison Jab",
            ability: 1, // Strength (+3) is used to perfectly hit the '3 + spell level' damage mod
            damage: [1, 6, "piercing"],
            range: "Melee (10 ft)",
            modifiers: ["max(oInt|oWis|oCha)-Str", i], // Replaces Str mod with Spellcasting mod for attack, adds spell level to damage
            abilitytodamage: true,
            description: "Plus 1d4 Poison damage"
        }, {
            name: "Web Bolt (Spider Only)",
            ability: 1, // Strength (+3) is used to perfectly hit the '3 + spell level' damage mod
            damage: [1, 10, "bludgeoning"],
            range: "60 ft",
            modifiers: ["max(oInt|oWis|oCha)-Str", i], 
            abilitytodamage: true,
            description: "Target's Speed is reduced to 0 until the start of the insect's next turn"
        }]
    };
}
for (var i = 4; i <= 9; i++) {
    var multiAtks = Math.floor(i / 2);
    var abHP = 40 + ((i - 4) * 10);
    
    CreatureList["aberrant spirit (lvl " + i + ")"] = {
        name: "Aberrant Spirit (lvl " + i + ")",
        regExpSearch: new RegExp("^(?=.*aberrant)(?=.*spirit)(?=.*" + i + ").*$", "i"),
        source: [["P24", 322]],
        size: 3, // Medium
        type: "Aberration",
        alignment: "Neutral",
        companion: "spell_creatures",
        companionApply: "spell_creatures",
        spell: "summon aberration",
        ac: 11 + i, // Base 11 + Spell Level
        hp: abHP,
        hd: [0, 0],
        speed: "30 ft, Fly 30 ft (hover; Beholderkin only)",
        scores: [16, 10, 15, 16, 10, 6],
        immunities: "Psychic",
        senses: "Darkvision 60 ft",
        passivePerception: 10,
        languages: "Deep Speech, understands the languages you know",
        challengeRating: "0",
        proficiencyBonus: 0,
        proficiencyBonusLinked: true,
        attacksAction: multiAtks,
        traits: [{
            name: "Regeneration (Slaad Only)",
            description: "The spirit regains 5 Hit Points at the start of its turn if it has at least 1 Hit Point."
        }, {
            name: "Whispering Aura (Mind Flayer Only)",
            description: "At the start of its turn, if not Incapacitated, the spirit emits psionic energy. Each creature (other than me) within 5 ft makes a Wisdom save vs my spell save DC. Failure: 2d6 Psychic damage."
        }],
        actions: [{
            name: "Multiattack",
            description: "The spirit makes " + multiAtks + " attack" + (multiAtks > 1 ? "s" : "") + "."
        }],
        attacks: [{
            name: "Claw (Slaad)",
            ability: 1, // Strength
            damage: [1, 10, "slashing"],
            range: "Melee (5 ft)",
            modifiers: ["max(oInt|oWis|oCha)-Str", i], // Replaces Str mod with Spellcasting mod for attack, adds spell level to damage
            abilitytodamage: true,
            description: "Target can't regain Hit Points until the start of the spirit's next turn"
        }, {
            name: "Eye Ray (Beholderkin)",
            ability: 4, // Intelligence
            damage: [1, 8, "psychic"],
            range: "150 ft",
            modifiers: ["max(oInt|oWis|oCha)-Int", i], // Replaces Int mod with Spellcasting mod for attack, adds spell level to damage
            abilitytodamage: true,
            description: ""
        }, {
            name: "Psychic Slam (Mind Flayer)",
            ability: 4, // Intelligence
            damage: [1, 8, "psychic"],
            range: "Melee (5 ft)",
            modifiers: ["max(oInt|oWis|oCha)-Int", i], 
            abilitytodamage: true,
            description: ""
        }]
    };
}
for (var i = 2; i <= 9; i++) {
    var multiAtks = Math.floor(i / 2);
    
    // Bestial Spirit (Air)
    CreatureList["bestial spirit (air, lvl " + i + ")"] = {
        name: "Bestial Spirit - Air (lvl " + i + ")",
        regExpSearch: new RegExp("^(?=.*bestial)(?=.*spirit)(?=.*air)(?=.*" + i + ").*$", "i"),
        source: [["P24", 323]],
        size: 4, // Small
        type: "Beast",
        alignment: "Neutral",
        companion: "spell_creatures",
        companionApply: "spell_creatures",
        spell: "summon beast",
        ac: 11 + i, // Base 11 + Spell Level
        hp: 20 + ((i - 2) * 5), // Base 20 + 5 per level above 2
        hd: [0, 0],
        speed: "30 ft, Fly 60 ft",
        scores: [18, 11, 16, 4, 14, 5],
        senses: "Darkvision 60 ft",
        passivePerception: 12,
        languages: "Understands the languages you know",
        challengeRating: "0",
        proficiencyBonus: 0,
        proficiencyBonusLinked: true,
        attacksAction: multiAtks,
        traits: [{
            name: "Flyby",
            description: "The spirit doesn't provoke Opportunity Attacks when it flies out of an enemy's reach."
        }],
        actions: [{
            name: "Multiattack",
            description: "The spirit makes " + multiAtks + " Rend attack" + (multiAtks > 1 ? "s" : "") + "."
        }],
        attacks: [{
            name: "Rend",
            ability: 1, // Strength (+4) is used to perfectly hit the '4 + spell level' damage mod
            damage: [1, 8, "piercing"],
            range: "Melee (5 ft)",
            modifiers: ["max(oInt|oWis|oCha)-Str", i], // Replaces Str mod with Spellcasting mod for attack, adds spell level to damage
            abilitytodamage: true,
            description: ""
        }]
    };

    // Bestial Spirit (Land/Water)
    CreatureList["bestial spirit (land/water, lvl " + i + ")"] = {
        name: "Bestial Spirit - Land/Water (lvl " + i + ")",
        regExpSearch: new RegExp("^(?=.*bestial)(?=.*spirit)(?=.*(land|water))(?=.*" + i + ").*$", "i"),
        source: [["P24", 323]],
        size: 4, // Small
        type: "Beast",
        alignment: "Neutral",
        companion: "spell_creatures",
        companionApply: "spell_creatures",
        spell: "summon beast",
        ac: 11 + i, // Base 11 + Spell Level
        hp: 30 + ((i - 2) * 5), // Base 30 + 5 per level above 2
        hd: [0, 0],
        speed: "30 ft, Climb 30 ft (Land only), Swim 30 ft (Water only)",
        scores: [18, 11, 16, 4, 14, 5],
        senses: "Darkvision 60 ft",
        passivePerception: 12,
        languages: "Understands the languages you know",
        challengeRating: "0",
        proficiencyBonus: 0,
        proficiencyBonusLinked: true,
        attacksAction: multiAtks,
        traits: [{
            name: "Pack Tactics",
            description: "The spirit has Advantage on an attack roll against a creature if at least one of the spirit's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
        }, {
            name: "Water Breathing (Water Only)",
            description: "The spirit can breathe only underwater."
        }],
        actions: [{
            name: "Multiattack",
            description: "The spirit makes " + multiAtks + " Rend attack" + (multiAtks > 1 ? "s" : "") + "."
        }],
        attacks: [{
            name: "Rend",
            ability: 1, // Strength (+4) is used to perfectly hit the '4 + spell level' damage mod
            damage: [1, 8, "piercing"],
            range: "Melee (5 ft)",
            modifiers: ["max(oInt|oWis|oCha)-Str", i], 
            abilitytodamage: true,
            description: ""
        }]
    };
}
for (var i = 5; i <= 9; i++) {
    var multiAtks = Math.floor(i / 2);
    var celHP = 40 + ((i - 5) * 10);
    
    // Celestial Spirit (Avenger)
    CreatureList["celestial spirit (avenger, lvl " + i + ")"] = {
        name: "Celestial Spirit - Avenger (lvl " + i + ")",
        regExpSearch: new RegExp("^(?=.*celestial)(?=.*spirit)(?=.*avenger)(?=.*" + i + ").*$", "i"),
        source: [["P24", 323]],
        size: 2, // Large
        type: "Celestial",
        alignment: "Neutral",
        companion: "spell_creatures",
        companionApply: "spell_creatures",
        spell: "summon celestial",
        ac: 11 + i, // Base 11 + Spell Level
        hp: celHP,
        hd: [0, 0],
        speed: "30 ft, Fly 40 ft",
        scores: [16, 14, 16, 10, 14, 16],
        resistances: "Radiant",
        condition_immunities: "Charmed, Frightened",
        senses: "Darkvision 60 ft",
        passivePerception: 12,
        languages: "Celestial, understands the languages you know",
        challengeRating: "0",
        proficiencyBonus: 0,
        proficiencyBonusLinked: true,
        attacksAction: multiAtks,
        actions: [{
            name: "Multiattack",
            description: "The spirit makes " + multiAtks + " attack" + (multiAtks > 1 ? "s" : "") + "."
        }, {
            name: "Healing Touch (1/Day)",
            description: "The spirit touches another creature. The target regains " + i + " + 2d8 Hit Points."
        }],
        attacks: [{
            name: "Radiant Bow",
            ability: 2, // Dexterity (+2) is used to perfectly hit the '2 + spell level' damage mod
            damage: [2, 6, "radiant"],
            range: "600 ft",
            modifiers: ["max(oInt|oWis|oCha)-Dex", i], // Replaces Dex mod with Spellcasting mod for attack, adds spell level to damage
            abilitytodamage: true,
            description: ""
        }]
    };

    // Celestial Spirit (Defender)
    CreatureList["celestial spirit (defender, lvl " + i + ")"] = {
        name: "Celestial Spirit - Defender (lvl " + i + ")",
        regExpSearch: new RegExp("^(?=.*celestial)(?=.*spirit)(?=.*defender)(?=.*" + i + ").*$", "i"),
        source: [["P24", 323]],
        size: 2, // Large
        type: "Celestial",
        alignment: "Neutral",
        companion: "spell_creatures",
        companionApply: "spell_creatures",
        spell: "summon celestial",
        ac: 13 + i, // Base 11 + Spell Level + 2 (Defender only)
        hp: celHP,
        hd: [0, 0],
        speed: "30 ft, Fly 40 ft",
        scores: [16, 14, 16, 10, 14, 16],
        resistances: "Radiant",
        condition_immunities: "Charmed, Frightened",
        senses: "Darkvision 60 ft",
        passivePerception: 12,
        languages: "Celestial, understands the languages you know",
        challengeRating: "0",
        proficiencyBonus: 0,
        proficiencyBonusLinked: true,
        attacksAction: multiAtks,
        actions: [{
            name: "Multiattack",
            description: "The spirit makes " + multiAtks + " attack" + (multiAtks > 1 ? "s" : "") + "."
        }, {
            name: "Healing Touch (1/Day)",
            description: "The spirit touches another creature. The target regains " + i + " + 2d8 Hit Points."
        }],
        attacks: [{
            name: "Radiant Mace",
            ability: 1, // Strength (+3) is used to perfectly hit the '3 + spell level' damage mod
            damage: [1, 10, "radiant"],
            range: "Melee (5 ft)",
            modifiers: ["max(oInt|oWis|oCha)-Str", i], // Replaces Str mod with Spellcasting mod for attack, adds spell level to damage
            abilitytodamage: true,
            description: "The spirit can choose itself or 1 creature it can see within 10 ft of target to gain 1d10 Temp HP"
        }]
    };
}
for (var i = 4; i <= 9; i++) {
    var multiAtks = Math.floor(i / 2);
    var conHP = 40 + ((i - 4) * 15);
    
    CreatureList["construct spirit (lvl " + i + ")"] = {
        name: "Construct Spirit (lvl " + i + ")",
        regExpSearch: new RegExp("^(?=.*construct)(?=.*spirit)(?=.*" + i + ").*$", "i"),
        source: [["P24", 324]],
        size: 3, // Medium
        type: "Construct",
        alignment: "Neutral",
        companion: "spell_creatures",
        companionApply: "spell_creatures",
        spell: "summon construct",
        ac: 13 + i, // Base 13 + Spell Level
        hp: conHP, // Base 40 + 15 per level above 4
        hd: [0, 0],
        speed: "30 ft",
        scores: [18, 10, 18, 14, 11, 5],
        resistances: "Poison",
        condition_immunities: "Charmed, Exhaustion, Frightened, Paralyzed, Poisoned",
        senses: "Darkvision 60 ft",
        passivePerception: 10,
        languages: "Understands the languages you know",
        challengeRating: "0",
        proficiencyBonus: 0,
        proficiencyBonusLinked: true,
        attacksAction: multiAtks,
        traits: [{
            name: "Heated Body (Metal Only)",
            description: "A creature that hits the spirit with a melee attack or that starts its turn in a grapple with the spirit takes 1d10 Fire damage."
        }, {
            name: "Stony Lethargy (Stone Only)",
            description: "When a creature starts its turn within 10 ft of the spirit, it can target it with magical energy if it can see it. Wisdom save vs my spell save DC. Failure: Until the start of its next turn, target can't make Opportunity Attacks and Speed is halved."
        }],
        actions: [{
            name: "Multiattack",
            description: "The spirit makes " + multiAtks + " Slam attack" + (multiAtks > 1 ? "s" : "") + "."
        }, {
            name: "Berserk Lashing (Clay Only, Reaction)",
            description: "Trigger: The spirit takes damage from a creature. Response: The spirit makes a Slam attack against that creature if possible, or the spirit moves up to half its Speed toward that creature without provoking Opportunity Attacks."
        }],
        attacks: [{
            name: "Slam",
            ability: 1, // Strength (+4) is used to perfectly hit the '4 + spell level' damage mod
            damage: [1, 8, "bludgeoning"],
            range: "Melee (5 ft)",
            modifiers: ["max(oInt|oWis|oCha)-Str", i], // Replaces Str mod with Spellcasting mod for attack, adds spell level to damage
            abilitytodamage: true,
            description: ""
        }]
    };
}
for (var i = 5; i <= 9; i++) {
    var multiAtks = Math.floor(i / 2);
    var draconicHP = 50 + ((i - 5) * 10);
    
    CreatureList["draconic spirit (lvl " + i + ")"] = {
        name: "Draconic Spirit (lvl " + i + ")",
        regExpSearch: new RegExp("^(?=.*draconic)(?=.*spirit)(?=.*" + i + ").*$", "i"),
        source: [["P24", 325]],
        size: 2, // Large
        type: "Dragon",
        alignment: "Neutral",
        companion: "spell_creatures",
        companionApply: "spell_creatures",
        spell: "summon dragon",
        ac: 14 + i, // Base 14 + Spell Level
        hp: draconicHP, // Base 50 + 10 per level above 5
        hd: [0, 0],
        speed: "30 ft, Fly 60 ft, Swim 30 ft",
        scores: [19, 14, 17, 10, 14, 14],
        resistances: "Acid, Cold, Fire, Lightning, Poison",
        condition_immunities: "Charmed, Frightened, Poisoned",
        senses: "Blindsight 30 ft, Darkvision 60 ft",
        passivePerception: 12,
        languages: "Draconic, understands the languages you know",
        challengeRating: "0",
        proficiencyBonus: 0,
        proficiencyBonusLinked: true,
        attacksAction: multiAtks,
        traits: [{
            name: "Shared Resistances",
            description: "When I summon the spirit, I choose one of its Resistances (Acid, Cold, Fire, Lightning, or Poison). I have Resistance to the chosen damage type until the spell ends."
        }],
        actions: [{
            name: "Multiattack",
            description: "The spirit makes " + multiAtks + " Rend attack" + (multiAtks > 1 ? "s" : "") + ", and it uses Breath Weapon."
        }],
        attacks: [{
            name: "Rend",
            ability: 1, // Strength (+4) is used to perfectly hit the '4 + spell level' damage mod
            damage: [1, 6, "piercing"],
            range: "Melee (10 ft)",
            modifiers: ["max(oInt|oWis|oCha)-Str", i], // Replaces Str mod with Spellcasting mod for attack, adds spell level to damage
            abilitytodamage: true,
            description: ""
        }, {
            name: "Breath Weapon",
            ability: 1,
            damage: [2, 6, "chosen"], // Acid, Cold, Fire, Lightning, or Poison
            range: "30-ft cone",
            modifiers: ["", ""],
            dc: true,
            abilitytodamage: false,
            description: "Dex save vs my spell save DC (success halves); dmg type matches chosen Resistance"
        }]
    };
}
for (var i = 4; i <= 9; i++) {
    var multiAtks = Math.floor(i / 2);
    var elemHP = 50 + ((i - 4) * 10);
    
    CreatureList["elemental spirit (lvl " + i + ")"] = {
        name: "Elemental Spirit (lvl " + i + ")",
        regExpSearch: new RegExp("^(?=.*elemental)(?=.*spirit)(?=.*" + i + ").*$", "i"),
        source: [["P24", 325]],
        size: 3, // Medium
        type: "Elemental",
        alignment: "Neutral",
        companion: "spell_creatures",
        companionApply: "spell_creatures",
        spell: "summon elemental",
        ac: 11 + i, // Base 11 + Spell Level
        hp: elemHP, // Base 50 + 10 per level above 4
        hd: [0, 0],
        speed: "40 ft, Burrow 40 ft (Earth only), Fly 40 ft (hover; Air only), Swim 40 ft (Water only)",
        scores: [18, 15, 17, 4, 10, 16],
        resistances: "Lightning and Thunder (Air only); Piercing and Slashing (Earth only); Acid (Water only)",
        immunities: "Poison; Fire (Fire only)",
        condition_immunities: "Exhaustion, Paralyzed, Petrified, Poisoned",
        senses: "Darkvision 60 ft",
        passivePerception: 10,
        languages: "Primordial, understands the languages you know",
        challengeRating: "0",
        proficiencyBonus: 0,
        proficiencyBonusLinked: true,
        attacksAction: multiAtks,
        traits: [{
            name: "Amorphous Form (Air, Fire, and Water Only)",
            description: "The spirit can move through a space as narrow as 1 inch wide without it counting as Difficult Terrain."
        }],
        actions: [{
            name: "Multiattack",
            description: "The spirit makes " + multiAtks + " Slam attack" + (multiAtks > 1 ? "s" : "") + "."
        }],
        attacks: [{
            name: "Slam",
            ability: 1, // Strength (+4) is used to perfectly hit the '4 + spell level' damage mod
            damage: [1, 10, "chosen"],
            range: "Melee (5 ft)",
            modifiers: ["max(oInt|oWis|oCha)-Str", i], // Replaces Str mod with Spellcasting mod for attack, adds spell level to damage
            abilitytodamage: true,
            description: "Bludgeoning (Earth), Cold (Water), Lightning (Air), or Fire (Fire) dmg"
        }]
    };
}
for (var i = 3; i <= 9; i++) {
    var multiAtks = Math.floor(i / 2);
    var feyHP = 30 + ((i - 3) * 10);
    
    CreatureList["fey spirit (lvl " + i + ")"] = {
        name: "Fey Spirit (lvl " + i + ")",
        regExpSearch: new RegExp("^(?=.*fey)(?=.*spirit)(?=.*" + i + ").*$", "i"),
        source: [["P24", 326]],
        size: 4, // Small
        type: "Fey",
        alignment: "Neutral",
        companion: "spell_creatures",
        companionApply: "spell_creatures",
        spell: "summon fey",
        ac: 12 + i, // Base 12 + Spell Level
        hp: feyHP, // Base 30 + 10 per level above 3
        hd: [0, 0],
        speed: "30 ft, Fly 30 ft",
        scores: [13, 16, 14, 14, 11, 16],
        condition_immunities: "Charmed",
        senses: "Darkvision 60 ft",
        passivePerception: 10,
        languages: "Sylvan, understands the languages you know",
        challengeRating: "0",
        proficiencyBonus: 0,
        proficiencyBonusLinked: true,
        attacksAction: multiAtks,
        actions: [{
            name: "Multiattack",
            description: "The spirit makes " + multiAtks + " Fey Blade attack" + (multiAtks > 1 ? "s" : "") + "."
        }, {
            name: "Fey Step (Bonus Action)",
            description: "The spirit teleports up to 30 ft to an unoccupied space. It then creates an effect based on its mood. Fuming: Adv. on its next attack before EoT. Mirthful: 1 creature in 10 ft makes a Wis save vs my spell save DC or is Charmed for 1 min/until it takes damage. Tricksy: 10-ft Cube of Darkness within 5 ft until the end of the spirit's next turn."
        }],
        attacks: [{
            name: "Fey Blade",
            ability: 2, // Dexterity (+3) is used to perfectly hit the '3 + spell level' damage mod
            damage: [2, 6, "force"],
            range: "Melee (5 ft)",
            modifiers: ["max(oInt|oWis|oCha)-Dex", i], // Replaces Dex mod with Spellcasting mod for attack, adds spell level to damage
            abilitytodamage: true,
            description: ""
        }]
    };
}
for (var i = 6; i <= 9; i++) {
    var multiAtks = Math.floor(i / 2);
    
    // Fiendish Spirit (Demon)
    CreatureList["fiendish spirit (demon, lvl " + i + ")"] = {
        name: "Fiendish Spirit - Demon (lvl " + i + ")",
        regExpSearch: new RegExp("^(?=.*fiendish)(?=.*spirit)(?=.*demon)(?=.*" + i + ").*$", "i"),
        source: [["P24", 327]],
        size: 2, // Large
        type: "Fiend",
        alignment: "Neutral",
        companion: "spell_creatures",
        companionApply: "spell_creatures",
        spell: "summon fiend",
        ac: 12 + i, // Base 12 + Spell Level
        hp: 50 + ((i - 6) * 15), // Base 50 + 15 per level above 6
        hd: [0, 0],
        speed: "40 ft, Climb 40 ft",
        scores: [13, 16, 15, 10, 10, 16],
        resistances: "Fire",
        immunities: "Poison",
        condition_immunities: "Poisoned",
        senses: "Darkvision 60 ft",
        passivePerception: 10,
        languages: "Abyssal, Infernal, Telepathy 60 ft",
        challengeRating: "0",
        proficiencyBonus: 0,
        proficiencyBonusLinked: true,
        attacksAction: multiAtks,
        traits: [{
            name: "Magic Resistance",
            description: "The spirit has Advantage on saving throws against spells and other magical effects."
        }, {
            name: "Death Throes",
            description: "When the spirit drops to 0 HP or the spell ends, it explodes. Each creature in a 10-ft Emanation makes a Dexterity save vs my spell save DC. Failure: 2d10 + " + i + " Fire damage. Success: Half damage."
        }],
        actions: [{
            name: "Multiattack",
            description: "The spirit makes " + multiAtks + " Bite attack" + (multiAtks > 1 ? "s" : "") + "."
        }],
        attacks: [{
            name: "Bite",
            ability: 2, // Dexterity (+3) is used to perfectly hit the '3 + spell level' damage mod
            damage: [1, 12, "necrotic"],
            range: "Melee (5 ft)",
            modifiers: ["max(oInt|oWis|oCha)-Dex", i], // Replaces Dex mod with Spellcasting mod for attack, adds spell level to damage
            abilitytodamage: true,
            description: ""
        }]
    };

    // Fiendish Spirit (Devil)
    CreatureList["fiendish spirit (devil, lvl " + i + ")"] = {
        name: "Fiendish Spirit - Devil (lvl " + i + ")",
        regExpSearch: new RegExp("^(?=.*fiendish)(?=.*spirit)(?=.*devil)(?=.*" + i + ").*$", "i"),
        source: [["P24", 327]],
        size: 2, 
        type: "Fiend",
        alignment: "Neutral",
        companion: "spell_creatures",
        companionApply: "spell_creatures",
        spell: "summon fiend",
        ac: 12 + i, 
        hp: 40 + ((i - 6) * 15), // Base 40 + 15 per level above 6
        hd: [0, 0],
        speed: "40 ft, Fly 60 ft",
        scores: [13, 16, 15, 10, 10, 16],
        resistances: "Fire",
        immunities: "Poison",
        condition_immunities: "Poisoned",
        senses: "Darkvision 60 ft",
        passivePerception: 10,
        languages: "Abyssal, Infernal, Telepathy 60 ft",
        challengeRating: "0",
        proficiencyBonus: 0,
        proficiencyBonusLinked: true,
        attacksAction: multiAtks,
        traits: [{
            name: "Magic Resistance",
            description: "The spirit has Advantage on saving throws against spells and other magical effects."
        }, {
            name: "Devil's Sight",
            description: "Magical Darkness doesn't impede the spirit's Darkvision."
        }],
        actions: [{
            name: "Multiattack",
            description: "The spirit makes " + multiAtks + " Fiery Strike attack" + (multiAtks > 1 ? "s" : "") + "."
        }],
        attacks: [{
            name: "Fiery Strike",
            ability: 2, // Dexterity
            damage: [2, 6, "fire"],
            range: "5 ft or 150 ft",
            modifiers: ["max(oInt|oWis|oCha)-Dex", i], 
            abilitytodamage: true,
            description: ""
        }]
    };

    // Fiendish Spirit (Yugoloth)
    CreatureList["fiendish spirit (yugoloth, lvl " + i + ")"] = {
        name: "Fiendish Spirit - Yugoloth (lvl " + i + ")",
        regExpSearch: new RegExp("^(?=.*fiendish)(?=.*spirit)(?=.*yugoloth)(?=.*" + i + ").*$", "i"),
        source: [["P24", 327]],
        size: 2, 
        type: "Fiend",
        alignment: "Neutral",
        companion: "spell_creatures",
        companionApply: "spell_creatures",
        spell: "summon fiend",
        ac: 12 + i, 
        hp: 60 + ((i - 6) * 15), // Base 60 + 15 per level above 6
        hd: [0, 0],
        speed: "40 ft",
        scores: [13, 16, 15, 10, 10, 16],
        resistances: "Fire",
        immunities: "Poison",
        condition_immunities: "Poisoned",
        senses: "Darkvision 60 ft",
        passivePerception: 10,
        languages: "Abyssal, Infernal, Telepathy 60 ft",
        challengeRating: "0",
        proficiencyBonus: 0,
        proficiencyBonusLinked: true,
        attacksAction: multiAtks,
        traits: [{
            name: "Magic Resistance",
            description: "The spirit has Advantage on saving throws against spells and other magical effects."
        }],
        actions: [{
            name: "Multiattack",
            description: "The spirit makes " + multiAtks + " Claws attack" + (multiAtks > 1 ? "s" : "") + "."
        }],
        attacks: [{
            name: "Claws",
            ability: 2, // Dexterity
            damage: [1, 8, "slashing"],
            range: "Melee (5 ft)",
            modifiers: ["max(oInt|oWis|oCha)-Dex", i], 
            abilitytodamage: true,
            description: "Immediately after the attack hits or misses, the spirit can teleport up to 30 ft to an unoccupied space it can see."
        }]
    };
}
for (var i = 3; i <= 9; i++) {
    var multiAtks = Math.floor(i / 2);
    
    // Undead Spirit (Ghostly/Putrid)
    CreatureList["undead spirit (ghostly/putrid, lvl " + i + ")"] = {
        name: "Undead Spirit - Ghostly/Putrid (lvl " + i + ")",
        regExpSearch: new RegExp("^(?=.*undead)(?=.*spirit)(?=.*(ghostly|putrid))(?=.*" + i + ").*$", "i"),
        source: [["P24", 328]],
        size: 3, // Medium
        type: "Undead",
        alignment: "Neutral",
        companion: "spell_creatures",
        companionApply: "spell_creatures",
        spell: "summon undead",
        ac: 11 + i, // Base 11 + Spell Level
        hp: 30 + ((i - 3) * 10), // Base 30 + 10 per level above 3
        hd: [0, 0],
        speed: "30 ft, Fly 40 ft (hover; Ghostly only)",
        scores: [12, 16, 15, 4, 10, 9],
        immunities: "Necrotic, Poison",
        condition_immunities: "Exhaustion, Frightened, Paralyzed, Poisoned",
        senses: "Darkvision 60 ft",
        passivePerception: 10,
        languages: "Understands the languages you know",
        challengeRating: "0",
        proficiencyBonus: 0,
        proficiencyBonusLinked: true,
        attacksAction: multiAtks,
        traits: [{
            name: "Festering Aura (Putrid Only)",
            description: "Any creature (other than me) that starts its turn within a 5-ft Emanation of the spirit makes a Constitution save vs my spell save DC. Failure: Poisoned until the start of its next turn."
        }, {
            name: "Incorporeal Passage (Ghostly Only)",
            description: "The spirit can move through other creatures and objects as if they were Difficult Terrain. If it ends its turn inside an object, it is shunted to the nearest unoccupied space and takes 1d10 Force damage for every 5 feet traveled."
        }],
        actions: [{
            name: "Multiattack",
            description: "The spirit makes " + multiAtks + " attack" + (multiAtks > 1 ? "s" : "") + "."
        }],
        attacks: [{
            name: "Deathly Touch (Ghostly)",
            ability: 2, // Dexterity (+3) perfectly hits the '3 + spell level' damage mod
            damage: [1, 8, "necrotic"],
            range: "Melee (5 ft)",
            modifiers: ["max(oInt|oWis|oCha)-Dex", i], // Replaces Dex mod with Spellcasting mod
            abilitytodamage: true,
            description: "Target has the Frightened condition until the end of its next turn."
        }, {
            name: "Rotting Claw (Putrid)",
            ability: 2, // Dexterity
            damage: [1, 6, "slashing"],
            range: "Melee (5 ft)",
            modifiers: ["max(oInt|oWis|oCha)-Dex", i], 
            abilitytodamage: true,
            description: "If target is Poisoned, it is Paralyzed until the end of its next turn."
        }]
    };

    // Undead Spirit (Skeletal)
    CreatureList["undead spirit (skeletal, lvl " + i + ")"] = {
        name: "Undead Spirit - Skeletal (lvl " + i + ")",
        regExpSearch: new RegExp("^(?=.*undead)(?=.*spirit)(?=.*skeletal)(?=.*" + i + ").*$", "i"),
        source: [["P24", 328]],
        size: 3, 
        type: "Undead",
        alignment: "Neutral",
        companion: "spell_creatures",
        companionApply: "spell_creatures",
        spell: "summon undead",
        ac: 11 + i, 
        hp: 20 + ((i - 3) * 10), // Base 20 + 10 per level above 3
        hd: [0, 0],
        speed: "30 ft",
        scores: [12, 16, 15, 4, 10, 9],
        immunities: "Necrotic, Poison",
        condition_immunities: "Exhaustion, Frightened, Paralyzed, Poisoned",
        senses: "Darkvision 60 ft",
        passivePerception: 10,
        languages: "Understands the languages you know",
        challengeRating: "0",
        proficiencyBonus: 0,
        proficiencyBonusLinked: true,
        attacksAction: multiAtks,
        actions: [{
            name: "Multiattack",
            description: "The spirit makes " + multiAtks + " Grave Bolt attack" + (multiAtks > 1 ? "s" : "") + "."
        }],
        attacks: [{
            name: "Grave Bolt",
            ability: 2, // Dexterity
            damage: [2, 4, "necrotic"],
            range: "150 ft",
            modifiers: ["max(oInt|oWis|oCha)-Dex", i], 
            abilitytodamage: true,
            description: ""
        }]
    };
}
