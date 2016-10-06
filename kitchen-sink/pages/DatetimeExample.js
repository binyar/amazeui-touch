import React from 'react'
import Datetime from '../../js/Datetime'
const DatetimeExample = React.createClass({
  render() {
    return (
      <div>
        <label>{`日期时间`}</label>
        <Datetime hasDay={true} hasHour={true}/>
        <label>{`日期`}</label>
        <Datetime hasDay={true} hasHour={false}/>
        <label>{`时间`}</label>
        <Datetime hasDay={false} hasHour={true}/>
        <label>{`带默认值`}</label>
        <Datetime hasDay={true} hasHour={true} value={new Date(1879143511342)}/>
      </div>
    )
  }
})
export default DatetimeExample
