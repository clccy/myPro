/**
 * Created by apple on 2017/4/26.
 */
import React,{Component} from 'react';
// import $ from 'jquery';
import axios from 'axios';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get('/api/v1/product_trails')
            .then(res => {
                const posts = res.data.data.children.map(obj => obj.data);
                this.setState({ posts });
            });
    }

    render () {
        return (
            <div>
                <h1>数据节点列表</h1>
                <ul>
                    {this.state.posts.map(post =>
                        <li >{post.code}</li>
                    )}
                </ul>
            </div>
        )
    }
}
export default Home;
