import React,{Component} from 'react'
import './CourseTotalIndex.css'
const {scinotation} = require('../../helper')

class CourseTotalIndex extends Component {
    constructor(props, context) {
        super(props, context)
          this.state = {
            handlData:[]
          }
    }
    render() {
        let t = this
        let arr = [{
          value:'报名次数',
          key:'bao_ming_ci_shu'
        },{
          value:'听课次数',
          key:'ting_ke_ci_shu'
        },{
          value: '听课人数',
          key:'ting_ke_ren_shu'
        }]
      return (
          <div className="yesterday border_ccc">
            <div className="yst-zb-cap">
              昨日关键指标
            </div>
            <div className="yst-zb-body flex-h ai-center">
              <div className="flex-h">
                {
                  arr.map((item, index) => {
                    return <div key={index} className="flex1">
                      <div className="yesterday-title">{item.value}</div>
                      <div className="yesterday-value">{t.props.list?(t.props.list[item.key]&&scinotation(t.props.list[item.key])):'-'}</div>
                    </div>
                  })
                }
              </div>
            </div>
          </div>
      )
    }
}

export default CourseTotalIndex
