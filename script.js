function upload(){
    fetch('contents/*.txt')
    .then(response => response.text())
    .then(text => console.log(text))
    .catch(err => console.log("Request failed", err));
}