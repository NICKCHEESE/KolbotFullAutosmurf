/** Summoner Necromancer Build
 *
 * Instructions:   See /d2bs/kolbot/libs/config/Builds/README.txt
 *
 * Skill IDs:   See /d2bs/kolbot/sdk/skills.txt for a list of skill IDs.
 *
 * Stat IDs:
 *
 * 	Strength	= 0
 * 	Energy		= 1
 * 	Dexterity	= 2
 * 	Vitality	= 3
 *

Finished Char Build:

Stats                                                    Base Stats
------------                                             ----------
Strength (0) :      15 (no points)                       15
Energy   (1) :      20 (no points)                       20
Dexterity(2) :      20 (no points)                       20
Vitality (3) :      200 (175 points used)                25

Skills              Levelreq            SkillID          TotalPoints
------------        --------            -------          -----------
xxx                 1                   xx               1    - Done @ level
xxx                 1                   xx               1    - Done @ level
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
        SkillPoints: [70], //Raise Skeleton
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.Skeletons = "max";
        }
    },

    3: {
        SkillPoints: [66], //Amplify Damage
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.Curse[0] = 66;
            Config.Curse[1] = 66;
        }
    },

    4: {
        SkillPoints: [68], //Bone Armor
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    5: {
        SkillPoints: [69], //Skeletal Mastery
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    6: {
        SkillPoints: [70],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    7: {
        SkillPoints: [75, 69], //Clay Golem
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.Golem = "Clay";
        }
    },

    8: {
        SkillPoints: [70],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    9: {
        SkillPoints: [69],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
			Config.PickitFiles.splice(Config.PickitFiles.indexOf("AutoEquip/Summoner.xpac.nip"),1);
			Config.PickitFiles.push("AutoEquip/Summoner2.xpac.nip");
        }
    },

    10: {
        SkillPoints: [69],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    11: {
        SkillPoints: [69],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.MinColumn = [3, 3, 3, 3];
        }
    },

    12: {
        SkillPoints: [80], //Raise Skeletal Mage
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.SkeletonMages = "max";
        }
    },

    13: {
        SkillPoints: [80],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    14: {
        SkillPoints: [80],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    15: {
        SkillPoints: [69],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.MakeRunewords = true;
            Config.UseMerc = true;
            //Armor
            Config.Runewords.push([Runeword.Bone, "Mage Plate"]);
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
            Config.Runewords.push([Runeword.Splendor, "Preserved Head"]);
            Config.Runewords.push([Runeword.Splendor, "Zombie Head"]);
            Config.Runewords.push([Runeword.Splendor, "Unraveller Head"]);
            Config.Runewords.push([Runeword.Splendor, "Gargoyle Head"]);
            Config.Runewords.push([Runeword.Splendor, "Demon Head"]);
            Config.Runewords.push([Runeword.Splendor, "Mummified Trophy"]);
            Config.Runewords.push([Runeword.Splendor, "Fetish Trophy"]);
            Config.Runewords.push([Runeword.Splendor, "Sexton Trophy"]);
            Config.Runewords.push([Runeword.Splendor, "Cantor Trophy"]);
            Config.Runewords.push([Runeword.Splendor, "Hierophant Trophy"]);
            Config.Runewords.push([Runeword.Splendor, "Minion Skull"]);
            Config.Runewords.push([Runeword.Splendor, "Hellspawn Skull"]);
            Config.Runewords.push([Runeword.Splendor, "Overseer Skull"]);
            Config.Runewords.push([Runeword.Splendor, "Succubus Skull"]);
            Config.Runewords.push([Runeword.Splendor, "Bloodlord Skull"]);
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
        SkillPoints: [69],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    17: {
        SkillPoints: [69],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    18: {
        SkillPoints: [69],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    19: {
        SkillPoints: [69],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    20: {
        SkillPoints: [69],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    21: {
        SkillPoints: [85], //Blood Golem
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.BeltColumn = ["hp", "hp", "mp", "mp"];
        }
    },

    22: {
        SkillPoints: [79], //Golem Mastery
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    23: {
        SkillPoints: [72], //Weaken
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    24: {
        SkillPoints: [89], //Summon Resist
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.Dodge = true;
            Config.DodgeRange = 15;
            Config.DodgeHP = 100;
        }
    },

    25: {
        SkillPoints: [90], //Iron Golem
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {}
    },

    26: {
        SkillPoints: [76], //Iron Maiden
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    27: {
        SkillPoints: [77], //Terror
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    28: {
        SkillPoints: [82], //Life Tap
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.MinColumn = [4, 4, 4, 4];
        }
    },

    29: {
        SkillPoints: [87], //Decrepify
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.Curse[0] = 87;
            Config.Curse[1] = 66;
        }
    },

    30: {
        SkillPoints: [95, 91], //Revive,Lower Resist
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.Revives = "max";
            Config.ReviveUnstackable = true;
            Config.Curse[0] = 87;
            Config.Curse[1] = 91;
        }
    },

    31: {
        SkillPoints: [69],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    32: {
        SkillPoints: [69],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    33: {
        SkillPoints: [69],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    34: {
        SkillPoints: [69],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    35: {
        SkillPoints: [69],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    36: {
        SkillPoints: [69],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    37: {
        SkillPoints: [69],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    38: {
        SkillPoints: [69],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    39: {
        SkillPoints: [70],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    40: {
        SkillPoints: [70],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {}
    },

    41: {
        SkillPoints: [70],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    42: {
        SkillPoints: [70],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    43: {
        SkillPoints: [70],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    44: {
        SkillPoints: [70],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    45: {
        SkillPoints: [70],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    46: {
        SkillPoints: [70],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    47: {
        SkillPoints: [70],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    48: {
        SkillPoints: [70],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    49: {
        SkillPoints: [70],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    50: {
        SkillPoints: [70],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.UseHP = 80;
            Config.UseMP = 50;
        }
    },

    51: {
        SkillPoints: [70],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    52: {
        SkillPoints: [70],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    53: {
        SkillPoints: [70],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    54: {
        SkillPoints: [70],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    55: {
        SkillPoints: [70],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    56: {
        SkillPoints: [80],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    57: {
        SkillPoints: [80],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    58: {
        SkillPoints: [80],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    59: {
        SkillPoints: [80],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    60: {
        SkillPoints: [80],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    61: {
        SkillPoints: [80],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    62: {
        SkillPoints: [80],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    63: {
        SkillPoints: [80],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    64: {
        SkillPoints: [80],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    65: {
        SkillPoints: [80],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    66: {
        SkillPoints: [80],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    67: {
        SkillPoints: [80],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    68: {
        SkillPoints: [80],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    69: {
        SkillPoints: [80],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.UseRejuvHP = 40;
            Config.LifeChicken = 35;
        }
    },

    70: {
        SkillPoints: [80],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.Recipes.push([Recipe.Caster.Amulet]);
            Config.Recipes.push([Recipe.Caster.Ring]);
        }
    },

    71: {
        SkillPoints: [80],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    72: {
        SkillPoints: [80],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    73: {
        SkillPoints: [80],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    74: {
        SkillPoints: [95],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    75: {
        SkillPoints: [95],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
			Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
			Config.BeltColumn = ["hp", "hp", "mp", "rv"];
            Config.HPBuffer = 0;
            Config.MPBuffer = 0;
            Config.RejuvBuffer = 4;
		}
    },

    76: {
        SkillPoints: [95],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    77: {
        SkillPoints: [95],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    78: {
        SkillPoints: [95],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    79: {
        SkillPoints: [95],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    80: {
        SkillPoints: [95],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    81: {
        SkillPoints: [95],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    82: {
        SkillPoints: [95],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    83: {
        SkillPoints: [95],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    84: {
        SkillPoints: [95],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    85: {
        SkillPoints: [95],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    86: {
        SkillPoints: [95],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    87: {
        SkillPoints: [95],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    88: {
        SkillPoints: [95],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    89: {
        SkillPoints: [95],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    90: {
        SkillPoints: [95],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    91: {
        SkillPoints: [95],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    92: {
        SkillPoints: [95],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    93: {
        SkillPoints: [75],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    94: {
        SkillPoints: [75],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    95: {
        SkillPoints: [75],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    96: {
        SkillPoints: [75],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    97: {
        SkillPoints: [75],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    98: {
        SkillPoints: [75],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    },

    99: {
        SkillPoints: [75],
        StatPoints: [0, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [70, 70, 70, 70, 70, 70, 70];
        }
    }
};
