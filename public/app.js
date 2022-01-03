'use strict'

console.log('hello there')

const req = new XMLHttpRequest();
req.open('GET', '/data');
req.responseType = 'json';
req.send();

req.onload = () => {
    
    let data = req.response;

    data.forEach((element, i) =>{
        
        let recordItem = document.createElement('ul');//Skapar en varibel för li:t varje gong funktionen körs
        let allrecordData = document.createElement('p');
        let recordBtn = document.createElement('button');

        recordBtn.style.width = "250px";
        recordBtn.style.height = "45px";

        recordItem.textContent = element.record.fields.Name;//lägger till id:t som finns i element till varje li

        recordBtn.className = 'btnClass';
        recordBtn.id = 'btnId'+ i;
        recordBtn.textContent = element.record.fields.Name;


        const container = document.getElementById('divRecords');
      
        document.getElementById('ulRecords').appendChild(recordItem);//li:n visas i en div i HTML

        document.getElementById('ulRecords').appendChild(recordBtn);

        container.addEventListener('click', function(e) {

            if (e.target.classList.contains('btnClass')) {
                if (e.target.textContent == element.record.fields.Name) {
                    allrecordData.textContent = JSON.stringify(element.record.fields);

                    document.getElementById('records').appendChild(allrecordData);

                }
            }

        })
    });


    // console.log(data);nodemon server.js

    // console.log(data.id);
    
    
}


 
