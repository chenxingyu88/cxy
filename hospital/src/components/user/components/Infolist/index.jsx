import React, {Component} from 'react';
import './index.less';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

 function InfoList(props){

    return (  
       <ul className="list">  
            <li className="infolist">
                <Link  to="/user/Page">
                  <i className="icon iconfont icon-bao"></i>
                  <div>我的保障</div>
                </Link>
            </li>
            <li className="infolist">
                <i className="icon iconfont icon-gerenxinxi"></i>
                <div>投保人信息</div>
            </li>
            <li className="infolist">
                <i className="icon iconfont icon-xianxingpeifu"></i>
                <div>申请理赔</div>
            </li>
            <li className="infolist">
                <i className="icon iconfont icon-tui"></i>
                <div>申请退保</div>
            </li>
            <li className="infolist">
                <i className="icon iconfont icon-xu"></i>
                <div>申请续保</div>
            </li>
            <li className="infolist">
                <i className="icon iconfont icon-jilu"></i>
                <div>销售记录</div>
                
            </li>
            <li className="infolist">
                <i className="icon iconfont icon-shezhi"></i>
                <div>设置</div>
            </li>
       </ul>
    )
}

export default InfoList