// For mapping from the legacy to CDS theme.
const cdsTheme = {
  /* Color Palette */
  "82c83bb9c1cf6cf521cbf5e62415e3053cf155f8": {
    // White
    name: "White",
    mapsToName: "White",
    mapsToKey: "4207fd53f422499ce526640a85a43986932952e5"
  },
  "87d133ff2eb48cc6082afcc817dd4d4cd3ff1c6b": {
    // Blue
    name: "A_Light_1.1",
    mapsToName: "Gray 2",
    mapsToKey: "24cbe3cc75cc023128d75302c91734721f7e2bab"
  },
  ae3d8493b3f59eaceb1b7a62131763bede9440fd: {
    name: "A_Light_2.1",
    mapsToName: "Blue 2",
    mapsToKey: "be30a12538d2efad9ce2c6441e87985ea9d51d0a"
  },
  "4d7d3bc20a98fe123c8fd9594917b7aaf7f431c3": {
    name: "A_Light_3.1",
    mapsToName: "Gray 3",
    mapsToKey: "9f9a6e44f40548c9c48be6039d44397f46045de8"
  },
  db43416d71a4241283785aab4f0900cf4ae3366f: {
    name: "A_Mid_1.1",
    mapsToName: "Blue 6",
    mapsToKey: "7a51bb8f5fee2abbb42b940aeae8f20f651a5a42"
  },
  "55eb9151a4dcba3097e2ef3ac3351431f5cd5ab3": {
    // Blue 7
    name: "A_Mid_2.1",
    mapsToName: "Green 7",
    mapsToKey: "e727bcb58822b02076e8bf1a3b576db6e5185987"
  },
  "756bfee6f498e41028abba8952b03db45ffbf413": {
    name: "A_Dark_1.1",
    mapsToName: "Green 8",
    mapsToKey: "315986acad193c19351291764017a2dcd41d997f"
  },
  d4a06bdd3f6a7793a49c3c2781468319056ec556: {
    name: "A_Dark_2.1",
    mapsToName: "Green 9",
    mapsToKey: "1dd1b4fed48f85fc47885c7fb075289aebe5c174"
  },
  ffc55eda5952075f8f89a3bdc14df50c484180e5: {
    // Green
    name: "B_Light_1.1",
    mapsToName: "Green 1",
    mapsToKey: "c42dba8b239bf4ed7ee2900c9127b550ee69c019"
  },
  "3c3eb00c7c9e88dd3a0599caa66a271f0c37fb2b": {
    name: "B_Light_2.1",
    mapsToName: "Green 2",
    mapsToKey: "34c57440d58d02a011fc040f01cbcd0ffb8ce103"
  },
  e2cba5415acaf3f77a78fa2162432c0f72caf328: {
    name: "B_Mid_1.1",
    mapsToName: "Green 6",
    mapsToKey: "67a75493c5bf0cba113c820d2f1d998a80d3c266"
  },
  c87aa243e86b0560a7e10640ba34ff0b06666aa1: {
    name: "B_Mid_2.1",
    mapsToName: "Green 7",
    mapsToKey: "e727bcb58822b02076e8bf1a3b576db6e5185987"
  },
  a89c8fe722ca322b4c9028a0c78cfffff80cea68: {
    name: "B_Mid_3.1",
    mapsToName: "Green 8",
    mapsToKey: "315986acad193c19351291764017a2dcd41d997f"
  },
  "209bc18d7b81cc635a086664396e3d626a135fd7": {
    name: "B_Mid_4.1",
    mapsToName: "Green 8",
    mapsToKey: "315986acad193c19351291764017a2dcd41d997f"
  },
  "47f88ce5aed84085aac8669d78ca6d971eb064a2": {
    name: "B_Dark_1.1",
    mapsToName: "Green 8",
    mapsToKey: "315986acad193c19351291764017a2dcd41d997f"
  },
  "09a27111fbce1ccfc6976df7ceb042da6000cb58": {
    name: "B_Dark_2.1",
    mapsToName: "Green 9",
    mapsToKey: "1dd1b4fed48f85fc47885c7fb075289aebe5c174"
  },
  "9675dd35a8e744679ddba3d48f8324a6b11b8e18": {
    name: "B_Dark_3.1",
    mapsToName: "Green 10",
    mapsToKey: "bea6529d0eb7bcc32c7e9b11e6a96a54844d3f26"
  },
  ec18e06b93515a3eca3b41f3be0a6a6b20b9c5cb: {
    // Orange
    name: "C_Mid_1.1",
    mapsToName: "Orange 6",
    mapsToKey: "dcdb613524aca1ca4cb8d96d029ded3070811302"
  },
  "93c3270e5279c1f4ef0338163a58ad8567c1e294": {
    name: "C_Mid_2.1",
    mapsToName: "Orange 7",
    mapsToKey: "494770bf8d9f0f7da2f2dbb48723c232f26a78c2"
  },
  ace7719362211ee625792f2e7e3de7a5b6f19f6f: {
    // Red
    name: "D_Mid_1.1",
    mapsToName: "Red 6",
    mapsToKey: "58dac2583a4270c0cae8919b30ac504fe0cd4d71"
  },
  "1679356ccc0091bc9b3b5e90ffa7a3b41228595e": {
    name: "D_Mid_2.1",
    mapsToName: "Red 7",
    mapsToKey: "fc4d00e633850a73da14720425e1c80b34ed13ff"
  },
  "24242b68e95690a39cf5c380a44141318409aa3d": {
    name: "D_Dark_1.1",
    mapsToName: "Red 8",
    mapsToKey: "34af246994b66bad7f431cafe026e4607fe7e431"
  },
  fdedac5d55b6689f337aba34a9c577bf47d0e694: {
    // Gray
    name: "E_SuperLight_1.1",
    mapsToName: "Gray 1",
    mapsToKey: "33c7165453ee0d0d63012c4f90236c2a5c494440"
  },
  b9765434ac2d8da8b8d48b5de7a76f8bd8b1d855: {
    name: "E_SuperLight_2.1",
    mapsToName: "Gray 1",
    mapsToKey: "33c7165453ee0d0d63012c4f90236c2a5c494440"
  },
  a395508de1445693bdb270c94207d5e0a8f86b72: {
    name: "E_Light_1.1",
    mapsToName: "Gray 2",
    mapsToKey: "24cbe3cc75cc023128d75302c91734721f7e2bab"
  },
  "20f93c76f9ef3dcc0277a422783e61ff5d247ccb": {
    name: "E_Light_2.1",
    mapsToName: "Gray 2",
    mapsToKey: "24cbe3cc75cc023128d75302c91734721f7e2bab"
  },
  b2edfce7d1c1fa39c211aa7b5221c056382e6500: {
    name: "E_Mid_1.1",
    mapsToName: "Gray 3",
    mapsToKey: "9f9a6e44f40548c9c48be6039d44397f46045de8"
  },
  c0e518b91080f9a80ce066a1dd74a9d94e7ab394: {
    name: "E_Mid_2.1",
    mapsToName: "Gray 4",
    mapsToKey: "b1d4caa983bdc013a1405ee049ed8e9678de77dd"
  },
  ecfb60fcda210ee2db63c704c0e23d8b81d31e7f: {
    name: "E_Mid_3.1",
    mapsToName: "Gray 5",
    mapsToKey: "f011ceb5cd33eaf4c5d49f6b49af3aa61c0d0b01"
  },
  "1cb9fca782a78dc69fd7a8d221b3f14de8e4f321": {
    name: "E_Mid_4.1",
    mapsToName: "Gray 6",
    mapsToKey: "77db449be1de3fca6d644a05fd5b92f8b65efa95"
  },
  b5247b7f16364ce66b1c35e7ec4eb9c79fa2e486: {
    name: "E_Dark_1.1",
    mapsToName: "Gray 7",
    mapsToKey: "cb7ba23e4c300f2ea6527aa721257d9c5c1aa242"
  },
  "58420c0790448a4db66cf4bed934c6cd9fcbf429": {
    name: "E_Dark_2.1",
    mapsToName: "Gray 10",
    mapsToKey: "571216adfa53a3afc50980def4fd722ddad6a9e4"
  },
  "7071d6bf97b8a39e8b311237aa2db5cf9fa1de68": {
    name: "E_Dark_3.1",
    mapsToName: "Gray 12",
    mapsToKey: "2e639e7eb3de10bedae7087d7409a4be24b4b293"
  },

  /*     Components */
  // Breadcrumb
  ca414720bf79919b0cc4e470293a7205cb16987f: {
    name: "*Breadcrumb",
    mapsToKey: "a16bd0ec3debd18f158ae161f503b6766e0a4cb4",
    mapsToName: "Breadcrumb"
  },
  // Primary Button
  fa21655d4e75355339f36fe9f6af17b9f6a76058: {
    // Active
    name: "Button / Primary / Enabled",
    mapsToKey: "26ca3a88fd8f1fecfed6e0ab2744463153c550e8",
    mapsToName: "Button / Primary / Active"
  },
  e5c697c717533ca879436c916e544f630423bc5f: {
    // Hovered
    name: "Button / Primary / Hovered",
    mapsToKey: "4e891d664a570ae9f785d23b90a270d57e322d85",
    mapsToName: "Button / Primary / Hovered"
  },
  d3f7a46044d3a25cbca61f2f4e92548d77c98231: {
    // Pressed
    name: "Button / Primary / Pressed",
    mapsToKey: "d6edb3f3104221087f57d79c9a2b009b2b91cec4",
    mapsToName: "Button / Primary / Pressed"
  },
  f7d79eec392fc2371eb0a2e79bde29a9996ba483: {
    // Disabled
    name: "Button / Primary / Disabled",
    mapsToKey: "8628aebb179dd32d37075376d0be6dcd9bbd7b5b",
    mapsToName: "Button / Primary / Disabled"
  },
  // Secondary Button
  a49cb847db7c647fd15612c7bf381d10164e50b4: {
    // Active
    name: "Button / Secondary / Enabled",
    mapsToKey: "e4d0cc10f062cab73abb4cad04943411e50434d2",
    mapsToName: "Button / Secondary / Active"
  },
  "8ea6499120a33786c86716ef5e38aa185eaee7a0": {
    // Hovered
    name: "Button / Secondary / Hovered",
    mapsToKey: "4fa519211529d0b571b4de850a82839e13166e58",
    mapsToName: "Button / Secondary / Hovered"
  },
  c45000850e5c6361cab142701c8d0148bfcc4bad: {
    // Pressed
    name: "Button / Secondary / Pressed",
    mapsToKey: "b5f0a88f436ad2a4ae1ed3c669e3e54bf4fdc0d4",
    mapsToName: "Button / Secondary / Pressed"
  },
  ec943f31b71b1767989afefc01b86e490723b91d: {
    // Disabled
    name: "Button / Secondary / Disabled",
    mapsToKey: "f891b2a160a299872a847e25e2d6af7c0d2589b9",
    mapsToName: "Button / Secondary / Disabled"
  },
  // Tertiary Button
  b4b977139dba80eba8392be3effa8eaaaff32c1f: {
    // Active
    name: "Button / Tertiary / Enabled",
    mapsToKey: "62ccb2dbf25ad0e2f8710c43e8740673908e03c6",
    mapsToName: "Button / Tertiary / Active"
  },
  "3eba650be3c049546fdbf8dbff25a98442769bd5": {
    // Hovered
    name: "Button / Tertiary / Hovered",
    mapsToKey: "fd97eef1bc354e508e845d58e2b362aa7a6a1b5e",
    mapsToName: "Button / Tertiary / Hovered"
  },
  "1dd25355426e06a2fd335d89b2e27de778f853a9": {
    // Pressed
    name: "Button / Tertiary / Pressed",
    mapsToKey: "56f7469b48632b21667e26d6ece2371dcd24eba5",
    mapsToName: "Button / Tertiary / Pressed"
  },
  af1e823509b45a6e216d2fa003c76bb3c3157c4f: {
    // Disabled
    name: "Button / Tertiary / Disabled",
    mapsToKey: "05f9c991a80eaf8932ef65ca03e1ab2c852b1142",
    mapsToName: "Button / Tertiary / Disabled"
  },
  // Danger Button
  "4e3ae58e7516afa8e909f4eff3def5dd76d87654": {
    // Active
    name: "Button / Danger / Enabled",
    mapsToKey: "8b5b11f55816a192b1222cfa9dfb5cf4f66e4706",
    mapsToName: "Button / Danger / Active"
  },
  ef34f7ed1ccc8373995b4e89ffe8fddcb7626539: {
    // Hovered
    name: "Button / Danger / Hovered",
    mapsToKey: "ee8ee34853ee5b70af694b5c3b0ef72544abf79f",
    mapsToName: "Button / Danger / Hovered"
  },
  d60af2ba2cf9b9a8ea7983a3bffc5dd8bde77c1b: {
    // Pressed
    name: "Button / Danger / Pressed",
    mapsToKey: "3c5cbd53beabc0d0bffbab0cd1fa9965ec3976f6",
    mapsToName: "Button / Danger / Pressed"
  },
  "588e7d0aa502f470be1a72578ccc47a90dfcbb37": {
    // Disabled
    name: "Button / Danger / Disabled",
    mapsToKey: "fd4f9189bed49f88d1fcae11403a8cab7a7b9e58",
    mapsToName: "Button / Danger / Disabled"
  },
  // Transparent Button
  "8f9d1a97fa9b5e9a41ea2fdfd5a8b2c5d599dc52": {
    // Active
    name: "Button / Transparent / Enabled",
    mapsToKey: "00fe80f18658acd51b19ec1dbcc22924231f98fc",
    mapsToName: "Button / Transparent / Active"
  },
  "5249c381257511fb8c87d55f4760ba9946c01f1d": {
    // Hovered
    name: "Button / Transparent / Hovered",
    mapsToKey: "30b0169f8a43807eecf26f060d72d62d412cb07d",
    mapsToName: "Button / Transparent / Hovered"
  },
  "97550c2903d47ad3b2b9aafcae15c59f1140cdec": {
    // Pressed
    name: "Button / Transparent / Pressed",
    mapsToKey: "29f5cd5d7ecd098788f7cf69b2596d33fc4f3938",
    mapsToName: "Button / Transparent / Pressed"
  },
  "537cef10af10bd77d56718bf50a14097638755f6": {
    // Disabled
    name: "Button / Transparent / Disabled",
    mapsToKey: "b9a1d64392829ad8347098259e8f4e267fcc2d33",
    mapsToName: "Button / Transparent / Disabled"
  },
  /* Primary Large Icon Button */
  a1d52200eb2a3dd6f4f1270910b3cdbe8c31213c: {
    // Active
    name: "Button-Large-Icon / Primary / Enabled",
    mapsToKey: "373a9b11495de0d93c26555cadab67d69907d3f4",
    mapsToName: "Button-Large-Icon / Primary / Enabled"
  },
  e40d3df5bcec183ac9dd17b525466b54662f971f: {
    // Hover
    name: "Button-Large-Icon / Primary / Hover",
    mapsToKey: "352e1708434a8afbeb9f649e7d3f6f18551793f0",
    mapsToName: "Button-Large-Icon / Primary / Hover"
  },
  "519c8f1a72eca95e4d1e7549cd99d0cb6cc43cf7": {
    // Pressed
    name: "Button-Large-Icon / Primary / Pressed",
    mapsToKey: "83c95d8e469b55fd2ef00295737100ee5e5058bf",
    mapsToName: "Button-Large-Icon / Primary / Pressed"
  },
  "0767dde19db0de2de1d4659609840ed8d1680ed3": {
    // Disabled
    name: "Button-Large-Icon / Primary / Disabled",
    mapsToKey: "2e0944dea45b47d381c3efc2705878677f71e33b",
    mapsToName: "Button-Large-Icon / Primary / Disabled"
  },
  "067cdb0cb66a530b67f183ae319051b64cc7d5ea": {
    // Enabled
    name: "Button-Large-Icon / Secondary / Enabled",
    mapsToKey: "ad243d36ae692b5bda0d4e2ed22cf5b3ec1827c4",
    mapsToName: "Button-Large-Icon / Secondary / Enabled"
  },
  be4dd0d1aeb18c859ba3cc72a1aa901178630907: {
    // Hover
    name: "Button-Large-Icon / Secondary / Hover",
    mapsToKey: "d197e2c9f13ed81b486e3f04f9ba6d431eba33fc",
    mapsToName: "Button-Large-Icon / Secondary / Hover"
  },
  "2592884615c9e0a2c931f64587bf391d0efc7194": {
    // Pressed
    name: "Button-Large-Icon / Secondary / Pressed",
    mapsToKey: "c30d3aa020babf723bc2d46d46235394da3e21cd",
    mapsToName: "Button-Large-Icon / Secondary / Pressed"
  },
  "3ebb54753b491984558c6c172ed2e2fb9981bbe1": {
    // Disabled
    name: "Button-Large-Icon / Secondary / Disabled",
    mapsToKey: "7f2fff47873c5959aeace23df2e2c007e32fafc1",
    mapsToName: "Button-Large-Icon / Secondary / Disabled"
  },
  b62be5281968f0603f530f44ddea23f8df7757c7: {
    // Enabled
    name: "Button-Large-Icon / Tertiary / Enabled",
    mapsToKey: "7cd23466d4989bc906d6630fbfd1d3a2e2c2b027",
    mapsToName: "Button-Large-Icon / Tertiary / Enabled"
  },
  "84714d927bb60abc310167d1e454588e1b8a8d53": {
    // Hover
    name: "Button-Large-Icon / Tertiary / Hover",
    mapsToKey: "d4d861f42db403a3256ec010fede7142ee91d77b",
    mapsToName: "Button-Large-Icon / Tertiary / Hover"
  },
  c78ee71185ad6321ff637f4b29e665c1522dfc7a: {
    // Pressed
    name: "Button-Large-Icon / Tertiary / Pressed",
    mapsToKey: "b9f78d6399b95a918e7aa5b803dfdc989ab01482",
    mapsToName: "Button-Large-Icon / Tertiary / Pressed"
  },
  dcfbe6d1a48a20a90f6ae9fe03dff823686eaa6d: {
    // Disabled
    name: "Button-Large-Icon / Tertiary / Disabled",
    mapsToKey: "609bb792f0609782337fbe4f7e77db1d030dcbc3",
    mapsToName: "Button-Large-Icon / Tertiary / Disabled"
  },
  cab2a1ca43148ae2b3fa7887d858923d20cd70d7: {
    // Enabled
    name: "Button-Large-Icon / Danger / Enabled",
    mapsToKey: "a7f46bcc770e4664599882840c034d0b000075a9",
    mapsToName: "Button-Large-Icon / Danger / Enabled"
  },
  "29343932e9bf963365cb92e7225c968cfbd2b8c3": {
    // Hover
    name: "Button-Large-Icon / Danger / Hover",
    mapsToKey: "af985cbe48c4ebe34b9c263e7edc88bd8e1b17d9",
    mapsToName: "Button-Large-Icon / Danger / Hover"
  },
  "9d5a3f29ce02f4e79690745c346cec810ca6280f": {
    // Pressed
    name: "Button-Large-Icon / Danger / Pressed",
    mapsToKey: "2ac34e2db9e7ea14a46de4c80cc0e11cd2df1c5e",
    mapsToName: "Button-Large-Icon / Danger / Pressed"
  },
  "3548402630729cfe3470073ed4faf66d5b5fc573": {
    // Disabled
    name: "Button-Large-Icon / Danger / Disabled",
    mapsToKey: "5562571c289ea7246b2e5e1c745df741482b78f9",
    mapsToName: "Button-Large-Icon / Danger / Disabled"
  },
  "01b96e605e010c91127097fb5baaca5b98ccab1d": {
    // Transparent
    name: "Button-Large-Icon / Transparent / Enabled",
    mapsToKey: "8619b3fe2c1af9c9130be19ffbe8473544b961a2",
    mapsToName: "Button-Large-Icon / Transparent / Enabled"
  },
  "4e75ef772f8c440c3c81c5e56c15ecd0cd7afa84": {
    // Hover
    name: "Button-Large-Icon / Transparent / Hover",
    mapsToKey: "687c23b4e4f763737ef4b4245a4e7bedde340b8d",
    mapsToName: "Button-Large-Icon / Transparent / Hover"
  },
  "746bd0779601927cd55a8e5054c92ad8ac5fe4a8": {
    // Pressed
    name: "Button-Large-Icon / Transparent / Pressed",
    mapsToKey: "685daefa0633f87f9478d737a1c056d4d2efe599",
    mapsToName: "Button-Large-Icon / Transparent / Pressed"
  },
  "2ee20f11243f2cc5cda080b157601c256d34213a": {
    // Disabled
    name: "Button-Large-Icon / Transparent / Disabled",
    mapsToKey: "608f0ad15771ca55825ff000353b11e7cba31bb2",
    mapsToName: "Button-Large-Icon / Transparent / Disabled"
  },
  "4fffb2d87cfe921917db8219a5b20cab58ef0bab": {
    // More
    name: "Button-Large-Icon / More / Enabled",
    mapsToKey: "722d39ea004277aadc694e97bc3460d217c42a8e",
    mapsToName: "Button-Large-Icon / More / Enabled"
  },
  d984f8b7ea7d523d5d856ee2e0fcbc25c559a5c1: {
    // Hover
    name: "Button-Large-Icon / More / Hover",
    mapsToKey: "eb94f4e6dac5fb289bd22421adfe229ed4a0084f",
    mapsToName: "Button-Large-Icon / More / Hover"
  },
  "90314be4d0057f1a81b92205800c8dd187960598": {
    // Pressed
    name: "Button-Large-Icon / More / Pressed",
    mapsToKey: "11b0a97878cf2261e430b287b46b559c4591e45d",
    mapsToName: "Button-Large-Icon / More / Pressed"
  },
  "47be6fa0ea0b092db03abff3443505d5eb8755e0": {
    // Disabled
    name: "Button-Large-Icon / More / Disabled",
    mapsToKey: "9bb8f80ea2e7e502ef26062b532a89c5a5340d84",
    mapsToName: "Button-Large-Icon / More / Disabled"
  },
  "3d10ba5a982c82a398fb2e79330b6c837e3cae60": {
    // Selected
    name: "Button-Large-Icon / More / Selected",
    mapsToKey: "449431d72bd3ec809944d0146908adf6e293971a",
    mapsToName: "Button-Large-Icon / More / Selected"
  },

  /* Chart */
  "72504e66377a4372d5f1bcbf20c96196eb78db15": {
    // Column
    name: "Chart / Column",
    mapsToKey: "182c46a3feca494953ad6a5c1cde7b24be135fb4",
    mapsToName: "Chart / Column"
  },
  "17f6f16775c85c41e2906592266e488dc3d78f33": {
    // Bar
    name: "Chart / Bar",
    mapsToKey: "d116d34d741870df64a2384822ce1c0563e4b589",
    mapsToName: "Chart / Bar"
  },
  bd935b1c8e1db5acf3b674f3b08e679c8195d95d: {
    // Line
    name: "Chart / Line",
    mapsToKey: "7550cd0fbacf8c401efb72602122c69523d24f01",
    mapsToName: "Chart / Bar"
  },
  "01cddc27a9b9204447917c2c77fde9d14bbb29d6": {
    // Run
    name: "Chart / Run",
    mapsToKey: "217c84aba0f4c7c303ed7119fe749ae3950d8d4a",
    mapsToName: "Chart / Run"
  },
  a2a89537d96f08b42be33dddafbd76556c04345d: {
    // Step
    name: "Chart / Step",
    mapsToKey: "f4827952ba5da146c348cc97da722fa1a5984893",
    mapsToName: "Chart / Step"
  },
  "1c3e14e403142bc25e9298f5c30a5e4f0defc514": {
    // Scatter Plot
    name: "Chart / Scatter Plot",
    mapsToKey: "c2b98d635860ab496623c3d2a2bc583db42d39f1",
    mapsToName: "Chart / Scatter Plot"
  },
  d94009387e2442abd24bc1d04f1e9b9f1efd05ca: {
    // Area
    name: "Chart / Area",
    mapsToKey: "bc073cf2a60293e46f30798e8eaf3fdace9c22d9",
    mapsToName: "Chart / Area"
  },
  "57c5f029a271aca12ec9a2001099c03e186d13d9": {
    // Streamgraph
    name: "Chart / Streamgraph",
    mapsToKey: "a02888a3480c8f0cf1ef5062264eb36f18ad31b6",
    mapsToName: "Chart / Streamgraph"
  },
  "1ea24e151241fd87911ee56b00f152328f2d1a6f": {
    name: "Chart / Schedule - Series Collapsed",
    mapsToKey: "258979d1816ff608f3efccc336786fef3f185812",
    mapsToName: "Chart / Schedule - Series Collapsed"
  },
  "7b1500bc45ce235d9fb794925e58d0af6167a69c": {
    name: "Chart / Schedule - Series Expanded",
    mapsToKey: "88f1dcf650c4e22f3ad5aeb1a1d3c26c45d5d114",
    mapsToName: "Chart / Schedule - Series Expanded"
  },
  "2b0d223f26dbd746acc4b43f9b083f34063b4de9": {
    name: "Chart/ Pareto",
    mapsToKey: "93896bf264931e903e0168ec09a782f673956b11",
    mapsToName: "Chart / Pareto"
  },
  a515981a785c1d397e42f0a3b65fe27080003229: {
    name: "Chart / Pareto - Each Column in Legend",
    mapsToKey: "cf8cccef1a650d5b1100542c5ddb699e067d689f",
    mapsToName: "Chart / Pareto - Each Column in Legend"
  },
  f22ea2ae3e10534828bd4928930a1882be1094c1: {
    name: "Chart / Pareto - Stacked Series",
    mapsToKey: "2648ee5695e41ed7fb278321bdb44a7df05ed4c0",
    mapsToName: "Chart / Pareto - Stacked Series"
  },
  a6bdbd3e656126e6082b4e164b0adde4fe157fdf: {
    name: "Chart / Pareto - Emphasize Threshold Factors",
    mapsToKey: "cc098a7cd9b322929d2258c0aadceb48a6159233",
    mapsToName: "Pareto - Emphasize Threshold Factors"
  },
  "097e033997084eb619c79415b0fe9b7af48d927b": {
    name: "Chart / Waterfall",
    mapsToKey: "1ff5b91bd2c87b2aa70ab0a4297969b936fa264e",
    mapsToName: "Chart / Waterfall"
  },
  "777d658b5cd65f1f07daa3e4ad24a428750a1606": {
    name: "Chart / Pie Chart",
    mapsToKey: "58dce4ecb94152604544c7d83ecfa2d036c6212b",
    mapsToName: "Chart / Pie Chart"
  },
  "1a313b7115be4ebfe512e1447267187d77668417": {
    name: "Chart / Pie Chart - Radius",
    mapsToKey: "6a1a4b41c8929e2f542f717c496d1bf037d96560",
    mapsToName: "Donut"
  },

  /* Confirmation Dialog Background*/
  fbfc063510257ccf16d23ce07a09830d031d21dd: {
    name: "Semi Opaque Modal Background",
    mapsToKey: "2774467eb8359125ec76acc3635da846641a70f1",
    mapsToName: "Semi Opaque Modal Background"
  },

  /* Data Filter */
  "672f67921d0faccda649f0773073c636110f6861": {
    name: "*Data Filter / Collapsed",
    mapsToKey: "6a5d9ae31f167a9b7709f569a92e420a2db3e42b",
    mapsToName: "Data Filter / Expanded=False, Filters Applied=True"
  },
  "09e39b27f591d89528a0a7fd51182555ca58acd0": {
    name: "*Data Filter / Expanded",
    mapsToKey: "9b81d0617f4aa43187a5d7df2a1435bd88e0be87",
    mapsToName: "Data Filter / Expanded=True, Filters Applied=True"
  },

  /* Date Picker */
  c93ca2c4fc64b5e13f30c924be35f8a1348036b5: {
    name: "*Date Picker / Closed",
    mapsToKey: "bc0e26d59e56f1610f5ec1a21d7311f6d06df94b",
    mapsToName: "Date Picker / Property=Date, Expanded=False"
  },
  "8e5256da263a49dc40bb6ba94c15616ebd584fe6": {
    name: "*Date Picker / Property=Date/Time, State=Closed",
    mapsToKey: "b206dffcfe955cfeea603e68a434e05937eaf955",
    mapsToName: "Date Picker / Property=Date/Time, Expanded=False"
  },
  "37ad16193b2d610bb0e1addac21970376b30619a": {
    name: "*Date Picker / Property=Date Range, State=Closed",
    mapsToKey: "427d884659c48ddae254f6908abc343d63ced531",
    mapsToName: "Date Picker / Property=Date Range, Expanded=False"
  },
  b2186f4b9048e6ed9a96474fe20c9e3e4f30cd7f: {
    name: "*Date Picker / Property=Range with time, State=Closed",
    mapsToKey: "f1ae2c4ac3b6cad39ca2641c372a80349ac6039c",
    mapsToName: "Date Picker / Property=Range with time, Expanded=False"
  },
  "66e4d30a0612d19830ce726cacd9d4b760bfebc7": {
    name: "*Date Picker / Property=Date, State=Expanded",
    mapsToKey: "970b497efa7e0aca94f909f92e65f1f65d4dfb89",
    mapsToName: "Date Picker / Property=Date, Expanded=True"
  },
  "37e1c1674aa8937ffaf06115e1c09a9dc80f173e": {
    name: "*Date Picker / Property=Date/Time, State=Expanded",
    mapsToKey: "c5a81fe6bc66f30076372bbd8a957baefdc4d3ba",
    mapsToName: "Date Picker / Property=Date/Time, Expanded=True"
  },
  "7669cca8cfb5e391594b32349ba6ea04b0c5583f": {
    name: "*Date Picker / Property=Date/Time/AmPm, State=Closed",
    mapsToKey: "f3ed601cc5ea98f6ec8a05648e4030ee2558fba7",
    mapsToName: "Date Picker / Property=Date/Time/AmPm, Expanded=False"
  },
  d52d1aaeeca26b23029b622c6e82164a88d257fb: {
    name: "*Date Picker / Property=Date/Time/AmPm, State=Expanded",
    mapsToKey: "bf4920ef76689efacb1a6b7a9a01be429121864c",
    mapsToName: "Date Picker / Property=Date/Time/AmPm, Expanded=True"
  },
  "43f01f5730274b36bed16e96034e96ac830fc621": {
    name: "*Date Picker / Property=Date Range, State=Expanded",
    mapsToKey: "eec43c80237c12050469a63e76e03e12e3e115fc",
    mapsToName: "Date Picker / Property=Date Range, Expanded=True"
  },
  "28984544fb23792200df4af8739da60f91daedbb": {
    name: "*Date Picker / Property=Range with time, State=Expanded",
    mapsToKey: "007872c7ddae7bf18d77fcd648edc961d63143c8",
    mapsToName: "Date Picker / Property=Range with time, Expanded=True"
  },

  /* Dropdown */
  f02ebbe4e9dc84d52233afc5284e9affa933c550: {
    name: "Dropdown / Dropdown With Label",
    mapsToKey: "483571a64fb9b4c51ee9edec80d7f223dba4e187",
    mapsToName: "Dropdown / Show Label=True, Expanded=False, Responsive=False"
  },
  fc37ce279b54e1a782a8fea2d8a27d06c58a1858: {
    name: "Dropdown / Dropdown Without Label",
    mapsToKey: "2701165b456a2b91036e402c37d502a2d85d7315",
    mapsToName: "Dropdown / Show Label=False, Expanded=False, Responsive=False"
  },
  "38d339c9028c20a8342a89c29d2131a156e45511": {
    name: "Dropdown / Type=Dropdown With Label & List",
    mapsToKey: "53390ac494d4d66b32c1627699d3d60e39e7a02c",
    mapsToName: "Dropdown / Show Label=True, Expanded=True, Responsive=False"
  },
  "0eac2c3341a794f98593b88ebfefaf618aea5f71": {
    name: "Dropdown / Type=Dropdown Without Label & List",
    mapsToKey: "fb016c0675faf7a96833c576840bc68fea15fe30",
    mapsToName: "Dropdown / Show Label=False, Expanded=True, Responsive=False"
  },

  /* Dynamic Panel */
  b89382e128d5ddc34227da31f5526f34228e63ef: {
    name: "*Dynamic Panel Group / Anchor Position=Top Anchor",
    mapsToKey: "ce53e0c3078795607b727b4f653acf782f07ecf4",
    mapsToName: "Dynamic Panel Group / Anchor Position=Top Anchor"
  },
  e8f02153c5180002776d6619cf4aa7df5ccac06c: {
    name: "*Dynamic Panel Group / Anchor Position=Bottom Anchor",
    mapsToKey: "3e437dbb8cf13d5ffd5c58c7f48197f7ac616b5d",
    mapsToName: "Dynamic Panel Group / Anchor Position=Bottom Anchor"
  },
  "00727c676deae244e97a10d0fd513babaa38c070": {
    name: "*Dynamic Panel Group / Anchor Position=Right Anchor",
    mapsToKey: "dfbd27033b998e4c5fda4350babbe00cd84374dc",
    mapsToName: "Dynamic Panel Group / Anchor Position=Right Anchor"
  },
  "16ec0003d56286b59387afb44a5877b1a271b075": {
    name: "*Dynamic Panel Group / Anchor Position=Left Anchor",
    mapsToKey: "73b79fd4cc8bd8db799ce1b72bc1de7c9f46b96d",
    mapsToName: "Dynamic Panel Group / Anchor Position=Left Anchor"
  },

  /* Image */
  b52929fe6ff7bc7c572a2c8b78716c709b4c1b2d: {
    name: "*Image Container / Square",
    mapsToKey: "18135110c05ec77991f413aeed5bac5db001cc79",
    mapsToName: "Image / Large"
  },

  /* Label */
  "15cc586621b0f050d99dfabfd9a8c3096cabd675": {
    name: "Label / Large Header",
    mapsToKey: "b9ac1a22feebdb989b557882c37217e12655a627",
    mapsToName: "Label / Large Header"
  },
  "8bbcaca584b9482817afe54d9aebd947d12ac5ca": {
    name: "Label / Header",
    mapsToKey: "07c907b41035d25a76a11aacf8403479512bb5c4",
    mapsToName: "Label / Header"
  },
  ef046f68c8ff2d0795298f8880ae6c73a595bc36: {
    name: "Label / Subheader",
    mapsToKey: "0a4400dad4eb99d75a8a8dd7496b61b1012271f4",
    mapsToName: "Label / Subheader"
  },
  "29045ca5d28cf90b4ddb889c3edff3c0e00c1cb9": {
    name: "Label / Large Title",
    mapsToKey: "8641d03850b49c31c18c843b65fbe9c0750db706",
    mapsToName: "Label / Large Title"
  },
  "20fb4df4e2bd0dae8d44eae1ce3c18c770653b01": {
    name: "Label / Title",
    mapsToKey: "3f9e9f591d7f1e446f263c422d0d5ee52cfacb1d",
    mapsToName: "Label / Title"
  },
  aa6b4cb2133298983a67677684cef68d77157859: {
    name: "Label / Label",
    mapsToKey: "06d64e7ecb2a37e9d05a148ef6c0c15395b9fb26",
    mapsToName: "Label / Label"
  },
  d95916e08c35b88f1c93ecd7259e6f346fba1d41: {
    name: "Label / Body",
    mapsToKey: "3be37902b366546c7c9a5b27499d702f708fae7a",
    mapsToName: "Label / Body"
  },
  ecdf813164d935530abcd45a1cdeda5d95849be3: {
    name: "Label / Body Bold",
    mapsToKey: "70b8ae2250a4b9cfd7aa6d737da5a2dd6c690132",
    mapsToName: "Label / Body Bold"
  },
  "4d02010dc7cab200f090cc74253cbec915ced80f": {
    name: "Label / Caption",
    mapsToKey: "674acbf72b015f2c9ea4f5229cb6d9b30eeb648a",
    mapsToName: "Label / Caption"
  },

  /* Link */
  "6e9666e30e11734e49d12c5b4c3abe266b342b26": {
    name: "Text Link / Primary / Default",
    mapsToKey: "19b8b74dd414d1ad1a877573c8c0da102d0d22b6",
    mapsToName: "Link / Primary / Default"
  },
  ec8897d6c7c34d88361cdb4da2ffdf14f7dce347: {
    name: "Text Link / Primary / Hover",
    mapsToKey: "5b692cec56c4919f2e52db4bb991a58bb812e63e",
    mapsToName: "Link / Primary / Hover"
  },
  a79d38eb532a9101998537063b94725d8d05cec0: {
    name: "Text Link / Primary / Pressed",
    mapsToKey: "12cbbd0e386cc7b501907e84876cccf2151d5469",
    mapsToName: "Link / Primary / Pressed"
  },
  "636e3e4f8f2889305ac6d47ad165862966c31992": {
    name: "Text Link / Primary / Visited",
    mapsToKey: "f7992cd80fb9d663f7bdb2c5bc5a2c2fdedaef5b",
    mapsToName: "Link / Primary / Visited"
  },
  c81bafc26968581bbc4981f48888777f36b28b6a: {
    name: "Text Link / Primary / Disabled",
    mapsToKey: "f0a568fe51b609ad69758cc5a90fc445a2fae448",
    mapsToName: "Link / Primary / Disabled"
  },
  "256168b8f35c6f30533dcc42f82de349e608ef76": {
    name: "Text Link / Secondary / Default",
    mapsToKey: "dff6e7443e57a1d4f19b3f641e3a2c4832258cc5",
    mapsToName: "Link / Secondary / Default"
  },
  "0f48a3a650488e84ee11c7b7ebcdb26030f81547": {
    name: "Text Link / Primary / Hover",
    mapsToKey: "b10cf436ab859a64d3fe59e3ad0ec72fb0a817ba",
    mapsToName: "Link / Secondary / Hover"
  },
  "527544e3341d07e68e327e38a0ed50c580bffbe8": {
    name: "Text Link / Secondary / Pressed",
    mapsToKey: "9f48e47059831a25eefed884bc52d3d054f6b305",
    mapsToName: "Link / Secondary / Pressed"
  },
  cd188cae06ed41686038158ea35c23388c68f67a: {
    name: "Text Link / Secondary / Visited",
    mapsToKey: "7fd149f08ea8c2f9b5de3630d8ff8c6cf66ca7e6",
    mapsToName: "Link / Secondary / Visited"
  },
  "984a13f7afab1bfec3aba73ab809d0ad223286db": {
    name: "Text Link / Secondary / Disabled",
    mapsToKey: "6e783ff45b7795fa9a52cfb3e00c01a20c603c43",
    mapsToName: "Link / Secondary / Disabled"
  },

  /* List */
  "173e3ebc38cb2385afd300ea0f14a3defb4b7964": {
    name: "*List",
    mapsToKey: "82616393b514a4f7f36d3ed38ba2d2c5dd57af7d",
    mapsToName: "List / Show Checkboxes=True"
  },

  /* List Shuttle */
  "0a034d8da40e06b3d533b9b6e3725d33791add74": {
    name: "*List Shuttle",
    mapsToKey: "8ca97f1b9f4d5f80fc4764760dd98ebfac07f44b",
    mapsToName: "List Shuttle / Size=Default, State=Default"
  },

  /* Menu Bar */
  ea1ef3733f7158c64692493443dda9a461b50fd4: {
    name: "*Menu Vertical Collapsed / Property 1=With Icons",
    mapsToKey: "22cedf3d291eba0383449e13af5ace085baad479",
    mapsToName: "Menu Vertical Collapsed / Has Icons=True, Color=Dark"
  },
  ad335a2aa1bbe4751e0f5d99c20074ee77e4f21b: {
    name: "*Menu Vertical Collapsed / Property 1=Without Icons",
    mapsToKey: "418e7a538246ce53199e73cd1b17757ad7794b71",
    mapsToName: "Menu Vertical Collapsed / Has Icons=False, Color=Dark"
  },
  "200a6c1181736b9817e2356e2f6b77176d03842c": {
    name: "*Menu Vertical Expanded / Type=Expanded with Icons, Variant=Flyout",
    mapsToKey: "eb362b17699944691f6e0d767f64f6ade99e25cf",
    mapsToName:
      "Menu Vertical Expanded / Has Icons=True, Variant=Flyout, Color=Dark"
  },
  "68697365427c40c1c7dc5aea821eaa6972b9e4fb": {
    name: "*Menu Vertical Expanded / Type=Expanded no Icons, Variant=Flyout",
    mapsToKey: "25a6233c19024b2939930bc919b093c90c8ea262",
    mapsToName:
      "Menu Vertical Expanded / Has Icons=False, Variant=Flyout, Color=Dark"
  },
  "33d7fdccb78f51dec6d6dd380088c1967b11baf2": {
    name: "*Menu Vertical Expanded / Type=Expanded with Icons, Variant=Nested",
    mapsToKey: "bdbfdff9ab3809444b3b18c25329ca03cebac51f",
    mapsToName:
      "Menu Vertical Expanded / Has Icons=True, Variant=Nested, Color=Dark"
  },
  "65304f60886baf10cb523dc92b13ba7f65c19258": {
    name: "*Menu Vertical Expanded / Type=Expanded no Icons, Variant=Nested",
    mapsToKey: "1b057296042fd507080cca4c7f2babc98209714c",
    mapsToName:
      "Menu Vertical Expanded / Has Icons=False, Variant=Nested, Color=Dark"
  },

  /* Menu Button */
  a8444e6df489435123f452af61c5b4554854506e: {
    name: "*Menu Button / Type=Icon Only, State=Enabled",
    mapsToKey: "b6aace707aad6722a7ea61199769b48c4539ec5c",
    mapsToName: "Icon Menu Button / State=Enabled, Menu Open=False, Theme=Light"
  },
  "420dfc3271a8a5e4e8d1e9832369e18c5bdf51eb": {
    name: "*Menu Button / Type=Icon Only, State=Hover",
    mapsToKey: "676e9a6766b06fbe5aba9f2c059f4ff825b22ac6",
    mapsToName: "Icon Menu Button / State=Hover, Menu Open=False, Theme=Light"
  },
  "5df7fb7ada1bbe859b67752f6584d156d163f347": {
    name: "*Menu Button / Type=Icon Only, State=Pressed",
    mapsToKey: "f0f060efcff7f5e37d01878da4e530c8fbd749ef",
    mapsToName: "Icon Menu Button / State=Pressed, Menu Open=False, Theme=Light"
  },
  e6d680dc39382463d9ba298bccd0d1cf98b4b3da: {
    name: "*Menu Button / Type=Icon Only, State=Selected",
    mapsToKey: "fa4883938345527122951862adbf9cdd7c9dc995",
    mapsToName: "Icon Menu Button / State=Selected, Menu Open=True, Theme=Light"
  },
  "3b57e6a989804d8236124d731965461a0c955993": {
    name: "*Menu Button / Type=Icon Only, State=Disabled",
    mapsToKey: "2adbde0c6cd65a93df1de1166a4e65140dc6a9bc",
    mapsToName:
      "Icon Menu Button / State=Disabled, Menu Open=False, Theme=Light"
  },
  afbe9cb6f5e1f300c07b0722be04a4f9e8789a6e: {
    name: "*Menu Button / Type=Primary, State=Enabled",
    mapsToKey: "74ad1e6b89d59926949bccd8963c7fc1304fe962",
    mapsToName:
      "Menu Button / Variant=Primary, State=Enabled, Menu Open=False, Theme=Light"
  },
  "90f1b6755cfeb2160b3ca78d7c1803a8f45ae220": {
    name: "*Menu Button / Type=Primary, State=Hover",
    mapsToKey: "d78dbc8cdc9976a89644a05c9968dfa39fd8a382",
    mapsToName:
      "Menu Button / Variant=Primary, State=Hover, Menu Open=False, Theme=Light"
  },
  "3ebfb2fd64f511609ae58115e869f59f03b8a236": {
    name: "*Menu Button / Type=Primary, State=Pressed",
    mapsToKey: "bdb287c71020bb338da31d74ee021b7df02e6973",
    mapsToName:
      "Menu Button / Variant=Primary, State=Pressed, Menu Open=False, Theme=Light"
  },

  ae240cf84f8a4f79b865675b32a6a0fa0bc9e7f0: {
    name: "*Menu Button / Type=Primary, State=Disabled",
    mapsToKey: "dfdebefe93b109d3d1940418dca8face07f0ff15",
    mapsToName:
      "Menu Button / Variant=Primary, State=Disabled, Menu Open=False, Theme=Light"
  },

  /* Pagination */
  "2ff864bc3a12dbd1e2ec3a4c31079967b095c2df": {
    name: "*Pagination Strip",
    mapsToKey: "33003ffd14b5ba7fac7e0d907a1ac43f2f3dc598",
    mapsToName: "Pagination Strip"
  },

  /* Toggle */
  d2dd97f672a2172cb33f1ea23e4b07e275426e2b: {
    name: "Toggle / State=Default",
    mapsToKey: "3f566c8e505ca6cd589f8099a2bd046a2e6d2f73",
    mapsToName: "Toggle / State=Default"
  },
  dc1fdcc2104eaf44bd5c802fabaa9f027214c3ec: {
    name: "Toggle / State=Unselected Hover",
    mapsToKey: "5da1ad2f996eacde5d5b0bbedfd895c216e702aa",
    mapsToName: "Toggle / State=Unselected Hover"
  },
  df7afa25538076e0343c6662f80fca7d3858ba2f: {
    name: "Toggle / State=Pressed",
    mapsToKey: "6b6d0f81f75af907c4948d0a1b8ea9c635d2e41d",
    mapsToName: "Toggle / State=Pressed"
  },
  "43e710b8819897b549be2c6173f5d31b9394597b": {
    name: "Toggle / State=Selected",
    mapsToKey: "1a53cf5c4e4c6fb3e5596f804945984ee1f04f0b",
    mapsToName: "Toggle / State=Selected"
  },
  "86a3c24e110ffd7911e40300642c8e75a287f515": {
    name: "Toggle / State=Hover",
    mapsToKey: "5c443dd2a203620ebae15a7f6406b12804644645",
    mapsToName: "Toggle / State=Selected Hover"
  },
  "0e51386dea950002b0619e97cff78a82fa0da0ee": {
    name: "Toggle / Disabled",
    mapsToKey: "f7c71ab7cefc2e02c45e0782595d03b0823f1554",
    mapsToName: "Toggle / Disabled"
  },
  "6e5082ef3e22dccb33b894b6ad615ba907dc8208": {
    name: "",
    mapsToKey: "ab8cc6e64557f28bd64631c8574e2e7d0f9439f5",
    mapsToName: "Toggle / State=Disabled-Selected"
  },
  "251266229c3a9bcf1c8a410baf076faf472cd0b0": {
    name: "Toggle / State=Unselected Pressed",
    mapsToKey: "0db541c3d3ed2d4aa822e61f9f75f1e7b56b5137",
    mapsToName: "Toggle / State=Unselected Pressed"
  },

  /* Toggle Chip */
  f6db4a062dd646c4ecfcefaacf02a4dd3a27795d: {
    name: "Toggle-Chip / Property 1=Enabled-Deselected",
    mapsToKey: "39fa06fcf0564fbf7bc5b2d98b453f80e264e3c9",
    mapsToName: "Toggle-Chip / States=Enabled-Deselected"
  },
  "634bfce134191d775f4bcf16c1aaa3c430a58b38": {
    name: "Toggle-Chip / Property 1=Enabled-Focused",
    mapsToKey: "ed1e92f6cc10f5688b524425043ccfa00a6e1618",
    mapsToName: "Toggle-Chip / States=Enabled-Focused"
  },
  "2374bbdac7cf5c1ca6592ac3484954c75cb4b770": {
    name: "Toggle-Chip / Property 1=Selected",
    mapsToKey: "5b7c29745306404f64336a99f1e4070d30be0273",
    mapsToName: "Toggle-Chip / States=Selected"
  },
  "2087500a30f65fdc9b89960d131553bc8002dd3a": {
    name: "Toggle-Chip / Property 1=Selected-Focused",
    mapsToKey: "ee0141223343666b6fa7db33497dac911e1ba8ab",
    mapsToName: "Toggle-Chip / States=Selected-Focused"
  },
  "2b24b3b539713ef730bdbce0e966fd3a7f90eeb7": {
    name: "Toggle-Chip / Property 1=Hovered",
    mapsToKey: "660fa9581980fc9ce36f68158f3ea89b861b8362",
    mapsToName: "Toggle-Chip / States=Hover"
  },
  "9544e4c11dcb94df6e4165b7327ab7e7b3b1dfa0": {
    name: "Toggle-Chip / Property 1=Pressed",
    mapsToKey: "f254ec8f1fbdeb43ef87bacdca40e855e20e2328",
    mapsToName: "Toggle-Chip / States=Pressed"
  },
  "76263b3cbd2009b2742057a01cf34f83583074f4": {
    name: "Toggle Chip / Property 1=Disabled-Unselected",
    mapsToKey: "39a2a8437cdba370e5088e37d710af6d8e1ac8b7",
    mapsToName: "Toggle Chip / States=Disabled-Unselected"
  },
  "3f29e0c1433b065adda8d07f293b764ff11427e3": {
    name: "Toggle Chip / Property 1=Disabled-Selected",
    mapsToKey: "480c2364ae5a662889a518509fb5698cde11666b",
    mapsToName: "Toggle Chip / States=Disabled-Selected"
  },

  /* Icons */
  /* Add */
  "00d984c97a797ab5db1e0471e7b855af8bc7861a": {
    // Active
    name: "Add / Active",
    mapsToName: "Add / active",
    mapsToKey: "afa266a23a18d71dc798ee1857c3787efc6ba7bc"
  },
  "8c5ebec94adeb7b28df1934694be77fcee85b070": {
    // Hover
    name: "Add / Hover",
    mapsToName: "Add / hover",
    mapsToKey: "6c814645164a3e10cb7bc7e7d4b4ba7c639cecfb"
  },
  "68f81d0c7ebcf33f74ac0ba2949283bb8b424002": {
    // Disabled
    name: "Add / Disabled",
    mapsToName: "Add / disabled",
    mapsToKey: "2fc0a092356c6d10e3d2294424b795e69ecccb3b"
  },
  /* Alert */
  "4b0758599b18083cf50fe3edc69976e3f3288b6b": {
    // Active
    name: "Alert / Active",
    mapsToName: "Alert / active",
    mapsToKey: "6a41ba5473f1ae2cfc059aa36870ac9067c394d0"
  },
  "6ec50c7b0ecbab72a00492f10e962ec105145a81": {
    // Hover
    name: "Alert / Hover",
    mapsToName: "Alert / hover",
    mapsToKey: "286dcf521f496d2d99f6bb44ea0d9f7fdbf901ec"
  },
  b465de9c54648b7e09f9940c23f27a6c74ab5ab8: {
    // Disabled
    name: "Alert / Disabled",
    mapsToName: "Alert / disabled",
    mapsToKey: "26b03a403106a8ac89d8dce24620d7dc41531526"
  },
  /* AR */
  ea75a2fc3028ac83013a80f2f27f1232f893d1b8: {
    // Active
    name: "AR / Active",
    mapsToName: "AR / active",
    mapsToKey: "cf2bb2f1495137268ee502cefc764795716ad1d8"
  },
  d089617805fb7591cc7045d4f9a15f5496ac2a1d: {
    // Hover
    name: "AR / Hover",
    mapsToName: "AR / hover",
    mapsToKey: "c7bfec2638aa69bf5e802d5a9fc4435fa287d2e0"
  },
  cb7d670a167945db981809701d094e5314a8a3c9: {
    // Disabled
    name: "AR / Disabled",
    mapsToName: "AR / disabled",
    mapsToKey: "0663916f650b42aeeb8fee1ad5b851849d3453bc"
  },
  /* Archive */
  "1e6f414eef547813f5577674d623f23ebdc33d9e": {
    // Active
    name: "Archive / Active",
    mapsToName: "Archive / active",
    mapsToKey: "2fb76ccb42af53eea9ff71690254d37f30ab11f9"
  },
  fd176ebc92cadf1319ed689c8c0a1d228200db62: {
    // Hover
    name: "Archive / Hover",
    mapsToName: "Archive / hover",
    mapsToKey: "c02aa680c3f39d41b3b55765251dc1498335849d"
  },
  "1986021ce2220629331c28ca2e8b7000a5b5fa0e": {
    // Disabled
    name: "Archive / Disabled",
    mapsToName: "Archive / disabled",
    mapsToKey: "20100bb11ef2c4d3e93ddcbfb0f8e950f9bc231a"
  },
  /* Arrow_Ascending */
  c0ab8ea54456cb9fb6b17abfd46b0102d2a3bbd0: {
    // Active
    name: "Arrow_Ascending / Active",
    mapsToName: "Arrow_Ascending / active",
    mapsToKey: "debd0325649dbd41b87e109d4a0c20f2a7c03b3c"
  },
  f18688dbf95fdeef1453c18f6b18feaf06722da5: {
    // Hover
    name: "Arrow_Ascending / Hover",
    mapsToName: "Arrow_Ascending / hover",
    mapsToKey: "0fec0b66386f746817fe4731b44c08789b0ee35c"
  },
  "4b3e7250f7b7199a38097981363402bbd4c50ac9": {
    // Disabled
    name: "Arrow_Ascending / Disabled",
    mapsToName: "Arrow_Ascending / disabled",
    mapsToKey: "8e549647ddbebae6f70ba0520f76c6147b1a7292"
  },
  /* Arrow_Descending */
  dd1252a7a457262b5a619eb00170d03905502e0d: {
    // Active
    name: "Arrow_Descending / Active",
    mapsToName: "Arrow_Descending / active",
    mapsToKey: "9add3b4e3870c00d7c60c4f8d83020d807288bb9"
  },
  "70f9a7b5e7ec8e010ffb1c2e1490d8f634e9689f": {
    // Hover
    name: "Arrow_Descending / Hover",
    mapsToName: "Arrow_Descending / hover",
    mapsToKey: "e4e47eb2292d7c0316d95aad6a01fc4ded213e21"
  },
  "1c455b37ca7a6ca610815267be58d4a963d79e5b": {
    // Disabled
    name: "Arrow_Descending / Disabled",
    mapsToName: "Arrow_Descending / disabled",
    mapsToKey: "e7deb6bee9b6eae5342774beebc2b42aa348b833"
  },
  /* Arrow_Down */
  ede06832cf47f8edf9e6fc0ade40c8a79f565460: {
    // Active
    name: "Arrow_Down / Active",
    mapsToName: "Arrow_Down / active",
    mapsToKey: "b429a8adaf3cf4177313a9bea733aff427ed1467"
  },
  "60299a2619f0c45bc236de14ca66c89cd36c8a09": {
    // Hover
    name: "Arrow_Down / Hover",
    mapsToName: "Arrow_Down / hover",
    mapsToKey: "73e38afe97c7507065455ac7f00b0a06d8f3d403"
  },
  "2c812c00ddb124146a48d65b5df91a859945487f": {
    // Disabled
    name: "Arrow_Down / Disabled",
    mapsToName: "Arrow_Down / disabled",
    mapsToKey: "c257a55b5cc0b6a51122cdc61670d6f5ce190514"
  },
  /* Arrow_Left */
  "53fd832b343300ff3dec879c4002ba8da4a51ab1": {
    // Active
    name: "Arrow_Left / Active",
    mapsToName: "Arrow_Left / active",
    mapsToKey: "cfeec1c780acbc3d2aab00be9f60ca5ce48b2015"
  },
  "19f9864d62ca2ba79a1ec6d512a8ff89c6bc5880": {
    // Hover
    name: "Arrow_Left / Hover",
    mapsToName: "Arrow_Left / hover",
    mapsToKey: "6ecc3d87a6d3ff1b53af5045978cb9748f543908"
  },
  af6fcbc214e7e876e770d672b8b8d8cd81b78187: {
    // Disabled
    name: "Arrow_Left / Disabled",
    mapsToName: "Arrow_Down / disabled",
    mapsToKey: "f0247e51de8d18d0d0d18fb1ef7b8dafbd839240"
  },
  /* Arrow_Right */
  "133468f7ab123f1b3e5a1ebe458285cee8bd2b06": {
    // Active
    name: "Arrow_Right / Active",
    mapsToName: "Arrow_Right / active",
    mapsToKey: "03169309dad25a2032bc37dada5d12586b39958c"
  },
  "88a4b3aa3eec56a4a8f3af151360b6149a6fa240": {
    // Hover
    name: "Arrow_Right / Hover",
    mapsToName: "Arrow_Right / hover",
    mapsToKey: "25a9bf34deb9ba0cf5efa9faaf5f928e4d0af905"
  },
  ecc645075d1d68dc504edd49ad56758ad11c4e39: {
    // Disabled
    name: "Arrow_Right / Disabled",
    mapsToName: "Arrow_Right / disabled",
    mapsToKey: "52299e8a63cce54c678184257e09928b0438172b"
  },
  /* Arrow_Up */
  ba0492eb9e427b02aaa4684aabd13cb280ffe534: {
    // Active
    name: "Arrow_Up / Active",
    mapsToName: "Arrow_Up / active",
    mapsToKey: "feabadde00ad50b81774bbea7e5c7c1fe9186649"
  },
  a0d2b6e005156b73172796f93e3afbd0b0dbc07f: {
    // Hover
    name: "Arrow_Up / Hover",
    mapsToName: "Arrow_Up / hover",
    mapsToKey: "10c980faac418e8c66925259b2d5fac5b22d178e"
  },
  e98b44bd140e1c018dec374f3873291d53bac59c: {
    // Disabled
    name: "Arrow_Up / Disabled",
    mapsToName: "Arrow_Up / disabled",
    mapsToKey: "c52f9f6b68ad774780df6fb6b75069362304043d"
  },
  /* Assign */
  "2827dd59ec9d3a5379f569e90217d4f9888678f8": {
    // Active
    name: "Assign / Active",
    mapsToName: "Assign / active",
    mapsToKey: "2d80bb81b35acd3d73a922fe72ee561357edefe3"
  },
  "2f8c6af58bd536421c90d3c17d8b3280dd4e695e": {
    // Hover
    name: "Assign / Hover",
    mapsToName: "Assign / hover",
    mapsToKey: "b51728f307c00dc31d8e4b9c7f664886476231b4"
  },
  "8723d4ad0f30c7468751a619c279c6ecd2e6671d": {
    // Disabled
    name: "Assign / Disabled",
    mapsToName: "Assign / disabled",
    mapsToKey: "633ac4454454c707c1bd643b37c074b5dcaf9ba8"
  },
  /* Attach */
  f8d3ad904de0d88efeeba4d26629106615d1590b: {
    // Active
    name: "Attach / Active",
    mapsToName: "Attach / active",
    mapsToKey: "d338f6a4011d0a4f58c7dd7c7505c684f804ac39"
  },
  "003dd469c1129c1630fa5edb110dbfe9ae496467": {
    // Hover
    name: "Attach / Hover",
    mapsToName: "Attach / hover",
    mapsToKey: "ced620379899a761a96cce68c0e94dfb32ade411"
  },
  "3b3756810399bbf1c6505d3930cbab87e17a9132": {
    // Disabled
    name: "Attach / Disabled",
    mapsToName: "Attach / disabled",
    mapsToKey: "70f8321ee6d00a3f798e803ba36ff98b12c43f1c"
  },
  /* Avatar */
  d24ec96d57acddfb2126c2e869e51c2bbab2e6ca: {
    // Active
    name: "Avatar / Active",
    mapsToName: "Avatar / active",
    mapsToKey: "788be6c553ac264124506dcbb644d3a188093584"
  },
  "048a7a98598fd170a8d78870a7eb469109e37702": {
    // Hover
    name: "Avatar / Hover",
    mapsToName: "Avatar / hover",
    mapsToKey: "1027611593825d04f676248408a78ff813798b7e"
  },
  "9d2f14199b005a9fc3ec1a828625656e730ae028": {
    // Disabled
    name: "Avatar / Disabled",
    mapsToName: "Avatar / disabled",
    mapsToKey: "df9e89e9f03a2a525363adaadcb3e87137f7d280"
  },
  /* Back */
  ccfbbc1ccb29ede6dc64d69b8f363354191793f1: {
    // Active
    name: "Back / Active",
    mapsToName: "Back / active",
    mapsToKey: "10810af6807b64b6c35a97c18e3111aed3b387d6"
  },
  "9632ccd3029c2b3d044eb426abbcee42469381ab": {
    // Hover
    name: "Back / Hover",
    mapsToName: "Back / hover",
    mapsToKey: "cd256fd88d974df0556f9e8f73acbeda2a0af18b"
  },
  b3c770eba6bd5997ff36e884a9e50c8737aeece1: {
    // Disabled
    name: "Back / Disabled",
    mapsToName: "Back / disabled",
    mapsToKey: "bfcfa60c973b34c682c9a8b9f4e4811705de7d2c"
  },
  /* Backspace */
  "3c05dcd7b8af2561c8666a5524ab7fb89cfda3d8": {
    // Active
    name: "Backspace / Active",
    mapsToName: "Backspace / active",
    mapsToKey: "eac8cfce16ee68901f43438c51c7be1bb5f478f2"
  },
  "3ba6acd6b05f1db40252f6dc0e90d4f811932fe7": {
    // Hover
    name: "Backspace / Hover",
    mapsToName: "Backspace / hover",
    mapsToKey: "56eb7de0ae31de166a548359fc91ee23a070085f"
  },
  "0380ecc9c716ed9463765fab3dc375ba523727b1": {
    // Disabled
    name: "Backspace / Disabled",
    mapsToName: "Backspace / disabled",
    mapsToKey: "38a4b7029ab27f8a6c278d130c1982de91853bde"
  },
  /* Bind */
  "5567ff44983e1964b17aa15fd25e6f5af0caf432": {
    // Active
    name: "Bind / Active",
    mapsToName: "Bind / active",
    mapsToKey: "987a01ed871346b4ee7717d17b0b099b11bd938d"
  },
  "1bf83fab6423a55c9dba6699757bd5b7a7590b07": {
    // Hover
    name: "Bind / Hover",
    mapsToName: "Bind / hover",
    mapsToKey: "1ac20daa8f3a864951279773df8b9110413ad89b"
  },
  "727e43f84a976dfe434c756661b23af1dacb650d": {
    // Disabled
    name: "Bind / Disabled",
    mapsToName: "Bind / disabled",
    mapsToKey: "017c0a393fce6ca3f470ff2e6a975a6290a0257a"
  },
  /* Calendar */
  "9355c672a195f7b1a12d1ebed09336b7a90eef88": {
    // Active
    name: "Calendar / Active",
    mapsToName: "Calendar / active",
    mapsToKey: "7640d661693bb94d9fbecb30311ac2190316248b"
  },
  "8b3d4dbc5e347f7ca2d72726c779e504951863b9": {
    // Hover
    name: "Calendar / Hover",
    mapsToName: "Calendar / hover",
    mapsToKey: "5c109130e0fb6b7efb1379e82612308de274482e"
  },
  f14dc3e0aeaec3e7ef0f7979591173f1a9cd2d70: {
    // Disabled
    name: "Calendar / Disabled",
    mapsToName: "Calendar / disabled",
    mapsToKey: "044a75b8e758f1e69c8ae280e72c55a8bb8f3212"
  },
  /* Calibrate */
  aa181db384aae46d4293f9dfb814a5b27d5b6e4b: {
    // Active
    name: "Calibrate / Active",
    mapsToName: "Calibrate / active",
    mapsToKey: "ba525e07cc857328af685329e08a573d5c670ac6"
  },
  b8eb42cf2a71f8edaf4540934bff437cddb1ccc6: {
    // Hover
    name: "Calibrate / Hover",
    mapsToName: "Calibrate / hover",
    mapsToKey: "b4d60d5e1ff6665410ee46a04616ed22f88caac4"
  },
  "5b73a444a00ef4e23140a01d75d56b3d54fa341b": {
    // Disabled
    name: "Calibrate / Disabled",
    mapsToName: "Calibrate / disabled",
    mapsToKey: "a02d4be82a91b70a38f1aa188f60cff1a977d591"
  },
  /* Chat */
  "4a7df849342be2829281819ab9b901831e069636": {
    // Active
    name: "Chat / Active",
    mapsToName: "Chat / active",
    mapsToKey: "26b3c797b024a9668c7169cda0f681d2935d53b9"
  },
  bac59a52e7734b92c53b6fa682310e46c2d5678f: {
    // Hover
    name: "Chat / Hover",
    mapsToName: "Chat / hover",
    mapsToKey: "af1e141f61ef959baa2ceea20a3fbaae7623770f"
  },
  "5da3b6f3aedaaa20df24c8592eb1167e0c6528ab": {
    // Disabled
    name: "Chat / Disabled",
    mapsToName: "Chat / disabled",
    mapsToKey: "213a7fea33c97998961ab4f7d41c9e724554559e"
  },
  /* Chevron_Down */
  e177807707f9ff062d2e710e4e272dc94f3a8466: {
    // Active
    name: "Chevron_Down / Active",
    mapsToName: "Chevron_Down / active",
    mapsToKey: "78aafb4fd5b26ac1f31e5e12e7bc59b28167ee92"
  },
  "7f31d8ecf1b829e3b113006aec0939c2aeb39720": {
    // Hover
    name: "Chevron_Down / Hover",
    mapsToName: "Chevron_Down / hover",
    mapsToKey: "94991f30e9235104313634b1c8392a8735dd3699"
  },
  "802565963a2d6ac74ec404609d40091adc2a4509": {
    // Disabled
    name: "Chevron_Down / Disabled",
    mapsToName: "Chevron_Down / disabled",
    mapsToKey: "05b0cfa30f1c236adb4265d08b346f528e7ac09f"
  },
  /* Chevron_Left */
  "2f9097b2ca622303267827dbd9649587b2841044": {
    // Active
    name: "Chevron_Left / Active",
    mapsToName: "Chevron_Left / active",
    mapsToKey: "f185163dc65d29879c276a31d57779ca72fffe10"
  },
  "1169a8a0c7c6b65eac0663456d57fadfdecababf": {
    // Hover
    name: "Chevron_Left / Hover",
    mapsToName: "Chevron_Left / hover",
    mapsToKey: "39704b16d029b5baa3e665da7e499793e65c3a63"
  },
  "0c71f7c614b2487ddbd51aed235c39365abd592d": {
    // Disabled
    name: "Chevron_Left / Disabled",
    mapsToName: "Chevron_Left / disabled",
    mapsToKey: "685e6ebf8c2ef2672212a4713faf10e8ed0ef3a4"
  },
  /* Chevron_Right */
  "2d276ef247b097f22543e65b6a5bb2ee2bdbdded": {
    // Active
    name: "Chevron_Right / Active",
    mapsToName: "Chevron_Right / active",
    mapsToKey: "8f307bcb1f59358736bce93d5c630ee91892529d"
  },
  "63b3ba3d7f8df012692ad9237be365f8c342ecde": {
    // Hover
    name: "Chevron_Right / Hover",
    mapsToName: "Chevron_Right / hover",
    mapsToKey: "88d5f717346764074e99cdbda0bbc7cc271df48c"
  },
  "797a28730f5833b100d718a5b0cfcfca1d6f7fff": {
    // Disabled
    name: "Chevron_Right / Disabled",
    mapsToName: "Chevron_Right / disabled",
    mapsToKey: "9c47e341d597eb7ac5ee34357a2d05e8487e1160"
  },
  /* Chevron_Up */
  "1a42e879edd23d4a0f882103bfe8c1719bad474f": {
    // Active
    name: "Chevron_Up / Active",
    mapsToName: "Chevron_Up / active",
    mapsToKey: "b64066fbb3731e0c19ee35c9b9082d142ba12284"
  },
  c899ee2e3d352f63e623db4460ca9cd3cf7666f7: {
    // Hover
    name: "Chevron_Up / Hover",
    mapsToName: "Chevron_Up / hover",
    mapsToKey: "a9173ac912e3ba214b2ae268403396a0b737ff6b"
  },
  "435fe0d59e63df449754ae41f32b922aa8e5f39a": {
    // Disabled
    name: "Chevron_Up / Disabled",
    mapsToName: "Chevron_Up / disabled",
    mapsToKey: "00319fd972cd1c9946ce32ae2444224761c6a0bd"
  },
  /* Clipboard */
  cd8dfa862223fc96997e0f80cbca483d38c32ac3: {
    // Active
    name: "Clipboard / Active",
    mapsToName: "Clipboard / active",
    mapsToKey: "e1f7793d3e4ddf4d1d16e45211a255c8608a37da"
  },
  "23ce62a51002f4dffeb4fafcf691cb74b322072c": {
    // Hover
    name: "Clipboard / Hover",
    mapsToName: "Clipboard / hover",
    mapsToKey: "726b8ae36b1f1ea227004acfa38a323ae843ec25"
  },
  "11a6ceed7aa9e95fcf64409f6fcc9bfdcfbe82d1": {
    // Disabled
    name: "Clipboard / Disabled",
    mapsToName: "Clipboard / disabled",
    mapsToKey: "3db0e4bc73b5bb47ab348593656c4481060b9318"
  },
  /* Close */
  "7ed7932da89f69d23d7300355917e76abbb6ee5a": {
    // Active
    name: "Close / Active",
    mapsToName: "Close / active",
    mapsToKey: "3d3fcdfe8923f0f903152f48dbb3ef36ae081f8b"
  },
  f30318a596d5b217b2db81c92875d10c3add8da2: {
    // Hover
    name: "Close / Hover",
    mapsToName: "Close / hover",
    mapsToKey: "89db75b3e114a6bf9d0ddc205368fd600458d13a"
  },
  cf1d1637bdfa16e9bdee65af88b470066de14c0b: {
    // Disabled
    name: "Close / Disabled",
    mapsToName: "Close / disabled",
    mapsToKey: "25974fcbc68a572005b499eda00743b15c640bfd"
  },
  /* Close_Circle */
  "0804aadb76106da9e1afe914a0c516f7b9ec70c8": {
    // Active
    name: "Close_Circle / Active",
    mapsToName: "Close_Circle / active",
    mapsToKey: "3b3d9f6d9dd3684bdec6d1c8c62347cffb629629"
  },
  b8711c31341aeddd7cee56af505cd7d17873737e: {
    // Hover
    name: "Close_Circle / Hover",
    mapsToName: "Close_Circle / hover",
    mapsToKey: "4f34b4b74aa31d2dbc4ddd52bb4d169013c8dd89"
  },
  "77da29ac3b03ce591908415e79961c7dc45f6380": {
    // Disabled
    name: "Close_Circle / Disabled",
    mapsToName: "Close_Circle / disabled",
    mapsToKey: "532030049c9b67093bfb5b60e780499cd51a09f0"
  },
  /* Cloud */
  "4e9622b92e3410c1f81a2e1abb7765c4b9f0d34c": {
    // Active
    name: "Cloud / Active",
    mapsToName: "Cloud / active",
    mapsToKey: "f49821a996dae915ab83d8289c138646a4e6871c"
  },
  "9675bc3652c21dd9ddf952418b6308d06b8027c7": {
    // Hover
    name: "Cloud / Hover",
    mapsToName: "Cloud / hover",
    mapsToKey: "10504b9628fde1675d211ed2893f77bcc4175bf1"
  },
  ad030e47344506cadc58cb170d1b06bcd0c876b4: {
    // Disabled
    name: "Cloud / Disabled",
    mapsToName: "Cloud / disabled",
    mapsToKey: "3251f483f3aa215951e75f9bfbea9abe37e1e4ea"
  },
  /* Comment */
  "894780437493a47bf7cce007b483a11ebb0934be": {
    // Active
    name: "Comment / Active",
    mapsToName: "Comment / active",
    mapsToKey: "26f9188057038b0ac8f58a5576a25c5d4d26fbb4"
  },
  "5b25e4a7b7973468f78b96f70af74d71859b5c98": {
    // Hover
    name: "Comment / Hover",
    mapsToName: "Comment / hover",
    mapsToKey: "302b596474e7b4de15afd9d84352b6b92a8f9b93"
  },
  "5ba4094a30e2ae752fbce6897ffeef9b9a4739d3": {
    // Disabled
    name: "Comment / Disabled",
    mapsToName: "Comment / disabled",
    mapsToKey: "b26f33f53d6ee315e87d40c792e0ca59de6c9d8d"
  },
  /* Copy */
  c045dd42b350307c5967b3b71c18479c91254529: {
    // Active
    name: "Copy / Active",
    mapsToName: "Copy / active",
    mapsToKey: "6a46f9a4244db19465bb9c03b5af1987417b61f6"
  },
  bf2d4895056d336a7476585ace5b50f1baf9c802: {
    // Hover
    name: "Copy / Hover",
    mapsToName: "Copy / hover",
    mapsToKey: "2d13b10f7ede5533f5812daa4c585c0e5a5518b8"
  },
  "3adcf93ed69cd5b763e1c3c46008058f43829365": {
    // Disabled
    name: "Copy / Disabled",
    mapsToName: "Copy / disabled",
    mapsToKey: "f1a77a1b1cdbd881ed211f6912b0701f72879f14"
  },
  /* Delete */
  "701c021fe6bff70c5d44b03d8991cdd3be73941a": {
    // Active
    name: "Delete / Active",
    mapsToName: "Delete / active",
    mapsToKey: "f6412ce0ad9e09e80389806269eff26baa3e95b7"
  },
  "43e8e34e29eb05b69c77874ec21bc32a1425e2e5": {
    // Hover
    name: "Delete / Hover",
    mapsToName: "Delete / hover",
    mapsToKey: "68d08de82ee23f3a6629579ce75477822eee5bdb"
  },
  "4ac5c51b25e36cbd1868315b1089203c29e06b5e": {
    // Disabled
    name: "Delete / Disabled",
    mapsToName: "Delete / disabled",
    mapsToKey: "a3a516b39edc9ef5d0ccb6f109c9c083943a66bb"
  },
  /* Disclosure */
  b0aee864b41ef463267b22b9a76b6bf270e2f66b: {
    // Active
    name: "Disclosure / Active",
    mapsToName: "Disclosure / active",
    mapsToKey: "ef993cca686fbb133bd06e7ceebb3830b205e5bf"
  },
  "6bde5878a97d1865a263a51a5bc0b92285f240f3": {
    // Hover
    name: "Disclosure / Hover",
    mapsToName: "Disclosure / hover",
    mapsToKey: "d5d80856404aa99259e758bffea9f7dea082730d"
  },
  "374f4b51f5c29437dbb8175a585ddd3b3cde1d11": {
    // Disabled
    name: "Disclosure / Disabled",
    mapsToName: "Disclosure / disabled",
    mapsToKey: "55dac7446a099dcbdc0e3b78dd9df7d47c2eda6d"
  },
  /* Document */
  "5ec6b487dd5d58421c20831096f31dab7534b43d": {
    // Active
    name: "Document / Active",
    mapsToName: "Document / active",
    mapsToKey: "1f9647d7da64e6d10c00983068b99720e0036384"
  },
  "265eb6bfcd8d71474b1ac416d9266d7659baa11d": {
    // Hover
    name: "Document / Hover",
    mapsToName: "Document / hover",
    mapsToKey: "eceb6e6731db94a20fdd50d793a7d958330891b5"
  },
  c8788ca1ccf783db54b9d28567edf829d57908bd: {
    // Disabled
    name: "Document / Disabled",
    mapsToName: "Document / disabled",
    mapsToKey: "e72ed0474b81f1b2ed60fd01c39316a364a7e5f5"
  },
  /* Double_Chevron_Down */
  b67d30cb870011e1376465d53459bad54a072994: {
    // Active
    name: "Double_Chevron_Down / Active",
    mapsToName: "Double_Chevron / active",
    mapsToKey: "9717844073c1654c7b71076b7f7ffce488e85dea"
  },
  "41b1193ca359d3849204dabb4ab9f8f3a4759ce5": {
    // Hover
    name: "Double_Chevron_Down / Hover",
    mapsToName: "Double_Chevron / hover",
    mapsToKey: "634c8d2e5c93ac45bb874668fc2f62639c0d4159"
  },
  "9872c66c8ba58b1d2463292743774707da7e2658": {
    // Disabled
    name: "Double_Chevron_Down / Disabled",
    mapsToName: "Double_Chevron / disabled",
    mapsToKey: "268932232605b5dada08bb803835f3211c811598"
  },
  /* Double_Chevron_Right */
  "5c24573a1946c715273f4ca887ec15d96a42d6aa": {
    // Active
    name: "Double_Chevron_Right / Active",
    mapsToName: "Double_Chevron / active",
    mapsToKey: "9717844073c1654c7b71076b7f7ffce488e85dea"
  },
  "27972da7f95b1233a3883cb4560e6abae0ceef1b": {
    // Hover
    name: "Double_Chevron_Right / Hover",
    mapsToName: "Double_Chevron / hover",
    mapsToKey: "634c8d2e5c93ac45bb874668fc2f62639c0d4159"
  },
  "2f8bb6f31b00ebeae2af0090f5c7bc40d369b9ec": {
    // Disabled
    name: "Double_Chevron_Right / Disabled",
    mapsToName: "Double_Chevron / disabled",
    mapsToKey: "268932232605b5dada08bb803835f3211c811598"
  },
  /* Double_Chevron_Up */
  "243e422d22250eb67628ef31bffde86ba5f55443": {
    // Active
    name: "Double_Chevron_Up / Active",
    mapsToName: "Double_Chevron / active",
    mapsToKey: "9717844073c1654c7b71076b7f7ffce488e85dea"
  },
  "07fa7c0c948f64c93b65c6435703eae6e177053f": {
    // Hover
    name: "Double_Chevron_Up / Hover",
    mapsToName: "Double_Chevron / hover",
    mapsToKey: "634c8d2e5c93ac45bb874668fc2f62639c0d4159"
  },
  af26e2fb08c1f25db428ef4579a319f30492542e: {
    // Disabled
    name: "Double_Chevron_Up@ / Disabled",
    mapsToName: "Double_Chevron / disabled",
    mapsToKey: "268932232605b5dada08bb803835f3211c811598"
  },
  /* Double_Chevron */
  "00dae4a548628a205556bd9f6297464d3ced3872": {
    // Active
    name: "Double_Chevron / Active",
    mapsToName: "Double_Chevron / active",
    mapsToKey: "9717844073c1654c7b71076b7f7ffce488e85dea"
  },
  "43ab78eac344a747db5bb4f5b104bd02c5859658": {
    // Hover
    name: "Double_Chevron / Hover",
    mapsToName: "Double_Chevron / hover",
    mapsToKey: "634c8d2e5c93ac45bb874668fc2f62639c0d4159"
  },
  "9c6436eba62e259597259403c044dbf950f8ae88": {
    // Disabled
    name: "Double_Chevron / Disabled",
    mapsToName: "Double_Chevron / disabled",
    mapsToKey: "268932232605b5dada08bb803835f3211c811598"
  },
  /* Download */
  fdfdda17d8d1d736a455ea4569e6bfae523cb187: {
    // Active
    name: "Download / Active",
    mapsToName: "Download / active",
    mapsToKey: "9d3152ab83b585e8e1064053993b6c70dc3a7a59"
  },
  "1144fa672a665718eae625005203831ff8d81761": {
    // Hover
    name: "Download / Hover",
    mapsToName: "Download / hover",
    mapsToKey: "b535754c1ab4f3dc5c11702cc10741c70abebb4a"
  },
  f479d69a43127d9f07637520264ed1253a3de847: {
    // Disabled
    name: "Download / Disabled",
    mapsToName: "Download / disabled",
    mapsToKey: "0d9971bc357fbae9697915f8783411222f5c5943"
  },
  /* Upload_Image */
  "60a3017858fe7ce5622be1c5a6a154d034e0623f": {
    // Active
    name: "Upload_Image / Active",
    mapsToName: "Upload_Image / active",
    mapsToKey: "9a25cacdb92d9e941d04c402db92238d0ae90a8a"
  },
  "2efda7a7d29d771c68cbb8abd739c8d1d116cec9": {
    // Hover
    name: "Upload_Image / Hover",
    mapsToName: "Upload_Image / hover",
    mapsToKey: "0831ae3388eec4944dfbe495c6743fa67e007224"
  },
  a255a87221992c5ef0ed78f814b7efdcc575a97e: {
    // Disabled
    name: "Upload_Image / Disabled",
    mapsToName: "Upload_Image / disabled",
    mapsToKey: "280ae53636b733b38c8d92eb234e14f760b20018"
  },
  /* Download_Image */
  "9efb34a6c8d63329066c73e034d51406738802cc": {
    // Active
    name: "Download_Image / Active",
    mapsToName: "Download_Image / active",
    mapsToKey: "cb72882477dc6066976d71720defc9411a38ea9a"
  },
  b8938f8d97b376ac27cf015ae1e199a6ef73459b: {
    // Hover
    name: "Download_Image / Hover",
    mapsToName: "Download_Image / hover",
    mapsToKey: "9e49f44ff8a3688ba030286563fa2ec647b5bea3"
  },
  de1697b3e8dc4308f8a42da9fa223fce59eb037f: {
    // Disabled
    name: "Download_Image / Disabled",
    mapsToName: "Download_Image / disabled",
    mapsToKey: "467d37ed30f872676e4a30277ef5495f16759308"
  },
  /* Drag */
  "68246b475e491f69e662f867e9b22af505b1f8e8": {
    // Active
    name: "Drag / Active",
    mapsToName: "Drag / active",
    mapsToKey: "dc5cf0a966d8b5e88d52c7a18dad51dba9808b47"
  },
  b08e7aebe72af4fb07a4c310771a83225a8904bd: {
    // Hover
    name: "Drag / Hover",
    mapsToName: "Drag / hover",
    mapsToKey: "0c0cf4f68ef084e655dbd70f24d4beffa340ef3a"
  },
  "78d9018c0bc13ef38ca768987420b9c94dea7c74": {
    // Disabled
    name: "Drag / Disabled",
    mapsToName: "Drag / disabled",
    mapsToKey: "a36cd76a76134719769812607b8e7b3d7a3225fd"
  },
  /* Draw */
  f9e0cfc9ade2c40a933f1a5fefc1c4dcf34e94cb: {
    // Active
    name: "Draw / Active",
    mapsToName: "Draw / active",
    mapsToKey: "b1a6fd72ff5ab67c4af97fee37b657821f29b105"
  },
  e6a9606947eb369bdc1dce5288a8f62ec9966ac6: {
    // Hover
    name: "Draw / Hover",
    mapsToName: "Draw / hover",
    mapsToKey: "8471d1b2c9ada0f6f86b087edf1240608dc97c82"
  },
  "356da1ca743d5eecf8f9b22c5bad678743a5191c": {
    // Disabled
    name: "Draw / Disabled",
    mapsToName: "Draw / disabled",
    mapsToKey: "447b531069632f0cc1db10d1dd51e4e1e3032f03"
  },
  /* Edit */
  f2d442be4b73f2ffa892ca950634a941dc01433c: {
    // Active
    name: "Edit / Active",
    mapsToName: "Edit / active",
    mapsToKey: "88a57ad5456b7245e78657ec235ad2d61a60dd31"
  },
  "220cdc1d8be74452cddcb3ff1fe823b6c516995f": {
    // Hover
    name: "Edit / Hover",
    mapsToName: "Edit / hover",
    mapsToKey: "a3a16536c9b897d0f6a9e91d1faf3a1ad4e9b505"
  },
  "7e742b01e2ca47c2a9eef40d015ea470ac07ba73": {
    // Disabled
    name: "Edit / Disabled",
    mapsToName: "Edit / disabled",
    mapsToKey: "a4062ed40bc9ef773eba69c9951f01a0a44c48a0"
  },
  /* Error */
  "37b962a7b9bb2878063b842d12fa2b1c3d8cfa01": {
    // Active
    name: "Error / Active",
    mapsToName: "Error / active",
    mapsToKey: "1ded00534cf3cf9b4ebe8525f4d689a892ae5dea"
  },
  "04ae3ae4fa073bf64cc19047830987e0102ce586": {
    // Hover
    name: "Error / Hover",
    mapsToName: "Error / hover",
    mapsToKey: "6a12eb30775741463a0e8c3c3c4ec4d9e8ab70e2"
  },
  "9d95ed5e42f58f340a4a16657a63e548d1b6b963": {
    // Disabled
    name: "Error / Disabled",
    mapsToName: "Error / disabled",
    mapsToKey: "376d5e8cdd93b218d8e481d8b66b0131232f1b93"
  },
  /* Expand_Window */
  "71eb3ab1769ba0a177068f46c8c823dcb5d8df7d": {
    // Active
    name: "Expand_Window / Active",
    mapsToName: "Expand_Window / active",
    mapsToKey: "50eb58ced99beed294f79cd90b2313b97035bf74"
  },
  "677831083c244ad3948a30603743b39d987149f6": {
    // Hover
    name: "Expand_Window / Hover",
    mapsToName: "Expand_Window / hover",
    mapsToKey: "c13773aa1b057e0010d1c1b41e20c1cabeee3710"
  },
  "0af6e1f7bb07648afdfd54313ee04abaf1d1f17d": {
    // Disabled
    name: "Expand_Window / Disabled",
    mapsToName: "Expand_Window / disabled",
    mapsToKey: "4902e8f651f890bf3fb902c6ecaf6af3427a1c64"
  },
  /* Export */
  e4fc6920bd2df404ac02fa7c033f416f2f0d2b51: {
    // Active
    name: "Export / Active",
    mapsToName: "Export / active",
    mapsToKey: "06fcc25eec6f3bef0d7d0a5a7b8efe7a9fb97103"
  },
  "818fac9068faa4f665782835e15830a9a4fe950e": {
    // Hover
    name: "Export / Hover",
    mapsToName: "Export / hover",
    mapsToKey: "11317689cab872cd6874aeccb3fdaffa0a70d2fd"
  },
  add9ebb84f47b6bd54faa112c6d94c7df3640cdd: {
    // Disabled
    name: "Export / Disabled",
    mapsToName: "Export / disabled",
    mapsToKey: "afe8d5499ea46868e39e165ef2a7fd99ca9069b3"
  },
  /* Favorite */
  dae27b3aab594e8809e767cfa38491fd3dd810d6: {
    // Active
    name: "Favorite / Active",
    mapsToName: "Favorite / active",
    mapsToKey: "0cc442b26f039d4d4fe5ef99e9909c5224f57695"
  },
  "997339823093322110639eaf8db6b916b9ccc03f": {
    // Hover
    name: "Favorite / Hover",
    mapsToName: "Favorite / hover",
    mapsToKey: "293fec410ac9b8b7ed439b3b2a00f1b05ee0cc46"
  },
  "9264e4aa26cd22cb36ca91b3fc95e94dfc8b69ab": {
    // Disabled
    name: "Favorite / Disabled",
    mapsToName: "Favorite / disabled",
    mapsToKey: "fe6cadf49cf800e0e53f5ab568ac90d450dd4416"
  },
  /* Filter */
  "5e8d0897d5d60499c7fe0320c25a7e20bb8d7cfb": {
    // Active
    name: "Filter / Active",
    mapsToName: "Filter / active",
    mapsToKey: "1fd3fc3213a4ed790b9025e4219752e9bf46cf9e"
  },
  af136ddcf4775b835b5e1b8a15b2eb86894e61d4: {
    // Hover
    name: "Filter / Hover",
    mapsToName: "Filter / hover",
    mapsToKey: "e80cba1fde5d96463b9c414c268caa272a80b4f8"
  },
  "930f0b38c3417be55cc252c784bdb4b815a85b28": {
    // Disabled
    name: "Filter / Disabled",
    mapsToName: "Filter / disabled",
    mapsToKey: "9cb0ed5086d8410f54728b624bcd173fcf7b4fac"
  },
  /* Folder */
  f48078786867272673403d35a67babbdca87d6d2: {
    // Active
    name: "Folder / Active",
    mapsToName: "Folder / active",
    mapsToKey: "e174555046046552feac3b707bcc0c47ea2f4393"
  },
  "3683abddc795e39e3ec8cc8f13bee05941dc960a": {
    // Hover
    name: "Folder / Hover",
    mapsToName: "Folder / hover",
    mapsToKey: "c7647fe1b8a3490bc14d21e48af755fcb77d2ce9"
  },
  "18286d09678d2e4cad3c6240b21b4423769caa01": {
    // Disabled
    name: "Folder / Disabled",
    mapsToName: "Folder / disabled",
    mapsToKey: "de6a04d25975b022d223e044a4ebe024a8c635b1"
  },
  /* Gallery */
  "3c6be1567f380eb75ac2a9e54f52de443a1528c7": {
    // Active
    name: "Gallery / Active",
    mapsToName: "Gallery / active",
    mapsToKey: "e73af5986677eb2f4ca32c52c3968eafc706c545"
  },
  a12f326c5fc1886e7ce6705d9866965947ba0293: {
    // Hover
    name: "Gallery / Hover",
    mapsToName: "Gallery / hover",
    mapsToKey: "72abe4447394c3bac26ace81598fc54d532d48ea"
  },
  "9d4204536ded123c79337f963186948bc121e0c3": {
    // Disabled
    name: "Gallery / Disabled",
    mapsToName: "Gallery / disabled",
    mapsToKey: "b074ae1346d14b6a418f3251c7a860e09f9c3604"
  },
  /* Group */
  "4b01d65b2da9cd3124084fb380ca598ae3a33b9b": {
    // Active
    name: "Group / Active",
    mapsToName: "Group / active",
    mapsToKey: "415c6db127691155204d4e11e174de01cf4a3cff"
  },
  eab420068e9b449a222017bea7f10ad74ae37e0c: {
    // Hover
    name: "Group / Hover",
    mapsToName: "Group / hover",
    mapsToKey: "8577b65e9e90914de46b199baf8b54dcca6b6f51"
  },
  "6eb4b2b546bcba2c02b2bfedb190100264560617": {
    // Disabled
    name: "Group / Disabled",
    mapsToName: "Group / disabled",
    mapsToKey: "e9da4c2ac0f95cb9aeebb9007b1f9534731226dc"
  },
  /* Hamburger */
  "2f1d5799508b34a9432e2a74aecdbdf0161f03a9": {
    // Active
    name: "Hamburger / Active",
    mapsToName: "Hamburger / active",
    mapsToKey: "7acb43bafe21100ba5870b979c03999efd28b564"
  },
  d03a724d6ea61d00988276ea9d98f889f4ef6cf7: {
    // Hover
    name: "Hamburger / Hover",
    mapsToName: "Hamburger / hover",
    mapsToKey: "11f29f3a79b7d658d64c16e22a0eeb141a8dfb85"
  },
  "02a3285460f0f4acdc968523cad830b69c360e9a": {
    // Disabled
    name: "Hamburger / Disabled",
    mapsToName: "Hamburger / disabled",
    mapsToKey: "11649d84bf2e0e9200cb4a822406a4fb55a27ee7"
  },
  /* Help */
  "383bb1a4e047f0acd542875526230fe7f75bbece": {
    // Active
    name: "Help / Active",
    mapsToName: "Help / active",
    mapsToKey: "a013ba61c28801e6f2c47cbc74d67a0c61ab2488"
  },
  "88bb96aff8be60eef10edf40e90cd47091f989db": {
    // Hover
    name: "Help / Hover",
    mapsToName: "Help / hover",
    mapsToKey: "6f8046c95a3bb525319c636d01257554c38c419d"
  },
  "3724f78cc769593727f332b23e65af6658b4de16": {
    // Disabled
    name: "Help / Disabled",
    mapsToName: "Help / disabled",
    mapsToKey: "72ac2763bc076653f7bc9a086d3b200f2bc6a58c"
  },
  /* Help Circle */
  f26993cdd11e3cb6ea2f8bd60b04d95d3459391c: {
    // Active
    name: "Help Circle / Active",
    mapsToName: "Help Circle / active",
    mapsToKey: "d5e1e5ef64735bd98395d19893745a638c78a4dd"
  },
  "86de14f062e0963a0e8133c001c04d09a7e0f13d": {
    // Hover
    name: "Help Circle / Hover",
    mapsToName: "Help Circle / hover",
    mapsToKey: "80645edc6b0d4dba229424dbeaeb891a8d442bdd"
  },
  "25636b15071af0663df6ec3ca4ce490ffb32e018": {
    // Disabled
    name: "Help Circle / Disabled",
    mapsToName: "Help Circle / disabled",
    mapsToKey: "9ff10897ac1f0058be3ea01feb58526c754e7e3b"
  },
  /* History */
  b7aec3fcb8868a360808bdd99fde219bb801b507: {
    // Active
    name: "History / Active",
    mapsToName: "History / active",
    mapsToKey: "56578245cc940be0b85a1dc1f3d4aca102baf2b7"
  },
  a12ef2d453a2bcafa9d40cc5d221c527d0197d5f: {
    // Hover
    name: "History / Hover",
    mapsToName: "History / hover",
    mapsToKey: "67180f7cb34a671ba5179f1b76395cae07aeba45"
  },
  ea1258881e4a996df7fe3883abee0690d403193c: {
    // Disabled
    name: "History / Disabled",
    mapsToName: "History / disabled",
    mapsToKey: "c9924b90d7098d8bcc1378f3834082af059aae9a"
  },
  /* Home */
  c2fac400a6938a0d61d6bfd746d68b3c5c828537: {
    // Active
    name: "Home / Active",
    mapsToName: "Home / active",
    mapsToKey: "8e359c43cba9043222417703467be8b97ab33d9f"
  },
  "1b56ef83eb23ef350a99e93d996580b720781bd6": {
    // Hover
    name: "Home / Hover",
    mapsToName: "Home / hover",
    mapsToKey: "a79602126083bfbfa78fc56146618a1d8278bbd4"
  },
  e894a22ecf2bf434713a0e1e4dde83bf505326f8: {
    // Disabled
    name: "Home / Disabled",
    mapsToName: "Home / disabled",
    mapsToKey: "793e2b1dcfeaaf406fce1491b774db18b28c40d9"
  },
  /* Image */
  f70bca3b47913ca375b5b2025242277298b3ffd2: {
    // Active
    name: "Image / Active",
    mapsToName: "Image / active",
    mapsToKey: "3316b301bb953fcd92d465e6a268795d629732e4"
  },
  "11d39e145445628898d891b3a45381bef5070332": {
    // Hover
    name: "Image / Hover",
    mapsToName: "Image / hover",
    mapsToKey: "ce77f2a58392e21b31f38616054d4d24d051a983"
  },
  ba3330b5f46be23a8b54c036722014f02fb57017: {
    // Disabled
    name: "Image / Disabled",
    mapsToName: "Image / disabled",
    mapsToKey: "901337ba41d9bc679df50ea4c1ca1f25defca8f2"
  },
  /* Info */
  "5603e65bbf99279d8bd64d130e6215afadde4adf": {
    // Active
    name: "Info / Active",
    mapsToName: "Info / active",
    mapsToKey: "f3d00244732313699615f021a680083594a82566"
  },
  "3501bc2dfbd022bf281479025c46281969027f25": {
    // Hover
    name: "Info / Hover",
    mapsToName: "Info / hover",
    mapsToKey: "f824e8a2a5ef9e72658b419458f9f1f25d6e7ed4"
  },
  "75ecfce485464e84b58bbc01d88acfe0b933a07b": {
    // Disabled
    name: "Info / Disabled",
    mapsToName: "Info / disabled",
    mapsToKey: "53d233a012f912158882b17f6a4e2b0705ada5a9"
  },
  /* Label */
  eedc35b94bfe9ae682192d61a4df8e6f620a6573: {
    // Active
    name: "Label / Active",
    mapsToName: "Label / active",
    mapsToKey: "19cba6502ef355c84c822b5f82df1eacb2aad052"
  },
  "47406f2618d4fc8b5842d9e4c1681cb1a21a6cc1": {
    // Hover
    name: "Label / Hover",
    mapsToName: "Label / hover",
    mapsToKey: "19cf4293911e5e97f2ddc43f880ca368d0dd58bb"
  },
  dfd1ee18056c4634224889235790363da1270685: {
    // Disabled
    name: "Label / Disabled",
    mapsToName: "Label / disabled",
    mapsToKey: "932e4ff33194569a4dd68bfe190f6ed4643038dd"
  },
  /* Link */
  "4a188ddbf50efaf7b86ac544f33c36d6d5c4e691": {
    // Active
    name: "Link / Active",
    mapsToName: "Link / active",
    mapsToKey: "77a456441fdf47a1611768409baf6d4c0e4fb454"
  },
  "6f16ed3c967afe79183b430fef991bbb954904db": {
    // Hover
    name: "Link / Hover",
    mapsToName: "Link / hover",
    mapsToKey: "370575557db81e3fafd43275d8b306a8bf67ab8c"
  },
  "73ce20ca6ee27a8faa79b5925e915de4d3917d1f": {
    // Disabled
    name: "Link / Disabled",
    mapsToName: "Link / disabled",
    mapsToKey: "739ae501d3f55c5b75305d54fc1dc837df05647f"
  },
  /* List */
  "23a6b6ba0d03743383a325a5d2fd9b60147191c4": {
    // Active
    name: "List / Active",
    mapsToName: "List / active",
    mapsToKey: "597f47228a31f8c3955cdd5b5781720ecf7cb921"
  },
  "2e0c6cd711962d01ce46791a9fb27e84c3b67683": {
    // Hover
    name: "List / Hover",
    mapsToName: "List / hover",
    mapsToKey: "d3e07ca4e02dad09dde0b1ce1ebfba8dd1338dc7"
  },
  "45b35884db4ca62594b7fc7180eba77fa0e290e2": {
    // Disabled
    name: "List / Disabled",
    mapsToName: "List / disabled",
    mapsToKey: "82999e439e8034757447cc986dfa8989555a62d5"
  },
  /* Logout */
  "7e2423606612af2c6da8a7edd2c1499ec32ac7f3": {
    // Active
    name: "Logout / Active",
    mapsToName: "Logout / active",
    mapsToKey: "ef82d9abc546cfcd3093886899e48e2ec228d4b6"
  },
  b878150354f95473bc1c428fe65d58322e7c04ed: {
    // Hover
    name: "Logout / Hover",
    mapsToName: "Logout / hover",
    mapsToKey: "7f8d87dc5614bf862a1c0e164228d3fd70a9b4c5"
  },
  dda954102bd6a8b5d5a4e12e0aab5c5525ed95bc: {
    // Disabled
    name: "Logout / Disabled",
    mapsToName: "Logout / disabled",
    mapsToKey: "75a0a91d22612b74770eb33460920a5b328cd45a"
  },
  /* Minus */
  b2c29180eeb02ed780aca06e27d62e8c71359f5b: {
    // Active
    name: "Minus / Active",
    mapsToName: "Minus / active",
    mapsToKey: "48d83506994eaf8f9e81af3252842858af3626ce"
  },
  "2835d851b82fecac6e2517ee6c75eef7fdba6d53": {
    // Hover
    name: "Minus / Hover",
    mapsToName: "Minus / hover",
    mapsToKey: "f7b0a2d5adb91815c9820eaeb58b0ab6b89b505d"
  },
  b6ee558a1ec32b8149bf76a4022e7ea96fb4c7d9: {
    // Disabled
    name: "Minus / Disabled",
    mapsToName: "Minus / disabled",
    mapsToKey: "e0210de77671b2154e4eb030a4805446105ba092"
  },
  /* More_Horizontal */
  "136891a0e1ee408a1f6511e1f66e32bb05e6638b": {
    // Active
    name: "More_Horizontal / Active",
    mapsToName: "More_Horizontal / active",
    mapsToKey: "abd2c8fc83035bb96acd5a17dedbdfe1493660a9"
  },
  "8da8d9d858c362bc849df2d70668f664e785bd4a": {
    // Hover
    name: "More_Horizontal / Hover",
    mapsToName: "More_Horizontal / hover",
    mapsToKey: "f4b963760a605e2419b527d6d766332ae2b0ff5d"
  },
  "106f5208a33989f6035f5539b233acabe7847cd3": {
    // Disabled
    name: "More_Horizontal / Disabled",
    mapsToName: "More_Horizontal / disabled",
    mapsToKey: "12b5980caf7e6117657da095a5820927d44faece"
  },
  /* More_Vertical */
  "66d3cccc706f0f633abedad7cc29134f5c06573b": {
    // Active
    name: "More_Vertical / Active",
    mapsToName: "More_Vertical / active",
    mapsToKey: "b429192b1d01719ce6179abba4b3efa043a08bd2"
  },
  "0f31446f520931d223cb9e3f5f3a6c373f9edfea": {
    // Hover
    name: "More_Vertical / Hover",
    mapsToName: "More_Vertical / hover",
    mapsToKey: "3104af3a62113fac6fcad46e0f5d12902a1970de"
  },
  "96ffb66a11389ea5660a5ec7fc6e5a7983d4c7ec": {
    // Disabled
    name: "More_Vertical / Disabled",
    mapsToName: "More_Vertical / disabled",
    mapsToKey: "302e5818d10a3ac1705ff47b462ba13cfdbb5bf7"
  },
  /* Not Visible */
  "356c3823d270bd4a31565c545cc2f211bfe22cb5": {
    // Active
    name: "Not Visible / Active",
    mapsToName: "Not Visible / active",
    mapsToKey: "d3b1297b9cf13b6c7cf32a1811f83110cbea3d50"
  },
  "24f525690675586e53083e7148b74d438b5fb92f": {
    // Hover
    name: "Not Visible / Hover",
    mapsToName: "Not Visible / hover",
    mapsToKey: "c36ad2881e8532fc711651cb6b27bb565d79ecc7"
  },
  de934297f5a49a6fe509b24e91b946151f65a55a: {
    // Disabled
    name: "Not Visible / Disabled",
    mapsToName: "Not Visible / disabled",
    mapsToKey: "2cc2c34cb67ef4df89e1587e0b4e1f0201531632"
  },
  /* Notification */
  db4711bf3d13404d40ea90544631e18dd3eb0d71: {
    // Active
    name: "Notification / Active",
    mapsToName: "Notification / active",
    mapsToKey: "ff3e215e24334995e698e17eedc47aa5d2ad5746"
  },
  ab100588fa2a23ad064b5aef7bf25aa46c437f58: {
    // Hover
    name: "Notification / Hover",
    mapsToName: "Notification / hover",
    mapsToKey: "563c6378e5f4343fe17749fa2a64060c94f9fc5c"
  },
  "25010b8c1bb8ba27f888f0c1ea66f0d178b97fe3": {
    // Disabled
    name: "Notification / Disabled",
    mapsToName: "Notification / disabled",
    mapsToKey: "d77b759b51de79a90c0eed07baf1573ae1cfa520"
  },
  /* Drag Caret */
  "4aa39231813ab9a69dd510a8659a5616b13d1e53": {
    // Active
    name: "Drag Caret / Active",
    mapsToName: "Drag Caret / active",
    mapsToKey: "a9c49b97971b11b2fa036ecfc6a0ccc79b974100"
  },
  "9457770766488d0e58943254d1158d62c9c2b79e": {
    // Hover
    name: "Drag Caret / Hover",
    mapsToName: "Drag Caret / hover",
    mapsToKey: "ec6fbbd8548e8d356143ee93b372429d8ab5dae6"
  },
  "34494b25423538f8f2c5177e85962effb179e6e9": {
    // Disabled
    name: "Drag Caret / Disabled",
    mapsToName: "Drag Caret / disabled",
    mapsToKey: "63df858edec9c93c7eaba4fdbd2d98a1e66df6b5"
  },
  /* On_Track */
  "7928bcf3c8a555b5e97e129d56310680a01bc959": {
    // Active
    name: "On_Track / Active",
    mapsToName: "On_Track / active",
    mapsToKey: "c1763ce87d998bfed2e983de05fe67dafdbbd969"
  },
  bc29b18e45e439525fa104bb19669cddcadb5eaa: {
    // Hover
    name: "On_Track / Hover",
    mapsToName: "On_Track / hover",
    mapsToKey: "d638293cc370e31a4922fda87366b64b6dd5892f"
  },
  "20d384a71d4e010cba360d31901ca315c53f2c29": {
    // Disabled
    name: "On_Track / Disabled",
    mapsToName: "On_Track / disabled",
    mapsToKey: "ff1426d71870ad24037d7cb26d258701e790443f"
  },
  /* Project */
  "39e9471e8b5ab12e5ed799b7184d40e4103abbbb": {
    // Active
    name: "Project / Active",
    mapsToName: "Project / active",
    mapsToKey: "94f275d8fe875cac54157b4654626d36968aefd4"
  },
  "9ceb370ed1a25816eb9adadaca759cf3d20d20df": {
    // Hover
    name: "Project / Hover",
    mapsToName: "Project / hover",
    mapsToKey: "ca00a09dc2fb2d3f63b26aad2832ac8ae5bc3827"
  },
  "94dc13daecac4fc79c80439bf6b9458478f633e3": {
    // Disabled
    name: "Project / Disabled",
    mapsToName: "Project / disabled",
    mapsToKey: "36f65bd270a2d3ea06cb492d6ceaab6a4572046d"
  },
  /* Reassign */
  "0c1b559bd925f6dd72df077d05fcfa7f69cdbd2e": {
    // Active
    name: "Reassign / Active",
    mapsToName: "Reassign / active",
    mapsToKey: "e771bdd05d4b1a962647dcbe8461a9ec9149ea0e"
  },
  b7b4b85fdb1195c448c3b01df1c8747cd6cac3aa: {
    // Hover
    name: "Reassign / Hover",
    mapsToName: "Reassign / hover",
    mapsToKey: "937e0e6e34503c2c07492434096fdab2dcc974d6"
  },
  e62345b1f15d6f99020ec98ed579ea821e941304: {
    // Disabled
    name: "Reassign / Disabled",
    mapsToName: "Reassign / disabled",
    mapsToKey: "f947d14aa546965be50bfa125b7b893fc297ef87"
  },
  /* Recent_Activity */
  "88ea26385426363d58a896b946f8084c082c2ff0": {
    // Active
    name: "Recent_Activity / Active",
    mapsToName: "Recent_Activity / active",
    mapsToKey: "4e6430163a901b9c642384f9683c7111431aab6a"
  },
  ce6d244ed89362968668752e63ce910215d30b61: {
    // Hover
    name: "Recent_Activity / Hover",
    mapsToName: "Recent_Activity / hover",
    mapsToKey: "83c94503303ca8f75518652d52af6ae1342570e3"
  },
  "26e8464c032f46b26415e535db7823eadb60d15c": {
    // Disabled
    name: "Recent_Activity / Disabled",
    mapsToName: "Recent_Activity / disabled",
    mapsToKey: "4a90b40c5443c2acd5fc1789d39a45f2e5e2c54d"
  },
  /* Refresh */
  c240f6072922445ff348b86af20cf1fa72832561: {
    // Active
    name: "Refresh / Active",
    mapsToName: "Refresh / active",
    mapsToKey: "094c5f69632d16a017aaccf3c548f44afb2080dd"
  },
  "3b32f242ff8325f86e587e04b5ef43403018988a": {
    // Hover
    name: "Refresh / Hover",
    mapsToName: "Refresh / hover",
    mapsToKey: "c9a5b98324ecfe1c21affdfa539fcababd050e91"
  },
  f71155e80e612f5406caf0505c5f02272e8de88e: {
    // Disabled
    name: "Refresh / Disabled",
    mapsToName: "Refresh / disabled",
    mapsToKey: "d8dc8083dbbafc7380ac8c43123d5b83ca8ea486"
  },
  /* Reorder */
  "7d3a05d69ed604aafa4098f3ff86ec9d5696b7b7": {
    // Active
    name: "Reorder / Active",
    mapsToName: "Reorder / active",
    mapsToKey: "eadc43d2cb09ec7db83a576555fb7f942ad4d24e"
  },
  b68a958733060eec228f189a70fe60d86d7854a1: {
    // Hover
    name: "Reorder / Hover",
    mapsToName: "Reorder / hover",
    mapsToKey: "feb4e7638b32f3ec3c89406b964426f07db3afaf"
  },
  "0b3f92d9fe4fee78c32fe3d39882b6ad6c4cfb64": {
    // Disabled
    name: "Reorder / Disabled",
    mapsToName: "Reorder / disabled",
    mapsToKey: "6b39245e0c8724e5832781d5abeff52cda149415"
  },
  /* Request */
  "5d75acbefad53ce9e29235e5b5c2f20920d07ac4": {
    // Active
    name: "Request / Active",
    mapsToName: "Request / active",
    mapsToKey: "0e8a2f23da27302e1b551cdd9851ae65a6a3bb5d"
  },
  "8c0f33ee3125fce2c7954f342bcbf73851fe8275": {
    // Hover
    name: "Request / Hover",
    mapsToName: "Request / hover",
    mapsToKey: "0668cdec745843483d9103bfb80ed295a50e492d"
  },
  "45f780f587f6abcae03e27aae8c5fa152cb95b58": {
    // Disabled
    name: "Request / Disabled",
    mapsToName: "Request / disabled",
    mapsToKey: "4e73de6d161b832880fe51ddbc119181a2920a30"
  },
  /* Requirement */
  f767fa5cd5f2bebcc7577e7f5aa71e71a60f20c8: {
    // Active
    name: "Requirement / Active",
    mapsToName: "Requirement / active",
    mapsToKey: "43b319874198cda81d1026cf37f69cd684539e85"
  },
  e45a79f0597a2fe238d0d83763ad18c7d6c482b7: {
    // Hover
    name: "Requirement / Hover",
    mapsToName: "Requirement / hover",
    mapsToKey: "43ffb3950e087c334a580484c7928288dbccb310"
  },
  "96d961237103202caf40c0b15069751f6a3ceb5a": {
    // Disabled
    name: "Requirement / Disabled",
    mapsToName: "Requirement / disabled",
    mapsToKey: "c10fd4d25975f9d10c77e8f0e718eeeb246fc22e"
  },
  /* Schedule */
  "5ec0e44ec4e8cbedcdb40ee5c52914eb96497de8": {
    // Active
    name: "Schedule / Active",
    mapsToName: "Schedule / active",
    mapsToKey: "f11d044605d0e91102cfb4638bb60c9c03cab013"
  },
  "8f4f0e2f057ce31b347b5047370153c828f095c9": {
    // Hover
    name: "Schedule / Hover",
    mapsToName: "Schedule / hover",
    mapsToKey: "14462c213e38598a1d3afccd796f71e892ad5e62"
  },
  d42d267a3890b75b2af1011873660b3098bc7c5a: {
    // Disabled
    name: "Schedule / Disabled",
    mapsToName: "Schedule / disabled",
    mapsToKey: "10c63349bb44bf2cd2b6c2d8784cfe68401cb9de"
  },
  /* Search */
  "93bdeb002feb4b367468c5c19158f0c35a9f3816": {
    // Active
    name: "Search / Active",
    mapsToName: "Search / active",
    mapsToKey: "d11d43ff548bc633b783b0a5e8c10ad471d4044f"
  },
  f29b79fc23c16db808f05afe8b1dbaea641eecf3: {
    // Hover
    name: "Search / Hover",
    mapsToName: "Search / hover",
    mapsToKey: "611053b20613057460619ddcacd84feb86a92d48"
  },
  "8cef0862973fc772851d52a0c6d9ddbe60d15e47": {
    // Disabled
    name: "Search / Disabled",
    mapsToName: "Search / disabled",
    mapsToKey: "8bb941c1509136579fa29f8ee4f7d07b412a235f"
  },
  /* Send */
  c54cab1bad50b00002d121b89179e96dde43470c: {
    // Active
    name: "Send / Active",
    mapsToName: "Send / active",
    mapsToKey: "f3d0020ae26b1d98b22070080921bf332f55233c"
  },
  a7e5fe44d88c2afc6a84b2c330365e071ee62f0a: {
    // Hover
    name: "Send / Hover",
    mapsToName: "Send / hover",
    mapsToKey: "c090246ee4a42ad9998f5d097f6a12261efdf83f"
  },
  c644568e377cf6a99a79e0ec8bb5a72c91b71fc9: {
    // Disabled
    name: "Send / Disabled",
    mapsToName: "Send / disabled",
    mapsToKey: "84e8d6f4dc6af6d5ddb1ed35cb4f8f1878f3a303"
  },
  /* Settings */
  b3689da3cf4d5c6988f069903b8f1c68c2add473: {
    // Active
    name: "Settings / Active",
    mapsToName: "Settings / active",
    mapsToKey: "2779238b3763593e6a8eaee5c7bc8b2dbf48e132"
  },
  ce82737f7d8d5edd2f2b8b1b628b0390f5d68adf: {
    // Hover
    name: "Settings / Hover",
    mapsToName: "Settings / hover",
    mapsToKey: "81d6bbbead13b1cefe3467a821bb0b93877acf90"
  },
  "575ddb93f4255c024c4c9e2ada6da488d7a6180c": {
    // Disabled
    name: "Settings / Disabled",
    mapsToName: "Settings / disabled",
    mapsToKey: "f3eb11acd9bcf34596fbb84347de4340f178809e"
  },
  /* Share */
  c488aa146507e3cde8833176a13ebb5b1daac7c8: {
    // Active
    name: "Share / Active",
    mapsToName: "Share / active",
    mapsToKey: "a5124b135ec6dd69322fcfd252f601400b3e3ede"
  },
  "46793ba134f2028298334294b92461b9824a8094": {
    // Hover
    name: "Share / Hover",
    mapsToName: "Share / hover",
    mapsToKey: "410f26fa76d34a640b3af417e2762bb48e3b1985"
  },
  faf8186f75390d7acffb03171f84802c5f4e7900: {
    // Disabled
    name: "Share / Disabled",
    mapsToName: "Share / disabled",
    mapsToKey: "02d21913cbe14a5631b2134121c8418b9d745c66"
  },
  /* Status_OK */
  "4d8e6460dd968be49f6bdd3e77253dc3fe963b8a": {
    // Active
    name: "Status_OK / Active",
    mapsToName: "Status_OK / active",
    mapsToKey: "5fbb4f617aff8719de45809dcc2e602c1a3ea4f0"
  },
  "693a942f1196a38a90b72fe88a5d80857f1a5a0e": {
    // Hover
    name: "Status_OK / Hover",
    mapsToName: "Status_OK / hover",
    mapsToKey: "02efb2d2d63582dfb3a5fe7a2cffb3fb59a2d282"
  },
  edbc92e39f6836a84362b927d5409ef13ec7eae9: {
    // Disabled
    name: "Status_OK / Disabled",
    mapsToName: "Status_OK / disabled",
    mapsToKey: "8bf818fe400ef937690f0300276f358bf5f4e8a1"
  },
  /* Sync */
  "9f68d70bc97b850fb7d8594315e50d82dabeca0a": {
    // Active
    name: "Sync / Active",
    mapsToName: "Sync / active",
    mapsToKey: "f68268c0484e57441da035bd8bc364de61db28c4"
  },
  cdbc5fae14aeca39ee024cba21fa90e666701840: {
    // Hover
    name: "Sync / Hover",
    mapsToName: "Sync / hover",
    mapsToKey: "fac000c11eba009df46cc0a8f90273a981fff771"
  },
  "3b828b0527f6494a081777ece21f6059d05af19d": {
    // Disabled
    name: "Sync / Disabled",
    mapsToName: "Sync / disabled",
    mapsToKey: "3aa18142108d4ec6c9cef1b2ffeb090f82d65ef7"
  },
  /* Tag */
  ef30a5b66121bbbb907c19a8baf7c8fb42147706: {
    // Active
    name: "Tag / Active",
    mapsToName: "Tag / active",
    mapsToKey: "89bfeedeb6dae39883d3cf18037275f311e58ada"
  },
  "9cfd0369965f37b9a4ad933be9d13f57823e4100": {
    // Hover
    name: "Tag / Hover",
    mapsToName: "Tag / hover",
    mapsToKey: "6aa033d73c3ce00621e26c7f0af2a3e0f48f8793"
  },
  "290b06d04f16fde55dcef1d7d4ab1b9f5a1e9cf5": {
    // Disabled
    name: "Tag / Disabled",
    mapsToName: "Tag / disabled",
    mapsToKey: "11ca7026a81cf9515a0716caeb6a9858fe4b7472"
  },
  /* Task */
  "75bfe6bef9993d1435e71791411c9794761f17c9": {
    // Active
    name: "Task / Active",
    mapsToName: "Task / active",
    mapsToKey: "3db6686f8325960dbaae01803ece2a734a957abc"
  },
  fa7ce081f67917184e585083284d43b2d88cc654: {
    // Hover
    name: "Task / Hover",
    mapsToName: "Task / hover",
    mapsToKey: "0dc7063a691b0b32aa32d3afbea7b460e6220a5b"
  },
  "7201790885a3d8e3a1e2a6223e9f9f87f6b5cb53": {
    // Disabled
    name: "Task / Disabled",
    mapsToName: "Task / disabled",
    mapsToKey: "76c190fe1299bc5005325083278f594c54d152e9"
  },
  /* Unarchive */
  "01e0b93821c85d64b2860cdbab000f5015dc5586": {
    // Active
    name: "Unarchive / Active",
    mapsToName: "Unarchive / active",
    mapsToKey: "fed25277046ee66767983486c658d10f39ac8fd1"
  },
  "33da15e655979de669cd641590f9e0ec9459662b": {
    // Hover
    name: "Unarchive / Hover",
    mapsToName: "Unarchive / hover",
    mapsToKey: "45d75cf774f9a8771670705803d7fc4d5dee43b2"
  },
  f71a9684e58d1ae57c33c4bba61498610ac10427: {
    // Disabled
    name: "Unarchive / Disabled",
    mapsToName: "Unarchive / disabled",
    mapsToKey: "3318f89d1f72a4f726e32c9b3dd840f35c115832"
  },
  /* Unlink */
  "1daa0b723478b16d9d5396cc95ce66ad7fa1f3f4": {
    // Active
    name: "Unlink / Active",
    mapsToName: "Unlink / active",
    mapsToKey: "bedc9c15ba3c84606a2409f1776e2d0664efd534"
  },
  dcfd79176f1d9cb58848858ef175346b1c796ed1: {
    // Hover
    name: "Unlink / Hover",
    mapsToName: "Unlink / hover",
    mapsToKey: "35aa707a816fe1e2a494365f1b8597d298574371"
  },
  "0838474c1f04982022a109c25f08ea5b2de7dda1": {
    // Disabled
    name: "Unlink / Disabled",
    mapsToName: "Unlink / disabled",
    mapsToKey: "f7d1b17a29588df46e17dd72c7e531950952c904"
  },
  /* Update */
  "215e980458308695cafec9d89c0105d81078bcd6": {
    // Active
    name: "Update / Active",
    mapsToName: "Update / active",
    mapsToKey: "484bb2b982254cecc11637da08e1be4850655342"
  },
  "397bf7167353d90be914144e46e235ab761f9df6": {
    // Hover
    name: "Update / Hover",
    mapsToName: "Update / hover",
    mapsToKey: "c9401bb041293b27b24b32eeadb92883d958d033"
  },
  e9b33c348fb91935684b088c7eba798576668b85: {
    // Disabled
    name: "Update / Disabled",
    mapsToName: "Update / disabled",
    mapsToKey: "331f1d23b77089f94e75e5c0f8e36bab2f824fae"
  },
  /* Upload */
  "4ba0deb9e65e1824b795d5dfef24526496660546": {
    // Active
    name: "Upload / Active",
    mapsToName: "Upload / active",
    mapsToKey: "6bfb1918b40f14a742cb5b849af9bcb31e002466"
  },
  efe3481d580430332d059cb025208a75287afe30: {
    // Hover
    name: "Upload / Hover",
    mapsToName: "Upload / hover",
    mapsToKey: "017b86ca2d1b4e6d41728e1af91f8036131565fd"
  },
  "722ec4fe742eee017a03e90093398c569280e054": {
    // Disabled
    name: "Upload / Disabled",
    mapsToName: "Upload / disabled",
    mapsToKey: "7fa3a4ef6f6301548e61fb776c5ea35857f4c9a8"
  },
  /* View */
  "292fe03ab5922a810b29fa7ef92c69162b63d570": {
    // Active
    name: "View / Active",
    mapsToName: "View / active",
    mapsToKey: "bda8e3c5860fba32006d4420a5309e726ced482e"
  },
  "33c6a8d2217a629654daba56e7239205dff4192f": {
    // Hover
    name: "View / Hover",
    mapsToName: "View / hover",
    mapsToKey: "e5fccebface8a067660391d676241e3996423bea"
  },
  "39fb17020faf55a14d7e55b70590f1fe129b163d": {
    // Disabled
    name: "View / Disabled",
    mapsToName: "View / disabled",
    mapsToKey: "9602a84b25ee3fe7c8cde37862c7a9eb28539197"
  },
  /* Warning */
  ad7c7b734133c59b546e1098c631c94b218b9395: {
    // Active
    name: "Warning / Active",
    mapsToName: "Warning / active",
    mapsToKey: "729009113ce383fe48211a2146af36bb85d3b6e9"
  },
  f7936f0ea44e97bc8de20e956e755f97eb02a2e4: {
    // Hover
    name: "Warning / Hover",
    mapsToName: "Warning / hover",
    mapsToKey: "61e3fecd98a1efc694226aabfb6cdfaa96939a54"
  },
  "92656aed8f33bfe79dcf4cb47a6dbe94c253b439": {
    // Disabled
    name: "Warning / Disabled",
    mapsToName: "Warning / disabled",
    mapsToKey: "31edc64b5f08cb1ddbb3505a54cf1ca96fbb44c7"
  }
};

export { cdsTheme };
