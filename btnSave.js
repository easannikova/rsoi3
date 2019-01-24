function buttonVisibility()
{
  let btnAdd = document.getElementById('btnAdd');
  btn.style.display = 'inline-block';
  let btnOK = document.getElementById('btnOK');
  btn.style.display = 'none';
}


function SaveMovie()
{
  let app = document.getElementById('root');
  let row = [];

  for (i=0; i < app.childElementCount; i++)
  {
    let card = app.childNodes[i];

    let params = card.childNodes;
    let j = 0;
    for (i=0; i < card.childElementCount; i++)
    {
      let value = params[i].value;
      if(value != undefined) //params[i].textContent;
      {
        row[j] = value;
        j++;
      }
    }
  }
  //alert("sdf");
  /*let app = document.getElementById('root');

  let text;
  for (i=0; i < app.childElementCount; i++)
  {
    text = app.childNodes[i].textContent;

    if (text != 'movies' && text != 'halls' && text != 'seanses')
      app.childNodes[i].remove();
    else
      app.childNodes[i].textContent = 'movies';
  }

  var request_get = new XMLHttpRequest();
  let data;
  request_get.open('GET', 'http://localhost:5000/api/1.0/movies', true);
  request_get.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    data = data['movies'];
    console.log('l'+data['length']);
    length = Object.assign(length, data['length']);
    text = data['length']
  }
  request_get.send();

  var request = new XMLHttpRequest();
  request.open('POST', 'http://localhost:5000/api/1.0/movies', true);
  request.setRequestHeader("Content-Type", "application/json");

  data = JSON.stringify({'id': 4, 'title': row[0], 'country': row[1], 'year': row[2],
                              'FC': row[3], 'rating': row[4], 'genre': row[5]});
  request.send(data);

  btnMovies();*/
}

function PutHallForm()
{
  let app = document.getElementById('root');
  let row = [];

  for (i=0; i < app.childElementCount; i++)
  {
    let id = app.childNodes[i].id;
    let card = app.childNodes[i];

    let params = card.childNodes;
    let j = 0;
    for (i=0; i < card.childElementCount; i++)
    {
      let value = params[i].value;
      if(value != undefined) //params[i].textContent;
      {
        row[j] = value;
        j++;
      }
    }
  }

  for (i=0; i < app.childElementCount; i++)
  {
    text = app.childNodes[i].textContent;

    if (text != 'movies' && text != 'halls' && text != 'seanses')
      app.childNodes[i].remove();
    else
    app.childNodes[i].textContent = 'halls';
  }

  var request = new XMLHttpRequest();
  request.open('POST', 'http://localhost:5001/api/1.0/halls', true);
  request.setRequestHeader("Content-Type", "application/json");

  data = JSON.stringify({'id': 4, 'number': row[0], 'floor': row[1], 'is3d': row[2],
                              'seats_count': row[3]});
  request.send(data);

  btnHalls();
}

function PutSeanseForm()
{
  let app = document.getElementById('root');
  let row = [];

  for (i=0; i < app.childElementCount; i++)
  {
    let id = app.childNodes[i].id;
    let card = app.childNodes[i];

    let params = card.childNodes;
    let j = 0;
    for (i=0; i < card.childElementCount; i++)
    {
      let value = params[i].value;
      if(value != undefined) //params[i].textContent;
      {
        row[j] = value;
        j++;
      }
    }
  }

  for (i=0; i < app.childElementCount; i++)
  {
    text = app.childNodes[i].textContent;

    if (text != 'movies' && text != 'halls' && text != 'seanses')
      app.childNodes[i].remove();
    else
    app.childNodes[i].textContent = 'seanses';
  }

  var request = new XMLHttpRequest();
  request.open('POST', 'http://localhost:5002/api/1.0/seanses', true);
  request.setRequestHeader("Content-Type", "application/json");

  data = JSON.stringify({'id': 6, 'hall_number': row[1], 'movie_title': row[0], 'data': row[2],
                              'time': row[3]});
  request.send(data);

  btnSeanses();
}

function btnSve()
{
  for (i=0; i < app.childElementCount; i++)
  {
    text = app.childNodes[i].textContent;

    if (text == 'movies' || text == 'halls' || text == 'seanses')
      page = app.childNodes[i].textContent;
    
  }
  
  switch (page)
  {
    case 'movies':
      url = 'http://localhost:5000/api/1.0/movies';
      res = ValidateMovieForm();
      if (res)
        PutMovieForm();
      break;
    case 'halls':
      url = 'http://localhost:5001/api/1.0/halls';      
      res = ValidateHallForm();
      if (res)
        PutHallForm();
      break;
    case 'seanses':
      url = 'http://localhost:5002/api/1.0/seanses';
      PutSeanseForm();
      break;
  }
  buttonVisibility();
}
