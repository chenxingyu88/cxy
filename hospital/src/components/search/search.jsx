import React, { Component } from 'react';
import './search.less';
import FindList from './components/FindList' 



function List(props){
    let {findlist} = props;
    return (
        <ul className="list">
          {
            findlist.map((items,index)=>{
               return <FindList findlist={items} key={index}></FindList>
            })          
          }         
        </ul>
    )
}

class Search extends Component {
    constructor(props){
      super(props)
      this.state={
        findlist:[
            {
            "title":"保险课堂",
            "list":[
                      {
                        "title":"太平洋保险半小时完成京昆高速秦岭隧道",
                        "cont":"8月12日上午，太平洋保险警用30分钟就完成了8.15京昆高速发部分撒不符合第三轮",
                        "src":"http://www.epicc.com.cn/Picc_MobSale/characteristicProductCfg/imageService?img=3400a85620477147714a6b7f82b16904dcb.jpg"          
                      },
                      {
                        "title":"太平洋保险半小时完成京昆高速秦岭隧道",
                        "cont":"8月12日上午，太平洋保险警用30分钟就完成了8.15京昆高速发部分撒不符合第三轮",
                        "src":"http://www.epicc.com.cn/Picc_MobSale/characteristicProductCfg/imageService?img=96660a85620468756875bdd4ec7c9aabe35.jpg"          
                      }
                   ]
            },
             {
            "title":"专家视频",
            "list":[
                      {
                        "title":"太平洋保险半小时完成京昆高速秦岭隧道",
                        "cont":"8月12日上午，太平洋保险警用30分钟就完成了8.15京昆高速发部分撒不符合第三轮",
                        "src":"http://www.epicc.com.cn/Picc_MobSale/characteristicProductCfg/imageService?img=50680a8562033f4e3f4e61cf4b50f4625a3a.png"          
                      },
                      {
                        "title":"太平洋保险半小时完成京昆高速秦岭隧道",
                        "cont":"8月12日上午，太平洋保险警用30分钟就完成了8.15京昆高速发部分撒不符合第三轮",
                        "src":"http://www.epicc.com.cn/Picc_MobSale/characteristicProductCfg/imageService?img=3400a85620477147714a6b7f82b16904dcb.jpg"          
                      }
                   ]
            }      
        ]
      }
   }
       render() { 
         let {findlist} = this.state
           return (
            <div className="Findcont">
                 <List findlist={findlist}></List>
           </div>
           )
       }
 }

export default Search