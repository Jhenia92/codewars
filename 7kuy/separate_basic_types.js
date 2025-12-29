/* Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

keep order of values like in input array
if type is not presented in input, no corresponding property are expected
So, for this input: */

function separateTypes(input) {
    let obj = {}
    for (let i = 0; i < input.length; i++) {
        let curry = input[i];
        if (typeof curry === 'number') {
            if (obj.hasOwnProperty('number')) { obj.number.push(curry); }
            else {
                obj.number = [];
                obj.number.push(curry);
            }
        } else if (typeof curry === 'string') {
            if (obj.hasOwnProperty('string')) { obj.string.push(curry); }
            else {
                obj.string = [];
                obj.string.push(curry);
            }
        } else if (typeof curry === 'boolean') {
            if (obj.hasOwnProperty('boolean')) { obj.boolean.push(curry); }
            else {
                obj.boolean = [];
                obj.boolean.push(curry);
            }
        }
    }
    return obj
}

console.log(separateTypes(['a', 1, 2, false, 'b']));
