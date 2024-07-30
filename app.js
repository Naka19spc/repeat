// First Lesson
// let num =100;

// if(num <50){
//     console.log("less than  50")

// }else if(num >20){
//     console.log("More than 20")

// }else{
//     console.log("Error")
// }


// let fName ="Mariam"
// if(fName === "Mariam"){
//     console.log(true)
// }else{
//     console.log(fakse)
// }


// switch (fName) {
//     case "Mariam":
//         console.log(true);
//         break
//     default:
//         console.log(false)
// }

// Second Lesson

// for(let i =5; i<100; i++){
  
//     console.log(i)
// }

// let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// for(let i=0; i<array1.length; i++){
//     let sm=array1[i]
//     if(sm>0&&sm<10)
//     console.log(sm)
// }
// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for(let item of array2){
//     if(item === 5)
//     break;
//     console.log("it is")
// }

// let array3= [1, 2, 3, 4, 5];
// let sum =0;
// for(let item of array3){
// sum = (sum + item)/array3.length}
// console.log(sum, "Test");

// let array5 = [1, 2, 3, 7, 6, 9];

// for(let item of array5){
//     if(item===7){
//         continue;
//     }
//     console.log(item);
// }

// let user = {
//     firstname: "giorgi",
//     lastname: "smith",
//     age: 25, studentstatus: "active"
// };
// console.log(user.studentstatus);

// let user = {
//     name: 'giorgi',
//     age: 20,
//     studentstatus: 'active'
//     }

//     if(user.age<18&& user.studentstatus ==="active"){
//         console.log("Hello");
//     }else if(user.name ==="Levan"){
//         console.log("Hello Levan");
//     }else if(user.studentstatus === "active" || user.age < 25){
//         console.log("Hello World");

//     }else{
//         console.log("Error");
//     }

    // let array = [
    //     [2, -3, 5, 10],
    //     [25, -24, -11, 100],
    //     [-6, -7, 10],
    //     ];

    //    for(let item of array){
    //     for(let i of item){
    //        if(i <0){
    //         continue
    //        }
    //        console.log(i);
    //     }
    //    }

    // let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ] 
    // for(let i =0; i<array.length; i++){
    //     let num =array[i];
    //     if(num%2 ===1){
    //         console.log(num);
    //     }
    // }

    // let users = [
    //     {username: 'giorgi', status: false},
    //     {username: 'levani', status: false},
    //     {username: 'anna', status: true}
    //     ]

    //     for(let item of users){
    //         if(item.status === true){
    //             console.log(item);
    //         }
    //     }


    // Third Lesson

//     let array =[10, 50, 6, 7, 8, 11, 6, 3, 9]
// function sum(){
//     let numSum = 0
//     for(let item of array){
//         numSum+=item
//     }
//     return numSum
// }
// console.log(sum(array));


// let user = {
//     firstname: 'giorgi',
//     lastname: 'saakadze',
//     age: 32,
//     isloggedin: true
//     }

//     function retrnInfo(user){
//         if(user.isloggedin === false){
//              return isloggedin = true
//             }
//             let information = `${user.firstname} ${user.lastname} ${user.isloggedin}`
//         return information
//     }
//     let info =retrnInfo(user)
// console.log(info);
    
//     let array =[10, 50, 6, 7, 8, 11, 6, 3, 9]
// function retrnMax(array){
//     let max =array[0]
//     console.log(array[0], "kk");
// for(let item of array ){
//     if(item >max){
//         max =item
//         console.log("test");
//     }
//     console.log("test2");
// }
// return max 
// }
// let maximum =retrnMax(array)
// console.log(maximum);
// console.log(
//     "teeeest"
// );

// function sumTheNum(n){
// if(n%2 === 0){
//     console.log("The number is even");
// }else{
//   console.log("The number is odd");
// }
// }

//  sumTheNum(11)

// let array = [1,2,3,4,5]; 
// for(item of array){
    
// }

// let user = {
//     firstname: 'giorgi',
//     lastname: 'saakadze',
//     age: 32,
//     isloggedin: true
//     }

//     function printName(x){
//         if(x.isloggedin){
//            let result=`${x.firstname} ${x.lastname}`
//            return result
//         }
//             return false
        
//     }
//     let sumrs = printName(user)
//     console.log(sumrs);

