function upload(){
    fetch('https://github.com/DoppiaSpada/Krino_Hub/tree/main/contents')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log("Request failed", err));
}