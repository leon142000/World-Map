import * as CountryAPI from './country_Api.js';     

const countryList = document.createElement('div');




function generateElement(country){
    let div = document.createElement('div');
    div.setAttribute('class','thumb')



    let link = document.createElement('a')
    link.setAttribute('href', `country_info.html?country=${country.name}`)


    const label = document.createElement('div');
    label.setAttribute('class', 'museum-label');


    const span = document.createElement('span')
    span.innerHTML = country.name;

    const flag = document.createElement('img');
    flag.setAttribute("src", country.flag);

    label.appendChild(span);

    link.appendChild(flag);
    link.appendChild(label);
    div.appendChild(link);

    return div;

}




async function countrySearch(searchValue) {
  const countries = await CountryAPI.search(searchValue);
 
  
  if(countries.length == 0){
    const message = document.createElement("div");
    message.innerHTML = `No Countries found for the searchterm ${searchValue}!` 
    document.getElementsByTagName("body")[0].appendChild(message);
  }
    

  for(let i = 0; i < countries.length; i++){
    
    let div = generateElement(countries[i]);
    document.getElementById("gallery").appendChild(div);

  }

  
  
}

document.addEventListener('DOMContentLoaded', async event => {

    
  const params = (new URL(document.location)).searchParams;
  const searchTermQuery  = params.get('q');
  
   
  if(!searchTermQuery){
    const countries = await CountryAPI.getAll();
    
    
    for(let i = 0; i < countries.length; i++){
        let div = generateElement(countries[i]);
        document.getElementById("gallery").appendChild(div);
     }
    
    return;
    }
  
  document.getElementById('search').value = searchTermQuery;
  countrySearch(searchTermQuery);
});


const searchInput = document.getElementById('search');
searchInput.addEventListener('click', event => event.target.style.border = '');

//const form = document.getElementById('test');
const form = document.getElementsByClassName('search form')[0];
form.addEventListener('submit', event => {
  const searchInput = document.getElementById('search');
  if(!searchInput.value){
    searchInput.style.border = "1px solid red"
    event.preventDefault();
  }
});












