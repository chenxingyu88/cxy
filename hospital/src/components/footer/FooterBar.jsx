import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './FooterBar.less';
import Home from '../app/app';
import Search from '../search/search';
import User from '../user/user';
import Page from '../page/page';


class FooterBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }
  };

  handleChange(e){
    const title = '123'
    this.setState({
    title: ''
    })
    // console.log(e.target)
    // this.props.changeTitle(title)
  }

  render() {
    let {title, tabList} = this.state
    return (
        <Router> 
           <div>
               <ul className='footer' onClick={this.handleChange.bind(this)}>
                    <li><Link to="/"><i className="icon iconfont icon-shouye2"></i><span>首页</span></Link></li>
                    <li><Link to="/search"><i className="icon iconfont icon-faxian1"></i><span>发现</span></Link></li>
                    <li><Link to="/user"><i className="icon iconfont icon-wode"></i><span>我的</span></Link></li>
                </ul>
                <Route exact path="/" component={Home}/>
                <Route exact path="/search" component={Search}/>
                <Route exact path="/user" component={User}>  
                  <Route path='/user/Page' component={Page}/>  
                </Route>
           </div>
        </Router> 

    )        
  }
}

export default FooterBar;