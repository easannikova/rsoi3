function buttonVisibleSD()
{
  let btnAdd = document.getElementById('btnAdd');
  btnAdd.style.display = 'none';
  let btnOK = document.getElementById('btnOK');
  btnOK.style.display = 'none';
  let btnDelete = document.getElementById('btnDelete');
  btnDelete.style.display = 'inline-block';
  let btnSave = document.getElementById('btnSave');
  btnSave.style.display = 'inline-block';
}

function deleteForm()
{
  let app = document.getElementById('root');

  for (i=0; i < app.childElementCount; i++)
  {
    text = app.childNodes[i].textContent;

    if (text != 'movies' && text != 'halls' && text != 'seanses')
      app.childNodes[i].remove();
      
    else
      page = app.childNodes[i].textContent;
  }
}

function fillFields(url, el)
{
  let app = document.getElementById('root');
  id = app.getAttribute('data-id');
  url += id;
  console.log("id"+id);
  /*for (i=0; i < app.childElementCount; i++)
  {
    text = app.childNodes[i].getAttribute();

    if (text != 'movies' && text != 'halls' && text != 'seanses')
      app.childNodes[i].remove();
      
    else
      page = app.childNodes[i].textContent;
  }*/

  var request = new XMLHttpRequest();

  request.open('GET', url, true);
  request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    let elem = data[el];
    if (request.status >= 200 && request.status < 400) {
      let row = [];

      for (i=0; i < app.childElementCount; i++)
      {
        let card = app.childNodes[i];

        let params = card.childNodes;
        let j = 2;
        for (i=0; i < card.childElementCount; i++)
        {
          if (params[i].tagName == "input")
          {
            params[i].value = elem[j];
            j+=1;
          }
        }
      }
    } 
  }
}

function EditMovieForm()
{
  let card = document.createElement('div');
      card.setAttribute('class', 'card');
      card.setAttribute('id', 'card');

      /*var request = new XMLHttpRequest();

request.open('GET', 'http://localhost:5000/api/1.0/movies', true);
request.onload = function () {*/

      let h1 = document.createElement('h1');
      h1.textContent = "Movie: ";

      let p1 = document.createElement('p');
      p1.textContent = 'Title: ';

      let title = document.createElement('input');
      title.style.left = 200 + 'px';
      title.style.top = 170 + 'px';
      title.style.position = 'fixed';
      card.appendChild(h1);
      card.appendChild(p1);
      card.appendChild(title);
      app.appendChild(card);
}

function EditHallForm()
{
  let card = document.createElement('div');
      card.setAttribute('class', 'card');
      card.setAttribute('id', 'card');

      /*var request = new XMLHttpRequest();

request.open('GET', 'http://localhost:5000/api/1.0/movies', true);
request.onload = function () {*/

      let h1 = document.createElement('h1');
      h1.textContent = "Hall: ";

      let p1 = document.createElement('p');
      p1.textContent = 'Number: ';

      let number = document.createElement('input');
      number.style.left = 200 + 'px';
      number.style.top = 170 + 'px';
      number.style.position = 'fixed';
      card.appendChild(h1);
      card.appendChild(p1);
      card.appendChild(number);
      app.appendChild(card);
}

function EditSeanseForm()
{
  let card = document.createElement('div');
      card.setAttribute('class', 'card');
      card.setAttribute('id', 'card');
      console.log(app.getAttribute("data-id"));
      /*var request = new XMLHttpRequest();

request.open('GET', 'http://localhost:5000/api/1.0/movies', true);
request.onload = function () {*/

      let h1 = document.createElement('h1');
      h1.textContent = "Seanse: ";

      let p1 = document.createElement('p');
      p1.textContent = 'Hall number: ';
      let p2 = document.createElement('p');
      p2.textContent = 'Movie title: ';

      let movie_title = document.createElement('input');
      movie_title.style.left = 200 + 'px';
      movie_title.style.top = 170 + 'px';
      movie_title.style.position = 'fixed';
      let hall_number = document.createElement('input');
      hall_number.style.left = 200 + 'px';
      hall_number.style.top = 230 + 'px';
      hall_number.style.position = 'fixed';
      card.appendChild(h1);
      card.appendChild(p1);
      card.appendChild(p2);

      card.appendChild(movie_title);
      card.appendChild(hall_number);

      app.appendChild(card);
}


function EditMovie()
{
  console.log("delete");
  deleteForm();
  url = 'http://localhost:5000/api/1.0/movies'+"/";
  fillFields(url, 'movie');
  EditMovieForm();
  buttonVisibleSD();
}

function EditHall()
{
  console.log("delete");
  deleteForm();
  url = 'http://localhost:5001/api/1.0/halls'+"/";
  fillFields(url, 'hall');
  EditHallForm();
  buttonVisibleSD();
}

function EditSeanse()
{
  console.log("delete");
  deleteForm();
  url = 'http://localhost:5002/api/1.0/seanses'+"/";
  fillFields(url, 'seanse');
  EditSeanseForm();
  buttonVisibleSD();
}


