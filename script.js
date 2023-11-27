//create first grid
let container = document.querySelector('.container');
function addElement () {
    for (let i=0; i<256; i++) {
    const square = document.createElement('div');
    square.style.width = '50px';
    square.style.height = '50px';
    square.style.backgroundColor = 'rgb(255,255,255)';
    container.appendChild(square);
}
}
addElement();

//create a button to make new grid
let button = document.querySelector('button')
button.addEventListener('click', () => {
    let number = prompt('Enter The Number Of Grids Per Side, Up To 100')
    if (number > 0 && number <= 100) {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }

            for (let j=0; j<number ** 2; j++) {
                const square1 = document.createElement('div');
                let side = 800/number;
                square1.style.width = `${side}px`;
                square1.style.height = `${side}px`;
                square1.style.backgroundColor = 'rgb(255,255,255)'
                container.appendChild(square1);
                }

    }
    else alert('Enter A Correct Number');
})

//create darkening mode button
let darkening = false;
let buttonDark = document.querySelector('.buttonDark');
buttonDark.addEventListener('click', () => {
    if (darkening == false) {
        darkening = true;
        buttonDark.textContent = "Turn Off Darkening Mode"
        buttonColor.disabled = true;}
    else {darkening = false
        buttonDark.textContent = "Turn On Darkening Mode"
        buttonColor.disabled = false;}
    
})

//create random color mode button
let randomOn = false;
let buttonColor = document.querySelector('.buttonColor');
buttonColor.addEventListener('click', () => {
    if (randomOn == false) {
    randomOn = true;
    buttonColor.textContent = "Use One Color"}
    else {randomOn = false
    buttonColor.textContent = "Use Random Color"};    
})


//function to identify what color/mode to use
let coloring = function() {
    if (randomOn) {
        return `hsl(${Math.round(Math.random()*360)}  
                    ${Math.round(Math.random()*70)}%  
                    ${Math.round(Math.random()*100)}% )`} 
    else if (darkening) {
            darkF(e);
        }
    else return 'rgb(220,220,220)'}

let darkF = function(e) {
    let curColor = e.target.style.backgroundColor;
    let rgbaString = curColor.slice(4, -1);
    let colorArray = rgbaString.split(',');
    let newR = colorArray[0]-22;
    let newG = colorArray[1]-22;
    let newB = colorArray[2]-22;
    let newColor = `rgb(${newR}, ${newG}, ${newB})`;
    e.target.style.backgroundColor = newColor;}

//add eventlisteners to check whereis mouse is down and what color to use there   
let mouseDown = false;
container.addEventListener('mousedown', (e)=> {
    mouseDown = true;
    if (darkening) {
        darkF(e);
    }
    else
    e.target.style.backgroundColor = coloring();
})
container.addEventListener('mouseup', ()=> {
    mouseDown = false;
})

//add eventlisteners to check whereis mouse is down and what color to use where mouse goes   
container.addEventListener('mouseover', function(e) {
    if (mouseDown) {
        if (darkening) {
            darkF(e);
        }
        else
        e.target.style.backgroundColor = coloring();
    }}
)  