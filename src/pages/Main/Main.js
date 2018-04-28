import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import Loadable from 'react-loadable'

const Home = Loadable({
    loader: () => import('@pages/Home')
})

const Message = Loadable({
    loader: () =>  import('@pages/Message')
})

const UserInfo = Loadable({
    loader: () => import('@pages/UserInfo')
})

class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Layout>
                <HashRouter>
                    <Route path = '/' render = { () => <Redirect to = { `/home` }/> }/>
                    <Route path = '/home' component = {Home} />
                    <Route path = '/message' component = {Message} />
                    <Route path = '/userinfo' component = {UserInfo} />
                </HashRouter>
            </Layout>
        )
    }
}

export default Main