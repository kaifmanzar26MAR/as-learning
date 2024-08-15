const box1= document.getElementById('box1');
const box2= document.getElementById('box2');
const box3= document.getElementById('box3');
const box4= document.getElementById('box4');
const box5= document.getElementById('box5');
const box6= document.getElementById('box6');
const box7= document.getElementById('box7');
const box8= document.getElementById('box8');
const box9= document.getElementById('box9');

let toggleTurn=true;
const condition1=()=>{
    let a = box1.innerText.trim();
    let b = box2.innerText.trim();
    let c = box3.innerText.trim();

    if (a === "") {
        console.log("hi "+ a)
        return false;
    }
    console.log("hiu "+ a)
    return a === b && a === c;

}
const condition2=()=>{
    let a=box4.innerText;
    let b=box5.innerText;
    let c=box6.innerText;
    if(a===""){
        return false;
    }
    if(a===b){
        if(a===c){
            return true;
        }
    }
    return false
}
const condition3=()=>{
    let a=box7.innerText;
    let b=box8.innerText;
    let c=box9.innerText;
    if(a===""){
        return false;
    }
    if(a===b){
        if(a===c){
            return true;
        }
    }
    return false
}
const condition4=()=>{
    let a=box1.innerText;
    let b=box4.innerText;
    let c=box7.innerText;
    if(a===""){
        return false;
    }
    if(a===b){
        if(a===c){
            return true;
        }
    }
    return false
}
const condition5=()=>{
    let a=box2.innerText;
    let b=box5.innerText;
    let c=box8.innerHTML;
    if(a===""){
        return false;
    }
    if(a===b){
        if(a===c){
            return true;
        }
    }
    return false
}
const condition6=()=>{
    let a=box3.innerText;
    let b=box6.innerText;
    let c=box9.innerText;
    if(a===""){
        return false;
    }
    if(a===b){
        if(a===c){
            return true;
        }
    }
    return false
}
const condition7=()=>{
    let a=box1.innerText;
    let b=box5.innerText;
    let c=box9.innerText;
    if(a===""){
        return false;
    }
    if(a===b){
        if(a===c){
            return true;
        }
    }
    return false
}
const condition8=()=>{
    let a=box3.innerText;
    let b=box5.innerText;
    let c=box7.innerText;
    if(a===""){
        return false;
    }
    if(a===b){
        if(a===c){
            return true;
        }
    }
    return false
}
const isWinner=()=>{
  if(condition1() || condition2() || condition3() || condition4() || condition5() || condition6() || condition7() || condition8()){
    alert("winner")
  }
  
}

const AddCrossORCircle=(box)=>{
    if(box.innerText===""){
        if(toggleTurn)
            box.innerText="X"
        else 
            box.innerText="O"

        toggleTurn=!toggleTurn
        isWinner();
    }else{
        alert("You cant Enter on This Field!!")
    }
    
}

box1.onclick = () => AddCrossORCircle(box1);
box2.onclick = () => AddCrossORCircle(box2);
box3.onclick = () => AddCrossORCircle(box3);
box4.onclick = () => AddCrossORCircle(box4);
box5.onclick = () => AddCrossORCircle(box5);
box6.onclick = () => AddCrossORCircle(box6);
box7.onclick = () => AddCrossORCircle(box7);
box8.onclick = () => AddCrossORCircle(box8);
box9.onclick = () => AddCrossORCircle(box9);



/// input two different name of the players for x and o
// if x won, alert with the name that the player name is winner else player wiht o winner
// button to start
// after winner no operation should be done
// after winner a button to restart the game
