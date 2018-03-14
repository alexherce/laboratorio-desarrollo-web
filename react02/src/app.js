var displayImg = false;

const imageDisplay = () => {
  if (displayImg == true) {
    return (<img src="http://ksassets.timeincuk.net/wp/uploads/sites/46/2016/06/obama-1.gif" alt="lol"/>);
  } else {
    return null;
  }
};

const displayChange = () => {
  if (displayImg == true)
    displayImg = false;
  else
    displayImg = true;

  render();
};

const render = () => {
  const template = (
    <div>
      <button id="12" className="myClass" onClick={displayChange}>Show/Hide</button>
      <div>{imageDisplay()}</div>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');

render();
