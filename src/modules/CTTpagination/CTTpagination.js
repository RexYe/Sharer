import React,{Component} from 'react'
import { Pagination } from 'antd';
import './CTTpagination.css'

class CTTpagination extends Component {
    constructor(props, context) {
        super(props, context)
    }
    onChange=(page_num)=> {
      window.emitter.emit('change', {
        page_num:page_num
      })
    }
    render(){
      let dt = this.props.data
      return(
        <div>
          <div className="Paginationchange">
            <Pagination
              simple current={+dt.page_num}
              total={+dt.total}
              pageSize={+dt.page_size}
              onChange={this.onChange}
            />
          </div>
        </div>
      )
    }
}
export default CTTpagination
