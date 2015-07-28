var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var lotNames = [];

var lotCountries = [];

var lotConfigurations = [];

lotNames[0] = "Gold Lotto (Qld)";

lotCountries[0] = "Australia";

lotConfigurations[0] = "6x45.0x0";

lotNames[1] = "Monday Lotto";

lotCountries[1] = "Australia";

lotConfigurations[1] = "6x45.0x0";

lotNames[2] = "Oz Lotto";

lotCountries[2] = "Australia";

lotConfigurations[2] = "7x45.0x0";

lotNames[3] = "Powerball";

lotCountries[3] = "Australia";

lotConfigurations[3] = "6x40.1x20";

lotNames[4] = "Saturday Lotto (NSW, WA)";

lotCountries[4] = "Australia";

lotConfigurations[4] = "6x45.0x0";

lotNames[5] = "Tattslotto (Vic, Tas, ACT, NT)";

lotCountries[5] = "Australia";

lotConfigurations[5] = "6x45.0x0";

lotNames[6] = "The Pools";

lotCountries[6] = "Australia";

lotConfigurations[6] = "6x38.0x0";

lotNames[7] = "Wednesday Lotto";

lotCountries[7] = "Australia";

lotConfigurations[7] = "6x45.0x0";

lotNames[8] = "X Lotto (SA)";

lotCountries[8] = "Australia";

lotConfigurations[8] = "6x45.0x0";

lotNames[9] = "EuroMillions";

lotCountries[9] = "Austria";

lotConfigurations[9] = "5x50.2x11";

lotNames[10] = "Lotto";

lotCountries[10] = "Austria";

lotConfigurations[10] = "6x45.0x0";

lotNames[11] = "Double Draw - 1 Spot";

lotCountries[11] = "Barbados";

lotConfigurations[11] = "1x30.0x0";

lotNames[12] = "Double Draw - 2 Spots";

lotCountries[12] = "Barbados";

lotConfigurations[12] = "2x30.0x0";

lotNames[13] = "Double Draw - 3 Spots";

lotCountries[13] = "Barbados";

lotConfigurations[13] = "3x30.0x0";

lotNames[14] = "Double Draw - 4 Spots";

lotCountries[14] = "Barbados";

lotConfigurations[14] = "4x30.0x0";

lotNames[15] = "Double Draw - 5 Spots";

lotCountries[15] = "Barbados";

lotConfigurations[15] = "5x30.0x0";

lotNames[16] = "Double Draw - 6 Spots";

lotCountries[16] = "Barbados";

lotConfigurations[16] = "6x30.0x0";

lotNames[17] = "Double Draw - 7 Spots";

lotCountries[17] = "Barbados";

lotConfigurations[17] = "7x30.0x0";

lotNames[18] = "Doubles";

lotCountries[18] = "Barbados";

lotConfigurations[18] = "2x26.2x26";

lotNames[19] = "Mega 6";

lotCountries[19] = "Barbados";

lotConfigurations[19] = "6x33.0x0";

lotNames[20] = "Super Lotto";

lotCountries[20] = "Barbados";

lotConfigurations[20] = "5x35.1x10";

lotNames[21] = "EuroMillions";

lotCountries[21] = "Belgium";

lotConfigurations[21] = "5x50.2x11";

lotNames[22] = "Lotto";

lotCountries[22] = "Belgium";

lotConfigurations[22] = "6x45.0x0";

lotNames[23] = "Dupla Sena";

lotCountries[23] = "Brazil";

lotConfigurations[23] = "6x50.0x0";

lotNames[24] = "Lotofácil - 15 números";

lotCountries[24] = "Brazil";

lotConfigurations[24] = "15x25.0x0";

lotNames[25] = "Lotofácil - 16 números";

lotCountries[25] = "Brazil";

lotConfigurations[25] = "16x25.0x0";

lotNames[26] = "Lotofácil - 17 números";

lotCountries[26] = "Brazil";

lotConfigurations[26] = "17x25.0x0";

lotNames[27] = "Lotofácil - 18 números";

lotCountries[27] = "Brazil";

lotConfigurations[27] = "18x25.0x0";

lotNames[28] = "Mega-Sena";

lotCountries[28] = "Brazil";

lotConfigurations[28] = "6x60.0x0";

lotNames[29] = "Quina";

lotCountries[29] = "Brazil";

lotConfigurations[29] = "5x80.0x0";

lotNames[30] = "Timemania";

lotCountries[30] = "Brazil";

lotConfigurations[30] = "10x80.1x80";

lotNames[31] = "Toto 2 - 5/35";

lotCountries[31] = "Bulgaria";

lotConfigurations[31] = "5x35.0x0";

lotNames[32] = "Toto 2 - 6/42";

lotCountries[32] = "Bulgaria";

lotConfigurations[32] = "6x42.0x0";

lotNames[33] = "Toto 2 - 6/49";

lotCountries[33] = "Bulgaria";

lotConfigurations[33] = "6x49.0x0";

lotNames[34] = "Atlantic 6/49";

lotCountries[34] = "Canada";

