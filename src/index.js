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
        <Layout>
            <Route path="/" exact render={() => <Redirect to={`/home`}/>} />
            <Route path="/home" component={Home} />
            <Route path="/message" component={Message} />
        </Layout>
    </HashRouter>, document.getElementById('root')
);
