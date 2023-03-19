function upload(){
    fetch('contents/*txt')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log("Request failed", err));
}