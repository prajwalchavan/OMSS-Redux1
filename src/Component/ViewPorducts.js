import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreated from '../actions/actions'

class ViewProducts extends Component {
    componentDidMount() {
        this.props.onGetProducts()
    }

    render() {
       let productsList=this.props.productsList.map((product)=>{
            return(
                <tr key={product.productId}>
                    <th>{product.productId}</th>
                    <td>{product.productName}</td>
                    <td>{product.category}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price}</td>
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
                                    <th scope="col">product ID</th>
                                    <th scope="col">product Name</th>
                                    <th scope="col">product Category</th>
                                    <th scope="col">product Quantity</th>
                                    <th scope="col">product Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productsList}
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        productsList:state.productsList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetProducts: () => {
          return  dispatch(actionCreated.getAllProducts())
        },
        clearState: () => {
          return  dispatch(actionCreated.clearState())

        }

    }

}


export default connect(mapStateToProps, mapDispatchToProps)(ViewProducts)