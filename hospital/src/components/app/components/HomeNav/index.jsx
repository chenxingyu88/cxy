import React, {Component} from 'react';
import './index.less';

 function HomeNav(props){
    let {navlist} = props
    console.log()
    return (    
         <li className="Li">{navlist}</li>
    )
}

export default HomeNav
