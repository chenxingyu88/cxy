import React, {Component} from 'react';
import './index.less';


 function FindList(props){
    let {findlist} = props
    return (    
            <li className="FindList">
                <h1>{findlist.title}</h1>
                {
                   findlist.list.map((items,index)=>{
                     return   <dl key={index}>
                                <dd>
                                    <h2>{items.title}</h2>
                                    <p>{items.cont}</p>
                                </dd>
                                <dt>
                                    <img src={items.src} alt=""/>
                                </dt>
                            </dl>
                    })
                }
            </li>
    )
}

export default FindList