'use strict'

console.log('hello there')

const req = new XMLHttpRequest();
req.open('GET', '/data');
req.responseType = 'json';
req.send();

req.onload = () => {
    let data = req.response;

     

    data.forEach(element =>{

        let recordItem = document.createElement('li');//Skapar en varibel för li:t varje gong funktionen körs

        recordItem.textContent = element.record.id;//lägger till id:t som finns i element till varje li

        document.getElementById('ulRecords').appendChild(recordItem);//li:n visas i en div i HTML

    })

    // console.log(data);
    // console.log(data.id);
    
    
}


 
