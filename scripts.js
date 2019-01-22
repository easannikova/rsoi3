//flex-wrap: wrap;


let app = document.getElementById('root');

let container_movies = document.createElement('div');
container_movies.setAttribute('class', 'container_movies');
let btn = document.getElementById('btnOK');

btn.style.display = 'none';
document.getElementById('btnOK').style.display = 'none';
var request = new XMLHttpRequest();

request.open('GET', 'http://localhost:5000/api/1.0/movies', true);
request.onload = function () {
  let page = document.createElement('mypage');
  page.setAttribute('value', 'movies');
  app.appendChild(page);
  page.textContent = 'movies';
  i = 1;
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  data = data['movies'];
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      let card = document.createElement('div');
      card.setAttribute('class', 'card');
      card.setAttribute('id', 'card');

      let btnEdit = document.createElement('div');
      btnEdit.setAttribute('class', 'btnEdit');
      btnEdit.setAttribute('id', 'btnEdit'+i.toString());
      btnEdit.setAttribute('onclick', 'EditMovie()');
      btnEdit.innerHTML = 'Edit';
      btnEdit.style.top = card.style.top + 350+'px';
      let left = 200+240*(i-1);
      btnEdit.style.left = card.style.left + left+'px';
      i+=1;

      let h1 = document.createElement('h1');
      h1.textContent = movie.title;

      let p1 = document.createElement('p');
      p1.textContent = 'Year: '+`${movie.year}`;
      let p2 = document.createElement('p');
      p2.textContent = 'Country: '+`${movie.country}`;
      let p3 = document.createElement('p');
      p3.textContent = 'FC: '+`${movie.FC}`;
      let p4 = document.createElement('p');
      p4.textContent = 'Rating: '+`${movie.rating}`;


      container_movies.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p3);
      card.appendChild(p4);
      card.appendChild(btnEdit);
      console.log(card);

    });
  } else {
    let errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}
app.appendChild(container_movies);

request.send();
