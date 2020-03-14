module.exports = function toReadable(number) {
    if (number === 0) return "zero";

    const tokens = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
    };

    let str = String(number);
    let result = "";
    let hundreds = "";

    if (str.length === 3) {
        hundreds = `${tokens[str[0]]} hundred`;
        str = str.slice(1);
    }

    if (!tokens[str]) {
        const dozens = tokens[str[0]] ? `${tokens[str[0] * 10]}` : "";
        const units = tokens[str[1]];

        if (dozens === "") result = `${hundreds} ${units}`;
        else result = `${hundreds} ${dozens} ${units}`;
    }

    if (tokens[str]) result = `${hundreds} ${tokens[str]}`;

    if (str === "00") return hundreds;

    return result.trim();
}
