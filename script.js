//your code here

function majorityElement(n) {
    let candidate = null;
    let count = 0;

    for (let num of A) {
        if (count === 0) {
            candidate = num;
        }

        if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
}