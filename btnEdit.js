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

function fillFields()
{
  let app = document.getElementById('root');

  for (i=0; i < app.childElementCount; i++)
  {
    text = app.childNodes[i].getAttribute();

    if (text != 'movies' && text != 'halls' && text != 'seanses')
      app.childNodes[i].remove();
      
    else
      page = app.childNodes[i].textContent;
  }
}

function EditMovie()
{
  console.log("delete");
  deleteForm();
  AddMovieForm();
  buttonVisibleSD();
}

function EditHall()
{
  console.log("delete");
  deleteForm();
  AddHallForm();
  buttonVisibleSD();
}

function EditSeanse()
{
  console.log("delete");
  deleteForm();
  AddSeanseForm();
  buttonVisibleSD();
}

function btnDelete()
{
  /*let app = document.getElementById('root');
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
  buttonVisibility();*/
}
