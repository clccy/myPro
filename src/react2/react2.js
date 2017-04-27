/**
 * Created by Administrator on 2017/3/22.
 */
import React, {Component} from 'react';
// import superAgent from 'superagent'
import axios from 'axios';
// var name = 'React';
// const Vidtest = React.createClass({
//
//     propTypes:{
//        name:React.PropTypes.string.isRequired
//     },
//     render() {
//         return (
//             <div>
//                 <h3>hello {this.props.name}</h3>
//             </div>
//         )
//     }
// })
// const Reacttwo = React.createClass({
//     handleClick:function() {
//         this.refs.Input.focus();
//     },
//     render(){
//         return (
//             <div>
//                 <Vidtest name={name}/>
//                 <input type="text" ref="Input"/>
//                 <button onClick={this.handleClick}>点击我获取焦点</button>
//             </div>
//         )
//     }
// })


class FetchDemo extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            posts: []

        };

    }
    componentDidMount() {

        axios({
            method:'get',
            url:'https://gate-dev.cachemoment.com/api/v1/topology/world-topo',
            responseType:'stream'
        })
            .then(res => {

                const posts = res.data.data.children.map(obj => obj.data);

                this.setState({ posts });

            });

    }

    render() {

        return (

            <div>

                <ul>

                    123123{this.state.posts
                    }

                </ul>

            </div>

        );

    }

}

const Reacttwo = React.createClass({
    render(){
        return (
            <div>
                <FetchDemo />
            </div>
        )
    }
})

export default Reacttwo;