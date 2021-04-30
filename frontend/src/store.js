import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {ProductListReducer} from './Reducers/ProductListReducer'
import {ProductDetailsReducer} from './Reducers/ProductDetailsReducer'
const reducer = combineReducers({
    ProductList:ProductListReducer,
    ProductDetails:ProductDetailsReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;