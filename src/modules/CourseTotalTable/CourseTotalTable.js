import React,{Component} from 'react'
import CTTdatepicker from '../../modules/CTTdatepicker'
import CTTtable from '../../modules/CTTtable'
import CTTpagination from '../../modules/CTTpagination'
import moment from 'moment'
import './CourseTotalTable.css'
const COLUMNS = {
    date:'日期',
    lei_ji_yong_hu:'累计用户数',
    xin_zeng_yon_ghu:'新增用户使用',
    ri_huo_ren_shu:'日活人数',
    zhou_huo_ren_shu: '周活人数',
    bao_ming_ci_shu:'报名次数',
    ting_ke_ren_shu:'听课人数'
}
//
// bao_ming_ci_shu:'报名次数',
//  ting_ke_ren_shu:'听课人数',
//  "_id": '日期',
//  "ting_ke_ci_shu": '听课次数',
//  "xiang_qing_pv": '课程详情页浏览次数',
//  "xiang_qing_uv": '课程详情页浏览人数',
//  "shou_ru":'收入'
class CourseTotalTable extends Component {
    constructor(props,context){
        super(props,context);
          this.state = {
            allData:[],
            host: 'https://coulson.xiaobao100.com',
            start_time:moment().subtract(7, 'days').valueOf(),
            end_time:moment().valueOf(),
            page_num:1,
            page_size:15,
            total:0,
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
      send(){
          const t = this;
          fetch(`${t.state.host}/api/analysis/course?start_time=${t.state.start_time}&end_time=${t.state.end_time}&page_num=${t.state.page_num}&page_size=${t.state.page_size}`)
          .then(res=>res.json())
          .then(function(result){
            if(result.success=== true) {
                let dt = result.data;
                let tableData = []
                let {list=[]} = result.data
                if(list && list.length){
                    let obj = list[0]
                    for(let k in COLUMNS){
                        tableData.push({
                            title: COLUMNS[k],
                            dataIndex:k,
                            key:k
                        })
                    }
                }
                t.setState({
                  tableData:dt.tableData,
                  allData:dt.list,
                  page_num:dt.page_num,
                  page_size:dt.page_size,
                  total:dt.total,
                })
              }
            })
      }
      render() {
        return(
          <div className="ztfc">
            <div className="ztfx bd_ccc">
              <div className="coursetotal-echarts-head">
                <CTTdatepicker data={this.state}/>
              </div>
              <div className="kchzfx-table">
                <CTTtable data={this.state} list={this.state.tableData}/>
              </div>
              <div className="kchzfx-pagination flex-h">
                <CTTpagination data={this.state}/>
              </div>
            </div>
          </div>
        )
      }
}
export default CourseTotalTable
