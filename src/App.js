import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

class App extends Component {
  state = {
    theme: 'light',
    title: 'My Super Web Company',
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
    const { theme, title } = this.state;

    return (
      <Fragment>
        <Header title={title} />
        <div
          className={`container`}
          style={theme === 'dark' ? darkStyle : defaultStyle}
        >
          <p>Testing React Classes</p>

          <button onClick={() => this.changeTheme()}>Change Theme</button>
        </div>
        <Footer text={'value'} theme={theme} />
      </Fragment>
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

export default App;
