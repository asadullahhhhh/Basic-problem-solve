
const palindrom = str => {
    const parseStr = str.toLowerCase()

    const reverseStr = parseStr.split('').reverse().join('')

    if(reverseStr === parseStr){
        return true
    }else{
        return false
    }
}


const strExam = palindrom("Madam")
console.log(strExam);

const strExam2 = palindrom("Galib")
console.log(strExam2);