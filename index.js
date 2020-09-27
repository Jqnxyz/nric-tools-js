/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* -- Usage

verifyChecksum('S0000005A') -> returns true/false (valid/invalid)

----------------*/

const validBeginLetters = {
    'S': '',
    'T': '',
    'F': '',
    'G': ''
};
const validCheckLetters = {
    'A': '',
    'B': '',
    'C': '',
    'D': '',
    'E': '',
    'F': '',
    'G': '',
    'H': '',
    'I': '',
    'Z': '',
    'J': ''
};

const letterWeights = [2, 7, 6, 5, 4, 3, 2];

// Singaporean

const checkLettersS = {
    '10': 'A',
    '9': 'B',
    '8': 'C',
    '7': 'D',
    '6': 'E',
    '5': 'F',
    '4': 'G',
    '3': 'H',
    '2': 'I',
    '1': 'Z',
    '0': 'J'
}

const checkLettersT = {
    '10': 'H',
    '9': 'I',
    '8': 'Z',
    '7': 'J',
    '6': 'A',
    '5': 'B',
    '4': 'C',
    '3': 'D',
    '2': 'E',
    '1': 'F',
    '0': 'G'
}

// Passes

const checkLettersF = {
    '10': 'K',
    '9': 'L',
    '8': 'M',
    '7': 'N',
    '6': 'P',
    '5': 'Q',
    '4': 'R',
    '3': 'T',
    '2': 'U',
    '1': 'W',
    '0': 'X'
}

const checkLettersG = {
    '10': 'T',
    '9': 'U',
    '8': 'W',
    '7': 'X',
    '6': 'K',
    '5': 'L',
    '4': 'M',
    '3': 'N',
    '2': 'P',
    '1': 'Q',
    '0': 'R'
}

const checkLetterObjects = {
    'S': checkLettersS,
    'T': checkLettersT,
    'F': checkLettersF,
    'G': checkLettersG
}

function verifyChecksum(nric) {
    if (typeof(nric) !== 'string' || nric.length !== 9) {
        return false;
    } else {
        nric = nric.toUpperCase();
        let nricBeginLetter = nric.substr(0, 1);
        let nricCheckLetter = nric.substr(8, 1);
        let nricId = nric.substr(1, 7).split("");

        // Check letters
        if (nricBeginLetter in validBeginLetters && nricCheckLetter in validCheckLetters) {
            // Calculate check letter
            let nricModTotal = 0;
            nricId.forEach( function(nricElement, nricIndex) {
                nricModTotal += nricElement*letterWeights[nricIndex]
            });
            let mapDigit = nricModTotal % 11;
            let calculatedCheckLetter = checkLetterObjects[nricBeginLetter][mapDigit];

            // Return
            if (calculatedCheckLetter == nricCheckLetter) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

exports.verifyChecksum = verifyChecksum;

