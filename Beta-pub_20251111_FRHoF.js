var iFileName = "pub_20251111_FRHoF.js";
RequiredSheetVersion("13.2.3");
SourceList["FRHoF"] = {
	name: "Forgotten Realms: Heroes of Faerûn",
	abbreviation: "FRHoF",
	abbreviationSpellsheet: "HF",
	group : "Campaign Sourcebooks",
	campaignSetting : "Forgotten Realms",
};
// Coded By: ThePokésimmer with contributions from Shroo
//Functions
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
              source: [["LEGACYSPELLS", 1]],
              minlevel: 1,
              description: "\n I can choose to access to the legacy version of spells",
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
    oldspell.source = [["LEGACYSPELLS", 1]];
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
  subClass.source = [["LEGACYCLASS", 1]];
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
function legacyRaceRefactor(raceKey, newRace){
  if(newRace.replaces){
    for (var replaced of newRace.replaces){
      if (replaced in RaceList){
        var oldRace = RaceList[replaced];
        RaceList[replaced + " (L)"] = oldRace;
        delete RaceList[replaced];
        oldRace.source = [["LEGACYRACE", 1]];
        oldRace.name = oldRace.name + " (L)";
        oldRace.shortname = oldRace.shortname + " (L)";        
      }
    }
  }
  RaceList[raceKey] = newRace;
}
function legacyBackgroundRefactor(bgKey, newBg) {
  if( bgKey in BackgroundList ) {
    var oldBg = BackgroundList[bgKey];
    BackgroundList[bgKey+" (L)"] = oldBg;
    oldBg.source = [["LEGACYBG", 1]];
    oldBg.name = oldBg.name+" (L)";
    for( var i in BackgroundList ) {
      var bg_i = BackgroundList[i];
      if( bg_i.regExpSearch.test(newBg.name) ) {
        var regex = "(?=^.*"+bg_i.regExpSearch.source+".*$)(?!^"+escapeRegExp(newBg.name)+"$)";
        bg_i.regExpSearch = new RegExp(regex, 'i');
      }
    }
  }
  BackgroundList[bgKey] = newBg;
}
//Subclasses
AddSubClass("bard", "moon", {
	regExpSearch: /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*moon).*$/i,
	subname : "College of the Moon",
	source : [["FRHoF", 0]],
	features : {
		"subclassfeature3" : {
			name : "Moon's Inspiration",
			source : [["FRHoF", 0]],
			minlevel : 3,
			description : [
				"**Inspired Eclipse**. When I use a Bns to give a crea BI, I can have the Invisible condition and teleport up to 30 ft to an unoccupied space as part of the same bns. This invisibility lasts until the start of my next turn, and ends early if I make an atk roll, deal dmg, or cast a spell.",
				"**Lunar Vitality**. Once per turn, when I heal a crea with a spell, I can expend a BI die and increase the HP restored by the number rolled on the BI die. The crea's Speed also increases by 10 ft until the end of its next turn."
			],	
		},
		"subclassfeature3.1" : {
			name : "Primal Lore",
			source : [["FRHoF", 0]],
			minlevel : 3,
			languageProfs : [["Druidic"]],
			skillstxt : "Choose one: Animal Handling, Insight, Medicine, Nature, Perception, or Survival",
			spellcastingBonus : [{
				name : "Primal Lore",
				"class": "druid",
				times : 1,
				level: [0, 0],
				firstCol : "atwill",
			}],
			description : [
				"I learn Druidic and one cantrip from the Druid spell list.",
				"Additionally, I gain Proficiency in one of the following skills: Animal Handling, Insight, Medicine, Nature, Perception, or Survival",
			],
		},	
		"subclassfeature6" : {
			name : "Blessing of Moonlight",
			source : [["FRHoF", 0]],
			minlevel : 6,
			spellcastingBonus : [{
				name : "Blessing of Moonlight",
				spells : ["moonbeam"],
				selection : ["moonbeam"],
				prepared : true,
			}],
			usages : 1,
			recovery : "long rest",
			description : [
				"I always have the Moonbeam spell prepared.",
				"Once per Long Rest, I can modify the casting of Moonbeam to cause me to glow for the duration, while glowing I shed Dim Light in a 5 ft Emanation. When a crea fails its save against the effects of Moonbeam, another crea, of my choice, I can see within 60 ft of me regains 2d4 HP.",
			],
		},
		"subclassfeature14" : {
			name : "Eventide's Splendor",
			source : [["FRHoF", 0]],
			minlevel : 14,
			description : [
				"**Shadow of the New Moon**. When I use Inspired Eclipse, the crea who recieved my BI can have the Invisible condition and immediately use its Rea to teleport up to 30 ft to an unoccupied space it can see. The crea remains Invisible until the start of its next turn.",
				"**Vibrance of the full Moon**. When I use Lunar Vitality, I can roll 1d6 and use the number rolled in place of expending a BI die.",
			],
		},
	},
});
legacySubClassRefactor("cleric", "knowledge", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(knowledge|wisdom|learning)).*$/i,
	subname : "Knowledge Domain",
	source : [["FRHoF", 0]],
	replaces : "knowledge domain",
	spellcastingExtra : ["command", "comprehend languages", "detect magic", "detect thoughts", "identify", "mind spike", "dispel magic", "nondetection", "tongues", "arcane eye", "banishment", "confusion", "legend lore", "scrying", "synaptic static"],
	features : {
		"subclassfeature3" : {
			name : "Blessings of Knowledge",
			source : [["FRHoF", 0]],
			minlevel : 3,
			toolProfs : [["Artisan's Tools", 1]],
			skillstxt : "Choose two: Arcana, History, Nature, or Religion",
			description : [
				"I gain Proficiency in one Artisan's Tools of choice. Additionally I gain Proficiency in two of the following skills: Arcana, History, Nature, Religion.",
			],
		},
		"subclassfeature3.1" : {
			name : "Mind Magic",
			source : [["FRHoF", 0]],
			minlevel : 3,
			action : [["action", ""]],
			description : [
				"As a Magic Action, I can expend one use of my CD, choose one of my Domain Spells from the Div school that I have prepared, As part of this action I can cast the spell without expending a Spell Slot or needing Material components.",
			],
		},
		"subclassfeature6" : {
			name : "Unfettered Mind",
			source : [["FRHoF", 0]],
			minlevel : 6,
			senses : [["Telepathy", 60]],
			saves : ["Int", "Wis", "Cha"],
			description : [
				"I gain Telepathy out to 60 ft. When I use this Telepathy, I can simultaneously contact a number of crea equal to my Wis mod (min 1). Additionally, I gain proficiency in Intelligence Saving Throws, If I already have this Prof, I instead gain Prof in a save I lack.",
			],
		},
		"subclassfeature17" : {
			name : "Divine Foreknowledge",
			source : [["FRHoF", 0]],
			minlevel : 17,
			action : [["bonus action", ""]],
			usages : 1,
			recovery : "long rest",
			altResource : "SS 6+",
			description : [
				"Once per Long Rest, As a bns, I give myself Adv on all D20 Tests for 1 hr. I can restore my use of this feature by expending a level 6+ Spell slot (no action required).",
			],
		},
	},
});
legacySubClassRefactor("fighter", "purple dragon knight", {
	regExpSearch : /^(((?=.*purple)(?=.*dragon)(?=.*knight))|(?=.*banneret)).*$/i,
	subname : "Banneret",
	source : [["FRHoF", 0]],
	replaces : "purple dragon knight",
	features : {
		"subclassfeature3" : {
			name : "Knightly Envoy",
			source : [["FRHoF", 0]],
			minlevel : 3,
			spellcastingBonus : [{
				name : "Comprehension",
				spells : "comprehend languages",
				selection : "comprehend languages",
				prepared : true,
			}],
			languageProfs : [["Polyglot", 1]],
			skillstxt : "Choose one: Insight, Intimidation, Persuasion, or Performance",
			description : [
				"**Comprehension**. I can cast the Comprehend Languages spell, but only as a Ritual. Cha is my spellcasting ability for it.",
				"**Polyglot**. I learn one language from the languages table in the PHB'24 or chapter 2 of FRHoF. When I finish a Long Rest, I can replace the language learned by this benefit with another language I have heard, seen signed, or read in the past 24 hours.",
				"**Well Spoken**. I gain Prof in one of the following skills: Insight, Intimidation, Persuasion, or Performance.",
			],
		},
		"subclassfeature3.1" : {
			name : "Group Recovery",
			source : [["FRHoF", 0]],
			minlevel : 3,
			usages : 1,
			recovery : "short rest",
			additional : ["", "", "1d4 + 3; 30-ft Emanation", "1d4 + 4; 30-ft Emanation", "1d4 + 5; 30-ft Emanation", "1d4 + 6; 30-ft Emanation", "1d4 + 7; 30-ft Emanation", "1d4 + 8; 30-ft Emanation", "1d4 + 9; 30-ft Emanation", "1d4 + 10; 30-ft Emanation", "1d4 + 11; 30-ft Emanation", "1d4 + 12; 30-ft Emanation", "1d4 + 13; 30-ft Emanation", "1d4 + 14; 30-ft Emanation", "1d4 + 15; 30-ft Emanation", "1d4 + 16; 30-ft Emanation", "1d4 + 17; 30-ft Emanation", "1d4 + 18; 60-ft Emanation", "1d4 + 19; 60-ft Emanation", "1d4 + 20; 60-ft Emanation"],
			description : [
				"Once per Short or Long rest, when I use my Second Wind to regain HP, I can choose a number of allies, equal to my Cha mod (min 1), within a 30-ft Emanation of me. Each of those allies regains HP equal to 1d4 plus my Fighter level.",
			],
		},
		"subclassfeature7" : {
			name : "Team Tactics",
			source : [["FRHoF", 0]],
			minlevel : 7,
			description : [
				"When I use Group Recovery, each chosen ally has Adv on D20 Tests until the start of my next turn.",
			],
		},	
		"subclassfeature10" : {
			name : "Rallying Surge",
			source : [["FRHoF", 0]],
			minlevel : 10,
			additional : ["", "", "", "", "", "", "", "", "", "30-ft Emanation", "30-ft Emanation", "30-ft Emanation", "30-ft Emanation", "30-ft Emanation", "30-ft Emanation", "30-ft Emanation", "30-ft Emanation", "60-ft Emanation", "60-ft Emanation", "60-ft Emanation"],
			description : [
				"When I use my Action Surge, I can choose a number of allies, equal to my Cha mod (min 1), within a 30-ft Emanation of me. Each of those allies can immediately take a Rea to use one of the following options.",
				"**Attack**. The ally makes one attack with a weapon or an Unarmed Strike",
				"**Move**. The ally moves up to half its Speed without provoking Opportunity Attacks.",
			],
		},	
		"subclassfeature15" : {
			name : "Shared Resilience",
			source : [["FRHoF", 0]],
			minlevel : 15,
			action : [["reaction", " (Ally w/i 60 ft fails save)"]],
			description : [
				"When an ally I can see within 60 ft of me fails a save, I can take a Rea to expend a use of my Indomitable feature. The ally can immediately reroll the save with a bonus equal to my Fighter level; the ally must use the new roll.",
			],
		},
		"subclassfeature18" : {
			name : "Inspiring Commander",
			source : [["FRHoF", 0]],
			minlevel : 18,
			savetxt : {
				immune : ["charmed", "frightened"],
			},
			description : [
				"**Bolstered Rally**. The area of effect for both Group Recovery and Rallying Surge is now a 60-ft Emanation",
				"**Unshakable Bravery**. I have Immunity to the Charmed and Frightened conditions.",
			],
		},
	},
});	
AddSubClass("paladin", "oath of the noble genies", {
	regExpSearch : /^(?=.*(genies))(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))).*$/i,
	subname : "Oath of the Noble Genies",
	source : [["FRHoF", 0]],
	spellcastingExtra: ["chromatic orb", "elementalism", "thunderous smite", "mirror image", "phantasmal force", "fly", "gaseous form", "conjure minor elementals", "summon elemental", "banishing smite", "contact other plane"],
	features : {
		"subclassfeature3" : {
			name : "Elemental Smite",
			source : [["FRHoF", 0]],
			minlevel : 3,
			description : [
				"Immediately after I cast Divine Smite, I can expend one use of my CD and invoke one of the following effects (See Notes Page).",
			],
			toNotesPage : [{
				name : "Elemental Smite",
				note : [
					"##Dao's Crush##. Earth rises up around the target of my Divine Smite. The target has the Grappled condition (Escape DC = My Spell Save DC). While Grappled, the target has the Restrained condition.",
					"##Djinni's Escape##. I teleport to an unoccupied space I can see within 30 ft of myself and take on a semi-incorporeal form, which lasts until the end of my next turn. While in this form, I have Resistance to Bludgeoning, Piercing, and Slashing damage, and I have Immunity to the Grappled, Prone, and Restrained conditions.",
					"##Efreeti's Fury##. The target of my Divine Smite takes an extra 2d4 Fire dmg, and fire jumps from the target to another crea I can see within 30 ft of myself. The second crea also takes 2d4 Fire dmg.",
					"##Marid's Surge##. The target of my Divine Smite and each crea of my choice in a 10-ft emanation originating from me make a Strength save against my Spell Save DC. On a failed save, a creature is pushed 15 ft straight away from me and has the Prone Condition.",
				],
			}],				
		},
		"subclassfeature3.1" : {
			name : "Genie's Splendor",
			source : [["FRHoF", 0]],
			minlevel : 3,
			skillstxt : "Choose one: Acrobatics, Intimidation, Performance, or Persuasion",
			armorOptions: [{
				regExpSearch: /^(?=.*genie's)(?=.*splendor)(?=.*cha).*$/i,
				name: "Genie's Splendor (Cha)",
				source: [["FRHoF", 0]],
				ac: "10+Cha",
				affectsWildShape: true,
				selectNow: true,
			}],
			description : [
				"When I'm not wearing any armor, my base AC equals 10 plus my Dexterity and Charisma modifiers. I can use a Shield and still gain this benefit.",
				"I also gain proficiency in one of the following skills of choice: Acrobatics, Intimidation, Performance, or Persuasion",
			],
		},
		"subclassfeature7" : {
			name : "Aura of Elemental Shielding",
			source : [["FRHoF", 0]],
			minlevel : 7,
			description : [
				"Choose one of the following dmg types: Acid, Cold, Fire, Lightning, or Thunder. My allies and I have Resistance to that dmg type while in my Aura of Protection. At the start of each of my turns, I can change the dmg type affected by ths feature to one of the other listed options (no action required).",
			],
		},
		"subclassfeature15" : {
			name : "Elemental Rebuke",
			source : [["FRHoF", 0]],
			minlevel : 15,
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest",
			action : [["reaction", ""]],
			description : [
				"When I am hit by an attack roll, I can take a Rea to halve the attack's damage against me (round down) and force the attacker to make a Dex save against my Spell Save DC. On a failed save, the attacker takes 2d10+Cha dmg of (my choice) Acid, Cold, Fire, Lightning, or Thunder. Half as much on a success.",
			],
		},	
		"subclassfeature20" : {
			name : "Noble Scion",
			source : [["FRHoF", 0]],
			minlevel : 20,
			usages : 1,
			recovery : "long rest",
			altResource : "SS 5",
			action : [["bonus action", " (Activate)"], ["reaction", " (Minor Wish)"]],
			description : [
				"Once per Long Rest as a Bns, I gain the following benefits for 10 minutes or until I end them (no action required). I can restore my use of this feature by expending a level 5 spell slot (no action required).",
				"**Flight**. I have a Fly Speed of 60 ft and can hover.",
				"**Minor Wish**. When an I or an ally in my Aura of Protection fails a D20 Test, I can take a Rea to make myself or that ally succeed instead.",
			],
		},
	},
});	
AddSubClass("ranger", "winter walker", {
	regExpSearch : /^(?=.*(winter))(?=.*(walker))((?=.*(ranger|strider))|((?=.*(nature|natural|green))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	subname : "Winter Walker",
	source : [["FRHoF", 0]],
	spellcastingExtra: ["ice knife", "hold person", "remove curse", "ice storm", "cone of cold"],
	features : {
		"subclassfeature3" : {
			name : "Frigid Explorer",
			source : [["FRHoF", 0]],
			minlevel : 3,
			dmgres : ["Cold"],
			additional : ["", "", "1d4 Cold damage", "1d4 Cold damage", "1d4 Cold damage", "1d4 Cold damage", "1d4 Cold damage", "1d4 Cold damage", "1d4 Cold damage", "1d4 Cold damage", "1d6 Cold damage", "1d6 Cold damage", "1d6 Cold damage", "1d6 Cold damage", "1d6 Cold damage", "1d6 Cold damage", "1d6 Cold damage", "1d6 Cold damage", "1d6 Cold damage", "1d6 Cold damage"],
			description : [
				"**Biting Cold**. Dmg from my weapon atks, Ranger spells, and Ranger features ignores Resistance to Cold dmg.",
				"**Frost Resistance**. I have Resistance to Cold damage",
				"**Polar Strikes**. When I hit a crea with an atk roll using a weapon, I can deal extra Cold dmg to the target, which can take this extra dmg only once per turn.",
			],
		},
		"subclassfeature3.1" : {
			name : "Hunter's Rime",
			source : [["FRHoF", 0]],
			minlevel : 3,
			additional : "Temp HP: 1d10 + Ranger lvl",
			description : [
				"When I cast Hunter's Mark, I gain Temp HP equal 1d10 plus my Ranger level. Additionally, while a crea is marked by my Hunter's Mark, it can't take the Disengage action.",
			],
		},
		"subclassfeature7": {
			name : "Fortifying Soul",
			source : [["FRHoF", 0]],
			minlevel : 7,
			usages : 1,
			recovery : "long rest",
			action : [["action", ""]],
			description : [
				"Once per Long Rest, as a Magic Action, choose a number of crea I can see equal to my Wis mod (min 1). Ech chosen crea regains HP equal to 1d10 plus Ranger level, and has Adv on saves to avoid or end the Frightened condition for 1 hr.",
			],
		},			
		"subclassfeature11" : {
			name : "Chilling Retribution",
			source : [["FRHoF", 0]],
			minlevel : 11,
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			description : [
				"When a crea hits me with an attack roll, I can take a Rea to force the crea to make a Wis save against my Spell Save DC. On a failure, the target has the Stunned condiiton until the end of my next turn. While the target is Stunned, its Speed is reduced to 0 ft.",
			],
		},
		"subclassfeature15" : {
			name : "Frozen Haunt", 
			source : [["FRHoF", 0]],
			minlevel : 15,
			usages : 1,
			recovery : "long rest", 
			altResource : "SS 4+",
			description : [
				"Once per Long Rest, when I cast Hunters Mark, I can adopt a ghostly, snowy form, which lasts until the spell ends, granting me the following benefits. I can regain my use of this feature by expending a lvl 4+ Spell slot (no action required).",
				"**Frozen Soul**. I have Immunity to Cold damage. When I first adopt this form and at the start of each of my subsequent turns, each crea of my choice in a 15-ft Emanation originating from me takes 2d4 Cold damage.",
				"**Partially Incorporeal**. i have Immunity to the Grappled, Prone, and Restrained conditions. I can move through creatures and objects as if they were Difficult Terrain, but I take 1d10 Force dmg if I end my turn inside a crea or an object. If the form ends while I am inside a crea or object, I am shunted to the nearest unoccupied space.",
			],
		},	
	},
});	
AddSubClass("rogue", "scion of the three", {
	regExpSearch : /^(?!.*(barbarian|bard|cleric|druid|fighter|monk|paladin|ranger|sorcerer|warlock|wizard))(?=.*(scion))(?=.*(three)).*$/i,
	subname : "Scion of the Three",
	source : [["FRHoF", 0]],
	features : {
		"subclassfeature3" : {
			name : "Bloodthirst",
			source : [["FRHoF", 0]],
			minlevel : 3,
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest",
			action : [["reaction", " (Teleport and Attack)"]],
			description : [
				"When an enemy I can see within 30 ft of myself takes damage and is Bloodied after taking that damage but not killed outright, I can take a Rea and teleport to an unoccupied space I can see within 5 ft of that enemy. I can make one melee attack.",
			],
		},
		"subclassfeature3.1" : {
			name : "Dread Allegiance",
			source : [["FRHoF", 0]],
			minlevel : 3,
			choices : ["Bane", "Bhaal", "Myrkul"],
			description : [
				"Choose one of the Dead Three using the 'choose features' button I gain one dmg resistance, and one cantrip associated with my choice, When I finish a Long Rest, I can change my choice.",
			],
			"bane" : {
				name : "Dread Allegiance : Bane",
				dmgres : ["Psychic"],
				spellcastingBonus : [{
					name : "Dread Allegiance: Bane",
					spells : ["minor illusion"],
					selection : ["minor illusion"],
					firstCol : "atwill",
				}],
				description : [
					"I gain Resistance to Psychic dmg, and I learn the Minor Illusion Cantrip, When I finish a Long Rest, I can change my Dread Allegiance using the 'choose features' button.",
				],
			},
			"bhaal" : {
				name : "Dread Allegiance : Bhaal",
				dmgres : ["Poison"],
				spellcastingBonus : [{
					name : "Dread Allegiance: Bhaal",
					spells : ["blade ward"],
					selection : ["blade ward"],
					firstCol : "atwill",
				}],
				description : [
					"I gain Resistance to Poison dmg, and I learn the Blade Ward Cantrip, When I finish a Long Rest, I can change my Dread Allegiance using the 'choose features' button.",
				],
			},
			"myrkul" : {
				name : "Dread Allegiance : Myrkul",
				dmgres : ["Necrotic"],
				spellcastingBonus : [{
					name : "Dread Allegiance: Myrkul",
					spells : ["chill touch"],
					selection : ["chill touch"],
					firstCol : "atwill",
				}],
				description : [
					"I gain Resistance to Necrotic dmg, and I learn the Chill Touch Cantrip, When I finish a Long Rest, I can change my Dread Allegiance using the 'choose features' button.",
				],
			},
		},	
		"subclassfeature9" : {
			name : "Strike Fear",
			source : [["FRHoF", 0]],
			minlevel : 9,
			description : [
				"I gain the following Cunning Strike Option.",
				"**Terrifiy (Cost: 1d6)**. The target must succeed on a Wis save, or it has the Frightened condition for 1 minute. While the target is Frightened in this way, I have Adv on atk rolls against the target. The Frightened target repeats the save at the end of each of its turns, ending theeffect on a success.",
			],
		},
		"subclassfeature13" : {
			name : "Aura of Malevolence",
			source : [["FRHoF", 0]],
			minlevel : 13,
			description : [
				"When I use my Bloodthirst and teleport, each crea w/i 10 ft of either the space I left or my destination space (my choice) takes damage equal to my Intelligence modifier; the damage type is the same as the damage Resistance granted by my choice in the Dread Allegiance feature. Damage dealt by this feature ignores Resistance.",
			],
		},			
		"sublassfeature17" : {
			name : "Dread Incarnate",
			source : [["FRHoF", 0]],
			minlevel : 17,
			description : [	
				"**Cutthroat**. I regain one expended use of Bloodthirst when I finish a Short Rest.",
				"**Murderous Intent**. When I roll for my Sneak Attack damage, I can treat a roll of 1 or 2 on the die as a 3.",
			],
		},	
	},
});
AddSubClass("sorcerer", "spellfire sorcery", {
	regExpSearch : /^(?=.*(sorcerer|witch))(?=.*(spellfire)).*$/i,
	subname : "Spellfire Sorcery",
	source : [["FRHoF", 0]],
	spellcastingExtra : ["cure wounds", "guiding bolt", "lesser restoration", "scorching ray", "aura of vitality", "dispel magic", "fire shield", "wall of fire", "greater restoration", "flame strike"],
	spellcastingExtraApplyNonconform : true,
	features : {
		"subclassfeature3" : {
			name : "Spellfire Burst",
			source : [["FRHoF", 0]],
			minlevel : 3,
			additional : ["", "", "Bolstering Flames 1d4 + Cha Mod; Radiant Fire 1d4 Fire or Radiant", "Bolstering Flames 1d4 + Cha Mod; Radiant Fire 1d4 Fire or Radiant", "Bolstering Flames 1d4 + Cha Mod; Radiant Fire 1d4 Fire or Radiant", "Bolstering Flames 1d4 + Cha Mod; Radiant Fire 1d4 Fire or Radiant", "Bolstering Flames 1d4 + Cha Mod; Radiant Fire 1d4 Fire or Radiant", "Bolstering Flames 1d4 + Cha Mod; Radiant Fire 1d4 Fire or Radiant", "Bolstering Flames 1d4 + Cha Mod; Radiant Fire 1d4 Fire or Radiant", "Bolstering Flames 1d4 + Cha Mod; Radiant Fire 1d4 Fire or Radiant", "Bolstering Flames 1d4 + Cha Mod; Radiant Fire 1d4 Fire or Radiant", "Bolstering Flames 1d4 + Cha Mod; Radiant Fire 1d4 Fire or Radiant", "Bolstering Flames 1d4 + Cha Mod; Radiant Fire 1d4 Fire or Radiant", "Bolstering Flames 1d4 + Cha Mod + Sorcerer Level; Radiant Fire 1d8 Fire or Radiant", "Bolstering Flames 1d4 + Cha Mod + Sorcerer Level; Radiant Fire 1d8 Fire or Radiant", "Bolstering Flames 1d4 + Cha Mod + Sorcerer Level; Radiant Fire 1d8 Fire or Radiant", "Bolstering Flames 1d4 + Cha Mod + Sorcerer Level; Radiant Fire 1d8 Fire or Radiant", "Bolstering Flames 1d4 + Cha Mod + Sorcerer Level; Radiant Fire 1d8 Fire or Radiant", "Bolstering Flames 1d4 + Cha Mod + Sorcerer Level; Radiant Fire 1d8 Fire or Radiant", "Bolstering Flames 1d4 + Cha Mod + Sorcerer Level; Radiant Fire 1d8 Fire or Radiant"],
			description : [
				"When I spend at least 1 SP as part of a Magic Action, or as a Bns on my turn, I can unlease one of the following effects.",
				"**Bolstering Flames**. Me or a crea I can see within 30 ft of me gains 1d4 + Cha Mod Temp HP.",
				"**Radiant Fire**. One crea I can see within 30 ft of me takes 1d4 Fire or Radiant dmg (my choice).",
			],
		},	
		"subclassfeature6" : {
			name : "Absorb Spells",
			source :[["FRHoF", 0]],
			minlevel : 6,
			spellcastingBonus : [{
				name : "Absorb Spells",
				spells : ["counterspell"],
				selection : ["counterspell"],
				prepared: true,
			}],
			description : [
				"I always have the Counterspell spell prepared.",
				"Additionally, When a target fails the Save against a Counterspell I cast, I regain 1d4 SP.",
			],
		},
		"subclassfeature14" : {
			name : "Honed Spellfire",
			source : [["FRHoF", 0]],
			minlevel : 14,
			description : [
				"My Spellfire Burst improves. I add my Sorcerer level to the Temp HP gained from Bolstering FLames, and the dmg of my Radiant Fire increases to 1d8.",
			],
		},	
		"subclassfeature18" : {
			name : "Crown of Spellfire",
			source : [["FRHoF", 0]],
			minlevel : 18,
			usages : 1,
			recovery : "long rest",
			altResource : "5 SP",
			description : [
				"Once per Long Rest, when I use Innate Sorcery, I can alter it to gain the following benefits. I can regain my use of this feature by expending 5 SP (no action required).",
				"**Burning Life Force**. Once per turn when I am hit by an attack roll, I can expend a number of HD, up to a max equal to my Cha Mod (min 1). Roll the expended dice, and reduce the amount of damage from that atttack equal to the total rolled.",
				"**Flight**. I gain a Fly Speed of 60 ft and can hover.",
				"**Spell Avoidance**. When I'm subjected to a spell or magical effect that allows me to make a save to take only half damage, I instead take no damage if I succeed on the save and only half dmg if I fail. I can't use this benefit if I have the Incapacitated condition.",
			],
		},
	},
});	
legacySubClassRefactor("wizard", "bladesinger", {
	regExpSearch : /(bladesinging|bladesinger)/i,
	subname : "Bladesinger",
	replaces : "bladesinging",
	attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	source : [["FRHoF", 0]],
	features : {
		"subclassfeature3" : {
			name : "Bladesong",
			source : [["FRHoF", 0]], 
			minlevel : 3,
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest",
			action : [["bonus action", " (Start)"]],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (What('Int Mod') > What(AbilityScores.abbreviations[fields.Mod - 1] + ' Mod') && fields.Proficiency && /^(?=.*bladesong)(?!.*((^|[^+-]\b)2|\btwo).?hand(ed)?s?\b)|\bheavy\b.*$/i.test(v.WeaponText)) {
							fields.Mod = 4;
						}
					},
					"If I include the word 'bladesong' in the name of a weapon that is not two-handed or heavy, it will use intelligence for its attack and damage rolls."
				]
			},
			description : [
				"As a Bns, I can begin a bladesong, as long as I'm not wearing armor or using a Shield.",
				"The Bladesong lasts for 1 Min and ends early if I have the Incapacitated condition, I don armor or a Shield, or if I use two hands to make an attack with a weapon. I can dismiss the Bladesong at any time (no action required).",
				"While the Bladesong is active, I gain the following benefits.",
				"**Agility**. Intelligence modifier (min 1) to AC, Speed increases by 10 ft, Advantage on Dexterity (Acrobatics) checks.",
				"**Bladework**. When I attack with a weapon with which I have proficiency, I can use my Int mod for the atk and dmg rolls instead of Str or Dex.",
				"**Focus**. Intelligence modifier (min 1) to concentration saves for maintaining conc. on a spell",
			],
		},	
		"subclassfeature3.1" : {
			name : "Training in War and Song",
			source : [["FRHoF", 0]],
			minlevel : 3,
			weaponProfs : [false, false, ["battleaxe", "flail", "longsword", "morningstar", "rapier", "scimitar", "shortsword", "trident", "warhammer", "war pick", "whip"]],
			skillstxt : "Choose one: Acrobatics, Athletics, Performance, or Persuasion",
			description : [
				"I gain prof with all Melee Martial weapons that don't have the Two-Handed or Heavy property. I can use a Melee weapon with which I have prof as a Spellcasting focus for my Wizard spells.",
				"Additionally I gain prof in one of the following skills of choice: Acrobatics, Athletics, Performance, or Persuasion.",
			],
		},	
		"subclassfeature6" : {
			name : "Extra Attack",
			source : [["FRHoF", 0]],
			minlevel : 6,
			description : [
				"I can attack twice instead of once when I take the Attack action on my turn",
				"Moreover, I can cast one of my cantrips, with a casting time of 1 a, in place of one of those attacks"
			],
		},
		"subclassfeature10" : {
			name : "Song of Defense",
			source : [["FRHoF", 0]],
			minlevel : 10,
			action : [["reaction", " (in Bladesong)"]],
			description : [
				"When I take dmg while my Bladesong is active, I can take a Rea to expend 1 spell slot and reduce the dmg taken by 5 times the level of the spell slot expended.",
			],
		},	
		"subclassfeature14" : {
			name : "Song of Victory",
			source : [["FRHoF", 0]],
			minlevel : 14,
			action : [["bonus action", ""]],
			description : [
				"After I cast a spell that has a casting time of 1 a, I can make one attack with a weapon as a Bns.",
			],
		},
	},
});	
//Backgrounds
BackgroundList["spellfire initiate"] = {
	regExpSearch : /^(?=.*spellfire)(?=.*initiate).*$/i,
	name : "Spellfire Initiate",
	source : [["FRHoF", 0]],
	scorestxt : ["+2 and +1 -or- +1 to each from Constitution, Intelligence, and Charisma"],
	skills : ["Arcana", "Perception"],
	toolProfs : [["Gaming Set", 1]],
	gold : 36,
	equipleft : [
		["Gaming Set (Same as Proficiency)", "", ""],
		["Arcane Focus (Crystal or Wand)", "", 1],
	],
	equipright : [
		["Pouches", 2, 1],
		["Traveler's clothes", "", 4],
	],
	feature : "Spellfire Initiate",
};
BackgroundFeatureList["spellfire initiate"] = {
	description : [
		"You bear the gift of spellfire: a rare form of magic that channels the raw power of the Weave. wielding spellfire takes a heavy toll on the body. You've trained both mind and body to efficiently wield this sacred power.",
	],
	source : [["FRHoF", 0]],
	eval : function () {
		AddFeat("Spellfire Spark [Origin]");
	},
	removeeval : function () {
		RemoveFeat("Spellfire Spark [Origin]");
	},
};
//Regional Backgrounds
BackgroundList["chondathan freebooter"] = {
	regExpSearch : /^(?=.*chondathan)(?=.*freebooter).*$/i,
	name : "Chondathan Freebooter",
	source : [["FRHoF", 0]],
	scorestxt : ["+2 and +1 -or- +1 to each from Strength, Dexterity, and Wisdom"],
	skills : ["Athletics", "Sleight of Hand"],
	toolProfs : ["Weaver's tools"],
	gold : 38,
	equipleft : [
		["Backpack", "", 5],
		["Bedroll", "", 7],
		["Bucket", "", 2],
		["Weaver's tools", "", 5],
		["Signal whistle", "", ""],
		["Rope", "", 5],
		["Bag of ball bearings", "", 2],
		["Rations, days of", 3, 2],
	],
	equipright : [
		["Dagger", "", 1],
		["Traveler's clothes", "", 4],
	],
	feature : "Chondathan Freebooter",
};
BackgroundFeatureList["chondathan freebooter"] = {
	description : [
		"Though most youths in Chondath accept their four-year term of compulsory military service, you bristled at that authoritarian attempt to control your life. You forsook your nationhood, discarded your given name, and worked as a freebooter with the first ship that would have you. Since then, you've traveled the Vilhon Reach. Thogh you've never sailed more than a few dozen leagues from land, you make up for it with deep local connections and the breadth of your experiences.",
	],
	source : [["FRHoF", 0]],
	eval : function () {
		AddFeat("Skilled [Origin]");
	},
	removeeval : function () {
		RemoveFeat("Skilled [Origin]");
	},
};
BackgroundList["dead magic dweller"] = {
	regExpSearch : /^(?=.*dead)(?=.*magic)(?=.*dweller).*$/i,
	name : "Dead Magic Dweller",
	source : [["FRHoF", 0]],
	scorestxt : ["+2 and +1 -or- +1 to each from Strength, Constitution, and Wisdom"],
	skills : ["Medicine", "Survival"],
	toolProfs : ["Leatherworker's tools"],
	gold : 32,
	equipleft : [
		["Bedroll", "", 7],
		["Blanket", "", 3],
		["Healer's kit", "", 3],
		["Leatherworker's tools", "", 5],
		["Pole", "", 7],
		["Tent", "", 20],
		["Tinderbox", "", 1],
		["Torches", 5, 1],
		["Rations, days of", 3, 2],
		["Waterskin", "", 5],
	],
	equipright : [
		["Greatclub", "", 10],
		["Traveler's clothes", "", 4],
	],
	feature : "Dead Magic Dweller",
};
BackgroundFeatureList["dead magic dweller"] = {
	description : [
		"The dead magic zones of the Anauroch desert are anathema to spellcasters and monsters that rely on magic-which is exactly why you made your life there. Perhapse you're on the run from Red Wizards, or you ran afoul of a powerful djinni in Calimshan. Whatever the case, you decided that living in Anauroch was your best option. After long months or years, you're stronger, wiser, and armed with hard-earned knowledge of desert medicine and wasteland survival.",
	],
	source : [["FRHoF", 0]],
	eval : function () {
		AddFeat("Healer [Origin]");
	},
	removeeval : function () {
		RemoveFeat("Healer [Origin]");
	},
};
BackgroundList["flaming fist mercenary"] = {
	regExpSearch : /^(?=.*flaming)(?=.*fist)(?=.*mercenary).*$/i,
	name : "Flaming Fist Mercenary",
	source : [["FRHoF", 0]],
	scorestxt : ["+2 and +1 -or- +1 to each from Strength, Constitution, and Charisma"],
	skills : ["Intimidation", "Perception"],
	toolProfs : ["Smith's tools"],
	gold : 4,
	equipleft : [
		["Smith's tools", "", 8],
		["Manacles", "", 6],
		["Ram, portable", "", 35],
	],
	equipright : [
		["Mace", "", 4],
		["Fine clothes", "", 6],
	],
	feature : "Flaming Fist Mercenary",
};
BackgroundFeatureList["flaming fist mercenary"] = {
	description : [
		"The chief law enforcement branch of Baldur's Gate is the Flaming Fist, a brawny mercenary guild led by the city's grand duke. You once served as a Flaming Fist, where yu learned how to preempt trouble with your intimidating stare and, when necessary, absorb deadly blows. Flaming Fist mercenaries, active or retired, are known as some of the toughest, most resilient warriors along the Sword Coast, and you seek to maintain that reputation.",
	],
	source : [["FRHoF", 0]],
	eval : function () {
		AddFeat("Tough [Origin]");
	},
	removeeval : function () {
		RemoveFeat("Tough [Origin]");
	},
};
BackgroundList["genie touched"] = {
	regExpSearch : /^(?=.*genie)(?=.*touched).*$/i,
	name : "Genie Touched",
	source : [["FRHoF", 0]],
	scorestxt : ["+2 and +1 -or- +1 to each from Dexterity, Wisdom, and Charisma"],
	skills : ["Perception", "Persuasion"],
	toolProfs : ["Glassblower's tools"],
	gold : 2,
	equipleft : [
		["Glassblower's tools", "", 5],
		["Lamp", "", 1],
		["Oil, flasks of", 3, 1],
		["Waterskin", "", 5],
	],
	equipright : [
		["Light hammer", "", 2],
		["Fine clothes", "", 6],
	],
	feature : "Genie Touched",
};
BackgroundFeatureList["genie touched"] = {
	description : [
		"Although genies no longer rule Calimshan, genie magic is still common in your homeland. Perhaps you inadvertently summoned a djinni from a magic lamp, or maybe you came upon an oasis guarded by a marid. A dao might have saved you from a landslide, or you bargained with an efreeti for fleeting wealth. However your fate intersected with that of a genie, the experience left you with a keen eye, a silver tongue, and more than a touch of magic.",
	],
	source : [["FRHoF", 0]],
	eval : function () {
		AddFeat("Magic Initiate (Wizard) [Origin]");
	},
	removeeval : function () {
		RemoveFeat("Magic Initiate (Wizard) [Origin]");
	},
};
BackgroundList["ice fisher"] = {
	regExpSearch : /^(?=.*ice)(?=.*fisher).*$/i,
	name : "Ice Fisher",
	source : [["FRHoF", 0]],
	scorestxt : ["+2 and +1 -or- +1 to each from Strength, Dexterity, and Constitution"],
	skills : ["Animal Handling", "Athletics"],
	toolProfs : ["Woodcarver's tools"],
	gold : 32,
	equipleft : [
		["Woodcarver's tools", "", 5],
		["Basket", "", 2],
		["Block and tackle", "", 5],
		["Bucket", "", 2],
		["Chain", "", 10],
		["Hunting trap", "", 25],
		["Pole", "", 7],
		["Rations, days of", 3, 2],
		["Rope", "", 5],
	],
	equipright : [
		["Net", "", 3],
		["Traveler's clothes", "", 4],
	],
	feature : "Ice Fisher",
};
BackgroundFeatureList["ice fisher"] = {
	description : [
		"You come from a proud line of ice fishers out of Ten-Towns in Icewind Dale. Catching knucklehead trout isn't the most glorious trade in the North, but it's an honest living. You've trained your senses for the slightest tug on the line, wrestled big trout out of ice-covered laes, and gutted enough knucklehead trout to feed your village many times over. These experiences have toughened your body and mind for a life of adventuring.",
	],
	source : [["FRHoF", 0]],
	eval : function () {
		AddFeat("Alert [Origin]");
	},
	removeeval : function () {
		RemoveFeat("Alert [Origin]");
	},
};
BackgroundList["moonwell pilgrim"] = {
	regExpSearch : /^(?=.*moonwell)(?=.*pilgrim).*$/i,
	name : "Moonwell Pilgrim",
	source : [["FRHoF", 0]],
	scorestxt : ["+2 and +1 -or- +1 to each from Constitution, Wisdom, and Charisma"],
	skills : ["Nature", "Performance"],
	toolProfs : ["Painter's supplies"],
	gold : 13,
	equipleft : [
		["Painter's supplies", "", 5],
		["Bedroll", "", 7],
		["Bell", "", ""],
		["String", "", ""],
		["Waterskin", "", 5],
	],
	equipright : [
		["Quarterstaff", "", 4],
		["Pouch", "", 1],
		["Robe", "", 4],
		["Traveler's clothes", "", 4],
	],
	feature : "Moonwell Pilgrim",
};
BackgroundFeatureList["moonwell pilgrim"] = {
	description : [
		"Like many who hail from the Moonshae Isles, you grew up revering the blessed land, its unique gods, and the mysterious shrines called the moonwells. As a moonwell pilgrim, you undertook a quest to visit and commune with every moonwell on (or off) the map. Along your idyllic journeys, you collected a repertoire of Moonshavian folk songs, painted landscapes of enhanting vistas, and even learned how to wield a bit of primal magic.",
	],
	source : [["FRHoF", 0]],
	eval : function () {
		AddFeat("Magic Initiate (Druid) [Origin]");
	},
	removeeval : function () {
		RemoveFeat("Magic Initiate (Druid) [Origin]");
	},
};
BackgroundList["mulhorandi tomb raider"] = {
	regExpSearch : /^(?=.*mulhorandi)(?=.*tomb)(?=.*raider).*$/i,
	name : "Mulhorandi Tomb Raider",
	source : [["FRHoF", 0]],
	scorestxt : ["+2 and +1 -or- +1 to each from Dexterity, Constitution, and Intelligence"],
	skills : ["Investigation", "Religion"],
	toolProfs : ["Mason's tools"],
	gold : 26,
	equipleft : [
		["Mason's tools", "", 5],
		["Backpack", "", 5],
		["Bedroll", "", 7],
		["Crowbar", "", 5],
		["Ladder", "", 25],
		["Pole", "", 7],
		["Rope", "", 5],
		["String", "", ""],
		["Tinderbox", "", 1],
		["Torches", 5, 1],
		["Waterskin", "", 5],
	],
	equipright : [
		["Dagger", "", 1],
		["Light hammer", "", 2],
		["Pouches", 2, 1],
		["Traveler's clothes", "", 4],
	],
	feature : "Mulhorandi Tomb Raider",
};
BackgroundFeatureList["mulhorandi tomb raider"] = {
	description : [
		"You grew up in a land of living god-kings, and as a child you were told countless stories of ancient empires and buried cities. In these tales, Mulhorand was a land overflowing with forgotten riches-priceless treasures awaiting anyone cunning and brave enough to seek them out. You've taken it upon yourself to explore your homeland's crypts, tombs, and pyramids to reclaim your people's relics.",
	],
	source : [["FRHoF", 0]],
	eval : function () {
		AddFeat("Lucky [Origin]");
	},
	removeeval : function () {
		RemoveFeat("Lucky [Origin]");
	},
};
BackgroundList.mythalkeeper = {
	regExpSearch : /^(?=.*mythalkeeper).*$/i,
	name : "Mythalkeeper",
	source : [["FRHoF", 0]],
	scorestxt : ["+2 and +1 -or- +1 to each from Intelligence, Wisdom, and Charisma"],
	skills : ["Arcana", "History"],
	toolProfs : ["Jeweler's tools"],
	gold : 16,
	equipleft : [
		["Jeweler's tools", "", 2],
		["Perfume", "", ""],
		["Shovel", "", 5],
		["String", "", ""],
		["Waterskin", "", 5],
	],
	equipright : [
		["Quarterstaff", "", 4],
		["Pouch", "", 1],
		["Robe", "", 4],
	],
	feature : "Mythalkeeper",
};
BackgroundFeatureList.mythalkeeper = {
	description : [
		"Mythals are sources of great magical power that can alter the Weave or even the very nature of reality. Most were constructed in antiquity, and many have since been damaged or gone dormant. As a mythalkeeper from the Dalelands, your frst experience with a mythal was likely in the ruins of Myth Drannor. You roam Faerûn in search of other ruined places of power, hoping to learn more about the history and powersof mythals-or even restore a manfunctioning one.",
	],
	source : [["FRHoF", 0]],
	eval : function () {
		AddFeat("Crafter [Origin]");
	},
	removeeval : function () {
		RemoveFeat("Crafter [Origin]");
	},
};
BackgroundList["rashemi wanderer"] = {
	regExpSearch : /^(?=.*rashemi)(?=.*wanderer).*$/i,
	name : "Rashemi Wanderer",
	source : [["FRHoF", 0]],
	scorestxt : ["+2 and +1 -or- +1 to each from Strength, Constitution, and Charisma"],
	skills : ["Intimidation", "Perception"],
	toolProfs : ["Cartographer's tools"],
	gold : 23,
	equipleft : [
		["Cartographer's tools", "", 6],
		["Backpack", "", 5],
		["Bedroll", "", 7],
		["Hooded lantern", "", 2],
		["Oil, flasks of", 3, 1],
		["Rope", "", 5],
		["Tinderbox", "", 1],
	],
	equipright : [
		["Traveler's clothes", "", 4],
	],
	feature : "Rashemi Wanderer",
};
BackgroundFeatureList["rashemi wanderer"] = {
	description : [
		"You spent years wandering the highlands of Rashemen, a dangerous windswept heath that's dotted with ancient obelisks enchanted to imprison Fiends and home to dragons, gnolls, and other deadly creatures. Friendships are hard to find in such an isolated land, and you've learned to keep strangers at a distance.",
	],
	source : [["FRHoF", 0]],
	eval : function () {
		AddFeat("Tough [Origin]");
	},
	removeeval : function () {
		RemoveFeat("Tough [Origin]");
	},
};
BackgroundList["shadowmasters exile"] = {
	regExpSearch : /^(?=.*shadowmasters)(?=.*exile).*$/i,
	name : "Shadowmasters Exile",
	source : [["FRHoF", 0]],
	scorestxt : ["+2 and +1 -or- +1 to each from Dexterity, Intelligence, and Charisma"],
	skills : ["Acrobatics", "Stealth"],
	toolProfs : ["Thieves' tools"],
	gold : 3,
	equipleft : [
		["Thieves' tools", "", 1],
		["Caltrops", 20, 0.1],
		["Grappling hook", "", 4],
		["Iron spikes", 10, 0.5],
		["Mirror", "", 0.5],
		["Rope", "", 5],
	],
	equipright : [
		["Dagger", 2, 1],
		["Costume", "", 4],
		["Pouches", 2, 1],
		["Traveler's clothes", "", 4],
	],
	feature : "Shadowmasters Exile",
};
BackgroundFeatureList["shadowmasters exile"] = {
	description : [
		"You trained your whole life to become a member of the Shadowmasters, the mysterious thieves' guild that controles the realm of Thesk from behind the scenes. Stealth and quick reflexes were just the start of your Shadowmaster education; you also needed to hone your ruthlessness to ensure the safety of the guild's secrets. But one wrong move led to yourexpulsion from the order. Now you must walk your own path.",
	],
	source : [["FRHoF", 0]],
	eval : function () {
		AddFeat("Savage Attacker [Origin]");
	},
	removeeval : function () {
		RemoveFeat("Savage Attacker [Origin]");
	},
};
//Faction Backgrounds
BackgroundList["dragon cultist"] = {
	regExpSearch : /^(?=.*dragon)(?=.*cultist).*$/i,
	name : "Dragon Cultist",
	source : [["FRHoF", 0]],
	scorestxt : ["+2 and +1 -or- +1 to each from Dexterity, Constitution, and Intelligence"],
	skills : ["Deception", "Stealth"],
	toolProfs : ["Calligrapher's supplies"],
	gold : 30,
	equipleft : [
		["Calligrapher's supplies", "", 5],
		["Bottle, glass", "", 2],
		["Lamp", "", 1],
		["Manacles", "", 6],
		["Oil, flasks of", 5, 1],
		["Rope", "", 5],
	],
	equipright : [
		["Dagger", "", 1],
		["Pouches", 2, 1],
		["Robe", "", 4],
		],
	feature : "Dragon Cultist",
};
BackgroundFeatureList["dragon cultist"] = {
	description : [
		"You are an initiate of the Cult of the Dragon. You discovered or were brought to a cell cult, where you exemplified the values honored by dragon cultists: duplicity, secrcy, and determination. In exchange for your oath to serve the cult, the cult offered you the company of fellow dragon worshipers, plus access to resources that might help further your studies in the realms of arcana and occultism.",
	],
	source : [["FRHoF", 0]],
	eval : function () {
		AddFeat("Cult of the Dragon Initiate [Origin]");
	},
	removeeval : function () {
		RemoveFeat("Cult of the Dragon Initiate [Origin]");
	},
};
BackgroundList["emerald enclave caretaker"] = {
	regExpSearch : /^(?=.*emerald)(?=.*enclave)(?=.*caretaker).*$/i,
	name : "Emerald Enclave Caretaker",
	source : [["FRHoF", 0]],
	scorestxt : ["+2 and +1 -or- +1 to each from Constitution, Intelligence, and Wisdom"],
	skills : ["Nature", "Survival"],
	toolProfs : ["Herbalism kit"],
	gold : 13,
	equipleft : [
		["Herbalism kit", "", 3],
		["Bedroll", "", 7],
		["Blanket", "", 3],
		["Tent", "", 20],
	],
	equipright : [
		["Shortbow", "", 1],
		["Arrows", 20, 0.05],
		["Pouch", "", 1],
		["Traveler's clothes", "", 4],
	],
	feature : "Emerald Enclave Caretaker",
};
BackgroundFeatureList["emerald enclave caretaker"] = {
	description : [
		"As a Caretaker with the Emerald Enclave, you take care of those who care for the world. Either alongside your fellow Emerald Enclave members or by yourself, you've learned essential skills for living with the land: how to track game, where to forage for useful herbs, and even how to forecast the weather. You use these talents to maintain the balance between civilization and the wilds and to rid the world of unnatural creatures.",
	],
	source : [["FRHoF", 0]],
	eval : function () {
		AddFeat("Emerald Enclave Fledgling [Origin]");
	},
	removeeval : function () {
		RemoveFeat("Emerald Enclave Fledgling [Origin]");
	},
};
BackgroundList.harper = {
	regExpSearch : /^(?=.*harper).*$/i,
	name : "Harper",
	source : [["FRHoF", 0]],
	scorestxt : ["+2 and +1 -or- +1 to each from Dexterity, Intelligence, and Charisma"],
	skills : ["Performance", "Sleight of Hand"],
	toolProfs : ["Disguise kit"],
	gold : 14,
	equipleft : [
		["Disguise kit", "", 3],
		["Bedroll", "", 7],
		["Grappling hook", "", 4],
		["Rope", "", 5],
	],
	equipright : [
		["Costume", "", 5],
		["Traveler's clothes", "", 4],
	],
	feature : "Harper",
};
BackgroundFeatureList.harper = {
	description : [
		"You accepted an invitation to join the Harpers, pledging an oath to uphold the Harper code and act in service to the common good. Like all Harpers, you understand the value of teamwork as well as when it's best to go it alone. Harper veterans have taught you the order's secrets-magical mlodies, special watchwords, and legerdemain-and have entrusted you to use such knoledge to surveil and undermine the forces of evil.",
	],
	source : [["FRHoF", 0]],
	eval : function () {
		AddFeat("Harper Agent [Origin]");
	},
	removeeval : function () {
		RemoveFeat("Harper Agent [Origin]");
	},
};
BackgroundList["knights of the gauntlet"] = {
	regExpSearch : /^(?=.*knights)(?=.*gauntlet).*$/i,
	name : "Knights of the Gauntlet",
	source : [["FRHoF", 0]],
	scorestxt : ["+2 and +1 -or- +1 to each from Strength, Intelligence, and Wisdom"],
	skills : ["Athletics", "Medicine"],
	toolProfs : ["Smith's tools"],
	gold : 9,
	equipleft : [
		["Smith's tools", "", 8],
		["Bullseye lantern", "", 2],
		["Holy symbol", "", 1],
		["Manacles", "", 6],
		["Oil, flasks of", 5, 1],
		["Tinderbox", "", 1],
	],
	equipright : [
		["Spear", "", 3],
		["Traveler's clothes", "", 4],
	],
	feature : "Knights of the Gauntlet",
};
BackgroundFeatureList["knights of the gauntlet"] = {
	description : [
		"Not all who answer the call of a higher power arecontent to pore over scripture in a stuffy temple apse. you chose the path of the holy warrior by joining the Order of the Gauntlet. As a knight of the Gauntlet, you excercise righteous scorn for the forces of evil, unswerving camaraderie for your siblings in arms, and heartfelt compassion for the survivors of war. With weapon and holy symbol in hand, you've sworn not to rest until the light of justice has vanquished the shadow of chaos across Faerûn.",
	],
	source : [["FRHoF", 0]],
	eval : function () {
		AddFeat("Tyro of the Gauntlet [Origin]");
	},
	removeeval : function () {
		RemoveFeat("Tyro of the Gauntlet [Origin]");
	},
};
BackgroundList["lords' alliance vassal"] = {
	regExpSearch : /^(?=.*lords)(?=.*alliance)(?=.*vassal).*$/i,
	name : "Lords' Alliance Vassal",
	source : [["FRHoF", 0]],
	scorestxt : ["+2 and +1 -or- +1 to each from Strength, Intelligence, and Charisma"],
	skills : ["Insight", "Persuasion"],
	toolProfs : ["Calligrapher's supplies"],
	gold : 13,
	equipleft : [
		["Calligrapher's supplies", "", 5],
		["Ink", "", ""],
		["Ink pens", 5, ""],
		["Parchment, sheets of", 9, ""],
	],
	equipright : [
		["Javelin", 2, 2],
		["Fine clothes", "", 6],
	],
	feature : "Lords' Alliance Vassal",
};
BackgroundFeatureList["lords' alliance vassal"] = {
	description : [
		"You've pledged your loyalty to a member-city of the Lords' Alliance. As an Alliance agent, you must uphold the tenets of the Alliance and seek to increase safety and prosperity along the Sword Coast. You're sworn to bring honor and glory to your lord's house, whether that means securing trade roads for a merchant-lord of Waterdeep or vanquishing monsters upriver of Daggerford. You've trained in the arts of swordplay and statecraft and are as deft with a blade as you are with a quill.",
	],
	source : [["FRHoF", 0]],
	eval : function () {
		AddFeat("Lords' Alliance Agent [Origin]");
	},
	removeeval : function () {
		RemoveFeat("Lords' Alliance Agent [Origin]");
	},
};
BackgroundList["purple dragon squire"] = {
	regExpSearch : /^(?=.*purple)(?=.*dragon)(?=.*squire).*$/i,
	name : "Purple Dragon Squire",
	source : [["FRHoF", 0]],
	scorestxt : ["+2 and +1 -or- +1 to each from Strength, Wisdom, and Charisma"],
	skills : ["Animal Handling", "Insight"],
	toolProfs : ["Navigator's tools"],
	gold : 9,
	equipleft : [
		["Navigator's tools", "", 2],
	],
	equipright : [
		["Spear", "", 3],
		["Fine clothes", "", 6],
	],
	feature : "Purple Dragon Squire",
};
BackgroundFeatureList["purple dragon squire"] = {
	description : [
		"You've pledged your life to the safety of Cormyr and sought admission to that realm's order of elite warrior: the Purple Dragon Knights. But before you have the chance to join the ranks officailly, you must first serve as a knights's squire. You've found a liege willing to take you on and teach you the order's ways. Will you uphold the Purple Dragon Knight's ideals of glory, honor, and strength and prove yourself worthy of knighthood?",
	],
	source : [["FRHoF", 0]],
	eval : function () {
		AddFeat("Purple Dragon Rook [Origin]");
	},
	removeeval : function () {
		RemoveFeat("Purple Dragon Rook [Origin]");
	},
};
BackgroundList["zhentarim mercenary"] = {
	regExpSearch : /^(?=.*zhentarm)(?=.*mercenary).*$/i,
	name : "Zhentarm Mercenary",
	source : [["FRHoF", 0]],
	scorestxt : ["+2 and +1 -or- +1 to each from Strength, Dexterity, and Charisma"],
	skills : ["Intimidation", "Perception"],
	toolProfs : ["Forgery kit"],
	gold : 11,
	equipleft : [
		["Forgery kit", "", 5],
		["Hooded lantern", "", 2],
		["Oil, flasks of", 3, 1],
		["String", "", ""],
		["Tinderbox", "", 1],
	],
	equipright : [
		["Club", "", 2],
		["Dagger", "", 1],
		["Pouches", 2, 1],
		["Fine clothes", "", 6],
	],
	feature : "Zhentarim Mercenary",
};
BackgroundFeatureList["zhentarim mercenary"] = {
	description : [
		"Maybe you needed the money. Maybe you longed for a family, no matter how dubious. Or maybe you're just good at getting the job done by any means necessary. Whatever your reason, you enlisted with the Zhentarim, the most notorious mercenary guild in the Realms. Though the Zhentarim;s leaders insist the organization is more like a family than a shadowy syndicate, few families exhibit as much dishonesty, nepotism, and corruption as this one. You've honed your cunnng, reflexes, and blade to climb the guild's ranks.",
	],
	source : [["FRHoF", 0]],
	eval : function () {
		AddFeat("Zhentarim Ruffian [Origin]");
	},
	removeeval : function () {
		RemoveFeat("Zhentarim Ruffian [Origin]");
	},
};
//Feats
//Origin Feats
FeatsList["cult of the dragon initiate"] = {
	name : "Cult of the Dragon [Origin]",
	source : [["FRHoF", 0]],
	regExpSearch : /^(?=.*cult)(?=.*dragon)(?=.*initiate).*$/i,
	languageProfs : [["Draconic", 1]],
	action : [["action", "Dragon's Terror"]],
	extraLimitedFeatures : [{
		name : "Inspired by Fear",
		usages : 1,
		recovery : "short rest",
	}],
	description : "I know Draconic, or one other language of choice if Draconic is already known. As a Magic action, I can cause a crea w/i 30 ft of me to make a Wis save (DC=8+Wis+Prof) or be Frightened until the end of my next turn, on a success/end of the effect the target is immune to this effect for 24 hours. When I cause a crea to become Frightened I can gain Heroic Inspiration if I lack it, I can only do this once before a Short or Long Rest.",
	descriptionFull : [
		"You gain the following benefits",
		"***Dragon's Tongue***. You know Draconic. If you already know Draconic when you select this feat, you instead learn one language of your choice from the languages tables in the Player's Handbook or chapter 2 of this book.",
		"***Dragon's Terror***. You can take a Magic action to instill terror in a creature you can see within 30 feet of yourself. The target must succeed on a Wisdom saving throw (DC 8 plus your Wisdom modifier and Proficiency Bonus) or have the Frightened condition until the end of your next turn. If the target succeeds on the save or when the effect ends for a target, the target is immune to this effect for 24 hours.",
		"***Inspired by Fear***. When you cause a creature to have the Frightened condition and you are the source of its fear, you can gain Heroic Inspiration if you lack it. Once you use this benefit, you can't use it again until you finish a Short or Long Rest.",
	],
};
FeatsList["emerald enclave fledgling"] = {
	name : "Emerald Enclave Fledgling [Origin]",
	source : [["FRHoF", 0]],
	regExpSearch : /^(?=.*emerald)(?=.*enclave)(?=.*fledgling).*$/i,
	action : [["action", "Switch Places (with Help action)"]],
	spellcastingAbility: [4, 5, 6],
	spellcastingBonus : [{
		name : "Speak with Animals",
		spells : ["speak with animals"],
		selection : ["speak with animals"],
		prepared : true,
	}],
	description : "I always have the Speak with Animals spell prepared, and can cast it with any spell slots I have, if I ritually cast the spell it has a duration of 8 hours. Additionally, when I take the Help action, I can switch places with a willing ally w/i 5 ft as part of that action, this movement doesn't provoke Opportunity Attacks, this action can not be taken if the ally has the Incapacitated condition.",
	descriptionFull : [
		"You gain the following benefits",
		"***Speak with Animals***. You always have the Speak with Animals spell prepared and can cast it with any spell slots you have. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (chose when you select this feat). When you cast this spell as a Ritual, its duration is 8 hours.",
		"***Tag Team***. When you take the Help action, you can switch places with a willing ally within 5 feet of yourself as part of that same action. This movement doesn't provoke Opportunity Attack action. You can't use this benefit if the ally has the Incapacitated condition.",
	],
};
FeatsList["harper agent"] = {
	name : "Harper Agent [Origin]",
	source : [["FRHoF", 0]],
	regExpSearch : /^(?=.*harper)(?=.*agent).*$/i,
	languageProfs : [["Thieves' Cant"]],
	toolProfs : [["Musical Instrument", 1]],
	description : "I know Thieves' Cant. I gain proficiency with a Musical Instrument of choice. Additionally, when I take the Help action to assist an ally's attack roll, the enemy I'm distracting can be within 30 ft as long as the enemy can see or hear me.",
	descriptionFull : [
		"You gain the following benefits",
		"***Thieves' Cant***. You know Thieves' Cant.",
		"***Instrument Training***. You gain proficiency with a Musical Instrument of your choice.",
		"***Distracting Melody***. When you take the Help action to assist an ally's attack roll, the enemy you're distracting can be within 30 feet of you, rather than within 5 feet of you, provided the enemy can see or hear you.",
	],
};
FeatsList["lords' alliance agent"] = {
	name : "Lords' Alliance Agent [Origin]",
	source : [["FRHoF", 0]],
	regExpSearch : /^(?=.*lords)(?=.*alliance)(?=.*agent).*$/i,
	description : "Once per turn, when I score a Critical Hit, I can choose an ally within 30 ft and grant them Heroic Inspiration if they lack it. Additionally, when an enemy deals dmg to an ally w/i 5 ft of me, I gain Adv on my next atk roll against that enemy before the end of my next turn.",
	descriptionFull : [
		"You gain the following benefits",
		"***Inspiring Strike***. Once per turn when you score a Critical Hit against a creature, you can choose an ally within 30 feet of yourself who can see or hear you and who lacks Heroic Inspiration. That ally gains Heroic Inspiration.",
		"***Reassert Honor***. When an enemy you can see deals damage to an ally of yours that is within 5 feet of you, you have Advantage on your next attack roll against that enemy before the end of your next turn.",
	],
};
FeatsList["purple dragon rook"] = {
	name : "Purple Dragon Rook [Origin]",
	source : [["FRHoF", 0]],
	regExpSearch : /^(?=.*purple)(?=.*dragon)(?=.*rook).*$/i,
	skillstxt : "Choose one: Insight, Performance, or Persuasion",
	extraLimitedFeatures : [{
		name : "Rallying Cry",
		usages : 1,
		recovery : "Long Rest",
	}],
	description : "I gain proficiency in one of the following skills: Insight, Performance, or Persuasion. Additionally, once per long rest, when I roll for Initiative I can give a number of crea up to my Prof bonus that I can see w/i 30 ft of myself Heroic Inspiration.",
	descriptionFull : [
		"You gain the following benefits",
		"***Entreat***. You gain proficiency in one of the following skills: Insight, Performance, or Persuasion.",
		"***Rallying Cry***. When you roll for Initiative and don't have the Incapacitated condition, you can choose a number of creatures equal to your Proficiency Bonus that you can see within 30 feet of yourself. Those creatures gain Heroic Inspiration.",
		"Once you use this benefit, you can't do so again until you finish a Long Rest.",
	],
};
FeatsList["spellfire spark"] = {
	name : "Spellfire Spark [Origin]",
	source : [["FRHoF", 0]],
	regExpSearch : /^(?=.*spellfire)(?=.*spark).*$/i,
	extraLimitedFeatures : [{
		name : "Sacred Flame (Bns)",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "Long Rest",
	}],
	spellcastingAbility: [4, 5, 6],
	spellcastingBonus : [{
		name : "Spellfire Flame",
		spells : ["sacred flame"],
		selection : ["sacred flame"],
		firstCol : "atwill",
	}],
	action : [["bonus action", "Cast Sacred Flame"]],
	description : "Once per turn, when I take dmg from a spell or magical effect, I can reduce the dmg by 1d4, I can't do this if I have the Incapacitated condition. I learn the Sacred Flame cantrip, and can cast it a number of times equal to my Prof as a Bns before a Long Rest.",
	descriptionFull : [
		"You gain the following benefits",
		"***Magic Absorption***. Once per turn, when you take damage from a spell or magical effect, you reduce the total damage taken by 1d4. You can't use this benefit if you have the Incapacitated condition.",
		"***Spellfire Flame***. You learn the Sacred Flame cantrip. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this fear). You can also cast this cantrip as a Bonus Action a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
	],
};
FeatsList["tyro of the gauntlet"] = {
	name : "Tyro of the Gauntlet [Origin]",
	source : [["FRHoF", 0]],
	regExpSearch : /^(?=.*tyro)(?=.*gauntlet).*$/i,
	action : [["reaction", "Prevent Ally Push/Pull"]],
	description : "As a Rea, when an ally w/i 5 ft is subjected to an effect that pushes or pulls it, I can prevent it, as long as the ally doesn't have the Incapacitated condition. When I take the Ready action, the next atk roll made against me before the start of my next turn has Disadv.",
	descriptionFull : [
		"You gain the following benefits",
		"***Stand as One***. When an ally within 5 feet of you is subjected to an effect that would push or pull it, you can take a Reaction to prevent that ally from being pushed or pulled. To receive this benefit, the ally can't have the Incapacitated condition.",
		"***Vigilant***. When you take the Ready action, the next attack roll made against you has Disadvantage before the start of your next turn.",
	],
};
FeatsList["zhentarim ruffian"] = {
	name : "Zhentarim Ruffian [Origin]",
	source : [["FRHoF", 0]],
	regExpSearch : /^(?=.*zhentarim)(?=.*ruffian).*$/i,
	description : "When I roll dmg for an Opportunity Atk, I can roll the damage twice and use either roll. If I have Heroic Inspiration when I roll Initiative, I can expend it to give myself and allies Adv on that Initiative roll.",
	descriptionFull : [
		"You gain the following benefits",
		"***Exploit Oppening***. When you roll damage for an Opportunty Attack action, you can roll the damage dice twice and use either roll against the target.",
		"***Family First***. If you have Heroic Inspiration when you roll Initiative, you can expend it to give yourself and your allies Advantage on that Initiative roll.",
	],
};
//General Feats
//Epic Boons
