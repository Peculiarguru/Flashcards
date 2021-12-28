const word = document.getElementById("question");
const description = document.getElementById("answer");
const errorNotification = document.getElementById("error");
const savedNotification = document.getElementById("saved");
let dataCollection = JSON.parse(localStorage.getItem("data") || '[]');

function saveWord(){
    if(word.value !== "" && description.value !== ""){
        let dataInput = {
            word: word.value,
            description: description.value
        }
            dataCollection.push(dataInput);
            localStorage.setItem("data", JSON.stringify(dataCollection));
        
            word.value = "";
            description.value = "";
            savedNotification.innerHTML= "Saved successfully!!";
            savedNotification.style.display = "flex";
            errorNotification.innerHTML= "";
            errorNotification.style.display = "none";

    }
    else{
        errorNotification.innerHTML= "Please enter Word and Description!!";
        errorNotification.style.display = "flex";
        savedNotification.innerHTML= "";
        savedNotification.style.display = "none";
      
    }
         
}