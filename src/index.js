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

    let decodedWord = [];
    for (let i = 0; i < expr.length; i = i + 10){
        let encodedLetter = expr.slice(i, i + 10);
        let ltrx = [];
        let y = 0;

        if( encodedLetter[0] !== '*'){
            for (let j = 0; j < encodedLetter.length; j = j + 2){
                if(encodedLetter[j] === '1' && encodedLetter[j+1] === '0'){
                    ltrx[y] = '.';
                    y++;
                } else if(encodedLetter[j] === '1' && encodedLetter[j+1] === '1'){
                    ltrx[y] = '-';
                    y++;
                }   
            }
            let key = ltrx.toString().replace(/,/g, '');
            decodedWord.push(MORSE_TABLE[key]);
        } else {
            decodedWord.push(' ');
        }
    }
    return decodedWord.toString().replace(/,/g, '');
}

module.exports = {
    decode
}