lotConfigurations[34] = "6x49.0x0";

lotNames[35] = "BC/49";

lotCountries[35] = "Canada";

lotConfigurations[35] = "6x49.0x0";

lotNames[36] = "Lotto 6/49";

lotCountries[36] = "Canada";

lotConfigurations[36] = "6x49.0x0";

lotNames[37] = "Lotto Max";

lotCountries[37] = "Canada";

lotConfigurations[37] = "7x49.0x0";

lotNames[38] = "Ontario 49";

lotCountries[38] = "Canada";

lotConfigurations[38] = "6x49.0x0";

lotNames[39] = "Ontario Lottario";

lotCountries[39] = "Canada";

lotConfigurations[39] = "6x45.0x0";

lotNames[40] = "Payday";

lotCountries[40] = "Canada";

lotConfigurations[40] = "4x77.0x0";

lotNames[41] = "Québec 49 Lottery";

lotCountries[41] = "Canada";

lotConfigurations[41] = "6x49.0x0";

lotNames[42] = "Kino";

lotCountries[42] = "Chile";

lotConfigurations[42] = "14x25.0x0";

lotNames[43] = "Loto";

lotCountries[43] = "Chile";

lotConfigurations[43] = "6x41.0x0";

lotNames[44] = "Sports Lottery (22选5)";

lotCountries[44] = "China";

lotConfigurations[44] = "5x22.0x0";

lotNames[45] = "Sports Lottery (31选7)";

lotCountries[45] = "China";

lotConfigurations[45] = "7x31.0x0";

lotNames[46] = "Sports Lottery (超级大乐透)";

lotCountries[46] = "China";

lotConfigurations[46] = "5x35.2x12";

lotNames[47] = "Welfare Lottery (七乐彩)";

lotCountries[47] = "China";

lotConfigurations[47] = "7x30.0x0";

lotNames[48] = "Welfare Lottery (双色球)";

lotCountries[48] = "China";

lotConfigurations[48] = "6x33.1x16";

lotNames[49] = "Baloto";

lotCountries[49] = "Colombia";

lotConfigurations[49] = "6x45.0x0";

lotNames[50] = "Loto 6/45";

lotCountries[50] = "Croatia";

lotConfigurations[50] = "6x45.0x0";

lotNames[51] = "Loto 7/39";

lotCountries[51] = "Croatia";

lotConfigurations[51] = "7x39.0x0";

lotNames[52] = "Eurojackpot";

lotCountries[52] = "Crotia";

lotConfigurations[52] = "5x50.2x10";

lotNames[53] = "Eurojackpot";

lotCountries[53] = "Czech Republic";

lotConfigurations[53] = "5x50.2x10";

lotNames[54] = "Eurojackpot";

lotCountries[54] = "Denmark";

lotConfigurations[54] = "5x50.2x10";

lotNames[55] = "Lotto";

lotCountries[55] = "Denmark";

lotConfigurations[55] = "7x36.0x0";

lotNames[56] = "Viking Lotto";

lotCountries[56] = "Denmark";

lotConfigurations[56] = "6x48.0x0";

lotNames[57] = "Play 4";

lotCountries[57] = "Dominica";

lotConfigurations[57] = "4x22.0x0";

lotNames[58] = "Loto";

lotCountries[58] = "Dominican Republic";

lotConfigurations[58] = "6x38.0x0";

lotNames[59] = "Loto Pool";

lotCountries[59] = "Dominican Republic";

lotConfigurations[59] = "5x27.0x0";

lotNames[60] = "Lotomás";

lotCountries[60] = "Dominican Republic";

lotConfigurations[60] = "6x38.1x10";

lotNames[61] = "Super Loto LEIDSA";

lotCountries[61] = "Dominican Republic";

lotConfigurations[61] = "6x53.0x0";

lotNames[62] = "Eurojackpot";

lotCountries[62] = "Estonia";

lotConfigurations[62] = "5x50.2x10";

lotNames[63] = "Viking Lotto";

lotCountries[63] = "Estonia";

lotConfigurations[63] = "6x48.0x0";

lotNames[64] = "Eurojackpot";

lotCountries[64] = "Finland";

lotConfigurations[64] = "5x50.2x10";

lotNames[65] = "Lotto";

lotCountries[65] = "Finland";

lotConfigurations[65] = "7x39.0x0";

lotNames[66] = "Viking Lotto";

lotCountries[66] = "Finland";

lotConfigurations[66] = "6x48.0x0";

lotNames[67] = "EuroMillions";

lotCountries[67] = "France";

lotConfigurations[67] = "5x50.2x11";

lotNames[68] = "Loto";

lotCountries[68] = "France";

lotConfigurations[68] = "5x49.1x10";

lotNames[69] = "Eurojackpot";

lotCountries[69] = "Germany";

lotConfigurations[69] = "5x50.2x10";

lotNames[70] = "Lotto 6/49";

lotCountries[70] = "Germany";

lotConfigurations[70] = "6x49.0x0";

lotNames[71] = "Fortune Thursday";

