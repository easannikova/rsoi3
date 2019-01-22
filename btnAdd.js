function AddMovieForm(myh1)
{
  let card = document.createElement('div');
  card.setAttribute('class', 'card');
  card.setAttribute('id', 'card');

  let h1 = document.createElement('h1');
  h1.textContent = "New movie: ";

  let title = document.createElement('input');
  title.style.left = 200 + 'px';
  title.style.top = 170 + 'px';
  title.style.position = 'fixed';
  title.textContent = 'title';

  let country = document.createElement('input');
  country.style.left = 200 + 'px';
  country.style.top = 230 + 'px';
  country.style.position = 'fixed';
  country.textContent = 'country';

  let year = document.createElement('input');
  year.style.left = 200 + 'px';
  year.style.top = 290 + 'px';
  year.style.position = 'fixed';
  year.textContent = 'year';

  let FC = document.createElement('input');
  FC.style.left = 200 + 'px';
  FC.style.top = 350 + 'px';
  FC.style.position = 'fixed';
  FC.textContent = 'FC';

  let rating = document.createElement('input');
  rating.style.left = 200 + 'px';
  rating.style.top = 410 + 'px';
  rating.style.position = 'fixed';
  rating.textContent = 'rating';

  /*let genre = document.createElement('input');
  genre.style.left = 200 + 'px';
  genre.style.top = 470 + 'px';
  genre.style.position = 'fixed';
  genre.textContent = 'genre';*/

  let h_title = document.createElement('p');
  h_title.textContent = 'Title';
  let h_country = document.createElement('p');
  h_country.textContent = 'Country';
  let h_year = document.createElement('p');
  h_year.textContent = 'Year';
  let h_FC = document.createElement('p');
  h_FC.textContent = 'FC';
  let h_rating = document.createElement('p');
  h_rating.textContent = 'Rating';
  //let h_genre = document.createElement('p');
  //h_genre.textContent = 'Genre';

  card.appendChild(h1);
  card.appendChild(title);
  card.appendChild(country);
  card.appendChild(year);
  card.appendChild(FC);
  card.appendChild(rating);
  //card.appendChild(genre);

  card.appendChild(h_title);
  card.appendChild(h_country);
  card.appendChild(h_year);
  card.appendChild(h_FC);
  card.appendChild(h_rating);
  //card.appendChild(h_genre);
        
  app.appendChild(card);

  let btnAdd = document.getElementById('btnAdd');
  btn.style.display = 'none';
  let btnOK = document.getElementById('btnOK');
  btn.style.display = 'inline-block';
}

function AddHallForm()
{
  let card = document.createElement('div');
  card.setAttribute('class', 'card');
  card.setAttribute('id', 'card');
  let h1 = document.createElement('h1');
  h1.textContent = "New hall: ";
  let number = document.createElement('input');
  number.style.left = 200 + 'px';
  number.style.top = 170 + 'px';
  number.style.position = 'fixed';
  let floor = document.createElement('input');
  floor.style.left = 200 + 'px';
  floor.style.top = 230 + 'px';
  floor.style.position = 'fixed';
  let seats_count = document.createElement('input');
  seats_count.style.left = 200 + 'px';
  seats_count.style.top = 290 + 'px';
  seats_count.style.position = 'fixed';
  let is3d = document.createElement('input');
  is3d.style.left = 200 + 'px';
  is3d.style.top = 350 + 'px';
  is3d.style.position = 'fixed';

  let h_title = document.createElement('p');
  h_title.textContent = 'Number';
  let h_country = document.createElement('p');
  h_country.textContent = 'Floor';
  let h_year = document.createElement('p');
  h_year.textContent = 'Is 3D';
  let h_FC = document.createElement('p');
  h_FC.textContent = 'Seats count';

  card.appendChild(h1);
  card.appendChild(number);
  card.appendChild(floor);
  card.appendChild(seats_count);
  card.appendChild(is3d);

  card.appendChild(h_title);
  card.appendChild(h_country);
  card.appendChild(h_year);
  card.appendChild(h_FC);
        
  app.appendChild(card);

  let btnAdd = document.getElementById('btnAdd');
  btn.style.display = 'none';
  let btnOK = document.getElementById('btnOK');
  btn.style.display = 'inline-block';
}

function AddSeanseForm()
{
  let card = document.createElement('div');
  card.setAttribute('class', 'card');
  card.setAttribute('id', 'card');

  let h1 = document.createElement('h1');
  h1.textContent = "New seanse: ";
  let title = document.createElement('input');
  title.id = 'title';
  title.style.left = 200 + 'px';
  title.style.top = 170 + 'px';
  title.style.position = 'fixed';
  let country = document.createElement('input');
  country.style.left = 200 + 'px';
  country.style.top = 230 + 'px';
  country.style.position = 'fixed';
  let year = document.createElement('input');
  year.style.left = 200 + 'px';
  year.style.top = 290 + 'px';
  year.style.position = 'fixed';
  let FC = document.createElement('input');
  FC.style.left = 200 + 'px';
  FC.style.top = 350 + 'px';
  FC.style.position = 'fixed';

  let h_title = document.createElement('p');
  h_title.textContent = 'Movie title';
  let h_country = document.createElement('p');
  h_country.textContent = 'Hall number';
  let h_year = document.createElement('p');
  h_year.textContent = 'Data';
  let h_FC = document.createElement('p');
  h_FC.textContent = 'Time';

  card.appendChild(h1);
  card.appendChild(title);
  card.appendChild(country);
  card.appendChild(year);
  card.appendChild(FC);

  card.appendChild(h_title);
  card.appendChild(h_country);
  card.appendChild(h_year);
  card.appendChild(h_FC);
        
  app.appendChild(card);

  let btnAdd = document.getElementById('btnOK');
  btn.style.display = 'none';
  let btnOK = document.getElementById('btnAdd');
  btn.style.display = 'inline-block';
}


function btnAdd()
{
  let app = document.getElementById('root');
  let page;

  for (i=0; i < app.childElementCount; i++)
  {
    text = app.childNodes[i].textContent;

    if (text != 'movies' && text != 'halls' && text != 'seanses')
      app.childNodes[i].remove();
      
    else
      page = app.childNodes[i].textContent;
  }
  let btnDelete = document.getElementById('btnDelete');
  btnDelete.style.display = 'inline-block';
  let btnSave = document.getElementById('btnSave');
  btnSave.style.display = 'inline-block';
  switch (page)
  {
    case 'movies':
      AddMovieForm("New movie: ");
      break;
    case 'halls':
      AddHallForm("New hall: ");
      break;
    case 'seanses':
      AddSeanseForm("New seanse:");
      break;

  }
}
