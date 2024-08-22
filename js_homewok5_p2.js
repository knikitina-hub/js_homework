/// Сума вартості послуг

var services = {
    "стрижка": 60,
    "гоління": 80,
    "Миття голови": 100,

    price: function() {
        let total = 0;
        for (let service in this) {
            if (typeof this[service] === 'number') {
                total += this[service];
            }
        }
        return total + ' грн';
    },

    minPrice: function() {
        let min = 1000; 
        for (let service in this) {
            if (typeof this[service] === 'number') {
                if (this[service] < min) {
                    min = this[service];
                }
            }
        }
        return min + ' грн';
    },

    maxPrice: function() {
        let max = 0; 
        for (let service in this) {
            if (typeof this[service] === 'number') {
                if (this[service] > max) {
                    max = this[service];
                }
            }
        }
        return max + ' грн';
    }
};

services['Розбити скло'] = 200;

console.log("Загальна вартість: " + services.price());
console.log('Мінімальна вартість: ' + services.minPrice()); 
console.log('Максимальна вартість: ' + services.maxPrice());
