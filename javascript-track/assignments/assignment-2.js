/**
 * Assignment 2
 * 
 * This assignment covers your intermediate proficiency with Javascript.
 * It engages your ability to transform data without affecting anything outside the program.
 * 
 * This assignment places heavy emphasis on Javascript data structures.
 */

/**
 * Item 1.
 * Specific Filter. 2 points.
 * 
 * Returns the elements of an array that are greater than the integer 50.
 * This is called "filtering" each number based on whether it is greater than 50.
 * Filtering is a veryc ommon pattern in high-level (i.e., human-readable) programming.
 * 
 * For this number:
 *  1. The parameter l will be an array of either floats or integers.
 * 
 * @param {array} l - an array of numbers
 * @returns {array} - an array of elements in l that are greater than the integer 50
 */
function specificFilter(l) {
    // Write your code below this line
}

/**
 * Item 2.
 * General Filter. 3 points.
 * 
 * Returns the elements of an array that return True when passed to a filtering function.
 * This is how general filters are done.
 * 
 * For this number:
 *  1. The parameter l will be an array of any data type.
 *  2. The filter_function is just a function that has been passed as an argument to the generalFilter
 *      function. It accepts a single argument and returns either true or false.
 * 
 * @param {array} l - an array of any data type
 * @param {function} filterFunction - a function which accepts any data type and returns bool
 * @returns {array} - an array of elements in l that return true when passed to filterFunction
 */
function generalFilter(l, filterFunction) {
    // Write your code below this line
}

/**
 * Item 3.
 * Specific Map. 2 points.
 * 
 * Accepts an array of numbers. Returns another array which contains the squares of the numbers.
 * This is called "mapping" each number to its square. Mapping is a very common pattern in
 *  high-level (i.e., human-readable) programming.
 * 
 * For this number:
 *  1. The parameter l will be a list of either floats or ints
 * 
 * Example:
 * specificMap([1, 2, 3, 4, 5]) -> [1, 4, 9, 16, 25]
 * 
 * @param {array} l - an array of numbers (floats or ints)
 * @returns {array} - an array of the squares of the elements in l
 */
function specificMap(l) {
    // Write your code below this line
}

/**
 * Item 4.
 * General Map. 3 points.
 * 
 * Accepts an array of any data type. Returns another array which uses a function to map the first array's
 *  elements to the second array.
 * This is how general maps are done.
 * 
 * @param {array} l - an array of any data type
 * @param {function} mapFunction - a function which accepts one argument and returns any data type
 * @returns {array} - an array which contains the mapped elements of l
 */
function general_map(l, mapFunction) {
    // Write your code below this line
}

