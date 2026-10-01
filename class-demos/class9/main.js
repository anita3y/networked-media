// window.onload is shorthand for window.addEventlistenter...
window.addEventListener("load", () =>{

    // document.body is selector ot retrievebody html element
    // ' e' parameter to get mouse x,y
    document.body.addEventListener("click", (e) => {
        console.log('document.body was clicked')
        // use string literals
        console.log(`${e.clientX}, ${e.clientY}`)
    })

  let textDiv = document.getElementById('text')

  document.addEventListener("keydown", (e) => {

    console.log("key pressed")
    console.log(e.key)

    // addign key that was typed to div on my page
    textDiv.textContent += e.key

    if(e.key == ' '){
        textDiv.textContent += '🌸'
    }
  }) 

})