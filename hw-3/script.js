 // Задание 1 
 let password =  'пароль' ;

 let user = prompt ( 'Введите пароль' );
 
 if (password === user ) {
     alert  ('Пароль введен верно'); 
 } else { 
     alert  ('Пароль введен неправильно') ;
 };
 
 
 // задание 2
 let c = 5 ;
 
 console.log (c >= 0 && c <= 10)?  'Верно' : 'Неверно' ;
 
 
 // задание 3
 let d = 23 ;
 let e = 120 ;
 
 console.log ( d > 100 || e > 100)?  'Верно'  :  'Неверно' ;
        
 
 // задание 4
 let a = '2';
 let b = '3';
 
 alert (Numbera(a) + Numberb(b));
 
 // задание 5 
 let monthNumber =Number (prompt('Введите номер месяца, для определения сезона'));
 
 switch (monthNumber) {
     case 1:
     case 2:
     case 12:    
         alert ('зима')
         break;
     case 3:        
     case 4:        
     case 5:
         alert ('весна')
         break;
     case 6:       
     case 7:        
     case 8:
         alert ('лето')
         break;                
     case 9:
     case 10:
     case 11:
         alert ('осень')
         break;  
     default: 
     alert ('Ты слегка ошибся')
         break;
 }
 
 // задание 6 ; сделано 
 
 // задание 7 
 
 let number = Number (prompt ('Пожалуйста, введите любое число'))
 
 if (Number.isNaN(+number)) {
     alert ('вы ввели не число')
 }else {
    if  (number % 2===0) {
         alert ('Число четное')
     } else {
         alert ('Число нечетное')
     }
 }
 
 // задани 8
 
 let clientOS = Number (prompt('Введите 0 если у вас IOS или 1 если у вас Android'));
 
 if (clientOS === 0) {
   console.log("Установите версию приложения для iOS по ссылке");
 } else if ( clientOS === 1) {
   console.log("Установите версию приложения для Android по ссылке");
 } else {
   console.log("Неверное значение переменной clientOS");
 }
 
 //  задание 9 
 
 
 let clientDeviceYear = Number (prompt('Введите год выпуска телефона?'));
 
 if (clientOS === 0) {
   if (clientDeviceYear >= 2015) {
     console.log("Установите версию приложения для iOS по ссылке");
   } else {
     console.log("Установите облегченную версию приложения для iOS по ссылке");
   }
 } else if (clientOS === 1) {
   if (clientDeviceYear >= 2015) {
     console.log("Установите версию приложения для Android по ссылке");
   } else {
     console.log("Установите облегченную версию приложения для Android по ссылке");
   }
 } else {
   console.log("Неверное значение переменной clientOS");
 }
 