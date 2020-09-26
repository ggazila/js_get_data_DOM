'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const total = [...population]
  .map(x => Number(x.innerHTML.split(',').join('')))
  .reduce((a, b) => a + b);

totalPopulation.innerText = total.toLocaleString();
averagePopulation.innerText = (total / population.length).toLocaleString();
