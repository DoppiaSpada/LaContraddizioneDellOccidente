/* Una prova con fetch */

//Non funzionante perchè file ancora fuori dal server. Provvedere!

window.onload = function(){
    fetch('contents/file.txt')
    .then(response => response.text())
    .then(text => console.log(text))
    .catch(err => console.log("Request failed", err));
}