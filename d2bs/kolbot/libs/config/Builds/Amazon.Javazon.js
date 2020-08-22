
/* Amazon.Build.js -- [Amazon Automatic Addition Points Template]

Finished Char Build:
Stats                                                    Base Stats
------------                                             ----------
Strength (0) :      20 (no points)                       20
Energy   (1) :      15 (no points)                       15
Dexterity(2) :      25 (no points)                       25
Vitality (3) :      200 (180 points used)                20

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
            Config.BeltColumn = ["hp", "hp", "hp", "mp"]; // Keep tons of health potions!
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
            Config.MinColumn = [2, 2, 2, 2];
            Config.UseHP = 50;
            Config.UseMP = 15;
            Config.UseRejuvHP = 35;
            Config.Cubing = false;
            Config.PickRange = 60;
            Config.BossPriority = true;
        }
    },

    2: {
        SkillPoints: [9], 
        StatPoints: [0, 0, 0, 3, 3], 
        Update: function () {
            Config.AttackSkill = [-1, 0, -1, 0, -1, -1, -1]; 
            Config.LowManaSkill = [0, -1]; 
        }
    },

    3: {
        SkillPoints: [10], 
        StatPoints: [0, 0, 0, 3, 3], 
        Update: function () {}
    },

    4: {
        SkillPoints: [-1], 
        StatPoints: [0, 0, 0, 3, 3], 
        Update: function () {}
    },

    5: {
        SkillPoints: [-1], 
        StatPoints: [0, 0, 0, 3, 3],
        Update: function () {
            Config.ScanShrines = [15, 13, 12];
            Config.MinColumn = [1, 1, 1, 1];
        }
    },

    6: {
        SkillPoints: [13, 14, 15],
        StatPoints: [0, 0, 0, 3, 3], 
        Update: function () {
            Config.AttackSkill = [-1, 14, -1, 14, -1, -1, -1]; 
        }
    },

    7: {
        SkillPoints: [-1],
        StatPoints: [0, 0, 0, 3, 3],
        Update: function () {
           
        }
    },

    8: {
        SkillPoints: [-1], 
        StatPoints: [0, 0, 0, 3, 3], 
        Update: function () {}
    },

    9: {
        SkillPoints: [-1], 
        StatPoints: [0, 0, 0, 3, 3],
        Update: function () {}
    },

    10: {
        SkillPoints: [-1], 
        StatPoints: [0, 0, 0, 3, 3],
        Update: function () {
            Config.StashGold = 1000;
            Config.BeltColumn = ["hp", "hp", "mp", "mp"];
            Config.MinColumn = [1, 1, 1, 1];

        }
    },

    11: {
        SkillPoints: [-1],
        StatPoints: [0, 0, 0, 3, 3],
        Update: function () {}
    },

    12: {
        SkillPoints: [20, 18, 8, 17], 
        StatPoints: [0, 0, 0, 3, 3], 
        Update: function () {
            Config.AttackSkill = [-1, 14, -1, 14, -1, -1, 1]; 
            Config.LowManaSkill = [-1, -1]; 
        }
    },

    13: {
        SkillPoints: [14], 
        StatPoints: [0, 0, 0, 3, 3], 
        Update: function () {}
    },

    14: {
        SkillPoints: [-1], 
        StatPoints: [0, 0, 0, 3, 3],
        Update: function () {}
    },

    15: {
        SkillPoints: [-1], 
        StatPoints: [0, 3, 3, 3, 3], 
        Update: function () {
            Config.MakeRunewords = true;
            Config.UseMerc = true;
            //Weapon
            Config.Runewords.push([Runeword.Spirit, "Crystal Sword"]);
            Config.Runewords.push([Runeword.Spirit, "Broad Sword"]);
            //Armor
            Config.Runewords.push([Runeword.Stealth, "Quilted Armor"]);
            Config.Runewords.push([Runeword.Stealth, "Leather Armor"]);
            Config.Runewords.push([Runeword.Stealth, "Hard Leather Armor"]);
            Config.Runewords.push([Runeword.Stealth, "Studded Leather"]);
            Config.Runewords.push([Runeword.Stealth, "Ring Mail"]);
            Config.Runewords.push([Runeword.Stealth, "Breast Plate"]);
            Config.Runewords.push([Runeword.Stealth, "Light Plate"]);
            Config.Runewords.push([Runeword.Enlightenment, "Light Plate"]);
            Config.Runewords.push([Runeword.Enlightenment, "Mage Plate"]);
            Config.Runewords.push([Runeword.ChainsofHonor, "Archon Plate"]);
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
            Config.Runewords.push([Runeword.Splendor, "Round Shield"]);
            Config.Runewords.push([Runeword.Splendor, "Grim Shield"]);
            Config.Runewords.push([Runeword.Spirit, "Monarch"]);
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
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    17: {
        SkillPoints: [-1], 
        StatPoints: [0, 0, 0, 3, 3], 
        Update: function () {}
    },

    18: {
        SkillPoints: [24, 25, 23], 
        StatPoints: [0, 0, 0, 3, 3], 
        Update: function () {
            Config.AttackSkill = [-1, 24, -1, 24, -1, -1, -1]; 
            Config.LowManaSkill = [-1, -1]; 
            Config.TownCheck = true; 
            Config.MinColumn = [3, 3, 3, 3]; 
            Config.Charge = false; 
            Config.HPBuffer = 5;
            Config.MPBuffer = 5;
            Config.RejuvBuffer = 10;
        }
    },

    19: {
        SkillPoints: [24, 14], 
        StatPoints: [0, 0, 0, 3, 3], 
        Update: function () {}
    },

    20: {
        SkillPoints: [24, 14], 
        StatPoints: [0, 0, 0, 3, 3], 
        Update: function () {}
    },

    21: {
        SkillPoints: [24, 14],
        StatPoints: [0, 0, 0, 3, 3], 
        Update: function () {}
    },

    22: {
        SkillPoints: [24, 14],
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    23: {
        SkillPoints: [24],
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    24: {
        SkillPoints: [28, 29, 24], 
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {
            Config.AttackSkill = [-1, 24, -1, 24, -1, -1, -1]; 
            Config.LowManaSkill = [-1, -1];
            Config.Cubing = true;
        }
    },

    25: {
        SkillPoints: [24], 
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    26: {
        SkillPoints: [24], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    27: {
        SkillPoints: [24, 14], 
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    28: {
        SkillPoints: [24],
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    29: {
        SkillPoints: [24], 
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    30: {
        SkillPoints: [24, 34, 35],
        StatPoints: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
        Update: function () {
            Config.AttackSkill = [-1, 24, -1, 24, -1, -1, -1];
            Config.LightningFuryDelay = 0.3;
        }
    },

    31: {
        SkillPoints: [32],
        StatPoints: [0, 0, 0, 0, 0],
        Update: function () {
            Config.SummonValkyrie = true;
        }
    },

    32: {
        SkillPoints: [33], 
        StatPoints: [0, 0, 0, 0, 0], 
        Update: function () {}
    },

    33: {
        SkillPoints: [24], 
        StatPoints: [0, 0, 0, 0, 0], 
        Update: function () {}
    },

    34: {
        SkillPoints: [24], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    35: {
        SkillPoints: [24], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {
            Config.LowManaSkill = [-1, -1];

        }
    },

    36: {
        SkillPoints: [24], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {
            Scripts.AutoBaal = false;
            Config.AutoBaal.FindShrine = false; 
            Config.AutoBaal.LeechSpot = [15115, 5050]; 
            Config.AutoBaal.LongRangeSupport = true;
        }
    },

    37: {
        SkillPoints: [24], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    38: {
        SkillPoints: [24], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    39: {
        SkillPoints: [24], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    40: {
        SkillPoints: [35],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    41: {
        SkillPoints: [35], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    42: {
        SkillPoints: [35], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    43: {
        SkillPoints: [35, 35, 35, 35, 35], 
        StatPoints: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
        Update: function () {}
    },

    44: {
        SkillPoints: [35], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    45: {
        SkillPoints: [35], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    46: {
        SkillPoints: [35], 
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    47: {
        SkillPoints: [35], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    48: {
        SkillPoints: [35],
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    49: {
        SkillPoints: [35], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    50: {
        SkillPoints: [35], 
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {
            Config.StashGold = 100000; 
            Config.MPBuffer = 4; 
            Config.HPBuffer = 0; 
            Config.BeltColumn = ["hp", "hp", "mp", "mp"];
            Config.MinColumn = [3, 3, 3, 0];

        }
    },

    51: {
        SkillPoints: [35],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    52: {
        SkillPoints: [35],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    53: {
        SkillPoints: [35], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    54: {
        SkillPoints: [35], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    55: {
        SkillPoints: [14], 
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {
            Config.UseRejuvHP = 60;
            Config.LifeChicken = 45;
            Config.TownHP = 60;
        }
    },

    56: {
        SkillPoints: [14], 
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    57: {
        SkillPoints: [14], 
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    58: {
        SkillPoints: [14], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    59: {
        SkillPoints: [14], 
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    60: {
        SkillPoints: [14],
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    61: {
        SkillPoints: [14], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    62: {
        SkillPoints: [14], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    63: {
        SkillPoints: [14], 
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    64: {
        SkillPoints: [14], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    65: {
        SkillPoints: [14], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    66: {
        SkillPoints: [14], 
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    67: {
        SkillPoints: [14], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    68: {
        SkillPoints: [14], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    69: {
        SkillPoints: [34], 
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    70: {
        SkillPoints: [34, 34, 34, 34, 34],
        StatPoints: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
        Update: function () {}
    },

    71: {
        SkillPoints: [34], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    72: {
        SkillPoints: [34],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    73: {
        SkillPoints: [34],
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    74: {
        SkillPoints: [34], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    75: {
        SkillPoints: [34], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {
            Config.HPBuffer = 5;
            Config.MPBuffer = 5;
            Config.RejuvBuffer = 15;
        }
    },

    76: {
        SkillPoints: [34], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    77: {
        SkillPoints: [34], 
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    78: {
        SkillPoints: [34], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    79: {
        SkillPoints: [34],
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    80: {
        SkillPoints: [34],
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {
            Config.Gamble = true; 
        }
    },

    81: {
        SkillPoints: [34], 
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {
            Config.UseRejuvHP = 75;
            Config.LifeChicken = 65;
        }
    },

    82: {
        SkillPoints: [34],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    83: {
        SkillPoints: [34], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    84: {
        SkillPoints: [20], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    85: {
        SkillPoints: [20], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    86: {
        SkillPoints: [20], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    87: {
        SkillPoints: [20], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    88: {
        SkillPoints: [],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    89: {
        SkillPoints: [20], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    90: {
        SkillPoints: [20], 
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {
        }
    },

    91: {
        SkillPoints: [20], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    92: {
        SkillPoints: [20], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    93: {
        SkillPoints: [20], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    94: {
        SkillPoints: [20], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    95: {
        SkillPoints: [-1], 
        StatPoints: [3, 3, 3, 3, 3], 
        Update: function () {}
    },

    96: {
        SkillPoints: [-1], 
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    97: {
        SkillPoints: [-1], 
        StatPoints: [-1, -1, -1, -1, -1], 
        Update: function () {}
    },

    98: {
        SkillPoints: [-1], 
        StatPoints: [-1, -1, -1, -1, -1], 
        Update: function () {}
    },

    99: {
        SkillPoints: [-1], 
        StatPoints: [-1, -1, -1, -1, -1], 
        Update: function () {}
    }
};
