import React from 'react';
import ReactDOM from 'react-dom';
import SearchComponent from "./SearchComponent";

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchComponent/>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));