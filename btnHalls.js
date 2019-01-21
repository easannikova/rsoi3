function btnHalls()
{
  let list = ['movies', 'halls', 'seanses']
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

  request.open('GET', 'http://localhost:5001/api/1.0/halls', true);
  request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    console.log(data['halls']);
    data = data['halls'];
    if (request.status >= 200 && request.status < 400) {
      data.forEach(hall => {
        let card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('id', 'card');

        let h1 = document.createElement('h1');
        h1.textContent = hall.id+'. Hall #'+hall.number;

        let p1 = document.createElement('p');
        p1.textContent = 'Floor: '+`${hall.floor}`;

        card.appendChild(h1);
        card.appendChild(p1);
        container_halls.appendChild(card);
        app.appendChild(container_halls);

        console.log(app)
        
      });
    } else {
      let errorMessage = document.createElement('marquee');
      errorMessage.textContent = `Gah, it's not working!`;
      app.appendChild(errorMessage);
    }
  }

  console.log('gggggggggggggg'+app)
  request.send();
}