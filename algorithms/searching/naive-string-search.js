/* Pseudocode
    1. Loop over longer string.
    2. Loop over shorter string.
    3. If the characters don't match, break out of the inner loop.
    4. If the characters do match, keep going
    5. If the inner loop is completed and find a match, increment the count of matches.
    6. Return the count.
 */

function naiveStringSearch(long, short) {
    let incidences = 0;
    
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            console.log(short[j], long[i+j])
            if (short[j] !== long[i+j]) {
                console.log("Break!")
                break;
            }
            if (j === short.length -1) {
                console.log("=== Match!")
                incidences++;
            }
        }
    }
    
    return incidences;
}

console.log(naiveStringSearch("lorie loled", "lol"));
