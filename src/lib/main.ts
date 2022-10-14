export type XCaesarOptions = {
    readonly shift: number
    readonly alphabet?: string
}

const defaults = {
    alphabet: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
}


const Translator = (sourceAlphabet: string[], targetAlphabet: string[]) => (message: string) => message
    .split('')
    .map((c) => targetAlphabet[sourceAlphabet.indexOf(c)] || c)
    .join('');

export const XCaesar = (options: XCaesarOptions) => {
    const shift = options.shift
    const alphabetOriginal = (options.alphabet || defaults.alphabet).split("")
    const alphabetShifted = alphabetOriginal.map((_, i) => alphabetOriginal[modulo(i + shift, alphabetOriginal.length)]);
    return {
        shift,
        encrypt: Translator(alphabetOriginal, alphabetShifted),
        decrypt: Translator(alphabetShifted, alphabetOriginal),
        alphabet: { original: alphabetOriginal, shifted: alphabetShifted }
    };
};


function modulo(x: number, y: number) {
    const r = x % y;
    return r < 0 ? r + y : r;
};