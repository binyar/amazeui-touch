/**
 * Coder: fmd
 * Date: 2016/10/5
 * Time: 20:38
 */
import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'
import Trigger from './Trigger'
import '../scss/components/_picker.scss'
class Picker extends Component {
  constructor(props, state) {
    super(props, state)
    this.moving = false
    this.state = {
      perItemHeight: 0,
      count: 5,
      cols: props.cols
    }
  }

  shouldComponentUpdate() {
    return !this.moving
  }

  componentWillReceiveProps(nextProps) {
    let {cols, perItemHeight}=this.state
    cols = cols.map((col, index)=> {
      if (!col.divider) {
        col.items = nextProps.cols[index].items.slice(0)
        col.value = nextProps.cols[index].value
        let targetIndex = 0
        col.items.map((item, index)=> {
          if (item.value === col.value) {
            targetIndex = index
          }
        })
        col.top = -(targetIndex - 2) * perItemHeight
      }
      return col
    })
    this.setState({
      cols: cols
    })
  }

  /**
   * 创建某列数据的DOM
   * @param type
   * @param start
   * @param count
   * @param shouldFormat
   * @returns {Array}
   */
  createColItems(col) {
    let {perItemHeight}=this.state
    return col.items.map((item, key)=> {
      return (<div
        className={classnames({
          "picker-main-col-wrapper-item": true,
          "active": col.value === item.value
        })}
        style={{
          height: perItemHeight
        }}
        key={key}
      >
        {item.text}
      </div>)
    })
  }

  /**
   * 处理控件被创建时的样式
   */
  handleOpen() {
    const self = this
    let {count, cols}=this.state
    //每一个选项的高度
    let perItemHeight = (this.refs.main.offsetHeight - this.refs.header.offsetHeight) / count
    setTimeout(()=> {
      //选择器的展开动画
      this.refs.main.style.transform = 'scaleY(1)';
      cols = cols.map((col)=> {
        if (!col.divider) {
          let targetIndex = 0
          col.items.map((item, index)=> {
            if (item.value === col.value) targetIndex = index
          })
          col.top = -(targetIndex - 2) * perItemHeight
        }
        return col
      })
      self.setState({
        perItemHeight: perItemHeight,
        cols: cols
      })
    }, 1)
  }

  handleTouchStart(index, e) {
    e.preventDefault();
    let {cols} = this.state
    let ret = cols[index]
    ret.touchStartTop = e.touches[0].clientY
    //开始累加滑动距离的Y轴位置
    ret.beginTop = ret.top
    cols[index] = ret
    this.moving = false
    this.timing = +new Date()
    this.setState({
      cols: cols
    })
  }

  handleTouchMove(index, e) {
    this.moving = true
    //滑动的距离
    e.preventDefault();
    let {cols}=this.state
    let ret = cols[index]
    let distance = e.targetTouches[0].clientY - ret.touchStartTop
    ret.top = distance + ret.beginTop
    //如果滑动距离的绝对值小于某个数（200），不触发滑动的延迟动画，滑动多少就“瞬间”移动多少
    let timing = Math.abs(distance) < 200 ? '0ms' : '300ms'
    e.currentTarget.childNodes[0].style = 'transform:translate3d(0,' + ret.top + 'px,0);transition-duration:' + timing + ';'
    cols[index] = ret
    this.setState({
      cols: cols
    })
  }

  handleTouchEnd(index, e) {
    this.moving = false
    let {cols, perItemHeight}=this.state
    let ret = cols[index]
    let negMaxTop = (ret.items.length - 3) * perItemHeight
    let timing = (+new Date()) - this.timing < 300 ? '0ms' : '200ms'
    let top = Math.abs(ret.top)
    let targetTop = ret.top
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
    if (targetTop > 0) {
      ret.value = ret.items[2 - Math.round(Math.abs(targetTop) / perItemHeight)].value
    } else {
      ret.value = ret.items[Math.round(Math.abs(targetTop) / perItemHeight) + 2].value
    }
    ret.top = targetTop
    cols[index] = ret
    this.setState({
      cols: cols
    }, ()=> {
      this.props.onChange(index, ret.value)
    })
    e.currentTarget.childNodes[0].style = 'transform:translate3d(0,' + ret.top + 'px,0);transition-duration:' + timing + ';'
  }

  handleClose(e, func) {
    this.refs.main.style.transform = 'scaleY(0)'
    setTimeout(()=> {
      func()
    }, 300)
  }

  reset() {
    this.props.reset()
  }

  render() {
    let {cols}=this.state
    return (<div>
      <Trigger
        closeOnOutsideClick
        openByClickOn={<div className="picker-result">{this.props.content}</div>}
        onOpen={this.handleOpen.bind(this)}
        beforeClose={this.handleClose.bind(this)}
      >
        <div className="picker" ref="main">
          <header className="picker-header" ref="header">
            <button className="picker-header-button"
                    onClick={this.reset.bind(this)}
            >{this.props.btn4Right}</button>
          </header>
          <div className="picker-main" ref="wrapper">
            {
              cols.map((col, index)=> {
                if (col.divider) {
                  return (<div className="picker-main-divider"
                               key={index}
                  >
                    {col.content}
                  </div>)
                } else {
                  return (<div
                    style={{
                      width: col.width + 'rem'
                    }}
                    className="picker-main-col"
                    onTouchStart={this.handleTouchStart.bind(this, index)}
                    onTouchMove={this.handleTouchMove.bind(this, index)}
                    onTouchEnd={this.handleTouchEnd.bind(this, index)}
                    key={index}
                  >
                    <div className="picker-main-col-wrapper" style={{
                      transform: 'translateY(' + col.top + 'px)'
                    }}
                    >
                      {this.createColItems(col)}
                    </div>
                  </div>)
                }
              })
            }
            <div className="picker-main-highlight"></div>
          </div>
        </div>
      </Trigger>
    </div>)
  }
}
Picker.propTypes = {}
Picker.defaultProps = {}
export default Picker
