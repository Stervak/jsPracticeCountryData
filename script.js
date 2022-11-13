'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/////////////////////

const getCountryData = (country) => {
   // создаем переменную и передаем ей значение реквеста
   const request = new XMLHttpRequest(); // old school

   // метод open ( тип реквеста, url)
   request.open('GET', `https://restcountries.com/v2/name/${country}`);

   // метод send ()
   request.send();

   request.addEventListener('load', function () {
      console.log(this.responseText);

      const [data] = JSON.parse(this.responseText);

      console.log(data);

      const html = `
   <article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
         <h3 class="country__name">${data.name}</h3>
         <h4 class="country__region">${data.region}</h4>
         <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
         ).toFixed(1)}M people</p>
         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
   </article>
        `;
      countriesContainer.insertAdjacentHTML('beforeend', html);
      countriesContainer.style.opacity = '1';
   });
};

getCountryData('australia');
getCountryData('russia');
getCountryData('germany');
getCountryData('ukraine');