//     function getMax(maxNum){
//         let frstNum= 0
//        for(item of maxNum){
//         if(item > frstNum){
//             frstNum =item
//         }
//     }
//     return frstNum
//     }
//     let res2 = getMax([1,2,3,4,5])
//     console.log(res2);


    // function testFunc(x){
    //      if(x%2 ===0){
    //     return `odd`
    //      }
    //      return "even"
    // }
    // let evRodd = testFunc(10)
    // console.log(evRodd);

    // let array = [1,2,3,4,5]; 
    // for(let i =array.length -1; i >=0; i--){
    //    console.log(array[i]);
    // }


//   let  mySum = a =>a
//   let sum =  mySum(2)
// console.log(sum);



// let array =[ [2,-5,3], [17,-35, -4],[-20, 14, -7]].reduce(function(accumulator, currentValue){
//     return  accumulator.concat(currentValue)
// })
// console.log(array);
// let newArray= array.filter(function(y){

//     return y >0
// })
// console.log(newArray);


// let info = "Good Day";
// let newInfo =info.slice(4,8)
// console.log(newInfo);


// function retrStr(note){
//       return note.length
// }

// // let ret =retrStr("Nakaaa")
// // console.log(ret);

// let link = "https://google.com"


// // homework





// function per (a,b){
//     return a+a+b+b
// }

// function are(c,d){
//      return (c*d)
// }
// let lastper =per(4,7)
// let lastar =are(5,9)

// console.log(lastar,lastper);

// function numb(n){
//     if(n %10=== 0){
//          return true
//     }else{
//         return false
//     }
    
// }
// let newnum= numb(54)
// console.log(newnum);

// function numbs (a,b,c){
    
// if(a>b && a >c){

//     return a;
// }else if(b>a && b>c){
//     return b;
    
// }else{
//    return c
// }
// }
// let newNumbs = numbs (8,14,30)
// console.log(newNumbs);


// function sum (a,b,c,d){
          
// }

// let patient ={
//     persNumber : "01020304056",
//     frstName :"Mariam",
//     lstName :" Miruashvili",
//     age :27,
//     diagnose:"Alzheimer"
    

// }

// function abtPacient(x){
//     return `Patient ${patient.frstName} ${patient.lstName} with Personal NUmber :${patient.persNumber} and age  ${patient.age} and with Diagnose`
// }
// let newPac = abtPacient(patient)
// console.log(newPac);


// let Employee = {
//     firstName : "Tornike",
//     position : "Doctor",
//     salary:2000,
//     adress :{
//         city: "Tbilisi",
//         street:"Takaishvili",
//         building:23,
      
//     }
// }

// function showInfo(x){
//     return `${Employee.firstName} is a ${Employee.position}, he has ${Employee.salary} Gel as a salary,
//  lives in ${Employee.adress.city}, at ${Employee.adress.street} street in  ${Employee.adress.building} building`
// }
// let newShowInfo =showInfo(Employee)
// console.log(newShowInfo);

// homework\2
//davaleba 1
// let cities=["Tbilisi","Zugdidi","Kutaisi","Batumi","Rustavi"];
// cities.unshift("samtredia")
// cities.push("Gori")
// console.log(cities);
// console.log(cities.length);
// let newCities=cities.splice(2,2)
// console.log(newCities);
// let lastCity= cities.splice(-1,1)
// console.log(lastCity);

// // davaleba  2

// let villages = ["balda","Chaladidi","Lia"] 
// let arrTogether = cities.concat(villages)
// console.log(arrTogether);
// let newArrTog= arrTogether.slice(4,6)
// console.log(newArrTog);

// arrTogether.splice(3,0, "Ozurgeti","Tetriwyaro","dedpliswyaro")
// console.log(arrTogether);


// // davaleba 3
// let array =[];

// let carOne ={
// brand :"Mercedes",
// year :1998,
// price : 5000
// }
// let carSecond ={
// brand :"Lexus",
// year :2018,
// price : 20000
// }
// let carThird ={
// brand :"Toyota",
// year :  2021,
// price : 27000
// }
// array.push(carOne,carSecond,carThird)
// console.log(array);
// console.log(array[1].brand);
// console.log(array[0].price, array[2].price)

// // davaleba 4 

//  function newArrFunc(x){
    //  return arr[2].length
    // }
    // let newarrfunc2 = newArrFunc(arr)
    // console.log(newarrfunc2);
    
    
    // function secondNewArr(x){
        //    newarr =arr[0],arr[-1] ;
        //    return newarr 
        // }
        // let secondNewArr2 =secondNewArr(arr = ["samsung", "xiaomi","htc","nokia"])
        // console.log(secondNewArr2);
        // // es bolo ver mivxvdi 
        
