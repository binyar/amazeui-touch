/**
 * Coder: fmd
 * Date: 2016/9/22
 * Time: 22:06
 */
import React, {Component, PropTypes} from 'react'
import Picker from './Picker'
import {getDaysInMonth} from './utils/dateUtil'
class Datetime extends Component {
  constructor(props, state) {
    super(props, state)
    this.state = {
      selectDate: props.value,
      startYear: 1900,
      countYear: 200
    }
  }

  createItems(type, start, count) {
    let items = []
    let lengthes = new Array(count)
    for (let value of lengthes) {
      let item = {}
      switch (type) {
        case 'year':
          item.text = start + '年'
          break
        case 'month':
          item.text = start + '月'
          break
        case 'day':
          item.text = start + '日'
          break
        case 'hour':
        case 'minute':
        case 'second':
          item.text = start < 10 ? '0' + start : start
          break
        default:
          break
      }
      item.value = start
      items.push(item)
      start++
    }
    return items
  }

  createCols() {
    let {selectDate, startYear, countYear}=this.state
    const {hasDay, hasHour}=this.props
    let cols = []
    if (hasDay || (!hasDay && !hasHour)) {
      let years = {
        items: this.createItems('year', startYear, countYear),
        value: selectDate.getFullYear()
      }
      let monthes = {
        items: this.createItems('month', 1, 12),
        value: selectDate.getMonth() + 1
      }
      let days = {
        items: this.createItems('day', 1, getDaysInMonth(selectDate)),
        value: selectDate.getDate()
      }
      cols.push(years)
      cols.push(monthes)
      cols.push(days)
    }
    if (hasHour) {
      let hours = {
        items: this.createItems('hour', 0, 23),
        value: selectDate.getHours()
      }
      let minutes = {
        items: this.createItems('minute', 0, 59),
        value: selectDate.getMinutes()
      }
      let seconds = {
        items: this.createItems('second', 0, 59),
        value: selectDate.getSeconds()
      }
      let divider = {
        divider: true,
        content: ':'
      }
      cols.push(hours)
      cols.push(divider)
      cols.push(minutes)
      cols.push(divider)
      cols.push(seconds)
    }
    return cols
  }

  formatDate() {
    let d = this.state.selectDate
    const {hasHour, hasDay}=this.props
    const day = `${d.getFullYear()}-${this.formatNumber(d.getMonth() + 1)}-${this.formatNumber(d.getDate())}`
    const hour = `${this.formatNumber(d.getHours())}:${this.formatNumber(d.getMinutes())}:${this.formatNumber(d.getSeconds())}`
    let ret = ''
    if (hasDay) {
      ret += day
    }
    if (hasHour) {
      ret += ' ' + hour
    }
    return ret
  }

  formatNumber(num) {
    return num < 10 ? `0${num}` : num
  }

  handleChange(index, value) {
    let {selectDate}=this.state
    const {hasDay, hasHour}=this.props
    switch (index) {
      case 0:
        if (hasDay) selectDate.setYear(value)
        else selectDate.setHours(value)
        break
      case 1:
        if (hasDay) selectDate.setMonth(value - 1)
        break
      case 2:
        if (hasDay) selectDate.setDate(value)
        else selectDate.setMinutes(value)
        break
      case 3:
        if (hasHour) selectDate.setHours(value)
        break
      case 4:
        if (hasHour) selectDate.setSeconds(value)
        break
      case 5:
        selectDate.setMinutes(value)
        break
      case 7:
        selectDate.setSeconds(value)
        break
      default:
        break
    }
    this.setState({
      selectDate: selectDate
    })
  }

  reset() {
    this.setState({
      selectDate: new Date()
    })
  }

  render() {
    return (<div>
      <Picker cols={this.createCols()}
              content={this.formatDate()}
              onChange={this.handleChange.bind(this)}
              reset={this.reset.bind(this)}
              btn4Right="今天"
      />
    </div>)
  }
}
Datetime.propTypes = {
  hasDay: PropTypes.bool.isRequired,
  hasHour: PropTypes.bool.isRequired,
  value: PropTypes.object
}
Datetime.defaultProps = {
  hasDay: true,
  hasHour: true,
  value: new Date()
}
export default Datetime
