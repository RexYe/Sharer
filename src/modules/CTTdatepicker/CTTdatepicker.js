import React,{Component} from 'react'
import { DatePicker } from 'antd';
import moment from 'moment';
import './CTTdatepicker.css'
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
class CTTdatepicker extends Component {
    constructor(props,context){
      super(props,context);
      this.state = {
          start:moment().subtract(7, 'days').format(dateFormat),
          end:moment().format(dateFormat)
      }
    }
    onChange(date, dateString) {
      window.emitter.emit('change000', {
        start_time:date[0],
        end_time:date[1],
        page_num:1
      })
    }
    disabledDate(current) {
        //禁止选择未来时间
        return current && current.valueOf() > Date.now();
    }
    render() {
      const dt = this.props.data
        return(
          <div className="datepicker">
            <RangePicker
              size = 'large'
              value={[moment(dt.start_time),moment(dt.end_time)]}
              format={dateFormat}
              onChange={this.onChange.bind(this)}
              disabledDate={this.disabledDate.bind(this)}
            />
          </div>
        )
    }
}
export default CTTdatepicker