lotCountries[71] = "Ghana";

lotConfigurations[71] = "5x90.0x0";

lotNames[72] = "Friday Bonanza";

lotCountries[72] = "Ghana";

lotConfigurations[72] = "5x90.0x0";

lotNames[73] = "Lucky Tuesday";

lotCountries[73] = "Ghana";

lotConfigurations[73] = "5x90.0x0";

lotNames[74] = "Midweek Lotto";

lotCountries[74] = "Ghana";

lotConfigurations[74] = "5x90.0x0";

lotNames[75] = "Monday Special";

lotCountries[75] = "Ghana";

lotConfigurations[75] = "5x90.0x0";

lotNames[76] = "National Weekly Lotto";

lotCountries[76] = "Ghana";

lotConfigurations[76] = "5x90.0x0";

lotNames[77] = "Extra 5";

lotCountries[77] = "Greece";

lotConfigurations[77] = "5x35.0x0";

lotNames[78] = "Joker";

lotCountries[78] = "Greece";

lotConfigurations[78] = "5x45.1x20";

lotNames[79] = "Lotto";

lotCountries[79] = "Greece";

lotConfigurations[79] = "6x49.0x0";

lotNames[80] = "Hong Kong Jockey Club's Mark Six Lottery";

lotCountries[80] = "Hong Kong";

lotConfigurations[80] = "6x49.0x0";

lotNames[81] = "Hong Kong Toto 6/49";

lotCountries[81] = "Hong Kong";

lotConfigurations[81] = "6x49.0x0";

lotNames[82] = "Hatoslottó";

lotCountries[82] = "Hungary";

lotConfigurations[82] = "6x45.0x0";

lotNames[83] = "Skandináv Lottó";

lotCountries[83] = "Hungary";

lotConfigurations[83] = "7x35.0x0";

lotNames[84] = "Ötöslottó";

lotCountries[84] = "Hungary";

lotConfigurations[84] = "5x90.0x0";

lotNames[85] = "Eurojackpot";

lotCountries[85] = "Iceland";

lotConfigurations[85] = "5x50.2x10";

lotNames[86] = "Viking Lotto";

lotCountries[86] = "Iceland";

lotConfigurations[86] = "6x48.0x0";

lotNames[87] = "Playwin Easy Lotto";

lotCountries[87] = "India";

lotConfigurations[87] = "6x45.0x0";

lotNames[88] = "Playwin Super Lotto";

lotCountries[88] = "India";

lotConfigurations[88] = "6x49.0x0";

lotNames[89] = "Playwin Thunderball";

lotCountries[89] = "India";

lotConfigurations[89] = "5x42.1x15";

lotNames[90] = "All or Nothing";

lotCountries[90] = "Ireland";

lotConfigurations[90] = "12x24.0x0";

lotNames[91] = "EuroMillions";

lotCountries[91] = "Ireland";

lotConfigurations[91] = "5x50.2x11";

lotNames[92] = "Lotto";

lotCountries[92] = "Ireland";

lotConfigurations[92] = "6x45.0x0";

lotNames[93] = "Monday Million";

lotCountries[93] = "Ireland";

lotConfigurations[93] = "6x39.0x0";

lotNames[94] = "777";

lotCountries[94] = "Israel";

lotConfigurations[94] = "7x70.0x0";

lotNames[95] = "New Lotto";

lotCountries[95] = "Israel";

lotConfigurations[95] = "6x37.1x7";

lotNames[96] = "Eurojackpot";

lotCountries[96] = "Italy";

lotConfigurations[96] = "5x50.2x10";

lotNames[97] = "SuperEna Max";

lotCountries[97] = "Italy";

lotConfigurations[97] = "6x90.0x0";

lotNames[98] = "SuperEnaLotto";

lotCountries[98] = "Italy";

lotConfigurations[98] = "6x90.0x0";

lotNames[99] = "Win For Life";

lotCountries[99] = "Italy";

lotConfigurations[99] = "10x20.0x0";

lotNames[100] = "Lotto";

lotCountries[100] = "Jamaica";

lotConfigurations[100] = "6x37.0x0";

lotNames[101] = "Lucky 5";

lotCountries[101] = "Jamaica";

lotConfigurations[101] = "5x26.0x0";

lotNames[102] = "Loto 6 (ロト6)";

lotCountries[102] = "Japan";

lotConfigurations[102] = "6x43.0x0";

lotNames[103] = "Loto 7 (ロト7)";

lotCountries[103] = "Japan";

lotConfigurations[103] = "7x37.0x0";

lotNames[104] = "Mini Loto (ミニロト)";

lotCountries[104] = "Japan";

lotConfigurations[104] = "5x31.0x0";

lotNames[105] = "Eurojackpot";

lotCountries[105] = "Latvia";

lotConfigurations[105] = "5x50.2x10";

lotNames[106] = "LatLoto";

lotCountries[106] = "Latvia";

lotConfigurations[106] = "5x35.0x0";

lotNames[107] = "Loto";

lotCountries[107] = "Lebanon";

lotConfigurations[107] = "6x42.0x0";

