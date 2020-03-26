const app = document.getElementById('root');


const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container)


// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://coronavirus-19-api.herokuapp.com/countries/nigeria', true)

request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

 const card = document.createElement('div')
      card.setAttribute('class', 'card')

      /* mehn, I don't need this

      const h1 = document.createElement('h1')
      h1.textContent = data.country*/

      const p = document.createElement('p')
     data.cases = data.cases
      p.textContent = `Total Confirmed:  ${data.cases}`

     const h2 = document.createElement('h2')
     data.active = data.active
      h2.textContent = `Active Cases: ${data.active}`

      const h3 = document.createElement('h3')
     data.recovered = data.recovered
     h3.textContent = `Total Recovered:  ${data.recovered}`
     
     // People wey die! mehn nobody go die againooo
     const h4 = document.createElement('h4')
     data.deaths = data.deaths
     h4.textContent = `Total Deaths: ${data.deaths}`


      container.appendChild(card)
      
      card.appendChild(p)
      card.appendChild(h2)
      card.appendChild(h3)
      card.appendChild(h4)


}


request.send()
