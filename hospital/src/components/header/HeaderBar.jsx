import React, { Component } from 'react';
import './HeaderBar.less';


function List({color="#f00",test="我是列表"}){
  return (
    <li className={`btn btn-${color}`}>{test}</li>
  )
} 

function tabList(){
  return (
    <a></a>
  )
}

class HeaderBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      "title": '首页'
    }
  };
  
  render() {
    let {title, tabList} = this.state
    return (
      <header>
          <div className='left'>
             <span className='clone'>X</span>
          </div>
          <div className='middle'>
             <h1>{title}</h1>
          </div>
          <div className='right'>
             <i className="icon iconfont icon-icon28"></i>
          </div>
      </header>
    )        
  }
}

export default HeaderBar;