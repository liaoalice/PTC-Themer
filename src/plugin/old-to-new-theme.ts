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
    mapsToName: "Blue 1",
    mapsToKey: "67079c6a65289354dd87694e59e8c26de6594f3b"
  },
  ae3d8493b3f59eaceb1b7a62131763bede9440fd: {
    name: "A_Light_2.1",
    mapsToName: "Blue 2",
    mapsToKey: "be30a12538d2efad9ce2c6441e87985ea9d51d0a"
  },
  "4d7d3bc20a98fe123c8fd9594917b7aaf7f431c3": {
    name: "A_Light_3.1",
    mapsToName: "Blue 3",
    mapsToKey: "3d7ebc4225a325cab42be2887e48fb1e29d14506"
  },
  db43416d71a4241283785aab4f0900cf4ae3366f: {
    name: "A_Mid_1.1",
    mapsToName: "Blue 6",
    mapsToKey: "7a51bb8f5fee2abbb42b940aeae8f20f651a5a42"
  },
  "55eb9151a4dcba3097e2ef3ac3351431f5cd5ab3": {
    // Blue 7
    name: "A_Mid_2.1",
    mapsToName: "Blue 7",
    mapsToKey: "7925d2d3a793891ad31e8d690bafcac136451370"
  },
  "756bfee6f498e41028abba8952b03db45ffbf413": {
    name: "A_Dark_1.1",
    mapsToName: "Blue 8",
    mapsToKey: "207eb81d34d97e7b9b3f473d346ec0c50efaab94"
  },
  d4a06bdd3f6a7793a49c3c2781468319056ec556: {
    name: "A_Dark_2.1",
    mapsToName: "Blue 9",
    mapsToKey: "714ba741f7b6d27dd80bceca1b9c8d14063af873"
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
  // Primary Large Icon Button
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

  /* Checkbox */
  "56e16a96a2700e68b47dc2e8b561dcd2ddeb18be": {
    // Default
    name: "*Checkbox With Label / Default",
    mapsToKey: "790ab494869f852fb1638552a5bdc0e94b6ca73d",
    mapsToName: "Checkbox With Label / Unselected"
  },
  "1252a9ee481ba8f0026bf7580c019167c3d52d47": {
    // Hover
    name: "*Checkbox With Label / Hover",
    mapsToKey: "1560e535d405d566a8f0741210e8e47f95daba4c",
    mapsToName: "Checkbox With Label / Hover"
  },
  f8809b0fc64709a28acb1549200610ee90525853: {
    // Pressed
    name: "*Checkbox With Label / Pressed",
    mapsToKey: "cbafb3d2201838f5afa6b4fb5180f19852863c30",
    mapsToName: "Checkbox With Label / Pressed"
  },
  ccb070924072f632374c416a0764f7b8b3d84a0b: {
    // Checked
    name: "*Checkbox With Label / Selected",
    mapsToKey: "779785d8c7f27790fe92cfa457f8e5c40d4f9ca0",
    mapsToName: "Checkbox With Label / Selected"
  },
  e9a24214546af71c8f13fd0b721094d7b6e11c3c: {
    // Partial Checked
    name: "*Checkbox With Label / Partial Selected",
    mapsToKey: "213dd55257e14c17423539a3139d622b042b86df",
    mapsToName: "Checkbox With Label / Partial Selected"
  },
  "549f1c287bba7b506eaddfb897b2570d45f89e70": {
    // Hover Checked
    name: "*Checkbox With Label / Hover Selected",
    mapsToKey: "57157a5ff75aab87a6e7e7a5a114ac35a51321ef",
    mapsToName: "Checkbox With Label / Hover Selected"
  },
  "8a03ed0a9eafa93d68f77e096573eed941b71074": {
    // Unchecked Disabled
    name: "*Checkbox With Label / Unselected Disabled",
    mapsToKey: "22966e28de8b2b7a71a6b132fe090a9d74b851ac",
    mapsToName: "Checkbox With Label / Unselected Disabled"
  },
  "049699031ba73d2c6c24f60c51d0087a87c562a3": {
    // Selected Disabled
    name: "*Checkbox With Label / Selected Disabled",
    mapsToKey: "22627353841f706b83dd1fb17a2f4fffa257de6b",
    mapsToName: "Checkbox With Label / Selected Disabled"
  },
  "3dc6fc0015afcbeb4ff2f5bf9e950963f00e51f7": {
    // Partial Disabled
    name: "*Checkbox With Label / Partial Disabled",
    mapsToKey: "23462f7afd228bcd05351eb08bc110abd50b4ad8",
    mapsToName: "Checkbox With Label / Partial Disabled"
  },

  /* Confirmation Dialog*/
  "99f06930fb429bb76653e45b2a24e312bdd4493f": {
    name: "Confirmation Dialog",
    mapsToKey: "b77e612a16d996d2b9778048397ec64b05e565e1",
    mapsToName: "Confirmation Dialog"
  },
  fbfc063510257ccf16d23ce07a09830d031d21dd: {
    name: "Semi Opaque Modal Background",
    mapsToKey: "2774467eb8359125ec76acc3635da846641a70f1",
    mapsToName: "Semi Opaque Modal Background"
  }
};

export { cdsTheme };
