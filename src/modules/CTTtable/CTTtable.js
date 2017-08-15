import React,{Component} from 'react'
import { Table, Icon } from 'antd';
import './CTTtable.css'

const COLUMNS = {
    _id: '日期',
    bao_ming_ci_shu:'报名次数',
    ting_ke_ren_shu:'听课人数',
    ting_ke_ci_shu: '听课次数',
    xiang_qing_pv: '课程详情页浏览次数',
    xiang_qing_uv: '课程详情页浏览人数',
    shou_ru:'收入'
}

class CTTtable extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
          columns:[],
          dataSource:[]
        }
    }
    handlData() {
    }
    render(){
      const columns = []
      for(let k in COLUMNS){
        let tem = {
          title: COLUMNS[k],
          dataIndex:k,
          key:k,
        }
        if(k === 'date') {
          tem.fixed = 'left'
          tem.sorter= (a, b) => {
            return a.data_time-b.data_time
          };
        }
        if(k !== 'date') {
          tem.sorter= (a, b) => {
            return a[k]-b[k]
          };
        }
        columns.push(tem)
      }
      let temData = this.props.data.allData.map((item,index)=>{
        item.key = index
        return item
      })
      return(
          <div>
            <Table
              columns={columns}
              dataSource={temData}
              onChange={this.onChange}
              pagination={false}
              scroll={{ x:'120%'}}
            />
          </div>
      )
    }
}
export default CTTtable
