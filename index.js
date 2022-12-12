function writeCards(name, occasion) {
    let messages = [];
    
    for (let i = 0; i < name.length; i++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful ${occasion} gift!`);
    }
    return messages;
};

function countDown() {
    for (let num = 10; num > -1; num--){
        console.log(num);
    }
}