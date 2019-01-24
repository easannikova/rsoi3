function btnHalls()
{
  let list = ['movies', 'halls', 'halls']
  let app = document.getElementById('root');
  for (i=0; i < app.childElementCount; i++)
  {
    text = app.childNodes[i].textContent;

    if (text != 'movies' && text != 'halls' && text != 'seanses')
      app.childNodes[i].remove();
    else
      app.childNodes[i].textContent = 'halls';
  }
  let container_halls = document.createElement('div');
  container_halls.setAttribute('class', 'container_halls');


  var request = new XMLHttpRequest();

  let btnDelete = document.getElementById('btnDelete');
  btnDelete.style.display = 'none';
  let btnSave = document.getElementById('btnSave');
  btnSave.style.display = 'none';
  let btnAdd = document.getElementById('btnAdd');
  btnAdd.style.display = 'inline-block';
  let btnOK = document.getElementById('btnOK');
  btnOK.style.display = 'none';
  request.open('GET', 'http://localhost:5001/api/1.0/halls', true);
  request.onload = function () {

  let i = 1;
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    data = data['halls'];
    if (request.status >= 200 && request.status < 400) {
      data.forEach(hall => {
        let card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('id', 'card');

        let h1 = document.createElement('h1');
        h1.textContent = 'Hall №'+hall.number;

        let p2 = document.createElement('p');
        p2.textContent = 'Floor: '+`${hall.floor}`;
        let p1 = document.createElement('p');
        p1.textContent = 'Seats count: '+`${hall.seats_count}`;
        let p3 = document.createElement('p');
        p3.textContent = '3D: '+`${hall.is3d}`;

        let btnEdit = document.createElement('div');
        btnEdit.setAttribute('class', 'btnEdit');
        btnEdit.setAttribute('id', 'btnEdit'+i.toString());
        btnEdit.setAttribute('onclick', 'EditHall()');
        app.setAttribute('data-id', i);

        btnEdit.innerHTML = 'Edit';
        i+=1;
  
        card.appendChild(h1);
        card.appendChild(p2);
        card.appendChild(p1);
        card.appendChild(p3);
        card.appendChild(btnEdit);

        container_halls.appendChild(card);

        app.appendChild(container_halls);
      });
    } else {
      let errorMessage = document.createElement('marquee');
      errorMessage.textContent = `Gah, it's not working!`;
      app.appendChild(errorMessage);
    }
  }

  request.send();
}
