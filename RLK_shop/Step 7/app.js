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

/**
 * Подключаем модуль MySql
 */
let mysql = require('mysql2');
// const db = requery('C:/Program Files/MySQL/MySQL Server 8.0/bin');
/**
 * Настраиваем модуль
 */

 let con = mysql.createConnection({
     host: "localhost",
     user: "root",
     password: "root",
     database: "rlk_shop"
 });




//Далее, чтобы запустить первое приложение нужно:
//get - метод обращения, первый параметр url адрес куда идет обращение (путь)
// у функции будет два параметра запрос и ответ
app.get('/',function(req,res){
    con.query(
        `SELECT * FROM goods`,
        function(error,result){
            if(error) throw err;
            console.log(result);
        }
        
    );

    //console.log(req.params);
    //ответим
    //res.end('hello');
   res.render('index');
}); 

app.get('/cat',function(req,res){
  
});

app.listen(port ,function(){
    console.log('node express work on 3000');
});
