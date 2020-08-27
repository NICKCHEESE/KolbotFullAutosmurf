/** Hammerdin Paladin Build
 *
 * Instructions:	See /d2bs/kolbot/libs/config/Builds/README.txt
 *
 * Skill IDs:	See /d2bs/kolbot/sdk/skills.txt for a list of skill IDs.
 *
 * Stat IDs:
 *
 * 	Strength	= 0
 * 	Energy		= 1
 * 	Dexterity	= 2
 * 	Vitality	= 3
 *

Finished Char Build:

Stats													Base Stats
------------											----------
Strength: 40 (15 points used)								25
Energy: 15 (no points)										15
Dexterity: 20 (no points)									20
Vitality: 500 (15 points remain from level 97, 98, and 99)	25

Skills				Levelreq			SkillID			TotalPoints
------------		--------			-------			-----------
Might 				    1				   98				 1	- Done @ level 2
Smite 				    1				   97				 1	- Done @ level 3
Prayer 				    1				   99				 1	- Done @ level 4
Holy Bolt 			    6				  101				 1	- Done @ level 6
Defiance 			    6				  104				 1	- Done @ level 6
Charge 				   12				  107				 1	- Done @ level 12
Blessed Aim 		   12				  108				20	- Done @ level 78 *****PUMP SKILL QUEST POINTS HERE***** (12 + 1 = 13)
Cleansing 			   12				  109				 1	- Done @ level 12
Concentration 		   18				  113				20	- Done @ level 52
Blessed Hammer 		   18				  112				20	- Done @ level 37
Vigor 				   18				  115				20	- Done @ level 71
Holy Shield 		   24				  117				20	- Done @ level 98
Meditation 			   24				  120				 1	- Done @ level 24

TOTAL Points Spent --------------------------------------> 108

 **********REMAINING SKILL POINTS =   2  ******** (110 - 108 = 2)

Quest Skill Point   Level Used			SkillID			TotalPoints
-----------------	----------			-------			-----------
Norm Den of Evil        13                108                 1
Norm Radament           27                108                 1
Norm Izual              30                108                 2
NM Den of Evil          43                108                 1
NM Radament             43                108                 1
NM Izual                43                108                 2
Hell Den of Evil        70                108                 1
Hell Radament           70                108                 1
Hell Izual              70                108                 2

TOTAL Quest Points Spent ----------------------------------> 12

 **********REMAINING QUEST SKILL POINTS =   0  ******** (12 - 12 = 0)

Attack Config Variables For Paladin
---------------------------------------------------------------------------------------------------------------------
Config.AttackSkill[0] = -1; // Preattack skill.
Config.AttackSkill[1] = 112; // Primary skill to bosses.
Config.AttackSkill[2] = 113; // Primary aura to bosses
Config.AttackSkill[3] = 112; // Primary skill to others.
Config.AttackSkill[4] = 113; // Primary aura to others.
Config.AttackSkill[5] = 101; // Secondary skill if monster is immune to primary.
Config.AttackSkill[6] = 120; // Secondary aura.
 */
js_strict(true);

if (!isIncluded("common/Cubing.js")) {
    include("common/Cubing.js");
};
if (!isIncluded("common/Prototypes.js")) {
    include("common/Prototypes.js");
};
if (!isIncluded("common/Runewords.js")) {
    include("common/Runewords.js");
};

