function caract(string1, string2) {
    string1 = string1.toLowerCase()
    string2 = string2.toLowerCase()

    for (let i = 0; i < string1.length; i++) {
        if(!string2.includes(string1[i])) {
            return false
        }
    }
    return true
}

console.log(caract('Olá', 'mundo!'))
console.log(caract("abc", "cab")) 
console.log(caract("abc", "def"))     
console.log(caract("AAB", "ba"))      
