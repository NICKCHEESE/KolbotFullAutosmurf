//	/d2bs/kolbot/libs/Builds/Sorceress.ExampleBuild.js

/**
 *
 * Instructions: 	See /d2bs/kolbot/libs/config/Builds/README.txt
 *
 * Skill IDs: 	See /d2bs/kolbot/sdk/skills.txt for a list of skill IDs.
 *
 * Stat IDs:
 *
 * 	Strength=0
 * 	Energy=1
 * 	Dexterity=2
 * 	Vitality=3
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
            Config.TownCheck = false; // Don't go to town for more potions
            Config.StashGold = 10000; // Minimum amount of gold to stash.
            Config.AttackSkill = [0, 0, 0, 0, 0, 0, 0];
            Config.LowManaSkill = [0, 0];
            Config.BeltColumn = ["hp", "hp", "hp", "mp"]; // Keep tons of health potions!
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
            Config.UseMP = 15;
            Config.UseRejuvHP = 35;
			Config.Cubing=false;
            Config.PickRange = 60;
            Config.BossPriority = true;
            
            
        }
    },

    2: {
        SkillPoints: [221], // Might + 1 (level 1)
        StatPoints: [0, 3, 3, 3, 3], // Strength + 1, Vitality + 4 (26) (29)
        Update: function () {
            Config.AttackSkill = [-1, 0, -1, 0, -1, -1, -1]; // Use Might
            Config.LowManaSkill = [0, 0]; // Use Might while hitting stuff.
            Config.SummonRaven = true;
        }
    },

    3: {
        SkillPoints: [-1], // Smite + 1 (level 1)
        StatPoints: [0, 0, 3, 3, 3], // Strength + 2, Vitality + 3 (28) (32)
        Update: function () {}
    },

    4: {
        SkillPoints: [-1], // Prayer + 1 (level 1)
        StatPoints: [0, 0, 0, 3, 3], // Strength + 3, Vitality + 2 (31) (34)
        Update: function () {}
    },

    5: {
        SkillPoints: [-1], // Save Point + 1 (1 saved point remains)
        StatPoints: [0, 0, 0, 0, 3], // Strength + 4, Vitality + 1 (35) (35)
        Update: function () {
            Config.ScanShrines = [15, 13, 12];
            Config.MinColumn = [1, 1, 1, 1];
        }
    },

    6: {
        SkillPoints: [230, 226, 227], // Holy Bolt + 1, Defiance + 1 (level 1) (level 2) (0 saved points remain)
        StatPoints: [0, 0, 3, 3, 3], // Strength + 2, Vitality + 3 (37) (38)
        Update: function () {
            Config.AttackSkill = [-1, 0, -1, 0, -1, -1, -1]; // Holy Bolt and Might for Secondary Skill/Aura.
            Config.SummonAnimal = "Spirit Wolf";
            Config.SummonSpirit = "Oak Sage";
        }
    },

    7: {
        SkillPoints: [-1], // Save Point + 1 (1 saved point remains)
        StatPoints: [0, 0, 3, 3, 3], // Strength + 2, Vitality + 3 (39) (41)
        Update: function () {
            //Config.PickitFiles.splice(Config.PickitFiles.indexOf("belowlevelseven.nip"), 1);	// Will remove index "belowlevel7.nip" from Config.PickitFiles
        }
    },

    8: {
        SkillPoints: [-1], // Save Point + 1 (2 saved points remain)
        StatPoints: [0, 3, 3, 3, 3], // Strength + 1, Vitality + 4 (40) (45)
        Update: function () {}
    },

    9: {
        SkillPoints: [-1], // Save Point + 1 (3 saved points remain)
        StatPoints: [0, 0, 3, 3, 3], // Vitality + 5 (50)
        Update: function () {}
    },

    10: {
        SkillPoints: [-1], // Save Point + 1 (4 saved points remain)
        StatPoints: [0, 0, 3, 3, 3], // Vitality + 5 (55)
        Update: function () {
            Config.StashGold = 1000; // Minimum amount of gold to stash.
            Config.BeltColumn = ["hp", "hp", "hp", "mp"]; // Start keeping rejuvs
            Config.MinColumn = [1, 1, 1, 1];

        }
    },

    11: {
        SkillPoints: [-1], // Save Point + 1 (5 saved points remain)
        StatPoints: [0, 0, 0, 3, 3], // Vitality + 5 (60)
        Update: function () {}
    },

    12: {
        SkillPoints: [235, 226, 226, 226], // Charge + 1, Blessed Aim + 1, Cleansing + 1 (level 1) (level 1) (level 1) (3 saved points remain)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (65)
        Update: function () {
            Config.AttackSkill = [-1, 0, -1, 0, -1, -1, -1]; // Use Blessed Aim
            Config.LowManaSkill = [0, -1]; // Use Blessed Aim while hitting stuff.
        }
    },

    13: {
        SkillPoints: [226], // Blessed Aim + 1 (level 2) Save Point + 1 (4 saved points remain) (Normal Den of Evil Used)
        StatPoints: [0, 0, 0, 3, 3], // Vitality + 5 (70)
        Update: function () {}
    },

    14: {
        SkillPoints: [-1], // Save Point + 1 (5 saved points remain)
        StatPoints: [0, 0, 3, 3, 3], // Vitality + 5 (75)
        Update: function () {}
    },

    15: {
        SkillPoints: [226], // Save Point + 1 (6 saved points remain)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (80)
        Update: function () {
            Config.OpenChests = false; // Eyes on the prize!
            Config.LowGold = 9000;
        }
    },

    16: {
        SkillPoints: [226], // Save Point + 1 (7 saved points remain)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (85)
        Update: function () {}
    },

    17: {
        SkillPoints: [226], // Save Point + 1 (8 saved points remain)
        StatPoints: [0, 0, 3, 3, 3], // Vitality + 5 (90)
        Update: function () {}
    },

    18: {
        SkillPoints: [226, 240, 237], // Blessed Hammer + 1, Concentration + 1, Vigor + 1 (level 1) (level 1) (level 1) (6 saved points remain)
        StatPoints: [0, 0, 3, 3, 3], // Vitality + 5 (95)
        Update: function () {
            Config.AttackSkill = [-1, 0, -1, 0, -1, -1, -1]; // Blessed Hammer and Concentration!
            Config.LowManaSkill = [0, -1]; // Use Concentration while hitting stuff.
            Config.TownCheck = true; // Do go to town for more potions
            Config.MinColumn = [3, 3, 3, 3]; // Should have a decent belt by now
            Config.Charge = false; // Don't waste mana on charging while walking
            Config.Dodge = false; // Move away from monsters that get too close. Don't use with short-ranged attacks like Poison Dagger.
            Config.DodgeRange = 7; // Distance to keep from monsters.
            Config.MPBuffer = 8; // Need lots of mana for Blessed Hammer!
            Config.SummonAnimal = "Dire Wolf";
        }
    },

    19: {
        SkillPoints: [226, 226], // Blessed Hammer + 1, Concentration + 1 (level 2) (level 2) (5 saved points remain)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (100)
        Update: function () {}
    },

    20: {
        SkillPoints: [226, 226], // Blessed Hammer + 1, Concentration + 1 (level 3) (level 3) (4 saved points remain)
        StatPoints: [0, 3, 3, 3, 3], // Vitality + 5 (105)
        Update: function () {}
    },

    21: {
        SkillPoints: [226], // Blessed Hammer + 1, Concentration + 1 (level 4) (level 4) (3 saved points remain)
        StatPoints: [0, 3, 3, 3, 3], // Vitality + 5 (110)
        Update: function () {}
    },

    22: {
        SkillPoints: [226, 226], // Blessed Hammer + 1, Concentration + 1 (level 5) (level 5) (2 saved points remain)
        StatPoints: [0, 0, 3, 3, 3], // Vitality + 5 (115)
        Update: function () {}
    },

    23: {
        SkillPoints: [226], // Blessed Hammer + 1 (level 6) (2 saved points remain)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (120)
        Update: function () {}
    },

    24: {
        SkillPoints: [245], // Blessed Hammer + 1, Holy Shield + 1, Meditation + 1 (level 7) (level 1) (level 1) (0 saved points remain)
        StatPoints: [0, 0, 3, 3, 3], // Vitality + 5 (125)
        Update: function () {
            Config.AttackSkill = [-1, 245, -1, 245, -1, -1, -1]; // Holy Bolt and Meditation for Secondary Skill/Aura.
            Config.LowManaSkill = [0, 120]; // Use Meditation while hitting stuff.
            Config.Cubing = true; // Will have a cube by now.
            Config.Dodge = true; // Move away from monsters that get too close. Don't use with short-ranged attacks like Poison Dagger.
            Config.DodgeRange = 5; // Distance to keep from monsters.
        }
    },

    25: {
        SkillPoints: [245], // Blessed Hammer + 1 (level 8)
        StatPoints: [0, 0, 3, 3, 3], // Vitality + 5 (130)
        Update: function () {}
    },

    26: {
        SkillPoints: [245], // Blessed Hammer + 1 (level 9)
        StatPoints: [0, 0, 3, 3, 3], // Vitality + 5 (135)
        Update: function () {}
    },

    27: {
        SkillPoints: [245], // Blessed Hammer + 1, Blessed Aim + 1 (level 10) (level 3) (Norm Radament)
        StatPoints: [0, 3, 3, 3, 3], // Vitality + 5 (140)
        Update: function () {}
    },

    28: {
        SkillPoints: [245], // Blessed Hammer + 1 (level 11)
        StatPoints: [0, 0, 3, 3, 3], // Vitality + 5 (145)
        Update: function () {}
    },

    29: {
        SkillPoints: [245], // Blessed Hammer + 1 (level 12)
        StatPoints: [0, 3, 3, 3, 3], // Vitality + 5 (150)
        Update: function () {}
    },

    30: {
        SkillPoints: [250], // Blessed Hammer + 1, Blessed Aim + 2 (level 13) (level 5) (Norm Izual)
        StatPoints: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], // Vitality + 10 (160) (Norm Lam Esen's Tome)
        Update: function () {

            Config.SummonAnimal = "Grizzly";
        }
    },

    31: {
        SkillPoints: [247], // Blessed Hammer + 1 (level 14)
        StatPoints: [0, 0, 0, 0, 0], // Vitality + 5 (165)
        Update: function () {}
    },

    32: {
        SkillPoints: [250], // Blessed Hammer + 1 (level 15)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (170)
        Update: function () {
            Config.DodgeRange = 6; // Distance to keep from monsters.
        }
    },

    33: {
        SkillPoints: [250], // Blessed Hammer + 1 (level 16)
        StatPoints: [0, 0, 0, 0, 0], // Vitality + 5 (175)
        Update: function () {}
    },

    34: {
        SkillPoints: [250], // Blessed Hammer + 1 (level 17)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (180)
        Update: function () {}
    },

    35: {
        SkillPoints: [250], // Blessed Hammer + 1 (level 18)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (185)
        Update: function () {
            Config.LowManaSkill = [-1, -1]; // Stop trying to hit stuff.

        }
    },

    36: {
        SkillPoints: [250], // Blessed Hammer + 1 (level 19)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (190)
        Update: function () {}
    },

    37: {
        SkillPoints: [250], // Blessed Hammer + 1 (level 20)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (195)
        Update: function () {}
    },

    38: {
        SkillPoints: [250], // Concentration + 1 (level 6)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (200)
        Update: function () {}
    },

    39: {
        SkillPoints: [250], // Concentration + 1 (level 7)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (205)
        Update: function () {}
    },

    40: {
        SkillPoints: [250], // Concentration + 1 (level 8)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (210)
        Update: function () {}
    },

    41: {
        SkillPoints: [250], // Concentration + 1 (level 9)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (215)
        Update: function () {}
    },

    42: {
        SkillPoints: [250], // Concentration + 1 (level 10)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (220)
        Update: function () {}
    },

    43: {
        SkillPoints: [250], // Concentration + 1, Blessed Aim + 4 (level 11) (level 9) (NM Den of Evil, NM Radament, NM Izual)
        StatPoints: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], // Vitality + 10 (230) (NM Lam Esen's Tome)
        Update: function () {}
    },

    44: {
        SkillPoints: [250], // Concentration + 1 (level 12)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (235)
        Update: function () {}
    },

    45: {
        SkillPoints: [250], // Concentration + 1 (level 13)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (240)
        Update: function () {}
    },

    46: {
        SkillPoints: [250], // Concentration + 1 (level 14)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (245)
        Update: function () {
            Config.HPBuffer = 5;
            Config.MPBuffer = 5;
            Config.RejuvBuffer = 10;
            Config.UseRejuvHP = 55;
            Config.LifeChicken = 45;
            Config.TownHP = 65;
        }
    },

    47: {
        SkillPoints: [250], // Concentration + 1 (level 15)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (250)
        Update: function () {}
    },

    48: {
        SkillPoints: [250], // Concentration + 1 (level 16)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (255)
        Update: function () {}
    },

    49: {
        SkillPoints: [250], // Concentration + 1 (level 17)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (260)
        Update: function () {}
    },

    50: {
        SkillPoints: [250], // Concentration + 1 (level 18)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (265)
        Update: function () {
            Config.StashGold = 100000; // Minimum amount of gold to stash.
            Config.Charge = false; // Should have enough mana to charge while walking now.
            Config.MPBuffer = 4; // Nightmare has stronger potions.
            Config.HPBuffer = 0; // Nightmare has stronger potions.
            Config.BeltColumn = ["hp", "hp", "mp", "mp"]; // Regular potion settings
            Config.MinColumn = [3, 3, 3, 0]; // Regular potion settings

        }
    },

    51: {
        SkillPoints: [226, 226], // Concentration + 1 (level 19)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (270)
        Update: function () {}
    },

    52: {
        SkillPoints: [245], // Concentration + 1 (level 20)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (275)
        Update: function () {}
    },

    53: {
        SkillPoints: [245], // Vigor + 1 (level 2)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (280)
        Update: function () {}
    },

    54: {
        SkillPoints: [245], // Vigor + 1 (level 3)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (285)
        Update: function () {}
    },

    55: {
        SkillPoints: [245], // Vigor + 1 (level 4)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (290)
        Update: function () {}
    },

    56: {
        SkillPoints: [245], // Vigor + 1 (level 5)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (295)
        Update: function () {}
    },

    57: {
        SkillPoints: [245], // Vigor + 1 (level 6)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (300)
        Update: function () {}
    },

    58: {
        SkillPoints: [245], // Vigor + 1 (level 7)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (305)
        Update: function () {}
    },

    59: {
        SkillPoints: [245], // Vigor + 1 (level 8)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (310)
        Update: function () {}
    },

    60: {
        SkillPoints: [245], // Vigor + 1 (level 9)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (315)
        Update: function () {}
    },

    61: {
        SkillPoints: [245], // Vigor + 1 (level 10)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (320)
        Update: function () {}
    },

    62: {
        SkillPoints: [245], // Vigor + 1 (level 11)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (325)
        Update: function () {}
    },

    63: {
        SkillPoints: [245], // Vigor + 1 (level 12)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (330)
        Update: function () {}
    },

    64: {
        SkillPoints: [245], // Vigor + 1 (level 13)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (335)
        Update: function () {}
    },

    65: {
        SkillPoints: [245], // Vigor + 1 (level 14)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (340)
        Update: function () {}
    },

    66: {
        SkillPoints: [235], // Vigor + 1 (level 15)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (345)
        Update: function () {}
    },

    67: {
        SkillPoints: [235], // Vigor + 1 (level 16)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (350)
        Update: function () {}
    },

    68: {
        SkillPoints: [235], // Vigor + 1 (level 17)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (355)
        Update: function () {}
    },

    69: {
        SkillPoints: [235], // Vigor + 1 (level 18)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (360)
        Update: function () {}
    },

    70: {
        SkillPoints: [235], // Vigor + 1, Blessed Aim + 4 (level 19) (level 13) (Hell Den of Evil, Hell Radament, Hell Izual)
        StatPoints: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], // Vitality + 10 (370) (Hell Lam Esen's Tome)
        Update: function () {}
    },

    71: {
        SkillPoints: [235], // Vigor + 1 (level 20)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (375)
        Update: function () {}
    },

    72: {
        SkillPoints: [235], // Blessed Aim + 1 (level 14)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (380)
        Update: function () {}
    },

    73: {
        SkillPoints: [235], // Blessed Aim + 1 (level 15)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (385)
        Update: function () {}
    },

    74: {
        SkillPoints: [235], // Blessed Aim + 1 (level 16)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (390)
        Update: function () {}
    },

    75: {
        SkillPoints: [235], // Blessed Aim + 1 (level 17)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (395)
        Update: function () {}
    },

    76: {
        SkillPoints: [235], // Blessed Aim + 1 (level 18)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (400)
        Update: function () {
            Config.HPBuffer = 0;
            Config.MPBuffer = 0;
            Config.RejuvBuffer = 20;
            Config.UseRejuvHP = 70;
            Config.LifeChicken = 60;
            Config.TownHP = 60;

        }
    },

    77: {
        SkillPoints: [235], // Blessed Aim + 1 (level 19)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (405)
        Update: function () {}
    },

    78: {
        SkillPoints: [235], // Blessed Aim + 1 (level 20)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (410)
        Update: function () {}
    },

    79: {
        SkillPoints: [235], // Holy Shield + 1 (level 2)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (415)
        Update: function () {}
    },

    80: {
        SkillPoints: [235], // Holy Shield + 1 (level 3)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (420)
        Update: function () {
            Config.Gamble = true; // Time to spend dat ca$h!!
            Config.ScanShrines = [];
        }
    },

    81: {
        SkillPoints: [235], // Holy Shield + 1 (level 4)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (425)
        Update: function () {}
    },

    82: {
        SkillPoints: [235], // Holy Shield + 1 (level 5)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (430)
        Update: function () {}
    },

    83: {
        SkillPoints: [235], // Holy Shield + 1 (level 6)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (435)
        Update: function () {}
    },

    84: {
        SkillPoints: [235], // Holy Shield + 1 (level 7)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (440)
        Update: function () {}
    },

    85: {
        SkillPoints: [240], // Holy Shield + 1 (level 8)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (445)
        Update: function () {}
    },

    86: {
        SkillPoints: [240], // Holy Shield + 1 (level 9)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (450)
        Update: function () {}
    },

    87: {
        SkillPoints: [240], // Holy Shield + 1 (level 10)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (455)
        Update: function () {}
    },

    88: {
        SkillPoints: [240], // Holy Shield + 1 (level 11)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (460)
        Update: function () {}
    },

    89: {
        SkillPoints: [240], // Holy Shield + 1 (level 12)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (465)
        Update: function () {}
    },

    90: {
        SkillPoints: [240], // Holy Shield + 1 (level 13)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (470)
        Update: function () {
            Config.MPBuffer = 0; // CS runs, no longer need buffer because of taxi rides!
        }
    },

    91: {
        SkillPoints: [240], // Holy Shield + 1 (level 14)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (475)
        Update: function () {}
    },

    92: {
        SkillPoints: [240], // Holy Shield + 1 (level 15)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (480)
        Update: function () {}
    },

    93: {
        SkillPoints: [240], // Holy Shield + 1 (level 16)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (485)
        Update: function () {}
    },

    94: {
        SkillPoints: [240], // Holy Shield + 1 (level 17)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (490)
        Update: function () {}
    },

    95: {
        SkillPoints: [240], // Holy Shield + 1 (level 18)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (495)
        Update: function () {}
    },

    96: {
        SkillPoints: [240], // Holy Shield + 1 (level 19)
        StatPoints: [3, 3, 3, 3, 3], // Vitality + 5 (500)
        Update: function () {}
    },

    97: {
        SkillPoints: [240], // Holy Shield + 1 (level 20)
        StatPoints: [-1, -1, -1, -1, -1], //
        Update: function () {}
    },

    98: {
        SkillPoints: [240], //
        StatPoints: [-1, -1, -1, -1, -1], //
        Update: function () {}
    },

    99: {
        SkillPoints: [240], //
        StatPoints: [-1, -1, -1, -1, -1], //
        Update: function () {}
    }
};
