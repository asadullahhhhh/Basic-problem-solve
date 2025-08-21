

const countVowels = (str) => {
    const parseStr = str.toLowerCase()
    const vowel = 'aeiou'

    let count = 0

    for(let i = 0; i < parseStr.length; i++){
        if(vowel.indexOf(parseStr[i]) !== -1){
            count++
        }
    }

    return count
}

const vl = countVowels("Asadullah")
console.log(vl);