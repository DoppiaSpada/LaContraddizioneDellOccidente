/* Una prova con fetch */

//Non funzionante perchè file ancora fuori dal server. Provvedere!

window.onload = function(){
    fetch('/contents/file.txt')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log("Request failed", err));
}