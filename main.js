const prompt = require('prompt-sync')({sigint: true})

let option = (prompt("Enter Combine or Deconstruct: "))

//Combine code
if(option === " combine ") {
    let color1 = (prompt("Pick: red, blue or yellow"));
    let color2 = (prompt("Pick: red, blue or yellow"));

    if((color1 === "red" && color2 === "blue") || (color1 === "blue" && color2 === "red")){
        console.log(" Purple! ")
    }
    
    else if((color1 === "red" && color2 === "yellow") || (color1 === "yellow" && color2 === "red")){
        console.log(" Orange! ")
}
else if((color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue")){
    console.log(" Green! ")
}
else console.log(" Error ")
}
// deconstruct code
else if (option === " deconstruct "){
    let color3 = (prompt((" Pick: Purple, Green, or Orange")))
    if (color3 === "purple"){
        console.log(" The deconstructed colors are red and blue")
    }
    else if (color3 === "green"){
        console.log(" The deconstructed colors are yellow and blue. ")
    }
    else if(color3 === "orange"){
        console.log(" The deconstructed colors are red and yellow")
    }
    else console.log(" Error ")

}
