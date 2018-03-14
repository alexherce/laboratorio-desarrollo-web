import React from 'react';
import { render } from 'react-dom';

let gasStation = {
  name: "Gas Interlomas",
  brand: "Shell",
  price: 12.90,
  comments: [1,2,3,4,234,345,15623]
}

let counter = 0;

const showPrice = () => {
  if(!gasStation.price)
    return "";
  else
    return '<p>{gasStation.price}</p>';
};

const addOne = () => {
  console.log("add one");
  counter++;
  render();
};

const onFormSubmit = (e) => {
  e.preventDefault();
  console.log("onFormSubmit");
  const comment = e.target.elements.comment.value;
  if(comment) {
    gasStation.comments.push(comment);
    e.target.elements.comment.value = "";
    render();
  }
};


const renderPage = () => {
  const template = (
    <div>
      <h3>{gasStation.name}</h3>
      <ul>
        {(gasStation.brand && gasStation.brand == "Shell") && <li>Brand: {gasStation.brand}</li>}
      </ul>
      {showPrice()}
      <p>Counter: {counter}</p>
      <button id="12" className="myClass" onClick={addOne}>+1</button>
      <p>{gasStation.comments.length > 0 ? 'Comentarios: ' : 'Sin comentarios'}</p>
      {gasStation.comments}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="comment"></input>
        <button>Agregar comentario</button>
      </form>
    </div>
  );
  ReactDOM.render(template, document.getElementById('app'));
}

renderPage();
