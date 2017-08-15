import React,{Component} from 'react'
import { Select } from 'antd';
import moment from 'moment'
import './CTErecents.css'

const Option = Select.Option;
class CTErecents extends Component {
    constructor(props, context) {
        super(props, context)
    }
    handleChange(value) {
      window.emitter.emit('change', {
        start_time:moment().subtract(value, 'days').valueOf(),
        end_time:moment().valueOf(),
      })
    }
    render(){
      return(
          <div className='dateselector'>
            <Select defaultValue="最近7天"
              style={{ width: '140px'}}
              size = 'large'
              onSelect = {this.handleChange.bind(this)}
            >
              <Option value="7">最近7天</Option>
              <Option value="15">最近15天</Option>
              <Option value="30">最近30天</Option>
            </Select>
          </div>
      )
    }
}
export default CTErecents
