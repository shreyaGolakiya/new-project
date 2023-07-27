import { Component } from "react";


class UserTable extends Component {
    constructor(){
        super();
        this.state = {
            number : 37,
            arr : []
        }

        setInterval(() => {
            // this.state.number = this.state.number+1
            // console.log(this.state.number)
            // this.setState({number : this.state.number})
            this.state.arr.push(4354)
            console.log(this.state.arr)
            this.setState({arr : [...this.state.arr]})
        }, 1000);
    }

    render(){
        return (
            <>
                <h5>Number : {this.state.number}</h5>
                <h5>Array : {this.state.arr}</h5>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                </table>
            </>
        )
    }
}

export default UserTable