lotNames[108] = "Eurojackpot";

lotCountries[108] = "Lithuania";

lotConfigurations[108] = "5x50.2x10";

lotNames[109] = "EuroMillions";

lotCountries[109] = "Luxembourg";

lotConfigurations[109] = "5x50.2x11";

lotNames[110] = "НовоЛото 7/34";

lotCountries[110] = "Macedonia";

lotConfigurations[110] = "7x34.0x0";

lotNames[111] = "Sportstoto Grand 6/63";

lotCountries[111] = "Malaysia";

lotConfigurations[111] = "6x63.0x0";

lotNames[112] = "Sportstoto Power 6/55";

lotCountries[112] = "Malaysia";

lotConfigurations[112] = "6x52.0x0";

lotNames[113] = "Sportstoto Supreme 6/58";

lotCountries[113] = "Malaysia";

lotConfigurations[113] = "6x58.0x0";

lotNames[114] = "Super 5 Lottery";

lotCountries[114] = "Malta";

lotConfigurations[114] = "5x45.0x0";

lotNames[115] = "Chispazo Lottery";

lotCountries[115] = "Mexico";

lotConfigurations[115] = "5x28.0x0";

lotNames[116] = "Melate Lottery";

lotCountries[116] = "Mexico";

lotConfigurations[116] = "6x56.0x0";

lotNames[117] = "Superlotto Millonario";

lotCountries[117] = "Mexico";

lotConfigurations[117] = "6x49.0x0";

lotNames[118] = "Eurojackpot";

lotCountries[118] = "Netherlands";

lotConfigurations[118] = "5x50.2x10";

lotNames[119] = "Lotto";

lotCountries[119] = "Netherlands";

lotConfigurations[119] = "6x45.1x6";

lotNames[120] = "Big Wednesday Lottery";

lotCountries[120] = "New Zealand";

lotConfigurations[120] = "6x50.1x2";

lotNames[121] = "Lotto";

lotCountries[121] = "New Zealand";

lotConfigurations[121] = "6x40.0x0";

lotNames[122] = "Powerball";

lotCountries[122] = "New Zealand";

lotConfigurations[122] = "6x40.1x10";

lotNames[123] = "La Grande Loto";

lotCountries[123] = "Nicaragua";

lotConfigurations[123] = "5x25.1x10";

lotNames[124] = "Eurojackpot";

lotCountries[124] = "Norway";

lotConfigurations[124] = "5x50.2x10";

lotNames[125] = "Lotto";

lotCountries[125] = "Norway";

lotConfigurations[125] = "7x34.0x0";

lotNames[126] = "Viking Lotto";

lotCountries[126] = "Norway";

lotConfigurations[126] = "6x48.0x0";

lotNames[127] = "Grand Lotto 6/55";

lotCountries[127] = "Philippines";

lotConfigurations[127] = "6x55.0x0";

lotNames[128] = "Lotto 6/42";

lotCountries[128] = "Philippines";

lotConfigurations[128] = "6x42.0x0";

lotNames[129] = "Mega Lotto 6/45";

lotCountries[129] = "Philippines";

lotConfigurations[129] = "6x45.0x0";

lotNames[130] = "Power Lotto";

lotCountries[130] = "Philippines";

lotConfigurations[130] = "5x55.1x10";

lotNames[131] = "Super Lotto 6/49";

lotCountries[131] = "Philippines";

lotConfigurations[131] = "6x49.0x0";

lotNames[132] = "Ultra Lotto 6/58";

lotCountries[132] = "Philippines";

lotConfigurations[132] = "6x48.0x0";

lotNames[133] = "Ekstra Pensja";

lotCountries[133] = "Poland";

lotConfigurations[133] = "5x35.1x4";

lotNames[134] = "Lotto";

lotCountries[134] = "Poland";

lotConfigurations[134] = "6x49.0x0";

lotNames[135] = "Mini Lotto";

lotCountries[135] = "Poland";

lotConfigurations[135] = "5x42.0x0";

lotNames[136] = "Multi Multi";

lotCountries[136] = "Poland";

lotConfigurations[136] = "10x80.0x0";

lotNames[137] = "EuroMillions";

lotCountries[137] = "Portugal";

lotConfigurations[137] = "5x50.2x11";

lotNames[138] = "Totoloto";

lotCountries[138] = "Portugal";

lotConfigurations[138] = "5x49.1x13";

lotNames[139] = "Loto";

lotCountries[139] = "Puerto Rico";

lotConfigurations[139] = "6x46.0x0";

lotNames[140] = "Joker";

lotCountries[140] = "Romania";

lotConfigurations[140] = "5x45.1x20";

lotNames[141] = "Loto 5/40";

lotCountries[141] = "Romania";

lotConfigurations[141] = "5x40.0x0";

lotNames[142] = "Loto 6/49";

lotCountries[142] = "Romania";

lotConfigurations[142] = "6x49.0x0";

lotNames[143] = "Gosloto (Гослото) 5/36";

lotCountries[143] = "Russia";

