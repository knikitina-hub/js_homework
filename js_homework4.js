function random(min, max, count) {
    let  pair = 0; 
    let  notpair= 0;  
    for (let i = 0; i < count; i++) {
        let randomNum = Math.floor(min + Math.random() * (max - min + 1));
        console.log(randomNum); 
        if (randomNum % 2 === 0) {
            pair++;
        } else {
            notpair++;
        }
    }

    let pairPercentage = (pair / count) * 100;
    let notpairPercentage = (notpair / count) * 100;

console.log ('Парних чисел: ' + pair + '(' + pairPercentage + '%)');
console.log ('Непарних чисел: ' + notpair + "(" + notpairPercentage + '%)');
console.log('Всього чисел: ' + count);
}

random(100, 1000, 5);