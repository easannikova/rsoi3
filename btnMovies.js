function btnMovies()
{
  let app = document.getElementById('root');
  for (i=0; i < app.childElementCount; i++)
  {
    text = app.childNodes[i].textContent;

    if (text != 'movies' && text != 'halls' && text != 'seanses')
      app.childNodes[i].remove();
    else
    app.childNodes[i].textContent = 'movies';
  }

let container_movies = document.createElement('div');
container_movies.setAttribute('class', 'container_movies');

let btnDelete = document.getElementById('btnDelete');
btnDelete.style.display = 'none';
let btnSave = document.getElementById('btnSave');
btnSave.style.display = 'none';
let btnAdd = document.getElementById('btnAdd');
btnAdd.style.display = 'inline-block';
let btnOK = document.getElementById('btnOK');
btnOK.style.display = 'none';

var request = new XMLHttpRequest();

request.open('GET', 'http://localhost:5000/api/1.0/movies', true);
request.onload = function () {

  let i = 1;
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  data = data['movies'];
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      let card = document.createElement('div');
      card.setAttribute('class', 'card');
      card.setAttribute('id', 'card');

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
      /*let p5 = document.createElement('p');
      p5.textContent = 'Genre: '+`${movie.genre}`;*/

      let btnEdit = document.createElement('div');
      btnEdit.setAttribute('class', 'btnEdit');
      btnEdit.setAttribute('id', 'btnEdit'+i.toString());
      btnEdit.setAttribute('onclick', 'EditMovie()');
      btnEdit.innerHTML = 'Edit';
      btnEdit.style.top = card.style.top + 350+'px';
      let left = 200+240*(i-1);
      btnEdit.style.left = card.style.left + left+'px';
      i+=1;

      container_movies.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p3);
      card.appendChild(p4);
      card.appendChild(btnEdit);
    });
  } else {
    let errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}
app.appendChild(container_movies);

request.send();

}
