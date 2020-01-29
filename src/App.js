import React from 'react';
import Menu from './Menu';
import ListView from './ListView';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <div className="App">
        <Menu></Menu>
        <ListView></ListView>
      </div>
    );
  }
}

export default App;