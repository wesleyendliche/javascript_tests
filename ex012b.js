var now = new Date()
var hour = now.getHours()
console.log(`It is ${hour} o'clock.`)
if (hour < 12) {
    console.log('Good Morning!')
} else if (hour <= 18) {
    console.log('Good Afternoon!')
} else if (hour <= 22) {
    console.log('Good Evening')
} else {
    console.log('Good Night!')
}