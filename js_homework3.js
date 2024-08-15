
let x = 4;
let y = 3;
do {
    console.log('result =' + (x * x * x)); 
    x++;  
} while (x <= 4);

// варіант 1

for (let x = 4; x <= 4; x ++) {
   let y = 3 ; 
    console.log ('result = ' + (x * x * x));
}
// варіант 2