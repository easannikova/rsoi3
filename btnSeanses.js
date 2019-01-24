function btnSeanses()
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


  let btnDelete = document.getElementById('btnDelete');
  btnDelete.style.display = 'none';
  let btnSave = document.getElementById('btnSave');
  btnSave.style.display = 'none';
  let btnAdd = document.getElementById('btnAdd');
  btnAdd.style.display = 'inline-block';
  let btnOK = document.getElementById('btnOK');
  btnOK.style.display = 'none';

  var request = new XMLHttpRequest();

  request.open('GET', 'http://localhost:5002/api/1.0/seanses', true);
  request.onload = function () {

    let i = 1;
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    data = data['seanses'];
    if (request.status >= 200 && request.status < 400) {
      data.forEach(seanse => {
        let card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('id', 'card');
        
        let h1 = document.createElement('h1');
        h1.textContent = "Seanse №"+seanse.id;

        let p1 = document.createElement('p');
        p1.textContent = 'Movie title: '+`${seanse.movie_title}`;
        let p2 = document.createElement('p');
        p2.textContent = 'Hall number: '+`${seanse.hall_number}`;
        let p3 = document.createElement('p');
        p3.textContent = 'Date: '+`${seanse.date}`;
        let p4 = document.createElement('p');
        p4.textContent = 'Time: '+`${seanse.time}`;

        let btnEdit = document.createElement('div');
        btnEdit.setAttribute('class', 'btnEdit');
        btnEdit.setAttribute('id', 'btnEdit'+i.toString());
        btnEdit.setAttribute('onclick', 'EditSeanse()');
        btnEdit.innerHTML = 'Edit';
        app.setAttribute('data-id', i);
        // btnEdit.style.top = card.style.top + 400+'px';
        // btnEdit.style.left = card.style.left + left+'px';
        i+=1;
  
        card.appendChild(h1);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        card.appendChild(btnEdit);
        
        container_seanses.appendChild(card);
      });
    app.appendChild(container_seanses);

    } else {
      let errorMessage = document.createElement('marquee');
      errorMessage.textContent = `Gah, it's not working!`;
      app.appendChild(errorMessage);
    }
  }
  request.send();
}
