const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorcontainerEl = document.createElement("div");

    colorcontainerEl.classList.add("color-container");

    containerEl.appendChild(colorcontainerEl);
    // console.log(colorcontainerEl);

    
}

const colorcontainerEls = document.querySelectorAll(".color-container")
// console.log(colorcontainerEls)

generatorColor()

function generatorColor(){
    colorcontainerEls.forEach((colorcontainerEls)=>{
        const newCode = randomColor()
        // console.log(newCode)

        colorcontainerEls.style.backgroundColor = "#" +newCode
        colorcontainerEls.innerText = "#" + newCode


    })

   
   
}



function randomColor(){
   const char ="0123456789abcdef";
   const colorcodeLength = 6;
   let colorCode = "";

   for (let index = 0; index < colorcodeLength; index++) {

    const randomNum = Math.floor(Math.random()*char.length)

    colorCode += char.substring(randomNum, randomNum+1)
//    console.log(colorCode, randomNum);

    
   }
   return colorCode
   
}