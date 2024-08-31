let road = document.getElementById('road');
let buttonClick = 0;
let startButton = document.getElementById('start');

let scr = 0;
let score = 0;

function play(){
    let x = 0;
    function generateBox(){
        let boxes = document.createElement('span');
        road.append(boxes);
        boxes.classList.add('obstr');
        let rm = Math.floor(Math.random()*400);
        boxes.style.left = `${rm}px`;
        return boxes;
    }

    let box = generateBox();

    function propgate(){
        
        try {
            box.style.top = `${x}px`;
            x+=10;
        //console.log("calling");
        
        if(x >= 762){
            scr++;
            console.log(scr);
            destroy();
        }
        } catch (error) {
            //
        }
    }
    var Interval = setInterval(propgate,100);

    function destroy(){
        clearInterval(Interval);
        road.removeChild(box);
    }
}

//console.log(Interval);


let newInterval;
let nav = false;
let start = ()=>{
    newInterval = setInterval(play,1000);
    startButton.innerText = "Stop";
    nav = true;
}
let stop = ()=>{
    clearInterval(newInterval);
    startButton.innerText = "Start";
    nav = false;
}

let scroeUpdate = setInterval(()=>{
    score = scr;
    let scorebox = document.getElementById('scores');
    scorebox.innerText = `Score = ${score}`;
},100);



function destroyAll() {
    //road.removeChild()
    clearInterval(scroeUpdate);
    road.innerHTML = `<div id="target"></div>`;
}

function toggleNav() {
    nav ? stop() : start();
  }

startButton.addEventListener('click', toggleNav);



function isColliding(div1, div2) {
    const rect1 = div1.getBoundingClientRect();
    const rect2 = div2.getBoundingClientRect();

    return !(
        rect1.right < rect2.left || 
        rect1.left > rect2.right || 
        rect1.bottom < rect2.top || 
        rect1.top > rect2.bottom
    );
}

// function gameOver(){

// }

function checkCollision() {
    const target = document.getElementById('target');
    const obstacles = document.querySelectorAll('.obstr');
    //console.log(obstacles);

    obstacles.forEach(obstacle => {
        if (isColliding(target, obstacle)) {
            stop();
            destroyAll();
        }
    });
}

// Example: Check for collisions when the page loads
window.onload = checkCollision;

setInterval(checkCollision,100);


//function moveShip(){
    let lef = 215;
    let ship = document.getElementById('target');
    
    document.addEventListener('keydown', keydown_ivent);
    //document.addEventListener('keyup', keyup_ivent);

    function keydown_ivent(e) {
    
    	//let key = '';
        
    	switch (e.key) {
    		case 'ArrowLeft':
                if(lef >= 0){
                    lef-=10;
                }
    			ship.style.left = `${lef}px`
    			break;
    		case 'ArrowRight':
                if(lef<= 430){
                    lef+=10;
                }
                ship.style.left = `${lef}px`
    			break;
    	}
    
    	return false;
    }
let spac = document.getElementById('bg');
let starCount = 150;
for(let i = 0; i < starCount; i++){
    let star = document.createElement('span');
    spac.append(star);
    star.classList.add('star');
    let t = Math.floor(Math.random()*100);
    let l = Math.floor(Math.random()*100);
    star.style.top = `${t}%`;
    star.style.left = `${l}%`;
}

    // function keyup_ivent(e) {
    // 	document.getElementById('output').innerHTML = '';
    // 	return false; 
    // }
//}


// Optionally, you could set up a listener for when the target moves
// For example, if you were dragging the target:
/*
target.addEventListener('drag', checkCollision);
*/

//startButton.addEventListener('click', stop);

//let newInterval = setInterval(play,1000);

//



// let Interval = setInterval(propgate,10);



