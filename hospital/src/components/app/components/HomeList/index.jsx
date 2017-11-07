import React, {Component} from 'react';
import './index.less';


 function HomeList(props){
    const {homelist} = props;
    return (    
        <div className="HomeList">
            <li>
                <dl>
                    <dt>
                        <img src={homelist.src} alt=""/>
                    </dt>
                    <dd>
                        <h1>{homelist.title}</h1>
                        <p>{homelist.describe}</p>
                        <span><em>{homelist.price}</em>元起购买</span>
                        <b>{homelist.rennum}人</b>
                    </dd>
                </dl>
            </li>
        </div>
    )
}

export default HomeList