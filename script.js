//By using Boyer–Moore Voting Algorithm

function majorityElement(n) {
    let candidate = null;
    let count = 0;

    for (let num of n) {
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