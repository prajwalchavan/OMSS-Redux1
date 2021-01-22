import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import {connect} from 'react-redux'
// import {withRouter} from 'react-router-dom'
// import *  as actionCreators from '../actions/actions'

class AddToCart extends Component {
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
           <h1><center><p className="text-uppercase">Add Products to Cart</p></center></h1>
        <div className="table-responsive">
                        <table className="table">
                            <tbody>
                                <tr>
    <td><label for="cartid" className="col-sm-4 col-form-label">Cart ID</label></td>
  <td><input type="number" 
    className="form-control" 
    id="cartid" 
    name="cartid"/></td>
    </tr>
    <tr><td><label for="userID" className="col-sm-4 col-form-label">User ID</label></td>
    <td>
    <input type="number" 
    className="form-control" 
    id="userID" 
    name="userID"/>
    </td>
    </tr>
 
<tr>
<td>    <label for="pID" className="col-sm-4 col-form-label">Product ID</label> </td>

 <td>
    <input type="number" 
    className="form-control" 
    id="pID" 
    name="pID"/>
   </td>
</tr>


  <tr>    
   <td> <label for="pname" className="col-sm-4 col-form-label">Product Name</label></td>
   <td>
    <input type="text" 
    className="form-control" 
    id="pname" 
    name="pname"/>
    </td>
 </tr>

 <tr><td><label for="pquantity" className="col-sm-4 col-form-label">Product Quantity</label></td>
    
   <td>
    <input type="number" 
    className="form-control" 
    id="pquantity" 
    name="pquantity"/>
    </td>
    </tr>
    <tr>
        <td>  <label for="total" className="col-sm-4 col-form-label">Total Amount</label></td>
   
 <td>
    <input type="number" 
    className="form-control" 
    id="total" 
    name="total"/>
    </td>
    </tr>
</tbody>
</table>
<button type="submit" className="btn btn-primary">Place Order</button>
</div>
</div>
          
        )
    }
}

export default AddToCart