var AutoBuildTemplate = {

    1: {
        //SkillPoints: [-1],										// This doesn't matter. We don't have skill points to spend at lvl 1]
        //StatPoints: [-1,-1,-1,-1,-1],								// This doesn't matter. We don't have stat points to spend at lvl 1
        Update: function () {
            Config.AutoEquip = true;
            Config.TownCheck = false; // Don't go to town for more potions
            Config.StashGold = 10000; // Minimum amount of gold to stash.
            Config.AttackSkill = [0, 0, 0, 0, 0, 0, 0];
            Config.LowManaSkill = [0, 0];
            Config.BeltColumn = ["hp", "hp", "mp", "mp"]; // Keep tons of health potions!
            Config.MinColumn = [3, 3, 3, 3];
            Config.OpenChests = true; // Might as well open em.
            Config.Cubing = false; // Don't cube yet!
            Config.Inventory[0] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            Config.Inventory[1] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            Config.Inventory[2] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            Config.Inventory[3] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            Config.OpenChests = true;
            Config.ClearType = 0; //Monster spectype to kill in level clear scripts(0=all)
            Config.LogExperience = true; //Print experience statistics in the manager.
            Config.StashGold = 200; //Minimum amount of gold to stash.
			Config.ScanShrines = [17, 1, 2, 3, 15, 13, 12, 8, 9, 10, 11];
            Config.UseHP = 75;
            Config.UseMP = 30;
            Config.UseRejuvHP = 35;
            Config.Cubing = false;
            Config.PickRange = 60;
            Config.BossPriority = true;
        }
    },

    2: {
        SkillPoints: [98], //Might
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [0, 0, 98, 0, 98, 0, 0];
        }
    },

    3: {
        SkillPoints: [97], //Smite
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [0, 97, 98, 97, 98, 0, 98];
        }
    },

    4: {
        SkillPoints: [99], //Prayer
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [0, 97, 98, 97, 98, 0, 98];
        }
    },

    5: {
        SkillPoints: [-1],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [0, 97, 98, 97, 98, 0, 98];
        }
    },

    6: {
        SkillPoints: [104], //Defiance
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [0, 97, 98, 97, 98, 0, 98];
        }
    },

    7: {
        SkillPoints: [101], //Holy Bolt
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [0, 97, 98, 97, 98, 0, 98];
        }
    },

    8: {
        SkillPoints: [-1],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [0, 97, 98, 97, 98, 0, 98];
        }
    },

    9: {
        SkillPoints: [-1],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [0, 97, 98, 97, 98, 0, 98];
        }
    },

    10: {
        SkillPoints: [-1],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [0, 97, 98, 97, 98, 0, 98];
			Config.PickitFiles.splice(Config.PickitFiles.indexOf("AutoEquip/Hammerdin.xpac.nip"),1);
			Config.PickitFiles.push("AutoEquip/Hammerdin2.xpac.nip");
        }
    },

    11: {
        SkillPoints: [-1],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.MinColumn = [3, 3, 3, 3];
        }
    },

    12: {
        SkillPoints: [108], //Blessed Aim
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [0, 97, 98, 97, 98, 0, 98];
        }
    },

    13: {
        SkillPoints: [107], //Charge
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [0, 97, 98, 97, 98, 0, 98];
        }
    },

    14: {
        SkillPoints: [109], //Cleansing
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [0, 97, 98, 97, 98, 0, 98];
        }
    },

    15: {
        SkillPoints: [-1],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.MakeRunewords = true;
            Config.UseMerc = true;
            //Weapon
            Config.Runewords.push([Runeword.Spirit, "Crystal Sword"]);
            Config.Runewords.push([Runeword.Spirit, "Broad Sword"]);
            Config.Runewords.push([Runeword.Spirit, "Long Sword"]);
            Config.Runewords.push([Runeword.HeartoftheOak, "Flail"]);
            //Armor
            Config.Runewords.push([Runeword.Stealth, "Quilted Armor"]);
            Config.Runewords.push([Runeword.Stealth, "Leather Armor"]);
            Config.Runewords.push([Runeword.Stealth, "Hard Leather Armor"]);
            Config.Runewords.push([Runeword.Stealth, "Studded Leather"]);
            Config.Runewords.push([Runeword.Stealth, "Ring Mail"]);
            Config.Runewords.push([Runeword.Stealth, "Breast Plate"]);
            Config.Runewords.push([Runeword.Stealth, "Light Plate"]);
            Config.Runewords.push([Runeword.Enigma, "Mage Plate"]);
            Config.Runewords.push([Runeword.Enigma, "Archon Plate"]);
            //Helm
            Config.Runewords.push([Runeword.Lore, "Cap"]);
            Config.Runewords.push([Runeword.Lore, "Skull Cap"]);
            Config.Runewords.push([Runeword.Lore, "Helm"]);
            Config.Runewords.push([Runeword.Lore, "Mask"]);
            Config.Runewords.push([Runeword.Lore, "Bone Helm"]);
            Config.Runewords.push([Runeword.Lore, "War Hat"]);
            Config.Runewords.push([Runeword.Lore, "Sallet"]);
            Config.Runewords.push([Runeword.Lore, "Casque"]);
            Config.Runewords.push([Runeword.Lore, "Death Mask"]);
            Config.Runewords.push([Runeword.Lore, "Grim Helm"]);
            //Shield
            Config.Runewords.push([Runeword.Spirit, "Targe"]);
            Config.Runewords.push([Runeword.Spirit, "Rondache"]);
            Config.Runewords.push([Runeword.Spirit, "Heraldic Shield"]);
            Config.Runewords.push([Runeword.Spirit, "Aerin Shield"]);
            Config.Runewords.push([Runeword.Spirit, "Crown Shield"]);
            Config.Runewords.push([Runeword.Spirit, "Akaran Targe"]);
            Config.Runewords.push([Runeword.Spirit, "Akaran Rondache"]);
            Config.Runewords.push([Runeword.Spirit, "Protector Shield"]);
            Config.Runewords.push([Runeword.Spirit, "Gilded Shield"]);
            Config.Runewords.push([Runeword.Spirit, "Royal Shield"]);
            Config.Runewords.push([Runeword.Spirit, "Sacred Targe"]);
            Config.Runewords.push([Runeword.Spirit, "Sacred Rondache"]);
            Config.Runewords.push([Runeword.Spirit, "Kurast Shield"]);
            Config.Runewords.push([Runeword.Spirit, "Zakarum Shield"]);
            Config.Runewords.push([Runeword.Spirit, "Vortex Shield"]);
            //Merc Gear
            Config.Runewords.push([Runeword.Insight, "Voulge"]);
            Config.Runewords.push([Runeword.Insight, "Poleaxe"]);
            Config.Runewords.push([Runeword.Insight, "Scythe"]);
            Config.Runewords.push([Runeword.Insight, "Halberd"]);
            Config.Runewords.push([Runeword.Insight, "War Scythe"]);
            Config.Runewords.push([Runeword.Insight, "Bill"]);
            Config.Runewords.push([Runeword.Insight, "Battle Scythe"]);
            Config.Runewords.push([Runeword.Insight, "Partizan"]);
            Config.Runewords.push([Runeword.Insight, "Bec De Corbin"]);
            Config.Runewords.push([Runeword.Insight, "Grim Scythe"]);
            Config.Runewords.push([Runeword.Insight, "Colossus Voulge"]);
            Config.Runewords.push([Runeword.Insight, "Thresher"]);
            Config.Runewords.push([Runeword.Insight, "Cryptic Axe"]);
            Config.Runewords.push([Runeword.Insight, "Great Poleaxe"]);
            Config.Runewords.push([Runeword.Insight, "Giant Thresher"]);
        }
    },

    16: {
        SkillPoints: [-1],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [0, 97, 98, 97, 98, 0, 98];
        }
    },

    17: {
        SkillPoints: [-1],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [0, 97, 98, 97, 98, 0, 98];
        }
    },

    18: {
        SkillPoints: [115, 112, 113], //Vigor,Blessed Hammer,Concentration
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    19: {
        SkillPoints: [112, 113],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.LowManaSkill = [0, 113];
        }
    },

    20: {
        SkillPoints: [112, 113],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    21: {
        SkillPoints: [112, 113],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.BeltColumn = ["hp", "hp", "mp", "mp"];
        }
    },

    22: {
        SkillPoints: [112, 113],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    23: {
        SkillPoints: [112, 113],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    24: {
        SkillPoints: [117, 112, 113], //Holy Shield
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    25: {
        SkillPoints: [112],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {}
    },

    26: {
        SkillPoints: [112],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    27: {
        SkillPoints: [112],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    28: {
        SkillPoints: [112],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    29: {
        SkillPoints: [112],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.MinColumn = [4, 4, 4, 4];
        }
    },

    30: {
        SkillPoints: [112],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.Redemption = [50, 0];
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    31: {
        SkillPoints: [112],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    32: {
        SkillPoints: [112],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    33: {
        SkillPoints: [112],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    34: {
        SkillPoints: [112],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    35: {
        SkillPoints: [112],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    36: {
        SkillPoints: [112],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    37: {
        SkillPoints: [112],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    38: {
        SkillPoints: [112],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    39: {
        SkillPoints: [113],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    40: {
        SkillPoints: [113],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {}
    },

    41: {
        SkillPoints: [113],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    42: {
        SkillPoints: [113],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    43: {
        SkillPoints: [113],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    44: {
        SkillPoints: [113],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    45: {
        SkillPoints: [113],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    46: {
        SkillPoints: [113],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    47: {
        SkillPoints: [113],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    48: {
        SkillPoints: [113],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    49: {
        SkillPoints: [113],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    50: {
        SkillPoints: [113],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.UseHP = 80;
            Config.UseMP = 50;
        }
    },

    51: {
        SkillPoints: [113],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    52: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    53: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    54: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    55: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    56: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    57: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    58: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    59: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    60: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    61: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    62: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    63: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    64: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    65: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    66: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    67: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    68: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    69: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.UseRejuvHP = 40;
            Config.LifeChicken = 35;
        }
    },

    70: {
        SkillPoints: [115],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            //Eth Merc Weapon
            Config.Recipes.push([Recipe.Socket.Weapon, "Bill", Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Weapon, "Partizan", Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Weapon, "Battle Scythe", Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Weapon, "Bec De Corbin", Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Weapon, "Grim Scythe", Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Weapon, "Colossus Voulge", Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Weapon, "Thresher", Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Weapon, "Cryptic Axe", Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Weapon, "Great Poleaxe", Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Weapon, "Giant Thresher", Roll.Eth]);
            //Enlightenment or Chains of Honor
            Config.Recipes.push([Recipe.Socket.Armor, "Mage Plate", Roll.NonEth]);
            Config.Recipes.push([Recipe.Socket.Armor, "Archon Plate", Roll.NonEth]);
            //Misc
            Config.Recipes.push([Recipe.Reroll.Magic, "Grand Charm"]);
            Config.Recipes.push([Recipe.Caster.Amulet]);
            Config.Recipes.push([Recipe.Caster.Ring]);
        }
    },

    71: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    72: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    73: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    74: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    75: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
			Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
			Config.BeltColumn = ["hp", "hp", "mp", "rv"];
            Config.HPBuffer = 5;
            Config.MPBuffer = 5;
            Config.RejuvBuffer = 10;
		}
    },

    76: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    77: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    78: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    79: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    80: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    81: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    82: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    83: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    84: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    85: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    86: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    87: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    88: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    89: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    90: {
        SkillPoints: [108],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    91: {
        SkillPoints: [117],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    92: {
        SkillPoints: [117],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    93: {
        SkillPoints: [117],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    94: {
        SkillPoints: [117],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    95: {
        SkillPoints: [117],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    96: {
        SkillPoints: [117],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    97: {
        SkillPoints: [117],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    98: {
        SkillPoints: [117],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    },

    99: {
        SkillPoints: [117],
        StatPoints: [0, 2, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [112, 112, 113, 112, 113, 97, 113];
        }
    }
};
