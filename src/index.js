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
	let arrExpr = expr.split('')
	let letterDashDot =  ''
	let resStr = []
	console.log(expr.length);
	for (let i = 0; i< expr.length; i+= 10) {
		let letter = arrExpr.splice(0,10)
		console.log(letter);
		if (letter.join('') === '**********') {
			resStr.push(' ')
		}
	
		for (let j = 0; j< 5; j++) {
			let symbols = letter.splice(0,2)
			// console.log(symbols);
			if (symbols.join('') === '10') {
				letterDashDot = letterDashDot + '.'
			}
			if (symbols.join('') === '11') {
				letterDashDot = letterDashDot + '-'
			}
			
		}
		console.log(letterDashDot);
		resStr.push(MORSE_TABLE[letterDashDot])
		letterDashDot = ''
	}	
	
	
	
	return resStr.join('')
}

module.exports = {
    decode
}