//         arr = ["samsung", "xiaomi","htc","nokia"]
//         function  retFromArr(a,index){
//             return a[index].length
//         }
//         let retFromArr2 = retFromArr(arr, 2)
//         console.log(retFromArr2);

//    function retfrstandlst (a, index){
//     return a.index

//    }
// homework3

// davaleba1
// A

// one way 
// numbArr =[ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ] 
// for(let i = 0; i< numbArr.length; i++){
//     let meaning= numbArr [i]
    
//     if(meaning % 2 === 0){
//         console.log(meaning);

//     }
  
// }
// // // second way
// for(let item of numbArr){
//     if( item %2 === 0){
//         console.log(item);
//     }
// }

// // B

// let numMax = 0 
// for(let item of numbArr ){
//     if(item > numMax){
//         numMax = item
        
//     }
// }
// console.log(numMax);

// // // C
// let sumNum =0;
// for(let item of numbArr){
//     sumNum += item 
    
// }
// // D
// console.log(sumNum, "teest");
// let newArr =[]
// for(let item of numbArr){
//     if(item > 15 ){
//         newArr.push(item) 
//     }
    
// } 
// console.log(newArr.length);
 
// // davaleba2
// // A
// let names =["Tako", "Avto","Nika","Luka", "Gio","Mariami","Teona","Zuka","Beka","Dato"]
// for(let item of names){
//     if(item.length >=5){
//         console.log(item)
//     }
// }

// // B
// for(let item of names){
//     if(item.includes("i")){
//         console.log(item);
//     }
// }
// // C 
// let longName =names[0].length;
// for(let item of names){
//     if(item.length > longName){
//         longName =item

        
//     }
   
// }

// console.log(longName,"test");


// // davaleba 3
// let array =[];

// let carOne ={
// brand :"Mercedes",
// year :1998,
// price : 5000
// }
// let carSecond ={
// brand :"Lexus",
// year :2023,
// price : 20000
// }
// let carThird ={
// brand :"Toyota",
// year :  2021,
// price : 27000
// }
// let carForth = {
//     brand: "BMW",
//     year: 2018,
//     price:18000
// }
// let carFifth ={
//      brand:"Audi",
//      year:2020,
//      price: 23000

// }
// array.push(carOne,carSecond,carThird, carForth,carFifth)
// console.log(array);
// for(let item of array){
//     if(item.year >2020){
//         console.log(item);
//     }
// }
// let highestPrice = 0;
// let highestPriceBrand = '';

// for(let item of array){
//     if(item.price>highestPrice){
//         highestPrice =item.price
//         highestPriceBrand =item.brand
//     }

// }
// console.log(highestPriceBrand ,"s");

// let sumPrices =0 
// for(let item of array){
//     sumPrices+=item.price
// }
// console.log(sumPrices);


// let num = "12345"
//  let newNum =num.split()
//  console.log(newNum);


//  for(let item of newNum){

//  }

// let array1 =["hello1", 14,24, "Hello2"]
// let newArr =array1.filter(item=>typeof item == "number")
// console.log(newArr);

// let arrayr =[14,150, 'css', null ,'javascript',25]
// let newArrayr = arrayr.map(item =>{
//     if(typeof item=="number"){
//         return item * item
//     }else if(typeof item == "string"){
//         return item.toUpperCase()
//     }
//     return item
// })
// console.log(newArrayr);


// let string = "Good day"

// let newString =string.slice(4,8)
// console.log(newString);

// function smStr(n){
//     return n.length
// }
// let newSmSTr = smStr("Nakaaa")
// console.log(newSmSTr);

// let answ =prompt("The Capital City of Georgai ?")
// let corrAnsw ="tbilisi"
// let lowerCaseAnsw =answ.toLowerCase()
// console.log(lowerCaseAnsw);

// if(lowerCaseAnsw == corrAnsw){
//     console.log("The answer is Correct!!");
// }else{
//     console.log("The answer is Incorrect!!");
// }
// let link = "https://google.com"
// function checkLink(elem){
// let item =elem.indexOf("htstps")
// if(item ==-1){
//     console.log("arasworia");
// }else{
//     console.log("sworia ");
// }

