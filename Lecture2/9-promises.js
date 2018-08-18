const url = '';

fetch(url) //will return a promise
    .then(function(res) {
        //don't have to handle an error here
        return res.json();
    })
    .then(function(json){
        return ({
            importantData: json.important
        })

    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        //error would be handled HERE
    });