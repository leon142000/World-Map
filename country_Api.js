import {Country} from './country.js';

export async function getElementByName(name){
    const url = `https://restcountries.eu/rest/v2/name/${name}?fullText=true`;
   

    try {
      /*
      let country = JSON.parse(localStorage.getItem(name));
      console.log(country);
      if(country != {}){
          return country;
      }
      */
      
      const response = await fetch(url);
      const rawData =  await response.json();
      const returnPiece = new Country(rawData[0].name, rawData[0].capital, rawData[0].population, rawData[0].languages, rawData[0].flag);
      localStorage.setItem(name, JSON.stringify(returnPiece));
      return returnPiece;
    
    } catch (error){
        console.log(`An Error happened when trying to retrieve date from URL ${url}`);
        console.log(error);
    } 
    
}



export async function search(searchValue){
    const url = `https://restcountries.eu/rest/v2/name/${searchValue}`

    try {
        /*
        let country = JSON.parse(localStorage.getItem(name));
        console.log(country);
        if(country != {}){
            return country;
        }
        */
        
        const response = await fetch(url);
        const rawData =  await response.json();
        let returnPiece = [];

        for(let i = 0; i < rawData.length; i++){
            returnPiece.push(new Country(rawData[i].name, rawData[i].capital, rawData[i].population, rawData[i].languages, rawData[i].flag));
        }

        //localStorage.setItem(name, JSON.stringify(returnPiece));
        
        return returnPiece;
      
      } catch (error){
          console.log(`An Error happened when trying to retrieve date from URL ${url}`);
          console.log(error);
      } 
}














export async function getAll(){
    const url = `https://restcountries.eu/rest/v2/all`

    try {
        /*
        let country = JSON.parse(localStorage.getItem(name));
        console.log(country);
        if(country != {}){
            return country;
        }
        */
        
        const response = await fetch(url);
        const rawData =  await response.json();
        let returnPiece = [];

        for(let i = 0; i < rawData.length; i++){
            returnPiece.push(new Country(rawData[i].name, rawData[i].capital, rawData[i].population, rawData[i].languages, rawData[i].flag));
        }

        //localStorage.setItem(name, JSON.stringify(returnPiece));
        
        return returnPiece;
      
      } catch (error){
          console.log(`An Error happened when trying to retrieve date from URL ${url}`);
          console.log(error);
      } 
}

