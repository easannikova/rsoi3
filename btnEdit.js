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

function EditMovie()
{
  console.log("delete");
  AddMovieForm();
  buttonVisibleSD();
}

function EditHall()
{
  console.log("delete");
  AddHallForm();
  buttonVisibleSD();
}

function EditSeanse()
{
  console.log("delete");
  AddSeanseForm();
  buttonVisibleSD();
}
