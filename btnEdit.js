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

function EditMovie()
{
  console.log("delete");
  deleteForm();
  url = 'http://localhost:5000/api/1.0/movies'+"/";
  fillFields(url, 'movie');
  AddMovieForm();
  buttonVisibleSD();
}

function EditHall()
{
  console.log("delete");
  deleteForm();
  url = 'http://localhost:5001/api/1.0/halls'+"/";
  fillFields(url, 'hall');
  AddHallForm();
  buttonVisibleSD();
}

function EditSeanse()
{
  console.log("delete");
  deleteForm();
  url = 'http://localhost:5002/api/1.0/seanses'+"/";
  fillFields(url, 'seanse');
  AddSeanseForm();
  buttonVisibleSD();
}


