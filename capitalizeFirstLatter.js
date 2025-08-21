
const capitalizeFirstLetter = (str) => {
    if(typeof str !== 'string' ) return "Input must be a string";

    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

const str = capitalizeFirstLetter("asadullah al galib");
console.log(str); 