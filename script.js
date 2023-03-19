function upload(){
    fetch('contents')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log("Request failed", err));
}