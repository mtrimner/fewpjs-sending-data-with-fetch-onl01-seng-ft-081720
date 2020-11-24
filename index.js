function submitData(name, email) {

    let configObj = {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
      };

    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        let bodyAppend = document.querySelector('body')
        bodyAppend.innerHTML = `${object["id"]}`
    })
    .catch(function(error) {
        alert("Unauthorized Access")
        let bodyAppend = document.querySelector('body')
        bodyAppend.innerHTML = `${error.message}`
    });

}

   
  
