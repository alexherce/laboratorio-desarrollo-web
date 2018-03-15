import React from 'react';
import { render } from 'react-dom';

var gasStation = {
  name: "Gas Interlomas",
  brand: "Shell",
  price: 12.90,
  comments: ["hola", "mundo"]
}

let counter = 0;

const showPrice = () => {
  if(!gasStation.price)
  return "";
  else
  return <p>{gasStation.price}</p>;
};

const addOne = () => {
  console.log("add one");
  counter++;
  renderPage();
};

const deleteComment = (e) => {
  const index = e.target.id;
  if(index !== undefined && index > -1) {
    gasStation.comments.splice(index, 1);
    renderPage();
  }
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const comment = e.target.elements.comment.value;
  if(comment !== undefined) {
    gasStation.comments.push(comment);
    e.target.elements.comment.value = "";
    renderPage();
  }
};


const renderPage = () => {
  const template = (
    <div>
      <div className="row">
        <div className="col-lg-12">
          {gasStation.brand && gasStation.brand === "Shell" && <h2>{gasStation.brand}</h2>}
          <h4>{gasStation.name}</h4>
          {showPrice()}
          <p>Counter: {counter}</p>
          <button id="12" className="btn btn-primary" onClick={addOne}>Add One</button>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-lg-12">
          <p>{gasStation.comments.length > 0 ? 'Comentarios: ' : 'Sin comentarios'}</p>
          <ul className="list-group">
            {gasStation.comments.map((object:string,i:number)=>{
              return <li className="list-group-item" key={i} id={i}>{object} <button id={i} className="btn btn-danger btn-sm float-right" onClick={deleteComment}>X</button></li>
            })}
          </ul>
        </div>
      </div>

      <div className="form-group row mt-3">
        <div className="col-lg-12">
          <form onSubmit={onFormSubmit}>
            <ul className="list-group">
              <li className="list-group-item"><input type="text" className="form-control" name="comment" id="comment"></input></li>
              <li className="list-group-item"><button className="btn btn-success form-control">Agregar comentario</button></li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
  render(template, document.getElementById('app'));
}

renderPage();
