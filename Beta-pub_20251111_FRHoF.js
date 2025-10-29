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
				"##Inspired Eclipse##. When I use a Bns to give a crea BI, I can have the Invisible condition and teleport up to 30 ft to an unoccupied space as part of the same bns. This invisibility lasts until the start of my next turn, and ends early if I make an atk roll, deal dmg, or cast a spell.",
				"##Lunar Vitality##. Once per turn, when I heal a crea with a spell, I can expend a BI die and increase the HP restored by the number rolled on the BI die. The crea's Speed also increases by 10 ft until the end of its next turn."
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
				"##Shadow of the New Moon##. When I use Inspired Eclipse, the crea who recieved my BI can have the Invisible condition and immediately use its Rea to teleport up to 30 ft to an unoccupied space it can see. The crea remains Invisible until the start of its next turn.",
				"##Vibrance of the full Moon##. When I use Lunar Vitality, I can roll 1d6 and use the number rolled in place of expending a BI die.",
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
				"##Comprehension##. I can cast the Comprehend Languages spell, but only as a Ritual. Cha is my spellcasting ability for it.",
				"##Polyglot##. I learn one language from the languages table in the PHB'24 or chapter 2 of FRHoF. When I finish a Long Rest, I can replace the language learned by this benefit with another language I have heard, seen signed, or read in the past 24 hours.",
				"##Well Spoken##. I gain Prof in one of the following skills: Insight, Intimidation, Persuasion, or Performance.",
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
				"##Attack##. The ally makes one attack with a weapon or an Unarmed Strike",
				"##Move##. The ally moves up to half its Speed without provoking Opportunity Attacks.",
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
				"##Bolstered Rally##. The area of effect for both Group Recovery and Rallying Surge is now a 60-ft Emanation",
				"##Unshakable Bravery##. I have Immunity to the Charmed and Frightened conditions.",
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
				"##Flight##. I have a Fly Speed of 60 ft and can hover.",
				"##Minor Wish##. When an I or an ally in my Aura of Protection fails a D20 Test, I can take a Rea to make myself or that ally succeed instead.",
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
				"##Biting Cold##. Dmg from my weapon atks, Ranger spells, and Ranger features ignores Resistance to Cold dmg.",
				"##Frost Resistance##. I have Resistance to Cold damage",
				"##Polar Strikes##. When I hit a crea with an atk roll using a weapon, I can deal extra Cold dmg to the target, which can take this extra dmg only once per turn.",
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
				"##Frozen Soul##. I have Immunity to Cold damage. When I first adopt this form and at the start of each of my subsequent turns, each crea of my choice in a 15-ft Emanation originating from me takes 2d4 Cold damage.",
				"##Partially Incorporeal##. i have Immunity to the Grappled, Prone, and Restrained conditions. I can move through creatures and objects as if they were Difficult Terrain, but I take 1d10 Force dmg if I end my turn inside a crea or an object. If the form ends while I am inside a crea or object, I am shunted to the nearest unoccupied space.",
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
				"##Terrifiy (Cost: 1d6)##. The target must succeed on a Wis save, or it has the Frightened condition for 1 minute. While the target is Frightened in this way, I have Adv on atk rolls against the target. The Frightened target repeats the save at the end of each of its turns, ending theeffect on a success.",
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
				"##Cutthroat##. I regain one expended use of Bloodthirst when I finish a Short Rest.",
				"##Murderous Intent##. When I roll for my Sneak Attack damage, I can treat a roll of 1 or 2 on the die as a 3.",
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
				"##Bolstering Flames##. Me or a crea I can see within 30 ft of me gains 1d4 + Cha Mod Temp HP.",
				"##Radiant Fire##. One crea I can see within 30 ft of me takes 1d4 Fire or Radiant dmg (my choice).",
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
				"##Burning Life Force##. Once per turn when I am hit by an attack roll, I can expend a number of HD, up to a max equal to my Cha Mod (min 1). Roll the expended dice, and reduce the amount of damage from that atttack equal to the total rolled.",
				"##Flight##. I gain a Fly Speed of 60 ft and can hover.",
				"##Spell Avoidance##. When I'm subjected to a spell or magical effect that allows me to make a save to take only half damage, I instead take no damage if I succeed on the save and only half dmg if I fail. I can't use this benefit if I have the Incapacitated condition.",
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
				"##Agility##. Intelligence modifier (min 1) to AC, Speed increases by 10 ft, Advantage on Dexterity (Acrobatics) checks.",
				"##Bladework##. When I attack with a weapon with which I have proficiency, I can use my Int mod for the atk and dmg rolls instead of Str or Dex.",
				"##Focus##. Intelligence modifier (min 1) to concentration saves for maintaining conc. on a spell",
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
