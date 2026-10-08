let words = [
  "hello ", "are you lonely? ", "let me write you a poem ", "i", "don't", "know", "what", "to", "do", "with", "myself", "anymore",
  "i", "just", "want", "to", "be", "happy", "and", "happy", "and", "happy",
  "and", "happy", "and", "happy", "and", "happy", "and", "happy", "and",
  "happy", "and", "happy", "with", "my", "family", "i", "just", "wanna",
  "make", "it", "so", "i", "have", "no", "one", "to", "blame", "for",
  "everything", "and", "no", "other", "people", "can", "make", "me", "feel",
  "but", "i", "just", "don't", "wanna", "make", "it", "to", "this", "point",
  "i", "want", "it", "to", "end", "so", "i", "don't", "want", "it", "anymore",
  "i", "want", "it", "all", "the", "time", "and", "i", "want", "it", "to",
  "be", "so", "bad", "and", "so", "bad", "and", "i", "want", "it", "to",
  "happen", "but", "it", "doesn't", "feel", "like", "it", "to", "happen",
  "and", "i", "want", "it", "to", "feel", "like", "it", "these", "days",
  "if", "i", "want", "to", "feel", "so", "much", "pain", "in", "the", "end",
  "and", "it's", "not", "my", "life", "i", "just", "wanna", "feel", "so",
  "much", "better", "than", "before", "and", "it's", "not", "just", "because",
  "i", "feel", "like", "it's", "not", "like", "it's", "not", "that", "hard",
  "but", "i", "just", "wanna", "make", "sure", "i", "just", "wanna", "make",
  "me", "happy", "with", "my", "family", "is", "there", "a", "little", "more",
  "comfortable", "with", "my", "life", "and", "then", "when", "you", "can",
  "be", "like", "you", "can", "be", "my", "best", "friends", "i", "just",
  "wanna", "make", "it", "out", "there", "is", "nothing", "wrong", "and",
  "that's", "it", "doesn't", "matter", "what", "i", "just", "wanna", "make",
  "you", "feel", "better", "i", "just", "wanna", "be", "there", "for", "me",
  "to", "make", "you", "feel", "better", "than", "i", "just", "wanna", "say",
  "that", "makes", "my", "heart", "and", "that's", "it", "just", "don't",
  "be", "sad", "i", "just", "want", "you", "can", "feel", "like", "i",
  "just", "want", "it", "and", "you", "know", "it", "makes", "you", "happy",
  "so", "you", "know", "i", "want", "to", "feel", "good", "and", "that's",
  "what", "i", "do", "for", "me", "to", "be", "able", "and", "that's", "all",
  "i", "need", "you", "know", "i", "know", "you", "can", "be", "there", "and",
  "i", "love", "that", "you", "love", "you", "so", "very", "so", "very",
  "so", "very", "so", "very", "so", "much", "i", "hope", "you're", "doing",
  "good", "i", "hope", "you're", "feeling", "good", "i", "love", "your",
  "sweet", "little", "girl", "i", "hope", "you're", "happy", "you're",
  "happy", "i", "hope", "you're", "happy", "i", "miss", "your", "family",
  "i", "hope", "you're", "happy", "apologies", "you are out of credits", "please subscribe for more company"
];
// array to hold all of my words as strings

//robot's lines
let robotLines = ["hello ", "are you lonely? ", "let me write you a poem ","apologies", "you are out of credits", "please subscribe for more company"]

// setting up a timer,
let count = 0;
 
// the delay timer
let delay = 200

// window onload setup
window.onload = () => {
    console.log("page isloaded");
    setTimeout(addWord,delay);
    setInterval(resetGarden,8000);
}

// this function will add one word at a time, according to my timing.
function addWord() {
    //first grab the garden div, then i stored it in a variable
    let garden = document.getElementById('garden');
    //obviously createElement, since the words i was populating were not previoulsy on the pg
    let newWord = document.createElement('span')

    // here, it puts the words into span
    newWord.textContent = words[count] + "  "
    // just adding a space betwen each word, then pretty simply, the counter just selects the word from the array

    //add to html file
    garden.appendChild(newWord);

    if (robotLines.includes(words[count])){
        setTimeout(addWord, 300)
    } else {
        delay = delay * 0.8
        setTimeout(addWord, delay)
    }

    //move counter
    count = count + 1
}

function resetGarden(){
    let garden = document.getElementById('garden');
    garden.innerHTML = "" 
    // this clears the screen,
}

