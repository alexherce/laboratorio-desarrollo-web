import React from 'react';
import { render } from 'react-dom';

class MyApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      array: ["test1", "test2", "test3"],
      test: "hola"
    };
  }

  pushToArray = (element) => {
    var updateArray = this.state.array;
    updateArray.push(element);

    //this.state.array.push(element);
    //render(<MyApp/>, document.getElementById("app"));

    this.setState({array: updateArray});
  };

  render() {
    const info = {
      title: "TITLE",
      subtitle: "Hola"
    }

    return(
      <div>
        <Header info={info}/>
        <Action/>
        <p>{this.state.test}</p>
        <Options array={this.state.array} fn={this.pushToArray}/>
      </div>
    );
  }
}

class Options extends React.Component {

  submitForm = (e) => {
    e.preventDefault();
    var textoTmp = e.target.texto.value;
    if (textoTmp !== "" && textoTmp.replace(/\s/g,"") !== "") {
      alert(e.target.texto.value);
      this.props.fn(e.target.texto.value);
    }
  }

  render() {
    var array = this.props.array;
    var rows = [];

    for (var i = 0; i < array.length; i++) {
      rows.push(<Option array={array} key={i} indx={i} />);
    }

    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input type="text" id="texto"></input>
          <button>Send</button>
        </form>
        <br/><br/>
        <h2>Arreglo:</h2>
        {rows}
      </div>
    );
  }
}

class Option extends React.Component {
  deleteButton = (e) => {
    alert(e.target.id);
  }

  render() {
    return(
      <div>
        <p id={this.props.indx}>{this.props.array[this.props.indx]}</p>
        <button onClick={this.deleteButton} id={this.props.array[this.props.indx]}>Borrar</button>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.info.title}</h1>
        <h2>{this.props.info.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>Pick option</button>
      </div>
    );
  }
}

render(<MyApp/>, document.getElementById("app"));
