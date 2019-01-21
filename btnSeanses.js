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

  var request = new XMLHttpRequest();

  request.open('GET', 'http://localhost:5002/api/1.0/seanses', true);
  request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    console.log(data['seanses']);
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
  
        card.appendChild(h1);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        
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
