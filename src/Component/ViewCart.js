import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import {connect} from 'react-redux'
// import {withRouter} from 'react-router-dom'
// import *  as actionCreators from '../actions/actions'

class ViewCart extends Component {
    constructor(props) {
        super(props)
        this.state={
          cartId:'',
          userId:'',
          productId:'',
          productName:'',
          quantity:'',
          totalAmount:''
      }
    }
    render() {
        return (
            <div>
           
<form>

<h1><center><p className="text-uppercase">Cart Details</p></center></h1>
<div className="form-group row">
<label for="userID" className="col-sm-4 col-form-label"> Enter UserID to Fetch Details</label>
    <div className="col-sm-6"> 
    <input type="number" 
    className="form-control" 
    id="userID" 
    name="userID"/>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Fetch</button>
  <div>----------------</div>
  <div className="form-group row">
  <label for="cartid" className="col-sm-4 col-form-label">Cart ID</label>
  <div className="col-sm-6">  
    <input type="number" 
    className="form-control" 
    id="cartid" 
    name="cartid"/>
  
 </div>
  </div>

  <div className="form-group row">
    <label for="pID" className="col-sm-4 col-form-label">Product ID</label>
    <div className="col-sm-6"> 
    <input type="number" 
    className="form-control" 
    id="pID" 
    name="pID"/>
    </div>
  </div>

  <div className="form-group row">
    <label for="pname" className="col-sm-4 col-form-label">Product Name</label>
    <div className="col-sm-6"> 
    <input type="text" 
    className="form-control" 
    id="pname" 
    name="pname"/>
  </div>
  </div>
  <div className="form-group row">
    <label for="pquantity" className="col-sm-4 col-form-label">Product Quantity</label>
    <div className="col-sm-6"> 
    <input type="number" 
    className="form-control" 
    id="pquantity" 
    name="pquantity"/>
  </div>
  </div>
  <div className="form-group row">
    <label for="total" className="col-sm-4 col-form-label">Total Amount</label>
    <div className="col-sm-6"> 
    <input type="number" 
    className="form-control" 
    id="total" 
    name="total"/>
  </div>  
  </div>
</form>
            </div>
        )
    }
}

export default ViewCart