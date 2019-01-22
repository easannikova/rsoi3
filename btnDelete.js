function buttonVisibility()
{
  let btnAdd = document.getElementById('btnAdd');
  btn.style.display = 'inline-block';
  let btnOK = document.getElementById('btnOK');
  btn.style.display = 'none';
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
