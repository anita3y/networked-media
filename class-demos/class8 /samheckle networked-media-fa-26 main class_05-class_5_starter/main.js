// this is a comment, 

alert('javascript!')

console.log('log this information to the console')
let colors = ['red', 'orange', 'green', 'blue']

//waiting for webpage to load
//window.onload is similar to setup/draw func in p5
// all should go inside window onload
window.onload = () => {
    console.log('page has loaded')

    // get element by id
    // retrieves single JS element using ID
    // ONLY be used once in HTML page
    // easier to make variable
    let mainElement = document.getElementById('main')
    mainElement.style.color = "white"
    console.log(mainElement)
    // JS has the highest priority

    // only grabs the first one
    let firstParagraph = document.querySelector('p')
    let blueParagraph = document.querySelector('.blue')
    document.querySelector('#main')

    firstParagraph.textContent = 'I have updated the text with js'
    blueParagraph.style.backgroundColor = 'navy'

    // query selector for ID works same as getElementById
    let containerDiv = document.querySelector('#blue-div')

    for(let i = 0; i < 60; i++) {
        // when creating element on page, 
        // 1. delcare what type of element we create
        let newSpan = document.createElement('span');
        // 2. modify contetn /element
        newSpan.textContent = 'new span';
        newSpan.classList.add('all-spans');
        let c = Math.floor(Math.random() * colors.length);
        newSpan.style.backgroundColor = colors[c];
        
        // 3. add created element to page
        // anywhere on the bottom of the html, use document.body
        // in spec container, selec ttha telement
        containerDiv.appendChild(newSpan);

        setInterval(()=> {
            console.log('two seconds have passed')
            document.querySelectorAll('.all-spans')
            console.log(allSpans)

            
            for(let s of allSpans){
                s.style.transform = `rotate(${rotation}deg)`
                rotation++
                console.log(s.style.transform)
            }
        }, 2000);
    };

    // set interal is built in js 
    //  params: callback, amoutn of time in ms

    
    // setInterval(function () {}, 2000);
    //
    function intervalFunction(){

    }

}