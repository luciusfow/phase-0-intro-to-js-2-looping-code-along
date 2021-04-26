// Code your solutions in this file
// const person = ['Lisa', 'Kaitlin', 'Jan']
// const suprise = "surprise"
// function writeCards(person, surprise){
//     let noteArray = []
//     for (let i = 0; i < person.length; i++){
//       let note = `Thank you, ${person[i]}, for the wonderful ${surprise} gift!`
//       noteArray.push(surprise)
//     } 
//     return noteArray
// }
const person = [ 'Lisa', 'Kaitlin', 'Jan' ]
const surprise = "surprise"
function writeCards(person, surprise){
    let messageArray = []
    for (let i = 0; i < person.length; i++){
     let message = `Thank you, ${person[i]}, for the wonderful ${surprise} gift!`
        messageArray.push(message)
    }
    return messageArray
}
function countDown(num){
    let numOG = num 
    while (numOG >= 0){
        console.log(numOG--)
    }
}