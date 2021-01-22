import axios from 'axios'
export const GET_ALL_USERS = 'GET_ALL_USERS'
export const ADD_USER = 'ADD_USER'
export const CLEAR_STATE = 'CLEAR_STATE'
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
export const ADD_PRODUCT = 'ADD_PRODUCT'
// const BASE_URL = 'http://localhost:8080'


const getAllUsersAction = (data) => {
    return {
        type: GET_ALL_USERS,
        data
    }
}
export const getAllUsers = () => {
    return (dispatch) => {
        axios.get('http://localhost:8080/Admin/getAllUsers')
            .then((response) => {
                dispatch(getAllUsersAction(response.data))
                console.log(response.data);
                
            })
    }
}


const getAllProductsAction = (data) => {
    return {
        type: GET_ALL_PRODUCTS,
        data
    }
}
export const getAllProducts = () => {
    return (dispatch) => {
        axios.get('http://localhost:8080/getProducts')
            .then((response) => {
                dispatch(getAllProductsAction(response.data))
                console.log(response.data);
                
            })
    }
}


const addUserAction = (data) => {
    return {
        type: ADD_USER,
        data
    }
}
export const addUser = (newUser) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/User/RegisterUser', newUser)
            .then((response) => {
                alert("Trainee Sucessfully added")
                console.log(response.data)
                dispatch(addUserAction(response.data))
            })
    }
}

const addProductAction = (data) => {
    return {
        type: ADD_PRODUCT,
        data
    }
}
export const addProduct = (newProduct) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/Admin/ProductAdd', newProduct)
            .then((response) => {
                alert("Product Sucessfully added")
                console.log(response.data)
                dispatch(addProductAction(response.data))
            })
    }
}

//action to clear state
const clearStateAction = (data) => {
    return {
        type: CLEAR_STATE,
        data
    }
}

//clear state function
export const clearState = () => {
    return (dispatch) => {
        dispatch(clearStateAction())
    }
}





