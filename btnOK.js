function PutSeanseForm()
{
  let app = document.getElementById('root');

  for (i=0; i < app.childElementCount; i++)
  {
    text = app.childNodes[i].textContent;

    if (text != 'movies' && text != 'halls' && text != 'seanses')
      app.childNodes[i].remove();
    else
    app.childNodes[i].textContent = 'seanses';
  }

  let container_seanses = document.createElement('div');
  container_seanses.setAttribute('class', 'container_seanses');

  var request = new XMLHttpRequest();

  request.open('PUT', 'http://localhost:5002/api/1.0/seanses/5', true);
  
  request.send("{'object': 'hall_number', 'value': 'WILD'}");
  let btnAdd = document.getElementById('btnAdd');
  btn.style.display = 'none';
  let btnOK = document.getElementById('btnOK');
  btn.style.display = 'inline-block';
}

function PutMovieForm()
{
  let app = document.getElementById('root');
  let title;
  let country;
  let year;
  let FC;
  let rating;
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
      app.childNodes[i].textContent = 'movies';
  }

  var request_get = new XMLHttpRequest();
  let length;
  request_get.open('GET', 'http://localhost:5000/api/1.0/movies', true);
  request_get.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    data = data['movies'];
    length = data['length'];
    /*console.log('l'+length);
    console.log(length.toString());
    var request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:5000/api/1.0/movies/'+length.toString(), true);
    request.setRequestHeader("Content-Type", "application/json");

    var data = JSON.stringify({'title': row[0], 'country': row[1], 'year': row[2],
                                'FC': row[3], 'rating': row[4]});
    request.send(data);*/
  }
  request_get.send();

  let btnAdd = document.getElementById('btnAdd');
  btn.style.display = 'inline-block';
  let btnOK = document.getElementById('btnOK');
  btn.style.display = 'none';
  btnMovies();
}




function btnOK(url)
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
      PutMovieForm();
      break;
    case 'halls':
      url = 'http://localhost:5001/api/1.0/halls';      
      break;
    case 'seanses':
      url = 'http://localhost:5002/api/1.0/seanses';
      PutSeanseForm();
      break;
  }
}
