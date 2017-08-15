import React,{Component} from 'react'
import { Select } from 'antd';
import CTEtabs from '../../modules/CTEtabs'
import CTErecents from '../../modules/CTErecents'
import CTEdatepicker from '../../modules/CTEdatepicker'
import CTEecharts from '../../modules/CTEecharts'
import moment from 'moment'
import './CourseTotalEcharts.css'

const TITLEMAP = {
  bao_ming_ci_shu:'报名次数',
  ting_ke_ren_shu:'听课人数',
  ting_ke_ci_shu: '听课次数',
}

class CourseTotalEcharts extends Component {
    constructor(props,context){
      super(props,context);
        this.state = {
          host: 'https://coulson.xiaobao100.com',
          start_time:moment().subtract(7, 'days').valueOf(), //默认最近七天
          end_time:moment().valueOf(),
          tab:{
            key:'bao_ming_ci_shu',
            title:'报名次数'
          },
          allData:[],
          handlData:[]
        }
      const t = this;
      window.emitter.addListener('change', function(obj) {
          t.setState(obj,()=>{
            if(!obj.tab) {
              t.send()
            }
          })
      })
    }

    componentDidMount(){
      this.send()
    }
    send() {
      const t = this;
      fetch(`${t.state.host}/api/analysis/course?start_time=${t.state.start_time}&end_time=${t.state.end_time}`)
      .then(re=>re  .json())
      .then(function(result){
        if(result.success === true) {
            let dt = result.data;
            let handlData = []
            let {list = []} = result.data
            if(list && list.length){
                let obj = list[0]
                for(let k in TITLEMAP){
                    handlData.push({
                      title: TITLEMAP[k],
                      key:k,
                      val: obj[k]
                    })
                }
            }
            t.setState({
              tab:{
                key:'bao_ming_ci_shu',
                title:'报名次数',
              },
              allData:dt.list,
              handlData:handlData
            })
          }
        })
    }
    render() {
        return(
            <div >
              <div>
                <CTEtabs choosed={this.state.tab} list={this.state.handlData}/>
              </div>
              <div className="ztfx border_ccc">
                <div className="coursetotal-echarts-head">
                  <CTErecents data={this.state}/>
                  <CTEdatepicker data={this.state}/>
                </div>
                <div className="ztfx-b">
                  <CTEecharts data={this.state}/>
                </div>
              </div>
            </div>
        )
    }
}
export default CourseTotalEcharts
