/*console.log('Silence is golden');
let v = 1+2-4;
console.log(v);
let a = 2;
let b = 3;
let d = a ** a;
console.log (( a+4*b)*( a - 3 *b) + d );
a = +prompt('первое число')
b = +prompt('второе число')
alert( a + b)
a = +prompt('квадрат');
alert(a**2)
b = +prompt('куб')
alert(b**3);*/
/*let a = 2;
c = prompt('введите число');
if ( c > 3 ) {c = a + 10} else { c = a - 10};
alert(c);
let n = prompt('введите число');
if(n < 7){
    console.log('Yes')
}
if(n > 10){
    console.log('No')
}
if(n == 9){
    console.log('Eror')
}*/
/*выводим число от 1 до10
let s = 'you are welcone';
for( let n = 1; n<=10; n++){
    console.log(s);
}
let x = 1001;
for( let i = 1001; i <=1025; i = i+3 ){
    console.log(i);
}*/
/*делаем ёлку
let stars = '*';
for( let i = 1; i<=6; i++){
    console.log(stars);
    stars = stars + '*'
}*/
/*выводим строки с разными строками по очереди
let x = '****';
let s = '*******';
for( let n=1; n<=10; n++ ){
    if(n % 2 == 0){
    console.log(x);
    }else{
        console.log(s);
    }
}*/
/*выводим 1.2,1.4.... 2.8
let x = 1.2;
for( let i = 1.2; i <=2.81; i = i+0.2 ){
    console.log(i);
}*/
/*таблица умножения
for(let i = 1; i<=10; i++){
    for (let n = 1; n<=10; n++){
        let m = i*n;
        console.log(`${i} x ${n} = ${m}`);
    }
    console.log(`------------`);
}*/
/*выводим числа в строку 11 раз
let n = 11;
for(let x = 1; x<=n; x++){
    let s = String(x);
    for(let i = 1; i <= x*n; i++){
        s = s + String(x);
    }
    console.log(s);
}*/
/* находим сумму
let s = 0;
for(let n =1; n<800; n++){
    s = s +1/n;
}
console.log(s);*/
/*находим числа которые деляться на 3
let s = 0;
for(let i =1000; i<=9999; i++)
    if(i%3==0){
        s = s + i;
        console.log(i)
    }*/
    /*выводим выбраные буквы
    let s = 'вывести первые три символа и последние три символа'
    let f = s.slice(0,1);
    console.log(f);
    f =s.slice(-1);
    console.log(f);
    if(s.length % 2 != 0){
        let n = (s.length - 1) / 2;
        console.log(s[n])
    }*/
    /*заменяем символы если они не верны
    let s = 'qbcmnb'
    if(s.startsWith('abc'))
    {s = s.replace('abc', 'www')}
    else {s = s + 'zzz'}
    
    console.log(s);
    */
   /*данная строка  определите какой символ  в ней встречаеться раньше Х или Y 
let s = 'ldfksfgvxykvfm'
     if(s.indexOf('x') > s.indexOf ('y')){
         console.log('y');
     }else if(s.indexOf('y') > s.indexOf ('x')){
         console.log('x');
     }else {
         console.log('error');
     }*/
     
    





