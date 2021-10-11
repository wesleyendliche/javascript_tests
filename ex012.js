var age = 28
console.log(`You are ${age} years old.`)
if (age < 16) {
    console.log('You do not vote.')
} else if (age < 18 || age > 65) {
    console.log('Optional voting.')
} else if (age >= 18) {
    console.log('You vote.')
}