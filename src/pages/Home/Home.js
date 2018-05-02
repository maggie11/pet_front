import React, { Component } from 'react'
import { Icon, Layout, Menu, Button } from 'antd'
import TopTitle from '../../components/TopTitle/TopTitle'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TopTitle title="首页"/>
        )
    }
}

export default Home