lotConfigurations[143] = "5x36.0x0";

lotNames[144] = "Gosloto (Гослото) 6/45";

lotCountries[144] = "Russia";

lotConfigurations[144] = "6x45.0x0";

lotNames[145] = "Stoloto 7x49";

lotCountries[145] = "Russia";

lotConfigurations[145] = "7x49.0x0";

lotNames[146] = "Stoloto Спортлото";

lotCountries[146] = "Russia";

lotConfigurations[146] = "6x49.0x0";

lotNames[147] = "State Lottery (Državna Lutrija Srbije)";

lotCountries[147] = "Serbia";

lotConfigurations[147] = "7x39.0x0";

lotNames[148] = "Toto";

lotCountries[148] = "Singapore";

lotConfigurations[148] = "6x49.0x0";

lotNames[149] = "Eurojackpot";

lotCountries[149] = "Slovakia";

lotConfigurations[149] = "5x50.2x10";

lotNames[150] = "Euromillions";

lotCountries[150] = "Slovakia";

lotConfigurations[150] = "7x33.1x6";

lotNames[151] = "Eurojackpot";

lotCountries[151] = "Slovenia";

lotConfigurations[151] = "5x50.2x10";

lotNames[152] = "Loto";

lotCountries[152] = "Slovenia";

lotConfigurations[152] = "7x39.0x0";

lotNames[153] = "Lotto";

lotCountries[153] = "South Africa";

lotConfigurations[153] = "6x49.0x0";

lotNames[154] = "Powerball";

lotCountries[154] = "South Africa";

lotConfigurations[154] = "5x45.1x20";

lotNames[155] = "Nanum Lottery (나눔로또)";

lotCountries[155] = "South Korea";

lotConfigurations[155] = "6x45.0x0";

lotNames[156] = "BonoLoto";

lotCountries[156] = "Spain";

lotConfigurations[156] = "6x49.0x0";

lotNames[157] = "Daily 6/49";

lotCountries[157] = "Spain";

lotConfigurations[157] = "6x49.0x0";

lotNames[158] = "EuroMillions";

lotCountries[158] = "Spain";

lotConfigurations[158] = "5x50.2x11";

lotNames[159] = "Eurojackpot";

lotCountries[159] = "Spain";

lotConfigurations[159] = "5x50.2x10";

lotNames[160] = "La Primitiva";

lotCountries[160] = "Spain";

lotConfigurations[160] = "6x49.0x0";

lotNames[161] = "Eurojackpot";

lotCountries[161] = "Sweden";

lotConfigurations[161] = "5x50.2x10";

lotNames[162] = "SwedenLotto";

lotCountries[162] = "Sweden";

lotConfigurations[162] = "7x35.0x0";

lotNames[163] = "Viking Lotto";

lotCountries[163] = "Sweden";

lotConfigurations[163] = "6x48.0x0";

lotNames[164] = "EuroMillions";

lotCountries[164] = "Switzerland";

lotConfigurations[164] = "5x50.2x11";

lotNames[165] = "Lotto";

lotCountries[165] = "Switzerland";

lotConfigurations[165] = "6x42.1x6";

lotNames[166] = "Big Lottery (台灣彩券-大樂透)";

lotCountries[166] = "Taiwan";

lotConfigurations[166] = "6x49.0x0";

lotNames[167] = "Everyday 539 Lottery (台灣彩券-今彩539)";

lotCountries[167] = "Taiwan";

lotConfigurations[167] = "5x39.0x0";

lotNames[168] = "Power Lottery (台灣彩券-威力彩)";

lotCountries[168] = "Taiwan";

lotConfigurations[168] = "6x38.1x8";

lotNames[169] = "Lotto Plus";

lotCountries[169] = "Trinidad and Tobago";

lotConfigurations[169] = "5x35.1x10";

lotNames[170] = "On Numara";

lotCountries[170] = "Turkey";

lotConfigurations[170] = "10x80.0x0";

lotNames[171] = "Sayisal Loto";

lotCountries[171] = "Turkey";

lotConfigurations[171] = "6x49.0x0";

lotNames[172] = "Süper Loto";

lotCountries[172] = "Turkey";

lotConfigurations[172] = "6x54.0x0";

lotNames[173] = "Şans Topu";

lotCountries[173] = "Turkey";

lotConfigurations[173] = "5x34.1x14";

lotNames[174] = "Keno - Pick  1";

lotCountries[174] = "Ukraine";

lotConfigurations[174] = "1x80.0x0";

lotNames[175] = "Keno - Pick  2";

lotCountries[175] = "Ukraine";

lotConfigurations[175] = "2x80.0x0";

lotNames[176] = "Keno - Pick  3";

lotCountries[176] = "Ukraine";

lotConfigurations[176] = "3x80.0x0";

lotNames[177] = "Keno - Pick  4";

lotCountries[177] = "Ukraine";

lotConfigurations[177] = "4x80.0x0";

lotNames[178] = "Keno - Pick  5";

lotCountries[178] = "Ukraine";

lotConfigurations[178] = "5x80.0x0";

