import React from 'react'
import Address from '../../js/Address'
const AddressExample = React.createClass({
  render() {
    return (
      <div>
        <label>{`省-市-区`}</label>
        <Address />
        <label>{`带默认值`}</label>
        <Address province="江苏省" city="无锡市" district="锡山区"/>
      </div>
    )
  }
})
export default AddressExample

