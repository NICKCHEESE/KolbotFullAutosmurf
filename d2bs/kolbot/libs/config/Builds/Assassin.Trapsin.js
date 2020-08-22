/** Trap Assassin Build
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
            Config.UseHP = 50;
            Config.UseMP = 15;
            Config.UseRejuvHP = 35;
            Config.Cubing = false;
            Config.PickRange = 60;
            Config.BossPriority = true;
            Config.OpenChests = true; // Might as well open em.
            Config.Cubing = false; // Don't cube yet!
            Config.UseFade = false;
            Config.UseBoS = false;

            // 20 Strength

        }
    },

    2: {
        SkillPoints: [251],
        StatPoints: [2, 2, 2, 2, 2],
        Update: function () {
            Config.AttackSkill = [-1, 251, -1, 251, -1, -1, -1];
        }
    },

    3: {
        SkillPoints: [253],
        StatPoints: [2, 2, 2, 1, 1],
        Update: function () {}
    },

    4: {
        SkillPoints: [252],
        StatPoints: [2, 2, 0, 0, 0],
        Update: function () {}
    },

    5: {
        SkillPoints: [-1],
        StatPoints: [0, 0, 0, 0, 0],
        Update: function () {}
    },

    6: {
        SkillPoints: [256, 258],
        StatPoints: [3, 3, 3, 1, 1],
        Update: function () {
            Config.UseBoS = true;
            Config.AttackSkill = [-1, 256, -1, 256, -1, -1, -1];
        }
    },

    7: {
        SkillPoints: [256],
        StatPoints: [3, 3, 3, 1, 1],
        Update: function () {}
    },

    8: {
        SkillPoints: [256],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    9: {
        SkillPoints: [256],
        StatPoints: [3, 3, 3, 1, 1],
        Update: function () {}
    },

    10: {
        SkillPoints: [256],
        StatPoints: [3, 3, 3, 3, 1],
        Update: function () {}
    },

    11: {
        SkillPoints: [256],
        StatPoints: [3, 3, 3, 3, 1],
        Update: function () {}
    },

    12: {
        SkillPoints: [261, 264],
        StatPoints: [3, 3, 1, 1, 1],
        Update: function () {
            Config.Traps = [261, 261, 261, -1, -1]; // Skill IDs for traps to be cast on all mosters except act bosses.
            Config.BossTraps = [261, 261, 261, 261, 261]; // Skill IDs for traps to be cast on act bosses.
            Config.HPBuffer = 8; // Number of healing potions to keep in inventory.
            Config.BeltColumn = ["hp", "hp", "mp", "mp"]; // Keep tons of health potions!
            Config.UseCloakofShadows = true;
            Config.MinColumn[0] = 1;
            Config.MinColumn[1] = 1;
            Config.MinColumn[2] = 1;
            Config.MinColumn[3] = 1;
        }
    },

    13: {
        SkillPoints: [263],
        StatPoints: [0, 0, 0, 0, 0],
        Update: function () {}
    },

    14: {
        SkillPoints: [261],
        StatPoints: [0, 0, 0, 0, 0],
        Update: function () {}
    },

    15: {
        SkillPoints: [261],
        StatPoints: [3, 3, 1, 1, 0],
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
        SkillPoints: [261],
        StatPoints: [3, 3, 1, 1, 0],
        Update: function () {
            Config.HPBuffer = 2; // Number of healing potions to keep in inventory.
            Config.MPBuffer = 6; // Number of mana potions to keep in inventory.
            Config.TownCheck = true; // Go to town if out of potions
        }
    },

    17: {
        SkillPoints: [261],
        StatPoints: [0, 0, 0, 0, 0],
        Update: function () {}
    },

    18: {
        SkillPoints: [268],
        StatPoints: [3, 3, 3, 3, 1],
        Update: function () {
            Config.SummonShadow = "Warrior";
            Config.Dodge = true;
            Config.DodgeRange = 15;
            Config.Cubing = true;
            Config.MakeRunewords = true;
            Config.Runewords.push([Runeword.Spirit, ("CrystalSword" || "BroadSword")]);
            Config.Recipes.push([Recipe.Rune, "Tal Rune"]);
            Config.Recipes.push([Recipe.Rune, "Ral Rune"]);
            Config.Recipes.push([Recipe.Rune, "Ort Rune"]);
            Config.Recipes.push([Recipe.Rune, "Thul Rune"]);
            Config.Recipes.push([Recipe.Rune, "Amn Rune"]);
        }
    },

    19: {
        SkillPoints: [267],
        StatPoints: [3, 3, 3, 0, 1],
        Update: function () {
            Config.UseBoS = false;
            Config.UseFade = true;
        }
    },

    20: {
        SkillPoints: [261],
        StatPoints: [0, 0, 0, 0, 0],
        Update: function () {}
    },

    21: {
        SkillPoints: [261],
        StatPoints: [0, 0, 0, 0, 0],
        Update: function () {}
    },

    22: {
        SkillPoints: [261],
        StatPoints: [3, 3, 3, 3, 1],
        Update: function () {}
    },

    23: {
        SkillPoints: [-1],
        StatPoints: [3, 3, 3, 3, 1],
        Update: function () {}
    },

    24: {
        SkillPoints: [271, 273],
        StatPoints: [1, 1, 1, 1, 1],
        Update: function () {
            Config.AttackSkill = [-1, 256, -1, 256, 273, -1, -1];
            Config.LowManaSkill = [-1, -1];
            Config.Traps = [271, 271, 271, 271, 271];
            Config.BossTraps = [271, 271, 271, 271, 271];
        }
    },

    25: {
        SkillPoints: [271],
        StatPoints: [3, 3, 3, 3, 1],
        Update: function () {}
    },

    26: {
        SkillPoints: [271],
        StatPoints: [3, 3, 3, 3, 1],
        Update: function () {}
    },

    27: {
        SkillPoints: [271],
        StatPoints: [3, 3, 3, 3, 1],
        Update: function () {}
    },

    28: {
        SkillPoints: [271],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    29: {
        SkillPoints: [271],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    30: {
        SkillPoints: [276, 279, 271],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {
            Config.SummonShadow = "Master";
            Config.Traps = [271, 271, 271, 276, 276];
            Config.BossTraps = [271, 271, 271, 271, 271];
        }
    },

    31: {
        SkillPoints: [271],
        StatPoints: [0, 0, 0, 0, 0],
        Update: function () {}
    },

    32: {
        SkillPoints: [271],
        StatPoints: [3, 3, 3, 0, 0],
        Update: function () {}
    },

    33: {
        SkillPoints: [271],
        StatPoints: [3, 3, 3, 0, 0],
        Update: function () {}
    },

    34: {
        SkillPoints: [271],
        StatPoints: [3, 3, 3, 0, 0],
        Update: function () {}
    },

    35: {
        SkillPoints: [271],
        StatPoints: [3, 3, 3, 0, 0],
        Update: function () {}
    },

    36: {
        SkillPoints: [271],
        StatPoints: [3, 3, 3, 0, 0],
        Update: function () {}
    },

    37: {
        SkillPoints: [271],
        StatPoints: [3, 3, 3, 0, 0],
        Update: function () {}
    },

    38: {
        SkillPoints: [271],
        StatPoints: [3, 3, 3, 0, 0],
        Update: function () {}
    },

    39: {
        SkillPoints: [271],
        StatPoints: [3, 3, 3, 0, 0],
        Update: function () {}
    },

    40: {
        SkillPoints: [271],
        StatPoints: [3, 3, 3, 0, 0],
        Update: function () {}
    },

    41: {
        SkillPoints: [271],
        StatPoints: [3, 3, 3, 0, 0],
        Update: function () {}
    },

    42: {
        SkillPoints: [271],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    43: {
        SkillPoints: [271],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {
            // Lightning Sentry Maxed
        }
    },

    44: {
        SkillPoints: [276],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    45: {
        SkillPoints: [276],
        StatPoints: [0, 0, 0, 0, 0],
        Update: function () {}
    },

    46: {
        SkillPoints: [276],
        StatPoints: [0, 0, 0, 0, 0],
        Update: function () {}
    },

    47: {
        SkillPoints: [276],
        StatPoints: [0, 0, 0, 0, 0],
        Update: function () {}
    },

    48: {
        SkillPoints: [276],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    49: {
        SkillPoints: [276],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    50: {
        SkillPoints: [276],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    51: {
        SkillPoints: [276],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    52: {
        SkillPoints: [276],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    53: {
        SkillPoints: [276],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    54: {
        SkillPoints: [276],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    55: {
        SkillPoints: [276],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    56: {
        SkillPoints: [276],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    57: {
        SkillPoints: [276],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    58: {
        SkillPoints: [276],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    59: {
        SkillPoints: [276],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    60: {
        SkillPoints: [276],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    61: {
        SkillPoints: [276],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    62: {
        SkillPoints: [276],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    63: {
        SkillPoints: [276],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {
            // Death Sentry Maxed
        }
    },

    64: {
        SkillPoints: [251],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    65: {
        SkillPoints: [256],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    66: {
        SkillPoints: [251],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    67: {
        SkillPoints: [256],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    68: {
        SkillPoints: [251],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    69: {
        SkillPoints: [256],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    70: {
        SkillPoints: [251],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    71: {
        SkillPoints: [256],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    72: {
        SkillPoints: [251],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    73: {
        SkillPoints: [256],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    74: {
        SkillPoints: [251],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    75: {
        SkillPoints: [256],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    76: {
        SkillPoints: [-1],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    77: {
        SkillPoints: [-1],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    78: {
        SkillPoints: [-1],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    79: {
        SkillPoints: [-1],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    80: {
        SkillPoints: [-1],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    81: {
        SkillPoints: [-1],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    82: {
        SkillPoints: [-1],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    83: {
        SkillPoints: [-1],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    84: {
        SkillPoints: [-1],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    85: {
        SkillPoints: [-1],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    86: {
        SkillPoints: [-1],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    87: {
        SkillPoints: [-1],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    88: {
        SkillPoints: [-1],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    89: {
        SkillPoints: [-1],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    90: {
        SkillPoints: [-1],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    91: {
        SkillPoints: [-1],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    92: {
        SkillPoints: [-1],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    93: {
        SkillPoints: [-1],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    94: {
        SkillPoints: [-1],
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
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    98: {
        SkillPoints: [-1],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    },

    99: {
        SkillPoints: [-1],
        StatPoints: [3, 3, 3, 3, 3],
        Update: function () {}
    }
};
