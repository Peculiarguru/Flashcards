const displayWordsAndMeaning = document.getElementById("flashcards");
const clickNext = document.getElementById("nextButton");
const clickprevious = document.getElementById("prevButton");
let dataCollection = JSON.parse(localStorage.getItem("data") || '[]');
displayWordsAndMeaning.innerHTML = dataCollection[0].word;
let currentIndex = 0;
cardOpened = false;


clickNext.onclick = () =>{
    if(currentIndex < dataCollection.length -1){
        currentIndex++;
        getWord();
    }
}

clickprevious.onclick = () =>{
    if(currentIndex > 0){
        currentIndex--
        getWord();
    }
}
 

function getWord(){
    cardOpened = false
    displayWordsAndMeaning.innerHTML = dataCollection[currentIndex].word;
    displayWordsAndMeaning.style.backgroundColor = "beige"
    displayWordsAndMeaning.style.color = "blue"
}

function getDescription(){
 displayWordsAndMeaning.innerHTML = dataCollection[currentIndex].description;
 displayWordsAndMeaning.style.backgroundColor = "pink"
 displayWordsAndMeaning.style.color = "black"
    cardOpened = true
}

displayWordsAndMeaning.onclick = () =>{
    if(cardOpened){
        getWord()
    }else{
        getDescription()
    }

}
