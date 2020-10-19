const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let output = '';

    for (let i = 0; i < expr.length; i += 10) {

        let abcNum = expr.substring(i, i + 10);
        let keyMorse = '';

        if (abcNum === '**********') {
            output += ' ';
            continue;
        }
        for (let j = 0; j < 10; j += 2) {
            let char = abcNum.substring(j, j + 2);

            if (char === '10')
            {
                keyMorse += '.';
            } else if (char === '11') {
                keyMorse += '-';
            }
        }
        output += (MORSE_TABLE[keyMorse]);
    }

    return output;
}

module.exports = {
    decode
}
