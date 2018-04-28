import React from 'react';
import ReactDOM from 'react-dom'
import { HashRouter, Route, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'
import { Layout } from 'antd'

const loading = () => <div>加载中</div>

const Home = Loadable({
    loader: () => import('./pages/Home/Home'),
    loading
})

const Message = Loadable({
    loader: () => import('./pages/Message/Message'),
    loading
})

const UserInfo = Loadable({
    loader: () => import('./pages/UserInfo/UserInfo'),
    loading
})

ReactDOM.render(
    <HashRouter>
        <Layout
            style={{
                padding: '24px',
                minHeight: '900px',
                overflow: 'auto',
            }}
        >
            <Route path="/" render={() => <Redirect to={`/home`}/>} />
            <Route path="/home" component={Home} />
        </Layout>
    </HashRouter>, document.getElementById('root')
);
