const startBtn= document.getElementById('start');
const SearchElement= document.getElementById('randint');

const score= document.getElementById('score');

//Math.random() always give number between 0 to 1
const divClick=(e)=>{
    const clickedNumber = parseInt(e.target.innerText); 
    const searchele= parseInt(SearchElement.innerText)
    console.log(searchele, clickedNumber);

    if(searchele == clickedNumber){
        const scoreNumber=  parseInt(score.innerText); 
        score.innerText=scoreNumber+1
        SearchElement.innerText=  Math.floor(Math.random()*10);
        setBoard()
    }else{
        const gameBox= document.getElementById('gameBox');
    gameBox.innerHTML=`
        <p> Game Over </p> </br>
        <p> Click Start Button to Restart the game</p>
    `;
    }

}

const setBoard= ()=>{

    const randomInterger= Math.floor(Math.random()*10)
    console.log(randomInterger);
    SearchElement.innerText=randomInterger;

    const gameBox= document.getElementById('gameBox');
    gameBox.innerText="";

    for(let i=0; i<49; i++){
        const newDiv= document.createElement('div');
        newDiv.className="innerDiv";
        newDiv.id=`div${1}`;
        newDiv.onclick=divClick;

        const randInt= Math.floor(Math.random()*10);

        newDiv.innerText=randInt;

        gameBox.appendChild(newDiv);
    }
}
startBtn.addEventListener('click',()=>{
    score.innerText=0;
    setBoard();
})

