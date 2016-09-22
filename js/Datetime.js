/**
 * Coder: fmd
 * Date: 2016/9/22
 * Time: 22:06
 */
import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'
import Trigger from './Trigger'
import '../scss/components/_datetime.scss'

class Datetime extends Component {
  constructor(props, state) {
    super(props, state)
    this.state = {}
  }

  render() {
    return (<div>
      <Trigger closeOnOutsideClick openByClickOn={<div>Button</div>}>
        <div className="datetime">
          <div className="datetime-wrapper">
            {`asdf`}
          </div>
        </div>
      </Trigger>
    </div>)
  }
}
Datetime.propTypes = {}
Datetime.defaultProps = {}
export default Datetime
