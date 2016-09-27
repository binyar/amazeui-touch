/**
 * Coder: fmd
 * Date: 2016/9/22
 * Time: 22:06
 */
import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'
import Trigger from './Trigger'
import {getDaysInMonth} from './utils/dateUtil'
import '../scss/components/_datetime.scss'
class Datetime extends Component {
  constructor(props, state) {
    super(props, state)
    this.state = {
      top: 0,
      perItemHeight: 0,
      count: 7,
      selectDate: new Date(),
      yearTop: 0
    }
  }

  componentDidMount() {

  }

  handleClick() {

  }

  createYear() {
    let lengths = new Array(200)
    let beginYear = 1900
    let years = []
    for (let value of lengths) {
      let item = (
        <div
          className="datetime-wrapper-main-col-item"
          style={{
            height: this.state.perItemHeight
          }}
          key={beginYear}
        >
          {beginYear}
        </div>
      )
      years.push(item)
      beginYear++
    }
    return years
  }

  createMonth() {
    let monthes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return monthes.map((month)=> {
      return (<div
        className="datetime-wrapper-main-col-item"
        style={{
          height: this.state.perItemHeight
        }}
        key={month}
      >
        {month < 10 ? `0${month}` : month}
      </div>)
    })
  }

  createDay() {
    let days = []
    for (let i = 1; i <= getDaysInMonth(this.state.selectDate); i++) {
      days.push(<div
        className="datetime-wrapper-main-col-item"
        style={{
          height: this.state.perItemHeight
        }}
        key={i}
      >
        {i < 10 ? `0${i}` : i}
      </div>)
    }
    return days
  }

  createHour() {
    let hours = []
    for (let i = 1; i < 24; i++) {
      hours.push(<div
        className="datetime-wrapper-main-col-item"
        style={{
          height: this.state.perItemHeight
        }}
        key={i}
      >
        {i}
      </div>)
    }
    return hours
  }

  createMinute() {
    let minutes = []
    for (let i = 1; i < 60; i++) {
      minutes.push(<div
        className="datetime-wrapper-main-col-item"
        style={{
          height: this.state.perItemHeight
        }}
        key={i}
      >
        {i}
      </div>)
    }
    return minutes
  }

  createSecond() {
    let seconds = []
    for (let i = 1; i < 60; i++) {
      seconds.push(<div
        className="datetime-wrapper-main-col-item"
        style={{
          height: this.state.perItemHeight
        }}
        key={i}
      >
        {i}
      </div>)
    }
    return seconds
  }

  handleOpen() {
    const self = this
    let {count}=this.state
    let perItemHeight = (this.refs.main.offsetHeight - this.refs.header.offsetHeight) / count
    setTimeout(()=> {
      self.setState({
        perItemHeight: perItemHeight,
        top: 3 * perItemHeight
      })
    }, 1)
  }

  render() {
    let {top, perItemHeight}=this.state
    return (<div>
      <Trigger
        closeOnOutsideClick
        openByClickOn={<div>Button</div>}
        onOpen={this.handleOpen.bind(this)}
      >
        <div className="datetime" ref="main">
          <header className="datetime-header" ref="header">
            <button className="datetime-header-button">{`确定`}</button>
          </header>
          <div className="datetime-main" ref="wrapper">

            <div className="datetime-main-col">
              <div className="datetime-main-col-wrapper">
                {this.createYear()}
              </div>
            </div>

            <div className="datetime-main-col divider">
              {`-`}
            </div>


            <div className="datetime-main-col">
              <div className="datetime-main-col-wrapper">
                {this.createMonth()}
              </div>
            </div>

            <div className="datetime-main-col divider">
              {`-`}
            </div>

            <div className="datetime-main-col">
              <div className="datetime-main-col-wrapper">
                {this.createDay()}
              </div>
            </div>


            <div className="datetime-main-col divider">
              {``}
            </div>

            <div className="datetime-main-col">
              <div className="datetime-main-col-wrapper">
                {this.createHour()}
              </div>
            </div>

            <div className="datetime-main-col divider">
              {`:`}
            </div>

            <div className="datetime-main-col">
              <div className="datetime-main-col-wrapper">
                {this.createMinute()}
              </div>
            </div>

            <div className="datetime-main-col divider">
              {`:`}
            </div>

            <div className="datetime-main-col">
              <div className="datetime-main-col-wrapper">
                {this.createSecond()}
              </div>
            </div>

            <div className="datetime-main-ighlight">

            </div>

          </div>

        </div>
      </Trigger>
    </div>)
  }
}
Datetime.propTypes = {}
Datetime.defaultProps = {}
export default Datetime
