var str = "Wonderful Joyful Moment LAptop Time Task Apple Car";
var pattern = /[^Aa\s]{6,}/g;
var matches = str.match(pattern);
console.log ("Слова без А: " + matches); /// ДЗ 10.2. Без А

/////// ДЗ 10.1. Параноя

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

var pattern = /[\w.+]+(\.[\w\d]+)*@(gmail|yahoo)\.com$/;
var correctEmails = arr.filter(item => pattern.test(item.email));
console.log(correctEmails);


