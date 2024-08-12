// dom property
// syncroous and asyncrounou
// asyc await

// dom - document object model- provides structure of html or xlm to js, so that js can manuplulate it.
// getElementById
// getElementsByClassName - conatin an array


// document.getElementById('two').style.color="red"


// let elements=document.getElementsByClassName('one')

// console.log(Array.from(elements))

// Array.from(elements).forEach(ele=>(
//     ele.style.color='red'
// ))

// for (let i = 0; i < elements.length; i++) {
//     if(i===0){
//         continue;
//     }
//    elements[i].style.color='blue'
// }
// // queryselector takes the first element
// document.querySelector('.one').style.color="green"

// elements=document.querySelectorAll('.one')

// console.log(Array.from(elements))
// for (let i = 0; i < elements.length; i++) {
//     if(i===0){
//         continue;
//     }
//    elements[i].style.color='blue'
// }


// asyncronous and syncronour

//syncronous function
// (function(){
//     console.log("hi frist");

//     setTimeout(() => {
//         console.log("hi second")
//     }, 1000);

//     console.log("hi thired!")
// })()

//asyncrounous funtion

(async function(){
    console.log("hi frist");

    await new Promise(e=>setTimeout(() => {
        console.log("hii second")
        e();
    }, 1000))


    console.log("hi thired!")
})()