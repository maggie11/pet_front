import React, { Component } from 'react'
import { Icon, Layout } from 'antd'
import './Home.css'

import TopTitle from '../../components/TopTitle/TopTitle'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Layout>
                <Icon type="question" style={{ fontSize: 16, color: '#08c' }} />
                111
            </Layout>
        )
    }
}

export default Home