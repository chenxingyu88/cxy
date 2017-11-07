import React, {Component} from 'react';
import './app.less';
import HomeNav from './components/HomeNav'
import HomeList from './components/HomeList'

function Nav(props){
    let {navlist} = props;
    return (
        <ul className="Nav">
            {
              navlist.map((items,index)=>{
                 return <HomeNav navlist={items} key={index}></HomeNav>
              })
            }
        </ul>
    )
}

function List(props){
    let {homelist} = props;
    return (
        <ul className="list">
          {
            homelist.map((items,index)=>{
               return <HomeList homelist={items} key={index}></HomeList>
            })
          }
        </ul>
    )
}

class Home extends Component {
    constructor(props){
      super(props)
      this.state={
        homelist:[
          {
            "src":"http://www.epicc.com.cn/wap/views/personelCenter/index/images/ZKF.png",
            "title":"安心防癌",
            "describe":"低至10元/年,续保有宽限期,中青年人群专属",
            "price":"10",
            "rennum":"12"
          },
          {
            "src":"http://www.epicc.com.cn/wap/views/personelCenter/index/images/JAB.png",
            "title":"安心防癌",
            "describe":"低至10元/年,续保有宽限期,中青年人群专属",
            "price":"10",
            "rennum":"12"
          },
          {
            "src":"http://www.epicc.com.cn/wap/views/personelCenter/index/images/EAJ.png",
            "title":"安心防癌",
            "describe":"低至10元/年,续保有宽限期,中青年人群专属",
            "price":"10",
            "rennum":"12"
          },
          {
            "src":"http://www.epicc.com.cn/wap/views/personelCenter/index/images/JTN.png",
            "title":"安心防癌",
            "describe":"低至10元/年,续保有宽限期,中青年人群专属",
            "price":"10",
            "rennum":"12"
          },
          {
            "src":"http://www.epicc.com.cn/wap/views/personelCenter/index/images/YEJ.png",
            "title":"安心防癌",
            "describe":"低至10元/年,续保有宽限期,中青年人群专属",
            "price":"10",
            "rennum":"12"
          }
        ],
        navlist:["推荐","少儿","成人","父母","家庭"]
      }
   }

       render() { 
           let {homelist,navlist} = this.state
           return (
            <div className="homecont">
                <Nav navlist={navlist}></Nav>
                <List homelist={homelist}></List>
           </div>
           )
       }
 }

export default Home
