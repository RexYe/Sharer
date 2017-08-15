import React,{Component} from 'react'
import './CTEtabs.css'

class TabMenu extends Component {
    constructor(props, context) {
        super(props, context)
    }
    change(key,title) {
        window.emitter.emit('change', {
          tab:{
            key:key,
            title:title,
          }
        })
    }
    render(){
      let t = this;
        return (
          <div className="tab ai-center">
            <div className="tab-body bd-ccc">
              <div className="flex-h">
                {
                  t.props.list.map((l, index) => {
                    return <div key={index} className="flex1">
                      <div className={this.props.choosed.key === l.key?"tab-t active":'tab-t'}
                        onClick={this.change.bind(this,l.key,l.title)}>
                        {l.title}
                      </div>
                    </div>
                  })
                }
              </div>
            </div>
          </div>
        )
    }
}
export default TabMenu
