import React,{Component} from 'react'
import CourseTotalIndex from '../../modules/CourseTotalIndex'
import CourseTotalEcharts from '../../modules/CourseTotalEcharts'
import CourseTotalTable from '../../modules/CourseTotalTable'
import moment from 'moment'
import './CourseTotal.css'
var {EventEmitter} = require('fbemitter')
window.emitter = new EventEmitter()

const TITLEMAP = {
    bao_ming_ci_shu:'报名次数',
    ting_ke_ren_shu:'听课人数',
    "ting_ke_ci_shu": '听课次数',
    "shou_ru":'收入'
}

class CourseTotal extends Component {
	constructor(props,context) {
		super(props,context)
    this.state = {
      host: 'https://coulson.xiaobao100.com',
      start_time:moment().subtract(1, 'days').valueOf(),
      end_time:moment().valueOf(),
      zhibiaoData: [],
    }
	}
  componentDidMount(){
    this.send()
  }
  send(){
      const t = this;
      fetch(`${t.state.host}/api/analysis/course?start_time=${t.state.start_time}&end_time=${t.state.end_time}`)
      .then(re=>re.json())
      .then(function(result){
        if(result.success === true){
            let {list = []} = result.data
            let obj
            if(list && list.length){
                obj = list[0] || {}
            }
            t.setState({
                zhibiaoData:obj
            })
        }
      })
    }

	render() {
    let t = this
		return (
      <div className="coursetotalcontainer">
        <div>
          <div className="coursetotalfx">课程汇总分析</div>
          <div>
            <CourseTotalIndex titleList={TITLEMAP} list={this.state.zhibiaoData}/>
          </div>
        </div>
        <div>
          <CourseTotalEcharts/>
        </div>
        <div>
          <CourseTotalTable/>
        </div>
      </div>
		)
	}
}
export default CourseTotal