lotNames[179] = "Keno - Pick  6";

lotCountries[179] = "Ukraine";

lotConfigurations[179] = "6x80.0x0";

lotNames[180] = "Keno - Pick  7";

lotCountries[180] = "Ukraine";

lotConfigurations[180] = "7x80.0x0";

lotNames[181] = "Keno - Pick  8";

lotCountries[181] = "Ukraine";

lotConfigurations[181] = "8x80.0x0";

lotNames[182] = "Keno - Pick  9";

lotCountries[182] = "Ukraine";

lotConfigurations[182] = "9x80.0x0";

lotNames[183] = "Keno - Pick 10";

lotCountries[183] = "Ukraine";

lotConfigurations[183] = "10x80.0x0";

lotNames[184] = "National Lottery";

lotCountries[184] = "Ukraine";

lotConfigurations[184] = "6x52.0x0";

lotNames[185] = "49's Lunchtime or Teatime";

lotCountries[185] = "United Kingdom";

lotConfigurations[185] = "6x49.1x49";

lotNames[186] = "EuroMillions";

lotCountries[186] = "United Kingdom";

lotConfigurations[186] = "5x50.2x11";

lotNames[187] = "Lotto HotPicks - Pick 1";

lotCountries[187] = "United Kingdom";

lotConfigurations[187] = "1x49.0x0";

lotNames[188] = "Lotto HotPicks - Pick 2";

lotCountries[188] = "United Kingdom";

lotConfigurations[188] = "2x49.0x0";

lotNames[189] = "Lotto HotPicks - Pick 3";

lotCountries[189] = "United Kingdom";

lotConfigurations[189] = "3x49.0x0";

lotNames[190] = "Lotto HotPicks - Pick 4";

lotCountries[190] = "United Kingdom";

lotConfigurations[190] = "4x49.0x0";

lotNames[191] = "Lotto HotPicks - Pick 5";

lotCountries[191] = "United Kingdom";

lotConfigurations[191] = "5x49.0x0";

lotNames[192] = "National Lottery";

lotCountries[192] = "United Kingdom";

lotConfigurations[192] = "6x49.0x0";

lotNames[193] = "Thunderball";

lotCountries[193] = "United Kingdom";

lotConfigurations[193] = "5x39.1x14";

lotNames[194] = "Arizona - 'The Pick'";

lotCountries[194] = "USA";

lotConfigurations[194] = "6x44.0x0";

lotNames[195] = "Arizona - 2 By 2";

lotCountries[195] = "USA";

lotConfigurations[195] = "2x26.2x26";

lotNames[196] = "Arizona - All or Nothing";

lotCountries[196] = "USA";

lotConfigurations[196] = "10x20.0x0";

lotNames[197] = "Arizona - Fantasy 5";

lotCountries[197] = "USA";

lotConfigurations[197] = "5x41.0x0";

lotNames[198] = "Arizona - Weekly Winnings";

lotCountries[198] = "USA";

lotConfigurations[198] = "4x50.0x0";

lotNames[199] = "California - Fantasy 5";

lotCountries[199] = "USA";

lotConfigurations[199] = "5x39.0x0";

lotNames[200] = "California - Super Lotto Plus";

lotCountries[200] = "USA";

lotConfigurations[200] = "5x47.1x27";

lotNames[201] = "Cash4Life (Multi-State)";

lotCountries[201] = "USA";

lotConfigurations[201] = "5x60.1x4";

lotNames[202] = "Colorado - Cash 5";

lotCountries[202] = "USA";

lotConfigurations[202] = "5x32.0x0";

lotNames[203] = "Colorado - Lotto";

lotCountries[203] = "USA";

lotConfigurations[203] = "6x42.0x0";

lotNames[204] = "Connecticut - Cash 5";

lotCountries[204] = "USA";

lotConfigurations[204] = "5x35.0x0";

lotNames[205] = "Connecticut - Classic Lotto";

lotCountries[205] = "USA";

lotConfigurations[205] = "6x44.0x0";

lotNames[206] = "Decades of Dollars (Multi-State)";

lotCountries[206] = "USA";

lotConfigurations[206] = "6x47.0x0";

lotNames[207] = "Florida - Fantasy 5";

lotCountries[207] = "USA";

lotConfigurations[207] = "5x36.0x0";

lotNames[208] = "Florida - Lotto";

lotCountries[208] = "USA";

lotConfigurations[208] = "6x53.0x0";

lotNames[209] = "Florida - Lucky Money";

lotCountries[209] = "USA";

lotConfigurations[209] = "4x47.1x17";

lotNames[210] = "Georgia - Fantasy 5";

lotCountries[210] = "USA";

lotConfigurations[210] = "5x39.0x0";

lotNames[211] = "Georgia - Win For Life";

lotCountries[211] = "USA";

lotConfigurations[211] = "6x42.0x0";

lotNames[212] = "Hot Lotto (Multi-State)";

lotCountries[212] = "USA";

lotConfigurations[212] = "5x47.1x19";

lotNames[213] = "Idaho - Weekly Grand";

