function random (min,max) {
    return min + Math.random() * (max - min + 1);
}
console.log (random (100, 1000));


function random (min,max, count) {
    for (let i = 0; i < count; i++) {
    return min + Math.random() * (max - min + 1);
}
console.log (random (100, 1000));


function random(min, max, count) {
    for (let i = 0; i < count; i++) {
        let random = Math.floor(min + Math.random() * (max - min + 1));
    }

    return min + Math.random () * (max - min + 1);
}

console.log(random(100, 1000, 5)); 
