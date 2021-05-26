import React, { Component } from 'react';
import Slider from '../slider/Slider';
import Menu from '../sortByCategory/Menu';

class Home extends Component {
  state = {
    theme: 'dark',
  };

  changeTheme() {
    // this.state.theme === 'light'
    //   ? this.setState({ theme: 'dark' })
    //   : this.setState({ theme: 'light' });

    if (this.state.theme === 'light') {
      return this.setState({ theme: 'dark' });
    }

    return this.setState({ theme: 'light' });
  }

  render() {
    const { theme } = this.state;

    return (
      <div
        className={`container`}
        style={theme === 'dark' ? darkStyle : defaultStyle}
      >
        <h2>Welcome Home</h2>
        <Slider />
        <Menu />
        <button onClick={() => this.changeTheme()}>Change Theme</button>
      </div>
    );
  }
}

const defaultStyle = {
  marginTop: '1em',
  backgroundColor: 'orangered',
};

const darkStyle = {
  marginTop: '1em',
  backgroundColor: '#293d50',
  color: 'white',
};

export default Home;
