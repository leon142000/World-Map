const countriesList = document.getElementsByTagName("path");
const returnElement = document.createElement("div");

while(countriesList.length != 0){
    for(let i = 0; i < countriesList.length; i++){
        let link = document.createElement("a");

        let country;


        if(countriesList[i].classList != ""){
             country = countriesList[i].classList;
        } else{
            country = countriesList[i].getAttribute("name")
        }
        
        link.setAttribute("title", country)
        //link.setAttribute("href", `https://www.google.com/search?q=${country}`)  
        link.setAttribute("href", `country_info.html?country=${country}`)

    
        link.appendChild(countriesList[i]);
        

        returnElement.appendChild(link);

    }
}

const svg = document.getElementsByTagName("svg")[0];

svg.innerHTML = returnElement.innerHTML;



