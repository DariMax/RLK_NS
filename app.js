//подключаем установленный модуль через команду requre 
let express = require('express');

//создаем новый объект экземпляр класса express
//далее все манипуляции будут производится с помощью 
//этого приложения app (его имя может быть любое)
let app = express();
let port  = 8080;

//public - имя папки где хранится статика
app.use(express.static('public'));

app.listen(port ,function(){
    console.log('node express work on 8080');
});

//Далее, чтобы запустить первое приложение нужно:
//get - метод обращения, первый параметр url адрес куда идет обращение
// у функции будет два параметра запрос и ответ
app.get('/',function(req,res){
    //ответим
    //res.end('hello');
      res.render('index.html');
}); 

app.get('/cat',function(req,res){
    // res.end('cat');
    res.render('category.html');
});