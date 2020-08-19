/** Blizzard Sorceress Build
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
	----------												----------
 	Strength: 45 (35 points used)								10
 	Energy: 35 (no points)										35
 	Dexterity: 25 (no points) (+35 from gear)					25
 	Vitality: 460 (includes points from quests)					10

	Skills				Levelreq			SkillID			TotalPoints
	------------		--------			-------			-----------
	Ice Bolt			    1				  39				20 	- Done @ level 79
	Frozen Armor		    1				  40				 1 	- Done @ level 3
	Warmth 				    1				  37				 1 	- Done @ level 4
	Frost Nova			    6				  44				 1 	- Done @ level 7
	Ice Blast			    6				  45				20 	- Done @ level 8
	Static Field		    6				  42				 ? 	- Done @ level 6 *****PUMP SKILL QUEST POINTS HERE***** (12 + 4 = 16)
	Telekinesis			    6				  43				 1 	- Done @ level 6
	Shiver Armor		   12				  50				 0 	- Done @ level 12
	Teleport	 		   18				  54				 1 	- Done @ level 18
	Glacial Spike		   18				  55				20 	- Done @ level 93
	Blizzard	 		   24				  59				20 	- Done @ level 24
	Frozen Orb 			   30				  64				 0	- Done @ level 49
	Cold Mastery 		   30				  65				 ?	- Done @ level 64

	TOTAL Points Spent --------------------------------------> 106

	**********REMAINING SKILL POINTS =   4  ******** (110 - 106 = 4)

	Quest Skill Point   Level Used			SkillID			TotalPoints
	-----------------	----------			-------			-----------
	Norm Den of Evil         7                 42                 1
	Norm Radament           27                 42                 1
	Norm Izual              30                 42                 2
	NM Den of Evil          43                 42                 1
	NM Radament             43                 42                 1
	NM Izual                43                 42                 2
	Hell Den of Evil        70                 42                 1
	Hell Radament           70                 42                 1
	Hell Izual              70                 42                 2
	
	TOTAL Quest Points Spent ----------------------------------> 12
	
	**********REMAINING QUEST SKILL POINTS =   0  ******** (12 - 12 = 0)

	Attack Config Variables For Sorceress
	---------------------------------------------------------------------------------------------------------------------
	Config.AttackSkill[0] = -1; // Preattack skill.
	Config.AttackSkill[1] = 59; // Primary skill to bosses.
	Config.AttackSkill[2] = 42; // Primary untimed skill to bosses. Keep at -1 if Config.AttackSkill[1] is untimed skill.
	Config.AttackSkill[3] = 59; // Primary skill to others.
	Config.AttackSkill[4] = 42; // Primary untimed skill to others. Keep at -1 if Config.AttackSkill[3] is untimed skill.
	Config.AttackSkill[5] = -1; // Secondary skill if monster is immune to primary.
	Config.AttackSkill[6] = -1; // Secondary untimed skill if monster is immune to primary untimed.
*/
js_strict(true);

if (!isIncluded("common/Cubing.js")) { include("common/Cubing.js"); };
if (!isIncluded("common/Prototypes.js")) { include("common/Prototypes.js"); };
if (!isIncluded("common/Runewords.js")) { include("common/Runewords.js"); };

