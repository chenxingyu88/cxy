import React, { Component } from 'react';
import './App.css';
import HeaderBar from './components/header/HeaderBar';
import FooterBar from './components/footer/FooterBar';
import './static/css/common.css';
import './static/css/reset.css';
import './static/font/iconfont.css'
class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
    title: 0
  }
 }
  changeTitle(title){
    this.setState({title: title})
  }
  render() {
    return (
      <div className="App">
        <HeaderBar></HeaderBar>
        <FooterBar changeTitle={this.changeTitle.bind(this)}></FooterBar>
      </div>
    );
  }
}

export default App;
