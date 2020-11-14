//подключаем установленный модуль через команду requre 
let express = require('express');
//Новая версия подключения 
//"type":"module", - добавить в package.json
//import express from "express";

//создаем новый объект экземпляр класса express
//далее все манипуляции будут производится с помощью 
//этого приложения app (его имя может быть любое)
let app = express();
let port  = 3000;

//public - имя папки где хранится статика
app.use(express.static('public'));
//Задаем шаблонизатор
//прописваем путь до папки
//app.set('views','./views');
//Запуск шаблонизатора
app.set('view engine','pug');


app.listen(port ,function(){
    console.log('node express work on 3000');
});

//Далее, чтобы запустить первое приложение нужно:
//get - метод обращения, первый параметр url адрес куда идет обращение (путь)
// у функции будет два параметра запрос и ответ
app.get('/',function(req,res){
    //console.log(req.params);
    //ответим
    //res.end('hello');
   res.render('index');
}); 

app.get('/cat',function(req,res){
  
});
