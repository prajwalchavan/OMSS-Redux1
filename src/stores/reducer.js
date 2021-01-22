
import * as actionCreators from '../actions/actions'

const initialState = {
      usersList: [],
      productsList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionCreators.GET_ALL_USERS:
            let listOfUsers = action.data;
            console.log(action.data)
            console.log('List of Users')
            console.log(listOfUsers)
            return {
                usersList: listOfUsers
            }

        case actionCreators.GET_ALL_PRODUCTS:
            let listOfProducts = action.data;
            console.log(action.data)
            console.log('List of Products')
            console.log(listOfProducts)
            return {
            productsList: listOfProducts
            }

        case actionCreators.ADD_USER:
            let listAfterAddition = action.data.usersList;
            console.log(action.data)
            console.log('Addition of User')
            console.log(listAfterAddition)
            return {
                usersList: listAfterAddition
            }
        case actionCreators.ADD_PRODUCT:
            let listAfterAdditionOfprdt = action.data;
            console.log(action.data)
            console.log('Addition of Product')
            console.log(listAfterAdditionOfprdt)
            return {
                productsList: listAfterAdditionOfprdt
            }

        case actionCreators.CLEAR_STATE:
            return {
                usersList: [],
                productsList: []
            }

        default:
            return state
    }
}

export default reducer;
