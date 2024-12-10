var iFileName = "pub_20240917_PHB_Dunamancy_Companion.js";
RequiredSheetVersion("13.1.14");

SourceList.W = {
	name : "Explorer's Guide to Wildemount",
	abbreviation : "EGtW",
	abbreviationSpellsheet : "W",
	group : "Campaign Sourcebooks",
	campaignSetting : "Critical Role",
	url : "https://dnd.wizards.com/products/wildemount",
	date : "2020/03/17"
};
//Companion script for the 2024 PHB script to allow the use of Dunamancy Spells with the new Classes
//To use this script add all of your desired sources adding the 2024 PHB last, once this is done add this Companion script, note this will only work if you have the EGtW script.
AddFeatureChoice(ClassList.bard.features.spellcasting, true, "Access to Dunamancy Spells", {
	name : "Dunamancy Spells",
	extraname : "Optional Bard 1",
	source : [["W", 186]],
	description : desc([
		"All dunamancy spells are added to the bard spell list, each still pending DM's approval"
	]),
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "bard" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["sapping sting", "gift of alacrity", "magnify gravity", "fortune's favor", "immovable object", "wristpocket", "pulse wave", "gravity sinkhole", "temporal shunt", "gravity fissure", "tether essence", "dark star", "reality break", "ravenous void", "time ravage"]);
			},
			"This optional class feature expands the spell list of the bard class with all dunamancy spells (spell level in brackets): Sapping Sting (cantrip), Gift of Alacrity (1), Magnify Gravity (1), Fortune's Favor (2), Immovable Object (2), Wristpocket (2), Pulse Wave (3), Gravity Sinkhole (4), Temporal Shunt (5), Gravity Fissure (6), Tether Essence (7), Dark Star (8), Reality Break (8),Ravenous Void (9), and Time Ravage (9)."
		]
	}
}, "Optional 1st-level bard features");
AddFeatureChoice(ClassList.cleric.features.spellcasting, true, "Access to Dunamancy Spells", {
	name : "Dunamancy Spells",
	extraname : "Optional Cleric 1",
	source : [["W", 186]],
	description : desc([
		"All dunamancy spells are added to the cleric spell list, each still pending DM's approval"
	]),
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "cleric" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["sapping sting", "gift of alacrity", "magnify gravity", "fortune's favor", "immovable object", "wristpocket", "pulse wave", "gravity sinkhole", "temporal shunt", "gravity fissure", "tether essence", "dark star", "reality break", "ravenous void", "time ravage"]);
			},
			"This optional class feature expands the spell list of the cleric class with all dunamancy spells (spell level in brackets): Sapping Sting (cantrip), Gift of Alacrity (1), Magnify Gravity (1), Fortune's Favor (2), Immovable Object (2), Wristpocket (2), Pulse Wave (3), Gravity Sinkhole (4), Temporal Shunt (5), Gravity Fissure (6), Tether Essence (7), Dark Star (8), Reality Break (8),Ravenous Void (9), and Time Ravage (9)."
		]
	}
}, "Optional 1st-level cleric features");
AddFeatureChoice(ClassList.druid.features.spellcasting, true, "Access to Dunamancy Spells", {
	name : "Dunamancy Spells",
	extraname : "Optional Druid 1",
	source : [["W", 186]],
	description : desc([
		"All dunamancy spells are added to the druid spell list, each still pending DM's approval"
	]),
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "druid" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["sapping sting", "gift of alacrity", "magnify gravity", "fortune's favor", "immovable object", "wristpocket", "pulse wave", "gravity sinkhole", "temporal shunt", "gravity fissure", "tether essence", "dark star", "reality break", "ravenous void", "time ravage"]);
			},
			"This optional class feature expands the spell list of the druid class with all dunamancy spells (spell level in brackets): Sapping Sting (cantrip), Gift of Alacrity (1), Magnify Gravity (1), Fortune's Favor (2), Immovable Object (2), Wristpocket (2), Pulse Wave (3), Gravity Sinkhole (4), Temporal Shunt (5), Gravity Fissure (6), Tether Essence (7), Dark Star (8), Reality Break (8),Ravenous Void (9), and Time Ravage (9)."
		]
	}
}, "Optional 1st-level druid features");
AddFeatureChoice(ClassList.paladin.features.spellcasting, true, "Access to Dunamancy Spells", {
	name : "Dunamancy Spells",
	extraname : "Optional Paladin 1",
	source : [["W", 186]],
	description : desc([
		"All dunamancy spells are added to the paladin spell list, each still pending DM's approval"
	]),
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "paladin" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["gift of alacrity", "magnify gravity", "fortune's favor", "immovable object", "wristpocket", "pulse wave", "gravity sinkhole", "temporal shunt"]);
			},
			"This optional class feature expands the spell list of the paladin class with all dunamancy spells (spell level in brackets): Gift of Alacrity (1), Magnify Gravity (1), Fortune's Favor (2), Immovable Object (2), Wristpocket (2), Pulse Wave (3), Gravity Sinkhole (4), and Temporal Shunt (5)."
		]
	}
}, "Optional 1st-level paladin features");
var EGtW_Ranger_Dunamancy_Spells = {
	name : "Dunamancy Spells",
	extraname : "Optional Ranger 1",
	source : [["W", 186]],
	description : desc([
		"All dunamancy spells are added to the ranger spell list, each still pending DM's approval"
	]),
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if ((spName !== "ranger" && spName !== "rangerua") || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["gift of alacrity", "magnify gravity", "fortune's favor", "immovable object", "wristpocket", "pulse wave", "gravity sinkhole", "temporal shunt"]);
			},
			"This optional class feature expands the spell list of the ranger class with all dunamancy spells (spell level in brackets): Gift of Alacrity (1), Magnify Gravity (1), Fortune's Favor (2), Immovable Object (2), Wristpocket (2), Pulse Wave (3), Gravity Sinkhole (4), and Temporal Shunt (5)."
		]
	}
};
AddFeatureChoice(ClassList.ranger.features.spellcasting, true, "Access to Dunamancy Spells", EGtW_Ranger_Dunamancy_Spells, "Optional 1st-level ranger features");
RunFunctionAtEnd(function() {
	if (!ClassList["rangerua"]) return;
	AddFeatureChoice(ClassList.rangerua.features.spellcasting, true, "Access to Dunamancy Spells", EGtW_Ranger_Dunamancy_Spells, "Optional 2nd-level ranger features");
});
AddFeatureChoice(ClassList.sorcerer.features.spellcasting, true, "Access to Dunamancy Spells", {
	name : "Dunamancy Spells",
	extraname : "Optional Sorcerer 1",
	source : [["W", 186]],
	description : desc([
		"All dunamancy spells are added to the sorcerer spell list, each still pending DM's approval"
	]),
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "sorcerer" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["sapping sting", "gift of alacrity", "magnify gravity", "fortune's favor", "immovable object", "wristpocket", "pulse wave", "gravity sinkhole", "temporal shunt", "gravity fissure", "tether essence", "dark star", "reality break", "ravenous void", "time ravage"]);
			},
			"This optional class feature expands the spell list of the sorcerer class with all dunamancy spells (spell level in brackets): Sapping Sting (cantrip), Gift of Alacrity (1), Magnify Gravity (1), Fortune's Favor (2), Immovable Object (2), Wristpocket (2), Pulse Wave (3), Gravity Sinkhole (4), Temporal Shunt (5), Gravity Fissure (6), Tether Essence (7), Dark Star (8), Reality Break (8),Ravenous Void (9), and Time Ravage (9)."
		]
	}
}, "Optional sorcerer features");
AddFeatureChoice(ClassList.warlock.features["pact magic"], true, "Access to Dunamancy Spells", {
	name : "Dunamancy Spells",
	extraname : "Optional Warlock 1",
	source : [["W", 186]],
	description : desc([
		"All dunamancy spells are added to the warlock spell list, each still pending DM's approval"
	]),
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "warlock" || (spType.indexOf("bonus") !== -1 && (!spList["class"] || spList["class"] !== "warlock"))) return;
				spList.extraspells = spList.extraspells.concat(["sapping sting", "gift of alacrity", "magnify gravity", "fortune's favor", "immovable object", "wristpocket", "pulse wave", "gravity sinkhole", "temporal shunt", "gravity fissure", "tether essence", "dark star", "reality break", "ravenous void", "time ravage"]);
			},
			"This optional class feature expands the spell list of the warlock class with all dunamancy spells (spell level in brackets): Sapping Sting (cantrip), Gift of Alacrity (1), Magnify Gravity (1), Fortune's Favor (2), Immovable Object (2), Wristpocket (2), Pulse Wave (3), Gravity Sinkhole (4), Temporal Shunt (5), Gravity Fissure (6), Tether Essence (7), Dark Star (8), Reality Break (8),Ravenous Void (9), and Time Ravage (9)."
		]
	}
}, "Optional 1st-level warlock features");
AddFeatureChoice(ClassList.wizard.features.spellcasting, true, "Access to Dunamancy Spells", {
	name : "Dunamancy Spells",
	extraname : "Optional Wizard 1",
	source : [["W", 186]],
	description : desc([
		"All dunamancy spells are added to the wizard spell list, each still pending DM's approval"
	]),
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "wizard" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["sapping sting", "gift of alacrity", "magnify gravity", "fortune's favor", "immovable object", "wristpocket", "pulse wave", "gravity sinkhole", "temporal shunt", "gravity fissure", "tether essence", "dark star", "reality break", "ravenous void", "time ravage"]);
			},
			"This optional class feature expands the spell list of the wizard class with all dunamancy spells (spell level in brackets): Sapping Sting (cantrip), Gift of Alacrity (1), Magnify Gravity (1), Fortune's Favor (2), Immovable Object (2), Wristpocket (2), Pulse Wave (3), Gravity Sinkhole (4), Temporal Shunt (5), Gravity Fissure (6), Tether Essence (7), Dark Star (8), Reality Break (8),Ravenous Void (9), and Time Ravage (9)."
		]
	}
}, "Optional 1st-level wizard features");
