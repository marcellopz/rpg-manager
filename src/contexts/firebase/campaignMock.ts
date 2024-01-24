import { CampaignType } from "../../pages/Campaign/campaignTypes";
import {
  backgroundImage,
  aidenImage,
  bellaImage,
  caelumImage,
  daraImage,
} from "./characterImages";
import auth from "./firebase";

const campaign1Mock: CampaignType = {
  backdropImage: `data:image/png;base64,${backgroundImage}`,
  categories: {
    "-NoZiHW5aeqMxTaUIjsT": {
      inventory: true,
      listIndex: 1,
      name: "Inventory",
      tabs: {
        "-NoZzhlo_PHR8tVc43-4": {
          content: {
            inventory: {
              "-Nobj5LhfjCKG5c0y5k9": {
                item: {
                  name: "Bow of the Forest Guardian",
                  type: "magic",
                  weight: 3,
                },
                numberOfItems: 1,
              },
              "-NobjAae-7zxFrwgCFUs": {
                item: {
                  name: "Cloak of Elvenkind",
                  type: "magic",
                  weight: 1,
                },
                numberOfItems: 1,
              },
              "-NobjE6ukXz6Vnb7Xy9n": {
                item: {
                  name: "Boots of the Trailblazer",
                  type: "normal",
                  weight: 2,
                },
                numberOfItems: 1,
              },
              "-NobjzxdT3PX0luusen-": {
                item: {
                  name: "Potion of healing",
                  type: "consumable",
                  weight: 0.5,
                },
                numberOfItems: 1,
              },
              "-Nobk5l2UeLMW6OS37SC": {
                item: {
                  name: "Arrow of Slaying",
                  type: "consumable",
                  weight: 1,
                },
                numberOfItems: 1,
              },
              "-NobkA5Eb18UJKSjjQwf": {
                item: {
                  name: "Backpack",
                  type: "normal",
                  weight: 5,
                },
                numberOfItems: 1,
              },
              "-NobkHimc8kfwqAToJce": {
                item: {
                  name: "Bedroll",
                  type: "normal",
                  weight: 7,
                },
                numberOfItems: 1,
              },
              "-NobkOLrCCQTrYzqeTuU": {
                item: {
                  name: "Rope (50 feet)",
                  type: "normal",
                  weight: 10,
                },
                numberOfItems: 1,
              },
              "-NobkR9jFJ5CBUkRc-s_": {
                item: {
                  name: "Tinderbox",
                  type: "normal",
                  weight: 1,
                },
                numberOfItems: 1,
              },
              "-NobkTYQRCaAjlHQBcvy": {
                item: {
                  name: "Waterskin",
                  type: "normal",
                  weight: 5,
                },
                numberOfItems: 1,
              },
              "-NobkZMeXLAy9ZVEtKzl": {
                item: {
                  name: "Trail Rations",
                  type: "consumable",
                  weight: 2,
                },
                numberOfItems: 5,
              },
              "-Nobl0q_cewtjDNIvwdA": {
                item: {
                  name: "Torch",
                  type: "normal",
                  weight: 1,
                },
                numberOfItems: 5,
              },
            },
            playerAvatar: `data:image/png;base64,${aidenImage}`,
            playerGold: 100,
            playerName: "Aiden",
            playerStrength: 13,
          },
          name: "Aiden",
          type: "inventory",
        },
        "-NoZzqsIzrmAAmuzNWoy": {
          content: {
            inventory: {
              "-NoblFTpP0Ghh50PsaBa": {
                item: {
                  name: "Staff of Lesser Arcana",
                  type: "magic",
                  weight: 4,
                },
                numberOfItems: 1,
              },
              "-NoblJkmCOPJ-zbiPQC-": {
                item: {
                  name: "Wizard's Robes",
                  type: "normal",
                  weight: 2,
                },
                numberOfItems: 1,
              },
              "-NoblYFStVK0aPWKpYGX": {
                item: {
                  name: "Ring of Protection",
                  type: "magic",
                  weight: 0,
                },
                numberOfItems: 1,
              },
              "-Noblqw0eeLaK5etoVIZ": {
                item: {
                  name: "Scroll of shield",
                  type: "magic",
                  weight: 0,
                },
                numberOfItems: 2,
              },
              "-Nobm-SlBG4WjbMO9efl": {
                item: {
                  name: "Potion of Mana Restoration",
                  type: "consumable",
                  weight: 0.5,
                },
                numberOfItems: 1,
              },
              "-NobmFLJ-v77wzp6-0r0": {
                item: {
                  name: "Spellbook",
                  type: "normal",
                  weight: 3,
                },
                numberOfItems: 1,
              },
              "-NobmJzU3f5wa-2X0leO": {
                item: {
                  name: "Component Pouch",
                  type: "normal",
                  weight: 2,
                },
                numberOfItems: 1,
              },
              "-NobmNIQzzodaaorsocW": {
                item: {
                  name: "Backpack",
                  type: "normal",
                  weight: 5,
                },
                numberOfItems: 1,
              },
              "-NobmQ4XMS19Z-WJEoWU": {
                item: {
                  name: "Ink and Quill",
                  type: "normal",
                  weight: 1,
                },
                numberOfItems: 1,
              },
              "-Nobmb-YCrQ83sVrhVEb": {
                item: {
                  name: "Parchment",
                  type: "normal",
                  weight: 0,
                },
                numberOfItems: 10,
              },
              "-Nobme11uFlYj0ev-gIE": {
                item: {
                  name: "Waterskin",
                  type: "normal",
                  weight: 5,
                },
                numberOfItems: 1,
              },
              "-Nobmj5t5wyldPSlOeLM": {
                item: {
                  name: "Trail Rations",
                  type: "normal",
                  weight: 2,
                },
                numberOfItems: 5,
              },
              "-NobmlhdvZpgazVWhLk2": {
                item: {
                  name: "Cloak",
                  type: "normal",
                  weight: 5,
                },
                numberOfItems: 1,
              },
              "-Nobmp1Kkgb_I2qeX8xc": {
                item: {
                  name: "Candles",
                  type: "normal",
                  weight: 0.1,
                },
                numberOfItems: 10,
              },
            },
            playerAvatar: `data:image/png;base64,${bellaImage}`,
            playerGold: 50,
            playerName: "Bella",
            playerStrength: 8,
          },
          name: "Bella",
          type: "inventory",
        },
        "-No_--dXem-_CF2XJzWZ": {
          content: {
            inventory: {
              "-Nobn1_rBTdYkkDxNn8V": {
                item: {
                  name: "Warhammer of Smashing",
                  type: "normal",
                  weight: 10,
                },
                numberOfItems: 1,
              },
              "-Nobn4Q3eG3jxIciojRa": {
                item: {
                  name: "Shield of Fortitude",
                  type: "magic",
                  weight: 6,
                },
                numberOfItems: 1,
              },
              "-Nobn6l6sjLJGt5LoDok": {
                item: {
                  name: "Chain Mail Armor",
                  type: "normal",
                  weight: 40,
                },
                numberOfItems: 1,
              },
              "-NobnDFt4GEDiLZ8VtTt": {
                item: {
                  name: "Oil of Sharpness",
                  type: "consumable",
                  weight: 0.5,
                },
                numberOfItems: 1,
              },
              "-NobnIiCu_VqEX1hKUZ6": {
                item: {
                  name: "Holy Water",
                  type: "consumable",
                  weight: 1,
                },
                numberOfItems: 2,
              },
              "-NobnMIsYYteyPVmbdKn": {
                item: {
                  name: "Backpack",
                  type: "normal",
                  weight: 5,
                },
                numberOfItems: 1,
              },
              "-NobnODm_qq8KiilQyGe": {
                item: {
                  name: "Bedroll",
                  type: "normal",
                  weight: 7,
                },
                numberOfItems: 1,
              },
              "-NobnTsYUePOwdrSZOSI": {
                item: {
                  name: "Holy Symbol",
                  type: "normal",
                  weight: 0,
                },
                numberOfItems: 1,
              },
              "-NobnYJlYF9OVtF9gops": {
                item: {
                  name: "Waterskin",
                  type: "normal",
                  weight: 5,
                },
                numberOfItems: 1,
              },
              "-NobnmWTzCq0evtpP_FR": {
                item: {
                  name: "Torch",
                  type: "normal",
                  weight: 1,
                },
                numberOfItems: 5,
              },
            },
            playerAvatar: `data:image/png;base64,${caelumImage}`,
            playerGold: 75,
            playerName: "Caelum",
            playerStrength: 18,
          },
          name: "Caelum",
          type: "inventory",
        },
        "-No_-3ys2nNpyP14UrTo": {
          content: {
            inventory: {
              "-Nobo-oLZdD3etBnPcso": {
                item: {
                  name: "Dagger of Venum",
                  type: "magic",
                  weight: 1,
                },
                numberOfItems: 1,
              },
              "-Nobo412DXIF8jLkVzFf": {
                item: {
                  name: "Leather Boots",
                  type: "normal",
                  weight: 2,
                },
                numberOfItems: 1,
              },
              "-NoboAPTD3kBZSL9vAii": {
                item: {
                  name: "Cloak of Shadows",
                  type: "normal",
                  weight: 1,
                },
                numberOfItems: 1,
              },
              "-NoboF22Cq5h9hk6oKia": {
                item: {
                  name: "Smoke Bombs",
                  type: "consumable",
                  weight: 1,
                },
                numberOfItems: 3,
              },
              "-NoboHig4Jfs-f4P54J6": {
                item: {
                  name: "Lockpick set",
                  type: "normal",
                  weight: 1,
                },
                numberOfItems: 1,
              },
              "-NoboL1Kzh_9LP2lWn90": {
                item: {
                  name: "Backpack",
                  type: "normal",
                  weight: 5,
                },
                numberOfItems: 1,
              },
              "-NoboNQuKD2nrlZRwrw0": {
                item: {
                  name: "Thieves' Tools",
                  type: "normal",
                  weight: 1,
                },
                numberOfItems: 1,
              },
              "-NoboOvz22g0wv8oroJe": {
                item: {
                  name: "Dagger",
                  type: "normal",
                  weight: 1,
                },
                numberOfItems: 1,
              },
              "-NoboTD3PAMrZMCqOOWT": {
                item: {
                  name: "Rope (50 feet)",
                  type: "normal",
                  weight: 10,
                },
                numberOfItems: 1,
              },
              "-NoboVjHw2qzLZSzPLJu": {
                item: {
                  name: "Waterskin",
                  type: "normal",
                  weight: 5,
                },
                numberOfItems: 1,
              },
              "-NoboYd7fvf1qf7pSk1U": {
                item: {
                  name: "Trail Rations",
                  type: "normal",
                  weight: 2,
                },
                numberOfItems: 5,
              },
              "-Nobo_alZxEnsCrI2GUz": {
                item: {
                  name: "Tinderbox",
                  type: "normal",
                  weight: 1,
                },
                numberOfItems: 1,
              },
              "-NobocMtEkfO2rgJIv1g": {
                item: {
                  name: "Crowbar",
                  type: "normal",
                  weight: 5,
                },
                numberOfItems: 1,
              },
              "-NobogY2M4u2Nkw4VbKv": {
                item: {
                  name: "Oil",
                  type: "consumable",
                  weight: 1,
                },
                numberOfItems: 2,
              },
            },
            playerAvatar: `data:image/png;base64,${daraImage}`,
            playerGold: 69,
            playerName: "Dara",
            playerStrength: 10,
          },
          name: "Dara",
          type: "inventory",
        },
      },
    },
    "-NoZiPts2OwxxdYX3hAs": {
      inventory: false,
      listIndex: 2,
      name: "Campaign diary",
      tabs: {
        "-NoZohhKbh84jrVc_OW8": {
          content:
            '1. **Introduction of Characters:**\n   * Aiden, the Elven Ranger with a mysterious past.\n   * Bella, the Human Wizard, eager to discover new spells.\n   * Caelum, the Dwarven Paladin, on a divine quest.\n   * Dara, the Halfling Rogue, looking for riches and adventure.\n2. **Setting the Scene:**\n   * The story begins in the bustling town of Goldcrest.\n   * The group meets at the "Laughing Dragon" tavern.\n   * Townsfolk are concerned about recent disappearances.\n3. **Receiving the Quest:**\n   * The tavern owner, an old friend of Aiden, shares rumors of strange lights in the forest.\n   * The Mayor offers a reward for investigating the disappearances.\n4. **First Encounter:**\n   * Traveling through the forest, the group encounters a pack of wolves.\n   * Successful combat, showcasing each character\'s abilities.\n5. **Discovery of a Hidden Cave:**\n   * Tracking the wolves leads to a hidden cave entrance.\n   * Inside, they find evidence of recent activity and strange symbols on the walls.\n6. **Puzzle Challenge:**\n   * Encounter a magical lock requiring a puzzle to be solved.\n   * Bella uses her arcane knowledge to decipher the clues.\n7. **Cliffhanger Ending:**\n   * The session ends as they hear a mysterious voice deeper in the cave.\n   * The group prepares for what may lie ahead.',
          contentHistory: {
            "-NoZpIg-KqlOCgvvsGX2": {
              author: "John Doe",
              content:
                '1. **Introduction of Characters:**\n   * Aiden, the Elven Ranger with a mysterious past.\n   * Bella, the Human Wizard, eager to discover new spells.\n   * Caelum, the Dwarven Paladin, on a divine quest.\n   * Dara, the Halfling Rogue, looking for riches and adventure.\n2. **Setting the Scene:**\n   * The story begins in the bustling town of Goldcrest.\n   * The group meets at the "Laughing Dragon" tavern.\n   * Townsfolk are concerned about recent disappearances.\n3. **Receiving the Quest:**\n   * The tavern owner, an old friend of Aiden, shares rumors of strange lights in the forest.\n   * The Mayor offers a reward for investigating the disappearances.\n4. **First Encounter:**\n   * Traveling through the forest, the group encounters a pack of wolves.\n   * Successful combat, showcasing each character\'s abilities.\n5. **Discovery of a Hidden Cave:**\n   * Tracking the wolves leads to a hidden cave entrance.\n   * Inside, they find evidence of recent activity and strange symbols on the walls.\n6. **Puzzle Challenge:**\n   * Encounter a magical lock requiring a puzzle to be solved.\n   * Bella uses her arcane knowledge to decipher the clues.\n7. **Cliffhanger Ending:**\n   * The session ends as they hear a mysterious voice deeper in the cave.\n   * The group prepares for what may lie ahead.',
              timestamp: 1705719971070,
            },
          },
          name: "Session 1",
          type: "text",
        },
        "-NoZpJwfXrIgkGbcA9Wa": {
          content:
            "1. **Exploration of the Cave:**\n   * The group cautiously proceeds deeper into the cave.\n   * They encounter various natural hazards, like slippery rocks and narrow passages.\n2. **Encounter with Bandits:**\n   * Stumble upon a group of bandits using the cave as a hideout.\n   * Aiden negotiates while Dara sneaks around for a surprise attack.\n   * Successful combat or negotiation leads to information about the bandits' leader and their plans.\n3. **Discovery of a Secret Passage:**\n   * Caelum discovers a hidden lever in the bandit quarters, revealing a secret tunnel.\n   * The tunnel leads to an ancient underground ruin.\n4. **Mystical Puzzle in the Ruins:**\n   * The ruin contains a puzzle that requires each member to use their unique skills.\n   * Solving it unlocks a chamber with arcane inscriptions and a magical artifact.\n5. **Revelation of the Artifact's Power:**\n   * Bella identifies the artifact as a key to an ancient, powerful magic.\n   * The group debates on whether to keep it or destroy it.\n6. **Ambush by a Mysterious Foe:**\n   * A mysterious figure, the bandits' leader, and their minions ambush the group.\n   * Intense combat, testing the group's teamwork and strategy.\n7. **Rescue of the Missing Townsfolk:**\n   * After defeating the foes, they find the missing townsfolk locked up in a cell.\n   * The group rescues them and learns more about the bandits' operations.\n8. **Return to Goldcrest:**\n   * The group escorts the townsfolk back to Goldcrest.\n   * The Mayor and townsfolk thank them and offer a reward.\n   * Rumors of a larger threat connected to the bandit leader and the artifact surface.\n9. **Planning Next Steps:**\n   * The session ends with the group deciding their next course of action.\n   * Will they investigate the larger threat or pursue other adventures?",
          contentHistory: {
            "-NoZpzX9ATb7hVtbLKPc": {
              author: "John Doe",
              content:
                "1. **Exploration of the Cave:**\n   * The group cautiously proceeds deeper into the cave.\n   * They encounter various natural hazards, like slippery rocks and narrow passages.\n2. **Encounter with Bandits:**\n   * Stumble upon a group of bandits using the cave as a hideout.\n   * Aiden negotiates while Dara sneaks around for a surprise attack.\n   * Successful combat or negotiation leads to information about the bandits' leader and their plans.\n3. **Discovery of a Secret Passage:**\n   * Caelum discovers a hidden lever in the bandit quarters, revealing a secret tunnel.\n   * The tunnel leads to an ancient underground ruin.\n4. **Mystical Puzzle in the Ruins:**\n   * The ruin contains a puzzle that requires each member to use their unique skills.\n   * Solving it unlocks a chamber with arcane inscriptions and a magical artifact.\n5. **Revelation of the Artifact's Power:**\n   * Bella identifies the artifact as a key to an ancient, powerful magic.\n   * The group debates on whether to keep it or destroy it.\n6. **Ambush by a Mysterious Foe:**\n   * A mysterious figure, the bandits' leader, and their minions ambush the group.\n   * Intense combat, testing the group's teamwork and strategy.\n7. **Rescue of the Missing Townsfolk:**\n   * After defeating the foes, they find the missing townsfolk locked up in a cell.\n   * The group rescues them and learns more about the bandits' operations.\n8. **Return to Goldcrest:**\n   * The group escorts the townsfolk back to Goldcrest.\n   * The Mayor and townsfolk thank them and offer a reward.\n   * Rumors of a larger threat connected to the bandit leader and the artifact surface.\n9. **Planning Next Steps:**\n   * The session ends with the group deciding their next course of action.\n   * Will they investigate the larger threat or pursue other adventures?",
              timestamp: 1705720150665,
            },
          },
          name: "Session 2",
          type: "text",
        },
        "-NoZq-PZ2r2bJ47i8BHC": {
          content:
            "1. **Gathering Information:**\n   * The session starts in Goldcrest, with the group seeking more information about the larger threat.\n   * They split up to gather intel from various sources: the local library, the town gossip, and a mysterious traveler.\n2. **Encounter with a Sage:**\n   * Aiden meets an old sage who hints at an ancient prophecy related to the artifact.\n   * The sage warns of a cult seeking to use it for a dark ritual.\n3. **Unexpected Attack:**\n   * While gathering information, the group is ambushed by cultists.\n   * A fierce battle ensues, showcasing the party's growing combat skills.\n4. **Interrogating a Cultist:**\n   * Capturing one of the cultists, the group learns about a hidden temple where the ritual is to take place.\n   * They decide to infiltrate the temple to stop the cult.\n5. **Journey to the Temple:**\n   * The group travels through treacherous terrain, facing environmental challenges.\n   * Dara's tracking skills and Caelum's knowledge of the terrain guide them.\n6. **Infiltration of the Temple:**\n   * Upon reaching the temple, they plan a stealthy infiltration.\n   * Encounters with temple guards test their stealth and deception skills.\n7. **Discovery of the Ritual Site:**\n   * Inside the temple, they find the ritual site, with preparations underway.\n   * Bella uses her arcane knowledge to understand the ritual and how to stop it.\n8. **Confrontation with the Cult Leader:**\n   * The group confronts the cult leader, leading to a tense negotiation or combat.\n   * The leader reveals their motive to summon a powerful being from another realm.\n9. **Preventing the Ritual:**\n   * The group must disrupt the ritual, involving a series of skill checks and quick decisions.\n   * If successful, they prevent the summoning; if not, they face a new, more powerful enemy.\n10. **Aftermath and New Questions:**\n    * After thwarting the ritual, they find clues hinting at a larger, more sinister organization behind the cult.\n    * The session ends with the group pondering their next move: to delve deeper into this conspiracy or pursue other adventures.",
          contentHistory: {
            "-NoZq0POPRAB_9yVph4L": {
              author: "John Doe",
              content:
                "1. **Gathering Information:**\n   * The session starts in Goldcrest, with the group seeking more information about the larger threat.\n   * They split up to gather intel from various sources: the local library, the town gossip, and a mysterious traveler.\n2. **Encounter with a Sage:**\n   * Aiden meets an old sage who hints at an ancient prophecy related to the artifact.\n   * The sage warns of a cult seeking to use it for a dark ritual.\n3. **Unexpected Attack:**\n   * While gathering information, the group is ambushed by cultists.\n   * A fierce battle ensues, showcasing the party's growing combat skills.\n4. **Interrogating a Cultist:**\n   * Capturing one of the cultists, the group learns about a hidden temple where the ritual is to take place.\n   * They decide to infiltrate the temple to stop the cult.\n5. **Journey to the Temple:**\n   * The group travels through treacherous terrain, facing environmental challenges.\n   * Dara's tracking skills and Caelum's knowledge of the terrain guide them.\n6. **Infiltration of the Temple:**\n   * Upon reaching the temple, they plan a stealthy infiltration.\n   * Encounters with temple guards test their stealth and deception skills.\n7. **Discovery of the Ritual Site:**\n   * Inside the temple, they find the ritual site, with preparations underway.\n   * Bella uses her arcane knowledge to understand the ritual and how to stop it.\n8. **Confrontation with the Cult Leader:**\n   * The group confronts the cult leader, leading to a tense negotiation or combat.\n   * The leader reveals their motive to summon a powerful being from another realm.\n9. **Preventing the Ritual:**\n   * The group must disrupt the ritual, involving a series of skill checks and quick decisions.\n   * If successful, they prevent the summoning; if not, they face a new, more powerful enemy.\n10. **Aftermath and New Questions:**\n    * After thwarting the ritual, they find clues hinting at a larger, more sinister organization behind the cult.\n    * The session ends with the group pondering their next move: to delve deeper into this conspiracy or pursue other adventures.",
              timestamp: 1705720158360,
            },
          },
          name: "Session 3",
          type: "text",
        },
        "-NoZqQuJS9tdPsdL0le4": {
          content:
            "1. **Regrouping and Planning:**\n   * The session begins in a safehouse in Goldcrest, where the group reflects on the recent events.\n   * They discuss the clues about the larger organization and decide to investigate further.\n2. **Seeking Allies:**\n   * Realizing the magnitude of the threat, the group decides to seek allies.\n   * They approach various factions within Goldcrest: the Thieves' Guild, the Mage's Circle, and the City Guard.\n3. **A Call for Help:**\n   * During their efforts, an urgent message arrives from a nearby village, pleading for help against a monstrous threat.\n   * The group decides to aid the village, seeing it as a chance to build goodwill and gather more allies.\n4. **Journey to the Village:**\n   * On their way, they encounter a merchant caravan under attack by goblins.\n   * After rescuing the caravan, they earn a grateful ally and receive useful supplies.\n5. **Arrival and Investigation:**\n   * Arriving at the village, they find it terrorized by mysterious creatures.\n   * Investigation and tracking lead them to a nearby forest, suspected to be the creatures' lair.\n6. **Forest Ambush:**\n   * While exploring the forest, the group is ambushed by the creatures, revealed to be corrupted beasts.\n   * The combat tests their abilities and teamwork.\n7. **Discovering the Source of Corruption:**\n   * Tracking the beasts back to their lair, they discover a corrupted shrine emitting dark magic.\n   * Bella identifies it as a source of corrupting energy, linked to the larger organization.\n8. **Cleansing the Shrine:**\n   * The group faces guardians protecting the shrine.\n   * Caelum leads a ritual to cleanse the shrine, while the others defend against waves of attackers.\n9. **Return to the Village:**\n   * With the shrine cleansed, the corruption in the forest begins to wane.\n   * The villagers celebrate the group's success and offer them rewards and vital information.\n10. **Clues to the Next Adventure:**\n    * Among the rewards, they find an ancient map leading to a hidden temple said to hold answers to defeating the sinister organization.\n    * The session ends with the group planning their expedition to the temple.",
          contentHistory: {
            "-NoZqRVYsIVpBE-ZMQT4": {
              author: "John Doe",
              content:
                "1. **Regrouping and Planning:**\n   * The session begins in a safehouse in Goldcrest, where the group reflects on the recent events.\n   * They discuss the clues about the larger organization and decide to investigate further.\n2. **Seeking Allies:**\n   * Realizing the magnitude of the threat, the group decides to seek allies.\n   * They approach various factions within Goldcrest: the Thieves' Guild, the Mage's Circle, and the City Guard.\n3. **A Call for Help:**\n   * During their efforts, an urgent message arrives from a nearby village, pleading for help against a monstrous threat.\n   * The group decides to aid the village, seeing it as a chance to build goodwill and gather more allies.\n4. **Journey to the Village:**\n   * On their way, they encounter a merchant caravan under attack by goblins.\n   * After rescuing the caravan, they earn a grateful ally and receive useful supplies.\n5. **Arrival and Investigation:**\n   * Arriving at the village, they find it terrorized by mysterious creatures.\n   * Investigation and tracking lead them to a nearby forest, suspected to be the creatures' lair.\n6. **Forest Ambush:**\n   * While exploring the forest, the group is ambushed by the creatures, revealed to be corrupted beasts.\n   * The combat tests their abilities and teamwork.\n7. **Discovering the Source of Corruption:**\n   * Tracking the beasts back to their lair, they discover a corrupted shrine emitting dark magic.\n   * Bella identifies it as a source of corrupting energy, linked to the larger organization.\n8. **Cleansing the Shrine:**\n   * The group faces guardians protecting the shrine.\n   * Caelum leads a ritual to cleanse the shrine, while the others defend against waves of attackers.\n9. **Return to the Village:**\n   * With the shrine cleansed, the corruption in the forest begins to wane.\n   * The villagers celebrate the group's success and offer them rewards and vital information.\n10. **Clues to the Next Adventure:**\n    * Among the rewards, they find an ancient map leading to a hidden temple said to hold answers to defeating the sinister organization.\n    * The session ends with the group planning their expedition to the temple.",
              timestamp: 1705720269346,
            },
          },
          name: "Session 4",
          type: "text",
        },
        "-NoZqStcXnm4Uv-M7CeQ": {
          content:
            "1. **Preparation for the Expedition:**\n   * The session starts with the group preparing for the expedition to the hidden temple.\n   * They gather supplies, research the temple's history, and study the ancient map.\n2. **Encounter with a Rival Adventurer Group:**\n   * While preparing, they meet a rival group of adventurers also interested in the temple.\n   * Through dialogue or competition, they either form a shaky alliance or a friendly rivalry.\n3. **Journey to the Hidden Temple:**\n   * The group travels through diverse landscapes, facing natural hazards and wildlife.\n   * Caelum's survival skills and Aiden's tracking abilities are crucial.\n4. **Solving the Riddle of the Entrance:**\n   * Arriving at the temple's supposed location, they find a riddle-protected entrance.\n   * Bella and Dara collaborate to solve the riddle, revealing the hidden temple.\n5. **Exploration of the Temple:**\n   * Inside the temple, they encounter traps, puzzles, and ancient guardians.\n   * The group's problem-solving skills and combat prowess are tested.\n6. **Discovery of Ancient Relics:**\n   * They discover a chamber filled with ancient relics and manuscripts.\n   * Bella deciphers texts revealing lore about the sinister organization and ways to counter it.\n7. **Betrayal and Conflict:**\n   * If allied with the rival adventurers, a betrayal occurs over the division of treasure.\n   * If they are rivals, the other group attempts to ambush them to claim the relics.\n8. **Securing the Relics:**\n   * A tense battle or negotiation ensues, determining the fate of the relics.\n   * The group must decide what to do with these powerful and potentially dangerous items.\n9. **Return Journey with Complications:**\n   * On their way back, they face challenges like pursuing enemies or a natural disaster.\n   * Their decisions during these events shape their reputation and future adventures.\n10. **Debriefing and Plotting the Next Move:**\n    * Safely back in Goldcrest, they analyze the acquired knowledge and relics.\n    * The session ends with the group planning their next steps in countering the organization, potentially setting up for a larger confrontation.",
          contentHistory: {
            "-NoZqgkA4XGo6BiclW8H": {
              author: "John Doe",
              content:
                "1. **Preparation for the Expedition:**\n   * The session starts with the group preparing for the expedition to the hidden temple.\n   * They gather supplies, research the temple's history, and study the ancient map.\n2. **Encounter with a Rival Adventurer Group:**\n   * While preparing, they meet a rival group of adventurers also interested in the temple.\n   * Through dialogue or competition, they either form a shaky alliance or a friendly rivalry.\n3. **Journey to the Hidden Temple:**\n   * The group travels through diverse landscapes, facing natural hazards and wildlife.\n   * Caelum's survival skills and Aiden's tracking abilities are crucial.\n4. **Solving the Riddle of the Entrance:**\n   * Arriving at the temple's supposed location, they find a riddle-protected entrance.\n   * Bella and Dara collaborate to solve the riddle, revealing the hidden temple.\n5. **Exploration of the Temple:**\n   * Inside the temple, they encounter traps, puzzles, and ancient guardians.\n   * The group's problem-solving skills and combat prowess are tested.\n6. **Discovery of Ancient Relics:**\n   * They discover a chamber filled with ancient relics and manuscripts.\n   * Bella deciphers texts revealing lore about the sinister organization and ways to counter it.\n7. **Betrayal and Conflict:**\n   * If allied with the rival adventurers, a betrayal occurs over the division of treasure.\n   * If they are rivals, the other group attempts to ambush them to claim the relics.\n8. **Securing the Relics:**\n   * A tense battle or negotiation ensues, determining the fate of the relics.\n   * The group must decide what to do with these powerful and potentially dangerous items.\n9. **Return Journey with Complications:**\n   * On their way back, they face challenges like pursuing enemies or a natural disaster.\n   * Their decisions during these events shape their reputation and future adventures.\n10. **Debriefing and Plotting the Next Move:**\n    * Safely back in Goldcrest, they analyze the acquired knowledge and relics.\n    * The session ends with the group planning their next steps in countering the organization, potentially setting up for a larger confrontation.",
              timestamp: 1705720335882,
            },
          },
          name: "Session 5",
          type: "text",
        },
        "-NoZr1oFz9nwLjcRHD37": {
          content:
            "1. **Rising Tension in Goldcrest:**\n   * The session begins with an atmosphere of unease in Goldcrest, as news of the sinister organization's activities spreads.\n   * The group notices increased guard presence and wary citizens.\n2. **Urgent Meeting with the Mayor:**\n   * The Mayor urgently summons the group, revealing a threat of an imminent attack on the town by the organization.\n   * The group is asked to help organize the town's defenses.\n3. **Fortifying Goldcrest:**\n   * The party splits up to assist in different aspects of the town's preparation: fortifying defenses, training militia, and setting up strategic traps.\n   * Bella works on magical defenses, while Caelum and Aiden focus on physical fortifications and Dara gathers intelligence.\n4. **Interception of a Scout Group:**\n   * Dara's intelligence leads to the discovery of a scout group from the organization.\n   * The group intercepts them, gaining crucial information about the impending attack.\n5. **Nightfall and the Beginning of the Attack:**\n   * As night falls, the organization launches its assault on Goldcrest.\n   * The group faces waves of attackers, testing their combat strategy and the effectiveness of their preparations.\n6. **Protecting Key Locations:**\n   * They split up to defend key locations in the town: the town hall, the marketplace, and the residential areas.\n   * Each member faces unique challenges and moral dilemmas during the defense.\n7. **Confrontation with the Enemy Commander:**\n   * The group reconvenes to confront the enemy commander, leading to a climactic battle.\n   * During the battle, they uncover hints of a deeper motive behind the attack.\n8. **Turning the Tide:**\n   * With the commander defeated, the group rallies the town's defenders to push back the remaining attackers.\n   * The battle ends with the town successfully defended, but at a cost.\n9. **Aftermath and Recognition:**\n   * In the aftermath, the town mourns its losses but celebrates its victory.\n   * The Mayor and townsfolk commend the group for their bravery, solidifying their status as heroes of Goldcrest.\n10. **A New Threat Emerges:**\n    * As the session concludes, they receive a cryptic message or discover a clue indicating that the organization was merely a pawn in a larger, more sinister plan.\n    * The group must decide whether to pursue this new threat or deal with other emerging challenges.",
          contentHistory: {
            "-NoZr2hJNUePD2Sctgen": {
              author: "John Doe",
              content:
                "1. **Rising Tension in Goldcrest:**\n   * The session begins with an atmosphere of unease in Goldcrest, as news of the sinister organization's activities spreads.\n   * The group notices increased guard presence and wary citizens.\n2. **Urgent Meeting with the Mayor:**\n   * The Mayor urgently summons the group, revealing a threat of an imminent attack on the town by the organization.\n   * The group is asked to help organize the town's defenses.\n3. **Fortifying Goldcrest:**\n   * The party splits up to assist in different aspects of the town's preparation: fortifying defenses, training militia, and setting up strategic traps.\n   * Bella works on magical defenses, while Caelum and Aiden focus on physical fortifications and Dara gathers intelligence.\n4. **Interception of a Scout Group:**\n   * Dara's intelligence leads to the discovery of a scout group from the organization.\n   * The group intercepts them, gaining crucial information about the impending attack.\n5. **Nightfall and the Beginning of the Attack:**\n   * As night falls, the organization launches its assault on Goldcrest.\n   * The group faces waves of attackers, testing their combat strategy and the effectiveness of their preparations.\n6. **Protecting Key Locations:**\n   * They split up to defend key locations in the town: the town hall, the marketplace, and the residential areas.\n   * Each member faces unique challenges and moral dilemmas during the defense.\n7. **Confrontation with the Enemy Commander:**\n   * The group reconvenes to confront the enemy commander, leading to a climactic battle.\n   * During the battle, they uncover hints of a deeper motive behind the attack.\n8. **Turning the Tide:**\n   * With the commander defeated, the group rallies the town's defenders to push back the remaining attackers.\n   * The battle ends with the town successfully defended, but at a cost.\n9. **Aftermath and Recognition:**\n   * In the aftermath, the town mourns its losses but celebrates its victory.\n   * The Mayor and townsfolk commend the group for their bravery, solidifying their status as heroes of Goldcrest.\n10. **A New Threat Emerges:**\n    * As the session concludes, they receive a cryptic message or discover a clue indicating that the organization was merely a pawn in a larger, more sinister plan.\n    * The group must decide whether to pursue this new threat or deal with other emerging challenges.",
              timestamp: 1705720429907,
            },
          },
          name: "Session 6",
          type: "text",
        },
        "-NoZrGH17gPgbRHp84B3": {
          content:
            "1. **Debriefing and New Information:**\n   * The session starts with the group debriefing after the attack on Goldcrest.\n   * They examine the cryptic message/clue and realize it points to a mysterious figure known as \"The Shadow Weaver.\"\n2. **Researching \"The Shadow Weaver\":**\n   * The group splits up to gather information about this enigmatic adversary.\n   * Bella researches ancient texts, Aiden scouts for rumors, Caelum consults his religious contacts, and Dara taps into the underworld network.\n3. **A Sudden Disappearance:**\n   * A key ally or NPC goes missing, adding urgency to their quest.\n   * The group tracks leads, uncovering a trail that points to an abandoned fortress.\n4. **Journey to the Fortress:**\n   * On their way, they encounter refugees who tell tales of strange occurrences and dark magic in the area surrounding the fortress.\n   * Environmental challenges and minor skirmishes test their resolve.\n5. **Infiltrating the Fortress:**\n   * They discover the fortress shrouded in dark magic and heavily guarded.\n   * The group plans a stealthy approach, utilizing Dara's skills and Aiden's knowledge of the terrain.\n6. **Encounter with Dark Minions:**\n   * Inside, they face off against the Shadow Weaver's minions, revealing the extent of the enemy's power.\n   * Strategic combat and clever use of the environment are key to their success.\n7. **Rescuing the Captive:**\n   * They find the missing ally/NPC, learning valuable information about the Shadow Weaver's plans.\n   * The rescue mission requires careful coordination and quick thinking.\n8. **Confrontation with the Shadow Weaver's Lieutenant:**\n   * The group confronts a high-ranking lieutenant of the Shadow Weaver, a challenging adversary with unique abilities.\n   * The outcome of this battle provides significant insights into the Shadow Weaver's weaknesses.\n9. **Escaping the Fortress:**\n   * With the fortress's defenses alerted, the group must escape in a high-stakes chase sequence.\n   * Quick decision-making and teamwork are crucial to navigate through traps and pursuing enemies.\n10. **Planning the Next Move:**\n    * Back in safety, the group assesses the information gathered.\n    * The session ends with them planning their next move against the Shadow Weaver, setting the stage for a direct confrontation.",
          contentHistory: {
            "-NoZrIWI-qDncPl9qPDN": {
              author: "John Doe",
              content:
                "1. **Debriefing and New Information:**\n   * The session starts with the group debriefing after the attack on Goldcrest.\n   * They examine the cryptic message/clue and realize it points to a mysterious figure known as \"The Shadow Weaver.\"\n2. **Researching \"The Shadow Weaver\":**\n   * The group splits up to gather information about this enigmatic adversary.\n   * Bella researches ancient texts, Aiden scouts for rumors, Caelum consults his religious contacts, and Dara taps into the underworld network.\n3. **A Sudden Disappearance:**\n   * A key ally or NPC goes missing, adding urgency to their quest.\n   * The group tracks leads, uncovering a trail that points to an abandoned fortress.\n4. **Journey to the Fortress:**\n   * On their way, they encounter refugees who tell tales of strange occurrences and dark magic in the area surrounding the fortress.\n   * Environmental challenges and minor skirmishes test their resolve.\n5. **Infiltrating the Fortress:**\n   * They discover the fortress shrouded in dark magic and heavily guarded.\n   * The group plans a stealthy approach, utilizing Dara's skills and Aiden's knowledge of the terrain.\n6. **Encounter with Dark Minions:**\n   * Inside, they face off against the Shadow Weaver's minions, revealing the extent of the enemy's power.\n   * Strategic combat and clever use of the environment are key to their success.\n7. **Rescuing the Captive:**\n   * They find the missing ally/NPC, learning valuable information about the Shadow Weaver's plans.\n   * The rescue mission requires careful coordination and quick thinking.\n8. **Confrontation with the Shadow Weaver's Lieutenant:**\n   * The group confronts a high-ranking lieutenant of the Shadow Weaver, a challenging adversary with unique abilities.\n   * The outcome of this battle provides significant insights into the Shadow Weaver's weaknesses.\n9. **Escaping the Fortress:**\n   * With the fortress's defenses alerted, the group must escape in a high-stakes chase sequence.\n   * Quick decision-making and teamwork are crucial to navigate through traps and pursuing enemies.\n10. **Planning the Next Move:**\n    * Back in safety, the group assesses the information gathered.\n    * The session ends with them planning their next move against the Shadow Weaver, setting the stage for a direct confrontation.",
              timestamp: 1705720494674,
            },
          },
          name: "Session 7",
          type: "text",
        },
        "-NoZrWjc99ADo4jkcRTT": {
          content:
            "1. **Uncovering the Shadow Weaver's Plan:**\n   * The session begins with the group analyzing the information obtained from the fortress.\n   * They deduce that the Shadow Weaver is seeking an ancient artifact known as the \"Eclipse Amulet\" to gain immense power.\n2. **Race to Find the Eclipse Amulet:**\n   * Realizing the urgency, the group decides to find the Eclipse Amulet before the Shadow Weaver does.\n   * Their search leads them to an ancient, hidden temple rumored to house the amulet.\n3. **Encounter with a Wise Oracle:**\n   * On their way, they meet an oracle who provides cryptic warnings and prophecies about their journey.\n   * The oracle hints at the challenges they will face and the potential consequences of their choices.\n4. **Navigating the Hidden Temple:**\n   * The temple is filled with complex traps, puzzles, and ancient guardians.\n   * Each member's skills are tested as they navigate through these challenges.\n5. **Revelation of the Temple's History:**\n   * Inside the temple, they find murals and texts revealing the history of the Eclipse Amulet and its dangerous power.\n   * Bella deciphers the texts, uncovering a ritual to safely contain the amulet's power.\n6. **Discovery of the Eclipse Amulet:**\n   * They locate the amulet in a grand chamber, guarded by a powerful ancient construct.\n   * A challenging battle ensues, requiring strategy and coordination to defeat the guardian.\n7. **The Amulet's Temptation:**\n   * Upon acquiring the amulet, the group faces a moral dilemma as the amulet tempts them with promises of power.\n   * They must decide whether to use the amulet, contain it, or destroy it.\n8. **Ambush by the Shadow Weaver's Forces:**\n   * As they resolve the dilemma with the amulet, the Shadow Weaver's forces ambush them, attempting to seize the amulet.\n   * The group must protect the amulet while fighting off the attackers.\n9. **Escape and Pursuit:**\n   * After repelling the ambush, they make a hasty escape from the temple, now collapsing due to the unleashed energies.\n   * A thrilling chase ensues as they are pursued by the Shadow Weaver's minions.\n10. **Regrouping and Foreshadowing:**\n    * Safely away from the temple, the group assesses their situation.\n    * The session ends with a foreboding message from the Shadow Weaver, hinting at a final confrontation.",
          contentHistory: {
            "-NoZrXTpzvrJCLj1JJtv": {
              author: "John Doe",
              content:
                "1. **Uncovering the Shadow Weaver's Plan:**\n   * The session begins with the group analyzing the information obtained from the fortress.\n   * They deduce that the Shadow Weaver is seeking an ancient artifact known as the \"Eclipse Amulet\" to gain immense power.\n2. **Race to Find the Eclipse Amulet:**\n   * Realizing the urgency, the group decides to find the Eclipse Amulet before the Shadow Weaver does.\n   * Their search leads them to an ancient, hidden temple rumored to house the amulet.\n3. **Encounter with a Wise Oracle:**\n   * On their way, they meet an oracle who provides cryptic warnings and prophecies about their journey.\n   * The oracle hints at the challenges they will face and the potential consequences of their choices.\n4. **Navigating the Hidden Temple:**\n   * The temple is filled with complex traps, puzzles, and ancient guardians.\n   * Each member's skills are tested as they navigate through these challenges.\n5. **Revelation of the Temple's History:**\n   * Inside the temple, they find murals and texts revealing the history of the Eclipse Amulet and its dangerous power.\n   * Bella deciphers the texts, uncovering a ritual to safely contain the amulet's power.\n6. **Discovery of the Eclipse Amulet:**\n   * They locate the amulet in a grand chamber, guarded by a powerful ancient construct.\n   * A challenging battle ensues, requiring strategy and coordination to defeat the guardian.\n7. **The Amulet's Temptation:**\n   * Upon acquiring the amulet, the group faces a moral dilemma as the amulet tempts them with promises of power.\n   * They must decide whether to use the amulet, contain it, or destroy it.\n8. **Ambush by the Shadow Weaver's Forces:**\n   * As they resolve the dilemma with the amulet, the Shadow Weaver's forces ambush them, attempting to seize the amulet.\n   * The group must protect the amulet while fighting off the attackers.\n9. **Escape and Pursuit:**\n   * After repelling the ambush, they make a hasty escape from the temple, now collapsing due to the unleashed energies.\n   * A thrilling chase ensues as they are pursued by the Shadow Weaver's minions.\n10. **Regrouping and Foreshadowing:**\n    * Safely away from the temple, the group assesses their situation.\n    * The session ends with a foreboding message from the Shadow Weaver, hinting at a final confrontation.",
              timestamp: 1705720555956,
            },
          },
          name: "Session 8",
          type: "text",
        },
        "-NoZrcJXTzIUD6iXTnm0": {
          content:
            "1. **Tensions Rise in Goldcrest:**\n   * The session begins with the group returning to Goldcrest, where tensions are high due to the impending threat of the Shadow Weaver.\n   * The city is fortifying its defenses in preparation for a possible attack.\n2. **Decoding the Shadow Weaver's Message:**\n   * The group deciphers the Shadow Weaver's foreboding message, revealing a location for the final confrontation.\n   * They realize this is likely a trap, but also their best chance to end the threat.\n3. **Gathering Allies and Resources:**\n   * Recognizing the need for support, they rally their allies in Goldcrest, including the Thieves' Guild, the Mage's Circle, and the City Guard.\n   * They also gather magical items, weapons, and information to aid in the battle.\n4. **Strategic Planning:**\n   * The group spends time strategizing, considering different approaches to confront the Shadow Weaver.\n   * They plan for various scenarios, accounting for the Shadow Weaver's known powers and minions.\n5. **Journey to the Confrontation Site:**\n   * They travel to the designated location, a desolate area known for its strong magical energies.\n   * Along the way, they encounter and overcome minor traps and scouts of the Shadow Weaver.\n6. **Ambushed by Enemy Forces:**\n   * Nearing their destination, they are ambushed by a contingent of the Shadow Weaver's forces.\n   * A dynamic battle ensues, testing their readiness and depleting some of their resources.\n7. **Unraveling the Shadow Weaver's Deception:**\n   * After the ambush, they discover that the location was a diversion, part of the Shadow Weaver's plan to attack Goldcrest directly.\n   * They rush back to the city, using magic or swift transportation to return as quickly as possible.\n8. **Defending Goldcrest:**\n   * Arriving back in Goldcrest, they find the city under siege.\n   * The group splits up to defend key areas, aid their allies, and protect the civilians.\n9. **Confrontation with the Shadow Weaver:**\n   * Amidst the chaos, the Shadow Weaver reveals himself, initiating the final showdown.\n   * This epic battle combines their combat skills, strategic planning, and the artifacts they've gathered.\n10. **Aftermath and Resolution:**\n    * With the Shadow Weaver defeated, they deal with the aftermath of the battle, assisting in the city's recovery.\n    * The session concludes with recognition of their heroism and a celebration of their victory, setting the stage for future adventures or the conclusion of the campaign.",
          contentHistory: {
            "-NoZrmojzq5_XTzLS3jh": {
              author: "John Doe",
              content:
                "1. **Tensions Rise in Goldcrest:**\n   * The session begins with the group returning to Goldcrest, where tensions are high due to the impending threat of the Shadow Weaver.\n   * The city is fortifying its defenses in preparation for a possible attack.\n2. **Decoding the Shadow Weaver's Message:**\n   * The group deciphers the Shadow Weaver's foreboding message, revealing a location for the final confrontation.\n   * They realize this is likely a trap, but also their best chance to end the threat.\n3. **Gathering Allies and Resources:**\n   * Recognizing the need for support, they rally their allies in Goldcrest, including the Thieves' Guild, the Mage's Circle, and the City Guard.\n   * They also gather magical items, weapons, and information to aid in the battle.\n4. **Strategic Planning:**\n   * The group spends time strategizing, considering different approaches to confront the Shadow Weaver.\n   * They plan for various scenarios, accounting for the Shadow Weaver's known powers and minions.\n5. **Journey to the Confrontation Site:**\n   * They travel to the designated location, a desolate area known for its strong magical energies.\n   * Along the way, they encounter and overcome minor traps and scouts of the Shadow Weaver.\n6. **Ambushed by Enemy Forces:**\n   * Nearing their destination, they are ambushed by a contingent of the Shadow Weaver's forces.\n   * A dynamic battle ensues, testing their readiness and depleting some of their resources.\n7. **Unraveling the Shadow Weaver's Deception:**\n   * After the ambush, they discover that the location was a diversion, part of the Shadow Weaver's plan to attack Goldcrest directly.\n   * They rush back to the city, using magic or swift transportation to return as quickly as possible.\n8. **Defending Goldcrest:**\n   * Arriving back in Goldcrest, they find the city under siege.\n   * The group splits up to defend key areas, aid their allies, and protect the civilians.\n9. **Confrontation with the Shadow Weaver:**\n   * Amidst the chaos, the Shadow Weaver reveals himself, initiating the final showdown.\n   * This epic battle combines their combat skills, strategic planning, and the artifacts they've gathered.\n10. **Aftermath and Resolution:**\n    * With the Shadow Weaver defeated, they deal with the aftermath of the battle, assisting in the city's recovery.\n    * The session concludes with recognition of their heroism and a celebration of their victory, setting the stage for future adventures or the conclusion of the campaign.",
              timestamp: 1705720622894,
            },
          },
          name: "Session 9",
          type: "text",
        },
        "-NoZtblryTIUXmtjb2e_": {
          content:
            "1. **The Aftermath of Victory:**\n   * The session begins with the heroes dealing with the aftermath of their epic battle against the Shadow Weaver.\n   * Goldcrest is recovering, but there's a sense of unease about lingering threats or unseen consequences of the battle.\n2. **Mysterious Disappearances:**\n   * Reports come in about mysterious disappearances of key figures who aided in the battle, including some allies.\n   * The group decides to investigate, fearing a new threat is emerging.\n3. **Clues to a Dark Cult:**\n   * Their investigation uncovers evidence of a dark cult that has been operating in the shadows, possibly remnants of the Shadow Weaver’s followers.\n   * They find cryptic symbols and messages pointing to an ancient, forbidden ritual.\n4. **Encounter with a Survivor:**\n   * They rescue a survivor from the cult who provides valuable information but is deeply traumatized.\n   * Bella uses her magical abilities to glean more information from the survivor's fragmented memories.\n5. **Journey to the Cult's Stronghold:**\n   * The clues lead them to a remote area where the cult is believed to be performing the ritual.\n   * The journey is fraught with natural obstacles and minor skirmishes with cult scouts.\n6. **Infiltrating the Cult's Lair:**\n   * They discover the cult's hidden lair, a series of underground caverns.\n   * Stealth and strategy are key as they navigate through the lair, avoiding or confronting the cultists.\n7. **Preventing the Dark Ritual:**\n   * The group finds the cultists in the midst of performing a powerful and dangerous ritual.\n   * A high-stakes battle ensues, with the group aiming to disrupt the ritual and defeat the cultists.\n8. **Revelation of a Greater Evil:**\n   * In the climax of the battle, they learn that the ritual was meant to summon a far more powerful and ancient evil than the Shadow Weaver.\n   * The revelation hints at a larger cosmic threat that looms over their world.\n9. **Securing the Lair and Relics:**\n   * After thwarting the ritual, they secure the lair and find various dark relics and tomes.\n   * Decisions need to be made about how to safely handle these dangerous items.\n10. **Planning the Next Steps:**\n    * Back in Goldcrest, the group is celebrated for their bravery, but they are also contemplative about the future.\n    * The session ends with them planning how to address the newfound greater evil, setting the stage for a new arc in the campaign.",
          contentHistory: {
            "-NoZtcZJC9ZnEif79wFF": {
              author: "John Doe",
              content:
                "1. **The Aftermath of Victory:**\n   * The session begins with the heroes dealing with the aftermath of their epic battle against the Shadow Weaver.\n   * Goldcrest is recovering, but there's a sense of unease about lingering threats or unseen consequences of the battle.\n2. **Mysterious Disappearances:**\n   * Reports come in about mysterious disappearances of key figures who aided in the battle, including some allies.\n   * The group decides to investigate, fearing a new threat is emerging.\n3. **Clues to a Dark Cult:**\n   * Their investigation uncovers evidence of a dark cult that has been operating in the shadows, possibly remnants of the Shadow Weaver’s followers.\n   * They find cryptic symbols and messages pointing to an ancient, forbidden ritual.\n4. **Encounter with a Survivor:**\n   * They rescue a survivor from the cult who provides valuable information but is deeply traumatized.\n   * Bella uses her magical abilities to glean more information from the survivor's fragmented memories.\n5. **Journey to the Cult's Stronghold:**\n   * The clues lead them to a remote area where the cult is believed to be performing the ritual.\n   * The journey is fraught with natural obstacles and minor skirmishes with cult scouts.\n6. **Infiltrating the Cult's Lair:**\n   * They discover the cult's hidden lair, a series of underground caverns.\n   * Stealth and strategy are key as they navigate through the lair, avoiding or confronting the cultists.\n7. **Preventing the Dark Ritual:**\n   * The group finds the cultists in the midst of performing a powerful and dangerous ritual.\n   * A high-stakes battle ensues, with the group aiming to disrupt the ritual and defeat the cultists.\n8. **Revelation of a Greater Evil:**\n   * In the climax of the battle, they learn that the ritual was meant to summon a far more powerful and ancient evil than the Shadow Weaver.\n   * The revelation hints at a larger cosmic threat that looms over their world.\n9. **Securing the Lair and Relics:**\n   * After thwarting the ritual, they secure the lair and find various dark relics and tomes.\n   * Decisions need to be made about how to safely handle these dangerous items.\n10. **Planning the Next Steps:**\n    * Back in Goldcrest, the group is celebrated for their bravery, but they are also contemplative about the future.\n    * The session ends with them planning how to address the newfound greater evil, setting the stage for a new arc in the campaign.",
              timestamp: 1705721105171,
            },
          },
          name: "Session 10",
          type: "text",
        },
      },
    },
    "-No_-LVShY-D5vJKwo2I": {
      inventory: false,
      listIndex: 3,
      name: "Places",
      tabs: {
        "-No_-aZmas1aL9-EaPc_": {
          content:
            "* **Location:** Nestled in a valley surrounded by gentle hills, with a river running along its eastern edge.\n* **Appearance:** A bustling medieval town with cobblestone streets, vibrant marketplaces, and a mix of wooden and stone buildings. The town is fortified with a sturdy stone wall and guarded gates.\n* **Key Features:**\n  * **Town Hall:** A grand, two-story building where the Mayor and town council reside.\n  * **Market Square:** The heart of the town, bustling with vendors, entertainers, and townsfolk.\n  * **Goldcrest Keep:** An old but well-maintained keep overlooking the town, serving as a military stronghold and a symbol of protection.\n* **Atmosphere:** A hub of commerce and trade, known for its friendly inhabitants and diverse community. The town hosts regular festivals and fairs, adding to its lively character.\n* **Population:** A mix of humans, elves, dwarves, and other races, living in harmony and contributing to the town's multicultural essence.",
          contentHistory: {
            "-No_0Li_RpruGxzwTs7k": {
              author: "John Doe",
              content:
                "* **Location:** Nestled in a valley surrounded by gentle hills, with a river running along its eastern edge.\n* **Appearance:** A bustling medieval town with cobblestone streets, vibrant marketplaces, and a mix of wooden and stone buildings. The town is fortified with a sturdy stone wall and guarded gates.\n* **Key Features:**\n  * **Town Hall:** A grand, two-story building where the Mayor and town council reside.\n  * **Market Square:** The heart of the town, bustling with vendors, entertainers, and townsfolk.\n  * **Goldcrest Keep:** An old but well-maintained keep overlooking the town, serving as a military stronghold and a symbol of protection.\n* **Atmosphere:** A hub of commerce and trade, known for its friendly inhabitants and diverse community. The town hosts regular festivals and fairs, adding to its lively character.\n* **Population:** A mix of humans, elves, dwarves, and other races, living in harmony and contributing to the town's multicultural essence.",
              timestamp: 1705723129252,
            },
          },
          name: "Goldcrest",
          type: "text",
        },
        "-No_-ciRAqNauGnsNbVb": {
          content:
            "* **Location:** Situated near the center of Goldcrest, close to the market square.\n* **Appearance:** A charming, two-story timber building with a warm, inviting glow from its windows. The tavern sign, featuring a jovially laughing dragon, sways gently in the breeze.\n* **Interior:** The inside is cozy and well-lit, with a large fireplace, wooden beams, and an assortment of tables and booths. The walls are adorned with various artifacts and paintings.\n* **Proprietor:** A charismatic and jovial half-orc who is well-liked by the locals and known for his storytelling.\n* **Patrons:** A regular gathering spot for adventurers, travelers, and local townsfolk, creating a lively atmosphere filled with stories, music, and laughter.\n* **Specialties:** Renowned for its hearty meals and a wide selection of ales and spirits, including a house-special ale named after the tavern.",
          contentHistory: {
            "-No_0NKfOL6oxvUOVOSe": {
              author: "John Doe",
              content:
                "* **Location:** Situated near the center of Goldcrest, close to the market square.\n* **Appearance:** A charming, two-story timber building with a warm, inviting glow from its windows. The tavern sign, featuring a jovially laughing dragon, sways gently in the breeze.\n* **Interior:** The inside is cozy and well-lit, with a large fireplace, wooden beams, and an assortment of tables and booths. The walls are adorned with various artifacts and paintings.\n* **Proprietor:** A charismatic and jovial half-orc who is well-liked by the locals and known for his storytelling.\n* **Patrons:** A regular gathering spot for adventurers, travelers, and local townsfolk, creating a lively atmosphere filled with stories, music, and laughter.\n* **Specialties:** Renowned for its hearty meals and a wide selection of ales and spirits, including a house-special ale named after the tavern.",
              timestamp: 1705723135850,
            },
          },
          name: '"Laughing Dragon" Tavern',
          type: "text",
        },
        "-No_-hGsMKKTi50kECjG": {
          content:
            "* **Location:** A dense, sprawling forest to the west of Goldcrest, known for its thick canopy and ancient trees.\n* **Appearance:** The forest has an enchanting yet eerie feel, with sunlight filtering through thick foliage, creating dappled shadows on the forest floor. Moss and vines cover much of the ground and trees.\n* **Inhabitants:** Home to a variety of wildlife, including some rare and magical creatures. Rumors suggest that spirits and other mystical beings dwell deep within.\n* **Reputation:** Locals tell tales of people getting lost or encountering strange phenomena. It's a place of both wonder and caution, with many myths and legends associated with it.",
          contentHistory: {
            "-No_0QpVA40-d7P1WwOP": {
              author: "John Doe",
              content:
                "* **Location:** A dense, sprawling forest to the west of Goldcrest, known for its thick canopy and ancient trees.\n* **Appearance:** The forest has an enchanting yet eerie feel, with sunlight filtering through thick foliage, creating dappled shadows on the forest floor. Moss and vines cover much of the ground and trees.\n* **Inhabitants:** Home to a variety of wildlife, including some rare and magical creatures. Rumors suggest that spirits and other mystical beings dwell deep within.\n* **Reputation:** Locals tell tales of people getting lost or encountering strange phenomena. It's a place of both wonder and caution, with many myths and legends associated with it.",
              timestamp: 1705723150175,
            },
          },
          name: "Mysterious Forest",
          type: "text",
        },
        "-No_-ibUWPqFHuXMwVMU": {
          content:
            "* **Location:** Concealed within the Mysterious Forest, its entrance hidden by dense undergrowth and shadowed by ancient trees.\n* **Appearance:** The cave entrance is narrow, leading to a network of dark, winding tunnels that open into larger chambers.\n* **Interior Features:**\n  * **Natural Formations:** Stalactites and stalagmites, along with underground streams and pools.\n  * **Ancient Symbols:** Some walls bear faded symbols and carvings, hinting at a forgotten history or lost civilization.\n* **Atmosphere:** A sense of mystery pervades the cave, with echoes of dripping water and the occasional distant growl of unknown creatures.\n* **Hazards:** Besides being a potential lair for creatures, the cave presents natural dangers like precarious ledges, slippery surfaces, and narrow passages.",
          contentHistory: {
            "-No_0SXot41wkmXHywzm": {
              author: "John Doe",
              content:
                "* **Location:** Concealed within the Mysterious Forest, its entrance hidden by dense undergrowth and shadowed by ancient trees.\n* **Appearance:** The cave entrance is narrow, leading to a network of dark, winding tunnels that open into larger chambers.\n* **Interior Features:**\n  * **Natural Formations:** Stalactites and stalagmites, along with underground streams and pools.\n  * **Ancient Symbols:** Some walls bear faded symbols and carvings, hinting at a forgotten history or lost civilization.\n* **Atmosphere:** A sense of mystery pervades the cave, with echoes of dripping water and the occasional distant growl of unknown creatures.\n* **Hazards:** Besides being a potential lair for creatures, the cave presents natural dangers like precarious ledges, slippery surfaces, and narrow passages.",
              timestamp: 1705723157171,
            },
          },
          name: "Hidden Cave",
          type: "text",
        },
        "-No_-juelTIR2hmAT_OM": {
          content:
            "* **Location:** Hidden in a rugged, mountainous region a few miles north of Goldcrest.\n* **Appearance:** The cave entrance is camouflaged by rocks and foliage. Inside, the cave extends into a network of tunnels and larger caverns.\n* **Interior Features:**\n  * **Living Quarters:** Roughly constructed wooden structures serving as living quarters for the bandits.\n  * **Storage Areas:** Various alcoves turned into storage for stolen goods and supplies.\n  * **Secret Passage:** A cleverly concealed passage leading to ancient underground ruins.\n* **Atmosphere:** The cave has an air of danger and is shrouded in darkness, save for the occasional flickering torchlight.\n* **Bandit Presence:** Guarded by bandits and traps, making infiltration a challenging task.",
          contentHistory: {
            "-No_49-RJOziYhAuplz7": {
              author: "John Doe",
              content:
                "* **Location:** Hidden in a rugged, mountainous region a few miles north of Goldcrest.\n* **Appearance:** The cave entrance is camouflaged by rocks and foliage. Inside, the cave extends into a network of tunnels and larger caverns.\n* **Interior Features:**\n  * **Living Quarters:** Roughly constructed wooden structures serving as living quarters for the bandits.\n  * **Storage Areas:** Various alcoves turned into storage for stolen goods and supplies.\n  * **Secret Passage:** A cleverly concealed passage leading to ancient underground ruins.\n* **Atmosphere:** The cave has an air of danger and is shrouded in darkness, save for the occasional flickering torchlight.\n* **Bandit Presence:** Guarded by bandits and traps, making infiltration a challenging task.",
              timestamp: 1705724125723,
            },
          },
          name: "Bandit Hideout Cave",
          type: "text",
        },
        "-No_-oniFEq-wSm30kfU": {
          content:
            "* **Location:** Accessible through the secret passage in the Bandit Hideout Cave.\n* **Appearance:** A labyrinth of stone corridors and grand chambers, adorned with ancient carvings and statues.\n* **Key Features:**\n  * **Relic Chamber:** Houses old artifacts, relics, and scrolls of forgotten lore.\n  * **Magical Locks:** Doors and chests secured with complex magical locks requiring clever puzzle-solving to open.\n  * **Mystical Symbols:** The walls are etched with symbols that hint at arcane knowledge and long-lost civilizations.\n* **Atmosphere:** A sense of ancient mystery and dormant power pervades the air, mixed with the thrill of uncovering lost secrets.\n* **Hazards:** The ruins are protected by magical traps and ancient guardians, presenting both a historical treasure trove and a deadly challenge.",
          contentHistory: {
            "-No_4CIw06-dyXNgJfVh": {
              author: "John Doe",
              content:
                "* **Location:** Accessible through the secret passage in the Bandit Hideout Cave.\n* **Appearance:** A labyrinth of stone corridors and grand chambers, adorned with ancient carvings and statues.\n* **Key Features:**\n  * **Relic Chamber:** Houses old artifacts, relics, and scrolls of forgotten lore.\n  * **Magical Locks:** Doors and chests secured with complex magical locks requiring clever puzzle-solving to open.\n  * **Mystical Symbols:** The walls are etched with symbols that hint at arcane knowledge and long-lost civilizations.\n* **Atmosphere:** A sense of ancient mystery and dormant power pervades the air, mixed with the thrill of uncovering lost secrets.\n* **Hazards:** The ruins are protected by magical traps and ancient guardians, presenting both a historical treasure trove and a deadly challenge.",
              timestamp: 1705724139259,
            },
          },
          name: "Ancient Underground Ruins",
          type: "text",
        },
        "-No_-qOjGHNoN_ynFBBs": {
          content:
            "* **Location:** Situated atop a remote and craggy hill, surrounded by a dense forest.\n* **Appearance:** A once-majestic fortress now in ruins, with crumbling walls and overgrown vegetation.\n* **Key Features:**\n  * **Dilapidated Towers:** Provide a strategic view of the surrounding area, though they are in a precarious state.\n  * **Underground Dungeons:** A network of cells and torture chambers, hinting at the fortress's grim past.\n  * **Central Courtyard:** Overrun with vegetation, serving as a battleground against the Shadow Weaver's forces.\n* **Atmosphere:** An eerie silence envelopes the fortress, with the wind whistling through broken battlements, adding to the sense of desolation and forgotten battles.\n* **Significance:** A strategic location in the campaign, holding secrets and key information about the Shadow Weaver.",
          contentHistory: {
            "-No_5E1NFTKFC-lawSPb": {
              author: "John Doe",
              content:
                "* **Location:** Situated atop a remote and craggy hill, surrounded by a dense forest.\n* **Appearance:** A once-majestic fortress now in ruins, with crumbling walls and overgrown vegetation.\n* **Key Features:**\n  * **Dilapidated Towers:** Provide a strategic view of the surrounding area, though they are in a precarious state.\n  * **Underground Dungeons:** A network of cells and torture chambers, hinting at the fortress's grim past.\n  * **Central Courtyard:** Overrun with vegetation, serving as a battleground against the Shadow Weaver's forces.\n* **Atmosphere:** An eerie silence envelopes the fortress, with the wind whistling through broken battlements, adding to the sense of desolation and forgotten battles.\n* **Significance:** A strategic location in the campaign, holding secrets and key information about the Shadow Weaver.",
              timestamp: 1705724408471,
            },
          },
          name: "Abandoned Fortress",
          type: "text",
        },
        "-No_-rnSFDCV7Eqv0wrY": {
          content:
            "* **Location:** A secluded glade deep within the Mysterious Forest.\n* **Appearance:** A serene clearing surrounded by ancient trees, with a small, tranquil pond at its center reflecting the sky.\n* **Key Features:**\n  * **Oracle's Abode:** A simple, yet mystical hut where the oracle resides, filled with various artifacts, tomes, and potions.\n  * **Sacred Altar:** A stone altar adorned with symbols and offering bowls, used for divination and rituals.\n  * **Enchanted Wildlife:** The glade is home to rare and magical creatures, some of which are said to communicate with the oracle.\n* **Atmosphere:** The location exudes a sense of peace and ancient wisdom, with a palpable magical aura.\n* **Oracle's Role:** A key figure in the campaign, providing guidance, prophecies, and warnings to the adventurers.",
          contentHistory: {
            "-No_5H5uTGstAnMyMMMb": {
              author: "John Doe",
              content:
                "* **Location:** A secluded glade deep within the Mysterious Forest.\n* **Appearance:** A serene clearing surrounded by ancient trees, with a small, tranquil pond at its center reflecting the sky.\n* **Key Features:**\n  * **Oracle's Abode:** A simple, yet mystical hut where the oracle resides, filled with various artifacts, tomes, and potions.\n  * **Sacred Altar:** A stone altar adorned with symbols and offering bowls, used for divination and rituals.\n  * **Enchanted Wildlife:** The glade is home to rare and magical creatures, some of which are said to communicate with the oracle.\n* **Atmosphere:** The location exudes a sense of peace and ancient wisdom, with a palpable magical aura.\n* **Oracle's Role:** A key figure in the campaign, providing guidance, prophecies, and warnings to the adventurers.",
              timestamp: 1705724421049,
            },
          },
          name: "The Oracle's Location",
          type: "text",
        },
        "-No_-t5EY8iawSpg3u6d": {
          content:
            "* **Location:** Nestled in an almost inaccessible mountain range, shrouded in mists and legends.\n* **Appearance:** An ancient temple built from weathered stone, covered in moss and climbing vines, with intricate carvings of celestial motifs.\n* **Key Features:**\n  * **Grand Entrance:** Adorned with statues of mythical guardians, leading to a vast, dimly lit hall.\n  * **Central Chamber:** Where the Eclipse Amulet is kept, protected by complex magical wards and ancient puzzles.\n  * **Library of Lore:** A section containing scrolls and tomes about the history and powers of the Eclipse Amulet.\n* **Atmosphere:** The temple exudes an aura of ancient magic and solemnity, with a palpable sense of history in every stone.\n* **Challenges:** Guarded by magical traps, puzzles, and an ancient construct, making it a formidable location to explore.",
          contentHistory: {
            "-No_7-Pnk4yl9g8rQHX-": {
              author: "John Doe",
              content:
                "* **Location:** Nestled in an almost inaccessible mountain range, shrouded in mists and legends.\n* **Appearance:** An ancient temple built from weathered stone, covered in moss and climbing vines, with intricate carvings of celestial motifs.\n* **Key Features:**\n  * **Grand Entrance:** Adorned with statues of mythical guardians, leading to a vast, dimly lit hall.\n  * **Central Chamber:** Where the Eclipse Amulet is kept, protected by complex magical wards and ancient puzzles.\n  * **Library of Lore:** A section containing scrolls and tomes about the history and powers of the Eclipse Amulet.\n* **Atmosphere:** The temple exudes an aura of ancient magic and solemnity, with a palpable sense of history in every stone.\n* **Challenges:** Guarded by magical traps, puzzles, and an ancient construct, making it a formidable location to explore.",
              timestamp: 1705724872882,
            },
          },
          name: "Hidden Temple of the Eclipse Amulet",
          type: "text",
        },
        "-No_-uSGLDIrmXvk6DAV": {
          content:
            "* **Location:** Located at the edge of the Mysterious Forest, in a clearing filled with rare herbs and mystical flora.\n* **Appearance:** A quaint cottage built from natural materials, blending seamlessly with the surrounding environment.\n* **Key Features:**\n  * **Herb Garden:** A lush garden with a variety of magical and medicinal herbs.\n  * **Study Room:** Filled with books, scrolls, and artifacts collected by the sage over many years.\n  * **Observatory:** A small tower with a telescope for studying the stars and celestial events.\n* **Atmosphere:** The sage's abode is a place of knowledge and tranquility, resonating with the wisdom of its occupant.\n* **Sage's Role:** A mentor figure providing guidance, historical knowledge, and insights into mystical phenomena.",
          contentHistory: {
            "-No_7HyAq0Df3XYWTKIM": {
              author: "John Doe",
              content:
                "* **Location:** Located at the edge of the Mysterious Forest, in a clearing filled with rare herbs and mystical flora.\n* **Appearance:** A quaint cottage built from natural materials, blending seamlessly with the surrounding environment.\n* **Key Features:**\n  * **Herb Garden:** A lush garden with a variety of magical and medicinal herbs.\n  * **Study Room:** Filled with books, scrolls, and artifacts collected by the sage over many years.\n  * **Observatory:** A small tower with a telescope for studying the stars and celestial events.\n* **Atmosphere:** The sage's abode is a place of knowledge and tranquility, resonating with the wisdom of its occupant.\n* **Sage's Role:** A mentor figure providing guidance, historical knowledge, and insights into mystical phenomena.",
              timestamp: 1705724948874,
            },
          },
          name: "Wise Sage's Abode",
          type: "text",
        },
        "-No_-vkMJjaLHtPuZ2NG": {
          content:
            "* **Location:** A small settlement located a few hours' travel from Goldcrest, at the edge of a fertile farming region.\n* **Appearance:** A quaint village with thatched-roof cottages, well-tended fields, and a small central market square.\n* **Key Features:**\n  * **Village Hall:** A gathering place for meetings and social events.\n  * **Local Tavern:** A cozy spot where villagers and travelers share news and stories.\n  * **Surrounding Farmlands:** Fields and orchards providing sustenance for the village and nearby areas.\n* **Atmosphere:** The village has a close-knit community vibe, with friendly and hardworking inhabitants.\n* **Significance:** The village becomes a focal point in the campaign due to its struggles with the corrupted beasts and the heroes' intervention.",
          contentHistory: {
            "-No_7Jtu9mp4T4Ot1s5b": {
              author: "John Doe",
              content:
                "* **Location:** A small settlement located a few hours' travel from Goldcrest, at the edge of a fertile farming region.\n* **Appearance:** A quaint village with thatched-roof cottages, well-tended fields, and a small central market square.\n* **Key Features:**\n  * **Village Hall:** A gathering place for meetings and social events.\n  * **Local Tavern:** A cozy spot where villagers and travelers share news and stories.\n  * **Surrounding Farmlands:** Fields and orchards providing sustenance for the village and nearby areas.\n* **Atmosphere:** The village has a close-knit community vibe, with friendly and hardworking inhabitants.\n* **Significance:** The village becomes a focal point in the campaign due to its struggles with the corrupted beasts and the heroes' intervention.",
              timestamp: 1705724956793,
            },
          },
          name: "Nearby Village",
          type: "text",
        },
        "-No_-wzK_elbXpg_YxoK": {
          content:
            "* **Location:** A dense, shadowy forest encircling the village, known for its thick underbrush and ancient trees.\n* **Appearance:** The forest has a more foreboding presence than the Mysterious Forest, with gnarled trees and a canopy so thick it blocks out most of the sunlight.\n* **Key Features:**\n  * **Corrupted Shrine:** A hidden shrine deep within the forest, emanating dark magic.\n  * **Beast Dens:** Hidden lairs of the corrupted beasts, scattered throughout the forest.\n  * **Old Pathways:** Faint trails winding through the forest, remnants of old routes or animal paths.\n* **Atmosphere:** The forest feels oppressive and dangerous, with an unnerving silence and a sense of being watched.\n* **Role in the Campaign:** The setting for the group's investigation and confrontation with the source of corruption menacing the village.",
          contentHistory: {
            "-No_7L_7AHqhs3euxzTb": {
              author: "John Doe",
              content:
                "* **Location:** A dense, shadowy forest encircling the village, known for its thick underbrush and ancient trees.\n* **Appearance:** The forest has a more foreboding presence than the Mysterious Forest, with gnarled trees and a canopy so thick it blocks out most of the sunlight.\n* **Key Features:**\n  * **Corrupted Shrine:** A hidden shrine deep within the forest, emanating dark magic.\n  * **Beast Dens:** Hidden lairs of the corrupted beasts, scattered throughout the forest.\n  * **Old Pathways:** Faint trails winding through the forest, remnants of old routes or animal paths.\n* **Atmosphere:** The forest feels oppressive and dangerous, with an unnerving silence and a sense of being watched.\n* **Role in the Campaign:** The setting for the group's investigation and confrontation with the source of corruption menacing the village.",
              timestamp: 1705724963655,
            },
          },
          name: "Dark Forest Surrounding the Village",
          type: "text",
        },
        "-No_0-4eEpLK9hQxDORj": {
          content:
            "* **Location:** Deep within the Dark Forest surrounding the village, hidden away from common sight.\n* **Appearance:** An ancient stone shrine, overrun with twisted vines and dark, pulsating energies.\n* **Key Features:**\n  * **Altar of Corruption:** Central to the shrine, an altar emitting a dark aura, corrupting the surrounding area.\n  * **Decayed Statues:** Statues of forgotten deities, now defaced and oozing with dark magic.\n  * **Mystical Runes:** Runes carved into the shrine's structure, glowing with an ominous light.\n* **Atmosphere:** A palpable sense of malevolence and decay, as if the very air around the shrine is tainted.\n* **Role in the Campaign:** The source of the corruption affecting the forest and its creatures, serving as a key location for a cleansing ritual.",
          contentHistory: {
            "-No_7WFDTyApgT-QGUWq": {
              author: "John Doe",
              content:
                "* **Location:** Deep within the Dark Forest surrounding the village, hidden away from common sight.\n* **Appearance:** An ancient stone shrine, overrun with twisted vines and dark, pulsating energies.\n* **Key Features:**\n  * **Altar of Corruption:** Central to the shrine, an altar emitting a dark aura, corrupting the surrounding area.\n  * **Decayed Statues:** Statues of forgotten deities, now defaced and oozing with dark magic.\n  * **Mystical Runes:** Runes carved into the shrine's structure, glowing with an ominous light.\n* **Atmosphere:** A palpable sense of malevolence and decay, as if the very air around the shrine is tainted.\n* **Role in the Campaign:** The source of the corruption affecting the forest and its creatures, serving as a key location for a cleansing ritual.",
              timestamp: 1705725007373,
            },
          },
          name: "Corrupted Shrine in the Forest",
          type: "text",
        },
        "-No_00iN2w1vFjq5QSAl": {
          content:
            "* **Location:** A temporary encampment set up near the outskirts of the Mysterious Forest.\n* **Appearance:** A collection of tents and campfires, with equipment and supplies neatly organized.\n* **Key Features:**\n  * **Central Meeting Tent:** Where the rival group strategizes and discusses their plans.\n  * **Armory Area:** Stocked with weapons, armor, and adventuring gear.\n  * **Lookout Posts:** Strategically placed for security against potential threats.\n* **Atmosphere:** A mix of competitiveness and cautious respect, reflecting the relationship between the rival adventurers and the player's group.\n* **Significance:** A place of interaction, conflict, or alliance with the rival adventurer group, impacting the campaign's dynamics.",
          contentHistory: {
            "-No_7ibglqMMhExoX950": {
              author: "John Doe",
              content:
                "* **Location:** A temporary encampment set up near the outskirts of the Mysterious Forest.\n* **Appearance:** A collection of tents and campfires, with equipment and supplies neatly organized.\n* **Key Features:**\n  * **Central Meeting Tent:** Where the rival group strategizes and discusses their plans.\n  * **Armory Area:** Stocked with weapons, armor, and adventuring gear.\n  * **Lookout Posts:** Strategically placed for security against potential threats.\n* **Atmosphere:** A mix of competitiveness and cautious respect, reflecting the relationship between the rival adventurers and the player's group.\n* **Significance:** A place of interaction, conflict, or alliance with the rival adventurer group, impacting the campaign's dynamics.",
              timestamp: 1705725062123,
            },
          },
          name: "Rival Adventurer Group's Camp",
          type: "text",
        },
        "-No_028ZB9txpTXUvM0d": {
          content:
            "* **Location:** A remote, barren landscape, far from any settlements, known for its harsh conditions and eerie stillness.\n* **Appearance:** A vast, open expanse with jagged rocks, dry soil, and sparse vegetation, under a perpetually overcast sky.\n* **Key Features:**\n  * **Ancient Ruins:** Crumbling structures of a long-forgotten civilization, adding a sense of history and mystery.\n  * **Eerie Phenomena:** Unexplained lights, shadows, and whispers, contributing to the area's unsettling aura.\n  * **Natural Obstacles:** Ravines, sharp cliffs, and uneven terrain, posing physical challenges.\n* **Atmosphere:** A sense of foreboding and desolation, making it a fitting setting for a climactic battle.\n* **Role in the Campaign:** The intended site of the final showdown with the Shadow Weaver, though it turns out to be a diversion.",
          contentHistory: {
            "-No_7j2ilSGLtPnu4ykL": {
              author: "John Doe",
              content:
                "* **Location:** A remote, barren landscape, far from any settlements, known for its harsh conditions and eerie stillness.\n* **Appearance:** A vast, open expanse with jagged rocks, dry soil, and sparse vegetation, under a perpetually overcast sky.\n* **Key Features:**\n  * **Ancient Ruins:** Crumbling structures of a long-forgotten civilization, adding a sense of history and mystery.\n  * **Eerie Phenomena:** Unexplained lights, shadows, and whispers, contributing to the area's unsettling aura.\n  * **Natural Obstacles:** Ravines, sharp cliffs, and uneven terrain, posing physical challenges.\n* **Atmosphere:** A sense of foreboding and desolation, making it a fitting setting for a climactic battle.\n* **Role in the Campaign:** The intended site of the final showdown with the Shadow Weaver, though it turns out to be a diversion.",
              timestamp: 1705725063917,
            },
          },
          name: "The Desolate Area for Final Confrontation",
          type: "text",
        },
        "-No_03PozkI4sSlPgxGP": {
          content:
            "* **Location:** Concealed beneath an unassuming hillside, accessible through a network of underground passages.\n* **Appearance:** A series of interconnected caverns and chambers, artificially expanded and reinforced.\n* **Key Features:**\n  * **Ritual Chamber:** A large, dimly lit room where the cult conducts its dark rituals.\n  * **Prisoner Cells:** Small, crude cells used to hold captives for sacrifices or interrogation.\n  * **Library of Forbidden Knowledge:** Stacks of tomes and scrolls containing dark magic and forbidden secrets.\n* **Atmosphere:** The lair is oppressive and menacing, filled with the echoes of chanting and the sense of unseen eyes watching.\n* **Role in the Campaign:** The setting for a crucial mission to disrupt a dark ritual and learn more about the greater evil threatening the realm.",
          contentHistory: {
            "-No_7kuhzy079muW_k7W": {
              author: "John Doe",
              content:
                "* **Location:** Concealed beneath an unassuming hillside, accessible through a network of underground passages.\n* **Appearance:** A series of interconnected caverns and chambers, artificially expanded and reinforced.\n* **Key Features:**\n  * **Ritual Chamber:** A large, dimly lit room where the cult conducts its dark rituals.\n  * **Prisoner Cells:** Small, crude cells used to hold captives for sacrifices or interrogation.\n  * **Library of Forbidden Knowledge:** Stacks of tomes and scrolls containing dark magic and forbidden secrets.\n* **Atmosphere:** The lair is oppressive and menacing, filled with the echoes of chanting and the sense of unseen eyes watching.\n* **Role in the Campaign:** The setting for a crucial mission to disrupt a dark ritual and learn more about the greater evil threatening the realm.",
              timestamp: 1705725071532,
            },
          },
          name: "Cult's Hidden Lair",
          type: "text",
        },
      },
    },
    "-No_DdNtcMgxL08967tG": {
      inventory: false,
      listIndex: 0,
      name: "General",
      tabs: {
        "-No_DewrkrKuj_PI3tky": {
          content:
            "1. **Critical Success and Failures on Skill Checks:**\n   * Rolling a natural 20 on a skill check results in a critical success with added benefits.\n   * Rolling a natural 1 on a skill check leads to a critical failure with minor consequences or humorous outcomes.\n2. **Potion Drinking as a Bonus Action:**\n   * Consuming a potion only requires a bonus action instead of a standard action, allowing for more dynamic combat.\n3. **Hero Points:**\n   * Each player starts each session with 1 Hero Point, which can be used to reroll a dice roll or avoid death.\n   * Hero Points do not carry over between sessions.\n4. **Flexible Spellcasting:**\n   * Allow casters to swap out one spell from their list after a long rest, offering more flexibility in spell choice.\n5. **Rest Variations:**\n   * Adjust the length of short and long rests (e.g., 1 hour for a short rest, 6 hours for a long rest) to fit the campaign's pacing.\n6. **Death Saves Are Private:**\n   * Only the DM and the player making death saving throws know the results, adding tension for the other players.\n7. **Rule of Cool:**\n   * If a player describes an action in a particularly epic or creative way, they may receive a bonus or advantage on their roll.\n8. **Milestone Leveling:**\n   * Instead of tracking experience points, characters level up at key story milestones, ensuring the party levels together.\n9. **Action Points:**\n   * Players earn action points for good roleplaying, clever thinking, or just making the game more enjoyable. These points can be used for minor benefits in the game.\n10. **Encumbrance Simplified:**\n    * Simplify encumbrance rules to avoid micromanaging inventory (e.g., using common sense over strict weight limits).\n11. **Shared Inventory:**\n    * The party has a shared inventory or bag of holding for ease of managing group resources.\n12. **No Alignment Restrictions:**\n    * Characters are not strictly bound by their alignment, allowing for more nuanced moral decisions and character development.\n13. **Automatic Success on Familiar Tasks:**\n    * If a character is performing a task they are highly skilled at and not under pressure, they automatically succeed.\n14. **Revamped Healing:**\n    * Modify healing rules to suit the game's desired difficulty (e.g., more/less healing from spells and potions).\n15. **Quick Shopping:**\n    * Non-critical shopping can be done quickly with summary descriptions to keep the story moving.",
          contentHistory: {
            "-No_DhHXHE8AIAiPjpnZ": {
              author: "John Doe",
              content:
                "1. **Critical Success and Failures on Skill Checks:**\n   * Rolling a natural 20 on a skill check results in a critical success with added benefits.\n   * Rolling a natural 1 on a skill check leads to a critical failure with minor consequences or humorous outcomes.\n2. **Potion Drinking as a Bonus Action:**\n   * Consuming a potion only requires a bonus action instead of a standard action, allowing for more dynamic combat.\n3. **Hero Points:**\n   * Each player starts each session with 1 Hero Point, which can be used to reroll a dice roll or avoid death.\n   * Hero Points do not carry over between sessions.\n4. **Flexible Spellcasting:**\n   * Allow casters to swap out one spell from their list after a long rest, offering more flexibility in spell choice.\n5. **Rest Variations:**\n   * Adjust the length of short and long rests (e.g., 1 hour for a short rest, 6 hours for a long rest) to fit the campaign's pacing.\n6. **Death Saves Are Private:**\n   * Only the DM and the player making death saving throws know the results, adding tension for the other players.\n7. **Rule of Cool:**\n   * If a player describes an action in a particularly epic or creative way, they may receive a bonus or advantage on their roll.\n8. **Milestone Leveling:**\n   * Instead of tracking experience points, characters level up at key story milestones, ensuring the party levels together.\n9. **Action Points:**\n   * Players earn action points for good roleplaying, clever thinking, or just making the game more enjoyable. These points can be used for minor benefits in the game.\n10. **Encumbrance Simplified:**\n    * Simplify encumbrance rules to avoid micromanaging inventory (e.g., using common sense over strict weight limits).\n11. **Shared Inventory:**\n    * The party has a shared inventory or bag of holding for ease of managing group resources.\n12. **No Alignment Restrictions:**\n    * Characters are not strictly bound by their alignment, allowing for more nuanced moral decisions and character development.\n13. **Automatic Success on Familiar Tasks:**\n    * If a character is performing a task they are highly skilled at and not under pressure, they automatically succeed.\n14. **Revamped Healing:**\n    * Modify healing rules to suit the game's desired difficulty (e.g., more/less healing from spells and potions).\n15. **Quick Shopping:**\n    * Non-critical shopping can be done quickly with summary descriptions to keep the story moving.",
              timestamp: 1705726629537,
            },
          },
          listIndex: 0,
          name: "House rules",
          type: "text",
        },
        "-No_DlrHkCXlnWbcLvvu": {
          content:
            'World map link: <https://i.imgur.com/QNc4BDZ.png>\n\n![World map](https://i.imgur.com/QNc4BDZ.png "World Map")',
          contentHistory: {
            "-NobprQh1TDJ_chHCxwR": {
              author: "John Doe",
              content:
                'World map link: blob: <https://i.imgur.com/QNc4BDZ.png>\n\n\n\n\n\n\n\n![World map](https://imgur.com/QNc4BDZ "World map")',
              timestamp: 1705770448389,
            },
            "-Nobpu4z4m8IwzEYCBnS": {
              author: "John Doe",
              content: "",
              timestamp: 1705770459287,
            },
            "-Nobq2c2ACJyvx8ztAJ0": {
              author: "John Doe",
              content:
                'World map link: <https://i.imgur.com/QNc4BDZ.png>\n\n![World map](https://i.imgur.com/QNc4BDZ.png "World Map")',
              timestamp: 1705770498331,
            },
          },
          listIndex: 1,
          name: "World map",
          type: "text",
        },
      },
    },
  },
  creatorId: "Ext1cLzMmxgQRbK1t0UL1PahMpE2",
  description: "Demo campaign for showcasing",
  name: "Demo campaign",
  players: {
    [auth.currentUser?.uid ?? "guest"]: {
      avatar:
        "https://lh3.googleusercontent.com/a/ACg8ocIMWVG704lpIQoqacsNjy-UT9wOPAAV9JLtGRLTsa0M=s96-c",
      categories: {
        "-NodwQLlTCvmI4FULTrQ": {
          inventory: false,
          name: "Annotations",
          tabs: {
            "-NodwTMpudPaw4CyIpfv": {
              content: {
                alignment: "Neutral",
                armorClass: "15",
                attack1: {
                  bonus: "+8",
                  damage: "1d8 + 3",
                  name: "Longbow",
                },
                attack2: {
                  bonus: "",
                  damage: "",
                  name: "",
                },
                attack3: {
                  bonus: "",
                  damage: "",
                  name: "",
                },
                attacksAndSpellcasting:
                  "Level 1 (4 slots): Hunter’s Mark, Cure Wounds, Detect Magic\n\nLevel 2 (2 slots): Pass without Trace, Lesser Restoration",
                background: "Outlander",
                bonds:
                  "Feels a deep sense of responsibility towards his companions and the people he helps",
                charName: "Aiden",
                charisma: 10,
                classnLevel: "Ranger 5",
                constitution: 13,
                currentHp: "44",
                dexterity: 16,
                equipmentAndNotes:
                  "Longbow and quiver of arrows\nShort swords (2)\nLeather armor\nExplorer’s pack\nThe magic items and consumables previously discussed",
                exp: "",
                fail1: false,
                fail2: false,
                fail3: false,
                featuresAndTraits:
                  "Favored Enemy: Undead\n\nNatural Explorer: Forests\n\nFighting Style: Archery\n\nRanger Archetype: Hunter\nPrimeval Awareness",
                flaws: "Sometimes too wary and distrusting of strangers",
                hitDice: "5d10",
                ideals: "Protects the balance of nature and the natural order",
                initiative: "3",
                inspiration: "1",
                intelligence: 14,
                maxHp: "44",
                otherProfsAndLangs:
                  "Light armor, medium armor, shields\nSimple weapons, martial weapons\n\nCommon, Elvish, Dwarvish",
                personalityTraits:
                  "Cautious and observant, always scanning for potential threats",
                playerName: "Joe",
                proficiencies: {
                  acrobatics: false,
                  animalHandling: false,
                  arcana: false,
                  athletics: false,
                  atletics: false,
                  charisma: false,
                  constitution: false,
                  deception: false,
                  dexterity: true,
                  history: false,
                  insight: false,
                  intelligence: false,
                  intimidation: false,
                  investigation: true,
                  medicine: false,
                  nature: true,
                  perception: true,
                  performance: false,
                  persuasion: false,
                  religion: false,
                  sleightOfHand: false,
                  stealth: true,
                  strength: true,
                  survival: true,
                  wisdom: false,
                },
                proficiencyBonus: 3,
                race: "Elf",
                speed: "30",
                strength: 12,
                success1: false,
                success2: false,
                success3: false,
                tempHp: "0",
                totalHitDice: "5d10",
                wisdom: 15,
              },
              contentHistory: {
                "-NoeQn8E9hRc0VIJBNJy": {
                  content: {
                    alignment: "Neutral",
                    armorClass: "15",
                    attack1: {
                      bonus: "+8",
                      damage: "1d8 + 3",
                      name: "Longbow",
                    },
                    attack2: {
                      bonus: "",
                      damage: "",
                      name: "",
                    },
                    attack3: {
                      bonus: "",
                      damage: "",
                      name: "",
                    },
                    attacksAndSpellcasting:
                      "Level 1 (4 slots): Hunter’s Mark, Cure Wounds, Detect Magic\n\nLevel 2 (2 slots): Pass without Trace, Lesser Restoration",
                    background: "Outlander",
                    bonds:
                      "Feels a deep sense of responsibility towards his companions and the people he helps",
                    charName: "Aiden",
                    charisma: 10,
                    classnLevel: "Ranger 5",
                    constitution: 13,
                    currentHp: "44",
                    dexterity: 16,
                    equipmentAndNotes:
                      "Longbow and quiver of arrows\nShort swords (2)\nLeather armor\nExplorer’s pack\nThe magic items and consumables previously discussed",
                    exp: "",
                    fail1: false,
                    fail2: false,
                    fail3: false,
                    featuresAndTraits:
                      "Favored Enemy: Undead\n\nNatural Explorer: Forests\n\nFighting Style: Archery\n\nRanger Archetype: Hunter\nPrimeval Awareness",
                    flaws: "Sometimes too wary and distrusting of strangers",
                    hitDice: "5d10",
                    ideals:
                      "Protects the balance of nature and the natural order",
                    initiative: "3",
                    inspiration: "1",
                    intelligence: 14,
                    maxHp: "44",
                    otherProfsAndLangs:
                      "Light armor, medium armor, shields\nSimple weapons, martial weapons\n\nCommon, Elvish, Dwarvish",
                    personalityTraits:
                      "Cautious and observant, always scanning for potential threats",
                    playerName: "Joe",
                    proficiencies: {
                      acrobatics: false,
                      animalHandling: false,
                      arcana: false,
                      athletics: false,
                      atletics: false,
                      charisma: false,
                      constitution: false,
                      deception: false,
                      dexterity: true,
                      history: false,
                      insight: false,
                      intelligence: false,
                      intimidation: false,
                      investigation: true,
                      medicine: false,
                      nature: true,
                      perception: true,
                      performance: false,
                      persuasion: false,
                      religion: false,
                      sleightOfHand: false,
                      stealth: true,
                      strength: true,
                      survival: true,
                      wisdom: false,
                    },
                    proficiencyBonus: 3,
                    race: "Elf",
                    speed: "30",
                    strength: 12,
                    success1: false,
                    success2: false,
                    success3: false,
                    tempHp: "0",
                    totalHitDice: "5d10",
                    wisdom: 15,
                  },
                  timestamp: 1705813946079,
                },
                "-NoedjwErHNkjWUkSEL6": {
                  content: {
                    alignment: "Neutral",
                    armorClass: "15",
                    attack1: {
                      bonus: "+8",
                      damage: "1d8 + 3",
                      name: "Longbow",
                    },
                    attack2: {
                      bonus: "",
                      damage: "",
                      name: "",
                    },
                    attack3: {
                      bonus: "",
                      damage: "",
                      name: "",
                    },
                    attacksAndSpellcasting:
                      "Level 1 (4 slots): Hunter’s Mark, Cure Wounds, Detect Magic\n\nLevel 2 (2 slots): Pass without Trace, Lesser Restoration",
                    background: "Outlander",
                    bonds:
                      "Feels a deep sense of responsibility towards his companions and the people he helps",
                    charName: "Aiden",
                    charisma: 10,
                    classnLevel: "Ranger 5",
                    constitution: 13,
                    currentHp: "44",
                    dexterity: 16,
                    equipmentAndNotes:
                      "Longbow and quiver of arrows\nShort swords (2)\nLeather armor\nExplorer’s pack\nThe magic items and consumables previously discussed",
                    exp: "",
                    fail1: false,
                    fail2: false,
                    fail3: false,
                    featuresAndTraits:
                      "Favored Enemy: Undead\n\nNatural Explorer: Forests\n\nFighting Style: Archery\n\nRanger Archetype: Hunter\nPrimeval Awareness",
                    flaws: "Sometimes too wary and distrusting of strangers",
                    hitDice: "5d10",
                    ideals:
                      "Protects the balance of nature and the natural order",
                    initiative: "3",
                    inspiration: "1",
                    intelligence: 14,
                    maxHp: "44",
                    otherProfsAndLangs:
                      "Light armor, medium armor, shields\nSimple weapons, martial weapons\n\nCommon, Elvish, Dwarvish",
                    personalityTraits:
                      "Cautious and observant, always scanning for potential threats",
                    playerName: "Joe",
                    proficiencies: {
                      acrobatics: false,
                      animalHandling: false,
                      arcana: false,
                      athletics: false,
                      atletics: false,
                      charisma: false,
                      constitution: false,
                      deception: false,
                      dexterity: true,
                      history: false,
                      insight: false,
                      intelligence: false,
                      intimidation: false,
                      investigation: true,
                      medicine: false,
                      nature: true,
                      perception: true,
                      performance: false,
                      persuasion: false,
                      religion: false,
                      sleightOfHand: false,
                      stealth: true,
                      strength: true,
                      survival: true,
                      wisdom: false,
                    },
                    proficiencyBonus: 3,
                    race: "Elf",
                    speed: "30",
                    strength: 12,
                    success1: false,
                    success2: false,
                    success3: false,
                    tempHp: "0",
                    totalHitDice: "5d10",
                    wisdom: 15,
                  },
                  timestamp: 1705817602975,
                },
              },
              name: "Sheet",
              type: "sheet",
            },
            "-NodwaQadhJC3VjRXwIA": {
              content:
                "### Bella, the Human Wizard\n\n* **Intellectually Curious:** Bella's thirst for knowledge is insatiable. She's always delving into ancient texts and experimenting with new spells.\n* **Strategic Thinker:** In battle, her strategic use of magic has turned the tide more than once. She’s a planner and often thinks several steps ahead.\n* **Cautious:** Sometimes, her caution borders on hesitation. I've seen her double-checking her spells and decisions, ensuring their accuracy and effectiveness.\n* **Reserved Nature:** She's not the most open about her past or her feelings, but her dedication to the group is unmistakable.\n* **Valuable Ally:** Her magical abilities have been crucial to our success. Whether deciphering ancient lore or unleashing powerful spells, she's an indispensable part of the team.\n\n### Caelum, the Dwarven Paladin\n\n* **Stalwart Defender:** Caelum is a bulwark in battle. His bravery and protective instincts have saved us from harm on many occasions.\n* **Strong Moral Compass:** His devotion to his deity and the cause of righteousness guides every action. He can be inflexible, but his heart is always in the right place.\n* **Loyal Friend:** Once you've earned Caelum's trust, he's a friend for life. His loyalty to the group is unwavering.\n* **Not the Subtlest:** Subtlety isn't his strong suit; he prefers direct confrontation and clear objectives.\n* **Heart of Gold:** Beneath his gruff exterior, he has a kindness and sincerity that have come through when we've needed it most.\n\n### Dara, the Halfling Rogue\n\n* **Mysterious and Wily:** Dara is an enigma, keeping her past and true intentions close to the chest. Her cunning in and out of battle is impressive.\n* **Resourceful:** Whether it's finding her way out of a tight spot or procuring something we need, Dara's resourcefulness has proven invaluable.\n* **Skilled Negotiator:** She has a way with words, managing to negotiate us out of situations where combat seemed the only option.\n* **Mischievous Sense of Humor:** Her humor adds lightness to our journey, though sometimes her pranks can go a bit too far.\n* **Unexpected Depth:** There's more to Dara than meets the eye. I've noticed moments of unexpected depth and insight from her.",
              contentHistory: {
                "-NodxAOb6pZUXF9iZtw4": {
                  content:
                    "### Bella, the Human Wizard\n\n* **Intellectually Curious:** Bella's thirst for knowledge is insatiable. She's always delving into ancient texts and experimenting with new spells.\n* **Strategic Thinker:** In battle, her strategic use of magic has turned the tide more than once. She’s a planner and often thinks several steps ahead.\n* **Cautious:** Sometimes, her caution borders on hesitation. I've seen her double-checking her spells and decisions, ensuring their accuracy and effectiveness.\n* **Reserved Nature:** She's not the most open about her past or her feelings, but her dedication to the group is unmistakable.\n* **Valuable Ally:** Her magical abilities have been crucial to our success. Whether deciphering ancient lore or unleashing powerful spells, she's an indispensable part of the team.\n\n### Caelum, the Dwarven Paladin\n\n* **Stalwart Defender:** Caelum is a bulwark in battle. His bravery and protective instincts have saved us from harm on many occasions.\n* **Strong Moral Compass:** His devotion to his deity and the cause of righteousness guides every action. He can be inflexible, but his heart is always in the right place.\n* **Loyal Friend:** Once you've earned Caelum's trust, he's a friend for life. His loyalty to the group is unwavering.\n* **Not the Subtlest:** Subtlety isn't his strong suit; he prefers direct confrontation and clear objectives.\n* **Heart of Gold:** Beneath his gruff exterior, he has a kindness and sincerity that have come through when we've needed it most.\n\n### Dara, the Halfling Rogue\n\n* **Mysterious and Wily:** Dara is an enigma, keeping her past and true intentions close to the chest. Her cunning in and out of battle is impressive.\n* **Resourceful:** Whether it's finding her way out of a tight spot or procuring something we need, Dara's resourcefulness has proven invaluable.\n* **Skilled Negotiator:** She has a way with words, managing to negotiate us out of situations where combat seemed the only option.\n* **Mischievous Sense of Humor:** Her humor adds lightness to our journey, though sometimes her pranks can go a bit too far.\n* **Unexpected Depth:** There's more to Dara than meets the eye. I've noticed moments of unexpected depth and insight from her.",
                  timestamp: 1705805918967,
                },
              },
              name: "Notes of group",
              type: "text",
            },
            "-NodwbbpiEngqgAG7JUL": {
              content:
                "1. **Goldcrest and the \"Laughing Dragon\" Tavern:**\n   * Our journey began here. Must remember the helpful tavern owner and the townsfolk. They could be crucial allies in future endeavors.\n2. **First Encounter in the Mysterious Forest:**\n   * The pack of wolves we encountered. Their aggressive behavior was unusual. Could there be an underlying cause affecting the wildlife?\n3. **Hidden Cave and Ancient Underground Ruins:**\n   * The cave's symbols and the ruins beneath it. Need to research more on their origins. Could hold keys to bigger mysteries.\n4. **Bandits and the Secret Passage:**\n   * The bandit hideout led us to the ruins. Possible connections to larger criminal networks? Worth keeping an eye on.\n5. **Abandoned Fortress Encounter:**\n   * Our battle there was intense. Learned valuable information about the Shadow Weaver. The fortress could be a strategic location for future use.\n6. **Oracle's Prophecies:**\n   * Her words were cryptic but important. Need to reflect more on her warnings about darkness and our paths.\n7. **Eclipse Amulet in the Hidden Temple:**\n   * A powerful artifact. We must ensure it doesn't fall into the wrong hands. The temple's celestial carvings might be worth a second look.\n8. **Defense of Goldcrest and the Shadow Weaver:**\n   * The town's resilience was inspiring. Our showdown with the Shadow Weaver was pivotal. Must stay vigilant for any lingering threats.\n9. **Dark Cult and the Ritual:**\n   * The cult's activities are concerning. The disrupted ritual and their motives need further investigation.\n10. **Preparation for Future Challenges:**\n    * The emergence of a greater evil. We should continue training and gathering resources. The journey ahead seems fraught with peril.\n\nAs I chronicle these events, I realize how far we've come and how much we've grown as a team. The bonds we've forged and the challenges we've overcome have prepared us for whatever lies ahead.",
              contentHistory: {
                "-Nodxcgl6ctg9E2HxuSK": {
                  content:
                    "1. **Goldcrest and the \"Laughing Dragon\" Tavern:**\n   * Our journey began here. Must remember the helpful tavern owner and the townsfolk. They could be crucial allies in future endeavors.\n2. **First Encounter in the Mysterious Forest:**\n   * The pack of wolves we encountered. Their aggressive behavior was unusual. Could there be an underlying cause affecting the wildlife?\n3. **Hidden Cave and Ancient Underground Ruins:**\n   * The cave's symbols and the ruins beneath it. Need to research more on their origins. Could hold keys to bigger mysteries.\n4. **Bandits and the Secret Passage:**\n   * The bandit hideout led us to the ruins. Possible connections to larger criminal networks? Worth keeping an eye on.\n5. **Abandoned Fortress Encounter:**\n   * Our battle there was intense. Learned valuable information about the Shadow Weaver. The fortress could be a strategic location for future use.\n6. **Oracle's Prophecies:**\n   * Her words were cryptic but important. Need to reflect more on her warnings about darkness and our paths.\n7. **Eclipse Amulet in the Hidden Temple:**\n   * A powerful artifact. We must ensure it doesn't fall into the wrong hands. The temple's celestial carvings might be worth a second look.\n8. **Defense of Goldcrest and the Shadow Weaver:**\n   * The town's resilience was inspiring. Our showdown with the Shadow Weaver was pivotal. Must stay vigilant for any lingering threats.\n9. **Dark Cult and the Ritual:**\n   * The cult's activities are concerning. The disrupted ritual and their motives need further investigation.\n10. **Preparation for Future Challenges:**\n    * The emergence of a greater evil. We should continue training and gathering resources. The journey ahead seems fraught with peril.\n\nAs I chronicle these events, I realize how far we've come and how much we've grown as a team. The bonds we've forged and the challenges we've overcome have prepared us for whatever lies ahead.",
                  timestamp: 1705806038977,
                },
              },
              name: "Reminders",
              type: "text",
            },
          },
        },
      },
      id: "Ext1cLzMmxgQRbK1t0UL1PahMpE2",
      name: "John Doe",
    },
  },
  combat: {
    active: true,
    combatants: {
      "-Nox5ykn82JblC9wS_lh": {
        ac: 15,
        hp: 44,
        initiative: 17,
        isTurn: false,
        maxHp: 44,
        name: "Aiden",
        orderIndex: 2,
        type: "player",
      },
      "-Nox69Hx1zn4LaRqdTVD": {
        ac: 11,
        hp: 27,
        initiative: 8,
        isTurn: false,
        maxHp: 27,
        name: "Bella",
        orderIndex: 7,
        type: "player",
      },
      "-Nox6HJk_7ohfg4oHgnn": {
        ac: 18,
        hp: 53,
        id: "-Nox6HJk_7ohfg4oHgnn",
        initiative: 9,
        isTurn: false,
        maxHp: 53,
        name: "Caelum",
        orderIndex: 5,
        type: "player",
      },
      "-Nox6NyKq-Nx3fcLlxOL": {
        ac: 15,
        hp: 40,
        initiative: 21,
        isTurn: false,
        maxHp: 40,
        name: "Dara",
        orderIndex: 0,
        type: "player",
      },
      "-Nox6tcy1VsgVBCpHSdp": {
        ac: 8,
        hp: 85,
        initiative: 4,
        isTurn: false,
        maxHp: 85,
        name: "Ogre Zombie",
        orderIndex: 8,
        type: "enemy",
      },
      "-Nox70QDNiiEcS3ewhOI": {
        ac: 17,
        hp: 21,
        initiative: 12,
        isTurn: false,
        maxHp: 21,
        name: "Goblin Boss",
        orderIndex: 3,
        type: "enemy",
      },
      "-Nox76m6yv7Czv6t87Ed": {
        ac: 15,
        hp: 7,
        initiative: 12,
        isTurn: false,
        maxHp: 7,
        name: "Goblin 1",
        orderIndex: 4,
        type: "enemy",
      },
      "-Nox7F7i-uLaIBg8u5ia": {
        ac: 15,
        hp: 7,
        initiative: 19,
        isTurn: false,
        maxHp: 7,
        name: "Goblin 2",
        orderIndex: 1,
        type: "enemy",
      },
      "-Nox7S6XXayfR_aHbaAs": {
        ac: 15,
        hp: 7,
        initiative: 9,
        isTurn: false,
        maxHp: 7,
        name: "Goblin 3",
        orderIndex: 6,
        type: "enemy",
      },
    },
    currentTurn: "",
    dmId: auth.currentUser?.uid ?? "guest",
    dmName: auth.currentUser?.displayName ?? "Guest",
    round: 0,
    turn: 0,
  },
};

export type allCampaignsType = typeof allCampaignsMocks;

const allCampaignsMocks = {
  campaigns: {
    "1": campaign1Mock,
  },
};

export default allCampaignsMocks;
