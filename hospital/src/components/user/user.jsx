import React, { Component } from 'react';
import './user.less';
import LoginAvatar from './components/LoginAvatar' 
import InfoList from './components/Infolist' 



class User extends Component {
    constructor(props){
      super(props)
      this.state={
      }
     }
       render() { 
           return (
                <div className="User">
                    <LoginAvatar></LoginAvatar>
                    <InfoList></InfoList>
                    
                </div>
           )
       }
 }

export default User