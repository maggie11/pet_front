import React, { Component } from 'react'
import { List, Avatar, Button, Spin } from 'antd'

class ShowList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            loadingMore: false,
            showLoadingMore: true,
            data: []
        }
    }

    componentDidMount() {
        this.setState({
            loading: false,
            data: [{name: {last: 'y'}}]
        });
    }

    render() {
        let {loading, loadMore, data} = this.state;
        return (
            <List 
                className="demo-loadmore-list"
                loading={loading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={data}
                renderItem={item => (
                    <List.Item actions={[<a>more</a>]}>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{item.name.last}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                        <div>content</div>
                    </List.Item>
                )}
            >
            </List>
        )
    }
}

export default ShowList