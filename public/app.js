'use strict'

console.log('hello there')

const req = new XMLHttpRequest();
req.open('GET', '/data');
req.responseType = 'json';
req.send();

req.onload = () => {
    let data = req.response;

    console.log(data);
    console.log(data.id);
    
}


 
