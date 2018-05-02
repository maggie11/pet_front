import React, { Component } from 'react'
import { Icon, Layout, Menu, Button } from 'antd'
import TopTitle from '../../components/TopTitle/TopTitle'
import ShowList from '../../components/ShowList/ShowList'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <TopTitle title="首页"/>
                <ShowList requrl=""/>
            </div>
        )
    }
}

export default Home