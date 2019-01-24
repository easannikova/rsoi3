function buttonVisibility()
{
  let btnAdd = document.getElementById('btnAdd');
  btn.style.display = 'inline-block';
  let btnOK = document.getElementById('btnOK');
  btn.style.display = 'none';
}

let id;
function SaveValues()
{
  let app = document.getElementById('root');

  let row = [];
  id = app.getAttribute('data-id');
  console.log(id);

  for (i=0; i < app.childElementCount; i++)
  {
    let card = app.childNodes[i];

    let params = card.childNodes;
    console.log(params);
    let j = 0;
    for (i=0; i < card.childElementCount; i++)
    {
      if (params[i].tagName == 'INPUT')
      {  
        console.log("dsfwravfv");
        let value = params[i].value;
        if(value != undefined) //params[i].textContent;
        {
          row[j] = value;
          j++;
        }
      }
    }
  }
  console.log(row);
  return row;
}

function PutMovieForm(url, row)
{
  let app = document.getElementById('root');


  var request = new XMLHttpRequest();
  request.open('PUT', url, true);
  request.setRequestHeader("Content-Type", "application/json");

  data1 = JSON.stringify({'title': row[0]});
  request.send(data1);

  btnMvoies();
}

function PutHallForm(url, row)
{
  let app = document.getElementById('root');

  var request = new XMLHttpRequest();
  request.open('PUT', url, true);
  request.setRequestHeader("Content-Type", "application/json");

  data2 = JSON.stringify({'number': row[0]});
  console.log(data2);
  console.log(row[0]);
  request.send(data2);

  btnHalls();
}

function PutSeanseForm(url, row)
{
  let app = document.getElementById('root');
  
  var request = new XMLHttpRequest();
  request.open('PUT', url, true);
  request.setRequestHeader("Content-Type", "application/json");

  data3 = JSON.stringify({'value': row[0], 'object': 'movie_title'} );
  request.send(data);

  var request = new XMLHttpRequest();
  request.open('PUT', url, true);
  request.setRequestHeader("Content-Type", "application/json");

  data3 = JSON.stringify({'value': row[1], 'object': 'hall_number'});
  request.send(data3);

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
  
  let row = SaveValues();
  console.log(row);

  switch (page)
  {
    case 'movies':
      url = 'http://localhost:5000/api/1.0/movies/'+id;
      PutMovieForm(url, row);
      //res = ValidateMovieForm();
      //if (res)
        //PutMovieForm();
      
      break;
    case 'halls':
      url = 'http://localhost:5001/api/1.0/halls/'+id;      
      PutHallForm(url, row);
      break;
    case 'seanses':
      url = 'http://localhost:5002/api/1.0/seanses/'+id;
      PutSeanseForm(url, row);
      break;
  }
  buttonVisibility();
}
