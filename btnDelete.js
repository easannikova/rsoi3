function buttonVisibility()
{
  let btnAdd = document.getElementById('btnAdd');
  btn.style.display = 'inline-block';
  let btnOK = document.getElementById('btnOK');
  btn.style.display = 'none';
}

function DeleteElement(id, url)
{
  var request = new XMLHttpRequest();
  request.open('DELETE', url+id, true);
  request.setRequestHeader("Content-Type", "application/json");

  request.send();
}

function btnDlte()
{
  let app = document.getElementById('root');
  let id ;

  for (i=0; i < app.childElementCount; i++)
  {
    text = app.childNodes[i].textContent;

    if (text == 'movies' || text == 'halls' || text == 'seanses')
      page = app.childNodes[i].textContent;

    id = app.getAttribute('data-id');
    console.log(id);
  }
  
  switch (page)
  {
    case 'movies':
      url = 'http://localhost:5000/api/1.0/movies/';
      break;
    case 'halls':
      url = 'http://localhost:5001/api/1.0/halls/';      
      break;
    case 'seanses':
      url = 'http://localhost:5002/api/1.0/seanses/';
      break;
  }
  DeleteElement(id, url);
  buttonVisibility();
}
