//Count the number of prime numbers less than a non-negative number, n.
// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.


/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let counter = 0;

    let result = Array(n).fill(true);

    result[0] = false;
    result[1] = false;

    for (let i = 2; i*i < n; i++) {
        if(result[i]) {
            for (let j = i*i; j < n; j+= i) {
                result[j] = false;
            }
        }
    }
    return result.filter(el => el).length;
};
