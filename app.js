let x = Math.floor(Math.random()*10)+1

while (true){
    let y = prompt('Guess a number (press 1 to exit)')
    y=Number(y)
    if (y==1){
        break;
    }else if (x==y){
        console.log(y)
        console.log('You won the number was:' + x)
        break
    }else if (x > y){
        console.log(y)
        console.log('too low guess a higher number')
    }else if (x > y){
        console.log(y)
        console.log('too high guess a lower number')
    }
}


