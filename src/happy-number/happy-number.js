import {log} from "debug";

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
    n = n.toString();
    let sum = 0;

    for (let i = 0; i < n.length; i++) {
        sum += Math.pow(Number(n[i]), 2);
    }

    if (sum === 1) {
        return true;
    } else if (sum === 4) {
        // 4 — признак цикла: если дошли до 4, значит зациклились
        return false;
    } else {
        return isHappy(sum);
    }
};
// с использование  set
// задумка есди число повторяется то попали в бексконечный цикл

function isHappy2(n) {
    const seen = new Set();

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        let sum = 0;
        for (let digit of n.toString()) {
            sum += Math.pow(Number(digit), 2);
        }
        n = sum;
    }

    return n === 1;
}


console.time("happy-number");

console.assert(isHappy(19) === true, "19");
console.assert(isHappy(2) === false, "2");
console.assert(isHappy(1111111) === true, "1111111");

console.timeEnd("happy-number");
