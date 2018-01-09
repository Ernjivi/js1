var apiUrl = "https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=BTC";
var change;

var fooButton = document.querySelector('#changeBtn');

fooButton.addEventListener('click', function(){
    fetch(apiUrl)
        .then(response => {
            if(response.ok){
                return Promise.resolve(response);
            } else{
                return Promise.reject(new Error('Failed to load'));
            }
        })
        .then(response => response.json())
        .then(data => {
            // console.log(document.querySelector('#currency').value);
            var currency = document.querySelector('#currency').value;
            var value = document.querySelector('#value');
            change = data.BTC;

            value.innerHTML = change * parseInt(currency);

            // console.log(change * parseInt(currency));

        })
        .catch(function(error){
            console.log(error);
        });
});


/*
Name case:
PascalCase - Clases.
camelCase - Variables y métodos.
*/