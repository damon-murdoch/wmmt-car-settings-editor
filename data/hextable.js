// Settings File Offsets
const SETTINGS = {
  location: {

    // Switches
    "view": [0x1, 0xC],
    "transmission": [0x1, 0xD],
    "retire": [0x1, 0xE],
    "navi_map": [0x1, 0xF],
    
    // Unlockables
    "meter": [0x2, 0x0],
    "volume": [0x2, 0x4], // Unused
    "bgm": [0x2, 0x8],

    // Nameplates
    "nameplate_type": [0x2, 0xC],
    "nameplate_colour": [0x3, 0x0],

    // Frames
    "frame_type": [0x3, 0x4],
    "frame_colour": [0x3, 0x8],

    // Etc.
    "terminal_bg": [0x3, 0xC]
  }, values: {

    // Switches

    "view": {
      "00": "Front", 
      "01": "Behind"
    }, 
    "transmission": {
      "00": "Automatic", 
      "01": "Manual"
    }, 
    "retire": {
      "00": "Disabled", 
      "01": "Enabled"
    }, 
    "navi_map": {
      "00": "Hidden", 
      "01": "Visible"
    },

    // Unlockables

    "meter": {
      "00": "Default", 
      "01": "White Meter", 
      "02": "Yellow Meter", 
      "03": "Red Meter", 
      "04": "Special Meter", 
      "05": "Blue Meter", 
      "06": "Carbon Meter", 
      // lots more but I cbf rn
    }, 
    "volume": {
      "00": "Off",
      "01": "Low",
      "02": "Mid",
      "03": "High"
    }, 
    "bgm": {
      "00": "Default", 
      "01": "MT3/3DX/3DX+",
      "02": "10 Outrun", 
      "03": "MT1/MT2", 
      "04": "MTR", 
      "05": "MT4"
    },

    // Nameplates
    "nameplate_type": {
      "00": "Default (1 Colour)", 
      // lots more but I cbf rn
    },
    "nameplate_colour": {
      "00": "Default",
      "01": "Colour 2",
      "02": "Colour 3",
      "03": "Colour 4",
      "04": "Colour 5",
      "05": "Colour 6"
    },

    // Frames
    "frame_type": {
      "00": "None (No Colours)", 
      // lots more but I cbf rn
    },
    "frame_colour": {
      "00": "Default",
      "01": "Colour 2",
      "02": "Colour 3",
      "03": "Colour 4",
      "04": "Colour 5",
      "05": "Colour 6"
    },

    // Etc.
    "terminal_bg": {
      "00": "Default"
    }
  }
}

// GT Wing File Offsets
const GTWING = {
  location: {

    // Pillar
    "pillar_type": [0x1, 0x8],
    "pillar_material": [0x1, 0xC],

    // Main Wing
    "main_wing_type": [0x2, 0x0],
    "main_wing_colour": [0x2, 0x4],

    // Decoration
    "wing_tip_type": [0x2, 0x8],
    "wing_material": [0x2, 0xC],
  }, values: {

    // Pillar
    
    "pillar_type": {
      "00": "Default"
      // lots more but I cbf rn
    },
    "pillar_material": {
      "00": "Silver",
      "01": "Black"
      // lots more but I cbf rn
    },

    // Main Wing
    
    "main_wing_type": {
      "00": "Default"
      // lots more but I cbf rn
    },
    "main_wing_colour": {
      "00": "Default"
      // lots more but I cbf rn
    },

    // Decoration
    
    "wing_tip_type": {
      "00": "Default"
      // lots more but I cbf rn
    },
    "wing_material": {
      "00": "Glossy",
      "01": "Matte"
    },
  }
}

// Mini Sticker File Offsets
const MINI_STICKER = {
  location: {

    // Sticker 1
    "sticker_1_type": [0x0, 0x8],
    "sticker_1_colour": [0x0, 0xC],

    // Sticker 2
    "sticker_2_type": [0x1, 0x8],
    "sticker_2_colour": [0x1, 0xC],

    // Sticker 3
    "sticker_3_type": [0x2, 0x8],
    "sticker_3_colour": [0x2, 0xC],

    // Sticker 4
    "sticker_4_type": [0x3, 0x8],
    "sticker_4_colour": [0x3, 0xC],

    // Sticker 5
    "sticker_5_type": [0x4, 0x8],
    "sticker_5_colour": [0x4, 0xC],

    // Sticker 6
    "sticker_6_type": [0x5, 0x8],
    "sticker_6_colour": [0x5, 0xC],

    // Sticker 6
    "sticker_6_type": [0x6, 0x8],
    "sticker_6_colour": [0x6, 0xC],

    // Sticker 7
    "sticker_7_type": [0x7, 0x8],
    "sticker_7_colour": [0x7, 0xC],

    // Sticker 8
    "sticker_8_type": [0x8, 0x8],
    "sticker_8_colour": [0x8, 0xC],

    // Sticker 9
    "sticker_9_type": [0x9, 0x8],
    "sticker_9_colour": [0x9, 0xC],

    // Sticker 9
    "sticker_10_type": [0xA, 0x8],
    "sticker_10_colour": [0xA, 0xC],
  }, values: {
    // Sticker 1
    "sticker_1_type": {},
    "sticker_1_colour": {},

    // Sticker 2
    "sticker_2_type": {},
    "sticker_2_colour": {},

    // Sticker 3
    "sticker_3_type": {},
    "sticker_3_colour": {},

    // Sticker 4
    "sticker_4_type": {},
    "sticker_4_colour": {},

    // Sticker 5
    "sticker_5_type": {},
    "sticker_5_colour": {},

    // Sticker 6
    "sticker_6_type": {},
    "sticker_6_colour": {},

    // Sticker 6
    "sticker_6_type": {},
    "sticker_6_colour": {},

    // Sticker 7
    "sticker_7_type": {},
    "sticker_7_colour": {},

    // Sticker 8
    "sticker_8_type": {},
    "sticker_8_colour": {},

    // Sticker 9
    "sticker_9_type": {},
    "sticker_9_colour": {},

    // Sticker 9
    "sticker_10_type": {
      "00": "Default (None)",
      "01": "R",
      "02": "V",
      "03": "G",
      "04": "WM",
      "05": "00",
      "06": "Z",
      "07": "S",
      "08": "165",
      "09": "Horse",
      "0A": "Bull",
      "0B": "Wing",
      "0C": "Hawk",
      "0D": "Unicorn",
      "0E": "Star",
      "0F": "Bee",
      "0F": "Tribal",
      "0F": "Club",
      "0F": "Angel",
      "0F": "Devil",
      "0F": "Heart",
      "0F": "Rose",
      "0F": "Crescent",
      "0F": "Tribal2",
      "0F": "Anchor",
      "0F": "Spade",
      "0F": "Star2",
      "0F": "Bat",
      "0F": "Hibiscus",
      "0F": "Pawprint",
      "0F": "Cat",
      "0F": "Heart2",
      "0F": "Lizard",
      "0F": "C1",
      "0F": "Zexsol",
      "0F": "RIMO Works",
      "0F": "ArukaSpeed",
      "0F": "Checkered R",
      "0F": "YM Speed",
      "0F": "RGO",
      "0F": "FLAT",
      "0F": "ACE",
      "0F": "Speed Shop",
      "0F": "Tominaga",
      "0F": "??",
      "0F": "Wolf",
      "0F": "Diamond",
      "0F": "Devil Z",
      "0F": "Dice",
      "0F": "Pac Man",
      "0F": "Dragon",
      "0F": "Heart3",
      "0F": "Monkey",
    },
    "sticker_10_colour": {

    },
  }
}