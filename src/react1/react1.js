/**
 * Created by Administrator on 2017/3/22.
 */
import React,{Component} from 'react';
const Reactone = React.createClass({
    getInitialState:function(){
        return {value: 'Hello Runoob!'};
    },
    handleChange:function(event) {
        console.log(this);
        this.setState({value:event.target.value})
    },
    render () {
        var value = this.state.value;
        return (
            <div>
                <input type="text" value={value} onChange={this.handleChange}/>
                <h3>{value}</h3>
            </div>
        )
    }
})
// class Reactone extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {value: 'Hello chan'};
//     // }
//     getInitialState=()=> {
//     return {value: 'Hello Runoob!'};
//    }
//     handleChange=(event)=> {
//         console.log(this)
//         this.setState({value:event.target.value})
//     }
//     render () {
//         var value = this.state.value;
//         return (
//             <div>
//                 <input type="text" value={value} onChange={this.handleChange}/>
//                 <h3>{value}</h3>
//             </div>
//         )
//     }
// }
export default Reactone;









