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
    this.moving = false
    this.state = {
      perItemHeight: 0,
      count: 5,
      selectDate: new Date(),
      year: {
        top: 0,//距离顶部的位置
        touchStartTop: 0,//开始触摸的Y轴位置，用于计算滑动了多少距离
        beginTop: 0,//记录上次被触摸到的Y轴的位置，用于累加滑动的距离
        startYear: 1900,//最开始的年份
        yearCount: 200//年份数量：比如开始年份是1900，数量是200，那么结束的年份就是1900+200=2100
      },
      month: {
        top: 0,
        touchStartTop: 0,
        beginTop: 0
      },
      day: {
        top: 0,
        touchStartTop: 0,
        beginTop: 0
      },
      hour: {
        top: 0,
        touchStartTop: 0,
        beginTop: 0
      },
      minute: {
        top: 0,
        touchStartTop: 0,
        beginTop: 0
      },
      second: {
        top: 0,
        touchStartTop: 0,
        beginTop: 0
      }
    }
  }

  shouldComponentUpdate() {
    return !this.moving
  }

  componentDidMount() {

  }

  handleClick() {

  }

  /**
   * 创建某列数据的DOM
   * @param type
   * @param start
   * @param count
   * @param shouldFormat
   * @returns {Array}
   */
  createColItems(type, start, count, shouldFormat) {
    let {perItemHeight, selectDate}=this.state
    let lengths = new Array(count)
    let items = [], targetValue, ext
    switch (type) {
      case 'year':
        targetValue = selectDate.getFullYear()
        ext = '年'
        break;
      case 'month':
        targetValue = selectDate.getMonth() + 1
        ext = '月'
        break;
      case 'day':
        targetValue = selectDate.getDate()
        ext = '日'
        break;
      case 'hour':
        targetValue = selectDate.getHours()
        ext = ''
        break;
      case 'minute':
        targetValue = selectDate.getMinutes()
        ext = ''
        break;
      case 'second':
        targetValue = selectDate.getSeconds()
        ext = ''
        break;
      default:
        break
    }
    for (let value of lengths) {
      let item = (
        <div
          className={classnames({
            "datetime-main-col-wrapper-item": true,
            "active": targetValue === start
          })}
          style={{
            height: perItemHeight
          }}
          key={start}
        >
          {shouldFormat ? `${start < 10 ? '0' + start : start}` : `${start}${ext}`}
        </div>
      )
      items.push(item)
      start++
    }
    return items
  }

  /**
   * 处理日期控件被创建时的样式
   */
  handleOpen() {
    const self = this
    let {count, selectDate, year, month, day, hour, minute, second}=this.state
    let {startYear}=this.state.year
    //每一个选项的高度
    let perItemHeight = (this.refs.main.offsetHeight - this.refs.header.offsetHeight) / count
    setTimeout(()=> {
      //选择器的展开动画
      this.refs.main.style.transform = 'scaleY(1)'
      if (selectDate) {
        year.top = -(selectDate.getFullYear() - startYear - 2) * perItemHeight
        month.top = -(selectDate.getMonth() - 2) * perItemHeight
        day.top = -(selectDate.getDate() - 3) * perItemHeight
        hour.top = -(selectDate.getHours() - 3) * perItemHeight
        minute.top = -(selectDate.getMinutes() - 3) * perItemHeight
        second.top = -(selectDate.getSeconds() - 3) * perItemHeight
      }
      self.setState({
        perItemHeight: perItemHeight,
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second
      })
    }, 1)
  }

  changeTarget(target, ret, selectDate) {
    switch (target) {
      case 'year':
        this.setState({
          year: ret,
          selectDate: selectDate ? selectDate : this.state.selectDate
        })
        break
      case 'month':
        this.setState({
          month: ret,
          selectDate: selectDate ? selectDate : this.state.selectDate
        })
        break
      case 'day':
        this.setState({
          day: ret,
          selectDate: selectDate ? selectDate : this.state.selectDate
        })
        break
      case 'hour':
        this.setState({
          hour: ret,
          selectDate: selectDate ? selectDate : this.state.selectDate
        })
        break
      case 'minute':
        this.setState({
          minute: ret,
          selectDate: selectDate ? selectDate : this.state.selectDate
        })
        break
      case 'second':
        this.setState({
          second: ret,
          selectDate: selectDate ? selectDate : this.state.selectDate
        })
        break
      default:
        break
    }
  }

  handleTouchStart(target, e) {
    e.preventDefault();
    let ret = this.state[target]
    ret.touchStartTop = e.touches[0].clientY
    //开始累加滑动距离的Y轴位置
    ret.beginTop = ret.top
    this.moving = false
    this.timing = +new Date()
    this.changeTarget(target, ret)
  }

  handleTouchMove(target, e) {
    this.moving = true
    //滑动的距离
    e.preventDefault();
    let distance = e.targetTouches[0].clientY - this.state[target].touchStartTop
    let ret = this.state[target]
    ret.top = distance + ret.beginTop
    //如果滑动距离的绝对值小于某个数（200），不触发滑动的延迟动画，滑动多少就“瞬间”移动多少
    let timing = Math.abs(distance) < 200 ? '0ms' : '300ms'
    e.currentTarget.childNodes[0].style = 'transform:translate3d(0,' + ret.top + 'px,0);transition-duration:' + timing + ';'
    this.changeTarget(target, ret)
  }

  handleTouchEnd(target, negMaxTop, e) {
    this.moving = false
    let timing = (+new Date()) - this.timing < 500 ? '0ms' : '200ms'
    let top = Math.abs(this.state[target].top)
    let perItemHeight = this.state.perItemHeight
    let ret = this.state[target]
    let targetTop = ret.top
    let selectDate = this.state.selectDate
    let maxTop = perItemHeight * 2//最大距离顶部的正值
    /**
     * 距离顶部的余数，用于计算舍入上一个位置或者是下一个位置
     * @type {number}
     */
    let remainder = top % perItemHeight
    //超出了最大的正值距离，直接让其为最大正值距离
    if (targetTop > maxTop) {
      targetTop = maxTop
    }
    //出处了最大负值距离，直接让其值为最大负值
    else if (top > negMaxTop) {
      targetTop = -negMaxTop
    }
    //两个最大值之间的处理
    else {
      //向下滚动出了“边界”
      if (targetTop > 0) {
        /**
         * 如果余数小于每个Item的高度的一半的话，说明还没有进入下一个item，直接舍弃掉多余的余数；
         * 否则加上“相差”的部分补全，进入下一个item
         */
        if (remainder > perItemHeight / 2) {
          targetTop = targetTop + (perItemHeight - remainder)
        } else {
          targetTop = targetTop - remainder
        }
      }
      //边界内正常滚动
      else {
        if (remainder > perItemHeight / 2) {
          targetTop = targetTop - (perItemHeight - remainder)
        } else {
          targetTop = targetTop + remainder
        }
      }
    }
    /**
     * 取值，高度大于0的话说明其超出了顶部的边界
     */
    switch (target) {
      case 'year':
        if (targetTop > 0) {
          selectDate.setYear(ret.startYear - Math.round(Math.abs(targetTop) / perItemHeight) + 2)
        } else {
          selectDate.setYear(ret.startYear + Math.round(Math.abs(targetTop) / perItemHeight) + 2)
        }
        break
      case 'month':
        if (targetTop > 0) {
          selectDate.setMonth(2 - Math.round(Math.abs(targetTop) / perItemHeight))
        } else {
          selectDate.setMonth(Math.round(Math.abs(targetTop) / perItemHeight) + 2)
        }
        break
      case 'day':
        if (targetTop > 0) {
          selectDate.setDate(3 - Math.round(Math.abs(targetTop) / perItemHeight))
        } else {
          selectDate.setDate(Math.round(Math.abs(targetTop) / perItemHeight) + 3)
        }
        break
      case 'hour':
        if (targetTop > 0) {
          selectDate.setHours(3 - Math.round(Math.abs(targetTop) / perItemHeight))
        } else {
          selectDate.setHours(Math.round(Math.abs(targetTop) / perItemHeight) + 3)
        }
        break
      case 'minute':
        if (targetTop > 0) {
          selectDate.setMinutes(3 - Math.round(Math.abs(targetTop) / perItemHeight))
        } else {
          selectDate.setMinutes(Math.round(Math.abs(targetTop) / perItemHeight) + 3)
        }
        break
      case 'second':
        if (targetTop > 0) {
          selectDate.setSeconds(3 - Math.round(Math.abs(targetTop) / perItemHeight))
        } else {
          selectDate.setSeconds(Math.round(Math.abs(targetTop) / perItemHeight) + 3)
        }
        break
      default:
        break
    }
    ret.top = targetTop
    this.changeTarget(target, ret, selectDate)
    e.currentTarget.childNodes[0].style = 'transform:translate3d(0,' + ret.top + 'px,0);transition-duration:' + timing + ';'
  }

  handleClose(e, func) {
    this.refs.main.style.transform = 'scaleY(0)'
    setTimeout(()=> {
      func()
    }, 300)
  }

  formatNumber(num) {
    return num < 10 ? '0' + num : num
  }

  formatValue() {
    let {selectDate}=this.state
    return `${selectDate.getFullYear()}-${this.formatNumber(selectDate.getMonth() + 1)}-${this.formatNumber(selectDate.getDate())}
${this.formatNumber(selectDate.getHours())}:${this.formatNumber(selectDate.getMinutes())}:${this.formatNumber(selectDate.getSeconds())}`
  }

  render() {
    let {selectDate, year, month, day, hour, minute, second, perItemHeight}=this.state
    return (<div>
      <Trigger
        closeOnOutsideClick
        openByClickOn={<div className="datetime-result">{this.formatValue()}</div>}
        onOpen={this.handleOpen.bind(this)}
        beforeClose={this.handleClose.bind(this)}
      >
        <div className="datetime" ref="main">
          <header className="datetime-header" ref="header">
            <button className="datetime-header-button">{`今天`}</button>
          </header>
          <div className="datetime-main" ref="wrapper">

            <div
              className="datetime-main-col"
              onTouchStart={this.handleTouchStart.bind(this, 'year')}
              onTouchMove={this.handleTouchMove.bind(this, 'year')}
              onTouchEnd={this.handleTouchEnd.bind(this, 'year',
                perItemHeight * (year.yearCount - 3))}
            >
              <div className="datetime-main-col-wrapper" style={{
                transform: 'translate3d(0,' + year.top + 'px,0)'
              }}>
                {this.createColItems('year', year.startYear, year.yearCount, false)}
              </div>
            </div>

            <div
              className="datetime-main-col"
              onTouchStart={this.handleTouchStart.bind(this, 'month')}
              onTouchMove={this.handleTouchMove.bind(this, 'month')}
              onTouchEnd={this.handleTouchEnd.bind(this, 'month',
                perItemHeight * 9)}
            >
              <div className="datetime-main-col-wrapper" style={{
                transform: 'translate3d(0,' + month.top + 'px,0)'
              }}>
                {this.createColItems('month', 1, 12, false)}
              </div>
            </div>


            <div
              className="datetime-main-col"
              onTouchStart={this.handleTouchStart.bind(this, 'day')}
              onTouchMove={this.handleTouchMove.bind(this, 'day')}
              onTouchEnd={this.handleTouchEnd.bind(this, 'day',
                perItemHeight * (getDaysInMonth(selectDate) - 3))}
            >
              <div className="datetime-main-col-wrapper" style={{
                transform: 'translateY(' + day.top + 'px)'
              }}>
                {this.createColItems('day', 1, getDaysInMonth(selectDate), false)}
              </div>
            </div>


            <div
              className="datetime-main-col"
              onTouchStart={this.handleTouchStart.bind(this, 'hour')}
              onTouchMove={this.handleTouchMove.bind(this, 'hour')}
              onTouchEnd={this.handleTouchEnd.bind(this, 'hour',
                perItemHeight * 20)}
            >
              <div className="datetime-main-col-wrapper" style={{
                transform: 'translateY(' + hour.top + 'px)'
              }}>
                {this.createColItems('hour', 1, 23, true)}
              </div>
            </div>

            <div className="datetime-main-divider">
              {`:`}
            </div>

            <div className="datetime-main-col"
                 onTouchStart={this.handleTouchStart.bind(this, 'minute')}
                 onTouchMove={this.handleTouchMove.bind(this, 'minute')}
                 onTouchEnd={this.handleTouchEnd.bind(this, 'minute',
                   perItemHeight * 56)}
            >
              <div className="datetime-main-col-wrapper" style={{
                transform: 'translateY(' + minute.top + 'px)'
              }}>
                {this.createColItems('minute', 1, 59, true)}
              </div>
            </div>

            <div className="datetime-main-divider">
              {`:`}
            </div>

            <div className="datetime-main-col"
                 onTouchStart={this.handleTouchStart.bind(this, 'second')}
                 onTouchMove={this.handleTouchMove.bind(this, 'second')}
                 onTouchEnd={this.handleTouchEnd.bind(this, 'second',
                   perItemHeight * 56)}
            >
              <div className="datetime-main-col-wrapper" style={{
                transform: 'translateY(' + second.top + 'px)'
              }}>
                {this.createColItems('second', 1, 59, true)}
              </div>
            </div>

            <div className="datetime-main-highlight"></div>

          </div>

        </div>
      </Trigger>
    </div>)
  }
}
Datetime.propTypes = {}
Datetime.defaultProps = {}
export default Datetime
