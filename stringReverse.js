

const reverseString = (str) => {

    if(typeof str !== 'string') {
        return 'Input must be a string';
    }

    return str.split('').reverse().join('')
}

const r1 = reverseString("Asadullah Al Galib")
console.log(r1);