import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreated from '../actions/actions'

class ViewUsers extends Component {
    componentDidMount() {
        this.props.onGetUsers()
    }

    render() {
       let usersList=this.props.usersList.map((user)=>{
            return(
                <tr key={user.userId}>
                    <th>{user.userId}</th>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.password}</td>
                    <td>{user.mailId}</td>
                    <td>{user.mobileNo}</td>
                    <td>{user.address}</td>
                </tr>
            )
        })
        return (
             <div>
                    <div className="trn-table-div">
                        <h2>{this.props.returnedMessage}</h2>
                        <table className="table table-info trn-table">
                            <thead>
                                <tr>
                                    <th scope="col">user ID</th>
                                    <th scope="col">user FirstName</th>
                                    <th scope="col">user LastName</th>
                                    <th scope="col">user Password</th>
                                    <th scope="col">user Mail ID</th>
                                    <th scope="col">user Mobile No</th>
                                    <th scope="col">user Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usersList}
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usersList:state.usersList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetUsers: () => {
          return  dispatch(actionCreated.getAllUsers())
        },
        clearState: () => {
          return  dispatch(actionCreated.clearState())

        }

    }

}


export default connect(mapStateToProps, mapDispatchToProps)(ViewUsers)