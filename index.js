const mybodytag = document.getElementsByTagName("body")[0];

function setColor(name){
    mybodytag.style.backgroundColor = name
}

function randomColor(){
    // R G B values of 0, 0 , 0 is black
    // R G B values of 255, 255 , 255 is white

    // we need three colors for our RGB values
    // we randomly generate them
    // Math.random() will give us a decimal value between 0 and 1
    // we multiply that random value with 255 because our color
    // values has to be between 0  and 255, and the we round
    // to get an absolute number value.


    const red = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)

    // we use back ticks (``) , also called as tilde, to convert our above
    // randomly generated three number and convert them
    // into a RGB string. So back ticks is essenntially a string manipulation trick
    const color = `rgb(${red}, ${green}, ${blue})`

    setColor(color) //set color is called to change background color
}

setColor("lightgrey") // default