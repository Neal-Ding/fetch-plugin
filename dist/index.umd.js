(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global._fetch = factory());
}(this, (function () { 'use strict';

  var cov_1rwz6k9yi4 = function () {
    var path = '/Users/Jacky/Documents/GitHub/fetch-plugin/src/whatwg-fetch.js',
        hash = '39f1e7f5b985ffe6912b6aacd8e3bcf935614112',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/Jacky/Documents/GitHub/fetch-plugin/src/whatwg-fetch.js',
      statementMap: {
        '0': {
          start: {
            line: 1,
            column: 14
          },
          end: {
            line: 17,
            column: 3
          }
        },
        '1': {
          start: {
            line: 8,
            column: 8
          },
          end: {
            line: 13,
            column: 9
          }
        },
        '2': {
          start: {
            line: 9,
            column: 10
          },
          end: {
            line: 9,
            column: 20
          }
        },
        '3': {
          start: {
            line: 10,
            column: 10
          },
          end: {
            line: 10,
            column: 21
          }
        },
        '4': {
          start: {
            line: 12,
            column: 10
          },
          end: {
            line: 12,
            column: 22
          }
        },
        '5': {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 20,
            column: 55
          }
        },
        '6': {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 41,
            column: 3
          }
        },
        '7': {
          start: {
            line: 24,
            column: 22
          },
          end: {
            line: 34,
            column: 5
          }
        },
        '8': {
          start: {
            line: 37,
            column: 6
          },
          end: {
            line: 40,
            column: 7
          }
        },
        '9': {
          start: {
            line: 39,
            column: 8
          },
          end: {
            line: 39,
            column: 83
          }
        },
        '10': {
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 46,
            column: 5
          }
        },
        '11': {
          start: {
            line: 45,
            column: 6
          },
          end: {
            line: 45,
            column: 25
          }
        },
        '12': {
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 49,
            column: 5
          }
        },
        '13': {
          start: {
            line: 48,
            column: 6
          },
          end: {
            line: 48,
            column: 67
          }
        },
        '14': {
          start: {
            line: 50,
            column: 4
          },
          end: {
            line: 50,
            column: 29
          }
        },
        '15': {
          start: {
            line: 54,
            column: 4
          },
          end: {
            line: 56,
            column: 5
          }
        },
        '16': {
          start: {
            line: 55,
            column: 6
          },
          end: {
            line: 55,
            column: 27
          }
        },
        '17': {
          start: {
            line: 57,
            column: 4
          },
          end: {
            line: 57,
            column: 16
          }
        },
        '18': {
          start: {
            line: 62,
            column: 19
          },
          end: {
            line: 67,
            column: 5
          }
        },
        '19': {
          start: {
            line: 64,
            column: 20
          },
          end: {
            line: 64,
            column: 33
          }
        },
        '20': {
          start: {
            line: 65,
            column: 8
          },
          end: {
            line: 65,
            column: 56
          }
        },
        '21': {
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 73,
            column: 5
          }
        },
        '22': {
          start: {
            line: 70,
            column: 6
          },
          end: {
            line: 72,
            column: 7
          }
        },
        '23': {
          start: {
            line: 71,
            column: 8
          },
          end: {
            line: 71,
            column: 23
          }
        },
        '24': {
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 75,
            column: 19
          }
        },
        '25': {
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 79,
            column: 17
          }
        },
        '26': {
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 93,
            column: 5
          }
        },
        '27': {
          start: {
            line: 82,
            column: 6
          },
          end: {
            line: 84,
            column: 14
          }
        },
        '28': {
          start: {
            line: 83,
            column: 8
          },
          end: {
            line: 83,
            column: 32
          }
        },
        '29': {
          start: {
            line: 85,
            column: 11
          },
          end: {
            line: 93,
            column: 5
          }
        },
        '30': {
          start: {
            line: 86,
            column: 6
          },
          end: {
            line: 88,
            column: 14
          }
        },
        '31': {
          start: {
            line: 87,
            column: 8
          },
          end: {
            line: 87,
            column: 41
          }
        },
        '32': {
          start: {
            line: 89,
            column: 11
          },
          end: {
            line: 93,
            column: 5
          }
        },
        '33': {
          start: {
            line: 90,
            column: 6
          },
          end: {
            line: 92,
            column: 14
          }
        },
        '34': {
          start: {
            line: 91,
            column: 8
          },
          end: {
            line: 91,
            column: 40
          }
        },
        '35': {
          start: {
            line: 96,
            column: 2
          },
          end: {
            line: 101,
            column: 3
          }
        },
        '36': {
          start: {
            line: 97,
            column: 4
          },
          end: {
            line: 97,
            column: 30
          }
        },
        '37': {
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 98,
            column: 33
          }
        },
        '38': {
          start: {
            line: 99,
            column: 19
          },
          end: {
            line: 99,
            column: 33
          }
        },
        '39': {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 100,
            column: 63
          }
        },
        '40': {
          start: {
            line: 103,
            column: 2
          },
          end: {
            line: 105,
            column: 3
          }
        },
        '41': {
          start: {
            line: 104,
            column: 4
          },
          end: {
            line: 104,
            column: 40
          }
        },
        '42': {
          start: {
            line: 107,
            column: 2
          },
          end: {
            line: 110,
            column: 3
          }
        },
        '43': {
          start: {
            line: 108,
            column: 4
          },
          end: {
            line: 108,
            column: 30
          }
        },
        '44': {
          start: {
            line: 109,
            column: 4
          },
          end: {
            line: 109,
            column: 49
          }
        },
        '45': {
          start: {
            line: 112,
            column: 2
          },
          end: {
            line: 114,
            column: 3
          }
        },
        '46': {
          start: {
            line: 113,
            column: 4
          },
          end: {
            line: 113,
            column: 55
          }
        },
        '47': {
          start: {
            line: 116,
            column: 2
          },
          end: {
            line: 118,
            column: 3
          }
        },
        '48': {
          start: {
            line: 117,
            column: 4
          },
          end: {
            line: 117,
            column: 57
          }
        },
        '49': {
          start: {
            line: 120,
            column: 2
          },
          end: {
            line: 126,
            column: 3
          }
        },
        '50': {
          start: {
            line: 121,
            column: 4
          },
          end: {
            line: 125,
            column: 5
          }
        },
        '51': {
          start: {
            line: 122,
            column: 6
          },
          end: {
            line: 124,
            column: 7
          }
        },
        '52': {
          start: {
            line: 123,
            column: 8
          },
          end: {
            line: 123,
            column: 58
          }
        },
        '53': {
          start: {
            line: 128,
            column: 2
          },
          end: {
            line: 134,
            column: 3
          }
        },
        '54': {
          start: {
            line: 129,
            column: 16
          },
          end: {
            line: 129,
            column: 18
          }
        },
        '55': {
          start: {
            line: 130,
            column: 4
          },
          end: {
            line: 132,
            column: 6
          }
        },
        '56': {
          start: {
            line: 131,
            column: 6
          },
          end: {
            line: 131,
            column: 22
          }
        },
        '57': {
          start: {
            line: 133,
            column: 4
          },
          end: {
            line: 133,
            column: 29
          }
        },
        '58': {
          start: {
            line: 136,
            column: 2
          },
          end: {
            line: 142,
            column: 3
          }
        },
        '59': {
          start: {
            line: 137,
            column: 16
          },
          end: {
            line: 137,
            column: 18
          }
        },
        '60': {
          start: {
            line: 138,
            column: 4
          },
          end: {
            line: 140,
            column: 6
          }
        },
        '61': {
          start: {
            line: 139,
            column: 6
          },
          end: {
            line: 139,
            column: 23
          }
        },
        '62': {
          start: {
            line: 141,
            column: 4
          },
          end: {
            line: 141,
            column: 29
          }
        },
        '63': {
          start: {
            line: 144,
            column: 2
          },
          end: {
            line: 150,
            column: 3
          }
        },
        '64': {
          start: {
            line: 145,
            column: 16
          },
          end: {
            line: 145,
            column: 18
          }
        },
        '65': {
          start: {
            line: 146,
            column: 4
          },
          end: {
            line: 148,
            column: 6
          }
        },
        '66': {
          start: {
            line: 147,
            column: 6
          },
          end: {
            line: 147,
            column: 31
          }
        },
        '67': {
          start: {
            line: 149,
            column: 4
          },
          end: {
            line: 149,
            column: 29
          }
        },
        '68': {
          start: {
            line: 152,
            column: 2
          },
          end: {
            line: 154,
            column: 3
          }
        },
        '69': {
          start: {
            line: 153,
            column: 4
          },
          end: {
            line: 153,
            column: 66
          }
        },
        '70': {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 159,
            column: 5
          }
        },
        '71': {
          start: {
            line: 158,
            column: 6
          },
          end: {
            line: 158,
            column: 58
          }
        },
        '72': {
          start: {
            line: 160,
            column: 4
          },
          end: {
            line: 160,
            column: 24
          }
        },
        '73': {
          start: {
            line: 164,
            column: 4
          },
          end: {
            line: 171,
            column: 6
          }
        },
        '74': {
          start: {
            line: 165,
            column: 6
          },
          end: {
            line: 167,
            column: 7
          }
        },
        '75': {
          start: {
            line: 166,
            column: 8
          },
          end: {
            line: 166,
            column: 30
          }
        },
        '76': {
          start: {
            line: 168,
            column: 6
          },
          end: {
            line: 170,
            column: 7
          }
        },
        '77': {
          start: {
            line: 169,
            column: 8
          },
          end: {
            line: 169,
            column: 28
          }
        },
        '78': {
          start: {
            line: 175,
            column: 17
          },
          end: {
            line: 175,
            column: 33
          }
        },
        '79': {
          start: {
            line: 176,
            column: 18
          },
          end: {
            line: 176,
            column: 41
          }
        },
        '80': {
          start: {
            line: 177,
            column: 4
          },
          end: {
            line: 177,
            column: 34
          }
        },
        '81': {
          start: {
            line: 178,
            column: 4
          },
          end: {
            line: 178,
            column: 18
          }
        },
        '82': {
          start: {
            line: 182,
            column: 17
          },
          end: {
            line: 182,
            column: 33
          }
        },
        '83': {
          start: {
            line: 183,
            column: 18
          },
          end: {
            line: 183,
            column: 41
          }
        },
        '84': {
          start: {
            line: 184,
            column: 4
          },
          end: {
            line: 184,
            column: 27
          }
        },
        '85': {
          start: {
            line: 185,
            column: 4
          },
          end: {
            line: 185,
            column: 18
          }
        },
        '86': {
          start: {
            line: 189,
            column: 15
          },
          end: {
            line: 189,
            column: 34
          }
        },
        '87': {
          start: {
            line: 190,
            column: 16
          },
          end: {
            line: 190,
            column: 38
          }
        },
        '88': {
          start: {
            line: 192,
            column: 4
          },
          end: {
            line: 194,
            column: 5
          }
        },
        '89': {
          start: {
            line: 193,
            column: 6
          },
          end: {
            line: 193,
            column: 45
          }
        },
        '90': {
          start: {
            line: 195,
            column: 4
          },
          end: {
            line: 195,
            column: 25
          }
        },
        '91': {
          start: {
            line: 199,
            column: 4
          },
          end: {
            line: 205,
            column: 5
          }
        },
        '92': {
          start: {
            line: 200,
            column: 6
          },
          end: {
            line: 200,
            column: 25
          }
        },
        '93': {
          start: {
            line: 202,
            column: 17
          },
          end: {
            line: 202,
            column: 47
          }
        },
        '94': {
          start: {
            line: 203,
            column: 6
          },
          end: {
            line: 203,
            column: 35
          }
        },
        '95': {
          start: {
            line: 204,
            column: 6
          },
          end: {
            line: 204,
            column: 24
          }
        },
        '96': {
          start: {
            line: 209,
            column: 4
          },
          end: {
            line: 209,
            column: 25
          }
        },
        '97': {
          start: {
            line: 211,
            column: 4
          },
          end: {
            line: 242,
            column: 5
          }
        },
        '98': {
          start: {
            line: 212,
            column: 6
          },
          end: {
            line: 212,
            column: 27
          }
        },
        '99': {
          start: {
            line: 213,
            column: 6
          },
          end: {
            line: 231,
            column: 7
          }
        },
        '100': {
          start: {
            line: 214,
            column: 8
          },
          end: {
            line: 214,
            column: 27
          }
        },
        '101': {
          start: {
            line: 215,
            column: 13
          },
          end: {
            line: 231,
            column: 7
          }
        },
        '102': {
          start: {
            line: 216,
            column: 8
          },
          end: {
            line: 216,
            column: 29
          }
        },
        '103': {
          start: {
            line: 217,
            column: 13
          },
          end: {
            line: 231,
            column: 7
          }
        },
        '104': {
          start: {
            line: 218,
            column: 8
          },
          end: {
            line: 218,
            column: 29
          }
        },
        '105': {
          start: {
            line: 219,
            column: 13
          },
          end: {
            line: 231,
            column: 7
          }
        },
        '106': {
          start: {
            line: 220,
            column: 8
          },
          end: {
            line: 220,
            column: 33
          }
        },
        '107': {
          start: {
            line: 221,
            column: 13
          },
          end: {
            line: 231,
            column: 7
          }
        },
        '108': {
          start: {
            line: 222,
            column: 8
          },
          end: {
            line: 222,
            column: 40
          }
        },
        '109': {
          start: {
            line: 223,
            column: 13
          },
          end: {
            line: 231,
            column: 7
          }
        },
        '110': {
          start: {
            line: 224,
            column: 8
          },
          end: {
            line: 224,
            column: 56
          }
        },
        '111': {
          start: {
            line: 226,
            column: 8
          },
          end: {
            line: 226,
            column: 58
          }
        },
        '112': {
          start: {
            line: 227,
            column: 13
          },
          end: {
            line: 231,
            column: 7
          }
        },
        '113': {
          start: {
            line: 228,
            column: 8
          },
          end: {
            line: 228,
            column: 49
          }
        },
        '114': {
          start: {
            line: 230,
            column: 8
          },
          end: {
            line: 230,
            column: 52
          }
        },
        '115': {
          start: {
            line: 233,
            column: 6
          },
          end: {
            line: 241,
            column: 7
          }
        },
        '116': {
          start: {
            line: 234,
            column: 8
          },
          end: {
            line: 240,
            column: 9
          }
        },
        '117': {
          start: {
            line: 235,
            column: 10
          },
          end: {
            line: 235,
            column: 70
          }
        },
        '118': {
          start: {
            line: 236,
            column: 15
          },
          end: {
            line: 240,
            column: 9
          }
        },
        '119': {
          start: {
            line: 237,
            column: 10
          },
          end: {
            line: 237,
            column: 63
          }
        },
        '120': {
          start: {
            line: 238,
            column: 15
          },
          end: {
            line: 240,
            column: 9
          }
        },
        '121': {
          start: {
            line: 239,
            column: 10
          },
          end: {
            line: 239,
            column: 93
          }
        },
        '122': {
          start: {
            line: 244,
            column: 4
          },
          end: {
            line: 269,
            column: 5
          }
        },
        '123': {
          start: {
            line: 245,
            column: 6
          },
          end: {
            line: 260,
            column: 7
          }
        },
        '124': {
          start: {
            line: 246,
            column: 23
          },
          end: {
            line: 246,
            column: 37
          }
        },
        '125': {
          start: {
            line: 247,
            column: 8
          },
          end: {
            line: 249,
            column: 9
          }
        },
        '126': {
          start: {
            line: 248,
            column: 10
          },
          end: {
            line: 248,
            column: 25
          }
        },
        '127': {
          start: {
            line: 251,
            column: 8
          },
          end: {
            line: 259,
            column: 9
          }
        },
        '128': {
          start: {
            line: 252,
            column: 10
          },
          end: {
            line: 252,
            column: 48
          }
        },
        '129': {
          start: {
            line: 253,
            column: 15
          },
          end: {
            line: 259,
            column: 9
          }
        },
        '130': {
          start: {
            line: 254,
            column: 10
          },
          end: {
            line: 254,
            column: 67
          }
        },
        '131': {
          start: {
            line: 255,
            column: 15
          },
          end: {
            line: 259,
            column: 9
          }
        },
        '132': {
          start: {
            line: 256,
            column: 10
          },
          end: {
            line: 256,
            column: 65
          }
        },
        '133': {
          start: {
            line: 258,
            column: 10
          },
          end: {
            line: 258,
            column: 60
          }
        },
        '134': {
          start: {
            line: 262,
            column: 6
          },
          end: {
            line: 268,
            column: 7
          }
        },
        '135': {
          start: {
            line: 263,
            column: 8
          },
          end: {
            line: 267,
            column: 9
          }
        },
        '136': {
          start: {
            line: 264,
            column: 10
          },
          end: {
            line: 264,
            column: 73
          }
        },
        '137': {
          start: {
            line: 266,
            column: 10
          },
          end: {
            line: 266,
            column: 56
          }
        },
        '138': {
          start: {
            line: 271,
            column: 4
          },
          end: {
            line: 286,
            column: 5
          }
        },
        '139': {
          start: {
            line: 272,
            column: 21
          },
          end: {
            line: 272,
            column: 35
          }
        },
        '140': {
          start: {
            line: 273,
            column: 6
          },
          end: {
            line: 275,
            column: 7
          }
        },
        '141': {
          start: {
            line: 274,
            column: 8
          },
          end: {
            line: 274,
            column: 23
          }
        },
        '142': {
          start: {
            line: 277,
            column: 6
          },
          end: {
            line: 285,
            column: 7
          }
        },
        '143': {
          start: {
            line: 278,
            column: 8
          },
          end: {
            line: 278,
            column: 45
          }
        },
        '144': {
          start: {
            line: 279,
            column: 13
          },
          end: {
            line: 285,
            column: 7
          }
        },
        '145': {
          start: {
            line: 280,
            column: 8
          },
          end: {
            line: 280,
            column: 76
          }
        },
        '146': {
          start: {
            line: 281,
            column: 13
          },
          end: {
            line: 285,
            column: 7
          }
        },
        '147': {
          start: {
            line: 282,
            column: 8
          },
          end: {
            line: 282,
            column: 63
          }
        },
        '148': {
          start: {
            line: 284,
            column: 8
          },
          end: {
            line: 284,
            column: 46
          }
        },
        '149': {
          start: {
            line: 288,
            column: 4
          },
          end: {
            line: 292,
            column: 5
          }
        },
        '150': {
          start: {
            line: 289,
            column: 6
          },
          end: {
            line: 291,
            column: 7
          }
        },
        '151': {
          start: {
            line: 290,
            column: 8
          },
          end: {
            line: 290,
            column: 39
          }
        },
        '152': {
          start: {
            line: 294,
            column: 4
          },
          end: {
            line: 296,
            column: 5
          }
        },
        '153': {
          start: {
            line: 295,
            column: 6
          },
          end: {
            line: 295,
            column: 41
          }
        },
        '154': {
          start: {
            line: 298,
            column: 4
          },
          end: {
            line: 298,
            column: 15
          }
        },
        '155': {
          start: {
            line: 302,
            column: 16
          },
          end: {
            line: 302,
            column: 67
          }
        },
        '156': {
          start: {
            line: 305,
            column: 18
          },
          end: {
            line: 305,
            column: 38
          }
        },
        '157': {
          start: {
            line: 306,
            column: 4
          },
          end: {
            line: 306,
            column: 59
          }
        },
        '158': {
          start: {
            line: 310,
            column: 4
          },
          end: {
            line: 310,
            column: 27
          }
        },
        '159': {
          start: {
            line: 311,
            column: 15
          },
          end: {
            line: 311,
            column: 27
          }
        },
        '160': {
          start: {
            line: 313,
            column: 4
          },
          end: {
            line: 331,
            column: 5
          }
        },
        '161': {
          start: {
            line: 314,
            column: 6
          },
          end: {
            line: 316,
            column: 7
          }
        },
        '162': {
          start: {
            line: 315,
            column: 8
          },
          end: {
            line: 315,
            column: 43
          }
        },
        '163': {
          start: {
            line: 317,
            column: 6
          },
          end: {
            line: 317,
            column: 26
          }
        },
        '164': {
          start: {
            line: 318,
            column: 6
          },
          end: {
            line: 318,
            column: 42
          }
        },
        '165': {
          start: {
            line: 319,
            column: 6
          },
          end: {
            line: 321,
            column: 7
          }
        },
        '166': {
          start: {
            line: 320,
            column: 8
          },
          end: {
            line: 320,
            column: 49
          }
        },
        '167': {
          start: {
            line: 322,
            column: 6
          },
          end: {
            line: 322,
            column: 32
          }
        },
        '168': {
          start: {
            line: 323,
            column: 6
          },
          end: {
            line: 323,
            column: 28
          }
        },
        '169': {
          start: {
            line: 324,
            column: 6
          },
          end: {
            line: 324,
            column: 32
          }
        },
        '170': {
          start: {
            line: 325,
            column: 6
          },
          end: {
            line: 328,
            column: 7
          }
        },
        '171': {
          start: {
            line: 326,
            column: 8
          },
          end: {
            line: 326,
            column: 30
          }
        },
        '172': {
          start: {
            line: 327,
            column: 8
          },
          end: {
            line: 327,
            column: 29
          }
        },
        '173': {
          start: {
            line: 330,
            column: 6
          },
          end: {
            line: 330,
            column: 30
          }
        },
        '174': {
          start: {
            line: 333,
            column: 4
          },
          end: {
            line: 333,
            column: 79
          }
        },
        '175': {
          start: {
            line: 334,
            column: 4
          },
          end: {
            line: 336,
            column: 5
          }
        },
        '176': {
          start: {
            line: 335,
            column: 6
          },
          end: {
            line: 335,
            column: 49
          }
        },
        '177': {
          start: {
            line: 337,
            column: 4
          },
          end: {
            line: 337,
            column: 73
          }
        },
        '178': {
          start: {
            line: 338,
            column: 4
          },
          end: {
            line: 338,
            column: 49
          }
        },
        '179': {
          start: {
            line: 339,
            column: 4
          },
          end: {
            line: 339,
            column: 47
          }
        },
        '180': {
          start: {
            line: 340,
            column: 4
          },
          end: {
            line: 340,
            column: 24
          }
        },
        '181': {
          start: {
            line: 342,
            column: 4
          },
          end: {
            line: 344,
            column: 5
          }
        },
        '182': {
          start: {
            line: 343,
            column: 6
          },
          end: {
            line: 343,
            column: 70
          }
        },
        '183': {
          start: {
            line: 345,
            column: 4
          },
          end: {
            line: 345,
            column: 24
          }
        },
        '184': {
          start: {
            line: 348,
            column: 2
          },
          end: {
            line: 350,
            column: 3
          }
        },
        '185': {
          start: {
            line: 349,
            column: 4
          },
          end: {
            line: 349,
            column: 52
          }
        },
        '186': {
          start: {
            line: 353,
            column: 15
          },
          end: {
            line: 353,
            column: 29
          }
        },
        '187': {
          start: {
            line: 354,
            column: 4
          },
          end: {
            line: 364,
            column: 8
          }
        },
        '188': {
          start: {
            line: 358,
            column: 8
          },
          end: {
            line: 363,
            column: 9
          }
        },
        '189': {
          start: {
            line: 359,
            column: 22
          },
          end: {
            line: 359,
            column: 38
          }
        },
        '190': {
          start: {
            line: 360,
            column: 21
          },
          end: {
            line: 360,
            column: 54
          }
        },
        '191': {
          start: {
            line: 361,
            column: 22
          },
          end: {
            line: 361,
            column: 57
          }
        },
        '192': {
          start: {
            line: 362,
            column: 10
          },
          end: {
            line: 362,
            column: 74
          }
        },
        '193': {
          start: {
            line: 365,
            column: 4
          },
          end: {
            line: 365,
            column: 15
          }
        },
        '194': {
          start: {
            line: 369,
            column: 18
          },
          end: {
            line: 369,
            column: 31
          }
        },
        '195': {
          start: {
            line: 372,
            column: 30
          },
          end: {
            line: 372,
            column: 69
          }
        },
        '196': {
          start: {
            line: 373,
            column: 4
          },
          end: {
            line: 380,
            column: 6
          }
        },
        '197': {
          start: {
            line: 374,
            column: 18
          },
          end: {
            line: 374,
            column: 33
          }
        },
        '198': {
          start: {
            line: 375,
            column: 16
          },
          end: {
            line: 375,
            column: 36
          }
        },
        '199': {
          start: {
            line: 376,
            column: 6
          },
          end: {
            line: 379,
            column: 7
          }
        },
        '200': {
          start: {
            line: 377,
            column: 20
          },
          end: {
            line: 377,
            column: 42
          }
        },
        '201': {
          start: {
            line: 378,
            column: 8
          },
          end: {
            line: 378,
            column: 34
          }
        },
        '202': {
          start: {
            line: 381,
            column: 4
          },
          end: {
            line: 381,
            column: 18
          }
        },
        '203': {
          start: {
            line: 384,
            column: 2
          },
          end: {
            line: 384,
            column: 30
          }
        },
        '204': {
          start: {
            line: 387,
            column: 4
          },
          end: {
            line: 389,
            column: 5
          }
        },
        '205': {
          start: {
            line: 388,
            column: 6
          },
          end: {
            line: 388,
            column: 18
          }
        },
        '206': {
          start: {
            line: 391,
            column: 4
          },
          end: {
            line: 391,
            column: 25
          }
        },
        '207': {
          start: {
            line: 392,
            column: 4
          },
          end: {
            line: 392,
            column: 69
          }
        },
        '208': {
          start: {
            line: 393,
            column: 4
          },
          end: {
            line: 393,
            column: 53
          }
        },
        '209': {
          start: {
            line: 394,
            column: 4
          },
          end: {
            line: 394,
            column: 73
          }
        },
        '210': {
          start: {
            line: 395,
            column: 4
          },
          end: {
            line: 395,
            column: 47
          }
        },
        '211': {
          start: {
            line: 396,
            column: 4
          },
          end: {
            line: 396,
            column: 32
          }
        },
        '212': {
          start: {
            line: 397,
            column: 4
          },
          end: {
            line: 397,
            column: 28
          }
        },
        '213': {
          start: {
            line: 400,
            column: 2
          },
          end: {
            line: 400,
            column: 31
          }
        },
        '214': {
          start: {
            line: 402,
            column: 2
          },
          end: {
            line: 409,
            column: 3
          }
        },
        '215': {
          start: {
            line: 403,
            column: 4
          },
          end: {
            line: 408,
            column: 6
          }
        },
        '216': {
          start: {
            line: 411,
            column: 2
          },
          end: {
            line: 415,
            column: 3
          }
        },
        '217': {
          start: {
            line: 412,
            column: 19
          },
          end: {
            line: 412,
            column: 66
          }
        },
        '218': {
          start: {
            line: 413,
            column: 4
          },
          end: {
            line: 413,
            column: 27
          }
        },
        '219': {
          start: {
            line: 414,
            column: 4
          },
          end: {
            line: 414,
            column: 19
          }
        },
        '220': {
          start: {
            line: 417,
            column: 25
          },
          end: {
            line: 417,
            column: 50
          }
        },
        '221': {
          start: {
            line: 419,
            column: 2
          },
          end: {
            line: 425,
            column: 3
          }
        },
        '222': {
          start: {
            line: 420,
            column: 4
          },
          end: {
            line: 422,
            column: 5
          }
        },
        '223': {
          start: {
            line: 421,
            column: 6
          },
          end: {
            line: 421,
            column: 49
          }
        },
        '224': {
          start: {
            line: 424,
            column: 4
          },
          end: {
            line: 424,
            column: 73
          }
        },
        '225': {
          start: {
            line: 427,
            column: 28
          },
          end: {
            line: 427,
            column: 45
          }
        },
        '226': {
          start: {
            line: 428,
            column: 2
          },
          end: {
            line: 439,
            column: 3
          }
        },
        '227': {
          start: {
            line: 429,
            column: 4
          },
          end: {
            line: 429,
            column: 22
          }
        },
        '228': {
          start: {
            line: 431,
            column: 4
          },
          end: {
            line: 436,
            column: 5
          }
        },
        '229': {
          start: {
            line: 432,
            column: 6
          },
          end: {
            line: 432,
            column: 28
          }
        },
        '230': {
          start: {
            line: 433,
            column: 6
          },
          end: {
            line: 433,
            column: 22
          }
        },
        '231': {
          start: {
            line: 434,
            column: 18
          },
          end: {
            line: 434,
            column: 32
          }
        },
        '232': {
          start: {
            line: 435,
            column: 6
          },
          end: {
            line: 435,
            column: 30
          }
        },
        '233': {
          start: {
            line: 437,
            column: 4
          },
          end: {
            line: 437,
            column: 59
          }
        },
        '234': {
          start: {
            line: 438,
            column: 4
          },
          end: {
            line: 438,
            column: 53
          }
        },
        '235': {
          start: {
            line: 442,
            column: 4
          },
          end: {
            line: 506,
            column: 6
          }
        },
        '236': {
          start: {
            line: 443,
            column: 20
          },
          end: {
            line: 443,
            column: 44
          }
        },
        '237': {
          start: {
            line: 445,
            column: 6
          },
          end: {
            line: 447,
            column: 7
          }
        },
        '238': {
          start: {
            line: 446,
            column: 8
          },
          end: {
            line: 446,
            column: 64
          }
        },
        '239': {
          start: {
            line: 449,
            column: 16
          },
          end: {
            line: 449,
            column: 36
          }
        },
        '240': {
          start: {
            line: 452,
            column: 8
          },
          end: {
            line: 452,
            column: 19
          }
        },
        '241': {
          start: {
            line: 455,
            column: 6
          },
          end: {
            line: 464,
            column: 7
          }
        },
        '242': {
          start: {
            line: 456,
            column: 22
          },
          end: {
            line: 460,
            column: 9
          }
        },
        '243': {
          start: {
            line: 461,
            column: 8
          },
          end: {
            line: 461,
            column: 99
          }
        },
        '244': {
          start: {
            line: 462,
            column: 19
          },
          end: {
            line: 462,
            column: 70
          }
        },
        '245': {
          start: {
            line: 463,
            column: 8
          },
          end: {
            line: 463,
            column: 44
          }
        },
        '246': {
          start: {
            line: 466,
            column: 6
          },
          end: {
            line: 468,
            column: 7
          }
        },
        '247': {
          start: {
            line: 467,
            column: 8
          },
          end: {
            line: 467,
            column: 55
          }
        },
        '248': {
          start: {
            line: 470,
            column: 6
          },
          end: {
            line: 472,
            column: 7
          }
        },
        '249': {
          start: {
            line: 471,
            column: 8
          },
          end: {
            line: 471,
            column: 55
          }
        },
        '250': {
          start: {
            line: 474,
            column: 6
          },
          end: {
            line: 476,
            column: 7
          }
        },
        '251': {
          start: {
            line: 475,
            column: 8
          },
          end: {
            line: 475,
            column: 57
          }
        },
        '252': {
          start: {
            line: 478,
            column: 6
          },
          end: {
            line: 478,
            column: 49
          }
        },
        '253': {
          start: {
            line: 480,
            column: 6
          },
          end: {
            line: 484,
            column: 7
          }
        },
        '254': {
          start: {
            line: 481,
            column: 8
          },
          end: {
            line: 481,
            column: 34
          }
        },
        '255': {
          start: {
            line: 482,
            column: 13
          },
          end: {
            line: 484,
            column: 7
          }
        },
        '256': {
          start: {
            line: 483,
            column: 8
          },
          end: {
            line: 483,
            column: 35
          }
        },
        '257': {
          start: {
            line: 486,
            column: 6
          },
          end: {
            line: 488,
            column: 7
          }
        },
        '258': {
          start: {
            line: 487,
            column: 8
          },
          end: {
            line: 487,
            column: 33
          }
        },
        '259': {
          start: {
            line: 490,
            column: 6
          },
          end: {
            line: 492,
            column: 8
          }
        },
        '260': {
          start: {
            line: 491,
            column: 8
          },
          end: {
            line: 491,
            column: 41
          }
        },
        '261': {
          start: {
            line: 494,
            column: 6
          },
          end: {
            line: 503,
            column: 7
          }
        },
        '262': {
          start: {
            line: 495,
            column: 8
          },
          end: {
            line: 495,
            column: 58
          }
        },
        '263': {
          start: {
            line: 497,
            column: 8
          },
          end: {
            line: 502,
            column: 9
          }
        },
        '264': {
          start: {
            line: 499,
            column: 10
          },
          end: {
            line: 501,
            column: 11
          }
        },
        '265': {
          start: {
            line: 500,
            column: 12
          },
          end: {
            line: 500,
            column: 65
          }
        },
        '266': {
          start: {
            line: 505,
            column: 6
          },
          end: {
            line: 505,
            column: 83
          }
        },
        '267': {
          start: {
            line: 509,
            column: 2
          },
          end: {
            line: 509,
            column: 23
          }
        },
        '268': {
          start: {
            line: 511,
            column: 2
          },
          end: {
            line: 516,
            column: 3
          }
        },
        '269': {
          start: {
            line: 512,
            column: 4
          },
          end: {
            line: 512,
            column: 22
          }
        },
        '270': {
          start: {
            line: 513,
            column: 4
          },
          end: {
            line: 513,
            column: 26
          }
        },
        '271': {
          start: {
            line: 514,
            column: 4
          },
          end: {
            line: 514,
            column: 26
          }
        },
        '272': {
          start: {
            line: 515,
            column: 4
          },
          end: {
            line: 515,
            column: 28
          }
        }
      },
      fnMap: {
        '0': {
          name: '(anonymous_0)',
          decl: {
            start: {
              line: 7,
              column: 7
            },
            end: {
              line: 7,
              column: 8
            }
          },
          loc: {
            start: {
              line: 7,
              column: 18
            },
            end: {
              line: 14,
              column: 7
            }
          },
          line: 7
        },
        '1': {
          name: 'isDataView',
          decl: {
            start: {
              line: 19,
              column: 11
            },
            end: {
              line: 19,
              column: 21
            }
          },
          loc: {
            start: {
              line: 19,
              column: 27
            },
            end: {
              line: 21,
              column: 3
            }
          },
          line: 19
        },
        '2': {
          name: '(anonymous_2)',
          decl: {
            start: {
              line: 38,
              column: 6
            },
            end: {
              line: 38,
              column: 7
            }
          },
          loc: {
            start: {
              line: 38,
              column: 20
            },
            end: {
              line: 40,
              column: 7
            }
          },
          line: 38
        },
        '3': {
          name: 'normalizeName',
          decl: {
            start: {
              line: 43,
              column: 11
            },
            end: {
              line: 43,
              column: 24
            }
          },
          loc: {
            start: {
              line: 43,
              column: 31
            },
            end: {
              line: 51,
              column: 3
            }
          },
          line: 43
        },
        '4': {
          name: 'normalizeValue',
          decl: {
            start: {
              line: 53,
              column: 11
            },
            end: {
              line: 53,
              column: 25
            }
          },
          loc: {
            start: {
              line: 53,
              column: 33
            },
            end: {
              line: 58,
              column: 3
            }
          },
          line: 53
        },
        '5': {
          name: 'iteratorFor',
          decl: {
            start: {
              line: 61,
              column: 11
            },
            end: {
              line: 61,
              column: 22
            }
          },
          loc: {
            start: {
              line: 61,
              column: 30
            },
            end: {
              line: 76,
              column: 3
            }
          },
          line: 61
        },
        '6': {
          name: '(anonymous_6)',
          decl: {
            start: {
              line: 63,
              column: 12
            },
            end: {
              line: 63,
              column: 13
            }
          },
          loc: {
            start: {
              line: 63,
              column: 23
            },
            end: {
              line: 66,
              column: 7
            }
          },
          line: 63
        },
        '7': {
          name: '(anonymous_7)',
          decl: {
            start: {
              line: 70,
              column: 34
            },
            end: {
              line: 70,
              column: 35
            }
          },
          loc: {
            start: {
              line: 70,
              column: 45
            },
            end: {
              line: 72,
              column: 7
            }
          },
          line: 70
        },
        '8': {
          name: 'Headers',
          decl: {
            start: {
              line: 78,
              column: 18
            },
            end: {
              line: 78,
              column: 25
            }
          },
          loc: {
            start: {
              line: 78,
              column: 35
            },
            end: {
              line: 94,
              column: 3
            }
          },
          line: 78
        },
        '9': {
          name: '(anonymous_9)',
          decl: {
            start: {
              line: 82,
              column: 22
            },
            end: {
              line: 82,
              column: 23
            }
          },
          loc: {
            start: {
              line: 82,
              column: 44
            },
            end: {
              line: 84,
              column: 7
            }
          },
          line: 82
        },
        '10': {
          name: '(anonymous_10)',
          decl: {
            start: {
              line: 86,
              column: 22
            },
            end: {
              line: 86,
              column: 23
            }
          },
          loc: {
            start: {
              line: 86,
              column: 39
            },
            end: {
              line: 88,
              column: 7
            }
          },
          line: 86
        },
        '11': {
          name: '(anonymous_11)',
          decl: {
            start: {
              line: 90,
              column: 50
            },
            end: {
              line: 90,
              column: 51
            }
          },
          loc: {
            start: {
              line: 90,
              column: 65
            },
            end: {
              line: 92,
              column: 7
            }
          },
          line: 90
        },
        '12': {
          name: '(anonymous_12)',
          decl: {
            start: {
              line: 96,
              column: 29
            },
            end: {
              line: 96,
              column: 30
            }
          },
          loc: {
            start: {
              line: 96,
              column: 51
            },
            end: {
              line: 101,
              column: 3
            }
          },
          line: 96
        },
        '13': {
          name: '(anonymous_13)',
          decl: {
            start: {
              line: 103,
              column: 32
            },
            end: {
              line: 103,
              column: 33
            }
          },
          loc: {
            start: {
              line: 103,
              column: 47
            },
            end: {
              line: 105,
              column: 3
            }
          },
          line: 103
        },
        '14': {
          name: '(anonymous_14)',
          decl: {
            start: {
              line: 107,
              column: 26
            },
            end: {
              line: 107,
              column: 27
            }
          },
          loc: {
            start: {
              line: 107,
              column: 41
            },
            end: {
              line: 110,
              column: 3
            }
          },
          line: 107
        },
        '15': {
          name: '(anonymous_15)',
          decl: {
            start: {
              line: 112,
              column: 26
            },
            end: {
              line: 112,
              column: 27
            }
          },
          loc: {
            start: {
              line: 112,
              column: 41
            },
            end: {
              line: 114,
              column: 3
            }
          },
          line: 112
        },
        '16': {
          name: '(anonymous_16)',
          decl: {
            start: {
              line: 116,
              column: 26
            },
            end: {
              line: 116,
              column: 27
            }
          },
          loc: {
            start: {
              line: 116,
              column: 48
            },
            end: {
              line: 118,
              column: 3
            }
          },
          line: 116
        },
        '17': {
          name: '(anonymous_17)',
          decl: {
            start: {
              line: 120,
              column: 30
            },
            end: {
              line: 120,
              column: 31
            }
          },
          loc: {
            start: {
              line: 120,
              column: 58
            },
            end: {
              line: 126,
              column: 3
            }
          },
          line: 120
        },
        '18': {
          name: '(anonymous_18)',
          decl: {
            start: {
              line: 128,
              column: 27
            },
            end: {
              line: 128,
              column: 28
            }
          },
          loc: {
            start: {
              line: 128,
              column: 38
            },
            end: {
              line: 134,
              column: 3
            }
          },
          line: 128
        },
        '19': {
          name: '(anonymous_19)',
          decl: {
            start: {
              line: 130,
              column: 17
            },
            end: {
              line: 130,
              column: 18
            }
          },
          loc: {
            start: {
              line: 130,
              column: 39
            },
            end: {
              line: 132,
              column: 5
            }
          },
          line: 130
        },
        '20': {
          name: '(anonymous_20)',
          decl: {
            start: {
              line: 136,
              column: 29
            },
            end: {
              line: 136,
              column: 30
            }
          },
          loc: {
            start: {
              line: 136,
              column: 40
            },
            end: {
              line: 142,
              column: 3
            }
          },
          line: 136
        },
        '21': {
          name: '(anonymous_21)',
          decl: {
            start: {
              line: 138,
              column: 17
            },
            end: {
              line: 138,
              column: 18
            }
          },
          loc: {
            start: {
              line: 138,
              column: 33
            },
            end: {
              line: 140,
              column: 5
            }
          },
          line: 138
        },
        '22': {
          name: '(anonymous_22)',
          decl: {
            start: {
              line: 144,
              column: 30
            },
            end: {
              line: 144,
              column: 31
            }
          },
          loc: {
            start: {
              line: 144,
              column: 41
            },
            end: {
              line: 150,
              column: 3
            }
          },
          line: 144
        },
        '23': {
          name: '(anonymous_23)',
          decl: {
            start: {
              line: 146,
              column: 17
            },
            end: {
              line: 146,
              column: 18
            }
          },
          loc: {
            start: {
              line: 146,
              column: 39
            },
            end: {
              line: 148,
              column: 5
            }
          },
          line: 146
        },
        '24': {
          name: 'consumed',
          decl: {
            start: {
              line: 156,
              column: 11
            },
            end: {
              line: 156,
              column: 19
            }
          },
          loc: {
            start: {
              line: 156,
              column: 26
            },
            end: {
              line: 161,
              column: 3
            }
          },
          line: 156
        },
        '25': {
          name: 'fileReaderReady',
          decl: {
            start: {
              line: 163,
              column: 11
            },
            end: {
              line: 163,
              column: 26
            }
          },
          loc: {
            start: {
              line: 163,
              column: 35
            },
            end: {
              line: 172,
              column: 3
            }
          },
          line: 163
        },
        '26': {
          name: '(anonymous_26)',
          decl: {
            start: {
              line: 164,
              column: 23
            },
            end: {
              line: 164,
              column: 24
            }
          },
          loc: {
            start: {
              line: 164,
              column: 49
            },
            end: {
              line: 171,
              column: 5
            }
          },
          line: 164
        },
        '27': {
          name: '(anonymous_27)',
          decl: {
            start: {
              line: 165,
              column: 22
            },
            end: {
              line: 165,
              column: 23
            }
          },
          loc: {
            start: {
              line: 165,
              column: 33
            },
            end: {
              line: 167,
              column: 7
            }
          },
          line: 165
        },
        '28': {
          name: '(anonymous_28)',
          decl: {
            start: {
              line: 168,
              column: 23
            },
            end: {
              line: 168,
              column: 24
            }
          },
          loc: {
            start: {
              line: 168,
              column: 34
            },
            end: {
              line: 170,
              column: 7
            }
          },
          line: 168
        },
        '29': {
          name: 'readBlobAsArrayBuffer',
          decl: {
            start: {
              line: 174,
              column: 11
            },
            end: {
              line: 174,
              column: 32
            }
          },
          loc: {
            start: {
              line: 174,
              column: 39
            },
            end: {
              line: 179,
              column: 3
            }
          },
          line: 174
        },
        '30': {
          name: 'readBlobAsText',
          decl: {
            start: {
              line: 181,
              column: 11
            },
            end: {
              line: 181,
              column: 25
            }
          },
          loc: {
            start: {
              line: 181,
              column: 32
            },
            end: {
              line: 186,
              column: 3
            }
          },
          line: 181
        },
        '31': {
          name: 'readArrayBufferAsText',
          decl: {
            start: {
              line: 188,
              column: 11
            },
            end: {
              line: 188,
              column: 32
            }
          },
          loc: {
            start: {
              line: 188,
              column: 38
            },
            end: {
              line: 196,
              column: 3
            }
          },
          line: 188
        },
        '32': {
          name: 'bufferClone',
          decl: {
            start: {
              line: 198,
              column: 11
            },
            end: {
              line: 198,
              column: 22
            }
          },
          loc: {
            start: {
              line: 198,
              column: 28
            },
            end: {
              line: 206,
              column: 3
            }
          },
          line: 198
        },
        '33': {
          name: 'Body',
          decl: {
            start: {
              line: 208,
              column: 11
            },
            end: {
              line: 208,
              column: 15
            }
          },
          loc: {
            start: {
              line: 208,
              column: 18
            },
            end: {
              line: 299,
              column: 3
            }
          },
          line: 208
        },
        '34': {
          name: '(anonymous_34)',
          decl: {
            start: {
              line: 211,
              column: 21
            },
            end: {
              line: 211,
              column: 22
            }
          },
          loc: {
            start: {
              line: 211,
              column: 36
            },
            end: {
              line: 242,
              column: 5
            }
          },
          line: 211
        },
        '35': {
          name: '(anonymous_35)',
          decl: {
            start: {
              line: 245,
              column: 18
            },
            end: {
              line: 245,
              column: 19
            }
          },
          loc: {
            start: {
              line: 245,
              column: 29
            },
            end: {
              line: 260,
              column: 7
            }
          },
          line: 245
        },
        '36': {
          name: '(anonymous_36)',
          decl: {
            start: {
              line: 262,
              column: 25
            },
            end: {
              line: 262,
              column: 26
            }
          },
          loc: {
            start: {
              line: 262,
              column: 36
            },
            end: {
              line: 268,
              column: 7
            }
          },
          line: 262
        },
        '37': {
          name: '(anonymous_37)',
          decl: {
            start: {
              line: 271,
              column: 16
            },
            end: {
              line: 271,
              column: 17
            }
          },
          loc: {
            start: {
              line: 271,
              column: 27
            },
            end: {
              line: 286,
              column: 5
            }
          },
          line: 271
        },
        '38': {
          name: '(anonymous_38)',
          decl: {
            start: {
              line: 289,
              column: 22
            },
            end: {
              line: 289,
              column: 23
            }
          },
          loc: {
            start: {
              line: 289,
              column: 33
            },
            end: {
              line: 291,
              column: 7
            }
          },
          line: 289
        },
        '39': {
          name: '(anonymous_39)',
          decl: {
            start: {
              line: 294,
              column: 16
            },
            end: {
              line: 294,
              column: 17
            }
          },
          loc: {
            start: {
              line: 294,
              column: 27
            },
            end: {
              line: 296,
              column: 5
            }
          },
          line: 294
        },
        '40': {
          name: 'normalizeMethod',
          decl: {
            start: {
              line: 304,
              column: 11
            },
            end: {
              line: 304,
              column: 26
            }
          },
          loc: {
            start: {
              line: 304,
              column: 35
            },
            end: {
              line: 307,
              column: 3
            }
          },
          line: 304
        },
        '41': {
          name: 'Request',
          decl: {
            start: {
              line: 309,
              column: 18
            },
            end: {
              line: 309,
              column: 25
            }
          },
          loc: {
            start: {
              line: 309,
              column: 42
            },
            end: {
              line: 346,
              column: 3
            }
          },
          line: 309
        },
        '42': {
          name: '(anonymous_42)',
          decl: {
            start: {
              line: 348,
              column: 28
            },
            end: {
              line: 348,
              column: 29
            }
          },
          loc: {
            start: {
              line: 348,
              column: 39
            },
            end: {
              line: 350,
              column: 3
            }
          },
          line: 348
        },
        '43': {
          name: 'decode',
          decl: {
            start: {
              line: 352,
              column: 11
            },
            end: {
              line: 352,
              column: 17
            }
          },
          loc: {
            start: {
              line: 352,
              column: 24
            },
            end: {
              line: 366,
              column: 3
            }
          },
          line: 352
        },
        '44': {
          name: '(anonymous_44)',
          decl: {
            start: {
              line: 357,
              column: 15
            },
            end: {
              line: 357,
              column: 16
            }
          },
          loc: {
            start: {
              line: 357,
              column: 31
            },
            end: {
              line: 364,
              column: 7
            }
          },
          line: 357
        },
        '45': {
          name: 'parseHeaders',
          decl: {
            start: {
              line: 368,
              column: 11
            },
            end: {
              line: 368,
              column: 23
            }
          },
          loc: {
            start: {
              line: 368,
              column: 36
            },
            end: {
              line: 382,
              column: 3
            }
          },
          line: 368
        },
        '46': {
          name: '(anonymous_46)',
          decl: {
            start: {
              line: 373,
              column: 47
            },
            end: {
              line: 373,
              column: 48
            }
          },
          loc: {
            start: {
              line: 373,
              column: 62
            },
            end: {
              line: 380,
              column: 5
            }
          },
          line: 373
        },
        '47': {
          name: 'Response',
          decl: {
            start: {
              line: 386,
              column: 18
            },
            end: {
              line: 386,
              column: 26
            }
          },
          loc: {
            start: {
              line: 386,
              column: 46
            },
            end: {
              line: 398,
              column: 3
            }
          },
          line: 386
        },
        '48': {
          name: '(anonymous_48)',
          decl: {
            start: {
              line: 402,
              column: 29
            },
            end: {
              line: 402,
              column: 30
            }
          },
          loc: {
            start: {
              line: 402,
              column: 40
            },
            end: {
              line: 409,
              column: 3
            }
          },
          line: 402
        },
        '49': {
          name: '(anonymous_49)',
          decl: {
            start: {
              line: 411,
              column: 19
            },
            end: {
              line: 411,
              column: 20
            }
          },
          loc: {
            start: {
              line: 411,
              column: 30
            },
            end: {
              line: 415,
              column: 3
            }
          },
          line: 411
        },
        '50': {
          name: '(anonymous_50)',
          decl: {
            start: {
              line: 419,
              column: 22
            },
            end: {
              line: 419,
              column: 23
            }
          },
          loc: {
            start: {
              line: 419,
              column: 44
            },
            end: {
              line: 425,
              column: 3
            }
          },
          line: 419
        },
        '51': {
          name: '(anonymous_51)',
          decl: {
            start: {
              line: 431,
              column: 19
            },
            end: {
              line: 431,
              column: 20
            }
          },
          loc: {
            start: {
              line: 431,
              column: 43
            },
            end: {
              line: 436,
              column: 5
            }
          },
          line: 431
        },
        '52': {
          name: 'fetch',
          decl: {
            start: {
              line: 441,
              column: 18
            },
            end: {
              line: 441,
              column: 23
            }
          },
          loc: {
            start: {
              line: 441,
              column: 37
            },
            end: {
              line: 507,
              column: 3
            }
          },
          line: 441
        },
        '53': {
          name: '(anonymous_53)',
          decl: {
            start: {
              line: 442,
              column: 23
            },
            end: {
              line: 442,
              column: 24
            }
          },
          loc: {
            start: {
              line: 442,
              column: 49
            },
            end: {
              line: 506,
              column: 5
            }
          },
          line: 442
        },
        '54': {
          name: 'abortXhr',
          decl: {
            start: {
              line: 451,
              column: 15
            },
            end: {
              line: 451,
              column: 23
            }
          },
          loc: {
            start: {
              line: 451,
              column: 26
            },
            end: {
              line: 453,
              column: 7
            }
          },
          line: 451
        },
        '55': {
          name: '(anonymous_55)',
          decl: {
            start: {
              line: 455,
              column: 19
            },
            end: {
              line: 455,
              column: 20
            }
          },
          loc: {
            start: {
              line: 455,
              column: 30
            },
            end: {
              line: 464,
              column: 7
            }
          },
          line: 455
        },
        '56': {
          name: '(anonymous_56)',
          decl: {
            start: {
              line: 466,
              column: 20
            },
            end: {
              line: 466,
              column: 21
            }
          },
          loc: {
            start: {
              line: 466,
              column: 31
            },
            end: {
              line: 468,
              column: 7
            }
          },
          line: 466
        },
        '57': {
          name: '(anonymous_57)',
          decl: {
            start: {
              line: 470,
              column: 22
            },
            end: {
              line: 470,
              column: 23
            }
          },
          loc: {
            start: {
              line: 470,
              column: 33
            },
            end: {
              line: 472,
              column: 7
            }
          },
          line: 470
        },
        '58': {
          name: '(anonymous_58)',
          decl: {
            start: {
              line: 474,
              column: 20
            },
            end: {
              line: 474,
              column: 21
            }
          },
          loc: {
            start: {
              line: 474,
              column: 31
            },
            end: {
              line: 476,
              column: 7
            }
          },
          line: 474
        },
        '59': {
          name: '(anonymous_59)',
          decl: {
            start: {
              line: 490,
              column: 30
            },
            end: {
              line: 490,
              column: 31
            }
          },
          loc: {
            start: {
              line: 490,
              column: 52
            },
            end: {
              line: 492,
              column: 7
            }
          },
          line: 490
        },
        '60': {
          name: '(anonymous_60)',
          decl: {
            start: {
              line: 497,
              column: 33
            },
            end: {
              line: 497,
              column: 34
            }
          },
          loc: {
            start: {
              line: 497,
              column: 44
            },
            end: {
              line: 502,
              column: 9
            }
          },
          line: 497
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 3,
              column: 14
            },
            end: {
              line: 3,
              column: 54
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 3,
              column: 14
            },
            end: {
              line: 3,
              column: 30
            }
          }, {
            start: {
              line: 3,
              column: 34
            },
            end: {
              line: 3,
              column: 54
            }
          }],
          line: 3
        },
        '1': {
          loc: {
            start: {
              line: 5,
              column: 6
            },
            end: {
              line: 14,
              column: 10
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 5,
              column: 6
            },
            end: {
              line: 5,
              column: 26
            }
          }, {
            start: {
              line: 6,
              column: 6
            },
            end: {
              line: 6,
              column: 20
            }
          }, {
            start: {
              line: 7,
              column: 6
            },
            end: {
              line: 14,
              column: 10
            }
          }],
          line: 5
        },
        '2': {
          loc: {
            start: {
              line: 20,
              column: 11
            },
            end: {
              line: 20,
              column: 55
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 20,
              column: 11
            },
            end: {
              line: 20,
              column: 14
            }
          }, {
            start: {
              line: 20,
              column: 18
            },
            end: {
              line: 20,
              column: 55
            }
          }],
          line: 20
        },
        '3': {
          loc: {
            start: {
              line: 23,
              column: 2
            },
            end: {
              line: 41,
              column: 3
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 23,
              column: 2
            },
            end: {
              line: 41,
              column: 3
            }
          }, {
            start: {
              line: 23,
              column: 2
            },
            end: {
              line: 41,
              column: 3
            }
          }],
          line: 23
        },
        '4': {
          loc: {
            start: {
              line: 37,
              column: 6
            },
            end: {
              line: 40,
              column: 7
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 37,
              column: 6
            },
            end: {
              line: 37,
              column: 24
            }
          }, {
            start: {
              line: 38,
              column: 6
            },
            end: {
              line: 40,
              column: 7
            }
          }],
          line: 37
        },
        '5': {
          loc: {
            start: {
              line: 39,
              column: 15
            },
            end: {
              line: 39,
              column: 83
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 39,
              column: 15
            },
            end: {
              line: 39,
              column: 18
            }
          }, {
            start: {
              line: 39,
              column: 22
            },
            end: {
              line: 39,
              column: 83
            }
          }],
          line: 39
        },
        '6': {
          loc: {
            start: {
              line: 44,
              column: 4
            },
            end: {
              line: 46,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 44,
              column: 4
            },
            end: {
              line: 46,
              column: 5
            }
          }, {
            start: {
              line: 44,
              column: 4
            },
            end: {
              line: 46,
              column: 5
            }
          }],
          line: 44
        },
        '7': {
          loc: {
            start: {
              line: 47,
              column: 4
            },
            end: {
              line: 49,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 47,
              column: 4
            },
            end: {
              line: 49,
              column: 5
            }
          }, {
            start: {
              line: 47,
              column: 4
            },
            end: {
              line: 49,
              column: 5
            }
          }],
          line: 47
        },
        '8': {
          loc: {
            start: {
              line: 54,
              column: 4
            },
            end: {
              line: 56,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 54,
              column: 4
            },
            end: {
              line: 56,
              column: 5
            }
          }, {
            start: {
              line: 54,
              column: 4
            },
            end: {
              line: 56,
              column: 5
            }
          }],
          line: 54
        },
        '9': {
          loc: {
            start: {
              line: 69,
              column: 4
            },
            end: {
              line: 73,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 69,
              column: 4
            },
            end: {
              line: 73,
              column: 5
            }
          }, {
            start: {
              line: 69,
              column: 4
            },
            end: {
              line: 73,
              column: 5
            }
          }],
          line: 69
        },
        '10': {
          loc: {
            start: {
              line: 81,
              column: 4
            },
            end: {
              line: 93,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 81,
              column: 4
            },
            end: {
              line: 93,
              column: 5
            }
          }, {
            start: {
              line: 81,
              column: 4
            },
            end: {
              line: 93,
              column: 5
            }
          }],
          line: 81
        },
        '11': {
          loc: {
            start: {
              line: 85,
              column: 11
            },
            end: {
              line: 93,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 85,
              column: 11
            },
            end: {
              line: 93,
              column: 5
            }
          }, {
            start: {
              line: 85,
              column: 11
            },
            end: {
              line: 93,
              column: 5
            }
          }],
          line: 85
        },
        '12': {
          loc: {
            start: {
              line: 89,
              column: 11
            },
            end: {
              line: 93,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 89,
              column: 11
            },
            end: {
              line: 93,
              column: 5
            }
          }, {
            start: {
              line: 89,
              column: 11
            },
            end: {
              line: 93,
              column: 5
            }
          }],
          line: 89
        },
        '13': {
          loc: {
            start: {
              line: 100,
              column: 21
            },
            end: {
              line: 100,
              column: 63
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 100,
              column: 32
            },
            end: {
              line: 100,
              column: 55
            }
          }, {
            start: {
              line: 100,
              column: 58
            },
            end: {
              line: 100,
              column: 63
            }
          }],
          line: 100
        },
        '14': {
          loc: {
            start: {
              line: 109,
              column: 11
            },
            end: {
              line: 109,
              column: 49
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 109,
              column: 28
            },
            end: {
              line: 109,
              column: 42
            }
          }, {
            start: {
              line: 109,
              column: 45
            },
            end: {
              line: 109,
              column: 49
            }
          }],
          line: 109
        },
        '15': {
          loc: {
            start: {
              line: 122,
              column: 6
            },
            end: {
              line: 124,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 122,
              column: 6
            },
            end: {
              line: 124,
              column: 7
            }
          }, {
            start: {
              line: 122,
              column: 6
            },
            end: {
              line: 124,
              column: 7
            }
          }],
          line: 122
        },
        '16': {
          loc: {
            start: {
              line: 152,
              column: 2
            },
            end: {
              line: 154,
              column: 3
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 152,
              column: 2
            },
            end: {
              line: 154,
              column: 3
            }
          }, {
            start: {
              line: 152,
              column: 2
            },
            end: {
              line: 154,
              column: 3
            }
          }],
          line: 152
        },
        '17': {
          loc: {
            start: {
              line: 157,
              column: 4
            },
            end: {
              line: 159,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 157,
              column: 4
            },
            end: {
              line: 159,
              column: 5
            }
          }, {
            start: {
              line: 157,
              column: 4
            },
            end: {
              line: 159,
              column: 5
            }
          }],
          line: 157
        },
        '18': {
          loc: {
            start: {
              line: 199,
              column: 4
            },
            end: {
              line: 205,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 199,
              column: 4
            },
            end: {
              line: 205,
              column: 5
            }
          }, {
            start: {
              line: 199,
              column: 4
            },
            end: {
              line: 205,
              column: 5
            }
          }],
          line: 199
        },
        '19': {
          loc: {
            start: {
              line: 213,
              column: 6
            },
            end: {
              line: 231,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 213,
              column: 6
            },
            end: {
              line: 231,
              column: 7
            }
          }, {
            start: {
              line: 213,
              column: 6
            },
            end: {
              line: 231,
              column: 7
            }
          }],
          line: 213
        },
        '20': {
          loc: {
            start: {
              line: 215,
              column: 13
            },
            end: {
              line: 231,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 215,
              column: 13
            },
            end: {
              line: 231,
              column: 7
            }
          }, {
            start: {
              line: 215,
              column: 13
            },
            end: {
              line: 231,
              column: 7
            }
          }],
          line: 215
        },
        '21': {
          loc: {
            start: {
              line: 217,
              column: 13
            },
            end: {
              line: 231,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 217,
              column: 13
            },
            end: {
              line: 231,
              column: 7
            }
          }, {
            start: {
              line: 217,
              column: 13
            },
            end: {
              line: 231,
              column: 7
            }
          }],
          line: 217
        },
        '22': {
          loc: {
            start: {
              line: 217,
              column: 17
            },
            end: {
              line: 217,
              column: 67
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 217,
              column: 17
            },
            end: {
              line: 217,
              column: 29
            }
          }, {
            start: {
              line: 217,
              column: 33
            },
            end: {
              line: 217,
              column: 67
            }
          }],
          line: 217
        },
        '23': {
          loc: {
            start: {
              line: 219,
              column: 13
            },
            end: {
              line: 231,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 219,
              column: 13
            },
            end: {
              line: 231,
              column: 7
            }
          }, {
            start: {
              line: 219,
              column: 13
            },
            end: {
              line: 231,
              column: 7
            }
          }],
          line: 219
        },
        '24': {
          loc: {
            start: {
              line: 219,
              column: 17
            },
            end: {
              line: 219,
              column: 75
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 219,
              column: 17
            },
            end: {
              line: 219,
              column: 33
            }
          }, {
            start: {
              line: 219,
              column: 37
            },
            end: {
              line: 219,
              column: 75
            }
          }],
          line: 219
        },
        '25': {
          loc: {
            start: {
              line: 221,
              column: 13
            },
            end: {
              line: 231,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 221,
              column: 13
            },
            end: {
              line: 231,
              column: 7
            }
          }, {
            start: {
              line: 221,
              column: 13
            },
            end: {
              line: 231,
              column: 7
            }
          }],
          line: 221
        },
        '26': {
          loc: {
            start: {
              line: 221,
              column: 17
            },
            end: {
              line: 221,
              column: 86
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 221,
              column: 17
            },
            end: {
              line: 221,
              column: 37
            }
          }, {
            start: {
              line: 221,
              column: 41
            },
            end: {
              line: 221,
              column: 86
            }
          }],
          line: 221
        },
        '27': {
          loc: {
            start: {
              line: 223,
              column: 13
            },
            end: {
              line: 231,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 223,
              column: 13
            },
            end: {
              line: 231,
              column: 7
            }
          }, {
            start: {
              line: 223,
              column: 13
            },
            end: {
              line: 231,
              column: 7
            }
          }],
          line: 223
        },
        '28': {
          loc: {
            start: {
              line: 223,
              column: 17
            },
            end: {
              line: 223,
              column: 72
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 223,
              column: 17
            },
            end: {
              line: 223,
              column: 36
            }
          }, {
            start: {
              line: 223,
              column: 40
            },
            end: {
              line: 223,
              column: 52
            }
          }, {
            start: {
              line: 223,
              column: 56
            },
            end: {
              line: 223,
              column: 72
            }
          }],
          line: 223
        },
        '29': {
          loc: {
            start: {
              line: 227,
              column: 13
            },
            end: {
              line: 231,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 227,
              column: 13
            },
            end: {
              line: 231,
              column: 7
            }
          }, {
            start: {
              line: 227,
              column: 13
            },
            end: {
              line: 231,
              column: 7
            }
          }],
          line: 227
        },
        '30': {
          loc: {
            start: {
              line: 227,
              column: 17
            },
            end: {
              line: 227,
              column: 110
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 227,
              column: 17
            },
            end: {
              line: 227,
              column: 36
            }
          }, {
            start: {
              line: 227,
              column: 41
            },
            end: {
              line: 227,
              column: 82
            }
          }, {
            start: {
              line: 227,
              column: 86
            },
            end: {
              line: 227,
              column: 109
            }
          }],
          line: 227
        },
        '31': {
          loc: {
            start: {
              line: 233,
              column: 6
            },
            end: {
              line: 241,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 233,
              column: 6
            },
            end: {
              line: 241,
              column: 7
            }
          }, {
            start: {
              line: 233,
              column: 6
            },
            end: {
              line: 241,
              column: 7
            }
          }],
          line: 233
        },
        '32': {
          loc: {
            start: {
              line: 234,
              column: 8
            },
            end: {
              line: 240,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 234,
              column: 8
            },
            end: {
              line: 240,
              column: 9
            }
          }, {
            start: {
              line: 234,
              column: 8
            },
            end: {
              line: 240,
              column: 9
            }
          }],
          line: 234
        },
        '33': {
          loc: {
            start: {
              line: 236,
              column: 15
            },
            end: {
              line: 240,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 236,
              column: 15
            },
            end: {
              line: 240,
              column: 9
            }
          }, {
            start: {
              line: 236,
              column: 15
            },
            end: {
              line: 240,
              column: 9
            }
          }],
          line: 236
        },
        '34': {
          loc: {
            start: {
              line: 236,
              column: 19
            },
            end: {
              line: 236,
              column: 56
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 236,
              column: 19
            },
            end: {
              line: 236,
              column: 33
            }
          }, {
            start: {
              line: 236,
              column: 37
            },
            end: {
              line: 236,
              column: 56
            }
          }],
          line: 236
        },
        '35': {
          loc: {
            start: {
              line: 238,
              column: 15
            },
            end: {
              line: 240,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 238,
              column: 15
            },
            end: {
              line: 240,
              column: 9
            }
          }, {
            start: {
              line: 238,
              column: 15
            },
            end: {
              line: 240,
              column: 9
            }
          }],
          line: 238
        },
        '36': {
          loc: {
            start: {
              line: 238,
              column: 19
            },
            end: {
              line: 238,
              column: 88
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 238,
              column: 19
            },
            end: {
              line: 238,
              column: 39
            }
          }, {
            start: {
              line: 238,
              column: 43
            },
            end: {
              line: 238,
              column: 88
            }
          }],
          line: 238
        },
        '37': {
          loc: {
            start: {
              line: 244,
              column: 4
            },
            end: {
              line: 269,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 244,
              column: 4
            },
            end: {
              line: 269,
              column: 5
            }
          }, {
            start: {
              line: 244,
              column: 4
            },
            end: {
              line: 269,
              column: 5
            }
          }],
          line: 244
        },
        '38': {
          loc: {
            start: {
              line: 247,
              column: 8
            },
            end: {
              line: 249,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 247,
              column: 8
            },
            end: {
              line: 249,
              column: 9
            }
          }, {
            start: {
              line: 247,
              column: 8
            },
            end: {
              line: 249,
              column: 9
            }
          }],
          line: 247
        },
        '39': {
          loc: {
            start: {
              line: 251,
              column: 8
            },
            end: {
              line: 259,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 251,
              column: 8
            },
            end: {
              line: 259,
              column: 9
            }
          }, {
            start: {
              line: 251,
              column: 8
            },
            end: {
              line: 259,
              column: 9
            }
          }],
          line: 251
        },
        '40': {
          loc: {
            start: {
              line: 253,
              column: 15
            },
            end: {
              line: 259,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 253,
              column: 15
            },
            end: {
              line: 259,
              column: 9
            }
          }, {
            start: {
              line: 253,
              column: 15
            },
            end: {
              line: 259,
              column: 9
            }
          }],
          line: 253
        },
        '41': {
          loc: {
            start: {
              line: 255,
              column: 15
            },
            end: {
              line: 259,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 255,
              column: 15
            },
            end: {
              line: 259,
              column: 9
            }
          }, {
            start: {
              line: 255,
              column: 15
            },
            end: {
              line: 259,
              column: 9
            }
          }],
          line: 255
        },
        '42': {
          loc: {
            start: {
              line: 263,
              column: 8
            },
            end: {
              line: 267,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 263,
              column: 8
            },
            end: {
              line: 267,
              column: 9
            }
          }, {
            start: {
              line: 263,
              column: 8
            },
            end: {
              line: 267,
              column: 9
            }
          }],
          line: 263
        },
        '43': {
          loc: {
            start: {
              line: 264,
              column: 17
            },
            end: {
              line: 264,
              column: 73
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 264,
              column: 17
            },
            end: {
              line: 264,
              column: 31
            }
          }, {
            start: {
              line: 264,
              column: 35
            },
            end: {
              line: 264,
              column: 73
            }
          }],
          line: 264
        },
        '44': {
          loc: {
            start: {
              line: 273,
              column: 6
            },
            end: {
              line: 275,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 273,
              column: 6
            },
            end: {
              line: 275,
              column: 7
            }
          }, {
            start: {
              line: 273,
              column: 6
            },
            end: {
              line: 275,
              column: 7
            }
          }],
          line: 273
        },
        '45': {
          loc: {
            start: {
              line: 277,
              column: 6
            },
            end: {
              line: 285,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 277,
              column: 6
            },
            end: {
              line: 285,
              column: 7
            }
          }, {
            start: {
              line: 277,
              column: 6
            },
            end: {
              line: 285,
              column: 7
            }
          }],
          line: 277
        },
        '46': {
          loc: {
            start: {
              line: 279,
              column: 13
            },
            end: {
              line: 285,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 279,
              column: 13
            },
            end: {
              line: 285,
              column: 7
            }
          }, {
            start: {
              line: 279,
              column: 13
            },
            end: {
              line: 285,
              column: 7
            }
          }],
          line: 279
        },
        '47': {
          loc: {
            start: {
              line: 281,
              column: 13
            },
            end: {
              line: 285,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 281,
              column: 13
            },
            end: {
              line: 285,
              column: 7
            }
          }, {
            start: {
              line: 281,
              column: 13
            },
            end: {
              line: 285,
              column: 7
            }
          }],
          line: 281
        },
        '48': {
          loc: {
            start: {
              line: 288,
              column: 4
            },
            end: {
              line: 292,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 288,
              column: 4
            },
            end: {
              line: 292,
              column: 5
            }
          }, {
            start: {
              line: 288,
              column: 4
            },
            end: {
              line: 292,
              column: 5
            }
          }],
          line: 288
        },
        '49': {
          loc: {
            start: {
              line: 306,
              column: 11
            },
            end: {
              line: 306,
              column: 59
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 306,
              column: 43
            },
            end: {
              line: 306,
              column: 50
            }
          }, {
            start: {
              line: 306,
              column: 53
            },
            end: {
              line: 306,
              column: 59
            }
          }],
          line: 306
        },
        '50': {
          loc: {
            start: {
              line: 310,
              column: 14
            },
            end: {
              line: 310,
              column: 27
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 310,
              column: 14
            },
            end: {
              line: 310,
              column: 21
            }
          }, {
            start: {
              line: 310,
              column: 25
            },
            end: {
              line: 310,
              column: 27
            }
          }],
          line: 310
        },
        '51': {
          loc: {
            start: {
              line: 313,
              column: 4
            },
            end: {
              line: 331,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 313,
              column: 4
            },
            end: {
              line: 331,
              column: 5
            }
          }, {
            start: {
              line: 313,
              column: 4
            },
            end: {
              line: 331,
              column: 5
            }
          }],
          line: 313
        },
        '52': {
          loc: {
            start: {
              line: 314,
              column: 6
            },
            end: {
              line: 316,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 314,
              column: 6
            },
            end: {
              line: 316,
              column: 7
            }
          }, {
            start: {
              line: 314,
              column: 6
            },
            end: {
              line: 316,
              column: 7
            }
          }],
          line: 314
        },
        '53': {
          loc: {
            start: {
              line: 319,
              column: 6
            },
            end: {
              line: 321,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 319,
              column: 6
            },
            end: {
              line: 321,
              column: 7
            }
          }, {
            start: {
              line: 319,
              column: 6
            },
            end: {
              line: 321,
              column: 7
            }
          }],
          line: 319
        },
        '54': {
          loc: {
            start: {
              line: 325,
              column: 6
            },
            end: {
              line: 328,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 325,
              column: 6
            },
            end: {
              line: 328,
              column: 7
            }
          }, {
            start: {
              line: 325,
              column: 6
            },
            end: {
              line: 328,
              column: 7
            }
          }],
          line: 325
        },
        '55': {
          loc: {
            start: {
              line: 325,
              column: 10
            },
            end: {
              line: 325,
              column: 42
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 325,
              column: 10
            },
            end: {
              line: 325,
              column: 15
            }
          }, {
            start: {
              line: 325,
              column: 19
            },
            end: {
              line: 325,
              column: 42
            }
          }],
          line: 325
        },
        '56': {
          loc: {
            start: {
              line: 333,
              column: 23
            },
            end: {
              line: 333,
              column: 79
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 333,
              column: 23
            },
            end: {
              line: 333,
              column: 42
            }
          }, {
            start: {
              line: 333,
              column: 46
            },
            end: {
              line: 333,
              column: 62
            }
          }, {
            start: {
              line: 333,
              column: 66
            },
            end: {
              line: 333,
              column: 79
            }
          }],
          line: 333
        },
        '57': {
          loc: {
            start: {
              line: 334,
              column: 4
            },
            end: {
              line: 336,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 334,
              column: 4
            },
            end: {
              line: 336,
              column: 5
            }
          }, {
            start: {
              line: 334,
              column: 4
            },
            end: {
              line: 336,
              column: 5
            }
          }],
          line: 334
        },
        '58': {
          loc: {
            start: {
              line: 334,
              column: 8
            },
            end: {
              line: 334,
              column: 40
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 334,
              column: 8
            },
            end: {
              line: 334,
              column: 23
            }
          }, {
            start: {
              line: 334,
              column: 27
            },
            end: {
              line: 334,
              column: 40
            }
          }],
          line: 334
        },
        '59': {
          loc: {
            start: {
              line: 337,
              column: 34
            },
            end: {
              line: 337,
              column: 72
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 337,
              column: 34
            },
            end: {
              line: 337,
              column: 48
            }
          }, {
            start: {
              line: 337,
              column: 52
            },
            end: {
              line: 337,
              column: 63
            }
          }, {
            start: {
              line: 337,
              column: 67
            },
            end: {
              line: 337,
              column: 72
            }
          }],
          line: 337
        },
        '60': {
          loc: {
            start: {
              line: 338,
              column: 16
            },
            end: {
              line: 338,
              column: 49
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 338,
              column: 16
            },
            end: {
              line: 338,
              column: 28
            }
          }, {
            start: {
              line: 338,
              column: 32
            },
            end: {
              line: 338,
              column: 41
            }
          }, {
            start: {
              line: 338,
              column: 45
            },
            end: {
              line: 338,
              column: 49
            }
          }],
          line: 338
        },
        '61': {
          loc: {
            start: {
              line: 339,
              column: 18
            },
            end: {
              line: 339,
              column: 47
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 339,
              column: 18
            },
            end: {
              line: 339,
              column: 32
            }
          }, {
            start: {
              line: 339,
              column: 36
            },
            end: {
              line: 339,
              column: 47
            }
          }],
          line: 339
        },
        '62': {
          loc: {
            start: {
              line: 342,
              column: 4
            },
            end: {
              line: 344,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 342,
              column: 4
            },
            end: {
              line: 344,
              column: 5
            }
          }, {
            start: {
              line: 342,
              column: 4
            },
            end: {
              line: 344,
              column: 5
            }
          }],
          line: 342
        },
        '63': {
          loc: {
            start: {
              line: 342,
              column: 8
            },
            end: {
              line: 342,
              column: 65
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 342,
              column: 9
            },
            end: {
              line: 342,
              column: 30
            }
          }, {
            start: {
              line: 342,
              column: 34
            },
            end: {
              line: 342,
              column: 56
            }
          }, {
            start: {
              line: 342,
              column: 61
            },
            end: {
              line: 342,
              column: 65
            }
          }],
          line: 342
        },
        '64': {
          loc: {
            start: {
              line: 358,
              column: 8
            },
            end: {
              line: 363,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 358,
              column: 8
            },
            end: {
              line: 363,
              column: 9
            }
          }, {
            start: {
              line: 358,
              column: 8
            },
            end: {
              line: 363,
              column: 9
            }
          }],
          line: 358
        },
        '65': {
          loc: {
            start: {
              line: 376,
              column: 6
            },
            end: {
              line: 379,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 376,
              column: 6
            },
            end: {
              line: 379,
              column: 7
            }
          }, {
            start: {
              line: 376,
              column: 6
            },
            end: {
              line: 379,
              column: 7
            }
          }],
          line: 376
        },
        '66': {
          loc: {
            start: {
              line: 387,
              column: 4
            },
            end: {
              line: 389,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 387,
              column: 4
            },
            end: {
              line: 389,
              column: 5
            }
          }, {
            start: {
              line: 387,
              column: 4
            },
            end: {
              line: 389,
              column: 5
            }
          }],
          line: 387
        },
        '67': {
          loc: {
            start: {
              line: 392,
              column: 18
            },
            end: {
              line: 392,
              column: 69
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 392,
              column: 49
            },
            end: {
              line: 392,
              column: 52
            }
          }, {
            start: {
              line: 392,
              column: 55
            },
            end: {
              line: 392,
              column: 69
            }
          }],
          line: 392
        },
        '68': {
          loc: {
            start: {
              line: 393,
              column: 14
            },
            end: {
              line: 393,
              column: 53
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 393,
              column: 14
            },
            end: {
              line: 393,
              column: 32
            }
          }, {
            start: {
              line: 393,
              column: 36
            },
            end: {
              line: 393,
              column: 53
            }
          }],
          line: 393
        },
        '69': {
          loc: {
            start: {
              line: 394,
              column: 22
            },
            end: {
              line: 394,
              column: 73
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 394,
              column: 48
            },
            end: {
              line: 394,
              column: 66
            }
          }, {
            start: {
              line: 394,
              column: 69
            },
            end: {
              line: 394,
              column: 73
            }
          }],
          line: 394
        },
        '70': {
          loc: {
            start: {
              line: 396,
              column: 15
            },
            end: {
              line: 396,
              column: 32
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 396,
              column: 15
            },
            end: {
              line: 396,
              column: 26
            }
          }, {
            start: {
              line: 396,
              column: 30
            },
            end: {
              line: 396,
              column: 32
            }
          }],
          line: 396
        },
        '71': {
          loc: {
            start: {
              line: 420,
              column: 4
            },
            end: {
              line: 422,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 420,
              column: 4
            },
            end: {
              line: 422,
              column: 5
            }
          }, {
            start: {
              line: 420,
              column: 4
            },
            end: {
              line: 422,
              column: 5
            }
          }],
          line: 420
        },
        '72': {
          loc: {
            start: {
              line: 445,
              column: 6
            },
            end: {
              line: 447,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 445,
              column: 6
            },
            end: {
              line: 447,
              column: 7
            }
          }, {
            start: {
              line: 445,
              column: 6
            },
            end: {
              line: 447,
              column: 7
            }
          }],
          line: 445
        },
        '73': {
          loc: {
            start: {
              line: 445,
              column: 10
            },
            end: {
              line: 445,
              column: 50
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 445,
              column: 10
            },
            end: {
              line: 445,
              column: 24
            }
          }, {
            start: {
              line: 445,
              column: 28
            },
            end: {
              line: 445,
              column: 50
            }
          }],
          line: 445
        },
        '74': {
          loc: {
            start: {
              line: 459,
              column: 32
            },
            end: {
              line: 459,
              column: 65
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 459,
              column: 32
            },
            end: {
              line: 459,
              column: 59
            }
          }, {
            start: {
              line: 459,
              column: 63
            },
            end: {
              line: 459,
              column: 65
            }
          }],
          line: 459
        },
        '75': {
          loc: {
            start: {
              line: 461,
              column: 22
            },
            end: {
              line: 461,
              column: 99
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 461,
              column: 45
            },
            end: {
              line: 461,
              column: 60
            }
          }, {
            start: {
              line: 461,
              column: 63
            },
            end: {
              line: 461,
              column: 99
            }
          }],
          line: 461
        },
        '76': {
          loc: {
            start: {
              line: 462,
              column: 19
            },
            end: {
              line: 462,
              column: 70
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 462,
              column: 39
            },
            end: {
              line: 462,
              column: 51
            }
          }, {
            start: {
              line: 462,
              column: 54
            },
            end: {
              line: 462,
              column: 70
            }
          }],
          line: 462
        },
        '77': {
          loc: {
            start: {
              line: 480,
              column: 6
            },
            end: {
              line: 484,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 480,
              column: 6
            },
            end: {
              line: 484,
              column: 7
            }
          }, {
            start: {
              line: 480,
              column: 6
            },
            end: {
              line: 484,
              column: 7
            }
          }],
          line: 480
        },
        '78': {
          loc: {
            start: {
              line: 482,
              column: 13
            },
            end: {
              line: 484,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 482,
              column: 13
            },
            end: {
              line: 484,
              column: 7
            }
          }, {
            start: {
              line: 482,
              column: 13
            },
            end: {
              line: 484,
              column: 7
            }
          }],
          line: 482
        },
        '79': {
          loc: {
            start: {
              line: 486,
              column: 6
            },
            end: {
              line: 488,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 486,
              column: 6
            },
            end: {
              line: 488,
              column: 7
            }
          }, {
            start: {
              line: 486,
              column: 6
            },
            end: {
              line: 488,
              column: 7
            }
          }],
          line: 486
        },
        '80': {
          loc: {
            start: {
              line: 486,
              column: 10
            },
            end: {
              line: 486,
              column: 47
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 486,
              column: 10
            },
            end: {
              line: 486,
              column: 31
            }
          }, {
            start: {
              line: 486,
              column: 35
            },
            end: {
              line: 486,
              column: 47
            }
          }],
          line: 486
        },
        '81': {
          loc: {
            start: {
              line: 494,
              column: 6
            },
            end: {
              line: 503,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 494,
              column: 6
            },
            end: {
              line: 503,
              column: 7
            }
          }, {
            start: {
              line: 494,
              column: 6
            },
            end: {
              line: 503,
              column: 7
            }
          }],
          line: 494
        },
        '82': {
          loc: {
            start: {
              line: 499,
              column: 10
            },
            end: {
              line: 501,
              column: 11
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 499,
              column: 10
            },
            end: {
              line: 501,
              column: 11
            }
          }, {
            start: {
              line: 499,
              column: 10
            },
            end: {
              line: 501,
              column: 11
            }
          }],
          line: 499
        },
        '83': {
          loc: {
            start: {
              line: 505,
              column: 15
            },
            end: {
              line: 505,
              column: 82
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 505,
              column: 58
            },
            end: {
              line: 505,
              column: 62
            }
          }, {
            start: {
              line: 505,
              column: 65
            },
            end: {
              line: 505,
              column: 82
            }
          }],
          line: 505
        },
        '84': {
          loc: {
            start: {
              line: 511,
              column: 2
            },
            end: {
              line: 516,
              column: 3
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 511,
              column: 2
            },
            end: {
              line: 516,
              column: 3
            }
          }, {
            start: {
              line: 511,
              column: 2
            },
            end: {
              line: 516,
              column: 3
            }
          }],
          line: 511
        }
      },
      s: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0,
        '12': 0,
        '13': 0,
        '14': 0,
        '15': 0,
        '16': 0,
        '17': 0,
        '18': 0,
        '19': 0,
        '20': 0,
        '21': 0,
        '22': 0,
        '23': 0,
        '24': 0,
        '25': 0,
        '26': 0,
        '27': 0,
        '28': 0,
        '29': 0,
        '30': 0,
        '31': 0,
        '32': 0,
        '33': 0,
        '34': 0,
        '35': 0,
        '36': 0,
        '37': 0,
        '38': 0,
        '39': 0,
        '40': 0,
        '41': 0,
        '42': 0,
        '43': 0,
        '44': 0,
        '45': 0,
        '46': 0,
        '47': 0,
        '48': 0,
        '49': 0,
        '50': 0,
        '51': 0,
        '52': 0,
        '53': 0,
        '54': 0,
        '55': 0,
        '56': 0,
        '57': 0,
        '58': 0,
        '59': 0,
        '60': 0,
        '61': 0,
        '62': 0,
        '63': 0,
        '64': 0,
        '65': 0,
        '66': 0,
        '67': 0,
        '68': 0,
        '69': 0,
        '70': 0,
        '71': 0,
        '72': 0,
        '73': 0,
        '74': 0,
        '75': 0,
        '76': 0,
        '77': 0,
        '78': 0,
        '79': 0,
        '80': 0,
        '81': 0,
        '82': 0,
        '83': 0,
        '84': 0,
        '85': 0,
        '86': 0,
        '87': 0,
        '88': 0,
        '89': 0,
        '90': 0,
        '91': 0,
        '92': 0,
        '93': 0,
        '94': 0,
        '95': 0,
        '96': 0,
        '97': 0,
        '98': 0,
        '99': 0,
        '100': 0,
        '101': 0,
        '102': 0,
        '103': 0,
        '104': 0,
        '105': 0,
        '106': 0,
        '107': 0,
        '108': 0,
        '109': 0,
        '110': 0,
        '111': 0,
        '112': 0,
        '113': 0,
        '114': 0,
        '115': 0,
        '116': 0,
        '117': 0,
        '118': 0,
        '119': 0,
        '120': 0,
        '121': 0,
        '122': 0,
        '123': 0,
        '124': 0,
        '125': 0,
        '126': 0,
        '127': 0,
        '128': 0,
        '129': 0,
        '130': 0,
        '131': 0,
        '132': 0,
        '133': 0,
        '134': 0,
        '135': 0,
        '136': 0,
        '137': 0,
        '138': 0,
        '139': 0,
        '140': 0,
        '141': 0,
        '142': 0,
        '143': 0,
        '144': 0,
        '145': 0,
        '146': 0,
        '147': 0,
        '148': 0,
        '149': 0,
        '150': 0,
        '151': 0,
        '152': 0,
        '153': 0,
        '154': 0,
        '155': 0,
        '156': 0,
        '157': 0,
        '158': 0,
        '159': 0,
        '160': 0,
        '161': 0,
        '162': 0,
        '163': 0,
        '164': 0,
        '165': 0,
        '166': 0,
        '167': 0,
        '168': 0,
        '169': 0,
        '170': 0,
        '171': 0,
        '172': 0,
        '173': 0,
        '174': 0,
        '175': 0,
        '176': 0,
        '177': 0,
        '178': 0,
        '179': 0,
        '180': 0,
        '181': 0,
        '182': 0,
        '183': 0,
        '184': 0,
        '185': 0,
        '186': 0,
        '187': 0,
        '188': 0,
        '189': 0,
        '190': 0,
        '191': 0,
        '192': 0,
        '193': 0,
        '194': 0,
        '195': 0,
        '196': 0,
        '197': 0,
        '198': 0,
        '199': 0,
        '200': 0,
        '201': 0,
        '202': 0,
        '203': 0,
        '204': 0,
        '205': 0,
        '206': 0,
        '207': 0,
        '208': 0,
        '209': 0,
        '210': 0,
        '211': 0,
        '212': 0,
        '213': 0,
        '214': 0,
        '215': 0,
        '216': 0,
        '217': 0,
        '218': 0,
        '219': 0,
        '220': 0,
        '221': 0,
        '222': 0,
        '223': 0,
        '224': 0,
        '225': 0,
        '226': 0,
        '227': 0,
        '228': 0,
        '229': 0,
        '230': 0,
        '231': 0,
        '232': 0,
        '233': 0,
        '234': 0,
        '235': 0,
        '236': 0,
        '237': 0,
        '238': 0,
        '239': 0,
        '240': 0,
        '241': 0,
        '242': 0,
        '243': 0,
        '244': 0,
        '245': 0,
        '246': 0,
        '247': 0,
        '248': 0,
        '249': 0,
        '250': 0,
        '251': 0,
        '252': 0,
        '253': 0,
        '254': 0,
        '255': 0,
        '256': 0,
        '257': 0,
        '258': 0,
        '259': 0,
        '260': 0,
        '261': 0,
        '262': 0,
        '263': 0,
        '264': 0,
        '265': 0,
        '266': 0,
        '267': 0,
        '268': 0,
        '269': 0,
        '270': 0,
        '271': 0,
        '272': 0
      },
      f: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0,
        '12': 0,
        '13': 0,
        '14': 0,
        '15': 0,
        '16': 0,
        '17': 0,
        '18': 0,
        '19': 0,
        '20': 0,
        '21': 0,
        '22': 0,
        '23': 0,
        '24': 0,
        '25': 0,
        '26': 0,
        '27': 0,
        '28': 0,
        '29': 0,
        '30': 0,
        '31': 0,
        '32': 0,
        '33': 0,
        '34': 0,
        '35': 0,
        '36': 0,
        '37': 0,
        '38': 0,
        '39': 0,
        '40': 0,
        '41': 0,
        '42': 0,
        '43': 0,
        '44': 0,
        '45': 0,
        '46': 0,
        '47': 0,
        '48': 0,
        '49': 0,
        '50': 0,
        '51': 0,
        '52': 0,
        '53': 0,
        '54': 0,
        '55': 0,
        '56': 0,
        '57': 0,
        '58': 0,
        '59': 0,
        '60': 0
      },
      b: {
        '0': [0, 0],
        '1': [0, 0, 0],
        '2': [0, 0],
        '3': [0, 0],
        '4': [0, 0],
        '5': [0, 0],
        '6': [0, 0],
        '7': [0, 0],
        '8': [0, 0],
        '9': [0, 0],
        '10': [0, 0],
        '11': [0, 0],
        '12': [0, 0],
        '13': [0, 0],
        '14': [0, 0],
        '15': [0, 0],
        '16': [0, 0],
        '17': [0, 0],
        '18': [0, 0],
        '19': [0, 0],
        '20': [0, 0],
        '21': [0, 0],
        '22': [0, 0],
        '23': [0, 0],
        '24': [0, 0],
        '25': [0, 0],
        '26': [0, 0],
        '27': [0, 0],
        '28': [0, 0, 0],
        '29': [0, 0],
        '30': [0, 0, 0],
        '31': [0, 0],
        '32': [0, 0],
        '33': [0, 0],
        '34': [0, 0],
        '35': [0, 0],
        '36': [0, 0],
        '37': [0, 0],
        '38': [0, 0],
        '39': [0, 0],
        '40': [0, 0],
        '41': [0, 0],
        '42': [0, 0],
        '43': [0, 0],
        '44': [0, 0],
        '45': [0, 0],
        '46': [0, 0],
        '47': [0, 0],
        '48': [0, 0],
        '49': [0, 0],
        '50': [0, 0],
        '51': [0, 0],
        '52': [0, 0],
        '53': [0, 0],
        '54': [0, 0],
        '55': [0, 0],
        '56': [0, 0, 0],
        '57': [0, 0],
        '58': [0, 0],
        '59': [0, 0, 0],
        '60': [0, 0, 0],
        '61': [0, 0],
        '62': [0, 0],
        '63': [0, 0, 0],
        '64': [0, 0],
        '65': [0, 0],
        '66': [0, 0],
        '67': [0, 0],
        '68': [0, 0],
        '69': [0, 0],
        '70': [0, 0],
        '71': [0, 0],
        '72': [0, 0],
        '73': [0, 0],
        '74': [0, 0],
        '75': [0, 0],
        '76': [0, 0],
        '77': [0, 0],
        '78': [0, 0],
        '79': [0, 0],
        '80': [0, 0],
        '81': [0, 0],
        '82': [0, 0],
        '83': [0, 0],
        '84': [0, 0]
      },
      _coverageSchema: 'd34fc3e6b8297bcde183f5492bcb8fcb36775295'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();

  var support = (cov_1rwz6k9yi4.s[0]++, {
    searchParams: 'URLSearchParams' in self,
    iterable: (cov_1rwz6k9yi4.b[0][0]++, 'Symbol' in self) && (cov_1rwz6k9yi4.b[0][1]++, 'iterator' in Symbol),
    blob: (cov_1rwz6k9yi4.b[1][0]++, 'FileReader' in self) && (cov_1rwz6k9yi4.b[1][1]++, 'Blob' in self) && (cov_1rwz6k9yi4.b[1][2]++, function () {
      cov_1rwz6k9yi4.f[0]++;
      cov_1rwz6k9yi4.s[1]++;

      try {
        cov_1rwz6k9yi4.s[2]++;

        new Blob();
        cov_1rwz6k9yi4.s[3]++;
        return true;
      } catch (e) {
        cov_1rwz6k9yi4.s[4]++;

        return false;
      }
    }()),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  });

  function isDataView(obj) {
    cov_1rwz6k9yi4.f[1]++;
    cov_1rwz6k9yi4.s[5]++;

    return (cov_1rwz6k9yi4.b[2][0]++, obj) && (cov_1rwz6k9yi4.b[2][1]++, DataView.prototype.isPrototypeOf(obj));
  }

  cov_1rwz6k9yi4.s[6]++;
  if (support.arrayBuffer) {
    cov_1rwz6k9yi4.b[3][0]++;

    var viewClasses = (cov_1rwz6k9yi4.s[7]++, ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]']);

    var isArrayBufferView = (cov_1rwz6k9yi4.s[8]++, (cov_1rwz6k9yi4.b[4][0]++, ArrayBuffer.isView) || (cov_1rwz6k9yi4.b[4][1]++, function (obj) {
      cov_1rwz6k9yi4.f[2]++;
      cov_1rwz6k9yi4.s[9]++;

      return (cov_1rwz6k9yi4.b[5][0]++, obj) && (cov_1rwz6k9yi4.b[5][1]++, viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1);
    }));
  } else {
    cov_1rwz6k9yi4.b[3][1]++;
  }

  function normalizeName(name) {
    cov_1rwz6k9yi4.f[3]++;
    cov_1rwz6k9yi4.s[10]++;

    if (typeof name !== 'string') {
      cov_1rwz6k9yi4.b[6][0]++;
      cov_1rwz6k9yi4.s[11]++;

      name = String(name);
    } else {
      cov_1rwz6k9yi4.b[6][1]++;
    }
    cov_1rwz6k9yi4.s[12]++;
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      cov_1rwz6k9yi4.b[7][0]++;
      cov_1rwz6k9yi4.s[13]++;

      throw new TypeError('Invalid character in header field name');
    } else {
      cov_1rwz6k9yi4.b[7][1]++;
    }
    cov_1rwz6k9yi4.s[14]++;
    return name.toLowerCase();
  }

  function normalizeValue(value) {
    cov_1rwz6k9yi4.f[4]++;
    cov_1rwz6k9yi4.s[15]++;

    if (typeof value !== 'string') {
      cov_1rwz6k9yi4.b[8][0]++;
      cov_1rwz6k9yi4.s[16]++;

      value = String(value);
    } else {
      cov_1rwz6k9yi4.b[8][1]++;
    }
    cov_1rwz6k9yi4.s[17]++;
    return value;
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    cov_1rwz6k9yi4.f[5]++;

    var iterator = (cov_1rwz6k9yi4.s[18]++, {
      next: function next() {
        cov_1rwz6k9yi4.f[6]++;

        var value = (cov_1rwz6k9yi4.s[19]++, items.shift());
        cov_1rwz6k9yi4.s[20]++;
        return { done: value === undefined, value: value };
      }
    });

    cov_1rwz6k9yi4.s[21]++;
    if (support.iterable) {
      cov_1rwz6k9yi4.b[9][0]++;
      cov_1rwz6k9yi4.s[22]++;

      iterator[Symbol.iterator] = function () {
        cov_1rwz6k9yi4.f[7]++;
        cov_1rwz6k9yi4.s[23]++;

        return iterator;
      };
    } else {
      cov_1rwz6k9yi4.b[9][1]++;
    }

    cov_1rwz6k9yi4.s[24]++;
    return iterator;
  }

  function Headers$1(headers) {
    cov_1rwz6k9yi4.f[8]++;
    cov_1rwz6k9yi4.s[25]++;

    this.map = {};

    cov_1rwz6k9yi4.s[26]++;
    if (headers instanceof Headers$1) {
      cov_1rwz6k9yi4.b[10][0]++;
      cov_1rwz6k9yi4.s[27]++;

      headers.forEach(function (value, name) {
        cov_1rwz6k9yi4.f[9]++;
        cov_1rwz6k9yi4.s[28]++;

        this.append(name, value);
      }, this);
    } else {
        cov_1rwz6k9yi4.b[10][1]++;
        cov_1rwz6k9yi4.s[29]++;
        if (Array.isArray(headers)) {
          cov_1rwz6k9yi4.b[11][0]++;
          cov_1rwz6k9yi4.s[30]++;

          headers.forEach(function (header) {
            cov_1rwz6k9yi4.f[10]++;
            cov_1rwz6k9yi4.s[31]++;

            this.append(header[0], header[1]);
          }, this);
        } else {
            cov_1rwz6k9yi4.b[11][1]++;
            cov_1rwz6k9yi4.s[32]++;
            if (headers) {
              cov_1rwz6k9yi4.b[12][0]++;
              cov_1rwz6k9yi4.s[33]++;

              Object.getOwnPropertyNames(headers).forEach(function (name) {
                cov_1rwz6k9yi4.f[11]++;
                cov_1rwz6k9yi4.s[34]++;

                this.append(name, headers[name]);
              }, this);
            } else {
              cov_1rwz6k9yi4.b[12][1]++;
            }
          }
      }
  }

  cov_1rwz6k9yi4.s[35]++;
  Headers$1.prototype.append = function (name, value) {
    cov_1rwz6k9yi4.f[12]++;
    cov_1rwz6k9yi4.s[36]++;

    name = normalizeName(name);
    cov_1rwz6k9yi4.s[37]++;
    value = normalizeValue(value);
    var oldValue = (cov_1rwz6k9yi4.s[38]++, this.map[name]);
    cov_1rwz6k9yi4.s[39]++;
    this.map[name] = oldValue ? (cov_1rwz6k9yi4.b[13][0]++, oldValue + ', ' + value) : (cov_1rwz6k9yi4.b[13][1]++, value);
  };

  cov_1rwz6k9yi4.s[40]++;
  Headers$1.prototype['delete'] = function (name) {
    cov_1rwz6k9yi4.f[13]++;
    cov_1rwz6k9yi4.s[41]++;

    delete this.map[normalizeName(name)];
  };

  cov_1rwz6k9yi4.s[42]++;
  Headers$1.prototype.get = function (name) {
    cov_1rwz6k9yi4.f[14]++;
    cov_1rwz6k9yi4.s[43]++;

    name = normalizeName(name);
    cov_1rwz6k9yi4.s[44]++;
    return this.has(name) ? (cov_1rwz6k9yi4.b[14][0]++, this.map[name]) : (cov_1rwz6k9yi4.b[14][1]++, null);
  };

  cov_1rwz6k9yi4.s[45]++;
  Headers$1.prototype.has = function (name) {
    cov_1rwz6k9yi4.f[15]++;
    cov_1rwz6k9yi4.s[46]++;

    return this.map.hasOwnProperty(normalizeName(name));
  };

  cov_1rwz6k9yi4.s[47]++;
  Headers$1.prototype.set = function (name, value) {
    cov_1rwz6k9yi4.f[16]++;
    cov_1rwz6k9yi4.s[48]++;

    this.map[normalizeName(name)] = normalizeValue(value);
  };

  cov_1rwz6k9yi4.s[49]++;
  Headers$1.prototype.forEach = function (callback, thisArg) {
    cov_1rwz6k9yi4.f[17]++;
    cov_1rwz6k9yi4.s[50]++;

    for (var name in this.map) {
      cov_1rwz6k9yi4.s[51]++;

      if (this.map.hasOwnProperty(name)) {
        cov_1rwz6k9yi4.b[15][0]++;
        cov_1rwz6k9yi4.s[52]++;

        callback.call(thisArg, this.map[name], name, this);
      } else {
        cov_1rwz6k9yi4.b[15][1]++;
      }
    }
  };

  cov_1rwz6k9yi4.s[53]++;
  Headers$1.prototype.keys = function () {
    cov_1rwz6k9yi4.f[18]++;

    var items = (cov_1rwz6k9yi4.s[54]++, []);
    cov_1rwz6k9yi4.s[55]++;
    this.forEach(function (value, name) {
      cov_1rwz6k9yi4.f[19]++;
      cov_1rwz6k9yi4.s[56]++;

      items.push(name);
    });
    cov_1rwz6k9yi4.s[57]++;
    return iteratorFor(items);
  };

  cov_1rwz6k9yi4.s[58]++;
  Headers$1.prototype.values = function () {
    cov_1rwz6k9yi4.f[20]++;

    var items = (cov_1rwz6k9yi4.s[59]++, []);
    cov_1rwz6k9yi4.s[60]++;
    this.forEach(function (value) {
      cov_1rwz6k9yi4.f[21]++;
      cov_1rwz6k9yi4.s[61]++;

      items.push(value);
    });
    cov_1rwz6k9yi4.s[62]++;
    return iteratorFor(items);
  };

  cov_1rwz6k9yi4.s[63]++;
  Headers$1.prototype.entries = function () {
    cov_1rwz6k9yi4.f[22]++;

    var items = (cov_1rwz6k9yi4.s[64]++, []);
    cov_1rwz6k9yi4.s[65]++;
    this.forEach(function (value, name) {
      cov_1rwz6k9yi4.f[23]++;
      cov_1rwz6k9yi4.s[66]++;

      items.push([name, value]);
    });
    cov_1rwz6k9yi4.s[67]++;
    return iteratorFor(items);
  };

  cov_1rwz6k9yi4.s[68]++;
  if (support.iterable) {
    cov_1rwz6k9yi4.b[16][0]++;
    cov_1rwz6k9yi4.s[69]++;

    Headers$1.prototype[Symbol.iterator] = Headers$1.prototype.entries;
  } else {
    cov_1rwz6k9yi4.b[16][1]++;
  }

  function consumed(body) {
    cov_1rwz6k9yi4.f[24]++;
    cov_1rwz6k9yi4.s[70]++;

    if (body.bodyUsed) {
      cov_1rwz6k9yi4.b[17][0]++;
      cov_1rwz6k9yi4.s[71]++;

      return Promise.reject(new TypeError('Already read'));
    } else {
      cov_1rwz6k9yi4.b[17][1]++;
    }
    cov_1rwz6k9yi4.s[72]++;
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    cov_1rwz6k9yi4.f[25]++;
    cov_1rwz6k9yi4.s[73]++;

    return new Promise(function (resolve, reject) {
      cov_1rwz6k9yi4.f[26]++;
      cov_1rwz6k9yi4.s[74]++;

      reader.onload = function () {
        cov_1rwz6k9yi4.f[27]++;
        cov_1rwz6k9yi4.s[75]++;

        resolve(reader.result);
      };
      cov_1rwz6k9yi4.s[76]++;
      reader.onerror = function () {
        cov_1rwz6k9yi4.f[28]++;
        cov_1rwz6k9yi4.s[77]++;

        reject(reader.error);
      };
    });
  }

  function readBlobAsArrayBuffer(blob) {
    cov_1rwz6k9yi4.f[29]++;

    var reader = (cov_1rwz6k9yi4.s[78]++, new FileReader());
    var promise = (cov_1rwz6k9yi4.s[79]++, fileReaderReady(reader));
    cov_1rwz6k9yi4.s[80]++;
    reader.readAsArrayBuffer(blob);
    cov_1rwz6k9yi4.s[81]++;
    return promise;
  }

  function readBlobAsText(blob) {
    cov_1rwz6k9yi4.f[30]++;

    var reader = (cov_1rwz6k9yi4.s[82]++, new FileReader());
    var promise = (cov_1rwz6k9yi4.s[83]++, fileReaderReady(reader));
    cov_1rwz6k9yi4.s[84]++;
    reader.readAsText(blob);
    cov_1rwz6k9yi4.s[85]++;
    return promise;
  }

  function readArrayBufferAsText(buf) {
    cov_1rwz6k9yi4.f[31]++;

    var view = (cov_1rwz6k9yi4.s[86]++, new Uint8Array(buf));
    var chars = (cov_1rwz6k9yi4.s[87]++, new Array(view.length));

    cov_1rwz6k9yi4.s[88]++;
    for (var i = 0; i < view.length; i++) {
      cov_1rwz6k9yi4.s[89]++;

      chars[i] = String.fromCharCode(view[i]);
    }
    cov_1rwz6k9yi4.s[90]++;
    return chars.join('');
  }

  function bufferClone(buf) {
    cov_1rwz6k9yi4.f[32]++;
    cov_1rwz6k9yi4.s[91]++;

    if (buf.slice) {
      cov_1rwz6k9yi4.b[18][0]++;
      cov_1rwz6k9yi4.s[92]++;

      return buf.slice(0);
    } else {
      cov_1rwz6k9yi4.b[18][1]++;

      var view = (cov_1rwz6k9yi4.s[93]++, new Uint8Array(buf.byteLength));
      cov_1rwz6k9yi4.s[94]++;
      view.set(new Uint8Array(buf));
      cov_1rwz6k9yi4.s[95]++;
      return view.buffer;
    }
  }

  function Body() {
    cov_1rwz6k9yi4.f[33]++;
    cov_1rwz6k9yi4.s[96]++;

    this.bodyUsed = false;

    cov_1rwz6k9yi4.s[97]++;
    this._initBody = function (body) {
      cov_1rwz6k9yi4.f[34]++;
      cov_1rwz6k9yi4.s[98]++;

      this._bodyInit = body;
      cov_1rwz6k9yi4.s[99]++;
      if (!body) {
        cov_1rwz6k9yi4.b[19][0]++;
        cov_1rwz6k9yi4.s[100]++;

        this._bodyText = '';
      } else {
          cov_1rwz6k9yi4.b[19][1]++;
          cov_1rwz6k9yi4.s[101]++;
          if (typeof body === 'string') {
            cov_1rwz6k9yi4.b[20][0]++;
            cov_1rwz6k9yi4.s[102]++;

            this._bodyText = body;
          } else {
              cov_1rwz6k9yi4.b[20][1]++;
              cov_1rwz6k9yi4.s[103]++;
              if ((cov_1rwz6k9yi4.b[22][0]++, support.blob) && (cov_1rwz6k9yi4.b[22][1]++, Blob.prototype.isPrototypeOf(body))) {
                cov_1rwz6k9yi4.b[21][0]++;
                cov_1rwz6k9yi4.s[104]++;

                this._bodyBlob = body;
              } else {
                  cov_1rwz6k9yi4.b[21][1]++;
                  cov_1rwz6k9yi4.s[105]++;
                  if ((cov_1rwz6k9yi4.b[24][0]++, support.formData) && (cov_1rwz6k9yi4.b[24][1]++, FormData.prototype.isPrototypeOf(body))) {
                    cov_1rwz6k9yi4.b[23][0]++;
                    cov_1rwz6k9yi4.s[106]++;

                    this._bodyFormData = body;
                  } else {
                      cov_1rwz6k9yi4.b[23][1]++;
                      cov_1rwz6k9yi4.s[107]++;
                      if ((cov_1rwz6k9yi4.b[26][0]++, support.searchParams) && (cov_1rwz6k9yi4.b[26][1]++, URLSearchParams.prototype.isPrototypeOf(body))) {
                        cov_1rwz6k9yi4.b[25][0]++;
                        cov_1rwz6k9yi4.s[108]++;

                        this._bodyText = body.toString();
                      } else {
                          cov_1rwz6k9yi4.b[25][1]++;
                          cov_1rwz6k9yi4.s[109]++;
                          if ((cov_1rwz6k9yi4.b[28][0]++, support.arrayBuffer) && (cov_1rwz6k9yi4.b[28][1]++, support.blob) && (cov_1rwz6k9yi4.b[28][2]++, isDataView(body))) {
                            cov_1rwz6k9yi4.b[27][0]++;
                            cov_1rwz6k9yi4.s[110]++;

                            this._bodyArrayBuffer = bufferClone(body.buffer);
                            // IE 10-11 can't handle a DataView body.
                            cov_1rwz6k9yi4.s[111]++;
                            this._bodyInit = new Blob([this._bodyArrayBuffer]);
                          } else {
                              cov_1rwz6k9yi4.b[27][1]++;
                              cov_1rwz6k9yi4.s[112]++;
                              if ((cov_1rwz6k9yi4.b[30][0]++, support.arrayBuffer) && ((cov_1rwz6k9yi4.b[30][1]++, ArrayBuffer.prototype.isPrototypeOf(body)) || (cov_1rwz6k9yi4.b[30][2]++, isArrayBufferView(body)))) {
                                cov_1rwz6k9yi4.b[29][0]++;
                                cov_1rwz6k9yi4.s[113]++;

                                this._bodyArrayBuffer = bufferClone(body);
                              } else {
                                cov_1rwz6k9yi4.b[29][1]++;
                                cov_1rwz6k9yi4.s[114]++;

                                throw new Error('unsupported BodyInit type');
                              }
                            }
                        }
                    }
                }
            }
        }cov_1rwz6k9yi4.s[115]++;
      if (!this.headers.get('content-type')) {
        cov_1rwz6k9yi4.b[31][0]++;
        cov_1rwz6k9yi4.s[116]++;

        if (typeof body === 'string') {
          cov_1rwz6k9yi4.b[32][0]++;
          cov_1rwz6k9yi4.s[117]++;

          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else {
            cov_1rwz6k9yi4.b[32][1]++;
            cov_1rwz6k9yi4.s[118]++;
            if ((cov_1rwz6k9yi4.b[34][0]++, this._bodyBlob) && (cov_1rwz6k9yi4.b[34][1]++, this._bodyBlob.type)) {
              cov_1rwz6k9yi4.b[33][0]++;
              cov_1rwz6k9yi4.s[119]++;

              this.headers.set('content-type', this._bodyBlob.type);
            } else {
                cov_1rwz6k9yi4.b[33][1]++;
                cov_1rwz6k9yi4.s[120]++;
                if ((cov_1rwz6k9yi4.b[36][0]++, support.searchParams) && (cov_1rwz6k9yi4.b[36][1]++, URLSearchParams.prototype.isPrototypeOf(body))) {
                  cov_1rwz6k9yi4.b[35][0]++;
                  cov_1rwz6k9yi4.s[121]++;

                  this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                } else {
                  cov_1rwz6k9yi4.b[35][1]++;
                }
              }
          }
      } else {
        cov_1rwz6k9yi4.b[31][1]++;
      }
    };

    cov_1rwz6k9yi4.s[122]++;
    if (support.blob) {
      cov_1rwz6k9yi4.b[37][0]++;
      cov_1rwz6k9yi4.s[123]++;

      this.blob = function () {
        cov_1rwz6k9yi4.f[35]++;

        var rejected = (cov_1rwz6k9yi4.s[124]++, consumed(this));
        cov_1rwz6k9yi4.s[125]++;
        if (rejected) {
          cov_1rwz6k9yi4.b[38][0]++;
          cov_1rwz6k9yi4.s[126]++;

          return rejected;
        } else {
          cov_1rwz6k9yi4.b[38][1]++;
        }

        cov_1rwz6k9yi4.s[127]++;
        if (this._bodyBlob) {
          cov_1rwz6k9yi4.b[39][0]++;
          cov_1rwz6k9yi4.s[128]++;

          return Promise.resolve(this._bodyBlob);
        } else {
            cov_1rwz6k9yi4.b[39][1]++;
            cov_1rwz6k9yi4.s[129]++;
            if (this._bodyArrayBuffer) {
              cov_1rwz6k9yi4.b[40][0]++;
              cov_1rwz6k9yi4.s[130]++;

              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            } else {
                cov_1rwz6k9yi4.b[40][1]++;
                cov_1rwz6k9yi4.s[131]++;
                if (this._bodyFormData) {
                  cov_1rwz6k9yi4.b[41][0]++;
                  cov_1rwz6k9yi4.s[132]++;

                  throw new Error('could not read FormData body as blob');
                } else {
                  cov_1rwz6k9yi4.b[41][1]++;
                  cov_1rwz6k9yi4.s[133]++;

                  return Promise.resolve(new Blob([this._bodyText]));
                }
              }
          }
      };

      cov_1rwz6k9yi4.s[134]++;
      this.arrayBuffer = function () {
        cov_1rwz6k9yi4.f[36]++;
        cov_1rwz6k9yi4.s[135]++;

        if (this._bodyArrayBuffer) {
          cov_1rwz6k9yi4.b[42][0]++;
          cov_1rwz6k9yi4.s[136]++;

          return (cov_1rwz6k9yi4.b[43][0]++, consumed(this)) || (cov_1rwz6k9yi4.b[43][1]++, Promise.resolve(this._bodyArrayBuffer));
        } else {
          cov_1rwz6k9yi4.b[42][1]++;
          cov_1rwz6k9yi4.s[137]++;

          return this.blob().then(readBlobAsArrayBuffer);
        }
      };
    } else {
      cov_1rwz6k9yi4.b[37][1]++;
    }

    cov_1rwz6k9yi4.s[138]++;
    this.text = function () {
      cov_1rwz6k9yi4.f[37]++;

      var rejected = (cov_1rwz6k9yi4.s[139]++, consumed(this));
      cov_1rwz6k9yi4.s[140]++;
      if (rejected) {
        cov_1rwz6k9yi4.b[44][0]++;
        cov_1rwz6k9yi4.s[141]++;

        return rejected;
      } else {
        cov_1rwz6k9yi4.b[44][1]++;
      }

      cov_1rwz6k9yi4.s[142]++;
      if (this._bodyBlob) {
        cov_1rwz6k9yi4.b[45][0]++;
        cov_1rwz6k9yi4.s[143]++;

        return readBlobAsText(this._bodyBlob);
      } else {
          cov_1rwz6k9yi4.b[45][1]++;
          cov_1rwz6k9yi4.s[144]++;
          if (this._bodyArrayBuffer) {
            cov_1rwz6k9yi4.b[46][0]++;
            cov_1rwz6k9yi4.s[145]++;

            return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
          } else {
              cov_1rwz6k9yi4.b[46][1]++;
              cov_1rwz6k9yi4.s[146]++;
              if (this._bodyFormData) {
                cov_1rwz6k9yi4.b[47][0]++;
                cov_1rwz6k9yi4.s[147]++;

                throw new Error('could not read FormData body as text');
              } else {
                cov_1rwz6k9yi4.b[47][1]++;
                cov_1rwz6k9yi4.s[148]++;

                return Promise.resolve(this._bodyText);
              }
            }
        }
    };

    cov_1rwz6k9yi4.s[149]++;
    if (support.formData) {
      cov_1rwz6k9yi4.b[48][0]++;
      cov_1rwz6k9yi4.s[150]++;

      this.formData = function () {
        cov_1rwz6k9yi4.f[38]++;
        cov_1rwz6k9yi4.s[151]++;

        return this.text().then(decode);
      };
    } else {
      cov_1rwz6k9yi4.b[48][1]++;
    }

    cov_1rwz6k9yi4.s[152]++;
    this.json = function () {
      cov_1rwz6k9yi4.f[39]++;
      cov_1rwz6k9yi4.s[153]++;

      return this.text().then(JSON.parse);
    };

    cov_1rwz6k9yi4.s[154]++;
    return this;
  }

  // HTTP methods whose capitalization should be normalized
  var methods = (cov_1rwz6k9yi4.s[155]++, ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']);

  function normalizeMethod(method) {
    cov_1rwz6k9yi4.f[40]++;

    var upcased = (cov_1rwz6k9yi4.s[156]++, method.toUpperCase());
    cov_1rwz6k9yi4.s[157]++;
    return methods.indexOf(upcased) > -1 ? (cov_1rwz6k9yi4.b[49][0]++, upcased) : (cov_1rwz6k9yi4.b[49][1]++, method);
  }

  function Request$1(input, options) {
    cov_1rwz6k9yi4.f[41]++;
    cov_1rwz6k9yi4.s[158]++;

    options = (cov_1rwz6k9yi4.b[50][0]++, options) || (cov_1rwz6k9yi4.b[50][1]++, {});
    var body = (cov_1rwz6k9yi4.s[159]++, options.body);

    cov_1rwz6k9yi4.s[160]++;
    if (input instanceof Request$1) {
      cov_1rwz6k9yi4.b[51][0]++;
      cov_1rwz6k9yi4.s[161]++;

      if (input.bodyUsed) {
        cov_1rwz6k9yi4.b[52][0]++;
        cov_1rwz6k9yi4.s[162]++;

        throw new TypeError('Already read');
      } else {
        cov_1rwz6k9yi4.b[52][1]++;
      }
      cov_1rwz6k9yi4.s[163]++;
      this.url = input.url;
      cov_1rwz6k9yi4.s[164]++;
      this.credentials = input.credentials;
      cov_1rwz6k9yi4.s[165]++;
      if (!options.headers) {
        cov_1rwz6k9yi4.b[53][0]++;
        cov_1rwz6k9yi4.s[166]++;

        this.headers = new Headers$1(input.headers);
      } else {
        cov_1rwz6k9yi4.b[53][1]++;
      }
      cov_1rwz6k9yi4.s[167]++;
      this.method = input.method;
      cov_1rwz6k9yi4.s[168]++;
      this.mode = input.mode;
      cov_1rwz6k9yi4.s[169]++;
      this.signal = input.signal;
      cov_1rwz6k9yi4.s[170]++;
      if ((cov_1rwz6k9yi4.b[55][0]++, !body) && (cov_1rwz6k9yi4.b[55][1]++, input._bodyInit != null)) {
        cov_1rwz6k9yi4.b[54][0]++;
        cov_1rwz6k9yi4.s[171]++;

        body = input._bodyInit;
        cov_1rwz6k9yi4.s[172]++;
        input.bodyUsed = true;
      } else {
        cov_1rwz6k9yi4.b[54][1]++;
      }
    } else {
      cov_1rwz6k9yi4.b[51][1]++;
      cov_1rwz6k9yi4.s[173]++;

      this.url = String(input);
    }

    cov_1rwz6k9yi4.s[174]++;
    this.credentials = (cov_1rwz6k9yi4.b[56][0]++, options.credentials) || (cov_1rwz6k9yi4.b[56][1]++, this.credentials) || (cov_1rwz6k9yi4.b[56][2]++, 'same-origin');
    cov_1rwz6k9yi4.s[175]++;
    if ((cov_1rwz6k9yi4.b[58][0]++, options.headers) || (cov_1rwz6k9yi4.b[58][1]++, !this.headers)) {
      cov_1rwz6k9yi4.b[57][0]++;
      cov_1rwz6k9yi4.s[176]++;

      this.headers = new Headers$1(options.headers);
    } else {
      cov_1rwz6k9yi4.b[57][1]++;
    }
    cov_1rwz6k9yi4.s[177]++;
    this.method = normalizeMethod((cov_1rwz6k9yi4.b[59][0]++, options.method) || (cov_1rwz6k9yi4.b[59][1]++, this.method) || (cov_1rwz6k9yi4.b[59][2]++, 'GET'));
    cov_1rwz6k9yi4.s[178]++;
    this.mode = (cov_1rwz6k9yi4.b[60][0]++, options.mode) || (cov_1rwz6k9yi4.b[60][1]++, this.mode) || (cov_1rwz6k9yi4.b[60][2]++, null);
    cov_1rwz6k9yi4.s[179]++;
    this.signal = (cov_1rwz6k9yi4.b[61][0]++, options.signal) || (cov_1rwz6k9yi4.b[61][1]++, this.signal);
    cov_1rwz6k9yi4.s[180]++;
    this.referrer = null;

    cov_1rwz6k9yi4.s[181]++;
    if (((cov_1rwz6k9yi4.b[63][0]++, this.method === 'GET') || (cov_1rwz6k9yi4.b[63][1]++, this.method === 'HEAD')) && (cov_1rwz6k9yi4.b[63][2]++, body)) {
      cov_1rwz6k9yi4.b[62][0]++;
      cov_1rwz6k9yi4.s[182]++;

      throw new TypeError('Body not allowed for GET or HEAD requests');
    } else {
      cov_1rwz6k9yi4.b[62][1]++;
    }
    cov_1rwz6k9yi4.s[183]++;
    this._initBody(body);
  }

  cov_1rwz6k9yi4.s[184]++;
  Request$1.prototype.clone = function () {
    cov_1rwz6k9yi4.f[42]++;
    cov_1rwz6k9yi4.s[185]++;

    return new Request$1(this, { body: this._bodyInit });
  };

  function decode(body) {
    cov_1rwz6k9yi4.f[43]++;

    var form = (cov_1rwz6k9yi4.s[186]++, new FormData());
    cov_1rwz6k9yi4.s[187]++;
    body.trim().split('&').forEach(function (bytes) {
      cov_1rwz6k9yi4.f[44]++;
      cov_1rwz6k9yi4.s[188]++;

      if (bytes) {
        cov_1rwz6k9yi4.b[64][0]++;

        var split = (cov_1rwz6k9yi4.s[189]++, bytes.split('='));
        var name = (cov_1rwz6k9yi4.s[190]++, split.shift().replace(/\+/g, ' '));
        var value = (cov_1rwz6k9yi4.s[191]++, split.join('=').replace(/\+/g, ' '));
        cov_1rwz6k9yi4.s[192]++;
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      } else {
        cov_1rwz6k9yi4.b[64][1]++;
      }
    });
    cov_1rwz6k9yi4.s[193]++;
    return form;
  }

  function parseHeaders(rawHeaders) {
    cov_1rwz6k9yi4.f[45]++;

    var headers = (cov_1rwz6k9yi4.s[194]++, new Headers$1());
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = (cov_1rwz6k9yi4.s[195]++, rawHeaders.replace(/\r?\n[\t ]+/g, ' '));
    cov_1rwz6k9yi4.s[196]++;
    preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
      cov_1rwz6k9yi4.f[46]++;

      var parts = (cov_1rwz6k9yi4.s[197]++, line.split(':'));
      var key = (cov_1rwz6k9yi4.s[198]++, parts.shift().trim());
      cov_1rwz6k9yi4.s[199]++;
      if (key) {
        cov_1rwz6k9yi4.b[65][0]++;

        var value = (cov_1rwz6k9yi4.s[200]++, parts.join(':').trim());
        cov_1rwz6k9yi4.s[201]++;
        headers.append(key, value);
      } else {
        cov_1rwz6k9yi4.b[65][1]++;
      }
    });
    cov_1rwz6k9yi4.s[202]++;
    return headers;
  }

  cov_1rwz6k9yi4.s[203]++;
  Body.call(Request$1.prototype);

  function Response(bodyInit, options) {
    cov_1rwz6k9yi4.f[47]++;
    cov_1rwz6k9yi4.s[204]++;

    if (!options) {
      cov_1rwz6k9yi4.b[66][0]++;
      cov_1rwz6k9yi4.s[205]++;

      options = {};
    } else {
      cov_1rwz6k9yi4.b[66][1]++;
    }

    cov_1rwz6k9yi4.s[206]++;
    this.type = 'default';
    cov_1rwz6k9yi4.s[207]++;
    this.status = options.status === undefined ? (cov_1rwz6k9yi4.b[67][0]++, 200) : (cov_1rwz6k9yi4.b[67][1]++, options.status);
    cov_1rwz6k9yi4.s[208]++;
    this.ok = (cov_1rwz6k9yi4.b[68][0]++, this.status >= 200) && (cov_1rwz6k9yi4.b[68][1]++, this.status < 300);
    cov_1rwz6k9yi4.s[209]++;
    this.statusText = 'statusText' in options ? (cov_1rwz6k9yi4.b[69][0]++, options.statusText) : (cov_1rwz6k9yi4.b[69][1]++, 'OK');
    cov_1rwz6k9yi4.s[210]++;
    this.headers = new Headers$1(options.headers);
    cov_1rwz6k9yi4.s[211]++;
    this.url = (cov_1rwz6k9yi4.b[70][0]++, options.url) || (cov_1rwz6k9yi4.b[70][1]++, '');
    cov_1rwz6k9yi4.s[212]++;
    this._initBody(bodyInit);
  }

  cov_1rwz6k9yi4.s[213]++;
  Body.call(Response.prototype);

  cov_1rwz6k9yi4.s[214]++;
  Response.prototype.clone = function () {
    cov_1rwz6k9yi4.f[48]++;
    cov_1rwz6k9yi4.s[215]++;

    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers$1(this.headers),
      url: this.url
    });
  };

  cov_1rwz6k9yi4.s[216]++;
  Response.error = function () {
    cov_1rwz6k9yi4.f[49]++;

    var response = (cov_1rwz6k9yi4.s[217]++, new Response(null, { status: 0, statusText: '' }));
    cov_1rwz6k9yi4.s[218]++;
    response.type = 'error';
    cov_1rwz6k9yi4.s[219]++;
    return response;
  };

  var redirectStatuses = (cov_1rwz6k9yi4.s[220]++, [301, 302, 303, 307, 308]);

  cov_1rwz6k9yi4.s[221]++;
  Response.redirect = function (url, status) {
    cov_1rwz6k9yi4.f[50]++;
    cov_1rwz6k9yi4.s[222]++;

    if (redirectStatuses.indexOf(status) === -1) {
      cov_1rwz6k9yi4.b[71][0]++;
      cov_1rwz6k9yi4.s[223]++;

      throw new RangeError('Invalid status code');
    } else {
      cov_1rwz6k9yi4.b[71][1]++;
    }

    cov_1rwz6k9yi4.s[224]++;
    return new Response(null, { status: status, headers: { location: url } });
  };

  var DOMException = (cov_1rwz6k9yi4.s[225]++, self.DOMException);
  cov_1rwz6k9yi4.s[226]++;
  try {
    cov_1rwz6k9yi4.s[227]++;

    new DOMException();
  } catch (err) {
    cov_1rwz6k9yi4.s[228]++;

    DOMException = function DOMException(message, name) {
      cov_1rwz6k9yi4.f[51]++;
      cov_1rwz6k9yi4.s[229]++;

      this.message = message;
      cov_1rwz6k9yi4.s[230]++;
      this.name = name;
      var error = (cov_1rwz6k9yi4.s[231]++, Error(message));
      cov_1rwz6k9yi4.s[232]++;
      this.stack = error.stack;
    };
    cov_1rwz6k9yi4.s[233]++;
    DOMException.prototype = Object.create(Error.prototype);
    cov_1rwz6k9yi4.s[234]++;
    DOMException.prototype.constructor = DOMException;
  }

  function fetch$1(input, init) {
    cov_1rwz6k9yi4.f[52]++;
    cov_1rwz6k9yi4.s[235]++;

    return new Promise(function (resolve, reject) {
      cov_1rwz6k9yi4.f[53]++;

      var request = (cov_1rwz6k9yi4.s[236]++, new Request$1(input, init));

      cov_1rwz6k9yi4.s[237]++;
      if ((cov_1rwz6k9yi4.b[73][0]++, request.signal) && (cov_1rwz6k9yi4.b[73][1]++, request.signal.aborted)) {
        cov_1rwz6k9yi4.b[72][0]++;
        cov_1rwz6k9yi4.s[238]++;

        return reject(new DOMException('Aborted', 'AbortError'));
      } else {
        cov_1rwz6k9yi4.b[72][1]++;
      }

      var xhr = (cov_1rwz6k9yi4.s[239]++, new XMLHttpRequest());

      function abortXhr() {
        cov_1rwz6k9yi4.f[54]++;
        cov_1rwz6k9yi4.s[240]++;

        xhr.abort();
      }

      cov_1rwz6k9yi4.s[241]++;
      xhr.onload = function () {
        cov_1rwz6k9yi4.f[55]++;

        var options = (cov_1rwz6k9yi4.s[242]++, {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders((cov_1rwz6k9yi4.b[74][0]++, xhr.getAllResponseHeaders()) || (cov_1rwz6k9yi4.b[74][1]++, ''))
        });
        cov_1rwz6k9yi4.s[243]++;
        options.url = 'responseURL' in xhr ? (cov_1rwz6k9yi4.b[75][0]++, xhr.responseURL) : (cov_1rwz6k9yi4.b[75][1]++, options.headers.get('X-Request-URL'));
        var body = (cov_1rwz6k9yi4.s[244]++, 'response' in xhr ? (cov_1rwz6k9yi4.b[76][0]++, xhr.response) : (cov_1rwz6k9yi4.b[76][1]++, xhr.responseText));
        cov_1rwz6k9yi4.s[245]++;
        resolve(new Response(body, options));
      };

      cov_1rwz6k9yi4.s[246]++;
      xhr.onerror = function () {
        cov_1rwz6k9yi4.f[56]++;
        cov_1rwz6k9yi4.s[247]++;

        reject(new TypeError('Network request failed'));
      };

      cov_1rwz6k9yi4.s[248]++;
      xhr.ontimeout = function () {
        cov_1rwz6k9yi4.f[57]++;
        cov_1rwz6k9yi4.s[249]++;

        reject(new TypeError('Network request failed'));
      };

      cov_1rwz6k9yi4.s[250]++;
      xhr.onabort = function () {
        cov_1rwz6k9yi4.f[58]++;
        cov_1rwz6k9yi4.s[251]++;

        reject(new DOMException('Aborted', 'AbortError'));
      };

      cov_1rwz6k9yi4.s[252]++;
      xhr.open(request.method, request.url, true);

      cov_1rwz6k9yi4.s[253]++;
      if (request.credentials === 'include') {
        cov_1rwz6k9yi4.b[77][0]++;
        cov_1rwz6k9yi4.s[254]++;

        xhr.withCredentials = true;
      } else {
          cov_1rwz6k9yi4.b[77][1]++;
          cov_1rwz6k9yi4.s[255]++;
          if (request.credentials === 'omit') {
            cov_1rwz6k9yi4.b[78][0]++;
            cov_1rwz6k9yi4.s[256]++;

            xhr.withCredentials = false;
          } else {
            cov_1rwz6k9yi4.b[78][1]++;
          }
        }cov_1rwz6k9yi4.s[257]++;
      if ((cov_1rwz6k9yi4.b[80][0]++, 'responseType' in xhr) && (cov_1rwz6k9yi4.b[80][1]++, support.blob)) {
        cov_1rwz6k9yi4.b[79][0]++;
        cov_1rwz6k9yi4.s[258]++;

        xhr.responseType = 'blob';
      } else {
        cov_1rwz6k9yi4.b[79][1]++;
      }

      cov_1rwz6k9yi4.s[259]++;
      request.headers.forEach(function (value, name) {
        cov_1rwz6k9yi4.f[59]++;
        cov_1rwz6k9yi4.s[260]++;

        xhr.setRequestHeader(name, value);
      });

      cov_1rwz6k9yi4.s[261]++;
      if (request.signal) {
        cov_1rwz6k9yi4.b[81][0]++;
        cov_1rwz6k9yi4.s[262]++;

        request.signal.addEventListener('abort', abortXhr);

        cov_1rwz6k9yi4.s[263]++;
        xhr.onreadystatechange = function () {
          cov_1rwz6k9yi4.f[60]++;
          cov_1rwz6k9yi4.s[264]++;

          // DONE (success or failure)
          if (xhr.readyState === 4) {
            cov_1rwz6k9yi4.b[82][0]++;
            cov_1rwz6k9yi4.s[265]++;

            request.signal.removeEventListener('abort', abortXhr);
          } else {
            cov_1rwz6k9yi4.b[82][1]++;
          }
        };
      } else {
        cov_1rwz6k9yi4.b[81][1]++;
      }

      cov_1rwz6k9yi4.s[266]++;
      xhr.send(typeof request._bodyInit === 'undefined' ? (cov_1rwz6k9yi4.b[83][0]++, null) : (cov_1rwz6k9yi4.b[83][1]++, request._bodyInit));
    });
  }

  cov_1rwz6k9yi4.s[267]++;
  fetch$1.polyfill = true;

  cov_1rwz6k9yi4.s[268]++;
  if (!self.fetch) {
    cov_1rwz6k9yi4.b[84][0]++;
    cov_1rwz6k9yi4.s[269]++;

    self.fetch = fetch$1;
    cov_1rwz6k9yi4.s[270]++;
    self.Headers = Headers$1;
    cov_1rwz6k9yi4.s[271]++;
    self.Request = Request$1;
    cov_1rwz6k9yi4.s[272]++;
    self.Response = Response;
  } else {
    cov_1rwz6k9yi4.b[84][1]++;
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var jsx = function () {
    var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7;
    return function createRawReactElement(type, props, key, children) {
      var defaultProps = type && type.defaultProps;
      var childrenLength = arguments.length - 3;

      if (!props && childrenLength !== 0) {
        props = {};
      }

      if (props && defaultProps) {
        for (var propName in defaultProps) {
          if (props[propName] === void 0) {
            props[propName] = defaultProps[propName];
          }
        }
      } else if (!props) {
        props = defaultProps || {};
      }

      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);

        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 3];
        }

        props.children = childArray;
      }

      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key === undefined ? null : '' + key,
        ref: null,
        props: props,
        _owner: null
      };
    };
  }();

  var asyncIterator = function (iterable) {
    if (typeof Symbol === "function") {
      if (Symbol.asyncIterator) {
        var method = iterable[Symbol.asyncIterator];
        if (method != null) return method.call(iterable);
      }

      if (Symbol.iterator) {
        return iterable[Symbol.iterator]();
      }
    }

    throw new TypeError("Object is not async iterable");
  };

  var asyncGenerator = function () {
    function AwaitValue(value) {
      this.value = value;
    }

    function AsyncGenerator(gen) {
      var front, back;

      function send(key, arg) {
        return new Promise(function (resolve, reject) {
          var request = {
            key: key,
            arg: arg,
            resolve: resolve,
            reject: reject,
            next: null
          };

          if (back) {
            back = back.next = request;
          } else {
            front = back = request;
            resume(key, arg);
          }
        });
      }

      function resume(key, arg) {
        try {
          var result = gen[key](arg);
          var value = result.value;

          if (value instanceof AwaitValue) {
            Promise.resolve(value.value).then(function (arg) {
              resume("next", arg);
            }, function (arg) {
              resume("throw", arg);
            });
          } else {
            settle(result.done ? "return" : "normal", result.value);
          }
        } catch (err) {
          settle("throw", err);
        }
      }

      function settle(type, value) {
        switch (type) {
          case "return":
            front.resolve({
              value: value,
              done: true
            });
            break;

          case "throw":
            front.reject(value);
            break;

          default:
            front.resolve({
              value: value,
              done: false
            });
            break;
        }

        front = front.next;

        if (front) {
          resume(front.key, front.arg);
        } else {
          back = null;
        }
      }

      this._invoke = send;

      if (typeof gen.return !== "function") {
        this.return = undefined;
      }
    }

    if (typeof Symbol === "function" && Symbol.asyncIterator) {
      AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
        return this;
      };
    }

    AsyncGenerator.prototype.next = function (arg) {
      return this._invoke("next", arg);
    };

    AsyncGenerator.prototype.throw = function (arg) {
      return this._invoke("throw", arg);
    };

    AsyncGenerator.prototype.return = function (arg) {
      return this._invoke("return", arg);
    };

    return {
      wrap: function (fn) {
        return function () {
          return new AsyncGenerator(fn.apply(this, arguments));
        };
      },
      await: function (value) {
        return new AwaitValue(value);
      }
    };
  }();

  var asyncGeneratorDelegate = function (inner, awaitWrap) {
    var iter = {},
        waiting = false;

    function pump(key, value) {
      waiting = true;
      value = new Promise(function (resolve) {
        resolve(inner[key](value));
      });
      return {
        done: false,
        value: awaitWrap(value)
      };
    }

    if (typeof Symbol === "function" && Symbol.iterator) {
      iter[Symbol.iterator] = function () {
        return this;
      };
    }

    iter.next = function (value) {
      if (waiting) {
        waiting = false;
        return value;
      }

      return pump("next", value);
    };

    if (typeof inner.throw === "function") {
      iter.throw = function (value) {
        if (waiting) {
          waiting = false;
          throw value;
        }

        return pump("throw", value);
      };
    }

    if (typeof inner.return === "function") {
      iter.return = function (value) {
        return pump("return", value);
      };
    }

    return iter;
  };

  var asyncToGenerator = function (fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var defineEnumerableProperties = function (obj, descs) {
    for (var key in descs) {
      var desc = descs[key];
      desc.configurable = desc.enumerable = true;
      if ("value" in desc) desc.writable = true;
      Object.defineProperty(obj, key, desc);
    }

    return obj;
  };

  var defaults = function (obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = Object.getOwnPropertyDescriptor(defaults, key);

      if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }

    return obj;
  };

  var defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var _instanceof = function (left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  };

  var interopRequireDefault = function (obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  };

  var interopRequireWildcard = function (obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  };

  var newArrowCheck = function (innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  };

  var objectDestructuringEmpty = function (obj) {
    if (obj == null) throw new TypeError("Cannot destructure undefined");
  };

  var objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var selfGlobal = typeof global === "undefined" ? self : global;

  var set = function set(object, property, value, receiver) {
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent !== null) {
        set(parent, property, value, receiver);
      }
    } else if ("value" in desc && desc.writable) {
      desc.value = value;
    } else {
      var setter = desc.set;

      if (setter !== undefined) {
        setter.call(receiver, value);
      }
    }

    return value;
  };

  var slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var slicedToArrayLoose = function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      var _arr = [];

      for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
        _arr.push(_step.value);

        if (i && _arr.length === i) break;
      }

      return _arr;
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };

  var taggedTemplateLiteral = function (strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  };

  var taggedTemplateLiteralLoose = function (strings, raw) {
    strings.raw = raw;
    return strings;
  };

  var temporalRef = function (val, name, undef) {
    if (val === undef) {
      throw new ReferenceError(name + " is not defined - temporal dead zone");
    } else {
      return val;
    }
  };

  var temporalUndefined = {};

  var toArray = function (arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  };

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  var babelHelpers = /*#__PURE__*/Object.freeze({
    jsx: jsx,
    asyncIterator: asyncIterator,
    asyncGenerator: asyncGenerator,
    asyncGeneratorDelegate: asyncGeneratorDelegate,
    asyncToGenerator: asyncToGenerator,
    classCallCheck: classCallCheck,
    createClass: createClass,
    defineEnumerableProperties: defineEnumerableProperties,
    defaults: defaults,
    defineProperty: defineProperty,
    get: get,
    inherits: inherits,
    interopRequireDefault: interopRequireDefault,
    interopRequireWildcard: interopRequireWildcard,
    newArrowCheck: newArrowCheck,
    objectDestructuringEmpty: objectDestructuringEmpty,
    objectWithoutProperties: objectWithoutProperties,
    possibleConstructorReturn: possibleConstructorReturn,
    selfGlobal: selfGlobal,
    set: set,
    slicedToArray: slicedToArray,
    slicedToArrayLoose: slicedToArrayLoose,
    taggedTemplateLiteral: taggedTemplateLiteral,
    taggedTemplateLiteralLoose: taggedTemplateLiteralLoose,
    temporalRef: temporalRef,
    temporalUndefined: temporalUndefined,
    toArray: toArray,
    toConsumableArray: toConsumableArray,
    typeof: _typeof,
    extends: _extends,
    instanceof: _instanceof
  });

  var cov_1fog8hqfea = function () {
      var path = "/Users/Jacky/Documents/GitHub/fetch-plugin/src/main.js",
          hash = "459d5adb812eb1804cdaf6ef2da8973ab6fc4c85",
          Function = function () {}.constructor,
          global = new Function('return this')(),
          gcv = "__coverage__",
          coverageData = {
          path: "/Users/Jacky/Documents/GitHub/fetch-plugin/src/main.js",
          statementMap: {
              "0": {
                  start: {
                      line: 4,
                      column: 20
                  },
                  end: {
                      line: 6,
                      column: 1
                  }
              },
              "1": {
                  start: {
                      line: 8,
                      column: 19
                  },
                  end: {
                      line: 19,
                      column: 1
                  }
              },
              "2": {
                  start: {
                      line: 17,
                      column: 8
                  },
                  end: {
                      line: 17,
                      column: 20
                  }
              },
              "3": {
                  start: {
                      line: 21,
                      column: 19
                  },
                  end: {
                      line: 33,
                      column: 1
                  }
              },
              "4": {
                  start: {
                      line: 22,
                      column: 20
                  },
                  end: {
                      line: 22,
                      column: 46
                  }
              },
              "5": {
                  start: {
                      line: 23,
                      column: 24
                  },
                  end: {
                      line: 23,
                      column: 75
                  }
              },
              "6": {
                  start: {
                      line: 24,
                      column: 24
                  },
                  end: {
                      line: 24,
                      column: 28
                  }
              },
              "7": {
                  start: {
                      line: 26,
                      column: 4
                  },
                  end: {
                      line: 26,
                      column: 62
                  }
              },
              "8": {
                  start: {
                      line: 27,
                      column: 4
                  },
                  end: {
                      line: 27,
                      column: 54
                  }
              },
              "9": {
                  start: {
                      line: 29,
                      column: 4
                  },
                  end: {
                      line: 32,
                      column: 5
                  }
              },
              "10": {
                  start: {
                      line: 35,
                      column: 17
                  },
                  end: {
                      line: 38,
                      column: 1
                  }
              },
              "11": {
                  start: {
                      line: 36,
                      column: 4
                  },
                  end: {
                      line: 36,
                      column: 54
                  }
              },
              "12": {
                  start: {
                      line: 37,
                      column: 4
                  },
                  end: {
                      line: 37,
                      column: 55
                  }
              },
              "13": {
                  start: {
                      line: 40,
                      column: 16
                  },
                  end: {
                      line: 50,
                      column: 1
                  }
              },
              "14": {
                  start: {
                      line: 41,
                      column: 24
                  },
                  end: {
                      line: 41,
                      column: 27
                  }
              },
              "15": {
                  start: {
                      line: 43,
                      column: 4
                  },
                  end: {
                      line: 49,
                      column: 6
                  }
              },
              "16": {
                  start: {
                      line: 44,
                      column: 8
                  },
                  end: {
                      line: 48,
                      column: 9
                  }
              },
              "17": {
                  start: {
                      line: 45,
                      column: 12
                  },
                  end: {
                      line: 45,
                      column: 35
                  }
              },
              "18": {
                  start: {
                      line: 47,
                      column: 12
                  },
                  end: {
                      line: 47,
                      column: 108
                  }
              },
              "19": {
                  start: {
                      line: 52,
                      column: 18
                  },
                  end: {
                      line: 58,
                      column: 1
                  }
              },
              "20": {
                  start: {
                      line: 53,
                      column: 4
                  },
                  end: {
                      line: 57,
                      column: 5
                  }
              },
              "21": {
                  start: {
                      line: 54,
                      column: 8
                  },
                  end: {
                      line: 54,
                      column: 23
                  }
              },
              "22": {
                  start: {
                      line: 56,
                      column: 8
                  },
                  end: {
                      line: 56,
                      column: 85
                  }
              },
              "23": {
                  start: {
                      line: 60,
                      column: 16
                  },
                  end: {
                      line: 70,
                      column: 1
                  }
              },
              "24": {
                  start: {
                      line: 61,
                      column: 4
                  },
                  end: {
                      line: 63,
                      column: 5
                  }
              },
              "25": {
                  start: {
                      line: 62,
                      column: 8
                  },
                  end: {
                      line: 62,
                      column: 18
                  }
              },
              "26": {
                  start: {
                      line: 65,
                      column: 15
                  },
                  end: {
                      line: 65,
                      column: 17
                  }
              },
              "27": {
                  start: {
                      line: 66,
                      column: 4
                  },
                  end: {
                      line: 68,
                      column: 5
                  }
              },
              "28": {
                  start: {
                      line: 67,
                      column: 8
                  },
                  end: {
                      line: 67,
                      column: 80
                  }
              },
              "29": {
                  start: {
                      line: 69,
                      column: 4
                  },
                  end: {
                      line: 69,
                      column: 70
                  }
              },
              "30": {
                  start: {
                      line: 72,
                      column: 14
                  },
                  end: {
                      line: 78,
                      column: 1
                  }
              },
              "31": {
                  start: {
                      line: 73,
                      column: 22
                  },
                  end: {
                      line: 73,
                      column: 75
                  }
              },
              "32": {
                  start: {
                      line: 74,
                      column: 19
                  },
                  end: {
                      line: 74,
                      column: 39
                  }
              },
              "33": {
                  start: {
                      line: 76,
                      column: 4
                  },
                  end: {
                      line: 77,
                      column: 64
                  }
              },
              "34": {
                  start: {
                      line: 80,
                      column: 17
                  },
                  end: {
                      line: 86,
                      column: 1
                  }
              },
              "35": {
                  start: {
                      line: 81,
                      column: 22
                  },
                  end: {
                      line: 81,
                      column: 78
                  }
              },
              "36": {
                  start: {
                      line: 82,
                      column: 19
                  },
                  end: {
                      line: 82,
                      column: 39
                  }
              },
              "37": {
                  start: {
                      line: 84,
                      column: 4
                  },
                  end: {
                      line: 85,
                      column: 64
                  }
              },
              "38": {
                  start: {
                      line: 88,
                      column: 15
                  },
                  end: {
                      line: 94,
                      column: 1
                  }
              },
              "39": {
                  start: {
                      line: 89,
                      column: 22
                  },
                  end: {
                      line: 89,
                      column: 104
                  }
              },
              "40": {
                  start: {
                      line: 90,
                      column: 19
                  },
                  end: {
                      line: 90,
                      column: 22
                  }
              },
              "41": {
                  start: {
                      line: 92,
                      column: 4
                  },
                  end: {
                      line: 93,
                      column: 64
                  }
              },
              "42": {
                  start: {
                      line: 96,
                      column: 14
                  },
                  end: {
                      line: 102,
                      column: 1
                  }
              },
              "43": {
                  start: {
                      line: 97,
                      column: 22
                  },
                  end: {
                      line: 97,
                      column: 103
                  }
              },
              "44": {
                  start: {
                      line: 98,
                      column: 19
                  },
                  end: {
                      line: 98,
                      column: 22
                  }
              },
              "45": {
                  start: {
                      line: 100,
                      column: 4
                  },
                  end: {
                      line: 101,
                      column: 64
                  }
              },
              "46": {
                  start: {
                      line: 104,
                      column: 22
                  },
                  end: {
                      line: 108,
                      column: 1
                  }
              },
              "47": {
                  start: {
                      line: 105,
                      column: 4
                  },
                  end: {
                      line: 105,
                      column: 86
                  }
              },
              "48": {
                  start: {
                      line: 107,
                      column: 4
                  },
                  end: {
                      line: 107,
                      column: 15
                  }
              },
              "49": {
                  start: {
                      line: 110,
                      column: 23
                  },
                  end: {
                      line: 115,
                      column: 1
                  }
              },
              "50": {
                  start: {
                      line: 111,
                      column: 4
                  },
                  end: {
                      line: 111,
                      column: 83
                  }
              },
              "51": {
                  start: {
                      line: 113,
                      column: 4
                  },
                  end: {
                      line: 113,
                      column: 61
                  }
              },
              "52": {
                  start: {
                      line: 114,
                      column: 4
                  },
                  end: {
                      line: 114,
                      column: 15
                  }
              },
              "53": {
                  start: {
                      line: 117,
                      column: 15
                  },
                  end: {
                      line: 142,
                      column: 1
                  }
              },
              "54": {
                  start: {
                      line: 118,
                      column: 24
                  },
                  end: {
                      line: 118,
                      column: 45
                  }
              },
              "55": {
                  start: {
                      line: 119,
                      column: 23
                  },
                  end: {
                      line: 119,
                      column: 55
                  }
              },
              "56": {
                  start: {
                      line: 120,
                      column: 4
                  },
                  end: {
                      line: 120,
                      column: 60
                  }
              },
              "57": {
                  start: {
                      line: 121,
                      column: 19
                  },
                  end: {
                      line: 121,
                      column: 39
                  }
              },
              "58": {
                  start: {
                      line: 122,
                      column: 15
                  },
                  end: {
                      line: 122,
                      column: 90
                  }
              },
              "59": {
                  start: {
                      line: 124,
                      column: 4
                  },
                  end: {
                      line: 124,
                      column: 46
                  }
              },
              "60": {
                  start: {
                      line: 125,
                      column: 4
                  },
                  end: {
                      line: 125,
                      column: 49
                  }
              },
              "61": {
                  start: {
                      line: 126,
                      column: 4
                  },
                  end: {
                      line: 126,
                      column: 44
                  }
              },
              "62": {
                  start: {
                      line: 127,
                      column: 4
                  },
                  end: {
                      line: 127,
                      column: 44
                  }
              },
              "63": {
                  start: {
                      line: 128,
                      column: 4
                  },
                  end: {
                      line: 128,
                      column: 52
                  }
              },
              "64": {
                  start: {
                      line: 130,
                      column: 4
                  },
                  end: {
                      line: 141,
                      column: 6
                  }
              },
              "65": {
                  start: {
                      line: 131,
                      column: 8
                  },
                  end: {
                      line: 134,
                      column: 9
                  }
              },
              "66": {
                  start: {
                      line: 132,
                      column: 12
                  },
                  end: {
                      line: 132,
                      column: 28
                  }
              },
              "67": {
                  start: {
                      line: 133,
                      column: 12
                  },
                  end: {
                      line: 133,
                      column: 42
                  }
              },
              "68": {
                  start: {
                      line: 136,
                      column: 8
                  },
                  end: {
                      line: 139,
                      column: 9
                  }
              },
              "69": {
                  start: {
                      line: 137,
                      column: 12
                  },
                  end: {
                      line: 137,
                      column: 20
                  }
              },
              "70": {
                  start: {
                      line: 138,
                      column: 12
                  },
                  end: {
                      line: 138,
                      column: 42
                  }
              },
              "71": {
                  start: {
                      line: 144,
                      column: 13
                  },
                  end: {
                      line: 171,
                      column: 1
                  }
              },
              "72": {
                  start: {
                      line: 145,
                      column: 4
                  },
                  end: {
                      line: 170,
                      column: 24
                  }
              },
              "73": {
                  start: {
                      line: 146,
                      column: 20
                  },
                  end: {
                      line: 146,
                      column: 21
                  }
              },
              "74": {
                  start: {
                      line: 148,
                      column: 8
                  },
                  end: {
                      line: 169,
                      column: 10
                  }
              },
              "75": {
                  start: {
                      line: 152,
                      column: 28
                  },
                  end: {
                      line: 152,
                      column: 69
                  }
              },
              "76": {
                  start: {
                      line: 154,
                      column: 12
                  },
                  end: {
                      line: 158,
                      column: 41
                  }
              },
              "77": {
                  start: {
                      line: 155,
                      column: 28
                  },
                  end: {
                      line: 155,
                      column: 61
                  }
              },
              "78": {
                  start: {
                      line: 156,
                      column: 16
                  },
                  end: {
                      line: 156,
                      column: 53
                  }
              },
              "79": {
                  start: {
                      line: 157,
                      column: 16
                  },
                  end: {
                      line: 157,
                      column: 29
                  }
              },
              "80": {
                  start: {
                      line: 159,
                      column: 12
                  },
                  end: {
                      line: 159,
                      column: 35
                  }
              },
              "81": {
                  start: {
                      line: 161,
                      column: 12
                  },
                  end: {
                      line: 161,
                      column: 31
                  }
              },
              "82": {
                  start: {
                      line: 162,
                      column: 12
                  },
                  end: {
                      line: 162,
                      column: 46
                  }
              },
              "83": {
                  start: {
                      line: 163,
                      column: 12
                  },
                  end: {
                      line: 163,
                      column: 29
                  }
              },
              "84": {
                  start: {
                      line: 165,
                      column: 12
                  },
                  end: {
                      line: 165,
                      column: 31
                  }
              },
              "85": {
                  start: {
                      line: 166,
                      column: 12
                  },
                  end: {
                      line: 166,
                      column: 27
                  }
              },
              "86": {
                  start: {
                      line: 167,
                      column: 12
                  },
                  end: {
                      line: 167,
                      column: 43
                  }
              },
              "87": {
                  start: {
                      line: 168,
                      column: 12
                  },
                  end: {
                      line: 168,
                      column: 25
                  }
              }
          },
          fnMap: {
              "0": {
                  name: "(anonymous_0)",
                  decl: {
                      start: {
                          line: 16,
                          column: 4
                      },
                      end: {
                          line: 16,
                          column: 5
                      }
                  },
                  loc: {
                      start: {
                          line: 16,
                          column: 22
                      },
                      end: {
                          line: 18,
                          column: 5
                      }
                  },
                  line: 16
              },
              "1": {
                  name: "(anonymous_1)",
                  decl: {
                      start: {
                          line: 21,
                          column: 19
                      },
                      end: {
                          line: 21,
                          column: 20
                      }
                  },
                  loc: {
                      start: {
                          line: 21,
                          column: 32
                      },
                      end: {
                          line: 33,
                          column: 1
                      }
                  },
                  line: 21
              },
              "2": {
                  name: "(anonymous_2)",
                  decl: {
                      start: {
                          line: 35,
                          column: 17
                      },
                      end: {
                          line: 35,
                          column: 18
                      }
                  },
                  loc: {
                      start: {
                          line: 35,
                          column: 30
                      },
                      end: {
                          line: 38,
                          column: 1
                      }
                  },
                  line: 35
              },
              "3": {
                  name: "(anonymous_3)",
                  decl: {
                      start: {
                          line: 40,
                          column: 16
                      },
                      end: {
                          line: 40,
                          column: 17
                      }
                  },
                  loc: {
                      start: {
                          line: 40,
                          column: 30
                      },
                      end: {
                          line: 50,
                          column: 1
                      }
                  },
                  line: 40
              },
              "4": {
                  name: "(anonymous_4)",
                  decl: {
                      start: {
                          line: 43,
                          column: 32
                      },
                      end: {
                          line: 43,
                          column: 33
                      }
                  },
                  loc: {
                      start: {
                          line: 43,
                          column: 42
                      },
                      end: {
                          line: 49,
                          column: 5
                      }
                  },
                  line: 43
              },
              "5": {
                  name: "(anonymous_5)",
                  decl: {
                      start: {
                          line: 52,
                          column: 18
                      },
                      end: {
                          line: 52,
                          column: 19
                      }
                  },
                  loc: {
                      start: {
                          line: 52,
                          column: 32
                      },
                      end: {
                          line: 58,
                          column: 1
                      }
                  },
                  line: 52
              },
              "6": {
                  name: "(anonymous_6)",
                  decl: {
                      start: {
                          line: 60,
                          column: 16
                      },
                      end: {
                          line: 60,
                          column: 17
                      }
                  },
                  loc: {
                      start: {
                          line: 60,
                          column: 36
                      },
                      end: {
                          line: 70,
                          column: 1
                      }
                  },
                  line: 60
              },
              "7": {
                  name: "(anonymous_7)",
                  decl: {
                      start: {
                          line: 72,
                          column: 14
                      },
                      end: {
                          line: 72,
                          column: 15
                      }
                  },
                  loc: {
                      start: {
                          line: 72,
                          column: 47
                      },
                      end: {
                          line: 78,
                          column: 1
                      }
                  },
                  line: 72
              },
              "8": {
                  name: "(anonymous_8)",
                  decl: {
                      start: {
                          line: 80,
                          column: 17
                      },
                      end: {
                          line: 80,
                          column: 18
                      }
                  },
                  loc: {
                      start: {
                          line: 80,
                          column: 50
                      },
                      end: {
                          line: 86,
                          column: 1
                      }
                  },
                  line: 80
              },
              "9": {
                  name: "(anonymous_9)",
                  decl: {
                      start: {
                          line: 88,
                          column: 15
                      },
                      end: {
                          line: 88,
                          column: 16
                      }
                  },
                  loc: {
                      start: {
                          line: 88,
                          column: 48
                      },
                      end: {
                          line: 94,
                          column: 1
                      }
                  },
                  line: 88
              },
              "10": {
                  name: "(anonymous_10)",
                  decl: {
                      start: {
                          line: 96,
                          column: 14
                      },
                      end: {
                          line: 96,
                          column: 15
                      }
                  },
                  loc: {
                      start: {
                          line: 96,
                          column: 47
                      },
                      end: {
                          line: 102,
                          column: 1
                      }
                  },
                  line: 96
              },
              "11": {
                  name: "(anonymous_11)",
                  decl: {
                      start: {
                          line: 104,
                          column: 22
                      },
                      end: {
                          line: 104,
                          column: 23
                      }
                  },
                  loc: {
                      start: {
                          line: 104,
                          column: 32
                      },
                      end: {
                          line: 108,
                          column: 1
                      }
                  },
                  line: 104
              },
              "12": {
                  name: "(anonymous_12)",
                  decl: {
                      start: {
                          line: 110,
                          column: 23
                      },
                      end: {
                          line: 110,
                          column: 24
                      }
                  },
                  loc: {
                      start: {
                          line: 110,
                          column: 34
                      },
                      end: {
                          line: 115,
                          column: 1
                      }
                  },
                  line: 110
              },
              "13": {
                  name: "(anonymous_13)",
                  decl: {
                      start: {
                          line: 117,
                          column: 15
                      },
                      end: {
                          line: 117,
                          column: 16
                      }
                  },
                  loc: {
                      start: {
                          line: 117,
                          column: 48
                      },
                      end: {
                          line: 142,
                          column: 1
                      }
                  },
                  line: 117
              },
              "14": {
                  name: "(anonymous_14)",
                  decl: {
                      start: {
                          line: 130,
                          column: 23
                      },
                      end: {
                          line: 130,
                          column: 24
                      }
                  },
                  loc: {
                      start: {
                          line: 130,
                          column: 44
                      },
                      end: {
                          line: 141,
                          column: 5
                      }
                  },
                  line: 130
              },
              "15": {
                  name: "(anonymous_15)",
                  decl: {
                      start: {
                          line: 131,
                          column: 32
                      },
                      end: {
                          line: 131,
                          column: 33
                      }
                  },
                  loc: {
                      start: {
                          line: 131,
                          column: 45
                      },
                      end: {
                          line: 134,
                          column: 9
                      }
                  },
                  line: 131
              },
              "16": {
                  name: "(anonymous_16)",
                  decl: {
                      start: {
                          line: 136,
                          column: 31
                      },
                      end: {
                          line: 136,
                          column: 32
                      }
                  },
                  loc: {
                      start: {
                          line: 136,
                          column: 37
                      },
                      end: {
                          line: 139,
                          column: 9
                      }
                  },
                  line: 136
              },
              "17": {
                  name: "(anonymous_17)",
                  decl: {
                      start: {
                          line: 144,
                          column: 13
                      },
                      end: {
                          line: 144,
                          column: 14
                      }
                  },
                  loc: {
                      start: {
                          line: 144,
                          column: 35
                      },
                      end: {
                          line: 171,
                          column: 1
                      }
                  },
                  line: 144
              },
              "18": {
                  name: "(anonymous_18)",
                  decl: {
                      start: {
                          line: 145,
                          column: 23
                      },
                      end: {
                          line: 145,
                          column: 24
                      }
                  },
                  loc: {
                      start: {
                          line: 145,
                          column: 44
                      },
                      end: {
                          line: 170,
                          column: 5
                      }
                  },
                  line: 145
              },
              "19": {
                  name: "(anonymous_19)",
                  decl: {
                      start: {
                          line: 151,
                          column: 17
                      },
                      end: {
                          line: 151,
                          column: 18
                      }
                  },
                  loc: {
                      start: {
                          line: 151,
                          column: 28
                      },
                      end: {
                          line: 160,
                          column: 9
                      }
                  },
                  line: 151
              },
              "20": {
                  name: "(anonymous_20)",
                  decl: {
                      start: {
                          line: 154,
                          column: 31
                      },
                      end: {
                          line: 154,
                          column: 32
                      }
                  },
                  loc: {
                      start: {
                          line: 154,
                          column: 37
                      },
                      end: {
                          line: 158,
                          column: 13
                      }
                  },
                  line: 154
              },
              "21": {
                  name: "(anonymous_21)",
                  decl: {
                      start: {
                          line: 160,
                          column: 16
                      },
                      end: {
                          line: 160,
                          column: 17
                      }
                  },
                  loc: {
                      start: {
                          line: 160,
                          column: 30
                      },
                      end: {
                          line: 164,
                          column: 9
                      }
                  },
                  line: 160
              },
              "22": {
                  name: "(anonymous_22)",
                  decl: {
                      start: {
                          line: 164,
                          column: 11
                      },
                      end: {
                          line: 164,
                          column: 12
                      }
                  },
                  loc: {
                      start: {
                          line: 164,
                          column: 22
                      },
                      end: {
                          line: 169,
                          column: 9
                      }
                  },
                  line: 164
              }
          },
          branchMap: {
              "0": {
                  loc: {
                      start: {
                          line: 53,
                          column: 4
                      },
                      end: {
                          line: 57,
                          column: 5
                      }
                  },
                  type: "if",
                  locations: [{
                      start: {
                          line: 53,
                          column: 4
                      },
                      end: {
                          line: 57,
                          column: 5
                      }
                  }, {
                      start: {
                          line: 53,
                          column: 4
                      },
                      end: {
                          line: 57,
                          column: 5
                      }
                  }],
                  line: 53
              },
              "1": {
                  loc: {
                      start: {
                          line: 53,
                          column: 8
                      },
                      end: {
                          line: 53,
                          column: 83
                      }
                  },
                  type: "binary-expr",
                  locations: [{
                      start: {
                          line: 53,
                          column: 9
                      },
                      end: {
                          line: 53,
                          column: 31
                      }
                  }, {
                      start: {
                          line: 53,
                          column: 35
                      },
                      end: {
                          line: 53,
                          column: 56
                      }
                  }, {
                      start: {
                          line: 53,
                          column: 61
                      },
                      end: {
                          line: 53,
                          column: 83
                      }
                  }],
                  line: 53
              },
              "2": {
                  loc: {
                      start: {
                          line: 60,
                          column: 22
                      },
                      end: {
                          line: 60,
                          column: 31
                      }
                  },
                  type: "default-arg",
                  locations: [{
                      start: {
                          line: 60,
                          column: 29
                      },
                      end: {
                          line: 60,
                          column: 31
                      }
                  }],
                  line: 60
              },
              "3": {
                  loc: {
                      start: {
                          line: 61,
                          column: 4
                      },
                      end: {
                          line: 63,
                          column: 5
                      }
                  },
                  type: "if",
                  locations: [{
                      start: {
                          line: 61,
                          column: 4
                      },
                      end: {
                          line: 63,
                          column: 5
                      }
                  }, {
                      start: {
                          line: 61,
                          column: 4
                      },
                      end: {
                          line: 63,
                          column: 5
                      }
                  }],
                  line: 61
              },
              "4": {
                  loc: {
                      start: {
                          line: 61,
                          column: 8
                      },
                      end: {
                          line: 61,
                          column: 100
                      }
                  },
                  type: "binary-expr",
                  locations: [{
                      start: {
                          line: 61,
                          column: 8
                      },
                      end: {
                          line: 61,
                          column: 66
                      }
                  }, {
                      start: {
                          line: 61,
                          column: 70
                      },
                      end: {
                          line: 61,
                          column: 100
                      }
                  }],
                  line: 61
              },
              "5": {
                  loc: {
                      start: {
                          line: 69,
                          column: 18
                      },
                      end: {
                          line: 69,
                          column: 52
                      }
                  },
                  type: "cond-expr",
                  locations: [{
                      start: {
                          line: 69,
                          column: 44
                      },
                      end: {
                          line: 69,
                          column: 47
                      }
                  }, {
                      start: {
                          line: 69,
                          column: 50
                      },
                      end: {
                          line: 69,
                          column: 52
                      }
                  }],
                  line: 69
              },
              "6": {
                  loc: {
                      start: {
                          line: 72,
                          column: 20
                      },
                      end: {
                          line: 72,
                          column: 29
                      }
                  },
                  type: "default-arg",
                  locations: [{
                      start: {
                          line: 72,
                          column: 27
                      },
                      end: {
                          line: 72,
                          column: 29
                      }
                  }],
                  line: 72
              },
              "7": {
                  loc: {
                      start: {
                          line: 72,
                          column: 31
                      },
                      end: {
                          line: 72,
                          column: 42
                      }
                  },
                  type: "default-arg",
                  locations: [{
                      start: {
                          line: 72,
                          column: 40
                      },
                      end: {
                          line: 72,
                          column: 42
                      }
                  }],
                  line: 72
              },
              "8": {
                  loc: {
                      start: {
                          line: 80,
                          column: 23
                      },
                      end: {
                          line: 80,
                          column: 32
                      }
                  },
                  type: "default-arg",
                  locations: [{
                      start: {
                          line: 80,
                          column: 30
                      },
                      end: {
                          line: 80,
                          column: 32
                      }
                  }],
                  line: 80
              },
              "9": {
                  loc: {
                      start: {
                          line: 80,
                          column: 34
                      },
                      end: {
                          line: 80,
                          column: 45
                      }
                  },
                  type: "default-arg",
                  locations: [{
                      start: {
                          line: 80,
                          column: 43
                      },
                      end: {
                          line: 80,
                          column: 45
                      }
                  }],
                  line: 80
              },
              "10": {
                  loc: {
                      start: {
                          line: 88,
                          column: 21
                      },
                      end: {
                          line: 88,
                          column: 30
                      }
                  },
                  type: "default-arg",
                  locations: [{
                      start: {
                          line: 88,
                          column: 28
                      },
                      end: {
                          line: 88,
                          column: 30
                      }
                  }],
                  line: 88
              },
              "11": {
                  loc: {
                      start: {
                          line: 88,
                          column: 32
                      },
                      end: {
                          line: 88,
                          column: 43
                      }
                  },
                  type: "default-arg",
                  locations: [{
                      start: {
                          line: 88,
                          column: 41
                      },
                      end: {
                          line: 88,
                          column: 43
                      }
                  }],
                  line: 88
              },
              "12": {
                  loc: {
                      start: {
                          line: 96,
                          column: 20
                      },
                      end: {
                          line: 96,
                          column: 29
                      }
                  },
                  type: "default-arg",
                  locations: [{
                      start: {
                          line: 96,
                          column: 27
                      },
                      end: {
                          line: 96,
                          column: 29
                      }
                  }],
                  line: 96
              },
              "13": {
                  loc: {
                      start: {
                          line: 96,
                          column: 31
                      },
                      end: {
                          line: 96,
                          column: 42
                      }
                  },
                  type: "default-arg",
                  locations: [{
                      start: {
                          line: 96,
                          column: 40
                      },
                      end: {
                          line: 96,
                          column: 42
                      }
                  }],
                  line: 96
              },
              "14": {
                  loc: {
                      start: {
                          line: 105,
                          column: 4
                      },
                      end: {
                          line: 105,
                          column: 86
                      }
                  },
                  type: "binary-expr",
                  locations: [{
                      start: {
                          line: 105,
                          column: 4
                      },
                      end: {
                          line: 105,
                          column: 51
                      }
                  }, {
                      start: {
                          line: 105,
                          column: 55
                      },
                      end: {
                          line: 105,
                          column: 86
                      }
                  }],
                  line: 105
              },
              "15": {
                  loc: {
                      start: {
                          line: 111,
                          column: 4
                      },
                      end: {
                          line: 111,
                          column: 83
                      }
                  },
                  type: "binary-expr",
                  locations: [{
                      start: {
                          line: 111,
                          column: 4
                      },
                      end: {
                          line: 111,
                          column: 49
                      }
                  }, {
                      start: {
                          line: 111,
                          column: 53
                      },
                      end: {
                          line: 111,
                          column: 83
                      }
                  }],
                  line: 111
              },
              "16": {
                  loc: {
                      start: {
                          line: 113,
                          column: 12
                      },
                      end: {
                          line: 113,
                          column: 61
                      }
                  },
                  type: "cond-expr",
                  locations: [{
                      start: {
                          line: 113,
                          column: 37
                      },
                      end: {
                          line: 113,
                          column: 42
                      }
                  }, {
                      start: {
                          line: 113,
                          column: 45
                      },
                      end: {
                          line: 113,
                          column: 61
                      }
                  }],
                  line: 113
              },
              "17": {
                  loc: {
                      start: {
                          line: 117,
                          column: 21
                      },
                      end: {
                          line: 117,
                          column: 30
                      }
                  },
                  type: "default-arg",
                  locations: [{
                      start: {
                          line: 117,
                          column: 28
                      },
                      end: {
                          line: 117,
                          column: 30
                      }
                  }],
                  line: 117
              },
              "18": {
                  loc: {
                      start: {
                          line: 117,
                          column: 32
                      },
                      end: {
                          line: 117,
                          column: 43
                      }
                  },
                  type: "default-arg",
                  locations: [{
                      start: {
                          line: 117,
                          column: 41
                      },
                      end: {
                          line: 117,
                          column: 43
                      }
                  }],
                  line: 117
              },
              "19": {
                  loc: {
                      start: {
                          line: 120,
                          column: 9
                      },
                      end: {
                          line: 120,
                          column: 43
                      }
                  },
                  type: "binary-expr",
                  locations: [{
                      start: {
                          line: 120,
                          column: 9
                      },
                      end: {
                          line: 120,
                          column: 28
                      }
                  }, {
                      start: {
                          line: 120,
                          column: 32
                      },
                      end: {
                          line: 120,
                          column: 43
                      }
                  }],
                  line: 120
              },
              "20": {
                  loc: {
                      start: {
                          line: 122,
                          column: 15
                      },
                      end: {
                          line: 122,
                          column: 90
                      }
                  },
                  type: "binary-expr",
                  locations: [{
                      start: {
                          line: 122,
                          column: 15
                      },
                      end: {
                          line: 122,
                          column: 28
                      }
                  }, {
                      start: {
                          line: 122,
                          column: 32
                      },
                      end: {
                          line: 122,
                          column: 62
                      }
                  }, {
                      start: {
                          line: 122,
                          column: 66
                      },
                      end: {
                          line: 122,
                          column: 90
                      }
                  }],
                  line: 122
              }
          },
          s: {
              "0": 0,
              "1": 0,
              "2": 0,
              "3": 0,
              "4": 0,
              "5": 0,
              "6": 0,
              "7": 0,
              "8": 0,
              "9": 0,
              "10": 0,
              "11": 0,
              "12": 0,
              "13": 0,
              "14": 0,
              "15": 0,
              "16": 0,
              "17": 0,
              "18": 0,
              "19": 0,
              "20": 0,
              "21": 0,
              "22": 0,
              "23": 0,
              "24": 0,
              "25": 0,
              "26": 0,
              "27": 0,
              "28": 0,
              "29": 0,
              "30": 0,
              "31": 0,
              "32": 0,
              "33": 0,
              "34": 0,
              "35": 0,
              "36": 0,
              "37": 0,
              "38": 0,
              "39": 0,
              "40": 0,
              "41": 0,
              "42": 0,
              "43": 0,
              "44": 0,
              "45": 0,
              "46": 0,
              "47": 0,
              "48": 0,
              "49": 0,
              "50": 0,
              "51": 0,
              "52": 0,
              "53": 0,
              "54": 0,
              "55": 0,
              "56": 0,
              "57": 0,
              "58": 0,
              "59": 0,
              "60": 0,
              "61": 0,
              "62": 0,
              "63": 0,
              "64": 0,
              "65": 0,
              "66": 0,
              "67": 0,
              "68": 0,
              "69": 0,
              "70": 0,
              "71": 0,
              "72": 0,
              "73": 0,
              "74": 0,
              "75": 0,
              "76": 0,
              "77": 0,
              "78": 0,
              "79": 0,
              "80": 0,
              "81": 0,
              "82": 0,
              "83": 0,
              "84": 0,
              "85": 0,
              "86": 0,
              "87": 0
          },
          f: {
              "0": 0,
              "1": 0,
              "2": 0,
              "3": 0,
              "4": 0,
              "5": 0,
              "6": 0,
              "7": 0,
              "8": 0,
              "9": 0,
              "10": 0,
              "11": 0,
              "12": 0,
              "13": 0,
              "14": 0,
              "15": 0,
              "16": 0,
              "17": 0,
              "18": 0,
              "19": 0,
              "20": 0,
              "21": 0,
              "22": 0
          },
          b: {
              "0": [0, 0],
              "1": [0, 0, 0],
              "2": [0],
              "3": [0, 0],
              "4": [0, 0],
              "5": [0, 0],
              "6": [0],
              "7": [0],
              "8": [0],
              "9": [0],
              "10": [0],
              "11": [0],
              "12": [0],
              "13": [0],
              "14": [0, 0],
              "15": [0, 0],
              "16": [0, 0],
              "17": [0],
              "18": [0],
              "19": [0, 0],
              "20": [0, 0, 0]
          },
          _coverageSchema: "d34fc3e6b8297bcde183f5492bcb8fcb36775295"
      },
          coverage = global[gcv] || (global[gcv] = {});

      if (coverage[path] && coverage[path].hash === hash) {
          return coverage[path];
      }

      coverageData.hash = hash;
      return coverage[path] = coverageData;
  }();

  var globalHeaders = (cov_1fog8hqfea.s[0]++, {
      "Content-Type": "application/json"
  });

  var globalOption = (cov_1fog8hqfea.s[1]++, {
      headers: new Headers(globalHeaders),
      mode: "same-origin",
      credentials: "include",
      cache: "reload",
      redirect: "follow",
      referrer: "client",
      timeout: 30000,
      fetchStart: function fetchStart(param) {
          cov_1fog8hqfea.f[0]++;
          cov_1fog8hqfea.s[2]++;

          return param;
      }
  });

  cov_1fog8hqfea.s[3]++;
  var mergeOptions = function mergeOptions() {
      var _babelHelpers;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
      }

      cov_1fog8hqfea.f[1]++;

      var myOptions = (cov_1fog8hqfea.s[4]++, (_babelHelpers = babelHelpers).extends.apply(_babelHelpers, [{}].concat(args)));
      var resultHealers = (cov_1fog8hqfea.s[5]++, _extends({}, globalHeaders, myOptions.headers));
      var resultOptions = (cov_1fog8hqfea.s[6]++, null);

      cov_1fog8hqfea.s[7]++;
      resultOptions = _extends({}, globalOption, myOptions);
      cov_1fog8hqfea.s[8]++;
      resultOptions.headers = new Headers(resultHealers);

      cov_1fog8hqfea.s[9]++;
      return {
          resultOptions: resultOptions,
          resultHealers: resultHealers
      };
  };

  cov_1fog8hqfea.s[10]++;
  var setOptions = function setOptions(options) {
      cov_1fog8hqfea.f[2]++;
      cov_1fog8hqfea.s[11]++;

      globalOption = mergeOptions(options).resultOptions;
      cov_1fog8hqfea.s[12]++;
      globalHeaders = mergeOptions(options).resultHealers;
  };

  cov_1fog8hqfea.s[13]++;
  var parseJSON = function parseJSON(response) {
      cov_1fog8hqfea.f[3]++;

      var maxErrorRes = (cov_1fog8hqfea.s[14]++, 500);

      cov_1fog8hqfea.s[15]++;
      return response.text().then(function (text) {
          cov_1fog8hqfea.f[4]++;
          cov_1fog8hqfea.s[16]++;

          try {
              cov_1fog8hqfea.s[17]++;

              return JSON.parse(text);
          } catch (err) {
              cov_1fog8hqfea.s[18]++;

              throw new Error("JSON Parse Error: " + err + ", URL: " + response.url + ", " + text.slice(0, maxErrorRes));
          }
      });
  };

  cov_1fog8hqfea.s[19]++;
  var checkStatus = function checkStatus(response) {
      cov_1fog8hqfea.f[5]++;
      cov_1fog8hqfea.s[20]++;

      if ((cov_1fog8hqfea.b[1][0]++, response.status >= 200) && (cov_1fog8hqfea.b[1][1]++, response.status < 300) || (cov_1fog8hqfea.b[1][2]++, response.status == 304)) {
          cov_1fog8hqfea.b[0][0]++;
          cov_1fog8hqfea.s[21]++;

          return response;
      } else {
          cov_1fog8hqfea.b[0][1]++;
          cov_1fog8hqfea.s[22]++;

          throw new Error("HTTP Status Code: " + response.status + ", URL: " + response.url);
      }
  };

  cov_1fog8hqfea.s[23]++;
  var setGetURL = function setGetURL(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_1fog8hqfea.b[2][0]++, {});
      cov_1fog8hqfea.f[6]++;
      cov_1fog8hqfea.s[24]++;

      if ((cov_1fog8hqfea.b[4][0]++, Object.prototype.toString.call(data) !== "[object Object]") || (cov_1fog8hqfea.b[4][1]++, Object.keys(data).length === 0)) {
          cov_1fog8hqfea.b[3][0]++;
          cov_1fog8hqfea.s[25]++;

          return url;
      } else {
          cov_1fog8hqfea.b[3][1]++;
      }

      var list = (cov_1fog8hqfea.s[26]++, []);
      cov_1fog8hqfea.s[27]++;
      for (var key in data) {
          cov_1fog8hqfea.s[28]++;

          list.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
      }
      cov_1fog8hqfea.s[29]++;
      return url + (url.indexOf("?") === -1 ? (cov_1fog8hqfea.b[5][0]++, "?") : (cov_1fog8hqfea.b[5][1]++, "")) + list.join("&");
  };

  cov_1fog8hqfea.s[30]++;
  var getJSON = function getJSON(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_1fog8hqfea.b[6][0]++, {});
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (cov_1fog8hqfea.b[7][0]++, {});
      cov_1fog8hqfea.f[7]++;

      var fetchOption = (cov_1fog8hqfea.s[31]++, mergeOptions({ method: "GET" }, option).resultOptions);
      var fetchURL = (cov_1fog8hqfea.s[32]++, setGetURL(url, data));

      cov_1fog8hqfea.s[33]++;
      return _fetch(fetchURL, fetchOption).then(parseJSON).then(handleFetchPass, handleFetchError);
  };

  cov_1fog8hqfea.s[34]++;
  var deleteJSON = function deleteJSON(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_1fog8hqfea.b[8][0]++, {});
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (cov_1fog8hqfea.b[9][0]++, {});
      cov_1fog8hqfea.f[8]++;

      var fetchOption = (cov_1fog8hqfea.s[35]++, mergeOptions({ method: "DELETE" }, option).resultOptions);
      var fetchURL = (cov_1fog8hqfea.s[36]++, setGetURL(url, data));

      cov_1fog8hqfea.s[37]++;
      return _fetch(fetchURL, fetchOption).then(parseJSON).then(handleFetchPass, handleFetchError);
  };

  cov_1fog8hqfea.s[38]++;
  var postJSON = function postJSON(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_1fog8hqfea.b[10][0]++, {});
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (cov_1fog8hqfea.b[11][0]++, {});
      cov_1fog8hqfea.f[9]++;

      var fetchOption = (cov_1fog8hqfea.s[39]++, mergeOptions({ method: "POST", body: JSON.stringify(data) }, option).resultOptions);
      var fetchURL = (cov_1fog8hqfea.s[40]++, url);

      cov_1fog8hqfea.s[41]++;
      return _fetch(fetchURL, fetchOption).then(parseJSON).then(handleFetchPass, handleFetchError);
  };

  cov_1fog8hqfea.s[42]++;
  var putJSON = function putJSON(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_1fog8hqfea.b[12][0]++, {});
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (cov_1fog8hqfea.b[13][0]++, {});
      cov_1fog8hqfea.f[10]++;

      var fetchOption = (cov_1fog8hqfea.s[43]++, mergeOptions({ method: "PUT", body: JSON.stringify(data) }, option).resultOptions);
      var fetchURL = (cov_1fog8hqfea.s[44]++, url);

      cov_1fog8hqfea.s[45]++;
      return _fetch(fetchURL, fetchOption).then(parseJSON).then(handleFetchPass, handleFetchError);
  };

  cov_1fog8hqfea.s[46]++;
  var handleFetchPass = function handleFetchPass(data) {
      cov_1fog8hqfea.f[11]++;
      cov_1fog8hqfea.s[47]++;

      (cov_1fog8hqfea.b[14][0]++, typeof globalOption.fetchSuccess === "function") && (cov_1fog8hqfea.b[14][1]++, globalOption.fetchSuccess(data));

      cov_1fog8hqfea.s[48]++;
      return data;
  };

  cov_1fog8hqfea.s[49]++;
  var handleFetchError = function handleFetchError(error) {
      cov_1fog8hqfea.f[12]++;
      cov_1fog8hqfea.s[50]++;

      (cov_1fog8hqfea.b[15][0]++, typeof globalOption.fetchError === "function") && (cov_1fog8hqfea.b[15][1]++, globalOption.fetchError(error));

      cov_1fog8hqfea.s[51]++;
      error = error instanceof Error ? (cov_1fog8hqfea.b[16][0]++, error) : (cov_1fog8hqfea.b[16][1]++, new Error(error));
      cov_1fog8hqfea.s[52]++;
      throw error;
  };

  cov_1fog8hqfea.s[53]++;
  var getJSONP = function getJSONP(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_1fog8hqfea.b[17][0]++, {});
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (cov_1fog8hqfea.b[18][0]++, {});
      cov_1fog8hqfea.f[13]++;

      var callbackValue = (cov_1fog8hqfea.s[54]++, "jsonp" + +new Date());
      var jsonpElement = (cov_1fog8hqfea.s[55]++, document.createElement("script"));
      cov_1fog8hqfea.s[56]++;
      data[(cov_1fog8hqfea.b[19][0]++, option.callbackName) || (cov_1fog8hqfea.b[19][1]++, "_callback")] = callbackValue;
      var fetchURL = (cov_1fog8hqfea.s[57]++, setGetURL(url, data));
      var head = (cov_1fog8hqfea.s[58]++, (cov_1fog8hqfea.b[20][0]++, document.head) || (cov_1fog8hqfea.b[20][1]++, document.querySelector("head")) || (cov_1fog8hqfea.b[20][2]++, document.documentElement));

      cov_1fog8hqfea.s[59]++;
      jsonpElement.setAttribute("src", fetchURL);
      cov_1fog8hqfea.s[60]++;
      jsonpElement.setAttribute("charset", "utf-8");
      cov_1fog8hqfea.s[61]++;
      jsonpElement.setAttribute("defer", true);
      cov_1fog8hqfea.s[62]++;
      jsonpElement.setAttribute("async", true);
      cov_1fog8hqfea.s[63]++;
      head.insertBefore(jsonpElement, head.firstChild);

      cov_1fog8hqfea.s[64]++;
      return new Promise(function (resolve, reject) {
          cov_1fog8hqfea.f[14]++;
          cov_1fog8hqfea.s[65]++;

          window[callbackValue] = function (payload) {
              cov_1fog8hqfea.f[15]++;
              cov_1fog8hqfea.s[66]++;

              resolve(payload);
              cov_1fog8hqfea.s[67]++;
              head.removeChild(jsonpElement);
          };

          cov_1fog8hqfea.s[68]++;
          jsonpElement.onerror = function () {
              cov_1fog8hqfea.f[16]++;
              cov_1fog8hqfea.s[69]++;

              reject();
              cov_1fog8hqfea.s[70]++;
              head.removeChild(jsonpElement);
          };
      });
  };

  cov_1fog8hqfea.s[71]++;
  var _fetch = function _fetch(url, fetchOption) {
      cov_1fog8hqfea.f[17]++;
      cov_1fog8hqfea.s[72]++;

      return new Promise(function (resolve, reject) {
          cov_1fog8hqfea.f[18]++;

          var timer = (cov_1fog8hqfea.s[73]++, 0);

          cov_1fog8hqfea.s[74]++;
          Promise.resolve(fetchOption.fetchStart({
              url: url,
              fetchOption: fetchOption
          })).then(function (param) {
              cov_1fog8hqfea.f[19]++;

              var myRequest = (cov_1fog8hqfea.s[75]++, new Request(param.url, param.fetchOption));

              cov_1fog8hqfea.s[76]++;
              timer = setTimeout(function () {
                  cov_1fog8hqfea.f[20]++;

                  var error = (cov_1fog8hqfea.s[77]++, new Error(param.url + " timeout"));
                  cov_1fog8hqfea.s[78]++;
                  error.fetchOption = param.fetchOption;
                  cov_1fog8hqfea.s[79]++;
                  reject(error);
              }, param.fetchOption.timeout);
              cov_1fog8hqfea.s[80]++;
              return fetch(myRequest);
          }).then(function (response) {
              cov_1fog8hqfea.f[21]++;
              cov_1fog8hqfea.s[81]++;

              clearTimeout(timer);
              cov_1fog8hqfea.s[82]++;
              response.fetchOption = fetchOption;
              cov_1fog8hqfea.s[83]++;
              resolve(response);
          }, function (error) {
              cov_1fog8hqfea.f[22]++;
              cov_1fog8hqfea.s[84]++;

              clearTimeout(timer);
              cov_1fog8hqfea.s[85]++;
              error.url = url;
              cov_1fog8hqfea.s[86]++;
              error.fetchOption = fetchOption;
              cov_1fog8hqfea.s[87]++;
              reject(error);
          });
      }).then(checkStatus);
  };

  var main = {
      setOptions: setOptions,
      getJSONP: getJSONP,
      getJSON: getJSON,
      postJSON: postJSON,
      putJSON: putJSON,
      deleteJSON: deleteJSON
  };

  return main;

})));
