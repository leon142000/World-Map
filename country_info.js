import * as CountryAPI from './country_Api.js';

const params = (new URL(document.location)).searchParams;
const countryName  = params.get('country');

const country = await CountryAPI.getElementByName(countryName);

const div = document.createElement('div');
const name = document.createElement('span');
name.innerHTML= country.name; 
const capital = document.createElement('span');
capital.innerHTML= country.capital;
const population = document.createElement('span');

let populationValue = country.population;

if(populationValue >= 1000000){
    populationValue = (country.population / 1000000) + ' mio'
} 

population.innerHTML = populationValue;


const languages = document.createElement('div');

for(let i = 0; i < country.languages.length; i++){
   let span = document.createElement('span')
   span.innerHTML = `${country.languages[i]["name"]} `;
   languages.appendChild(span);
}



const flag = document.createElement('img');
flag.setAttribute("src", country.flag)

const br = document.createElement('br');
const br1 = document.createElement('br');
const br2 = document.createElement('br');
const br3 = document.createElement('br');

div.appendChild(name);
div.appendChild(br);

div.appendChild(capital);
div.appendChild(br1);
div.appendChild(population);
div.appendChild(br2);
div.appendChild(languages);
div.appendChild(br3);
div.appendChild(flag);

document.getElementsByTagName("body")[0].appendChild(div);

console.log(flag)