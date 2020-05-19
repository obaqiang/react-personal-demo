import React, { Component } from 'react'

import './address.css'
class Address extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '苏州市工业园区新发路'
        }
    }
    render() {
        return (
            <div>
                <img className="address_icon" src="http://eshop.iomchina.com/miniprogram/images/common/address.png" alt="地址"/>
                <span className="address_text font-size-16">{this.state.text}</span>
            </div>
        )
    }
}
export default Address