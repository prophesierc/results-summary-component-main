/*
  IPO Chart
  
  Author: ProphesierC
  Date: 6/16/2024
  Modified: 6/17/2024

*/

class Elements 
{
  constructor() 
  {
    this.fetchJSON();
  }

  fetchJSON() //gets json data
  {
    fetch('./data.json') // fetchs url
      .then(response => response.json()) // parses json
      .then(data => { 
        this.updateResults(data);
      })
  }

  updateResults(results) 
  {
    results.forEach(result => 
    {
      const category = result.category.toLowerCase();
      const icon = document.getElementById(`${category}-icon`);
      const ratioP = document.getElementById(`${category}-ratio`);

      if (icon) 
      {
        icon.src = result.icon;
        icon.alt = `${result.category} Icon`;
      }

      if (ratioP) 
      {
        ratioP.textContent = `${result.score} `;
      }
    });
  }
}

const element = new Elements();