var AutoBuildTemplate = {

	1:	{	
			//SkillPoints: [-1],										// This doesn't matter. We don't have skill points to spend at lvl 1
			//StatPoints: [-1,-1,-1,-1,-1],								// This doesn't matter. We don't have stat points to spend at lvl 1
			Update: function () {
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
				Config.UseHP = 50;
				Config.UseMP = 15;
				Config.UseRejuvHP = 35;
				Config.Cubing=false;
				Config.PickRange = 60;
				Config.BossPriority = true;
			}
		},
		
	2:	{
			SkillPoints: [39], 											// Ice Bolt + 1 (level 1)
			StatPoints: [0, 0, 0, 0, 0],								// Strength 15
			Update: function () {
				Config.AttackSkill = [-1, 39, -1, 39, -1, 0, 0];		// Ice Bolt
				Config.BeltColumn = ["hp", "hp", "mp", "mp"];
			}
		},
		
	3:	{
			SkillPoints: [40], 											// Frozen Armor + 1 (level 1)
			StatPoints: [3, 3, 3, 3, 3],								// Strength + 2, Vitality + 3
			Update: function () {
				
			}
		},
		
	4:	{
			SkillPoints: [37],											// Warmth + 1 (level 1)
			StatPoints: [0, 0, 0, 0, 0],								// Strength 20
			Update: function () {
				
			}
		},

	5:	{
			SkillPoints: [-1],											// Save Point + 1 (1 saved point remains)
			StatPoints: [3, 3, 3, 3, 3],								// Strength + 4, Vitality + 1
			Update: function () {
				Config.ScanShrines = [15, 13, 12];
				Config.MinColumn = [1, 1, 1, 0];
			}
		},

	6:	{
			SkillPoints: [42, 43],										// Static Field + 1, Telekinesis + 1 (level 1) (level 1) (0 saved points remain)
			StatPoints: [0, 0, 0, 0, 0],								// Strength 25
			Update: function () {
				Config.CastStatic = 70; 								// Cast static until the target is at designated life percent. 100 = disabled.
			}
		},

	7:	{
			SkillPoints: [45, 42],										// Ice Blast + 1, Static Field + 1 (level 1) (level 2) (Normal Den of Evil Used)
			StatPoints: [3, 3, 3, 3, 3],								// Strength + 1, Vitality + 4
			Update: function () {
				//Config.PickitFiles.splice(Config.PickitFiles.indexOf("belowlevelseven.nip"), 1);	// Will remove index "belowlevel7.nip" from Config.PickitFiles
			}
		},

	8:	{
			SkillPoints: [39],											// Ice Bolt + 1 (level 3)
			StatPoints: [0, 0, 0, 0, 0],								// Strength 30
			Update: function () {
				
			}
		},

	9:	{
			SkillPoints: [39],											// Ice Bolt + 1 (level 4)
			StatPoints: [3, 3, 3, 3, 3],								// Strength + 1, Vitality + 4
			Update: function () {
				
			}
		},

	10:	{
			SkillPoints: [42],											// Static Field + 1 (level 3)
			StatPoints: [3, 3, 3, 3, 3],								// Strength + 1, Vitality + 4
			Update: function () {
				Config.LowGold = 5000;
			}
		},

	11:	{	
			SkillPoints: [39],											// Ice Bolt + 1 (level 5)
			StatPoints: [3, 3, 3, 3, 3],								// Strength + 1, Vitality + 4
			Update: function () {
				
			}
		},

	12:	{
			SkillPoints: [39],											// Ice Bolt + 1 (level 6)
			StatPoints: [3, 3, 3, 3, 3],								// Strength + 1, Vitality + 4
			Update: function () {
				
			}
		},

	13:	{
			SkillPoints: [42],											// Static Field + 1 (level 4)
			StatPoints: [3, 3, 3, 3, 3],								// Strength + 1, Vitality + 4
			Update: function () {
				
			}
		},

	14:	{
			SkillPoints: [39],											// Ice Bolt + 1 (level 7)
			StatPoints: [3, 3, 3, 3, 3],								// Strength + 1, Vitality + 4
			Update: function () {
				
			}
		},

	15:	{
			SkillPoints: [42],											// Static Field + 1 (level 5)
			StatPoints: [3, 3, 3, 3, 3],								// Strength + 1, Vitality + 4
			Update: function () {
				Config.CastStatic = 20; 								// Cast static until the target is at designated life percent. 100 = disabled.
				Config.OpenChests = false;								// Eyes on the prize!
			}
		},

	16:	{
			SkillPoints: [39],											// Ice Bolt + 1 (level 8)
			StatPoints: [0, 0, 0, 0, 0],								// Strength 35
			Update: function () {
				Config.TownCheck = true;								// Do go to town for more potions
			}
		},

	17:	{
			SkillPoints: [-1],											// Save Point + 1 (1 saved point remains)
			StatPoints: [3, 3, 3, 3, 3],								// Strength + 1, Vitality + 4
			Update: function () {
				
			}
		},

	18:	{
			SkillPoints: [54, 55],										// Teleport + 1, Glacial Spike + 1 (level 1) (level 1) (0 saved points remain)
			StatPoints: [3, 3, 3, 3, 3],								// Strength + 1, Vitality + 4
			Update: function () {
				Config.AttackSkill = [-1, 55, -1, 55, -1, 0, 0];		// Glacial Spike
				Config.LowManaSkill = [39, -1];							// Ice Bolt when low Mana.
			}
		},

	19:	{
			SkillPoints: [55],											// Glacial Spike + 1 (level 2)
			StatPoints: [3, 3, 3, 3, 3],								// Strength + 1, Vitality + 4
			Update: function () {
				
			}
		},

	20:	{
			SkillPoints: [55],											// Glacial Spike + 1 (level 3)
			StatPoints: [3, 3, 3, 3, 3],								// Strength + 1, Vitality + 4
			Update: function () {
				Config.LowGold = 10000;
			}
		},

	21:	{	
			SkillPoints: [55],											// Glacial Spike + 1 (level 4)
			StatPoints: [3, 3, 3, 3, 3],								// Strength + 1, Vitality + 4
			Update: function () {
				
			}
		},

	22:	{
			SkillPoints: [55],											// Glacial Spike + 1 (level 5)
			StatPoints: [3, 3, 3, 3, 3],								// Strength + 1, Vitality + 4
			Update: function () {
				
			}
		},

	23:	{
			SkillPoints: [44],											// Frost Nova + 1 (level 1)
			StatPoints: [3, 3, 3, 3, 3],								// Strength + 1, Vitality + 4
			Update: function () {
				
			}
		},

	24:	{
			SkillPoints: [59],											// Blizzard + 1 (level 1)
			StatPoints: [0, 0, 0, 0, 0],								// Strength 40
			Update: function () {
				Config.BeltColumn = ["hp", "mp", "mp", "rv"];
				Config.Cubing = true;									// Will have a cube by now.
				Config.AttackSkill = [-1, 59, 42, 59, 42, -1, -1];		// Use Blizzard
				Config.LowManaSkill = [-1, -1];
			}
		},

	25:	{
			SkillPoints: [59],											// Blizzard + 1 (level 2)
			StatPoints: [0, 0, 0, 0, 0],								// Strength 45
			Update: function () {
				Config.LowGold = 15000;
			}
		},

	26:	{
			SkillPoints: [59],											// Blizzard + 1 (level 3)
			StatPoints: [0, 0, 0, 0, 0],								// Strength 50
			Update: function () {
				
			}
		},

	27:	{
			SkillPoints: [42],											// Static Field + 1 (level 6) Save + 1 (3 saved points remain) (Norm Radament)
			StatPoints: [3, 3, 3, 3, 3],								// Strength + 1, Vitality + 4
			Update: function () {
				
			}
		},

	28:	{
			SkillPoints: [59],											// Blizzard + 1 (level 4)
			StatPoints: [3, 3, 3, 3, 3],								// Strength + 1, Vitality + 4
			Update: function () {
				
			}
		},

	29:	{
			SkillPoints: [59],											// Blizzard + 1 (level 5)
			StatPoints: [0, 0, 0, 0, 0],								// Strength 55
			Update: function () {
				
			}
		},

	30:	{
			SkillPoints: [65],											// Cold Mastery + 1 (Norm Izual)
			StatPoints: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],					// Vitality + 10 (Norm Lam Esen's Tome)
			Update: function () {
				//Config.AttackSkill = [-1, 64, 55, 64, 55, -1, -1];		//
				//Config.LowManaSkill = [-1, -1];
				Config.LowGold = 20000;
			}
		},

	31:	{	
			SkillPoints: [59, 65],										// Blizzard + 1 (level 6), Cold Mastery + 1 (level 2) (level 2) (3 saved points remain)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	32:	{
			SkillPoints: [59, 65],										// Blizzard + 1 (level 7), Cold Mastery + 1 (level 3) (level 3) (2 saved points remain)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	33:	{
			SkillPoints: [59, 65],										// Blizzard + 1 (level 8), Cold Mastery + 1 (level 4) (level 4) (1 saved point remains)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	34:	{
			SkillPoints: [59, 65],										// Blizzard + 1 (level 9), Cold Mastery + 1 (level 5) (level 5) (0 saved points remain)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	35:	{
			SkillPoints: [59],											// Blizzard + 1 (level 10)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				Config.LowGold = 30000;
			}
		},

	36:	{
			SkillPoints: [59],											// Blizzard + 1 (level 11)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	37:	{
			SkillPoints: [59],											// Blizzard + 1 (level 12)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				Config.Dodge = true;
			}
		},

	38:	{
			SkillPoints: [59],											// Blizzard + 1 (level 13)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	39:	{
			SkillPoints: [59],											// Blizzard + 1 (level 14)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	40:	{
			SkillPoints: [59],											// Blizzard + 1 (level 15)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				Config.LowGold = 35000;
			}
		},

	41:	{	
			SkillPoints: [59],											// Blizzard + 1 (level 16)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	42:	{
			SkillPoints: [59],											// Blizzard + 1 (level 17)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	43:	{
			SkillPoints: [59,42,42,42],									// Blizzard + 1 (level 18) (NM Den of Evil, NM Radament, NM Izual)
			StatPoints: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],					// Vitality + 10 (NM Lam Esen's Tome)
			Update: function () {
				
			}
		},

	44:	{
			SkillPoints: [59],											// Blizzard + 1 (level 19)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	45:	{
			SkillPoints: [59],											// Blizzard + 1 (level 20)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				Config.LowGold = 40000;
			}
		},

	46:	{
			SkillPoints: [55],											// Glacial Spike + 1 (level 6)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	47:	{
			SkillPoints: [55],											// Glacial Spike + 1 (level 7)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	48:	{
			SkillPoints: [55],											// Glacial Spike + 1 (level 8)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	49:	{
			SkillPoints: [55],											// Glacial Spike + 1 (level 9)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	50:	{
			SkillPoints: [65],											// Cold Mastery + 1 (level 6)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				//Config.BeltColumn = ["hp", "mp", "mp", "rv"]; 			// Start keeping rejuvs
				Config.LowGold = 45000;
			}
		},

	51:	{	
			SkillPoints: [65],											// Cold Mastery + 1 (level 7)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	52:	{
			SkillPoints: [55],											// Glacial Spike + 1 (level 10)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	53:	{
			SkillPoints: [55],											// Glacial Spike + 1 (level 11)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	54:	{
			SkillPoints: [65],											// Glacial Spike + 1 (level 12)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	55:	{
			SkillPoints: [55],											// Glacial Spike + 1 (level 13)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				Config.LowGold = 50000;
			}
		},

	56:	{
			SkillPoints: [55],											// Glacial Spike + 1 (level 14)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	57:	{
			SkillPoints: [55],											// Glacial Spike + 1 (level 15)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	58:	{
			SkillPoints: [55],											// Glacial Spike + 1 (level 16)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	59:	{
			SkillPoints: [55],											// Glacial Spike + 1 (level 17)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	60:	{
			SkillPoints: [55],											// Glacial Spike + 1 (level 18)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				Config.LowGold = 55000;
			}
		},

	61:	{	
			SkillPoints: [55],											// Glacial Spike + 1 (level 19)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	62:	{
			SkillPoints: [55],											// Glacial Spike + 1 (level 20)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	63:	{
			SkillPoints: [39],											// Ice Bolt + 1 (level 9)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	64:	{
			SkillPoints: [39],											// Ice Bolt + 1 (level 10)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	65:	{
			SkillPoints: [39], 											// Ice Bolt + 1 (level 11)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				Config.LowGold = 60000;
			}
		},

	66:	{
			SkillPoints: [39], 											// Ice Bolt + 1 (level 12)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	67:	{
			SkillPoints: [39], 											// Ice Bolt + 1 (level 13)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	68:	{
			SkillPoints: [39], 											// Ice Bolt + 1 (level 14)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	69:	{
			SkillPoints: [39], 											// Ice Bolt + 1 (level 15)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	70:	{
			SkillPoints: [39, 42, 42, 42, 42], 							// Ice Bolt + 1 (level 16) , Static Field + 4 (level 16) (Hell Den of Evil, Hell Radament, Hell Izual)
			StatPoints: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],					// Vitality + 10 (Hell Lam Esen's Tome)
			Update: function () {
				Config.LowGold = 100000;
			}
		},

	71:	{	
			SkillPoints: [39], 											// Ice Bolt + 1 (level 17)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	72:	{
			SkillPoints: [39], 											// Ice Bolt + 1 (level 18)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	73:	{
			SkillPoints: [39], 											// Ice Bolt + 1 (level 19)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	74:	{
			SkillPoints: [39], 											// Ice Bolt + 1 (level 20)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	75:	{
			SkillPoints: [39], 											// Ice Bolt + 1 (level 19)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	76:	{
			SkillPoints: [39], 											// Ice Bolt + 1 (level 20)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	77:	{
			SkillPoints: [45], 											// Ice Blast + 1 (level 2)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	78:	{
			SkillPoints: [45], 											// Ice Blast + 1 (level 3)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	79:	{
			SkillPoints: [45], 											// Ice Blast + 1 (level 4)
			StatPoints: [3, 3, 3, 3, 3],								// Vitality + 5
			Update: function () {
				
			}
		},

	80:	{
			SkillPoints: [45],											// Ice Blast + 1 (level 5)
			StatPoints: [-1, -1, -1, -1, -1],								// Vitality + 5
			Update: function () {
				Config.Gamble = true;									// Time to spend dat ca$h!!
				Config.ScanShrines	= [];
			}
		},

	81:	{	
			SkillPoints: [45],											// Ice Blast + 1 (level 6)
			StatPoints: [-1, -1, -1, -1, -1],								// Vitality + 5
			Update: function () {
				
			}
		},

	82:	{
			SkillPoints: [45],											// Ice Blast + 1 (level 7)
			StatPoints: [-1, -1, -1, -1, -1],								// Vitality + 5
			Update: function () {
				
			}
		},

	83:	{
			SkillPoints: [45],											// Ice Blast + 1 (level 8)
			StatPoints: [-1, -1, -1, -1, -1],								// Vitality + 5
			Update: function () {
				
			}
		},

	84:	{
			SkillPoints: [45],											// Ice Blast + 1 (level 9)
			StatPoints: [-1, -1, -1, -1, -1],								// Vitality + 5
			Update: function () {
				
			}
		},

	85:	{
			SkillPoints: [45],											// Ice Blast + 1 (level 10)
			StatPoints: [-1, -1, -1, -1, -1],								// Vitality + 5
			Update: function () {
				
			}
		},

	86:	{
			SkillPoints: [45],											// Ice Blast + 1 (level 11)
			StatPoints: [-1, -1, -1, -1, -1],								// Vitality + 5
			Update: function () {
				
			}
		},

	87:	{
			SkillPoints: [45],											// Ice Blast + 1 (level 12)
			StatPoints: [-1, -1, -1, -1, -1],								// Vitality + 5
			Update: function () {
				
			}
		},

	88:	{
			SkillPoints: [45],											// Ice Blast + 1 (level 13)
			StatPoints: [-1, -1, -1, -1, -1],								// Vitality + 5
			Update: function () {
				
			}
		},

	89:	{
			SkillPoints: [45],											// Ice Blast + 1 (level 14)
			StatPoints: [-1, -1, -1, -1, -1],								// Vitality + 5
			Update: function () {
				
			}
		},

	90:	{
			SkillPoints: [45],											// Ice Blast + 1 (level 16)
			StatPoints: [-1, -1, -1, -1, -1],								// Vitality + 5
			Update: function () {
				
			}
		},

	91:	{	
			SkillPoints: [45],											// Ice Blast + 1 (level 17)
			StatPoints: [-1, -1, -1, -1, -1],								// Vitality + 5
			Update: function () {
				
			}
		},

	92:	{
			SkillPoints: [45],											// Ice Blast + 1 (level 18)
			StatPoints: [-1, -1, -1, -1, -1],								// Vitality + 5
			Update: function () {
				
			}
		},

	93:	{
			SkillPoints: [45],											// Ice Blast + 1 (level 19)
			StatPoints: [-1, -1, -1, -1, -1],								// Vitality + 5
			Update: function () {
				
			}
		},

	94:	{
			SkillPoints: [45],											// Ice Blast + 1 (level 20)
			StatPoints: [-1, -1, -1, -1, -1],								// Vitality + 5
			Update: function () {
				
			}
		},

	95:	{
			SkillPoints: [-1],											//
			StatPoints: [-1, -1, -1, -1, -1],								// Vitality + 5
			Update: function () {
				
			}
		},

	96:	{
			SkillPoints: [-1],											//
			StatPoints: [-1, -1, -1, -1, -1],								// Vitality + 5
			Update: function () {
				
			}
		},

	97:	{
			SkillPoints: [-1],											//
			StatPoints: [-1, -1, -1, -1, -1],								// Vitality + 5
			Update: function () {
				
			}
		},

	98:	{
			SkillPoints: [-1],											//
			StatPoints: [-1, -1, -1, -1, -1],								// Vitality + 5
			Update: function () {
				
			}
		},

	99:	{
			SkillPoints: [-1],											//
			StatPoints: [-1, -1, -1, -1, -1],								// Vitality + 5
			Update: function () {
				
			}
		}
};