// }
// checkLink(link)
// let fruits = ["apple", "mango", "avocado","kiwi"]
// fruits.splice(-2, 1, "Peach")
// console.log(fruits);

// let  newarr = [5, 25, 89, 120, 36]
// newarr.push("javascript", "phyton")
// newarr.unshift("html","css")
// newarr.shift()
// newarr.pop()
// newarr.splice(2, 0, "Mango")
// console.log(newarr);
// console.log(newarr.length);
// let array =[1, 2, 3, 4, 5];
// array.splice(3,0, 'a', 'b','c')
// console.log(array);
// Splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let  newarr = [5, 25, 89, 120, 36]
// let nearr1 =newarr.map(num => num /2 )
// console.log(nearr1);
// let sum =0;
// newarr.forEach((elem) => {
//     sum+=elem
//     } )
// console.log(sum);
// let languages = ['html', 'css', 'javascript', 'python', 'php'];
// let newlanguages = languages.filter(item => item.length ===3 )
// console.log(newlanguages);
// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

// let newWords = words.filter((item => {

//     if(item.includes("m") || item.includes("M")){
//         return true

//     }else{
//         return false 
//     }
// }
// ))
// let result = words.filter(item=> item.toLowerCase().includes('m'))
// console.log(newWords);
// console.log(result);

let buttons =document.querySelectorAll(".button")
buttons.forEach((item => item.addEventListener("click", function(){
    alert("HELLO")
    
})))
let container =document.getElementById("wrap")
let newImage =document.createElement("img")
let title = document.createElement("h2")
newImage.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s")
newImage.setAttribute("alt", "image")
newImage.classList.add("img-class")
let newCDiv = document.createElement("div")
title.innerText="Image Title"
title.classList.add("title")
newCDiv.classList.add("wrapper")
container.appendChild(newCDiv)
container.appendChild(newImage)
container.appendChild(title)
title.style.fontSize ="30px"
title.style.color ="brown"
let textWraper = document.querySelectorAll(".text-wraper")
// Homework 6
textWraper.forEach((item) => {
    let newText= document.createElement("p")
    newText.classList.add("text")
    item.appendChild(newText)
})
let brgBar =document.getElementById("burger-bar")
let burLine=document.querySelectorAll(".bur-line")
let brgBar1 =document.getElementById('burger-bar1')

function onClickChange(){
    brgBar.style.display ="none"
    brgBar1.style.visibility="visible"


    
}
function onClickChange1(){
    brgBar.style.display ="flex"
   
    brgBar1.style.visibility="hidden"
}







function countTheSum(x,y){

}
let newbox =document.querySelector(".box")
function onCLickBoxChange(){
    newbox.style.color ="red"
}



 let inputElement =document.getElementById("input-filed");
 let addBtn = document.querySelector(".btnAdd");
 let ulListIt =document.querySelector(".ul-list-items");
 newImage.addEventListener('click', function(){
    alert("Hello")
 })
 let form=document.getElementById('form-wrapper')
 form.addEventListener("submit", function(e){
    e.preventDefault();
    // 1 get  input value
    console.log("t5ees");
    let value = inputElement.value
    if(value ===""){
        return
    }
    // value => li => ul
    let li =document.createElement("li")
    let dltBtn = document.createElement("button")
    // let dltIcon =document.createElement("i")
    // dltIcon.classList.add("fa-solid")
    // dltIcon.classList.add("fa-trash")
    dltBtn.innerHTML= '<i class="fa-solid fa-trash"></i>'
   
    dltBtn.classList.add("dltBtn")
    li.textContent =value;
    ulListIt.appendChild(li)
    li.appendChild(dltBtn);
    // clear input value
    inputElement.value = ""
    dltBtn.addEventListener('click', function(){
      li.remove()
    })
 })
 let deleteAll =document.querySelector(".Clear-all")

 deleteAll.addEventListener("click", function(){
    ulListIt.innerHTML =" "
 })
 let navigationElement= document.getElementById("navBar")
 let burgerBarElement =document.getElementById("burgerBar")

 burgerBarElement.addEventListener('click', function(){
    navigationElement.classList.toggle("navActive")
    console.log("t5ees");
 })

let user1 ={
    name: "Anna",
    age:20
}
let user2 ={
    name:"Tika",
    age :30
}
let user3 ={
    name:"GiGa",
    printName: function(){
        console.log(this.age);

    }
}
user3.printName.call(user2)