lotCountries[213] = "USA";

lotConfigurations[213] = "5x32.0x0";

lotNames[214] = "Illinois - Lotto";

lotCountries[214] = "USA";

lotConfigurations[214] = "6x52.0x0";

lotNames[215] = "Indiana - Cash 5";

lotCountries[215] = "USA";

lotConfigurations[215] = "5x41.0x0";

lotNames[216] = "Indiana - Hoosier Lotto";

lotCountries[216] = "USA";

lotConfigurations[216] = "6x48.0x0";

lotNames[217] = "Indiana - Mix & Match";

lotCountries[217] = "USA";

lotConfigurations[217] = "5x50.0x0";

lotNames[218] = "Indiana - Quick Draw";

lotCountries[218] = "USA";

lotConfigurations[218] = "10x80.0x0";

lotNames[219] = "Kansas - Super Cash";

lotCountries[219] = "USA";

lotConfigurations[219] = "5x32.1x25";

lotNames[220] = "Keno - Pick  1";

lotCountries[220] = "USA";

lotConfigurations[220] = "1x80.0x0";

lotNames[221] = "Keno - Pick  2";

lotCountries[221] = "USA";

lotConfigurations[221] = "2x80.0x0";

lotNames[222] = "Keno - Pick  3";

lotCountries[222] = "USA";

lotConfigurations[222] = "3x80.0x0";

lotNames[223] = "Keno - Pick  4";

lotCountries[223] = "USA";

lotConfigurations[223] = "4x80.0x0";

lotNames[224] = "Keno - Pick  5";

lotCountries[224] = "USA";

lotConfigurations[224] = "5x80.0x0";

lotNames[225] = "Keno - Pick  6";

lotCountries[225] = "USA";

lotConfigurations[225] = "6x80.0x0";

lotNames[226] = "Keno - Pick  7";

lotCountries[226] = "USA";

lotConfigurations[226] = "7x80.0x0";

lotNames[227] = "Keno - Pick  8";

lotCountries[227] = "USA";

lotConfigurations[227] = "8x80.0x0";

lotNames[228] = "Keno - Pick  9";

lotCountries[228] = "USA";

lotConfigurations[228] = "9x80.0x0";

lotNames[229] = "Keno - Pick 10";

lotCountries[229] = "USA";

lotConfigurations[229] = "10x80.0x0";

lotNames[230] = "Kentucky - Cash Ball";

lotCountries[230] = "USA";

lotConfigurations[230] = "4x33.1x31";

lotNames[231] = "Kentucky - Win For Life";

lotCountries[231] = "USA";

lotConfigurations[231] = "6x42.0x0";

lotNames[232] = "Louisiana - Easy 5";

lotCountries[232] = "USA";

lotConfigurations[232] = "5x37.0x0";

lotNames[233] = "Louisiana - Lotto";

lotCountries[233] = "USA";

lotConfigurations[233] = "6x40.0x0";

lotNames[234] = "Lucky-for-Life (Multi-State)";

lotCountries[234] = "USA";

lotConfigurations[234] = "5x48.1x18";

lotNames[235] = "Maryland - Bonus Match 5";

lotCountries[235] = "USA";

lotConfigurations[235] = "5x39.0x0";

lotNames[236] = "Maryland - Multi-Match";

lotCountries[236] = "USA";

lotConfigurations[236] = "6x43.0x0";

lotNames[237] = "Massachusetts - Mass Cash";

lotCountries[237] = "USA";

lotConfigurations[237] = "5x35.0x0";

lotNames[238] = "Massachusetts - Megabucks Doubler";

lotCountries[238] = "USA";

lotConfigurations[238] = "6x49.0x0";

lotNames[239] = "Mega Bucks Plus (Multi-State)";

lotCountries[239] = "USA";

lotConfigurations[239] = "5x41.1x6";

lotNames[240] = "Mega Millions (Multi-State)";

lotCountries[240] = "USA";

lotConfigurations[240] = "5x75.1x15";

lotNames[241] = "Michigan - Classic Lotto 47";

lotCountries[241] = "USA";

lotConfigurations[241] = "6x47.0x0";

lotNames[242] = "Michigan - Fantasy 5";

lotCountries[242] = "USA";

lotConfigurations[242] = "5x39.0x0";

lotNames[243] = "Minnesota - Gopher 5";

lotCountries[243] = "USA";

lotConfigurations[243] = "5x47.0x0";

lotNames[244] = "Minnesota - Northstar Cash";

lotCountries[244] = "USA";

lotConfigurations[244] = "5x31.0x0";

lotNames[245] = "Missouri - Lotto";

lotCountries[245] = "USA";

lotConfigurations[245] = "6x44.0x0";

lotNames[246] = "Missouri - Show Me Cash";

lotCountries[246] = "USA";

lotConfigurations[246] = "5x39.0x0";

lotNames[247] = "Monopoly Millionaires' Club (Multi-State)";

lotCountries[247] = "USA";

lotConfigurations[247] = "5x52.0x0";

lotNames[248] = "Nebraska - Pick 5";

