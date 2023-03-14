function validateEmail(email) {
    if(!email === '') return false;
    if(typeof email !== 'string') return false;
    if(!email.includes('@') || email[0] === '@') return false;
    function moreThanTwo (email) {
        let result = email.split('')
        let numOf = 0
        for (const key in result) {
            if(result[key] === '@') {
                numOf++;
            }
        }
        return numOf;
    }
    if(moreThanTwo(email) > 1) return false;
    return true
}

function emailLength(email) {
    if(email.length < 5) {
        return false
    } else {
        return true
    }
}