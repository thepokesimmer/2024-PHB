var iFileName = "pub_20251111_FRHoF.js";
RequiredSheetVersion("13.2.3");
SourceList["FRHoF"] = {
	name: "Forgotten Realms: Heroes of Faerûn",
	abbreviation: "FRHoF",
	abbreviationSpellsheet: "HF",
	group : "Campaign Sourcebooks",
	campaignSetting : "Forgotten Realms",
};
// Coded By: ThePokésimmer with contributions from Shroo, Rocky, and Reading Toskr
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
				"**Inspired Eclipse**. When I use a Bns to give a crea BI, I can gain the Invisible condition and teleport up to 30 ft to an unoccupied space. This invisibility lasts until the start of my next turn, and ends early if I make an atk roll, deal dmg, or cast a spell.",
				"**Lunar Vitality**. Once per turn, when I heal a crea with a spell, I can expend a BI die and increase the HP restored by the number rolled on the die. The crea's Speed also increases by 10 ft until the end of its next turn."
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
				"Once per Long Rest, I can modify the casting of Moonbeam to cause me to glow for the duration. While glowing, I shed Dim Light in a 5 ft Emanation. When a crea fails its save against the effects of Moonbeam, another crea, of my choice, I can see within 60 ft of me regains 2d4 HP.",
			],
		},
		"subclassfeature14" : {
			name : "Eventide's Splendor",
			source : [["FRHoF", 0]],
			minlevel : 14,
			description : [
				"**Shadow of the New Moon**. When I use Inspired Eclipse, the crea who received my BI can have the Invisible condition and immediately use its Rea to teleport up to 30 ft to an unoccupied space it can see. The crea remains Invisible until the start of its next turn.",
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
				"I gain Proficiency in one Artisan's Tools of choice. Additionally, I gain Proficiency in two of the following skills: Arcana, History, Nature, Religion.",
			],
		},
		"subclassfeature3.1" : {
			name : "Mind Magic",
			source : [["FRHoF", 0]],
			minlevel : 3,
			action : [["action", ""]],
			description : [
				"As a Magic Action, I can expend one use of my CD, choose one of my Domain Spells from the Div school that I have prepared. As part of this action, I can cast the spell without expending a Spell Slot or needing Material components.",
			],
		},
		"subclassfeature6" : {
			name : "Unfettered Mind",
			source : [["FRHoF", 0]],
			minlevel : 6,
			senses : [["Telepathy", 60]],
			saves : ["Int", "Wis", "Cha"],
			description : [
				"I gain Telepathy out to 60 ft. When I use this Telepathy, I can simultaneously contact a number of crea equal to my Wis mod (min 1). Additionally, I gain proficiency in Intelligence Saving Throws. If I already have this Prof, I instead gain Prof in a save I lack.",
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
legacySubClassRefactor("fighter", "banneret", {
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
				"**Attack**. The ally makes one attack with a weapon or an Unarmed Strike.",
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
				"**Bolstered Rally**. The area of effect for both Group Recovery and Rallying Surge is now a 60-ft Emanation.",
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
				"Choose one of the following dmg types: Acid, Cold, Fire, Lightning, or Thunder. My allies and I have Resistance to that dmg type while in my Aura of Protection. At the start of each of my turns, I can change the dmg type affected by this feature to one of the other listed options (no action required).",
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
				"**Frost Resistance**. I have Resistance to Cold damage.",
				"**Polar Strikes**. When I hit a crea with an atk roll using a weapon, I can deal extra Cold dmg to the target, which can take this extra dmg only once per turn.",
			],
		},
		"subclassfeature3.1" : {
			name : "Hunter's Rime",
			source : [["FRHoF", 0]],
			minlevel : 3,
			additional : "Temp HP: 1d10 + Ranger lvl",
			description : [
				"When I cast Hunter's Mark, I gain Temp HP equal to 1d10 plus my Ranger level. Additionally, while a crea is marked by my Hunter's Mark, it can't take the Disengage action.",
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
				"Once per Long Rest, as a Magic Action, choose a number of crea I can see equal to my Wis mod (min 1). Each chosen crea regains HP equal to 1d10 plus Ranger level, and has Adv on saves to avoid or end the Frightened condition for 1 hr.",
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
				"When a crea hits me with an attack roll, I can take a Rea to force the crea to make a Wis save against my Spell Save DC. On a failure, the target has the Stunned condition until the end of my next turn. While the target is Stunned, its Speed is reduced to 0 ft.",
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
				"Once per Long Rest, when I cast Hunter's Mark, I can adopt a ghostly, snowy form, which lasts until the spell ends, granting me the following benefits. I can regain my use of this feature by expending a lvl 4+ Spell slot (no action required).",
				"**Frozen Soul**. I have Immunity to Cold damage. When I first adopt this form and at the start of each of my subsequent turns, each crea of my choice in a 15-ft Emanation originating from me takes 2d4 Cold damage.",
				"**Partially Incorporeal**. I have Immunity to the Grappled, Prone, and Restrained conditions. I can move through creatures and objects as if they were Difficult Terrain, but I take 1d10 Force dmg if I end my turn inside a crea or an object. If the form ends while I am inside a crea or object, I am shunted to the nearest unoccupied space.",
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
				"Choose one of the Dead Three using the 'choose features' button. I gain one dmg resistance, and one cantrip associated with my choice. When I finish a Long Rest, I can change my choice.",
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
					"I gain Resistance to Psychic dmg, and I learn the Minor Illusion Cantrip. When I finish a Long Rest, I can change my Dread Allegiance using the 'choose features' button.",
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
					"I gain Resistance to Poison dmg, and I learn the Blade Ward Cantrip. When I finish a Long Rest, I can change my Dread Allegiance using the 'choose features' button.",
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
					"I gain Resistance to Necrotic dmg, and I learn the Chill Touch Cantrip. When I finish a Long Rest, I can change my Dread Allegiance using the 'choose features' button.",
				],
			},
		},	
		"subclassfeature9" : {
			name : "Strike Fear",
			source : [["FRHoF", 0]],
			minlevel : 9,
			description : [
				"I gain the following Cunning Strike Option.",
				"**Terrifiy (Cost: 1d6)**. The target must succeed on a Wis save, or it has the Frightened condition for 1 minute. While the target is Frightened in this way, I have Adv on atk rolls against the target. The Frightened target repeats the save at the end of each of its turns, ending the effect on a success.",
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
				"Additionally, when a target fails the Save against a Counterspell I cast, I regain 1d4 SP.",
			],
		},
		"subclassfeature14" : {
			name : "Honed Spellfire",
			source : [["FRHoF", 0]],
			minlevel : 14,
			description : [
				"My Spellfire Burst improves. I add my Sorcerer level to the Temp HP gained from Bolstering Flames, and the dmg of my Radiant Fire increases to 1d8.",
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
				"**Burning Life Force**. Once per turn, when I am hit by an attack roll, I can expend a number of HD, up to a max equal to my Cha Mod (min 1). Roll the expended dice, and reduce the amount of damage from that attack equal to the total rolled.",
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
				"Additionally, I gain prof in one of the following skills of choice: Acrobatics, Athletics, Performance, or Persuasion.",
			],
		},	
		"subclassfeature6" : {
			name : "Extra Attack",
			source : [["FRHoF", 0]],
			minlevel : 6,
			description : [
				"I can attack twice instead of once when I take the Attack action on my turn.",
				"Moreover, I can cast one of my cantrips, with a casting time of 1 a, in place of one of those attacks."
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
		"You bear the gift of spellfire: a rare form of magic that channels the raw power of the Weave. Wielding spellfire takes a heavy toll on the body. You've trained both mind and body to efficiently wield this sacred power.",
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
		"Though most youths in Chondath accept their four-year term of compulsory military service, you bristled at that authoritarian attempt to control your life. You forsook your nationhood, discarded your given name, and worked as a freebooter with the first ship that would have you. Since then, you've traveled the Vilhon Reach. Though you've never sailed more than a few dozen leagues from land, you make up for it with deep local connections and the breadth of your experiences.",
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
		"The dead magic zones of the Anauroch desert are anathema to spellcasters and monsters that rely on magic-which is exactly why you made your life there. Perhaps you're on the run from Red Wizards, or you ran afoul of a powerful djinni in Calimshan. Whatever the case, you decided that living in Anauroch was your best option. After long months or years, you're stronger, wiser, and armed with hard-earned knowledge of desert medicine and wasteland survival.",
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
		"The chief law enforcement branch of Baldur's Gate is the Flaming Fist, a brawny mercenary guild led by the city's grand duke. You once served as a Flaming Fist, where you learned how to preempt trouble with your intimidating stare and, when necessary, absorb deadly blows. Flaming Fist mercenaries, active or retired, are known as some of the toughest, most resilient warriors along the Sword Coast, and you seek to maintain that reputation.",
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
		"Although genies no longer rule Calimshan, genie magic is still common in your homeland. Perhaps you inadvertently summoned a djinni from a magic lamp, or maybe you came upon an oasis guarded by a marid. A dao might have saved you from a landslide, or you bargained with an efreeti for fleeting wealth. However, your fate intersected with that of a genie; the experience left you with a keen eye, a silver tongue, and more than a touch of magic.",
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
		"You come from a proud line of ice fishers out of Ten-Towns in Icewind Dale. Catching knucklehead trout isn't the most glorious trade in the North, but it's an honest living. You've trained your senses for the slightest tug on the line, wrestled big trout out of ice-covered lakes, and gutted enough knucklehead trout to feed your village many times over. These experiences have toughened your body and mind for a life of adventuring.",
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
		"Like many who hail from the Moonshae Isles, you grew up revering the blessed land, its unique gods, and the mysterious shrines called the moonwells. As a moonwell pilgrim, you undertook a quest to visit and commune with every moonwell on (or off) the map. Along your idyllic journeys, you collected a repertoire of Moonshavian folk songs, painted landscapes of enchanting vistas, and even learned how to wield a bit of primal magic.",
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
		"You grew up in a land of living god-kings, and as a child, you were told countless stories of ancient empires and buried cities. In these tales, Mulhorand was a land overflowing with forgotten riches-priceless treasures awaiting anyone cunning and brave enough to seek them out. You've taken it upon yourself to explore your homeland's crypts, tombs, and pyramids to reclaim your people's relics.",
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
		"Mythals are sources of great magical power that can alter the Weave or even the very nature of reality. Most were constructed in antiquity, and many have since been damaged or gone dormant. As a mythalkeeper from the Dalelands, your first experience with a mythal was likely in the ruins of Myth Drannor. You roam Faerûn in search of other ruined places of power, hoping to learn more about the history and powers of mythals-or even restore a malfunctioning one.",
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
		"You spent years wandering the highlands of Rashemen, a dangerous, windswept heath that's dotted with ancient obelisks enchanted to imprison Fiends and home to dragons, gnolls, and other deadly creatures. Friendships are hard to find in such an isolated land, and you've learned to keep strangers at a distance.",
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
		"You trained your whole life to become a member of the Shadowmasters, the mysterious thieves' guild that controls the realm of Thesk from behind the scenes. Stealth and quick reflexes were just the start of your Shadowmaster education; you also needed to hone your ruthlessness to ensure the safety of the guild's secrets. But one wrong move led to your expulsion from the order. Now you must walk your own path.",
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
		"You are an initiate of the Cult of the Dragon. You discovered or were brought to a cell cult, where you exemplified the values honored by dragon cultists: duplicity, secrecy, and determination. In exchange for your oath to serve the cult, the cult offered you the company of fellow dragon worshipers, plus access to resources that might help further your studies in the realms of arcana and occultism.",
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
		"You accepted an invitation to join the Harpers, pledging an oath to uphold the Harper code and act in service to the common good. Like all Harpers, you understand the value of teamwork as well as when it's best to go it alone. Harper veterans have taught you the order's secrets-magical melodies, special watchwords, and legerdemain-and have entrusted you to use such knowledge to surveil and undermine the forces of evil.",
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
		"Not all who answer the call of a higher power are content to pore over scripture in a stuffy temple apse. You chose the path of the holy warrior by joining the Order of the Gauntlet. As a knight of the Gauntlet, you exercise righteous scorn for the forces of evil, unswerving camaraderie for your siblings in arms, and heartfelt compassion for the survivors of war. With weapon and holy symbol in hand, you've sworn not to rest until the light of justice has vanquished the shadow of chaos across Faerûn.",
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
		"You've pledged your life to the safety of Cormyr and sought admission to that realm's order of elite warriors: the Purple Dragon Knights. But before you have the chance to join the ranks officially, you must first serve as a knight's squire. You've found a liege willing to take you on and teach you the order's ways. Will you uphold the Purple Dragon Knight's ideals of glory, honor, and strength and prove yourself worthy of knighthood?",
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
		"Maybe you needed the money. Maybe you longed for a family, no matter how dubious. Or maybe you're just good at getting the job done by any means necessary. Whatever your reason, you enlisted with the Zhentarim, the most notorious mercenary guild in the Realms. Though the Zhentarim's leaders insist the organization is more like a family than a shadowy syndicate, few families exhibit as much dishonesty, nepotism, and corruption as this one. You've honed your cunnng, reflexes, and blade to climb the guild's ranks.",
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
	type : "origin",
	languageProfs : [["Draconic", 1]],
	action : [["action", "Dragon's Terror"]],
	extraLimitedFeatures : [{
		name : "Inspired by Fear",
		usages : 1,
		recovery : "short rest",
	}],
	description : "I know Draconic, or one other language of choice if Draconic is already known. As a Magic action, I can cause a crea w/i 30 ft of me to make a Wis save (DC=8+Wis+Prof) or be Frightened until the end of my next turn. On a success/end of the effect, the target is immune to this effect for 24 hours. When I cause a crea to become Frightened, I can gain Heroic Inspiration if I lack it. I can only do this once before a Short or Long Rest.",
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
	type : "origin",
	action : [["action", "Switch Places (with Help action)"]],
	spellcastingAbility: [4, 5, 6],
	spellcastingBonus : [{
		name : "Speak with Animals",
		spells : ["speak with animals"],
		selection : ["speak with animals"],
		prepared : true,
	}],
	description : "I always have the Speak with Animals spell prepared, and can cast it with any spell slots I have. If I ritually cast the spell, it has a duration of 8 hours. Additionally, when I take the Help action, I can switch places with a willing ally w/i 5 ft as part of that action; this movement doesn't provoke Opportunity Attacks, this action can not be taken if the ally has the Incapacitated condition.",
	descriptionFull : [
		"You gain the following benefits",
		"***Speak with Animals***. You always have the Speak with Animals spell prepared and can cast it with any spell slots you have. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this feat). When you cast this spell as a Ritual, its duration is 8 hours.",
		"***Tag Team***. When you take the Help action, you can switch places with a willing ally within 5 feet of yourself as part of that same action. This movement doesn't provoke Opportunity Attack action. You can't use this benefit if the ally has the Incapacitated condition.",
	],
};
FeatsList["harper agent"] = {
	name : "Harper Agent [Origin]",
	source : [["FRHoF", 0]],
	type : "origin",
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
	type : "origin",
	description : "Once per turn, when I score a Critical Hit, I can choose an ally within 30 ft and grant them Heroic Inspiration if they lack it. Additionally, when an enemy deals dmg to an ally w/i 5 ft of me, I gain Adv on my next atk roll against that enemy before the end of my next turn.",
	descriptionFull : [
		"You gain the following benefits",
		"***Inspiring Strike***. Once per turn, when you score a Critical Hit against a creature, you can choose an ally within 30 feet of yourself who can see or hear you and who lacks Heroic Inspiration. That ally gains Heroic Inspiration.",
		"***Reassert Honor***. When an enemy you can see deals damage to an ally of yours that is within 5 feet of you, you have Advantage on your next attack roll against that enemy before the end of your next turn.",
	],
};
FeatsList["purple dragon rook"] = {
	name : "Purple Dragon Rook [Origin]",
	source : [["FRHoF", 0]],
	type : "origin",
	skillstxt : "Choose one: Insight, Performance, or Persuasion",
	extraLimitedFeatures : [{
		name : "Rallying Cry",
		usages : 1,
		recovery : "long rest",
	}],
	description : "I gain proficiency in one of the following skills: Insight, Performance, or Persuasion. Additionally, once per long rest, when I roll for Initiative, I can give a number of crea up to my Prof bonus that I can see w/i 30 ft of myself Heroic Inspiration.",
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
	type : "origin",
	extraLimitedFeatures : [{
		name : "Sacred Flame (Bns)",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}],
	spellcastingAbility: [4, 5, 6],
	spellcastingBonus : [{
		name : "Spellfire Flame",
		spells : ["sacred flame"],
		selection : ["sacred flame"],
		firstCol : "atwill",
	}],
	action : [["bonus action", "Cast Sacred Flame"]],
	description : "Once per turn, when I take dmg from a spell or magical effect, I can reduce the dmg by 1d4. I can't do this if I have the Incapacitated condition. I learn the Sacred Flame cantrip, and can cast it a number of times equal to my Prof as a Bns before a Long Rest.",
	descriptionFull : [
		"You gain the following benefits",
		"***Magic Absorption***. Once per turn, when you take damage from a spell or magical effect, you reduce the total damage taken by 1d4. You can't use this benefit if you have the Incapacitated condition.",
		"***Spellfire Flame***. You learn the Sacred Flame cantrip. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this fear). You can also cast this cantrip as a Bonus Action a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
	],
};
FeatsList["tyro of the gauntlet"] = {
	name : "Tyro of the Gauntlet [Origin]",
	source : [["FRHoF", 0]],
	type : "origin",
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
	type : "origin",
	description : "When I roll dmg for an Opportunity Atk, I can roll the damage twice and use either roll. If I have Heroic Inspiration when I roll Initiative, I can expend it to give myself and allies Adv on that Initiative roll.",
	descriptionFull : [
		"You gain the following benefits",
		"***Exploit Oppening***. When you roll damage for an Opportunity Attack action, you can roll the damage dice twice and use either roll against the target.",
		"***Family First***. If you have Heroic Inspiration when you roll Initiative, you can expend it to give yourself and your allies Advantage on that Initiative roll.",
	],
};
//General Feats
FeatsList["cold caster"] = {
	name : "Cold Caster",
	source : [["FRHoF", 0]],
	type : "general",
	spellcastingBonus: [{
		name : "Cantrip",
		"class" : ["wizard"],
		selection : ["ray of frost"],
		level : [0, 0],
		times : 1,
		firstCol : "atwill",
	}],
	description : "I learn the Ray of Frost cantrip, or a different cantrip off the Wizard spell list if Ray of Frost is already known. Once per turn, when I hit a crea with an atk roll and deal Cold dmg, the crea subtracts 1d4 from its next saving throw it makes before the end of my next turn.",
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Increase***. Increase your Intelligence, Wisdom, or Charsma score by 1, to a maximum of 20.",
		"***Cantrip***. You learn the Ray of Frost cantrip. If you already know it, you learn a different Wizard cantrip of your choice. The spell's spellcasting ability is the ability increased by this feat.",
		"***Frostbite***. Once per turn, when you hit a creature with an attack roll and deal Cold damage, you can temporarily negate the creature's defenses. The creature subtracts 1d4 from the next saving throw it makes before the end of your next turn.",
	],
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I learn the Ray of Frost cantrip, or a different cantrip off the Wizard spell list if Ray of Frost is already known. Once per turn, when I hit a crea with an atk roll and deal Cold dmg, the crea subtracts 1d4 from its next saving throw it makes before the end of my next turn. [+1 Intelligence]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I learn the Ray of Frost cantrip, or a different cantrip off the Wizard spell list if Ray of Frost is already known. Once per turn, when I hit a crea with an atk roll and deal Cold dmg, the crea subtracts 1d4 from its next saving throw it makes before the end of my next turn. [+1 Wisdom]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I learn the Ray of Frost cantrip, or a different cantrip off the Wizard spell list if Ray of Frost is already known. Once per turn, when I hit a crea with an atk roll and deal Cold dmg, the crea subtracts 1d4 from its next saving throw it makes before the end of my next turn. [+1 Charisma]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1],
	},
	prerequisite : "Level 4+",
	prereqeval : function (v) {
		return v.characterLevel >= 4;
	},
};
FeatsList.dragonscarred = {
	name : "Dragonscarred",
	source : [["FRHoF", 0]],
	type : "general",
	description : "+1 Con or Cha, I gain resistance to Acid, Cold, Fire, Lightning, or Poison dmg. When I deal dmg as part of the atk or Magic action on my turn, I can use the Dragon's Terror benefit of the Cult of the Dragon Initiate as a Bonus Action this turn.",
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Increase***. Increase your Constitution or Charisma score by 1, to a maximum of 20.",
		"***Damage Resistance***. When you gain this feat, choose Acid, Cold, Fire, Lightning, or Poison. You have Resistance to the chosen damage type.",
		"***Fearsome Power***. When you deal damage to a creature as part of the Attack or Magic action on your turn, you can use the Dragon's Terror benefit of the Cult of the Dragon Initiate feat as a Bonus Action this turn.",
	],
	scorestxt: "My Constitution, or Charisma score increases by 1, to a maximum of 20.",
	choices: ["Acid", "Cold", "Fire", "Lightning", "Poison"],
	"acid": {
		dmgres : ["Acid"],
		description: "+1 Con or Cha, I gain resistance to Acid dmg. When I deal dmg as part of the atk or Magic action on my turn, I can use the Dragon's Terror benefit of the Cult of the Dragon Initiate as a Bonus Action this turn.",
	},
	"cold": {
		dmgres : ["Cold"],
		description: "+1 Con or Cha, I gain resistance to Cold dmg. When I deal dmg as part of the atk or Magic action on my turn, I can use the Dragon's Terror benefit of the Cult of the Dragon Initiate as a Bonus Action this turn.",
	},
	"fire": {
		dmgres : ["Fire"],
		description: "+1 Con or Cha, I gain resistance to Fire dmg. When I deal dmg as part of the atk or Magic action on my turn, I can use the Dragon's Terror benefit of the Cult of the Dragon Initiate as a Bonus Action this turn.",
	},
	"lightning": {
		dmgres : ["Lightning"],
		description: "+1 Con or Cha, I gain resistance to Lightning dmg. When I deal dmg as part of the atk or Magic action on my turn, I can use the Dragon's Terror benefit of the Cult of the Dragon Initiate as a Bonus Action this turn.",
	},
	"poison": {
		dmgres : ["Poison"],
		description: "+1 Con or Cha, I gain resistance to Poison dmg. When I deal dmg as part of the atk or Magic action on my turn, I can use the Dragon's Terror benefit of the Cult of the Dragon Initiate as a Bonus Action this turn.",
	},
	prerequisite : "Level 4+, Cult of the Dragon Initiate feat",
	prereqeval : function(v) {
		var CltDrgnInit = CurrentFeats.known.indexOf("cult of the dragon initiate [origin]");
		return v.characterLevel >= 4 && CltDrgnInit !== -1;
	},
};
FeatsList["enclave magic"] = {
	name : "enclave magic",
	source : [["FRHoF", 0]],
	type : "general",
	description : "I have Adv on ability checks when taking the Influence action with beasts. Additionally, I always have the Beast Sense spell prepared, and can cast it once before a Long Rest without expending a spell slot. When I cast it in this way, the spell doesn't require Concentration.",
	extraLimitedFeatures : [{
		name : "Beast Sense (no conc)",
		usages : 1,
		recovery : "long rest",
	}],
	spellFirstColTitle : "LR",
	spellcastingBonus : [{
		name : "Two Hearts, One Mind",
		spells : ["beast sense"],
		selection : ["beast sense"],
		firstCol : "checkbox"
	}],
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Increase***. Increase your Intelligence, Wisdom, or Charsma score by 1, to a maximum of 20.",
		"***Friend to Animals***. You have Advantage on ability checks when taking the Influence action with Beasts.",
		"***Two Hearts, One Mind***. You always have the Beast Sense spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. When you cast it without a spell slot using this feature, it doesn't require Concentration. You can also cast the spell using any spell slots you have of the appropriate level. The spell's spellcasting ability is the ability increased by this feat.",
	],
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I have Adv on ability checks when taking the Influence action with beasts. Additionally, I always have the Beast Sense spell prepared, and can cast it once before a Long Rest without expending a spell slot. When I cast it in this way, the spell doesn't require Concentration. [+1 Intelligence]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I have Adv on ability checks when taking the Influence action with beasts. Additionally, I always have the Beast Sense spell prepared, and can cast it once before a Long Rest without expending a spell slot. When I cast it in this way, the spell doesn't require Concentration. [+1 Wisdom]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I have Adv on ability checks when taking the Influence action with beasts. Additionally, I always have the Beast Sense spell prepared, and can cast it once before a Long Rest without expending a spell slot. When I cast it in this way, the spell doesn't require Concentration. [+1 Charisma]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1],
	},
	prerequisite : "Level 4+, Emerald Enclave Fledgling feat",
	prereqeval : function(v) {
		var EmEncFldg = CurrentFeats.known.indexOf("emerald enclave fledgling [origin]");
		return v.characterLevel >= 4 && EmEncFldg !== -1;
	},
};
FeatsList["fairy trickster"] = {
	name : "Fairy Trickster",
	source : [["FRHoF", 0]],
	type : "general",
	extraLimitedFeatures : [{
		name : "Flustering Strike",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}],
	description : "When I take the Disengage action, I am unhindered by Difficult Terrain for the rest of that turn. When I hit a crea with a atk roll, I can cause the crea to make a Wis save (DC=8+ASI+Prof) or have Disadv on saves until the end of my next turn. I can do this a number of times equal to my Prof.",
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Increase***. Increase your Dexterity or Charsma score by 1, to a maximum of 20.",
		"***Faerie Trod Trotter***. When you take the Disengage action on your turn, Difficult Terrain doesn't cost you extra movement for the rest of that turn.",
		"***Flustering Strike***. When you hit a creature with an attack roll, you can attempt to fluster the target. The target must succeed on a Wisdom saving throw (DC 8 plus the ability modifier of the score increased by this feat and your Proficiency Bonus) or have Disadvantage on saving throws until the end of your next turn.",
		"You can use this benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
	],
	choices: ["Dexterity", "Charisma"],
	"dexterity" : {
		description : "When I take the Disengage action, I am unhindered by Difficult Terrain for the rest of that turn. When I hit a crea with a atk roll, I can cause the crea to make a Wis save (DC=8+Dex+Prof) or have Disadv on saves until the end of my next turn. I can do this a number of times equal to my Prof. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"charisma" : {
		description : "When I take the Disengage action, I am unhindered by Difficult Terrain for the rest of that turn. When I hit a crea with a atk roll, I can cause the crea to make a Wis save (DC=8+Cha+Prof) or have Disadv on saves until the end of my next turn. I can do this a number of times equal to my Prof. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	},
	prerequisite : "Level 4+",
	prereqeval : function (v) {
		return v.characterLevel >= 4;
	},
};
FeatsList["genie magic"] = {
	name : "Genie Magic",
	source : [["FRHoF", 0]],
	type : "general",
	extraLimitedFeatures : [{
		name : "Wish Magic",
		usages : 1,
		recovery : "long rest",
	}],
	eval : function () {
		CurrentSpells['genie magic'] = {
			name : 'Genie Magic (feat)',
			list : { 'class' : 'sorcerer', level : [1, 1] },
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
			refType : "feat",
			allowUpCasting : true,
			firstCol : ""
		};
		SetStringifieds('spells'); CurrentUpdates.types.push('spells');
	},
	removeeval : function () {
		delete CurrentSpells['genie magic'];
		SetStringifieds('spells'); CurrentUpdates.types.push('spells');
	},
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Remove the already known cantrips, from any source except magic items
				if (spName === 'genie magic') {
					var allSpellsKnown = [];
					for (var sCast in CurrentSpells) {
						if (sCast.refType === "item") continue;
						var oCast = CurrentSpells[sCast];
						if (oCast.selectCa) allSpellsKnown = allSpellsKnown.concat(oCast.selectCa);
						if (oCast.selectBo) allSpellsKnown = allSpellsKnown.concat(oCast.selectBo);
					}
					var knownSpells = OrderSpells(allSpellsKnown, "single", false, false, 0);
					if (!spList.notspells) spList.notspells = [];
					spList.notspells = spList.notspells.concat(knownSpells);
				}
			}
		],
		spellAdd : [
			function (spellKey, spellObj, spName, isDuplicate) {
				if (spName === 'genie magic') {
					spellObj.firstCol = "";
				}
			}
		]
	},
	description : "Once per Long Rest, as a Magic action, I can cast a 1st-level spell with a casting time of 1 Action from the Sorcerer's spell list. When I reach level 11, the spell I cast with this feat is cast as if using a 2nd-level spell slot, at 17th level as if using a 3rd-level spell slot.",
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Increase***. Increase your Intelligence, Wisdom, or Charsma score by 1, to a maximum of 20.",
		"***Wish Magic***. As a Magic action, you can cast a level 1 spell of your choice from the Sorcerer spell list that has a casting time of an action. Once you use this benefit, you can't do so again until you finish a Long Rest. The spell's spellcasting ability is the ability increased by this feat.",
		"When you reach level 11, the spell you can cast with this feat is cast as though using a level 2 spell slot. When you reach level 17, the spell is cast as though using a level 3 spell slot.",
	],
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "Once per Long Rest, as a Magic action, I can cast a 1st-level spell with a casting time of 1 Action from the Sorcerer's spell list. When I reach level 11, the spell I cast with this feat is cast as if using a 2nd-level spell slot, at 17th level as if using a 3rd-level spell slot. [+1 Intelligence]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "Once per Long Rest, as a Magic action, I can cast a 1st-level spell with a casting time of 1 Action from the Sorcerer's spell list. When I reach level 11, the spell I cast with this feat is cast as if using a 2nd-level spell slot, at 17th level as if using a 3rd-level spell slot. [+1 Wisdom]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "Once per Long Rest, as a Magic action, I can cast a 1st-level spell with a casting time of 1 Action from the Sorcerer's spell list. When I reach level 11, the spell I cast with this feat is cast as if using a 2nd-level spell slot, at 17th level as if using a 3rd-level spell slot. [+1 Charisma]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1],
	},
	prerequisite : "Level 4+",
	prereqeval : function (v) {
		return v.characterLevel >= 4;
	},
};
FeatsList["harper teamwork"] = {
	name : "Harper Teamwork",
	source : [["FRHoF", 0]],
	type : "general",
	description : "When I take the Help action to assist an ally's atk roll against an enemy, the enemy has Disadv on its first saving throw before the start of my next turn. Additionally, if I succeed on a save to end the Frightened or Paralyzed condition on myself, one ally I can see within 30 ft of me that has the same condition has it end immediately.",
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Increase***. Increase your Dexterity or Charisma score by 1, to a maximum of 20.",
		"***Withering Wordplay***. When you take the Help action to assist an ally's attack roll against an enemy, that enemy also has Disadvantage on the First saving throw it makes before the start of your next turn.",
		"***Inspiring Willpower***. If you succeed on a saving throw to end the Frightened or Paralyzed condition on yourself, you can choose one ally you can see within 30 feet of yourself that has the same condition. That condition immediately ends for that ally.",
	],
	choices: ["Dexterity", "Charisma"],
	"dexterity" : {
		description : "When I take the Help action to assist an ally's atk roll against an enemy, the enemy has Disadv on its first saving throw before the start of my next turn. Additionally, if I succeed on a save to end the Frightened or Paralyzed condition on myself, one ally I can see within 30 ft of me that has the same condition has it end immediately. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"charisma" : {
		description : "When I take the Help action to assist an ally's atk roll against an enemy, the enemy has Disadv on its first saving throw before the start of my next turn. Additionally, if I succeed on a save to end the Frightened or Paralyzed condition on myself, one ally I can see within 30 ft of me that has the same condition has it end immediately. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	},
	prerequisite : "Level 4+, Harper Agent feat",
	prereqeval : function(v) {
		var HrpAgt = CurrentFeats.known.indexOf("harper agent [origin]");
		return v.characterLevel >= 4 && HrpAgt !== -1;
	},
};
FeatsList["lordly resolve"] = {
	name : "Lordly Resolve",
	source : [["FRHoF", 0]],
	type : "general",
	extraLimitedFeatures : [{
		name : "Standard Bearer",
		usages : 1,
		recovery : "long rest",
	}],
	description : "Once per Long Rest, as a Bns I can choose 3 crea w/i 60 ft of me, each target can immediately use a Reac to end the Prone condition, provided its speed isn't 0. Additionally, I can bolster the resolve of the crea, which lasts for 1 min or until I have the Incapacitated condition. A bolstered crea can't be possessed, Charmed, or Frightened. If the crea already has one of these conditions, they have Adv on any new save to end the effect.",
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Increase***. Increase your Strength or Charisma score by 1, to a maximum of 20.",
		"***Standard Bearer***. As a Bonus Action, choose up to three creatures within 60 feet of yourself that can see you. Each target can immediately take a Reaction to right itself and end the Prone condition, provided its Speed isn't 0.",
		"Additionally, you bolster the targets' resolve, which lasts for 1 minute or until you have the Incapacitated condition. While bolstered, a target can't be possessed or gain the Charmed or Frightened conditions; if a target is already possessed, Charmed, or Frightened, the target has Advantage on any new saving throw against the relevant effect.",
		"Once you use this benefit, you can't do so again until you finish a Long Rest.",
	],
	choices: ["Strength", "Charisma"],
	"strength" : {
		description : "Once per Long Rest, as a Bns I can choose 3 crea w/i 60 ft of me, each target can immediately use a Reac to end the Prone condition, provided its speed isn't 0. Additionally, I can bolster the resolve of the crea, which lasts for 1 min or until I have the Incapacitated condition. A bolstered crea can't be possessed, Charmed, or Frightened. If the crea already has one of these conditions, they have Adv on any new save to end the effect [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"charisma" : {
		description : "Once per Long Rest, as a Bns I can choose 3 crea w/i 60 ft of me, each target can immediately use a Reac to end the Prone condition, provided its speed isn't 0. Additionally, I can bolster the resolve of the crea, which lasts for 1 min or until I have the Incapacitated condition. A bolstered crea can't be possessed, Charmed, or Frightened. If the crea already has one of these conditions, they have Adv on any new save to end the effect [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	},
	prerequisite : "Level 4+, Lords' Alliance Agent feat",
	prereqeval : function(v) {
		var LrdAliAgt = CurrentFeats.known.indexOf("lords' alliance agent [origin]");
		return v.characterLevel >= 4 && LrdAliAgt !== -1;
	},
};
FeatsList["mythal touched"] = {
	name : "Mythal Touched",
	source : [["FRHoF", 0]],
	type : "general",
	extraLimitedFeatures : [{
		name : "Mythal Ward",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}],
	action : [["reaction", "Mythal Ward (1d20)"]],
	description : "As a Rea, when I am hit by a spell attack or I fail a save against a spell, I can roll on the Mythal-Touched Magic Table (See Notes Page) to create a magical effect. If the effect requires a save, the DC=8+ASI+Prof. I can use this Rea a number of times equal to my Prof.",
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Increase***. Increase your Intelligence, Wisdom, or Charsma score by 1, to a maximum of 20.",
		"***Mythal Ward***. If a spell attack hits you or you fail a saving throw against a spell, you can take a Reaction to roll on the Mythal-Touched Magic table to create a magical effect. If an effect requires a saving throw, the DC equals 8 plus the modifier of the ability increased by this feat and your Proficiency Bonus.",
		"You can use this benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
	],
	toNotesPage : [{
		  name : "Mythal-Touched Magic table",
		  note : [
			"##1d20##. Effect",
			"##- 1-2##. Me and each creature within 15 ft of me makes a Dex save, taking Force dmg equal to 1d8 times the level of the triggering spell on a failed save or half as much damage on a successful one.",
			"##- 3-7##. Me and the triggering spell's caster form a telepathic link for 1 hour.",
			"##- 8-10##. Gravity is reversed in a 15-foot-radius, 60-foot-tall Cylinder centered on me for 1 minute, per the Reverse Gravity spell.",
			"##- 11-13##. Me and the triggering spell's caster each make a Constitution saving throw. On a failed save, the creature has the Stunned condition until the end of its next turn.",
			"##- 14-17##. I gain a +2 to AC for 1 minute, potentially turning the triggering spell into a miss if it was a spell attack.",
			"##- 18-19##. Any flammable, nonmagical object within 10 feet of the triggering spell's caster that isn't being worn or carried by another creature bursts into flame, takes 1d4 Fire damage, and is burning.",
			"##- 20##. The triggering spell dissipates with no effect, and the action, Bonus Action, or Reaction used to cast it is wasted. If that spell was cast with a spell slot, the slot isn't expended.",
		  ],
	  }],
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "As a Rea, when I am hit by a spell attack or I fail a save against a spell, I can roll on the Mythal-Touched Magic Table (See Notes Page) to create a magical effect. If the effect requires a save, the DC=8+Int+Prof. I can use this Rea a number of times equal to my Prof. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "As a Rea, when I am hit by a spell attack or I fail a save against a spell, I can roll on the Mythal-Touched Magic Table (See Notes Page) to create a magical effect. If the effect requires a save, the DC=8+Wis+Prof. I can use this Rea a number of times equal to my Prof. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "As a Rea, when I am hit by a spell attack or I fail a save against a spell, I can roll on the Mythal-Touched Magic Table (See Notes Page) to create a magical effect. If the effect requires a save, the DC=8+Cha+Prof. I can use this Rea a number of times equal to my Prof. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	},
	prerequisite : "Level 4+",
	prereqeval : function (v) {
		return v.characterLevel >= 4;
	},
};
FeatsList["order's reslience"] = {
	name : "Order's Resilience",
	source : [["FRHoF", 0]],
	type : "general",
	extraLimitedFeatures : [{
		name : "Standard Bearer",
		usages : 1,
		recovery : "long rest",
	}],
	description : "When I have the Prone condition, I can end it by expending 5 ft of movement. Additionally, while within 5 ft of an ally, and neither of us has the Incapacitated condition, me and that ally have Adv on Str saves.",
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Increase***. Increase your Strength, Wisdom, or Charisma score by 1, to a maximum of 20.",
		"***Resurge***. When you have the Prone condition, you can right yourself with only 5 feet of movement.",
		"***Stronger Together***. If you are within 5 feet of an ally that doesn't have the Incapacitated condition, you and that ally have Advantage on Strength saving throws. You can't use this benefit while you have the Incapacitated condition.",
	],
	choices: ["Strength", "Wisdom", "Charisma"],
	"strength" : {
		description : "When I have the Prone condition, I can end it by expending 5 ft of movement. Additionally, while within 5 ft of an ally, and neither of us has the Incapacitated condition, me and that ally have Adv on Str saves. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"wisdom" : {
		description : "When I have the Prone condition, I can end it by expending 5 ft of movement. Additionally, while within 5 ft of an ally, and neither of us has the Incapacitated condition, me and that ally have Adv on Str saves. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "When I have the Prone condition, I can end it by expending 5 ft of movement. Additionally, while within 5 ft of an ally, and neither of us has the Incapacitated condition, me and that ally have Adv on Str saves. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	},
	prerequisite : "Level 4+, Tyro of the Gauntlet feat",
	prereqeval : function(v) {
		var TyrGnt = CurrentFeats.known.indexOf("tyro of the gauntlet [origin]");
		return v.characterLevel >= 4 && TyrGnt !== -1;
	},
};
FeatsList["purple dragon commandant"] = {
	name : "Purple Dragon Commandant",
	source : [["FRHoF", 0]],
	type : "general",
	extraLimitedFeatures : [{
		name : "Encourage Ally",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}],
	action : [["bonus action", "Encourage Ally (Temp HP)"]],
	description : "As a Bns, I can grant an ally w/i 30 ft Temp HP equal to 2d6+ASI, I can use this Bns a number of times equal to my Prof. Additionally, while Bloodied, I gain Adv on atk rolls.",
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Increase***. Increase your Strength or Dexterity score by 1, to a maximum of 20.",
		"***Encourage Ally***. As a Bonus Action, you bolster one ally you can see within 30 feet. The ally gains Temporary Hit Points equal to 2d6 plus the modifier of the ability score increased by this feat. You can take this Bonus action a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
		"***Last Stand***. You have Advantage on attack rolls while Bloodied.",
	],
	choices: ["Strength", "Dexterity"],
	"strength" : {
		description : "As a Bns, I can grant an ally w/i 30 ft Temp HP equal to 2d6+Str. I can use this Bns a number of times equal to my Prof. Additionally, while Bloodied, I gain Adv on atk rolls. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "As a Bns, I can grant an ally w/i 30 ft Temp HP equal to 2d6+Dex. I can use this Bns a number of times equal to my Prof. Additionally, while Bloodied, I gain Adv on atk rolls. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	prerequisite : "Level 4+, Purple Dragon Rook feat or Martial Weapon Proficiency",
	prereqeval : function(v) {
		var TyrGnt = CurrentFeats.known.indexOf("tyro of the gauntlet [origin]");
		return v.characterLevel >= 4 && TyrGnt !== -1 || v.martialWeaponsProf;
	},
};
FeatsList["spellfire adept"] = {
	name : "Spellfire Adept",
	source : [["FRHoF", 0]],
	type : "general",
	description : "Once per turn, when I cast a spell that deals Radiant dmg, I can expend up to 2 HD, roll them, and add the total rolled to one damage roll of the spell. My Radiant dmg ignores Resistance to Radiant dmg.",
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Increase***. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
		"***Fueled Spellfire***. Once per turn, when a spell you cast deals Radiant damage, you can expend up to two Hit Point Dice, roll them, and add the total rolled to one damage roll of the spell.",
		"***Searing Spellfire***. When you make a damage roll that deals Radiant damage, it ignores Resistance to Radiant damage.",
	],
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "Once per turn, when I cast a spell that deals Radiant dmg, I can expend up to 2 HD, roll them, and add the total rolled to one damage roll of the spell. My Radiant dmg ignores Resistance to Radiant dmg. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "Once per turn, when I cast a spell that deals Radiant dmg, I can expend up to 2 HD, roll them, and add the total rolled to one damage roll of the spell. My Radiant dmg ignores Resistance to Radiant dmg. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "Once per turn, when I cast a spell that deals Radiant dmg, I can expend up to 2 HD, roll them, and add the total rolled to one damage roll of the spell. My Radiant dmg ignores Resistance to Radiant dmg. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	},
	prerequisite : "Level 4+, Spellfire Spark feat or the Spellcasting or Pact Magic Feature",
	prereqeval : function(v) {
		var SpfSpk = CurrentFeats.known.indexOf("spellfire spark [origin]");
		return v.characterLevel >= 4 && SpfSpk !== -1 || v.isSpellcaster;
	},
};
FeatsList["street justice"] = {
	name : "Street Justice",
	source : [["FRHoF", 0]],
	type : "general",
	description : "My allies have Adv on atk rolls against a crea Grappled by me. Whenever I bind a crea with Chain, Manacles, or Rope, I can add my Prof to the DC to escape or burst the binds. A crea's Hostile attitude doesn't impose Disadv on my Cha (Intimidation) checks to influence that crea.",
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Increase***. Increase your Strength or Dexterity score by 1, to a maximum of 20.",
		"***Headlock***. Your allies have Advantage on attack rolls against a creature Grappled by you.",
		"***Sturdy Knot***. When you use Chain, Manacles, or Rope to bind a creature, add your Proficiency Bonus to the DC to escape or burst the Chain, Manacles, or Rope.",
		"***Tough Talk***. A creature's Hostile attitude doesn't impose Disadvantage on your Charisma (Intimidation) checks to influence that creature.",
	],
	choices: ["Strength", "Dexterity"],
	"strength" : {
		description : "My allies have Adv on atk rolls against a crea Grappled by me. Whenever I bind a crea with Chain, Manacles, or Rope, I can add my Prof to the DC to escape or burst the binds. A crea's Hostile attitude doesn't impose Disadv on my Cha (Intimidation) checks to influence that crea. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "My allies have Adv on atk rolls against a crea Grappled by me. Whenever I bind a crea with Chain, Manacles, or Rope, I can add my Prof to the DC to escape or burst the binds. A crea's Hostile attitude doesn't impose Disadv on my Cha (Intimidation) checks to influence that crea. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	prerequisite : "Level 4+",
	prereqeval : function (v) {
		return v.characterLevel >= 4;
	},
};
FeatsList["zhentarim tactics"] = {
	name : "Zhentarim Tactics",
	source : [["FRHoF", 0]],
	type : "general",
	skillstxt : "After a Long Rest, choose 1 skill I have Proficiency with to gain Expertise",
	description : "When a crea w/i 5 ft of me hits me with a melee atk, I can make an Opportunity Attack against that creature. When I finish a Long Rest, choose a skill in which I have Proficiency. I have Expertise in that skill until I finish my next Long Rest.",
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Increase***. Increase your Dexterity or Charisma score by 1, to a maximum of 20.",
		"***Retaliate***. Immediately after a creature within 5 feet of you hits you with a melee attack, you can make an Opportunity Attack action against that creature.",
		"***Versatile Merc***. When you finish a Long Rest, choose a skill in which you have proficiency. You have Expertise in that skill until you finish your next Long Rest.",
	],
	choices: ["Dexterity", "Charisma"],
	"dexterity" : {
		description : "When a crea w/i 5 ft of me hits me with a melee atk, I can make an Opportunity Attack against that creature. When I finish a Long Rest, choose a skill in which I have Proficiency. I have Expertise in that skill until I finish my next Long Rest. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"charisma" : {
		description : "When a crea w/i 5 ft of me hits me with a melee atk, I can make an Opportunity Attack against that creature. When I finish a Long Rest, choose a skill in which I have Proficiency. I have Expertise in that skill until I finish my next Long Rest. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
	},
	prerequisite : "Level 4+, Zhentarim Ruffian feat",
	prereqeval : function(v) {
		var ZhnRfn = CurrentFeats.known.indexOf("zhentarim ruffian [origin]");
		return v.characterLevel >= 4 && ZhnRfn !== -1;
	},
};
//Epic Boons
FeatsList["boon of bloodshed"] = {
	name : "Boon of Bloodshed",
	source : [["FRHoF", 0]],
	type : "epic boon",
	description : "+1 to Any, When an enemy I can see is reduced to 0 HP, I gain Adv on my next atk roll I make before the end of my next turn. Additionally, once per turn, when I make an atk roll while Bloodied, I deal extra dmg equal to my Prof; this extra dmg is the same type as the atk's type.",
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Improvement***. Increase one ability score of your choice by 1, to a Maximum of 30.",
		"***Killer's Fortune***. When an enemy you can see is reduced to 0 Hit Points, you gain Advantage on your next attack roll you make before the end of your next turn.",
		"***Power from Pain***. Once per turn, when you make an attack roll while Bloodied, you can deal extra damage to the target equal to your Proficiency Bonus. The extra damage's type is the same as the attack's type.",
	],
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		name : "Boon of Bloodshed - STR",
		description : "When an enemy I can see is reduced to 0 HP, I gain Adv on my next atk roll I make before the end of my next turn. Additionally, once per turn, when I make an atk roll while Bloodied, I deal extra dmg equal to my Prof; this extra dmg is the same type as the atk's type. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
		scoresMaximum : [30, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		name : "Boon of Bloodshed - DEX",
		description : "When an enemy I can see is reduced to 0 HP, I gain Adv on my next atk roll I make before the end of my next turn. Additionally, once per turn, when I make an atk roll while Bloodied, I deal extra dmg equal to my Prof; this extra dmg is the same type as the atk's type. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
		scoresMaximum : [0, 30, 0, 0, 0, 0],
	},
	"constitution" : {
		name : "Boon of Bloodshed - CON",
		description : "When an enemy I can see is reduced to 0 HP, I gain Adv on my next atk roll I make before the end of my next turn. Additionally, once per turn, when I make an atk roll while Bloodied, I deal extra dmg equal to my Prof; this extra dmg is the same type as the atk's type. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
		scoresMaximum : [0, 0, 30, 0, 0, 0],
	},
	"intelligence" : {
		name : "Boon of Bloodshed - INT",
		description : "When an enemy I can see is reduced to 0 HP, I gain Adv on my next atk roll I make before the end of my next turn. Additionally, once per turn, when I make an atk roll while Bloodied, I deal extra dmg equal to my Prof; this extra dmg is the same type as the atk's type. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
		scoresMaximum : [0, 0, 0, 30, 0, 0],
	},
	"wisdom" : {
		name : "Boon of Bloodshed - WIS",
		description : "When an enemy I can see is reduced to 0 HP, I gain Adv on my next atk roll I make before the end of my next turn. Additionally, once per turn, when I make an atk roll while Bloodied, I deal extra dmg equal to my Prof; this extra dmg is the same type as the atk's type. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
		scoresMaximum : [0, 0, 0, 0, 30, 0],
	},
	"charisma" : {
		name : "Boon of Bloodshed - CHA",
		description : "When an enemy I can see is reduced to 0 HP, I gain Adv on my next atk roll I make before the end of my next turn. Additionally, once per turn, when I make an atk roll while Bloodied, I deal extra dmg equal to my Prof; this extra dmg is the same type as the atk's type. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
		scoresMaximum : [0, 0, 0, 0, 0, 30],
	},
	prerequisite : "Level 19+",
	prereqeval: function (v) {
		return v.characterLevel >= 19;
	},
};
FeatsList["boon of bountiful health"] = {
	name : "Boon of Bountiful Health",
	source : [["FRHoF", 0]],
	type : "epic boon",
	description : "+1 to Any, When I gain Temp HP increase the number of Temp HP I gain by 5. Additionally, when I spend one or more HD to regain HP I can instead use the highest number possible for each die.",
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Improvement***. Increase one ability score of your choice by 1, to a Maximum of 30.",
		"***Augmented Health***. When you gain Temporary Hit Points, increase the number of Temporary Hit Points you gain by 5.",
		"***Superior Recuperation***. When you spend one or more Hit Point Dice to regain Hit Points, you can instead use the highest number possible for each die.",
	],
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		name : "Boon of Bountiful Health - STR",
		description : "When I gain Temp HP increase the number of Temp HP I gain by 5. Additionally, when I spend one or more HD to regain HP I can instead use the highest number possible for each die. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
		scoresMaximum : [30, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		name : "Boon of Bountiful Health - DEX",
		description : "When I gain Temp HP increase the number of Temp HP I gain by 5. Additionally, when I spend one or more HD to regain HP I can instead use the highest number possible for each die. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
		scoresMaximum : [0, 30, 0, 0, 0, 0],
	},
	"constitution" : {
		name : "Boon of Bountiful Health - CON",
		description : "When I gain Temp HP increase the number of Temp HP I gain by 5. Additionally, when I spend one or more HD to regain HP I can instead use the highest number possible for each die. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
		scoresMaximum : [0, 0, 30, 0, 0, 0],
	},
	"intelligence" : {
		name : "Boon of Bountiful Health - INT",
		description : "When I gain Temp HP increase the number of Temp HP I gain by 5. Additionally, when I spend one or more HD to regain HP I can instead use the highest number possible for each die. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
		scoresMaximum : [0, 0, 0, 30, 0, 0],
	},
	"wisdom" : {
		name : "Boon of Bountiful Health - WIS",
		description : "When I gain Temp HP increase the number of Temp HP I gain by 5. Additionally, when I spend one or more HD to regain HP I can instead use the highest number possible for each die. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
		scoresMaximum : [0, 0, 0, 0, 30, 0],
	},
	"charisma" : {
		name : "Boon of Bountiful Health - CHA",
		description : "When I gain Temp HP increase the number of Temp HP I gain by 5. Additionally, when I spend one or more HD to regain HP I can instead use the highest number possible for each die. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
		scoresMaximum : [0, 0, 0, 0, 0, 30],
	},
	prerequisite : "Level 19+",
	prereqeval: function (v) {
		return v.characterLevel >= 19;
	},
};
FeatsList["boon of communication"] = {
	name : "Boon of Communication",
	source : [["FRHoF", 0]],
	type : "epic boon",
	senses : [["Telepathy", 120]],
	description : "+1 to Int, Wis, or Cha, I don't have Disadv on ability checks to influence Hostile crea, I also understand the literal meaning of any language I hear, see signed, or read, lastly I gain telepathy out to a range of 120 ft.",
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Improvement***. Increase your Intelligence, Wisdom, or Charisma score by 1, to a Maximum of 30.",
		"***Cunning Speaker***. You don't have Disadvantage on ability checks to influence Hostile creatures.",
		"***Gifted Interpreter***. You understand the literal meaning of any language you hear or see signed, and you can understand the literal meaning of any written language you see.",
		"***Mental Communication***. You gain telepathy with a range of 120 feet.",
	],
	choices : ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		name : "Boon of Communication - INT",
		description : "I don't have Disadv on ability checks to influence Hostile crea, I also understand the literal meaning of any language I hear, see signed, or read, lastly I gain telepathy out to a range of 120 ft. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
		scoresMaximum : [0, 0, 0, 30, 0, 0],
	},
	"wisdom" : {
		name : "Boon of Communication - WIS",
		description : "I don't have Disadv on ability checks to influence Hostile crea, I also understand the literal meaning of any language I hear, see signed, or read, lastly I gain telepathy out to a range of 120 ft. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
		scoresMaximum : [0, 0, 0, 0, 30, 0],
	},
	"charisma" : {
		name : "Boon of Communication - CHA",
		description : "I don't have Disadv on ability checks to influence Hostile crea, I also understand the literal meaning of any language I hear, see signed, or read, lastly I gain telepathy out to a range of 120 ft. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
		scoresMaximum : [0, 0, 0, 0, 0, 30],
	},
	prerequisite : "Level 19+",
	prereqeval: function (v) {
		return v.characterLevel >= 19;
	},
};
FeatsList["boon of desperate resilience"] = {
	name : "Boon of Desperate Resilience",
	source : [["FRHoF", 0]],
	type : "epic boon",
	description : "+1 to Str or Con, While I'm Bloodied, I have Resistance to every damage type except Force.",
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Improvement***. Increase your Strength or Constitution score by 1, to a Maximum of 30.",
		"***Defense of Body and Mind***. While you are Bloodied, you have Resistance to every damage type except Force.",
	],
	choices : ["Strength", "Constitution"],
	"strength" : {
		name : "Boon of Desperate Resilience - STR",
		description : "While I'm Bloodied, I have Resistance to every damage type except Force. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
		scoresMaximum : [30, 0, 0, 0, 0, 0],
	},
	"constitution" : {
		name : "Boon of Desperate Resilience - CON",
		description : "While I'm Bloodied, I have Resistance to every damage type except Force. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
		scoresMaximum : [0, 0, 30, 0, 0, 0],
	},
	prerequisite : "Level 19+",
	prereqeval: function (v) {
		return v.characterLevel >= 19;
	},
};
FeatsList["boon of exquisite radiance"] = {
	name : "Boon of Exquisite Radiance",
	source : [["FRHoF", 0]],
	type : "epic boon",
	extraLimitedFeatures : [{
		name : "Powerful Radiance",
		usages : 1,
		recovery : "long rest",
	}],
	description : "+1 to Any, Crea I reduce to 0 HP can't become Undead. Once per Long Rest, when I make a dmg roll that deals Radiant dmg, I can instead use the highest number possible for each damage die.",
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Improvement***. Increase one ability score of your choice by 1, to a Maximum of 30.",
		"***Eternal Rest***. Creatures you reduce to 0 Hit Points can't become Undead.",
		"***Powerful Radiance***. When you make a damage roll that deals Radiant damage, you can instead use the highest number possible for each damage die. Once you use this benefit, you can't do so again until you finish a Long Rest.",
	],
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		name : "Boon of Exquisite Radiance - STR",
		description : "Crea I reduce to 0 HP can't become Undead. Once per Long Rest, when I make a dmg roll that deals Radiant dmg, I can instead use the highest number possible for each damage die. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
		scoresMaximum : [30, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		name : "Boon of Exquisite Radiance - DEX",
		description : "Crea I reduce to 0 HP can't become Undead. Once per Long Rest, when I make a dmg roll that deals Radiant dmg, I can instead use the highest number possible for each damage die. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
		scoresMaximum : [0, 30, 0, 0, 0, 0],
	},
	"constitution" : {
		name : "Boon of Exquisite Radiance - CON",
		description : "Crea I reduce to 0 HP can't become Undead. Once per Long Rest, when I make a dmg roll that deals Radiant dmg, I can instead use the highest number possible for each damage die. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
		scoresMaximum : [0, 0, 30, 0, 0, 0],
	},
	"intelligence" : {
		name : "Boon of Exquisite Radiance - INT",
		description : "Crea I reduce to 0 HP can't become Undead. Once per Long Rest, when I make a dmg roll that deals Radiant dmg, I can instead use the highest number possible for each damage die. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
		scoresMaximum : [0, 0, 0, 30, 0, 0],
	},
	"wisdom" : {
		name : "Boon of Exquisite Radiance - WIS",
		description : "Crea I reduce to 0 HP can't become Undead. Once per Long Rest, when I make a dmg roll that deals Radiant dm,g I can instead use the highest number possible for each damage die. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
		scoresMaximum : [0, 0, 0, 0, 30, 0],
	},
	"charisma" : {
		name : "Boon of Exquisite Radiance - CHA",
		description : "Crea I reduce to 0 HP can't become Undead. Once per Long Rest, when I make a dmg roll that deals Radiant dmg, I can instead use the highest number possible for each damage die. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
		scoresMaximum : [0, 0, 0, 0, 0, 30],
	},
	prerequisite : "Level 19+",
	prereqeval: function (v) {
		return v.characterLevel >= 19;
	},
};
FeatsList["boon of fluid forms"] = {
	name : "Boon of Fluid Forms",
	source : [["FRHoF", 0]],
	type : "epic boon",
	action : [["action", "Shape-Shift"], ["action", "Revert to True Form"]],
	extraLimitedFeatures : [{
		name : "Shapechanger",
		usages : 1,
		recovery : "long rest",
	}],
	description : "+1 to Int, Wis, or Cha, Once per Long Rest as a Magic action, I can shape-shift into a Beast, Humanoid, or Monstrosity of CR 10 or lower, gaining Temp HP equal to the new form's HP + 20. This form lasts for up to an hour or until I no longer have Temp HP, I can end this effect early by taking the Magic action to revert to my true form. (See Full Description for Statistic Details).",
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Improvement***. Increase your Intelligence, Wisdom, or Charisma score by 1, to a Maximum of 30.",
		"***Shapechanger***. You can take a Magic action to shape-shift into a Beast, Humanoid, or Monstrosity with a Challenge Rating no higher than 10. When you shape-shift, you gain a number of Temporary Hit Points equal to the Hit Points of the form. The shape-shifting effect lasts for 1 hour, and ends early if you have no Temporary Hit Points left or if you take a Magic action to return to your true form.",
		"Your game statistics are replaced by the stat block of the chosen form, but you retain your creature type; alignment; personality; Intelligence, Wisdom, and Charisma scores; Hit Points; Hit Point Dice; proficiencies; and ability to communicate. If you have the Spellcasting or Pact Magic feature, you retain it too. Upon shape-shifting, you determine whether your equipment drops to the ground or changes in size and shape to fit the new form while you're in it.",
		"Once you use this benefit, you can't do so again until you finish a Long Rest.",
		"***Hardy Transformation***. When you gain Temporary Hit Points when you shape-shift, increase that number of Temporary Hit Points by 20.",
	],
	choices : ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		name : "Boon of Fluid Forms - INT",
		description : "Once per Long Rest as a Magic action, I can shape-shift into a Beast, Humanoid, or Monstrosity of CR 10 or lower, gaining Temp HP equal to the new form's HP + 20. This form lasts for up to an hour or until I no longer have Temp HP, I can end this effect early by taking the Magic action to revert to my true form. (See Full Description for Statistic Details). [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
		scoresMaximum : [0, 0, 0, 30, 0, 0],
	},
	"wisdom" : {
		name : "Boon of Fluid Forms - WIS",
		description : "Once per Long Rest as a Magic action, I can shape-shift into a Beast, Humanoid, or Monstrosity of CR 10 or lower, gaining Temp HP equal to the new form's HP + 20. This form lasts for up to an hour or until I no longer have Temp HP, I can end this effect early by taking the Magic action to revert to my true form. (See Full Description for Statistic Details). [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
		scoresMaximum : [0, 0, 0, 0, 30, 0],
	},
	"charisma" : {
		name : "Boon of Fluid Forms - CHA",
		description : "Once per Long Rest as a Magic action, I can shape-shift into a Beast, Humanoid, or Monstrosity of CR 10 or lower, gaining Temp HP equal to the new form's HP + 20. This form lasts for up to an hour or until I no longer have Temp HP, I can end this effect early by taking the Magic action to revert to my true form. (See Full Description for Statistic Details). [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
		scoresMaximum : [0, 0, 0, 0, 0, 30],
	},
	prerequisite : "Level 19+",
	prereqeval: function (v) {
		return v.characterLevel >= 19;
	},
};
FeatsList["boon of fortune's favor"] = {
	name : "Boon of Fortune's Favor",
	source : [["FRHoF", 0]],
	type : "epic boon",
	description : "+1 to Any, When I fail a saving throw, I can reroll it and must use the new roll. Once I use this benefit, I can't do so again until the start of my next turn.",
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Improvement***. Increase one ability score of your choice by 1, to a Maximum of 30.",
		"***Saving Throw Reroll***. When you fail a saving throw, you can reroll it and must use the new roll. Once you use this benefit, you can't do so again until the start of your next turn.",
	],
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		name : "Boon of Fortune's Favor - STR",
		description : "When I fail a saving throw, I can reroll it and must use the new roll. Once I use this benefit, I can't do so again until the start of my next turn. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
		scoresMaximum : [30, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		name : "Boon of Fortune's Favor - DEX",
		description : "When I fail a saving throw, I can reroll it and must use the new roll. Once I use this benefit, I can't do so again until the start of my next turn. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
		scoresMaximum : [0, 30, 0, 0, 0, 0],
	},
	"constitution" : {
		name : "Boon of Fortune's Favor - CON",
		description : "When I fail a saving throw, I can reroll it and must use the new roll. Once I use this benefit, I can't do so again until the start of my next turn. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
		scoresMaximum : [0, 0, 30, 0, 0, 0],
	},
	"intelligence" : {
		name : "Boon of Fortune's Favor - INT",
		description : "When I fail a saving throw, I can reroll it and must use the new roll. Once I use this benefit, I can't do so again until the start of my next turn. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
		scoresMaximum : [0, 0, 0, 30, 0, 0],
	},
	"wisdom" : {
		name : "Boon of Fortune's Favor - WIS",
		description : "When I fail a saving throw, I can reroll it and must use the new roll. Once I use this benefit, I can't do so again until the start of my next turn. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
		scoresMaximum : [0, 0, 0, 0, 30, 0],
	},
	"charisma" : {
		name : "Boon of Fortune's Favor - CHA",
		description : "When I fail a saving throw, I can reroll it and must use the new roll. Once I use this benefit, I can't do so again until the start of my next turn. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
		scoresMaximum : [0, 0, 0, 0, 0, 30],
	},
	prerequisite : "Level 19+",
	prereqeval: function (v) {
		return v.characterLevel >= 19;
	},
};
FeatsList["boon of poison mastery"] = {
	name : "Boon of Poison Mastery",
	source : [["FRHoF", 0]],
	type : "epic boon",
	description : "+1 to Any, I am Immune to Poison dmg and the Poisoned condition. Once per turn when I roll dice to determine Poison dmg, I can use the highest number possible for each die.",
	savetxt : {
		immune : ["Poison", "Poisoned"],
	},
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Improvement***. Increase one ability score of your choice by 1, to a Maximum of 30.",
		"***Antitoxic***. You have Immunity to Poison damage and the Poisoned condition.",
		"***Perfect Poisoner***. Once per turn, when you roll dice to determine Poison damage a creature takes from your attack, spell, or feature, you can instead use the highest number possible for each die.",
	],
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		name : "Boon of Poison Mastery - STR",
		description : "I am Immune to Poison dmg and the Poisoned condition. Once per turn when I roll dice to determine Poison dmg, I can use the highest number possible for each die. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
		scoresMaximum : [30, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		name : "Boon of Poison Mastery - DEX",
		description : "I am Immune to Poison dmg and the Poisoned condition. Once per turn when I roll dice to determine Poison dmg, I can use the highest number possible for each die. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
		scoresMaximum : [0, 30, 0, 0, 0, 0],
	},
	"constitution" : {
		name : "Boon of Poison Mastery - CON",
		description : "I am Immune to Poison dmg and the Poisoned condition. Once per turn when I roll dice to determine Poison dmg, I can use the highest number possible for each die. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
		scoresMaximum : [0, 0, 30, 0, 0, 0],
	},
	"intelligence" : {
		name : "Boon of Poison Mastery - INT",
		description : "I am Immune to Poison dmg and the Poisoned condition. Once per turn when I roll dice to determine Poison dmg, I can use the highest number possible for each die. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
		scoresMaximum : [0, 0, 0, 30, 0, 0],
	},
	"wisdom" : {
		name : "Boon of Poison Mastery - WIS",
		description : "I am Immune to Poison dmg and the Poisoned condition. Once per turn when I roll dice to determine Poison dmg, I can use the highest number possible for each die. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
		scoresMaximum : [0, 0, 0, 0, 30, 0],
	},
	"charisma" : {
		name : "Boon of Poison Mastery - CHA",
		description : "I am Immune to Poison dmg and the Poisoned condition. Once per turn when I roll dice to determine Poison dmg, I can use the highest number possible for each die. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
		scoresMaximum : [0, 0, 0, 0, 0, 30],
	},
	prerequisite : "Level 19+",
	prereqeval: function (v) {
		return v.characterLevel >= 19;
	},
};
FeatsList["boon of revelry"] = {
	name : "Boon of Revelry",
	source : [["FRHoF", 0]],
	type : "epic boon",
	extraLimitedFeatures : [{
		name : "Otto's Irresistible Dance",
		usages : 1,
		recovery : "long rest",
	}],
	spellFirstColTitle: "LR",
	spellcastingBonus : [{
		name : "Inspire Dance",
		spells : ["otto's irresistible dance"],
		selection : ["otto's irresistible dance"],
		firstCol : "checkbox",
	}],
	description : "+1 to Int, Wis, or Cha, I always have the Otto's Irresistible Dance spell prepared and can cast it once per Long Rest without a spell slot. While a crea is Charmed by Otto's Irresistible Dance, they can't cast spells with a Verbal component as they are forced to sing delightful nonsense if it has the capacity to sing.",
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Improvement***. Increase your Intelligence, Wisdom, or Charisma score by 1, to a Maximum of 30.",
		"***Inspire Dance***. You always have the Otto's Irresistible Dance spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have of the appropriate level.",
		"When you cast the spell, it requires no spell components, and taking damage doesn't break your Concentration on it.",
		"***Sing Out***. While a creature that failed its saving throw against your Otto's Irresistible Dance has the Charmed condition from that spell, it can't cast spells with Verbal components, and it sings delightful nonsense if it can sing.",
	],
	choices : ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		name : "Boon of Revelry - INT",
		description : "I always have the Otto's Irresistible Dance spell prepared and can cast it once per Long Rest without a spell slot. While a crea is Charmed by Otto's Irresistible Dance, they can't cast spells with a Verbal component as they are forced to sing delightful nonsense if it has the capacity to sing. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
		scoresMaximum : [0, 0, 0, 30, 0, 0],
	},
	"wisdom" : {
		name : "Boon of Revelry - WIS",
		description : "I always have the Otto's Irresistible Dance spell prepared and can cast it once per Long Rest without a spell slot. While a crea is Charmed by Otto's Irresistible Dance, they can't cast spells with a Verbal component as they are forced to sing delightful nonsense if it has the capacity to sing. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
		scoresMaximum : [0, 0, 0, 0, 30, 0],
	},
	"charisma" : {
		name : "Boon of Revelry - CHA",
		description : "I always have the Otto's Irresistible Dance spell prepared and can cast it once per Long Rest without a spell slot. While a crea is Charmed by Otto's Irresistible Dance, they can't cast spells with a Verbal component as they are forced to sing delightful nonsense if it has the capacity to sing. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
		scoresMaximum : [0, 0, 0, 0, 0, 30],
	},
	prerequisite : "Level 19+",
	prereqeval: function (v) {
		return v.characterLevel >= 19;
	},
};
FeatsList["boon of terror"] = {
	name : "Boon of Terror",
	source : [["FRHoF", 0]],
	type : "epic boon",
	savetxt : {
		immune : ["Frightened"],
	},
	action : [["reaction", "Flee, Fools! (against frightened target)"]],
	extraLimitedFeatures : [{
		name : "Flee, Fools!",
		usages : 1,
		recovery : "short rest",
	}],
	skills : [
		["Intimidation", "full"],
	],
	description : "I am Immune to the Frightened condition and gain Proficiency and Expertise in the Intimidation skill. Once per Short or Long Rest, when a crea with the Frightened condition starts its turn w/i 60 ft of me, I can take a Rea to cause it to make a Wis save (DC=8+Cha+Prof) or spend its turn moving away from me by the fastest available means. [+1 Charisma]",
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Improvement***. Increase your Charisma score by 1, to a Maximum of 30.",
		"***Fearless***. You have Immunity to the Frightened condition.",
		"***Flee, Fools!***. When a creature with the Frightened condition starts its turn within 60 feet of you, you can take a Reaction to stoke its terror, provided you can see the creature and it isn't behind Total Cover. If you do so, the creature must succeed on a Wisdom saving throw (DC 8 plus your Charisma modifier and your Proficiency Bonus) or spend its turn moving away from you by the fastest available means. Once you use this benefit, you can't use it again until you finish a Short or Long Rest.",
		"***Intimidating***. You gain Proficiency in the Intimidation skill if you don't already have it. You also gain Expertise in Intimidation.",
	],
	scores : [0, 0, 0, 0, 0, 1],
	scoresMaximum : [0, 0, 0, 0, 0, 30],
	prerequisite : "Level 19+",
	prereqeval: function (v) {
		return v.characterLevel >= 19;
	},
};
FeatsList["boon of the bright sun"] = {
	name : "Boon of the Bright Sun",
	source : [["FRHoF", 0]],
	type : "epic boon",
	action : [["bonus action", "Daylight Presence"]],
	description : "+1 to Con, Wis, or Cha, As a Bns, I radiate a 30-ft Emanation of Bright Light that is sunlight. If this Emanation overlaps with an area of Darkness created by a spell, the spell is dispelled. This Emanation lasts until I dismiss it (no action required), I die, or have the Incapacitated condition. While this Emanation is active, at the start of each of my turns, me and allies I can see in the Emanation gain 10 Temp HP.",
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Improvement***. Increase your Constitution, Wisdom, or Charisma score by 1, to a Maximum of 30.",
		"***Daylight Presence***. As a Bonus Action, you radiate a 30-foot Emanation of Bright Light that is sunlight. If any of the Emanation's area overlaps with an area of Darkness created by a spell, that spell is dispelled. The Emanation lasts until you dismiss it (no action required), die, or have the Incapacitated condition.",
		"***Fortifying Light***. When your Daylight Presence is active, at the start of each of your turns, you and allies you can see in your Daylight Presence gain 10 Temporary Hit Points.",
	],
	choices : ["Constitution", "Wisdom", "Charisma"],
	"constitution" : {
		name : "Boon of the Bright Sun - INT",
		description : "As a Bns, I radiate a 30-ft Emanation of Bright Light that is sunlight. If this Emanation overlaps with an area of Darkness created by a spell, the spell is dispelled. This Emanation lasts until I dismiss it (no action required), I die, or have the Incapacitated condition. While this Emanation is active, at the start of each of my turns, me and allies I can see in the Emanation gain 10 Temp HP. [+1 Constitution]",
		scores : [0, 0, 1, 1, 0, 0],
		scoresMaximum : [0, 0, 30, 0, 0, 0],
	},
	"wisdom" : {
		name : "Boon of the Bright Sun - WIS",
		description : "As a Bns, I radiate a 30-ft Emanation of Bright Light that is sunlight. If this Emanation overlaps with an area of Darkness created by a spell, the spell is dispelled. This Emanation lasts until I dismiss it (no action required), I die, or have the Incapacitated condition. While this Emanation is active, at the start of each of my turns, me and allies I can see in the Emanation gain 10 Temp HP. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
		scoresMaximum : [0, 0, 0, 0, 30, 0],
	},
	"charisma" : {
		name : "Boon of the Bright Sun - CHA",
		description : "As a Bns, I radiate a 30-ft Emanation of Bright Light that is sunlight. If this Emanation overlaps with an area of Darkness created by a spell, the spell is dispelled. This Emanation lasts until I dismiss it (no action required), I die, or have the Incapacitated condition. While this Emanation is active, at the start of each of my turns, me and allies I can see in the Emanation gain 10 Temp HP. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
		scoresMaximum : [0, 0, 0, 0, 0, 30],
	},
	prerequisite : "Level 19+",
	prereqeval: function (v) {
		return v.characterLevel >= 19;
	},
};
FeatsList["boon of the furious storm"] = {
	name : "Boon of the Furious Storm",
	source : [["FRHoF", 0]],
	type : "epic boon",
	dmgres : ["Lightning", "Thunder"],
	savetxt : {
		immune : ["Lightning while Bloodied; ", "Thunder while Bloodied; "],
	},
	description : "+1 to Int, Wis, or Cha, I have Resistance to Lightning and Thunder dmg, while Bloodied, I am Immune. Additionally, crea have Disadv on saves against my spells that deal Lightning or Thunder dmg.",
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Improvement***. Increase your Intelligence, Wisdom, or Charisma score by 1, to a Maximum of 30.",
		"***Eye of the Storm***. You have Resistance to Lightning and Thunder damage. While you are Bloodied, you have Immunity to Lightning and Thunder damage.",
		"***Storm's Strength***. Creatures have Disadvantage on saving throws against your spells that deal Lightning or Thunder damage.",
	],
	choices : ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		name : "Boon of the Furious Storm - INT",
		description : "I have Resistance to Lightning and Thunder dmg, while Bloodied, I am Immune. Additionally, crea have Disadv on saves against my spells that deal Lightning or Thunder dmg. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
		scoresMaximum : [0, 0, 0, 30, 0, 0],
	},
	"wisdom" : {
		name : "Boon of the Furious Storm - WIS",
		description : "I have Resistance to Lightning and Thunder dmg, while Bloodied, I am Immune. Additionally, crea have Disadv on saves against my spells that deal Lightning or Thunder dmg. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
		scoresMaximum : [0, 0, 0, 0, 30, 0],
	},
	"charisma" : {
		name : "Boon of the Furious Storm - CHA",
		description : "I have Resistance to Lightning and Thunder dmg, while Bloodied, I am Immune. Additionally, crea have Disadv on saves against my spells that deal Lightning or Thunder dmg. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
		scoresMaximum : [0, 0, 0, 0, 0, 30],
	},
	prerequisite : "Level 19+, Spellcasting or Pact Magic Feature",
	prereqeval: function (v) {
		return v.characterLevel >= 19 && v.isSpellcaster;
	},
};
FeatsList["boon of the soul drinker"] = {
	name : "Boon of the Soul Drinker",
	source : [["FRHoF", 0]],
	type : "epic boon",
	description : "+1 to Any, I gain Resistance to Cold and Necrotic dmg. Additionally, once per Short or Long Rest, as a Rea when an enemy w/i 120 ft of me is reduced to 0 HP, I can regain 50 HP.",
	dmgres : ["Cold", "Necrotic"],
	extraLimitedFeatures : [{
		name : "Siphon Life",
		usages : 1,
		recovery : "short rest",
	}],
	action : [["reaction", "Siphon Life"]],
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Improvement***. Increase one ability score of your choice by 1, to a Maximum of 30.",
		"***Grave Resistance***. You have Resistance to Cold damage and Necrotic damage.",
		"***Siphon Life***. When an enemy within 120 feet of you is reduced to 0 Hit Points, you can take a Reaction to regain 50 Hit Points. Once you use this benefit, you can't use it again until you finish a Short or Long Rest.",
	],
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		name : "Boon of the Soul Drinker - STR",
		description : "I gain Resistance to Cold and Necrotic dmg. Additionally, once per Short or Long Rest, as a Rea when an enemy w/i 120 ft of me is reduced to 0 HP, I can regain 50 HP. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
		scoresMaximum : [30, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		name : "Boon of the Soul Drinker - DEX",
		description : "I gain Resistance to Cold and Necrotic dmg. Additionally, once per Short or Long Rest, as a Rea when an enemy w/i 120 ft of me is reduced to 0 HP, I can regain 50 HP. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
		scoresMaximum : [0, 30, 0, 0, 0, 0],
	},
	"constitution" : {
		name : "Boon of the Soul Drinker - CON",
		description : "I gain Resistance to Cold and Necrotic dmg. Additionally, once per Short or Long Rest, as a Rea when an enemy w/i 120 ft of me is reduced to 0 HP, I can regain 50 HP. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
		scoresMaximum : [0, 0, 30, 0, 0, 0],
	},
	"intelligence" : {
		name : "Boon of the Soul Drinker - INT",
		description : "I gain Resistance to Cold and Necrotic dmg. Additionally, once per Short or Long Rest, as a Rea when an enemy w/i 120 ft of me is reduced to 0 HP, I can regain 50 HP. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
		scoresMaximum : [0, 0, 0, 30, 0, 0],
	},
	"wisdom" : {
		name : "Boon of the Soul Drinker - WIS",
		description : "I gain Resistance to Cold and Necrotic dmg. Additionally, once per Short or Long Rest, as a Rea when an enemy w/i 120 ft of me is reduced to 0 HP, I can regain 50 HP. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
		scoresMaximum : [0, 0, 0, 0, 30, 0],
	},
	"charisma" : {
		name : "Boon of the Soul Drinker - CHA",
		description : "I gain Resistance to Cold and Necrotic dmg. Additionally, once per Short or Long Rest, as a Rea when an enemy w/i 120 ft of me is reduced to 0 HP, I can regain 50 HP. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
		scoresMaximum : [0, 0, 0, 0, 0, 30],
	},
	prerequisite : "Level 19+",
	prereqeval: function (v) {
		return v.characterLevel >= 19;
	},
};
//Equipment
//Adventuring Gear
GearList["adventurer's ring"] = {
	infoname : "Adventurer's Ring [250 gp]",
	name : "Adventurer's Ring",
	amount : "",
	weight : "",
};
MagicItemsList["adventurer's ring"] = {
	name : "Adventurer's Ring",
	source : [["FRHoF", 132]],
	type : "ring",
	rarity : "common",
	magicItemTable : "?",
	description : "While the cover of this ring is open, the ring produces a flame that creates no heat and consumes no fuel. It sheds Bright Light in a 20-foot radius and Dim Light for an additional 20 feet. As a Bonus Action, I can close the cover, smothering the flame, or open it again.",
	descriptionFull : "While the cover of this ring is open, the ring produces a flame that creates no heat and consumes no fuel. It sheds Bright Light in a 20-foot radius and Dim Light for an additional 20 feet. As a Bonus Action, you can close the cover, smothering the flame, or open it again.",
	action: [["bonus action", " (Open/Close)"]]
};
GearList["bright fungal cloak"] = {
	infoname : "Bright Fungal Cloak [25 gp]",
	name : "Bright Fungal Cloak",
	amount : "",
	weight : 4,
};
GearList["desert clothing"] = {
	infoname : "Desert Clothing [10 gp]",
	name : "Desert Clothing",
	amount : "",
	weight : 4,
};
GearList["devil mask"] = {
	infoname : "Devil Mask [25 gp]",
	name : "Devil Mask",
	amount : "",
	weight : "",
};
GearList["garb of light and shadow"] = {
	infoname : "Garb of Light and Shadow [50 gp]",
	name : "Garb of Light and Shadow",
	amount : "",
	weight : 6,
};
GearList["genie robe"] = {
	infoname : "Genie Robe [50 gp]",
	name : "Genie Robe",
	amount : "",
	weight : 6,
};
GearList["locking spellbook"] = {
	infoname : "Locking Spellbook [35 gp]",
	name : "Locking Spellbook",
	amount : "",
	weight : 3,
};
GearList["monster camouflage"] = {
	infoname : "Monster Camouflage [50 gp]",
	name : "Monster Camouflage",
	amount : "",
	weight : 6,
};
GearList["warm fungal cloak"] = {
	infoname : "Warm Fungal Cloak [15 gp]",
	name : "Warm Fungal Cloak",
	amount : "",
	weight : 4,
};
GearList.windskiff = {
	infoname : "Windskiff [4000 gp]",
	name : "Windskiff",
	amount : "",
	weight : "",
};
MagicItemsList.windskiff = {
	name : "Windskiff",
	source : [["FRHoF", 133]],
	type : "wonderous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "As an action, I transform this item into a Medium-size personal vehicle AC 12, HP 30, Speed 40 ft. This vehicle hovers a few inches off whatever surface it's on and can glide; it moves 5 ft horizontally for every 1 foot it descends in the air. The Windskiff and its riders take no damage from falling.",
	descriptionFull : [
		"This small piece of jewelry has 3 charges and regains all expended charges daily at dawn. While you are holding it, you can take a Magic action to expend 1 charge, which causes the jewelry to transform into a sail-powered personal vehicle. The vehicle is roughly the size and shape of a household door with a 10-foot-tall sail extending from one side. After 1 hour or until you use the item's command word (no action required), the transformation ends and the Windskiff reverts to its jewelry form.",
		"In vehicle form, a Windskiff is a Medium object with the following statistics: AC 12, HP 30, and Speed 40 ft. The windskiff hovers a few inches above whatever surface it's on and can glide; it moves 5 feet horizontally for every 1 foot it descends in the air. A Windskiff and its riders take no damage from falling.",
	],	
	action: [["action", " (Transform)"]],
};
GearList["winter camouflage"] = {
	infoname : "Winter Camouflage [50 gp]",
	name : "Winter Camouflage",
	amount : "",
	weight : 4,
};
//Mechanical Wonders
GearList["mechanical wonder (domestic)"] = {
	infoname : "Mechanical Wonder (domestic) [400 gp]",
	name : "Mechanical Wonder (domestic)",
	amount : "",
	weight : "",
};
CreatureList["domestic wonder"] = {
	name : "Domestic Wonder",
	regExpSearch : /^(?=.*domestic)(?=.*wonder).*$/i,
	source : [["FRHoF", 134]],
	size : 3,
	type : "Construct",
	alignment : "Unaligned",
	ac : 9,
	hp : 5,
	hd : [1, 8],
	speed : "30 ft",
	scores : [13, 8, 13, 3, 8, 1],
	saves : ["", "", "", "", 0, ""],
	damage_immunities : "Poison",
	condition_immunities : "Exhausted; Poisoned",
	languages : "Understands Common but can't speak",
	challengeRating : "None",
	proficiencyBonus : 2,
	Traits : [{
		name : "Mechanical Determination",
		description : "If damage reduces the wonder to 0 Hit Points, it must make a Constitution saving throw with a DC of 5 plus the damage taken unless the damage is Lightning or from a Critical Hit. On a successful save, the wonder drops to 1 Hit Point instead.",
		joinString : "\n   ",
	}, {
		name : "Wind-Up Operation",
		description : "The wonder has the Unconscious condition until another creature winds it with the wonder's unique key for 1 minute. Once wound, the wonder operates for 10 days or until a creature touches the wonder with its key as a Utilize action to deactivate it, after which the wonder has the Unconscious condition until it is wound again.",
		joinString : "\n   ",
	}],
};
//Tools
ToolsList.bandore = {
	infoname : "Bandore [65 gp]",
	name : "Bandore",
	amount : "",
	weight : 3,
	type : "musical instrument",
	source : [["FRHoF", 0]],
};
ToolsList.cittern = {
	infoname : "Cittern [65 gp]",
	name : "Cittern",
	amount : "",
	weight : 2,
	type : "musical instrument",
	source : [["FRHoF", 0]],
};
ToolsList.yarting = {
	infoname : "Yarting [40 gp]",
	name : "Yarting",
	amount : "",
	weight : 2,
	type : "musical instrument",
	source : [["FRHoF", 0]],
};
//Spells
SpellsList["alustriel's mooncloak"] = {
	name : "Alustriel's Mooncloak",
	classes : ["bard", "druid", "ranger", "wizard"],
	source : [["FRHoF", 142]],
	level : 5,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	components : "V,S,M\u0192",
	compMaterial : "a moonstone worth 50+ GP",
	duration : "Conc, 1 min",
	description : "20-ft Emanation of Dim Light centered on me, while in area, me and allies have Half Cover and Resist Cold, Ligh, and Rad dmg (See full description)",
	descriptionFull : [
		"For the duration, moonlight fills a 20-foot Emanation originating from you with Dim Light. While in that area, you and your allies have Half Cover and Resistance to Cold, Lightning, and Radiant damage." + "\n   " + "While the spell lasts, you can use one of the following options, ending the spell immediately:" + "\n   " + "***Liberation***. When you fail a saving throw to avoid or end the Frightened, Grappled, or Restrained condition, you can take a Reaction to succeed on the save instead." + "\n   " + "***Respite***. As a Magic action, you or an ally within the area regains Hit Points equal to 4d10 plus your spellcasting ability modifier.",
	],
};
SpellsList.backlash = {
	name : "Backlash",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : [["FRHoF", 142]],
	level : 4,
	school : "Abjur",
	time : "1 rea",
	timeFull : "Reaction, which you take in response to taking damage",
	range : "60 ft",
	components : "V",
	duration : "Instantaneous",
	description : "When I take dmg, reduce by 4d6+1d6/SL + spell mod, if crea who dealt dmg is w/i range Con save or 4d6+1d6/SL Force dmg or half on success",
	descriptionFull : [
		"You ward yourself against destructive energy, reducing the damage taken by 4d6 plus your spellcasting ability modifier." + "\n   " + "If the triggering damage was from a creature within range, you can force the creature to make a Constitution saving throw. The creature takes 4d6 Force damage on a failed save or half as much damage on a successful one." + AtHigherLevels + "The damage reduced and Fore damage from this spell both increase by 1d6 for every spell slot level above 4.",
	],
};
SpellsList["blade of disaster"] = {
	name : "Blade of Disaster",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["FRHoF", 143]],
	level : 9,
	school : "Conj",
	time : "1 bns",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "Create weapon; 2 spell atks 10d6 Force dmg; crit on 18+; bns a to move 60 ft \u0026 do 2 atks",
	descriptionShorter : "Create wea; 2 spell atks 10d6 Force dmg; crit 18+; bns a to move 60 ft \u0026 2 atks",
	descriptionFull : [
		"You create a 3-foot-long blade-shaped planar rift that lasts for the duration. The rift appears within range in a space of your choice, and you can immediately make up to two melee spell attacks, each one against a creature or object within 5 feet of the rift. On a hit, the target takes 10d6 Force damage. This attack scores a Critical Hit if the number on the d20 is 18 or higher." + "\n   As a Bonus Action on your later turns, you can move the rift up to 60 feet and repeat the two attacks against a creature or an object within 5 feet of it. You can direct the attacks at the same target or at different ones." + "\n   The blade can harmlessly pass through any barrier, including ones created by spells like Wall of Force.",
	],	
};
SpellsList["cacophonic shield"] = {
	name : "Cacophonic Shied",
	classes : ["bard", "sorcerer", "wizard"],
	source : [["FRHoF", 143]],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	description : "10-ft Emanation from me, when a crea enters/ends turn Con save, fail 3d6+1d6/SL Thunder dmg + Deafened, success half dmg only",
	descriptionFull : [
		"Thunderous reverberations fill a 10-foot Emanation originating from you for the duration. Whenever the Emanation enters a creature's space and whenever a creature enters the Emanation or ends its turn there, the creature makes a Constitution saving throw. On a failed save, the creature takes 3d6 Thunder damage and has the Deafened condition until the start of your next turn. On a successful save, the creature takes half as much damage only. A creature makes this save only once per turn. When you cast this spell, you can designate creatures to be unaffected by it." + "\n   " + "In addition, you have Resistance to Thunder damage, and ranged attack rolls against you are made with Disadvantage." + AtHigherLevels + "The damage increases by 1d6 for each spell slot above 3.",
	],
};
SpellsList["conjure constructs"] = {
	name : "Conjure Constructs",
	classes : ["wizard"],
	source : [["FRHoF", 143]],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "a brass cog",
	duration : "Conc, 10 min",
	description : "Construct spirit to unoccupied space w/i range, when cast and as a Magic action on subsequent turns, 1 crea w/i 5 ft of spirit (See full description)",
	descriptionFull : [
		"You conjure a group of intangible, orderly spirits that appear as a Medium group of modrons or other Constructs in an unoccupied space you can see within range. The spirits last for the duration." + "\n   " + "When you cast this spell and as a Magic action on subsequent turns, you can command the spirits to target one creature or object you can see within 5 feet of the spirits and create one of the following effects:" + "\n   " + "***Clockwork Force***. The target makes a Dexterity saving throw, taking 3d6 Force damage on a failed save or half as much damage on a successful one." + "\n   " + "***Orderly Ward***. The target gains Temporary Hit Points equal to 1d6 plus your spellcasting ability modifier." + "\n   " + "When you move on your turn, you can also move the spirits up to 30 feet to an unoccupied space you can see." + AtHigherLevels + "The damage and Temporary Hit Points both increase by 1d6 for each spell slot level above 3.",
	],
};
SpellsList["death armor"] = {
	name : "Death Armor",
	classes : ["sorcerer", "wizard"],
	source : [["FRHoF", 143]],
	level : 2,
	school : "Necro",
	time : "1 a",
	range : "Touch",
	components : "V,S,M\u2020",
	compMaterial : "an onyx worth 50+ GP, which the spell consumes",
	duration : "1 hr",
	description : "1 crea, touch gains Adv on Death saves, once per turn, when enemy w/i 5ft of crea hits with melee atk roll, deal 2d4 Necro dmg to enemy",
	descriptionFull : [
		"For the duration, an inky aura surrounds one creature you touch. The target has Advantage on Death Saving Throws, and once per turn, when a creature within 5 feet of the target hits it with a melee attack roll, the attacker takes 2d4 Necrotic damage.",
	],
};
SpellsList["deryan's helpful homunculi"] = {
	name : "Deryan's helpful homunculi",
	classes : ["cleric", "wizard"],
	source : [["FRHoF", 143]],
	ritual : true,
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "Self",
	components : "V,S,M\u2020",
	compMaterial : "powdered gemstones worth 100+ GP, which he spell consumes, and one set of Artisan's Tools with which you have proficiency",
	duration : "8 hr",
	description : "construct spirits that have Prof in Arcana and with Artisan's Tool used in casting, help with crafting, halving crafting time",
	descriptionFull : [
		"You summon a group of helpful spirits, which last for the duration. The spirits appear as homunculi or as another Construct of choice but are intangible and invulnerable, and they are considered to have proficiency in the Arcana skill and with the set of Artisan's Tools used in the spell's casting." + "\n   " + "If you are crafting an item, the spirits function as a single assistant for your crafting, halving the crafting time.",
	],
};
SpellsList.dirge = {
	name : "Dirge",
	classes : ["bard", "cleric"],
	source : [["FRHoF", 144]],
	level : 6,
	school : "Ench",
	time : "1 a",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	description : "60-ft Emanation, each undesignated crea w/i range can't regain HP, Con save fail, 3d10 Necro dmg and Prone, success half dmg and half Speed",
	descriptionFull : [
		"Deathly power fills a 60-foot Emanation originating from you for the duration." + "\n   " + "When you cast this spell, you can designate creatures to be unaffected by it. Any other creature can't regain Hit Points while in the Emanation. Whenever the Emanation enters a creature's space and whenever a creature enters the Emanation or ends its turn there, the creature makes a Constitution saving throw. On a failed save, the creature takes 3d10 Necrotic damage and has the Prone condition. On a successful save, the creature takes half as much damage and its Speed is halved. A creature makes this save only once per turn." + "\n   " + toUni("Casting as a Circle Spell") + ": " + "Casting this as a Circle spell requires a minimum of two secondary casters. If the spell is cast as a Cicle spell, its duration becomes Concentration up to 10 minutes." + "\n   " + "A creature that fails its save against the spell's effect also gains 1 Exhaustion level. While the creature has Exhaustion levels, finishing a Long Rest neither restores lost Hit Points nor reduces the creature's Exhaustion level." + "\n   " + "When the spell is cast, each secondary caster must expend a level 4+ spell slot; otherwise, the spell fails.",
	],
};
SpellsList.doomtide = {
	name : "Doomtide",
	classes : ["bard", "cleric", "warlock"],
	source : [["FRHoF", 144]],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "soot and a dried eel",
	duration : "Conc, 1 min",
	description : "20-ft-rad Sphere w/i range magical darkness fog, ea crea w/i area Wis save, fail 5d6 Psy dmg and -1d6 from saves till end of its next turn, success half dmg only",
	descriptionFull : [
		"You create a 20-foot-radius Sphere of inky fog within range. The fog is magical, Darkness and lasts for the duration or until a strong wind (such as the one created by the Gust of Wind spell) disperses it, ending the spell." + "\n   " + "Each creature in the Sphere when it appears makes a Wisdom saving throw. On a failed save, a creature takes 5d6 Psychic damage and subtracts 1d6 from its saving throws until the end of its next turn. On a successful save, a creature takes half as much damage only. A creature also makes this save when the Sphere moves into its space, when it enters the Sphere, or when it ends its turn inside the Sphere. A creature makes tis save only once per turn." + "\n   " + "The Sphere moves 10 feet away from you at the start of each of your turns." + "\n   " + toUni("Casting as a Circle Spell") + ": " + "Casting this as a Circle spell requires a minimum of five secondary casters. In addition to the spell's usual components, you must provide a special component (a string of three black pearls from Pandemonium), which the spell consumes. The spell's range increases to 1 mile, and its duration increases to until dispelled (no Concentration required). The spell ends early if any caster who participated in this casting contributes to another casting of Doomtide as a Circle Spell." + "\n   " + "When the spell is cast, each secondary caster must expend a level 3+ spell slot; otherwise, the spell fails.",
	],
};
SpellsList["elminster's effulgent spheres"] = {
	name : "Elminster's Effulgent Spheres",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["FRHoF", 144]],
	level : 6,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "V,S,M\u0192",
	compMaterial : "an opal worth 1000+ GP",
	duration : "1 hr",
	description : "6+1/SL spheres orbit me, which I can use to create effects (See full description)",
	descriptionFull : [
		"Six hromatic spheres orbit you for the duration." + "\n   " + "While the spheres are present, you can expend spheres to create the following effects:" + "\n   " + "***Absorb Energy***. When you take Acid, Cold, Fire, Lightning, or Thunder damage, you can take a Reaction to expend one sphere and give yourself Resistance to the triggering damage type until the start of your next turn." + "\n   " + "***Energy Blast***. As a Bonus Action, you send one sphere hurtling toward a target within 120 feet of yourself. Make a ranged spell attack. On a hit, the target takes 3d6 Acid, Cold, Fire, Lightning, or Thunder damage (your choice). Regardless of whether you hit, the sphere is expended." + "\n   " + "The spell ends early if you have no more spheres remaining." + AtHigherLevels + "The number of spheres increases by 1 for every spell slot level above 6.",
	],
};
SpellsList["elminster's elusion"] = {
	name : "Elminster's Elusion",
	classes : ["wizard"],
	source : [["FRHoF", 144]],
	level : 2,
	school : "Abjur",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	description : "I have Adv on saves against spells and magical effects, if on a successful save, I would take half dmg, I instead take none.",
	descriptionFull : [
		"Arcane wards protect you against magic for the duration. You have Advantage on saving throws against spells and magical effects. Additionally, if you succeed on a saving throw against a spell or magical effect and would normally take half as much damage, you instead take no damage.",
	],
};
SpellsList["holy star of mystra"] = {
	name : "Holy Star of Mystra",
	classes : ["cleric", "wizard"],
	source : [["FRHoF", 145]],
	level : 8,
	school : "Evoc",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "I create a glowing mote of energy above myself, granting me benefits (see full description).",
	descriptionFull : [
		"You create a glowing mote of energy that hovers above you for the duration. The mote sheds Bright Light in a 5-foot radius and Dim Light for an additional 5 feet." + "\n   " + "When you cast this spell as a Bonus Action on later turns, you can unleash a shining bolt from the mote, targeting one creature within 120 feet of yourself. Make a ranged spell attack. On a hit, the target takes Force or Radiant damage (your choice) equal to 4d10 plus your spellcasting ability modifier." + "\n   " + "In addition, while the mote is present, you have Three-Quarters Cover, and if you succeed on a saving throw against a spell f level 7 or lower that targeted only you and didn't create an area of effect, you can take a Reaction to deflect that spell back at the spell's caster; th caster makes a saving throw against that spell using that caster's own spell save DC.",
	],
};
SpellsList["laeral's silver lance"] = {
	name : "Laeral's Silver Lance",
	classes : ["cleric", "sorcerer", "wizard"],
	source : [["FRHoF", 145]],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "V,S,M\u0192",
	compMaterial : "a silver pin worth 250+ GP",
	duration : "Instantaneous",
	description : "120-ft long, 5-ft wide Line, ea crea of choice Str save, fail 3d10+1d10/SL Force dmg and Prone, success half dmg only",
	descriptionFull : [
		"Silver energy bursts out from you in a 120-foot-long, 5-foot-wide Line. Each creature of your choice in the line makes a Strength saving throw. On a failed save, a creature takes 3d10 Force damage and has the Prone condition. On a successful save, a creature takes half as much damage only." + AtHigherLevels + "The damage increases by d10 for every spell slot above 3.",
	],
};
SpellsList["simbul's Synostodweomer"] = {
	name : "Simbul's Synostodweomer",
	classes : ["sorcerer", "wizard"],
	source : [["FRHoF", 145]],
	level : 7,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "1 hr",
	description : "When 1 crea I touch casts a spell using a spell slot they can expend a number of unused HD equal to the slot level and regain HP equal to roll + my spell modifier.",
	descriptionFull : [
		"You imbue one creature you touch with magical healing energy for the duration. Whenever the target casts a spell using a spell slot, the target can immediately roll a number of expended Hit Point Dice equal to the spell slot's level and regain Hit Points equal to the roll's total plus your spellcasting ability modifier; those dice are then expended.",
	],
};
SpellsList["songal's elemental suffusion"] = {
	name : "Songal's Elemental Suffusion",
	classes : ["druid", "sorcerer", "warlock"],
	source : [["FRHoF", 145]],
	level : 5,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S,M\u0192",
	compMaterial : "a pearl worth 100+ GP",
	duration : "Conc, 1 min",
	description : "I imbue myself with elemental power (see full description)",
	descriptionFull : [
		"You imbue yourself with the elemental power of genies. You gain the following benefits until the spell ends:" + "\n   " + "***Elemental Immunity***. When you cast this spell, choose one of the following damage types: Acid, Cold, Fire, Lightning, or Thunder. You have Resistance to the chosen damage type." + "\n   " + "***Elemental Pulse***. When you cast this spell and at the start of each of your subsequent turns, you release a burst of elemental energy in a 15-foot Emanation originating from yourself. Each creature of your choice in that area makes a Dexterity saving throw. On a failed save, a creature takes 2d6 Acid, Cold, Fire, Lightning, or Thunder damage (your choice) and has the Prone condition. On a successful save, a creature takes half as much damage only." + "\n   " + "***Flight***. You gain a Fly Speed of 30 feet and can hover." + "\n   " + toUni("Casting as a Circle Spell") + ": " + "If the spell is cast as a Circle spell, its casting time increases to 1 minute, and its duration increases to Concentration, up to 10 minutes. For each secondary caster who participates in the casting, you can choose one additional creature, to a maximum of nine additional creatures. The chosen creatures also gain the benefits of the spell for its duration." + "\n   " + "When the spell is cast, each secondary caster must expenda level 2+ spell slot; otherwise, the spell fails.",
	],
};
SpellsList["spellfire flare"] = {
	name : "spellfire flare",
	classes : ["sorcerer", "wizard"],
	source : [["FRHoF", 146]],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Ranged spell atk, 1+1/SL bolt, Ignore Half and Three-Quarter Cover, on hit 2d10 Rad dmg, bolts can hit the same target or different one",
	descriptionFull : [
		"You unleash a blast of brilliant fire. Make a ranged spell attack against a target within range; a target gains no benefit from Half Cover or Three-Quarters Cover from this attack roll. On a hit, the target takes 2d10 Radiant damage." + AtHigherLevels + "You create an additional blast for each spell slot level above 1. You can direct the blasts at the same target or at different ones. Make a separate attack roll for each blast.",
	],
};
SpellsList["spellfire storm"] = {
	name : "Spellfire Storm",
	classes : ["sorcerer", "warlock"],
	source : [["FRHoF", 146]],
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "I conjure a 20-ft-radius, 20-ft-high Cylinder of light w/i range (see full description)",
	descriptionFull : [
		"You conjure a pillar of spellfire in a 20-foot-radius, 20-foot-high Cylinder centered on a point within range. The area of the Cylinder is Bright Light, and each creature in it, when it appears, makes a Constitution saving throw, taking 4d10 Radiant damage on a failed save or half as much damage on a successful one. A creature also makes this save when it enters the spell's area for the first time on a turn or ends its turn there. A creature makes this save only once per turn." + "\n   " + "In addition, whenever a creature in the Cylinder casts a spell, that creature makes a Constitution saving throw. On a failed save, th spell dissipates with no effect, and the action, Bonus Action, or Reaction used to cast it is wasted. If that spell was cast with a spell slot, the slot isn't expended." + "\n   " + "When you cast this spell, you can designate creatures to be unaffected by it." + "\n   " + toUni("Casting as a Circle Spell") + ": " + "In addition to the spell's usual components, you must provide a special component (a blue star sapphire worth 25000+ GP), which the spell consumes. The spell's range increases to 1 mile, and it no longer requires Concentration. When the spell is cast, each secondary caster must expend a level 3+ spell slot; otherwise, the spell fails." + AtHigherLevels + "The damage increases by 1d10 for every spell slot level above 4." + "\n   " + "The number of secondary casters determines the spell's area of effect and duration, as shown in the table below. The spell ends early if any caster who participated in this casting contributes to another casting of Spellfire Storm as a Circle spell." + "\n   " + "1-3 Secondary Casters, 40-foot-radius, 40-foot-high Cylinder, 1 Hour duration." + "\n   " + "4-6 Secondary Casters, 60-foot-radius, 60-foot-high Cylinder, 8 Hour duration." + "\n   " + "7+ Secondary Casters, 100-foot-radius, 100-foot-high Cylinder, 24 Hour duration.",
	],
};
SpellsList["syluné's viper"] = {
	name : "Syluné's Viper",
	classes : ["druid", "wizard"],
	source : [["FRHoF", 147]],
	level : 3,
	school : "Conj",
	time : "1 bns",
	range : "Self",
	components : "V,S,M",
	compMaterial : "a snake fang",
	duration : "1 hr",
	description : "I gain 15+5/SL Temp HP, While I have Temp HP, I have a Climb Speed equal to my Speed, as a Magic action, Ranged spell atk (see full description)",
	descriptionFull : [
		"A shimmering, spectral snake encircles your body for the duration. You gain 15 Temporary Hit Points; the spell ends early if you have no Temporary Hit Points left." + "\n   " + "While the spell is active, you gain the following benefits:" + "\n   " + "***Climbing***. You gain a Climb Speed equal to your Speed." + "\n   " + "***Venomous Bite***. As a Magic Action, you can make a ranged spell attack using the snake against one creature within 50 feet. On a hit, the target takes 1d6 Force damage and has the Poisoned condition until the start of your next turn. While Poisoned, the target has the Incapacitated condition." + AtHigherLevels + "For each spell slot level above 3, the number of Temporary Hit Points you gain from this spell increases by 5, and the damage of the Venomous Bite increases by 1d6.",
	],
};
SpellsList.wardaway = {
	name : "Wardaway",
	classes : ["bard", "cleric", "paladin", "wizard"],
	source : [["FRHoF", 147]],
	level : 1,
	school : "Abjur",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "a miniature clay hand",
	duration : "Instantaneous",
	description : "1 crea w/i range, Con save, fail 2d4+2d4/SL Force dmg, Speed halved till start of my next turn, and can only take Action or Bns on turn, success half dmg only.",
	descriptionFull : [
		"You hurl a disorienting magical force toward one creature within range. The target makes a Constitution saving throw; Constructs and Undead automatically succeed on this save." + "\n   " + "On a failed save, the target takes 2d4 Force damage, its Speed is halved until the start of your next turn, and on its next turn, it can take only an action or a Bonus Action (but not both). On a successful save, the target takes half as much damage only." + AtHigherLevels + "The damage increases by 2d4 for every spell slot level above 1.",
	],
};
