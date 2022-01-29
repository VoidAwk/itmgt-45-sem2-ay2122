/**
 * Assignment 3
 *
 * This assignment covers your mastery over the basic constructs of
 * Javascript. It engages your ability to transform
 * data without affecting anything outside the program.
 *
 * If you can do this assignment, then you can feel confident in your
 * Javascript abilities.
 */


/**
 * Item 1. 
 * Shift Letter. 12 points.
 *
 * Shift a letter right by the given number.
 * Wrap the letter around if it reaches the end of the alphabet.
 * 
 * Examples:
 * shiftLetter("A", 0) -> "A"
 * shiftLetter("A", 2) -> "C"
 * shiftLetter("Z", 1) -> "A"
 * shiftLetter("X", 5) -> "C"
 * shiftLetter(" ", _) -> " "
 * 
 * *Note: the single underscore `_` is used to acknowledge the presence
 * of a value without caring about its contents.
 * 
 * @param {string} letter - a single uppercase English letter, or a space.
 * @param {number} shift - the number by which to shift the letter.
 * @returns {string} - the letter, shifted appropriately, if a letter.
 *  A single space if the original letter was a space.
 */
function shiftLetter(letter, shift) {
    // Write your code below this line
}

/**
 * Item 2.
 * Caesar Cipher. 18 points.
 * 
 * Apply a shift number to a string of uppercase English letters and spaces.
 * 
 * @param {string} message - a string of uppercase English letters and spaces.
 * @param {number} shift - the number by which to shift all the letters.
 * @returns {string} - the message, shifted appropriately.
 */
function caesarCipher(message, shift) {
    // Write your code below this line
}

/**
 * Item 3.
 * Shift By Letter. 12 points.
 *
 * Shift a letter to the right using the number equivalent of another letter.
 * The shift letter is any letter from A to Z, where A represents 0, B represents 1, 
 * ..., Z represents 25.
 *
 * Examples:
 * shiftByLetter("A", "A") -> "A"
 * shiftByLetter("A", "C") -> "C"
 * shiftByLetter("B", "K") -> "L"
 * shiftByLetter(" ", _) -> " "
 * 
 * @param {string} letter - a single uppercase English letter, or a space
 * @param {string} letter_shift - a single uppercase English letter.
 * @returns {string} - the letter, shifted appropriately.
 */
function shiftByLetter(letter, shift_letter) {
    // Write your code below this line
}


/**
 * Item 4.
 * Vigenere Cipher. 18 points.
 * 
 * Encrypts a message using a keyphrase instead of a static number.
 * Every letter in the message is shifted by the number represented by the 
 * respective letter in the key.
 * Spaces should be ignored.
 * 
 * Example:
 * vigenereCipher("A C", "KEY") -> "K A"
 * 
 * If needed, the keyphrase is extended to match the length of the key.
 * If the key is "KEY" and the message is "LONGTEXT",
 * the key will be extended to be "KEYKEYKE".
 * 
 * @param {string} message - a string of uppercase English letters and spaces.
 * @param {string} key - a string of uppercase English letters. Will never be longer than the message.
 *  Will never contain spaces.
 * @returns {string} - the message, shifted appropriately.
 */
function vigenereCipher(message, key) {
    // Write your code below this line
}
