import React, { Component } from 'react'
import { Icon, Row, Col } from 'antd'
import './TopTitle.css'

class TopTitle extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    _goBack = () => {
       window.history.go(-1);
    }

    render() {
        const backBtn = (
            <Icon type="caret-left" style={{ fontSize: 1, color: '#000' }} onClick={() => this._goBack()}/>
        )

        return (
            <Row className="container">
                <Col span={8}>{backBtn}</Col>
                <Col span={8}>{this.props.title}</Col>
                <Col span={8}></Col>
            </Row>
        )
    }
}

export default TopTitle