lotCountries[248] = "USA";

lotConfigurations[248] = "5x38.0x0";

lotNames[249] = "New Jersey - Cash 5";

lotCountries[249] = "USA";

lotConfigurations[249] = "5x43.0x0";

lotNames[250] = "New Jersey - Pick 6";

lotCountries[250] = "USA";

lotConfigurations[250] = "6x49.0x0";

lotNames[251] = "New Mexico - Road Runner Cash";

lotCountries[251] = "USA";

lotConfigurations[251] = "5x37.0x0";

lotNames[252] = "New York - Lotto";

lotCountries[252] = "USA";

lotConfigurations[252] = "6x59.0x0";

lotNames[253] = "New York - Take 5";

lotCountries[253] = "USA";

lotConfigurations[253] = "5x39.0x0";

lotNames[254] = "North Carolina - Carolina Cash 5";

lotCountries[254] = "USA";

lotConfigurations[254] = "5x39.0x0";

lotNames[255] = "North Dakota - Wild Card 2";

lotCountries[255] = "USA";

lotConfigurations[255] = "5x33.1x16";

lotNames[256] = "Ohio - Classic Lotto";

lotCountries[256] = "USA";

lotConfigurations[256] = "6x49.0x0";

lotNames[257] = "Ohio - Rolling Cash 5";

lotCountries[257] = "USA";

lotConfigurations[257] = "5x39.0x0";

lotNames[258] = "Oklahoma - Cash 5";

lotCountries[258] = "USA";

lotConfigurations[258] = "5x36.0x0";

lotNames[259] = "Oregon - Megabucks";

lotCountries[259] = "USA";

lotConfigurations[259] = "6x48.0x0";

lotNames[260] = "Oregon - Win for Life";

lotCountries[260] = "USA";

lotConfigurations[260] = "4x77.0x0";

lotNames[261] = "Pennsylvania - Cash 5";

lotCountries[261] = "USA";

lotConfigurations[261] = "5x43.0x0";

lotNames[262] = "Pennsylvania - Match 6";

lotCountries[262] = "USA";

lotConfigurations[262] = "6x49.0x0";

lotNames[263] = "Pennsylvania - Mix and Match";

lotCountries[263] = "USA";

lotConfigurations[263] = "5x19.0x0";

lotNames[264] = "Pennsylvania - Treasure Hunt";

lotCountries[264] = "USA";

lotConfigurations[264] = "5x30.0x0";

lotNames[265] = "Powerball (Multi-State)";

lotCountries[265] = "USA";

lotConfigurations[265] = "5x59.1x35";

lotNames[266] = "Rhode Island - Wild Money";

lotCountries[266] = "USA";

lotConfigurations[266] = "5x35.0x0";

lotNames[267] = "South Carolina - Palmetto Cash 5";

lotCountries[267] = "USA";

lotConfigurations[267] = "5x38.0x0";

lotNames[268] = "South Dakota - Dakota Cash";

lotCountries[268] = "USA";

lotConfigurations[268] = "5x35.0x0";

lotNames[269] = "Tennessee - Tennessee Cash";

lotCountries[269] = "USA";

lotConfigurations[269] = "5x35.1x5";

lotNames[270] = "Texas - All or Nothing";

lotCountries[270] = "USA";

lotConfigurations[270] = "12x24.0x0";

lotNames[271] = "Texas - Cash Five";

lotCountries[271] = "USA";

lotConfigurations[271] = "5x37.0x0";

lotNames[272] = "Texas - Lotto";

lotCountries[272] = "USA";

lotConfigurations[272] = "6x54.0x0";

lotNames[273] = "Texas - Two Step";

lotCountries[273] = "USA";

lotConfigurations[273] = "4x35.1x35";

lotNames[274] = "Virginia - $1,000,000 Moneyball";

lotCountries[274] = "USA";

lotConfigurations[274] = "5x35.0x0";

lotNames[275] = "Virginia - Cash 5";

lotCountries[275] = "USA";

lotConfigurations[275] = "5x34.0x0";

lotNames[276] = "Virginia - Win For Life";

lotCountries[276] = "USA";

lotConfigurations[276] = "6x42.0x0";

lotNames[277] = "Washington - Hit 5";

lotCountries[277] = "USA";

lotConfigurations[277] = "5x39.0x0";

lotNames[278] = "Washington - Lotto";

lotCountries[278] = "USA";

lotConfigurations[278] = "6x49.0x0";

lotNames[279] = "Washington - Match 4";

lotCountries[279] = "USA";

lotConfigurations[279] = "4x24.0x0";

lotNames[280] = "Weekly Grand (Multi-State)";

lotCountries[280] = "USA";

lotConfigurations[280] = "4x35.1x35";

lotNames[281] = "West Virginia - Cash 25";

lotCountries[281] = "USA";

lotConfigurations[281] = "6x25.0x0";

lotNames[282] = "Wisconsin - Badger 5";

lotCountries[282] = "USA";

lotConfigurations[282] = "5x31.0x0";

Alloy.createController("index");