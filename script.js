function upload(){
    fetch('contents/*.txt')
    .then(response => response[0].text())
    .then(text => console.log(text))
    .catch(err => console.log("Request failed", err));
}