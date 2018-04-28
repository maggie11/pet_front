import React, { Component } from 'react'
import { Icon } from 'antd'
import './TopTitle.css'

class TopTitle extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    _setBack = () => {
        return <Icon type="caret-left" style={{ fontSize: 1, color: 'red' }}/>
    }

    render() {
        return (
            <div>
                <a>{this._setBack()}</a>
                {this.props.title}
            </div>
        )
    }
}

export default TopTitle