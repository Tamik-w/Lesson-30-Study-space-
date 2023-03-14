function validateEmail(email) {
    if(!email === '') return false;
    if(typeof email !== 'string') return false;
    if(!email.includes('@') || email[0] === '@') return false;
    return true
}

function emailLength(email) {
    if(email.length < 5) {
        return false
    } else {
        return true
    }
}