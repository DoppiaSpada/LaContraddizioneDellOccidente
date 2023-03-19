function upload(my_dir){
    my_dir.forEach(function(file){
        fetch('contents/' + file)
        .then(response => response.text())
        .then(text => console.log(text))
        .catch(err => console.log("Request failed", err));
    });
}