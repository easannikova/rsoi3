function buttonVisibility()
{
  let btnAdd = document.getElementById('btnAdd');
  btn.style.display = 'inline-block';
  let btnOK = document.getElementById('btnOK');
  btn.style.display = 'none';
}

function ValidateMovieForm()
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

  let year  = parseInt(row[2], 10);
  let err_year = "Error! Inccorect value of year";
  let rating =  parseInt(row[4], 10);
  let err_rating = "Error! Inccorect value of rating";
  let FC  = parseInt(row[3], 10);
  let err_FC = "Error! Inccorect value of FC";
  let err = "";
  if (year < 1900 || year > 2019 || year == undefined)
    err = err_year;

  if (FC < 0 || FC > 21 || FC == undefined)
    err = err_FC;

  if (rating < 0 || rating > 10 || rating == undefined)
    err = err_rating;

  if (err != "")
  {
    alert(err);
    btnMovies();
    return false;
  }
  return true;

}

function ValidateHallForm()
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

  let year = parseInt(row[0], 10);
  let err_year = "Error! Inccorect value of number";
  let rating = parseInt(row[1], 10);
  let err_rating = "Error! Inccorect value of floor";
  let FC = parseInt(row[2], 10);
  let err_FC = "Error! Inccorect value of seats count";
  let is3d = parseInt(row[3], 10);
  let err_3d = "Error! Inccorect value of 3D parametre";
  let err = "";
  console.log("3dddddddddd",is3d);
  
  if (year <=0 || year == undefined)
    err = err_year;

  if (FC < 0  || FC == undefined)
    err = err_FC;

  if (rating < 0 || rating == undefined)
    err = err_rating;
  console.log("3dddddddddd",is3d);
  if ((is3d != 'false' && is3d != 'False' ) || (is3d != 'true' && is3d != 'True') || is3d == undefined)
    err = err_3d;

  if (err != "")
  {
    alert(err);
    btnHalls();
    return false;
  }
  return true;
}

function ValidateHallForm()
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

  console.log("row", row);
  let year = parseInt(row[0], 10);
  let err_year = "Error! Inccorect value of number";
  let rating = parseInt(row[1], 10);
  let err_rating = "Error! Inccorect value of floor";
  let FC = parseInt(row[3], 10);
  let err_FC = "Error! Inccorect value of seats count";
  let is3d = row[2]
  let err_3d = "Error! Inccorect value of 3D parametre";
  let err = "";
  
  console.log(year, rating, FC, is3d);
  if (year <=0 || year == undefined)
    err = err_year;

  if (FC < 0  || FC == undefined)
    err = err_FC;

  if (rating < 0 || rating == undefined)
    err = err_rating;
    console.log("3dddddddddd",is3d, year, rating, FC);
  if ((is3d != 'false' && is3d != 'true') || is3d == undefined)
      err = err_3d;

  if (err != "")
  {
    alert(err);
    btnHalls();
    return false;
  }
  return true;
}

function ValidateSeanseForm()
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

  let rating = parseInt(row[1], 10);
  let err_rating = "Error! Inccorect value of hall number";
  /*let FC = parseInt(row[2], 10);
  let err_FC = "Error! Inccorect value of date";
  let is3d = parseInt(row[3], 10);
  let err_3d = "Error! Inccorect value of time";*/
  let err = "";
  
  console.log(rating, FC, is3d);

  /*if (FC < 0  || FC == undefined)
    err = err_FC;*/

  if (rating < 0 || rating == undefined)
    err = err_rating;
  /*if ((is3d != false && is3d != true) || is3d == undefined)
    err = err_3d;*/

  if (err != "")
  {
    alert(err);
    btnHalls();
    return false;
  }
  return true;
}

function PostMovieForm()
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

  data = JSON.stringify({'id': 100, 'title': row[0], 'country': row[1], 'year': row[2],
                              'FC': row[3], 'rating': row[4], 'genre': row[5]});
  request.send(data);

  btnMovies();
}

function PostHallForm()
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

  data = JSON.stringify({ 'number': row[0], 'floor': row[1], 'is3d': row[2],
                              'seats_count': row[3]});
  request.send(data);

  btnHalls();
}

function PostSeanseForm()
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

  data = JSON.stringify({'id': 100, 'hall_number': row[1], 'movie_title': row[0], 'data': row[2],
                              'time': row[3]});
  request.send(data);

  btnSeanses();
}

function btnOK()
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
        PostMovieForm();
      break;
    case 'halls':
      url = 'http://localhost:5001/api/1.0/halls';      
      res = ValidateHallForm();
      if (res)
        PostHallForm();
      break;
    case 'seanses':
      url = 'http://localhost:5002/api/1.0/seanses';
      PostSeanseForm();
      break;
  }
  buttonVisibility();
}
