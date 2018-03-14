import React from 'react';
import { render } from 'react-dom';

var displayImg = false;

const imageDisplay = () => {
  if (displayImg === true) {
    return (<img src="http://ksassets.timeincuk.net/wp/uploads/sites/46/2016/06/obama-1.gif" alt="lol"/>);
  } else {
    return null;
  }
};

const displayChange = () => {
  if (displayImg === true)
    displayImg = false;
  else
    displayImg = true;

  renderPage();
};

const renderPage = () => {
  const template = (
    <div>
      <button id="12" className="myClass" onClick={displayChange}>Show/Hide</button>
      <div>{imageDisplay()}</div>
    </div>
  );

  render(template, appRoot);
}

const appRoot = document.getElementById('app');

renderPage();
