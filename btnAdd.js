function AddMovieForm()
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

  card.appendChild(h1);
  card.appendChild(title);
  card.appendChild(country);
  card.appendChild(year);
  card.appendChild(FC);
  card.appendChild(rating);

  card.appendChild(h_title);
  card.appendChild(h_country);
  card.appendChild(h_year);
  card.appendChild(h_FC);
  card.appendChild(h_rating);
        
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
  let title = document.createElement('input');
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
  h_title.textContent = 'Number';
  let h_country = document.createElement('p');
  h_country.textContent = 'Floor';
  let h_year = document.createElement('p');
  h_year.textContent = 'Is 3D';
  let h_FC = document.createElement('p');
  h_FC.textContent = 'Seats count';

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

  let btnAdd = document.getElementById('btnAdd');
  btn.style.display = 'none';
  let btnOK = document.getElementById('btnOK');
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
  
  switch (page)
  {
    case 'movies':
      AddMovieForm();
      break;
    case 'halls':
      AddHallForm();
      break;
    case 'seanses':
      AddSeanseForm();
      break;

  }
}
